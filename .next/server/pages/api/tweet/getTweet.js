"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/tweet/getTweet";
exports.ids = ["pages/api/tweet/getTweet"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/server/db.ts":
/*!**************************!*\
  !*** ./lib/server/db.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.db = db;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL2RiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQU05QyxNQUFNQyxFQUFFLEdBQUcsSUFBSUQsd0RBQVksRUFBRTtBQUU3QixJQUFJRSxJQUFzQyxFQUFFQyxNQUFNLENBQUNGLEVBQUUsR0FBR0EsRUFBRSxDQUFDO0FBRTNELGlFQUFlQSxFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vbGliL3NlcnZlci9kYi50cz82NDE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBkYjogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBkYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIGdsb2JhbC5kYiA9IGRiO1xuXG5leHBvcnQgZGVmYXVsdCBkYjtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJkYiIsInByb2Nlc3MiLCJnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/server/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/tweet/getTweet.tsx":
/*!**************************************!*\
  !*** ./pages/api/tweet/getTweet.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/server/db */ \"(api)/./lib/server/db.ts\");\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const userId = req.session.userId;\n            const tweet = await _lib_server_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tweet.findFirst({\n                where: {\n                    userId: Number(userId)\n                }\n            });\n            res.status(200).json({\n                tweet\n            });\n        } catch (error) {\n            console.error(\"Error fetching tweets:\", error);\n            res.status(500).json({\n                error: \"Failed to fetch tweets\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHdlZXQvZ2V0VHdlZXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ3dDO0FBRXpCLGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNBLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixJQUFJO1lBQ0YsTUFBTUMsTUFBTSxHQUFHSCxHQUFHLENBQUNJLE9BQU8sQ0FBQ0QsTUFBTTtZQUNqQyxNQUFNRSxLQUFLLEdBQUcsTUFBTVAsc0VBQWtCLENBQUM7Z0JBQ3JDUyxLQUFLLEVBQUU7b0JBQ0xKLE1BQU0sRUFBRUssTUFBTSxDQUFDTCxNQUFNLENBQUM7aUJBQ3ZCO2FBQ0YsQ0FBQztZQUNGRixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFTCxLQUFLO2FBQUUsQ0FBQyxDQUFDO1NBQ2pDLENBQUMsT0FBT00sS0FBSyxFQUFFO1lBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHdCQUF3QixFQUFFQSxLQUFLLENBQUMsQ0FBQztZQUMvQ1YsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsS0FBSyxFQUFFLHdCQUF3QjthQUFFLENBQUMsQ0FBQztTQUMzRDtLQUNGLE1BQU07UUFDTFYsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRyxPQUFPLEVBQUUsb0JBQW9CO1NBQUUsQ0FBQyxDQUFDO0tBQ3pEO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vcGFnZXMvYXBpL3R3ZWV0L2dldFR3ZWV0LnRzeD82NTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGRiIGZyb20gXCIuLi8uLi8uLi9saWIvc2VydmVyL2RiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlcklkID0gcmVxLnNlc3Npb24udXNlcklkO1xuICAgICAgY29uc3QgdHdlZXQgPSBhd2FpdCBkYi50d2VldC5maW5kRmlyc3Qoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIHVzZXJJZDogTnVtYmVyKHVzZXJJZCksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdHdlZXQgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0d2VldHM6XCIsIGVycm9yKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHR3ZWV0c1wiIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkYiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VySWQiLCJzZXNzaW9uIiwidHdlZXQiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsIk51bWJlciIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/tweet/getTweet.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/tweet/getTweet.tsx"));
module.exports = __webpack_exports__;

})();