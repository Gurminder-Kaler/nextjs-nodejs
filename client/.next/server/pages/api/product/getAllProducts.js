"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/product/getAllProducts";
exports.ids = ["pages/api/product/getAllProducts"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/product/getAllProducts.js":
/*!*********************************************!*\
  !*** ./pages/api/product/getAllProducts.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    await axios__WEBPACK_IMPORTED_MODULE_0___default().post(process.env.API_URL + \"/product/getAllProducts\").then((result)=>{\n        return res.json({\n            status: result.data.status,\n            data: result.data.data,\n            success: result.data.success,\n            message: result.data.message\n        });\n    }).catch((err)=>{\n        console.log(\"ERROR\", err);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdC9nZXRBbGxQcm9kdWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFMUIsNkJBQWUsMENBQWdCQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN2QyxNQUFNRixpREFDQyxDQUFDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxHQUFHLHlCQUF5QixDQUFDLENBQ3JEQyxJQUFJLENBQUMsQ0FBQ0MsTUFBTSxHQUFLO1FBQ2hCLE9BQU9OLEdBQUcsQ0FBQ08sSUFBSSxDQUFDO1lBQ2RDLE1BQU0sRUFBRUYsTUFBTSxDQUFDRyxJQUFJLENBQUNELE1BQU07WUFDMUJDLElBQUksRUFBRUgsTUFBTSxDQUFDRyxJQUFJLENBQUNBLElBQUk7WUFDdEJDLE9BQU8sRUFBRUosTUFBTSxDQUFDRyxJQUFJLENBQUNDLE9BQU87WUFDNUJDLE9BQU8sRUFBRUwsTUFBTSxDQUFDRyxJQUFJLENBQUNFLE9BQU87U0FDN0IsQ0FBQyxDQUFDO0tBQ0osQ0FBQyxDQUNEQyxLQUFLLENBQUMsQ0FBQ0MsR0FBRyxHQUFLO1FBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBRUYsR0FBRyxDQUFDLENBQUM7S0FDM0IsQ0FBQyxDQUFDO0NBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vcGFnZXMvYXBpL3Byb2R1Y3QvZ2V0QWxsUHJvZHVjdHMuanM/MDY0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICBhd2FpdCBheGlvc1xuICAgIC5wb3N0KHByb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi9wcm9kdWN0L2dldEFsbFByb2R1Y3RzXCIpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgICAgc3RhdHVzOiByZXN1bHQuZGF0YS5zdGF0dXMsXG4gICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgICAgIHN1Y2Nlc3M6IHJlc3VsdC5kYXRhLnN1Y2Nlc3MsXG4gICAgICAgIG1lc3NhZ2U6IHJlc3VsdC5kYXRhLm1lc3NhZ2UsXG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVSUk9SXCIsIGVycik7XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJyZXEiLCJyZXMiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIkFQSV9VUkwiLCJ0aGVuIiwicmVzdWx0IiwianNvbiIsInN0YXR1cyIsImRhdGEiLCJzdWNjZXNzIiwibWVzc2FnZSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/product/getAllProducts.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/product/getAllProducts.js"));
module.exports = __webpack_exports__;

})();