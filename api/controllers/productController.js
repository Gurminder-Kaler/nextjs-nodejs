const {
    saveProductServiceFunc,
    getAllProductsServiceFunc,
    getProductViaIdServiceFunc,
    updateProductServiceFunc,
    deleteProductServiceFunc,
  } = require("@services/productService");
  
  exports.saveProduct = async (req, res) => {
    try {
      console.log("req product controller,", req.body);
      return await saveProductServiceFunc(req, res);
    } catch (err) {
      return res.json({
        status: 500,
        success: false,
        message: err,
      });
    }
  };
  
  exports.getProductViaId = async (req, res) => {
    try {
      console.log("req product controller,", req.body);
      return await getProductViaIdServiceFunc(req, res);
    } catch (err) {
      return res.json({
        status: 500,
        success: false,
        message: err,
      });
    }
  };
  
  exports.updateProduct = async (req, res) => {
    try {
      console.log("req product controller,", req.body);
      return await updateProductServiceFunc(req, res);
    } catch (err) {
      return res.json({
        status: 500,
        success: false,
        message: err,
      });
    }
  };
  
  exports.getAllProducts = async (req, res) => {
    try {
      console.log("req product controller,", req.body);
      return await getAllProductsServiceFunc(req, res);
    } catch (err) {
      return res.json({
        status: 500,
        success: false,
        message: err,
      });
    }
  };
  
  exports.deleteProduct = async (req, res) => {
    try {
      console.log("req product controller,", req.body);
      return await deleteProductServiceFunc(req, res);
    } catch (err) {
      return res.json({
        status: 500,
        success: false,
        message: err,
      });
    }
  };
  