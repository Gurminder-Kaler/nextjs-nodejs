const app = require("express");
const router = app.Router();
const multer = require("multer");
const productController = require("@controllers/productController");

var fieldsArray = [];

const imgField = { name: "img", maxCount: 1 };

fieldsArray.push(imgField);

multer.diskStorage({
  destination: function (req, file, cb) {
    // files is the Upload_folder_name
    cb(null, "product/img");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".m3u");
  },
});

var upload = multer({ dest: "product/img" });

router.post(
  "/saveProduct",
  upload.fields(fieldsArray),
  productController.saveProduct
);

router.post(
  "/deleteProduct",
  productController.deleteProduct
);

router.post(
  "/updateProduct",
  upload.fields(fieldsArray),
  productController.updateProduct
);

router.post(
  "/getProductViaId",
  productController.getProductViaId
);

module.exports = router;
