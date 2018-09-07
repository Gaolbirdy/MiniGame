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
		exports.cancelAnimationFrame = exports.requestAnimationFrame = exports.clearInterval = exports.clearTimeout = exports.setInterval = exports.setTimeout = exports.canvas = exports.location = exports.localStorage = exports.HTMLElement = exports.FileReader = exports.Audio = exports.Image = exports.WebSocket = exports.XMLHttpRequest = exports.navigator = exports.document = undefined;
		
		var _WindowProperties = __webpack_require__(2);

		Object.keys(_WindowProperties).forEach(function (key) {
			if (key === 'defalut' || key === '__esModule') return;
			Object.defineProperty(exports, key, {
				enumerable: true,
				get: function get() {
					return _WindowProperties[key];
				}
			});
		});

		var _constructor = __webpack_require__(3);

		Object.keys(_constructor).forEach(function (key) {
			if (key === 'default' || key === '__esModule') return;
			Object.defineProperty(exports, key, {
				enumerable: true,
				get: function get() {
					return _constructor[key];
				}
			})
		});

	}),
	/* 2 */
	(function (module, exports) {
		
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true,
		});

		var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
			screenWidth = _wx$getSystemInfoSync.screenWidth,
			screenHeight = _wx$getSystemInfoSync.screenHeight,
			devicePixelRatio = _wx$getSystemInfoSync.devicePixelRatio;
		
		var innerWidth = exports.innerWidth = screenWidth;
		var innerHeight = exports.innerHeight = screenHeight;
		exports.devicePixelRatio = devicePixelRatio;
		var screen = exports.screen = {
			availWidth: innerWidth,
			availHeight: innerHeight
		};
		var performance = exports.performance = {
			now: function now() {
				return Date.now() / 1000;
			}
		};
		var ontouchstart = exports.ontouchstart = null;
		var ontouchmove = exports.ontouchmove = null;
		var ontouchend = exports.ontouchend = null;
	}),
	/* 3 */
	(function (module, exports, __webpack_require__) {
		
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.HTMLCanvasElement = exports.HTMLImageElement = undefined;

		var _HTMLElement3 = __webpack_require__(4);
	}),
	/* 4 */
	(function (module, exports, __webpack_require__) {
	
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _createClass = function () {
			function definePropertys(target, props) {
				for (var i = 0; i < props.length; i++){
					var descriptor = props[i];

					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;

					if ('value' in descriptor)
						descriptor.writable = true;
					
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}

			
		}();
	})
]);