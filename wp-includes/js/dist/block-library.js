this["wp"] = this["wp"] || {}; this["wp"]["blockLibrary"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 436);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ 100:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["notices"]; }());

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["autop"]; }());

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var classNames = (function () {
		// don't inherit from Object so we can skip hasOwnProperty check later
		// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
		function StorageObject() {}
		StorageObject.prototype = Object.create(null);

		function _parseArray (resultSet, array) {
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				_parse(resultSet, array[i]);
			}
		}

		var hasOwn = {}.hasOwnProperty;

		function _parseNumber (resultSet, num) {
			resultSet[num] = true;
		}

		function _parseObject (resultSet, object) {
			for (var k in object) {
				if (hasOwn.call(object, k)) {
					// set value to false instead of deleting it to avoid changing object structure
					// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
					resultSet[k] = !!object[k];
				}
			}
		}

		var SPACE = /\s+/;
		function _parseString (resultSet, str) {
			var array = str.split(SPACE);
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				resultSet[array[i]] = true;
			}
		}

		function _parse (resultSet, arg) {
			if (!arg) return;
			var argType = typeof arg;

			// 'foo bar'
			if (argType === 'string') {
				_parseString(resultSet, arg);

			// ['foo', 'bar', ...]
			} else if (Array.isArray(arg)) {
				_parseArray(resultSet, arg);

			// { 'foo': true, ... }
			} else if (argType === 'object') {
				_parseObject(resultSet, arg);

			// '130'
			} else if (argType === 'number') {
				_parseNumber(resultSet, arg);
			}
		}

		function _classNames () {
			// don't leak arguments
			// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
			var len = arguments.length;
			var args = Array(len);
			for (var i = 0; i < len; i++) {
				args[i] = arguments[i];
			}

			var classSet = new StorageObject();
			_parseArray(classSet, args);

			var list = [];

			for (var k in classSet) {
				if (classSet[k]) {
					list.push(k)
				}
			}

			return list.join(' ');
		}

		return _classNames;
	})();

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */
 // Disable reason: JSDoc linter doesn't seem to parse the union (`&`) correctly.

/* eslint-disable jsdoc/valid-types */

/** @typedef {{icon: JSX.Element, size?: number} & import('react').ComponentPropsWithoutRef<'SVG'>} IconProps */

/* eslint-enable jsdoc/valid-types */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon(_ref) {
  var icon = _ref.icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["icon", "size"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(icon, _objectSpread({
    width: size,
    height: size
  }, props));
}

/* harmony default export */ __webpack_exports__["a"] = (Icon);


/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _slicedToArray; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return Object(arrayWithHoles["a" /* default */])(arr) || _iterableToArrayLimit(arr, i) || Object(unsupportedIterableToArray["a" /* default */])(arr, i) || Object(nonIterableRest["a" /* default */])();
}

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var check = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M9 18.6L3.5 13l1-1L9 16.4l9.5-9.9 1 1z"
}));
/* harmony default export */ __webpack_exports__["a"] = (check);


/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var closeSmall = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13 11.9l3.3-3.4-1.1-1-3.2 3.3-3.2-3.3-1.1 1 3.3 3.4-3.5 3.6 1 1L12 13l3.5 3.5 1-1z"
}));
/* harmony default export */ __webpack_exports__["a"] = (closeSmall);


/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _toConsumableArray; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(arrayLikeToArray["a" /* default */])(arr);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || Object(iterableToArray["a" /* default */])(arr) || Object(unsupportedIterableToArray["a" /* default */])(arr) || _nonIterableSpread();
}

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var link = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (link);


/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var keyboardReturn = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16 4h2v9H7v3l-5-4 5-4v3h9V4z"
}));
/* harmony default export */ __webpack_exports__["a"] = (keyboardReturn);


/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var upload = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (upload);


/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var linkOff = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"
}));
/* harmony default export */ __webpack_exports__["a"] = (linkOff);


/***/ }),

/***/ 21:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["keycodes"]; }());

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _inherits; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["richText"]; }());

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

/*! Fast Average Color | © 2019 Denis Seleznev | MIT License | https://github.com/hcodes/fast-average-color/ */
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var FastAverageColor =
/*#__PURE__*/
function () {
  function FastAverageColor() {
    _classCallCheck(this, FastAverageColor);
  }

  _createClass(FastAverageColor, [{
    key: "getColorAsync",

    /**
     * Get asynchronously the average color from not loaded image.
     *
     * @param {HTMLImageElement} resource
     * @param {Function} callback
     * @param {Object|null} [options]
     * @param {Array}  [options.defaultColor=[255, 255, 255, 255]]
     * @param {*}      [options.data]
     * @param {string} [options.mode="speed"] "precision" or "speed"
     * @param {string} [options.algorithm="sqrt"] "simple", "sqrt" or "dominant"
     * @param {number} [options.step=1]
     * @param {number} [options.left=0]
     * @param {number} [options.top=0]
     * @param {number} [options.width=width of resource]
     * @param {number} [options.height=height of resource]
     */
    value: function getColorAsync(resource, callback, options) {
      if (resource.complete) {
        callback.call(resource, this.getColor(resource, options), options && options.data);
      } else {
        this._bindImageEvents(resource, callback, options);
      }
    }
    /**
     * Get the average color from images, videos and canvas.
     *
     * @param {HTMLImageElement|HTMLVideoElement|HTMLCanvasElement} resource
     * @param {Object|null} [options]
     * @param {Array}  [options.defaultColor=[255, 255, 255, 255]]
     * @param {*}      [options.data]
     * @param {string} [options.mode="speed"] "precision" or "speed"
     * @param {string} [options.algorithm="sqrt"] "simple", "sqrt" or "dominant"
     * @param {number} [options.step=1]
     * @param {number} [options.left=0]
     * @param {number} [options.top=0]
     * @param {number} [options.width=width of resource]
     * @param {number} [options.height=height of resource]
     *
     * @returns {Object}
     */

  }, {
    key: "getColor",
    value: function getColor(resource, options) {
      options = options || {};

      var defaultColor = this._getDefaultColor(options),
          originalSize = this._getOriginalSize(resource),
          size = this._prepareSizeAndPosition(originalSize, options);

      var error = null,
          value = defaultColor;

      if (!size.srcWidth || !size.srcHeight || !size.destWidth || !size.destHeight) {
        return this._prepareResult(defaultColor, new Error('FastAverageColor: Incorrect sizes.'));
      }

      if (!this._ctx) {
        this._canvas = this._makeCanvas();
        this._ctx = this._canvas.getContext && this._canvas.getContext('2d');

        if (!this._ctx) {
          return this._prepareResult(defaultColor, new Error('FastAverageColor: Canvas Context 2D is not supported in this browser.'));
        }
      }

      this._canvas.width = size.destWidth;
      this._canvas.height = size.destHeight;

      try {
        this._ctx.clearRect(0, 0, size.destWidth, size.destHeight);

        this._ctx.drawImage(resource, size.srcLeft, size.srcTop, size.srcWidth, size.srcHeight, 0, 0, size.destWidth, size.destHeight);

        var bitmapData = this._ctx.getImageData(0, 0, size.destWidth, size.destHeight).data;

        value = this.getColorFromArray4(bitmapData, options);
      } catch (e) {
        // Security error, CORS
        // https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image
        error = e;
      }

      return this._prepareResult(value, error);
    }
    /**
     * Get the average color from a array when 1 pixel is 4 bytes.
     *
     * @param {Array|Uint8Array} arr
     * @param {Object} [options]
     * @param {string} [options.algorithm="sqrt"] "simple", "sqrt" or "dominant"
     * @param {Array}  [options.defaultColor=[255, 255, 255, 255]]
     * @param {number} [options.step=1]
     *
     * @returns {Array} [red (0-255), green (0-255), blue (0-255), alpha (0-255)]
     */

  }, {
    key: "getColorFromArray4",
    value: function getColorFromArray4(arr, options) {
      options = options || {};
      var bytesPerPixel = 4,
          arrLength = arr.length;

      if (arrLength < bytesPerPixel) {
        return this._getDefaultColor(options);
      }

      var len = arrLength - arrLength % bytesPerPixel,
          preparedStep = (options.step || 1) * bytesPerPixel,
          algorithm = '_' + (options.algorithm || 'sqrt') + 'Algorithm';

      if (typeof this[algorithm] !== 'function') {
        throw new Error("FastAverageColor: ".concat(options.algorithm, " is unknown algorithm."));
      }

      return this[algorithm](arr, len, preparedStep);
    }
    /**
     * Destroy the instance.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      delete this._canvas;
      delete this._ctx;
    }
  }, {
    key: "_getDefaultColor",
    value: function _getDefaultColor(options) {
      return this._getOption(options, 'defaultColor', [255, 255, 255, 255]);
    }
  }, {
    key: "_getOption",
    value: function _getOption(options, name, defaultValue) {
      return typeof options[name] === 'undefined' ? defaultValue : options[name];
    }
  }, {
    key: "_prepareSizeAndPosition",
    value: function _prepareSizeAndPosition(originalSize, options) {
      var srcLeft = this._getOption(options, 'left', 0),
          srcTop = this._getOption(options, 'top', 0),
          srcWidth = this._getOption(options, 'width', originalSize.width),
          srcHeight = this._getOption(options, 'height', originalSize.height),
          destWidth = srcWidth,
          destHeight = srcHeight;

      if (options.mode === 'precision') {
        return {
          srcLeft: srcLeft,
          srcTop: srcTop,
          srcWidth: srcWidth,
          srcHeight: srcHeight,
          destWidth: destWidth,
          destHeight: destHeight
        };
      }

      var maxSize = 100,
          minSize = 10;
      var factor;

      if (srcWidth > srcHeight) {
        factor = srcWidth / srcHeight;
        destWidth = maxSize;
        destHeight = Math.round(destWidth / factor);
      } else {
        factor = srcHeight / srcWidth;
        destHeight = maxSize;
        destWidth = Math.round(destHeight / factor);
      }

      if (destWidth > srcWidth || destHeight > srcHeight || destWidth < minSize || destHeight < minSize) {
        destWidth = srcWidth;
        destHeight = srcHeight;
      }

      return {
        srcLeft: srcLeft,
        srcTop: srcTop,
        srcWidth: srcWidth,
        srcHeight: srcHeight,
        destWidth: destWidth,
        destHeight: destHeight
      };
    }
  }, {
    key: "_simpleAlgorithm",
    value: function _simpleAlgorithm(arr, len, preparedStep) {
      var redTotal = 0,
          greenTotal = 0,
          blueTotal = 0,
          alphaTotal = 0,
          count = 0;

      for (var i = 0; i < len; i += preparedStep) {
        var alpha = arr[i + 3],
            red = arr[i] * alpha,
            green = arr[i + 1] * alpha,
            blue = arr[i + 2] * alpha;
        redTotal += red;
        greenTotal += green;
        blueTotal += blue;
        alphaTotal += alpha;
        count++;
      }

      return alphaTotal ? [Math.round(redTotal / alphaTotal), Math.round(greenTotal / alphaTotal), Math.round(blueTotal / alphaTotal), Math.round(alphaTotal / count)] : [0, 0, 0, 0];
    }
  }, {
    key: "_sqrtAlgorithm",
    value: function _sqrtAlgorithm(arr, len, preparedStep) {
      var redTotal = 0,
          greenTotal = 0,
          blueTotal = 0,
          alphaTotal = 0,
          count = 0;

      for (var i = 0; i < len; i += preparedStep) {
        var red = arr[i],
            green = arr[i + 1],
            blue = arr[i + 2],
            alpha = arr[i + 3];
        redTotal += red * red * alpha;
        greenTotal += green * green * alpha;
        blueTotal += blue * blue * alpha;
        alphaTotal += alpha;
        count++;
      }

      return alphaTotal ? [Math.round(Math.sqrt(redTotal / alphaTotal)), Math.round(Math.sqrt(greenTotal / alphaTotal)), Math.round(Math.sqrt(blueTotal / alphaTotal)), Math.round(alphaTotal / count)] : [0, 0, 0, 0];
    }
  }, {
    key: "_dominantAlgorithm",
    value: function _dominantAlgorithm(arr, len, preparedStep) {
      var colorHash = {},
          divider = 24;

      for (var i = 0; i < len; i += preparedStep) {
        var red = arr[i],
            green = arr[i + 1],
            blue = arr[i + 2],
            alpha = arr[i + 3],
            key = Math.round(red / divider) + ',' + Math.round(green / divider) + ',' + Math.round(blue / divider);

        if (colorHash[key]) {
          colorHash[key] = [colorHash[key][0] + red * alpha, colorHash[key][1] + green * alpha, colorHash[key][2] + blue * alpha, colorHash[key][3] + alpha, colorHash[key][4] + 1];
        } else {
          colorHash[key] = [red * alpha, green * alpha, blue * alpha, alpha, 1];
        }
      }

      var buffer = Object.keys(colorHash).map(function (key) {
        return colorHash[key];
      }).sort(function (a, b) {
        var countA = a[4],
            countB = b[4];
        return countA > countB ? -1 : countA === countB ? 0 : 1;
      });

      var _buffer$ = _slicedToArray(buffer[0], 5),
          redTotal = _buffer$[0],
          greenTotal = _buffer$[1],
          blueTotal = _buffer$[2],
          alphaTotal = _buffer$[3],
          count = _buffer$[4];

      return alphaTotal ? [Math.round(redTotal / alphaTotal), Math.round(greenTotal / alphaTotal), Math.round(blueTotal / alphaTotal), Math.round(alphaTotal / count)] : [0, 0, 0, 0];
    }
  }, {
    key: "_bindImageEvents",
    value: function _bindImageEvents(resource, callback, options) {
      var _this = this;

      options = options || {};

      var data = options && options.data,
          defaultColor = this._getDefaultColor(options),
          onload = function onload() {
        unbindEvents();
        callback.call(resource, _this.getColor(resource, options), data);
      },
          onerror = function onerror() {
        unbindEvents();
        callback.call(resource, _this._prepareResult(defaultColor, new Error('Image error')), data);
      },
          onabort = function onabort() {
        unbindEvents();
        callback.call(resource, _this._prepareResult(defaultColor, new Error('Image abort')), data);
      },
          unbindEvents = function unbindEvents() {
        resource.removeEventListener('load', onload);
        resource.removeEventListener('error', onerror);
        resource.removeEventListener('abort', onabort);
      };

      resource.addEventListener('load', onload);
      resource.addEventListener('error', onerror);
      resource.addEventListener('abort', onabort);
    }
  }, {
    key: "_prepareResult",
    value: function _prepareResult(value, error) {
      var rgb = value.slice(0, 3),
          rgba = [].concat(rgb, value[3] / 255),
          isDark = this._isDark(value);

      return {
        error: error,
        value: value,
        rgb: 'rgb(' + rgb.join(',') + ')',
        rgba: 'rgba(' + rgba.join(',') + ')',
        hex: this._arrayToHex(rgb),
        hexa: this._arrayToHex(value),
        isDark: isDark,
        isLight: !isDark
      };
    }
  }, {
    key: "_getOriginalSize",
    value: function _getOriginalSize(resource) {
      if (resource instanceof HTMLImageElement) {
        return {
          width: resource.naturalWidth,
          height: resource.naturalHeight
        };
      }

      if (resource instanceof HTMLVideoElement) {
        return {
          width: resource.videoWidth,
          height: resource.videoHeight
        };
      }

      return {
        width: resource.width,
        height: resource.height
      };
    }
  }, {
    key: "_toHex",
    value: function _toHex(num) {
      var str = num.toString(16);
      return str.length === 1 ? '0' + str : str;
    }
  }, {
    key: "_arrayToHex",
    value: function _arrayToHex(arr) {
      return '#' + arr.map(this._toHex).join('');
    }
  }, {
    key: "_isDark",
    value: function _isDark(color) {
      // http://www.w3.org/TR/AERT#color-contrast
      var result = (color[0] * 299 + color[1] * 587 + color[2] * 114) / 1000;
      return result < 128;
    }
  }, {
    key: "_makeCanvas",
    value: function _makeCanvas() {
      return typeof window === 'undefined' ? new OffscreenCanvas(1, 1) : document.createElement('canvas');
    }
  }]);

  return FastAverageColor;
}();

return FastAverageColor;

})));


/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var alignLeft = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z"
}));
/* harmony default export */ __webpack_exports__["a"] = (alignLeft);


/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var alignCenter = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (alignCenter);


/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var alignRight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (alignRight);


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var search = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
}));
/* harmony default export */ __webpack_exports__["a"] = (search);


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var chevronRight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"
}));
/* harmony default export */ __webpack_exports__["a"] = (chevronRight);


/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var chevronLeft = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (chevronLeft);


/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var pencil = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02-5.56 1.16 1.16-5.58s7.6-7.63 7.99-8.03c.39-.39 1.22-.39 1.68.07zm-2.73 2.79l-5.59 5.61 1.11 1.11 5.54-5.65zm-2.97 8.23l5.58-5.6-1.07-1.08-5.59 5.6zM13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02-5.56 1.16 1.16-5.58s7.6-7.63 7.99-8.03c.39-.39 1.22-.39 1.68.07zm-2.73 2.79l-5.59 5.61 1.11 1.11 5.54-5.65zm-2.97 8.23l5.58-5.6-1.07-1.08-5.59 5.6z"
}));
/* harmony default export */ __webpack_exports__["a"] = (pencil);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var edit = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (edit);


/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var code = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"
}));
/* harmony default export */ __webpack_exports__["a"] = (code);


/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var grid = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M9 9V3H3v6h6zm8 0V3h-6v6h6zm-8 8v-6H3v6h6zm8 0v-6h-6v6h6z"
}));
/* harmony default export */ __webpack_exports__["a"] = (grid);


/***/ }),

/***/ 31:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["deprecated"]; }());

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

(function() { module.exports = this["moment"]; }());

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "registerCoreBlocks", function() { return /* binding */ build_module_registerCoreBlocks; });
__webpack_require__.d(__webpack_exports__, "__experimentalRegisterExperimentalCoreBlocks", function() { return /* binding */ __experimentalRegisterExperimentalCoreBlocks; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/paragraph/index.js
var build_module_paragraph_namespaceObject = {};
__webpack_require__.r(build_module_paragraph_namespaceObject);
__webpack_require__.d(build_module_paragraph_namespaceObject, "metadata", function() { return paragraph_metadata; });
__webpack_require__.d(build_module_paragraph_namespaceObject, "name", function() { return paragraph_name; });
__webpack_require__.d(build_module_paragraph_namespaceObject, "settings", function() { return paragraph_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/image/index.js
var build_module_image_namespaceObject = {};
__webpack_require__.r(build_module_image_namespaceObject);
__webpack_require__.d(build_module_image_namespaceObject, "metadata", function() { return image_metadata; });
__webpack_require__.d(build_module_image_namespaceObject, "name", function() { return image_name; });
__webpack_require__.d(build_module_image_namespaceObject, "settings", function() { return image_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/heading/index.js
var build_module_heading_namespaceObject = {};
__webpack_require__.r(build_module_heading_namespaceObject);
__webpack_require__.d(build_module_heading_namespaceObject, "metadata", function() { return heading_metadata; });
__webpack_require__.d(build_module_heading_namespaceObject, "name", function() { return heading_name; });
__webpack_require__.d(build_module_heading_namespaceObject, "settings", function() { return heading_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/quote/index.js
var build_module_quote_namespaceObject = {};
__webpack_require__.r(build_module_quote_namespaceObject);
__webpack_require__.d(build_module_quote_namespaceObject, "metadata", function() { return quote_metadata; });
__webpack_require__.d(build_module_quote_namespaceObject, "name", function() { return quote_name; });
__webpack_require__.d(build_module_quote_namespaceObject, "settings", function() { return quote_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/gallery/index.js
var build_module_gallery_namespaceObject = {};
__webpack_require__.r(build_module_gallery_namespaceObject);
__webpack_require__.d(build_module_gallery_namespaceObject, "metadata", function() { return gallery_metadata; });
__webpack_require__.d(build_module_gallery_namespaceObject, "name", function() { return gallery_name; });
__webpack_require__.d(build_module_gallery_namespaceObject, "settings", function() { return gallery_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/archives/index.js
var archives_namespaceObject = {};
__webpack_require__.r(archives_namespaceObject);
__webpack_require__.d(archives_namespaceObject, "metadata", function() { return archives_metadata; });
__webpack_require__.d(archives_namespaceObject, "name", function() { return archives_name; });
__webpack_require__.d(archives_namespaceObject, "settings", function() { return archives_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/audio/index.js
var build_module_audio_namespaceObject = {};
__webpack_require__.r(build_module_audio_namespaceObject);
__webpack_require__.d(build_module_audio_namespaceObject, "metadata", function() { return audio_metadata; });
__webpack_require__.d(build_module_audio_namespaceObject, "name", function() { return audio_name; });
__webpack_require__.d(build_module_audio_namespaceObject, "settings", function() { return audio_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/button/index.js
var build_module_button_namespaceObject = {};
__webpack_require__.r(build_module_button_namespaceObject);
__webpack_require__.d(build_module_button_namespaceObject, "metadata", function() { return button_metadata; });
__webpack_require__.d(build_module_button_namespaceObject, "name", function() { return button_name; });
__webpack_require__.d(build_module_button_namespaceObject, "settings", function() { return button_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/buttons/index.js
var buttons_namespaceObject = {};
__webpack_require__.r(buttons_namespaceObject);
__webpack_require__.d(buttons_namespaceObject, "metadata", function() { return buttons_metadata; });
__webpack_require__.d(buttons_namespaceObject, "name", function() { return buttons_name; });
__webpack_require__.d(buttons_namespaceObject, "settings", function() { return buttons_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/calendar/index.js
var build_module_calendar_namespaceObject = {};
__webpack_require__.r(build_module_calendar_namespaceObject);
__webpack_require__.d(build_module_calendar_namespaceObject, "metadata", function() { return calendar_metadata; });
__webpack_require__.d(build_module_calendar_namespaceObject, "name", function() { return calendar_name; });
__webpack_require__.d(build_module_calendar_namespaceObject, "settings", function() { return calendar_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/categories/index.js
var categories_namespaceObject = {};
__webpack_require__.r(categories_namespaceObject);
__webpack_require__.d(categories_namespaceObject, "metadata", function() { return categories_metadata; });
__webpack_require__.d(categories_namespaceObject, "name", function() { return categories_name; });
__webpack_require__.d(categories_namespaceObject, "settings", function() { return categories_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/code/index.js
var code_namespaceObject = {};
__webpack_require__.r(code_namespaceObject);
__webpack_require__.d(code_namespaceObject, "metadata", function() { return code_metadata; });
__webpack_require__.d(code_namespaceObject, "name", function() { return code_name; });
__webpack_require__.d(code_namespaceObject, "settings", function() { return code_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/columns/index.js
var build_module_columns_namespaceObject = {};
__webpack_require__.r(build_module_columns_namespaceObject);
__webpack_require__.d(build_module_columns_namespaceObject, "metadata", function() { return columns_metadata; });
__webpack_require__.d(build_module_columns_namespaceObject, "name", function() { return columns_name; });
__webpack_require__.d(build_module_columns_namespaceObject, "settings", function() { return columns_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/column/index.js
var build_module_column_namespaceObject = {};
__webpack_require__.r(build_module_column_namespaceObject);
__webpack_require__.d(build_module_column_namespaceObject, "metadata", function() { return column_metadata; });
__webpack_require__.d(build_module_column_namespaceObject, "name", function() { return column_name; });
__webpack_require__.d(build_module_column_namespaceObject, "settings", function() { return column_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/cover/index.js
var build_module_cover_namespaceObject = {};
__webpack_require__.r(build_module_cover_namespaceObject);
__webpack_require__.d(build_module_cover_namespaceObject, "metadata", function() { return cover_metadata; });
__webpack_require__.d(build_module_cover_namespaceObject, "name", function() { return cover_name; });
__webpack_require__.d(build_module_cover_namespaceObject, "settings", function() { return cover_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/embed/index.js
var embed_namespaceObject = {};
__webpack_require__.r(embed_namespaceObject);
__webpack_require__.d(embed_namespaceObject, "name", function() { return embed_name; });
__webpack_require__.d(embed_namespaceObject, "settings", function() { return embed_settings; });
__webpack_require__.d(embed_namespaceObject, "common", function() { return embed_common; });
__webpack_require__.d(embed_namespaceObject, "others", function() { return embed_others; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/file/index.js
var build_module_file_namespaceObject = {};
__webpack_require__.r(build_module_file_namespaceObject);
__webpack_require__.d(build_module_file_namespaceObject, "metadata", function() { return file_metadata; });
__webpack_require__.d(build_module_file_namespaceObject, "name", function() { return file_name; });
__webpack_require__.d(build_module_file_namespaceObject, "settings", function() { return file_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/html/index.js
var build_module_html_namespaceObject = {};
__webpack_require__.r(build_module_html_namespaceObject);
__webpack_require__.d(build_module_html_namespaceObject, "metadata", function() { return html_metadata; });
__webpack_require__.d(build_module_html_namespaceObject, "name", function() { return html_name; });
__webpack_require__.d(build_module_html_namespaceObject, "settings", function() { return html_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/media-text/index.js
var media_text_namespaceObject = {};
__webpack_require__.r(media_text_namespaceObject);
__webpack_require__.d(media_text_namespaceObject, "metadata", function() { return media_text_metadata; });
__webpack_require__.d(media_text_namespaceObject, "name", function() { return media_text_name; });
__webpack_require__.d(media_text_namespaceObject, "settings", function() { return media_text_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/latest-comments/index.js
var latest_comments_namespaceObject = {};
__webpack_require__.r(latest_comments_namespaceObject);
__webpack_require__.d(latest_comments_namespaceObject, "metadata", function() { return latest_comments_metadata; });
__webpack_require__.d(latest_comments_namespaceObject, "name", function() { return latest_comments_name; });
__webpack_require__.d(latest_comments_namespaceObject, "settings", function() { return latest_comments_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/latest-posts/index.js
var latest_posts_namespaceObject = {};
__webpack_require__.r(latest_posts_namespaceObject);
__webpack_require__.d(latest_posts_namespaceObject, "metadata", function() { return latest_posts_metadata; });
__webpack_require__.d(latest_posts_namespaceObject, "name", function() { return latest_posts_name; });
__webpack_require__.d(latest_posts_namespaceObject, "settings", function() { return latest_posts_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/list/index.js
var build_module_list_namespaceObject = {};
__webpack_require__.r(build_module_list_namespaceObject);
__webpack_require__.d(build_module_list_namespaceObject, "metadata", function() { return list_metadata; });
__webpack_require__.d(build_module_list_namespaceObject, "name", function() { return list_name; });
__webpack_require__.d(build_module_list_namespaceObject, "settings", function() { return list_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/missing/index.js
var missing_namespaceObject = {};
__webpack_require__.r(missing_namespaceObject);
__webpack_require__.d(missing_namespaceObject, "metadata", function() { return missing_metadata; });
__webpack_require__.d(missing_namespaceObject, "name", function() { return missing_name; });
__webpack_require__.d(missing_namespaceObject, "settings", function() { return missing_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/more/index.js
var build_module_more_namespaceObject = {};
__webpack_require__.r(build_module_more_namespaceObject);
__webpack_require__.d(build_module_more_namespaceObject, "metadata", function() { return more_metadata; });
__webpack_require__.d(build_module_more_namespaceObject, "name", function() { return more_name; });
__webpack_require__.d(build_module_more_namespaceObject, "settings", function() { return more_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/nextpage/index.js
var nextpage_namespaceObject = {};
__webpack_require__.r(nextpage_namespaceObject);
__webpack_require__.d(nextpage_namespaceObject, "metadata", function() { return nextpage_metadata; });
__webpack_require__.d(nextpage_namespaceObject, "name", function() { return nextpage_name; });
__webpack_require__.d(nextpage_namespaceObject, "settings", function() { return nextpage_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/preformatted/index.js
var build_module_preformatted_namespaceObject = {};
__webpack_require__.r(build_module_preformatted_namespaceObject);
__webpack_require__.d(build_module_preformatted_namespaceObject, "metadata", function() { return preformatted_metadata; });
__webpack_require__.d(build_module_preformatted_namespaceObject, "name", function() { return preformatted_name; });
__webpack_require__.d(build_module_preformatted_namespaceObject, "settings", function() { return preformatted_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/pullquote/index.js
var build_module_pullquote_namespaceObject = {};
__webpack_require__.r(build_module_pullquote_namespaceObject);
__webpack_require__.d(build_module_pullquote_namespaceObject, "metadata", function() { return pullquote_metadata; });
__webpack_require__.d(build_module_pullquote_namespaceObject, "name", function() { return pullquote_name; });
__webpack_require__.d(build_module_pullquote_namespaceObject, "settings", function() { return pullquote_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/block/index.js
var block_namespaceObject = {};
__webpack_require__.r(block_namespaceObject);
__webpack_require__.d(block_namespaceObject, "metadata", function() { return block_metadata; });
__webpack_require__.d(block_namespaceObject, "name", function() { return block_name; });
__webpack_require__.d(block_namespaceObject, "settings", function() { return block_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/rss/index.js
var build_module_rss_namespaceObject = {};
__webpack_require__.r(build_module_rss_namespaceObject);
__webpack_require__.d(build_module_rss_namespaceObject, "metadata", function() { return rss_metadata; });
__webpack_require__.d(build_module_rss_namespaceObject, "name", function() { return rss_name; });
__webpack_require__.d(build_module_rss_namespaceObject, "settings", function() { return rss_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/search/index.js
var search_namespaceObject = {};
__webpack_require__.r(search_namespaceObject);
__webpack_require__.d(search_namespaceObject, "metadata", function() { return search_metadata; });
__webpack_require__.d(search_namespaceObject, "name", function() { return search_name; });
__webpack_require__.d(search_namespaceObject, "settings", function() { return search_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/group/index.js
var build_module_group_namespaceObject = {};
__webpack_require__.r(build_module_group_namespaceObject);
__webpack_require__.d(build_module_group_namespaceObject, "metadata", function() { return group_metadata; });
__webpack_require__.d(build_module_group_namespaceObject, "name", function() { return group_name; });
__webpack_require__.d(build_module_group_namespaceObject, "settings", function() { return group_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/separator/index.js
var build_module_separator_namespaceObject = {};
__webpack_require__.r(build_module_separator_namespaceObject);
__webpack_require__.d(build_module_separator_namespaceObject, "metadata", function() { return separator_metadata; });
__webpack_require__.d(build_module_separator_namespaceObject, "name", function() { return separator_name; });
__webpack_require__.d(build_module_separator_namespaceObject, "settings", function() { return build_module_separator_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/shortcode/index.js
var build_module_shortcode_namespaceObject = {};
__webpack_require__.r(build_module_shortcode_namespaceObject);
__webpack_require__.d(build_module_shortcode_namespaceObject, "metadata", function() { return shortcode_metadata; });
__webpack_require__.d(build_module_shortcode_namespaceObject, "name", function() { return shortcode_name; });
__webpack_require__.d(build_module_shortcode_namespaceObject, "settings", function() { return shortcode_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/spacer/index.js
var spacer_namespaceObject = {};
__webpack_require__.r(spacer_namespaceObject);
__webpack_require__.d(spacer_namespaceObject, "metadata", function() { return spacer_metadata; });
__webpack_require__.d(spacer_namespaceObject, "name", function() { return spacer_name; });
__webpack_require__.d(spacer_namespaceObject, "settings", function() { return spacer_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/subhead/index.js
var subhead_namespaceObject = {};
__webpack_require__.r(subhead_namespaceObject);
__webpack_require__.d(subhead_namespaceObject, "metadata", function() { return subhead_metadata; });
__webpack_require__.d(subhead_namespaceObject, "name", function() { return subhead_name; });
__webpack_require__.d(subhead_namespaceObject, "settings", function() { return subhead_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/table/index.js
var build_module_table_namespaceObject = {};
__webpack_require__.r(build_module_table_namespaceObject);
__webpack_require__.d(build_module_table_namespaceObject, "metadata", function() { return table_metadata; });
__webpack_require__.d(build_module_table_namespaceObject, "name", function() { return table_name; });
__webpack_require__.d(build_module_table_namespaceObject, "settings", function() { return table_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/text-columns/index.js
var text_columns_namespaceObject = {};
__webpack_require__.r(text_columns_namespaceObject);
__webpack_require__.d(text_columns_namespaceObject, "metadata", function() { return text_columns_metadata; });
__webpack_require__.d(text_columns_namespaceObject, "name", function() { return text_columns_name; });
__webpack_require__.d(text_columns_namespaceObject, "settings", function() { return text_columns_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/verse/index.js
var build_module_verse_namespaceObject = {};
__webpack_require__.r(build_module_verse_namespaceObject);
__webpack_require__.d(build_module_verse_namespaceObject, "metadata", function() { return verse_metadata; });
__webpack_require__.d(build_module_verse_namespaceObject, "name", function() { return verse_name; });
__webpack_require__.d(build_module_verse_namespaceObject, "settings", function() { return verse_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/video/index.js
var build_module_video_namespaceObject = {};
__webpack_require__.r(build_module_video_namespaceObject);
__webpack_require__.d(build_module_video_namespaceObject, "metadata", function() { return video_metadata; });
__webpack_require__.d(build_module_video_namespaceObject, "name", function() { return video_name; });
__webpack_require__.d(build_module_video_namespaceObject, "settings", function() { return video_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/tag-cloud/index.js
var tag_cloud_namespaceObject = {};
__webpack_require__.r(tag_cloud_namespaceObject);
__webpack_require__.d(tag_cloud_namespaceObject, "metadata", function() { return tag_cloud_metadata; });
__webpack_require__.d(tag_cloud_namespaceObject, "name", function() { return tag_cloud_name; });
__webpack_require__.d(tag_cloud_namespaceObject, "settings", function() { return tag_cloud_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/classic/index.js
var build_module_classic_namespaceObject = {};
__webpack_require__.r(build_module_classic_namespaceObject);
__webpack_require__.d(build_module_classic_namespaceObject, "metadata", function() { return classic_metadata; });
__webpack_require__.d(build_module_classic_namespaceObject, "name", function() { return classic_name; });
__webpack_require__.d(build_module_classic_namespaceObject, "settings", function() { return classic_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/social-links/index.js
var social_links_namespaceObject = {};
__webpack_require__.r(social_links_namespaceObject);
__webpack_require__.d(social_links_namespaceObject, "metadata", function() { return social_links_metadata; });
__webpack_require__.d(social_links_namespaceObject, "name", function() { return social_links_name; });
__webpack_require__.d(social_links_namespaceObject, "settings", function() { return social_links_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/social-link/index.js
var social_link_namespaceObject = {};
__webpack_require__.r(social_link_namespaceObject);
__webpack_require__.d(social_link_namespaceObject, "metadata", function() { return social_link_metadata; });
__webpack_require__.d(social_link_namespaceObject, "name", function() { return social_link_name; });
__webpack_require__.d(social_link_namespaceObject, "settings", function() { return social_link_settings; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);

// EXTERNAL MODULE: external {"this":["wp","coreData"]}
var external_this_wp_coreData_ = __webpack_require__(98);

// EXTERNAL MODULE: external {"this":["wp","notices"]}
var external_this_wp_notices_ = __webpack_require__(100);

// EXTERNAL MODULE: external {"this":["wp","blockEditor"]}
var external_this_wp_blockEditor_ = __webpack_require__(7);

// EXTERNAL MODULE: external {"this":["wp","blocks"]}
var external_this_wp_blocks_ = __webpack_require__(10);

// EXTERNAL MODULE: external {"this":"lodash"}
var external_this_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(1);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","primitives"]}
var external_this_wp_primitives_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/paragraph.js


/**
 * WordPress dependencies
 */

var paragraph = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M18.3 4H9.9v-.1l-.9.2c-2.3.4-4 2.4-4 4.8s1.7 4.4 4 4.8l.7.1V20h1.5V5.5h2.9V20h1.5V5.5h2.7V4z"
}));
/* harmony default export */ var library_paragraph = (paragraph);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(11);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/paragraph/deprecated.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



var deprecated_supports = {
  className: false
};
var deprecated_blockAttributes = {
  align: {
    type: 'string'
  },
  content: {
    type: 'string',
    source: 'html',
    selector: 'p',
    default: ''
  },
  dropCap: {
    type: 'boolean',
    default: false
  },
  placeholder: {
    type: 'string'
  },
  textColor: {
    type: 'string'
  },
  backgroundColor: {
    type: 'string'
  },
  fontSize: {
    type: 'string'
  },
  direction: {
    type: 'string',
    enum: ['ltr', 'rtl']
  },
  style: {
    type: 'object'
  }
};

var deprecated_migrateCustomColorsAndFontSizes = function migrateCustomColorsAndFontSizes(attributes) {
  if (!attributes.customTextColor && !attributes.customBackgroundColor && !attributes.customFontSize) {
    return attributes;
  }

  var style = {};

  if (attributes.customTextColor || attributes.customBackgroundColor) {
    style.color = {};
  }

  if (attributes.customTextColor) {
    style.color.text = attributes.customTextColor;
  }

  if (attributes.customBackgroundColor) {
    style.color.background = attributes.customBackgroundColor;
  }

  if (attributes.customFontSize) {
    style.typography = {
      fontSize: attributes.customFontSize
    };
  }

  return _objectSpread({}, Object(external_this_lodash_["omit"])(attributes, ['customTextColor', 'customBackgroundColor', 'customFontSize']), {
    style: style
  });
};

var deprecated = [{
  supports: deprecated_supports,
  attributes: _objectSpread({}, Object(external_this_lodash_["omit"])(deprecated_blockAttributes, ['style']), {
    customTextColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customFontSize: {
      type: 'number'
    }
  }),
  migrate: deprecated_migrateCustomColorsAndFontSizes,
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var align = attributes.align,
        content = attributes.content,
        dropCap = attributes.dropCap,
        backgroundColor = attributes.backgroundColor,
        textColor = attributes.textColor,
        customBackgroundColor = attributes.customBackgroundColor,
        customTextColor = attributes.customTextColor,
        fontSize = attributes.fontSize,
        customFontSize = attributes.customFontSize,
        direction = attributes.direction;
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var fontSizeClass = Object(external_this_wp_blockEditor_["getFontSizeClass"])(fontSize);
    var className = classnames_default()((_classnames = {
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor,
      'has-drop-cap': dropCap
    }, Object(defineProperty["a" /* default */])(_classnames, "has-text-align-".concat(align), align), Object(defineProperty["a" /* default */])(_classnames, fontSizeClass, fontSizeClass), Object(defineProperty["a" /* default */])(_classnames, textClass, textClass), Object(defineProperty["a" /* default */])(_classnames, backgroundClass, backgroundClass), _classnames));
    var styles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      fontSize: fontSizeClass ? undefined : customFontSize
    };
    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "p",
      style: styles,
      className: className ? className : undefined,
      value: content,
      dir: direction
    });
  }
}, {
  supports: deprecated_supports,
  attributes: _objectSpread({}, Object(external_this_lodash_["omit"])(deprecated_blockAttributes, ['style']), {
    customTextColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customFontSize: {
      type: 'number'
    }
  }),
  migrate: deprecated_migrateCustomColorsAndFontSizes,
  save: function save(_ref2) {
    var _classnames2;

    var attributes = _ref2.attributes;
    var align = attributes.align,
        content = attributes.content,
        dropCap = attributes.dropCap,
        backgroundColor = attributes.backgroundColor,
        textColor = attributes.textColor,
        customBackgroundColor = attributes.customBackgroundColor,
        customTextColor = attributes.customTextColor,
        fontSize = attributes.fontSize,
        customFontSize = attributes.customFontSize,
        direction = attributes.direction;
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var fontSizeClass = Object(external_this_wp_blockEditor_["getFontSizeClass"])(fontSize);
    var className = classnames_default()((_classnames2 = {
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor,
      'has-drop-cap': dropCap
    }, Object(defineProperty["a" /* default */])(_classnames2, fontSizeClass, fontSizeClass), Object(defineProperty["a" /* default */])(_classnames2, textClass, textClass), Object(defineProperty["a" /* default */])(_classnames2, backgroundClass, backgroundClass), _classnames2));
    var styles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      fontSize: fontSizeClass ? undefined : customFontSize,
      textAlign: align
    };
    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "p",
      style: styles,
      className: className ? className : undefined,
      value: content,
      dir: direction
    });
  }
}, {
  supports: deprecated_supports,
  attributes: _objectSpread({}, Object(external_this_lodash_["omit"])(deprecated_blockAttributes, ['style']), {
    customTextColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customFontSize: {
      type: 'number'
    },
    width: {
      type: 'string'
    }
  }),
  migrate: deprecated_migrateCustomColorsAndFontSizes,
  save: function save(_ref3) {
    var _classnames3;

    var attributes = _ref3.attributes;
    var width = attributes.width,
        align = attributes.align,
        content = attributes.content,
        dropCap = attributes.dropCap,
        backgroundColor = attributes.backgroundColor,
        textColor = attributes.textColor,
        customBackgroundColor = attributes.customBackgroundColor,
        customTextColor = attributes.customTextColor,
        fontSize = attributes.fontSize,
        customFontSize = attributes.customFontSize;
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var fontSizeClass = fontSize && "is-".concat(fontSize, "-text");
    var className = classnames_default()((_classnames3 = {}, Object(defineProperty["a" /* default */])(_classnames3, "align".concat(width), width), Object(defineProperty["a" /* default */])(_classnames3, 'has-background', backgroundColor || customBackgroundColor), Object(defineProperty["a" /* default */])(_classnames3, 'has-drop-cap', dropCap), Object(defineProperty["a" /* default */])(_classnames3, fontSizeClass, fontSizeClass), Object(defineProperty["a" /* default */])(_classnames3, textClass, textClass), Object(defineProperty["a" /* default */])(_classnames3, backgroundClass, backgroundClass), _classnames3));
    var styles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      fontSize: fontSizeClass ? undefined : customFontSize,
      textAlign: align
    };
    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "p",
      style: styles,
      className: className ? className : undefined,
      value: content
    });
  }
}, {
  supports: deprecated_supports,
  attributes: Object(external_this_lodash_["omit"])(_objectSpread({}, deprecated_blockAttributes, {
    fontSize: {
      type: 'number'
    }
  }), ['style']),
  save: function save(_ref4) {
    var _classnames4;

    var attributes = _ref4.attributes;
    var width = attributes.width,
        align = attributes.align,
        content = attributes.content,
        dropCap = attributes.dropCap,
        backgroundColor = attributes.backgroundColor,
        textColor = attributes.textColor,
        fontSize = attributes.fontSize;
    var className = classnames_default()((_classnames4 = {}, Object(defineProperty["a" /* default */])(_classnames4, "align".concat(width), width), Object(defineProperty["a" /* default */])(_classnames4, 'has-background', backgroundColor), Object(defineProperty["a" /* default */])(_classnames4, 'has-drop-cap', dropCap), _classnames4));
    var styles = {
      backgroundColor: backgroundColor,
      color: textColor,
      fontSize: fontSize,
      textAlign: align
    };
    return Object(external_this_wp_element_["createElement"])("p", {
      style: styles,
      className: className ? className : undefined
    }, content);
  },
  migrate: function migrate(attributes) {
    return deprecated_migrateCustomColorsAndFontSizes(Object(external_this_lodash_["omit"])(_objectSpread({}, attributes, {
      customFontSize: Object(external_this_lodash_["isFinite"])(attributes.fontSize) ? attributes.fontSize : undefined,
      customTextColor: attributes.textColor && '#' === attributes.textColor[0] ? attributes.textColor : undefined,
      customBackgroundColor: attributes.backgroundColor && '#' === attributes.backgroundColor[0] ? attributes.backgroundColor : undefined
    })), ['fontSize', 'textColor', 'backgroundColor', 'style']);
  }
}, {
  supports: deprecated_supports,
  attributes: _objectSpread({}, deprecated_blockAttributes, {
    content: {
      type: 'string',
      source: 'html',
      default: ''
    }
  }),
  save: function save(_ref5) {
    var attributes = _ref5.attributes;
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], null, attributes.content);
  },
  migrate: function migrate(attributes) {
    return attributes;
  }
}];
/* harmony default export */ var paragraph_deprecated = (deprecated);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(14);

// EXTERNAL MODULE: external {"this":["wp","components"]}
var external_this_wp_components_ = __webpack_require__(3);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-ltr.js


/**
 * WordPress dependencies
 */

var formatLtr = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M5.52 2h7.43c.55 0 1 .45 1 1s-.45 1-1 1h-1v13c0 .55-.45 1-1 1s-1-.45-1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55-.45 1-1 1s-1-.45-1-1v-5.96h-.43C3.02 11.04 1 9.02 1 6.52S3.02 2 5.52 2zM14 14l5-4-5-4v8z"
}));
/* harmony default export */ var format_ltr = (formatLtr);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/paragraph/edit.js




function edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Browser dependencies
 */

var edit_window = window,
    edit_getComputedStyle = edit_window.getComputedStyle;
var querySelector = window.document.querySelector.bind(document);
var edit_name = 'core/paragraph';
var PARAGRAPH_DROP_CAP_SELECTOR = 'p.has-drop-cap';

function ParagraphRTLToolbar(_ref) {
  var direction = _ref.direction,
      setDirection = _ref.setDirection;
  var isRTL = Object(external_this_wp_data_["useSelect"])(function (select) {
    return !!select('core/block-editor').getSettings().isRTL;
  }, []);
  return isRTL && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], {
    controls: [{
      icon: format_ltr,
      title: Object(external_this_wp_i18n_["_x"])('Left to right', 'editor button'),
      isActive: direction === 'ltr',
      onClick: function onClick() {
        setDirection(direction === 'ltr' ? undefined : 'ltr');
      }
    }]
  });
}

function useDropCap(isDropCap, fontSize, styleFontSize) {
  var isDisabled = !Object(external_this_wp_blockEditor_["__experimentalUseEditorFeature"])('typography.dropCap');

  var _useState = Object(external_this_wp_element_["useState"])(),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      minimumHeight = _useState2[0],
      setMinimumHeight = _useState2[1];

  var _useSelect = Object(external_this_wp_data_["useSelect"])(function (select) {
    return select('core/block-editor').getSettings();
  }),
      fontSizes = _useSelect.fontSizes;

  var fontSizeObject = Object(external_this_wp_blockEditor_["getFontSize"])(fontSizes, fontSize, styleFontSize);
  Object(external_this_wp_element_["useEffect"])(function () {
    if (isDisabled) {
      return;
    }

    var element = querySelector(PARAGRAPH_DROP_CAP_SELECTOR);

    if (isDropCap && element) {
      setMinimumHeight(edit_getComputedStyle(element, 'first-letter').lineHeight);
    } else if (minimumHeight) {
      setMinimumHeight(undefined);
    }
  }, [isDisabled, isDropCap, minimumHeight, setMinimumHeight, fontSizeObject.size]);
  return [!isDisabled, minimumHeight];
}

function ParagraphBlock(_ref2) {
  var attributes = _ref2.attributes,
      mergeBlocks = _ref2.mergeBlocks,
      onReplace = _ref2.onReplace,
      onRemove = _ref2.onRemove,
      setAttributes = _ref2.setAttributes;
  var align = attributes.align,
      content = attributes.content,
      direction = attributes.direction,
      dropCap = attributes.dropCap,
      placeholder = attributes.placeholder,
      fontSize = attributes.fontSize,
      style = attributes.style;
  var ref = Object(external_this_wp_element_["useRef"])();

  var _useDropCap = useDropCap(dropCap, fontSize, style === null || style === void 0 ? void 0 : style.fontSize),
      _useDropCap2 = Object(slicedToArray["a" /* default */])(_useDropCap, 2),
      isDropCapEnabled = _useDropCap2[0],
      dropCapMinimumHeight = _useDropCap2[1];

  var styles = {
    direction: direction,
    minHeight: dropCapMinimumHeight
  };
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["AlignmentToolbar"], {
    value: align,
    onChange: function onChange(newAlign) {
      return setAttributes({
        align: newAlign
      });
    }
  }), Object(external_this_wp_element_["createElement"])(ParagraphRTLToolbar, {
    direction: direction,
    setDirection: function setDirection(newDirection) {
      return setAttributes({
        direction: newDirection
      });
    }
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, isDropCapEnabled && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Text settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Drop cap'),
    checked: !!dropCap,
    onChange: function onChange() {
      return setAttributes({
        dropCap: !dropCap
      });
    },
    help: dropCap ? Object(external_this_wp_i18n_["__"])('Showing large initial letter.') : Object(external_this_wp_i18n_["__"])('Toggle to show a large initial letter.')
  }))), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    ref: ref,
    identifier: "content",
    tagName: external_this_wp_blockEditor_["__experimentalBlock"].p,
    className: classnames_default()(Object(defineProperty["a" /* default */])({
      'has-drop-cap': dropCap
    }, "has-text-align-".concat(align), align)),
    style: styles,
    value: content,
    onChange: function onChange(newContent) {
      return setAttributes({
        content: newContent
      });
    },
    onSplit: function onSplit(value) {
      if (!value) {
        return Object(external_this_wp_blocks_["createBlock"])(edit_name);
      }

      return Object(external_this_wp_blocks_["createBlock"])(edit_name, edit_objectSpread({}, attributes, {
        content: value
      }));
    },
    onMerge: mergeBlocks,
    onReplace: onReplace,
    onRemove: onRemove,
    "aria-label": content ? Object(external_this_wp_i18n_["__"])('Paragraph block') : Object(external_this_wp_i18n_["__"])('Empty block; start writing or type forward slash to choose a block'),
    placeholder: placeholder || Object(external_this_wp_i18n_["__"])('Start writing or type / to choose a block'),
    __unstableEmbedURLOnPaste: true,
    __unstableAllowPrefixTransformations: true
  }));
}

/* harmony default export */ var paragraph_edit = (ParagraphBlock);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/paragraph/save.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function save_save(_ref) {
  var attributes = _ref.attributes;
  var align = attributes.align,
      content = attributes.content,
      dropCap = attributes.dropCap,
      direction = attributes.direction;
  var className = classnames_default()(Object(defineProperty["a" /* default */])({
    'has-drop-cap': dropCap
  }, "has-text-align-".concat(align), align));
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: "p",
    className: className ? className : undefined,
    value: content,
    dir: direction
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/paragraph/transforms.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

var _name$category$attrib = {
  name: "core/paragraph",
  category: "text",
  attributes: {
    align: {
      type: "string"
    },
    content: {
      type: "string",
      source: "html",
      selector: "p",
      "default": ""
    },
    dropCap: {
      type: "boolean",
      "default": false
    },
    placeholder: {
      type: "string"
    },
    direction: {
      type: "string",
      "enum": ["ltr", "rtl"]
    }
  },
  supports: {
    anchor: true,
    className: false,
    lightBlockWrapper: true,
    __experimentalColor: {
      linkColor: true
    },
    __experimentalFontSize: true,
    __experimentalLineHeight: true,
    __experimentalFeatures: {
      typography: {
        dropCap: true
      }
    },
    __experimentalSelector: "p",
    __unstablePasteTextInline: true
  }
},
    transforms_name = _name$category$attrib.name;
var transforms_transforms = {
  from: [{
    type: 'raw',
    // Paragraph is a fallback and should be matched last.
    priority: 20,
    selector: 'p',
    schema: function schema(_ref) {
      var phrasingContentSchema = _ref.phrasingContentSchema,
          isPaste = _ref.isPaste;
      return {
        p: {
          children: phrasingContentSchema,
          attributes: isPaste ? [] : ['style', 'id']
        }
      };
    },
    transform: function transform(node) {
      var attributes = Object(external_this_wp_blocks_["getBlockAttributes"])(transforms_name, node.outerHTML);

      var _ref2 = node.style || {},
          textAlign = _ref2.textAlign;

      if (textAlign === 'left' || textAlign === 'center' || textAlign === 'right') {
        attributes.align = textAlign;
      }

      return Object(external_this_wp_blocks_["createBlock"])(transforms_name, attributes);
    }
  }]
};
/* harmony default export */ var paragraph_transforms = (transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/paragraph/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



var paragraph_metadata = {
  name: "core/paragraph",
  category: "text",
  attributes: {
    align: {
      type: "string"
    },
    content: {
      type: "string",
      source: "html",
      selector: "p",
      "default": ""
    },
    dropCap: {
      type: "boolean",
      "default": false
    },
    placeholder: {
      type: "string"
    },
    direction: {
      type: "string",
      "enum": ["ltr", "rtl"]
    }
  },
  supports: {
    anchor: true,
    className: false,
    lightBlockWrapper: true,
    __experimentalColor: {
      linkColor: true
    },
    __experimentalFontSize: true,
    __experimentalLineHeight: true,
    __experimentalFeatures: {
      typography: {
        dropCap: true
      }
    },
    __experimentalSelector: "p",
    __unstablePasteTextInline: true
  }
};


var paragraph_name = paragraph_metadata.name;

var paragraph_settings = {
  title: Object(external_this_wp_i18n_["__"])('Paragraph'),
  description: Object(external_this_wp_i18n_["__"])('Start with the building block of all narrative.'),
  icon: library_paragraph,
  keywords: [Object(external_this_wp_i18n_["__"])('text')],
  example: {
    attributes: {
      content: Object(external_this_wp_i18n_["__"])('In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing.'),
      style: {
        typography: {
          fontSize: 28
        }
      },
      dropCap: true
    }
  },
  __experimentalLabel: function __experimentalLabel(attributes, _ref) {
    var context = _ref.context;

    if (context === 'accessibility') {
      var content = attributes.content;
      return Object(external_this_lodash_["isEmpty"])(content) ? Object(external_this_wp_i18n_["__"])('Empty') : content;
    }
  },
  transforms: paragraph_transforms,
  deprecated: paragraph_deprecated,
  merge: function merge(attributes, attributesToMerge) {
    return {
      content: (attributes.content || '') + (attributesToMerge.content || '')
    };
  },
  edit: paragraph_edit,
  save: save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/image.js


/**
 * WordPress dependencies
 */

var image_image = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"
}));
/* harmony default export */ var library_image = (image_image);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/image/deprecated.js




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


var image_deprecated_blockAttributes = {
  align: {
    type: 'string'
  },
  url: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'src'
  },
  alt: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'alt',
    default: ''
  },
  caption: {
    type: 'string',
    source: 'html',
    selector: 'figcaption'
  },
  href: {
    type: 'string',
    source: 'attribute',
    selector: 'figure > a',
    attribute: 'href'
  },
  rel: {
    type: 'string',
    source: 'attribute',
    selector: 'figure > a',
    attribute: 'rel'
  },
  linkClass: {
    type: 'string',
    source: 'attribute',
    selector: 'figure > a',
    attribute: 'class'
  },
  id: {
    type: 'number'
  },
  width: {
    type: 'number'
  },
  height: {
    type: 'number'
  },
  linkDestination: {
    type: 'string',
    default: 'none'
  },
  linkTarget: {
    type: 'string',
    source: 'attribute',
    selector: 'figure > a',
    attribute: 'target'
  }
};
var deprecated_deprecated = [{
  attributes: image_deprecated_blockAttributes,
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var url = attributes.url,
        alt = attributes.alt,
        caption = attributes.caption,
        align = attributes.align,
        href = attributes.href,
        width = attributes.width,
        height = attributes.height,
        id = attributes.id;
    var classes = classnames_default()((_classnames = {}, Object(defineProperty["a" /* default */])(_classnames, "align".concat(align), align), Object(defineProperty["a" /* default */])(_classnames, 'is-resized', width || height), _classnames));
    var image = Object(external_this_wp_element_["createElement"])("img", {
      src: url,
      alt: alt,
      className: id ? "wp-image-".concat(id) : null,
      width: width,
      height: height
    });
    return Object(external_this_wp_element_["createElement"])("figure", {
      className: classes
    }, href ? Object(external_this_wp_element_["createElement"])("a", {
      href: href
    }, image) : image, !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "figcaption",
      value: caption
    }));
  }
}, {
  attributes: image_deprecated_blockAttributes,
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var url = attributes.url,
        alt = attributes.alt,
        caption = attributes.caption,
        align = attributes.align,
        href = attributes.href,
        width = attributes.width,
        height = attributes.height,
        id = attributes.id;
    var image = Object(external_this_wp_element_["createElement"])("img", {
      src: url,
      alt: alt,
      className: id ? "wp-image-".concat(id) : null,
      width: width,
      height: height
    });
    return Object(external_this_wp_element_["createElement"])("figure", {
      className: align ? "align".concat(align) : null
    }, href ? Object(external_this_wp_element_["createElement"])("a", {
      href: href
    }, image) : image, !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "figcaption",
      value: caption
    }));
  }
}, {
  attributes: image_deprecated_blockAttributes,
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var url = attributes.url,
        alt = attributes.alt,
        caption = attributes.caption,
        align = attributes.align,
        href = attributes.href,
        width = attributes.width,
        height = attributes.height;
    var extraImageProps = width || height ? {
      width: width,
      height: height
    } : {};
    var image = Object(external_this_wp_element_["createElement"])("img", Object(esm_extends["a" /* default */])({
      src: url,
      alt: alt
    }, extraImageProps));
    var figureStyle = {};

    if (width) {
      figureStyle = {
        width: width
      };
    } else if (align === 'left' || align === 'right') {
      figureStyle = {
        maxWidth: '50%'
      };
    }

    return Object(external_this_wp_element_["createElement"])("figure", {
      className: align ? "align".concat(align) : null,
      style: figureStyle
    }, href ? Object(external_this_wp_element_["createElement"])("a", {
      href: href
    }, image) : image, !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "figcaption",
      value: caption
    }));
  }
}];
/* harmony default export */ var image_deprecated = (deprecated_deprecated);

// EXTERNAL MODULE: external {"this":["wp","blob"]}
var external_this_wp_blob_ = __webpack_require__(44);

// EXTERNAL MODULE: external {"this":["wp","compose"]}
var external_this_wp_compose_ = __webpack_require__(9);

// EXTERNAL MODULE: external {"this":["wp","url"]}
var external_this_wp_url_ = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/crop.js


/**
 * WordPress dependencies
 */

var crop_crop = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M17.5 7v8H19V7c0-1.1-.9-2-2-2H9v1.5h8c.3 0 .5.2.5.5zM7 17.5c-.3 0-.5-.2-.5-.5V1H5v4H1v1.5h4V17c0 1.1.9 2 2 2h10.5v4H19v-4h4v-1.5H7z"
}));
/* harmony default export */ var library_crop = (crop_crop);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/upload.js
var upload = __webpack_require__(204);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/icons.js


/**
 * WordPress dependencies
 */

var embedContentIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zm-6-9.5L16 12l-2.5 2.8 1.1 1L18 12l-3.5-3.5-1 1zm-3 0l-1-1L6 12l3.5 3.8 1.1-1L8 12l2.5-2.5z"
}));
var embedAudioIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zM13.2 7.7c-.4.4-.7 1.1-.7 1.9v3.7c-.4-.3-.8-.4-1.3-.4-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2.5 0 1-.2 1.4-.5.9-.6 1.4-1.6 1.4-2.6V9.6c0-.4.1-.6.2-.8.3-.3 1-.3 1.6-.3h.2V7h-.2c-.7 0-1.8 0-2.6.7z"
}));
var embedPhotoIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9.2 4.5H19c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V9.8l4.6-5.3zm9.8 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"
}));
var embedVideoIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zM10 15l5-3-5-3v6z"
}));
var embedTwitterIcon = {
  foreground: '#1da1f2',
  src: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["G"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    d: "M22.23 5.924c-.736.326-1.527.547-2.357.646.847-.508 1.498-1.312 1.804-2.27-.793.47-1.67.812-2.606.996C18.325 4.498 17.258 4 16.078 4c-2.266 0-4.103 1.837-4.103 4.103 0 .322.036.635.106.935-3.41-.17-6.433-1.804-8.457-4.287-.353.607-.556 1.312-.556 2.064 0 1.424.724 2.68 1.825 3.415-.673-.022-1.305-.207-1.86-.514v.052c0 1.988 1.415 3.647 3.293 4.023-.344.095-.707.145-1.08.145-.265 0-.522-.026-.773-.074.522 1.63 2.038 2.817 3.833 2.85-1.404 1.1-3.174 1.757-5.096 1.757-.332 0-.66-.02-.98-.057 1.816 1.164 3.973 1.843 6.29 1.843 7.547 0 11.675-6.252 11.675-11.675 0-.178-.004-.355-.012-.53.802-.578 1.497-1.3 2.047-2.124z"
  })))
};
var embedYouTubeIcon = {
  foreground: '#ff0000',
  src: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    viewBox: "0 0 24 24"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    d: "M21.8 8s-.195-1.377-.795-1.984c-.76-.797-1.613-.8-2.004-.847-2.798-.203-6.996-.203-6.996-.203h-.01s-4.197 0-6.996.202c-.39.046-1.242.05-2.003.846C2.395 6.623 2.2 8 2.2 8S2 9.62 2 11.24v1.517c0 1.618.2 3.237.2 3.237s.195 1.378.795 1.985c.76.797 1.76.77 2.205.855 1.6.153 6.8.2 6.8.2s4.203-.005 7-.208c.392-.047 1.244-.05 2.005-.847.6-.607.795-1.985.795-1.985s.2-1.618.2-3.237v-1.517C22 9.62 21.8 8 21.8 8zM9.935 14.595v-5.62l5.403 2.82-5.403 2.8z"
  }))
};
var embedFacebookIcon = {
  foreground: '#3b5998',
  src: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    viewBox: "0 0 24 24"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    d: "M20 3H4c-.6 0-1 .4-1 1v16c0 .5.4 1 1 1h8.6v-7h-2.3v-2.7h2.3v-2c0-2.3 1.4-3.6 3.5-3.6 1 0 1.8.1 2.1.1v2.4h-1.4c-1.1 0-1.3.5-1.3 1.3v1.7h2.7l-.4 2.8h-2.3v7H20c.5 0 1-.4 1-1V4c0-.6-.4-1-1-1z"
  }))
};
var embedInstagramIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["G"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M12 4.622c2.403 0 2.688.01 3.637.052.877.04 1.354.187 1.67.31.42.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.67.043.95.052 1.235.052 3.638s-.01 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.42-.358.72-.673 1.036-.315.315-.615.51-1.035.673-.317.123-.794.27-1.67.31-.95.043-1.234.052-3.638.052s-2.688-.01-3.637-.052c-.877-.04-1.354-.187-1.67-.31-.42-.163-.72-.358-1.036-.673-.315-.315-.51-.615-.673-1.035-.123-.317-.27-.794-.31-1.67-.043-.95-.052-1.235-.052-3.638s.01-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.42.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.67-.31.95-.043 1.235-.052 3.638-.052M12 3c-2.444 0-2.75.01-3.71.054s-1.613.196-2.185.418c-.592.23-1.094.538-1.594 1.04-.5.5-.807 1-1.037 1.593-.223.572-.375 1.226-.42 2.184C3.01 9.25 3 9.555 3 12s.01 2.75.054 3.71.196 1.613.418 2.186c.23.592.538 1.094 1.038 1.594s1.002.808 1.594 1.038c.572.222 1.227.375 2.185.418.96.044 1.266.054 3.71.054s2.75-.01 3.71-.054 1.613-.196 2.186-.418c.592-.23 1.094-.538 1.594-1.038s.808-1.002 1.038-1.594c.222-.572.375-1.227.418-2.185.044-.96.054-1.266.054-3.71s-.01-2.75-.054-3.71-.196-1.613-.418-2.186c-.23-.592-.538-1.094-1.038-1.594s-1.002-.808-1.594-1.038c-.572-.222-1.227-.375-2.185-.418C14.75 3.01 14.445 3 12 3zm0 4.378c-2.552 0-4.622 2.07-4.622 4.622s2.07 4.622 4.622 4.622 4.622-2.07 4.622-4.622S14.552 7.378 12 7.378zM12 15c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.804-8.884c-.596 0-1.08.484-1.08 1.08s.484 1.08 1.08 1.08c.596 0 1.08-.484 1.08-1.08s-.483-1.08-1.08-1.08z"
})));
var embedWordPressIcon = {
  foreground: '#0073AA',
  src: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    viewBox: "0 0 24 24"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["G"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    d: "M12.158 12.786l-2.698 7.84c.806.236 1.657.365 2.54.365 1.047 0 2.05-.18 2.986-.51-.024-.037-.046-.078-.065-.123l-2.762-7.57zM3.008 12c0 3.56 2.07 6.634 5.068 8.092L3.788 8.342c-.5 1.117-.78 2.354-.78 3.658zm15.06-.454c0-1.112-.398-1.88-.74-2.48-.456-.74-.883-1.368-.883-2.11 0-.825.627-1.595 1.51-1.595.04 0 .078.006.116.008-1.598-1.464-3.73-2.36-6.07-2.36-3.14 0-5.904 1.613-7.512 4.053.21.008.41.012.58.012.94 0 2.395-.114 2.395-.114.484-.028.54.684.057.74 0 0-.487.058-1.03.086l3.275 9.74 1.968-5.902-1.4-3.838c-.485-.028-.944-.085-.944-.085-.486-.03-.43-.77.056-.742 0 0 1.484.114 2.368.114.94 0 2.397-.114 2.397-.114.486-.028.543.684.058.74 0 0-.488.058-1.03.086l3.25 9.665.897-2.997c.456-1.17.684-2.137.684-2.907zm1.82-3.86c.04.286.06.593.06.924 0 .912-.17 1.938-.683 3.22l-2.746 7.94c2.672-1.558 4.47-4.454 4.47-7.77 0-1.564-.4-3.033-1.1-4.314zM12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"
  })))
};
var embedSpotifyIcon = {
  foreground: '#1db954',
  src: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    viewBox: "0 0 24 24"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.305-1.76-8.786-.963-.335.077-.67-.133-.746-.47-.077-.334.132-.67.47-.745 3.808-.87 7.076-.496 9.712 1.115.293.18.386.563.206.857M17.81 13.7c-.226.367-.706.482-1.072.257-2.687-1.652-6.785-2.13-9.965-1.166-.413.127-.848-.106-.973-.517-.125-.413.108-.848.52-.973 3.632-1.102 8.147-.568 11.234 1.328.366.226.48.707.256 1.072m.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71c-.493.15-1.016-.13-1.166-.624-.148-.495.13-1.017.625-1.167 3.532-1.073 9.404-.866 13.115 1.337.445.264.59.838.327 1.282-.264.443-.838.59-1.282.325"
  }))
};
var embedFlickrIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "m6.5 7c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm11 0c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5z"
}));
var embedVimeoIcon = {
  foreground: '#1ab7ea',
  src: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["G"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    d: "M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.323 19.16 12.93 21 10.97 21c-1.214 0-2.24-1.12-3.08-3.36-.56-2.052-1.118-4.105-1.68-6.158-.622-2.24-1.29-3.36-2.004-3.36-.156 0-.7.328-1.634.98l-.978-1.26c1.027-.903 2.04-1.806 3.037-2.71C6 3.95 7.03 3.328 7.716 3.265c1.62-.156 2.616.95 2.99 3.32.404 2.558.685 4.148.84 4.77.468 2.12.982 3.18 1.543 3.18.435 0 1.09-.687 1.963-2.064.872-1.376 1.34-2.422 1.402-3.142.125-1.187-.343-1.782-1.4-1.782-.5 0-1.013.115-1.542.34 1.023-3.35 2.977-4.976 5.862-4.883 2.14.063 3.148 1.45 3.024 4.16z"
  })))
};
var embedRedditIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M22 11.816c0-1.256-1.02-2.277-2.277-2.277-.593 0-1.122.24-1.526.613-1.48-.965-3.455-1.594-5.647-1.69l1.17-3.702 3.18.75c.01 1.027.847 1.86 1.877 1.86 1.035 0 1.877-.84 1.877-1.877 0-1.035-.842-1.877-1.877-1.877-.77 0-1.43.466-1.72 1.13L13.55 3.92c-.204-.047-.4.067-.46.26l-1.35 4.27c-2.317.037-4.412.67-5.97 1.67-.402-.355-.917-.58-1.493-.58C3.02 9.54 2 10.56 2 11.815c0 .814.433 1.523 1.078 1.925-.037.222-.06.445-.06.673 0 3.292 4.01 5.97 8.94 5.97s8.94-2.678 8.94-5.97c0-.214-.02-.424-.052-.632.687-.39 1.154-1.12 1.154-1.964zm-3.224-7.422c.606 0 1.1.493 1.1 1.1s-.493 1.1-1.1 1.1-1.1-.494-1.1-1.1.493-1.1 1.1-1.1zm-16 7.422c0-.827.673-1.5 1.5-1.5.313 0 .598.103.838.27-.85.675-1.477 1.478-1.812 2.36-.32-.274-.525-.676-.525-1.13zm9.183 7.79c-4.502 0-8.165-2.33-8.165-5.193S7.457 9.22 11.96 9.22s8.163 2.33 8.163 5.193-3.663 5.193-8.164 5.193zM20.635 13c-.326-.89-.948-1.7-1.797-2.383.247-.186.55-.3.882-.3.827 0 1.5.672 1.5 1.5 0 .482-.23.91-.586 1.184zm-11.64 1.704c-.76 0-1.397-.616-1.397-1.376 0-.76.636-1.397 1.396-1.397.76 0 1.376.638 1.376 1.398 0 .76-.616 1.376-1.376 1.376zm7.405-1.376c0 .76-.615 1.376-1.375 1.376s-1.4-.616-1.4-1.376c0-.76.64-1.397 1.4-1.397.76 0 1.376.638 1.376 1.398zm-1.17 3.38c.15.152.15.398 0 .55-.675.674-1.728 1.002-3.22 1.002l-.01-.002-.012.002c-1.492 0-2.544-.328-3.218-1.002-.152-.152-.152-.398 0-.55.152-.152.4-.15.55 0 .52.52 1.394.775 2.67.775l.01.002.01-.002c1.276 0 2.15-.253 2.67-.775.15-.152.398-.152.55 0z"
}));
var embedTumblrIcon = {
  foreground: '#35465c',
  src: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    viewBox: "0 0 24 24"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    d: "M19 3H5a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-5.69 14.66c-2.72 0-3.1-1.9-3.1-3.16v-3.56H8.49V8.99c1.7-.62 2.54-1.99 2.64-2.87 0-.06.06-.41.06-.58h1.9v3.1h2.17v2.3h-2.18v3.1c0 .47.13 1.3 1.2 1.26h1.1v2.36c-1.01.02-2.07 0-2.07 0z"
  }))
};
var embedAmazonIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M18.42 14.58c-.51-.66-1.05-1.23-1.05-2.5V7.87c0-1.8.15-3.45-1.2-4.68-1.05-1.02-2.79-1.35-4.14-1.35-2.6 0-5.52.96-6.12 4.14-.06.36.18.54.4.57l2.66.3c.24-.03.42-.27.48-.5.24-1.12 1.17-1.63 2.2-1.63.56 0 1.22.21 1.55.7.4.56.33 1.31.33 1.97v.36c-1.59.18-3.66.27-5.16.93a4.63 4.63 0 0 0-2.93 4.44c0 2.82 1.8 4.23 4.1 4.23 1.95 0 3.03-.45 4.53-1.98.51.72.66 1.08 1.59 1.83.18.09.45.09.63-.1v.04l2.1-1.8c.24-.21.2-.48.03-.75zm-5.4-1.2c-.45.75-1.14 1.23-1.92 1.23-1.05 0-1.65-.81-1.65-1.98 0-2.31 2.1-2.73 4.08-2.73v.6c0 1.05.03 1.92-.5 2.88z"
}), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M21.69 19.2a17.62 17.62 0 0 1-21.6-1.57c-.23-.2 0-.5.28-.33a23.88 23.88 0 0 0 20.93 1.3c.45-.19.84.3.39.6z"
}), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M22.8 17.96c-.36-.45-2.22-.2-3.1-.12-.23.03-.3-.18-.05-.36 1.5-1.05 3.96-.75 4.26-.39.3.36-.1 2.82-1.5 4.02-.21.18-.42.1-.3-.15.3-.8 1.02-2.58.69-3z"
}));
var embedAnimotoIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "m.0206909 21 19.8160091-13.07806 3.5831 6.20826z",
  fill: "#4bc7ee"
}), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "m23.7254 19.0205-10.1074-17.18468c-.6421-1.114428-1.7087-1.114428-2.3249 0l-11.2931 19.16418h22.5655c1.279 0 1.8019-.8905 1.1599-1.9795z",
  fill: "#d4cdcb"
}), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "m.0206909 21 15.2439091-16.38571 4.3029 7.32271z",
  fill: "#c3d82e"
}), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "m13.618 1.83582c-.6421-1.114428-1.7087-1.114428-2.3249 0l-11.2931 19.16418 15.2646-16.38573z",
  fill: "#e4ecb0"
}), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "m.0206909 21 19.5468091-9.063 1.6621 2.8344z",
  fill: "#209dbd"
}), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "m.0206909 21 17.9209091-11.82623 1.6259 2.76323z",
  fill: "#7cb3c9"
}));
var embedDailymotionIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "m12.1479 18.5957c-2.4949 0-4.28131-1.7558-4.28131-4.0658 0-2.2176 1.78641-4.0965 4.09651-4.0965 2.2793 0 4.0349 1.7864 4.0349 4.1581 0 2.2794-1.7556 4.0042-3.8501 4.0042zm8.3521-18.5957-4.5329 1v7c-1.1088-1.41691-2.8028-1.8787-4.8049-1.8787-2.09443 0-3.97329.76993-5.5133 2.27917-1.72483 1.66323-2.6489 3.78863-2.6489 6.16033 0 2.5873.98562 4.8049 2.89526 6.499 1.44763 1.2936 3.17251 1.9402 5.17454 1.9402 1.9713 0 3.4498-.5236 4.8973-1.9402v1.9402h4.5329c0-7.6359 0-15.3641 0-23z",
  fill: "#333436"
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/core-embeds.js
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */



var common = [{
  name: 'core-embed/twitter',
  settings: {
    title: 'Twitter',
    icon: embedTwitterIcon,
    keywords: ['tweet', Object(external_this_wp_i18n_["__"])('social')],
    description: Object(external_this_wp_i18n_["__"])('Embed a tweet.')
  },
  patterns: [/^https?:\/\/(www\.)?twitter\.com\/.+/i]
}, {
  name: 'core-embed/youtube',
  settings: {
    title: 'YouTube',
    icon: embedYouTubeIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('music'), Object(external_this_wp_i18n_["__"])('video')],
    description: Object(external_this_wp_i18n_["__"])('Embed a YouTube video.')
  },
  patterns: [/^https?:\/\/((m|www)\.)?youtube\.com\/.+/i, /^https?:\/\/youtu\.be\/.+/i]
}, {
  name: 'core-embed/facebook',
  settings: {
    title: 'Facebook',
    icon: embedFacebookIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('social')],
    description: Object(external_this_wp_i18n_["__"])('Embed a Facebook post.'),
    previewable: false
  },
  patterns: [/^https?:\/\/www\.facebook.com\/.+/i]
}, {
  name: 'core-embed/instagram',
  settings: {
    title: 'Instagram',
    icon: embedInstagramIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('image'), Object(external_this_wp_i18n_["__"])('social')],
    description: Object(external_this_wp_i18n_["__"])('Embed an Instagram post.')
  },
  patterns: [/^https?:\/\/(www\.)?instagr(\.am|am\.com)\/.+/i]
}, {
  name: 'core-embed/wordpress',
  settings: {
    title: 'WordPress',
    icon: embedWordPressIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('post'), Object(external_this_wp_i18n_["__"])('blog')],
    responsive: false,
    description: Object(external_this_wp_i18n_["__"])('Embed a WordPress post.')
  }
}, {
  name: 'core-embed/soundcloud',
  settings: {
    title: 'SoundCloud',
    icon: embedAudioIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('music'), Object(external_this_wp_i18n_["__"])('audio')],
    description: Object(external_this_wp_i18n_["__"])('Embed SoundCloud content.')
  },
  patterns: [/^https?:\/\/(www\.)?soundcloud\.com\/.+/i]
}, {
  name: 'core-embed/spotify',
  settings: {
    title: 'Spotify',
    icon: embedSpotifyIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('music'), Object(external_this_wp_i18n_["__"])('audio')],
    description: Object(external_this_wp_i18n_["__"])('Embed Spotify content.')
  },
  patterns: [/^https?:\/\/(open|play)\.spotify\.com\/.+/i]
}, {
  name: 'core-embed/flickr',
  settings: {
    title: 'Flickr',
    icon: embedFlickrIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('image')],
    description: Object(external_this_wp_i18n_["__"])('Embed Flickr content.')
  },
  patterns: [/^https?:\/\/(www\.)?flickr\.com\/.+/i, /^https?:\/\/flic\.kr\/.+/i]
}, {
  name: 'core-embed/vimeo',
  settings: {
    title: 'Vimeo',
    icon: embedVimeoIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('video')],
    description: Object(external_this_wp_i18n_["__"])('Embed a Vimeo video.')
  },
  patterns: [/^https?:\/\/(www\.)?vimeo\.com\/.+/i]
}];
var others = [{
  name: 'core-embed/animoto',
  settings: {
    title: 'Animoto',
    icon: embedAnimotoIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed an Animoto video.')
  },
  patterns: [/^https?:\/\/(www\.)?(animoto|video214)\.com\/.+/i]
}, {
  name: 'core-embed/cloudup',
  settings: {
    title: 'Cloudup',
    icon: embedContentIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed Cloudup content.')
  },
  patterns: [/^https?:\/\/cloudup\.com\/.+/i]
}, {
  // Deprecated since CollegeHumor content is now powered by YouTube
  name: 'core-embed/collegehumor',
  settings: {
    title: 'CollegeHumor',
    icon: embedVideoIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed CollegeHumor content.'),
    supports: {
      inserter: false
    }
  },
  patterns: []
}, {
  name: 'core-embed/crowdsignal',
  settings: {
    title: 'Crowdsignal',
    icon: embedContentIcon,
    keywords: ['polldaddy', Object(external_this_wp_i18n_["__"])('survey')],
    transform: [{
      type: 'block',
      blocks: ['core-embed/polldaddy'],
      transform: function transform(content) {
        return Object(external_this_wp_blocks_["createBlock"])('core-embed/crowdsignal', {
          content: content
        });
      }
    }],
    description: Object(external_this_wp_i18n_["__"])('Embed Crowdsignal (formerly Polldaddy) content.')
  },
  patterns: [/^https?:\/\/((.+\.)?polldaddy\.com|poll\.fm|.+\.survey\.fm)\/.+/i]
}, {
  name: 'core-embed/dailymotion',
  settings: {
    title: 'Dailymotion',
    icon: embedDailymotionIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('video')],
    description: Object(external_this_wp_i18n_["__"])('Embed a Dailymotion video.')
  },
  patterns: [/^https?:\/\/(www\.)?dailymotion\.com\/.+/i]
}, {
  name: 'core-embed/imgur',
  settings: {
    title: 'Imgur',
    icon: embedPhotoIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed Imgur content.')
  },
  patterns: [/^https?:\/\/(.+\.)?imgur\.com\/.+/i]
}, {
  name: 'core-embed/issuu',
  settings: {
    title: 'Issuu',
    icon: embedContentIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed Issuu content.')
  },
  patterns: [/^https?:\/\/(www\.)?issuu\.com\/.+/i]
}, {
  name: 'core-embed/kickstarter',
  settings: {
    title: 'Kickstarter',
    icon: embedContentIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed Kickstarter content.')
  },
  patterns: [/^https?:\/\/(www\.)?kickstarter\.com\/.+/i, /^https?:\/\/kck\.st\/.+/i]
}, {
  name: 'core-embed/meetup-com',
  settings: {
    title: 'Meetup.com',
    icon: embedContentIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed Meetup.com content.')
  },
  patterns: [/^https?:\/\/(www\.)?meetu(\.ps|p\.com)\/.+/i]
}, {
  name: 'core-embed/mixcloud',
  settings: {
    title: 'Mixcloud',
    icon: embedAudioIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('music'), Object(external_this_wp_i18n_["__"])('audio')],
    description: Object(external_this_wp_i18n_["__"])('Embed Mixcloud content.')
  },
  patterns: [/^https?:\/\/(www\.)?mixcloud\.com\/.+/i]
}, {
  // Deprecated in favour of the core-embed/crowdsignal block
  name: 'core-embed/polldaddy',
  settings: {
    title: 'Polldaddy',
    icon: embedContentIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed Polldaddy content.'),
    supports: {
      inserter: false
    }
  },
  patterns: []
}, {
  name: 'core-embed/reddit',
  settings: {
    title: 'Reddit',
    icon: embedRedditIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed a Reddit thread.')
  },
  patterns: [/^https?:\/\/(www\.)?reddit\.com\/.+/i]
}, {
  name: 'core-embed/reverbnation',
  settings: {
    title: 'ReverbNation',
    icon: embedAudioIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed ReverbNation content.')
  },
  patterns: [/^https?:\/\/(www\.)?reverbnation\.com\/.+/i]
}, {
  name: 'core-embed/screencast',
  settings: {
    title: 'Screencast',
    icon: embedVideoIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed Screencast content.')
  },
  patterns: [/^https?:\/\/(www\.)?screencast\.com\/.+/i]
}, {
  name: 'core-embed/scribd',
  settings: {
    title: 'Scribd',
    icon: embedContentIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed Scribd content.')
  },
  patterns: [/^https?:\/\/(www\.)?scribd\.com\/.+/i]
}, {
  name: 'core-embed/slideshare',
  settings: {
    title: 'Slideshare',
    icon: embedContentIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed Slideshare content.')
  },
  patterns: [/^https?:\/\/(.+?\.)?slideshare\.net\/.+/i]
}, {
  name: 'core-embed/smugmug',
  settings: {
    title: 'SmugMug',
    icon: embedPhotoIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed SmugMug content.'),
    previewable: false
  },
  patterns: [/^https?:\/\/(.+\.)?smugmug\.com\/.*/i]
}, {
  // Deprecated in favour of the core-embed/speaker-deck block.
  name: 'core-embed/speaker',
  settings: {
    title: 'Speaker',
    icon: embedAudioIcon,
    supports: {
      inserter: false
    }
  },
  patterns: []
}, {
  name: 'core-embed/speaker-deck',
  settings: {
    title: 'Speaker Deck',
    icon: embedContentIcon,
    transform: [{
      type: 'block',
      blocks: ['core-embed/speaker'],
      transform: function transform(content) {
        return Object(external_this_wp_blocks_["createBlock"])('core-embed/speaker-deck', {
          content: content
        });
      }
    }],
    description: Object(external_this_wp_i18n_["__"])('Embed Speaker Deck content.')
  },
  patterns: [/^https?:\/\/(www\.)?speakerdeck\.com\/.+/i]
}, {
  name: 'core-embed/tiktok',
  settings: {
    title: 'TikTok',
    icon: embedVideoIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('video')],
    description: Object(external_this_wp_i18n_["__"])('Embed a TikTok video.')
  },
  patterns: [/^https?:\/\/(www\.)?tiktok\.com\/.+/i]
}, {
  name: 'core-embed/ted',
  settings: {
    title: 'TED',
    icon: embedVideoIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed a TED video.')
  },
  patterns: [/^https?:\/\/(www\.|embed\.)?ted\.com\/.+/i]
}, {
  name: 'core-embed/tumblr',
  settings: {
    title: 'Tumblr',
    icon: embedTumblrIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('social')],
    description: Object(external_this_wp_i18n_["__"])('Embed a Tumblr post.')
  },
  patterns: [/^https?:\/\/(www\.)?tumblr\.com\/.+/i]
}, {
  name: 'core-embed/videopress',
  settings: {
    title: 'VideoPress',
    icon: embedVideoIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('video')],
    description: Object(external_this_wp_i18n_["__"])('Embed a VideoPress video.')
  },
  patterns: [/^https?:\/\/videopress\.com\/.+/i]
}, {
  name: 'core-embed/wordpress-tv',
  settings: {
    title: 'WordPress.tv',
    icon: embedVideoIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed a WordPress.tv video.')
  },
  patterns: [/^https?:\/\/wordpress\.tv\/.+/i]
}, {
  name: 'core-embed/amazon-kindle',
  settings: {
    title: 'Amazon Kindle',
    icon: embedAmazonIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('ebook')],
    responsive: false,
    description: Object(external_this_wp_i18n_["__"])('Embed Amazon Kindle content.')
  },
  patterns: [/^https?:\/\/([a-z0-9-]+\.)?(amazon|amzn)(\.[a-z]{2,4})+\/.+/i, /^https?:\/\/(www\.)?(a\.co|z\.cn)\/.+/i]
}];

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/constants.js
var ASPECT_RATIOS = [// Common video resolutions.
{
  ratio: '2.33',
  className: 'wp-embed-aspect-21-9'
}, {
  ratio: '2.00',
  className: 'wp-embed-aspect-18-9'
}, {
  ratio: '1.78',
  className: 'wp-embed-aspect-16-9'
}, {
  ratio: '1.33',
  className: 'wp-embed-aspect-4-3'
}, // Vertical video and instagram square video support.
{
  ratio: '1.00',
  className: 'wp-embed-aspect-1-1'
}, {
  ratio: '0.56',
  className: 'wp-embed-aspect-9-16'
}, {
  ratio: '0.50',
  className: 'wp-embed-aspect-1-2'
}];
var DEFAULT_EMBED_BLOCK = 'core/embed';
var WORDPRESS_EMBED_BLOCK = 'core-embed/wordpress';

// EXTERNAL MODULE: ./node_modules/classnames/dedupe.js
var dedupe = __webpack_require__(105);
var dedupe_default = /*#__PURE__*/__webpack_require__.n(dedupe);

// EXTERNAL MODULE: ./node_modules/memize/index.js
var memize = __webpack_require__(60);
var memize_default = /*#__PURE__*/__webpack_require__.n(memize);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/util.js




function util_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function util_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { util_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { util_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */


/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */



/**
 * Returns true if any of the regular expressions match the URL.
 *
 * @param {string}   url      The URL to test.
 * @param {Array}    patterns The list of regular expressions to test agains.
 * @return {boolean} True if any of the regular expressions match the URL.
 */

var matchesPatterns = function matchesPatterns(url) {
  var patterns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return patterns.some(function (pattern) {
    return url.match(pattern);
  });
};
/**
 * Finds the block name that should be used for the URL, based on the
 * structure of the URL.
 *
 * @param {string}  url The URL to test.
 * @return {string} The name of the block that should be used for this URL, e.g. core-embed/twitter
 */

var util_findBlock = function findBlock(url) {
  for (var _i = 0, _arr = [].concat(Object(toConsumableArray["a" /* default */])(common), Object(toConsumableArray["a" /* default */])(others)); _i < _arr.length; _i++) {
    var block = _arr[_i];

    if (matchesPatterns(url, block.patterns)) {
      return block.name;
    }
  }

  return DEFAULT_EMBED_BLOCK;
};
var util_isFromWordPress = function isFromWordPress(html) {
  return Object(external_this_lodash_["includes"])(html, 'class="wp-embedded-content"');
};
var util_getPhotoHtml = function getPhotoHtml(photo) {
  // 100% width for the preview so it fits nicely into the document, some "thumbnails" are
  // actually the full size photo. If thumbnails not found, use full image.
  var imageUrl = photo.thumbnail_url ? photo.thumbnail_url : photo.url;
  var photoPreview = Object(external_this_wp_element_["createElement"])("p", null, Object(external_this_wp_element_["createElement"])("img", {
    src: imageUrl,
    alt: photo.title,
    width: "100%"
  }));
  return Object(external_this_wp_element_["renderToString"])(photoPreview);
};
/**
 * Creates a more suitable embed block based on the passed in props
 * and attributes generated from an embed block's preview.
 *
 * We require `attributesFromPreview` to be generated from the latest attributes
 * and preview, and because of the way the react lifecycle operates, we can't
 * guarantee that the attributes contained in the block's props are the latest
 * versions, so we require that these are generated separately.
 * See `getAttributesFromPreview` in the generated embed edit component.
 *
 * @param {Object} props                  The block's props.
 * @param {Object} attributesFromPreview  Attributes generated from the block's most up to date preview.
 * @return {Object|undefined} A more suitable embed block if one exists.
 */

var util_createUpgradedEmbedBlock = function createUpgradedEmbedBlock(props, attributesFromPreview) {
  var preview = props.preview,
      name = props.name;
  var url = props.attributes.url;

  if (!url) {
    return;
  }

  var matchingBlock = util_findBlock(url);

  if (!Object(external_this_wp_blocks_["getBlockType"])(matchingBlock)) {
    return;
  } // WordPress blocks can work on multiple sites, and so don't have patterns,
  // so if we're in a WordPress block, assume the user has chosen it for a WordPress URL.


  if (WORDPRESS_EMBED_BLOCK !== name && DEFAULT_EMBED_BLOCK !== matchingBlock) {
    // At this point, we have discovered a more suitable block for this url, so transform it.
    if (name !== matchingBlock) {
      return Object(external_this_wp_blocks_["createBlock"])(matchingBlock, {
        url: url
      });
    }
  }

  if (preview) {
    var html = preview.html; // We can't match the URL for WordPress embeds, we have to check the HTML instead.

    if (util_isFromWordPress(html)) {
      // If this is not the WordPress embed block, transform it into one.
      if (WORDPRESS_EMBED_BLOCK !== name) {
        return Object(external_this_wp_blocks_["createBlock"])(WORDPRESS_EMBED_BLOCK, util_objectSpread({
          url: url
        }, attributesFromPreview));
      }
    }
  }
};
/**
 * Returns class names with any relevant responsive aspect ratio names.
 *
 * @param {string}  html               The preview HTML that possibly contains an iframe with width and height set.
 * @param {string}  existingClassNames Any existing class names.
 * @param {boolean} allowResponsive    If the responsive class names should be added, or removed.
 * @return {string} Deduped class names.
 */

function getClassNames(html) {
  var existingClassNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var allowResponsive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!allowResponsive) {
    // Remove all of the aspect ratio related class names.
    var aspectRatioClassNames = {
      'wp-has-aspect-ratio': false
    };

    for (var ratioIndex = 0; ratioIndex < ASPECT_RATIOS.length; ratioIndex++) {
      var aspectRatioToRemove = ASPECT_RATIOS[ratioIndex];
      aspectRatioClassNames[aspectRatioToRemove.className] = false;
    }

    return dedupe_default()(existingClassNames, aspectRatioClassNames);
  }

  var previewDocument = document.implementation.createHTMLDocument('');
  previewDocument.body.innerHTML = html;
  var iframe = previewDocument.body.querySelector('iframe'); // If we have a fixed aspect iframe, and it's a responsive embed block.

  if (iframe && iframe.height && iframe.width) {
    var aspectRatio = (iframe.width / iframe.height).toFixed(2); // Given the actual aspect ratio, find the widest ratio to support it.

    for (var _ratioIndex = 0; _ratioIndex < ASPECT_RATIOS.length; _ratioIndex++) {
      var potentialRatio = ASPECT_RATIOS[_ratioIndex];

      if (aspectRatio >= potentialRatio.ratio) {
        var _classnames;

        return dedupe_default()(existingClassNames, (_classnames = {}, Object(defineProperty["a" /* default */])(_classnames, potentialRatio.className, allowResponsive), Object(defineProperty["a" /* default */])(_classnames, 'wp-has-aspect-ratio', allowResponsive), _classnames));
      }
    }
  }

  return existingClassNames;
}
/**
 * Fallback behaviour for unembeddable URLs.
 * Creates a paragraph block containing a link to the URL, and calls `onReplace`.
 *
 * @param {string}   url       The URL that could not be embedded.
 * @param {Function} onReplace Function to call with the created fallback block.
 */

function util_fallback(url, onReplace) {
  var link = Object(external_this_wp_element_["createElement"])("a", {
    href: url
  }, url);
  onReplace(Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
    content: Object(external_this_wp_element_["renderToString"])(link)
  }));
}
/***
 * Gets block attributes based on the preview and responsive state.
 *
 * @param {Object} preview The preview data.
 * @param {string} title The block's title, e.g. Twitter.
 * @param {Object} currentClassNames The block's current class names.
 * @param {boolean} isResponsive Boolean indicating if the block supports responsive content.
 * @param {boolean} allowResponsive Apply responsive classes to fixed size content.
 * @return {Object} Attributes and values.
 */

var getAttributesFromPreview = memize_default()(function (preview, title, currentClassNames, isResponsive) {
  var allowResponsive = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  if (!preview) {
    return {};
  }

  var attributes = {}; // Some plugins only return HTML with no type info, so default this to 'rich'.

  var _preview$type = preview.type,
      type = _preview$type === void 0 ? 'rich' : _preview$type; // If we got a provider name from the API, use it for the slug, otherwise we use the title,
  // because not all embed code gives us a provider name.

  var html = preview.html,
      providerName = preview.provider_name;
  var providerNameSlug = Object(external_this_lodash_["kebabCase"])(Object(external_this_lodash_["toLower"])('' !== providerName ? providerName : title));

  if (util_isFromWordPress(html)) {
    type = 'wp-embed';
  }

  if (html || 'photo' === type) {
    attributes.type = type;
    attributes.providerNameSlug = providerNameSlug;
  }

  attributes.className = getClassNames(html, currentClassNames, isResponsive && allowResponsive);
  return attributes;
});

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/image/use-client-width.js


/**
 * WordPress dependencies
 */

function useClientWidth(ref, dependencies) {
  var _useState = Object(external_this_wp_element_["useState"])(),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      clientWidth = _useState2[0],
      setClientWidth = _useState2[1];

  function calculateClientWidth() {
    setClientWidth(ref.current.clientWidth);
  }

  Object(external_this_wp_element_["useEffect"])(calculateClientWidth, dependencies);
  Object(external_this_wp_element_["useEffect"])(function () {
    var defaultView = ref.current.ownerDocument.defaultView;
    defaultView.addEventListener('resize', calculateClientWidth);
    return function () {
      defaultView.removeEventListener('resize', calculateClientWidth);
    };
  }, []);
  return clientWidth;
}

// CONCATENATED MODULE: ./node_modules/react-easy-crop/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// EXTERNAL MODULE: external {"this":"React"}
var external_this_React_ = __webpack_require__(13);
var external_this_React_default = /*#__PURE__*/__webpack_require__.n(external_this_React_);

// CONCATENATED MODULE: ./node_modules/react-easy-crop/index.module.js



/**
 * Compute the dimension of the crop area based on media size,
 * aspect ratio and optionally rotation
 */

function getCropSize(mediaWidth, mediaHeight, containerWidth, containerHeight, aspect, rotation) {
  if (rotation === void 0) {
    rotation = 0;
  }

  var _a = translateSize(mediaWidth, mediaHeight, rotation),
      width = _a.width,
      height = _a.height;

  var fittingWidth = Math.min(width, containerWidth);
  var fittingHeight = Math.min(height, containerHeight);

  if (fittingWidth > fittingHeight * aspect) {
    return {
      width: fittingHeight * aspect,
      height: fittingHeight
    };
  }

  return {
    width: fittingWidth,
    height: fittingWidth / aspect
  };
}
/**
 * Ensure a new media position stays in the crop area.
 */

function index_module_restrictPosition(position, mediaSize, cropSize, zoom, rotation) {
  if (rotation === void 0) {
    rotation = 0;
  }

  var _a = translateSize(mediaSize.width, mediaSize.height, rotation),
      width = _a.width,
      height = _a.height;

  return {
    x: restrictPositionCoord(position.x, width, cropSize.width, zoom),
    y: restrictPositionCoord(position.y, height, cropSize.height, zoom)
  };
}

function restrictPositionCoord(position, mediaSize, cropSize, zoom) {
  var maxPosition = mediaSize * zoom / 2 - cropSize / 2;
  return Math.min(maxPosition, Math.max(position, -maxPosition));
}

function getDistanceBetweenPoints(pointA, pointB) {
  return Math.sqrt(Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.x - pointB.x, 2));
}
function getRotationBetweenPoints(pointA, pointB) {
  return Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x) * 180 / Math.PI;
}
/**
 * Compute the output cropped area of the media in percentages and pixels.
 * x/y are the top-left coordinates on the src media
 */

function computeCroppedArea(crop, mediaSize, cropSize, aspect, zoom, rotation, restrictPosition) {
  if (rotation === void 0) {
    rotation = 0;
  }

  if (restrictPosition === void 0) {
    restrictPosition = true;
  } // if the media is rotated by the user, we cannot limit the position anymore
  // as it might need to be negative.


  var limitAreaFn = restrictPosition && rotation === 0 ? limitArea : noOp;
  var croppedAreaPercentages = {
    x: limitAreaFn(100, ((mediaSize.width - cropSize.width / zoom) / 2 - crop.x / zoom) / mediaSize.width * 100),
    y: limitAreaFn(100, ((mediaSize.height - cropSize.height / zoom) / 2 - crop.y / zoom) / mediaSize.height * 100),
    width: limitAreaFn(100, cropSize.width / mediaSize.width * 100 / zoom),
    height: limitAreaFn(100, cropSize.height / mediaSize.height * 100 / zoom)
  }; // we compute the pixels size naively

  var widthInPixels = Math.round(limitAreaFn(mediaSize.naturalWidth, croppedAreaPercentages.width * mediaSize.naturalWidth / 100));
  var heightInPixels = Math.round(limitAreaFn(mediaSize.naturalHeight, croppedAreaPercentages.height * mediaSize.naturalHeight / 100));
  var isImgWiderThanHigh = mediaSize.naturalWidth >= mediaSize.naturalHeight * aspect; // then we ensure the width and height exactly match the aspect (to avoid rounding approximations)
  // if the media is wider than high, when zoom is 0, the crop height will be equals to iamge height
  // thus we want to compute the width from the height and aspect for accuracy.
  // Otherwise, we compute the height from width and aspect.

  var sizePixels = isImgWiderThanHigh ? {
    width: Math.round(heightInPixels * aspect),
    height: heightInPixels
  } : {
    width: widthInPixels,
    height: Math.round(widthInPixels / aspect)
  };

  var croppedAreaPixels = __assign(__assign({}, sizePixels), {
    x: Math.round(limitAreaFn(mediaSize.naturalWidth - sizePixels.width, croppedAreaPercentages.x * mediaSize.naturalWidth / 100)),
    y: Math.round(limitAreaFn(mediaSize.naturalHeight - sizePixels.height, croppedAreaPercentages.y * mediaSize.naturalHeight / 100))
  });

  return {
    croppedAreaPercentages: croppedAreaPercentages,
    croppedAreaPixels: croppedAreaPixels
  };
}
/**
 * Ensure the returned value is between 0 and max
 */

function limitArea(max, value) {
  return Math.min(max, Math.max(0, value));
}

function noOp(_max, value) {
  return value;
}
/**
 * Compute the crop and zoom from the croppedAreaPixels
 */


function getZoomFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize) {
  var mediaZoom = mediaSize.width / mediaSize.naturalWidth;

  if (cropSize) {
    var isHeightMaxSize_1 = cropSize.height > cropSize.width;
    return isHeightMaxSize_1 ? cropSize.height / mediaZoom / croppedAreaPixels.height : cropSize.width / mediaZoom / croppedAreaPixels.width;
  }

  var aspect = croppedAreaPixels.width / croppedAreaPixels.height;
  var isHeightMaxSize = mediaSize.naturalWidth >= mediaSize.naturalHeight * aspect;
  return isHeightMaxSize ? mediaSize.naturalHeight / croppedAreaPixels.height : mediaSize.naturalWidth / croppedAreaPixels.width;
}
/**
 * Compute the crop and zoom from the croppedAreaPixels
 */


function getInitialCropFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize) {
  var mediaZoom = mediaSize.width / mediaSize.naturalWidth;
  var zoom = getZoomFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize);
  var cropZoom = mediaZoom * zoom;
  var crop = {
    x: ((mediaSize.naturalWidth - croppedAreaPixels.width) / 2 - croppedAreaPixels.x) * cropZoom,
    y: ((mediaSize.naturalHeight - croppedAreaPixels.height) / 2 - croppedAreaPixels.y) * cropZoom
  };
  return {
    crop: crop,
    zoom: zoom
  };
}
/**
 * Return the point that is the center of point a and b
 */

function getCenter(a, b) {
  return {
    x: (b.x + a.x) / 2,
    y: (b.y + a.y) / 2
  };
}
/**
 *
 * Returns an x,y point once rotated around xMid,yMid
 */

function rotateAroundMidPoint(x, y, xMid, yMid, degrees) {
  var cos = Math.cos;
  var sin = Math.sin;
  var radian = degrees * Math.PI / 180; // Convert to radians
  // Subtract midpoints, so that midpoint is translated to origin
  // and add it in the end again

  var xr = (x - xMid) * cos(radian) - (y - yMid) * sin(radian) + xMid;
  var yr = (x - xMid) * sin(radian) + (y - yMid) * cos(radian) + yMid;
  return [xr, yr];
}
/**
 * Returns the new bounding area of a rotated rectangle.
 */

function translateSize(width, height, rotation) {
  var centerX = width / 2;
  var centerY = height / 2;
  var outerBounds = [rotateAroundMidPoint(0, 0, centerX, centerY, rotation), rotateAroundMidPoint(width, 0, centerX, centerY, rotation), rotateAroundMidPoint(width, height, centerX, centerY, rotation), rotateAroundMidPoint(0, height, centerX, centerY, rotation)];
  var minX = Math.min.apply(Math, outerBounds.map(function (p) {
    return p[0];
  }));
  var maxX = Math.max.apply(Math, outerBounds.map(function (p) {
    return p[0];
  }));
  var minY = Math.min.apply(Math, outerBounds.map(function (p) {
    return p[1];
  }));
  var maxY = Math.max.apply(Math, outerBounds.map(function (p) {
    return p[1];
  }));
  return {
    width: maxX - minX,
    height: maxY - minY
  };
}
/**
 * Combine multiple class names into a single string.
 */

function index_module_classNames() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return args.filter(function (value) {
    if (typeof value === 'string' && value.length > 0) {
      return true;
    }

    return false;
  }).join(' ').trim();
}

var css = ".reactEasyCrop_Container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  user-select: none;\n  touch-action: none;\n  cursor: move;\n}\n\n.reactEasyCrop_Image,\n.reactEasyCrop_Video {\n  max-width: 100%;\n  max-height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */\n}\n\n.reactEasyCrop_CropArea {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 9999em;\n  color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.reactEasyCrop_CropAreaRound {\n  border-radius: 50%;\n}\n\n.reactEasyCrop_CropAreaGrid::before {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 0;\n  bottom: 0;\n  left: 33.33%;\n  right: 33.33%;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.reactEasyCrop_CropAreaGrid::after {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 33.33%;\n  bottom: 33.33%;\n  left: 0;\n  right: 0;\n  border-left: 0;\n  border-right: 0;\n}\n";

var MIN_ZOOM = 1;
var MAX_ZOOM = 3;

var index_module_Cropper =
/** @class */
function (_super) {
  __extends(Cropper, _super);

  function Cropper() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.imageRef = null;
    _this.videoRef = null;
    _this.containerRef = null;
    _this.styleRef = null;
    _this.containerRect = null;
    _this.mediaSize = {
      width: 0,
      height: 0,
      naturalWidth: 0,
      naturalHeight: 0
    };
    _this.dragStartPosition = {
      x: 0,
      y: 0
    };
    _this.dragStartCrop = {
      x: 0,
      y: 0
    };
    _this.lastPinchDistance = 0;
    _this.lastPinchRotation = 0;
    _this.rafDragTimeout = null;
    _this.rafPinchTimeout = null;
    _this.wheelTimer = null;
    _this.state = {
      cropSize: null,
      hasWheelJustStarted: false
    }; // this is to prevent Safari on iOS >= 10 to zoom the page

    _this.preventZoomSafari = function (e) {
      return e.preventDefault();
    };

    _this.cleanEvents = function () {
      document.removeEventListener('mousemove', _this.onMouseMove);
      document.removeEventListener('mouseup', _this.onDragStopped);
      document.removeEventListener('touchmove', _this.onTouchMove);
      document.removeEventListener('touchend', _this.onDragStopped);
    };

    _this.clearScrollEvent = function () {
      if (_this.containerRef) _this.containerRef.removeEventListener('wheel', _this.onWheel);

      if (_this.wheelTimer) {
        clearTimeout(_this.wheelTimer);
      }
    };

    _this.onMediaLoad = function () {
      _this.computeSizes();

      _this.emitCropData();

      _this.setInitialCrop();

      if (_this.props.onMediaLoaded) {
        _this.props.onMediaLoaded(_this.mediaSize);
      }
    };

    _this.setInitialCrop = function () {
      var _a = _this.props,
          initialCroppedAreaPixels = _a.initialCroppedAreaPixels,
          cropSize = _a.cropSize;

      if (!initialCroppedAreaPixels) {
        return;
      }

      var _b = getInitialCropFromCroppedAreaPixels(initialCroppedAreaPixels, _this.mediaSize, cropSize),
          crop = _b.crop,
          zoom = _b.zoom;

      _this.props.onCropChange(crop);

      _this.props.onZoomChange && _this.props.onZoomChange(zoom);
    };

    _this.computeSizes = function () {
      var _a, _b, _c, _d;

      var mediaRef = _this.imageRef || _this.videoRef;

      if (mediaRef && _this.containerRef) {
        _this.containerRect = _this.containerRef.getBoundingClientRect();
        _this.mediaSize = {
          width: mediaRef.offsetWidth,
          height: mediaRef.offsetHeight,
          naturalWidth: ((_a = _this.imageRef) === null || _a === void 0 ? void 0 : _a.naturalWidth) || ((_b = _this.videoRef) === null || _b === void 0 ? void 0 : _b.videoWidth) || 0,
          naturalHeight: ((_c = _this.imageRef) === null || _c === void 0 ? void 0 : _c.naturalHeight) || ((_d = _this.videoRef) === null || _d === void 0 ? void 0 : _d.videoHeight) || 0
        };
        var cropSize = _this.props.cropSize ? _this.props.cropSize : getCropSize(mediaRef.offsetWidth, mediaRef.offsetHeight, _this.containerRect.width, _this.containerRect.height, _this.props.aspect, _this.props.rotation);

        _this.setState({
          cropSize: cropSize
        }, _this.recomputeCropPosition);
      }
    };

    _this.onMouseDown = function (e) {
      e.preventDefault();
      document.addEventListener('mousemove', _this.onMouseMove);
      document.addEventListener('mouseup', _this.onDragStopped);

      _this.onDragStart(Cropper.getMousePoint(e));
    };

    _this.onMouseMove = function (e) {
      return _this.onDrag(Cropper.getMousePoint(e));
    };

    _this.onTouchStart = function (e) {
      e.preventDefault();
      document.addEventListener('touchmove', _this.onTouchMove, {
        passive: false
      }); // iOS 11 now defaults to passive: true

      document.addEventListener('touchend', _this.onDragStopped);

      if (e.touches.length === 2) {
        _this.onPinchStart(e);
      } else if (e.touches.length === 1) {
        _this.onDragStart(Cropper.getTouchPoint(e.touches[0]));
      }
    };

    _this.onTouchMove = function (e) {
      // Prevent whole page from scrolling on iOS.
      e.preventDefault();

      if (e.touches.length === 2) {
        _this.onPinchMove(e);
      } else if (e.touches.length === 1) {
        _this.onDrag(Cropper.getTouchPoint(e.touches[0]));
      }
    };

    _this.onDragStart = function (_a) {
      var x = _a.x,
          y = _a.y;

      var _b, _c;

      _this.dragStartPosition = {
        x: x,
        y: y
      };
      _this.dragStartCrop = __assign({}, _this.props.crop);
      (_c = (_b = _this.props).onInteractionStart) === null || _c === void 0 ? void 0 : _c.call(_b);
    };

    _this.onDrag = function (_a) {
      var x = _a.x,
          y = _a.y;
      if (_this.rafDragTimeout) window.cancelAnimationFrame(_this.rafDragTimeout);
      _this.rafDragTimeout = window.requestAnimationFrame(function () {
        if (!_this.state.cropSize) return;
        if (x === undefined || y === undefined) return;
        var offsetX = x - _this.dragStartPosition.x;
        var offsetY = y - _this.dragStartPosition.y;
        var requestedPosition = {
          x: _this.dragStartCrop.x + offsetX,
          y: _this.dragStartCrop.y + offsetY
        };
        var newPosition = _this.props.restrictPosition ? index_module_restrictPosition(requestedPosition, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : requestedPosition;

        _this.props.onCropChange(newPosition);
      });
    };

    _this.onDragStopped = function () {
      var _a, _b;

      _this.cleanEvents();

      _this.emitCropData();

      (_b = (_a = _this.props).onInteractionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
    };

    _this.onWheel = function (e) {
      e.preventDefault();
      var point = Cropper.getMousePoint(e);
      var newZoom = _this.props.zoom - e.deltaY * _this.props.zoomSpeed / 200;

      _this.setNewZoom(newZoom, point);

      if (!_this.state.hasWheelJustStarted) {
        _this.setState({
          hasWheelJustStarted: true
        }, function () {
          var _a, _b;

          return (_b = (_a = _this.props).onInteractionStart) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
      }

      if (_this.wheelTimer) {
        clearTimeout(_this.wheelTimer);
      }

      _this.wheelTimer = window.setTimeout(function () {
        return _this.setState({
          hasWheelJustStarted: false
        }, function () {
          var _a, _b;

          return (_b = (_a = _this.props).onInteractionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
      }, 250);
    };

    _this.getPointOnContainer = function (_a) {
      var x = _a.x,
          y = _a.y;

      if (!_this.containerRect) {
        throw new Error('The Cropper is not mounted');
      }

      return {
        x: _this.containerRect.width / 2 - (x - _this.containerRect.left),
        y: _this.containerRect.height / 2 - (y - _this.containerRect.top)
      };
    };

    _this.getPointOnMedia = function (_a) {
      var x = _a.x,
          y = _a.y;
      var _b = _this.props,
          crop = _b.crop,
          zoom = _b.zoom;
      return {
        x: (x + crop.x) / zoom,
        y: (y + crop.y) / zoom
      };
    };

    _this.setNewZoom = function (zoom, point) {
      if (!_this.state.cropSize || !_this.props.onZoomChange) return;

      var zoomPoint = _this.getPointOnContainer(point);

      var zoomTarget = _this.getPointOnMedia(zoomPoint);

      var newZoom = Math.min(_this.props.maxZoom, Math.max(zoom, _this.props.minZoom));
      var requestedPosition = {
        x: zoomTarget.x * newZoom - zoomPoint.x,
        y: zoomTarget.y * newZoom - zoomPoint.y
      };
      var newPosition = _this.props.restrictPosition ? index_module_restrictPosition(requestedPosition, _this.mediaSize, _this.state.cropSize, newZoom, _this.props.rotation) : requestedPosition;

      _this.props.onCropChange(newPosition);

      _this.props.onZoomChange(newZoom);
    };

    _this.emitCropData = function () {
      if (!_this.state.cropSize) return; // this is to ensure the crop is correctly restricted after a zoom back (https://github.com/ricardo-ch/react-easy-crop/issues/6)

      var restrictedPosition = _this.props.restrictPosition ? index_module_restrictPosition(_this.props.crop, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : _this.props.crop;

      var _a = computeCroppedArea(restrictedPosition, _this.mediaSize, _this.state.cropSize, _this.getAspect(), _this.props.zoom, _this.props.rotation, _this.props.restrictPosition),
          croppedAreaPercentages = _a.croppedAreaPercentages,
          croppedAreaPixels = _a.croppedAreaPixels;

      _this.props.onCropComplete && _this.props.onCropComplete(croppedAreaPercentages, croppedAreaPixels);
    };

    _this.recomputeCropPosition = function () {
      if (!_this.state.cropSize) return;
      var newPosition = _this.props.restrictPosition ? index_module_restrictPosition(_this.props.crop, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : _this.props.crop;

      _this.props.onCropChange(newPosition);

      _this.emitCropData();
    };

    return _this;
  }

  Cropper.prototype.componentDidMount = function () {
    window.addEventListener('resize', this.computeSizes);

    if (this.containerRef) {
      this.props.zoomWithScroll && this.containerRef.addEventListener('wheel', this.onWheel, {
        passive: false
      });
      this.containerRef.addEventListener('gesturestart', this.preventZoomSafari);
      this.containerRef.addEventListener('gesturechange', this.preventZoomSafari);
    }

    if (!this.props.disableAutomaticStylesInjection) {
      this.styleRef = document.createElement('style');
      this.styleRef.setAttribute('type', 'text/css');
      this.styleRef.innerHTML = css;
      document.head.appendChild(this.styleRef);
    } // when rendered via SSR, the image can already be loaded and its onLoad callback will never be called


    if (this.imageRef && this.imageRef.complete) {
      this.onMediaLoad();
    }
  };

  Cropper.prototype.componentWillUnmount = function () {
    window.removeEventListener('resize', this.computeSizes);

    if (this.containerRef) {
      this.containerRef.removeEventListener('gesturestart', this.preventZoomSafari);
      this.containerRef.removeEventListener('gesturechange', this.preventZoomSafari);
    }

    if (this.styleRef) {
      this.styleRef.remove();
    }

    this.cleanEvents();
    this.props.zoomWithScroll && this.clearScrollEvent();
  };

  Cropper.prototype.componentDidUpdate = function (prevProps) {
    var _a, _b, _c, _d;

    if (prevProps.rotation !== this.props.rotation) {
      this.computeSizes();
      this.recomputeCropPosition();
    } else if (prevProps.aspect !== this.props.aspect) {
      this.computeSizes();
    } else if (prevProps.zoom !== this.props.zoom) {
      this.recomputeCropPosition();
    } else if (((_a = prevProps.cropSize) === null || _a === void 0 ? void 0 : _a.height) !== ((_b = this.props.cropSize) === null || _b === void 0 ? void 0 : _b.height) || ((_c = prevProps.cropSize) === null || _c === void 0 ? void 0 : _c.width) !== ((_d = this.props.cropSize) === null || _d === void 0 ? void 0 : _d.width)) {
      this.computeSizes();
    }

    if (prevProps.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef) {
      this.props.zoomWithScroll ? this.containerRef.addEventListener('wheel', this.onWheel, {
        passive: false
      }) : this.clearScrollEvent();
    }
  };

  Cropper.prototype.getAspect = function () {
    var _a = this.props,
        cropSize = _a.cropSize,
        aspect = _a.aspect;

    if (cropSize) {
      return cropSize.width / cropSize.height;
    }

    return aspect;
  };

  Cropper.prototype.onPinchStart = function (e) {
    var pointA = Cropper.getTouchPoint(e.touches[0]);
    var pointB = Cropper.getTouchPoint(e.touches[1]);
    this.lastPinchDistance = getDistanceBetweenPoints(pointA, pointB);
    this.lastPinchRotation = getRotationBetweenPoints(pointA, pointB);
    this.onDragStart(getCenter(pointA, pointB));
  };

  Cropper.prototype.onPinchMove = function (e) {
    var _this = this;

    var pointA = Cropper.getTouchPoint(e.touches[0]);
    var pointB = Cropper.getTouchPoint(e.touches[1]);
    var center = getCenter(pointA, pointB);
    this.onDrag(center);
    if (this.rafPinchTimeout) window.cancelAnimationFrame(this.rafPinchTimeout);
    this.rafPinchTimeout = window.requestAnimationFrame(function () {
      var distance = getDistanceBetweenPoints(pointA, pointB);
      var newZoom = _this.props.zoom * (distance / _this.lastPinchDistance);

      _this.setNewZoom(newZoom, center);

      _this.lastPinchDistance = distance;
      var rotation = getRotationBetweenPoints(pointA, pointB);
      var newRotation = _this.props.rotation + (rotation - _this.lastPinchRotation);
      _this.props.onRotationChange && _this.props.onRotationChange(newRotation);
      _this.lastPinchRotation = rotation;
    });
  };

  Cropper.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        image = _a.image,
        video = _a.video,
        mediaProps = _a.mediaProps,
        transform = _a.transform,
        _b = _a.crop,
        x = _b.x,
        y = _b.y,
        rotation = _a.rotation,
        zoom = _a.zoom,
        cropShape = _a.cropShape,
        showGrid = _a.showGrid,
        _c = _a.style,
        containerStyle = _c.containerStyle,
        cropAreaStyle = _c.cropAreaStyle,
        mediaStyle = _c.mediaStyle,
        _d = _a.classes,
        containerClassName = _d.containerClassName,
        cropAreaClassName = _d.cropAreaClassName,
        mediaClassName = _d.mediaClassName;
    return external_this_React_default.a.createElement("div", {
      onMouseDown: this.onMouseDown,
      onTouchStart: this.onTouchStart,
      ref: function ref(el) {
        return _this.containerRef = el;
      },
      "data-testid": "container",
      style: containerStyle,
      className: index_module_classNames('reactEasyCrop_Container', containerClassName)
    }, image ? external_this_React_default.a.createElement("img", __assign({
      alt: "",
      className: index_module_classNames('reactEasyCrop_Image', mediaClassName)
    }, mediaProps, {
      src: image,
      ref: function ref(el) {
        return _this.imageRef = el;
      },
      style: __assign(__assign({}, mediaStyle), {
        transform: transform || "translate(" + x + "px, " + y + "px) rotate(" + rotation + "deg) scale(" + zoom + ")"
      }),
      onLoad: this.onMediaLoad
    })) : video && external_this_React_default.a.createElement("video", __assign({
      autoPlay: true,
      loop: true,
      muted: true,
      className: index_module_classNames('reactEasyCrop_Video', mediaClassName)
    }, mediaProps, {
      src: video,
      ref: function ref(el) {
        return _this.videoRef = el;
      },
      onLoadedMetadata: this.onMediaLoad,
      style: __assign(__assign({}, mediaStyle), {
        transform: transform || "translate(" + x + "px, " + y + "px) rotate(" + rotation + "deg) scale(" + zoom + ")"
      }),
      controls: false
    })), this.state.cropSize && external_this_React_default.a.createElement("div", {
      style: __assign(__assign({}, cropAreaStyle), {
        width: this.state.cropSize.width,
        height: this.state.cropSize.height
      }),
      "data-testid": "cropper",
      className: index_module_classNames('reactEasyCrop_CropArea', cropShape === 'round' && 'reactEasyCrop_CropAreaRound', showGrid && 'reactEasyCrop_CropAreaGrid', cropAreaClassName)
    }));
  };

  Cropper.defaultProps = {
    zoom: 1,
    rotation: 0,
    aspect: 4 / 3,
    maxZoom: MAX_ZOOM,
    minZoom: MIN_ZOOM,
    cropShape: 'rect',
    showGrid: true,
    style: {},
    classes: {},
    mediaProps: {},
    zoomSpeed: 1,
    restrictPosition: true,
    zoomWithScroll: true
  };

  Cropper.getMousePoint = function (e) {
    return {
      x: Number(e.clientX),
      y: Number(e.clientY)
    };
  };

  Cropper.getTouchPoint = function (touch) {
    return {
      x: Number(touch.clientX),
      y: Number(touch.clientY)
    };
  };

  return Cropper;
}(external_this_React_default.a.Component);

/* harmony default export */ var index_module = (index_module_Cropper);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/check.js
var check = __webpack_require__(155);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/aspect-ratio.js


/**
 * WordPress dependencies
 */

var aspect_ratio_aspectRatio = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M18.5 5.5h-13c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5h-13c-.3 0-.5-.2-.5-.5v-9c0-.3.2-.5.5-.5h13c.3 0 .5.2.5.5v9zM6.5 12H8v-2h2V8.5H6.5V12zm9.5 2h-2v1.5h3.5V12H16v2z"
}));
/* harmony default export */ var aspect_ratio = (aspect_ratio_aspectRatio);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/search.js
var search = __webpack_require__(291);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/rotate-right.js


/**
 * WordPress dependencies
 */

var rotateRight = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M15.1 4.8l-3-2.5V4c-4.4 0-8 3.6-8 8 0 3.7 2.5 6.9 6 7.7.3.1.6.1 1 .2l.2-1.5c-.4 0-.7-.1-1.1-.2l-.1.2v-.2c-2.6-.8-4.5-3.3-4.5-6.2 0-3.6 2.9-6.5 6.5-6.5v1.8l3-2.5zM20 11c-.2-1.4-.7-2.7-1.6-3.8l-1.2.8c.7.9 1.1 2 1.3 3.1L20 11zm-1.5 1.8c-.1.5-.2 1.1-.4 1.6s-.5 1-.8 1.5l1.2.9c.4-.5.8-1.1 1-1.8s.5-1.3.5-2l-1.5-.2zm-5.6 5.6l.2 1.5c1.4-.2 2.7-.7 3.8-1.6l-.9-1.1c-.9.7-2 1.1-3.1 1.2z"
}));
/* harmony default export */ var rotate_right = (rotateRight);

// EXTERNAL MODULE: external {"this":["wp","apiFetch"]}
var external_this_wp_apiFetch_ = __webpack_require__(45);
var external_this_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_apiFetch_);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/image/image-editor.js



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */








var image_editor_MIN_ZOOM = 100;
var image_editor_MAX_ZOOM = 300;
var POPOVER_PROPS = {
  position: 'bottom right',
  isAlternate: true
};

function AspectGroup(_ref) {
  var aspectRatios = _ref.aspectRatios,
      isDisabled = _ref.isDisabled,
      label = _ref.label,
      _onClick = _ref.onClick,
      value = _ref.value;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuGroup"], {
    label: label
  }, aspectRatios.map(function (_ref2) {
    var title = _ref2.title,
        aspect = _ref2.aspect;
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuItem"], {
      key: aspect,
      isDisabled: isDisabled,
      onClick: function onClick() {
        _onClick(aspect);
      },
      role: "menuitemradio",
      isSelected: aspect === value,
      icon: aspect === value ? check["a" /* default */] : undefined
    }, title);
  }));
}

function AspectMenu(_ref3) {
  var isDisabled = _ref3.isDisabled,
      _onClick2 = _ref3.onClick,
      value = _ref3.value,
      defaultValue = _ref3.defaultValue;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["DropdownMenu"], {
    icon: aspect_ratio,
    label: Object(external_this_wp_i18n_["__"])('Aspect Ratio'),
    popoverProps: POPOVER_PROPS,
    className: "wp-block-image__aspect-ratio"
  }, function (_ref4) {
    var onClose = _ref4.onClose;
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(AspectGroup, {
      isDisabled: isDisabled,
      onClick: function onClick(aspect) {
        _onClick2(aspect);

        onClose();
      },
      value: value,
      aspectRatios: [{
        title: Object(external_this_wp_i18n_["__"])('Original'),
        aspect: defaultValue
      }, {
        title: Object(external_this_wp_i18n_["__"])('Square'),
        aspect: 1
      }]
    }), Object(external_this_wp_element_["createElement"])(AspectGroup, {
      label: Object(external_this_wp_i18n_["__"])('Landscape'),
      isDisabled: isDisabled,
      onClick: function onClick(aspect) {
        _onClick2(aspect);

        onClose();
      },
      value: value,
      aspectRatios: [{
        title: Object(external_this_wp_i18n_["__"])('16:10'),
        aspect: 16 / 10
      }, {
        title: Object(external_this_wp_i18n_["__"])('16:9'),
        aspect: 16 / 9
      }, {
        title: Object(external_this_wp_i18n_["__"])('4:3'),
        aspect: 4 / 3
      }, {
        title: Object(external_this_wp_i18n_["__"])('3:2'),
        aspect: 3 / 2
      }]
    }), Object(external_this_wp_element_["createElement"])(AspectGroup, {
      label: Object(external_this_wp_i18n_["__"])('Portrait'),
      isDisabled: isDisabled,
      onClick: function onClick(aspect) {
        _onClick2(aspect);

        onClose();
      },
      value: value,
      aspectRatios: [{
        title: Object(external_this_wp_i18n_["__"])('10:16'),
        aspect: 10 / 16
      }, {
        title: Object(external_this_wp_i18n_["__"])('9:16'),
        aspect: 9 / 16
      }, {
        title: Object(external_this_wp_i18n_["__"])('3:4'),
        aspect: 3 / 4
      }, {
        title: Object(external_this_wp_i18n_["__"])('2:3'),
        aspect: 2 / 3
      }]
    }));
  });
}

function ImageEditor(_ref5) {
  var id = _ref5.id,
      url = _ref5.url,
      setAttributes = _ref5.setAttributes,
      naturalWidth = _ref5.naturalWidth,
      naturalHeight = _ref5.naturalHeight,
      width = _ref5.width,
      height = _ref5.height,
      clientWidth = _ref5.clientWidth,
      setIsEditingImage = _ref5.setIsEditingImage;

  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core/notices'),
      createErrorNotice = _useDispatch.createErrorNotice;

  var _useState = Object(external_this_wp_element_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      inProgress = _useState2[0],
      setIsProgress = _useState2[1];

  var _useState3 = Object(external_this_wp_element_["useState"])(null),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      crop = _useState4[0],
      setCrop = _useState4[1];

  var _useState5 = Object(external_this_wp_element_["useState"])({
    x: 0,
    y: 0
  }),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      position = _useState6[0],
      setPosition = _useState6[1];

  var _useState7 = Object(external_this_wp_element_["useState"])(100),
      _useState8 = Object(slicedToArray["a" /* default */])(_useState7, 2),
      zoom = _useState8[0],
      setZoom = _useState8[1];

  var _useState9 = Object(external_this_wp_element_["useState"])(naturalWidth / naturalHeight),
      _useState10 = Object(slicedToArray["a" /* default */])(_useState9, 2),
      aspect = _useState10[0],
      setAspect = _useState10[1];

  var _useState11 = Object(external_this_wp_element_["useState"])(0),
      _useState12 = Object(slicedToArray["a" /* default */])(_useState11, 2),
      rotation = _useState12[0],
      setRotation = _useState12[1];

  var _useState13 = Object(external_this_wp_element_["useState"])(),
      _useState14 = Object(slicedToArray["a" /* default */])(_useState13, 2),
      editedUrl = _useState14[0],
      setEditedUrl = _useState14[1];

  var editedWidth = width;
  var editedHeight = height || clientWidth * naturalHeight / naturalWidth;
  var naturalAspectRatio = naturalWidth / naturalHeight;

  if (rotation % 180 === 90) {
    editedHeight = clientWidth * naturalWidth / naturalHeight;
    naturalAspectRatio = naturalHeight / naturalWidth;
  }

  function apply() {
    setIsProgress(true);
    var attrs = {}; // The crop script may return some very small, sub-pixel values when the image was not cropped.
    // Crop only when the new size has changed by more than 0.1%.

    if (crop.width < 99.9 || crop.height < 99.9) {
      attrs = crop;
    }

    if (rotation > 0) {
      attrs.rotation = rotation;
    }

    attrs.src = url;
    external_this_wp_apiFetch_default()({
      path: "/wp/v2/media/".concat(id, "/edit"),
      method: 'POST',
      data: attrs
    }).then(function (response) {
      setAttributes({
        id: response.id,
        url: response.source_url,
        height: height && width ? width / aspect : undefined
      });
    }).catch(function (error) {
      createErrorNotice(Object(external_this_wp_i18n_["sprintf"])(
      /* translators: 1. Error message */
      Object(external_this_wp_i18n_["__"])('Could not edit image. %s'), error.message), {
        id: 'image-editing-error',
        type: 'snackbar'
      });
    }).finally(function () {
      setIsProgress(false);
      setIsEditingImage(false);
    });
  }

  function rotate() {
    var angle = (rotation + 90) % 360;

    if (angle === 0) {
      setEditedUrl();
      setRotation(angle);
      setAspect(1 / aspect);
      setPosition({
        x: -(position.y * naturalAspectRatio),
        y: position.x * naturalAspectRatio
      });
      return;
    }

    function editImage(event) {
      var canvas = document.createElement('canvas');
      var translateX = 0;
      var translateY = 0;

      if (angle % 180) {
        canvas.width = event.target.height;
        canvas.height = event.target.width;
      } else {
        canvas.width = event.target.width;
        canvas.height = event.target.height;
      }

      if (angle === 90 || angle === 180) {
        translateX = canvas.width;
      }

      if (angle === 270 || angle === 180) {
        translateY = canvas.height;
      }

      var context = canvas.getContext('2d');
      context.translate(translateX, translateY);
      context.rotate(angle * Math.PI / 180);
      context.drawImage(event.target, 0, 0);
      canvas.toBlob(function (blob) {
        setEditedUrl(URL.createObjectURL(blob));
        setRotation(angle);
        setAspect(1 / aspect);
        setPosition({
          x: -(position.y * naturalAspectRatio),
          y: position.x * naturalAspectRatio
        });
      });
    }

    var el = new window.Image();
    el.src = url;
    el.onload = editImage;
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("div", {
    className: classnames_default()('wp-block-image__crop-area', {
      'is-applying': inProgress
    }),
    style: {
      width: editedWidth,
      height: editedHeight
    }
  }, Object(external_this_wp_element_["createElement"])(index_module, {
    image: editedUrl || url,
    disabled: inProgress,
    minZoom: image_editor_MIN_ZOOM / 100,
    maxZoom: image_editor_MAX_ZOOM / 100,
    crop: position,
    zoom: zoom / 100,
    aspect: aspect,
    onCropChange: setPosition,
    onCropComplete: function onCropComplete(newCropPercent) {
      setCrop(newCropPercent);
    },
    onZoomChange: function onZoomChange(newZoom) {
      setZoom(newZoom * 100);
    }
  }), inProgress && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null)), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Dropdown"], {
    contentClassName: "wp-block-image__zoom",
    popoverProps: POPOVER_PROPS,
    renderToggle: function renderToggle(_ref6) {
      var isOpen = _ref6.isOpen,
          onToggle = _ref6.onToggle;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
        icon: search["a" /* default */],
        label: Object(external_this_wp_i18n_["__"])('Zoom'),
        onClick: onToggle,
        "aria-expanded": isOpen,
        disabled: inProgress
      });
    },
    renderContent: function renderContent() {
      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
        min: image_editor_MIN_ZOOM,
        max: image_editor_MAX_ZOOM,
        value: Math.round(zoom),
        onChange: setZoom
      });
    }
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["__experimentalToolbarItem"], null, function (toggleProps) {
    return Object(external_this_wp_element_["createElement"])(AspectMenu, {
      toggleProps: toggleProps,
      isDisabled: inProgress,
      onClick: setAspect,
      value: aspect,
      defaultValue: naturalWidth / naturalHeight
    });
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
    icon: rotate_right,
    label: Object(external_this_wp_i18n_["__"])('Rotate'),
    onClick: rotate,
    disabled: inProgress
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
    onClick: apply,
    disabled: inProgress
  }, Object(external_this_wp_i18n_["__"])('Apply')), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
    onClick: function onClick() {
      return setIsEditingImage(false);
    }
  }, Object(external_this_wp_i18n_["__"])('Cancel')))));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/image/constants.js
var MIN_SIZE = 20;
var LINK_DESTINATION_NONE = 'none';
var LINK_DESTINATION_MEDIA = 'media';
var LINK_DESTINATION_ATTACHMENT = 'attachment';
var LINK_DESTINATION_CUSTOM = 'custom';
var NEW_TAB_REL = ['noreferrer', 'noopener'];
var ALLOWED_MEDIA_TYPES = ['image'];
var DEFAULT_SIZE_SLUG = 'large';

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/image/image.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */











/**
 * Internal dependencies
 */





/**
 * Module constants
 */



function getFilename(url) {
  var path = Object(external_this_wp_url_["getPath"])(url);

  if (path) {
    return Object(external_this_lodash_["last"])(path.split('/'));
  }
}

function Image(_ref) {
  var _ref$attributes = _ref.attributes,
      _ref$attributes$url = _ref$attributes.url,
      url = _ref$attributes$url === void 0 ? '' : _ref$attributes$url,
      alt = _ref$attributes.alt,
      caption = _ref$attributes.caption,
      align = _ref$attributes.align,
      id = _ref$attributes.id,
      href = _ref$attributes.href,
      rel = _ref$attributes.rel,
      linkClass = _ref$attributes.linkClass,
      linkDestination = _ref$attributes.linkDestination,
      title = _ref$attributes.title,
      width = _ref$attributes.width,
      height = _ref$attributes.height,
      linkTarget = _ref$attributes.linkTarget,
      sizeSlug = _ref$attributes.sizeSlug,
      setAttributes = _ref.setAttributes,
      isSelected = _ref.isSelected,
      insertBlocksAfter = _ref.insertBlocksAfter,
      onReplace = _ref.onReplace,
      onSelectImage = _ref.onSelectImage,
      onSelectURL = _ref.onSelectURL,
      onUploadError = _ref.onUploadError,
      containerRef = _ref.containerRef;
  var image = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select('core'),
        getMedia = _select.getMedia;

    return id && isSelected ? getMedia(id) : null;
  }, [id, isSelected]);

  var _useSelect = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select2 = select('core/block-editor'),
        getSettings = _select2.getSettings;

    return Object(external_this_lodash_["pick"])(getSettings(), ['imageEditing', 'imageSizes', 'isRTL', 'maxWidth', 'mediaUpload']);
  }),
      imageEditing = _useSelect.imageEditing,
      imageSizes = _useSelect.imageSizes,
      isRTL = _useSelect.isRTL,
      maxWidth = _useSelect.maxWidth,
      mediaUpload = _useSelect.mediaUpload;

  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core/block-editor'),
      toggleSelection = _useDispatch.toggleSelection;

  var _useDispatch2 = Object(external_this_wp_data_["useDispatch"])('core/notices'),
      createErrorNotice = _useDispatch2.createErrorNotice,
      createSuccessNotice = _useDispatch2.createSuccessNotice;

  var isLargeViewport = Object(external_this_wp_compose_["useViewportMatch"])('medium');

  var _useState = Object(external_this_wp_element_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      captionFocused = _useState2[0],
      setCaptionFocused = _useState2[1];

  var isWideAligned = Object(external_this_lodash_["includes"])(['wide', 'full'], align);

  var _useState3 = Object(external_this_wp_element_["useState"])({}),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      _useState4$ = _useState4[0],
      naturalWidth = _useState4$.naturalWidth,
      naturalHeight = _useState4$.naturalHeight,
      setNaturalSize = _useState4[1];

  var _useState5 = Object(external_this_wp_element_["useState"])(false),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      isEditingImage = _useState6[0],
      setIsEditingImage = _useState6[1];

  var _useState7 = Object(external_this_wp_element_["useState"])(),
      _useState8 = Object(slicedToArray["a" /* default */])(_useState7, 2),
      externalBlob = _useState8[0],
      setExternalBlob = _useState8[1];

  var clientWidth = useClientWidth(containerRef, [align]);
  var isResizable = !isWideAligned && isLargeViewport;
  var imageSizeOptions = Object(external_this_lodash_["map"])(Object(external_this_lodash_["filter"])(imageSizes, function (_ref2) {
    var slug = _ref2.slug;
    return Object(external_this_lodash_["get"])(image, ['media_details', 'sizes', slug, 'source_url']);
  }), function (_ref3) {
    var name = _ref3.name,
        slug = _ref3.slug;
    return {
      value: slug,
      label: name
    };
  });
  Object(external_this_wp_element_["useEffect"])(function () {
    if (!isSelected) {
      setCaptionFocused(false);
    }
  }, [isSelected]); // If an image is externally hosted, try to fetch the image data. This may
  // fail if the image host doesn't allow CORS with the domain. If it works,
  // we can enable a button in the toolbar to upload the image.

  Object(external_this_wp_element_["useEffect"])(function () {
    if (!edit_isExternalImage(id, url) || !isSelected || externalBlob) {
      return;
    }

    window.fetch(url).then(function (response) {
      return response.blob();
    }).then(function (blob) {
      return setExternalBlob(blob);
    });
  }, [id, url, isSelected, externalBlob]);

  function onResizeStart() {
    toggleSelection(false);
  }

  function _onResizeStop() {
    toggleSelection(true);
  }

  function onImageError() {
    // Check if there's an embed block that handles this URL.
    var embedBlock = util_createUpgradedEmbedBlock({
      attributes: {
        url: url
      }
    });

    if (undefined !== embedBlock) {
      onReplace(embedBlock);
    }
  }

  function onSetHref(props) {
    setAttributes(props);
  }

  function onSetTitle(value) {
    // This is the HTML title attribute, separate from the media object
    // title.
    setAttributes({
      title: value
    });
  }

  function onFocusCaption() {
    if (!captionFocused) {
      setCaptionFocused(true);
    }
  }

  function onImageClick() {
    if (captionFocused) {
      setCaptionFocused(false);
    }
  }

  function updateAlt(newAlt) {
    setAttributes({
      alt: newAlt
    });
  }

  function updateImage(newSizeSlug) {
    var newUrl = Object(external_this_lodash_["get"])(image, ['media_details', 'sizes', newSizeSlug, 'source_url']);

    if (!newUrl) {
      return null;
    }

    setAttributes({
      url: newUrl,
      width: undefined,
      height: undefined,
      sizeSlug: newSizeSlug
    });
  }

  function uploadExternal() {
    mediaUpload({
      filesList: [externalBlob],
      onFileChange: function onFileChange(_ref4) {
        var _ref5 = Object(slicedToArray["a" /* default */])(_ref4, 1),
            img = _ref5[0];

        onSelectImage(img);

        if (Object(external_this_wp_blob_["isBlobURL"])(img.url)) {
          return;
        }

        setExternalBlob();
        createSuccessNotice(Object(external_this_wp_i18n_["__"])('Image uploaded.'), {
          type: 'snackbar'
        });
      },
      allowedTypes: ALLOWED_MEDIA_TYPES,
      onError: function onError(message) {
        createErrorNotice(message, {
          type: 'snackbar'
        });
      }
    });
  }

  Object(external_this_wp_element_["useEffect"])(function () {
    if (!isSelected) {
      setIsEditingImage(false);
    }
  }, [isSelected]);
  var canEditImage = id && naturalWidth && naturalHeight && imageEditing;
  var controls = Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, !isEditingImage && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalImageURLInputUI"], {
    url: href || '',
    onChangeUrl: onSetHref,
    linkDestination: linkDestination,
    mediaUrl: image && image.source_url,
    mediaLink: image && image.link,
    linkTarget: linkTarget,
    linkClass: linkClass,
    rel: rel
  })), canEditImage && !isEditingImage && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
    onClick: function onClick() {
      return setIsEditingImage(true);
    },
    icon: library_crop,
    label: Object(external_this_wp_i18n_["__"])('Crop')
  })), externalBlob && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
    onClick: uploadExternal,
    icon: upload["a" /* default */],
    label: Object(external_this_wp_i18n_["__"])('Upload external image')
  })), !isEditingImage && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaReplaceFlow"], {
    mediaId: id,
    mediaURL: url,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    accept: "image/*",
    onSelect: onSelectImage,
    onSelectURL: onSelectURL,
    onError: onUploadError
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Image settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextareaControl"], {
    label: Object(external_this_wp_i18n_["__"])('Alt text (alternative text)'),
    value: alt,
    onChange: updateAlt,
    help: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ExternalLink"], {
      href: "https://www.w3.org/WAI/tutorials/images/decision-tree"
    }, Object(external_this_wp_i18n_["__"])('Describe the purpose of the image')), Object(external_this_wp_i18n_["__"])('Leave empty if the image is purely decorative.'))
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalImageSizeControl"], {
    onChangeImage: updateImage,
    onChange: function onChange(value) {
      return setAttributes(value);
    },
    slug: sizeSlug,
    width: width,
    height: height,
    imageSizeOptions: imageSizeOptions,
    isResizable: isResizable,
    imageWidth: naturalWidth,
    imageHeight: naturalHeight
  }))), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorAdvancedControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextControl"], {
    label: Object(external_this_wp_i18n_["__"])('Title attribute'),
    value: title || '',
    onChange: onSetTitle,
    help: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_i18n_["__"])('Describe the role of this image on the page.'), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ExternalLink"], {
      href: "https://www.w3.org/TR/html52/dom.html#the-title-attribute"
    }, Object(external_this_wp_i18n_["__"])('(Note: many devices and browsers do not display this text.)')))
  })));
  var filename = getFilename(url);
  var defaultedAlt;

  if (alt) {
    defaultedAlt = alt;
  } else if (filename) {
    defaultedAlt = Object(external_this_wp_i18n_["sprintf"])(
    /* translators: %s: file name */
    Object(external_this_wp_i18n_["__"])('This image has an empty alt attribute; its file name is %s'), filename);
  } else {
    defaultedAlt = Object(external_this_wp_i18n_["__"])('This image has an empty alt attribute');
  }

  var img = // Disable reason: Image itself is not meant to be interactive, but
  // should direct focus to block.

  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
  Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("img", {
    src: url,
    alt: defaultedAlt,
    onClick: onImageClick,
    onError: function onError() {
      return onImageError();
    },
    onLoad: function onLoad(event) {
      setNaturalSize(Object(external_this_lodash_["pick"])(event.target, ['naturalWidth', 'naturalHeight']));
    }
  }), Object(external_this_wp_blob_["isBlobURL"])(url) && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null))
  /* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
  ;
  var imageWidthWithinContainer;
  var imageHeightWithinContainer;

  if (clientWidth && naturalWidth && naturalHeight) {
    var exceedMaxWidth = naturalWidth > clientWidth;
    var ratio = naturalHeight / naturalWidth;
    imageWidthWithinContainer = exceedMaxWidth ? clientWidth : naturalWidth;
    imageHeightWithinContainer = exceedMaxWidth ? clientWidth * ratio : naturalHeight;
  }

  if (canEditImage && isEditingImage) {
    img = Object(external_this_wp_element_["createElement"])(ImageEditor, {
      id: id,
      url: url,
      setAttributes: setAttributes,
      naturalWidth: naturalWidth,
      naturalHeight: naturalHeight,
      width: width,
      height: height,
      clientWidth: clientWidth,
      setIsEditingImage: setIsEditingImage
    });
  } else if (!isResizable || !imageWidthWithinContainer) {
    img = Object(external_this_wp_element_["createElement"])("div", {
      style: {
        width: width,
        height: height
      }
    }, img);
  } else {
    var currentWidth = width || imageWidthWithinContainer;
    var currentHeight = height || imageHeightWithinContainer;

    var _ratio = naturalWidth / naturalHeight;

    var minWidth = naturalWidth < naturalHeight ? MIN_SIZE : MIN_SIZE * _ratio;
    var minHeight = naturalHeight < naturalWidth ? MIN_SIZE : MIN_SIZE / _ratio; // With the current implementation of ResizableBox, an image needs an
    // explicit pixel value for the max-width. In absence of being able to
    // set the content-width, this max-width is currently dictated by the
    // vanilla editor style. The following variable adds a buffer to this
    // vanilla style, so 3rd party themes have some wiggleroom. This does,
    // in most cases, allow you to scale the image beyond the width of the
    // main column, though not infinitely.
    // @todo It would be good to revisit this once a content-width variable
    // becomes available.

    var maxWidthBuffer = maxWidth * 2.5;
    var showRightHandle = false;
    var showLeftHandle = false;
    /* eslint-disable no-lonely-if */
    // See https://github.com/WordPress/gutenberg/issues/7584.

    if (align === 'center') {
      // When the image is centered, show both handles.
      showRightHandle = true;
      showLeftHandle = true;
    } else if (isRTL) {
      // In RTL mode the image is on the right by default.
      // Show the right handle and hide the left handle only when it is
      // aligned left. Otherwise always show the left handle.
      if (align === 'left') {
        showRightHandle = true;
      } else {
        showLeftHandle = true;
      }
    } else {
      // Show the left handle and hide the right handle only when the
      // image is aligned right. Otherwise always show the right handle.
      if (align === 'right') {
        showLeftHandle = true;
      } else {
        showRightHandle = true;
      }
    }
    /* eslint-enable no-lonely-if */


    img = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ResizableBox"], {
      size: {
        width: width,
        height: height
      },
      showHandle: isSelected,
      minWidth: minWidth,
      maxWidth: maxWidthBuffer,
      minHeight: minHeight,
      maxHeight: maxWidthBuffer / _ratio,
      lockAspectRatio: true,
      enable: {
        top: false,
        right: showRightHandle,
        bottom: true,
        left: showLeftHandle
      },
      onResizeStart: onResizeStart,
      onResizeStop: function onResizeStop(event, direction, elt, delta) {
        _onResizeStop();

        setAttributes({
          width: parseInt(currentWidth + delta.width, 10),
          height: parseInt(currentHeight + delta.height, 10)
        });
      }
    }, img);
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, controls, img, (!external_this_wp_blockEditor_["RichText"].isEmpty(caption) || isSelected) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    tagName: "figcaption",
    placeholder: Object(external_this_wp_i18n_["__"])('Write caption…'),
    value: caption,
    unstableOnFocus: onFocusCaption,
    onChange: function onChange(value) {
      return setAttributes({
        caption: value
      });
    },
    isSelected: captionFocused,
    inlineToolbar: true,
    __unstableOnSplitAtEnd: function __unstableOnSplitAtEnd() {
      return insertBlocksAfter(Object(external_this_wp_blocks_["createBlock"])('core/paragraph'));
    }
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/image/edit.js




function image_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function image_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { image_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { image_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


/**
 * Module constants
 */


var edit_pickRelevantMediaFiles = function pickRelevantMediaFiles(image) {
  var imageProps = Object(external_this_lodash_["pick"])(image, ['alt', 'id', 'link', 'caption']);
  imageProps.url = Object(external_this_lodash_["get"])(image, ['sizes', 'large', 'url']) || Object(external_this_lodash_["get"])(image, ['media_details', 'sizes', 'large', 'source_url']) || image.url;
  return imageProps;
};
/**
 * Is the URL a temporary blob URL? A blob URL is one that is used temporarily
 * while the image is being uploaded and will not have an id yet allocated.
 *
 * @param {number=} id The id of the image.
 * @param {string=} url The url of the image.
 *
 * @return {boolean} Is the URL a Blob URL
 */

var edit_isTemporaryImage = function isTemporaryImage(id, url) {
  return !id && Object(external_this_wp_blob_["isBlobURL"])(url);
};
/**
 * Is the url for the image hosted externally. An externally hosted image has no
 * id and is not a blob url.
 *
 * @param {number=} id  The id of the image.
 * @param {string=} url The url of the image.
 *
 * @return {boolean} Is the url an externally hosted url?
 */


var edit_isExternalImage = function isExternalImage(id, url) {
  return url && !id && !Object(external_this_wp_blob_["isBlobURL"])(url);
};
function ImageEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      isSelected = _ref.isSelected,
      className = _ref.className,
      noticeUI = _ref.noticeUI,
      insertBlocksAfter = _ref.insertBlocksAfter,
      noticeOperations = _ref.noticeOperations,
      onReplace = _ref.onReplace;
  var _attributes$url = attributes.url,
      url = _attributes$url === void 0 ? '' : _attributes$url,
      alt = attributes.alt,
      caption = attributes.caption,
      align = attributes.align,
      id = attributes.id,
      linkDestination = attributes.linkDestination,
      width = attributes.width,
      height = attributes.height,
      sizeSlug = attributes.sizeSlug;
  var ref = Object(external_this_wp_element_["useRef"])();
  var mediaUpload = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select('core/block-editor'),
        getSettings = _select.getSettings;

    return getSettings().mediaUpload;
  });

  function onUploadError(message) {
    noticeOperations.removeAllNotices();
    noticeOperations.createErrorNotice(message);
  }

  function onSelectImage(media) {
    if (!media || !media.url) {
      setAttributes({
        url: undefined,
        alt: undefined,
        id: undefined,
        title: undefined,
        caption: undefined
      });
      return;
    }

    var mediaAttributes = edit_pickRelevantMediaFiles(media); // If the current image is temporary but an alt text was meanwhile
    // written by the user, make sure the text is not overwritten.

    if (edit_isTemporaryImage(id, url)) {
      if (alt) {
        mediaAttributes = Object(external_this_lodash_["omit"])(mediaAttributes, ['alt']);
      }
    } // If a caption text was meanwhile written by the user,
    // make sure the text is not overwritten by empty captions.


    if (caption && !Object(external_this_lodash_["get"])(mediaAttributes, ['caption'])) {
      mediaAttributes = Object(external_this_lodash_["omit"])(mediaAttributes, ['caption']);
    }

    var additionalAttributes; // Reset the dimension attributes if changing to a different image.

    if (!media.id || media.id !== id) {
      additionalAttributes = {
        width: undefined,
        height: undefined,
        sizeSlug: DEFAULT_SIZE_SLUG
      };
    } else {
      // Keep the same url when selecting the same file, so "Image Size"
      // option is not changed.
      additionalAttributes = {
        url: url
      };
    } // Check if the image is linked to it's media.


    if (linkDestination === LINK_DESTINATION_MEDIA) {
      // Update the media link.
      mediaAttributes.href = media.url;
    } // Check if the image is linked to the attachment page.


    if (linkDestination === LINK_DESTINATION_ATTACHMENT) {
      // Update the media link.
      mediaAttributes.href = media.link;
    }

    setAttributes(image_edit_objectSpread({}, mediaAttributes, {}, additionalAttributes));
  }

  function onSelectURL(newURL) {
    if (newURL !== url) {
      setAttributes({
        url: newURL,
        id: undefined,
        sizeSlug: DEFAULT_SIZE_SLUG
      });
    }
  }

  function updateAlignment(nextAlign) {
    var extraUpdatedAttributes = ['wide', 'full'].includes(nextAlign) ? {
      width: undefined,
      height: undefined
    } : {};
    setAttributes(image_edit_objectSpread({}, extraUpdatedAttributes, {
      align: nextAlign
    }));
  }

  var isTemp = edit_isTemporaryImage(id, url); // Upload a temporary image on mount.

  Object(external_this_wp_element_["useEffect"])(function () {
    if (!isTemp) {
      return;
    }

    var file = Object(external_this_wp_blob_["getBlobByURL"])(url);

    if (file) {
      mediaUpload({
        filesList: [file],
        onFileChange: function onFileChange(_ref2) {
          var _ref3 = Object(slicedToArray["a" /* default */])(_ref2, 1),
              img = _ref3[0];

          onSelectImage(img);
        },
        allowedTypes: ALLOWED_MEDIA_TYPES,
        onError: function onError(message) {
          noticeOperations.createErrorNotice(message);
        }
      });
    }
  }, []); // If an image is temporary, revoke the Blob url when it is uploaded (and is
  // no longer temporary).

  Object(external_this_wp_element_["useEffect"])(function () {
    if (!isTemp) {
      return;
    }

    return function () {
      Object(external_this_wp_blob_["revokeBlobURL"])(url);
    };
  }, [isTemp]);
  var isExternal = edit_isExternalImage(id, url);
  var controls = Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockAlignmentToolbar"], {
    value: align,
    onChange: updateAlignment
  }));
  var src = isExternal ? url : undefined;
  var mediaPreview = !!url && Object(external_this_wp_element_["createElement"])("img", {
    alt: Object(external_this_wp_i18n_["__"])('Edit image'),
    title: Object(external_this_wp_i18n_["__"])('Edit image'),
    className: 'edit-image-preview',
    src: url
  });
  var mediaPlaceholder = Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaPlaceholder"], {
    icon: Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
      icon: library_image
    }),
    onSelect: onSelectImage,
    onSelectURL: onSelectURL,
    notices: noticeUI,
    onError: onUploadError,
    accept: "image/*",
    allowedTypes: ALLOWED_MEDIA_TYPES,
    value: {
      id: id,
      src: src
    },
    mediaPreview: mediaPreview,
    disableMediaButtons: url
  });
  var classes = classnames_default()(className, Object(defineProperty["a" /* default */])({
    'is-transient': Object(external_this_wp_blob_["isBlobURL"])(url),
    'is-resized': !!width || !!height,
    'is-focused': isSelected
  }, "size-".concat(sizeSlug), sizeSlug)); // Focussing the image caption after inserting an image relies on the
  // component remounting. This needs to be fixed.

  var key = !!url;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, controls, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].figure, {
    ref: ref,
    className: classes,
    key: key
  }, url && Object(external_this_wp_element_["createElement"])(Image, {
    attributes: attributes,
    setAttributes: setAttributes,
    isSelected: isSelected,
    insertBlocksAfter: insertBlocksAfter,
    onReplace: onReplace,
    onSelectImage: onSelectImage,
    onSelectURL: onSelectURL,
    onUploadError: onUploadError,
    containerRef: ref
  }), mediaPlaceholder));
}
/* harmony default export */ var image_edit = (Object(external_this_wp_components_["withNotices"])(ImageEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/image/save.js



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


function image_save_save(_ref) {
  var _classnames;

  var attributes = _ref.attributes;
  var url = attributes.url,
      alt = attributes.alt,
      caption = attributes.caption,
      align = attributes.align,
      href = attributes.href,
      rel = attributes.rel,
      linkClass = attributes.linkClass,
      width = attributes.width,
      height = attributes.height,
      id = attributes.id,
      linkTarget = attributes.linkTarget,
      sizeSlug = attributes.sizeSlug,
      title = attributes.title;
  var newRel = Object(external_this_lodash_["isEmpty"])(rel) ? undefined : rel;
  var classes = classnames_default()((_classnames = {}, Object(defineProperty["a" /* default */])(_classnames, "align".concat(align), align), Object(defineProperty["a" /* default */])(_classnames, "size-".concat(sizeSlug), sizeSlug), Object(defineProperty["a" /* default */])(_classnames, 'is-resized', width || height), _classnames));
  var image = Object(external_this_wp_element_["createElement"])("img", {
    src: url,
    alt: alt,
    className: id ? "wp-image-".concat(id) : null,
    width: width,
    height: height,
    title: title
  });
  var figure = Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, href ? Object(external_this_wp_element_["createElement"])("a", {
    className: linkClass,
    href: href,
    target: linkTarget,
    rel: newRel
  }, image) : image, !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: "figcaption",
    value: caption
  }));

  if ('left' === align || 'right' === align || 'center' === align) {
    return Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])("figure", {
      className: classes
    }, figure));
  }

  return Object(external_this_wp_element_["createElement"])("figure", {
    className: classes
  }, figure);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/image/transforms.js


function transforms_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function transforms_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { transforms_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { transforms_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


function stripFirstImage(attributes, _ref) {
  var shortcode = _ref.shortcode;

  var _document$implementat = document.implementation.createHTMLDocument(''),
      body = _document$implementat.body;

  body.innerHTML = shortcode.content;
  var nodeToRemove = body.querySelector('img'); // if an image has parents, find the topmost node to remove

  while (nodeToRemove && nodeToRemove.parentNode && nodeToRemove.parentNode !== body) {
    nodeToRemove = nodeToRemove.parentNode;
  }

  if (nodeToRemove) {
    nodeToRemove.parentNode.removeChild(nodeToRemove);
  }

  return body.innerHTML.trim();
}

function getFirstAnchorAttributeFormHTML(html, attributeName) {
  var _document$implementat2 = document.implementation.createHTMLDocument(''),
      body = _document$implementat2.body;

  body.innerHTML = html;
  var firstElementChild = body.firstElementChild;

  if (firstElementChild && firstElementChild.nodeName === 'A') {
    return firstElementChild.getAttribute(attributeName) || undefined;
  }
}

var imageSchema = {
  img: {
    attributes: ['src', 'alt', 'title'],
    classes: ['alignleft', 'aligncenter', 'alignright', 'alignnone', /^wp-image-\d+$/]
  }
};

var schema = function schema(_ref2) {
  var phrasingContentSchema = _ref2.phrasingContentSchema;
  return {
    figure: {
      require: ['img'],
      children: transforms_objectSpread({}, imageSchema, {
        a: {
          attributes: ['href', 'rel', 'target'],
          children: imageSchema
        },
        figcaption: {
          children: phrasingContentSchema
        }
      })
    }
  };
};

var image_transforms_transforms = {
  from: [{
    type: 'raw',
    isMatch: function isMatch(node) {
      return node.nodeName === 'FIGURE' && !!node.querySelector('img');
    },
    schema: schema,
    transform: function transform(node) {
      // Search both figure and image classes. Alignment could be
      // set on either. ID is set on the image.
      var className = node.className + ' ' + node.querySelector('img').className;
      var alignMatches = /(?:^|\s)align(left|center|right)(?:$|\s)/.exec(className);
      var anchor = node.id === '' ? undefined : node.id;
      var align = alignMatches ? alignMatches[1] : undefined;
      var idMatches = /(?:^|\s)wp-image-(\d+)(?:$|\s)/.exec(className);
      var id = idMatches ? Number(idMatches[1]) : undefined;
      var anchorElement = node.querySelector('a');
      var linkDestination = anchorElement && anchorElement.href ? 'custom' : undefined;
      var href = anchorElement && anchorElement.href ? anchorElement.href : undefined;
      var rel = anchorElement && anchorElement.rel ? anchorElement.rel : undefined;
      var linkClass = anchorElement && anchorElement.className ? anchorElement.className : undefined;
      var attributes = Object(external_this_wp_blocks_["getBlockAttributes"])('core/image', node.outerHTML, {
        align: align,
        id: id,
        linkDestination: linkDestination,
        href: href,
        rel: rel,
        linkClass: linkClass,
        anchor: anchor
      });
      return Object(external_this_wp_blocks_["createBlock"])('core/image', attributes);
    }
  }, {
    type: 'files',
    isMatch: function isMatch(files) {
      return files.length === 1 && files[0].type.indexOf('image/') === 0;
    },
    transform: function transform(files) {
      var file = files[0]; // We don't need to upload the media directly here
      // It's already done as part of the `componentDidMount`
      // int the image block

      return Object(external_this_wp_blocks_["createBlock"])('core/image', {
        url: Object(external_this_wp_blob_["createBlobURL"])(file)
      });
    }
  }, {
    type: 'shortcode',
    tag: 'caption',
    attributes: {
      url: {
        type: 'string',
        source: 'attribute',
        attribute: 'src',
        selector: 'img'
      },
      alt: {
        type: 'string',
        source: 'attribute',
        attribute: 'alt',
        selector: 'img'
      },
      caption: {
        shortcode: stripFirstImage
      },
      href: {
        shortcode: function shortcode(attributes, _ref3) {
          var _shortcode = _ref3.shortcode;
          return getFirstAnchorAttributeFormHTML(_shortcode.content, 'href');
        }
      },
      rel: {
        shortcode: function shortcode(attributes, _ref4) {
          var _shortcode2 = _ref4.shortcode;
          return getFirstAnchorAttributeFormHTML(_shortcode2.content, 'rel');
        }
      },
      linkClass: {
        shortcode: function shortcode(attributes, _ref5) {
          var _shortcode3 = _ref5.shortcode;
          return getFirstAnchorAttributeFormHTML(_shortcode3.content, 'class');
        }
      },
      id: {
        type: 'number',
        shortcode: function shortcode(_ref6) {
          var id = _ref6.named.id;

          if (!id) {
            return;
          }

          return parseInt(id.replace('attachment_', ''), 10);
        }
      },
      align: {
        type: 'string',
        shortcode: function shortcode(_ref7) {
          var _ref7$named$align = _ref7.named.align,
              align = _ref7$named$align === void 0 ? 'alignnone' : _ref7$named$align;
          return align.replace('align', '');
        }
      }
    }
  }]
};
/* harmony default export */ var image_transforms = (image_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/image/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var image_metadata = {
  name: "core/image",
  category: "media",
  attributes: {
    align: {
      type: "string"
    },
    url: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "src"
    },
    alt: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "alt",
      "default": ""
    },
    caption: {
      type: "string",
      source: "html",
      selector: "figcaption"
    },
    title: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "title"
    },
    href: {
      type: "string",
      source: "attribute",
      selector: "figure > a",
      attribute: "href"
    },
    rel: {
      type: "string",
      source: "attribute",
      selector: "figure > a",
      attribute: "rel"
    },
    linkClass: {
      type: "string",
      source: "attribute",
      selector: "figure > a",
      attribute: "class"
    },
    id: {
      type: "number"
    },
    width: {
      type: "number"
    },
    height: {
      type: "number"
    },
    sizeSlug: {
      type: "string"
    },
    linkDestination: {
      type: "string",
      "default": "none"
    },
    linkTarget: {
      type: "string",
      source: "attribute",
      selector: "figure > a",
      attribute: "target"
    }
  },
  supports: {
    anchor: true,
    lightBlockWrapper: true
  }
};


var image_name = image_metadata.name;

var image_settings = {
  title: Object(external_this_wp_i18n_["__"])('Image'),
  description: Object(external_this_wp_i18n_["__"])('Insert an image to make a visual statement.'),
  icon: library_image,
  keywords: ['img', // "img" is not translated as it is intended to reflect the HTML <img> tag.
  Object(external_this_wp_i18n_["__"])('photo')],
  example: {
    attributes: {
      sizeSlug: 'large',
      url: 'https://s.w.org/images/core/5.3/MtBlanc1.jpg',
      // translators: Caption accompanying an image of the Mont Blanc, which serves as an example for the Image block.
      caption: Object(external_this_wp_i18n_["__"])('Mont Blanc appears—still, snowy, and serene.')
    }
  },
  styles: [{
    name: 'default',
    label: Object(external_this_wp_i18n_["_x"])('Default', 'block style'),
    isDefault: true
  }, {
    name: 'rounded',
    label: Object(external_this_wp_i18n_["_x"])('Rounded', 'block style')
  }],
  __experimentalLabel: function __experimentalLabel(attributes, _ref) {
    var context = _ref.context;

    if (context === 'accessibility') {
      var caption = attributes.caption,
          alt = attributes.alt,
          url = attributes.url;

      if (!url) {
        return Object(external_this_wp_i18n_["__"])('Empty');
      }

      if (!alt) {
        return caption || '';
      } // This is intended to be read by a screen reader.
      // A period simply means a pause, no need to translate it.


      return alt + (caption ? '. ' + caption : '');
    }
  },
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    return {
      'data-align': attributes.align
    };
  },
  transforms: image_transforms,
  edit: image_edit,
  save: image_save_save,
  deprecated: image_deprecated
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/heading.js


/**
 * WordPress dependencies
 */

var heading = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M6.2 5.2v13.4l5.8-4.8 5.8 4.8V5.2z"
}));
/* harmony default export */ var library_heading = (heading);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/heading/deprecated.js



function deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { deprecated_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


var blockSupports = {
  className: false,
  anchor: true
};
var heading_deprecated_blockAttributes = {
  align: {
    type: 'string'
  },
  content: {
    type: 'string',
    source: 'html',
    selector: 'h1,h2,h3,h4,h5,h6',
    default: ''
  },
  level: {
    type: 'number',
    default: 2
  },
  placeholder: {
    type: 'string'
  }
};

var deprecated_migrateCustomColors = function migrateCustomColors(attributes) {
  if (!attributes.customTextColor) {
    return attributes;
  }

  var style = {
    color: {
      text: attributes.customTextColor
    }
  };
  return deprecated_objectSpread({}, Object(external_this_lodash_["omit"])(attributes, ['customTextColor']), {
    style: style
  });
};

var heading_deprecated_deprecated = [{
  supports: blockSupports,
  attributes: deprecated_objectSpread({}, heading_deprecated_blockAttributes, {
    customTextColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    }
  }),
  migrate: deprecated_migrateCustomColors,
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var align = attributes.align,
        content = attributes.content,
        customTextColor = attributes.customTextColor,
        level = attributes.level,
        textColor = attributes.textColor;
    var tagName = 'h' + level;
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var className = classnames_default()((_classnames = {}, Object(defineProperty["a" /* default */])(_classnames, textClass, textClass), Object(defineProperty["a" /* default */])(_classnames, 'has-text-color', textColor || customTextColor), Object(defineProperty["a" /* default */])(_classnames, "has-text-align-".concat(align), align), _classnames));
    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      className: className ? className : undefined,
      tagName: tagName,
      style: {
        color: textClass ? undefined : customTextColor
      },
      value: content
    });
  }
}, {
  attributes: deprecated_objectSpread({}, heading_deprecated_blockAttributes, {
    customTextColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    }
  }),
  migrate: deprecated_migrateCustomColors,
  save: function save(_ref2) {
    var _classnames2;

    var attributes = _ref2.attributes;
    var align = attributes.align,
        content = attributes.content,
        customTextColor = attributes.customTextColor,
        level = attributes.level,
        textColor = attributes.textColor;
    var tagName = 'h' + level;
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var className = classnames_default()((_classnames2 = {}, Object(defineProperty["a" /* default */])(_classnames2, textClass, textClass), Object(defineProperty["a" /* default */])(_classnames2, "has-text-align-".concat(align), align), _classnames2));
    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      className: className ? className : undefined,
      tagName: tagName,
      style: {
        color: textClass ? undefined : customTextColor
      },
      value: content
    });
  },
  supports: blockSupports
}, {
  supports: blockSupports,
  attributes: deprecated_objectSpread({}, heading_deprecated_blockAttributes, {
    customTextColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    }
  }),
  migrate: deprecated_migrateCustomColors,
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var align = attributes.align,
        level = attributes.level,
        content = attributes.content,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor;
    var tagName = 'h' + level;
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var className = classnames_default()(Object(defineProperty["a" /* default */])({}, textClass, textClass));
    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      className: className ? className : undefined,
      tagName: tagName,
      style: {
        textAlign: align,
        color: textClass ? undefined : customTextColor
      },
      value: content
    });
  }
}];
/* harmony default export */ var heading_deprecated = (heading_deprecated_deprecated);

// EXTERNAL MODULE: external {"this":["wp","keycodes"]}
var external_this_wp_keycodes_ = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/heading/heading-level-icon.js


/**
 * WordPress dependencies
 */

/** @typedef {import('@wordpress/element').WPComponent} WPComponent */

/**
 * HeadingLevelIcon props.
 *
 * @typedef WPHeadingLevelIconProps
 *
 * @property {number}   level     The heading level to show an icon for.
 * @property {?boolean} isPressed Whether or not the icon should appear pressed; default: false.
 */

/**
 * Heading level icon.
 *
 * @param {WPHeadingLevelIconProps} props Component props.
 *
 * @return {?WPComponent} The icon.
 */

function HeadingLevelIcon(_ref) {
  var level = _ref.level,
      _ref$isPressed = _ref.isPressed,
      isPressed = _ref$isPressed === void 0 ? false : _ref$isPressed;
  var levelToPath = {
    1: 'M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z',
    2: 'M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z',
    3: 'M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z',
    4: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z',
    5: 'M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z',
    6: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z'
  };

  if (!levelToPath.hasOwnProperty(level)) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    isPressed: isPressed
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    d: levelToPath[level]
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/heading/heading-level-dropdown.js


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


var HEADING_LEVELS = [1, 2, 3, 4, 5, 6];
var heading_level_dropdown_POPOVER_PROPS = {
  className: 'block-library-heading-level-dropdown',
  isAlternate: true
};
/** @typedef {import('@wordpress/element').WPComponent} WPComponent */

/**
 * HeadingLevelDropdown props.
 *
 * @typedef WPHeadingLevelDropdownProps
 *
 * @property {number}                 selectedLevel The chosen heading level.
 * @property {(newValue:number)=>any} onChange      Callback to run when
 *                                                  toolbar value is changed.
 */

/**
 * Dropdown for selecting a heading level (1 through 6).
 *
 * @param {WPHeadingLevelDropdownProps} props Component props.
 *
 * @return {WPComponent} The toolbar.
 */

function HeadingLevelDropdown(_ref) {
  var selectedLevel = _ref.selectedLevel,
      onChange = _ref.onChange;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Dropdown"], {
    popoverProps: heading_level_dropdown_POPOVER_PROPS,
    renderToggle: function renderToggle(_ref2) {
      var onToggle = _ref2.onToggle,
          isOpen = _ref2.isOpen;

      var openOnArrowDown = function openOnArrowDown(event) {
        if (!isOpen && event.keyCode === external_this_wp_keycodes_["DOWN"]) {
          event.preventDefault();
          event.stopPropagation();
          onToggle();
        }
      };

      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
        "aria-expanded": isOpen,
        "aria-haspopup": "true",
        icon: Object(external_this_wp_element_["createElement"])(HeadingLevelIcon, {
          level: selectedLevel
        }),
        label: Object(external_this_wp_i18n_["__"])('Change heading level'),
        onClick: onToggle,
        onKeyDown: openOnArrowDown,
        showTooltip: true
      });
    },
    renderContent: function renderContent() {
      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Toolbar"], {
        className: "block-library-heading-level-toolbar",
        __experimentalAccessibilityLabel: Object(external_this_wp_i18n_["__"])('Change heading level')
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], {
        isCollapsed: false,
        controls: HEADING_LEVELS.map(function (targetLevel) {
          var isActive = targetLevel === selectedLevel;
          return {
            icon: Object(external_this_wp_element_["createElement"])(HeadingLevelIcon, {
              level: targetLevel,
              isPressed: isActive
            }),
            title: Object(external_this_wp_i18n_["sprintf"])( // translators: %s: heading level e.g: "1", "2", "3"
            Object(external_this_wp_i18n_["__"])('Heading %d'), targetLevel),
            isActive: isActive,
            onClick: function onClick() {
              onChange(targetLevel);
            }
          };
        })
      }));
    }
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/heading/edit.js



function heading_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function heading_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { heading_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { heading_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function HeadingEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      mergeBlocks = _ref.mergeBlocks,
      onReplace = _ref.onReplace,
      mergedStyle = _ref.mergedStyle;
  var align = attributes.align,
      content = attributes.content,
      level = attributes.level,
      placeholder = attributes.placeholder;
  var tagName = 'h' + level;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, Object(external_this_wp_element_["createElement"])(HeadingLevelDropdown, {
    selectedLevel: level,
    onChange: function onChange(newLevel) {
      return setAttributes({
        level: newLevel
      });
    }
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["AlignmentToolbar"], {
    value: align,
    onChange: function onChange(nextAlign) {
      setAttributes({
        align: nextAlign
      });
    }
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    identifier: "content",
    tagName: external_this_wp_blockEditor_["__experimentalBlock"][tagName],
    value: content,
    onChange: function onChange(value) {
      return setAttributes({
        content: value
      });
    },
    onMerge: mergeBlocks,
    onSplit: function onSplit(value) {
      if (!value) {
        return Object(external_this_wp_blocks_["createBlock"])('core/paragraph');
      }

      return Object(external_this_wp_blocks_["createBlock"])('core/heading', heading_edit_objectSpread({}, attributes, {
        content: value
      }));
    },
    onReplace: onReplace,
    onRemove: function onRemove() {
      return onReplace([]);
    },
    className: classnames_default()(Object(defineProperty["a" /* default */])({}, "has-text-align-".concat(align), align)),
    placeholder: placeholder || Object(external_this_wp_i18n_["__"])('Write heading…'),
    textAlign: align,
    style: mergedStyle
  }));
}

/* harmony default export */ var heading_edit = (HeadingEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/heading/save.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function heading_save_save(_ref) {
  var attributes = _ref.attributes;
  var align = attributes.align,
      content = attributes.content,
      level = attributes.level;
  var tagName = 'h' + level;
  var className = classnames_default()(Object(defineProperty["a" /* default */])({}, "has-text-align-".concat(align), align));
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    className: className ? className : undefined,
    tagName: tagName,
    value: content
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/heading/shared.js
/**
 * Given a node name string for a heading node, returns its numeric level.
 *
 * @param {string} nodeName Heading node name.
 *
 * @return {number} Heading level.
 */
function getLevelFromHeadingNodeName(nodeName) {
  return Number(nodeName.substr(1));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/heading/transforms.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var transforms_name$category$attrib = {
  name: "core/heading",
  category: "text",
  attributes: {
    align: {
      type: "string"
    },
    content: {
      type: "string",
      source: "html",
      selector: "h1,h2,h3,h4,h5,h6",
      "default": ""
    },
    level: {
      type: "number",
      "default": 2
    },
    placeholder: {
      type: "string"
    }
  },
  supports: {
    anchor: true,
    className: false,
    lightBlockWrapper: true,
    __experimentalColor: {
      linkColor: true
    },
    __experimentalFontSize: true,
    __experimentalLineHeight: true,
    __experimentalSelector: {
      "core/heading/h1": "h1",
      "core/heading/h2": "h2",
      "core/heading/h3": "h3",
      "core/heading/h4": "h4",
      "core/heading/h5": "h5",
      "core/heading/h6": "h6"
    },
    __unstablePasteTextInline: true
  }
},
    heading_transforms_name = transforms_name$category$attrib.name;
var heading_transforms_transforms = {
  from: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(_ref) {
      var content = _ref.content,
          anchor = _ref.anchor;
      return Object(external_this_wp_blocks_["createBlock"])(heading_transforms_name, {
        content: content,
        anchor: anchor
      });
    }
  }, {
    type: 'raw',
    selector: 'h1,h2,h3,h4,h5,h6',
    schema: function schema(_ref2) {
      var phrasingContentSchema = _ref2.phrasingContentSchema,
          isPaste = _ref2.isPaste;
      var schema = {
        children: phrasingContentSchema,
        attributes: isPaste ? [] : ['style', 'id']
      };
      return {
        h1: schema,
        h2: schema,
        h3: schema,
        h4: schema,
        h5: schema,
        h6: schema
      };
    },
    transform: function transform(node) {
      var attributes = Object(external_this_wp_blocks_["getBlockAttributes"])(heading_transforms_name, node.outerHTML);

      var _ref3 = node.style || {},
          textAlign = _ref3.textAlign;

      attributes.level = getLevelFromHeadingNodeName(node.nodeName);

      if (textAlign === 'left' || textAlign === 'center' || textAlign === 'right') {
        attributes.align = textAlign;
      }

      return Object(external_this_wp_blocks_["createBlock"])(heading_transforms_name, attributes);
    }
  }].concat(Object(toConsumableArray["a" /* default */])([2, 3, 4, 5, 6].map(function (level) {
    return {
      type: 'prefix',
      prefix: Array(level + 1).join('#'),
      transform: function transform(content) {
        return Object(external_this_wp_blocks_["createBlock"])(heading_transforms_name, {
          level: level,
          content: content
        });
      }
    };
  }))),
  to: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(_ref4) {
      var content = _ref4.content,
          anchor = _ref4.anchor;
      return Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
        content: content,
        anchor: anchor
      });
    }
  }]
};
/* harmony default export */ var heading_transforms = (heading_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/heading/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



var heading_metadata = {
  name: "core/heading",
  category: "text",
  attributes: {
    align: {
      type: "string"
    },
    content: {
      type: "string",
      source: "html",
      selector: "h1,h2,h3,h4,h5,h6",
      "default": ""
    },
    level: {
      type: "number",
      "default": 2
    },
    placeholder: {
      type: "string"
    }
  },
  supports: {
    anchor: true,
    className: false,
    lightBlockWrapper: true,
    __experimentalColor: {
      linkColor: true
    },
    __experimentalFontSize: true,
    __experimentalLineHeight: true,
    __experimentalSelector: {
      "core/heading/h1": "h1",
      "core/heading/h2": "h2",
      "core/heading/h3": "h3",
      "core/heading/h4": "h4",
      "core/heading/h5": "h5",
      "core/heading/h6": "h6"
    },
    __unstablePasteTextInline: true
  }
};


var heading_name = heading_metadata.name;

var heading_settings = {
  title: Object(external_this_wp_i18n_["__"])('Heading'),
  description: Object(external_this_wp_i18n_["__"])('Introduce new sections and organize content to help visitors (and search engines) understand the structure of your content.'),
  icon: library_heading,
  keywords: [Object(external_this_wp_i18n_["__"])('title'), Object(external_this_wp_i18n_["__"])('subtitle')],
  example: {
    attributes: {
      content: Object(external_this_wp_i18n_["__"])('Code is Poetry'),
      level: 2
    }
  },
  __experimentalLabel: function __experimentalLabel(attributes, _ref) {
    var context = _ref.context;

    if (context === 'accessibility') {
      var content = attributes.content,
          level = attributes.level;
      return Object(external_this_lodash_["isEmpty"])(content) ? Object(external_this_wp_i18n_["sprintf"])(
      /* translators: accessibility text. %s: heading level. */
      Object(external_this_wp_i18n_["__"])('Level %s. Empty.'), level) : Object(external_this_wp_i18n_["sprintf"])(
      /* translators: accessibility text. 1: heading level. 2: heading content. */
      Object(external_this_wp_i18n_["__"])('Level %1$s. %2$s'), level, content);
    }
  },
  transforms: heading_transforms,
  deprecated: heading_deprecated,
  merge: function merge(attributes, attributesToMerge) {
    return {
      content: (attributes.content || '') + (attributesToMerge.content || '')
    };
  },
  edit: heading_edit,
  save: heading_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/quote.js


/**
 * WordPress dependencies
 */

var quote = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M13 6v6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H13zm-9 6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H4v6z"
}));
/* harmony default export */ var library_quote = (quote);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/quote/deprecated.js



function quote_deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function quote_deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { quote_deprecated_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { quote_deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


var quote_deprecated_blockAttributes = {
  value: {
    type: 'string',
    source: 'html',
    selector: 'blockquote',
    multiline: 'p',
    default: ''
  },
  citation: {
    type: 'string',
    source: 'html',
    selector: 'cite',
    default: ''
  },
  align: {
    type: 'string'
  }
};
var quote_deprecated_deprecated = [{
  attributes: quote_deprecated_blockAttributes,
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var align = attributes.align,
        value = attributes.value,
        citation = attributes.citation;
    return Object(external_this_wp_element_["createElement"])("blockquote", {
      style: {
        textAlign: align ? align : null
      }
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      multiline: true,
      value: value
    }), !external_this_wp_blockEditor_["RichText"].isEmpty(citation) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "cite",
      value: citation
    }));
  }
}, {
  attributes: quote_deprecated_objectSpread({}, quote_deprecated_blockAttributes, {
    style: {
      type: 'number',
      default: 1
    }
  }),
  migrate: function migrate(attributes) {
    if (attributes.style === 2) {
      return quote_deprecated_objectSpread({}, Object(external_this_lodash_["omit"])(attributes, ['style']), {
        className: attributes.className ? attributes.className + ' is-style-large' : 'is-style-large'
      });
    }

    return attributes;
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var align = attributes.align,
        value = attributes.value,
        citation = attributes.citation,
        style = attributes.style;
    return Object(external_this_wp_element_["createElement"])("blockquote", {
      className: style === 2 ? 'is-large' : '',
      style: {
        textAlign: align ? align : null
      }
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      multiline: true,
      value: value
    }), !external_this_wp_blockEditor_["RichText"].isEmpty(citation) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "cite",
      value: citation
    }));
  }
}, {
  attributes: quote_deprecated_objectSpread({}, quote_deprecated_blockAttributes, {
    citation: {
      type: 'string',
      source: 'html',
      selector: 'footer',
      default: ''
    },
    style: {
      type: 'number',
      default: 1
    }
  }),
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var align = attributes.align,
        value = attributes.value,
        citation = attributes.citation,
        style = attributes.style;
    return Object(external_this_wp_element_["createElement"])("blockquote", {
      className: "blocks-quote-style-".concat(style),
      style: {
        textAlign: align ? align : null
      }
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      multiline: true,
      value: value
    }), !external_this_wp_blockEditor_["RichText"].isEmpty(citation) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "footer",
      value: citation
    }));
  }
}];
/* harmony default export */ var quote_deprecated = (quote_deprecated_deprecated);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/quote/edit.js



function quote_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function quote_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { quote_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { quote_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





function QuoteEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      isSelected = _ref.isSelected,
      mergeBlocks = _ref.mergeBlocks,
      onReplace = _ref.onReplace,
      className = _ref.className,
      insertBlocksAfter = _ref.insertBlocksAfter;
  var align = attributes.align,
      value = attributes.value,
      citation = attributes.citation;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["AlignmentToolbar"], {
    value: align,
    onChange: function onChange(nextAlign) {
      setAttributes({
        align: nextAlign
      });
    }
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["BlockQuotation"], {
    className: classnames_default()(className, Object(defineProperty["a" /* default */])({}, "has-text-align-".concat(align), align))
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    identifier: "value",
    multiline: true,
    value: value,
    onChange: function onChange(nextValue) {
      return setAttributes({
        value: nextValue
      });
    },
    onMerge: mergeBlocks,
    onRemove: function onRemove(forward) {
      var hasEmptyCitation = !citation || citation.length === 0;

      if (!forward && hasEmptyCitation) {
        onReplace([]);
      }
    },
    placeholder: // translators: placeholder text used for the quote
    Object(external_this_wp_i18n_["__"])('Write quote…'),
    onReplace: onReplace,
    onSplit: function onSplit(piece) {
      return Object(external_this_wp_blocks_["createBlock"])('core/quote', quote_edit_objectSpread({}, attributes, {
        value: piece
      }));
    },
    __unstableOnSplitMiddle: function __unstableOnSplitMiddle() {
      return Object(external_this_wp_blocks_["createBlock"])('core/paragraph');
    },
    textAlign: align
  }), (!external_this_wp_blockEditor_["RichText"].isEmpty(citation) || isSelected) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    identifier: "citation",
    value: citation,
    onChange: function onChange(nextCitation) {
      return setAttributes({
        citation: nextCitation
      });
    },
    __unstableMobileNoFocusOnMount: true,
    placeholder: // translators: placeholder text used for the citation
    Object(external_this_wp_i18n_["__"])('Write citation…'),
    className: "wp-block-quote__citation",
    textAlign: align,
    __unstableOnSplitAtEnd: function __unstableOnSplitAtEnd() {
      return insertBlocksAfter(Object(external_this_wp_blocks_["createBlock"])('core/paragraph'));
    }
  })));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/quote/save.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function quote_save_save(_ref) {
  var attributes = _ref.attributes;
  var align = attributes.align,
      value = attributes.value,
      citation = attributes.citation;
  var className = classnames_default()(Object(defineProperty["a" /* default */])({}, "has-text-align-".concat(align), align));
  return Object(external_this_wp_element_["createElement"])("blockquote", {
    className: className
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    multiline: true,
    value: value
  }), !external_this_wp_blockEditor_["RichText"].isEmpty(citation) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: "cite",
    value: citation
  }));
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(15);

// EXTERNAL MODULE: external {"this":["wp","richText"]}
var external_this_wp_richText_ = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/quote/transforms.js




function quote_transforms_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function quote_transforms_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { quote_transforms_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { quote_transforms_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


var quote_transforms_transforms = {
  from: [{
    type: 'block',
    isMultiBlock: true,
    blocks: ['core/paragraph'],
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/quote', {
        value: Object(external_this_wp_richText_["toHTMLString"])({
          value: Object(external_this_wp_richText_["join"])(attributes.map(function (_ref) {
            var content = _ref.content;
            return Object(external_this_wp_richText_["create"])({
              html: content
            });
          }), "\u2028"),
          multilineTag: 'p'
        }),
        anchor: attributes.anchor
      });
    }
  }, {
    type: 'block',
    blocks: ['core/heading'],
    transform: function transform(_ref2) {
      var content = _ref2.content,
          anchor = _ref2.anchor;
      return Object(external_this_wp_blocks_["createBlock"])('core/quote', {
        value: "<p>".concat(content, "</p>"),
        anchor: anchor
      });
    }
  }, {
    type: 'block',
    blocks: ['core/pullquote'],
    transform: function transform(_ref3) {
      var value = _ref3.value,
          citation = _ref3.citation,
          anchor = _ref3.anchor;
      return Object(external_this_wp_blocks_["createBlock"])('core/quote', {
        value: value,
        citation: citation,
        anchor: anchor
      });
    }
  }, {
    type: 'prefix',
    prefix: '>',
    transform: function transform(content) {
      return Object(external_this_wp_blocks_["createBlock"])('core/quote', {
        value: "<p>".concat(content, "</p>")
      });
    }
  }, {
    type: 'raw',
    isMatch: function isMatch(node) {
      var isParagraphOrSingleCite = function () {
        var hasCitation = false;
        return function (child) {
          // Child is a paragraph.
          if (child.nodeName === 'P') {
            return true;
          } // Child is a cite and no other cite child exists before it.


          if (!hasCitation && child.nodeName === 'CITE') {
            hasCitation = true;
            return true;
          }
        };
      }();

      return node.nodeName === 'BLOCKQUOTE' && // The quote block can only handle multiline paragraph
      // content with an optional cite child.
      Array.from(node.childNodes).every(isParagraphOrSingleCite);
    },
    schema: function schema(_ref4) {
      var phrasingContentSchema = _ref4.phrasingContentSchema;
      return {
        blockquote: {
          children: {
            p: {
              children: phrasingContentSchema
            },
            cite: {
              children: phrasingContentSchema
            }
          }
        }
      };
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(_ref5) {
      var value = _ref5.value,
          citation = _ref5.citation;
      var paragraphs = [];

      if (value && value !== '<p></p>') {
        paragraphs.push.apply(paragraphs, Object(toConsumableArray["a" /* default */])(Object(external_this_wp_richText_["split"])(Object(external_this_wp_richText_["create"])({
          html: value,
          multilineTag: 'p'
        }), "\u2028").map(function (piece) {
          return Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
            content: Object(external_this_wp_richText_["toHTMLString"])({
              value: piece
            })
          });
        })));
      }

      if (citation && citation !== '<p></p>') {
        paragraphs.push(Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
          content: citation
        }));
      }

      if (paragraphs.length === 0) {
        return Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
          content: ''
        });
      }

      return paragraphs;
    }
  }, {
    type: 'block',
    blocks: ['core/heading'],
    transform: function transform(_ref6) {
      var value = _ref6.value,
          citation = _ref6.citation,
          attrs = Object(objectWithoutProperties["a" /* default */])(_ref6, ["value", "citation"]);

      // If there is no quote content, use the citation as the
      // content of the resulting heading. A nonexistent citation
      // will result in an empty heading.
      if (value === '<p></p>') {
        return Object(external_this_wp_blocks_["createBlock"])('core/heading', {
          content: citation
        });
      }

      var pieces = Object(external_this_wp_richText_["split"])(Object(external_this_wp_richText_["create"])({
        html: value,
        multilineTag: 'p'
      }), "\u2028");
      var headingBlock = Object(external_this_wp_blocks_["createBlock"])('core/heading', {
        content: Object(external_this_wp_richText_["toHTMLString"])({
          value: pieces[0]
        })
      });

      if (!citation && pieces.length === 1) {
        return headingBlock;
      }

      var quotePieces = pieces.slice(1);
      var quoteBlock = Object(external_this_wp_blocks_["createBlock"])('core/quote', quote_transforms_objectSpread({}, attrs, {
        citation: citation,
        value: Object(external_this_wp_richText_["toHTMLString"])({
          value: quotePieces.length ? Object(external_this_wp_richText_["join"])(pieces.slice(1), "\u2028") : Object(external_this_wp_richText_["create"])(),
          multilineTag: 'p'
        })
      }));
      return [headingBlock, quoteBlock];
    }
  }, {
    type: 'block',
    blocks: ['core/pullquote'],
    transform: function transform(_ref7) {
      var value = _ref7.value,
          citation = _ref7.citation,
          anchor = _ref7.anchor;
      return Object(external_this_wp_blocks_["createBlock"])('core/pullquote', {
        value: value,
        citation: citation,
        anchor: anchor
      });
    }
  }]
};
/* harmony default export */ var quote_transforms = (quote_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/quote/index.js


function quote_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function quote_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { quote_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { quote_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var quote_metadata = {
  name: "core/quote",
  category: "text",
  attributes: {
    value: {
      type: "string",
      source: "html",
      selector: "blockquote",
      multiline: "p",
      "default": ""
    },
    citation: {
      type: "string",
      source: "html",
      selector: "cite",
      "default": ""
    },
    align: {
      type: "string"
    }
  },
  supports: {
    anchor: true
  }
};


var quote_name = quote_metadata.name;

var quote_settings = {
  title: Object(external_this_wp_i18n_["__"])('Quote'),
  description: Object(external_this_wp_i18n_["__"])('Give quoted text visual emphasis. "In quoting others, we cite ourselves." — Julio Cortázar'),
  icon: library_quote,
  keywords: [Object(external_this_wp_i18n_["__"])('blockquote'), Object(external_this_wp_i18n_["__"])('cite')],
  example: {
    attributes: {
      value: '<p>' + Object(external_this_wp_i18n_["__"])('In quoting others, we cite ourselves.') + '</p>',
      citation: 'Julio Cortázar',
      className: 'is-style-large'
    }
  },
  styles: [{
    name: 'default',
    label: Object(external_this_wp_i18n_["_x"])('Default', 'block style'),
    isDefault: true
  }, {
    name: 'large',
    label: Object(external_this_wp_i18n_["_x"])('Large', 'block style')
  }],
  transforms: quote_transforms,
  edit: QuoteEdit,
  save: quote_save_save,
  merge: function merge(attributes, _ref) {
    var value = _ref.value,
        citation = _ref.citation;

    // Quote citations cannot be merged. Pick the second one unless it's
    // empty.
    if (!citation) {
      citation = attributes.citation;
    }

    if (!value || value === '<p></p>') {
      return quote_objectSpread({}, attributes, {
        citation: citation
      });
    }

    return quote_objectSpread({}, attributes, {
      value: attributes.value + value,
      citation: citation
    });
  },
  deprecated: quote_deprecated
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/gallery.js


/**
 * WordPress dependencies
 */

var gallery = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M20.2 8v11c0 .7-.6 1.2-1.2 1.2H6v1.5h13c1.5 0 2.7-1.2 2.7-2.8V8h-1.5zM18 16.4V4.6c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v11.8c0 .9.7 1.6 1.6 1.6h11.8c.9 0 1.6-.7 1.6-1.6zM4.5 4.6c0-.1.1-.1.1-.1h11.8c.1 0 .1.1.1.1V12l-2.3-1.7c-.3-.2-.6-.2-.9 0l-2.9 2.1L8 11.3c-.2-.1-.5-.1-.7 0l-2.9 1.5V4.6zm0 11.8v-1.8l3.2-1.7 2.4 1.2c.2.1.5.1.8-.1l2.8-2 2.8 2v2.5c0 .1-.1.1-.1.1H4.6c0-.1-.1-.2-.1-.2z"
}));
/* harmony default export */ var library_gallery = (gallery);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/gallery/shared.js
/**
 * External dependencies
 */

function defaultColumnsNumber(attributes) {
  return Math.min(3, attributes.images.length);
}
var shared_pickRelevantMediaFiles = function pickRelevantMediaFiles(image) {
  var sizeSlug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'large';
  var imageProps = Object(external_this_lodash_["pick"])(image, ['alt', 'id', 'link', 'caption']);
  imageProps.url = Object(external_this_lodash_["get"])(image, ['sizes', sizeSlug, 'url']) || Object(external_this_lodash_["get"])(image, ['media_details', 'sizes', sizeSlug, 'source_url']) || image.url;
  var fullUrl = Object(external_this_lodash_["get"])(image, ['sizes', 'full', 'url']) || Object(external_this_lodash_["get"])(image, ['media_details', 'sizes', 'full', 'source_url']);

  if (fullUrl) {
    imageProps.fullUrl = fullUrl;
  }

  return imageProps;
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/gallery/deprecated.js



function gallery_deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function gallery_deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { gallery_deprecated_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { gallery_deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var gallery_deprecated_deprecated = [{
  attributes: {
    images: {
      type: 'array',
      default: [],
      source: 'query',
      selector: '.blocks-gallery-item',
      query: {
        url: {
          source: 'attribute',
          selector: 'img',
          attribute: 'src'
        },
        fullUrl: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-full-url'
        },
        link: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-link'
        },
        alt: {
          source: 'attribute',
          selector: 'img',
          attribute: 'alt',
          default: ''
        },
        id: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-id'
        },
        caption: {
          type: 'string',
          source: 'html',
          selector: '.blocks-gallery-item__caption'
        }
      }
    },
    ids: {
      type: 'array',
      default: []
    },
    columns: {
      type: 'number'
    },
    caption: {
      type: 'string',
      source: 'html',
      selector: '.blocks-gallery-caption'
    },
    imageCrop: {
      type: 'boolean',
      default: true
    },
    linkTo: {
      type: 'string',
      default: 'none'
    }
  },
  supports: {
    align: true
  },
  isEligible: function isEligible(_ref) {
    var ids = _ref.ids;
    return ids && ids.some(function (id) {
      return typeof id === 'string';
    });
  },
  migrate: function migrate(attributes) {
    return gallery_deprecated_objectSpread({}, attributes, {
      ids: Object(external_this_lodash_["map"])(attributes.ids, function (id) {
        var parsedId = parseInt(id, 10);
        return Number.isInteger(parsedId) ? parsedId : null;
      })
    });
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var images = attributes.images,
        _attributes$columns = attributes.columns,
        columns = _attributes$columns === void 0 ? defaultColumnsNumber(attributes) : _attributes$columns,
        imageCrop = attributes.imageCrop,
        caption = attributes.caption,
        linkTo = attributes.linkTo;
    return Object(external_this_wp_element_["createElement"])("figure", {
      className: "columns-".concat(columns, " ").concat(imageCrop ? 'is-cropped' : '')
    }, Object(external_this_wp_element_["createElement"])("ul", {
      className: "blocks-gallery-grid"
    }, images.map(function (image) {
      var href;

      switch (linkTo) {
        case 'media':
          href = image.fullUrl || image.url;
          break;

        case 'attachment':
          href = image.link;
          break;
      }

      var img = Object(external_this_wp_element_["createElement"])("img", {
        src: image.url,
        alt: image.alt,
        "data-id": image.id,
        "data-full-url": image.fullUrl,
        "data-link": image.link,
        className: image.id ? "wp-image-".concat(image.id) : null
      });
      return Object(external_this_wp_element_["createElement"])("li", {
        key: image.id || image.url,
        className: "blocks-gallery-item"
      }, Object(external_this_wp_element_["createElement"])("figure", null, href ? Object(external_this_wp_element_["createElement"])("a", {
        href: href
      }, img) : img, !external_this_wp_blockEditor_["RichText"].isEmpty(image.caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
        tagName: "figcaption",
        className: "blocks-gallery-item__caption",
        value: image.caption
      })));
    })), !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "figcaption",
      className: "blocks-gallery-caption",
      value: caption
    }));
  }
}, {
  attributes: {
    images: {
      type: 'array',
      default: [],
      source: 'query',
      selector: 'ul.wp-block-gallery .blocks-gallery-item',
      query: {
        url: {
          source: 'attribute',
          selector: 'img',
          attribute: 'src'
        },
        fullUrl: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-full-url'
        },
        alt: {
          source: 'attribute',
          selector: 'img',
          attribute: 'alt',
          default: ''
        },
        id: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-id'
        },
        link: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-link'
        },
        caption: {
          type: 'array',
          source: 'children',
          selector: 'figcaption'
        }
      }
    },
    ids: {
      type: 'array',
      default: []
    },
    columns: {
      type: 'number'
    },
    imageCrop: {
      type: 'boolean',
      default: true
    },
    linkTo: {
      type: 'string',
      default: 'none'
    }
  },
  supports: {
    align: true
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var images = attributes.images,
        _attributes$columns2 = attributes.columns,
        columns = _attributes$columns2 === void 0 ? defaultColumnsNumber(attributes) : _attributes$columns2,
        imageCrop = attributes.imageCrop,
        linkTo = attributes.linkTo;
    return Object(external_this_wp_element_["createElement"])("ul", {
      className: "columns-".concat(columns, " ").concat(imageCrop ? 'is-cropped' : '')
    }, images.map(function (image) {
      var href;

      switch (linkTo) {
        case 'media':
          href = image.fullUrl || image.url;
          break;

        case 'attachment':
          href = image.link;
          break;
      }

      var img = Object(external_this_wp_element_["createElement"])("img", {
        src: image.url,
        alt: image.alt,
        "data-id": image.id,
        "data-full-url": image.fullUrl,
        "data-link": image.link,
        className: image.id ? "wp-image-".concat(image.id) : null
      });
      return Object(external_this_wp_element_["createElement"])("li", {
        key: image.id || image.url,
        className: "blocks-gallery-item"
      }, Object(external_this_wp_element_["createElement"])("figure", null, href ? Object(external_this_wp_element_["createElement"])("a", {
        href: href
      }, img) : img, image.caption && image.caption.length > 0 && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
        tagName: "figcaption",
        value: image.caption
      })));
    }));
  }
}, {
  attributes: {
    images: {
      type: 'array',
      default: [],
      source: 'query',
      selector: 'ul.wp-block-gallery .blocks-gallery-item',
      query: {
        url: {
          source: 'attribute',
          selector: 'img',
          attribute: 'src'
        },
        alt: {
          source: 'attribute',
          selector: 'img',
          attribute: 'alt',
          default: ''
        },
        id: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-id'
        },
        link: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-link'
        },
        caption: {
          type: 'array',
          source: 'children',
          selector: 'figcaption'
        }
      }
    },
    columns: {
      type: 'number'
    },
    imageCrop: {
      type: 'boolean',
      default: true
    },
    linkTo: {
      type: 'string',
      default: 'none'
    }
  },
  isEligible: function isEligible(_ref4) {
    var images = _ref4.images,
        ids = _ref4.ids;
    return images && images.length > 0 && (!ids && images || ids && images && ids.length !== images.length || Object(external_this_lodash_["some"])(images, function (id, index) {
      if (!id && ids[index] !== null) {
        return true;
      }

      return parseInt(id, 10) !== ids[index];
    }));
  },
  migrate: function migrate(attributes) {
    return gallery_deprecated_objectSpread({}, attributes, {
      ids: Object(external_this_lodash_["map"])(attributes.images, function (_ref5) {
        var id = _ref5.id;

        if (!id) {
          return null;
        }

        return parseInt(id, 10);
      })
    });
  },
  supports: {
    align: true
  },
  save: function save(_ref6) {
    var attributes = _ref6.attributes;
    var images = attributes.images,
        _attributes$columns3 = attributes.columns,
        columns = _attributes$columns3 === void 0 ? defaultColumnsNumber(attributes) : _attributes$columns3,
        imageCrop = attributes.imageCrop,
        linkTo = attributes.linkTo;
    return Object(external_this_wp_element_["createElement"])("ul", {
      className: "columns-".concat(columns, " ").concat(imageCrop ? 'is-cropped' : '')
    }, images.map(function (image) {
      var href;

      switch (linkTo) {
        case 'media':
          href = image.url;
          break;

        case 'attachment':
          href = image.link;
          break;
      }

      var img = Object(external_this_wp_element_["createElement"])("img", {
        src: image.url,
        alt: image.alt,
        "data-id": image.id,
        "data-link": image.link,
        className: image.id ? "wp-image-".concat(image.id) : null
      });
      return Object(external_this_wp_element_["createElement"])("li", {
        key: image.id || image.url,
        className: "blocks-gallery-item"
      }, Object(external_this_wp_element_["createElement"])("figure", null, href ? Object(external_this_wp_element_["createElement"])("a", {
        href: href
      }, img) : img, image.caption && image.caption.length > 0 && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
        tagName: "figcaption",
        value: image.caption
      })));
    }));
  }
}, {
  attributes: {
    images: {
      type: 'array',
      default: [],
      source: 'query',
      selector: 'div.wp-block-gallery figure.blocks-gallery-image img',
      query: {
        url: {
          source: 'attribute',
          attribute: 'src'
        },
        alt: {
          source: 'attribute',
          attribute: 'alt',
          default: ''
        },
        id: {
          source: 'attribute',
          attribute: 'data-id'
        }
      }
    },
    columns: {
      type: 'number'
    },
    imageCrop: {
      type: 'boolean',
      default: true
    },
    linkTo: {
      type: 'string',
      default: 'none'
    },
    align: {
      type: 'string',
      default: 'none'
    }
  },
  supports: {
    align: true
  },
  save: function save(_ref7) {
    var attributes = _ref7.attributes;
    var images = attributes.images,
        _attributes$columns4 = attributes.columns,
        columns = _attributes$columns4 === void 0 ? defaultColumnsNumber(attributes) : _attributes$columns4,
        align = attributes.align,
        imageCrop = attributes.imageCrop,
        linkTo = attributes.linkTo;
    var className = classnames_default()("columns-".concat(columns), {
      alignnone: align === 'none',
      'is-cropped': imageCrop
    });
    return Object(external_this_wp_element_["createElement"])("div", {
      className: className
    }, images.map(function (image) {
      var href;

      switch (linkTo) {
        case 'media':
          href = image.url;
          break;

        case 'attachment':
          href = image.link;
          break;
      }

      var img = Object(external_this_wp_element_["createElement"])("img", {
        src: image.url,
        alt: image.alt,
        "data-id": image.id
      });
      return Object(external_this_wp_element_["createElement"])("figure", {
        key: image.id || image.url,
        className: "blocks-gallery-image"
      }, href ? Object(external_this_wp_element_["createElement"])("a", {
        href: href
      }, img) : img);
    }));
  }
}];
/* harmony default export */ var gallery_deprecated = (gallery_deprecated_deprecated);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(22);

// EXTERNAL MODULE: external {"this":["wp","viewport"]}
var external_this_wp_viewport_ = __webpack_require__(81);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/gallery/shared-icon.js


/**
 * WordPress dependencies
 */


var sharedIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
  icon: library_gallery
});

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/chevron-left.js
var chevron_left = __webpack_require__(293);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/chevron-right.js
var chevron_right = __webpack_require__(292);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/edit.js
var library_edit = __webpack_require__(300);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/close-small.js
var close_small = __webpack_require__(177);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/gallery/gallery-image.js








function _createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */



var gallery_image_isTemporaryImage = function isTemporaryImage(id, url) {
  return !id && Object(external_this_wp_blob_["isBlobURL"])(url);
};

var gallery_image_GalleryImage = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(GalleryImage, _Component);

  var _super = _createSuper(GalleryImage);

  function GalleryImage() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, GalleryImage);

    _this = _super.apply(this, arguments);
    _this.onSelectImage = _this.onSelectImage.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onSelectCaption = _this.onSelectCaption.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onRemoveImage = _this.onRemoveImage.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.bindContainer = _this.bindContainer.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onEdit = _this.onEdit.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onSelectImageFromLibrary = _this.onSelectImageFromLibrary.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onSelectCustomURL = _this.onSelectCustomURL.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      captionSelected: false,
      isEditing: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(GalleryImage, [{
    key: "bindContainer",
    value: function bindContainer(ref) {
      this.container = ref;
    }
  }, {
    key: "onSelectCaption",
    value: function onSelectCaption() {
      if (!this.state.captionSelected) {
        this.setState({
          captionSelected: true
        });
      }

      if (!this.props.isSelected) {
        this.props.onSelect();
      }
    }
  }, {
    key: "onSelectImage",
    value: function onSelectImage() {
      if (!this.props.isSelected) {
        this.props.onSelect();
      }

      if (this.state.captionSelected) {
        this.setState({
          captionSelected: false
        });
      }
    }
  }, {
    key: "onRemoveImage",
    value: function onRemoveImage(event) {
      if (this.container === document.activeElement && this.props.isSelected && [external_this_wp_keycodes_["BACKSPACE"], external_this_wp_keycodes_["DELETE"]].indexOf(event.keyCode) !== -1) {
        event.stopPropagation();
        event.preventDefault();
        this.props.onRemove();
      }
    }
  }, {
    key: "onEdit",
    value: function onEdit() {
      this.setState({
        isEditing: true
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          isSelected = _this$props.isSelected,
          image = _this$props.image,
          url = _this$props.url,
          __unstableMarkNextChangeAsNotPersistent = _this$props.__unstableMarkNextChangeAsNotPersistent;

      if (image && !url) {
        __unstableMarkNextChangeAsNotPersistent();

        this.props.setAttributes({
          url: image.source_url,
          alt: image.alt_text
        });
      } // unselect the caption so when the user selects other image and comeback
      // the caption is not immediately selected


      if (this.state.captionSelected && !isSelected && prevProps.isSelected) {
        this.setState({
          captionSelected: false
        });
      }
    }
  }, {
    key: "deselectOnBlur",
    value: function deselectOnBlur() {
      this.props.onDeselect();
    }
  }, {
    key: "onSelectImageFromLibrary",
    value: function onSelectImageFromLibrary(media) {
      var _this$props2 = this.props,
          setAttributes = _this$props2.setAttributes,
          id = _this$props2.id,
          url = _this$props2.url,
          alt = _this$props2.alt,
          caption = _this$props2.caption,
          sizeSlug = _this$props2.sizeSlug;

      if (!media || !media.url) {
        return;
      }

      var mediaAttributes = shared_pickRelevantMediaFiles(media, sizeSlug); // If the current image is temporary but an alt text was meanwhile
      // written by the user, make sure the text is not overwritten.

      if (gallery_image_isTemporaryImage(id, url)) {
        if (alt) {
          mediaAttributes = Object(external_this_lodash_["omit"])(mediaAttributes, ['alt']);
        }
      } // If a caption text was meanwhile written by the user,
      // make sure the text is not overwritten by empty captions.


      if (caption && !Object(external_this_lodash_["get"])(mediaAttributes, ['caption'])) {
        mediaAttributes = Object(external_this_lodash_["omit"])(mediaAttributes, ['caption']);
      }

      setAttributes(mediaAttributes);
      this.setState({
        isEditing: false
      });
    }
  }, {
    key: "onSelectCustomURL",
    value: function onSelectCustomURL(newURL) {
      var _this$props3 = this.props,
          setAttributes = _this$props3.setAttributes,
          url = _this$props3.url;

      if (newURL !== url) {
        setAttributes({
          url: newURL,
          id: undefined
        });
        this.setState({
          isEditing: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          url = _this$props4.url,
          alt = _this$props4.alt,
          id = _this$props4.id,
          linkTo = _this$props4.linkTo,
          link = _this$props4.link,
          isFirstItem = _this$props4.isFirstItem,
          isLastItem = _this$props4.isLastItem,
          isSelected = _this$props4.isSelected,
          caption = _this$props4.caption,
          onRemove = _this$props4.onRemove,
          onMoveForward = _this$props4.onMoveForward,
          onMoveBackward = _this$props4.onMoveBackward,
          setAttributes = _this$props4.setAttributes,
          ariaLabel = _this$props4['aria-label'];
      var isEditing = this.state.isEditing;
      var href;

      switch (linkTo) {
        case 'media':
          href = url;
          break;

        case 'attachment':
          href = link;
          break;
      }

      var img = // Disable reason: Image itself is not meant to be interactive, but should
      // direct image selection and unfocus caption fields.

      /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
      Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("img", {
        src: url,
        alt: alt,
        "data-id": id,
        onClick: this.onSelectImage,
        onFocus: this.onSelectImage,
        onKeyDown: this.onRemoveImage,
        tabIndex: "0",
        "aria-label": ariaLabel,
        ref: this.bindContainer
      }), Object(external_this_wp_blob_["isBlobURL"])(url) && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null))
      /* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
      ;
      var className = classnames_default()({
        'is-selected': isSelected,
        'is-transient': Object(external_this_wp_blob_["isBlobURL"])(url)
      });
      return Object(external_this_wp_element_["createElement"])("figure", {
        className: className
      }, !isEditing && (href ? Object(external_this_wp_element_["createElement"])("a", {
        href: href
      }, img) : img), isEditing && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaPlaceholder"], {
        labels: {
          title: Object(external_this_wp_i18n_["__"])('Edit gallery image')
        },
        icon: library_image,
        onSelect: this.onSelectImageFromLibrary,
        onSelectURL: this.onSelectCustomURL,
        accept: "image/*",
        allowedTypes: ['image'],
        value: {
          id: id,
          src: url
        }
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ButtonGroup"], {
        className: "block-library-gallery-item__inline-menu is-left"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        icon: chevron_left["a" /* default */],
        onClick: isFirstItem ? undefined : onMoveBackward,
        label: Object(external_this_wp_i18n_["__"])('Move image backward'),
        "aria-disabled": isFirstItem,
        disabled: !isSelected
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        icon: chevron_right["a" /* default */],
        onClick: isLastItem ? undefined : onMoveForward,
        label: Object(external_this_wp_i18n_["__"])('Move image forward'),
        "aria-disabled": isLastItem,
        disabled: !isSelected
      })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ButtonGroup"], {
        className: "block-library-gallery-item__inline-menu is-right"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        icon: library_edit["a" /* default */],
        onClick: this.onEdit,
        label: Object(external_this_wp_i18n_["__"])('Replace image'),
        disabled: !isSelected
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        icon: close_small["a" /* default */],
        onClick: onRemove,
        label: Object(external_this_wp_i18n_["__"])('Remove image'),
        disabled: !isSelected
      })), !isEditing && (isSelected || caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
        tagName: "figcaption",
        placeholder: isSelected ? Object(external_this_wp_i18n_["__"])('Write caption…') : null,
        value: caption,
        isSelected: this.state.captionSelected,
        onChange: function onChange(newCaption) {
          return setAttributes({
            caption: newCaption
          });
        },
        unstableOnFocus: this.onSelectCaption,
        inlineToolbar: true
      }));
    }
  }]);

  return GalleryImage;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var gallery_image = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, ownProps) {
  var _select = select('core'),
      getMedia = _select.getMedia;

  var id = ownProps.id;
  return {
    image: id ? getMedia(parseInt(id, 10)) : null
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      __unstableMarkNextChangeAsNotPersistent = _dispatch.__unstableMarkNextChangeAsNotPersistent;

  return {
    __unstableMarkNextChangeAsNotPersistent: __unstableMarkNextChangeAsNotPersistent
  };
})])(gallery_image_GalleryImage));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/gallery/gallery.js





/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



var gallery_Gallery = function Gallery(props) {
  var _classnames;

  var attributes = props.attributes,
      className = props.className,
      isSelected = props.isSelected,
      setAttributes = props.setAttributes,
      selectedImage = props.selectedImage,
      mediaPlaceholder = props.mediaPlaceholder,
      onMoveBackward = props.onMoveBackward,
      onMoveForward = props.onMoveForward,
      onRemoveImage = props.onRemoveImage,
      onSelectImage = props.onSelectImage,
      onDeselectImage = props.onDeselectImage,
      onSetImageAttributes = props.onSetImageAttributes,
      onFocusGalleryCaption = props.onFocusGalleryCaption,
      insertBlocksAfter = props.insertBlocksAfter;
  var align = attributes.align,
      _attributes$columns = attributes.columns,
      columns = _attributes$columns === void 0 ? defaultColumnsNumber(attributes) : _attributes$columns,
      caption = attributes.caption,
      imageCrop = attributes.imageCrop,
      images = attributes.images;
  return Object(external_this_wp_element_["createElement"])("figure", {
    className: classnames_default()(className, (_classnames = {}, Object(defineProperty["a" /* default */])(_classnames, "align".concat(align), align), Object(defineProperty["a" /* default */])(_classnames, "columns-".concat(columns), columns), Object(defineProperty["a" /* default */])(_classnames, 'is-cropped', imageCrop), _classnames))
  }, Object(external_this_wp_element_["createElement"])("ul", {
    className: "blocks-gallery-grid"
  }, images.map(function (img, index) {
    var ariaLabel = Object(external_this_wp_i18n_["sprintf"])(
    /* translators: 1: the order number of the image. 2: the total number of images. */
    Object(external_this_wp_i18n_["__"])('image %1$d of %2$d in gallery'), index + 1, images.length);
    return Object(external_this_wp_element_["createElement"])("li", {
      className: "blocks-gallery-item",
      key: img.id || img.url
    }, Object(external_this_wp_element_["createElement"])(gallery_image, {
      url: img.url,
      alt: img.alt,
      id: img.id,
      isFirstItem: index === 0,
      isLastItem: index + 1 === images.length,
      isSelected: isSelected && selectedImage === index,
      onMoveBackward: onMoveBackward(index),
      onMoveForward: onMoveForward(index),
      onRemove: onRemoveImage(index),
      onSelect: onSelectImage(index),
      onDeselect: onDeselectImage(index),
      setAttributes: function setAttributes(attrs) {
        return onSetImageAttributes(index, attrs);
      },
      caption: img.caption,
      "aria-label": ariaLabel,
      sizeSlug: attributes.sizeSlug
    }));
  })), mediaPlaceholder, Object(external_this_wp_element_["createElement"])(RichTextVisibilityHelper, {
    isHidden: !isSelected && external_this_wp_blockEditor_["RichText"].isEmpty(caption),
    tagName: "figcaption",
    className: "blocks-gallery-caption",
    placeholder: Object(external_this_wp_i18n_["__"])('Write gallery caption…'),
    value: caption,
    unstableOnFocus: onFocusGalleryCaption,
    onChange: function onChange(value) {
      return setAttributes({
        caption: value
      });
    },
    inlineToolbar: true,
    __unstableOnSplitAtEnd: function __unstableOnSplitAtEnd() {
      return insertBlocksAfter(Object(external_this_wp_blocks_["createBlock"])('core/paragraph'));
    }
  }));
};

function RichTextVisibilityHelper(_ref) {
  var isHidden = _ref.isHidden,
      richTextProps = Object(objectWithoutProperties["a" /* default */])(_ref, ["isHidden"]);

  return isHidden ? Object(external_this_wp_element_["createElement"])(external_this_wp_components_["VisuallyHidden"], Object(esm_extends["a" /* default */])({
    as: external_this_wp_blockEditor_["RichText"]
  }, richTextProps)) : Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], richTextProps);
}

/* harmony default export */ var gallery_gallery = (gallery_Gallery);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/gallery/edit.js











function gallery_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function gallery_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { gallery_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { gallery_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */




var MAX_COLUMNS = 8;
var linkOptions = [{
  value: 'attachment',
  label: Object(external_this_wp_i18n_["__"])('Attachment Page')
}, {
  value: 'media',
  label: Object(external_this_wp_i18n_["__"])('Media File')
}, {
  value: 'none',
  label: Object(external_this_wp_i18n_["__"])('None')
}];
var edit_ALLOWED_MEDIA_TYPES = ['image'];
var PLACEHOLDER_TEXT = external_this_wp_element_["Platform"].select({
  web: Object(external_this_wp_i18n_["__"])('Drag images, upload new ones or select files from your library.'),
  native: Object(external_this_wp_i18n_["__"])('ADD MEDIA')
});
var MOBILE_CONTROL_PROPS_RANGE_CONTROL = external_this_wp_element_["Platform"].select({
  web: {},
  native: {
    type: 'stepper'
  }
});

var edit_GalleryEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(GalleryEdit, _Component);

  var _super = edit_createSuper(GalleryEdit);

  function GalleryEdit() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, GalleryEdit);

    _this = _super.apply(this, arguments);
    _this.onSelectImage = _this.onSelectImage.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onSelectImages = _this.onSelectImages.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onDeselectImage = _this.onDeselectImage.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.setLinkTo = _this.setLinkTo.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.setColumnsNumber = _this.setColumnsNumber.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.toggleImageCrop = _this.toggleImageCrop.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onMove = _this.onMove.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onMoveForward = _this.onMoveForward.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onMoveBackward = _this.onMoveBackward.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onRemoveImage = _this.onRemoveImage.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onUploadError = _this.onUploadError.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.setImageAttributes = _this.setImageAttributes.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.setAttributes = _this.setAttributes.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onFocusGalleryCaption = _this.onFocusGalleryCaption.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.getImagesSizeOptions = _this.getImagesSizeOptions.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.updateImagesSize = _this.updateImagesSize.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      selectedImage: null,
      attachmentCaptions: null
    };
    return _this;
  }

  Object(createClass["a" /* default */])(GalleryEdit, [{
    key: "setAttributes",
    value: function setAttributes(attributes) {
      if (attributes.ids) {
        throw new Error('The "ids" attribute should not be changed directly. It is managed automatically when "images" attribute changes');
      }

      if (attributes.images) {
        attributes = gallery_edit_objectSpread({}, attributes, {
          // Unlike images[ n ].id which is a string, always ensure the
          // ids array contains numbers as per its attribute type.
          ids: Object(external_this_lodash_["map"])(attributes.images, function (_ref) {
            var id = _ref.id;
            return parseInt(id, 10);
          })
        });
      }

      this.props.setAttributes(attributes);
    }
  }, {
    key: "onSelectImage",
    value: function onSelectImage(index) {
      var _this2 = this;

      return function () {
        if (_this2.state.selectedImage !== index) {
          _this2.setState({
            selectedImage: index
          });
        }
      };
    }
  }, {
    key: "onDeselectImage",
    value: function onDeselectImage(index) {
      var _this3 = this;

      return function () {
        if (_this3.state.selectedImage === index) {
          _this3.setState({
            selectedImage: null
          });
        }
      };
    }
  }, {
    key: "onMove",
    value: function onMove(oldIndex, newIndex) {
      var images = Object(toConsumableArray["a" /* default */])(this.props.attributes.images);

      images.splice(newIndex, 1, this.props.attributes.images[oldIndex]);
      images.splice(oldIndex, 1, this.props.attributes.images[newIndex]);
      this.setState({
        selectedImage: newIndex
      });
      this.setAttributes({
        images: images
      });
    }
  }, {
    key: "onMoveForward",
    value: function onMoveForward(oldIndex) {
      var _this4 = this;

      return function () {
        if (oldIndex === _this4.props.attributes.images.length - 1) {
          return;
        }

        _this4.onMove(oldIndex, oldIndex + 1);
      };
    }
  }, {
    key: "onMoveBackward",
    value: function onMoveBackward(oldIndex) {
      var _this5 = this;

      return function () {
        if (oldIndex === 0) {
          return;
        }

        _this5.onMove(oldIndex, oldIndex - 1);
      };
    }
  }, {
    key: "onRemoveImage",
    value: function onRemoveImage(index) {
      var _this6 = this;

      return function () {
        var images = Object(external_this_lodash_["filter"])(_this6.props.attributes.images, function (img, i) {
          return index !== i;
        });
        var columns = _this6.props.attributes.columns;

        _this6.setState({
          selectedImage: null
        });

        _this6.setAttributes({
          images: images,
          columns: columns ? Math.min(images.length, columns) : columns
        });
      };
    }
  }, {
    key: "selectCaption",
    value: function selectCaption(newImage, images, attachmentCaptions) {
      // The image id in both the images and attachmentCaptions arrays is a
      // string, so ensure comparison works correctly by converting the
      // newImage.id to a string.
      var newImageId = Object(external_this_lodash_["toString"])(newImage.id);
      var currentImage = Object(external_this_lodash_["find"])(images, {
        id: newImageId
      });
      var currentImageCaption = currentImage ? currentImage.caption : newImage.caption;

      if (!attachmentCaptions) {
        return currentImageCaption;
      }

      var attachment = Object(external_this_lodash_["find"])(attachmentCaptions, {
        id: newImageId
      }); // if the attachment caption is updated

      if (attachment && attachment.caption !== newImage.caption) {
        return newImage.caption;
      }

      return currentImageCaption;
    }
  }, {
    key: "onSelectImages",
    value: function onSelectImages(newImages) {
      var _this7 = this;

      var _this$props$attribute = this.props.attributes,
          columns = _this$props$attribute.columns,
          images = _this$props$attribute.images,
          sizeSlug = _this$props$attribute.sizeSlug;
      var attachmentCaptions = this.state.attachmentCaptions;
      this.setState({
        attachmentCaptions: newImages.map(function (newImage) {
          return {
            // Store the attachmentCaption id as a string for consistency
            // with the type of the id in the images attribute.
            id: Object(external_this_lodash_["toString"])(newImage.id),
            caption: newImage.caption
          };
        })
      });
      this.setAttributes({
        images: newImages.map(function (newImage) {
          return gallery_edit_objectSpread({}, shared_pickRelevantMediaFiles(newImage, sizeSlug), {
            caption: _this7.selectCaption(newImage, images, attachmentCaptions),
            // The id value is stored in a data attribute, so when the
            // block is parsed it's converted to a string. Converting
            // to a string here ensures it's type is consistent.
            id: Object(external_this_lodash_["toString"])(newImage.id)
          });
        }),
        columns: columns ? Math.min(newImages.length, columns) : columns
      });
    }
  }, {
    key: "onUploadError",
    value: function onUploadError(message) {
      var noticeOperations = this.props.noticeOperations;
      noticeOperations.removeAllNotices();
      noticeOperations.createErrorNotice(message);
    }
  }, {
    key: "setLinkTo",
    value: function setLinkTo(value) {
      this.setAttributes({
        linkTo: value
      });
    }
  }, {
    key: "setColumnsNumber",
    value: function setColumnsNumber(value) {
      this.setAttributes({
        columns: value
      });
    }
  }, {
    key: "toggleImageCrop",
    value: function toggleImageCrop() {
      this.setAttributes({
        imageCrop: !this.props.attributes.imageCrop
      });
    }
  }, {
    key: "getImageCropHelp",
    value: function getImageCropHelp(checked) {
      return checked ? Object(external_this_wp_i18n_["__"])('Thumbnails are cropped to align.') : Object(external_this_wp_i18n_["__"])('Thumbnails are not cropped.');
    }
  }, {
    key: "onFocusGalleryCaption",
    value: function onFocusGalleryCaption() {
      this.setState({
        selectedImage: null
      });
    }
  }, {
    key: "setImageAttributes",
    value: function setImageAttributes(index, attributes) {
      var images = this.props.attributes.images;
      var setAttributes = this.setAttributes;

      if (!images[index]) {
        return;
      }

      setAttributes({
        images: [].concat(Object(toConsumableArray["a" /* default */])(images.slice(0, index)), [gallery_edit_objectSpread({}, images[index], {}, attributes)], Object(toConsumableArray["a" /* default */])(images.slice(index + 1)))
      });
    }
  }, {
    key: "getImagesSizeOptions",
    value: function getImagesSizeOptions() {
      var _this$props = this.props,
          imageSizes = _this$props.imageSizes,
          resizedImages = _this$props.resizedImages;
      return Object(external_this_lodash_["map"])(Object(external_this_lodash_["filter"])(imageSizes, function (_ref2) {
        var slug = _ref2.slug;
        return Object(external_this_lodash_["some"])(resizedImages, function (sizes) {
          return sizes[slug];
        });
      }), function (_ref3) {
        var name = _ref3.name,
            slug = _ref3.slug;
        return {
          value: slug,
          label: name
        };
      });
    }
  }, {
    key: "updateImagesSize",
    value: function updateImagesSize(sizeSlug) {
      var _this$props2 = this.props,
          images = _this$props2.attributes.images,
          resizedImages = _this$props2.resizedImages;
      var updatedImages = Object(external_this_lodash_["map"])(images, function (image) {
        if (!image.id) {
          return image;
        }

        var url = Object(external_this_lodash_["get"])(resizedImages, [parseInt(image.id, 10), sizeSlug]);
        return gallery_edit_objectSpread({}, image, {}, url && {
          url: url
        });
      });
      this.setAttributes({
        images: updatedImages,
        sizeSlug: sizeSlug
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          attributes = _this$props3.attributes,
          mediaUpload = _this$props3.mediaUpload;
      var images = attributes.images;

      if (external_this_wp_element_["Platform"].OS === 'web' && images && images.length > 0 && Object(external_this_lodash_["every"])(images, function (_ref4) {
        var url = _ref4.url;
        return Object(external_this_wp_blob_["isBlobURL"])(url);
      })) {
        var filesList = Object(external_this_lodash_["map"])(images, function (_ref5) {
          var url = _ref5.url;
          return Object(external_this_wp_blob_["getBlobByURL"])(url);
        });
        Object(external_this_lodash_["forEach"])(images, function (_ref6) {
          var url = _ref6.url;
          return Object(external_this_wp_blob_["revokeBlobURL"])(url);
        });
        mediaUpload({
          filesList: filesList,
          onFileChange: this.onSelectImages,
          allowedTypes: ['image']
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Deselect images when deselecting the block
      if (!this.props.isSelected && prevProps.isSelected) {
        this.setState({
          selectedImage: null,
          captionSelected: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          attributes = _this$props4.attributes,
          className = _this$props4.className,
          isSelected = _this$props4.isSelected,
          noticeUI = _this$props4.noticeUI,
          insertBlocksAfter = _this$props4.insertBlocksAfter;
      var _attributes$columns = attributes.columns,
          columns = _attributes$columns === void 0 ? defaultColumnsNumber(attributes) : _attributes$columns,
          imageCrop = attributes.imageCrop,
          images = attributes.images,
          linkTo = attributes.linkTo,
          sizeSlug = attributes.sizeSlug;
      var hasImages = !!images.length;
      var mediaPlaceholder = Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaPlaceholder"], {
        addToGallery: hasImages,
        isAppender: hasImages,
        className: className,
        disableMediaButtons: hasImages && !isSelected,
        icon: !hasImages && sharedIcon,
        labels: {
          title: !hasImages && Object(external_this_wp_i18n_["__"])('Gallery'),
          instructions: !hasImages && PLACEHOLDER_TEXT
        },
        onSelect: this.onSelectImages,
        accept: "image/*",
        allowedTypes: edit_ALLOWED_MEDIA_TYPES,
        multiple: true,
        value: images,
        onError: this.onUploadError,
        notices: hasImages ? undefined : noticeUI,
        onFocus: this.props.onFocus
      });

      if (!hasImages) {
        return mediaPlaceholder;
      }

      var imageSizeOptions = this.getImagesSizeOptions();
      var shouldShowSizeOptions = hasImages && !Object(external_this_lodash_["isEmpty"])(imageSizeOptions);
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
        title: Object(external_this_wp_i18n_["__"])('Gallery settings')
      }, images.length > 1 && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], Object(esm_extends["a" /* default */])({
        label: Object(external_this_wp_i18n_["__"])('Columns'),
        value: columns,
        onChange: this.setColumnsNumber,
        min: 1,
        max: Math.min(MAX_COLUMNS, images.length)
      }, MOBILE_CONTROL_PROPS_RANGE_CONTROL, {
        required: true
      })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Crop images'),
        checked: !!imageCrop,
        onChange: this.toggleImageCrop,
        help: this.getImageCropHelp
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SelectControl"], {
        label: Object(external_this_wp_i18n_["__"])('Link to'),
        value: linkTo,
        onChange: this.setLinkTo,
        options: linkOptions
      }), shouldShowSizeOptions && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SelectControl"], {
        label: Object(external_this_wp_i18n_["__"])('Image size'),
        value: sizeSlug,
        options: imageSizeOptions,
        onChange: this.updateImagesSize
      }))), noticeUI, Object(external_this_wp_element_["createElement"])(gallery_gallery, Object(esm_extends["a" /* default */])({}, this.props, {
        selectedImage: this.state.selectedImage,
        mediaPlaceholder: mediaPlaceholder,
        onMoveBackward: this.onMoveBackward,
        onMoveForward: this.onMoveForward,
        onRemoveImage: this.onRemoveImage,
        onSelectImage: this.onSelectImage,
        onDeselectImage: this.onDeselectImage,
        onSetImageAttributes: this.setImageAttributes,
        onFocusGalleryCaption: this.onFocusGalleryCaption,
        insertBlocksAfter: insertBlocksAfter
      })));
    }
  }]);

  return GalleryEdit;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var gallery_edit = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, _ref7) {
  var ids = _ref7.attributes.ids,
      isSelected = _ref7.isSelected;

  var _select = select('core'),
      getMedia = _select.getMedia;

  var _select2 = select('core/block-editor'),
      getSettings = _select2.getSettings;

  var _getSettings = getSettings(),
      imageSizes = _getSettings.imageSizes,
      mediaUpload = _getSettings.mediaUpload;

  var resizedImages = {};

  if (isSelected) {
    resizedImages = Object(external_this_lodash_["reduce"])(ids, function (currentResizedImages, id) {
      if (!id) {
        return currentResizedImages;
      }

      var image = getMedia(id);
      var sizes = Object(external_this_lodash_["reduce"])(imageSizes, function (currentSizes, size) {
        var defaultUrl = Object(external_this_lodash_["get"])(image, ['sizes', size.slug, 'url']);
        var mediaDetailsUrl = Object(external_this_lodash_["get"])(image, ['media_details', 'sizes', size.slug, 'source_url']);
        return gallery_edit_objectSpread({}, currentSizes, Object(defineProperty["a" /* default */])({}, size.slug, defaultUrl || mediaDetailsUrl));
      }, {});
      return gallery_edit_objectSpread({}, currentResizedImages, Object(defineProperty["a" /* default */])({}, parseInt(id, 10), sizes));
    }, {});
  }

  return {
    imageSizes: imageSizes,
    mediaUpload: mediaUpload,
    resizedImages: resizedImages
  };
}), external_this_wp_components_["withNotices"], Object(external_this_wp_viewport_["withViewportMatch"])({
  isNarrow: '< small'
})])(edit_GalleryEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/gallery/save.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function gallery_save_save(_ref) {
  var attributes = _ref.attributes;
  var images = attributes.images,
      _attributes$columns = attributes.columns,
      columns = _attributes$columns === void 0 ? defaultColumnsNumber(attributes) : _attributes$columns,
      imageCrop = attributes.imageCrop,
      caption = attributes.caption,
      linkTo = attributes.linkTo;
  return Object(external_this_wp_element_["createElement"])("figure", {
    className: "columns-".concat(columns, " ").concat(imageCrop ? 'is-cropped' : '')
  }, Object(external_this_wp_element_["createElement"])("ul", {
    className: "blocks-gallery-grid"
  }, images.map(function (image) {
    var href;

    switch (linkTo) {
      case 'media':
        href = image.fullUrl || image.url;
        break;

      case 'attachment':
        href = image.link;
        break;
    }

    var img = Object(external_this_wp_element_["createElement"])("img", {
      src: image.url,
      alt: image.alt,
      "data-id": image.id,
      "data-full-url": image.fullUrl,
      "data-link": image.link,
      className: image.id ? "wp-image-".concat(image.id) : null
    });
    return Object(external_this_wp_element_["createElement"])("li", {
      key: image.id || image.url,
      className: "blocks-gallery-item"
    }, Object(external_this_wp_element_["createElement"])("figure", null, href ? Object(external_this_wp_element_["createElement"])("a", {
      href: href
    }, img) : img, !external_this_wp_blockEditor_["RichText"].isEmpty(image.caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "figcaption",
      className: "blocks-gallery-item__caption",
      value: image.caption
    })));
  })), !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: "figcaption",
    className: "blocks-gallery-caption",
    value: caption
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/gallery/transforms.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



var parseShortcodeIds = function parseShortcodeIds(ids) {
  if (!ids) {
    return [];
  }

  return ids.split(',').map(function (id) {
    return parseInt(id, 10);
  });
};

var gallery_transforms_transforms = {
  from: [{
    type: 'block',
    isMultiBlock: true,
    blocks: ['core/image'],
    transform: function transform(attributes) {
      // Init the align and size from the first item which may be either the placeholder or an image.
      var _attributes$ = attributes[0],
          align = _attributes$.align,
          sizeSlug = _attributes$.sizeSlug; // Loop through all the images and check if they have the same align and size.

      align = Object(external_this_lodash_["every"])(attributes, ['align', align]) ? align : undefined;
      sizeSlug = Object(external_this_lodash_["every"])(attributes, ['sizeSlug', sizeSlug]) ? sizeSlug : undefined;
      var validImages = Object(external_this_lodash_["filter"])(attributes, function (_ref) {
        var url = _ref.url;
        return url;
      });
      return Object(external_this_wp_blocks_["createBlock"])('core/gallery', {
        images: validImages.map(function (_ref2) {
          var id = _ref2.id,
              url = _ref2.url,
              alt = _ref2.alt,
              caption = _ref2.caption;
          return {
            id: Object(external_this_lodash_["toString"])(id),
            url: url,
            alt: alt,
            caption: caption
          };
        }),
        ids: validImages.map(function (_ref3) {
          var id = _ref3.id;
          return parseInt(id, 10);
        }),
        align: align,
        sizeSlug: sizeSlug
      });
    }
  }, {
    type: 'shortcode',
    tag: 'gallery',
    attributes: {
      images: {
        type: 'array',
        shortcode: function shortcode(_ref4) {
          var ids = _ref4.named.ids;
          return parseShortcodeIds(ids).map(function (id) {
            return {
              id: Object(external_this_lodash_["toString"])(id)
            };
          });
        }
      },
      ids: {
        type: 'array',
        shortcode: function shortcode(_ref5) {
          var ids = _ref5.named.ids;
          return parseShortcodeIds(ids);
        }
      },
      columns: {
        type: 'number',
        shortcode: function shortcode(_ref6) {
          var _ref6$named$columns = _ref6.named.columns,
              columns = _ref6$named$columns === void 0 ? '3' : _ref6$named$columns;
          return parseInt(columns, 10);
        }
      },
      linkTo: {
        type: 'string',
        shortcode: function shortcode(_ref7) {
          var _ref7$named$link = _ref7.named.link,
              link = _ref7$named$link === void 0 ? 'attachment' : _ref7$named$link;
          return link === 'file' ? 'media' : link;
        }
      }
    }
  }, {
    // When created by drag and dropping multiple files on an insertion point
    type: 'files',
    isMatch: function isMatch(files) {
      return files.length !== 1 && Object(external_this_lodash_["every"])(files, function (file) {
        return file.type.indexOf('image/') === 0;
      });
    },
    transform: function transform(files) {
      var block = Object(external_this_wp_blocks_["createBlock"])('core/gallery', {
        images: files.map(function (file) {
          return shared_pickRelevantMediaFiles({
            url: Object(external_this_wp_blob_["createBlobURL"])(file)
          });
        })
      });
      return block;
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/image'],
    transform: function transform(_ref8) {
      var images = _ref8.images,
          align = _ref8.align,
          sizeSlug = _ref8.sizeSlug,
          ids = _ref8.ids;

      if (images.length > 0) {
        return images.map(function (_ref9, index) {
          var url = _ref9.url,
              alt = _ref9.alt,
              caption = _ref9.caption;
          return Object(external_this_wp_blocks_["createBlock"])('core/image', {
            id: ids[index],
            url: url,
            alt: alt,
            caption: caption,
            align: align,
            sizeSlug: sizeSlug
          });
        });
      }

      return Object(external_this_wp_blocks_["createBlock"])('core/image', {
        align: align
      });
    }
  }]
};
/* harmony default export */ var gallery_transforms = (gallery_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/gallery/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var gallery_metadata = {
  name: "core/gallery",
  category: "media",
  attributes: {
    images: {
      type: "array",
      "default": [],
      source: "query",
      selector: ".blocks-gallery-item",
      query: {
        url: {
          type: "string",
          source: "attribute",
          selector: "img",
          attribute: "src"
        },
        fullUrl: {
          type: "string",
          source: "attribute",
          selector: "img",
          attribute: "data-full-url"
        },
        link: {
          type: "string",
          source: "attribute",
          selector: "img",
          attribute: "data-link"
        },
        alt: {
          type: "string",
          source: "attribute",
          selector: "img",
          attribute: "alt",
          "default": ""
        },
        id: {
          type: "string",
          source: "attribute",
          selector: "img",
          attribute: "data-id"
        },
        caption: {
          type: "string",
          source: "html",
          selector: ".blocks-gallery-item__caption"
        }
      }
    },
    ids: {
      type: "array",
      items: {
        type: "number"
      },
      "default": []
    },
    columns: {
      type: "number",
      minimum: 1,
      maximum: 8
    },
    caption: {
      type: "string",
      source: "html",
      selector: ".blocks-gallery-caption"
    },
    imageCrop: {
      type: "boolean",
      "default": true
    },
    linkTo: {
      type: "string",
      "default": "none"
    },
    sizeSlug: {
      type: "string",
      "default": "large"
    }
  },
  supports: {
    anchor: true,
    align: true
  }
};


var gallery_name = gallery_metadata.name;

var gallery_settings = {
  title: Object(external_this_wp_i18n_["__"])('Gallery'),
  description: Object(external_this_wp_i18n_["__"])('Display multiple images in a rich gallery.'),
  icon: library_gallery,
  keywords: [Object(external_this_wp_i18n_["__"])('images'), Object(external_this_wp_i18n_["__"])('photos')],
  example: {
    attributes: {
      columns: 2,
      images: [{
        url: 'https://s.w.org/images/core/5.3/Glacial_lakes%2C_Bhutan.jpg'
      }, {
        url: 'https://s.w.org/images/core/5.3/Sediment_off_the_Yucatan_Peninsula.jpg'
      }]
    }
  },
  transforms: gallery_transforms,
  edit: gallery_edit,
  save: gallery_save_save,
  deprecated: gallery_deprecated
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/archive.js


/**
 * WordPress dependencies
 */

var archive = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M19 6.2h-5.9l-.6-1.1c-.3-.7-1-1.1-1.8-1.1H5c-1.1 0-2 .9-2 2v11.8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.2c0-1.1-.9-2-2-2zm.5 11.6c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h5.8c.2 0 .4.1.4.3l1 2H19c.3 0 .5.2.5.5v9.5zM8 12.8h8v-1.5H8v1.5zm0 3h8v-1.5H8v1.5z"
}));
/* harmony default export */ var library_archive = (archive);

// EXTERNAL MODULE: external {"this":["wp","serverSideRender"]}
var external_this_wp_serverSideRender_ = __webpack_require__(83);
var external_this_wp_serverSideRender_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_serverSideRender_);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/archives/edit.js


/**
 * WordPress dependencies
 */




function ArchivesEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var showPostCounts = attributes.showPostCounts,
      displayAsDropdown = attributes.displayAsDropdown;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Archives settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Display as dropdown'),
    checked: displayAsDropdown,
    onChange: function onChange() {
      return setAttributes({
        displayAsDropdown: !displayAsDropdown
      });
    }
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Show post counts'),
    checked: showPostCounts,
    onChange: function onChange() {
      return setAttributes({
        showPostCounts: !showPostCounts
      });
    }
  }))), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Disabled"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_serverSideRender_default.a, {
    block: "core/archives",
    attributes: attributes
  })));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/archives/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

var archives_metadata = {
  name: "core/archives",
  category: "widgets",
  attributes: {
    align: {
      type: "string",
      "enum": ["left", "center", "right", "wide", "full"]
    },
    className: {
      type: "string"
    },
    displayAsDropdown: {
      type: "boolean",
      "default": false
    },
    showPostCounts: {
      type: "boolean",
      "default": false
    }
  },
  supports: {
    align: true,
    html: false
  }
};

var archives_name = archives_metadata.name;

var archives_settings = {
  title: Object(external_this_wp_i18n_["__"])('Archives'),
  description: Object(external_this_wp_i18n_["__"])('Display a monthly archive of your posts.'),
  icon: library_archive,
  example: {},
  edit: ArchivesEdit
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/audio.js


/**
 * WordPress dependencies
 */

var audio = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M17.7 4.3c-1.2 0-2.8 0-3.8 1-.6.6-.9 1.5-.9 2.6V14c-.6-.6-1.5-1-2.5-1C8.6 13 7 14.6 7 16.5S8.6 20 10.5 20c1.5 0 2.8-1 3.3-2.3.5-.8.7-1.8.7-2.5V7.9c0-.7.2-1.2.5-1.6.6-.6 1.8-.6 2.8-.6h.3V4.3h-.4z"
}));
/* harmony default export */ var library_audio = (audio);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/audio/deprecated.js


/**
 * WordPress dependencies
 */

/* harmony default export */ var audio_deprecated = ([{
  attributes: {
    src: {
      type: 'string',
      source: 'attribute',
      selector: 'audio',
      attribute: 'src'
    },
    caption: {
      type: 'string',
      source: 'html',
      selector: 'figcaption'
    },
    id: {
      type: 'number'
    },
    autoplay: {
      type: 'boolean',
      source: 'attribute',
      selector: 'audio',
      attribute: 'autoplay'
    },
    loop: {
      type: 'boolean',
      source: 'attribute',
      selector: 'audio',
      attribute: 'loop'
    },
    preload: {
      type: 'string',
      source: 'attribute',
      selector: 'audio',
      attribute: 'preload'
    }
  },
  supports: {
    align: true
  },
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var autoplay = attributes.autoplay,
        caption = attributes.caption,
        loop = attributes.loop,
        preload = attributes.preload,
        src = attributes.src;
    return Object(external_this_wp_element_["createElement"])("figure", null, Object(external_this_wp_element_["createElement"])("audio", {
      controls: "controls",
      src: src,
      autoPlay: autoplay,
      loop: loop,
      preload: preload
    }), !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "figcaption",
      value: caption
    }));
  }
}]);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/audio/edit.js




/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


var audio_edit_ALLOWED_MEDIA_TYPES = ['audio'];

function AudioEdit(_ref) {
  var attributes = _ref.attributes,
      noticeOperations = _ref.noticeOperations,
      setAttributes = _ref.setAttributes,
      onReplace = _ref.onReplace,
      isSelected = _ref.isSelected,
      noticeUI = _ref.noticeUI,
      insertBlocksAfter = _ref.insertBlocksAfter;
  var id = attributes.id,
      autoplay = attributes.autoplay,
      caption = attributes.caption,
      loop = attributes.loop,
      preload = attributes.preload,
      src = attributes.src;
  var mediaUpload = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select('core/block-editor'),
        getSettings = _select.getSettings;

    return getSettings().mediaUpload;
  }, []);
  Object(external_this_wp_element_["useEffect"])(function () {
    if (!id && Object(external_this_wp_blob_["isBlobURL"])(src)) {
      var file = Object(external_this_wp_blob_["getBlobByURL"])(src);

      if (file) {
        mediaUpload({
          filesList: [file],
          onFileChange: function onFileChange(_ref2) {
            var _ref3 = Object(slicedToArray["a" /* default */])(_ref2, 1),
                _ref3$ = _ref3[0],
                mediaId = _ref3$.id,
                url = _ref3$.url;

            setAttributes({
              id: mediaId,
              src: url
            });
          },
          onError: function onError(e) {
            setAttributes({
              src: undefined,
              id: undefined
            });
            noticeOperations.createErrorNotice(e);
          },
          allowedTypes: audio_edit_ALLOWED_MEDIA_TYPES
        });
      }
    }
  }, []);

  function toggleAttribute(attribute) {
    return function (newValue) {
      setAttributes(Object(defineProperty["a" /* default */])({}, attribute, newValue));
    };
  }

  function onSelectURL(newSrc) {
    // Set the block's src from the edit component's state, and switch off
    // the editing UI.
    if (newSrc !== src) {
      // Check if there's an embed block that handles this URL.
      var embedBlock = util_createUpgradedEmbedBlock({
        attributes: {
          url: newSrc
        }
      });

      if (undefined !== embedBlock) {
        onReplace(embedBlock);
        return;
      }

      setAttributes({
        src: newSrc,
        id: undefined
      });
    }
  }

  function onUploadError(message) {
    noticeOperations.removeAllNotices();
    noticeOperations.createErrorNotice(message);
  }

  function getAutoplayHelp(checked) {
    return checked ? Object(external_this_wp_i18n_["__"])('Note: Autoplaying audio may cause usability issues for some visitors.') : null;
  } // const { setAttributes, isSelected, noticeUI } = this.props;


  function onSelectAudio(media) {
    if (!media || !media.url) {
      // in this case there was an error and we should continue in the editing state
      // previous attributes should be removed because they may be temporary blob urls
      setAttributes({
        src: undefined,
        id: undefined
      });
      return;
    } // sets the block's attribute and updates the edit component from the
    // selected media, then switches off the editing UI


    setAttributes({
      src: media.url,
      id: media.id
    });
  }

  if (!src) {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].div, null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaPlaceholder"], {
      icon: Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
        icon: library_audio
      }),
      onSelect: onSelectAudio,
      onSelectURL: onSelectURL,
      accept: "audio/*",
      allowedTypes: audio_edit_ALLOWED_MEDIA_TYPES,
      value: attributes,
      notices: noticeUI,
      onError: onUploadError
    }));
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaReplaceFlow"], {
    mediaId: id,
    mediaURL: src,
    allowedTypes: audio_edit_ALLOWED_MEDIA_TYPES,
    accept: "audio/*",
    onSelect: onSelectAudio,
    onSelectURL: onSelectURL,
    onError: onUploadError
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Audio settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Autoplay'),
    onChange: toggleAttribute('autoplay'),
    checked: autoplay,
    help: getAutoplayHelp
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Loop'),
    onChange: toggleAttribute('loop'),
    checked: loop
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SelectControl"], {
    label: Object(external_this_wp_i18n_["__"])('Preload'),
    value: preload || '' // `undefined` is required for the preload attribute to be unset.
    ,
    onChange: function onChange(value) {
      return setAttributes({
        preload: value || undefined
      });
    },
    options: [{
      value: '',
      label: Object(external_this_wp_i18n_["__"])('Browser default')
    }, {
      value: 'auto',
      label: Object(external_this_wp_i18n_["__"])('Auto')
    }, {
      value: 'metadata',
      label: Object(external_this_wp_i18n_["__"])('Metadata')
    }, {
      value: 'none',
      label: Object(external_this_wp_i18n_["__"])('None')
    }]
  }))), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].figure, null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Disabled"], null, Object(external_this_wp_element_["createElement"])("audio", {
    controls: "controls",
    src: src
  })), (!external_this_wp_blockEditor_["RichText"].isEmpty(caption) || isSelected) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    tagName: "figcaption",
    placeholder: Object(external_this_wp_i18n_["__"])('Write caption…'),
    value: caption,
    onChange: function onChange(value) {
      return setAttributes({
        caption: value
      });
    },
    inlineToolbar: true,
    __unstableOnSplitAtEnd: function __unstableOnSplitAtEnd() {
      return insertBlocksAfter(Object(external_this_wp_blocks_["createBlock"])('core/paragraph'));
    }
  })));
}

/* harmony default export */ var audio_edit = (Object(external_this_wp_components_["withNotices"])(AudioEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/audio/save.js


/**
 * WordPress dependencies
 */

function audio_save_save(_ref) {
  var attributes = _ref.attributes;
  var autoplay = attributes.autoplay,
      caption = attributes.caption,
      loop = attributes.loop,
      preload = attributes.preload,
      src = attributes.src;
  return src && Object(external_this_wp_element_["createElement"])("figure", null, Object(external_this_wp_element_["createElement"])("audio", {
    controls: "controls",
    src: src,
    autoPlay: autoplay,
    loop: loop,
    preload: preload
  }), !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: "figcaption",
    value: caption
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/audio/transforms.js
/**
 * WordPress dependencies
 */


var audio_transforms_transforms = {
  from: [{
    type: 'files',
    isMatch: function isMatch(files) {
      return files.length === 1 && files[0].type.indexOf('audio/') === 0;
    },
    transform: function transform(files) {
      var file = files[0]; // We don't need to upload the media directly here
      // It's already done as part of the `componentDidMount`
      // in the audio block

      var block = Object(external_this_wp_blocks_["createBlock"])('core/audio', {
        src: Object(external_this_wp_blob_["createBlobURL"])(file)
      });
      return block;
    }
  }, {
    type: 'shortcode',
    tag: 'audio',
    attributes: {
      src: {
        type: 'string',
        shortcode: function shortcode(_ref) {
          var src = _ref.named.src;
          return src;
        }
      },
      loop: {
        type: 'string',
        shortcode: function shortcode(_ref2) {
          var loop = _ref2.named.loop;
          return loop;
        }
      },
      autoplay: {
        type: 'string',
        shortcode: function shortcode(_ref3) {
          var autoplay = _ref3.named.autoplay;
          return autoplay;
        }
      },
      preload: {
        type: 'string',
        shortcode: function shortcode(_ref4) {
          var preload = _ref4.named.preload;
          return preload;
        }
      }
    }
  }]
};
/* harmony default export */ var audio_transforms = (audio_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/audio/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var audio_metadata = {
  name: "core/audio",
  category: "media",
  attributes: {
    src: {
      type: "string",
      source: "attribute",
      selector: "audio",
      attribute: "src"
    },
    caption: {
      type: "string",
      source: "html",
      selector: "figcaption"
    },
    id: {
      type: "number"
    },
    autoplay: {
      type: "boolean",
      source: "attribute",
      selector: "audio",
      attribute: "autoplay"
    },
    loop: {
      type: "boolean",
      source: "attribute",
      selector: "audio",
      attribute: "loop"
    },
    preload: {
      type: "string",
      source: "attribute",
      selector: "audio",
      attribute: "preload"
    }
  },
  supports: {
    anchor: true,
    align: true,
    lightBlockWrapper: true
  }
};


var audio_name = audio_metadata.name;

var audio_settings = {
  title: Object(external_this_wp_i18n_["__"])('Audio'),
  description: Object(external_this_wp_i18n_["__"])('Embed a simple audio player.'),
  keywords: [Object(external_this_wp_i18n_["__"])('music'), Object(external_this_wp_i18n_["__"])('sound'), Object(external_this_wp_i18n_["__"])('podcast'), Object(external_this_wp_i18n_["__"])('recording')],
  icon: library_audio,
  transforms: audio_transforms,
  deprecated: audio_deprecated,
  edit: audio_edit,
  save: audio_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/button.js


/**
 * WordPress dependencies
 */

var button_button = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 13h8v-1.5H8V13z"
}));
/* harmony default export */ var library_button = (button_button);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/buttons/transforms.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

var _name$category$suppor = {
  name: "core/buttons",
  category: "design",
  supports: {
    anchor: true,
    align: true,
    alignWide: false,
    lightBlockWrapper: true
  }
},
    buttons_transforms_name = _name$category$suppor.name;
var buttons_transforms_transforms = {
  from: [{
    type: 'block',
    isMultiBlock: true,
    blocks: ['core/button'],
    transform: function transform(buttons) {
      return (// Creates the buttons block
        Object(external_this_wp_blocks_["createBlock"])(buttons_transforms_name, {}, // Loop the selected buttons
        buttons.map(function (attributes) {
          return (// Create singular button in the buttons block
            Object(external_this_wp_blocks_["createBlock"])('core/button', attributes)
          );
        }))
      );
    }
  }]
};
/* harmony default export */ var buttons_transforms = (buttons_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/button/deprecated.js



function button_deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function button_deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { button_deprecated_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { button_deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



var deprecated_migrateCustomColorsAndGradients = function migrateCustomColorsAndGradients(attributes) {
  if (!attributes.customTextColor && !attributes.customBackgroundColor && !attributes.customGradient) {
    return attributes;
  }

  var style = {
    color: {}
  };

  if (attributes.customTextColor) {
    style.color.text = attributes.customTextColor;
  }

  if (attributes.customBackgroundColor) {
    style.color.background = attributes.customBackgroundColor;
  }

  if (attributes.customGradient) {
    style.color.gradient = attributes.customGradient;
  }

  return button_deprecated_objectSpread({}, Object(external_this_lodash_["omit"])(attributes, ['customTextColor', 'customBackgroundColor', 'customGradient']), {
    style: style
  });
};

var deprecated_oldColorsMigration = function oldColorsMigration(attributes) {
  return deprecated_migrateCustomColorsAndGradients(Object(external_this_lodash_["omit"])(button_deprecated_objectSpread({}, attributes, {
    customTextColor: attributes.textColor && '#' === attributes.textColor[0] ? attributes.textColor : undefined,
    customBackgroundColor: attributes.color && '#' === attributes.color[0] ? attributes.color : undefined
  }), ['color', 'textColor']));
};

var button_deprecated_blockAttributes = {
  url: {
    type: 'string',
    source: 'attribute',
    selector: 'a',
    attribute: 'href'
  },
  title: {
    type: 'string',
    source: 'attribute',
    selector: 'a',
    attribute: 'title'
  },
  text: {
    type: 'string',
    source: 'html',
    selector: 'a'
  }
};
var button_deprecated_deprecated = [{
  supports: {
    align: true,
    alignWide: false,
    __experimentalColor: {
      gradients: true
    }
  },
  attributes: button_deprecated_objectSpread({}, button_deprecated_blockAttributes, {
    linkTarget: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'target'
    },
    rel: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'rel'
    },
    placeholder: {
      type: 'string'
    },
    borderRadius: {
      type: 'number'
    },
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    gradient: {
      type: 'string'
    },
    style: {
      type: 'object'
    }
  }),
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var borderRadius = attributes.borderRadius,
        linkTarget = attributes.linkTarget,
        rel = attributes.rel,
        text = attributes.text,
        title = attributes.title,
        url = attributes.url;
    var buttonClasses = classnames_default()('wp-block-button__link', {
      'no-border-radius': borderRadius === 0
    });
    var buttonStyle = {
      borderRadius: borderRadius ? borderRadius + 'px' : undefined
    };
    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "a",
      className: buttonClasses,
      href: url,
      title: title,
      style: buttonStyle,
      value: text,
      target: linkTarget,
      rel: rel
    });
  }
}, {
  supports: {
    align: true,
    alignWide: false
  },
  attributes: button_deprecated_objectSpread({}, button_deprecated_blockAttributes, {
    linkTarget: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'target'
    },
    rel: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'rel'
    },
    placeholder: {
      type: 'string'
    },
    borderRadius: {
      type: 'number'
    },
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    customGradient: {
      type: 'string'
    },
    gradient: {
      type: 'string'
    }
  }),
  isEligible: function isEligible(attributes) {
    return !!attributes.customTextColor || !!attributes.customBackgroundColor || !!attributes.customGradient;
  },
  migrate: deprecated_migrateCustomColorsAndGradients,
  save: function save(_ref2) {
    var _classnames;

    var attributes = _ref2.attributes;
    var backgroundColor = attributes.backgroundColor,
        borderRadius = attributes.borderRadius,
        customBackgroundColor = attributes.customBackgroundColor,
        customTextColor = attributes.customTextColor,
        customGradient = attributes.customGradient,
        linkTarget = attributes.linkTarget,
        gradient = attributes.gradient,
        rel = attributes.rel,
        text = attributes.text,
        textColor = attributes.textColor,
        title = attributes.title,
        url = attributes.url;
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var backgroundClass = !customGradient && Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);

    var gradientClass = Object(external_this_wp_blockEditor_["__experimentalGetGradientClass"])(gradient);

    var buttonClasses = classnames_default()('wp-block-button__link', (_classnames = {
      'has-text-color': textColor || customTextColor
    }, Object(defineProperty["a" /* default */])(_classnames, textClass, textClass), Object(defineProperty["a" /* default */])(_classnames, 'has-background', backgroundColor || customBackgroundColor || customGradient || gradient), Object(defineProperty["a" /* default */])(_classnames, backgroundClass, backgroundClass), Object(defineProperty["a" /* default */])(_classnames, 'no-border-radius', borderRadius === 0), Object(defineProperty["a" /* default */])(_classnames, gradientClass, gradientClass), _classnames));
    var buttonStyle = {
      background: customGradient ? customGradient : undefined,
      backgroundColor: backgroundClass || customGradient || gradient ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      borderRadius: borderRadius ? borderRadius + 'px' : undefined
    }; // The use of a `title` attribute here is soft-deprecated, but still applied
    // if it had already been assigned, for the sake of backward-compatibility.
    // A title will no longer be assigned for new or updated button block links.

    return Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "a",
      className: buttonClasses,
      href: url,
      title: title,
      style: buttonStyle,
      value: text,
      target: linkTarget,
      rel: rel
    }));
  }
}, {
  attributes: button_deprecated_objectSpread({}, button_deprecated_blockAttributes, {
    align: {
      type: 'string',
      default: 'none'
    },
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    linkTarget: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'target'
    },
    rel: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'rel'
    },
    placeholder: {
      type: 'string'
    }
  }),
  isEligible: function isEligible(attribute) {
    return attribute.className && attribute.className.includes('is-style-squared');
  },
  migrate: function migrate(attributes) {
    var newClassName = attributes.className;

    if (newClassName) {
      newClassName = newClassName.replace(/is-style-squared[\s]?/, '').trim();
    }

    return deprecated_migrateCustomColorsAndGradients(button_deprecated_objectSpread({}, attributes, {
      className: newClassName ? newClassName : undefined,
      borderRadius: 0
    }));
  },
  save: function save(_ref3) {
    var _classnames2;

    var attributes = _ref3.attributes;
    var backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        customTextColor = attributes.customTextColor,
        linkTarget = attributes.linkTarget,
        rel = attributes.rel,
        text = attributes.text,
        textColor = attributes.textColor,
        title = attributes.title,
        url = attributes.url;
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var buttonClasses = classnames_default()('wp-block-button__link', (_classnames2 = {
      'has-text-color': textColor || customTextColor
    }, Object(defineProperty["a" /* default */])(_classnames2, textClass, textClass), Object(defineProperty["a" /* default */])(_classnames2, 'has-background', backgroundColor || customBackgroundColor), Object(defineProperty["a" /* default */])(_classnames2, backgroundClass, backgroundClass), _classnames2));
    var buttonStyle = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "a",
      className: buttonClasses,
      href: url,
      title: title,
      style: buttonStyle,
      value: text,
      target: linkTarget,
      rel: rel
    }));
  }
}, {
  attributes: button_deprecated_objectSpread({}, button_deprecated_blockAttributes, {
    align: {
      type: 'string',
      default: 'none'
    },
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    }
  }),
  migrate: deprecated_oldColorsMigration,
  save: function save(_ref4) {
    var _classnames3;

    var attributes = _ref4.attributes;
    var url = attributes.url,
        text = attributes.text,
        title = attributes.title,
        backgroundColor = attributes.backgroundColor,
        textColor = attributes.textColor,
        customBackgroundColor = attributes.customBackgroundColor,
        customTextColor = attributes.customTextColor;
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var buttonClasses = classnames_default()('wp-block-button__link', (_classnames3 = {
      'has-text-color': textColor || customTextColor
    }, Object(defineProperty["a" /* default */])(_classnames3, textClass, textClass), Object(defineProperty["a" /* default */])(_classnames3, 'has-background', backgroundColor || customBackgroundColor), Object(defineProperty["a" /* default */])(_classnames3, backgroundClass, backgroundClass), _classnames3));
    var buttonStyle = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "a",
      className: buttonClasses,
      href: url,
      title: title,
      style: buttonStyle,
      value: text
    }));
  }
}, {
  attributes: button_deprecated_objectSpread({}, button_deprecated_blockAttributes, {
    color: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    align: {
      type: 'string',
      default: 'none'
    }
  }),
  save: function save(_ref5) {
    var attributes = _ref5.attributes;
    var url = attributes.url,
        text = attributes.text,
        title = attributes.title,
        align = attributes.align,
        color = attributes.color,
        textColor = attributes.textColor;
    var buttonStyle = {
      backgroundColor: color,
      color: textColor
    };
    var linkClass = 'wp-block-button__link';
    return Object(external_this_wp_element_["createElement"])("div", {
      className: "align".concat(align)
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "a",
      className: linkClass,
      href: url,
      title: title,
      style: buttonStyle,
      value: text
    }));
  },
  migrate: deprecated_oldColorsMigration
}, {
  attributes: button_deprecated_objectSpread({}, button_deprecated_blockAttributes, {
    color: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    align: {
      type: 'string',
      default: 'none'
    }
  }),
  save: function save(_ref6) {
    var attributes = _ref6.attributes;
    var url = attributes.url,
        text = attributes.text,
        title = attributes.title,
        align = attributes.align,
        color = attributes.color,
        textColor = attributes.textColor;
    return Object(external_this_wp_element_["createElement"])("div", {
      className: "align".concat(align),
      style: {
        backgroundColor: color
      }
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "a",
      href: url,
      title: title,
      style: {
        color: textColor
      },
      value: text
    }));
  },
  migrate: deprecated_oldColorsMigration
}];
/* harmony default export */ var button_deprecated = (button_deprecated_deprecated);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/link.js
var library_link = __webpack_require__(180);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/link-off.js
var link_off = __webpack_require__(205);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/button/color-edit.js




function color_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function color_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { color_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { color_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


var isWebPlatform = external_this_wp_element_["Platform"].OS === 'web'; // The code in this file is copied entirely from the "color" and "style" support flags
// The flag can't be used at the moment because of the extra wrapper around
// the button block markup.

function getBlockDOMNode(clientId) {
  return document.getElementById('block-' + clientId);
}
/**
 * Removed undefined values from nested object.
 *
 * @param {*} object
 * @return {*} Object cleaned from undefined values
 */


var color_edit_cleanEmptyObject = function cleanEmptyObject(object) {
  if (!Object(external_this_lodash_["isObject"])(object)) {
    return object;
  }

  var cleanedNestedObjects = Object(external_this_lodash_["pickBy"])(Object(external_this_lodash_["mapValues"])(object, cleanEmptyObject), external_this_lodash_["identity"]);
  return Object(external_this_lodash_["isEqual"])(cleanedNestedObjects, {}) ? undefined : cleanedNestedObjects;
};

function ColorPanel(_ref) {
  var settings = _ref.settings,
      clientId = _ref.clientId,
      _ref$enableContrastCh = _ref.enableContrastChecking,
      enableContrastChecking = _ref$enableContrastCh === void 0 ? true : _ref$enableContrastCh;
  var _window = window,
      getComputedStyle = _window.getComputedStyle,
      Node = _window.Node;

  var _useState = Object(external_this_wp_element_["useState"])(),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      detectedBackgroundColor = _useState2[0],
      setDetectedBackgroundColor = _useState2[1];

  var _useState3 = Object(external_this_wp_element_["useState"])(),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      detectedColor = _useState4[0],
      setDetectedColor = _useState4[1];

  var title = isWebPlatform ? Object(external_this_wp_i18n_["__"])('Color settings') : Object(external_this_wp_i18n_["__"])('Color Settings');
  Object(external_this_wp_element_["useEffect"])(function () {
    if (isWebPlatform && !enableContrastChecking) {
      return;
    }

    var colorsDetectionElement = getBlockDOMNode(clientId);

    if (!colorsDetectionElement) {
      return;
    }

    setDetectedColor(getComputedStyle(colorsDetectionElement).color);
    var backgroundColorNode = colorsDetectionElement;
    var backgroundColor = getComputedStyle(backgroundColorNode).backgroundColor;

    while (backgroundColor === 'rgba(0, 0, 0, 0)' && backgroundColorNode.parentNode && backgroundColorNode.parentNode.nodeType === Node.ELEMENT_NODE) {
      backgroundColorNode = backgroundColorNode.parentNode;
      backgroundColor = getComputedStyle(backgroundColorNode).backgroundColor;
    }

    setDetectedBackgroundColor(backgroundColor);
  });
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalPanelColorGradientSettings"], {
    title: title,
    initialOpen: false,
    settings: settings
  }, isWebPlatform && enableContrastChecking && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["ContrastChecker"], {
    backgroundColor: detectedBackgroundColor,
    textColor: detectedColor
  })));
}
/**
 * Inspector control panel containing the color related configuration
 *
 * @param {Object} props
 *
 * @return {WPElement} Color edit element.
 */


function ColorEdit(props) {
  var _style$color2, _style$color3, _style$color4;

  var attributes = props.attributes;

  var _useSelect = Object(external_this_wp_data_["useSelect"])(function (select) {
    return select('core/block-editor').getSettings();
  }, []),
      colors = _useSelect.colors,
      gradients = _useSelect.gradients; // Shouldn't be needed but right now the ColorGradientsPanel
  // can trigger both onChangeColor and onChangeBackground
  // synchronously causing our two callbacks to override changes
  // from each other.


  var localAttributes = Object(external_this_wp_element_["useRef"])(attributes);
  Object(external_this_wp_element_["useEffect"])(function () {
    localAttributes.current = attributes;
  }, [attributes]);
  var style = attributes.style,
      textColor = attributes.textColor,
      backgroundColor = attributes.backgroundColor,
      gradient = attributes.gradient;
  var gradientValue;

  if (gradient) {
    gradientValue = Object(external_this_wp_blockEditor_["getGradientValueBySlug"])(gradients, gradient);
  } else {
    var _style$color;

    gradientValue = style === null || style === void 0 ? void 0 : (_style$color = style.color) === null || _style$color === void 0 ? void 0 : _style$color.gradient;
  }

  var onChangeColor = function onChangeColor(name) {
    return function (value) {
      var _localAttributes$curr, _localAttributes$curr2;

      var colorObject = Object(external_this_wp_blockEditor_["getColorObjectByColorValue"])(colors, value);
      var attributeName = name + 'Color';

      var newStyle = color_edit_objectSpread({}, localAttributes.current.style, {
        color: color_edit_objectSpread({}, (_localAttributes$curr = localAttributes.current) === null || _localAttributes$curr === void 0 ? void 0 : (_localAttributes$curr2 = _localAttributes$curr.style) === null || _localAttributes$curr2 === void 0 ? void 0 : _localAttributes$curr2.color, Object(defineProperty["a" /* default */])({}, name, (colorObject === null || colorObject === void 0 ? void 0 : colorObject.slug) ? undefined : value))
      });

      var newNamedColor = (colorObject === null || colorObject === void 0 ? void 0 : colorObject.slug) ? colorObject.slug : undefined;

      var newAttributes = Object(defineProperty["a" /* default */])({
        style: color_edit_cleanEmptyObject(newStyle)
      }, attributeName, newNamedColor);

      props.setAttributes(newAttributes);
      localAttributes.current = color_edit_objectSpread({}, localAttributes.current, {}, newAttributes);
    };
  };

  var onChangeGradient = function onChangeGradient(value) {
    var slug = Object(external_this_wp_blockEditor_["getGradientSlugByValue"])(gradients, value);
    var newAttributes;

    if (slug) {
      var _localAttributes$curr3, _localAttributes$curr4, _localAttributes$curr5;

      var newStyle = color_edit_objectSpread({}, (_localAttributes$curr3 = localAttributes.current) === null || _localAttributes$curr3 === void 0 ? void 0 : _localAttributes$curr3.style, {
        color: color_edit_objectSpread({}, (_localAttributes$curr4 = localAttributes.current) === null || _localAttributes$curr4 === void 0 ? void 0 : (_localAttributes$curr5 = _localAttributes$curr4.style) === null || _localAttributes$curr5 === void 0 ? void 0 : _localAttributes$curr5.color, {
          gradient: undefined
        })
      });

      newAttributes = {
        style: color_edit_cleanEmptyObject(newStyle),
        gradient: slug
      };
    } else {
      var _localAttributes$curr6, _localAttributes$curr7, _localAttributes$curr8;

      var _newStyle = color_edit_objectSpread({}, (_localAttributes$curr6 = localAttributes.current) === null || _localAttributes$curr6 === void 0 ? void 0 : _localAttributes$curr6.style, {
        color: color_edit_objectSpread({}, (_localAttributes$curr7 = localAttributes.current) === null || _localAttributes$curr7 === void 0 ? void 0 : (_localAttributes$curr8 = _localAttributes$curr7.style) === null || _localAttributes$curr8 === void 0 ? void 0 : _localAttributes$curr8.color, {
          gradient: value
        })
      });

      newAttributes = {
        style: color_edit_cleanEmptyObject(_newStyle),
        gradient: undefined
      };
    }

    props.setAttributes(newAttributes);
    localAttributes.current = color_edit_objectSpread({}, localAttributes.current, {}, newAttributes);
  };

  return Object(external_this_wp_element_["createElement"])(ColorPanel, {
    enableContrastChecking: !gradient && !(style === null || style === void 0 ? void 0 : (_style$color2 = style.color) === null || _style$color2 === void 0 ? void 0 : _style$color2.gradient),
    clientId: props.clientId,
    settings: [{
      label: Object(external_this_wp_i18n_["__"])('Text Color'),
      onColorChange: onChangeColor('text'),
      colorValue: Object(external_this_wp_blockEditor_["getColorObjectByAttributeValues"])(colors, textColor, style === null || style === void 0 ? void 0 : (_style$color3 = style.color) === null || _style$color3 === void 0 ? void 0 : _style$color3.text).color
    }, {
      label: Object(external_this_wp_i18n_["__"])('Background Color'),
      onColorChange: onChangeColor('background'),
      colorValue: Object(external_this_wp_blockEditor_["getColorObjectByAttributeValues"])(colors, backgroundColor, style === null || style === void 0 ? void 0 : (_style$color4 = style.color) === null || _style$color4 === void 0 ? void 0 : _style$color4.background).color,
      gradientValue: gradientValue,
      onGradientChange: onChangeGradient
    }]
  });
}

/* harmony default export */ var color_edit = (ColorEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/button/color-props.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

 // The code in this file is copied entirely from the "color" and "style" support flags
// The flag can't be used at the moment because of the extra wrapper around
// the button block markup.

function getColorAndStyleProps(attributes, colors) {
  var _style$color, _style$color2, _style$color3, _style$color4, _classnames, _style$color5, _style$color6, _style$color7, _style$color8, _style$color9, _style$color10;

  var isEdit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // I'd have prefered to avoid the "style" attribute usage here
  var backgroundColor = attributes.backgroundColor,
      textColor = attributes.textColor,
      gradient = attributes.gradient,
      style = attributes.style;
  var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);

  var gradientClass = Object(external_this_wp_blockEditor_["__experimentalGetGradientClass"])(gradient);

  var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
  var className = classnames_default()(textClass, gradientClass, (_classnames = {}, Object(defineProperty["a" /* default */])(_classnames, backgroundClass, !(style === null || style === void 0 ? void 0 : (_style$color = style.color) === null || _style$color === void 0 ? void 0 : _style$color.gradient) && !!backgroundClass), Object(defineProperty["a" /* default */])(_classnames, 'has-text-color', textColor || (style === null || style === void 0 ? void 0 : (_style$color2 = style.color) === null || _style$color2 === void 0 ? void 0 : _style$color2.text)), Object(defineProperty["a" /* default */])(_classnames, 'has-background', backgroundColor || (style === null || style === void 0 ? void 0 : (_style$color3 = style.color) === null || _style$color3 === void 0 ? void 0 : _style$color3.background) || gradient || (style === null || style === void 0 ? void 0 : (_style$color4 = style.color) === null || _style$color4 === void 0 ? void 0 : _style$color4.gradient)), _classnames));
  var styleProp = (style === null || style === void 0 ? void 0 : (_style$color5 = style.color) === null || _style$color5 === void 0 ? void 0 : _style$color5.background) || (style === null || style === void 0 ? void 0 : (_style$color6 = style.color) === null || _style$color6 === void 0 ? void 0 : _style$color6.text) || (style === null || style === void 0 ? void 0 : (_style$color7 = style.color) === null || _style$color7 === void 0 ? void 0 : _style$color7.gradient) ? {
    background: (style === null || style === void 0 ? void 0 : (_style$color8 = style.color) === null || _style$color8 === void 0 ? void 0 : _style$color8.gradient) ? style.color.gradient : undefined,
    backgroundColor: (style === null || style === void 0 ? void 0 : (_style$color9 = style.color) === null || _style$color9 === void 0 ? void 0 : _style$color9.background) ? style.color.background : undefined,
    color: (style === null || style === void 0 ? void 0 : (_style$color10 = style.color) === null || _style$color10 === void 0 ? void 0 : _style$color10.text) ? style.color.text : undefined
  } : {}; // This is needed only for themes that don't load their color stylesheets in the editor
  // We force an inline style to apply the color.

  if (isEdit) {
    if (backgroundColor) {
      var backgroundColorObject = Object(external_this_wp_blockEditor_["getColorObjectByAttributeValues"])(colors, backgroundColor);
      styleProp.backgroundColor = backgroundColorObject.color;
    }

    if (textColor) {
      var textColorObject = Object(external_this_wp_blockEditor_["getColorObjectByAttributeValues"])(colors, textColor);
      styleProp.color = textColorObject.color;
    }
  }

  return {
    className: !!className ? className : undefined,
    style: styleProp
  };
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/button/edit.js




function button_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function button_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { button_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { button_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */



var edit_NEW_TAB_REL = 'noreferrer noopener';
var MIN_BORDER_RADIUS_VALUE = 0;
var MAX_BORDER_RADIUS_VALUE = 50;
var INITIAL_BORDER_RADIUS_POSITION = 5;

function BorderPanel(_ref) {
  var _ref$borderRadius = _ref.borderRadius,
      borderRadius = _ref$borderRadius === void 0 ? '' : _ref$borderRadius,
      setAttributes = _ref.setAttributes;
  var initialBorderRadius = borderRadius;
  var setBorderRadius = Object(external_this_wp_element_["useCallback"])(function (newBorderRadius) {
    if (newBorderRadius === undefined) setAttributes({
      borderRadius: initialBorderRadius
    });else setAttributes({
      borderRadius: newBorderRadius
    });
  }, [setAttributes]);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Border settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
    value: borderRadius,
    label: Object(external_this_wp_i18n_["__"])('Border radius'),
    min: MIN_BORDER_RADIUS_VALUE,
    max: MAX_BORDER_RADIUS_VALUE,
    initialPosition: INITIAL_BORDER_RADIUS_POSITION,
    allowReset: true,
    onChange: setBorderRadius
  }));
}

function URLPicker(_ref2) {
  var _ref4;

  var isSelected = _ref2.isSelected,
      url = _ref2.url,
      setAttributes = _ref2.setAttributes,
      opensInNewTab = _ref2.opensInNewTab,
      onToggleOpenInNewTab = _ref2.onToggleOpenInNewTab;

  var _useState = Object(external_this_wp_element_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      isURLPickerOpen = _useState2[0],
      setIsURLPickerOpen = _useState2[1];

  var urlIsSet = !!url;
  var urlIsSetandSelected = urlIsSet && isSelected;

  var openLinkControl = function openLinkControl() {
    setIsURLPickerOpen(true);
    return false; // prevents default behaviour for event
  };

  var unlinkButton = function unlinkButton() {
    setAttributes({
      url: undefined,
      linkTarget: undefined,
      rel: undefined
    });
    setIsURLPickerOpen(false);
  };

  var linkControl = (isURLPickerOpen || urlIsSetandSelected) && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Popover"], {
    position: "bottom center",
    onClose: function onClose() {
      return setIsURLPickerOpen(false);
    }
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalLinkControl"], {
    className: "wp-block-navigation-link__inline-link-input",
    value: {
      url: url,
      opensInNewTab: opensInNewTab
    },
    onChange: function onChange(_ref3) {
      var _ref3$url = _ref3.url,
          newURL = _ref3$url === void 0 ? '' : _ref3$url,
          newOpensInNewTab = _ref3.opensInNewTab;
      setAttributes({
        url: newURL
      });

      if (opensInNewTab !== newOpensInNewTab) {
        onToggleOpenInNewTab(newOpensInNewTab);
      }
    }
  }));
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, !urlIsSet && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
    name: "link",
    icon: library_link["a" /* default */],
    title: Object(external_this_wp_i18n_["__"])('Link'),
    shortcut: external_this_wp_keycodes_["displayShortcut"].primary('k'),
    onClick: openLinkControl
  }), urlIsSetandSelected && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
    name: "link",
    icon: link_off["a" /* default */],
    title: Object(external_this_wp_i18n_["__"])('Unlink'),
    shortcut: external_this_wp_keycodes_["displayShortcut"].primaryShift('k'),
    onClick: unlinkButton,
    isActive: true
  }))), isSelected && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["KeyboardShortcuts"], {
    bindGlobal: true,
    shortcuts: (_ref4 = {}, Object(defineProperty["a" /* default */])(_ref4, external_this_wp_keycodes_["rawShortcut"].primary('k'), openLinkControl), Object(defineProperty["a" /* default */])(_ref4, external_this_wp_keycodes_["rawShortcut"].primaryShift('k'), unlinkButton), _ref4)
  }), linkControl);
}

function ButtonEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      className = props.className,
      isSelected = props.isSelected,
      onReplace = props.onReplace,
      mergeBlocks = props.mergeBlocks;
  var borderRadius = attributes.borderRadius,
      linkTarget = attributes.linkTarget,
      placeholder = attributes.placeholder,
      rel = attributes.rel,
      text = attributes.text,
      url = attributes.url;
  var onSetLinkRel = Object(external_this_wp_element_["useCallback"])(function (value) {
    setAttributes({
      rel: value
    });
  }, [setAttributes]);

  var _useSelect = Object(external_this_wp_data_["useSelect"])(function (select) {
    return select('core/block-editor').getSettings();
  }, []),
      colors = _useSelect.colors;

  var onToggleOpenInNewTab = Object(external_this_wp_element_["useCallback"])(function (value) {
    var newLinkTarget = value ? '_blank' : undefined;
    var updatedRel = rel;

    if (newLinkTarget && !rel) {
      updatedRel = edit_NEW_TAB_REL;
    } else if (!newLinkTarget && rel === edit_NEW_TAB_REL) {
      updatedRel = undefined;
    }

    setAttributes({
      linkTarget: newLinkTarget,
      rel: updatedRel
    });
  }, [rel, setAttributes]);
  var colorProps = getColorAndStyleProps(attributes, colors, true);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(color_edit, props), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].div, null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    placeholder: placeholder || Object(external_this_wp_i18n_["__"])('Add text…'),
    value: text,
    onChange: function onChange(value) {
      return setAttributes({
        text: value
      });
    },
    withoutInteractiveFormatting: true,
    className: classnames_default()(className, 'wp-block-button__link', colorProps.className, {
      'no-border-radius': borderRadius === 0
    }),
    style: button_edit_objectSpread({
      borderRadius: borderRadius ? borderRadius + 'px' : undefined
    }, colorProps.style),
    onSplit: function onSplit(value) {
      return Object(external_this_wp_blocks_["createBlock"])('core/button', button_edit_objectSpread({}, attributes, {
        text: value
      }));
    },
    onReplace: onReplace,
    onMerge: mergeBlocks,
    identifier: "text"
  })), Object(external_this_wp_element_["createElement"])(URLPicker, {
    url: url,
    setAttributes: setAttributes,
    isSelected: isSelected,
    opensInNewTab: linkTarget === '_blank',
    onToggleOpenInNewTab: onToggleOpenInNewTab
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(BorderPanel, {
    borderRadius: borderRadius,
    setAttributes: setAttributes
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Link settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Open in new tab'),
    onChange: onToggleOpenInNewTab,
    checked: linkTarget === '_blank'
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextControl"], {
    label: Object(external_this_wp_i18n_["__"])('Link rel'),
    value: rel || '',
    onChange: onSetLinkRel
  }))));
}

/* harmony default export */ var button_edit = (ButtonEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/button/save.js



function save_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function save_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { save_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { save_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function button_save_save(_ref) {
  var attributes = _ref.attributes;
  var borderRadius = attributes.borderRadius,
      linkTarget = attributes.linkTarget,
      rel = attributes.rel,
      text = attributes.text,
      title = attributes.title,
      url = attributes.url;
  var colorProps = getColorAndStyleProps(attributes);
  var buttonClasses = classnames_default()('wp-block-button__link', colorProps.className, {
    'no-border-radius': borderRadius === 0
  });

  var buttonStyle = save_objectSpread({
    borderRadius: borderRadius ? borderRadius + 'px' : undefined
  }, colorProps.style); // The use of a `title` attribute here is soft-deprecated, but still applied
  // if it had already been assigned, for the sake of backward-compatibility.
  // A title will no longer be assigned for new or updated button block links.


  return Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: "a",
    className: buttonClasses,
    href: url,
    title: title,
    style: buttonStyle,
    value: text,
    target: linkTarget,
    rel: rel
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/button/index.js


function button_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function button_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { button_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { button_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var button_metadata = {
  name: "core/button",
  category: "design",
  parent: ["core/buttons"],
  attributes: {
    url: {
      type: "string",
      source: "attribute",
      selector: "a",
      attribute: "href"
    },
    title: {
      type: "string",
      source: "attribute",
      selector: "a",
      attribute: "title"
    },
    text: {
      type: "string",
      source: "html",
      selector: "a"
    },
    linkTarget: {
      type: "string",
      source: "attribute",
      selector: "a",
      attribute: "target"
    },
    rel: {
      type: "string",
      source: "attribute",
      selector: "a",
      attribute: "rel"
    },
    placeholder: {
      type: "string"
    },
    borderRadius: {
      type: "number"
    },
    style: {
      type: "object"
    },
    backgroundColor: {
      type: "string"
    },
    textColor: {
      type: "string"
    },
    gradient: {
      type: "string"
    }
  },
  supports: {
    anchor: true,
    align: true,
    alignWide: false,
    reusable: false,
    lightBlockWrapper: true
  }
};

var button_name = button_metadata.name;

var button_settings = {
  title: Object(external_this_wp_i18n_["__"])('Button'),
  description: Object(external_this_wp_i18n_["__"])('Prompt visitors to take action with a button-style link.'),
  icon: library_button,
  keywords: [Object(external_this_wp_i18n_["__"])('link')],
  example: {
    attributes: {
      className: 'is-style-fill',
      backgroundColor: 'vivid-green-cyan',
      text: Object(external_this_wp_i18n_["__"])('Call to Action')
    }
  },
  styles: [{
    name: 'fill',
    label: Object(external_this_wp_i18n_["__"])('Fill'),
    isDefault: true
  }, {
    name: 'outline',
    label: Object(external_this_wp_i18n_["__"])('Outline')
  }],
  edit: button_edit,
  save: button_save_save,
  deprecated: button_deprecated,
  merge: function merge(a, _ref) {
    var _ref$text = _ref.text,
        text = _ref$text === void 0 ? '' : _ref$text;
    return button_objectSpread({}, a, {
      text: (a.text || '') + text
    });
  }
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/buttons/edit.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var ALLOWED_BLOCKS = [button_name];
var BUTTONS_TEMPLATE = [['core/button']]; // Inside buttons block alignment options are not supported.

var alignmentHooksSetting = {
  isEmbedButton: true
};

function ButtonsEdit() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].div, null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalAlignmentHookSettingsProvider"], {
    value: alignmentHooksSetting
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"], {
    allowedBlocks: ALLOWED_BLOCKS,
    template: BUTTONS_TEMPLATE,
    orientation: "horizontal"
  })));
}

/* harmony default export */ var buttons_edit = (ButtonsEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/buttons/save.js


/**
 * WordPress dependencies
 */

function buttons_save_save() {
  return Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/buttons/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var buttons_metadata = {
  name: "core/buttons",
  category: "design",
  supports: {
    anchor: true,
    align: true,
    alignWide: false,
    lightBlockWrapper: true
  }
};

var buttons_name = buttons_metadata.name;

var buttons_settings = {
  title: Object(external_this_wp_i18n_["__"])('Buttons'),
  description: Object(external_this_wp_i18n_["__"])('Prompt visitors to take action with a group of button-style links.'),
  icon: library_button,
  keywords: [Object(external_this_wp_i18n_["__"])('link')],
  transforms: buttons_transforms,
  edit: buttons_edit,
  save: buttons_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/calendar.js


/**
 * WordPress dependencies
 */

var calendar = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7h15v12zM9 10H7v2h2v-2zm0 4H7v2h2v-2zm4-4h-2v2h2v-2zm4 0h-2v2h2v-2zm-4 4h-2v2h2v-2zm4 0h-2v2h2v-2z"
}));
/* harmony default export */ var library_calendar = (calendar);

// EXTERNAL MODULE: external {"this":"moment"}
var external_this_moment_ = __webpack_require__(43);
var external_this_moment_default = /*#__PURE__*/__webpack_require__.n(external_this_moment_);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/calendar/edit.js









function calendar_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function calendar_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { calendar_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { calendar_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function calendar_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (calendar_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function calendar_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






var edit_CalendarEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(CalendarEdit, _Component);

  var _super = calendar_edit_createSuper(CalendarEdit);

  function CalendarEdit() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, CalendarEdit);

    _this = _super.apply(this, arguments);
    _this.getYearMonth = memize_default()(_this.getYearMonth.bind(Object(assertThisInitialized["a" /* default */])(_this)), {
      maxSize: 1
    });
    _this.getServerSideAttributes = memize_default()(_this.getServerSideAttributes.bind(Object(assertThisInitialized["a" /* default */])(_this)), {
      maxSize: 1
    });
    return _this;
  }

  Object(createClass["a" /* default */])(CalendarEdit, [{
    key: "getYearMonth",
    value: function getYearMonth(date) {
      if (!date) {
        return {};
      }

      var momentDate = external_this_moment_default()(date);
      return {
        year: momentDate.year(),
        month: momentDate.month() + 1
      };
    }
  }, {
    key: "getServerSideAttributes",
    value: function getServerSideAttributes(attributes, date) {
      return calendar_edit_objectSpread({}, attributes, {}, this.getYearMonth(date));
    }
  }, {
    key: "render",
    value: function render() {
      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Disabled"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_serverSideRender_default.a, {
        block: "core/calendar",
        attributes: this.getServerSideAttributes(this.props.attributes, this.props.date)
      }));
    }
  }]);

  return CalendarEdit;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var calendar_edit = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var coreEditorSelect = select('core/editor');

  if (!coreEditorSelect) {
    return;
  }

  var getEditedPostAttribute = coreEditorSelect.getEditedPostAttribute;
  var postType = getEditedPostAttribute('type'); // Dates are used to overwrite year and month used on the calendar.
  // This overwrite should only happen for 'post' post types.
  // For other post types the calendar always displays the current month.

  return {
    date: postType === 'post' ? getEditedPostAttribute('date') : undefined
  };
})(edit_CalendarEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/calendar/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

var calendar_metadata = {
  name: "core/calendar",
  category: "widgets",
  attributes: {
    align: {
      type: "string",
      "enum": ["left", "center", "right", "wide", "full"]
    },
    className: {
      type: "string"
    },
    month: {
      type: "integer"
    },
    year: {
      type: "integer"
    }
  },
  supports: {
    align: true
  }
};

var calendar_name = calendar_metadata.name;

var calendar_settings = {
  title: Object(external_this_wp_i18n_["__"])('Calendar'),
  description: Object(external_this_wp_i18n_["__"])('A calendar of your site’s posts.'),
  icon: library_calendar,
  keywords: [Object(external_this_wp_i18n_["__"])('posts'), Object(external_this_wp_i18n_["__"])('archive')],
  example: {},
  edit: calendar_edit
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/category.js


/**
 * WordPress dependencies
 */

var category_category = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7h15v12zM9 10H7v2h2v-2zm0 4H7v2h2v-2zm4-4h-2v2h2v-2zm4 0h-2v2h2v-2zm-4 4h-2v2h2v-2zm4 0h-2v2h2v-2z"
}));
/* harmony default export */ var library_category = (category_category);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/pin.js


/**
 * WordPress dependencies
 */

var pin = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M10.44 3.02l1.82-1.82 6.36 6.35-1.83 1.82c-1.05-.68-2.48-.57-3.41.36l-.75.75c-.92.93-1.04 2.35-.35 3.41l-1.83 1.82-2.41-2.41-2.8 2.79c-.42.42-3.38 2.71-3.8 2.29s1.86-3.39 2.28-3.81l2.79-2.79L4.1 9.36l1.83-1.82c1.05.69 2.48.57 3.4-.36l.75-.75c.93-.92 1.05-2.35.36-3.41z"
}));
/* harmony default export */ var library_pin = (pin);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/categories/edit.js








function categories_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (categories_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function categories_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









var edit_CategoriesEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(CategoriesEdit, _Component);

  var _super = categories_edit_createSuper(CategoriesEdit);

  function CategoriesEdit() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, CategoriesEdit);

    _this = _super.apply(this, arguments);
    _this.toggleDisplayAsDropdown = _this.toggleDisplayAsDropdown.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.toggleShowPostCounts = _this.toggleShowPostCounts.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.toggleShowHierarchy = _this.toggleShowHierarchy.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(CategoriesEdit, [{
    key: "toggleDisplayAsDropdown",
    value: function toggleDisplayAsDropdown() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var displayAsDropdown = attributes.displayAsDropdown;
      setAttributes({
        displayAsDropdown: !displayAsDropdown
      });
    }
  }, {
    key: "toggleShowPostCounts",
    value: function toggleShowPostCounts() {
      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes;
      var showPostCounts = attributes.showPostCounts;
      setAttributes({
        showPostCounts: !showPostCounts
      });
    }
  }, {
    key: "toggleShowHierarchy",
    value: function toggleShowHierarchy() {
      var _this$props3 = this.props,
          attributes = _this$props3.attributes,
          setAttributes = _this$props3.setAttributes;
      var showHierarchy = attributes.showHierarchy;
      setAttributes({
        showHierarchy: !showHierarchy
      });
    }
  }, {
    key: "getCategories",
    value: function getCategories() {
      var parentId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var categories = this.props.categories;

      if (!categories || !categories.length) {
        return [];
      }

      if (parentId === null) {
        return categories;
      }

      return categories.filter(function (category) {
        return category.parent === parentId;
      });
    }
  }, {
    key: "getCategoryListClassName",
    value: function getCategoryListClassName(level) {
      return "wp-block-categories__list wp-block-categories__list-level-".concat(level);
    }
  }, {
    key: "renderCategoryName",
    value: function renderCategoryName(category) {
      if (!category.name) {
        return Object(external_this_wp_i18n_["__"])('(Untitled)');
      }

      return Object(external_this_lodash_["unescape"])(category.name).trim();
    }
  }, {
    key: "renderCategoryList",
    value: function renderCategoryList() {
      var _this2 = this;

      var showHierarchy = this.props.attributes.showHierarchy;
      var parentId = showHierarchy ? 0 : null;
      var categories = this.getCategories(parentId);
      return Object(external_this_wp_element_["createElement"])("ul", {
        className: this.getCategoryListClassName(0)
      }, categories.map(function (category) {
        return _this2.renderCategoryListItem(category, 0);
      }));
    }
  }, {
    key: "renderCategoryListItem",
    value: function renderCategoryListItem(category, level) {
      var _this3 = this;

      var _this$props$attribute = this.props.attributes,
          showHierarchy = _this$props$attribute.showHierarchy,
          showPostCounts = _this$props$attribute.showPostCounts;
      var childCategories = this.getCategories(category.id);
      return Object(external_this_wp_element_["createElement"])("li", {
        key: category.id
      }, Object(external_this_wp_element_["createElement"])("a", {
        href: category.link,
        target: "_blank",
        rel: "noreferrer noopener"
      }, this.renderCategoryName(category)), showPostCounts && Object(external_this_wp_element_["createElement"])("span", {
        className: "wp-block-categories__post-count"
      }, ' ', "(", category.count, ")"), showHierarchy && !!childCategories.length && Object(external_this_wp_element_["createElement"])("ul", {
        className: this.getCategoryListClassName(level + 1)
      }, childCategories.map(function (childCategory) {
        return _this3.renderCategoryListItem(childCategory, level + 1);
      })));
    }
  }, {
    key: "renderCategoryDropdown",
    value: function renderCategoryDropdown() {
      var _this4 = this;

      var instanceId = this.props.instanceId;
      var showHierarchy = this.props.attributes.showHierarchy;
      var parentId = showHierarchy ? 0 : null;
      var categories = this.getCategories(parentId);
      var selectId = "blocks-category-select-".concat(instanceId);
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["VisuallyHidden"], {
        as: "label",
        htmlFor: selectId
      }, Object(external_this_wp_i18n_["__"])('Categories')), Object(external_this_wp_element_["createElement"])("select", {
        id: selectId,
        className: "wp-block-categories__dropdown"
      }, categories.map(function (category) {
        return _this4.renderCategoryDropdownItem(category, 0);
      })));
    }
  }, {
    key: "renderCategoryDropdownItem",
    value: function renderCategoryDropdownItem(category, level) {
      var _this5 = this;

      var _this$props$attribute2 = this.props.attributes,
          showHierarchy = _this$props$attribute2.showHierarchy,
          showPostCounts = _this$props$attribute2.showPostCounts;
      var childCategories = this.getCategories(category.id);
      return [Object(external_this_wp_element_["createElement"])("option", {
        key: category.id
      }, Object(external_this_lodash_["times"])(level * 3, function () {
        return '\xa0';
      }), this.renderCategoryName(category), !!showPostCounts ? " (".concat(category.count, ")") : ''), showHierarchy && !!childCategories.length && childCategories.map(function (childCategory) {
        return _this5.renderCategoryDropdownItem(childCategory, level + 1);
      })];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          attributes = _this$props4.attributes,
          isRequesting = _this$props4.isRequesting;
      var displayAsDropdown = attributes.displayAsDropdown,
          showHierarchy = attributes.showHierarchy,
          showPostCounts = attributes.showPostCounts;
      var inspectorControls = Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
        title: Object(external_this_wp_i18n_["__"])('Categories settings')
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Display as dropdown'),
        checked: displayAsDropdown,
        onChange: this.toggleDisplayAsDropdown
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Show hierarchy'),
        checked: showHierarchy,
        onChange: this.toggleShowHierarchy
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Show post counts'),
        checked: showPostCounts,
        onChange: this.toggleShowPostCounts
      })));

      if (isRequesting) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, inspectorControls, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Placeholder"], {
          icon: library_pin,
          label: Object(external_this_wp_i18n_["__"])('Categories')
        }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null)));
      }

      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, inspectorControls, Object(external_this_wp_element_["createElement"])("div", {
        className: this.props.className
      }, displayAsDropdown ? this.renderCategoryDropdown() : this.renderCategoryList()));
    }
  }]);

  return CategoriesEdit;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var categories_edit = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords;

  var _select2 = select('core/data'),
      isResolving = _select2.isResolving;

  var query = {
    per_page: -1,
    hide_empty: true
  };
  return {
    categories: getEntityRecords('taxonomy', 'category', query),
    isRequesting: isResolving('core', 'getEntityRecords', ['taxonomy', 'category', query])
  };
}), external_this_wp_compose_["withInstanceId"])(edit_CategoriesEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/categories/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

var categories_metadata = {
  name: "core/categories",
  category: "widgets",
  attributes: {
    align: {
      type: "string",
      "enum": ["left", "center", "right", "wide", "full"]
    },
    className: {
      type: "string"
    },
    displayAsDropdown: {
      type: "boolean",
      "default": false
    },
    showHierarchy: {
      type: "boolean",
      "default": false
    },
    showPostCounts: {
      type: "boolean",
      "default": false
    }
  },
  supports: {
    align: true,
    html: false
  }
};

var categories_name = categories_metadata.name;

var categories_settings = {
  title: Object(external_this_wp_i18n_["__"])('Categories'),
  description: Object(external_this_wp_i18n_["__"])('Display a list of all categories.'),
  icon: library_category,
  example: {},
  edit: categories_edit
};

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/code.js
var code = __webpack_require__(301);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/code/edit.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function CodeEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].pre, null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["PlainText"], {
    __experimentalVersion: 2,
    tagName: "code",
    value: attributes.content,
    onChange: function onChange(content) {
      return setAttributes({
        content: content
      });
    },
    placeholder: Object(external_this_wp_i18n_["__"])('Write code…'),
    "aria-label": Object(external_this_wp_i18n_["__"])('Code')
  }));
}

// EXTERNAL MODULE: external {"this":["wp","escapeHtml"]}
var external_this_wp_escapeHtml_ = __webpack_require__(89);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/code/utils.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Escapes ampersands, shortcodes, and links.
 *
 * @param {string} content The content of a code block.
 * @return {string} The given content with some characters escaped.
 */

function utils_escape(content) {
  return Object(external_this_lodash_["flow"])(external_this_wp_escapeHtml_["escapeEditableHTML"], escapeOpeningSquareBrackets, escapeProtocolInIsolatedUrls)(content || '');
}
/**
 * Returns the given content with all opening shortcode characters converted
 * into their HTML entity counterpart (i.e. [ => &#91;). For instance, a
 * shortcode like [embed] becomes &#91;embed]
 *
 * This function replicates the escaping of HTML tags, where a tag like
 * <strong> becomes &lt;strong>.
 *
 * @param {string}  content The content of a code block.
 * @return {string} The given content with its opening shortcode characters
 *                  converted into their HTML entity counterpart
 *                  (i.e. [ => &#91;)
 */

function escapeOpeningSquareBrackets(content) {
  return content.replace(/\[/g, '&#91;');
}
/**
 * Converts the first two forward slashes of any isolated URL into their HTML
 * counterparts (i.e. // => &#47;&#47;). For instance, https://youtube.com/watch?x
 * becomes https:&#47;&#47;youtube.com/watch?x.
 *
 * An isolated URL is a URL that sits in its own line, surrounded only by spacing
 * characters.
 *
 * See https://github.com/WordPress/wordpress-develop/blob/5.1.1/src/wp-includes/class-wp-embed.php#L403
 *
 * @param {string}  content The content of a code block.
 * @return {string} The given content with its ampersands converted into
 *                  their HTML entity counterpart (i.e. & => &amp;)
 */


function escapeProtocolInIsolatedUrls(content) {
  return content.replace(/^(\s*https?:)\/\/([^\s<>"]+\s*)$/m, '$1&#47;&#47;$2');
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/code/save.js


/**
 * Internal dependencies
 */

function code_save_save(_ref) {
  var attributes = _ref.attributes;
  return Object(external_this_wp_element_["createElement"])("pre", null, Object(external_this_wp_element_["createElement"])("code", null, utils_escape(attributes.content)));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/code/transforms.js
/**
 * WordPress dependencies
 */

var code_transforms_transforms = {
  from: [{
    type: 'enter',
    regExp: /^```$/,
    transform: function transform() {
      return Object(external_this_wp_blocks_["createBlock"])('core/code');
    }
  }, {
    type: 'block',
    blocks: ['core/html'],
    transform: function transform(_ref) {
      var content = _ref.content;
      return Object(external_this_wp_blocks_["createBlock"])('core/code', {
        content: content
      });
    }
  }, {
    type: 'raw',
    isMatch: function isMatch(node) {
      return node.nodeName === 'PRE' && node.children.length === 1 && node.firstChild.nodeName === 'CODE';
    },
    schema: {
      pre: {
        children: {
          code: {
            children: {
              '#text': {}
            }
          }
        }
      }
    }
  }]
};
/* harmony default export */ var code_transforms = (code_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/code/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var code_metadata = {
  name: "core/code",
  category: "text",
  attributes: {
    content: {
      type: "string",
      source: "text",
      selector: "code"
    }
  },
  supports: {
    anchor: true,
    html: false,
    lightBlockWrapper: true
  }
};


var code_name = code_metadata.name;

var code_settings = {
  title: Object(external_this_wp_i18n_["__"])('Code'),
  description: Object(external_this_wp_i18n_["__"])('Display code snippets that respect your spacing and tabs.'),
  icon: code["a" /* default */],
  example: {
    attributes: {
      /* eslint-disable @wordpress/i18n-no-collapsible-whitespace */
      // translators: Preserve \n markers for line breaks
      content: Object(external_this_wp_i18n_["__"])('// A "block" is the abstract term used\n// to describe units of markup that\n// when composed together, form the\n// content or layout of a page.\nregisterBlockType( name, settings );')
      /* eslint-enable @wordpress/i18n-no-collapsible-whitespace */

    }
  },
  transforms: code_transforms,
  edit: CodeEdit,
  save: code_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/columns.js


/**
 * WordPress dependencies
 */

var columns_columns = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4.1 1.5v10H10v-10h4.9zM5.5 17V8c0-.3.2-.5.5-.5h2.5v10H6c-.3 0-.5-.2-.5-.5zm14 0c0 .3-.2.5-.5.5h-2.6v-10H19c.3 0 .5.2.5.5v9z"
}));
/* harmony default export */ var library_columns = (columns_columns);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/columns/deprecated.js



function columns_deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function columns_deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { columns_deprecated_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { columns_deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Given an HTML string for a deprecated columns inner block, returns the
 * column index to which the migrated inner block should be assigned. Returns
 * undefined if the inner block was not assigned to a column.
 *
 * @param {string} originalContent Deprecated Columns inner block HTML.
 *
 * @return {?number} Column to which inner block is to be assigned.
 */

function getDeprecatedLayoutColumn(originalContent) {
  var doc = getDeprecatedLayoutColumn.doc;

  if (!doc) {
    doc = document.implementation.createHTMLDocument('');
    getDeprecatedLayoutColumn.doc = doc;
  }

  var columnMatch;
  doc.body.innerHTML = originalContent;

  var _iterator = _createForOfIteratorHelper(doc.body.firstChild.classList),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var classListItem = _step.value;

      if (columnMatch = classListItem.match(/^layout-column-(\d+)$/)) {
        return Number(columnMatch[1]) - 1;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

var columns_deprecated_migrateCustomColors = function migrateCustomColors(attributes) {
  if (!attributes.customTextColor && !attributes.customBackgroundColor) {
    return attributes;
  }

  var style = {
    color: {}
  };

  if (attributes.customTextColor) {
    style.color.text = attributes.customTextColor;
  }

  if (attributes.customBackgroundColor) {
    style.color.background = attributes.customBackgroundColor;
  }

  return columns_deprecated_objectSpread({}, Object(external_this_lodash_["omit"])(attributes, ['customTextColor', 'customBackgroundColor']), {
    style: style
  });
};

/* harmony default export */ var columns_deprecated = ([{
  attributes: {
    verticalAlignment: {
      type: 'string'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    }
  },
  migrate: columns_deprecated_migrateCustomColors,
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var verticalAlignment = attributes.verticalAlignment,
        backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor;
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var className = classnames_default()((_classnames = {
      'has-background': backgroundColor || customBackgroundColor,
      'has-text-color': textColor || customTextColor
    }, Object(defineProperty["a" /* default */])(_classnames, backgroundClass, backgroundClass), Object(defineProperty["a" /* default */])(_classnames, textClass, textClass), Object(defineProperty["a" /* default */])(_classnames, "are-vertically-aligned-".concat(verticalAlignment), verticalAlignment), _classnames));
    var style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return Object(external_this_wp_element_["createElement"])("div", {
      className: className ? className : undefined,
      style: style
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null));
  }
}, {
  attributes: {
    columns: {
      type: 'number',
      default: 2
    }
  },
  isEligible: function isEligible(attributes, innerBlocks) {
    // Since isEligible is called on every valid instance of the
    // Columns block and a deprecation is the unlikely case due to
    // its subsequent migration, optimize for the `false` condition
    // by performing a naive, inaccurate pass at inner blocks.
    var isFastPassEligible = innerBlocks.some(function (innerBlock) {
      return /layout-column-\d+/.test(innerBlock.originalContent);
    });

    if (!isFastPassEligible) {
      return false;
    } // Only if the fast pass is considered eligible is the more
    // accurate, durable, slower condition performed.


    return innerBlocks.some(function (innerBlock) {
      return getDeprecatedLayoutColumn(innerBlock.originalContent) !== undefined;
    });
  },
  migrate: function migrate(attributes, innerBlocks) {
    var columns = innerBlocks.reduce(function (accumulator, innerBlock) {
      var originalContent = innerBlock.originalContent;
      var columnIndex = getDeprecatedLayoutColumn(originalContent);

      if (columnIndex === undefined) {
        columnIndex = 0;
      }

      if (!accumulator[columnIndex]) {
        accumulator[columnIndex] = [];
      }

      accumulator[columnIndex].push(innerBlock);
      return accumulator;
    }, []);
    var migratedInnerBlocks = columns.map(function (columnBlocks) {
      return Object(external_this_wp_blocks_["createBlock"])('core/column', {}, columnBlocks);
    });
    return [Object(external_this_lodash_["omit"])(attributes, ['columns']), migratedInnerBlocks];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var columns = attributes.columns;
    return Object(external_this_wp_element_["createElement"])("div", {
      className: "has-".concat(columns, "-columns")
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null));
  }
}, {
  attributes: {
    columns: {
      type: 'number',
      default: 2
    }
  },
  migrate: function migrate(attributes, innerBlocks) {
    attributes = Object(external_this_lodash_["omit"])(attributes, ['columns']);
    return [attributes, innerBlocks];
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var verticalAlignment = attributes.verticalAlignment,
        columns = attributes.columns;
    var wrapperClasses = classnames_default()("has-".concat(columns, "-columns"), Object(defineProperty["a" /* default */])({}, "are-vertically-aligned-".concat(verticalAlignment), verticalAlignment));
    return Object(external_this_wp_element_["createElement"])("div", {
      className: wrapperClasses
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null));
  }
}]);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/columns/utils.js


/**
 * External dependencies
 */

/**
 * Returns a column width attribute value rounded to standard precision.
 * Returns `undefined` if the value is not a valid finite number.
 *
 * @param {?number} value Raw value.
 *
 * @return {number} Value rounded to standard precision.
 */

var toWidthPrecision = function toWidthPrecision(value) {
  return Number.isFinite(value) ? parseFloat(value.toFixed(2)) : undefined;
};
/**
 * Returns an effective width for a given block. An effective width is equal to
 * its attribute value if set, or a computed value assuming equal distribution.
 *
 * @param {WPBlock} block           Block object.
 * @param {number}  totalBlockCount Total number of blocks in Columns.
 *
 * @return {number} Effective column width.
 */

function getEffectiveColumnWidth(block, totalBlockCount) {
  var _block$attributes$wid = block.attributes.width,
      width = _block$attributes$wid === void 0 ? 100 / totalBlockCount : _block$attributes$wid;
  return toWidthPrecision(width);
}
/**
 * Returns the total width occupied by the given set of column blocks.
 *
 * @param {WPBlock[]} blocks          Block objects.
 * @param {?number}   totalBlockCount Total number of blocks in Columns.
 *                                    Defaults to number of blocks passed.
 *
 * @return {number} Total width occupied by blocks.
 */

function getTotalColumnsWidth(blocks) {
  var totalBlockCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : blocks.length;
  return Object(external_this_lodash_["sumBy"])(blocks, function (block) {
    return getEffectiveColumnWidth(block, totalBlockCount);
  });
}
/**
 * Returns an object of `clientId` → `width` of effective column widths.
 *
 * @param {WPBlock[]} blocks          Block objects.
 * @param {?number}   totalBlockCount Total number of blocks in Columns.
 *                                    Defaults to number of blocks passed.
 *
 * @return {Object<string,number>} Column widths.
 */

function getColumnWidths(blocks) {
  var totalBlockCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : blocks.length;
  return blocks.reduce(function (accumulator, block) {
    var width = getEffectiveColumnWidth(block, totalBlockCount);
    return Object.assign(accumulator, Object(defineProperty["a" /* default */])({}, block.clientId, width));
  }, {});
}
/**
 * Returns an object of `clientId` → `width` of column widths as redistributed
 * proportional to their current widths, constrained or expanded to fit within
 * the given available width.
 *
 * @param {WPBlock[]} blocks          Block objects.
 * @param {number}    availableWidth  Maximum width to fit within.
 * @param {?number}   totalBlockCount Total number of blocks in Columns.
 *                                    Defaults to number of blocks passed.
 *
 * @return {Object<string,number>} Redistributed column widths.
 */

function getRedistributedColumnWidths(blocks, availableWidth) {
  var totalBlockCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : blocks.length;
  var totalWidth = getTotalColumnsWidth(blocks, totalBlockCount);
  var difference = availableWidth - totalWidth;
  var adjustment = difference / blocks.length;
  return Object(external_this_lodash_["mapValues"])(getColumnWidths(blocks, totalBlockCount), function (width) {
    return toWidthPrecision(width + adjustment);
  });
}
/**
 * Returns true if column blocks within the provided set are assigned with
 * explicit widths, or false otherwise.
 *
 * @param {WPBlock[]} blocks Block objects.
 *
 * @return {boolean} Whether columns have explicit widths.
 */

function hasExplicitColumnWidths(blocks) {
  return blocks.every(function (block) {
    return Number.isFinite(block.attributes.width);
  });
}
/**
 * Returns a copy of the given set of blocks with new widths assigned from the
 * provided object of redistributed column widths.
 *
 * @param {WPBlock[]}             blocks Block objects.
 * @param {Object<string,number>} widths Redistributed column widths.
 *
 * @return {WPBlock[]} blocks Mapped block objects.
 */

function getMappedColumnWidths(blocks, widths) {
  return blocks.map(function (block) {
    return Object(external_this_lodash_["merge"])({}, block, {
      attributes: {
        width: widths[block.clientId]
      }
    });
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/columns/edit.js





/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'core/column'.
 *
 * @constant
 * @type {string[]}
 */

var edit_ALLOWED_BLOCKS = ['core/column'];

function ColumnsEditContainer(_ref) {
  var attributes = _ref.attributes,
      updateAlignment = _ref.updateAlignment,
      updateColumns = _ref.updateColumns,
      clientId = _ref.clientId;
  var verticalAlignment = attributes.verticalAlignment;

  var _useSelect = Object(external_this_wp_data_["useSelect"])(function (select) {
    return {
      count: select('core/block-editor').getBlockCount(clientId)
    };
  }, [clientId]),
      count = _useSelect.count;

  var classes = classnames_default()(Object(defineProperty["a" /* default */])({}, "are-vertically-aligned-".concat(verticalAlignment), verticalAlignment));
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockVerticalAlignmentToolbar"], {
    onChange: updateAlignment,
    value: verticalAlignment
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
    label: Object(external_this_wp_i18n_["__"])('Columns'),
    value: count,
    onChange: function onChange(value) {
      return updateColumns(count, value);
    },
    min: 2,
    max: Math.max(6, count)
  }), count > 6 && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Notice"], {
    status: "warning",
    isDismissible: false
  }, Object(external_this_wp_i18n_["__"])('This column count exceeds the recommended amount and may cause visual breakage.')))), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"], {
    allowedBlocks: edit_ALLOWED_BLOCKS,
    orientation: "horizontal",
    __experimentalTagName: external_this_wp_blockEditor_["__experimentalBlock"].div,
    __experimentalPassedProps: {
      className: classes
    },
    renderAppender: false
  }));
}

var ColumnsEditContainerWrapper = Object(external_this_wp_data_["withDispatch"])(function (dispatch, ownProps, registry) {
  return {
    /**
     * Update all child Column blocks with a new vertical alignment setting
     * based on whatever alignment is passed in. This allows change to parent
     * to overide anything set on a individual column basis.
     *
     * @param {string} verticalAlignment the vertical alignment setting
     */
    updateAlignment: function updateAlignment(verticalAlignment) {
      var clientId = ownProps.clientId,
          setAttributes = ownProps.setAttributes;

      var _dispatch = dispatch('core/block-editor'),
          updateBlockAttributes = _dispatch.updateBlockAttributes;

      var _registry$select = registry.select('core/block-editor'),
          getBlockOrder = _registry$select.getBlockOrder; // Update own alignment.


      setAttributes({
        verticalAlignment: verticalAlignment
      }); // Update all child Column Blocks to match

      var innerBlockClientIds = getBlockOrder(clientId);
      innerBlockClientIds.forEach(function (innerBlockClientId) {
        updateBlockAttributes(innerBlockClientId, {
          verticalAlignment: verticalAlignment
        });
      });
    },

    /**
     * Updates the column count, including necessary revisions to child Column
     * blocks to grant required or redistribute available space.
     *
     * @param {number} previousColumns Previous column count.
     * @param {number} newColumns      New column count.
     */
    updateColumns: function updateColumns(previousColumns, newColumns) {
      var clientId = ownProps.clientId;

      var _dispatch2 = dispatch('core/block-editor'),
          replaceInnerBlocks = _dispatch2.replaceInnerBlocks;

      var _registry$select2 = registry.select('core/block-editor'),
          getBlocks = _registry$select2.getBlocks;

      var innerBlocks = getBlocks(clientId);
      var hasExplicitWidths = hasExplicitColumnWidths(innerBlocks); // Redistribute available width for existing inner blocks.

      var isAddingColumn = newColumns > previousColumns;

      if (isAddingColumn && hasExplicitWidths) {
        // If adding a new column, assign width to the new column equal to
        // as if it were `1 / columns` of the total available space.
        var newColumnWidth = toWidthPrecision(100 / newColumns); // Redistribute in consideration of pending block insertion as
        // constraining the available working width.

        var widths = getRedistributedColumnWidths(innerBlocks, 100 - newColumnWidth);
        innerBlocks = [].concat(Object(toConsumableArray["a" /* default */])(getMappedColumnWidths(innerBlocks, widths)), Object(toConsumableArray["a" /* default */])(Object(external_this_lodash_["times"])(newColumns - previousColumns, function () {
          return Object(external_this_wp_blocks_["createBlock"])('core/column', {
            width: newColumnWidth
          });
        })));
      } else if (isAddingColumn) {
        innerBlocks = [].concat(Object(toConsumableArray["a" /* default */])(innerBlocks), Object(toConsumableArray["a" /* default */])(Object(external_this_lodash_["times"])(newColumns - previousColumns, function () {
          return Object(external_this_wp_blocks_["createBlock"])('core/column');
        })));
      } else {
        // The removed column will be the last of the inner blocks.
        innerBlocks = Object(external_this_lodash_["dropRight"])(innerBlocks, previousColumns - newColumns);

        if (hasExplicitWidths) {
          // Redistribute as if block is already removed.
          var _widths = getRedistributedColumnWidths(innerBlocks, 100);

          innerBlocks = getMappedColumnWidths(innerBlocks, _widths);
        }
      }

      replaceInnerBlocks(clientId, innerBlocks, false);
    }
  };
})(ColumnsEditContainer);

var edit_createBlocksFromInnerBlocksTemplate = function createBlocksFromInnerBlocksTemplate(innerBlocksTemplate) {
  return Object(external_this_lodash_["map"])(innerBlocksTemplate, function (_ref2) {
    var _ref3 = Object(slicedToArray["a" /* default */])(_ref2, 3),
        name = _ref3[0],
        attributes = _ref3[1],
        _ref3$ = _ref3[2],
        innerBlocks = _ref3$ === void 0 ? [] : _ref3$;

    return Object(external_this_wp_blocks_["createBlock"])(name, attributes, createBlocksFromInnerBlocksTemplate(innerBlocks));
  });
};

var edit_ColumnsEdit = function ColumnsEdit(props) {
  var clientId = props.clientId,
      name = props.name;

  var _useSelect2 = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select('core/blocks'),
        getBlockVariations = _select.getBlockVariations,
        getBlockType = _select.getBlockType,
        getDefaultBlockVariation = _select.getDefaultBlockVariation;

    return {
      blockType: getBlockType(name),
      defaultVariation: getDefaultBlockVariation(name, 'block'),
      hasInnerBlocks: select('core/block-editor').getBlocks(clientId).length > 0,
      variations: getBlockVariations(name, 'block')
    };
  }, [clientId, name]),
      blockType = _useSelect2.blockType,
      defaultVariation = _useSelect2.defaultVariation,
      hasInnerBlocks = _useSelect2.hasInnerBlocks,
      variations = _useSelect2.variations;

  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core/block-editor'),
      replaceInnerBlocks = _useDispatch.replaceInnerBlocks;

  if (hasInnerBlocks) {
    return Object(external_this_wp_element_["createElement"])(ColumnsEditContainerWrapper, props);
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].div, null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlockVariationPicker"], {
    icon: Object(external_this_lodash_["get"])(blockType, ['icon', 'src']),
    label: Object(external_this_lodash_["get"])(blockType, ['title']),
    variations: variations,
    onSelect: function onSelect() {
      var nextVariation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultVariation;

      if (nextVariation.attributes) {
        props.setAttributes(nextVariation.attributes);
      }

      if (nextVariation.innerBlocks) {
        replaceInnerBlocks(props.clientId, edit_createBlocksFromInnerBlocksTemplate(nextVariation.innerBlocks));
      }
    },
    allowSkip: true
  }));
};

/* harmony default export */ var columns_edit = (edit_ColumnsEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/columns/save.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function columns_save_save(_ref) {
  var attributes = _ref.attributes;
  var verticalAlignment = attributes.verticalAlignment;
  var className = classnames_default()(Object(defineProperty["a" /* default */])({}, "are-vertically-aligned-".concat(verticalAlignment), verticalAlignment));
  return Object(external_this_wp_element_["createElement"])("div", {
    className: className ? className : undefined
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/columns/variations.js


/**
 * WordPress dependencies
 */


/** @typedef {import('@wordpress/blocks').WPBlockVariation} WPBlockVariation */

/**
 * Template option choices for predefined columns layouts.
 *
 * @type {WPBlockVariation[]}
 */

var variations_variations = [{
  name: 'two-columns-equal',
  title: Object(external_this_wp_i18n_["__"])('50 / 50'),
  description: Object(external_this_wp_i18n_["__"])('Two columns; equal split'),
  icon: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z"
  })),
  isDefault: true,
  innerBlocks: [['core/column'], ['core/column']],
  scope: ['block']
}, {
  name: 'two-columns-one-third-two-thirds',
  title: Object(external_this_wp_i18n_["__"])('30 / 70'),
  description: Object(external_this_wp_i18n_["__"])('Two columns; one-third, two-thirds split'),
  icon: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z"
  })),
  innerBlocks: [['core/column', {
    width: 33.33
  }], ['core/column', {
    width: 66.66
  }]],
  scope: ['block']
}, {
  name: 'two-columns-two-thirds-one-third',
  title: Object(external_this_wp_i18n_["__"])('70 / 30'),
  description: Object(external_this_wp_i18n_["__"])('Two columns; two-thirds, one-third split'),
  icon: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z"
  })),
  innerBlocks: [['core/column', {
    width: 66.66
  }], ['core/column', {
    width: 33.33
  }]],
  scope: ['block']
}, {
  name: 'three-columns-equal',
  title: Object(external_this_wp_i18n_["__"])('33 / 33 / 33'),
  description: Object(external_this_wp_i18n_["__"])('Three columns; equal split'),
  icon: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    fillRule: "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
  })),
  innerBlocks: [['core/column'], ['core/column'], ['core/column']],
  scope: ['block']
}, {
  name: 'three-columns-wider-center',
  title: Object(external_this_wp_i18n_["__"])('25 / 50 / 25'),
  description: Object(external_this_wp_i18n_["__"])('Three columns; wide center column'),
  icon: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    fillRule: "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM31 34H17V14h14v20zm2 0V14h6v20h-6zm-18 0H9V14h6v20z"
  })),
  innerBlocks: [['core/column', {
    width: 25
  }], ['core/column', {
    width: 50
  }], ['core/column', {
    width: 25
  }]],
  scope: ['block']
}];
/* harmony default export */ var columns_variations = (variations_variations);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/columns/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var columns_metadata = {
  name: "core/columns",
  category: "design",
  attributes: {
    verticalAlignment: {
      type: "string"
    }
  },
  supports: {
    anchor: true,
    align: ["wide", "full"],
    html: false,
    lightBlockWrapper: true,
    __experimentalColor: {
      gradients: true,
      linkColor: true
    }
  }
};


var columns_name = columns_metadata.name;

var columns_settings = {
  title: Object(external_this_wp_i18n_["__"])('Columns'),
  icon: library_columns,
  description: Object(external_this_wp_i18n_["__"])('Add a block that displays content in multiple columns, then add whatever content blocks you’d like.'),
  variations: columns_variations,
  example: {
    innerBlocks: [{
      name: 'core/column',
      innerBlocks: [{
        name: 'core/paragraph',
        attributes: {
          /* translators: example text. */
          content: Object(external_this_wp_i18n_["__"])('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.')
        }
      }, {
        name: 'core/image',
        attributes: {
          url: 'https://s.w.org/images/core/5.3/Windbuchencom.jpg'
        }
      }, {
        name: 'core/paragraph',
        attributes: {
          /* translators: example text. */
          content: Object(external_this_wp_i18n_["__"])('Suspendisse commodo neque lacus, a dictum orci interdum et.')
        }
      }]
    }, {
      name: 'core/column',
      innerBlocks: [{
        name: 'core/paragraph',
        attributes: {
          /* translators: example text. */
          content: Object(external_this_wp_i18n_["__"])('Etiam et egestas lorem. Vivamus sagittis sit amet dolor quis lobortis. Integer sed fermentum arcu, id vulputate lacus. Etiam fermentum sem eu quam hendrerit.')
        }
      }, {
        name: 'core/paragraph',
        attributes: {
          /* translators: example text. */
          content: Object(external_this_wp_i18n_["__"])('Nam risus massa, ullamcorper consectetur eros fermentum, porta aliquet ligula. Sed vel mauris nec enim.')
        }
      }]
    }]
  },
  deprecated: columns_deprecated,
  edit: columns_edit,
  save: columns_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/column.js


/**
 * WordPress dependencies
 */

var column = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM6 17.5c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h3v10H6zm13.5-.5c0 .3-.2.5-.5.5h-3v-10h3c.3 0 .5.2.5.5v9z"
}));
/* harmony default export */ var library_column = (column);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/column/edit.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






function ColumnEdit(_ref) {
  var _ref$attributes = _ref.attributes,
      verticalAlignment = _ref$attributes.verticalAlignment,
      width = _ref$attributes.width,
      setAttributes = _ref.setAttributes,
      clientId = _ref.clientId;
  var classes = classnames_default()('block-core-columns', Object(defineProperty["a" /* default */])({}, "is-vertically-aligned-".concat(verticalAlignment), verticalAlignment));

  var _useSelect = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select('core/block-editor'),
        getBlockOrder = _select.getBlockOrder,
        getBlockRootClientId = _select.getBlockRootClientId;

    return {
      hasChildBlocks: getBlockOrder(clientId).length > 0,
      rootClientId: getBlockRootClientId(clientId)
    };
  }, [clientId]),
      hasChildBlocks = _useSelect.hasChildBlocks,
      rootClientId = _useSelect.rootClientId;

  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core/block-editor'),
      updateBlockAttributes = _useDispatch.updateBlockAttributes;

  var updateAlignment = function updateAlignment(value) {
    // Update own alignment.
    setAttributes({
      verticalAlignment: value
    }); // Reset parent Columns block.

    updateBlockAttributes(rootClientId, {
      verticalAlignment: null
    });
  };

  var hasWidth = Number.isFinite(width);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockVerticalAlignmentToolbar"], {
    onChange: updateAlignment,
    value: verticalAlignment
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Column settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
    label: Object(external_this_wp_i18n_["__"])('Percentage width'),
    value: width || '',
    onChange: function onChange(nextWidth) {
      setAttributes({
        width: nextWidth
      });
    },
    min: 0,
    max: 100,
    step: 0.1,
    required: true,
    allowReset: true,
    placeholder: width === undefined ? Object(external_this_wp_i18n_["__"])('Auto') : undefined
  }))), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"], {
    templateLock: false,
    renderAppender: hasChildBlocks ? undefined : function () {
      return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].ButtonBlockAppender, null);
    },
    __experimentalTagName: external_this_wp_blockEditor_["__experimentalBlock"].div,
    __experimentalPassedProps: {
      className: classes,
      style: hasWidth ? {
        flexBasis: width + '%'
      } : undefined
    }
  }));
}

/* harmony default export */ var column_edit = (ColumnEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/column/save.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function column_save_save(_ref) {
  var attributes = _ref.attributes;
  var verticalAlignment = attributes.verticalAlignment,
      width = attributes.width;
  var wrapperClasses = classnames_default()(Object(defineProperty["a" /* default */])({}, "is-vertically-aligned-".concat(verticalAlignment), verticalAlignment));
  var style;

  if (Number.isFinite(width)) {
    style = {
      flexBasis: width + '%'
    };
  }

  return Object(external_this_wp_element_["createElement"])("div", {
    className: wrapperClasses,
    style: style
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/column/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var column_metadata = {
  name: "core/column",
  category: "text",
  parent: ["core/columns"],
  attributes: {
    verticalAlignment: {
      type: "string"
    },
    width: {
      type: "number",
      min: 0,
      max: 100
    }
  },
  supports: {
    anchor: true,
    reusable: false,
    html: false,
    lightBlockWrapper: true
  }
};

var column_name = column_metadata.name;

var column_settings = {
  title: Object(external_this_wp_i18n_["__"])('Column'),
  icon: library_column,
  description: Object(external_this_wp_i18n_["__"])('A single column within a columns block.'),
  edit: column_edit,
  save: column_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/cover.js


/**
 * WordPress dependencies
 */

var cover = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h6.2v8.9l2.5-3.1 2.5 3.1V4.5h2.2c.4 0 .8.4.8.8v13.4z"
}));
/* harmony default export */ var library_cover = (cover);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/cover/shared.js


function shared_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function shared_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { shared_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { shared_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var POSITION_CLASSNAMES = {
  'top left': 'is-position-top-left',
  'top center': 'is-position-top-center',
  'top right': 'is-position-top-right',
  'center left': 'is-position-center-left',
  'center center': 'is-position-center-center',
  center: 'is-position-center-center',
  'center right': 'is-position-center-right',
  'bottom left': 'is-position-bottom-left',
  'bottom center': 'is-position-bottom-center',
  'bottom right': 'is-position-bottom-right'
};
var IMAGE_BACKGROUND_TYPE = 'image';
var VIDEO_BACKGROUND_TYPE = 'video';
var COVER_MIN_HEIGHT = 50;
function backgroundImageStyles(url) {
  return url ? {
    backgroundImage: "url(".concat(url, ")")
  } : {};
}
var CSS_UNITS = [{
  value: 'px',
  label: 'px',
  default: 430
}, {
  value: 'em',
  label: 'em',
  default: 20
}, {
  value: 'rem',
  label: 'rem',
  default: 20
}, {
  value: 'vw',
  label: 'vw',
  default: 20
}, {
  value: 'vh',
  label: 'vh',
  default: 50
}];
function dimRatioToClass(ratio) {
  return ratio === 0 || ratio === 50 || !ratio ? null : 'has-background-dim-' + 10 * Math.round(ratio / 10);
}
function attributesFromMedia(setAttributes) {
  return function (media) {
    if (!media || !media.url) {
      setAttributes({
        url: undefined,
        id: undefined
      });
      return;
    }

    var mediaType; // for media selections originated from a file upload.

    if (media.media_type) {
      if (media.media_type === IMAGE_BACKGROUND_TYPE) {
        mediaType = IMAGE_BACKGROUND_TYPE;
      } else {
        // only images and videos are accepted so if the media_type is not an image we can assume it is a video.
        // Videos contain the media type of 'file' in the object returned from the rest api.
        mediaType = VIDEO_BACKGROUND_TYPE;
      }
    } else {
      // for media selections originated from existing files in the media library.
      if (media.type !== IMAGE_BACKGROUND_TYPE && media.type !== VIDEO_BACKGROUND_TYPE) {
        return;
      }

      mediaType = media.type;
    }

    setAttributes(shared_objectSpread({
      url: media.url,
      id: media.id,
      backgroundType: mediaType
    }, mediaType === VIDEO_BACKGROUND_TYPE ? {
      focalPoint: undefined,
      hasParallax: undefined
    } : {}));
  };
}
function getPositionClassName(contentPosition) {
  if (contentPosition === undefined) return '';
  return POSITION_CLASSNAMES[contentPosition];
}
function isContentPositionCenter(contentPosition) {
  return !contentPosition || contentPosition === 'center center' || contentPosition === 'center';
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/cover/deprecated.js



function cover_deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cover_deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cover_deprecated_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cover_deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


var cover_deprecated_blockAttributes = {
  url: {
    type: 'string'
  },
  id: {
    type: 'number'
  },
  hasParallax: {
    type: 'boolean',
    default: false
  },
  dimRatio: {
    type: 'number',
    default: 50
  },
  overlayColor: {
    type: 'string'
  },
  customOverlayColor: {
    type: 'string'
  },
  backgroundType: {
    type: 'string',
    default: 'image'
  },
  focalPoint: {
    type: 'object'
  }
};
var cover_deprecated_deprecated = [{
  attributes: cover_deprecated_objectSpread({}, cover_deprecated_blockAttributes, {
    title: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    contentAlign: {
      type: 'string',
      default: 'center'
    },
    minHeight: {
      type: 'number'
    },
    gradient: {
      type: 'string'
    },
    customGradient: {
      type: 'string'
    }
  }),
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var backgroundType = attributes.backgroundType,
        gradient = attributes.gradient,
        customGradient = attributes.customGradient,
        customOverlayColor = attributes.customOverlayColor,
        dimRatio = attributes.dimRatio,
        focalPoint = attributes.focalPoint,
        hasParallax = attributes.hasParallax,
        overlayColor = attributes.overlayColor,
        url = attributes.url,
        minHeight = attributes.minHeight;
    var overlayColorClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', overlayColor);

    var gradientClass = Object(external_this_wp_blockEditor_["__experimentalGetGradientClass"])(gradient);

    var style = backgroundType === IMAGE_BACKGROUND_TYPE ? backgroundImageStyles(url) : {};

    if (!overlayColorClass) {
      style.backgroundColor = customOverlayColor;
    }

    if (focalPoint && !hasParallax) {
      style.backgroundPosition = "".concat(Math.round(focalPoint.x * 100), "% ").concat(Math.round(focalPoint.y * 100), "%");
    }

    if (customGradient && !url) {
      style.background = customGradient;
    }

    style.minHeight = minHeight || undefined;
    var classes = classnames_default()(dimRatioToClass(dimRatio), overlayColorClass, Object(defineProperty["a" /* default */])({
      'has-background-dim': dimRatio !== 0,
      'has-parallax': hasParallax,
      'has-background-gradient': customGradient
    }, gradientClass, !url && gradientClass));
    return Object(external_this_wp_element_["createElement"])("div", {
      className: classes,
      style: style
    }, url && (gradient || customGradient) && dimRatio !== 0 && Object(external_this_wp_element_["createElement"])("span", {
      "aria-hidden": "true",
      className: classnames_default()('wp-block-cover__gradient-background', gradientClass),
      style: customGradient ? {
        background: customGradient
      } : undefined
    }), VIDEO_BACKGROUND_TYPE === backgroundType && url && Object(external_this_wp_element_["createElement"])("video", {
      className: "wp-block-cover__video-background",
      autoPlay: true,
      muted: true,
      loop: true,
      src: url
    }), Object(external_this_wp_element_["createElement"])("div", {
      className: "wp-block-cover__inner-container"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null)));
  }
}, {
  attributes: cover_deprecated_objectSpread({}, cover_deprecated_blockAttributes, {
    title: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    contentAlign: {
      type: 'string',
      default: 'center'
    },
    minHeight: {
      type: 'number'
    },
    gradient: {
      type: 'string'
    },
    customGradient: {
      type: 'string'
    }
  }),
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var backgroundType = attributes.backgroundType,
        gradient = attributes.gradient,
        customGradient = attributes.customGradient,
        customOverlayColor = attributes.customOverlayColor,
        dimRatio = attributes.dimRatio,
        focalPoint = attributes.focalPoint,
        hasParallax = attributes.hasParallax,
        overlayColor = attributes.overlayColor,
        url = attributes.url,
        minHeight = attributes.minHeight;
    var overlayColorClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', overlayColor);

    var gradientClass = Object(external_this_wp_blockEditor_["__experimentalGetGradientClass"])(gradient);

    var style = backgroundType === IMAGE_BACKGROUND_TYPE ? backgroundImageStyles(url) : {};

    if (!overlayColorClass) {
      style.backgroundColor = customOverlayColor;
    }

    if (focalPoint && !hasParallax) {
      style.backgroundPosition = "".concat(focalPoint.x * 100, "% ").concat(focalPoint.y * 100, "%");
    }

    if (customGradient && !url) {
      style.background = customGradient;
    }

    style.minHeight = minHeight || undefined;
    var classes = classnames_default()(dimRatioToClass(dimRatio), overlayColorClass, Object(defineProperty["a" /* default */])({
      'has-background-dim': dimRatio !== 0,
      'has-parallax': hasParallax,
      'has-background-gradient': customGradient
    }, gradientClass, !url && gradientClass));
    return Object(external_this_wp_element_["createElement"])("div", {
      className: classes,
      style: style
    }, url && (gradient || customGradient) && dimRatio !== 0 && Object(external_this_wp_element_["createElement"])("span", {
      "aria-hidden": "true",
      className: classnames_default()('wp-block-cover__gradient-background', gradientClass),
      style: customGradient ? {
        background: customGradient
      } : undefined
    }), VIDEO_BACKGROUND_TYPE === backgroundType && url && Object(external_this_wp_element_["createElement"])("video", {
      className: "wp-block-cover__video-background",
      autoPlay: true,
      muted: true,
      loop: true,
      src: url
    }), Object(external_this_wp_element_["createElement"])("div", {
      className: "wp-block-cover__inner-container"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null)));
  }
}, {
  attributes: cover_deprecated_objectSpread({}, cover_deprecated_blockAttributes, {
    title: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    contentAlign: {
      type: 'string',
      default: 'center'
    }
  }),
  supports: {
    align: true
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var backgroundType = attributes.backgroundType,
        contentAlign = attributes.contentAlign,
        customOverlayColor = attributes.customOverlayColor,
        dimRatio = attributes.dimRatio,
        focalPoint = attributes.focalPoint,
        hasParallax = attributes.hasParallax,
        overlayColor = attributes.overlayColor,
        title = attributes.title,
        url = attributes.url;
    var overlayColorClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', overlayColor);
    var style = backgroundType === IMAGE_BACKGROUND_TYPE ? backgroundImageStyles(url) : {};

    if (!overlayColorClass) {
      style.backgroundColor = customOverlayColor;
    }

    if (focalPoint && !hasParallax) {
      style.backgroundPosition = "".concat(focalPoint.x * 100, "% ").concat(focalPoint.y * 100, "%");
    }

    var classes = classnames_default()(dimRatioToClass(dimRatio), overlayColorClass, Object(defineProperty["a" /* default */])({
      'has-background-dim': dimRatio !== 0,
      'has-parallax': hasParallax
    }, "has-".concat(contentAlign, "-content"), contentAlign !== 'center'));
    return Object(external_this_wp_element_["createElement"])("div", {
      className: classes,
      style: style
    }, VIDEO_BACKGROUND_TYPE === backgroundType && url && Object(external_this_wp_element_["createElement"])("video", {
      className: "wp-block-cover__video-background",
      autoPlay: true,
      muted: true,
      loop: true,
      src: url
    }), !external_this_wp_blockEditor_["RichText"].isEmpty(title) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "p",
      className: "wp-block-cover-text",
      value: title
    }));
  },
  migrate: function migrate(attributes) {
    return [Object(external_this_lodash_["omit"])(attributes, ['title', 'contentAlign']), [Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
      content: attributes.title,
      align: attributes.contentAlign,
      fontSize: 'large',
      placeholder: Object(external_this_wp_i18n_["__"])('Write title…')
    })]];
  }
}, {
  attributes: cover_deprecated_objectSpread({}, cover_deprecated_blockAttributes, {
    title: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    contentAlign: {
      type: 'string',
      default: 'center'
    },
    align: {
      type: 'string'
    }
  }),
  supports: {
    className: false
  },
  save: function save(_ref4) {
    var attributes = _ref4.attributes;
    var url = attributes.url,
        title = attributes.title,
        hasParallax = attributes.hasParallax,
        dimRatio = attributes.dimRatio,
        align = attributes.align,
        contentAlign = attributes.contentAlign,
        overlayColor = attributes.overlayColor,
        customOverlayColor = attributes.customOverlayColor;
    var overlayColorClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', overlayColor);
    var style = backgroundImageStyles(url);

    if (!overlayColorClass) {
      style.backgroundColor = customOverlayColor;
    }

    var classes = classnames_default()('wp-block-cover-image', dimRatioToClass(dimRatio), overlayColorClass, Object(defineProperty["a" /* default */])({
      'has-background-dim': dimRatio !== 0,
      'has-parallax': hasParallax
    }, "has-".concat(contentAlign, "-content"), contentAlign !== 'center'), align ? "align".concat(align) : null);
    return Object(external_this_wp_element_["createElement"])("div", {
      className: classes,
      style: style
    }, !external_this_wp_blockEditor_["RichText"].isEmpty(title) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "p",
      className: "wp-block-cover-image-text",
      value: title
    }));
  },
  migrate: function migrate(attributes) {
    return [Object(external_this_lodash_["omit"])(attributes, ['title', 'contentAlign', 'align']), [Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
      content: attributes.title,
      align: attributes.contentAlign,
      fontSize: 'large',
      placeholder: Object(external_this_wp_i18n_["__"])('Write title…')
    })]];
  }
}, {
  attributes: cover_deprecated_objectSpread({}, cover_deprecated_blockAttributes, {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h2'
    },
    align: {
      type: 'string'
    },
    contentAlign: {
      type: 'string',
      default: 'center'
    }
  }),
  supports: {
    className: false
  },
  save: function save(_ref5) {
    var attributes = _ref5.attributes;
    var url = attributes.url,
        title = attributes.title,
        hasParallax = attributes.hasParallax,
        dimRatio = attributes.dimRatio,
        align = attributes.align;
    var style = backgroundImageStyles(url);
    var classes = classnames_default()('wp-block-cover-image', dimRatioToClass(dimRatio), {
      'has-background-dim': dimRatio !== 0,
      'has-parallax': hasParallax
    }, align ? "align".concat(align) : null);
    return Object(external_this_wp_element_["createElement"])("section", {
      className: classes,
      style: style
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "h2",
      value: title
    }));
  },
  migrate: function migrate(attributes) {
    return [Object(external_this_lodash_["omit"])(attributes, ['title', 'contentAlign', 'align']), [Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
      content: attributes.title,
      align: attributes.contentAlign,
      fontSize: 'large',
      placeholder: Object(external_this_wp_i18n_["__"])('Write title…')
    })]];
  }
}];
/* harmony default export */ var cover_deprecated = (cover_deprecated_deprecated);

// EXTERNAL MODULE: ./node_modules/fast-average-color/dist/index.js
var dist = __webpack_require__(267);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./node_modules/tinycolor2/tinycolor.js
var tinycolor = __webpack_require__(66);
var tinycolor_default = /*#__PURE__*/__webpack_require__.n(tinycolor);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/cover/edit.js






function cover_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cover_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cover_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cover_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


/**
 * Module Constants
 */

var cover_edit_ALLOWED_MEDIA_TYPES = ['image', 'video'];
var INNER_BLOCKS_TEMPLATE = [['core/paragraph', {
  align: 'center',
  fontSize: 'large',
  placeholder: Object(external_this_wp_i18n_["__"])('Write title…')
}]];
var BoxControlVisualizer = external_this_wp_components_["__experimentalBoxControl"].__Visualizer;

function retrieveFastAverageColor() {
  if (!retrieveFastAverageColor.fastAverageColor) {
    retrieveFastAverageColor.fastAverageColor = new dist_default.a();
  }

  return retrieveFastAverageColor.fastAverageColor;
}

function CoverHeightInput(_ref) {
  var onChange = _ref.onChange,
      onUnitChange = _ref.onUnitChange,
      _ref$unit = _ref.unit,
      unit = _ref$unit === void 0 ? 'px' : _ref$unit,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value;

  var _useState = Object(external_this_wp_element_["useState"])(null),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      temporaryInput = _useState2[0],
      setTemporaryInput = _useState2[1];

  var instanceId = Object(external_this_wp_compose_["useInstanceId"])(external_this_wp_blockEditor_["__experimentalUnitControl"]);
  var inputId = "block-cover-height-input-".concat(instanceId);
  var isPx = unit === 'px';

  var handleOnChange = function handleOnChange(unprocessedValue) {
    var inputValue = unprocessedValue !== '' ? parseInt(unprocessedValue, 10) : undefined;

    if (isNaN(inputValue) && inputValue !== undefined) {
      setTemporaryInput(unprocessedValue);
      return;
    }

    setTemporaryInput(null);
    onChange(inputValue);
  };

  var handleOnBlur = function handleOnBlur() {
    if (temporaryInput !== null) {
      setTemporaryInput(null);
    }
  };

  var inputValue = temporaryInput !== null ? temporaryInput : value;
  var min = isPx ? COVER_MIN_HEIGHT : 0;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["BaseControl"], {
    label: Object(external_this_wp_i18n_["__"])('Minimum height of cover'),
    id: inputId
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalUnitControl"], {
    id: inputId,
    isResetValueOnUnitChange: true,
    min: min,
    onBlur: handleOnBlur,
    onChange: handleOnChange,
    onUnitChange: onUnitChange,
    step: "1",
    style: {
      maxWidth: 80
    },
    unit: unit,
    units: CSS_UNITS,
    value: inputValue
  }));
}

var RESIZABLE_BOX_ENABLE_OPTION = {
  top: false,
  right: false,
  bottom: true,
  left: false,
  topRight: false,
  bottomRight: false,
  bottomLeft: false,
  topLeft: false
};

function ResizableCover(_ref2) {
  var className = _ref2.className,
      _onResizeStart = _ref2.onResizeStart,
      _onResize = _ref2.onResize,
      _onResizeStop = _ref2.onResizeStop,
      props = Object(objectWithoutProperties["a" /* default */])(_ref2, ["className", "onResizeStart", "onResize", "onResizeStop"]);

  var _useState3 = Object(external_this_wp_element_["useState"])(false),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      isResizing = _useState4[0],
      setIsResizing = _useState4[1];

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ResizableBox"], Object(esm_extends["a" /* default */])({
    className: classnames_default()(className, {
      'is-resizing': isResizing
    }),
    enable: RESIZABLE_BOX_ENABLE_OPTION,
    onResizeStart: function onResizeStart(_event, _direction, elt) {
      _onResizeStart(elt.clientHeight);

      _onResize(elt.clientHeight);
    },
    onResize: function onResize(_event, _direction, elt) {
      _onResize(elt.clientHeight);

      if (!isResizing) {
        setIsResizing(true);
      }
    },
    onResizeStop: function onResizeStop(_event, _direction, elt) {
      _onResizeStop(elt.clientHeight);

      setIsResizing(false);
    },
    minHeight: COVER_MIN_HEIGHT
  }, props));
}
/**
 * useCoverIsDark is a hook that returns a boolean variable specifying if the cover
 * background is dark or not.
 *
 * @param {?string} url          Url of the media background.
 * @param {?number} dimRatio     Transparency of the overlay color. If an image and
 *                               color are set, dimRatio is used to decide what is used
 *                               for background darkness checking purposes.
 * @param {?string} overlayColor String containing the overlay color value if one exists.
 * @param {?Object} elementRef   If a media background is set, elementRef should contain a reference to a
 *                               dom element that renders that media.
 *
 * @return {boolean} True if the cover background is considered "dark" and false otherwise.
 */


function useCoverIsDark(url) {
  var dimRatio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  var overlayColor = arguments.length > 2 ? arguments[2] : undefined;
  var elementRef = arguments.length > 3 ? arguments[3] : undefined;

  var _useState5 = Object(external_this_wp_element_["useState"])(false),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      isDark = _useState6[0],
      setIsDark = _useState6[1];

  Object(external_this_wp_element_["useEffect"])(function () {
    // If opacity is lower than 50 the dominant color is the image or video color,
    // so use that color for the dark mode computation.
    if (url && dimRatio <= 50 && elementRef.current) {
      retrieveFastAverageColor().getColorAsync(elementRef.current, function (color) {
        setIsDark(color.isDark);
      });
    }
  }, [url, url && dimRatio <= 50 && elementRef.current, setIsDark]);
  Object(external_this_wp_element_["useEffect"])(function () {
    // If opacity is greater than 50 the dominant color is the overlay color,
    // so use that color for the dark mode computation.
    if (dimRatio > 50 || !url) {
      if (!overlayColor) {
        // If no overlay color exists the overlay color is black (isDark )
        setIsDark(true);
        return;
      }

      setIsDark(tinycolor_default()(overlayColor).isDark());
    }
  }, [overlayColor, dimRatio > 50 || !url, setIsDark]);
  Object(external_this_wp_element_["useEffect"])(function () {
    if (!url && !overlayColor) {
      // Reset isDark
      setIsDark(false);
    }
  }, [!url && !overlayColor, setIsDark]);
  return isDark;
}

function CoverEdit(_ref3) {
  var _classnames, _styleAttribute$spaci, _styleAttribute$visua;

  var attributes = _ref3.attributes,
      setAttributes = _ref3.setAttributes,
      isSelected = _ref3.isSelected,
      noticeUI = _ref3.noticeUI,
      overlayColor = _ref3.overlayColor,
      setOverlayColor = _ref3.setOverlayColor,
      toggleSelection = _ref3.toggleSelection,
      noticeOperations = _ref3.noticeOperations;
  var contentPosition = attributes.contentPosition,
      id = attributes.id,
      backgroundType = attributes.backgroundType,
      dimRatio = attributes.dimRatio,
      focalPoint = attributes.focalPoint,
      hasParallax = attributes.hasParallax,
      minHeight = attributes.minHeight,
      minHeightUnit = attributes.minHeightUnit,
      styleAttribute = attributes.style,
      url = attributes.url;

  var _experimentalUseGrad = Object(external_this_wp_blockEditor_["__experimentalUseGradient"])(),
      gradientClass = _experimentalUseGrad.gradientClass,
      gradientValue = _experimentalUseGrad.gradientValue,
      setGradient = _experimentalUseGrad.setGradient;

  var onSelectMedia = attributesFromMedia(setAttributes);

  var toggleParallax = function toggleParallax() {
    setAttributes(cover_edit_objectSpread({
      hasParallax: !hasParallax
    }, !hasParallax ? {
      focalPoint: undefined
    } : {}));
  };

  var isDarkElement = Object(external_this_wp_element_["useRef"])();
  var isDark = useCoverIsDark(url, dimRatio, overlayColor.color, isDarkElement);

  var _useState7 = Object(external_this_wp_element_["useState"])(null),
      _useState8 = Object(slicedToArray["a" /* default */])(_useState7, 2),
      temporaryMinHeight = _useState8[0],
      setTemporaryMinHeight = _useState8[1];

  var removeAllNotices = noticeOperations.removeAllNotices,
      createErrorNotice = noticeOperations.createErrorNotice;
  var minHeightWithUnit = minHeightUnit ? "".concat(minHeight).concat(minHeightUnit) : minHeight;

  var style = cover_edit_objectSpread({}, backgroundType === IMAGE_BACKGROUND_TYPE ? backgroundImageStyles(url) : {}, {
    backgroundColor: overlayColor.color,
    minHeight: temporaryMinHeight || minHeightWithUnit || undefined
  });

  if (gradientValue && !url) {
    style.background = gradientValue;
  }

  if (focalPoint) {
    style.backgroundPosition = "".concat(focalPoint.x * 100, "% ").concat(focalPoint.y * 100, "%");
  }

  var hasBackground = !!(url || overlayColor.color || gradientValue);
  var controls = Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, hasBackground && Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlockAlignmentMatrixToolbar"], {
    label: Object(external_this_wp_i18n_["__"])('Change content position'),
    value: contentPosition,
    onChange: function onChange(nextPosition) {
      return setAttributes({
        contentPosition: nextPosition
      });
    }
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaReplaceFlow"], {
    mediaId: id,
    mediaURL: url,
    allowedTypes: cover_edit_ALLOWED_MEDIA_TYPES,
    accept: "image/*,video/*",
    onSelect: onSelectMedia
  }))), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, !!url && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Media settings')
  }, IMAGE_BACKGROUND_TYPE === backgroundType && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Fixed background'),
    checked: hasParallax,
    onChange: toggleParallax
  }), IMAGE_BACKGROUND_TYPE === backgroundType && !hasParallax && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["FocalPointPicker"], {
    label: Object(external_this_wp_i18n_["__"])('Focal point picker'),
    url: url,
    value: focalPoint,
    onChange: function onChange(newFocalPoint) {
      return setAttributes({
        focalPoint: newFocalPoint
      });
    }
  }), VIDEO_BACKGROUND_TYPE === backgroundType && Object(external_this_wp_element_["createElement"])("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    src: url
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelRow"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isSecondary: true,
    isSmall: true,
    className: "block-library-cover__reset-button",
    onClick: function onClick() {
      return setAttributes({
        url: undefined,
        id: undefined,
        backgroundType: undefined,
        dimRatio: undefined,
        focalPoint: undefined,
        hasParallax: undefined
      });
    }
  }, Object(external_this_wp_i18n_["__"])('Clear Media')))), hasBackground && Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Dimensions')
  }, Object(external_this_wp_element_["createElement"])(CoverHeightInput, {
    value: temporaryMinHeight || minHeight,
    unit: minHeightUnit,
    onChange: function onChange(newMinHeight) {
      return setAttributes({
        minHeight: newMinHeight
      });
    },
    onUnitChange: function onUnitChange(nextUnit) {
      setAttributes({
        minHeightUnit: nextUnit
      });
    }
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalPanelColorGradientSettings"], {
    title: Object(external_this_wp_i18n_["__"])('Overlay'),
    initialOpen: true,
    settings: [{
      colorValue: overlayColor.color,
      gradientValue: gradientValue,
      onColorChange: setOverlayColor,
      onGradientChange: setGradient,
      label: Object(external_this_wp_i18n_["__"])('Color')
    }]
  }, !!url && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
    label: Object(external_this_wp_i18n_["__"])('Opacity'),
    value: dimRatio,
    onChange: function onChange(newDimRation) {
      return setAttributes({
        dimRatio: newDimRation
      });
    },
    min: 0,
    max: 100,
    required: true
  })))));

  if (!hasBackground) {
    var placeholderIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
      icon: library_cover
    });

    var label = Object(external_this_wp_i18n_["__"])('Cover');

    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, controls, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].div, {
      className: "is-placeholder"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaPlaceholder"], {
      icon: placeholderIcon,
      labels: {
        title: label,
        instructions: Object(external_this_wp_i18n_["__"])('Upload an image or video file, or pick one from your media library.')
      },
      onSelect: onSelectMedia,
      accept: "image/*,video/*",
      allowedTypes: cover_edit_ALLOWED_MEDIA_TYPES,
      notices: noticeUI,
      onError: function onError(message) {
        removeAllNotices();
        createErrorNotice(message);
      }
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "wp-block-cover__placeholder-background-options"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["ColorPalette"], {
      disableCustomColors: true,
      value: overlayColor.color,
      onChange: setOverlayColor,
      clearable: false
    })))));
  }

  var classes = classnames_default()(dimRatioToClass(dimRatio), (_classnames = {
    'is-dark-theme': isDark,
    'has-background-dim': dimRatio !== 0,
    'has-parallax': hasParallax
  }, Object(defineProperty["a" /* default */])(_classnames, overlayColor.class, overlayColor.class), Object(defineProperty["a" /* default */])(_classnames, 'has-background-gradient', gradientValue), Object(defineProperty["a" /* default */])(_classnames, gradientClass, !url && gradientClass), Object(defineProperty["a" /* default */])(_classnames, 'has-custom-content-position', !isContentPositionCenter(contentPosition)), _classnames), getPositionClassName(contentPosition));
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, controls, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].div, {
    className: classes,
    "data-url": url,
    style: style
  }, Object(external_this_wp_element_["createElement"])(BoxControlVisualizer, {
    values: styleAttribute === null || styleAttribute === void 0 ? void 0 : (_styleAttribute$spaci = styleAttribute.spacing) === null || _styleAttribute$spaci === void 0 ? void 0 : _styleAttribute$spaci.padding,
    showValues: styleAttribute === null || styleAttribute === void 0 ? void 0 : (_styleAttribute$visua = styleAttribute.visualizers) === null || _styleAttribute$visua === void 0 ? void 0 : _styleAttribute$visua.padding
  }), Object(external_this_wp_element_["createElement"])(ResizableCover, {
    className: "block-library-cover__resize-container",
    onResizeStart: function onResizeStart() {
      setAttributes({
        minHeightUnit: 'px'
      });
      toggleSelection(false);
    },
    onResize: setTemporaryMinHeight,
    onResizeStop: function onResizeStop(newMinHeight) {
      toggleSelection(true);
      setAttributes({
        minHeight: newMinHeight
      });
      setTemporaryMinHeight(null);
    },
    showHandle: isSelected
  }), IMAGE_BACKGROUND_TYPE === backgroundType && // Used only to programmatically check if the image is dark or not
  Object(external_this_wp_element_["createElement"])("img", {
    ref: isDarkElement,
    "aria-hidden": true,
    alt: "",
    style: {
      display: 'none'
    },
    src: url
  }), url && gradientValue && dimRatio !== 0 && Object(external_this_wp_element_["createElement"])("span", {
    "aria-hidden": "true",
    className: classnames_default()('wp-block-cover__gradient-background', gradientClass),
    style: {
      background: gradientValue
    }
  }), VIDEO_BACKGROUND_TYPE === backgroundType && Object(external_this_wp_element_["createElement"])("video", {
    ref: isDarkElement,
    className: "wp-block-cover__video-background",
    autoPlay: true,
    muted: true,
    loop: true,
    src: url
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"], {
    __experimentalTagName: "div",
    __experimentalPassedProps: {
      className: 'wp-block-cover__inner-container'
    },
    template: INNER_BLOCKS_TEMPLATE
  })));
}

/* harmony default export */ var cover_edit = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      toggleSelection = _dispatch.toggleSelection;

  return {
    toggleSelection: toggleSelection
  };
}), Object(external_this_wp_blockEditor_["withColors"])({
  overlayColor: 'background-color'
}), external_this_wp_components_["withNotices"], external_this_wp_compose_["withInstanceId"]])(CoverEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/cover/save.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function cover_save_save(_ref) {
  var _classnames;

  var attributes = _ref.attributes;
  var backgroundType = attributes.backgroundType,
      gradient = attributes.gradient,
      contentPosition = attributes.contentPosition,
      customGradient = attributes.customGradient,
      customOverlayColor = attributes.customOverlayColor,
      dimRatio = attributes.dimRatio,
      focalPoint = attributes.focalPoint,
      hasParallax = attributes.hasParallax,
      overlayColor = attributes.overlayColor,
      url = attributes.url,
      minHeightProp = attributes.minHeight,
      minHeightUnit = attributes.minHeightUnit;
  var overlayColorClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', overlayColor);

  var gradientClass = Object(external_this_wp_blockEditor_["__experimentalGetGradientClass"])(gradient);

  var minHeight = minHeightUnit ? "".concat(minHeightProp).concat(minHeightUnit) : minHeightProp;
  var style = backgroundType === IMAGE_BACKGROUND_TYPE ? backgroundImageStyles(url) : {};

  if (!overlayColorClass) {
    style.backgroundColor = customOverlayColor;
  }

  if (focalPoint && !hasParallax) {
    style.backgroundPosition = "".concat(Math.round(focalPoint.x * 100), "% ").concat(Math.round(focalPoint.y * 100), "%");
  }

  if (customGradient && !url) {
    style.background = customGradient;
  }

  style.minHeight = minHeight || undefined;
  var classes = classnames_default()(dimRatioToClass(dimRatio), overlayColorClass, (_classnames = {
    'has-background-dim': dimRatio !== 0,
    'has-parallax': hasParallax,
    'has-background-gradient': gradient || customGradient
  }, Object(defineProperty["a" /* default */])(_classnames, gradientClass, !url && gradientClass), Object(defineProperty["a" /* default */])(_classnames, 'has-custom-content-position', !isContentPositionCenter(contentPosition)), _classnames), getPositionClassName(contentPosition));
  return Object(external_this_wp_element_["createElement"])("div", {
    className: classes,
    style: style
  }, url && (gradient || customGradient) && dimRatio !== 0 && Object(external_this_wp_element_["createElement"])("span", {
    "aria-hidden": "true",
    className: classnames_default()('wp-block-cover__gradient-background', gradientClass),
    style: customGradient ? {
      background: customGradient
    } : undefined
  }), VIDEO_BACKGROUND_TYPE === backgroundType && url && Object(external_this_wp_element_["createElement"])("video", {
    className: "wp-block-cover__video-background",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    src: url
  }), Object(external_this_wp_element_["createElement"])("div", {
    className: "wp-block-cover__inner-container"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null)));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/cover/transforms.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var cover_transforms_transforms = {
  from: [{
    type: 'block',
    blocks: ['core/image'],
    transform: function transform(_ref) {
      var caption = _ref.caption,
          url = _ref.url,
          align = _ref.align,
          id = _ref.id,
          anchor = _ref.anchor;
      return Object(external_this_wp_blocks_["createBlock"])('core/cover', {
        title: caption,
        url: url,
        align: align,
        id: id,
        anchor: anchor
      });
    }
  }, {
    type: 'block',
    blocks: ['core/video'],
    transform: function transform(_ref2) {
      var caption = _ref2.caption,
          src = _ref2.src,
          align = _ref2.align,
          id = _ref2.id,
          anchor = _ref2.anchor;
      return Object(external_this_wp_blocks_["createBlock"])('core/cover', {
        title: caption,
        url: src,
        align: align,
        id: id,
        backgroundType: VIDEO_BACKGROUND_TYPE,
        anchor: anchor
      });
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/image'],
    isMatch: function isMatch(_ref3) {
      var backgroundType = _ref3.backgroundType,
          url = _ref3.url,
          overlayColor = _ref3.overlayColor,
          customOverlayColor = _ref3.customOverlayColor,
          gradient = _ref3.gradient,
          customGradient = _ref3.customGradient;

      if (url) {
        // If a url exists the transform could happen if that URL represents an image background.
        return backgroundType === IMAGE_BACKGROUND_TYPE;
      } // If a url is not set the transform could happen if the cover has no background color or gradient;


      return !overlayColor && !customOverlayColor && !gradient && !customGradient;
    },
    transform: function transform(_ref4) {
      var title = _ref4.title,
          url = _ref4.url,
          align = _ref4.align,
          id = _ref4.id,
          anchor = _ref4.anchor;
      return Object(external_this_wp_blocks_["createBlock"])('core/image', {
        caption: title,
        url: url,
        align: align,
        id: id,
        anchor: anchor
      });
    }
  }, {
    type: 'block',
    blocks: ['core/video'],
    isMatch: function isMatch(_ref5) {
      var backgroundType = _ref5.backgroundType,
          url = _ref5.url,
          overlayColor = _ref5.overlayColor,
          customOverlayColor = _ref5.customOverlayColor,
          gradient = _ref5.gradient,
          customGradient = _ref5.customGradient;

      if (url) {
        // If a url exists the transform could happen if that URL represents a video background.
        return backgroundType === VIDEO_BACKGROUND_TYPE;
      } // If a url is not set the transform could happen if the cover has no background color or gradient;


      return !overlayColor && !customOverlayColor && !gradient && !customGradient;
    },
    transform: function transform(_ref6) {
      var title = _ref6.title,
          url = _ref6.url,
          align = _ref6.align,
          id = _ref6.id,
          anchor = _ref6.anchor;
      return Object(external_this_wp_blocks_["createBlock"])('core/video', {
        caption: title,
        src: url,
        id: id,
        align: align,
        anchor: anchor
      });
    }
  }]
};
/* harmony default export */ var cover_transforms = (cover_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/cover/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var cover_metadata = {
  name: "core/cover",
  category: "media",
  attributes: {
    url: {
      type: "string"
    },
    id: {
      type: "number"
    },
    hasParallax: {
      type: "boolean",
      "default": false
    },
    dimRatio: {
      type: "number",
      "default": 50
    },
    overlayColor: {
      type: "string"
    },
    customOverlayColor: {
      type: "string"
    },
    backgroundType: {
      type: "string",
      "default": "image"
    },
    focalPoint: {
      type: "object"
    },
    minHeight: {
      type: "number"
    },
    minHeightUnit: {
      type: "string"
    },
    gradient: {
      type: "string"
    },
    customGradient: {
      type: "string"
    },
    contentPosition: {
      type: "string"
    }
  },
  supports: {
    anchor: true,
    align: true,
    html: false,
    lightBlockWrapper: true,
    __experimentalPadding: true
  }
};


var cover_name = cover_metadata.name;

var cover_settings = {
  title: Object(external_this_wp_i18n_["__"])('Cover'),
  description: Object(external_this_wp_i18n_["__"])('Add an image or video with a text overlay — great for headers.'),
  icon: library_cover,
  example: {
    attributes: {
      customOverlayColor: '#065174',
      dimRatio: 40,
      url: 'https://s.w.org/images/core/5.3/Windbuchencom.jpg'
    },
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        customFontSize: 48,
        content: Object(external_this_wp_i18n_["__"])('<strong>Snow Patrol</strong>'),
        align: 'center'
      }
    }]
  },
  transforms: cover_transforms,
  save: cover_save_save,
  edit: cover_edit,
  deprecated: cover_deprecated
};

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/pencil.js
var pencil = __webpack_require__(299);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/embed-controls.js


/**
 * WordPress dependencies
 */





var embed_controls_EmbedControls = function EmbedControls(props) {
  var blockSupportsResponsive = props.blockSupportsResponsive,
      showEditButton = props.showEditButton,
      themeSupportsResponsive = props.themeSupportsResponsive,
      allowResponsive = props.allowResponsive,
      getResponsiveHelp = props.getResponsiveHelp,
      toggleResponsive = props.toggleResponsive,
      switchBackToURLInput = props.switchBackToURLInput;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, showEditButton && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
    className: "components-toolbar__control",
    label: Object(external_this_wp_i18n_["__"])('Edit URL'),
    icon: pencil["a" /* default */],
    onClick: switchBackToURLInput
  }))), themeSupportsResponsive && blockSupportsResponsive && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Media settings'),
    className: "blocks-responsive"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Resize for smaller devices'),
    checked: allowResponsive,
    help: getResponsiveHelp,
    onChange: toggleResponsive
  }))));
};

/* harmony default export */ var embed_controls = (embed_controls_EmbedControls);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/embed-loading.js


/**
 * WordPress dependencies
 */



var embed_loading_EmbedLoading = function EmbedLoading() {
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "wp-block-embed is-loading"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null), Object(external_this_wp_element_["createElement"])("p", null, Object(external_this_wp_i18n_["__"])('Embedding…')));
};

/* harmony default export */ var embed_loading = (embed_loading_EmbedLoading);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/embed-placeholder.js


/**
 * WordPress dependencies
 */




var embed_placeholder_EmbedPlaceholder = function EmbedPlaceholder(props) {
  var icon = props.icon,
      label = props.label,
      value = props.value,
      onSubmit = props.onSubmit,
      onChange = props.onChange,
      cannotEmbed = props.cannotEmbed,
      fallback = props.fallback,
      tryAgain = props.tryAgain;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Placeholder"], {
    icon: Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
      icon: icon,
      showColors: true
    }),
    label: label,
    className: "wp-block-embed",
    instructions: Object(external_this_wp_i18n_["__"])('Paste a link to the content you want to display on your site.')
  }, Object(external_this_wp_element_["createElement"])("form", {
    onSubmit: onSubmit
  }, Object(external_this_wp_element_["createElement"])("input", {
    type: "url",
    value: value || '',
    className: "components-placeholder__input",
    "aria-label": label,
    placeholder: Object(external_this_wp_i18n_["__"])('Enter URL to embed here…'),
    onChange: onChange
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isPrimary: true,
    type: "submit"
  }, Object(external_this_wp_i18n_["_x"])('Embed', 'button label'))), Object(external_this_wp_element_["createElement"])("div", {
    className: "components-placeholder__learn-more"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ExternalLink"], {
    href: Object(external_this_wp_i18n_["__"])('https://wordpress.org/support/article/embeds/')
  }, Object(external_this_wp_i18n_["__"])('Learn more about embeds'))), cannotEmbed && Object(external_this_wp_element_["createElement"])("div", {
    className: "components-placeholder__error"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "components-placeholder__instructions"
  }, Object(external_this_wp_i18n_["__"])('Sorry, this content could not be embedded.')), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isSecondary: true,
    onClick: tryAgain
  }, Object(external_this_wp_i18n_["_x"])('Try again', 'button label')), ' ', Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isSecondary: true,
    onClick: fallback
  }, Object(external_this_wp_i18n_["_x"])('Convert to link', 'button label'))));
};

/* harmony default export */ var embed_placeholder = (embed_placeholder_EmbedPlaceholder);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/wp-embed-preview.js








function wp_embed_preview_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (wp_embed_preview_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function wp_embed_preview_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */


/**
 * Browser dependencies
 */

var wp_embed_preview_window = window,
    FocusEvent = wp_embed_preview_window.FocusEvent;

var wp_embed_preview_WpEmbedPreview = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(WpEmbedPreview, _Component);

  var _super = wp_embed_preview_createSuper(WpEmbedPreview);

  function WpEmbedPreview() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, WpEmbedPreview);

    _this = _super.apply(this, arguments);
    _this.checkFocus = _this.checkFocus.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.node = Object(external_this_wp_element_["createRef"])();
    return _this;
  }
  /**
   * Checks whether the wp embed iframe is the activeElement,
   * if it is dispatch a focus event.
   */


  Object(createClass["a" /* default */])(WpEmbedPreview, [{
    key: "checkFocus",
    value: function checkFocus() {
      var _document = document,
          activeElement = _document.activeElement;

      if (activeElement.tagName !== 'IFRAME' || activeElement.parentNode !== this.node.current) {
        return;
      }

      var focusEvent = new FocusEvent('focus', {
        bubbles: true
      });
      activeElement.dispatchEvent(focusEvent);
    }
  }, {
    key: "render",
    value: function render() {
      var html = this.props.html;
      return Object(external_this_wp_element_["createElement"])("div", {
        ref: this.node,
        className: "wp-block-embed__wrapper",
        dangerouslySetInnerHTML: {
          __html: html
        }
      });
    }
  }]);

  return WpEmbedPreview;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var wp_embed_preview = (Object(external_this_wp_compose_["withGlobalEvents"])({
  blur: 'checkFocus'
})(wp_embed_preview_WpEmbedPreview));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/embed-preview.js








function embed_preview_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (embed_preview_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function embed_preview_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Internal dependencies
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



var embed_preview_EmbedPreview = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(EmbedPreview, _Component);

  var _super = embed_preview_createSuper(EmbedPreview);

  function EmbedPreview() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, EmbedPreview);

    _this = _super.apply(this, arguments);
    _this.hideOverlay = _this.hideOverlay.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      interactive: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(EmbedPreview, [{
    key: "hideOverlay",
    value: function hideOverlay() {
      // This is called onMouseUp on the overlay. We can't respond to the `isSelected` prop
      // changing, because that happens on mouse down, and the overlay immediately disappears,
      // and the mouse event can end up in the preview content. We can't use onClick on
      // the overlay to hide it either, because then the editor misses the mouseup event, and
      // thinks we're multi-selecting blocks.
      this.setState({
        interactive: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          preview = _this$props.preview,
          previewable = _this$props.previewable,
          url = _this$props.url,
          type = _this$props.type,
          caption = _this$props.caption,
          onCaptionChange = _this$props.onCaptionChange,
          isSelected = _this$props.isSelected,
          className = _this$props.className,
          icon = _this$props.icon,
          label = _this$props.label,
          insertBlocksAfter = _this$props.insertBlocksAfter;
      var scripts = preview.scripts;
      var interactive = this.state.interactive;
      var html = 'photo' === type ? util_getPhotoHtml(preview) : preview.html;
      var parsedHost = new URL(url).host.split('.');
      var parsedHostBaseUrl = parsedHost.splice(parsedHost.length - 2, parsedHost.length - 1).join('.');
      var iframeTitle = Object(external_this_wp_i18n_["sprintf"])( // translators: %s: host providing embed content e.g: www.youtube.com
      Object(external_this_wp_i18n_["__"])('Embedded content from %s'), parsedHostBaseUrl);
      var sandboxClassnames = dedupe_default()(type, className, 'wp-block-embed__wrapper'); // Disabled because the overlay div doesn't actually have a role or functionality
      // as far as the user is concerned. We're just catching the first click so that
      // the block can be selected without interacting with the embed preview that the overlay covers.

      /* eslint-disable jsx-a11y/no-static-element-interactions */

      var embedWrapper = 'wp-embed' === type ? Object(external_this_wp_element_["createElement"])(wp_embed_preview, {
        html: html
      }) : Object(external_this_wp_element_["createElement"])("div", {
        className: "wp-block-embed__wrapper"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SandBox"], {
        html: html,
        scripts: scripts,
        title: iframeTitle,
        type: sandboxClassnames,
        onFocus: this.hideOverlay
      }), !interactive && Object(external_this_wp_element_["createElement"])("div", {
        className: "block-library-embed__interactive-overlay",
        onMouseUp: this.hideOverlay
      }));
      /* eslint-enable jsx-a11y/no-static-element-interactions */

      return Object(external_this_wp_element_["createElement"])("figure", {
        className: dedupe_default()(className, 'wp-block-embed', {
          'is-type-video': 'video' === type
        })
      }, previewable ? embedWrapper : Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Placeholder"], {
        icon: Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
          icon: icon,
          showColors: true
        }),
        label: label
      }, Object(external_this_wp_element_["createElement"])("p", {
        className: "components-placeholder__error"
      }, Object(external_this_wp_element_["createElement"])("a", {
        href: url
      }, url)), Object(external_this_wp_element_["createElement"])("p", {
        className: "components-placeholder__error"
      }, Object(external_this_wp_i18n_["sprintf"])(
      /* translators: %s: host providing embed content e.g: www.youtube.com */
      Object(external_this_wp_i18n_["__"])("Embedded content from %s can't be previewed in the editor."), parsedHostBaseUrl))), (!external_this_wp_blockEditor_["RichText"].isEmpty(caption) || isSelected) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
        tagName: "figcaption",
        placeholder: Object(external_this_wp_i18n_["__"])('Write caption…'),
        value: caption,
        onChange: onCaptionChange,
        inlineToolbar: true,
        __unstableOnSplitAtEnd: function __unstableOnSplitAtEnd() {
          return insertBlocksAfter(Object(external_this_wp_blocks_["createBlock"])('core/paragraph'));
        }
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      if (!nextProps.isSelected && state.interactive) {
        // We only want to change this when the block is not selected, because changing it when
        // the block becomes selected makes the overlap disappear too early. Hiding the overlay
        // happens on mouseup when the overlay is clicked.
        return {
          interactive: false
        };
      }

      return null;
    }
  }]);

  return EmbedPreview;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var embed_preview = (embed_preview_EmbedPreview);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/edit.js




function embed_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function embed_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { embed_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { embed_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */





/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




function edit_getResponsiveHelp(checked) {
  return checked ? Object(external_this_wp_i18n_["__"])('This embed will preserve its aspect ratio when the browser is resized.') : Object(external_this_wp_i18n_["__"])('This embed may not preserve its aspect ratio when the browser is resized.');
}

function getEmbedEditComponent(title, icon) {
  var responsive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var previewable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return function EmbedEditComponent(props) {
    var attributes = props.attributes,
        cannotEmbed = props.cannotEmbed,
        fetching = props.fetching,
        isSelected = props.isSelected,
        onReplace = props.onReplace,
        preview = props.preview,
        setAttributes = props.setAttributes,
        themeSupportsResponsive = props.themeSupportsResponsive,
        tryAgain = props.tryAgain,
        insertBlocksAfter = props.insertBlocksAfter;

    var _useState = Object(external_this_wp_element_["useState"])(attributes.url),
        _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
        url = _useState2[0],
        setURL = _useState2[1];

    var _useState3 = Object(external_this_wp_element_["useState"])(false),
        _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
        isEditingURL = _useState4[0],
        setIsEditingURL = _useState4[1];
    /**
     * @return {Object} Attributes derived from the preview, merged with the current attributes.
     */


    var getMergedAttributes = function getMergedAttributes() {
      var className = attributes.className,
          allowResponsive = attributes.allowResponsive;
      return embed_edit_objectSpread({}, attributes, {}, getAttributesFromPreview(preview, title, className, responsive, allowResponsive));
    };

    var handleIncomingPreview = function handleIncomingPreview() {
      setAttributes(getMergedAttributes());

      if (onReplace) {
        var upgradedBlock = util_createUpgradedEmbedBlock(props, getMergedAttributes());

        if (upgradedBlock) {
          onReplace(upgradedBlock);
        }
      }
    };

    var toggleResponsive = function toggleResponsive() {
      var allowResponsive = attributes.allowResponsive,
          className = attributes.className;
      var html = preview.html;
      var newAllowResponsive = !allowResponsive;
      setAttributes({
        allowResponsive: newAllowResponsive,
        className: getClassNames(html, className, responsive && newAllowResponsive)
      });
    };

    Object(external_this_wp_element_["useEffect"])(function () {
      if (!(preview === null || preview === void 0 ? void 0 : preview.html)) {
        return;
      } // If we can embed the url, bail early.


      if (!cannotEmbed) {
        return;
      } // At this stage, we either have a new preview or a new URL, but we can't embed it.
      // If we are already fetching the preview, bail early.


      if (fetching) {
        return;
      } // At this stage, we're not fetching the preview, so we know it can't be embedded, so try
      // removing any trailing slash, and resubmit.


      var newURL = attributes.url.replace(/\/$/, '');
      setURL(newURL);
      setIsEditingURL(false);
      setAttributes({
        url: newURL
      });
    }, [preview === null || preview === void 0 ? void 0 : preview.html, attributes.url]);
    Object(external_this_wp_element_["useEffect"])(function () {
      if (preview && !isEditingURL) {
        handleIncomingPreview();
      }
    }, [preview, isEditingURL]);

    if (fetching) {
      return Object(external_this_wp_element_["createElement"])(embed_loading, null);
    } // translators: %s: type of embed e.g: "YouTube", "Twitter", etc. "Embed" is used when no specific type exists


    var label = Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('%s URL'), title); // No preview, or we can't embed the current URL, or we've clicked the edit button.

    if (!preview || cannotEmbed || isEditingURL) {
      return Object(external_this_wp_element_["createElement"])(embed_placeholder, {
        icon: icon,
        label: label,
        onSubmit: function onSubmit(event) {
          if (event) {
            event.preventDefault();
          }

          setIsEditingURL(false);
          setAttributes({
            url: url
          });
        },
        value: url,
        cannotEmbed: cannotEmbed,
        onChange: function onChange(event) {
          return setURL(event.target.value);
        },
        fallback: function fallback() {
          return util_fallback(url, onReplace);
        },
        tryAgain: tryAgain
      });
    } // Even though we set attributes that get derived from the preview,
    // we don't access them directly because for the initial render,
    // the `setAttributes` call will not have taken effect. If we're
    // rendering responsive content, setting the responsive classes
    // after the preview has been rendered can result in unwanted
    // clipping or scrollbars. The `getAttributesFromPreview` function
    // that `getMergedAttributes` uses is memoized so that we're not
    // calculating them on every render.


    var previewAttributes = getMergedAttributes(props, title, responsive);
    var caption = previewAttributes.caption,
        type = previewAttributes.type,
        allowResponsive = previewAttributes.allowResponsive;
    var className = classnames_default()(previewAttributes.className, props.className);
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(embed_controls, {
      showEditButton: preview && !cannotEmbed,
      themeSupportsResponsive: themeSupportsResponsive,
      blockSupportsResponsive: responsive,
      allowResponsive: allowResponsive,
      getResponsiveHelp: edit_getResponsiveHelp,
      toggleResponsive: toggleResponsive,
      switchBackToURLInput: function switchBackToURLInput() {
        return setIsEditingURL(true);
      }
    }), Object(external_this_wp_element_["createElement"])(embed_preview, {
      preview: preview,
      previewable: previewable,
      className: className,
      url: url,
      type: type,
      caption: caption,
      onCaptionChange: function onCaptionChange(value) {
        return setAttributes({
          caption: value
        });
      },
      isSelected: isSelected,
      icon: icon,
      label: label,
      insertBlocksAfter: insertBlocksAfter
    }));
  };
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/settings.js



function settings_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function settings_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { settings_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { settings_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





var embedAttributes = {
  url: {
    type: 'string'
  },
  caption: {
    type: 'string',
    source: 'html',
    selector: 'figcaption'
  },
  type: {
    type: 'string'
  },
  providerNameSlug: {
    type: 'string'
  },
  allowResponsive: {
    type: 'boolean',
    default: true
  }
};
function getEmbedBlockSettings(_ref) {
  var title = _ref.title,
      description = _ref.description,
      icon = _ref.icon,
      _ref$category = _ref.category,
      category = _ref$category === void 0 ? 'embed' : _ref$category,
      transforms = _ref.transforms,
      _ref$keywords = _ref.keywords,
      keywords = _ref$keywords === void 0 ? [] : _ref$keywords,
      _ref$supports = _ref.supports,
      supports = _ref$supports === void 0 ? {} : _ref$supports,
      _ref$responsive = _ref.responsive,
      responsive = _ref$responsive === void 0 ? true : _ref$responsive,
      _ref$previewable = _ref.previewable,
      previewable = _ref$previewable === void 0 ? true : _ref$previewable;

  var blockDescription = description || Object(external_this_wp_i18n_["__"])('Add a block that displays content pulled from other sites, like Twitter, Instagram or YouTube.');

  var edit = getEmbedEditComponent(title, icon, responsive, previewable);
  return {
    title: title,
    description: blockDescription,
    icon: icon,
    category: category,
    keywords: keywords,
    attributes: embedAttributes,
    supports: settings_objectSpread({
      align: true
    }, supports),
    transforms: transforms,
    edit: Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select, ownProps) {
      var url = ownProps.attributes.url;
      var core = select('core');
      var getEmbedPreview = core.getEmbedPreview,
          isPreviewEmbedFallback = core.isPreviewEmbedFallback,
          isRequestingEmbedPreview = core.isRequestingEmbedPreview,
          getThemeSupports = core.getThemeSupports;
      var preview = undefined !== url && getEmbedPreview(url);
      var previewIsFallback = undefined !== url && isPreviewEmbedFallback(url);
      var fetching = undefined !== url && isRequestingEmbedPreview(url);
      var themeSupports = getThemeSupports(); // The external oEmbed provider does not exist. We got no type info and no html.

      var badEmbedProvider = !!preview && undefined === preview.type && false === preview.html; // Some WordPress URLs that can't be embedded will cause the API to return
      // a valid JSON response with no HTML and `data.status` set to 404, rather
      // than generating a fallback response as other embeds do.

      var wordpressCantEmbed = !!preview && preview.data && preview.data.status === 404;
      var validPreview = !!preview && !badEmbedProvider && !wordpressCantEmbed;
      var cannotEmbed = undefined !== url && (!validPreview || previewIsFallback);
      return {
        preview: validPreview ? preview : undefined,
        fetching: fetching,
        themeSupportsResponsive: themeSupports['responsive-embeds'],
        cannotEmbed: cannotEmbed
      };
    }), Object(external_this_wp_data_["withDispatch"])(function (dispatch, ownProps) {
      var url = ownProps.attributes.url;
      var coreData = dispatch('core/data');

      var tryAgain = function tryAgain() {
        coreData.invalidateResolution('core', 'getEmbedPreview', [url]);
      };

      return {
        tryAgain: tryAgain
      };
    }))(edit),
    save: function save(_ref2) {
      var _classnames;

      var attributes = _ref2.attributes;
      var url = attributes.url,
          caption = attributes.caption,
          type = attributes.type,
          providerNameSlug = attributes.providerNameSlug;

      if (!url) {
        return null;
      }

      var embedClassName = dedupe_default()('wp-block-embed', (_classnames = {}, Object(defineProperty["a" /* default */])(_classnames, "is-type-".concat(type), type), Object(defineProperty["a" /* default */])(_classnames, "is-provider-".concat(providerNameSlug), providerNameSlug), _classnames));
      return Object(external_this_wp_element_["createElement"])("figure", {
        className: embedClassName
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "wp-block-embed__wrapper"
      }, "\n".concat(url, "\n")
      /* URL needs to be on its own line. */
      ), !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
        tagName: "figcaption",
        value: caption
      }));
    },
    deprecated: [{
      attributes: embedAttributes,
      save: function save(_ref3) {
        var _classnames2;

        var attributes = _ref3.attributes;
        var url = attributes.url,
            caption = attributes.caption,
            type = attributes.type,
            providerNameSlug = attributes.providerNameSlug;

        if (!url) {
          return null;
        }

        var embedClassName = dedupe_default()('wp-block-embed', (_classnames2 = {}, Object(defineProperty["a" /* default */])(_classnames2, "is-type-".concat(type), type), Object(defineProperty["a" /* default */])(_classnames2, "is-provider-".concat(providerNameSlug), providerNameSlug), _classnames2));
        return Object(external_this_wp_element_["createElement"])("figure", {
          className: embedClassName
        }, "\n".concat(url, "\n")
        /* URL needs to be on its own line. */
        , !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
          tagName: "figcaption",
          value: caption
        }));
      }
    }]
  };
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/transforms.js


/**
 * WordPress dependencies
 */


/**
 * Default transforms for generic embeds.
 */

var embed_transforms_transforms = {
  from: [{
    type: 'raw',
    isMatch: function isMatch(node) {
      return node.nodeName === 'P' && /^\s*(https?:\/\/\S+)\s*$/i.test(node.textContent);
    },
    transform: function transform(node) {
      return Object(external_this_wp_blocks_["createBlock"])('core/embed', {
        url: node.textContent.trim()
      });
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(_ref) {
      var url = _ref.url,
          caption = _ref.caption;
      var link = Object(external_this_wp_element_["createElement"])("a", {
        href: url
      }, caption || url);
      return Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
        content: Object(external_this_wp_element_["renderToString"])(link)
      });
    }
  }]
};
/* harmony default export */ var embed_transforms = (embed_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/index.js


function embed_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function embed_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { embed_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { embed_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */




/**
 * WordPress dependencies
 */


var embed_name = 'core/embed';
var embed_settings = getEmbedBlockSettings({
  title: Object(external_this_wp_i18n_["_x"])('Embed', 'block title'),
  description: Object(external_this_wp_i18n_["__"])('Embed videos, images, tweets, audio, and other content from external sources.'),
  icon: embedContentIcon,
  // Unknown embeds should not be responsive by default.
  responsive: false,
  transforms: embed_transforms
});
var embed_common = common.map(function (embedDefinition) {
  var embedSettings = getEmbedBlockSettings(embedDefinition.settings);
  return embed_objectSpread({}, embedDefinition, {
    settings: embed_objectSpread({}, embedSettings, {
      transforms: embed_transforms
    })
  });
});
var embed_others = others.map(function (embedDefinition) {
  var embedSettings = getEmbedBlockSettings(embedDefinition.settings);
  return embed_objectSpread({}, embedDefinition, {
    settings: embed_objectSpread({}, embedSettings, {
      transforms: embed_transforms
    })
  });
});

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/file.js


/**
 * WordPress dependencies
 */

var file_file = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M19 6.2h-5.9l-.6-1.1c-.3-.7-1-1.1-1.8-1.1H5c-1.1 0-2 .9-2 2v11.8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.2c0-1.1-.9-2-2-2zm.5 11.6c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h5.8c.2 0 .4.1.4.3l1 2H19c.3 0 .5.2.5.5v9.5z"
}));
/* harmony default export */ var library_file = (file_file);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/file/inspector.js


/**
 * WordPress dependencies
 */



function FileBlockInspector(_ref) {
  var hrefs = _ref.hrefs,
      openInNewWindow = _ref.openInNewWindow,
      showDownloadButton = _ref.showDownloadButton,
      changeLinkDestinationOption = _ref.changeLinkDestinationOption,
      changeOpenInNewWindow = _ref.changeOpenInNewWindow,
      changeShowDownloadButton = _ref.changeShowDownloadButton;
  var href = hrefs.href,
      textLinkHref = hrefs.textLinkHref,
      attachmentPage = hrefs.attachmentPage;
  var linkDestinationOptions = [{
    value: href,
    label: Object(external_this_wp_i18n_["__"])('URL')
  }];

  if (attachmentPage) {
    linkDestinationOptions = [{
      value: href,
      label: Object(external_this_wp_i18n_["__"])('Media file')
    }, {
      value: attachmentPage,
      label: Object(external_this_wp_i18n_["__"])('Attachment page')
    }];
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Text link settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SelectControl"], {
    label: Object(external_this_wp_i18n_["__"])('Link to'),
    value: textLinkHref,
    options: linkDestinationOptions,
    onChange: changeLinkDestinationOption
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Open in new tab'),
    checked: openInNewWindow,
    onChange: changeOpenInNewWindow
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Download button settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Show download button'),
    checked: showDownloadButton,
    onChange: changeShowDownloadButton
  }))));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/file/edit.js










function file_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (file_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function file_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */



var edit_FileEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(FileEdit, _Component);

  var _super = file_edit_createSuper(FileEdit);

  function FileEdit() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, FileEdit);

    _this = _super.apply(this, arguments);
    _this.onSelectFile = _this.onSelectFile.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.confirmCopyURL = _this.confirmCopyURL.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.resetCopyConfirmation = _this.resetCopyConfirmation.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.changeLinkDestinationOption = _this.changeLinkDestinationOption.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.changeOpenInNewWindow = _this.changeOpenInNewWindow.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.changeShowDownloadButton = _this.changeShowDownloadButton.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onUploadError = _this.onUploadError.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      hasError: false,
      showCopyConfirmation: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(FileEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          mediaUpload = _this$props.mediaUpload,
          noticeOperations = _this$props.noticeOperations,
          setAttributes = _this$props.setAttributes;
      var downloadButtonText = attributes.downloadButtonText,
          href = attributes.href; // Upload a file drag-and-dropped into the editor

      if (Object(external_this_wp_blob_["isBlobURL"])(href)) {
        var file = Object(external_this_wp_blob_["getBlobByURL"])(href);
        mediaUpload({
          filesList: [file],
          onFileChange: function onFileChange(_ref) {
            var _ref2 = Object(slicedToArray["a" /* default */])(_ref, 1),
                media = _ref2[0];

            return _this2.onSelectFile(media);
          },
          onError: function onError(message) {
            _this2.setState({
              hasError: true
            });

            noticeOperations.createErrorNotice(message);
          }
        });
        Object(external_this_wp_blob_["revokeBlobURL"])(href);
      }

      if (downloadButtonText === undefined) {
        setAttributes({
          downloadButtonText: Object(external_this_wp_i18n_["_x"])('Download', 'button label')
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Reset copy confirmation state when block is deselected
      if (prevProps.isSelected && !this.props.isSelected) {
        this.setState({
          showCopyConfirmation: false
        });
      }
    }
  }, {
    key: "onSelectFile",
    value: function onSelectFile(media) {
      if (media && media.url) {
        this.setState({
          hasError: false
        });
        this.props.setAttributes({
          href: media.url,
          fileName: media.title,
          textLinkHref: media.url,
          id: media.id
        });
      }
    }
  }, {
    key: "onUploadError",
    value: function onUploadError(message) {
      var noticeOperations = this.props.noticeOperations;
      noticeOperations.removeAllNotices();
      noticeOperations.createErrorNotice(message);
    }
  }, {
    key: "confirmCopyURL",
    value: function confirmCopyURL() {
      this.setState({
        showCopyConfirmation: true
      });
    }
  }, {
    key: "resetCopyConfirmation",
    value: function resetCopyConfirmation() {
      this.setState({
        showCopyConfirmation: false
      });
    }
  }, {
    key: "changeLinkDestinationOption",
    value: function changeLinkDestinationOption(newHref) {
      // Choose Media File or Attachment Page (when file is in Media Library)
      this.props.setAttributes({
        textLinkHref: newHref
      });
    }
  }, {
    key: "changeOpenInNewWindow",
    value: function changeOpenInNewWindow(newValue) {
      this.props.setAttributes({
        textLinkTarget: newValue ? '_blank' : false
      });
    }
  }, {
    key: "changeShowDownloadButton",
    value: function changeShowDownloadButton(newValue) {
      this.props.setAttributes({
        showDownloadButton: newValue
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          isSelected = _this$props2.isSelected,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes,
          noticeUI = _this$props2.noticeUI,
          media = _this$props2.media;
      var id = attributes.id,
          fileName = attributes.fileName,
          href = attributes.href,
          textLinkHref = attributes.textLinkHref,
          textLinkTarget = attributes.textLinkTarget,
          showDownloadButton = attributes.showDownloadButton,
          downloadButtonText = attributes.downloadButtonText;
      var _this$state = this.state,
          hasError = _this$state.hasError,
          showCopyConfirmation = _this$state.showCopyConfirmation;
      var attachmentPage = media && media.link;

      if (!href || hasError) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaPlaceholder"], {
          icon: Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
            icon: library_file
          }),
          labels: {
            title: Object(external_this_wp_i18n_["__"])('File'),
            instructions: Object(external_this_wp_i18n_["__"])('Upload a file or pick one from your media library.')
          },
          onSelect: this.onSelectFile,
          notices: noticeUI,
          onError: this.onUploadError,
          accept: "*"
        });
      }

      var classes = classnames_default()(className, {
        'is-transient': Object(external_this_wp_blob_["isBlobURL"])(href)
      });
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(FileBlockInspector, Object(esm_extends["a" /* default */])({
        hrefs: {
          href: href,
          textLinkHref: textLinkHref,
          attachmentPage: attachmentPage
        }
      }, {
        openInNewWindow: !!textLinkTarget,
        showDownloadButton: showDownloadButton,
        changeLinkDestinationOption: this.changeLinkDestinationOption,
        changeOpenInNewWindow: this.changeOpenInNewWindow,
        changeShowDownloadButton: this.changeShowDownloadButton
      })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaReplaceFlow"], {
        mediaId: id,
        mediaURL: href,
        accept: "*",
        onSelect: this.onSelectFile,
        onError: this.onUploadError
      })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Animate"], {
        type: Object(external_this_wp_blob_["isBlobURL"])(href) ? 'loading' : null
      }, function (_ref3) {
        var animateClassName = _ref3.className;
        return Object(external_this_wp_element_["createElement"])("div", {
          className: classnames_default()(classes, animateClassName)
        }, Object(external_this_wp_element_["createElement"])("div", {
          className: 'wp-block-file__content-wrapper'
        }, Object(external_this_wp_element_["createElement"])("div", {
          className: "wp-block-file__textlink"
        }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
          tagName: "div" // must be block-level or else cursor disappears
          ,
          value: fileName,
          placeholder: Object(external_this_wp_i18n_["__"])('Write file name…'),
          withoutInteractiveFormatting: true,
          onChange: function onChange(text) {
            return setAttributes({
              fileName: text
            });
          }
        })), showDownloadButton && Object(external_this_wp_element_["createElement"])("div", {
          className: 'wp-block-file__button-richtext-wrapper'
        }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
          tagName: "div" // must be block-level or else cursor disappears
          ,
          className: 'wp-block-file__button',
          value: downloadButtonText,
          withoutInteractiveFormatting: true,
          placeholder: Object(external_this_wp_i18n_["__"])('Add text…'),
          onChange: function onChange(text) {
            return setAttributes({
              downloadButtonText: text
            });
          }
        }))), isSelected && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ClipboardButton"], {
          isSecondary: true,
          text: href,
          className: 'wp-block-file__copy-url-button',
          onCopy: _this3.confirmCopyURL,
          onFinishCopy: _this3.resetCopyConfirmation,
          disabled: Object(external_this_wp_blob_["isBlobURL"])(href)
        }, showCopyConfirmation ? Object(external_this_wp_i18n_["__"])('Copied!') : Object(external_this_wp_i18n_["__"])('Copy URL')));
      }));
    }
  }]);

  return FileEdit;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var file_edit = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, props) {
  var _select = select('core'),
      getMedia = _select.getMedia;

  var _select2 = select('core/block-editor'),
      getSettings = _select2.getSettings;

  var _getSettings = getSettings(),
      mediaUpload = _getSettings.mediaUpload;

  var id = props.attributes.id;
  return {
    media: id === undefined ? undefined : getMedia(id),
    mediaUpload: mediaUpload
  };
}), external_this_wp_components_["withNotices"]])(edit_FileEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/file/save.js


/**
 * WordPress dependencies
 */

function file_save_save(_ref) {
  var attributes = _ref.attributes;
  var href = attributes.href,
      fileName = attributes.fileName,
      textLinkHref = attributes.textLinkHref,
      textLinkTarget = attributes.textLinkTarget,
      showDownloadButton = attributes.showDownloadButton,
      downloadButtonText = attributes.downloadButtonText;
  return href && Object(external_this_wp_element_["createElement"])("div", null, !external_this_wp_blockEditor_["RichText"].isEmpty(fileName) && Object(external_this_wp_element_["createElement"])("a", {
    href: textLinkHref,
    target: textLinkTarget,
    rel: textLinkTarget ? 'noreferrer noopener' : false
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    value: fileName
  })), showDownloadButton && Object(external_this_wp_element_["createElement"])("a", {
    href: href,
    className: "wp-block-file__button",
    download: true
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    value: downloadButtonText
  })));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/file/transforms.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




var file_transforms_transforms = {
  from: [{
    type: 'files',
    isMatch: function isMatch(files) {
      return files.length > 0;
    },
    // We define a lower priorty (higher number) than the default of 10. This
    // ensures that the File block is only created as a fallback.
    priority: 15,
    transform: function transform(files) {
      var blocks = [];
      files.forEach(function (file) {
        var blobURL = Object(external_this_wp_blob_["createBlobURL"])(file); // File will be uploaded in componentDidMount()

        blocks.push(Object(external_this_wp_blocks_["createBlock"])('core/file', {
          href: blobURL,
          fileName: file.name,
          textLinkHref: blobURL
        }));
      });
      return blocks;
    }
  }, {
    type: 'block',
    blocks: ['core/audio'],
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/file', {
        href: attributes.src,
        fileName: attributes.caption,
        textLinkHref: attributes.src,
        id: attributes.id,
        anchor: attributes.anchor
      });
    }
  }, {
    type: 'block',
    blocks: ['core/video'],
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/file', {
        href: attributes.src,
        fileName: attributes.caption,
        textLinkHref: attributes.src,
        id: attributes.id,
        anchor: attributes.anchor
      });
    }
  }, {
    type: 'block',
    blocks: ['core/image'],
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/file', {
        href: attributes.url,
        fileName: attributes.caption,
        textLinkHref: attributes.url,
        id: attributes.id,
        anchor: attributes.anchor
      });
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/audio'],
    isMatch: function isMatch(_ref) {
      var id = _ref.id;

      if (!id) {
        return false;
      }

      var _select = Object(external_this_wp_data_["select"])('core'),
          getMedia = _select.getMedia;

      var media = getMedia(id);
      return !!media && Object(external_this_lodash_["includes"])(media.mime_type, 'audio');
    },
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/audio', {
        src: attributes.href,
        caption: attributes.fileName,
        id: attributes.id,
        anchor: attributes.anchor
      });
    }
  }, {
    type: 'block',
    blocks: ['core/video'],
    isMatch: function isMatch(_ref2) {
      var id = _ref2.id;

      if (!id) {
        return false;
      }

      var _select2 = Object(external_this_wp_data_["select"])('core'),
          getMedia = _select2.getMedia;

      var media = getMedia(id);
      return !!media && Object(external_this_lodash_["includes"])(media.mime_type, 'video');
    },
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/video', {
        src: attributes.href,
        caption: attributes.fileName,
        id: attributes.id,
        anchor: attributes.anchor
      });
    }
  }, {
    type: 'block',
    blocks: ['core/image'],
    isMatch: function isMatch(_ref3) {
      var id = _ref3.id;

      if (!id) {
        return false;
      }

      var _select3 = Object(external_this_wp_data_["select"])('core'),
          getMedia = _select3.getMedia;

      var media = getMedia(id);
      return !!media && Object(external_this_lodash_["includes"])(media.mime_type, 'image');
    },
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/image', {
        url: attributes.href,
        caption: attributes.fileName,
        id: attributes.id,
        anchor: attributes.anchor
      });
    }
  }]
};
/* harmony default export */ var file_transforms = (file_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/file/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var file_metadata = {
  name: "core/file",
  category: "media",
  attributes: {
    id: {
      type: "number"
    },
    href: {
      type: "string"
    },
    fileName: {
      type: "string",
      source: "html",
      selector: "a:not([download])"
    },
    textLinkHref: {
      type: "string",
      source: "attribute",
      selector: "a:not([download])",
      attribute: "href"
    },
    textLinkTarget: {
      type: "string",
      source: "attribute",
      selector: "a:not([download])",
      attribute: "target"
    },
    showDownloadButton: {
      type: "boolean",
      "default": true
    },
    downloadButtonText: {
      type: "string",
      source: "html",
      selector: "a[download]"
    }
  },
  supports: {
    anchor: true,
    align: true
  }
};


var file_name = file_metadata.name;

var file_settings = {
  title: Object(external_this_wp_i18n_["__"])('File'),
  description: Object(external_this_wp_i18n_["__"])('Add a link to a downloadable file.'),
  icon: library_file,
  keywords: [Object(external_this_wp_i18n_["__"])('document'), Object(external_this_wp_i18n_["__"])('pdf'), Object(external_this_wp_i18n_["__"])('download')],
  transforms: file_transforms,
  edit: file_edit,
  save: file_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/html.js


/**
 * WordPress dependencies
 */

var html_html = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M4.8 11.4H2.1V9H1v6h1.1v-2.6h2.7V15h1.1V9H4.8v2.4zm1.9-1.3h1.7V15h1.1v-4.9h1.7V9H6.7v1.1zM16.2 9l-1.5 2.7L13.3 9h-.9l-.8 6h1.1l.5-4 1.5 2.8 1.5-2.8.5 4h1.1L17 9h-.8zm3.8 5V9h-1.1v6h3.6v-1H20z"
}));
/* harmony default export */ var library_html = (html_html);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/html/edit.js









function html_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (html_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function html_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */






var edit_HTMLEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(HTMLEdit, _Component);

  var _super = html_edit_createSuper(HTMLEdit);

  function HTMLEdit() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, HTMLEdit);

    _this = _super.apply(this, arguments);
    _this.state = {
      isPreview: false,
      styles: []
    };
    _this.switchToHTML = _this.switchToHTML.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.switchToPreview = _this.switchToPreview.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(HTMLEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var styles = this.props.styles; // Default styles used to unset some of the styles
      // that might be inherited from the editor style.

      var defaultStyles = "\n\t\t\thtml,body,:root {\n\t\t\t\tmargin: 0 !important;\n\t\t\t\tpadding: 0 !important;\n\t\t\t\toverflow: visible !important;\n\t\t\t\tmin-height: auto !important;\n\t\t\t}\n\t\t";
      this.setState({
        styles: [defaultStyles].concat(Object(toConsumableArray["a" /* default */])(Object(external_this_wp_blockEditor_["transformStyles"])(styles)))
      });
    }
  }, {
    key: "switchToPreview",
    value: function switchToPreview() {
      this.setState({
        isPreview: true
      });
    }
  }, {
    key: "switchToHTML",
    value: function switchToHTML() {
      this.setState({
        isPreview: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var _this$state = this.state,
          isPreview = _this$state.isPreview,
          styles = _this$state.styles;
      return Object(external_this_wp_element_["createElement"])("div", {
        className: "wp-block-html"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
        className: "components-tab-button",
        isPressed: !isPreview,
        onClick: this.switchToHTML
      }, Object(external_this_wp_element_["createElement"])("span", null, "HTML")), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
        className: "components-tab-button",
        isPressed: isPreview,
        onClick: this.switchToPreview
      }, Object(external_this_wp_element_["createElement"])("span", null, Object(external_this_wp_i18n_["__"])('Preview'))))), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Disabled"].Consumer, null, function (isDisabled) {
        return isPreview || isDisabled ? Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SandBox"], {
          html: attributes.content,
          styles: styles
        }), !_this2.props.isSelected && Object(external_this_wp_element_["createElement"])("div", {
          className: "block-library-html__preview-overlay"
        })) : Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["PlainText"], {
          value: attributes.content,
          onChange: function onChange(content) {
            return setAttributes({
              content: content
            });
          },
          placeholder: Object(external_this_wp_i18n_["__"])('Write HTML…'),
          "aria-label": Object(external_this_wp_i18n_["__"])('HTML')
        });
      }));
    }
  }]);

  return HTMLEdit;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var html_edit = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      getSettings = _select.getSettings;

  return {
    styles: getSettings().styles
  };
})(edit_HTMLEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/html/save.js


/**
 * WordPress dependencies
 */

function html_save_save(_ref) {
  var attributes = _ref.attributes;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], null, attributes.content);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/html/transforms.js
/**
 * WordPress dependencies
 */

var html_transforms_transforms = {
  from: [{
    type: 'block',
    blocks: ['core/code'],
    transform: function transform(_ref) {
      var content = _ref.content;
      return Object(external_this_wp_blocks_["createBlock"])('core/html', {
        content: content
      });
    }
  }]
};
/* harmony default export */ var html_transforms = (html_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/html/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var html_metadata = {
  name: "core/html",
  category: "widgets",
  attributes: {
    content: {
      type: "string",
      source: "html"
    }
  },
  supports: {
    customClassName: false,
    className: false,
    html: false
  }
};


var html_name = html_metadata.name;

var html_settings = {
  title: Object(external_this_wp_i18n_["__"])('Custom HTML'),
  description: Object(external_this_wp_i18n_["__"])('Add custom HTML code and preview it as you edit.'),
  icon: library_html,
  keywords: [Object(external_this_wp_i18n_["__"])('embed')],
  example: {
    attributes: {
      content: '<marquee>' + Object(external_this_wp_i18n_["__"])('Welcome to the wonderful world of blocks…') + '</marquee>'
    }
  },
  edit: html_edit,
  save: html_save_save,
  transforms: html_transforms
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/media-and-text.js


/**
 * WordPress dependencies
 */

var mediaAndText = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M4 17h7V6H4v11zm9-10v1.5h7V7h-7zm0 5.5h7V11h-7v1.5zm0 4h7V15h-7v1.5z"
}));
/* harmony default export */ var media_and_text = (mediaAndText);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/media-text/media-container-icon.js


/**
 * WordPress dependencies
 */

/* harmony default export */ var media_container_icon = (Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M18 2l2 4h-2l-2-4h-3l2 4h-2l-2-4h-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2zm2 12H10V4.4L11.8 8H20z"
}), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M14 20H4V10h3V8H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3h-2z"
}), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M5 19h8l-1.59-2H9.24l-.84 1.1L7 16.3 5 19z"
})));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/media-text/media-container.js




/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


/**
 * Constants
 */

var media_container_ALLOWED_MEDIA_TYPES = ['image', 'video'];
function imageFillStyles(url, focalPoint) {
  return url ? {
    backgroundImage: "url(".concat(url, ")"),
    backgroundPosition: focalPoint ? "".concat(focalPoint.x * 100, "% ").concat(focalPoint.y * 100, "%") : "50% 50%"
  } : {};
}

function ResizableBoxContainer(_ref) {
  var isSelected = _ref.isSelected,
      isStackedOnMobile = _ref.isStackedOnMobile,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["isSelected", "isStackedOnMobile"]);

  var isMobile = Object(external_this_wp_compose_["useViewportMatch"])('small', '<');
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ResizableBox"], Object(esm_extends["a" /* default */])({
    showHandle: isSelected && (!isMobile || !isStackedOnMobile)
  }, props));
}

function ToolbarEditButton(_ref2) {
  var mediaId = _ref2.mediaId,
      mediaUrl = _ref2.mediaUrl,
      onSelectMedia = _ref2.onSelectMedia;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaReplaceFlow"], {
    mediaId: mediaId,
    mediaURL: mediaUrl,
    allowedTypes: media_container_ALLOWED_MEDIA_TYPES,
    accept: "image/*,video/*",
    onSelect: onSelectMedia
  }));
}

function PlaceholderContainer(_ref3) {
  var className = _ref3.className,
      noticeOperations = _ref3.noticeOperations,
      noticeUI = _ref3.noticeUI,
      onSelectMedia = _ref3.onSelectMedia;

  var onUploadError = function onUploadError(message) {
    noticeOperations.removeAllNotices();
    noticeOperations.createErrorNotice(message);
  };

  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaPlaceholder"], {
    icon: Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
      icon: media_container_icon
    }),
    labels: {
      title: Object(external_this_wp_i18n_["__"])('Media area')
    },
    className: className,
    onSelect: onSelectMedia,
    accept: "image/*,video/*",
    allowedTypes: media_container_ALLOWED_MEDIA_TYPES,
    notices: noticeUI,
    onError: onUploadError
  });
}

function MediaContainer(props) {
  var className = props.className,
      commitWidthChange = props.commitWidthChange,
      focalPoint = props.focalPoint,
      imageFill = props.imageFill,
      isSelected = props.isSelected,
      isStackedOnMobile = props.isStackedOnMobile,
      mediaAlt = props.mediaAlt,
      mediaId = props.mediaId,
      mediaPosition = props.mediaPosition,
      mediaType = props.mediaType,
      mediaUrl = props.mediaUrl,
      mediaWidth = props.mediaWidth,
      onSelectMedia = props.onSelectMedia,
      onWidthChange = props.onWidthChange;

  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core/block-editor'),
      toggleSelection = _useDispatch.toggleSelection;

  if (mediaType && mediaUrl) {
    var onResizeStart = function onResizeStart() {
      toggleSelection(false);
    };

    var onResize = function onResize(event, direction, elt) {
      onWidthChange(parseInt(elt.style.width));
    };

    var onResizeStop = function onResizeStop(event, direction, elt) {
      toggleSelection(true);
      commitWidthChange(parseInt(elt.style.width));
    };

    var enablePositions = {
      right: mediaPosition === 'left',
      left: mediaPosition === 'right'
    };
    var backgroundStyles = mediaType === 'image' && imageFill ? imageFillStyles(mediaUrl, focalPoint) : {};
    var mediaTypeRenderers = {
      image: function image() {
        return Object(external_this_wp_element_["createElement"])("img", {
          src: mediaUrl,
          alt: mediaAlt
        });
      },
      video: function video() {
        return Object(external_this_wp_element_["createElement"])("video", {
          controls: true,
          src: mediaUrl
        });
      }
    };
    return Object(external_this_wp_element_["createElement"])(ResizableBoxContainer, {
      as: "figure",
      className: classnames_default()(className, 'editor-media-container__resizer'),
      style: backgroundStyles,
      size: {
        width: mediaWidth + '%'
      },
      minWidth: "10%",
      maxWidth: "100%",
      enable: enablePositions,
      onResizeStart: onResizeStart,
      onResize: onResize,
      onResizeStop: onResizeStop,
      axis: "x",
      isSelected: isSelected,
      isStackedOnMobile: isStackedOnMobile
    }, Object(external_this_wp_element_["createElement"])(ToolbarEditButton, {
      onSelectMedia: onSelectMedia,
      mediaUrl: mediaUrl,
      mediaId: mediaId
    }), (mediaTypeRenderers[mediaType] || external_this_lodash_["noop"])());
  }

  return Object(external_this_wp_element_["createElement"])(PlaceholderContainer, props);
}

/* harmony default export */ var media_container = (Object(external_this_wp_components_["withNotices"])(MediaContainer));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/media-text/deprecated.js



function media_text_deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function media_text_deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { media_text_deprecated_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { media_text_deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var DEFAULT_MEDIA_WIDTH = 50;

var media_text_deprecated_migrateCustomColors = function migrateCustomColors(attributes) {
  if (!attributes.customBackgroundColor) {
    return attributes;
  }

  var style = {
    color: {
      background: attributes.customBackgroundColor
    }
  };
  return media_text_deprecated_objectSpread({}, Object(external_this_lodash_["omit"])(attributes, ['customBackgroundColor']), {
    style: style
  });
};

var baseAttributes = {
  align: {
    type: 'string',
    default: 'wide'
  },
  backgroundColor: {
    type: 'string'
  },
  mediaAlt: {
    type: 'string',
    source: 'attribute',
    selector: 'figure img',
    attribute: 'alt',
    default: ''
  },
  mediaPosition: {
    type: 'string',
    default: 'left'
  },
  mediaId: {
    type: 'number'
  },
  mediaType: {
    type: 'string'
  },
  mediaWidth: {
    type: 'number',
    default: 50
  },
  isStackedOnMobile: {
    type: 'boolean',
    default: false
  }
};
/* harmony default export */ var media_text_deprecated = ([{
  attributes: media_text_deprecated_objectSpread({}, baseAttributes, {
    customBackgroundColor: {
      type: 'string'
    },
    mediaLink: {
      type: 'string'
    },
    linkDestination: {
      type: 'string'
    },
    linkTarget: {
      type: 'string',
      source: 'attribute',
      selector: 'figure a',
      attribute: 'target'
    },
    href: {
      type: 'string',
      source: 'attribute',
      selector: 'figure a',
      attribute: 'href'
    },
    rel: {
      type: 'string',
      source: 'attribute',
      selector: 'figure a',
      attribute: 'rel'
    },
    linkClass: {
      type: 'string',
      source: 'attribute',
      selector: 'figure a',
      attribute: 'class'
    },
    verticalAlignment: {
      type: 'string'
    },
    imageFill: {
      type: 'boolean'
    },
    focalPoint: {
      type: 'object'
    }
  }),
  migrate: media_text_deprecated_migrateCustomColors,
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        isStackedOnMobile = attributes.isStackedOnMobile,
        mediaAlt = attributes.mediaAlt,
        mediaPosition = attributes.mediaPosition,
        mediaType = attributes.mediaType,
        mediaUrl = attributes.mediaUrl,
        mediaWidth = attributes.mediaWidth,
        mediaId = attributes.mediaId,
        verticalAlignment = attributes.verticalAlignment,
        imageFill = attributes.imageFill,
        focalPoint = attributes.focalPoint,
        linkClass = attributes.linkClass,
        href = attributes.href,
        linkTarget = attributes.linkTarget,
        rel = attributes.rel;
    var newRel = Object(external_this_lodash_["isEmpty"])(rel) ? undefined : rel;

    var _image = Object(external_this_wp_element_["createElement"])("img", {
      src: mediaUrl,
      alt: mediaAlt,
      className: mediaId && mediaType === 'image' ? "wp-image-".concat(mediaId) : null
    });

    if (href) {
      _image = Object(external_this_wp_element_["createElement"])("a", {
        className: linkClass,
        href: href,
        target: linkTarget,
        rel: newRel
      }, _image);
    }

    var mediaTypeRenders = {
      image: function image() {
        return _image;
      },
      video: function video() {
        return Object(external_this_wp_element_["createElement"])("video", {
          controls: true,
          src: mediaUrl
        });
      }
    };
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var className = classnames_default()((_classnames = {
      'has-media-on-the-right': 'right' === mediaPosition,
      'has-background': backgroundClass || customBackgroundColor
    }, Object(defineProperty["a" /* default */])(_classnames, backgroundClass, backgroundClass), Object(defineProperty["a" /* default */])(_classnames, 'is-stacked-on-mobile', isStackedOnMobile), Object(defineProperty["a" /* default */])(_classnames, "is-vertically-aligned-".concat(verticalAlignment), verticalAlignment), Object(defineProperty["a" /* default */])(_classnames, 'is-image-fill', imageFill), _classnames));
    var backgroundStyles = imageFill ? imageFillStyles(mediaUrl, focalPoint) : {};
    var gridTemplateColumns;

    if (mediaWidth !== DEFAULT_MEDIA_WIDTH) {
      gridTemplateColumns = 'right' === mediaPosition ? "auto ".concat(mediaWidth, "%") : "".concat(mediaWidth, "% auto");
    }

    var style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      gridTemplateColumns: gridTemplateColumns
    };
    return Object(external_this_wp_element_["createElement"])("div", {
      className: className,
      style: style
    }, Object(external_this_wp_element_["createElement"])("figure", {
      className: "wp-block-media-text__media",
      style: backgroundStyles
    }, (mediaTypeRenders[mediaType] || external_this_lodash_["noop"])()), Object(external_this_wp_element_["createElement"])("div", {
      className: "wp-block-media-text__content"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null)));
  }
}, {
  attributes: media_text_deprecated_objectSpread({}, baseAttributes, {
    customBackgroundColor: {
      type: 'string'
    },
    mediaUrl: {
      type: 'string',
      source: 'attribute',
      selector: 'figure video,figure img',
      attribute: 'src'
    },
    verticalAlignment: {
      type: 'string'
    },
    imageFill: {
      type: 'boolean'
    },
    focalPoint: {
      type: 'object'
    }
  }),
  migrate: media_text_deprecated_migrateCustomColors,
  save: function save(_ref2) {
    var _classnames2;

    var attributes = _ref2.attributes;
    var backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        isStackedOnMobile = attributes.isStackedOnMobile,
        mediaAlt = attributes.mediaAlt,
        mediaPosition = attributes.mediaPosition,
        mediaType = attributes.mediaType,
        mediaUrl = attributes.mediaUrl,
        mediaWidth = attributes.mediaWidth,
        mediaId = attributes.mediaId,
        verticalAlignment = attributes.verticalAlignment,
        imageFill = attributes.imageFill,
        focalPoint = attributes.focalPoint;
    var mediaTypeRenders = {
      image: function image() {
        return Object(external_this_wp_element_["createElement"])("img", {
          src: mediaUrl,
          alt: mediaAlt,
          className: mediaId && mediaType === 'image' ? "wp-image-".concat(mediaId) : null
        });
      },
      video: function video() {
        return Object(external_this_wp_element_["createElement"])("video", {
          controls: true,
          src: mediaUrl
        });
      }
    };
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var className = classnames_default()((_classnames2 = {
      'has-media-on-the-right': 'right' === mediaPosition
    }, Object(defineProperty["a" /* default */])(_classnames2, backgroundClass, backgroundClass), Object(defineProperty["a" /* default */])(_classnames2, 'is-stacked-on-mobile', isStackedOnMobile), Object(defineProperty["a" /* default */])(_classnames2, "is-vertically-aligned-".concat(verticalAlignment), verticalAlignment), Object(defineProperty["a" /* default */])(_classnames2, 'is-image-fill', imageFill), _classnames2));
    var backgroundStyles = imageFill ? imageFillStyles(mediaUrl, focalPoint) : {};
    var gridTemplateColumns;

    if (mediaWidth !== DEFAULT_MEDIA_WIDTH) {
      gridTemplateColumns = 'right' === mediaPosition ? "auto ".concat(mediaWidth, "%") : "".concat(mediaWidth, "% auto");
    }

    var style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      gridTemplateColumns: gridTemplateColumns
    };
    return Object(external_this_wp_element_["createElement"])("div", {
      className: className,
      style: style
    }, Object(external_this_wp_element_["createElement"])("figure", {
      className: "wp-block-media-text__media",
      style: backgroundStyles
    }, (mediaTypeRenders[mediaType] || external_this_lodash_["noop"])()), Object(external_this_wp_element_["createElement"])("div", {
      className: "wp-block-media-text__content"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null)));
  }
}, {
  attributes: media_text_deprecated_objectSpread({}, baseAttributes, {
    customBackgroundColor: {
      type: 'string'
    },
    mediaUrl: {
      type: 'string',
      source: 'attribute',
      selector: 'figure video,figure img',
      attribute: 'src'
    }
  }),
  save: function save(_ref3) {
    var _classnames3;

    var attributes = _ref3.attributes;
    var backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        isStackedOnMobile = attributes.isStackedOnMobile,
        mediaAlt = attributes.mediaAlt,
        mediaPosition = attributes.mediaPosition,
        mediaType = attributes.mediaType,
        mediaUrl = attributes.mediaUrl,
        mediaWidth = attributes.mediaWidth;
    var mediaTypeRenders = {
      image: function image() {
        return Object(external_this_wp_element_["createElement"])("img", {
          src: mediaUrl,
          alt: mediaAlt
        });
      },
      video: function video() {
        return Object(external_this_wp_element_["createElement"])("video", {
          controls: true,
          src: mediaUrl
        });
      }
    };
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var className = classnames_default()((_classnames3 = {
      'has-media-on-the-right': 'right' === mediaPosition
    }, Object(defineProperty["a" /* default */])(_classnames3, backgroundClass, backgroundClass), Object(defineProperty["a" /* default */])(_classnames3, 'is-stacked-on-mobile', isStackedOnMobile), _classnames3));
    var gridTemplateColumns;

    if (mediaWidth !== DEFAULT_MEDIA_WIDTH) {
      gridTemplateColumns = 'right' === mediaPosition ? "auto ".concat(mediaWidth, "%") : "".concat(mediaWidth, "% auto");
    }

    var style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      gridTemplateColumns: gridTemplateColumns
    };
    return Object(external_this_wp_element_["createElement"])("div", {
      className: className,
      style: style
    }, Object(external_this_wp_element_["createElement"])("figure", {
      className: "wp-block-media-text__media"
    }, (mediaTypeRenders[mediaType] || external_this_lodash_["noop"])()), Object(external_this_wp_element_["createElement"])("div", {
      className: "wp-block-media-text__content"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null)));
  }
}]);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/pull-left.js


/**
 * WordPress dependencies
 */

var pullLeft = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M4 18h6V6H4v12zm9-10v1.5h7V8h-7zm0 7.5h7V14h-7v1.5z"
}));
/* harmony default export */ var pull_left = (pullLeft);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/pull-right.js


/**
 * WordPress dependencies
 */

var pullRight = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M14 6v12h6V6h-6zM4 9.5h7V8H4v1.5zm0 6h7V14H4v1.5z"
}));
/* harmony default export */ var pull_right = (pullRight);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/media-text/edit.js





/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


/**
 * Constants
 */

var TEMPLATE = [['core/paragraph', {
  fontSize: 'large',
  placeholder: Object(external_this_wp_i18n_["_x"])('Content…', 'content placeholder')
}]]; // this limits the resize to a safe zone to avoid making broken layouts

var WIDTH_CONSTRAINT_PERCENTAGE = 15;

var applyWidthConstraints = function applyWidthConstraints(width) {
  return Math.max(WIDTH_CONSTRAINT_PERCENTAGE, Math.min(width, 100 - WIDTH_CONSTRAINT_PERCENTAGE));
};

var edit_LINK_DESTINATION_MEDIA = 'media';
var edit_LINK_DESTINATION_ATTACHMENT = 'attachment';

function edit_attributesFromMedia(_ref) {
  var _ref$attributes = _ref.attributes,
      linkDestination = _ref$attributes.linkDestination,
      href = _ref$attributes.href,
      setAttributes = _ref.setAttributes;
  return function (media) {
    var mediaType;
    var src; // for media selections originated from a file upload.

    if (media.media_type) {
      if (media.media_type === 'image') {
        mediaType = 'image';
      } else {
        // only images and videos are accepted so if the media_type is not an image we can assume it is a video.
        // video contain the media type of 'file' in the object returned from the rest api.
        mediaType = 'video';
      }
    } else {
      // for media selections originated from existing files in the media library.
      mediaType = media.type;
    }

    if (mediaType === 'image') {
      var _media$sizes, _media$sizes$large, _media$media_details, _media$media_details$, _media$media_details$2;

      // Try the "large" size URL, falling back to the "full" size URL below.
      src = ((_media$sizes = media.sizes) === null || _media$sizes === void 0 ? void 0 : (_media$sizes$large = _media$sizes.large) === null || _media$sizes$large === void 0 ? void 0 : _media$sizes$large.url) || ( // eslint-disable-next-line camelcase
      (_media$media_details = media.media_details) === null || _media$media_details === void 0 ? void 0 : (_media$media_details$ = _media$media_details.sizes) === null || _media$media_details$ === void 0 ? void 0 : (_media$media_details$2 = _media$media_details$.large) === null || _media$media_details$2 === void 0 ? void 0 : _media$media_details$2.source_url);
    }

    var newHref = href;

    if (linkDestination === edit_LINK_DESTINATION_MEDIA) {
      // Update the media link.
      newHref = media.url;
    } // Check if the image is linked to the attachment page.


    if (linkDestination === edit_LINK_DESTINATION_ATTACHMENT) {
      // Update the media link.
      newHref = media.link;
    }

    setAttributes({
      mediaAlt: media.alt,
      mediaId: media.id,
      mediaType: mediaType,
      mediaUrl: src || media.url,
      mediaLink: media.link || undefined,
      href: newHref,
      focalPoint: undefined
    });
  };
}

function MediaTextEdit(_ref2) {
  var _classnames;

  var attributes = _ref2.attributes,
      isSelected = _ref2.isSelected,
      setAttributes = _ref2.setAttributes;
  var focalPoint = attributes.focalPoint,
      href = attributes.href,
      imageFill = attributes.imageFill,
      isStackedOnMobile = attributes.isStackedOnMobile,
      linkClass = attributes.linkClass,
      linkDestination = attributes.linkDestination,
      linkTarget = attributes.linkTarget,
      mediaAlt = attributes.mediaAlt,
      mediaId = attributes.mediaId,
      mediaPosition = attributes.mediaPosition,
      mediaType = attributes.mediaType,
      mediaUrl = attributes.mediaUrl,
      mediaWidth = attributes.mediaWidth,
      rel = attributes.rel,
      verticalAlignment = attributes.verticalAlignment;
  var image = Object(external_this_wp_data_["useSelect"])(function (select) {
    return mediaId && isSelected ? select('core').getMedia(mediaId) : null;
  }, [isSelected, mediaId]);

  var _useState = Object(external_this_wp_element_["useState"])(null),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      temporaryMediaWidth = _useState2[0],
      setTemporaryMediaWidth = _useState2[1];

  var onSelectMedia = edit_attributesFromMedia({
    attributes: attributes,
    setAttributes: setAttributes
  });

  var onSetHref = function onSetHref(props) {
    setAttributes(props);
  };

  var onWidthChange = function onWidthChange(width) {
    setTemporaryMediaWidth(applyWidthConstraints(width));
  };

  var commitWidthChange = function commitWidthChange(width) {
    setAttributes({
      mediaWidth: applyWidthConstraints(width)
    });
    setTemporaryMediaWidth(applyWidthConstraints(width));
  };

  var classNames = classnames_default()((_classnames = {
    'has-media-on-the-right': 'right' === mediaPosition,
    'is-selected': isSelected,
    'is-stacked-on-mobile': isStackedOnMobile
  }, Object(defineProperty["a" /* default */])(_classnames, "is-vertically-aligned-".concat(verticalAlignment), verticalAlignment), Object(defineProperty["a" /* default */])(_classnames, 'is-image-fill', imageFill), _classnames));
  var widthString = "".concat(temporaryMediaWidth || mediaWidth, "%");
  var gridTemplateColumns = 'right' === mediaPosition ? "1fr ".concat(widthString) : "".concat(widthString, " 1fr");
  var style = {
    gridTemplateColumns: gridTemplateColumns,
    msGridColumns: gridTemplateColumns
  };
  var toolbarControls = [{
    icon: pull_left,
    title: Object(external_this_wp_i18n_["__"])('Show media on left'),
    isActive: mediaPosition === 'left',
    onClick: function onClick() {
      return setAttributes({
        mediaPosition: 'left'
      });
    }
  }, {
    icon: pull_right,
    title: Object(external_this_wp_i18n_["__"])('Show media on right'),
    isActive: mediaPosition === 'right',
    onClick: function onClick() {
      return setAttributes({
        mediaPosition: 'right'
      });
    }
  }];

  var onMediaAltChange = function onMediaAltChange(newMediaAlt) {
    setAttributes({
      mediaAlt: newMediaAlt
    });
  };

  var onVerticalAlignmentChange = function onVerticalAlignmentChange(alignment) {
    setAttributes({
      verticalAlignment: alignment
    });
  };

  var mediaTextGeneralSettings = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Media & Text settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Stack on mobile'),
    checked: isStackedOnMobile,
    onChange: function onChange() {
      return setAttributes({
        isStackedOnMobile: !isStackedOnMobile
      });
    }
  }), mediaType === 'image' && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Crop image to fill entire column'),
    checked: imageFill,
    onChange: function onChange() {
      return setAttributes({
        imageFill: !imageFill
      });
    }
  }), imageFill && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["FocalPointPicker"], {
    label: Object(external_this_wp_i18n_["__"])('Focal point picker'),
    url: mediaUrl,
    value: focalPoint,
    onChange: function onChange(value) {
      return setAttributes({
        focalPoint: value
      });
    }
  }), mediaType === 'image' && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextareaControl"], {
    label: Object(external_this_wp_i18n_["__"])('Alt text (alternative text)'),
    value: mediaAlt,
    onChange: onMediaAltChange,
    help: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ExternalLink"], {
      href: "https://www.w3.org/WAI/tutorials/images/decision-tree"
    }, Object(external_this_wp_i18n_["__"])('Describe the purpose of the image')), Object(external_this_wp_i18n_["__"])('Leave empty if the image is purely decorative.'))
  }));
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, mediaTextGeneralSettings), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], {
    controls: toolbarControls
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockVerticalAlignmentToolbar"], {
    onChange: onVerticalAlignmentChange,
    value: verticalAlignment
  }), mediaType === 'image' && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalImageURLInputUI"], {
    url: href || '',
    onChangeUrl: onSetHref,
    linkDestination: linkDestination,
    mediaType: mediaType,
    mediaUrl: image && image.source_url,
    mediaLink: image && image.link,
    linkTarget: linkTarget,
    linkClass: linkClass,
    rel: rel
  }))), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].div, {
    className: classNames,
    style: style
  }, Object(external_this_wp_element_["createElement"])(media_container, Object(esm_extends["a" /* default */])({
    className: "wp-block-media-text__media",
    onSelectMedia: onSelectMedia,
    onWidthChange: onWidthChange,
    commitWidthChange: commitWidthChange
  }, {
    focalPoint: focalPoint,
    imageFill: imageFill,
    isSelected: isSelected,
    isStackedOnMobile: isStackedOnMobile,
    mediaAlt: mediaAlt,
    mediaId: mediaId,
    mediaPosition: mediaPosition,
    mediaType: mediaType,
    mediaUrl: mediaUrl,
    mediaWidth: mediaWidth
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"], {
    __experimentalTagName: "div",
    __experimentalPassedProps: {
      className: 'wp-block-media-text__content'
    },
    template: TEMPLATE,
    templateInsertUpdatesSelection: false
  })));
}

/* harmony default export */ var media_text_edit = (MediaTextEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/media-text/save.js



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var save_DEFAULT_MEDIA_WIDTH = 50;
function media_text_save_save(_ref) {
  var _classnames;

  var attributes = _ref.attributes;
  var isStackedOnMobile = attributes.isStackedOnMobile,
      mediaAlt = attributes.mediaAlt,
      mediaPosition = attributes.mediaPosition,
      mediaType = attributes.mediaType,
      mediaUrl = attributes.mediaUrl,
      mediaWidth = attributes.mediaWidth,
      mediaId = attributes.mediaId,
      verticalAlignment = attributes.verticalAlignment,
      imageFill = attributes.imageFill,
      focalPoint = attributes.focalPoint,
      linkClass = attributes.linkClass,
      href = attributes.href,
      linkTarget = attributes.linkTarget,
      rel = attributes.rel;
  var newRel = Object(external_this_lodash_["isEmpty"])(rel) ? undefined : rel;

  var _image = Object(external_this_wp_element_["createElement"])("img", {
    src: mediaUrl,
    alt: mediaAlt,
    className: mediaId && mediaType === 'image' ? "wp-image-".concat(mediaId) : null
  });

  if (href) {
    _image = Object(external_this_wp_element_["createElement"])("a", {
      className: linkClass,
      href: href,
      target: linkTarget,
      rel: newRel
    }, _image);
  }

  var mediaTypeRenders = {
    image: function image() {
      return _image;
    },
    video: function video() {
      return Object(external_this_wp_element_["createElement"])("video", {
        controls: true,
        src: mediaUrl
      });
    }
  };
  var className = classnames_default()((_classnames = {
    'has-media-on-the-right': 'right' === mediaPosition,
    'is-stacked-on-mobile': isStackedOnMobile
  }, Object(defineProperty["a" /* default */])(_classnames, "is-vertically-aligned-".concat(verticalAlignment), verticalAlignment), Object(defineProperty["a" /* default */])(_classnames, 'is-image-fill', imageFill), _classnames));
  var backgroundStyles = imageFill ? imageFillStyles(mediaUrl, focalPoint) : {};
  var gridTemplateColumns;

  if (mediaWidth !== save_DEFAULT_MEDIA_WIDTH) {
    gridTemplateColumns = 'right' === mediaPosition ? "auto ".concat(mediaWidth, "%") : "".concat(mediaWidth, "% auto");
  }

  var style = {
    gridTemplateColumns: gridTemplateColumns
  };
  return Object(external_this_wp_element_["createElement"])("div", {
    className: className,
    style: style
  }, Object(external_this_wp_element_["createElement"])("figure", {
    className: "wp-block-media-text__media",
    style: backgroundStyles
  }, (mediaTypeRenders[mediaType] || external_this_lodash_["noop"])()), Object(external_this_wp_element_["createElement"])("div", {
    className: "wp-block-media-text__content"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null)));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/media-text/transforms.js
/**
 * WordPress dependencies
 */

var media_text_transforms_transforms = {
  from: [{
    type: 'block',
    blocks: ['core/image'],
    transform: function transform(_ref) {
      var alt = _ref.alt,
          url = _ref.url,
          id = _ref.id,
          anchor = _ref.anchor;
      return Object(external_this_wp_blocks_["createBlock"])('core/media-text', {
        mediaAlt: alt,
        mediaId: id,
        mediaUrl: url,
        mediaType: 'image',
        anchor: anchor
      });
    }
  }, {
    type: 'block',
    blocks: ['core/video'],
    transform: function transform(_ref2) {
      var src = _ref2.src,
          id = _ref2.id,
          anchor = _ref2.anchor;
      return Object(external_this_wp_blocks_["createBlock"])('core/media-text', {
        mediaId: id,
        mediaUrl: src,
        mediaType: 'video',
        anchor: anchor
      });
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/image'],
    isMatch: function isMatch(_ref3) {
      var mediaType = _ref3.mediaType,
          mediaUrl = _ref3.mediaUrl;
      return !mediaUrl || mediaType === 'image';
    },
    transform: function transform(_ref4) {
      var mediaAlt = _ref4.mediaAlt,
          mediaId = _ref4.mediaId,
          mediaUrl = _ref4.mediaUrl,
          anchor = _ref4.anchor;
      return Object(external_this_wp_blocks_["createBlock"])('core/image', {
        alt: mediaAlt,
        id: mediaId,
        url: mediaUrl,
        anchor: anchor
      });
    }
  }, {
    type: 'block',
    blocks: ['core/video'],
    isMatch: function isMatch(_ref5) {
      var mediaType = _ref5.mediaType,
          mediaUrl = _ref5.mediaUrl;
      return !mediaUrl || mediaType === 'video';
    },
    transform: function transform(_ref6) {
      var mediaId = _ref6.mediaId,
          mediaUrl = _ref6.mediaUrl,
          anchor = _ref6.anchor;
      return Object(external_this_wp_blocks_["createBlock"])('core/video', {
        id: mediaId,
        src: mediaUrl,
        anchor: anchor
      });
    }
  }]
};
/* harmony default export */ var media_text_transforms = (media_text_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/media-text/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var media_text_metadata = {
  name: "core/media-text",
  category: "media",
  attributes: {
    align: {
      type: "string",
      "default": "wide"
    },
    mediaAlt: {
      type: "string",
      source: "attribute",
      selector: "figure img",
      attribute: "alt",
      "default": ""
    },
    mediaPosition: {
      type: "string",
      "default": "left"
    },
    mediaId: {
      type: "number"
    },
    mediaUrl: {
      type: "string",
      source: "attribute",
      selector: "figure video,figure img",
      attribute: "src"
    },
    mediaLink: {
      type: "string"
    },
    linkDestination: {
      type: "string"
    },
    linkTarget: {
      type: "string",
      source: "attribute",
      selector: "figure a",
      attribute: "target"
    },
    href: {
      type: "string",
      source: "attribute",
      selector: "figure a",
      attribute: "href"
    },
    rel: {
      type: "string",
      source: "attribute",
      selector: "figure a",
      attribute: "rel"
    },
    linkClass: {
      type: "string",
      source: "attribute",
      selector: "figure a",
      attribute: "class"
    },
    mediaType: {
      type: "string"
    },
    mediaWidth: {
      type: "number",
      "default": 50
    },
    isStackedOnMobile: {
      type: "boolean",
      "default": true
    },
    verticalAlignment: {
      type: "string"
    },
    imageFill: {
      type: "boolean"
    },
    focalPoint: {
      type: "object"
    }
  },
  supports: {
    anchor: true,
    align: ["wide", "full"],
    html: false,
    lightBlockWrapper: true,
    __experimentalColor: {
      gradients: true,
      linkColor: true
    }
  }
};


var media_text_name = media_text_metadata.name;

var media_text_settings = {
  title: Object(external_this_wp_i18n_["__"])('Media & Text'),
  description: Object(external_this_wp_i18n_["__"])('Set media and words side-by-side for a richer layout.'),
  icon: media_and_text,
  keywords: [Object(external_this_wp_i18n_["__"])('image'), Object(external_this_wp_i18n_["__"])('video')],
  example: {
    attributes: {
      mediaType: 'image',
      mediaUrl: 'https://s.w.org/images/core/5.3/Biologia_Centrali-Americana_-_Cantorchilus_semibadius_1902.jpg'
    },
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        content: Object(external_this_wp_i18n_["__"])('The wren<br>Earns his living<br>Noiselessly.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        content: Object(external_this_wp_i18n_["__"])('— Kobayashi Issa (一茶)')
      }
    }]
  },
  transforms: media_text_transforms,
  edit: media_text_edit,
  save: media_text_save_save,
  deprecated: media_text_deprecated
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/comment.js


/**
 * WordPress dependencies
 */

var comment = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M18 4H6c-1.1 0-2 .9-2 2v12.9c0 .6.5 1.1 1.1 1.1.3 0 .5-.1.8-.3L8.5 17H18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H7.9l-2.4 2.4V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v9z"
}));
/* harmony default export */ var library_comment = (comment);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/latest-comments/edit.js









function latest_comments_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (latest_comments_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function latest_comments_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */





/**
 * Minimum number of comments a user can show using this block.
 *
 * @type {number}
 */

var MIN_COMMENTS = 1;
/**
 * Maximum number of comments a user can show using this block.
 *
 * @type {number}
 */

var MAX_COMMENTS = 100;

var edit_LatestComments = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(LatestComments, _Component);

  var _super = latest_comments_edit_createSuper(LatestComments);

  function LatestComments() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, LatestComments);

    _this = _super.apply(this, arguments);
    _this.setCommentsToShow = _this.setCommentsToShow.bind(Object(assertThisInitialized["a" /* default */])(_this)); // Create toggles for each attribute; we create them here rather than
    // passing `this.createToggleAttribute( 'displayAvatar' )` directly to
    // `onChange` to avoid re-renders.

    _this.toggleDisplayAvatar = _this.createToggleAttribute('displayAvatar');
    _this.toggleDisplayDate = _this.createToggleAttribute('displayDate');
    _this.toggleDisplayExcerpt = _this.createToggleAttribute('displayExcerpt');
    return _this;
  }

  Object(createClass["a" /* default */])(LatestComments, [{
    key: "createToggleAttribute",
    value: function createToggleAttribute(propName) {
      var _this2 = this;

      return function () {
        var value = _this2.props.attributes[propName];
        var setAttributes = _this2.props.setAttributes;
        setAttributes(Object(defineProperty["a" /* default */])({}, propName, !value));
      };
    }
  }, {
    key: "setCommentsToShow",
    value: function setCommentsToShow(commentsToShow) {
      this.props.setAttributes({
        commentsToShow: commentsToShow
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          commentsToShow = _this$props$attribute.commentsToShow,
          displayAvatar = _this$props$attribute.displayAvatar,
          displayDate = _this$props$attribute.displayDate,
          displayExcerpt = _this$props$attribute.displayExcerpt;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
        title: Object(external_this_wp_i18n_["__"])('Latest comments settings')
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Display avatar'),
        checked: displayAvatar,
        onChange: this.toggleDisplayAvatar
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Display date'),
        checked: displayDate,
        onChange: this.toggleDisplayDate
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Display excerpt'),
        checked: displayExcerpt,
        onChange: this.toggleDisplayExcerpt
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
        label: Object(external_this_wp_i18n_["__"])('Number of comments'),
        value: commentsToShow,
        onChange: this.setCommentsToShow,
        min: MIN_COMMENTS,
        max: MAX_COMMENTS,
        required: true
      }))), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Disabled"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_serverSideRender_default.a, {
        block: "core/latest-comments",
        attributes: this.props.attributes
      })));
    }
  }]);

  return LatestComments;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var latest_comments_edit = (edit_LatestComments);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/latest-comments/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

var latest_comments_metadata = {
  name: "core/latest-comments",
  category: "widgets",
  attributes: {
    align: {
      type: "string",
      "enum": ["left", "center", "right", "wide", "full"]
    },
    className: {
      type: "string"
    },
    commentsToShow: {
      type: "number",
      "default": 5,
      minimum: 1,
      maximum: 100
    },
    displayAvatar: {
      type: "boolean",
      "default": true
    },
    displayDate: {
      type: "boolean",
      "default": true
    },
    displayExcerpt: {
      type: "boolean",
      "default": true
    }
  },
  supports: {
    align: true,
    html: false
  }
};

var latest_comments_name = latest_comments_metadata.name;

var latest_comments_settings = {
  title: Object(external_this_wp_i18n_["__"])('Latest Comments'),
  description: Object(external_this_wp_i18n_["__"])('Display a list of your most recent comments.'),
  icon: library_comment,
  keywords: [Object(external_this_wp_i18n_["__"])('recent comments')],
  example: {},
  edit: latest_comments_edit
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/post-list.js


/**
 * WordPress dependencies
 */

var postList = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v12zM7 11h2V9H7v2zm0 4h2v-2H7v2zm3-4h7V9h-7v2zm0 4h7v-2h-7v2z"
}));
/* harmony default export */ var post_list = (postList);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/latest-posts/deprecated.js


function latest_posts_deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function latest_posts_deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { latest_posts_deprecated_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { latest_posts_deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */
var deprecated_metadata = {
  name: "core/latest-posts",
  category: "widgets",
  attributes: {
    align: {
      type: "string",
      "enum": ["left", "center", "right", "wide", "full"]
    },
    className: {
      type: "string"
    },
    categories: {
      type: "array",
      items: {
        type: "object"
      }
    },
    selectedAuthor: {
      type: "number"
    },
    postsToShow: {
      type: "number",
      "default": 5
    },
    displayPostContent: {
      type: "boolean",
      "default": false
    },
    displayPostContentRadio: {
      type: "string",
      "default": "excerpt"
    },
    excerptLength: {
      type: "number",
      "default": 55
    },
    displayAuthor: {
      type: "boolean",
      "default": false
    },
    displayPostDate: {
      type: "boolean",
      "default": false
    },
    postLayout: {
      type: "string",
      "default": "list"
    },
    columns: {
      type: "number",
      "default": 3
    },
    order: {
      type: "string",
      "default": "desc"
    },
    orderBy: {
      type: "string",
      "default": "date"
    },
    displayFeaturedImage: {
      type: "boolean",
      "default": false
    },
    featuredImageAlign: {
      type: "string",
      "enum": ["left", "center", "right"]
    },
    featuredImageSizeSlug: {
      type: "string",
      "default": "thumbnail"
    },
    featuredImageSizeWidth: {
      type: "number",
      "default": null
    },
    featuredImageSizeHeight: {
      type: "number",
      "default": null
    }
  },
  supports: {
    align: true,
    html: false
  }
};
var deprecated_attributes = deprecated_metadata.attributes;
/* harmony default export */ var latest_posts_deprecated = ([{
  attributes: latest_posts_deprecated_objectSpread({}, deprecated_attributes, {
    categories: {
      type: 'string'
    }
  }),
  supports: {
    align: true,
    html: false
  },
  migrate: function migrate(oldAttributes) {
    // This needs the full category object, not just the ID.
    return latest_posts_deprecated_objectSpread({}, oldAttributes, {
      categories: [{
        id: Number(oldAttributes.categories)
      }]
    });
  },
  isEligible: function isEligible(_ref) {
    var categories = _ref.categories;
    return categories && 'string' === typeof categories;
  },
  save: function save() {
    return null;
  }
}]);

// EXTERNAL MODULE: external {"this":["wp","date"]}
var external_this_wp_date_ = __webpack_require__(79);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/list.js


/**
 * WordPress dependencies
 */

var list = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"
}));
/* harmony default export */ var library_list = (list);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/grid.js
var grid = __webpack_require__(302);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/latest-posts/constants.js
var MIN_EXCERPT_LENGTH = 10;
var MAX_EXCERPT_LENGTH = 100;
var MAX_POSTS_COLUMNS = 6;

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/latest-posts/edit.js









function latest_posts_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function latest_posts_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { latest_posts_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { latest_posts_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function latest_posts_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (latest_posts_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function latest_posts_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */


/**
 * Module Constants
 */

var CATEGORIES_LIST_QUERY = {
  per_page: -1
};
var USERS_LIST_QUERY = {
  per_page: -1
};

var edit_LatestPostsEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(LatestPostsEdit, _Component);

  var _super = latest_posts_edit_createSuper(LatestPostsEdit);

  function LatestPostsEdit() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, LatestPostsEdit);

    _this = _super.apply(this, arguments);
    _this.state = {
      categoriesList: [],
      authorList: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(LatestPostsEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.isStillMounted = true;
      this.fetchRequest = external_this_wp_apiFetch_default()({
        path: Object(external_this_wp_url_["addQueryArgs"])("/wp/v2/categories", CATEGORIES_LIST_QUERY)
      }).then(function (categoriesList) {
        if (_this2.isStillMounted) {
          _this2.setState({
            categoriesList: categoriesList
          });
        }
      }).catch(function () {
        if (_this2.isStillMounted) {
          _this2.setState({
            categoriesList: []
          });
        }
      });
      this.fetchRequest = external_this_wp_apiFetch_default()({
        path: Object(external_this_wp_url_["addQueryArgs"])("/wp/v2/users", USERS_LIST_QUERY)
      }).then(function (authorList) {
        if (_this2.isStillMounted) {
          _this2.setState({
            authorList: authorList
          });
        }
      }).catch(function () {
        if (_this2.isStillMounted) {
          _this2.setState({
            authorList: []
          });
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isStillMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          imageSizeOptions = _this$props.imageSizeOptions,
          latestPosts = _this$props.latestPosts,
          defaultImageWidth = _this$props.defaultImageWidth,
          defaultImageHeight = _this$props.defaultImageHeight;
      var _this$state = this.state,
          categoriesList = _this$state.categoriesList,
          authorList = _this$state.authorList;
      var displayFeaturedImage = attributes.displayFeaturedImage,
          displayPostContentRadio = attributes.displayPostContentRadio,
          displayPostContent = attributes.displayPostContent,
          displayPostDate = attributes.displayPostDate,
          displayAuthor = attributes.displayAuthor,
          postLayout = attributes.postLayout,
          columns = attributes.columns,
          order = attributes.order,
          orderBy = attributes.orderBy,
          categories = attributes.categories,
          selectedAuthor = attributes.selectedAuthor,
          postsToShow = attributes.postsToShow,
          excerptLength = attributes.excerptLength,
          featuredImageAlign = attributes.featuredImageAlign,
          featuredImageSizeSlug = attributes.featuredImageSizeSlug,
          featuredImageSizeWidth = attributes.featuredImageSizeWidth,
          featuredImageSizeHeight = attributes.featuredImageSizeHeight;
      var categorySuggestions = categoriesList.reduce(function (accumulator, category) {
        return latest_posts_edit_objectSpread({}, accumulator, Object(defineProperty["a" /* default */])({}, category.name, category));
      }, {});

      var selectCategories = function selectCategories(tokens) {
        var hasNoSuggestion = tokens.some(function (token) {
          return typeof token === 'string' && !categorySuggestions[token];
        });

        if (hasNoSuggestion) {
          return;
        } // Categories that are already will be objects, while new additions will be strings (the name).
        // allCategories nomalizes the array so that they are all objects.


        var allCategories = tokens.map(function (token) {
          return typeof token === 'string' ? categorySuggestions[token] : token;
        }); // We do nothing if the category is not selected
        // from suggestions.

        if (Object(external_this_lodash_["includes"])(allCategories, null)) {
          return false;
        }

        setAttributes({
          categories: allCategories
        });
      };

      var inspectorControls = Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
        title: Object(external_this_wp_i18n_["__"])('Post content settings')
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Post content'),
        checked: displayPostContent,
        onChange: function onChange(value) {
          return setAttributes({
            displayPostContent: value
          });
        }
      }), displayPostContent && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RadioControl"], {
        label: Object(external_this_wp_i18n_["__"])('Show:'),
        selected: displayPostContentRadio,
        options: [{
          label: Object(external_this_wp_i18n_["__"])('Excerpt'),
          value: 'excerpt'
        }, {
          label: Object(external_this_wp_i18n_["__"])('Full post'),
          value: 'full_post'
        }],
        onChange: function onChange(value) {
          return setAttributes({
            displayPostContentRadio: value
          });
        }
      }), displayPostContent && displayPostContentRadio === 'excerpt' && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
        label: Object(external_this_wp_i18n_["__"])('Max number of words in excerpt'),
        value: excerptLength,
        onChange: function onChange(value) {
          return setAttributes({
            excerptLength: value
          });
        },
        min: MIN_EXCERPT_LENGTH,
        max: MAX_EXCERPT_LENGTH
      })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
        title: Object(external_this_wp_i18n_["__"])('Post meta settings')
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Display author name'),
        checked: displayAuthor,
        onChange: function onChange(value) {
          return setAttributes({
            displayAuthor: value
          });
        }
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Display post date'),
        checked: displayPostDate,
        onChange: function onChange(value) {
          return setAttributes({
            displayPostDate: value
          });
        }
      })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
        title: Object(external_this_wp_i18n_["__"])('Featured image settings')
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Display featured image'),
        checked: displayFeaturedImage,
        onChange: function onChange(value) {
          return setAttributes({
            displayFeaturedImage: value
          });
        }
      }), displayFeaturedImage && Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalImageSizeControl"], {
        onChange: function onChange(value) {
          var newAttrs = {};

          if (value.hasOwnProperty('width')) {
            newAttrs.featuredImageSizeWidth = value.width;
          }

          if (value.hasOwnProperty('height')) {
            newAttrs.featuredImageSizeHeight = value.height;
          }

          setAttributes(newAttrs);
        },
        slug: featuredImageSizeSlug,
        width: featuredImageSizeWidth,
        height: featuredImageSizeHeight,
        imageWidth: defaultImageWidth,
        imageHeight: defaultImageHeight,
        imageSizeOptions: imageSizeOptions,
        onChangeImage: function onChangeImage(value) {
          return setAttributes({
            featuredImageSizeSlug: value,
            featuredImageSizeWidth: undefined,
            featuredImageSizeHeight: undefined
          });
        }
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["BaseControl"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["BaseControl"].VisualLabel, null, Object(external_this_wp_i18n_["__"])('Image alignment')), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockAlignmentToolbar"], {
        value: featuredImageAlign,
        onChange: function onChange(value) {
          return setAttributes({
            featuredImageAlign: value
          });
        },
        controls: ['left', 'center', 'right'],
        isCollapsed: false
      })))), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
        title: Object(external_this_wp_i18n_["__"])('Sorting and filtering')
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["QueryControls"], Object(esm_extends["a" /* default */])({
        order: order,
        orderBy: orderBy
      }, {
        numberOfItems: postsToShow,
        onOrderChange: function onOrderChange(value) {
          return setAttributes({
            order: value
          });
        },
        onOrderByChange: function onOrderByChange(value) {
          return setAttributes({
            orderBy: value
          });
        },
        onNumberOfItemsChange: function onNumberOfItemsChange(value) {
          return setAttributes({
            postsToShow: value
          });
        },
        categorySuggestions: categorySuggestions,
        onCategoryChange: selectCategories,
        selectedCategories: categories,
        onAuthorChange: function onAuthorChange(value) {
          return setAttributes({
            selectedAuthor: '' !== value ? Number(value) : undefined
          });
        },
        authorList: authorList,
        selectedAuthorId: selectedAuthor
      })), postLayout === 'grid' && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
        label: Object(external_this_wp_i18n_["__"])('Columns'),
        value: columns,
        onChange: function onChange(value) {
          return setAttributes({
            columns: value
          });
        },
        min: 2,
        max: !hasPosts ? MAX_POSTS_COLUMNS : Math.min(MAX_POSTS_COLUMNS, latestPosts.length),
        required: true
      })));
      var hasPosts = Array.isArray(latestPosts) && latestPosts.length;

      if (!hasPosts) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, inspectorControls, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Placeholder"], {
          icon: library_pin,
          label: Object(external_this_wp_i18n_["__"])('Latest Posts')
        }, !Array.isArray(latestPosts) ? Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null) : Object(external_this_wp_i18n_["__"])('No posts found.')));
      } // Removing posts from display should be instant.


      var displayPosts = latestPosts.length > postsToShow ? latestPosts.slice(0, postsToShow) : latestPosts;
      var layoutControls = [{
        icon: library_list,
        title: Object(external_this_wp_i18n_["__"])('List view'),
        onClick: function onClick() {
          return setAttributes({
            postLayout: 'list'
          });
        },
        isActive: postLayout === 'list'
      }, {
        icon: grid["a" /* default */],
        title: Object(external_this_wp_i18n_["__"])('Grid view'),
        onClick: function onClick() {
          return setAttributes({
            postLayout: 'grid'
          });
        },
        isActive: postLayout === 'grid'
      }];

      var dateFormat = Object(external_this_wp_date_["__experimentalGetSettings"])().formats.date;

      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, inspectorControls, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], {
        controls: layoutControls
      })), Object(external_this_wp_element_["createElement"])("ul", {
        className: classnames_default()(this.props.className, Object(defineProperty["a" /* default */])({
          'wp-block-latest-posts__list': true,
          'is-grid': postLayout === 'grid',
          'has-dates': displayPostDate,
          'has-author': displayAuthor
        }, "columns-".concat(columns), postLayout === 'grid'))
      }, displayPosts.map(function (post, i) {
        var titleTrimmed = Object(external_this_lodash_["invoke"])(post, ['title', 'rendered', 'trim']);
        var excerpt = post.excerpt.rendered;
        var currentAuthor = authorList.find(function (author) {
          return author.id === post.author;
        });
        var excerptElement = document.createElement('div');
        excerptElement.innerHTML = excerpt;
        excerpt = excerptElement.textContent || excerptElement.innerText || '';
        var imageSourceUrl = post.featuredImageSourceUrl;
        var imageClasses = classnames_default()(Object(defineProperty["a" /* default */])({
          'wp-block-latest-posts__featured-image': true
        }, "align".concat(featuredImageAlign), !!featuredImageAlign));
        var needsReadMore = excerptLength < excerpt.trim().split(' ').length && post.excerpt.raw === '';
        var postExcerpt = needsReadMore ? Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, excerpt.trim().split(' ', excerptLength).join(' '), Object(external_this_wp_i18n_["__"])(' … '), Object(external_this_wp_element_["createElement"])("a", {
          href: post.link,
          target: "_blank",
          rel: "noopener noreferrer"
        }, Object(external_this_wp_i18n_["__"])('Read more'))) : excerpt;
        return Object(external_this_wp_element_["createElement"])("li", {
          key: i
        }, displayFeaturedImage && Object(external_this_wp_element_["createElement"])("div", {
          className: imageClasses
        }, imageSourceUrl && Object(external_this_wp_element_["createElement"])("img", {
          src: imageSourceUrl,
          alt: "",
          style: {
            maxWidth: featuredImageSizeWidth,
            maxHeight: featuredImageSizeHeight
          }
        })), Object(external_this_wp_element_["createElement"])("a", {
          href: post.link,
          target: "_blank",
          rel: "noreferrer noopener"
        }, titleTrimmed ? Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], null, titleTrimmed) : Object(external_this_wp_i18n_["__"])('(no title)')), displayAuthor && currentAuthor && Object(external_this_wp_element_["createElement"])("div", {
          className: "wp-block-latest-posts__post-author"
        }, Object(external_this_wp_i18n_["sprintf"])(
        /* translators: byline. %s: current author. */
        Object(external_this_wp_i18n_["__"])('by %s'), currentAuthor.name)), displayPostDate && post.date_gmt && Object(external_this_wp_element_["createElement"])("time", {
          dateTime: Object(external_this_wp_date_["format"])('c', post.date_gmt),
          className: "wp-block-latest-posts__post-date"
        }, Object(external_this_wp_date_["dateI18n"])(dateFormat, post.date_gmt)), displayPostContent && displayPostContentRadio === 'excerpt' && Object(external_this_wp_element_["createElement"])("div", {
          className: "wp-block-latest-posts__post-excerpt"
        }, postExcerpt), displayPostContent && displayPostContentRadio === 'full_post' && Object(external_this_wp_element_["createElement"])("div", {
          className: "wp-block-latest-posts__post-full-content"
        }, Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], {
          key: "html"
        }, post.content.raw.trim())));
      })));
    }
  }]);

  return LatestPostsEdit;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var latest_posts_edit = (Object(external_this_wp_data_["withSelect"])(function (select, props) {
  var _props$attributes = props.attributes,
      featuredImageSizeSlug = _props$attributes.featuredImageSizeSlug,
      postsToShow = _props$attributes.postsToShow,
      order = _props$attributes.order,
      orderBy = _props$attributes.orderBy,
      categories = _props$attributes.categories,
      selectedAuthor = _props$attributes.selectedAuthor;

  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords,
      getMedia = _select.getMedia;

  var _select2 = select('core/block-editor'),
      getSettings = _select2.getSettings;

  var _getSettings = getSettings(),
      imageSizes = _getSettings.imageSizes,
      imageDimensions = _getSettings.imageDimensions;

  var catIds = categories && categories.length > 0 ? categories.map(function (cat) {
    return cat.id;
  }) : [];
  var latestPostsQuery = Object(external_this_lodash_["pickBy"])({
    categories: catIds,
    author: selectedAuthor,
    order: order,
    orderby: orderBy,
    per_page: postsToShow
  }, function (value) {
    return !Object(external_this_lodash_["isUndefined"])(value);
  });
  var posts = getEntityRecords('postType', 'post', latestPostsQuery);
  var imageSizeOptions = imageSizes.filter(function (_ref) {
    var slug = _ref.slug;
    return slug !== 'full';
  }).map(function (_ref2) {
    var name = _ref2.name,
        slug = _ref2.slug;
    return {
      value: slug,
      label: name
    };
  });
  return {
    defaultImageWidth: Object(external_this_lodash_["get"])(imageDimensions, [featuredImageSizeSlug, 'width'], 0),
    defaultImageHeight: Object(external_this_lodash_["get"])(imageDimensions, [featuredImageSizeSlug, 'height'], 0),
    imageSizeOptions: imageSizeOptions,
    latestPosts: !Array.isArray(posts) ? posts : posts.map(function (post) {
      if (post.featured_media) {
        var image = getMedia(post.featured_media);
        var url = Object(external_this_lodash_["get"])(image, ['media_details', 'sizes', featuredImageSizeSlug, 'source_url'], null);

        if (!url) {
          url = Object(external_this_lodash_["get"])(image, 'source_url', null);
        }

        return latest_posts_edit_objectSpread({}, post, {
          featuredImageSourceUrl: url
        });
      }

      return post;
    })
  };
})(edit_LatestPostsEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/latest-posts/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var latest_posts_metadata = {
  name: "core/latest-posts",
  category: "widgets",
  attributes: {
    align: {
      type: "string",
      "enum": ["left", "center", "right", "wide", "full"]
    },
    className: {
      type: "string"
    },
    categories: {
      type: "array",
      items: {
        type: "object"
      }
    },
    selectedAuthor: {
      type: "number"
    },
    postsToShow: {
      type: "number",
      "default": 5
    },
    displayPostContent: {
      type: "boolean",
      "default": false
    },
    displayPostContentRadio: {
      type: "string",
      "default": "excerpt"
    },
    excerptLength: {
      type: "number",
      "default": 55
    },
    displayAuthor: {
      type: "boolean",
      "default": false
    },
    displayPostDate: {
      type: "boolean",
      "default": false
    },
    postLayout: {
      type: "string",
      "default": "list"
    },
    columns: {
      type: "number",
      "default": 3
    },
    order: {
      type: "string",
      "default": "desc"
    },
    orderBy: {
      type: "string",
      "default": "date"
    },
    displayFeaturedImage: {
      type: "boolean",
      "default": false
    },
    featuredImageAlign: {
      type: "string",
      "enum": ["left", "center", "right"]
    },
    featuredImageSizeSlug: {
      type: "string",
      "default": "thumbnail"
    },
    featuredImageSizeWidth: {
      type: "number",
      "default": null
    },
    featuredImageSizeHeight: {
      type: "number",
      "default": null
    }
  },
  supports: {
    align: true,
    html: false
  }
};
var latest_posts_name = latest_posts_metadata.name;

var latest_posts_settings = {
  title: Object(external_this_wp_i18n_["__"])('Latest Posts'),
  description: Object(external_this_wp_i18n_["__"])('Display a list of your most recent posts.'),
  icon: post_list,
  keywords: [Object(external_this_wp_i18n_["__"])('recent posts')],
  example: {},
  edit: latest_posts_edit,
  deprecated: latest_posts_deprecated
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js


/**
 * WordPress dependencies
 */

var formatListBulletsRTL = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M4 8.8h8.9V7.2H4v1.6zm0 7h8.9v-1.5H4v1.5zM18 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
}));
/* harmony default export */ var format_list_bullets_rtl = (formatListBulletsRTL);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-list-bullets.js


/**
 * WordPress dependencies
 */

var formatListBullets = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}));
/* harmony default export */ var format_list_bullets = (formatListBullets);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-list-numbered-rtl.js


/**
 * WordPress dependencies
 */

var formatListNumberedRTL = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M3.8 15.8h8.9v-1.5H3.8v1.5zm0-7h8.9V7.2H3.8v1.6zm14.7-2.1V10h1V5.3l-2.2.7.3 1 .9-.3zm1.2 6.1c-.5-.6-1.2-.5-1.7-.4-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5H20v-1h-.9c.3-.6.8-1.4.9-2.1 0-.3 0-.8-.3-1.1z"
}));
/* harmony default export */ var format_list_numbered_rtl = (formatListNumberedRTL);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-list-numbered.js


/**
 * WordPress dependencies
 */

var formatListNumbered = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM5 6.7V10h1V5.3L3.8 6l.4 1 .8-.3zm-.4 5.7c-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5h2.7v-1h-1c.3-.6.8-1.4.9-2.1.1-.3 0-.8-.2-1.1-.5-.6-1.3-.5-1.7-.4z"
}));
/* harmony default export */ var format_list_numbered = (formatListNumbered);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-outdent-rtl.js


/**
 * WordPress dependencies
 */

var formatOutdentRTL = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M20 5.5H4V4H20V5.5ZM12 12.5H4V11H12V12.5ZM20 20V18.5H4V20H20ZM15.4697 14.9697L18.4393 12L15.4697 9.03033L16.5303 7.96967L20.0303 11.4697L20.5607 12L20.0303 12.5303L16.5303 16.0303L15.4697 14.9697Z"
}));
/* harmony default export */ var format_outdent_rtl = (formatOutdentRTL);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-outdent.js


/**
 * WordPress dependencies
 */

var formatOutdent = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-4-4.6l-4 4 4 4 1-1-3-3 3-3-1-1z"
}));
/* harmony default export */ var format_outdent = (formatOutdent);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-indent-rtl.js


/**
 * WordPress dependencies
 */

var formatIndentRTL = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M20 5.5H4V4H20V5.5ZM12 12.5H4V11H12V12.5ZM20 20V18.5H4V20H20ZM20.0303 9.03033L17.0607 12L20.0303 14.9697L18.9697 16.0303L15.4697 12.5303L14.9393 12L15.4697 11.4697L18.9697 7.96967L20.0303 9.03033Z"
}));
/* harmony default export */ var format_indent_rtl = (formatIndentRTL);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-indent.js


/**
 * WordPress dependencies
 */

var formatIndent = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-8-3.5l3 3-3 3 1 1 4-4-4-4-1 1z"
}));
/* harmony default export */ var format_indent = (formatIndent);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/list/ordered-list-settings.js


/**
 * WordPress dependencies
 */




var ordered_list_settings_OrderedListSettings = function OrderedListSettings(_ref) {
  var setAttributes = _ref.setAttributes,
      reversed = _ref.reversed,
      start = _ref.start;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Ordered list settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextControl"], {
    label: Object(external_this_wp_i18n_["__"])('Start value'),
    type: "number",
    onChange: function onChange(value) {
      var int = parseInt(value, 10);
      setAttributes({
        // It should be possible to unset the value,
        // e.g. with an empty string.
        start: isNaN(int) ? undefined : int
      });
    },
    value: Number.isInteger(start) ? start.toString(10) : '',
    step: "1"
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Reverse list numbering'),
    checked: reversed || false,
    onChange: function onChange(value) {
      setAttributes({
        // Unset the attribute if not reversed.
        reversed: value || undefined
      });
    }
  })));
};

/* harmony default export */ var ordered_list_settings = (ordered_list_settings_OrderedListSettings);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/list/edit.js



function list_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function list_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { list_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { list_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



function ListEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      mergeBlocks = _ref.mergeBlocks,
      onReplace = _ref.onReplace,
      isSelected = _ref.isSelected;
  var ordered = attributes.ordered,
      values = attributes.values,
      type = attributes.type,
      reversed = attributes.reversed,
      start = attributes.start;
  var tagName = ordered ? 'ol' : 'ul';
  var isRTL = Object(external_this_wp_data_["useSelect"])(function (select) {
    return !!select('core/block-editor').getSettings().isRTL;
  }, []);

  var controls = function controls(_ref2) {
    var value = _ref2.value,
        onChange = _ref2.onChange,
        onFocus = _ref2.onFocus;
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, isSelected && Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextShortcut"], {
      type: "primary",
      character: "[",
      onUse: function onUse() {
        onChange(Object(external_this_wp_richText_["__unstableOutdentListItems"])(value));
      }
    }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextShortcut"], {
      type: "primary",
      character: "]",
      onUse: function onUse() {
        onChange(Object(external_this_wp_richText_["__unstableIndentListItems"])(value, {
          type: tagName
        }));
      }
    }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextShortcut"], {
      type: "primary",
      character: "m",
      onUse: function onUse() {
        onChange(Object(external_this_wp_richText_["__unstableIndentListItems"])(value, {
          type: tagName
        }));
      }
    }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextShortcut"], {
      type: "primaryShift",
      character: "m",
      onUse: function onUse() {
        onChange(Object(external_this_wp_richText_["__unstableOutdentListItems"])(value));
      }
    })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], {
      controls: [{
        icon: isRTL ? format_list_bullets_rtl : format_list_bullets,
        title: Object(external_this_wp_i18n_["__"])('Convert to unordered list'),
        isActive: Object(external_this_wp_richText_["__unstableIsActiveListType"])(value, 'ul', tagName),
        onClick: function onClick() {
          onChange(Object(external_this_wp_richText_["__unstableChangeListType"])(value, {
            type: 'ul'
          }));
          onFocus();

          if (Object(external_this_wp_richText_["__unstableIsListRootSelected"])(value)) {
            setAttributes({
              ordered: false
            });
          }
        }
      }, {
        icon: isRTL ? format_list_numbered_rtl : format_list_numbered,
        title: Object(external_this_wp_i18n_["__"])('Convert to ordered list'),
        isActive: Object(external_this_wp_richText_["__unstableIsActiveListType"])(value, 'ol', tagName),
        onClick: function onClick() {
          onChange(Object(external_this_wp_richText_["__unstableChangeListType"])(value, {
            type: 'ol'
          }));
          onFocus();

          if (Object(external_this_wp_richText_["__unstableIsListRootSelected"])(value)) {
            setAttributes({
              ordered: true
            });
          }
        }
      }, {
        icon: isRTL ? format_outdent_rtl : format_outdent,
        title: Object(external_this_wp_i18n_["__"])('Outdent list item'),
        shortcut: Object(external_this_wp_i18n_["_x"])('Backspace', 'keyboard key'),
        isDisabled: !Object(external_this_wp_richText_["__unstableCanOutdentListItems"])(value),
        onClick: function onClick() {
          onChange(Object(external_this_wp_richText_["__unstableOutdentListItems"])(value));
          onFocus();
        }
      }, {
        icon: isRTL ? format_indent_rtl : format_indent,
        title: Object(external_this_wp_i18n_["__"])('Indent list item'),
        shortcut: Object(external_this_wp_i18n_["_x"])('Space', 'keyboard key'),
        isDisabled: !Object(external_this_wp_richText_["__unstableCanIndentListItems"])(value),
        onClick: function onClick() {
          onChange(Object(external_this_wp_richText_["__unstableIndentListItems"])(value, {
            type: tagName
          }));
          onFocus();
        }
      }]
    })));
  };

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    identifier: "values",
    multiline: "li",
    __unstableMultilineRootTag: tagName,
    tagName: external_this_wp_blockEditor_["__experimentalBlock"][tagName],
    onChange: function onChange(nextValues) {
      return setAttributes({
        values: nextValues
      });
    },
    value: values,
    placeholder: Object(external_this_wp_i18n_["__"])('Write list…'),
    onMerge: mergeBlocks,
    onSplit: function onSplit(value) {
      return Object(external_this_wp_blocks_["createBlock"])(list_name, list_edit_objectSpread({}, attributes, {
        values: value
      }));
    },
    __unstableOnSplitMiddle: function __unstableOnSplitMiddle() {
      return Object(external_this_wp_blocks_["createBlock"])('core/paragraph');
    },
    onReplace: onReplace,
    onRemove: function onRemove() {
      return onReplace([]);
    },
    start: start,
    reversed: reversed,
    type: type
  }, controls), ordered && Object(external_this_wp_element_["createElement"])(ordered_list_settings, {
    setAttributes: setAttributes,
    ordered: ordered,
    reversed: reversed,
    start: start
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/list/save.js


/**
 * WordPress dependencies
 */

function list_save_save(_ref) {
  var attributes = _ref.attributes;
  var ordered = attributes.ordered,
      values = attributes.values,
      type = attributes.type,
      reversed = attributes.reversed,
      start = attributes.start;
  var tagName = ordered ? 'ol' : 'ul';
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: tagName,
    value: values,
    type: type,
    reversed: reversed,
    start: start,
    multiline: "li"
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/list/transforms.js



function list_transforms_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function list_transforms_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { list_transforms_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { list_transforms_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */



function getListContentSchema(_ref) {
  var phrasingContentSchema = _ref.phrasingContentSchema;

  var listContentSchema = list_transforms_objectSpread({}, phrasingContentSchema, {
    ul: {},
    ol: {
      attributes: ['type', 'start', 'reversed']
    }
  }); // Recursion is needed.
  // Possible: ul > li > ul.
  // Impossible: ul > ul.


  ['ul', 'ol'].forEach(function (tag) {
    listContentSchema[tag].children = {
      li: {
        children: listContentSchema
      }
    };
  });
  return listContentSchema;
}

var list_transforms_transforms = {
  from: [{
    type: 'block',
    isMultiBlock: true,
    blocks: ['core/paragraph'],
    transform: function transform(blockAttributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/list', {
        values: Object(external_this_wp_richText_["toHTMLString"])({
          value: Object(external_this_wp_richText_["join"])(blockAttributes.map(function (_ref2) {
            var content = _ref2.content;
            var value = Object(external_this_wp_richText_["create"])({
              html: content
            });

            if (blockAttributes.length > 1) {
              return value;
            } // When converting only one block, transform
            // every line to a list item.


            return Object(external_this_wp_richText_["replace"])(value, /\n/g, external_this_wp_richText_["__UNSTABLE_LINE_SEPARATOR"]);
          }), external_this_wp_richText_["__UNSTABLE_LINE_SEPARATOR"]),
          multilineTag: 'li'
        }),
        anchor: blockAttributes.anchor
      });
    }
  }, {
    type: 'block',
    blocks: ['core/quote', 'core/pullquote'],
    transform: function transform(_ref3) {
      var value = _ref3.value,
          anchor = _ref3.anchor;
      return Object(external_this_wp_blocks_["createBlock"])('core/list', {
        values: Object(external_this_wp_richText_["toHTMLString"])({
          value: Object(external_this_wp_richText_["create"])({
            html: value,
            multilineTag: 'p'
          }),
          multilineTag: 'li'
        }),
        anchor: anchor
      });
    }
  }, {
    type: 'raw',
    selector: 'ol,ul',
    schema: function schema(args) {
      return {
        ol: getListContentSchema(args).ol,
        ul: getListContentSchema(args).ul
      };
    },
    transform: function transform(node) {
      var attributes = {
        ordered: node.nodeName === 'OL',
        anchor: node.id === '' ? undefined : node.id
      };

      if (attributes.ordered) {
        var type = node.getAttribute('type');

        if (type) {
          attributes.type = type;
        }

        if (node.getAttribute('reversed') !== null) {
          attributes.reversed = true;
        }

        var start = parseInt(node.getAttribute('start'), 10);

        if (!isNaN(start) && ( // start=1 only makes sense if the list is reversed.
        start !== 1 || attributes.reversed)) {
          attributes.start = start;
        }
      }

      return Object(external_this_wp_blocks_["createBlock"])('core/list', list_transforms_objectSpread({}, Object(external_this_wp_blocks_["getBlockAttributes"])('core/list', node.outerHTML), {}, attributes));
    }
  }].concat(Object(toConsumableArray["a" /* default */])(['*', '-'].map(function (prefix) {
    return {
      type: 'prefix',
      prefix: prefix,
      transform: function transform(content) {
        return Object(external_this_wp_blocks_["createBlock"])('core/list', {
          values: "<li>".concat(content, "</li>")
        });
      }
    };
  })), Object(toConsumableArray["a" /* default */])(['1.', '1)'].map(function (prefix) {
    return {
      type: 'prefix',
      prefix: prefix,
      transform: function transform(content) {
        return Object(external_this_wp_blocks_["createBlock"])('core/list', {
          ordered: true,
          values: "<li>".concat(content, "</li>")
        });
      }
    };
  }))),
  to: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(_ref4) {
      var values = _ref4.values;
      return Object(external_this_wp_richText_["split"])(Object(external_this_wp_richText_["create"])({
        html: values,
        multilineTag: 'li',
        multilineWrapperTags: ['ul', 'ol']
      }), external_this_wp_richText_["__UNSTABLE_LINE_SEPARATOR"]).map(function (piece) {
        return Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
          content: Object(external_this_wp_richText_["toHTMLString"])({
            value: piece
          })
        });
      });
    }
  }, {
    type: 'block',
    blocks: ['core/quote'],
    transform: function transform(_ref5) {
      var values = _ref5.values,
          anchor = _ref5.anchor;
      return Object(external_this_wp_blocks_["createBlock"])('core/quote', {
        value: Object(external_this_wp_richText_["toHTMLString"])({
          value: Object(external_this_wp_richText_["create"])({
            html: values,
            multilineTag: 'li',
            multilineWrapperTags: ['ul', 'ol']
          }),
          multilineTag: 'p'
        }),
        anchor: anchor
      });
    }
  }, {
    type: 'block',
    blocks: ['core/pullquote'],
    transform: function transform(_ref6) {
      var values = _ref6.values,
          anchor = _ref6.anchor;
      return Object(external_this_wp_blocks_["createBlock"])('core/pullquote', {
        value: Object(external_this_wp_richText_["toHTMLString"])({
          value: Object(external_this_wp_richText_["create"])({
            html: values,
            multilineTag: 'li',
            multilineWrapperTags: ['ul', 'ol']
          }),
          multilineTag: 'p'
        }),
        anchor: anchor
      });
    }
  }]
};
/* harmony default export */ var list_transforms = (list_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/list/index.js


function list_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function list_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { list_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { list_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var list_metadata = {
  name: "core/list",
  category: "text",
  attributes: {
    ordered: {
      type: "boolean",
      "default": false
    },
    values: {
      type: "string",
      source: "html",
      selector: "ol,ul",
      multiline: "li",
      __unstableMultilineWrapperTags: ["ol", "ul"],
      "default": ""
    },
    type: {
      type: "string"
    },
    start: {
      type: "number"
    },
    reversed: {
      type: "boolean"
    }
  },
  supports: {
    anchor: true,
    className: false,
    __unstablePasteTextInline: true,
    lightBlockWrapper: true
  }
};


var list_name = list_metadata.name;

var list_settings = {
  title: Object(external_this_wp_i18n_["__"])('List'),
  description: Object(external_this_wp_i18n_["__"])('Create a bulleted or numbered list.'),
  icon: library_list,
  keywords: [Object(external_this_wp_i18n_["__"])('bullet list'), Object(external_this_wp_i18n_["__"])('ordered list'), Object(external_this_wp_i18n_["__"])('numbered list')],
  example: {
    attributes: {
      values: '<li>Alice.</li><li>The White Rabbit.</li><li>The Cheshire Cat.</li><li>The Mad Hatter.</li><li>The Queen of Hearts.</li>'
    }
  },
  transforms: list_transforms,
  merge: function merge(attributes, attributesToMerge) {
    var values = attributesToMerge.values;

    if (!values || values === '<li></li>') {
      return attributes;
    }

    return list_objectSpread({}, attributes, {
      values: attributes.values + values
    });
  },
  edit: ListEdit,
  save: list_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/missing/edit.js


/**
 * WordPress dependencies
 */







function MissingBlockWarning(_ref) {
  var attributes = _ref.attributes,
      convertToHTML = _ref.convertToHTML;
  var originalName = attributes.originalName,
      originalUndelimitedContent = attributes.originalUndelimitedContent;
  var hasContent = !!originalUndelimitedContent;
  var hasHTMLBlock = Object(external_this_wp_blocks_["getBlockType"])('core/html');
  var actions = [];
  var messageHTML;

  if (hasContent && hasHTMLBlock) {
    messageHTML = Object(external_this_wp_i18n_["sprintf"])(
    /* translators: %s: block name */
    Object(external_this_wp_i18n_["__"])('Your site doesn’t include support for the "%s" block. You can leave this block intact, convert its content to a Custom HTML block, or remove it entirely.'), originalName);
    actions.push(Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
      key: "convert",
      onClick: convertToHTML,
      isLarge: true,
      isPrimary: true
    }, Object(external_this_wp_i18n_["__"])('Keep as HTML')));
  } else {
    messageHTML = Object(external_this_wp_i18n_["sprintf"])(
    /* translators: %s: block name */
    Object(external_this_wp_i18n_["__"])('Your site doesn’t include support for the "%s" block. You can leave this block intact or remove it entirely.'), originalName);
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["Warning"], {
    actions: actions
  }, messageHTML), Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], null, originalUndelimitedContent));
}

var MissingEdit = Object(external_this_wp_data_["withDispatch"])(function (dispatch, _ref2) {
  var clientId = _ref2.clientId,
      attributes = _ref2.attributes;

  var _dispatch = dispatch('core/block-editor'),
      replaceBlock = _dispatch.replaceBlock;

  return {
    convertToHTML: function convertToHTML() {
      replaceBlock(clientId, Object(external_this_wp_blocks_["createBlock"])('core/html', {
        content: attributes.originalUndelimitedContent
      }));
    }
  };
})(MissingBlockWarning);
/* harmony default export */ var missing_edit = (MissingEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/missing/save.js


/**
 * WordPress dependencies
 */

function missing_save_save(_ref) {
  var attributes = _ref.attributes;
  // Preserve the missing block's content.
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], null, attributes.originalContent);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/missing/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var missing_metadata = {
  name: "core/missing",
  category: "text",
  attributes: {
    originalName: {
      type: "string"
    },
    originalUndelimitedContent: {
      type: "string"
    },
    originalContent: {
      type: "string",
      source: "html"
    }
  },
  supports: {
    className: false,
    customClassName: false,
    inserter: false,
    html: false,
    reusable: false
  }
};

var missing_name = missing_metadata.name;

var missing_settings = {
  name: missing_name,
  title: Object(external_this_wp_i18n_["__"])('Unsupported'),
  description: Object(external_this_wp_i18n_["__"])('Your site doesn’t include support for this block.'),
  __experimentalLabel: function __experimentalLabel(attributes, _ref) {
    var context = _ref.context;

    if (context === 'accessibility') {
      var originalName = attributes.originalName;
      var originalBlockType = originalName ? Object(external_this_wp_blocks_["getBlockType"])(originalName) : undefined;

      if (originalBlockType) {
        return originalBlockType.settings.title || originalName;
      }

      return '';
    }
  },
  edit: missing_edit,
  save: missing_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/more.js


/**
 * WordPress dependencies
 */

var more = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M4 9v1.5h16V9H4zm12 5.5h4V13h-4v1.5zm-6 0h4V13h-4v1.5zm-6 0h4V13H4v1.5z"
}));
/* harmony default export */ var library_more = (more);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/more/edit.js








function more_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (more_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function more_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */







var edit_MoreEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(MoreEdit, _Component);

  var _super = more_edit_createSuper(MoreEdit);

  function MoreEdit() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, MoreEdit);

    _this = _super.apply(this, arguments);
    _this.onChangeInput = _this.onChangeInput.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onKeyDown = _this.onKeyDown.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      defaultText: Object(external_this_wp_i18n_["__"])('Read more')
    };
    return _this;
  }

  Object(createClass["a" /* default */])(MoreEdit, [{
    key: "onChangeInput",
    value: function onChangeInput(event) {
      // Set defaultText to an empty string, allowing the user to clear/replace the input field's text
      this.setState({
        defaultText: ''
      });
      var value = event.target.value.length === 0 ? undefined : event.target.value;
      this.props.setAttributes({
        customText: value
      });
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      var keyCode = event.keyCode;
      var insertBlocksAfter = this.props.insertBlocksAfter;

      if (keyCode === external_this_wp_keycodes_["ENTER"]) {
        insertBlocksAfter([Object(external_this_wp_blocks_["createBlock"])(Object(external_this_wp_blocks_["getDefaultBlockName"])())]);
      }
    }
  }, {
    key: "getHideExcerptHelp",
    value: function getHideExcerptHelp(checked) {
      return checked ? Object(external_this_wp_i18n_["__"])('The excerpt is hidden.') : Object(external_this_wp_i18n_["__"])('The excerpt is visible.');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          customText = _this$props$attribute.customText,
          noTeaser = _this$props$attribute.noTeaser;
      var setAttributes = this.props.setAttributes;

      var toggleHideExcerpt = function toggleHideExcerpt() {
        return setAttributes({
          noTeaser: !noTeaser
        });
      };

      var defaultText = this.state.defaultText;
      var value = customText !== undefined ? customText : defaultText;
      var inputLength = value.length + 1.2;
      var currentWidth = {
        width: inputLength + 'em'
      };
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Hide the excerpt on the full content page'),
        checked: !!noTeaser,
        onChange: toggleHideExcerpt,
        help: this.getHideExcerptHelp
      }))), Object(external_this_wp_element_["createElement"])("div", {
        className: "wp-block-more"
      }, Object(external_this_wp_element_["createElement"])("input", {
        type: "text",
        value: value,
        onChange: this.onChangeInput,
        onKeyDown: this.onKeyDown,
        style: currentWidth
      })));
    }
  }]);

  return MoreEdit;
}(external_this_wp_element_["Component"]);



// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/more/save.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function more_save_save(_ref) {
  var attributes = _ref.attributes;
  var customText = attributes.customText,
      noTeaser = attributes.noTeaser;
  var moreTag = customText ? "<!--more ".concat(customText, "-->") : '<!--more-->';
  var noTeaserTag = noTeaser ? '<!--noteaser-->' : '';
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], null, Object(external_this_lodash_["compact"])([moreTag, noTeaserTag]).join('\n'));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/more/transforms.js
/**
 * WordPress dependencies
 */

var more_transforms_transforms = {
  from: [{
    type: 'raw',
    schema: {
      'wp-block': {
        attributes: ['data-block']
      }
    },
    isMatch: function isMatch(node) {
      return node.dataset && node.dataset.block === 'core/more';
    },
    transform: function transform(node) {
      var _node$dataset = node.dataset,
          customText = _node$dataset.customText,
          noTeaser = _node$dataset.noTeaser;
      var attrs = {}; // Don't copy unless defined and not an empty string

      if (customText) {
        attrs.customText = customText;
      } // Special handling for boolean


      if (noTeaser === '') {
        attrs.noTeaser = true;
      }

      return Object(external_this_wp_blocks_["createBlock"])('core/more', attrs);
    }
  }]
};
/* harmony default export */ var more_transforms = (more_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/more/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var more_metadata = {
  name: "core/more",
  category: "design",
  attributes: {
    customText: {
      type: "string"
    },
    noTeaser: {
      type: "boolean",
      "default": false
    }
  },
  supports: {
    customClassName: false,
    className: false,
    html: false,
    multiple: false
  }
};


var more_name = more_metadata.name;

var more_settings = {
  title: Object(external_this_wp_i18n_["_x"])('More', 'block name'),
  description: Object(external_this_wp_i18n_["__"])('Content before this block will be shown in the excerpt on your archives page.'),
  icon: library_more,
  example: {},
  __experimentalLabel: function __experimentalLabel(attributes, _ref) {
    var context = _ref.context;

    if (context === 'accessibility') {
      return attributes.customText;
    }
  },
  transforms: more_transforms,
  edit: edit_MoreEdit,
  save: more_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/page-break.js


/**
 * WordPress dependencies
 */

var pageBreak = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M7.8 6c0-.7.6-1.2 1.2-1.2h6c.7 0 1.2.6 1.2 1.2v3h1.5V6c0-1.5-1.2-2.8-2.8-2.8H9C7.5 3.2 6.2 4.5 6.2 6v3h1.5V6zm8.4 11c0 .7-.6 1.2-1.2 1.2H9c-.7 0-1.2-.6-1.2-1.2v-3H6.2v3c0 1.5 1.2 2.8 2.8 2.8h6c1.5 0 2.8-1.2 2.8-2.8v-3h-1.5v3zM4 11v1h16v-1H4z"
}));
/* harmony default export */ var page_break = (pageBreak);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/nextpage/edit.js


/**
 * WordPress dependencies
 */

function NextPageEdit() {
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "wp-block-nextpage"
  }, Object(external_this_wp_element_["createElement"])("span", null, Object(external_this_wp_i18n_["__"])('Page break')));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/nextpage/save.js


/**
 * WordPress dependencies
 */

function nextpage_save_save() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], null, '<!--nextpage-->');
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/nextpage/transforms.js
/**
 * WordPress dependencies
 */

var nextpage_transforms_transforms = {
  from: [{
    type: 'raw',
    schema: {
      'wp-block': {
        attributes: ['data-block']
      }
    },
    isMatch: function isMatch(node) {
      return node.dataset && node.dataset.block === 'core/nextpage';
    },
    transform: function transform() {
      return Object(external_this_wp_blocks_["createBlock"])('core/nextpage', {});
    }
  }]
};
/* harmony default export */ var nextpage_transforms = (nextpage_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/nextpage/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var nextpage_metadata = {
  name: "core/nextpage",
  category: "design",
  parent: ["core/post-content"],
  supports: {
    customClassName: false,
    className: false,
    html: false
  }
};


var nextpage_name = nextpage_metadata.name;

var nextpage_settings = {
  title: Object(external_this_wp_i18n_["__"])('Page Break'),
  description: Object(external_this_wp_i18n_["__"])('Separate your content into a multi-page experience.'),
  icon: page_break,
  keywords: [Object(external_this_wp_i18n_["__"])('next page'), Object(external_this_wp_i18n_["__"])('pagination')],
  example: {},
  transforms: nextpage_transforms,
  edit: NextPageEdit,
  save: nextpage_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/preformatted.js


/**
 * WordPress dependencies
 */

var preformatted = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v12zM7 16.5h6V15H7v1.5zm4-4h6V11h-6v1.5zM9 11H7v1.5h2V11zm6 5.5h2V15h-2v1.5z"
}));
/* harmony default export */ var library_preformatted = (preformatted);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/preformatted/edit.js


/**
 * WordPress dependencies
 */


function PreformattedEdit(_ref) {
  var attributes = _ref.attributes,
      mergeBlocks = _ref.mergeBlocks,
      setAttributes = _ref.setAttributes,
      className = _ref.className,
      style = _ref.style;
  var content = attributes.content;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    tagName: external_this_wp_blockEditor_["__experimentalBlock"].pre,
    identifier: "content",
    preserveWhiteSpace: true,
    value: content,
    onChange: function onChange(nextContent) {
      setAttributes({
        content: nextContent
      });
    },
    placeholder: Object(external_this_wp_i18n_["__"])('Write preformatted text…'),
    className: className,
    style: style,
    onMerge: mergeBlocks
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/preformatted/save.js


/**
 * WordPress dependencies
 */

function preformatted_save_save(_ref) {
  var attributes = _ref.attributes;
  var content = attributes.content;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: "pre",
    value: content
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/preformatted/transforms.js
/**
 * WordPress dependencies
 */

var preformatted_transforms_transforms = {
  from: [{
    type: 'block',
    blocks: ['core/code', 'core/paragraph'],
    transform: function transform(_ref) {
      var content = _ref.content,
          anchor = _ref.anchor;
      return Object(external_this_wp_blocks_["createBlock"])('core/preformatted', {
        content: content,
        anchor: anchor
      });
    }
  }, {
    type: 'raw',
    isMatch: function isMatch(node) {
      return node.nodeName === 'PRE' && !(node.children.length === 1 && node.firstChild.nodeName === 'CODE');
    },
    schema: function schema(_ref2) {
      var phrasingContentSchema = _ref2.phrasingContentSchema;
      return {
        pre: {
          children: phrasingContentSchema
        }
      };
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/paragraph', attributes);
    }
  }, {
    type: 'block',
    blocks: ['core/code'],
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/code', attributes);
    }
  }]
};
/* harmony default export */ var preformatted_transforms = (preformatted_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/preformatted/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var preformatted_metadata = {
  name: "core/preformatted",
  category: "text",
  attributes: {
    content: {
      type: "string",
      source: "html",
      selector: "pre",
      "default": "",
      __unstablePreserveWhiteSpace: true
    }
  },
  supports: {
    anchor: true,
    lightBlockWrapper: true
  }
};


var preformatted_name = preformatted_metadata.name;

var preformatted_settings = {
  title: Object(external_this_wp_i18n_["__"])('Preformatted'),
  description: Object(external_this_wp_i18n_["__"])('Add text that respects your spacing and tabs, and also allows styling.'),
  icon: library_preformatted,
  example: {
    attributes: {
      /* eslint-disable @wordpress/i18n-no-collapsible-whitespace */
      // translators: Sample content for the Preformatted block. Can be replaced with a more locale-adequate work.
      content: Object(external_this_wp_i18n_["__"])('EXT. XANADU - FAINT DAWN - 1940 (MINIATURE)\nWindow, very small in the distance, illuminated.\nAll around this is an almost totally black screen. Now, as the camera moves slowly towards the window which is almost a postage stamp in the frame, other forms appear;')
      /* eslint-enable @wordpress/i18n-no-collapsible-whitespace */

    }
  },
  transforms: preformatted_transforms,
  edit: PreformattedEdit,
  save: preformatted_save_save,
  merge: function merge(attributes, attributesToMerge) {
    return {
      content: attributes.content + attributesToMerge.content
    };
  }
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/pullquote.js


/**
 * WordPress dependencies
 */

var pullquote = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M18 8H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v4zM4 4v1.5h16V4H4zm0 16h16v-1.5H4V20z"
}));
/* harmony default export */ var library_pullquote = (pullquote);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/pullquote/shared.js
var SOLID_COLOR_STYLE_NAME = 'solid-color';
var SOLID_COLOR_CLASS = "is-style-".concat(SOLID_COLOR_STYLE_NAME);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/pullquote/deprecated.js




function pullquote_deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pullquote_deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pullquote_deprecated_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pullquote_deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


var pullquote_deprecated_blockAttributes = {
  value: {
    type: 'string',
    source: 'html',
    selector: 'blockquote',
    multiline: 'p'
  },
  citation: {
    type: 'string',
    source: 'html',
    selector: 'cite',
    default: ''
  },
  mainColor: {
    type: 'string'
  },
  customMainColor: {
    type: 'string'
  },
  textColor: {
    type: 'string'
  },
  customTextColor: {
    type: 'string'
  }
};

function parseBorderColor(styleString) {
  if (!styleString) {
    return;
  }

  var matches = styleString.match(/border-color:([^;]+)[;]?/);

  if (matches && matches[1]) {
    return matches[1];
  }
}

var pullquote_deprecated_deprecated = [{
  attributes: pullquote_deprecated_objectSpread({}, pullquote_deprecated_blockAttributes, {
    // figureStyle is an attribute that never existed.
    // We are using it as a way to access the styles previously applied to the figure.
    figureStyle: {
      source: 'attribute',
      selector: 'figure',
      attribute: 'style'
    }
  }),
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var mainColor = attributes.mainColor,
        customMainColor = attributes.customMainColor,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor,
        value = attributes.value,
        citation = attributes.citation,
        className = attributes.className,
        figureStyle = attributes.figureStyle;
    var isSolidColorStyle = Object(external_this_lodash_["includes"])(className, SOLID_COLOR_CLASS);
    var figureClasses, figureStyles; // Is solid color style

    if (isSolidColorStyle) {
      var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', mainColor);
      figureClasses = classnames_default()(Object(defineProperty["a" /* default */])({
        'has-background': backgroundClass || customMainColor
      }, backgroundClass, backgroundClass));
      figureStyles = {
        backgroundColor: backgroundClass ? undefined : customMainColor
      }; // Is normal style and a custom color is being used ( we can set a style directly with its value)
    } else if (customMainColor) {
      figureStyles = {
        borderColor: customMainColor
      }; // If normal style and a named color are being used, we need to retrieve the color value to set the style,
      // as there is no expectation that themes create classes that set border colors.
    } else if (mainColor) {
      // Previously here we queried the color settings to know the color value
      // of a named color. This made the save function impure and the block was refactored,
      // because meanwhile a change in the editor made it impossible to query color settings in the save function.
      // Here instead of querying the color settings to know the color value, we retrieve the value
      // directly from the style previously serialized.
      var borderColor = parseBorderColor(figureStyle);
      figureStyles = {
        borderColor: borderColor
      };
    }

    var blockquoteTextColorClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var blockquoteClasses = (textColor || customTextColor) && classnames_default()('has-text-color', Object(defineProperty["a" /* default */])({}, blockquoteTextColorClass, blockquoteTextColorClass));
    var blockquoteStyles = blockquoteTextColorClass ? undefined : {
      color: customTextColor
    };
    return Object(external_this_wp_element_["createElement"])("figure", {
      className: figureClasses,
      style: figureStyles
    }, Object(external_this_wp_element_["createElement"])("blockquote", {
      className: blockquoteClasses,
      style: blockquoteStyles
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      value: value,
      multiline: true
    }), !external_this_wp_blockEditor_["RichText"].isEmpty(citation) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "cite",
      value: citation
    })));
  },
  migrate: function migrate(_ref2) {
    var className = _ref2.className,
        figureStyle = _ref2.figureStyle,
        mainColor = _ref2.mainColor,
        attributes = Object(objectWithoutProperties["a" /* default */])(_ref2, ["className", "figureStyle", "mainColor"]);

    var isSolidColorStyle = Object(external_this_lodash_["includes"])(className, SOLID_COLOR_CLASS); // If is the default style, and a main color is set,
    // migrate the main color value into a custom color.
    // The custom color value is retrived by parsing the figure styles.

    if (!isSolidColorStyle && mainColor && figureStyle) {
      var borderColor = parseBorderColor(figureStyle);

      if (borderColor) {
        return pullquote_deprecated_objectSpread({}, attributes, {
          className: className,
          customMainColor: borderColor
        });
      }
    }

    return pullquote_deprecated_objectSpread({
      className: className,
      mainColor: mainColor
    }, attributes);
  }
}, {
  attributes: pullquote_deprecated_blockAttributes,
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var mainColor = attributes.mainColor,
        customMainColor = attributes.customMainColor,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor,
        value = attributes.value,
        citation = attributes.citation,
        className = attributes.className;
    var isSolidColorStyle = Object(external_this_lodash_["includes"])(className, SOLID_COLOR_CLASS);
    var figureClass, figureStyles; // Is solid color style

    if (isSolidColorStyle) {
      figureClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', mainColor);

      if (!figureClass) {
        figureStyles = {
          backgroundColor: customMainColor
        };
      } // Is normal style and a custom color is being used ( we can set a style directly with its value)

    } else if (customMainColor) {
      figureStyles = {
        borderColor: customMainColor
      }; // Is normal style and a named color is being used, we need to retrieve the color value to set the style,
      // as there is no expectation that themes create classes that set border colors.
    } else if (mainColor) {
      var colors = Object(external_this_lodash_["get"])(Object(external_this_wp_data_["select"])('core/block-editor').getSettings(), ['colors'], []);
      var colorObject = Object(external_this_wp_blockEditor_["getColorObjectByAttributeValues"])(colors, mainColor);
      figureStyles = {
        borderColor: colorObject.color
      };
    }

    var blockquoteTextColorClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var blockquoteClasses = textColor || customTextColor ? classnames_default()('has-text-color', Object(defineProperty["a" /* default */])({}, blockquoteTextColorClass, blockquoteTextColorClass)) : undefined;
    var blockquoteStyle = blockquoteTextColorClass ? undefined : {
      color: customTextColor
    };
    return Object(external_this_wp_element_["createElement"])("figure", {
      className: figureClass,
      style: figureStyles
    }, Object(external_this_wp_element_["createElement"])("blockquote", {
      className: blockquoteClasses,
      style: blockquoteStyle
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      value: value,
      multiline: true
    }), !external_this_wp_blockEditor_["RichText"].isEmpty(citation) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "cite",
      value: citation
    })));
  }
}, {
  attributes: pullquote_deprecated_objectSpread({}, pullquote_deprecated_blockAttributes),
  save: function save(_ref4) {
    var attributes = _ref4.attributes;
    var value = attributes.value,
        citation = attributes.citation;
    return Object(external_this_wp_element_["createElement"])("blockquote", null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      value: value,
      multiline: true
    }), !external_this_wp_blockEditor_["RichText"].isEmpty(citation) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "cite",
      value: citation
    }));
  }
}, {
  attributes: pullquote_deprecated_objectSpread({}, pullquote_deprecated_blockAttributes, {
    citation: {
      type: 'string',
      source: 'html',
      selector: 'footer'
    },
    align: {
      type: 'string',
      default: 'none'
    }
  }),
  save: function save(_ref5) {
    var attributes = _ref5.attributes;
    var value = attributes.value,
        citation = attributes.citation,
        align = attributes.align;
    return Object(external_this_wp_element_["createElement"])("blockquote", {
      className: "align".concat(align)
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      value: value,
      multiline: true
    }), !external_this_wp_blockEditor_["RichText"].isEmpty(citation) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "footer",
      value: citation
    }));
  }
}];
/* harmony default export */ var pullquote_deprecated = (pullquote_deprecated_deprecated);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/pullquote/figure.js
var Figure = 'figure';

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/pullquote/blockquote.js
var BlockQuote = 'blockquote';

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/pullquote/edit.js










function pullquote_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (pullquote_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function pullquote_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



/**
 * Internal dependencies
 */



var edit_PullQuoteEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(PullQuoteEdit, _Component);

  var _super = pullquote_edit_createSuper(PullQuoteEdit);

  function PullQuoteEdit(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PullQuoteEdit);

    _this = _super.call(this, props);
    _this.wasTextColorAutomaticallyComputed = false;
    _this.pullQuoteMainColorSetter = _this.pullQuoteMainColorSetter.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.pullQuoteTextColorSetter = _this.pullQuoteTextColorSetter.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(PullQuoteEdit, [{
    key: "pullQuoteMainColorSetter",
    value: function pullQuoteMainColorSetter(colorValue) {
      var _this$props = this.props,
          colorUtils = _this$props.colorUtils,
          textColor = _this$props.textColor,
          setAttributes = _this$props.setAttributes,
          setTextColor = _this$props.setTextColor,
          setMainColor = _this$props.setMainColor,
          className = _this$props.className;
      var isSolidColorStyle = Object(external_this_lodash_["includes"])(className, SOLID_COLOR_CLASS);
      var needTextColor = !textColor.color || this.wasTextColorAutomaticallyComputed;
      var shouldSetTextColor = isSolidColorStyle && needTextColor && colorValue;

      if (isSolidColorStyle) {
        // If we use the solid color style, set the color using the normal mechanism.
        setMainColor(colorValue);
      } else {
        // If we use the default style, set the color as a custom color to force the usage of an inline style.
        // Default style uses a border color for which classes are not available.
        setAttributes({
          customMainColor: colorValue
        });
      }

      if (shouldSetTextColor) {
        this.wasTextColorAutomaticallyComputed = true;
        setTextColor(colorUtils.getMostReadableColor(colorValue));
      }
    }
  }, {
    key: "pullQuoteTextColorSetter",
    value: function pullQuoteTextColorSetter(colorValue) {
      var setTextColor = this.props.setTextColor;
      setTextColor(colorValue);
      this.wasTextColorAutomaticallyComputed = false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          className = _this$props2.className,
          mainColor = _this$props2.mainColor,
          setAttributes = _this$props2.setAttributes; // If the block includes a named color and we switched from the
      // solid color style to the default style.

      if (attributes.mainColor && !Object(external_this_lodash_["includes"])(className, SOLID_COLOR_CLASS) && Object(external_this_lodash_["includes"])(prevProps.className, SOLID_COLOR_CLASS)) {
        // Remove the named color, and set the color as a custom color.
        // This is done because named colors use classes, in the default style we use a border color,
        // and themes don't set classes for border colors.
        setAttributes({
          mainColor: undefined,
          customMainColor: mainColor.color
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          attributes = _this$props3.attributes,
          mainColor = _this$props3.mainColor,
          textColor = _this$props3.textColor,
          setAttributes = _this$props3.setAttributes,
          isSelected = _this$props3.isSelected,
          className = _this$props3.className,
          insertBlocksAfter = _this$props3.insertBlocksAfter;
      var value = attributes.value,
          citation = attributes.citation;
      var isSolidColorStyle = Object(external_this_lodash_["includes"])(className, SOLID_COLOR_CLASS);
      var figureStyles = isSolidColorStyle ? {
        backgroundColor: mainColor.color
      } : {
        borderColor: mainColor.color
      };
      var figureClasses = classnames_default()(className, Object(defineProperty["a" /* default */])({
        'has-background': isSolidColorStyle && mainColor.color
      }, mainColor.class, isSolidColorStyle && mainColor.class));
      var blockquoteStyles = {
        color: textColor.color
      };
      var blockquoteClasses = textColor.color && classnames_default()('has-text-color', Object(defineProperty["a" /* default */])({}, textColor.class, textColor.class));
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(Figure, {
        style: figureStyles,
        className: figureClasses
      }, Object(external_this_wp_element_["createElement"])(BlockQuote, {
        style: blockquoteStyles,
        className: blockquoteClasses
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
        identifier: "value",
        multiline: true,
        value: value,
        onChange: function onChange(nextValue) {
          return setAttributes({
            value: nextValue
          });
        },
        placeholder: // translators: placeholder text used for the quote
        Object(external_this_wp_i18n_["__"])('Write quote…'),
        textAlign: "center"
      }), (!external_this_wp_blockEditor_["RichText"].isEmpty(citation) || isSelected) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
        identifier: "citation",
        value: citation,
        placeholder: // translators: placeholder text used for the citation
        Object(external_this_wp_i18n_["__"])('Write citation…'),
        onChange: function onChange(nextCitation) {
          return setAttributes({
            citation: nextCitation
          });
        },
        className: "wp-block-pullquote__citation",
        __unstableMobileNoFocusOnMount: true,
        textAlign: "center",
        __unstableOnSplitAtEnd: function __unstableOnSplitAtEnd() {
          return insertBlocksAfter(Object(external_this_wp_blocks_["createBlock"])('core/paragraph'));
        }
      }))), external_this_wp_element_["Platform"].OS === 'web' && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["PanelColorSettings"], {
        title: Object(external_this_wp_i18n_["__"])('Color settings'),
        colorSettings: [{
          value: mainColor.color,
          onChange: this.pullQuoteMainColorSetter,
          label: Object(external_this_wp_i18n_["__"])('Main color')
        }, {
          value: textColor.color,
          onChange: this.pullQuoteTextColorSetter,
          label: Object(external_this_wp_i18n_["__"])('Text color')
        }]
      }, isSolidColorStyle && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["ContrastChecker"], Object(esm_extends["a" /* default */])({
        textColor: textColor.color,
        backgroundColor: mainColor.color
      }, {
        isLargeText: false
      })))));
    }
  }]);

  return PullQuoteEdit;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var pullquote_edit = (Object(external_this_wp_blockEditor_["withColors"])({
  mainColor: 'background-color',
  textColor: 'color'
})(edit_PullQuoteEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/pullquote/save.js



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function pullquote_save_save(_ref) {
  var attributes = _ref.attributes;
  var mainColor = attributes.mainColor,
      customMainColor = attributes.customMainColor,
      textColor = attributes.textColor,
      customTextColor = attributes.customTextColor,
      value = attributes.value,
      citation = attributes.citation,
      className = attributes.className;
  var isSolidColorStyle = Object(external_this_lodash_["includes"])(className, SOLID_COLOR_CLASS);
  var figureClasses, figureStyles; // Is solid color style

  if (isSolidColorStyle) {
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', mainColor);
    figureClasses = classnames_default()(Object(defineProperty["a" /* default */])({
      'has-background': backgroundClass || customMainColor
    }, backgroundClass, backgroundClass));
    figureStyles = {
      backgroundColor: backgroundClass ? undefined : customMainColor
    }; // Is normal style and a custom color is being used ( we can set a style directly with its value)
  } else if (customMainColor) {
    figureStyles = {
      borderColor: customMainColor
    };
  }

  var blockquoteTextColorClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
  var blockquoteClasses = (textColor || customTextColor) && classnames_default()('has-text-color', Object(defineProperty["a" /* default */])({}, blockquoteTextColorClass, blockquoteTextColorClass));
  var blockquoteStyles = blockquoteTextColorClass ? undefined : {
    color: customTextColor
  };
  return Object(external_this_wp_element_["createElement"])("figure", {
    className: figureClasses,
    style: figureStyles
  }, Object(external_this_wp_element_["createElement"])("blockquote", {
    className: blockquoteClasses,
    style: blockquoteStyles
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    value: value,
    multiline: true
  }), !external_this_wp_blockEditor_["RichText"].isEmpty(citation) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: "cite",
    value: citation
  })));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/pullquote/transforms.js




function pullquote_transforms_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pullquote_transforms_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pullquote_transforms_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pullquote_transforms_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


var pullquote_transforms_transforms = {
  from: [{
    type: 'block',
    isMultiBlock: true,
    blocks: ['core/paragraph'],
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/pullquote', {
        value: Object(external_this_wp_richText_["toHTMLString"])({
          value: Object(external_this_wp_richText_["join"])(attributes.map(function (_ref) {
            var content = _ref.content;
            return Object(external_this_wp_richText_["create"])({
              html: content
            });
          }), "\u2028"),
          multilineTag: 'p'
        }),
        anchor: attributes.anchor
      });
    }
  }, {
    type: 'block',
    blocks: ['core/heading'],
    transform: function transform(_ref2) {
      var content = _ref2.content,
          anchor = _ref2.anchor;
      return Object(external_this_wp_blocks_["createBlock"])('core/pullquote', {
        value: "<p>".concat(content, "</p>"),
        anchor: anchor
      });
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(_ref3) {
      var value = _ref3.value,
          citation = _ref3.citation;
      var paragraphs = [];

      if (value && value !== '<p></p>') {
        paragraphs.push.apply(paragraphs, Object(toConsumableArray["a" /* default */])(Object(external_this_wp_richText_["split"])(Object(external_this_wp_richText_["create"])({
          html: value,
          multilineTag: 'p'
        }), "\u2028").map(function (piece) {
          return Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
            content: Object(external_this_wp_richText_["toHTMLString"])({
              value: piece
            })
          });
        })));
      }

      if (citation && citation !== '<p></p>') {
        paragraphs.push(Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
          content: citation
        }));
      }

      if (paragraphs.length === 0) {
        return Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
          content: ''
        });
      }

      return paragraphs;
    }
  }, {
    type: 'block',
    blocks: ['core/heading'],
    transform: function transform(_ref4) {
      var value = _ref4.value,
          citation = _ref4.citation,
          attrs = Object(objectWithoutProperties["a" /* default */])(_ref4, ["value", "citation"]);

      // If there is no pullquote content, use the citation as the
      // content of the resulting heading. A nonexistent citation
      // will result in an empty heading.
      if (value === '<p></p>') {
        return Object(external_this_wp_blocks_["createBlock"])('core/heading', {
          content: citation
        });
      }

      var pieces = Object(external_this_wp_richText_["split"])(Object(external_this_wp_richText_["create"])({
        html: value,
        multilineTag: 'p'
      }), "\u2028");
      var headingBlock = Object(external_this_wp_blocks_["createBlock"])('core/heading', {
        content: Object(external_this_wp_richText_["toHTMLString"])({
          value: pieces[0]
        })
      });

      if (!citation && pieces.length === 1) {
        return headingBlock;
      }

      var quotePieces = pieces.slice(1);
      var pullquoteBlock = Object(external_this_wp_blocks_["createBlock"])('core/pullquote', pullquote_transforms_objectSpread({}, attrs, {
        citation: citation,
        value: Object(external_this_wp_richText_["toHTMLString"])({
          value: quotePieces.length ? Object(external_this_wp_richText_["join"])(pieces.slice(1), "\u2028") : Object(external_this_wp_richText_["create"])(),
          multilineTag: 'p'
        })
      }));
      return [headingBlock, pullquoteBlock];
    }
  }]
};
/* harmony default export */ var pullquote_transforms = (pullquote_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/pullquote/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




var pullquote_metadata = {
  name: "core/pullquote",
  category: "text",
  attributes: {
    value: {
      type: "string",
      source: "html",
      selector: "blockquote",
      multiline: "p"
    },
    citation: {
      type: "string",
      source: "html",
      selector: "cite",
      "default": ""
    },
    mainColor: {
      type: "string"
    },
    customMainColor: {
      type: "string"
    },
    textColor: {
      type: "string"
    },
    customTextColor: {
      type: "string"
    }
  },
  supports: {
    anchor: true,
    align: ["left", "right", "wide", "full"]
  }
};


var pullquote_name = pullquote_metadata.name;

var pullquote_settings = {
  title: Object(external_this_wp_i18n_["__"])('Pullquote'),
  description: Object(external_this_wp_i18n_["__"])('Give special visual emphasis to a quote from your text.'),
  icon: library_pullquote,
  example: {
    attributes: {
      value: '<p>' + // translators: Quote serving as example for the Pullquote block. Attributed to Matt Mullenweg.
      Object(external_this_wp_i18n_["__"])('One of the hardest things to do in technology is disrupt yourself.') + '</p>',
      citation: Object(external_this_wp_i18n_["__"])('Matt Mullenweg')
    }
  },
  styles: [{
    name: 'default',
    label: Object(external_this_wp_i18n_["_x"])('Default', 'block style'),
    isDefault: true
  }, {
    name: SOLID_COLOR_STYLE_NAME,
    label: Object(external_this_wp_i18n_["__"])('Solid color')
  }],
  transforms: pullquote_transforms,
  edit: pullquote_edit,
  save: pullquote_save_save,
  deprecated: pullquote_deprecated
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/block/edit-panel/index.js








function edit_panel_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (edit_panel_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function edit_panel_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */






var edit_panel_ReusableBlockEditPanel = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(ReusableBlockEditPanel, _Component);

  var _super = edit_panel_createSuper(ReusableBlockEditPanel);

  function ReusableBlockEditPanel() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ReusableBlockEditPanel);

    _this = _super.apply(this, arguments);
    _this.titleField = Object(external_this_wp_element_["createRef"])();
    _this.editButton = Object(external_this_wp_element_["createRef"])();
    _this.handleFormSubmit = _this.handleFormSubmit.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.handleTitleChange = _this.handleTitleChange.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.handleTitleKeyDown = _this.handleTitleKeyDown.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(ReusableBlockEditPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Select the input text when the form opens.
      if (this.props.isEditing && this.titleField.current) {
        this.titleField.current.select();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Select the input text only once when the form opens.
      if (!prevProps.isEditing && this.props.isEditing) {
        this.titleField.current.select();
      } // Move focus back to the Edit button after pressing the Escape key or Save.


      if ((prevProps.isEditing || prevProps.isSaving) && !this.props.isEditing && !this.props.isSaving) {
        this.editButton.current.focus();
      }
    }
  }, {
    key: "handleFormSubmit",
    value: function handleFormSubmit(event) {
      event.preventDefault();
      this.props.onSave();
    }
  }, {
    key: "handleTitleChange",
    value: function handleTitleChange(event) {
      this.props.onChangeTitle(event.target.value);
    }
  }, {
    key: "handleTitleKeyDown",
    value: function handleTitleKeyDown(event) {
      if (event.keyCode === external_this_wp_keycodes_["ESCAPE"]) {
        event.stopPropagation();
        this.props.onCancel();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isEditing = _this$props.isEditing,
          title = _this$props.title,
          isSaving = _this$props.isSaving,
          isEditDisabled = _this$props.isEditDisabled,
          onEdit = _this$props.onEdit,
          instanceId = _this$props.instanceId;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, !isEditing && !isSaving && Object(external_this_wp_element_["createElement"])("div", {
        className: "reusable-block-edit-panel"
      }, Object(external_this_wp_element_["createElement"])("b", {
        className: "reusable-block-edit-panel__info"
      }, title), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        ref: this.editButton,
        isSecondary: true,
        className: "reusable-block-edit-panel__button",
        disabled: isEditDisabled,
        onClick: onEdit
      }, Object(external_this_wp_i18n_["__"])('Edit'))), (isEditing || isSaving) && Object(external_this_wp_element_["createElement"])("form", {
        className: "reusable-block-edit-panel",
        onSubmit: this.handleFormSubmit
      }, Object(external_this_wp_element_["createElement"])("label", {
        htmlFor: "reusable-block-edit-panel__title-".concat(instanceId),
        className: "reusable-block-edit-panel__label"
      }, Object(external_this_wp_i18n_["__"])('Name:')), Object(external_this_wp_element_["createElement"])("input", {
        ref: this.titleField,
        type: "text",
        disabled: isSaving,
        className: "reusable-block-edit-panel__title",
        value: title,
        onChange: this.handleTitleChange,
        onKeyDown: this.handleTitleKeyDown,
        id: "reusable-block-edit-panel__title-".concat(instanceId)
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        type: "submit",
        isSecondary: true,
        isBusy: isSaving,
        disabled: !title || isSaving,
        className: "reusable-block-edit-panel__button"
      }, Object(external_this_wp_i18n_["__"])('Save'))));
    }
  }]);

  return ReusableBlockEditPanel;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var edit_panel = (Object(external_this_wp_compose_["withInstanceId"])(edit_panel_ReusableBlockEditPanel));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/block/edit.js








function block_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (block_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function block_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



var edit_ReusableBlockEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(ReusableBlockEdit, _Component);

  var _super = block_edit_createSuper(ReusableBlockEdit);

  function ReusableBlockEdit(_ref) {
    var _this;

    var reusableBlock = _ref.reusableBlock;

    Object(classCallCheck["a" /* default */])(this, ReusableBlockEdit);

    _this = _super.apply(this, arguments);
    _this.startEditing = _this.startEditing.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.stopEditing = _this.stopEditing.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.setBlocks = _this.setBlocks.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.setTitle = _this.setTitle.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.save = _this.save.bind(Object(assertThisInitialized["a" /* default */])(_this));

    if (reusableBlock) {
      // Start in edit mode when we're working with a newly created reusable block
      _this.state = {
        isEditing: reusableBlock.isTemporary,
        title: reusableBlock.title,
        blocks: Object(external_this_wp_blocks_["parse"])(reusableBlock.content)
      };
    } else {
      // Start in preview mode when we're working with an existing reusable block
      _this.state = {
        isEditing: false,
        title: null,
        blocks: []
      };
    }

    return _this;
  }

  Object(createClass["a" /* default */])(ReusableBlockEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.reusableBlock) {
        this.props.fetchReusableBlock();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.reusableBlock !== this.props.reusableBlock && this.state.title === null) {
        this.setState({
          title: this.props.reusableBlock.title,
          blocks: Object(external_this_wp_blocks_["parse"])(this.props.reusableBlock.content)
        });
      }
    }
  }, {
    key: "startEditing",
    value: function startEditing() {
      var reusableBlock = this.props.reusableBlock;
      this.setState({
        isEditing: true,
        title: reusableBlock.title,
        blocks: Object(external_this_wp_blocks_["parse"])(reusableBlock.content)
      });
    }
  }, {
    key: "stopEditing",
    value: function stopEditing() {
      this.setState({
        isEditing: false,
        title: null,
        blocks: []
      });
    }
  }, {
    key: "setBlocks",
    value: function setBlocks(blocks) {
      this.setState({
        blocks: blocks
      });
    }
  }, {
    key: "setTitle",
    value: function setTitle(title) {
      this.setState({
        title: title
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          onSave = _this$props.onSave;
      var _this$state = this.state,
          blocks = _this$state.blocks,
          title = _this$state.title;
      var content = Object(external_this_wp_blocks_["serialize"])(blocks);
      onChange({
        title: title,
        content: content
      });
      onSave();
      this.stopEditing();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isSelected = _this$props2.isSelected,
          reusableBlock = _this$props2.reusableBlock,
          isFetching = _this$props2.isFetching,
          isSaving = _this$props2.isSaving,
          canUpdateBlock = _this$props2.canUpdateBlock,
          settings = _this$props2.settings;
      var _this$state2 = this.state,
          isEditing = _this$state2.isEditing,
          title = _this$state2.title,
          blocks = _this$state2.blocks;

      if (!reusableBlock && isFetching) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Placeholder"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null));
      }

      if (!reusableBlock) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Placeholder"], null, Object(external_this_wp_i18n_["__"])('Block has been deleted or is unavailable.'));
      }

      var element = Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockEditorProvider"], {
        settings: settings,
        value: blocks,
        onChange: this.setBlocks,
        onInput: this.setBlocks
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["WritingFlow"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockList"], null)));

      if (!isEditing) {
        element = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Disabled"], null, element);
      }

      return Object(external_this_wp_element_["createElement"])("div", {
        className: "block-library-block__reusable-block-container"
      }, (isSelected || isEditing) && Object(external_this_wp_element_["createElement"])(edit_panel, {
        isEditing: isEditing,
        title: title !== null ? title : reusableBlock.title,
        isSaving: isSaving && !reusableBlock.isTemporary,
        isEditDisabled: !canUpdateBlock,
        onEdit: this.startEditing,
        onChangeTitle: this.setTitle,
        onSave: this.save,
        onCancel: this.stopEditing
      }), element);
    }
  }]);

  return ReusableBlockEdit;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var block_edit = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, ownProps) {
  var _select = select('core/editor'),
      getReusableBlock = _select.__experimentalGetReusableBlock,
      isFetchingReusableBlock = _select.__experimentalIsFetchingReusableBlock,
      isSavingReusableBlock = _select.__experimentalIsSavingReusableBlock;

  var _select2 = select('core'),
      canUser = _select2.canUser;

  var _select3 = select('core/block-editor'),
      __experimentalGetParsedReusableBlock = _select3.__experimentalGetParsedReusableBlock,
      getSettings = _select3.getSettings;

  var ref = ownProps.attributes.ref;
  var reusableBlock = getReusableBlock(ref);
  return {
    reusableBlock: reusableBlock,
    isFetching: isFetchingReusableBlock(ref),
    isSaving: isSavingReusableBlock(ref),
    blocks: reusableBlock ? __experimentalGetParsedReusableBlock(reusableBlock.id) : null,
    canUpdateBlock: !!reusableBlock && !reusableBlock.isTemporary && !!canUser('update', 'blocks', ref),
    settings: getSettings()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, ownProps) {
  var _dispatch = dispatch('core/editor'),
      fetchReusableBlocks = _dispatch.__experimentalFetchReusableBlocks,
      updateReusableBlock = _dispatch.__experimentalUpdateReusableBlock,
      saveReusableBlock = _dispatch.__experimentalSaveReusableBlock;

  var ref = ownProps.attributes.ref;
  return {
    fetchReusableBlock: Object(external_this_lodash_["partial"])(fetchReusableBlocks, ref),
    onChange: Object(external_this_lodash_["partial"])(updateReusableBlock, ref),
    onSave: Object(external_this_lodash_["partial"])(saveReusableBlock, ref)
  };
})])(edit_ReusableBlockEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/block/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

var block_metadata = {
  name: "core/block",
  category: "reusable",
  attributes: {
    ref: {
      type: "number"
    }
  },
  supports: {
    customClassName: false,
    html: false,
    inserter: false
  }
};

var block_name = block_metadata.name;

var block_settings = {
  title: Object(external_this_wp_i18n_["__"])('Reusable Block'),
  description: Object(external_this_wp_i18n_["__"])('Create and save content to reuse across your site. Update the block, and the changes apply everywhere it’s used.'),
  edit: block_edit
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/rss.js


/**
 * WordPress dependencies
 */

var rss = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M5 10.2h-.8v1.5H5c1.9 0 3.8.8 5.1 2.1 1.4 1.4 2.1 3.2 2.1 5.1v.8h1.5V19c0-2.3-.9-4.5-2.6-6.2-1.6-1.6-3.8-2.6-6.1-2.6zm10.4-1.6C12.6 5.8 8.9 4.2 5 4.2h-.8v1.5H5c3.5 0 6.9 1.4 9.4 3.9s3.9 5.8 3.9 9.4v.8h1.5V19c0-3.9-1.6-7.6-4.4-10.4zM4 20h3v-3H4v3z"
}));
/* harmony default export */ var library_rss = (rss);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/rss/edit.js




/**
 * WordPress dependencies
 */






var DEFAULT_MIN_ITEMS = 1;
var DEFAULT_MAX_ITEMS = 10;
function RSSEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;

  var _useState = Object(external_this_wp_element_["useState"])(!attributes.feedURL),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      isEditing = _useState2[0],
      setIsEditing = _useState2[1];

  var blockLayout = attributes.blockLayout,
      columns = attributes.columns,
      displayAuthor = attributes.displayAuthor,
      displayDate = attributes.displayDate,
      displayExcerpt = attributes.displayExcerpt,
      excerptLength = attributes.excerptLength,
      feedURL = attributes.feedURL,
      itemsToShow = attributes.itemsToShow;

  function toggleAttribute(propName) {
    return function () {
      var value = attributes[propName];
      setAttributes(Object(defineProperty["a" /* default */])({}, propName, !value));
    };
  }

  function onSubmitURL(event) {
    event.preventDefault();

    if (feedURL) {
      setIsEditing(false);
    }
  }

  if (isEditing) {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Placeholder"], {
      icon: library_rss,
      label: "RSS"
    }, Object(external_this_wp_element_["createElement"])("form", {
      onSubmit: onSubmitURL,
      className: "wp-block-rss__placeholder-form"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextControl"], {
      placeholder: Object(external_this_wp_i18n_["__"])('Enter URL here…'),
      value: feedURL,
      onChange: function onChange(value) {
        return setAttributes({
          feedURL: value
        });
      },
      className: "wp-block-rss__placeholder-input"
    }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
      isPrimary: true,
      type: "submit"
    }, Object(external_this_wp_i18n_["__"])('Use URL'))));
  }

  var toolbarControls = [{
    icon: pencil["a" /* default */],
    title: Object(external_this_wp_i18n_["__"])('Edit RSS URL'),
    onClick: function onClick() {
      return setIsEditing(true);
    }
  }, {
    icon: library_list,
    title: Object(external_this_wp_i18n_["__"])('List view'),
    onClick: function onClick() {
      return setAttributes({
        blockLayout: 'list'
      });
    },
    isActive: blockLayout === 'list'
  }, {
    icon: grid["a" /* default */],
    title: Object(external_this_wp_i18n_["__"])('Grid view'),
    onClick: function onClick() {
      return setAttributes({
        blockLayout: 'grid'
      });
    },
    isActive: blockLayout === 'grid'
  }];
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], {
    controls: toolbarControls
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('RSS settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
    label: Object(external_this_wp_i18n_["__"])('Number of items'),
    value: itemsToShow,
    onChange: function onChange(value) {
      return setAttributes({
        itemsToShow: value
      });
    },
    min: DEFAULT_MIN_ITEMS,
    max: DEFAULT_MAX_ITEMS,
    required: true
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Display author'),
    checked: displayAuthor,
    onChange: toggleAttribute('displayAuthor')
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Display date'),
    checked: displayDate,
    onChange: toggleAttribute('displayDate')
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Display excerpt'),
    checked: displayExcerpt,
    onChange: toggleAttribute('displayExcerpt')
  }), displayExcerpt && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
    label: Object(external_this_wp_i18n_["__"])('Max number of words in excerpt'),
    value: excerptLength,
    onChange: function onChange(value) {
      return setAttributes({
        excerptLength: value
      });
    },
    min: 10,
    max: 100,
    required: true
  }), blockLayout === 'grid' && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
    label: Object(external_this_wp_i18n_["__"])('Columns'),
    value: columns,
    onChange: function onChange(value) {
      return setAttributes({
        columns: value
      });
    },
    min: 2,
    max: 6,
    required: true
  }))), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Disabled"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_serverSideRender_default.a, {
    block: "core/rss",
    attributes: attributes
  })));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/rss/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

var rss_metadata = {
  name: "core/rss",
  category: "widgets",
  attributes: {
    align: {
      type: "string",
      "enum": ["left", "center", "right", "wide", "full"]
    },
    className: {
      type: "string"
    },
    columns: {
      type: "number",
      "default": 2
    },
    blockLayout: {
      type: "string",
      "default": "list"
    },
    feedURL: {
      type: "string",
      "default": ""
    },
    itemsToShow: {
      type: "number",
      "default": 5
    },
    displayExcerpt: {
      type: "boolean",
      "default": false
    },
    displayAuthor: {
      type: "boolean",
      "default": false
    },
    displayDate: {
      type: "boolean",
      "default": false
    },
    excerptLength: {
      type: "number",
      "default": 55
    }
  },
  supports: {
    align: true,
    html: false
  }
};

var rss_name = rss_metadata.name;

var rss_settings = {
  title: Object(external_this_wp_i18n_["__"])('RSS'),
  description: Object(external_this_wp_i18n_["__"])('Display entries from any RSS or Atom feed.'),
  icon: library_rss,
  keywords: [Object(external_this_wp_i18n_["__"])('atom'), Object(external_this_wp_i18n_["__"])('feed')],
  example: {
    attributes: {
      feedURL: 'https://wordpress.org'
    }
  },
  edit: RSSEdit
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/search/edit.js


/**
 * WordPress dependencies
 */


function SearchEdit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var label = attributes.label,
      placeholder = attributes.placeholder,
      buttonText = attributes.buttonText;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: className
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    className: "wp-block-search__label",
    "aria-label": Object(external_this_wp_i18n_["__"])('Label text'),
    placeholder: Object(external_this_wp_i18n_["__"])('Add label…'),
    withoutInteractiveFormatting: true,
    value: label,
    onChange: function onChange(html) {
      return setAttributes({
        label: html
      });
    }
  }), Object(external_this_wp_element_["createElement"])("input", {
    className: "wp-block-search__input",
    "aria-label": Object(external_this_wp_i18n_["__"])('Optional placeholder text') // We hide the placeholder field's placeholder when there is a value. This
    // stops screen readers from reading the placeholder field's placeholder
    // which is confusing.
    ,
    placeholder: placeholder ? undefined : Object(external_this_wp_i18n_["__"])('Optional placeholder…'),
    value: placeholder,
    onChange: function onChange(event) {
      return setAttributes({
        placeholder: event.target.value
      });
    }
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    className: "wp-block-search__button",
    "aria-label": Object(external_this_wp_i18n_["__"])('Button text'),
    placeholder: Object(external_this_wp_i18n_["__"])('Add button text…'),
    withoutInteractiveFormatting: true,
    value: buttonText,
    onChange: function onChange(html) {
      return setAttributes({
        buttonText: html
      });
    }
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/search/variations.js
/**
 * WordPress dependencies
 */

var search_variations_variations = [{
  name: 'default',
  isDefault: true,
  attributes: {
    buttonText: Object(external_this_wp_i18n_["__"])('Search'),
    label: Object(external_this_wp_i18n_["__"])('Search')
  }
}];
/* harmony default export */ var search_variations = (search_variations_variations);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/search/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

var search_metadata = {
  name: "core/search",
  category: "widgets",
  attributes: {
    align: {
      type: "string",
      "enum": ["left", "center", "right", "wide", "full"]
    },
    className: {
      type: "string"
    },
    label: {
      type: "string"
    },
    placeholder: {
      type: "string",
      "default": ""
    },
    buttonText: {
      type: "string"
    }
  },
  supports: {
    align: true,
    html: false
  }
};


var search_name = search_metadata.name;

var search_settings = {
  title: Object(external_this_wp_i18n_["__"])('Search'),
  description: Object(external_this_wp_i18n_["__"])('Help visitors find your content.'),
  icon: search["a" /* default */],
  keywords: [Object(external_this_wp_i18n_["__"])('find')],
  example: {},
  variations: search_variations,
  edit: SearchEdit
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/group.js


/**
 * WordPress dependencies
 */

var group = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z"
}));
/* harmony default export */ var library_group = (group);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/group/deprecated.js



function group_deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function group_deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { group_deprecated_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { group_deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



var deprecated_migrateAttributes = function migrateAttributes(attributes) {
  if (!attributes.tagName) {
    attributes = group_deprecated_objectSpread({}, attributes, {
      tagName: 'div'
    });
  }

  if (!attributes.customTextColor && !attributes.customBackgroundColor) {
    return attributes;
  }

  var style = {
    color: {}
  };

  if (attributes.customTextColor) {
    style.color.text = attributes.customTextColor;
  }

  if (attributes.customBackgroundColor) {
    style.color.background = attributes.customBackgroundColor;
  }

  return group_deprecated_objectSpread({}, Object(external_this_lodash_["omit"])(attributes, ['customTextColor', 'customBackgroundColor']), {
    style: style
  });
};

var group_deprecated_deprecated = [// Version of the block without global styles support
{
  attributes: {
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    }
  },
  supports: {
    align: ['wide', 'full'],
    anchor: true,
    html: false
  },
  migrate: deprecated_migrateAttributes,
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor;
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var className = classnames_default()(backgroundClass, textClass, {
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor
    });
    var styles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return Object(external_this_wp_element_["createElement"])("div", {
      className: className,
      style: styles
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "wp-block-group__inner-container"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null)));
  }
}, // Version of the group block with a bug that made text color class not applied.
{
  attributes: {
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    }
  },
  migrate: deprecated_migrateAttributes,
  supports: {
    align: ['wide', 'full'],
    anchor: true,
    html: false
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor;
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var className = classnames_default()(backgroundClass, {
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor
    });
    var styles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return Object(external_this_wp_element_["createElement"])("div", {
      className: className,
      style: styles
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "wp-block-group__inner-container"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null)));
  }
}, // v1 of group block. Deprecated to add an inner-container div around `InnerBlocks.Content`.
{
  attributes: {
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    }
  },
  supports: {
    align: ['wide', 'full'],
    anchor: true,
    html: false
  },
  migrate: deprecated_migrateAttributes,
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor;
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var className = classnames_default()(backgroundClass, {
      'has-background': backgroundColor || customBackgroundColor
    });
    var styles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor
    };
    return Object(external_this_wp_element_["createElement"])("div", {
      className: className,
      style: styles
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null));
  }
}];
/* harmony default export */ var group_deprecated = (group_deprecated_deprecated);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/group/edit.js


/**
 * WordPress dependencies
 */



function GroupEdit(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className,
      clientId = _ref.clientId;
  var hasInnerBlocks = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select('core/block-editor'),
        getBlock = _select.getBlock;

    var block = getBlock(clientId);
    return !!(block && block.innerBlocks.length);
  }, [clientId]);
  var BlockWrapper = external_this_wp_blockEditor_["__experimentalBlock"][attributes.tagName];
  return Object(external_this_wp_element_["createElement"])(BlockWrapper, {
    className: className
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"], {
    renderAppender: hasInnerBlocks ? undefined : function () {
      return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].ButtonBlockAppender, null);
    },
    __experimentalTagName: "div",
    __experimentalPassedProps: {
      className: 'wp-block-group__inner-container'
    }
  }));
}

/* harmony default export */ var group_edit = (GroupEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/group/save.js


/**
 * WordPress dependencies
 */

function group_save_save(_ref) {
  var attributes = _ref.attributes;
  var Tag = attributes.tagName;
  return Object(external_this_wp_element_["createElement"])(Tag, null, Object(external_this_wp_element_["createElement"])("div", {
    className: "wp-block-group__inner-container"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null)));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/group/index.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



var group_metadata = {
  name: "core/group",
  category: "design",
  attributes: {
    tagName: {
      type: "string",
      "default": "div"
    }
  },
  supports: {
    align: ["wide", "full"],
    anchor: true,
    html: false,
    lightBlockWrapper: true,
    __experimentalColor: {
      gradients: true,
      linkColor: true
    }
  }
};

var group_name = group_metadata.name;

var group_settings = {
  title: Object(external_this_wp_i18n_["__"])('Group'),
  icon: library_group,
  description: Object(external_this_wp_i18n_["__"])('A block that groups other blocks.'),
  keywords: [Object(external_this_wp_i18n_["__"])('container'), Object(external_this_wp_i18n_["__"])('wrapper'), Object(external_this_wp_i18n_["__"])('row'), Object(external_this_wp_i18n_["__"])('section')],
  example: {
    attributes: {
      style: {
        color: {
          text: '#000000',
          background: '#ffffff'
        }
      }
    },
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#cf2e2e',
        fontSize: 'large',
        content: Object(external_this_wp_i18n_["__"])('One.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#ff6900',
        fontSize: 'large',
        content: Object(external_this_wp_i18n_["__"])('Two.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#fcb900',
        fontSize: 'large',
        content: Object(external_this_wp_i18n_["__"])('Three.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#00d084',
        fontSize: 'large',
        content: Object(external_this_wp_i18n_["__"])('Four.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#0693e3',
        fontSize: 'large',
        content: Object(external_this_wp_i18n_["__"])('Five.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#9b51e0',
        fontSize: 'large',
        content: Object(external_this_wp_i18n_["__"])('Six.')
      }
    }]
  },
  transforms: {
    from: [{
      type: 'block',
      isMultiBlock: true,
      blocks: ['*'],
      __experimentalConvert: function __experimentalConvert(blocks) {
        // Avoid transforming a single `core/group` Block
        if (blocks.length === 1 && blocks[0].name === 'core/group') {
          return;
        }

        var alignments = ['wide', 'full']; // Determine the widest setting of all the blocks to be grouped

        var widestAlignment = blocks.reduce(function (accumulator, block) {
          var align = block.attributes.align;
          return alignments.indexOf(align) > alignments.indexOf(accumulator) ? align : accumulator;
        }, undefined); // Clone the Blocks to be Grouped
        // Failing to create new block references causes the original blocks
        // to be replaced in the switchToBlockType call thereby meaning they
        // are removed both from their original location and within the
        // new group block.

        var groupInnerBlocks = blocks.map(function (block) {
          return Object(external_this_wp_blocks_["createBlock"])(block.name, block.attributes, block.innerBlocks);
        });
        return Object(external_this_wp_blocks_["createBlock"])('core/group', {
          align: widestAlignment
        }, groupInnerBlocks);
      }
    }]
  },
  edit: group_edit,
  save: group_save_save,
  deprecated: group_deprecated
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/separator.js


/**
 * WordPress dependencies
 */

var separator = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M20.2 7v4H3.8V7H2.2v9h1.6v-3.5h16.4V16h1.6V7z"
}));
/* harmony default export */ var library_separator = (separator);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/separator/separator-settings.js


/**
 * WordPress dependencies
 */



var separator_settings_SeparatorSettings = function SeparatorSettings(_ref) {
  var color = _ref.color,
      setColor = _ref.setColor;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["PanelColorSettings"], {
    title: Object(external_this_wp_i18n_["__"])('Color settings'),
    colorSettings: [{
      value: color.color,
      onChange: setColor,
      label: Object(external_this_wp_i18n_["__"])('Color')
    }]
  }));
};

/* harmony default export */ var separator_settings = (separator_settings_SeparatorSettings);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/separator/edit.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function SeparatorEdit(_ref) {
  var color = _ref.color,
      setColor = _ref.setColor,
      className = _ref.className;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["HorizontalRule"], {
    className: classnames_default()(className, Object(defineProperty["a" /* default */])({
      'has-background': color.color
    }, color.class, color.class)),
    style: {
      backgroundColor: color.color,
      color: color.color
    }
  }), Object(external_this_wp_element_["createElement"])(separato