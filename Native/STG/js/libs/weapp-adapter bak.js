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

			return function (Constructor, protoProps, staticProps) {
				if(protoProps)
					definePropertys(Constructor.prototype, protoProps);
				if(staticProps)
					definePropertys(Constructor, staticProps);
				return Constructor;
			}	
		}();

		var _Element2 = __webpack_require__(5);
	}),
	/* 5 */
	(function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _Node2 = __webpack_require__(6);


	}),
	/* 6 */
	(function(module, exports, __webpack_require__) {

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

			return function (Constructor, protoProps, staticProps) {
				if(protoProps)
					definePropertys(Constructor.prototype, protoProps);
				if(staticProps)
					definePropertys(Constructor, staticProps);
				return Constructor;
			}	
		}();

		var _EventTarget2 = __webpack_require__(7);

		var _EventTarget3 = _interopRequireDefault(_EventTarget2);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		function _classCallCheck(instance, Constructor) {
			if(!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}
		}

	}),
	/* 7 */
	(function(module, exports) {

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

			return function (Constructor, protoProps, staticProps) {
				if(protoProps)
					definePropertys(Constructor.prototype, protoProps);
				if(staticProps)
					definePropertys(Constructor, staticProps);
				return Constructor;
			}	
		}();

		// 看到这里
		function _classCallCheck(instance, Constructor) {
			if(!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		var _events = new WeakMap();

		var EventTarget = function () {
			function EventTarget() {
				_classCallCheck(this, EventTarget);

				_events.set(this, {});
			}

			_createClass(EventTarget, [{
				key: 'addEventListener',
				value: function addEventListener(type, listener) {
					var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

					var events = _events.get(this);

					if (!events) {
						events = {};
						_events.set(this, events);
					}
					if (!events[type]) {
						events[type] = [];
					}
					events[type].push(listener);

					if (options.capture) {
						console.warn('EventTarget.addEventListener: options.capture is not implemented.');
					}
					if (option.once) {
						console.warn('EventTarget.addEventListener: options.once is not implemented.');
					}
					if (option.passive) {
						console.warn('EventTarget.addEventListener: options.passive is not implemented.');
					}
				}
			}, {
				key: 'removeEventListener',
				value: function removeEventListener(type, listener) {
					var listeners = _events.get(this)[type];

					if (listeners && listeners.length > 0) {
						for (var i = listeners.length; i--; i > 0){
							if (listeners[i] === listener) {
								listeners.splice(i, 1);
								break;
							}
						}
					}
				}
			}, {
				key: 'dispatchEvent',
				value: function dispatchEvent() {
					var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

					var listeners = _events.get(this)[event.type];

					if (listeners) {
						for (var i = 0; i < listeners.length; i++){
							listeners[i](event);
						}
					}
				}
			}
			]);

			return EventTarget;
		}();

		exports.default = EventTarget;
	})
]);