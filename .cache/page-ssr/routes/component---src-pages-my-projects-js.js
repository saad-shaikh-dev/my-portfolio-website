"use strict";
exports.id = 809;
exports.ids = [809];
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

/***/ 2518:
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
const Projects=({data})=>{console.log(data);const projects=data.projects.nodes;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{charSet:"utf-8"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title",null,"My Projects - Saad Shaikh")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"list-page"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",null,"My Portfolio"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",null,"Projects & websites that I have created."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"list"},projects.map(project=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:project.id},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:project.frontmatter.projectLink,target:"_blank"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"list-card"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4",null,project.frontmatter.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{className:"thumbnail",src:project.frontmatter.image,alt:project.frontmatter.title+" image"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"tools"},"Tools: ",project.frontmatter.stack),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"two-lines"},project.frontmatter.description))))))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);const query="3419828304";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-my-projects-js.js.map