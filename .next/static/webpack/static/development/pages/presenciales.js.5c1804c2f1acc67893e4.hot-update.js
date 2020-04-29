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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/home/jreyes/Desktop/crewdemy/pages/presenciales.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var myEventsList = [{
  start: moment__WEBPACK_IMPORTED_MODULE_2___default()().toDate(),
  end: moment__WEBPACK_IMPORTED_MODULE_2___default()().add(1, 'days').toDate(),
  title: 'Curso de React'
}, {
  start: moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(10, 'days').toDate(),
  end: moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(9, 'days').toDate(),
  title: 'Curso de Angular'
}, {
  start: moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(6, 'days').toDate(),
  end: moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(5, 'days').toDate(),
  title: 'Curso de Scrum'
}];
var localizer = Object(react_big_calendar__WEBPACK_IMPORTED_MODULE_1__["momentLocalizer"])(moment__WEBPACK_IMPORTED_MODULE_2___default.a);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var selectEvent = function selectEvent(e) {
    router.push("/course/1'");
  };

  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
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
    onSelectEvent: selectEvent,
    style: {
      height: 450
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }));
});

/***/ })

})
//# sourceMappingURL=presenciales.js.5c1804c2f1acc67893e4.hot-update.js.map