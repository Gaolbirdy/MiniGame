(function (modules) {	// webpackBootstrap
	// modules 各模块的数组
	
	// The module cache，模块缓存对象
	var installedModules = {};

	// The require function
	function __webpack_require__(moduleId) {
		
		// Check if module is in cache
		if (installedModules[moduleId])
			return installedModules[moduleId].exports;
		
		// Create a new module (and put it into the cache)
		var module = installedModules[moduleId] = {
			exports: {},
			id: moduleId,
			loaded: false
		};

		// Execute the module function
		// ?学习call
		// 参数在函数里改变后，怎么输出保存的
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		// Flag the module as loaded
		module.loaded = true;

		// Return the exports of the module
		return module.exports;
	}
	
	// expose the modules object (__webpack_modules__)
	__webpack_require__.m = modules;

	// expose the module cache
	__webpack_require__.c = installedModules;

	// __webpack_public_path__
	__webpack_require__.p = "";

	// Load entry module and return exports， 从参数modules[0]开始执行require
	return __webpack_require__(0);
})
([
	/* 0 */
	(function (module, exports, __webpack_require__) {
	
		'use strict';
		
		var _window2 = __webpack_require__(1);
	}),
	/* 1 */
	(function (module, exports, __webpack_require__) {
		
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
	})
]);