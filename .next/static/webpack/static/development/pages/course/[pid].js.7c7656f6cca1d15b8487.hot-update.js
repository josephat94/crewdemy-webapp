webpackHotUpdate("static/development/pages/course/[pid].js",{

/***/ "./pages/course/Tema.js":
/*!******************************!*\
  !*** ./pages/course/Tema.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");


var _this = undefined,
    _jsxFileName = "/home/jreyes/Desktop/crewdemy/pages/course/Tema.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Tema = function Tema(props) {
  var title = props.title;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      show = _React$useState2[0],
      setShow = _React$useState2[1];

  var handleToggle = function handleToggle() {
    return setShow(!show);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    h: "15",
    p: 5,
    shadow: "md",
    borderWidth: "1px",
    onClick: handleToggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    mt: 4,
    isOpen: show,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."));
};

/* harmony default export */ __webpack_exports__["default"] = (Tema);

/***/ })

})
//# sourceMappingURL=[pid].js.7c7656f6cca1d15b8487.hot-update.js.map