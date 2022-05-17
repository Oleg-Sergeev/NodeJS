import multer, { diskStorage } from 'multer';
import { extname as _extname } from 'path';

const photoFileTypes = /jpg|JPG|jpeg|JPEG|png|PNG|stl|STL|ipt|IPT|sldprt|SLDPRT/;

const storage = diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/models/');
    },
    filename: (req, file, cb) => {
        const suffix = `${Date.now()}_${Math.round(Math.random() * 100000)}_`;
        cb(null, suffix + file.originalname);
    }
});

function checkFileType(file, cb, regex, errorMsg) {
    const extname = regex.test(_extname(file.originalname).toLowerCase());
    
    if (extname) {
        return cb(null, true);
    } else {
        cb(errorMsg);
    }
}

const uploadPhoto = multer({
    storage: storage,
    fileFilter: (_req, file, cb) => {
        checkFileType(file, cb, photoFileTypes, 'Error: Images only!');
    },
}).any('photo', 'model');


export default {
    uploadPhoto
};