"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./validations/checkRegex.js":
/*!***********************************!*\
  !*** ./validations/checkRegex.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar checkRegex = function(regex, email) {\n    var check = regex.test(email);\n    console.log(\"KKKK\", check);\n    return check;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (checkRegex);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92YWxpZGF0aW9ucy9jaGVja1JlZ2V4LmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFNQSxVQUFVLEdBQUcsU0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUs7SUFDbkMsSUFBTUMsS0FBSyxHQUFHRixLQUFLLENBQUNHLElBQUksQ0FBQ0YsS0FBSyxDQUFDO0lBQy9CRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVILEtBQUssQ0FBQyxDQUFDO0lBQzNCLE9BQU9BLEtBQUssQ0FBQztDQUNkO0FBRUQsK0RBQWVILFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi92YWxpZGF0aW9ucy9jaGVja1JlZ2V4LmpzP2RiZTEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2hlY2tSZWdleCA9IChyZWdleCwgZW1haWwpID0+IHtcbiAgY29uc3QgY2hlY2sgPSByZWdleC50ZXN0KGVtYWlsKTtcbiAgY29uc29sZS5sb2coXCJLS0tLXCIsIGNoZWNrKTtcbiAgcmV0dXJuIGNoZWNrO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hlY2tSZWdleDsiXSwibmFtZXMiOlsiY2hlY2tSZWdleCIsInJlZ2V4IiwiZW1haWwiLCJjaGVjayIsInRlc3QiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./validations/checkRegex.js\n");

/***/ }),

/***/ "./validations/registerValidator.js":
/*!******************************************!*\
  !*** ./validations/registerValidator.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"registerValidator\": function() { return /* binding */ registerValidator; }\n/* harmony export */ });\n/* harmony import */ var _validations_is_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/validations/is-empty */ \"./validations/is-empty.js\");\n/* harmony import */ var _store_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/types */ \"./store/types.js\");\n/* harmony import */ var _validations_checkRegex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/validations/checkRegex */ \"./validations/checkRegex.js\");\n\n\n\nvar error = false;\nvar registerValidator = function(data, dispatch) {\n    var msg = {};\n    if ((0,_validations_is_empty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.firstName)) {\n        msg.firstName = \"First Name is required\";\n        error = true;\n    } else if ((0,_validations_is_empty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.email)) {\n        msg.email = \"Email is required\";\n        error = true;\n    } else if ((0,_validations_checkRegex__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[A-Za-z]+$/, data.email) == false) {\n        msg.email = \"Invalid email format\";\n        error = true;\n    } else if ((0,_validations_is_empty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.password)) {\n        msg.password = \" Password is required\";\n        error = true;\n    } else if ((0,_validations_is_empty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.confirmPassword)) {\n        msg.confirmPassword = \"Confirm Password is required\";\n        error = true;\n    } else if (data.password != data.confirmPassword) {\n        msg.confirmPassword = \"Confirm Password Mismatch\";\n        error = true;\n    } else {\n        error = false;\n        return error;\n    }\n    console.log(\"ERRRIR register validator \", error);\n    if (error == true) {\n        dispatch({\n            type: _store_types__WEBPACK_IMPORTED_MODULE_1__.GET_ERRORS,\n            payload: msg\n        });\n        return error;\n    }\n};\n// export const error;\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerValidator);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92YWxpZGF0aW9ucy9yZWdpc3RlclZhbGlkYXRvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTZDO0FBQ0Y7QUFDTztBQUVsRCxJQUFNRyxLQUFLLEdBQUcsS0FBSztBQUNaLElBQU1DLGlCQUFpQixHQUFHLFNBQUNDLElBQUksRUFBRUMsUUFBUSxFQUFLO0lBQ25ELElBQUlDLEdBQUcsR0FBRyxFQUFFO0lBQ1osSUFBSVAsaUVBQU8sQ0FBQ0ssSUFBSSxDQUFDRyxTQUFTLENBQUMsRUFBRTtRQUMzQkQsR0FBRyxDQUFDQyxTQUFTLEdBQUcsd0JBQXdCLENBQUM7UUFDekNMLEtBQUssR0FBRyxJQUFJLENBQUM7S0FDZCxNQUFNLElBQUlILGlFQUFPLENBQUNLLElBQUksQ0FBQ0ksS0FBSyxDQUFDLEVBQUU7UUFDOUJGLEdBQUcsQ0FBQ0UsS0FBSyxHQUFHLG1CQUFtQixDQUFDO1FBQ2hDTixLQUFLLEdBQUcsSUFBSSxDQUFDO0tBQ2QsTUFBTSxJQUNMRCxtRUFBVSwyQ0FBMkNHLElBQUksQ0FBQ0ksS0FBSyxDQUFDLElBQUksS0FBSyxFQUN6RTtRQUNBRixHQUFHLENBQUNFLEtBQUssR0FBRyxzQkFBc0IsQ0FBQztRQUNuQ04sS0FBSyxHQUFHLElBQUksQ0FBQztLQUNkLE1BQU0sSUFBSUgsaUVBQU8sQ0FBQ0ssSUFBSSxDQUFDSyxRQUFRLENBQUMsRUFBRTtRQUNqQ0gsR0FBRyxDQUFDRyxRQUFRLEdBQUcsdUJBQXVCLENBQUM7UUFDdkNQLEtBQUssR0FBRyxJQUFJLENBQUM7S0FDZCxNQUFNLElBQUlILGlFQUFPLENBQUNLLElBQUksQ0FBQ00sZUFBZSxDQUFDLEVBQUU7UUFDeENKLEdBQUcsQ0FBQ0ksZUFBZSxHQUFHLDhCQUE4QixDQUFDO1FBQ3JEUixLQUFLLEdBQUcsSUFBSSxDQUFDO0tBQ2QsTUFBTSxJQUFJRSxJQUFJLENBQUNLLFFBQVEsSUFBSUwsSUFBSSxDQUFDTSxlQUFlLEVBQUU7UUFDaERKLEdBQUcsQ0FBQ0ksZUFBZSxHQUFHLDJCQUEyQixDQUFDO1FBQ2xEUixLQUFLLEdBQUcsSUFBSSxDQUFDO0tBQ2QsTUFBTTtRQUNMQSxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsT0FBT0EsS0FBSyxDQUFDO0tBQ2Q7SUFDRFMsT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLEVBQUVWLEtBQUssQ0FBQyxDQUFDO0lBQ2pELElBQUlBLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDakJHLFFBQVEsQ0FBQztZQUNQUSxJQUFJLEVBQUViLG9EQUFVO1lBQ2hCYyxPQUFPLEVBQUVSLEdBQUc7U0FDYixDQUFDLENBQUM7UUFDSCxPQUFPSixLQUFLLENBQUM7S0FDZDtDQUNGLENBQUM7QUFFRixzQkFBc0I7QUFFdEIsK0RBQWVDLGlCQUFpQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3ZhbGlkYXRpb25zL3JlZ2lzdGVyVmFsaWRhdG9yLmpzPzJkODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzRW1wdHkgZnJvbSBcIkAvdmFsaWRhdGlvbnMvaXMtZW1wdHlcIjtcbmltcG9ydCB7IEdFVF9FUlJPUlMgfSBmcm9tIFwiQC9zdG9yZS90eXBlc1wiO1xuaW1wb3J0IGNoZWNrUmVnZXggZnJvbSBcIkAvdmFsaWRhdGlvbnMvY2hlY2tSZWdleFwiO1xuXG5jb25zdCBlcnJvciA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVmFsaWRhdG9yID0gKGRhdGEsIGRpc3BhdGNoKSA9PiB7XG4gIGxldCBtc2cgPSB7fTtcbiAgaWYgKGlzRW1wdHkoZGF0YS5maXJzdE5hbWUpKSB7XG4gICAgbXNnLmZpcnN0TmFtZSA9IFwiRmlyc3QgTmFtZSBpcyByZXF1aXJlZFwiO1xuICAgIGVycm9yID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0VtcHR5KGRhdGEuZW1haWwpKSB7XG4gICAgbXNnLmVtYWlsID0gXCJFbWFpbCBpcyByZXF1aXJlZFwiO1xuICAgIGVycm9yID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChcbiAgICBjaGVja1JlZ2V4KC9eW2EtekEtWjAtOV0rQFthLXpBLVowLTldK1xcLltBLVphLXpdKyQvLCBkYXRhLmVtYWlsKSA9PSBmYWxzZVxuICApIHtcbiAgICBtc2cuZW1haWwgPSBcIkludmFsaWQgZW1haWwgZm9ybWF0XCI7XG4gICAgZXJyb3IgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGlzRW1wdHkoZGF0YS5wYXNzd29yZCkpIHtcbiAgICBtc2cucGFzc3dvcmQgPSBcIiBQYXNzd29yZCBpcyByZXF1aXJlZFwiO1xuICAgIGVycm9yID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0VtcHR5KGRhdGEuY29uZmlybVBhc3N3b3JkKSkge1xuICAgIG1zZy5jb25maXJtUGFzc3dvcmQgPSBcIkNvbmZpcm0gUGFzc3dvcmQgaXMgcmVxdWlyZWRcIjtcbiAgICBlcnJvciA9IHRydWU7XG4gIH0gZWxzZSBpZiAoZGF0YS5wYXNzd29yZCAhPSBkYXRhLmNvbmZpcm1QYXNzd29yZCkge1xuICAgIG1zZy5jb25maXJtUGFzc3dvcmQgPSBcIkNvbmZpcm0gUGFzc3dvcmQgTWlzbWF0Y2hcIjtcbiAgICBlcnJvciA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgZXJyb3IgPSBmYWxzZTtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbiAgY29uc29sZS5sb2coXCJFUlJSSVIgcmVnaXN0ZXIgdmFsaWRhdG9yIFwiLCBlcnJvcik7XG4gIGlmIChlcnJvciA9PSB0cnVlKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogR0VUX0VSUk9SUyxcbiAgICAgIHBheWxvYWQ6IG1zZyxcbiAgICB9KTtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG5cbi8vIGV4cG9ydCBjb25zdCBlcnJvcjtcblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJWYWxpZGF0b3I7XG4iXSwibmFtZXMiOlsiaXNFbXB0eSIsIkdFVF9FUlJPUlMiLCJjaGVja1JlZ2V4IiwiZXJyb3IiLCJyZWdpc3RlclZhbGlkYXRvciIsImRhdGEiLCJkaXNwYXRjaCIsIm1zZyIsImZpcnN0TmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./validations/registerValidator.js\n");

/***/ })

});