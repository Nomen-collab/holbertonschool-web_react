/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/subjects/Cpp.ts":
/*!****************************!*\
  !*** ./js/subjects/Cpp.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cpp: () => (/* binding */ Cpp)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./js/subjects/Subject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Cpp = /** @class */ (function (_super) {
    __extends(Cpp, _super);
    function Cpp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cpp.prototype.getRequirements = function () {
        return 'Here is the list of requirements for Cpp';
    };
    Cpp.prototype.getAvailableTeacher = function () {
        if (this.teacher && this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
            return "Available Teacher: ".concat(this.teacher.firstName);
        }
        return 'No available teacher';
    };
    return Cpp;
}(_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject));



/***/ }),

/***/ "./js/subjects/Java.ts":
/*!*****************************!*\
  !*** ./js/subjects/Java.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Java: () => (/* binding */ Java)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./js/subjects/Subject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Java = /** @class */ (function (_super) {
    __extends(Java, _super);
    function Java() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Java.prototype.getRequirements = function () {
        return 'Here is the list of requirements for Java';
    };
    Java.prototype.getAvailableTeacher = function () {
        if (this.teacher && this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
            return "Available Teacher: ".concat(this.teacher.firstName);
        }
        return 'No available teacher';
    };
    return Java;
}(_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject));



/***/ }),

/***/ "./js/subjects/React.ts":
/*!******************************!*\
  !*** ./js/subjects/React.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   React: () => (/* binding */ React)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./js/subjects/Subject.ts");

var React = /** @class */ (function () {
    function React() {
        this.subj = new _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    React.prototype.setTeacher = function (teacher) {
        this.subj.setTeacher(teacher);
    };
    React.prototype.getRequirements = function () {
        return 'Here is the list of requirements for React';
    };
    React.prototype.getAvailableTeacher = function () {
        var t = this.subj.teacher;
        if (t && t.experienceTeachingReact && t.experienceTeachingReact > 0) {
            return "Available Teacher: ".concat(t.firstName);
        }
        return 'No available teacher';
    };
    return React;
}());



/***/ }),

/***/ "./js/subjects/Subject.ts":
/*!********************************!*\
  !*** ./js/subjects/Subject.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Subject: () => (/* binding */ Subject)
/* harmony export */ });
var Subject = /** @class */ (function () {
    function Subject() {
        this.teacher = null;
    }
    Subject.prototype.setTeacher = function (teacher) {
        this.teacher = teacher;
    };
    return Subject;
}());



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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subjects/Cpp */ "./js/subjects/Cpp.ts");
/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjects/React */ "./js/subjects/React.ts");
/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subjects/Java */ "./js/subjects/Java.ts");



// Test Cpp
var cpp = new _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__.Cpp();
var teacherA = {
    firstName: 'Alice',
    lastName: 'Dupont',
    experienceTeachingC: 5,
};
cpp.setTeacher(teacherA);
console.log(cpp.getRequirements()); // Here is the list of requirements for Cpp
console.log(cpp.getAvailableTeacher()); // Available Teacher: Alice
// Test React (enseignant sans expérience)
var reactCourse = new _subjects_React__WEBPACK_IMPORTED_MODULE_1__.React();
var teacherB = {
    firstName: 'Bob',
    lastName: 'Martin',
    // pas d'experienceTeachingReact
};
reactCourse.setTeacher(teacherB);
console.log(reactCourse.getRequirements()); // Here is the list of requirements for React
console.log(reactCourse.getAvailableTeacher()); // No available teacher
// Test Java
var javaCourse = new _subjects_Java__WEBPACK_IMPORTED_MODULE_2__.Java();
var teacherC = {
    firstName: 'Carol',
    lastName: 'Nguyen',
    experienceTeachingJava: 3,
};
javaCourse.setTeacher(teacherC);
console.log(javaCourse.getRequirements()); // Here is the list of requirements for Java
console.log(javaCourse.getAvailableTeacher()); // Available Teacher: Carol

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dF9kZXBlbmRlbmNpZXMvLi9qcy9zdWJqZWN0cy9DcHAudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9zdWJqZWN0cy9KYXZhLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvc3ViamVjdHMvUmVhY3QudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9zdWJqZWN0cy9TdWJqZWN0LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICcuL1N1YmplY3QnO1xuaW1wb3J0IHsgVGVhY2hlciB9IGZyb20gJy4vVGVhY2hlcic7XG5cbmV4cG9ydCBjbGFzcyBDcHAgZXh0ZW5kcyBTdWJqZWN0IHtcbiAgZ2V0UmVxdWlyZW1lbnRzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdIZXJlIGlzIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3IgQ3BwJztcbiAgfVxuXG4gIGdldEF2YWlsYWJsZVRlYWNoZXIoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy50ZWFjaGVyICYmIHRoaXMudGVhY2hlci5leHBlcmllbmNlVGVhY2hpbmdDICYmIHRoaXMudGVhY2hlci5leHBlcmllbmNlVGVhY2hpbmdDID4gMCkge1xuICAgICAgcmV0dXJuIGBBdmFpbGFibGUgVGVhY2hlcjogJHt0aGlzLnRlYWNoZXIuZmlyc3ROYW1lfWA7XG4gICAgfVxuICAgIHJldHVybiAnTm8gYXZhaWxhYmxlIHRlYWNoZXInO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAnLi9TdWJqZWN0JztcbmltcG9ydCB7IFRlYWNoZXIgfSBmcm9tICcuL1RlYWNoZXInO1xuXG5leHBvcnQgY2xhc3MgSmF2YSBleHRlbmRzIFN1YmplY3Qge1xuICBnZXRSZXF1aXJlbWVudHMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0hlcmUgaXMgdGhlIGxpc3Qgb2YgcmVxdWlyZW1lbnRzIGZvciBKYXZhJztcbiAgfVxuXG4gIGdldEF2YWlsYWJsZVRlYWNoZXIoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy50ZWFjaGVyICYmIHRoaXMudGVhY2hlci5leHBlcmllbmNlVGVhY2hpbmdKYXZhICYmIHRoaXMudGVhY2hlci5leHBlcmllbmNlVGVhY2hpbmdKYXZhID4gMCkge1xuICAgICAgcmV0dXJuIGBBdmFpbGFibGUgVGVhY2hlcjogJHt0aGlzLnRlYWNoZXIuZmlyc3ROYW1lfWA7XG4gICAgfVxuICAgIHJldHVybiAnTm8gYXZhaWxhYmxlIHRlYWNoZXInO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAnLi9TdWJqZWN0JztcbmltcG9ydCB7IFRlYWNoZXIgfSBmcm9tICcuL1RlYWNoZXInO1xuXG5leHBvcnQgY2xhc3MgUmVhY3Qge1xuICBwcml2YXRlIHN1Ymo6IFN1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuXG4gIHNldFRlYWNoZXIodGVhY2hlcjogVGVhY2hlcikge1xuICAgIHRoaXMuc3Viai5zZXRUZWFjaGVyKHRlYWNoZXIpO1xuICB9XG5cbiAgZ2V0UmVxdWlyZW1lbnRzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdIZXJlIGlzIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3IgUmVhY3QnO1xuICB9XG5cbiAgZ2V0QXZhaWxhYmxlVGVhY2hlcigpOiBzdHJpbmcge1xuICAgIGNvbnN0IHQgPSB0aGlzLnN1YmoudGVhY2hlcjtcbiAgICBpZiAodCAmJiB0LmV4cGVyaWVuY2VUZWFjaGluZ1JlYWN0ICYmIHQuZXhwZXJpZW5jZVRlYWNoaW5nUmVhY3QgPiAwKSB7XG4gICAgICByZXR1cm4gYEF2YWlsYWJsZSBUZWFjaGVyOiAke3QuZmlyc3ROYW1lfWA7XG4gICAgfVxuICAgIHJldHVybiAnTm8gYXZhaWxhYmxlIHRlYWNoZXInO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUZWFjaGVyIH0gZnJvbSAnLi9UZWFjaGVyJztcblxuZXhwb3J0IGNsYXNzIFN1YmplY3Qge1xuICB0ZWFjaGVyOiBUZWFjaGVyIHwgbnVsbCA9IG51bGw7XG5cbiAgc2V0VGVhY2hlcih0ZWFjaGVyOiBUZWFjaGVyKSB7XG4gICAgdGhpcy50ZWFjaGVyID0gdGVhY2hlcjtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBDcHAgfSBmcm9tICcuL3N1YmplY3RzL0NwcCc7XG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gJy4vc3ViamVjdHMvUmVhY3QnO1xuaW1wb3J0IHsgSmF2YSB9IGZyb20gJy4vc3ViamVjdHMvSmF2YSc7XG5pbXBvcnQgeyBUZWFjaGVyIH0gZnJvbSAnLi9zdWJqZWN0cy9UZWFjaGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICcuL3N1YmplY3RzL1N1YmplY3QnO1xuXG4vLyBUZXN0IENwcFxuY29uc3QgY3BwID0gbmV3IENwcCgpO1xuY29uc3QgdGVhY2hlckE6IFRlYWNoZXIgPSB7XG4gIGZpcnN0TmFtZTogJ0FsaWNlJyxcbiAgbGFzdE5hbWU6ICdEdXBvbnQnLFxuICBleHBlcmllbmNlVGVhY2hpbmdDOiA1LFxufTtcbmNwcC5zZXRUZWFjaGVyKHRlYWNoZXJBIGFzIFRlYWNoZXIpO1xuY29uc29sZS5sb2coY3BwLmdldFJlcXVpcmVtZW50cygpKTsgICAgICAgICAgICAvLyBIZXJlIGlzIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3IgQ3BwXG5jb25zb2xlLmxvZyhjcHAuZ2V0QXZhaWxhYmxlVGVhY2hlcigpKTsgICAgICAgIC8vIEF2YWlsYWJsZSBUZWFjaGVyOiBBbGljZVxuXG4vLyBUZXN0IFJlYWN0IChlbnNlaWduYW50IHNhbnMgZXhww6lyaWVuY2UpXG5jb25zdCByZWFjdENvdXJzZSA9IG5ldyBSZWFjdCgpO1xuY29uc3QgdGVhY2hlckI6IFRlYWNoZXIgPSB7XG4gIGZpcnN0TmFtZTogJ0JvYicsXG4gIGxhc3ROYW1lOiAnTWFydGluJyxcbiAgLy8gcGFzIGQnZXhwZXJpZW5jZVRlYWNoaW5nUmVhY3Rcbn07XG5yZWFjdENvdXJzZS5zZXRUZWFjaGVyKHRlYWNoZXJCIGFzIFRlYWNoZXIpO1xuY29uc29sZS5sb2cocmVhY3RDb3Vyc2UuZ2V0UmVxdWlyZW1lbnRzKCkpOyAgICAvLyBIZXJlIGlzIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3IgUmVhY3RcbmNvbnNvbGUubG9nKHJlYWN0Q291cnNlLmdldEF2YWlsYWJsZVRlYWNoZXIoKSk7IC8vIE5vIGF2YWlsYWJsZSB0ZWFjaGVyXG5cbi8vIFRlc3QgSmF2YVxuY29uc3QgamF2YUNvdXJzZSA9IG5ldyBKYXZhKCk7XG5jb25zdCB0ZWFjaGVyQzogVGVhY2hlciA9IHtcbiAgZmlyc3ROYW1lOiAnQ2Fyb2wnLFxuICBsYXN0TmFtZTogJ05ndXllbicsXG4gIGV4cGVyaWVuY2VUZWFjaGluZ0phdmE6IDMsXG59O1xuamF2YUNvdXJzZS5zZXRUZWFjaGVyKHRlYWNoZXJDKTtcbmNvbnNvbGUubG9nKGphdmFDb3Vyc2UuZ2V0UmVxdWlyZW1lbnRzKCkpOyAgICAgLy8gSGVyZSBpcyB0aGUgbGlzdCBvZiByZXF1aXJlbWVudHMgZm9yIEphdmFcbmNvbnNvbGUubG9nKGphdmFDb3Vyc2UuZ2V0QXZhaWxhYmxlVGVhY2hlcigpKTsgLy8gQXZhaWxhYmxlIFRlYWNoZXI6IENhcm9sXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=