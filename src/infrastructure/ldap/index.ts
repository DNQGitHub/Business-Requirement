import { Request, Response, NextFunction } from 'express';
import qs from 'querystring';
import axios from 'axios';
import urlencode from 'urlencode';

const PRIVATE_KEY_PATH = './certs/privatekey.pem';
const CERTIFICATE_PATH = './certs/certificate.pem';

const PERMISSIONS: any = {
	admin: ['GET', 'POST', 'PUT', 'DELETE'],
	editor: ['GET', 'POST', 'PUT'],
	viewer: ['GET'],
	guest: [],
};

const LdapSso = require('ldapsso');

LdapSso.setPrivateKey(PRIVATE_KEY_PATH);
LdapSso.setPublicKey(CERTIFICATE_PATH);

LdapSso.getAppId = function () {
	return process.env.PROJECT_NAME;
};

LdapSso.getEnv = function () {
	return process.env.NODE_ENV;
};

LdapSso.getExtra = function () {
	return {};
};

LdapSso.getUserRole = function (username: string, req: Request) {
	if (process.env.NODE_ENV == 'local' || process.env.NODE_ENV == 'staging') {
		// get role for testing
		return req.headers.role || 'admin';
	}

	return 'guest';
};

// override verifyRole middleware
LdapSso.verifyRole = function (info: { role: string }, req: Request, res: Response, next: NextFunction) {
	if (info && PERMISSIONS[info.role] && PERMISSIONS[info.role].includes(req.method.toUpperCase())) {
		return next();
	}
	return next(new Error(`The user's role is not allowed to this behavior`));
};

////////////////////////////////////////////////////////////////////////////////////////

const getAuthServerUrl = async function () {
	let { data } = await axios({
		method: 'GET',
		url: 'http://vgold.gameloft.com:20000/locate?service=auth',
	});

	if (!!data === false) throw new Error('cannot connect to server');

	const serverUrl = data.indexOf('http') >= 0 ? data : data.indexOf('443') >= 0 ? `https://${data}` : `http://${data}`;

	return serverUrl;
};

LdapSso.authenticate = async function (username: string, password: string) {
	const serverUrl = await getAuthServerUrl();

	let response = await axios({
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		url: `${serverUrl}/users/ldap:${urlencode(username)}/authenticate`,
		data: qs.stringify({ password: password }),
	});

	if (response.status !== 200) throw new Error('authenticate fail');
};

// Middlewares
export function authorization() {
	return LdapSso.authorize;
}

export function tokenVerification(req: Request, res: Response, next: NextFunction) {
	const info = LdapSso.verifyToken(req, res, next);

	if (!!info === true) res.json(info);
}

export function permissionVerification() {
	return LdapSso.verify;
}

export default LdapSso;
