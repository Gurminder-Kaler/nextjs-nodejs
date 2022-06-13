"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Nav = function() {\n    _s();\n    var asPath = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().asPath;\n    var ref = _slicedToArray((0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)(), 2), session = ref[0], loading = ref[1];\n    var ref1 = _slicedToArray(useState(false), 2), loggedIn = ref1[0], setLoggedIn = ref1[1];\n    if (!session && !loading) {\n        setLoggedIn(false);\n    } else {\n        setLoggedIn(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"hero is-medium is-bold\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hero-head\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"navbar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"navbar-brand\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: \"navbar-item\",\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            children: \"CIVIL\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                            lineNumber: 25,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"navbar-burger burger\",\n                                    \"data-target\": \"navbarMenu\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                            lineNumber: 29,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"navbarMenu\",\n                            className: \"navbar-menu\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"navbar-end\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"tabs is-right\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: asPath == \"/\" ? \"is-active\" : \"\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        href: \"/\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            children: \"Home\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                            lineNumber: 40,\n                                                            columnNumber: 25\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                        lineNumber: 39,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                    lineNumber: 38,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: asPath == \"/about\" ? \"is-active\" : \"\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        href: \"/about\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            children: \"About\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                            lineNumber: 45,\n                                                            columnNumber: 25\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                        lineNumber: 44,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: asPath == \"/contact\" ? \"is-active\" : \"\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        href: \"/contact\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            children: \"Contact\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                            lineNumber: 50,\n                                                            columnNumber: 25\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                        lineNumber: 49,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: asPath == \"/login\" ? \"is-active\" : \"\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        href: \"/login\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            children: \"Login\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                            lineNumber: 55,\n                                                            columnNumber: 25\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: asPath == \"/register\" ? \"is-active\" : \"\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        href: \"/register\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            children: \"Register\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                            lineNumber: 60,\n                                                            columnNumber: 25\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"navbar-item\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"button is-outlined is-danger\",\n                                                href: \"/logout\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"icon\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            className: \"fa fa-power-off\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                            lineNumber: 70,\n                                                            columnNumber: 25\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 23\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        title: \"Logout\",\n                                                        children: \"Logout\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 21\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                lineNumber: 35,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_s(Nav, \"3nXO5a1icXcLF1FWl20ueCM/2/I=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTs4REFDbEQsNEVBQUNKLGtEQUFJO3dEQUFDYyxJQUFJLEVBQUMsUUFBUTtrRUFDakIsNEVBQUNFLEdBQUM7c0VBQUMsT0FBSzs7Ozs7aUVBQUk7Ozs7OzZEQUNQOzs7Ozt5REFDSjs4REFDTCw4REFBQ0ssSUFBRTtvREFBQ1YsU0FBUyxFQUFFUCxNQUFNLElBQUksV0FBVyxHQUFHLFdBQVcsR0FBRyxFQUFFOzhEQUNyRCw0RUFBQ0osa0RBQUk7d0RBQUNjLElBQUksRUFBQyxXQUFXO2tFQUNwQiw0RUFBQ0UsR0FBQztzRUFBQyxVQUFROzs7OztpRUFBSTs7Ozs7NkRBQ1Y7Ozs7O3lEQUNKOzs7Ozs7aURBSUY7c0RBQ0wsOERBQUNDLE1BQUk7NENBQUNOLFNBQVMsRUFBQyxhQUFhO3NEQUMzQiw0RUFBQ0ssR0FBQztnREFBQ0wsU0FBUyxFQUFDLDhCQUE4QjtnREFBQ0csSUFBSSxFQUFDLFNBQVM7O2tFQUN4RCw4REFBQ0csTUFBSTt3REFBQ04sU0FBUyxFQUFDLE1BQU07a0VBQ3BCLDRFQUFDVyxHQUFDOzREQUFDWCxTQUFTLEVBQUMsaUJBQWlCOzs7OztpRUFBSzs7Ozs7NkRBQzlCO2tFQUNQLDhEQUFDTSxNQUFJO3dEQUFDTSxLQUFLLEVBQUMsUUFBUTtrRUFBQyxRQUFNOzs7Ozs2REFBTzs7Ozs7O3FEQUNoQzs7Ozs7aURBQ0M7Ozs7Ozt5Q0FDSDs7Ozs7cUNBQ0Y7Ozs7O2lDQUNGOzs7Ozs7eUJBQ0Y7Ozs7O3FCQUNGOzs7OztpQkFDRjs7Ozs7YUFDRSxDQUNWO0NBQ0g7R0E3RUtwQixHQUFHOztRQUNZRixrREFBUztRQUNEQyx1REFBVTs7O0FBRmpDQyxLQUFBQSxHQUFHO0FBOEVULCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/ODY0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcblxuY29uc3QgTmF2ID0gKCkgPT4ge1xuICBjb25zdCB7IGFzUGF0aCB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgW2xvZ2dlZEluLCBzZXRMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgaWYgKCFzZXNzaW9uICYmICFsb2FkaW5nKSB7XG4gICAgc2V0TG9nZ2VkSW4oZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIHNldExvZ2dlZEluKHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZXJvIGlzLW1lZGl1bSBpcy1ib2xkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8taGVhZFwiPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgPGE+Q0lWSUw8L2E+XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItYnVyZ2VyIGJ1cmdlclwiIGRhdGEtdGFyZ2V0PVwibmF2YmFyTWVudVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXZiYXJNZW51XCIgY2xhc3NOYW1lPVwibmF2YmFyLW1lbnVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItZW5kXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzIGlzLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2FzUGF0aCA9PSBcIi9cIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2FzUGF0aCA9PSBcIi9hYm91dFwiID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkFib3V0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YXNQYXRoID09IFwiL2NvbnRhY3RcIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNvbnRhY3Q8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthc1BhdGggPT0gXCIvbG9naW5cIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5Mb2dpbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2FzUGF0aCA9PSBcIi9yZWdpc3RlclwiID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlJlZ2lzdGVyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17YXNQYXRoID09IFwiL1wiID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJ9IGhyZWY9XCIvaGVscFwiPkhlbHA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLW91dGxpbmVkIGlzLWRhbmdlclwiIGhyZWY9XCIvbG9nb3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcG93ZXItb2ZmXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB0aXRsZT1cIkxvZ291dFwiPkxvZ291dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsInVzZVNlc3Npb24iLCJOYXYiLCJhc1BhdGgiLCJzZXNzaW9uIiwibG9hZGluZyIsInVzZVN0YXRlIiwibG9nZ2VkSW4iLCJzZXRMb2dnZWRJbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJuYXYiLCJocmVmIiwiaDIiLCJhIiwic3BhbiIsImRhdGEtdGFyZ2V0IiwiaWQiLCJ1bCIsImxpIiwiaSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

});