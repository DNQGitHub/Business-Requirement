import axios from 'axios';
import qs from 'querystring';

export default class Recaptcha {
	public static async validate(secretKey: string, captchaToken: string) {
		const { data } = await axios({
			method: 'POST',
			url: 'https://www.google.com/recaptcha/api/siteverify',
			data: qs.stringify({
				secret: secretKey,
				response: captchaToken,
			}),
		});

		if (!!data === false) {
			throw new Error('request verify captcha fail');
		}

		if (!!data.success === false) {
			throw new Error(data);
		}

		if (data.score < 0.3) {
			throw new Error('captcha bot detected');
		}
	}
}
