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
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n// import { Html, Head, Main, NextScript } from \"next/document\";\n// class MyDocument extends Document {\n//   static async getInitialProps(ctx) {\n//     const initialProps = await Document.getInitialProps(ctx);\n//     return { ...initialProps };\n//   }\n//   render() {\n//     return (\n//       <Html>\n//         <Head>\n//           <title>DevVeloz</title>\n//         </Head>\n//         <body>\n//           <Main />\n//           <NextScript />\n//         </body>\n//       </Html>\n//     );\n//   }\n// }\n// export default MyDocument;\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    static async getInitialProps(ctx) {\n        const originalRenderPage = ctx.renderPage;\n        // Run the React rendering logic synchronously\n        ctx.renderPage = ()=>originalRenderPage({\n                // Useful for wrapping the whole react tree\n                enhanceApp: (App)=>App,\n                // Useful for wrapping in a per-page basis\n                enhanceComponent: (Component)=>Component\n            });\n        // Run the parent `getInitialProps`, it now includes the custom `renderPage`\n        const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n        return initialProps;\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"DevVeloz\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL656\\\\Desktop\\\\Dev_Veloz\\\\pages\\\\_document.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            className: \"descrption\",\n                            content: \"DevVeloz Portafolio websitie\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL656\\\\Desktop\\\\Dev_Veloz\\\\pages\\\\_document.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL656\\\\Desktop\\\\Dev_Veloz\\\\pages\\\\_document.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL656\\\\Desktop\\\\Dev_Veloz\\\\pages\\\\_document.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL656\\\\Desktop\\\\Dev_Veloz\\\\pages\\\\_document.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL656\\\\Desktop\\\\Dev_Veloz\\\\pages\\\\_document.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL656\\\\Desktop\\\\Dev_Veloz\\\\pages\\\\_document.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\DELL656\\\\Desktop\\\\Dev_Veloz\\\\pages\\\\_document.js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxnRUFBZ0U7QUFFaEUsc0NBQXNDO0FBQ3RDLHdDQUF3QztBQUN4QyxnRUFBZ0U7QUFDaEUsa0NBQWtDO0FBQ2xDLE1BQU07QUFFTixlQUFlO0FBQ2YsZUFBZTtBQUNmLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsb0NBQW9DO0FBQ3BDLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLDJCQUEyQjtBQUMzQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLFNBQVM7QUFDVCxNQUFNO0FBQ04sSUFBSTtBQUVKLDZCQUE2Qjs7QUFDMEM7QUFFdkUsTUFBTUssbUJBQW1CTCxzREFBUUE7SUFDL0IsYUFBYU0sZ0JBQWdCQyxHQUFHLEVBQUU7UUFDaEMsTUFBTUMscUJBQXFCRCxJQUFJRSxVQUFVO1FBRXpDLDhDQUE4QztRQUM5Q0YsSUFBSUUsVUFBVSxHQUFHLElBQ2ZELG1CQUFtQjtnQkFDakIsMkNBQTJDO2dCQUMzQ0UsWUFBWSxDQUFDQyxNQUFRQTtnQkFDckIsMENBQTBDO2dCQUMxQ0Msa0JBQWtCLENBQUNDLFlBQWNBO1lBQ25DO1FBRUYsNEVBQTRFO1FBQzVFLE1BQU1DLGVBQWUsTUFBTWQsb0VBQXdCLENBQUNPO1FBRXBELE9BQU9PO0lBQ1Q7SUFFQUMsU0FBUztRQUNQLHFCQUNFLDhEQUFDZCwrQ0FBSUE7WUFBQ2UsTUFBSzs7OEJBQ1QsOERBQUNkLCtDQUFJQTs7c0NBQ0gsOERBQUNlO3NDQUFNOzs7Ozs7c0NBQ1AsOERBQUNDOzRCQUFLQyxXQUFVOzRCQUFhQyxTQUFROzs7Ozs7c0NBQ3JDLDhEQUFDQzs0QkFDQ0MsS0FBSTs0QkFDSkMsTUFBSzs7Ozs7Ozs7Ozs7OzhCQUdULDhEQUFDQzs7c0NBQ0MsOERBQUNyQiwrQ0FBSUE7Ozs7O3NDQUNMLDhEQUFDQyxxREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSW5CO0FBQ0Y7QUFFQSxpRUFBZUMsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRhZm9saW8vLi9wYWdlcy9fZG9jdW1lbnQuanM/NTM4YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcclxuXHJcbi8vIGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XHJcbi8vICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcclxuLy8gICAgIGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4vLyAgICAgcmV0dXJuIHsgLi4uaW5pdGlhbFByb3BzIH07XHJcbi8vICAgfVxyXG5cclxuLy8gICByZW5kZXIoKSB7XHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICA8SHRtbD5cclxuLy8gICAgICAgICA8SGVhZD5cclxuLy8gICAgICAgICAgIDx0aXRsZT5EZXZWZWxvejwvdGl0bGU+XHJcbi8vICAgICAgICAgPC9IZWFkPlxyXG4vLyAgICAgICAgIDxib2R5PlxyXG4vLyAgICAgICAgICAgPE1haW4gLz5cclxuLy8gICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XHJcbi8vICAgICAgICAgPC9ib2R5PlxyXG4vLyAgICAgICA8L0h0bWw+XHJcbi8vICAgICApO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgTXlEb2N1bWVudDtcclxuaW1wb3J0IERvY3VtZW50LCB7IEh0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tIFwibmV4dC9kb2N1bWVudFwiO1xyXG5cclxuY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxSZW5kZXJQYWdlID0gY3R4LnJlbmRlclBhZ2U7XHJcblxyXG4gICAgLy8gUnVuIHRoZSBSZWFjdCByZW5kZXJpbmcgbG9naWMgc3luY2hyb25vdXNseVxyXG4gICAgY3R4LnJlbmRlclBhZ2UgPSAoKSA9PlxyXG4gICAgICBvcmlnaW5hbFJlbmRlclBhZ2Uoe1xyXG4gICAgICAgIC8vIFVzZWZ1bCBmb3Igd3JhcHBpbmcgdGhlIHdob2xlIHJlYWN0IHRyZWVcclxuICAgICAgICBlbmhhbmNlQXBwOiAoQXBwKSA9PiBBcHAsXHJcbiAgICAgICAgLy8gVXNlZnVsIGZvciB3cmFwcGluZyBpbiBhIHBlci1wYWdlIGJhc2lzXHJcbiAgICAgICAgZW5oYW5jZUNvbXBvbmVudDogKENvbXBvbmVudCkgPT4gQ29tcG9uZW50LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBSdW4gdGhlIHBhcmVudCBgZ2V0SW5pdGlhbFByb3BzYCwgaXQgbm93IGluY2x1ZGVzIHRoZSBjdXN0b20gYHJlbmRlclBhZ2VgXHJcbiAgICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuXHJcbiAgICByZXR1cm4gaW5pdGlhbFByb3BzO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+RGV2VmVsb3o8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgY2xhc3NOYW1lPVwiZGVzY3JwdGlvblwiIGNvbnRlbnQ9XCJEZXZWZWxveiBQb3J0YWZvbGlvIHdlYnNpdGllXCIgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbnByb2dyZXNzLzAuMi4wL25wcm9ncmVzcy5jc3NcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cclxuICAgICAgICA8L2JvZHk+XHJcbiAgICAgIDwvSHRtbD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeURvY3VtZW50O1xyXG4iXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJIdG1sIiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiTXlEb2N1bWVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIm9yaWdpbmFsUmVuZGVyUGFnZSIsInJlbmRlclBhZ2UiLCJlbmhhbmNlQXBwIiwiQXBwIiwiZW5oYW5jZUNvbXBvbmVudCIsIkNvbXBvbmVudCIsImluaXRpYWxQcm9wcyIsInJlbmRlciIsImxhbmciLCJ0aXRsZSIsIm1ldGEiLCJjbGFzc05hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_document.js")));
module.exports = __webpack_exports__;

})();