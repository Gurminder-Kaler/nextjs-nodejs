var fields = [];
let p = { name: "file", maxCount: 1 };
fields.push(p);
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // files is the Upload_folder_name
    cb(null, "files");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".m3u");
  },
});

var upload = multer({ dest: "files" })
// If you do not want to use diskStorage then uncomment it

// Define the maximum size for uploading
// picture i.e. 1 MB. it is optional
const maxSize = 1 * 1000 * 1000;