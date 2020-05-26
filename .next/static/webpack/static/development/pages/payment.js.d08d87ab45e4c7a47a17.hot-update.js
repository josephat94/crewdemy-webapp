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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);


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
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
      lineNumber: 33,
      columnNumber: 9
    }
  }, moment__WEBPACK_IMPORTED_MODULE_3___default()().format('DD MM YYYY hh mm A')), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Joseph")), __jsx("div", {
    classNameName: "message wow-animate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    OpenPay.setSandboxMode(true);
    OpenPay.setId('mqrfjs0h2c8pxopp6c63');
    OpenPay.setApiKey('pk_0da9497fbffc4c5996b42ce351972d92');
  }, []);

  var createToken = function createToken(e) {
    e.preventDefault();
    OpenPay.token.extractFormAndCreate($('#processCard'), successCard, errorCard);
  };

  var successCard = function successCard() {};

  var errorCard = function errorCard() {};

  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx("head", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("script", {
    type: "text/javascript",
    src: "https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }), __jsx("script", {
    type: "text/javascript",
    src: "https://js.openpay.mx/openpay.v1.min.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }), __jsx("script", {
    type: "text/javascript",
    src: "https://js.openpay.mx/openpay-data.v1.min.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["SimpleGrid"], {
    columns: [1, 0, 1],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    display: "flex",
    justifyContent: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx("form", {
    id: "processCard",
    name: "processCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["SimpleGrid"], {
    columns: [2, 0, 2],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, __jsx("img", {
    "class": "img-responsive pull-right",
    src: "http://i76.imgup.net/accepted_c22e0.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, "Holder Name:"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card": "holder_name",
    size: "50",
    type: "text",
    placeholder: "Holder name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, "Card number:"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card": "card_number",
    size: "50",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, "Expiration year:"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card": "expiration_year",
    size: "4",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, "Expiration month:"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card": "expiration_month",
    size: "4",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, "cvv2:"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card": "cvv2",
    size: "5",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, "Street:"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card-address": "line1",
    size: "20",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, "Number:"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card-address": "line2",
    size: "20",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  }, "References:"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card-address": "line3",
    size: "20",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 17
    }
  }, "Postal code:"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card-address": "postal_code",
    size: "6",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 17
    }
  }, "City:"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card-address": "city",
    size: "20",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, "State:"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card-address": "state",
    size: "20",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  }, "Country code:"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card-address": "country_code",
    size: "3",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 17
    }
  }))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    justifyContent: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variantColor: "teal",
    onClick: createToken,
    id: "makeRequestCard",
    type: "button",
    value: "Make Card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 15
    }
  }, "PAGAR"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Live);

/***/ })

})
//# sourceMappingURL=payment.js.d08d87ab45e4c7a47a17.hot-update.js.map