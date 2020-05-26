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
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
      lineNumber: 35,
      columnNumber: 9
    }
  }, moment__WEBPACK_IMPORTED_MODULE_3___default()().format('DD MM YYYY hh mm A')), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "Joseph")), __jsx("div", {
    className: "message wow-animate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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

  var toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["useToast"])();

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

  var successCard = function successCard() {
    toast({
      position: 'top-right',
      title: 'Curso Comprado!.',
      description: 'Error al procesar el pago',
      status: 'success',
      duration: 9000,
      isClosable: true
    });
  };

  var errorCard = function errorCard() {
    toast({
      position: 'top-right',
      title: 'Curso Comprado!.',
      description: 'Error al procesar tu pago',
      status: 'error',
      duration: 9000,
      isClosable: true
    });
  };

  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["SimpleGrid"], {
    columns: [1, 0, 2],
    spacing: 10,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Heading"], {
    as: "h2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, "Informacion de la compra"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Skeleton"], {
    height: "300px",
    my: "10px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Skeleton"], {
    height: "20px",
    my: "10px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Skeleton"], {
    height: "20px",
    my: "10px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Skeleton"], {
    height: "20px",
    my: "10px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Skeleton"], {
    height: "20px",
    my: "10px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Skeleton"], {
    height: "20px",
    my: "10px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Heading"], {
    as: "h2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, "Informacion de pago"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }), __jsx("form", {
    id: "processCard",
    name: "processCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["SimpleGrid"], {
    columns: [2, 0, 2],
    spacing: 10,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }, __jsx("img", {
    className: "img-responsive pull-right",
    src: "http://i76.imgup.net/accepted_c22e0.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card": "holder_name",
    size: "50",
    type: "text",
    placeholder: "Holder name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card": "card_number",
    size: "50",
    type: "text",
    placeholder: "Card Number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "Ex\u1E55iration year",
    variant: "filled",
    "data-openpay-card": "expiration_year",
    size: "4",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "Expiration Month",
    variant: "filled",
    "data-openpay-card": "expiration_month",
    size: "4",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "CVVr",
    variant: "filled",
    "data-openpay-card": "cvv2",
    size: "5",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card-address": "line1",
    size: "20",
    type: "text",
    placeholder: "Street",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card-address": "line2",
    size: "20",
    type: "text",
    placeholder: "Number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card-address": "line3",
    size: "20",
    type: "text",
    placeholder: "References",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card-address": "postal_code",
    size: "6",
    type: "text",
    placeholder: "Postal code",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card-address": "city",
    size: "20",
    type: "text",
    placeholder: "City",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card-address": "state",
    size: "20",
    type: "text",
    placeholder: "State",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    variant: "filled",
    "data-openpay-card-address": "country_code",
    size: "3",
    type: "text",
    placeholder: "Country code ej MX",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 17
    }
  }))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 13
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    justifyContent: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    isFullWidth: true,
    variantColor: "teal",
    onClick: createToken,
    id: "makeRequestCard",
    type: "button",
    value: "Make Card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 15
    }
  }, "PAGAR"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Live);

/***/ })

})
//# sourceMappingURL=payment.js.ea26d3b77574fb226600.hot-update.js.map