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
exports.id = "pages/api/contact/getAllContactForms";
exports.ids = ["pages/api/contact/getAllContactForms"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/contact/getAllContactForms.js":
/*!*************************************************!*\
  !*** ./pages/api/contact/getAllContactForms.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    await axios__WEBPACK_IMPORTED_MODULE_0___default().post(process.env.API_URL + \"/contact/getAllContactForms\", req.body).then((result)=>{\n        return res.json({\n            status: result.data.status,\n            data: result.data.data,\n            success: result.data.success,\n            message: result.data.message\n        });\n    }).catch((err)=>{\n        console.log(\"ERROR\", err);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC9nZXRBbGxDb250YWN0Rm9ybXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRTFCLDZCQUFlLDBDQUFnQkMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdkMsTUFBTUYsaURBQ0MsQ0FBQ0ksT0FBTyxDQUFDQyxHQUFHLENBQUNDLE9BQU8sR0FBRyw2QkFBNkIsRUFBRUwsR0FBRyxDQUFDTSxJQUFJLENBQUMsQ0FDbkVDLElBQUksQ0FBQyxDQUFDQyxNQUFNLEdBQUs7UUFDaEIsT0FBT1AsR0FBRyxDQUFDUSxJQUFJLENBQUM7WUFDZEMsTUFBTSxFQUFFRixNQUFNLENBQUNHLElBQUksQ0FBQ0QsTUFBTTtZQUMxQkMsSUFBSSxFQUFFSCxNQUFNLENBQUNHLElBQUksQ0FBQ0EsSUFBSTtZQUN0QkMsT0FBTyxFQUFFSixNQUFNLENBQUNHLElBQUksQ0FBQ0MsT0FBTztZQUM1QkMsT0FBTyxFQUFFTCxNQUFNLENBQUNHLElBQUksQ0FBQ0UsT0FBTztTQUM3QixDQUFDLENBQUM7S0FDSixDQUFDLENBQ0RDLEtBQUssQ0FBQyxDQUFDQyxHQUFHLEdBQUs7UUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFRixHQUFHLENBQUMsQ0FBQztLQUMzQixDQUFDLENBQUM7Q0FDTiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9wYWdlcy9hcGkvY29udGFjdC9nZXRBbGxDb250YWN0Rm9ybXMuanM/NWM2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICBhd2FpdCBheGlvc1xuICAgIC5wb3N0KHByb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi9jb250YWN0L2dldEFsbENvbnRhY3RGb3Jtc1wiLCByZXEuYm9keSlcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICBzdGF0dXM6IHJlc3VsdC5kYXRhLnN0YXR1cyxcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICAgICAgc3VjY2VzczogcmVzdWx0LmRhdGEuc3VjY2VzcyxcbiAgICAgICAgbWVzc2FnZTogcmVzdWx0LmRhdGEubWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJST1JcIiwgZXJyKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsInJlcSIsInJlcyIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiQVBJX1VSTCIsImJvZHkiLCJ0aGVuIiwicmVzdWx0IiwianNvbiIsInN0YXR1cyIsImRhdGEiLCJzdWNjZXNzIiwibWVzc2FnZSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact/getAllContactForms.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact/getAllContactForms.js"));
module.exports = __webpack_exports__;

})();