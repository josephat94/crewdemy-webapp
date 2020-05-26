webpackHotUpdate("static/development/pages/payment.js",{

/***/ "./pages/payment.js":
/*!**************************!*\
  !*** ./pages/payment.js ***!
  \**************************/
/*! exports provided: Live, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live", function() { return Live; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");


var _this = undefined,
    _jsxFileName = "/home/jreyes/Desktop/crewdemy/pages/payment.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Msg = function Msg(props) {
  var myRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {//myRef.current.scrollIntoView();
  }, []);
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    ref: myRef,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    w: "95%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("span", {
    style: {
      color: '#a8aab1',
      marginRight: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, moment__WEBPACK_IMPORTED_MODULE_3___default()().format('DD MM YYYY hh mm A')), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "Joseph")), __jsx("div", {
    className: "message wow-animate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, props.children));
};

var Live = function Live(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      msgs = _useState[0],
      setMsgs = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      notes = _useState2[0],
      setNotes = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      textNote = _useState3[0],
      setTextNote = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      text = _useState4[0],
      setText = _useState4[1];

  var sendMsg = function sendMsg() {
    var newmsg = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(msgs);

    if (text != '') {
      newmsg.push(text);
      setMsgs(newmsg);
      setText('');
    }
  };

  var SendNote = function SendNote() {
    var newNotes = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(notes);

    if (textNote != '') {
      newNotes.push(textNote);
      setNotes(newNotes);
      setTextNote('');
    }
  };

  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["SimpleGrid"], {
    columns: [1, 0, 2],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("form", {
    action: "#",
    method: "POST",
    id: "payment-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "hidden",
    name: "token_id",
    id: "token_id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }), __jsx("input", {
    type: "hidden",
    name: "use_card_points",
    id: "use_card_points",
    value: "false",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }), __jsx("div", {
    "class": "pymnt-itm card active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "Tarjeta de cr\xE9dito o d\xE9bito"), __jsx("div", {
    "class": "pymnt-cntnt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, __jsx("div", {
    "class": "card-expl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx("div", {
    "class": "credit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 19
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, "Tarjetas de cr\xE9dito")), __jsx("div", {
    "class": "debit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, "Tarjetas de d\xE9bito"))), __jsx("div", {
    "class": "sctn-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx("div", {
    "class": "sctn-col l",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 19
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, "Nombre del titular"), __jsx("input", {
    type: "text",
    placeholder: "Como aparece en la tarjeta",
    autocomplete: "off",
    "data-openpay-card": "holder_name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  })), __jsx("div", {
    "class": "sctn-col",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, "N\xFAmero de tarjeta"), __jsx("input", {
    type: "text",
    autocomplete: "off",
    "data-openpay-card": "card_number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }))), __jsx("div", {
    "class": "sctn-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, __jsx("div", {
    "class": "sctn-col l",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 19
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, "Fecha de expiraci\xF3n"), __jsx("div", {
    "class": "sctn-col half l",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Mes",
    "data-openpay-card": "expiration_month",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 23
    }
  })), __jsx("div", {
    "class": "sctn-col half l",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "A\xF1o",
    "data-openpay-card": "expiration_year",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 23
    }
  }))), __jsx("div", {
    "class": "sctn-col cvv",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 19
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, "C\xF3digo de seguridad"), __jsx("div", {
    "class": "sctn-col half l",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "3 d\xEDgitos",
    autocomplete: "off",
    "data-openpay-card": "cvv2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 23
    }
  })))), __jsx("div", {
    "class": "openpay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx("div", {
    "class": "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  }, "Transacciones realizadas v\xEDa:"), __jsx("div", {
    "class": "shield",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }, "Tus pagos se realizan de forma segura con encriptaci\xF3n de 256 bits")), __jsx("div", {
    "class": "sctn-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, __jsx("a", {
    "class": "button rght",
    id: "pay-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 19
    }
  }, "Pagar"))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Live);

/***/ })

})
//# sourceMappingURL=payment.js.b79293eb0d518c68ece8.hot-update.js.map