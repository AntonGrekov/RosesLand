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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _scrollBySections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollBySections */ \"./src/scripts/scrollBySections.js\");\n\r\n\r\nvar mapThemeSilver = [\r\n    {\r\n        \"elementType\": \"geometry\",\r\n        \"stylers\": [\r\n            {\r\n                \"color\": \"#f5f5f5\"\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"elementType\": \"labels.icon\",\r\n        \"stylers\": [\r\n            {\r\n                \"visibility\": \"off\"\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"elementType\": \"labels.text.fill\",\r\n        \"stylers\": [\r\n            {\r\n                \"color\": \"#616161\"\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"elementType\": \"labels.text.stroke\",\r\n        \"stylers\": [\r\n            {\r\n                \"color\": \"#f5f5f5\"\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"featureType\": \"administrative.land_parcel\",\r\n        \"elementType\": \"labels.text.fill\",\r\n        \"stylers\": [\r\n            {\r\n                \"color\": \"#bdbdbd\"\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"featureType\": \"poi\",\r\n        \"elementType\": \"geometry\",\r\n        \"stylers\": [\r\n            {\r\n                \"color\": \"#eeeeee\"\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"featureType\": \"poi\",\r\n        \"elementType\": \"labels.text.fill\",\r\n        \"stylers\": [\r\n            {\r\n                \"color\": \"#757575\"\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"featureType\": \"poi.park\",\r\n        \"elementType\": \"geometry\",\r\n        \"stylers\": [\r\n            {\r\n                \"color\": \"#e5e5e5\"\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"featureType\": \"poi.park\",\r\n        \"elementType\": \"labels.text.fill\",\r\n        \"stylers\": [\r\n            {\r\n                \"color\": \"#9e9e9e\"\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"featureType\": \"road\",\r\n        \"elementType\": \"geometry\",\r\n        \"stylers\": [\r\n            {\r\n                \"color\": \"#ffffff\"\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"featureType\": \"road.arterial\",\r\n        \"elementType\": \"labels.text.fill\",\r\n        \"stylers\": [\r\n            {\r\n                \"color\": \"#757575\"\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"featureType\": \"road.highway\",\r\n        \"elementType\": \"geometry\",\r\n        \"stylers\": [\r\n            {\r\n                \"color\": \"#dadada\"\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"featureType\": \"road.highway\",\r\n        \"elementType\": \"labels.text.fill\",\r\n        \"stylers\": [\r\n            {\r\n                \"color\": \"#616161\"\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"featureType\": \"road.local\",\r\n        \"elementType\": \"labels.text.fill\",\r\n        \"stylers\": [\r\n            {\r\n                \"color\": \"#9e9e9e\"\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"featureType\": \"transit.line\",\r\n        \"elementType\": \"geometry\",\r\n        \"stylers\": [\r\n            {\r\n                \"color\": \"#e5e5e5\"\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"featureType\": \"transit.station\",\r\n        \"elementType\": \"geometry\",\r\n        \"stylers\": [\r\n            {\r\n                \"color\": \"#eeeeee\"\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"featureType\": \"water\",\r\n        \"elementType\": \"geometry\",\r\n        \"stylers\": [\r\n            {\r\n                \"color\": \"#c9c9c9\"\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"featureType\": \"water\",\r\n        \"elementType\": \"labels.text.fill\",\r\n        \"stylers\": [\r\n            {\r\n                \"color\": \"#9e9e9e\"\r\n            }\r\n        ]\r\n    }\r\n];\r\n\r\nfunction initMap() {\r\n    var coords = {lat: 50.596174, lng: 36.583376};\r\n\r\n    var map = new google.maps.Map(document.getElementById('map'), {\r\n        zoom: 16,\r\n        center: coords,\r\n        styles: mapThemeSilver,\r\n    });\r\n\r\n    var marker = new google.maps.Marker({\r\n        position: coords,\r\n        map: map,\r\n        title: 'Rosses Land',\r\n        icon: 'i/bitmapped/logo-small.png',\r\n    });\r\n};\r\n\r\n$(function() {\r\n    $('.js-tab').on('click', function(event) {\r\n        event.preventDefault();\r\n\r\n        var $target = $(event.target);\r\n        var $currentTarget = $(event.currentTarget);\r\n        var id = $target.attr('href');\r\n\r\n        if (id && !$target.parent('.tab__nav-item').hasClass('tab__nav-item_active')) {\r\n            $currentTarget.find('.tab__nav-item').removeClass('tab__nav-item_active');\r\n            $currentTarget.find('.tab__content-block').removeClass('tab__content-block_active');\r\n\r\n            $target.parent('.tab__nav-item').addClass('tab__nav-item_active');\r\n            $(id).addClass('tab__content-block_active');\r\n        }\r\n    });\r\n});\r\n\r\n$(function() {\r\n    $('.js-accordeon').on('click', function(event) {\r\n        event.preventDefault();\r\n\r\n        var $currentTarget = $(event.currentTarget);\r\n\r\n        if ($currentTarget.hasClass('accordeon_active')) {\r\n            $currentTarget.removeClass('accordeon_active');\r\n            $currentTarget.find('.accordeon__body').slideUp();\r\n        } else {\r\n            $currentTarget.addClass('accordeon_active');\r\n            $currentTarget.find('.accordeon__body').slideDown();\r\n        }\r\n    });\r\n});\r\n\r\n$(function() {\r\n    $('.js-count-top').on('click', function(event) {\r\n        var $formCountField = $('.form-count').find('.form-count__field')\r\n        var value = parseInt($formCountField.val());\r\n        var newValue = value + 1;\r\n\r\n        $formCountField.val(newValue);\r\n    });\r\n\r\n    $('.js-count-bottom').on('click', function(event) {\r\n        var $formCountField = $('.form-count').find('.form-count__field')\r\n        var value = parseInt($formCountField.val());\r\n\r\n        if (value === 1) return false;\r\n\r\n        var newValue = value - 1;\r\n\r\n        $formCountField.val(newValue);\r\n    });\r\n});\r\n\r\n$(function() {\r\n    var mainSlider = new Swiper('.js-slider-main', {\r\n        navigation: {\r\n            nextEl: '.slider_theme_main .slider__button_next',\r\n            prevEl: '.slider_theme_main .slider__button_prev',\r\n            disabledClass: 'slider__button_disabled'\r\n        },\r\n        pagination: {\r\n            el: '.slider_theme_main .slider__pagination',\r\n            clickable: true,\r\n            bulletClass: 'slider__pagination-item',\r\n            bulletActiveClass: 'slider__pagination-item_active',\r\n            renderBullet: function (index, className) {\r\n                var number = index + 1;\r\n\r\n                if (number < 10) {\r\n                    number = '0' + number;\r\n                }\r\n\r\n                return '<span class=\"' + className + '\">' + number + '</span>';\r\n            },\r\n        },\r\n    });\r\n});\r\n\r\n$(function() {\r\n    $('.js-slider-more').on('click', function () {\r\n       $('html, body')\r\n           .animate({\r\n               scrollTop: $(window).height() - $('.js-header').outerHeight()\r\n           }, 600);\r\n    });\r\n\r\n    Object(_scrollBySections__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($('.js-slider-main'));\r\n});\r\n\r\n\r\n\r\n$(function() {\r\n    $('.js-nav-toggle').on('click', function () {\r\n       if ($(this).hasClass('nav-toggle_active')) {\r\n           $(this).removeClass('nav-toggle_active');\r\n           $('.js-main-nav').removeClass('main-nav_show');\r\n       }else {\r\n           $(this).addClass('nav-toggle_active');\r\n           $('.js-main-nav').addClass('main-nav_show');\r\n       }\r\n    });\r\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './dist/scripts/jquery.min.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))))\n\n//# sourceURL=webpack:///./src/scripts/app.js?");

/***/ }),

/***/ "./src/scripts/scrollBySections.js":
/*!*****************************************!*\
  !*** ./src/scripts/scrollBySections.js ***!
  \*****************************************/
/*! exports provided: scrollBySections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollBySections\", function() { return scrollBySections; });\n\r\nfunction scrollBySections (sectionToScroll, offset) {\r\n   var animating = false,\r\n      $target = $('html, body'),\r\n      tempScrollTop = 0,\r\n      fullScrollTop = 0,\r\n      currentScrollTop = 0,\r\n      xoffset = 0,\r\n      inSection = false,\r\n      topEdge = sectionToScroll.offset().top,\r\n      botEdge = topEdge + sectionToScroll.height();\r\n\r\n   if (offset) {\r\n      if (offset instanceof jQuery)\r\n         xoffset = offset.height();\r\n      else if (offset.match(/^[0-9]{1,2}%$/)) {\r\n         xoffset = $(window).height() / 100 * +offset.replace('%', '');\r\n      }\r\n      else if (offset.match(/^[0-9]+px$/)) {\r\n         xoffset = +offset.replace('px', '');\r\n      }\r\n      else console.log('error in offset input');\r\n   }\r\n\r\n   $(document).scroll(function (e) {\r\n      if (animating) {\r\n         return;\r\n      }\r\n\r\n      fullScrollTop = $(document).scrollTop() + $(window).height();\r\n      currentScrollTop = $(document).scrollTop();\r\n\r\n      if (fullScrollTop > topEdge && currentScrollTop < botEdge - xoffset\r\n         || tempScrollTop > currentScrollTop && currentScrollTop < botEdge - xoffset) {\r\n\r\n         animating = true;\r\n         $target.stop(true).animate(\r\n            { scrollTop: sectionToScroll.offset().top }, 1000, function () {\r\n               inSection = true;\r\n               animating = false;\r\n               tempScrollTop = $(document).scrollTop();\r\n               currentScrollTop = $(document).scrollTop();\r\n            });\r\n      };\r\n\r\n      if (tempScrollTop < currentScrollTop && inSection) {\r\n         console.log('moving bottom in section');\r\n         animating = true;\r\n         $target.stop(true).animate(\r\n            { scrollTop: $(document).scrollTop() + $(window).height() - xoffset }\r\n            , 1000, function () {\r\n               animating = false;\r\n               inSection = false;\r\n               tempScrollTop = $(document).scrollTop();\r\n            });\r\n      } else\r\n         if (tempScrollTop > currentScrollTop && inSection) {\r\n            console.log('moving up in section');\r\n            animating = true;\r\n            $target.stop(true).animate({ scrollTop: $(window).scrollTop() - $(window).height() - 150 }, 1000, function () {\r\n               animating = false;\r\n               inSection = false;\r\n               tempScrollTop = $(document).scrollTop();\r\n            });\r\n         }\r\n   });\r\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './dist/scripts/jquery.min.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './dist/scripts/jquery.min.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))))\n\n//# sourceURL=webpack:///./src/scripts/scrollBySections.js?");

/***/ })

/******/ });