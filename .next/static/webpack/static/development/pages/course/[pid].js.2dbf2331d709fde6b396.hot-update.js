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
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 5,
    shadow: "md",
    borderWidth: "1px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    fontSize: "xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, head), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    mt: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, text), children));
};

var imageUrl = 'https://img-a.udemycdn.com/course/240x135/2056209_90a3_2.jpg';
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["useToast"])();
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h2",
    size: "lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "Nombre del Curso"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    columns: 2,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    columns: 2,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(Content, {
    head: "Duracion",
    text: '20 Hrs',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx(Content, {
    head: "Precio",
    text: "$300.00MXN",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    columns: 1,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(Content, {
    head: "Descripcion",
    text: 'Aqui va la descrpcion del curso',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(Content, {
    head: "Temario",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, Array(1, 2, 3, 4).map(function (item) {
    return __jsx(_Tema__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: 'Tema ' + item,
      key: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 19
      }
    });
  }))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    columns: 1,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(Content, {
    head: "Preview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    w: "100% ",
    src: imageUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: function onClick() {
      toast({
        position: 'top-left',
        title: 'Curso Comprado!.',
        description: 'Excelente! podrás accedes a tu curso desde tu perfil',
        status: 'success',
        duration: 9000,
        isClosable: true
      });
    },
    variantColor: "teal",
    isFullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, "Comprar Curso")))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    columns: 2,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx(Content, {
    head: "Categoria",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "row",
    flexWrap: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
    mr: "10px",
    variantColor: "cyan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["TagLabel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, "Tecnologia"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["TagIcon"], {
    icon: "check",
    size: "12px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
    variantColor: "cyan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["TagLabel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, "Programaci\xF3n"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["TagIcon"], {
    icon: "check",
    size: "12px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  })))))))), __jsx(Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }));
});

/***/ })

})
//# sourceMappingURL=[pid].js.2dbf2331d709fde6b396.hot-update.js.map