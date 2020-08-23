module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5bZr");


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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });