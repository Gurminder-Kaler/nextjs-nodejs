const app = require("express");
const router = app.Router();
const multer = require("multer");

var fields = [];
let p = { name: "img", maxCount: 1 };
fields.push(p);

multer.diskStorage({
  destination: function (req, file, cb) {
    // files is the Upload_folder_name
    cb(null, "productCategory/img");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".m3u");
  },
});

var upload = multer({ dest: "productCategory/img" });

const productCategoryController = require("@controllers/productCategoryController");

router.post(
  "/saveProductCategory",
  upload.fields(fields),
  productCategoryController.saveProductCategory
);
router.post(
  "/deleteProductCategory",
  productCategoryController.deleteProductCategory
);
router.post(
  "/updateProductCategory",
  upload.fields(fields),
  productCategoryController.updateProductCategory
);
router.post(
  "/getProductCategoryViaId",
  productCategoryController.getProductCategoryViaId
);

module.exports = router;
