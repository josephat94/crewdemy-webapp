webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/Navbar */ "./components/navbar/Navbar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _login_LoginModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/LoginModal */ "./components/login/LoginModal.js");
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/Footer */ "./components/footer/Footer.js");
var _this = undefined,
    _jsxFileName = "/home/jreyes/Desktop/crewdemy/components/layout/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Layout = function Layout(props) {
  var _useDisclosure = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["useDisclosure"])(),
      isOpen = _useDisclosure.isOpen,
      onOpen = _useDisclosure.onOpen,
      onClose = _useDisclosure.onClose;

  return __jsx("div", {
    style: {
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,200&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })), __jsx(_navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onOpen: onOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    pr: "20px",
    pl: "20px",
    pt: "50px",
    className: "layout-body",
    templateColumns: "repeat(1, 1fr)",
    gap: 10,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    w: "100%",
    h: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, props.children), __jsx(_footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })), __jsx(_login_LoginModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: isOpen,
    onClose: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.3d42fbeab29fa9a37975.hot-update.js.map