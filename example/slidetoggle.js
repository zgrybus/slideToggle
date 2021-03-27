(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["slidetoggle"] = factory();
	else
		root["slidetoggle"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "slideToggle": () => (/* reexport */ slideToggle)
});

;// CONCATENATED MODULE: ./src/lib/dtos.ts
var attrData = 'data-slidetoggle';

;// CONCATENATED MODULE: ./src/lib/slideDown.ts

var SlideDown = (function () {
    function SlideDown() {
    }
    SlideDown.prototype.sliding = function (el, originalProps, timingFn) {
        var _this = this;
        requestAnimationFrame(function (timestamp) {
            return _this.rafFn(timestamp, el, originalProps, timingFn);
        });
    };
    SlideDown.prototype.clone = function () {
        return new SlideDown();
    };
    SlideDown.prototype.rafFn = function (timestamp, el, originalProps, timingFn) {
        var _this = this;
        if (!this.startTime)
            this.initFn(timestamp, originalProps, el);
        var runTime = timestamp - this.startTime;
        var progress = Math.min(runTime / timingFn, 1);
        el.style.height = (originalProps.height * progress).toFixed(2) + 'px';
        if (originalProps.paddingTop)
            el.style.paddingTop =
                (originalProps.paddingTop * progress).toFixed(2) + 'px';
        if (originalProps.paddingBottom)
            el.style.paddingBottom =
                (originalProps.paddingBottom * progress).toFixed(2) + 'px';
        if (runTime < timingFn)
            requestAnimationFrame(function (timestamp) {
                return _this.rafFn(timestamp, el, originalProps, timingFn);
            });
        else
            this.animationDone(el);
    };
    SlideDown.prototype.animationDone = function (el) {
        this.startTime = 0;
        el.setAttribute(attrData, 'false');
    };
    SlideDown.prototype.initFn = function (timestamp, originalProps, el) {
        this.startTime = timestamp;
        el.style.borderTopWidth = originalProps.borderTop + 'px';
        el.style.borderBottomWidth = originalProps.borderBottom + 'px';
    };
    return SlideDown;
}());

var slideDown = new SlideDown();

;// CONCATENATED MODULE: ./src/lib/slideUp.ts

var SlideUp = (function () {
    function SlideUp() {
    }
    SlideUp.prototype.sliding = function (el, originalProps, timingFn) {
        var _this = this;
        requestAnimationFrame(function (timestamp) {
            return _this.rafFn(timestamp, el, originalProps, timingFn);
        });
    };
    SlideUp.prototype.clone = function () {
        return new SlideUp();
    };
    SlideUp.prototype.rafFn = function (timestamp, el, originalProps, timingFn) {
        var _this = this;
        if (!this.startTime)
            this.initFn(timestamp);
        var runTime = timestamp - this.startTime;
        var progress = Math.max(1 - runTime / timingFn, 0);
        el.style.height = (originalProps.height * progress).toFixed(2) + 'px';
        if (originalProps.paddingTop)
            el.style.paddingTop =
                (originalProps.paddingTop * progress).toFixed(2) + 'px';
        if (originalProps.paddingBottom)
            el.style.paddingBottom =
                (originalProps.paddingBottom * progress).toFixed(2) + 'px';
        if (runTime < timingFn)
            requestAnimationFrame(function (timestamp) {
                return _this.rafFn(timestamp, el, originalProps, timingFn);
            });
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
        el.setAttribute(attrData, 'false');
    };
    return SlideUp;
}());

var slideUp = new SlideUp();

;// CONCATENATED MODULE: ./src/lib/builder.ts


var Builder = (function () {
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

var builder = new Builder();

;// CONCATENATED MODULE: ./src/lib/elProps.ts
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
            borderBottom: parseInt(computedValue.borderBottomWidth || '0'),
        };
    };
    ElProps.prototype.getOriginalProps = function (el) {
        this.changeElStyles(el, {
            border: '',
            padding: '',
            height: 'auto',
            visibility: 'hidden',
        });
        var originalProps = this.getElProps(el);
        this.changeElStyles(el, {
            border: '0px',
            padding: '0px',
            height: '0',
            visibility: 'visible',
        });
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

var elProps = new ElProps();

;// CONCATENATED MODULE: ./src/lib/slideToggle.ts



var SlideToggle = (function () {
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
        return typeof elData === 'string'
            ? document.querySelector(elData)
            : elData;
    };
    SlideToggle.prototype.getPrototypOfStrategy = function (height) {
        return builder.createPrototype(height ? 'up' : 'down');
    };
    SlideToggle.prototype.isElementSliding = function (el) {
        return el.hasAttribute(attrData) && el.getAttribute(attrData) === 'true';
    };
    SlideToggle.prototype.setElRequiredDataAndChangeAttr = function (el) {
        el.style.overflowY = 'hidden';
        var currentAttrState = el.getAttribute(attrData) || '';
        if (currentAttrState === 'true')
            el.setAttribute(attrData, 'false');
        else
            el.setAttribute(attrData, 'true');
    };
    return SlideToggle;
}());

var slideToggle = new SlideToggle();

;// CONCATENATED MODULE: ./src/index.ts


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=slidetoggle.js.map