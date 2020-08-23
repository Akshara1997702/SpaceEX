module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+CRI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2B5T");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Button = ({
  text,
  onClickHandler
}) => {
  return __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.buttonWrapper
  }, __jsx("input", {
    type: "button",
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.button,
    value: text,
    onClick: onClickHandler
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "1dv8":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"containerWrapper": "index_containerWrapper__1XF5m",
	"header": "index_header__2_wA9",
	"heading": "index_heading__2HQwg",
	"container": "index_container__3Or0C",
	"content": "index_content__35pjB",
	"footer": "index_footer__2UCoA",
	"footerText": "index_footerText__2LnVT",
	"menu": "index_menu__xx6Nd"
};


/***/ }),

/***/ "2B5T":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"buttonWrapper": "Button_buttonWrapper__2s7EW",
	"button": "Button_button__3H8XZ",
	"active": "Button_active__sC3iF"
};


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "5/9h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+CRI");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZH79");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ncOi");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Filter = ({
  onClickHandler
}) => {
  return __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.filterContainer
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.filterHeading
  }, "Filters"), _constants__WEBPACK_IMPORTED_MODULE_3__["default"] && _constants__WEBPACK_IMPORTED_MODULE_3__["default"].map(el => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.headingWrapper
    }, __jsx("p", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heading
    }, el.heading)), __jsx("div", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.filterWrapper
    }, el.elements && el.elements.map(element => {
      return __jsx("div", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.filterButtonWrapper
      }, __jsx(_components_Button_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
        text: element.text,
        onClickHandler: e => onClickHandler(e, el.heading)
      }));
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "5bZr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("BR38");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Card = ({
  icon,
  missionName,
  missionId,
  launchYear,
  successfulLaunch,
  successfulLanding
}) => {
  return __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardWrapper
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.iconWrapper
  }, __jsx("img", {
    src: icon,
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon
  })), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardInfo
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardName
  }, missionName), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.missionInfo
  }, __jsx("ul", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.missionHeadingList
  }, "Mission Ids:", missionId && missionId.map(el => __jsx("li", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.missionId
  }, el))), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.missionHeading
  }, "Launch Year: ", __jsx("span", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.missionId
  }, launchYear)), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.missionHeading
  }, "Successful", __jsx("br", null), " Launch: ", __jsx("span", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.missionId
  }, successfulLaunch)), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.missionHeading
  }, "Successful", __jsx("br", null), "Landing: ", __jsx("span", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.missionId
  }, successfulLanding)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "BR38":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardWrapper": "Card_cardWrapper__1C4ng",
	"iconWrapper": "Card_iconWrapper__1oIhd",
	"icon": "Card_icon__3n5jA",
	"cardInfo": "Card_cardInfo__iFxd5",
	"cardName": "Card_cardName__FJBen",
	"missionInfo": "Card_missionInfo__3wyhw",
	"missionHeadingList": "Card_missionHeadingList__2JK0W",
	"missionId": "Card_missionId__1I9AG",
	"missionHeading": "Card_missionHeading__2P_ok"
};


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Filter_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5/9h");
/* harmony import */ var _components_Card_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5bZr");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1dv8");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Page = () => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: url,
    1: setUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('https://api.spacexdata.com/v3/launches?limit=100');
  const {
    0: params,
    1: setParams
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    launch_year: undefined,
    launch_success: undefined,
    land_success: undefined
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getData();
  }, []);

  async function getData() {
    const data = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(url).then(resp => setData(resp.data));
    return data;
  }

  const onClickAppendParams = (event, heading) => {
    let result = [];

    let obj = _objectSpread({}, params);

    let defaultUrl = 'https://api.spacexdata.com/v3/launches?limit=100';

    if (heading === 'Launch Year') {
      obj.launch_year = event.target.value;
    } else if (heading === 'Successful Launch') {
      obj.launch_success = event.target.value;
    } else {
      obj.land_success = event.target.value;
    }

    obj.launch_year ? result.push(`launch_year=${obj.launch_year}`) : null;
    obj.launch_success ? result.push(`launch_success=${obj.launch_success}`) : null;
    obj.land_success ? result.push(`land_success=${obj.land_success}`) : null;
    setParams(obj);
    result = defaultUrl + '&' + result.join('&');
    setUrl(defaultUrl + result);
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(result).then(resp => setData(resp.data));
  };

  return __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.containerWrapper
  }, __jsx("div", {
    id: "header",
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.header
  }, __jsx("h1", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heading
  }, "SpaceX Launch Programs")), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.menu
  }, __jsx(_containers_Filter_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClickHandler: onClickAppendParams
  })), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.content
  }, data && data.map((el, id) => {
    return __jsx(_components_Card_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: id + url,
      icon: el.links.mission_patch,
      missionName: `${el.mission_name} # ${el.flight_number}`,
      launchYear: el.launch_year,
      successfulLaunch: `${el.launch_success}`,
      missionId: el.mission_id
    });
  }))), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.footer
  }, "Developed by: ", __jsx("span", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.footerText
  }, "Akshara Ahluwalia")));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "ZH79":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"filterContainer": "Filter_filterContainer__24Aom",
	"filterHeading": "Filter_filterHeading__3XNWR",
	"headingWrapper": "Filter_headingWrapper__2m_El",
	"heading": "Filter_heading__2rYa-",
	"filterWrapper": "Filter_filterWrapper__1THGP"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ncOi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const data = [{
  id: 1,
  heading: 'Launch Year',
  elements: [{
    id: 1,
    text: '2006'
  }, {
    id: 2,
    text: '2007'
  }, {
    id: 3,
    text: '2008'
  }, {
    id: 4,
    text: '2009'
  }, {
    id: 5,
    text: '2010'
  }, {
    id: 6,
    text: '2011'
  }, {
    id: 7,
    text: '2012'
  }, {
    id: 8,
    text: '2013'
  }, {
    id: 9,
    text: '2014'
  }, {
    id: 10,
    text: '2015'
  }, {
    id: 11,
    text: '2016'
  }, {
    id: 12,
    text: '2017'
  }, {
    id: 13,
    text: '2018'
  }, {
    id: 14,
    text: '2019'
  }, {
    id: 15,
    text: '2020'
  }]
}, {
  id: 2,
  heading: 'Successful Launch',
  elements: [{
    id: 1,
    text: 'true'
  }, {
    id: 2,
    text: 'false'
  }]
}, {
  id: 3,
  heading: 'Successful Landing',
  elements: [{
    id: 1,
    text: 'true'
  }, {
    id: 2,
    text: 'false'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });