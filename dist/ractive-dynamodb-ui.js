(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ractive"));
	else if(typeof define === 'function' && define.amd)
		define("ractive-dynamodb-ui", ["ractive"], factory);
	else if(typeof exports === 'object')
		exports["ractive-dynamodb-ui"] = factory(require("ractive"));
	else
		root["ractive-dynamodb-ui"] = factory(root["Ractive"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__22__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(27);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(73),
    getValue = __webpack_require__(79);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(63),
    listCacheDelete = __webpack_require__(64),
    listCacheGet = __webpack_require__(65),
    listCacheHas = __webpack_require__(66),
    listCacheSet = __webpack_require__(67);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(25);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(12),
    getRawTag = __webpack_require__(75),
    objectToString = __webpack_require__(76);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(89);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(29),
    baseAssignValue = __webpack_require__(30);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	isolated: true,
	template: '\n\t\t<div class=\'tabledata\' style=\'{{style}}\'>\n\t\t\t<div class=\'tabledatahead\'>\n\t\t\t\t{{#columns:i}}\n\t\t\t\t\t<div style=\'width: {{#if i === 0}}32px{{else}}{{100/columns.length}}%{{/if}} \'>{{.}}</div>\n\t\t\t\t{{/columns}}\n\t\t\t</div>\n\t\t\t<div class=\'tabledatacontent\'>\n\n\t\t\t\t{{#if rows.length === 0}}\n\t\t\t\t\t<br><small>Empty</small>\n\t\t\t\t{{/if}}\n\t\t\t\t{{#if rows === null }}\n\t\t\t\t\t<br><small>Loading...</small>\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{#rows:row}}\n\t\t\t\t<div class=\'tabledatarow {{#if .[0].selected}}selected{{/if}}\' on-click=\'selectrow\'>\n\t\t\t\t\t{{#each .:i}}\n\t\t\t\t\t<div class=\'tabledatacell\n\t\t\t\t\t\t{{#if .KEY}}t-K{{/if}}\n\t\t\t\t\t\t{{#if .HASH}}t-HASH{{/if}}\n\t\t\t\t\t\t{{#if .S}}t-S{{/if}}\n\t\t\t\t\t\t{{#if .N}}t-N{{/if}}\n\t\t\t\t\t\t{{#if .BOOL}}t-BOOL{{/if}}\n\t\t\t\t\t\t{{#if .NULL}}t-NULL{{/if}}\n\t\t\t\t\t\t{{#if .L}}t-L{{/if}}\n\t\t\t\t\t\t{{#if .M}}t-M{{/if}}\n\t\t\t\t\t\t{{#if .U}}t-U{{/if}}\n\t\t\t\t\t\t\' style=\'width: {{#if i === 0}}32px{{else}}{{100/columns.length}}%{{/if}} \'\n\t\t\t\t\t\t{{#if .HASH}}on-click=\'cellclick\'{{/if}}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t{{#if .KEY}}\n\t\t\t\t\t\t\t{{#if .selected}}\n\t\t\t\t\t\t\t\t<input class=\'input-checkbox input-toggle\' type=\'checkbox\' checked>\n\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t<input class=\'input-checkbox input-toggle\' type=\'checkbox\'>\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t{{#if .HASH}}<a>{{.HASH}}</a>{{/if}}\n\t\t\t\t\t\t{{#if .S}}{{.S}}{{/if}}\n\t\t\t\t\t\t{{#if .N}}{{.N}}{{else}}{{#if .N === 0}}0{{/if}}{{/if}}\n\t\t\t\t\t\t{{#if .BOOL}}{{.BOOL}}{{/if}}\n\t\t\t\t\t\t{{#if .NULL}}NULL{{/if}}\n\t\t\t\t\t\t{{#if .L}}[...]{{/if}}\n\t\t\t\t\t\t{{#if .M}}{...}{{/if}}\n\t\t\t\t\t</div>\n\t\t\t\t\t{{/each}}\n\t\t\t\t</div>\n\t\t\t\t{{/rows}}\n\t\t\t</div>\n\t\t</div>\n\t\t',

	data: function data() {
		return {};
	},
	oninit: function oninit() {
		this.on('cellclick', function (e) {
			var col = this.get(e.resolve());
			//console.log("cellclick", e.resolve(), " = ",this.get( e.resolve())  )
			//console.log( this.get(e.resolve().split('.').slice(0,-1).join('.')) )
			this.fire('colclick', undefined, col.item, col.raw);
		});
	}
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(31),
    baseKeys = __webpack_require__(103),
    isArrayLike = __webpack_require__(35);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(27);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(111),
    stubArray = __webpack_require__(37);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(115),
    Map = __webpack_require__(11),
    Promise = __webpack_require__(116),
    Set = __webpack_require__(117),
    WeakMap = __webpack_require__(118),
    baseGetTag = __webpack_require__(6),
    toSource = __webpack_require__(28);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(121);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__22__;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(22)):undefined}(window,function(n){return(i={},r.m=o=[function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ractive.extend({template:"\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}} </div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\x3c!-- <td class='jsoneditor-datatype'>String</td> --\x3e\n\t\t\t\t\t\t\t<td class='jsoneditor-separator'>:</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree' style='width: 100%;'>\n\t\t\t\t\t\t\t\t{{#if editing}}\n\t\t\t\t\t\t\t\t\t<textarea class='jsoneditor-input jsoneditor-string' style='height: {{textarea_height}}px;line-height: {{line_height}}px' on-focus='focus' on-blur='blur' on-keyup='keyup' value='{{value}}'></textarea>\n\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t<input class='jsoneditor-input jsoneditor-string' value='{{ JSON.stringify(value) }}' readonly='true' on-click='startEditing' />\n\t\t\t\t\t\t\t\t\t\x3c!--<div class='jsoneditor-value jsoneditor-string' style='cursor: pointer;height: {{line_height}}px;line-height: {{line_height}}px;overflow: hidden;' on-click='startEditing'>{{ JSON.stringify(value) }}</div>--\x3e\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t\t<div class='trash-solid icon'></div>\n\t\t\t\t</button>\n\t\t\t</td>\n\t\t</tr>\n\t\t",data:function(){return{line_height:22,textarea_height:22}},on:{startEditing:function(t){var e=t.node.parentNode;this.set("editing",!0),e.getElementsByTagName("textarea").length&&e.getElementsByTagName("textarea")[0].focus()},focus:function(){var t=this.get("value").split("\n").length;this.set("textarea_height",t*this.get("line_height"))},blur:function(){this.set("editing",!1)},keyup:function(){var t=this.get("value").split("\n").length;this.set("textarea_height",t*this.get("line_height"))},delete:function(){this.parent.delete_key(this.get("key"))}}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ractive.extend({template:"\n\t<tr>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\x3c!--<td class='jsoneditor-datatype'>Number</td>--\x3e\n\t\t\t\t\t\t<td class='jsoneditor-separator'>:</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree' style='width: 100%;'>\n\t\t\t\t\t\t\t<input type='number' value='{{mirror_value}}' class='jsoneditor-input jsoneditor-number'  />\n\t\t\t\t\t\t\t\x3c!--\n\t\t\t\t\t\t\t<div contenteditable='true' spellcheck='false' class='jsoneditor-value jsoneditor-number' >{{ value }}</div>\n\t\t\t\t\t\t\t--\x3e\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t<div class='trash-solid icon'></div>\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\t",data:function(){return{mirror_value:""}},on:{delete:function(){this.parent.delete_key(this.get("key"))},init:function(){var t=this.get("value");this.set("mirror_value",t),this.observe("mirror_value",function(t,e,n){this.set({value:parseFloat(t)?t.toString():""})})}}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ractive.extend({template:"\n\t<tr>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-datatype'>Binary</td>\n\t\t\t\t\t\t<td class='jsoneditor-separator'>:</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree' style='width: 100%;'>\n\t\t\t\t\t\t\t<input value='{{updated_value}}' class='jsoneditor-input jsoneditor-binary' />\n\t\t\t\t\t\t\t\x3c!--\n\t\t\t\t\t\t\t<div contenteditable='true' spellcheck='false' class='jsoneditor-value jsoneditor-binary' >{{ updated_value }}</div>\n\t\t\t\t\t\t\t--\x3e\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t<div class='trash-solid icon'></div>\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\t",data:function(){return{updated_value:""}},on:{init:function(){var r=this.get("value");"string"==typeof r&&(this.set({updated_value:JSON.parse(JSON.stringify(r))}),r=Uint8Array.from(atob(r),function(t){return t.charCodeAt(0)}),this.set({value:r})),r instanceof Uint8Array&&this.set({updated_value:btoa(String.fromCharCode.apply(null,r))}),this.observe("updated_value",function(t,e,n){if(console.log("changed",t,e),"string"==typeof r)return this.set("value",t);try{var o=Uint8Array.from(atob(t),function(t){return t.charCodeAt(0)});this.set({value:o}),console.log(o)}catch(t){}})},delete:function(){this.parent.delete_key(this.get("key"))}}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ractive.extend({template:"\n\t<tr>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\x3c!--<td class='jsoneditor-datatype'>Boolean</td> --\x3e\n\t\t\t\t\t\t<td class='jsoneditor-separator'>:</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree' style='width: 100%;'>\n\t\t\t\t\t\t\t<input value='{{value}}' class='jsoneditor-input jsoneditor-boolean {{#if (value !== true ) && (value !== false) }}error{{/if}}' on-keyup='validate' on-blur='validate' />\n\t\t\t\t\t\t\t\x3c!--\n\t\t\t\t\t\t\t<div contenteditable='true' spellcheck='false' class='jsoneditor-value jsoneditor-boolean' >{{ value ? true : false }}</div>\n\t\t\t\t\t\t\t--\x3e\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t<div class='trash-solid icon'></div>\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\t",on:{init:function(){},validate:function(){"true"===this.get("value")&&this.set("value",!0),"false"===this.get("value")&&this.set("value",!1)},delete:function(){this.parent.delete_key(this.get("key"))}}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ractive.extend({template:"\n\t<tr>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\x3c!--<td class='jsoneditor-datatype'>Null</td>--\x3e\n\t\t\t\t\t\t<td class='jsoneditor-separator'>:</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div class='jsoneditor-input jsoneditor-null' >null</div>\n\t\t\t\t\t\t\t\x3c!--<div class='jsoneditor-value jsoneditor-null' >null</div>--\x3e\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t<div class='trash-solid icon'></div>\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\t",on:{delete:function(){this.parent.delete_key(this.get("key"))}}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=n(0),i=(o=r)&&o.__esModule?o:{default:o};e.default=Ractive.extend({components:{S:i.default},template:"\n\n\t<tr class=' jsoneditor-expandable'>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}' on-click='@this.toggle('open')'></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-datatype'>StringSet[{{ value.length }}]</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'></td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div class='jsoneditor-value jsoneditor-array'></div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t<div class='trash-solid icon'></div>\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\n\t{{#if open}}\n\t<tr class='jsoneditor-appender'>\n\t\t<td></td><td></td><td>\n\t\t\t<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='prepend'></div>\n\t\t</td><td></td>\n\t</tr>\n\t{{#value}}\n\t\t<S key={{@index}} value={{ . }} level='{{ level + 1 }}' />\n\t\t<tr class='jsoneditor-appender'>\n\t\t\t<td></td><td></td><td>\n\t\t\t\t<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='elementinsert'></div>\n\t\t\t</td><td></td>\n\t\t</tr>\n\t{{/value}}\n\t{{/if}}\n\n\t<tr class='jsoneditor-append'></tr>\n\n\t",delete_key:function(o){var t=this.get("value");t=t.filter(function(t,e,n){return e!==o}),this.set({value:t})},data:function(){return{open:!1}},on:{delete:function(){this.parent.delete_key(this.get("key"))},prepend:function(){var t=this.get("value");t=[""].concat(t),this.set({value:t})},elementinsert:function(t){var e=this.get("value"),n=parseInt(t.resolve().split(".").pop());e.splice(n+1,0,""),this.set({value:e})}}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=n(1),i=(o=r)&&o.__esModule?o:{default:o};e.default=Ractive.extend({components:{N:i.default},template:"\n\n\t<tr class=' jsoneditor-expandable'>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}' on-click='@this.toggle('open')'></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-datatype'>NumberSet[{{ value.length }}]</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'></td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div class='jsoneditor-value jsoneditor-array'></div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t<div class='trash-solid icon'></div>\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\n\t{{#if open}}\n\t<tr class='jsoneditor-appender'>\n\t\t<td></td><td></td><td>\n\t\t\t<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='prepend'></div>\n\t\t</td><td></td>\n\t</tr>\n\t{{#value}}\n\t\t{{#if !hide}}\n\t\t<N key={{@index}} value={{ . }} level='{{ level + 1 }}' />\n\t\t<tr class='jsoneditor-appender'>\n\t\t\t<td></td><td></td><td>\n\t\t\t\t<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='elementinsert'></div>\n\t\t\t</td><td></td>\n\t\t</tr>\n\t\t{{/if}}\n\t{{/value}}\n\t{{/if}}\n\n\t<tr class='jsoneditor-append'></tr>\n\n\t",delete_key:function(o){var t=this.get("value");t=t.filter(function(t,e,n){return e!==o}),this.set({value:t})},data:function(){return{open:!1,hide:!1}},on:{delete:function(){this.parent.delete_key(this.get("key"))},prepend:function(){var t=this.get("value");t=[""].concat(t),this.set({value:t}),this.set("hide",!0),this.set("hide",!1)},elementinsert:function(t){var e=this.get("value"),n=parseInt(t.resolve().split(".").pop());e.splice(n+1,0,""),this.set({value:e}),this.set("hide",!0),this.set("hide",!1)}}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=n(2),i=(o=r)&&o.__esModule?o:{default:o};e.default=Ractive.extend({components:{B:i.default},template:"\n\n\t<tr class=' jsoneditor-expandable'>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}' on-click='@this.toggle('open')'></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-datatype'>BinarySet[{{ value.length }}]</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'></td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div class='jsoneditor-value jsoneditor-array'></div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t<div class='trash-solid icon'></div>\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\n\t{{#if open}}\n\t\t<tr class='jsoneditor-appender'>\n\t\t\t<td></td><td></td><td>\n\t\t\t\t<div style='margin-left: {{ 24 * level + 40 }}px;'  on-click='prepend'></div>\n\t\t\t</td><td></td>\n\t\t</tr>\n\t{{#value}}\n\t\t{{#if !hide}}\n\t\t<B key={{@index}} value={{ . }} level='{{ level + 1 }}' />\n\t\t<tr class='jsoneditor-appender'>\n\t\t\t<td></td><td></td><td>\n\t\t\t\t<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='elementinsert'></div>\n\t\t\t</td><td></td>\n\t\t</tr>\n\t\t{{/if}}\n\t{{/value}}\n\t{{/if}}\n\n\t<tr class='jsoneditor-append'></tr>\n\n\t",delete_key:function(o){var t=this.get("value");t=t.filter(function(t,e,n){return e!==o}),this.set({value:t})},data:function(){return{open:!1,hide:!1}},on:{delete:function(){this.parent.delete_key(this.get("key"))},prepend:function(){var t=this.get("value");t=[Uint8Array.from(atob("InsertBase64Here"),function(t){return t.charCodeAt(0)})].concat(t),this.set({value:t}),this.set("hide",!0),this.set("hide",!1)},elementinsert:function(t){var e=this.get("value"),n=parseInt(t.resolve().split(".").pop());e.splice(n+1,0,Uint8Array.from(atob("InsertBase64Here"),function(t){return t.charCodeAt(0)})),this.set({value:e}),this.set("hide",!0),this.set("hide",!1)}}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=f(n(0)),r=f(n(1)),i=f(n(3)),s=f(n(4)),d=f(n(2)),l=f(n(5)),a=f(n(6)),u=f(n(7)),c=f(n(9)),p=f(n(13));function f(t){return t&&t.__esModule?t:{default:t}}var b=Ractive.extend({components:{S:o.default,N:r.default,BOOL:i.default,NULL:s.default,B:d.default,SS:l.default,NS:a.default,BS:u.default,M:c.default,appender:p.default},onconfig:function(){this.components.L=b},template:"\n\n\t<tr class=' jsoneditor-expandable'>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}' on-click='@this.toggle('open')'></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class='jsoneditor-datatype'>List[{{ value.length }}]</td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'></td>\n\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t<div class='jsoneditor-value jsoneditor-array'></div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t<div class='trash-solid icon'></div>\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\n\t{{#if open}}\n\t\t<appender level={{level}} index={{null}}/>\n\t{{#value}}\n\t\t{{#if .hasOwnProperty('S')}}\n\t\t\t<S key={{@index}} value={{ .S }} level='{{ level + 1 }}' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty('N')}}\n\t\t\t<N key={{@index}} value={{ .N }} level='{{ level + 1 }}' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty('BOOL')}}\n\t\t\t<BOOL key={{@index}} value={{ .BOOL }} level='{{ level + 1 }}' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty('NULL')}}\n\t\t\t<NULL key={{@index}} level='1' level='{{ level + 1 }}' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty('B')}}\n\t\t\t<B key={{@index}} value={{ .B }} level='{{ level + 1 }}' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty('L')}}\n\t\t\t<L key={{@index}} value={{ .L }} level='{{ level + 1 }}' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty('M')}}\n\t\t\t<M key={{@index}} value={{ .M }} level='{{ level + 1 }}' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty('SS')}}\n\t\t\t<SS key={{@index}} value={{ .SS }} level='{{ level + 1 }}' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty('NS')}}\n\t\t\t<NS key={{@index}} value={{ .NS }} level='{{ level + 1 }}' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty('BS')}}\n\t\t\t<BS key={{@index}} value={{ .BS }} level='{{ level + 1 }}' />\n\t\t{{/if}}\n\n\t\t<appender level={{level}} index={{@index}}/>\n\n\t{{/value}}\n\t{{/if}}\n\n\t<tr class='jsoneditor-append'></tr>\n\n\t",delete_key:function(o){var t=this.get("value");t=t.filter(function(t,e,n){return e!==o}),this.set({value:t})},data:function(){return{open:!1}},prepend_attribute:function(t,e){var n,o=this.get("value");"S"===t&&(n={S:""}),"N"===t&&(n={N:""}),"BOOL"===t&&(n={BOOL:""}),"NULL"===t&&(n={NULL:!0}),"B"===t&&(n={B:Uint8Array.from(atob("InsertBase64Here"),function(t){return t.charCodeAt(0)})}),"SS"===t&&(n={SS:[]}),"NS"===t&&(n={NS:[]}),"BS"===t&&(n={BS:[]}),"L"===t&&(n={L:[]}),"M"===t&&(n={M:{}}),null===e?o=[n].concat(o):o.splice(e+1,0,n),this.set({value:o})},on:{delete:function(){this.parent.delete_key(this.get("key"))}}});e.default=b},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=f(n(0)),r=f(n(1)),i=f(n(3)),s=f(n(4)),d=f(n(2)),l=f(n(5)),a=f(n(6)),u=f(n(7)),c=f(n(8)),p=f(n(10));function f(t){return t&&t.__esModule?t:{default:t}}var b=Ractive.extend({components:{S:o.default,N:r.default,BOOL:i.default,NULL:s.default,B:d.default,SS:l.default,NS:a.default,BS:u.default,L:c.default,appender:p.default},onconfig:function(){this.components.M=b,this.components.L=c.default},template:"\n\n\t\t<tr class=' jsoneditor-expandable'>\n\t\t\t<td>\n\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea'></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}' on-click='@this.toggle('open')'></button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-datatype'>Map{{ '{' + Object.keys(value).length + '}' }}</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree'></td>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t\t<div class='jsoneditor-value jsoneditor-object'></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t\t<div class='trash-solid icon'></div>\n\t\t\t\t</button>\n\t\t\t</td>\n\t\t</tr>\n\n\t\t{{#if open}}\n\t\t\t<appender level={{level}} index={{null}}/>\n\t\t{{#each value }}\n\t\t\t{{#if .hasOwnProperty('S')}}\n\t\t\t\t<S key={{@key}} value={{ .S }} level='{{ level + 1 }}' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty('N')}}\n\t\t\t\t<N key={{@key}} value={{ .N }} level='{{ level + 1 }}' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty('BOOL')}}\n\t\t\t\t<BOOL key={{@key}} value={{ .BOOL }} level='{{ level + 1 }}' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty('NULL')}}\n\t\t\t\t<NULL key={{@key}} level='1' level='{{ level + 1 }}' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty('B')}}\n\t\t\t\t<B key={{@key}} value={{ .B }} level='{{ level + 1 }}' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty('L')}}\n\t\t\t\t<L key={{@key}} value={{ .L }} level='{{ level + 1 }}' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty('M')}}\n\t\t\t\t<M key={{@key}} value={{ .M }} level='{{ level + 1 }}' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty('SS')}}\n\t\t\t\t<SS key={{@key}} value={{ .SS }} level='{{ level + 1 }}' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty('NS')}}\n\t\t\t\t<NS key={{@key}} value={{ .NS }} level='{{ level + 1 }}' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty('BS')}}\n\t\t\t\t<BS key={{@key}} value={{ .BS }} level='{{ level + 1 }}' />\n\t\t\t{{/if}}\n\t\t\t<appender level={{level}} index={{@key}}/>\n\n\t\t{{/each}}\n\t\t{{/if}}\n\n\n\t\t<tr class='jsoneditor-append'></tr>\n\n\t",delete_key:function(t){var e=this.get("value");delete e[t],this.set({value:e})},data:function(){return{open:!1}},prepend_attribute:function(t,e,n){console.log("prepend",t,e,n);var o,r=this.get("value");"S"===t&&(o={S:""}),"N"===t&&(o={N:""}),"BOOL"===t&&(o={BOOL:""}),"NULL"===t&&(o={NULL:!0}),"B"===t&&(o={B:Uint8Array.from(atob("InsertBase64Here"),function(t){return t.charCodeAt(0)})}),"SS"===t&&(o={SS:[]}),"NS"===t&&(o={NS:[]}),"BS"===t&&(o={BS:[]}),"L"===t&&(o={L:[]}),"M"===t&&(o={M:{}});var i={};null===e?(i[n]=o,Object.keys(r).map(function(t){i[t]=r[t]})):Object.keys(r).map(function(t){i[t]=r[t],t===e&&(i[n]=o)}),this.set({value:{}}),this.set({value:i})},on:{delete:function(){this.parent.delete_key(this.get("key"))}}});e.default=b},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ractive.extend({template:"\n\t{{#if type === null}}\n\t<tr class='jsoneditor-appender'>\n\t\t<td></td><td></td><td>\n\t\t\t\t<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='pickatype'></div>\n\t\t</td><td></td>\n\t</tr>\n\t{{/if}}\n\n\t{{#if type !== null }}\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ (level+1) * 24 }}px;'>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t\t<input value={{field_name}} placeholder='Attribute Name' style='margin-top: 3px;' />\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-separator'>:</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree' style='width: 100%;'>\n\t\t\t\t\t\t\t\t<select value={{type}} on-change='typepicked' style='margin-top: 3px;' disabled={{type_disabled}}>\n\t\t\t\t\t\t\t\t\t<option value=''>Select Data Type</option>\n\t\t\t\t\t\t\t\t\t<option value='S'>String</option>\n\t\t\t\t\t\t\t\t\t<option value='N'>Number</option>\n\t\t\t\t\t\t\t\t\t<option value='BOOL'>Boolean</option>\n\t\t\t\t\t\t\t\t\t<option value='NULL'>Null</option>\n\t\t\t\t\t\t\t\t\t<option value='B'>Binary</option>\n\t\t\t\t\t\t\t\t\t<option value='SS'>StringSet</option>\n\t\t\t\t\t\t\t\t\t<option value='NS'>NumberSet</option>\n\t\t\t\t\t\t\t\t\t<option value='BS'>BinarySet</option>\n\t\t\t\t\t\t\t\t\t<option value='L'>List</option>\n\t\t\t\t\t\t\t\t\t<option value='M'>Map</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t\t<div class='trash-solid icon'></div>\n\t\t\t\t</button>\n\t\t\t</td>\n\t\t</tr>\n\t{{/if}}\n\t",data:function(){return{type:null,field_name:"",type_disabled:!0}},on:{init:function(){this.observe("field_name",function(t,e,n){t.trim()?this.set({type_disabled:!1}):this.set({type_disabled:!0})})},delete:function(){this.set({type:null})},pickatype:function(){this.set({type:""})},typepicked:function(){this.get("type")&&this.get("field_name").trim()&&(this.parent.prepend_attribute(this.get("type"),this.get("index"),this.get("field_name")),this.set({type:null}))}}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=v(n(12)),r=v(n(0)),i=v(n(1)),s=v(n(3)),d=v(n(4)),l=v(n(2)),a=v(n(5)),u=v(n(6)),c=v(n(7)),p=v(n(8)),f=v(n(9)),b=v(n(10));function v(t){return t&&t.__esModule?t:{default:t}}e.default=o.default.extend({template:{v:4,t:[{t:7,e:"div",m:[{t:13,n:"class",f:"jsoneditor",g:1},{n:"style",f:[{t:2,r:"style"}],t:13}],f:[{t:7,e:"div",m:[{n:"class",f:["jsoneditor-menu ",{t:2,rx:{r:".",m:[{r:[],s:'"menu-class"'}]}}],t:13},{n:"style",f:[{t:2,rx:{r:".",m:[{r:[],s:'"menu-style"'}]}}],t:13}],f:[{t:7,e:"select",m:[{n:"value",f:[{t:2,r:"mode"}],t:13},{n:"style",f:"height: 20px;margin: 6px;",t:13}],f:[{t:7,e:"option",m:[{n:"value",f:"tree",t:13}],f:["Tree"]}," ",{t:7,e:"option",m:[{n:"value",f:"code",t:13}],f:["Code"]}]}]}," ",{t:4,f:[{t:7,e:"div",m:[{n:"class",f:["jsoneditor-navbar ",{t:2,x:{r:["navbar","class"],s:"_0-_1"}}],t:13},{n:"style",f:[{t:2,rx:{r:".",m:[{r:[],s:'"navbar-style"'}]}}],t:13}]}],n:50,x:{r:["mode","navigationBar"],s:'(_0==="tree")&&(_1===true)'}}," ",{t:7,e:"div",m:[{n:"class",f:["jsoneditor-outer has-main-menu-bar ",{t:4,f:["has-nav-bar"],n:50,x:{r:["mode","navigationBar"],s:'(_0==="tree")&&(_1===true)'}}],t:13}],f:[{t:4,f:[{t:7,e:"textarea",m:[{n:"style",f:"width: 100%;height: 100%;border: 0px;margin: 0px;padding: 0px;",t:13}],f:[{t:2,x:{r:["item"],s:'JSON.stringify(_0,null,"\\t")'}}]}],n:50,x:{r:["mode"],s:'_0==="code"'}},{t:4,f:[{t:7,e:"div",m:[{t:13,n:"class",f:"jsoneditor-tree",g:1}],f:[{t:7,e:"div",m:[{t:13,n:"class",f:"jsoneditor-tree-inner",g:1}],f:[{t:7,e:"table",m:[{t:13,n:"class",f:"jsoneditor-tree",g:1},{n:"border",f:"0",t:13,g:1}],f:[{t:7,e:"colgroup",f:[{t:7,e:"col",m:[{n:"width",f:"24px",t:13,g:1}]},{t:7,e:"col",m:[{n:"width",f:"24px",t:13,g:1}]},{t:7,e:"col"}]}," ",{t:7,e:"tbody",f:[{t:7,e:"tr",m:[{t:13,n:"class",f:" jsoneditor-expandable",g:1}],f:[{t:7,e:"td"}," ",{t:7,e:"td",f:[{t:7,e:"button",m:[{t:13,n:"class",f:"jsoneditor-button jsoneditor-contextmenu",g:1},{n:"type",f:"button",t:13,g:1}]}]}," ",{t:7,e:"td",f:[{t:7,e:"table",m:[{t:13,n:"style",f:"border-collapse: collapse; margin-left: 0px;",g:1},{t:13,n:"class",f:"jsoneditor-values",g:1}],f:[{t:7,e:"tbody",f:[{t:7,e:"tr",f:[{t:7,e:"td",m:[{t:13,n:"class",f:"jsoneditor-tree",g:1}],f:[{t:7,e:"button",m:[{n:"type",f:"button",t:13,g:1},{n:"class",f:["jsoneditor-button ",{t:4,f:["jsoneditor-expanded"],n:50,r:"open"},{t:4,f:["jsoneditor-collapsed"],n:51,l:1}],t:13},{n:["click"],t:70,f:{r:["@this"],s:'[_0.toggle("open")]'}}]}]}," ",{t:7,e:"td",m:[{t:13,n:"class",f:"jsoneditor-tree",g:1}],f:[{t:7,e:"div",m:[{t:13,n:"class",f:"jsoneditor-readonly",g:1},{n:"contenteditable",f:"false",t:13}],f:["Item"]}]}," ",{t:7,e:"td",m:[{t:13,n:"class",f:"jsoneditor-tree",g:1}]}," ",{t:7,e:"td",m:[{t:13,n:"class",f:"jsoneditor-tree",g:1}],f:[{t:7,e:"div",m:[{t:13,n:"class",f:"jsoneditor-value jsoneditor-object",g:1}],f:["{ ",{t:2,x:{r:["item"],s:"Object.keys(_0).length"}}," }"]}]}]}]}]}]}," ",{t:7,e:"td",f:[]}]}," ",{t:4,f:[{t:7,e:"appender",m:[{n:"level",f:[{t:2,x:{r:[],s:"0"}}],t:13},{n:"index",f:[{t:2,x:{r:[],s:"null"}}],t:13}]}," ",{t:4,f:[{t:4,f:[{t:7,e:"S",m:[{n:"key",f:[{t:2,r:"@key"}],t:13},{n:"value",f:[{t:2,r:".S"}],t:13},{n:"level",f:"1",t:13,g:1}]}],n:50,x:{r:["."],s:'_0.hasOwnProperty("S")'}}," ",{t:4,f:[{t:7,e:"N",m:[{n:"key",f:[{t:2,r:"@key"}],t:13},{n:"value",f:[{t:2,r:".N"}],t:13},{n:"level",f:"1",t:13,g:1}]}],n:50,x:{r:["."],s:'_0.hasOwnProperty("N")'}}," ",{t:4,f:[{t:7,e:"BOOL",m:[{n:"key",f:[{t:2,r:"@key"}],t:13},{n:"value",f:[{t:2,r:".BOOL"}],t:13},{n:"level",f:"1",t:13,g:1}]}],n:50,x:{r:["."],s:'_0.hasOwnProperty("BOOL")'}}," ",{t:4,f:[{t:7,e:"NULL",m:[{n:"key",f:[{t:2,r:"@key"}],t:13},{n:"level",f:"1",t:13,g:1},{n:"level",f:"1",t:13,g:1}]}],n:50,x:{r:["."],s:'_0.hasOwnProperty("NULL")'}}," ",{t:4,f:[{t:7,e:"B",m:[{n:"key",f:[{t:2,r:"@key"}],t:13},{n:"value",f:[{t:2,r:".B"}],t:13},{n:"level",f:"1",t:13,g:1}]}],n:50,x:{r:["."],s:'_0.hasOwnProperty("B")'}}," ",{t:4,f:[{t:7,e:"L",m:[{n:"key",f:[{t:2,r:"@key"}],t:13},{n:"value",f:[{t:2,r:".L"}],t:13},{n:"level",f:"1",t:13,g:1}]}],n:50,x:{r:["."],s:'_0.hasOwnProperty("L")'}}," ",{t:4,f:[{t:7,e:"M",m:[{n:"key",f:[{t:2,r:"@key"}],t:13},{n:"value",f:[{t:2,r:".M"}],t:13},{n:"level",f:"1",t:13,g:1}]}],n:50,x:{r:["."],s:'_0.hasOwnProperty("M")'}}," ",{t:4,f:[{t:7,e:"SS",m:[{n:"key",f:[{t:2,r:"@key"}],t:13},{n:"value",f:[{t:2,r:".SS"}],t:13},{n:"level",f:"1",t:13,g:1}]}],n:50,x:{r:["."],s:'_0.hasOwnProperty("SS")'}}," ",{t:4,f:[{t:7,e:"NS",m:[{n:"key",f:[{t:2,r:"@key"}],t:13},{n:"value",f:[{t:2,r:".NS"}],t:13},{n:"level",f:"1",t:13,g:1}]}],n:50,x:{r:["."],s:'_0.hasOwnProperty("NS")'}}," ",{t:4,f:[{t:7,e:"BS",m:[{n:"key",f:[{t:2,r:"@key"}],t:13},{n:"value",f:[{t:2,r:".BS"}],t:13},{n:"level",f:"1",t:13,g:1}]}],n:50,x:{r:["."],s:'_0.hasOwnProperty("BS")'}}," ",{t:7,e:"appender",m:[{n:"level",f:[{t:2,x:{r:[],s:"0"}}],t:13},{n:"index",f:[{t:2,r:"@key"}],t:13}]}],n:52,r:"item"}],n:50,r:"open"}]}]}]}]}],n:51,l:1}]}]}],e:{0:function(){return 0},'"menu-class"':function(){return"menu-class"},'"menu-style"':function(){return"menu-style"},"_0-_1":function(t,e){return t-e},'"navbar-style"':function(){return"navbar-style"},'(_0==="tree")&&(_1===true)':function(t,e){return"tree"===t&&!0===e},'JSON.stringify(_0,null,"\\t")':function(t){return JSON.stringify(t,null,"\t")},'_0==="code"':function(t){return"code"===t},'[_0.toggle("open")]':function(t){return[t.toggle("open")]},"Object.keys(_0).length":function(t){return Object.keys(t).length},null:function(){return null},'_0.hasOwnProperty("S")':function(t){return t.hasOwnProperty("S")},'_0.hasOwnProperty("N")':function(t){return t.hasOwnProperty("N")},'_0.hasOwnProperty("BOOL")':function(t){return t.hasOwnProperty("BOOL")},'_0.hasOwnProperty("NULL")':function(t){return t.hasOwnProperty("NULL")},'_0.hasOwnProperty("B")':function(t){return t.hasOwnProperty("B")},'_0.hasOwnProperty("L")':function(t){return t.hasOwnProperty("L")},'_0.hasOwnProperty("M")':function(t){return t.hasOwnProperty("M")},'_0.hasOwnProperty("SS")':function(t){return t.hasOwnProperty("SS")},'_0.hasOwnProperty("NS")':function(t){return t.hasOwnProperty("NS")},'_0.hasOwnProperty("BS")':function(t){return t.hasOwnProperty("BS")}}},components:{S:r.default,N:i.default,BOOL:s.default,NULL:d.default,B:l.default,SS:a.default,NS:u.default,BS:c.default,L:p.default,M:f.default,appender:b.default},css:".jsoneditor { display: 'inline-block'; color: #1a1a1a; border: thin solid #f4a460; box-sizing: border-box; width: 100%; height: 100%; position: relative; padding: 0; line-height: 100%; width: 534px; background-color: #fff; } .jsoneditor-menu { width: 100%; height: 35px; padding: 2px; margin: 0; box-sizing: border-box; color: #fff; border-bottom: 1px solid #3883fa; background-color: #f4a460; border-color: #f4a460; } .jsoneditor-navbar { width: 100%; height: 26px; line-height: 26px; padding: 0; margin: 0; box-sizing: border-box; color: grey; overflow: hidden; font-family: arial,sans-serif; font-size: 10pt; border-bottom: 1px solid #d3d3d3; background-color: #ebebeb; } .jsoneditor-outer { overflow: auto; position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; box-sizing: border-box; } .jsoneditor-outer.has-main-menu-bar { top: 35px; } .jsoneditor-outer.has-main-menu-bar.has-nav-bar { top: 61px; } .jsoneditor table { border-collapse: collapse; width: auto; } div.jsoneditor-tree table.jsoneditor-tree { border-collapse: collapse; border-spacing: 0; width: 100%; } div.jsoneditor td, div.jsoneditor th, div.jsoneditor tr { padding: 0;margin: 0; } div.jsoneditor tr:hover {background-color: #f0f0f0;} div.jsoneditor tr.jsoneditor-appender {} div.jsoneditor tr.jsoneditor-appender > td:nth-child(3) {position: relative;height: 4px;} div.jsoneditor tr.jsoneditor-appender > td:nth-child(3) > div {cursor: row-resize;} div.jsoneditor tr.jsoneditor-appender > td:nth-child(4) {width: 32px;} div.jsoneditor tr.jsoneditor-appender:hover {background-color: transparent;} div.jsoneditor tr.jsoneditor-appender:hover > td:nth-child(3) {} div.jsoneditor tr.jsoneditor-appender:hover > td:nth-child(3) > div {height: 4px;background-color: #000099} .jsoneditor-field {white-space: nowrap} .jsoneditor-popover, .jsoneditor-schema-error, div.jsoneditor td, div.jsoneditor textarea, div.jsoneditor th, div.jsoneditor-field, div.jsoneditor-value, pre.jsoneditor-preview { font-family: \"dejavu sans mono\",\"droid sans mono\",consolas,monaco,\"lucida console\",\"courier new\",courier,monospace,sans-serif; font-size: 10pt; color: #1a1a1a; } div.jsoneditor-default, div.jsoneditor-field, div.jsoneditor-readonly, div.jsoneditor-value { border: 1px solid transparent; min-height: 16px; min-width: 32px; padding: 2px; margin: 1px; word-wrap: break-word; float: left; } div.jsoneditor td { vertical-align: top; } .jsoneditor td, .jsoneditor th { padding: 0; display: table-cell; text-align: left; vertical-align: inherit; border-radius: inherit; } div.jsoneditor-tree button.jsoneditor-contextmenu { background-position: -48px -72px; } /* buttons */ div.jsoneditor-tree button.jsoneditor-button { width: 24px; height: 24px; padding: 0; margin: 0; border: none; cursor: pointer; background-color: transparent; outline: none; } div.jsoneditor-tree button.jsoneditor-invisible { visibility: hidden; } div.jsoneditor-tree button.jsoneditor-expanded { background-color: '#4499ff'; position: relative; outline: none; } div.jsoneditor-tree button.jsoneditor-expanded:after { content: ' '; position: absolute; top: 9px; left: 9px; width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 5px solid #000; } div.jsoneditor-tree button.jsoneditor-collapsed { background-color: '#4499ff'; position: relative; outline: none; } div.jsoneditor-tree button.jsoneditor-collapsed:after { content: ' '; position: absolute; top: 9px; left: 9px; width: 0; height: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-left: 5px solid #000; } div.jsoneditor td.jsoneditor-tree { vertical-align: top; } div.jsoneditor td.jsoneditor-separator { padding: 3px 0; vertical-align: top; color: grey; } div.jsoneditor td.jsoneditor-separator { padding: 3px 0; vertical-align: top; color: grey; } div.jsoneditor td.jsoneditor-datatype { padding: 3px 0; vertical-align: top; color: grey; } .jsoneditor-contextmenu { position: absolute; box-sizing: content-box; z-index: 99; } div.jsoneditor-value.jsoneditor-string { color: #006000; } input.jsoneditor-input.jsoneditor-string { border: 0px;padding: 0px;margin: 0px;font-size: 14px;vertical-align: sub;outline: none;color: #006000;width: 100%;background-color: transparent; } input.jsoneditor-input.jsoneditor-string:focus { background-color: #bcffa0; } textarea.jsoneditor-input.jsoneditor-string { border: 0px;padding: 0px;margin: 0px;outline: none;color: #006000;width:100%;box-sizing:border-box;display:block;max-width:100%;font:13px Tahoma, cursive; } textarea.jsoneditor-input.jsoneditor-string:focus { background-color: #bcffa0; } div.jsoneditor-value.jsoneditor-number { color: #ee422e; } input.jsoneditor-input.jsoneditor-number { border: 0px;padding: 0px;margin: 0px;font-size: 14px;vertical-align: sub;outline: none;color: #ee422e;width: 100%;background-color: transparent; } input.jsoneditor-input.jsoneditor-number:focus { background-color: #bcffa0; } div.jsoneditor-value.jsoneditor-boolean { color: #ff8c00; } input.jsoneditor-input.jsoneditor-boolean { border: 0px;padding: 0px;margin: 0px;font-size: 14px;vertical-align: sub;outline: none;color: #ff8c00;width: 100%;background-color: transparent; } input.jsoneditor-input.jsoneditor-boolean:focus { background-color: #bcffa0; } input.jsoneditor-input.jsoneditor-boolean.error { background-color: red !important; } div.jsoneditor-value.jsoneditor-binary { color: #004ed0; } input.jsoneditor-input.jsoneditor-binary { border: 0px;padding: 0px;margin: 0px;font-size: 14px;vertical-align: sub;outline: none;color: #004ed0;width: 100%;background-color: transparent; } input.jsoneditor-input.jsoneditor-binary:focus { background-color: #bcffa0; } div.jsoneditor-value.jsoneditor-null { color: #004ed0; } .jsoneditor-input.jsoneditor-null { border: 0px;padding: 0px;margin: 0px;font-size: 14px;vertical-align: sub;outline: none;color: #004ed0;width: 100%;background-color: transparent;line-height: 27px; } /* icons and btns */ .btn-delete-attribute {display: none;} tr:hover .btn-delete-attribute {display: inline-block;} .trash-solid.icon { color: #aaa; position: absolute; margin-left: 5px; margin-top: 0px; width: 8px; height: 8px; border-left: solid 1px currentColor; border-right: solid 1px currentColor; border-bottom: solid 1px currentColor; border-radius: 0 0 2px 2px; background-color: currentColor; } .trash-solid.icon:hover {color: #999;} .trash-solid.icon:before { content: ''; position: absolute; left: -4px; top: -2px; width: 17px; height: 1px; background-color: currentColor; } .trash-solid.icon:after { content: ''; position: absolute; left: 0px; top: -5px; width: 7px; height: 2px; border-left: solid 1px currentColor; border-right: solid 1px currentColor; border-top: solid 1px currentColor; background-color: currentColor; border-radius: 4px 4px 0 0; } ",data:function(){return{open:!0,mode:"tree",mainMenuBar:!0,navigationBar:!0,statusBar:!0}},prepend_attribute:function(t,e,n){console.log("prepend",t,e,n);var o,r=this.get("item");"S"===t&&(o={S:""}),"N"===t&&(o={N:""}),"BOOL"===t&&(o={BOOL:""}),"NULL"===t&&(o={NULL:!0}),"B"===t&&(o={B:Uint8Array.from(atob("InsertBase64Here"),function(t){return t.charCodeAt(0)})}),"SS"===t&&(o={SS:[]}),"NS"===t&&(o={NS:[]}),"BS"===t&&(o={BS:[]}),"L"===t&&(o={L:[]}),"M"===t&&(o={M:{}});var i={};null===e?(i[n]=o,Object.keys(r).map(function(t){i[t]=r[t]})):Object.keys(r).map(function(t){i[t]=r[t],t===e&&(i[n]=o)}),this.set({item:{}}),this.set({item:i})},delegate:!1,elToFocus:null,delete_key:function(t){var e=this.get("item");delete e[t],this.set({item:e})},on:{}})},function(t,e){t.exports=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ractive.extend({template:"\n\t{{#if type === null}}\n\t<tr class='jsoneditor-appender'>\n\t\t<td></td><td></td><td>\n\t\t\t\t<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='pickatype'></div>\n\t\t</td><td></td>\n\t</tr>\n\t{{/if}}\n\n\t{{#if type !== null }}\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ (level+1) * 24 }}px;'>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t\t<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree'>\n\t\t\t\t\t\t\t\t<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>*</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-separator'>:</td>\n\t\t\t\t\t\t\t<td class='jsoneditor-tree' style='width: 100%;'>\n\t\t\t\t\t\t\t\t<select value={{type}} on-change='typepicked' style='margin-top: 3px;'>\n\t\t\t\t\t\t\t\t\t<option value=''>Select Data Type</option>\n\t\t\t\t\t\t\t\t\t<option value='S'>String</option>\n\t\t\t\t\t\t\t\t\t<option value='N'>Number</option>\n\t\t\t\t\t\t\t\t\t<option value='BOOL'>Boolean</option>\n\t\t\t\t\t\t\t\t\t<option value='NULL'>Null</option>\n\t\t\t\t\t\t\t\t\t<option value='B'>Binary</option>\n\t\t\t\t\t\t\t\t\t<option value='SS'>StringSet</option>\n\t\t\t\t\t\t\t\t\t<option value='NS'>NumberSet</option>\n\t\t\t\t\t\t\t\t\t<option value='BS'>BinarySet</option>\n\t\t\t\t\t\t\t\t\t<option value='L'>List</option>\n\t\t\t\t\t\t\t\t\t<option value='M'>Map</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\n\t\t\t\t\t<div class='trash-solid icon'></div>\n\t\t\t\t</button>\n\t\t\t</td>\n\t\t</tr>\n\t{{/if}}\n\t",data:function(){return{type:null}},on:{delete:function(){this.set({type:null})},pickatype:function(){this.set({type:""})},typepicked:function(){this.get("type")&&(this.parent.prepend_attribute(this.get("type"),this.get("index")),this.set({type:null}))}}})}],r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=11)).default;function r(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return o[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var o,i});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(61);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isObject = __webpack_require__(2);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(74)))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(30),
    eq = __webpack_require__(25);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(94);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(96),
    isArguments = __webpack_require__(97),
    isArray = __webpack_require__(14),
    isBuffer = __webpack_require__(32),
    isIndex = __webpack_require__(100),
    isTypedArray = __webpack_require__(101);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(0),
    stubFalse = __webpack_require__(99);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)(module)))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(26),
    isLength = __webpack_require__(33);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(31),
    baseKeysIn = __webpack_require__(106),
    isArrayLike = __webpack_require__(35);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(39),
    getPrototype = __webpack_require__(40),
    getSymbols = __webpack_require__(19),
    stubArray = __webpack_require__(37);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(34);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(39),
    isArray = __webpack_require__(14);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

__webpack_require__(43);

var _ractive = __webpack_require__(22);

var _ractive2 = _interopRequireDefault(_ractive);

var _minitablelist = __webpack_require__(44);

var _minitablelist2 = _interopRequireDefault(_minitablelist);

var _ractiveWindowMin = __webpack_require__(46);

var _ractiveWindowMin2 = _interopRequireDefault(_ractiveWindowMin);

var _tabs = __webpack_require__(47);

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ddb;

var DynamodbFactory = window['@awspilot/dynamodb'];
//var DynamodbFactory = require('@awspilot/dynamodb')
//import DynamodbFactory from '@awspilot/dynamodb';


var hsplit = _ractive2.default.extend({
	isolated: false,
	data: {
		direction: 'horizontal'
	},
	template: '<div class="hsplit {{class}} " style="{{style}}">{{yield}}</div>'
});

exports.default = _ractive2.default.extend({
	template: '\n\t\t\t<div class=\'ractive-dynamodb-ui\'>\n\t\t\t\t<WindowHost />\n\t\t\t</div>\n\t\t\t<hsplit style=\'\' class=\'ractive-dynamodb-ui\'>\n\t\t\t\t<left>\n\t\t\t\t\t<minitablelist />\n\t\t\t\t</left>\n\t\t\t\t<content>\n\t\t\t\t\t<tabs active_id=\'tables\' />\n\t\t\t\t</content>\n\t\t\t</hsplit>\n\t\t',
	components: {
		hsplit: hsplit,
		minitablelist: _minitablelist2.default,
		tabs: _tabs2.default,
		Window: _ractiveWindowMin2.default.default.Window,
		WindowHost: _ractiveWindowMin2.default.default.WindowHost
	},

	data: function data() {
		return {};
	},
	delegate: false,
	elToFocus: null,
	on: {
		init: function init() {

			this.on('open-table', function (e, table) {
				this.findComponent('tabs').newtab('tabletab', table);
			});

			// if (this.get('account.endpoint')) {
			// 	credentials.endpoint = this.get('account.endpoint')
			// 	if (this.get('account.endpoint').indexOf( location.protocol + '//' + location.host ) === 0) {
			// 		// dynamodb is proxied via same host, force version signature 3 so Authorization header is not used
			// 		credentials.signatureVersion = 'v3'
			// 		// httpOptions: { xhrWithCredentials: true },
			// 	}
			// }

			ddb = new AWS.DynamoDB({
				endpoint: this.get('endpoint'),
				region: this.get('region'),
				credentials: {
					accessKeyId: this.get('accessKeyId'),
					secretAccessKey: this.get('secretAccessKey')
				}
			});

			DynamoDB = new DynamodbFactory(ddb);

			cloudwatch = new AWS.CloudWatch({
				endpoint: this.get('cwendpoint'),
				region: this.get('region'),
				credentials: {
					accessKeyId: this.get('accessKeyId'),
					secretAccessKey: this.get('secretAccessKey')
				}
			});
		}
	}
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _svgicons = __webpack_require__(45);

var _svgicons2 = _interopRequireDefault(_svgicons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	//isolated: true,
	template: '\n\t\t<miniheader>\n\t\t\tTables\n\t\t\t<div class=\'pull-right\' style=\'margin-right: 5px;\'>\n\t\t\t\t<a class=\'btn btn-xs btn-default\' on-click=\'create\'>\n\t\t\t\t\t<icon-plus />\n\t\t\t\t</a>\n\t\t\t\t<a class=\'btn btn-xs btn-default\' on-click=\'@this.refresh_tables()\'>\n\t\t\t\t\t<icon-refresh />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</miniheader>\n\t\t<scrollarea class=\'scrollarea miniheaderbody\' style=\'position: absolute;\'>\n\t\t<tables>\n\t\t\t{{#tables}}\n\t\t\t<div on-click=\'@this.fire( "open-table",.)\'> {{.}} </div>\n\t\t\t{{/tables}}\n\t\t</tables>\n\t\t</scrollarea>\n\t\t',
	data: function data() {
		return {};
	},
	refresh_tables: function refresh_tables() {
		var ractive = this;

		ractive.set('tables');

		DynamoDB.query('SHOW TABLES', function (err, data) {

			if (err) return ractive.set('err', err);

			ractive.set('err');
			ractive.set('tables', data);
		});
	},
	oninit: function oninit() {
		this.refresh_tables();
		var ractive = this;
		ractive.on('open-table', function (e, table) {
			ractive.parent.fire('open-table', table);
		});
		ractive.on('create', function () {
			ractive.root.findComponent('tabs').newtab('tablecreate', 'Create Table');
		});
	}
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Ractive.components['icon-plus'] = Ractive.extend({
	template: '\n\t\t<svg class="icon" style={{style}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 31.444 31.444" xml:space="preserve">\n\t\t\t<path d="M1.119,16.841c-0.619,0-1.111-0.508-1.111-1.127c0-0.619,0.492-1.111,1.111-1.111h13.475V1.127\n\t\t\t\tC14.595,0.508,15.103,0,15.722,0c0.619,0,1.111,0.508,1.111,1.127v13.476h13.475c0.619,0,1.127,0.492,1.127,1.111\n\t\t\t\tc0,0.619-0.508,1.127-1.127,1.127H16.833v13.476c0,0.619-0.492,1.127-1.111,1.127c-0.619,0-1.127-0.508-1.127-1.127V16.841H1.119z"\n\t\t\t\t/>\n\t\t</svg>\n\n\t'
});

Ractive.components['icon-refresh'] = Ractive.extend({
	template: '\n\t<svg class="icon" style={{style}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t\t viewBox="0 0 477.867 477.867" xml:space="preserve">\n\t<g>\n\t\t<g>\n\t\t\t<path d="M409.6,0c-9.426,0-17.067,7.641-17.067,17.067v62.344C304.667-5.656,164.478-3.386,79.411,84.479\n\t\t\t\tc-40.09,41.409-62.455,96.818-62.344,154.454c0,9.426,7.641,17.067,17.067,17.067S51.2,248.359,51.2,238.933\n\t\t\t\tc0.021-103.682,84.088-187.717,187.771-187.696c52.657,0.01,102.888,22.135,138.442,60.976l-75.605,25.207\n\t\t\t\tc-8.954,2.979-13.799,12.652-10.82,21.606s12.652,13.799,21.606,10.82l102.4-34.133c6.99-2.328,11.697-8.88,11.674-16.247v-102.4\n\t\t\t\tC426.667,7.641,419.026,0,409.6,0z"/>\n\t\t</g>\n\t</g>\n\t<g>\n\t\t<g>\n\t\t\t<path d="M443.733,221.867c-9.426,0-17.067,7.641-17.067,17.067c-0.021,103.682-84.088,187.717-187.771,187.696\n\t\t\t\tc-52.657-0.01-102.888-22.135-138.442-60.976l75.605-25.207c8.954-2.979,13.799-12.652,10.82-21.606\n\t\t\t\tc-2.979-8.954-12.652-13.799-21.606-10.82l-102.4,34.133c-6.99,2.328-11.697,8.88-11.674,16.247v102.4\n\t\t\t\tc0,9.426,7.641,17.067,17.067,17.067s17.067-7.641,17.067-17.067v-62.345c87.866,85.067,228.056,82.798,313.122-5.068\n\t\t\t\tc40.09-41.409,62.455-96.818,62.344-154.454C460.8,229.508,453.159,221.867,443.733,221.867z"/>\n\t\t</g>\n\t</g>\n\t</svg>\n\t'
});

Ractive.components['icon-trash'] = Ractive.extend({
	template: '\n\t<svg class="icon" style={{style}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="459px" height="459px" viewBox="0 0 459 459" xml:space="preserve">\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5\n\t\t\t\t\tH51v51h357V25.5z"/>\n\t\t\t</g>\n\t\t</g>\n\t</svg>\n'
});

Ractive.components['icon-database'] = Ractive.extend({
	template: '\n\t\t<svg class="icon" style={{style}} height="512pt" viewBox="0 -52 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">\n\t\t\t<path d="m0 0h113.292969v113.292969h-113.292969zm0 0"/>\n\t\t\t<path d="m149.296875 0h362.703125v113.292969h-362.703125zm0 0"/>\n\t\t\t<path d="m0 147.007812h113.292969v113.292969h-113.292969zm0 0"/>\n\t\t\t<path d="m149.296875 147.007812h362.703125v113.292969h-362.703125zm0 0"/>\n\t\t\t<path d="m0 294.011719h113.292969v113.296875h-113.292969zm0 0"/>\n\t\t\t<path d="m149.296875 294.011719h362.703125v113.296875h-362.703125zm0 0"/>\n\t\t</svg>\n'
});

Ractive.components['icon-x'] = Ractive.extend({
	template: '\n\t\t<svg class="icon" style={{style}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t\t\t viewBox="0 0 512.001 512.001" xml:space="preserve">\n\n\t\t\t<g>\n\t\t\t\t<path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892\n\t\t\t\t\tL46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999\n\t\t\t\t\tc-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998\n\t\t\t\t\tc10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>\n\t\t\t</g>\n\n\t\t</svg>\n'
});

Ractive.components['icon-play'] = Ractive.extend({
	template: '\n\t\t<svg class="icon" style={{style}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t\t\t viewBox="0 0 41.999 41.999" xml:space="preserve">\n\t\t\t<path d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40\n\t\t\tc0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20\n\t\t\tc0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z"/>\n\t\t</svg>\n\t'
});

Ractive.components['icon-prev'] = Ractive.extend({
	template: '\n\t\t<svg class="icon" style={{style}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t\t\t viewBox="0 0 477.175 477.175" xml:space="preserve">\n\t\t<g>\n\t\t\t<path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225\n\t\t\t\tc2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>\n\t\t</g>\n\t\t</svg>\n\t'
});

Ractive.components['icon-next'] = Ractive.extend({
	template: '\n\t\t<svg class="icon" style={{style}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t\t\t viewBox="0 0 477.175 477.175" xml:space="preserve">\n\t\t<g>\n\t\t\t<path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5\n\t\t\t\tc-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z\n\t\t\t\t"/>\n\t\t</g>\n\t\t</svg>\n\t'
});
Ractive.components['icon-caret-down'] = Ractive.extend({
	template: '\n\t\t<svg class="icon" style={{style}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t\t\t width="292.362px" height="292.362px" viewBox="0 0 292.362 292.362"\n\t\t\t xml:space="preserve">\n\t\t<g>\n\t\t\t<path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424\n\t\t\t\tC1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428\n\t\t\t\ts9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>\n\t\t</g>\n\t\t</svg>\n\t'
});
Ractive.components['icon-filter'] = Ractive.extend({
	template: '\n\t\t<svg class="icon" style={{style}} height="393pt" viewBox="-4 0 393 393.99003" width="393pt" xmlns="http://www.w3.org/2000/svg" >\n\t\t\t<path d="m368.3125 0h-351.261719c-6.195312-.0117188-11.875 3.449219-14.707031 8.960938-2.871094 5.585937-2.3671875 12.3125 1.300781 17.414062l128.6875 181.28125c.042969.0625.089844.121094.132813.183594 4.675781 6.3125 7.203125 13.957031 7.21875 21.816406v147.796875c-.027344 4.378906 1.691406 8.582031 4.777344 11.6875 3.085937 3.105469 7.28125 4.847656 11.65625 4.847656 2.226562 0 4.425781-.445312 6.480468-1.296875l72.3125-27.574218c6.480469-1.976563 10.78125-8.089844 10.78125-15.453126v-120.007812c.011719-7.855469 2.542969-15.503906 7.214844-21.816406.042969-.0625.089844-.121094.132812-.183594l128.683594-181.289062c3.667969-5.097657 4.171875-11.820313 1.300782-17.40625-2.832032-5.511719-8.511719-8.9726568-14.710938-8.960938zm-131.53125 195.992188c-7.1875 9.753906-11.074219 21.546874-11.097656 33.664062v117.578125l-66 25.164063v-142.742188c-.023438-12.117188-3.910156-23.910156-11.101563-33.664062l-124.933593-175.992188h338.070312zm0 0"/>\n\t\t</svg>\n\t'
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(undefined, function (exports) {
  "use strict";
  var _slicedToArray = function _slicedToArray(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      var _arr = [];for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        _arr.push(_step.value);if (i && _arr.length === i) break;
      }return _arr;
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };var template = "		{{#_wnd_rendered}}			<div id='ractive-window-{{.id}}' 						class='ractive-window{{#(.buttons.length > 0)}} with-buttons{{/}}{{#.resizable}} resizable{{else}} fixed{{/}}{{#.geometry.state === 2}} maximized{{/}}{{#.class.window}} {{.class.window}}{{/}}{{#.topmost}} topmost{{/}}' 						on-click='_raise' 						style='{{#.hidden}}display: none;{{/}}top: {{.geometry.top}}px; left: {{.geometry.left}}px; {{#(.resizable || .geometry.state === 2)}}width: {{.geometry.width}}{{.geometry.dwunit}}; height: {{.geometry.height}}{{.geometry.dhunit}}; {{/}}z-index: {{.geometry.index}};{{#.style.window}} {{.style.window}}{{/}}'>\n							<div class='rw-modal' on-mousedown='_moveStart' style='{{^.blocked}}display: none;{{/}}'></div>\n  							<div class='rw-interior'>\n 								<div class='rw-controls'>{{>controls}}</div>\n  								<div class='rw-title' on-touchstart-mousedown='_moveStart' on-dblclick='_restore'>{{>title}}</div>\n  								{{#if dialog}}<div class='rw-dialog-cover'></div><div class='rw-dialog' style='width: {{dialog.width}}px; {{#if dialog.height}}height: {{dialog.height}}px; {{/if}}'>{{> ~/makePartial('sharedialog', dialog.raw) }}</div>{{/if}}								<div class='rw-body{{#.class.body}} {{.class.body}}{{/}}' {{#.style.body}}style='{{.style.body}}'{{/}}>{{>body}}</div>\n  								{{#(.buttons.length > 0)}}<div class='rw-buttons'>{{>buttons}}</div>{{/}}\n  								<div class='rw-resize-handle' on-touchstart-mousedown='_resizeStart'></div>\n   								<div class='rw-foot'>{{>foot}}</div>\n 							</div>\n			</div>		{{/}}";var Window;Window = Ractive.extend({ template: template, prompt: function prompt(message, cb) {
      this.dialog({ content: message, raw: "{{dialog.content}}<br><input class='form-control' value='{{dialog.reply}}' /> <div style='position: absolute;bottom: 10px;right: 10px;'><a class='btn btn-xs btn-default' on-click='@this.set(\"dialog\", false )'>Cancel</a> <a class='btn btn-xs btn-primary' on-click='dialog.callback.prompt:{{dialog}}'>OK</a></div>", width: 300, cb: cb });
    }, confirm: function confirm(message, cb) {
      this.dialog({ content: message, raw: "{{dialog.content}} <div style='position: absolute;bottom: 10px;right: 10px;'><a class='btn btn-xs btn-default' on-click='@this.set(\"dialog\", false )'>Cancel</a> <a class='btn btn-xs btn-primary' on-click='dialog.callback.ok:{{dialog}}'>OK</a></div>", width: 300, cb: cb });
    }, dialog: function dialog(opts) {
      this.set("dialog", { content: opts.content, params: opts.params, raw: opts.raw, width: opts.width, height: opts.height, cb: opts.cb });
    }, onconstruct: function onconstruct(opts) {
      var wnd = this;var sx, sy;var _moveFn;_moveFn = function moveFn(e) {
        var x, y;e.preventDefault();if (e.type.indexOf("touch") >= 0) {
          x = +e.changedTouches[0].clientX;y = +e.changedTouches[0].clientY;
        } else {
          x = +(e.x || e.clientX);y = +(e.y || e.clientY);
        }wnd.move(+wnd.get("geometry.left") + x - +sx, +wnd.get("geometry.top") + y - +sy);sx = x;sy = y;if (e.type === "mouseup" || e.type === "touchend") {
          document.removeEventListener("mousemove", _moveFn, false);document.removeEventListener("mouseup", _moveFn, false);document.removeEventListener("touchmove", _moveFn, false);document.removeEventListener("touchend", _moveFn, false);
        }
      };wnd.on("_moveStart", function (e) {
        if (e.original.type === "mousedown" && e.original.button === 0 || e.original.type === "touchstart") {
          wnd.restore();if (e.original.type.indexOf("touch") >= 0) {
            sx = +e.original.changedTouches[0].clientX;sy = +e.original.changedTouches[0].clientY;
          } else {
            sx = +(e.original.x || e.original.clientX);sy = +(e.original.y || e.original.clientY);
          }document.addEventListener("mousemove", _moveFn);document.addEventListener("mouseup", _moveFn);document.addEventListener("touchmove", _moveFn);document.addEventListener("touchend", _moveFn);e.original.preventDefault();
        }$("iframe", wnd.element).focus();
      });var _resizeFn;_resizeFn = function resizeFn(e) {
        var x, y;e.preventDefault();if (e.type.indexOf("touch") >= 0) {
          x = e.changedTouches[0].clientX;y = e.changedTouches[0].clientY;
        } else {
          x = +(e.x || e.clientX);y = +(e.y || e.clientY);
        }var w = +wnd.get("geometry.width") + (x - +sx);var h = +wnd.get("geometry.height") + (y - +sy);wnd.resize(w, h);sx = x;sy = y;if (e.type === "mouseup" || e.type === "touchend") {
          document.removeEventListener("mousemove", _resizeFn, false);document.removeEventListener("mouseup", _resizeFn, false);document.removeEventListener("touchmove", _resizeFn, false);document.removeEventListener("touchend", _resizeFn, false);
        }
      };wnd.on("_resizeStart", function (e) {
        if (e.original.type == "mousedown" && e.original.button === 0 || e.original.type === "touchstart") {
          wnd.restore();if (e.original.type.indexOf("touch") >= 0) {
            sx = e.original.changedTouches[0].clientX;sy = e.original.changedTouches[0].clientY;
          } else {
            sx = e.original.x || e.original.clientX;sy = e.original.y || e.original.clientY;
          }document.addEventListener("mousemove", _resizeFn);document.addEventListener("mouseup", _resizeFn);document.addEventListener("touchmove", _resizeFn);document.addEventListener("touchend", _resizeFn);
        }
      });var stateFn = function stateFn(target, e) {
        switch (target) {case "min":
            wnd.minimize();break;case "max":
            wnd.maximize();break;case "normal":
            wnd.restore();break;default:
            break;}
      };wnd.on("dialog.callback.ok", function (e, dialog) {
        this.set("dialog", false);try {
          dialog.cb();
        } catch (e) {}
      });wnd.on("dialog.callback.prompt", function (e, dialog) {
        try {
          dialog.cb(dialog.reply);
        } catch (e) {}this.set("dialog", false);
      });wnd.on("_minimize", function (e) {
        stateFn("min", e);
      });wnd.on("_restore", function (e) {
        switch (wnd.get("geometry.state")) {case 0:
            stateFn("max", e);break;case 1:case 2:
            stateFn("normal", e);break;default:
            break;}
      });wnd.on("_raise", function (e) {
        wnd.raise();
      });wnd.on("_close", function (e) {
        wnd.close();
      });wnd.on("_dialog-button", function (e) {
        var fn = e.context.action;if (!!fn && typeof fn === "function") fn.call(this);
      });wnd.result = null;wnd.waitForClose = wnd.afterClose = new Promise(function (y, n) {
        var fn = function fn(t) {
          return function (v) {
            wnd.completeAfterClose = null;wnd.rejectAfterClose = null;t(v);
          };
        };wnd.completeAfterClose = fn(y);wnd.rejectAfterClose = fn(n);
      });
    }, onrender: function onrender() {
      var _this = this;if (!!!this.get("buttonClass") && !!this.parent.get("buttonClass")) {
        this.set("buttonClass", this.parent.get("buttonClass"));
      }this.watchers = this.observe({ title: function title(n, o) {
          _this.fire("retitle", n, _this);
        }, "geometry.state": function geometryState(n, o) {
          switch (n) {case 0:
              _this.fire("restore", n, _this);break;case 1:
              _this.fire("minimize", n, _this);break;case 2:
              _this.fire("maximize", n, _this);break;}
        } });
    }, onunrender: function onunrender() {
      if (this.watchers && typeof this.watchers.cancel === "function") this.watchers.cancel();
    }, activated: function activated() {}, data: function data() {
      return { dialog: false, _wnd_rendered: false, blocked: false, resizable: true, geometry: { top: -9999, left: -9999, width: 200, height: 200, state: 0, dwunit: "px", dhunit: "px", index: 1e3, minimum: { x: 0, y: 0, width: 70, height: 50 } }, style: {}, "class": {}, makePartial: function makePartial(key, template) {
          if (!this._makePartial_templates) this._makePartial_templates = {};if (this._makePartial_templates[key] != template) {
            this.resetPartial(key, template);this._makePartial_templates[key] = template;
          }return key;
        } };
    }, partials: { title: "{{> ~/makePartial('titleTpl', .title) }}", body: "", foot: "", buttons: "{{#.buttons:i}}<button on-click='_dialog-button' class='{{.position || ''}}{{#.buttonClass}} {{.buttonClass}}{{/}}{{#../../class.button}} {{../../class.button}}{{/}}' disabled='{{!.enabled}}'>{{> ~/makePartial('button' + i + 'Tpl', .label) }}</button>{{/}}", controls: "{{#controls:i}}" + "	{{#if .raw}}{{>  ~/makePartial('custom_control_template'+i, .raw) }}{{/if}}" + "{{/controls}}" + "{{#if minimizable === false}}{{else}}{{>minimizeControl}}{{/if}}" + "{{>restoreControl}}{{>closeControl}}", minimizeControl: "<button on-click='_minimize' class='btn btn-sm rw-minimize'><i class='zmdi zmdi-window-minimize'></button>", restoreControl: "<button on-click='_restore'  class='btn btn-sm rw-restore'><i class='zmdi zmdi-window-restore'></button>", closeControl: "<button on-click='_close'    class='btn btn-sm rw-close'><i class='zmdi zmdi-close'></i></button>" }, rerender: function rerender() {
      var wnd = this;if (!wnd.get("_wnd_rendered")) return Promise.resolve("ok");wnd.set("_wnd_rendered", false);return this.set("_wnd_rendered", true);
    }, title: function title(str) {
      this.set("title", str);
    }, move: function move(x, y) {
      if (typeof x === "string") {
        switch (x) {case "center":case "centerScreen":
            return this.set({ "geometry.top": (this.parent.el.clientHeight - this.element.clientHeight) / 2, "geometry.left": (this.parent.el.clientWidth - this.element.clientWidth) / 2 });case "cascade":
            return this.set({ "geometry.top": this.parentNumber % 10 * 20 + 10, "geometry.left": this.parentNumber % 50 * 20 + 10 });}return Promise.resolve(false);
      }y = +y;x = +x;var min = this.get("geometry.minimum");var max = this.get("geometry.maximum");var w = +this.get("geometry.width");var h = +this.get("geometry.height");if (!!max) {
        if (x + w > +max.x) x = +max.x - x;if (y + h > +max.y) y = +max.y - y;
      }if (!!min) {
        if (x < +min.x) x = +min.x;if (y < +min.y) y = +min.y;
      }return this.set({ "geometry.top": y, "geometry.left": x });
    }, resize: function resize(w, h) {
      w = getDimPx.call(this, "width", w);h = getDimPx.call(this, "height", h);var min = this.get("geometry.minimum");var max = this.get("geometry.maximum");if (!!max) {
        if (w > max.width) w = max.width;if (w > max.height) w = max.height;
      }if (!!min) {
        if (w < min.width) w = min.width;if (h < min.height) h = min.height;
      }this.set({ "geometry.width": w, "geometry.height": h });$("iframe", this.element).focus();
    }, resizable: function resizable(b) {
      this.set("resizable", b);
    }, minimize: function minimize() {
      var wnd = this;if (wnd.get("geometry.state") !== 1) {
        wnd.set({ hidden: true, "geometry.state": 1 });wnd.fire("minimized", { window: wnd });
      }
    }, maximize: function maximize() {
      var wnd = this;if (wnd.get("geometry.state") !== 2) {
        wnd.normalGeometry = { top: wnd.get("geometry.top"), left: wnd.get("geometry.left"), width: wnd.get("geometry.width"), height: wnd.get("geometry.height") };wnd.set({ hidden: false, "geometry.left": 0, "geometry.top": 0, "geometry.width": 100, "geometry.height": 100, "geometry.dwunit": "%", "geometry.dhunit": "%", "geometry.state": 2 });wnd.fire("maximized", { window: wnd });
      }
    }, restore: function restore() {
      var wnd = this;switch (wnd.get("geometry.state")) {case 1:
          wnd.set({ hidden: false, "geometry.state": 0 });break;case 2:
          var g = wnd.normalGeometry || {};wnd.normalGeometry = null;if (g.top < 0 || g.left < 0) {
            g.top = 0;g.left = 0;
          }wnd.set({ hidden: false, "geometry.left": g.left, "geometry.top": g.top, "geometry.width": g.width, "geometry.height": g.height, "geometry.dwunit": "px", "geometry.dhunit": "px", "geometry.state": 0 });break;default:
          break;}this.raise();
    }, raise: function raise() {
      if (!!this.parent) this.parent.raiseWindow(this);
    }, kill: function kill() {
      var wnd = this;this.fire("close", this);if (!!wnd.parent) {
        wnd.parent.killWindow(wnd);
      } else {
        wnd.teardown();
      }if (!!wnd.completeAfterClose) wnd.completeAfterClose(wnd.result);
    }, content: function content(ct) {
      return this.resetPartial("body", ct);
    }, buttons: function buttons() {
      var arr = [],
          i;this.set("buttons", arr);if (arguments.length === 1 && typeof arguments[0].length === "number") {
        arr = arguments[0];
      } else {
        for (i = 0; i < arguments.length; i++) {
          arr.push(arguments[i]);
        }
      }var left = [],
          right = [],
          middle = [];for (i = 0; i < arr.length; i++) {
        var b = arr[i];if (!!b.position) {
          if (b.position === "left") left.push(b);else if (b.position === "right") right.push(b);else if (b.position === "middle") middle.push(b);else if (b.position === "center") middle.push(b);else {
            right.push(b);b.position = "right";
          }
        } else {
          right.push(b);b.position = "right";
        }if (!b.hasOwnProperty("enabled")) b.enabled = true;
      }arr = [];for (i = 0; i < left.length; i++) {
        arr.push(left[i]);
      }for (i = right.length - 1; i >= 0; i--) {
        arr.push(right[i]);
      }for (i = 0; i < middle.length; i++) {
        arr.push(middle[i]);
      }this.set("buttons", arr);
    }, button: function button(name, cb) {
      var arr = this.get("buttons");var btn, i;if (typeof name === "number") {
        btn = arr[name];i = name;
      } else for (i = 0; i < arr.length; i++) {
        if (arr[i].label === name) {
          btn = arr[i];break;
        }
      }if (!!btn) {
        cb(btn);this.set("buttons." + i, btn);
      }
    }, controls: function controls() {
      var arr = [],
          i,
          str = "";if (arguments.length === 1 && typeof arguments[0] !== "string") arr = arguments[0];else {
        for (i = 0; i < arguments.length; i++) {
          arr.push(arguments[i]);
        }
      }for (i = 0; i < arr.length; i++) {
        str += "{{>" + arr[i] + "Control}}";
      }this.partials.controls = str;return this.rerender();
    }, onClose: function onClose() {
      this.kill();
    }, close: function close(fn) {
      if (!!!fn) fn = this.onClose;if (fn.length === 0) fn.call(this);else {
        var wnd = this;fn.call(this, function (close) {
          if (close) wnd.kill();
        });
      }
    } });var cssUnit = /([\d\.]+)(.*)/;function getDimPx(dim, length) {
    var _cssUnit$exec = cssUnit.exec(length.toString());var _cssUnit$exec2 = _slicedToArray(_cssUnit$exec, 3);var whole = _cssUnit$exec2[0];var size = _cssUnit$exec2[1];var unit = _cssUnit$exec2[2];unit = unit || "px";var dunit = dim === "width" ? "dwunit" : "dhunit";var div = this.find("div");if (unit === "px") {
      return size;
    } else if (div) {
      var toSet = {};toSet["geometry." + dim] = size;toSet["geometry." + dunit] = unit;this.set(toSet);var v = this.find("div")["client" + dim[0].toUpperCase() + dim.substring(1)];toSet["geometry." + dim] = v;toSet["geometry." + dunit] = "px";this.set(toSet);return v;
    }
  }var messageButtons = { ok: { label: "OK", action: function action() {
        this.result = "ok";this.close();
      }, position: "middle" }, cancel: { label: "Cancel", action: function action() {
        this.result = "cancel";this.close();
      }, position: "middle" }, yes: { label: "Yes", action: function action() {
        this.result = "yes";this.close();
      }, position: "middle" }, no: { label: "No", action: function action() {
        this.result = "no";this.close();
      }, position: "middle" } };var WindowHost;WindowHost = function () {
    var counter = 0;function newWindow(e, cb) {
      var current = counter;counter += 1;var host = this;return host.push("windowSlots", current).then(function () {
        var pr;var wnds = host.findAllComponents("Window");var wnd = wnds[wnds.length - 1];host.set("windows." + current, wnd);wnd.parentNumber = current;wnd.set({ "geometry.index": 1e3 + wnds.length, "geometry.left": -9999, "geometry.top": -9999, id: current });var step1 = function step1() {
          var mpr;if (!!cb && typeof cb === "function") {
            try {
              mpr = cb(wnd);if (!!mpr && typeof mpr.then === "function") return mpr;
            } catch (e1) {
              console.log(e1);
            }
          } else if (typeof e === "function") {
            try {
              mpr = e(wnd);if (!!mpr && typeof mpr.then === "function") pr = mpr;
            } catch (e2) {
              console.log(e2);
            }
          }
        };pr = step1();var step2 = function step2() {
          var mpr;wnd.raise();return wnd.set("_wnd_rendered", true).then(function () {
            wnd.element = wnd.find(".ractive-window");try {
              mpr = wnd.activated();if (!!mpr && typeof mpr.then === "function") return mpr;
            } catch (e4) {
              console.log(e4);
            }
          });
        };if (!!pr) pr = pr.then(step2);else pr = step2();var step3 = function step3() {
          var mpr;if (wnd.get("geometry.left") === -9999) {
            return wnd.move("cascade").then(function () {
              return wnd;
            });
          }return wnd;
        };if (!!pr) pr = pr.then(step3);else pr = step3();return pr;
      });
    }function messageBox(opts) {
      var args = arguments;var host = this;return new Promise(function (y) {
        host.newWindow(function (w) {
          var message;if (args.length >= 2) {
            message = args[0];opts = args[1];
          } else if (args.length === 1 && typeof args[0] === "string") {
            message = args[0];opts = {};
          }w.set("title", opts.title || "Message");w.set("resizable", false);w.controls("close");w.content(message);var btns = opts.buttons || ["ok"],
              out = [];for (var i = 0; i < btns.length; i++) {
            if (messageButtons.hasOwnProperty(btns[i])) out.push(messageButtons[btns[i]]);
          }w.buttons(out);w.onClose = function () {
            this.kill();y(w.result || "none");
          };if (!opts.hasOwnProperty("modal") || opts.modal) host.set("globalBlock", w);w.activated = function () {
            w.move("center");
          };
        });
      });
    }return Ractive.extend({ isolated: true, defaults: { control: { label: function label(control, lbl) {
            Window.partials[control + "ControlLabel"] = lbl;
          } }, controls: function controls() {
          var partial = "";for (var i = 0; i < arguments.length; i++) {
            partial += "{{>" + arguments[i] + "Control}}";
          }Window.partials.controls = partial;
        } }, components: { Window: Window }, data: { windowSlots: [], windows: {}, blocks: {}, globalBlock: null }, computed: { blocked: function blocked() {
          return !!this.get("globalBlock");
        } }, template: "<div class='ractive-window-host-modal' style='{{^blocked}}display: none;{{/blocked}}'></div><div class='host-content'>{{yield}}</div>{{#windowSlots}}<Window/>{{/windowSlots}}", newWindow: newWindow, killWindow: function killWindow(wnd) {
        var blocks = this.get("blocks");var wnds = this.get("windows");var topWnd,
            topIdx = -1,
            i;if (!!wnds) {
          for (var w in wnds) {
            if (wnds[w] === wnd) delete wnds[w];else {
              i = wnds[w].get("geometry.index");if (i > topIdx) {
                topIdx = i;topWnd = wnds[w];
              }
            }
          }if (topWnd && !topWnd.get("topmost")) {
            topWnd.set("topmost", true);$("iframe", topWnd.element).focus();
          }
        }var slots = this.get("windowSlots");if (!!slots) {
          this.splice("windowSlots", slots.indexOf(wnd.parentNumber), 1);
        }for (i in blocks) {
          var arr = blocks[i];if (!!arr && Array.isArray(arr) && arr.indexOf(wnd.parentNumber) >= 0) arr.splice(arr.indexOf(wnd.parentNumber), 1);
        }if (wnd === this.get("globalBlock")) this.set("globalBlock", null);this.unblockUnblockedWindows();
      }, raiseWindow: function raiseWindow(wnd) {
        var wndso = this.get("windows");var slots = this.get("windowSlots");var blocks = this.get("blocks");var wnds = [];var target = this.topLevelBlockers(wnd);target.push(wnd);for (var k in wndso) {
          if (target.indexOf(wndso[k]) < 0) wnds.push(wndso[k]);
        }wnds.sort(function (a, b) {
          var ai = a.get("geometry.index"),
              bi = b.get("geometry.index");if (ai < bi) return -1;else if (ai > bi) return 1;else return 0;
        });if (!!wnd) wnds = wnds.concat(target);function moveBeforeBlocker(wnd, blockers) {
          for (var i in blockers) {
            var bl = wndso[blockers[i]];var wi = wnds.indexOf(wnd),
                bi = wnds.indexOf(bl);if (!!!bl || wi < 0 || bi < 0) continue;var arr = blocks[bl.parentNumber];if (!!!arr && Array.isArray(arr) && arr.length > 0) moveBeforeBlocker(bl, arr);if (wi > bi) {
              wnds.splice(wi, 1);wnds.splice(bi, 0, wnd);
            }
          }
        }var i;for (i in slots) {
          var arr = blocks[slots[i]];if (!!arr && Array.isArray(arr) && arr.length > 0) moveBeforeBlocker(wndso[slots[i]], arr);
        }for (i in wnds) {
          wnds[i].set("geometry.index", 1e3 + +i);if (wnds[i] !== wnd) {
            wnds[i].set("topmost", false);
          }
        }if (!wnd.get("topmost")) {
          wnd.set("topmost", true);$("iframe", wnd.element).focus();
        }function globalBlocks(wnd) {
          var res = [];if (!!!wnd) {
            return res;
          }var arr = blocks[wnd.parentNumber];if (!!arr && Array.isArray(arr) && arr.length > 0) {
            for (var i in arr) {
              res = res.concat(globalBlocks(wndso[arr[i]]));
            }
          }res.push(wnd);return res;
        }var globals = globalBlocks(this.get("globalBlock"));for (i in globals) {
          globals[i].add("geometry.index", 1e4);
        }
      }, topLevelBlockers: function topLevelBlockers(wnd) {
        if (!!!wnd) return [];var blocks = this.get("blocks");var wndso = this.get("windows");var arr = blocks[wnd.parentNumber];var res = [];if (!!!arr || !Array.isArray(arr) || arr.length === 0) return res;for (var i in arr) {
          var arr2 = blocks[arr[i]];if (!!!arr2 || !Array.isArray(arr2) || arr2.length === 0) res.push(wndso[arr[i]]);else {
            res = res.concat(this.topLevelBlockers(wndso[arr[i]]));
          }
        }return res;
      }, blockWindow: function blockWindow(target, blocker) {
        if (!!!target || !!!blocker) return;var blocks = this.get("blocks");var arr = blocks[target.parentNumber];if (!!!arr || !Array.isArray(arr)) arr = [];if (arr.indexOf(blocker.parentNumber) < 0) arr.push(blocker.parentNumber);blocks[target.parentNumber] = arr;for (var i = 2; i < arguments.length; i++) {
          if (arr.indexOf(arguments[i].parentNumber) < 0) arr.push(arguments[i].parentNumber);
        }if (arr.length > 0) target.set("blocked", true);this.raiseWindow();
      }, unblockWindow: function unblockWindow(target, blocker) {
        if (!!!target | !!!blocker) return;var blocks = this.get("blocks");var arr = blocks[target.parentNumber];if (!!!arr || !Array.isArray(arr)) return;if (arr.indexOf(blocker.parentNumber) >= 0) arr.splice(arr.indexOf(blocker.parentNumber), 1);for (var i = 2; i < arguments.length; i++) {
          if (arr.indexOf(arguments[i].parentNumber) >= 0) arr.splice(arr.indexOf(arguments[i].parentNumber), 1);
        }if (arr.length === 0) target.set("blocked", false);this.raiseWindow();
      }, unblockUnblockedWindows: function unblockUnblockedWindows() {
        var blocks = this.get("blocks");var wndso = this.get("windows");for (var i in blocks) {
          var arr = blocks[i];if (!!!arr || !Array.isArray(arr) || arr.length === 0) {
            var wnd = wndso[i];if (!!wnd) wnd.set("blocked", false);
          }
        }
      }, messageBox: messageBox });
  }();var Host = WindowHost;var res = { Window: Window, WindowHost: Host };var index = res;exports["default"] = index;
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tablelistfull = __webpack_require__(48);

var _tablelistfull2 = _interopRequireDefault(_tablelistfull);

var _create = __webpack_require__(49);

var _create2 = _interopRequireDefault(_create);

var _tabletab = __webpack_require__(50);

var _tabletab2 = _interopRequireDefault(_tabletab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	//isolated: true,
	components: {
		tablelistfull: _tablelistfull2.default,
		tablecreate: _create2.default,
		tabletab: _tabletab2.default
	},
	template: '\n\t\t<tabhead>\n\t\t\t<tab class=\'{{#if active_id === "tables" }}active{{/if}}\' on-click=\'@this.fire("activetab", "tables")\'>\n\t\t\t\t<icon-database style="width: 15px;height: 15px;" />\n\t\t\t</tab>\n\t\t{{#tabs}}\n\t\t\t{{#if .closed !== true}}\n\t\t\t<tab class=\'{{#if .id === active_id }}active{{/if}}\' on-click=\'@this.fire("activetab",.id)\'>\n\t\t\t\t{{.name}}\n\t\t\t\t<i class=\'\' on-click=\'closetab\'><icon-x style="width: 8px;height: 8px;line-height: 15px;" /></i>\n\t\t\t</tab>\n\t\t\t{{/if}}\n\t\t{{/tabs}}\n\t\t</tabhead>\n\t\t<tabcontent>\n\t\t\t{{#if active_id === "tables" }}\n\t\t\t\t<tablelistfull />\n\t\t\t{{else}}\n\t\t\t\t{{#tabs}}\n\t\t\t\t\t{{#if .closed === true}}\n\t\t\t\t\t\t<div class=\'closedtab\'></div>\n\t\t\t\t\t{{else}}\n\t\t\t\t\t\t{{#if .type === \'tablecreate\' }}\n\t\t\t\t\t\t\t<tablecreate active={{ .id === active_id  }} />\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t{{#if .type === \'tabletab\' }}\n\t\t\t\t\t\t\t<tabletab table={{.}} active={{ .id === active_id  }} />\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{/if}}\n\t\t\t\t{{/tabs}}\n\t\t\t{{/if}}\n\t\t</tabcontent>\n\t\t',
	data: function data() {
		return {};
	},
	active_cache: [],
	activetabcontent: function activetabcontent() {
		var ractive = this;
		ractive.active_cache.push(ractive.get('active_id'));
		ractive.findAllComponents('tabletab').map(function (tableview_c) {
			tableview_c.set('active', tableview_c.get('table.id') === ractive.get('active_id'));
		});
	},
	newtab: function newtab(component_name, param1) {
		var id = Math.random();
		this.set('active_id', id);
		this.push('tabs', {
			id: id,

			name: param1,
			type: component_name,

			sql: "\nSCAN * FROM `" + param1 + "` LIMIT 100\n"
		});
		this.activetabcontent();
	},
	oninit: function oninit() {
		var ractive = this;

		this.observe('active_id', function (newvalue, oldvalue, keypath) {
			ractive.activetabcontent();
		});

		this.on('closetab', function (e) {

			console.log("close", e.resolve());
			var id = this.get(e.resolve() + '.id');

			this.set(e.resolve() + '.closed', true);

			this.active_cache = this.active_cache.filter(function (tid) {
				return tid !== id;
			});
			//this.set('tabs', this.get('tabs').filter(function(t) { return t.id !== id }) )

			if (this.get('active_id') === id) {
				// the current tab was closed
				this.set('active_id', this.active_cache.pop());
			}
			ractive.activetabcontent();
			return false;
		});
		this.on('activetab', function (e, id) {
			this.set('active_id', id);
			return false;
		});
	}
});

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tabledata = __webpack_require__(10);

var _tabledata2 = _interopRequireDefault(_tabledata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	//isolated: true,
	components: {
		tabledata: _tabledata2.default
	},
	template: '\n\t\t\t<div class=\'pull-right\' style=\'padding: 7px;\'>\n\t\t\t\t<a class=\'btn btn-xs btn-primary \' on-click=\'create\'> CREATE TABLE <i class=\'zmdi\'></i></a>\n\t\t\t\t<a class=\'btn btn-xs btn-default {{#if selection_length > 0}}{{else}}disabled{{/if}}\' on-click=\'delete\'> <icon-trash /> </a>\n\t\t\t\t<a class=\'btn btn-xs btn-default {{#if refresh_tables }}disabled{{/if}}\' on-click=\'@this.refresh_tables()\'> <icon-refresh /> </a>\n\t\t\t</div>\n\n\t\t<tabledata columns=\'{{columns}}\' rows=\'{{rows}}\' style=\'top: 38px;\' />\n\t\t',
	data: function data() {
		return {
			selection_length: 0,
			refresh_tables: false
		};
	},
	refresh_tables: function refresh_tables() {
		var ractive = this;
		ractive.set('refresh_tables', true);
		ractive.set('tables');

		DynamoDB.query('SHOW TABLES', function (err, data) {

			ractive.set('refresh_tables', false);

			if (err) return ractive.set('err', err);

			ractive.set('err');

			ractive.set('columns', [null, 'Name', 'Status', 'Partition', 'Sort', 'Indexes', 'Read Capacity', 'Write Capacity']);
			ractive.set('rows', data.map(function (t) {
				return [{ KEY: true }, { S: t }, {}, {}, {}, {}, {}, {}];
			}));
			var waterfallz = data.map(function (t) {

				var f = function f(cb) {
					//console.log(t)
					DynamoDB.client.describeTable({ TableName: t }, function (err, data) {
						if (err) return cb();

						ractive.set('rows', ractive.get('rows').map(function (row) {
							if (row[1].S === t) {

								row[2].S = data.Table.TableStatus;
								row[3].S = ((data.Table.KeySchema || []).filter(function (ks) {
									return ks.KeyType === 'HASH';
								})[0] || {}).AttributeName || '-';
								row[4].S = ((data.Table.KeySchema || []).filter(function (ks) {
									return ks.KeyType === 'RANGE';
								})[0] || {}).AttributeName || '-';
								row[5].S = (data.Table.GlobalSecondaryIndexes || []).length.toString();
								row[6].S = [data.Table.ProvisionedThroughput.ReadCapacityUnits].concat((data.Table.GlobalSecondaryIndexes || []).map(function (tr) {
									return tr.ProvisionedThroughput.ReadCapacityUnits;
								})).reduce(function (a, b) {
									return a + b;
								}, 0);
								row[7].S = [data.Table.ProvisionedThroughput.WriteCapacityUnits].concat((data.Table.GlobalSecondaryIndexes || []).map(function (tr) {
									return tr.ProvisionedThroughput.WriteCapacityUnits;
								})).reduce(function (a, b) {
									return a + b;
								}, 0);

								if ((data.Table.BillingModeSummary || {}).BillingMode === 'PAY_PER_REQUEST') {
									row[6].S = 'On-Demand';
									row[7].S = 'On-Demand';
								}
							}
							return row;
						}));
						cb();
					});
				};
				return f;
			});

			async.parallel(waterfallz, function (err) {});
		});
		//ddb.listTables({}, function(err, data) {
		//})
	},
	oninit: function oninit() {
		this.refresh_tables();
		var ractive = this;
		//ractive.on('open-table', function(e, table ) {
		//	ractive.root.fire('open-table', table )
		//})
		ractive.on('tabledata.selectrow', function (context) {
			var keypath = context.resolve();
			ractive.set(keypath + '.0.selected', !ractive.get(keypath + '.0.selected'));

			ractive.set('selection_length', ractive.get('rows').filter(function (r) {
				return r[0].selected === true;
			}).length);
		});
		ractive.on('delete', function () {
			var selected = ractive.get('rows').filter(function (r) {
				return r[0].selected === true;
			});

			if (selected.length === 0) return alert('Please select a table to delete');

			if (selected.length > 1) return alert('Please select one table at a time');

			var tablename = selected[0][1].S;

			if (confirm('Are you sure you want to delete table ' + tablename)) {

				DynamoDB.client.deleteTable({ TableName: tablename }, function (err, data) {
					if (err) return alert(err.message);

					ractive.refresh_tables();

					// refresh leftside as well
					ractive.root.findComponent('minitablelist').refresh_tables();
				});
			}
		});
		ractive.on('create', function () {
			ractive.root.findComponent('tabs').newtab('tablecreate', 'Create Table');
		});
	}
});

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	//isolated: true,
	template: '\n\t\t<div class=\'tableview {{#if active}}active{{/if}}\'>\n\t\t<div style=\'position: absolute;top: 0px;left: 0px;bottom: 0px;right: 0px;overflow-x: auto;\'>\n\t\t\t<div style=\'padding: 30px\'>\n\t\t\t\t<h3>Create DynamoDB table</h3>\n\t\t\t\t<br>\n\t\t\t\t<div style=\'color:red\'>{{ err }}</div>\n\t\t\t\t<hr>\n\t\t\t\tDynamoDB is a schema-less database that only requires a table name and primary key. The table\'s primary key is made up of one or two attributes that uniquely identify items, partition the data, and sort data within each partition.\n\n\t\t\t\t<br><br>\n\t\t\t\t<table style=\'border-collapse: separate;border-spacing: 10px;\'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Table name</td>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{newtable.TableName}}\' on-focus=\'focus\'></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Partition key</td>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{ newtable.AttributeDefinitions.0.AttributeName }}\'></td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select class="input-select" value=\'{{ newtable.AttributeDefinitions.0.AttributeType }}\' on-focus=\'focus\'>\n\t\t\t\t\t\t\t\t<option value=\'S\'>String</option>\n\t\t\t\t\t\t\t\t<option value=\'N\'>Number</option>\n\t\t\t\t\t\t\t\t<option value=\'B\'>Binary</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t<td><input class="input-checkbox" type=\'checkbox\' checked=\'{{newtable.sort_enabled}}\' />Add sort key</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t{{#if newtable.sort_enabled}}\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Sort key</td>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{newtable.sort_key_name}}\' on-focus=\'focus\'></td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select class="input-select" class="input-select" value=\'{{ newtable.sort_key_type}}\' on-focus=\'focus\'>\n\t\t\t\t\t\t\t\t<option value=\'S\'>String</option>\n\t\t\t\t\t\t\t\t<option value=\'N\'>Number</option>\n\t\t\t\t\t\t\t\t<option value=\'B\'>Binary</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t{{/if}}\n\t\t\t\t</table>\n\t\t\t\t<br><br>\n\t\t\t\t<h4>Secondary indexes</h4>\n\t\t\t\t<table style=\'border-collapse: separate;border-spacing: 10px;\'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Name</td>\n\t\t\t\t\t\t<td>Type</td>\n\t\t\t\t\t\t<td>Partition key</td>\n\t\t\t\t\t\t<td>Sort key</td>\n\t\t\t\t\t\t<td>Projection type</td>\n\t\t\t\t\t\t<td>Projected attributes</td>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t{{#newtable.LocalSecondaryIndexes:i}}\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{.IndexName}}\' on-focus=\'focus\' /></td>\n\t\t\t\t\t\t<td>LSI</td>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{ newtable.AttributeDefinitions.0.AttributeName }}\' disabled> (\n\t\t\t\t\t\t\t{{#if newtable.AttributeDefinitions.0.AttributeType === \'S\' }}String{{/if}}\n\t\t\t\t\t\t\t{{#if newtable.AttributeDefinitions.0.AttributeType === \'N\' }}Number{{/if}}\n\t\t\t\t\t\t\t{{#if newtable.AttributeDefinitions.0.AttributeType === \'B\' }}Binary{{/if}}\n\t\t\t\t\t\t)</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t{{#.KeySchema }}\n\t\t\t\t\t\t\t\t{{#if .KeyType === \'RANGE\'}}\n\t\t\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ .AttributeName }}\' />\n\t\t\t\t\t\t\t\t\t<select class="input-select" value=\'{{ .AttributeType }}\'>\n\t\t\t\t\t\t\t\t\t\t<option value=\'S\'>String</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\'N\'>Number</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\'B\'>Binary</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t{{/.KeySchema }}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select class="input-select" value=\'{{.Projection.ProjectionType}}\'>\n\t\t\t\t\t\t\t\t<option value=\'ALL\'>ALL</option>\n\t\t\t\t\t\t\t\t<option value=\'KEYS_ONLY\'>KEYS_ONLY</option>\n\t\t\t\t\t\t\t\t<option value=\'INCLUDE\'>INCLUDE</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t{{#if .Projection.ProjectionType === \'INCLUDE\'}}\n\n\t\t\t\t\t\t\t{{#.Projection.NonKeyAttributes}}\n\t\t\t\t\t\t\t\t<span class=\'badge badge-info\'>{{.}}</span><br>\n\t\t\t\t\t\t\t{{/.Projection.NonKeyAttributes}}\n\n\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ ~/nonkeyattribute }}\' /><a class=\'btn btn-xs btn-primary\' on-click=\'add-nonkey-attribute\'> <icon-plus /> </a>\n\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\'btn btn-xs btn-danger\' on-click=\'lsi-delete\'> <icon-trash /> </a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t{{/newtable.LocalSecondaryIndexes}}\n\n\n\t\t\t\t\t{{#newtable.GlobalSecondaryIndexes:i}}\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{.IndexName}}\' on-focus=\'focus\' /></td>\n\t\t\t\t\t\t<td>GSI</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t{{#.KeySchema }}\n\t\t\t\t\t\t\t\t{{#if .KeyType === \'HASH\'}}\n\t\t\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ .AttributeName }}\' />\n\t\t\t\t\t\t\t\t\t<select class="input-select" value=\'{{ .AttributeType }}\'>\n\t\t\t\t\t\t\t\t\t\t<option value=\'S\'>String</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\'N\'>Number</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\'B\'>Binary</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t{{/.KeySchema }}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t{{#.KeySchema }}\n\t\t\t\t\t\t\t\t{{#if .KeyType === \'RANGE\'}}\n\t\t\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ .AttributeName }}\' />\n\t\t\t\t\t\t\t\t\t<select class="input-select" value=\'{{ .AttributeType }}\'>\n\t\t\t\t\t\t\t\t\t\t<option value=\'S\'>String</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\'N\'>Number</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\'B\'>Binary</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t{{/.KeySchema }}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select class="input-select" value=\'{{.Projection.ProjectionType}}\'>\n\t\t\t\t\t\t\t\t<option value=\'ALL\'>ALL</option>\n\t\t\t\t\t\t\t\t<option value=\'KEYS_ONLY\'>KEYS_ONLY</option>\n\t\t\t\t\t\t\t\t<option value=\'INCLUDE\'>INCLUDE</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t{{#if .Projection.ProjectionType === \'INCLUDE\'}}\n\n\t\t\t\t\t\t\t{{#.Projection.NonKeyAttributes}}\n\t\t\t\t\t\t\t\t<span class=\'badge badge-info\'>{{.}}</span><br>\n\t\t\t\t\t\t\t{{/.Projection.NonKeyAttributes}}\n\n\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ ~/nonkeyattribute }}\' /><a class=\'btn btn-xs btn-primary\' on-click=\'add-nonkey-attribute\'> <icon-plus /> </a>\n\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\'btn btn-xs btn-danger\' on-click=\'gsi-delete\'> <icon-trash /> </a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t{{/newtable.GlobalSecondaryIndexes}}\n\n\t\t\t\t</table>\n\t\t\t\t<a class=\'btn btn-md btn-default\' on-click=\'lsi-add\'>Add LSI</a>\n\t\t\t\t<a class=\'btn btn-md btn-default\' on-click=\'gsi-add\'>Add GSI</a>\n\n\n\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<h4>Read/write capacity mode</h4>\n\t\t\t\t<div>\n\t\t\t\t\tSelect on-demand if you want to pay only for the read and writes you perform, with no capacity planning required. Select provisioned to save on throughput costs if you can reliably estimate your application\'s throughput requirements.\n\t\t\t\t\tSee the <a target=\'_blank\' href=\'http://aws.amazon.com/dynamodb/pricing\'>DynamoDB pricing page</a> and <a target=\'_blank\' href=\'http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ProvisionedThroughput.html\'>DynamoDB Developer Guide</a> to learn more.\n\t\t\t\t\t<br><br>Read/write capacity mode can be changed later.\n\t\t\t\t</div>\n\t\t\t\t<table style=\'border-collapse: separate;border-spacing: 10px;\'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t<td><input class="input-radio" type=\'radio\' name=\'{{newtable.BillingMode}}\' value=\'PROVISIONED\'> Provisioned</td>\n\t\t\t\t\t\t<td><input class="input-radio" type=\'radio\' name=\'{{newtable.BillingMode}}\' value=\'PAY_PER_REQUEST\'> On-demand</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<h4>Provisioned capacity</h4>\n\n\n\t\t\t\t{{#if newtable.BillingMode === \'PROVISIONED\'}}\n\t\t\t\t<table cellpadding=\'10\'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t<td>Read capacity</td>\n\t\t\t\t\t\t<td>Write capacity</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Table</td>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{newtable.ProvisionedThroughput.ReadCapacityUnits}}\'  size=\'4\' on-focus=\'focus\' /></td>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{newtable.ProvisionedThroughput.WriteCapacityUnits}}\' size=\'4\' on-focus=\'focus\' /></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t{{#newtable.GlobalSecondaryIndexes:i}}\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>{{.IndexName}} ( GSI )</td>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{.ProvisionedThroughput.ReadCapacityUnits}}\'  size=\'4\' on-focus=\'focus\' /></td>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{.ProvisionedThroughput.WriteCapacityUnits}}\' size=\'4\' on-focus=\'focus\' /></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t{{/newtable.GlobalSecondaryIndexes}}\n\t\t\t\t</table>\n\t\t\t\t{{/if}}\n\n\n\t\t\t\t{{#if newtable.BillingMode === \'PAY_PER_REQUEST\'}}\n\t\t\t\t\tNot applicable because read/write capacity mode is on-demand.\n\t\t\t\t{{/if}}\n\n\t\t\t\t<br>\n\t\t\t\t<hr>\n\t\t\t\t<div style=\'color:red\'>{{ errorMessage }}&nbsp;</div>\n\t\t\t\t<br>\n\t\t\t\t<a class=\'btn btn-md btn-primary\' on-click=\'create\'>Create</a>\n\t\t\t\t<br>\n\t\t\t</div>\n\t\t</div>\n\t\t</div>\n\t',
	data: function data() {
		return {
			newtable: {
				BillingMode: 'PROVISIONED',
				ProvisionedThroughput: {
					ReadCapacityUnits: 1,
					WriteCapacityUnits: 1
				},

				AttributeDefinitions: [{
					AttributeName: '',
					AttributeType: 'S'
				}],
				LocalSecondaryIndexes: [],
				GlobalSecondaryIndexes: []
			}
		};
	},

	oninit: function oninit() {
		var ractive = this;
		ractive.on('lsi-add', function () {
			ractive.push('newtable.LocalSecondaryIndexes', {
				IndexName: '',
				KeySchema: [{
					AttributeName: ractive.get('newtable.AttributeDefinitions.0.AttributeName'),
					KeyType: 'HASH'
				}, {
					AttributeName: '',
					KeyType: 'RANGE'
				}],
				Projection: {
					ProjectionType: 'ALL',
					NonKeyAttributes: []
				}
			});
		});
		ractive.on('gsi-add', function () {
			ractive.push('newtable.GlobalSecondaryIndexes', {
				IndexName: '',
				KeySchema: [{
					AttributeName: '',
					KeyType: 'HASH'
				}, {
					AttributeName: '',
					KeyType: 'RANGE'
				}],
				Projection: {
					ProjectionType: 'ALL',
					NonKeyAttributes: []
				},
				ProvisionedThroughput: {
					ReadCapacityUnits: 1,
					WriteCapacityUnits: 1
				}
			});
		});
		ractive.on('add-nonkey-attribute', function (e) {
			var keypath = e.resolve() + '.Projection.NonKeyAttributes';
			ractive.push(keypath, ractive.get('nonkeyattribute'));
			ractive.set(keypath, ractive.get(keypath).filter(function (value, index, self) {
				return self.indexOf(value) === index;
			}));
			ractive.set('nonkeyattribute');
		});
		ractive.on('lsi-delete', function (e) {
			ractive.set('newtable.LocalSecondaryIndexes', ractive.get('newtable.LocalSecondaryIndexes').filter(function (val, key) {
				return e.resolve() !== 'newtable.LocalSecondaryIndexes.' + key;
			}));
		});
		ractive.on('gsi-delete', function (e) {
			ractive.set('newtable.GlobalSecondaryIndexes', ractive.get('newtable.GlobalSecondaryIndexes').filter(function (val, key) {
				return e.resolve() !== 'newtable.GlobalSecondaryIndexes.' + key;
			}));
		});

		ractive.observe('newtable.AttributeDefinitions.0.AttributeName', function () {
			ractive.set('newtable.LocalSecondaryIndexes', ractive.get('newtable.LocalSecondaryIndexes').map(function (lsi) {
				lsi.KeySchema[0].AttributeName = ractive.get('newtable.AttributeDefinitions.0.AttributeName');
				return lsi;
			}));
		});

		ractive.on('focus', function () {
			ractive.set('errorMessage');
		});
		ractive.on('create', function () {
			ractive.set('errorMessage');

			var newtable = JSON.parse(JSON.stringify(ractive.get('newtable')));
			console.log('newtable', newtable);

			var payload = {
				TableName: newtable.TableName,
				BillingMode: newtable.BillingMode,
				AttributeDefinitions: newtable.AttributeDefinitions,
				KeySchema: [{
					AttributeName: newtable.AttributeDefinitions[0].AttributeName,
					KeyType: "HASH"
				}],
				ProvisionedThroughput: {
					ReadCapacityUnits: newtable.ProvisionedThroughput.ReadCapacityUnits,
					WriteCapacityUnits: newtable.ProvisionedThroughput.WriteCapacityUnits
				},
				GlobalSecondaryIndexes: newtable.GlobalSecondaryIndexes,
				LocalSecondaryIndexes: newtable.LocalSecondaryIndexes
			};

			if (ractive.get('newtable.sort_enabled')) {
				payload.KeySchema.push({
					AttributeName: newtable.sort_key_name,
					KeyType: "RANGE"
				});
				payload.AttributeDefinitions.push({
					AttributeName: newtable.sort_key_name,
					AttributeType: newtable.sort_key_type
				});
			}

			payload.LocalSecondaryIndexes = payload.LocalSecondaryIndexes.map(function (lsi) {
				if (lsi.Projection.ProjectionType !== 'INCLUDE') delete lsi.Projection.NonKeyAttributes;

				if (payload.AttributeDefinitions.map(function (atd) {
					return atd.AttributeName + '.' + atd.AttributeType;
				}).indexOf(lsi.KeySchema[1].AttributeName + '.' + lsi.KeySchema[1].AttributeType) === -1) payload.AttributeDefinitions.push({
					AttributeName: lsi.KeySchema[1].AttributeName,
					AttributeType: lsi.KeySchema[1].AttributeType
				});
				delete lsi.KeySchema[1].AttributeType;

				return lsi;
			});

			payload.GlobalSecondaryIndexes = payload.GlobalSecondaryIndexes.map(function (gsi) {
				if (gsi.Projection.ProjectionType !== 'INCLUDE') delete gsi.Projection.NonKeyAttributes;

				// add attribute, if not exists
				if (payload.AttributeDefinitions.map(function (atd) {
					return atd.AttributeName + '.' + atd.AttributeType;
				}).indexOf(gsi.KeySchema[0].AttributeName + '.' + gsi.KeySchema[0].AttributeType) === -1) payload.AttributeDefinitions.push({
					AttributeName: gsi.KeySchema[0].AttributeName,
					AttributeType: gsi.KeySchema[0].AttributeType
				});
				delete gsi.KeySchema[0].AttributeType;

				if (gsi.KeySchema[1].AttributeName.trim().length) {
					if (payload.AttributeDefinitions.map(function (atd) {
						return atd.AttributeName + '.' + atd.AttributeType;
					}).indexOf(gsi.KeySchema[1].AttributeName + '.' + gsi.KeySchema[1].AttributeType) === -1) payload.AttributeDefinitions.push({
						AttributeName: gsi.KeySchema[1].AttributeName,
						AttributeType: gsi.KeySchema[1].AttributeType
					});
					delete gsi.KeySchema[1].AttributeType;
				} else {
					gsi.KeySchema = [gsi.KeySchema[0]];
				}

				return gsi;
			});

			if (!payload.LocalSecondaryIndexes.length) delete payload.LocalSecondaryIndexes;

			if (!payload.GlobalSecondaryIndexes.length) delete payload.GlobalSecondaryIndexes;

			DynamoDB.client.createTable(payload, function (err, data) {
				if (err) {
					ractive.set('errorMessage', err.message);
					return;
				}
				ractive.root.findComponent('minitablelist').refresh_tables();

				// fulltablelist does not exist
				//ractive.root.findComponent('tablelist').refresh_tables()
			});
		});
	}
});

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _info = __webpack_require__(51);

var _info2 = _interopRequireDefault(_info);

var _alarms = __webpack_require__(52);

var _alarms2 = _interopRequireDefault(_alarms);

var _capacity = __webpack_require__(53);

var _capacity2 = _interopRequireDefault(_capacity);

var _indexes = __webpack_require__(54);

var _indexes2 = _interopRequireDefault(_indexes);

var _tableglobal = __webpack_require__(55);

var _tableglobal2 = _interopRequireDefault(_tableglobal);

var _backup = __webpack_require__(56);

var _backup2 = _interopRequireDefault(_backup);

var _tabletriggers = __webpack_require__(57);

var _tabletriggers2 = _interopRequireDefault(_tabletriggers);

var _metrics = __webpack_require__(58);

var _metrics2 = _interopRequireDefault(_metrics);

var _items = __webpack_require__(59);

var _items2 = _interopRequireDefault(_items);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	isolated: true,
	components: {
		tableinfo: _info2.default,
		tablealarms: _alarms2.default,
		tablecapacity: _capacity2.default,
		tableindexes: _indexes2.default,
		tableglobal: _tableglobal2.default,
		tablebackup: _backup2.default,
		tabletriggers: _tabletriggers2.default,
		tablemetrics: _metrics2.default,
		tableitems: _items2.default
	},
	template: '\n\t\t<div class=\'tableview {{#if active}}active{{/if}}\'>\n\t\t\t<div class=\'tableview-table-tabs noselect\'>\n\t\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'info\'}}active{{/if}}\'         on-click=\'@this.set(\'tab\',\'info\')\'><!-- <i class=\'zmdi zmdi-info\'></i>--> Overview </a>\n\t\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'data\'}}active{{/if}}\'         on-click=\'@this.set(\'tab\',\'data\')\'><!--<i class=\'zmdi zmdi-format-list-bulleted\'></i>--> Items</a>\n\t\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'metrics\'}}active{{/if}}\'      on-click=\'@this.set(\'tab\',\'metrics\')\'><!--<i class=\'zmdi zmdi-chart\'></i>--> Metrics</a>\n\t\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'alarms\'}}active{{/if}}\'       on-click=\'@this.set(\'tab\',\'alarms\')\'><!--<i class=\'zmdi zmdi-notifications\'></i>--> Alarms</a>\n\t\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'capacity\'}}active{{/if}}\'     on-click=\'@this.set(\'tab\',\'capacity\')\'><!--<i class=\'zmdi zmdi-memory\'></i>--> Capacity</a>\n\t\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'indexes\'}}active{{/if}}\'      on-click=\'@this.set(\'tab\',\'indexes\')\'><!--<i class=\'zmdi zmdi-format-line-spacing\'></i>--> Indexes</a>\n\t\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'globaltables\'}}active{{/if}}\' on-click=\'@this.set(\'tab\',\'globaltables\')\'><!--<i class=\'zmdi zmdi-globe\'></i>--> Global Tables</a>\n\t\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'backups\'}}active{{/if}}\'      on-click=\'@this.set(\'tab\',\'backups\')\'><!--<i class=\'zmdi zmdi-card-sd\'></i>--> Backups</a>\n\t\t\t\t<a class=\'btn-tableview-tab {{#if tab === \'triggers\'}}active{{/if}}\'     on-click=\'@this.set(\'tab\',\'triggers\')\'><!--<i class=\'zmdi zmdi-portable-wifi\'></i>--> Triggers</a>\n\t\t\t</div>\n\t\t\t<div style=\'position: absolute;top: 42px;left: 30px;right: 30px;bottom: 0px;\'>\n\t\t\t\t{{#if err}}\n\t\t\t\t\t<br> {{ err.errorMessage || err.message }}\n\t\t\t\t{{else}}\n\t\t\t\t\t{{#if describeTable === null }}\n\t\t\t\t\t\t<br>Loading...\n\t\t\t\t\t{{else}}\n\n\t\t\t\t\t\t{{#if tab === \'info\'}}\n\t\t\t\t\t\t\t<tableinfo table=\'{{.table}}\' describeTable=\'{{describeTable}}\' />\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if tab === \'data\'}}\n\t\t\t\t\t\t\t<tableitems table=\'{{.table}}\' describeTable=\'{{describeTable}}\' type=\'{{.type}}\' scan=\'{{.scan}}\' query=\'{{.query}}\' sql=\'{{.sql}}\' />\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if tab === \'metrics\'}}\n\t\t\t\t\t\t\t<tablemetrics table=\'{{.table}}\' describeTable=\'{{describeTable}}\' />\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if tab === \'alarms\'}}\n\t\t\t\t\t\t\t<tablealarms table=\'{{.table}}\' describeTable=\'{{describeTable}}\' />\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if tab === \'capacity\'}}\n\t\t\t\t\t\t\t<tablecapacity table=\'{{.table}}\' describeTable=\'{{describeTable}}\' />\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if tab === \'indexes\'}}\n\t\t\t\t\t\t\t<tableindexes table=\'{{.table}}\' describeTable=\'{{describeTable}}\' />\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if tab === \'globaltables\'}}\n\t\t\t\t\t\t\t<tableglobal table=\'{{.table}}\' describeTable=\'{{describeTable}}\' />\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if tab === \'backups\'}}\n\t\t\t\t\t\t\t<tablebackup table=\'{{.table}}\' describeTable=\'{{describeTable}}\' />\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if tab === \'triggers\'}}\n\t\t\t\t\t\t\t<tabletriggers table=\'{{.table}}\' describeTable=\'{{describeTable}}\' />\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t{{/if}}\n\t\t\t\t{{/if}}\n\n\t\t\t</div>\n\t\t</div>\n\t',
	data: function data() {
		return {
			tab: 'info',
			describeTable: null
		};
	},

	describe_table: function describe_table(cb) {
		var ractive = this;
		DynamoDB.client.describeTable({ TableName: ractive.get('table.name') }, function (err, data) {
			if (err) return ractive.set('err', err);

			ractive.set('err');
			ractive.set('describeTable', data.Table);
			if (typeof cb === "function") cb();
		});
	},

	oninit: function oninit() {

		var ractive = this;
		//ractive.observe('tab', function( tab ) {
		//})
		ractive.describe_table();
	}
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	template: '\n\t\t<div class=\'tableinfo\' style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;overflow: auto;font-size: 14px;">\n\t\t\t\t<div style=\'padding: 30px\'>\n\t\t\t\t\t<h3>\n\t\t\t\t\t\tStream details\n\t\t\t\t\t</h3>\n\t\t\t\t\t<hr>\n\n\t\t\t\t\t{{#if StreamEditing}}\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td align=\'right\' width=\'350\'><b>View type</b></td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<input class="input-radio" type=\'radio\' name=\'{{NewStreamViewType}}\' value=\'KEYS_ONLY\'>\tKeys only - only the key attributes of the modified item<br>\n\t\t\t\t\t\t\t\t\t<input class="input-radio" type=\'radio\' name=\'{{NewStreamViewType}}\' value=\'NEW_IMAGE\'>\tNew image - the entire item, as it appears after it was modified<br>\n\t\t\t\t\t\t\t\t\t<input class="input-radio" type=\'radio\' name=\'{{NewStreamViewType}}\' value=\'OLD_IMAGE\'>\tOld image - the entire item, as it appeared before it was modified<br>\n\t\t\t\t\t\t\t\t\t<input class="input-radio" type=\'radio\' name=\'{{NewStreamViewType}}\' value=\'NEW_AND_OLD_IMAGES\'> New and old images - both the new and the old images of the item<br>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td align=\'right\' width=\'350\'></td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<a class=\'btn btn-sm btn-primary\' on-click=\'update-stream\'>Enable</a>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t{{else}}\n\t\t\t\t\t\t<table style=\'border-collapse: separate;border-spacing: 10px;\'>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td align=\'right\' width=\'350\'><b>Stream enabled</b></td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{{#if !selfDescribeTable.StreamSpecification}}\n\t\t\t\t\t\t\t\t\t\tno\n\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t{{#if selfDescribeTable.StreamSpecification.StreamEnabled === true }}\n\t\t\t\t\t\t\t\t\t\tyes\n\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\tno\n\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td align=\'right\' width=\'350\'><b>View type\t</b></td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{{#if !selfDescribeTable.StreamSpecification}}\n\t\t\t\t\t\t\t\t\t\t-\n\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t{{selfDescribeTable.StreamSpecification.StreamViewType}}\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td align=\'right\' width=\'350\'><b>Latest stream ARN</b></td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{{#if !selfDescribeTable.LatestStreamArn}}\n\t\t\t\t\t\t\t\t\t\t-\n\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t{{selfDescribeTable.LatestStreamArn}}\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td align=\'right\' width=\'350\'>\n\t\t\t\t\t\t\t\t\t{{#if selfDescribeTable.StreamSpecification.StreamEnabled === true}}\n\t\t\t\t\t\t\t\t\t\t<a class=\'btn btn-xs btn-default\' on-click=\'disable-stream\'>Disable Stream</a>\n\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t<a class=\'btn btn-xs btn-default\' on-click=\'manage-stream\'>Manage Stream</a>\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t{{/if}}\n\n\n\t\t\t\t\t<h3>\n\t\t\t\t\t\tTable details\n\t\t\t\t\t\t<a class=\'btn btn-sm btn-default pull-right\' on-click=\'refresh-table\'><icon-refresh /></a>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<div style=\'color:red\'>{{ err }}</div>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<table style=\'border-collapse: separate;border-spacing: 10px;\'>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\' width=\'350\'><b>Table ID</b></td>\n\t\t\t\t\t\t\t<td> {{ selfDescribeTable.TableId }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\' width=\'350\'><b>Table name</b></td>\n\t\t\t\t\t\t\t<td> {{ selfDescribeTable.TableName }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Primary partition key</b></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t{{#selfDescribeTable.KeySchema:i}}\n\t\t\t\t\t\t\t\t\t{{#if .KeyType === \'HASH\'}}\n\t\t\t\t\t\t\t\t\t\t{{.AttributeName}}\n\t\t\t\t\t\t\t\t\t\t{{# ~/selfDescribeTable.AttributeDefinitions }}\n\t\t\t\t\t\t\t\t\t\t\t{{#if .AttributeName === ~/.selfDescribeTable.KeySchema[i].AttributeName }}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if .AttributeType === \'S\'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t( String )\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if .AttributeType === \'N\'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t( Number )\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if .AttributeType === \'B\'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t( Binary )\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t{{/}}\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{/selfDescribeTable.KeySchema}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Primary sort key</b></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t{{#selfDescribeTable.KeySchema:i}}\n\t\t\t\t\t\t\t\t\t{{#if .KeyType === \'RANGE\'}}\n\t\t\t\t\t\t\t\t\t\t{{.AttributeName}}\n\t\t\t\t\t\t\t\t\t\t{{# ~/selfDescribeTable.AttributeDefinitions }}\n\t\t\t\t\t\t\t\t\t\t\t{{#if .AttributeName === ~/.selfDescribeTable.KeySchema[i].AttributeName }}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if .AttributeType === \'S\'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t( String )\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if .AttributeType === \'N\'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t( Number )\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if .AttributeType === \'B\'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t( Binary )\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t{{/}}\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{/selfDescribeTable.KeySchema}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Point-in-time recovery</b></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Encryption</b></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Time to live attribute</b></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t{{#if TimeToLiveDescription}}\n\t\t\t\t\t\t\t\t\t{{#if TimeToLiveDescriptionEditing}}\n\t\t\t\t\t\t\t\t\t\tTTL attribute <input class="input-text" type=\'text\' value=\'{{TimeToLiveDescriptionNewField}}\'> <a class=\'btn btn-xs btn-primary\' on-click=\'update-ttl\'>Save</a>\n\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t{{#if TimeToLiveDescriptionErr}}\n\t\t\t\t\t\t\t\t\t\t\tError {{TimeToLiveDescriptionErr.errorMessage}}\n\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t\t{{#if TimeToLiveDescription.TimeToLiveStatus === \'ENABLED\'}}\n\t\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{TimeToLiveDescription.TimeToLiveStatus}}\n\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t\t\t{{TimeToLiveDescription.AttributeName}}\n\n\t\t\t\t\t\t\t\t\t\t\t{{#if TimeToLiveDescription.TimeToLiveStatus === \'DISABLED\'}}\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\'javascript:void(0)\' on-click=\'manage-ttl\' >Manage TTL</a>\n\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t\t\t{{#if TimeToLiveDescription.TimeToLiveStatus === \'ENABLED\'}}\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\'javascript:void(0)\' on-click=\'disable-ttl\' >Disable TTL</a>\n\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\tLoading...\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Table status</b></td>\n\t\t\t\t\t\t\t<td>{{selfDescribeTable.TableStatus}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Creation date</b></td>\n\t\t\t\t\t\t\t<td>{{selfDescribeTable.CreationDateTime}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Read/write capacity mode</b></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t{{#if selfDescribeTable.BillingModeSummary.BillingMode === \'PROVISIONED\'}}Provisioned{{/if}}\n\t\t\t\t\t\t\t\t{{#if selfDescribeTable.BillingModeSummary.BillingMode === \'PAY_PER_REQUEST\'}}On-Demand{{/if}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Provisioned read capacity units</b></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t{{#if selfDescribeTable.BillingModeSummary.BillingMode === \'PROVISIONED\'}}\n\t\t\t\t\t\t\t\t\t{{selfDescribeTable.ProvisionedThroughput.ReadCapacityUnits}}\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{#if selfDescribeTable.BillingModeSummary.BillingMode === \'PAY_PER_REQUEST\'}}-{{/if}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Provisioned write capacity units</b></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t{{#if selfDescribeTable.BillingModeSummary.BillingMode === \'PROVISIONED\'}}\n\t\t\t\t\t\t\t\t\t{{selfDescribeTable.ProvisionedThroughput.WriteCapacityUnits}}\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{#if selfDescribeTable.BillingModeSummary.BillingMode === \'PAY_PER_REQUEST\'}}-{{/if}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Last decrease time</b></td>\n\t\t\t\t\t\t\t<td>{{selfDescribeTable.ProvisionedThroughput.LastDecreaseDateTime || \'-\' }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Last increase time</b></td>\n\t\t\t\t\t\t\t<td>{{selfDescribeTable.ProvisionedThroughput.LastIncreaseDateTime || \'-\'}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Storage size (in bytes)</b></td>\n\t\t\t\t\t\t\t<td>{{selfDescribeTable.TableSizeBytes }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Item count</b></td>\n\t\t\t\t\t\t\t<td>{{ selfDescribeTable.ItemCount }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Region</b></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\'right\'><b>Amazon Resource Name (ARN)</b></td>\n\t\t\t\t\t\t\t<td> {{selfDescribeTable.TableArn}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<small>Storage size and item count are not updated in real-time. They are updated periodically, roughly every six hours.</small>\n\t\t\t\t</div>\n\t\t</div>\n\t',

	refresh_table: function refresh_table() {
		var ractive = this;

		ractive.set('selfDescribeTable');
		ractive.set('TimeToLiveDescriptionEditing');
		ractive.set('TimeToLiveDescription');
		ractive.set('TimeToLiveDescriptionErr');
		ractive.set('TimeToLiveDescriptionNewField', '');
		ractive.set('StreamEditing');

		async.waterfall([function (cb) {

			DynamoDB.client.describeTable({ TableName: ractive.get('table.name') }, function (err, data) {
				if (err) return cb(err);

				ractive.set('selfDescribeTable', data.Table);
				cb();
			});
		}, function (cb) {
			DynamoDB.client.describeTimeToLive({ TableName: ractive.get('table.name') }, function (err, data) {
				if (err) return ractive.set('TimeToLiveDescriptionErr', err);

				ractive.set('TimeToLiveDescription', data.TimeToLiveDescription);
				cb();
			});
		}], function (err) {
			if (err) ractive.set('err', err.errorMessage);
		});
	},
	data: function data() {
		return {
			selfDescribeTable: null
		};
	},
	oninit: function oninit() {
		var ractive = this;

		ractive.set('selfDescribeTable', ractive.get('describeTable'));

		ractive.on('manage-ttl', function () {
			ractive.set('TimeToLiveDescriptionEditing', true);
			return false;
		});

		ractive.on('update-ttl', function () {
			var newfield = ractive.get('TimeToLiveDescriptionNewField').trim();
			if (!newfield) return alert('invalid field name');

			var params = {
				TableName: ractive.get('table.name'),
				TimeToLiveSpecification: {
					AttributeName: newfield,
					Enabled: true
				}
			};
			DynamoDB.client.updateTimeToLive(params, function (err, data) {
				if (err) return alert('failed ' + err.errorMessage);

				ractive.refresh_table();
			});
		});
		ractive.on('disable-ttl', function () {
			if (confirm('Are you sure you want to disable TTL ?')) {
				var params = {
					TableName: ractive.get('table.name'),
					TimeToLiveSpecification: {
						AttributeName: ractive.get('TimeToLiveDescription.AttributeName'),
						Enabled: false
					}
				};
				DynamoDB.client.updateTimeToLive(params, function (err, data) {
					if (err) return alert('failed ' + err.errorMessage);

					ractive.refresh_table();
				});
			}
		});

		ractive.on('manage-stream', function () {
			ractive.set('StreamEditing', true);
		});
		ractive.on('update-stream', function () {
			var type = ractive.get('NewStreamViewType');
			DynamoDB.client.updateTable({
				TableName: ractive.get('table.name'),
				StreamSpecification: {
					StreamEnabled: true,
					StreamViewType: type
				}
			}, function (err, data) {
				if (err) return alert('Failed ' + err.errorMessage);

				ractive.refresh_table();
				cb();
			});
		});
		ractive.on('disable-stream', function () {
			if (confirm('Disable stream ?')) {
				DynamoDB.client.updateTable({
					TableName: ractive.get('table.name'),
					StreamSpecification: {
						StreamEnabled: false
					}
				}, function (err, data) {
					if (err) return alert('Failed ' + err.errorMessage);

					ractive.refresh_table();
					cb();
				});
			}
		});

		ractive.on('refresh-table', function () {
			ractive.refresh_table();
		});
		ractive.refresh_table();
	}
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	template: "\n\t\t<div style='padding: 30px'>\n\t\t\t<h3>Alarms</h3>\n\t\t</div>\n\t"
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	template: '\n\n\t\t\t<div style=\'padding: 30px\'>\n\n\n\n\t\t\t\t<h3 style="font-size: 16px;">Read/write capacity mode</h3>\n\t\t\t\t<hr/>\n\t\t\t\t<p style="font-size: 13px;">\n\t\t\t\t\tSelect on-demand if you want to pay only for the read and writes you perform, with no capacity planning required. Select provisioned to save on throughput costs if you can reliably estimate your application\'s throughput requirements. See the\n\t\t\t\t\t\t<a href="http://aws.amazon.com/dynamodb/pricing">DynamoDB pricing page</a> and\n\t\t\t\t\t\t<a href="DynamoDB Developer Guide">DynamoDB Developer Guide</a> to learn more.\n\t\t\t\t</p>\n\t\t\t\tRead/write capacity mode can be changed later.<br>\n\t\t\t\t<input class="input-radio" type="radio" name={{localDescribeTable.BillingModeSummary.BillingMode}} value="PROVISIONED"> Provisioned (free-tier eligible)<br>\n\t\t\t\t<input class="input-radio" type="radio" name={{localDescribeTable.BillingModeSummary.BillingMode}} value="PAY_PER_REQUEST">On-demand<br>\n\n\t\t\t\t<h3>\n\t\t\t\t\tProvisioned capacity\n\t\t\t\t\t<a class=\'btn btn-sm btn-default pull-right\' on-click=\'refresh-table\'><icon-refresh /></a>\n\t\t\t\t</h3>\n\t\t\t\t<hr>\n\n\t\t\t\t\t{{#if localDescribeTable === false}}\n\t\t\t\t\t\tLoading...\n\t\t\t\t\t{{else}}\n\t\t\t\t\t\t{{#if localDescribeTable.BillingModeSummary.BillingMode === \'PAY_PER_REQUEST\'}}\n\t\t\t\t\t\t\tNot applicable because read/write capacity mode is on-demand.<br>\n\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width=\'160\' align=\'right\'></td>\n\t\t\t\t\t\t\t\t\t<td width=\'160\'>Read capacity units</td>\n\t\t\t\t\t\t\t\t\t<td width=\'160\'>Write capacity units</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>Table</td>\n\t\t\t\t\t\t\t\t\t<td><input class="input-text" type=\'text\' size=\'4\' value=\'{{localDescribeTable.ProvisionedThroughput.ReadCapacityUnits}}\' on-focus=\'focus\' /></td>\n\t\t\t\t\t\t\t\t\t<td><input class="input-text" type=\'text\' size=\'4\' value=\'{{localDescribeTable.ProvisionedThroughput.WriteCapacityUnits}}\' on-focus=\'focus\' /></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t{{#localDescribeTable.GlobalSecondaryIndexes}}\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>{{ .IndexName }}</td>\n\t\t\t\t\t\t\t\t\t<td><input class="input-text" type=\'text\' size=\'4\' value=\'{{.ProvisionedThroughput.ReadCapacityUnits}}\' on-focus=\'focus\' /></td>\n\t\t\t\t\t\t\t\t\t<td><input class="input-text" type=\'text\' size=\'4\' value=\'{{.ProvisionedThroughput.WriteCapacityUnits}}\' on-focus=\'focus\' /></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t{{/localDescribeTable.GlobalSecondaryIndexes}}\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{/if}}\n\t\t\t\t<h3>Auto Scaling</h3>\n\t\t\t\t<hr/>\n\t\t\t\t\t<small>Auto Scaling not supported by this UI</small>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div style=\'color:red\'>{{ err }}&nbsp;</div>\n\t\t\t\t\t<table>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td width=\'160\'>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<a class=\'btn btn-md btn-primary\' on-click=\'save\'>Save</a>\n\t\t\t\t\t\t\t\t<a class=\'btn btn-md btn-default\' on-click=\'cancel\'>Cancel</a>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t</div>\n\n\t',
	oninit: function oninit() {
		var ractive = this;
		var refresh_table = function refresh_table() {
			ractive.set('localDescribeTable', false);
			DynamoDB.client.describeTable({ TableName: ractive.get('table.name') }, function (err, data) {
				if (err) return ractive.set('err', err.message);

				console.log(data.Table);
				ractive.set('localDescribeTable', data.Table);
				ractive.set('originalDescribeTable', JSON.parse(JSON.stringify(data.Table))); // this wont change
			});
		};
		ractive.on('cancel', function () {
			refresh_table();
		});
		ractive.on('focus', function () {
			ractive.set('err');
		});

		ractive.on('save', function () {

			var payload = {
				TableName: ractive.get('describeTable.TableName')
			};

			// if main table provisioned troughput changed but BillingMode remain the same
			if ((ractive.get('localDescribeTable.ProvisionedThroughput.ReadCapacityUnits') !== ractive.get('originalDescribeTable.ProvisionedThroughput.ReadCapacityUnits') || ractive.get('localDescribeTable.ProvisionedThroughput.WriteCapacityUnits') !== ractive.get('originalDescribeTable.ProvisionedThroughput.WriteCapacityUnits')) && ractive.get('localDescribeTable.BillingModeSummary.BillingMode') === ractive.get('originalDescribeTable.BillingModeSummary.BillingMode')) {
				payload.ProvisionedThroughput = {
					ReadCapacityUnits: ractive.get('localDescribeTable.ProvisionedThroughput.ReadCapacityUnits'),
					WriteCapacityUnits: ractive.get('localDescribeTable.ProvisionedThroughput.WriteCapacityUnits')
				};
			} else {}
			// if no changes, do not add obj at all
			//payload.ProvisionedThroughput = { ... }


			// each index
			if ((ractive.get('localDescribeTable.GlobalSecondaryIndexes') || []).length) {
				payload.GlobalSecondaryIndexUpdates = [];
				ractive.get('localDescribeTable.GlobalSecondaryIndexes').map(function (gsi, i) {
					var original_gsi = ractive.get('originalDescribeTable.GlobalSecondaryIndexes.' + i);

					// if index provisioned troughput changed but BillingMode remain the same
					if ((gsi.ProvisionedThroughput.ReadCapacityUnits !== ractive.get('originalDescribeTable.GlobalSecondaryIndexes.' + i + '.ProvisionedThroughput.ReadCapacityUnits') || gsi.ProvisionedThroughput.WriteCapacityUnits !== ractive.get('originalDescribeTable.GlobalSecondaryIndexes.' + i + '.ProvisionedThroughput.WriteCapacityUnits')) && ractive.get('localDescribeTable.BillingModeSummary.BillingMode') === ractive.get('originalDescribeTable.BillingModeSummary.BillingMode')) {
						payload.GlobalSecondaryIndexUpdates.push({
							Update: {
								IndexName: gsi.IndexName,
								ProvisionedThroughput: {
									ReadCapacityUnits: gsi.ProvisionedThroughput.ReadCapacityUnits,
									WriteCapacityUnits: gsi.ProvisionedThroughput.WriteCapacityUnits
								}
							}
						});
					}
				});
			}

			if ((payload.GlobalSecondaryIndexUpdates || []).length === 0) delete payload.GlobalSecondaryIndexUpdates;

			// if BillingMode has changed
			if (ractive.get('localDescribeTable.BillingModeSummary.BillingMode') !== ractive.get('originalDescribeTable.BillingModeSummary.BillingMode')) {
				if (ractive.get('localDescribeTable.BillingModeSummary.BillingMode') === 'PAY_PER_REQUEST') {
					payload.BillingMode = 'PAY_PER_REQUEST';
				}

				if (ractive.get('localDescribeTable.BillingModeSummary.BillingMode') === 'PROVISIONED') {
					payload.BillingMode = 'PROVISIONED';
					payload.ProvisionedThroughput = {
						ReadCapacityUnits: ractive.get('localDescribeTable.ProvisionedThroughput.ReadCapacityUnits') || 1,
						WriteCapacityUnits: ractive.get('localDescribeTable.ProvisionedThroughput.WriteCapacityUnits') || 1
						// each index
					};if ((ractive.get('localDescribeTable.GlobalSecondaryIndexes') || []).length) {
						payload.GlobalSecondaryIndexUpdates = [];
						ractive.get('localDescribeTable.GlobalSecondaryIndexes').map(function (gsi, i) {

							payload.GlobalSecondaryIndexUpdates.push({
								Update: {
									IndexName: gsi.IndexName,
									ProvisionedThroughput: {
										ReadCapacityUnits: gsi.ProvisionedThroughput.ReadCapacityUnits || 1,
										WriteCapacityUnits: gsi.ProvisionedThroughput.WriteCapacityUnits || 1
									}
								}
							});
						});
					}
				}
			}

			//console.log('payload', payload )

			DynamoDB.client.updateTable(payload, function (err, data) {
				if (err) return ractive.set('err', err.message);

				setTimeout(refresh_table, 1000);
				//console.log( err, data )
			});
		});
		ractive.on('refresh-table', function () {
			refresh_table();
		});
		refresh_table();
	}
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tabledata = __webpack_require__(10);

var _tabledata2 = _interopRequireDefault(_tabledata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	components: {
		tabledata: _tabledata2.default
	},
	template: '\n\t\t<div style=\'padding: 30px\'>\n\t\t\t{{#if tab === \'create\'}}\n\t\t\t\t<h3>Create Global Secondary Index</h3>\n\t\t\t\t<table cellpadding=\'10\' border=\'0\'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Name</td>\n\t\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{newindex.IndexName}}\' on-focus=\'focus\' /></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Type</td>\n\t\t\t\t\t\t<td>GSI</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Partition key</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ newindex.KeySchema.0.AttributeName }}\' on-focus=\'focus\' />\n\t\t\t\t\t\t\t<select class="input-select" value=\'{{ newindex.KeySchema.0.AttributeType }}\'>\n\t\t\t\t\t\t\t\t<option value=\'S\'>String</option>\n\t\t\t\t\t\t\t\t<option value=\'N\'>Number</option>\n\t\t\t\t\t\t\t\t<option value=\'B\'>Binary</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Sort key</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ newindex.KeySchema.1.AttributeName }}\' on-focus=\'focus\' />\n\t\t\t\t\t\t\t<select class="input-select" value=\'{{ newindex.KeySchema.1.AttributeType }}\'>\n\t\t\t\t\t\t\t\t<option value=\'S\'>String</option>\n\t\t\t\t\t\t\t\t<option value=\'N\'>Number</option>\n\t\t\t\t\t\t\t\t<option value=\'B\'>Binary</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Projection type</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select class="input-select" value=\'{{ newindex.Projection.ProjectionType}}\'>\n\t\t\t\t\t\t\t\t<option value=\'ALL\'>ALL</option>\n\t\t\t\t\t\t\t\t<option value=\'KEYS_ONLY\'>KEYS_ONLY</option>\n\t\t\t\t\t\t\t\t<option value=\'INCLUDE\'>INCLUDE</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t{{#if newindex.Projection.ProjectionType === \'INCLUDE\' }}\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Projected attributes</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t{{#if newindex.Projection.ProjectionType === \'INCLUDE\'}}\n\n\t\t\t\t\t\t\t{{#newindex.Projection.NonKeyAttributes}}\n\t\t\t\t\t\t\t\t<span class=\'badge badge-info\'>{{.}}</span><br>\n\t\t\t\t\t\t\t{{/newindex.Projection.NonKeyAttributes}}\n\n\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ ~/nonkeyattribute }}\' on-focus=\'focus\' /><a class=\'btn btn-xs btn-primary\' on-click=\'add-nonkey-attribute\'> <icon-plus /></a>\n\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t{{/if}}\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Read capacity</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ newindex.ProvisionedThroughput.ReadCapacityUnits }}\'  size=\'4\' on-focus=\'focus\' />\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Write capacity</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ newindex.ProvisionedThroughput.WriteCapacityUnits}}\' size=\'4\' on-focus=\'focus\' />\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t</table>\n\t\t\t\t<br>\n\t\t\t\t<div style=\'color:red\'>{{ err }}&nbsp;</div>\n\t\t\t\t<br>\n\t\t\t\t<a class=\'btn btn-md btn-primary\' on-click=\'create-gsi\'>Create</a>\n\t\t\t\t<a class=\'btn btn-md btn-default\' on-click=\'cancel-gsi\'>Cancel</a>\n\t\t\t\t<br>\n\t\t\t{{else}}\n\t\t\t\t<h3>Indexes</h3>\n\t\t\t\t<div>\n\t\t\t\t\t<a class=\'btn btn-sm btn-primary\' on-click=\'create\'>Create index</a>\n\t\t\t\t\t<a class=\'btn btn-sm btn-default\' on-click=\'delete\'>Delete index</a>\n\n\t\t\t\t\t<a class=\'btn btn-sm btn-default pull-right\' on-click=\'refresh-table\'> <icon-refresh /> </a>\n\t\t\t\t</div>\n\t\t\t\t<tabledata columns=\'{{columns}}\' rows=\'{{rows}}\' style=\'top: 128px\'/>\n\t\t\t{{/if}}\n\t\t</div>\n\t',

	refresh_table_indexes: function refresh_table_indexes() {
		var ractive = this;

		ractive.set('rows', (ractive.get('describeTable').LocalSecondaryIndexes || []).map(function (index) {
			var partition_key_name = ((index.KeySchema || []).filter(function (ks) {
				return ks.KeyType === 'HASH';
			})[0] || {}).AttributeName;
			var partition_key_type = { S: 'String', N: 'Number', B: 'Binary' }[ractive.get('describeTable').AttributeDefinitions.filter(function (at) {
				return at.AttributeName === ((index.KeySchema || []).filter(function (ks) {
					return ks.KeyType === 'HASH';
				})[0] || {}).AttributeName;
			})[0].AttributeType];
			var sort_key_name = ((index.KeySchema || []).filter(function (ks) {
				return ks.KeyType === 'RANGE';
			})[0] || {}).AttributeName || '';
			var sort_key_type = { S: 'String', N: 'Number', B: 'Binary' }[(ractive.get('describeTable').AttributeDefinitions.filter(function (at) {
				return at.AttributeName === ((index.KeySchema || []).filter(function (ks) {
					return ks.KeyType === 'RANGE';
				})[0] || {}).AttributeName;
			})[0] || {}).AttributeType] || '';

			return [{ KEY: true }, { S: index.IndexName }, { S: 'N/A' }, { S: 'LSI' }, { S: partition_key_name + ' (' + partition_key_type + ' )' }, { S: sort_key_name + (sort_key_type ? ' ( ' + sort_key_type + ' )' : '') }, { S: index.Projection.ProjectionType + ' ' + (index.Projection.ProjectionType === 'INCLUDE' ? index.Projection.NonKeyAttributes.join(', ') : '') }, { N: index.IndexSizeBytes.toString() }, { N: index.ItemCount.toString() }];
		}).concat((ractive.get('describeTable').GlobalSecondaryIndexes || []).map(function (index) {
			var partition_key_name;
			var partition_key_type;
			var sort_key_name;
			var sort_key_type;
			var projection = '';
			try {
				partition_key_name = ((index.KeySchema || []).filter(function (ks) {
					return ks.KeyType === 'HASH';
				})[0] || {}).AttributeName;
				partition_key_type = { S: 'String', N: 'Number', B: 'Binary' }[ractive.get('describeTable').AttributeDefinitions.filter(function (at) {
					return at.AttributeName === ((index.KeySchema || []).filter(function (ks) {
						return ks.KeyType === 'HASH';
					})[0] || {}).AttributeName;
				})[0].AttributeType];
				sort_key_name = ((index.KeySchema || []).filter(function (ks) {
					return ks.KeyType === 'RANGE';
				})[0] || {}).AttributeName || '';
				sort_key_type = { S: 'String', N: 'Number', B: 'Binary' }[(ractive.get('describeTable').AttributeDefinitions.filter(function (at) {
					return at.AttributeName === ((index.KeySchema || []).filter(function (ks) {
						return ks.KeyType === 'RANGE';
					})[0] || {}).AttributeName;
				})[0] || {}).AttributeType] || '';
				projection = index.Projection.ProjectionType + ' ' + (index.Projection.ProjectionType === 'INCLUDE' ? index.Projection.NonKeyAttributes.join(', ') : '');
			} catch (e) {}

			return [{ KEY: true }, { S: index.IndexName }, { S: index.IndexStatus }, { S: 'GSI' }, { S: partition_key_name + ' (' + partition_key_type + ' )' }, { S: sort_key_name + (sort_key_type ? ' ( ' + sort_key_type + ' )' : '') }, { S: projection }, { N: index.hasOwnProperty('IndexSizeBytes') ? index.IndexSizeBytes.toString() : 0 }, { N: index.hasOwnProperty('ItemCount') ? index.ItemCount.toString() : 0 }];
		})));
	},

	oninit: function oninit() {
		var ractive = this;
		ractive.on('tabledata.selectrow', function (context) {
			var keypath = context.resolve();
			ractive.set(keypath + '.0.selected', !ractive.get(keypath + '.0.selected'));
		});
		ractive.on('focus', function () {
			ractive.set('err');
		});
		ractive.on('create', function () {
			ractive.set('tab', 'create');
			ractive.set('newindex', {
				IndexName: '',
				KeySchema: [{
					AttributeName: '',
					AttributeType: 'S',
					KeyType: 'HASH'
				}, {
					AttributeName: '',
					AttributeType: 'S',
					KeyType: 'RANGE'
				}],
				Projection: {
					ProjectionType: 'ALL',
					NonKeyAttributes: []
				},
				ProvisionedThroughput: {
					ReadCapacityUnits: 1,
					WriteCapacityUnits: 1
				}
			});
		});
		ractive.on('cancel-gsi', function () {
			ractive.set('tab');
			ractive.set('newindex');
		});

		ractive.on('add-nonkey-attribute', function (e) {
			var keypath = 'newindex.Projection.NonKeyAttributes';
			ractive.push(keypath, ractive.get('nonkeyattribute'));
			ractive.set(keypath, ractive.get(keypath).filter(function (value, index, self) {
				return self.indexOf(value) === index;
			}));
			ractive.set('nonkeyattribute');
		});
		ractive.on('create-gsi', function () {
			var newindex = JSON.parse(JSON.stringify(ractive.get('newindex')));
			var AttributeDefinitions = [];

			newindex.KeySchema.map(function (ks) {
				if (ks.KeyType === 'HASH') {
					AttributeDefinitions.push({
						AttributeName: ks.AttributeName,
						AttributeType: ks.AttributeType
					});
					delete ks.AttributeType;
				}
				if (ks.KeyType === 'RANGE') {
					if (ks.AttributeName.trim() === '') {
						newindex.KeySchema = [newindex.KeySchema[0]];
					} else {
						AttributeDefinitions.push({
							AttributeName: ks.AttributeName,
							AttributeType: ks.AttributeType
						});
						delete ks.AttributeType;
					}
				}
			});
			if (newindex.Projection.ProjectionType !== 'INCLUDE') delete newindex.Projection.NonKeyAttributes;

			var payload = {
				TableName: ractive.get('describeTable.TableName'),
				AttributeDefinitions: AttributeDefinitions,
				GlobalSecondaryIndexUpdates: []
			};

			payload.GlobalSecondaryIndexUpdates.push({
				Create: newindex
			});

			DynamoDB.client.updateTable(payload, function (err, data) {

				if (err) return ractive.set('err', err.message || err.errorMessage);

				ractive.set('tab');
				ractive.set('newindex');

				ractive.set('rows', null);
				setTimeout(function () {
					ractive.parent.describe_table(function () {
						ractive.refresh_table_indexes();
					});
				}, 500);
			});
		});

		ractive.on('delete', function () {
			var selected = ractive.get('rows').filter(function (r) {
				return r[0].selected === true;
			});

			if (selected.length === 0) return alert('Please select an index to delete');

			if (selected.length > 1) return alert('Please select one index at a time');

			var tablename = ractive.get('describeTable.TableName');
			var indexname = selected[0][1].S;

			if (confirm('Are you sure you want to delete index ' + indexname + ' from table ' + tablename)) {

				var payload = {
					TableName: ractive.get('describeTable.TableName'),
					GlobalSecondaryIndexUpdates: []
				};

				payload.GlobalSecondaryIndexUpdates.push({
					Delete: {
						IndexName: indexname
					}
				});

				DynamoDB.client.updateTable(payload, function (err, data) {

					if (err) return alert(err.message);

					ractive.set('rows', null);
					setTimeout(function () {
						ractive.parent.describe_table(function () {
							ractive.refresh_table_indexes();
						});
					}, 500);
				});
			}
		});

		ractive.on('refresh-table', function () {
			ractive.set('rows', null);
			ractive.parent.describe_table(function () {
				ractive.refresh_table_indexes();
			});
		});

		ractive.refresh_table_indexes();
	},
	data: function data() {
		return {
			columns: [null, 'Name', 'Status', 'Type', 'Partition key', 'Sort key', 'Attributes', 'Size', 'Item count'],
			rows: null
			//newindex:
		};
	}
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	template: "\
		<div style='padding: 30px'>\
			<h3>Global Tables</h3>\
		</div>\
	"
});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	template: '\n\t\t\t<div>\n\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<h4>On-Demand Backup and Restore</h4>\n\t\t\t\t<hr />\n\t\t\t\t<div>You can create and restore a complete backup of your DynamoDB table data and its settings at any time.\n\t\t\t\t<a target=\'_blank\' href=\'http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/BackupRestore.html\'>Learn more</a>\n\t\t\t\t</div>\n\n\t\t\t\t<br>\n\t\t\t\t<div>\n\t\t\t\t\t<a class=\'btn btn-sm btn-primary disabled\' on-click=\'create\'>Create backup</a>\n\t\t\t\t\t<a class=\'btn btn-sm btn-default disabled\' on-click=\'restore\'>Restore backup</a>\n\t\t\t\t\t<a class=\'btn btn-sm btn-default disabled\' on-click=\'delete\'>Delete backup</a>\n\n\t\t\t\t\t<a class=\'btn btn-sm btn-default pull-right\' on-click=\'refresh\'><icon-refresh /></a>\n\t\t\t\t</div>\n\n\t\t\t\t<tabledata columns=\'{{columns}}\' rows=\'{{rows}}\' style=\'top: 180px\'/>\n\n\n\n\t\t\t</div>\n\n\t',
	list_backups: function list_backups() {
		var ractive = this;
		ractive.set('rows', null);

		DynamoDB.client.listBackups({ TableName: 'created_by_cloudformation' }, function (err, data) {
			if (err) return alert('failed getting backup list');

			ractive.set('rows', data.BackupSummaries.map(function (b) {
				return {};
			}));
		});
	},
	oninit: function oninit() {
		var ractive = this;

		this.on('refresh', function () {
			ractive.list_backups();
		});

		ractive.list_backups();
	},
	data: function data() {
		return {
			columns: [null, 'Backup name', 'Status', 'Creation time', 'Size', 'Backup type', 'Expiration date', 'Backup ARN'],
			rows: null
			//newindex:
		};
	}
});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ractive.extend({
	template: "\
		<div style='padding: 30px'>\
			<h3>Triggers</h3>\
		</div>\
	"
});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

;

var DynamoMetrics = Ractive.extend({
	template: "<chart style='width: 100%;height: 216px;' series='{{metrics.table.read.series}}' debug='{{debug}}' />",
	load_graph_data: function load_graph_data() {
		var ractive = this;

		var period = 60;
		var interval = ractive.get('interval');
		switch (interval) {
			case '1':
				period = 60; // 60 per minute
				break;
			case '3':
				period = 300; // 20 per minute, 60 per total
				break;
			case '6':
				period = 300; // should be at 5 min ?
				break;
			case '12':
				period = 60 * 60; // one per minute, 12 per total
				break;
			case '24':
				period = 60 * 60; // one per minute, 24 per total
				break;
			case '72':
				period = 60 * 60; //
				break;
			case '168':
				period = 60 * 60; // shoul be daily
				break;
			case '336':
				period = 60 * 60; // should be daily
				break;
		}

		cloudwatch.getMetricStatistics({
			StartTime: new Date(new Date().getTime() - 1000 * 60 * 60 * interval),
			EndTime: new Date(),
			Namespace: 'AWS/DynamoDB',
			MetricName: ractive.get('metric'),
			Period: period,
			Statistics: ['Sum'],
			Dimensions: [{
				Name: 'TableName',
				Value: ractive.get('table')
			}]
		}, function (err, data) {
			if (err) return ractive.set('disabled', 'Failed');

			var series = [{ data: data.Datapoints.map(function (dp) {
					return ['', dp.Sum];
				}) }];
			ractive.set('metrics.table.read.series', series);
			console.log('series', series);
			console.log('series', ractive.get('series'));

			ractive.set('disabled');
		});
	},
	oninit: function oninit() {
		var ractive = this;

		ractive.load_graph_data();

		ractive.observe('interval', function () {
			ractive.load_graph_data();
		});
	},
	data: function data() {

		return {
			debug: true,
			metrics: {
				table: {
					read: {
						series: [{
							//name
							data: []
						}]
					}
				}
			}
		};
	}
});

exports.default = Ractive.extend({
	components: {
		DynamoMetrics: DynamoMetrics
	},
	template: '\n\t\t<div style=\'padding: 30px\'>\n\t\t\t<h3>\n\t\t\t\tMetrics\n\n\t\t\t\t<div style=\'float:right\'>\n\t\t\t\t\t<select class="input-select" value=\'{{interval}}\'>\n\t\t\t\t\t\t<option value=\'1\'>Last hour</option>\n\t\t\t\t\t\t<option value=\'3\'>Last 3 hours</option>\n\t\t\t\t\t\t<option value=\'6\'>Last 6 hours</option>\n\t\t\t\t\t\t<option value=\'12\'>Last 12 hours</option>\n\t\t\t\t\t\t<option value=\'24\'>Last 24 hours</option>\n\n\t\t\t\t\t\t<option value=\'72\'>Last 3 days</option>\n\t\t\t\t\t\t<option value=\'168\'>Last 1 week</option>\n\t\t\t\t\t\t<option value=\'336\'>Last 2 weeks</option>\n\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t</h3>\n\t\t\t<hr>\n\n\t\t\t<h4>Capacity: table</h4>\n\t\t\t<hr>\n\n\t\t\t<div style=\'float: left;width: 30%;min-width: 300px;max-width: 380px;margin-right: 20px;\'>\n\t\t\t\t<div><b>Read capacity</b> Units/Minute</div>\n\t\t\t\t<DynamoMetrics table=\'{{ describeTable.TableName }}\' disabled=\'Loading...\' metric=\'ConsumedReadCapacityUnits\' interval=\'{{interval}}\' period=\'{{period}}\' color=\'#f7a35c\' namespace=\'AWS/DynamoDB\' />\n\t\t\t</div>\n\n\t\t\t<div style=\'float: left;width: 30%;min-width: 300px;max-width: 380px;margin-right: 20px;\'>\n\t\t\t\t<div><b>Throttled read requests</b> Count</div>\n\t\t\t\t<chart style=\'width: 100%;height: 216px;\' disabled=\'Not Tracked\' />\n\t\t\t</div>\n\n\t\t\t<div style=\'float: left;width: 30%;min-width: 300px;max-width: 380px;margin-right: 20px;\'>\n\t\t\t\t<div><b>Throttled read events</b> Count</div>\n\t\t\t\t<chart style=\'width: 100%;height: 216px;\' disabled=\'Not Tracked\' />\n\t\t\t</div>\n\n\t\t\t<div style=\'clear:both;padding: 20px;\'></div>\n\n\t\t\t<div style=\'float: left;width: 30%;min-width: 300px;max-width: 380px;margin-right: 20px;\'>\n\t\t\t\t<div><b>Write capacity</b> Units/Second</div>\n\t\t\t\t<DynamoMetrics table=\'{{ describeTable.TableName }}\' disabled=\'Loading...\' metric=\'ConsumedWriteCapacityUnits\' interval=\'{{interval}}\' period=\'{{period}}\' color=\'#f7a35c\' namespace=\'AWS/DynamoDB\' />\n\t\t\t</div>\n\n\t\t\t<div style=\'float: left;width: 30%;min-width: 300px;max-width: 380px;margin-right: 20px;\'>\n\t\t\t\t<div><b>Throttled write requests</b> Count</div>\n\t\t\t\t<chart style=\'width: 100%;height: 216px;\' disabled=\'Not Tracked\' />\n\t\t\t</div>\n\n\t\t\t<div style=\'float: left;width: 30%;min-width: 300px;max-width: 380px;margin-right: 20px;\'>\n\t\t\t\t<div><b>Throttled write events</b> Count</div>\n\t\t\t\t<chart style=\'width: 100%;height: 216px;\' disabled=\'Not Tracked\' />\n\t\t\t</div>\n\n\t\t</div>\n\t',
	oninit: function oninit() {
		var ractive = this;
		console.log('init metrics with', ractive.get());
	},
	data: function data() {
		return {
			interval: 1
		};
	}

});

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _tabledata = __webpack_require__(10);

var _tabledata2 = _interopRequireDefault(_tabledata);

var _edit = __webpack_require__(60);

var _edit2 = _interopRequireDefault(_edit);

var _add = __webpack_require__(132);

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	components: {
		tabledata: _tabledata2.default
	},
	isolated: true,
	template: '\n\t<div class=\'tablebrowse\'>\n\t\t{{#if !describeTable }}\n\t\t\t<br>reading table schema...\n\t\t{{else}}\n\t\t<div class=\'tablequery\'>\n\t\t\t<table width=\'100%\' style=\'border-collapse: separate;border-spacing: 5px;\'>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<select class="input-select" value=\'{{ .type }}\'>\n\t\t\t\t\t\t\t<option value=\'scan\'>SCAN</option>\n\t\t\t\t\t\t\t<option value=\'query\'>QUERY</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td colspan=\'4\'>\n\t\t\t\t\t\t{{#if .type === \'scan\' }}\n\t\t\t\t\t\t<select class="input-select" value=\'{{ .scan.table }}\'>\n\t\t\t\t\t\t\t<option value=\'\'>\n\t\t\t\t\t\t\t\t[ Table ] {{ describeTable.TableName }}: {{ @this._hash_key_name() }} ( {{ @this._hash_key_type_name() }} )\n\t\t\t\t\t\t\t\t{{#if describeTable.KeySchema.length === 2}}\n\t\t\t\t\t\t\t\t\t, {{ @this._range_key_name() }} ( {{ @this._range_key_type_name() }} )\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</option>\n\n\t\t\t\t\t\t\t{{#describeTable.LocalSecondaryIndexes:j}}\n\t\t\t\t\t\t\t<option value=\'lsi:{{ .IndexName }}\'>\n\t\t\t\t\t\t\t\t[ LSI ] {{ .IndexName }}: {{ @this._lsi_hash_key_name( .IndexName ) }} ( {{ @this._lsi_hash_key_type_name( .IndexName ) }} )\n\t\t\t\t\t\t\t\t{{#if .KeySchema.length === 2}}\n\t\t\t\t\t\t\t\t\t, {{ @this._lsi_range_key_name( .IndexName ) }} (  {{ @this._lsi_range_key_type_name( .IndexName ) }} )\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t{{/describeTable.LocalSecondaryIndexes}}\n\n\t\t\t\t\t\t\t{{#describeTable.GlobalSecondaryIndexes:j}}\n\t\t\t\t\t\t\t<option value=\'gsi:{{ .IndexName }}\'>\n\t\t\t\t\t\t\t\t[ GSI ] {{ .IndexName }}: {{ @this._gsi_hash_key_name( .IndexName ) }} ( {{ @this._gsi_hash_key_type_name( .IndexName ) }} )\n\t\t\t\t\t\t\t\t{{#if .KeySchema.length === 2}}\n\t\t\t\t\t\t\t\t\t, {{ @this._gsi_range_key_name( .IndexName ) }} (  {{ @this._gsi_range_key_type_name( .IndexName ) }} )\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t{{/describeTable.GlobalSecondaryIndexes}}\n\t\t\t\t\t\t</select>\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if .type === \'query\' }}\n\t\t\t\t\t\t<select class="input-select" value=\'{{ .query.table }}\'>\n\t\t\t\t\t\t\t<option value=\'\'>\n\t\t\t\t\t\t\t\t[ Table ] {{ describeTable.TableName }}: {{ @this._hash_key_name() }} ( {{ @this._hash_key_type_name() }} )\n\t\t\t\t\t\t\t\t{{#if describeTable.KeySchema.length === 2}}\n\t\t\t\t\t\t\t\t\t, {{ @this._range_key_name() }} ( {{ @this._range_key_type_name() }} )\n\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t</option>\n\n\t\t\t\t\t\t\t{{#describeTable.LocalSecondaryIndexes:j}}\n\t\t\t\t\t\t\t<option value=\'lsi:{{ .IndexName }}\'>\n\t\t\t\t\t\t\t\t[ LSI ] {{ .IndexName }}: {{ @this._lsi_hash_key_name( .IndexName ) }} ( {{ @this._lsi_hash_key_type_name( .IndexName ) }} )\n\t\t\t\t\t\t\t\t{{#if .KeySchema.length === 2}}\n\t\t\t\t\t\t\t\t\t, {{ @this._lsi_range_key_name( .IndexName ) }} (  {{ @this._lsi_range_key_type_name( .IndexName ) }} )\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t{{/describeTable.LocalSecondaryIndexes}}\n\n\t\t\t\t\t\t\t{{#describeTable.GlobalSecondaryIndexes:j}}\n\t\t\t\t\t\t\t<option value=\'gsi:{{ .IndexName }}\'>\n\t\t\t\t\t\t\t\t[ GSI ] {{ .IndexName }}: {{ @this._gsi_hash_key_name( .IndexName ) }} ( {{ @this._gsi_hash_key_type_name( .IndexName ) }} )\n\t\t\t\t\t\t\t\t{{#if .KeySchema.length === 2}}\n\t\t\t\t\t\t\t\t\t, {{ @this._gsi_range_key_name( .IndexName ) }} (  {{ @this._gsi_range_key_type_name( .IndexName ) }} )\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t{{/describeTable.GlobalSecondaryIndexes}}\n\t\t\t\t\t\t</select>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t{{#if .type === \'query\' }}\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Partition</td>\n\t\t\t\t\t{{#if .query.table === \'\'  }}\n\t\t\t\t\t\t<td>{{ _hash_key_name() }}</td>\n\t\t\t\t\t\t<td><select class="input-select"><option>{{ @this._hash_key_type_name() }}</option></select></td>\n\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{#describeTable.LocalSecondaryIndexes:j}}\n\t\t\t\t\t\t{{#if ~/.query.table === (\'lsi:\' +  .IndexName)  }}\n\t\t\t\t\t\t\t<td>{{ @this._lsi_hash_key_name( .IndexName ) }}</td>\n\t\t\t\t\t\t\t<td><select class="input-select"><option>{{ @this._lsi_hash_key_type_name( .IndexName ) }}</option></select></td>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{/describeTable.LocalSecondaryIndexes}}\n\t\t\t\t\t{{#describeTable.GlobalSecondaryIndexes:j}}\n\t\t\t\t\t\t{{#if ~/.query.table === (\'gsi:\' +  .IndexName)  }}\n\t\t\t\t\t\t\t<td>{{ @this._gsi_hash_key_name( .IndexName ) }}</td>\n\t\t\t\t\t\t\t<td><select class="input-select"><option>{{ @this._gsi_hash_key_type_name( .IndexName ) }}</option></select></td>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{/describeTable.GlobalSecondaryIndexes}}\n\t\t\t\t\t<td><select class="input-select"><option>=</option></select></td>\n\t\t\t\t\t<td><input class="input-text" type=\'text\' value=\'{{.query.partition.value}}\'></td>\n\t\t\t\t</tr>\n\t\t\t\t{{#if .query.table === \'\'  }}\n\t\t\t\t\t{{#if describeTable.KeySchema.length === 2}}\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Sort</td>\n\t\t\t\t\t\t<td>{{ @this._range_key_name() }}</td>\n\t\t\t\t\t\t<td><select class="input-select"><option>{{ @this._range_key_type_name( ) }}</option></select></td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select class="input-select" value=\'{{ ~/query.sort.op }}\'>\n\t\t\t\t\t\t\t\t<option value=\'eq\'>=</option>\n\t\t\t\t\t\t\t\t<option value=\'gt\'>&gt;</option>\n\t\t\t\t\t\t\t\t<option value=\'ge\'>&gt;=</option>\n\t\t\t\t\t\t\t\t<option value=\'lt\'>&lt;</option>\n\t\t\t\t\t\t\t\t<option value=\'le\'>&lt;=</option>\n\t\t\t\t\t\t\t\t<option value=\'between\'>between</option>\n\t\t\t\t\t\t\t\t{{#if _range_key_type()  === \'S\' }}\n\t\t\t\t\t\t\t\t\t<option value=\'begins_with\'>begins with</option>\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ ~/query.sort.value }}\'>\n\t\t\t\t\t\t\t{{#if ~/query.sort.op === \'between\' }}\n\t\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ ~/query.sort.value2 }}\'>\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t{{/if}}\n\t\t\t\t{{/if}}\n\t\t\t\t{{#describeTable.GlobalSecondaryIndexes:j}}\n\t\t\t\t\t{{#if ~/.query.table === (\'gsi:\' +  .IndexName)  }}\n\t\t\t\t\t\t{{#if .KeySchema.length === 2}}\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Sort</td>\n\t\t\t\t\t\t\t<td>{{ @this._gsi_range_key_name( .IndexName ) }}</td>\n\t\t\t\t\t\t\t<td><select class="input-select"><option>{{ @this._gsi_range_key_type_name( .IndexName ) }}</option></select></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<select class="input-select" value=\'{{ ~/query.sort.op }}\'>\n\t\t\t\t\t\t\t\t\t<option value=\'eq\'>=</option>\n\t\t\t\t\t\t\t\t\t<option value=\'gt\'>&gt;</option>\n\t\t\t\t\t\t\t\t\t<option value=\'ge\'>&gt;=</option>\n\t\t\t\t\t\t\t\t\t<option value=\'lt\'>&lt;</option>\n\t\t\t\t\t\t\t\t\t<option value=\'le\'>&lt;=</option>\n\t\t\t\t\t\t\t\t\t<option value=\'between\'>between</option>\n\t\t\t\t\t\t\t\t\t{{#if @this._gsi_range_key_type( .IndexName )  === \'S\' }}\n\t\t\t\t\t\t\t\t\t\t<option value=\'begins_with\'>begins with</option>\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ ~/query.sort.value }}\'>\n\t\t\t\t\t\t\t\t{{#if ~/query.sort.op === \'between\' }}\n\t\t\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ ~/query.sort.value2 }}\'>\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{/if}}\n\t\t\t\t{{/describeTable.GlobalSecondaryIndexes}}\n\t\t\t\t{{#describeTable.LocalSecondaryIndexes:j}}\n\t\t\t\t\t{{#if ~/.query.table === (\'lsi:\' +  .IndexName)  }}\n\t\t\t\t\t\t{{#if .KeySchema.length === 2}}\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Sort</td>\n\t\t\t\t\t\t\t<td>{{ @this._lsi_range_key_name( .IndexName ) }}</td>\n\t\t\t\t\t\t\t<td><select class="input-select"><option>{{ @this._lsi_range_key_type_name( .IndexName ) }}</option></select></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<select class="input-select" value=\'{{ ~/query.sort.op }}\'>\n\t\t\t\t\t\t\t\t\t<option value=\'eq\'>=</option>\n\t\t\t\t\t\t\t\t\t<option value=\'gt\'>&gt;</option>\n\t\t\t\t\t\t\t\t\t<option value=\'ge\'>&gt;=</option>\n\t\t\t\t\t\t\t\t\t<option value=\'lt\'>&lt;</option>\n\t\t\t\t\t\t\t\t\t<option value=\'le\'>&lt;=</option>\n\t\t\t\t\t\t\t\t\t<option value=\'between\'>between</option>\n\t\t\t\t\t\t\t\t\t{{#if @this._lsi_range_key_type( .IndexName )  === \'S\' }}\n\t\t\t\t\t\t\t\t\t\t<option value=\'begins_with\'>begins with</option>\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ ~/query.sort.value }}\'>\n\t\t\t\t\t\t\t\t{{#if ~/query.sort.op === \'between\' }}\n\t\t\t\t\t\t\t\t\t<input class="input-text" type=\'text\' value=\'{{ ~/query.sort.value2 }}\'>\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{/if}}\n\t\t\t\t{{/describeTable.LocalSecondaryIndexes}}\n\n\t\t\t\t{{/if}}\n\t\t\t</table>\n\n\t\t</div>\n\t\t<div class=\'tabledatacontrols\'>\n\t\t\t<div class=\'btn btn-xs btn-default {{#if oop_running}}disabled{{/if}}\' on-click=\'run-oop\' style=\'padding-right: 10px;\'> <icon-play /> RUN</div>\n\t\t\t<div class=\'btn btn-xs btn-default {{#if prev_running}}disabled{{/if}} {{#if start_reached }}disabled{{/if}}\' on-click=\'prev\'> <icon-prev /> </div>\n\t\t\t<div class=\'btn btn-xs btn-default {{#if next_running}}disabled{{/if}} {{#if end_reached   }}disabled{{/if}}\' on-click=\'next\'> <icon-next /> </div>\n\n\t\t\t<div class=\'pull-right\'>\n\t\t\t\t<a class=\'btn btn-xs btn-default\' on-click=\'refresh\'> <icon-refresh /> </a>\n\t\t\t\t<div class=\'btn-group\'>\n\t\t\t\t\t<button class=\'btn btn-default btn-xs\' type=\'button\'>\n\t\t\t\t\t\t<icon-filter />\n\t\t\t\t\t</button>\n\t\t\t\t\t<button type=\'button\' class=\'btn btn-xs btn-default dropdown-toggle dropdown-toggle-split\' on-click=\'@this.toggle("drowndownfilteropen")\'>\n\t\t\t\t\t\t<icon-caret-down />\n\t\t\t\t\t</button>\n\t\t\t\t\t<div class=\'dropdown-menu pull-right {{#if drowndownfilteropen}}show{{/if}}\' style=\'max-height: 250px;overflow-y: auto;\'>\n\t\t\t\t\t\t{{#display_columns}}\n\t\t\t\t\t\t\t<li><a> <input class="input-checkbox" type=checkbox checked=\'{{.show}}\' />  {{.name}}</a>\n\t\t\t\t\t\t{{/display_columns}}\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<a class=\'btn btn-xs btn-primary\' on-click=\'create-item-window\'  > Create Item </a>\n\t\t\t\t<a class=\'btn btn-xs btn-danger {{#if selection_length > 0}}{{else}}disabled{{/if}}\'  on-click=\'delete-selected\' > <icon-trash /> </a>\n\t\t\t</div>\n\t\t</div>\n\t\t<tabledata columns=\'{{columns}}\' rows=\'{{rows}}\' on-colclick=\'open-item\' style=\'top: 148px\'/>\n\t\t{{/if}}\n\t</div>\n\t\t',
	_hash_key_name: function _hash_key_name() {
		return (this.get('describeTable').KeySchema.filter(function (k) {
			return k.KeyType === 'HASH';
		})[0] || {}).AttributeName;
	},
	_hash_key_type: function _hash_key_type() {
		var ractive = this;

		var ret;
		this.get('describeTable.AttributeDefinitions').map(function (at) {
			if (at.AttributeName === ractive._hash_key_name()) ret = at.AttributeType;
		});
		return ret;
	},
	_hash_key_type_name: function _hash_key_type_name() {
		return { S: 'String', N: 'Number', 'B': 'Binary' }[this._hash_key_type()];
	},

	_range_key_name: function _range_key_name() {
		return (this.get('describeTable').KeySchema.filter(function (k) {
			return k.KeyType === 'RANGE';
		})[0] || {}).AttributeName;
	},
	_range_key_type: function _range_key_type() {
		var ractive = this;

		var ret;
		this.get('describeTable.AttributeDefinitions').map(function (at) {
			if (at.AttributeName === ractive._range_key_name()) ret = at.AttributeType;
		});
		return ret;
	},
	_range_key_type_name: function _range_key_type_name() {
		return { S: 'String', N: 'Number', 'B': 'Binary' }[this._range_key_type()];
	},

	_gsi_hash_key_name: function _gsi_hash_key_name(indexname) {

		var index = (this.get('describeTable.GlobalSecondaryIndexes') || []).filter(function (i) {
			return i.IndexName === indexname;
		})[0];
		if (!index) return;

		return (index.KeySchema.filter(function (k) {
			return k.KeyType === 'HASH';
		})[0] || {}).AttributeName;
	},
	_gsi_hash_key_type: function _gsi_hash_key_type(indexname) {
		var ractive = this;

		var ret;
		this.get('describeTable.AttributeDefinitions').map(function (at) {
			if (at.AttributeName === ractive._gsi_hash_key_name(indexname)) ret = at.AttributeType;
		});
		return ret;
	},
	_gsi_hash_key_type_name: function _gsi_hash_key_type_name(indexname) {
		return { S: 'String', N: 'Number', 'B': 'Binary' }[this._gsi_hash_key_type(indexname)];
	},

	_gsi_range_key_name: function _gsi_range_key_name(indexname) {

		var index = (this.get('describeTable.GlobalSecondaryIndexes') || []).filter(function (i) {
			return i.IndexName === indexname;
		})[0];
		if (!index) return;

		return (index.KeySchema.filter(function (k) {
			return k.KeyType === 'RANGE';
		})[0] || {}).AttributeName;
	},
	_gsi_range_key_type: function _gsi_range_key_type(indexname) {
		var ractive = this;

		var ret;
		this.get('describeTable.AttributeDefinitions').map(function (at) {
			if (at.AttributeName === ractive._gsi_range_key_name(indexname)) ret = at.AttributeType;
		});
		return ret;
	},
	_gsi_range_key_type_name: function _gsi_range_key_type_name(indexname) {
		return { S: 'String', N: 'Number', 'B': 'Binary' }[this._gsi_range_key_type(indexname)];
	},

	_lsi_hash_key_name: function _lsi_hash_key_name(indexname) {

		var index = (this.get('describeTable.LocalSecondaryIndexes') || []).filter(function (i) {
			return i.IndexName === indexname;
		})[0];
		if (!index) return;

		return (index.KeySchema.filter(function (k) {
			return k.KeyType === 'HASH';
		})[0] || {}).AttributeName;
	},
	_lsi_hash_key_type: function _lsi_hash_key_type(indexname) {
		var ractive = this;

		var ret;
		this.get('describeTable.AttributeDefinitions').map(function (at) {
			if (at.AttributeName === ractive._lsi_hash_key_name(indexname)) ret = at.AttributeType;
		});
		return ret;
	},
	_lsi_hash_key_type_name: function _lsi_hash_key_type_name(indexname) {
		return { S: 'String', N: 'Number', 'B': 'Binary' }[this._lsi_hash_key_type(indexname)];
	},

	_lsi_range_key_name: function _lsi_range_key_name(indexname) {

		var index = (this.get('describeTable.LocalSecondaryIndexes') || []).filter(function (i) {
			return i.IndexName === indexname;
		})[0];
		if (!index) return;

		return (index.KeySchema.filter(function (k) {
			return k.KeyType === 'RANGE';
		})[0] || {}).AttributeName;
	},
	_lsi_range_key_type: function _lsi_range_key_type(indexname) {
		var ractive = this;

		var ret;
		this.get('describeTable.AttributeDefinitions').map(function (at) {
			if (at.AttributeName === ractive._lsi_range_key_name(indexname)) ret = at.AttributeType;
		});
		return ret;
	},
	_lsi_range_key_type_name: function _lsi_range_key_type_name(indexname) {
		return { S: 'String', N: 'Number', 'B': 'Binary' }[this._lsi_range_key_type(indexname)];
	},

	display_data: function display_data() {
		var ractive = this;

		var dbrows_json = this.get('dbrows_json');
		var dbrows_raw = this.get('dbrows_raw');

		var columns = [null];
		var rows = [];
		var display_columns = {};
		this.get('display_columns').map(function (dc) {
			if (dc.show) columns.push(dc.name);
		});
		var rows = [];

		dbrows_json.map(function (row, idx) {
			var thisrow = [];

			columns.map(function (column_name) {
				if (column_name === null) {
					// checkbox
					var key = {};
					key[ractive._hash_key_name()] = row[ractive._hash_key_name()];
					if (ractive._range_key_name()) key[ractive._range_key_name()] = row[ractive._range_key_name()];
					thisrow.push({ KEY: key });
				} else {
					if (row.hasOwnProperty(column_name)) {
						if (column_name === ractive._hash_key_name()) {
							thisrow.push({
								HASH: row[column_name],
								item: row,
								raw: dbrows_raw[idx]
							});
						} else if (typeof row[column_name] === 'string') thisrow.push({ 'S': row[column_name] });else if (typeof row[column_name] === 'number') thisrow.push({ 'N': row[column_name] });else if (typeof row[column_name] === 'boolean') {
							thisrow.push({ 'BOOL': row[column_name].toString() });
						} else if (row[column_name] === null) {
							thisrow.push({ 'NULL': "NULL" });
						} else if (_typeof(row[column_name]) === 'object' && Array.isArray(row[column_name])) {
							thisrow.push({ 'L': true });
						} else if (_typeof(row[column_name]) === 'object' && !Array.isArray(row[column_name])) {
							thisrow.push({ 'M': true });
						} else thisrow.push({ 'U': true });
					} else {
						thisrow.push({ 'U': true });
					}
				}
			});
			rows.push(thisrow);
		});

		this.set('columns', columns);
		this.set('rows', rows);
	},

	refresh_data: function refresh_data(LastEvaluatedKey) {

		var ractive = this;
		this.set('columns', []);
		this.set('rows', []);

		var dbrows_json = null;
		var dbrows_raw = null;
		var hash_key = null;
		var range_key = null;
		var fields = {};
		var columns = [null];

		async.waterfall([

		// describeTable is set by parent

		function (cb) {
			if (ractive.get('type') !== 'scan') return cb();

			fields = {};

			hash_key = ractive._hash_key_name();
			range_key = ractive._range_key_name();

			columns.push(hash_key);
			ractive.add_display_column(hash_key, true);
			fields[hash_key] = 1;
			if (range_key) {
				columns.push(range_key);
				ractive.add_display_column(range_key, true);
				fields[range_key] = 1;
			}

			var scan_index = ractive.get('scan.table');
			if (scan_index === '') {} else {
				var scan_type = scan_index.split(':')[0];
				scan_index = scan_index.split(':')[1];
				if (scan_type === 'gsi') {
					var index = ractive.get('describeTable.GlobalSecondaryIndexes').filter(function (i) {
						return i.IndexName === scan_index;
					})[0];

					var index_hash_key = (index.KeySchema.filter(function (k) {
						return k.KeyType === 'HASH';
					})[0] || {}).AttributeName;
					var index_range_key = (index.KeySchema.filter(function (k) {
						return k.KeyType === 'RANGE';
					})[0] || {}).AttributeName;

					columns.push(index_hash_key);
					ractive.add_display_column(index_hash_key, true);
					fields[index_hash_key] = 1;

					if (index_range_key) {
						columns.push(index_range_key);
						ractive.add_display_column(index_range_key, true);
						fields[index_range_key] = 1;
					}
				}
			}

			var ddb = DynamoDB.table(ractive.get('table.name'));
			if (LastEvaluatedKey) ddb.resume(LastEvaluatedKey);
			ddb.limit(100);
			if (scan_index) ddb = ddb.index(scan_index);

			ddb.scan(function (err, data, raw) {
				if (err) return alert("scan error");

				dbrows_json = data;
				dbrows_raw = raw.Items;

				ractive.push('scan.LastEvaluatedKey', data.LastEvaluatedKey);
				ractive.set('end_reached', data.LastEvaluatedKey ? false : true);

				cb();
			});
		}, function (cb) {
			if (ractive.get('type') !== 'query') return cb();

			fields = {};
			var query_partition_name = '';
			var query_partition_type = 'S';
			var query_sort_name = '';
			var query_sort_type = 'S';

			hash_key = ractive._hash_key_name();
			range_key = ractive._range_key_name();

			columns.push(hash_key);
			ractive.add_display_column(hash_key, true);
			fields[hash_key] = 1;
			if (range_key) {
				columns.push(range_key);
				ractive.add_display_column(range_key, true);
				fields[range_key] = 1;
			}

			var query_index = ractive.get('query.table');
			if (query_index === '') {
				query_partition_name = hash_key;
				query_partition_type = ractive._hash_key_type();
				if (range_key) {
					query_sort_name = ractive._range_key_name();
					query_sort_type = ractive._range_key_type();
				}
			} else {
				var query_type = query_index.split(':')[0];
				query_index = query_index.split(':')[1];
				if (query_type === 'gsi') {

					var index = ractive.get('describeTable.GlobalSecondaryIndexes').filter(function (i) {
						return i.IndexName === query_index;
					})[0];
					var index_hash_key = ractive._gsi_hash_key_name(index.IndexName);
					var index_range_key = ractive._gsi_range_key_name(index.IndexName);
					query_partition_name = index_hash_key;
					query_partition_type = ractive._gsi_hash_key_type(index.IndexName);

					if (index_range_key) {
						query_sort_name = ractive._gsi_range_key_name(index.IndexName);
						query_sort_type = ractive._gsi_range_key_type(index.IndexName);
					}

					columns.push(index_hash_key);
					ractive.add_display_column(index_hash_key, true);
					fields[index_hash_key] = 1;

					if (index_range_key) {
						columns.push(index_range_key);
						ractive.add_display_column(index_range_key, true);
						fields[index_range_key] = 1;
					}
				}
				if (query_type === 'lsi') {

					var index = ractive.get('describeTable.LocalSecondaryIndexes').filter(function (i) {
						return i.IndexName === query_index;
					})[0];
					var index_hash_key = ractive._lsi_hash_key_name(index.IndexName);
					var index_range_key = ractive._lsi_range_key_name(index.IndexName);
					query_partition_name = index_hash_key;
					query_partition_type = ractive._lsi_hash_key_type(index.IndexName);

					if (index_range_key) {
						query_sort_name = ractive._lsi_range_key_name(index.IndexName);
						query_sort_type = ractive._lsi_range_key_type(index.IndexName);
					}

					columns.push(index_hash_key);
					ractive.add_display_column(index_hash_key, true);
					fields[index_hash_key] = 1;

					if (index_range_key) {
						columns.push(index_range_key);
						ractive.add_display_column(index_range_key, true);
						fields[index_range_key] = 1;
					}
				}
			}

			var ddb = DynamoDB.table(ractive.get('table.name'));
			if (LastEvaluatedKey) ddb.resume(LastEvaluatedKey);
			ddb.limit(100);
			if (query_index) ddb = ddb.index(query_index);

			if (query_partition_type === 'S') ddb = ddb.where(query_partition_name).eq(ractive.get('query.partition.value').toString());

			if (query_partition_type === 'N') ddb = ddb.where(query_partition_name).eq(parseFloat(ractive.get('query.partition.value')));

			if (ractive.get('query.sort.value').length) {
				// apply sort
				console.log("sort", query_sort_name, ractive.get('query.sort.op'), query_sort_type);
				if (query_sort_type === 'S') ddb = ddb.where(query_sort_name)[ractive.get('query.sort.op')](ractive.get('query.sort.value').toString(), ractive.get('query.sort.value2').toString());

				if (query_sort_type === 'N') ddb = ddb.where(query_sort_name)[ractive.get('query.sort.op')](parseFloat(ractive.get('query.sort.value')), parseFloat(ractive.get('query.sort.value2')));
			}

			console.log("query_partition_name=", query_partition_name);

			dbrows_json = [];
			ddb.query(function (err, data, raw) {
				if (err) {
					alert("query error");
					return cb(err);
				}

				dbrows_json = data;
				dbrows_raw = raw.Items;

				ractive.push('scan.LastEvaluatedKey', data.LastEvaluatedKey);

				ractive.set('end_reached', data.LastEvaluatedKey ? false : true);

				cb();
			});
		},

		// save raw data
		function (cb) {
			ractive.set('dbrows_json', dbrows_json);
			ractive.set('dbrows_raw', dbrows_raw);
			cb();
		}], function (err) {
			ractive.set('oop_running', false);
			ractive.set('prev_running', false);
			ractive.set('next_running', false);

			if (err) ractive.set('err', err.errorMessage);

			if (ractive.get('autocolumns')) {
				dbrows_json.map(function (row) {
					Object.keys(row).map(function (column_name) {
						if (!fields.hasOwnProperty(column_name)) {
							if (columns.length > 10) {
								ractive.add_display_column(column_name, false);
							} else {
								ractive.add_display_column(column_name, true);
								fields[column_name] = 1;
								columns.push(column_name);
							}
						}
					});
				});
				ractive.set('autocolumns', false);
			}
			ractive.display_data();
			/*
   var rows = []
   
   		dbrows_.map(function(row) {
   	var thisrow = []
   		columns.map(function(column_name) {
   		if (column_name === null) {
   			// checkbox
   			var key = {}
   			key[hash_key] = row[hash_key]
   			if (range_key) key[range_key] = row[range_key]
   			thisrow.push({KEY: key})
   		} else {
   			if (row.hasOwnProperty(column_name)) {
   				if (typeof row[column_name] === 'string')
   					thisrow.push({'S':row[column_name]})
   				else if (typeof row[column_name] === 'number')
   					thisrow.push({'N':row[column_name]})
   				else if (typeof row[column_name] === 'boolean') {
   					thisrow.push({'BOOL':row[column_name].toString()})
   				} else if (row[column_name] === null) {
   					thisrow.push({'NULL': "NULL"})
   				} else if ((typeof row[column_name] === 'object') &&  Array.isArray(row[column_name]) ) {
   					thisrow.push({'L': true })
   				} else if ((typeof row[column_name] === 'object') && !Array.isArray(row[column_name]) ) {
   					thisrow.push({'M': true })
   				} else
   					thisrow.push({'U': true })
   			} else {
   				thisrow.push({'U': true })
   			}
   		}
   	})
   	rows.push(thisrow)
   })
   ractive.set('columns', columns )
   ractive.set('rows', rows )
   */
		});
	},
	add_display_column: function add_display_column(cname, show) {
		var display_columns = this.get('display_columns');
		if (display_columns.filter(function (dc) {
			return dc.name === cname;
		}).length) return;

		display_columns.push({
			name: cname,
			show: show
		});
		this.set('display_columns', display_columns);
	},
	data: function data() {
		return {
			oop_running: false,
			prev_running: false,
			next_running: false,
			start_reached: true,
			end_reached: false,

			type: 'scan',
			display_columns: [
				// { name, type, show: true|false|null}
			],
			autocolumns: true,
			scan: {
				table: '',
				LastEvaluatedKey: [null]
			},
			query: {
				table: '',
				sort: {
					op: 'eq',
					value: '',
					value2: ''
				}
			}
		};
	},
	oninit: function oninit() {
		var ractive = this;

		this.on('open-item', function (e, col, item, rawitem) {
			var describeTable = this.get('describeTable');
			var hash = this._hash_key_name();
			var range = this._range_key_name();
			//console.log("open-item", "table=",describeTable.TableName, "hash=",hash, "range=", range, "item=", item, rawitem  )
			ractive.root.findComponent('WindowHost').newWindow(function ($window) {
				$window.set({
					title: 'Edit Item',
					'geometry.width': window.innerWidth - 100,
					'geometry.height': window.innerHeight - 100,
					'geometry.left': 50,
					'geometry.top': 50
				});

				var vid = "window" + (Math.random() * 0xFFFFFF << 0).toString(16);
				$window.content('<div id="' + vid + '"/>').then(function () {
					var ractive = new Ractive({
						components: {
							itemedit: _edit2.default
						},
						el: $('#' + vid).get(0).parentNode,
						template: '<itemedit describeTable="{{describeTable}}" item="{{item}}" rawitem="{{rawitem}}" window={{window}} />',
						data: {
							describeTable: describeTable,
							//item: item,
							rawitem: rawitem,
							window: $window
						}
					});
				});
			});
		});

		this.on('run-oop', function () {
			if (this.get('oop_running')) return;

			this.set('oop_running', true);

			// reset scan.LastEvaluatedKey
			ractive.set('scan.LastEvaluatedKey', [null]);

			this.refresh_data(null);
		});
		this.on('prev', function () {

			if (this.get('prev_running')) return;

			this.set('prev_running', true);

			if (ractive.get('scan.LastEvaluatedKey').length < 3) return;

			var next = ractive.pop('scan.LastEvaluatedKey');

			var current = ractive.pop('scan.LastEvaluatedKey');

			var LastEvaluatedKey = ractive.get('scan.LastEvaluatedKey').slice(-1)[0];

			ractive.refresh_data(LastEvaluatedKey);
		});
		this.on('next', function () {

			if (this.get('next_running')) return;

			if (this.get('end_reached')) return;

			this.set('next_running', true);
			var LastEvaluatedKey = ractive.get('scan.LastEvaluatedKey').slice(-1)[0];
			ractive.refresh_data(LastEvaluatedKey);
		});

		ractive.observe('scan.LastEvaluatedKey', function (n, o, keypath) {
			if (n.length > 2) ractive.set('start_reached', false);else ractive.set('start_reached', true);
		});
		ractive.observe('display_columns.*.show', function (n, o, keypath) {
			if (o === undefined) return;

			if (o == n) return;

			var col = ractive.get(keypath.slice(0, -5)).name;
			console.log(col, n, o);
			ractive.display_data();
		});

		ractive.on('tabledata.selectrow', function (context) {
			var keypath = context.resolve();
			ractive.set(keypath + '.0.selected', !ractive.get(keypath + '.0.selected'));

			ractive.set('selection_length', ractive.get('rows').filter(function (r) {
				return r[0].selected === true;
			}).length);
		});
		ractive.on('create-item-window', function () {

			var describeTable = this.get('describeTable');

			var rawitem = {};

			/* add partition */
			var htype = this._hash_key_type();

			var to_add = null;
			if (htype === "S") to_add = { S: "" };

			if (htype === "N") to_add = { N: "" };

			if (htype === "B") to_add = { B: Uint8Array.from(atob("InsertBase64Here"), function (c) {
					return c.charCodeAt(0);
				}) };

			rawitem[this._hash_key_name()] = to_add;

			/* add sort */
			if (this._range_key_name()) {
				var rtype = this._range_key_type();
				var to_add = null;
				if (rtype === "S") to_add = { S: "" };

				if (rtype === "N") to_add = { N: "" };

				if (rtype === "B") to_add = { B: Uint8Array.from(atob("InsertBase64Here"), function (c) {
						return c.charCodeAt(0);
					}) };

				rawitem[this._range_key_name()] = to_add;
			}

			//console.log(rawitem)


			ractive.root.findComponent('WindowHost').newWindow(function ($window) {
				$window.set({
					title: 'Create Item',
					'geometry.width': window.innerWidth - 100,
					'geometry.height': window.innerHeight - 100,
					'geometry.left': 50,
					'geometry.top': 50
				});

				var vid = "window" + (Math.random() * 0xFFFFFF << 0).toString(16);
				$window.content('<div id="' + vid + '"/>').then(function () {
					var ractive = new Ractive({
						components: {
							itemadd: _add2.default
						},
						el: $('#' + vid).get(0).parentNode,
						template: '<itemadd describeTable="{{describeTable}}" item="{{item}}" rawitem="{{rawitem}}" window={{window}} />',
						data: {
							describeTable: describeTable,
							// item: {
							//
							// },
							rawitem: rawitem,
							window: $window
						}
					});
				});
			});

			/*
   
   
   
   
   
   					var ractive = new Ractive({
   						components: {
   							itemedit: itemedit,
   						},
   						el: $('#'+vid).get(0).parentNode,
   						template: '<itemedit describeTable="{{describeTable}}" item="{{item}}" rawitem="{{rawitem}}" window={{window}} />',
   						data: {
   							describeTable: describeTable,
   							item: item,
   							rawitem: rawitem,
   							window: $window,
   						}
   					})
   
   
   */
		});
		ractive.on('delete-selected', function (context) {
			//console.log(ractive.findComponent('tabledata').get('rows'))
			var to_delete = ractive.findComponent('tabledata').get('rows').map(function (r) {
				return r[0];
			}).filter(function (r) {
				return r.selected;
			}).map(function (r) {
				return r.KEY;
			});

			if (!to_delete.length) return alert('No Items Selected');

			var to_remove_from_list = [];

			async.each(to_delete, function (item, cb) {

				var Key = {};
				Object.keys(item).map(function (k) {
					if (typeof item[k] === "string") Key[k] = { "S": item[k] };

					if (typeof item[k] === "number") Key[k] = { "N": item[k].toString() };
				});

				var payload = {
					Key: Key,
					TableName: ractive.get('table.name')
				};

				DynamoDB.client.deleteItem(payload, function (err, data) {

					if (err) {
						alert("delete failed " + err.message);
						return cb(err);
					} else to_remove_from_list.push(item);

					cb();
				});
			}, function (err) {
				if (err) alert('some items failed to delete');

				ractive.set('rows', ractive.get('rows').filter(function (r) {

					var is_in_deleted_list = false;
					to_remove_from_list.map(function (deleted_item) {
						var isequal = true;
						Object.keys(deleted_item).map(function (k) {
							if (deleted_item[k] !== r[0].KEY[k]) isequal = false;
						});

						if (isequal) is_in_deleted_list = true;
					});
					return !is_in_deleted_list;
				}));
			});
		});

		ractive.refresh_data(null);
	}
});

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ractiveDynamodbJsonEditor = __webpack_require__(23);

var _ractiveDynamodbJsonEditor2 = _interopRequireDefault(_ractiveDynamodbJsonEditor);

var _cloneDeep = __webpack_require__(24);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//var jsoneditor = require('@awspilot/ractive-dynamodb-json-editor');
exports.default = Ractive.extend({
	isolated: true,
	components: {
		jsoneditor: _ractiveDynamodbJsonEditor2.default
	},
	template: '\n\t\t<jsoneditor item={{itemtoedit}} navigationBar="{{false}}"  style="position: absolute;top: -1px;left: -1px;right: -1px;bottom: 50px;width: auto;height: auto;border: 1px solid #dadada" menu-style="background-color: #d5ddf6;border-bottom: 1px solid #97b0f8;color: #444;" />\n\t\t<div style="position: absolute;left: 10px;right:10px;bottom:10px;height: 30px;box-sizing: border-box;">\n\t\t\t<span style="color: red;line-height: 30px;">{{errorMessage}}</span>\n\t\t\t<a class="btn btn-sm btn-primary pull-right" style="color: #fff;background-color: #337ab7;border-color: #2e6da4;float: right;padding: 5px 10px; font-size: 12px; line-height: 1.5;border-radius: 3px;font-family: sans-serif;" on-click="update-item">Save</a>\n\t\t</div>\n\t\t',
	data: function data() {
		return {
			itemtoedit: {}
		};
	},
	_hash_key_name: function _hash_key_name() {
		return (this.get('describeTable').KeySchema.filter(function (k) {
			return k.KeyType === 'HASH';
		})[0] || {}).AttributeName;
	},
	_range_key_name: function _range_key_name() {
		return (this.get('describeTable').KeySchema.filter(function (k) {
			return k.KeyType === 'RANGE';
		})[0] || {}).AttributeName;
	},
	oninit: function oninit() {
		var ractive = this;

		//this.set({itemtoedit: Object.assign({}, this.get('rawitem'))  })

		this.set({ itemtoedit: (0, _cloneDeep2.default)(this.get('rawitem')) });

		this.observe('itemtoedit', function (n, o, kp) {
			this.set({ errorMessage: '' });
		});

		//var rawitem = this.get('rawitem')
		//this.set({itemtoedit: { ...rawitem }  })

		//var debug = this.get('itemtoedit');

		this.on('update-item', function () {
			//console.log("table=","HASH=", this._hash_key_name(), " RANGE=", this._range_key_name() )

			var originalitem = this.get('rawitem');
			var updateditem = (0, _cloneDeep2.default)(this.get('itemtoedit'));

			//console.log("originalitem", originalitem.binary, typeof originalitem.binary )

			//console.log('hello', updateditem )


			var updateItemCall = {
				TableName: this.get('describeTable.TableName'),
				Key: {},
				AttributeUpdates: {}
			};

			if (!updateditem.hasOwnProperty(this._hash_key_name())) return alert('Missing PARTITION_KEY ' + this._hash_key_name());

			if (this._range_key_name() && !updateditem.hasOwnProperty(this._range_key_name())) return alert('Missing SORT_KEY ' + this._range_key_name());

			if (JSON.stringify(updateditem[this._hash_key_name()]) !== JSON.stringify(originalitem[this._hash_key_name()])) return alert('PARTITION_KEY(' + this._hash_key_name() + ') changed value. Operation not permitted');

			if (this._range_key_name() && JSON.stringify(updateditem[this._range_key_name()]) !== JSON.stringify(originalitem[this._range_key_name()])) return alert('SORT_KEY(' + this._range_key_name() + ') changed value. Operation not permitted');

			Object.keys(originalitem).map(function (k) {
				if (!updateditem.hasOwnProperty(k)) updateItemCall.AttributeUpdates[k] = {
					Action: 'DELETE'
				};
			});

			updateItemCall.Key[this._hash_key_name()] = updateditem[this._hash_key_name()];
			delete updateditem[this._hash_key_name()];

			if (this._range_key_name()) {
				updateItemCall.Key[this._range_key_name()] = updateditem[this._range_key_name()];
				delete updateditem[this._range_key_name()];
			}

			Object.keys(updateditem).map(function (k) {
				updateItemCall.AttributeUpdates[k] = {
					Action: 'PUT', //
					Value: updateditem[k]
				};
			});

			//console.log("should update item", this.get('item') )
			console.log("updateItem", updateItemCall);
			DynamoDB.client.updateItem(updateItemCall, function (err, data) {
				if (err) return ractive.set('errorMessage', err.message);

				ractive.get('window').close();
				//ractive.parent.fire('close-window')
			});
		});
	}

});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(62),
    arrayEach = __webpack_require__(93),
    assignValue = __webpack_require__(29),
    baseAssign = __webpack_require__(95),
    baseAssignIn = __webpack_require__(105),
    cloneBuffer = __webpack_require__(108),
    copyArray = __webpack_require__(109),
    copySymbols = __webpack_require__(110),
    copySymbolsIn = __webpack_require__(112),
    getAllKeys = __webpack_require__(113),
    getAllKeysIn = __webpack_require__(114),
    getTag = __webpack_require__(20),
    initCloneArray = __webpack_require__(119),
    initCloneByTag = __webpack_require__(120),
    initCloneObject = __webpack_require__(126),
    isArray = __webpack_require__(14),
    isBuffer = __webpack_require__(32),
    isMap = __webpack_require__(128),
    isObject = __webpack_require__(2),
    isSet = __webpack_require__(130),
    keys = __webpack_require__(13);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(4),
    stackClear = __webpack_require__(68),
    stackDelete = __webpack_require__(69),
    stackGet = __webpack_require__(70),
    stackHas = __webpack_require__(71),
    stackSet = __webpack_require__(72);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(5);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(5);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(5);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(5);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(4);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(4),
    Map = __webpack_require__(11),
    MapCache = __webpack_require__(80);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(26),
    isMasked = __webpack_require__(77),
    isObject = __webpack_require__(2),
    toSource = __webpack_require__(28);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(12);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(78);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(81),
    mapCacheDelete = __webpack_require__(88),
    mapCacheGet = __webpack_require__(90),
    mapCacheHas = __webpack_require__(91),
    mapCacheSet = __webpack_require__(92);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(82),
    ListCache = __webpack_require__(4),
    Map = __webpack_require__(11);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(83),
    hashDelete = __webpack_require__(84),
    hashGet = __webpack_require__(85),
    hashHas = __webpack_require__(86),
    hashSet = __webpack_require__(87);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(7);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(7);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(7);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(7);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(8);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(8);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(8);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(8);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(9),
    keys = __webpack_require__(13);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(98),
    isObjectLike = __webpack_require__(3);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isObjectLike = __webpack_require__(3);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(102),
    baseUnary = __webpack_require__(16),
    nodeUtil = __webpack_require__(17);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isLength = __webpack_require__(33),
    isObjectLike = __webpack_require__(3);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(18),
    nativeKeys = __webpack_require__(104);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(34);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(9),
    keysIn = __webpack_require__(36);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2),
    isPrototype = __webpack_require__(18),
    nativeKeysIn = __webpack_require__(107);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(0);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)(module)))

/***/ }),
/* 109 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(9),
    getSymbols = __webpack_require__(19);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(9),
    getSymbolsIn = __webpack_require__(38);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(41),
    getSymbols = __webpack_require__(19),
    keys = __webpack_require__(13);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(41),
    getSymbolsIn = __webpack_require__(38),
    keysIn = __webpack_require__(36);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(1),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(21),
    cloneDataView = __webpack_require__(122),
    cloneRegExp = __webpack_require__(123),
    cloneSymbol = __webpack_require__(124),
    cloneTypedArray = __webpack_require__(125);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(21);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(12);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(21);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(127),
    getPrototype = __webpack_require__(40),
    isPrototype = __webpack_require__(18);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(129),
    baseUnary = __webpack_require__(16),
    nodeUtil = __webpack_require__(17);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(20),
    isObjectLike = __webpack_require__(3);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(131),
    baseUnary = __webpack_require__(16),
    nodeUtil = __webpack_require__(17);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(20),
    isObjectLike = __webpack_require__(3);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ractiveDynamodbJsonEditor = __webpack_require__(23);

var _ractiveDynamodbJsonEditor2 = _interopRequireDefault(_ractiveDynamodbJsonEditor);

var _cloneDeep = __webpack_require__(24);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//var jsoneditor = require('@awspilot/ractive-dynamodb-json-editor');
exports.default = Ractive.extend({
	isolated: true,
	components: {
		jsoneditor: _ractiveDynamodbJsonEditor2.default
	},
	template: '\n\t\t<jsoneditor item={{itemtoedit}} navigationBar="{{false}}"  style="position: absolute;top: -1px;left: -1px;right: -1px;bottom: 50px;width: auto;height: auto;border: 1px solid #dadada" menu-style="background-color: #d5ddf6;border-bottom: 1px solid #97b0f8;color: #444;" />\n\t\t<div style="position: absolute;left: 10px;right:10px;bottom:10px;height: 30px;box-sizing: border-box;">\n\t\t\t<span style="color: red;line-height: 30px;">{{errorMessage}}</span>\n\t\t\t<a class="btn btn-sm btn-primary pull-right" style="color: #fff;background-color: #337ab7;border-color: #2e6da4;float: right;padding: 5px 10px; font-size: 12px; line-height: 1.5;border-radius: 3px;font-family: sans-serif;"  on-click="update-item">Save</a>\n\t\t</div>\n\t\t',
	data: function data() {
		return {
			itemtoedit: {}
		};
	},
	_hash_key_name: function _hash_key_name() {
		return (this.get('describeTable').KeySchema.filter(function (k) {
			return k.KeyType === 'HASH';
		})[0] || {}).AttributeName;
	},
	_range_key_name: function _range_key_name() {
		return (this.get('describeTable').KeySchema.filter(function (k) {
			return k.KeyType === 'RANGE';
		})[0] || {}).AttributeName;
	},
	oninit: function oninit() {
		var ractive = this;

		//this.set({itemtoedit: Object.assign({}, this.get('rawitem'))  })

		this.set({ itemtoedit: (0, _cloneDeep2.default)(this.get('rawitem')) });

		this.observe('itemtoedit', function (n, o, kp) {
			this.set({ errorMessage: '' });
		});

		//var rawitem = this.get('rawitem')
		//this.set({itemtoedit: { ...rawitem }  })

		//var debug = this.get('itemtoedit');

		this.on('update-item', function () {
			//console.log("table=","HASH=", this._hash_key_name(), " RANGE=", this._range_key_name() )

			var originalitem = this.get('rawitem');
			var updateditem = (0, _cloneDeep2.default)(this.get('itemtoedit'));

			//console.log("originalitem", originalitem.binary, typeof originalitem.binary )

			//console.log('hello', updateditem )


			var updateItemCall = {
				TableName: this.get('describeTable.TableName'),
				Key: {},
				AttributeUpdates: {}
			};

			if (!updateditem.hasOwnProperty(this._hash_key_name())) return alert('Missing PARTITION_KEY ' + this._hash_key_name());

			if (this._range_key_name() && !updateditem.hasOwnProperty(this._range_key_name())) return alert('Missing SORT_KEY ' + this._range_key_name());

			updateItemCall.Key[this._hash_key_name()] = updateditem[this._hash_key_name()];
			delete updateditem[this._hash_key_name()];

			if (this._range_key_name()) {
				updateItemCall.Key[this._range_key_name()] = updateditem[this._range_key_name()];
				delete updateditem[this._range_key_name()];
			}

			Object.keys(updateditem).map(function (k) {
				updateItemCall.AttributeUpdates[k] = {
					Action: 'PUT', //
					Value: updateditem[k]
				};
			});

			console.log("updateItem", updateItemCall);
			DynamoDB.client.updateItem(updateItemCall, function (err, data) {
				if (err) return ractive.set('errorMessage', err.message);

				ractive.get('window').close();
			});
		});
	}

});

/***/ })
/******/ ])["default"];
});