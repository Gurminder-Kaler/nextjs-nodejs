/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./validations/checkRegex.js":
/*!***********************************!*\
  !*** ./validations/checkRegex.js ***!
  \***********************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./validations/loginValidator.js":
/*!***************************************!*\
  !*** ./validations/loginValidator.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginValidator\": function() { return /* binding */ loginValidator; }\n/* harmony export */ });\n/* harmony import */ var _validations_is_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/validations/is-empty */ \"./validations/is-empty.js\");\n/* harmony import */ var _validations_checkRegex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/validations/checkRegex */ \"./validations/checkRegex.js\");\n/* harmony import */ var _validations_checkRegex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_validations_checkRegex__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/types */ \"./store/types.js\");\n\n\n\nvar error = false;\nvar loginValidator = function(data, dispatch) {\n    var msg = {};\n    if ((0,_validations_is_empty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.email)) {\n        msg.email = \"Email is required\";\n        error = true;\n    } else if ((0,_validations_is_empty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.password)) {\n        msg.password = \" Password is required\";\n        error = true;\n    } else if (_validations_checkRegex__WEBPACK_IMPORTED_MODULE_1___default()(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[A-Za-z]+$/, data.email) == false) {\n        msg.email = \"Invalid email format\";\n        error = true;\n    } else {\n        error = false;\n    }\n    if (error == true) {\n        dispatch({\n            type: _store_types__WEBPACK_IMPORTED_MODULE_2__.GET_ERRORS,\n            payload: msg\n        });\n    }\n    return error;\n};\n// export const error;\n/* harmony default export */ __webpack_exports__[\"default\"] = (loginValidator);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92YWxpZGF0aW9ucy9sb2dpblZhbGlkYXRvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2QztBQUNLO0FBQ1A7QUFFM0MsSUFBTUcsS0FBSyxHQUFHLEtBQUs7QUFFWixJQUFNQyxjQUFjLEdBQUcsU0FBQ0MsSUFBSSxFQUFFQyxRQUFRLEVBQUs7SUFDaEQsSUFBSUMsR0FBRyxHQUFHLEVBQUU7SUFFWixJQUFJUCxpRUFBTyxDQUFDSyxJQUFJLENBQUNHLEtBQUssQ0FBQyxFQUFFO1FBQ3ZCRCxHQUFHLENBQUNDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQztRQUNoQ0wsS0FBSyxHQUFHLElBQUksQ0FBQztLQUNkLE1BQU0sSUFBSUgsaUVBQU8sQ0FBQ0ssSUFBSSxDQUFDSSxRQUFRLENBQUMsRUFBRTtRQUNqQ0YsR0FBRyxDQUFDRSxRQUFRLEdBQUcsdUJBQXVCLENBQUM7UUFDdkNOLEtBQUssR0FBRyxJQUFJLENBQUM7S0FDZCxNQUFNLElBQUlGLDhEQUFVLDJDQUEwQ0ksSUFBSSxDQUFDRyxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUU7UUFDbkZELEdBQUcsQ0FBQ0MsS0FBSyxHQUFHLHNCQUFzQixDQUFDO1FBQ25DTCxLQUFLLEdBQUcsSUFBSSxDQUFDO0tBQ2QsTUFBTTtRQUNMQSxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ2Y7SUFDRCxJQUFJQSxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2pCRyxRQUFRLENBQUM7WUFDUEksSUFBSSxFQUFFUixvREFBVTtZQUNoQlMsT0FBTyxFQUFFSixHQUFHO1NBQ2IsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxPQUFPSixLQUFLLENBQUM7Q0FDZCxDQUFDO0FBRUYsc0JBQXNCO0FBRXRCLCtEQUFlQyxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdmFsaWRhdGlvbnMvbG9naW5WYWxpZGF0b3IuanM/MDUzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNFbXB0eSBmcm9tIFwiQC92YWxpZGF0aW9ucy9pcy1lbXB0eVwiO1xuaW1wb3J0IGNoZWNrUmVnZXggZnJvbSBcIkAvdmFsaWRhdGlvbnMvY2hlY2tSZWdleFwiO1xuaW1wb3J0IHsgR0VUX0VSUk9SUyB9IGZyb20gXCJAL3N0b3JlL3R5cGVzXCI7XG5cbmNvbnN0IGVycm9yID0gZmFsc2U7XG5cbmV4cG9ydCBjb25zdCBsb2dpblZhbGlkYXRvciA9IChkYXRhLCBkaXNwYXRjaCkgPT4ge1xuICBsZXQgbXNnID0ge307XG5cbiAgaWYgKGlzRW1wdHkoZGF0YS5lbWFpbCkpIHtcbiAgICBtc2cuZW1haWwgPSBcIkVtYWlsIGlzIHJlcXVpcmVkXCI7XG4gICAgZXJyb3IgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGlzRW1wdHkoZGF0YS5wYXNzd29yZCkpIHtcbiAgICBtc2cucGFzc3dvcmQgPSBcIiBQYXNzd29yZCBpcyByZXF1aXJlZFwiO1xuICAgIGVycm9yID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChjaGVja1JlZ2V4KC9eW2EtekEtWjAtOV0rQFthLXpBLVowLTldK1xcLltBLVphLXpdKyQvLGRhdGEuZW1haWwpID09IGZhbHNlKSB7XG4gICAgbXNnLmVtYWlsID0gXCJJbnZhbGlkIGVtYWlsIGZvcm1hdFwiO1xuICAgIGVycm9yID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBlcnJvciA9IGZhbHNlO1xuICB9XG4gIGlmIChlcnJvciA9PSB0cnVlKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogR0VUX0VSUk9SUyxcbiAgICAgIHBheWxvYWQ6IG1zZyxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZXJyb3I7XG59O1xuXG4vLyBleHBvcnQgY29uc3QgZXJyb3I7XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luVmFsaWRhdG9yO1xuIl0sIm5hbWVzIjpbImlzRW1wdHkiLCJjaGVja1JlZ2V4IiwiR0VUX0VSUk9SUyIsImVycm9yIiwibG9naW5WYWxpZGF0b3IiLCJkYXRhIiwiZGlzcGF0Y2giLCJtc2ciLCJlbWFpbCIsInBhc3N3b3JkIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./validations/loginValidator.js\n");

/***/ })

});