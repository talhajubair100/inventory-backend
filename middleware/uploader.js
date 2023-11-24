const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: "images/",
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname)
    }
})

const uploader = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
        const supported = /png|jpg|jpeg|gif|svg|webp/;
        const extensions = path.extname(file.originalname);
        if (supported.test(extensions)) {
            cb(null, true)
        } else {
            cb(new Error("Invalid file type"), false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 5
    }
 });

 module.exports = uploader;
