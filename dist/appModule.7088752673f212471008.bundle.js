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
___CSS_LOADER_EXPORT___.push([module.i, ".strike{\r\n    text-decoration: line-through;\r\n}\r\n.filterClass{\r\n    color: #5C6BC0;\r\n    margin-right: 3%;\r\n}\r\n.midRightMargin{\r\n    margin-right: 3%;\r\n}\r\n.temperatureClass{\r\n    color: #616161;\r\n    /*color: #0277BD;*/\r\n}\r\n.smallRightMargin{\r\n    margin-right: 3%;\r\n}\r\n.marginTopClass{\r\n    margin-top: 2%;\r\n}", "",{"version":3,"sources":["mainPage.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;AACjC;AACA;IACI,cAAc;IACd,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,cAAc;IACd,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,cAAc;AAClB","file":"mainPage.css","sourcesContent":[".strike{\r\n    text-decoration: line-through;\r\n}\r\n.filterClass{\r\n    color: #5C6BC0;\r\n    margin-right: 3%;\r\n}\r\n.midRightMargin{\r\n    margin-right: 3%;\r\n}\r\n.temperatureClass{\r\n    color: #616161;\r\n    /*color: #0277BD;*/\r\n}\r\n.smallRightMargin{\r\n    margin-right: 3%;\r\n}\r\n.marginTopClass{\r\n    margin-top: 2%;\r\n}"]}]);
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
/* harmony import */ var _frontend_packages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frontend.packages.js */ "./src/frontend.packages.js");
/* harmony import */ var _mainPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainPage.css */ "./src/mainPage.css");
/* harmony import */ var _mainPage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mainPage_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uirouter_angularjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angularjs */ "./node_modules/@uirouter/angularjs/lib-esm/index.js");
/* harmony import */ var _app_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.config.js */ "./src/app.config.js");
/* harmony import */ var _tasks_task_module_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/task.module.js */ "./src/tasks/task.module.js");
/* harmony import */ var _app_controller_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.controller.js */ "./src/app.controller.js");









angular__WEBPACK_IMPORTED_MODULE_2___default.a
    .module('app', [_uirouter_angularjs__WEBPACK_IMPORTED_MODULE_3__["default"], 'tasks'])
    .config(_app_config_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
    // .controller('AppController', AppController);

/***/ }),

/***/ "./src/frontend.packages.js":
/*!**********************************!*\
  !*** ./src/frontend.packages.js ***!
  \**********************************/
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




// import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import 'font-awesome/css/font-awesome.min.css';
// require('font-awesome/css/font-awesome.min.css');
// import '@fortawesome/fontawesome-free/css/all.css';
// @import '~@fortawesome/fontawesome-free/css/all.css';
__webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");

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
var code = "<div class=\"containter formMainBody\">\r\n    <div class=\"jumbotron\">\r\n        <h1 class=\"display-4\">Add your task!!</h1>\r\n    </div>\r\n    <form name=\"taskForm\" class=\"text-center\">\r\n\r\n        <div class=\"alert alert-danger\" role=\"alert\" ng-show=\"taskForm.$dirty && !taskForm.$valid\">\r\n            Please enter valid item!\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input name=\"item\" type=\"text\" class=\"form-control\" placeholder=\"Add a task\" required\r\n                   ng-model=\"vm.addTaskName\" ng-minlength=\"3\">\r\n            <input type=\"datetime-local\" class=\"form-control\" ng-model=\"vm.addDueDate\">\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-success float-left\" ng-click=\"vm.addTaskToList()\" ui-sref=\"home.tasks\">\r\n            <i class=\"fa fa-check-square \" aria-hidden=\"true\"></i>\r\n            <span>SAVE TASK</span>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-secondary float-right\" ui-sref=\"home.tasks\">\r\n            <i class=\"far fa-window-close\"></i>\r\n            <span>CANCEL</span>\r\n        </button>\r\n        <!--        <a href=\"#!/\" class=\"form-control btn-secondary\">-->\r\n        <!--            <i class=\"fa fa-trash\" aria-hidden=\"true\">Cancel</i>-->\r\n        <!--        </a>-->\r\n    </form>\r\n</div>";
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
    vm.dueDate = tasksService.newSetTask.dueDate;
    vm.category = tasksService.newSetTask.category;
    // vm.dueDate.format('yyyy-MM-ddThh:mm')
    vm.editTask = editTask;


    function editTask() {
        tasksService.newSetTask.date = new Date();
        tasksService.newSetTask.taskName = vm.data;
        tasksService.newSetTask.dueDate = new Date(vm.dueDate);
        tasksService.newSetTask.category = vm.category;
        // tasksService.newSetTask.dueDate = vm.dueDate;
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
var code = "<div class=\"containter formMainBody\">\r\n    <div class=\"jumbotron\">\r\n        <h1 class=\"display-4\">Edit your task!!</h1>\r\n        <!--        {{vm.data}}-->\r\n        <!--        {{vm.dueDate}}-->\r\n    </div>\r\n    <form name=\"taskForm\" class=\"text-center\">\r\n\r\n        <div class=\"alert alert-danger\" role=\"alert\" ng-show=\"taskForm.$dirty && !taskForm.$valid\">\r\n            Please enter valid item!\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input name=\"item\" type=\"text\" class=\"form-control\" placeholder=\"Edit task\" required ng-model=\"vm.data\"\r\n                   ng-minlength=\"3\">\r\n            <input type=\"number\" class=\"form-control\" min=\"0\" max=\"10\" placeholder=\"Importance (1-10)\"\r\n                   ng-model=\"vm.category\" value=\"{{vm.category}}\">\r\n            <input type=\"datetime-local\" class=\"form-control\" ng-model=\"vm.dueDate\"\r\n                   value={{vm.dueDate|date:'yyyy-MM-ddThh:mm'}}>\r\n\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-success float-left\" ui-sref=\"home.tasks\" ng-click=\"vm.editTask()\">\r\n            <i class=\"fa fa-check-square \" aria-hidden=\"true\"></i>\r\n            <span>SAVE TASK</span>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-secondary float-right\" ui-sref=\"home.tasks\">\r\n            <i class=\"far fa-window-close\"></i>\r\n            <span>CANCEL</span>\r\n        </button>\r\n        <!--        <a href=\"#!/\" class=\"form-control btn-secondary\">-->\r\n        <!--            <i class=\"fa fa-trash\" aria-hidden=\"true\">Cancel</i>-->\r\n        <!--        </a>-->\r\n    </form>\r\n</div>";
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

    activate();

    function activate() {
        getWeather();

        if ($localStorage.tasks) {
            vm.taskList = $localStorage.tasks;
            $localStorage.tasks = vm.taskList;
            console.log("local", $localStorage.tasks);
            // alert("2 Time Call");
        } else {
            console.log("task service", tasksService.getTasks());
            return tasksService.getTasks()
                .then(function (tasks) {
                    vm.taskList = tasks;
                    console.log(vm.taskList);
                    $localStorage.tasks = vm.taskList;
                    // alert("1");
                }).catch(function (reason) {
                    alert(reason);
                    console.log(reason);
                });
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
        console.log("taskList", vm.taskList);
        console.log("create");
        tasksService.newTask = {
            completed: false,
            taskName: vm.addTaskName,
            date: new Date(),
            dueDate: new Date(vm.addDueDate),
            category: 0
        };
        tasksService.addTask(tasksService.newTask);
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


    function sortDatewise() {
        console.log("clr sort");
        vm.taskList = underscore__WEBPACK_IMPORTED_MODULE_1__["default"].sortBy(vm.taskList, function (task) {
            return [!task.dueDate, task.dueDate, task.date];
        });
    };

    function getClass(category) {
        return {
            'badge-danger': category > 7,
            'badge-secondary': category > 4 && category < 8,
            'badge-warning': category < 5
        }
    }

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
var code = "<a type=\"button\" class=\"btn btn-link midRightMargin\" ui-sref=\"home.tasks.add\">\r\n    <i class=\"fa fa-plus \" aria-hidden=\"true\"></i>\r\n    <span>ADD TASK</span>\r\n</a>\r\n<a type=\"button\" class=\"btn btn-link filterClass\" ng-click=\"vm.clearCompleted()\">\r\n    <i class=\"fas fa-list-ul \"></i>\r\n    <span>CLEAR COMPLETED</span>\r\n</a>\r\n<a type=\"button\" class=\"btn btn-link filterClass\" ng-click=\"vm.getCompleted()\">\r\n    <i class=\"fas fa-tasks\"></i>\r\n    <span>GET COMPLETED</span>\r\n</a>\r\n\r\n<a type=\"button\" class=\"btn btn-link filterClass\" ng-click=\"vm.sortDatewise()\">\r\n    <i class=\"fas fa-sort-amount-down-alt\"></i>\r\n    <span>SORT</span>\r\n</a>\r\n<div class=\"card d-inline-flex shadow\" style=\"width: 10rem;\" ng-mouseover=\"vm.getWeather();\">\r\n    <div class=\"card-body\">\r\n        <i class=\"fas fa-cloud-sun fa-2x card-title\"></i>\r\n        <p class=\"card-text\">\r\n        <h3>{{vm.temperature}}</h3><h6>{{vm.dayType}}</h6></p>\r\n    </div>\r\n</div>\r\n<!--<a type=\"button\" class=\"btn  temperatureClass\" ng-mouseover=\"vm.getWeather();\">-->\r\n<!--    <i class=\"fas fa-cloud-sun fa-2x\"></i>-->\r\n<!--    <h3>{{vm.temperature}}</h3><h6>{{vm.dayType}}</h6>-->\r\n<!--</a>-->\r\n\r\n<!--<div ng-mouseover=\"vm.getWeather();\" >-->\r\n<!--    <a type=\"button\" class=\"btn btn-link temperatureClass\">-->\r\n<!--        <i class=\"fas fa-cloud-sun fa-3x\"></i>-->\r\n<!--    </a>-->\r\n<!--<h2>{{vm.temperature}}</h2><h5>{{vm.dayType}}</h5>-->\r\n<!--</div>-->\r\n\r\n\r\n<!--&lt;!&ndash; Material inline 1 &ndash;&gt;-->\r\n<!--&lt;!&ndash;<div class=\"form-check \">&ndash;&gt;-->\r\n<!--&lt;!&ndash;    <input type=\"checkbox\" class=\"form-check-input\" id=\"materialInline1\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;    <label class=\"form-check-label\" for=\"materialInline1\">1</label>&ndash;&gt;-->\r\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n<ul class=\"list-group list-group-flush\">\r\n    <!--    <li ng-repeat=\"task in vm.taskList | orderBy:['!dueDate','dueDate'] \" class=\"list-group-item form-check\" >-->\r\n    <li ng-repeat=\"task in vm.taskList  \" class=\"list-group-item form-check\">\r\n        <input class=\"form-check-input \" type=\"checkbox\" value=\"\" id=\"invalidCheck\" ng-click=\"vm.toggleState(task)\"\r\n               ng-checked=\"task.completed\">\r\n        <button type=\"button\" class=\"close pull-right\"\r\n                aria-label=\"Close\" ng-click=\"vm.deleteTask(task)\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <button class=\"btn  float-right\" ng-click=\"vm.openEditTask(task)\" ui-sref=\"home.tasks.edit\">\r\n            <i class=\"fas fa-edit\"></i></button>\r\n        <!--        <button class=\"btn  float-right\" >-->\r\n        <!--            <i class=\"fas fa-edit\"></i></button>-->\r\n        <span ng-class=\"{strike:task.completed}\">\r\n                {{task.taskName | uppercase}}\r\n        </span>\r\n        <!--        <span class=\"badge badge-pill badge-primary\" >{{task.dueDate}}</span>-->\r\n        <span class=\"badge badge-pill  \"\r\n              ng-class=\"vm.getClass(task.category)\">{{task.dueDate| date:'yyyy-MM-dd' }}</span>\r\n        <!--        <span class=\"label \" ng-class=\"vm.getClass(task.category)\" >{{task.dueDate| date:'yyyy-MM-dd' }}</span>-->\r\n    </li>\r\n</ul>";
// Exports
module.exports = code;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW5QYWdlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAubW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC5wYWNrYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpblBhZ2UuY3NzPzE0NTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL29wZXJhdGlvbnMvYWRkVGFzay50bXBsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL29wZXJhdGlvbnMvZWRpdC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90YXNrcy9vcGVyYXRpb25zL2VkaXRUYXNrLnRtcGwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvdGFzay5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL3Rhc2subW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy90YXNrcy90YXNrLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL3Rhc2tzLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL3Rhc2tzLnRtcGwuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlC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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixrREFBQztBQUN2QjtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBLHNCQUFzQixrREFBQztBQUN2QjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSw4RUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7QUNwSS9CO0FBQ0EsNndCQUE2d0Isa0NBQWtDLHdKQUF3SixnQkFBZ0IsV0FBVyxZQUFZLDJIQUEySCwrRUFBK0UsZ0JBQWdCLFdBQVcsWUFBWSx1RUFBdUUsNktBQTZLLGdCQUFnQixXQUFXLFlBQVksNkNBQTZDLFFBQVEsMEJBQTBCLElBQUksZUFBZSxRQUFRLGtDQUFrQyxJQUFJLGVBQWUsUUFBUSxzRkFBc0YsSUFBSSxlQUFlLFFBQVEsOEVBQThFLElBQUksZUFBZSxRQUFRLGFBQWEsSUFBSSxtbkJBQW1uQixrV0FBa1csc0JBQXNCLHlCQUF5QiwyQkFBMkIsNkZBQTZGLGNBQWMsb0hBQW9ILGtDQUFrQyxpR0FBaUcsa0NBQWtDO0FBQy95RztBQUNBLHNCIiwiZmlsZSI6ImFwcE1vZHVsZS43MDg4NzUyNjczZjIxMjQ3MTAwOC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwTW9kdWxlXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuXCIgKyB7XCIwXCI6XCI3YTc5ZWZjZGI2Y2JiNmE2MGI3Y1wifVtjaHVua0lkXSArIFwiLmJ1bmRsZS5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuIFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2FwcC5tb2R1bGUuanNcIixcInZlbmRvcnN+YXBwTW9kdWxlXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0cmlrZXtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcbi5maWx0ZXJDbGFzc3tcXHJcXG4gICAgY29sb3I6ICM1QzZCQzA7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMyU7XFxyXFxufVxcclxcbi5taWRSaWdodE1hcmdpbntcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcXHJcXG59XFxyXFxuLnRlbXBlcmF0dXJlQ2xhc3N7XFxyXFxuICAgIGNvbG9yOiAjNjE2MTYxO1xcclxcbiAgICAvKmNvbG9yOiAjMDI3N0JEOyovXFxyXFxufVxcclxcbi5zbWFsbFJpZ2h0TWFyZ2lue1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xcclxcbn1cXHJcXG4ubWFyZ2luVG9wQ2xhc3N7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIlO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJtYWluUGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCXCIsXCJmaWxlXCI6XCJtYWluUGFnZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnN0cmlrZXtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcbi5maWx0ZXJDbGFzc3tcXHJcXG4gICAgY29sb3I6ICM1QzZCQzA7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMyU7XFxyXFxufVxcclxcbi5taWRSaWdodE1hcmdpbntcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcXHJcXG59XFxyXFxuLnRlbXBlcmF0dXJlQ2xhc3N7XFxyXFxuICAgIGNvbG9yOiAjNjE2MTYxO1xcclxcbiAgICAvKmNvbG9yOiAjMDI3N0JEOyovXFxyXFxufVxcclxcbi5zbWFsbFJpZ2h0TWFyZ2lue1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xcclxcbn1cXHJcXG4ubWFyZ2luVG9wQ2xhc3N7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIlO1xcclxcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taW4uanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1zZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VuLXNnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1zZy5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpbC5qc1wiLFxuXHRcIi4vZmlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWRldmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tZGV2YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWRldmEuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL29jLWxuY1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvb2MtbG5jLmpzXCIsXG5cdFwiLi9vYy1sbmMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL29jLWxuYy5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ay5qc1wiLFxuXHRcIi4vdGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RrLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1tb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtbW8uanNcIixcblx0XCIuL3poLW1vLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1tby5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsImFwcENvbmZpZy4kaW5qZWN0ID0gWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInXTtcclxuXHJcbmZ1bmN0aW9uIGFwcENvbmZpZygkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnaG9tZScsIHtcclxuICAgICAgICAgICAgdXJsOiAnJyxcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8dWktdmlldy8+JyxcclxuICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiZW5kXCIpO1xyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcENvbmZpZzsiLCJcclxuY29uc29sZS5sb2coXCJjb250cm9sbGVyXCIpO1xyXG4vLyBBcHBDb250cm9sbGVyLiRpbmplY3QgPSBbXTtcclxuZnVuY3Rpb24gQXBwQ29udHJvbGxlcigpIHtcclxuICAgIGxldCB2bSA9IHRoaXM7XHJcbiAgICAvLyB2bS5nZXRXZWF0aGVyID0gZ2V0V2VhdGhlcjtcclxuICAgIGdldFdlYXRoZXIoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwid2VhdGhlclwiKTtcclxuICAgICAgICBmZXRjaCgnaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPWRlbGhpJmFwcGlkPTZjNTkzZTc2MDZkZjVjODc1ZjQ5ZTQzNGU5MjRhYTMyJylcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3ZWF0aHJyXCIscmVzdWx0Lm1haW4udGVtcCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udHJvbGxlcjsiLCJpbXBvcnQgJy4vZnJvbnRlbmQucGFja2FnZXMuanMnO1xyXG5pbXBvcnQgJy4vbWFpblBhZ2UuY3NzJztcclxuXHJcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgdWlSb3V0ZXIgZnJvbSAnQHVpcm91dGVyL2FuZ3VsYXJqcyc7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi9hcHAuY29uZmlnLmpzJztcclxuaW1wb3J0IHRhc2tNb2R1bGUgZnJvbSBcIi4vdGFza3MvdGFzay5tb2R1bGUuanNcIjtcclxuaW1wb3J0IEFwcENvbnRyb2xsZXIgZnJvbSAnLi9hcHAuY29udHJvbGxlci5qcyc7XHJcblxyXG5hbmd1bGFyXHJcbiAgICAubW9kdWxlKCdhcHAnLCBbdWlSb3V0ZXIsICd0YXNrcyddKVxyXG4gICAgLmNvbmZpZyhhcHBDb25maWcpO1xyXG4gICAgLy8gLmNvbnRyb2xsZXIoJ0FwcENvbnRyb2xsZXInLCBBcHBDb250cm9sbGVyKTsiLCJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCAnanF1ZXJ5L2Rpc3QvanF1ZXJ5Lm1pbi5qcyc7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbi5qcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuLy8gaW1wb3J0IHsgQW5ndWxhckZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1mb250LWF3ZXNvbWUnO1xyXG4vLyBpbXBvcnQgJ2ZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnO1xyXG4vLyByZXF1aXJlKCdmb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XHJcbi8vIGltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5jc3MnO1xyXG4vLyBAaW1wb3J0ICd+QGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5jc3MnO1xyXG5yZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnKTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpblBhZ2UuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWludGVyIGZvcm1NYWluQm9keVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImp1bWJvdHJvblxcXCI+XFxyXFxuICAgICAgICA8aDEgY2xhc3M9XFxcImRpc3BsYXktNFxcXCI+QWRkIHlvdXIgdGFzayEhPC9oMT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxmb3JtIG5hbWU9XFxcInRhc2tGb3JtXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiByb2xlPVxcXCJhbGVydFxcXCIgbmctc2hvdz1cXFwidGFza0Zvcm0uJGRpcnR5ICYmICF0YXNrRm9ybS4kdmFsaWRcXFwiPlxcclxcbiAgICAgICAgICAgIFBsZWFzZSBlbnRlciB2YWxpZCBpdGVtIVxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwiaXRlbVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkFkZCBhIHRhc2tcXFwiIHJlcXVpcmVkXFxyXFxuICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJ2bS5hZGRUYXNrTmFtZVxcXCIgbmctbWlubGVuZ3RoPVxcXCIzXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS5hZGREdWVEYXRlXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtbGVmdFxcXCIgbmctY2xpY2s9XFxcInZtLmFkZFRhc2tUb0xpc3QoKVxcXCIgdWktc3JlZj1cXFwiaG9tZS50YXNrc1xcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrLXNxdWFyZSBcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPHNwYW4+U0FWRSBUQVNLPC9zcGFuPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0XFxcIiB1aS1zcmVmPVxcXCJob21lLnRhc2tzXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmFyIGZhLXdpbmRvdy1jbG9zZVxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDxzcGFuPkNBTkNFTDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPCEtLSAgICAgICAgPGEgaHJlZj1cXFwiIyEvXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJ0bi1zZWNvbmRhcnlcXFwiPi0tPlxcclxcbiAgICAgICAgPCEtLSAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10cmFzaFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPkNhbmNlbDwvaT4tLT5cXHJcXG4gICAgICAgIDwhLS0gICAgICAgIDwvYT4tLT5cXHJcXG4gICAgPC9mb3JtPlxcclxcbjwvZGl2PlwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsImltcG9ydCB0YXNrc1NlcnZpY2UgZnJvbSAnLi4vdGFzay5zZXJ2aWNlLmpzJztcclxuaW1wb3J0ICdtb21lbnQnO1xyXG5cclxuRWRpdENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHN0YXRlUGFyYW1zJywgJ3Rhc2tzU2VydmljZSddO1xyXG5cclxuZnVuY3Rpb24gRWRpdENvbnRyb2xsZXIoJHN0YXRlUGFyYW1zLCB0YXNrc1NlcnZpY2UpIHtcclxuICAgIGxldCB2bSA9IHRoaXM7XHJcbiAgICB2bS5kYXRhID0gdGFza3NTZXJ2aWNlLm5ld1NldFRhc2sudGFza05hbWU7XHJcbiAgICB2bS5kdWVEYXRlID0gdGFza3NTZXJ2aWNlLm5ld1NldFRhc2suZHVlRGF0ZTtcclxuICAgIHZtLmNhdGVnb3J5ID0gdGFza3NTZXJ2aWNlLm5ld1NldFRhc2suY2F0ZWdvcnk7XHJcbiAgICAvLyB2bS5kdWVEYXRlLmZvcm1hdCgneXl5eS1NTS1kZFRoaDptbScpXHJcbiAgICB2bS5lZGl0VGFzayA9IGVkaXRUYXNrO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBlZGl0VGFzaygpIHtcclxuICAgICAgICB0YXNrc1NlcnZpY2UubmV3U2V0VGFzay5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICB0YXNrc1NlcnZpY2UubmV3U2V0VGFzay50YXNrTmFtZSA9IHZtLmRhdGE7XHJcbiAgICAgICAgdGFza3NTZXJ2aWNlLm5ld1NldFRhc2suZHVlRGF0ZSA9IG5ldyBEYXRlKHZtLmR1ZURhdGUpO1xyXG4gICAgICAgIHRhc2tzU2VydmljZS5uZXdTZXRUYXNrLmNhdGVnb3J5ID0gdm0uY2F0ZWdvcnk7XHJcbiAgICAgICAgLy8gdGFza3NTZXJ2aWNlLm5ld1NldFRhc2suZHVlRGF0ZSA9IHZtLmR1ZURhdGU7XHJcbiAgICAgICAgdGFza3NTZXJ2aWNlLmVkaXRUYXNrKHRhc2tzU2VydmljZS5uZXdTZXRUYXNrKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRDb250cm9sbGVyOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW50ZXIgZm9ybU1haW5Cb2R5XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwianVtYm90cm9uXFxcIj5cXHJcXG4gICAgICAgIDxoMSBjbGFzcz1cXFwiZGlzcGxheS00XFxcIj5FZGl0IHlvdXIgdGFzayEhPC9oMT5cXHJcXG4gICAgICAgIDwhLS0gICAgICAgIHt7dm0uZGF0YX19LS0+XFxyXFxuICAgICAgICA8IS0tICAgICAgICB7e3ZtLmR1ZURhdGV9fS0tPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGZvcm0gbmFtZT1cXFwidGFza0Zvcm1cXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiIHJvbGU9XFxcImFsZXJ0XFxcIiBuZy1zaG93PVxcXCJ0YXNrRm9ybS4kZGlydHkgJiYgIXRhc2tGb3JtLiR2YWxpZFxcXCI+XFxyXFxuICAgICAgICAgICAgUGxlYXNlIGVudGVyIHZhbGlkIGl0ZW0hXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVxcXCJpdGVtXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRWRpdCB0YXNrXFxcIiByZXF1aXJlZCBuZy1tb2RlbD1cXFwidm0uZGF0YVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgbmctbWlubGVuZ3RoPVxcXCIzXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiMTBcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbXBvcnRhbmNlICgxLTEwKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XFxcInZtLmNhdGVnb3J5XFxcIiB2YWx1ZT1cXFwie3t2bS5jYXRlZ29yeX19XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS5kdWVEYXRlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICB2YWx1ZT17e3ZtLmR1ZURhdGV8ZGF0ZToneXl5eS1NTS1kZFRoaDptbSd9fT5cXHJcXG5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtbGVmdFxcXCIgdWktc3JlZj1cXFwiaG9tZS50YXNrc1xcXCIgbmctY2xpY2s9XFxcInZtLmVkaXRUYXNrKClcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGVjay1zcXVhcmUgXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDxzcGFuPlNBVkUgVEFTSzwvc3Bhbj5cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBmbG9hdC1yaWdodFxcXCIgdWktc3JlZj1cXFwiaG9tZS50YXNrc1xcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhciBmYS13aW5kb3ctY2xvc2VcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICA8c3Bhbj5DQU5DRUw8L3NwYW4+XFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwhLS0gICAgICAgIDxhIGhyZWY9XFxcIiMhL1xcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBidG4tc2Vjb25kYXJ5XFxcIj4tLT5cXHJcXG4gICAgICAgIDwhLS0gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdHJhc2hcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5DYW5jZWw8L2k+LS0+XFxyXFxuICAgICAgICA8IS0tICAgICAgICA8L2E+LS0+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCJ0YXNrQ29uZmlnLiRpbmplY3QgPSBbJyRzdGF0ZVByb3ZpZGVyJ107XHJcblxyXG5mdW5jdGlvbiB0YXNrQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnaG9tZS50YXNrcycsIHtcclxuICAgICAgICAgICAgdXJsOiAnLycsXHJcbiAgICAgICAgICAgIHZpZXdzOiB7XHJcbiAgICAgICAgICAgICAgICAndGFza3NAJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3Rhc2tzLnRtcGwuaHRtbCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUYXNrc0NvbnRyb2xsZXIgYXMgdm0nLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhdGUoJ2hvbWUudGFza3MuYWRkJywge1xyXG4gICAgICAgICAgICB1cmw6ICd0YXNrL2FkZCcsXHJcbiAgICAgICAgICAgIHZpZXdzOiB7XHJcbiAgICAgICAgICAgICAgICAnaGFuZGxlVGFza0AnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vb3BlcmF0aW9ucy9hZGRUYXNrLnRtcGwuaHRtbCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUYXNrc0NvbnRyb2xsZXIgYXMgdm0nLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhdGUoJ2hvbWUudGFza3MuZWRpdCcsIHtcclxuICAgICAgICAgICAgdXJsOiAndGFzay9lZGl0JyxcclxuICAgICAgICAgICAgdmlld3M6IHtcclxuICAgICAgICAgICAgICAgICdoYW5kbGVUYXNrQCc6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9vcGVyYXRpb25zL2VkaXRUYXNrLnRtcGwuaHRtbCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnRyb2xsZXI6J1Rhc2tzQ29udHJvbGxlciBhcyB2bScsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0VkaXRDb250cm9sbGVyIGFzIHZtJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFza0NvbmZpZztcclxuXHJcbmNvbnNvbGUubG9nKFwidGFzayBjb25maWdcIik7IiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCB1aVJvdXRlciBmcm9tICdAdWlyb3V0ZXIvYW5ndWxhcmpzJztcclxuaW1wb3J0ICduZ3N0b3JhZ2UnO1xyXG5cclxuaW1wb3J0IHRhc2tDb25maWcgZnJvbSAnLi90YXNrLmNvbmZpZy5qcyc7XHJcbmltcG9ydCB0YXNrc1NlcnZpY2UgZnJvbSBcIi4vdGFzay5zZXJ2aWNlLmpzXCI7XHJcbmltcG9ydCBUYXNrc0NvbnRyb2xsZXIgZnJvbSBcIi4vdGFza3MuY29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgRWRpdENvbnRyb2xsZXIgZnJvbSBcIi4vb3BlcmF0aW9ucy9lZGl0LmNvbnRyb2xsZXIuanNcIjtcclxuLy8gaW1wb3J0IHRhc2tGaWx0ZXIgZnJvbSBcIi4vdGFzay5maWx0ZXIuanNcIjtcclxuXHJcbmNvbnN0IHRhc2tNb2R1bGUgPSBhbmd1bGFyXHJcbiAgICAubW9kdWxlKCd0YXNrcycsIFt1aVJvdXRlciwgJ25nU3RvcmFnZSddKVxyXG4gICAgLmNvbmZpZyh0YXNrQ29uZmlnKVxyXG4gICAgLnNlcnZpY2UoJ3Rhc2tzU2VydmljZScsIHRhc2tzU2VydmljZSlcclxuICAgIC5jb250cm9sbGVyKCdUYXNrc0NvbnRyb2xsZXInLCBUYXNrc0NvbnRyb2xsZXIpXHJcbiAgICAuY29udHJvbGxlcignRWRpdENvbnRyb2xsZXInLCBFZGl0Q29udHJvbGxlcik7XHJcbi8vIC5maWx0ZXIoJ3Rhc2tGaWx0ZXInLHRhc2tGaWx0ZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFza01vZHVsZTtcclxuXHJcbmNvbnNvbGUubG9nKFwidGFzayBtb2R1bGVcIik7IiwiaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XHJcblxyXG50YXNrc1NlcnZpY2UuJGluamVjdCA9IFsgJyRsb2NhbFN0b3JhZ2UnXTtcclxuXHJcbmZ1bmN0aW9uIHRhc2tzU2VydmljZSggJGxvY2FsU3RvcmFnZSkge1xyXG5cclxuICAgIGNvbnN0IHRhc2tzU2VydmljZSA9IHRoaXM7XHJcbiAgICBsZXQgdGFza3NMaXN0O1xyXG5cclxuICAgIHRhc2tzU2VydmljZS5nZXRUYXNrcyA9IGdldFRhc2tzO1xyXG4gICAgdGFza3NTZXJ2aWNlLmFkZFRhc2sgPSBhZGRUYXNrO1xyXG4gICAgdGFza3NTZXJ2aWNlLmRlbGV0ZVRhc2sgPSBkZWxldGVUYXNrO1xyXG4gICAgdGFza3NTZXJ2aWNlLnNldE5ld1Rhc2sgPSBzZXROZXdUYXNrO1xyXG4gICAgdGFza3NTZXJ2aWNlLmVkaXRUYXNrID0gZWRpdFRhc2s7XHJcbiAgICB0YXNrc1NlcnZpY2UudG9nZ2xlU3RhdGUgPSB0b2dnbGVTdGF0ZTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRUYXNrcygpIHtcclxuICAgICAgICBpZiAoJGxvY2FsU3RvcmFnZS50YXNrcykge1xyXG4gICAgICAgICAgICB0YXNrc0xpc3QgPSAkbG9jYWxTdG9yYWdlLnRhc2tzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGltcG9ydCgnLi4vLi4vZGF0YS90YXNrcy5qc29uJylcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7ZGVmYXVsdDogdGFza3N9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0YXNrc1wiLCB0YXNrcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza3NMaXN0ID0gdGFza3M7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza3NMaXN0KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiB0YXNrc0xpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xyXG4gICAgICAgIGlmICghdGFza3NMaXN0KSB7XHJcbiAgICAgICAgICAgIGdldFRhc2tzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtYXggPSBfLm1heCh0YXNrc0xpc3QsIGZ1bmN0aW9uIChjdXJyVGFzaykge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VyclRhc2suaWQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0YXNrLmlkID0gbWF4LmlkICsgMTtcclxuICAgICAgICB0YXNrc0xpc3QucHVzaCh0YXNrKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrc0xpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFzaykge1xyXG4gICAgICAgIGlmICghdGFza3NMaXN0KSB7XHJcbiAgICAgICAgICAgIGdldFRhc2tzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpbmRleCA9IF8uZmluZEluZGV4KHRhc2tzTGlzdCwgZnVuY3Rpb24gKGN1cnJUYXNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyVGFzay5pZCA9PSB0YXNrLmlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRhc2tzTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldE5ld1Rhc2sodGFzaykge1xyXG4gICAgICAgIHRhc2tzU2VydmljZS5uZXdTZXRUYXNrID0gdGFzaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlZGl0VGFzayh0YXNrKSB7XHJcbiAgICAgICAgaWYgKCF0YXNrc0xpc3QpIHtcclxuICAgICAgICAgICAgZ2V0VGFza3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGluZGV4ID0gXy5maW5kSW5kZXgodGFza3NMaXN0LCBmdW5jdGlvbiAoY3VyclRhc2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJUYXNrLmlkID09IHRhc2suaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGFza3NMaXN0W2luZGV4XSA9IHRhc2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlU3RhdGUodGFzaykge1xyXG4gICAgICAgIHRhc2suY29tcGxldGVkID0gIXRhc2suY29tcGxldGVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrc1NlcnZpY2U7IiwiaW1wb3J0IHRhc2tzU2VydmljZSBmcm9tICcuL3Rhc2suc2VydmljZS5qcyc7XHJcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5UYXNrc0NvbnRyb2xsZXIuJGluamVjdCA9IFsndGFza3NTZXJ2aWNlJywgJyRsb2NhbFN0b3JhZ2UnXTtcclxuXHJcbmZ1bmN0aW9uIFRhc2tzQ29udHJvbGxlcih0YXNrc1NlcnZpY2UsICRsb2NhbFN0b3JhZ2UpIHtcclxuICAgIGxldCB2bSA9IHRoaXM7XHJcblxyXG4gICAgdm0uYWRkVGFza05hbWUgPSBcIlwiO1xyXG4gICAgdm0uYWRkRHVlRGF0ZSA9IFwiXCI7XHJcbiAgICB2bS50ZW1wZXJhdHVyZSA9IFwiXCI7XHJcbiAgICB2bS5kYXlUeXBlID0gXCJcIjtcclxuICAgIHZtLmFkZFRhc2tUb0xpc3QgPSBhZGRUYXNrVG9MaXN0O1xyXG4gICAgdm0uZGVsZXRlVGFzayA9IHRhc2tzU2VydmljZS5kZWxldGVUYXNrO1xyXG4gICAgdm0ub3BlbkVkaXRUYXNrID0gb3BlbkVkaXRUYXNrO1xyXG4gICAgdm0udG9nZ2xlU3RhdGUgPSB0b2dnbGVTdGF0ZTtcclxuICAgIHZtLmdldENsYXNzID0gZ2V0Q2xhc3M7XHJcbiAgICB2bS5jbGVhckNvbXBsZXRlZCA9IGNsZWFyQ29tcGxldGVkO1xyXG4gICAgdm0uc29ydERhdGV3aXNlID0gc29ydERhdGV3aXNlO1xyXG4gICAgdm0uZ2V0Q29tcGxldGVkID0gZ2V0Q29tcGxldGVkO1xyXG4gICAgdm0uZ2V0V2VhdGhlciA9IGdldFdlYXRoZXI7XHJcblxyXG4gICAgYWN0aXZhdGUoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcclxuICAgICAgICBnZXRXZWF0aGVyKCk7XHJcblxyXG4gICAgICAgIGlmICgkbG9jYWxTdG9yYWdlLnRhc2tzKSB7XHJcbiAgICAgICAgICAgIHZtLnRhc2tMaXN0ID0gJGxvY2FsU3RvcmFnZS50YXNrcztcclxuICAgICAgICAgICAgJGxvY2FsU3RvcmFnZS50YXNrcyA9IHZtLnRhc2tMaXN0O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvY2FsXCIsICRsb2NhbFN0b3JhZ2UudGFza3MpO1xyXG4gICAgICAgICAgICAvLyBhbGVydChcIjIgVGltZSBDYWxsXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFzayBzZXJ2aWNlXCIsIHRhc2tzU2VydmljZS5nZXRUYXNrcygpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRhc2tzU2VydmljZS5nZXRUYXNrcygpXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodGFza3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB2bS50YXNrTGlzdCA9IHRhc2tzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZtLnRhc2tMaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAkbG9jYWxTdG9yYWdlLnRhc2tzID0gdm0udGFza0xpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxlcnQoXCIxXCIpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlYXNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVhc29uKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwid2VhdGhlclwiKTtcclxuICAgICAgICBhd2FpdCBmZXRjaCgnaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPWRlbGhpJmFwcGlkPTZjNTkzZTc2MDZkZjVjODc1ZjQ5ZTQzNGU5MjRhYTMyJylcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3ZWF0aHJyXCIsIHJlc3VsdC5tYWluLnRlbXAsIHJlc3VsdC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgdm0udGVtcGVyYXR1cmUgPSByZXN1bHQubWFpbi50ZW1wO1xyXG4gICAgICAgICAgICB2bS5kYXlUeXBlID0gcmVzdWx0LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZtLnRlbXBlcmF0dXJlLCB2bS5kYXlUeXBlKTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFRhc2tUb0xpc3QoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YXNrTGlzdFwiLCB2bS50YXNrTGlzdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVcIik7XHJcbiAgICAgICAgdGFza3NTZXJ2aWNlLm5ld1Rhc2sgPSB7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHRhc2tOYW1lOiB2bS5hZGRUYXNrTmFtZSxcclxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUodm0uYWRkRHVlRGF0ZSksXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0YXNrc1NlcnZpY2UuYWRkVGFzayh0YXNrc1NlcnZpY2UubmV3VGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkVkaXRUYXNrKHRhc2spIHtcclxuICAgICAgICB0YXNrc1NlcnZpY2Uuc2V0TmV3VGFzayh0YXNrKTtcclxuICAgICAgICAvLyB2bS5kYXRhID0gdGFzaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVTdGF0ZSh0YXNrKSB7XHJcbiAgICAgICAgdGFza3NTZXJ2aWNlLnRvZ2dsZVN0YXRlKHRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyQ29tcGxldGVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xyXCIpO1xyXG4gICAgICAgIHZtLnRhc2tMaXN0ID0gXy5maWx0ZXIodm0udGFza0xpc3QsIGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhdGFzay5jb21wbGV0ZWQ7XHJcbiAgICAgICAgICAgIC8vIGlmICh0YXNrLmNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdm0uZGVsZXRlVGFzayh0YXNrKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGZvciAobGV0IHRhc2sgaW4gdm0udGFza0xpc3QpIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCIqXCIsIHRhc2spO1xyXG4gICAgICAgIC8vICAgICBpZiAodm0udGFza0xpc3RbdGFza10uY29tcGxldGVkKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB2bS5kZWxldGVUYXNrKHZtLnRhc2tMaXN0W3Rhc2tdKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29tcGxldGVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xyXCIpO1xyXG4gICAgICAgIHZtLnRhc2tMaXN0ID0gXy5maWx0ZXIodm0udGFza0xpc3QsIGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXNrLmNvbXBsZXRlZDtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHNvcnREYXRld2lzZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsciBzb3J0XCIpO1xyXG4gICAgICAgIHZtLnRhc2tMaXN0ID0gXy5zb3J0Qnkodm0udGFza0xpc3QsIGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbIXRhc2suZHVlRGF0ZSwgdGFzay5kdWVEYXRlLCB0YXNrLmRhdGVdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDbGFzcyhjYXRlZ29yeSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICdiYWRnZS1kYW5nZXInOiBjYXRlZ29yeSA+IDcsXHJcbiAgICAgICAgICAgICdiYWRnZS1zZWNvbmRhcnknOiBjYXRlZ29yeSA+IDQgJiYgY2F0ZWdvcnkgPCA4LFxyXG4gICAgICAgICAgICAnYmFkZ2Utd2FybmluZyc6IGNhdGVnb3J5IDwgNVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBmdW5jdGlvbiBnZXRDbGFzcyhjYXRlZ29yeSkge1xyXG4gICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgICAgICdsYWJlbC1pbXBvcnRhbnQnOiBjYXRlZ29yeSA+IDcsXHJcbiAgICAvLyAgICAgICAgICdsYWJlbC13YXJuaW5nJzogY2F0ZWdvcnkgPiA0ICYmIGNhdGVnb3J5IDwgOFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza3NDb250cm9sbGVyO1xyXG4iLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8YSB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmsgbWlkUmlnaHRNYXJnaW5cXFwiIHVpLXNyZWY9XFxcImhvbWUudGFza3MuYWRkXFxcIj5cXHJcXG4gICAgPGkgY2xhc3M9XFxcImZhIGZhLXBsdXMgXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcclxcbiAgICA8c3Bhbj5BREQgVEFTSzwvc3Bhbj5cXHJcXG48L2E+XFxyXFxuPGEgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saW5rIGZpbHRlckNsYXNzXFxcIiBuZy1jbGljaz1cXFwidm0uY2xlYXJDb21wbGV0ZWQoKVxcXCI+XFxyXFxuICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtbGlzdC11bCBcXFwiPjwvaT5cXHJcXG4gICAgPHNwYW4+Q0xFQVIgQ09NUExFVEVEPC9zcGFuPlxcclxcbjwvYT5cXHJcXG48YSB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmsgZmlsdGVyQ2xhc3NcXFwiIG5nLWNsaWNrPVxcXCJ2bS5nZXRDb21wbGV0ZWQoKVxcXCI+XFxyXFxuICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtdGFza3NcXFwiPjwvaT5cXHJcXG4gICAgPHNwYW4+R0VUIENPTVBMRVRFRDwvc3Bhbj5cXHJcXG48L2E+XFxyXFxuXFxyXFxuPGEgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saW5rIGZpbHRlckNsYXNzXFxcIiBuZy1jbGljaz1cXFwidm0uc29ydERhdGV3aXNlKClcXFwiPlxcclxcbiAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLXNvcnQtYW1vdW50LWRvd24tYWx0XFxcIj48L2k+XFxyXFxuICAgIDxzcGFuPlNPUlQ8L3NwYW4+XFxyXFxuPC9hPlxcclxcbjxkaXYgY2xhc3M9XFxcImNhcmQgZC1pbmxpbmUtZmxleCBzaGFkb3dcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMTByZW07XFxcIiBuZy1tb3VzZW92ZXI9XFxcInZtLmdldFdlYXRoZXIoKTtcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhcyBmYS1jbG91ZC1zdW4gZmEtMnggY2FyZC10aXRsZVxcXCI+PC9pPlxcclxcbiAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+XFxyXFxuICAgICAgICA8aDM+e3t2bS50ZW1wZXJhdHVyZX19PC9oMz48aDY+e3t2bS5kYXlUeXBlfX08L2g2PjwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPCEtLTxhIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biAgdGVtcGVyYXR1cmVDbGFzc1xcXCIgbmctbW91c2VvdmVyPVxcXCJ2bS5nZXRXZWF0aGVyKCk7XFxcIj4tLT5cXHJcXG48IS0tICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtY2xvdWQtc3VuIGZhLTJ4XFxcIj48L2k+LS0+XFxyXFxuPCEtLSAgICA8aDM+e3t2bS50ZW1wZXJhdHVyZX19PC9oMz48aDY+e3t2bS5kYXlUeXBlfX08L2g2Pi0tPlxcclxcbjwhLS08L2E+LS0+XFxyXFxuXFxyXFxuPCEtLTxkaXYgbmctbW91c2VvdmVyPVxcXCJ2bS5nZXRXZWF0aGVyKCk7XFxcIiA+LS0+XFxyXFxuPCEtLSAgICA8YSB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmsgdGVtcGVyYXR1cmVDbGFzc1xcXCI+LS0+XFxyXFxuPCEtLSAgICAgICAgPGkgY2xhc3M9XFxcImZhcyBmYS1jbG91ZC1zdW4gZmEtM3hcXFwiPjwvaT4tLT5cXHJcXG48IS0tICAgIDwvYT4tLT5cXHJcXG48IS0tPGgyPnt7dm0udGVtcGVyYXR1cmV9fTwvaDI+PGg1Pnt7dm0uZGF5VHlwZX19PC9oNT4tLT5cXHJcXG48IS0tPC9kaXY+LS0+XFxyXFxuXFxyXFxuXFxyXFxuPCEtLSZsdDshJm5kYXNoOyBNYXRlcmlhbCBpbmxpbmUgMSAmbmRhc2g7Jmd0Oy0tPlxcclxcbjwhLS0mbHQ7ISZuZGFzaDs8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrIFxcXCI+Jm5kYXNoOyZndDstLT5cXHJcXG48IS0tJmx0OyEmbmRhc2g7ICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIGlkPVxcXCJtYXRlcmlhbElubGluZTFcXFwiPiZuZGFzaDsmZ3Q7LS0+XFxyXFxuPCEtLSZsdDshJm5kYXNoOyAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwibWF0ZXJpYWxJbmxpbmUxXFxcIj4xPC9sYWJlbD4mbmRhc2g7Jmd0Oy0tPlxcclxcbjwhLS0mbHQ7ISZuZGFzaDs8L2Rpdj4mbmRhc2g7Jmd0Oy0tPlxcclxcbjx1bCBjbGFzcz1cXFwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXFxcIj5cXHJcXG4gICAgPCEtLSAgICA8bGkgbmctcmVwZWF0PVxcXCJ0YXNrIGluIHZtLnRhc2tMaXN0IHwgb3JkZXJCeTpbJyFkdWVEYXRlJywnZHVlRGF0ZSddIFxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbSBmb3JtLWNoZWNrXFxcIiA+LS0+XFxyXFxuICAgIDxsaSBuZy1yZXBlYXQ9XFxcInRhc2sgaW4gdm0udGFza0xpc3QgIFxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbSBmb3JtLWNoZWNrXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dCBcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiB2YWx1ZT1cXFwiXFxcIiBpZD1cXFwiaW52YWxpZENoZWNrXFxcIiBuZy1jbGljaz1cXFwidm0udG9nZ2xlU3RhdGUodGFzaylcXFwiXFxyXFxuICAgICAgICAgICAgICAgbmctY2hlY2tlZD1cXFwidGFzay5jb21wbGV0ZWRcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZSBwdWxsLXJpZ2h0XFxcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgbmctY2xpY2s9XFxcInZtLmRlbGV0ZVRhc2sodGFzaylcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gIGZsb2F0LXJpZ2h0XFxcIiBuZy1jbGljaz1cXFwidm0ub3BlbkVkaXRUYXNrKHRhc2spXFxcIiB1aS1zcmVmPVxcXCJob21lLnRhc2tzLmVkaXRcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtZWRpdFxcXCI+PC9pPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPCEtLSAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuICBmbG9hdC1yaWdodFxcXCIgPi0tPlxcclxcbiAgICAgICAgPCEtLSAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtZWRpdFxcXCI+PC9pPjwvYnV0dG9uPi0tPlxcclxcbiAgICAgICAgPHNwYW4gbmctY2xhc3M9XFxcIntzdHJpa2U6dGFzay5jb21wbGV0ZWR9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAge3t0YXNrLnRhc2tOYW1lIHwgdXBwZXJjYXNlfX1cXHJcXG4gICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwhLS0gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLXByaW1hcnlcXFwiID57e3Rhc2suZHVlRGF0ZX19PC9zcGFuPi0tPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXBpbGwgIFxcXCJcXHJcXG4gICAgICAgICAgICAgIG5nLWNsYXNzPVxcXCJ2bS5nZXRDbGFzcyh0YXNrLmNhdGVnb3J5KVxcXCI+e3t0YXNrLmR1ZURhdGV8IGRhdGU6J3l5eXktTU0tZGQnIH19PC9zcGFuPlxcclxcbiAgICAgICAgPCEtLSAgICAgICAgPHNwYW4gY2xhc3M9XFxcImxhYmVsIFxcXCIgbmctY2xhc3M9XFxcInZtLmdldENsYXNzKHRhc2suY2F0ZWdvcnkpXFxcIiA+e3t0YXNrLmR1ZURhdGV8IGRhdGU6J3l5eXktTU0tZGQnIH19PC9zcGFuPi0tPlxcclxcbiAgICA8L2xpPlxcclxcbjwvdWw+XCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7Il0sInNvdXJjZVJvb3QiOiIifQ==