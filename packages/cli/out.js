(function () {
	'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	var n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
	60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
	var D={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState");};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
	function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}var I=H.prototype=new G;I.constructor=H;objectAssign(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
	function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h;}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return {$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
	function N(a,b){return {$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return {result:a,keyPrefix:b,func:c,context:e,count:0}}
	function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a);}
	function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0;}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e);}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
	0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++);}
	function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a));}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b);}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
	var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:objectAssign};var Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b);},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
	var Component=F;var Fragment=r;var Profiler=u;var PureComponent=H;var StrictMode=t;var Suspense=y;var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
	var cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=objectAssign({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h]);}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f;}return {$$typeof:p,type:a.type,
	key:d,ref:g,props:e,_owner:k}};var createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};var createElement=M;var createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};var createRef=function(){return {current:null}};var forwardRef=function(a){return {$$typeof:x,render:a}};var isValidElement=O;
	var lazy=function(a){return {$$typeof:A,_ctor:a,_status:-1,_result:null}};var memo=function(a,b){return {$$typeof:z,type:a,compare:void 0===b?null:b}};var useCallback=function(a,b){return Z().useCallback(a,b)};var useContext=function(a,b){return Z().useContext(a,b)};var useDebugValue=function(){};var useEffect=function(a,b){return Z().useEffect(a,b)};var useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
	var useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};var useMemo=function(a,b){return Z().useMemo(a,b)};var useReducer=function(a,b,c){return Z().useReducer(a,b,c)};var useRef=function(a){return Z().useRef(a)};var useState=function(a){return Z().useState(a)};var version="16.13.1";

	var react_production_min = {
		Children: Children,
		Component: Component,
		Fragment: Fragment,
		Profiler: Profiler,
		PureComponent: PureComponent,
		StrictMode: StrictMode,
		Suspense: Suspense,
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
		cloneElement: cloneElement,
		createContext: createContext,
		createElement: createElement,
		createFactory: createFactory,
		createRef: createRef,
		forwardRef: forwardRef,
		isValidElement: isValidElement,
		lazy: lazy,
		memo: memo,
		useCallback: useCallback,
		useContext: useContext,
		useDebugValue: useDebugValue,
		useEffect: useEffect,
		useImperativeHandle: useImperativeHandle,
		useLayoutEffect: useLayoutEffect,
		useMemo: useMemo,
		useReducer: useReducer,
		useRef: useRef,
		useState: useState,
		version: version
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	var checkPropTypes_1 = checkPropTypes;

	var react_development = createCommonjsModule(function (module, exports) {



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var _assign = objectAssign;
	var checkPropTypes = checkPropTypes_1;

	var ReactVersion = '16.13.1';

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
	var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	/**
	 * Keeps track of the current dispatcher.
	 */
	var ReactCurrentDispatcher = {
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	};

	/**
	 * Keeps track of the current batch's configuration such as how long an update
	 * should suspend for if it needs to.
	 */
	var ReactCurrentBatchConfig = {
	  suspense: null
	};

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	};

	var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
	function describeComponentFrame (name, source, ownerName) {
	  var sourceInfo = '';

	  if (source) {
	    var path = source.fileName;
	    var fileName = path.replace(BEFORE_SLASH_RE, '');

	    {
	      // In DEV, include code for a common special case:
	      // prefer "folder/index.js" instead of just "index.js".
	      if (/^index\./.test(fileName)) {
	        var match = path.match(BEFORE_SLASH_RE);

	        if (match) {
	          var pathBeforeSlash = match[1];

	          if (pathBeforeSlash) {
	            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
	            fileName = folderName + '/' + fileName;
	          }
	        }
	      }
	    }

	    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
	  } else if (ownerName) {
	    sourceInfo = ' (created by ' + ownerName + ')';
	  }

	  return '\n    in ' + (name || 'Unknown') + sourceInfo;
	}

	var Resolved = 1;
	function refineResolvedLazyComponent(lazyComponent) {
	  return lazyComponent._status === Resolved ? lazyComponent._result : null;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var functionName = innerType.displayName || innerType.name || '';
	  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
	}

	function getComponentName(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return "Profiler";

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        return 'Context.Consumer';

	      case REACT_PROVIDER_TYPE:
	        return 'Context.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        return getComponentName(type.type);

	      case REACT_BLOCK_TYPE:
	        return getComponentName(type.render);

	      case REACT_LAZY_TYPE:
	        {
	          var thenable = type;
	          var resolvedThenable = refineResolvedLazyComponent(thenable);

	          if (resolvedThenable) {
	            return getComponentName(resolvedThenable);
	          }

	          break;
	        }
	    }
	  }

	  return null;
	}

	var ReactDebugCurrentFrame = {};
	var currentlyValidatingElement = null;
	function setCurrentlyValidatingElement(element) {
	  {
	    currentlyValidatingElement = element;
	  }
	}

	{
	  // Stack implementation injected by the current renderer.
	  ReactDebugCurrentFrame.getCurrentStack = null;

	  ReactDebugCurrentFrame.getStackAddendum = function () {
	    var stack = ''; // Add an extra top frame while an element is being validated

	    if (currentlyValidatingElement) {
	      var name = getComponentName(currentlyValidatingElement.type);
	      var owner = currentlyValidatingElement._owner;
	      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
	    } // Delegate to the injected renderer-specific implementation


	    var impl = ReactDebugCurrentFrame.getCurrentStack;

	    if (impl) {
	      stack += impl() || '';
	    }

	    return stack;
	  };
	}

	/**
	 * Used by act() to track whether you're inside an act() scope.
	 */
	var IsSomeRendererActing = {
	  current: false
	};

	var ReactSharedInternals = {
	  ReactCurrentDispatcher: ReactCurrentDispatcher,
	  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
	  ReactCurrentOwner: ReactCurrentOwner,
	  IsSomeRendererActing: IsSomeRendererActing,
	  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
	  assign: _assign
	};

	{
	  _assign(ReactSharedInternals, {
	    // These should not be included in production.
	    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
	    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
	    // TODO: remove in React 17.0.
	    ReactComponentTreeHook: {}
	  });
	}

	// by calls to these methods by a Babel plugin.
	//
	// In PROD (or in packages without access to React internals),
	// they are left as they are instead.

	function warn(format) {
	  {
	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    printWarning('warn', format, args);
	  }
	}
	function error(format) {
	  {
	    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      args[_key2 - 1] = arguments[_key2];
	    }

	    printWarning('error', format, args);
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

	    if (!hasExistingStack) {
	      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	      var stack = ReactDebugCurrentFrame.getStackAddendum();

	      if (stack !== '') {
	        format += '%s';
	        args = args.concat([stack]);
	      }
	    }

	    var argsWithFormat = args.map(function (item) {
	      return '' + item;
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);

	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      throw new Error(message);
	    } catch (x) {}
	  }
	}

	var didWarnStateUpdateForUnmountedComponent = {};

	function warnNoop(publicInstance, callerName) {
	  {
	    var _constructor = publicInstance.constructor;
	    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
	    var warningKey = componentName + "." + callerName;

	    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
	      return;
	    }

	    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

	    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
	  }
	}
	/**
	 * This is the abstract API for an update queue.
	 */


	var ReactNoopUpdateQueue = {
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} callerName name of the calling function in the public API.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance, callback, callerName) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} callerName name of the calling function in the public API.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} Name of the calling function in the public API.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	var emptyObject = {};

	{
	  Object.freeze(emptyObject);
	}
	/**
	 * Base class helpers for the updating state of a component.
	 */


	function Component(props, context, updater) {
	  this.props = props;
	  this.context = context; // If a component has string refs, we will assign a different object later.

	  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
	  // renderer.

	  this.updater = updater || ReactNoopUpdateQueue;
	}

	Component.prototype.isReactComponent = {};
	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */

	Component.prototype.setState = function (partialState, callback) {
	  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
	    {
	      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
	    }
	  }

	  this.updater.enqueueSetState(this, partialState, callback, 'setState');
	};
	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */


	Component.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
	};
	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */


	{
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };

	  var defineDeprecationWarning = function (methodName, info) {
	    Object.defineProperty(Component.prototype, methodName, {
	      get: function () {
	        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

	        return undefined;
	      }
	    });
	  };

	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	function ComponentDummy() {}

	ComponentDummy.prototype = Component.prototype;
	/**
	 * Convenience component with default shallow equality check for sCU.
	 */

	function PureComponent(props, context, updater) {
	  this.props = props;
	  this.context = context; // If a component has string refs, we will assign a different object later.

	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

	_assign(pureComponentPrototype, Component.prototype);

	pureComponentPrototype.isPureReactComponent = true;

	// an immutable object with a single mutable value
	function createRef() {
	  var refObject = {
	    current: null
	  };

	  {
	    Object.seal(refObject);
	  }

	  return refObject;
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

	{
	  didWarnAboutStringRefs = {};
	}

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
	      }
	    }
	  };

	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
	      }
	    }
	  };

	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	function warnIfStringRefCannotBeAutoConverted(config) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
	      var componentName = getComponentName(ReactCurrentOwner.current.type);

	      if (!didWarnAboutStringRefs[componentName]) {
	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

	        didWarnAboutStringRefs[componentName] = true;
	      }
	    }
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://reactjs.org/docs/react-api.html#createelement
	 */

	function createElement(type, config, children) {
	  var propName; // Reserved names are extracted

	  var props = {};
	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;

	      {
	        warnIfStringRefCannotBeAutoConverted(config);
	      }
	    }

	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  } // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.


	  var childrenLength = arguments.length - 2;

	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);

	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }

	    {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }

	    props.children = childArray;
	  } // Resolve default props


	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;

	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }

	  {
	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }
	  }

	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	}
	function cloneAndReplaceKey(oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
	  return newElement;
	}
	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://reactjs.org/docs/react-api.html#cloneelement
	 */

	function cloneElement(element, config, children) {
	  if (!!(element === null || element === undefined)) {
	    {
	      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
	    }
	  }

	  var propName; // Original props are copied

	  var props = _assign({}, element.props); // Reserved names are extracted


	  var key = element.key;
	  var ref = element.ref; // Self is preserved since the owner is preserved.

	  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.

	  var source = element._source; // Owner will be preserved, unless ref is overridden

	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }

	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    } // Remaining properties override existing props


	    var defaultProps;

	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }

	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  } // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.


	  var childrenLength = arguments.length - 2;

	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);

	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }

	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */

	function isValidElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';
	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });
	  return '$' + escapedString;
	}
	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */


	var didWarnAboutMaps = false;
	var userProvidedKeyEscapeRegex = /\/+/g;

	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	var POOL_SIZE = 10;
	var traverseContextPool = [];

	function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
	  if (traverseContextPool.length) {
	    var traverseContext = traverseContextPool.pop();
	    traverseContext.result = mapResult;
	    traverseContext.keyPrefix = keyPrefix;
	    traverseContext.func = mapFunction;
	    traverseContext.context = mapContext;
	    traverseContext.count = 0;
	    return traverseContext;
	  } else {
	    return {
	      result: mapResult,
	      keyPrefix: keyPrefix,
	      func: mapFunction,
	      context: mapContext,
	      count: 0
	    };
	  }
	}

	function releaseTraverseContext(traverseContext) {
	  traverseContext.result = null;
	  traverseContext.keyPrefix = null;
	  traverseContext.func = null;
	  traverseContext.context = null;
	  traverseContext.count = 0;

	  if (traverseContextPool.length < POOL_SIZE) {
	    traverseContextPool.push(traverseContext);
	  }
	}
	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */


	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  var invokeCallback = false;

	  if (children === null) {
	    invokeCallback = true;
	  } else {
	    switch (type) {
	      case 'string':
	      case 'number':
	        invokeCallback = true;
	        break;

	      case 'object':
	        switch (children.$$typeof) {
	          case REACT_ELEMENT_TYPE:
	          case REACT_PORTAL_TYPE:
	            invokeCallback = true;
	        }

	    }
	  }

	  if (invokeCallback) {
	    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.

	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);

	    if (typeof iteratorFn === 'function') {

	      {
	        // Warn about using Maps as children
	        if (iteratorFn === children.entries) {
	          if (!didWarnAboutMaps) {
	            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
	          }

	          didWarnAboutMaps = true;
	        }
	      }

	      var iterator = iteratorFn.call(children);
	      var step;
	      var ii = 0;

	      while (!(step = iterator.next()).done) {
	        child = step.value;
	        nextName = nextNamePrefix + getComponentKey(child, ii++);
	        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	      }
	    } else if (type === 'object') {
	      var addendum = '';

	      {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
	      }

	      var childrenString = '' + children;

	      {
	        {
	          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
	        }
	      }
	    }
	  }

	  return subtreeCount;
	}
	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */


	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}
	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */


	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (typeof component === 'object' && component !== null && component.key != null) {
	    // Explicit key
	    return escape(component.key);
	  } // Implicit key determined by the index in the set


	  return index.toString(36);
	}

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;
	  func.call(context, child, bookKeeping.count++);
	}
	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */


	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }

	  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  releaseTraverseContext(traverseContext);
	}

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;
	  var mappedChild = func.call(context, child, bookKeeping.count++);

	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
	      return c;
	    });
	  } else if (mappedChild != null) {
	    if (isValidElement(mappedChild)) {
	      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }

	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';

	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }

	  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  releaseTraverseContext(traverseContext);
	}
	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */


	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }

	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}
	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrencount
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */


	function countChildren(children) {
	  return traverseAllChildren(children, function () {
	    return null;
	  }, null);
	}
	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
	 */


	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
	    return child;
	  });
	  return result;
	}
	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */


	function onlyChild(children) {
	  if (!isValidElement(children)) {
	    {
	      throw Error( "React.Children.only expected to receive a single React element child." );
	    }
	  }

	  return children;
	}

	function createContext(defaultValue, calculateChangedBits) {
	  if (calculateChangedBits === undefined) {
	    calculateChangedBits = null;
	  } else {
	    {
	      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
	        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
	      }
	    }
	  }

	  var context = {
	    $$typeof: REACT_CONTEXT_TYPE,
	    _calculateChangedBits: calculateChangedBits,
	    // As a workaround to support multiple concurrent renderers, we categorize
	    // some renderers as primary and others as secondary. We only expect
	    // there to be two concurrent renderers at most: React Native (primary) and
	    // Fabric (secondary); React DOM (primary) and React ART (secondary).
	    // Secondary renderers store their context values on separate fields.
	    _currentValue: defaultValue,
	    _currentValue2: defaultValue,
	    // Used to track how many concurrent renderers this context currently
	    // supports within in a single renderer. Such as parallel server rendering.
	    _threadCount: 0,
	    // These are circular
	    Provider: null,
	    Consumer: null
	  };
	  context.Provider = {
	    $$typeof: REACT_PROVIDER_TYPE,
	    _context: context
	  };
	  var hasWarnedAboutUsingNestedContextConsumers = false;
	  var hasWarnedAboutUsingConsumerProvider = false;

	  {
	    // A separate object, but proxies back to the original context object for
	    // backwards compatibility. It has a different $$typeof, so we can properly
	    // warn for the incorrect usage of Context as a Consumer.
	    var Consumer = {
	      $$typeof: REACT_CONTEXT_TYPE,
	      _context: context,
	      _calculateChangedBits: context._calculateChangedBits
	    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

	    Object.defineProperties(Consumer, {
	      Provider: {
	        get: function () {
	          if (!hasWarnedAboutUsingConsumerProvider) {
	            hasWarnedAboutUsingConsumerProvider = true;

	            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
	          }

	          return context.Provider;
	        },
	        set: function (_Provider) {
	          context.Provider = _Provider;
	        }
	      },
	      _currentValue: {
	        get: function () {
	          return context._currentValue;
	        },
	        set: function (_currentValue) {
	          context._currentValue = _currentValue;
	        }
	      },
	      _currentValue2: {
	        get: function () {
	          return context._currentValue2;
	        },
	        set: function (_currentValue2) {
	          context._currentValue2 = _currentValue2;
	        }
	      },
	      _threadCount: {
	        get: function () {
	          return context._threadCount;
	        },
	        set: function (_threadCount) {
	          context._threadCount = _threadCount;
	        }
	      },
	      Consumer: {
	        get: function () {
	          if (!hasWarnedAboutUsingNestedContextConsumers) {
	            hasWarnedAboutUsingNestedContextConsumers = true;

	            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
	          }

	          return context.Consumer;
	        }
	      }
	    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

	    context.Consumer = Consumer;
	  }

	  {
	    context._currentRenderer = null;
	    context._currentRenderer2 = null;
	  }

	  return context;
	}

	function lazy(ctor) {
	  var lazyType = {
	    $$typeof: REACT_LAZY_TYPE,
	    _ctor: ctor,
	    // React uses these fields to store the result.
	    _status: -1,
	    _result: null
	  };

	  {
	    // In production, this would just set it on the object.
	    var defaultProps;
	    var propTypes;
	    Object.defineProperties(lazyType, {
	      defaultProps: {
	        configurable: true,
	        get: function () {
	          return defaultProps;
	        },
	        set: function (newDefaultProps) {
	          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

	          defaultProps = newDefaultProps; // Match production behavior more closely:

	          Object.defineProperty(lazyType, 'defaultProps', {
	            enumerable: true
	          });
	        }
	      },
	      propTypes: {
	        configurable: true,
	        get: function () {
	          return propTypes;
	        },
	        set: function (newPropTypes) {
	          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

	          propTypes = newPropTypes; // Match production behavior more closely:

	          Object.defineProperty(lazyType, 'propTypes', {
	            enumerable: true
	          });
	        }
	      }
	    });
	  }

	  return lazyType;
	}

	function forwardRef(render) {
	  {
	    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
	      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
	    } else if (typeof render !== 'function') {
	      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
	    } else {
	      if (render.length !== 0 && render.length !== 2) {
	        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
	      }
	    }

	    if (render != null) {
	      if (render.defaultProps != null || render.propTypes != null) {
	        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
	      }
	    }
	  }

	  return {
	    $$typeof: REACT_FORWARD_REF_TYPE,
	    render: render
	  };
	}

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function memo(type, compare) {
	  {
	    if (!isValidElementType(type)) {
	      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
	    }
	  }

	  return {
	    $$typeof: REACT_MEMO_TYPE,
	    type: type,
	    compare: compare === undefined ? null : compare
	  };
	}

	function resolveDispatcher() {
	  var dispatcher = ReactCurrentDispatcher.current;

	  if (!(dispatcher !== null)) {
	    {
	      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
	    }
	  }

	  return dispatcher;
	}

	function useContext(Context, unstable_observedBits) {
	  var dispatcher = resolveDispatcher();

	  {
	    if (unstable_observedBits !== undefined) {
	      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
	    } // TODO: add a more generic warning for invalid values.


	    if (Context._context !== undefined) {
	      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
	      // and nobody should be using this in existing code.

	      if (realContext.Consumer === Context) {
	        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
	      } else if (realContext.Provider === Context) {
	        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
	      }
	    }
	  }

	  return dispatcher.useContext(Context, unstable_observedBits);
	}
	function useState(initialState) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useState(initialState);
	}
	function useReducer(reducer, initialArg, init) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useReducer(reducer, initialArg, init);
	}
	function useRef(initialValue) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useRef(initialValue);
	}
	function useEffect(create, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useEffect(create, deps);
	}
	function useLayoutEffect(create, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useLayoutEffect(create, deps);
	}
	function useCallback(callback, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useCallback(callback, deps);
	}
	function useMemo(create, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useMemo(create, deps);
	}
	function useImperativeHandle(ref, create, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useImperativeHandle(ref, create, deps);
	}
	function useDebugValue(value, formatterFn) {
	  {
	    var dispatcher = resolveDispatcher();
	    return dispatcher.useDebugValue(value, formatterFn);
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = getComponentName(ReactCurrentOwner.current.type);

	    if (name) {
	      return '\n\nCheck the render method of `' + name + '`.';
	    }
	  }

	  return '';
	}

	function getSourceInfoErrorAddendum(source) {
	  if (source !== undefined) {
	    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	    var lineNumber = source.lineNumber;
	    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	  }

	  return '';
	}

	function getSourceInfoErrorAddendumForProps(elementProps) {
	  if (elementProps !== null && elementProps !== undefined) {
	    return getSourceInfoErrorAddendum(elementProps.__source);
	  }

	  return '';
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	    if (parentName) {
	      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	    }
	  }

	  return info;
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }

	  element._store.validated = true;
	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	    return;
	  }

	  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.

	  var childOwner = '';

	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
	  }

	  setCurrentlyValidatingElement(element);

	  {
	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
	  }

	  setCurrentlyValidatingElement(null);
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }

	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];

	      if (isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);

	    if (typeof iteratorFn === 'function') {
	      // Entry iterators used to provide implicit keys,
	      // but now we print a separate warning for them later.
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;

	        while (!(step = iterator.next()).done) {
	          if (isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var name = getComponentName(type);
	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      setCurrentlyValidatingElement(element);
	      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
	      setCurrentlyValidatingElement(null);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true;

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    setCurrentlyValidatingElement(fragment);
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      error('Invalid attribute `ref` supplied to `React.Fragment`.');
	    }

	    setCurrentlyValidatingElement(null);
	  }
	}
	function createElementWithValidation(type, props, children) {
	  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	  // succeed and there will likely be errors in render.

	  if (!validType) {
	    var info = '';

	    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	    }

	    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

	    if (sourceInfo) {
	      info += sourceInfo;
	    } else {
	      info += getDeclarationErrorAddendum();
	    }

	    var typeString;

	    if (type === null) {
	      typeString = 'null';
	    } else if (Array.isArray(type)) {
	      typeString = 'array';
	    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
	      info = ' Did you accidentally export a JSX literal instead of a component?';
	    } else {
	      typeString = typeof type;
	    }

	    {
	      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }
	  }

	  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
	  // TODO: Drop this when these are no longer allowed as the type argument.

	  if (element == null) {
	    return element;
	  } // Skip key warning if the type isn't valid since our key validation logic
	  // doesn't expect a non-string/function type and can throw confusing errors.
	  // We don't want exception behavior to differ between dev and prod.
	  // (Rendering will throw with a helpful message and as soon as the type is
	  // fixed, the key warnings will appear.)


	  if (validType) {
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], type);
	    }
	  }

	  if (type === REACT_FRAGMENT_TYPE) {
	    validateFragmentProps(element);
	  } else {
	    validatePropTypes(element);
	  }

	  return element;
	}
	var didWarnAboutDeprecatedCreateFactory = false;
	function createFactoryWithValidation(type) {
	  var validatedFactory = createElementWithValidation.bind(null, type);
	  validatedFactory.type = type;

	  {
	    if (!didWarnAboutDeprecatedCreateFactory) {
	      didWarnAboutDeprecatedCreateFactory = true;

	      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
	    } // Legacy hook: remove it


	    Object.defineProperty(validatedFactory, 'type', {
	      enumerable: false,
	      get: function () {
	        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

	        Object.defineProperty(this, 'type', {
	          value: type
	        });
	        return type;
	      }
	    });
	  }

	  return validatedFactory;
	}
	function cloneElementWithValidation(element, props, children) {
	  var newElement = cloneElement.apply(this, arguments);

	  for (var i = 2; i < arguments.length; i++) {
	    validateChildKeys(arguments[i], newElement.type);
	  }

	  validatePropTypes(newElement);
	  return newElement;
	}

	{

	  try {
	    var frozenObject = Object.freeze({});
	    var testMap = new Map([[frozenObject, null]]);
	    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
	    // https://github.com/rollup/rollup/issues/1771
	    // TODO: we can remove these if Rollup fixes the bug.

	    testMap.set(0, 0);
	    testSet.add(0);
	  } catch (e) {
	  }
	}

	var createElement$1 =  createElementWithValidation ;
	var cloneElement$1 =  cloneElementWithValidation ;
	var createFactory =  createFactoryWithValidation ;
	var Children = {
	  map: mapChildren,
	  forEach: forEachChildren,
	  count: countChildren,
	  toArray: toArray,
	  only: onlyChild
	};

	exports.Children = Children;
	exports.Component = Component;
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.Profiler = REACT_PROFILER_TYPE;
	exports.PureComponent = PureComponent;
	exports.StrictMode = REACT_STRICT_MODE_TYPE;
	exports.Suspense = REACT_SUSPENSE_TYPE;
	exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
	exports.cloneElement = cloneElement$1;
	exports.createContext = createContext;
	exports.createElement = createElement$1;
	exports.createFactory = createFactory;
	exports.createRef = createRef;
	exports.forwardRef = forwardRef;
	exports.isValidElement = isValidElement;
	exports.lazy = lazy;
	exports.memo = memo;
	exports.useCallback = useCallback;
	exports.useContext = useContext;
	exports.useDebugValue = useDebugValue;
	exports.useEffect = useEffect;
	exports.useImperativeHandle = useImperativeHandle;
	exports.useLayoutEffect = useLayoutEffect;
	exports.useMemo = useMemo;
	exports.useReducer = useReducer;
	exports.useRef = useRef;
	exports.useState = useState;
	exports.version = ReactVersion;
	  })();
	}
	});
	var react_development_1 = react_development.Children;
	var react_development_2 = react_development.Component;
	var react_development_3 = react_development.Fragment;
	var react_development_4 = react_development.Profiler;
	var react_development_5 = react_development.PureComponent;
	var react_development_6 = react_development.StrictMode;
	var react_development_7 = react_development.Suspense;
	var react_development_8 = react_development.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	var react_development_9 = react_development.cloneElement;
	var react_development_10 = react_development.createContext;
	var react_development_11 = react_development.createElement;
	var react_development_12 = react_development.createFactory;
	var react_development_13 = react_development.createRef;
	var react_development_14 = react_development.forwardRef;
	var react_development_15 = react_development.isValidElement;
	var react_development_16 = react_development.lazy;
	var react_development_17 = react_development.memo;
	var react_development_18 = react_development.useCallback;
	var react_development_19 = react_development.useContext;
	var react_development_20 = react_development.useDebugValue;
	var react_development_21 = react_development.useEffect;
	var react_development_22 = react_development.useImperativeHandle;
	var react_development_23 = react_development.useLayoutEffect;
	var react_development_24 = react_development.useMemo;
	var react_development_25 = react_development.useReducer;
	var react_development_26 = react_development.useRef;
	var react_development_27 = react_development.useState;
	var react_development_28 = react_development.version;

	var react = createCommonjsModule(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = react_production_min;
	} else {
	  module.exports = react_development;
	}
	});

	function e(e,t){return e(t={exports:{}},t.exports),t.exports
	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/}var t$1=Object.getOwnPropertySymbols,r$1=Object.prototype.hasOwnProperty,n$1=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var a=function(){try{if(!Object.assign)return !1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return !1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return !1;var n={};return "abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e;})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return !1}}()?Object.assign:function(e,a){for(var u,i,c=o(e),s=1;s<arguments.length;s++){for(var l in u=Object(arguments[s]))r$1.call(u,l)&&(c[l]=u[l]);if(t$1){i=t$1(u);for(var f=0;f<i.length;f++)n$1.call(u,i[f])&&(c[i[f]]=u[i[f]]);}}return c},u$1="function"==typeof Symbol&&Symbol.for,i=u$1?Symbol.for("react.element"):60103,c=u$1?Symbol.for("react.portal"):60106,s=u$1?Symbol.for("react.fragment"):60107,l=u$1?Symbol.for("react.strict_mode"):60108,f=u$1?Symbol.for("react.profiler"):60114,p$1=u$1?Symbol.for("react.provider"):60109,y$1=u$1?Symbol.for("react.context"):60110,d=u$1?Symbol.for("react.forward_ref"):60112,m=u$1?Symbol.for("react.suspense"):60113,v$1=u$1?Symbol.for("react.memo"):60115,h=u$1?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return "Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w$1={};function C$1(e,t,r){this.props=e,this.context=t,this.refs=w$1,this.updater=r||_;}function S$1(){}function k(e,t,r){this.props=e,this.context=t,this.refs=w$1,this.updater=r||_;}C$1.prototype.isReactComponent={},C$1.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState");},C$1.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate");},S$1.prototype=C$1.prototype;var R$1=k.prototype=new S$1;R$1.constructor=k,a(R$1,C$1.prototype),R$1.isPureReactComponent=!0;var O$1={current:null},E$1=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function x$1(e,t,r){var n,o={},a=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)E$1.call(t,n)&&!j.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];o.children=s;}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return {$$typeof:i,type:e,key:a,ref:u,props:o,_owner:O$1.current}}function P$1(e){return "object"==typeof e&&null!==e&&e.$$typeof===i}var $=/\/+/g,A$1=[];function N$1(e,t,r,n){if(A$1.length){var o=A$1.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return {result:e,keyPrefix:t,func:r,context:n,count:0}}function I$1(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A$1.length&&A$1.push(e);}function D$1(e,t,r){return null==e?0:function e(t,r,n,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var u=!1;if(null===t)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case i:case c:u=!0;}}if(u)return n(o,t,""===r?"."+T$1(t,0):r),1;if(u=0,r=""===r?".":r+":",Array.isArray(t))for(var s=0;s<t.length;s++){var l=r+T$1(a=t[s],s);u+=e(a,l,n,o);}else if(null===t||"object"!=typeof t?l=null:l="function"==typeof(l=b&&t[b]||t["@@iterator"])?l:null,"function"==typeof l)for(t=l.call(t),s=0;!(a=t.next()).done;)u+=e(a=a.value,l=r+T$1(a,s++),n,o);else if("object"===a)throw n=""+t,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return u}(e,"",t,r)}function T$1(e,t){return "object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return "$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F$1(e,t){e.func.call(e.context,t,e.count++);}function U$1(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?V$1(e,n,r,(function(e){return e})):null!=e&&(P$1(e)&&(e=function(e,t){return {$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+r)),n.push(e));}function V$1(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace($,"$&/")+"/"),D$1(e,U$1,t=N$1(t,a,n,o)),I$1(t);}var L$1={current:null};function z$1(){var e=L$1.current;if(null===e)throw Error(g(321));return e}var q$1={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return V$1(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;D$1(e,F$1,t=N$1(null,null,t,r)),I$1(t);},count:function(e){return D$1(e,(function(){return null}),null)},toArray:function(e){var t=[];return V$1(e,t,null,(function(e){return e})),t},only:function(e){if(!P$1(e))throw Error(g(143));return e}},Component:C$1,Fragment:s,Profiler:f,PureComponent:k,StrictMode:l,Suspense:m,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:L$1,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:O$1,IsSomeRendererActing:{current:!1},assign:a},cloneElement:function(e,t,r){if(null==e)throw Error(g(267,e));var n=a({},e.props),o=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=O$1.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)E$1.call(t,l)&&!j.hasOwnProperty(l)&&(n[l]=void 0===t[l]&&void 0!==s?s[l]:t[l]);}var l=arguments.length-2;if(1===l)n.children=r;else if(1<l){s=Array(l);for(var f=0;f<l;f++)s[f]=arguments[f+2];n.children=s;}return {$$typeof:i,type:e.type,key:o,ref:u,props:n,_owner:c}},createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:y$1,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p$1,_context:e},e.Consumer=e},createElement:x$1,createFactory:function(e){var t=x$1.bind(null,e);return t.type=e,t},createRef:function(){return {current:null}},forwardRef:function(e){return {$$typeof:d,render:e}},isValidElement:P$1,lazy:function(e){return {$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return {$$typeof:v$1,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return z$1().useCallback(e,t)},useContext:function(e,t){return z$1().useContext(e,t)},useDebugValue:function(){},useEffect:function(e,t){return z$1().useEffect(e,t)},useImperativeHandle:function(e,t,r){return z$1().useImperativeHandle(e,t,r)},useLayoutEffect:function(e,t){return z$1().useLayoutEffect(e,t)},useMemo:function(e,t){return z$1().useMemo(e,t)},useReducer:function(e,t,r){return z$1().useReducer(e,t,r)},useRef:function(e){return z$1().useRef(e)},useState:function(e){return z$1().useState(e)},version:"16.13.1"},M$1=function(){};if("production"!==process.env.NODE_ENV){var W$1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",B$1={},H$1=Function.call.bind(Object.prototype.hasOwnProperty);M$1=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}};}function Y$1(e,t,r,n,o){if("production"!==process.env.NODE_ENV)for(var a in e)if(H$1(e,a)){var u;try{if("function"!=typeof e[a]){var i=Error((n||"React class")+": "+r+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.");throw i.name="Invariant Violation",i}u=e[a](t,a,n,r,null,W$1);}catch(e){u=e;}if(!u||u instanceof Error||M$1((n||"React class")+": type specification of "+r+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in B$1)){B$1[u.message]=!0;var c=o?o():"";M$1("Failed "+r+" type: "+u.message+(null!=c?c:""));}}}Y$1.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(B$1={});};var J$1=Y$1,Z$1=e((function(e,t){"production"!==process.env.NODE_ENV&&function(){var e=a,r=J$1,n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,u=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,v=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,_=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119,C="function"==typeof Symbol&&Symbol.iterator;function S(e){if(null===e||"object"!=typeof e)return null;var t=C&&e[C]||e["@@iterator"];return "function"==typeof t?t:null}var k={current:null},R={current:null},O=/^(.*)[\\\/]/;function E(e){if(null==e)return null;if("number"==typeof e.tag&&N("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case i:return "Fragment";case u:return "Portal";case s:return "Profiler";case c:return "StrictMode";case d:return "Suspense";case m:return "SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case f:return "Context.Consumer";case l:return "Context.Provider";case y:return n=e,o=e.render,a="ForwardRef",p=o.displayName||o.name||"",n.displayName||(""!==p?a+"("+p+")":a);case v:return E(e.type);case b:return E(e.render);case h:var t=1===(r=e)._status?r._result:null;if(t)return E(t)}var r,n,o,a,p;return null}var j={},x=null;function P(e){x=e;}j.getCurrentStack=null,j.getStackAddendum=function(){var e="";if(x){var t=E(x.type),r=x._owner;e+=function(e,t,r){var n="";if(t){var o=t.fileName,a=o.replace(O,"");if(/^index\./.test(a)){var u=o.match(O);if(u){var i=u[1];if(i)a=i.replace(O,"")+"/"+a;}}n=" (at "+a+":"+t.lineNumber+")";}else r&&(n=" (created by "+r+")");return "\n    in "+(e||"Unknown")+n}(t,x._source,r&&E(r.type));}var n=j.getCurrentStack;return n&&(e+=n()||""),e};var $={ReactCurrentDispatcher:k,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:R,IsSomeRendererActing:{current:!1},assign:e};function A(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];I("warn",e,r);}function N(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];I("error",e,r);}function I(e,t,r){if(!(r.length>0&&"string"==typeof r[r.length-1]&&0===r[r.length-1].indexOf("\n    in"))){var n=$.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(t+="%s",r=r.concat([n]));}var o=r.map((function(e){return ""+e}));o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o);try{var a=0,u="Warning: "+t.replace(/%s/g,(function(){return r[a++]}));throw new Error(u)}catch(e){}}e($,{ReactDebugCurrentFrame:j,ReactComponentTreeHook:{}});var D={};function T(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||"ReactClass",o=n+"."+t;D[o]||(N("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,n),D[o]=!0);}var F={isMounted:function(e){return !1},enqueueForceUpdate:function(e,t,r){T(e,"forceUpdate");},enqueueReplaceState:function(e,t,r,n){T(e,"replaceState");},enqueueSetState:function(e,t,r,n){T(e,"setState");}},U={};function V(e,t,r){this.props=e,this.context=t,this.refs=U,this.updater=r||F;}Object.freeze(U),V.prototype.isReactComponent={},V.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState");},V.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate");};var L={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},z=function(e,t){Object.defineProperty(V.prototype,e,{get:function(){A("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1]);}});};for(var q in L)L.hasOwnProperty(q)&&z(q,L[q]);function M(){}function W(e,t,r){this.props=e,this.context=t,this.refs=U,this.updater=r||F;}M.prototype=V.prototype;var B=W.prototype=new M;B.constructor=W,e(B,V.prototype),B.isPureReactComponent=!0;var H,Y,Z,X=Object.prototype.hasOwnProperty,G={key:!0,ref:!0,__self:!0,__source:!0};function K(e){if(X.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return !1}return void 0!==e.ref}function Q(e){if(X.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return !1}return void 0!==e.key}function ee(e,t){var r=function(){H||(H=!0,N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t));};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0});}function te(e,t){var r=function(){Y||(Y=!0,N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t));};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0});}function re(e){if("string"==typeof e.ref&&R.current&&e.__self&&R.current.stateNode!==e.__self){var t=E(R.current.type);Z[t]||(N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref',E(R.current.type),e.ref),Z[t]=!0);}}Z={};var ne=function(e,t,r,n,a,u,i){var c={$$typeof:o,type:e,key:t,ref:r,props:i,_owner:u,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function oe(e,t,r){var n,o={},a=null,u=null,i=null,c=null;if(null!=t)for(n in K(t)&&(u=t.ref,re(t)),Q(t)&&(a=""+t.key),i=void 0===t.__self?null:t.__self,c=void 0===t.__source?null:t.__source,t)X.call(t,n)&&!G.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(s>1){for(var l=Array(s),f=0;f<s;f++)l[f]=arguments[f+2];Object.freeze&&Object.freeze(l),o.children=l;}if(e&&e.defaultProps){var p=e.defaultProps;for(n in p)void 0===o[n]&&(o[n]=p[n]);}if(a||u){var y="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&ee(o,y),u&&te(o,y);}return ne(e,a,u,i,c,R.current,o)}function ae(t,r,n){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o,a,u=e({},t.props),i=t.key,c=t.ref,s=t._self,l=t._source,f=t._owner;if(null!=r)for(o in K(r)&&(c=r.ref,f=R.current),Q(r)&&(i=""+r.key),t.type&&t.type.defaultProps&&(a=t.type.defaultProps),r)X.call(r,o)&&!G.hasOwnProperty(o)&&(void 0===r[o]&&void 0!==a?u[o]=a[o]:u[o]=r[o]);var p=arguments.length-2;if(1===p)u.children=n;else if(p>1){for(var y=Array(p),d=0;d<p;d++)y[d]=arguments[d+2];u.children=y;}return ne(t.type,i,c,s,l,f,u)}function ue(e){return "object"==typeof e&&null!==e&&e.$$typeof===o}var ie=!1,ce=/\/+/g;function se(e){return (""+e).replace(ce,"$&/")}var le,fe=[];function pe(e,t,r,n){if(fe.length){var o=fe.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return {result:e,keyPrefix:t,func:r,context:n,count:0}}function ye(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,fe.length<10&&fe.push(e);}function de(e,t,r){return null==e?0:function e(t,r,n,a){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var c,s=!1;if(null===t)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case o:case u:s=!0;}}if(s)return n(a,t,""===r?"."+me(t,0):r),1;var l=0,f=""===r?".":r+":";if(Array.isArray(t))for(var p=0;p<t.length;p++)l+=e(c=t[p],f+me(c,p),n,a);else {var y=S(t);if("function"==typeof y){y===t.entries&&(ie||A("Using Maps as children is deprecated and will be removed in a future major release. Consider converting children to an array of keyed ReactElements instead."),ie=!0);for(var d,m=y.call(t),v=0;!(d=m.next()).done;)l+=e(c=d.value,f+me(c,v++),n,a);}else if("object"===i){var h;h=" If you meant to render a collection of children, use an array instead."+j.getStackAddendum();var b=""+t;throw Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(t).join(", ")+"}":b)+")."+h)}}return l}(e,"",t,r)}function me(e,t){return "object"==typeof e&&null!==e&&null!=e.key?(r=e.key,n={"=":"=0",":":"=2"},"$"+(""+r).replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);var r,n;}function ve(e,t,r){var n=e.func,o=e.context;n.call(o,t,e.count++);}function he(e,t,r){var n,o,a=e.result,u=e.keyPrefix,i=e.func,c=e.context,s=i.call(c,t,e.count++);Array.isArray(s)?be(s,a,r,(function(e){return e})):null!=s&&(ue(s)&&(n=s,o=u+(!s.key||t&&t.key===s.key?"":se(s.key)+"/")+r,s=ne(n.type,o,n.ref,n._self,n._source,n._owner,n.props)),a.push(s));}function be(e,t,r,n,o){var a="";null!=r&&(a=se(r)+"/");var u=pe(t,a,n,o);de(e,he,u),ye(u);}function ge(e){return "string"==typeof e||"function"==typeof e||e===i||e===p||e===s||e===c||e===d||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===v||e.$$typeof===l||e.$$typeof===f||e.$$typeof===y||e.$$typeof===g||e.$$typeof===_||e.$$typeof===w||e.$$typeof===b)}function _e(){var e=k.current;if(null===e)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");return e}function we(){if(R.current){var e=E(R.current.type);if(e)return "\n\nCheck the render method of `"+e+"`."}return ""}function Ce(e){return null!=e&&void 0!==(t=e.__source)?"\n\nCheck your code at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+".":"";var t;}le=!1;var Se={};function ke(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=we();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.");}return t}(t);if(!Se[r]){Se[r]=!0;var n="";e&&e._owner&&e._owner!==R.current&&(n=" It was passed a child from "+E(e._owner.type)+"."),P(e),N('Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.',r,n),P(null);}}}function Re(e,t){if("object"==typeof e)if(Array.isArray(e))for(var r=0;r<e.length;r++){var n=e[r];ue(n)&&ke(n,t);}else if(ue(e))e._store&&(e._store.validated=!0);else if(e){var o=S(e);if("function"==typeof o&&o!==e.entries)for(var a,u=o.call(e);!(a=u.next()).done;)ue(a.value)&&ke(a.value,t);}}function Oe(e){var t=e.type;if(null!=t&&"string"!=typeof t){var n,o=E(t);if("function"==typeof t)n=t.propTypes;else {if("object"!=typeof t||t.$$typeof!==y&&t.$$typeof!==v)return;n=t.propTypes;}n?(P(e),r(n,e.props,"prop",o,j.getStackAddendum),P(null)):void 0===t.PropTypes||le||(le=!0,N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")),"function"!=typeof t.getDefaultProps||t.getDefaultProps.isReactClassApproved||N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");}}function Ee(e){P(e);for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n);break}}null!==e.ref&&N("Invalid attribute `ref` supplied to `React.Fragment`."),P(null);}function je(e,t,r){var n=ge(e);if(!n){var a="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var u,c=Ce(t);a+=c||we(),null===e?u="null":Array.isArray(e)?u="array":void 0!==e&&e.$$typeof===o?(u="<"+(E(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):u=typeof e,N("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",u,a);}var s=oe.apply(this,arguments);if(null==s)return s;if(n)for(var l=2;l<arguments.length;l++)Re(arguments[l],e);return e===i?Ee(s):Oe(s),s}var xe=!1;try{var Pe=Object.freeze({}),$e=new Map([[Pe,null]]),Ae=new Set([Pe]);$e.set(0,0),Ae.add(0);}catch(e){}var Ne=je,Ie=function(e,t,r){for(var n=ae.apply(this,arguments),o=2;o<arguments.length;o++)Re(arguments[o],n.type);return Oe(n),n},De=function(e){var t=je.bind(null,e);return t.type=e,xe||(xe=!0,A("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return A("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},Te={map:function(e,t,r){if(null==e)return e;var n=[];return be(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;var n=pe(null,null,t,r);de(e,ve,n),ye(n);},count:function(e){return de(e,(function(){return null}),null)},toArray:function(e){var t=[];return be(e,t,null,(function(e){return e})),t},only:function(e){if(!ue(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Children=Te,t.Component=V,t.Fragment=i,t.Profiler=s,t.PureComponent=W,t.StrictMode=c,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=Ie,t.createContext=function(e,t){void 0===t?t=null:null!==t&&"function"!=typeof t&&N("createContext: Expected the optional second argument to be a function. Instead received: %s",t);var r={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null};r.Provider={$$typeof:l,_context:r};var n=!1,o=!1,a={$$typeof:f,_context:r,_calculateChangedBits:r._calculateChangedBits};return Object.defineProperties(a,{Provider:{get:function(){return o||(o=!0,N("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),r.Provider},set:function(e){r.Provider=e;}},_currentValue:{get:function(){return r._currentValue},set:function(e){r._currentValue=e;}},_currentValue2:{get:function(){return r._currentValue2},set:function(e){r._currentValue2=e;}},_threadCount:{get:function(){return r._threadCount},set:function(e){r._threadCount=e;}},Consumer:{get:function(){return n||(n=!0,N("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),r.Consumer}}}),r.Consumer=a,r._currentRenderer=null,r._currentRenderer2=null,r},t.createElement=Ne,t.createFactory=De,t.createRef=function(){var e={current:null};return Object.seal(e),e},t.forwardRef=function(e){return null!=e&&e.$$typeof===v?N("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?N("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&N("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||N("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?")),{$$typeof:y,render:e}},t.isValidElement=ue,t.lazy=function(e){var t,r,n={$$typeof:h,_ctor:e,_status:-1,_result:null};return Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){N("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,Object.defineProperty(n,"defaultProps",{enumerable:!0});}},propTypes:{configurable:!0,get:function(){return r},set:function(e){N("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(n,"propTypes",{enumerable:!0});}}}),n},t.memo=function(e,t){return ge(e)||N("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e),{$$typeof:v,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return _e().useCallback(e,t)},t.useContext=function(e,t){var r=_e();if(void 0!==t&&N("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s",t,"number"==typeof t&&Array.isArray(arguments[2])?"\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks":""),void 0!==e._context){var n=e._context;n.Consumer===e?N("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):n.Provider===e&&N("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");}return r.useContext(e,t)},t.useDebugValue=function(e,t){return _e().useDebugValue(e,t)},t.useEffect=function(e,t){return _e().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return _e().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return _e().useLayoutEffect(e,t)},t.useMemo=function(e,t){return _e().useMemo(e,t)},t.useReducer=function(e,t,r){return _e().useReducer(e,t,r)},t.useRef=function(e){return _e().useRef(e)},t.useState=function(e){return _e().useState(e)},t.version="16.13.1";}();})),X$1=(Z$1.Children,Z$1.Component,Z$1.Fragment,Z$1.Profiler,Z$1.PureComponent,Z$1.StrictMode,Z$1.Suspense,Z$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z$1.cloneElement,Z$1.createContext,Z$1.createElement,Z$1.createFactory,Z$1.createRef,Z$1.forwardRef,Z$1.isValidElement,Z$1.lazy,Z$1.memo,Z$1.useCallback,Z$1.useContext,Z$1.useDebugValue,Z$1.useEffect,Z$1.useImperativeHandle,Z$1.useLayoutEffect,Z$1.useMemo,Z$1.useReducer,Z$1.useRef,Z$1.useState,Z$1.version,e((function(e){"production"===process.env.NODE_ENV?e.exports=q$1:e.exports=Z$1;})));const G$1=/-(\w|$)/g,K$1=(e,t)=>t.toUpperCase();var Q$1=e=>"float"===(e=e.toLowerCase())?"cssFloat":e.startsWith("-ms-")?e.substr(1).replace(G$1,K$1):e.replace(G$1,K$1);var ee=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([a-z])([0-9])/g,"$1-$2").toLowerCase(),te=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,re=/\n/g,ne=/^\s*/,oe=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,ae=/^:\s*/,ue=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,ie=/^[;\s]*/,ce=/^\s+|\s+$/g;function se(e){return e?e.replace(ce,""):""}var le=function(e,t){var r,n=null;if(!e||"string"!=typeof e)return n;for(var o,a,u=function(e,t){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(!e)return [];t=t||{};var r=1,n=1;function o(e){var t=e.match(re);t&&(r+=t.length);var o=e.lastIndexOf("\n");n=~o?e.length-o:n+e.length;}function a(){var e={line:r,column:n};return function(t){return t.position=new u(e),s(),t}}function u(e){this.start=e,this.end={line:r,column:n},this.source=t.source;}function i(o){var a=new Error(t.source+":"+r+":"+n+": "+o);if(a.reason=o,a.filename=t.source,a.line=r,a.column=n,a.source=e,!t.silent)throw a}function c(t){var r=t.exec(e);if(r){var n=r[0];return o(n),e=e.slice(n.length),r}}function s(){c(ne);}function l(e){var t;for(e=e||[];t=f();)!1!==t&&e.push(t);return e}function f(){var t=a();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var r=2;""!=e.charAt(r)&&("*"!=e.charAt(r)||"/"!=e.charAt(r+1));)++r;if(r+=2,""===e.charAt(r-1))return i("End of comment missing");var u=e.slice(2,r-2);return n+=2,o(u),e=e.slice(r),n+=2,t({type:"comment",comment:u})}}function p(){var e=a(),t=c(oe);if(t){if(f(),!c(ae))return i("property missing ':'");var r=c(ue),n=e({type:"declaration",property:se(t[0].replace(te,"")),value:r?se(r[0].replace(te,"")):""});return c(ie),n}}return u.prototype.content=e,s(),function(){var e,t=[];for(l(t);e=p();)!1!==e&&(t.push(e),l(t));return t}()}(e),i="function"==typeof t,c=0,s=u.length;c<s;c++)o=(r=u[c]).property,a=r.value,i?t(o,a,r):a&&(n||(n={}),n[o]=a);return n};const fe=/^(aria[A-Z])|(data[A-Z])/;function pe(e){return "string"==typeof e.style&&(e.style=function(e){let t={};return le(e,(e,r)=>{t[Q$1(e)]=r;}),t}(e.style)),e.class&&(e.className=e.class,delete e.class),Object.entries(e).reduce((e,[t,r])=>({...e,[fe.test(t)?ee(t):t]:r}),{})}function ye(e,{props:t={},h:r,Fragment:n,components:o}){return function e(t){null!=t.properties&&(t.properties=pe(t.properties));switch(t.type){case"jsx":return function e(t,n){const{children:a,...u}=n||{};return r(function(e){return o[e]||e}(t),pe(u),...a?a.map(t=>e(t.tagName,t.props)):[])}(t.value.tagName,t.value.props);case"text":return t.value;case"element":return r(t.tagName,t.properties,...t.children.map(e));case"root":{const o=[];for(const e of t.children)if("import"!==e.type)if("export"!==e.type)o.push(e);else if(e.default)continue;return r("div",{},...o.map((t,r)=>X$1.createElement(n,{key:r},e(t))))}default:throw new Error(`unknown node: ${t.type}`)}}(e)}

	var Test2 = (props) => {
	          const options = { props, h: react.createElement, Fragment: react.Fragment, components: {  }};
	          return ye({"type":"root","children":[{"type":"element","tagName":"h1","properties":{},"children":[{"type":"text","value":"Test2","position":{"start":{"line":1,"column":3,"offset":2},"end":{"line":1,"column":8,"offset":7}}}],"position":{"start":{"line":1,"column":1,"offset":0},"end":{"line":1,"column":8,"offset":7}}}],"position":{"start":{"line":1,"column":1,"offset":0},"end":{"line":2,"column":1,"offset":8}}}, options);
	        };

	var Test = (props) => {
	          const options = { props, h: react.createElement, Fragment: react.Fragment, components: { Test2 }};
	          return ye({"type":"root","children":[{"type":"element","tagName":"h1","properties":{},"children":[{"type":"text","value":"Hello","position":{"start":{"line":3,"column":3,"offset":38},"end":{"line":3,"column":8,"offset":43}}}],"position":{"start":{"line":3,"column":1,"offset":36},"end":{"line":3,"column":8,"offset":43}}},{"type":"text","value":"\n"},{"type":"element","tagName":"p","properties":{},"children":[{"type":"text","value":"heollo","position":{"start":{"line":5,"column":1,"offset":45},"end":{"line":5,"column":7,"offset":51}}}],"position":{"start":{"line":5,"column":1,"offset":45},"end":{"line":5,"column":7,"offset":51}}},{"type":"text","value":"\n"},{"type":"jsx","value":{"tagName":"Test2","props":{}},"position":{"start":{"line":7,"column":1,"offset":53},"end":{"line":7,"column":10,"offset":62},"indent":[]}}],"position":{"start":{"line":1,"column":1,"offset":0},"end":{"line":8,"column":1,"offset":63}}}, options);
	        };

	var domain;

	// This constructor is used to store event handlers. Instantiating this is
	// faster than explicitly calling `Object.create(null)` to get a "clean" empty
	// object (tested with v8 v4.9).
	function EventHandlers() {}
	EventHandlers.prototype = Object.create(null);

	function EventEmitter() {
	  EventEmitter.init.call(this);
	}

	// nodejs oddity
	// require('events') === require('events').EventEmitter
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.usingDomains = false;

	EventEmitter.prototype.domain = undefined;
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	EventEmitter.init = function() {
	  this.domain = null;
	  if (EventEmitter.usingDomains) {
	    // if there is an active domain, then attach to it.
	    if (domain.active ) ;
	  }

	  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
	    this._events = new EventHandlers();
	    this._eventsCount = 0;
	  }

	  this._maxListeners = this._maxListeners || undefined;
	};

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
	  if (typeof n !== 'number' || n < 0 || isNaN(n))
	    throw new TypeError('"n" argument must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	function $getMaxListeners(that) {
	  if (that._maxListeners === undefined)
	    return EventEmitter.defaultMaxListeners;
	  return that._maxListeners;
	}

	EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
	  return $getMaxListeners(this);
	};

	// These standalone emit* functions are used to optimize calling of event
	// handlers for fast cases because emit() itself often has a variable number of
	// arguments and can be deoptimized because of that. These functions always have
	// the same number of arguments and thus do not get deoptimized, so the code
	// inside them can execute faster.
	function emitNone(handler, isFn, self) {
	  if (isFn)
	    handler.call(self);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self);
	  }
	}
	function emitOne(handler, isFn, self, arg1) {
	  if (isFn)
	    handler.call(self, arg1);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1);
	  }
	}
	function emitTwo(handler, isFn, self, arg1, arg2) {
	  if (isFn)
	    handler.call(self, arg1, arg2);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1, arg2);
	  }
	}
	function emitThree(handler, isFn, self, arg1, arg2, arg3) {
	  if (isFn)
	    handler.call(self, arg1, arg2, arg3);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1, arg2, arg3);
	  }
	}

	function emitMany(handler, isFn, self, args) {
	  if (isFn)
	    handler.apply(self, args);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].apply(self, args);
	  }
	}

	EventEmitter.prototype.emit = function emit(type) {
	  var er, handler, len, args, i, events, domain;
	  var doError = (type === 'error');

	  events = this._events;
	  if (events)
	    doError = (doError && events.error == null);
	  else if (!doError)
	    return false;

	  domain = this.domain;

	  // If there is no 'error' event listener then throw.
	  if (doError) {
	    er = arguments[1];
	    if (domain) {
	      if (!er)
	        er = new Error('Uncaught, unspecified "error" event');
	      er.domainEmitter = this;
	      er.domain = domain;
	      er.domainThrown = false;
	      domain.emit('error', er);
	    } else if (er instanceof Error) {
	      throw er; // Unhandled 'error' event
	    } else {
	      // At least give some kind of context to the user
	      var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	      err.context = er;
	      throw err;
	    }
	    return false;
	  }

	  handler = events[type];

	  if (!handler)
	    return false;

	  var isFn = typeof handler === 'function';
	  len = arguments.length;
	  switch (len) {
	    // fast cases
	    case 1:
	      emitNone(handler, isFn, this);
	      break;
	    case 2:
	      emitOne(handler, isFn, this, arguments[1]);
	      break;
	    case 3:
	      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
	      break;
	    case 4:
	      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
	      break;
	    // slower
	    default:
	      args = new Array(len - 1);
	      for (i = 1; i < len; i++)
	        args[i - 1] = arguments[i];
	      emitMany(handler, isFn, this, args);
	  }

	  return true;
	};

	function _addListener(target, type, listener, prepend) {
	  var m;
	  var events;
	  var existing;

	  if (typeof listener !== 'function')
	    throw new TypeError('"listener" argument must be a function');

	  events = target._events;
	  if (!events) {
	    events = target._events = new EventHandlers();
	    target._eventsCount = 0;
	  } else {
	    // To avoid recursion in the case that type === "newListener"! Before
	    // adding it to the listeners, first emit "newListener".
	    if (events.newListener) {
	      target.emit('newListener', type,
	                  listener.listener ? listener.listener : listener);

	      // Re-assign `events` because a newListener handler could have caused the
	      // this._events to be assigned to a new object
	      events = target._events;
	    }
	    existing = events[type];
	  }

	  if (!existing) {
	    // Optimize the case of one listener. Don't need the extra array object.
	    existing = events[type] = listener;
	    ++target._eventsCount;
	  } else {
	    if (typeof existing === 'function') {
	      // Adding the second element, need to change to array.
	      existing = events[type] = prepend ? [listener, existing] :
	                                          [existing, listener];
	    } else {
	      // If we've already got an array, just append.
	      if (prepend) {
	        existing.unshift(listener);
	      } else {
	        existing.push(listener);
	      }
	    }

	    // Check for listener leak
	    if (!existing.warned) {
	      m = $getMaxListeners(target);
	      if (m && m > 0 && existing.length > m) {
	        existing.warned = true;
	        var w = new Error('Possible EventEmitter memory leak detected. ' +
	                            existing.length + ' ' + type + ' listeners added. ' +
	                            'Use emitter.setMaxListeners() to increase limit');
	        w.name = 'MaxListenersExceededWarning';
	        w.emitter = target;
	        w.type = type;
	        w.count = existing.length;
	        emitWarning(w);
	      }
	    }
	  }

	  return target;
	}
	function emitWarning(e) {
	  typeof console.warn === 'function' ? console.warn(e) : console.log(e);
	}
	EventEmitter.prototype.addListener = function addListener(type, listener) {
	  return _addListener(this, type, listener, false);
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.prependListener =
	    function prependListener(type, listener) {
	      return _addListener(this, type, listener, true);
	    };

	function _onceWrap(target, type, listener) {
	  var fired = false;
	  function g() {
	    target.removeListener(type, g);
	    if (!fired) {
	      fired = true;
	      listener.apply(target, arguments);
	    }
	  }
	  g.listener = listener;
	  return g;
	}

	EventEmitter.prototype.once = function once(type, listener) {
	  if (typeof listener !== 'function')
	    throw new TypeError('"listener" argument must be a function');
	  this.on(type, _onceWrap(this, type, listener));
	  return this;
	};

	EventEmitter.prototype.prependOnceListener =
	    function prependOnceListener(type, listener) {
	      if (typeof listener !== 'function')
	        throw new TypeError('"listener" argument must be a function');
	      this.prependListener(type, _onceWrap(this, type, listener));
	      return this;
	    };

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener =
	    function removeListener(type, listener) {
	      var list, events, position, i, originalListener;

	      if (typeof listener !== 'function')
	        throw new TypeError('"listener" argument must be a function');

	      events = this._events;
	      if (!events)
	        return this;

	      list = events[type];
	      if (!list)
	        return this;

	      if (list === listener || (list.listener && list.listener === listener)) {
	        if (--this._eventsCount === 0)
	          this._events = new EventHandlers();
	        else {
	          delete events[type];
	          if (events.removeListener)
	            this.emit('removeListener', type, list.listener || listener);
	        }
	      } else if (typeof list !== 'function') {
	        position = -1;

	        for (i = list.length; i-- > 0;) {
	          if (list[i] === listener ||
	              (list[i].listener && list[i].listener === listener)) {
	            originalListener = list[i].listener;
	            position = i;
	            break;
	          }
	        }

	        if (position < 0)
	          return this;

	        if (list.length === 1) {
	          list[0] = undefined;
	          if (--this._eventsCount === 0) {
	            this._events = new EventHandlers();
	            return this;
	          } else {
	            delete events[type];
	          }
	        } else {
	          spliceOne(list, position);
	        }

	        if (events.removeListener)
	          this.emit('removeListener', type, originalListener || listener);
	      }

	      return this;
	    };

	EventEmitter.prototype.removeAllListeners =
	    function removeAllListeners(type) {
	      var listeners, events;

	      events = this._events;
	      if (!events)
	        return this;

	      // not listening for removeListener, no need to emit
	      if (!events.removeListener) {
	        if (arguments.length === 0) {
	          this._events = new EventHandlers();
	          this._eventsCount = 0;
	        } else if (events[type]) {
	          if (--this._eventsCount === 0)
	            this._events = new EventHandlers();
	          else
	            delete events[type];
	        }
	        return this;
	      }

	      // emit removeListener for all listeners on all events
	      if (arguments.length === 0) {
	        var keys = Object.keys(events);
	        for (var i = 0, key; i < keys.length; ++i) {
	          key = keys[i];
	          if (key === 'removeListener') continue;
	          this.removeAllListeners(key);
	        }
	        this.removeAllListeners('removeListener');
	        this._events = new EventHandlers();
	        this._eventsCount = 0;
	        return this;
	      }

	      listeners = events[type];

	      if (typeof listeners === 'function') {
	        this.removeListener(type, listeners);
	      } else if (listeners) {
	        // LIFO order
	        do {
	          this.removeListener(type, listeners[listeners.length - 1]);
	        } while (listeners[0]);
	      }

	      return this;
	    };

	EventEmitter.prototype.listeners = function listeners(type) {
	  var evlistener;
	  var ret;
	  var events = this._events;

	  if (!events)
	    ret = [];
	  else {
	    evlistener = events[type];
	    if (!evlistener)
	      ret = [];
	    else if (typeof evlistener === 'function')
	      ret = [evlistener.listener || evlistener];
	    else
	      ret = unwrapListeners(evlistener);
	  }

	  return ret;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  if (typeof emitter.listenerCount === 'function') {
	    return emitter.listenerCount(type);
	  } else {
	    return listenerCount.call(emitter, type);
	  }
	};

	EventEmitter.prototype.listenerCount = listenerCount;
	function listenerCount(type) {
	  var events = this._events;

	  if (events) {
	    var evlistener = events[type];

	    if (typeof evlistener === 'function') {
	      return 1;
	    } else if (evlistener) {
	      return evlistener.length;
	    }
	  }

	  return 0;
	}

	EventEmitter.prototype.eventNames = function eventNames() {
	  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
	};

	// About 1.5x faster than the two-arg version of Array#splice().
	function spliceOne(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
	    list[i] = list[k];
	  list.pop();
	}

	function arrayClone(arr, i) {
	  var copy = new Array(i);
	  while (i--)
	    copy[i] = arr[i];
	  return copy;
	}

	function unwrapListeners(arr) {
	  var ret = new Array(arr.length);
	  for (var i = 0; i < ret.length; ++i) {
	    ret[i] = arr[i].listener || arr[i];
	  }
	  return ret;
	}

	// shim for using process in browser
	// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	var cachedSetTimeout = defaultSetTimout;
	var cachedClearTimeout = defaultClearTimeout;
	if (typeof global.setTimeout === 'function') {
	    cachedSetTimeout = setTimeout;
	}
	if (typeof global.clearTimeout === 'function') {
	    cachedClearTimeout = clearTimeout;
	}

	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	function nextTick(fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	}
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};

	var inherits;
	if (typeof Object.create === 'function'){
	  inherits = function inherits(ctor, superCtor) {
	    // implementation from standard node.js 'util' module
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  inherits = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    var TempCtor = function () {};
	    TempCtor.prototype = superCtor.prototype;
	    ctor.prototype = new TempCtor();
	    ctor.prototype.constructor = ctor;
	  };
	}
	var inherits$1 = inherits;

	// Copyright Joyent, Inc. and other Node contributors.
	var formatRegExp = /%[sdj%]/g;
	function format(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	}

	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	function deprecate(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	}

	var debugs = {};
	var debugEnviron;
	function debuglog(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron =  '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = 0;
	      debugs[set] = function() {
	        var msg = format.apply(null, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	}

	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    _extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}

	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty$1(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty$1(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var length = output.reduce(function(prev, cur) {
	    if (cur.indexOf('\n') >= 0) ;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}

	function isNull(arg) {
	  return arg === null;
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isString(arg) {
	  return typeof arg === 'string';
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}

	function _extend(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	}
	function hasOwnProperty$1(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
	var inited = false;
	function init () {
	  inited = true;
	  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	  for (var i = 0, len = code.length; i < len; ++i) {
	    lookup[i] = code[i];
	    revLookup[code.charCodeAt(i)] = i;
	  }

	  revLookup['-'.charCodeAt(0)] = 62;
	  revLookup['_'.charCodeAt(0)] = 63;
	}

	function toByteArray (b64) {
	  if (!inited) {
	    init();
	  }
	  var i, j, l, tmp, placeHolders, arr;
	  var len = b64.length;

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

	  // base64 is 4/3 + up to two characters of the original data
	  arr = new Arr(len * 3 / 4 - placeHolders);

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len;

	  var L = 0;

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
	    arr[L++] = (tmp >> 16) & 0xFF;
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
	    arr[L++] = tmp & 0xFF;
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  if (!inited) {
	    init();
	  }
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var output = '';
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    output += lookup[tmp >> 2];
	    output += lookup[(tmp << 4) & 0x3F];
	    output += '==';
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
	    output += lookup[tmp >> 10];
	    output += lookup[(tmp >> 4) & 0x3F];
	    output += lookup[(tmp << 2) & 0x3F];
	    output += '=';
	  }

	  parts.push(output);

	  return parts.join('')
	}

	function read (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? (nBytes - 1) : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];

	  i += d;

	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	function write (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
	  var i = isLE ? 0 : (nBytes - 1);
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128;
	}

	var toString = {}.toString;

	var isArray$1 = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */

	var INSPECT_MAX_BYTES = 50;

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer$1.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : true;

	function kMaxLength () {
	  return Buffer$1.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length);
	    that.__proto__ = Buffer$1.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer$1(length);
	    }
	    that.length = length;
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer$1 (arg, encodingOrOffset, length) {
	  if (!Buffer$1.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer$1)) {
	    return new Buffer$1(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer$1.poolSize = 8192; // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer$1._augment = function (arr) {
	  arr.__proto__ = Buffer$1.prototype;
	  return arr
	};

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer$1.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	};

	if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	  Buffer$1.prototype.__proto__ = Uint8Array.prototype;
	  Buffer$1.__proto__ = Uint8Array;
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer$1.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	};

	function allocUnsafe (that, size) {
	  assertSize(size);
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
	  if (!Buffer$1.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0;
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer$1.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	};
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer$1.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	};

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }

	  if (!Buffer$1.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0;
	  that = createBuffer(that, length);

	  var actual = that.write(string, encoding);

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual);
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
	  that = createBuffer(that, length);
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255;
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array);
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset);
	  } else {
	    array = new Uint8Array(array, byteOffset, length);
	  }

	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array;
	    that.__proto__ = Buffer$1.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array);
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (internalIsBuffer(obj)) {
	    var len = checked(obj.length) | 0;
	    that = createBuffer(that, len);

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len);
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray$1(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	Buffer$1.isBuffer = isBuffer;
	function internalIsBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer$1.compare = function compare (a, b) {
	  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length;
	  var y = b.length;

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	Buffer$1.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	};

	Buffer$1.concat = function concat (list, length) {
	  if (!isArray$1(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer$1.alloc(0)
	  }

	  var i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }

	  var buffer = Buffer$1.allocUnsafe(length);
	  var pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i];
	    if (!internalIsBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer
	};

	function byteLength (string, encoding) {
	  if (internalIsBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string;
	  }

	  var len = string.length;
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer$1.byteLength = byteLength;

	function slowToString (encoding, start, end) {
	  var loweredCase = false;

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0;
	  start >>>= 0;

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8';

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer$1.prototype._isBuffer = true;

	function swap (b, n, m) {
	  var i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}

	Buffer$1.prototype.swap16 = function swap16 () {
	  var len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this
	};

	Buffer$1.prototype.swap32 = function swap32 () {
	  var len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this
	};

	Buffer$1.prototype.swap64 = function swap64 () {
	  var len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this
	};

	Buffer$1.prototype.toString = function toString () {
	  var length = this.length | 0;
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	};

	Buffer$1.prototype.equals = function equals (b) {
	  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer$1.compare(this, b) === 0
	};

	Buffer$1.prototype.inspect = function inspect () {
	  var str = '';
	  var max = INSPECT_MAX_BYTES;
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	    if (this.length > max) str += ' ... ';
	  }
	  return '<Buffer ' + str + '>'
	};

	Buffer$1.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!internalIsBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0;
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0;
	  }
	  if (thisStart === undefined) {
	    thisStart = 0;
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length;
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;

	  if (this === target) return 0

	  var x = thisEnd - thisStart;
	  var y = end - start;
	  var len = Math.min(x, y);

	  var thisCopy = this.slice(thisStart, thisEnd);
	  var targetCopy = target.slice(start, end);

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset;  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1);
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer$1.from(val, encoding);
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (internalIsBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF; // Search for a byte value [0-255]
	    if (Buffer$1.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1;
	  var arrLength = arr.length;
	  var valLength = val.length;

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i;
	  if (dir) {
	    var foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex;
	        foundIndex = -1;
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true;
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false;
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer$1.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	};

	Buffer$1.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	};

	Buffer$1.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	};

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0;
	  var remaining = buf.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = Number(length);
	    if (length > remaining) {
	      length = remaining;
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length;
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed;
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer$1.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0;
	    if (isFinite(length)) {
	      length = length | 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8';

	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};

	Buffer$1.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	};

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return fromByteArray(buf)
	  } else {
	    return fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end);
	  var res = [];

	  var i = start;
	  while (i < end) {
	    var firstByte = buf[i];
	    var codePoint = null;
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1;

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint;

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint;
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD;
	      bytesPerSequence = 1;
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000;
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	      codePoint = 0xDC00 | codePoint & 0x3FF;
	    }

	    res.push(codePoint);
	    i += bytesPerSequence;
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000;

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = '';
	  var i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    );
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length;

	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;

	  var out = '';
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i]);
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end);
	  var res = '';
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
	  }
	  return res
	}

	Buffer$1.prototype.slice = function slice (start, end) {
	  var len = this.length;
	  start = ~~start;
	  end = end === undefined ? len : ~~end;

	  if (start < 0) {
	    start += len;
	    if (start < 0) start = 0;
	  } else if (start > len) {
	    start = len;
	  }

	  if (end < 0) {
	    end += len;
	    if (end < 0) end = 0;
	  } else if (end > len) {
	    end = len;
	  }

	  if (end < start) end = start;

	  var newBuf;
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end);
	    newBuf.__proto__ = Buffer$1.prototype;
	  } else {
	    var sliceLen = end - start;
	    newBuf = new Buffer$1(sliceLen, undefined);
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start];
	    }
	  }

	  return newBuf
	};

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer$1.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }

	  return val
	};

	Buffer$1.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }

	  var val = this[offset + --byteLength];
	  var mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }

	  return val
	};

	Buffer$1.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset]
	};

	Buffer$1.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | (this[offset + 1] << 8)
	};

	Buffer$1.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return (this[offset] << 8) | this[offset + 1]
	};

	Buffer$1.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	};

	Buffer$1.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	};

	Buffer$1.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer$1.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var i = byteLength;
	  var mul = 1;
	  var val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer$1.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	};

	Buffer$1.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset] | (this[offset + 1] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer$1.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset + 1] | (this[offset] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer$1.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	};

	Buffer$1.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	};

	Buffer$1.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, true, 23, 4)
	};

	Buffer$1.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, false, 23, 4)
	};

	Buffer$1.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, true, 52, 8)
	};

	Buffer$1.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, false, 52, 8)
	};

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer$1.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var mul = 1;
	  var i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer$1.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer$1.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  if (!Buffer$1.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8;
	  }
	}

	Buffer$1.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};

	Buffer$1.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
	  }
	}

	Buffer$1.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 1] = (value >>> 8);
	    this[offset] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};

	Buffer$1.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};

	Buffer$1.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = 0;
	  var mul = 1;
	  var sub = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer$1.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  var sub = 0;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer$1.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (!Buffer$1.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	Buffer$1.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};

	Buffer$1.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};

	Buffer$1.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 3] = (value >>> 24);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};

	Buffer$1.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4);
	  }
	  write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4
	}

	Buffer$1.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	};

	Buffer$1.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	};

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8);
	  }
	  write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8
	}

	Buffer$1.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	};

	Buffer$1.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	};

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer$1.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }

	  var len = end - start;
	  var i;

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else if (len < 1000 || !Buffer$1.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    );
	  }

	  return len
	};

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer$1.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start;
	      start = 0;
	      end = this.length;
	    } else if (typeof end === 'string') {
	      encoding = end;
	      end = this.length;
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0);
	      if (code < 256) {
	        val = code;
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer$1.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0;
	  end = end === undefined ? this.length : end >>> 0;

	  if (!val) val = 0;

	  var i;
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val;
	    }
	  } else {
	    var bytes = internalIsBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer$1(val, encoding).toString());
	    var len = bytes.length;
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }

	  return this
	};

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity;
	  var codePoint;
	  var length = string.length;
	  var leadSurrogate = null;
	  var bytes = [];

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint;

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }

	    leadSurrogate = null;

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo;
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }

	  return byteArray
	}


	function base64ToBytes (str) {
	  return toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i];
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}


	// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	function isBuffer(obj) {
	  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
	}

	function isFastBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}

	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
	}

	function BufferList() {
	  this.head = null;
	  this.tail = null;
	  this.length = 0;
	}

	BufferList.prototype.push = function (v) {
	  var entry = { data: v, next: null };
	  if (this.length > 0) this.tail.next = entry;else this.head = entry;
	  this.tail = entry;
	  ++this.length;
	};

	BufferList.prototype.unshift = function (v) {
	  var entry = { data: v, next: this.head };
	  if (this.length === 0) this.tail = entry;
	  this.head = entry;
	  ++this.length;
	};

	BufferList.prototype.shift = function () {
	  if (this.length === 0) return;
	  var ret = this.head.data;
	  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
	  --this.length;
	  return ret;
	};

	BufferList.prototype.clear = function () {
	  this.head = this.tail = null;
	  this.length = 0;
	};

	BufferList.prototype.join = function (s) {
	  if (this.length === 0) return '';
	  var p = this.head;
	  var ret = '' + p.data;
	  while (p = p.next) {
	    ret += s + p.data;
	  }return ret;
	};

	BufferList.prototype.concat = function (n) {
	  if (this.length === 0) return Buffer$1.alloc(0);
	  if (this.length === 1) return this.head.data;
	  var ret = Buffer$1.allocUnsafe(n >>> 0);
	  var p = this.head;
	  var i = 0;
	  while (p) {
	    p.data.copy(ret, i);
	    i += p.data.length;
	    p = p.next;
	  }
	  return ret;
	};

	// Copyright Joyent, Inc. and other Node contributors.
	var isBufferEncoding = Buffer$1.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     };


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	function StringDecoder(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer$1(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	}

	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}

	Readable.ReadableState = ReadableState;

	var debug = debuglog('stream');
	inherits$1(Readable, EventEmitter);

	function prependListener(emitter, event, fn) {
	  // Sadly this is not cacheable as some libraries bundle their own
	  // event emitter implementation with them.
	  if (typeof emitter.prependListener === 'function') {
	    return emitter.prependListener(event, fn);
	  } else {
	    // This is a hack to make sure that our error handler is attached before any
	    // userland ones.  NEVER DO THIS. This is here only because this code needs
	    // to continue to work with older versions of Node.js that do not include
	    // the prependListener() method. The goal is to eventually remove this hack.
	    if (!emitter._events || !emitter._events[event])
	      emitter.on(event, fn);
	    else if (Array.isArray(emitter._events[event]))
	      emitter._events[event].unshift(fn);
	    else
	      emitter._events[event] = [fn, emitter._events[event]];
	  }
	}
	function listenerCount$1 (emitter, type) {
	  return emitter.listeners(type).length;
	}
	function ReadableState(options, stream) {

	  options = options || {};

	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;

	  // A linked list is used to store data chunks instead of an array because the
	  // linked list can remove elements from the beginning faster than
	  // array.shift()
	  this.buffer = new BufferList();
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;
	  this.resumeScheduled = false;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}
	function Readable(options) {

	  if (!(this instanceof Readable)) return new Readable(options);

	  this._readableState = new ReadableState(options, this);

	  // legacy
	  this.readable = true;

	  if (options && typeof options.read === 'function') this._read = options.read;

	  EventEmitter.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function (chunk, encoding) {
	  var state = this._readableState;

	  if (!state.objectMode && typeof chunk === 'string') {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = Buffer.from(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function (chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};

	Readable.prototype.isPaused = function () {
	  return this._readableState.flowing === false;
	};

	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (chunk === null) {
	    state.reading = false;
	    onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var _e = new Error('stream.unshift() after end event');
	      stream.emit('error', _e);
	    } else {
	      var skipAdd;
	      if (state.decoder && !addToFront && !encoding) {
	        chunk = state.decoder.write(chunk);
	        skipAdd = !state.objectMode && chunk.length === 0;
	      }

	      if (!addToFront) state.reading = false;

	      // Don't add to the buffer if we've decoded to an empty string chunk and
	      // we're not in object mode
	      if (!skipAdd) {
	        // if we want the data now, just emit it.
	        if (state.flowing && state.length === 0 && !state.sync) {
	          stream.emit('data', chunk);
	          stream.read(0);
	        } else {
	          // update the buffer info.
	          state.length += state.objectMode ? 1 : chunk.length;
	          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

	          if (state.needReadable) emitReadable(stream);
	        }
	      }

	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData(state);
	}

	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
	}

	// backwards compatibility.
	Readable.prototype.setEncoding = function (enc) {
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 8MB
	var MAX_HWM = 0x800000;
	function computeNewHighWaterMark(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2 to prevent increasing hwm excessively in
	    // tiny amounts
	    n--;
	    n |= n >>> 1;
	    n |= n >>> 2;
	    n |= n >>> 4;
	    n |= n >>> 8;
	    n |= n >>> 16;
	    n++;
	  }
	  return n;
	}

	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function howMuchToRead(n, state) {
	  if (n <= 0 || state.length === 0 && state.ended) return 0;
	  if (state.objectMode) return 1;
	  if (n !== n) {
	    // Only flow one buffer at a time
	    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
	  }
	  // If we're asking for more than the current hwm, then raise the hwm.
	  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
	  if (n <= state.length) return n;
	  // Don't have enough
	  if (!state.ended) {
	    state.needReadable = true;
	    return 0;
	  }
	  return state.length;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function (n) {
	  debug('read', n);
	  n = parseInt(n, 10);
	  var state = this._readableState;
	  var nOrig = n;

	  if (n !== 0) state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
	    return null;
	  }

	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0) endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  } else if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0) state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	    // If _read pushed data synchronously, then `reading` will be false,
	    // and we need to re-evaluate how much data we can return to the user.
	    if (!state.reading) n = howMuchToRead(nOrig, state);
	  }

	  var ret;
	  if (n > 0) ret = fromList(n, state);else ret = null;

	  if (ret === null) {
	    state.needReadable = true;
	    n = 0;
	  } else {
	    state.length -= n;
	  }

	  if (state.length === 0) {
	    // If we have nothing in the buffer, then we want to know
	    // as soon as we *do* get something into the buffer.
	    if (!state.ended) state.needReadable = true;

	    // If we tried to read() past the EOF, then emit end on the next tick.
	    if (nOrig !== n && state.ended) endReadable(this);
	  }

	  if (ret !== null) this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}

	function onEofChunk(stream, state) {
	  if (state.ended) return;
	  if (state.decoder) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync) nextTick(emitReadable_, stream);else emitReadable_(stream);
	  }
	}

	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}

	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    nextTick(maybeReadMore_, stream, state);
	  }
	}

	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;else len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function (n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable.prototype.pipe = function (dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false);

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted) nextTick(endFn);else src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);

	  var cleanedUp = false;
	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    cleanedUp = true;

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
	  }

	  // If the user pushes more data while we're writing to dest then we'll end up
	  // in ondata again. However, we only want to increase awaitDrain once because
	  // dest will only emit one 'drain' event for the multiple writes.
	  // => Introduce a guard on increasing awaitDrain.
	  var increasedAwaitDrain = false;
	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    increasedAwaitDrain = false;
	    var ret = dest.write(chunk);
	    if (false === ret && !increasedAwaitDrain) {
	      // If the user unpiped during `dest.write()`, it is possible
	      // to get stuck in a permanently paused state if that write
	      // also returned false.
	      // => Check whether `dest` is still a piping destination.
	      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
	        debug('false write response, pause', src._readableState.awaitDrain);
	        src._readableState.awaitDrain++;
	        increasedAwaitDrain = true;
	      }
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (listenerCount$1(dest, 'error') === 0) dest.emit('error', er);
	  }

	  // Make sure our error handler is attached before userland ones.
	  prependListener(dest, 'error', onerror);

	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain(src) {
	  return function () {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain) state.awaitDrain--;
	    if (state.awaitDrain === 0 && src.listeners('data').length) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}

	Readable.prototype.unpipe = function (dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0) return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes) return this;

	    if (!dest) dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest) dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var _i = 0; _i < len; _i++) {
	      dests[_i].emit('unpipe', this);
	    }return this;
	  }

	  // try to find the right one.
	  var i = indexOf(state.pipes, dest);
	  if (i === -1) return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1) state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function (ev, fn) {
	  var res = EventEmitter.prototype.on.call(this, ev, fn);

	  if (ev === 'data') {
	    // Start flowing on next tick if stream isn't explicitly paused
	    if (this._readableState.flowing !== false) this.resume();
	  } else if (ev === 'readable') {
	    var state = this._readableState;
	    if (!state.endEmitted && !state.readableListening) {
	      state.readableListening = state.needReadable = true;
	      state.emittedReadable = false;
	      if (!state.reading) {
	        nextTick(nReadingNextTick, this);
	      } else if (state.length) {
	        emitReadable(this);
	      }
	    }
	  }

	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;

	function nReadingNextTick(self) {
	  debug('readable nexttick read 0');
	  self.read(0);
	}

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function () {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    resume(this, state);
	  }
	  return this;
	};

	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    nextTick(resume_, stream, state);
	  }
	}

	function resume_(stream, state) {
	  if (!state.reading) {
	    debug('resume read 0');
	    stream.read(0);
	  }

	  state.resumeScheduled = false;
	  state.awaitDrain = 0;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading) stream.read(0);
	}

	Readable.prototype.pause = function () {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  while (state.flowing && stream.read() !== null) {}
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function (stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function () {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length) self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function (chunk) {
	    debug('wrapped data');
	    if (state.decoder) chunk = state.decoder.write(chunk);

	    // don't skip over falsy values in objectMode
	    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (this[i] === undefined && typeof stream[i] === 'function') {
	      this[i] = function (method) {
	        return function () {
	          return stream[method].apply(stream, arguments);
	        };
	      }(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function (ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function (n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};

	// exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromList(n, state) {
	  // nothing buffered
	  if (state.length === 0) return null;

	  var ret;
	  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
	    // read it all, truncate the list
	    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
	    state.buffer.clear();
	  } else {
	    // read part of list
	    ret = fromListPartial(n, state.buffer, state.decoder);
	  }

	  return ret;
	}

	// Extracts only enough buffered data to satisfy the amount requested.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromListPartial(n, list, hasStrings) {
	  var ret;
	  if (n < list.head.data.length) {
	    // slice is the same for buffers and strings
	    ret = list.head.data.slice(0, n);
	    list.head.data = list.head.data.slice(n);
	  } else if (n === list.head.data.length) {
	    // first chunk is a perfect match
	    ret = list.shift();
	  } else {
	    // result spans more than one buffer
	    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
	  }
	  return ret;
	}

	// Copies a specified amount of characters from the list of buffered data
	// chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBufferString(n, list) {
	  var p = list.head;
	  var c = 1;
	  var ret = p.data;
	  n -= ret.length;
	  while (p = p.next) {
	    var str = p.data;
	    var nb = n > str.length ? str.length : n;
	    if (nb === str.length) ret += str;else ret += str.slice(0, n);
	    n -= nb;
	    if (n === 0) {
	      if (nb === str.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = str.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}

	// Copies a specified amount of bytes from the list of buffered data chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBuffer(n, list) {
	  var ret = Buffer.allocUnsafe(n);
	  var p = list.head;
	  var c = 1;
	  p.data.copy(ret);
	  n -= p.data.length;
	  while (p = p.next) {
	    var buf = p.data;
	    var nb = n > buf.length ? buf.length : n;
	    buf.copy(ret, ret.length - n, 0, nb);
	    n -= nb;
	    if (n === 0) {
	      if (nb === buf.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = buf.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}

	function endReadable(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    nextTick(endReadableNT, state, stream);
	  }
	}

	function endReadableNT(state, stream) {
	  // Check that we didn't get one last unshift.
	  if (!state.endEmitted && state.length === 0) {
	    state.endEmitted = true;
	    stream.readable = false;
	    stream.emit('end');
	  }
	}

	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf(xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}

	// A bit simpler than readable streams.
	Writable.WritableState = WritableState;
	inherits$1(Writable, EventEmitter);

	function nop() {}

	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	  this.next = null;
	}

	function WritableState(options, stream) {
	  Object.defineProperty(this, 'buffer', {
	    get: deprecate(function () {
	      return this.getBuffer();
	    }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
	  });
	  options = options || {};

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function (er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.bufferedRequest = null;
	  this.lastBufferedRequest = null;

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;

	  // count buffered requests
	  this.bufferedRequestCount = 0;

	  // allocate the first CorkedRequest, there is always
	  // one allocated and free to use, and we maintain at most two
	  this.corkedRequestsFree = new CorkedRequest(this);
	}

	WritableState.prototype.getBuffer = function writableStateGetBuffer() {
	  var current = this.bufferedRequest;
	  var out = [];
	  while (current) {
	    out.push(current);
	    current = current.next;
	  }
	  return out;
	};
	function Writable(options) {

	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);

	  this._writableState = new WritableState(options, this);

	  // legacy.
	  this.writable = true;

	  if (options) {
	    if (typeof options.write === 'function') this._write = options.write;

	    if (typeof options.writev === 'function') this._writev = options.writev;
	  }

	  EventEmitter.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function () {
	  this.emit('error', new Error('Cannot pipe, not readable'));
	};

	function writeAfterEnd(stream, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  nextTick(cb, er);
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  var er = false;
	  // Always throw error if a null is written
	  // if we are not in object mode then throw
	  // if it is not a buffer, string, or undefined.
	  if (chunk === null) {
	    er = new TypeError('May not write null values to stream');
	  } else if (!Buffer$1.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  if (er) {
	    stream.emit('error', er);
	    nextTick(cb, er);
	    valid = false;
	  }
	  return valid;
	}

	Writable.prototype.write = function (chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (Buffer$1.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

	  if (typeof cb !== 'function') cb = nop;

	  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable.prototype.cork = function () {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable.prototype.uncork = function () {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
	  }
	};

	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
	  // node::ParseEncoding() requires lower case.
	  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
	  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
	  this._writableState.defaultEncoding = encoding;
	  return this;
	};

	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
	    chunk = Buffer$1.from(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);

	  if (Buffer$1.isBuffer(chunk)) encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret) state.needDrain = true;

	  if (state.writing || state.corked) {
	    var last = state.lastBufferedRequest;
	    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
	    if (last) {
	      last.next = state.lastBufferedRequest;
	    } else {
	      state.bufferedRequest = state.lastBufferedRequest;
	    }
	    state.bufferedRequestCount += 1;
	  } else {
	    doWrite(stream, state, false, len, chunk, encoding, cb);
	  }

	  return ret;
	}

	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError(stream, state, sync, er, cb) {
	  --state.pendingcb;
	  if (sync) nextTick(cb, er);else cb(er);

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate(state);

	  if (er) onwriteError(stream, state, sync, er, cb);else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(state);

	    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
	      clearBuffer(stream, state);
	    }

	    if (sync) {
	      /*<replacement>*/
	        nextTick(afterWrite, stream, state, finished, cb);
	      /*</replacement>*/
	    } else {
	        afterWrite(stream, state, finished, cb);
	      }
	  }
	}

	function afterWrite(stream, state, finished, cb) {
	  if (!finished) onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}

	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;
	  var entry = state.bufferedRequest;

	  if (stream._writev && entry && entry.next) {
	    // Fast case, write everything using _writev()
	    var l = state.bufferedRequestCount;
	    var buffer = new Array(l);
	    var holder = state.corkedRequestsFree;
	    holder.entry = entry;

	    var count = 0;
	    while (entry) {
	      buffer[count] = entry;
	      entry = entry.next;
	      count += 1;
	    }

	    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

	    // doWrite is almost always async, defer these to save a bit of time
	    // as the hot path ends with doWrite
	    state.pendingcb++;
	    state.lastBufferedRequest = null;
	    if (holder.next) {
	      state.corkedRequestsFree = holder.next;
	      holder.next = null;
	    } else {
	      state.corkedRequestsFree = new CorkedRequest(state);
	    }
	  } else {
	    // Slow case, write chunks one-by-one
	    while (entry) {
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite(stream, state, false, len, chunk, encoding, cb);
	      entry = entry.next;
	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        break;
	      }
	    }

	    if (entry === null) state.lastBufferedRequest = null;
	  }

	  state.bufferedRequestCount = 0;
	  state.bufferedRequest = entry;
	  state.bufferProcessing = false;
	}

	Writable.prototype._write = function (chunk, encoding, cb) {
	  cb(new Error('not implemented'));
	};

	Writable.prototype._writev = null;

	Writable.prototype.end = function (chunk, encoding, cb) {
	  var state = this._writableState;

	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished) endWritable(this, state, cb);
	};

	function needFinish(state) {
	  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
	}

	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe(stream, state) {
	  var need = needFinish(state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else {
	      prefinish(stream, state);
	    }
	  }
	  return need;
	}

	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished) nextTick(cb);else stream.once('finish', cb);
	  }
	  state.ended = true;
	  stream.writable = false;
	}

	// It seems a linked list but it is not
	// there will be only 2 of these for each stream
	function CorkedRequest(state) {
	  var _this = this;

	  this.next = null;
	  this.entry = null;

	  this.finish = function (err) {
	    var entry = _this.entry;
	    _this.entry = null;
	    while (entry) {
	      var cb = entry.callback;
	      state.pendingcb--;
	      cb(err);
	      entry = entry.next;
	    }
	    if (state.corkedRequestsFree) {
	      state.corkedRequestsFree.next = _this;
	    } else {
	      state.corkedRequestsFree = _this;
	    }
	  };
	}

	inherits$1(Duplex, Readable);

	var keys = Object.keys(Writable.prototype);
	for (var v$2 = 0; v$2 < keys.length; v$2++) {
	  var method = keys[v$2];
	  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
	}
	function Duplex(options) {
	  if (!(this instanceof Duplex)) return new Duplex(options);

	  Readable.call(this, options);
	  Writable.call(this, options);

	  if (options && options.readable === false) this.readable = false;

	  if (options && options.writable === false) this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

	  this.once('end', onend);
	}

	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended) return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  nextTick(onEndNT, this);
	}

	function onEndNT(self) {
	  self.end();
	}

	// a transform stream is a readable/writable stream where you do
	inherits$1(Transform, Duplex);

	function TransformState(stream) {
	  this.afterTransform = function (er, data) {
	    return afterTransform(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	  this.writeencoding = null;
	}

	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (data !== null && data !== undefined) stream.push(data);

	  cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}
	function Transform(options) {
	  if (!(this instanceof Transform)) return new Transform(options);

	  Duplex.call(this, options);

	  this._transformState = new TransformState(this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  if (options) {
	    if (typeof options.transform === 'function') this._transform = options.transform;

	    if (typeof options.flush === 'function') this._flush = options.flush;
	  }

	  this.once('prefinish', function () {
	    if (typeof this._flush === 'function') this._flush(function (er) {
	      done(stream, er);
	    });else done(stream);
	  });
	}

	Transform.prototype.push = function (chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function (chunk, encoding, cb) {
	  throw new Error('Not implemented');
	};

	Transform.prototype._write = function (chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function (n) {
	  var ts = this._transformState;

	  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};

	function done(stream, er) {
	  if (er) return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

	  if (ts.transforming) throw new Error('Calling transform done when still transforming');

	  return stream.push(null);
	}

	inherits$1(PassThrough, Transform);
	function PassThrough(options) {
	  if (!(this instanceof PassThrough)) return new PassThrough(options);

	  Transform.call(this, options);
	}

	PassThrough.prototype._transform = function (chunk, encoding, cb) {
	  cb(null, chunk);
	};

	inherits$1(Stream, EventEmitter);
	Stream.Readable = Readable;
	Stream.Writable = Writable;
	Stream.Duplex = Duplex;
	Stream.Transform = Transform;
	Stream.PassThrough = PassThrough;

	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;

	// old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.

	function Stream() {
	  EventEmitter.call(this);
	}

	Stream.prototype.pipe = function(dest, options) {
	  var source = this;

	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }

	  source.on('data', ondata);

	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }

	  dest.on('drain', ondrain);

	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }

	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    dest.end();
	  }


	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    if (typeof dest.destroy === 'function') dest.destroy();
	  }

	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EventEmitter.listenerCount(this, 'error') === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }

	  source.on('error', onerror);
	  dest.on('error', onerror);

	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);

	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);

	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);

	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);

	    dest.removeListener('close', cleanup);
	  }

	  source.on('end', cleanup);
	  source.on('close', cleanup);

	  dest.on('close', cleanup);

	  dest.emit('pipe', source);

	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};

	function r$2(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
	var u$2="function"===typeof Symbol&&Symbol.for,ba$1=u$2?Symbol.for("react.portal"):60106,v$3=u$2?Symbol.for("react.fragment"):60107,ca=u$2?Symbol.for("react.strict_mode"):60108,da=u$2?Symbol.for("react.profiler"):60114,w$2=u$2?Symbol.for("react.provider"):60109,ea=u$2?Symbol.for("react.context"):60110,fa=u$2?Symbol.for("react.concurrent_mode"):60111,ha=u$2?Symbol.for("react.forward_ref"):60112,B$2=u$2?Symbol.for("react.suspense"):60113,ia=u$2?Symbol.for("react.suspense_list"):60120,ja=u$2?Symbol.for("react.memo"):60115,ka=u$2?Symbol.for("react.lazy"):
	60116,la=u$2?Symbol.for("react.block"):60121,ma=u$2?Symbol.for("react.fundamental"):60117,na=u$2?Symbol.for("react.scope"):60119;function oa(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(c){0===a._status&&(c=c.default,a._status=1,a._result=c);},function(c){0===a._status&&(a._status=2,a._result=c);});}}
	function C$2(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case v$3:return "Fragment";case ba$1:return "Portal";case da:return "Profiler";case ca:return "StrictMode";case B$2:return "Suspense";case ia:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case ea:return "Context.Consumer";case w$2:return "Context.Provider";case ha:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");
	case ja:return C$2(a.type);case la:return C$2(a.render);case ka:if(a=1===a._status?a._result:null)return C$2(a)}return null}var D$2=react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;D$2.hasOwnProperty("ReactCurrentDispatcher")||(D$2.ReactCurrentDispatcher={current:null});D$2.hasOwnProperty("ReactCurrentBatchConfig")||(D$2.ReactCurrentBatchConfig={suspense:null});var pa={};function E$2(a,b){for(var c=a._threadCount|0;c<=b;c++)a[c]=a._currentValue2,a._threadCount=c+1;}
	function qa(a,b,c,d){if(d&&(d=a.contextType,"object"===typeof d&&null!==d))return E$2(d,c),d[c];if(a=a.contextTypes){c={};for(var f in a)c[f]=b[f];b=c;}else b=pa;return b}for(var F$2=new Uint16Array(16),H$2=0;15>H$2;H$2++)F$2[H$2]=H$2+1;F$2[15]=0;
	var ra=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sa=Object.prototype.hasOwnProperty,ta={},ua={};
	function va(a){if(sa.call(ua,a))return !0;if(sa.call(ta,a))return !1;if(ra.test(a))return ua[a]=!0;ta[a]=!0;return !1}function wa(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
	function xa(a,b,c,d){if(null===b||"undefined"===typeof b||wa(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function J$2(a,b,c,d,f,h){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=h;}var K$2={};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){K$2[a]=new J$2(a,0,!1,a,null,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];K$2[b]=new J$2(b,1,!1,a[1],null,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){K$2[a]=new J$2(a,2,!1,a.toLowerCase(),null,!1);});
	["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){K$2[a]=new J$2(a,2,!1,a,null,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){K$2[a]=new J$2(a,3,!1,a.toLowerCase(),null,!1);});
	["checked","multiple","muted","selected"].forEach(function(a){K$2[a]=new J$2(a,3,!0,a,null,!1);});["capture","download"].forEach(function(a){K$2[a]=new J$2(a,4,!1,a,null,!1);});["cols","rows","size","span"].forEach(function(a){K$2[a]=new J$2(a,6,!1,a,null,!1);});["rowSpan","start"].forEach(function(a){K$2[a]=new J$2(a,5,!1,a.toLowerCase(),null,!1);});var L$2=/[\-:]([a-z])/g;function M$2(a){return a[1].toUpperCase()}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(L$2,
	M$2);K$2[b]=new J$2(b,1,!1,a,null,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(L$2,M$2);K$2[b]=new J$2(b,1,!1,a,"http://www.w3.org/1999/xlink",!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(L$2,M$2);K$2[b]=new J$2(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1);});["tabIndex","crossOrigin"].forEach(function(a){K$2[a]=new J$2(a,1,!1,a.toLowerCase(),null,!1);});
	K$2.xlinkHref=new J$2("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){K$2[a]=new J$2(a,1,!1,a.toLowerCase(),null,!0);});var ya=/["'&<>]/;
	function N$2(a){if("boolean"===typeof a||"number"===typeof a)return ""+a;a=""+a;var b=ya.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b;}a=f!==d?c+a.substring(f,d):c;}return a}
	function za(a,b){var c=K$2.hasOwnProperty(a)?K$2[a]:null;var d;if(d="style"!==a)d=null!==c?0===c.type:!(2<a.length)||"o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]?!1:!0;if(d||xa(a,b,c,!1))return "";if(null!==c){a=c.attributeName;d=c.type;if(3===d||4===d&&!0===b)return a+'=""';c.sanitizeURL&&(b=""+b);return a+'="'+(N$2(b)+'"')}return va(a)?a+'="'+(N$2(b)+'"'):""}function Aa(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
	var Ba="function"===typeof Object.is?Object.is:Aa,O$2=null,P$2=null,Q$2=null,R$2=!1,S$2=!1,U$2=null,V$2=0;function W$2(){if(null===O$2)throw Error(r$2(321));return O$2}function Ca(){if(0<V$2)throw Error(r$2(312));return {memoizedState:null,queue:null,next:null}}function Da(){null===Q$2?null===P$2?(R$2=!1,P$2=Q$2=Ca()):(R$2=!0,Q$2=P$2):null===Q$2.next?(R$2=!1,Q$2=Q$2.next=Ca()):(R$2=!0,Q$2=Q$2.next);return Q$2}function Ea(a,b,c,d){for(;S$2;)S$2=!1,V$2+=1,Q$2=null,c=a(b,d);P$2=O$2=null;V$2=0;Q$2=U$2=null;return c}function Fa(a,b){return "function"===typeof b?b(a):b}
	function Ga(a,b,c){O$2=W$2();Q$2=Da();if(R$2){var d=Q$2.queue;b=d.dispatch;if(null!==U$2&&(c=U$2.get(d),void 0!==c)){U$2.delete(d);d=Q$2.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);Q$2.memoizedState=d;return [d,b]}return [Q$2.memoizedState,b]}a=a===Fa?"function"===typeof b?b():b:void 0!==c?c(b):b;Q$2.memoizedState=a;a=Q$2.queue={last:null,dispatch:null};a=a.dispatch=Ha.bind(null,O$2,a);return [Q$2.memoizedState,a]}
	function Ha(a,b,c){if(!(25>V$2))throw Error(r$2(301));if(a===O$2)if(S$2=!0,a={action:c,next:null},null===U$2&&(U$2=new Map),c=U$2.get(b),void 0===c)U$2.set(b,a);else {for(b=c;null!==b.next;)b=b.next;b.next=a;}}function Ia(){}
	var X$2=0,Ja={readContext:function(a){var b=X$2;E$2(a,b);return a[b]},useContext:function(a){W$2();var b=X$2;E$2(a,b);return a[b]},useMemo:function(a,b){O$2=W$2();Q$2=Da();b=void 0===b?null:b;if(null!==Q$2){var c=Q$2.memoizedState;if(null!==c&&null!==b){a:{var d=c[1];if(null===d)d=!1;else {for(var f=0;f<d.length&&f<b.length;f++)if(!Ba(b[f],d[f])){d=!1;break a}d=!0;}}if(d)return c[0]}}a=a();Q$2.memoizedState=[a,b];return a},useReducer:Ga,useRef:function(a){O$2=W$2();Q$2=Da();var b=Q$2.memoizedState;return null===b?(a={current:a},Q$2.memoizedState=
	a):b},useState:function(a){return Ga(Fa,a)},useLayoutEffect:function(){},useCallback:function(a){return a},useImperativeHandle:Ia,useEffect:Ia,useDebugValue:Ia,useResponder:function(a,b){return {props:b,responder:a}},useDeferredValue:function(a){W$2();return a},useTransition:function(){W$2();return [function(a){a();},!1]}},Ka={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
	function La(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
	var Ma={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Na=objectAssign({menuitem:!0},Ma),Y$2={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,
	gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oa=["Webkit","ms","Moz","O"];Object.keys(Y$2).forEach(function(a){Oa.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Y$2[b]=Y$2[a];});});
	var Pa=/([A-Z])/g,Qa=/^ms-/,Z$2=react.Children.toArray,Ra=D$2.ReactCurrentDispatcher,Sa={listing:!0,pre:!0,textarea:!0},Ta=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Ua={},Va={};function Wa(a){if(void 0===a||null===a)return a;var b="";react.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}var Xa=Object.prototype.hasOwnProperty,Ya={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Za(a,b){if(void 0===a)throw Error(r$2(152,C$2(b)||"Component"));}
	function $a(a,b,c){function d(d,h){var e=h.prototype&&h.prototype.isReactComponent,f=qa(h,b,c,e),p=[],g=!1,l={isMounted:function(){return !1},enqueueForceUpdate:function(){if(null===p)return null},enqueueReplaceState:function(a,c){g=!0;p=[c];},enqueueSetState:function(a,c){if(null===p)return null;p.push(c);}};if(e){if(e=new h(d.props,f,l),"function"===typeof h.getDerivedStateFromProps){var x=h.getDerivedStateFromProps.call(null,d.props,e.state);null!=x&&(e.state=objectAssign({},e.state,x));}}else if(O$2={},e=h(d.props,
	f,l),e=Ea(h,d.props,e,f),null==e||null==e.render){a=e;Za(a,h);return}e.props=d.props;e.context=f;e.updater=l;l=e.state;void 0===l&&(e.state=l=null);if("function"===typeof e.UNSAFE_componentWillMount||"function"===typeof e.componentWillMount)if("function"===typeof e.componentWillMount&&"function"!==typeof h.getDerivedStateFromProps&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&"function"!==typeof h.getDerivedStateFromProps&&e.UNSAFE_componentWillMount(),p.length){l=p;var t=
	g;p=null;g=!1;if(t&&1===l.length)e.state=l[0];else {x=t?l[0]:e.state;var y=!0;for(t=t?1:0;t<l.length;t++){var q=l[t];q="function"===typeof q?q.call(e,x,d.props,f):q;null!=q&&(y?(y=!1,x=objectAssign({},x,q)):objectAssign(x,q));}e.state=x;}}else p=null;a=e.render();Za(a,h);if("function"===typeof e.getChildContext&&(d=h.childContextTypes,"object"===typeof d)){var A=e.getChildContext();for(var T in A)if(!(T in d))throw Error(r$2(108,C$2(h)||"Unknown",T));}A&&(b=objectAssign({},b,A));}for(;react.isValidElement(a);){var f=a,h=f.type;if("function"!==
	typeof h)break;d(f,h);}return {child:a,context:b}}
	var ab=function(){function a(a,b){react.isValidElement(a)?a.type!==v$3?a=[a]:(a=a.props.children,a=react.isValidElement(a)?[a]:Z$2(a)):a=Z$2(a);a={type:null,domNamespace:Ka.html,children:a,childIndex:0,context:pa,footer:""};var c=F$2[0];if(0===c){var d=F$2;c=d.length;var p=2*c;if(!(65536>=p))throw Error(r$2(304));var g=new Uint16Array(p);g.set(d);F$2=g;F$2[0]=c+1;for(d=c;d<p-1;d++)F$2[d]=d+1;F$2[p-1]=0;}else F$2[0]=F$2[c];this.threadID=c;this.stack=[a];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=
	b;this.suspenseDepth=0;this.contextIndex=-1;this.contextStack=[];this.contextValueStack=[];}var b=a.prototype;b.destroy=function(){if(!this.exhausted){this.exhausted=!0;this.clearProviders();var a=this.threadID;F$2[a]=F$2[0];F$2[0]=a;}};b.pushProvider=function(a){var b=++this.contextIndex,c=a.type._context,h=this.threadID;E$2(c,h);var p=c[h];this.contextStack[b]=c;this.contextValueStack[b]=p;c[h]=a.props.value;};b.popProvider=function(){var a=this.contextIndex,b=this.contextStack[a],f=this.contextValueStack[a];
	this.contextStack[a]=null;this.contextValueStack[a]=null;this.contextIndex--;b[this.threadID]=f;};b.clearProviders=function(){for(var a=this.contextIndex;0<=a;a--)this.contextStack[a][this.threadID]=this.contextValueStack[a];};b.read=function(a){if(this.exhausted)return null;var b=X$2;X$2=this.threadID;var c=Ra.current;Ra.current=Ja;try{for(var h=[""],p=!1;h[0].length<a;){if(0===this.stack.length){this.exhausted=!0;var g=this.threadID;F$2[g]=F$2[0];F$2[0]=g;break}var e=this.stack[this.stack.length-1];if(p||e.childIndex>=
	e.children.length){var I=e.footer;""!==I&&(this.previousWasTextNode=!1);this.stack.pop();if("select"===e.type)this.currentSelectValue=null;else if(null!=e.type&&null!=e.type.type&&e.type.type.$$typeof===w$2)this.popProvider(e.type);else if(e.type===B$2){this.suspenseDepth--;var G=h.pop();if(p){p=!1;var n=e.fallbackFrame;if(!n)throw Error(r$2(303));this.stack.push(n);h[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}else h[this.suspenseDepth]+=G;}h[this.suspenseDepth]+=I;}else {var l=e.children[e.childIndex++],
	x="";try{x+=this.render(l,e.context,e.domNamespace);}catch(t){if(null!=t&&"function"===typeof t.then)throw Error(r$2(294));throw t;}finally{}h.length<=this.suspenseDepth&&h.push("");h[this.suspenseDepth]+=x;}}return h[0]}finally{Ra.current=c,X$2=b;}};b.render=function(a,b,f){if("string"===typeof a||"number"===typeof a){f=""+a;if(""===f)return "";if(this.makeStaticMarkup)return N$2(f);if(this.previousWasTextNode)return "\x3c!-- --\x3e"+N$2(f);this.previousWasTextNode=!0;return N$2(f)}b=$a(a,b,this.threadID);a=b.child;
	b=b.context;if(null===a||!1===a)return "";if(!react.isValidElement(a)){if(null!=a&&null!=a.$$typeof){f=a.$$typeof;if(f===ba$1)throw Error(r$2(257));throw Error(r$2(258,f.toString()));}a=Z$2(a);this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""});return ""}var c=a.type;if("string"===typeof c)return this.renderDOM(a,b,f);switch(c){case ca:case fa:case da:case ia:case v$3:return a=Z$2(a.props.children),this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),
	"";case B$2:throw Error(r$2(294));}if("object"===typeof c&&null!==c)switch(c.$$typeof){case ha:O$2={};var d=c.render(a.props,a.ref);d=Ea(c.render,a.props,d,a.ref);d=Z$2(d);this.stack.push({type:null,domNamespace:f,children:d,childIndex:0,context:b,footer:""});return "";case ja:return a=[react.createElement(c.type,objectAssign({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case w$2:return c=Z$2(a.props.children),f={type:a,domNamespace:f,children:c,childIndex:0,
	context:b,footer:""},this.pushProvider(a),this.stack.push(f),"";case ea:c=a.type;d=a.props;var g=this.threadID;E$2(c,g);c=Z$2(d.children(c[g]));this.stack.push({type:a,domNamespace:f,children:c,childIndex:0,context:b,footer:""});return "";case ma:throw Error(r$2(338));case ka:switch(c=a.type,oa(c),c._status){case 1:return a=[react.createElement(c._result,objectAssign({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case 2:throw c._result;default:throw Error(r$2(295));
	}case na:throw Error(r$2(343));}throw Error(r$2(130,null==c?c:typeof c,""));};b.renderDOM=function(a,b,f){var c=a.type.toLowerCase();if(!Ua.hasOwnProperty(c)){if(!Ta.test(c))throw Error(r$2(65,c));Ua[c]=!0;}var d=a.props;if("input"===c)d=objectAssign({type:void 0},d,{defaultChecked:void 0,defaultValue:void 0,value:null!=d.value?d.value:d.defaultValue,checked:null!=d.checked?d.checked:d.defaultChecked});else if("textarea"===c){var g=d.value;if(null==g){g=d.defaultValue;var e=d.children;if(null!=e){if(null!=
	g)throw Error(r$2(92));if(Array.isArray(e)){if(!(1>=e.length))throw Error(r$2(93));e=e[0];}g=""+e;}null==g&&(g="");}d=objectAssign({},d,{value:void 0,children:""+g});}else if("select"===c)this.currentSelectValue=null!=d.value?d.value:d.defaultValue,d=objectAssign({},d,{value:void 0});else if("option"===c){e=this.currentSelectValue;var I=Wa(d.children);if(null!=e){var G=null!=d.value?d.value+"":I;g=!1;if(Array.isArray(e))for(var n=0;n<e.length;n++){if(""+e[n]===G){g=!0;break}}else g=""+e===G;d=objectAssign({selected:void 0,children:void 0},
	d,{selected:g,children:I});}}if(g=d){if(Na[c]&&(null!=g.children||null!=g.dangerouslySetInnerHTML))throw Error(r$2(137,c,""));if(null!=g.dangerouslySetInnerHTML){if(null!=g.children)throw Error(r$2(60));if(!("object"===typeof g.dangerouslySetInnerHTML&&"__html"in g.dangerouslySetInnerHTML))throw Error(r$2(61));}if(null!=g.style&&"object"!==typeof g.style)throw Error(r$2(62,""));}g=d;e=this.makeStaticMarkup;I=1===this.stack.length;G="<"+a.type;for(z in g)if(Xa.call(g,z)){var l=g[z];if(null!=l){if("style"===
	z){n=void 0;var x="",t="";for(n in l)if(l.hasOwnProperty(n)){var y=0===n.indexOf("--"),q=l[n];if(null!=q){if(y)var A=n;else if(A=n,Va.hasOwnProperty(A))A=Va[A];else {var T=A.replace(Pa,"-$1").toLowerCase().replace(Qa,"-ms-");A=Va[A]=T;}x+=t+A+":";t=n;y=null==q||"boolean"===typeof q||""===q?"":y||"number"!==typeof q||0===q||Y$2.hasOwnProperty(t)&&Y$2[t]?(""+q).trim():q+"px";x+=y;t=";";}}l=x||null;}n=null;b:if(y=c,q=g,-1===y.indexOf("-"))y="string"===typeof q.is;else switch(y){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":y=
	!1;break b;default:y=!0;}y?Ya.hasOwnProperty(z)||(n=z,n=va(n)&&null!=l?n+'="'+(N$2(l)+'"'):""):n=za(z,l);n&&(G+=" "+n);}}e||I&&(G+=' data-reactroot=""');var z=G;g="";Ma.hasOwnProperty(c)?z+="/>":(z+=">",g="</"+a.type+">");a:{e=d.dangerouslySetInnerHTML;if(null!=e){if(null!=e.__html){e=e.__html;break a}}else if(e=d.children,"string"===typeof e||"number"===typeof e){e=N$2(e);break a}e=null;}null!=e?(d=[],Sa.hasOwnProperty(c)&&"\n"===e.charAt(0)&&(z+="\n"),z+=e):d=Z$2(d.children);a=a.type;f=null==f||"http://www.w3.org/1999/xhtml"===
	f?La(a):"http://www.w3.org/2000/svg"===f&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":f;this.stack.push({domNamespace:f,type:c,children:d,childIndex:0,context:b,footer:g});this.previousWasTextNode=!1;return z};return a}();function bb(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a;a.__proto__=b;}
	var cb=function(a){function b(b,c){var d=a.call(this,{})||this;d.partialRenderer=new ab(b,c);return d}bb(b,a);var c=b.prototype;c._destroy=function(a,b){this.partialRenderer.destroy();b(a);};c._read=function(a){try{this.push(this.partialRenderer.read(a));}catch(f){this.destroy(f);}};return b}(Stream.Readable),db={renderToString:function(a){a=new ab(a,!1);try{return a.read(Infinity)}finally{a.destroy();}},renderToStaticMarkup:function(a){a=new ab(a,!0);try{return a.read(Infinity)}finally{a.destroy();}},renderToNodeStream:function(a){return new cb(a,
	!1)},renderToStaticNodeStream:function(a){return new cb(a,!0)},version:"16.13.1"};var reactDomServer_node_production_min=db.default||db;

	var reactDomServer_node_development = createCommonjsModule(function (module) {



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = react;
	var _assign = objectAssign;
	var checkPropTypes = checkPropTypes_1;
	var stream = Stream;

	var ReactVersion = '16.13.1';

	// Do not require this module directly! Use normal `invariant` calls with
	// template literal strings. The messages will be replaced with error codes
	// during build.
	function formatProdErrorMessage(code) {
	  var url = 'https://reactjs.org/docs/error-decoder.html?invariant=' + code;

	  for (var i = 1; i < arguments.length; i++) {
	    url += '&args[]=' + encodeURIComponent(arguments[i]);
	  }

	  return "Minified React error #" + code + "; visit " + url + " for the full message or " + 'use the non-minified dev environment for full errors and additional ' + 'helpful warnings.';
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; // Prevent newer renderers from RTE when used with older react package versions.
	// Current owner and dispatcher used to share the same ref,
	// but PR #14548 split them out to better support the react-debug-tools package.

	if (!ReactSharedInternals.hasOwnProperty('ReactCurrentDispatcher')) {
	  ReactSharedInternals.ReactCurrentDispatcher = {
	    current: null
	  };
	}

	if (!ReactSharedInternals.hasOwnProperty('ReactCurrentBatchConfig')) {
	  ReactSharedInternals.ReactCurrentBatchConfig = {
	    suspense: null
	  };
	}

	// by calls to these methods by a Babel plugin.
	//
	// In PROD (or in packages without access to React internals),
	// they are left as they are instead.

	function warn(format) {
	  {
	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    printWarning('warn', format, args);
	  }
	}
	function error(format) {
	  {
	    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      args[_key2 - 1] = arguments[_key2];
	    }

	    printWarning('error', format, args);
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

	    if (!hasExistingStack) {
	      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	      var stack = ReactDebugCurrentFrame.getStackAddendum();

	      if (stack !== '') {
	        format += '%s';
	        args = args.concat([stack]);
	      }
	    }

	    var argsWithFormat = args.map(function (item) {
	      return '' + item;
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);

	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      throw new Error(message);
	    } catch (x) {}
	  }
	}

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	var Uninitialized = -1;
	var Pending = 0;
	var Resolved = 1;
	var Rejected = 2;
	function refineResolvedLazyComponent(lazyComponent) {
	  return lazyComponent._status === Resolved ? lazyComponent._result : null;
	}
	function initializeLazyComponentType(lazyComponent) {
	  if (lazyComponent._status === Uninitialized) {
	    lazyComponent._status = Pending;
	    var ctor = lazyComponent._ctor;
	    var thenable = ctor();
	    lazyComponent._result = thenable;
	    thenable.then(function (moduleObject) {
	      if (lazyComponent._status === Pending) {
	        var defaultExport = moduleObject.default;

	        {
	          if (defaultExport === undefined) {
	            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + "const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
	          }
	        }

	        lazyComponent._status = Resolved;
	        lazyComponent._result = defaultExport;
	      }
	    }, function (error) {
	      if (lazyComponent._status === Pending) {
	        lazyComponent._status = Rejected;
	        lazyComponent._result = error;
	      }
	    });
	  }
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var functionName = innerType.displayName || innerType.name || '';
	  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
	}

	function getComponentName(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return "Profiler";

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        return 'Context.Consumer';

	      case REACT_PROVIDER_TYPE:
	        return 'Context.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        return getComponentName(type.type);

	      case REACT_BLOCK_TYPE:
	        return getComponentName(type.render);

	      case REACT_LAZY_TYPE:
	        {
	          var thenable = type;
	          var resolvedThenable = refineResolvedLazyComponent(thenable);

	          if (resolvedThenable) {
	            return getComponentName(resolvedThenable);
	          }

	          break;
	        }
	    }
	  }

	  return null;
	}

	var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
	function describeComponentFrame (name, source, ownerName) {
	  var sourceInfo = '';

	  if (source) {
	    var path = source.fileName;
	    var fileName = path.replace(BEFORE_SLASH_RE, '');

	    {
	      // In DEV, include code for a common special case:
	      // prefer "folder/index.js" instead of just "index.js".
	      if (/^index\./.test(fileName)) {
	        var match = path.match(BEFORE_SLASH_RE);

	        if (match) {
	          var pathBeforeSlash = match[1];

	          if (pathBeforeSlash) {
	            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
	            fileName = folderName + '/' + fileName;
	          }
	        }
	      }
	    }

	    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
	  } else if (ownerName) {
	    sourceInfo = ' (created by ' + ownerName + ')';
	  }

	  return '\n    in ' + (name || 'Unknown') + sourceInfo;
	}

	var enableSuspenseServerRenderer = false;

	var enableDeprecatedFlareAPI = false; // Experimental Host Component support.

	var ReactDebugCurrentFrame;
	var didWarnAboutInvalidateContextType;

	{
	  ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	  didWarnAboutInvalidateContextType = new Set();
	}

	var emptyObject = {};

	{
	  Object.freeze(emptyObject);
	}

	function maskContext(type, context) {
	  var contextTypes = type.contextTypes;

	  if (!contextTypes) {
	    return emptyObject;
	  }

	  var maskedContext = {};

	  for (var contextName in contextTypes) {
	    maskedContext[contextName] = context[contextName];
	  }

	  return maskedContext;
	}

	function checkContextTypes(typeSpecs, values, location) {
	  {
	    checkPropTypes(typeSpecs, values, location, 'Component', ReactDebugCurrentFrame.getCurrentStack);
	  }
	}

	function validateContextBounds(context, threadID) {
	  // If we don't have enough slots in this context to store this threadID,
	  // fill it in without leaving any holes to ensure that the VM optimizes
	  // this as non-holey index properties.
	  // (Note: If `react` package is < 16.6, _threadCount is undefined.)
	  for (var i = context._threadCount | 0; i <= threadID; i++) {
	    // We assume that this is the same as the defaultValue which might not be
	    // true if we're rendering inside a secondary renderer but they are
	    // secondary because these use cases are very rare.
	    context[i] = context._currentValue2;
	    context._threadCount = i + 1;
	  }
	}
	function processContext(type, context, threadID, isClass) {
	  if (isClass) {
	    var contextType = type.contextType;

	    {
	      if ('contextType' in type) {
	        var isValid = // Allow null for conditional declaration
	        contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

	        if (!isValid && !didWarnAboutInvalidateContextType.has(type)) {
	          didWarnAboutInvalidateContextType.add(type);
	          var addendum = '';

	          if (contextType === undefined) {
	            addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
	          } else if (typeof contextType !== 'object') {
	            addendum = ' However, it is set to a ' + typeof contextType + '.';
	          } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
	            addendum = ' Did you accidentally pass the Context.Provider instead?';
	          } else if (contextType._context !== undefined) {
	            // <Context.Consumer>
	            addendum = ' Did you accidentally pass the Context.Consumer instead?';
	          } else {
	            addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
	          }

	          error('%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentName(type) || 'Component', addendum);
	        }
	      }
	    }

	    if (typeof contextType === 'object' && contextType !== null) {
	      validateContextBounds(contextType, threadID);
	      return contextType[threadID];
	    }

	    {
	      var maskedContext = maskContext(type, context);

	      {
	        if (type.contextTypes) {
	          checkContextTypes(type.contextTypes, maskedContext, 'context');
	        }
	      }

	      return maskedContext;
	    }
	  } else {
	    {
	      var _maskedContext = maskContext(type, context);

	      {
	        if (type.contextTypes) {
	          checkContextTypes(type.contextTypes, _maskedContext, 'context');
	        }
	      }

	      return _maskedContext;
	    }
	  }
	}

	var nextAvailableThreadIDs = new Uint16Array(16);

	for (var i = 0; i < 15; i++) {
	  nextAvailableThreadIDs[i] = i + 1;
	}

	nextAvailableThreadIDs[15] = 0;

	function growThreadCountAndReturnNextAvailable() {
	  var oldArray = nextAvailableThreadIDs;
	  var oldSize = oldArray.length;
	  var newSize = oldSize * 2;

	  if (!(newSize <= 0x10000)) {
	    {
	      throw Error( "Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic." );
	    }
	  }

	  var newArray = new Uint16Array(newSize);
	  newArray.set(oldArray);
	  nextAvailableThreadIDs = newArray;
	  nextAvailableThreadIDs[0] = oldSize + 1;

	  for (var _i = oldSize; _i < newSize - 1; _i++) {
	    nextAvailableThreadIDs[_i] = _i + 1;
	  }

	  nextAvailableThreadIDs[newSize - 1] = 0;
	  return oldSize;
	}

	function allocThreadID() {
	  var nextID = nextAvailableThreadIDs[0];

	  if (nextID === 0) {
	    return growThreadCountAndReturnNextAvailable();
	  }

	  nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
	  return nextID;
	}
	function freeThreadID(id) {
	  nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
	  nextAvailableThreadIDs[0] = id;
	}

	// A reserved attribute.
	// It is handled by React separately and shouldn't be written to the DOM.
	var RESERVED = 0; // A simple string attribute.
	// Attributes that aren't in the whitelist are presumed to have this type.

	var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
	// "enumerated" attributes with "true" and "false" as possible values.
	// When true, it should be set to a "true" string.
	// When false, it should be set to a "false" string.

	var BOOLEANISH_STRING = 2; // A real boolean attribute.
	// When true, it should be present (set either to an empty string or its name).
	// When false, it should be omitted.

	var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
	// When true, it should be present (set either to an empty string or its name).
	// When false, it should be omitted.
	// For any other value, should be present with that value.

	var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
	// When falsy, it should be removed.

	var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
	// When falsy, it should be removed.

	var POSITIVE_NUMERIC = 6;

	/* eslint-disable max-len */
	var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
	/* eslint-enable max-len */

	var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
	var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
	var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var illegalAttributeNameCache = {};
	var validatedAttributeNameCache = {};
	function isAttributeNameSafe(attributeName) {
	  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
	    return true;
	  }

	  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
	    return false;
	  }

	  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
	    validatedAttributeNameCache[attributeName] = true;
	    return true;
	  }

	  illegalAttributeNameCache[attributeName] = true;

	  {
	    error('Invalid attribute name: `%s`', attributeName);
	  }

	  return false;
	}
	function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
	  if (propertyInfo !== null) {
	    return propertyInfo.type === RESERVED;
	  }

	  if (isCustomComponentTag) {
	    return false;
	  }

	  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
	    return true;
	  }

	  return false;
	}
	function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
	  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
	    return false;
	  }

	  switch (typeof value) {
	    case 'function': // $FlowIssue symbol is perfectly valid here

	    case 'symbol':
	      // eslint-disable-line
	      return true;

	    case 'boolean':
	      {
	        if (isCustomComponentTag) {
	          return false;
	        }

	        if (propertyInfo !== null) {
	          return !propertyInfo.acceptsBooleans;
	        } else {
	          var prefix = name.toLowerCase().slice(0, 5);
	          return prefix !== 'data-' && prefix !== 'aria-';
	        }
	      }

	    default:
	      return false;
	  }
	}
	function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
	  if (value === null || typeof value === 'undefined') {
	    return true;
	  }

	  if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
	    return true;
	  }

	  if (isCustomComponentTag) {
	    return false;
	  }

	  if (propertyInfo !== null) {
	    switch (propertyInfo.type) {
	      case BOOLEAN:
	        return !value;

	      case OVERLOADED_BOOLEAN:
	        return value === false;

	      case NUMERIC:
	        return isNaN(value);

	      case POSITIVE_NUMERIC:
	        return isNaN(value) || value < 1;
	    }
	  }

	  return false;
	}
	function getPropertyInfo(name) {
	  return properties.hasOwnProperty(name) ? properties[name] : null;
	}

	function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL) {
	  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
	  this.attributeName = attributeName;
	  this.attributeNamespace = attributeNamespace;
	  this.mustUseProperty = mustUseProperty;
	  this.propertyName = name;
	  this.type = type;
	  this.sanitizeURL = sanitizeURL;
	} // When adding attributes to this list, be sure to also add them to
	// the `possibleStandardNames` module to ensure casing and incorrect
	// name warnings.


	var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

	var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
	// elements (not just inputs). Now that ReactDOMInput assigns to the
	// defaultValue property -- do we need this?
	'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];

	reservedProps.forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false);
	}); // A few React string attributes have a different name.
	// This is a mapping from React prop names to the attribute names.

	[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
	  var name = _ref[0],
	      attributeName = _ref[1];
	  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	  attributeName, // attributeName
	  null, // attributeNamespace
	  false);
	}); // These are "enumerated" HTML attributes that accept "true" and "false".
	// In React, we let users pass `true` and `false` even though technically
	// these aren't boolean attributes (they are coerced to strings).

	['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
	  name.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  false);
	}); // These are "enumerated" SVG attributes that accept "true" and "false".
	// In React, we let users pass `true` and `false` even though technically
	// these aren't boolean attributes (they are coerced to strings).
	// Since these are SVG attributes, their attribute names are case-sensitive.

	['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false);
	}); // These are HTML boolean attributes.

	['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
	// on the client side because the browsers are inconsistent. Instead we call focus().
	'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
	'itemScope'].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
	  name.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  false);
	}); // These are the few React props that we set as DOM properties
	// rather than attributes. These are all booleans.

	['checked', // Note: `option.selected` is not updated if `select.multiple` is
	// disabled with `removeAttribute`. We have special logic for handling this.
	'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false);
	}); // These are HTML attributes that are "overloaded booleans": they behave like
	// booleans, but can also accept a string value.

	['capture', 'download' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false);
	}); // These are HTML attributes that must be positive numbers.

	['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
	  name, // attributeName
	  null, // attributeNamespace
	  false);
	}); // These are HTML attributes that must be numbers.

	['rowSpan', 'start'].forEach(function (name) {
	  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
	  name.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  false);
	});
	var CAMELIZE = /[\-\:]([a-z])/g;

	var capitalize = function (token) {
	  return token[1].toUpperCase();
	}; // This is a list of all SVG attributes that need special casing, namespacing,
	// or boolean value assignment. Regular attributes that just accept strings
	// and have the same names are omitted, just like in the HTML whitelist.
	// Some of these attributes can be hard to find. This list was created by
	// scraping the MDN documentation.


	['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (attributeName) {
	  var name = attributeName.replace(CAMELIZE, capitalize);
	  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	  attributeName, null, // attributeNamespace
	  false);
	}); // String SVG attributes with the xlink namespace.

	['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (attributeName) {
	  var name = attributeName.replace(CAMELIZE, capitalize);
	  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	  attributeName, 'http://www.w3.org/1999/xlink', false);
	}); // String SVG attributes with the xml namespace.

	['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
	// you'll need to set attributeName to name.toLowerCase()
	// instead in the assignment below.
	].forEach(function (attributeName) {
	  var name = attributeName.replace(CAMELIZE, capitalize);
	  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
	  attributeName, 'http://www.w3.org/XML/1998/namespace', false);
	}); // These attribute exists both in HTML and SVG.
	// The attribute name is case-sensitive in SVG so we can't just use
	// the React name like we do for attributes that exist only in HTML.

	['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
	  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
	  attributeName.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  false);
	}); // These attributes accept URLs. These must not allow javascript: URLS.
	// These will also need to accept Trusted Types object in the future.

	var xlinkHref = 'xlinkHref';
	properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
	'xlink:href', 'http://www.w3.org/1999/xlink', true);
	['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
	  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
	  attributeName.toLowerCase(), // attributeName
	  null, // attributeNamespace
	  true);
	});

	var ReactDebugCurrentFrame$1 = null;

	{
	  ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
	} // A javascript: URL can contain leading C0 control or \u0020 SPACE,
	// and any newline or tab are filtered out as if they're not part of the URL.
	// https://url.spec.whatwg.org/#url-parsing
	// Tab or newline are defined as \r\n\t:
	// https://infra.spec.whatwg.org/#ascii-tab-or-newline
	// A C0 control is a code point in the range \u0000 NULL to \u001F
	// INFORMATION SEPARATOR ONE, inclusive:
	// https://infra.spec.whatwg.org/#c0-control-or-space

	/* eslint-disable max-len */


	var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
	var didWarn = false;

	function sanitizeURL(url) {
	  {
	    if (!didWarn && isJavaScriptProtocol.test(url)) {
	      didWarn = true;

	      error('A future version of React will block javascript: URLs as a security precaution. ' + 'Use event handlers instead if you can. If you need to generate unsafe HTML try ' + 'using dangerouslySetInnerHTML instead. React was passed %s.', JSON.stringify(url));
	    }
	  }
	}

	// code copied and modified from escape-html

	/**
	 * Module variables.
	 * @private
	 */
	var matchHtmlRegExp = /["'&<>]/;
	/**
	 * Escapes special characters and HTML entities in a given html string.
	 *
	 * @param  {string} string HTML string to escape for later insertion
	 * @return {string}
	 * @public
	 */

	function escapeHtml(string) {
	  var str = '' + string;
	  var match = matchHtmlRegExp.exec(str);

	  if (!match) {
	    return str;
	  }

	  var escape;
	  var html = '';
	  var index;
	  var lastIndex = 0;

	  for (index = match.index; index < str.length; index++) {
	    switch (str.charCodeAt(index)) {
	      case 34:
	        // "
	        escape = '&quot;';
	        break;

	      case 38:
	        // &
	        escape = '&amp;';
	        break;

	      case 39:
	        // '
	        escape = '&#x27;'; // modified from escape-html; used to be '&#39'

	        break;

	      case 60:
	        // <
	        escape = '&lt;';
	        break;

	      case 62:
	        // >
	        escape = '&gt;';
	        break;

	      default:
	        continue;
	    }

	    if (lastIndex !== index) {
	      html += str.substring(lastIndex, index);
	    }

	    lastIndex = index + 1;
	    html += escape;
	  }

	  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
	} // end code copied and modified from escape-html

	/**
	 * Escapes text to prevent scripting attacks.
	 *
	 * @param {*} text Text value to escape.
	 * @return {string} An escaped string.
	 */


	function escapeTextForBrowser(text) {
	  if (typeof text === 'boolean' || typeof text === 'number') {
	    // this shortcircuit helps perf for types that we know will never have
	    // special characters, especially given that this function is used often
	    // for numeric dom ids.
	    return '' + text;
	  }

	  return escapeHtml(text);
	}

	/**
	 * Escapes attribute value to prevent scripting attacks.
	 *
	 * @param {*} value Value to escape.
	 * @return {string} An escaped string.
	 */

	function quoteAttributeValueForBrowser(value) {
	  return '"' + escapeTextForBrowser(value) + '"';
	}

	function createMarkupForRoot() {
	  return ROOT_ATTRIBUTE_NAME + '=""';
	}
	/**
	 * Creates markup for a property.
	 *
	 * @param {string} name
	 * @param {*} value
	 * @return {?string} Markup string, or null if the property was invalid.
	 */

	function createMarkupForProperty(name, value) {
	  var propertyInfo = getPropertyInfo(name);

	  if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {
	    return '';
	  }

	  if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
	    return '';
	  }

	  if (propertyInfo !== null) {
	    var attributeName = propertyInfo.attributeName;
	    var type = propertyInfo.type;

	    if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
	      return attributeName + '=""';
	    } else {
	      if (propertyInfo.sanitizeURL) {
	        value = '' + value;
	        sanitizeURL(value);
	      }

	      return attributeName + '=' + quoteAttributeValueForBrowser(value);
	    }
	  } else if (isAttributeNameSafe(name)) {
	    return name + '=' + quoteAttributeValueForBrowser(value);
	  }

	  return '';
	}
	/**
	 * Creates markup for a custom property.
	 *
	 * @param {string} name
	 * @param {*} value
	 * @return {string} Markup string, or empty string if the property was invalid.
	 */

	function createMarkupForCustomAttribute(name, value) {
	  if (!isAttributeNameSafe(name) || value == null) {
	    return '';
	  }

	  return name + '=' + quoteAttributeValueForBrowser(value);
	}

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
	  ;
	}

	var objectIs = typeof Object.is === 'function' ? Object.is : is;

	var currentlyRenderingComponent = null;
	var firstWorkInProgressHook = null;
	var workInProgressHook = null; // Whether the work-in-progress hook is a re-rendered hook

	var isReRender = false; // Whether an update was scheduled during the currently executing render pass.

	var didScheduleRenderPhaseUpdate = false; // Lazily created map of render-phase updates

	var renderPhaseUpdates = null; // Counter to prevent infinite loops.

	var numberOfReRenders = 0;
	var RE_RENDER_LIMIT = 25;
	var isInHookUserCodeInDev = false; // In DEV, this is the name of the currently executing primitive hook

	var currentHookNameInDev;

	function resolveCurrentlyRenderingComponent() {
	  if (!(currentlyRenderingComponent !== null)) {
	    {
	      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
	    }
	  }

	  {
	    if (isInHookUserCodeInDev) {
	      error('Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://fb.me/rules-of-hooks');
	    }
	  }

	  return currentlyRenderingComponent;
	}

	function areHookInputsEqual(nextDeps, prevDeps) {
	  if (prevDeps === null) {
	    {
	      error('%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
	    }

	    return false;
	  }

	  {
	    // Don't bother comparing lengths in prod because these arrays should be
	    // passed inline.
	    if (nextDeps.length !== prevDeps.length) {
	      error('The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, "[" + nextDeps.join(', ') + "]", "[" + prevDeps.join(', ') + "]");
	    }
	  }

	  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
	    if (objectIs(nextDeps[i], prevDeps[i])) {
	      continue;
	    }

	    return false;
	  }

	  return true;
	}

	function createHook() {
	  if (numberOfReRenders > 0) {
	    {
	      {
	        throw Error( "Rendered more hooks than during the previous render" );
	      }
	    }
	  }

	  return {
	    memoizedState: null,
	    queue: null,
	    next: null
	  };
	}

	function createWorkInProgressHook() {
	  if (workInProgressHook === null) {
	    // This is the first hook in the list
	    if (firstWorkInProgressHook === null) {
	      isReRender = false;
	      firstWorkInProgressHook = workInProgressHook = createHook();
	    } else {
	      // There's already a work-in-progress. Reuse it.
	      isReRender = true;
	      workInProgressHook = firstWorkInProgressHook;
	    }
	  } else {
	    if (workInProgressHook.next === null) {
	      isReRender = false; // Append to the end of the list

	      workInProgressHook = workInProgressHook.next = createHook();
	    } else {
	      // There's already a work-in-progress. Reuse it.
	      isReRender = true;
	      workInProgressHook = workInProgressHook.next;
	    }
	  }

	  return workInProgressHook;
	}

	function prepareToUseHooks(componentIdentity) {
	  currentlyRenderingComponent = componentIdentity;

	  {
	    isInHookUserCodeInDev = false;
	  } // The following should have already been reset
	  // didScheduleRenderPhaseUpdate = false;
	  // firstWorkInProgressHook = null;
	  // numberOfReRenders = 0;
	  // renderPhaseUpdates = null;
	  // workInProgressHook = null;

	}
	function finishHooks(Component, props, children, refOrContext) {
	  // This must be called after every function component to prevent hooks from
	  // being used in classes.
	  while (didScheduleRenderPhaseUpdate) {
	    // Updates were scheduled during the render phase. They are stored in
	    // the `renderPhaseUpdates` map. Call the component again, reusing the
	    // work-in-progress hooks and applying the additional updates on top. Keep
	    // restarting until no more updates are scheduled.
	    didScheduleRenderPhaseUpdate = false;
	    numberOfReRenders += 1; // Start over from the beginning of the list

	    workInProgressHook = null;
	    children = Component(props, refOrContext);
	  }

	  currentlyRenderingComponent = null;
	  firstWorkInProgressHook = null;
	  numberOfReRenders = 0;
	  renderPhaseUpdates = null;
	  workInProgressHook = null;

	  {
	    isInHookUserCodeInDev = false;
	  } // These were reset above
	  // currentlyRenderingComponent = null;
	  // didScheduleRenderPhaseUpdate = false;
	  // firstWorkInProgressHook = null;
	  // numberOfReRenders = 0;
	  // renderPhaseUpdates = null;
	  // workInProgressHook = null;


	  return children;
	}

	function readContext(context, observedBits) {
	  var threadID = currentThreadID;
	  validateContextBounds(context, threadID);

	  {
	    if (isInHookUserCodeInDev) {
	      error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
	    }
	  }

	  return context[threadID];
	}

	function useContext(context, observedBits) {
	  {
	    currentHookNameInDev = 'useContext';
	  }

	  resolveCurrentlyRenderingComponent();
	  var threadID = currentThreadID;
	  validateContextBounds(context, threadID);
	  return context[threadID];
	}

	function basicStateReducer(state, action) {
	  // $FlowFixMe: Flow doesn't like mixed types
	  return typeof action === 'function' ? action(state) : action;
	}

	function useState(initialState) {
	  {
	    currentHookNameInDev = 'useState';
	  }

	  return useReducer(basicStateReducer, // useReducer has a special case to support lazy useState initializers
	  initialState);
	}
	function useReducer(reducer, initialArg, init) {
	  {
	    if (reducer !== basicStateReducer) {
	      currentHookNameInDev = 'useReducer';
	    }
	  }

	  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
	  workInProgressHook = createWorkInProgressHook();

	  if (isReRender) {
	    // This is a re-render. Apply the new render phase updates to the previous
	    // current hook.
	    var queue = workInProgressHook.queue;
	    var dispatch = queue.dispatch;

	    if (renderPhaseUpdates !== null) {
	      // Render phase updates are stored in a map of queue -> linked list
	      var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

	      if (firstRenderPhaseUpdate !== undefined) {
	        renderPhaseUpdates.delete(queue);
	        var newState = workInProgressHook.memoizedState;
	        var update = firstRenderPhaseUpdate;

	        do {
	          // Process this render phase update. We don't have to check the
	          // priority because it will always be the same as the current
	          // render's.
	          var action = update.action;

	          {
	            isInHookUserCodeInDev = true;
	          }

	          newState = reducer(newState, action);

	          {
	            isInHookUserCodeInDev = false;
	          }

	          update = update.next;
	        } while (update !== null);

	        workInProgressHook.memoizedState = newState;
	        return [newState, dispatch];
	      }
	    }

	    return [workInProgressHook.memoizedState, dispatch];
	  } else {
	    {
	      isInHookUserCodeInDev = true;
	    }

	    var initialState;

	    if (reducer === basicStateReducer) {
	      // Special case for `useState`.
	      initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
	    } else {
	      initialState = init !== undefined ? init(initialArg) : initialArg;
	    }

	    {
	      isInHookUserCodeInDev = false;
	    }

	    workInProgressHook.memoizedState = initialState;

	    var _queue = workInProgressHook.queue = {
	      last: null,
	      dispatch: null
	    };

	    var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);

	    return [workInProgressHook.memoizedState, _dispatch];
	  }
	}

	function useMemo(nextCreate, deps) {
	  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
	  workInProgressHook = createWorkInProgressHook();
	  var nextDeps = deps === undefined ? null : deps;

	  if (workInProgressHook !== null) {
	    var prevState = workInProgressHook.memoizedState;

	    if (prevState !== null) {
	      if (nextDeps !== null) {
	        var prevDeps = prevState[1];

	        if (areHookInputsEqual(nextDeps, prevDeps)) {
	          return prevState[0];
	        }
	      }
	    }
	  }

	  {
	    isInHookUserCodeInDev = true;
	  }

	  var nextValue = nextCreate();

	  {
	    isInHookUserCodeInDev = false;
	  }

	  workInProgressHook.memoizedState = [nextValue, nextDeps];
	  return nextValue;
	}

	function useRef(initialValue) {
	  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
	  workInProgressHook = createWorkInProgressHook();
	  var previousRef = workInProgressHook.memoizedState;

	  if (previousRef === null) {
	    var ref = {
	      current: initialValue
	    };

	    {
	      Object.seal(ref);
	    }

	    workInProgressHook.memoizedState = ref;
	    return ref;
	  } else {
	    return previousRef;
	  }
	}

	function useLayoutEffect(create, inputs) {
	  {
	    currentHookNameInDev = 'useLayoutEffect';

	    error('useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://fb.me/react-uselayouteffect-ssr for common fixes.');
	  }
	}

	function dispatchAction(componentIdentity, queue, action) {
	  if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
	    {
	      throw Error( "Too many re-renders. React limits the number of renders to prevent an infinite loop." );
	    }
	  }

	  if (componentIdentity === currentlyRenderingComponent) {
	    // This is a render phase update. Stash it in a lazily-created map of
	    // queue -> linked list of updates. After this render pass, we'll restart
	    // and apply the stashed updates on top of the work-in-progress hook.
	    didScheduleRenderPhaseUpdate = true;
	    var update = {
	      action: action,
	      next: null
	    };

	    if (renderPhaseUpdates === null) {
	      renderPhaseUpdates = new Map();
	    }

	    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

	    if (firstRenderPhaseUpdate === undefined) {
	      renderPhaseUpdates.set(queue, update);
	    } else {
	      // Append the update to the end of the list.
	      var lastRenderPhaseUpdate = firstRenderPhaseUpdate;

	      while (lastRenderPhaseUpdate.next !== null) {
	        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
	      }

	      lastRenderPhaseUpdate.next = update;
	    }
	  }
	}

	function useCallback(callback, deps) {
	  // Callbacks are passed as they are in the server environment.
	  return callback;
	}

	function useResponder(responder, props) {
	  return {
	    props: props,
	    responder: responder
	  };
	}

	function useDeferredValue(value, config) {
	  resolveCurrentlyRenderingComponent();
	  return value;
	}

	function useTransition(config) {
	  resolveCurrentlyRenderingComponent();

	  var startTransition = function (callback) {
	    callback();
	  };

	  return [startTransition, false];
	}

	function noop() {}

	var currentThreadID = 0;
	function setCurrentThreadID(threadID) {
	  currentThreadID = threadID;
	}
	var Dispatcher = {
	  readContext: readContext,
	  useContext: useContext,
	  useMemo: useMemo,
	  useReducer: useReducer,
	  useRef: useRef,
	  useState: useState,
	  useLayoutEffect: useLayoutEffect,
	  useCallback: useCallback,
	  // useImperativeHandle is not run in the server environment
	  useImperativeHandle: noop,
	  // Effects are not run in the server environment.
	  useEffect: noop,
	  // Debugging effect
	  useDebugValue: noop,
	  useResponder: useResponder,
	  useDeferredValue: useDeferredValue,
	  useTransition: useTransition
	};

	var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
	var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
	var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
	var Namespaces = {
	  html: HTML_NAMESPACE,
	  mathml: MATH_NAMESPACE,
	  svg: SVG_NAMESPACE
	}; // Assumes there is no parent namespace.

	function getIntrinsicNamespace(type) {
	  switch (type) {
	    case 'svg':
	      return SVG_NAMESPACE;

	    case 'math':
	      return MATH_NAMESPACE;

	    default:
	      return HTML_NAMESPACE;
	  }
	}
	function getChildNamespace(parentNamespace, type) {
	  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
	    // No (or default) parent namespace: potential entry point.
	    return getIntrinsicNamespace(type);
	  }

	  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
	    // We're leaving SVG.
	    return HTML_NAMESPACE;
	  } // By default, pass namespace below.


	  return parentNamespace;
	}

	var ReactDebugCurrentFrame$2 = null;
	var ReactControlledValuePropTypes = {
	  checkPropTypes: null
	};

	{
	  ReactDebugCurrentFrame$2 = ReactSharedInternals.ReactDebugCurrentFrame;
	  var hasReadOnlyValue = {
	    button: true,
	    checkbox: true,
	    image: true,
	    hidden: true,
	    radio: true,
	    reset: true,
	    submit: true
	  };
	  var propTypes = {
	    value: function (props, propName, componentName) {
	      if (hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled || props[propName] == null || enableDeprecatedFlareAPI ) {
	        return null;
	      }

	      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	    },
	    checked: function (props, propName, componentName) {
	      if (props.onChange || props.readOnly || props.disabled || props[propName] == null || enableDeprecatedFlareAPI ) {
	        return null;
	      }

	      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	    }
	  };
	  /**
	   * Provide a linked `value` attribute for controlled forms. You should not use
	   * this outside of the ReactDOM controlled form components.
	   */

	  ReactControlledValuePropTypes.checkPropTypes = function (tagName, props) {
	    checkPropTypes(propTypes, props, 'prop', tagName, ReactDebugCurrentFrame$2.getStackAddendum);
	  };
	}

	// For HTML, certain tags should omit their close tag. We keep a whitelist for
	// those special-case tags.
	var omittedCloseTags = {
	  area: true,
	  base: true,
	  br: true,
	  col: true,
	  embed: true,
	  hr: true,
	  img: true,
	  input: true,
	  keygen: true,
	  link: true,
	  meta: true,
	  param: true,
	  source: true,
	  track: true,
	  wbr: true // NOTE: menuitem's close tag should be omitted, but that causes problems.

	};

	// `omittedCloseTags` except that `menuitem` should still have its closing tag.

	var voidElementTags = _assign({
	  menuitem: true
	}, omittedCloseTags);

	var HTML = '__html';
	var ReactDebugCurrentFrame$3 = null;

	{
	  ReactDebugCurrentFrame$3 = ReactSharedInternals.ReactDebugCurrentFrame;
	}

	function assertValidProps(tag, props) {
	  if (!props) {
	    return;
	  } // Note the use of `==` which checks for null or undefined.


	  if (voidElementTags[tag]) {
	    if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
	      {
	        throw Error( tag + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`." + ( ReactDebugCurrentFrame$3.getStackAddendum() ) );
	      }
	    }
	  }

	  if (props.dangerouslySetInnerHTML != null) {
	    if (!(props.children == null)) {
	      {
	        throw Error( "Can only set one of `children` or `props.dangerouslySetInnerHTML`." );
	      }
	    }

	    if (!(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML)) {
	      {
	        throw Error( "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information." );
	      }
	    }
	  }

	  {
	    if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
	      error('A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
	    }
	  }

	  if (!(props.style == null || typeof props.style === 'object')) {
	    {
	      throw Error( "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX." + ( ReactDebugCurrentFrame$3.getStackAddendum() ) );
	    }
	  }
	}

	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */
	var isUnitlessNumber = {
	  animationIterationCount: true,
	  borderImageOutset: true,
	  borderImageSlice: true,
	  borderImageWidth: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  columns: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridArea: true,
	  gridRow: true,
	  gridRowEnd: true,
	  gridRowSpan: true,
	  gridRowStart: true,
	  gridColumn: true,
	  gridColumnEnd: true,
	  gridColumnSpan: true,
	  gridColumnStart: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,
	  // SVG-related properties
	  fillOpacity: true,
	  floodOpacity: true,
	  stopOpacity: true,
	  strokeDasharray: true,
	  strokeDashoffset: true,
	  strokeMiterlimit: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};
	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */

	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}
	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */


	var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.

	Object.keys(isUnitlessNumber).forEach(function (prop) {
	  prefixes.forEach(function (prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});

	/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @return {string} Normalized style value with dimensions applied.
	 */

	function dangerousStyleValue(name, value, isCustomProperty) {
	  // Note that we've removed escapeTextForBrowser() calls here since the
	  // whole string will be escaped when the attribute is injected into
	  // the markup. If you provide unsafe user data here they can inject
	  // arbitrary CSS which may be problematic (I couldn't repro this):
	  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	  // This is not an XSS hole but instead a potential CSS injection issue
	  // which has lead to a greater discussion about how we're going to
	  // trust URLs moving forward. See #2115901
	  var isEmpty = value == null || typeof value === 'boolean' || value === '';

	  if (isEmpty) {
	    return '';
	  }

	  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
	    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
	  }

	  return ('' + value).trim();
	}

	var uppercasePattern = /([A-Z])/g;
	var msPattern = /^ms-/;
	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 */

	function hyphenateStyleName(name) {
	  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
	}

	function isCustomComponent(tagName, props) {
	  if (tagName.indexOf('-') === -1) {
	    return typeof props.is === 'string';
	  }

	  switch (tagName) {
	    // These are reserved SVG and MathML elements.
	    // We don't mind this whitelist too much because we expect it to never grow.
	    // The alternative is to track the namespace in a few places which is convoluted.
	    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
	    case 'annotation-xml':
	    case 'color-profile':
	    case 'font-face':
	    case 'font-face-src':
	    case 'font-face-uri':
	    case 'font-face-format':
	    case 'font-face-name':
	    case 'missing-glyph':
	      return false;

	    default:
	      return true;
	  }
	}

	var warnValidStyle = function () {};

	{
	  // 'msTransform' is correct, but the other prefixes should be capitalized
	  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
	  var msPattern$1 = /^-ms-/;
	  var hyphenPattern = /-(.)/g; // style values shouldn't contain a semicolon

	  var badStyleValueWithSemicolonPattern = /;\s*$/;
	  var warnedStyleNames = {};
	  var warnedStyleValues = {};
	  var warnedForNaNValue = false;
	  var warnedForInfinityValue = false;

	  var camelize = function (string) {
	    return string.replace(hyphenPattern, function (_, character) {
	      return character.toUpperCase();
	    });
	  };

	  var warnHyphenatedStyleName = function (name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;

	    error('Unsupported style property %s. Did you mean %s?', name, // As Andi Smith suggests
	    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	    // is converted to lowercase `ms`.
	    camelize(name.replace(msPattern$1, 'ms-')));
	  };

	  var warnBadVendoredStyleName = function (name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;

	    error('Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
	  };

	  var warnStyleValueWithSemicolon = function (name, value) {
	    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	      return;
	    }

	    warnedStyleValues[value] = true;

	    error("Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
	  };

	  var warnStyleValueIsNaN = function (name, value) {
	    if (warnedForNaNValue) {
	      return;
	    }

	    warnedForNaNValue = true;

	    error('`NaN` is an invalid value for the `%s` css style property.', name);
	  };

	  var warnStyleValueIsInfinity = function (name, value) {
	    if (warnedForInfinityValue) {
	      return;
	    }

	    warnedForInfinityValue = true;

	    error('`Infinity` is an invalid value for the `%s` css style property.', name);
	  };

	  warnValidStyle = function (name, value) {
	    if (name.indexOf('-') > -1) {
	      warnHyphenatedStyleName(name);
	    } else if (badVendoredStyleNamePattern.test(name)) {
	      warnBadVendoredStyleName(name);
	    } else if (badStyleValueWithSemicolonPattern.test(value)) {
	      warnStyleValueWithSemicolon(name, value);
	    }

	    if (typeof value === 'number') {
	      if (isNaN(value)) {
	        warnStyleValueIsNaN(name, value);
	      } else if (!isFinite(value)) {
	        warnStyleValueIsInfinity(name, value);
	      }
	    }
	  };
	}

	var warnValidStyle$1 = warnValidStyle;

	var ariaProperties = {
	  'aria-current': 0,
	  // state
	  'aria-details': 0,
	  'aria-disabled': 0,
	  // state
	  'aria-hidden': 0,
	  // state
	  'aria-invalid': 0,
	  // state
	  'aria-keyshortcuts': 0,
	  'aria-label': 0,
	  'aria-roledescription': 0,
	  // Widget Attributes
	  'aria-autocomplete': 0,
	  'aria-checked': 0,
	  'aria-expanded': 0,
	  'aria-haspopup': 0,
	  'aria-level': 0,
	  'aria-modal': 0,
	  'aria-multiline': 0,
	  'aria-multiselectable': 0,
	  'aria-orientation': 0,
	  'aria-placeholder': 0,
	  'aria-pressed': 0,
	  'aria-readonly': 0,
	  'aria-required': 0,
	  'aria-selected': 0,
	  'aria-sort': 0,
	  'aria-valuemax': 0,
	  'aria-valuemin': 0,
	  'aria-valuenow': 0,
	  'aria-valuetext': 0,
	  // Live Region Attributes
	  'aria-atomic': 0,
	  'aria-busy': 0,
	  'aria-live': 0,
	  'aria-relevant': 0,
	  // Drag-and-Drop Attributes
	  'aria-dropeffect': 0,
	  'aria-grabbed': 0,
	  // Relationship Attributes
	  'aria-activedescendant': 0,
	  'aria-colcount': 0,
	  'aria-colindex': 0,
	  'aria-colspan': 0,
	  'aria-controls': 0,
	  'aria-describedby': 0,
	  'aria-errormessage': 0,
	  'aria-flowto': 0,
	  'aria-labelledby': 0,
	  'aria-owns': 0,
	  'aria-posinset': 0,
	  'aria-rowcount': 0,
	  'aria-rowindex': 0,
	  'aria-rowspan': 0,
	  'aria-setsize': 0
	};

	var warnedProperties = {};
	var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
	var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
	var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

	function validateProperty(tagName, name) {
	  {
	    if (hasOwnProperty$1.call(warnedProperties, name) && warnedProperties[name]) {
	      return true;
	    }

	    if (rARIACamel.test(name)) {
	      var ariaName = 'aria-' + name.slice(4).toLowerCase();
	      var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null; // If this is an aria-* attribute, but is not listed in the known DOM
	      // DOM properties, then it is an invalid aria-* attribute.

	      if (correctName == null) {
	        error('Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);

	        warnedProperties[name] = true;
	        return true;
	      } // aria-* attributes should be lowercase; suggest the lowercase version.


	      if (name !== correctName) {
	        error('Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);

	        warnedProperties[name] = true;
	        return true;
	      }
	    }

	    if (rARIA.test(name)) {
	      var lowerCasedName = name.toLowerCase();
	      var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null; // If this is an aria-* attribute, but is not listed in the known DOM
	      // DOM properties, then it is an invalid aria-* attribute.

	      if (standardName == null) {
	        warnedProperties[name] = true;
	        return false;
	      } // aria-* attributes should be lowercase; suggest the lowercase version.


	      if (name !== standardName) {
	        error('Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);

	        warnedProperties[name] = true;
	        return true;
	      }
	    }
	  }

	  return true;
	}

	function warnInvalidARIAProps(type, props) {
	  {
	    var invalidProps = [];

	    for (var key in props) {
	      var isValid = validateProperty(type, key);

	      if (!isValid) {
	        invalidProps.push(key);
	      }
	    }

	    var unknownPropString = invalidProps.map(function (prop) {
	      return '`' + prop + '`';
	    }).join(', ');

	    if (invalidProps.length === 1) {
	      error('Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
	    } else if (invalidProps.length > 1) {
	      error('Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
	    }
	  }
	}

	function validateProperties(type, props) {
	  if (isCustomComponent(type, props)) {
	    return;
	  }

	  warnInvalidARIAProps(type, props);
	}

	var didWarnValueNull = false;
	function validateProperties$1(type, props) {
	  {
	    if (type !== 'input' && type !== 'textarea' && type !== 'select') {
	      return;
	    }

	    if (props != null && props.value === null && !didWarnValueNull) {
	      didWarnValueNull = true;

	      if (type === 'select' && props.multiple) {
	        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
	      } else {
	        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
	      }
	    }
	  }
	}

	/**
	 * Mapping from registration name to plugin module
	 */

	var registrationNameModules = {};
	/**
	 * Mapping from lowercase registration names to the properly cased version,
	 * used to warn in the case of missing event handlers. Available
	 * only in true.
	 * @type {Object}
	 */

	var possibleRegistrationNames =  {} ; // Trust the developer to only use possibleRegistrationNames in true

	// When adding attributes to the HTML or SVG whitelist, be sure to
	// also add them to this module to ensure casing and incorrect name
	// warnings.
	var possibleStandardNames = {
	  // HTML
	  accept: 'accept',
	  acceptcharset: 'acceptCharset',
	  'accept-charset': 'acceptCharset',
	  accesskey: 'accessKey',
	  action: 'action',
	  allowfullscreen: 'allowFullScreen',
	  alt: 'alt',
	  as: 'as',
	  async: 'async',
	  autocapitalize: 'autoCapitalize',
	  autocomplete: 'autoComplete',
	  autocorrect: 'autoCorrect',
	  autofocus: 'autoFocus',
	  autoplay: 'autoPlay',
	  autosave: 'autoSave',
	  capture: 'capture',
	  cellpadding: 'cellPadding',
	  cellspacing: 'cellSpacing',
	  challenge: 'challenge',
	  charset: 'charSet',
	  checked: 'checked',
	  children: 'children',
	  cite: 'cite',
	  class: 'className',
	  classid: 'classID',
	  classname: 'className',
	  cols: 'cols',
	  colspan: 'colSpan',
	  content: 'content',
	  contenteditable: 'contentEditable',
	  contextmenu: 'contextMenu',
	  controls: 'controls',
	  controlslist: 'controlsList',
	  coords: 'coords',
	  crossorigin: 'crossOrigin',
	  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
	  data: 'data',
	  datetime: 'dateTime',
	  default: 'default',
	  defaultchecked: 'defaultChecked',
	  defaultvalue: 'defaultValue',
	  defer: 'defer',
	  dir: 'dir',
	  disabled: 'disabled',
	  disablepictureinpicture: 'disablePictureInPicture',
	  download: 'download',
	  draggable: 'draggable',
	  enctype: 'encType',
	  for: 'htmlFor',
	  form: 'form',
	  formmethod: 'formMethod',
	  formaction: 'formAction',
	  formenctype: 'formEncType',
	  formnovalidate: 'formNoValidate',
	  formtarget: 'formTarget',
	  frameborder: 'frameBorder',
	  headers: 'headers',
	  height: 'height',
	  hidden: 'hidden',
	  high: 'high',
	  href: 'href',
	  hreflang: 'hrefLang',
	  htmlfor: 'htmlFor',
	  httpequiv: 'httpEquiv',
	  'http-equiv': 'httpEquiv',
	  icon: 'icon',
	  id: 'id',
	  innerhtml: 'innerHTML',
	  inputmode: 'inputMode',
	  integrity: 'integrity',
	  is: 'is',
	  itemid: 'itemID',
	  itemprop: 'itemProp',
	  itemref: 'itemRef',
	  itemscope: 'itemScope',
	  itemtype: 'itemType',
	  keyparams: 'keyParams',
	  keytype: 'keyType',
	  kind: 'kind',
	  label: 'label',
	  lang: 'lang',
	  list: 'list',
	  loop: 'loop',
	  low: 'low',
	  manifest: 'manifest',
	  marginwidth: 'marginWidth',
	  marginheight: 'marginHeight',
	  max: 'max',
	  maxlength: 'maxLength',
	  media: 'media',
	  mediagroup: 'mediaGroup',
	  method: 'method',
	  min: 'min',
	  minlength: 'minLength',
	  multiple: 'multiple',
	  muted: 'muted',
	  name: 'name',
	  nomodule: 'noModule',
	  nonce: 'nonce',
	  novalidate: 'noValidate',
	  open: 'open',
	  optimum: 'optimum',
	  pattern: 'pattern',
	  placeholder: 'placeholder',
	  playsinline: 'playsInline',
	  poster: 'poster',
	  preload: 'preload',
	  profile: 'profile',
	  radiogroup: 'radioGroup',
	  readonly: 'readOnly',
	  referrerpolicy: 'referrerPolicy',
	  rel: 'rel',
	  required: 'required',
	  reversed: 'reversed',
	  role: 'role',
	  rows: 'rows',
	  rowspan: 'rowSpan',
	  sandbox: 'sandbox',
	  scope: 'scope',
	  scoped: 'scoped',
	  scrolling: 'scrolling',
	  seamless: 'seamless',
	  selected: 'selected',
	  shape: 'shape',
	  size: 'size',
	  sizes: 'sizes',
	  span: 'span',
	  spellcheck: 'spellCheck',
	  src: 'src',
	  srcdoc: 'srcDoc',
	  srclang: 'srcLang',
	  srcset: 'srcSet',
	  start: 'start',
	  step: 'step',
	  style: 'style',
	  summary: 'summary',
	  tabindex: 'tabIndex',
	  target: 'target',
	  title: 'title',
	  type: 'type',
	  usemap: 'useMap',
	  value: 'value',
	  width: 'width',
	  wmode: 'wmode',
	  wrap: 'wrap',
	  // SVG
	  about: 'about',
	  accentheight: 'accentHeight',
	  'accent-height': 'accentHeight',
	  accumulate: 'accumulate',
	  additive: 'additive',
	  alignmentbaseline: 'alignmentBaseline',
	  'alignment-baseline': 'alignmentBaseline',
	  allowreorder: 'allowReorder',
	  alphabetic: 'alphabetic',
	  amplitude: 'amplitude',
	  arabicform: 'arabicForm',
	  'arabic-form': 'arabicForm',
	  ascent: 'ascent',
	  attributename: 'attributeName',
	  attributetype: 'attributeType',
	  autoreverse: 'autoReverse',
	  azimuth: 'azimuth',
	  basefrequency: 'baseFrequency',
	  baselineshift: 'baselineShift',
	  'baseline-shift': 'baselineShift',
	  baseprofile: 'baseProfile',
	  bbox: 'bbox',
	  begin: 'begin',
	  bias: 'bias',
	  by: 'by',
	  calcmode: 'calcMode',
	  capheight: 'capHeight',
	  'cap-height': 'capHeight',
	  clip: 'clip',
	  clippath: 'clipPath',
	  'clip-path': 'clipPath',
	  clippathunits: 'clipPathUnits',
	  cliprule: 'clipRule',
	  'clip-rule': 'clipRule',
	  color: 'color',
	  colorinterpolation: 'colorInterpolation',
	  'color-interpolation': 'colorInterpolation',
	  colorinterpolationfilters: 'colorInterpolationFilters',
	  'color-interpolation-filters': 'colorInterpolationFilters',
	  colorprofile: 'colorProfile',
	  'color-profile': 'colorProfile',
	  colorrendering: 'colorRendering',
	  'color-rendering': 'colorRendering',
	  contentscripttype: 'contentScriptType',
	  contentstyletype: 'contentStyleType',
	  cursor: 'cursor',
	  cx: 'cx',
	  cy: 'cy',
	  d: 'd',
	  datatype: 'datatype',
	  decelerate: 'decelerate',
	  descent: 'descent',
	  diffuseconstant: 'diffuseConstant',
	  direction: 'direction',
	  display: 'display',
	  divisor: 'divisor',
	  dominantbaseline: 'dominantBaseline',
	  'dominant-baseline': 'dominantBaseline',
	  dur: 'dur',
	  dx: 'dx',
	  dy: 'dy',
	  edgemode: 'edgeMode',
	  elevation: 'elevation',
	  enablebackground: 'enableBackground',
	  'enable-background': 'enableBackground',
	  end: 'end',
	  exponent: 'exponent',
	  externalresourcesrequired: 'externalResourcesRequired',
	  fill: 'fill',
	  fillopacity: 'fillOpacity',
	  'fill-opacity': 'fillOpacity',
	  fillrule: 'fillRule',
	  'fill-rule': 'fillRule',
	  filter: 'filter',
	  filterres: 'filterRes',
	  filterunits: 'filterUnits',
	  floodopacity: 'floodOpacity',
	  'flood-opacity': 'floodOpacity',
	  floodcolor: 'floodColor',
	  'flood-color': 'floodColor',
	  focusable: 'focusable',
	  fontfamily: 'fontFamily',
	  'font-family': 'fontFamily',
	  fontsize: 'fontSize',
	  'font-size': 'fontSize',
	  fontsizeadjust: 'fontSizeAdjust',
	  'font-size-adjust': 'fontSizeAdjust',
	  fontstretch: 'fontStretch',
	  'font-stretch': 'fontStretch',
	  fontstyle: 'fontStyle',
	  'font-style': 'fontStyle',
	  fontvariant: 'fontVariant',
	  'font-variant': 'fontVariant',
	  fontweight: 'fontWeight',
	  'font-weight': 'fontWeight',
	  format: 'format',
	  from: 'from',
	  fx: 'fx',
	  fy: 'fy',
	  g1: 'g1',
	  g2: 'g2',
	  glyphname: 'glyphName',
	  'glyph-name': 'glyphName',
	  glyphorientationhorizontal: 'glyphOrientationHorizontal',
	  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
	  glyphorientationvertical: 'glyphOrientationVertical',
	  'glyph-orientation-vertical': 'glyphOrientationVertical',
	  glyphref: 'glyphRef',
	  gradienttransform: 'gradientTransform',
	  gradientunits: 'gradientUnits',
	  hanging: 'hanging',
	  horizadvx: 'horizAdvX',
	  'horiz-adv-x': 'horizAdvX',
	  horizoriginx: 'horizOriginX',
	  'horiz-origin-x': 'horizOriginX',
	  ideographic: 'ideographic',
	  imagerendering: 'imageRendering',
	  'image-rendering': 'imageRendering',
	  in2: 'in2',
	  in: 'in',
	  inlist: 'inlist',
	  intercept: 'intercept',
	  k1: 'k1',
	  k2: 'k2',
	  k3: 'k3',
	  k4: 'k4',
	  k: 'k',
	  kernelmatrix: 'kernelMatrix',
	  kernelunitlength: 'kernelUnitLength',
	  kerning: 'kerning',
	  keypoints: 'keyPoints',
	  keysplines: 'keySplines',
	  keytimes: 'keyTimes',
	  lengthadjust: 'lengthAdjust',
	  letterspacing: 'letterSpacing',
	  'letter-spacing': 'letterSpacing',
	  lightingcolor: 'lightingColor',
	  'lighting-color': 'lightingColor',
	  limitingconeangle: 'limitingConeAngle',
	  local: 'local',
	  markerend: 'markerEnd',
	  'marker-end': 'markerEnd',
	  markerheight: 'markerHeight',
	  markermid: 'markerMid',
	  'marker-mid': 'markerMid',
	  markerstart: 'markerStart',
	  'marker-start': 'markerStart',
	  markerunits: 'markerUnits',
	  markerwidth: 'markerWidth',
	  mask: 'mask',
	  maskcontentunits: 'maskContentUnits',
	  maskunits: 'maskUnits',
	  mathematical: 'mathematical',
	  mode: 'mode',
	  numoctaves: 'numOctaves',
	  offset: 'offset',
	  opacity: 'opacity',
	  operator: 'operator',
	  order: 'order',
	  orient: 'orient',
	  orientation: 'orientation',
	  origin: 'origin',
	  overflow: 'overflow',
	  overlineposition: 'overlinePosition',
	  'overline-position': 'overlinePosition',
	  overlinethickness: 'overlineThickness',
	  'overline-thickness': 'overlineThickness',
	  paintorder: 'paintOrder',
	  'paint-order': 'paintOrder',
	  panose1: 'panose1',
	  'panose-1': 'panose1',
	  pathlength: 'pathLength',
	  patterncontentunits: 'patternContentUnits',
	  patterntransform: 'patternTransform',
	  patternunits: 'patternUnits',
	  pointerevents: 'pointerEvents',
	  'pointer-events': 'pointerEvents',
	  points: 'points',
	  pointsatx: 'pointsAtX',
	  pointsaty: 'pointsAtY',
	  pointsatz: 'pointsAtZ',
	  prefix: 'prefix',
	  preservealpha: 'preserveAlpha',
	  preserveaspectratio: 'preserveAspectRatio',
	  primitiveunits: 'primitiveUnits',
	  property: 'property',
	  r: 'r',
	  radius: 'radius',
	  refx: 'refX',
	  refy: 'refY',
	  renderingintent: 'renderingIntent',
	  'rendering-intent': 'renderingIntent',
	  repeatcount: 'repeatCount',
	  repeatdur: 'repeatDur',
	  requiredextensions: 'requiredExtensions',
	  requiredfeatures: 'requiredFeatures',
	  resource: 'resource',
	  restart: 'restart',
	  result: 'result',
	  results: 'results',
	  rotate: 'rotate',
	  rx: 'rx',
	  ry: 'ry',
	  scale: 'scale',
	  security: 'security',
	  seed: 'seed',
	  shaperendering: 'shapeRendering',
	  'shape-rendering': 'shapeRendering',
	  slope: 'slope',
	  spacing: 'spacing',
	  specularconstant: 'specularConstant',
	  specularexponent: 'specularExponent',
	  speed: 'speed',
	  spreadmethod: 'spreadMethod',
	  startoffset: 'startOffset',
	  stddeviation: 'stdDeviation',
	  stemh: 'stemh',
	  stemv: 'stemv',
	  stitchtiles: 'stitchTiles',
	  stopcolor: 'stopColor',
	  'stop-color': 'stopColor',
	  stopopacity: 'stopOpacity',
	  'stop-opacity': 'stopOpacity',
	  strikethroughposition: 'strikethroughPosition',
	  'strikethrough-position': 'strikethroughPosition',
	  strikethroughthickness: 'strikethroughThickness',
	  'strikethrough-thickness': 'strikethroughThickness',
	  string: 'string',
	  stroke: 'stroke',
	  strokedasharray: 'strokeDasharray',
	  'stroke-dasharray': 'strokeDasharray',
	  strokedashoffset: 'strokeDashoffset',
	  'stroke-dashoffset': 'strokeDashoffset',
	  strokelinecap: 'strokeLinecap',
	  'stroke-linecap': 'strokeLinecap',
	  strokelinejoin: 'strokeLinejoin',
	  'stroke-linejoin': 'strokeLinejoin',
	  strokemiterlimit: 'strokeMiterlimit',
	  'stroke-miterlimit': 'strokeMiterlimit',
	  strokewidth: 'strokeWidth',
	  'stroke-width': 'strokeWidth',
	  strokeopacity: 'strokeOpacity',
	  'stroke-opacity': 'strokeOpacity',
	  suppresscontenteditablewarning: 'suppressContentEditableWarning',
	  suppresshydrationwarning: 'suppressHydrationWarning',
	  surfacescale: 'surfaceScale',
	  systemlanguage: 'systemLanguage',
	  tablevalues: 'tableValues',
	  targetx: 'targetX',
	  targety: 'targetY',
	  textanchor: 'textAnchor',
	  'text-anchor': 'textAnchor',
	  textdecoration: 'textDecoration',
	  'text-decoration': 'textDecoration',
	  textlength: 'textLength',
	  textrendering: 'textRendering',
	  'text-rendering': 'textRendering',
	  to: 'to',
	  transform: 'transform',
	  typeof: 'typeof',
	  u1: 'u1',
	  u2: 'u2',
	  underlineposition: 'underlinePosition',
	  'underline-position': 'underlinePosition',
	  underlinethickness: 'underlineThickness',
	  'underline-thickness': 'underlineThickness',
	  unicode: 'unicode',
	  unicodebidi: 'unicodeBidi',
	  'unicode-bidi': 'unicodeBidi',
	  unicoderange: 'unicodeRange',
	  'unicode-range': 'unicodeRange',
	  unitsperem: 'unitsPerEm',
	  'units-per-em': 'unitsPerEm',
	  unselectable: 'unselectable',
	  valphabetic: 'vAlphabetic',
	  'v-alphabetic': 'vAlphabetic',
	  values: 'values',
	  vectoreffect: 'vectorEffect',
	  'vector-effect': 'vectorEffect',
	  version: 'version',
	  vertadvy: 'vertAdvY',
	  'vert-adv-y': 'vertAdvY',
	  vertoriginx: 'vertOriginX',
	  'vert-origin-x': 'vertOriginX',
	  vertoriginy: 'vertOriginY',
	  'vert-origin-y': 'vertOriginY',
	  vhanging: 'vHanging',
	  'v-hanging': 'vHanging',
	  videographic: 'vIdeographic',
	  'v-ideographic': 'vIdeographic',
	  viewbox: 'viewBox',
	  viewtarget: 'viewTarget',
	  visibility: 'visibility',
	  vmathematical: 'vMathematical',
	  'v-mathematical': 'vMathematical',
	  vocab: 'vocab',
	  widths: 'widths',
	  wordspacing: 'wordSpacing',
	  'word-spacing': 'wordSpacing',
	  writingmode: 'writingMode',
	  'writing-mode': 'writingMode',
	  x1: 'x1',
	  x2: 'x2',
	  x: 'x',
	  xchannelselector: 'xChannelSelector',
	  xheight: 'xHeight',
	  'x-height': 'xHeight',
	  xlinkactuate: 'xlinkActuate',
	  'xlink:actuate': 'xlinkActuate',
	  xlinkarcrole: 'xlinkArcrole',
	  'xlink:arcrole': 'xlinkArcrole',
	  xlinkhref: 'xlinkHref',
	  'xlink:href': 'xlinkHref',
	  xlinkrole: 'xlinkRole',
	  'xlink:role': 'xlinkRole',
	  xlinkshow: 'xlinkShow',
	  'xlink:show': 'xlinkShow',
	  xlinktitle: 'xlinkTitle',
	  'xlink:title': 'xlinkTitle',
	  xlinktype: 'xlinkType',
	  'xlink:type': 'xlinkType',
	  xmlbase: 'xmlBase',
	  'xml:base': 'xmlBase',
	  xmllang: 'xmlLang',
	  'xml:lang': 'xmlLang',
	  xmlns: 'xmlns',
	  'xml:space': 'xmlSpace',
	  xmlnsxlink: 'xmlnsXlink',
	  'xmlns:xlink': 'xmlnsXlink',
	  xmlspace: 'xmlSpace',
	  y1: 'y1',
	  y2: 'y2',
	  y: 'y',
	  ychannelselector: 'yChannelSelector',
	  z: 'z',
	  zoomandpan: 'zoomAndPan'
	};

	var validateProperty$1 = function () {};

	{
	  var warnedProperties$1 = {};
	  var _hasOwnProperty = Object.prototype.hasOwnProperty;
	  var EVENT_NAME_REGEX = /^on./;
	  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
	  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
	  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

	  validateProperty$1 = function (tagName, name, value, canUseEventSystem) {
	    if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
	      return true;
	    }

	    var lowerCasedName = name.toLowerCase();

	    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
	      error('React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');

	      warnedProperties$1[name] = true;
	      return true;
	    } // We can't rely on the event system being injected on the server.


	    if (canUseEventSystem) {
	      if (registrationNameModules.hasOwnProperty(name)) {
	        return true;
	      }

	      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;

	      if (registrationName != null) {
	        error('Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);

	        warnedProperties$1[name] = true;
	        return true;
	      }

	      if (EVENT_NAME_REGEX.test(name)) {
	        error('Unknown event handler property `%s`. It will be ignored.', name);

	        warnedProperties$1[name] = true;
	        return true;
	      }
	    } else if (EVENT_NAME_REGEX.test(name)) {
	      // If no event plugins have been injected, we are in a server environment.
	      // So we can't tell if the event name is correct for sure, but we can filter
	      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
	      if (INVALID_EVENT_NAME_REGEX.test(name)) {
	        error('Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
	      }

	      warnedProperties$1[name] = true;
	      return true;
	    } // Let the ARIA attribute hook validate ARIA attributes


	    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
	      return true;
	    }

	    if (lowerCasedName === 'innerhtml') {
	      error('Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');

	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (lowerCasedName === 'aria') {
	      error('The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');

	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
	      error('Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);

	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (typeof value === 'number' && isNaN(value)) {
	      error('Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);

	      warnedProperties$1[name] = true;
	      return true;
	    }

	    var propertyInfo = getPropertyInfo(name);
	    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED; // Known attributes should match the casing specified in the property config.

	    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
	      var standardName = possibleStandardNames[lowerCasedName];

	      if (standardName !== name) {
	        error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);

	        warnedProperties$1[name] = true;
	        return true;
	      }
	    } else if (!isReserved && name !== lowerCasedName) {
	      // Unknown attributes should have lowercase casing since that's how they
	      // will be cased anyway with server rendering.
	      error('React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);

	      warnedProperties$1[name] = true;
	      return true;
	    }

	    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
	      if (value) {
	        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
	      } else {
	        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
	      }

	      warnedProperties$1[name] = true;
	      return true;
	    } // Now that we've validated casing, do not validate
	    // data types for reserved props


	    if (isReserved) {
	      return true;
	    } // Warn when a known attribute is a bad type


	    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
	      warnedProperties$1[name] = true;
	      return false;
	    } // Warn when passing the strings 'false' or 'true' into a boolean prop


	    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
	      error('Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);

	      warnedProperties$1[name] = true;
	      return true;
	    }

	    return true;
	  };
	}

	var warnUnknownProperties = function (type, props, canUseEventSystem) {
	  {
	    var unknownProps = [];

	    for (var key in props) {
	      var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);

	      if (!isValid) {
	        unknownProps.push(key);
	      }
	    }

	    var unknownPropString = unknownProps.map(function (prop) {
	      return '`' + prop + '`';
	    }).join(', ');

	    if (unknownProps.length === 1) {
	      error('Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
	    } else if (unknownProps.length > 1) {
	      error('Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
	    }
	  }
	};

	function validateProperties$2(type, props, canUseEventSystem) {
	  if (isCustomComponent(type, props)) {
	    return;
	  }

	  warnUnknownProperties(type, props, canUseEventSystem);
	}

	var toArray = React.Children.toArray; // This is only used in DEV.
	// Each entry is `this.stack` from a currently executing renderer instance.
	// (There may be more than one because ReactDOMServer is reentrant).
	// Each stack is an array of frames which may contain nested stacks of elements.

	var currentDebugStacks = [];
	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var ReactDebugCurrentFrame$4;
	var prevGetCurrentStackImpl = null;

	var getCurrentServerStackImpl = function () {
	  return '';
	};

	var describeStackFrame = function (element) {
	  return '';
	};

	var validatePropertiesInDevelopment = function (type, props) {};

	var pushCurrentDebugStack = function (stack) {};

	var pushElementToDebugStack = function (element) {};

	var popCurrentDebugStack = function () {};

	var hasWarnedAboutUsingContextAsConsumer = false;

	{
	  ReactDebugCurrentFrame$4 = ReactSharedInternals.ReactDebugCurrentFrame;

	  validatePropertiesInDevelopment = function (type, props) {
	    validateProperties(type, props);
	    validateProperties$1(type, props);
	    validateProperties$2(type, props,
	    /* canUseEventSystem */
	    false);
	  };

	  describeStackFrame = function (element) {
	    var source = element._source;
	    var type = element.type;
	    var name = getComponentName(type);
	    var ownerName = null;
	    return describeComponentFrame(name, source, ownerName);
	  };

	  pushCurrentDebugStack = function (stack) {
	    currentDebugStacks.push(stack);

	    if (currentDebugStacks.length === 1) {
	      // We are entering a server renderer.
	      // Remember the previous (e.g. client) global stack implementation.
	      prevGetCurrentStackImpl = ReactDebugCurrentFrame$4.getCurrentStack;
	      ReactDebugCurrentFrame$4.getCurrentStack = getCurrentServerStackImpl;
	    }
	  };

	  pushElementToDebugStack = function (element) {
	    // For the innermost executing ReactDOMServer call,
	    var stack = currentDebugStacks[currentDebugStacks.length - 1]; // Take the innermost executing frame (e.g. <Foo>),

	    var frame = stack[stack.length - 1]; // and record that it has one more element associated with it.

	    frame.debugElementStack.push(element); // We only need this because we tail-optimize single-element
	    // children and directly handle them in an inner loop instead of
	    // creating separate frames for them.
	  };

	  popCurrentDebugStack = function () {
	    currentDebugStacks.pop();

	    if (currentDebugStacks.length === 0) {
	      // We are exiting the server renderer.
	      // Restore the previous (e.g. client) global stack implementation.
	      ReactDebugCurrentFrame$4.getCurrentStack = prevGetCurrentStackImpl;
	      prevGetCurrentStackImpl = null;
	    }
	  };

	  getCurrentServerStackImpl = function () {
	    if (currentDebugStacks.length === 0) {
	      // Nothing is currently rendering.
	      return '';
	    } // ReactDOMServer is reentrant so there may be multiple calls at the same time.
	    // Take the frames from the innermost call which is the last in the array.


	    var frames = currentDebugStacks[currentDebugStacks.length - 1];
	    var stack = ''; // Go through every frame in the stack from the innermost one.

	    for (var i = frames.length - 1; i >= 0; i--) {
	      var frame = frames[i]; // Every frame might have more than one debug element stack entry associated with it.
	      // This is because single-child nesting doesn't create materialized frames.
	      // Instead it would push them through `pushElementToDebugStack()`.

	      var debugElementStack = frame.debugElementStack;

	      for (var ii = debugElementStack.length - 1; ii >= 0; ii--) {
	        stack += describeStackFrame(debugElementStack[ii]);
	      }
	    }

	    return stack;
	  };
	}

	var didWarnDefaultInputValue = false;
	var didWarnDefaultChecked = false;
	var didWarnDefaultSelectValue = false;
	var didWarnDefaultTextareaValue = false;
	var didWarnInvalidOptionChildren = false;
	var didWarnAboutNoopUpdateForComponent = {};
	var didWarnAboutBadClass = {};
	var didWarnAboutModulePatternComponent = {};
	var didWarnAboutDeprecatedWillMount = {};
	var didWarnAboutUndefinedDerivedState = {};
	var didWarnAboutUninitializedState = {};
	var valuePropNames = ['value', 'defaultValue'];
	var newlineEatingTags = {
	  listing: true,
	  pre: true,
	  textarea: true
	}; // We accept any tag to be rendered but since this gets injected into arbitrary
	// HTML, we want to make sure that it's a safe tag.
	// http://www.w3.org/TR/REC-xml/#NT-Name

	var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset

	var validatedTagCache = {};

	function validateDangerousTag(tag) {
	  if (!validatedTagCache.hasOwnProperty(tag)) {
	    if (!VALID_TAG_REGEX.test(tag)) {
	      {
	        throw Error( "Invalid tag: " + tag );
	      }
	    }

	    validatedTagCache[tag] = true;
	  }
	}

	var styleNameCache = {};

	var processStyleName = function (styleName) {
	  if (styleNameCache.hasOwnProperty(styleName)) {
	    return styleNameCache[styleName];
	  }

	  var result = hyphenateStyleName(styleName);
	  styleNameCache[styleName] = result;
	  return result;
	};

	function createMarkupForStyles(styles) {
	  var serialized = '';
	  var delimiter = '';

	  for (var styleName in styles) {
	    if (!styles.hasOwnProperty(styleName)) {
	      continue;
	    }

	    var isCustomProperty = styleName.indexOf('--') === 0;
	    var styleValue = styles[styleName];

	    {
	      if (!isCustomProperty) {
	        warnValidStyle$1(styleName, styleValue);
	      }
	    }

	    if (styleValue != null) {
	      serialized += delimiter + (isCustomProperty ? styleName : processStyleName(styleName)) + ':';
	      serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
	      delimiter = ';';
	    }
	  }

	  return serialized || null;
	}

	function warnNoop(publicInstance, callerName) {
	  {
	    var _constructor = publicInstance.constructor;
	    var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
	    var warningKey = componentName + '.' + callerName;

	    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
	      return;
	    }

	    error('%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);

	    didWarnAboutNoopUpdateForComponent[warningKey] = true;
	  }
	}

	function shouldConstruct(Component) {
	  return Component.prototype && Component.prototype.isReactComponent;
	}

	function getNonChildrenInnerMarkup(props) {
	  var innerHTML = props.dangerouslySetInnerHTML;

	  if (innerHTML != null) {
	    if (innerHTML.__html != null) {
	      return innerHTML.__html;
	    }
	  } else {
	    var content = props.children;

	    if (typeof content === 'string' || typeof content === 'number') {
	      return escapeTextForBrowser(content);
	    }
	  }

	  return null;
	}

	function flattenTopLevelChildren(children) {
	  if (!React.isValidElement(children)) {
	    return toArray(children);
	  }

	  var element = children;

	  if (element.type !== REACT_FRAGMENT_TYPE) {
	    return [element];
	  }

	  var fragmentChildren = element.props.children;

	  if (!React.isValidElement(fragmentChildren)) {
	    return toArray(fragmentChildren);
	  }

	  var fragmentChildElement = fragmentChildren;
	  return [fragmentChildElement];
	}

	function flattenOptionChildren(children) {
	  if (children === undefined || children === null) {
	    return children;
	  }

	  var content = ''; // Flatten children and warn if they aren't strings or numbers;
	  // invalid types are ignored.

	  React.Children.forEach(children, function (child) {
	    if (child == null) {
	      return;
	    }

	    content += child;

	    {
	      if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
	        didWarnInvalidOptionChildren = true;

	        error('Only strings and numbers are supported as <option> children.');
	      }
	    }
	  });
	  return content;
	}

	var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
	var STYLE = 'style';
	var RESERVED_PROPS = {
	  children: null,
	  dangerouslySetInnerHTML: null,
	  suppressContentEditableWarning: null,
	  suppressHydrationWarning: null
	};

	function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
	  var ret = '<' + tagVerbatim;

	  for (var propKey in props) {
	    if (!hasOwnProperty$2.call(props, propKey)) {
	      continue;
	    }

	    var propValue = props[propKey];

	    if (propValue == null) {
	      continue;
	    }

	    if (propKey === STYLE) {
	      propValue = createMarkupForStyles(propValue);
	    }

	    var markup = null;

	    if (isCustomComponent(tagLowercase, props)) {
	      if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
	        markup = createMarkupForCustomAttribute(propKey, propValue);
	      }
	    } else {
	      markup = createMarkupForProperty(propKey, propValue);
	    }

	    if (markup) {
	      ret += ' ' + markup;
	    }
	  } // For static pages, no need to put React ID and checksum. Saves lots of
	  // bytes.


	  if (makeStaticMarkup) {
	    return ret;
	  }

	  if (isRootElement) {
	    ret += ' ' + createMarkupForRoot();
	  }

	  return ret;
	}

	function validateRenderResult(child, type) {
	  if (child === undefined) {
	    {
	      {
	        throw Error( (getComponentName(type) || 'Component') + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null." );
	      }
	    }
	  }
	}

	function resolve(child, context, threadID) {
	  while (React.isValidElement(child)) {
	    // Safe because we just checked it's an element.
	    var element = child;
	    var Component = element.type;

	    {
	      pushElementToDebugStack(element);
	    }

	    if (typeof Component !== 'function') {
	      break;
	    }

	    processChild(element, Component);
	  } // Extra closure so queue and replace can be captured properly


	  function processChild(element, Component) {
	    var isClass = shouldConstruct(Component);
	    var publicContext = processContext(Component, context, threadID, isClass);
	    var queue = [];
	    var replace = false;
	    var updater = {
	      isMounted: function (publicInstance) {
	        return false;
	      },
	      enqueueForceUpdate: function (publicInstance) {
	        if (queue === null) {
	          warnNoop(publicInstance, 'forceUpdate');
	          return null;
	        }
	      },
	      enqueueReplaceState: function (publicInstance, completeState) {
	        replace = true;
	        queue = [completeState];
	      },
	      enqueueSetState: function (publicInstance, currentPartialState) {
	        if (queue === null) {
	          warnNoop(publicInstance, 'setState');
	          return null;
	        }

	        queue.push(currentPartialState);
	      }
	    };
	    var inst;

	    if (isClass) {
	      inst = new Component(element.props, publicContext, updater);

	      if (typeof Component.getDerivedStateFromProps === 'function') {
	        {
	          if (inst.state === null || inst.state === undefined) {
	            var componentName = getComponentName(Component) || 'Unknown';

	            if (!didWarnAboutUninitializedState[componentName]) {
	              error('`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, inst.state === null ? 'null' : 'undefined', componentName);

	              didWarnAboutUninitializedState[componentName] = true;
	            }
	          }
	        }

	        var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);

	        {
	          if (partialState === undefined) {
	            var _componentName = getComponentName(Component) || 'Unknown';

	            if (!didWarnAboutUndefinedDerivedState[_componentName]) {
	              error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);

	              didWarnAboutUndefinedDerivedState[_componentName] = true;
	            }
	          }
	        }

	        if (partialState != null) {
	          inst.state = _assign({}, inst.state, partialState);
	        }
	      }
	    } else {
	      {
	        if (Component.prototype && typeof Component.prototype.render === 'function') {
	          var _componentName2 = getComponentName(Component) || 'Unknown';

	          if (!didWarnAboutBadClass[_componentName2]) {
	            error("The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);

	            didWarnAboutBadClass[_componentName2] = true;
	          }
	        }
	      }

	      var componentIdentity = {};
	      prepareToUseHooks(componentIdentity);
	      inst = Component(element.props, publicContext, updater);
	      inst = finishHooks(Component, element.props, inst, publicContext);

	      if (inst == null || inst.render == null) {
	        child = inst;
	        validateRenderResult(child, Component);
	        return;
	      }

	      {
	        var _componentName3 = getComponentName(Component) || 'Unknown';

	        if (!didWarnAboutModulePatternComponent[_componentName3]) {
	          error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName3, _componentName3, _componentName3);

	          didWarnAboutModulePatternComponent[_componentName3] = true;
	        }
	      }
	    }

	    inst.props = element.props;
	    inst.context = publicContext;
	    inst.updater = updater;
	    var initialState = inst.state;

	    if (initialState === undefined) {
	      inst.state = initialState = null;
	    }

	    if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
	      if (typeof inst.componentWillMount === 'function') {
	        {
	          if ( inst.componentWillMount.__suppressDeprecationWarning !== true) {
	            var _componentName4 = getComponentName(Component) || 'Unknown';

	            if (!didWarnAboutDeprecatedWillMount[_componentName4]) {
	              warn( // keep this warning in sync with ReactStrictModeWarning.js
	              'componentWillMount has been renamed, and is not recommended for use. ' + 'See https://fb.me/react-unsafe-component-lifecycles for details.\n\n' + '* Move code from componentWillMount to componentDidMount (preferred in most cases) ' + 'or the constructor.\n' + '\nPlease update the following components: %s', _componentName4);

	              didWarnAboutDeprecatedWillMount[_componentName4] = true;
	            }
	          }
	        } // In order to support react-lifecycles-compat polyfilled components,
	        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.


	        if (typeof Component.getDerivedStateFromProps !== 'function') {
	          inst.componentWillMount();
	        }
	      }

	      if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
	        // In order to support react-lifecycles-compat polyfilled components,
	        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
	        inst.UNSAFE_componentWillMount();
	      }

	      if (queue.length) {
	        var oldQueue = queue;
	        var oldReplace = replace;
	        queue = null;
	        replace = false;

	        if (oldReplace && oldQueue.length === 1) {
	          inst.state = oldQueue[0];
	        } else {
	          var nextState = oldReplace ? oldQueue[0] : inst.state;
	          var dontMutate = true;

	          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
	            var partial = oldQueue[i];

	            var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;

	            if (_partialState != null) {
	              if (dontMutate) {
	                dontMutate = false;
	                nextState = _assign({}, nextState, _partialState);
	              } else {
	                _assign(nextState, _partialState);
	              }
	            }
	          }

	          inst.state = nextState;
	        }
	      } else {
	        queue = null;
	      }
	    }

	    child = inst.render();

	    {
	      if (child === undefined && inst.render._isMockFunction) {
	        // This is probably bad practice. Consider warning here and
	        // deprecating this convenience.
	        child = null;
	      }
	    }

	    validateRenderResult(child, Component);
	    var childContext;

	    {
	      if (typeof inst.getChildContext === 'function') {
	        var _childContextTypes = Component.childContextTypes;

	        if (typeof _childContextTypes === 'object') {
	          childContext = inst.getChildContext();

	          for (var contextKey in childContext) {
	            if (!(contextKey in _childContextTypes)) {
	              {
	                throw Error( (getComponentName(Component) || 'Unknown') + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes." );
	              }
	            }
	          }
	        } else {
	          {
	            error('%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
	          }
	        }
	      }

	      if (childContext) {
	        context = _assign({}, context, childContext);
	      }
	    }
	  }

	  return {
	    child: child,
	    context: context
	  };
	}

	var ReactDOMServerRenderer =
	/*#__PURE__*/
	function () {
	  // TODO: type this more strictly:
	  // DEV-only
	  function ReactDOMServerRenderer(children, makeStaticMarkup) {
	    var flatChildren = flattenTopLevelChildren(children);
	    var topFrame = {
	      type: null,
	      // Assume all trees start in the HTML namespace (not totally true, but
	      // this is what we did historically)
	      domNamespace: Namespaces.html,
	      children: flatChildren,
	      childIndex: 0,
	      context: emptyObject,
	      footer: ''
	    };

	    {
	      topFrame.debugElementStack = [];
	    }

	    this.threadID = allocThreadID();
	    this.stack = [topFrame];
	    this.exhausted = false;
	    this.currentSelectValue = null;
	    this.previousWasTextNode = false;
	    this.makeStaticMarkup = makeStaticMarkup;
	    this.suspenseDepth = 0; // Context (new API)

	    this.contextIndex = -1;
	    this.contextStack = [];
	    this.contextValueStack = [];

	    {
	      this.contextProviderStack = [];
	    }
	  }

	  var _proto = ReactDOMServerRenderer.prototype;

	  _proto.destroy = function destroy() {
	    if (!this.exhausted) {
	      this.exhausted = true;
	      this.clearProviders();
	      freeThreadID(this.threadID);
	    }
	  }
	  /**
	   * Note: We use just two stacks regardless of how many context providers you have.
	   * Providers are always popped in the reverse order to how they were pushed
	   * so we always know on the way down which provider you'll encounter next on the way up.
	   * On the way down, we push the current provider, and its context value *before*
	   * we mutated it, onto the stacks. Therefore, on the way up, we always know which
	   * provider needs to be "restored" to which value.
	   * https://github.com/facebook/react/pull/12985#issuecomment-396301248
	   */
	  ;

	  _proto.pushProvider = function pushProvider(provider) {
	    var index = ++this.contextIndex;
	    var context = provider.type._context;
	    var threadID = this.threadID;
	    validateContextBounds(context, threadID);
	    var previousValue = context[threadID]; // Remember which value to restore this context to on our way up.

	    this.contextStack[index] = context;
	    this.contextValueStack[index] = previousValue;

	    {
	      // Only used for push/pop mismatch warnings.
	      this.contextProviderStack[index] = provider;
	    } // Mutate the current value.


	    context[threadID] = provider.props.value;
	  };

	  _proto.popProvider = function popProvider(provider) {
	    var index = this.contextIndex;

	    {
	      if (index < 0 || provider !== this.contextProviderStack[index]) {
	        error('Unexpected pop.');
	      }
	    }

	    var context = this.contextStack[index];
	    var previousValue = this.contextValueStack[index]; // "Hide" these null assignments from Flow by using `any`
	    // because conceptually they are deletions--as long as we
	    // promise to never access values beyond `this.contextIndex`.

	    this.contextStack[index] = null;
	    this.contextValueStack[index] = null;

	    {
	      this.contextProviderStack[index] = null;
	    }

	    this.contextIndex--; // Restore to the previous value we stored as we were walking down.
	    // We've already verified that this context has been expanded to accommodate
	    // this thread id, so we don't need to do it again.

	    context[this.threadID] = previousValue;
	  };

	  _proto.clearProviders = function clearProviders() {
	    // Restore any remaining providers on the stack to previous values
	    for (var index = this.contextIndex; index >= 0; index--) {
	      var context = this.contextStack[index];
	      var previousValue = this.contextValueStack[index];
	      context[this.threadID] = previousValue;
	    }
	  };

	  _proto.read = function read(bytes) {
	    if (this.exhausted) {
	      return null;
	    }

	    var prevThreadID = currentThreadID;
	    setCurrentThreadID(this.threadID);
	    var prevDispatcher = ReactCurrentDispatcher.current;
	    ReactCurrentDispatcher.current = Dispatcher;

	    try {
	      // Markup generated within <Suspense> ends up buffered until we know
	      // nothing in that boundary suspended
	      var out = [''];
	      var suspended = false;

	      while (out[0].length < bytes) {
	        if (this.stack.length === 0) {
	          this.exhausted = true;
	          freeThreadID(this.threadID);
	          break;
	        }

	        var frame = this.stack[this.stack.length - 1];

	        if (suspended || frame.childIndex >= frame.children.length) {
	          var footer = frame.footer;

	          if (footer !== '') {
	            this.previousWasTextNode = false;
	          }

	          this.stack.pop();

	          if (frame.type === 'select') {
	            this.currentSelectValue = null;
	          } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
	            var provider = frame.type;
	            this.popProvider(provider);
	          } else if (frame.type === REACT_SUSPENSE_TYPE) {
	            this.suspenseDepth--;
	            var buffered = out.pop();

	            if (suspended) {
	              suspended = false; // If rendering was suspended at this boundary, render the fallbackFrame

	              var fallbackFrame = frame.fallbackFrame;

	              if (!fallbackFrame) {
	                {
	                  throw Error(true ? "ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue." : formatProdErrorMessage(303));
	                }
	              }

	              this.stack.push(fallbackFrame);
	              out[this.suspenseDepth] += '<!--$!-->'; // Skip flushing output since we're switching to the fallback

	              continue;
	            } else {
	              out[this.suspenseDepth] += buffered;
	            }
	          } // Flush output


	          out[this.suspenseDepth] += footer;
	          continue;
	        }

	        var child = frame.children[frame.childIndex++];
	        var outBuffer = '';

	        if (true) {
	          pushCurrentDebugStack(this.stack); // We're starting work on this frame, so reset its inner stack.

	          frame.debugElementStack.length = 0;
	        }

	        try {
	          outBuffer += this.render(child, frame.context, frame.domNamespace);
	        } catch (err) {
	          if (err != null && typeof err.then === 'function') {
	            if (enableSuspenseServerRenderer) {
	              if (!(this.suspenseDepth > 0)) {
	                {
	                  throw Error(true ? "A React component suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." : formatProdErrorMessage(342));
	                }
	              }

	              suspended = true;
	            } else {
	              if (!false) {
	                {
	                  throw Error(true ? "ReactDOMServer does not yet support Suspense." : formatProdErrorMessage(294));
	                }
	              }
	            }
	          } else {
	            throw err;
	          }
	        } finally {
	          if (true) {
	            popCurrentDebugStack();
	          }
	        }

	        if (out.length <= this.suspenseDepth) {
	          out.push('');
	        }

	        out[this.suspenseDepth] += outBuffer;
	      }

	      return out[0];
	    } finally {
	      ReactCurrentDispatcher.current = prevDispatcher;
	      setCurrentThreadID(prevThreadID);
	    }
	  };

	  _proto.render = function render(child, context, parentNamespace) {
	    if (typeof child === 'string' || typeof child === 'number') {
	      var text = '' + child;

	      if (text === '') {
	        return '';
	      }

	      if (this.makeStaticMarkup) {
	        return escapeTextForBrowser(text);
	      }

	      if (this.previousWasTextNode) {
	        return '<!-- -->' + escapeTextForBrowser(text);
	      }

	      this.previousWasTextNode = true;
	      return escapeTextForBrowser(text);
	    } else {
	      var nextChild;

	      var _resolve = resolve(child, context, this.threadID);

	      nextChild = _resolve.child;
	      context = _resolve.context;

	      if (nextChild === null || nextChild === false) {
	        return '';
	      } else if (!React.isValidElement(nextChild)) {
	        if (nextChild != null && nextChild.$$typeof != null) {
	          // Catch unexpected special types early.
	          var $$typeof = nextChild.$$typeof;

	          if (!($$typeof !== REACT_PORTAL_TYPE)) {
	            {
	              throw Error( "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." );
	            }
	          } // Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.


	          {
	            {
	              throw Error( "Unknown element-like object type: " + $$typeof.toString() + ". This is likely a bug in React. Please file an issue." );
	            }
	          }
	        }

	        var nextChildren = toArray(nextChild);
	        var frame = {
	          type: null,
	          domNamespace: parentNamespace,
	          children: nextChildren,
	          childIndex: 0,
	          context: context,
	          footer: ''
	        };

	        {
	          frame.debugElementStack = [];
	        }

	        this.stack.push(frame);
	        return '';
	      } // Safe because we just checked it's an element.


	      var nextElement = nextChild;
	      var elementType = nextElement.type;

	      if (typeof elementType === 'string') {
	        return this.renderDOM(nextElement, context, parentNamespace);
	      }

	      switch (elementType) {
	        case REACT_STRICT_MODE_TYPE:
	        case REACT_CONCURRENT_MODE_TYPE:
	        case REACT_PROFILER_TYPE:
	        case REACT_SUSPENSE_LIST_TYPE:
	        case REACT_FRAGMENT_TYPE:
	          {
	            var _nextChildren = toArray(nextChild.props.children);

	            var _frame = {
	              type: null,
	              domNamespace: parentNamespace,
	              children: _nextChildren,
	              childIndex: 0,
	              context: context,
	              footer: ''
	            };

	            {
	              _frame.debugElementStack = [];
	            }

	            this.stack.push(_frame);
	            return '';
	          }

	        case REACT_SUSPENSE_TYPE:
	          {
	            {
	              {
	                {
	                  throw Error( "ReactDOMServer does not yet support Suspense." );
	                }
	              }
	            }
	          }
	      }

	      if (typeof elementType === 'object' && elementType !== null) {
	        switch (elementType.$$typeof) {
	          case REACT_FORWARD_REF_TYPE:
	            {
	              var element = nextChild;

	              var _nextChildren4;

	              var componentIdentity = {};
	              prepareToUseHooks(componentIdentity);
	              _nextChildren4 = elementType.render(element.props, element.ref);
	              _nextChildren4 = finishHooks(elementType.render, element.props, _nextChildren4, element.ref);
	              _nextChildren4 = toArray(_nextChildren4);
	              var _frame4 = {
	                type: null,
	                domNamespace: parentNamespace,
	                children: _nextChildren4,
	                childIndex: 0,
	                context: context,
	                footer: ''
	              };

	              {
	                _frame4.debugElementStack = [];
	              }

	              this.stack.push(_frame4);
	              return '';
	            }

	          case REACT_MEMO_TYPE:
	            {
	              var _element = nextChild;
	              var _nextChildren5 = [React.createElement(elementType.type, _assign({
	                ref: _element.ref
	              }, _element.props))];
	              var _frame5 = {
	                type: null,
	                domNamespace: parentNamespace,
	                children: _nextChildren5,
	                childIndex: 0,
	                context: context,
	                footer: ''
	              };

	              {
	                _frame5.debugElementStack = [];
	              }

	              this.stack.push(_frame5);
	              return '';
	            }

	          case REACT_PROVIDER_TYPE:
	            {
	              var provider = nextChild;
	              var nextProps = provider.props;

	              var _nextChildren6 = toArray(nextProps.children);

	              var _frame6 = {
	                type: provider,
	                domNamespace: parentNamespace,
	                children: _nextChildren6,
	                childIndex: 0,
	                context: context,
	                footer: ''
	              };

	              {
	                _frame6.debugElementStack = [];
	              }

	              this.pushProvider(provider);
	              this.stack.push(_frame6);
	              return '';
	            }

	          case REACT_CONTEXT_TYPE:
	            {
	              var reactContext = nextChild.type; // The logic below for Context differs depending on PROD or DEV mode. In
	              // DEV mode, we create a separate object for Context.Consumer that acts
	              // like a proxy to Context. This proxy object adds unnecessary code in PROD
	              // so we use the old behaviour (Context.Consumer references Context) to
	              // reduce size and overhead. The separate object references context via
	              // a property called "_context", which also gives us the ability to check
	              // in DEV mode if this property exists or not and warn if it does not.

	              {
	                if (reactContext._context === undefined) {
	                  // This may be because it's a Context (rather than a Consumer).
	                  // Or it may be because it's older React where they're the same thing.
	                  // We only want to warn if we're sure it's a new React.
	                  if (reactContext !== reactContext.Consumer) {
	                    if (!hasWarnedAboutUsingContextAsConsumer) {
	                      hasWarnedAboutUsingContextAsConsumer = true;

	                      error('Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
	                    }
	                  }
	                } else {
	                  reactContext = reactContext._context;
	                }
	              }

	              var _nextProps = nextChild.props;
	              var threadID = this.threadID;
	              validateContextBounds(reactContext, threadID);
	              var nextValue = reactContext[threadID];

	              var _nextChildren7 = toArray(_nextProps.children(nextValue));

	              var _frame7 = {
	                type: nextChild,
	                domNamespace: parentNamespace,
	                children: _nextChildren7,
	                childIndex: 0,
	                context: context,
	                footer: ''
	              };

	              {
	                _frame7.debugElementStack = [];
	              }

	              this.stack.push(_frame7);
	              return '';
	            }
	          // eslint-disable-next-line-no-fallthrough

	          case REACT_FUNDAMENTAL_TYPE:
	            {

	              {
	                {
	                  throw Error( "ReactDOMServer does not yet support the fundamental API." );
	                }
	              }
	            }
	          // eslint-disable-next-line-no-fallthrough

	          case REACT_LAZY_TYPE:
	            {
	              var _element2 = nextChild;
	              var lazyComponent = nextChild.type; // Attempt to initialize lazy component regardless of whether the
	              // suspense server-side renderer is enabled so synchronously
	              // resolved constructors are supported.

	              initializeLazyComponentType(lazyComponent);

	              switch (lazyComponent._status) {
	                case Resolved:
	                  {
	                    var _nextChildren9 = [React.createElement(lazyComponent._result, _assign({
	                      ref: _element2.ref
	                    }, _element2.props))];
	                    var _frame9 = {
	                      type: null,
	                      domNamespace: parentNamespace,
	                      children: _nextChildren9,
	                      childIndex: 0,
	                      context: context,
	                      footer: ''
	                    };

	                    {
	                      _frame9.debugElementStack = [];
	                    }

	                    this.stack.push(_frame9);
	                    return '';
	                  }

	                case Rejected:
	                  throw lazyComponent._result;

	                case Pending:
	                default:
	                  {
	                    {
	                      throw Error( "ReactDOMServer does not yet support lazy-loaded components." );
	                    }
	                  }

	              }
	            }
	          // eslint-disable-next-line-no-fallthrough

	          case REACT_SCOPE_TYPE:
	            {

	              {
	                {
	                  throw Error( "ReactDOMServer does not yet support scope components." );
	                }
	              }
	            }
	        }
	      }

	      var info = '';

	      {
	        var owner = nextElement._owner;

	        if (elementType === undefined || typeof elementType === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
	          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
	        }

	        var ownerName = owner ? getComponentName(owner) : null;

	        if (ownerName) {
	          info += '\n\nCheck the render method of `' + ownerName + '`.';
	        }
	      }

	      {
	        {
	          throw Error( "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (elementType == null ? elementType : typeof elementType) + "." + info );
	        }
	      }
	    }
	  };

	  _proto.renderDOM = function renderDOM(element, context, parentNamespace) {
	    var tag = element.type.toLowerCase();
	    var namespace = parentNamespace;

	    if (parentNamespace === Namespaces.html) {
	      namespace = getIntrinsicNamespace(tag);
	    }

	    {
	      if (namespace === Namespaces.html) {
	        // Should this check be gated by parent namespace? Not sure we want to
	        // allow <SVG> or <mATH>.
	        if (tag !== element.type) {
	          error('<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type);
	        }
	      }
	    }

	    validateDangerousTag(tag);
	    var props = element.props;

	    if (tag === 'input') {
	      {
	        ReactControlledValuePropTypes.checkPropTypes('input', props);

	        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
	          error('%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);

	          didWarnDefaultChecked = true;
	        }

	        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
	          error('%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);

	          didWarnDefaultInputValue = true;
	        }
	      }

	      props = _assign({
	        type: undefined
	      }, props, {
	        defaultChecked: undefined,
	        defaultValue: undefined,
	        value: props.value != null ? props.value : props.defaultValue,
	        checked: props.checked != null ? props.checked : props.defaultChecked
	      });
	    } else if (tag === 'textarea') {
	      {
	        ReactControlledValuePropTypes.checkPropTypes('textarea', props);

	        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
	          error('Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');

	          didWarnDefaultTextareaValue = true;
	        }
	      }

	      var initialValue = props.value;

	      if (initialValue == null) {
	        var defaultValue = props.defaultValue; // TODO (yungsters): Remove support for children content in <textarea>.

	        var textareaChildren = props.children;

	        if (textareaChildren != null) {
	          {
	            error('Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
	          }

	          if (!(defaultValue == null)) {
	            {
	              throw Error( "If you supply `defaultValue` on a <textarea>, do not pass children." );
	            }
	          }

	          if (Array.isArray(textareaChildren)) {
	            if (!(textareaChildren.length <= 1)) {
	              {
	                throw Error( "<textarea> can only have at most one child." );
	              }
	            }

	            textareaChildren = textareaChildren[0];
	          }

	          defaultValue = '' + textareaChildren;
	        }

	        if (defaultValue == null) {
	          defaultValue = '';
	        }

	        initialValue = defaultValue;
	      }

	      props = _assign({}, props, {
	        value: undefined,
	        children: '' + initialValue
	      });
	    } else if (tag === 'select') {
	      {
	        ReactControlledValuePropTypes.checkPropTypes('select', props);

	        for (var i = 0; i < valuePropNames.length; i++) {
	          var propName = valuePropNames[i];

	          if (props[propName] == null) {
	            continue;
	          }

	          var isArray = Array.isArray(props[propName]);

	          if (props.multiple && !isArray) {
	            error('The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
	          } else if (!props.multiple && isArray) {
	            error('The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
	          }
	        }

	        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
	          error('Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');

	          didWarnDefaultSelectValue = true;
	        }
	      }

	      this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
	      props = _assign({}, props, {
	        value: undefined
	      });
	    } else if (tag === 'option') {
	      var selected = null;
	      var selectValue = this.currentSelectValue;
	      var optionChildren = flattenOptionChildren(props.children);

	      if (selectValue != null) {
	        var value;

	        if (props.value != null) {
	          value = props.value + '';
	        } else {
	          value = optionChildren;
	        }

	        selected = false;

	        if (Array.isArray(selectValue)) {
	          // multiple
	          for (var j = 0; j < selectValue.length; j++) {
	            if ('' + selectValue[j] === value) {
	              selected = true;
	              break;
	            }
	          }
	        } else {
	          selected = '' + selectValue === value;
	        }

	        props = _assign({
	          selected: undefined,
	          children: undefined
	        }, props, {
	          selected: selected,
	          children: optionChildren
	        });
	      }
	    }

	    {
	      validatePropertiesInDevelopment(tag, props);
	    }

	    assertValidProps(tag, props);
	    var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
	    var footer = '';

	    if (omittedCloseTags.hasOwnProperty(tag)) {
	      out += '/>';
	    } else {
	      out += '>';
	      footer = '</' + element.type + '>';
	    }

	    var children;
	    var innerMarkup = getNonChildrenInnerMarkup(props);

	    if (innerMarkup != null) {
	      children = [];

	      if (newlineEatingTags.hasOwnProperty(tag) && innerMarkup.charAt(0) === '\n') {
	        // text/html ignores the first character in these tags if it's a newline
	        // Prefer to break application/xml over text/html (for now) by adding
	        // a newline specifically to get eaten by the parser. (Alternately for
	        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
	        // \r is normalized out by HTMLTextAreaElement#value.)
	        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
	        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
	        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
	        // See: Parsing of "textarea" "listing" and "pre" elements
	        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
	        out += '\n';
	      }

	      out += innerMarkup;
	    } else {
	      children = toArray(props.children);
	    }

	    var frame = {
	      domNamespace: getChildNamespace(parentNamespace, element.type),
	      type: tag,
	      children: children,
	      childIndex: 0,
	      context: context,
	      footer: footer
	    };

	    {
	      frame.debugElementStack = [];
	    }

	    this.stack.push(frame);
	    this.previousWasTextNode = false;
	    return out;
	  };

	  return ReactDOMServerRenderer;
	}();

	/**
	 * Render a ReactElement to its initial HTML. This should only be used on the
	 * server.
	 * See https://reactjs.org/docs/react-dom-server.html#rendertostring
	 */

	function renderToString(element) {
	  var renderer = new ReactDOMServerRenderer(element, false);

	  try {
	    var markup = renderer.read(Infinity);
	    return markup;
	  } finally {
	    renderer.destroy();
	  }
	}
	/**
	 * Similar to renderToString, except this doesn't create extra DOM attributes
	 * such as data-react-id that React uses internally.
	 * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
	 */

	function renderToStaticMarkup(element) {
	  var renderer = new ReactDOMServerRenderer(element, true);

	  try {
	    var markup = renderer.read(Infinity);
	    return markup;
	  } finally {
	    renderer.destroy();
	  }
	}

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	var ReactMarkupReadableStream =
	/*#__PURE__*/
	function (_Readable) {
	  _inheritsLoose(ReactMarkupReadableStream, _Readable);

	  function ReactMarkupReadableStream(element, makeStaticMarkup) {
	    var _this;

	    // Calls the stream.Readable(options) constructor. Consider exposing built-in
	    // features like highWaterMark in the future.
	    _this = _Readable.call(this, {}) || this;
	    _this.partialRenderer = new ReactDOMServerRenderer(element, makeStaticMarkup);
	    return _this;
	  }

	  var _proto = ReactMarkupReadableStream.prototype;

	  _proto._destroy = function _destroy(err, callback) {
	    this.partialRenderer.destroy();
	    callback(err);
	  };

	  _proto._read = function _read(size) {
	    try {
	      this.push(this.partialRenderer.read(size));
	    } catch (err) {
	      this.destroy(err);
	    }
	  };

	  return ReactMarkupReadableStream;
	}(stream.Readable);
	/**
	 * Render a ReactElement to its initial HTML. This should only be used on the
	 * server.
	 * See https://reactjs.org/docs/react-dom-server.html#rendertonodestream
	 */


	function renderToNodeStream(element) {
	  return new ReactMarkupReadableStream(element, false);
	}
	/**
	 * Similar to renderToNodeStream, except this doesn't create extra DOM attributes
	 * such as data-react-id that React uses internally.
	 * See https://reactjs.org/docs/react-dom-server.html#rendertostaticnodestream
	 */

	function renderToStaticNodeStream(element) {
	  return new ReactMarkupReadableStream(element, true);
	}

	var ReactDOMServer = {
	  renderToString: renderToString,
	  renderToStaticMarkup: renderToStaticMarkup,
	  renderToNodeStream: renderToNodeStream,
	  renderToStaticNodeStream: renderToStaticNodeStream,
	  version: ReactVersion
	};

	// TODO: decide on the top-level export form.
	// This is hacky but makes it work with both Rollup and Jest


	var server_node = ReactDOMServer.default || ReactDOMServer;

	module.exports = server_node;
	  })();
	}
	});

	var server_node = createCommonjsModule(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = reactDomServer_node_production_min;
	} else {
	  module.exports = reactDomServer_node_development;
	}
	});

	var server = server_node;

	const out = server.renderToStaticMarkup(react.createElement(Test));
	console.log(out);

}());
