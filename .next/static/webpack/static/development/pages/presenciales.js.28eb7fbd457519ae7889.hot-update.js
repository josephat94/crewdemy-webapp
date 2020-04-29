webpackHotUpdate("static/development/pages/presenciales.js",{

/***/ "./pages/presenciales.js":
/*!*******************************!*\
  !*** ./pages/presenciales.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-big-calendar */ "./node_modules/react-big-calendar/dist/react-big-calendar.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
var _this = undefined,
    _jsxFileName = "/home/jreyes/Desktop/crewdemy/pages/presenciales.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var myEventsList = [{
  start: moment__WEBPACK_IMPORTED_MODULE_2___default()().toDate(),
  end: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(1, 'days').toDate(),
  title: 'Curso de React'
}, {
  start: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(10, 'days').toDate(),
  end: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(11, 'days').toDate(),
  title: 'Curso de Angular'
}, {
  start: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(5, 'days').toDate(),
  end: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(6, 'days').toDate(),
  title: 'Curso de Scrum'
}];
var localizer = Object(react_big_calendar__WEBPACK_IMPORTED_MODULE_1__["momentLocalizer"])(moment__WEBPACK_IMPORTED_MODULE_2___default.a);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 3
    }
  }, __jsx(react_big_calendar__WEBPACK_IMPORTED_MODULE_1__["Calendar"], {
    localizer: localizer,
    events: myEventsList,
    startAccessor: "start",
    endAccessor: "end",
    messages: {
      next: 'Siguiente',
      previous: 'Atrás',
      today: 'Ahora',
      month: 'Mes',
      week: 'Semana',
      day: 'Día'
    },
    style: {
      height: 450
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }));
});

/***/ })

})
//# sourceMappingURL=presenciales.js.28eb7fbd457519ae7889.hot-update.js.map