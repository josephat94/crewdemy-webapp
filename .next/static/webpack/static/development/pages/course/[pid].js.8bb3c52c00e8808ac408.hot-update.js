webpackHotUpdate("static/development/pages/course/[pid].js",{

/***/ "./pages/course/[pid].js":
/*!*******************************!*\
  !*** ./pages/course/[pid].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _Tema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tema */ "./pages/course/Tema.js");
var _this = undefined,
    _jsxFileName = "/home/jreyes/Desktop/crewdemy/pages/course/[pid].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Content = function Content(_ref) {
  var head = _ref.head,
      text = _ref.text,
      children = _ref.children;
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    spacing: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 5,
    shadow: "md",
    borderWidth: "1px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    fontSize: "xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, head), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    mt: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, text), children));
};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h2",
    size: "lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Nombre del Curso"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    columns: 4,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(Content, {
    head: "Duracion",
    text: '20 Hrs',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(Content, {
    head: "Precio",
    text: "$300.00MXN",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(Content, {
    head: "Categoria",
    text: "Tecnologia",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(Content, {
    head: "Categoria",
    text: "Tecnologia",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    columns: 2,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(Content, {
    head: "Descripcion",
    text: 'Aqui va la descrpcion del curso',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(Content, {
    head: "Temario",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, Array(1, 2, 3, 4).map(function (item) {
    return __jsx(_Tema__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    });
  })))), __jsx(Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }));
});

/***/ })

})
//# sourceMappingURL=[pid].js.8bb3c52c00e8808ac408.hot-update.js.map