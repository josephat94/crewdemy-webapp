webpackHotUpdate("static/development/pages/course/[pid].js",{

/***/ "./components/navbar/Navbar.js":
/*!*************************************!*\
  !*** ./components/navbar/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);



var _this = undefined,
    _jsxFileName = "/home/jreyes/Desktop/crewdemy/components/navbar/Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var MenuItems = function MenuItems(_ref) {
  var children = _ref.children;
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    mt: {
      base: 4,
      md: 0
    },
    mr: 6,
    display: "block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }
  }, children);
};

var Navbar = function Navbar(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      show = _React$useState2[0],
      setShow = _React$useState2[1];

  var handleToggle = function handleToggle() {
    return setShow(!show);
  };

  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["useColorMode"])(),
      colorMode = _useColorMode.colorMode,
      toggleColorMode = _useColorMode.toggleColorMode;

  var onOpen = props.onOpen;
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Flex"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: "nav",
    align: "center",
    justify: "space-between",
    wrap: "wrap",
    padding: "1.5rem",
    bg: "brand.900",
    color: "white",
    width: "100%"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    align: "center",
    mr: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    className: "wow-animate grow",
    as: "h1",
    size: "lg",
    letterSpacing: '-.1rem',
    cursor: "pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    height: "40px",
    src: "https://crewdemy.com/img/Logo-bco.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: {
      sm: 'block',
      md: 'none'
    },
    onClick: handleToggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("svg", {
    fill: "white",
    width: "12px",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, "Menu"), __jsx("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: {
      sm: show ? 'block' : 'none',
      md: 'flex'
    },
    width: {
      sm: 'full',
      md: 'auto'
    },
    alignItems: "center",
    flexGrow: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/presenciales",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: "grow",
    mr: "20px",
    cursor: "pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, "Cursos Presenciales")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: "grow",
    mr: "20px",
    cursor: "pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, "Nosotros"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: "grow",
    mr: "20px",
    cursor: "pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, "CrewSoft")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: {
      sm: show ? 'block' : 'none',
      md: 'flex'
    },
    mt: {
      base: 4,
      md: 0
    },
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx(MenuItems, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    bg: "brand.900",
    onClick: toggleColorMode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, colorMode === 'light' ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    name: "moon",
    size: "24px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    name: "sun",
    size: "24px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onOpen,
    bg: "brand.300",
    border: "0px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, "Ingresar")));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=[pid].js.7227ff47700c8de99c1f.hot-update.js.map