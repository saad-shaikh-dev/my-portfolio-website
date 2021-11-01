"use strict";
exports.id = 218;
exports.ids = [218];
exports.modules = {

/***/ 5881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "/home/saad/Desktop/my-projects/my-portfolio-website/node_modules/react/index.js"
var index_js_ = __webpack_require__(8611);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(2031);
;// CONCATENATED MODULE: ./src/components/Navbar.js
const Navbar=()=>{return/*#__PURE__*/index_js_default().createElement("nav",{className:"navbar"},/*#__PURE__*/index_js_default().createElement("h1",null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/"},"Saad Shaikh")),/*#__PURE__*/index_js_default().createElement("div",{className:"navlinks",id:"menu"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/"},"Home"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/my-projects"},"My Projects"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/my-articles"},"My Articles")));};/* harmony default export */ const components_Navbar = (Navbar);
;// CONCATENATED MODULE: ./src/components/Layout.js
const Layout=({children})=>{return/*#__PURE__*/index_js_default().createElement("div",{className:"layout"},/*#__PURE__*/index_js_default().createElement(components_Navbar,null),/*#__PURE__*/index_js_default().createElement("div",{className:"main"},children),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("footer",{className:"footer"},/*#__PURE__*/index_js_default().createElement("p",null,"I'm available for hire. You can contact me at ",/*#__PURE__*/index_js_default().createElement("a",{className:"link",href:"mailto:saad.shaikh.dev@protonmail.com"},"saad.shaikh.dev@protonmail.com"),"."),/*#__PURE__*/index_js_default().createElement("p",null,"This website was made by Saad Shaikh - Copyright 2021 Saad Shaikh")));};/* harmony default export */ const components_Layout = (Layout);

/***/ }),

/***/ 2490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8611);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2031);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5881);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4593);
const Articles=({data})=>{console.log(data);const articles=data.articles.nodes;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{charSet:"utf-8"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title",null,"My Articles - Saad Shaikh")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"list-page"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",null,"My Articles"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"list"},articles.map(article=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:article.id},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:article.frontmatter.slug},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"list-card"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4",{className:"two-lines"},article.frontmatter.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"Date: ",article.frontmatter.date))))))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Articles);const query="1426506028";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-my-articles-js.js.map