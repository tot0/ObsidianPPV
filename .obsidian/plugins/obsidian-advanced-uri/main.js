'use strict';

var obsidian = require('obsidian');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var obsidian__default = /*#__PURE__*/_interopDefaultLegacy(obsidian);

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
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
    };
    return __assign.apply(this, arguments);
};

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

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

createCommonjsModule(function (module, exports) {
(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory();
})(typeof self !== 'undefined' ? self : commonjsGlobal, function() {
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/icons.json":
/*!*************************!*\
  !*** ./dist/icons.json ***!
  \*************************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
/***/ (function(module) {

module.exports = {"activity":"<polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"></polyline>","airplay":"<path d=\"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1\"></path><polygon points=\"12 15 17 21 7 21 12 15\"></polygon>","alert-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line>","alert-octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line>","alert-triangle":"<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line>","align-center":"<line x1=\"18\" y1=\"10\" x2=\"6\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"18\" y1=\"18\" x2=\"6\" y2=\"18\"></line>","align-justify":"<line x1=\"21\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"21\" y1=\"18\" x2=\"3\" y2=\"18\"></line>","align-left":"<line x1=\"17\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"17\" y1=\"18\" x2=\"3\" y2=\"18\"></line>","align-right":"<line x1=\"21\" y1=\"10\" x2=\"7\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"21\" y1=\"18\" x2=\"7\" y2=\"18\"></line>","anchor":"<circle cx=\"12\" cy=\"5\" r=\"3\"></circle><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"8\"></line><path d=\"M5 12H2a10 10 0 0 0 20 0h-3\"></path>","aperture":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"14.31\" y1=\"8\" x2=\"20.05\" y2=\"17.94\"></line><line x1=\"9.69\" y1=\"8\" x2=\"21.17\" y2=\"8\"></line><line x1=\"7.38\" y1=\"12\" x2=\"13.12\" y2=\"2.06\"></line><line x1=\"9.69\" y1=\"16\" x2=\"3.95\" y2=\"6.06\"></line><line x1=\"14.31\" y1=\"16\" x2=\"2.83\" y2=\"16\"></line><line x1=\"16.62\" y1=\"12\" x2=\"10.88\" y2=\"21.94\"></line>","archive":"<polyline points=\"21 8 21 21 3 21 3 8\"></polyline><rect x=\"1\" y=\"3\" width=\"22\" height=\"5\"></rect><line x1=\"10\" y1=\"12\" x2=\"14\" y2=\"12\"></line>","arrow-down-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"8 12 12 16 16 12\"></polyline><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line>","arrow-down-left":"<line x1=\"17\" y1=\"7\" x2=\"7\" y2=\"17\"></line><polyline points=\"17 17 7 17 7 7\"></polyline>","arrow-down-right":"<line x1=\"7\" y1=\"7\" x2=\"17\" y2=\"17\"></line><polyline points=\"17 7 17 17 7 17\"></polyline>","arrow-down":"<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><polyline points=\"19 12 12 19 5 12\"></polyline>","arrow-left-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 8 8 12 12 16\"></polyline><line x1=\"16\" y1=\"12\" x2=\"8\" y2=\"12\"></line>","arrow-left":"<line x1=\"19\" y1=\"12\" x2=\"5\" y2=\"12\"></line><polyline points=\"12 19 5 12 12 5\"></polyline>","arrow-right-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 16 16 12 12 8\"></polyline><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","arrow-right":"<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><polyline points=\"12 5 19 12 12 19\"></polyline>","arrow-up-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"16 12 12 8 8 12\"></polyline><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"8\"></line>","arrow-up-left":"<line x1=\"17\" y1=\"17\" x2=\"7\" y2=\"7\"></line><polyline points=\"7 17 7 7 17 7\"></polyline>","arrow-up-right":"<line x1=\"7\" y1=\"17\" x2=\"17\" y2=\"7\"></line><polyline points=\"7 7 17 7 17 17\"></polyline>","arrow-up":"<line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"5\"></line><polyline points=\"5 12 12 5 19 12\"></polyline>","at-sign":"<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94\"></path>","award":"<circle cx=\"12\" cy=\"8\" r=\"7\"></circle><polyline points=\"8.21 13.89 7 23 12 20 17 23 15.79 13.88\"></polyline>","bar-chart-2":"<line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"></line><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"></line>","bar-chart":"<line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"10\"></line><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"16\"></line>","battery-charging":"<path d=\"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19\"></path><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"></line><polyline points=\"11 6 7 12 13 12 9 18\"></polyline>","battery":"<rect x=\"1\" y=\"6\" width=\"18\" height=\"12\" rx=\"2\" ry=\"2\"></rect><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"></line>","bell-off":"<path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path><path d=\"M18.63 13A17.89 17.89 0 0 1 18 8\"></path><path d=\"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14\"></path><path d=\"M18 8a6 6 0 0 0-9.33-5\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","bell":"<path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path>","bluetooth":"<polyline points=\"6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5\"></polyline>","bold":"<path d=\"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\"></path><path d=\"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\"></path>","book-open":"<path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"></path><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"></path>","book":"<path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\"></path><path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\"></path>","bookmark":"<path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"></path>","box":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","briefcase":"<rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><path d=\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"></path>","calendar":"<rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line>","camera-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56\"></path>","camera":"<path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"></path><circle cx=\"12\" cy=\"13\" r=\"4\"></circle>","cast":"<path d=\"M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6\"></path><line x1=\"2\" y1=\"20\" x2=\"2.01\" y2=\"20\"></line>","check-circle":"<path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"></path><polyline points=\"22 4 12 14.01 9 11.01\"></polyline>","check-square":"<polyline points=\"9 11 12 14 22 4\"></polyline><path d=\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\"></path>","check":"<polyline points=\"20 6 9 17 4 12\"></polyline>","chevron-down":"<polyline points=\"6 9 12 15 18 9\"></polyline>","chevron-left":"<polyline points=\"15 18 9 12 15 6\"></polyline>","chevron-right":"<polyline points=\"9 18 15 12 9 6\"></polyline>","chevron-up":"<polyline points=\"18 15 12 9 6 15\"></polyline>","chevrons-down":"<polyline points=\"7 13 12 18 17 13\"></polyline><polyline points=\"7 6 12 11 17 6\"></polyline>","chevrons-left":"<polyline points=\"11 17 6 12 11 7\"></polyline><polyline points=\"18 17 13 12 18 7\"></polyline>","chevrons-right":"<polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline>","chevrons-up":"<polyline points=\"17 11 12 6 7 11\"></polyline><polyline points=\"17 18 12 13 7 18\"></polyline>","chrome":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"21.17\" y1=\"8\" x2=\"12\" y2=\"8\"></line><line x1=\"3.95\" y1=\"6.06\" x2=\"8.54\" y2=\"14\"></line><line x1=\"10.88\" y1=\"21.94\" x2=\"15.46\" y2=\"14\"></line>","circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle>","clipboard":"<path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path><rect x=\"8\" y=\"2\" width=\"8\" height=\"4\" rx=\"1\" ry=\"1\"></rect>","clock":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 16 14\"></polyline>","cloud-drizzle":"<line x1=\"8\" y1=\"19\" x2=\"8\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"15\"></line><line x1=\"16\" y1=\"19\" x2=\"16\" y2=\"21\"></line><line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"15\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"17\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>","cloud-lightning":"<path d=\"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9\"></path><polyline points=\"13 11 9 17 15 17 11 23\"></polyline>","cloud-off":"<path d=\"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","cloud-rain":"<line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"21\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"23\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>","cloud-snow":"<path d=\"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25\"></path><line x1=\"8\" y1=\"16\" x2=\"8.01\" y2=\"16\"></line><line x1=\"8\" y1=\"20\" x2=\"8.01\" y2=\"20\"></line><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line><line x1=\"12\" y1=\"22\" x2=\"12.01\" y2=\"22\"></line><line x1=\"16\" y1=\"16\" x2=\"16.01\" y2=\"16\"></line><line x1=\"16\" y1=\"20\" x2=\"16.01\" y2=\"20\"></line>","cloud":"<path d=\"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z\"></path>","code":"<polyline points=\"16 18 22 12 16 6\"></polyline><polyline points=\"8 6 2 12 8 18\"></polyline>","codepen":"<polygon points=\"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2\"></polygon><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"15.5\"></line><polyline points=\"22 8.5 12 15.5 2 8.5\"></polyline><polyline points=\"2 15.5 12 8.5 22 15.5\"></polyline><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"8.5\"></line>","codesandbox":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"7.5 4.21 12 6.81 16.5 4.21\"></polyline><polyline points=\"7.5 19.79 7.5 14.6 3 12\"></polyline><polyline points=\"21 12 16.5 14.6 16.5 19.79\"></polyline><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","coffee":"<path d=\"M18 8h1a4 4 0 0 1 0 8h-1\"></path><path d=\"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z\"></path><line x1=\"6\" y1=\"1\" x2=\"6\" y2=\"4\"></line><line x1=\"10\" y1=\"1\" x2=\"10\" y2=\"4\"></line><line x1=\"14\" y1=\"1\" x2=\"14\" y2=\"4\"></line>","columns":"<path d=\"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18\"></path>","command":"<path d=\"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z\"></path>","compass":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76\"></polygon>","copy":"<rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path>","corner-down-left":"<polyline points=\"9 10 4 15 9 20\"></polyline><path d=\"M20 4v7a4 4 0 0 1-4 4H4\"></path>","corner-down-right":"<polyline points=\"15 10 20 15 15 20\"></polyline><path d=\"M4 4v7a4 4 0 0 0 4 4h12\"></path>","corner-left-down":"<polyline points=\"14 15 9 20 4 15\"></polyline><path d=\"M20 4h-7a4 4 0 0 0-4 4v12\"></path>","corner-left-up":"<polyline points=\"14 9 9 4 4 9\"></polyline><path d=\"M20 20h-7a4 4 0 0 1-4-4V4\"></path>","corner-right-down":"<polyline points=\"10 15 15 20 20 15\"></polyline><path d=\"M4 4h7a4 4 0 0 1 4 4v12\"></path>","corner-right-up":"<polyline points=\"10 9 15 4 20 9\"></polyline><path d=\"M4 20h7a4 4 0 0 0 4-4V4\"></path>","corner-up-left":"<polyline points=\"9 14 4 9 9 4\"></polyline><path d=\"M20 20v-7a4 4 0 0 0-4-4H4\"></path>","corner-up-right":"<polyline points=\"15 14 20 9 15 4\"></polyline><path d=\"M4 20v-7a4 4 0 0 1 4-4h12\"></path>","cpu":"<rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" ry=\"2\"></rect><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect><line x1=\"9\" y1=\"1\" x2=\"9\" y2=\"4\"></line><line x1=\"15\" y1=\"1\" x2=\"15\" y2=\"4\"></line><line x1=\"9\" y1=\"20\" x2=\"9\" y2=\"23\"></line><line x1=\"15\" y1=\"20\" x2=\"15\" y2=\"23\"></line><line x1=\"20\" y1=\"9\" x2=\"23\" y2=\"9\"></line><line x1=\"20\" y1=\"14\" x2=\"23\" y2=\"14\"></line><line x1=\"1\" y1=\"9\" x2=\"4\" y2=\"9\"></line><line x1=\"1\" y1=\"14\" x2=\"4\" y2=\"14\"></line>","credit-card":"<rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\" ry=\"2\"></rect><line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"></line>","crop":"<path d=\"M6.13 1L6 16a2 2 0 0 0 2 2h15\"></path><path d=\"M1 6.13L16 6a2 2 0 0 1 2 2v15\"></path>","crosshair":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"22\" y1=\"12\" x2=\"18\" y2=\"12\"></line><line x1=\"6\" y1=\"12\" x2=\"2\" y2=\"12\"></line><line x1=\"12\" y1=\"6\" x2=\"12\" y2=\"2\"></line><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"18\"></line>","database":"<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"></ellipse><path d=\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\"></path><path d=\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\"></path>","delete":"<path d=\"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\"></path><line x1=\"18\" y1=\"9\" x2=\"12\" y2=\"15\"></line><line x1=\"12\" y1=\"9\" x2=\"18\" y2=\"15\"></line>","disc":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>","divide-circle":"<line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line><circle cx=\"12\" cy=\"12\" r=\"10\"></circle>","divide-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line>","divide":"<circle cx=\"12\" cy=\"6\" r=\"2\"></circle><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><circle cx=\"12\" cy=\"18\" r=\"2\"></circle>","dollar-sign":"<line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"></line><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"></path>","download-cloud":"<polyline points=\"8 17 12 21 16 17\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29\"></path>","download":"<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line>","dribbble":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32\"></path>","droplet":"<path d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\"></path>","edit-2":"<path d=\"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z\"></path>","edit-3":"<path d=\"M12 20h9\"></path><path d=\"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z\"></path>","edit":"<path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"></path>","external-link":"<path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path><polyline points=\"15 3 21 3 21 9\"></polyline><line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"></line>","eye-off":"<path d=\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","eye":"<path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>","facebook":"<path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path>","fast-forward":"<polygon points=\"13 19 22 12 13 5 13 19\"></polygon><polygon points=\"2 19 11 12 2 5 2 19\"></polygon>","feather":"<path d=\"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z\"></path><line x1=\"16\" y1=\"8\" x2=\"2\" y2=\"22\"></line><line x1=\"17.5\" y1=\"15\" x2=\"9\" y2=\"15\"></line>","figma":"<path d=\"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z\"></path><path d=\"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z\"></path><path d=\"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z\"></path>","file-minus":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line>","file-plus":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"12\"></line><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line>","file-text":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline>","file":"<path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path><polyline points=\"13 2 13 9 20 9\"></polyline>","film":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2.18\" ry=\"2.18\"></rect><line x1=\"7\" y1=\"2\" x2=\"7\" y2=\"22\"></line><line x1=\"17\" y1=\"2\" x2=\"17\" y2=\"22\"></line><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"2\" y1=\"7\" x2=\"7\" y2=\"7\"></line><line x1=\"2\" y1=\"17\" x2=\"7\" y2=\"17\"></line><line x1=\"17\" y1=\"17\" x2=\"22\" y2=\"17\"></line><line x1=\"17\" y1=\"7\" x2=\"22\" y2=\"7\"></line>","filter":"<polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"></polygon>","flag":"<path d=\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\"></path><line x1=\"4\" y1=\"22\" x2=\"4\" y2=\"15\"></line>","folder-minus":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"></line>","folder-plus":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path><line x1=\"12\" y1=\"11\" x2=\"12\" y2=\"17\"></line><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"></line>","folder":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path>","framer":"<path d=\"M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7\"></path>","frown":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M16 16s-1.5-2-4-2-4 2-4 2\"></path><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","gift":"<polyline points=\"20 12 20 22 4 22 4 12\"></polyline><rect x=\"2\" y=\"7\" width=\"20\" height=\"5\"></rect><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"7\"></line><path d=\"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z\"></path><path d=\"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z\"></path>","git-branch":"<line x1=\"6\" y1=\"3\" x2=\"6\" y2=\"15\"></line><circle cx=\"18\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><path d=\"M18 9a9 9 0 0 1-9 9\"></path>","git-commit":"<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"1.05\" y1=\"12\" x2=\"7\" y2=\"12\"></line><line x1=\"17.01\" y1=\"12\" x2=\"22.96\" y2=\"12\"></line>","git-merge":"<circle cx=\"18\" cy=\"18\" r=\"3\"></circle><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M6 21V9a9 9 0 0 0 9 9\"></path>","git-pull-request":"<circle cx=\"18\" cy=\"18\" r=\"3\"></circle><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M13 6h3a2 2 0 0 1 2 2v7\"></path><line x1=\"6\" y1=\"9\" x2=\"6\" y2=\"21\"></line>","github":"<path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path>","gitlab":"<path d=\"M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z\"></path>","globe":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"></path>","grid":"<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"></rect><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"></rect>","hard-drive":"<line x1=\"22\" y1=\"12\" x2=\"2\" y2=\"12\"></line><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path><line x1=\"6\" y1=\"16\" x2=\"6.01\" y2=\"16\"></line><line x1=\"10\" y1=\"16\" x2=\"10.01\" y2=\"16\"></line>","hash":"<line x1=\"4\" y1=\"9\" x2=\"20\" y2=\"9\"></line><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"></line><line x1=\"10\" y1=\"3\" x2=\"8\" y2=\"21\"></line><line x1=\"16\" y1=\"3\" x2=\"14\" y2=\"21\"></line>","headphones":"<path d=\"M3 18v-6a9 9 0 0 1 18 0v6\"></path><path d=\"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z\"></path>","heart":"<path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"></path>","help-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"></path><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line>","hexagon":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path>","home":"<path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline>","image":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"></circle><polyline points=\"21 15 16 10 5 21\"></polyline>","inbox":"<polyline points=\"22 12 16 12 14 15 10 15 8 12 2 12\"></polyline><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path>","info":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12.01\" y2=\"8\"></line>","instagram":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\" ry=\"5\"></rect><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path><line x1=\"17.5\" y1=\"6.5\" x2=\"17.51\" y2=\"6.5\"></line>","italic":"<line x1=\"19\" y1=\"4\" x2=\"10\" y2=\"4\"></line><line x1=\"14\" y1=\"20\" x2=\"5\" y2=\"20\"></line><line x1=\"15\" y1=\"4\" x2=\"9\" y2=\"20\"></line>","key":"<path d=\"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4\"></path>","layers":"<polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon><polyline points=\"2 17 12 22 22 17\"></polyline><polyline points=\"2 12 12 17 22 12\"></polyline>","layout":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"3\" y1=\"9\" x2=\"21\" y2=\"9\"></line><line x1=\"9\" y1=\"21\" x2=\"9\" y2=\"9\"></line>","life-buoy":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"4.93\" y1=\"4.93\" x2=\"9.17\" y2=\"9.17\"></line><line x1=\"14.83\" y1=\"14.83\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"14.83\" y1=\"9.17\" x2=\"19.07\" y2=\"4.93\"></line><line x1=\"14.83\" y1=\"9.17\" x2=\"18.36\" y2=\"5.64\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"9.17\" y2=\"14.83\"></line>","link-2":"<path d=\"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3\"></path><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","link":"<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"></path><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"></path>","linkedin":"<path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect><circle cx=\"4\" cy=\"4\" r=\"2\"></circle>","list":"<line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\"></line><line x1=\"3\" y1=\"6\" x2=\"3.01\" y2=\"6\"></line><line x1=\"3\" y1=\"12\" x2=\"3.01\" y2=\"12\"></line><line x1=\"3\" y1=\"18\" x2=\"3.01\" y2=\"18\"></line>","loader":"<line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"6\"></line><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"22\"></line><line x1=\"4.93\" y1=\"4.93\" x2=\"7.76\" y2=\"7.76\"></line><line x1=\"16.24\" y1=\"16.24\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"2\" y1=\"12\" x2=\"6\" y2=\"12\"></line><line x1=\"18\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"7.76\" y2=\"16.24\"></line><line x1=\"16.24\" y1=\"7.76\" x2=\"19.07\" y2=\"4.93\"></line>","lock":"<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></path>","log-in":"<path d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\"></path><polyline points=\"10 17 15 12 10 7\"></polyline><line x1=\"15\" y1=\"12\" x2=\"3\" y2=\"12\"></line>","log-out":"<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path><polyline points=\"16 17 21 12 16 7\"></polyline><line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"></line>","mail":"<path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"></path><polyline points=\"22,6 12,13 2,6\"></polyline>","map-pin":"<path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle>","map":"<polygon points=\"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6\"></polygon><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"18\"></line><line x1=\"16\" y1=\"6\" x2=\"16\" y2=\"22\"></line>","maximize-2":"<polyline points=\"15 3 21 3 21 9\"></polyline><polyline points=\"9 21 3 21 3 15\"></polyline><line x1=\"21\" y1=\"3\" x2=\"14\" y2=\"10\"></line><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"></line>","maximize":"<path d=\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\"></path>","meh":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"8\" y1=\"15\" x2=\"16\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","menu":"<line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"></line>","message-circle":"<path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"></path>","message-square":"<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path>","mic-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6\"></path><path d=\"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23\"></path><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>","mic":"<path d=\"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z\"></path><path d=\"M19 10v2a7 7 0 0 1-14 0v-2\"></path><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>","minimize-2":"<polyline points=\"4 14 10 14 10 20\"></polyline><polyline points=\"20 10 14 10 14 4\"></polyline><line x1=\"14\" y1=\"10\" x2=\"21\" y2=\"3\"></line><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"></line>","minimize":"<path d=\"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3\"></path>","minus-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","minus-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","minus":"<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>","monitor":"<rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"></line><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"></line>","moon":"<path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path>","more-horizontal":"<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle>","more-vertical":"<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"12\" cy=\"5\" r=\"1\"></circle><circle cx=\"12\" cy=\"19\" r=\"1\"></circle>","mouse-pointer":"<path d=\"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z\"></path><path d=\"M13 13l6 6\"></path>","move":"<polyline points=\"5 9 2 12 5 15\"></polyline><polyline points=\"9 5 12 2 15 5\"></polyline><polyline points=\"15 19 12 22 9 19\"></polyline><polyline points=\"19 9 22 12 19 15\"></polyline><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"22\"></line>","music":"<path d=\"M9 18V5l12-2v13\"></path><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><circle cx=\"18\" cy=\"16\" r=\"3\"></circle>","navigation-2":"<polygon points=\"12 2 19 21 12 17 5 21 12 2\"></polygon>","navigation":"<polygon points=\"3 11 22 2 13 21 11 13 3 11\"></polygon>","octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon>","package":"<line x1=\"16.5\" y1=\"9.4\" x2=\"7.5\" y2=\"4.21\"></line><path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","paperclip":"<path d=\"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48\"></path>","pause-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"10\" y1=\"15\" x2=\"10\" y2=\"9\"></line><line x1=\"14\" y1=\"15\" x2=\"14\" y2=\"9\"></line>","pause":"<rect x=\"6\" y=\"4\" width=\"4\" height=\"16\"></rect><rect x=\"14\" y=\"4\" width=\"4\" height=\"16\"></rect>","pen-tool":"<path d=\"M12 19l7-7 3 3-7 7-3-3z\"></path><path d=\"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z\"></path><path d=\"M2 2l7.586 7.586\"></path><circle cx=\"11\" cy=\"11\" r=\"2\"></circle>","percent":"<line x1=\"19\" y1=\"5\" x2=\"5\" y2=\"19\"></line><circle cx=\"6.5\" cy=\"6.5\" r=\"2.5\"></circle><circle cx=\"17.5\" cy=\"17.5\" r=\"2.5\"></circle>","phone-call":"<path d=\"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-forwarded":"<polyline points=\"19 1 23 5 19 9\"></polyline><line x1=\"15\" y1=\"5\" x2=\"23\" y2=\"5\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-incoming":"<polyline points=\"16 2 16 8 22 8\"></polyline><line x1=\"23\" y1=\"1\" x2=\"16\" y2=\"8\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-missed":"<line x1=\"23\" y1=\"1\" x2=\"17\" y2=\"7\"></line><line x1=\"17\" y1=\"1\" x2=\"23\" y2=\"7\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-off":"<path d=\"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91\"></path><line x1=\"23\" y1=\"1\" x2=\"1\" y2=\"23\"></line>","phone-outgoing":"<polyline points=\"23 7 23 1 17 1\"></polyline><line x1=\"16\" y1=\"8\" x2=\"23\" y2=\"1\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone":"<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","pie-chart":"<path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"></path><path d=\"M22 12A10 10 0 0 0 12 2v10z\"></path>","play-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"10 8 16 12 10 16 10 8\"></polygon>","play":"<polygon points=\"5 3 19 12 5 21 5 3\"></polygon>","plus-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","plus-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","plus":"<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>","pocket":"<path d=\"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z\"></path><polyline points=\"8 10 12 14 16 10\"></polyline>","power":"<path d=\"M18.36 6.64a9 9 0 1 1-12.73 0\"></path><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"12\"></line>","printer":"<polyline points=\"6 9 6 2 18 2 18 9\"></polyline><path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"></path><rect x=\"6\" y=\"14\" width=\"12\" height=\"8\"></rect>","radio":"<circle cx=\"12\" cy=\"12\" r=\"2\"></circle><path d=\"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14\"></path>","refresh-ccw":"<polyline points=\"1 4 1 10 7 10\"></polyline><polyline points=\"23 20 23 14 17 14\"></polyline><path d=\"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15\"></path>","refresh-cw":"<polyline points=\"23 4 23 10 17 10\"></polyline><polyline points=\"1 20 1 14 7 14\"></polyline><path d=\"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15\"></path>","repeat":"<polyline points=\"17 1 21 5 17 9\"></polyline><path d=\"M3 11V9a4 4 0 0 1 4-4h14\"></path><polyline points=\"7 23 3 19 7 15\"></polyline><path d=\"M21 13v2a4 4 0 0 1-4 4H3\"></path>","rewind":"<polygon points=\"11 19 2 12 11 5 11 19\"></polygon><polygon points=\"22 19 13 12 22 5 22 19\"></polygon>","rotate-ccw":"<polyline points=\"1 4 1 10 7 10\"></polyline><path d=\"M3.51 15a9 9 0 1 0 2.13-9.36L1 10\"></path>","rotate-cw":"<polyline points=\"23 4 23 10 17 10\"></polyline><path d=\"M20.49 15a9 9 0 1 1-2.12-9.36L23 10\"></path>","rss":"<path d=\"M4 11a9 9 0 0 1 9 9\"></path><path d=\"M4 4a16 16 0 0 1 16 16\"></path><circle cx=\"5\" cy=\"19\" r=\"1\"></circle>","save":"<path d=\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\"></path><polyline points=\"17 21 17 13 7 13 7 21\"></polyline><polyline points=\"7 3 7 8 15 8\"></polyline>","scissors":"<circle cx=\"6\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><line x1=\"20\" y1=\"4\" x2=\"8.12\" y2=\"15.88\"></line><line x1=\"14.47\" y1=\"14.48\" x2=\"20\" y2=\"20\"></line><line x1=\"8.12\" y1=\"8.12\" x2=\"12\" y2=\"12\"></line>","search":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line>","send":"<line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"13\"></line><polygon points=\"22 2 15 22 11 13 2 9 22 2\"></polygon>","server":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"></rect><rect x=\"2\" y=\"14\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"></rect><line x1=\"6\" y1=\"6\" x2=\"6.01\" y2=\"6\"></line><line x1=\"6\" y1=\"18\" x2=\"6.01\" y2=\"18\"></line>","settings":"<circle cx=\"12\" cy=\"12\" r=\"3\"></circle><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"></path>","share-2":"<circle cx=\"18\" cy=\"5\" r=\"3\"></circle><circle cx=\"6\" cy=\"12\" r=\"3\"></circle><circle cx=\"18\" cy=\"19\" r=\"3\"></circle><line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"></line><line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"></line>","share":"<path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"></path><polyline points=\"16 6 12 2 8 6\"></polyline><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"></line>","shield-off":"<path d=\"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18\"></path><path d=\"M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","shield":"<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"></path>","shopping-bag":"<path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"></path><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><path d=\"M16 10a4 4 0 0 1-8 0\"></path>","shopping-cart":"<circle cx=\"9\" cy=\"21\" r=\"1\"></circle><circle cx=\"20\" cy=\"21\" r=\"1\"></circle><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>","shuffle":"<polyline points=\"16 3 21 3 21 8\"></polyline><line x1=\"4\" y1=\"20\" x2=\"21\" y2=\"3\"></line><polyline points=\"21 16 21 21 16 21\"></polyline><line x1=\"15\" y1=\"15\" x2=\"21\" y2=\"21\"></line><line x1=\"4\" y1=\"4\" x2=\"9\" y2=\"9\"></line>","sidebar":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" y1=\"3\" x2=\"9\" y2=\"21\"></line>","skip-back":"<polygon points=\"19 20 9 12 19 4 19 20\"></polygon><line x1=\"5\" y1=\"19\" x2=\"5\" y2=\"5\"></line>","skip-forward":"<polygon points=\"5 4 15 12 5 20 5 4\"></polygon><line x1=\"19\" y1=\"5\" x2=\"19\" y2=\"19\"></line>","slack":"<path d=\"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z\"></path><path d=\"M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path><path d=\"M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z\"></path><path d=\"M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z\"></path><path d=\"M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z\"></path><path d=\"M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z\"></path><path d=\"M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z\"></path><path d=\"M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z\"></path>","slash":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"4.93\" y1=\"4.93\" x2=\"19.07\" y2=\"19.07\"></line>","sliders":"<line x1=\"4\" y1=\"21\" x2=\"4\" y2=\"14\"></line><line x1=\"4\" y1=\"10\" x2=\"4\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"3\"></line><line x1=\"20\" y1=\"21\" x2=\"20\" y2=\"16\"></line><line x1=\"20\" y1=\"12\" x2=\"20\" y2=\"3\"></line><line x1=\"1\" y1=\"14\" x2=\"7\" y2=\"14\"></line><line x1=\"9\" y1=\"8\" x2=\"15\" y2=\"8\"></line><line x1=\"17\" y1=\"16\" x2=\"23\" y2=\"16\"></line>","smartphone":"<rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line>","smile":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M8 14s1.5 2 4 2 4-2 4-2\"></path><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","speaker":"<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"></rect><circle cx=\"12\" cy=\"14\" r=\"4\"></circle><line x1=\"12\" y1=\"6\" x2=\"12.01\" y2=\"6\"></line>","square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>","star":"<polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"></polygon>","stop-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect>","sun":"<circle cx=\"12\" cy=\"12\" r=\"5\"></circle><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line>","sunrise":"<path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"9\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"8 6 12 2 16 6\"></polyline>","sunset":"<path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"2\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"16 5 12 9 8 5\"></polyline>","tablet":"<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line>","tag":"<path d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\"></path><line x1=\"7\" y1=\"7\" x2=\"7.01\" y2=\"7\"></line>","target":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle>","terminal":"<polyline points=\"4 17 10 11 4 5\"></polyline><line x1=\"12\" y1=\"19\" x2=\"20\" y2=\"19\"></line>","thermometer":"<path d=\"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z\"></path>","thumbs-down":"<path d=\"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17\"></path>","thumbs-up":"<path d=\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\"></path>","toggle-left":"<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"></rect><circle cx=\"8\" cy=\"12\" r=\"3\"></circle>","toggle-right":"<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"></rect><circle cx=\"16\" cy=\"12\" r=\"3\"></circle>","tool":"<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"></path>","trash-2":"<polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line>","trash":"<polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>","trello":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><rect x=\"7\" y=\"7\" width=\"3\" height=\"9\"></rect><rect x=\"14\" y=\"7\" width=\"3\" height=\"5\"></rect>","trending-down":"<polyline points=\"23 18 13.5 8.5 8.5 13.5 1 6\"></polyline><polyline points=\"17 18 23 18 23 12\"></polyline>","trending-up":"<polyline points=\"23 6 13.5 15.5 8.5 10.5 1 18\"></polyline><polyline points=\"17 6 23 6 23 12\"></polyline>","triangle":"<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path>","truck":"<rect x=\"1\" y=\"3\" width=\"15\" height=\"13\"></rect><polygon points=\"16 8 20 8 23 11 23 16 16 16 16 8\"></polygon><circle cx=\"5.5\" cy=\"18.5\" r=\"2.5\"></circle><circle cx=\"18.5\" cy=\"18.5\" r=\"2.5\"></circle>","tv":"<rect x=\"2\" y=\"7\" width=\"20\" height=\"15\" rx=\"2\" ry=\"2\"></rect><polyline points=\"17 2 12 7 7 2\"></polyline>","twitch":"<path d=\"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7\"></path>","twitter":"<path d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"></path>","type":"<polyline points=\"4 7 4 4 20 4 20 7\"></polyline><line x1=\"9\" y1=\"20\" x2=\"15\" y2=\"20\"></line><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"20\"></line>","umbrella":"<path d=\"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7\"></path>","underline":"<path d=\"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3\"></path><line x1=\"4\" y1=\"21\" x2=\"20\" y2=\"21\"></line>","unlock":"<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 9.9-1\"></path>","upload-cloud":"<polyline points=\"16 16 12 12 8 16\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3\"></path><polyline points=\"16 16 12 12 8 16\"></polyline>","upload":"<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"17 8 12 3 7 8\"></polyline><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"></line>","user-check":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><polyline points=\"17 11 19 13 23 9\"></polyline>","user-minus":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"></line>","user-plus":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"20\" y1=\"8\" x2=\"20\" y2=\"14\"></line><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"></line>","user-x":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"18\" y1=\"8\" x2=\"23\" y2=\"13\"></line><line x1=\"23\" y1=\"8\" x2=\"18\" y2=\"13\"></line>","user":"<path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle>","users":"<path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>","video-off":"<path d=\"M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","video":"<polygon points=\"23 7 16 12 23 17 23 7\"></polygon><rect x=\"1\" y=\"5\" width=\"15\" height=\"14\" rx=\"2\" ry=\"2\"></rect>","voicemail":"<circle cx=\"5.5\" cy=\"11.5\" r=\"4.5\"></circle><circle cx=\"18.5\" cy=\"11.5\" r=\"4.5\"></circle><line x1=\"5.5\" y1=\"16\" x2=\"18.5\" y2=\"16\"></line>","volume-1":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><path d=\"M15.54 8.46a5 5 0 0 1 0 7.07\"></path>","volume-2":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><path d=\"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\"></path>","volume-x":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><line x1=\"23\" y1=\"9\" x2=\"17\" y2=\"15\"></line><line x1=\"17\" y1=\"9\" x2=\"23\" y2=\"15\"></line>","volume":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon>","watch":"<circle cx=\"12\" cy=\"12\" r=\"7\"></circle><polyline points=\"12 9 12 12 13.5 13.5\"></polyline><path d=\"M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83\"></path>","wifi-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M16.72 11.06A10.94 10.94 0 0 1 19 12.55\"></path><path d=\"M5 12.55a10.94 10.94 0 0 1 5.17-2.39\"></path><path d=\"M10.71 5.05A16 16 0 0 1 22.58 9\"></path><path d=\"M1.42 9a15.91 15.91 0 0 1 4.7-2.88\"></path><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"></line>","wifi":"<path d=\"M5 12.55a11 11 0 0 1 14.08 0\"></path><path d=\"M1.42 9a16 16 0 0 1 21.16 0\"></path><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"></line>","wind":"<path d=\"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2\"></path>","x-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line>","x-octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line>","x-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line>","x":"<line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line>","youtube":"<path d=\"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z\"></path><polygon points=\"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02\"></polygon>","zap-off":"<polyline points=\"12.41 6.75 13 2 10.57 4.92\"></polyline><polyline points=\"18.57 12.91 21 10 15.66 10\"></polyline><polyline points=\"8 8 3 14 12 14 11 22 16 16\"></polyline><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","zap":"<polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon>","zoom-in":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line><line x1=\"11\" y1=\"8\" x2=\"11\" y2=\"14\"></line><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"></line>","zoom-out":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"></line>"};

/***/ }),

/***/ "./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

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
					list.push(k);
				}
			}

			return list.join(' ');
		}

		return _classNames;
	})();

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
}());


/***/ }),

/***/ "./node_modules/core-js/es/array/from.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/es/array/from.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! ../../modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");

module.exports = path.Array.from;


/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var index = 0;
  var iteratorMethod = getIteratorMethod(O);
  var length, result, step, iterator;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    result = new C();
    for (;!(step = iterator.next()).done; index++) {
      createProperty(result, index, mapping
        ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
        : step.value
      );
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
// false -> Array#indexOf
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
// true  -> Array#includes
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          hide(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    hide(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var exist = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return exist ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      hide(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == O && globalThis) ||
  check(typeof window == O && window) ||
  check(typeof self == O && self) ||
  check(typeof global == O && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")));

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var document = global.document;

module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var key;
  while (length > i) definePropertyModule.f(O, key = keys[i++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayIncludes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var arrayIndexOf = arrayIncludes(false);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var validateSetPrototypeOfArguments = __webpack_require__(/*! ../internals/validate-set-prototype-of-arguments */ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var correctSetter = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    correctSetter = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    validateSetPrototypeOfArguments(O, proto);
    if (correctSetter) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var Reflect = global.Reflect;

// all object keys, includes non-enumerable and symbols
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else hide(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.1.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-at.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/string-at.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// CONVERT_TO_STRING: true  -> String#at
// CONVERT_TO_STRING: false -> String#codePointAt
module.exports = function (that, pos, CONVERT_TO_STRING) {
  var S = String(requireObjectCoercible(that));
  var position = toInteger(pos);
  var size = S.length;
  var first, second;
  if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
  first = S.charCodeAt(position);
  return first < 0xD800 || first > 0xDBFF || position + 1 === size
    || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
      ? CONVERT_TO_STRING ? S.charAt(position) : first
      : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// 7.1.1 ToPrimitive(input [, PreferredType])
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

module.exports = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) {
    throw TypeError("Can't set " + String(proto) + ' as a prototype');
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var codePointAt = __webpack_require__(/*! ../internals/string-at */ "./node_modules/core-js/internals/string-at.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = codePointAt(string, index, true);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/default-attrs.json":
/*!********************************!*\
  !*** ./src/default-attrs.json ***!
  \********************************/
/*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
/***/ (function(module) {

module.exports = {"xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

var _dedupe2 = _interopRequireDefault(_dedupe);

var _defaultAttrs = __webpack_require__(/*! ./default-attrs.json */ "./src/default-attrs.json");

var _defaultAttrs2 = _interopRequireDefault(_defaultAttrs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Icon = function () {
  function Icon(name, contents) {
    var tags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, Icon);

    this.name = name;
    this.contents = contents;
    this.tags = tags;
    this.attrs = _extends({}, _defaultAttrs2.default, { class: 'feather feather-' + name });
  }

  /**
   * Create an SVG string.
   * @param {Object} attrs
   * @returns {string}
   */


  _createClass(Icon, [{
    key: 'toSvg',
    value: function toSvg() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var combinedAttrs = _extends({}, this.attrs, attrs, { class: (0, _dedupe2.default)(this.attrs.class, attrs.class) });

      return '<svg ' + attrsToString(combinedAttrs) + '>' + this.contents + '</svg>';
    }

    /**
     * Return string representation of an `Icon`.
     *
     * Added for backward compatibility. If old code expects `feather.icons.<name>`
     * to be a string, `toString()` will get implicitly called.
     *
     * @returns {string}
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.contents;
    }
  }]);

  return Icon;
}();

/**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attrs
 * @returns {string}
 */


function attrsToString(attrs) {
  return Object.keys(attrs).map(function (key) {
    return key + '="' + attrs[key] + '"';
  }).join(' ');
}

exports.default = Icon;

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(/*! ./icon */ "./src/icon.js");

var _icon2 = _interopRequireDefault(_icon);

var _icons = __webpack_require__(/*! ../dist/icons.json */ "./dist/icons.json");

var _icons2 = _interopRequireDefault(_icons);

var _tags = __webpack_require__(/*! ./tags.json */ "./src/tags.json");

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.keys(_icons2.default).map(function (key) {
  return new _icon2.default(key, _icons2.default[key], _tags2.default[key]);
}).reduce(function (object, icon) {
  object[icon.name] = icon;
  return object;
}, {});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

var _toSvg = __webpack_require__(/*! ./to-svg */ "./src/to-svg.js");

var _toSvg2 = _interopRequireDefault(_toSvg);

var _replace = __webpack_require__(/*! ./replace */ "./src/replace.js");

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { icons: _icons2.default, toSvg: _toSvg2.default, replace: _replace2.default };

/***/ }),

/***/ "./src/replace.js":
/*!************************!*\
  !*** ./src/replace.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-env browser */


var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

var _dedupe2 = _interopRequireDefault(_dedupe);

var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Replace all HTML elements that have a `data-feather` attribute with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {Object} attrs
 */
function replace() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (typeof document === 'undefined') {
    throw new Error('`feather.replace()` only works in a browser environment.');
  }

  var elementsToReplace = document.querySelectorAll('[data-feather]');

  Array.from(elementsToReplace).forEach(function (element) {
    return replaceElement(element, attrs);
  });
}

/**
 * Replace a single HTML element with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {HTMLElement} element
 * @param {Object} attrs
 */
function replaceElement(element) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var elementAttrs = getAttrs(element);
  var name = elementAttrs['data-feather'];
  delete elementAttrs['data-feather'];

  var svgString = _icons2.default[name].toSvg(_extends({}, attrs, elementAttrs, { class: (0, _dedupe2.default)(attrs.class, elementAttrs.class) }));
  var svgDocument = new DOMParser().parseFromString(svgString, 'image/svg+xml');
  var svgElement = svgDocument.querySelector('svg');

  element.parentNode.replaceChild(svgElement, element);
}

/**
 * Get the attributes of an HTML element.
 * @param {HTMLElement} element
 * @returns {Object}
 */
function getAttrs(element) {
  return Array.from(element.attributes).reduce(function (attrs, attr) {
    attrs[attr.name] = attr.value;
    return attrs;
  }, {});
}

exports.default = replace;

/***/ }),

/***/ "./src/tags.json":
/*!***********************!*\
  !*** ./src/tags.json ***!
  \***********************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-bouy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
/***/ (function(module) {

module.exports = {"activity":["pulse","health","action","motion"],"airplay":["stream","cast","mirroring"],"alert-circle":["warning","alert","danger"],"alert-octagon":["warning","alert","danger"],"alert-triangle":["warning","alert","danger"],"align-center":["text alignment","center"],"align-justify":["text alignment","justified"],"align-left":["text alignment","left"],"align-right":["text alignment","right"],"anchor":[],"archive":["index","box"],"at-sign":["mention","at","email","message"],"award":["achievement","badge"],"aperture":["camera","photo"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],"battery":["power","electricity"],"battery-charging":["power","electricity"],"bell":["alarm","notification","sound"],"bell-off":["alarm","notification","silent"],"bluetooth":["wireless"],"book-open":["read","library"],"book":["read","dictionary","booklet","magazine","library"],"bookmark":["read","clip","marker","tag"],"box":["cube"],"briefcase":["work","bag","baggage","folder"],"calendar":["date"],"camera":["photo"],"cast":["chromecast","airplay"],"circle":["off","zero","record"],"clipboard":["copy"],"clock":["time","watch","alarm"],"cloud-drizzle":["weather","shower"],"cloud-lightning":["weather","bolt"],"cloud-rain":["weather"],"cloud-snow":["weather","blizzard"],"cloud":["weather"],"codepen":["logo"],"codesandbox":["logo"],"code":["source","programming"],"coffee":["drink","cup","mug","tea","cafe","hot","beverage"],"columns":["layout"],"command":["keyboard","cmd","terminal","prompt"],"compass":["navigation","safari","travel","direction"],"copy":["clone","duplicate"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],"cpu":["processor","technology"],"credit-card":["purchase","payment","cc"],"crop":["photo","image"],"crosshair":["aim","target"],"database":["storage","memory"],"delete":["remove"],"disc":["album","cd","dvd","music"],"dollar-sign":["currency","money","payment"],"droplet":["water"],"edit":["pencil","change"],"edit-2":["pencil","change"],"edit-3":["pencil","change"],"eye":["view","watch"],"eye-off":["view","watch","hide","hidden"],"external-link":["outbound"],"facebook":["logo","social"],"fast-forward":["music"],"figma":["logo","design","tool"],"file-minus":["delete","remove","erase"],"file-plus":["add","create","new"],"file-text":["data","txt","pdf"],"film":["movie","video"],"filter":["funnel","hopper"],"flag":["report"],"folder-minus":["directory"],"folder-plus":["directory"],"folder":["directory"],"framer":["logo","design","tool"],"frown":["emoji","face","bad","sad","emotion"],"gift":["present","box","birthday","party"],"git-branch":["code","version control"],"git-commit":["code","version control"],"git-merge":["code","version control"],"git-pull-request":["code","version control"],"github":["logo","version control"],"gitlab":["logo","version control"],"globe":["world","browser","language","translate"],"hard-drive":["computer","server","memory","data"],"hash":["hashtag","number","pound"],"headphones":["music","audio","sound"],"heart":["like","love","emotion"],"help-circle":["question mark"],"hexagon":["shape","node.js","logo"],"home":["house","living"],"image":["picture"],"inbox":["email"],"instagram":["logo","camera"],"key":["password","login","authentication","secure"],"layers":["stack"],"layout":["window","webpage"],"life-bouy":["help","life ring","support"],"link":["chain","url"],"link-2":["chain","url"],"linkedin":["logo","social media"],"list":["options"],"lock":["security","password","secure"],"log-in":["sign in","arrow","enter"],"log-out":["sign out","arrow","exit"],"mail":["email","message"],"map-pin":["location","navigation","travel","marker"],"map":["location","navigation","travel"],"maximize":["fullscreen"],"maximize-2":["fullscreen","arrows","expand"],"meh":["emoji","face","neutral","emotion"],"menu":["bars","navigation","hamburger"],"message-circle":["comment","chat"],"message-square":["comment","chat"],"mic-off":["record","sound","mute"],"mic":["record","sound","listen"],"minimize":["exit fullscreen","close"],"minimize-2":["exit fullscreen","arrows","close"],"minus":["subtract"],"monitor":["tv","screen","display"],"moon":["dark","night"],"more-horizontal":["ellipsis"],"more-vertical":["ellipsis"],"mouse-pointer":["arrow","cursor"],"move":["arrows"],"music":["note"],"navigation":["location","travel"],"navigation-2":["location","travel"],"octagon":["stop"],"package":["box","container"],"paperclip":["attachment"],"pause":["music","stop"],"pause-circle":["music","audio","stop"],"pen-tool":["vector","drawing"],"percent":["discount"],"phone-call":["ring"],"phone-forwarded":["call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],"phone":["call"],"play":["music","start"],"pie-chart":["statistics","diagram"],"play-circle":["music","start"],"plus":["add","new"],"plus-circle":["add","new"],"plus-square":["add","new"],"pocket":["logo","save"],"power":["on","off"],"printer":["fax","office","device"],"radio":["signal"],"refresh-cw":["synchronise","arrows"],"refresh-ccw":["arrows"],"repeat":["loop","arrows"],"rewind":["music"],"rotate-ccw":["arrow"],"rotate-cw":["arrow"],"rss":["feed","subscribe"],"save":["floppy disk"],"scissors":["cut"],"search":["find","magnifier","magnifying glass"],"send":["message","mail","email","paper airplane","paper aeroplane"],"settings":["cog","edit","gear","preferences"],"share-2":["network","connections"],"shield":["security","secure"],"shield-off":["security","insecure"],"shopping-bag":["ecommerce","cart","purchase","store"],"shopping-cart":["ecommerce","cart","purchase","store"],"shuffle":["music"],"skip-back":["music"],"skip-forward":["music"],"slack":["logo"],"slash":["ban","no"],"sliders":["settings","controls"],"smartphone":["cellphone","device"],"smile":["emoji","face","happy","good","emotion"],"speaker":["audio","music"],"star":["bookmark","favorite","like"],"stop-circle":["media","music"],"sun":["brightness","weather","light"],"sunrise":["weather","time","morning","day"],"sunset":["weather","time","evening","night"],"tablet":["device"],"tag":["label"],"target":["logo","bullseye"],"terminal":["code","command line","prompt"],"thermometer":["temperature","celsius","fahrenheit","weather"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],"toggle-left":["on","off","switch"],"toggle-right":["on","off","switch"],"tool":["settings","spanner"],"trash":["garbage","delete","remove","bin"],"trash-2":["garbage","delete","remove","bin"],"triangle":["delta"],"truck":["delivery","van","shipping","transport","lorry"],"tv":["television","stream"],"twitch":["logo"],"twitter":["logo","social"],"type":["text"],"umbrella":["rain","weather"],"unlock":["security"],"user-check":["followed","subscribed"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-x":["delete","remove","unfollow","unsubscribe","unavailable"],"user":["person","account"],"users":["group"],"video-off":["camera","movie","film"],"video":["camera","movie","film"],"voicemail":["phone"],"volume":["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],"watch":["clock","time"],"wifi-off":["disabled"],"wifi":["connection","signal","wireless"],"wind":["weather","air"],"x-circle":["cancel","close","delete","remove","times","clear"],"x-octagon":["delete","stop","alert","warning","times","clear"],"x-square":["cancel","close","delete","remove","times","clear"],"x":["cancel","close","delete","remove","times","clear"],"youtube":["logo","video","play"],"zap-off":["flash","camera","lightning"],"zap":["flash","camera","lightning"],"zoom-in":["magnifying glass"],"zoom-out":["magnifying glass"]};

/***/ }),

/***/ "./src/to-svg.js":
/*!***********************!*\
  !*** ./src/to-svg.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create an SVG string.
 * @deprecated
 * @param {string} name
 * @param {Object} attrs
 * @returns {string}
 */
function toSvg(name) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  console.warn('feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead.');

  if (!name) {
    throw new Error('The required `key` (icon name) parameter is missing.');
  }

  if (!_icons2.default[name]) {
    throw new Error('No icon matching \'' + name + '\'. See the complete list of icons at https://feathericons.com');
  }

  return _icons2.default[name].toSvg(attrs);
}

exports.default = toSvg;

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi core-js/es/array/from ./src/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/es/array/from */"./node_modules/core-js/es/array/from.js");
module.exports = __webpack_require__(/*! /home/travis/build/feathericons/feather/src/index.js */"./src/index.js");


/***/ })

/******/ });
});

});

/**
 * This module contains various utility functions commonly used in Obsidian plugins.
 * @module obsidian-community-lib
 */
/**
 * Strip '.md' off the end of a note name to get its basename.
 *
 * Works with the edgecase where a note has '.md' in its basename: `Obsidian.md.md`, for example.
 * @param  {string} noteName with or without '.md' on the end.
 * @returns {string} noteName without '.md'
 */
const stripMD = (noteName) => {
    if (noteName.match(/\.MD$|\.md$/m)) {
        return noteName.split(/\.MD$|\.md$/m).slice(0, -1).join(".md");
    }
    else
        return noteName;
};

var main = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });



const DEFAULT_DAILY_NOTE_FORMAT = "YYYY-MM-DD";
const DEFAULT_WEEKLY_NOTE_FORMAT = "gggg-[W]ww";
const DEFAULT_MONTHLY_NOTE_FORMAT = "YYYY-MM";
const DEFAULT_QUARTERLY_NOTE_FORMAT = "YYYY-[Q]Q";
const DEFAULT_YEARLY_NOTE_FORMAT = "YYYY";

function shouldUsePeriodicNotesSettings(periodicity) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const periodicNotes = window.app.plugins.getPlugin("periodic-notes");
    return periodicNotes && periodicNotes.settings?.[periodicity]?.enabled;
}
/**
 * Read the user settings for the `daily-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
function getDailyNoteSettings() {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { internalPlugins, plugins } = window.app;
        if (shouldUsePeriodicNotesSettings("daily")) {
            const { format, folder, template } = plugins.getPlugin("periodic-notes")?.settings?.daily || {};
            return {
                format: format || DEFAULT_DAILY_NOTE_FORMAT,
                folder: folder?.trim() || "",
                template: template?.trim() || "",
            };
        }
        const { folder, format, template } = internalPlugins.getPluginById("daily-notes")?.instance?.options || {};
        return {
            format: format || DEFAULT_DAILY_NOTE_FORMAT,
            folder: folder?.trim() || "",
            template: template?.trim() || "",
        };
    }
    catch (err) {
        console.info("No custom daily note settings found!", err);
    }
}
/**
 * Read the user settings for the `weekly-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
function getWeeklyNoteSettings() {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const pluginManager = window.app.plugins;
        const calendarSettings = pluginManager.getPlugin("calendar")?.options;
        const periodicNotesSettings = pluginManager.getPlugin("periodic-notes")?.settings?.weekly;
        if (shouldUsePeriodicNotesSettings("weekly")) {
            return {
                format: periodicNotesSettings.format || DEFAULT_WEEKLY_NOTE_FORMAT,
                folder: periodicNotesSettings.folder?.trim() || "",
                template: periodicNotesSettings.template?.trim() || "",
            };
        }
        const settings = calendarSettings || {};
        return {
            format: settings.weeklyNoteFormat || DEFAULT_WEEKLY_NOTE_FORMAT,
            folder: settings.weeklyNoteFolder?.trim() || "",
            template: settings.weeklyNoteTemplate?.trim() || "",
        };
    }
    catch (err) {
        console.info("No custom weekly note settings found!", err);
    }
}
/**
 * Read the user settings for the `periodic-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
function getMonthlyNoteSettings() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pluginManager = window.app.plugins;
    try {
        const settings = (shouldUsePeriodicNotesSettings("monthly") &&
            pluginManager.getPlugin("periodic-notes")?.settings?.monthly) ||
            {};
        return {
            format: settings.format || DEFAULT_MONTHLY_NOTE_FORMAT,
            folder: settings.folder?.trim() || "",
            template: settings.template?.trim() || "",
        };
    }
    catch (err) {
        console.info("No custom monthly note settings found!", err);
    }
}
/**
 * Read the user settings for the `periodic-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
function getQuarterlyNoteSettings() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pluginManager = window.app.plugins;
    try {
        const settings = (shouldUsePeriodicNotesSettings("quarterly") &&
            pluginManager.getPlugin("periodic-notes")?.settings?.quarterly) ||
            {};
        return {
            format: settings.format || DEFAULT_QUARTERLY_NOTE_FORMAT,
            folder: settings.folder?.trim() || "",
            template: settings.template?.trim() || "",
        };
    }
    catch (err) {
        console.info("No custom quarterly note settings found!", err);
    }
}
/**
 * Read the user settings for the `periodic-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
function getYearlyNoteSettings() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pluginManager = window.app.plugins;
    try {
        const settings = (shouldUsePeriodicNotesSettings("yearly") &&
            pluginManager.getPlugin("periodic-notes")?.settings?.yearly) ||
            {};
        return {
            format: settings.format || DEFAULT_YEARLY_NOTE_FORMAT,
            folder: settings.folder?.trim() || "",
            template: settings.template?.trim() || "",
        };
    }
    catch (err) {
        console.info("No custom yearly note settings found!", err);
    }
}

// Credit: @creationix/path.js
function join(...partSegments) {
    // Split the inputs into a list of path commands.
    let parts = [];
    for (let i = 0, l = partSegments.length; i < l; i++) {
        parts = parts.concat(partSegments[i].split("/"));
    }
    // Interpret the path commands to get the new resolved path.
    const newParts = [];
    for (let i = 0, l = parts.length; i < l; i++) {
        const part = parts[i];
        // Remove leading and trailing slashes
        // Also remove "." segments
        if (!part || part === ".")
            continue;
        // Push new path segments.
        else
            newParts.push(part);
    }
    // Preserve the initial slash if there was one.
    if (parts[0] === "")
        newParts.unshift("");
    // Turn back into a single string path.
    return newParts.join("/");
}
function basename(fullPath) {
    let base = fullPath.substring(fullPath.lastIndexOf("/") + 1);
    if (base.lastIndexOf(".") != -1)
        base = base.substring(0, base.lastIndexOf("."));
    return base;
}
async function ensureFolderExists(path) {
    const dirs = path.replace(/\\/g, "/").split("/");
    dirs.pop(); // remove basename
    if (dirs.length) {
        const dir = join(...dirs);
        if (!window.app.vault.getAbstractFileByPath(dir)) {
            await window.app.vault.createFolder(dir);
        }
    }
}
async function getNotePath(directory, filename) {
    if (!filename.endsWith(".md")) {
        filename += ".md";
    }
    const path = obsidian__default["default"].normalizePath(join(directory, filename));
    await ensureFolderExists(path);
    return path;
}
async function getTemplateInfo(template) {
    const { metadataCache, vault } = window.app;
    const templatePath = obsidian__default["default"].normalizePath(template);
    if (templatePath === "/") {
        return Promise.resolve(["", null]);
    }
    try {
        const templateFile = metadataCache.getFirstLinkpathDest(templatePath, "");
        const contents = await vault.cachedRead(templateFile);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const IFoldInfo = window.app.foldManager.load(templateFile);
        return [contents, IFoldInfo];
    }
    catch (err) {
        console.error(`Failed to read the daily note template '${templatePath}'`, err);
        new obsidian__default["default"].Notice("Failed to read the daily note template");
        return ["", null];
    }
}

/**
 * dateUID is a way of weekly identifying daily/weekly/monthly notes.
 * They are prefixed with the granularity to avoid ambiguity.
 */
function getDateUID(date, granularity = "day") {
    const ts = date.clone().startOf(granularity).format();
    return `${granularity}-${ts}`;
}
function removeEscapedCharacters(format) {
    return format.replace(/\[[^\]]*\]/g, ""); // remove everything within brackets
}
/**
 * XXX: When parsing dates that contain both week numbers and months,
 * Moment choses to ignore the week numbers. For the week dateUID, we
 * want the opposite behavior. Strip the MMM from the format to patch.
 */
function isFormatAmbiguous(format, granularity) {
    if (granularity === "week") {
        const cleanFormat = removeEscapedCharacters(format);
        return (/w{1,2}/i.test(cleanFormat) &&
            (/M{1,4}/.test(cleanFormat) || /D{1,4}/.test(cleanFormat)));
    }
    return false;
}
function getDateFromFile(file, granularity) {
    return getDateFromFilename(file.basename, granularity);
}
function getDateFromPath(path, granularity) {
    return getDateFromFilename(basename(path), granularity);
}
function getDateFromFilename(filename, granularity) {
    const getSettings = {
        day: getDailyNoteSettings,
        week: getWeeklyNoteSettings,
        month: getMonthlyNoteSettings,
        quarter: getQuarterlyNoteSettings,
        year: getYearlyNoteSettings,
    };
    const format = getSettings[granularity]().format.split("/").pop();
    const noteDate = window.moment(filename, format, true);
    if (!noteDate.isValid()) {
        return null;
    }
    if (isFormatAmbiguous(format, granularity)) {
        if (granularity === "week") {
            const cleanFormat = removeEscapedCharacters(format);
            if (/w{1,2}/i.test(cleanFormat)) {
                return window.moment(filename, 
                // If format contains week, remove day & month formatting
                format.replace(/M{1,4}/g, "").replace(/D{1,4}/g, ""), false);
            }
        }
    }
    return noteDate;
}

class DailyNotesFolderMissingError extends Error {
}
/**
 * This function mimics the behavior of the daily-notes plugin
 * so it will replace {{date}}, {{title}}, and {{time}} with the
 * formatted timestamp.
 *
 * Note: it has an added bonus that it's not 'today' specific.
 */
async function createDailyNote(date) {
    const app = window.app;
    const { vault } = app;
    const moment = window.moment;
    const { template, format, folder } = getDailyNoteSettings();
    const [templateContents, IFoldInfo] = await getTemplateInfo(template);
    const filename = date.format(format);
    const normalizedPath = await getNotePath(folder, filename);
    try {
        const createdFile = await vault.create(normalizedPath, templateContents
            .replace(/{{\s*date\s*}}/gi, filename)
            .replace(/{{\s*time\s*}}/gi, moment().format("HH:mm"))
            .replace(/{{\s*title\s*}}/gi, filename)
            .replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
            const now = moment();
            const currentDate = date.clone().set({
                hour: now.get("hour"),
                minute: now.get("minute"),
                second: now.get("second"),
            });
            if (calc) {
                currentDate.add(parseInt(timeDelta, 10), unit);
            }
            if (momentFormat) {
                return currentDate.format(momentFormat.substring(1).trim());
            }
            return currentDate.format(format);
        })
            .replace(/{{\s*yesterday\s*}}/gi, date.clone().subtract(1, "day").format(format))
            .replace(/{{\s*tomorrow\s*}}/gi, date.clone().add(1, "d").format(format)));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        app.foldManager.save(createdFile, IFoldInfo);
        return createdFile;
    }
    catch (err) {
        console.error(`Failed to create file: '${normalizedPath}'`, err);
        new obsidian__default["default"].Notice("Unable to create new file.");
    }
}
function getDailyNote(date, dailyNotes) {
    return dailyNotes[getDateUID(date, "day")] ?? null;
}
function getAllDailyNotes() {
    /**
     * Find all daily notes in the daily note folder
     */
    const { vault } = window.app;
    const { folder } = getDailyNoteSettings();
    const dailyNotesFolder = vault.getAbstractFileByPath(obsidian__default["default"].normalizePath(folder));
    if (!dailyNotesFolder) {
        throw new DailyNotesFolderMissingError("Failed to find daily notes folder");
    }
    const dailyNotes = {};
    obsidian__default["default"].Vault.recurseChildren(dailyNotesFolder, (note) => {
        if (note instanceof obsidian__default["default"].TFile) {
            const date = getDateFromFile(note, "day");
            if (date) {
                const dateString = getDateUID(date, "day");
                dailyNotes[dateString] = note;
            }
        }
    });
    return dailyNotes;
}

class WeeklyNotesFolderMissingError extends Error {
}
function getDaysOfWeek() {
    const { moment } = window;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let weekStart = moment.localeData()._week.dow;
    const daysOfWeek = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
    ];
    while (weekStart) {
        daysOfWeek.push(daysOfWeek.shift());
        weekStart--;
    }
    return daysOfWeek;
}
function getDayOfWeekNumericalValue(dayOfWeekName) {
    return getDaysOfWeek().indexOf(dayOfWeekName.toLowerCase());
}
async function createWeeklyNote(date) {
    const { vault } = window.app;
    const { template, format, folder } = getWeeklyNoteSettings();
    const [templateContents, IFoldInfo] = await getTemplateInfo(template);
    const filename = date.format(format);
    const normalizedPath = await getNotePath(folder, filename);
    try {
        const createdFile = await vault.create(normalizedPath, templateContents
            .replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
            const now = window.moment();
            const currentDate = date.clone().set({
                hour: now.get("hour"),
                minute: now.get("minute"),
                second: now.get("second"),
            });
            if (calc) {
                currentDate.add(parseInt(timeDelta, 10), unit);
            }
            if (momentFormat) {
                return currentDate.format(momentFormat.substring(1).trim());
            }
            return currentDate.format(format);
        })
            .replace(/{{\s*title\s*}}/gi, filename)
            .replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm"))
            .replace(/{{\s*(sunday|monday|tuesday|wednesday|thursday|friday|saturday)\s*:(.*?)}}/gi, (_, dayOfWeek, momentFormat) => {
            const day = getDayOfWeekNumericalValue(dayOfWeek);
            return date.weekday(day).format(momentFormat.trim());
        }));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.app.foldManager.save(createdFile, IFoldInfo);
        return createdFile;
    }
    catch (err) {
        console.error(`Failed to create file: '${normalizedPath}'`, err);
        new obsidian__default["default"].Notice("Unable to create new file.");
    }
}
function getWeeklyNote(date, weeklyNotes) {
    return weeklyNotes[getDateUID(date, "week")] ?? null;
}
function getAllWeeklyNotes() {
    const weeklyNotes = {};
    if (!appHasWeeklyNotesPluginLoaded()) {
        return weeklyNotes;
    }
    const { vault } = window.app;
    const { folder } = getWeeklyNoteSettings();
    const weeklyNotesFolder = vault.getAbstractFileByPath(obsidian__default["default"].normalizePath(folder));
    if (!weeklyNotesFolder) {
        throw new WeeklyNotesFolderMissingError("Failed to find weekly notes folder");
    }
    obsidian__default["default"].Vault.recurseChildren(weeklyNotesFolder, (note) => {
        if (note instanceof obsidian__default["default"].TFile) {
            const date = getDateFromFile(note, "week");
            if (date) {
                const dateString = getDateUID(date, "week");
                weeklyNotes[dateString] = note;
            }
        }
    });
    return weeklyNotes;
}

class MonthlyNotesFolderMissingError extends Error {
}
/**
 * This function mimics the behavior of the daily-notes plugin
 * so it will replace {{date}}, {{title}}, and {{time}} with the
 * formatted timestamp.
 *
 * Note: it has an added bonus that it's not 'today' specific.
 */
async function createMonthlyNote(date) {
    const { vault } = window.app;
    const { template, format, folder } = getMonthlyNoteSettings();
    const [templateContents, IFoldInfo] = await getTemplateInfo(template);
    const filename = date.format(format);
    const normalizedPath = await getNotePath(folder, filename);
    try {
        const createdFile = await vault.create(normalizedPath, templateContents
            .replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
            const now = window.moment();
            const currentDate = date.clone().set({
                hour: now.get("hour"),
                minute: now.get("minute"),
                second: now.get("second"),
            });
            if (calc) {
                currentDate.add(parseInt(timeDelta, 10), unit);
            }
            if (momentFormat) {
                return currentDate.format(momentFormat.substring(1).trim());
            }
            return currentDate.format(format);
        })
            .replace(/{{\s*date\s*}}/gi, filename)
            .replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm"))
            .replace(/{{\s*title\s*}}/gi, filename));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.app.foldManager.save(createdFile, IFoldInfo);
        return createdFile;
    }
    catch (err) {
        console.error(`Failed to create file: '${normalizedPath}'`, err);
        new obsidian__default["default"].Notice("Unable to create new file.");
    }
}
function getMonthlyNote(date, monthlyNotes) {
    return monthlyNotes[getDateUID(date, "month")] ?? null;
}
function getAllMonthlyNotes() {
    const monthlyNotes = {};
    if (!appHasMonthlyNotesPluginLoaded()) {
        return monthlyNotes;
    }
    const { vault } = window.app;
    const { folder } = getMonthlyNoteSettings();
    const monthlyNotesFolder = vault.getAbstractFileByPath(obsidian__default["default"].normalizePath(folder));
    if (!monthlyNotesFolder) {
        throw new MonthlyNotesFolderMissingError("Failed to find monthly notes folder");
    }
    obsidian__default["default"].Vault.recurseChildren(monthlyNotesFolder, (note) => {
        if (note instanceof obsidian__default["default"].TFile) {
            const date = getDateFromFile(note, "month");
            if (date) {
                const dateString = getDateUID(date, "month");
                monthlyNotes[dateString] = note;
            }
        }
    });
    return monthlyNotes;
}

class QuarterlyNotesFolderMissingError extends Error {
}
/**
 * This function mimics the behavior of the daily-notes plugin
 * so it will replace {{date}}, {{title}}, and {{time}} with the
 * formatted timestamp.
 *
 * Note: it has an added bonus that it's not 'today' specific.
 */
async function createQuarterlyNote(date) {
    const { vault } = window.app;
    const { template, format, folder } = getQuarterlyNoteSettings();
    const [templateContents, IFoldInfo] = await getTemplateInfo(template);
    const filename = date.format(format);
    const normalizedPath = await getNotePath(folder, filename);
    try {
        const createdFile = await vault.create(normalizedPath, templateContents
            .replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
            const now = window.moment();
            const currentDate = date.clone().set({
                hour: now.get("hour"),
                minute: now.get("minute"),
                second: now.get("second"),
            });
            if (calc) {
                currentDate.add(parseInt(timeDelta, 10), unit);
            }
            if (momentFormat) {
                return currentDate.format(momentFormat.substring(1).trim());
            }
            return currentDate.format(format);
        })
            .replace(/{{\s*date\s*}}/gi, filename)
            .replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm"))
            .replace(/{{\s*title\s*}}/gi, filename));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.app.foldManager.save(createdFile, IFoldInfo);
        return createdFile;
    }
    catch (err) {
        console.error(`Failed to create file: '${normalizedPath}'`, err);
        new obsidian__default["default"].Notice("Unable to create new file.");
    }
}
function getQuarterlyNote(date, quarterly) {
    return quarterly[getDateUID(date, "quarter")] ?? null;
}
function getAllQuarterlyNotes() {
    const quarterly = {};
    if (!appHasQuarterlyNotesPluginLoaded()) {
        return quarterly;
    }
    const { vault } = window.app;
    const { folder } = getQuarterlyNoteSettings();
    const quarterlyFolder = vault.getAbstractFileByPath(obsidian__default["default"].normalizePath(folder));
    if (!quarterlyFolder) {
        throw new QuarterlyNotesFolderMissingError("Failed to find quarterly notes folder");
    }
    obsidian__default["default"].Vault.recurseChildren(quarterlyFolder, (note) => {
        if (note instanceof obsidian__default["default"].TFile) {
            const date = getDateFromFile(note, "quarter");
            if (date) {
                const dateString = getDateUID(date, "quarter");
                quarterly[dateString] = note;
            }
        }
    });
    return quarterly;
}

class YearlyNotesFolderMissingError extends Error {
}
/**
 * This function mimics the behavior of the daily-notes plugin
 * so it will replace {{date}}, {{title}}, and {{time}} with the
 * formatted timestamp.
 *
 * Note: it has an added bonus that it's not 'today' specific.
 */
async function createYearlyNote(date) {
    const { vault } = window.app;
    const { template, format, folder } = getYearlyNoteSettings();
    const [templateContents, IFoldInfo] = await getTemplateInfo(template);
    const filename = date.format(format);
    const normalizedPath = await getNotePath(folder, filename);
    try {
        const createdFile = await vault.create(normalizedPath, templateContents
            .replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
            const now = window.moment();
            const currentDate = date.clone().set({
                hour: now.get("hour"),
                minute: now.get("minute"),
                second: now.get("second"),
            });
            if (calc) {
                currentDate.add(parseInt(timeDelta, 10), unit);
            }
            if (momentFormat) {
                return currentDate.format(momentFormat.substring(1).trim());
            }
            return currentDate.format(format);
        })
            .replace(/{{\s*date\s*}}/gi, filename)
            .replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm"))
            .replace(/{{\s*title\s*}}/gi, filename));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.app.foldManager.save(createdFile, IFoldInfo);
        return createdFile;
    }
    catch (err) {
        console.error(`Failed to create file: '${normalizedPath}'`, err);
        new obsidian__default["default"].Notice("Unable to create new file.");
    }
}
function getYearlyNote(date, yearlyNotes) {
    return yearlyNotes[getDateUID(date, "year")] ?? null;
}
function getAllYearlyNotes() {
    const yearlyNotes = {};
    if (!appHasYearlyNotesPluginLoaded()) {
        return yearlyNotes;
    }
    const { vault } = window.app;
    const { folder } = getYearlyNoteSettings();
    const yearlyNotesFolder = vault.getAbstractFileByPath(obsidian__default["default"].normalizePath(folder));
    if (!yearlyNotesFolder) {
        throw new YearlyNotesFolderMissingError("Failed to find yearly notes folder");
    }
    obsidian__default["default"].Vault.recurseChildren(yearlyNotesFolder, (note) => {
        if (note instanceof obsidian__default["default"].TFile) {
            const date = getDateFromFile(note, "year");
            if (date) {
                const dateString = getDateUID(date, "year");
                yearlyNotes[dateString] = note;
            }
        }
    });
    return yearlyNotes;
}

function appHasDailyNotesPluginLoaded() {
    const { app } = window;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dailyNotesPlugin = app.internalPlugins.plugins["daily-notes"];
    if (dailyNotesPlugin && dailyNotesPlugin.enabled) {
        return true;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const periodicNotes = app.plugins.getPlugin("periodic-notes");
    return periodicNotes && periodicNotes.settings?.daily?.enabled;
}
/**
 * XXX: "Weekly Notes" live in either the Calendar plugin or the periodic-notes plugin.
 * Check both until the weekly notes feature is removed from the Calendar plugin.
 */
function appHasWeeklyNotesPluginLoaded() {
    const { app } = window;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (app.plugins.getPlugin("calendar")) {
        return true;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const periodicNotes = app.plugins.getPlugin("periodic-notes");
    return periodicNotes && periodicNotes.settings?.weekly?.enabled;
}
function appHasMonthlyNotesPluginLoaded() {
    const { app } = window;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const periodicNotes = app.plugins.getPlugin("periodic-notes");
    return periodicNotes && periodicNotes.settings?.monthly?.enabled;
}
function appHasQuarterlyNotesPluginLoaded() {
    const { app } = window;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const periodicNotes = app.plugins.getPlugin("periodic-notes");
    return periodicNotes && periodicNotes.settings?.quarterly?.enabled;
}
function appHasYearlyNotesPluginLoaded() {
    const { app } = window;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const periodicNotes = app.plugins.getPlugin("periodic-notes");
    return periodicNotes && periodicNotes.settings?.yearly?.enabled;
}
function getPeriodicNoteSettings(granularity) {
    const getSettings = {
        day: getDailyNoteSettings,
        week: getWeeklyNoteSettings,
        month: getMonthlyNoteSettings,
        quarter: getQuarterlyNoteSettings,
        year: getYearlyNoteSettings,
    }[granularity];
    return getSettings();
}
function createPeriodicNote(granularity, date) {
    const createFn = {
        day: createDailyNote,
        month: createMonthlyNote,
        week: createWeeklyNote,
    };
    return createFn[granularity](date);
}

exports.DEFAULT_DAILY_NOTE_FORMAT = DEFAULT_DAILY_NOTE_FORMAT;
exports.DEFAULT_MONTHLY_NOTE_FORMAT = DEFAULT_MONTHLY_NOTE_FORMAT;
exports.DEFAULT_QUARTERLY_NOTE_FORMAT = DEFAULT_QUARTERLY_NOTE_FORMAT;
exports.DEFAULT_WEEKLY_NOTE_FORMAT = DEFAULT_WEEKLY_NOTE_FORMAT;
exports.DEFAULT_YEARLY_NOTE_FORMAT = DEFAULT_YEARLY_NOTE_FORMAT;
exports.appHasDailyNotesPluginLoaded = appHasDailyNotesPluginLoaded;
exports.appHasMonthlyNotesPluginLoaded = appHasMonthlyNotesPluginLoaded;
exports.appHasQuarterlyNotesPluginLoaded = appHasQuarterlyNotesPluginLoaded;
exports.appHasWeeklyNotesPluginLoaded = appHasWeeklyNotesPluginLoaded;
exports.appHasYearlyNotesPluginLoaded = appHasYearlyNotesPluginLoaded;
exports.createDailyNote = createDailyNote;
exports.createMonthlyNote = createMonthlyNote;
exports.createPeriodicNote = createPeriodicNote;
exports.createQuarterlyNote = createQuarterlyNote;
exports.createWeeklyNote = createWeeklyNote;
exports.createYearlyNote = createYearlyNote;
exports.getAllDailyNotes = getAllDailyNotes;
exports.getAllMonthlyNotes = getAllMonthlyNotes;
exports.getAllQuarterlyNotes = getAllQuarterlyNotes;
exports.getAllWeeklyNotes = getAllWeeklyNotes;
exports.getAllYearlyNotes = getAllYearlyNotes;
exports.getDailyNote = getDailyNote;
exports.getDailyNoteSettings = getDailyNoteSettings;
exports.getDateFromFile = getDateFromFile;
exports.getDateFromPath = getDateFromPath;
exports.getDateUID = getDateUID;
exports.getMonthlyNote = getMonthlyNote;
exports.getMonthlyNoteSettings = getMonthlyNoteSettings;
exports.getPeriodicNoteSettings = getPeriodicNoteSettings;
exports.getQuarterlyNote = getQuarterlyNote;
exports.getQuarterlyNoteSettings = getQuarterlyNoteSettings;
exports.getTemplateInfo = getTemplateInfo;
exports.getWeeklyNote = getWeeklyNote;
exports.getWeeklyNoteSettings = getWeeklyNoteSettings;
exports.getYearlyNote = getYearlyNote;
exports.getYearlyNoteSettings = getYearlyNoteSettings;
});

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

//! All of these methods are taken from https://www.npmjs.com/package/obsidian-daily-notes-interface.
function join() {
    var partSegments = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        partSegments[_i] = arguments[_i];
    }
    // Split the inputs into a list of path commands.
    var parts = [];
    for (var i = 0, l = partSegments.length; i < l; i++) {
        parts = parts.concat(partSegments[i].split("/"));
    }
    // Interpret the path commands to get the new resolved path.
    var newParts = [];
    for (var i = 0, l = parts.length; i < l; i++) {
        var part = parts[i];
        // Remove leading and trailing slashes
        // Also remove "." segments
        if (!part || part === ".")
            continue;
        // Push new path segments.
        else
            newParts.push(part);
    }
    // Preserve the initial slash if there was one.
    if (parts[0] === "")
        newParts.unshift("");
    // Turn back into a single string path.
    return newParts.join("/");
}
function getNotePath(directory, filename) {
    return __awaiter(this, void 0, void 0, function () {
        var path;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!filename.endsWith(".md")) {
                        filename += ".md";
                    }
                    path = obsidian.normalizePath(join(directory, filename));
                    return [4 /*yield*/, ensureFolderExists(path)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, path];
            }
        });
    });
}
function ensureFolderExists(path) {
    return __awaiter(this, void 0, void 0, function () {
        var dirs, dir;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dirs = path.replace(/\\/g, "/").split("/");
                    dirs.pop(); // remove basename
                    if (!dirs.length) return [3 /*break*/, 2];
                    dir = join.apply(void 0, dirs);
                    if (!!window.app.vault.getAbstractFileByPath(dir)) return [3 /*break*/, 2];
                    return [4 /*yield*/, window.app.vault.createFolder(dir)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
function getDailyNotePath(date) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, format, folder, filename, normalizedPath;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = main.getDailyNoteSettings(), format = _a.format, folder = _a.folder;
                    filename = date.format(format);
                    return [4 /*yield*/, getNotePath(folder, filename)];
                case 1:
                    normalizedPath = _b.sent();
                    return [2 /*return*/, normalizedPath];
            }
        });
    });
}

var CommandModal = /** @class */ (function (_super) {
    __extends(CommandModal, _super);
    function CommandModal(plugin, file) {
        var _this = _super.call(this, plugin.app) || this;
        _this.plugin = plugin;
        _this.file = file;
        return _this;
    }
    CommandModal.prototype.getItems = function () {
        var rawCommands = this.app.commands.commands;
        var commands = Object.keys(rawCommands).map(function (e) {
            return { id: rawCommands[e].id, name: rawCommands[e].name };
        });
        return commands;
    };
    CommandModal.prototype.getItemText = function (item) {
        return item.name;
    };
    CommandModal.prototype.onChooseItem = function (item, _) {
        this.plugin.copyURI({
            filepath: this.file,
            commandid: item.id
        });
    };
    return CommandModal;
}(obsidian.FuzzySuggestModal));

var EnterDataModal = /** @class */ (function (_super) {
    __extends(EnterDataModal, _super);
    function EnterDataModal(plugin, file) {
        var _this = _super.call(this, plugin.app) || this;
        _this.file = file;
        //null if for normal write mode, its not associated with a special mode like "append" or "prepend"
        _this.modes = [null, "overwrite", "append", "prepend"];
        _this.plugin = plugin;
        _this.setPlaceholder("Type your data to be written to the file or leave it empty to just open it");
        return _this;
    }
    EnterDataModal.prototype.getSuggestions = function (query) {
        var _this = this;
        if (query == "")
            query = null;
        var suggestions = [];
        var _loop_1 = function (mode) {
            if (!(mode === "overwrite" && !query)) {
                var display = void 0;
                if (query) {
                    if (mode) {
                        display = "Write \"" + query + "\" in " + mode + " mode";
                    }
                    else {
                        display = "Write \"" + query + "\"";
                    }
                }
                else {
                    if (mode) {
                        display = "Open in " + mode + " mode";
                    }
                    else {
                        display = "Open";
                    }
                }
                suggestions.push({
                    data: query,
                    display: display,
                    mode: mode,
                    func: function () {
                        if (_this.file) {
                            _this.plugin.copyURI({
                                filepath: _this.file,
                                data: query,
                                mode: mode
                            });
                        }
                        else {
                            _this.plugin.copyURI({
                                daily: "true",
                                data: query,
                                mode: mode
                            });
                        }
                    }
                });
            }
        };
        for (var _i = 0, _a = this.modes; _i < _a.length; _i++) {
            var mode = _a[_i];
            _loop_1(mode);
        }
        return suggestions;
    };
    EnterDataModal.prototype.renderSuggestion = function (value, el) {
        el.innerText = value.display;
    };
    EnterDataModal.prototype.onChooseSuggestion = function (item, _) {
        item.func();
    };
    return EnterDataModal;
}(obsidian.SuggestModal));

var FileModal = /** @class */ (function (_super) {
    __extends(FileModal, _super);
    function FileModal(plugin, placeHolder, allowNoFile) {
        if (allowNoFile === void 0) { allowNoFile = true; }
        var _this = _super.call(this, plugin.app) || this;
        _this.placeHolder = placeHolder;
        _this.allowNoFile = allowNoFile;
        _this.plugin = plugin;
        _this.setPlaceholder(_this.placeHolder);
        return _this;
    }
    FileModal.prototype.getItems = function () {
        var specialItems = [];
        if (this.allowNoFile) {
            specialItems.push({ display: "<Don't specify a file>", source: undefined });
        }
        var file = this.app.workspace.getActiveFile();
        if (file) {
            specialItems.push({ display: "<Current file>", source: file.path });
        }
        return __spreadArray(__spreadArray([], specialItems), this.app.vault.getFiles().map(function (e) { return { display: e.path, source: e.path }; }));
    };
    FileModal.prototype.getItemText = function (item) {
        return item.display;
    };
    FileModal.prototype.onChooseItem = function (item, evt) {
    };
    return FileModal;
}(obsidian.FuzzySuggestModal));

var ReplaceModal = /** @class */ (function (_super) {
    __extends(ReplaceModal, _super);
    function ReplaceModal(plugin, search, filepath) {
        var _this = _super.call(this, plugin.app) || this;
        _this.search = search;
        _this.filepath = filepath;
        _this.emptyText = "Empty text (replace with nothing)";
        _this.plugin = plugin;
        _this.setPlaceholder("Replacement text");
        return _this;
    }
    ReplaceModal.prototype.getSuggestions = function (query) {
        if (query === "") {
            query = this.emptyText;
        }
        return [query];
    };
    ReplaceModal.prototype.renderSuggestion = function (value, el) {
        el.innerText = value;
    };
    ReplaceModal.prototype.onChooseSuggestion = function (item, _) {
        if (this.search.isRegEx) {
            this.plugin.copyURI({
                filepath: this.filepath,
                searchregex: this.search.source,
                replace: item == this.emptyText ? "" : item
            });
        }
        else {
            this.plugin.copyURI({
                filepath: this.filepath,
                search: this.search.source,
                replace: item == this.emptyText ? "" : item
            });
        }
    };
    return ReplaceModal;
}(obsidian.SuggestModal));

var SearchModal = /** @class */ (function (_super) {
    __extends(SearchModal, _super);
    function SearchModal(plugin) {
        var _this = _super.call(this, plugin.app) || this;
        _this.plugin = plugin;
        _this.setPlaceholder("Searched text. RegEx is supported");
        return _this;
    }
    SearchModal.prototype.getSuggestions = function (query) {
        if (query === "") {
            query = "...";
        }
        var regex;
        try {
            regex = new RegExp(query);
        }
        catch (error) { }
        return [
            {
                source: query,
                isRegEx: false,
                display: query
            },
            {
                source: query,
                display: regex ? "As RegEx: " + query : "Can't parse RegEx",
                isRegEx: true
            }
        ];
    };
    SearchModal.prototype.renderSuggestion = function (value, el) {
        el.innerText = value.display;
    };
    SearchModal.prototype.onChooseSuggestion = function (item, _) {
    };
    return SearchModal;
}(obsidian.SuggestModal));

var SettingsTab = /** @class */ (function (_super) {
    __extends(SettingsTab, _super);
    function SettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    SettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl("h2", { text: this.plugin.manifest.name });
        new obsidian.Setting(containerEl)
            .setName("Open file on write")
            .addToggle(function (cb) { return cb.onChange(function (value) {
            _this.plugin.settings.openFileOnWrite = value;
            _this.plugin.saveSettings();
        }).setValue(_this.plugin.settings.openFileOnWrite); });
        new obsidian.Setting(containerEl)
            .setName("Open file on write in a new pane")
            .setDisabled(this.plugin.settings.openFileOnWrite)
            .addToggle(function (cb) { return cb.onChange(function (value) {
            _this.plugin.settings.openFileOnWriteInNewPane = value;
            _this.plugin.saveSettings();
        }).setValue(_this.plugin.settings.openFileOnWriteInNewPane); });
        new obsidian.Setting(containerEl)
            .setName("Open daily note in a new pane")
            .addToggle(function (cb) { return cb.onChange(function (value) {
            _this.plugin.settings.openDailyInNewPane = value;
            _this.plugin.saveSettings();
        }).setValue(_this.plugin.settings.openDailyInNewPane); });
        new obsidian.Setting(containerEl)
            .setName("Open file without write in new pane")
            .addToggle(function (cb) { return cb.onChange(function (value) {
            _this.plugin.settings.openFileWithoutWriteInNewPane = value;
            _this.plugin.saveSettings();
        }).setValue(_this.plugin.settings.openFileWithoutWriteInNewPane); });
        new obsidian.Setting(containerEl)
            .setName("Use UID instead of file paths")
            .addToggle(function (cb) { return cb.onChange(function (value) {
            _this.plugin.settings.useUID = value;
            _this.plugin.saveSettings();
        }).setValue(_this.plugin.settings.useUID); });
        new obsidian.Setting(containerEl)
            .setName("UID field in frontmatter")
            .addText(function (cb) { return cb.onChange(function (value) {
            _this.plugin.settings.idField = value;
            _this.plugin.saveSettings();
        }).setValue(_this.plugin.settings.idField); });
        new obsidian.Setting(containerEl)
            .setName('Donate')
            .setDesc('If you like this Plugin, consider donating to support continued development.')
            .addButton(function (bt) {
            bt.buttonEl.outerHTML = "<a href='https://ko-fi.com/F1F195IQ5' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi3.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>";
        });
    };
    return SettingsTab;
}(obsidian.PluginSettingTab));

var DEFAULT_SETTINGS = {
    openFileOnWrite: true,
    openDailyInNewPane: false,
    openFileOnWriteInNewPane: false,
    openFileWithoutWriteInNewPane: false,
    idField: "id",
    useUID: false,
};
var AdvancedURI = /** @class */ (function (_super) {
    __extends(AdvancedURI, _super);
    function AdvancedURI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdvancedURI.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        this.addSettingTab(new SettingsTab(this.app, this));
                        this.addCommand({
                            id: "copy-uri-current-file",
                            name: "copy URI for file with options",
                            callback: function () { return _this.handleCopyFileURI(false); }
                        });
                        this.addCommand({
                            id: "copy-uri-current-file-simple",
                            name: "copy URI for current file",
                            callback: function () { return _this.handleCopyFileURI(true); }
                        });
                        this.addCommand({
                            id: "copy-uri-daily",
                            name: "copy URI for daily note",
                            callback: function () { return new EnterDataModal(_this).open(); }
                        });
                        this.addCommand({
                            id: "copy-uri-search-and-replace",
                            name: "copy URI for search and replace",
                            callback: function () {
                                var fileModal = new FileModal(_this, "Used file for search and replace");
                                fileModal.open();
                                fileModal.onChooseItem = function (filePath) {
                                    var searchModal = new SearchModal(_this);
                                    searchModal.open();
                                    searchModal.onChooseSuggestion = function (item) {
                                        new ReplaceModal(_this, item, filePath === null || filePath === void 0 ? void 0 : filePath.source).open();
                                    };
                                };
                            },
                        });
                        this.addCommand({
                            id: "copy-uri-command",
                            name: "copy URI for command",
                            callback: function () {
                                var fileModal = new FileModal(_this, "Select a file to be opened before executing the command");
                                fileModal.open();
                                fileModal.onChooseItem = function (item) {
                                    new CommandModal(_this, item === null || item === void 0 ? void 0 : item.source).open();
                                };
                            }
                        });
                        this.registerObsidianProtocolHandler("advanced-uri", function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var parameters, createdDailyNote, parameter, res, file, parentFolder, parentFolderPath, index, extension, moment_1, allDailyNotes, dailyNote, _a, _b;
                            var _this = this;
                            var _c, _d, _e;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0:
                                        parameters = e;
                                        createdDailyNote = false;
                                        for (parameter in parameters) {
                                            parameters[parameter] = decodeURIComponent(parameters[parameter]);
                                        }
                                        this.lastParameters = __assign({}, parameters);
                                        if (parameters.uid) {
                                            res = (_c = this.getFileFromUID(parameters.uid)) === null || _c === void 0 ? void 0 : _c.path;
                                            if (res != undefined) {
                                                parameters.filepath = res;
                                                parameters.uid = undefined;
                                            }
                                        }
                                        else if (parameters.filename) {
                                            file = this.app.metadataCache.getFirstLinkpathDest(parameters.filename, "");
                                            if (!file) {
                                                file = this.app.vault.getMarkdownFiles().find(function (file) { var _a; return (_a = obsidian.parseFrontMatterAliases(_this.app.metadataCache.getFileCache(file).frontmatter)) === null || _a === void 0 ? void 0 : _a.includes(parameters.filename); });
                                            }
                                            parentFolder = this.app.fileManager.getNewFileParent((_d = this.app.workspace.activeLeaf.view.file) === null || _d === void 0 ? void 0 : _d.path);
                                            parentFolderPath = parentFolder.isRoot() ? "" : parentFolder.path + "/";
                                            parameters.filepath = (_e = file === null || file === void 0 ? void 0 : file.path) !== null && _e !== void 0 ? _e : (parentFolderPath + obsidian.normalizePath(parameters.filename));
                                        }
                                        if (!parameters.filepath) return [3 /*break*/, 1];
                                        parameters.filepath = obsidian.normalizePath(parameters.filepath);
                                        index = parameters.filepath.lastIndexOf(".");
                                        extension = parameters.filepath.substring(index < 0 ? parameters.filepath.length : index);
                                        if (extension === "") {
                                            parameters.filepath = parameters.filepath + ".md";
                                        }
                                        return [3 /*break*/, 7];
                                    case 1:
                                        if (!(parameters.daily === "true")) return [3 /*break*/, 7];
                                        if (!main.appHasDailyNotesPluginLoaded()) {
                                            new obsidian.Notice("Daily notes plugin is not loaded");
                                            return [2 /*return*/];
                                        }
                                        moment_1 = window.moment(Date.now());
                                        allDailyNotes = main.getAllDailyNotes();
                                        dailyNote = main.getDailyNote(moment_1, allDailyNotes);
                                        if (!!dailyNote) return [3 /*break*/, 6];
                                        if (!(parameters.exists === "true")) return [3 /*break*/, 3];
                                        _a = parameters;
                                        return [4 /*yield*/, getDailyNotePath(moment_1)];
                                    case 2:
                                        _a.filepath = _f.sent();
                                        return [3 /*break*/, 6];
                                    case 3: return [4 /*yield*/, main.createDailyNote(moment_1)];
                                    case 4:
                                        dailyNote = _f.sent();
                                        // delay to let Obsidian index and generate CachedMetadata
                                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 500); })];
                                    case 5:
                                        // delay to let Obsidian index and generate CachedMetadata
                                        _f.sent();
                                        createdDailyNote = true;
                                        _f.label = 6;
                                    case 6:
                                        if (dailyNote !== undefined) {
                                            parameters.filepath = dailyNote.path;
                                        }
                                        _f.label = 7;
                                    case 7:
                                        if (!(parameters.clipboard === "true")) return [3 /*break*/, 9];
                                        _b = parameters;
                                        return [4 /*yield*/, navigator.clipboard.readText()];
                                    case 8:
                                        _b.data = _f.sent();
                                        _f.label = 9;
                                    case 9:
                                        if (parameters["enable-plugin"] || parameters["disable-plugin"]) {
                                            this.handlePluginManagement(parameters);
                                        }
                                        else if (parameters.frontmatterkey) {
                                            this.handleFrontmatterKey(parameters);
                                        }
                                        else if (parameters.workspace || parameters.saveworkspace == "true") {
                                            this.handleWorkspace(parameters);
                                        }
                                        else if (parameters.commandname || parameters.commandid) {
                                            this.handleCommand(parameters);
                                        }
                                        else if (parameters.filepath && parameters.exists === "true") {
                                            this.handleDoesFileExist(parameters);
                                        }
                                        else if (parameters.data) {
                                            this.handleWrite(parameters, createdDailyNote);
                                        }
                                        else if (parameters.filepath && parameters.heading) {
                                            this.handleOpen(parameters);
                                        }
                                        else if (parameters.filepath && parameters.block) {
                                            this.handleOpen(parameters);
                                        }
                                        else if ((parameters.search || parameters.searchregex) && parameters.replace != undefined) {
                                            this.handleSearchAndReplace(parameters);
                                        }
                                        else if (parameters.filepath) {
                                            this.handleOpen(parameters);
                                        }
                                        else if (parameters.settingid) {
                                            this.handleOpenSettings(parameters);
                                        }
                                        else if (parameters.updateplugins) {
                                            this.handleUpdatePlugins(parameters);
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        this.registerObsidianProtocolHandler("hook-get-advanced-uri", function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var parameters, parameter, activeLeaf, file;
                            return __generator(this, function (_a) {
                                parameters = e;
                                for (parameter in parameters) {
                                    parameters[parameter] = decodeURIComponent(parameters[parameter]);
                                }
                                activeLeaf = this.app.workspace.activeLeaf;
                                file = activeLeaf.view.file;
                                if (activeLeaf && file) {
                                    this.hookSuccess(parameters, file);
                                }
                                else {
                                    this.failure(parameters, { errorMessage: "No file opened" });
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        this.registerEvent(this.app.workspace.on('file-menu', function (menu, file, source) {
                            if (!(source === "pane-more-options" || source === "tab-header" || source == "file-explorer-context-menu")) {
                                return;
                            }
                            if (!(file instanceof obsidian.TFile)) {
                                return;
                            }
                            menu.addItem(function (item) {
                                item
                                    .setTitle("Copy Advanced URI")
                                    .setIcon('link')
                                    .setSection("info")
                                    .onClick(function (_) { return _this.handleCopyFileURI(true, file); });
                            });
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvancedURI.prototype.hookSuccess = function (parameters, file) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!parameters["x-success"])
                            return [2 /*return*/];
                        _a = {
                            title: stripMD(file.name)
                        };
                        return [4 /*yield*/, this.generateURI({ filepath: file.path })];
                    case 1:
                        options = (_a.advanceduri = _b.sent(),
                            _a.urlkey = "advanceduri",
                            _a.fileuri = this.getFileUri(file),
                            _a);
                        this.success(parameters, options);
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvancedURI.prototype.getFileUri = function (file) {
        var url = new URL(this.app.vault.getResourcePath(file));
        url.host = "localhosthostlocal";
        url.protocol = "file";
        url.search = "";
        url.pathname = decodeURIComponent(url.pathname);
        var res = url.toString().replace("/localhosthostlocal/", "/");
        return res;
    };
    AdvancedURI.prototype.success = function (parameters, options) {
        if (parameters["x-success"]) {
            var url = new URL(parameters["x-success"]);
            for (var param in options) {
                url.searchParams.set(param, options[param]);
            }
            window.open(url.toString());
        }
    };
    AdvancedURI.prototype.failure = function (parameters, options) {
        if (parameters["x-error"]) {
            var url = new URL(parameters["x-error"]);
            for (var param in options) {
                url.searchParams.set(param, options[param]);
            }
            window.open(url.toString());
        }
    };
    AdvancedURI.prototype.getFileFromUID = function (uid) {
        var _this = this;
        var files = this.app.vault.getFiles();
        var idKey = this.settings.idField;
        return files.find(function (file) { var _a; return obsidian.parseFrontMatterEntry((_a = _this.app.metadataCache.getFileCache(file)) === null || _a === void 0 ? void 0 : _a.frontmatter, idKey) == uid; });
    };
    AdvancedURI.prototype.handleFrontmatterKey = function (parameters) {
        var _a;
        var key = parameters.frontmatterkey;
        var frontmatter = this.app.metadataCache.getCache((_a = parameters.filepath) !== null && _a !== void 0 ? _a : this.app.workspace.getActiveFile().path).frontmatter;
        var res;
        if (key.startsWith("[") && key.endsWith("]")) {
            var list = key.substring(1, key.length - 1).split(",");
            var cache = frontmatter;
            var _loop_1 = function (item) {
                if (cache instanceof Array) {
                    var index = parseInt(item);
                    if (index == NaN) {
                        cache = cache.find(function (e) { return e == item; });
                    }
                    cache = cache[parseInt(item)];
                }
                else {
                    cache = cache[item];
                }
            };
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var item = list_1[_i];
                _loop_1(item);
            }
            res = cache;
        }
        else {
            res = frontmatter[key];
        }
        this.copyText(res);
    };
    AdvancedURI.prototype.handleWorkspace = function (parameters) {
        var _a, _b;
        var workspaces = (_b = (_a = this.app.internalPlugins) === null || _a === void 0 ? void 0 : _a.plugins) === null || _b === void 0 ? void 0 : _b.workspaces;
        if (!workspaces) {
            new obsidian.Notice("Cannot find Workspaces plugin. Please file an issue.");
            this.failure(parameters);
        }
        else if (workspaces.enabled) {
            if (parameters.saveworkspace == "true") {
                var active = workspaces.instance.activeWorkspace;
                workspaces.instance.saveWorkspace(active);
                new obsidian.Notice("Saved current workspace to " + active);
            }
            if (parameters.workspace != undefined) {
                workspaces.instance.loadWorkspace(parameters.workspace);
            }
            this.success(parameters);
        }
        else {
            new obsidian.Notice("Workspaces plugin is not enabled");
            this.failure(parameters);
        }
    };
    AdvancedURI.prototype.handlePluginManagement = function (parameters) {
        if (parameters["enable-plugin"]) {
            var pluginId = parameters["enable-plugin"];
            this.app.plugins.enablePluginAndSave(pluginId);
            new obsidian.Notice("Enabled " + pluginId);
        }
        else if (parameters["disable-plugin"]) {
            var pluginId = parameters["disable-plugin"];
            this.app.plugins.disablePluginAndSave(pluginId);
            new obsidian.Notice("Disabled " + pluginId);
        }
    };
    AdvancedURI.prototype.handleCommand = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var file, view, editor, data, lines, rawCommands, command;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!parameters.filepath) return [3 /*break*/, 6];
                        if (!parameters.mode) return [3 /*break*/, 2];
                        if (parameters.mode == "new") {
                            file = this.app.metadataCache.getFirstLinkpathDest(parameters.filepath, "/");
                            if (file instanceof obsidian.TFile) {
                                parameters.filepath = this.getAlternativeFilePath(file);
                            }
                        }
                        return [4 /*yield*/, this.app.workspace.openLinkText(parameters.filepath, "/", undefined, {
                                state: { mode: "source" }
                            })];
                    case 1:
                        _a.sent();
                        view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
                        if (view) {
                            editor = view.editor;
                            data = editor.getValue();
                            if (parameters.mode === "append") {
                                editor.setValue(data + "\n");
                                lines = editor.lineCount();
                                editor.setCursor({ ch: 0, line: lines });
                            }
                            else if (parameters.mode === "prepend") {
                                editor.setValue("\n" + data);
                                editor.setCursor({ ch: 0, line: 0 });
                            }
                            else if (parameters.mode === "overwrite") {
                                editor.setValue("");
                            }
                        }
                        return [3 /*break*/, 6];
                    case 2:
                        if (!parameters.line) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.app.workspace.openLinkText(parameters.filepath, "/", undefined, {
                                state: { mode: "source" }
                            })];
                    case 3:
                        _a.sent();
                        this.setCursorInLine(parameters.line);
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.app.workspace.openLinkText(parameters.filepath, "/", this.settings.openFileWithoutWriteInNewPane, this.getViewStateFromMode(parameters))];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        if (parameters.commandid) {
                            this.app.commands.executeCommandById(parameters.commandid);
                        }
                        else if (parameters.commandname) {
                            rawCommands = this.app.commands.commands;
                            for (command in rawCommands) {
                                if (rawCommands[command].name === parameters.commandname) {
                                    if (rawCommands[command].callback) {
                                        rawCommands[command].callback();
                                    }
                                    else {
                                        rawCommands[command].checkCallback(false);
                                    }
                                    break;
                                }
                            }
                        }
                        this.success(parameters);
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvancedURI.prototype.handleDoesFileExist = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var exists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.app.vault.adapter.exists(parameters.filepath)];
                    case 1:
                        exists = _a.sent();
                        this.copyText((exists ? 1 : 0).toString());
                        this.success(parameters);
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvancedURI.prototype.handleSearchAndReplace = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var file, abstractFile, data, _a, pattern, flags, regex;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (parameters.filepath) {
                            abstractFile = this.app.vault.getAbstractFileByPath(parameters.filepath);
                            if (abstractFile instanceof obsidian.TFile) {
                                file = abstractFile;
                            }
                        }
                        else {
                            file = this.app.workspace.getActiveFile();
                        }
                        if (!file) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.app.vault.read(file)];
                    case 1:
                        data = _b.sent();
                        if (parameters.searchregex) {
                            try {
                                _a = parameters.searchregex.match(/(\/?)(.+)\1([a-z]*)/i), pattern = _a[2], flags = _a[3];
                                regex = new RegExp(pattern, flags);
                                data = data.replace(regex, parameters.replace);
                                this.success(parameters);
                            }
                            catch (error) {
                                new obsidian.Notice("Can't parse " + parameters.searchregex + " as RegEx");
                                this.failure(parameters);
                            }
                        }
                        else {
                            data = data.replaceAll(parameters.search, parameters.replace);
                            this.success(parameters);
                        }
                        return [4 /*yield*/, this.writeAndOpenFile(file.path, data, parameters)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        new obsidian.Notice("Cannot find file");
                        this.failure(parameters);
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AdvancedURI.prototype.handleWrite = function (parameters, createdDailyNote) {
        var _a;
        if (createdDailyNote === void 0) { createdDailyNote = false; }
        return __awaiter(this, void 0, void 0, function () {
            var file, outFile, path;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (parameters.filepath) {
                            file = this.app.vault.getAbstractFileByPath(parameters.filepath);
                        }
                        else {
                            file = this.app.workspace.getActiveFile();
                        }
                        if (!(parameters.filepath || file)) return [3 /*break*/, 21];
                        outFile = void 0;
                        path = (_a = parameters.filepath) !== null && _a !== void 0 ? _a : file.path;
                        if (!(parameters.mode === "overwrite")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.writeAndOpenFile(path, parameters.data, parameters)];
                    case 1:
                        outFile = _b.sent();
                        this.success(parameters);
                        return [3 /*break*/, 20];
                    case 2:
                        if (!(parameters.mode === "prepend")) return [3 /*break*/, 7];
                        if (!(file instanceof obsidian.TFile)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.prepend(file, parameters)];
                    case 3:
                        outFile = _b.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.prepend(path, parameters)];
                    case 5:
                        outFile = _b.sent();
                        _b.label = 6;
                    case 6:
                        this.success(parameters);
                        return [3 /*break*/, 20];
                    case 7:
                        if (!(parameters.mode === "append")) return [3 /*break*/, 12];
                        if (!(file instanceof obsidian.TFile)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.append(file, parameters)];
                    case 8:
                        outFile = _b.sent();
                        return [3 /*break*/, 11];
                    case 9: return [4 /*yield*/, this.append(path, parameters)];
                    case 10:
                        outFile = _b.sent();
                        _b.label = 11;
                    case 11:
                        this.success(parameters);
                        return [3 /*break*/, 20];
                    case 12:
                        if (!(parameters.mode === "new")) return [3 /*break*/, 17];
                        if (!(file instanceof obsidian.TFile)) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.writeAndOpenFile(this.getAlternativeFilePath(file), parameters.data, parameters)];
                    case 13:
                        outFile = _b.sent();
                        this.hookSuccess(parameters, outFile);
                        return [3 /*break*/, 16];
                    case 14: return [4 /*yield*/, this.writeAndOpenFile(path, parameters.data, parameters)];
                    case 15:
                        outFile = _b.sent();
                        this.hookSuccess(parameters, outFile);
                        _b.label = 16;
                    case 16: return [3 /*break*/, 20];
                    case 17:
                        if (!(!createdDailyNote && file instanceof obsidian.TFile)) return [3 /*break*/, 18];
                        new obsidian.Notice("File already exists");
                        this.failure(parameters);
                        return [3 /*break*/, 20];
                    case 18: return [4 /*yield*/, this.writeAndOpenFile(path, parameters.data, parameters)];
                    case 19:
                        outFile = _b.sent();
                        this.success(parameters);
                        _b.label = 20;
                    case 20:
                        if (parameters.uid) {
                            this.writeUIDToFile(outFile, parameters.uid);
                        }
                        return [3 /*break*/, 22];
                    case 21:
                        new obsidian.Notice("Cannot find file");
                        this.failure(parameters);
                        _b.label = 22;
                    case 22: return [2 /*return*/];
                }
            });
        });
    };
    AdvancedURI.prototype.handleOpen = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var fileIsAlreadyOpened, leaf, viewState, openInNewPane, view, cache, heading, view, cache, block, view;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileIsAlreadyOpened = false;
                        this.app.workspace.iterateAllLeaves(function (leaf) {
                            var _a;
                            if (((_a = leaf.view.file) === null || _a === void 0 ? void 0 : _a.path) === parameters.filepath && leaf.width > 0) {
                                fileIsAlreadyOpened = true;
                                _this.app.workspace.setActiveLeaf(leaf, true, true);
                            }
                        });
                        if (!fileIsAlreadyOpened) return [3 /*break*/, 2];
                        leaf = this.app.workspace.activeLeaf;
                        if (!(parameters.viewmode != undefined)) return [3 /*break*/, 2];
                        viewState = leaf.getViewState();
                        viewState.state.mode = parameters.viewmode;
                        if (viewState.state.source != undefined)
                            viewState.state.source = parameters.viewmode == "source";
                        return [4 /*yield*/, leaf.setViewState(viewState)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        openInNewPane = parameters.newpane !== undefined ? parameters.newpane == "true" : this.settings.openFileWithoutWriteInNewPane;
                        if (!(parameters.heading != undefined)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.app.workspace.openLinkText(parameters.filepath + "#" + parameters.heading, "", openInNewPane, this.getViewStateFromMode(parameters))];
                    case 3:
                        _a.sent();
                        view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
                        if (!view)
                            return [2 /*return*/];
                        cache = this.app.metadataCache.getFileCache(view.file);
                        heading = cache.headings.find(function (e) { return e.heading === parameters.heading; });
                        view.editor.focus();
                        view.editor.setCursor({ line: heading.position.start.line + 1, ch: 0 });
                        return [3 /*break*/, 9];
                    case 4:
                        if (!(parameters.block != undefined)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.app.workspace.openLinkText(parameters.filepath + "#^" + parameters.block, "", openInNewPane, this.getViewStateFromMode(parameters))];
                    case 5:
                        _a.sent();
                        view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
                        if (!view)
                            return [2 /*return*/];
                        cache = this.app.metadataCache.getFileCache(view.file);
                        block = cache.blocks[parameters.block];
                        view.editor.focus();
                        view.editor.setCursor({ line: block.position.start.line, ch: 0 });
                        return [3 /*break*/, 9];
                    case 6:
                        if (!!fileIsAlreadyOpened) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.app.workspace.openLinkText(parameters.filepath, "", openInNewPane, this.getViewStateFromMode(parameters))];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        if (parameters.line != undefined) {
                            this.setCursorInLine(parameters.line);
                        }
                        _a.label = 9;
                    case 9:
                        if (!(parameters.mode != undefined)) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.setCursor(parameters.mode)];
                    case 10:
                        _a.sent();
                        _a.label = 11;
                    case 11:
                        if (parameters.uid) {
                            view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
                            this.writeUIDToFile(view.file, parameters.uid);
                        }
                        this.success(parameters);
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvancedURI.prototype.append = function (file, parameters) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var path, dataToWrite, line, data, lines, fileData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!parameters.heading) return [3 /*break*/, 3];
                        if (!(file instanceof obsidian.TFile)) return [3 /*break*/, 2];
                        path = file.path;
                        line = (_a = this.getEndAndBeginningOfHeading(file, parameters.heading)) === null || _a === void 0 ? void 0 : _a.lastLine;
                        if (line === undefined)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.app.vault.read(file)];
                    case 1:
                        data = _b.sent();
                        lines = data.split("\n");
                        lines.splice.apply(lines, __spreadArray([line, 0], parameters.data.split("\n")));
                        dataToWrite = lines.join("\n");
                        _b.label = 2;
                    case 2: return [3 /*break*/, 7];
                    case 3:
                        fileData = void 0;
                        if (!(file instanceof obsidian.TFile)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.app.vault.read(file)];
                    case 4:
                        fileData = _b.sent();
                        path = file.path;
                        return [3 /*break*/, 6];
                    case 5:
                        path = file;
                        fileData = "";
                        _b.label = 6;
                    case 6:
                        dataToWrite = fileData + "\n" + parameters.data;
                        _b.label = 7;
                    case 7: return [2 /*return*/, this.writeAndOpenFile(path, dataToWrite, parameters)];
                }
            });
        });
    };
    AdvancedURI.prototype.prepend = function (file, parameters) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var path, dataToWrite, line, data, lines, fileData, cache, line, first, last;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!parameters.heading) return [3 /*break*/, 3];
                        if (!(file instanceof obsidian.TFile)) return [3 /*break*/, 2];
                        path = file.path;
                        line = (_a = this.getEndAndBeginningOfHeading(file, parameters.heading)) === null || _a === void 0 ? void 0 : _a.firstLine;
                        if (line === undefined)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.app.vault.read(file)];
                    case 1:
                        data = _b.sent();
                        lines = data.split("\n");
                        lines.splice.apply(lines, __spreadArray([line, 0], parameters.data.split("\n")));
                        dataToWrite = lines.join("\n");
                        _b.label = 2;
                    case 2: return [3 /*break*/, 6];
                    case 3:
                        if (!(file instanceof obsidian.TFile)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.app.vault.read(file)];
                    case 4:
                        fileData = _b.sent();
                        cache = this.app.metadataCache.getFileCache(file);
                        if (cache.frontmatter) {
                            line = cache.frontmatter.position.end.line;
                            first = fileData.split("\n").slice(0, line + 1).join("\n");
                            last = fileData.split("\n").slice(line + 1).join("\n");
                            dataToWrite = first + "\n" + parameters.data + "\n" + last;
                        }
                        else {
                            dataToWrite = parameters.data + "\n" + fileData;
                        }
                        path = file.path;
                        return [3 /*break*/, 6];
                    case 5:
                        path = file;
                        dataToWrite = parameters.data;
                        _b.label = 6;
                    case 6: return [2 /*return*/, this.writeAndOpenFile(path, dataToWrite, parameters)];
                }
            });
        });
    };
    AdvancedURI.prototype.writeAndOpenFile = function (outputFileName, text, parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var file, parts, dir, base64regex, fileIsAlreadyOpened_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = this.app.vault.getAbstractFileByPath(outputFileName);
                        if (!(file instanceof obsidian.TFile)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.app.vault.modify(file, text)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 2:
                        parts = outputFileName.split("/");
                        dir = parts.slice(0, parts.length - 1).join("/");
                        if (!(parts.length > 1 && !(this.app.vault.getAbstractFileByPath(dir) instanceof obsidian.TFolder))) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.app.vault.createFolder(dir)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
                        if (!base64regex.test(text)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.app.vault.createBinary(outputFileName, obsidian.base64ToArrayBuffer(text))];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.app.vault.create(outputFileName, text)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        if (!this.settings.openFileOnWrite) return [3 /*break*/, 11];
                        fileIsAlreadyOpened_1 = false;
                        this.app.workspace.iterateAllLeaves(function (leaf) {
                            var _a;
                            if (((_a = leaf.view.file) === null || _a === void 0 ? void 0 : _a.path) === outputFileName) {
                                fileIsAlreadyOpened_1 = true;
                                _this.app.workspace.setActiveLeaf(leaf, true, true);
                            }
                        });
                        if (!!fileIsAlreadyOpened_1) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.app.workspace.openLinkText(outputFileName, "", parameters.newpane !== undefined ? parameters.newpane == "true" : this.settings.openFileOnWriteInNewPane, this.getViewStateFromMode(parameters))];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10:
                        if (parameters.line != undefined) {
                            this.setCursorInLine(parameters.line);
                        }
                        _a.label = 11;
                    case 11: return [2 /*return*/, this.app.vault.getAbstractFileByPath(outputFileName)];
                }
            });
        });
    };
    AdvancedURI.prototype.getEndAndBeginningOfHeading = function (file, heading) {
        var _a, _b;
        var cache = this.app.metadataCache.getFileCache(file);
        var sections = cache.sections;
        var foundHeading = (_a = cache.headings) === null || _a === void 0 ? void 0 : _a.find(function (e) { return e.heading === heading; });
        if (foundHeading) {
            var foundSectionIndex = sections.findIndex(function (section) { return section.type === "heading" && section.position.start.line === foundHeading.position.start.line; });
            var restSections = sections.slice(foundSectionIndex + 1);
            var nextHeadingIndex = restSections === null || restSections === void 0 ? void 0 : restSections.findIndex(function (e) { return e.type === "heading"; });
            var lastSection = (_b = restSections[(nextHeadingIndex !== -1 ? nextHeadingIndex : restSections.length) - 1]) !== null && _b !== void 0 ? _b : sections[foundSectionIndex];
            var lastLine = lastSection.position.end.line + 1;
            return { "lastLine": lastLine, "firstLine": sections[foundSectionIndex].position.end.line + 1 };
        }
        else {
            new obsidian.Notice("Can't find heading");
        }
    };
    AdvancedURI.prototype.setCursor = function (mode) {
        return __awaiter(this, void 0, void 0, function () {
            var view, editor, viewState, lastLine, lastLineLength;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
                        if (!view) return [3 /*break*/, 4];
                        editor = view.editor;
                        viewState = view.leaf.getViewState();
                        viewState.state.mode = "source";
                        if (!(mode === "append")) return [3 /*break*/, 2];
                        lastLine = editor.lastLine();
                        lastLineLength = editor.getLine(lastLine).length;
                        return [4 /*yield*/, view.leaf.setViewState(viewState, { focus: true })];
                    case 1:
                        _a.sent();
                        editor.setCursor({ ch: lastLineLength, line: lastLine });
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(mode === "prepend")) return [3 /*break*/, 4];
                        return [4 /*yield*/, view.leaf.setViewState(viewState, { focus: true })];
                    case 3:
                        _a.sent();
                        editor.setCursor({ ch: 0, line: 0 });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AdvancedURI.prototype.setCursorInLine = function (rawLine) {
        var view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        if (!view)
            return;
        var line = Math.min(rawLine - 1, view.editor.lineCount() - 1);
        view.editor.focus();
        view.editor.setCursor({ line: line, ch: view.editor.getLine(line).length });
    };
    AdvancedURI.prototype.handleCopyFileURI = function (withoutData, file) {
        var _this = this;
        var view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        if (!view && !file)
            return;
        if (view) {
            var pos = view.editor.getCursor();
            var cache = this.app.metadataCache.getFileCache(view.file);
            if (cache.headings) {
                for (var _i = 0, _a = cache.headings; _i < _a.length; _i++) {
                    var heading = _a[_i];
                    if (heading.position.start.line <= pos.line && heading.position.end.line >= pos.line) {
                        this.copyURI({
                            filepath: view.file.path,
                            heading: heading.heading
                        });
                        return;
                    }
                }
            }
            if (cache.blocks) {
                for (var _b = 0, _c = Object.keys(cache.blocks); _b < _c.length; _b++) {
                    var blockID = _c[_b];
                    var block = cache.blocks[blockID];
                    if (block.position.start.line <= pos.line && block.position.end.line >= pos.line) {
                        this.copyURI({
                            filepath: view.file.path,
                            block: blockID
                        });
                        return;
                    }
                }
            }
        }
        if (withoutData) {
            var file2 = file !== null && file !== void 0 ? file : this.app.workspace.getActiveFile();
            if (!file2) {
                new obsidian.Notice("No file opened");
                return;
            }
            this.copyURI({
                filepath: file2.path,
            });
        }
        else {
            var fileModal = new FileModal(this, "Choose a file", false);
            fileModal.open();
            fileModal.onChooseItem = function (item, _) {
                new EnterDataModal(_this, item.source).open();
            };
        }
    };
    AdvancedURI.prototype.handleOpenSettings = function (parameters) {
        if (this.app.setting.containerEl.parentElement === null) {
            this.app.setting.open();
        }
        if (parameters.settingid == "plugin-browser") {
            this.app.setting.openTabById("community-plugins");
            this.app.setting.activeTab.containerEl.find(".mod-cta").click();
        }
        else if (parameters.settingid == "theme-browser") {
            this.app.setting.openTabById("appearance");
            this.app.setting.activeTab.containerEl.find(".mod-cta").click();
        }
        else {
            this.app.setting.openTabById(parameters.settingid);
        }
        this.success(parameters);
    };
    AdvancedURI.prototype.handleUpdatePlugins = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parameters.settingid = "community-plugins";
                        this.handleOpenSettings(parameters);
                        this.app.setting.activeTab.containerEl.findAll(".mod-cta").last().click();
                        new obsidian.Notice("Waiting 10 seconds");
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 10 * 1000); })];
                    case 1:
                        _a.sent();
                        if (Object.keys(this.app.plugins.updates).length !== 0) {
                            this.app.setting.activeTab.containerEl.findAll(".mod-cta").last().click();
                        }
                        this.success(parameters);
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvancedURI.prototype.getAlternativeFilePath = function (file) {
        var _a;
        var dir = (_a = file.parent) === null || _a === void 0 ? void 0 : _a.path;
        var formattedDir = dir === "/" ? "" : dir;
        var name = file.name;
        for (var index = 1; index < 100; index++) {
            var base = stripMD(name);
            var alternative = formattedDir + (formattedDir == "" ? "" : "/") + base + (" " + index + ".md");
            var exists = this.app.vault.getAbstractFileByPath(alternative) !== null;
            if (!exists) {
                return alternative;
            }
        }
    };
    AdvancedURI.prototype.generateURI = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, file, _a, parameter;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        uri = "obsidian://advanced-uri?vault=" + this.app.vault.getName();
                        file = this.app.vault.getAbstractFileByPath(parameters.filepath);
                        if (!(this.settings.useUID && file instanceof obsidian.TFile)) return [3 /*break*/, 2];
                        parameters.filepath = undefined;
                        _a = parameters;
                        return [4 /*yield*/, this.getUIDFromFile(file)];
                    case 1:
                        _a.uid = _b.sent();
                        _b.label = 2;
                    case 2:
                        for (parameter in parameters) {
                            if (parameters[parameter] != undefined) {
                                uri = uri + ("&" + parameter + "=" + encodeURIComponent(parameters[parameter]));
                            }
                        }
                        return [2 /*return*/, uri];
                }
            });
        });
    };
    AdvancedURI.prototype.copyURI = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.generateURI(parameters)];
                    case 1:
                        uri = _a.sent();
                        return [4 /*yield*/, this.copyText(encodeURI(uri))];
                    case 2:
                        _a.sent();
                        new obsidian.Notice("Advanced URI copied to your clipboard");
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvancedURI.prototype.copyText = function (text) {
        return navigator.clipboard.writeText(text);
    };
    AdvancedURI.prototype.getUIDFromFile = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var cache, i, uid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i <= 20)) return [3 /*break*/, 4];
                        cache = this.app.metadataCache.getFileCache(file);
                        if (cache !== undefined)
                            return [3 /*break*/, 4];
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 150); })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        uid = obsidian.parseFrontMatterEntry(cache.frontmatter, this.settings.idField);
                        if (uid != undefined)
                            return [2 /*return*/, uid];
                        return [4 /*yield*/, this.writeUIDToFile(file, v4())];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AdvancedURI.prototype.writeUIDToFile = function (file, uid) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var frontmatter, fileContent, isYamlEmpty, splitContent, newFileContent;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        frontmatter = (_a = this.app.metadataCache.getFileCache(file)) === null || _a === void 0 ? void 0 : _a.frontmatter;
                        return [4 /*yield*/, this.app.vault.read(file)];
                    case 1:
                        fileContent = _b.sent();
                        isYamlEmpty = ((!frontmatter || frontmatter.length === 0) && !fileContent.match(/^-{3}\s*\n*\r*-{3}/));
                        splitContent = fileContent.split("\n");
                        if (isYamlEmpty) {
                            splitContent.unshift("---");
                            splitContent.unshift(this.settings.idField + ": " + uid);
                            splitContent.unshift("---");
                        }
                        else {
                            splitContent.splice(1, 0, this.settings.idField + ": " + uid);
                        }
                        newFileContent = splitContent.join("\n");
                        return [4 /*yield*/, this.app.vault.modify(file, newFileContent)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, uid];
                }
            });
        });
    };
    AdvancedURI.prototype.getViewStateFromMode = function (parameters) {
        return parameters.viewmode ? { state: { mode: parameters.viewmode } } : undefined;
    };
    AdvancedURI.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [DEFAULT_SETTINGS];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([_e.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvancedURI.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return AdvancedURI;
}(obsidian.Plugin));

module.exports = AdvancedURI;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5vZGVfbW9kdWxlcy9mZWF0aGVyLWljb25zL2Rpc3QvZmVhdGhlci5qcyIsIm5vZGVfbW9kdWxlcy9vYnNpZGlhbi1jb21tdW5pdHktbGliL2Rpc3QvdXRpbHMuanMiLCJub2RlX21vZHVsZXMvb2JzaWRpYW4tZGFpbHktbm90ZXMtaW50ZXJmYWNlL2Rpc3QvbWFpbi5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJzcmMvZGFpbHlfbm90ZV91dGlscy50cyIsInNyYy9tb2RhbHMvY29tbWFuZF9tb2RhbC50cyIsInNyYy9tb2RhbHMvZW50ZXJfZGF0YV9tb2RhbC50cyIsInNyYy9tb2RhbHMvZmlsZV9tb2RhbC50cyIsInNyYy9tb2RhbHMvcmVwbGFjZV9tb2RhbC50cyIsInNyYy9tb2RhbHMvc2VhcmNoX21vZGFsLnRzIiwic3JjL3NldHRpbmdzLnRzIiwic3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmZWF0aGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImZlYXRoZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9kaXN0L2ljb25zLmpzb25cIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9kaXN0L2ljb25zLmpzb24gKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogYWN0aXZpdHksIGFpcnBsYXksIGFsZXJ0LWNpcmNsZSwgYWxlcnQtb2N0YWdvbiwgYWxlcnQtdHJpYW5nbGUsIGFsaWduLWNlbnRlciwgYWxpZ24tanVzdGlmeSwgYWxpZ24tbGVmdCwgYWxpZ24tcmlnaHQsIGFuY2hvciwgYXBlcnR1cmUsIGFyY2hpdmUsIGFycm93LWRvd24tY2lyY2xlLCBhcnJvdy1kb3duLWxlZnQsIGFycm93LWRvd24tcmlnaHQsIGFycm93LWRvd24sIGFycm93LWxlZnQtY2lyY2xlLCBhcnJvdy1sZWZ0LCBhcnJvdy1yaWdodC1jaXJjbGUsIGFycm93LXJpZ2h0LCBhcnJvdy11cC1jaXJjbGUsIGFycm93LXVwLWxlZnQsIGFycm93LXVwLXJpZ2h0LCBhcnJvdy11cCwgYXQtc2lnbiwgYXdhcmQsIGJhci1jaGFydC0yLCBiYXItY2hhcnQsIGJhdHRlcnktY2hhcmdpbmcsIGJhdHRlcnksIGJlbGwtb2ZmLCBiZWxsLCBibHVldG9vdGgsIGJvbGQsIGJvb2stb3BlbiwgYm9vaywgYm9va21hcmssIGJveCwgYnJpZWZjYXNlLCBjYWxlbmRhciwgY2FtZXJhLW9mZiwgY2FtZXJhLCBjYXN0LCBjaGVjay1jaXJjbGUsIGNoZWNrLXNxdWFyZSwgY2hlY2ssIGNoZXZyb24tZG93biwgY2hldnJvbi1sZWZ0LCBjaGV2cm9uLXJpZ2h0LCBjaGV2cm9uLXVwLCBjaGV2cm9ucy1kb3duLCBjaGV2cm9ucy1sZWZ0LCBjaGV2cm9ucy1yaWdodCwgY2hldnJvbnMtdXAsIGNocm9tZSwgY2lyY2xlLCBjbGlwYm9hcmQsIGNsb2NrLCBjbG91ZC1kcml6emxlLCBjbG91ZC1saWdodG5pbmcsIGNsb3VkLW9mZiwgY2xvdWQtcmFpbiwgY2xvdWQtc25vdywgY2xvdWQsIGNvZGUsIGNvZGVwZW4sIGNvZGVzYW5kYm94LCBjb2ZmZWUsIGNvbHVtbnMsIGNvbW1hbmQsIGNvbXBhc3MsIGNvcHksIGNvcm5lci1kb3duLWxlZnQsIGNvcm5lci1kb3duLXJpZ2h0LCBjb3JuZXItbGVmdC1kb3duLCBjb3JuZXItbGVmdC11cCwgY29ybmVyLXJpZ2h0LWRvd24sIGNvcm5lci1yaWdodC11cCwgY29ybmVyLXVwLWxlZnQsIGNvcm5lci11cC1yaWdodCwgY3B1LCBjcmVkaXQtY2FyZCwgY3JvcCwgY3Jvc3NoYWlyLCBkYXRhYmFzZSwgZGVsZXRlLCBkaXNjLCBkaXZpZGUtY2lyY2xlLCBkaXZpZGUtc3F1YXJlLCBkaXZpZGUsIGRvbGxhci1zaWduLCBkb3dubG9hZC1jbG91ZCwgZG93bmxvYWQsIGRyaWJiYmxlLCBkcm9wbGV0LCBlZGl0LTIsIGVkaXQtMywgZWRpdCwgZXh0ZXJuYWwtbGluaywgZXllLW9mZiwgZXllLCBmYWNlYm9vaywgZmFzdC1mb3J3YXJkLCBmZWF0aGVyLCBmaWdtYSwgZmlsZS1taW51cywgZmlsZS1wbHVzLCBmaWxlLXRleHQsIGZpbGUsIGZpbG0sIGZpbHRlciwgZmxhZywgZm9sZGVyLW1pbnVzLCBmb2xkZXItcGx1cywgZm9sZGVyLCBmcmFtZXIsIGZyb3duLCBnaWZ0LCBnaXQtYnJhbmNoLCBnaXQtY29tbWl0LCBnaXQtbWVyZ2UsIGdpdC1wdWxsLXJlcXVlc3QsIGdpdGh1YiwgZ2l0bGFiLCBnbG9iZSwgZ3JpZCwgaGFyZC1kcml2ZSwgaGFzaCwgaGVhZHBob25lcywgaGVhcnQsIGhlbHAtY2lyY2xlLCBoZXhhZ29uLCBob21lLCBpbWFnZSwgaW5ib3gsIGluZm8sIGluc3RhZ3JhbSwgaXRhbGljLCBrZXksIGxheWVycywgbGF5b3V0LCBsaWZlLWJ1b3ksIGxpbmstMiwgbGluaywgbGlua2VkaW4sIGxpc3QsIGxvYWRlciwgbG9jaywgbG9nLWluLCBsb2ctb3V0LCBtYWlsLCBtYXAtcGluLCBtYXAsIG1heGltaXplLTIsIG1heGltaXplLCBtZWgsIG1lbnUsIG1lc3NhZ2UtY2lyY2xlLCBtZXNzYWdlLXNxdWFyZSwgbWljLW9mZiwgbWljLCBtaW5pbWl6ZS0yLCBtaW5pbWl6ZSwgbWludXMtY2lyY2xlLCBtaW51cy1zcXVhcmUsIG1pbnVzLCBtb25pdG9yLCBtb29uLCBtb3JlLWhvcml6b250YWwsIG1vcmUtdmVydGljYWwsIG1vdXNlLXBvaW50ZXIsIG1vdmUsIG11c2ljLCBuYXZpZ2F0aW9uLTIsIG5hdmlnYXRpb24sIG9jdGFnb24sIHBhY2thZ2UsIHBhcGVyY2xpcCwgcGF1c2UtY2lyY2xlLCBwYXVzZSwgcGVuLXRvb2wsIHBlcmNlbnQsIHBob25lLWNhbGwsIHBob25lLWZvcndhcmRlZCwgcGhvbmUtaW5jb21pbmcsIHBob25lLW1pc3NlZCwgcGhvbmUtb2ZmLCBwaG9uZS1vdXRnb2luZywgcGhvbmUsIHBpZS1jaGFydCwgcGxheS1jaXJjbGUsIHBsYXksIHBsdXMtY2lyY2xlLCBwbHVzLXNxdWFyZSwgcGx1cywgcG9ja2V0LCBwb3dlciwgcHJpbnRlciwgcmFkaW8sIHJlZnJlc2gtY2N3LCByZWZyZXNoLWN3LCByZXBlYXQsIHJld2luZCwgcm90YXRlLWNjdywgcm90YXRlLWN3LCByc3MsIHNhdmUsIHNjaXNzb3JzLCBzZWFyY2gsIHNlbmQsIHNlcnZlciwgc2V0dGluZ3MsIHNoYXJlLTIsIHNoYXJlLCBzaGllbGQtb2ZmLCBzaGllbGQsIHNob3BwaW5nLWJhZywgc2hvcHBpbmctY2FydCwgc2h1ZmZsZSwgc2lkZWJhciwgc2tpcC1iYWNrLCBza2lwLWZvcndhcmQsIHNsYWNrLCBzbGFzaCwgc2xpZGVycywgc21hcnRwaG9uZSwgc21pbGUsIHNwZWFrZXIsIHNxdWFyZSwgc3Rhciwgc3RvcC1jaXJjbGUsIHN1biwgc3VucmlzZSwgc3Vuc2V0LCB0YWJsZXQsIHRhZywgdGFyZ2V0LCB0ZXJtaW5hbCwgdGhlcm1vbWV0ZXIsIHRodW1icy1kb3duLCB0aHVtYnMtdXAsIHRvZ2dsZS1sZWZ0LCB0b2dnbGUtcmlnaHQsIHRvb2wsIHRyYXNoLTIsIHRyYXNoLCB0cmVsbG8sIHRyZW5kaW5nLWRvd24sIHRyZW5kaW5nLXVwLCB0cmlhbmdsZSwgdHJ1Y2ssIHR2LCB0d2l0Y2gsIHR3aXR0ZXIsIHR5cGUsIHVtYnJlbGxhLCB1bmRlcmxpbmUsIHVubG9jaywgdXBsb2FkLWNsb3VkLCB1cGxvYWQsIHVzZXItY2hlY2ssIHVzZXItbWludXMsIHVzZXItcGx1cywgdXNlci14LCB1c2VyLCB1c2VycywgdmlkZW8tb2ZmLCB2aWRlbywgdm9pY2VtYWlsLCB2b2x1bWUtMSwgdm9sdW1lLTIsIHZvbHVtZS14LCB2b2x1bWUsIHdhdGNoLCB3aWZpLW9mZiwgd2lmaSwgd2luZCwgeC1jaXJjbGUsIHgtb2N0YWdvbiwgeC1zcXVhcmUsIHgsIHlvdXR1YmUsIHphcC1vZmYsIHphcCwgem9vbS1pbiwgem9vbS1vdXQsIGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxubW9kdWxlLmV4cG9ydHMgPSB7XCJhY3Rpdml0eVwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMjIgMTIgMTggMTIgMTUgMjEgOSAzIDYgMTIgMiAxMlxcXCI+PC9wb2x5bGluZT5cIixcImFpcnBsYXlcIjpcIjxwYXRoIGQ9XFxcIk01IDE3SDRhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoMTZhMiAyIDAgMCAxIDIgMnYxMGEyIDIgMCAwIDEtMiAyaC0xXFxcIj48L3BhdGg+PHBvbHlnb24gcG9pbnRzPVxcXCIxMiAxNSAxNyAyMSA3IDIxIDEyIDE1XFxcIj48L3BvbHlnb24+XCIsXCJhbGVydC1jaXJjbGVcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE2XFxcIiB4Mj1cXFwiMTIuMDFcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPlwiLFwiYWxlcnQtb2N0YWdvblwiOlwiPHBvbHlnb24gcG9pbnRzPVxcXCI3Ljg2IDIgMTYuMTQgMiAyMiA3Ljg2IDIyIDE2LjE0IDE2LjE0IDIyIDcuODYgMjIgMiAxNi4xNCAyIDcuODYgNy44NiAyXFxcIj48L3BvbHlnb24+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiOFxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxNlxcXCIgeDI9XFxcIjEyLjAxXFxcIiB5Mj1cXFwiMTZcXFwiPjwvbGluZT5cIixcImFsZXJ0LXRyaWFuZ2xlXCI6XCI8cGF0aCBkPVxcXCJNMTAuMjkgMy44NkwxLjgyIDE4YTIgMiAwIDAgMCAxLjcxIDNoMTYuOTRhMiAyIDAgMCAwIDEuNzEtM0wxMy43MSAzLjg2YTIgMiAwIDAgMC0zLjQyIDB6XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiOVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTNcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxN1xcXCIgeDI9XFxcIjEyLjAxXFxcIiB5Mj1cXFwiMTdcXFwiPjwvbGluZT5cIixcImFsaWduLWNlbnRlclwiOlwiPGxpbmUgeDE9XFxcIjE4XFxcIiB5MT1cXFwiMTBcXFwiIHgyPVxcXCI2XFxcIiB5Mj1cXFwiMTBcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMjFcXFwiIHkxPVxcXCI2XFxcIiB4Mj1cXFwiM1xcXCIgeTI9XFxcIjZcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMjFcXFwiIHkxPVxcXCIxNFxcXCIgeDI9XFxcIjNcXFwiIHkyPVxcXCIxNFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxOFxcXCIgeTE9XFxcIjE4XFxcIiB4Mj1cXFwiNlxcXCIgeTI9XFxcIjE4XFxcIj48L2xpbmU+XCIsXCJhbGlnbi1qdXN0aWZ5XCI6XCI8bGluZSB4MT1cXFwiMjFcXFwiIHkxPVxcXCIxMFxcXCIgeDI9XFxcIjNcXFwiIHkyPVxcXCIxMFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjZcXFwiIHgyPVxcXCIzXFxcIiB5Mj1cXFwiNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjE0XFxcIiB4Mj1cXFwiM1xcXCIgeTI9XFxcIjE0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjIxXFxcIiB5MT1cXFwiMThcXFwiIHgyPVxcXCIzXFxcIiB5Mj1cXFwiMThcXFwiPjwvbGluZT5cIixcImFsaWduLWxlZnRcIjpcIjxsaW5lIHgxPVxcXCIxN1xcXCIgeTE9XFxcIjEwXFxcIiB4Mj1cXFwiM1xcXCIgeTI9XFxcIjEwXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjIxXFxcIiB5MT1cXFwiNlxcXCIgeDI9XFxcIjNcXFwiIHkyPVxcXCI2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjIxXFxcIiB5MT1cXFwiMTRcXFwiIHgyPVxcXCIzXFxcIiB5Mj1cXFwiMTRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTdcXFwiIHkxPVxcXCIxOFxcXCIgeDI9XFxcIjNcXFwiIHkyPVxcXCIxOFxcXCI+PC9saW5lPlwiLFwiYWxpZ24tcmlnaHRcIjpcIjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjEwXFxcIiB4Mj1cXFwiN1xcXCIgeTI9XFxcIjEwXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjIxXFxcIiB5MT1cXFwiNlxcXCIgeDI9XFxcIjNcXFwiIHkyPVxcXCI2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjIxXFxcIiB5MT1cXFwiMTRcXFwiIHgyPVxcXCIzXFxcIiB5Mj1cXFwiMTRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMjFcXFwiIHkxPVxcXCIxOFxcXCIgeDI9XFxcIjdcXFwiIHkyPVxcXCIxOFxcXCI+PC9saW5lPlwiLFwiYW5jaG9yXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjVcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjIyXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCI4XFxcIj48L2xpbmU+PHBhdGggZD1cXFwiTTUgMTJIMmExMCAxMCAwIDAgMCAyMCAwaC0zXFxcIj48L3BhdGg+XCIsXCJhcGVydHVyZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIxNC4zMVxcXCIgeTE9XFxcIjhcXFwiIHgyPVxcXCIyMC4wNVxcXCIgeTI9XFxcIjE3Ljk0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjkuNjlcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMjEuMTdcXFwiIHkyPVxcXCI4XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjcuMzhcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjEzLjEyXFxcIiB5Mj1cXFwiMi4wNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI5LjY5XFxcIiB5MT1cXFwiMTZcXFwiIHgyPVxcXCIzLjk1XFxcIiB5Mj1cXFwiNi4wNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNC4zMVxcXCIgeTE9XFxcIjE2XFxcIiB4Mj1cXFwiMi44M1xcXCIgeTI9XFxcIjE2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE2LjYyXFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxMC44OFxcXCIgeTI9XFxcIjIxLjk0XFxcIj48L2xpbmU+XCIsXCJhcmNoaXZlXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIyMSA4IDIxIDIxIDMgMjEgMyA4XFxcIj48L3BvbHlsaW5lPjxyZWN0IHg9XFxcIjFcXFwiIHk9XFxcIjNcXFwiIHdpZHRoPVxcXCIyMlxcXCIgaGVpZ2h0PVxcXCI1XFxcIj48L3JlY3Q+PGxpbmUgeDE9XFxcIjEwXFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxNFxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJhcnJvdy1kb3duLWNpcmNsZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxwb2x5bGluZSBwb2ludHM9XFxcIjggMTIgMTIgMTYgMTYgMTJcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiOFxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTZcXFwiPjwvbGluZT5cIixcImFycm93LWRvd24tbGVmdFwiOlwiPGxpbmUgeDE9XFxcIjE3XFxcIiB5MT1cXFwiN1xcXCIgeDI9XFxcIjdcXFwiIHkyPVxcXCIxN1xcXCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjE3IDE3IDcgMTcgNyA3XFxcIj48L3BvbHlsaW5lPlwiLFwiYXJyb3ctZG93bi1yaWdodFwiOlwiPGxpbmUgeDE9XFxcIjdcXFwiIHkxPVxcXCI3XFxcIiB4Mj1cXFwiMTdcXFwiIHkyPVxcXCIxN1xcXCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjE3IDcgMTcgMTcgNyAxN1xcXCI+PC9wb2x5bGluZT5cIixcImFycm93LWRvd25cIjpcIjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjVcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjE5XFxcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTkgMTIgMTIgMTkgNSAxMlxcXCI+PC9wb2x5bGluZT5cIixcImFycm93LWxlZnQtY2lyY2xlXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTIgOCA4IDEyIDEyIDE2XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIxNlxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiOFxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJhcnJvdy1sZWZ0XCI6XCI8bGluZSB4MT1cXFwiMTlcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjVcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjEyIDE5IDUgMTIgMTIgNVxcXCI+PC9wb2x5bGluZT5cIixcImFycm93LXJpZ2h0LWNpcmNsZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxwb2x5bGluZSBwb2ludHM9XFxcIjEyIDE2IDE2IDEyIDEyIDhcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT5cIixcImFycm93LXJpZ2h0XCI6XCI8bGluZSB4MT1cXFwiNVxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMTlcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjEyIDUgMTkgMTIgMTIgMTlcXFwiPjwvcG9seWxpbmU+XCIsXCJhcnJvdy11cC1jaXJjbGVcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48cG9seWxpbmUgcG9pbnRzPVxcXCIxNiAxMiAxMiA4IDggMTJcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMTZcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjhcXFwiPjwvbGluZT5cIixcImFycm93LXVwLWxlZnRcIjpcIjxsaW5lIHgxPVxcXCIxN1xcXCIgeTE9XFxcIjE3XFxcIiB4Mj1cXFwiN1xcXCIgeTI9XFxcIjdcXFwiPjwvbGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCI3IDE3IDcgNyAxNyA3XFxcIj48L3BvbHlsaW5lPlwiLFwiYXJyb3ctdXAtcmlnaHRcIjpcIjxsaW5lIHgxPVxcXCI3XFxcIiB5MT1cXFwiMTdcXFwiIHgyPVxcXCIxN1xcXCIgeTI9XFxcIjdcXFwiPjwvbGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCI3IDcgMTcgNyAxNyAxN1xcXCI+PC9wb2x5bGluZT5cIixcImFycm93LXVwXCI6XCI8bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxOVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiNVxcXCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjUgMTIgMTIgNSAxOSAxMlxcXCI+PC9wb2x5bGluZT5cIixcImF0LXNpZ25cIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjRcXFwiPjwvY2lyY2xlPjxwYXRoIGQ9XFxcIk0xNiA4djVhMyAzIDAgMCAwIDYgMHYtMWExMCAxMCAwIDEgMC0zLjkyIDcuOTRcXFwiPjwvcGF0aD5cIixcImF3YXJkXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjhcXFwiIHI9XFxcIjdcXFwiPjwvY2lyY2xlPjxwb2x5bGluZSBwb2ludHM9XFxcIjguMjEgMTMuODkgNyAyMyAxMiAyMCAxNyAyMyAxNS43OSAxMy44OFxcXCI+PC9wb2x5bGluZT5cIixcImJhci1jaGFydC0yXCI6XCI8bGluZSB4MT1cXFwiMThcXFwiIHkxPVxcXCIyMFxcXCIgeDI9XFxcIjE4XFxcIiB5Mj1cXFwiMTBcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyMFxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiNFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI2XFxcIiB5MT1cXFwiMjBcXFwiIHgyPVxcXCI2XFxcIiB5Mj1cXFwiMTRcXFwiPjwvbGluZT5cIixcImJhci1jaGFydFwiOlwiPGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMjBcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjEwXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE4XFxcIiB5MT1cXFwiMjBcXFwiIHgyPVxcXCIxOFxcXCIgeTI9XFxcIjRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiNlxcXCIgeTE9XFxcIjIwXFxcIiB4Mj1cXFwiNlxcXCIgeTI9XFxcIjE2XFxcIj48L2xpbmU+XCIsXCJiYXR0ZXJ5LWNoYXJnaW5nXCI6XCI8cGF0aCBkPVxcXCJNNSAxOEgzYTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDMuMTlNMTUgNmgyYTIgMiAwIDAgMSAyIDJ2OGEyIDIgMCAwIDEtMiAyaC0zLjE5XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjIzXFxcIiB5MT1cXFwiMTNcXFwiIHgyPVxcXCIyM1xcXCIgeTI9XFxcIjExXFxcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTEgNiA3IDEyIDEzIDEyIDkgMThcXFwiPjwvcG9seWxpbmU+XCIsXCJiYXR0ZXJ5XCI6XCI8cmVjdCB4PVxcXCIxXFxcIiB5PVxcXCI2XFxcIiB3aWR0aD1cXFwiMThcXFwiIGhlaWdodD1cXFwiMTJcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PjxsaW5lIHgxPVxcXCIyM1xcXCIgeTE9XFxcIjEzXFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIxMVxcXCI+PC9saW5lPlwiLFwiYmVsbC1vZmZcIjpcIjxwYXRoIGQ9XFxcIk0xMy43MyAyMWEyIDIgMCAwIDEtMy40NiAwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE4LjYzIDEzQTE3Ljg5IDE3Ljg5IDAgMCAxIDE4IDhcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNi4yNiA2LjI2QTUuODYgNS44NiAwIDAgMCA2IDhjMCA3LTMgOS0zIDloMTRcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTggOGE2IDYgMCAwIDAtOS4zMy01XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPlwiLFwiYmVsbFwiOlwiPHBhdGggZD1cXFwiTTE4IDhBNiA2IDAgMCAwIDYgOGMwIDctMyA5LTMgOWgxOHMtMy0yLTMtOVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMy43MyAyMWEyIDIgMCAwIDEtMy40NiAwXFxcIj48L3BhdGg+XCIsXCJibHVldG9vdGhcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjYuNSA2LjUgMTcuNSAxNy41IDEyIDIzIDEyIDEgMTcuNSA2LjUgNi41IDE3LjVcXFwiPjwvcG9seWxpbmU+XCIsXCJib2xkXCI6XCI8cGF0aCBkPVxcXCJNNiA0aDhhNCA0IDAgMCAxIDQgNCA0IDQgMCAwIDEtNCA0SDZ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTYgMTJoOWE0IDQgMCAwIDEgNCA0IDQgNCAwIDAgMS00IDRINnpcXFwiPjwvcGF0aD5cIixcImJvb2stb3BlblwiOlwiPHBhdGggZD1cXFwiTTIgM2g2YTQgNCAwIDAgMSA0IDR2MTRhMyAzIDAgMCAwLTMtM0gyelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yMiAzaC02YTQgNCAwIDAgMC00IDR2MTRhMyAzIDAgMCAxIDMtM2g3elxcXCI+PC9wYXRoPlwiLFwiYm9va1wiOlwiPHBhdGggZD1cXFwiTTQgMTkuNUEyLjUgMi41IDAgMCAxIDYuNSAxN0gyMFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk02LjUgMkgyMHYyMEg2LjVBMi41IDIuNSAwIDAgMSA0IDE5LjV2LTE1QTIuNSAyLjUgMCAwIDEgNi41IDJ6XFxcIj48L3BhdGg+XCIsXCJib29rbWFya1wiOlwiPHBhdGggZD1cXFwiTTE5IDIxbC03LTUtNyA1VjVhMiAyIDAgMCAxIDItMmgxMGEyIDIgMCAwIDEgMiAyelxcXCI+PC9wYXRoPlwiLFwiYm94XCI6XCI8cGF0aCBkPVxcXCJNMjEgMTZWOGEyIDIgMCAwIDAtMS0xLjczbC03LTRhMiAyIDAgMCAwLTIgMGwtNyA0QTIgMiAwIDAgMCAzIDh2OGEyIDIgMCAwIDAgMSAxLjczbDcgNGEyIDIgMCAwIDAgMiAwbDctNEEyIDIgMCAwIDAgMjEgMTZ6XFxcIj48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz1cXFwiMy4yNyA2Ljk2IDEyIDEyLjAxIDIwLjczIDYuOTZcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMjIuMDhcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJicmllZmNhc2VcIjpcIjxyZWN0IHg9XFxcIjJcXFwiIHk9XFxcIjdcXFwiIHdpZHRoPVxcXCIyMFxcXCIgaGVpZ2h0PVxcXCIxNFxcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+PHBhdGggZD1cXFwiTTE2IDIxVjVhMiAyIDAgMCAwLTItMmgtNGEyIDIgMCAwIDAtMiAydjE2XFxcIj48L3BhdGg+XCIsXCJjYWxlbmRhclwiOlwiPHJlY3QgeD1cXFwiM1xcXCIgeT1cXFwiNFxcXCIgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE4XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiMTZcXFwiIHkxPVxcXCIyXFxcIiB4Mj1cXFwiMTZcXFwiIHkyPVxcXCI2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIyXFxcIiB4Mj1cXFwiOFxcXCIgeTI9XFxcIjZcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiM1xcXCIgeTE9XFxcIjEwXFxcIiB4Mj1cXFwiMjFcXFwiIHkyPVxcXCIxMFxcXCI+PC9saW5lPlwiLFwiY2FtZXJhLW9mZlwiOlwiPGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPjxwYXRoIGQ9XFxcIk0yMSAyMUgzYTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDNtMy0zaDZsMiAzaDRhMiAyIDAgMCAxIDIgMnY5LjM0bS03LjcyLTIuMDZhNCA0IDAgMSAxLTUuNTYtNS41NlxcXCI+PC9wYXRoPlwiLFwiY2FtZXJhXCI6XCI8cGF0aCBkPVxcXCJNMjMgMTlhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDRsMi0zaDZsMiAzaDRhMiAyIDAgMCAxIDIgMnpcXFwiPjwvcGF0aD48Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEzXFxcIiByPVxcXCI0XFxcIj48L2NpcmNsZT5cIixcImNhc3RcIjpcIjxwYXRoIGQ9XFxcIk0yIDE2LjFBNSA1IDAgMCAxIDUuOSAyME0yIDEyLjA1QTkgOSAwIDAgMSA5Ljk1IDIwTTIgOFY2YTIgMiAwIDAgMSAyLTJoMTZhMiAyIDAgMCAxIDIgMnYxMmEyIDIgMCAwIDEtMiAyaC02XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjJcXFwiIHkxPVxcXCIyMFxcXCIgeDI9XFxcIjIuMDFcXFwiIHkyPVxcXCIyMFxcXCI+PC9saW5lPlwiLFwiY2hlY2stY2lyY2xlXCI6XCI8cGF0aCBkPVxcXCJNMjIgMTEuMDhWMTJhMTAgMTAgMCAxIDEtNS45My05LjE0XFxcIj48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz1cXFwiMjIgNCAxMiAxNC4wMSA5IDExLjAxXFxcIj48L3BvbHlsaW5lPlwiLFwiY2hlY2stc3F1YXJlXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCI5IDExIDEyIDE0IDIyIDRcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTIxIDEydjdhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDExXFxcIj48L3BhdGg+XCIsXCJjaGVja1wiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMjAgNiA5IDE3IDQgMTJcXFwiPjwvcG9seWxpbmU+XCIsXCJjaGV2cm9uLWRvd25cIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjYgOSAxMiAxNSAxOCA5XFxcIj48L3BvbHlsaW5lPlwiLFwiY2hldnJvbi1sZWZ0XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxNSAxOCA5IDEyIDE1IDZcXFwiPjwvcG9seWxpbmU+XCIsXCJjaGV2cm9uLXJpZ2h0XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCI5IDE4IDE1IDEyIDkgNlxcXCI+PC9wb2x5bGluZT5cIixcImNoZXZyb24tdXBcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjE4IDE1IDEyIDkgNiAxNVxcXCI+PC9wb2x5bGluZT5cIixcImNoZXZyb25zLWRvd25cIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjcgMTMgMTIgMTggMTcgMTNcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiNyA2IDEyIDExIDE3IDZcXFwiPjwvcG9seWxpbmU+XCIsXCJjaGV2cm9ucy1sZWZ0XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxMSAxNyA2IDEyIDExIDdcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTggMTcgMTMgMTIgMTggN1xcXCI+PC9wb2x5bGluZT5cIixcImNoZXZyb25zLXJpZ2h0XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxMyAxNyAxOCAxMiAxMyA3XFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjYgMTcgMTEgMTIgNiA3XFxcIj48L3BvbHlsaW5lPlwiLFwiY2hldnJvbnMtdXBcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjE3IDExIDEyIDYgNyAxMVxcXCI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCIxNyAxOCAxMiAxMyA3IDE4XFxcIj48L3BvbHlsaW5lPlwiLFwiY2hyb21lXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiNFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjIxLjE3XFxcIiB5MT1cXFwiOFxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiOFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIzLjk1XFxcIiB5MT1cXFwiNi4wNlxcXCIgeDI9XFxcIjguNTRcXFwiIHkyPVxcXCIxNFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMC44OFxcXCIgeTE9XFxcIjIxLjk0XFxcIiB4Mj1cXFwiMTUuNDZcXFwiIHkyPVxcXCIxNFxcXCI+PC9saW5lPlwiLFwiY2lyY2xlXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+XCIsXCJjbGlwYm9hcmRcIjpcIjxwYXRoIGQ9XFxcIk0xNiA0aDJhMiAyIDAgMCAxIDIgMnYxNGEyIDIgMCAwIDEtMiAySDZhMiAyIDAgMCAxLTItMlY2YTIgMiAwIDAgMSAyLTJoMlxcXCI+PC9wYXRoPjxyZWN0IHg9XFxcIjhcXFwiIHk9XFxcIjJcXFwiIHdpZHRoPVxcXCI4XFxcIiBoZWlnaHQ9XFxcIjRcXFwiIHJ4PVxcXCIxXFxcIiByeT1cXFwiMVxcXCI+PC9yZWN0PlwiLFwiY2xvY2tcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48cG9seWxpbmUgcG9pbnRzPVxcXCIxMiA2IDEyIDEyIDE2IDE0XFxcIj48L3BvbHlsaW5lPlwiLFwiY2xvdWQtZHJpenpsZVwiOlwiPGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIxOVxcXCIgeDI9XFxcIjhcXFwiIHkyPVxcXCIyMVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMTNcXFwiIHgyPVxcXCI4XFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTZcXFwiIHkxPVxcXCIxOVxcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiMjFcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTZcXFwiIHkxPVxcXCIxM1xcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyMVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMjNcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxNVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTdcXFwiPjwvbGluZT48cGF0aCBkPVxcXCJNMjAgMTYuNThBNSA1IDAgMCAwIDE4IDdoLTEuMjZBOCA4IDAgMSAwIDQgMTUuMjVcXFwiPjwvcGF0aD5cIixcImNsb3VkLWxpZ2h0bmluZ1wiOlwiPHBhdGggZD1cXFwiTTE5IDE2LjlBNSA1IDAgMCAwIDE4IDdoLTEuMjZhOCA4IDAgMSAwLTExLjYyIDlcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIxMyAxMSA5IDE3IDE1IDE3IDExIDIzXFxcIj48L3BvbHlsaW5lPlwiLFwiY2xvdWQtb2ZmXCI6XCI8cGF0aCBkPVxcXCJNMjIuNjEgMTYuOTVBNSA1IDAgMCAwIDE4IDEwaC0xLjI2YTggOCAwIDAgMC03LjA1LTZNNSA1YTggOCAwIDAgMCA0IDE1aDlhNSA1IDAgMCAwIDEuNy0uM1xcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCIxXFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjIzXFxcIiB5Mj1cXFwiMjNcXFwiPjwvbGluZT5cIixcImNsb3VkLXJhaW5cIjpcIjxsaW5lIHgxPVxcXCIxNlxcXCIgeTE9XFxcIjEzXFxcIiB4Mj1cXFwiMTZcXFwiIHkyPVxcXCIyMVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMTNcXFwiIHgyPVxcXCI4XFxcIiB5Mj1cXFwiMjFcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxNVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMjNcXFwiPjwvbGluZT48cGF0aCBkPVxcXCJNMjAgMTYuNThBNSA1IDAgMCAwIDE4IDdoLTEuMjZBOCA4IDAgMSAwIDQgMTUuMjVcXFwiPjwvcGF0aD5cIixcImNsb3VkLXNub3dcIjpcIjxwYXRoIGQ9XFxcIk0yMCAxNy41OEE1IDUgMCAwIDAgMTggOGgtMS4yNkE4IDggMCAxIDAgNCAxNi4yNVxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMTZcXFwiIHgyPVxcXCI4LjAxXFxcIiB5Mj1cXFwiMTZcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiOFxcXCIgeTE9XFxcIjIwXFxcIiB4Mj1cXFwiOC4wMVxcXCIgeTI9XFxcIjIwXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMThcXFwiIHgyPVxcXCIxMi4wMVxcXCIgeTI9XFxcIjE4XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMjJcXFwiIHgyPVxcXCIxMi4wMVxcXCIgeTI9XFxcIjIyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE2XFxcIiB5MT1cXFwiMTZcXFwiIHgyPVxcXCIxNi4wMVxcXCIgeTI9XFxcIjE2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE2XFxcIiB5MT1cXFwiMjBcXFwiIHgyPVxcXCIxNi4wMVxcXCIgeTI9XFxcIjIwXFxcIj48L2xpbmU+XCIsXCJjbG91ZFwiOlwiPHBhdGggZD1cXFwiTTE4IDEwaC0xLjI2QTggOCAwIDEgMCA5IDIwaDlhNSA1IDAgMCAwIDAtMTB6XFxcIj48L3BhdGg+XCIsXCJjb2RlXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxNiAxOCAyMiAxMiAxNiA2XFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjggNiAyIDEyIDggMThcXFwiPjwvcG9seWxpbmU+XCIsXCJjb2RlcGVuXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjEyIDIgMjIgOC41IDIyIDE1LjUgMTIgMjIgMiAxNS41IDIgOC41IDEyIDJcXFwiPjwvcG9seWdvbj48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyMlxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTUuNVxcXCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjIyIDguNSAxMiAxNS41IDIgOC41XFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjIgMTUuNSAxMiA4LjUgMjIgMTUuNVxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCI4LjVcXFwiPjwvbGluZT5cIixcImNvZGVzYW5kYm94XCI6XCI8cGF0aCBkPVxcXCJNMjEgMTZWOGEyIDIgMCAwIDAtMS0xLjczbC03LTRhMiAyIDAgMCAwLTIgMGwtNyA0QTIgMiAwIDAgMCAzIDh2OGEyIDIgMCAwIDAgMSAxLjczbDcgNGEyIDIgMCAwIDAgMiAwbDctNEEyIDIgMCAwIDAgMjEgMTZ6XFxcIj48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz1cXFwiNy41IDQuMjEgMTIgNi44MSAxNi41IDQuMjFcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiNy41IDE5Ljc5IDcuNSAxNC42IDMgMTJcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMjEgMTIgMTYuNSAxNC42IDE2LjUgMTkuNzlcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMy4yNyA2Ljk2IDEyIDEyLjAxIDIwLjczIDYuOTZcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMjIuMDhcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJjb2ZmZWVcIjpcIjxwYXRoIGQ9XFxcIk0xOCA4aDFhNCA0IDAgMCAxIDAgOGgtMVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yIDhoMTZ2OWE0IDQgMCAwIDEtNCA0SDZhNCA0IDAgMCAxLTQtNFY4elxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCI2XFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjZcXFwiIHkyPVxcXCI0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEwXFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjEwXFxcIiB5Mj1cXFwiNFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNFxcXCIgeTE9XFxcIjFcXFwiIHgyPVxcXCIxNFxcXCIgeTI9XFxcIjRcXFwiPjwvbGluZT5cIixcImNvbHVtbnNcIjpcIjxwYXRoIGQ9XFxcIk0xMiAzaDdhMiAyIDAgMCAxIDIgMnYxNGEyIDIgMCAwIDEtMiAyaC03bTAtMThINWEyIDIgMCAwIDAtMiAydjE0YTIgMiAwIDAgMCAyIDJoN20wLTE4djE4XFxcIj48L3BhdGg+XCIsXCJjb21tYW5kXCI6XCI8cGF0aCBkPVxcXCJNMTggM2EzIDMgMCAwIDAtMyAzdjEyYTMgMyAwIDAgMCAzIDMgMyAzIDAgMCAwIDMtMyAzIDMgMCAwIDAtMy0zSDZhMyAzIDAgMCAwLTMgMyAzIDMgMCAwIDAgMyAzIDMgMyAwIDAgMCAzLTNWNmEzIDMgMCAwIDAtMy0zIDMgMyAwIDAgMC0zIDMgMyAzIDAgMCAwIDMgM2gxMmEzIDMgMCAwIDAgMy0zIDMgMyAwIDAgMC0zLTN6XFxcIj48L3BhdGg+XCIsXCJjb21wYXNzXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PHBvbHlnb24gcG9pbnRzPVxcXCIxNi4yNCA3Ljc2IDE0LjEyIDE0LjEyIDcuNzYgMTYuMjQgOS44OCA5Ljg4IDE2LjI0IDcuNzZcXFwiPjwvcG9seWdvbj5cIixcImNvcHlcIjpcIjxyZWN0IHg9XFxcIjlcXFwiIHk9XFxcIjlcXFwiIHdpZHRoPVxcXCIxM1xcXCIgaGVpZ2h0PVxcXCIxM1xcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+PHBhdGggZD1cXFwiTTUgMTVINGEyIDIgMCAwIDEtMi0yVjRhMiAyIDAgMCAxIDItMmg5YTIgMiAwIDAgMSAyIDJ2MVxcXCI+PC9wYXRoPlwiLFwiY29ybmVyLWRvd24tbGVmdFwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiOSAxMCA0IDE1IDkgMjBcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTIwIDR2N2E0IDQgMCAwIDEtNCA0SDRcXFwiPjwvcGF0aD5cIixcImNvcm5lci1kb3duLXJpZ2h0XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxNSAxMCAyMCAxNSAxNSAyMFxcXCI+PC9wb2x5bGluZT48cGF0aCBkPVxcXCJNNCA0djdhNCA0IDAgMCAwIDQgNGgxMlxcXCI+PC9wYXRoPlwiLFwiY29ybmVyLWxlZnQtZG93blwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMTQgMTUgOSAyMCA0IDE1XFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk0yMCA0aC03YTQgNCAwIDAgMC00IDR2MTJcXFwiPjwvcGF0aD5cIixcImNvcm5lci1sZWZ0LXVwXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxNCA5IDkgNCA0IDlcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTIwIDIwaC03YTQgNCAwIDAgMS00LTRWNFxcXCI+PC9wYXRoPlwiLFwiY29ybmVyLXJpZ2h0LWRvd25cIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjEwIDE1IDE1IDIwIDIwIDE1XFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk00IDRoN2E0IDQgMCAwIDEgNCA0djEyXFxcIj48L3BhdGg+XCIsXCJjb3JuZXItcmlnaHQtdXBcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjEwIDkgMTUgNCAyMCA5XFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk00IDIwaDdhNCA0IDAgMCAwIDQtNFY0XFxcIj48L3BhdGg+XCIsXCJjb3JuZXItdXAtbGVmdFwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiOSAxNCA0IDkgOSA0XFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk0yMCAyMHYtN2E0IDQgMCAwIDAtNC00SDRcXFwiPjwvcGF0aD5cIixcImNvcm5lci11cC1yaWdodFwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMTUgMTQgMjAgOSAxNSA0XFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk00IDIwdi03YTQgNCAwIDAgMSA0LTRoMTJcXFwiPjwvcGF0aD5cIixcImNwdVwiOlwiPHJlY3QgeD1cXFwiNFxcXCIgeT1cXFwiNFxcXCIgd2lkdGg9XFxcIjE2XFxcIiBoZWlnaHQ9XFxcIjE2XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCI5XFxcIiB5PVxcXCI5XFxcIiB3aWR0aD1cXFwiNlxcXCIgaGVpZ2h0PVxcXCI2XFxcIj48L3JlY3Q+PGxpbmUgeDE9XFxcIjlcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiOVxcXCIgeTI9XFxcIjRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTVcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMTVcXFwiIHkyPVxcXCI0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjlcXFwiIHkxPVxcXCIyMFxcXCIgeDI9XFxcIjlcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNVxcXCIgeTE9XFxcIjIwXFxcIiB4Mj1cXFwiMTVcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyMFxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCIyM1xcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMjBcXFwiIHkxPVxcXCIxNFxcXCIgeDI9XFxcIjIzXFxcIiB5Mj1cXFwiMTRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMVxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCI0XFxcIiB5Mj1cXFwiOVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxXFxcIiB5MT1cXFwiMTRcXFwiIHgyPVxcXCI0XFxcIiB5Mj1cXFwiMTRcXFwiPjwvbGluZT5cIixcImNyZWRpdC1jYXJkXCI6XCI8cmVjdCB4PVxcXCIxXFxcIiB5PVxcXCI0XFxcIiB3aWR0aD1cXFwiMjJcXFwiIGhlaWdodD1cXFwiMTZcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PjxsaW5lIHgxPVxcXCIxXFxcIiB5MT1cXFwiMTBcXFwiIHgyPVxcXCIyM1xcXCIgeTI9XFxcIjEwXFxcIj48L2xpbmU+XCIsXCJjcm9wXCI6XCI8cGF0aCBkPVxcXCJNNi4xMyAxTDYgMTZhMiAyIDAgMCAwIDIgMmgxNVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xIDYuMTNMMTYgNmEyIDIgMCAwIDEgMiAydjE1XFxcIj48L3BhdGg+XCIsXCJjcm9zc2hhaXJcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiMjJcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjE4XFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiNlxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiNlxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjIyXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxOFxcXCI+PC9saW5lPlwiLFwiZGF0YWJhc2VcIjpcIjxlbGxpcHNlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjVcXFwiIHJ4PVxcXCI5XFxcIiByeT1cXFwiM1xcXCI+PC9lbGxpcHNlPjxwYXRoIGQ9XFxcIk0yMSAxMmMwIDEuNjYtNCAzLTkgM3MtOS0xLjM0LTktM1xcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zIDV2MTRjMCAxLjY2IDQgMyA5IDNzOS0xLjM0IDktM1Y1XFxcIj48L3BhdGg+XCIsXCJkZWxldGVcIjpcIjxwYXRoIGQ9XFxcIk0yMSA0SDhsLTcgOCA3IDhoMTNhMiAyIDAgMCAwIDItMlY2YTIgMiAwIDAgMC0yLTJ6XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjE4XFxcIiB5MT1cXFwiOVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiMThcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPlwiLFwiZGlzY1wiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPlwiLFwiZGl2aWRlLWNpcmNsZVwiOlwiPGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxNlxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTZcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCI4XFxcIj48L2xpbmU+PGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPlwiLFwiZGl2aWRlLXNxdWFyZVwiOlwiPHJlY3QgeD1cXFwiM1xcXCIgeT1cXFwiM1xcXCIgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE4XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiOFxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMTZcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE2XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjhcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjhcXFwiPjwvbGluZT5cIixcImRpdmlkZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCI2XFxcIiByPVxcXCIyXFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiNVxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMTlcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMThcXFwiIHI9XFxcIjJcXFwiPjwvY2lyY2xlPlwiLFwiZG9sbGFyLXNpZ25cIjpcIjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjFcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjIzXFxcIj48L2xpbmU+PHBhdGggZD1cXFwiTTE3IDVIOS41YTMuNSAzLjUgMCAwIDAgMCA3aDVhMy41IDMuNSAwIDAgMSAwIDdINlxcXCI+PC9wYXRoPlwiLFwiZG93bmxvYWQtY2xvdWRcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjggMTcgMTIgMjEgMTYgMTdcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjIxXFxcIj48L2xpbmU+PHBhdGggZD1cXFwiTTIwLjg4IDE4LjA5QTUgNSAwIDAgMCAxOCA5aC0xLjI2QTggOCAwIDEgMCAzIDE2LjI5XFxcIj48L3BhdGg+XCIsXCJkb3dubG9hZFwiOlwiPHBhdGggZD1cXFwiTTIxIDE1djRhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ2LTRcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCI3IDEwIDEyIDE1IDE3IDEwXFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE1XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIzXFxcIj48L2xpbmU+XCIsXCJkcmliYmJsZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxwYXRoIGQ9XFxcIk04LjU2IDIuNzVjNC4zNyA2LjAzIDYuMDIgOS40MiA4LjAzIDE3LjcybTIuNTQtMTUuMzhjLTMuNzIgNC4zNS04Ljk0IDUuNjYtMTYuODggNS44NW0xOS41IDEuOWMtMy41LS45My02LjYzLS44Mi04Ljk0IDAtMi41OC45Mi01LjAxIDIuODYtNy40NCA2LjMyXFxcIj48L3BhdGg+XCIsXCJkcm9wbGV0XCI6XCI8cGF0aCBkPVxcXCJNMTIgMi42OWw1LjY2IDUuNjZhOCA4IDAgMSAxLTExLjMxIDB6XFxcIj48L3BhdGg+XCIsXCJlZGl0LTJcIjpcIjxwYXRoIGQ9XFxcIk0xNyAzYTIuODI4IDIuODI4IDAgMSAxIDQgNEw3LjUgMjAuNSAyIDIybDEuNS01LjVMMTcgM3pcXFwiPjwvcGF0aD5cIixcImVkaXQtM1wiOlwiPHBhdGggZD1cXFwiTTEyIDIwaDlcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTYuNSAzLjVhMi4xMjEgMi4xMjEgMCAwIDEgMyAzTDcgMTlsLTQgMSAxLTRMMTYuNSAzLjV6XFxcIj48L3BhdGg+XCIsXCJlZGl0XCI6XCI8cGF0aCBkPVxcXCJNMTEgNEg0YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmgxNGEyIDIgMCAwIDAgMi0ydi03XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE4LjUgMi41YTIuMTIxIDIuMTIxIDAgMCAxIDMgM0wxMiAxNWwtNCAxIDEtNCA5LjUtOS41elxcXCI+PC9wYXRoPlwiLFwiZXh0ZXJuYWwtbGlua1wiOlwiPHBhdGggZD1cXFwiTTE4IDEzdjZhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDZcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIxNSAzIDIxIDMgMjEgOVxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTBcXFwiIHkxPVxcXCIxNFxcXCIgeDI9XFxcIjIxXFxcIiB5Mj1cXFwiM1xcXCI+PC9saW5lPlwiLFwiZXllLW9mZlwiOlwiPHBhdGggZD1cXFwiTTE3Ljk0IDE3Ljk0QTEwLjA3IDEwLjA3IDAgMCAxIDEyIDIwYy03IDAtMTEtOC0xMS04YTE4LjQ1IDE4LjQ1IDAgMCAxIDUuMDYtNS45NE05LjkgNC4yNEE5LjEyIDkuMTIgMCAwIDEgMTIgNGM3IDAgMTEgOCAxMSA4YTE4LjUgMTguNSAwIDAgMS0yLjE2IDMuMTltLTYuNzItMS4wN2EzIDMgMCAxIDEtNC4yNC00LjI0XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPlwiLFwiZXllXCI6XCI8cGF0aCBkPVxcXCJNMSAxMnM0LTggMTEtOCAxMSA4IDExIDgtNCA4LTExIDgtMTEtOC0xMS04elxcXCI+PC9wYXRoPjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPlwiLFwiZmFjZWJvb2tcIjpcIjxwYXRoIGQ9XFxcIk0xOCAyaC0zYTUgNSAwIDAgMC01IDV2M0g3djRoM3Y4aDR2LThoM2wxLTRoLTRWN2ExIDEgMCAwIDEgMS0xaDN6XFxcIj48L3BhdGg+XCIsXCJmYXN0LWZvcndhcmRcIjpcIjxwb2x5Z29uIHBvaW50cz1cXFwiMTMgMTkgMjIgMTIgMTMgNSAxMyAxOVxcXCI+PC9wb2x5Z29uPjxwb2x5Z29uIHBvaW50cz1cXFwiMiAxOSAxMSAxMiAyIDUgMiAxOVxcXCI+PC9wb2x5Z29uPlwiLFwiZmVhdGhlclwiOlwiPHBhdGggZD1cXFwiTTIwLjI0IDEyLjI0YTYgNiAwIDAgMC04LjQ5LTguNDlMNSAxMC41VjE5aDguNXpcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMTZcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMlxcXCIgeTI9XFxcIjIyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE3LjVcXFwiIHkxPVxcXCIxNVxcXCIgeDI9XFxcIjlcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPlwiLFwiZmlnbWFcIjpcIjxwYXRoIGQ9XFxcIk01IDUuNUEzLjUgMy41IDAgMCAxIDguNSAySDEydjdIOC41QTMuNSAzLjUgMCAwIDEgNSA1LjV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEyIDJoMy41YTMuNSAzLjUgMCAxIDEgMCA3SDEyVjJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEyIDEyLjVhMy41IDMuNSAwIDEgMSA3IDAgMy41IDMuNSAwIDEgMS03IDB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTUgMTkuNUEzLjUgMy41IDAgMCAxIDguNSAxNkgxMnYzLjVhMy41IDMuNSAwIDEgMS03IDB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTUgMTIuNUEzLjUgMy41IDAgMCAxIDguNSA5SDEydjdIOC41QTMuNSAzLjUgMCAwIDEgNSAxMi41elxcXCI+PC9wYXRoPlwiLFwiZmlsZS1taW51c1wiOlwiPHBhdGggZD1cXFwiTTE0IDJINmEyIDIgMCAwIDAtMiAydjE2YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlY4elxcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjE0IDIgMTQgOCAyMCA4XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCI5XFxcIiB5MT1cXFwiMTVcXFwiIHgyPVxcXCIxNVxcXCIgeTI9XFxcIjE1XFxcIj48L2xpbmU+XCIsXCJmaWxlLXBsdXNcIjpcIjxwYXRoIGQ9XFxcIk0xNCAySDZhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWOHpcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIxNCAyIDE0IDggMjAgOFxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxOFxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiOVxcXCIgeTE9XFxcIjE1XFxcIiB4Mj1cXFwiMTVcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPlwiLFwiZmlsZS10ZXh0XCI6XCI8cGF0aCBkPVxcXCJNMTQgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjh6XFxcIj48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTQgMiAxNCA4IDIwIDhcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjE2XFxcIiB5MT1cXFwiMTNcXFwiIHgyPVxcXCI4XFxcIiB5Mj1cXFwiMTNcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTZcXFwiIHkxPVxcXCIxN1xcXCIgeDI9XFxcIjhcXFwiIHkyPVxcXCIxN1xcXCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjEwIDkgOSA5IDggOVxcXCI+PC9wb2x5bGluZT5cIixcImZpbGVcIjpcIjxwYXRoIGQ9XFxcIk0xMyAySDZhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWOXpcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIxMyAyIDEzIDkgMjAgOVxcXCI+PC9wb2x5bGluZT5cIixcImZpbG1cIjpcIjxyZWN0IHg9XFxcIjJcXFwiIHk9XFxcIjJcXFwiIHdpZHRoPVxcXCIyMFxcXCIgaGVpZ2h0PVxcXCIyMFxcXCIgcng9XFxcIjIuMThcXFwiIHJ5PVxcXCIyLjE4XFxcIj48L3JlY3Q+PGxpbmUgeDE9XFxcIjdcXFwiIHkxPVxcXCIyXFxcIiB4Mj1cXFwiN1xcXCIgeTI9XFxcIjIyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE3XFxcIiB5MT1cXFwiMlxcXCIgeDI9XFxcIjE3XFxcIiB5Mj1cXFwiMjJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMlxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMjJcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyXFxcIiB5MT1cXFwiN1xcXCIgeDI9XFxcIjdcXFwiIHkyPVxcXCI3XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjJcXFwiIHkxPVxcXCIxN1xcXCIgeDI9XFxcIjdcXFwiIHkyPVxcXCIxN1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxN1xcXCIgeTE9XFxcIjE3XFxcIiB4Mj1cXFwiMjJcXFwiIHkyPVxcXCIxN1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxN1xcXCIgeTE9XFxcIjdcXFwiIHgyPVxcXCIyMlxcXCIgeTI9XFxcIjdcXFwiPjwvbGluZT5cIixcImZpbHRlclwiOlwiPHBvbHlnb24gcG9pbnRzPVxcXCIyMiAzIDIgMyAxMCAxMi40NiAxMCAxOSAxNCAyMSAxNCAxMi40NiAyMiAzXFxcIj48L3BvbHlnb24+XCIsXCJmbGFnXCI6XCI8cGF0aCBkPVxcXCJNNCAxNXMxLTEgNC0xIDUgMiA4IDIgNC0xIDQtMVYzcy0xIDEtNCAxLTUtMi04LTItNCAxLTQgMXpcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiNFxcXCIgeTE9XFxcIjIyXFxcIiB4Mj1cXFwiNFxcXCIgeTI9XFxcIjE1XFxcIj48L2xpbmU+XCIsXCJmb2xkZXItbWludXNcIjpcIjxwYXRoIGQ9XFxcIk0yMiAxOWEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoNWwyIDNoOWEyIDIgMCAwIDEgMiAyelxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCI5XFxcIiB5MT1cXFwiMTRcXFwiIHgyPVxcXCIxNVxcXCIgeTI9XFxcIjE0XFxcIj48L2xpbmU+XCIsXCJmb2xkZXItcGx1c1wiOlwiPHBhdGggZD1cXFwiTTIyIDE5YTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmg1bDIgM2g5YTIgMiAwIDAgMSAyIDJ6XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMTFcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjE3XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjlcXFwiIHkxPVxcXCIxNFxcXCIgeDI9XFxcIjE1XFxcIiB5Mj1cXFwiMTRcXFwiPjwvbGluZT5cIixcImZvbGRlclwiOlwiPHBhdGggZD1cXFwiTTIyIDE5YTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmg1bDIgM2g5YTIgMiAwIDAgMSAyIDJ6XFxcIj48L3BhdGg+XCIsXCJmcmFtZXJcIjpcIjxwYXRoIGQ9XFxcIk01IDE2VjloMTRWMkg1bDE0IDE0aC03bS03IDBsNyA3di03bS03IDBoN1xcXCI+PC9wYXRoPlwiLFwiZnJvd25cIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48cGF0aCBkPVxcXCJNMTYgMTZzLTEuNS0yLTQtMi00IDItNCAyXFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjlcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiOS4wMVxcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTVcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiMTUuMDFcXFwiIHkyPVxcXCI5XFxcIj48L2xpbmU+XCIsXCJnaWZ0XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIyMCAxMiAyMCAyMiA0IDIyIDQgMTJcXFwiPjwvcG9seWxpbmU+PHJlY3QgeD1cXFwiMlxcXCIgeT1cXFwiN1xcXCIgd2lkdGg9XFxcIjIwXFxcIiBoZWlnaHQ9XFxcIjVcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyMlxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiN1xcXCI+PC9saW5lPjxwYXRoIGQ9XFxcIk0xMiA3SDcuNWEyLjUgMi41IDAgMCAxIDAtNUMxMSAyIDEyIDcgMTIgN3pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTIgN2g0LjVhMi41IDIuNSAwIDAgMCAwLTVDMTMgMiAxMiA3IDEyIDd6XFxcIj48L3BhdGg+XCIsXCJnaXQtYnJhbmNoXCI6XCI8bGluZSB4MT1cXFwiNlxcXCIgeTE9XFxcIjNcXFwiIHgyPVxcXCI2XFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT48Y2lyY2xlIGN4PVxcXCIxOFxcXCIgY3k9XFxcIjZcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjZcXFwiIGN5PVxcXCIxOFxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTE4IDlhOSA5IDAgMCAxLTkgOVxcXCI+PC9wYXRoPlwiLFwiZ2l0LWNvbW1pdFwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiNFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjEuMDVcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjdcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNy4wMVxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMjIuOTZcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPlwiLFwiZ2l0LW1lcmdlXCI6XCI8Y2lyY2xlIGN4PVxcXCIxOFxcXCIgY3k9XFxcIjE4XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCI2XFxcIiBjeT1cXFwiNlxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTYgMjFWOWE5IDkgMCAwIDAgOSA5XFxcIj48L3BhdGg+XCIsXCJnaXQtcHVsbC1yZXF1ZXN0XCI6XCI8Y2lyY2xlIGN4PVxcXCIxOFxcXCIgY3k9XFxcIjE4XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCI2XFxcIiBjeT1cXFwiNlxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTEzIDZoM2EyIDIgMCAwIDEgMiAydjdcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiNlxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCI2XFxcIiB5Mj1cXFwiMjFcXFwiPjwvbGluZT5cIixcImdpdGh1YlwiOlwiPHBhdGggZD1cXFwiTTkgMTljLTUgMS41LTUtMi41LTctM20xNCA2di0zLjg3YTMuMzcgMy4zNyAwIDAgMC0uOTQtMi42MWMzLjE0LS4zNSA2LjQ0LTEuNTQgNi40NC03QTUuNDQgNS40NCAwIDAgMCAyMCA0Ljc3IDUuMDcgNS4wNyAwIDAgMCAxOS45MSAxUzE4LjczLjY1IDE2IDIuNDhhMTMuMzggMTMuMzggMCAwIDAtNyAwQzYuMjcuNjUgNS4wOSAxIDUuMDkgMUE1LjA3IDUuMDcgMCAwIDAgNSA0Ljc3YTUuNDQgNS40NCAwIDAgMC0xLjUgMy43OGMwIDUuNDIgMy4zIDYuNjEgNi40NCA3QTMuMzcgMy4zNyAwIDAgMCA5IDE4LjEzVjIyXFxcIj48L3BhdGg+XCIsXCJnaXRsYWJcIjpcIjxwYXRoIGQ9XFxcIk0yMi42NSAxNC4zOUwxMiAyMi4xMyAxLjM1IDE0LjM5YS44NC44NCAwIDAgMS0uMy0uOTRsMS4yMi0zLjc4IDIuNDQtNy41MUEuNDIuNDIgMCAwIDEgNC44MiAyYS40My40MyAwIDAgMSAuNTggMCAuNDIuNDIgMCAwIDEgLjExLjE4bDIuNDQgNy40OWg4LjFsMi40NC03LjUxQS40Mi40MiAwIDAgMSAxOC42IDJhLjQzLjQzIDAgMCAxIC41OCAwIC40Mi40MiAwIDAgMSAuMTEuMThsMi40NCA3LjUxTDIzIDEzLjQ1YS44NC44NCAwIDAgMS0uMzUuOTR6XFxcIj48L3BhdGg+XCIsXCJnbG9iZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIyXFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIyMlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PHBhdGggZD1cXFwiTTEyIDJhMTUuMyAxNS4zIDAgMCAxIDQgMTAgMTUuMyAxNS4zIDAgMCAxLTQgMTAgMTUuMyAxNS4zIDAgMCAxLTQtMTAgMTUuMyAxNS4zIDAgMCAxIDQtMTB6XFxcIj48L3BhdGg+XCIsXCJncmlkXCI6XCI8cmVjdCB4PVxcXCIzXFxcIiB5PVxcXCIzXFxcIiB3aWR0aD1cXFwiN1xcXCIgaGVpZ2h0PVxcXCI3XFxcIj48L3JlY3Q+PHJlY3QgeD1cXFwiMTRcXFwiIHk9XFxcIjNcXFwiIHdpZHRoPVxcXCI3XFxcIiBoZWlnaHQ9XFxcIjdcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCIxNFxcXCIgeT1cXFwiMTRcXFwiIHdpZHRoPVxcXCI3XFxcIiBoZWlnaHQ9XFxcIjdcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCIzXFxcIiB5PVxcXCIxNFxcXCIgd2lkdGg9XFxcIjdcXFwiIGhlaWdodD1cXFwiN1xcXCI+PC9yZWN0PlwiLFwiaGFyZC1kcml2ZVwiOlwiPGxpbmUgeDE9XFxcIjIyXFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIyXFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT48cGF0aCBkPVxcXCJNNS40NSA1LjExTDIgMTJ2NmEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJ2LTZsLTMuNDUtNi44OUEyIDIgMCAwIDAgMTYuNzYgNEg3LjI0YTIgMiAwIDAgMC0xLjc5IDEuMTF6XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjZcXFwiIHkxPVxcXCIxNlxcXCIgeDI9XFxcIjYuMDFcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMFxcXCIgeTE9XFxcIjE2XFxcIiB4Mj1cXFwiMTAuMDFcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPlwiLFwiaGFzaFwiOlwiPGxpbmUgeDE9XFxcIjRcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiMjBcXFwiIHkyPVxcXCI5XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjRcXFwiIHkxPVxcXCIxNVxcXCIgeDI9XFxcIjIwXFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTBcXFwiIHkxPVxcXCIzXFxcIiB4Mj1cXFwiOFxcXCIgeTI9XFxcIjIxXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE2XFxcIiB5MT1cXFwiM1xcXCIgeDI9XFxcIjE0XFxcIiB5Mj1cXFwiMjFcXFwiPjwvbGluZT5cIixcImhlYWRwaG9uZXNcIjpcIjxwYXRoIGQ9XFxcIk0zIDE4di02YTkgOSAwIDAgMSAxOCAwdjZcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjEgMTlhMiAyIDAgMCAxLTIgMmgtMWEyIDIgMCAwIDEtMi0ydi0zYTIgMiAwIDAgMSAyLTJoM3pNMyAxOWEyIDIgMCAwIDAgMiAyaDFhMiAyIDAgMCAwIDItMnYtM2EyIDIgMCAwIDAtMi0ySDN6XFxcIj48L3BhdGg+XCIsXCJoZWFydFwiOlwiPHBhdGggZD1cXFwiTTIwLjg0IDQuNjFhNS41IDUuNSAwIDAgMC03Ljc4IDBMMTIgNS42N2wtMS4wNi0xLjA2YTUuNSA1LjUgMCAwIDAtNy43OCA3Ljc4bDEuMDYgMS4wNkwxMiAyMS4yM2w3Ljc4LTcuNzggMS4wNi0xLjA2YTUuNSA1LjUgMCAwIDAgMC03Ljc4elxcXCI+PC9wYXRoPlwiLFwiaGVscC1jaXJjbGVcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48cGF0aCBkPVxcXCJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDNcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxN1xcXCIgeDI9XFxcIjEyLjAxXFxcIiB5Mj1cXFwiMTdcXFwiPjwvbGluZT5cIixcImhleGFnb25cIjpcIjxwYXRoIGQ9XFxcIk0yMSAxNlY4YTIgMiAwIDAgMC0xLTEuNzNsLTctNGEyIDIgMCAwIDAtMiAwbC03IDRBMiAyIDAgMCAwIDMgOHY4YTIgMiAwIDAgMCAxIDEuNzNsNyA0YTIgMiAwIDAgMCAyIDBsNy00QTIgMiAwIDAgMCAyMSAxNnpcXFwiPjwvcGF0aD5cIixcImhvbWVcIjpcIjxwYXRoIGQ9XFxcIk0zIDlsOS03IDkgN3YxMWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnpcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCI5IDIyIDkgMTIgMTUgMTIgMTUgMjJcXFwiPjwvcG9seWxpbmU+XCIsXCJpbWFnZVwiOlwiPHJlY3QgeD1cXFwiM1xcXCIgeT1cXFwiM1xcXCIgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE4XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48Y2lyY2xlIGN4PVxcXCI4LjVcXFwiIGN5PVxcXCI4LjVcXFwiIHI9XFxcIjEuNVxcXCI+PC9jaXJjbGU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMjEgMTUgMTYgMTAgNSAyMVxcXCI+PC9wb2x5bGluZT5cIixcImluYm94XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIyMiAxMiAxNiAxMiAxNCAxNSAxMCAxNSA4IDEyIDIgMTJcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTUuNDUgNS4xMUwyIDEydjZhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi02bC0zLjQ1LTYuODlBMiAyIDAgMCAwIDE2Ljc2IDRINy4yNGEyIDIgMCAwIDAtMS43OSAxLjExelxcXCI+PC9wYXRoPlwiLFwiaW5mb1wiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE2XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjhcXFwiIHgyPVxcXCIxMi4wMVxcXCIgeTI9XFxcIjhcXFwiPjwvbGluZT5cIixcImluc3RhZ3JhbVwiOlwiPHJlY3QgeD1cXFwiMlxcXCIgeT1cXFwiMlxcXCIgd2lkdGg9XFxcIjIwXFxcIiBoZWlnaHQ9XFxcIjIwXFxcIiByeD1cXFwiNVxcXCIgcnk9XFxcIjVcXFwiPjwvcmVjdD48cGF0aCBkPVxcXCJNMTYgMTEuMzdBNCA0IDAgMSAxIDEyLjYzIDggNCA0IDAgMCAxIDE2IDExLjM3elxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCIxNy41XFxcIiB5MT1cXFwiNi41XFxcIiB4Mj1cXFwiMTcuNTFcXFwiIHkyPVxcXCI2LjVcXFwiPjwvbGluZT5cIixcIml0YWxpY1wiOlwiPGxpbmUgeDE9XFxcIjE5XFxcIiB5MT1cXFwiNFxcXCIgeDI9XFxcIjEwXFxcIiB5Mj1cXFwiNFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNFxcXCIgeTE9XFxcIjIwXFxcIiB4Mj1cXFwiNVxcXCIgeTI9XFxcIjIwXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE1XFxcIiB5MT1cXFwiNFxcXCIgeDI9XFxcIjlcXFwiIHkyPVxcXCIyMFxcXCI+PC9saW5lPlwiLFwia2V5XCI6XCI8cGF0aCBkPVxcXCJNMjEgMmwtMiAybS03LjYxIDcuNjFhNS41IDUuNSAwIDEgMS03Ljc3OCA3Ljc3OCA1LjUgNS41IDAgMCAxIDcuNzc3LTcuNzc3em0wIDBMMTUuNSA3LjVtMCAwbDMgM0wyMiA3bC0zLTNtLTMuNSAzLjVMMTkgNFxcXCI+PC9wYXRoPlwiLFwibGF5ZXJzXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjEyIDIgMiA3IDEyIDEyIDIyIDcgMTIgMlxcXCI+PC9wb2x5Z29uPjxwb2x5bGluZSBwb2ludHM9XFxcIjIgMTcgMTIgMjIgMjIgMTdcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMiAxMiAxMiAxNyAyMiAxMlxcXCI+PC9wb2x5bGluZT5cIixcImxheW91dFwiOlwiPHJlY3QgeD1cXFwiM1xcXCIgeT1cXFwiM1xcXCIgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE4XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiM1xcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCIyMVxcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiOVxcXCIgeTE9XFxcIjIxXFxcIiB4Mj1cXFwiOVxcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT5cIixcImxpZmUtYnVveVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjRcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCI0LjkzXFxcIiB5MT1cXFwiNC45M1xcXCIgeDI9XFxcIjkuMTdcXFwiIHkyPVxcXCI5LjE3XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE0LjgzXFxcIiB5MT1cXFwiMTQuODNcXFwiIHgyPVxcXCIxOS4wN1xcXCIgeTI9XFxcIjE5LjA3XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE0LjgzXFxcIiB5MT1cXFwiOS4xN1xcXCIgeDI9XFxcIjE5LjA3XFxcIiB5Mj1cXFwiNC45M1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNC44M1xcXCIgeTE9XFxcIjkuMTdcXFwiIHgyPVxcXCIxOC4zNlxcXCIgeTI9XFxcIjUuNjRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiNC45M1xcXCIgeTE9XFxcIjE5LjA3XFxcIiB4Mj1cXFwiOS4xN1xcXCIgeTI9XFxcIjE0LjgzXFxcIj48L2xpbmU+XCIsXCJsaW5rLTJcIjpcIjxwYXRoIGQ9XFxcIk0xNSA3aDNhNSA1IDAgMCAxIDUgNSA1IDUgMCAwIDEtNSA1aC0zbS02IDBINmE1IDUgMCAwIDEtNS01IDUgNSAwIDAgMSA1LTVoM1xcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxNlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJsaW5rXCI6XCI8cGF0aCBkPVxcXCJNMTAgMTNhNSA1IDAgMCAwIDcuNTQuNTRsMy0zYTUgNSAwIDAgMC03LjA3LTcuMDdsLTEuNzIgMS43MVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNCAxMWE1IDUgMCAwIDAtNy41NC0uNTRsLTMgM2E1IDUgMCAwIDAgNy4wNyA3LjA3bDEuNzEtMS43MVxcXCI+PC9wYXRoPlwiLFwibGlua2VkaW5cIjpcIjxwYXRoIGQ9XFxcIk0xNiA4YTYgNiAwIDAgMSA2IDZ2N2gtNHYtN2EyIDIgMCAwIDAtMi0yIDIgMiAwIDAgMC0yIDJ2N2gtNHYtN2E2IDYgMCAwIDEgNi02elxcXCI+PC9wYXRoPjxyZWN0IHg9XFxcIjJcXFwiIHk9XFxcIjlcXFwiIHdpZHRoPVxcXCI0XFxcIiBoZWlnaHQ9XFxcIjEyXFxcIj48L3JlY3Q+PGNpcmNsZSBjeD1cXFwiNFxcXCIgY3k9XFxcIjRcXFwiIHI9XFxcIjJcXFwiPjwvY2lyY2xlPlwiLFwibGlzdFwiOlwiPGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCI2XFxcIiB4Mj1cXFwiMjFcXFwiIHkyPVxcXCI2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjIxXFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiOFxcXCIgeTE9XFxcIjE4XFxcIiB4Mj1cXFwiMjFcXFwiIHkyPVxcXCIxOFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIzXFxcIiB5MT1cXFwiNlxcXCIgeDI9XFxcIjMuMDFcXFwiIHkyPVxcXCI2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjNcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjMuMDFcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIzXFxcIiB5MT1cXFwiMThcXFwiIHgyPVxcXCIzLjAxXFxcIiB5Mj1cXFwiMThcXFwiPjwvbGluZT5cIixcImxvYWRlclwiOlwiPGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMlxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE4XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIyMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI0LjkzXFxcIiB5MT1cXFwiNC45M1xcXCIgeDI9XFxcIjcuNzZcXFwiIHkyPVxcXCI3Ljc2XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE2LjI0XFxcIiB5MT1cXFwiMTYuMjRcXFwiIHgyPVxcXCIxOS4wN1xcXCIgeTI9XFxcIjE5LjA3XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjJcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjZcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxOFxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMjJcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI0LjkzXFxcIiB5MT1cXFwiMTkuMDdcXFwiIHgyPVxcXCI3Ljc2XFxcIiB5Mj1cXFwiMTYuMjRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTYuMjRcXFwiIHkxPVxcXCI3Ljc2XFxcIiB4Mj1cXFwiMTkuMDdcXFwiIHkyPVxcXCI0LjkzXFxcIj48L2xpbmU+XCIsXCJsb2NrXCI6XCI8cmVjdCB4PVxcXCIzXFxcIiB5PVxcXCIxMVxcXCIgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjExXFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48cGF0aCBkPVxcXCJNNyAxMVY3YTUgNSAwIDAgMSAxMCAwdjRcXFwiPjwvcGF0aD5cIixcImxvZy1pblwiOlwiPHBhdGggZD1cXFwiTTE1IDNoNGEyIDIgMCAwIDEgMiAydjE0YTIgMiAwIDAgMS0yIDJoLTRcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIxMCAxNyAxNSAxMiAxMCA3XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIxNVxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiM1xcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJsb2ctb3V0XCI6XCI8cGF0aCBkPVxcXCJNOSAyMUg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDRcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIxNiAxNyAyMSAxMiAxNiA3XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiOVxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJtYWlsXCI6XCI8cGF0aCBkPVxcXCJNNCA0aDE2YzEuMSAwIDIgLjkgMiAydjEyYzAgMS4xLS45IDItMiAySDRjLTEuMSAwLTItLjktMi0yVjZjMC0xLjEuOS0yIDItMnpcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIyMiw2IDEyLDEzIDIsNlxcXCI+PC9wb2x5bGluZT5cIixcIm1hcC1waW5cIjpcIjxwYXRoIGQ9XFxcIk0yMSAxMGMwIDctOSAxMy05IDEzcy05LTYtOS0xM2E5IDkgMCAwIDEgMTggMHpcXFwiPjwvcGF0aD48Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEwXFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT5cIixcIm1hcFwiOlwiPHBvbHlnb24gcG9pbnRzPVxcXCIxIDYgMSAyMiA4IDE4IDE2IDIyIDIzIDE4IDIzIDIgMTYgNiA4IDIgMSA2XFxcIj48L3BvbHlnb24+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIyXFxcIiB4Mj1cXFwiOFxcXCIgeTI9XFxcIjE4XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE2XFxcIiB5MT1cXFwiNlxcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiMjJcXFwiPjwvbGluZT5cIixcIm1heGltaXplLTJcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjE1IDMgMjEgMyAyMSA5XFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjkgMjEgMyAyMSAzIDE1XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjNcXFwiIHgyPVxcXCIxNFxcXCIgeTI9XFxcIjEwXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjNcXFwiIHkxPVxcXCIyMVxcXCIgeDI9XFxcIjEwXFxcIiB5Mj1cXFwiMTRcXFwiPjwvbGluZT5cIixcIm1heGltaXplXCI6XCI8cGF0aCBkPVxcXCJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDNcXFwiPjwvcGF0aD5cIixcIm1laFwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMTVcXFwiIHgyPVxcXCIxNlxcXCIgeTI9XFxcIjE1XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjlcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiOS4wMVxcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTVcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiMTUuMDFcXFwiIHkyPVxcXCI5XFxcIj48L2xpbmU+XCIsXCJtZW51XCI6XCI8bGluZSB4MT1cXFwiM1xcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMjFcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIzXFxcIiB5MT1cXFwiNlxcXCIgeDI9XFxcIjIxXFxcIiB5Mj1cXFwiNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIzXFxcIiB5MT1cXFwiMThcXFwiIHgyPVxcXCIyMVxcXCIgeTI9XFxcIjE4XFxcIj48L2xpbmU+XCIsXCJtZXNzYWdlLWNpcmNsZVwiOlwiPHBhdGggZD1cXFwiTTIxIDExLjVhOC4zOCA4LjM4IDAgMCAxLS45IDMuOCA4LjUgOC41IDAgMCAxLTcuNiA0LjcgOC4zOCA4LjM4IDAgMCAxLTMuOC0uOUwzIDIxbDEuOS01LjdhOC4zOCA4LjM4IDAgMCAxLS45LTMuOCA4LjUgOC41IDAgMCAxIDQuNy03LjYgOC4zOCA4LjM4IDAgMCAxIDMuOC0uOWguNWE4LjQ4IDguNDggMCAwIDEgOCA4di41elxcXCI+PC9wYXRoPlwiLFwibWVzc2FnZS1zcXVhcmVcIjpcIjxwYXRoIGQ9XFxcIk0yMSAxNWEyIDIgMCAwIDEtMiAySDdsLTQgNFY1YTIgMiAwIDAgMSAyLTJoMTRhMiAyIDAgMCAxIDIgMnpcXFwiPjwvcGF0aD5cIixcIm1pYy1vZmZcIjpcIjxsaW5lIHgxPVxcXCIxXFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjIzXFxcIiB5Mj1cXFwiMjNcXFwiPjwvbGluZT48cGF0aCBkPVxcXCJNOSA5djNhMyAzIDAgMCAwIDUuMTIgMi4xMk0xNSA5LjM0VjRhMyAzIDAgMCAwLTUuOTQtLjZcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTcgMTYuOTVBNyA3IDAgMCAxIDUgMTJ2LTJtMTQgMHYyYTcgNyAwIDAgMS0uMTEgMS4yM1xcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE5XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMjNcXFwiIHgyPVxcXCIxNlxcXCIgeTI9XFxcIjIzXFxcIj48L2xpbmU+XCIsXCJtaWNcIjpcIjxwYXRoIGQ9XFxcIk0xMiAxYTMgMyAwIDAgMC0zIDN2OGEzIDMgMCAwIDAgNiAwVjRhMyAzIDAgMCAwLTMtM3pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTkgMTB2MmE3IDcgMCAwIDEtMTQgMHYtMlxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE5XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMjNcXFwiIHgyPVxcXCIxNlxcXCIgeTI9XFxcIjIzXFxcIj48L2xpbmU+XCIsXCJtaW5pbWl6ZS0yXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCI0IDE0IDEwIDE0IDEwIDIwXFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjIwIDEwIDE0IDEwIDE0IDRcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjE0XFxcIiB5MT1cXFwiMTBcXFwiIHgyPVxcXCIyMVxcXCIgeTI9XFxcIjNcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiM1xcXCIgeTE9XFxcIjIxXFxcIiB4Mj1cXFwiMTBcXFwiIHkyPVxcXCIxNFxcXCI+PC9saW5lPlwiLFwibWluaW1pemVcIjpcIjxwYXRoIGQ9XFxcIk04IDN2M2EyIDIgMCAwIDEtMiAySDNtMTggMGgtM2EyIDIgMCAwIDEtMi0yVjNtMCAxOHYtM2EyIDIgMCAwIDEgMi0yaDNNMyAxNmgzYTIgMiAwIDAgMSAyIDJ2M1xcXCI+PC9wYXRoPlwiLFwibWludXMtY2lyY2xlXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjhcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT5cIixcIm1pbnVzLXNxdWFyZVwiOlwiPHJlY3QgeD1cXFwiM1xcXCIgeT1cXFwiM1xcXCIgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE4XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiOFxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMTZcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPlwiLFwibWludXNcIjpcIjxsaW5lIHgxPVxcXCI1XFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxOVxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJtb25pdG9yXCI6XCI8cmVjdCB4PVxcXCIyXFxcIiB5PVxcXCIzXFxcIiB3aWR0aD1cXFwiMjBcXFwiIGhlaWdodD1cXFwiMTRcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMjFcXFwiIHgyPVxcXCIxNlxcXCIgeTI9XFxcIjIxXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMTdcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjIxXFxcIj48L2xpbmU+XCIsXCJtb29uXCI6XCI8cGF0aCBkPVxcXCJNMjEgMTIuNzlBOSA5IDAgMSAxIDExLjIxIDMgNyA3IDAgMCAwIDIxIDEyLjc5elxcXCI+PC9wYXRoPlwiLFwibW9yZS1ob3Jpem9udGFsXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxOVxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCI1XFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjFcXFwiPjwvY2lyY2xlPlwiLFwibW9yZS12ZXJ0aWNhbFwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCI1XFxcIiByPVxcXCIxXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjE5XFxcIiByPVxcXCIxXFxcIj48L2NpcmNsZT5cIixcIm1vdXNlLXBvaW50ZXJcIjpcIjxwYXRoIGQ9XFxcIk0zIDNsNy4wNyAxNi45NyAyLjUxLTcuMzkgNy4zOS0yLjUxTDMgM3pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTMgMTNsNiA2XFxcIj48L3BhdGg+XCIsXCJtb3ZlXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCI1IDkgMiAxMiA1IDE1XFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjkgNSAxMiAyIDE1IDVcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTUgMTkgMTIgMjIgOSAxOVxcXCI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCIxOSA5IDIyIDEyIDE5IDE1XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIyXFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIyMlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMlxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMjJcXFwiPjwvbGluZT5cIixcIm11c2ljXCI6XCI8cGF0aCBkPVxcXCJNOSAxOFY1bDEyLTJ2MTNcXFwiPjwvcGF0aD48Y2lyY2xlIGN4PVxcXCI2XFxcIiBjeT1cXFwiMThcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE4XFxcIiBjeT1cXFwiMTZcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPlwiLFwibmF2aWdhdGlvbi0yXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjEyIDIgMTkgMjEgMTIgMTcgNSAyMSAxMiAyXFxcIj48L3BvbHlnb24+XCIsXCJuYXZpZ2F0aW9uXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjMgMTEgMjIgMiAxMyAyMSAxMSAxMyAzIDExXFxcIj48L3BvbHlnb24+XCIsXCJvY3RhZ29uXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjcuODYgMiAxNi4xNCAyIDIyIDcuODYgMjIgMTYuMTQgMTYuMTQgMjIgNy44NiAyMiAyIDE2LjE0IDIgNy44NiA3Ljg2IDJcXFwiPjwvcG9seWdvbj5cIixcInBhY2thZ2VcIjpcIjxsaW5lIHgxPVxcXCIxNi41XFxcIiB5MT1cXFwiOS40XFxcIiB4Mj1cXFwiNy41XFxcIiB5Mj1cXFwiNC4yMVxcXCI+PC9saW5lPjxwYXRoIGQ9XFxcIk0yMSAxNlY4YTIgMiAwIDAgMC0xLTEuNzNsLTctNGEyIDIgMCAwIDAtMiAwbC03IDRBMiAyIDAgMCAwIDMgOHY4YTIgMiAwIDAgMCAxIDEuNzNsNyA0YTIgMiAwIDAgMCAyIDBsNy00QTIgMiAwIDAgMCAyMSAxNnpcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIzLjI3IDYuOTYgMTIgMTIuMDEgMjAuNzMgNi45NlxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyMi4wOFxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTJcXFwiPjwvbGluZT5cIixcInBhcGVyY2xpcFwiOlwiPHBhdGggZD1cXFwiTTIxLjQ0IDExLjA1bC05LjE5IDkuMTlhNiA2IDAgMCAxLTguNDktOC40OWw5LjE5LTkuMTlhNCA0IDAgMCAxIDUuNjYgNS42NmwtOS4yIDkuMTlhMiAyIDAgMCAxLTIuODMtMi44M2w4LjQ5LTguNDhcXFwiPjwvcGF0aD5cIixcInBhdXNlLWNpcmNsZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIxMFxcXCIgeTE9XFxcIjE1XFxcIiB4Mj1cXFwiMTBcXFwiIHkyPVxcXCI5XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE0XFxcIiB5MT1cXFwiMTVcXFwiIHgyPVxcXCIxNFxcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT5cIixcInBhdXNlXCI6XCI8cmVjdCB4PVxcXCI2XFxcIiB5PVxcXCI0XFxcIiB3aWR0aD1cXFwiNFxcXCIgaGVpZ2h0PVxcXCIxNlxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjE0XFxcIiB5PVxcXCI0XFxcIiB3aWR0aD1cXFwiNFxcXCIgaGVpZ2h0PVxcXCIxNlxcXCI+PC9yZWN0PlwiLFwicGVuLXRvb2xcIjpcIjxwYXRoIGQ9XFxcIk0xMiAxOWw3LTcgMyAzLTcgNy0zLTN6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE4IDEzbC0xLjUtNy41TDIgMmwzLjUgMTQuNUwxMyAxOGw1LTV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTIgMmw3LjU4NiA3LjU4NlxcXCI+PC9wYXRoPjxjaXJjbGUgY3g9XFxcIjExXFxcIiBjeT1cXFwiMTFcXFwiIHI9XFxcIjJcXFwiPjwvY2lyY2xlPlwiLFwicGVyY2VudFwiOlwiPGxpbmUgeDE9XFxcIjE5XFxcIiB5MT1cXFwiNVxcXCIgeDI9XFxcIjVcXFwiIHkyPVxcXCIxOVxcXCI+PC9saW5lPjxjaXJjbGUgY3g9XFxcIjYuNVxcXCIgY3k9XFxcIjYuNVxcXCIgcj1cXFwiMi41XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxNy41XFxcIiBjeT1cXFwiMTcuNVxcXCIgcj1cXFwiMi41XFxcIj48L2NpcmNsZT5cIixcInBob25lLWNhbGxcIjpcIjxwYXRoIGQ9XFxcIk0xNS4wNSA1QTUgNSAwIDAgMSAxOSA4Ljk1TTE1LjA1IDFBOSA5IDAgMCAxIDIzIDguOTRtLTEgNy45OHYzYTIgMiAwIDAgMS0yLjE4IDIgMTkuNzkgMTkuNzkgMCAwIDEtOC42My0zLjA3IDE5LjUgMTkuNSAwIDAgMS02LTYgMTkuNzkgMTkuNzkgMCAwIDEtMy4wNy04LjY3QTIgMiAwIDAgMSA0LjExIDJoM2EyIDIgMCAwIDEgMiAxLjcyIDEyLjg0IDEyLjg0IDAgMCAwIC43IDIuODEgMiAyIDAgMCAxLS40NSAyLjExTDguMDkgOS45MWExNiAxNiAwIDAgMCA2IDZsMS4yNy0xLjI3YTIgMiAwIDAgMSAyLjExLS40NSAxMi44NCAxMi44NCAwIDAgMCAyLjgxLjdBMiAyIDAgMCAxIDIyIDE2LjkyelxcXCI+PC9wYXRoPlwiLFwicGhvbmUtZm9yd2FyZGVkXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxOSAxIDIzIDUgMTkgOVxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTVcXFwiIHkxPVxcXCI1XFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCI1XFxcIj48L2xpbmU+PHBhdGggZD1cXFwiTTIyIDE2LjkydjNhMiAyIDAgMCAxLTIuMTggMiAxOS43OSAxOS43OSAwIDAgMS04LjYzLTMuMDcgMTkuNSAxOS41IDAgMCAxLTYtNiAxOS43OSAxOS43OSAwIDAgMS0zLjA3LTguNjdBMiAyIDAgMCAxIDQuMTEgMmgzYTIgMiAwIDAgMSAyIDEuNzIgMTIuODQgMTIuODQgMCAwIDAgLjcgMi44MSAyIDIgMCAwIDEtLjQ1IDIuMTFMOC4wOSA5LjkxYTE2IDE2IDAgMCAwIDYgNmwxLjI3LTEuMjdhMiAyIDAgMCAxIDIuMTEtLjQ1IDEyLjg0IDEyLjg0IDAgMCAwIDIuODEuN0EyIDIgMCAwIDEgMjIgMTYuOTJ6XFxcIj48L3BhdGg+XCIsXCJwaG9uZS1pbmNvbWluZ1wiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMTYgMiAxNiA4IDIyIDhcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjIzXFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjE2XFxcIiB5Mj1cXFwiOFxcXCI+PC9saW5lPjxwYXRoIGQ9XFxcIk0yMiAxNi45MnYzYTIgMiAwIDAgMS0yLjE4IDIgMTkuNzkgMTkuNzkgMCAwIDEtOC42My0zLjA3IDE5LjUgMTkuNSAwIDAgMS02LTYgMTkuNzkgMTkuNzkgMCAwIDEtMy4wNy04LjY3QTIgMiAwIDAgMSA0LjExIDJoM2EyIDIgMCAwIDEgMiAxLjcyIDEyLjg0IDEyLjg0IDAgMCAwIC43IDIuODEgMiAyIDAgMCAxLS40NSAyLjExTDguMDkgOS45MWExNiAxNiAwIDAgMCA2IDZsMS4yNy0xLjI3YTIgMiAwIDAgMSAyLjExLS40NSAxMi44NCAxMi44NCAwIDAgMCAyLjgxLjdBMiAyIDAgMCAxIDIyIDE2LjkyelxcXCI+PC9wYXRoPlwiLFwicGhvbmUtbWlzc2VkXCI6XCI8bGluZSB4MT1cXFwiMjNcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMTdcXFwiIHkyPVxcXCI3XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE3XFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjIzXFxcIiB5Mj1cXFwiN1xcXCI+PC9saW5lPjxwYXRoIGQ9XFxcIk0yMiAxNi45MnYzYTIgMiAwIDAgMS0yLjE4IDIgMTkuNzkgMTkuNzkgMCAwIDEtOC42My0zLjA3IDE5LjUgMTkuNSAwIDAgMS02LTYgMTkuNzkgMTkuNzkgMCAwIDEtMy4wNy04LjY3QTIgMiAwIDAgMSA0LjExIDJoM2EyIDIgMCAwIDEgMiAxLjcyIDEyLjg0IDEyLjg0IDAgMCAwIC43IDIuODEgMiAyIDAgMCAxLS40NSAyLjExTDguMDkgOS45MWExNiAxNiAwIDAgMCA2IDZsMS4yNy0xLjI3YTIgMiAwIDAgMSAyLjExLS40NSAxMi44NCAxMi44NCAwIDAgMCAyLjgxLjdBMiAyIDAgMCAxIDIyIDE2LjkyelxcXCI+PC9wYXRoPlwiLFwicGhvbmUtb2ZmXCI6XCI8cGF0aCBkPVxcXCJNMTAuNjggMTMuMzFhMTYgMTYgMCAwIDAgMy40MSAyLjZsMS4yNy0xLjI3YTIgMiAwIDAgMSAyLjExLS40NSAxMi44NCAxMi44NCAwIDAgMCAyLjgxLjcgMiAyIDAgMCAxIDEuNzIgMnYzYTIgMiAwIDAgMS0yLjE4IDIgMTkuNzkgMTkuNzkgMCAwIDEtOC42My0zLjA3IDE5LjQyIDE5LjQyIDAgMCAxLTMuMzMtMi42N20tMi42Ny0zLjM0YTE5Ljc5IDE5Ljc5IDAgMCAxLTMuMDctOC42M0EyIDIgMCAwIDEgNC4xMSAyaDNhMiAyIDAgMCAxIDIgMS43MiAxMi44NCAxMi44NCAwIDAgMCAuNyAyLjgxIDIgMiAwIDAgMS0uNDUgMi4xMUw4LjA5IDkuOTFcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMjNcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMVxcXCIgeTI9XFxcIjIzXFxcIj48L2xpbmU+XCIsXCJwaG9uZS1vdXRnb2luZ1wiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMjMgNyAyMyAxIDE3IDFcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjE2XFxcIiB5MT1cXFwiOFxcXCIgeDI9XFxcIjIzXFxcIiB5Mj1cXFwiMVxcXCI+PC9saW5lPjxwYXRoIGQ9XFxcIk0yMiAxNi45MnYzYTIgMiAwIDAgMS0yLjE4IDIgMTkuNzkgMTkuNzkgMCAwIDEtOC42My0zLjA3IDE5LjUgMTkuNSAwIDAgMS02LTYgMTkuNzkgMTkuNzkgMCAwIDEtMy4wNy04LjY3QTIgMiAwIDAgMSA0LjExIDJoM2EyIDIgMCAwIDEgMiAxLjcyIDEyLjg0IDEyLjg0IDAgMCAwIC43IDIuODEgMiAyIDAgMCAxLS40NSAyLjExTDguMDkgOS45MWExNiAxNiAwIDAgMCA2IDZsMS4yNy0xLjI3YTIgMiAwIDAgMSAyLjExLS40NSAxMi44NCAxMi44NCAwIDAgMCAyLjgxLjdBMiAyIDAgMCAxIDIyIDE2LjkyelxcXCI+PC9wYXRoPlwiLFwicGhvbmVcIjpcIjxwYXRoIGQ9XFxcIk0yMiAxNi45MnYzYTIgMiAwIDAgMS0yLjE4IDIgMTkuNzkgMTkuNzkgMCAwIDEtOC42My0zLjA3IDE5LjUgMTkuNSAwIDAgMS02LTYgMTkuNzkgMTkuNzkgMCAwIDEtMy4wNy04LjY3QTIgMiAwIDAgMSA0LjExIDJoM2EyIDIgMCAwIDEgMiAxLjcyIDEyLjg0IDEyLjg0IDAgMCAwIC43IDIuODEgMiAyIDAgMCAxLS40NSAyLjExTDguMDkgOS45MWExNiAxNiAwIDAgMCA2IDZsMS4yNy0xLjI3YTIgMiAwIDAgMSAyLjExLS40NSAxMi44NCAxMi44NCAwIDAgMCAyLjgxLjdBMiAyIDAgMCAxIDIyIDE2LjkyelxcXCI+PC9wYXRoPlwiLFwicGllLWNoYXJ0XCI6XCI8cGF0aCBkPVxcXCJNMjEuMjEgMTUuODlBMTAgMTAgMCAxIDEgOCAyLjgzXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTIyIDEyQTEwIDEwIDAgMCAwIDEyIDJ2MTB6XFxcIj48L3BhdGg+XCIsXCJwbGF5LWNpcmNsZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxwb2x5Z29uIHBvaW50cz1cXFwiMTAgOCAxNiAxMiAxMCAxNiAxMCA4XFxcIj48L3BvbHlnb24+XCIsXCJwbGF5XCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjUgMyAxOSAxMiA1IDIxIDUgM1xcXCI+PC9wb2x5Z29uPlwiLFwicGx1cy1jaXJjbGVcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxNlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJwbHVzLXNxdWFyZVwiOlwiPHJlY3QgeD1cXFwiM1xcXCIgeT1cXFwiM1xcXCIgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE4XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxNlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJwbHVzXCI6XCI8bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCI1XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxOVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI1XFxcIiB5MT1cXFwiMTJcXFwiIHgyPVxcXCIxOVxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJwb2NrZXRcIjpcIjxwYXRoIGQ9XFxcIk00IDNoMTZhMiAyIDAgMCAxIDIgMnY2YTEwIDEwIDAgMCAxLTEwIDEwQTEwIDEwIDAgMCAxIDIgMTFWNWEyIDIgMCAwIDEgMi0yelxcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjggMTAgMTIgMTQgMTYgMTBcXFwiPjwvcG9seWxpbmU+XCIsXCJwb3dlclwiOlwiPHBhdGggZD1cXFwiTTE4LjM2IDYuNjRhOSA5IDAgMSAxLTEyLjczIDBcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPlwiLFwicHJpbnRlclwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiNiA5IDYgMiAxOCAyIDE4IDlcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTYgMThINGEyIDIgMCAwIDEtMi0ydi01YTIgMiAwIDAgMSAyLTJoMTZhMiAyIDAgMCAxIDIgMnY1YTIgMiAwIDAgMS0yIDJoLTJcXFwiPjwvcGF0aD48cmVjdCB4PVxcXCI2XFxcIiB5PVxcXCIxNFxcXCIgd2lkdGg9XFxcIjEyXFxcIiBoZWlnaHQ9XFxcIjhcXFwiPjwvcmVjdD5cIixcInJhZGlvXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIyXFxcIj48L2NpcmNsZT48cGF0aCBkPVxcXCJNMTYuMjQgNy43NmE2IDYgMCAwIDEgMCA4LjQ5bS04LjQ4LS4wMWE2IDYgMCAwIDEgMC04LjQ5bTExLjMxLTIuODJhMTAgMTAgMCAwIDEgMCAxNC4xNG0tMTQuMTQgMGExMCAxMCAwIDAgMSAwLTE0LjE0XFxcIj48L3BhdGg+XCIsXCJyZWZyZXNoLWNjd1wiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMSA0IDEgMTAgNyAxMFxcXCI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCIyMyAyMCAyMyAxNCAxNyAxNFxcXCI+PC9wb2x5bGluZT48cGF0aCBkPVxcXCJNMjAuNDkgOUE5IDkgMCAwIDAgNS42NCA1LjY0TDEgMTBtMjIgNGwtNC42NCA0LjM2QTkgOSAwIDAgMSAzLjUxIDE1XFxcIj48L3BhdGg+XCIsXCJyZWZyZXNoLWN3XCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIyMyA0IDIzIDEwIDE3IDEwXFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjEgMjAgMSAxNCA3IDE0XFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk0zLjUxIDlhOSA5IDAgMCAxIDE0Ljg1LTMuMzZMMjMgMTBNMSAxNGw0LjY0IDQuMzZBOSA5IDAgMCAwIDIwLjQ5IDE1XFxcIj48L3BhdGg+XCIsXCJyZXBlYXRcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjE3IDEgMjEgNSAxNyA5XFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk0zIDExVjlhNCA0IDAgMCAxIDQtNGgxNFxcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjcgMjMgMyAxOSA3IDE1XFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk0yMSAxM3YyYTQgNCAwIDAgMS00IDRIM1xcXCI+PC9wYXRoPlwiLFwicmV3aW5kXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjExIDE5IDIgMTIgMTEgNSAxMSAxOVxcXCI+PC9wb2x5Z29uPjxwb2x5Z29uIHBvaW50cz1cXFwiMjIgMTkgMTMgMTIgMjIgNSAyMiAxOVxcXCI+PC9wb2x5Z29uPlwiLFwicm90YXRlLWNjd1wiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMSA0IDEgMTAgNyAxMFxcXCI+PC9wb2x5bGluZT48cGF0aCBkPVxcXCJNMy41MSAxNWE5IDkgMCAxIDAgMi4xMy05LjM2TDEgMTBcXFwiPjwvcGF0aD5cIixcInJvdGF0ZS1jd1wiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMjMgNCAyMyAxMCAxNyAxMFxcXCI+PC9wb2x5bGluZT48cGF0aCBkPVxcXCJNMjAuNDkgMTVhOSA5IDAgMSAxLTIuMTItOS4zNkwyMyAxMFxcXCI+PC9wYXRoPlwiLFwicnNzXCI6XCI8cGF0aCBkPVxcXCJNNCAxMWE5IDkgMCAwIDEgOSA5XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTQgNGExNiAxNiAwIDAgMSAxNiAxNlxcXCI+PC9wYXRoPjxjaXJjbGUgY3g9XFxcIjVcXFwiIGN5PVxcXCIxOVxcXCIgcj1cXFwiMVxcXCI+PC9jaXJjbGU+XCIsXCJzYXZlXCI6XCI8cGF0aCBkPVxcXCJNMTkgMjFINWEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmgxMWw1IDV2MTFhMiAyIDAgMCAxLTIgMnpcXFwiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPVxcXCIxNyAyMSAxNyAxMyA3IDEzIDcgMjFcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiNyAzIDcgOCAxNSA4XFxcIj48L3BvbHlsaW5lPlwiLFwic2Npc3NvcnNcIjpcIjxjaXJjbGUgY3g9XFxcIjZcXFwiIGN5PVxcXCI2XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCI2XFxcIiBjeT1cXFwiMThcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIyMFxcXCIgeTE9XFxcIjRcXFwiIHgyPVxcXCI4LjEyXFxcIiB5Mj1cXFwiMTUuODhcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTQuNDdcXFwiIHkxPVxcXCIxNC40OFxcXCIgeDI9XFxcIjIwXFxcIiB5Mj1cXFwiMjBcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiOC4xMlxcXCIgeTE9XFxcIjguMTJcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+XCIsXCJzZWFyY2hcIjpcIjxjaXJjbGUgY3g9XFxcIjExXFxcIiBjeT1cXFwiMTFcXFwiIHI9XFxcIjhcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjIxXFxcIiB4Mj1cXFwiMTYuNjVcXFwiIHkyPVxcXCIxNi42NVxcXCI+PC9saW5lPlwiLFwic2VuZFwiOlwiPGxpbmUgeDE9XFxcIjIyXFxcIiB5MT1cXFwiMlxcXCIgeDI9XFxcIjExXFxcIiB5Mj1cXFwiMTNcXFwiPjwvbGluZT48cG9seWdvbiBwb2ludHM9XFxcIjIyIDIgMTUgMjIgMTEgMTMgMiA5IDIyIDJcXFwiPjwvcG9seWdvbj5cIixcInNlcnZlclwiOlwiPHJlY3QgeD1cXFwiMlxcXCIgeT1cXFwiMlxcXCIgd2lkdGg9XFxcIjIwXFxcIiBoZWlnaHQ9XFxcIjhcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjJcXFwiIHk9XFxcIjE0XFxcIiB3aWR0aD1cXFwiMjBcXFwiIGhlaWdodD1cXFwiOFxcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+PGxpbmUgeDE9XFxcIjZcXFwiIHkxPVxcXCI2XFxcIiB4Mj1cXFwiNi4wMVxcXCIgeTI9XFxcIjZcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiNlxcXCIgeTE9XFxcIjE4XFxcIiB4Mj1cXFwiNi4wMVxcXCIgeTI9XFxcIjE4XFxcIj48L2xpbmU+XCIsXCJzZXR0aW5nc1wiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTE5LjQgMTVhMS42NSAxLjY1IDAgMCAwIC4zMyAxLjgybC4wNi4wNmEyIDIgMCAwIDEgMCAyLjgzIDIgMiAwIDAgMS0yLjgzIDBsLS4wNi0uMDZhMS42NSAxLjY1IDAgMCAwLTEuODItLjMzIDEuNjUgMS42NSAwIDAgMC0xIDEuNTFWMjFhMiAyIDAgMCAxLTIgMiAyIDIgMCAwIDEtMi0ydi0uMDlBMS42NSAxLjY1IDAgMCAwIDkgMTkuNGExLjY1IDEuNjUgMCAwIDAtMS44Mi4zM2wtLjA2LjA2YTIgMiAwIDAgMS0yLjgzIDAgMiAyIDAgMCAxIDAtMi44M2wuMDYtLjA2YTEuNjUgMS42NSAwIDAgMCAuMzMtMS44MiAxLjY1IDEuNjUgMCAwIDAtMS41MS0xSDNhMiAyIDAgMCAxLTItMiAyIDIgMCAwIDEgMi0yaC4wOUExLjY1IDEuNjUgMCAwIDAgNC42IDlhMS42NSAxLjY1IDAgMCAwLS4zMy0xLjgybC0uMDYtLjA2YTIgMiAwIDAgMSAwLTIuODMgMiAyIDAgMCAxIDIuODMgMGwuMDYuMDZhMS42NSAxLjY1IDAgMCAwIDEuODIuMzNIOWExLjY1IDEuNjUgMCAwIDAgMS0xLjUxVjNhMiAyIDAgMCAxIDItMiAyIDIgMCAwIDEgMiAydi4wOWExLjY1IDEuNjUgMCAwIDAgMSAxLjUxIDEuNjUgMS42NSAwIDAgMCAxLjgyLS4zM2wuMDYtLjA2YTIgMiAwIDAgMSAyLjgzIDAgMiAyIDAgMCAxIDAgMi44M2wtLjA2LjA2YTEuNjUgMS42NSAwIDAgMC0uMzMgMS44MlY5YTEuNjUgMS42NSAwIDAgMCAxLjUxIDFIMjFhMiAyIDAgMCAxIDIgMiAyIDIgMCAwIDEtMiAyaC0uMDlhMS42NSAxLjY1IDAgMCAwLTEuNTEgMXpcXFwiPjwvcGF0aD5cIixcInNoYXJlLTJcIjpcIjxjaXJjbGUgY3g9XFxcIjE4XFxcIiBjeT1cXFwiNVxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiNlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxOFxcXCIgY3k9XFxcIjE5XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiOC41OVxcXCIgeTE9XFxcIjEzLjUxXFxcIiB4Mj1cXFwiMTUuNDJcXFwiIHkyPVxcXCIxNy40OVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNS40MVxcXCIgeTE9XFxcIjYuNTFcXFwiIHgyPVxcXCI4LjU5XFxcIiB5Mj1cXFwiMTAuNDlcXFwiPjwvbGluZT5cIixcInNoYXJlXCI6XCI8cGF0aCBkPVxcXCJNNCAxMnY4YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMnYtOFxcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjE2IDYgMTIgMiA4IDZcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMlxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT5cIixcInNoaWVsZC1vZmZcIjpcIjxwYXRoIGQ9XFxcIk0xOS42OSAxNGE2LjkgNi45IDAgMCAwIC4zMS0yVjVsLTgtMy0zLjE2IDEuMThcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNC43MyA0LjczTDQgNXY3YzAgNiA4IDEwIDggMTBhMjAuMjkgMjAuMjkgMCAwIDAgNS42Mi00LjM4XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPlwiLFwic2hpZWxkXCI6XCI8cGF0aCBkPVxcXCJNMTIgMjJzOC00IDgtMTBWNWwtOC0zLTggM3Y3YzAgNiA4IDEwIDggMTB6XFxcIj48L3BhdGg+XCIsXCJzaG9wcGluZy1iYWdcIjpcIjxwYXRoIGQ9XFxcIk02IDJMMyA2djE0YTIgMiAwIDAgMCAyIDJoMTRhMiAyIDAgMCAwIDItMlY2bC0zLTR6XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjNcXFwiIHkxPVxcXCI2XFxcIiB4Mj1cXFwiMjFcXFwiIHkyPVxcXCI2XFxcIj48L2xpbmU+PHBhdGggZD1cXFwiTTE2IDEwYTQgNCAwIDAgMS04IDBcXFwiPjwvcGF0aD5cIixcInNob3BwaW5nLWNhcnRcIjpcIjxjaXJjbGUgY3g9XFxcIjlcXFwiIGN5PVxcXCIyMVxcXCIgcj1cXFwiMVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMjBcXFwiIGN5PVxcXCIyMVxcXCIgcj1cXFwiMVxcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTEgMWg0bDIuNjggMTMuMzlhMiAyIDAgMCAwIDIgMS42MWg5LjcyYTIgMiAwIDAgMCAyLTEuNjFMMjMgNkg2XFxcIj48L3BhdGg+XCIsXCJzaHVmZmxlXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIxNiAzIDIxIDMgMjEgOFxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiNFxcXCIgeTE9XFxcIjIwXFxcIiB4Mj1cXFwiMjFcXFwiIHkyPVxcXCIzXFxcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMjEgMTYgMjEgMjEgMTYgMjFcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjE1XFxcIiB5MT1cXFwiMTVcXFwiIHgyPVxcXCIyMVxcXCIgeTI9XFxcIjIxXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjRcXFwiIHkxPVxcXCI0XFxcIiB4Mj1cXFwiOVxcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT5cIixcInNpZGViYXJcIjpcIjxyZWN0IHg9XFxcIjNcXFwiIHk9XFxcIjNcXFwiIHdpZHRoPVxcXCIxOFxcXCIgaGVpZ2h0PVxcXCIxOFxcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+PGxpbmUgeDE9XFxcIjlcXFwiIHkxPVxcXCIzXFxcIiB4Mj1cXFwiOVxcXCIgeTI9XFxcIjIxXFxcIj48L2xpbmU+XCIsXCJza2lwLWJhY2tcIjpcIjxwb2x5Z29uIHBvaW50cz1cXFwiMTkgMjAgOSAxMiAxOSA0IDE5IDIwXFxcIj48L3BvbHlnb24+PGxpbmUgeDE9XFxcIjVcXFwiIHkxPVxcXCIxOVxcXCIgeDI9XFxcIjVcXFwiIHkyPVxcXCI1XFxcIj48L2xpbmU+XCIsXCJza2lwLWZvcndhcmRcIjpcIjxwb2x5Z29uIHBvaW50cz1cXFwiNSA0IDE1IDEyIDUgMjAgNSA0XFxcIj48L3BvbHlnb24+PGxpbmUgeDE9XFxcIjE5XFxcIiB5MT1cXFwiNVxcXCIgeDI9XFxcIjE5XFxcIiB5Mj1cXFwiMTlcXFwiPjwvbGluZT5cIixcInNsYWNrXCI6XCI8cGF0aCBkPVxcXCJNMTQuNSAxMGMtLjgzIDAtMS41LS42Ny0xLjUtMS41di01YzAtLjgzLjY3LTEuNSAxLjUtMS41czEuNS42NyAxLjUgMS41djVjMCAuODMtLjY3IDEuNS0xLjUgMS41elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yMC41IDEwSDE5VjguNWMwLS44My42Ny0xLjUgMS41LTEuNXMxLjUuNjcgMS41IDEuNS0uNjcgMS41LTEuNSAxLjV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTkuNSAxNGMuODMgMCAxLjUuNjcgMS41IDEuNXY1YzAgLjgzLS42NyAxLjUtMS41IDEuNVM4IDIxLjMzIDggMjAuNXYtNWMwLS44My42Ny0xLjUgMS41LTEuNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMy41IDE0SDV2MS41YzAgLjgzLS42NyAxLjUtMS41IDEuNVMyIDE2LjMzIDIgMTUuNSAyLjY3IDE0IDMuNSAxNHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTQgMTQuNWMwLS44My42Ny0xLjUgMS41LTEuNWg1Yy44MyAwIDEuNS42NyAxLjUgMS41cy0uNjcgMS41LTEuNSAxLjVoLTVjLS44MyAwLTEuNS0uNjctMS41LTEuNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTUuNSAxOUgxNHYxLjVjMCAuODMuNjcgMS41IDEuNSAxLjVzMS41LS42NyAxLjUtMS41LS42Ny0xLjUtMS41LTEuNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTAgOS41QzEwIDguNjcgOS4zMyA4IDguNSA4aC01QzIuNjcgOCAyIDguNjcgMiA5LjVTMi42NyAxMSAzLjUgMTFoNWMuODMgMCAxLjUtLjY3IDEuNS0xLjV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTguNSA1SDEwVjMuNUMxMCAyLjY3IDkuMzMgMiA4LjUgMlM3IDIuNjcgNyAzLjUgNy42NyA1IDguNSA1elxcXCI+PC9wYXRoPlwiLFwic2xhc2hcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEwXFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiNC45M1xcXCIgeTE9XFxcIjQuOTNcXFwiIHgyPVxcXCIxOS4wN1xcXCIgeTI9XFxcIjE5LjA3XFxcIj48L2xpbmU+XCIsXCJzbGlkZXJzXCI6XCI8bGluZSB4MT1cXFwiNFxcXCIgeTE9XFxcIjIxXFxcIiB4Mj1cXFwiNFxcXCIgeTI9XFxcIjE0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjRcXFwiIHkxPVxcXCIxMFxcXCIgeDI9XFxcIjRcXFwiIHkyPVxcXCIzXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMjFcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiOFxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiM1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyMFxcXCIgeTE9XFxcIjIxXFxcIiB4Mj1cXFwiMjBcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyMFxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMjBcXFwiIHkyPVxcXCIzXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxNFxcXCIgeDI9XFxcIjdcXFwiIHkyPVxcXCIxNFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI5XFxcIiB5MT1cXFwiOFxcXCIgeDI9XFxcIjE1XFxcIiB5Mj1cXFwiOFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxN1xcXCIgeTE9XFxcIjE2XFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIxNlxcXCI+PC9saW5lPlwiLFwic21hcnRwaG9uZVwiOlwiPHJlY3QgeD1cXFwiNVxcXCIgeT1cXFwiMlxcXCIgd2lkdGg9XFxcIjE0XFxcIiBoZWlnaHQ9XFxcIjIwXFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxOFxcXCIgeDI9XFxcIjEyLjAxXFxcIiB5Mj1cXFwiMThcXFwiPjwvbGluZT5cIixcInNtaWxlXCI6XCI8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTggMTRzMS41IDIgNCAyIDQtMiA0LTJcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiOVxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCI5LjAxXFxcIiB5Mj1cXFwiOVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxNVxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCIxNS4wMVxcXCIgeTI9XFxcIjlcXFwiPjwvbGluZT5cIixcInNwZWFrZXJcIjpcIjxyZWN0IHg9XFxcIjRcXFwiIHk9XFxcIjJcXFwiIHdpZHRoPVxcXCIxNlxcXCIgaGVpZ2h0PVxcXCIyMFxcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+PGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxNFxcXCIgcj1cXFwiNFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiNlxcXCIgeDI9XFxcIjEyLjAxXFxcIiB5Mj1cXFwiNlxcXCI+PC9saW5lPlwiLFwic3F1YXJlXCI6XCI8cmVjdCB4PVxcXCIzXFxcIiB5PVxcXCIzXFxcIiB3aWR0aD1cXFwiMThcXFwiIGhlaWdodD1cXFwiMThcXFwiIHJ4PVxcXCIyXFxcIiByeT1cXFwiMlxcXCI+PC9yZWN0PlwiLFwic3RhclwiOlwiPHBvbHlnb24gcG9pbnRzPVxcXCIxMiAyIDE1LjA5IDguMjYgMjIgOS4yNyAxNyAxNC4xNCAxOC4xOCAyMS4wMiAxMiAxNy43NyA1LjgyIDIxLjAyIDcgMTQuMTQgMiA5LjI3IDguOTEgOC4yNiAxMiAyXFxcIj48L3BvbHlnb24+XCIsXCJzdG9wLWNpcmNsZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxyZWN0IHg9XFxcIjlcXFwiIHk9XFxcIjlcXFwiIHdpZHRoPVxcXCI2XFxcIiBoZWlnaHQ9XFxcIjZcXFwiPjwvcmVjdD5cIixcInN1blwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiNVxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiM1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjIxXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI0LjIyXFxcIiB5MT1cXFwiNC4yMlxcXCIgeDI9XFxcIjUuNjRcXFwiIHkyPVxcXCI1LjY0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE4LjM2XFxcIiB5MT1cXFwiMTguMzZcXFwiIHgyPVxcXCIxOS43OFxcXCIgeTI9XFxcIjE5Ljc4XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjNcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjEyXFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIxMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI0LjIyXFxcIiB5MT1cXFwiMTkuNzhcXFwiIHgyPVxcXCI1LjY0XFxcIiB5Mj1cXFwiMTguMzZcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTguMzZcXFwiIHkxPVxcXCI1LjY0XFxcIiB4Mj1cXFwiMTkuNzhcXFwiIHkyPVxcXCI0LjIyXFxcIj48L2xpbmU+XCIsXCJzdW5yaXNlXCI6XCI8cGF0aCBkPVxcXCJNMTcgMThhNSA1IDAgMCAwLTEwIDBcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCI5XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjQuMjJcXFwiIHkxPVxcXCIxMC4yMlxcXCIgeDI9XFxcIjUuNjRcXFwiIHkyPVxcXCIxMS42NFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxXFxcIiB5MT1cXFwiMThcXFwiIHgyPVxcXCIzXFxcIiB5Mj1cXFwiMThcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMjFcXFwiIHkxPVxcXCIxOFxcXCIgeDI9XFxcIjIzXFxcIiB5Mj1cXFwiMThcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTguMzZcXFwiIHkxPVxcXCIxMS42NFxcXCIgeDI9XFxcIjE5Ljc4XFxcIiB5Mj1cXFwiMTAuMjJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMjNcXFwiIHkxPVxcXCIyMlxcXCIgeDI9XFxcIjFcXFwiIHkyPVxcXCIyMlxcXCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjggNiAxMiAyIDE2IDZcXFwiPjwvcG9seWxpbmU+XCIsXCJzdW5zZXRcIjpcIjxwYXRoIGQ9XFxcIk0xNyAxOGE1IDUgMCAwIDAtMTAgMFxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjJcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiNC4yMlxcXCIgeTE9XFxcIjEwLjIyXFxcIiB4Mj1cXFwiNS42NFxcXCIgeTI9XFxcIjExLjY0XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxOFxcXCIgeDI9XFxcIjNcXFwiIHkyPVxcXCIxOFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjE4XFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIxOFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxOC4zNlxcXCIgeTE9XFxcIjExLjY0XFxcIiB4Mj1cXFwiMTkuNzhcXFwiIHkyPVxcXCIxMC4yMlxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyM1xcXCIgeTE9XFxcIjIyXFxcIiB4Mj1cXFwiMVxcXCIgeTI9XFxcIjIyXFxcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTYgNSAxMiA5IDggNVxcXCI+PC9wb2x5bGluZT5cIixcInRhYmxldFwiOlwiPHJlY3QgeD1cXFwiNFxcXCIgeT1cXFwiMlxcXCIgd2lkdGg9XFxcIjE2XFxcIiBoZWlnaHQ9XFxcIjIwXFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxOFxcXCIgeDI9XFxcIjEyLjAxXFxcIiB5Mj1cXFwiMThcXFwiPjwvbGluZT5cIixcInRhZ1wiOlwiPHBhdGggZD1cXFwiTTIwLjU5IDEzLjQxbC03LjE3IDcuMTdhMiAyIDAgMCAxLTIuODMgMEwyIDEyVjJoMTBsOC41OSA4LjU5YTIgMiAwIDAgMSAwIDIuODJ6XFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjdcXFwiIHkxPVxcXCI3XFxcIiB4Mj1cXFwiNy4wMVxcXCIgeTI9XFxcIjdcXFwiPjwvbGluZT5cIixcInRhcmdldFwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjZcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjJcXFwiPjwvY2lyY2xlPlwiLFwidGVybWluYWxcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjQgMTcgMTAgMTEgNCA1XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE5XFxcIiB4Mj1cXFwiMjBcXFwiIHkyPVxcXCIxOVxcXCI+PC9saW5lPlwiLFwidGhlcm1vbWV0ZXJcIjpcIjxwYXRoIGQ9XFxcIk0xNCAxNC43NlYzLjVhMi41IDIuNSAwIDAgMC01IDB2MTEuMjZhNC41IDQuNSAwIDEgMCA1IDB6XFxcIj48L3BhdGg+XCIsXCJ0aHVtYnMtZG93blwiOlwiPHBhdGggZD1cXFwiTTEwIDE1djRhMyAzIDAgMCAwIDMgM2w0LTlWMkg1LjcyYTIgMiAwIDAgMC0yIDEuN2wtMS4zOCA5YTIgMiAwIDAgMCAyIDIuM3ptNy0xM2gyLjY3QTIuMzEgMi4zMSAwIDAgMSAyMiA0djdhMi4zMSAyLjMxIDAgMCAxLTIuMzMgMkgxN1xcXCI+PC9wYXRoPlwiLFwidGh1bWJzLXVwXCI6XCI8cGF0aCBkPVxcXCJNMTQgOVY1YTMgMyAwIDAgMC0zLTNsLTQgOXYxMWgxMS4yOGEyIDIgMCAwIDAgMi0xLjdsMS4zOC05YTIgMiAwIDAgMC0yLTIuM3pNNyAyMkg0YTIgMiAwIDAgMS0yLTJ2LTdhMiAyIDAgMCAxIDItMmgzXFxcIj48L3BhdGg+XCIsXCJ0b2dnbGUtbGVmdFwiOlwiPHJlY3QgeD1cXFwiMVxcXCIgeT1cXFwiNVxcXCIgd2lkdGg9XFxcIjIyXFxcIiBoZWlnaHQ9XFxcIjE0XFxcIiByeD1cXFwiN1xcXCIgcnk9XFxcIjdcXFwiPjwvcmVjdD48Y2lyY2xlIGN4PVxcXCI4XFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPlwiLFwidG9nZ2xlLXJpZ2h0XCI6XCI8cmVjdCB4PVxcXCIxXFxcIiB5PVxcXCI1XFxcIiB3aWR0aD1cXFwiMjJcXFwiIGhlaWdodD1cXFwiMTRcXFwiIHJ4PVxcXCI3XFxcIiByeT1cXFwiN1xcXCI+PC9yZWN0PjxjaXJjbGUgY3g9XFxcIjE2XFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPlwiLFwidG9vbFwiOlwiPHBhdGggZD1cXFwiTTE0LjcgNi4zYTEgMSAwIDAgMCAwIDEuNGwxLjYgMS42YTEgMSAwIDAgMCAxLjQgMGwzLjc3LTMuNzdhNiA2IDAgMCAxLTcuOTQgNy45NGwtNi45MSA2LjkxYTIuMTIgMi4xMiAwIDAgMS0zLTNsNi45MS02LjkxYTYgNiAwIDAgMSA3Ljk0LTcuOTRsLTMuNzYgMy43NnpcXFwiPjwvcGF0aD5cIixcInRyYXNoLTJcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjMgNiA1IDYgMjEgNlxcXCI+PC9wb2x5bGluZT48cGF0aCBkPVxcXCJNMTkgNnYxNGEyIDIgMCAwIDEtMiAySDdhMiAyIDAgMCAxLTItMlY2bTMgMFY0YTIgMiAwIDAgMSAyLTJoNGEyIDIgMCAwIDEgMiAydjJcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMTBcXFwiIHkxPVxcXCIxMVxcXCIgeDI9XFxcIjEwXFxcIiB5Mj1cXFwiMTdcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTRcXFwiIHkxPVxcXCIxMVxcXCIgeDI9XFxcIjE0XFxcIiB5Mj1cXFwiMTdcXFwiPjwvbGluZT5cIixcInRyYXNoXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIzIDYgNSA2IDIxIDZcXFwiPjwvcG9seWxpbmU+PHBhdGggZD1cXFwiTTE5IDZ2MTRhMiAyIDAgMCAxLTIgMkg3YTIgMiAwIDAgMS0yLTJWNm0zIDBWNGEyIDIgMCAwIDEgMi0yaDRhMiAyIDAgMCAxIDIgMnYyXFxcIj48L3BhdGg+XCIsXCJ0cmVsbG9cIjpcIjxyZWN0IHg9XFxcIjNcXFwiIHk9XFxcIjNcXFwiIHdpZHRoPVxcXCIxOFxcXCIgaGVpZ2h0PVxcXCIxOFxcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+PHJlY3QgeD1cXFwiN1xcXCIgeT1cXFwiN1xcXCIgd2lkdGg9XFxcIjNcXFwiIGhlaWdodD1cXFwiOVxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjE0XFxcIiB5PVxcXCI3XFxcIiB3aWR0aD1cXFwiM1xcXCIgaGVpZ2h0PVxcXCI1XFxcIj48L3JlY3Q+XCIsXCJ0cmVuZGluZy1kb3duXCI6XCI8cG9seWxpbmUgcG9pbnRzPVxcXCIyMyAxOCAxMy41IDguNSA4LjUgMTMuNSAxIDZcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTcgMTggMjMgMTggMjMgMTJcXFwiPjwvcG9seWxpbmU+XCIsXCJ0cmVuZGluZy11cFwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMjMgNiAxMy41IDE1LjUgOC41IDEwLjUgMSAxOFxcXCI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCIxNyA2IDIzIDYgMjMgMTJcXFwiPjwvcG9seWxpbmU+XCIsXCJ0cmlhbmdsZVwiOlwiPHBhdGggZD1cXFwiTTEwLjI5IDMuODZMMS44MiAxOGEyIDIgMCAwIDAgMS43MSAzaDE2Ljk0YTIgMiAwIDAgMCAxLjcxLTNMMTMuNzEgMy44NmEyIDIgMCAwIDAtMy40MiAwelxcXCI+PC9wYXRoPlwiLFwidHJ1Y2tcIjpcIjxyZWN0IHg9XFxcIjFcXFwiIHk9XFxcIjNcXFwiIHdpZHRoPVxcXCIxNVxcXCIgaGVpZ2h0PVxcXCIxM1xcXCI+PC9yZWN0Pjxwb2x5Z29uIHBvaW50cz1cXFwiMTYgOCAyMCA4IDIzIDExIDIzIDE2IDE2IDE2IDE2IDhcXFwiPjwvcG9seWdvbj48Y2lyY2xlIGN4PVxcXCI1LjVcXFwiIGN5PVxcXCIxOC41XFxcIiByPVxcXCIyLjVcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE4LjVcXFwiIGN5PVxcXCIxOC41XFxcIiByPVxcXCIyLjVcXFwiPjwvY2lyY2xlPlwiLFwidHZcIjpcIjxyZWN0IHg9XFxcIjJcXFwiIHk9XFxcIjdcXFwiIHdpZHRoPVxcXCIyMFxcXCIgaGVpZ2h0PVxcXCIxNVxcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTcgMiAxMiA3IDcgMlxcXCI+PC9wb2x5bGluZT5cIixcInR3aXRjaFwiOlwiPHBhdGggZD1cXFwiTTIxIDJIM3YxNmg1djRsNC00aDVsNC00VjJ6bS0xMCA5VjdtNSA0VjdcXFwiPjwvcGF0aD5cIixcInR3aXR0ZXJcIjpcIjxwYXRoIGQ9XFxcIk0yMyAzYTEwLjkgMTAuOSAwIDAgMS0zLjE0IDEuNTMgNC40OCA0LjQ4IDAgMCAwLTcuODYgM3YxQTEwLjY2IDEwLjY2IDAgMCAxIDMgNHMtNCA5IDUgMTNhMTEuNjQgMTEuNjQgMCAwIDEtNyAyYzkgNSAyMCAwIDIwLTExLjVhNC41IDQuNSAwIDAgMC0uMDgtLjgzQTcuNzIgNy43MiAwIDAgMCAyMyAzelxcXCI+PC9wYXRoPlwiLFwidHlwZVwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiNCA3IDQgNCAyMCA0IDIwIDdcXFwiPjwvcG9seWxpbmU+PGxpbmUgeDE9XFxcIjlcXFwiIHkxPVxcXCIyMFxcXCIgeDI9XFxcIjE1XFxcIiB5Mj1cXFwiMjBcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCI0XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIyMFxcXCI+PC9saW5lPlwiLFwidW1icmVsbGFcIjpcIjxwYXRoIGQ9XFxcIk0yMyAxMmExMS4wNSAxMS4wNSAwIDAgMC0yMiAwem0tNSA3YTMgMyAwIDAgMS02IDB2LTdcXFwiPjwvcGF0aD5cIixcInVuZGVybGluZVwiOlwiPHBhdGggZD1cXFwiTTYgM3Y3YTYgNiAwIDAgMCA2IDYgNiA2IDAgMCAwIDYtNlYzXFxcIj48L3BhdGg+PGxpbmUgeDE9XFxcIjRcXFwiIHkxPVxcXCIyMVxcXCIgeDI9XFxcIjIwXFxcIiB5Mj1cXFwiMjFcXFwiPjwvbGluZT5cIixcInVubG9ja1wiOlwiPHJlY3QgeD1cXFwiM1xcXCIgeT1cXFwiMTFcXFwiIHdpZHRoPVxcXCIxOFxcXCIgaGVpZ2h0PVxcXCIxMVxcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+PHBhdGggZD1cXFwiTTcgMTFWN2E1IDUgMCAwIDEgOS45LTFcXFwiPjwvcGF0aD5cIixcInVwbG9hZC1jbG91ZFwiOlwiPHBvbHlsaW5lIHBvaW50cz1cXFwiMTYgMTYgMTIgMTIgOCAxNlxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMjFcXFwiPjwvbGluZT48cGF0aCBkPVxcXCJNMjAuMzkgMTguMzlBNSA1IDAgMCAwIDE4IDloLTEuMjZBOCA4IDAgMSAwIDMgMTYuM1xcXCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9XFxcIjE2IDE2IDEyIDEyIDggMTZcXFwiPjwvcG9seWxpbmU+XCIsXCJ1cGxvYWRcIjpcIjxwYXRoIGQ9XFxcIk0yMSAxNXY0YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0ydi00XFxcIj48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTcgOCAxMiAzIDcgOFxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIzXFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPlwiLFwidXNlci1jaGVja1wiOlwiPHBhdGggZD1cXFwiTTE2IDIxdi0yYTQgNCAwIDAgMC00LTRINWE0IDQgMCAwIDAtNCA0djJcXFwiPjwvcGF0aD48Y2lyY2xlIGN4PVxcXCI4LjVcXFwiIGN5PVxcXCI3XFxcIiByPVxcXCI0XFxcIj48L2NpcmNsZT48cG9seWxpbmUgcG9pbnRzPVxcXCIxNyAxMSAxOSAxMyAyMyA5XFxcIj48L3BvbHlsaW5lPlwiLFwidXNlci1taW51c1wiOlwiPHBhdGggZD1cXFwiTTE2IDIxdi0yYTQgNCAwIDAgMC00LTRINWE0IDQgMCAwIDAtNCA0djJcXFwiPjwvcGF0aD48Y2lyY2xlIGN4PVxcXCI4LjVcXFwiIGN5PVxcXCI3XFxcIiByPVxcXCI0XFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiMjNcXFwiIHkxPVxcXCIxMVxcXCIgeDI9XFxcIjE3XFxcIiB5Mj1cXFwiMTFcXFwiPjwvbGluZT5cIixcInVzZXItcGx1c1wiOlwiPHBhdGggZD1cXFwiTTE2IDIxdi0yYTQgNCAwIDAgMC00LTRINWE0IDQgMCAwIDAtNCA0djJcXFwiPjwvcGF0aD48Y2lyY2xlIGN4PVxcXCI4LjVcXFwiIGN5PVxcXCI3XFxcIiByPVxcXCI0XFxcIj48L2NpcmNsZT48bGluZSB4MT1cXFwiMjBcXFwiIHkxPVxcXCI4XFxcIiB4Mj1cXFwiMjBcXFwiIHkyPVxcXCIxNFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIyM1xcXCIgeTE9XFxcIjExXFxcIiB4Mj1cXFwiMTdcXFwiIHkyPVxcXCIxMVxcXCI+PC9saW5lPlwiLFwidXNlci14XCI6XCI8cGF0aCBkPVxcXCJNMTYgMjF2LTJhNCA0IDAgMCAwLTQtNEg1YTQgNCAwIDAgMC00IDR2MlxcXCI+PC9wYXRoPjxjaXJjbGUgY3g9XFxcIjguNVxcXCIgY3k9XFxcIjdcXFwiIHI9XFxcIjRcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIxOFxcXCIgeTE9XFxcIjhcXFwiIHgyPVxcXCIyM1xcXCIgeTI9XFxcIjEzXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjIzXFxcIiB5MT1cXFwiOFxcXCIgeDI9XFxcIjE4XFxcIiB5Mj1cXFwiMTNcXFwiPjwvbGluZT5cIixcInVzZXJcIjpcIjxwYXRoIGQ9XFxcIk0yMCAyMXYtMmE0IDQgMCAwIDAtNC00SDhhNCA0IDAgMCAwLTQgNHYyXFxcIj48L3BhdGg+PGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCI3XFxcIiByPVxcXCI0XFxcIj48L2NpcmNsZT5cIixcInVzZXJzXCI6XCI8cGF0aCBkPVxcXCJNMTcgMjF2LTJhNCA0IDAgMCAwLTQtNEg1YTQgNCAwIDAgMC00IDR2MlxcXCI+PC9wYXRoPjxjaXJjbGUgY3g9XFxcIjlcXFwiIGN5PVxcXCI3XFxcIiByPVxcXCI0XFxcIj48L2NpcmNsZT48cGF0aCBkPVxcXCJNMjMgMjF2LTJhNCA0IDAgMCAwLTMtMy44N1xcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xNiAzLjEzYTQgNCAwIDAgMSAwIDcuNzVcXFwiPjwvcGF0aD5cIixcInZpZGVvLW9mZlwiOlwiPHBhdGggZD1cXFwiTTE2IDE2djFhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJWN2EyIDIgMCAwIDEgMi0yaDJtNS42NiAwSDE0YTIgMiAwIDAgMSAyIDJ2My4zNGwxIDFMMjMgN3YxMFxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCIxXFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjIzXFxcIiB5Mj1cXFwiMjNcXFwiPjwvbGluZT5cIixcInZpZGVvXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjIzIDcgMTYgMTIgMjMgMTcgMjMgN1xcXCI+PC9wb2x5Z29uPjxyZWN0IHg9XFxcIjFcXFwiIHk9XFxcIjVcXFwiIHdpZHRoPVxcXCIxNVxcXCIgaGVpZ2h0PVxcXCIxNFxcXCIgcng9XFxcIjJcXFwiIHJ5PVxcXCIyXFxcIj48L3JlY3Q+XCIsXCJ2b2ljZW1haWxcIjpcIjxjaXJjbGUgY3g9XFxcIjUuNVxcXCIgY3k9XFxcIjExLjVcXFwiIHI9XFxcIjQuNVxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTguNVxcXCIgY3k9XFxcIjExLjVcXFwiIHI9XFxcIjQuNVxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjUuNVxcXCIgeTE9XFxcIjE2XFxcIiB4Mj1cXFwiMTguNVxcXCIgeTI9XFxcIjE2XFxcIj48L2xpbmU+XCIsXCJ2b2x1bWUtMVwiOlwiPHBvbHlnb24gcG9pbnRzPVxcXCIxMSA1IDYgOSAyIDkgMiAxNSA2IDE1IDExIDE5IDExIDVcXFwiPjwvcG9seWdvbj48cGF0aCBkPVxcXCJNMTUuNTQgOC40NmE1IDUgMCAwIDEgMCA3LjA3XFxcIj48L3BhdGg+XCIsXCJ2b2x1bWUtMlwiOlwiPHBvbHlnb24gcG9pbnRzPVxcXCIxMSA1IDYgOSAyIDkgMiAxNSA2IDE1IDExIDE5IDExIDVcXFwiPjwvcG9seWdvbj48cGF0aCBkPVxcXCJNMTkuMDcgNC45M2ExMCAxMCAwIDAgMSAwIDE0LjE0TTE1LjU0IDguNDZhNSA1IDAgMCAxIDAgNy4wN1xcXCI+PC9wYXRoPlwiLFwidm9sdW1lLXhcIjpcIjxwb2x5Z29uIHBvaW50cz1cXFwiMTEgNSA2IDkgMiA5IDIgMTUgNiAxNSAxMSAxOSAxMSA1XFxcIj48L3BvbHlnb24+PGxpbmUgeDE9XFxcIjIzXFxcIiB5MT1cXFwiOVxcXCIgeDI9XFxcIjE3XFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiMTdcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPlwiLFwidm9sdW1lXCI6XCI8cG9seWdvbiBwb2ludHM9XFxcIjExIDUgNiA5IDIgOSAyIDE1IDYgMTUgMTEgMTkgMTEgNVxcXCI+PC9wb2x5Z29uPlwiLFwid2F0Y2hcIjpcIjxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjdcXFwiPjwvY2lyY2xlPjxwb2x5bGluZSBwb2ludHM9XFxcIjEyIDkgMTIgMTIgMTMuNSAxMy41XFxcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XFxcIk0xNi41MSAxNy4zNWwtLjM1IDMuODNhMiAyIDAgMCAxLTIgMS44Mkg5LjgzYTIgMiAwIDAgMS0yLTEuODJsLS4zNS0zLjgzbS4wMS0xMC43bC4zNS0zLjgzQTIgMiAwIDAgMSA5LjgzIDFoNC4zNWEyIDIgMCAwIDEgMiAxLjgybC4zNSAzLjgzXFxcIj48L3BhdGg+XCIsXCJ3aWZpLW9mZlwiOlwiPGxpbmUgeDE9XFxcIjFcXFwiIHkxPVxcXCIxXFxcIiB4Mj1cXFwiMjNcXFwiIHkyPVxcXCIyM1xcXCI+PC9saW5lPjxwYXRoIGQ9XFxcIk0xNi43MiAxMS4wNkExMC45NCAxMC45NCAwIDAgMSAxOSAxMi41NVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk01IDEyLjU1YTEwLjk0IDEwLjk0IDAgMCAxIDUuMTctMi4zOVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMC43MSA1LjA1QTE2IDE2IDAgMCAxIDIyLjU4IDlcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMS40MiA5YTE1LjkxIDE1LjkxIDAgMCAxIDQuNy0yLjg4XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTguNTMgMTYuMTFhNiA2IDAgMCAxIDYuOTUgMFxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjIwXFxcIiB4Mj1cXFwiMTIuMDFcXFwiIHkyPVxcXCIyMFxcXCI+PC9saW5lPlwiLFwid2lmaVwiOlwiPHBhdGggZD1cXFwiTTUgMTIuNTVhMTEgMTEgMCAwIDEgMTQuMDggMFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xLjQyIDlhMTYgMTYgMCAwIDEgMjEuMTYgMFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk04LjUzIDE2LjExYTYgNiAwIDAgMSA2Ljk1IDBcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIyMFxcXCIgeDI9XFxcIjEyLjAxXFxcIiB5Mj1cXFwiMjBcXFwiPjwvbGluZT5cIixcIndpbmRcIjpcIjxwYXRoIGQ9XFxcIk05LjU5IDQuNTlBMiAyIDAgMSAxIDExIDhIMm0xMC41OSAxMS40MUEyIDIgMCAxIDAgMTQgMTZIMm0xNS43My04LjI3QTIuNSAyLjUgMCAxIDEgMTkuNSAxMkgyXFxcIj48L3BhdGg+XCIsXCJ4LWNpcmNsZVwiOlwiPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTBcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIxNVxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCI5XFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiOVxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCIxNVxcXCIgeTI9XFxcIjE1XFxcIj48L2xpbmU+XCIsXCJ4LW9jdGFnb25cIjpcIjxwb2x5Z29uIHBvaW50cz1cXFwiNy44NiAyIDE2LjE0IDIgMjIgNy44NiAyMiAxNi4xNCAxNi4xNCAyMiA3Ljg2IDIyIDIgMTYuMTQgMiA3Ljg2IDcuODYgMlxcXCI+PC9wb2x5Z29uPjxsaW5lIHgxPVxcXCIxNVxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCI5XFxcIiB5Mj1cXFwiMTVcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiOVxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCIxNVxcXCIgeTI9XFxcIjE1XFxcIj48L2xpbmU+XCIsXCJ4LXNxdWFyZVwiOlwiPHJlY3QgeD1cXFwiM1xcXCIgeT1cXFwiM1xcXCIgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE4XFxcIiByeD1cXFwiMlxcXCIgcnk9XFxcIjJcXFwiPjwvcmVjdD48bGluZSB4MT1cXFwiOVxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCIxNVxcXCIgeTI9XFxcIjE1XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjE1XFxcIiB5MT1cXFwiOVxcXCIgeDI9XFxcIjlcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPlwiLFwieFwiOlwiPGxpbmUgeDE9XFxcIjE4XFxcIiB5MT1cXFwiNlxcXCIgeDI9XFxcIjZcXFwiIHkyPVxcXCIxOFxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI2XFxcIiB5MT1cXFwiNlxcXCIgeDI9XFxcIjE4XFxcIiB5Mj1cXFwiMThcXFwiPjwvbGluZT5cIixcInlvdXR1YmVcIjpcIjxwYXRoIGQ9XFxcIk0yMi41NCA2LjQyYTIuNzggMi43OCAwIDAgMC0xLjk0LTJDMTguODggNCAxMiA0IDEyIDRzLTYuODggMC04LjYuNDZhMi43OCAyLjc4IDAgMCAwLTEuOTQgMkEyOSAyOSAwIDAgMCAxIDExLjc1YTI5IDI5IDAgMCAwIC40NiA1LjMzQTIuNzggMi43OCAwIDAgMCAzLjQgMTljMS43Mi40NiA4LjYuNDYgOC42LjQ2czYuODggMCA4LjYtLjQ2YTIuNzggMi43OCAwIDAgMCAxLjk0LTIgMjkgMjkgMCAwIDAgLjQ2LTUuMjUgMjkgMjkgMCAwIDAtLjQ2LTUuMzN6XFxcIj48L3BhdGg+PHBvbHlnb24gcG9pbnRzPVxcXCI5Ljc1IDE1LjAyIDE1LjUgMTEuNzUgOS43NSA4LjQ4IDkuNzUgMTUuMDJcXFwiPjwvcG9seWdvbj5cIixcInphcC1vZmZcIjpcIjxwb2x5bGluZSBwb2ludHM9XFxcIjEyLjQxIDYuNzUgMTMgMiAxMC41NyA0LjkyXFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjE4LjU3IDEyLjkxIDIxIDEwIDE1LjY2IDEwXFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjggOCAzIDE0IDEyIDE0IDExIDIyIDE2IDE2XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCIxXFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjIzXFxcIiB5Mj1cXFwiMjNcXFwiPjwvbGluZT5cIixcInphcFwiOlwiPHBvbHlnb24gcG9pbnRzPVxcXCIxMyAyIDMgMTQgMTIgMTQgMTEgMjIgMjEgMTAgMTIgMTAgMTMgMlxcXCI+PC9wb2x5Z29uPlwiLFwiem9vbS1pblwiOlwiPGNpcmNsZSBjeD1cXFwiMTFcXFwiIGN5PVxcXCIxMVxcXCIgcj1cXFwiOFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjIxXFxcIiB5MT1cXFwiMjFcXFwiIHgyPVxcXCIxNi42NVxcXCIgeTI9XFxcIjE2LjY1XFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjExXFxcIiB5MT1cXFwiOFxcXCIgeDI9XFxcIjExXFxcIiB5Mj1cXFwiMTRcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiOFxcXCIgeTE9XFxcIjExXFxcIiB4Mj1cXFwiMTRcXFwiIHkyPVxcXCIxMVxcXCI+PC9saW5lPlwiLFwiem9vbS1vdXRcIjpcIjxjaXJjbGUgY3g9XFxcIjExXFxcIiBjeT1cXFwiMTFcXFwiIHI9XFxcIjhcXFwiPjwvY2lyY2xlPjxsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjIxXFxcIiB4Mj1cXFwiMTYuNjVcXFwiIHkyPVxcXCIxNi42NVxcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCI4XFxcIiB5MT1cXFwiMTFcXFwiIHgyPVxcXCIxNFxcXCIgeTI9XFxcIjExXFxcIj48L2xpbmU+XCJ9O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2RlZHVwZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2RlZHVwZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187LyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGNsYXNzTmFtZXMgPSAoZnVuY3Rpb24gKCkge1xuXHRcdC8vIGRvbid0IGluaGVyaXQgZnJvbSBPYmplY3Qgc28gd2UgY2FuIHNraXAgaGFzT3duUHJvcGVydHkgY2hlY2sgbGF0ZXJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE1NTE4MzI4L2NyZWF0aW5nLWpzLW9iamVjdC13aXRoLW9iamVjdC1jcmVhdGVudWxsI2Fuc3dlci0yMTA3OTIzMlxuXHRcdGZ1bmN0aW9uIFN0b3JhZ2VPYmplY3QoKSB7fVxuXHRcdFN0b3JhZ2VPYmplY3QucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRcdGZ1bmN0aW9uIF9wYXJzZUFycmF5IChyZXN1bHRTZXQsIGFycmF5KSB7XG5cdFx0XHR2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdF9wYXJzZShyZXN1bHRTZXQsIGFycmF5W2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0XHRmdW5jdGlvbiBfcGFyc2VOdW1iZXIgKHJlc3VsdFNldCwgbnVtKSB7XG5cdFx0XHRyZXN1bHRTZXRbbnVtXSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gX3BhcnNlT2JqZWN0IChyZXN1bHRTZXQsIG9iamVjdCkge1xuXHRcdFx0Zm9yICh2YXIgayBpbiBvYmplY3QpIHtcblx0XHRcdFx0aWYgKGhhc093bi5jYWxsKG9iamVjdCwgaykpIHtcblx0XHRcdFx0XHQvLyBzZXQgdmFsdWUgdG8gZmFsc2UgaW5zdGVhZCBvZiBkZWxldGluZyBpdCB0byBhdm9pZCBjaGFuZ2luZyBvYmplY3Qgc3RydWN0dXJlXG5cdFx0XHRcdFx0Ly8gaHR0cHM6Ly93d3cuc21hc2hpbmdtYWdhemluZS5jb20vMjAxMi8xMS93cml0aW5nLWZhc3QtbWVtb3J5LWVmZmljaWVudC1qYXZhc2NyaXB0LyNkZS1yZWZlcmVuY2luZy1taXNjb25jZXB0aW9uc1xuXHRcdFx0XHRcdHJlc3VsdFNldFtrXSA9ICEhb2JqZWN0W2tdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIFNQQUNFID0gL1xccysvO1xuXHRcdGZ1bmN0aW9uIF9wYXJzZVN0cmluZyAocmVzdWx0U2V0LCBzdHIpIHtcblx0XHRcdHZhciBhcnJheSA9IHN0ci5zcGxpdChTUEFDRSk7XG5cdFx0XHR2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdHJlc3VsdFNldFthcnJheVtpXV0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIF9wYXJzZSAocmVzdWx0U2V0LCBhcmcpIHtcblx0XHRcdGlmICghYXJnKSByZXR1cm47XG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdC8vICdmb28gYmFyJ1xuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdF9wYXJzZVN0cmluZyhyZXN1bHRTZXQsIGFyZyk7XG5cblx0XHRcdC8vIFsnZm9vJywgJ2JhcicsIC4uLl1cblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdF9wYXJzZUFycmF5KHJlc3VsdFNldCwgYXJnKTtcblxuXHRcdFx0Ly8geyAnZm9vJzogdHJ1ZSwgLi4uIH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0X3BhcnNlT2JqZWN0KHJlc3VsdFNldCwgYXJnKTtcblxuXHRcdFx0Ly8gJzEzMCdcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0X3BhcnNlTnVtYmVyKHJlc3VsdFNldCwgYXJnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBfY2xhc3NOYW1lcyAoKSB7XG5cdFx0XHQvLyBkb24ndCBsZWFrIGFyZ3VtZW50c1xuXHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3BldGthYW50b25vdi9ibHVlYmlyZC93aWtpL09wdGltaXphdGlvbi1raWxsZXJzIzMyLWxlYWtpbmctYXJndW1lbnRzXG5cdFx0XHR2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHRcdHZhciBhcmdzID0gQXJyYXkobGVuKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0YXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGNsYXNzU2V0ID0gbmV3IFN0b3JhZ2VPYmplY3QoKTtcblx0XHRcdF9wYXJzZUFycmF5KGNsYXNzU2V0LCBhcmdzKTtcblxuXHRcdFx0dmFyIGxpc3QgPSBbXTtcblxuXHRcdFx0Zm9yICh2YXIgayBpbiBjbGFzc1NldCkge1xuXHRcdFx0XHRpZiAoY2xhc3NTZXRba10pIHtcblx0XHRcdFx0XHRsaXN0LnB1c2goaylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbGlzdC5qb2luKCcgJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9jbGFzc05hbWVzO1xuXHR9KSgpO1xuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0cnVlKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdCEoX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFtdLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9IChmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KS5hcHBseShleHBvcnRzLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuXHR9IGVsc2Uge31cbn0oKSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9lcy9hcnJheS9mcm9tLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2VzL2FycmF5L2Zyb20uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbl9fd2VicGFja19yZXF1aXJlX18oLyohIC4uLy4uL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvci5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oLyohIC4uLy4uL21vZHVsZXMvZXMuYXJyYXkuZnJvbSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mcm9tLmpzXCIpO1xudmFyIHBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi8uLi9pbnRlcm5hbHMvcGF0aCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3BhdGguanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0aC5BcnJheS5mcm9tO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtZnVuY3Rpb24uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWZ1bmN0aW9uLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1vYmplY3QuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2lzLW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZnJvbS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZyb20uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGJpbmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvYmluZC1jb250ZXh0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYmluZC1jb250ZXh0LmpzXCIpO1xudmFyIHRvT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3RvLW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLW9iamVjdC5qc1wiKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcuanNcIik7XG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZC5qc1wiKTtcbnZhciB0b0xlbmd0aCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy90by1sZW5ndGggKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1sZW5ndGguanNcIik7XG52YXIgY3JlYXRlUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzXCIpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXCIpO1xuXG4vLyBgQXJyYXkuZnJvbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgbWFwZm4gPSBhcmd1bWVudHNMZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBpdGVyYXRvck1ldGhvZCA9IGdldEl0ZXJhdG9yTWV0aG9kKE8pO1xuICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICBpZiAobWFwcGluZykgbWFwZm4gPSBiaW5kKG1hcGZuLCBhcmd1bWVudHNMZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgLy8gaWYgdGhlIHRhcmdldCBpcyBub3QgaXRlcmFibGUgb3IgaXQncyBhbiBhcnJheSB3aXRoIHRoZSBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIGEgc2ltcGxlIGNhc2VcbiAgaWYgKGl0ZXJhdG9yTWV0aG9kICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yTWV0aG9kKSkpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhdG9yTWV0aG9kLmNhbGwoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEMoKTtcbiAgICBmb3IgKDshKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmdcbiAgICAgICAgPyBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSlcbiAgICAgICAgOiBzdGVwLnZhbHVlXG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgcmVzdWx0ID0gbmV3IEMobGVuZ3RoKTtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHRvSW5kZXhlZE9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzXCIpO1xudmFyIHRvTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWxlbmd0aC5qc1wiKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXggKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleC5qc1wiKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9iaW5kLWNvbnRleHQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2JpbmQtY29udGV4dC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGFGdW5jdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9hLWZ1bmN0aW9uICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1mdW5jdGlvbi5qc1wiKTtcblxuLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0KTtcbiAgICB9O1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvYW4tb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzXCIpO1xuXG4vLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBFTlRSSUVTKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEVOVFJJRVMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB2YXIgcmV0dXJuTWV0aG9kID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXR1cm5NZXRob2QgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0dXJuTWV0aG9kLmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHdlbGxLbm93blN5bWJvbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzXCIpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciBjYWxsZWQgPSAwO1xuICB2YXIgaXRlcmF0b3JXaXRoUmV0dXJuID0ge1xuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGRvbmU6ICEhY2FsbGVkKysgfTtcbiAgICB9LFxuICAgICdyZXR1cm4nOiBmdW5jdGlvbiAoKSB7XG4gICAgICBTQUZFX0NMT1NJTkcgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgaXRlcmF0b3JXaXRoUmV0dXJuW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShpdGVyYXRvcldpdGhSZXR1cm4sIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIFNLSVBfQ0xPU0lORykge1xuICBpZiAoIVNLSVBfQ0xPU0lORyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBJVEVSQVRJT05fU1VQUE9SVCA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBvYmplY3QgPSB7fTtcbiAgICBvYmplY3RbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB7IGRvbmU6IElURVJBVElPTl9TVVBQT1JUID0gdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gICAgZXhlYyhvYmplY3QpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBJVEVSQVRJT05fU1VQUE9SVDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGNsYXNzb2ZSYXcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLXJhdy5qc1wiKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qc1wiKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIHRhZywgcmVzdWx0O1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAodGFnID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogcmVzdWx0O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9oYXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanNcIik7XG52YXIgb3duS2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9vd24ta2V5cyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzXCIpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1wiKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eS5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXModGFyZ2V0LCBrZXkpKSBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gIH1cbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBmYWlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9mYWlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG5ldyBGKCkpICE9PSBGLnByb3RvdHlwZTtcbn0pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3Rvci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWl0ZXJhdG9yLWNvbnN0cnVjdG9yLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUuanNcIikuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgY3JlYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtY3JlYXRlLmpzXCIpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvciAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXCIpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcuanNcIik7XG52YXIgSXRlcmF0b3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy5qc1wiKTtcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICBJdGVyYXRvckNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yQ29uc3RydWN0b3IsIFRPX1NUUklOR19UQUcsIGZhbHNlLCB0cnVlKTtcbiAgSXRlcmF0b3JzW1RPX1NUUklOR19UQUddID0gcmV0dXJuVGhpcztcbiAgcmV0dXJuIEl0ZXJhdG9yQ29uc3RydWN0b3I7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHkuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgdG9QcmltaXRpdmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzXCIpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzXCIpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvciAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5S2V5ID0gdG9QcmltaXRpdmUoa2V5KTtcbiAgaWYgKHByb3BlcnR5S2V5IGluIG9iamVjdCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIHByb3BlcnR5S2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbcHJvcGVydHlLZXldID0gdmFsdWU7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyICQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZXhwb3J0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzXCIpO1xudmFyIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvY3JlYXRlLWl0ZXJhdG9yLWNvbnN0cnVjdG9yICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWl0ZXJhdG9yLWNvbnN0cnVjdG9yLmpzXCIpO1xudmFyIGdldFByb3RvdHlwZU9mID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YuanNcIik7XG52YXIgc2V0UHJvdG90eXBlT2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZi5qc1wiKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnLmpzXCIpO1xudmFyIGhpZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaGlkZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGUuanNcIik7XG52YXIgcmVkZWZpbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvcmVkZWZpbmUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWRlZmluZS5qc1wiKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qc1wiKTtcbnZhciBJU19QVVJFID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2lzLXB1cmUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzXCIpO1xudmFyIEl0ZXJhdG9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pdGVyYXRvcnMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanNcIik7XG52YXIgSXRlcmF0b3JzQ29yZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlLmpzXCIpO1xuXG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBJdGVyYXRvcnNDb3JlLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBJdGVyYXRvcnNDb3JlLkJVR0dZX1NBRkFSSV9JVEVSQVRPUlM7XG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcbnZhciBFTlRSSUVTID0gJ2VudHJpZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEl0ZXJhYmxlLCBOQU1FLCBJdGVyYXRvckNvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuXG4gIHZhciBnZXRJdGVyYXRpb25NZXRob2QgPSBmdW5jdGlvbiAoS0lORCkge1xuICAgIGlmIChLSU5EID09PSBERUZBVUxUICYmIGRlZmF1bHRJdGVyYXRvcikgcmV0dXJuIGRlZmF1bHRJdGVyYXRvcjtcbiAgICBpZiAoIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgS0lORCBpbiBJdGVyYWJsZVByb3RvdHlwZSkgcmV0dXJuIEl0ZXJhYmxlUHJvdG90eXBlW0tJTkRdO1xuICAgIHN3aXRjaCAoS0lORCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICAgIGNhc2UgRU5UUklFUzogcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzKTsgfTtcbiAgfTtcblxuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IGZhbHNlO1xuICB2YXIgSXRlcmFibGVQcm90b3R5cGUgPSBJdGVyYWJsZS5wcm90b3R5cGU7XG4gIHZhciBuYXRpdmVJdGVyYXRvciA9IEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXVxuICAgIHx8IEl0ZXJhYmxlUHJvdG90eXBlWydAQGl0ZXJhdG9yJ11cbiAgICB8fCBERUZBVUxUICYmIEl0ZXJhYmxlUHJvdG90eXBlW0RFRkFVTFRdO1xuICB2YXIgZGVmYXVsdEl0ZXJhdG9yID0gIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgbmF0aXZlSXRlcmF0b3IgfHwgZ2V0SXRlcmF0aW9uTWV0aG9kKERFRkFVTFQpO1xuICB2YXIgYW55TmF0aXZlSXRlcmF0b3IgPSBOQU1FID09ICdBcnJheScgPyBJdGVyYWJsZVByb3RvdHlwZS5lbnRyaWVzIHx8IG5hdGl2ZUl0ZXJhdG9yIDogbmF0aXZlSXRlcmF0b3I7XG4gIHZhciBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIG1ldGhvZHMsIEtFWTtcblxuICAvLyBmaXggbmF0aXZlXG4gIGlmIChhbnlOYXRpdmVJdGVyYXRvcikge1xuICAgIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGFueU5hdGl2ZUl0ZXJhdG9yLmNhbGwobmV3IEl0ZXJhYmxlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIGlmICghSVNfUFVSRSAmJiBnZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUpICE9PSBJdGVyYXRvclByb3RvdHlwZSkge1xuICAgICAgICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgICBzZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaGlkZShDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCB0cnVlLCB0cnVlKTtcbiAgICAgIGlmIChJU19QVVJFKSBJdGVyYXRvcnNbVE9fU1RSSU5HX1RBR10gPSByZXR1cm5UaGlzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRkFVTFQgPT0gVkFMVUVTICYmIG5hdGl2ZUl0ZXJhdG9yICYmIG5hdGl2ZUl0ZXJhdG9yLm5hbWUgIT09IFZBTFVFUykge1xuICAgIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IHRydWU7XG4gICAgZGVmYXVsdEl0ZXJhdG9yID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmF0aXZlSXRlcmF0b3IuY2FsbCh0aGlzKTsgfTtcbiAgfVxuXG4gIC8vIGRlZmluZSBpdGVyYXRvclxuICBpZiAoKCFJU19QVVJFIHx8IEZPUkNFRCkgJiYgSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JdICE9PSBkZWZhdWx0SXRlcmF0b3IpIHtcbiAgICBoaWRlKEl0ZXJhYmxlUHJvdG90eXBlLCBJVEVSQVRPUiwgZGVmYXVsdEl0ZXJhdG9yKTtcbiAgfVxuICBJdGVyYXRvcnNbTkFNRV0gPSBkZWZhdWx0SXRlcmF0b3I7XG5cbiAgLy8gZXhwb3J0IGFkZGl0aW9uYWwgbWV0aG9kc1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gZGVmYXVsdEl0ZXJhdG9yIDogZ2V0SXRlcmF0aW9uTWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogZ2V0SXRlcmF0aW9uTWV0aG9kKEVOVFJJRVMpXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKEtFWSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoQlVHR1lfU0FGQVJJX0lURVJBVE9SUyB8fCBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgfHwgIShLRVkgaW4gSXRlcmFibGVQcm90b3R5cGUpKSB7XG4gICAgICAgIHJlZGVmaW5lKEl0ZXJhYmxlUHJvdG90eXBlLCBLRVksIG1ldGhvZHNbS0VZXSk7XG4gICAgICB9XG4gICAgfSBlbHNlICQoeyB0YXJnZXQ6IE5BTUUsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIH0sIG1ldGhvZHMpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBmYWlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9mYWlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzXCIpO1xuXG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9nbG9iYWwgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanNcIik7XG52YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaXMtb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzXCIpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBleGlzdCA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGV4aXN0ID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VudW0tYnVnLWtleXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9leHBvcnQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2V4cG9ydC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9nbG9iYWwgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanNcIik7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXCIpLmY7XG52YXIgaGlkZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9oaWRlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZS5qc1wiKTtcbnZhciByZWRlZmluZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9yZWRlZmluZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLmpzXCIpO1xudmFyIHNldEdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9zZXQtZ2xvYmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWdsb2JhbC5qc1wiKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcy5qc1wiKTtcbnZhciBpc0ZvcmNlZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pcy1mb3JjZWQgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1mb3JjZWQuanNcIik7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMubm9UYXJnZXRHZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IHNldEdsb2JhbChUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSAoZ2xvYmFsW1RBUkdFVF0gfHwge30pLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLm5vVGFyZ2V0R2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgaGlkZShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmFpbHMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmFpbHMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi10by1zdHJpbmcuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXRvLXN0cmluZy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHNoYXJlZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9zaGFyZWQgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gc2hhcmVkKCduYXRpdmUtZnVuY3Rpb24tdG8tc3RyaW5nJywgRnVuY3Rpb24udG9TdHJpbmcpO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGNsYXNzb2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvY2xhc3NvZiAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YuanNcIik7XG52YXIgSXRlcmF0b3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy5qc1wiKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qc1wiKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsKSB7dmFyIE8gPSAnb2JqZWN0JztcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09IE8gJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSBPICYmIHdpbmRvdykgfHxcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gTyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09IE8gJiYgZ2xvYmFsKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKHRoaXMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vLi4vd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanNcIikpKVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hhcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxudmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgREVTQ1JJUFRPUlMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZXNjcmlwdG9ycy5qc1wiKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eS5qc1wiKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2h0bWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2dsb2JhbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qc1wiKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgREVTQ1JJUFRPUlMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZXNjcmlwdG9ycy5qc1wiKTtcbnZhciBmYWlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9mYWlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzXCIpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qc1wiKTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgZmFpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZmFpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qc1wiKTtcbnZhciBjbGFzc29mID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanNcIik7XG5cbnZhciBzcGxpdCA9ICcnLnNwbGl0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIHJldHVybiAhT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT0gJ1N0cmluZycgPyBzcGxpdC5jYWxsKGl0LCAnJykgOiBPYmplY3QoaXQpO1xufSA6IE9iamVjdDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTkFUSVZFX1dFQUtfTUFQID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcC5qc1wiKTtcbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZ2xvYmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzXCIpO1xudmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2lzLW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qc1wiKTtcbnZhciBoaWRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2hpZGUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRlLmpzXCIpO1xudmFyIG9iamVjdEhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9oYXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanNcIik7XG52YXIgc2hhcmVkS2V5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXkgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzXCIpO1xudmFyIGhpZGRlbktleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRkZW4ta2V5cy5qc1wiKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVApIHtcbiAgdmFyIHN0b3JlID0gbmV3IFdlYWtNYXAoKTtcbiAgdmFyIHdtZ2V0ID0gc3RvcmUuZ2V0O1xuICB2YXIgd21oYXMgPSBzdG9yZS5oYXM7XG4gIHZhciB3bXNldCA9IHN0b3JlLnNldDtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIHdtc2V0LmNhbGwoc3RvcmUsIGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21nZXQuY2FsbChzdG9yZSwgaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21oYXMuY2FsbChzdG9yZSwgaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBoaWRlKGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgd2VsbEtub3duU3ltYm9sID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanNcIik7XG52YXIgSXRlcmF0b3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy5qc1wiKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvdHlwZVtJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1mb3JjZWQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBmYWlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9mYWlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzXCIpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IHR5cGVvZiBkZXRlY3Rpb24gPT0gJ2Z1bmN0aW9uJyA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtcHVyZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBnZXRQcm90b3R5cGVPZiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZiAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mLmpzXCIpO1xudmFyIGhpZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaGlkZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGUuanNcIik7XG52YXIgaGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2hhcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hhcy5qc1wiKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qc1wiKTtcbnZhciBJU19QVVJFID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2lzLXB1cmUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzXCIpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IGZhbHNlO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbi8vIGAlSXRlcmF0b3JQcm90b3R5cGUlYCBvYmplY3Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtb2JqZWN0XG52YXIgSXRlcmF0b3JQcm90b3R5cGUsIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSwgYXJyYXlJdGVyYXRvcjtcblxuaWYgKFtdLmtleXMpIHtcbiAgYXJyYXlJdGVyYXRvciA9IFtdLmtleXMoKTtcbiAgLy8gU2FmYXJpIDggaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gIGlmICghKCduZXh0JyBpbiBhcnJheUl0ZXJhdG9yKSkgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IHRydWU7XG4gIGVsc2Uge1xuICAgIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGdldFByb3RvdHlwZU9mKGFycmF5SXRlcmF0b3IpKTtcbiAgICBpZiAoUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKSBJdGVyYXRvclByb3RvdHlwZSA9IFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxufVxuXG5pZiAoSXRlcmF0b3JQcm90b3R5cGUgPT0gdW5kZWZpbmVkKSBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxuaWYgKCFJU19QVVJFICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSXRlcmF0b3JQcm90b3R5cGU6IEl0ZXJhdG9yUHJvdG90eXBlLFxuICBCVUdHWV9TQUZBUklfSVRFUkFUT1JTOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTXG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3JzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtc3ltYm9sLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGZhaWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2ZhaWxzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmFpbHMuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICByZXR1cm4gIVN0cmluZyhTeW1ib2woKSk7XG59KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9nbG9iYWwgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanNcIik7XG52YXIgbmF0aXZlRnVuY3Rpb25Ub1N0cmluZyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9mdW5jdGlvbi10by1zdHJpbmcgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi10by1zdHJpbmcuanNcIik7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KG5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmcuY2FsbChXZWFrTWFwKSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvYW4tb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzXCIpO1xudmFyIGRlZmluZVByb3BlcnRpZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzXCIpO1xudmFyIGVudW1CdWdLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzLmpzXCIpO1xudmFyIGhpZGRlbktleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRkZW4ta2V5cy5qc1wiKTtcbnZhciBodG1sID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2h0bWwgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9odG1sLmpzXCIpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50LmpzXCIpO1xudmFyIHNoYXJlZEtleSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9zaGFyZWQta2V5ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLWtleS5qc1wiKTtcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIHNjcmlwdCA9ICdzY3JpcHQnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBqcyA9ICdqYXZhJyArIHNjcmlwdCArICc6JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gU3RyaW5nKGpzKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArIHNjcmlwdCArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy8nICsgc2NyaXB0ICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgREVTQ1JJUFRPUlMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZXNjcmlwdG9ycy5qc1wiKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eS5qc1wiKTtcbnZhciBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9hbi1vYmplY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1vYmplY3QuanNcIik7XG52YXIgb2JqZWN0S2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9vYmplY3Qta2V5cyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaSsrXSwgUHJvcGVydGllc1trZXldKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIERFU0NSSVBUT1JTID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanNcIik7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qc1wiKTtcbnZhciBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9hbi1vYmplY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1vYmplY3QuanNcIik7XG52YXIgdG9QcmltaXRpdmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzXCIpO1xuXG52YXIgbmF0aXZlRGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlRGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBERVNDUklQVE9SUyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9kZXNjcmlwdG9ycyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzXCIpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanNcIik7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcIik7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanNcIik7XG52YXIgdG9QcmltaXRpdmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzXCIpO1xudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9oYXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanNcIik7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qc1wiKTtcblxudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcIik7XG52YXIgZW51bUJ1Z0tleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VudW0tYnVnLWtleXMuanNcIik7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9oYXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanNcIik7XG52YXIgdG9PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvdG8tb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzXCIpO1xudmFyIHNoYXJlZEtleSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9zaGFyZWQta2V5ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLWtleS5qc1wiKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyLmpzXCIpO1xuXG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbm1vZHVsZS5leHBvcnRzID0gQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvdHlwZSA6IG51bGw7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBoYXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaGFzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLmpzXCIpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzXCIpO1xudmFyIGFycmF5SW5jbHVkZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qc1wiKTtcbnZhciBoaWRkZW5LZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanNcIik7XG5cbnZhciBhcnJheUluZGV4T2YgPSBhcnJheUluY2x1ZGVzKGZhbHNlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhcyhoaWRkZW5LZXlzLCBrZXkpICYmIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1wiKTtcbnZhciBlbnVtQnVnS2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qc1wiKTtcblxuLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICFuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgdmFsaWRhdGVTZXRQcm90b3R5cGVPZkFyZ3VtZW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy92YWxpZGF0ZS1zZXQtcHJvdG90eXBlLW9mLWFyZ3VtZW50cyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3ZhbGlkYXRlLXNldC1wcm90b3R5cGUtb2YtYXJndW1lbnRzLmpzXCIpO1xuXG4vLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyBmdW5jdGlvbiAoKSB7XG4gIHZhciBjb3JyZWN0U2V0dGVyID0gZmFsc2U7XG4gIHZhciB0ZXN0ID0ge307XG4gIHZhciBzZXR0ZXI7XG4gIHRyeSB7XG4gICAgc2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0O1xuICAgIHNldHRlci5jYWxsKHRlc3QsIFtdKTtcbiAgICBjb3JyZWN0U2V0dGVyID0gdGVzdCBpbnN0YW5jZW9mIEFycmF5O1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgIHZhbGlkYXRlU2V0UHJvdG90eXBlT2ZBcmd1bWVudHMoTywgcHJvdG8pO1xuICAgIGlmIChjb3JyZWN0U2V0dGVyKSBzZXR0ZXIuY2FsbChPLCBwcm90byk7XG4gICAgZWxzZSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgIHJldHVybiBPO1xuICB9O1xufSgpIDogdW5kZWZpbmVkKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vd24ta2V5cy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vd24ta2V5cy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2dsb2JhbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qc1wiKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMuanNcIik7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzLmpzXCIpO1xudmFyIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2FuLW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qc1wiKTtcblxudmFyIFJlZmxlY3QgPSBnbG9iYWwuUmVmbGVjdDtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBSZWZsZWN0ICYmIFJlZmxlY3Qub3duS2V5cyB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGF0aC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3BhdGguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9nbG9iYWwgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanNcIik7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVkZWZpbmUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVkZWZpbmUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9nbG9iYWwgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanNcIik7XG52YXIgc2hhcmVkID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3NoYXJlZCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC5qc1wiKTtcbnZhciBoaWRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2hpZGUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRlLmpzXCIpO1xudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9oYXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanNcIik7XG52YXIgc2V0R2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtZ2xvYmFsLmpzXCIpO1xudmFyIG5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdG8tc3RyaW5nICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdG8tc3RyaW5nLmpzXCIpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qc1wiKTtcblxudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBURU1QTEFURSA9IFN0cmluZyhuYXRpdmVGdW5jdGlvblRvU3RyaW5nKS5zcGxpdCgndG9TdHJpbmcnKTtcblxuc2hhcmVkKCdpbnNwZWN0U291cmNlJywgZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBuYXRpdmVGdW5jdGlvblRvU3RyaW5nLmNhbGwoaXQpO1xufSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciB1bnNhZmUgPSBvcHRpb25zID8gISFvcHRpb25zLnVuc2FmZSA6IGZhbHNlO1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5lbnVtZXJhYmxlIDogZmFsc2U7XG4gIHZhciBub1RhcmdldEdldCA9IG9wdGlvbnMgPyAhIW9wdGlvbnMubm9UYXJnZXRHZXQgOiBmYWxzZTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgJiYgIWhhcyh2YWx1ZSwgJ25hbWUnKSkgaGlkZSh2YWx1ZSwgJ25hbWUnLCBrZXkpO1xuICAgIGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKS5zb3VyY2UgPSBURU1QTEFURS5qb2luKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyBrZXkgOiAnJyk7XG4gIH1cbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2Ugc2V0R2xvYmFsKGtleSwgdmFsdWUpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmICghdW5zYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgfSBlbHNlIGlmICghbm9UYXJnZXRHZXQgJiYgT1trZXldKSB7XG4gICAgc2ltcGxlID0gdHJ1ZTtcbiAgfVxuICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgZWxzZSBoaWRlKE8sIGtleSwgdmFsdWUpO1xuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBuYXRpdmVGdW5jdGlvblRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWdsb2JhbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1nbG9iYWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2dsb2JhbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qc1wiKTtcbnZhciBoaWRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2hpZGUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRlLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgaGlkZShnbG9iYWwsIGtleSwgdmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanNcIikuZjtcbnZhciBoYXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaGFzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLmpzXCIpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzXCIpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRBRywgU1RBVElDKSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gU1RBVElDID8gaXQgOiBpdC5wcm90b3R5cGUsIFRPX1NUUklOR19UQUcpKSB7XG4gICAgZGVmaW5lUHJvcGVydHkoaXQsIFRPX1NUUklOR19UQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogVEFHIH0pO1xuICB9XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC1rZXkuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHNoYXJlZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9zaGFyZWQgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQuanNcIik7XG52YXIgdWlkID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3VpZCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qc1wiKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZ2xvYmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzXCIpO1xudmFyIHNldEdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9zZXQtZ2xvYmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWdsb2JhbC5qc1wiKTtcbnZhciBJU19QVVJFID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2lzLXB1cmUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzXCIpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCBzZXRHbG9iYWwoU0hBUkVELCB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiAnMy4xLjMnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTkgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctYXQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1hdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHRvSW50ZWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy90by1pbnRlZ2VyICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci5qc1wiKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qc1wiKTtcblxuLy8gQ09OVkVSVF9UT19TVFJJTkc6IHRydWUgIC0+IFN0cmluZyNhdFxuLy8gQ09OVkVSVF9UT19TVFJJTkc6IGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGhhdCwgcG9zLCBDT05WRVJUX1RPX1NUUklORykge1xuICB2YXIgUyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoYXQpKTtcbiAgdmFyIHBvc2l0aW9uID0gdG9JbnRlZ2VyKHBvcyk7XG4gIHZhciBzaXplID0gUy5sZW5ndGg7XG4gIHZhciBmaXJzdCwgc2Vjb25kO1xuICBpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHNpemUpIHJldHVybiBDT05WRVJUX1RPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICBmaXJzdCA9IFMuY2hhckNvZGVBdChwb3NpdGlvbik7XG4gIHJldHVybiBmaXJzdCA8IDB4RDgwMCB8fCBmaXJzdCA+IDB4REJGRiB8fCBwb3NpdGlvbiArIDEgPT09IHNpemVcbiAgICB8fCAoc2Vjb25kID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSkpIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRlxuICAgICAgPyBDT05WRVJUX1RPX1NUUklORyA/IFMuY2hhckF0KHBvc2l0aW9uKSA6IGZpcnN0XG4gICAgICA6IENPTlZFUlRfVE9fU1RSSU5HID8gUy5zbGljZShwb3NpdGlvbiwgcG9zaXRpb24gKyAyKSA6IChmaXJzdCAtIDB4RDgwMCA8PCAxMCkgKyAoc2Vjb25kIC0gMHhEQzAwKSArIDB4MTAwMDA7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciB0b0ludGVnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvdG8taW50ZWdlciAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWludGVnZXIuanNcIik7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihsZW5ndGgsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0LmpzXCIpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWludGVnZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbnRlZ2VyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgVG9JbnRlZ2VyYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvaW50ZWdlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzTmFOKGFyZ3VtZW50ID0gK2FyZ3VtZW50KSA/IDAgOiAoYXJndW1lbnQgPiAwID8gZmxvb3IgOiBjZWlsKShhcmd1bWVudCk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWxlbmd0aC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgdG9JbnRlZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3RvLWludGVnZXIgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbnRlZ2VyLmpzXCIpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGFyZ3VtZW50ID4gMCA/IG1pbih0b0ludGVnZXIoYXJndW1lbnQpLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1vYmplY3QuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qc1wiKTtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1wcmltaXRpdmUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pcy1vYmplY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanNcIik7XG5cbi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdWlkLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHBvc3RmaXgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3ZhbGlkYXRlLXNldC1wcm90b3R5cGUtb2YtYXJndW1lbnRzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3ZhbGlkYXRlLXNldC1wcm90b3R5cGUtb2YtYXJndW1lbnRzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9pcy1vYmplY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanNcIik7XG52YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvYW4tb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBzZXQgXCIgKyBTdHJpbmcocHJvdG8pICsgJyBhcyBhIHByb3RvdHlwZScpO1xuICB9XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZ2xvYmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzXCIpO1xudmFyIHNoYXJlZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9zaGFyZWQgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQuanNcIik7XG52YXIgdWlkID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL3VpZCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qc1wiKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtc3ltYm9sLmpzXCIpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBzdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdXG4gICAgfHwgKE5BVElWRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZyb20uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZyb20uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyICQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvZXhwb3J0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzXCIpO1xudmFyIGZyb20gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvYXJyYXktZnJvbSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZyb20uanNcIik7XG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbiAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbi5qc1wiKTtcblxudmFyIElOQ09SUkVDVF9JVEVSQVRJT04gPSAhY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuICBBcnJheS5mcm9tKGl0ZXJhYmxlKTtcbn0pO1xuXG4vLyBgQXJyYXkuZnJvbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IElOQ09SUkVDVF9JVEVSQVRJT04gfSwge1xuICBmcm9tOiBmcm9tXG59KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY29kZVBvaW50QXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvc3RyaW5nLWF0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLWF0LmpzXCIpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qc1wiKTtcbnZhciBkZWZpbmVJdGVyYXRvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3IgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3IuanNcIik7XG5cbnZhciBTVFJJTkdfSVRFUkFUT1IgPSAnU3RyaW5nIEl0ZXJhdG9yJztcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKFNUUklOR19JVEVSQVRPUik7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUtQEBpdGVyYXRvclxuZGVmaW5lSXRlcmF0b3IoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgIHR5cGU6IFNUUklOR19JVEVSQVRPUixcbiAgICBzdHJpbmc6IFN0cmluZyhpdGVyYXRlZCksXG4gICAgaW5kZXg6IDBcbiAgfSk7XG4vLyBgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLSVzdHJpbmdpdGVyYXRvcnByb3RvdHlwZSUubmV4dFxufSwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgdmFyIHN0cmluZyA9IHN0YXRlLnN0cmluZztcbiAgdmFyIGluZGV4ID0gc3RhdGUuaW5kZXg7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IHN0cmluZy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSBjb2RlUG9pbnRBdChzdHJpbmcsIGluZGV4LCB0cnVlKTtcbiAgc3RhdGUuaW5kZXggKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2ggKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2RlZmF1bHQtYXR0cnMuanNvblwiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZGVmYXVsdC1hdHRycy5qc29uICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiB4bWxucywgd2lkdGgsIGhlaWdodCwgdmlld0JveCwgZmlsbCwgc3Ryb2tlLCBzdHJva2Utd2lkdGgsIHN0cm9rZS1saW5lY2FwLCBzdHJva2UtbGluZWpvaW4sIGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxubW9kdWxlLmV4cG9ydHMgPSB7XCJ4bWxuc1wiOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjoyNCxcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwiZmlsbFwiOlwibm9uZVwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIixcInN0cm9rZS13aWR0aFwiOjIsXCJzdHJva2UtbGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZS1saW5lam9pblwiOlwicm91bmRcIn07XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2ljb24uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pY29uLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9kZWR1cGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjbGFzc25hbWVzL2RlZHVwZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvZGVkdXBlLmpzXCIpO1xuXG52YXIgX2RlZHVwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWR1cGUpO1xuXG52YXIgX2RlZmF1bHRBdHRycyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZGVmYXVsdC1hdHRycy5qc29uICovIFwiLi9zcmMvZGVmYXVsdC1hdHRycy5qc29uXCIpO1xuXG52YXIgX2RlZmF1bHRBdHRyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZhdWx0QXR0cnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgSWNvbiA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSWNvbihuYW1lLCBjb250ZW50cykge1xuICAgIHZhciB0YWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBbXTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJY29uKTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jb250ZW50cyA9IGNvbnRlbnRzO1xuICAgIHRoaXMudGFncyA9IHRhZ3M7XG4gICAgdGhpcy5hdHRycyA9IF9leHRlbmRzKHt9LCBfZGVmYXVsdEF0dHJzMi5kZWZhdWx0LCB7IGNsYXNzOiAnZmVhdGhlciBmZWF0aGVyLScgKyBuYW1lIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBTVkcgc3RyaW5nLlxuICAgKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoSWNvbiwgW3tcbiAgICBrZXk6ICd0b1N2ZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3ZnKCkge1xuICAgICAgdmFyIGF0dHJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgdmFyIGNvbWJpbmVkQXR0cnMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5hdHRycywgYXR0cnMsIHsgY2xhc3M6ICgwLCBfZGVkdXBlMi5kZWZhdWx0KSh0aGlzLmF0dHJzLmNsYXNzLCBhdHRycy5jbGFzcykgfSk7XG5cbiAgICAgIHJldHVybiAnPHN2ZyAnICsgYXR0cnNUb1N0cmluZyhjb21iaW5lZEF0dHJzKSArICc+JyArIHRoaXMuY29udGVudHMgKyAnPC9zdmc+JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGFuIGBJY29uYC5cbiAgICAgKlxuICAgICAqIEFkZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LiBJZiBvbGQgY29kZSBleHBlY3RzIGBmZWF0aGVyLmljb25zLjxuYW1lPmBcbiAgICAgKiB0byBiZSBhIHN0cmluZywgYHRvU3RyaW5nKClgIHdpbGwgZ2V0IGltcGxpY2l0bHkgY2FsbGVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAndG9TdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRlbnRzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJY29uO1xufSgpO1xuXG4vKipcbiAqIENvbnZlcnQgYXR0cmlidXRlcyBvYmplY3QgdG8gc3RyaW5nIG9mIEhUTUwgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGF0dHJzVG9TdHJpbmcoYXR0cnMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBrZXkgKyAnPVwiJyArIGF0dHJzW2tleV0gKyAnXCInO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEljb247XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2ljb25zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2ljb25zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaWNvbiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaWNvbiAqLyBcIi4vc3JjL2ljb24uanNcIik7XG5cbnZhciBfaWNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pY29uKTtcblxudmFyIF9pY29ucyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2Rpc3QvaWNvbnMuanNvbiAqLyBcIi4vZGlzdC9pY29ucy5qc29uXCIpO1xuXG52YXIgX2ljb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ljb25zKTtcblxudmFyIF90YWdzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90YWdzLmpzb24gKi8gXCIuL3NyYy90YWdzLmpzb25cIik7XG5cbnZhciBfdGFnczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90YWdzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gT2JqZWN0LmtleXMoX2ljb25zMi5kZWZhdWx0KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gbmV3IF9pY29uMi5kZWZhdWx0KGtleSwgX2ljb25zMi5kZWZhdWx0W2tleV0sIF90YWdzMi5kZWZhdWx0W2tleV0pO1xufSkucmVkdWNlKGZ1bmN0aW9uIChvYmplY3QsIGljb24pIHtcbiAgb2JqZWN0W2ljb24ubmFtZV0gPSBpY29uO1xuICByZXR1cm4gb2JqZWN0O1xufSwge30pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX2ljb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9pY29ucyAqLyBcIi4vc3JjL2ljb25zLmpzXCIpO1xuXG52YXIgX2ljb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ljb25zKTtcblxudmFyIF90b1N2ZyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdG8tc3ZnICovIFwiLi9zcmMvdG8tc3ZnLmpzXCIpO1xuXG52YXIgX3RvU3ZnMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvU3ZnKTtcblxudmFyIF9yZXBsYWNlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9yZXBsYWNlICovIFwiLi9zcmMvcmVwbGFjZS5qc1wiKTtcblxudmFyIF9yZXBsYWNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlcGxhY2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgaWNvbnM6IF9pY29uczIuZGVmYXVsdCwgdG9Tdmc6IF90b1N2ZzIuZGVmYXVsdCwgcmVwbGFjZTogX3JlcGxhY2UyLmRlZmF1bHQgfTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcmVwbGFjZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3JlcGxhY2UuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyAvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuXG52YXIgX2RlZHVwZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNsYXNzbmFtZXMvZGVkdXBlICovIFwiLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9kZWR1cGUuanNcIik7XG5cbnZhciBfZGVkdXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZHVwZSk7XG5cbnZhciBfaWNvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2ljb25zICovIFwiLi9zcmMvaWNvbnMuanNcIik7XG5cbnZhciBfaWNvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaWNvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJlcGxhY2UgYWxsIEhUTUwgZWxlbWVudHMgdGhhdCBoYXZlIGEgYGRhdGEtZmVhdGhlcmAgYXR0cmlidXRlIHdpdGggU1ZHIG1hcmt1cFxuICogY29ycmVzcG9uZGluZyB0byB0aGUgZWxlbWVudCdzIGBkYXRhLWZlYXRoZXJgIGF0dHJpYnV0ZSB2YWx1ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyc1xuICovXG5mdW5jdGlvbiByZXBsYWNlKCkge1xuICB2YXIgYXR0cnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgZmVhdGhlci5yZXBsYWNlKClgIG9ubHkgd29ya3MgaW4gYSBicm93c2VyIGVudmlyb25tZW50LicpO1xuICB9XG5cbiAgdmFyIGVsZW1lbnRzVG9SZXBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmVhdGhlcl0nKTtcblxuICBBcnJheS5mcm9tKGVsZW1lbnRzVG9SZXBsYWNlKS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIHJlcGxhY2VFbGVtZW50KGVsZW1lbnQsIGF0dHJzKTtcbiAgfSk7XG59XG5cbi8qKlxuICogUmVwbGFjZSBhIHNpbmdsZSBIVE1MIGVsZW1lbnQgd2l0aCBTVkcgbWFya3VwXG4gKiBjb3JyZXNwb25kaW5nIHRvIHRoZSBlbGVtZW50J3MgYGRhdGEtZmVhdGhlcmAgYXR0cmlidXRlIHZhbHVlLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzXG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2VFbGVtZW50KGVsZW1lbnQpIHtcbiAgdmFyIGF0dHJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICB2YXIgZWxlbWVudEF0dHJzID0gZ2V0QXR0cnMoZWxlbWVudCk7XG4gIHZhciBuYW1lID0gZWxlbWVudEF0dHJzWydkYXRhLWZlYXRoZXInXTtcbiAgZGVsZXRlIGVsZW1lbnRBdHRyc1snZGF0YS1mZWF0aGVyJ107XG5cbiAgdmFyIHN2Z1N0cmluZyA9IF9pY29uczIuZGVmYXVsdFtuYW1lXS50b1N2ZyhfZXh0ZW5kcyh7fSwgYXR0cnMsIGVsZW1lbnRBdHRycywgeyBjbGFzczogKDAsIF9kZWR1cGUyLmRlZmF1bHQpKGF0dHJzLmNsYXNzLCBlbGVtZW50QXR0cnMuY2xhc3MpIH0pKTtcbiAgdmFyIHN2Z0RvY3VtZW50ID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzdmdTdHJpbmcsICdpbWFnZS9zdmcreG1sJyk7XG4gIHZhciBzdmdFbGVtZW50ID0gc3ZnRG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnJyk7XG5cbiAgZWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChzdmdFbGVtZW50LCBlbGVtZW50KTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGF0dHJpYnV0ZXMgb2YgYW4gSFRNTCBlbGVtZW50LlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZ2V0QXR0cnMoZWxlbWVudCkge1xuICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmF0dHJpYnV0ZXMpLnJlZHVjZShmdW5jdGlvbiAoYXR0cnMsIGF0dHIpIHtcbiAgICBhdHRyc1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICByZXR1cm4gYXR0cnM7XG4gIH0sIHt9KTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gcmVwbGFjZTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdGFncy5qc29uXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy90YWdzLmpzb24gKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGFjdGl2aXR5LCBhaXJwbGF5LCBhbGVydC1jaXJjbGUsIGFsZXJ0LW9jdGFnb24sIGFsZXJ0LXRyaWFuZ2xlLCBhbGlnbi1jZW50ZXIsIGFsaWduLWp1c3RpZnksIGFsaWduLWxlZnQsIGFsaWduLXJpZ2h0LCBhbmNob3IsIGFyY2hpdmUsIGF0LXNpZ24sIGF3YXJkLCBhcGVydHVyZSwgYmFyLWNoYXJ0LCBiYXItY2hhcnQtMiwgYmF0dGVyeSwgYmF0dGVyeS1jaGFyZ2luZywgYmVsbCwgYmVsbC1vZmYsIGJsdWV0b290aCwgYm9vay1vcGVuLCBib29rLCBib29rbWFyaywgYm94LCBicmllZmNhc2UsIGNhbGVuZGFyLCBjYW1lcmEsIGNhc3QsIGNpcmNsZSwgY2xpcGJvYXJkLCBjbG9jaywgY2xvdWQtZHJpenpsZSwgY2xvdWQtbGlnaHRuaW5nLCBjbG91ZC1yYWluLCBjbG91ZC1zbm93LCBjbG91ZCwgY29kZXBlbiwgY29kZXNhbmRib3gsIGNvZGUsIGNvZmZlZSwgY29sdW1ucywgY29tbWFuZCwgY29tcGFzcywgY29weSwgY29ybmVyLWRvd24tbGVmdCwgY29ybmVyLWRvd24tcmlnaHQsIGNvcm5lci1sZWZ0LWRvd24sIGNvcm5lci1sZWZ0LXVwLCBjb3JuZXItcmlnaHQtZG93biwgY29ybmVyLXJpZ2h0LXVwLCBjb3JuZXItdXAtbGVmdCwgY29ybmVyLXVwLXJpZ2h0LCBjcHUsIGNyZWRpdC1jYXJkLCBjcm9wLCBjcm9zc2hhaXIsIGRhdGFiYXNlLCBkZWxldGUsIGRpc2MsIGRvbGxhci1zaWduLCBkcm9wbGV0LCBlZGl0LCBlZGl0LTIsIGVkaXQtMywgZXllLCBleWUtb2ZmLCBleHRlcm5hbC1saW5rLCBmYWNlYm9vaywgZmFzdC1mb3J3YXJkLCBmaWdtYSwgZmlsZS1taW51cywgZmlsZS1wbHVzLCBmaWxlLXRleHQsIGZpbG0sIGZpbHRlciwgZmxhZywgZm9sZGVyLW1pbnVzLCBmb2xkZXItcGx1cywgZm9sZGVyLCBmcmFtZXIsIGZyb3duLCBnaWZ0LCBnaXQtYnJhbmNoLCBnaXQtY29tbWl0LCBnaXQtbWVyZ2UsIGdpdC1wdWxsLXJlcXVlc3QsIGdpdGh1YiwgZ2l0bGFiLCBnbG9iZSwgaGFyZC1kcml2ZSwgaGFzaCwgaGVhZHBob25lcywgaGVhcnQsIGhlbHAtY2lyY2xlLCBoZXhhZ29uLCBob21lLCBpbWFnZSwgaW5ib3gsIGluc3RhZ3JhbSwga2V5LCBsYXllcnMsIGxheW91dCwgbGlmZS1ib3V5LCBsaW5rLCBsaW5rLTIsIGxpbmtlZGluLCBsaXN0LCBsb2NrLCBsb2ctaW4sIGxvZy1vdXQsIG1haWwsIG1hcC1waW4sIG1hcCwgbWF4aW1pemUsIG1heGltaXplLTIsIG1laCwgbWVudSwgbWVzc2FnZS1jaXJjbGUsIG1lc3NhZ2Utc3F1YXJlLCBtaWMtb2ZmLCBtaWMsIG1pbmltaXplLCBtaW5pbWl6ZS0yLCBtaW51cywgbW9uaXRvciwgbW9vbiwgbW9yZS1ob3Jpem9udGFsLCBtb3JlLXZlcnRpY2FsLCBtb3VzZS1wb2ludGVyLCBtb3ZlLCBtdXNpYywgbmF2aWdhdGlvbiwgbmF2aWdhdGlvbi0yLCBvY3RhZ29uLCBwYWNrYWdlLCBwYXBlcmNsaXAsIHBhdXNlLCBwYXVzZS1jaXJjbGUsIHBlbi10b29sLCBwZXJjZW50LCBwaG9uZS1jYWxsLCBwaG9uZS1mb3J3YXJkZWQsIHBob25lLWluY29taW5nLCBwaG9uZS1taXNzZWQsIHBob25lLW9mZiwgcGhvbmUtb3V0Z29pbmcsIHBob25lLCBwbGF5LCBwaWUtY2hhcnQsIHBsYXktY2lyY2xlLCBwbHVzLCBwbHVzLWNpcmNsZSwgcGx1cy1zcXVhcmUsIHBvY2tldCwgcG93ZXIsIHByaW50ZXIsIHJhZGlvLCByZWZyZXNoLWN3LCByZWZyZXNoLWNjdywgcmVwZWF0LCByZXdpbmQsIHJvdGF0ZS1jY3csIHJvdGF0ZS1jdywgcnNzLCBzYXZlLCBzY2lzc29ycywgc2VhcmNoLCBzZW5kLCBzZXR0aW5ncywgc2hhcmUtMiwgc2hpZWxkLCBzaGllbGQtb2ZmLCBzaG9wcGluZy1iYWcsIHNob3BwaW5nLWNhcnQsIHNodWZmbGUsIHNraXAtYmFjaywgc2tpcC1mb3J3YXJkLCBzbGFjaywgc2xhc2gsIHNsaWRlcnMsIHNtYXJ0cGhvbmUsIHNtaWxlLCBzcGVha2VyLCBzdGFyLCBzdG9wLWNpcmNsZSwgc3VuLCBzdW5yaXNlLCBzdW5zZXQsIHRhYmxldCwgdGFnLCB0YXJnZXQsIHRlcm1pbmFsLCB0aGVybW9tZXRlciwgdGh1bWJzLWRvd24sIHRodW1icy11cCwgdG9nZ2xlLWxlZnQsIHRvZ2dsZS1yaWdodCwgdG9vbCwgdHJhc2gsIHRyYXNoLTIsIHRyaWFuZ2xlLCB0cnVjaywgdHYsIHR3aXRjaCwgdHdpdHRlciwgdHlwZSwgdW1icmVsbGEsIHVubG9jaywgdXNlci1jaGVjaywgdXNlci1taW51cywgdXNlci1wbHVzLCB1c2VyLXgsIHVzZXIsIHVzZXJzLCB2aWRlby1vZmYsIHZpZGVvLCB2b2ljZW1haWwsIHZvbHVtZSwgdm9sdW1lLTEsIHZvbHVtZS0yLCB2b2x1bWUteCwgd2F0Y2gsIHdpZmktb2ZmLCB3aWZpLCB3aW5kLCB4LWNpcmNsZSwgeC1vY3RhZ29uLCB4LXNxdWFyZSwgeCwgeW91dHViZSwgemFwLW9mZiwgemFwLCB6b29tLWluLCB6b29tLW91dCwgZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcImFjdGl2aXR5XCI6W1wicHVsc2VcIixcImhlYWx0aFwiLFwiYWN0aW9uXCIsXCJtb3Rpb25cIl0sXCJhaXJwbGF5XCI6W1wic3RyZWFtXCIsXCJjYXN0XCIsXCJtaXJyb3JpbmdcIl0sXCJhbGVydC1jaXJjbGVcIjpbXCJ3YXJuaW5nXCIsXCJhbGVydFwiLFwiZGFuZ2VyXCJdLFwiYWxlcnQtb2N0YWdvblwiOltcIndhcm5pbmdcIixcImFsZXJ0XCIsXCJkYW5nZXJcIl0sXCJhbGVydC10cmlhbmdsZVwiOltcIndhcm5pbmdcIixcImFsZXJ0XCIsXCJkYW5nZXJcIl0sXCJhbGlnbi1jZW50ZXJcIjpbXCJ0ZXh0IGFsaWdubWVudFwiLFwiY2VudGVyXCJdLFwiYWxpZ24tanVzdGlmeVwiOltcInRleHQgYWxpZ25tZW50XCIsXCJqdXN0aWZpZWRcIl0sXCJhbGlnbi1sZWZ0XCI6W1widGV4dCBhbGlnbm1lbnRcIixcImxlZnRcIl0sXCJhbGlnbi1yaWdodFwiOltcInRleHQgYWxpZ25tZW50XCIsXCJyaWdodFwiXSxcImFuY2hvclwiOltdLFwiYXJjaGl2ZVwiOltcImluZGV4XCIsXCJib3hcIl0sXCJhdC1zaWduXCI6W1wibWVudGlvblwiLFwiYXRcIixcImVtYWlsXCIsXCJtZXNzYWdlXCJdLFwiYXdhcmRcIjpbXCJhY2hpZXZlbWVudFwiLFwiYmFkZ2VcIl0sXCJhcGVydHVyZVwiOltcImNhbWVyYVwiLFwicGhvdG9cIl0sXCJiYXItY2hhcnRcIjpbXCJzdGF0aXN0aWNzXCIsXCJkaWFncmFtXCIsXCJncmFwaFwiXSxcImJhci1jaGFydC0yXCI6W1wic3RhdGlzdGljc1wiLFwiZGlhZ3JhbVwiLFwiZ3JhcGhcIl0sXCJiYXR0ZXJ5XCI6W1wicG93ZXJcIixcImVsZWN0cmljaXR5XCJdLFwiYmF0dGVyeS1jaGFyZ2luZ1wiOltcInBvd2VyXCIsXCJlbGVjdHJpY2l0eVwiXSxcImJlbGxcIjpbXCJhbGFybVwiLFwibm90aWZpY2F0aW9uXCIsXCJzb3VuZFwiXSxcImJlbGwtb2ZmXCI6W1wiYWxhcm1cIixcIm5vdGlmaWNhdGlvblwiLFwic2lsZW50XCJdLFwiYmx1ZXRvb3RoXCI6W1wid2lyZWxlc3NcIl0sXCJib29rLW9wZW5cIjpbXCJyZWFkXCIsXCJsaWJyYXJ5XCJdLFwiYm9va1wiOltcInJlYWRcIixcImRpY3Rpb25hcnlcIixcImJvb2tsZXRcIixcIm1hZ2F6aW5lXCIsXCJsaWJyYXJ5XCJdLFwiYm9va21hcmtcIjpbXCJyZWFkXCIsXCJjbGlwXCIsXCJtYXJrZXJcIixcInRhZ1wiXSxcImJveFwiOltcImN1YmVcIl0sXCJicmllZmNhc2VcIjpbXCJ3b3JrXCIsXCJiYWdcIixcImJhZ2dhZ2VcIixcImZvbGRlclwiXSxcImNhbGVuZGFyXCI6W1wiZGF0ZVwiXSxcImNhbWVyYVwiOltcInBob3RvXCJdLFwiY2FzdFwiOltcImNocm9tZWNhc3RcIixcImFpcnBsYXlcIl0sXCJjaXJjbGVcIjpbXCJvZmZcIixcInplcm9cIixcInJlY29yZFwiXSxcImNsaXBib2FyZFwiOltcImNvcHlcIl0sXCJjbG9ja1wiOltcInRpbWVcIixcIndhdGNoXCIsXCJhbGFybVwiXSxcImNsb3VkLWRyaXp6bGVcIjpbXCJ3ZWF0aGVyXCIsXCJzaG93ZXJcIl0sXCJjbG91ZC1saWdodG5pbmdcIjpbXCJ3ZWF0aGVyXCIsXCJib2x0XCJdLFwiY2xvdWQtcmFpblwiOltcIndlYXRoZXJcIl0sXCJjbG91ZC1zbm93XCI6W1wid2VhdGhlclwiLFwiYmxpenphcmRcIl0sXCJjbG91ZFwiOltcIndlYXRoZXJcIl0sXCJjb2RlcGVuXCI6W1wibG9nb1wiXSxcImNvZGVzYW5kYm94XCI6W1wibG9nb1wiXSxcImNvZGVcIjpbXCJzb3VyY2VcIixcInByb2dyYW1taW5nXCJdLFwiY29mZmVlXCI6W1wiZHJpbmtcIixcImN1cFwiLFwibXVnXCIsXCJ0ZWFcIixcImNhZmVcIixcImhvdFwiLFwiYmV2ZXJhZ2VcIl0sXCJjb2x1bW5zXCI6W1wibGF5b3V0XCJdLFwiY29tbWFuZFwiOltcImtleWJvYXJkXCIsXCJjbWRcIixcInRlcm1pbmFsXCIsXCJwcm9tcHRcIl0sXCJjb21wYXNzXCI6W1wibmF2aWdhdGlvblwiLFwic2FmYXJpXCIsXCJ0cmF2ZWxcIixcImRpcmVjdGlvblwiXSxcImNvcHlcIjpbXCJjbG9uZVwiLFwiZHVwbGljYXRlXCJdLFwiY29ybmVyLWRvd24tbGVmdFwiOltcImFycm93XCIsXCJyZXR1cm5cIl0sXCJjb3JuZXItZG93bi1yaWdodFwiOltcImFycm93XCJdLFwiY29ybmVyLWxlZnQtZG93blwiOltcImFycm93XCJdLFwiY29ybmVyLWxlZnQtdXBcIjpbXCJhcnJvd1wiXSxcImNvcm5lci1yaWdodC1kb3duXCI6W1wiYXJyb3dcIl0sXCJjb3JuZXItcmlnaHQtdXBcIjpbXCJhcnJvd1wiXSxcImNvcm5lci11cC1sZWZ0XCI6W1wiYXJyb3dcIl0sXCJjb3JuZXItdXAtcmlnaHRcIjpbXCJhcnJvd1wiXSxcImNwdVwiOltcInByb2Nlc3NvclwiLFwidGVjaG5vbG9neVwiXSxcImNyZWRpdC1jYXJkXCI6W1wicHVyY2hhc2VcIixcInBheW1lbnRcIixcImNjXCJdLFwiY3JvcFwiOltcInBob3RvXCIsXCJpbWFnZVwiXSxcImNyb3NzaGFpclwiOltcImFpbVwiLFwidGFyZ2V0XCJdLFwiZGF0YWJhc2VcIjpbXCJzdG9yYWdlXCIsXCJtZW1vcnlcIl0sXCJkZWxldGVcIjpbXCJyZW1vdmVcIl0sXCJkaXNjXCI6W1wiYWxidW1cIixcImNkXCIsXCJkdmRcIixcIm11c2ljXCJdLFwiZG9sbGFyLXNpZ25cIjpbXCJjdXJyZW5jeVwiLFwibW9uZXlcIixcInBheW1lbnRcIl0sXCJkcm9wbGV0XCI6W1wid2F0ZXJcIl0sXCJlZGl0XCI6W1wicGVuY2lsXCIsXCJjaGFuZ2VcIl0sXCJlZGl0LTJcIjpbXCJwZW5jaWxcIixcImNoYW5nZVwiXSxcImVkaXQtM1wiOltcInBlbmNpbFwiLFwiY2hhbmdlXCJdLFwiZXllXCI6W1widmlld1wiLFwid2F0Y2hcIl0sXCJleWUtb2ZmXCI6W1widmlld1wiLFwid2F0Y2hcIixcImhpZGVcIixcImhpZGRlblwiXSxcImV4dGVybmFsLWxpbmtcIjpbXCJvdXRib3VuZFwiXSxcImZhY2Vib29rXCI6W1wibG9nb1wiLFwic29jaWFsXCJdLFwiZmFzdC1mb3J3YXJkXCI6W1wibXVzaWNcIl0sXCJmaWdtYVwiOltcImxvZ29cIixcImRlc2lnblwiLFwidG9vbFwiXSxcImZpbGUtbWludXNcIjpbXCJkZWxldGVcIixcInJlbW92ZVwiLFwiZXJhc2VcIl0sXCJmaWxlLXBsdXNcIjpbXCJhZGRcIixcImNyZWF0ZVwiLFwibmV3XCJdLFwiZmlsZS10ZXh0XCI6W1wiZGF0YVwiLFwidHh0XCIsXCJwZGZcIl0sXCJmaWxtXCI6W1wibW92aWVcIixcInZpZGVvXCJdLFwiZmlsdGVyXCI6W1wiZnVubmVsXCIsXCJob3BwZXJcIl0sXCJmbGFnXCI6W1wicmVwb3J0XCJdLFwiZm9sZGVyLW1pbnVzXCI6W1wiZGlyZWN0b3J5XCJdLFwiZm9sZGVyLXBsdXNcIjpbXCJkaXJlY3RvcnlcIl0sXCJmb2xkZXJcIjpbXCJkaXJlY3RvcnlcIl0sXCJmcmFtZXJcIjpbXCJsb2dvXCIsXCJkZXNpZ25cIixcInRvb2xcIl0sXCJmcm93blwiOltcImVtb2ppXCIsXCJmYWNlXCIsXCJiYWRcIixcInNhZFwiLFwiZW1vdGlvblwiXSxcImdpZnRcIjpbXCJwcmVzZW50XCIsXCJib3hcIixcImJpcnRoZGF5XCIsXCJwYXJ0eVwiXSxcImdpdC1icmFuY2hcIjpbXCJjb2RlXCIsXCJ2ZXJzaW9uIGNvbnRyb2xcIl0sXCJnaXQtY29tbWl0XCI6W1wiY29kZVwiLFwidmVyc2lvbiBjb250cm9sXCJdLFwiZ2l0LW1lcmdlXCI6W1wiY29kZVwiLFwidmVyc2lvbiBjb250cm9sXCJdLFwiZ2l0LXB1bGwtcmVxdWVzdFwiOltcImNvZGVcIixcInZlcnNpb24gY29udHJvbFwiXSxcImdpdGh1YlwiOltcImxvZ29cIixcInZlcnNpb24gY29udHJvbFwiXSxcImdpdGxhYlwiOltcImxvZ29cIixcInZlcnNpb24gY29udHJvbFwiXSxcImdsb2JlXCI6W1wid29ybGRcIixcImJyb3dzZXJcIixcImxhbmd1YWdlXCIsXCJ0cmFuc2xhdGVcIl0sXCJoYXJkLWRyaXZlXCI6W1wiY29tcHV0ZXJcIixcInNlcnZlclwiLFwibWVtb3J5XCIsXCJkYXRhXCJdLFwiaGFzaFwiOltcImhhc2h0YWdcIixcIm51bWJlclwiLFwicG91bmRcIl0sXCJoZWFkcGhvbmVzXCI6W1wibXVzaWNcIixcImF1ZGlvXCIsXCJzb3VuZFwiXSxcImhlYXJ0XCI6W1wibGlrZVwiLFwibG92ZVwiLFwiZW1vdGlvblwiXSxcImhlbHAtY2lyY2xlXCI6W1wicXVlc3Rpb24gbWFya1wiXSxcImhleGFnb25cIjpbXCJzaGFwZVwiLFwibm9kZS5qc1wiLFwibG9nb1wiXSxcImhvbWVcIjpbXCJob3VzZVwiLFwibGl2aW5nXCJdLFwiaW1hZ2VcIjpbXCJwaWN0dXJlXCJdLFwiaW5ib3hcIjpbXCJlbWFpbFwiXSxcImluc3RhZ3JhbVwiOltcImxvZ29cIixcImNhbWVyYVwiXSxcImtleVwiOltcInBhc3N3b3JkXCIsXCJsb2dpblwiLFwiYXV0aGVudGljYXRpb25cIixcInNlY3VyZVwiXSxcImxheWVyc1wiOltcInN0YWNrXCJdLFwibGF5b3V0XCI6W1wid2luZG93XCIsXCJ3ZWJwYWdlXCJdLFwibGlmZS1ib3V5XCI6W1wiaGVscFwiLFwibGlmZSByaW5nXCIsXCJzdXBwb3J0XCJdLFwibGlua1wiOltcImNoYWluXCIsXCJ1cmxcIl0sXCJsaW5rLTJcIjpbXCJjaGFpblwiLFwidXJsXCJdLFwibGlua2VkaW5cIjpbXCJsb2dvXCIsXCJzb2NpYWwgbWVkaWFcIl0sXCJsaXN0XCI6W1wib3B0aW9uc1wiXSxcImxvY2tcIjpbXCJzZWN1cml0eVwiLFwicGFzc3dvcmRcIixcInNlY3VyZVwiXSxcImxvZy1pblwiOltcInNpZ24gaW5cIixcImFycm93XCIsXCJlbnRlclwiXSxcImxvZy1vdXRcIjpbXCJzaWduIG91dFwiLFwiYXJyb3dcIixcImV4aXRcIl0sXCJtYWlsXCI6W1wiZW1haWxcIixcIm1lc3NhZ2VcIl0sXCJtYXAtcGluXCI6W1wibG9jYXRpb25cIixcIm5hdmlnYXRpb25cIixcInRyYXZlbFwiLFwibWFya2VyXCJdLFwibWFwXCI6W1wibG9jYXRpb25cIixcIm5hdmlnYXRpb25cIixcInRyYXZlbFwiXSxcIm1heGltaXplXCI6W1wiZnVsbHNjcmVlblwiXSxcIm1heGltaXplLTJcIjpbXCJmdWxsc2NyZWVuXCIsXCJhcnJvd3NcIixcImV4cGFuZFwiXSxcIm1laFwiOltcImVtb2ppXCIsXCJmYWNlXCIsXCJuZXV0cmFsXCIsXCJlbW90aW9uXCJdLFwibWVudVwiOltcImJhcnNcIixcIm5hdmlnYXRpb25cIixcImhhbWJ1cmdlclwiXSxcIm1lc3NhZ2UtY2lyY2xlXCI6W1wiY29tbWVudFwiLFwiY2hhdFwiXSxcIm1lc3NhZ2Utc3F1YXJlXCI6W1wiY29tbWVudFwiLFwiY2hhdFwiXSxcIm1pYy1vZmZcIjpbXCJyZWNvcmRcIixcInNvdW5kXCIsXCJtdXRlXCJdLFwibWljXCI6W1wicmVjb3JkXCIsXCJzb3VuZFwiLFwibGlzdGVuXCJdLFwibWluaW1pemVcIjpbXCJleGl0IGZ1bGxzY3JlZW5cIixcImNsb3NlXCJdLFwibWluaW1pemUtMlwiOltcImV4aXQgZnVsbHNjcmVlblwiLFwiYXJyb3dzXCIsXCJjbG9zZVwiXSxcIm1pbnVzXCI6W1wic3VidHJhY3RcIl0sXCJtb25pdG9yXCI6W1widHZcIixcInNjcmVlblwiLFwiZGlzcGxheVwiXSxcIm1vb25cIjpbXCJkYXJrXCIsXCJuaWdodFwiXSxcIm1vcmUtaG9yaXpvbnRhbFwiOltcImVsbGlwc2lzXCJdLFwibW9yZS12ZXJ0aWNhbFwiOltcImVsbGlwc2lzXCJdLFwibW91c2UtcG9pbnRlclwiOltcImFycm93XCIsXCJjdXJzb3JcIl0sXCJtb3ZlXCI6W1wiYXJyb3dzXCJdLFwibXVzaWNcIjpbXCJub3RlXCJdLFwibmF2aWdhdGlvblwiOltcImxvY2F0aW9uXCIsXCJ0cmF2ZWxcIl0sXCJuYXZpZ2F0aW9uLTJcIjpbXCJsb2NhdGlvblwiLFwidHJhdmVsXCJdLFwib2N0YWdvblwiOltcInN0b3BcIl0sXCJwYWNrYWdlXCI6W1wiYm94XCIsXCJjb250YWluZXJcIl0sXCJwYXBlcmNsaXBcIjpbXCJhdHRhY2htZW50XCJdLFwicGF1c2VcIjpbXCJtdXNpY1wiLFwic3RvcFwiXSxcInBhdXNlLWNpcmNsZVwiOltcIm11c2ljXCIsXCJhdWRpb1wiLFwic3RvcFwiXSxcInBlbi10b29sXCI6W1widmVjdG9yXCIsXCJkcmF3aW5nXCJdLFwicGVyY2VudFwiOltcImRpc2NvdW50XCJdLFwicGhvbmUtY2FsbFwiOltcInJpbmdcIl0sXCJwaG9uZS1mb3J3YXJkZWRcIjpbXCJjYWxsXCJdLFwicGhvbmUtaW5jb21pbmdcIjpbXCJjYWxsXCJdLFwicGhvbmUtbWlzc2VkXCI6W1wiY2FsbFwiXSxcInBob25lLW9mZlwiOltcImNhbGxcIixcIm11dGVcIl0sXCJwaG9uZS1vdXRnb2luZ1wiOltcImNhbGxcIl0sXCJwaG9uZVwiOltcImNhbGxcIl0sXCJwbGF5XCI6W1wibXVzaWNcIixcInN0YXJ0XCJdLFwicGllLWNoYXJ0XCI6W1wic3RhdGlzdGljc1wiLFwiZGlhZ3JhbVwiXSxcInBsYXktY2lyY2xlXCI6W1wibXVzaWNcIixcInN0YXJ0XCJdLFwicGx1c1wiOltcImFkZFwiLFwibmV3XCJdLFwicGx1cy1jaXJjbGVcIjpbXCJhZGRcIixcIm5ld1wiXSxcInBsdXMtc3F1YXJlXCI6W1wiYWRkXCIsXCJuZXdcIl0sXCJwb2NrZXRcIjpbXCJsb2dvXCIsXCJzYXZlXCJdLFwicG93ZXJcIjpbXCJvblwiLFwib2ZmXCJdLFwicHJpbnRlclwiOltcImZheFwiLFwib2ZmaWNlXCIsXCJkZXZpY2VcIl0sXCJyYWRpb1wiOltcInNpZ25hbFwiXSxcInJlZnJlc2gtY3dcIjpbXCJzeW5jaHJvbmlzZVwiLFwiYXJyb3dzXCJdLFwicmVmcmVzaC1jY3dcIjpbXCJhcnJvd3NcIl0sXCJyZXBlYXRcIjpbXCJsb29wXCIsXCJhcnJvd3NcIl0sXCJyZXdpbmRcIjpbXCJtdXNpY1wiXSxcInJvdGF0ZS1jY3dcIjpbXCJhcnJvd1wiXSxcInJvdGF0ZS1jd1wiOltcImFycm93XCJdLFwicnNzXCI6W1wiZmVlZFwiLFwic3Vic2NyaWJlXCJdLFwic2F2ZVwiOltcImZsb3BweSBkaXNrXCJdLFwic2Npc3NvcnNcIjpbXCJjdXRcIl0sXCJzZWFyY2hcIjpbXCJmaW5kXCIsXCJtYWduaWZpZXJcIixcIm1hZ25pZnlpbmcgZ2xhc3NcIl0sXCJzZW5kXCI6W1wibWVzc2FnZVwiLFwibWFpbFwiLFwiZW1haWxcIixcInBhcGVyIGFpcnBsYW5lXCIsXCJwYXBlciBhZXJvcGxhbmVcIl0sXCJzZXR0aW5nc1wiOltcImNvZ1wiLFwiZWRpdFwiLFwiZ2VhclwiLFwicHJlZmVyZW5jZXNcIl0sXCJzaGFyZS0yXCI6W1wibmV0d29ya1wiLFwiY29ubmVjdGlvbnNcIl0sXCJzaGllbGRcIjpbXCJzZWN1cml0eVwiLFwic2VjdXJlXCJdLFwic2hpZWxkLW9mZlwiOltcInNlY3VyaXR5XCIsXCJpbnNlY3VyZVwiXSxcInNob3BwaW5nLWJhZ1wiOltcImVjb21tZXJjZVwiLFwiY2FydFwiLFwicHVyY2hhc2VcIixcInN0b3JlXCJdLFwic2hvcHBpbmctY2FydFwiOltcImVjb21tZXJjZVwiLFwiY2FydFwiLFwicHVyY2hhc2VcIixcInN0b3JlXCJdLFwic2h1ZmZsZVwiOltcIm11c2ljXCJdLFwic2tpcC1iYWNrXCI6W1wibXVzaWNcIl0sXCJza2lwLWZvcndhcmRcIjpbXCJtdXNpY1wiXSxcInNsYWNrXCI6W1wibG9nb1wiXSxcInNsYXNoXCI6W1wiYmFuXCIsXCJub1wiXSxcInNsaWRlcnNcIjpbXCJzZXR0aW5nc1wiLFwiY29udHJvbHNcIl0sXCJzbWFydHBob25lXCI6W1wiY2VsbHBob25lXCIsXCJkZXZpY2VcIl0sXCJzbWlsZVwiOltcImVtb2ppXCIsXCJmYWNlXCIsXCJoYXBweVwiLFwiZ29vZFwiLFwiZW1vdGlvblwiXSxcInNwZWFrZXJcIjpbXCJhdWRpb1wiLFwibXVzaWNcIl0sXCJzdGFyXCI6W1wiYm9va21hcmtcIixcImZhdm9yaXRlXCIsXCJsaWtlXCJdLFwic3RvcC1jaXJjbGVcIjpbXCJtZWRpYVwiLFwibXVzaWNcIl0sXCJzdW5cIjpbXCJicmlnaHRuZXNzXCIsXCJ3ZWF0aGVyXCIsXCJsaWdodFwiXSxcInN1bnJpc2VcIjpbXCJ3ZWF0aGVyXCIsXCJ0aW1lXCIsXCJtb3JuaW5nXCIsXCJkYXlcIl0sXCJzdW5zZXRcIjpbXCJ3ZWF0aGVyXCIsXCJ0aW1lXCIsXCJldmVuaW5nXCIsXCJuaWdodFwiXSxcInRhYmxldFwiOltcImRldmljZVwiXSxcInRhZ1wiOltcImxhYmVsXCJdLFwidGFyZ2V0XCI6W1wibG9nb1wiLFwiYnVsbHNleWVcIl0sXCJ0ZXJtaW5hbFwiOltcImNvZGVcIixcImNvbW1hbmQgbGluZVwiLFwicHJvbXB0XCJdLFwidGhlcm1vbWV0ZXJcIjpbXCJ0ZW1wZXJhdHVyZVwiLFwiY2Vsc2l1c1wiLFwiZmFocmVuaGVpdFwiLFwid2VhdGhlclwiXSxcInRodW1icy1kb3duXCI6W1wiZGlzbGlrZVwiLFwiYmFkXCIsXCJlbW90aW9uXCJdLFwidGh1bWJzLXVwXCI6W1wibGlrZVwiLFwiZ29vZFwiLFwiZW1vdGlvblwiXSxcInRvZ2dsZS1sZWZ0XCI6W1wib25cIixcIm9mZlwiLFwic3dpdGNoXCJdLFwidG9nZ2xlLXJpZ2h0XCI6W1wib25cIixcIm9mZlwiLFwic3dpdGNoXCJdLFwidG9vbFwiOltcInNldHRpbmdzXCIsXCJzcGFubmVyXCJdLFwidHJhc2hcIjpbXCJnYXJiYWdlXCIsXCJkZWxldGVcIixcInJlbW92ZVwiLFwiYmluXCJdLFwidHJhc2gtMlwiOltcImdhcmJhZ2VcIixcImRlbGV0ZVwiLFwicmVtb3ZlXCIsXCJiaW5cIl0sXCJ0cmlhbmdsZVwiOltcImRlbHRhXCJdLFwidHJ1Y2tcIjpbXCJkZWxpdmVyeVwiLFwidmFuXCIsXCJzaGlwcGluZ1wiLFwidHJhbnNwb3J0XCIsXCJsb3JyeVwiXSxcInR2XCI6W1widGVsZXZpc2lvblwiLFwic3RyZWFtXCJdLFwidHdpdGNoXCI6W1wibG9nb1wiXSxcInR3aXR0ZXJcIjpbXCJsb2dvXCIsXCJzb2NpYWxcIl0sXCJ0eXBlXCI6W1widGV4dFwiXSxcInVtYnJlbGxhXCI6W1wicmFpblwiLFwid2VhdGhlclwiXSxcInVubG9ja1wiOltcInNlY3VyaXR5XCJdLFwidXNlci1jaGVja1wiOltcImZvbGxvd2VkXCIsXCJzdWJzY3JpYmVkXCJdLFwidXNlci1taW51c1wiOltcImRlbGV0ZVwiLFwicmVtb3ZlXCIsXCJ1bmZvbGxvd1wiLFwidW5zdWJzY3JpYmVcIl0sXCJ1c2VyLXBsdXNcIjpbXCJuZXdcIixcImFkZFwiLFwiY3JlYXRlXCIsXCJmb2xsb3dcIixcInN1YnNjcmliZVwiXSxcInVzZXIteFwiOltcImRlbGV0ZVwiLFwicmVtb3ZlXCIsXCJ1bmZvbGxvd1wiLFwidW5zdWJzY3JpYmVcIixcInVuYXZhaWxhYmxlXCJdLFwidXNlclwiOltcInBlcnNvblwiLFwiYWNjb3VudFwiXSxcInVzZXJzXCI6W1wiZ3JvdXBcIl0sXCJ2aWRlby1vZmZcIjpbXCJjYW1lcmFcIixcIm1vdmllXCIsXCJmaWxtXCJdLFwidmlkZW9cIjpbXCJjYW1lcmFcIixcIm1vdmllXCIsXCJmaWxtXCJdLFwidm9pY2VtYWlsXCI6W1wicGhvbmVcIl0sXCJ2b2x1bWVcIjpbXCJtdXNpY1wiLFwic291bmRcIixcIm11dGVcIl0sXCJ2b2x1bWUtMVwiOltcIm11c2ljXCIsXCJzb3VuZFwiXSxcInZvbHVtZS0yXCI6W1wibXVzaWNcIixcInNvdW5kXCJdLFwidm9sdW1lLXhcIjpbXCJtdXNpY1wiLFwic291bmRcIixcIm11dGVcIl0sXCJ3YXRjaFwiOltcImNsb2NrXCIsXCJ0aW1lXCJdLFwid2lmaS1vZmZcIjpbXCJkaXNhYmxlZFwiXSxcIndpZmlcIjpbXCJjb25uZWN0aW9uXCIsXCJzaWduYWxcIixcIndpcmVsZXNzXCJdLFwid2luZFwiOltcIndlYXRoZXJcIixcImFpclwiXSxcIngtY2lyY2xlXCI6W1wiY2FuY2VsXCIsXCJjbG9zZVwiLFwiZGVsZXRlXCIsXCJyZW1vdmVcIixcInRpbWVzXCIsXCJjbGVhclwiXSxcIngtb2N0YWdvblwiOltcImRlbGV0ZVwiLFwic3RvcFwiLFwiYWxlcnRcIixcIndhcm5pbmdcIixcInRpbWVzXCIsXCJjbGVhclwiXSxcIngtc3F1YXJlXCI6W1wiY2FuY2VsXCIsXCJjbG9zZVwiLFwiZGVsZXRlXCIsXCJyZW1vdmVcIixcInRpbWVzXCIsXCJjbGVhclwiXSxcInhcIjpbXCJjYW5jZWxcIixcImNsb3NlXCIsXCJkZWxldGVcIixcInJlbW92ZVwiLFwidGltZXNcIixcImNsZWFyXCJdLFwieW91dHViZVwiOltcImxvZ29cIixcInZpZGVvXCIsXCJwbGF5XCJdLFwiemFwLW9mZlwiOltcImZsYXNoXCIsXCJjYW1lcmFcIixcImxpZ2h0bmluZ1wiXSxcInphcFwiOltcImZsYXNoXCIsXCJjYW1lcmFcIixcImxpZ2h0bmluZ1wiXSxcInpvb20taW5cIjpbXCJtYWduaWZ5aW5nIGdsYXNzXCJdLFwiem9vbS1vdXRcIjpbXCJtYWduaWZ5aW5nIGdsYXNzXCJdfTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdG8tc3ZnLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy90by1zdmcuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaWNvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2ljb25zICovIFwiLi9zcmMvaWNvbnMuanNcIik7XG5cbnZhciBfaWNvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaWNvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIENyZWF0ZSBhbiBTVkcgc3RyaW5nLlxuICogQGRlcHJlY2F0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHRvU3ZnKG5hbWUpIHtcbiAgdmFyIGF0dHJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICBjb25zb2xlLndhcm4oJ2ZlYXRoZXIudG9TdmcoKSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGZlYXRoZXIuaWNvbnNbbmFtZV0udG9TdmcoKSBpbnN0ZWFkLicpO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhlIHJlcXVpcmVkIGBrZXlgIChpY29uIG5hbWUpIHBhcmFtZXRlciBpcyBtaXNzaW5nLicpO1xuICB9XG5cbiAgaWYgKCFfaWNvbnMyLmRlZmF1bHRbbmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGljb24gbWF0Y2hpbmcgXFwnJyArIG5hbWUgKyAnXFwnLiBTZWUgdGhlIGNvbXBsZXRlIGxpc3Qgb2YgaWNvbnMgYXQgaHR0cHM6Ly9mZWF0aGVyaWNvbnMuY29tJyk7XG4gIH1cblxuICByZXR1cm4gX2ljb25zMi5kZWZhdWx0W25hbWVdLnRvU3ZnKGF0dHJzKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdG9Tdmc7XG5cbi8qKiovIH0pLFxuXG4vKioqLyAwOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogbXVsdGkgY29yZS1qcy9lcy9hcnJheS9mcm9tIC4vc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjb3JlLWpzL2VzL2FycmF5L2Zyb20gKi9cIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZXMvYXJyYXkvZnJvbS5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgL2hvbWUvdHJhdmlzL2J1aWxkL2ZlYXRoZXJpY29ucy9mZWF0aGVyL3NyYy9pbmRleC5qcyAqL1wiLi9zcmMvaW5kZXguanNcIik7XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZlYXRoZXIuanMubWFwIiwiLyoqXHJcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIHZhcmlvdXMgdXRpbGl0eSBmdW5jdGlvbnMgY29tbW9ubHkgdXNlZCBpbiBPYnNpZGlhbiBwbHVnaW5zLlxyXG4gKiBAbW9kdWxlIG9ic2lkaWFuLWNvbW11bml0eS1saWJcclxuICovXHJcbmltcG9ydCAqIGFzIGZlYXRoZXIgZnJvbSBcImZlYXRoZXItaWNvbnNcIjtcclxuaW1wb3J0IHsgYWRkSWNvbiwgTWFya2Rvd25SZW5kZXJlciwgTWFya2Rvd25WaWV3LCBNb2RhbCwgbm9ybWFsaXplUGF0aCwgTm90aWNlLCByZXF1ZXN0LCBURmlsZSwgfSBmcm9tIFwib2JzaWRpYW5cIjtcclxuLyoqXHJcbiAqIFlvdSBjYW4gYXdhaXQgdGhpcyBGdW5jdGlvbiB0byBkZWxheSBleGVjdXRpb25cclxuICpcclxuICogQHBhcmFtIGRlbGF5IFRoZSBkZWxheSBpbiBtc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdhaXQoZGVsYXkpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xyXG59XHJcbi8qKlxyXG4gKiBBZGRzIGFsbCBvZmZpY2lhbCBGZWF0aGVyIEljb25zIHRvIE9ic2lkaWFuLlxyXG4gKiBodHRwczovL2ZlYXRoZXJpY29ucy5jb20vXHJcbiAqXHJcbiAqIEBwYXJhbSBhdHRyIFNWRyBBdHRyaWJ1dGVzIGZvciB0aGUgSWNvbi4gVGhlIGRlZmF1bHQgc2hvdWxkIHdvcmsgZm9yIG1vc3QgdXNlY2FzZXMuXHJcbiAqXHJcbiAqIEBkZXByZWNhdGVkIEFzIG9mIE9ic2lkaWFuIDAuMTMuMjcgdGhpcyBpcyBubyBsb25nZXIgbmVlZGVkLCBiZWNhdXNlIE9ic2lkaWFuIHNoaXBzIHdpdGggYGx1Y2lkZWAsIGEgbWFpbnRhaW5lZCBmb3JrIG9mIGZlYXRoZXIuIChodHRwczovL2x1Y2lkZS5kZXYvKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFsbEZlYXRoZXJJY29ucyhhdHRyID0geyB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLCB3aWR0aDogXCIxMDBcIiwgaGVpZ2h0OiBcIjEwMFwiIH0pIHtcclxuICAgIE9iamVjdC52YWx1ZXMoZmVhdGhlci5pY29ucykuZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN2ZyA9IGkudG9TdmcoYXR0cik7XHJcbiAgICAgICAgYWRkSWNvbihgZmVhdGhlci0ke2kubmFtZX1gLCBzdmcpO1xyXG4gICAgfSk7XHJcbn1cclxuLyoqXHJcbiAqIEFkZHMgYSBzcGVjaWZpYyBGZWF0aGVyIEljb24gdG8gT2JzaWRpYW4uXHJcbiAqXHJcbiAqIEBwYXJhbSBuYW1lIG9mZmljaWFsIE5hbWUgb2YgdGhlIEljb24gKGh0dHBzOi8vZmVhdGhlcmljb25zLmNvbS8pXHJcbiAqIEBwYXJhbSBhdHRyIFNWRyBBdHRyaWJ1dGVzIGZvciB0aGUgSWNvbi4gVGhlIGRlZmF1bHQgc2hvdWxkIHdvcmsgZm9yIG1vc3QgdXNlY2FzZXMuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEljb24gbmFtZVxyXG4gKlxyXG4gKiBAZGVwcmVjYXRlZCBBcyBvZiBPYnNpZGlhbiAwLjEzLjI3IHRoaXMgaXMgbm8gbG9uZ2VyIG5lZWRlZCwgYmVjYXVzZSBPYnNpZGlhbiBzaGlwcyB3aXRoIGBsdWNpZGVgLCBhIG1haW50YWluZWQgZm9yayBvZiBmZWF0aGVyLiAoaHR0cHM6Ly9sdWNpZGUuZGV2LylcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRGZWF0aGVySWNvbihuYW1lLCBhdHRyID0geyB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLCB3aWR0aDogXCIxMDBcIiwgaGVpZ2h0OiBcIjEwMFwiIH0pIHtcclxuICAgIGlmIChmZWF0aGVyLmljb25zW25hbWVdKSB7XHJcbiAgICAgICAgY29uc3QgaWNvbk5hbWUgPSBgZmVhdGhlci0ke25hbWV9YDtcclxuICAgICAgICBhZGRJY29uKGljb25OYW1lLCBmZWF0aGVyLmljb25zW25hbWVdLnRvU3ZnKGF0dHIpKTtcclxuICAgICAgICByZXR1cm4gaWNvbk5hbWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihgVGhpcyBJY29uICgke25hbWV9KSBkb2Vzbid0IGV4aXN0IGluIHRoZSBGZWF0aGVyIExpYnJhcnkuYCk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIENvbnZlcnQgYSBiYXNlNjQgU3RyaW5nIHRvIGFuIEFycmF5QnVmZmVyLlxyXG4gKiBZb3UgY2FuIHRoZW4gdXNlIHRoZSBBcnJheUJ1ZmZlciB0byBzYXZlIHRoZSBhc3NldCB0byBkaXNrLlxyXG4gKlxyXG4gKiBAcGFyYW0gYmFzZTY0IGJhc2U2NCBzdHJpbmcgdG8gYmUgY29udmVydGVkLlxyXG4gKiBAcmV0dXJucyBBcnJheUJ1ZmZlclxyXG4gKiBAZGVwcmVjYXRlZCBPYnNpZGlhbiBvZmZlcnMgaXQncyBvd24gbWV0aG9kIGFzIG9mIDAuMTQuNVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJhc2U2NFRvQXJyYXlCdWZmZXIoYmFzZTY0KSB7XHJcbiAgICBjb25zdCBiaW5hcnlfc3RyaW5nID0gd2luZG93LmF0b2IoYmFzZTY0KTtcclxuICAgIGNvbnN0IGxlbiA9IGJpbmFyeV9zdHJpbmcubGVuZ3RoO1xyXG4gICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBieXRlc1tpXSA9IGJpbmFyeV9zdHJpbmcuY2hhckNvZGVBdChpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBieXRlcy5idWZmZXI7XHJcbn1cclxuLyoqXHJcbiAqIFRoaXMgaXMgYSBoZWxwZXIgbWV0aG9kIGZvciBhbiB1bmRvY3VtZW50ZWQgQVBJIG9mIE9ic2lkaWFuLlxyXG4gKlxyXG4gKiBAcGFyYW0gZmlsZU5hbWUgVGhlIEZpbGVuYW1lIGZvciB5b3VyIEF0dGFjaG1lbnRcclxuICogQHBhcmFtIGZvcm1hdCBUaGUgRmlsZWZvcm1hdCBvZiB5b3VyIEF0dGFjaG1lbnRcclxuICogQHBhcmFtIHNvdXJjZUZpbGUgVGhlIFNvdXJjZWZpbGUgZnJvbSB3aGVyZSB0aGUgQXR0YWNobWVudCBnZXRzIGFkZGVkLCB0aGlzIGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBBdHRhY2htZW50IEZvbGRlciBtaWdodCBiZSBkaWZmZXJlbnQgYmFzZWQgb24gd2hlcmUgaXQgZ2V0cyBpbnNlcnRlZC5cclxuICogQHJldHVybnMgVGhlIEF0dGFjaG1lbnQgUGF0aFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEF2YWlsYWJsZVBhdGhGb3JBdHRhY2htZW50cyhmaWxlTmFtZSwgZm9ybWF0LCBzb3VyY2VGaWxlKSB7XHJcbiAgICAvL0B0cy1leHBlY3QtZXJyb3JcclxuICAgIHJldHVybiBhcHAudmF1bHQuZ2V0QXZhaWxhYmxlUGF0aEZvckF0dGFjaG1lbnRzKGZpbGVOYW1lLCBmb3JtYXQsIHNvdXJjZUZpbGUpO1xyXG59XHJcbi8qKlxyXG4gKiBDb3B5IGBjb250ZW50YCB0byB0aGUgdXNlcnMgY2xpcGJvYXJkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCBUaGUgY29udGVudCB0byBiZSBjb3BpZWQgdG8gY2xpcGJvYXJkLlxyXG4gKiBAcGFyYW0geygpID0+IGFueX0gc3VjY2VzcyBUaGUgY2FsbGJhY2sgdG8gcnVuIHdoZW4gdGV4dCBpcyBzdWNjZXNzZnVsbHkgY29waWVkLiBEZWZhdWx0IHRocm93cyBhIG5ldyBgTm90aWNlYFxyXG4gKiBAcGFyYW0geyhyZWFzb24/KSA9PiBhbnl9IGZhaWx1cmUgVGhlIGNhbGxiYWNrIHRvIHJ1biB3aGVuIHRleHQgd2FzIG5vdCBhYmxlIHRvIGJlIGNvcGllZC4gRGVmYXVsdCB0aHJvd3MgYSBuZXcgYE5vdGljZWAsIGFuZCBjb25zb2xlIGxvZ3MgdGhlIGVycm9yLmBcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb3B5KGNvbnRlbnQsIHN1Y2Nlc3MgPSAoKSA9PiBuZXcgTm90aWNlKFwiQ29waWVkIHRvIGNsaXBib2FyZFwiKSwgZmFpbHVyZSA9IChyZWFzb24pID0+IHtcclxuICAgIG5ldyBOb3RpY2UoXCJDb3VsZCBub3QgY29weSB0byBjbGlwYm9hcmRcIik7XHJcbiAgICBjb25zb2xlLmxvZyh7IHJlYXNvbiB9KTtcclxufSkge1xyXG4gICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29udGVudCkudGhlbihzdWNjZXNzLCBmYWlsdXJlKTtcclxufVxyXG4vKipcclxuICogR2l2ZW4gYW4gZWRpdG9yLCBjaGVjayBpZiBzb21ldGhpbmcgaXMgc2VsZWN0ZWQgYW5kIHJldHVybiB0aGF0IHNlbGVjdGlvbiwgb3RoZXJ3aXNlIHJldHVybiB0aGUgZW50aXJlIGNvbnRlbnQgb2YgdGhlIGVkaXRvclxyXG4gKiBAcGFyYW0gIHtFZGl0b3J9IGVkaXRvclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGlvbkZyb21FZGl0b3IoZWRpdG9yKSB7XHJcbiAgICBpZiAoZWRpdG9yLnNvbWV0aGluZ1NlbGVjdGVkKCkpXHJcbiAgICAgICAgcmV0dXJuIGVkaXRvci5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gZWRpdG9yLmdldFZhbHVlKCk7XHJcbn1cclxuLyoqXHJcbiAqIENoZWNrIGlmIHNvbWV0aGluZyBpcyBzZWxlY3RlZCBpbiB0aGUgY3VycmVudCBmaWxlIGFuZCByZXR1cm4gdGhhdCBzZWxlY3Rpb24sIG90aGVyd2lzZSByZXR1cm4gdGhlIGVudGlyZSBjb250ZW50IG9mIHRoZSBjdXJyZW50IGZpbGUuXHJcbiAqIEBwYXJhbSAge2Jvb2xlYW59IFtjYWNoZWQ9dHJ1ZV0gVXNlIGBjYWNoZWRSZWFkYCBvciBgcmVhZGAuIGBjYWNoZWRSZWFkYCBieSBkZWZhdWx0LlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nIHwgbnVsbH0gYG51bGxgIGlmIG5vdCBmb2N1c3NlZCBvbiBhIG1hcmtkb3duIGZpbGVcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZWxlY3Rpb25Gcm9tQ3VyckZpbGUoY2FjaGVkID0gdHJ1ZSkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgY29uc3QgdGV4dCA9IChfYSA9IHdpbmRvdyA9PT0gbnVsbCB8fCB3aW5kb3cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAodGV4dClcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gYXdhaXQgZ2V0QWN0aXZlRmlsZUNvbnRlbnQoY2FjaGVkKTtcclxufVxyXG4vKipcclxuICogQ2hlY2sgaWYgYG5vdGVOYW1lYCBpcyB0aGUgbmFtZSBvZiBhIG5vdGUgdGhhdCBleGlzdHMgaW4gdGhlIHZhdWx0LlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG5vdGVOYW1lIEJhc2VuYW1lIG9mIHRoZSBub3RlIHRvIHNlYXJjaCBmb3IuXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gW3NvdXJjZVBhdGg9XCJcIl0gT3B0aW9uYWwgZmlsZSBwYXRoIHRvIHN0YXJ0IHNlYXJjaGluZyBmcm9tLiBEZWZhdWx0IGlzIHRoZSBjdXJyZW50IGZpbGUuXHJcbiAqIEByZXR1cm5zIGJvb2xlYW5cclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0luVmF1bHQgPSAobm90ZU5hbWUsIHNvdXJjZVBhdGggPSBcIlwiKSA9PiAhIWFwcC5tZXRhZGF0YUNhY2hlLmdldEZpcnN0TGlua3BhdGhEZXN0KG5vdGVOYW1lLCBzb3VyY2VQYXRoKTtcclxuLyoqXHJcbiAqIFdoZW4gaG92ZXJpbmcgYSBsaW5rIGdvaW5nIHRvIGB0b2AsIHNob3cgdGhlIE9ic2lkaWFuIGhvdmVyLXByZXZpZXcgb2YgdGhhdCBub3RlLlxyXG4gKlxyXG4gKiBZb3UgcHJvYmFibHkgaGF2ZSB0byBob2xkIGRvd24gYEN0cmxgIHdoZW4gaG92ZXJpbmcgdGhlIGxpbmsgZm9yIHRoZSBwcmV2aWV3IHRvIGFwcGVhciFcclxuICogQHBhcmFtICB7TW91c2VFdmVudH0gZXZlbnRcclxuICogQHBhcmFtICB7WW91clZpZXd9IHZpZXcgVGhlIHZpZXcgd2l0aCB0aGUgbGluayBiZWluZyBob3ZlcmVkXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdG8gVGhlIGJhc2VuYW1lIG9mIHRoZSBub3RlIHRvIHByZXZpZXcuXHJcbiAqIEB0ZW1wbGF0ZSBZb3VyVmlldyBUaGUgVmlld1R5cGUgb2YgeW91ciB2aWV3XHJcbiAqIEByZXR1cm5zIHZvaWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBob3ZlclByZXZpZXcoZXZlbnQsIHZpZXcsIHRvKSB7XHJcbiAgICBjb25zdCB0YXJnZXRFbCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGFwcC53b3Jrc3BhY2UudHJpZ2dlcihcImhvdmVyLWxpbmtcIiwge1xyXG4gICAgICAgIGV2ZW50LFxyXG4gICAgICAgIHNvdXJjZTogdmlldy5nZXRWaWV3VHlwZSgpLFxyXG4gICAgICAgIGhvdmVyUGFyZW50OiB2aWV3LFxyXG4gICAgICAgIHRhcmdldEVsLFxyXG4gICAgICAgIGxpbmt0ZXh0OiB0byxcclxuICAgIH0pO1xyXG59XHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgbWFya2Rvd24gbm90ZSBuYW1lZCBgbmV3TmFtZWAgaW4gdGhlIHVzZXIncyBwcmVmZmVyZWQgbmV3LW5vdGUtZm9sZGVyLlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG5ld05hbWUgTmFtZSBvZiBuZXcgbm90ZSAod2l0aCBvciB3aXRob3V0ICcubWQnKVxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IFtjdXJyRmlsZVBhdGg9XCJcIl0gRmlsZSBwYXRoIG9mIHRoZSBjdXJyZW50IG5vdGUuIFVzZSBhbiBlbXB0eSBzdHJpbmcgaWYgdGhlcmUgaXMgbm8gYWN0aXZlIGZpbGUuXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPFRGaWxlPn0gbmV3IFRGaWxlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTmV3TUROb3RlKG5ld05hbWUsIGN1cnJGaWxlUGF0aCA9IFwiXCIpIHtcclxuICAgIGNvbnN0IG5ld0ZpbGVGb2xkZXIgPSBhcHAuZmlsZU1hbmFnZXIuZ2V0TmV3RmlsZVBhcmVudChjdXJyRmlsZVBhdGgpLnBhdGg7XHJcbiAgICBjb25zdCBuZXdGaWxlUGF0aCA9IG5vcm1hbGl6ZVBhdGgoYCR7bmV3RmlsZUZvbGRlcn0ke25ld0ZpbGVGb2xkZXIgPT09IFwiL1wiID8gXCJcIiA6IFwiL1wifSR7YWRkTUQobmV3TmFtZSl9YCk7XHJcbiAgICByZXR1cm4gYXdhaXQgYXBwLnZhdWx0LmNyZWF0ZShuZXdGaWxlUGF0aCwgXCJcIik7XHJcbn1cclxuLyoqXHJcbiAqIEFkZCAnLm1kJyB0byBgbm90ZU5hbWVgIGlmIGl0IGlzbid0IGFscmVhZHkgdGhlcmUuXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gbm90ZU5hbWUgd2l0aCBvciB3aXRob3V0ICcubWQnIG9uIHRoZSBlbmQuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IG5vdGVOYW1lIHdpdGggJy5tZCcgb24gdGhlIGVuZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBhZGRNRCA9IChub3RlTmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIG5vdGVOYW1lLm1hdGNoKC9cXC5NRCR8XFwubWQkL20pID8gbm90ZU5hbWUgOiBub3RlTmFtZSArIFwiLm1kXCI7XHJcbn07XHJcbi8qKlxyXG4gKiBTdHJpcCAnLm1kJyBvZmYgdGhlIGVuZCBvZiBhIG5vdGUgbmFtZSB0byBnZXQgaXRzIGJhc2VuYW1lLlxyXG4gKlxyXG4gKiBXb3JrcyB3aXRoIHRoZSBlZGdlY2FzZSB3aGVyZSBhIG5vdGUgaGFzICcubWQnIGluIGl0cyBiYXNlbmFtZTogYE9ic2lkaWFuLm1kLm1kYCwgZm9yIGV4YW1wbGUuXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gbm90ZU5hbWUgd2l0aCBvciB3aXRob3V0ICcubWQnIG9uIHRoZSBlbmQuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IG5vdGVOYW1lIHdpdGhvdXQgJy5tZCdcclxuICovXHJcbmV4cG9ydCBjb25zdCBzdHJpcE1EID0gKG5vdGVOYW1lKSA9PiB7XHJcbiAgICBpZiAobm90ZU5hbWUubWF0Y2goL1xcLk1EJHxcXC5tZCQvbSkpIHtcclxuICAgICAgICByZXR1cm4gbm90ZU5hbWUuc3BsaXQoL1xcLk1EJHxcXC5tZCQvbSkuc2xpY2UoMCwgLTEpLmpvaW4oXCIubWRcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIG5vdGVOYW1lO1xyXG59O1xyXG4vKipcclxuICogV2hlbiBjbGlja2luZyBhIGxpbmssIGNoZWNrIGlmIHRoYXQgbm90ZSBpcyBhbHJlYWR5IG9wZW4gaW4gYW5vdGhlciBsZWFmLCBhbmQgc3dpdGNoIHRvIHRoYXQgbGVhZiwgaWYgc28uIE90aGVyd2lzZSwgb3BlbiB0aGUgbm90ZSBpbiBhIG5ldyBwYW5lLlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGRlc3QgTmFtZSBvZiBub3RlIHRvIG9wZW4uIElmIHlvdSB3YW50IHRvIG9wZW4gYSBub24tbWQgbm90ZSwgYmUgc3VyZSB0byBhZGQgdGhlIGZpbGUgZXh0ZW5zaW9uLlxyXG4gKiBAcGFyYW0gIHtNb3VzZUV2ZW50fSBldmVudFxyXG4gKiBAcGFyYW0gIHt7Y3JlYXRlTmV3RmlsZTpib29sZWFufX0gW29wdGlvbnM9e2NyZWF0ZU5ld0ZpbGU6dHJ1ZX1dIFdoZXRoZXIgb3Igbm90IHRvIGNyZWF0ZSBgZGVzdGAgZmlsZSBpZiBpdCBkb2Vzbid0IGV4aXN0LiBJZiBgZmFsc2VgLCBzaW1wbHkgcmV0dXJuIGZyb20gdGhlIGZ1bmN0aW9uLlxyXG4gKiBAcmV0dXJucyBQcm9taXNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb3Blbk9yU3dpdGNoKGRlc3QsIGV2ZW50LCBvcHRpb25zID0geyBjcmVhdGVOZXdGaWxlOiB0cnVlIH0pIHtcclxuICAgIGNvbnN0IHsgd29ya3NwYWNlIH0gPSBhcHA7XHJcbiAgICBsZXQgZGVzdEZpbGUgPSBhcHAubWV0YWRhdGFDYWNoZS5nZXRGaXJzdExpbmtwYXRoRGVzdChkZXN0LCBcIlwiKTtcclxuICAgIC8vIElmIGRlc3QgZG9lc24ndCBleGlzdCwgbWFrZSBpdFxyXG4gICAgaWYgKCFkZXN0RmlsZSAmJiBvcHRpb25zLmNyZWF0ZU5ld0ZpbGUpIHtcclxuICAgICAgICBkZXN0RmlsZSA9IGF3YWl0IGNyZWF0ZU5ld01ETm90ZShkZXN0KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCFkZXN0RmlsZSAmJiAhb3B0aW9ucy5jcmVhdGVOZXdGaWxlKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIC8vIENoZWNrIGlmIGl0J3MgYWxyZWFkeSBvcGVuXHJcbiAgICBjb25zdCBsZWF2ZXNXaXRoRGVzdEFscmVhZHlPcGVuID0gW107XHJcbiAgICAvLyBGb3IgYWxsIG9wZW4gbGVhdmVzLCBpZiB0aGUgbGVhdmUncyBiYXNlbmFtZSBpcyBlcXVhbCB0byB0aGUgbGluayBkZXN0aW5hdGlvbiwgcmF0aGVyIGFjdGl2YXRlIHRoYXQgbGVhZiBpbnN0ZWFkIG9mIG9wZW5pbmcgaXQgaW4gdHdvIHBhbmVzXHJcbiAgICB3b3Jrc3BhY2UuaXRlcmF0ZUFsbExlYXZlcygobGVhZikgPT4ge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBpZiAobGVhZi52aWV3IGluc3RhbmNlb2YgTWFya2Rvd25WaWV3KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSAoX2EgPSBsZWFmLnZpZXcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5maWxlO1xyXG4gICAgICAgICAgICBpZiAoZmlsZSAmJiBmaWxlLmJhc2VuYW1lICsgXCIuXCIgKyBmaWxlLmV4dGVuc2lvbiA9PT0gZGVzdCkge1xyXG4gICAgICAgICAgICAgICAgbGVhdmVzV2l0aERlc3RBbHJlYWR5T3Blbi5wdXNoKGxlYWYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBSYXRoZXIgc3dpdGNoIHRvIGl0IGlmIGl0IGlzIG9wZW5cclxuICAgIGlmIChsZWF2ZXNXaXRoRGVzdEFscmVhZHlPcGVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB3b3Jrc3BhY2Uuc2V0QWN0aXZlTGVhZihsZWF2ZXNXaXRoRGVzdEFscmVhZHlPcGVuWzBdKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBjb25zdCBtb2RlID0gYXBwLnZhdWx0LmdldENvbmZpZyhcImRlZmF1bHRWaWV3TW9kZVwiKTtcclxuICAgICAgICBjb25zdCBsZWFmID0gZXZlbnQuY3RybEtleSB8fCBldmVudC5nZXRNb2RpZmllclN0YXRlKFwiTWV0YVwiKVxyXG4gICAgICAgICAgICA/IHdvcmtzcGFjZS5zcGxpdEFjdGl2ZUxlYWYoKVxyXG4gICAgICAgICAgICA6IHdvcmtzcGFjZS5nZXRVbnBpbm5lZExlYWYoKTtcclxuICAgICAgICAvL0B0cy1leHBlY3QtZXJyb3JcclxuICAgICAgICBhd2FpdCBsZWFmLm9wZW5GaWxlKGRlc3RGaWxlLCB7IGFjdGl2ZTogdHJ1ZSwgbW9kZSB9KTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogR2l2ZW4gYSBsaXN0IG9mIHJlc29sdmVkIGxpbmtzIGZyb20gYXBwLm1ldGFkYXRhQ2FjaGUsIGNoZWNrIGlmIGBmcm9tYCBoYXMgYSBsaW5rIHRvIGB0b2BcclxuICogQHBhcmFtICB7UmVzb2x2ZWRMaW5rc30gcmVzb2x2ZWRMaW5rc1xyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGZyb20gTm90ZSBuYW1lIHdpdGggbGluayBsZWF2aW5nIChXaXRoIG9yIHdpdGhvdXQgJy5tZCcpXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdG8gTm90ZSBuYW1lIHdpdGggbGluayBhcnJpdmluZyAoV2l0aCBvciB3aXRob3V0ICcubWQnKVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtkaXJlY3RlZD10cnVlXSBPbmx5IGNoZWNrIGlmIGBmcm9tYCBoYXMgYSBsaW5rIHRvIGB0b2AuIElmIG5vdCBkaXJlY3RlZCwgY2hlY2sgaW4gYm90aCBkaXJlY3Rpb25zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNMaW5rZWQocmVzb2x2ZWRMaW5rcywgZnJvbSwgdG8sIGRpcmVjdGVkID0gdHJ1ZSkge1xyXG4gICAgdmFyIF9hLCBfYjtcclxuICAgIGZyb20gPSBhZGRNRChmcm9tKTtcclxuICAgIHRvID0gYWRkTUQodG8pO1xyXG4gICAgY29uc3QgZnJvbVRvID0gKF9hID0gcmVzb2x2ZWRMaW5rc1tmcm9tXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhhc093blByb3BlcnR5KHRvKTtcclxuICAgIGlmICghZnJvbVRvICYmICFkaXJlY3RlZCkge1xyXG4gICAgICAgIGNvbnN0IHRvRnJvbSA9IChfYiA9IHJlc29sdmVkTGlua3NbdG9dKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaGFzT3duUHJvcGVydHkoZnJvbSk7XHJcbiAgICAgICAgcmV0dXJuIHRvRnJvbTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gZnJvbVRvO1xyXG59XHJcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGUgbGluayBgZnJvbWAg4oaSIGB0b2AgaXMgcmVzb2x2ZWQgb3Igbm90LlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRvXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZnJvbVxyXG4gKiBAcmV0dXJucyBib29sZWFuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNvbHZlZCh0bywgZnJvbSkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgY29uc3QgeyByZXNvbHZlZExpbmtzIH0gPSBhcHAubWV0YWRhdGFDYWNoZTtcclxuICAgIHJldHVybiAoKF9hID0gcmVzb2x2ZWRMaW5rcyA9PT0gbnVsbCB8fCByZXNvbHZlZExpbmtzID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXNvbHZlZExpbmtzW2FkZE1EKGZyb20pXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW2FkZE1EKHRvKV0pID4gMDtcclxufVxyXG4vKipcclxuICogT3BlbiB5b3VyIHZpZXcgb24gdGhlIGNob3NlbiBgc2lkZWAgaWYgaXQgaXNuJ3QgYWxyZWFkeSBvcGVuXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdmlld1R5cGVcclxuICogQHBhcmFtICB7Q29uc3RydWN0b3I8WW91clZpZXc+fSB2aWV3Q2xhc3MgVGhlIGNsYXNzIGNvbnN0cnVjdG9yIG9mIHlvdXIgdmlld1xyXG4gKiBAcGFyYW0gIHtcImxlZnRcInxcInJpZ2h0XCJ9IFtzaWRlPVwicmlnaHRcIl1cclxuICogQHJldHVybnMge1Byb21pc2U8WW91clZpZXc+fSBUaGUgb3BlbmVkIHZpZXdcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBvcGVuVmlldyh2aWV3VHlwZSwgdmlld0NsYXNzLCBzaWRlID0gXCJyaWdodFwiKSB7XHJcbiAgICBsZXQgbGVhZiA9IG51bGw7XHJcbiAgICBmb3IgKGxlYWYgb2YgYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUodmlld1R5cGUpKSB7XHJcbiAgICAgICAgaWYgKGxlYWYudmlldyBpbnN0YW5jZW9mIHZpZXdDbGFzcykge1xyXG4gICAgICAgICAgICByZXR1cm4gbGVhZi52aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBsZWFmLnNldFZpZXdTdGF0ZSh7IHR5cGU6IFwiZW1wdHlcIiB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGxlYWYgPVxyXG4gICAgICAgIChsZWFmICE9PSBudWxsICYmIGxlYWYgIT09IHZvaWQgMCA/IGxlYWYgOiBzaWRlID09PSBcInJpZ2h0XCIpXHJcbiAgICAgICAgICAgID8gYXBwLndvcmtzcGFjZS5nZXRSaWdodExlYWYoZmFsc2UpXHJcbiAgICAgICAgICAgIDogYXBwLndvcmtzcGFjZS5nZXRMZWZ0TGVhZihmYWxzZSk7XHJcbiAgICBhd2FpdCBsZWFmLnNldFZpZXdTdGF0ZSh7XHJcbiAgICAgICAgdHlwZTogdmlld1R5cGUsXHJcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbGVhZi52aWV3O1xyXG59XHJcbi8qKlxyXG4gKiBDaGVjayB3aGljaCBzaWRlIG9mIHRoZSB3b3Jrc3BhY2UgeW91ciBgdmlld1R5cGVgIGlzIG9uLCBhbmQgc2F2ZSBpdCBpbnRvIGBwbHVnaW4uc2V0dGluZ3Nbc2V0dGluZ05hbWVdYC5cclxuICpcclxuICogKipUaXAqKjogUnVuIHRoaXMgZnVuY3Rpb24gb24gYHBsdWdpbi51bmxvYWRgIHRvIHNhdmUgdGhlIGxhc3Qgc2lkZSB5b3VyIHZpZXcgd2FzIG9uIHdoZW4gY2xvc2luZywgdGhlbiB7QGxpbmsgb3BlblZpZXd9IG9uIHRoZSBzYW1lIHNpZGUgaXQgd2FzIGxhc3QuXHJcbiAqIEBwYXJhbSAge1lvdXJQbHVnaW59IHBsdWdpblxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHZpZXdUeXBlXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gc2V0dGluZ05hbWVcclxuICogQHJldHVybnMge1wibGVmdFwiIHwgXCJyaWdodFwifSBgc2lkZWBcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlVmlld1NpZGUocGx1Z2luLCB2aWV3VHlwZSwgc2V0dGluZ05hbWUpIHtcclxuICAgIGNvbnN0IGxlYWYgPSBhcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZSh2aWV3VHlwZSlbMF07XHJcbiAgICBpZiAoIWxlYWYpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oYE9ic2lkaWFuLUNvbW11bml0eS1MaWI6IE5vIGluc3RhbmNlIG9mICcke3ZpZXdUeXBlfScgb3BlbiwgY2Fubm90IHNhdmUgc2lkZWApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgY29uc3Qgc2lkZSA9IGxlYWYuZ2V0Um9vdCgpLnNpZGU7XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIHBsdWdpbi5zZXR0aW5nc1tzZXR0aW5nTmFtZV0gPSBzaWRlO1xyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBhd2FpdCBwbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICByZXR1cm4gc2lkZTtcclxufVxyXG4vKipcclxuICogQSBNb2RhbCB1c2VkIGluIHtAbGluayBhZGRSZW5kZXJlZE1hcmtkb3duQnV0dG9ufSB0byBkaXNwbGF5IHJlbmRlcmVkIG1hcmtkb3duIGZyb20gYSByYXcgc3RyaW5nLCBvciBmZXRjaGVkIGZyb20gYSBwcm92aWRlZCB1cmwuXHJcbiAqXHJcbiAqICFbXShodHRwczovL2kuaW1ndXIuY29tL05Nd001MEUucG5nKVxyXG4gKiBAcGFyYW0gIHtZb3VyUGx1Z2lufSBwbHVnaW5cclxuICogQHBhcmFtICB7c3RyaW5nfSBzb3VyY2UgUmF3IG1hcmtkb3duIGNvbnRlbnQgb3IgdXJsIHRvIGZpbmQgcmF3IG1hcmtkb3duLlxyXG4gKiBAcGFyYW0gIHtib29sZWFufSBmZXRjaCBUcnVlIOKGkiBmZXRjaCBtYXJrZG93biBmcm9tIGBzb3VyY2VgIGFzIHVybC4gRmFsc2Ug4oaSIGBzb3VyY2VgIGlzIGFscmVhZHkgYSBtYXJrZG93biBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVuZGVyZWRNYXJrZG93bk1vZGFsIGV4dGVuZHMgTW9kYWwge1xyXG4gICAgY29uc3RydWN0b3IocGx1Z2luLCBzb3VyY2UsIGZldGNoKSB7XHJcbiAgICAgICAgc3VwZXIoYXBwKTtcclxuICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmZldGNoID0gZmV0Y2g7XHJcbiAgICB9XHJcbiAgICBhc3luYyBvbk9wZW4oKSB7XHJcbiAgICAgICAgbGV0IHsgY29udGVudEVsLCBzb3VyY2UsIHBsdWdpbiwgZmV0Y2ggfSA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBzb3VyY2U7XHJcbiAgICAgICAgaWYgKGZldGNoKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnRFbC5jcmVhdGVEaXYoeyB0ZXh0OiBgV2FpdGluZyBmb3IgY29udGVudCBmcm9tOiAnJHtzb3VyY2V9J2AgfSk7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSBhd2FpdCByZXF1ZXN0KHsgdXJsOiBzb3VyY2UgfSk7XHJcbiAgICAgICAgICAgIGNvbnRlbnRFbC5lbXB0eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsb2dEaXYgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiBcIk9DTC1SZW5kZXJlZE1hcmtkb3duTW9kYWxcIiB9KTtcclxuICAgICAgICBNYXJrZG93blJlbmRlcmVyLnJlbmRlck1hcmtkb3duKGNvbnRlbnQsIGxvZ0RpdiwgXCJcIiwgcGx1Z2luKTtcclxuICAgIH1cclxuICAgIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQWRkIGEgYnV0dG9uIHRvIGFuIEhUTUxFTGVtZW50LCB3aGljaCwgd2hlbiBjbGlja2VkLCBwb3BzIHVwIGEge0BsaW5rIFJlbmRlcmVkTWFya2Rvd25Nb2RhbH0gc2hvd2luZyByZW5kZXJlZCBtYXJrZG93bi5cclxuICpcclxuICogVXNlIGBmZXRjaGAgdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgbWFya2Rvd24gc3RyaW5nIG5lZWRzIHRvIGJlIGZldGNoZWQsIG9yIGlmIGl0IGhhcyBiZWVuIHByb3ZpZGVkIGFzIGEgc3RyaW5nIGFscmVhZHkuXHJcbiAqXHJcbiAqICFbXShodHRwczovL2kuaW1ndXIuY29tL0hpNGd5eXYucG5nKVxyXG4gKiBAcGFyYW0gIHtZb3VyUGx1Z2lufSBwbHVnaW5cclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lckVsIEhUTUxFbGVtZW50IHRvIGFkZCB0aGUgYnV0dG9uIHRvXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gc291cmNlIFJhdyBtYXJrZG93biBjb250ZW50IG9yIHVybCB0byBmaW5kIHJhdyBtYXJrZG93bi5cclxuICogQHBhcmFtICB7Ym9vbGVhbn0gZmV0Y2ggVHJ1ZSDihpIgZmV0Y2ggbWFya2Rvd24gZnJvbSBgc291cmNlYCBhcyB1cmwuIEZhbHNlIOKGkiBgc291cmNlYCBpcyBhbHJlYWR5IGEgbWFya2Rvd24gc3RyaW5nLlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGRpc3BsYXlUZXh0IFRleHQgdG8gZGlzcGxheSBpbiB0aGUgYnV0dG9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJlbmRlcmVkTWFya2Rvd25CdXR0b24ocGx1Z2luLCBjb250YWluZXJFbCwgc291cmNlLCBmZXRjaCwgZGlzcGxheVRleHQpIHtcclxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogZGlzcGxheVRleHQgfSwgKGJ1dCkgPT4gYnV0Lm9uQ2xpY2tFdmVudCgoKSA9PiB7XHJcbiAgICAgICAgbmV3IFJlbmRlcmVkTWFya2Rvd25Nb2RhbChwbHVnaW4sIHNvdXJjZSwgZmV0Y2gpLm9wZW4oKTtcclxuICAgIH0pKTtcclxufVxyXG4vKipcclxuICogQ2hlY2sgaWYgYGFwcC5tZXRhZGF0YUNhY2hlLlJlc29sdmVkTGlua3NgIGhhdmUgZnVsbHkgaW5pdGFsaXNlZC5cclxuICpcclxuICogVXNlZCB3aXRoIHtAbGluayB3YWl0Rm9yUmVzb2x2ZWRMaW5rc30uXHJcbiAqIEBwYXJhbSAge251bWJlcn0gbm9GaWxlcyBOdW1iZXIgb2YgZmlsZXMgaW4geW91ciB2YXVsdC5cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZWRMaW5rc0NvbXBsZXRlKG5vRmlsZXMpIHtcclxuICAgIGNvbnN0IHsgcmVzb2x2ZWRMaW5rcyB9ID0gYXBwLm1ldGFkYXRhQ2FjaGU7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocmVzb2x2ZWRMaW5rcykubGVuZ3RoID09PSBub0ZpbGVzO1xyXG59XHJcbi8qKlxyXG4gKiBXYWl0IGZvciBgYXBwLm1ldGFkYXRhQ2FjaGUuUmVzb2x2ZWRMaW5rc2AgdG8gaGF2ZSBmdWxseSBpbml0aWFsaXNlZC5cclxuICogQHBhcmFtICB7bnVtYmVyfSBbZGVsYXk9MTAwMF0gTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJldHdlZW4gZWFjaCBjaGVjay5cclxuICogQHBhcmFtIHtudW1iZXJ9IFttYXg9NTBdIE1heGltdW0gbnVtYmVyIG9mIGl0ZXJhdGlvbnMgdG8gY2hlY2sgYmVmb3JlIHRocm93aW5nIGFuIGVycm9yIGFuZCBicmVha2luZyBvdXQgb2YgdGhlIGxvb3AuXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2FpdEZvclJlc29sdmVkTGlua3MoZGVsYXkgPSAxMDAwLCBtYXggPSA1MCkge1xyXG4gICAgY29uc3Qgbm9GaWxlcyA9IGFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkubGVuZ3RoO1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgd2hpbGUgKCFyZXNvbHZlZExpbmtzQ29tcGxldGUobm9GaWxlcykgJiYgaSA8IG1heCkge1xyXG4gICAgICAgIGF3YWl0IHdhaXQoZGVsYXkpO1xyXG4gICAgICAgIGkrKztcclxuICAgIH1cclxuICAgIGlmIChpID09PSBtYXgpIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihcIk9ic2lkaWFuLUNvbW11bml0eS1MaWI6IFJlc29sdmVkTGlua3MgZGlkIG5vdCBmaW5pc2ggaW5pdGlhbGlzaW5nLiBgbWF4YCBpdGVyYXRpb25zIHdhcyByZWFjaGVkIGZpcnN0LlwiKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhlIGNvbnRlbnQgb2YgYSBub3RlIGhhcyBZQU1MLiBJZiBzbywgcmV0dXJuIGFuIGFycmF5IG9mIHRoZSBZQU1MIGFuZCB0aGUgcmVzdCBvZiB0aGUgbm90ZS4gSWYgbm90LCByZXR1cm4gYFsnJywgY29udGVudF1gXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gY29udGVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0QXRZYW1sKGNvbnRlbnQpIHtcclxuICAgIGlmICghL14tLS1cXG4vLnRlc3QoY29udGVudCkpXHJcbiAgICAgICAgcmV0dXJuIFtcIlwiLCBjb250ZW50XTtcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHNwbGl0cyA9IGNvbnRlbnQuc3BsaXQoXCItLS1cIik7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgc3BsaXRzLnNsaWNlKDAsIDIpLmpvaW4oXCItLS1cIikgKyBcIi0tLVwiLFxyXG4gICAgICAgICAgICBzcGxpdHMuc2xpY2UoMikuam9pbihcIi0tLVwiKSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNhY2hlZCBSZXR1cm4gY2FjaGVkIGZpbGUgY29udGVudCAqKm9yKiogcmV0dXJuIHdoYXQncyBvbiBkaXNrLlxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjdGl2ZUZpbGVDb250ZW50KGNhY2hlZCA9IHRydWUpIHtcclxuICAgIGNvbnN0IGN1cnJGaWxlID0gYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVGaWxlKCk7XHJcbiAgICBpZiAoIShjdXJyRmlsZSBpbnN0YW5jZW9mIFRGaWxlKSlcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIGlmIChjYWNoZWQpXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGFwcC52YXVsdC5jYWNoZWRSZWFkKGN1cnJGaWxlKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gYXdhaXQgYXBwLnZhdWx0LnJlYWQoY3VyckZpbGUpO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG9ic2lkaWFuID0gcmVxdWlyZSgnb2JzaWRpYW4nKTtcblxuY29uc3QgREVGQVVMVF9EQUlMWV9OT1RFX0ZPUk1BVCA9IFwiWVlZWS1NTS1ERFwiO1xuY29uc3QgREVGQVVMVF9XRUVLTFlfTk9URV9GT1JNQVQgPSBcImdnZ2ctW1ddd3dcIjtcbmNvbnN0IERFRkFVTFRfTU9OVEhMWV9OT1RFX0ZPUk1BVCA9IFwiWVlZWS1NTVwiO1xuY29uc3QgREVGQVVMVF9RVUFSVEVSTFlfTk9URV9GT1JNQVQgPSBcIllZWVktW1FdUVwiO1xuY29uc3QgREVGQVVMVF9ZRUFSTFlfTk9URV9GT1JNQVQgPSBcIllZWVlcIjtcblxuZnVuY3Rpb24gc2hvdWxkVXNlUGVyaW9kaWNOb3Rlc1NldHRpbmdzKHBlcmlvZGljaXR5KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBjb25zdCBwZXJpb2RpY05vdGVzID0gd2luZG93LmFwcC5wbHVnaW5zLmdldFBsdWdpbihcInBlcmlvZGljLW5vdGVzXCIpO1xuICAgIHJldHVybiBwZXJpb2RpY05vdGVzICYmIHBlcmlvZGljTm90ZXMuc2V0dGluZ3M/LltwZXJpb2RpY2l0eV0/LmVuYWJsZWQ7XG59XG4vKipcbiAqIFJlYWQgdGhlIHVzZXIgc2V0dGluZ3MgZm9yIHRoZSBgZGFpbHktbm90ZXNgIHBsdWdpblxuICogdG8ga2VlcCBiZWhhdmlvciBvZiBjcmVhdGluZyBhIG5ldyBub3RlIGluLXN5bmMuXG4gKi9cbmZ1bmN0aW9uIGdldERhaWx5Tm90ZVNldHRpbmdzKCkge1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIGNvbnN0IHsgaW50ZXJuYWxQbHVnaW5zLCBwbHVnaW5zIH0gPSB3aW5kb3cuYXBwO1xuICAgICAgICBpZiAoc2hvdWxkVXNlUGVyaW9kaWNOb3Rlc1NldHRpbmdzKFwiZGFpbHlcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZm9ybWF0LCBmb2xkZXIsIHRlbXBsYXRlIH0gPSBwbHVnaW5zLmdldFBsdWdpbihcInBlcmlvZGljLW5vdGVzXCIpPy5zZXR0aW5ncz8uZGFpbHkgfHwge307XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0IHx8IERFRkFVTFRfREFJTFlfTk9URV9GT1JNQVQsXG4gICAgICAgICAgICAgICAgZm9sZGVyOiBmb2xkZXI/LnRyaW0oKSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZT8udHJpbSgpIHx8IFwiXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgZm9sZGVyLCBmb3JtYXQsIHRlbXBsYXRlIH0gPSBpbnRlcm5hbFBsdWdpbnMuZ2V0UGx1Z2luQnlJZChcImRhaWx5LW5vdGVzXCIpPy5pbnN0YW5jZT8ub3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0IHx8IERFRkFVTFRfREFJTFlfTk9URV9GT1JNQVQsXG4gICAgICAgICAgICBmb2xkZXI6IGZvbGRlcj8udHJpbSgpIHx8IFwiXCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGU/LnRyaW0oKSB8fCBcIlwiLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhcIk5vIGN1c3RvbSBkYWlseSBub3RlIHNldHRpbmdzIGZvdW5kIVwiLCBlcnIpO1xuICAgIH1cbn1cbi8qKlxuICogUmVhZCB0aGUgdXNlciBzZXR0aW5ncyBmb3IgdGhlIGB3ZWVrbHktbm90ZXNgIHBsdWdpblxuICogdG8ga2VlcCBiZWhhdmlvciBvZiBjcmVhdGluZyBhIG5ldyBub3RlIGluLXN5bmMuXG4gKi9cbmZ1bmN0aW9uIGdldFdlZWtseU5vdGVTZXR0aW5ncygpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICBjb25zdCBwbHVnaW5NYW5hZ2VyID0gd2luZG93LmFwcC5wbHVnaW5zO1xuICAgICAgICBjb25zdCBjYWxlbmRhclNldHRpbmdzID0gcGx1Z2luTWFuYWdlci5nZXRQbHVnaW4oXCJjYWxlbmRhclwiKT8ub3B0aW9ucztcbiAgICAgICAgY29uc3QgcGVyaW9kaWNOb3Rlc1NldHRpbmdzID0gcGx1Z2luTWFuYWdlci5nZXRQbHVnaW4oXCJwZXJpb2RpYy1ub3Rlc1wiKT8uc2V0dGluZ3M/LndlZWtseTtcbiAgICAgICAgaWYgKHNob3VsZFVzZVBlcmlvZGljTm90ZXNTZXR0aW5ncyhcIndlZWtseVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHBlcmlvZGljTm90ZXNTZXR0aW5ncy5mb3JtYXQgfHwgREVGQVVMVF9XRUVLTFlfTk9URV9GT1JNQVQsXG4gICAgICAgICAgICAgICAgZm9sZGVyOiBwZXJpb2RpY05vdGVzU2V0dGluZ3MuZm9sZGVyPy50cmltKCkgfHwgXCJcIixcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogcGVyaW9kaWNOb3Rlc1NldHRpbmdzLnRlbXBsYXRlPy50cmltKCkgfHwgXCJcIixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBjYWxlbmRhclNldHRpbmdzIHx8IHt9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9ybWF0OiBzZXR0aW5ncy53ZWVrbHlOb3RlRm9ybWF0IHx8IERFRkFVTFRfV0VFS0xZX05PVEVfRk9STUFULFxuICAgICAgICAgICAgZm9sZGVyOiBzZXR0aW5ncy53ZWVrbHlOb3RlRm9sZGVyPy50cmltKCkgfHwgXCJcIixcbiAgICAgICAgICAgIHRlbXBsYXRlOiBzZXR0aW5ncy53ZWVrbHlOb3RlVGVtcGxhdGU/LnRyaW0oKSB8fCBcIlwiLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhcIk5vIGN1c3RvbSB3ZWVrbHkgbm90ZSBzZXR0aW5ncyBmb3VuZCFcIiwgZXJyKTtcbiAgICB9XG59XG4vKipcbiAqIFJlYWQgdGhlIHVzZXIgc2V0dGluZ3MgZm9yIHRoZSBgcGVyaW9kaWMtbm90ZXNgIHBsdWdpblxuICogdG8ga2VlcCBiZWhhdmlvciBvZiBjcmVhdGluZyBhIG5ldyBub3RlIGluLXN5bmMuXG4gKi9cbmZ1bmN0aW9uIGdldE1vbnRobHlOb3RlU2V0dGluZ3MoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBjb25zdCBwbHVnaW5NYW5hZ2VyID0gd2luZG93LmFwcC5wbHVnaW5zO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gKHNob3VsZFVzZVBlcmlvZGljTm90ZXNTZXR0aW5ncyhcIm1vbnRobHlcIikgJiZcbiAgICAgICAgICAgIHBsdWdpbk1hbmFnZXIuZ2V0UGx1Z2luKFwicGVyaW9kaWMtbm90ZXNcIik/LnNldHRpbmdzPy5tb250aGx5KSB8fFxuICAgICAgICAgICAge307XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmb3JtYXQ6IHNldHRpbmdzLmZvcm1hdCB8fCBERUZBVUxUX01PTlRITFlfTk9URV9GT1JNQVQsXG4gICAgICAgICAgICBmb2xkZXI6IHNldHRpbmdzLmZvbGRlcj8udHJpbSgpIHx8IFwiXCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogc2V0dGluZ3MudGVtcGxhdGU/LnRyaW0oKSB8fCBcIlwiLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhcIk5vIGN1c3RvbSBtb250aGx5IG5vdGUgc2V0dGluZ3MgZm91bmQhXCIsIGVycik7XG4gICAgfVxufVxuLyoqXG4gKiBSZWFkIHRoZSB1c2VyIHNldHRpbmdzIGZvciB0aGUgYHBlcmlvZGljLW5vdGVzYCBwbHVnaW5cbiAqIHRvIGtlZXAgYmVoYXZpb3Igb2YgY3JlYXRpbmcgYSBuZXcgbm90ZSBpbi1zeW5jLlxuICovXG5mdW5jdGlvbiBnZXRRdWFydGVybHlOb3RlU2V0dGluZ3MoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBjb25zdCBwbHVnaW5NYW5hZ2VyID0gd2luZG93LmFwcC5wbHVnaW5zO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gKHNob3VsZFVzZVBlcmlvZGljTm90ZXNTZXR0aW5ncyhcInF1YXJ0ZXJseVwiKSAmJlxuICAgICAgICAgICAgcGx1Z2luTWFuYWdlci5nZXRQbHVnaW4oXCJwZXJpb2RpYy1ub3Rlc1wiKT8uc2V0dGluZ3M/LnF1YXJ0ZXJseSkgfHxcbiAgICAgICAgICAgIHt9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9ybWF0OiBzZXR0aW5ncy5mb3JtYXQgfHwgREVGQVVMVF9RVUFSVEVSTFlfTk9URV9GT1JNQVQsXG4gICAgICAgICAgICBmb2xkZXI6IHNldHRpbmdzLmZvbGRlcj8udHJpbSgpIHx8IFwiXCIsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogc2V0dGluZ3MudGVtcGxhdGU/LnRyaW0oKSB8fCBcIlwiLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhcIk5vIGN1c3RvbSBxdWFydGVybHkgbm90ZSBzZXR0aW5ncyBmb3VuZCFcIiwgZXJyKTtcbiAgICB9XG59XG4vKipcbiAqIFJlYWQgdGhlIHVzZXIgc2V0dGluZ3MgZm9yIHRoZSBgcGVyaW9kaWMtbm90ZXNgIHBsdWdpblxuICogdG8ga2VlcCBiZWhhdmlvciBvZiBjcmVhdGluZyBhIG5ldyBub3RlIGluLXN5bmMuXG4gKi9cbmZ1bmN0aW9uIGdldFllYXJseU5vdGVTZXR0aW5ncygpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIGNvbnN0IHBsdWdpbk1hbmFnZXIgPSB3aW5kb3cuYXBwLnBsdWdpbnM7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSAoc2hvdWxkVXNlUGVyaW9kaWNOb3Rlc1NldHRpbmdzKFwieWVhcmx5XCIpICYmXG4gICAgICAgICAgICBwbHVnaW5NYW5hZ2VyLmdldFBsdWdpbihcInBlcmlvZGljLW5vdGVzXCIpPy5zZXR0aW5ncz8ueWVhcmx5KSB8fFxuICAgICAgICAgICAge307XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmb3JtYXQ6IHNldHRpbmdzLmZvcm1hdCB8fCBERUZBVUxUX1lFQVJMWV9OT1RFX0ZPUk1BVCxcbiAgICAgICAgICAgIGZvbGRlcjogc2V0dGluZ3MuZm9sZGVyPy50cmltKCkgfHwgXCJcIixcbiAgICAgICAgICAgIHRlbXBsYXRlOiBzZXR0aW5ncy50ZW1wbGF0ZT8udHJpbSgpIHx8IFwiXCIsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKFwiTm8gY3VzdG9tIHllYXJseSBub3RlIHNldHRpbmdzIGZvdW5kIVwiLCBlcnIpO1xuICAgIH1cbn1cblxuLy8gQ3JlZGl0OiBAY3JlYXRpb25peC9wYXRoLmpzXG5mdW5jdGlvbiBqb2luKC4uLnBhcnRTZWdtZW50cykge1xuICAgIC8vIFNwbGl0IHRoZSBpbnB1dHMgaW50byBhIGxpc3Qgb2YgcGF0aCBjb21tYW5kcy5cbiAgICBsZXQgcGFydHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHBhcnRTZWdtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgcGFydHMgPSBwYXJ0cy5jb25jYXQocGFydFNlZ21lbnRzW2ldLnNwbGl0KFwiL1wiKSk7XG4gICAgfVxuICAgIC8vIEludGVycHJldCB0aGUgcGF0aCBjb21tYW5kcyB0byBnZXQgdGhlIG5ldyByZXNvbHZlZCBwYXRoLlxuICAgIGNvbnN0IG5ld1BhcnRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBwYXJ0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgcGFydCA9IHBhcnRzW2ldO1xuICAgICAgICAvLyBSZW1vdmUgbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlc1xuICAgICAgICAvLyBBbHNvIHJlbW92ZSBcIi5cIiBzZWdtZW50c1xuICAgICAgICBpZiAoIXBhcnQgfHwgcGFydCA9PT0gXCIuXCIpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgLy8gUHVzaCBuZXcgcGF0aCBzZWdtZW50cy5cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgbmV3UGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gICAgLy8gUHJlc2VydmUgdGhlIGluaXRpYWwgc2xhc2ggaWYgdGhlcmUgd2FzIG9uZS5cbiAgICBpZiAocGFydHNbMF0gPT09IFwiXCIpXG4gICAgICAgIG5ld1BhcnRzLnVuc2hpZnQoXCJcIik7XG4gICAgLy8gVHVybiBiYWNrIGludG8gYSBzaW5nbGUgc3RyaW5nIHBhdGguXG4gICAgcmV0dXJuIG5ld1BhcnRzLmpvaW4oXCIvXCIpO1xufVxuZnVuY3Rpb24gYmFzZW5hbWUoZnVsbFBhdGgpIHtcbiAgICBsZXQgYmFzZSA9IGZ1bGxQYXRoLnN1YnN0cmluZyhmdWxsUGF0aC5sYXN0SW5kZXhPZihcIi9cIikgKyAxKTtcbiAgICBpZiAoYmFzZS5sYXN0SW5kZXhPZihcIi5cIikgIT0gLTEpXG4gICAgICAgIGJhc2UgPSBiYXNlLnN1YnN0cmluZygwLCBiYXNlLmxhc3RJbmRleE9mKFwiLlwiKSk7XG4gICAgcmV0dXJuIGJhc2U7XG59XG5hc3luYyBmdW5jdGlvbiBlbnN1cmVGb2xkZXJFeGlzdHMocGF0aCkge1xuICAgIGNvbnN0IGRpcnMgPSBwYXRoLnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpLnNwbGl0KFwiL1wiKTtcbiAgICBkaXJzLnBvcCgpOyAvLyByZW1vdmUgYmFzZW5hbWVcbiAgICBpZiAoZGlycy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgZGlyID0gam9pbiguLi5kaXJzKTtcbiAgICAgICAgaWYgKCF3aW5kb3cuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChkaXIpKSB7XG4gICAgICAgICAgICBhd2FpdCB3aW5kb3cuYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihkaXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuYXN5bmMgZnVuY3Rpb24gZ2V0Tm90ZVBhdGgoZGlyZWN0b3J5LCBmaWxlbmFtZSkge1xuICAgIGlmICghZmlsZW5hbWUuZW5kc1dpdGgoXCIubWRcIikpIHtcbiAgICAgICAgZmlsZW5hbWUgKz0gXCIubWRcIjtcbiAgICB9XG4gICAgY29uc3QgcGF0aCA9IG9ic2lkaWFuLm5vcm1hbGl6ZVBhdGgoam9pbihkaXJlY3RvcnksIGZpbGVuYW1lKSk7XG4gICAgYXdhaXQgZW5zdXJlRm9sZGVyRXhpc3RzKHBhdGgpO1xuICAgIHJldHVybiBwYXRoO1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0VGVtcGxhdGVJbmZvKHRlbXBsYXRlKSB7XG4gICAgY29uc3QgeyBtZXRhZGF0YUNhY2hlLCB2YXVsdCB9ID0gd2luZG93LmFwcDtcbiAgICBjb25zdCB0ZW1wbGF0ZVBhdGggPSBvYnNpZGlhbi5ub3JtYWxpemVQYXRoKHRlbXBsYXRlKTtcbiAgICBpZiAodGVtcGxhdGVQYXRoID09PSBcIi9cIikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtcIlwiLCBudWxsXSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlRmlsZSA9IG1ldGFkYXRhQ2FjaGUuZ2V0Rmlyc3RMaW5rcGF0aERlc3QodGVtcGxhdGVQYXRoLCBcIlwiKTtcbiAgICAgICAgY29uc3QgY29udGVudHMgPSBhd2FpdCB2YXVsdC5jYWNoZWRSZWFkKHRlbXBsYXRlRmlsZSk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIGNvbnN0IElGb2xkSW5mbyA9IHdpbmRvdy5hcHAuZm9sZE1hbmFnZXIubG9hZCh0ZW1wbGF0ZUZpbGUpO1xuICAgICAgICByZXR1cm4gW2NvbnRlbnRzLCBJRm9sZEluZm9dO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byByZWFkIHRoZSBkYWlseSBub3RlIHRlbXBsYXRlICcke3RlbXBsYXRlUGF0aH0nYCwgZXJyKTtcbiAgICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShcIkZhaWxlZCB0byByZWFkIHRoZSBkYWlseSBub3RlIHRlbXBsYXRlXCIpO1xuICAgICAgICByZXR1cm4gW1wiXCIsIG51bGxdO1xuICAgIH1cbn1cblxuLyoqXG4gKiBkYXRlVUlEIGlzIGEgd2F5IG9mIHdlZWtseSBpZGVudGlmeWluZyBkYWlseS93ZWVrbHkvbW9udGhseSBub3Rlcy5cbiAqIFRoZXkgYXJlIHByZWZpeGVkIHdpdGggdGhlIGdyYW51bGFyaXR5IHRvIGF2b2lkIGFtYmlndWl0eS5cbiAqL1xuZnVuY3Rpb24gZ2V0RGF0ZVVJRChkYXRlLCBncmFudWxhcml0eSA9IFwiZGF5XCIpIHtcbiAgICBjb25zdCB0cyA9IGRhdGUuY2xvbmUoKS5zdGFydE9mKGdyYW51bGFyaXR5KS5mb3JtYXQoKTtcbiAgICByZXR1cm4gYCR7Z3JhbnVsYXJpdHl9LSR7dHN9YDtcbn1cbmZ1bmN0aW9uIHJlbW92ZUVzY2FwZWRDaGFyYWN0ZXJzKGZvcm1hdCkge1xuICAgIHJldHVybiBmb3JtYXQucmVwbGFjZSgvXFxbW15cXF1dKlxcXS9nLCBcIlwiKTsgLy8gcmVtb3ZlIGV2ZXJ5dGhpbmcgd2l0aGluIGJyYWNrZXRzXG59XG4vKipcbiAqIFhYWDogV2hlbiBwYXJzaW5nIGRhdGVzIHRoYXQgY29udGFpbiBib3RoIHdlZWsgbnVtYmVycyBhbmQgbW9udGhzLFxuICogTW9tZW50IGNob3NlcyB0byBpZ25vcmUgdGhlIHdlZWsgbnVtYmVycy4gRm9yIHRoZSB3ZWVrIGRhdGVVSUQsIHdlXG4gKiB3YW50IHRoZSBvcHBvc2l0ZSBiZWhhdmlvci4gU3RyaXAgdGhlIE1NTSBmcm9tIHRoZSBmb3JtYXQgdG8gcGF0Y2guXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybWF0QW1iaWd1b3VzKGZvcm1hdCwgZ3JhbnVsYXJpdHkpIHtcbiAgICBpZiAoZ3JhbnVsYXJpdHkgPT09IFwid2Vla1wiKSB7XG4gICAgICAgIGNvbnN0IGNsZWFuRm9ybWF0ID0gcmVtb3ZlRXNjYXBlZENoYXJhY3RlcnMoZm9ybWF0KTtcbiAgICAgICAgcmV0dXJuICgvd3sxLDJ9L2kudGVzdChjbGVhbkZvcm1hdCkgJiZcbiAgICAgICAgICAgICgvTXsxLDR9Ly50ZXN0KGNsZWFuRm9ybWF0KSB8fCAvRHsxLDR9Ly50ZXN0KGNsZWFuRm9ybWF0KSkpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBnZXREYXRlRnJvbUZpbGUoZmlsZSwgZ3JhbnVsYXJpdHkpIHtcbiAgICByZXR1cm4gZ2V0RGF0ZUZyb21GaWxlbmFtZShmaWxlLmJhc2VuYW1lLCBncmFudWxhcml0eSk7XG59XG5mdW5jdGlvbiBnZXREYXRlRnJvbVBhdGgocGF0aCwgZ3JhbnVsYXJpdHkpIHtcbiAgICByZXR1cm4gZ2V0RGF0ZUZyb21GaWxlbmFtZShiYXNlbmFtZShwYXRoKSwgZ3JhbnVsYXJpdHkpO1xufVxuZnVuY3Rpb24gZ2V0RGF0ZUZyb21GaWxlbmFtZShmaWxlbmFtZSwgZ3JhbnVsYXJpdHkpIHtcbiAgICBjb25zdCBnZXRTZXR0aW5ncyA9IHtcbiAgICAgICAgZGF5OiBnZXREYWlseU5vdGVTZXR0aW5ncyxcbiAgICAgICAgd2VlazogZ2V0V2Vla2x5Tm90ZVNldHRpbmdzLFxuICAgICAgICBtb250aDogZ2V0TW9udGhseU5vdGVTZXR0aW5ncyxcbiAgICAgICAgcXVhcnRlcjogZ2V0UXVhcnRlcmx5Tm90ZVNldHRpbmdzLFxuICAgICAgICB5ZWFyOiBnZXRZZWFybHlOb3RlU2V0dGluZ3MsXG4gICAgfTtcbiAgICBjb25zdCBmb3JtYXQgPSBnZXRTZXR0aW5nc1tncmFudWxhcml0eV0oKS5mb3JtYXQuc3BsaXQoXCIvXCIpLnBvcCgpO1xuICAgIGNvbnN0IG5vdGVEYXRlID0gd2luZG93Lm1vbWVudChmaWxlbmFtZSwgZm9ybWF0LCB0cnVlKTtcbiAgICBpZiAoIW5vdGVEYXRlLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGlzRm9ybWF0QW1iaWd1b3VzKGZvcm1hdCwgZ3JhbnVsYXJpdHkpKSB7XG4gICAgICAgIGlmIChncmFudWxhcml0eSA9PT0gXCJ3ZWVrXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsZWFuRm9ybWF0ID0gcmVtb3ZlRXNjYXBlZENoYXJhY3RlcnMoZm9ybWF0KTtcbiAgICAgICAgICAgIGlmICgvd3sxLDJ9L2kudGVzdChjbGVhbkZvcm1hdCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93Lm1vbWVudChmaWxlbmFtZSwgXG4gICAgICAgICAgICAgICAgLy8gSWYgZm9ybWF0IGNvbnRhaW5zIHdlZWssIHJlbW92ZSBkYXkgJiBtb250aCBmb3JtYXR0aW5nXG4gICAgICAgICAgICAgICAgZm9ybWF0LnJlcGxhY2UoL017MSw0fS9nLCBcIlwiKS5yZXBsYWNlKC9EezEsNH0vZywgXCJcIiksIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm90ZURhdGU7XG59XG5cbmNsYXNzIERhaWx5Tm90ZXNGb2xkZXJNaXNzaW5nRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG59XG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gbWltaWNzIHRoZSBiZWhhdmlvciBvZiB0aGUgZGFpbHktbm90ZXMgcGx1Z2luXG4gKiBzbyBpdCB3aWxsIHJlcGxhY2Uge3tkYXRlfX0sIHt7dGl0bGV9fSwgYW5kIHt7dGltZX19IHdpdGggdGhlXG4gKiBmb3JtYXR0ZWQgdGltZXN0YW1wLlxuICpcbiAqIE5vdGU6IGl0IGhhcyBhbiBhZGRlZCBib251cyB0aGF0IGl0J3Mgbm90ICd0b2RheScgc3BlY2lmaWMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURhaWx5Tm90ZShkYXRlKSB7XG4gICAgY29uc3QgYXBwID0gd2luZG93LmFwcDtcbiAgICBjb25zdCB7IHZhdWx0IH0gPSBhcHA7XG4gICAgY29uc3QgbW9tZW50ID0gd2luZG93Lm1vbWVudDtcbiAgICBjb25zdCB7IHRlbXBsYXRlLCBmb3JtYXQsIGZvbGRlciB9ID0gZ2V0RGFpbHlOb3RlU2V0dGluZ3MoKTtcbiAgICBjb25zdCBbdGVtcGxhdGVDb250ZW50cywgSUZvbGRJbmZvXSA9IGF3YWl0IGdldFRlbXBsYXRlSW5mbyh0ZW1wbGF0ZSk7XG4gICAgY29uc3QgZmlsZW5hbWUgPSBkYXRlLmZvcm1hdChmb3JtYXQpO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRQYXRoID0gYXdhaXQgZ2V0Tm90ZVBhdGgoZm9sZGVyLCBmaWxlbmFtZSk7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlYXRlZEZpbGUgPSBhd2FpdCB2YXVsdC5jcmVhdGUobm9ybWFsaXplZFBhdGgsIHRlbXBsYXRlQ29udGVudHNcbiAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccypkYXRlXFxzKn19L2dpLCBmaWxlbmFtZSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccyp0aW1lXFxzKn19L2dpLCBtb21lbnQoKS5mb3JtYXQoXCJISDptbVwiKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccyp0aXRsZVxccyp9fS9naSwgZmlsZW5hbWUpXG4gICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqKGRhdGV8dGltZSlcXHMqKChbKy1dXFxkKykoW3lxbXdkaHNdKSk/XFxzKig6Lis/KT99fS9naSwgKF8sIF90aW1lT3JEYXRlLCBjYWxjLCB0aW1lRGVsdGEsIHVuaXQsIG1vbWVudEZvcm1hdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gbW9tZW50KCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IGRhdGUuY2xvbmUoKS5zZXQoe1xuICAgICAgICAgICAgICAgIGhvdXI6IG5vdy5nZXQoXCJob3VyXCIpLFxuICAgICAgICAgICAgICAgIG1pbnV0ZTogbm93LmdldChcIm1pbnV0ZVwiKSxcbiAgICAgICAgICAgICAgICBzZWNvbmQ6IG5vdy5nZXQoXCJzZWNvbmRcIiksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjYWxjKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudERhdGUuYWRkKHBhcnNlSW50KHRpbWVEZWx0YSwgMTApLCB1bml0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb21lbnRGb3JtYXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudERhdGUuZm9ybWF0KG1vbWVudEZvcm1hdC5zdWJzdHJpbmcoMSkudHJpbSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50RGF0ZS5mb3JtYXQoZm9ybWF0KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccyp5ZXN0ZXJkYXlcXHMqfX0vZ2ksIGRhdGUuY2xvbmUoKS5zdWJ0cmFjdCgxLCBcImRheVwiKS5mb3JtYXQoZm9ybWF0KSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccyp0b21vcnJvd1xccyp9fS9naSwgZGF0ZS5jbG9uZSgpLmFkZCgxLCBcImRcIikuZm9ybWF0KGZvcm1hdCkpKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgYXBwLmZvbGRNYW5hZ2VyLnNhdmUoY3JlYXRlZEZpbGUsIElGb2xkSW5mbyk7XG4gICAgICAgIHJldHVybiBjcmVhdGVkRmlsZTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gY3JlYXRlIGZpbGU6ICcke25vcm1hbGl6ZWRQYXRofSdgLCBlcnIpO1xuICAgICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKFwiVW5hYmxlIHRvIGNyZWF0ZSBuZXcgZmlsZS5cIik7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0RGFpbHlOb3RlKGRhdGUsIGRhaWx5Tm90ZXMpIHtcbiAgICByZXR1cm4gZGFpbHlOb3Rlc1tnZXREYXRlVUlEKGRhdGUsIFwiZGF5XCIpXSA/PyBudWxsO1xufVxuZnVuY3Rpb24gZ2V0QWxsRGFpbHlOb3RlcygpIHtcbiAgICAvKipcbiAgICAgKiBGaW5kIGFsbCBkYWlseSBub3RlcyBpbiB0aGUgZGFpbHkgbm90ZSBmb2xkZXJcbiAgICAgKi9cbiAgICBjb25zdCB7IHZhdWx0IH0gPSB3aW5kb3cuYXBwO1xuICAgIGNvbnN0IHsgZm9sZGVyIH0gPSBnZXREYWlseU5vdGVTZXR0aW5ncygpO1xuICAgIGNvbnN0IGRhaWx5Tm90ZXNGb2xkZXIgPSB2YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgob2JzaWRpYW4ubm9ybWFsaXplUGF0aChmb2xkZXIpKTtcbiAgICBpZiAoIWRhaWx5Tm90ZXNGb2xkZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IERhaWx5Tm90ZXNGb2xkZXJNaXNzaW5nRXJyb3IoXCJGYWlsZWQgdG8gZmluZCBkYWlseSBub3RlcyBmb2xkZXJcIik7XG4gICAgfVxuICAgIGNvbnN0IGRhaWx5Tm90ZXMgPSB7fTtcbiAgICBvYnNpZGlhbi5WYXVsdC5yZWN1cnNlQ2hpbGRyZW4oZGFpbHlOb3Rlc0ZvbGRlciwgKG5vdGUpID0+IHtcbiAgICAgICAgaWYgKG5vdGUgaW5zdGFuY2VvZiBvYnNpZGlhbi5URmlsZSkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGdldERhdGVGcm9tRmlsZShub3RlLCBcImRheVwiKTtcbiAgICAgICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IGdldERhdGVVSUQoZGF0ZSwgXCJkYXlcIik7XG4gICAgICAgICAgICAgICAgZGFpbHlOb3Rlc1tkYXRlU3RyaW5nXSA9IG5vdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGFpbHlOb3Rlcztcbn1cblxuY2xhc3MgV2Vla2x5Tm90ZXNGb2xkZXJNaXNzaW5nRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG59XG5mdW5jdGlvbiBnZXREYXlzT2ZXZWVrKCkge1xuICAgIGNvbnN0IHsgbW9tZW50IH0gPSB3aW5kb3c7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBsZXQgd2Vla1N0YXJ0ID0gbW9tZW50LmxvY2FsZURhdGEoKS5fd2Vlay5kb3c7XG4gICAgY29uc3QgZGF5c09mV2VlayA9IFtcbiAgICAgICAgXCJzdW5kYXlcIixcbiAgICAgICAgXCJtb25kYXlcIixcbiAgICAgICAgXCJ0dWVzZGF5XCIsXG4gICAgICAgIFwid2VkbmVzZGF5XCIsXG4gICAgICAgIFwidGh1cnNkYXlcIixcbiAgICAgICAgXCJmcmlkYXlcIixcbiAgICAgICAgXCJzYXR1cmRheVwiLFxuICAgIF07XG4gICAgd2hpbGUgKHdlZWtTdGFydCkge1xuICAgICAgICBkYXlzT2ZXZWVrLnB1c2goZGF5c09mV2Vlay5zaGlmdCgpKTtcbiAgICAgICAgd2Vla1N0YXJ0LS07XG4gICAgfVxuICAgIHJldHVybiBkYXlzT2ZXZWVrO1xufVxuZnVuY3Rpb24gZ2V0RGF5T2ZXZWVrTnVtZXJpY2FsVmFsdWUoZGF5T2ZXZWVrTmFtZSkge1xuICAgIHJldHVybiBnZXREYXlzT2ZXZWVrKCkuaW5kZXhPZihkYXlPZldlZWtOYW1lLnRvTG93ZXJDYXNlKCkpO1xufVxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2Vla2x5Tm90ZShkYXRlKSB7XG4gICAgY29uc3QgeyB2YXVsdCB9ID0gd2luZG93LmFwcDtcbiAgICBjb25zdCB7IHRlbXBsYXRlLCBmb3JtYXQsIGZvbGRlciB9ID0gZ2V0V2Vla2x5Tm90ZVNldHRpbmdzKCk7XG4gICAgY29uc3QgW3RlbXBsYXRlQ29udGVudHMsIElGb2xkSW5mb10gPSBhd2FpdCBnZXRUZW1wbGF0ZUluZm8odGVtcGxhdGUpO1xuICAgIGNvbnN0IGZpbGVuYW1lID0gZGF0ZS5mb3JtYXQoZm9ybWF0KTtcbiAgICBjb25zdCBub3JtYWxpemVkUGF0aCA9IGF3YWl0IGdldE5vdGVQYXRoKGZvbGRlciwgZmlsZW5hbWUpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZWRGaWxlID0gYXdhaXQgdmF1bHQuY3JlYXRlKG5vcm1hbGl6ZWRQYXRoLCB0ZW1wbGF0ZUNvbnRlbnRzXG4gICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqKGRhdGV8dGltZSlcXHMqKChbKy1dXFxkKykoW3lxbXdkaHNdKSk/XFxzKig6Lis/KT99fS9naSwgKF8sIF90aW1lT3JEYXRlLCBjYWxjLCB0aW1lRGVsdGEsIHVuaXQsIG1vbWVudEZvcm1hdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gd2luZG93Lm1vbWVudCgpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBkYXRlLmNsb25lKCkuc2V0KHtcbiAgICAgICAgICAgICAgICBob3VyOiBub3cuZ2V0KFwiaG91clwiKSxcbiAgICAgICAgICAgICAgICBtaW51dGU6IG5vdy5nZXQoXCJtaW51dGVcIiksXG4gICAgICAgICAgICAgICAgc2Vjb25kOiBub3cuZ2V0KFwic2Vjb25kXCIpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY2FsYykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlLmFkZChwYXJzZUludCh0aW1lRGVsdGEsIDEwKSwgdW5pdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobW9tZW50Rm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnREYXRlLmZvcm1hdChtb21lbnRGb3JtYXQuc3Vic3RyaW5nKDEpLnRyaW0oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudERhdGUuZm9ybWF0KGZvcm1hdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqdGl0bGVcXHMqfX0vZ2ksIGZpbGVuYW1lKVxuICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKnRpbWVcXHMqfX0vZ2ksIHdpbmRvdy5tb21lbnQoKS5mb3JtYXQoXCJISDptbVwiKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccyooc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpXFxzKjooLio/KX19L2dpLCAoXywgZGF5T2ZXZWVrLCBtb21lbnRGb3JtYXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRheSA9IGdldERheU9mV2Vla051bWVyaWNhbFZhbHVlKGRheU9mV2Vlayk7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS53ZWVrZGF5KGRheSkuZm9ybWF0KG1vbWVudEZvcm1hdC50cmltKCkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIHdpbmRvdy5hcHAuZm9sZE1hbmFnZXIuc2F2ZShjcmVhdGVkRmlsZSwgSUZvbGRJbmZvKTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZWRGaWxlO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBjcmVhdGUgZmlsZTogJyR7bm9ybWFsaXplZFBhdGh9J2AsIGVycik7XG4gICAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoXCJVbmFibGUgdG8gY3JlYXRlIG5ldyBmaWxlLlwiKTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRXZWVrbHlOb3RlKGRhdGUsIHdlZWtseU5vdGVzKSB7XG4gICAgcmV0dXJuIHdlZWtseU5vdGVzW2dldERhdGVVSUQoZGF0ZSwgXCJ3ZWVrXCIpXSA/PyBudWxsO1xufVxuZnVuY3Rpb24gZ2V0QWxsV2Vla2x5Tm90ZXMoKSB7XG4gICAgY29uc3Qgd2Vla2x5Tm90ZXMgPSB7fTtcbiAgICBpZiAoIWFwcEhhc1dlZWtseU5vdGVzUGx1Z2luTG9hZGVkKCkpIHtcbiAgICAgICAgcmV0dXJuIHdlZWtseU5vdGVzO1xuICAgIH1cbiAgICBjb25zdCB7IHZhdWx0IH0gPSB3aW5kb3cuYXBwO1xuICAgIGNvbnN0IHsgZm9sZGVyIH0gPSBnZXRXZWVrbHlOb3RlU2V0dGluZ3MoKTtcbiAgICBjb25zdCB3ZWVrbHlOb3Rlc0ZvbGRlciA9IHZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChvYnNpZGlhbi5ub3JtYWxpemVQYXRoKGZvbGRlcikpO1xuICAgIGlmICghd2Vla2x5Tm90ZXNGb2xkZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdlZWtseU5vdGVzRm9sZGVyTWlzc2luZ0Vycm9yKFwiRmFpbGVkIHRvIGZpbmQgd2Vla2x5IG5vdGVzIGZvbGRlclwiKTtcbiAgICB9XG4gICAgb2JzaWRpYW4uVmF1bHQucmVjdXJzZUNoaWxkcmVuKHdlZWtseU5vdGVzRm9sZGVyLCAobm90ZSkgPT4ge1xuICAgICAgICBpZiAobm90ZSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGaWxlKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gZ2V0RGF0ZUZyb21GaWxlKG5vdGUsIFwid2Vla1wiKTtcbiAgICAgICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IGdldERhdGVVSUQoZGF0ZSwgXCJ3ZWVrXCIpO1xuICAgICAgICAgICAgICAgIHdlZWtseU5vdGVzW2RhdGVTdHJpbmddID0gbm90ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB3ZWVrbHlOb3Rlcztcbn1cblxuY2xhc3MgTW9udGhseU5vdGVzRm9sZGVyTWlzc2luZ0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIG1pbWljcyB0aGUgYmVoYXZpb3Igb2YgdGhlIGRhaWx5LW5vdGVzIHBsdWdpblxuICogc28gaXQgd2lsbCByZXBsYWNlIHt7ZGF0ZX19LCB7e3RpdGxlfX0sIGFuZCB7e3RpbWV9fSB3aXRoIHRoZVxuICogZm9ybWF0dGVkIHRpbWVzdGFtcC5cbiAqXG4gKiBOb3RlOiBpdCBoYXMgYW4gYWRkZWQgYm9udXMgdGhhdCBpdCdzIG5vdCAndG9kYXknIHNwZWNpZmljLlxuICovXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVNb250aGx5Tm90ZShkYXRlKSB7XG4gICAgY29uc3QgeyB2YXVsdCB9ID0gd2luZG93LmFwcDtcbiAgICBjb25zdCB7IHRlbXBsYXRlLCBmb3JtYXQsIGZvbGRlciB9ID0gZ2V0TW9udGhseU5vdGVTZXR0aW5ncygpO1xuICAgIGNvbnN0IFt0ZW1wbGF0ZUNvbnRlbnRzLCBJRm9sZEluZm9dID0gYXdhaXQgZ2V0VGVtcGxhdGVJbmZvKHRlbXBsYXRlKTtcbiAgICBjb25zdCBmaWxlbmFtZSA9IGRhdGUuZm9ybWF0KGZvcm1hdCk7XG4gICAgY29uc3Qgbm9ybWFsaXplZFBhdGggPSBhd2FpdCBnZXROb3RlUGF0aChmb2xkZXIsIGZpbGVuYW1lKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjcmVhdGVkRmlsZSA9IGF3YWl0IHZhdWx0LmNyZWF0ZShub3JtYWxpemVkUGF0aCwgdGVtcGxhdGVDb250ZW50c1xuICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKihkYXRlfHRpbWUpXFxzKigoWystXVxcZCspKFt5cW13ZGhzXSkpP1xccyooOi4rPyk/fX0vZ2ksIChfLCBfdGltZU9yRGF0ZSwgY2FsYywgdGltZURlbHRhLCB1bml0LCBtb21lbnRGb3JtYXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IHdpbmRvdy5tb21lbnQoKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gZGF0ZS5jbG9uZSgpLnNldCh7XG4gICAgICAgICAgICAgICAgaG91cjogbm93LmdldChcImhvdXJcIiksXG4gICAgICAgICAgICAgICAgbWludXRlOiBub3cuZ2V0KFwibWludXRlXCIpLFxuICAgICAgICAgICAgICAgIHNlY29uZDogbm93LmdldChcInNlY29uZFwiKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNhbGMpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZS5hZGQocGFyc2VJbnQodGltZURlbHRhLCAxMCksIHVuaXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1vbWVudEZvcm1hdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50RGF0ZS5mb3JtYXQobW9tZW50Rm9ybWF0LnN1YnN0cmluZygxKS50cmltKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnREYXRlLmZvcm1hdChmb3JtYXQpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKmRhdGVcXHMqfX0vZ2ksIGZpbGVuYW1lKVxuICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKnRpbWVcXHMqfX0vZ2ksIHdpbmRvdy5tb21lbnQoKS5mb3JtYXQoXCJISDptbVwiKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccyp0aXRsZVxccyp9fS9naSwgZmlsZW5hbWUpKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgd2luZG93LmFwcC5mb2xkTWFuYWdlci5zYXZlKGNyZWF0ZWRGaWxlLCBJRm9sZEluZm8pO1xuICAgICAgICByZXR1cm4gY3JlYXRlZEZpbGU7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGNyZWF0ZSBmaWxlOiAnJHtub3JtYWxpemVkUGF0aH0nYCwgZXJyKTtcbiAgICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShcIlVuYWJsZSB0byBjcmVhdGUgbmV3IGZpbGUuXCIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldE1vbnRobHlOb3RlKGRhdGUsIG1vbnRobHlOb3Rlcykge1xuICAgIHJldHVybiBtb250aGx5Tm90ZXNbZ2V0RGF0ZVVJRChkYXRlLCBcIm1vbnRoXCIpXSA/PyBudWxsO1xufVxuZnVuY3Rpb24gZ2V0QWxsTW9udGhseU5vdGVzKCkge1xuICAgIGNvbnN0IG1vbnRobHlOb3RlcyA9IHt9O1xuICAgIGlmICghYXBwSGFzTW9udGhseU5vdGVzUGx1Z2luTG9hZGVkKCkpIHtcbiAgICAgICAgcmV0dXJuIG1vbnRobHlOb3RlcztcbiAgICB9XG4gICAgY29uc3QgeyB2YXVsdCB9ID0gd2luZG93LmFwcDtcbiAgICBjb25zdCB7IGZvbGRlciB9ID0gZ2V0TW9udGhseU5vdGVTZXR0aW5ncygpO1xuICAgIGNvbnN0IG1vbnRobHlOb3Rlc0ZvbGRlciA9IHZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChvYnNpZGlhbi5ub3JtYWxpemVQYXRoKGZvbGRlcikpO1xuICAgIGlmICghbW9udGhseU5vdGVzRm9sZGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBNb250aGx5Tm90ZXNGb2xkZXJNaXNzaW5nRXJyb3IoXCJGYWlsZWQgdG8gZmluZCBtb250aGx5IG5vdGVzIGZvbGRlclwiKTtcbiAgICB9XG4gICAgb2JzaWRpYW4uVmF1bHQucmVjdXJzZUNoaWxkcmVuKG1vbnRobHlOb3Rlc0ZvbGRlciwgKG5vdGUpID0+IHtcbiAgICAgICAgaWYgKG5vdGUgaW5zdGFuY2VvZiBvYnNpZGlhbi5URmlsZSkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGdldERhdGVGcm9tRmlsZShub3RlLCBcIm1vbnRoXCIpO1xuICAgICAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gZ2V0RGF0ZVVJRChkYXRlLCBcIm1vbnRoXCIpO1xuICAgICAgICAgICAgICAgIG1vbnRobHlOb3Rlc1tkYXRlU3RyaW5nXSA9IG5vdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbW9udGhseU5vdGVzO1xufVxuXG5jbGFzcyBRdWFydGVybHlOb3Rlc0ZvbGRlck1pc3NpbmdFcnJvciBleHRlbmRzIEVycm9yIHtcbn1cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBtaW1pY3MgdGhlIGJlaGF2aW9yIG9mIHRoZSBkYWlseS1ub3RlcyBwbHVnaW5cbiAqIHNvIGl0IHdpbGwgcmVwbGFjZSB7e2RhdGV9fSwge3t0aXRsZX19LCBhbmQge3t0aW1lfX0gd2l0aCB0aGVcbiAqIGZvcm1hdHRlZCB0aW1lc3RhbXAuXG4gKlxuICogTm90ZTogaXQgaGFzIGFuIGFkZGVkIGJvbnVzIHRoYXQgaXQncyBub3QgJ3RvZGF5JyBzcGVjaWZpYy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY3JlYXRlUXVhcnRlcmx5Tm90ZShkYXRlKSB7XG4gICAgY29uc3QgeyB2YXVsdCB9ID0gd2luZG93LmFwcDtcbiAgICBjb25zdCB7IHRlbXBsYXRlLCBmb3JtYXQsIGZvbGRlciB9ID0gZ2V0UXVhcnRlcmx5Tm90ZVNldHRpbmdzKCk7XG4gICAgY29uc3QgW3RlbXBsYXRlQ29udGVudHMsIElGb2xkSW5mb10gPSBhd2FpdCBnZXRUZW1wbGF0ZUluZm8odGVtcGxhdGUpO1xuICAgIGNvbnN0IGZpbGVuYW1lID0gZGF0ZS5mb3JtYXQoZm9ybWF0KTtcbiAgICBjb25zdCBub3JtYWxpemVkUGF0aCA9IGF3YWl0IGdldE5vdGVQYXRoKGZvbGRlciwgZmlsZW5hbWUpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZWRGaWxlID0gYXdhaXQgdmF1bHQuY3JlYXRlKG5vcm1hbGl6ZWRQYXRoLCB0ZW1wbGF0ZUNvbnRlbnRzXG4gICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqKGRhdGV8dGltZSlcXHMqKChbKy1dXFxkKykoW3lxbXdkaHNdKSk/XFxzKig6Lis/KT99fS9naSwgKF8sIF90aW1lT3JEYXRlLCBjYWxjLCB0aW1lRGVsdGEsIHVuaXQsIG1vbWVudEZvcm1hdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gd2luZG93Lm1vbWVudCgpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBkYXRlLmNsb25lKCkuc2V0KHtcbiAgICAgICAgICAgICAgICBob3VyOiBub3cuZ2V0KFwiaG91clwiKSxcbiAgICAgICAgICAgICAgICBtaW51dGU6IG5vdy5nZXQoXCJtaW51dGVcIiksXG4gICAgICAgICAgICAgICAgc2Vjb25kOiBub3cuZ2V0KFwic2Vjb25kXCIpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY2FsYykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlLmFkZChwYXJzZUludCh0aW1lRGVsdGEsIDEwKSwgdW5pdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobW9tZW50Rm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnREYXRlLmZvcm1hdChtb21lbnRGb3JtYXQuc3Vic3RyaW5nKDEpLnRyaW0oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudERhdGUuZm9ybWF0KGZvcm1hdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqZGF0ZVxccyp9fS9naSwgZmlsZW5hbWUpXG4gICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqdGltZVxccyp9fS9naSwgd2luZG93Lm1vbWVudCgpLmZvcm1hdChcIkhIOm1tXCIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKnRpdGxlXFxzKn19L2dpLCBmaWxlbmFtZSkpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB3aW5kb3cuYXBwLmZvbGRNYW5hZ2VyLnNhdmUoY3JlYXRlZEZpbGUsIElGb2xkSW5mbyk7XG4gICAgICAgIHJldHVybiBjcmVhdGVkRmlsZTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gY3JlYXRlIGZpbGU6ICcke25vcm1hbGl6ZWRQYXRofSdgLCBlcnIpO1xuICAgICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKFwiVW5hYmxlIHRvIGNyZWF0ZSBuZXcgZmlsZS5cIik7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0UXVhcnRlcmx5Tm90ZShkYXRlLCBxdWFydGVybHkpIHtcbiAgICByZXR1cm4gcXVhcnRlcmx5W2dldERhdGVVSUQoZGF0ZSwgXCJxdWFydGVyXCIpXSA/PyBudWxsO1xufVxuZnVuY3Rpb24gZ2V0QWxsUXVhcnRlcmx5Tm90ZXMoKSB7XG4gICAgY29uc3QgcXVhcnRlcmx5ID0ge307XG4gICAgaWYgKCFhcHBIYXNRdWFydGVybHlOb3Rlc1BsdWdpbkxvYWRlZCgpKSB7XG4gICAgICAgIHJldHVybiBxdWFydGVybHk7XG4gICAgfVxuICAgIGNvbnN0IHsgdmF1bHQgfSA9IHdpbmRvdy5hcHA7XG4gICAgY29uc3QgeyBmb2xkZXIgfSA9IGdldFF1YXJ0ZXJseU5vdGVTZXR0aW5ncygpO1xuICAgIGNvbnN0IHF1YXJ0ZXJseUZvbGRlciA9IHZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChvYnNpZGlhbi5ub3JtYWxpemVQYXRoKGZvbGRlcikpO1xuICAgIGlmICghcXVhcnRlcmx5Rm9sZGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBRdWFydGVybHlOb3Rlc0ZvbGRlck1pc3NpbmdFcnJvcihcIkZhaWxlZCB0byBmaW5kIHF1YXJ0ZXJseSBub3RlcyBmb2xkZXJcIik7XG4gICAgfVxuICAgIG9ic2lkaWFuLlZhdWx0LnJlY3Vyc2VDaGlsZHJlbihxdWFydGVybHlGb2xkZXIsIChub3RlKSA9PiB7XG4gICAgICAgIGlmIChub3RlIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBnZXREYXRlRnJvbUZpbGUobm90ZSwgXCJxdWFydGVyXCIpO1xuICAgICAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gZ2V0RGF0ZVVJRChkYXRlLCBcInF1YXJ0ZXJcIik7XG4gICAgICAgICAgICAgICAgcXVhcnRlcmx5W2RhdGVTdHJpbmddID0gbm90ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBxdWFydGVybHk7XG59XG5cbmNsYXNzIFllYXJseU5vdGVzRm9sZGVyTWlzc2luZ0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIG1pbWljcyB0aGUgYmVoYXZpb3Igb2YgdGhlIGRhaWx5LW5vdGVzIHBsdWdpblxuICogc28gaXQgd2lsbCByZXBsYWNlIHt7ZGF0ZX19LCB7e3RpdGxlfX0sIGFuZCB7e3RpbWV9fSB3aXRoIHRoZVxuICogZm9ybWF0dGVkIHRpbWVzdGFtcC5cbiAqXG4gKiBOb3RlOiBpdCBoYXMgYW4gYWRkZWQgYm9udXMgdGhhdCBpdCdzIG5vdCAndG9kYXknIHNwZWNpZmljLlxuICovXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVZZWFybHlOb3RlKGRhdGUpIHtcbiAgICBjb25zdCB7IHZhdWx0IH0gPSB3aW5kb3cuYXBwO1xuICAgIGNvbnN0IHsgdGVtcGxhdGUsIGZvcm1hdCwgZm9sZGVyIH0gPSBnZXRZZWFybHlOb3RlU2V0dGluZ3MoKTtcbiAgICBjb25zdCBbdGVtcGxhdGVDb250ZW50cywgSUZvbGRJbmZvXSA9IGF3YWl0IGdldFRlbXBsYXRlSW5mbyh0ZW1wbGF0ZSk7XG4gICAgY29uc3QgZmlsZW5hbWUgPSBkYXRlLmZvcm1hdChmb3JtYXQpO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRQYXRoID0gYXdhaXQgZ2V0Tm90ZVBhdGgoZm9sZGVyLCBmaWxlbmFtZSk7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlYXRlZEZpbGUgPSBhd2FpdCB2YXVsdC5jcmVhdGUobm9ybWFsaXplZFBhdGgsIHRlbXBsYXRlQ29udGVudHNcbiAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccyooZGF0ZXx0aW1lKVxccyooKFsrLV1cXGQrKShbeXFtd2Roc10pKT9cXHMqKDouKz8pP319L2dpLCAoXywgX3RpbWVPckRhdGUsIGNhbGMsIHRpbWVEZWx0YSwgdW5pdCwgbW9tZW50Rm9ybWF0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub3cgPSB3aW5kb3cubW9tZW50KCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IGRhdGUuY2xvbmUoKS5zZXQoe1xuICAgICAgICAgICAgICAgIGhvdXI6IG5vdy5nZXQoXCJob3VyXCIpLFxuICAgICAgICAgICAgICAgIG1pbnV0ZTogbm93LmdldChcIm1pbnV0ZVwiKSxcbiAgICAgICAgICAgICAgICBzZWNvbmQ6IG5vdy5nZXQoXCJzZWNvbmRcIiksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjYWxjKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudERhdGUuYWRkKHBhcnNlSW50KHRpbWVEZWx0YSwgMTApLCB1bml0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb21lbnRGb3JtYXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudERhdGUuZm9ybWF0KG1vbWVudEZvcm1hdC5zdWJzdHJpbmcoMSkudHJpbSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50RGF0ZS5mb3JtYXQoZm9ybWF0KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccypkYXRlXFxzKn19L2dpLCBmaWxlbmFtZSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccyp0aW1lXFxzKn19L2dpLCB3aW5kb3cubW9tZW50KCkuZm9ybWF0KFwiSEg6bW1cIikpXG4gICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqdGl0bGVcXHMqfX0vZ2ksIGZpbGVuYW1lKSk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIHdpbmRvdy5hcHAuZm9sZE1hbmFnZXIuc2F2ZShjcmVhdGVkRmlsZSwgSUZvbGRJbmZvKTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZWRGaWxlO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBjcmVhdGUgZmlsZTogJyR7bm9ybWFsaXplZFBhdGh9J2AsIGVycik7XG4gICAgICAgIG5ldyBvYnNpZGlhbi5Ob3RpY2UoXCJVbmFibGUgdG8gY3JlYXRlIG5ldyBmaWxlLlwiKTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRZZWFybHlOb3RlKGRhdGUsIHllYXJseU5vdGVzKSB7XG4gICAgcmV0dXJuIHllYXJseU5vdGVzW2dldERhdGVVSUQoZGF0ZSwgXCJ5ZWFyXCIpXSA/PyBudWxsO1xufVxuZnVuY3Rpb24gZ2V0QWxsWWVhcmx5Tm90ZXMoKSB7XG4gICAgY29uc3QgeWVhcmx5Tm90ZXMgPSB7fTtcbiAgICBpZiAoIWFwcEhhc1llYXJseU5vdGVzUGx1Z2luTG9hZGVkKCkpIHtcbiAgICAgICAgcmV0dXJuIHllYXJseU5vdGVzO1xuICAgIH1cbiAgICBjb25zdCB7IHZhdWx0IH0gPSB3aW5kb3cuYXBwO1xuICAgIGNvbnN0IHsgZm9sZGVyIH0gPSBnZXRZZWFybHlOb3RlU2V0dGluZ3MoKTtcbiAgICBjb25zdCB5ZWFybHlOb3Rlc0ZvbGRlciA9IHZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChvYnNpZGlhbi5ub3JtYWxpemVQYXRoKGZvbGRlcikpO1xuICAgIGlmICgheWVhcmx5Tm90ZXNGb2xkZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFllYXJseU5vdGVzRm9sZGVyTWlzc2luZ0Vycm9yKFwiRmFpbGVkIHRvIGZpbmQgeWVhcmx5IG5vdGVzIGZvbGRlclwiKTtcbiAgICB9XG4gICAgb2JzaWRpYW4uVmF1bHQucmVjdXJzZUNoaWxkcmVuKHllYXJseU5vdGVzRm9sZGVyLCAobm90ZSkgPT4ge1xuICAgICAgICBpZiAobm90ZSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGaWxlKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gZ2V0RGF0ZUZyb21GaWxlKG5vdGUsIFwieWVhclwiKTtcbiAgICAgICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IGdldERhdGVVSUQoZGF0ZSwgXCJ5ZWFyXCIpO1xuICAgICAgICAgICAgICAgIHllYXJseU5vdGVzW2RhdGVTdHJpbmddID0gbm90ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB5ZWFybHlOb3Rlcztcbn1cblxuZnVuY3Rpb24gYXBwSGFzRGFpbHlOb3Rlc1BsdWdpbkxvYWRlZCgpIHtcbiAgICBjb25zdCB7IGFwcCB9ID0gd2luZG93O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgY29uc3QgZGFpbHlOb3Rlc1BsdWdpbiA9IGFwcC5pbnRlcm5hbFBsdWdpbnMucGx1Z2luc1tcImRhaWx5LW5vdGVzXCJdO1xuICAgIGlmIChkYWlseU5vdGVzUGx1Z2luICYmIGRhaWx5Tm90ZXNQbHVnaW4uZW5hYmxlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBjb25zdCBwZXJpb2RpY05vdGVzID0gYXBwLnBsdWdpbnMuZ2V0UGx1Z2luKFwicGVyaW9kaWMtbm90ZXNcIik7XG4gICAgcmV0dXJuIHBlcmlvZGljTm90ZXMgJiYgcGVyaW9kaWNOb3Rlcy5zZXR0aW5ncz8uZGFpbHk/LmVuYWJsZWQ7XG59XG4vKipcbiAqIFhYWDogXCJXZWVrbHkgTm90ZXNcIiBsaXZlIGluIGVpdGhlciB0aGUgQ2FsZW5kYXIgcGx1Z2luIG9yIHRoZSBwZXJpb2RpYy1ub3RlcyBwbHVnaW4uXG4gKiBDaGVjayBib3RoIHVudGlsIHRoZSB3ZWVrbHkgbm90ZXMgZmVhdHVyZSBpcyByZW1vdmVkIGZyb20gdGhlIENhbGVuZGFyIHBsdWdpbi5cbiAqL1xuZnVuY3Rpb24gYXBwSGFzV2Vla2x5Tm90ZXNQbHVnaW5Mb2FkZWQoKSB7XG4gICAgY29uc3QgeyBhcHAgfSA9IHdpbmRvdztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIGlmIChhcHAucGx1Z2lucy5nZXRQbHVnaW4oXCJjYWxlbmRhclwiKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBjb25zdCBwZXJpb2RpY05vdGVzID0gYXBwLnBsdWdpbnMuZ2V0UGx1Z2luKFwicGVyaW9kaWMtbm90ZXNcIik7XG4gICAgcmV0dXJuIHBlcmlvZGljTm90ZXMgJiYgcGVyaW9kaWNOb3Rlcy5zZXR0aW5ncz8ud2Vla2x5Py5lbmFibGVkO1xufVxuZnVuY3Rpb24gYXBwSGFzTW9udGhseU5vdGVzUGx1Z2luTG9hZGVkKCkge1xuICAgIGNvbnN0IHsgYXBwIH0gPSB3aW5kb3c7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBjb25zdCBwZXJpb2RpY05vdGVzID0gYXBwLnBsdWdpbnMuZ2V0UGx1Z2luKFwicGVyaW9kaWMtbm90ZXNcIik7XG4gICAgcmV0dXJuIHBlcmlvZGljTm90ZXMgJiYgcGVyaW9kaWNOb3Rlcy5zZXR0aW5ncz8ubW9udGhseT8uZW5hYmxlZDtcbn1cbmZ1bmN0aW9uIGFwcEhhc1F1YXJ0ZXJseU5vdGVzUGx1Z2luTG9hZGVkKCkge1xuICAgIGNvbnN0IHsgYXBwIH0gPSB3aW5kb3c7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBjb25zdCBwZXJpb2RpY05vdGVzID0gYXBwLnBsdWdpbnMuZ2V0UGx1Z2luKFwicGVyaW9kaWMtbm90ZXNcIik7XG4gICAgcmV0dXJuIHBlcmlvZGljTm90ZXMgJiYgcGVyaW9kaWNOb3Rlcy5zZXR0aW5ncz8ucXVhcnRlcmx5Py5lbmFibGVkO1xufVxuZnVuY3Rpb24gYXBwSGFzWWVhcmx5Tm90ZXNQbHVnaW5Mb2FkZWQoKSB7XG4gICAgY29uc3QgeyBhcHAgfSA9IHdpbmRvdztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIGNvbnN0IHBlcmlvZGljTm90ZXMgPSBhcHAucGx1Z2lucy5nZXRQbHVnaW4oXCJwZXJpb2RpYy1ub3Rlc1wiKTtcbiAgICByZXR1cm4gcGVyaW9kaWNOb3RlcyAmJiBwZXJpb2RpY05vdGVzLnNldHRpbmdzPy55ZWFybHk/LmVuYWJsZWQ7XG59XG5mdW5jdGlvbiBnZXRQZXJpb2RpY05vdGVTZXR0aW5ncyhncmFudWxhcml0eSkge1xuICAgIGNvbnN0IGdldFNldHRpbmdzID0ge1xuICAgICAgICBkYXk6IGdldERhaWx5Tm90ZVNldHRpbmdzLFxuICAgICAgICB3ZWVrOiBnZXRXZWVrbHlOb3RlU2V0dGluZ3MsXG4gICAgICAgIG1vbnRoOiBnZXRNb250aGx5Tm90ZVNldHRpbmdzLFxuICAgICAgICBxdWFydGVyOiBnZXRRdWFydGVybHlOb3RlU2V0dGluZ3MsXG4gICAgICAgIHllYXI6IGdldFllYXJseU5vdGVTZXR0aW5ncyxcbiAgICB9W2dyYW51bGFyaXR5XTtcbiAgICByZXR1cm4gZ2V0U2V0dGluZ3MoKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVBlcmlvZGljTm90ZShncmFudWxhcml0eSwgZGF0ZSkge1xuICAgIGNvbnN0IGNyZWF0ZUZuID0ge1xuICAgICAgICBkYXk6IGNyZWF0ZURhaWx5Tm90ZSxcbiAgICAgICAgbW9udGg6IGNyZWF0ZU1vbnRobHlOb3RlLFxuICAgICAgICB3ZWVrOiBjcmVhdGVXZWVrbHlOb3RlLFxuICAgIH07XG4gICAgcmV0dXJuIGNyZWF0ZUZuW2dyYW51bGFyaXR5XShkYXRlKTtcbn1cblxuZXhwb3J0cy5ERUZBVUxUX0RBSUxZX05PVEVfRk9STUFUID0gREVGQVVMVF9EQUlMWV9OT1RFX0ZPUk1BVDtcbmV4cG9ydHMuREVGQVVMVF9NT05USExZX05PVEVfRk9STUFUID0gREVGQVVMVF9NT05USExZX05PVEVfRk9STUFUO1xuZXhwb3J0cy5ERUZBVUxUX1FVQVJURVJMWV9OT1RFX0ZPUk1BVCA9IERFRkFVTFRfUVVBUlRFUkxZX05PVEVfRk9STUFUO1xuZXhwb3J0cy5ERUZBVUxUX1dFRUtMWV9OT1RFX0ZPUk1BVCA9IERFRkFVTFRfV0VFS0xZX05PVEVfRk9STUFUO1xuZXhwb3J0cy5ERUZBVUxUX1lFQVJMWV9OT1RFX0ZPUk1BVCA9IERFRkFVTFRfWUVBUkxZX05PVEVfRk9STUFUO1xuZXhwb3J0cy5hcHBIYXNEYWlseU5vdGVzUGx1Z2luTG9hZGVkID0gYXBwSGFzRGFpbHlOb3Rlc1BsdWdpbkxvYWRlZDtcbmV4cG9ydHMuYXBwSGFzTW9udGhseU5vdGVzUGx1Z2luTG9hZGVkID0gYXBwSGFzTW9udGhseU5vdGVzUGx1Z2luTG9hZGVkO1xuZXhwb3J0cy5hcHBIYXNRdWFydGVybHlOb3Rlc1BsdWdpbkxvYWRlZCA9IGFwcEhhc1F1YXJ0ZXJseU5vdGVzUGx1Z2luTG9hZGVkO1xuZXhwb3J0cy5hcHBIYXNXZWVrbHlOb3Rlc1BsdWdpbkxvYWRlZCA9IGFwcEhhc1dlZWtseU5vdGVzUGx1Z2luTG9hZGVkO1xuZXhwb3J0cy5hcHBIYXNZZWFybHlOb3Rlc1BsdWdpbkxvYWRlZCA9IGFwcEhhc1llYXJseU5vdGVzUGx1Z2luTG9hZGVkO1xuZXhwb3J0cy5jcmVhdGVEYWlseU5vdGUgPSBjcmVhdGVEYWlseU5vdGU7XG5leHBvcnRzLmNyZWF0ZU1vbnRobHlOb3RlID0gY3JlYXRlTW9udGhseU5vdGU7XG5leHBvcnRzLmNyZWF0ZVBlcmlvZGljTm90ZSA9IGNyZWF0ZVBlcmlvZGljTm90ZTtcbmV4cG9ydHMuY3JlYXRlUXVhcnRlcmx5Tm90ZSA9IGNyZWF0ZVF1YXJ0ZXJseU5vdGU7XG5leHBvcnRzLmNyZWF0ZVdlZWtseU5vdGUgPSBjcmVhdGVXZWVrbHlOb3RlO1xuZXhwb3J0cy5jcmVhdGVZZWFybHlOb3RlID0gY3JlYXRlWWVhcmx5Tm90ZTtcbmV4cG9ydHMuZ2V0QWxsRGFpbHlOb3RlcyA9IGdldEFsbERhaWx5Tm90ZXM7XG5leHBvcnRzLmdldEFsbE1vbnRobHlOb3RlcyA9IGdldEFsbE1vbnRobHlOb3RlcztcbmV4cG9ydHMuZ2V0QWxsUXVhcnRlcmx5Tm90ZXMgPSBnZXRBbGxRdWFydGVybHlOb3RlcztcbmV4cG9ydHMuZ2V0QWxsV2Vla2x5Tm90ZXMgPSBnZXRBbGxXZWVrbHlOb3RlcztcbmV4cG9ydHMuZ2V0QWxsWWVhcmx5Tm90ZXMgPSBnZXRBbGxZZWFybHlOb3RlcztcbmV4cG9ydHMuZ2V0RGFpbHlOb3RlID0gZ2V0RGFpbHlOb3RlO1xuZXhwb3J0cy5nZXREYWlseU5vdGVTZXR0aW5ncyA9IGdldERhaWx5Tm90ZVNldHRpbmdzO1xuZXhwb3J0cy5nZXREYXRlRnJvbUZpbGUgPSBnZXREYXRlRnJvbUZpbGU7XG5leHBvcnRzLmdldERhdGVGcm9tUGF0aCA9IGdldERhdGVGcm9tUGF0aDtcbmV4cG9ydHMuZ2V0RGF0ZVVJRCA9IGdldERhdGVVSUQ7XG5leHBvcnRzLmdldE1vbnRobHlOb3RlID0gZ2V0TW9udGhseU5vdGU7XG5leHBvcnRzLmdldE1vbnRobHlOb3RlU2V0dGluZ3MgPSBnZXRNb250aGx5Tm90ZVNldHRpbmdzO1xuZXhwb3J0cy5nZXRQZXJpb2RpY05vdGVTZXR0aW5ncyA9IGdldFBlcmlvZGljTm90ZVNldHRpbmdzO1xuZXhwb3J0cy5nZXRRdWFydGVybHlOb3RlID0gZ2V0UXVhcnRlcmx5Tm90ZTtcbmV4cG9ydHMuZ2V0UXVhcnRlcmx5Tm90ZVNldHRpbmdzID0gZ2V0UXVhcnRlcmx5Tm90ZVNldHRpbmdzO1xuZXhwb3J0cy5nZXRUZW1wbGF0ZUluZm8gPSBnZXRUZW1wbGF0ZUluZm87XG5leHBvcnRzLmdldFdlZWtseU5vdGUgPSBnZXRXZWVrbHlOb3RlO1xuZXhwb3J0cy5nZXRXZWVrbHlOb3RlU2V0dGluZ3MgPSBnZXRXZWVrbHlOb3RlU2V0dGluZ3M7XG5leHBvcnRzLmdldFllYXJseU5vdGUgPSBnZXRZZWFybHlOb3RlO1xuZXhwb3J0cy5nZXRZZWFybHlOb3RlU2V0dGluZ3MgPSBnZXRZZWFybHlOb3RlU2V0dGluZ3M7XG4iLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCB7IG5vcm1hbGl6ZVBhdGggfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB7IGdldERhaWx5Tm90ZVNldHRpbmdzIH0gZnJvbSBcIm9ic2lkaWFuLWRhaWx5LW5vdGVzLWludGVyZmFjZVwiO1xuXG5cbi8vISBBbGwgb2YgdGhlc2UgbWV0aG9kcyBhcmUgdGFrZW4gZnJvbSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9vYnNpZGlhbi1kYWlseS1ub3Rlcy1pbnRlcmZhY2UuXG5mdW5jdGlvbiBqb2luKC4uLnBhcnRTZWdtZW50czogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIC8vIFNwbGl0IHRoZSBpbnB1dHMgaW50byBhIGxpc3Qgb2YgcGF0aCBjb21tYW5kcy5cbiAgICBsZXQgcGFydHM6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBwYXJ0U2VnbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHBhcnRzID0gcGFydHMuY29uY2F0KHBhcnRTZWdtZW50c1tpXS5zcGxpdChcIi9cIikpO1xuICAgIH1cbiAgICAvLyBJbnRlcnByZXQgdGhlIHBhdGggY29tbWFuZHMgdG8gZ2V0IHRoZSBuZXcgcmVzb2x2ZWQgcGF0aC5cbiAgICBjb25zdCBuZXdQYXJ0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gcGFydHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgLy8gUmVtb3ZlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXNcbiAgICAgICAgLy8gQWxzbyByZW1vdmUgXCIuXCIgc2VnbWVudHNcbiAgICAgICAgaWYgKCFwYXJ0IHx8IHBhcnQgPT09IFwiLlwiKSBjb250aW51ZTtcbiAgICAgICAgLy8gUHVzaCBuZXcgcGF0aCBzZWdtZW50cy5cbiAgICAgICAgZWxzZSBuZXdQYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgICAvLyBQcmVzZXJ2ZSB0aGUgaW5pdGlhbCBzbGFzaCBpZiB0aGVyZSB3YXMgb25lLlxuICAgIGlmIChwYXJ0c1swXSA9PT0gXCJcIikgbmV3UGFydHMudW5zaGlmdChcIlwiKTtcbiAgICAvLyBUdXJuIGJhY2sgaW50byBhIHNpbmdsZSBzdHJpbmcgcGF0aC5cbiAgICByZXR1cm4gbmV3UGFydHMuam9pbihcIi9cIik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldE5vdGVQYXRoKFxuICAgIGRpcmVjdG9yeTogc3RyaW5nLFxuICAgIGZpbGVuYW1lOiBzdHJpbmdcbik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgaWYgKCFmaWxlbmFtZS5lbmRzV2l0aChcIi5tZFwiKSkge1xuICAgICAgICBmaWxlbmFtZSArPSBcIi5tZFwiO1xuICAgIH1cbiAgICBjb25zdCBwYXRoID0gbm9ybWFsaXplUGF0aChqb2luKGRpcmVjdG9yeSwgZmlsZW5hbWUpKTtcblxuICAgIGF3YWl0IGVuc3VyZUZvbGRlckV4aXN0cyhwYXRoKTtcblxuICAgIHJldHVybiBwYXRoO1xufVxuXG5hc3luYyBmdW5jdGlvbiBlbnN1cmVGb2xkZXJFeGlzdHMocGF0aDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZGlycyA9IHBhdGgucmVwbGFjZSgvXFxcXC9nLCBcIi9cIikuc3BsaXQoXCIvXCIpO1xuICAgIGRpcnMucG9wKCk7IC8vIHJlbW92ZSBiYXNlbmFtZVxuXG4gICAgaWYgKGRpcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IGpvaW4oLi4uZGlycyk7XG4gICAgICAgIGlmICghKHdpbmRvdyBhcyBhbnkpLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZGlyKSkge1xuICAgICAgICAgICAgYXdhaXQgKHdpbmRvdyBhcyBhbnkpLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIoZGlyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhaWx5Tm90ZVBhdGgoZGF0ZTogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcblxuICAgIGNvbnN0IHsgZm9ybWF0LCBmb2xkZXIgfSA9IGdldERhaWx5Tm90ZVNldHRpbmdzKCk7XG5cbiAgICBjb25zdCBmaWxlbmFtZSA9IGRhdGUuZm9ybWF0KGZvcm1hdCk7XG4gICAgY29uc3Qgbm9ybWFsaXplZFBhdGggPSBhd2FpdCBnZXROb3RlUGF0aChmb2xkZXIsIGZpbGVuYW1lKTtcbiAgICByZXR1cm4gbm9ybWFsaXplZFBhdGg7XG59IiwiaW1wb3J0IHsgQ29tbWFuZCwgRnV6enlTdWdnZXN0TW9kYWwgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCBBZHZhbmNlZFVSSSBmcm9tIFwiLi4vbWFpblwiO1xuXG5leHBvcnQgY2xhc3MgQ29tbWFuZE1vZGFsIGV4dGVuZHMgRnV6enlTdWdnZXN0TW9kYWw8Q29tbWFuZD4ge1xuICAgIHBsdWdpbjogQWR2YW5jZWRVUkk7XG4gICAgZmlsZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHBsdWdpbjogQWR2YW5jZWRVUkksIGZpbGU/OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIocGx1Z2luLmFwcCk7XG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgICAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgIH1cblxuICAgIGdldEl0ZW1zKCk6IENvbW1hbmRbXSB7XG4gICAgICAgIGNvbnN0IHJhd0NvbW1hbmRzID0gdGhpcy5hcHAuY29tbWFuZHMuY29tbWFuZHM7XG4gICAgICAgIGNvbnN0IGNvbW1hbmRzOiBDb21tYW5kW10gPSBPYmplY3Qua2V5cyhyYXdDb21tYW5kcykubWFwKGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IHJhd0NvbW1hbmRzW2VdLmlkLCBuYW1lOiByYXdDb21tYW5kc1tlXS5uYW1lIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29tbWFuZHM7XG4gICAgfVxuXG4gICAgZ2V0SXRlbVRleHQoaXRlbTogQ29tbWFuZCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBpdGVtLm5hbWU7XG4gICAgfVxuXG4gICAgb25DaG9vc2VJdGVtKGl0ZW06IENvbW1hbmQsIF86IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMucGx1Z2luLmNvcHlVUkkoe1xuICAgICAgICAgICAgZmlsZXBhdGg6IHRoaXMuZmlsZSxcbiAgICAgICAgICAgIGNvbW1hbmRpZDogaXRlbS5pZFxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3VnZ2VzdE1vZGFsIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgQWR2YW5jZWRVUkkgZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB7IEVudGVyRGF0YSwgUGFyYW1ldGVycyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgRW50ZXJEYXRhTW9kYWwgZXh0ZW5kcyBTdWdnZXN0TW9kYWw8RW50ZXJEYXRhPiB7XG4gICAgcGx1Z2luOiBBZHZhbmNlZFVSSTtcbiAgICAvL251bGwgaWYgZm9yIG5vcm1hbCB3cml0ZSBtb2RlLCBpdHMgbm90IGFzc29jaWF0ZWQgd2l0aCBhIHNwZWNpYWwgbW9kZSBsaWtlIFwiYXBwZW5kXCIgb3IgXCJwcmVwZW5kXCJcbiAgICBtb2RlcyA9IFtudWxsLCBcIm92ZXJ3cml0ZVwiLCBcImFwcGVuZFwiLCBcInByZXBlbmRcIl07XG5cbiAgICBjb25zdHJ1Y3RvcihwbHVnaW46IEFkdmFuY2VkVVJJLCBwcml2YXRlIGZpbGU/OiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgc3VwZXIocGx1Z2luLmFwcCk7XG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgICAgICB0aGlzLnNldFBsYWNlaG9sZGVyKFwiVHlwZSB5b3VyIGRhdGEgdG8gYmUgd3JpdHRlbiB0byB0aGUgZmlsZSBvciBsZWF2ZSBpdCBlbXB0eSB0byBqdXN0IG9wZW4gaXRcIik7XG4gICAgfVxuXG5cbiAgICBnZXRTdWdnZXN0aW9ucyhxdWVyeTogc3RyaW5nKTogRW50ZXJEYXRhW10ge1xuICAgICAgICBpZiAocXVlcnkgPT0gXCJcIikgcXVlcnkgPSBudWxsO1xuXG4gICAgICAgIGxldCBzdWdnZXN0aW9uczogRW50ZXJEYXRhW10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBtb2RlIG9mIHRoaXMubW9kZXMpIHtcbiAgICAgICAgICAgIGlmICghKG1vZGUgPT09IFwib3ZlcndyaXRlXCIgJiYgIXF1ZXJ5KSkge1xuICAgICAgICAgICAgICAgIGxldCBkaXNwbGF5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ID0gYFdyaXRlIFwiJHtxdWVyeX1cIiBpbiAke21vZGV9IG1vZGVgO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheSA9IGBXcml0ZSBcIiR7cXVlcnl9XCJgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkgPSBgT3BlbiBpbiAke21vZGV9IG1vZGVgO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheSA9IGBPcGVuYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdWdnZXN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IG1vZGUsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5jb3B5VVJJKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXBhdGg6IHRoaXMuZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IG1vZGUgYXMgUGFyYW1ldGVyc1tcIm1vZGVcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uY29weVVSSSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhaWx5OiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IG1vZGUgYXMgUGFyYW1ldGVyc1tcIm1vZGVcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Z2dlc3Rpb25zO1xuICAgIH1cblxuICAgIHJlbmRlclN1Z2dlc3Rpb24odmFsdWU6IEVudGVyRGF0YSwgZWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IHZhbHVlLmRpc3BsYXk7XG4gICAgfTtcblxuICAgIG9uQ2hvb3NlU3VnZ2VzdGlvbihpdGVtOiBFbnRlckRhdGEsIF86IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGl0ZW0uZnVuYygpO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBGdXp6eVN1Z2dlc3RNb2RhbCB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IEFkdmFuY2VkVVJJIGZyb20gXCIuLi9tYWluXCI7XG5pbXBvcnQgeyBGaWxlTW9kYWxEYXRhIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBGaWxlTW9kYWwgZXh0ZW5kcyBGdXp6eVN1Z2dlc3RNb2RhbDxGaWxlTW9kYWxEYXRhPiB7XG4gICAgcGx1Z2luOiBBZHZhbmNlZFVSSTtcbiAgICBjb25zdHJ1Y3RvcihwbHVnaW46IEFkdmFuY2VkVVJJLCBwcml2YXRlIHBsYWNlSG9sZGVyOiBzdHJpbmcsIHByaXZhdGUgYWxsb3dOb0ZpbGU6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHBsdWdpbi5hcHApO1xuICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlcih0aGlzLnBsYWNlSG9sZGVyKTtcbiAgICB9XG5cbiAgICBnZXRJdGVtcygpOiBGaWxlTW9kYWxEYXRhW10ge1xuICAgICAgICBsZXQgc3BlY2lhbEl0ZW1zOiBGaWxlTW9kYWxEYXRhW10gPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuYWxsb3dOb0ZpbGUpIHtcbiAgICAgICAgICAgIHNwZWNpYWxJdGVtcy5wdXNoKHsgZGlzcGxheTogXCI8RG9uJ3Qgc3BlY2lmeSBhIGZpbGU+XCIsIHNvdXJjZTogdW5kZWZpbmVkIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpO1xuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgc3BlY2lhbEl0ZW1zLnB1c2goeyBkaXNwbGF5OiBcIjxDdXJyZW50IGZpbGU+XCIsIHNvdXJjZTogZmlsZS5wYXRoIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbLi4uc3BlY2lhbEl0ZW1zLCAuLi50aGlzLmFwcC52YXVsdC5nZXRGaWxlcygpLm1hcChlID0+IHsgcmV0dXJuIHsgZGlzcGxheTogZS5wYXRoLCBzb3VyY2U6IGUucGF0aCB9OyB9KV07XG4gICAgfVxuXG4gICAgZ2V0SXRlbVRleHQoaXRlbTogRmlsZU1vZGFsRGF0YSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBpdGVtLmRpc3BsYXk7XG4gICAgfVxuXG4gICAgb25DaG9vc2VJdGVtKGl0ZW06IEZpbGVNb2RhbERhdGEsIGV2dDogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcblxuICAgIH1cbn1cbiIsImltcG9ydCB7IFN1Z2dlc3RNb2RhbCB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IEFkdmFuY2VkVVJJIGZyb20gXCIuLi9tYWluXCI7XG5pbXBvcnQgeyBTZWFyY2hNb2RhbERhdGEgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIFJlcGxhY2VNb2RhbCBleHRlbmRzIFN1Z2dlc3RNb2RhbDxzdHJpbmc+IHtcbiAgICBwbHVnaW46IEFkdmFuY2VkVVJJO1xuICAgIGVtcHR5VGV4dCA9IFwiRW1wdHkgdGV4dCAocmVwbGFjZSB3aXRoIG5vdGhpbmcpXCI7XG4gICAgY29uc3RydWN0b3IocGx1Z2luOiBBZHZhbmNlZFVSSSwgcHJpdmF0ZSBzZWFyY2g6IFNlYXJjaE1vZGFsRGF0YSwgcHJpdmF0ZSBmaWxlcGF0aDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKHBsdWdpbi5hcHApO1xuICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlcihcIlJlcGxhY2VtZW50IHRleHRcIik7XG4gICAgfVxuXG5cbiAgICBnZXRTdWdnZXN0aW9ucyhxdWVyeTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgICAgICBpZiAocXVlcnkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gdGhpcy5lbXB0eVRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtxdWVyeV07XG4gICAgfVxuXG4gICAgcmVuZGVyU3VnZ2VzdGlvbih2YWx1ZTogc3RyaW5nLCBlbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgZWwuaW5uZXJUZXh0ID0gdmFsdWU7XG4gICAgfTtcblxuICAgIG9uQ2hvb3NlU3VnZ2VzdGlvbihpdGVtOiBzdHJpbmcsIF86IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaC5pc1JlZ0V4KSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5jb3B5VVJJKHtcbiAgICAgICAgICAgICAgICBmaWxlcGF0aDogdGhpcy5maWxlcGF0aCxcbiAgICAgICAgICAgICAgICBzZWFyY2hyZWdleDogdGhpcy5zZWFyY2guc291cmNlLFxuICAgICAgICAgICAgICAgIHJlcGxhY2U6IGl0ZW0gPT0gdGhpcy5lbXB0eVRleHQgPyBcIlwiIDogaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5jb3B5VVJJKHtcbiAgICAgICAgICAgICAgICBmaWxlcGF0aDogdGhpcy5maWxlcGF0aCxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLnNvdXJjZSxcbiAgICAgICAgICAgICAgICByZXBsYWNlOiBpdGVtID09IHRoaXMuZW1wdHlUZXh0ID8gXCJcIiA6IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgU3VnZ2VzdE1vZGFsIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgQWR2YW5jZWRVUkkgZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB7IFNlYXJjaE1vZGFsRGF0YSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoTW9kYWwgZXh0ZW5kcyBTdWdnZXN0TW9kYWw8U2VhcmNoTW9kYWxEYXRhPiB7XG4gICAgcGx1Z2luOiBBZHZhbmNlZFVSSTtcblxuICAgIGNvbnN0cnVjdG9yKHBsdWdpbjogQWR2YW5jZWRVUkkpIHtcbiAgICAgICAgc3VwZXIocGx1Z2luLmFwcCk7XG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgICAgICB0aGlzLnNldFBsYWNlaG9sZGVyKFwiU2VhcmNoZWQgdGV4dC4gUmVnRXggaXMgc3VwcG9ydGVkXCIpO1xuICAgIH1cblxuXG4gICAgZ2V0U3VnZ2VzdGlvbnMocXVlcnk6IHN0cmluZyk6IFNlYXJjaE1vZGFsRGF0YVtdIHtcbiAgICAgICAgaWYgKHF1ZXJ5ID09PSBcIlwiKSB7XG4gICAgICAgICAgICBxdWVyeSA9IFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZ2V4OiBSZWdFeHA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAocXVlcnkpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikgeyB9XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc291cmNlOiBxdWVyeSxcbiAgICAgICAgICAgICAgICBpc1JlZ0V4OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBxdWVyeVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHJlZ2V4ID8gYEFzIFJlZ0V4OiAke3F1ZXJ5fWAgOiBgQ2FuJ3QgcGFyc2UgUmVnRXhgLFxuICAgICAgICAgICAgICAgIGlzUmVnRXg6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICByZW5kZXJTdWdnZXN0aW9uKHZhbHVlOiBTZWFyY2hNb2RhbERhdGEsIGVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBlbC5pbm5lclRleHQgPSB2YWx1ZS5kaXNwbGF5O1xuICAgIH07XG5cbiAgICBvbkNob29zZVN1Z2dlc3Rpb24oaXRlbTogU2VhcmNoTW9kYWxEYXRhLCBfOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IEFwcCwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZyB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IEFkdmFuY2VkVVJJIGZyb20gXCIuL21haW5cIjtcblxuZXhwb3J0IGNsYXNzIFNldHRpbmdzVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gICAgcGx1Z2luOiBBZHZhbmNlZFVSSTtcbiAgICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBBZHZhbmNlZFVSSSkge1xuICAgICAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIH1cblxuICAgIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgICAgIGxldCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuICAgICAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuICAgICAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImgyXCIsIHsgdGV4dDogdGhpcy5wbHVnaW4ubWFuaWZlc3QubmFtZSB9KTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiT3BlbiBmaWxlIG9uIHdyaXRlXCIpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKGNiID0+IGNiLm9uQ2hhbmdlKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5vcGVuRmlsZU9uV3JpdGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH0pLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLm9wZW5GaWxlT25Xcml0ZSkpO1xuXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJPcGVuIGZpbGUgb24gd3JpdGUgaW4gYSBuZXcgcGFuZVwiKVxuICAgICAgICAgICAgLnNldERpc2FibGVkKHRoaXMucGx1Z2luLnNldHRpbmdzLm9wZW5GaWxlT25Xcml0ZSlcbiAgICAgICAgICAgIC5hZGRUb2dnbGUoY2IgPT4gY2Iub25DaGFuZ2UodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm9wZW5GaWxlT25Xcml0ZUluTmV3UGFuZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgfSkuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Mub3BlbkZpbGVPbldyaXRlSW5OZXdQYW5lKSk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIk9wZW4gZGFpbHkgbm90ZSBpbiBhIG5ldyBwYW5lXCIpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKGNiID0+IGNiLm9uQ2hhbmdlKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5vcGVuRGFpbHlJbk5ld1BhbmUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH0pLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLm9wZW5EYWlseUluTmV3UGFuZSkpO1xuXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJPcGVuIGZpbGUgd2l0aG91dCB3cml0ZSBpbiBuZXcgcGFuZVwiKVxuICAgICAgICAgICAgLmFkZFRvZ2dsZShjYiA9PiBjYi5vbkNoYW5nZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Mub3BlbkZpbGVXaXRob3V0V3JpdGVJbk5ld1BhbmUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH0pLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLm9wZW5GaWxlV2l0aG91dFdyaXRlSW5OZXdQYW5lKSk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIlVzZSBVSUQgaW5zdGVhZCBvZiBmaWxlIHBhdGhzXCIpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKGNiID0+IGNiLm9uQ2hhbmdlKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy51c2VVSUQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH0pLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnVzZVVJRCkpO1xuXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJVSUQgZmllbGQgaW4gZnJvbnRtYXR0ZXJcIilcbiAgICAgICAgICAgIC5hZGRUZXh0KGNiID0+IGNiLm9uQ2hhbmdlKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5pZEZpZWxkID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB9KS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5pZEZpZWxkKSk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZSgnRG9uYXRlJylcbiAgICAgICAgICAgIC5zZXREZXNjKCdJZiB5b3UgbGlrZSB0aGlzIFBsdWdpbiwgY29uc2lkZXIgZG9uYXRpbmcgdG8gc3VwcG9ydCBjb250aW51ZWQgZGV2ZWxvcG1lbnQuJylcbiAgICAgICAgICAgIC5hZGRCdXR0b24oKGJ0KSA9PiB7XG4gICAgICAgICAgICAgICAgYnQuYnV0dG9uRWwub3V0ZXJIVE1MID0gXCI8YSBocmVmPSdodHRwczovL2tvLWZpLmNvbS9GMUYxOTVJUTUnIHRhcmdldD0nX2JsYW5rJz48aW1nIGhlaWdodD0nMzYnIHN0eWxlPSdib3JkZXI6MHB4O2hlaWdodDozNnB4Oycgc3JjPSdodHRwczovL2Nkbi5rby1maS5jb20vY2RuL2tvZmkzLnBuZz92PTMnIGJvcmRlcj0nMCcgYWx0PSdCdXkgTWUgYSBDb2ZmZWUgYXQga28tZmkuY29tJyAvPjwvYT5cIjtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGJhc2U2NFRvQXJyYXlCdWZmZXIsIENhY2hlZE1ldGFkYXRhLCBNYXJrZG93blZpZXcsIG5vcm1hbGl6ZVBhdGgsIE5vdGljZSwgcGFyc2VGcm9udE1hdHRlckFsaWFzZXMsIHBhcnNlRnJvbnRNYXR0ZXJFbnRyeSwgUGx1Z2luLCBUQWJzdHJhY3RGaWxlLCBURmlsZSwgVEZvbGRlciB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHsgc3RyaXBNRCB9IGZyb20gXCJvYnNpZGlhbi1jb21tdW5pdHktbGliXCI7XG5pbXBvcnQgeyBhcHBIYXNEYWlseU5vdGVzUGx1Z2luTG9hZGVkLCBjcmVhdGVEYWlseU5vdGUsIGdldEFsbERhaWx5Tm90ZXMsIGdldERhaWx5Tm90ZSB9IGZyb20gXCJvYnNpZGlhbi1kYWlseS1ub3Rlcy1pbnRlcmZhY2VcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgZ2V0RGFpbHlOb3RlUGF0aCB9IGZyb20gXCIuL2RhaWx5X25vdGVfdXRpbHNcIjtcbmltcG9ydCB7IENvbW1hbmRNb2RhbCB9IGZyb20gXCIuL21vZGFscy9jb21tYW5kX21vZGFsXCI7XG5pbXBvcnQgeyBFbnRlckRhdGFNb2RhbCB9IGZyb20gXCIuL21vZGFscy9lbnRlcl9kYXRhX21vZGFsXCI7XG5pbXBvcnQgeyBGaWxlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbHMvZmlsZV9tb2RhbFwiO1xuaW1wb3J0IHsgUmVwbGFjZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxzL3JlcGxhY2VfbW9kYWxcIjtcbmltcG9ydCB7IFNlYXJjaE1vZGFsIH0gZnJvbSBcIi4vbW9kYWxzL3NlYXJjaF9tb2RhbFwiO1xuaW1wb3J0IHsgU2V0dGluZ3NUYWIgfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuaW1wb3J0IHsgQWR2YW5jZWRVUklTZXR0aW5ncywgRmlsZU1vZGFsRGF0YSwgSG9va1BhcmFtZXRlcnMsIFBhcmFtZXRlcnMsIFNlYXJjaE1vZGFsRGF0YSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IEFkdmFuY2VkVVJJU2V0dGluZ3MgPSB7XG4gICAgb3BlbkZpbGVPbldyaXRlOiB0cnVlLFxuICAgIG9wZW5EYWlseUluTmV3UGFuZTogZmFsc2UsXG4gICAgb3BlbkZpbGVPbldyaXRlSW5OZXdQYW5lOiBmYWxzZSxcbiAgICBvcGVuRmlsZVdpdGhvdXRXcml0ZUluTmV3UGFuZTogZmFsc2UsXG4gICAgaWRGaWVsZDogXCJpZFwiLFxuICAgIHVzZVVJRDogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZHZhbmNlZFVSSSBleHRlbmRzIFBsdWdpbiB7XG4gICAgc2V0dGluZ3M6IEFkdmFuY2VkVVJJU2V0dGluZ3M7XG4gICAgbGFzdFBhcmFtZXRlcnM/OiBPYmplY3Q7XG5cbiAgICBhc3luYyBvbmxvYWQoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG4gICAgICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgU2V0dGluZ3NUYWIodGhpcy5hcHAsIHRoaXMpKTtcblxuXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICAgICAgICBpZDogXCJjb3B5LXVyaS1jdXJyZW50LWZpbGVcIixcbiAgICAgICAgICAgIG5hbWU6IFwiY29weSBVUkkgZm9yIGZpbGUgd2l0aCBvcHRpb25zXCIsXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5oYW5kbGVDb3B5RmlsZVVSSShmYWxzZSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgICAgICAgIGlkOiBcImNvcHktdXJpLWN1cnJlbnQtZmlsZS1zaW1wbGVcIixcbiAgICAgICAgICAgIG5hbWU6IFwiY29weSBVUkkgZm9yIGN1cnJlbnQgZmlsZVwiLFxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuaGFuZGxlQ29weUZpbGVVUkkodHJ1ZSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgICAgICAgIGlkOiBcImNvcHktdXJpLWRhaWx5XCIsXG4gICAgICAgICAgICBuYW1lOiBcImNvcHkgVVJJIGZvciBkYWlseSBub3RlXCIsXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4gbmV3IEVudGVyRGF0YU1vZGFsKHRoaXMpLm9wZW4oKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgICAgICAgaWQ6IFwiY29weS11cmktc2VhcmNoLWFuZC1yZXBsYWNlXCIsXG4gICAgICAgICAgICBuYW1lOiBcImNvcHkgVVJJIGZvciBzZWFyY2ggYW5kIHJlcGxhY2VcIixcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZU1vZGFsID0gbmV3IEZpbGVNb2RhbCh0aGlzLCBcIlVzZWQgZmlsZSBmb3Igc2VhcmNoIGFuZCByZXBsYWNlXCIpO1xuICAgICAgICAgICAgICAgIGZpbGVNb2RhbC5vcGVuKCk7XG4gICAgICAgICAgICAgICAgZmlsZU1vZGFsLm9uQ2hvb3NlSXRlbSA9IChmaWxlUGF0aDogRmlsZU1vZGFsRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hNb2RhbCA9IG5ldyBTZWFyY2hNb2RhbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoTW9kYWwub3BlbigpO1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2hNb2RhbC5vbkNob29zZVN1Z2dlc3Rpb24gPSAoaXRlbTogU2VhcmNoTW9kYWxEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUmVwbGFjZU1vZGFsKHRoaXMsIGl0ZW0sIGZpbGVQYXRoPy5zb3VyY2UpLm9wZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgICAgICAgIGlkOiBcImNvcHktdXJpLWNvbW1hbmRcIixcbiAgICAgICAgICAgIG5hbWU6IFwiY29weSBVUkkgZm9yIGNvbW1hbmRcIixcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZU1vZGFsID0gbmV3IEZpbGVNb2RhbCh0aGlzLCBcIlNlbGVjdCBhIGZpbGUgdG8gYmUgb3BlbmVkIGJlZm9yZSBleGVjdXRpbmcgdGhlIGNvbW1hbmRcIik7XG4gICAgICAgICAgICAgICAgZmlsZU1vZGFsLm9wZW4oKTtcbiAgICAgICAgICAgICAgICBmaWxlTW9kYWwub25DaG9vc2VJdGVtID0gKGl0ZW06IEZpbGVNb2RhbERhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IENvbW1hbmRNb2RhbCh0aGlzLCBpdGVtPy5zb3VyY2UpLm9wZW4oKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHRoaXMucmVnaXN0ZXJPYnNpZGlhblByb3RvY29sSGFuZGxlcihcImFkdmFuY2VkLXVyaVwiLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IGUgYXMgdW5rbm93biBhcyBQYXJhbWV0ZXJzO1xuXG4gICAgICAgICAgICAvKiogQWxsb3dzIHdyaXRpbmcgdG8gbmV3IGNyZWF0ZWQgZGFpbHkgbm90ZSB3aXRob3V0IGFueSBgUGFyYW1ldGVycy5tb2RlYCAqL1xuICAgICAgICAgICAgbGV0IGNyZWF0ZWREYWlseU5vdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW1ldGVyIGluIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgICAocGFyYW1ldGVycyBhcyBhbnkpW3BhcmFtZXRlcl0gPSBkZWNvZGVVUklDb21wb25lbnQoKHBhcmFtZXRlcnMgYXMgYW55KVtwYXJhbWV0ZXJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGFzdFBhcmFtZXRlcnMgPSB7IC4uLnBhcmFtZXRlcnMgfTtcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzLnVpZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHRoaXMuZ2V0RmlsZUZyb21VSUQocGFyYW1ldGVycy51aWQpPy5wYXRoO1xuICAgICAgICAgICAgICAgIGlmIChyZXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMuZmlsZXBhdGggPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMudWlkID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXJzLmZpbGVuYW1lKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpcnN0TGlua3BhdGhEZXN0KHBhcmFtZXRlcnMuZmlsZW5hbWUsIFwiXCIpO1xuICAgICAgICAgICAgICAgIGlmICghZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpLmZpbmQoZmlsZSA9PiBwYXJzZUZyb250TWF0dGVyQWxpYXNlcyh0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKS5mcm9udG1hdHRlcik/LmluY2x1ZGVzKHBhcmFtZXRlcnMuZmlsZW5hbWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Rm9sZGVyID0gdGhpcy5hcHAuZmlsZU1hbmFnZXIuZ2V0TmV3RmlsZVBhcmVudCh0aGlzLmFwcC53b3Jrc3BhY2UuYWN0aXZlTGVhZi52aWV3LmZpbGU/LnBhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudEZvbGRlclBhdGggPSBwYXJlbnRGb2xkZXIuaXNSb290KCkgPyBcIlwiIDogcGFyZW50Rm9sZGVyLnBhdGggKyBcIi9cIjtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzLmZpbGVwYXRoID0gZmlsZT8ucGF0aCA/PyAocGFyZW50Rm9sZGVyUGF0aCArIG5vcm1hbGl6ZVBhdGgocGFyYW1ldGVycy5maWxlbmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMuZmlsZXBhdGgpIHtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzLmZpbGVwYXRoID0gbm9ybWFsaXplUGF0aChwYXJhbWV0ZXJzLmZpbGVwYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcmFtZXRlcnMuZmlsZXBhdGgubGFzdEluZGV4T2YoXCIuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHBhcmFtZXRlcnMuZmlsZXBhdGguc3Vic3RyaW5nKGluZGV4IDwgMCA/IHBhcmFtZXRlcnMuZmlsZXBhdGgubGVuZ3RoIDogaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVuc2lvbiA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzLmZpbGVwYXRoID0gcGFyYW1ldGVycy5maWxlcGF0aCArIFwiLm1kXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXJzLmRhaWx5ID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgIGlmICghYXBwSGFzRGFpbHlOb3Rlc1BsdWdpbkxvYWRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJEYWlseSBub3RlcyBwbHVnaW4gaXMgbm90IGxvYWRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBtb21lbnQgPSB3aW5kb3cubW9tZW50KERhdGUubm93KCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbERhaWx5Tm90ZXMgPSBnZXRBbGxEYWlseU5vdGVzKCk7XG4gICAgICAgICAgICAgICAgbGV0IGRhaWx5Tm90ZSA9IGdldERhaWx5Tm90ZShtb21lbnQsIGFsbERhaWx5Tm90ZXMpO1xuICAgICAgICAgICAgICAgIGlmICghZGFpbHlOb3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vLyBQcmV2ZW50IGRhaWx5IG5vdGUgZnJvbSBiZWluZyBjcmVhdGVkIG9uIGV4aXN0aW5nIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzLmV4aXN0cyA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMuZmlsZXBhdGggPSBhd2FpdCBnZXREYWlseU5vdGVQYXRoKG1vbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYWlseU5vdGUgPSBhd2FpdCBjcmVhdGVEYWlseU5vdGUobW9tZW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVsYXkgdG8gbGV0IE9ic2lkaWFuIGluZGV4IGFuZCBnZW5lcmF0ZSBDYWNoZWRNZXRhZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UociA9PiBzZXRUaW1lb3V0KHIsIDUwMCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkRGFpbHlOb3RlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGFpbHlOb3RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVycy5maWxlcGF0aCA9IGRhaWx5Tm90ZS5wYXRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzLmNsaXBib2FyZCA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzLmRhdGEgPSBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLnJlYWRUZXh0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzW1wiZW5hYmxlLXBsdWdpblwiXSB8fCBwYXJhbWV0ZXJzW1wiZGlzYWJsZS1wbHVnaW5cIl0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBsdWdpbk1hbmFnZW1lbnQocGFyYW1ldGVycyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVycy5mcm9udG1hdHRlcmtleSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRnJvbnRtYXR0ZXJLZXkocGFyYW1ldGVycyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVycy53b3Jrc3BhY2UgfHwgcGFyYW1ldGVycy5zYXZld29ya3NwYWNlID09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVXb3Jrc3BhY2UocGFyYW1ldGVycyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVycy5jb21tYW5kbmFtZSB8fCBwYXJhbWV0ZXJzLmNvbW1hbmRpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ29tbWFuZChwYXJhbWV0ZXJzKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXJzLmZpbGVwYXRoICYmIHBhcmFtZXRlcnMuZXhpc3RzID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRG9lc0ZpbGVFeGlzdChwYXJhbWV0ZXJzKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXJzLmRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVdyaXRlKHBhcmFtZXRlcnMsIGNyZWF0ZWREYWlseU5vdGUpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlcnMuZmlsZXBhdGggJiYgcGFyYW1ldGVycy5oZWFkaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVPcGVuKHBhcmFtZXRlcnMpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlcnMuZmlsZXBhdGggJiYgcGFyYW1ldGVycy5ibG9jaykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlT3BlbihwYXJhbWV0ZXJzKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICgocGFyYW1ldGVycy5zZWFyY2ggfHwgcGFyYW1ldGVycy5zZWFyY2hyZWdleCkgJiYgcGFyYW1ldGVycy5yZXBsYWNlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU2VhcmNoQW5kUmVwbGFjZShwYXJhbWV0ZXJzKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXJzLmZpbGVwYXRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVPcGVuKHBhcmFtZXRlcnMpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlcnMuc2V0dGluZ2lkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVPcGVuU2V0dGluZ3MocGFyYW1ldGVycyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVycy51cGRhdGVwbHVnaW5zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVVcGRhdGVQbHVnaW5zKHBhcmFtZXRlcnMpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyT2JzaWRpYW5Qcm90b2NvbEhhbmRsZXIoXG4gICAgICAgICAgICBcImhvb2stZ2V0LWFkdmFuY2VkLXVyaVwiLFxuICAgICAgICAgICAgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gZSBhcyB1bmtub3duIGFzIEhvb2tQYXJhbWV0ZXJzO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW1ldGVyIGluIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgKHBhcmFtZXRlcnMgYXMgYW55KVtwYXJhbWV0ZXJdID0gZGVjb2RlVVJJQ29tcG9uZW50KChwYXJhbWV0ZXJzIGFzIGFueSlbcGFyYW1ldGVyXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUxlYWYgPSB0aGlzLmFwcC53b3Jrc3BhY2UuYWN0aXZlTGVhZjtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gYWN0aXZlTGVhZi52aWV3LmZpbGU7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUxlYWYgJiYgZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tTdWNjZXNzKHBhcmFtZXRlcnMsIGZpbGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWlsdXJlKHBhcmFtZXRlcnMsIHsgZXJyb3JNZXNzYWdlOiBcIk5vIGZpbGUgb3BlbmVkXCIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9uKCdmaWxlLW1lbnUnLCAobWVudSwgZmlsZSwgc291cmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEoc291cmNlID09PSBcInBhbmUtbW9yZS1vcHRpb25zXCIgfHwgc291cmNlID09PSBcInRhYi1oZWFkZXJcIiB8fCBzb3VyY2UgPT0gXCJmaWxlLWV4cGxvcmVyLWNvbnRleHQtbWVudVwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCEoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZShgQ29weSBBZHZhbmNlZCBVUklgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldEljb24oJ2xpbmsnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFNlY3Rpb24oXCJpbmZvXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAub25DbGljaygoXykgPT4gdGhpcy5oYW5kbGVDb3B5RmlsZVVSSSh0cnVlLCBmaWxlKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaG9va1N1Y2Nlc3MocGFyYW1ldGVyczogUGFyYW1ldGVycywgZmlsZTogVEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKCFwYXJhbWV0ZXJzW1wieC1zdWNjZXNzXCJdKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBzdHJpcE1EKGZpbGUubmFtZSksXG4gICAgICAgICAgICBhZHZhbmNlZHVyaTogYXdhaXQgdGhpcy5nZW5lcmF0ZVVSSSh7IGZpbGVwYXRoOiBmaWxlLnBhdGggfSksXG4gICAgICAgICAgICB1cmxrZXk6IFwiYWR2YW5jZWR1cmlcIixcbiAgICAgICAgICAgIGZpbGV1cmk6IHRoaXMuZ2V0RmlsZVVyaShmaWxlKSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdWNjZXNzKHBhcmFtZXRlcnMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGdldEZpbGVVcmkoZmlsZTogVEZpbGUpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHRoaXMuYXBwLnZhdWx0LmdldFJlc291cmNlUGF0aChmaWxlKSk7XG4gICAgICAgIHVybC5ob3N0ID0gXCJsb2NhbGhvc3Rob3N0bG9jYWxcIjtcbiAgICAgICAgdXJsLnByb3RvY29sID0gXCJmaWxlXCI7XG4gICAgICAgIHVybC5zZWFyY2ggPSBcIlwiO1xuXG4gICAgICAgIHVybC5wYXRobmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudCh1cmwucGF0aG5hbWUpO1xuICAgICAgICBjb25zdCByZXMgPSB1cmwudG9TdHJpbmcoKS5yZXBsYWNlKFwiL2xvY2FsaG9zdGhvc3Rsb2NhbC9cIiwgXCIvXCIpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIHN1Y2Nlc3MocGFyYW1ldGVyczogUGFyYW1ldGVycywgb3B0aW9ucz86IFJlY29yZDxzdHJpbmcsIGFueT4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHBhcmFtZXRlcnNbXCJ4LXN1Y2Nlc3NcIl0pIHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocGFyYW1ldGVyc1tcIngtc3VjY2Vzc1wiXSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldChwYXJhbSwgb3B0aW9uc1twYXJhbV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmFpbHVyZShwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJzLCBvcHRpb25zPzogUmVjb3JkPHN0cmluZywgYW55Pik6IHZvaWQge1xuICAgICAgICBpZiAocGFyYW1ldGVyc1tcIngtZXJyb3JcIl0pIHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocGFyYW1ldGVyc1tcIngtZXJyb3JcIl0pO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQocGFyYW0sIG9wdGlvbnNbcGFyYW1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHVybC50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEZpbGVGcm9tVUlEKHVpZDogc3RyaW5nKTogVEZpbGUgfCB1bmRlZmluZWQge1xuICAgICAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldEZpbGVzKCk7XG4gICAgICAgIGNvbnN0IGlkS2V5ID0gdGhpcy5zZXR0aW5ncy5pZEZpZWxkO1xuICAgICAgICByZXR1cm4gZmlsZXMuZmluZChmaWxlID0+IHBhcnNlRnJvbnRNYXR0ZXJFbnRyeSh0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKT8uZnJvbnRtYXR0ZXIsIGlkS2V5KSA9PSB1aWQpO1xuICAgIH1cblxuICAgIGhhbmRsZUZyb250bWF0dGVyS2V5KHBhcmFtZXRlcnM6IFBhcmFtZXRlcnMpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gcGFyYW1ldGVycy5mcm9udG1hdHRlcmtleTtcbiAgICAgICAgY29uc3QgZnJvbnRtYXR0ZXIgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldENhY2hlKHBhcmFtZXRlcnMuZmlsZXBhdGggPz8gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKS5wYXRoKS5mcm9udG1hdHRlcjtcblxuICAgICAgICBsZXQgcmVzOiBzdHJpbmc7XG4gICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChcIltcIikgJiYga2V5LmVuZHNXaXRoKFwiXVwiKSkge1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IGtleS5zdWJzdHJpbmcoMSwga2V5Lmxlbmd0aCAtIDEpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIGxldCBjYWNoZTogYW55ID0gZnJvbnRtYXR0ZXI7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgICAgICAgICAgIGlmIChjYWNoZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSBOYU4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlID0gY2FjaGUuZmluZCgoZSkgPT4gZSA9PSBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYWNoZSA9IGNhY2hlW3BhcnNlSW50KGl0ZW0pXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWNoZSA9IGNhY2hlW2l0ZW1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcyA9IGNhY2hlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzID0gZnJvbnRtYXR0ZXJba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29weVRleHQocmVzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVXb3Jrc3BhY2UocGFyYW1ldGVyczogUGFyYW1ldGVycykge1xuICAgICAgICBjb25zdCB3b3Jrc3BhY2VzID0gdGhpcy5hcHAuaW50ZXJuYWxQbHVnaW5zPy5wbHVnaW5zPy53b3Jrc3BhY2VzO1xuICAgICAgICBpZiAoIXdvcmtzcGFjZXMpIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJDYW5ub3QgZmluZCBXb3Jrc3BhY2VzIHBsdWdpbi4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuXCIpO1xuICAgICAgICAgICAgdGhpcy5mYWlsdXJlKHBhcmFtZXRlcnMpO1xuICAgICAgICB9IGVsc2UgaWYgKHdvcmtzcGFjZXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMuc2F2ZXdvcmtzcGFjZSA9PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IHdvcmtzcGFjZXMuaW5zdGFuY2UuYWN0aXZlV29ya3NwYWNlO1xuICAgICAgICAgICAgICAgIHdvcmtzcGFjZXMuaW5zdGFuY2Uuc2F2ZVdvcmtzcGFjZShhY3RpdmUpO1xuICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UoYFNhdmVkIGN1cnJlbnQgd29ya3NwYWNlIHRvICR7YWN0aXZlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMud29ya3NwYWNlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHdvcmtzcGFjZXMuaW5zdGFuY2UubG9hZFdvcmtzcGFjZShwYXJhbWV0ZXJzLndvcmtzcGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3MocGFyYW1ldGVycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiV29ya3NwYWNlcyBwbHVnaW4gaXMgbm90IGVuYWJsZWRcIik7XG4gICAgICAgICAgICB0aGlzLmZhaWx1cmUocGFyYW1ldGVycyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVQbHVnaW5NYW5hZ2VtZW50KHBhcmFtZXRlcnM6IFBhcmFtZXRlcnMpOiB2b2lkIHtcbiAgICAgICAgaWYgKHBhcmFtZXRlcnNbXCJlbmFibGUtcGx1Z2luXCJdKSB7XG4gICAgICAgICAgICBjb25zdCBwbHVnaW5JZCA9IHBhcmFtZXRlcnNbXCJlbmFibGUtcGx1Z2luXCJdO1xuICAgICAgICAgICAgdGhpcy5hcHAucGx1Z2lucy5lbmFibGVQbHVnaW5BbmRTYXZlKHBsdWdpbklkKTtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoYEVuYWJsZWQgJHtwbHVnaW5JZH1gKTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXJzW1wiZGlzYWJsZS1wbHVnaW5cIl0pIHtcbiAgICAgICAgICAgIGNvbnN0IHBsdWdpbklkID0gcGFyYW1ldGVyc1tcImRpc2FibGUtcGx1Z2luXCJdO1xuICAgICAgICAgICAgdGhpcy5hcHAucGx1Z2lucy5kaXNhYmxlUGx1Z2luQW5kU2F2ZShwbHVnaW5JZCk7XG4gICAgICAgICAgICBuZXcgTm90aWNlKGBEaXNhYmxlZCAke3BsdWdpbklkfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlQ29tbWFuZChwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmIChwYXJhbWV0ZXJzLmZpbGVwYXRoKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1ldGVycy5tb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMubW9kZSA9PSBcIm5ld1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpcnN0TGlua3BhdGhEZXN0KHBhcmFtZXRlcnMuZmlsZXBhdGgsIFwiL1wiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVycy5maWxlcGF0aCA9IHRoaXMuZ2V0QWx0ZXJuYXRpdmVGaWxlUGF0aChmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KHBhcmFtZXRlcnMuZmlsZXBhdGgsIFwiL1wiLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHsgbW9kZTogXCJzb3VyY2VcIiB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XG4gICAgICAgICAgICAgICAgaWYgKHZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdG9yID0gdmlldy5lZGl0b3I7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBlZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMubW9kZSA9PT0gXCJhcHBlbmRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yLnNldFZhbHVlKGRhdGEgKyBcIlxcblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVzID0gZWRpdG9yLmxpbmVDb3VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yLnNldEN1cnNvcih7IGNoOiAwLCBsaW5lOiBsaW5lcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXJzLm1vZGUgPT09IFwicHJlcGVuZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0b3Iuc2V0VmFsdWUoXCJcXG5cIiArIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yLnNldEN1cnNvcih7IGNoOiAwLCBsaW5lOiAwIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlcnMubW9kZSA9PT0gXCJvdmVyd3JpdGVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yLnNldFZhbHVlKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXJzLmxpbmUpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KHBhcmFtZXRlcnMuZmlsZXBhdGgsIFwiL1wiLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHsgbW9kZTogXCJzb3VyY2VcIiB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDdXJzb3JJbkxpbmUocGFyYW1ldGVycy5saW5lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChwYXJhbWV0ZXJzLmZpbGVwYXRoLCBcIi9cIiwgdGhpcy5zZXR0aW5ncy5vcGVuRmlsZVdpdGhvdXRXcml0ZUluTmV3UGFuZSwgdGhpcy5nZXRWaWV3U3RhdGVGcm9tTW9kZShwYXJhbWV0ZXJzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtZXRlcnMuY29tbWFuZGlkKSB7XG4gICAgICAgICAgICB0aGlzLmFwcC5jb21tYW5kcy5leGVjdXRlQ29tbWFuZEJ5SWQocGFyYW1ldGVycy5jb21tYW5kaWQpO1xuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlcnMuY29tbWFuZG5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJhd0NvbW1hbmRzID0gdGhpcy5hcHAuY29tbWFuZHMuY29tbWFuZHM7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbW1hbmQgaW4gcmF3Q29tbWFuZHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmF3Q29tbWFuZHNbY29tbWFuZF0ubmFtZSA9PT0gcGFyYW1ldGVycy5jb21tYW5kbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmF3Q29tbWFuZHNbY29tbWFuZF0uY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd0NvbW1hbmRzW2NvbW1hbmRdLmNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYXdDb21tYW5kc1tjb21tYW5kXS5jaGVja0NhbGxiYWNrKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdWNjZXNzKHBhcmFtZXRlcnMpO1xuICAgIH1cbiAgICBhc3luYyBoYW5kbGVEb2VzRmlsZUV4aXN0KHBhcmFtZXRlcnM6IFBhcmFtZXRlcnMpIHtcbiAgICAgICAgY29uc3QgZXhpc3RzID0gYXdhaXQgdGhpcy5hcHAudmF1bHQuYWRhcHRlci5leGlzdHMocGFyYW1ldGVycy5maWxlcGF0aCk7XG5cbiAgICAgICAgdGhpcy5jb3B5VGV4dCgoZXhpc3RzID8gMSA6IDApLnRvU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLnN1Y2Nlc3MocGFyYW1ldGVycyk7XG5cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlU2VhcmNoQW5kUmVwbGFjZShwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJzKSB7XG4gICAgICAgIGxldCBmaWxlOiBURmlsZTtcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMuZmlsZXBhdGgpIHtcblxuICAgICAgICAgICAgY29uc3QgYWJzdHJhY3RGaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhcmFtZXRlcnMuZmlsZXBhdGgpO1xuICAgICAgICAgICAgaWYgKGFic3RyYWN0RmlsZSBpbnN0YW5jZW9mIFRGaWxlKSB7XG4gICAgICAgICAgICAgICAgZmlsZSA9IGFic3RyYWN0RmlsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpbGUgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzLnNlYXJjaHJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgWywgLCBwYXR0ZXJuLCBmbGFnc10gPSBwYXJhbWV0ZXJzLnNlYXJjaHJlZ2V4Lm1hdGNoKC8oXFwvPykoLispXFwxKFthLXpdKikvaSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChwYXR0ZXJuLCBmbGFncyk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UocmVnZXgsIHBhcmFtZXRlcnMucmVwbGFjZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyhwYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKGBDYW4ndCBwYXJzZSAke3BhcmFtZXRlcnMuc2VhcmNocmVnZXh9IGFzIFJlZ0V4YCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFpbHVyZShwYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2VBbGwocGFyYW1ldGVycy5zZWFyY2gsIHBhcmFtZXRlcnMucmVwbGFjZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzKHBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLndyaXRlQW5kT3BlbkZpbGUoZmlsZS5wYXRoLCBkYXRhLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJDYW5ub3QgZmluZCBmaWxlXCIpO1xuICAgICAgICAgICAgdGhpcy5mYWlsdXJlKHBhcmFtZXRlcnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlV3JpdGUocGFyYW1ldGVyczogUGFyYW1ldGVycywgY3JlYXRlZERhaWx5Tm90ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBmaWxlOiBUQWJzdHJhY3RGaWxlIHwgbnVsbDtcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMuZmlsZXBhdGgpIHtcbiAgICAgICAgICAgIGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGFyYW1ldGVycy5maWxlcGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaWxlID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbWV0ZXJzLmZpbGVwYXRoIHx8IGZpbGUpIHtcbiAgICAgICAgICAgIGxldCBvdXRGaWxlOiBURmlsZTtcbiAgICAgICAgICAgIGxldCBwYXRoID0gcGFyYW1ldGVycy5maWxlcGF0aCA/PyBmaWxlLnBhdGg7XG4gICAgICAgICAgICBpZiAocGFyYW1ldGVycy5tb2RlID09PSBcIm92ZXJ3cml0ZVwiKSB7XG4gICAgICAgICAgICAgICAgb3V0RmlsZSA9IGF3YWl0IHRoaXMud3JpdGVBbmRPcGVuRmlsZShwYXRoLCBwYXJhbWV0ZXJzLmRhdGEsIHBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyhwYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVycy5tb2RlID09PSBcInByZXBlbmRcIikge1xuICAgICAgICAgICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0RmlsZSA9IGF3YWl0IHRoaXMucHJlcGVuZChmaWxlLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXRGaWxlID0gYXdhaXQgdGhpcy5wcmVwZW5kKHBhdGgsIHBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MocGFyYW1ldGVycyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlcnMubW9kZSA9PT0gXCJhcHBlbmRcIikge1xuICAgICAgICAgICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0RmlsZSA9IGF3YWl0IHRoaXMuYXBwZW5kKGZpbGUsIHBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dEZpbGUgPSBhd2FpdCB0aGlzLmFwcGVuZChwYXRoLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzKHBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXJzLm1vZGUgPT09IFwibmV3XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dEZpbGUgPSBhd2FpdCB0aGlzLndyaXRlQW5kT3BlbkZpbGUodGhpcy5nZXRBbHRlcm5hdGl2ZUZpbGVQYXRoKGZpbGUpLCBwYXJhbWV0ZXJzLmRhdGEsIHBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvb2tTdWNjZXNzKHBhcmFtZXRlcnMsIG91dEZpbGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dEZpbGUgPSBhd2FpdCB0aGlzLndyaXRlQW5kT3BlbkZpbGUocGF0aCwgcGFyYW1ldGVycy5kYXRhLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob29rU3VjY2VzcyhwYXJhbWV0ZXJzLCBvdXRGaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFjcmVhdGVkRGFpbHlOb3RlICYmIGZpbGUgaW5zdGFuY2VvZiBURmlsZSkge1xuICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJGaWxlIGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFpbHVyZShwYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0RmlsZSA9IGF3YWl0IHRoaXMud3JpdGVBbmRPcGVuRmlsZShwYXRoLCBwYXJhbWV0ZXJzLmRhdGEsIHBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyhwYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzLnVpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVVSURUb0ZpbGUob3V0RmlsZSwgcGFyYW1ldGVycy51aWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIkNhbm5vdCBmaW5kIGZpbGVcIik7XG4gICAgICAgICAgICB0aGlzLmZhaWx1cmUocGFyYW1ldGVycyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVPcGVuKHBhcmFtZXRlcnM6IFBhcmFtZXRlcnMpIHtcbiAgICAgICAgbGV0IGZpbGVJc0FscmVhZHlPcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLml0ZXJhdGVBbGxMZWF2ZXMobGVhZiA9PiB7XG4gICAgICAgICAgICBpZiAobGVhZi52aWV3LmZpbGU/LnBhdGggPT09IHBhcmFtZXRlcnMuZmlsZXBhdGggJiYgbGVhZi53aWR0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmaWxlSXNBbHJlYWR5T3BlbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uuc2V0QWN0aXZlTGVhZihsZWFmLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChmaWxlSXNBbHJlYWR5T3BlbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBsZWFmID0gdGhpcy5hcHAud29ya3NwYWNlLmFjdGl2ZUxlYWY7XG4gICAgICAgICAgICBpZiAocGFyYW1ldGVycy52aWV3bW9kZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmlld1N0YXRlID0gbGVhZi5nZXRWaWV3U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB2aWV3U3RhdGUuc3RhdGUubW9kZSA9IHBhcmFtZXRlcnMudmlld21vZGU7XG4gICAgICAgICAgICAgICAgaWYgKHZpZXdTdGF0ZS5zdGF0ZS5zb3VyY2UgIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICB2aWV3U3RhdGUuc3RhdGUuc291cmNlID0gcGFyYW1ldGVycy52aWV3bW9kZSA9PSBcInNvdXJjZVwiO1xuICAgICAgICAgICAgICAgIGF3YWl0IGxlYWYuc2V0Vmlld1N0YXRlKHZpZXdTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcGVuSW5OZXdQYW5lID0gcGFyYW1ldGVycy5uZXdwYW5lICE9PSB1bmRlZmluZWQgPyBwYXJhbWV0ZXJzLm5ld3BhbmUgPT0gXCJ0cnVlXCIgOiB0aGlzLnNldHRpbmdzLm9wZW5GaWxlV2l0aG91dFdyaXRlSW5OZXdQYW5lO1xuICAgICAgICBpZiAocGFyYW1ldGVycy5oZWFkaW5nICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChwYXJhbWV0ZXJzLmZpbGVwYXRoICsgXCIjXCIgKyBwYXJhbWV0ZXJzLmhlYWRpbmcsIFwiXCIsIG9wZW5Jbk5ld1BhbmUsIHRoaXMuZ2V0Vmlld1N0YXRlRnJvbU1vZGUocGFyYW1ldGVycykpO1xuICAgICAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XG4gICAgICAgICAgICBpZiAoIXZpZXcpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUodmlldy5maWxlKTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRpbmcgPSBjYWNoZS5oZWFkaW5ncy5maW5kKChlKSA9PiBlLmhlYWRpbmcgPT09IHBhcmFtZXRlcnMuaGVhZGluZyk7XG4gICAgICAgICAgICB2aWV3LmVkaXRvci5mb2N1cygpO1xuICAgICAgICAgICAgdmlldy5lZGl0b3Iuc2V0Q3Vyc29yKHsgbGluZTogaGVhZGluZy5wb3NpdGlvbi5zdGFydC5saW5lICsgMSwgY2g6IDAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyYW1ldGVycy5ibG9jayAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQocGFyYW1ldGVycy5maWxlcGF0aCArIFwiI15cIiArIHBhcmFtZXRlcnMuYmxvY2ssIFwiXCIsIG9wZW5Jbk5ld1BhbmUsIHRoaXMuZ2V0Vmlld1N0YXRlRnJvbU1vZGUocGFyYW1ldGVycykpO1xuICAgICAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XG4gICAgICAgICAgICBpZiAoIXZpZXcpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUodmlldy5maWxlKTtcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gY2FjaGUuYmxvY2tzW3BhcmFtZXRlcnMuYmxvY2tdO1xuICAgICAgICAgICAgdmlldy5lZGl0b3IuZm9jdXMoKTtcbiAgICAgICAgICAgIHZpZXcuZWRpdG9yLnNldEN1cnNvcih7IGxpbmU6IGJsb2NrLnBvc2l0aW9uLnN0YXJ0LmxpbmUsIGNoOiAwIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFmaWxlSXNBbHJlYWR5T3BlbmVkKVxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQocGFyYW1ldGVycy5maWxlcGF0aCwgXCJcIiwgb3BlbkluTmV3UGFuZSwgdGhpcy5nZXRWaWV3U3RhdGVGcm9tTW9kZShwYXJhbWV0ZXJzKSk7XG4gICAgICAgICAgICBpZiAocGFyYW1ldGVycy5saW5lICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3Vyc29ySW5MaW5lKHBhcmFtZXRlcnMubGluZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtZXRlcnMubW9kZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0Q3Vyc29yKHBhcmFtZXRlcnMubW9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtZXRlcnMudWlkKSB7XG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcblxuICAgICAgICAgICAgdGhpcy53cml0ZVVJRFRvRmlsZSh2aWV3LmZpbGUsIHBhcmFtZXRlcnMudWlkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1Y2Nlc3MocGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgYXN5bmMgYXBwZW5kKGZpbGU6IFRGaWxlIHwgc3RyaW5nLCBwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJzKTogUHJvbWlzZTxURmlsZT4ge1xuICAgICAgICBsZXQgcGF0aDogc3RyaW5nO1xuICAgICAgICBsZXQgZGF0YVRvV3JpdGU6IHN0cmluZztcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMuaGVhZGluZykge1xuICAgICAgICAgICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkge1xuICAgICAgICAgICAgICAgIHBhdGggPSBmaWxlLnBhdGg7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IHRoaXMuZ2V0RW5kQW5kQmVnaW5uaW5nT2ZIZWFkaW5nKGZpbGUsIHBhcmFtZXRlcnMuaGVhZGluZyk/Lmxhc3RMaW5lO1xuICAgICAgICAgICAgICAgIGlmIChsaW5lID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVzID0gZGF0YS5zcGxpdChcIlxcblwiKTtcblxuICAgICAgICAgICAgICAgIGxpbmVzLnNwbGljZShsaW5lLCAwLCAuLi5wYXJhbWV0ZXJzLmRhdGEuc3BsaXQoXCJcXG5cIikpO1xuICAgICAgICAgICAgICAgIGRhdGFUb1dyaXRlID0gbGluZXMuam9pbihcIlxcblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBmaWxlRGF0YTogc3RyaW5nO1xuICAgICAgICAgICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkge1xuICAgICAgICAgICAgICAgIGZpbGVEYXRhID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gZmlsZS5wYXRoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gZmlsZTtcbiAgICAgICAgICAgICAgICBmaWxlRGF0YSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhVG9Xcml0ZSA9IGZpbGVEYXRhICsgXCJcXG5cIiArIHBhcmFtZXRlcnMuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZUFuZE9wZW5GaWxlKHBhdGgsIGRhdGFUb1dyaXRlLCBwYXJhbWV0ZXJzKTtcbiAgICB9XG5cbiAgICBhc3luYyBwcmVwZW5kKGZpbGU6IFRGaWxlIHwgc3RyaW5nLCBwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJzKTogUHJvbWlzZTxURmlsZT4ge1xuICAgICAgICBsZXQgcGF0aDogc3RyaW5nO1xuICAgICAgICBsZXQgZGF0YVRvV3JpdGU6IHN0cmluZztcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMuaGVhZGluZykge1xuICAgICAgICAgICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkge1xuICAgICAgICAgICAgICAgIHBhdGggPSBmaWxlLnBhdGg7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IHRoaXMuZ2V0RW5kQW5kQmVnaW5uaW5nT2ZIZWFkaW5nKGZpbGUsIHBhcmFtZXRlcnMuaGVhZGluZyk/LmZpcnN0TGluZTtcbiAgICAgICAgICAgICAgICBpZiAobGluZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lcyA9IGRhdGEuc3BsaXQoXCJcXG5cIik7XG5cbiAgICAgICAgICAgICAgICBsaW5lcy5zcGxpY2UobGluZSwgMCwgLi4ucGFyYW1ldGVycy5kYXRhLnNwbGl0KFwiXFxuXCIpKTtcbiAgICAgICAgICAgICAgICBkYXRhVG9Xcml0ZSA9IGxpbmVzLmpvaW4oXCJcXG5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlRGF0YSA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcblxuICAgICAgICAgICAgICAgIGlmIChjYWNoZS5mcm9udG1hdHRlcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gY2FjaGUuZnJvbnRtYXR0ZXIucG9zaXRpb24uZW5kLmxpbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gZmlsZURhdGEuc3BsaXQoXCJcXG5cIikuc2xpY2UoMCwgbGluZSArIDEpLmpvaW4oXCJcXG5cIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBmaWxlRGF0YS5zcGxpdChcIlxcblwiKS5zbGljZShsaW5lICsgMSkuam9pbihcIlxcblwiKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVRvV3JpdGUgPSBmaXJzdCArIFwiXFxuXCIgKyBwYXJhbWV0ZXJzLmRhdGEgKyBcIlxcblwiICsgbGFzdDtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFUb1dyaXRlID0gcGFyYW1ldGVycy5kYXRhICsgXCJcXG5cIiArIGZpbGVEYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoID0gZmlsZS5wYXRoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gZmlsZTtcbiAgICAgICAgICAgICAgICBkYXRhVG9Xcml0ZSA9IHBhcmFtZXRlcnMuZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlQW5kT3BlbkZpbGUocGF0aCwgZGF0YVRvV3JpdGUsIHBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIGFzeW5jIHdyaXRlQW5kT3BlbkZpbGUob3V0cHV0RmlsZU5hbWU6IHN0cmluZywgdGV4dDogc3RyaW5nLCBwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJzKTogUHJvbWlzZTxURmlsZT4ge1xuICAgICAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKG91dHB1dEZpbGVOYW1lKTtcblxuICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkoZmlsZSwgdGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0cyA9IG91dHB1dEZpbGVOYW1lLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGRpciA9IHBhcnRzLnNsaWNlKDAsIHBhcnRzLmxlbmd0aCAtIDEpLmpvaW4oXCIvXCIpO1xuICAgICAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEgJiYgISh0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZGlyKSBpbnN0YW5jZW9mIFRGb2xkZXIpKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlRm9sZGVyKGRpcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBiYXNlNjRyZWdleCA9IC9eKFswLTlhLXpBLVorL117NH0pKigoWzAtOWEtekEtWisvXXsyfT09KXwoWzAtOWEtekEtWisvXXszfT0pKT8kLztcbiAgICAgICAgICAgIGlmIChiYXNlNjRyZWdleC50ZXN0KHRleHQpKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlQmluYXJ5KG91dHB1dEZpbGVOYW1lLCBiYXNlNjRUb0FycmF5QnVmZmVyKHRleHQpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKG91dHB1dEZpbGVOYW1lLCB0ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLm9wZW5GaWxlT25Xcml0ZSkge1xuICAgICAgICAgICAgbGV0IGZpbGVJc0FscmVhZHlPcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5pdGVyYXRlQWxsTGVhdmVzKGxlYWYgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChsZWFmLnZpZXcuZmlsZT8ucGF0aCA9PT0gb3V0cHV0RmlsZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZUlzQWxyZWFkeU9wZW5lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5zZXRBY3RpdmVMZWFmKGxlYWYsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIWZpbGVJc0FscmVhZHlPcGVuZWQpXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChvdXRwdXRGaWxlTmFtZSwgXCJcIiwgcGFyYW1ldGVycy5uZXdwYW5lICE9PSB1bmRlZmluZWQgPyBwYXJhbWV0ZXJzLm5ld3BhbmUgPT0gXCJ0cnVlXCIgOiB0aGlzLnNldHRpbmdzLm9wZW5GaWxlT25Xcml0ZUluTmV3UGFuZSwgdGhpcy5nZXRWaWV3U3RhdGVGcm9tTW9kZShwYXJhbWV0ZXJzKSk7XG4gICAgICAgICAgICBpZiAocGFyYW1ldGVycy5saW5lICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3Vyc29ySW5MaW5lKHBhcmFtZXRlcnMubGluZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKG91dHB1dEZpbGVOYW1lKSBhcyBURmlsZTtcbiAgICB9XG5cbiAgICBnZXRFbmRBbmRCZWdpbm5pbmdPZkhlYWRpbmcoZmlsZTogVEZpbGUsIGhlYWRpbmc6IHN0cmluZyk6IHsgXCJsYXN0TGluZVwiOiBudW1iZXIsIFwiZmlyc3RMaW5lXCI6IG51bWJlcjsgfSB7XG4gICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gY2FjaGUuc2VjdGlvbnM7XG4gICAgICAgIGNvbnN0IGZvdW5kSGVhZGluZyA9IGNhY2hlLmhlYWRpbmdzPy5maW5kKGUgPT4gZS5oZWFkaW5nID09PSBoZWFkaW5nKTtcblxuXG4gICAgICAgIGlmIChmb3VuZEhlYWRpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvdW5kU2VjdGlvbkluZGV4ID0gc2VjdGlvbnMuZmluZEluZGV4KHNlY3Rpb24gPT4gc2VjdGlvbi50eXBlID09PSBcImhlYWRpbmdcIiAmJiBzZWN0aW9uLnBvc2l0aW9uLnN0YXJ0LmxpbmUgPT09IGZvdW5kSGVhZGluZy5wb3NpdGlvbi5zdGFydC5saW5lKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3RTZWN0aW9ucyA9IHNlY3Rpb25zLnNsaWNlKGZvdW5kU2VjdGlvbkluZGV4ICsgMSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRIZWFkaW5nSW5kZXggPSByZXN0U2VjdGlvbnM/LmZpbmRJbmRleChlID0+IGUudHlwZSA9PT0gXCJoZWFkaW5nXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBsYXN0U2VjdGlvbiA9IHJlc3RTZWN0aW9uc1sobmV4dEhlYWRpbmdJbmRleCAhPT0gLTEgPyBuZXh0SGVhZGluZ0luZGV4IDogcmVzdFNlY3Rpb25zLmxlbmd0aCkgLSAxXSA/PyBzZWN0aW9uc1tmb3VuZFNlY3Rpb25JbmRleF07XG4gICAgICAgICAgICBjb25zdCBsYXN0TGluZSA9IGxhc3RTZWN0aW9uLnBvc2l0aW9uLmVuZC5saW5lICsgMTtcblxuICAgICAgICAgICAgcmV0dXJuIHsgXCJsYXN0TGluZVwiOiBsYXN0TGluZSwgXCJmaXJzdExpbmVcIjogc2VjdGlvbnNbZm91bmRTZWN0aW9uSW5kZXhdLnBvc2l0aW9uLmVuZC5saW5lICsgMSB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIkNhbid0IGZpbmQgaGVhZGluZ1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHNldEN1cnNvcihtb2RlOiBQYXJhbWV0ZXJzW1wibW9kZVwiXSkge1xuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcbiAgICAgICAgaWYgKHZpZXcpIHtcbiAgICAgICAgICAgIGNvbnN0IGVkaXRvciA9IHZpZXcuZWRpdG9yO1xuXG4gICAgICAgICAgICBsZXQgdmlld1N0YXRlID0gdmlldy5sZWFmLmdldFZpZXdTdGF0ZSgpO1xuICAgICAgICAgICAgdmlld1N0YXRlLnN0YXRlLm1vZGUgPSBcInNvdXJjZVwiO1xuXG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gXCJhcHBlbmRcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RMaW5lID0gZWRpdG9yLmxhc3RMaW5lKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdExpbmVMZW5ndGggPSBlZGl0b3IuZ2V0TGluZShsYXN0TGluZSkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGF3YWl0IHZpZXcubGVhZi5zZXRWaWV3U3RhdGUodmlld1N0YXRlLCB7IGZvY3VzOiB0cnVlIH0pO1xuXG4gICAgICAgICAgICAgICAgZWRpdG9yLnNldEN1cnNvcih7IGNoOiBsYXN0TGluZUxlbmd0aCwgbGluZTogbGFzdExpbmUgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IFwicHJlcGVuZFwiKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdmlldy5sZWFmLnNldFZpZXdTdGF0ZSh2aWV3U3RhdGUsIHsgZm9jdXM6IHRydWUgfSk7XG5cbiAgICAgICAgICAgICAgICBlZGl0b3Iuc2V0Q3Vyc29yKHsgY2g6IDAsIGxpbmU6IDAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDdXJzb3JJbkxpbmUocmF3TGluZTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xuICAgICAgICBpZiAoIXZpZXcpIHJldHVybjtcbiAgICAgICAgY29uc3QgbGluZSA9IE1hdGgubWluKHJhd0xpbmUgLSAxLCB2aWV3LmVkaXRvci5saW5lQ291bnQoKSAtIDEpO1xuICAgICAgICB2aWV3LmVkaXRvci5mb2N1cygpO1xuICAgICAgICB2aWV3LmVkaXRvci5zZXRDdXJzb3IoeyBsaW5lOiBsaW5lLCBjaDogdmlldy5lZGl0b3IuZ2V0TGluZShsaW5lKS5sZW5ndGggfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ29weUZpbGVVUkkod2l0aG91dERhdGE6IGJvb2xlYW4sIGZpbGU/OiBURmlsZSkge1xuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcbiAgICAgICAgaWYgKCF2aWV3ICYmICFmaWxlKSByZXR1cm47XG4gICAgICAgIGlmICh2aWV3KSB7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB2aWV3LmVkaXRvci5nZXRDdXJzb3IoKTtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUodmlldy5maWxlKTtcbiAgICAgICAgICAgIGlmIChjYWNoZS5oZWFkaW5ncykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaGVhZGluZyBvZiBjYWNoZS5oZWFkaW5ncykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGVhZGluZy5wb3NpdGlvbi5zdGFydC5saW5lIDw9IHBvcy5saW5lICYmIGhlYWRpbmcucG9zaXRpb24uZW5kLmxpbmUgPj0gcG9zLmxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29weVVSSSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXBhdGg6IHZpZXcuZmlsZS5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6IGhlYWRpbmcuaGVhZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FjaGUuYmxvY2tzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBibG9ja0lEIG9mIE9iamVjdC5rZXlzKGNhY2hlLmJsb2NrcykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBjYWNoZS5ibG9ja3NbYmxvY2tJRF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9jay5wb3NpdGlvbi5zdGFydC5saW5lIDw9IHBvcy5saW5lICYmIGJsb2NrLnBvc2l0aW9uLmVuZC5saW5lID49IHBvcy5saW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvcHlVUkkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVwYXRoOiB2aWV3LmZpbGUucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jazogYmxvY2tJRFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2l0aG91dERhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGUyID0gZmlsZSA/PyB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpO1xuICAgICAgICAgICAgaWYgKCFmaWxlMikge1xuICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJObyBmaWxlIG9wZW5lZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvcHlVUkkoe1xuICAgICAgICAgICAgICAgIGZpbGVwYXRoOiBmaWxlMi5wYXRoLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlTW9kYWwgPSBuZXcgRmlsZU1vZGFsKHRoaXMsIFwiQ2hvb3NlIGEgZmlsZVwiLCBmYWxzZSk7XG4gICAgICAgICAgICBmaWxlTW9kYWwub3BlbigpO1xuICAgICAgICAgICAgZmlsZU1vZGFsLm9uQ2hvb3NlSXRlbSA9IChpdGVtLCBfKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBuZXcgRW50ZXJEYXRhTW9kYWwodGhpcywgaXRlbS5zb3VyY2UpLm9wZW4oKTtcblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgaGFuZGxlT3BlblNldHRpbmdzKHBhcmFtZXRlcnM6IFBhcmFtZXRlcnMpIHtcbiAgICAgICAgaWYgKHRoaXMuYXBwLnNldHRpbmcuY29udGFpbmVyRWwucGFyZW50RWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5hcHAuc2V0dGluZy5vcGVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtZXRlcnMuc2V0dGluZ2lkID09IFwicGx1Z2luLWJyb3dzZXJcIikge1xuICAgICAgICAgICAgdGhpcy5hcHAuc2V0dGluZy5vcGVuVGFiQnlJZChcImNvbW11bml0eS1wbHVnaW5zXCIpO1xuICAgICAgICAgICAgdGhpcy5hcHAuc2V0dGluZy5hY3RpdmVUYWIuY29udGFpbmVyRWwuZmluZChcIi5tb2QtY3RhXCIpLmNsaWNrKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVycy5zZXR0aW5naWQgPT0gXCJ0aGVtZS1icm93c2VyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLnNldHRpbmcub3BlblRhYkJ5SWQoXCJhcHBlYXJhbmNlXCIpO1xuICAgICAgICAgICAgdGhpcy5hcHAuc2V0dGluZy5hY3RpdmVUYWIuY29udGFpbmVyRWwuZmluZChcIi5tb2QtY3RhXCIpLmNsaWNrKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFwcC5zZXR0aW5nLm9wZW5UYWJCeUlkKHBhcmFtZXRlcnMuc2V0dGluZ2lkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1Y2Nlc3MocGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlVXBkYXRlUGx1Z2lucyhwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJzKSB7XG4gICAgICAgIHBhcmFtZXRlcnMuc2V0dGluZ2lkID0gXCJjb21tdW5pdHktcGx1Z2luc1wiO1xuICAgICAgICB0aGlzLmhhbmRsZU9wZW5TZXR0aW5ncyhwYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5hcHAuc2V0dGluZy5hY3RpdmVUYWIuY29udGFpbmVyRWwuZmluZEFsbChcIi5tb2QtY3RhXCIpLmxhc3QoKS5jbGljaygpO1xuICAgICAgICBuZXcgTm90aWNlKFwiV2FpdGluZyAxMCBzZWNvbmRzXCIpO1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAgKiAxMDAwKSk7XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKCh0aGlzLmFwcCBhcyBhbnkpLnBsdWdpbnMudXBkYXRlcykubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFwcC5zZXR0aW5nLmFjdGl2ZVRhYi5jb250YWluZXJFbC5maW5kQWxsKFwiLm1vZC1jdGFcIikubGFzdCgpLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdWNjZXNzKHBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIGdldEFsdGVybmF0aXZlRmlsZVBhdGgoZmlsZTogVEZpbGUpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBkaXIgPSBmaWxlLnBhcmVudD8ucGF0aDtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGlyID0gZGlyID09PSBcIi9cIiA/IFwiXCIgOiBkaXI7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBmaWxlLm5hbWU7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCAxMDA7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgY29uc3QgYmFzZSA9IHN0cmlwTUQobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBhbHRlcm5hdGl2ZSA9IGZvcm1hdHRlZERpciArIChmb3JtYXR0ZWREaXIgPT0gXCJcIiA/IFwiXCIgOiBcIi9cIikgKyBiYXNlICsgYCAke2luZGV4fS5tZGA7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4aXN0cyA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChhbHRlcm5hdGl2ZSkgIT09IG51bGw7XG4gICAgICAgICAgICBpZiAoIWV4aXN0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbHRlcm5hdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdlbmVyYXRlVVJJKHBhcmFtZXRlcnM6IFBhcmFtZXRlcnMpIHtcbiAgICAgICAgbGV0IHVyaSA9IGBvYnNpZGlhbjovL2FkdmFuY2VkLXVyaT92YXVsdD0ke3RoaXMuYXBwLnZhdWx0LmdldE5hbWUoKX1gO1xuICAgICAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhcmFtZXRlcnMuZmlsZXBhdGgpO1xuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnVzZVVJRCAmJiBmaWxlIGluc3RhbmNlb2YgVEZpbGUpIHtcbiAgICAgICAgICAgIHBhcmFtZXRlcnMuZmlsZXBhdGggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBwYXJhbWV0ZXJzLnVpZCA9IGF3YWl0IHRoaXMuZ2V0VUlERnJvbUZpbGUoZmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBwYXJhbWV0ZXIgaW4gcGFyYW1ldGVycykge1xuXG4gICAgICAgICAgICBpZiAoKHBhcmFtZXRlcnMgYXMgYW55KVtwYXJhbWV0ZXJdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHVyaSA9IHVyaSArIGAmJHtwYXJhbWV0ZXJ9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KChwYXJhbWV0ZXJzIGFzIGFueSlbcGFyYW1ldGVyXSl9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXJpO1xuICAgIH1cblxuICAgIGFzeW5jIGNvcHlVUkkocGFyYW1ldGVyczogUGFyYW1ldGVycykge1xuICAgICAgICBjb25zdCB1cmkgPSBhd2FpdCB0aGlzLmdlbmVyYXRlVVJJKHBhcmFtZXRlcnMpO1xuICAgICAgICBhd2FpdCB0aGlzLmNvcHlUZXh0KGVuY29kZVVSSSh1cmkpKTtcblxuICAgICAgICBuZXcgTm90aWNlKFwiQWR2YW5jZWQgVVJJIGNvcGllZCB0byB5b3VyIGNsaXBib2FyZFwiKTtcbiAgICB9XG5cbiAgICBjb3B5VGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpO1xuICAgIH07XG5cbiAgICBhc3luYyBnZXRVSURGcm9tRmlsZShmaWxlOiBURmlsZSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGxldCBjYWNoZTogQ2FjaGVkTWV0YWRhdGE7XG5cbiAgICAgICAgLy9hd2FpdCBwYXJzaW5nIG9mIGZyb250bWF0dGVyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDIwOyBpKyspIHtcbiAgICAgICAgICAgIGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG5cbiAgICAgICAgICAgIGlmIChjYWNoZSAhPT0gdW5kZWZpbmVkKSBicmVhaztcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxNTApKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1aWQgPSBwYXJzZUZyb250TWF0dGVyRW50cnkoY2FjaGUuZnJvbnRtYXR0ZXIsIHRoaXMuc2V0dGluZ3MuaWRGaWVsZCk7XG4gICAgICAgIGlmICh1aWQgIT0gdW5kZWZpbmVkKSByZXR1cm4gdWlkO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy53cml0ZVVJRFRvRmlsZShmaWxlLCB1dWlkdjQoKSk7XG4gICAgfTtcblxuICAgIGFzeW5jIHdyaXRlVUlEVG9GaWxlKGZpbGU6IFRGaWxlLCB1aWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cbiAgICAgICAgY29uc3QgZnJvbnRtYXR0ZXIgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKT8uZnJvbnRtYXR0ZXI7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZW50OiBzdHJpbmcgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgICBjb25zdCBpc1lhbWxFbXB0eTogYm9vbGVhbiA9ICgoIWZyb250bWF0dGVyIHx8IGZyb250bWF0dGVyLmxlbmd0aCA9PT0gMCkgJiYgIWZpbGVDb250ZW50Lm1hdGNoKC9eLXszfVxccypcXG4qXFxyKi17M30vKSk7XG4gICAgICAgIGxldCBzcGxpdENvbnRlbnQgPSBmaWxlQ29udGVudC5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgaWYgKGlzWWFtbEVtcHR5KSB7XG4gICAgICAgICAgICBzcGxpdENvbnRlbnQudW5zaGlmdChcIi0tLVwiKTtcbiAgICAgICAgICAgIHNwbGl0Q29udGVudC51bnNoaWZ0KGAke3RoaXMuc2V0dGluZ3MuaWRGaWVsZH06ICR7dWlkfWApO1xuICAgICAgICAgICAgc3BsaXRDb250ZW50LnVuc2hpZnQoXCItLS1cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzcGxpdENvbnRlbnQuc3BsaWNlKDEsIDAsIGAke3RoaXMuc2V0dGluZ3MuaWRGaWVsZH06ICR7dWlkfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3RmlsZUNvbnRlbnQgPSBzcGxpdENvbnRlbnQuam9pbihcIlxcblwiKTtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQubW9kaWZ5KGZpbGUsIG5ld0ZpbGVDb250ZW50KTtcbiAgICAgICAgcmV0dXJuIHVpZDtcbiAgICB9XG5cbiAgICBnZXRWaWV3U3RhdGVGcm9tTW9kZShwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJzKSB7XG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJzLnZpZXdtb2RlID8geyBzdGF0ZTogeyBtb2RlOiBwYXJhbWV0ZXJzLnZpZXdtb2RlIH0gfSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgYXN5bmMgbG9hZFNldHRpbmdzKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbihERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkpO1xuICAgIH1cblxuICAgIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsidGhpcyIsIm9ic2lkaWFuIiwibm9ybWFsaXplUGF0aCIsImdldERhaWx5Tm90ZVNldHRpbmdzIiwiRnV6enlTdWdnZXN0TW9kYWwiLCJTdWdnZXN0TW9kYWwiLCJTZXR0aW5nIiwiUGx1Z2luU2V0dGluZ1RhYiIsInBhcnNlRnJvbnRNYXR0ZXJBbGlhc2VzIiwiYXBwSGFzRGFpbHlOb3Rlc1BsdWdpbkxvYWRlZCIsIk5vdGljZSIsImdldEFsbERhaWx5Tm90ZXMiLCJnZXREYWlseU5vdGUiLCJjcmVhdGVEYWlseU5vdGUiLCJURmlsZSIsInBhcnNlRnJvbnRNYXR0ZXJFbnRyeSIsIk1hcmtkb3duVmlldyIsIlRGb2xkZXIiLCJiYXNlNjRUb0FycmF5QnVmZmVyIiwidXVpZHY0IiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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U0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVB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Q0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ2xFLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUN6RixLQUFLO0FBQ0wsQ0FBQztBQTBERDtBQUNPLFNBQVMsYUFBYSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQzlDLElBQUksSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDekYsUUFBUSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtBQUNoQyxZQUFZLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QixTQUFTO0FBQ1QsS0FBSztBQUNMLElBQUksT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENB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Q0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFP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QTtBQUNBO0FBQ0EsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ25CO0FBQ0EsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRTtBQUM5QixFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLFNBQVMsQ0FBQyxHQUFHLEVBQUU7QUFDeEIsRUFBRSxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckY7QUFDQTtBQUNBLEVBQUUsSUFBSSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FB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
