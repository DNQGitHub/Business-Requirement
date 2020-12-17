import Multer from 'multer';
import fs from 'fs-extra';

export default Multer.diskStorage({
	destination: function (req, file, cb) {
		const uploadDir = 'public/uploads';
		if (!fs.pathExistsSync(uploadDir)) fs.mkdirSync(uploadDir);
		cb(null, uploadDir);
	},
	filename: function (req, file, cb) {
		console.log(file);
		const fileName = Date.now() + '-' + file.originalname;
		cb(null, fileName);
	},
});
