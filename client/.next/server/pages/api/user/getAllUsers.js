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
exports.id = "pages/api/user/getAllUsers";
exports.ids = ["pages/api/user/getAllUsers"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/user/getAllUsers.js":
/*!***************************************!*\
  !*** ./pages/api/user/getAllUsers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    await axios__WEBPACK_IMPORTED_MODULE_0___default().post(process.env.API_URL + \"/user/getAllUsers\").then((result)=>{\n        console.log(\"result get all users file\", result);\n        return res.json({\n            status: result.data.status,\n            data: result.data.data,\n            success: result.data.success,\n            message: result.data.message\n        });\n    }).catch((err)=>{\n        console.log(\"ERROR\", err);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9nZXRBbGxVc2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFMUIsNkJBQWUsMENBQWdCQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN2QyxNQUFNRixpREFDQyxDQUFDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxHQUFHLG1CQUFtQixDQUFDLENBQy9DQyxJQUFJLENBQUMsQ0FBQ0MsTUFBTSxHQUFLO1FBQ2hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRUYsTUFBTSxDQUFDLENBQUM7UUFDakQsT0FBT04sR0FBRyxDQUFDUyxJQUFJLENBQUM7WUFDZEMsTUFBTSxFQUFFSixNQUFNLENBQUNLLElBQUksQ0FBQ0QsTUFBTTtZQUMxQkMsSUFBSSxFQUFFTCxNQUFNLENBQUNLLElBQUksQ0FBQ0EsSUFBSTtZQUN0QkMsT0FBTyxFQUFFTixNQUFNLENBQUNLLElBQUksQ0FBQ0MsT0FBTztZQUM1QkMsT0FBTyxFQUFFUCxNQUFNLENBQUNLLElBQUksQ0FBQ0UsT0FBTztTQUM3QixDQUFDLENBQUM7S0FDSixDQUFDLENBQ0RDLEtBQUssQ0FBQyxDQUFDQyxHQUFHLEdBQUs7UUFDZFIsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFTyxHQUFHLENBQUMsQ0FBQztLQUMzQixDQUFDLENBQUM7Q0FDTiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9wYWdlcy9hcGkvdXNlci9nZXRBbGxVc2Vycy5qcz81YTBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIGF3YWl0IGF4aW9zXG4gICAgLnBvc3QocHJvY2Vzcy5lbnYuQVBJX1VSTCArIFwiL3VzZXIvZ2V0QWxsVXNlcnNcIilcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygncmVzdWx0IGdldCBhbGwgdXNlcnMgZmlsZScsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICBzdGF0dXM6IHJlc3VsdC5kYXRhLnN0YXR1cyxcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEuZGF0YSxcbiAgICAgICAgc3VjY2VzczogcmVzdWx0LmRhdGEuc3VjY2VzcyxcbiAgICAgICAgbWVzc2FnZTogcmVzdWx0LmRhdGEubWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRVJST1JcIiwgZXJyKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsInJlcSIsInJlcyIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiQVBJX1VSTCIsInRoZW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwianNvbiIsInN0YXR1cyIsImRhdGEiLCJzdWNjZXNzIiwibWVzc2FnZSIsImNhdGNoIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/getAllUsers.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/getAllUsers.js"));
module.exports = __webpack_exports__;

})();