const messages = require("@constants/messages");
const ProductCategory = require("@models/productCategoryModel");
const isEmpty = require("@validations/is-empty");
const saveProductCategoryValidator = require("@validations/productCategoryValidator/saveProductCategoryValidator");
// // const updateProductCategoryValidator = require("@validations/productCategoryValidator/updateProductCategoryValidator");
const mongoose = require("mongoose");

//save Product Category
const saveProductCategoryServiceFunc = async (req, res) => {
  const { errors, isValid } = saveProductCategoryValidator(req.body);
  if (!isValid) {
    return res.json({
      status: 400,
      success: false,
      message: errors,
    });
  }
  ProductCategory.findOne({
    title: req.body.title,
  }).then((duplicate) => {
    if (duplicate) {
      return res.json({
        status: 400,
        success: false,
        message: messages.FAILURE.PRODUCT_CATEGORY_TITLE_TAKEN,
      });
    }
  });
  console.log("img files", req.files);
  let extension =
    req.files &&
    req.files.img[0] &&
    req.files.img[0].mimetype.split("image/")[1];
  let category = new ProductCategory({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    img: req.files && req.files.img[0].path + "." + extension,
  });
  category.save().then((result) => {
    return res.json({
      status: 200,
      success: true,
      message: messages.SUCCESS.PRODUCT_CATEGORY.SAVED,
      data: result,
    });
  });
};

//delete a product category
const deleteProductCategoryServiceFunc = async (req, res) => {
  console.log("req.body ", req.body);
  const updateFields = {};
  updateFields.deletedAt = new Date();
  ProductCategory.findOneAndUpdate(
    { _id: req.body.id },
    { $set: { deletedAt: new Date() } },
    { new: true },
    (error, doc) => {
      if (!error) {
        ProductCategory.find({ deletedAt: null })
          .exec()
          .then((docs) => {
            return res.json({
              status: 200,
              count: docs.length,
              data: docs.map((doc) => {
                return {
                  _id: doc && doc._id,
                  title: doc && doc.title,
                  createdAt: doc && doc.createdAt,
                  updatedAt: doc && doc.updatedAt,
                };
              }),
            });
          })
          .catch((err) => {
            res.json({
              status: 500,
              success: false,
              message: err,
            });
          });
      } else {
        res.json({
          status: 404,
          success: false,
          message: messages.FAILURE.SWW,
        });
      }
      console.log(doc);
    }
  ).catch((err) => {
    res.json({
      status: 500,
      success: false,
      message: err,
    });
  });
};

//update Product Category
const updateProductCategoryServiceFunc = async (req, res) => {
  // const { errors, isValid } = updateProductCategoryValidator(req.body);
  // if (!isValid) {
  //   return res.json({
  //     status: 400,
  //     success: false,
  //     message: errors,
  //   });
  // }
  const category = new ProductCategory({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    img: req.body.img,
  });
  category.update().then((result) => {
    return res.json({
      status: 200,
      success: true,
      message: messages.SUCCESS.PRODUCT_CATEGORY.UPDATED,
      data: result,
    });
  });
};

//get single product Category via Id
const getProductCategoryViaIdServiceFunc = async (req, res) => {
  console.log("req.body", req.body);
  ProductCategory.find({ _id: req.body.id })
    .exec()
    .then((doc) => {
      if (doc) {
        return res.json({
          message: messages.SUCCESS.PRODUCT_CATEGORY.SAVED,
          status: 200,
          data: doc,
        });
      } else {
        return res.json({
          message: messages.FAILURE.PRODUCT_CATEGORY_NOT_FOUND,
          status: 404,
          data: doc,
        });
      }
    })
    .catch((err) => {
      return res.json({
        status: 500,
        success: false,
        message: err,
      });
    });
};

//get All product Categories
const getAllProductCategoriesServiceFunc = async (req, res) => {
  ProductCategory.find()
    .exec()
    .then((docs) => {
      return res.json({
        status: 200,
        count: docs.length,
        data: docs.map((doc) => {
          return {
            _id: doc && doc._id,
            title: doc && doc.title,
            slug: doc && doc.slug,
            img: doc && doc.img,
            createdAt: doc && doc.createdAt,
            updatedAt: doc && doc.updatedAt,
            deletedAt: doc && doc.deletedAt,
          };
        }),
      });
    })
    .catch((err) => {
      return res.json({
        status: 500,
        success: false,
        message: err,
      });
    });
};

module.exports = {
  saveProductCategoryServiceFunc,
  updateProductCategoryServiceFunc,
  getAllProductCategoriesServiceFunc,
  getProductCategoryViaIdServiceFunc,
  deleteProductCategoryServiceFunc,
};
