webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/popOver/Popover.js":
/*!***************************************!*\
  !*** ./components/popOver/Popover.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
var _jsxFileName = "/home/jreyes/Desktop/crewdemy/components/popOver/Popover.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function PopoverBase(props) {
  var _this = this;

  var categories = ['Programación web', 'Backend', 'Frontend', 'Mobile', 'Diseño', 'Marketing Digital', 'Ofimática', 'Online', 'Presenciales'];
  var initialFocusRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    initialFocusRef: initialFocusRef,
    placement: "bottom",
    closeOnBlur: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["PopoverTrigger"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outline",
    variantColor: "teal",
    w: "200px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "Categor\xEDas")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["PopoverContent"], {
    zIndex: 4,
    color: "white",
    bg: "brand.900",
    borderColor: "brand.300",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["PopoverHeader"], {
    pt: 4,
    fontWeight: "bold",
    border: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Nuestras categorias"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["PopoverArrow"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["PopoverCloseButton"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["PopoverBody"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, categories.map(function (cat, index) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      cursor: "pointer",
      className: "grow-sm",
      key: 'cat-' + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListIcon"], {
      icon: "check-circle",
      color: "green.500",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }), cat);
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["PopoverFooter"], {
    border: "0",
    d: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    pb: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (PopoverBase);

/***/ })

})
//# sourceMappingURL=index.js.afb692916564d42777f4.hot-update.js.map