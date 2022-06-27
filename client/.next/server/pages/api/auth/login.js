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
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/auth/login.js":
/*!*********************************!*\
  !*** ./pages/api/auth/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    await axios__WEBPACK_IMPORTED_MODULE_0___default().post(process.env.API_URL + \"/auth/login\", req.body).then((result)=>{\n        console.log(\"SUPER RESULT\", result.data);\n        return res.json({\n            status: result.data.status,\n            success: result.data.success,\n            message: result.data.message\n        });\n    }).catch((err)=>{\n        console.log(\"ERROR : \", err);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFMUIsNkJBQWUsMENBQWdCQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN2QyxNQUFNRixpREFDQyxDQUFDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxHQUFHLGFBQWEsRUFBRUwsR0FBRyxDQUFDTSxJQUFJLENBQUMsQ0FDbkRDLElBQUksQ0FBQyxDQUFDQyxNQUFNLEdBQUs7UUFDaEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsRUFBRUYsTUFBTSxDQUFDRyxJQUFJLENBQUMsQ0FBQztRQUN6QyxPQUFPVixHQUFHLENBQUNXLElBQUksQ0FBQztZQUNkQyxNQUFNLEVBQUVMLE1BQU0sQ0FBQ0csSUFBSSxDQUFDRSxNQUFNO1lBQzFCQyxPQUFPLEVBQUVOLE1BQU0sQ0FBQ0csSUFBSSxDQUFDRyxPQUFPO1lBQzVCQyxPQUFPLEVBQUVQLE1BQU0sQ0FBQ0csSUFBSSxDQUFDSSxPQUFPO1NBQzdCLENBQUMsQ0FBQztLQUNKLENBQUMsQ0FDREMsS0FBSyxDQUFDLENBQUNDLEdBQUcsR0FBSztRQUNkUixPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEVBQUVPLEdBQUcsQ0FBQyxDQUFDO0tBQzlCLENBQUMsQ0FBQztDQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3BhZ2VzL2FwaS9hdXRoL2xvZ2luLmpzPzEzMTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgYXdhaXQgYXhpb3NcbiAgICAucG9zdChwcm9jZXNzLmVudi5BUElfVVJMICsgXCIvYXV0aC9sb2dpblwiLCByZXEuYm9keSlcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlNVUEVSIFJFU1VMVFwiLCByZXN1bHQuZGF0YSk7XG4gICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICBzdGF0dXM6IHJlc3VsdC5kYXRhLnN0YXR1cyxcbiAgICAgICAgc3VjY2VzczogcmVzdWx0LmRhdGEuc3VjY2VzcyxcbiAgICAgICAgbWVzc2FnZTogcmVzdWx0LmRhdGEubWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgOiBcIiwgZXJyKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsInJlcSIsInJlcyIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiQVBJX1VSTCIsImJvZHkiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJjYXRjaCIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/login.js"));
module.exports = __webpack_exports__;

})();