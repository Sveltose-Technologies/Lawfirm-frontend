/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/common/Footer.jsx":
/*!*******************************!*\
  !*** ./src/common/Footer.jsx ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



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

/***/ "./src/components/layout/Layout.jsx":
/*!******************************************!*\
  !*** ./src/components/layout/Layout.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Footer */ \"./src/common/Footer.jsx\");\n/* harmony import */ var _common_Footer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_Footer__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/Header */ \"./src/components/header/Header.jsx\");\n\n// import React from \"react\";\n// import Head from \"next/head\";\n// import Footer from \"../../common/Footer\";\n// import Topbar from \"../../common/Topbar\";\n// import LayoutHeader from \"../header/LayoutHeader\";\n// function Layout({ children }) {\n//   return (\n//     <>\n//       <Head>\n//         <title>\n//           Corelaw- Law firm, Lawyers & Legal Service React NextJs Template\n//         </title>\n//         <meta name=\"description\" content=\"Generated by create next app\" />\n//         <link rel=\"icon\" href=\"assets/images/icons/logo-icon.svg\" />\n//       </Head>\n//       <Topbar />\n//       <LayoutHeader />\n//       {children}\n//       <Footer />\n//     </>\n//   );\n// }\n// export default Layout;\n// File: src/components/Layout.js\n\n\n\n\nfunction Layout(param) {\n    var children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Corelaw - Law firm\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Documents\\\\Lawfirm-Project\\\\src\\\\components\\\\layout\\\\Layout.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Documents\\\\Lawfirm-Project\\\\src\\\\components\\\\layout\\\\Layout.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/assets/images/icons/logo-icon.svg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Documents\\\\Lawfirm-Project\\\\src\\\\components\\\\layout\\\\Layout.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Documents\\\\Lawfirm-Project\\\\src\\\\components\\\\layout\\\\Layout.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Documents\\\\Lawfirm-Project\\\\src\\\\components\\\\layout\\\\Layout.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Documents\\\\Lawfirm-Project\\\\src\\\\components\\\\layout\\\\Layout.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_common_Footer__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Documents\\\\Lawfirm-Project\\\\src\\\\components\\\\layout\\\\Layout.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBa0NBO0FBbENBLDZCQUE2QjtBQUM3QixnQ0FBZ0M7QUFDaEMsNENBQTRDO0FBQzVDLDRDQUE0QztBQUc1QyxxREFBcUQ7QUFFckQsa0NBQWtDO0FBQ2xDLGFBQWE7QUFDYixTQUFTO0FBQ1QsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQiw2RUFBNkU7QUFDN0UsbUJBQW1CO0FBQ25CLDZFQUE2RTtBQUM3RSx1RUFBdUU7QUFDdkUsZ0JBQWdCO0FBRWhCLG1CQUFtQjtBQUNuQix5QkFBeUI7QUFFekIsbUJBQW1CO0FBRW5CLG1CQUFtQjtBQUNuQixVQUFVO0FBQ1YsT0FBTztBQUNQLElBQUk7QUFFSix5QkFBeUI7QUFHekIsaUNBQWlDO0FBRVA7QUFDRztBQUVZO0FBQ0g7QUFFdEMsU0FBU0ksTUFBTSxDQUFDLEtBQVksRUFBRTtRQUFkLFFBQVUsR0FBVixLQUFZLENBQVZDLFFBQVE7SUFDeEIscUJBQ0U7OzBCQUNFLDhEQUFDSixrREFBSTs7a0NBQ0gsOERBQUNLLE9BQUs7a0NBQUMsb0JBQWtCOzs7Ozs0QkFBUTtrQ0FDakMsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxhQUFhO3dCQUFDQyxPQUFPLEVBQUMsOEJBQThCOzs7Ozs0QkFBRztrQ0FDbEUsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsb0NBQW9DOzs7Ozs0QkFBRzs7Ozs7O29CQUN4RDswQkFJUCw4REFBQ1Qsc0RBQU07Ozs7b0JBQUc7MEJBR1YsOERBQUNVLE1BQUk7MEJBQ0ZSLFFBQVE7Ozs7O29CQUNKOzBCQUdQLDhEQUFDSCx1REFBTTs7OztvQkFBRzs7b0JBQ1QsQ0FDSDtDQUNIO0FBdEJRRSxLQUFBQSxNQUFNO0FBd0JmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qc3g/NjA3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuLy8gaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tbW9uL0Zvb3RlclwiO1xyXG4vLyBpbXBvcnQgVG9wYmFyIGZyb20gXCIuLi8uLi9jb21tb24vVG9wYmFyXCI7XHJcblxyXG5cclxuLy8gaW1wb3J0IExheW91dEhlYWRlciBmcm9tIFwiLi4vaGVhZGVyL0xheW91dEhlYWRlclwiO1xyXG5cclxuLy8gZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8PlxyXG4vLyAgICAgICA8SGVhZD5cclxuLy8gICAgICAgICA8dGl0bGU+XHJcbi8vICAgICAgICAgICBDb3JlbGF3LSBMYXcgZmlybSwgTGF3eWVycyAmIExlZ2FsIFNlcnZpY2UgUmVhY3QgTmV4dEpzIFRlbXBsYXRlXHJcbi8vICAgICAgICAgPC90aXRsZT5cclxuLy8gICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbi8vICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJhc3NldHMvaW1hZ2VzL2ljb25zL2xvZ28taWNvbi5zdmdcIiAvPlxyXG4vLyAgICAgICA8L0hlYWQ+XHJcblxyXG4vLyAgICAgICA8VG9wYmFyIC8+XHJcbi8vICAgICAgIDxMYXlvdXRIZWFkZXIgLz5cclxuXHJcbi8vICAgICAgIHtjaGlsZHJlbn1cclxuXHJcbi8vICAgICAgIDxGb290ZXIgLz5cclxuLy8gICAgIDwvPlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuXHJcblxyXG4vLyBGaWxlOiBzcmMvY29tcG9uZW50cy9MYXlvdXQuanNcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tbW9uL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9oZWFkZXIvSGVhZGVyXCI7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Db3JlbGF3IC0gTGF3IGZpcm08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9hc3NldHMvaW1hZ2VzL2ljb25zL2xvZ28taWNvbi5zdmdcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiBcclxuXHJcbiAgIFxyXG4gICAgICA8SGVhZGVyIC8+XHJcblxyXG4gICAgIFxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiBcclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJGb290ZXIiLCJIZWFkZXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/layout/Layout.jsx\n"));

/***/ })

});