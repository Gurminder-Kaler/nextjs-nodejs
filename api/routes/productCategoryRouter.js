const app = require("express");
const router = app.Router();
const multer = require("multer");
const productCategoryController = require("@controllers/productCategoryController");

var fieldsArray = [];

const imgField = { name: "img", maxCount: 1 };
const destination = "productCategory/img";

fieldsArray.push(imgField);

multer.diskStorage({
  destination: function (req, file, cb) {
    // files is the Upload_folder_name
    cb(null, destination);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

var upload = multer({ dest: destination });

router.post(
  "/saveProductCategory",
  upload.fields(fieldsArray),
  productCategoryController.saveProductCategory
);

router.post(
  "/deleteProductCategory",
  productCategoryController.deleteProductCategory
);

router.post(
  "/updateProductCategory",
  upload.fields(fieldsArray),
  productCategoryController.updateProductCategory
);

router.post(
  "/getAllProductCategories",
  productCategoryController.getAllProductCategories
);

router.post(
  "/getProductCategoryViaId",
  productCategoryController.getProductCategoryViaId
);

module.exports = router;
