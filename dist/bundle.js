/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.cdnfonts.com/css/chelistine);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.cdnfonts.com/css/geosanslight);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
  width: 100vw;
  background-color: #306D82;
  font-family: 'GeosansLight';

  display: grid;
  grid-template-rows: 150px 1fr;
  gap: 7.5px;
  align-items: stretch;
  justify-items: stretch;
}

::-webkit-scrollbar {
  display: none;
}

.header {
  grid-area: 1/1/2/2;
  font-size: 8rem;
  background-color: #183641;
  color: white;
  font-family: 'Chelistine';

  display: flex;
  align-items: center;
  justify-content: center;
}

.header > em {
  padding: 15px 0 0 0;
}

@media screen and (max-width: 700px) {
  .header {
    font-size: 6rem;
  }
}

@media screen and (max-width: 550px) {
  .header {
    font-size: 4rem;
  }
}

@media screen and (max-width: 400px) {
  .header {
    font-size: 3rem;
  }
}

.head {
  width: 120px;
  filter: invert(1);
  padding: 0 0 0 20px;
  cursor: pointer;
}

.curve-left, .curve-right {
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  height: 60px;
  width: 30px;
}

.curve-left {
  transform: translateY(150px);
  border-top-left-radius: 30px;
  box-shadow: 0 -30px 0 0 #183641;
}

.curve-right {
  transform: translateX(calc(100vw - 30px)) translateY(150px);
  border-top-right-radius: 30px;
  box-shadow: 0 -30px 0 0 #183641;
}

.container {
  grid-area: 2/1/3/2;
  display: grid;
  grid-template-columns: 5fr 2fr;
  grid-template-rows: 50px 1fr;
  max-height: calc(100vh - 157.5px);
}

.main {
  grid-area: 2/1/3/2;
  background-image: linear-gradient(to left, rgba(0,0,0,0.0), rgba(0,0,0,0.75));
  color: white;
  padding: 35px;
  overflow: auto;
  z-index: 1;
}

.tabs {
  grid-area: 1/1/2/3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 30px 30px 0 0;
  overflow: hidden;
  background-color: #183641;
}

.tab {
  display: grid;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-size: 1.2rem;
  letter-spacing: 0.45rem;
  transition: 0.75s;
  color: white;
}

.tab:hover {
  background-color: rgba(0, 0, 0, 0.25);
}

.active {
  background-color: rgba(0, 0, 0, 0.25);
}

hr {
  width: 60%;
  margin: 35px 0;
  border-color: #306D82;
}

.desc {
  font-size: 1.2rem;
  text-align: center;
  font-style: italic;
  letter-spacing: 0.15rem;
}

.desc > strong {
  font-style: normal;
  display: block;
  padding: 0 0 10px 0;
  letter-spacing: 0.75rem;
}

.menu .desc > strong {
  font-style: normal;
  display: block;
  padding: 0 0 15px 0;
  letter-spacing: 0.75rem;
}

.desc li {
  font-style: normal;
  text-align: left;
  font-size: 1.1rem;
  padding: 0 0 20px 0;
  font-style: italic;
}

.desc li:last-child {
  font-style: normal;
  text-align: left;
  font-size: 1.1rem;
  padding: 0;
  font-style: italic;
}

.desc li strong {
  font-style: normal;
}

li {
  list-style: none;
}

.home, .menu, .info {
  display: none;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  transition: 0.5s;
}

.selected {
  display: flex;
}

.signature {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.2rem;
}

.signature > strong {
  display: block;
  letter-spacing: 0.75rem;
  font-size: 1.2rem;
}

.info .signature > div > strong {
  display: inline;
}

.dish {
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 20px;
  margin: 20px 0 0 0;
  width: calc(100% - 40px);
  font-size: 1.1rem;
  font-style: italic;
}

.dish:last-child {
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 20px;
  margin: 20px 0 0 0;
  font-size: 1.1rem;
}

.home .dish, .info .dish {
  margin: 0;
}

.dish strong {
  display: block;
  cursor: pointer;
  padding: 0 0 2.5px 0;
  font-style: normal;
}

.info .dish:last-child {
  margin: 20px 0 0 0;
  text-align: start;
}

.side {
  grid-area: 2/2/3/3;
  display: grid;
}

.side-image {
  height: calc(100vh - 207.5px);
  width: 150%;
  justify-self: end;
  object-fit: cover;
  border: 0;
  -webkit-mask-image:-webkit-gradient(linear, right top, left top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
  mask-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0));
}

.banana {
  position: absolute;
  z-index: 2;
  height: 400px;
  width: 400px;
  top: calc((100vh / 2) - 200px);
  left: calc((100vw / 2) - 200px);
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  border-radius: 30px;
  border: 5px solid rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: .5rem;
  padding: 20px;
  box-sizing: border-box;
  transform: scale(0);
  transition: 1s;
}

.banana-img {
  width: 300px;
  filter: invert();
}

.banana > div {
  font-size: 1.1rem;
}

.show-banana {
  transform: scale(1);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.cdnfonts.com/css/chelistine');\r\n@import url('https://fonts.cdnfonts.com/css/geosanslight');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: #306D82;\r\n  font-family: 'GeosansLight';\r\n\r\n  display: grid;\r\n  grid-template-rows: 150px 1fr;\r\n  gap: 7.5px;\r\n  align-items: stretch;\r\n  justify-items: stretch;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.header {\r\n  grid-area: 1/1/2/2;\r\n  font-size: 8rem;\r\n  background-color: #183641;\r\n  color: white;\r\n  font-family: 'Chelistine';\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.header > em {\r\n  padding: 15px 0 0 0;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n  .header {\r\n    font-size: 6rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 550px) {\r\n  .header {\r\n    font-size: 4rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n  .header {\r\n    font-size: 3rem;\r\n  }\r\n}\r\n\r\n.head {\r\n  width: 120px;\r\n  filter: invert(1);\r\n  padding: 0 0 0 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.curve-left, .curve-right {\r\n  background-color: rgba(0, 0, 0, 0);\r\n  position: absolute;\r\n  height: 60px;\r\n  width: 30px;\r\n}\r\n\r\n.curve-left {\r\n  transform: translateY(150px);\r\n  border-top-left-radius: 30px;\r\n  box-shadow: 0 -30px 0 0 #183641;\r\n}\r\n\r\n.curve-right {\r\n  transform: translateX(calc(100vw - 30px)) translateY(150px);\r\n  border-top-right-radius: 30px;\r\n  box-shadow: 0 -30px 0 0 #183641;\r\n}\r\n\r\n.container {\r\n  grid-area: 2/1/3/2;\r\n  display: grid;\r\n  grid-template-columns: 5fr 2fr;\r\n  grid-template-rows: 50px 1fr;\r\n  max-height: calc(100vh - 157.5px);\r\n}\r\n\r\n.main {\r\n  grid-area: 2/1/3/2;\r\n  background-image: linear-gradient(to left, rgba(0,0,0,0.0), rgba(0,0,0,0.75));\r\n  color: white;\r\n  padding: 35px;\r\n  overflow: auto;\r\n  z-index: 1;\r\n}\r\n\r\n.tabs {\r\n  grid-area: 1/1/2/3;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  border-radius: 30px 30px 0 0;\r\n  overflow: hidden;\r\n  background-color: #183641;\r\n}\r\n\r\n.tab {\r\n  display: grid;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n\r\n  font-size: 1.2rem;\r\n  letter-spacing: 0.45rem;\r\n  transition: 0.75s;\r\n  color: white;\r\n}\r\n\r\n.tab:hover {\r\n  background-color: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.active {\r\n  background-color: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\nhr {\r\n  width: 60%;\r\n  margin: 35px 0;\r\n  border-color: #306D82;\r\n}\r\n\r\n.desc {\r\n  font-size: 1.2rem;\r\n  text-align: center;\r\n  font-style: italic;\r\n  letter-spacing: 0.15rem;\r\n}\r\n\r\n.desc > strong {\r\n  font-style: normal;\r\n  display: block;\r\n  padding: 0 0 10px 0;\r\n  letter-spacing: 0.75rem;\r\n}\r\n\r\n.menu .desc > strong {\r\n  font-style: normal;\r\n  display: block;\r\n  padding: 0 0 15px 0;\r\n  letter-spacing: 0.75rem;\r\n}\r\n\r\n.desc li {\r\n  font-style: normal;\r\n  text-align: left;\r\n  font-size: 1.1rem;\r\n  padding: 0 0 20px 0;\r\n  font-style: italic;\r\n}\r\n\r\n.desc li:last-child {\r\n  font-style: normal;\r\n  text-align: left;\r\n  font-size: 1.1rem;\r\n  padding: 0;\r\n  font-style: italic;\r\n}\r\n\r\n.desc li strong {\r\n  font-style: normal;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.home, .menu, .info {\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  overflow: auto;\r\n  transition: 0.5s;\r\n}\r\n\r\n.selected {\r\n  display: flex;\r\n}\r\n\r\n.signature {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  letter-spacing: 0.2rem;\r\n}\r\n\r\n.signature > strong {\r\n  display: block;\r\n  letter-spacing: 0.75rem;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.info .signature > div > strong {\r\n  display: inline;\r\n}\r\n\r\n.dish {\r\n  border-radius: 30px;\r\n  background-color: rgba(0, 0, 0, 0.25);\r\n  padding: 20px;\r\n  margin: 20px 0 0 0;\r\n  width: calc(100% - 40px);\r\n  font-size: 1.1rem;\r\n  font-style: italic;\r\n}\r\n\r\n.dish:last-child {\r\n  border-radius: 30px;\r\n  background-color: rgba(0, 0, 0, 0.25);\r\n  padding: 20px;\r\n  margin: 20px 0 0 0;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.home .dish, .info .dish {\r\n  margin: 0;\r\n}\r\n\r\n.dish strong {\r\n  display: block;\r\n  cursor: pointer;\r\n  padding: 0 0 2.5px 0;\r\n  font-style: normal;\r\n}\r\n\r\n.info .dish:last-child {\r\n  margin: 20px 0 0 0;\r\n  text-align: start;\r\n}\r\n\r\n.side {\r\n  grid-area: 2/2/3/3;\r\n  display: grid;\r\n}\r\n\r\n.side-image {\r\n  height: calc(100vh - 207.5px);\r\n  width: 150%;\r\n  justify-self: end;\r\n  object-fit: cover;\r\n  border: 0;\r\n  -webkit-mask-image:-webkit-gradient(linear, right top, left top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));\r\n  mask-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0));\r\n}\r\n\r\n.banana {\r\n  position: absolute;\r\n  z-index: 2;\r\n  height: 400px;\r\n  width: 400px;\r\n  top: calc((100vh / 2) - 200px);\r\n  left: calc((100vw / 2) - 200px);\r\n  background-color: rgba(0, 0, 0, 0.75);\r\n  color: white;\r\n  border-radius: 30px;\r\n  border: 5px solid rgba(0, 0, 0, 1);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n  letter-spacing: .5rem;\r\n  padding: 20px;\r\n  box-sizing: border-box;\r\n  transform: scale(0);\r\n  transition: 1s;\r\n}\r\n\r\n.banana-img {\r\n  width: 300px;\r\n  filter: invert();\r\n}\r\n\r\n.banana > div {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.show-banana {\r\n  transform: scale(1);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeContent: () => (/* binding */ homeContent)
/* harmony export */ });
function homeContent() {
  const home = document.createElement('div')
  home.className = 'home selected'

  const desc = document.createElement('div')
  desc.className = 'desc dish'
  desc.innerHTML = 'That Food Place is an upscale and sophisticated dining establishment that sets the standard for exquisite culinary experiences. Nestled in the heart of a bustling city, this restaurant is a haven for food enthusiasts seeking a memorable gastronomic adventure.'

  const ambiance = document.createElement('div')
  ambiance.className = 'desc'
  ambiance.innerHTML = '<strong>AMBIANCE</strong>As you step through the elegant doors of That Food Place, you are transported into a world of opulence and refinement. The interior decor is a harmonious blend of contemporary design and classic charm. Rich mahogany wood accents and soft, warm lighting create an inviting and intimate atmosphere.The restaurant also boasts a spacious outdoor terrace, complete with lush greenery, perfect for al fresco dining on pleasant evenings.'

  const cuisine = document.createElement('div')
  cuisine.className = 'desc'
  cuisine.innerHTML = '<strong>CUISINE</strong>The culinary team at That Food Place is renowned for its creativity and dedication to delivering an extraordinary dining experience. The menu is a carefully curated selection of globally inspired dishes, crafted with precision and artistry. From the freshest seafood to prime cuts of meat, every ingredient is meticulously sourced to ensure the highest quality. Whether you\'re a seafood aficionado, a carnivore, or a vegetarian, That Food Place has something to delight your palate'

  const selection = document.createElement('div')
  selection.className = 'desc'
  selection.innerHTML = '<strong>WINE & BEVERAGE SELECTION</strong>The wine cellar at That Food Place is extensive, boasting an impressive collection of both vintage and contemporary wines from around the world. The sommelier is ready to assist guests in selecting the perfect wine to complement their meal. The restaurant also offers a range of craft cocktails, artisanal spirits, and non-alcoholic options for those seeking alternative beverages.'

  home.appendChild(desc)
  home.appendChild(document.createElement('hr'))
  home.appendChild(ambiance)
  home.appendChild(document.createElement('hr'))
  home.appendChild(cuisine)
  home.appendChild(document.createElement('hr'))
  home.appendChild(selection)

  return home
}



/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   infoContent: () => (/* binding */ infoContent)
/* harmony export */ });
function infoContent() {
  const info = document.createElement('div')
  info.className = 'info'

  const location = document.createElement('div')
  location.className = 'desc dish'
  location.innerHTML = 'Located in the heart of Savoryville, That Food Place enjoys a prime location in the charming Culinary County. The restaurant is nestled in Delightfulville, a vibrant and picturesque neighborhood known for its culinary delights and cultural attractions.'

  const nightlife = document.createElement('div')
  nightlife.className = 'desc'
  nightlife.innerHTML = '<strong>VIBRANT NIGHTLIFE</strong>As evening falls, Delightfulville comes alive with a vibrant nightlife scene. Nearby bars, jazz clubs, and cocktail lounges offer live music, craft cocktails, and a chance to unwind after a delicious meal at That Food Place.'

  const farmers = document.createElement('div')
  farmers.className = 'desc'
  farmers.innerHTML = '<strong>FARMERS\' MARKET</strong>On weekends, the nearby Farmers\' Market buzzes with activity. Local farmers and artisans showcase fresh produce, handcrafted goods, and a variety of unique food products. It\'s a delightful place to explore and sample local flavors.'

  const architecture = document.createElement('div')
  architecture.className = 'desc'
  architecture.innerHTML = '<strong>HISTORIC ARCHITECTURE</strong> The architecture in Delightfulville is a mix of historic charm and modern design. You\'ll find quaint cobblestone streets lined with well-preserved heritage buildings alongside sleek, contemporary structures.'

  const address = document.createElement('div')
  address.className = 'signature'
  address.innerHTML = '<strong>ADDRESS</strong><div class="dish">That Food Place,<br>123 Gourmet Avenue,<br>Savoryville, Culinary County,<br>Delightfulville 56789</div>'

  const contact = document.createElement('div')
  contact.className = 'signature'
  contact.innerHTML = '<strong>CONTACT</strong><div class="dish"><strong>Phone:</strong> (555) 123-4567<br><strong>Email:</strong> info@thatfoodplace.com</div>'

  info.appendChild(location)
  info.appendChild(document.createElement('hr'))
  info.appendChild(nightlife)
  info.appendChild(document.createElement('hr'))
  info.appendChild(farmers)
  info.appendChild(document.createElement('hr'))
  info.appendChild(architecture)
  info.appendChild(document.createElement('hr'))
  info.appendChild(address)
  info.appendChild(document.createElement('hr'))
  info.appendChild(contact)
  
  return info
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuContent: () => (/* binding */ menuContent)
/* harmony export */ });
function menuContent() {
  const menu = document.createElement('div')
  menu.className = 'menu'
  
  const signature = document.createElement('div')
  signature.className = 'signature'
  signature.innerHTML = '<strong>SIGNATURE DISHES</strong><div class=dish><strong>Truffle-infused Lobster Risotto</strong>Creamy Arborio rice cooked to perfection, infused with the earthy aroma of black truffles, and adorned with succulent lobster meat</div><div class=dish><strong>Filet Mignon Rossini</strong>A tender, melt-in-your-mouth filet mignon topped with seared foie gras, drizzled with a rich truffle demi-glace, and served with truffle mashed potatoes</div><div class=dish><strong>Vegetable Garden Symphony</strong>A vibrant and artistic presentation of seasonal vegetables and herbs, celebrating the colors and flavors of the garden</div><div class=dish><strong>Chocolate Decadence</strong>A sumptuous dessert that combines layers of dark and white chocolate mousse, garnished with edible gold leaf and fresh berries</div>'

  const apps = document.createElement('div')
  apps.className = 'desc'
  apps.innerHTML = '<strong>APPETIZERS</strong><ul><li><strong>Seared Ahi Tuna Tacos:</strong> Slices of perfectly seared Ahi tuna served in delicate mini tacos with avocado crema and pickled radishes</li><li><strong>Mushroom Truffle Croquettes:</strong> Crispy on the outside, creamy on the inside croquettes featuring a medley of wild mushrooms and truffle oil, served with a garlic aioli dipping sauce</li><li><strong>Crispy Duck Spring Rolls:</strong> Thin rice paper rolls filled with tender duck confit, julienne vegetables, and a zesty plum dipping sauce</li><li><strong>Prawn and Mango Ceviche:</strong> Fresh prawns marinated in lime and orange juice, mixed with diced mango, red onion, and cilantro, served with house-made tortilla chips</li></ul>'

  const salads = document.createElement('div')
  salads.className = 'desc'
  salads.innerHTML = '<strong>SALADS</strong><ul><li><strong>Roasted Beet and Goat Cheese Salad:</strong> Earthy roasted beets, mixed greens, candied pecans, and creamy goat cheese, drizzled with a honey-balsamic vinaigrette</li><li><strong>Kale and Quinoa Superfood Salad:</strong> A health-conscious choice featuring kale, quinoa, roasted chickpeas, cherry tomatoes, and a tahini-lemon dressing</li></ul>'

  const main = document.createElement('div')
  main.className = 'desc'
  main.innerHTML = '<strong>MAIN COURSES</strong><ul><li><strong>Lavender-Infused Rack of Lamb:</strong> Succulent lamb chops marinated in a fragrant lavender and herb rub, served with roasted garlic mashed potatoes and grilled asparagus</li><li><strong>Pan-Seared Halibut with Lemon Herb Butter:</strong> Fresh halibut filet seared to perfection and topped with a zesty lemon herb butter sauce, accompanied by sautéed baby spinach and garlic mashed potatoes</li><li><strong>Wild Mushroom Risotto:</strong> Creamy Arborio rice cooked with a medley of wild mushrooms, finished with truffle oil and parmesan cheese</li><li><strong>Vegetable Tagine:</strong> A vegetarian delight featuring slow-cooked Moroccan-spiced vegetables, served with couscous and a side of harissa sauce</li></ul>'

  const dessert = document.createElement('div')
  dessert.className = 'desc'
  dessert.innerHTML = '<strong>DESSERTS</strong><ul><li><strong>Lemon Lavender Panna Cotta:</strong> A delicate dessert with layers of lemon-infused panna cotta and lavender-scented whipped cream, garnished with fresh berries</li><li><strong>Molten Chocolate Lava Cake:</strong> A chocolate lover\'s dream with a warm, gooey chocolate center, served with vanilla bean ice cream and a drizzle of raspberry coulis</li><li><strong>Tiramisu Martini:</strong> A playful twist on the classic dessert, served in a martini glass with layers of mascarpone cheese, coffee-soaked ladyfingers, and a dusting of cocoa powder</li><li><strong>Artisan Cheese Plate:</strong> A curated selection of artisanal cheeses, served with house-made fruit compote, honey, and a variety of crackers and bread</li></ul>'

  menu.appendChild(signature)
  menu.appendChild(document.createElement('hr'))
  menu.appendChild(apps)
  menu.appendChild(document.createElement('hr'))
  menu.appendChild(salads)
  menu.appendChild(document.createElement('hr'))
  menu.appendChild(main)
  menu.appendChild(document.createElement('hr'))
  menu.appendChild(dessert)

  return menu
}



/***/ }),

/***/ "./src/img/absurd.design-chapter1-31.png":
/*!***********************************************!*\
  !*** ./src/img/absurd.design-chapter1-31.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f10ececc8c63859fc7c.png";

/***/ }),

/***/ "./src/img/ii7uq385cc46lit6vs65fc832a.png":
/*!************************************************!*\
  !*** ./src/img/ii7uq385cc46lit6vs65fc832a.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad006fa0e970a1ba786d.png";

/***/ }),

/***/ "./src/img/pexels-volkan-vardar-3887985.jpg":
/*!**************************************************!*\
  !*** ./src/img/pexels-volkan-vardar-3887985.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6beffe3b3f9cdea8e98d.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info.js */ "./src/info.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_pexels_volkan_vardar_3887985_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/pexels-volkan-vardar-3887985.jpg */ "./src/img/pexels-volkan-vardar-3887985.jpg");
/* harmony import */ var _img_absurd_design_chapter1_31_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/absurd.design-chapter1-31.png */ "./src/img/absurd.design-chapter1-31.png");
/* harmony import */ var _img_ii7uq385cc46lit6vs65fc832a_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/ii7uq385cc46lit6vs65fc832a.png */ "./src/img/ii7uq385cc46lit6vs65fc832a.png");








const header = document.createElement('div')
header.classList.add('header')
header.innerHTML = '<em>That Food Place</em>'
const headImg = new Image()
headImg.src = _img_absurd_design_chapter1_31_png__WEBPACK_IMPORTED_MODULE_5__
headImg.className = 'head'
headImg.title = 'Roy\'s Secret'
header.appendChild(headImg)

const container = document.createElement('div')
container.className = 'container'
container.innerHTML = '<div class="tabs"><div id="home" class="tab active">HOME</div><div id="menu" class="tab">MENU</div><div id="info" class="tab">INFO</div></div>'

const main = document.createElement('div')
main.className = 'main'

const mainContainer = document.createElement('div')
mainContainer.className = 'main-container'
const home = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.homeContent)()
mainContainer.appendChild(home)
const menu = (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuContent)()
mainContainer.appendChild(menu)
const info = (0,_info_js__WEBPACK_IMPORTED_MODULE_2__.infoContent)()
mainContainer.appendChild(info)
main.appendChild(mainContainer)

const side = document.createElement('div')
side.className = 'side'

const sideImg = new Image()
sideImg.src = _img_pexels_volkan_vardar_3887985_jpg__WEBPACK_IMPORTED_MODULE_4__
sideImg.title = 'Image by Volkan Vardar\nSourced from Pexels'
sideImg.classList.add('side-image')
side.appendChild(sideImg)

container.appendChild(main)
container.appendChild(side)

const curveLeft = document.createElement('div')
curveLeft.className = 'curve-left'
const curveRight = document.createElement('div')
curveRight.className = 'curve-right'

document.body.appendChild(header)
document.body.appendChild(container)
document.body.appendChild(curveLeft)
document.body.appendChild(curveRight)

const homeTab = document.getElementById('home')
const menuTab = document.getElementById('menu')
const infoTab = document.getElementById('info')

homeTab.addEventListener('click', () => {
  home.classList.add('selected')
  menu.classList.remove('selected')
  info.classList.remove('selected')
  homeTab.classList.add('active')
  menuTab.classList.remove('active')
  infoTab.classList.remove('active')
})

menuTab.addEventListener('click', () => {
  home.classList.remove('selected')
  menu.classList.add('selected')
  info.classList.remove('selected')
  homeTab.classList.remove('active')
  menuTab.classList.add('active')
  infoTab.classList.remove('active')
})

infoTab.addEventListener('click', () => {
  home.classList.remove('selected')
  menu.classList.remove('selected')
  info.classList.add('selected')
  homeTab.classList.remove('active')
  menuTab.classList.remove('active')
  infoTab.classList.add('active')
})

const banana = document.createElement('div')
banana.className = 'banana'
banana.innerHTML = '<strong>CALORY FINDER</strong>'
const bananaImg = new Image()
bananaImg.src = _img_ii7uq385cc46lit6vs65fc832a_png__WEBPACK_IMPORTED_MODULE_6__
bananaImg.className = 'banana-img'
banana.appendChild(bananaImg)
const calories = document.createElement('div')
calories.innerHTML = 'Approx. 105-120 calories<br>per medium sized serving of banana<br>(7-8 inches)'
banana.appendChild(calories)
document.body.appendChild(banana)

headImg.onclick = () => {
  banana.classList.contains('show-banana') ? banana.classList.remove('show-banana') : banana.classList.add('show-banana')
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsaUdBQWlHO0FBQ2pHLG1HQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEs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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFEQUFXO0FBQ3hCO0FBQ0EsYUFBYSxxREFBVztBQUN4QjtBQUNBLGFBQWEscURBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtFQUFFO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGdFQUFFO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZm8uanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5jZG5mb250cy5jb20vY3NzL2NoZWxpc3RpbmUpO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5jZG5mb250cy5jb20vY3NzL2dlb3NhbnNsaWdodCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDZEODI7XHJcbiAgZm9udC1mYW1pbHk6ICdHZW9zYW5zTGlnaHQnO1xyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHggMWZyO1xyXG4gIGdhcDogNy41cHg7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xyXG4gIGZvbnQtc2l6ZTogOHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzNjQxO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ0NoZWxpc3RpbmUnO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXIgPiBlbSB7XHJcbiAgcGFkZGluZzogMTVweCAwIDAgMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAuaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogNnJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWQge1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBmaWx0ZXI6IGludmVydCgxKTtcclxuICBwYWRkaW5nOiAwIDAgMCAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmN1cnZlLWxlZnQsIC5jdXJ2ZS1yaWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4uY3VydmUtbGVmdCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1MHB4KTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgLTMwcHggMCAwICMxODM2NDE7XHJcbn1cclxuXHJcbi5jdXJ2ZS1yaWdodCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMTAwdncgLSAzMHB4KSkgdHJhbnNsYXRlWSgxNTBweCk7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAtMzBweCAwIDAgIzE4MzY0MTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMmZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE1Ny41cHgpO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDAsMCwwLDAuMCksIHJnYmEoMCwwLDAsMC43NSkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAzNXB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi50YWJzIHtcclxuICBncmlkLWFyZWE6IDEvMS8yLzM7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwIDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzNjQxO1xyXG59XHJcblxyXG4udGFiIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC40NXJlbTtcclxuICB0cmFuc2l0aW9uOiAwLjc1cztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50YWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuXHJcbmhyIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogMzVweCAwO1xyXG4gIGJvcmRlci1jb2xvcjogIzMwNkQ4MjtcclxufVxyXG5cclxuLmRlc2Mge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVyZW07XHJcbn1cclxuXHJcbi5kZXNjID4gc3Ryb25nIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMCAwIDEwcHggMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC43NXJlbTtcclxufVxyXG5cclxuLm1lbnUgLmRlc2MgPiBzdHJvbmcge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAwIDAgMTVweCAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjc1cmVtO1xyXG59XHJcblxyXG4uZGVzYyBsaSB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgcGFkZGluZzogMCAwIDIwcHggMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5kZXNjIGxpOmxhc3QtY2hpbGQge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uZGVzYyBsaSBzdHJvbmcge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxubGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5ob21lLCAubWVudSwgLmluZm8ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNpZ25hdHVyZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcclxufVxyXG5cclxuLnNpZ25hdHVyZSA+IHN0cm9uZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNzVyZW07XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5pbmZvIC5zaWduYXR1cmUgPiBkaXYgPiBzdHJvbmcge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLmRpc2gge1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogMjBweCAwIDAgMDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uZGlzaDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW46IDIwcHggMCAwIDA7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbi5ob21lIC5kaXNoLCAuaW5mbyAuZGlzaCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZGlzaCBzdHJvbmcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAwIDAgMi41cHggMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5pbmZvIC5kaXNoOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbjogMjBweCAwIDAgMDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxufVxyXG5cclxuLnNpZGUge1xyXG4gIGdyaWQtYXJlYTogMi8yLzMvMztcclxuICBkaXNwbGF5OiBncmlkO1xyXG59XHJcblxyXG4uc2lkZS1pbWFnZSB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjA3LjVweCk7XHJcbiAgd2lkdGg6IDE1MCU7XHJcbiAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCBsZWZ0IHRvcCwgZnJvbShyZ2JhKDAsMCwwLDEpKSwgdG8ocmdiYSgwLDAsMCwwKSkpO1xyXG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDAsMCwwLDEpLCByZ2JhKDAsMCwwLDApKTtcclxufVxyXG5cclxuLmJhbmFuYSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgdG9wOiBjYWxjKCgxMDB2aCAvIDIpIC0gMjAwcHgpO1xyXG4gIGxlZnQ6IGNhbGMoKDEwMHZ3IC8gMikgLSAyMDBweCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBib3JkZXI6IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogLjVyZW07XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuXHJcbi5iYW5hbmEtaW1nIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgZmlsdGVyOiBpbnZlcnQoKTtcclxufVxyXG5cclxuLmJhbmFuYSA+IGRpdiB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbi5zaG93LWJhbmFuYSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QiwyQkFBMkI7O0VBRTNCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oseUJBQXlCOztFQUV6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDJEQUEyRDtFQUMzRCw2QkFBNkI7RUFDN0IsK0JBQStCO0FBQ2pDOztBQUVBO0VB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bUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmNkbmZvbnRzLmNvbS9jc3MvY2hlbGlzdGluZScpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmNkbmZvbnRzLmNvbS9jc3MvZ2Vvc2Fuc2xpZ2h0Jyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA2RDgyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdHZW9zYW5zTGlnaHQnO1xcclxcblxcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHggMWZyO1xcclxcbiAgZ2FwOiA3LjVweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXHJcXG4gIGZvbnQtc2l6ZTogOHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODM2NDE7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LWZhbWlseTogJ0NoZWxpc3RpbmUnO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciA+IGVtIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMCAwIDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiA2cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcclxcbiAgLmhlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXHJcXG4gIC5oZWFkZXIge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZWFkIHtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xcclxcbiAgcGFkZGluZzogMCAwIDAgMjBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnZlLWxlZnQsIC5jdXJ2ZS1yaWdodCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jdXJ2ZS1sZWZ0IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNTBweCk7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAtMzBweCAwIDAgIzE4MzY0MTtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnZlLXJpZ2h0IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDEwMHZ3IC0gMzBweCkpIHRyYW5zbGF0ZVkoMTUwcHgpO1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIC0zMHB4IDAgMCAjMTgzNjQxO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGdyaWQtYXJlYTogMi8xLzMvMjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAyZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcclxcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE1Ny41cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBncmlkLWFyZWE6IDIvMS8zLzI7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgwLDAsMCwwLjApLCByZ2JhKDAsMCwwLDAuNzUpKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDM1cHg7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi50YWJzIHtcXHJcXG4gIGdyaWQtYXJlYTogMS8xLzIvMztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDAgMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzNjQxO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjQ1cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi50YWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgbWFyZ2luOiAzNXB4IDA7XFxyXFxuICBib3JkZXItY29sb3I6ICMzMDZEODI7XFxyXFxufVxcclxcblxcclxcbi5kZXNjIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXNjID4gc3Ryb25nIHtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogMCAwIDEwcHggMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSAuZGVzYyA+IHN0cm9uZyB7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmc6IDAgMCAxNXB4IDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2MgbGkge1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgcGFkZGluZzogMCAwIDIwcHggMDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2MgbGk6bGFzdC1jaGlsZCB7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzYyBsaSBzdHJvbmcge1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSwgLm1lbnUsIC5pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5zaWduYXR1cmUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWduYXR1cmUgPiBzdHJvbmcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC43NXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mbyAuc2lnbmF0dXJlID4gZGl2ID4gc3Ryb25nIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2gge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAyMHB4IDAgMCAwO1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5kaXNoOmxhc3QtY2hpbGQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAyMHB4IDAgMCAwO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lIC5kaXNoLCAuaW5mbyAuZGlzaCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5kaXNoIHN0cm9uZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgMCAyLjVweCAwO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mbyAuZGlzaDpsYXN0LWNoaWxkIHtcXHJcXG4gIG1hcmdpbjogMjBweCAwIDAgMDtcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZSB7XFxyXFxuICBncmlkLWFyZWE6IDIvMi8zLzM7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1pbWFnZSB7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDcuNXB4KTtcXHJcXG4gIHdpZHRoOiAxNTAlO1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCBsZWZ0IHRvcCwgZnJvbShyZ2JhKDAsMCwwLDEpKSwgdG8ocmdiYSgwLDAsMCwwKSkpO1xcclxcbiAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwwLDAsMSksIHJnYmEoMCwwLDAsMCkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFuYW5hIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgdG9wOiBjYWxjKCgxMDB2aCAvIDIpIC0gMjAwcHgpO1xcclxcbiAgbGVmdDogY2FsYygoMTAwdncgLyAyKSAtIDIwMHB4KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLjVyZW07XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICB0cmFuc2l0aW9uOiAxcztcXHJcXG59XFxyXFxuXFxyXFxuLmJhbmFuYS1pbWcge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbmFuYSA+IGRpdiB7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctYmFuYW5hIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qXHJcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcclxuICB2YXIgbGlzdCA9IFtdO1xyXG5cclxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcclxuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9KS5qb2luKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcclxuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcclxuICAgIH1cclxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcbiAgICBpZiAoZGVkdXBlKSB7XHJcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcclxuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xyXG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XHJcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lZGlhKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxpc3QucHVzaChpdGVtKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiBsaXN0O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcclxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XHJcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcclxuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcclxuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xyXG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xyXG4gIH1cclxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XHJcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcclxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xyXG4gIHZhciByZXN1bHQgPSAtMTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xyXG4gICAgICByZXN1bHQgPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xyXG4gIHZhciBpZENvdW50TWFwID0ge307XHJcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XHJcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcclxuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XHJcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcclxuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xyXG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICB2YXIgb2JqID0ge1xyXG4gICAgICBjc3M6IGl0ZW1bMV0sXHJcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxyXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXHJcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxyXG4gICAgICBsYXllcjogaXRlbVs1XVxyXG4gICAgfTtcclxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XHJcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XHJcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XHJcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcclxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxyXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xyXG4gIH1cclxuICByZXR1cm4gaWRlbnRpZmllcnM7XHJcbn1cclxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcclxuICBhcGkudXBkYXRlKG9iaik7XHJcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xyXG4gICAgaWYgKG5ld09iaikge1xyXG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFwaS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiB1cGRhdGVyO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICBsaXN0ID0gbGlzdCB8fCBbXTtcclxuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xyXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcclxuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XHJcbiAgICB9XHJcbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcclxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcclxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xyXG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xyXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XHJcbiAgfTtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBtZW1vID0ge307XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xyXG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcblxyXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcclxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxyXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcclxuICB9XHJcbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcclxufVxyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xyXG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcclxuICBpZiAoIXRhcmdldCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcclxuICB9XHJcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcclxuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcclxuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XHJcbiAgaWYgKG5vbmNlKSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xyXG4gIHZhciBjc3MgPSBcIlwiO1xyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XHJcbiAgfVxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xyXG4gIH1cclxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgfVxyXG4gIGNzcyArPSBvYmouY3NzO1xyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gRm9yIG9sZCBJRVxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cclxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcclxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxufVxyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XHJcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcclxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxyXG4gICAgfTtcclxuICB9XHJcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG4gIHJldHVybiB7XHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcclxuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xyXG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XHJcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBob21lQ29udGVudCgpIHtcclxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBob21lLmNsYXNzTmFtZSA9ICdob21lIHNlbGVjdGVkJ1xyXG5cclxuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBkZXNjLmNsYXNzTmFtZSA9ICdkZXNjIGRpc2gnXHJcbiAgZGVzYy5pbm5lckhUTUwgPSAnVGhhdCBGb29kIFBsYWNlIGlzIGFuIHVwc2NhbGUgYW5kIHNvcGhpc3RpY2F0ZWQgZGluaW5nIGVzdGFibGlzaG1lbnQgdGhhdCBzZXRzIHRoZSBzdGFuZGFyZCBmb3IgZXhxdWlzaXRlIGN1bGluYXJ5IGV4cGVyaWVuY2VzLiBOZXN0bGVkIGluIHRoZSBoZWFydCBvZiBhIGJ1c3RsaW5nIGNpdHksIHRoaXMgcmVzdGF1cmFudCBpcyBhIGhhdmVuIGZvciBmb29kIGVudGh1c2lhc3RzIHNlZWtpbmcgYSBtZW1vcmFibGUgZ2FzdHJvbm9taWMgYWR2ZW50dXJlLidcclxuXHJcbiAgY29uc3QgYW1iaWFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGFtYmlhbmNlLmNsYXNzTmFtZSA9ICdkZXNjJ1xyXG4gIGFtYmlhbmNlLmlubmVySFRNTCA9ICc8c3Ryb25nPkFNQklBTkNFPC9zdHJvbmc+QXMgeW91IHN0ZXAgdGhyb3VnaCB0aGUgZWxlZ2FudCBkb29ycyBvZiBUaGF0IEZvb2QgUGxhY2UsIHlvdSBhcmUgdHJhbnNwb3J0ZWQgaW50byBhIHdvcmxkIG9mIG9wdWxlbmNlIGFuZCByZWZpbmVtZW50LiBUaGUgaW50ZXJpb3IgZGVjb3IgaXMgYSBoYXJtb25pb3VzIGJsZW5kIG9mIGNvbnRlbXBvcmFyeSBkZXNpZ24gYW5kIGNsYXNzaWMgY2hhcm0uIFJpY2ggbWFob2dhbnkgd29vZCBhY2NlbnRzIGFuZCBzb2Z0LCB3YXJtIGxpZ2h0aW5nIGNyZWF0ZSBhbiBpbnZpdGluZyBhbmQgaW50aW1hdGUgYXRtb3NwaGVyZS5UaGUgcmVzdGF1cmFudCBhbHNvIGJvYXN0cyBhIHNwYWNpb3VzIG91dGRvb3IgdGVycmFjZSwgY29tcGxldGUgd2l0aCBsdXNoIGdyZWVuZXJ5LCBwZXJmZWN0IGZvciBhbCBmcmVzY28gZGluaW5nIG9uIHBsZWFzYW50IGV2ZW5pbmdzLidcclxuXHJcbiAgY29uc3QgY3Vpc2luZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY3Vpc2luZS5jbGFzc05hbWUgPSAnZGVzYydcclxuICBjdWlzaW5lLmlubmVySFRNTCA9ICc8c3Ryb25nPkNVSVNJTkU8L3N0cm9uZz5UaGUgY3VsaW5hcnkgdGVhbSBhdCBUaGF0IEZvb2QgUGxhY2UgaXMgcmVub3duZWQgZm9yIGl0cyBjcmVhdGl2aXR5IGFuZCBkZWRpY2F0aW9uIHRvIGRlbGl2ZXJpbmcgYW4gZXh0cmFvcmRpbmFyeSBkaW5pbmcgZXhwZXJpZW5jZS4gVGhlIG1lbnUgaXMgYSBjYXJlZnVsbHkgY3VyYXRlZCBzZWxlY3Rpb24gb2YgZ2xvYmFsbHkgaW5zcGlyZWQgZGlzaGVzLCBjcmFmdGVkIHdpdGggcHJlY2lzaW9uIGFuZCBhcnRpc3RyeS4gRnJvbSB0aGUgZnJlc2hlc3Qgc2VhZm9vZCB0byBwcmltZSBjdXRzIG9mIG1lYXQsIGV2ZXJ5IGluZ3JlZGllbnQgaXMgbWV0aWN1bG91c2x5IHNvdXJjZWQgdG8gZW5zdXJlIHRoZSBoaWdoZXN0IHF1YWxpdHkuIFdoZXRoZXIgeW91XFwncmUgYSBzZWFmb29kIGFmaWNpb25hZG8sIGEgY2Fybml2b3JlLCBvciBhIHZlZ2V0YXJpYW4sIFRoYXQgRm9vZCBQbGFjZSBoYXMgc29tZXRoaW5nIHRvIGRlbGlnaHQgeW91ciBwYWxhdGUnXHJcblxyXG4gIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgc2VsZWN0aW9uLmNsYXNzTmFtZSA9ICdkZXNjJ1xyXG4gIHNlbGVjdGlvbi5pbm5lckhUTUwgPSAnPHN0cm9uZz5XSU5FICYgQkVWRVJBR0UgU0VMRUNUSU9OPC9zdHJvbmc+VGhlIHdpbmUgY2VsbGFyIGF0IFRoYXQgRm9vZCBQbGFjZSBpcyBleHRlbnNpdmUsIGJvYXN0aW5nIGFuIGltcHJlc3NpdmUgY29sbGVjdGlvbiBvZiBib3RoIHZpbnRhZ2UgYW5kIGNvbnRlbXBvcmFyeSB3aW5lcyBmcm9tIGFyb3VuZCB0aGUgd29ybGQuIFRoZSBzb21tZWxpZXIgaXMgcmVhZHkgdG8gYXNzaXN0IGd1ZXN0cyBpbiBzZWxlY3RpbmcgdGhlIHBlcmZlY3Qgd2luZSB0byBjb21wbGVtZW50IHRoZWlyIG1lYWwuIFRoZSByZXN0YXVyYW50IGFsc28gb2ZmZXJzIGEgcmFuZ2Ugb2YgY3JhZnQgY29ja3RhaWxzLCBhcnRpc2FuYWwgc3Bpcml0cywgYW5kIG5vbi1hbGNvaG9saWMgb3B0aW9ucyBmb3IgdGhvc2Ugc2Vla2luZyBhbHRlcm5hdGl2ZSBiZXZlcmFnZXMuJ1xyXG5cclxuICBob21lLmFwcGVuZENoaWxkKGRlc2MpXHJcbiAgaG9tZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKVxyXG4gIGhvbWUuYXBwZW5kQ2hpbGQoYW1iaWFuY2UpXHJcbiAgaG9tZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKVxyXG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3Vpc2luZSlcclxuICBob21lLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpXHJcbiAgaG9tZS5hcHBlbmRDaGlsZChzZWxlY3Rpb24pXHJcblxyXG4gIHJldHVybiBob21lXHJcbn1cclxuXHJcbmV4cG9ydCB7aG9tZUNvbnRlbnR9IiwiZnVuY3Rpb24gaW5mb0NvbnRlbnQoKSB7XHJcbiAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgaW5mby5jbGFzc05hbWUgPSAnaW5mbydcclxuXHJcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGxvY2F0aW9uLmNsYXNzTmFtZSA9ICdkZXNjIGRpc2gnXHJcbiAgbG9jYXRpb24uaW5uZXJIVE1MID0gJ0xvY2F0ZWQgaW4gdGhlIGhlYXJ0IG9mIFNhdm9yeXZpbGxlLCBUaGF0IEZvb2QgUGxhY2UgZW5qb3lzIGEgcHJpbWUgbG9jYXRpb24gaW4gdGhlIGNoYXJtaW5nIEN1bGluYXJ5IENvdW50eS4gVGhlIHJlc3RhdXJhbnQgaXMgbmVzdGxlZCBpbiBEZWxpZ2h0ZnVsdmlsbGUsIGEgdmlicmFudCBhbmQgcGljdHVyZXNxdWUgbmVpZ2hib3Job29kIGtub3duIGZvciBpdHMgY3VsaW5hcnkgZGVsaWdodHMgYW5kIGN1bHR1cmFsIGF0dHJhY3Rpb25zLidcclxuXHJcbiAgY29uc3QgbmlnaHRsaWZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBuaWdodGxpZmUuY2xhc3NOYW1lID0gJ2Rlc2MnXHJcbiAgbmlnaHRsaWZlLmlubmVySFRNTCA9ICc8c3Ryb25nPlZJQlJBTlQgTklHSFRMSUZFPC9zdHJvbmc+QXMgZXZlbmluZyBmYWxscywgRGVsaWdodGZ1bHZpbGxlIGNvbWVzIGFsaXZlIHdpdGggYSB2aWJyYW50IG5pZ2h0bGlmZSBzY2VuZS4gTmVhcmJ5IGJhcnMsIGphenogY2x1YnMsIGFuZCBjb2NrdGFpbCBsb3VuZ2VzIG9mZmVyIGxpdmUgbXVzaWMsIGNyYWZ0IGNvY2t0YWlscywgYW5kIGEgY2hhbmNlIHRvIHVud2luZCBhZnRlciBhIGRlbGljaW91cyBtZWFsIGF0IFRoYXQgRm9vZCBQbGFjZS4nXHJcblxyXG4gIGNvbnN0IGZhcm1lcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGZhcm1lcnMuY2xhc3NOYW1lID0gJ2Rlc2MnXHJcbiAgZmFybWVycy5pbm5lckhUTUwgPSAnPHN0cm9uZz5GQVJNRVJTXFwnIE1BUktFVDwvc3Ryb25nPk9uIHdlZWtlbmRzLCB0aGUgbmVhcmJ5IEZhcm1lcnNcXCcgTWFya2V0IGJ1enplcyB3aXRoIGFjdGl2aXR5LiBMb2NhbCBmYXJtZXJzIGFuZCBhcnRpc2FucyBzaG93Y2FzZSBmcmVzaCBwcm9kdWNlLCBoYW5kY3JhZnRlZCBnb29kcywgYW5kIGEgdmFyaWV0eSBvZiB1bmlxdWUgZm9vZCBwcm9kdWN0cy4gSXRcXCdzIGEgZGVsaWdodGZ1bCBwbGFjZSB0byBleHBsb3JlIGFuZCBzYW1wbGUgbG9jYWwgZmxhdm9ycy4nXHJcblxyXG4gIGNvbnN0IGFyY2hpdGVjdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgYXJjaGl0ZWN0dXJlLmNsYXNzTmFtZSA9ICdkZXNjJ1xyXG4gIGFyY2hpdGVjdHVyZS5pbm5lckhUTUwgPSAnPHN0cm9uZz5ISVNUT1JJQyBBUkNISVRFQ1RVUkU8L3N0cm9uZz4gVGhlIGFyY2hpdGVjdHVyZSBpbiBEZWxpZ2h0ZnVsdmlsbGUgaXMgYSBtaXggb2YgaGlzdG9yaWMgY2hhcm0gYW5kIG1vZGVybiBkZXNpZ24uIFlvdVxcJ2xsIGZpbmQgcXVhaW50IGNvYmJsZXN0b25lIHN0cmVldHMgbGluZWQgd2l0aCB3ZWxsLXByZXNlcnZlZCBoZXJpdGFnZSBidWlsZGluZ3MgYWxvbmdzaWRlIHNsZWVrLCBjb250ZW1wb3Jhcnkgc3RydWN0dXJlcy4nXHJcblxyXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGFkZHJlc3MuY2xhc3NOYW1lID0gJ3NpZ25hdHVyZSdcclxuICBhZGRyZXNzLmlubmVySFRNTCA9ICc8c3Ryb25nPkFERFJFU1M8L3N0cm9uZz48ZGl2IGNsYXNzPVwiZGlzaFwiPlRoYXQgRm9vZCBQbGFjZSw8YnI+MTIzIEdvdXJtZXQgQXZlbnVlLDxicj5TYXZvcnl2aWxsZSwgQ3VsaW5hcnkgQ291bnR5LDxicj5EZWxpZ2h0ZnVsdmlsbGUgNTY3ODk8L2Rpdj4nXHJcblxyXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGNvbnRhY3QuY2xhc3NOYW1lID0gJ3NpZ25hdHVyZSdcclxuICBjb250YWN0LmlubmVySFRNTCA9ICc8c3Ryb25nPkNPTlRBQ1Q8L3N0cm9uZz48ZGl2IGNsYXNzPVwiZGlzaFwiPjxzdHJvbmc+UGhvbmU6PC9zdHJvbmc+ICg1NTUpIDEyMy00NTY3PGJyPjxzdHJvbmc+RW1haWw6PC9zdHJvbmc+IGluZm9AdGhhdGZvb2RwbGFjZS5jb208L2Rpdj4nXHJcblxyXG4gIGluZm8uYXBwZW5kQ2hpbGQobG9jYXRpb24pXHJcbiAgaW5mby5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKVxyXG4gIGluZm8uYXBwZW5kQ2hpbGQobmlnaHRsaWZlKVxyXG4gIGluZm8uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSlcclxuICBpbmZvLmFwcGVuZENoaWxkKGZhcm1lcnMpXHJcbiAgaW5mby5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKVxyXG4gIGluZm8uYXBwZW5kQ2hpbGQoYXJjaGl0ZWN0dXJlKVxyXG4gIGluZm8uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSlcclxuICBpbmZvLmFwcGVuZENoaWxkKGFkZHJlc3MpXHJcbiAgaW5mby5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKVxyXG4gIGluZm8uYXBwZW5kQ2hpbGQoY29udGFjdClcclxuICBcclxuICByZXR1cm4gaW5mb1xyXG59XHJcblxyXG5leHBvcnQge2luZm9Db250ZW50fSIsImZ1bmN0aW9uIG1lbnVDb250ZW50KCkge1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIG1lbnUuY2xhc3NOYW1lID0gJ21lbnUnXHJcbiAgXHJcbiAgY29uc3Qgc2lnbmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBzaWduYXR1cmUuY2xhc3NOYW1lID0gJ3NpZ25hdHVyZSdcclxuICBzaWduYXR1cmUuaW5uZXJIVE1MID0gJzxzdHJvbmc+U0lHTkFUVVJFIERJU0hFUzwvc3Ryb25nPjxkaXYgY2xhc3M9ZGlzaD48c3Ryb25nPlRydWZmbGUtaW5mdXNlZCBMb2JzdGVyIFJpc290dG88L3N0cm9uZz5DcmVhbXkgQXJib3JpbyByaWNlIGNvb2tlZCB0byBwZXJmZWN0aW9uLCBpbmZ1c2VkIHdpdGggdGhlIGVhcnRoeSBhcm9tYSBvZiBibGFjayB0cnVmZmxlcywgYW5kIGFkb3JuZWQgd2l0aCBzdWNjdWxlbnQgbG9ic3RlciBtZWF0PC9kaXY+PGRpdiBjbGFzcz1kaXNoPjxzdHJvbmc+RmlsZXQgTWlnbm9uIFJvc3Npbmk8L3N0cm9uZz5BIHRlbmRlciwgbWVsdC1pbi15b3VyLW1vdXRoIGZpbGV0IG1pZ25vbiB0b3BwZWQgd2l0aCBzZWFyZWQgZm9pZSBncmFzLCBkcml6emxlZCB3aXRoIGEgcmljaCB0cnVmZmxlIGRlbWktZ2xhY2UsIGFuZCBzZXJ2ZWQgd2l0aCB0cnVmZmxlIG1hc2hlZCBwb3RhdG9lczwvZGl2PjxkaXYgY2xhc3M9ZGlzaD48c3Ryb25nPlZlZ2V0YWJsZSBHYXJkZW4gU3ltcGhvbnk8L3N0cm9uZz5BIHZpYnJhbnQgYW5kIGFydGlzdGljIHByZXNlbnRhdGlvbiBvZiBzZWFzb25hbCB2ZWdldGFibGVzIGFuZCBoZXJicywgY2VsZWJyYXRpbmcgdGhlIGNvbG9ycyBhbmQgZmxhdm9ycyBvZiB0aGUgZ2FyZGVuPC9kaXY+PGRpdiBjbGFzcz1kaXNoPjxzdHJvbmc+Q2hvY29sYXRlIERlY2FkZW5jZTwvc3Ryb25nPkEgc3VtcHR1b3VzIGRlc3NlcnQgdGhhdCBjb21iaW5lcyBsYXllcnMgb2YgZGFyayBhbmQgd2hpdGUgY2hvY29sYXRlIG1vdXNzZSwgZ2FybmlzaGVkIHdpdGggZWRpYmxlIGdvbGQgbGVhZiBhbmQgZnJlc2ggYmVycmllczwvZGl2PidcclxuXHJcbiAgY29uc3QgYXBwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgYXBwcy5jbGFzc05hbWUgPSAnZGVzYydcclxuICBhcHBzLmlubmVySFRNTCA9ICc8c3Ryb25nPkFQUEVUSVpFUlM8L3N0cm9uZz48dWw+PGxpPjxzdHJvbmc+U2VhcmVkIEFoaSBUdW5hIFRhY29zOjwvc3Ryb25nPiBTbGljZXMgb2YgcGVyZmVjdGx5IHNlYXJlZCBBaGkgdHVuYSBzZXJ2ZWQgaW4gZGVsaWNhdGUgbWluaSB0YWNvcyB3aXRoIGF2b2NhZG8gY3JlbWEgYW5kIHBpY2tsZWQgcmFkaXNoZXM8L2xpPjxsaT48c3Ryb25nPk11c2hyb29tIFRydWZmbGUgQ3JvcXVldHRlczo8L3N0cm9uZz4gQ3Jpc3B5IG9uIHRoZSBvdXRzaWRlLCBjcmVhbXkgb24gdGhlIGluc2lkZSBjcm9xdWV0dGVzIGZlYXR1cmluZyBhIG1lZGxleSBvZiB3aWxkIG11c2hyb29tcyBhbmQgdHJ1ZmZsZSBvaWwsIHNlcnZlZCB3aXRoIGEgZ2FybGljIGFpb2xpIGRpcHBpbmcgc2F1Y2U8L2xpPjxsaT48c3Ryb25nPkNyaXNweSBEdWNrIFNwcmluZyBSb2xsczo8L3N0cm9uZz4gVGhpbiByaWNlIHBhcGVyIHJvbGxzIGZpbGxlZCB3aXRoIHRlbmRlciBkdWNrIGNvbmZpdCwganVsaWVubmUgdmVnZXRhYmxlcywgYW5kIGEgemVzdHkgcGx1bSBkaXBwaW5nIHNhdWNlPC9saT48bGk+PHN0cm9uZz5QcmF3biBhbmQgTWFuZ28gQ2V2aWNoZTo8L3N0cm9uZz4gRnJlc2ggcHJhd25zIG1hcmluYXRlZCBpbiBsaW1lIGFuZCBvcmFuZ2UganVpY2UsIG1peGVkIHdpdGggZGljZWQgbWFuZ28sIHJlZCBvbmlvbiwgYW5kIGNpbGFudHJvLCBzZXJ2ZWQgd2l0aCBob3VzZS1tYWRlIHRvcnRpbGxhIGNoaXBzPC9saT48L3VsPidcclxuXHJcbiAgY29uc3Qgc2FsYWRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBzYWxhZHMuY2xhc3NOYW1lID0gJ2Rlc2MnXHJcbiAgc2FsYWRzLmlubmVySFRNTCA9ICc8c3Ryb25nPlNBTEFEUzwvc3Ryb25nPjx1bD48bGk+PHN0cm9uZz5Sb2FzdGVkIEJlZXQgYW5kIEdvYXQgQ2hlZXNlIFNhbGFkOjwvc3Ryb25nPiBFYXJ0aHkgcm9hc3RlZCBiZWV0cywgbWl4ZWQgZ3JlZW5zLCBjYW5kaWVkIHBlY2FucywgYW5kIGNyZWFteSBnb2F0IGNoZWVzZSwgZHJpenpsZWQgd2l0aCBhIGhvbmV5LWJhbHNhbWljIHZpbmFpZ3JldHRlPC9saT48bGk+PHN0cm9uZz5LYWxlIGFuZCBRdWlub2EgU3VwZXJmb29kIFNhbGFkOjwvc3Ryb25nPiBBIGhlYWx0aC1jb25zY2lvdXMgY2hvaWNlIGZlYXR1cmluZyBrYWxlLCBxdWlub2EsIHJvYXN0ZWQgY2hpY2twZWFzLCBjaGVycnkgdG9tYXRvZXMsIGFuZCBhIHRhaGluaS1sZW1vbiBkcmVzc2luZzwvbGk+PC91bD4nXHJcblxyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIG1haW4uY2xhc3NOYW1lID0gJ2Rlc2MnXHJcbiAgbWFpbi5pbm5lckhUTUwgPSAnPHN0cm9uZz5NQUlOIENPVVJTRVM8L3N0cm9uZz48dWw+PGxpPjxzdHJvbmc+TGF2ZW5kZXItSW5mdXNlZCBSYWNrIG9mIExhbWI6PC9zdHJvbmc+IFN1Y2N1bGVudCBsYW1iIGNob3BzIG1hcmluYXRlZCBpbiBhIGZyYWdyYW50IGxhdmVuZGVyIGFuZCBoZXJiIHJ1Yiwgc2VydmVkIHdpdGggcm9hc3RlZCBnYXJsaWMgbWFzaGVkIHBvdGF0b2VzIGFuZCBncmlsbGVkIGFzcGFyYWd1czwvbGk+PGxpPjxzdHJvbmc+UGFuLVNlYXJlZCBIYWxpYnV0IHdpdGggTGVtb24gSGVyYiBCdXR0ZXI6PC9zdHJvbmc+IEZyZXNoIGhhbGlidXQgZmlsZXQgc2VhcmVkIHRvIHBlcmZlY3Rpb24gYW5kIHRvcHBlZCB3aXRoIGEgemVzdHkgbGVtb24gaGVyYiBidXR0ZXIgc2F1Y2UsIGFjY29tcGFuaWVkIGJ5IHNhdXTDqWVkIGJhYnkgc3BpbmFjaCBhbmQgZ2FybGljIG1hc2hlZCBwb3RhdG9lczwvbGk+PGxpPjxzdHJvbmc+V2lsZCBNdXNocm9vbSBSaXNvdHRvOjwvc3Ryb25nPiBDcmVhbXkgQXJib3JpbyByaWNlIGNvb2tlZCB3aXRoIGEgbWVkbGV5IG9mIHdpbGQgbXVzaHJvb21zLCBmaW5pc2hlZCB3aXRoIHRydWZmbGUgb2lsIGFuZCBwYXJtZXNhbiBjaGVlc2U8L2xpPjxsaT48c3Ryb25nPlZlZ2V0YWJsZSBUYWdpbmU6PC9zdHJvbmc+IEEgdmVnZXRhcmlhbiBkZWxpZ2h0IGZlYXR1cmluZyBzbG93LWNvb2tlZCBNb3JvY2Nhbi1zcGljZWQgdmVnZXRhYmxlcywgc2VydmVkIHdpdGggY291c2NvdXMgYW5kIGEgc2lkZSBvZiBoYXJpc3NhIHNhdWNlPC9saT48L3VsPidcclxuXHJcbiAgY29uc3QgZGVzc2VydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgZGVzc2VydC5jbGFzc05hbWUgPSAnZGVzYydcclxuICBkZXNzZXJ0LmlubmVySFRNTCA9ICc8c3Ryb25nPkRFU1NFUlRTPC9zdHJvbmc+PHVsPjxsaT48c3Ryb25nPkxlbW9uIExhdmVuZGVyIFBhbm5hIENvdHRhOjwvc3Ryb25nPiBBIGRlbGljYXRlIGRlc3NlcnQgd2l0aCBsYXllcnMgb2YgbGVtb24taW5mdXNlZCBwYW5uYSBjb3R0YSBhbmQgbGF2ZW5kZXItc2NlbnRlZCB3aGlwcGVkIGNyZWFtLCBnYXJuaXNoZWQgd2l0aCBmcmVzaCBiZXJyaWVzPC9saT48bGk+PHN0cm9uZz5Nb2x0ZW4gQ2hvY29sYXRlIExhdmEgQ2FrZTo8L3N0cm9uZz4gQSBjaG9jb2xhdGUgbG92ZXJcXCdzIGRyZWFtIHdpdGggYSB3YXJtLCBnb29leSBjaG9jb2xhdGUgY2VudGVyLCBzZXJ2ZWQgd2l0aCB2YW5pbGxhIGJlYW4gaWNlIGNyZWFtIGFuZCBhIGRyaXp6bGUgb2YgcmFzcGJlcnJ5IGNvdWxpczwvbGk+PGxpPjxzdHJvbmc+VGlyYW1pc3UgTWFydGluaTo8L3N0cm9uZz4gQSBwbGF5ZnVsIHR3aXN0IG9uIHRoZSBjbGFzc2ljIGRlc3NlcnQsIHNlcnZlZCBpbiBhIG1hcnRpbmkgZ2xhc3Mgd2l0aCBsYXllcnMgb2YgbWFzY2FycG9uZSBjaGVlc2UsIGNvZmZlZS1zb2FrZWQgbGFkeWZpbmdlcnMsIGFuZCBhIGR1c3Rpbmcgb2YgY29jb2EgcG93ZGVyPC9saT48bGk+PHN0cm9uZz5BcnRpc2FuIENoZWVzZSBQbGF0ZTo8L3N0cm9uZz4gQSBjdXJhdGVkIHNlbGVjdGlvbiBvZiBhcnRpc2FuYWwgY2hlZXNlcywgc2VydmVkIHdpdGggaG91c2UtbWFkZSBmcnVpdCBjb21wb3RlLCBob25leSwgYW5kIGEgdmFyaWV0eSBvZiBjcmFja2VycyBhbmQgYnJlYWQ8L2xpPjwvdWw+J1xyXG5cclxuICBtZW51LmFwcGVuZENoaWxkKHNpZ25hdHVyZSlcclxuICBtZW51LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpXHJcbiAgbWVudS5hcHBlbmRDaGlsZChhcHBzKVxyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSlcclxuICBtZW51LmFwcGVuZENoaWxkKHNhbGFkcylcclxuICBtZW51LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpXHJcbiAgbWVudS5hcHBlbmRDaGlsZChtYWluKVxyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSlcclxuICBtZW51LmFwcGVuZENoaWxkKGRlc3NlcnQpXHJcblxyXG4gIHJldHVybiBtZW51XHJcbn1cclxuXHJcbmV4cG9ydCB7bWVudUNvbnRlbnR9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBob21lQ29udGVudCB9IGZyb20gJy4vaG9tZS5qcydcclxuaW1wb3J0IHsgbWVudUNvbnRlbnQgfSBmcm9tICcuL21lbnUuanMnXHJcbmltcG9ydCB7IGluZm9Db250ZW50IH0gZnJvbSAnLi9pbmZvLmpzJ1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQgc2kgZnJvbSAnLi9pbWcvcGV4ZWxzLXZvbGthbi12YXJkYXItMzg4Nzk4NS5qcGcnXHJcbmltcG9ydCBoaSBmcm9tICcuL2ltZy9hYnN1cmQuZGVzaWduLWNoYXB0ZXIxLTMxLnBuZydcclxuaW1wb3J0IGJpIGZyb20gJy4vaW1nL2lpN3VxMzg1Y2M0NmxpdDZ2czY1ZmM4MzJhLnBuZydcclxuXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxyXG5oZWFkZXIuaW5uZXJIVE1MID0gJzxlbT5UaGF0IEZvb2QgUGxhY2U8L2VtPidcclxuY29uc3QgaGVhZEltZyA9IG5ldyBJbWFnZSgpXHJcbmhlYWRJbWcuc3JjID0gaGlcclxuaGVhZEltZy5jbGFzc05hbWUgPSAnaGVhZCdcclxuaGVhZEltZy50aXRsZSA9ICdSb3lcXCdzIFNlY3JldCdcclxuaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRJbWcpXHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5jb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcidcclxuY29udGFpbmVyLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwidGFic1wiPjxkaXYgaWQ9XCJob21lXCIgY2xhc3M9XCJ0YWIgYWN0aXZlXCI+SE9NRTwvZGl2PjxkaXYgaWQ9XCJtZW51XCIgY2xhc3M9XCJ0YWJcIj5NRU5VPC9kaXY+PGRpdiBpZD1cImluZm9cIiBjbGFzcz1cInRhYlwiPklORk88L2Rpdj48L2Rpdj4nXHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxubWFpbi5jbGFzc05hbWUgPSAnbWFpbidcclxuXHJcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5tYWluQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdtYWluLWNvbnRhaW5lcidcclxuY29uc3QgaG9tZSA9IGhvbWVDb250ZW50KClcclxubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lKVxyXG5jb25zdCBtZW51ID0gbWVudUNvbnRlbnQoKVxyXG5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUpXHJcbmNvbnN0IGluZm8gPSBpbmZvQ29udGVudCgpXHJcbm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbylcclxubWFpbi5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKVxyXG5cclxuY29uc3Qgc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnNpZGUuY2xhc3NOYW1lID0gJ3NpZGUnXHJcblxyXG5jb25zdCBzaWRlSW1nID0gbmV3IEltYWdlKClcclxuc2lkZUltZy5zcmMgPSBzaVxyXG5zaWRlSW1nLnRpdGxlID0gJ0ltYWdlIGJ5IFZvbGthbiBWYXJkYXJcXG5Tb3VyY2VkIGZyb20gUGV4ZWxzJ1xyXG5zaWRlSW1nLmNsYXNzTGlzdC5hZGQoJ3NpZGUtaW1hZ2UnKVxyXG5zaWRlLmFwcGVuZENoaWxkKHNpZGVJbWcpXHJcblxyXG5jb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbilcclxuY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGUpXHJcblxyXG5jb25zdCBjdXJ2ZUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5jdXJ2ZUxlZnQuY2xhc3NOYW1lID0gJ2N1cnZlLWxlZnQnXHJcbmNvbnN0IGN1cnZlUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5jdXJ2ZVJpZ2h0LmNsYXNzTmFtZSA9ICdjdXJ2ZS1yaWdodCdcclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjdXJ2ZUxlZnQpXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3VydmVSaWdodClcclxuXHJcbmNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpXHJcbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpXHJcbmNvbnN0IGluZm9UYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mbycpXHJcblxyXG5ob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGhvbWUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxyXG4gIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxyXG4gIGluZm8uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxyXG4gIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICBtZW51VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgaW5mb1RhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG59KVxyXG5cclxubWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBob21lLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcclxuICBtZW51LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcclxuICBpbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcclxuICBob21lVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gIGluZm9UYWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxufSlcclxuXHJcbmluZm9UYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaG9tZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXHJcbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXHJcbiAgaW5mby5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXHJcbiAgaG9tZVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gIG1lbnVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICBpbmZvVGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbn0pXHJcblxyXG5jb25zdCBiYW5hbmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5iYW5hbmEuY2xhc3NOYW1lID0gJ2JhbmFuYSdcclxuYmFuYW5hLmlubmVySFRNTCA9ICc8c3Ryb25nPkNBTE9SWSBGSU5ERVI8L3N0cm9uZz4nXHJcbmNvbnN0IGJhbmFuYUltZyA9IG5ldyBJbWFnZSgpXHJcbmJhbmFuYUltZy5zcmMgPSBiaVxyXG5iYW5hbmFJbWcuY2xhc3NOYW1lID0gJ2JhbmFuYS1pbWcnXHJcbmJhbmFuYS5hcHBlbmRDaGlsZChiYW5hbmFJbWcpXHJcbmNvbnN0IGNhbG9yaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuY2Fsb3JpZXMuaW5uZXJIVE1MID0gJ0FwcHJveC4gMTA1LTEyMCBjYWxvcmllczxicj5wZXIgbWVkaXVtIHNpemVkIHNlcnZpbmcgb2YgYmFuYW5hPGJyPig3LTggaW5jaGVzKSdcclxuYmFuYW5hLmFwcGVuZENoaWxkKGNhbG9yaWVzKVxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhbmFuYSlcclxuXHJcbmhlYWRJbWcub25jbGljayA9ICgpID0+IHtcclxuICBiYW5hbmEuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93LWJhbmFuYScpID8gYmFuYW5hLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctYmFuYW5hJykgOiBiYW5hbmEuY2xhc3NMaXN0LmFkZCgnc2hvdy1iYW5hbmEnKVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9