(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Slidetoggle", [], factory);
	else if(typeof exports === 'object')
		exports["Slidetoggle"] = factory();
	else
		root["Slidetoggle"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/lib/elProps.ts

var ElProps = (function () {
    function ElProps() {
    }
    ElProps.prototype.getElProps = function (el) {
        var computedValue = window.getComputedStyle(el);
        return {
            height: parseInt(computedValue.height || '0'),
            paddingTop: parseInt(computedValue.paddingTop || '0'),
            paddingBottom: parseInt(computedValue.paddingBottom || '0'),
            borderTop: parseInt(computedValue.borderTopWidth || '0'),
            borderBottom: parseInt(computedValue.borderBottomWidth || '0')
        };
    };
    ElProps.prototype.getOriginalProps = function (el) {
        this.changeElStyles(el, { border: '', padding: '', height: 'auto', visibility: 'hidden' });
        var originalProps = this.getElProps(el);
        this.changeElStyles(el, { border: '0px', padding: '0px', height: '0', visibility: 'visible' });
        return originalProps;
    };
    ElProps.prototype.changeElStyles = function (el, styles) {
        el.style.borderBottomWidth = el.style.borderTopWidth = styles.border;
        el.style.paddingBottom = el.style.paddingTop = styles.padding;
        el.style.visibility = styles.visibility;
        el.style.height = styles.height;
        el.style.display = 'block';
    };
    return ElProps;
}());

var elProps = new ElProps;

// CONCATENATED MODULE: ./src/lib/slideUp.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dtos_d__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dtos_d___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dtos_d__);


var SlideUp = (function () {
    function SlideUp() {
    }
    SlideUp.prototype.sliding = function (el, originalProps, timingFn) {
        var _this = this;
        requestAnimationFrame(function (timestamp) { return _this.rafFn(timestamp, el, originalProps, timingFn); });
    };
    SlideUp.prototype.clone = function () {
        return new SlideUp;
    };
    SlideUp.prototype.rafFn = function (timestamp, el, originalProps, timingFn) {
        var _this = this;
        if (!this.startTime)
            this.initFn(timestamp);
        var runTime = timestamp - this.startTime;
        var progress = Math.max(1 - (runTime / timingFn), 0);
        el.style.height = (originalProps.height * progress).toFixed(2) + 'px';
        if (originalProps.paddingTop)
            el.style.paddingTop = (originalProps.paddingTop * progress).toFixed(2) + 'px';
        if (originalProps.paddingBottom)
            el.style.paddingBottom = (originalProps.paddingBottom * progress).toFixed(2) + 'px';
        if (runTime < timingFn)
            requestAnimationFrame(function (timestamp) { return _this.rafFn(timestamp, el, originalProps, timingFn); });
        else
            this.animationDone(el, originalProps);
    };
    SlideUp.prototype.initFn = function (timestamp) {
        this.startTime = timestamp;
    };
    SlideUp.prototype.animationDone = function (el, originalProps) {
        el.style.display = 'none';
        el.style.borderTopWidth = originalProps.borderTop + 'px';
        el.style.borderBottomWidth = originalProps.borderBottom + 'px';
        this.startTime = 0;
        el.setAttribute(__WEBPACK_IMPORTED_MODULE_0__dtos_d__["attrData"], 'false');
    };
    return SlideUp;
}());

var slideUp = new SlideUp;

// CONCATENATED MODULE: ./src/lib/slideDown.ts
/* harmony import */ var slideDown___WEBPACK_IMPORTED_MODULE_0__dtos_d__ = __webpack_require__(0);
/* harmony import */ var slideDown___WEBPACK_IMPORTED_MODULE_0__dtos_d___default = __webpack_require__.n(slideDown___WEBPACK_IMPORTED_MODULE_0__dtos_d__);


var SlideDown = (function () {
    function SlideDown() {
    }
    SlideDown.prototype.sliding = function (el, originalProps, timingFn) {
        var _this = this;
        requestAnimationFrame(function (timestamp) { return _this.rafFn(timestamp, el, originalProps, timingFn); });
    };
    SlideDown.prototype.clone = function () {
        return new SlideDown;
    };
    SlideDown.prototype.rafFn = function (timestamp, el, originalProps, timingFn) {
        var _this = this;
        if (!this.startTime)
            this.initFn(timestamp, originalProps, el);
        var runTime = timestamp - this.startTime;
        var progress = Math.min(runTime / timingFn, 1);
        el.style.height = (originalProps.height * progress).toFixed(2) + 'px';
        if (originalProps.paddingTop)
            el.style.paddingTop = (originalProps.paddingTop * progress).toFixed(2) + 'px';
        if (originalProps.paddingBottom)
            el.style.paddingBottom = (originalProps.paddingBottom * progress).toFixed(2) + 'px';
        if (runTime < timingFn)
            requestAnimationFrame(function (timestamp) { return _this.rafFn(timestamp, el, originalProps, timingFn); });
        else
            this.animationDone(el);
    };
    SlideDown.prototype.animationDone = function (el) {
        this.startTime = 0;
        el.setAttribute(slideDown___WEBPACK_IMPORTED_MODULE_0__dtos_d__["attrData"], 'false');
    };
    SlideDown.prototype.initFn = function (timestamp, originalProps, el) {
        this.startTime = timestamp;
        el.style.borderTopWidth = originalProps.borderTop + 'px';
        el.style.borderBottomWidth = originalProps.borderBottom + 'px';
    };
    return SlideDown;
}());

var slideDown = new SlideDown;

// CONCATENATED MODULE: ./src/lib/builder.ts



var builder_Builder = (function () {
    function Builder() {
        this.prototypeMap = {};
        this.prototypeMap.up = slideUp;
        this.prototypeMap.down = slideDown;
    }
    Builder.prototype.createPrototype = function (key) {
        return this.prototypeMap[key].clone();
    };
    return Builder;
}());

var builder = new builder_Builder;

// CONCATENATED MODULE: ./src/lib/slideToggle.ts
/* harmony import */ var slideToggle___WEBPACK_IMPORTED_MODULE_0__dtos_d__ = __webpack_require__(0);
/* harmony import */ var slideToggle___WEBPACK_IMPORTED_MODULE_0__dtos_d___default = __webpack_require__.n(slideToggle___WEBPACK_IMPORTED_MODULE_0__dtos_d__);




var slideToggle_SlideToggle = (function () {
    function SlideToggle() {
    }
    SlideToggle.prototype.slideToggle = function (el, timingFn) {
        if (timingFn === void 0) { timingFn = 500; }
        var currentEl = this.getElement(el);
        if (this.isElementSliding(currentEl))
            return;
        this.setElRequiredDataAndChangeAttr(currentEl);
        var props = elProps.getElProps(currentEl);
        this.getPrototypOfStrategy(props.height).sliding(currentEl, props.height ? props : elProps.getOriginalProps(currentEl), timingFn);
    };
    SlideToggle.prototype.getElement = function (elData) {
        return typeof elData === 'string' ? document.querySelector(elData) : elData;
    };
    SlideToggle.prototype.getPrototypOfStrategy = function (height) {
        return builder.createPrototype(height ? 'up' : 'down');
    };
    SlideToggle.prototype.isElementSliding = function (el) {
        return el.hasAttribute(slideToggle___WEBPACK_IMPORTED_MODULE_0__dtos_d__["attrData"]) && el.getAttribute(slideToggle___WEBPACK_IMPORTED_MODULE_0__dtos_d__["attrData"]) === 'true';
    };
    SlideToggle.prototype.setElRequiredDataAndChangeAttr = function (el) {
        el.style.overflowY = 'hidden';
        var currentAttrState = el.getAttribute(slideToggle___WEBPACK_IMPORTED_MODULE_0__dtos_d__["attrData"]) || '';
        if (currentAttrState === 'true')
            el.setAttribute(slideToggle___WEBPACK_IMPORTED_MODULE_0__dtos_d__["attrData"], 'false');
        else
            el.setAttribute(slideToggle___WEBPACK_IMPORTED_MODULE_0__dtos_d__["attrData"], 'true');
    };
    return SlideToggle;
}());

var slideToggle = new slideToggle_SlideToggle;

// CONCATENATED MODULE: ./src/index.ts
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "slideToggle", function() { return slideToggle; });




/***/ })
/******/ ]);
});
//# sourceMappingURL=slidetoggle.js.map