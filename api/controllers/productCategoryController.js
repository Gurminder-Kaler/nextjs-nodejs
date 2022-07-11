const {
  saveProductCategoryServiceFunc,
  getAllProductCategoriesServiceFunc,
  getProductCategoryViaIdServiceFunc,
  updateProductCategoryServiceFunc,
  deleteProductCategoryServiceFunc,
} = require("@services/productCategoryService");

exports.saveProductCategory = async (req, res) => {
  try {
    console.log("req product category controller,", req.body);
    return await saveProductCategoryServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

exports.getProductCategoryViaId = async (req, res) => {
  try {
    console.log("req product category controller,", req.body);
    return await getProductCategoryViaIdServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

exports.updateProductCategory = async (req, res) => {
  try {
    console.log("req product category controller,", req.body);
    return await updateProductCategoryServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

exports.getAllProductCategories = async (req, res) => {
  try {
    console.log("req product category controller,", req.body);
    return await getAllProductCategoriesServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

exports.deleteProductCategory = async (req, res) => {
  try {
    console.log("req product category controller,", req.body);
    return await deleteProductCategoryServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};
