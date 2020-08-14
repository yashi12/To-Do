/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"appModule": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + {"0":"7a79efcdb6cbb6a60b7c"}[chunkId] + ".bundle.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/app.module.js","vendors~appModule"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/mainPage.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/mainPage.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".strike{\r\n    text-decoration: line-through;\r\n}\r\n.filterClass{\r\n    color: #5C6BC0;\r\n    margin-right: 3%;\r\n}\r\n.midRightMargin{\r\n    margin-right: 3%;\r\n}\r\n.temperatureClass{\r\n    color: #616161;\r\n    /*color: #0277BD;*/\r\n}\r\n.smallRightMargin{\r\n    margin-right: 3%;\r\n}\r\n.marginTopClass{\r\n    margin-top: 2%;\r\n}\r\n.req {\r\n    color: darkred;\r\n}\r\n.overdue{\r\n    margin-left: 10%;\r\n    font-size: medium;\r\n}\r\n.dueDate{\r\n    font-size: medium;\r\n}\r\n.task{\r\n    font-size: large;\r\n    margin-right: 3%;\r\n    margin-left: 1%;\r\n}", "",{"version":3,"sources":["mainPage.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;AACjC;AACA;IACI,cAAc;IACd,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,cAAc;IACd,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,cAAc;AAClB;AACA;IACI,cAAc;AAClB;AACA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;AACnB","file":"mainPage.css","sourcesContent":[".strike{\r\n    text-decoration: line-through;\r\n}\r\n.filterClass{\r\n    color: #5C6BC0;\r\n    margin-right: 3%;\r\n}\r\n.midRightMargin{\r\n    margin-right: 3%;\r\n}\r\n.temperatureClass{\r\n    color: #616161;\r\n    /*color: #0277BD;*/\r\n}\r\n.smallRightMargin{\r\n    margin-right: 3%;\r\n}\r\n.marginTopClass{\r\n    margin-top: 2%;\r\n}\r\n.req {\r\n    color: darkred;\r\n}\r\n.overdue{\r\n    margin-left: 10%;\r\n    font-size: medium;\r\n}\r\n.dueDate{\r\n    font-size: medium;\r\n}\r\n.task{\r\n    font-size: large;\r\n    margin-right: 3%;\r\n    margin-left: 1%;\r\n}"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/app.config.js":
/*!***************************!*\
  !*** ./src/app.config.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function appConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '',
            template: '<ui-view/>',
            abstract: true
        });
    console.log("end");
    $urlRouterProvider.otherwise('');
}

/* harmony default export */ __webpack_exports__["default"] = (appConfig);

/***/ }),

/***/ "./src/app.controller.js":
/*!*******************************!*\
  !*** ./src/app.controller.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

console.log("controller");
// AppController.$inject = [];
function AppController() {
    let vm = this;
    // vm.getWeather = getWeather;
    getWeather();

    function getWeather() {
        console.log("weather");
        fetch('http://api.openweathermap.org/data/2.5/weather?q=delhi&appid=6c593e7606df5c875f49e434e924aa32')
            .then(function (response) {
                return response.json();
            }).then(function (result) {
            console.log("weathrr",result.main.temp);
        }).catch(function (error) {
            console.log(error);
        });
    }
}

/* harmony default export */ __webpack_exports__["default"] = (AppController);

/***/ }),

/***/ "./src/app.module.js":
/*!***************************!*\
  !*** ./src/app.module.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery/dist/jquery.min.js */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min.js */ "./node_modules/bootstrap/dist/js/bootstrap.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min.js */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var bootstrap_js_src_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/js/src/tooltip.js */ "./node_modules/bootstrap/js/src/tooltip.js");
/* harmony import */ var util_util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util/util.js */ "./node_modules/util/util.js");
/* harmony import */ var util_util_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util_util_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mainPage_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mainPage.css */ "./src/mainPage.css");
/* harmony import */ var _mainPage_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mainPage_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _uirouter_angularjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @uirouter/angularjs */ "./node_modules/@uirouter/angularjs/lib-esm/index.js");
/* harmony import */ var _app_config_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.config.js */ "./src/app.config.js");
/* harmony import */ var _tasks_task_module_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tasks/task.module.js */ "./src/tasks/task.module.js");
/* harmony import */ var _app_controller_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.controller.js */ "./src/app.controller.js");









// import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import 'font-awesome/css/font-awesome.min.css';
// require('font-awesome/css/font-awesome.min.css');
// import '@fortawesome/fontawesome-free/css/all.css';
// @import '~@fortawesome/fontawesome-free/css/all.css';
__webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");

// import './frontend.packages.js';








angular__WEBPACK_IMPORTED_MODULE_9___default.a
    .module('app', [_uirouter_angularjs__WEBPACK_IMPORTED_MODULE_10__["default"], 'tasks'])
    .config(_app_config_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
    // .controller('AppController', AppController);

/***/ }),

/***/ "./src/mainPage.css":
/*!**************************!*\
  !*** ./src/mainPage.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./mainPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/mainPage.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/tasks/operations/addTask.tmpl.html":
/*!************************************************!*\
  !*** ./src/tasks/operations/addTask.tmpl.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"containter formMainBody\">\r\n    <div class=\"jumbotron\">\r\n        <h1 class=\"display-4\">Add your task!!</h1>\r\n    </div>\r\n    <form novalidate name=\"taskForm\" class=\"text-center\" ng-model=\"vm.taskForm\">\r\n\r\n<!--        <div class=\"alert alert-danger\" role=\"alert\" ng-show=\"taskForm.$dirty && !taskForm.$valid\" >-->\r\n<!--            Please enter valid item!-->\r\n<!--        </div>-->\r\n        <div class=\"form-group\">\r\n            <div ng-show=\"taskForm.item.$touched || taskForm.$submitted\">\r\n                <div ng-show=\"taskForm.item.$error.required\" class=\"alert alert-danger\" role=\"alert\">\r\n                    <span class=\"req\" >Task is required</span>\r\n                </div>\r\n            </div>\r\n            <input name=\"item\" type=\"text\" class=\"form-control\" placeholder=\"Add a task\" required\r\n                   ng-model=\"vm.addTaskName\" >\r\n            <input type=\"datetime-local\" class=\"form-control\" ng-model=\"vm.addDueDate\">\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-success float-left\"\r\n                ng-click=\"vm.addTaskToList(); \" ui-sref=\"home.tasks\">\r\n<!--                ng-click=\"taskForm.$valid?vm.addTaskToList():console.log('invalid'); \" ui-sref=\"home.tasks\">-->\r\n<!--                ng-click=\"taskForm.$valid?vm.addTaskToList():console.log('invalid');vm.resetForm(); \" ui-sref=\"home.tasks\">-->\r\n            <i class=\"fa fa-check-square \" aria-hidden=\"true\"></i>\r\n            <span>SAVE TASK</span>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-secondary float-right\" ui-sref=\"home.tasks\">\r\n            <i class=\"far fa-window-close\"></i>\r\n            <span>CANCEL</span>\r\n        </button>\r\n        <!--        <a href=\"#!/\" class=\"form-control btn-secondary\">-->\r\n        <!--            <i class=\"fa fa-trash\" aria-hidden=\"true\">Cancel</i>-->\r\n        <!--        </a>-->\r\n    </form>\r\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/tasks/operations/edit.controller.js":
/*!*************************************************!*\
  !*** ./src/tasks/operations/edit.controller.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task.service.js */ "./src/tasks/task.service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


EditController.$inject = ['$stateParams', 'tasksService'];

function EditController($stateParams, tasksService) {
    let vm = this;
    vm.data = tasksService.newSetTask.taskName;
    // vm.dueDate = moment(new Date(tasksService.newSetTask.dueDate)).format("YYYY-MM-DDTkk:mm")
    vm.dueDate = new Date(tasksService.newSetTask.dueDate);
    vm.category = tasksService.newSetTask.category;
    // vm.dueDate.format('yyyy-MM-ddThh:mm');
    vm.editTask = editTask;


    function editTask() {
        tasksService.newSetTask.date = new Date();
        tasksService.newSetTask.taskName = vm.data;
        // tasksService.newSetTask.dueDate = new Date(vm.dueDate);
        tasksService.newSetTask.category = vm.category;
        tasksService.newSetTask.dueDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(vm.dueDate).format('YYYY-MM-DDTkk:mm');
        tasksService.editTask(tasksService.newSetTask);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (EditController);

/***/ }),

/***/ "./src/tasks/operations/editTask.tmpl.html":
/*!*************************************************!*\
  !*** ./src/tasks/operations/editTask.tmpl.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"containter formMainBody\">\r\n    <div class=\"jumbotron\">\r\n        <h1 class=\"display-4\">Edit your task!!</h1>\r\n        <!--        {{vm.data}}-->\r\n        <!--        {{vm.dueDate}}-->\r\n    </div>\r\n    <form name=\"taskForm\" class=\"text-center\">\r\n\r\n        <div class=\"alert alert-danger\" role=\"alert\" ng-show=\"taskForm.$dirty && !taskForm.$valid\">\r\n            Please enter valid item!\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input name=\"item\" type=\"text\" class=\"form-control\" placeholder=\"Edit task\" required ng-model=\"vm.data\">\r\n            <input type=\"number\" class=\"form-control\" min=\"0\" max=\"10\" placeholder=\"Importance (1-10)\"\r\n                   ng-model=\"vm.category\" value=\"{{vm.category}}\">\r\n            <input type=\"datetime-local\" class=\"form-control\" ng-model=\"vm.dueDate\"\r\n                   value={{vm.dueDate|date:'yyyy-MM-ddThh:mm'}}>\r\n\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-success float-left\" ui-sref=\"home.tasks\"\r\n                ng-click=\"taskForm.$valid?vm.editTask():console.log('invalid');\" >\r\n            <i class=\"fa fa-check-square \" aria-hidden=\"true\"></i>\r\n            <span>SAVE TASK</span>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-secondary float-right\" ui-sref=\"home.tasks\">\r\n            <i class=\"far fa-window-close\"></i>\r\n            <span>CANCEL</span>\r\n        </button>\r\n        <!--        <a href=\"#!/\" class=\"form-control btn-secondary\">-->\r\n        <!--            <i class=\"fa fa-trash\" aria-hidden=\"true\">Cancel</i>-->\r\n        <!--        </a>-->\r\n    </form>\r\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/tasks/task.config.js":
/*!**********************************!*\
  !*** ./src/tasks/task.config.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
taskConfig.$inject = ['$stateProvider'];

function taskConfig($stateProvider) {
    $stateProvider
        .state('home.tasks', {
            url: '/',
            views: {
                'tasks@': {
                    template: __webpack_require__(/*! ./tasks.tmpl.html */ "./src/tasks/tasks.tmpl.html"),
                    controller: 'TasksController as vm',
                }
            }
        })
        .state('home.tasks.add', {
            url: 'task/add',
            views: {
                'handleTask@': {
                    template: __webpack_require__(/*! ./operations/addTask.tmpl.html */ "./src/tasks/operations/addTask.tmpl.html"),
                    controller: 'TasksController as vm',
                }
            }
        })
        .state('home.tasks.edit', {
            url: 'task/edit',
            views: {
                'handleTask@': {
                    template: __webpack_require__(/*! ./operations/editTask.tmpl.html */ "./src/tasks/operations/editTask.tmpl.html"),
                    // controller:'TasksController as vm',
                    controller: 'EditController as vm'
                }
            }
        })
}

/* harmony default export */ __webpack_exports__["default"] = (taskConfig);

console.log("task config");

/***/ }),

/***/ "./src/tasks/task.module.js":
/*!**********************************!*\
  !*** ./src/tasks/task.module.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uirouter_angularjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angularjs */ "./node_modules/@uirouter/angularjs/lib-esm/index.js");
/* harmony import */ var ngstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngstorage */ "./node_modules/ngstorage/ngStorage.js");
/* harmony import */ var ngstorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngstorage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _task_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.config.js */ "./src/tasks/task.config.js");
/* harmony import */ var _task_service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task.service.js */ "./src/tasks/task.service.js");
/* harmony import */ var _tasks_controller_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks.controller.js */ "./src/tasks/tasks.controller.js");
/* harmony import */ var _operations_edit_controller_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operations/edit.controller.js */ "./src/tasks/operations/edit.controller.js");








// import taskFilter from "./task.filter.js";

const taskModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a
    .module('tasks', [_uirouter_angularjs__WEBPACK_IMPORTED_MODULE_1__["default"], 'ngStorage'])
    .config(_task_config_js__WEBPACK_IMPORTED_MODULE_3__["default"])
    .service('tasksService', _task_service_js__WEBPACK_IMPORTED_MODULE_4__["default"])
    .controller('TasksController', _tasks_controller_js__WEBPACK_IMPORTED_MODULE_5__["default"])
    .controller('EditController', _operations_edit_controller_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
// .filter('taskFilter',taskFilter);

/* harmony default export */ __webpack_exports__["default"] = (taskModule);

console.log("task module");

/***/ }),

/***/ "./src/tasks/task.service.js":
/*!***********************************!*\
  !*** ./src/tasks/task.service.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);



tasksService.$inject = [ '$localStorage'];

function tasksService( $localStorage) {

    const tasksService = this;
    let tasksList;

    tasksService.getTasks = getTasks;
    tasksService.addTask = addTask;
    tasksService.deleteTask = deleteTask;
    tasksService.setNewTask = setNewTask;
    tasksService.editTask = editTask;
    tasksService.toggleState = toggleState;

    async function getTasks() {
        if ($localStorage.tasks) {
            tasksList = $localStorage.tasks;
        } else {
            await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ../../data/tasks.json */ "./data/tasks.json", 3))
                .then(({default: tasks}) => {
                    console.log("tasks", tasks);
                    tasksList = tasks;
                    console.log(tasksList);
                })
            return tasksList;
        }
    }

    function addTask(task) {
        if (!tasksList) {
            getTasks();
        }
        let max = underscore__WEBPACK_IMPORTED_MODULE_0__["default"].max(tasksList, function (currTask) {
            return currTask.id;
        })
        task.id = max.id + 1;
        tasksList.push(task);
        console.log(tasksList);
    }

    function deleteTask(task) {
        if (!tasksList) {
            getTasks();
        }
        let index = underscore__WEBPACK_IMPORTED_MODULE_0__["default"].findIndex(tasksList, function (currTask) {
            return currTask.id == task.id;
        });
        tasksList.splice(index, 1);
    }

    function setNewTask(task) {
        tasksService.newSetTask = task;
    }

    function editTask(task) {
        if (!tasksList) {
            getTasks();
        }
        let index = underscore__WEBPACK_IMPORTED_MODULE_0__["default"].findIndex(tasksList, function (currTask) {
            return currTask.id == task.id;
        });
        // moment(task.dueDate).format('YYYY-MM-DDTkk:mm');
        tasksList[index] = task;
    }

    function toggleState(task) {
        task.completed = !task.completed;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (tasksService);

/***/ }),

/***/ "./src/tasks/tasks.controller.js":
/*!***************************************!*\
  !*** ./src/tasks/tasks.controller.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.service.js */ "./src/tasks/task.service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);




TasksController.$inject = ['tasksService', '$localStorage'];

function TasksController(tasksService, $localStorage) {
    let vm = this;

    vm.addTaskName = "";
    vm.addDueDate = "";
    // vm.goToHome="home.tasks.add"
    vm.temperature = "";
    vm.dayType = "";
    vm.addTaskToList = addTaskToList;
    vm.deleteTask = tasksService.deleteTask;
    vm.openEditTask = openEditTask;
    vm.toggleState = toggleState;
    vm.getClass = getClass;
    vm.clearCompleted = clearCompleted;
    vm.sortDatewise = sortDatewise;
    vm.getCompleted = getCompleted;
    vm.getWeather = getWeather;
    // vm.ifValid = ifValid;
    vm.resetForm = resetForm;
    vm.getToDoList = getToDoList;
    vm.checkOverdue = checkOverdue;


    activate();

    function activate() {
        // getWeather();

        if ($localStorage.tasks) {
            vm.taskList = $localStorage.tasks;
            $localStorage.tasks = vm.taskList;
            console.log("local", $localStorage.tasks);
            // alert("2 Time Call");
        }
        else {
            vm.taskList=[];
            $localStorage.tasks = vm.taskList;

            // console.log("task service", tasksService.getTasks());
            // return tasksService.getTasks()
            //     .then(function (tasks) {
            //         console.log("tasks",tasks);
            //         vm.taskList = tasks;
            //         console.log(vm.taskList);
            //         $localStorage.tasks = vm.taskList;
            //         // alert("1");
            //     }).catch(function (reason) {
            //         alert(reason);
            //         console.log(reason);
            //     });
        }
    }

    async function getWeather() {
        console.log("weather");
        await fetch('http://api.openweathermap.org/data/2.5/weather?q=delhi&appid=6c593e7606df5c875f49e434e924aa32')
            .then(function (response) {
                return response.json();
            }).then(function (result) {
                console.log("weathrr", result.main.temp, result.weather[0].description);
                vm.temperature = result.main.temp;
                vm.dayType = result.weather[0].description;
                console.log(vm.temperature, vm.dayType);
            }).catch(function (error) {
                console.log(error);
            });
    }

    function addTaskToList() {

        console.log("add before taskList", vm.taskList);
        console.log("create");
        tasksService.newTask = {
            completed: false,
            taskName: vm.addTaskName,
            date: new Date(),
            // dueDate: moment(new Date(vm.addDueDate)).format('YYYY-MM-DDTkk:mm'),
            dueDate: moment__WEBPACK_IMPORTED_MODULE_2___default()(vm.addDueDate).format('YYYY-MM-DDTkk:mm'),
            // dueDate: vm.addDueDate,
            category: 0
        };
        tasksService.addTask(tasksService.newTask);
        console.log("add after taskList",vm.taskList);
        console.log(tasksService.newTask.dueDate);
        console.log(typeof (tasksService.newTask.dueDate));
    }

    function openEditTask(task) {
        tasksService.setNewTask(task);
        // vm.data = task;
    }

    function toggleState(task) {
        tasksService.toggleState(task);
    }

    function clearCompleted() {
        console.log("clr");
        vm.taskList = underscore__WEBPACK_IMPORTED_MODULE_1__["default"].filter(vm.taskList, function (task) {
            return !task.completed;
            // if (task.completed) {
            //     vm.deleteTask(task);
            // }
        });
        // for (let task in vm.taskList) {
        //     console.log("*", task);
        //     if (vm.taskList[task].completed) {
        //         vm.deleteTask(vm.taskList[task]);
        //     }
        // }
    };

    function getCompleted() {
        console.log("clr");
        vm.taskList = underscore__WEBPACK_IMPORTED_MODULE_1__["default"].filter(vm.taskList, function (task) {
            return task.completed;
        });
    };


    // function sortDatewise() {
    //     console.log("clr sort");
    //     vm.taskList = _.sortBy(vm.taskList, function (task) {
    //         return [!task.dueDate, task.dueDate, task.date];
    //     });
    // };
    function sortDatewise() {
        console.log("clr sort");

        vm.taskList = underscore__WEBPACK_IMPORTED_MODULE_1__["default"].filter(vm.taskList, function (task) {
            let endTime= moment__WEBPACK_IMPORTED_MODULE_2___default()(task.dueDate);
            let now = moment__WEBPACK_IMPORTED_MODULE_2___default()();
            let difference = moment__WEBPACK_IMPORTED_MODULE_2___default.a.duration(endTime.diff(now));
            if(difference >0){
                return task;
            }
        });
    };

    function getClass(category) {
        return {
            'badge-danger': category > 7,
            'badge-secondary': category > 4 && category < 8,
            'badge-warning': category < 5
        }
    }

    function resetForm() {
        vm.addTaskName="";
        // vm.goToHome = "home.tasks";
        // console.log(vm.goToHome);
    }

    function getToDoList() {
        vm.taskList = $localStorage.tasks;
    }

    function checkOverdue(task) {
        let endTime= moment__WEBPACK_IMPORTED_MODULE_2___default()(task.dueDate);
        // console.log("endtime",endTime);
        let now = moment__WEBPACK_IMPORTED_MODULE_2___default()();
        let difference = moment__WEBPACK_IMPORTED_MODULE_2___default.a.duration(endTime.diff(now));
        if(difference >0){
            return false;
        }
        else {
            return true;
        }
        console.log(vm.overdue);
        // return true;

    }
    // function ifValid() {
    //     console.log(vm.taskForm);
    //     let k = vm.taskForm.$valid ? 'home.tasks' :'-';
    //     console.log(k);
    //     return k;
    // }

    // function getClass(category) {
    //     return {
    //         'label-important': category > 7,
    //         'label-warning': category > 4 && category < 8
    //     }
    // }
}

/* harmony default export */ __webpack_exports__["default"] = (TasksController);


/***/ }),

/***/ "./src/tasks/tasks.tmpl.html":
/*!***********************************!*\
  !*** ./src/tasks/tasks.tmpl.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<a type=\"button\" class=\"btn btn-link midRightMargin\"\r\n   data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add new task\" ui-sref=\"home.tasks.add\">\r\n    <i class=\"fa fa-plus \" aria-hidden=\"true\"></i>\r\n    <span>ADD TASK</span>\r\n</a>\r\n<a type=\"button\" class=\"btn btn-link filterClass\" ng-click=\"vm.clearCompleted()\">\r\n    <i class=\"fas fa-list-ul \"></i>\r\n    <span>CLEAR COMPLETED</span>\r\n</a>\r\n<a type=\"button\" class=\"btn btn-link filterClass\" ng-click=\"vm.getCompleted()\">\r\n    <i class=\"fas fa-tasks\"></i>\r\n    <span>GET COMPLETED</span>\r\n</a>\r\n<a type=\"button\" class=\"btn btn-link filterClass\" ng-click=\"vm.getToDoList()\">\r\n    <i class=\"fas fa-tasks\"></i>\r\n    <span>ToDo list</span>\r\n</a>\r\n<button type=\"button\" class=\"btn btn-link filterClass\" ng-click=\"vm.sortDatewise()\"\r\n        data-toggle=\"tooltip\" data-placement=\"top\" title=\"Time left to complete the due-tasks\" >\r\n    <i class=\"fas fa-sort-amount-down-alt\"></i>\r\n    <span>SORT</span>\r\n</button>\r\n<!--<div class=\"card d-inline-flex shadow\" style=\"width: 10rem;\" ng-mouseover=\"vm.getWeather();\">-->\r\n<div class=\"card d-inline-flex shadow\" style=\"width: 10rem;\">\r\n    <div class=\"card-body\">\r\n        <i class=\"fas fa-cloud-sun fa-2x card-title\"></i>\r\n        <p class=\"card-text\">\r\n        <h3>{{vm.temperature}}</h3><h6>{{vm.dayType}}</h6></p>\r\n    </div>\r\n</div>\r\n<!--<a type=\"button\" class=\"btn  temperatureClass\" ng-mouseover=\"vm.getWeather();\">-->\r\n<!--    <i class=\"fas fa-cloud-sun fa-2x\"></i>-->\r\n<!--    <h3>{{vm.temperature}}</h3><h6>{{vm.dayType}}</h6>-->\r\n<!--</a>-->\r\n\r\n<!--<div ng-mouseover=\"vm.getWeather();\" >-->\r\n<!--    <a type=\"button\" class=\"btn btn-link temperatureClass\">-->\r\n<!--        <i class=\"fas fa-cloud-sun fa-3x\"></i>-->\r\n<!--    </a>-->\r\n<!--<h2>{{vm.temperature}}</h2><h5>{{vm.dayType}}</h5>-->\r\n<!--</div>-->\r\n\r\n\r\n<!--&lt;!&ndash; Material inline 1 &ndash;&gt;-->\r\n<!--&lt;!&ndash;<div class=\"form-check \">&ndash;&gt;-->\r\n<!--&lt;!&ndash;    <input type=\"checkbox\" class=\"form-check-input\" id=\"materialInline1\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;    <label class=\"form-check-label\" for=\"materialInline1\">1</label>&ndash;&gt;-->\r\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n<ul class=\"list-group list-group-flush\">\r\n        <li ng-repeat=\"task in vm.taskList | orderBy:['completed','!dueDate','dueDate'] \" class=\"list-group-item form-check\" >\r\n<!--    <li ng-repeat=\"task in vm.taskList  \" class=\"list-group-item form-check\">-->\r\n        <input class=\"form-check-input \" type=\"checkbox\" value=\"\" id=\"invalidCheck\" ng-click=\"vm.toggleState(task)\"\r\n               ng-checked=\"task.completed\">\r\n        <button type=\"button\" class=\"close pull-right\"\r\n                aria-label=\"Close\" ng-click=\"vm.deleteTask(task)\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <button class=\"btn  float-right\" ng-click=\"vm.openEditTask(task)\" ui-sref=\"home.tasks.edit\">\r\n            <i class=\"fas fa-edit\"></i></button>\r\n        <!--        <button class=\"btn  float-right\" >-->\r\n        <!--            <i class=\"fas fa-edit\"></i></button>-->\r\n        <span ng-class=\"{strike:task.completed}\" class=\"task\">\r\n                {{task.taskName | uppercase}}\r\n        </span>\r\n        <!--        <span class=\"badge badge-pill badge-primary\" >{{task.dueDate}}</span>-->\r\n        <span class=\"badge\"\r\n              ng-class=\"vm.getClass(task.category)\" ng-if=\"task.dueDate!='Invalid date' \">\r\n            <span ng-if=\"vm.checkOverdue(task);\" class=\"badge-light overdue\">Overdue  {{task.dueDate| date:'yyyy-MM-dd /hh:mm' }}</span>\r\n            <span ng-if=\"!vm.checkOverdue(task);\" class=\"dueDate\">{{task.dueDate| date:'yyyy-MM-dd /hh:mm' }}</span>\r\n            </span>\r\n<!--              ng-class=\"vm.getClass(task.category)\">{{task.dueDate| date:'yyyy-MM-dd' }}</span>-->\r\n        <!--        <span class=\"label \" ng-class=\"vm.getClass(task.category)\" >{{task.dueDate| date:'yyyy-MM-dd' }}</span>-->\r\n    </li>\r\n</ul>";
// Exports
module.exports = code;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW5QYWdlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAubW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluUGFnZS5jc3M/MTQ1NCIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3Mvb3BlcmF0aW9ucy9hZGRUYXNrLnRtcGwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3Mvb3BlcmF0aW9ucy9lZGl0LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL29wZXJhdGlvbnMvZWRpdFRhc2sudG1wbC5odG1sIiwid2VicGFjazovLy8uL3NyYy90YXNrcy90YXNrLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvdGFzay5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL3Rhc2suc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvdGFza3MuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvdGFza3MudG1wbC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEy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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBOztBQUVlLDhFQUFlLEVBQUM7Ozs7Ozs7Ozs7OztBQ2pNL0I7QUFDQSxnbkNBQWduQyxrQ0FBa0Msd0VBQXdFLHdKQUF3SixnQkFBZ0IsV0FBVyxZQUFZLDJIQUEySCwrRUFBK0UsZ0JBQWdCLFdBQVcsWUFBWSx1RUFBdUUsNktBQTZLLGdCQUFnQixXQUFXLFlBQVksNkNBQTZDLFFBQVEsMEJBQTBCLElBQUksZUFBZSxRQUFRLGtDQUFrQyxJQUFJLGVBQWUsUUFBUSxzRkFBc0YsSUFBSSxlQUFlLFFBQVEsOEVBQThFLElBQUksZUFBZSxRQUFRLGFBQWEsSUFBSSwrbkJBQStuQixrV0FBa1csc0JBQXNCLHdDQUF3QywyQkFBMkIsNkZBQTZGLGNBQWMsaU1BQWlNLDRDQUE0Qyx5Q0FBeUMsNERBQTRELHVCQUF1Qix5Q0FBeUMsOEZBQThGLGtDQUFrQyxvR0FBb0csa0NBQWtDO0FBQ3BuSTtBQUNBLHNCIiwiZmlsZSI6ImFwcE1vZHVsZS4xZjQxMzkwNmQ0OTY4ZjM5OWRmNC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwTW9kdWxlXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuXCIgKyB7XCIwXCI6XCI3YTc5ZWZjZGI2Y2JiNmE2MGI3Y1wifVtjaHVua0lkXSArIFwiLmJ1bmRsZS5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuIFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2FwcC5tb2R1bGUuanNcIixcInZlbmRvcnN+YXBwTW9kdWxlXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0cmlrZXtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcbi5maWx0ZXJDbGFzc3tcXHJcXG4gICAgY29sb3I6ICM1QzZCQzA7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMyU7XFxyXFxufVxcclxcbi5taWRSaWdodE1hcmdpbntcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcXHJcXG59XFxyXFxuLnRlbXBlcmF0dXJlQ2xhc3N7XFxyXFxuICAgIGNvbG9yOiAjNjE2MTYxO1xcclxcbiAgICAvKmNvbG9yOiAjMDI3N0JEOyovXFxyXFxufVxcclxcbi5zbWFsbFJpZ2h0TWFyZ2lue1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xcclxcbn1cXHJcXG4ubWFyZ2luVG9wQ2xhc3N7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIlO1xcclxcbn1cXHJcXG4ucmVxIHtcXHJcXG4gICAgY29sb3I6IGRhcmtyZWQ7XFxyXFxufVxcclxcbi5vdmVyZHVle1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcclxcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG59XFxyXFxuLmR1ZURhdGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbn1cXHJcXG4udGFza3tcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJtYWluUGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQlwiLFwiZmlsZVwiOlwibWFpblBhZ2UuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zdHJpa2V7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG4uZmlsdGVyQ2xhc3N7XFxyXFxuICAgIGNvbG9yOiAjNUM2QkMwO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xcclxcbn1cXHJcXG4ubWlkUmlnaHRNYXJnaW57XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMyU7XFxyXFxufVxcclxcbi50ZW1wZXJhdHVyZUNsYXNze1xcclxcbiAgICBjb2xvcjogIzYxNjE2MTtcXHJcXG4gICAgLypjb2xvcjogIzAyNzdCRDsqL1xcclxcbn1cXHJcXG4uc21hbGxSaWdodE1hcmdpbntcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcXHJcXG59XFxyXFxuLm1hcmdpblRvcENsYXNze1xcclxcbiAgICBtYXJnaW4tdG9wOiAyJTtcXHJcXG59XFxyXFxuLnJlcSB7XFxyXFxuICAgIGNvbG9yOiBkYXJrcmVkO1xcclxcbn1cXHJcXG4ub3ZlcmR1ZXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXHJcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxyXFxufVxcclxcbi5kdWVEYXRle1xcclxcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG59XFxyXFxuLnRhc2t7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMyU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcXHJcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbi5qc1wiLFxuXHRcIi4vZW4taW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tc2dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lbi1zZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZpbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1kZXZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWRldmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9vYy1sbmNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL29jLWxuYy5qc1wiLFxuXHRcIi4vb2MtbG5jLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ay5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtbW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC1tby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtbW8uanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJhcHBDb25maWcuJGluamVjdCA9IFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJ107XHJcblxyXG5mdW5jdGlvbiBhcHBDb25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ2hvbWUnLCB7XHJcbiAgICAgICAgICAgIHVybDogJycsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPHVpLXZpZXcvPicsXHJcbiAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImVuZFwiKTtcclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJycpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBDb25maWc7IiwiXHJcbmNvbnNvbGUubG9nKFwiY29udHJvbGxlclwiKTtcclxuLy8gQXBwQ29udHJvbGxlci4kaW5qZWN0ID0gW107XHJcbmZ1bmN0aW9uIEFwcENvbnRyb2xsZXIoKSB7XHJcbiAgICBsZXQgdm0gPSB0aGlzO1xyXG4gICAgLy8gdm0uZ2V0V2VhdGhlciA9IGdldFdlYXRoZXI7XHJcbiAgICBnZXRXZWF0aGVyKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIndlYXRoZXJcIik7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1kZWxoaSZhcHBpZD02YzU5M2U3NjA2ZGY1Yzg3NWY0OWU0MzRlOTI0YWEzMicpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid2VhdGhyclwiLHJlc3VsdC5tYWluLnRlbXApO1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRyb2xsZXI7IiwiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgJ2pxdWVyeS9kaXN0L2pxdWVyeS5taW4uanMnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5taW4uanMnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzJztcclxuaW1wb3J0ICdwb3BwZXIuanMnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9zcmMvdG9vbHRpcC5qcydcclxuaW1wb3J0ICd1dGlsL3V0aWwuanMnO1xyXG5cclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG4vLyBpbXBvcnQgeyBBbmd1bGFyRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWZvbnQtYXdlc29tZSc7XHJcbi8vIGltcG9ydCAnZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyc7XHJcbi8vIHJlcXVpcmUoJ2ZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuLy8gaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLmNzcyc7XHJcbi8vIEBpbXBvcnQgJ35AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLmNzcyc7XHJcbnJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcycpO1xyXG5cclxuLy8gaW1wb3J0ICcuL2Zyb250ZW5kLnBhY2thZ2VzLmpzJztcclxuaW1wb3J0ICcuL21haW5QYWdlLmNzcyc7XHJcblxyXG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IHVpUm91dGVyIGZyb20gJ0B1aXJvdXRlci9hbmd1bGFyanMnO1xyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4vYXBwLmNvbmZpZy5qcyc7XHJcbmltcG9ydCB0YXNrTW9kdWxlIGZyb20gXCIuL3Rhc2tzL3Rhc2subW9kdWxlLmpzXCI7XHJcbmltcG9ydCBBcHBDb250cm9sbGVyIGZyb20gJy4vYXBwLmNvbnRyb2xsZXIuanMnO1xyXG5cclxuYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnYXBwJywgW3VpUm91dGVyLCAndGFza3MnXSlcclxuICAgIC5jb25maWcoYXBwQ29uZmlnKTtcclxuICAgIC8vIC5jb250cm9sbGVyKCdBcHBDb250cm9sbGVyJywgQXBwQ29udHJvbGxlcik7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW5QYWdlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbnRlciBmb3JtTWFpbkJvZHlcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJqdW1ib3Ryb25cXFwiPlxcclxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJkaXNwbGF5LTRcXFwiPkFkZCB5b3VyIHRhc2shITwvaDE+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8Zm9ybSBub3ZhbGlkYXRlIG5hbWU9XFxcInRhc2tGb3JtXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIG5nLW1vZGVsPVxcXCJ2bS50YXNrRm9ybVxcXCI+XFxyXFxuXFxyXFxuPCEtLSAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiByb2xlPVxcXCJhbGVydFxcXCIgbmctc2hvdz1cXFwidGFza0Zvcm0uJGRpcnR5ICYmICF0YXNrRm9ybS4kdmFsaWRcXFwiID4tLT5cXHJcXG48IS0tICAgICAgICAgICAgUGxlYXNlIGVudGVyIHZhbGlkIGl0ZW0hLS0+XFxyXFxuPCEtLSAgICAgICAgPC9kaXY+LS0+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IG5nLXNob3c9XFxcInRhc2tGb3JtLml0ZW0uJHRvdWNoZWQgfHwgdGFza0Zvcm0uJHN1Ym1pdHRlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgbmctc2hvdz1cXFwidGFza0Zvcm0uaXRlbS4kZXJyb3IucmVxdWlyZWRcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiIHJvbGU9XFxcImFsZXJ0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJyZXFcXFwiID5UYXNrIGlzIHJlcXVpcmVkPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwiaXRlbVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkFkZCBhIHRhc2tcXFwiIHJlcXVpcmVkXFxyXFxuICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJ2bS5hZGRUYXNrTmFtZVxcXCIgPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJkYXRldGltZS1sb2NhbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInZtLmFkZER1ZURhdGVcXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1sZWZ0XFxcIlxcclxcbiAgICAgICAgICAgICAgICBuZy1jbGljaz1cXFwidm0uYWRkVGFza1RvTGlzdCgpOyBcXFwiIHVpLXNyZWY9XFxcImhvbWUudGFza3NcXFwiPlxcclxcbjwhLS0gICAgICAgICAgICAgICAgbmctY2xpY2s9XFxcInRhc2tGb3JtLiR2YWxpZD92bS5hZGRUYXNrVG9MaXN0KCk6Y29uc29sZS5sb2coJ2ludmFsaWQnKTsgXFxcIiB1aS1zcmVmPVxcXCJob21lLnRhc2tzXFxcIj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgICAgIG5nLWNsaWNrPVxcXCJ0YXNrRm9ybS4kdmFsaWQ/dm0uYWRkVGFza1RvTGlzdCgpOmNvbnNvbGUubG9nKCdpbnZhbGlkJyk7dm0ucmVzZXRGb3JtKCk7IFxcXCIgdWktc3JlZj1cXFwiaG9tZS50YXNrc1xcXCI+LS0+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrLXNxdWFyZSBcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPHNwYW4+U0FWRSBUQVNLPC9zcGFuPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0XFxcIiB1aS1zcmVmPVxcXCJob21lLnRhc2tzXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmFyIGZhLXdpbmRvdy1jbG9zZVxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDxzcGFuPkNBTkNFTDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPCEtLSAgICAgICAgPGEgaHJlZj1cXFwiIyEvXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJ0bi1zZWNvbmRhcnlcXFwiPi0tPlxcclxcbiAgICAgICAgPCEtLSAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10cmFzaFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPkNhbmNlbDwvaT4tLT5cXHJcXG4gICAgICAgIDwhLS0gICAgICAgIDwvYT4tLT5cXHJcXG4gICAgPC9mb3JtPlxcclxcbjwvZGl2PlwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsImltcG9ydCB0YXNrc1NlcnZpY2UgZnJvbSAnLi4vdGFzay5zZXJ2aWNlLmpzJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5FZGl0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc3RhdGVQYXJhbXMnLCAndGFza3NTZXJ2aWNlJ107XHJcblxyXG5mdW5jdGlvbiBFZGl0Q29udHJvbGxlcigkc3RhdGVQYXJhbXMsIHRhc2tzU2VydmljZSkge1xyXG4gICAgbGV0IHZtID0gdGhpcztcclxuICAgIHZtLmRhdGEgPSB0YXNrc1NlcnZpY2UubmV3U2V0VGFzay50YXNrTmFtZTtcclxuICAgIC8vIHZtLmR1ZURhdGUgPSBtb21lbnQobmV3IERhdGUodGFza3NTZXJ2aWNlLm5ld1NldFRhc2suZHVlRGF0ZSkpLmZvcm1hdChcIllZWVktTU0tRERUa2s6bW1cIilcclxuICAgIHZtLmR1ZURhdGUgPSBuZXcgRGF0ZSh0YXNrc1NlcnZpY2UubmV3U2V0VGFzay5kdWVEYXRlKTtcclxuICAgIHZtLmNhdGVnb3J5ID0gdGFza3NTZXJ2aWNlLm5ld1NldFRhc2suY2F0ZWdvcnk7XHJcbiAgICAvLyB2bS5kdWVEYXRlLmZvcm1hdCgneXl5eS1NTS1kZFRoaDptbScpO1xyXG4gICAgdm0uZWRpdFRhc2sgPSBlZGl0VGFzaztcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZWRpdFRhc2soKSB7XHJcbiAgICAgICAgdGFza3NTZXJ2aWNlLm5ld1NldFRhc2suZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGFza3NTZXJ2aWNlLm5ld1NldFRhc2sudGFza05hbWUgPSB2bS5kYXRhO1xyXG4gICAgICAgIC8vIHRhc2tzU2VydmljZS5uZXdTZXRUYXNrLmR1ZURhdGUgPSBuZXcgRGF0ZSh2bS5kdWVEYXRlKTtcclxuICAgICAgICB0YXNrc1NlcnZpY2UubmV3U2V0VGFzay5jYXRlZ29yeSA9IHZtLmNhdGVnb3J5O1xyXG4gICAgICAgIHRhc2tzU2VydmljZS5uZXdTZXRUYXNrLmR1ZURhdGUgPSBtb21lbnQodm0uZHVlRGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREVGtrOm1tJyk7XHJcbiAgICAgICAgdGFza3NTZXJ2aWNlLmVkaXRUYXNrKHRhc2tzU2VydmljZS5uZXdTZXRUYXNrKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdENvbnRyb2xsZXI7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbnRlciBmb3JtTWFpbkJvZHlcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJqdW1ib3Ryb25cXFwiPlxcclxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJkaXNwbGF5LTRcXFwiPkVkaXQgeW91ciB0YXNrISE8L2gxPlxcclxcbiAgICAgICAgPCEtLSAgICAgICAge3t2bS5kYXRhfX0tLT5cXHJcXG4gICAgICAgIDwhLS0gICAgICAgIHt7dm0uZHVlRGF0ZX19LS0+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8Zm9ybSBuYW1lPVxcXCJ0YXNrRm9ybVxcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgcm9sZT1cXFwiYWxlcnRcXFwiIG5nLXNob3c9XFxcInRhc2tGb3JtLiRkaXJ0eSAmJiAhdGFza0Zvcm0uJHZhbGlkXFxcIj5cXHJcXG4gICAgICAgICAgICBQbGVhc2UgZW50ZXIgdmFsaWQgaXRlbSFcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XFxcIml0ZW1cXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFZGl0IHRhc2tcXFwiIHJlcXVpcmVkIG5nLW1vZGVsPVxcXCJ2bS5kYXRhXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiMTBcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbXBvcnRhbmNlICgxLTEwKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XFxcInZtLmNhdGVnb3J5XFxcIiB2YWx1ZT1cXFwie3t2bS5jYXRlZ29yeX19XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS5kdWVEYXRlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICB2YWx1ZT17e3ZtLmR1ZURhdGV8ZGF0ZToneXl5eS1NTS1kZFRoaDptbSd9fT5cXHJcXG5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtbGVmdFxcXCIgdWktc3JlZj1cXFwiaG9tZS50YXNrc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgbmctY2xpY2s9XFxcInRhc2tGb3JtLiR2YWxpZD92bS5lZGl0VGFzaygpOmNvbnNvbGUubG9nKCdpbnZhbGlkJyk7XFxcIiA+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrLXNxdWFyZSBcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPHNwYW4+U0FWRSBUQVNLPC9zcGFuPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0XFxcIiB1aS1zcmVmPVxcXCJob21lLnRhc2tzXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmFyIGZhLXdpbmRvdy1jbG9zZVxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDxzcGFuPkNBTkNFTDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPCEtLSAgICAgICAgPGEgaHJlZj1cXFwiIyEvXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJ0bi1zZWNvbmRhcnlcXFwiPi0tPlxcclxcbiAgICAgICAgPCEtLSAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10cmFzaFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPkNhbmNlbDwvaT4tLT5cXHJcXG4gICAgICAgIDwhLS0gICAgICAgIDwvYT4tLT5cXHJcXG4gICAgPC9mb3JtPlxcclxcbjwvZGl2PlwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsInRhc2tDb25maWcuJGluamVjdCA9IFsnJHN0YXRlUHJvdmlkZXInXTtcclxuXHJcbmZ1bmN0aW9uIHRhc2tDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdob21lLnRhc2tzJywge1xyXG4gICAgICAgICAgICB1cmw6ICcvJyxcclxuICAgICAgICAgICAgdmlld3M6IHtcclxuICAgICAgICAgICAgICAgICd0YXNrc0AnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdGFza3MudG1wbC5odG1sJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1Rhc2tzQ29udHJvbGxlciBhcyB2bScsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGF0ZSgnaG9tZS50YXNrcy5hZGQnLCB7XHJcbiAgICAgICAgICAgIHVybDogJ3Rhc2svYWRkJyxcclxuICAgICAgICAgICAgdmlld3M6IHtcclxuICAgICAgICAgICAgICAgICdoYW5kbGVUYXNrQCc6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9vcGVyYXRpb25zL2FkZFRhc2sudG1wbC5odG1sJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1Rhc2tzQ29udHJvbGxlciBhcyB2bScsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGF0ZSgnaG9tZS50YXNrcy5lZGl0Jywge1xyXG4gICAgICAgICAgICB1cmw6ICd0YXNrL2VkaXQnLFxyXG4gICAgICAgICAgICB2aWV3czoge1xyXG4gICAgICAgICAgICAgICAgJ2hhbmRsZVRhc2tAJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL29wZXJhdGlvbnMvZWRpdFRhc2sudG1wbC5odG1sJyksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29udHJvbGxlcjonVGFza3NDb250cm9sbGVyIGFzIHZtJyxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRWRpdENvbnRyb2xsZXIgYXMgdm0nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrQ29uZmlnO1xyXG5cclxuY29uc29sZS5sb2coXCJ0YXNrIGNvbmZpZ1wiKTsiLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IHVpUm91dGVyIGZyb20gJ0B1aXJvdXRlci9hbmd1bGFyanMnO1xyXG5pbXBvcnQgJ25nc3RvcmFnZSc7XHJcblxyXG5pbXBvcnQgdGFza0NvbmZpZyBmcm9tICcuL3Rhc2suY29uZmlnLmpzJztcclxuaW1wb3J0IHRhc2tzU2VydmljZSBmcm9tIFwiLi90YXNrLnNlcnZpY2UuanNcIjtcclxuaW1wb3J0IFRhc2tzQ29udHJvbGxlciBmcm9tIFwiLi90YXNrcy5jb250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCBFZGl0Q29udHJvbGxlciBmcm9tIFwiLi9vcGVyYXRpb25zL2VkaXQuY29udHJvbGxlci5qc1wiO1xyXG4vLyBpbXBvcnQgdGFza0ZpbHRlciBmcm9tIFwiLi90YXNrLmZpbHRlci5qc1wiO1xyXG5cclxuY29uc3QgdGFza01vZHVsZSA9IGFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3Rhc2tzJywgW3VpUm91dGVyLCAnbmdTdG9yYWdlJ10pXHJcbiAgICAuY29uZmlnKHRhc2tDb25maWcpXHJcbiAgICAuc2VydmljZSgndGFza3NTZXJ2aWNlJywgdGFza3NTZXJ2aWNlKVxyXG4gICAgLmNvbnRyb2xsZXIoJ1Rhc2tzQ29udHJvbGxlcicsIFRhc2tzQ29udHJvbGxlcilcclxuICAgIC5jb250cm9sbGVyKCdFZGl0Q29udHJvbGxlcicsIEVkaXRDb250cm9sbGVyKTtcclxuLy8gLmZpbHRlcigndGFza0ZpbHRlcicsdGFza0ZpbHRlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrTW9kdWxlO1xyXG5cclxuY29uc29sZS5sb2coXCJ0YXNrIG1vZHVsZVwiKTsiLCJpbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxudGFza3NTZXJ2aWNlLiRpbmplY3QgPSBbICckbG9jYWxTdG9yYWdlJ107XHJcblxyXG5mdW5jdGlvbiB0YXNrc1NlcnZpY2UoICRsb2NhbFN0b3JhZ2UpIHtcclxuXHJcbiAgICBjb25zdCB0YXNrc1NlcnZpY2UgPSB0aGlzO1xyXG4gICAgbGV0IHRhc2tzTGlzdDtcclxuXHJcbiAgICB0YXNrc1NlcnZpY2UuZ2V0VGFza3MgPSBnZXRUYXNrcztcclxuICAgIHRhc2tzU2VydmljZS5hZGRUYXNrID0gYWRkVGFzaztcclxuICAgIHRhc2tzU2VydmljZS5kZWxldGVUYXNrID0gZGVsZXRlVGFzaztcclxuICAgIHRhc2tzU2VydmljZS5zZXROZXdUYXNrID0gc2V0TmV3VGFzaztcclxuICAgIHRhc2tzU2VydmljZS5lZGl0VGFzayA9IGVkaXRUYXNrO1xyXG4gICAgdGFza3NTZXJ2aWNlLnRvZ2dsZVN0YXRlID0gdG9nZ2xlU3RhdGU7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VGFza3MoKSB7XHJcbiAgICAgICAgaWYgKCRsb2NhbFN0b3JhZ2UudGFza3MpIHtcclxuICAgICAgICAgICAgdGFza3NMaXN0ID0gJGxvY2FsU3RvcmFnZS50YXNrcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhd2FpdCBpbXBvcnQoJy4uLy4uL2RhdGEvdGFza3MuanNvbicpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoe2RlZmF1bHQ6IHRhc2tzfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFza3NcIiwgdGFza3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tzTGlzdCA9IHRhc2tzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tzTGlzdCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gdGFza3NMaXN0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUYXNrKHRhc2spIHtcclxuICAgICAgICBpZiAoIXRhc2tzTGlzdCkge1xyXG4gICAgICAgICAgICBnZXRUYXNrcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWF4ID0gXy5tYXgodGFza3NMaXN0LCBmdW5jdGlvbiAoY3VyclRhc2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJUYXNrLmlkO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGFzay5pZCA9IG1heC5pZCArIDE7XHJcbiAgICAgICAgdGFza3NMaXN0LnB1c2godGFzayk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza3NMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVUYXNrKHRhc2spIHtcclxuICAgICAgICBpZiAoIXRhc2tzTGlzdCkge1xyXG4gICAgICAgICAgICBnZXRUYXNrcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaW5kZXggPSBfLmZpbmRJbmRleCh0YXNrc0xpc3QsIGZ1bmN0aW9uIChjdXJyVGFzaykge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VyclRhc2suaWQgPT0gdGFzay5pZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0YXNrc0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXROZXdUYXNrKHRhc2spIHtcclxuICAgICAgICB0YXNrc1NlcnZpY2UubmV3U2V0VGFzayA9IHRhc2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZWRpdFRhc2sodGFzaykge1xyXG4gICAgICAgIGlmICghdGFza3NMaXN0KSB7XHJcbiAgICAgICAgICAgIGdldFRhc2tzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpbmRleCA9IF8uZmluZEluZGV4KHRhc2tzTGlzdCwgZnVuY3Rpb24gKGN1cnJUYXNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyVGFzay5pZCA9PSB0YXNrLmlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIG1vbWVudCh0YXNrLmR1ZURhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERFRrazptbScpO1xyXG4gICAgICAgIHRhc2tzTGlzdFtpbmRleF0gPSB0YXNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVN0YXRlKHRhc2spIHtcclxuICAgICAgICB0YXNrLmNvbXBsZXRlZCA9ICF0YXNrLmNvbXBsZXRlZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFza3NTZXJ2aWNlOyIsImltcG9ydCB0YXNrc1NlcnZpY2UgZnJvbSAnLi90YXNrLnNlcnZpY2UuanMnO1xyXG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuVGFza3NDb250cm9sbGVyLiRpbmplY3QgPSBbJ3Rhc2tzU2VydmljZScsICckbG9jYWxTdG9yYWdlJ107XHJcblxyXG5mdW5jdGlvbiBUYXNrc0NvbnRyb2xsZXIodGFza3NTZXJ2aWNlLCAkbG9jYWxTdG9yYWdlKSB7XHJcbiAgICBsZXQgdm0gPSB0aGlzO1xyXG5cclxuICAgIHZtLmFkZFRhc2tOYW1lID0gXCJcIjtcclxuICAgIHZtLmFkZER1ZURhdGUgPSBcIlwiO1xyXG4gICAgLy8gdm0uZ29Ub0hvbWU9XCJob21lLnRhc2tzLmFkZFwiXHJcbiAgICB2bS50ZW1wZXJhdHVyZSA9IFwiXCI7XHJcbiAgICB2bS5kYXlUeXBlID0gXCJcIjtcclxuICAgIHZtLmFkZFRhc2tUb0xpc3QgPSBhZGRUYXNrVG9MaXN0O1xyXG4gICAgdm0uZGVsZXRlVGFzayA9IHRhc2tzU2VydmljZS5kZWxldGVUYXNrO1xyXG4gICAgdm0ub3BlbkVkaXRUYXNrID0gb3BlbkVkaXRUYXNrO1xyXG4gICAgdm0udG9nZ2xlU3RhdGUgPSB0b2dnbGVTdGF0ZTtcclxuICAgIHZtLmdldENsYXNzID0gZ2V0Q2xhc3M7XHJcbiAgICB2bS5jbGVhckNvbXBsZXRlZCA9IGNsZWFyQ29tcGxldGVkO1xyXG4gICAgdm0uc29ydERhdGV3aXNlID0gc29ydERhdGV3aXNlO1xyXG4gICAgdm0uZ2V0Q29tcGxldGVkID0gZ2V0Q29tcGxldGVkO1xyXG4gICAgdm0uZ2V0V2VhdGhlciA9IGdldFdlYXRoZXI7XHJcbiAgICAvLyB2bS5pZlZhbGlkID0gaWZWYWxpZDtcclxuICAgIHZtLnJlc2V0Rm9ybSA9IHJlc2V0Rm9ybTtcclxuICAgIHZtLmdldFRvRG9MaXN0ID0gZ2V0VG9Eb0xpc3Q7XHJcbiAgICB2bS5jaGVja092ZXJkdWUgPSBjaGVja092ZXJkdWU7XHJcblxyXG5cclxuICAgIGFjdGl2YXRlKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgLy8gZ2V0V2VhdGhlcigpO1xyXG5cclxuICAgICAgICBpZiAoJGxvY2FsU3RvcmFnZS50YXNrcykge1xyXG4gICAgICAgICAgICB2bS50YXNrTGlzdCA9ICRsb2NhbFN0b3JhZ2UudGFza3M7XHJcbiAgICAgICAgICAgICRsb2NhbFN0b3JhZ2UudGFza3MgPSB2bS50YXNrTGlzdDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2NhbFwiLCAkbG9jYWxTdG9yYWdlLnRhc2tzKTtcclxuICAgICAgICAgICAgLy8gYWxlcnQoXCIyIFRpbWUgQ2FsbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZtLnRhc2tMaXN0PVtdO1xyXG4gICAgICAgICAgICAkbG9jYWxTdG9yYWdlLnRhc2tzID0gdm0udGFza0xpc3Q7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRhc2sgc2VydmljZVwiLCB0YXNrc1NlcnZpY2UuZ2V0VGFza3MoKSk7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0YXNrc1NlcnZpY2UuZ2V0VGFza3MoKVxyXG4gICAgICAgICAgICAvLyAgICAgLnRoZW4oZnVuY3Rpb24gKHRhc2tzKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJ0YXNrc1wiLHRhc2tzKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB2bS50YXNrTGlzdCA9IHRhc2tzO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHZtLnRhc2tMaXN0KTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAkbG9jYWxTdG9yYWdlLnRhc2tzID0gdm0udGFza0xpc3Q7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gYWxlcnQoXCIxXCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlYXNvbikge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGFsZXJ0KHJlYXNvbik7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVhc29uKTtcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwid2VhdGhlclwiKTtcclxuICAgICAgICBhd2FpdCBmZXRjaCgnaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPWRlbGhpJmFwcGlkPTZjNTkzZTc2MDZkZjVjODc1ZjQ5ZTQzNGU5MjRhYTMyJylcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid2VhdGhyclwiLCByZXN1bHQubWFpbi50ZW1wLCByZXN1bHQud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICB2bS50ZW1wZXJhdHVyZSA9IHJlc3VsdC5tYWluLnRlbXA7XHJcbiAgICAgICAgICAgICAgICB2bS5kYXlUeXBlID0gcmVzdWx0LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2bS50ZW1wZXJhdHVyZSwgdm0uZGF5VHlwZSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUYXNrVG9MaXN0KCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImFkZCBiZWZvcmUgdGFza0xpc3RcIiwgdm0udGFza0xpc3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlXCIpO1xyXG4gICAgICAgIHRhc2tzU2VydmljZS5uZXdUYXNrID0ge1xyXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB0YXNrTmFtZTogdm0uYWRkVGFza05hbWUsXHJcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIC8vIGR1ZURhdGU6IG1vbWVudChuZXcgRGF0ZSh2bS5hZGREdWVEYXRlKSkuZm9ybWF0KCdZWVlZLU1NLUREVGtrOm1tJyksXHJcbiAgICAgICAgICAgIGR1ZURhdGU6IG1vbWVudCh2bS5hZGREdWVEYXRlKS5mb3JtYXQoJ1lZWVktTU0tRERUa2s6bW0nKSxcclxuICAgICAgICAgICAgLy8gZHVlRGF0ZTogdm0uYWRkRHVlRGF0ZSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRhc2tzU2VydmljZS5hZGRUYXNrKHRhc2tzU2VydmljZS5uZXdUYXNrKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFkZCBhZnRlciB0YXNrTGlzdFwiLHZtLnRhc2tMaXN0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrc1NlcnZpY2UubmV3VGFzay5kdWVEYXRlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgKHRhc2tzU2VydmljZS5uZXdUYXNrLmR1ZURhdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuRWRpdFRhc2sodGFzaykge1xyXG4gICAgICAgIHRhc2tzU2VydmljZS5zZXROZXdUYXNrKHRhc2spO1xyXG4gICAgICAgIC8vIHZtLmRhdGEgPSB0YXNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVN0YXRlKHRhc2spIHtcclxuICAgICAgICB0YXNrc1NlcnZpY2UudG9nZ2xlU3RhdGUodGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbHJcIik7XHJcbiAgICAgICAgdm0udGFza0xpc3QgPSBfLmZpbHRlcih2bS50YXNrTGlzdCwgZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICAgICAgICAgcmV0dXJuICF0YXNrLmNvbXBsZXRlZDtcclxuICAgICAgICAgICAgLy8gaWYgKHRhc2suY29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB2bS5kZWxldGVUYXNrKHRhc2spO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgdGFzayBpbiB2bS50YXNrTGlzdCkge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIipcIiwgdGFzayk7XHJcbiAgICAgICAgLy8gICAgIGlmICh2bS50YXNrTGlzdFt0YXNrXS5jb21wbGV0ZWQpIHtcclxuICAgICAgICAvLyAgICAgICAgIHZtLmRlbGV0ZVRhc2sodm0udGFza0xpc3RbdGFza10pO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbHJcIik7XHJcbiAgICAgICAgdm0udGFza0xpc3QgPSBfLmZpbHRlcih2bS50YXNrTGlzdCwgZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRhc2suY29tcGxldGVkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLy8gZnVuY3Rpb24gc29ydERhdGV3aXNlKCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiY2xyIHNvcnRcIik7XHJcbiAgICAvLyAgICAgdm0udGFza0xpc3QgPSBfLnNvcnRCeSh2bS50YXNrTGlzdCwgZnVuY3Rpb24gKHRhc2spIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIFshdGFzay5kdWVEYXRlLCB0YXNrLmR1ZURhdGUsIHRhc2suZGF0ZV07XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9O1xyXG4gICAgZnVuY3Rpb24gc29ydERhdGV3aXNlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xyIHNvcnRcIik7XHJcblxyXG4gICAgICAgIHZtLnRhc2tMaXN0ID0gXy5maWx0ZXIodm0udGFza0xpc3QsIGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgICAgIGxldCBlbmRUaW1lPSBtb21lbnQodGFzay5kdWVEYXRlKTtcclxuICAgICAgICAgICAgbGV0IG5vdyA9IG1vbWVudCgpO1xyXG4gICAgICAgICAgICBsZXQgZGlmZmVyZW5jZSA9IG1vbWVudC5kdXJhdGlvbihlbmRUaW1lLmRpZmYobm93KSk7XHJcbiAgICAgICAgICAgIGlmKGRpZmZlcmVuY2UgPjApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q2xhc3MoY2F0ZWdvcnkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAnYmFkZ2UtZGFuZ2VyJzogY2F0ZWdvcnkgPiA3LFxyXG4gICAgICAgICAgICAnYmFkZ2Utc2Vjb25kYXJ5JzogY2F0ZWdvcnkgPiA0ICYmIGNhdGVnb3J5IDwgOCxcclxuICAgICAgICAgICAgJ2JhZGdlLXdhcm5pbmcnOiBjYXRlZ29yeSA8IDVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG4gICAgICAgIHZtLmFkZFRhc2tOYW1lPVwiXCI7XHJcbiAgICAgICAgLy8gdm0uZ29Ub0hvbWUgPSBcImhvbWUudGFza3NcIjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh2bS5nb1RvSG9tZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VG9Eb0xpc3QoKSB7XHJcbiAgICAgICAgdm0udGFza0xpc3QgPSAkbG9jYWxTdG9yYWdlLnRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrT3ZlcmR1ZSh0YXNrKSB7XHJcbiAgICAgICAgbGV0IGVuZFRpbWU9IG1vbWVudCh0YXNrLmR1ZURhdGUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5kdGltZVwiLGVuZFRpbWUpO1xyXG4gICAgICAgIGxldCBub3cgPSBtb21lbnQoKTtcclxuICAgICAgICBsZXQgZGlmZmVyZW5jZSA9IG1vbWVudC5kdXJhdGlvbihlbmRUaW1lLmRpZmYobm93KSk7XHJcbiAgICAgICAgaWYoZGlmZmVyZW5jZSA+MCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh2bS5vdmVyZHVlKTtcclxuICAgICAgICAvLyByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9XHJcbiAgICAvLyBmdW5jdGlvbiBpZlZhbGlkKCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHZtLnRhc2tGb3JtKTtcclxuICAgIC8vICAgICBsZXQgayA9IHZtLnRhc2tGb3JtLiR2YWxpZCA/ICdob21lLnRhc2tzJyA6Jy0nO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGspO1xyXG4gICAgLy8gICAgIHJldHVybiBrO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIGdldENsYXNzKGNhdGVnb3J5KSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgICAgJ2xhYmVsLWltcG9ydGFudCc6IGNhdGVnb3J5ID4gNyxcclxuICAgIC8vICAgICAgICAgJ2xhYmVsLXdhcm5pbmcnOiBjYXRlZ29yeSA+IDQgJiYgY2F0ZWdvcnkgPCA4XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrc0NvbnRyb2xsZXI7XHJcbiIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxhIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGluayBtaWRSaWdodE1hcmdpblxcXCJcXHJcXG4gICBkYXRhLXRvZ2dsZT1cXFwidG9vbHRpcFxcXCIgZGF0YS1wbGFjZW1lbnQ9XFxcInRvcFxcXCIgdGl0bGU9XFxcIkFkZCBuZXcgdGFza1xcXCIgdWktc3JlZj1cXFwiaG9tZS50YXNrcy5hZGRcXFwiPlxcclxcbiAgICA8aSBjbGFzcz1cXFwiZmEgZmEtcGx1cyBcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgIDxzcGFuPkFERCBUQVNLPC9zcGFuPlxcclxcbjwvYT5cXHJcXG48YSB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmsgZmlsdGVyQ2xhc3NcXFwiIG5nLWNsaWNrPVxcXCJ2bS5jbGVhckNvbXBsZXRlZCgpXFxcIj5cXHJcXG4gICAgPGkgY2xhc3M9XFxcImZhcyBmYS1saXN0LXVsIFxcXCI+PC9pPlxcclxcbiAgICA8c3Bhbj5DTEVBUiBDT01QTEVURUQ8L3NwYW4+XFxyXFxuPC9hPlxcclxcbjxhIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGluayBmaWx0ZXJDbGFzc1xcXCIgbmctY2xpY2s9XFxcInZtLmdldENvbXBsZXRlZCgpXFxcIj5cXHJcXG4gICAgPGkgY2xhc3M9XFxcImZhcyBmYS10YXNrc1xcXCI+PC9pPlxcclxcbiAgICA8c3Bhbj5HRVQgQ09NUExFVEVEPC9zcGFuPlxcclxcbjwvYT5cXHJcXG48YSB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmsgZmlsdGVyQ2xhc3NcXFwiIG5nLWNsaWNrPVxcXCJ2bS5nZXRUb0RvTGlzdCgpXFxcIj5cXHJcXG4gICAgPGkgY2xhc3M9XFxcImZhcyBmYS10YXNrc1xcXCI+PC9pPlxcclxcbiAgICA8c3Bhbj5Ub0RvIGxpc3Q8L3NwYW4+XFxyXFxuPC9hPlxcclxcbjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saW5rIGZpbHRlckNsYXNzXFxcIiBuZy1jbGljaz1cXFwidm0uc29ydERhdGV3aXNlKClcXFwiXFxyXFxuICAgICAgICBkYXRhLXRvZ2dsZT1cXFwidG9vbHRpcFxcXCIgZGF0YS1wbGFjZW1lbnQ9XFxcInRvcFxcXCIgdGl0bGU9XFxcIlRpbWUgbGVmdCB0byBjb21wbGV0ZSB0aGUgZHVlLXRhc2tzXFxcIiA+XFxyXFxuICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtc29ydC1hbW91bnQtZG93bi1hbHRcXFwiPjwvaT5cXHJcXG4gICAgPHNwYW4+U09SVDwvc3Bhbj5cXHJcXG48L2J1dHRvbj5cXHJcXG48IS0tPGRpdiBjbGFzcz1cXFwiY2FyZCBkLWlubGluZS1mbGV4IHNoYWRvd1xcXCIgc3R5bGU9XFxcIndpZHRoOiAxMHJlbTtcXFwiIG5nLW1vdXNlb3Zlcj1cXFwidm0uZ2V0V2VhdGhlcigpO1xcXCI+LS0+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY2FyZCBkLWlubGluZS1mbGV4IHNoYWRvd1xcXCIgc3R5bGU9XFxcIndpZHRoOiAxMHJlbTtcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhcyBmYS1jbG91ZC1zdW4gZmEtMnggY2FyZC10aXRsZVxcXCI+PC9pPlxcclxcbiAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+XFxyXFxuICAgICAgICA8aDM+e3t2bS50ZW1wZXJhdHVyZX19PC9oMz48aDY+e3t2bS5kYXlUeXBlfX08L2g2PjwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPCEtLTxhIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biAgdGVtcGVyYXR1cmVDbGFzc1xcXCIgbmctbW91c2VvdmVyPVxcXCJ2bS5nZXRXZWF0aGVyKCk7XFxcIj4tLT5cXHJcXG48IS0tICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtY2xvdWQtc3VuIGZhLTJ4XFxcIj48L2k+LS0+XFxyXFxuPCEtLSAgICA8aDM+e3t2bS50ZW1wZXJhdHVyZX19PC9oMz48aDY+e3t2bS5kYXlUeXBlfX08L2g2Pi0tPlxcclxcbjwhLS08L2E+LS0+XFxyXFxuXFxyXFxuPCEtLTxkaXYgbmctbW91c2VvdmVyPVxcXCJ2bS5nZXRXZWF0aGVyKCk7XFxcIiA+LS0+XFxyXFxuPCEtLSAgICA8YSB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmsgdGVtcGVyYXR1cmVDbGFzc1xcXCI+LS0+XFxyXFxuPCEtLSAgICAgICAgPGkgY2xhc3M9XFxcImZhcyBmYS1jbG91ZC1zdW4gZmEtM3hcXFwiPjwvaT4tLT5cXHJcXG48IS0tICAgIDwvYT4tLT5cXHJcXG48IS0tPGgyPnt7dm0udGVtcGVyYXR1cmV9fTwvaDI+PGg1Pnt7dm0uZGF5VHlwZX19PC9oNT4tLT5cXHJcXG48IS0tPC9kaXY+LS0+XFxyXFxuXFxyXFxuXFxyXFxuPCEtLSZsdDshJm5kYXNoOyBNYXRlcmlhbCBpbmxpbmUgMSAmbmRhc2g7Jmd0Oy0tPlxcclxcbjwhLS0mbHQ7ISZuZGFzaDs8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrIFxcXCI+Jm5kYXNoOyZndDstLT5cXHJcXG48IS0tJmx0OyEmbmRhc2g7ICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIGlkPVxcXCJtYXRlcmlhbElubGluZTFcXFwiPiZuZGFzaDsmZ3Q7LS0+XFxyXFxuPCEtLSZsdDshJm5kYXNoOyAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwibWF0ZXJpYWxJbmxpbmUxXFxcIj4xPC9sYWJlbD4mbmRhc2g7Jmd0Oy0tPlxcclxcbjwhLS0mbHQ7ISZuZGFzaDs8L2Rpdj4mbmRhc2g7Jmd0Oy0tPlxcclxcbjx1bCBjbGFzcz1cXFwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXFxcIj5cXHJcXG4gICAgICAgIDxsaSBuZy1yZXBlYXQ9XFxcInRhc2sgaW4gdm0udGFza0xpc3QgfCBvcmRlckJ5OlsnY29tcGxldGVkJywnIWR1ZURhdGUnLCdkdWVEYXRlJ10gXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtIGZvcm0tY2hlY2tcXFwiID5cXHJcXG48IS0tICAgIDxsaSBuZy1yZXBlYXQ9XFxcInRhc2sgaW4gdm0udGFza0xpc3QgIFxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbSBmb3JtLWNoZWNrXFxcIj4tLT5cXHJcXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dCBcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiB2YWx1ZT1cXFwiXFxcIiBpZD1cXFwiaW52YWxpZENoZWNrXFxcIiBuZy1jbGljaz1cXFwidm0udG9nZ2xlU3RhdGUodGFzaylcXFwiXFxyXFxuICAgICAgICAgICAgICAgbmctY2hlY2tlZD1cXFwidGFzay5jb21wbGV0ZWRcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZSBwdWxsLXJpZ2h0XFxcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgbmctY2xpY2s9XFxcInZtLmRlbGV0ZVRhc2sodGFzaylcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gIGZsb2F0LXJpZ2h0XFxcIiBuZy1jbGljaz1cXFwidm0ub3BlbkVkaXRUYXNrKHRhc2spXFxcIiB1aS1zcmVmPVxcXCJob21lLnRhc2tzLmVkaXRcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtZWRpdFxcXCI+PC9pPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPCEtLSAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuICBmbG9hdC1yaWdodFxcXCIgPi0tPlxcclxcbiAgICAgICAgPCEtLSAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtZWRpdFxcXCI+PC9pPjwvYnV0dG9uPi0tPlxcclxcbiAgICAgICAgPHNwYW4gbmctY2xhc3M9XFxcIntzdHJpa2U6dGFzay5jb21wbGV0ZWR9XFxcIiBjbGFzcz1cXFwidGFza1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIHt7dGFzay50YXNrTmFtZSB8IHVwcGVyY2FzZX19XFxyXFxuICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8IS0tICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1wcmltYXJ5XFxcIiA+e3t0YXNrLmR1ZURhdGV9fTwvc3Bhbj4tLT5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCJcXHJcXG4gICAgICAgICAgICAgIG5nLWNsYXNzPVxcXCJ2bS5nZXRDbGFzcyh0YXNrLmNhdGVnb3J5KVxcXCIgbmctaWY9XFxcInRhc2suZHVlRGF0ZSE9J0ludmFsaWQgZGF0ZScgXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBuZy1pZj1cXFwidm0uY2hlY2tPdmVyZHVlKHRhc2spO1xcXCIgY2xhc3M9XFxcImJhZGdlLWxpZ2h0IG92ZXJkdWVcXFwiPk92ZXJkdWUgIHt7dGFzay5kdWVEYXRlfCBkYXRlOid5eXl5LU1NLWRkIC9oaDptbScgfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gbmctaWY9XFxcIiF2bS5jaGVja092ZXJkdWUodGFzayk7XFxcIiBjbGFzcz1cXFwiZHVlRGF0ZVxcXCI+e3t0YXNrLmR1ZURhdGV8IGRhdGU6J3l5eXktTU0tZGQgL2hoOm1tJyB9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuPCEtLSAgICAgICAgICAgICAgbmctY2xhc3M9XFxcInZtLmdldENsYXNzKHRhc2suY2F0ZWdvcnkpXFxcIj57e3Rhc2suZHVlRGF0ZXwgZGF0ZToneXl5eS1NTS1kZCcgfX08L3NwYW4+LS0+XFxyXFxuICAgICAgICA8IS0tICAgICAgICA8c3BhbiBjbGFzcz1cXFwibGFiZWwgXFxcIiBuZy1jbGFzcz1cXFwidm0uZ2V0Q2xhc3ModGFzay5jYXRlZ29yeSlcXFwiID57e3Rhc2suZHVlRGF0ZXwgZGF0ZToneXl5eS1NTS1kZCcgfX08L3NwYW4+LS0+XFxyXFxuICAgIDwvbGk+XFxyXFxuPC91bD5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiXSwic291cmNlUm9vdCI6IiJ9