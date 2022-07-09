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
exports.id = "pages/api/newsletter/subscribeToNewsletter";
exports.ids = ["pages/api/newsletter/subscribeToNewsletter"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/newsletter/subscribeToNewsletter.js":
/*!*******************************************************!*\
  !*** ./pages/api/newsletter/subscribeToNewsletter.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    await axios__WEBPACK_IMPORTED_MODULE_0___default().post(process.env.API_URL + \"/newsletter/subscribeToNewsletter\", req.body).then((result)=>{\n        console.log(\"SUPER RESULT\", result.data);\n        return res.json({\n            status: result.data.status,\n            success: result.data.success,\n            message: result.data.message\n        });\n    }).catch((err)=>{\n        console.log(\"ERROR\", err);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3c2xldHRlci9zdWJzY3JpYmVUb05ld3NsZXR0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRTFCLDZCQUFlLDBDQUFnQkMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdkMsTUFBTUYsaURBQ0MsQ0FBQ0ksT0FBTyxDQUFDQyxHQUFHLENBQUNDLE9BQU8sR0FBRyxtQ0FBbUMsRUFBRUwsR0FBRyxDQUFDTSxJQUFJLENBQUMsQ0FDekVDLElBQUksQ0FBQyxDQUFDQyxNQUFNLEdBQUs7UUFDaEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsRUFBRUYsTUFBTSxDQUFDRyxJQUFJLENBQUMsQ0FBQztRQUN6QyxPQUFPVixHQUFHLENBQUNXLElBQUksQ0FBQztZQUNkQyxNQUFNLEVBQUVMLE1BQU0sQ0FBQ0csSUFBSSxDQUFDRSxNQUFNO1lBQzFCQyxPQUFPLEVBQUVOLE1BQU0sQ0FBQ0csSUFBSSxDQUFDRyxPQUFPO1lBQzVCQyxPQUFPLEVBQUVQLE1BQU0sQ0FBQ0csSUFBSSxDQUFDSSxPQUFPO1NBQzdCLENBQUMsQ0FBQztLQUNKLENBQUMsQ0FDREMsS0FBSyxDQUFDLENBQUNDLEdBQUcsR0FBSztRQUNkUixPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLEVBQUVPLEdBQUcsQ0FBQyxDQUFDO0tBQzNCLENBQUMsQ0FBQztDQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3BhZ2VzL2FwaS9uZXdzbGV0dGVyL3N1YnNjcmliZVRvTmV3c2xldHRlci5qcz82YmVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIGF3YWl0IGF4aW9zXG4gICAgLnBvc3QocHJvY2Vzcy5lbnYuQVBJX1VSTCArIFwiL25ld3NsZXR0ZXIvc3Vic2NyaWJlVG9OZXdzbGV0dGVyXCIsIHJlcS5ib2R5KVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU1VQRVIgUkVTVUxUXCIsIHJlc3VsdC5kYXRhKTtcbiAgICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICAgIHN0YXR1czogcmVzdWx0LmRhdGEuc3RhdHVzLFxuICAgICAgICBzdWNjZXNzOiByZXN1bHQuZGF0YS5zdWNjZXNzLFxuICAgICAgICBtZXNzYWdlOiByZXN1bHQuZGF0YS5tZXNzYWdlLFxuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJFUlJPUlwiLCBlcnIpO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxIiwicmVzIiwicG9zdCIsInByb2Nlc3MiLCJlbnYiLCJBUElfVVJMIiwiYm9keSIsInRoZW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImpzb24iLCJzdGF0dXMiLCJzdWNjZXNzIiwibWVzc2FnZSIsImNhdGNoIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/newsletter/subscribeToNewsletter.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/newsletter/subscribeToNewsletter.js"));
module.exports = __webpack_exports__;

})();