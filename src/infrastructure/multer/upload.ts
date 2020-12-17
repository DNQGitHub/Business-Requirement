import Multer from 'multer';
import Storage from './storage';

export default Multer({ storage: Storage });
