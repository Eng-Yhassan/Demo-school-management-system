const multer = require("multer");

const UploadDocumnet = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null ,"document");
    },
    filename: (req,file,cb) => {
        cb(null , file.originalname);
    }
});

const StoreDocument = multer({
    storage:UploadDocumnet
});

module.exports = StoreDocument