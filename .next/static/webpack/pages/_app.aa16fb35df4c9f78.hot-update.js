"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Menu/Menu.js":
/*!*************************************!*\
  !*** ./src/components/Menu/Menu.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MenuData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuData */ \"./src/components/Menu/MenuData.js\");\n/* harmony import */ var _ToggleBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleBtn */ \"./src/components/Menu/ToggleBtn.js\");\n/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu.module.css */ \"./src/components/Menu/Menu.module.css\");\n/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Menu = ()=>{\n    _s();\n    const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_3___default().menu),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToggleBtn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                setCollapsed: setCollapsed\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mehrad\\\\Desktop\\\\personal-portfolio\\\\src\\\\components\\\\Menu\\\\Menu.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuData__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                collaspsed: collapsed,\n                setCollapsed: setCollapsed\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mehrad\\\\Desktop\\\\personal-portfolio\\\\src\\\\components\\\\Menu\\\\Menu.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Mehrad\\\\Desktop\\\\personal-portfolio\\\\src\\\\components\\\\Menu\\\\Menu.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Menu, \"IaHwFfvbaw8y79e5do0CzWS1eXc=\");\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZW51L01lbnUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBa0M7QUFDRTtBQUNFO0FBQ0w7QUFFakMsTUFBTUksT0FBTzs7SUFDVCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0gsK0NBQVFBLENBQUM7SUFDN0MscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVdOLDhEQUFXOzswQkFDekIsOERBQUNELGtEQUFTQTtnQkFBQ0ssY0FBY0E7Ozs7OzswQkFDekIsOERBQUNOLGlEQUFRQTtnQkFBQ1UsWUFBWUw7Z0JBQVdDLGNBQWNBOzs7Ozs7Ozs7Ozs7QUFHckQ7R0FSTUY7S0FBQUE7QUFVTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NZW51L01lbnUuanM/NGY4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVudURhdGEgZnJvbSBcIi4vTWVudURhdGFcIjtcclxuaW1wb3J0IFRvZ2dsZUJ0biBmcm9tIFwiLi9Ub2dnbGVCdG5cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01lbnUubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY29sbGFwc2VkLCBzZXRDb2xsYXBzZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XHJcbiAgICAgIDxUb2dnbGVCdG4gc2V0Q29sbGFwc2VkPXtzZXRDb2xsYXBzZWR9IC8+XHJcbiAgICAgIDxNZW51RGF0YSBjb2xsYXNwc2VkPXtjb2xsYXBzZWR9IHNldENvbGxhcHNlZD17c2V0Q29sbGFwc2VkfS8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIl0sIm5hbWVzIjpbIk1lbnVEYXRhIiwiVG9nZ2xlQnRuIiwic3R5bGVzIiwidXNlU3RhdGUiLCJNZW51IiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwiZGl2IiwiY2xhc3NOYW1lIiwibWVudSIsImNvbGxhc3BzZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Menu/Menu.js\n"));

/***/ })

});