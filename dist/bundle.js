/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/client.js":
/*!**************************!*\
  !*** ./client/client.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const other = __webpack_require__(/*! ./other.js */ \"./client/other.js\");\r\n\r\nother.printwooooo();\r\ndebugger;\r\nconst handleResponse = async (response) => {\r\n  const content = document.getElementById('content');\r\n  \r\n  switch(response.status) {\r\n    case 200:\r\n      content.innerHTML = `<b>Success</b>`;\r\n      break;\r\n    case 400:\r\n      content.innerHTML = `<b>Bad Request</b>`;\r\n      break;\r\n    case 404:\r\n      content.innerHTML = `<b>Not Found</b>`;\r\n      break;\r\n    default:\r\n      content.innerHTML = `<p>Status Code not Implemented By Client</p>`;\r\n      break;\r\n  }\r\n\r\n  const resObj = await response.json();\r\n  content.innerHTML += `<p>${resObj.message}</p>`;\r\n};\r\n\r\nconst sendFetch = async (url) => {\r\n  const response = await fetch(url);\r\n  handleResponse(response);\r\n};\r\n\r\nconst init = () => {\r\n  const successButton = document.querySelector(\"#success\");\r\n  const badRequestButton = document.querySelector(\"#badRequest\");\r\n  const notFoundButton = document.querySelector(\"#notFound\");\r\n\r\n  const success = () => sendFetch('/success');\r\n  const badRequest = () => sendFetch('/badRequest');\r\n  const notFound = () => sendFetch('/somethingUnhandled');\r\n\r\n  successButton.addEventListener('click', success);\r\n  badRequestButton.addEventListener('click', badRequest);\r\n  notFoundButton.addEventListener('click', notFound);\r\n};\r\n\r\nwindow.onload = init;\n\n//# sourceURL=webpack://simple_http/./client/client.js?");

/***/ }),

/***/ "./client/other.js":
/*!*************************!*\
  !*** ./client/other.js ***!
  \*************************/
/***/ ((module) => {

eval("const printwooooo = () => {\r\n  console.log('woooooo');\r\n}\r\n\r\nmodule.exports = {\r\n  printwooooo\r\n};\n\n//# sourceURL=webpack://simple_http/./client/other.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./client/client.js");
/******/ 	
/******/ })()
;