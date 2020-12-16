const fs = require('fs-extra');
const childProcess = require('child_process');

const copiedFiles = {};

try {
	fs.removeSync('./dist/');

	for (const srcFilename in copiedFiles) {
		const destFilename = copiedFiles[srcFilename];

		if (fs.existsSync(srcFilename)) {
			const destPath = destFilename.substring(0, destFilename.lastIndexOf('/'));

			if (fs.pathExistsSync(destPath) === false) fs.mkdirSync(destPath, { recursive: true });

			fs.copyFileSync(srcFilename, destFilename);
		}
	}

	childProcess.execSync('tsc --build tsconfig.prod.json');
} catch (err) {
	// eslint-disable-next-line no-console
	console.log(err);
}
