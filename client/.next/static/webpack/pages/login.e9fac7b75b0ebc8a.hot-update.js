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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Nav = function() {\n    var _this1 = _this;\n    _s();\n    var asPath = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().asPath;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loggedIn = ref[0], setLoggedIn = ref[1];\n    var ref1 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)(), session = ref1.data, status = ref1.status;\n    var Logo = function(props) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n            src: \"logo.png\",\n            alt: \"Picture of the author\",\n            width: 50,\n            height: 50\n        }, void 0, false, {\n            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, _this1);\n    };\n    console.log(\"session\", session);\n    console.log(\"loading\", status);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"hero is-medium is-bold\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hero-head\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"navbar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"navbar-brand\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: \"navbar-item\",\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {}, void 0, false, {\n                                                fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 22\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"navbar-burger burger\",\n                                    \"data-target\": \"navbarMenu\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"navbarMenu\",\n                            className: \"navbar-menu\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"navbar-end\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"tabs is-right\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: asPath == \"/\" ? \"is-active\" : \"\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        href: \"/\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            children: \"Home\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                            lineNumber: 52,\n                                                            columnNumber: 25\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: asPath == \"/about\" ? \"is-active\" : \"\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        href: \"/about\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            children: \"About\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                            lineNumber: 57,\n                                                            columnNumber: 25\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                        lineNumber: 56,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: asPath == \"/contact\" ? \"is-active\" : \"\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        href: \"/contact\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            children: \"Contact\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 25\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                        lineNumber: 61,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: asPath == \"/login\" ? \"is-active\" : \"\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        href: \"/login\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            children: \"Login\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                            lineNumber: 67,\n                                                            columnNumber: 25\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: asPath == \"/register\" ? \"is-active\" : \"\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        href: \"/register\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            children: \"Register\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                            lineNumber: 72,\n                                                            columnNumber: 25\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                        lineNumber: 71,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 19\n                                        }, _this),\n                                        loggedIn == true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"navbar-item\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"button is-outlined is-danger\",\n                                                href: \"/logout\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"icon\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            className: \"fa fa-power-off\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                            lineNumber: 86,\n                                                            columnNumber: 27\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                        lineNumber: 85,\n                                                        columnNumber: 25\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        title: \"Logout\",\n                                                        children: \"Logout\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                        lineNumber: 88,\n                                                        columnNumber: 25\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                                lineNumber: 81,\n                                                columnNumber: 23\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 21\n                                        }, _this) : \"\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/components/Nav.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_s(Nav, \"VEpGAb889oqge0gyxR7EyPkIA4Q=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0UsS0FBQUEsR0FBRztBQThGVCwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LmpzPzg2NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2xvZ2dlZEluLCBzZXRMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKCk7IFxuICBcbiAgY29uc3QgTG9nbyA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8SW1hZ2UgXG4gICAgICAgIHNyYz1cImxvZ28ucG5nXCJcbiAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcbiAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICBjb25zb2xlLmxvZyhcInNlc3Npb25cIiwgc2Vzc2lvbik7XG4gIGNvbnNvbGUubG9nKFwibG9hZGluZ1wiLCBzdGF0dXMpOyBcblxuICByZXR1cm4gKFxuICAgIFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlcm8gaXMtbWVkaXVtIGlzLWJvbGRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1oZWFkXCI+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICA8YT48TG9nby8+PC9hPlxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLWJ1cmdlciBidXJnZXJcIiBkYXRhLXRhcmdldD1cIm5hdmJhck1lbnVcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibmF2YmFyTWVudVwiIGNsYXNzTmFtZT1cIm5hdmJhci1tZW51XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFicyBpcy1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthc1BhdGggPT0gXCIvXCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthc1BhdGggPT0gXCIvYWJvdXRcIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5BYm91dDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2FzUGF0aCA9PSBcIi9jb250YWN0XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5Db250YWN0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YXNQYXRoID09IFwiL2xvZ2luXCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+TG9naW48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthc1BhdGggPT0gXCIvcmVnaXN0ZXJcIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5SZWdpc3RlcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2FzUGF0aCA9PSBcIi9cIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwifSBocmVmPVwiL2hlbHBcIj5IZWxwPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIHtsb2dnZWRJbiA9PSB0cnVlID8gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtb3V0bGluZWQgaXMtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvbG9nb3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBvd2VyLW9mZlwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiTG9nb3V0XCI+TG9nb3V0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlc3Npb24iLCJJbWFnZSIsIk5hdiIsImFzUGF0aCIsImxvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsIkxvZ28iLCJwcm9wcyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJuYXYiLCJocmVmIiwiaDIiLCJhIiwic3BhbiIsImRhdGEtdGFyZ2V0IiwiaWQiLCJ1bCIsImxpIiwiaSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

});