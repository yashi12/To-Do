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
        // getWeather();

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
var code = "<a type=\"button\" class=\"btn btn-link midRightMargin\" ui-sref=\"home.tasks.add\">\r\n    <i class=\"fa fa-plus \" aria-hidden=\"true\"></i>\r\n    <span>ADD TASK</span>\r\n</a>\r\n<a type=\"button\" class=\"btn btn-link filterClass\" ng-click=\"vm.clearCompleted()\">\r\n    <i class=\"fas fa-list-ul \"></i>\r\n    <span>CLEAR COMPLETED</span>\r\n</a>\r\n<a type=\"button\" class=\"btn btn-link filterClass\" ng-click=\"vm.getCompleted()\">\r\n    <i class=\"fas fa-tasks\"></i>\r\n    <span>GET COMPLETED</span>\r\n</a>\r\n\r\n<a type=\"button\" class=\"btn btn-link filterClass\" ng-click=\"vm.sortDatewise()\">\r\n    <i class=\"fas fa-sort-amount-down-alt\"></i>\r\n    <span>SORT</span>\r\n</a>\r\n<!--<div class=\"card d-inline-flex shadow\" style=\"width: 10rem;\" ng-mouseover=\"vm.getWeather();\">-->\r\n<div class=\"card d-inline-flex shadow\" style=\"width: 10rem;\">\r\n    <div class=\"card-body\">\r\n        <i class=\"fas fa-cloud-sun fa-2x card-title\"></i>\r\n        <p class=\"card-text\">\r\n        <h3>{{vm.temperature}}</h3><h6>{{vm.dayType}}</h6></p>\r\n    </div>\r\n</div>\r\n<!--<a type=\"button\" class=\"btn  temperatureClass\" ng-mouseover=\"vm.getWeather();\">-->\r\n<!--    <i class=\"fas fa-cloud-sun fa-2x\"></i>-->\r\n<!--    <h3>{{vm.temperature}}</h3><h6>{{vm.dayType}}</h6>-->\r\n<!--</a>-->\r\n\r\n<!--<div ng-mouseover=\"vm.getWeather();\" >-->\r\n<!--    <a type=\"button\" class=\"btn btn-link temperatureClass\">-->\r\n<!--        <i class=\"fas fa-cloud-sun fa-3x\"></i>-->\r\n<!--    </a>-->\r\n<!--<h2>{{vm.temperature}}</h2><h5>{{vm.dayType}}</h5>-->\r\n<!--</div>-->\r\n\r\n\r\n<!--&lt;!&ndash; Material inline 1 &ndash;&gt;-->\r\n<!--&lt;!&ndash;<div class=\"form-check \">&ndash;&gt;-->\r\n<!--&lt;!&ndash;    <input type=\"checkbox\" class=\"form-check-input\" id=\"materialInline1\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;    <label class=\"form-check-label\" for=\"materialInline1\">1</label>&ndash;&gt;-->\r\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n<ul class=\"list-group list-group-flush\">\r\n    <!--    <li ng-repeat=\"task in vm.taskList | orderBy:['!dueDate','dueDate'] \" class=\"list-group-item form-check\" >-->\r\n    <li ng-repeat=\"task in vm.taskList  \" class=\"list-group-item form-check\">\r\n        <input class=\"form-check-input \" type=\"checkbox\" value=\"\" id=\"invalidCheck\" ng-click=\"vm.toggleState(task)\"\r\n               ng-checked=\"task.completed\">\r\n        <button type=\"button\" class=\"close pull-right\"\r\n                aria-label=\"Close\" ng-click=\"vm.deleteTask(task)\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <button class=\"btn  float-right\" ng-click=\"vm.openEditTask(task)\" ui-sref=\"home.tasks.edit\">\r\n            <i class=\"fas fa-edit\"></i></button>\r\n        <!--        <button class=\"btn  float-right\" >-->\r\n        <!--            <i class=\"fas fa-edit\"></i></button>-->\r\n        <span ng-class=\"{strike:task.completed}\">\r\n                {{task.taskName | uppercase}}\r\n        </span>\r\n        <!--        <span class=\"badge badge-pill badge-primary\" >{{task.dueDate}}</span>-->\r\n        <span class=\"badge badge-pill  \"\r\n              ng-class=\"vm.getClass(task.category)\">{{task.dueDate| date:'yyyy-MM-dd' }}</span>\r\n        <!--        <span class=\"label \" ng-class=\"vm.getClass(task.category)\" >{{task.dueDate| date:'yyyy-MM-dd' }}</span>-->\r\n    </li>\r\n</ul>";
// Exports
module.exports = code;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW5QYWdlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAubW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC5wYWNrYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpblBhZ2UuY3NzPzE0NTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL29wZXJhdGlvbnMvYWRkVGFzay50bXBsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL29wZXJhdGlvbnMvZWRpdC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90YXNrcy9vcGVyYXRpb25zL2VkaXRUYXNrLnRtcGwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvdGFzay5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL3Rhc2subW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy90YXNrcy90YXNrLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL3Rhc2tzLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL3Rhc2tzLnRtcGwuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlC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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixrREFBQztBQUN2QjtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBLHNCQUFzQixrREFBQztBQUN2QjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSw4RUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7QUNwSS9CO0FBQ0EsaXhCQUFpeEIsa0NBQWtDLHdFQUF3RSx3SkFBd0osZ0JBQWdCLFdBQVcsWUFBWSwySEFBMkgsK0VBQStFLGdCQUFnQixXQUFXLFlBQVksdUVBQXVFLDZLQUE2SyxnQkFBZ0IsV0FBVyxZQUFZLDZDQUE2QyxRQUFRLDBCQUEwQixJQUFJLGVBQWUsUUFBUSxrQ0FBa0MsSUFBSSxlQUFlLFFBQVEsc0ZBQXNGLElBQUksZUFBZSxRQUFRLDhFQUE4RSxJQUFJLGVBQWUsUUFBUSxhQUFhLElBQUksbW5CQUFtbkIsa1dBQWtXLHNCQUFzQix5QkFBeUIsMkJBQTJCLDZGQUE2RixjQUFjLG9IQUFvSCxrQ0FBa0MsaUdBQWlHLGtDQUFrQztBQUMzM0c7QUFDQSxzQiIsImZpbGUiOiJhcHBNb2R1bGUuZDAxYzAyODM1YTZkMjVmMWJiNzIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcE1vZHVsZVwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLlwiICsge1wiMFwiOlwiN2E3OWVmY2RiNmNiYjZhNjBiN2NcIn1bY2h1bmtJZF0gKyBcIi5idW5kbGUuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbiBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9hcHAubW9kdWxlLmpzXCIsXCJ2ZW5kb3JzfmFwcE1vZHVsZVwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zdHJpa2V7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG4uZmlsdGVyQ2xhc3N7XFxyXFxuICAgIGNvbG9yOiAjNUM2QkMwO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xcclxcbn1cXHJcXG4ubWlkUmlnaHRNYXJnaW57XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMyU7XFxyXFxufVxcclxcbi50ZW1wZXJhdHVyZUNsYXNze1xcclxcbiAgICBjb2xvcjogIzYxNjE2MTtcXHJcXG4gICAgLypjb2xvcjogIzAyNzdCRDsqL1xcclxcbn1cXHJcXG4uc21hbGxSaWdodE1hcmdpbntcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcXHJcXG59XFxyXFxuLm1hcmdpblRvcENsYXNze1xcclxcbiAgICBtYXJnaW4tdG9wOiAyJTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wibWFpblBhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztBQUNsQlwiLFwiZmlsZVwiOlwibWFpblBhZ2UuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zdHJpa2V7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG4uZmlsdGVyQ2xhc3N7XFxyXFxuICAgIGNvbG9yOiAjNUM2QkMwO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xcclxcbn1cXHJcXG4ubWlkUmlnaHRNYXJnaW57XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMyU7XFxyXFxufVxcclxcbi50ZW1wZXJhdHVyZUNsYXNze1xcclxcbiAgICBjb2xvcjogIzYxNjE2MTtcXHJcXG4gICAgLypjb2xvcjogIzAyNzdCRDsqL1xcclxcbn1cXHJcXG4uc21hbGxSaWdodE1hcmdpbntcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcXHJcXG59XFxyXFxuLm1hcmdpblRvcENsYXNze1xcclxcbiAgICBtYXJnaW4tdG9wOiAyJTtcXHJcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbi5qc1wiLFxuXHRcIi4vZW4taW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tc2dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lbi1zZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZpbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1kZXZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWRldmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9vYy1sbmNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL29jLWxuYy5qc1wiLFxuXHRcIi4vb2MtbG5jLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ay5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtbW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC1tby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtbW8uanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJhcHBDb25maWcuJGluamVjdCA9IFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJ107XHJcblxyXG5mdW5jdGlvbiBhcHBDb25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ2hvbWUnLCB7XHJcbiAgICAgICAgICAgIHVybDogJycsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPHVpLXZpZXcvPicsXHJcbiAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImVuZFwiKTtcclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJycpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBDb25maWc7IiwiXHJcbmNvbnNvbGUubG9nKFwiY29udHJvbGxlclwiKTtcclxuLy8gQXBwQ29udHJvbGxlci4kaW5qZWN0ID0gW107XHJcbmZ1bmN0aW9uIEFwcENvbnRyb2xsZXIoKSB7XHJcbiAgICBsZXQgdm0gPSB0aGlzO1xyXG4gICAgLy8gdm0uZ2V0V2VhdGhlciA9IGdldFdlYXRoZXI7XHJcbiAgICBnZXRXZWF0aGVyKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIndlYXRoZXJcIik7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1kZWxoaSZhcHBpZD02YzU5M2U3NjA2ZGY1Yzg3NWY0OWU0MzRlOTI0YWEzMicpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid2VhdGhyclwiLHJlc3VsdC5tYWluLnRlbXApO1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRyb2xsZXI7IiwiaW1wb3J0ICcuL2Zyb250ZW5kLnBhY2thZ2VzLmpzJztcclxuaW1wb3J0ICcuL21haW5QYWdlLmNzcyc7XHJcblxyXG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IHVpUm91dGVyIGZyb20gJ0B1aXJvdXRlci9hbmd1bGFyanMnO1xyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4vYXBwLmNvbmZpZy5qcyc7XHJcbmltcG9ydCB0YXNrTW9kdWxlIGZyb20gXCIuL3Rhc2tzL3Rhc2subW9kdWxlLmpzXCI7XHJcbmltcG9ydCBBcHBDb250cm9sbGVyIGZyb20gJy4vYXBwLmNvbnRyb2xsZXIuanMnO1xyXG5cclxuYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnYXBwJywgW3VpUm91dGVyLCAndGFza3MnXSlcclxuICAgIC5jb25maWcoYXBwQ29uZmlnKTtcclxuICAgIC8vIC5jb250cm9sbGVyKCdBcHBDb250cm9sbGVyJywgQXBwQ29udHJvbGxlcik7IiwiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgJ2pxdWVyeS9kaXN0L2pxdWVyeS5taW4uanMnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5taW4uanMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbi8vIGltcG9ydCB7IEFuZ3VsYXJGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItZm9udC1hd2Vzb21lJztcclxuLy8gaW1wb3J0ICdmb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJztcclxuLy8gcmVxdWlyZSgnZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpO1xyXG4vLyBpbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwuY3NzJztcclxuLy8gQGltcG9ydCAnfkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwuY3NzJztcclxucmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJyk7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW5QYWdlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbnRlciBmb3JtTWFpbkJvZHlcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJqdW1ib3Ryb25cXFwiPlxcclxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJkaXNwbGF5LTRcXFwiPkFkZCB5b3VyIHRhc2shITwvaDE+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8Zm9ybSBuYW1lPVxcXCJ0YXNrRm9ybVxcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgcm9sZT1cXFwiYWxlcnRcXFwiIG5nLXNob3c9XFxcInRhc2tGb3JtLiRkaXJ0eSAmJiAhdGFza0Zvcm0uJHZhbGlkXFxcIj5cXHJcXG4gICAgICAgICAgICBQbGVhc2UgZW50ZXIgdmFsaWQgaXRlbSFcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XFxcIml0ZW1cXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJBZGQgYSB0YXNrXFxcIiByZXF1aXJlZFxcclxcbiAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cXFwidm0uYWRkVGFza05hbWVcXFwiIG5nLW1pbmxlbmd0aD1cXFwiM1xcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImRhdGV0aW1lLWxvY2FsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uYWRkRHVlRGF0ZVxcXCI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LWxlZnRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5hZGRUYXNrVG9MaXN0KClcXFwiIHVpLXNyZWY9XFxcImhvbWUudGFza3NcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGVjay1zcXVhcmUgXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDxzcGFuPlNBVkUgVEFTSzwvc3Bhbj5cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBmbG9hdC1yaWdodFxcXCIgdWktc3JlZj1cXFwiaG9tZS50YXNrc1xcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhciBmYS13aW5kb3ctY2xvc2VcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICA8c3Bhbj5DQU5DRUw8L3NwYW4+XFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwhLS0gICAgICAgIDxhIGhyZWY9XFxcIiMhL1xcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBidG4tc2Vjb25kYXJ5XFxcIj4tLT5cXHJcXG4gICAgICAgIDwhLS0gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdHJhc2hcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5DYW5jZWw8L2k+LS0+XFxyXFxuICAgICAgICA8IS0tICAgICAgICA8L2E+LS0+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCJpbXBvcnQgdGFza3NTZXJ2aWNlIGZyb20gJy4uL3Rhc2suc2VydmljZS5qcyc7XHJcbmltcG9ydCAnbW9tZW50JztcclxuXHJcbkVkaXRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzdGF0ZVBhcmFtcycsICd0YXNrc1NlcnZpY2UnXTtcclxuXHJcbmZ1bmN0aW9uIEVkaXRDb250cm9sbGVyKCRzdGF0ZVBhcmFtcywgdGFza3NTZXJ2aWNlKSB7XHJcbiAgICBsZXQgdm0gPSB0aGlzO1xyXG4gICAgdm0uZGF0YSA9IHRhc2tzU2VydmljZS5uZXdTZXRUYXNrLnRhc2tOYW1lO1xyXG4gICAgdm0uZHVlRGF0ZSA9IHRhc2tzU2VydmljZS5uZXdTZXRUYXNrLmR1ZURhdGU7XHJcbiAgICB2bS5jYXRlZ29yeSA9IHRhc2tzU2VydmljZS5uZXdTZXRUYXNrLmNhdGVnb3J5O1xyXG4gICAgLy8gdm0uZHVlRGF0ZS5mb3JtYXQoJ3l5eXktTU0tZGRUaGg6bW0nKVxyXG4gICAgdm0uZWRpdFRhc2sgPSBlZGl0VGFzaztcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZWRpdFRhc2soKSB7XHJcbiAgICAgICAgdGFza3NTZXJ2aWNlLm5ld1NldFRhc2suZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGFza3NTZXJ2aWNlLm5ld1NldFRhc2sudGFza05hbWUgPSB2bS5kYXRhO1xyXG4gICAgICAgIHRhc2tzU2VydmljZS5uZXdTZXRUYXNrLmR1ZURhdGUgPSBuZXcgRGF0ZSh2bS5kdWVEYXRlKTtcclxuICAgICAgICB0YXNrc1NlcnZpY2UubmV3U2V0VGFzay5jYXRlZ29yeSA9IHZtLmNhdGVnb3J5O1xyXG4gICAgICAgIC8vIHRhc2tzU2VydmljZS5uZXdTZXRUYXNrLmR1ZURhdGUgPSB2bS5kdWVEYXRlO1xyXG4gICAgICAgIHRhc2tzU2VydmljZS5lZGl0VGFzayh0YXNrc1NlcnZpY2UubmV3U2V0VGFzayk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0Q29udHJvbGxlcjsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWludGVyIGZvcm1NYWluQm9keVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImp1bWJvdHJvblxcXCI+XFxyXFxuICAgICAgICA8aDEgY2xhc3M9XFxcImRpc3BsYXktNFxcXCI+RWRpdCB5b3VyIHRhc2shITwvaDE+XFxyXFxuICAgICAgICA8IS0tICAgICAgICB7e3ZtLmRhdGF9fS0tPlxcclxcbiAgICAgICAgPCEtLSAgICAgICAge3t2bS5kdWVEYXRlfX0tLT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxmb3JtIG5hbWU9XFxcInRhc2tGb3JtXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiByb2xlPVxcXCJhbGVydFxcXCIgbmctc2hvdz1cXFwidGFza0Zvcm0uJGRpcnR5ICYmICF0YXNrRm9ybS4kdmFsaWRcXFwiPlxcclxcbiAgICAgICAgICAgIFBsZWFzZSBlbnRlciB2YWxpZCBpdGVtIVxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwiaXRlbVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVkaXQgdGFza1xcXCIgcmVxdWlyZWQgbmctbW9kZWw9XFxcInZtLmRhdGFcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgIG5nLW1pbmxlbmd0aD1cXFwiM1xcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjEwXFxcIiBwbGFjZWhvbGRlcj1cXFwiSW1wb3J0YW5jZSAoMS0xMClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJ2bS5jYXRlZ29yeVxcXCIgdmFsdWU9XFxcInt7dm0uY2F0ZWdvcnl9fVxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImRhdGV0aW1lLWxvY2FsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uZHVlRGF0ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgdmFsdWU9e3t2bS5kdWVEYXRlfGRhdGU6J3l5eXktTU0tZGRUaGg6bW0nfX0+XFxyXFxuXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LWxlZnRcXFwiIHVpLXNyZWY9XFxcImhvbWUudGFza3NcXFwiIG5nLWNsaWNrPVxcXCJ2bS5lZGl0VGFzaygpXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hlY2stc3F1YXJlIFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICA8c3Bhbj5TQVZFIFRBU0s8L3NwYW4+XFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZmxvYXQtcmlnaHRcXFwiIHVpLXNyZWY9XFxcImhvbWUudGFza3NcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYXIgZmEtd2luZG93LWNsb3NlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPHNwYW4+Q0FOQ0VMPC9zcGFuPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8IS0tICAgICAgICA8YSBocmVmPVxcXCIjIS9cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgYnRuLXNlY29uZGFyeVxcXCI+LS0+XFxyXFxuICAgICAgICA8IS0tICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRyYXNoXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+Q2FuY2VsPC9pPi0tPlxcclxcbiAgICAgICAgPCEtLSAgICAgICAgPC9hPi0tPlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwidGFza0NvbmZpZy4kaW5qZWN0ID0gWyckc3RhdGVQcm92aWRlciddO1xyXG5cclxuZnVuY3Rpb24gdGFza0NvbmZpZygkc3RhdGVQcm92aWRlcikge1xyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ2hvbWUudGFza3MnLCB7XHJcbiAgICAgICAgICAgIHVybDogJy8nLFxyXG4gICAgICAgICAgICB2aWV3czoge1xyXG4gICAgICAgICAgICAgICAgJ3Rhc2tzQCc6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90YXNrcy50bXBsLmh0bWwnKSxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGFza3NDb250cm9sbGVyIGFzIHZtJyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXRlKCdob21lLnRhc2tzLmFkZCcsIHtcclxuICAgICAgICAgICAgdXJsOiAndGFzay9hZGQnLFxyXG4gICAgICAgICAgICB2aWV3czoge1xyXG4gICAgICAgICAgICAgICAgJ2hhbmRsZVRhc2tAJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL29wZXJhdGlvbnMvYWRkVGFzay50bXBsLmh0bWwnKSxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGFza3NDb250cm9sbGVyIGFzIHZtJyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXRlKCdob21lLnRhc2tzLmVkaXQnLCB7XHJcbiAgICAgICAgICAgIHVybDogJ3Rhc2svZWRpdCcsXHJcbiAgICAgICAgICAgIHZpZXdzOiB7XHJcbiAgICAgICAgICAgICAgICAnaGFuZGxlVGFza0AnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vb3BlcmF0aW9ucy9lZGl0VGFzay50bXBsLmh0bWwnKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb250cm9sbGVyOidUYXNrc0NvbnRyb2xsZXIgYXMgdm0nLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdFZGl0Q29udHJvbGxlciBhcyB2bSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tDb25maWc7XHJcblxyXG5jb25zb2xlLmxvZyhcInRhc2sgY29uZmlnXCIpOyIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgdWlSb3V0ZXIgZnJvbSAnQHVpcm91dGVyL2FuZ3VsYXJqcyc7XHJcbmltcG9ydCAnbmdzdG9yYWdlJztcclxuXHJcbmltcG9ydCB0YXNrQ29uZmlnIGZyb20gJy4vdGFzay5jb25maWcuanMnO1xyXG5pbXBvcnQgdGFza3NTZXJ2aWNlIGZyb20gXCIuL3Rhc2suc2VydmljZS5qc1wiO1xyXG5pbXBvcnQgVGFza3NDb250cm9sbGVyIGZyb20gXCIuL3Rhc2tzLmNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IEVkaXRDb250cm9sbGVyIGZyb20gXCIuL29wZXJhdGlvbnMvZWRpdC5jb250cm9sbGVyLmpzXCI7XHJcbi8vIGltcG9ydCB0YXNrRmlsdGVyIGZyb20gXCIuL3Rhc2suZmlsdGVyLmpzXCI7XHJcblxyXG5jb25zdCB0YXNrTW9kdWxlID0gYW5ndWxhclxyXG4gICAgLm1vZHVsZSgndGFza3MnLCBbdWlSb3V0ZXIsICduZ1N0b3JhZ2UnXSlcclxuICAgIC5jb25maWcodGFza0NvbmZpZylcclxuICAgIC5zZXJ2aWNlKCd0YXNrc1NlcnZpY2UnLCB0YXNrc1NlcnZpY2UpXHJcbiAgICAuY29udHJvbGxlcignVGFza3NDb250cm9sbGVyJywgVGFza3NDb250cm9sbGVyKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0VkaXRDb250cm9sbGVyJywgRWRpdENvbnRyb2xsZXIpO1xyXG4vLyAuZmlsdGVyKCd0YXNrRmlsdGVyJyx0YXNrRmlsdGVyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tNb2R1bGU7XHJcblxyXG5jb25zb2xlLmxvZyhcInRhc2sgbW9kdWxlXCIpOyIsImltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5cclxudGFza3NTZXJ2aWNlLiRpbmplY3QgPSBbICckbG9jYWxTdG9yYWdlJ107XHJcblxyXG5mdW5jdGlvbiB0YXNrc1NlcnZpY2UoICRsb2NhbFN0b3JhZ2UpIHtcclxuXHJcbiAgICBjb25zdCB0YXNrc1NlcnZpY2UgPSB0aGlzO1xyXG4gICAgbGV0IHRhc2tzTGlzdDtcclxuXHJcbiAgICB0YXNrc1NlcnZpY2UuZ2V0VGFza3MgPSBnZXRUYXNrcztcclxuICAgIHRhc2tzU2VydmljZS5hZGRUYXNrID0gYWRkVGFzaztcclxuICAgIHRhc2tzU2VydmljZS5kZWxldGVUYXNrID0gZGVsZXRlVGFzaztcclxuICAgIHRhc2tzU2VydmljZS5zZXROZXdUYXNrID0gc2V0TmV3VGFzaztcclxuICAgIHRhc2tzU2VydmljZS5lZGl0VGFzayA9IGVkaXRUYXNrO1xyXG4gICAgdGFza3NTZXJ2aWNlLnRvZ2dsZVN0YXRlID0gdG9nZ2xlU3RhdGU7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VGFza3MoKSB7XHJcbiAgICAgICAgaWYgKCRsb2NhbFN0b3JhZ2UudGFza3MpIHtcclxuICAgICAgICAgICAgdGFza3NMaXN0ID0gJGxvY2FsU3RvcmFnZS50YXNrcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhd2FpdCBpbXBvcnQoJy4uLy4uL2RhdGEvdGFza3MuanNvbicpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoe2RlZmF1bHQ6IHRhc2tzfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFza3NcIiwgdGFza3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tzTGlzdCA9IHRhc2tzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tzTGlzdCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gdGFza3NMaXN0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUYXNrKHRhc2spIHtcclxuICAgICAgICBpZiAoIXRhc2tzTGlzdCkge1xyXG4gICAgICAgICAgICBnZXRUYXNrcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWF4ID0gXy5tYXgodGFza3NMaXN0LCBmdW5jdGlvbiAoY3VyclRhc2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJUYXNrLmlkO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGFzay5pZCA9IG1heC5pZCArIDE7XHJcbiAgICAgICAgdGFza3NMaXN0LnB1c2godGFzayk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza3NMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVUYXNrKHRhc2spIHtcclxuICAgICAgICBpZiAoIXRhc2tzTGlzdCkge1xyXG4gICAgICAgICAgICBnZXRUYXNrcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaW5kZXggPSBfLmZpbmRJbmRleCh0YXNrc0xpc3QsIGZ1bmN0aW9uIChjdXJyVGFzaykge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VyclRhc2suaWQgPT0gdGFzay5pZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0YXNrc0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXROZXdUYXNrKHRhc2spIHtcclxuICAgICAgICB0YXNrc1NlcnZpY2UubmV3U2V0VGFzayA9IHRhc2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZWRpdFRhc2sodGFzaykge1xyXG4gICAgICAgIGlmICghdGFza3NMaXN0KSB7XHJcbiAgICAgICAgICAgIGdldFRhc2tzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpbmRleCA9IF8uZmluZEluZGV4KHRhc2tzTGlzdCwgZnVuY3Rpb24gKGN1cnJUYXNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyVGFzay5pZCA9PSB0YXNrLmlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRhc2tzTGlzdFtpbmRleF0gPSB0YXNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVN0YXRlKHRhc2spIHtcclxuICAgICAgICB0YXNrLmNvbXBsZXRlZCA9ICF0YXNrLmNvbXBsZXRlZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFza3NTZXJ2aWNlOyIsImltcG9ydCB0YXNrc1NlcnZpY2UgZnJvbSAnLi90YXNrLnNlcnZpY2UuanMnO1xyXG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuVGFza3NDb250cm9sbGVyLiRpbmplY3QgPSBbJ3Rhc2tzU2VydmljZScsICckbG9jYWxTdG9yYWdlJ107XHJcblxyXG5mdW5jdGlvbiBUYXNrc0NvbnRyb2xsZXIodGFza3NTZXJ2aWNlLCAkbG9jYWxTdG9yYWdlKSB7XHJcbiAgICBsZXQgdm0gPSB0aGlzO1xyXG5cclxuICAgIHZtLmFkZFRhc2tOYW1lID0gXCJcIjtcclxuICAgIHZtLmFkZER1ZURhdGUgPSBcIlwiO1xyXG4gICAgdm0udGVtcGVyYXR1cmUgPSBcIlwiO1xyXG4gICAgdm0uZGF5VHlwZSA9IFwiXCI7XHJcbiAgICB2bS5hZGRUYXNrVG9MaXN0ID0gYWRkVGFza1RvTGlzdDtcclxuICAgIHZtLmRlbGV0ZVRhc2sgPSB0YXNrc1NlcnZpY2UuZGVsZXRlVGFzaztcclxuICAgIHZtLm9wZW5FZGl0VGFzayA9IG9wZW5FZGl0VGFzaztcclxuICAgIHZtLnRvZ2dsZVN0YXRlID0gdG9nZ2xlU3RhdGU7XHJcbiAgICB2bS5nZXRDbGFzcyA9IGdldENsYXNzO1xyXG4gICAgdm0uY2xlYXJDb21wbGV0ZWQgPSBjbGVhckNvbXBsZXRlZDtcclxuICAgIHZtLnNvcnREYXRld2lzZSA9IHNvcnREYXRld2lzZTtcclxuICAgIHZtLmdldENvbXBsZXRlZCA9IGdldENvbXBsZXRlZDtcclxuICAgIHZtLmdldFdlYXRoZXIgPSBnZXRXZWF0aGVyO1xyXG5cclxuICAgIGFjdGl2YXRlKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgLy8gZ2V0V2VhdGhlcigpO1xyXG5cclxuICAgICAgICBpZiAoJGxvY2FsU3RvcmFnZS50YXNrcykge1xyXG4gICAgICAgICAgICB2bS50YXNrTGlzdCA9ICRsb2NhbFN0b3JhZ2UudGFza3M7XHJcbiAgICAgICAgICAgICRsb2NhbFN0b3JhZ2UudGFza3MgPSB2bS50YXNrTGlzdDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2NhbFwiLCAkbG9jYWxTdG9yYWdlLnRhc2tzKTtcclxuICAgICAgICAgICAgLy8gYWxlcnQoXCIyIFRpbWUgQ2FsbFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhc2sgc2VydmljZVwiLCB0YXNrc1NlcnZpY2UuZ2V0VGFza3MoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXNrc1NlcnZpY2UuZ2V0VGFza3MoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHRhc2tzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdm0udGFza0xpc3QgPSB0YXNrcztcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2bS50YXNrTGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGxvY2FsU3RvcmFnZS50YXNrcyA9IHZtLnRhc2tMaXN0O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KFwiMVwiKTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZWFzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIndlYXRoZXJcIik7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1kZWxoaSZhcHBpZD02YzU5M2U3NjA2ZGY1Yzg3NWY0OWU0MzRlOTI0YWEzMicpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid2VhdGhyclwiLCByZXN1bHQubWFpbi50ZW1wLCByZXN1bHQud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIHZtLnRlbXBlcmF0dXJlID0gcmVzdWx0Lm1haW4udGVtcDtcclxuICAgICAgICAgICAgdm0uZGF5VHlwZSA9IHJlc3VsdC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2bS50ZW1wZXJhdHVyZSwgdm0uZGF5VHlwZSk7XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUYXNrVG9MaXN0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFza0xpc3RcIiwgdm0udGFza0xpc3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlXCIpO1xyXG4gICAgICAgIHRhc2tzU2VydmljZS5uZXdUYXNrID0ge1xyXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB0YXNrTmFtZTogdm0uYWRkVGFza05hbWUsXHJcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKHZtLmFkZER1ZURhdGUpLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGFza3NTZXJ2aWNlLmFkZFRhc2sodGFza3NTZXJ2aWNlLm5ld1Rhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9wZW5FZGl0VGFzayh0YXNrKSB7XHJcbiAgICAgICAgdGFza3NTZXJ2aWNlLnNldE5ld1Rhc2sodGFzayk7XHJcbiAgICAgICAgLy8gdm0uZGF0YSA9IHRhc2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlU3RhdGUodGFzaykge1xyXG4gICAgICAgIHRhc2tzU2VydmljZS50b2dnbGVTdGF0ZSh0YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhckNvbXBsZXRlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsclwiKTtcclxuICAgICAgICB2bS50YXNrTGlzdCA9IF8uZmlsdGVyKHZtLnRhc2tMaXN0LCBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICByZXR1cm4gIXRhc2suY29tcGxldGVkO1xyXG4gICAgICAgICAgICAvLyBpZiAodGFzay5jb21wbGV0ZWQpIHtcclxuICAgICAgICAgICAgLy8gICAgIHZtLmRlbGV0ZVRhc2sodGFzayk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBmb3IgKGxldCB0YXNrIGluIHZtLnRhc2tMaXN0KSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiKlwiLCB0YXNrKTtcclxuICAgICAgICAvLyAgICAgaWYgKHZtLnRhc2tMaXN0W3Rhc2tdLmNvbXBsZXRlZCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdm0uZGVsZXRlVGFzayh2bS50YXNrTGlzdFt0YXNrXSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbXBsZXRlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsclwiKTtcclxuICAgICAgICB2bS50YXNrTGlzdCA9IF8uZmlsdGVyKHZtLnRhc2tMaXN0LCBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGFzay5jb21wbGV0ZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBzb3J0RGF0ZXdpc2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbHIgc29ydFwiKTtcclxuICAgICAgICB2bS50YXNrTGlzdCA9IF8uc29ydEJ5KHZtLnRhc2tMaXN0LCBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICByZXR1cm4gWyF0YXNrLmR1ZURhdGUsIHRhc2suZHVlRGF0ZSwgdGFzay5kYXRlXTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q2xhc3MoY2F0ZWdvcnkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAnYmFkZ2UtZGFuZ2VyJzogY2F0ZWdvcnkgPiA3LFxyXG4gICAgICAgICAgICAnYmFkZ2Utc2Vjb25kYXJ5JzogY2F0ZWdvcnkgPiA0ICYmIGNhdGVnb3J5IDwgOCxcclxuICAgICAgICAgICAgJ2JhZGdlLXdhcm5pbmcnOiBjYXRlZ29yeSA8IDVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gZ2V0Q2xhc3MoY2F0ZWdvcnkpIHtcclxuICAgIC8vICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgICAnbGFiZWwtaW1wb3J0YW50JzogY2F0ZWdvcnkgPiA3LFxyXG4gICAgLy8gICAgICAgICAnbGFiZWwtd2FybmluZyc6IGNhdGVnb3J5ID4gNCAmJiBjYXRlZ29yeSA8IDhcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tzQ29udHJvbGxlcjtcclxuIiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGEgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saW5rIG1pZFJpZ2h0TWFyZ2luXFxcIiB1aS1zcmVmPVxcXCJob21lLnRhc2tzLmFkZFxcXCI+XFxyXFxuICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1wbHVzIFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXHJcXG4gICAgPHNwYW4+QUREIFRBU0s8L3NwYW4+XFxyXFxuPC9hPlxcclxcbjxhIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGluayBmaWx0ZXJDbGFzc1xcXCIgbmctY2xpY2s9XFxcInZtLmNsZWFyQ29tcGxldGVkKClcXFwiPlxcclxcbiAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLWxpc3QtdWwgXFxcIj48L2k+XFxyXFxuICAgIDxzcGFuPkNMRUFSIENPTVBMRVRFRDwvc3Bhbj5cXHJcXG48L2E+XFxyXFxuPGEgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saW5rIGZpbHRlckNsYXNzXFxcIiBuZy1jbGljaz1cXFwidm0uZ2V0Q29tcGxldGVkKClcXFwiPlxcclxcbiAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLXRhc2tzXFxcIj48L2k+XFxyXFxuICAgIDxzcGFuPkdFVCBDT01QTEVURUQ8L3NwYW4+XFxyXFxuPC9hPlxcclxcblxcclxcbjxhIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGluayBmaWx0ZXJDbGFzc1xcXCIgbmctY2xpY2s9XFxcInZtLnNvcnREYXRld2lzZSgpXFxcIj5cXHJcXG4gICAgPGkgY2xhc3M9XFxcImZhcyBmYS1zb3J0LWFtb3VudC1kb3duLWFsdFxcXCI+PC9pPlxcclxcbiAgICA8c3Bhbj5TT1JUPC9zcGFuPlxcclxcbjwvYT5cXHJcXG48IS0tPGRpdiBjbGFzcz1cXFwiY2FyZCBkLWlubGluZS1mbGV4IHNoYWRvd1xcXCIgc3R5bGU9XFxcIndpZHRoOiAxMHJlbTtcXFwiIG5nLW1vdXNlb3Zlcj1cXFwidm0uZ2V0V2VhdGhlcigpO1xcXCI+LS0+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY2FyZCBkLWlubGluZS1mbGV4IHNoYWRvd1xcXCIgc3R5bGU9XFxcIndpZHRoOiAxMHJlbTtcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhcyBmYS1jbG91ZC1zdW4gZmEtMnggY2FyZC10aXRsZVxcXCI+PC9pPlxcclxcbiAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+XFxyXFxuICAgICAgICA8aDM+e3t2bS50ZW1wZXJhdHVyZX19PC9oMz48aDY+e3t2bS5kYXlUeXBlfX08L2g2PjwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPCEtLTxhIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biAgdGVtcGVyYXR1cmVDbGFzc1xcXCIgbmctbW91c2VvdmVyPVxcXCJ2bS5nZXRXZWF0aGVyKCk7XFxcIj4tLT5cXHJcXG48IS0tICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtY2xvdWQtc3VuIGZhLTJ4XFxcIj48L2k+LS0+XFxyXFxuPCEtLSAgICA8aDM+e3t2bS50ZW1wZXJhdHVyZX19PC9oMz48aDY+e3t2bS5kYXlUeXBlfX08L2g2Pi0tPlxcclxcbjwhLS08L2E+LS0+XFxyXFxuXFxyXFxuPCEtLTxkaXYgbmctbW91c2VvdmVyPVxcXCJ2bS5nZXRXZWF0aGVyKCk7XFxcIiA+LS0+XFxyXFxuPCEtLSAgICA8YSB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmsgdGVtcGVyYXR1cmVDbGFzc1xcXCI+LS0+XFxyXFxuPCEtLSAgICAgICAgPGkgY2xhc3M9XFxcImZhcyBmYS1jbG91ZC1zdW4gZmEtM3hcXFwiPjwvaT4tLT5cXHJcXG48IS0tICAgIDwvYT4tLT5cXHJcXG48IS0tPGgyPnt7dm0udGVtcGVyYXR1cmV9fTwvaDI+PGg1Pnt7dm0uZGF5VHlwZX19PC9oNT4tLT5cXHJcXG48IS0tPC9kaXY+LS0+XFxyXFxuXFxyXFxuXFxyXFxuPCEtLSZsdDshJm5kYXNoOyBNYXRlcmlhbCBpbmxpbmUgMSAmbmRhc2g7Jmd0Oy0tPlxcclxcbjwhLS0mbHQ7ISZuZGFzaDs8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrIFxcXCI+Jm5kYXNoOyZndDstLT5cXHJcXG48IS0tJmx0OyEmbmRhc2g7ICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIGlkPVxcXCJtYXRlcmlhbElubGluZTFcXFwiPiZuZGFzaDsmZ3Q7LS0+XFxyXFxuPCEtLSZsdDshJm5kYXNoOyAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwibWF0ZXJpYWxJbmxpbmUxXFxcIj4xPC9sYWJlbD4mbmRhc2g7Jmd0Oy0tPlxcclxcbjwhLS0mbHQ7ISZuZGFzaDs8L2Rpdj4mbmRhc2g7Jmd0Oy0tPlxcclxcbjx1bCBjbGFzcz1cXFwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXFxcIj5cXHJcXG4gICAgPCEtLSAgICA8bGkgbmctcmVwZWF0PVxcXCJ0YXNrIGluIHZtLnRhc2tMaXN0IHwgb3JkZXJCeTpbJyFkdWVEYXRlJywnZHVlRGF0ZSddIFxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbSBmb3JtLWNoZWNrXFxcIiA+LS0+XFxyXFxuICAgIDxsaSBuZy1yZXBlYXQ9XFxcInRhc2sgaW4gdm0udGFza0xpc3QgIFxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbSBmb3JtLWNoZWNrXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dCBcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiB2YWx1ZT1cXFwiXFxcIiBpZD1cXFwiaW52YWxpZENoZWNrXFxcIiBuZy1jbGljaz1cXFwidm0udG9nZ2xlU3RhdGUodGFzaylcXFwiXFxyXFxuICAgICAgICAgICAgICAgbmctY2hlY2tlZD1cXFwidGFzay5jb21wbGV0ZWRcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZSBwdWxsLXJpZ2h0XFxcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgbmctY2xpY2s9XFxcInZtLmRlbGV0ZVRhc2sodGFzaylcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gIGZsb2F0LXJpZ2h0XFxcIiBuZy1jbGljaz1cXFwidm0ub3BlbkVkaXRUYXNrKHRhc2spXFxcIiB1aS1zcmVmPVxcXCJob21lLnRhc2tzLmVkaXRcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtZWRpdFxcXCI+PC9pPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPCEtLSAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuICBmbG9hdC1yaWdodFxcXCIgPi0tPlxcclxcbiAgICAgICAgPCEtLSAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtZWRpdFxcXCI+PC9pPjwvYnV0dG9uPi0tPlxcclxcbiAgICAgICAgPHNwYW4gbmctY2xhc3M9XFxcIntzdHJpa2U6dGFzay5jb21wbGV0ZWR9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAge3t0YXNrLnRhc2tOYW1lIHwgdXBwZXJjYXNlfX1cXHJcXG4gICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwhLS0gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLXByaW1hcnlcXFwiID57e3Rhc2suZHVlRGF0ZX19PC9zcGFuPi0tPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXBpbGwgIFxcXCJcXHJcXG4gICAgICAgICAgICAgIG5nLWNsYXNzPVxcXCJ2bS5nZXRDbGFzcyh0YXNrLmNhdGVnb3J5KVxcXCI+e3t0YXNrLmR1ZURhdGV8IGRhdGU6J3l5eXktTU0tZGQnIH19PC9zcGFuPlxcclxcbiAgICAgICAgPCEtLSAgICAgICAgPHNwYW4gY2xhc3M9XFxcImxhYmVsIFxcXCIgbmctY2xhc3M9XFxcInZtLmdldENsYXNzKHRhc2suY2F0ZWdvcnkpXFxcIiA+e3t0YXNrLmR1ZURhdGV8IGRhdGU6J3l5eXktTU0tZGQnIH19PC9zcGFuPi0tPlxcclxcbiAgICA8L2xpPlxcclxcbjwvdWw+XCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7Il0sInNvdXJjZVJvb3QiOiIifQ==