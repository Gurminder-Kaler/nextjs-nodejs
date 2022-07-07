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
exports.id = "pages/api/auth/register";
exports.ids = ["pages/api/auth/register"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/auth/register.js":
/*!************************************!*\
  !*** ./pages/api/auth/register.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    await axios__WEBPACK_IMPORTED_MODULE_0___default().post(process.env.API_URL + \"/auth/register\", req.body).then((result)=>{\n        console.log(\"SUPER RESULT\", result.data);\n        return res.json({\n            status: result.data.status,\n            token: result.data.token,\n            user: result.data.data,\n            success: result.data.success,\n            message: result.data.message\n        });\n    }).catch((err)=>{\n        console.log(\"ERROR : \", err);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFMUIsNkJBQWUsMENBQWdCQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN2QyxNQUFNRixpREFDQyxDQUFDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxHQUFHLGdCQUFnQixFQUFFTCxHQUFHLENBQUNNLElBQUksQ0FBQyxDQUN0REMsSUFBSSxDQUFDLENBQUNDLE1BQU0sR0FBSztRQUNoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxFQUFFRixNQUFNLENBQUNHLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU9WLEdBQUcsQ0FBQ1csSUFBSSxDQUFDO1lBQ2RDLE1BQU0sRUFBRUwsTUFBTSxDQUFDRyxJQUFJLENBQUNFLE1BQU07WUFDMUJDLEtBQUssRUFBRU4sTUFBTSxDQUFDRyxJQUFJLENBQUNHLEtBQUs7WUFDeEJDLElBQUksRUFBRVAsTUFBTSxDQUFDRyxJQUFJLENBQUNBLElBQUk7WUFDdEJLLE9BQU8sRUFBRVIsTUFBTSxDQUFDRyxJQUFJLENBQUNLLE9BQU87WUFDNUJDLE9BQU8sRUFBRVQsTUFBTSxDQUFDRyxJQUFJLENBQUNNLE9BQU87U0FDN0IsQ0FBQyxDQUFDO0tBQ0osQ0FBQyxDQUNEQyxLQUFLLENBQUMsQ0FBQ0MsR0FBRyxHQUFLO1FBQ2RWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsRUFBRVMsR0FBRyxDQUFDLENBQUM7S0FDOUIsQ0FBQyxDQUFDO0NBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vcGFnZXMvYXBpL2F1dGgvcmVnaXN0ZXIuanM/YzdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICBhd2FpdCBheGlvc1xuICAgIC5wb3N0KHByb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi9hdXRoL3JlZ2lzdGVyXCIsIHJlcS5ib2R5KVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU1VQRVIgUkVTVUxUXCIsIHJlc3VsdC5kYXRhKTtcbiAgICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICAgIHN0YXR1czogcmVzdWx0LmRhdGEuc3RhdHVzLFxuICAgICAgICB0b2tlbjogcmVzdWx0LmRhdGEudG9rZW4sXG4gICAgICAgIHVzZXI6IHJlc3VsdC5kYXRhLmRhdGEsXG4gICAgICAgIHN1Y2Nlc3M6IHJlc3VsdC5kYXRhLnN1Y2Nlc3MsXG4gICAgICAgIG1lc3NhZ2U6IHJlc3VsdC5kYXRhLm1lc3NhZ2UsXG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIDogXCIsIGVycik7XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJyZXEiLCJyZXMiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIkFQSV9VUkwiLCJib2R5IiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwianNvbiIsInN0YXR1cyIsInRva2VuIiwidXNlciIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiY2F0Y2giLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/register.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/register.js"));
module.exports = __webpack_exports__;

})();