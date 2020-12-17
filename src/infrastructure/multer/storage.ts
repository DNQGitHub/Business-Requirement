import Multer from 'multer';

export default Multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/uploads');
	},
	filename: function (req, file, cb) {
		cb(null, file.filename + '-' + Date.now());
	},
});
