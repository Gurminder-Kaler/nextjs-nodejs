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
exports.id = "pages/api/newsletter/getAllNewsletterEmails";
exports.ids = ["pages/api/newsletter/getAllNewsletterEmails"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/newsletter/getAllNewsletterEmails.js":
/*!********************************************************!*\
  !*** ./pages/api/newsletter/getAllNewsletterEmails.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    await axios__WEBPACK_IMPORTED_MODULE_0___default().post(process.env.API_URL + \"/newsletter/getAllNewsletterEmails\", req.body).then((result)=>{\n        return res.json({\n            status: result.data.status,\n            data: result.data.data,\n            success: result.data.success,\n            message: result.data.message\n        });\n    }).catch((err)=>{\n        console.log(\"ERROR\", err);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3c2xldHRlci9nZXRBbGxOZXdzbGV0dGVyRW1haWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQiw2QkFBZSwwQ0FBZ0JDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3ZDLE1BQU1GLGlEQUNDLENBQUNJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxPQUFPLEdBQUcsb0NBQW9DLEVBQUVMLEdBQUcsQ0FBQ00sSUFBSSxDQUFDLENBQzFFQyxJQUFJLENBQUMsQ0FBQ0MsTUFBTSxHQUFLO1FBQ2hCLE9BQU9QLEdBQUcsQ0FBQ1EsSUFBSSxDQUFDO1lBQ2RDLE1BQU0sRUFBRUYsTUFBTSxDQUFDRyxJQUFJLENBQUNELE1BQU07WUFDMUJDLElBQUksRUFBRUgsTUFBTSxDQUFDRyxJQUFJLENBQUNBLElBQUk7WUFDdEJDLE9BQU8sRUFBRUosTUFBTSxDQUFDRyxJQUFJLENBQUNDLE9BQU87WUFDNUJDLE9BQU8sRUFBRUwsTUFBTSxDQUFDRyxJQUFJLENBQUNFLE9BQU87U0FDN0IsQ0FBQyxDQUFDO0tBQ0osQ0FBQyxDQUNEQyxLQUFLLENBQUMsQ0FBQ0MsR0FBRyxHQUFLO1FBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBRUYsR0FBRyxDQUFDLENBQUM7S0FDM0IsQ0FBQyxDQUFDO0NBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vcGFnZXMvYXBpL25ld3NsZXR0ZXIvZ2V0QWxsTmV3c2xldHRlckVtYWlscy5qcz85ZjQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIGF3YWl0IGF4aW9zXG4gICAgLnBvc3QocHJvY2Vzcy5lbnYuQVBJX1VSTCArIFwiL25ld3NsZXR0ZXIvZ2V0QWxsTmV3c2xldHRlckVtYWlsc1wiLCByZXEuYm9keSlcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICBzdGF0dXM6IHJlc3VsdC5kYXRhLnN0YXR1cyxcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICAgICAgc3VjY2VzczogcmVzdWx0LmRhdGEuc3VjY2VzcyxcbiAgICAgICAgbWVzc2FnZTogcmVzdWx0LmRhdGEubWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJST1JcIiwgZXJyKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsInJlcSIsInJlcyIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiQVBJX1VSTCIsImJvZHkiLCJ0aGVuIiwicmVzdWx0IiwianNvbiIsInN0YXR1cyIsImRhdGEiLCJzdWNjZXNzIiwibWVzc2FnZSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/newsletter/getAllNewsletterEmails.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/newsletter/getAllNewsletterEmails.js"));
module.exports = __webpack_exports__;

})();