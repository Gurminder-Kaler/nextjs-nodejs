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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bulma/css/bulma.min.css */ \"./node_modules/bulma/css/bulma.min.css\");\n/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! font-awesome/css/font-awesome.css */ \"./node_modules/font-awesome/css/font-awesome.css\");\n/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/store */ \"./store/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _utils_setAuthToken__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/setAuthToken */ \"./utils/setAuthToken.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _store_actions_authAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/store/actions/authAction */ \"./store/actions/authAction.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_6__, _store_actions_authAction__WEBPACK_IMPORTED_MODULE_11__]);\n([react_toastify__WEBPACK_IMPORTED_MODULE_6__, _store_actions_authAction__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// import 'bootstrap/dist/css/bootstrap.css';\n\n\n\n\n\n\n\n\n\n\n//Pertains the user\nfunction App({ Component , pageProps: { session , ...pageProps }  }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        const { location , localStorage  } = window;\n        if (localStorage.jwtToken) {\n            //set Auth token header auth\n            (0,_utils_setAuthToken__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(localStorage.jwtToken);\n            //decode token\n            const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_10___default()(localStorage.jwtToken);\n            //set user and is Authenticated\n            _store_store__WEBPACK_IMPORTED_MODULE_4__.Store.dispatch((0,_store_actions_authAction__WEBPACK_IMPORTED_MODULE_11__.setCurrentUser)(decoded));\n            const currentTime = Date.now() / 1000;\n            if (decoded.exp < currentTime) {\n                _store_store__WEBPACK_IMPORTED_MODULE_4__.Store.dispatch(logoutUser());\n                _store_store__WEBPACK_IMPORTED_MODULE_4__.Store.dispatch(clearCurrentProfile());\n                //clear current Profile\n                location.href = \"/login\";\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n        store: _store_store__WEBPACK_IMPORTED_MODULE_4__.Store,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {}, void 0, false, {\n                fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/pages/_app.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/pages/_app.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gurminderkaler/Desktop/nextjs/client/pages/_app.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store_store__WEBPACK_IMPORTED_MODULE_4__.Wrapper.withRedux(App));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBQzlCLDZDQUE2QztBQUNaO0FBQ1U7QUFDSTtBQUNSO0FBQ1M7QUFDRDtBQUNiO0FBQ2M7QUFDWjtBQUN3QjtBQUM1RCxtQkFBbUI7QUFFbkIsU0FBU1EsR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxFQUFFLEVBQUVDLE9BQU8sR0FBRSxHQUFHRCxTQUFTLEVBQUUsR0FBRSxFQUFFO0lBQ2hFTixnREFBUyxDQUFDLElBQU07UUFDZCxNQUFNLEVBQUVRLFFBQVEsR0FBRUMsWUFBWSxHQUFFLEdBQUdDLE1BQU07UUFDekMsSUFBSUQsWUFBWSxDQUFDRSxRQUFRLEVBQUU7WUFDekIsNEJBQTRCO1lBQzVCViwrREFBWSxDQUFDUSxZQUFZLENBQUNFLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLGNBQWM7WUFDZCxNQUFNQyxPQUFPLEdBQUdWLGtEQUFVLENBQUNPLFlBQVksQ0FBQ0UsUUFBUSxDQUFDO1lBQ2pELCtCQUErQjtZQUMvQmQsd0RBQWMsQ0FBQ00sMEVBQWMsQ0FBQ1MsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QyxNQUFNRSxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsR0FBRyxFQUFFLEdBQUcsSUFBSTtZQUNyQyxJQUFJSixPQUFPLENBQUNLLEdBQUcsR0FBR0gsV0FBVyxFQUFFO2dCQUM3QmpCLHdEQUFjLENBQUNxQixVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QnJCLHdEQUFjLENBQUNzQixtQkFBbUIsRUFBRSxDQUFDLENBQUM7Z0JBQ3RDLHVCQUF1QjtnQkFDdkJYLFFBQVEsQ0FBQ1ksSUFBSSxHQUFHLFFBQVEsQ0FBQzthQUMxQjtTQUNGO0tBQ0YsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQLHFCQUNFLDhEQUFDdEIsaURBQVE7UUFBQ3VCLEtBQUssRUFBRXhCLCtDQUFLOzswQkFDcEIsOERBQUNFLDBEQUFjOzs7O29CQUFHOzBCQUNsQiw4REFBQ00sU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7O1lBQ25CLENBQ1g7Q0FDSDtBQUNELGlFQUFlViwyREFBaUIsQ0FBQ1EsR0FBRyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcbmltcG9ydCBcImJ1bG1hL2Nzcy9idWxtYS5taW4uY3NzXCI7XG5pbXBvcnQgXCJmb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5jc3NcIjtcbmltcG9ydCB7IFdyYXBwZXIsIFN0b3JlIH0gZnJvbSBcIkAvc3RvcmUvc3RvcmVcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc2V0QXV0aFRva2VuIGZyb20gXCJAL3V0aWxzL3NldEF1dGhUb2tlblwiO1xuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XG5pbXBvcnQgeyBzZXRDdXJyZW50VXNlciB9IGZyb20gJ0Avc3RvcmUvYWN0aW9ucy9hdXRoQWN0aW9uJztcbi8vUGVydGFpbnMgdGhlIHVzZXJcblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0gfSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgbG9jYXRpb24sIGxvY2FsU3RvcmFnZSB9ID0gd2luZG93O1xuICAgIGlmIChsb2NhbFN0b3JhZ2Uuand0VG9rZW4pIHtcbiAgICAgIC8vc2V0IEF1dGggdG9rZW4gaGVhZGVyIGF1dGhcbiAgICAgIHNldEF1dGhUb2tlbihsb2NhbFN0b3JhZ2Uuand0VG9rZW4pO1xuICAgICAgLy9kZWNvZGUgdG9rZW5cbiAgICAgIGNvbnN0IGRlY29kZWQgPSBqd3RfZGVjb2RlKGxvY2FsU3RvcmFnZS5qd3RUb2tlbik7XG4gICAgICAvL3NldCB1c2VyIGFuZCBpcyBBdXRoZW50aWNhdGVkXG4gICAgICBTdG9yZS5kaXNwYXRjaChzZXRDdXJyZW50VXNlcihkZWNvZGVkKSk7XG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IERhdGUubm93KCkgLyAxMDAwO1xuICAgICAgaWYgKGRlY29kZWQuZXhwIDwgY3VycmVudFRpbWUpIHtcbiAgICAgICAgU3RvcmUuZGlzcGF0Y2gobG9nb3V0VXNlcigpKTtcbiAgICAgICAgU3RvcmUuZGlzcGF0Y2goY2xlYXJDdXJyZW50UHJvZmlsZSgpKTtcbiAgICAgICAgLy9jbGVhciBjdXJyZW50IFByb2ZpbGVcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IFwiL2xvZ2luXCI7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtTdG9yZX0+XG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlci53aXRoUmVkdXgoQXBwKTtcbiJdLCJuYW1lcyI6WyJXcmFwcGVyIiwiU3RvcmUiLCJQcm92aWRlciIsIlRvYXN0Q29udGFpbmVyIiwidXNlRWZmZWN0Iiwic2V0QXV0aFRva2VuIiwiand0X2RlY29kZSIsInNldEN1cnJlbnRVc2VyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiIsImxvY2F0aW9uIiwibG9jYWxTdG9yYWdlIiwid2luZG93Iiwiand0VG9rZW4iLCJkZWNvZGVkIiwiZGlzcGF0Y2giLCJjdXJyZW50VGltZSIsIkRhdGUiLCJub3ciLCJleHAiLCJsb2dvdXRVc2VyIiwiY2xlYXJDdXJyZW50UHJvZmlsZSIsImhyZWYiLCJzdG9yZSIsIndpdGhSZWR1eCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/actions/authAction.js":
/*!*************************************!*\
  !*** ./store/actions/authAction.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"loginAction\": () => (/* binding */ loginAction),\n/* harmony export */   \"logoutAction\": () => (/* binding */ logoutAction),\n/* harmony export */   \"logoutUserAction\": () => (/* binding */ logoutUserAction),\n/* harmony export */   \"setCurrentRole\": () => (/* binding */ setCurrentRole),\n/* harmony export */   \"setCurrentUser\": () => (/* binding */ setCurrentUser)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var _store_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/types */ \"./store/types.js\");\n/* harmony import */ var _utils_setAuthToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/setAuthToken */ \"./utils/setAuthToken.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_1__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n// import Cookies from \"js-cookie\";\n// import { useSession } from \"next-auth/react\"\nconst loginAction = async (data, push, dispatch)=>{\n    // const dispatch = useDispatch();\n    console.log(\"KKKKK data\", data);\n    console.log(\"KKKKK push\", push);\n    await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"/api/auth/login\", data).then((res)=>{\n        console.log(\"RES RES\", res);\n        if (res.data.success) {\n            const { token , user  } = res.data;\n            console.log(\"res.data auth action\", res.data);\n            const role = user.role;\n            localStorage.setItem(\"jwtToken\", token);\n            localStorage.setItem(\"role\", role);\n            (0,_utils_setAuthToken__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(token);\n            const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);\n            console.log(\"decoded123\", decoded);\n            dispatch(setCurrentRole(role));\n            dispatch(setCurrentUser(user));\n            (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)(res.data.message, {\n                position: \"top-right\",\n                autoClose: 5000,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined\n            });\n            push(\"/\");\n        } else {\n            dispatch({\n                type: _store_types__WEBPACK_IMPORTED_MODULE_2__.GET_ERRORS,\n                payload: res.data && res.data.message ? res.data.message : \"Something Went Wrong\"\n            });\n        }\n    }).catch((err)=>{\n        (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)(err, {\n            position: \"top-right\",\n            autoClose: 5000,\n            hideProgressBar: false,\n            closeOnClick: true,\n            pauseOnHover: true,\n            draggable: true,\n            progress: undefined\n        });\n    });\n};\n// Log user out\nconst logoutAction = (push, dispatch)=>{\n    console.log(\"ABC\", dispatch);\n    // Remove token and role from localStorage\n    localStorage.removeItem(\"jwtToken\");\n    localStorage.removeItem(\"role\");\n    // setAuthToken(null);\n    dispatch(setCurrentUser({}));\n    dispatch(setCurrentRole({}));\n    dispatch(logoutUserAction);\n    push(\"/\");\n// history.push(\"/login\");\n};\n// Set logged in user\nconst setCurrentUser = (decoded)=>{\n    return {\n        type: _store_types__WEBPACK_IMPORTED_MODULE_2__.SET_CURRENT_USER,\n        payload: decoded\n    };\n};\n// Set logged in user's role\nconst setCurrentRole = (role)=>{\n    return {\n        type: _store_types__WEBPACK_IMPORTED_MODULE_2__.SET_CURRENT_USER_ROLE,\n        payload: role\n    };\n};\nconst logoutUserAction = (abc)=>{\n    console.log(\"ABC\", abc);\n    return {\n        type: _store_types__WEBPACK_IMPORTED_MODULE_2__.LOGOUT\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginAction);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsQ0FBQyxLQUFLLEVBQUVGLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLDBDQUEwQztJQUMxQ1UsWUFBWSxDQUFDbUIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDbkIsWUFBWSxDQUFDbUIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLHNCQUFzQjtJQUN0QjdCLFFBQVEsQ0FBQ2MsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0JkLFFBQVEsQ0FBQ2EsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0JiLFFBQVEsQ0FBQzhCLGdCQUFnQixDQUFDLENBQUM7SUFFM0IvQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFViwwQkFBMEI7Q0FDM0IsQ0FBQztBQUVGLHFCQUFxQjtBQUNkLE1BQU1lLGNBQWMsR0FBRyxDQUFDRixPQUFPLEdBQUs7SUFDekMsT0FBTztRQUNMWSxJQUFJLEVBQUVoQywwREFBZ0I7UUFDdEJpQyxPQUFPLEVBQUViLE9BQU87S0FDakIsQ0FBQztDQUNILENBQUM7QUFDRiw0QkFBNEI7QUFDckIsTUFBTUMsY0FBYyxHQUFHLENBQUNKLElBQUksR0FBSztJQUN0QyxPQUFPO1FBQ0xlLElBQUksRUFBRS9CLCtEQUFxQjtRQUMzQmdDLE9BQU8sRUFBRWhCLElBQUk7S0FDZCxDQUFDO0NBQ0gsQ0FBQztBQUVLLE1BQU1xQixnQkFBZ0IsR0FBRyxDQUFDQyxHQUFHLEdBQUs7SUFDdkM5QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLEVBQUU2QixHQUFHLENBQUMsQ0FBQztJQUN4QixPQUFPO1FBQ0xQLElBQUksRUFBRTlCLGdEQUFNO0tBQ2IsQ0FBQztDQUNILENBQUM7QUFFRixpRUFBZUcsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3N0b3JlL2FjdGlvbnMvYXV0aEFjdGlvbi5qcz8wMTkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQge1xuICBHRVRfRVJST1JTLFxuICBTRVRfQ1VSUkVOVF9VU0VSLFxuICBTRVRfQ1VSUkVOVF9VU0VSX1JPTEUsXG4gIExPR09VVCxcbn0gZnJvbSBcIkAvc3RvcmUvdHlwZXNcIjtcbmltcG9ydCBzZXRBdXRoVG9rZW4gZnJvbSBcIkAvdXRpbHMvc2V0QXV0aFRva2VuXCI7XG5pbXBvcnQgand0X2RlY29kZSBmcm9tIFwiand0LWRlY29kZVwiO1xuXG4vLyBpbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG4vLyBpbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSBhc3luYyAoZGF0YSwgcHVzaCwgZGlzcGF0Y2gpID0+IHtcbiAgLy8gY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zb2xlLmxvZyhcIktLS0tLIGRhdGFcIiwgZGF0YSk7XG4gIGNvbnNvbGUubG9nKFwiS0tLS0sgcHVzaFwiLCBwdXNoKTtcbiAgYXdhaXQgYXhpb3NcbiAgICAucG9zdChcIi9hcGkvYXV0aC9sb2dpblwiLCBkYXRhKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUkVTIFJFU1wiLCByZXMpO1xuICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgY29uc3QgeyB0b2tlbiwgdXNlciB9ID0gcmVzLmRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzLmRhdGEgYXV0aCBhY3Rpb25cIiwgcmVzLmRhdGEpO1xuICAgICAgICBjb25zdCByb2xlID0gdXNlci5yb2xlO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImp3dFRva2VuXCIsIHRva2VuKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyb2xlXCIsIHJvbGUpO1xuICAgICAgICBzZXRBdXRoVG9rZW4odG9rZW4pO1xuICAgICAgICBjb25zdCBkZWNvZGVkID0gand0X2RlY29kZSh0b2tlbik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVjb2RlZDEyM1wiLCBkZWNvZGVkKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudFJvbGUocm9sZSkpO1xuICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50VXNlcih1c2VyKSk7XG4gICAgICAgIHRvYXN0KHJlcy5kYXRhLm1lc3NhZ2UsIHtcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXG4gICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxuICAgICAgICB9KTtcbiAgICAgICAgcHVzaChcIi9cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogR0VUX0VSUk9SUyxcbiAgICAgICAgICBwYXlsb2FkOlxuICAgICAgICAgICAgcmVzLmRhdGEgJiYgcmVzLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgICA/IHJlcy5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgOiBcIlNvbWV0aGluZyBXZW50IFdyb25nXCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHRvYXN0KGVyciwge1xuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxuICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG4vLyBMb2cgdXNlciBvdXRcbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAocHVzaCwgZGlzcGF0Y2gpID0+IHtcbiAgY29uc29sZS5sb2coJ0FCQycsIGRpc3BhdGNoKTtcbiAgLy8gUmVtb3ZlIHRva2VuIGFuZCByb2xlIGZyb20gbG9jYWxTdG9yYWdlXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiand0VG9rZW5cIik7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwicm9sZVwiKTtcbiAgLy8gc2V0QXV0aFRva2VuKG51bGwpO1xuICBkaXNwYXRjaChzZXRDdXJyZW50VXNlcih7fSkpO1xuICBkaXNwYXRjaChzZXRDdXJyZW50Um9sZSh7fSkpO1xuICBkaXNwYXRjaChsb2dvdXRVc2VyQWN0aW9uKTtcbiAgXG4gIHB1c2goXCIvXCIpO1xuXG4gIC8vIGhpc3RvcnkucHVzaChcIi9sb2dpblwiKTtcbn07XG5cbi8vIFNldCBsb2dnZWQgaW4gdXNlclxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRVc2VyID0gKGRlY29kZWQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRVRfQ1VSUkVOVF9VU0VSLFxuICAgIHBheWxvYWQ6IGRlY29kZWQsXG4gIH07XG59O1xuLy8gU2V0IGxvZ2dlZCBpbiB1c2VyJ3Mgcm9sZVxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRSb2xlID0gKHJvbGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRVRfQ1VSUkVOVF9VU0VSX1JPTEUsXG4gICAgcGF5bG9hZDogcm9sZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dvdXRVc2VyQWN0aW9uID0gKGFiYykgPT4ge1xuICBjb25zb2xlLmxvZygnQUJDJywgYWJjKTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBMT0dPVVQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dpbkFjdGlvbjtcbiJdLCJuYW1lcyI6WyJheGlvcyIsInRvYXN0IiwiR0VUX0VSUk9SUyIsIlNFVF9DVVJSRU5UX1VTRVIiLCJTRVRfQ1VSUkVOVF9VU0VSX1JPTEUiLCJMT0dPVVQiLCJzZXRBdXRoVG9rZW4iLCJqd3RfZGVjb2RlIiwibG9naW5BY3Rpb24iLCJkYXRhIiwicHVzaCIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJ0aGVuIiwicmVzIiwic3VjY2VzcyIsInRva2VuIiwidXNlciIsInJvbGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZGVjb2RlZCIsInNldEN1cnJlbnRSb2xlIiwic2V0Q3VycmVudFVzZXIiLCJtZXNzYWdlIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsInR5cGUiLCJwYXlsb2FkIiwiY2F0Y2giLCJlcnIiLCJsb2dvdXRBY3Rpb24iLCJyZW1vdmVJdGVtIiwibG9nb3V0VXNlckFjdGlvbiIsImFiYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/actions/authAction.js\n");

/***/ }),

/***/ "./store/reducers/authReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/authReducer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/types */ \"./store/types.js\");\n/* harmony import */ var _validations_is_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/validations/is-empty */ \"./validations/is-empty.js\");\n\n\nconst initialState = {\n    isAuthenticated: false,\n    user: {},\n    role: \"\"\n};\n// eslint-disable-next-line import/no-anonymous-default-export\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(state = initialState, action) {\n    console.log(\"action payload auth reducer\", action.payload);\n    switch(action.type){\n        case _store_types__WEBPACK_IMPORTED_MODULE_0__.SET_CURRENT_USER:\n            return {\n                ...state,\n                isAuthenticated: !(0,_validations_is_empty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(action.payload),\n                user: action.payload\n            };\n        case _store_types__WEBPACK_IMPORTED_MODULE_0__.SET_CURRENT_USER_ROLE:\n            return {\n                ...state,\n                role: action.payload\n            };\n        case _store_types__WEBPACK_IMPORTED_MODULE_0__.LOGOUT:\n            return {\n                initialState\n            };\n        default:\n            return state;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9hdXRoUmVkdWNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Y7QUFDbkM7QUFFN0MsTUFBTUksWUFBWSxHQUFHO0lBQ25CQyxlQUFlLEVBQUUsS0FBSztJQUN0QkMsSUFBSSxFQUFFLEVBQUU7SUFDUkMsSUFBSSxFQUFFLEVBQUU7Q0FDVDtBQUVELDhEQUE4RDtBQUM5RCw2QkFBZSxvQ0FBVUMsS0FBSyxHQUFHSixZQUFZLEVBQUVLLE1BQU0sRUFBRTtJQUNyREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsNkJBQTZCLEVBQUVGLE1BQU0sQ0FBQ0csT0FBTyxDQUFDLENBQUM7SUFDM0QsT0FBUUgsTUFBTSxDQUFDSSxJQUFJO1FBQ2pCLEtBQUtiLDBEQUFnQjtZQUNuQixPQUFPO2dCQUNMLEdBQUdRLEtBQUs7Z0JBQ1JILGVBQWUsRUFBRSxDQUFDRixpRUFBTyxDQUFDTSxNQUFNLENBQUNHLE9BQU8sQ0FBQztnQkFDekNOLElBQUksRUFBRUcsTUFBTSxDQUFDRyxPQUFPO2FBQ3JCLENBQUM7UUFDSixLQUFLWCwrREFBcUI7WUFDeEIsT0FBTztnQkFDTCxHQUFHTyxLQUFLO2dCQUNSRCxJQUFJLEVBQUVFLE1BQU0sQ0FBQ0csT0FBTzthQUNyQixDQUFDO1FBQ0osS0FBS1YsZ0RBQU07WUFDVCxPQUFPO2dCQUNMRSxZQUFZO2FBQ2IsQ0FBQztRQUNKO1lBQ0UsT0FBT0ksS0FBSyxDQUFDO0tBQ2hCO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3RvcmUvcmVkdWNlcnMvYXV0aFJlZHVjZXIuanM/MzBmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRVRfQ1VSUkVOVF9VU0VSLCBTRVRfQ1VSUkVOVF9VU0VSX1JPTEUsIExPR09VVCB9IGZyb20gXCJAL3N0b3JlL3R5cGVzXCI7XG5pbXBvcnQgaXNFbXB0eSBmcm9tIFwiQC92YWxpZGF0aW9ucy9pcy1lbXB0eVwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXG4gIHVzZXI6IHt9LFxuICByb2xlOiBcIlwiLFxufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnNvbGUubG9nKCdhY3Rpb24gcGF5bG9hZCBhdXRoIHJlZHVjZXInLCBhY3Rpb24ucGF5bG9hZCk7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9DVVJSRU5UX1VTRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiAhaXNFbXB0eShhY3Rpb24ucGF5bG9hZCksXG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICBjYXNlIFNFVF9DVVJSRU5UX1VTRVJfUk9MRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByb2xlOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgY2FzZSBMT0dPVVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbml0aWFsU3RhdGUsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTRVRfQ1VSUkVOVF9VU0VSIiwiU0VUX0NVUlJFTlRfVVNFUl9ST0xFIiwiTE9HT1VUIiwiaXNFbXB0eSIsImluaXRpYWxTdGF0ZSIsImlzQXV0aGVudGljYXRlZCIsInVzZXIiLCJyb2xlIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/authReducer.js\n");

/***/ }),

/***/ "./store/reducers/errorReducer.js":
/*!****************************************!*\
  !*** ./store/reducers/errorReducer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./store/types.js\");\n\nconst initialState = {};\n// eslint-disable-next-line import/no-anonymous-default-export\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(state = initialState, action) {\n    switch(action.type){\n        case _types__WEBPACK_IMPORTED_MODULE_0__.GET_ERRORS:\n            return action.payload;\n        default:\n            return state;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9lcnJvclJlZHVjZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsWUFBWSxHQUFHLEVBQUU7QUFFdkIsOERBQThEO0FBQzlELDZCQUFlLG9DQUFTQyxLQUFLLEdBQUdELFlBQVksRUFBRUUsTUFBTSxFQUFFO0lBQ3BELE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNqQixLQUFLSiw4Q0FBVTtZQUNiLE9BQU9HLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDO1FBQ3hCO1lBQ0UsT0FBT0gsS0FBSyxDQUFDO0tBQ2hCO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3RvcmUvcmVkdWNlcnMvZXJyb3JSZWR1Y2VyLmpzP2QyMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR0VUX0VSUk9SUyB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEdFVF9FUlJPUlM6XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkdFVF9FUlJPUlMiLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/reducers/errorReducer.js\n");

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authReducer */ \"./store/reducers/authReducer.js\");\n/* harmony import */ var _errorReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorReducer */ \"./store/reducers/errorReducer.js\");\n/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userReducer */ \"./store/reducers/userReducer.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    auth: _authReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    error: _errorReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    user: _userReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDQTtBQUNFO0FBQ0Y7QUFFeEMsaUVBQWVBLHNEQUFlLENBQUM7SUFDN0JJLElBQUksRUFBRUgsb0RBQVc7SUFDakJJLEtBQUssRUFBRUgscURBQVk7SUFDbkJJLElBQUksRUFBRUgsb0RBQVc7Q0FDbEIsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3N0b3JlL3JlZHVjZXJzL2luZGV4LmpzP2IyNDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSBcIi4vYXV0aFJlZHVjZXJcIjtcbmltcG9ydCBlcnJvclJlZHVjZXIgZnJvbSBcIi4vZXJyb3JSZWR1Y2VyXCI7XG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSBcIi4vdXNlclJlZHVjZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgYXV0aDogYXV0aFJlZHVjZXIsXG4gIGVycm9yOiBlcnJvclJlZHVjZXIsXG4gIHVzZXI6IHVzZXJSZWR1Y2VyXG59KTtcbiJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJhdXRoUmVkdWNlciIsImVycm9yUmVkdWNlciIsInVzZXJSZWR1Y2VyIiwiYXV0aCIsImVycm9yIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/reducers/index.js\n");

/***/ }),

/***/ "./store/reducers/userReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/userReducer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./store/types.js\");\n\nconst initialState = {\n    users: null,\n    user: null,\n    loading: false\n};\n// eslint-disable-next-line import/no-anonymous-default-export\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(state = initialState, action) {\n    switch(action.type){\n        case _types__WEBPACK_IMPORTED_MODULE_0__.USER_LOADING:\n            return {\n                ...state,\n                loading: true\n            };\n        case _types__WEBPACK_IMPORTED_MODULE_0__.GET_ALL_USERS:\n            return {\n                ...state,\n                users: action.payload.data.users,\n                loading: false\n            };\n        case _types__WEBPACK_IMPORTED_MODULE_0__.GET_USER_VIA_ID:\n            return {\n                ...state,\n                user: action.payload,\n                loading: false\n            };\n        case _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_USER:\n            return {\n                ...state,\n                user: action.payload,\n                loading: false\n            };\n        default:\n            return state;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy91c2VyUmVkdWNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUtvQjtBQUVsQixNQUFNSSxZQUFZLEdBQUc7SUFDbkJDLEtBQUssRUFBRSxJQUFJO0lBQ1hDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLE9BQU8sRUFBRSxLQUFLO0NBQ2Y7QUFFRCw4REFBOEQ7QUFDOUQsNkJBQWUsb0NBQVVDLEtBQUssR0FBR0osWUFBWSxFQUFFSyxNQUFNLEVBQUU7SUFDckQsT0FBUUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2pCLEtBQUtULGdEQUFZO1lBQ2YsT0FBTztnQkFDTCxHQUFHTyxLQUFLO2dCQUNSRCxPQUFPLEVBQUUsSUFBSTthQUNkLENBQUM7UUFDSixLQUFLUCxpREFBYTtZQUNoQixPQUFPO2dCQUNMLEdBQUdRLEtBQUs7Z0JBQ1JILEtBQUssRUFBRUksTUFBTSxDQUFDRSxPQUFPLENBQUNDLElBQUksQ0FBQ1AsS0FBSztnQkFDaENFLE9BQU8sRUFBRSxLQUFLO2FBQ2YsQ0FBQztRQUNKLEtBQUtMLG1EQUFlO1lBQ2xCLE9BQU87Z0JBQ0wsR0FBR00sS0FBSztnQkFDUkYsSUFBSSxFQUFFRyxNQUFNLENBQUNFLE9BQU87Z0JBQ3BCSixPQUFPLEVBQUUsS0FBSzthQUNmLENBQUM7UUFDSixLQUFLSiwrQ0FBVztZQUNkLE9BQU87Z0JBQ0wsR0FBR0ssS0FBSztnQkFDUkYsSUFBSSxFQUFFRyxNQUFNLENBQUNFLE9BQU87Z0JBQ3BCSixPQUFPLEVBQUUsS0FBSzthQUNmLENBQUM7UUFDSjtZQUNFLE9BQU9DLEtBQUssQ0FBQztLQUNoQjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3N0b3JlL3JlZHVjZXJzL3VzZXJSZWR1Y2VyLmpzPzZmMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBHRVRfQUxMX1VTRVJTLFxuICAgIFVTRVJfTE9BRElORyxcbiAgICBHRVRfVVNFUl9WSUFfSUQsXG4gICAgVVBEQVRFX1VTRVIsXG4gIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG4gIFxuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdXNlcnM6IG51bGwsXG4gICAgdXNlcjogbnVsbCxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfTtcbiAgXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0XG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBVU0VSX0xPQURJTkc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgR0VUX0FMTF9VU0VSUzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICB1c2VyczogYWN0aW9uLnBheWxvYWQuZGF0YS51c2VycyxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgR0VUX1VTRVJfVklBX0lEOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgY2FzZSBVUERBVEVfVVNFUjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbiAgIl0sIm5hbWVzIjpbIkdFVF9BTExfVVNFUlMiLCJVU0VSX0xPQURJTkciLCJHRVRfVVNFUl9WSUFfSUQiLCJVUERBVEVfVVNFUiIsImluaXRpYWxTdGF0ZSIsInVzZXJzIiwidXNlciIsImxvYWRpbmciLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/reducers/userReducer.js\n");

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Store\": () => (/* binding */ Store),\n/* harmony export */   \"Wrapper\": () => (/* binding */ Wrapper)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ \"./store/reducers/index.js\");\n\n\n\n\n\n// initial states here\nconst initalState = {};\n// middleware\nconst middleware = [\n    (redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())\n];\n// creating store\nconst Store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], initalState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware)));\n// assigning store to next wrapper\nconst makeStore = ()=>Store\n;\nconst Wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__.createWrapper)(makeStore);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNyQjtBQUMrQjtBQUNaO0FBQ2Q7QUFFckMsc0JBQXNCO0FBQ3RCLE1BQU1NLFdBQVcsR0FBRyxFQUFFO0FBRXRCLGFBQWE7QUFDYixNQUFNQyxVQUFVLEdBQUc7SUFBQ0wsb0RBQUs7Q0FBQztBQUUxQixpQkFBaUI7QUFDVixNQUFNTSxLQUFLLEdBQUdSLGtEQUFXLENBQzlCSyxpREFBVyxFQUNYQyxXQUFXLEVBQ1hILDZFQUFtQixDQUFDRixzREFBZSxJQUFJTSxVQUFVLENBQUMsQ0FBQyxDQUNwRCxDQUFDO0FBRUYsa0NBQWtDO0FBQ2xDLE1BQU1FLFNBQVMsR0FBRyxJQUFNRCxLQUFLO0FBQUM7QUFFdkIsTUFBTUUsT0FBTyxHQUFHTixpRUFBYSxDQUFDSyxTQUFTLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zdG9yZS9zdG9yZS5qcz8zNjYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzXCI7XG5cbi8vIGluaXRpYWwgc3RhdGVzIGhlcmVcbmNvbnN0IGluaXRhbFN0YXRlID0ge307XG5cbi8vIG1pZGRsZXdhcmVcbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtdO1xuXG4vLyBjcmVhdGluZyBzdG9yZVxuZXhwb3J0IGNvbnN0IFN0b3JlID0gY3JlYXRlU3RvcmUoXG4gIHJvb3RSZWR1Y2VyLFxuICBpbml0YWxTdGF0ZSxcbiAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXG4pO1xuICBcbi8vIGFzc2lnbmluZyBzdG9yZSB0byBuZXh0IHdyYXBwZXJcbmNvbnN0IG1ha2VTdG9yZSA9ICgpID0+IFN0b3JlO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImNyZWF0ZVdyYXBwZXIiLCJyb290UmVkdWNlciIsImluaXRhbFN0YXRlIiwibWlkZGxld2FyZSIsIlN0b3JlIiwibWFrZVN0b3JlIiwiV3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/store.js\n");

/***/ }),

/***/ "./store/types.js":
/*!************************!*\
  !*** ./store/types.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_ALL_USERS\": () => (/* binding */ GET_ALL_USERS),\n/* harmony export */   \"GET_ERRORS\": () => (/* binding */ GET_ERRORS),\n/* harmony export */   \"GET_SAMPLE\": () => (/* binding */ GET_SAMPLE),\n/* harmony export */   \"GET_USER_VIA_ID\": () => (/* binding */ GET_USER_VIA_ID),\n/* harmony export */   \"LOGOUT\": () => (/* binding */ LOGOUT),\n/* harmony export */   \"SET_CURRENT_USER\": () => (/* binding */ SET_CURRENT_USER),\n/* harmony export */   \"SET_CURRENT_USER_ROLE\": () => (/* binding */ SET_CURRENT_USER_ROLE),\n/* harmony export */   \"UPDATE_USER\": () => (/* binding */ UPDATE_USER),\n/* harmony export */   \"USER_LOADING\": () => (/* binding */ USER_LOADING)\n/* harmony export */ });\nconst GET_SAMPLE = \"GET_SAMPLE\";\nconst GET_ERRORS = \"GET_ERRORS\";\nconst SET_CURRENT_USER = \"SET_CURRENT_USER\";\nconst SET_CURRENT_USER_ROLE = \"SET_CURRENT_USER_ROLE\";\nconst LOGOUT = \"LOGOUT\";\nconst GET_ALL_USERS = \"GET_ALL_USERS\";\nconst USER_LOADING = \"USER_LOADING\";\nconst GET_USER_VIA_ID = \"GET_USER_VIA_ID\";\nconst UPDATE_USER = \"UPDATE_USER\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS90eXBlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxVQUFVLEdBQUcsWUFBWSxDQUFDO0FBQ2hDLE1BQU1DLFVBQVUsR0FBRyxZQUFZLENBQUM7QUFDaEMsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUM7QUFDNUMsTUFBTUMscUJBQXFCLEdBQUcsdUJBQXVCLENBQUM7QUFDdEQsTUFBTUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztBQUN4QixNQUFNQyxhQUFhLEdBQUcsZUFBZSxDQUFDO0FBQ3RDLE1BQU1DLFlBQVksR0FBRyxjQUFjLENBQUM7QUFDcEMsTUFBTUMsZUFBZSxHQUFHLGlCQUFpQixDQUFDO0FBQzFDLE1BQU1DLFdBQVcsR0FBRyxhQUFhLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3RvcmUvdHlwZXMuanM/ODEwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgR0VUX1NBTVBMRSA9IFwiR0VUX1NBTVBMRVwiO1xuZXhwb3J0IGNvbnN0IEdFVF9FUlJPUlMgPSBcIkdFVF9FUlJPUlNcIjtcbmV4cG9ydCBjb25zdCBTRVRfQ1VSUkVOVF9VU0VSID0gXCJTRVRfQ1VSUkVOVF9VU0VSXCI7XG5leHBvcnQgY29uc3QgU0VUX0NVUlJFTlRfVVNFUl9ST0xFID0gXCJTRVRfQ1VSUkVOVF9VU0VSX1JPTEVcIjtcbmV4cG9ydCBjb25zdCBMT0dPVVQgPSBcIkxPR09VVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9BTExfVVNFUlMgPSBcIkdFVF9BTExfVVNFUlNcIjtcbmV4cG9ydCBjb25zdCBVU0VSX0xPQURJTkcgPSBcIlVTRVJfTE9BRElOR1wiO1xuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX1ZJQV9JRCA9IFwiR0VUX1VTRVJfVklBX0lEXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVIgPSBcIlVQREFURV9VU0VSXCI7Il0sIm5hbWVzIjpbIkdFVF9TQU1QTEUiLCJHRVRfRVJST1JTIiwiU0VUX0NVUlJFTlRfVVNFUiIsIlNFVF9DVVJSRU5UX1VTRVJfUk9MRSIsIkxPR09VVCIsIkdFVF9BTExfVVNFUlMiLCJVU0VSX0xPQURJTkciLCJHRVRfVVNFUl9WSUFfSUQiLCJVUERBVEVfVVNFUiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/types.js\n");

/***/ }),

/***/ "./utils/setAuthToken.js":
/*!*******************************!*\
  !*** ./utils/setAuthToken.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n// makes sure token is available,\nconst setAuthToken = (token)=>{\n    if (token) {\n        //Apply to every request\n        (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common.Authorization) = token;\n    } else {\n        //Delete Auth Header\n        delete (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common.Authorization);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setAuthToken);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zZXRBdXRoVG9rZW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRTFCLGlDQUFpQztBQUNqQyxNQUFNQyxZQUFZLEdBQUdDLENBQUFBLEtBQUssR0FBSTtJQUMxQixJQUFHQSxLQUFLLEVBQUU7UUFDTix3QkFBd0I7UUFDeEJGLG9GQUE4QyxHQUFHRSxLQUFLLENBQUM7S0FDMUQsTUFBTTtRQUNILG9CQUFvQjtRQUNwQixPQUFPRixvRkFBOEMsQ0FBQztLQUN6RDtDQUNKO0FBQ0QsaUVBQWVDLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi91dGlscy9zZXRBdXRoVG9rZW4uanM/Zjg2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vLyBtYWtlcyBzdXJlIHRva2VuIGlzIGF2YWlsYWJsZSxcbmNvbnN0IHNldEF1dGhUb2tlbiA9IHRva2VuID0+IHtcbiAgICBpZih0b2tlbikge1xuICAgICAgICAvL0FwcGx5IHRvIGV2ZXJ5IHJlcXVlc3RcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IHRva2VuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vRGVsZXRlIEF1dGggSGVhZGVyXG4gICAgICAgIGRlbGV0ZSBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHNldEF1dGhUb2tlbjtcbiJdLCJuYW1lcyI6WyJheGlvcyIsInNldEF1dGhUb2tlbiIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/setAuthToken.js\n");

/***/ }),

/***/ "./validations/is-empty.js":
/*!*********************************!*\
  !*** ./validations/is-empty.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst isEmpty = (value)=>value === undefined || value === null || typeof value === \"object\" && Object.keys(value).length === 0 || typeof value === \"string\" && value.trim().length === 0\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isEmpty);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92YWxpZGF0aW9ucy9pcy1lbXB0eS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsT0FBTyxHQUFHQyxDQUFBQSxLQUFLLEdBQ25CQSxLQUFLLEtBQUtDLFNBQVMsSUFDbkJELEtBQUssS0FBSyxJQUFJLElBQ2IsT0FBT0EsS0FBSyxLQUFLLFFBQVEsSUFBSUUsTUFBTSxDQUFDQyxJQUFJLENBQUNILEtBQUssQ0FBQyxDQUFDSSxNQUFNLEtBQUssQ0FBQyxJQUM1RCxPQUFPSixLQUFLLEtBQUssUUFBUSxJQUFJQSxLQUFLLENBQUNLLElBQUksRUFBRSxDQUFDRCxNQUFNLEtBQUssQ0FBQztBQUFFO0FBRTNELGlFQUFlTCxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vdmFsaWRhdGlvbnMvaXMtZW1wdHkuanM/YTllMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpc0VtcHR5ID0gdmFsdWUgPT5cbiAgdmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuICB2YWx1ZSA9PT0gbnVsbCB8fFxuICAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwKSB8fFxuICAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS50cmltKCkubGVuZ3RoID09PSAwKTtcblxuZXhwb3J0IGRlZmF1bHQgaXNFbXB0eTtcbiJdLCJuYW1lcyI6WyJpc0VtcHR5IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidHJpbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./validations/is-empty.js\n");

/***/ }),

/***/ "./node_modules/bulma/css/bulma.min.css":
/*!**********************************************!*\
  !*** ./node_modules/bulma/css/bulma.min.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/font-awesome/css/font-awesome.css":
/*!********************************************************!*\
  !*** ./node_modules/font-awesome/css/font-awesome.css ***!
  \********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("jwt-decode");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();