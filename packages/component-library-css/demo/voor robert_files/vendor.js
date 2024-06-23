(self['webpackChunktheme_fusion'] = self['webpackChunktheme_fusion'] || []).push([
  ['vendor'],
  {
    /***/ './node_modules/@yardinternet/a11y-cookie-yes/dist/a11y-cookie-yes.esm.js':
      /*!********************************************************************************!*\
  !*** ./node_modules/@yardinternet/a11y-cookie-yes/dist/a11y-cookie-yes.esm.js ***!
  \********************************************************************************/
      /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: function () {
            return /* binding */ A11yCookieYes;
          },
          /* harmony export */
        });
        /* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! focus-trap */ './node_modules/focus-trap/dist/focus-trap.esm.js',
        );

        function _regeneratorRuntime() {
          _regeneratorRuntime = function () {
            return exports;
          };
          var exports = {},
            Op = Object.prototype,
            hasOwn = Op.hasOwnProperty,
            defineProperty =
              Object.defineProperty ||
              function (obj, key, desc) {
                obj[key] = desc.value;
              },
            $Symbol = 'function' == typeof Symbol ? Symbol : {},
            iteratorSymbol = $Symbol.iterator || '@@iterator',
            asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
            toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';
          function define(obj, key, value) {
            return (
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              obj[key]
            );
          }
          try {
            define({}, '');
          } catch (err) {
            define = function (obj, key, value) {
              return (obj[key] = value);
            };
          }
          function wrap(innerFn, outerFn, self, tryLocsList) {
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
              generator = Object.create(protoGenerator.prototype),
              context = new Context(tryLocsList || []);
            return (
              defineProperty(generator, '_invoke', {
                value: makeInvokeMethod(innerFn, self, context),
              }),
              generator
            );
          }
          function tryCatch(fn, obj, arg) {
            try {
              return {
                type: 'normal',
                arg: fn.call(obj, arg),
              };
            } catch (err) {
              return {
                type: 'throw',
                arg: err,
              };
            }
          }
          exports.wrap = wrap;
          var ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          var getProto = Object.getPrototypeOf,
            NativeIteratorPrototype = getProto && getProto(getProto(values([])));
          NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
            (IteratorPrototype = NativeIteratorPrototype);
          var Gp = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype));
          function defineIteratorMethods(prototype) {
            ['next', 'throw', 'return'].forEach(function (method) {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if ('throw' !== record.type) {
                var result = record.arg,
                  value = result.value;
                return value && 'object' == typeof value && hasOwn.call(value, '__await')
                  ? PromiseImpl.resolve(value.__await).then(
                      function (value) {
                        invoke('next', value, resolve, reject);
                      },
                      function (err) {
                        invoke('throw', err, resolve, reject);
                      },
                    )
                  : PromiseImpl.resolve(value).then(
                      function (unwrapped) {
                        (result.value = unwrapped), resolve(result);
                      },
                      function (error) {
                        return invoke('throw', error, resolve, reject);
                      },
                    );
              }
              reject(record.arg);
            }
            var previousPromise;
            defineProperty(this, '_invoke', {
              value: function (method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new PromiseImpl(function (resolve, reject) {
                    invoke(method, arg, resolve, reject);
                  });
                }
                return (previousPromise = previousPromise
                  ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(innerFn, self, context) {
            var state = 'suspendedStart';
            return function (method, arg) {
              if ('executing' === state) throw new Error('Generator is already running');
              if ('completed' === state) {
                if ('throw' === method) throw arg;
                return doneResult();
              }
              for (context.method = method, context.arg = arg; ; ) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }
                if ('next' === context.method) context.sent = context._sent = context.arg;
                else if ('throw' === context.method) {
                  if ('suspendedStart' === state) throw ((state = 'completed'), context.arg);
                  context.dispatchException(context.arg);
                } else 'return' === context.method && context.abrupt('return', context.arg);
                state = 'executing';
                var record = tryCatch(innerFn, self, context);
                if ('normal' === record.type) {
                  if (((state = context.done ? 'completed' : 'suspendedYield'), record.arg === ContinueSentinel))
                    continue;
                  return {
                    value: record.arg,
                    done: context.done,
                  };
                }
                'throw' === record.type &&
                  ((state = 'completed'), (context.method = 'throw'), (context.arg = record.arg));
              }
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            var methodName = context.method,
              method = delegate.iterator[methodName];
            if (undefined === method)
              return (
                (context.delegate = null),
                ('throw' === methodName &&
                  delegate.iterator.return &&
                  ((context.method = 'return'),
                  (context.arg = undefined),
                  maybeInvokeDelegate(delegate, context),
                  'throw' === context.method)) ||
                  ('return' !== methodName &&
                    ((context.method = 'throw'),
                    (context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")))),
                ContinueSentinel
              );
            var record = tryCatch(method, delegate.iterator, context.arg);
            if ('throw' === record.type)
              return (
                (context.method = 'throw'), (context.arg = record.arg), (context.delegate = null), ContinueSentinel
              );
            var info = record.arg;
            return info
              ? info.done
                ? ((context[delegate.resultName] = info.value),
                  (context.next = delegate.nextLoc),
                  'return' !== context.method && ((context.method = 'next'), (context.arg = undefined)),
                  (context.delegate = null),
                  ContinueSentinel)
                : info
              : ((context.method = 'throw'),
                (context.arg = new TypeError('iterator result is not an object')),
                (context.delegate = null),
                ContinueSentinel);
          }
          function pushTryEntry(locs) {
            var entry = {
              tryLoc: locs[0],
            };
            1 in locs && (entry.catchLoc = locs[1]),
              2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
              this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            (record.type = 'normal'), delete record.arg, (entry.completion = record);
          }
          function Context(tryLocsList) {
            (this.tryEntries = [
              {
                tryLoc: 'root',
              },
            ]),
              tryLocsList.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) return iteratorMethod.call(iterable);
              if ('function' == typeof iterable.next) return iterable;
              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    for (; ++i < iterable.length; )
                      if (hasOwn.call(iterable, i)) return (next.value = iterable[i]), (next.done = !1), next;
                    return (next.value = undefined), (next.done = !0), next;
                  };
                return (next.next = next);
              }
            }
            return {
              next: doneResult,
            };
          }
          function doneResult() {
            return {
              value: undefined,
              done: !0,
            };
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            defineProperty(Gp, 'constructor', {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            defineProperty(GeneratorFunctionPrototype, 'constructor', {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              toStringTagSymbol,
              'GeneratorFunction',
            )),
            (exports.isGeneratorFunction = function (genFun) {
              var ctor = 'function' == typeof genFun && genFun.constructor;
              return !!ctor && (ctor === GeneratorFunction || 'GeneratorFunction' === (ctor.displayName || ctor.name));
            }),
            (exports.mark = function (genFun) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                  : ((genFun.__proto__ = GeneratorFunctionPrototype),
                    define(genFun, toStringTagSymbol, 'GeneratorFunction')),
                (genFun.prototype = Object.create(Gp)),
                genFun
              );
            }),
            (exports.awrap = function (arg) {
              return {
                __await: arg,
              };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
              return this;
            }),
            (exports.AsyncIterator = AsyncIterator),
            (exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
              void 0 === PromiseImpl && (PromiseImpl = Promise);
              var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
              return exports.isGeneratorFunction(outerFn)
                ? iter
                : iter.next().then(function (result) {
                    return result.done ? result.value : iter.next();
                  });
            }),
            defineIteratorMethods(Gp),
            define(Gp, toStringTagSymbol, 'Generator'),
            define(Gp, iteratorSymbol, function () {
              return this;
            }),
            define(Gp, 'toString', function () {
              return '[object Generator]';
            }),
            (exports.keys = function (val) {
              var object = Object(val),
                keys = [];
              for (var key in object) keys.push(key);
              return (
                keys.reverse(),
                function next() {
                  for (; keys.length; ) {
                    var key = keys.pop();
                    if (key in object) return (next.value = key), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (exports.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function (skipTempReset) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = undefined),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = undefined),
                  this.tryEntries.forEach(resetTryEntry),
                  !skipTempReset)
                )
                  for (var name in this)
                    't' === name.charAt(0) &&
                      hasOwn.call(this, name) &&
                      !isNaN(+name.slice(1)) &&
                      (this[name] = undefined);
              },
              stop: function () {
                this.done = !0;
                var rootRecord = this.tryEntries[0].completion;
                if ('throw' === rootRecord.type) throw rootRecord.arg;
                return this.rval;
              },
              dispatchException: function (exception) {
                if (this.done) throw exception;
                var context = this;
                function handle(loc, caught) {
                  return (
                    (record.type = 'throw'),
                    (record.arg = exception),
                    (context.next = loc),
                    caught && ((context.method = 'next'), (context.arg = undefined)),
                    !!caught
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i],
                    record = entry.completion;
                  if ('root' === entry.tryLoc) return handle('end');
                  if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, 'catchLoc'),
                      hasFinally = hasOwn.call(entry, 'finallyLoc');
                    if (hasCatch && hasFinally) {
                      if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                      if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                      if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                    } else {
                      if (!hasFinally) throw new Error('try statement without catch or finally');
                      if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (type, arg) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.tryLoc <= this.prev && hasOwn.call(entry, 'finallyLoc') && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                  }
                }
                finallyEntry &&
                  ('break' === type || 'continue' === type) &&
                  finallyEntry.tryLoc <= arg &&
                  arg <= finallyEntry.finallyLoc &&
                  (finallyEntry = null);
                var record = finallyEntry ? finallyEntry.completion : {};
                return (
                  (record.type = type),
                  (record.arg = arg),
                  finallyEntry
                    ? ((this.method = 'next'), (this.next = finallyEntry.finallyLoc), ContinueSentinel)
                    : this.complete(record)
                );
              },
              complete: function (record, afterLoc) {
                if ('throw' === record.type) throw record.arg;
                return (
                  'break' === record.type || 'continue' === record.type
                    ? (this.next = record.arg)
                    : 'return' === record.type
                    ? ((this.rval = this.arg = record.arg), (this.method = 'return'), (this.next = 'end'))
                    : 'normal' === record.type && afterLoc && (this.next = afterLoc),
                  ContinueSentinel
                );
              },
              finish: function (finallyLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.finallyLoc === finallyLoc)
                    return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
                }
              },
              catch: function (tryLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if ('throw' === record.type) {
                      var thrown = record.arg;
                      resetTryEntry(entry);
                    }
                    return thrown;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function (iterable, resultName, nextLoc) {
                return (
                  (this.delegate = {
                    iterator: values(iterable),
                    resultName: resultName,
                    nextLoc: nextLoc,
                  }),
                  'next' === this.method && (this.arg = undefined),
                  ContinueSentinel
                );
              },
            }),
            exports
          );
        }
        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
              }
              _next(undefined);
            });
          };
        }
        function _extends() {
          _extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }
                return target;
              };
          return _extends.apply(this, arguments);
        }

        /**
         * Transform the tag of an element to another tag, e.g. <p> to <h2>.
         *
         * @param {Element} element     The element to transform
         * @param {string}  transformTo Tag to transform to (e.g. 'h2')
         * @return {Element|null} Transformed element
         */
        var transformTag = function transformTag(element, transformTo) {
          if (!element) return null;
          var transformedElement = document.createElement(transformTo);
          transformedElement.innerHTML = element.innerHTML;
          for (var i = 0; i < element.attributes.length; i++) {
            transformedElement.setAttribute(element.attributes[i].name, element.attributes[i].value);
          }
          if (!element.parentNode) return transformedElement;
          element.parentNode.replaceChild(transformedElement, element);
          return transformedElement;
        };
        /**
         * Wait for an element to appear in the DOM and resolve with the element.
         *
         * @param {string} selector The CSS selector for the element to wait for
         * @param {number} maxTimeToSearch  The maximum time to wait for the element, in milliseconds
         * @return {Promise<NodeListOf<Element> | Element>} A promise that resolves with the element when it appears in the DOM
         * @throws {string} If the element does not appear in the DOM before the timeout is reached
         */
        var waitForElement = function waitForElement(selector, maxTimeToSearch) {
          if (maxTimeToSearch === void 0) {
            maxTimeToSearch = 5000;
          }
          return new Promise(function (resolve, reject) {
            var startTime = Date.now();
            var interval = setInterval(function () {
              var elements = document.querySelectorAll(selector),
                hasElements = elements.length > 0,
                isSingleElement = elements.length === 1;
              if (hasElements) {
                clearInterval(interval);
                resolve(isSingleElement ? elements[0] : elements);
              } else if (Date.now() - startTime >= maxTimeToSearch) {
                clearInterval(interval);
                reject(new Error("Timeout exceeded. Element '" + selector + "' not found within timelimit."));
              }
            }, 100);
          });
        };
        /**
         * The element has visibility: hidden, which makes it initially un-focusable, creating an error.
         * This ensures an wait until it can activate the trap.
         * Naming of this function cannot be changed since it is searched for by focus-trap package
         * https://www.npmjs.com/package/focus-trap#:~:text=managing/trapping%20focus.-,checkCanFocusTrap,	%7B(containers%3A%20Array%3CHTMLElement
         * @param {Element[]} elements The elements to check for visibility
         */
        var checkCanFocusTrap = function checkCanFocusTrap(elements) {
          var results = elements.map(function (element) {
            return new Promise(function (resolve) {
              var interval = setInterval(function () {
                var style = window.getComputedStyle(element);
                if (
                  style.visibility !== 'hidden' &&
                  style.display !== 'none' &&
                  style.height !== '0px' &&
                  style.width !== '0px'
                ) {
                  resolve();
                  clearInterval(interval);
                }
              }, 5);
            });
          });
          return Promise.all(results);
        };

        // =====================================================================================
        // ================================ Class definitions ===================================
        // =====================================================================================
        var A11yCookieYes = /*#__PURE__*/ (function () {
          // =====================================================================================
          // ================================== Constructor ======================================
          // =====================================================================================
          function A11yCookieYes(options) {
            var _this = this;
            this.options = void 0;
            this.EMBED_BLOCKER_NEW_CLASS_CSS = '.cky-banner-element';
            this.EMBED_BLOCKER_BUTTON_CSS = '[data-cky-tag="placeholder-title"]';
            this.COOKIE_YES_HIDDEN_CSS = '.cky-hide';
            this.BANNER_TITLE_CSS = '.cky-title';
            this.BANNER_BTN_CLOSE_CSS = '.cky-banner-btn-close';
            this.MODAL_OPEN_CSS = '.cky-modal-open';
            this.MODAL_BTN_CLOSE_CSS = '.cky-modal .cky-btn-close';
            this.MODAL_BTN_CLOSE_ARIA_LABEL = 'Sluit';
            this.MODAL_TITLE_CSS = '.cky-preference-title';
            this.MODAL_ACCORDION_CSS = '.cky-accordion';
            this.MODAL_ACCORDION_BTN_CSS = '.cky-accordion-btn';
            this.MODAL_ACCORDION_OPEN_CSS = '.cky-accordion-active';
            this.COOKIE_BANNER_CSS = '.cky-consent-container';
            this.COOKIE_MODAL_CSS = '.cky-modal';
            this.cookieModal = void 0;
            this.cookieBanner = void 0;
            this.focusTrapBanner = void 0;
            this.focusTrapModal = void 0;
            this.focusTrapBannerOptions = void 0;
            this.focusTrapModalOptions = void 0;
            this.focusTrapOptions = {
              allowOutsideClick: true,
              clickOutsideDeactivates: true,
              checkCanFocusTrap: checkCanFocusTrap,
            };
            this.closeCookieYes = function (elementSelector) {
              var closeButton = document.querySelector(elementSelector);
              if (!closeButton || closeButton.closest(_this.COOKIE_YES_HIDDEN_CSS)) return;
              closeButton.click();
            };
            this.options = options || {};
            if (A11yCookieYes.instance) {
              return A11yCookieYes.instance;
            }
            // trapOptions declared here since spreadoperator cant be used in class properties
            this.focusTrapBannerOptions = _extends({}, this.focusTrapOptions, {
              // By default CookieYes has the banner close button removed from the DOM, unless you enable the setting.
              onDeactivate: function onDeactivate() {
                return _this.closeCookieYes(_this.BANNER_BTN_CLOSE_CSS);
              },
            });
            this.focusTrapModalOptions = _extends({}, this.focusTrapOptions, {
              onDeactivate: function onDeactivate() {
                return _this.closeCookieYes(_this.MODAL_BTN_CLOSE_CSS);
              },
            });
            // Code is executed from init function because constructor cannot be async.
            this.init();
            A11yCookieYes.instance = this;
          }
          A11yCookieYes.getInstance = function getInstance() {
            return A11yCookieYes.instance;
          };
          var _proto = A11yCookieYes.prototype;
          // =====================================================================================
          // ====================================== Init =========================================
          // =====================================================================================
          _proto.init =
            /*#__PURE__*/
            (function () {
              var _init = /*#__PURE__*/ _asyncToGenerator(
                /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
                  return _regeneratorRuntime().wrap(
                    function _callee$(_context) {
                      while (1)
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            _context.next = 2;
                            return waitForElement(this.COOKIE_BANNER_CSS);
                          case 2:
                            this.cookieBanner = _context.sent;
                            _context.next = 5;
                            return waitForElement(this.COOKIE_MODAL_CSS);
                          case 5:
                            this.cookieModal = _context.sent;
                            if (!(!this.cookieBanner || !this.cookieModal)) {
                              _context.next = 8;
                              break;
                            }
                            return _context.abrupt('return', false);
                          case 8:
                            this.focusTrapBanner = focus_trap__WEBPACK_IMPORTED_MODULE_0__.createFocusTrap(
                              this.cookieBanner,
                              this.focusTrapBannerOptions,
                            );
                            this.focusTrapModal = focus_trap__WEBPACK_IMPORTED_MODULE_0__.createFocusTrap(
                              this.cookieModal,
                              this.focusTrapModalOptions,
                            );
                            // Banner
                            this.observeBanner();
                            this.changeBannerTitleToH2();
                            // Modal
                            this.observeModal();
                            this.observeAccordions();
                            this.changeModalTitleToH2();
                            this.changeModalCloseBtnAriaLabel();
                            // Page
                            this.changeEmbedText();
                            return _context.abrupt('return', this);
                          case 18:
                          case 'end':
                            return _context.stop();
                        }
                    },
                    _callee,
                    this,
                  );
                }),
              );
              function init() {
                return _init.apply(this, arguments);
              }
              return init;
            })(); // =====================================================================================
          // ===================================== Banner ========================================
          // =====================================================================================
          /**
           * A11y: trap focus in banner when the accept all button is focused
           */
          _proto.observeBanner = function observeBanner() {
            var _this$cookieBanner,
              _this$focusTrapBanner2,
              _this2 = this;
            // Check if cookiebanner is currently visible
            if (
              (_this$cookieBanner = this.cookieBanner) != null &&
              _this$cookieBanner.classList.contains(this.COOKIE_YES_HIDDEN_CSS.substring(1))
            ) {
              var _this$focusTrapBanner;
              (_this$focusTrapBanner = this.focusTrapBanner) == null ? void 0 : _this$focusTrapBanner.deactivate();
              return;
            }
            (_this$focusTrapBanner2 = this.focusTrapBanner) == null ? void 0 : _this$focusTrapBanner2.activate();
            // Check if the banner stays visible
            var observer = new MutationObserver(function (mutations) {
              mutations.forEach(function (mutation) {
                var _this2$focusTrapBanne, _this2$focusTrapBanne2;
                var bannerIsHidden = mutation.target.classList.contains(_this2.COOKIE_YES_HIDDEN_CSS.substring(1));
                mutation.attributeName === 'class' && bannerIsHidden
                  ? (_this2$focusTrapBanne = _this2.focusTrapBanner) == null
                    ? void 0
                    : _this2$focusTrapBanne.deactivate()
                  : (_this2$focusTrapBanne2 = _this2.focusTrapBanner) == null
                  ? void 0
                  : _this2$focusTrapBanne2.activate();
              });
            });
            observer.observe(this.cookieBanner, {
              attributes: true,
            });
          };
          /**
           * A11y: transform modal title to h2
           */
          _proto.changeBannerTitleToH2 = function changeBannerTitleToH2() {
            var title = document.querySelector(this.BANNER_TITLE_CSS);
            if (!title) return;
            transformTag(title, 'h2');
          };
          // ====================================================================================
          // ===================================== Modal ========================================
          // ====================================================================================
          /**
           * A11y: Observes the cookie modal for changes
           */
          _proto.observeModal = function observeModal() {
            var _this3 = this;
            if (!this.cookieModal) return;
            var observer = new MutationObserver(function (mutations) {
              mutations.forEach(function (mutation) {
                var targetElement = mutation.target;
                if (mutation.attributeName === 'class') {
                  // If the modal opens
                  if (
                    mutation.attributeName == 'class' &&
                    targetElement.classList.contains(_this3.MODAL_OPEN_CSS.substring(1))
                  ) {
                    setTimeout(function () {
                      _this3.focusTrapModal.activate();
                    }, 200);
                  }
                  // If the modal closes
                  if (
                    mutation.attributeName == 'class' &&
                    !targetElement.classList.contains(_this3.MODAL_OPEN_CSS.substring(1))
                  ) {
                    var _this3$focusTrapModal;
                    (_this3$focusTrapModal = _this3.focusTrapModal) == null
                      ? void 0
                      : _this3$focusTrapModal.deactivate();
                  }
                }
              });
            });
            observer.observe(this.cookieModal, {
              attributes: true,
            });
          };
          /**
           * A11y: observe accordions for changes to update aria-expanded
           */
          _proto.observeAccordions = function observeAccordions() {
            var _this4 = this;
            var accordions = document.querySelectorAll(this.MODAL_ACCORDION_CSS);
            accordions == null
              ? void 0
              : accordions.forEach(function (wrapper) {
                  var button = wrapper.querySelector(_this4.MODAL_ACCORDION_BTN_CSS);
                  button == null ? void 0 : button.setAttribute('aria-expanded', 'false');
                  var observer = new MutationObserver(function (mutations) {
                    mutations.forEach(function (mutation) {
                      var newAriaState =
                        wrapper == null
                          ? void 0
                          : wrapper.classList.contains(_this4.MODAL_ACCORDION_OPEN_CSS.substring(1)).toString();
                      if (mutation.type === 'attributes') {
                        button == null ? void 0 : button.setAttribute('aria-expanded', newAriaState);
                      }
                    });
                  });
                  observer.observe(wrapper, {
                    attributes: true,
                  });
                });
          };
          /**
           * A11y: transform modal title to h2
           */
          _proto.changeModalTitleToH2 = function changeModalTitleToH2() {
            var title = document.querySelector(this.MODAL_TITLE_CSS);
            if (!title) return;
            transformTag(title, 'h2');
          };
          /**
           * A11y: Change aria-label close button in modal
           */
          _proto.changeModalCloseBtnAriaLabel = function changeModalCloseBtnAriaLabel() {
            var closeButton = document.querySelector(this.MODAL_BTN_CLOSE_CSS);
            if (!closeButton) return;
            closeButton.setAttribute('aria-label', this.MODAL_BTN_CLOSE_ARIA_LABEL);
          };
          // ====================================================================================
          // ====================================== Page ========================================
          // ====================================================================================
          /**
           * Make the accept text which appears when the user has not accepted cookies accessible
           * like a button. Changing the <p> to a <button> will lose the event listener.
           */
          _proto.changeEmbedText = function changeEmbedText() {
            var _this5 = this;
            var acceptText = document.querySelectorAll(this.EMBED_BLOCKER_BUTTON_CSS);
            acceptText == null
              ? void 0
              : acceptText.forEach(function (text) {
                  var button = transformTag(text, 'button');
                  if (!button) return;
                  // This special classnames is detected by cookie-yes and will trigger a reopening of the modal when clicked
                  // @see https://www.cookieyes.com/documentation/change-cookie-consent-using-cookieyes/
                  button.classList.add(_this5.EMBED_BLOCKER_NEW_CLASS_CSS.substring(1));
                });
          };
          return A11yCookieYes;
        })();
        A11yCookieYes.instance = /*#__PURE__*/ new A11yCookieYes();

        //# sourceMappingURL=a11y-cookie-yes.esm.js.map

        /***/
      },

    /***/ './node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js ***!
  \*****************************************************************/
      /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ clearAllBodyScrollLocks: function () {
            return /* binding */ clearAllBodyScrollLocks;
          },
          /* harmony export */ disableBodyScroll: function () {
            return /* binding */ disableBodyScroll;
          },
          /* harmony export */ enableBodyScroll: function () {
            return /* binding */ enableBodyScroll;
          },
          /* harmony export */
        });
        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }

        // Older browsers don't support event options, feature detect it.

        // Adopted and modified solution from Bohdan Didukh (2017)
        // https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

        var hasPassiveEvents = false;
        if (typeof window !== 'undefined') {
          var passiveTestOptions = {
            get passive() {
              hasPassiveEvents = true;
              return undefined;
            },
          };
          window.addEventListener('testPassive', null, passiveTestOptions);
          window.removeEventListener('testPassive', null, passiveTestOptions);
        }

        var isIosDevice =
          typeof window !== 'undefined' &&
          window.navigator &&
          window.navigator.platform &&
          (/iP(ad|hone|od)/.test(window.navigator.platform) ||
            (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1));

        var locks = [];
        var documentListenerAdded = false;
        var initialClientY = -1;
        var previousBodyOverflowSetting = void 0;
        var previousBodyPaddingRight = void 0;

        // returns true if `el` should be allowed to receive touchmove events.
        var allowTouchMove = function allowTouchMove(el) {
          return locks.some(function (lock) {
            if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
              return true;
            }

            return false;
          });
        };

        var preventDefault = function preventDefault(rawEvent) {
          var e = rawEvent || window.event;

          // For the case whereby consumers adds a touchmove event listener to document.
          // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
          // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
          // the touchmove event on document will break.
          if (allowTouchMove(e.target)) {
            return true;
          }

          // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
          if (e.touches.length > 1) return true;

          if (e.preventDefault) e.preventDefault();

          return false;
        };

        var setOverflowHidden = function setOverflowHidden(options) {
          // If previousBodyPaddingRight is already set, don't set it again.
          if (previousBodyPaddingRight === undefined) {
            var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
            var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

            if (_reserveScrollBarGap && scrollBarGap > 0) {
              previousBodyPaddingRight = document.body.style.paddingRight;
              document.body.style.paddingRight = scrollBarGap + 'px';
            }
          }

          // If previousBodyOverflowSetting is already set, don't set it again.
          if (previousBodyOverflowSetting === undefined) {
            previousBodyOverflowSetting = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
          }
        };

        var restoreOverflowSetting = function restoreOverflowSetting() {
          if (previousBodyPaddingRight !== undefined) {
            document.body.style.paddingRight = previousBodyPaddingRight;

            // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
            // can be set again.
            previousBodyPaddingRight = undefined;
          }

          if (previousBodyOverflowSetting !== undefined) {
            document.body.style.overflow = previousBodyOverflowSetting;

            // Restore previousBodyOverflowSetting to undefined
            // so setOverflowHidden knows it can be set again.
            previousBodyOverflowSetting = undefined;
          }
        };

        // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
        var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
          return targetElement
            ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight
            : false;
        };

        var handleScroll = function handleScroll(event, targetElement) {
          var clientY = event.targetTouches[0].clientY - initialClientY;

          if (allowTouchMove(event.target)) {
            return false;
          }

          if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
            // element is at the top of its scroll.
            return preventDefault(event);
          }

          if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
            // element is at the bottom of its scroll.
            return preventDefault(event);
          }

          event.stopPropagation();
          return true;
        };

        var disableBodyScroll = function disableBodyScroll(targetElement, options) {
          // targetElement must be provided
          if (!targetElement) {
            // eslint-disable-next-line no-console
            console.error(
              'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.',
            );
            return;
          }

          // disableBodyScroll must not have been called on this targetElement before
          if (
            locks.some(function (lock) {
              return lock.targetElement === targetElement;
            })
          ) {
            return;
          }

          var lock = {
            targetElement: targetElement,
            options: options || {},
          };

          locks = [].concat(_toConsumableArray(locks), [lock]);

          if (isIosDevice) {
            targetElement.ontouchstart = function (event) {
              if (event.targetTouches.length === 1) {
                // detect single touch.
                initialClientY = event.targetTouches[0].clientY;
              }
            };
            targetElement.ontouchmove = function (event) {
              if (event.targetTouches.length === 1) {
                // detect single touch.
                handleScroll(event, targetElement);
              }
            };

            if (!documentListenerAdded) {
              document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
              documentListenerAdded = true;
            }
          } else {
            setOverflowHidden(options);
          }
        };

        var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
          if (isIosDevice) {
            // Clear all locks ontouchstart/ontouchmove handlers, and the references.
            locks.forEach(function (lock) {
              lock.targetElement.ontouchstart = null;
              lock.targetElement.ontouchmove = null;
            });

            if (documentListenerAdded) {
              document.removeEventListener(
                'touchmove',
                preventDefault,
                hasPassiveEvents ? { passive: false } : undefined,
              );
              documentListenerAdded = false;
            }

            // Reset initial clientY.
            initialClientY = -1;
          } else {
            restoreOverflowSetting();
          }

          locks = [];
        };

        var enableBodyScroll = function enableBodyScroll(targetElement) {
          if (!targetElement) {
            // eslint-disable-next-line no-console
            console.error(
              'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.',
            );
            return;
          }

          locks = locks.filter(function (lock) {
            return lock.targetElement !== targetElement;
          });

          if (isIosDevice) {
            targetElement.ontouchstart = null;
            targetElement.ontouchmove = null;

            if (documentListenerAdded && locks.length === 0) {
              document.removeEventListener(
                'touchmove',
                preventDefault,
                hasPassiveEvents ? { passive: false } : undefined,
              );
              documentListenerAdded = false;
            }
          } else if (!locks.length) {
            restoreOverflowSetting();
          }
        };

        /***/
      },

    /***/ './node_modules/bootstrap/js/dist/collapse.js':
      /*!****************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/collapse.js ***!
  \****************************************************/
      /***/ function (module, __unused_webpack_exports, __webpack_require__) {
        /*!
         * Bootstrap collapse.js v4.6.2 (https://getbootstrap.com/)
         * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         */
        (function (global, factory) {
          true
            ? (module.exports = factory(
                __webpack_require__(/*! jquery */ 'jquery'),
                __webpack_require__(/*! ./util.js */ './node_modules/bootstrap/js/dist/util.js'),
              ))
            : 0;
        })(this, function ($, Util) {
          'use strict';

          function _interopDefaultLegacy(e) {
            return e && typeof e === 'object' && 'default' in e ? e : { default: e };
          }

          var $__default = /*#__PURE__*/ _interopDefaultLegacy($);
          var Util__default = /*#__PURE__*/ _interopDefaultLegacy(Util);

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, 'prototype', {
              writable: false,
            });
            return Constructor;
          }

          function _extends() {
            _extends = Object.assign
              ? Object.assign.bind()
              : function (target) {
                  for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];

                    for (var key in source) {
                      if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                      }
                    }
                  }

                  return target;
                };
            return _extends.apply(this, arguments);
          }

          /**
           * Constants
           */

          var NAME = 'collapse';
          var VERSION = '4.6.2';
          var DATA_KEY = 'bs.collapse';
          var EVENT_KEY = '.' + DATA_KEY;
          var DATA_API_KEY = '.data-api';
          var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
          var CLASS_NAME_SHOW = 'show';
          var CLASS_NAME_COLLAPSE = 'collapse';
          var CLASS_NAME_COLLAPSING = 'collapsing';
          var CLASS_NAME_COLLAPSED = 'collapsed';
          var DIMENSION_WIDTH = 'width';
          var DIMENSION_HEIGHT = 'height';
          var EVENT_SHOW = 'show' + EVENT_KEY;
          var EVENT_SHOWN = 'shown' + EVENT_KEY;
          var EVENT_HIDE = 'hide' + EVENT_KEY;
          var EVENT_HIDDEN = 'hidden' + EVENT_KEY;
          var EVENT_CLICK_DATA_API = 'click' + EVENT_KEY + DATA_API_KEY;
          var SELECTOR_ACTIVES = '.show, .collapsing';
          var SELECTOR_DATA_TOGGLE = '[data-toggle="collapse"]';
          var Default = {
            toggle: true,
            parent: '',
          };
          var DefaultType = {
            toggle: 'boolean',
            parent: '(string|element)',
          };
          /**
           * Class definition
           */

          var Collapse = /*#__PURE__*/ (function () {
            function Collapse(element, config) {
              this._isTransitioning = false;
              this._element = element;
              this._config = this._getConfig(config);
              this._triggerArray = [].slice.call(
                document.querySelectorAll(
                  '[data-toggle="collapse"][href="#' +
                    element.id +
                    '"],' +
                    ('[data-toggle="collapse"][data-target="#' + element.id + '"]'),
                ),
              );
              var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

              for (var i = 0, len = toggleList.length; i < len; i++) {
                var elem = toggleList[i];
                var selector = Util__default['default'].getSelectorFromElement(elem);
                var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
                  return foundElem === element;
                });

                if (selector !== null && filterElement.length > 0) {
                  this._selector = selector;

                  this._triggerArray.push(elem);
                }
              }

              this._parent = this._config.parent ? this._getParent() : null;

              if (!this._config.parent) {
                this._addAriaAndCollapsedClass(this._element, this._triggerArray);
              }

              if (this._config.toggle) {
                this.toggle();
              }
            } // Getters

            var _proto = Collapse.prototype;

            // Public
            _proto.toggle = function toggle() {
              if ($__default['default'](this._element).hasClass(CLASS_NAME_SHOW)) {
                this.hide();
              } else {
                this.show();
              }
            };

            _proto.show = function show() {
              var _this = this;

              if (this._isTransitioning || $__default['default'](this._element).hasClass(CLASS_NAME_SHOW)) {
                return;
              }

              var actives;
              var activesData;

              if (this._parent) {
                actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
                  if (typeof _this._config.parent === 'string') {
                    return elem.getAttribute('data-parent') === _this._config.parent;
                  }

                  return elem.classList.contains(CLASS_NAME_COLLAPSE);
                });

                if (actives.length === 0) {
                  actives = null;
                }
              }

              if (actives) {
                activesData = $__default['default'](actives).not(this._selector).data(DATA_KEY);

                if (activesData && activesData._isTransitioning) {
                  return;
                }
              }

              var startEvent = $__default['default'].Event(EVENT_SHOW);
              $__default['default'](this._element).trigger(startEvent);

              if (startEvent.isDefaultPrevented()) {
                return;
              }

              if (actives) {
                Collapse._jQueryInterface.call($__default['default'](actives).not(this._selector), 'hide');

                if (!activesData) {
                  $__default['default'](actives).data(DATA_KEY, null);
                }
              }

              var dimension = this._getDimension();

              $__default['default'](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
              this._element.style[dimension] = 0;

              if (this._triggerArray.length) {
                $__default['default'](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
              }

              this.setTransitioning(true);

              var complete = function complete() {
                $__default['default'](_this._element)
                  .removeClass(CLASS_NAME_COLLAPSING)
                  .addClass(CLASS_NAME_COLLAPSE + ' ' + CLASS_NAME_SHOW);
                _this._element.style[dimension] = '';

                _this.setTransitioning(false);

                $__default['default'](_this._element).trigger(EVENT_SHOWN);
              };

              var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
              var scrollSize = 'scroll' + capitalizedDimension;
              var transitionDuration = Util__default['default'].getTransitionDurationFromElement(this._element);
              $__default['default'](this._element)
                .one(Util__default['default'].TRANSITION_END, complete)
                .emulateTransitionEnd(transitionDuration);
              this._element.style[dimension] = this._element[scrollSize] + 'px';
            };

            _proto.hide = function hide() {
              var _this2 = this;

              if (this._isTransitioning || !$__default['default'](this._element).hasClass(CLASS_NAME_SHOW)) {
                return;
              }

              var startEvent = $__default['default'].Event(EVENT_HIDE);
              $__default['default'](this._element).trigger(startEvent);

              if (startEvent.isDefaultPrevented()) {
                return;
              }

              var dimension = this._getDimension();

              this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + 'px';
              Util__default['default'].reflow(this._element);
              $__default['default'](this._element)
                .addClass(CLASS_NAME_COLLAPSING)
                .removeClass(CLASS_NAME_COLLAPSE + ' ' + CLASS_NAME_SHOW);
              var triggerArrayLength = this._triggerArray.length;

              if (triggerArrayLength > 0) {
                for (var i = 0; i < triggerArrayLength; i++) {
                  var trigger = this._triggerArray[i];
                  var selector = Util__default['default'].getSelectorFromElement(trigger);

                  if (selector !== null) {
                    var $elem = $__default['default']([].slice.call(document.querySelectorAll(selector)));

                    if (!$elem.hasClass(CLASS_NAME_SHOW)) {
                      $__default['default'](trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
                    }
                  }
                }
              }

              this.setTransitioning(true);

              var complete = function complete() {
                _this2.setTransitioning(false);

                $__default['default'](_this2._element)
                  .removeClass(CLASS_NAME_COLLAPSING)
                  .addClass(CLASS_NAME_COLLAPSE)
                  .trigger(EVENT_HIDDEN);
              };

              this._element.style[dimension] = '';
              var transitionDuration = Util__default['default'].getTransitionDurationFromElement(this._element);
              $__default['default'](this._element)
                .one(Util__default['default'].TRANSITION_END, complete)
                .emulateTransitionEnd(transitionDuration);
            };

            _proto.setTransitioning = function setTransitioning(isTransitioning) {
              this._isTransitioning = isTransitioning;
            };

            _proto.dispose = function dispose() {
              $__default['default'].removeData(this._element, DATA_KEY);
              this._config = null;
              this._parent = null;
              this._element = null;
              this._triggerArray = null;
              this._isTransitioning = null;
            }; // Private

            _proto._getConfig = function _getConfig(config) {
              config = _extends({}, Default, config);
              config.toggle = Boolean(config.toggle); // Coerce string values

              Util__default['default'].typeCheckConfig(NAME, config, DefaultType);
              return config;
            };

            _proto._getDimension = function _getDimension() {
              var hasWidth = $__default['default'](this._element).hasClass(DIMENSION_WIDTH);
              return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
            };

            _proto._getParent = function _getParent() {
              var _this3 = this;

              var parent;

              if (Util__default['default'].isElement(this._config.parent)) {
                parent = this._config.parent; // It's a jQuery object

                if (typeof this._config.parent.jquery !== 'undefined') {
                  parent = this._config.parent[0];
                }
              } else {
                parent = document.querySelector(this._config.parent);
              }

              var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
              var children = [].slice.call(parent.querySelectorAll(selector));
              $__default['default'](children).each(function (i, element) {
                _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
              });
              return parent;
            };

            _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
              var isOpen = $__default['default'](element).hasClass(CLASS_NAME_SHOW);

              if (triggerArray.length) {
                $__default['default'](triggerArray)
                  .toggleClass(CLASS_NAME_COLLAPSED, !isOpen)
                  .attr('aria-expanded', isOpen);
              }
            }; // Static

            Collapse._getTargetFromElement = function _getTargetFromElement(element) {
              var selector = Util__default['default'].getSelectorFromElement(element);
              return selector ? document.querySelector(selector) : null;
            };

            Collapse._jQueryInterface = function _jQueryInterface(config) {
              return this.each(function () {
                var $element = $__default['default'](this);
                var data = $element.data(DATA_KEY);

                var _config = _extends(
                  {},
                  Default,
                  $element.data(),
                  typeof config === 'object' && config ? config : {},
                );

                if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
                  _config.toggle = false;
                }

                if (!data) {
                  data = new Collapse(this, _config);
                  $element.data(DATA_KEY, data);
                }

                if (typeof config === 'string') {
                  if (typeof data[config] === 'undefined') {
                    throw new TypeError('No method named "' + config + '"');
                  }

                  data[config]();
                }
              });
            };

            _createClass(Collapse, null, [
              {
                key: 'VERSION',
                get: function get() {
                  return VERSION;
                },
              },
              {
                key: 'Default',
                get: function get() {
                  return Default;
                },
              },
            ]);

            return Collapse;
          })();
          /**
           * Data API implementation
           */

          $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
            // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
            if (event.currentTarget.tagName === 'A') {
              event.preventDefault();
            }

            var $trigger = $__default['default'](this);
            var selector = Util__default['default'].getSelectorFromElement(this);
            var selectors = [].slice.call(document.querySelectorAll(selector));
            $__default['default'](selectors).each(function () {
              var $target = $__default['default'](this);
              var data = $target.data(DATA_KEY);
              var config = data ? 'toggle' : $trigger.data();

              Collapse._jQueryInterface.call($target, config);
            });
          });
          /**
           * jQuery
           */

          $__default['default'].fn[NAME] = Collapse._jQueryInterface;
          $__default['default'].fn[NAME].Constructor = Collapse;

          $__default['default'].fn[NAME].noConflict = function () {
            $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
            return Collapse._jQueryInterface;
          };

          return Collapse;
        });
        //# sourceMappingURL=collapse.js.map

        /***/
      },

    /***/ './node_modules/bootstrap/js/dist/dropdown.js':
      /*!****************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dropdown.js ***!
  \****************************************************/
      /***/ function (module, __unused_webpack_exports, __webpack_require__) {
        /*!
         * Bootstrap dropdown.js v4.6.2 (https://getbootstrap.com/)
         * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         */
        (function (global, factory) {
          true
            ? (module.exports = factory(
                __webpack_require__(/*! jquery */ 'jquery'),
                __webpack_require__(/*! popper.js */ './node_modules/popper.js/dist/esm/popper.js'),
                __webpack_require__(/*! ./util.js */ './node_modules/bootstrap/js/dist/util.js'),
              ))
            : 0;
        })(this, function ($, Popper, Util) {
          'use strict';

          function _interopDefaultLegacy(e) {
            return e && typeof e === 'object' && 'default' in e ? e : { default: e };
          }

          var $__default = /*#__PURE__*/ _interopDefaultLegacy($);
          var Popper__default = /*#__PURE__*/ _interopDefaultLegacy(Popper);
          var Util__default = /*#__PURE__*/ _interopDefaultLegacy(Util);

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, 'prototype', {
              writable: false,
            });
            return Constructor;
          }

          function _extends() {
            _extends = Object.assign
              ? Object.assign.bind()
              : function (target) {
                  for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];

                    for (var key in source) {
                      if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                      }
                    }
                  }

                  return target;
                };
            return _extends.apply(this, arguments);
          }

          /**
           * Constants
           */

          var NAME = 'dropdown';
          var VERSION = '4.6.2';
          var DATA_KEY = 'bs.dropdown';
          var EVENT_KEY = '.' + DATA_KEY;
          var DATA_API_KEY = '.data-api';
          var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
          var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

          var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

          var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

          var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

          var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

          var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

          var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + '|' + ARROW_DOWN_KEYCODE + '|' + ESCAPE_KEYCODE);
          var CLASS_NAME_DISABLED = 'disabled';
          var CLASS_NAME_SHOW = 'show';
          var CLASS_NAME_DROPUP = 'dropup';
          var CLASS_NAME_DROPRIGHT = 'dropright';
          var CLASS_NAME_DROPLEFT = 'dropleft';
          var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
          var CLASS_NAME_POSITION_STATIC = 'position-static';
          var EVENT_HIDE = 'hide' + EVENT_KEY;
          var EVENT_HIDDEN = 'hidden' + EVENT_KEY;
          var EVENT_SHOW = 'show' + EVENT_KEY;
          var EVENT_SHOWN = 'shown' + EVENT_KEY;
          var EVENT_CLICK = 'click' + EVENT_KEY;
          var EVENT_CLICK_DATA_API = 'click' + EVENT_KEY + DATA_API_KEY;
          var EVENT_KEYDOWN_DATA_API = 'keydown' + EVENT_KEY + DATA_API_KEY;
          var EVENT_KEYUP_DATA_API = 'keyup' + EVENT_KEY + DATA_API_KEY;
          var SELECTOR_DATA_TOGGLE = '[data-toggle="dropdown"]';
          var SELECTOR_FORM_CHILD = '.dropdown form';
          var SELECTOR_MENU = '.dropdown-menu';
          var SELECTOR_NAVBAR_NAV = '.navbar-nav';
          var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
          var PLACEMENT_TOP = 'top-start';
          var PLACEMENT_TOPEND = 'top-end';
          var PLACEMENT_BOTTOM = 'bottom-start';
          var PLACEMENT_BOTTOMEND = 'bottom-end';
          var PLACEMENT_RIGHT = 'right-start';
          var PLACEMENT_LEFT = 'left-start';
          var Default = {
            offset: 0,
            flip: true,
            boundary: 'scrollParent',
            reference: 'toggle',
            display: 'dynamic',
            popperConfig: null,
          };
          var DefaultType = {
            offset: '(number|string|function)',
            flip: 'boolean',
            boundary: '(string|element)',
            reference: '(string|element)',
            display: 'string',
            popperConfig: '(null|object)',
          };
          /**
           * Class definition
           */

          var Dropdown = /*#__PURE__*/ (function () {
            function Dropdown(element, config) {
              this._element = element;
              this._popper = null;
              this._config = this._getConfig(config);
              this._menu = this._getMenuElement();
              this._inNavbar = this._detectNavbar();

              this._addEventListeners();
            } // Getters

            var _proto = Dropdown.prototype;

            // Public
            _proto.toggle = function toggle() {
              if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED)) {
                return;
              }

              var isActive = $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW);

              Dropdown._clearMenus();

              if (isActive) {
                return;
              }

              this.show(true);
            };

            _proto.show = function show(usePopper) {
              if (usePopper === void 0) {
                usePopper = false;
              }

              if (
                this._element.disabled ||
                $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) ||
                $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW)
              ) {
                return;
              }

              var relatedTarget = {
                relatedTarget: this._element,
              };
              var showEvent = $__default['default'].Event(EVENT_SHOW, relatedTarget);

              var parent = Dropdown._getParentFromElement(this._element);

              $__default['default'](parent).trigger(showEvent);

              if (showEvent.isDefaultPrevented()) {
                return;
              } // Totally disable Popper for Dropdowns in Navbar

              if (!this._inNavbar && usePopper) {
                // Check for Popper dependency
                if (typeof Popper__default['default'] === 'undefined') {
                  throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                }

                var referenceElement = this._element;

                if (this._config.reference === 'parent') {
                  referenceElement = parent;
                } else if (Util__default['default'].isElement(this._config.reference)) {
                  referenceElement = this._config.reference; // Check if it's jQuery element

                  if (typeof this._config.reference.jquery !== 'undefined') {
                    referenceElement = this._config.reference[0];
                  }
                } // If boundary is not `scrollParent`, then set position to `static`
                // to allow the menu to "escape" the scroll parent's boundaries
                // https://github.com/twbs/bootstrap/issues/24251

                if (this._config.boundary !== 'scrollParent') {
                  $__default['default'](parent).addClass(CLASS_NAME_POSITION_STATIC);
                }

                this._popper = new Popper__default['default'](referenceElement, this._menu, this._getPopperConfig());
              } // If this is a touch-enabled device we add extra
              // empty mouseover listeners to the body's immediate children;
              // only needed because of broken event delegation on iOS
              // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

              if (
                'ontouchstart' in document.documentElement &&
                $__default['default'](parent).closest(SELECTOR_NAVBAR_NAV).length === 0
              ) {
                $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
              }

              this._element.focus();

              this._element.setAttribute('aria-expanded', true);

              $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW);
              $__default['default'](parent)
                .toggleClass(CLASS_NAME_SHOW)
                .trigger($__default['default'].Event(EVENT_SHOWN, relatedTarget));
            };

            _proto.hide = function hide() {
              if (
                this._element.disabled ||
                $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) ||
                !$__default['default'](this._menu).hasClass(CLASS_NAME_SHOW)
              ) {
                return;
              }

              var relatedTarget = {
                relatedTarget: this._element,
              };
              var hideEvent = $__default['default'].Event(EVENT_HIDE, relatedTarget);

              var parent = Dropdown._getParentFromElement(this._element);

              $__default['default'](parent).trigger(hideEvent);

              if (hideEvent.isDefaultPrevented()) {
                return;
              }

              if (this._popper) {
                this._popper.destroy();
              }

              $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW);
              $__default['default'](parent)
                .toggleClass(CLASS_NAME_SHOW)
                .trigger($__default['default'].Event(EVENT_HIDDEN, relatedTarget));
            };

            _proto.dispose = function dispose() {
              $__default['default'].removeData(this._element, DATA_KEY);
              $__default['default'](this._element).off(EVENT_KEY);
              this._element = null;
              this._menu = null;

              if (this._popper !== null) {
                this._popper.destroy();

                this._popper = null;
              }
            };

            _proto.update = function update() {
              this._inNavbar = this._detectNavbar();

              if (this._popper !== null) {
                this._popper.scheduleUpdate();
              }
            }; // Private

            _proto._addEventListeners = function _addEventListeners() {
              var _this = this;

              $__default['default'](this._element).on(EVENT_CLICK, function (event) {
                event.preventDefault();
                event.stopPropagation();

                _this.toggle();
              });
            };

            _proto._getConfig = function _getConfig(config) {
              config = _extends({}, this.constructor.Default, $__default['default'](this._element).data(), config);
              Util__default['default'].typeCheckConfig(NAME, config, this.constructor.DefaultType);
              return config;
            };

            _proto._getMenuElement = function _getMenuElement() {
              if (!this._menu) {
                var parent = Dropdown._getParentFromElement(this._element);

                if (parent) {
                  this._menu = parent.querySelector(SELECTOR_MENU);
                }
              }

              return this._menu;
            };

            _proto._getPlacement = function _getPlacement() {
              var $parentDropdown = $__default['default'](this._element.parentNode);
              var placement = PLACEMENT_BOTTOM; // Handle dropup

              if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
                placement = $__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT)
                  ? PLACEMENT_TOPEND
                  : PLACEMENT_TOP;
              } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
                placement = PLACEMENT_RIGHT;
              } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
                placement = PLACEMENT_LEFT;
              } else if ($__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
                placement = PLACEMENT_BOTTOMEND;
              }

              return placement;
            };

            _proto._detectNavbar = function _detectNavbar() {
              return $__default['default'](this._element).closest('.navbar').length > 0;
            };

            _proto._getOffset = function _getOffset() {
              var _this2 = this;

              var offset = {};

              if (typeof this._config.offset === 'function') {
                offset.fn = function (data) {
                  data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets, _this2._element));
                  return data;
                };
              } else {
                offset.offset = this._config.offset;
              }

              return offset;
            };

            _proto._getPopperConfig = function _getPopperConfig() {
              var popperConfig = {
                placement: this._getPlacement(),
                modifiers: {
                  offset: this._getOffset(),
                  flip: {
                    enabled: this._config.flip,
                  },
                  preventOverflow: {
                    boundariesElement: this._config.boundary,
                  },
                },
              }; // Disable Popper if we have a static display

              if (this._config.display === 'static') {
                popperConfig.modifiers.applyStyle = {
                  enabled: false,
                };
              }

              return _extends({}, popperConfig, this._config.popperConfig);
            }; // Static

            Dropdown._jQueryInterface = function _jQueryInterface(config) {
              return this.each(function () {
                var data = $__default['default'](this).data(DATA_KEY);

                var _config = typeof config === 'object' ? config : null;

                if (!data) {
                  data = new Dropdown(this, _config);
                  $__default['default'](this).data(DATA_KEY, data);
                }

                if (typeof config === 'string') {
                  if (typeof data[config] === 'undefined') {
                    throw new TypeError('No method named "' + config + '"');
                  }

                  data[config]();
                }
              });
            };

            Dropdown._clearMenus = function _clearMenus(event) {
              if (
                event &&
                (event.which === RIGHT_MOUSE_BUTTON_WHICH || (event.type === 'keyup' && event.which !== TAB_KEYCODE))
              ) {
                return;
              }

              var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

              for (var i = 0, len = toggles.length; i < len; i++) {
                var parent = Dropdown._getParentFromElement(toggles[i]);

                var context = $__default['default'](toggles[i]).data(DATA_KEY);
                var relatedTarget = {
                  relatedTarget: toggles[i],
                };

                if (event && event.type === 'click') {
                  relatedTarget.clickEvent = event;
                }

                if (!context) {
                  continue;
                }

                var dropdownMenu = context._menu;

                if (!$__default['default'](parent).hasClass(CLASS_NAME_SHOW)) {
                  continue;
                }

                if (
                  event &&
                  ((event.type === 'click' && /input|textarea/i.test(event.target.tagName)) ||
                    (event.type === 'keyup' && event.which === TAB_KEYCODE)) &&
                  $__default['default'].contains(parent, event.target)
                ) {
                  continue;
                }

                var hideEvent = $__default['default'].Event(EVENT_HIDE, relatedTarget);
                $__default['default'](parent).trigger(hideEvent);

                if (hideEvent.isDefaultPrevented()) {
                  continue;
                } // If this is a touch-enabled device we remove the extra
                // empty mouseover listeners we added for iOS support

                if ('ontouchstart' in document.documentElement) {
                  $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
                }

                toggles[i].setAttribute('aria-expanded', 'false');

                if (context._popper) {
                  context._popper.destroy();
                }

                $__default['default'](dropdownMenu).removeClass(CLASS_NAME_SHOW);
                $__default['default'](parent)
                  .removeClass(CLASS_NAME_SHOW)
                  .trigger($__default['default'].Event(EVENT_HIDDEN, relatedTarget));
              }
            };

            Dropdown._getParentFromElement = function _getParentFromElement(element) {
              var parent;
              var selector = Util__default['default'].getSelectorFromElement(element);

              if (selector) {
                parent = document.querySelector(selector);
              }

              return parent || element.parentNode;
            }; // eslint-disable-next-line complexity

            Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
              // If not input/textarea:
              //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
              // If input/textarea:
              //  - If space key => not a dropdown command
              //  - If key is other than escape
              //    - If key is not up or down => not a dropdown command
              //    - If trigger inside the menu => not a dropdown command
              if (
                /input|textarea/i.test(event.target.tagName)
                  ? event.which === SPACE_KEYCODE ||
                    (event.which !== ESCAPE_KEYCODE &&
                      ((event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE) ||
                        $__default['default'](event.target).closest(SELECTOR_MENU).length))
                  : !REGEXP_KEYDOWN.test(event.which)
              ) {
                return;
              }

              if (this.disabled || $__default['default'](this).hasClass(CLASS_NAME_DISABLED)) {
                return;
              }

              var parent = Dropdown._getParentFromElement(this);

              var isActive = $__default['default'](parent).hasClass(CLASS_NAME_SHOW);

              if (!isActive && event.which === ESCAPE_KEYCODE) {
                return;
              }

              event.preventDefault();
              event.stopPropagation();

              if (!isActive || event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE) {
                if (event.which === ESCAPE_KEYCODE) {
                  $__default['default'](parent.querySelector(SELECTOR_DATA_TOGGLE)).trigger('focus');
                }

                $__default['default'](this).trigger('click');
                return;
              }

              var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
                return $__default['default'](item).is(':visible');
              });

              if (items.length === 0) {
                return;
              }

              var index = items.indexOf(event.target);

              if (event.which === ARROW_UP_KEYCODE && index > 0) {
                // Up
                index--;
              }

              if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
                // Down
                index++;
              }

              if (index < 0) {
                index = 0;
              }

              items[index].focus();
            };

            _createClass(Dropdown, null, [
              {
                key: 'VERSION',
                get: function get() {
                  return VERSION;
                },
              },
              {
                key: 'Default',
                get: function get() {
                  return Default;
                },
              },
              {
                key: 'DefaultType',
                get: function get() {
                  return DefaultType;
                },
              },
            ]);

            return Dropdown;
          })();
          /**
           * Data API implementation
           */

          $__default['default'](document)
            .on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown._dataApiKeydownHandler)
            .on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler)
            .on(EVENT_CLICK_DATA_API + ' ' + EVENT_KEYUP_DATA_API, Dropdown._clearMenus)
            .on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
              event.preventDefault();
              event.stopPropagation();

              Dropdown._jQueryInterface.call($__default['default'](this), 'toggle');
            })
            .on(EVENT_CLICK_DATA_API, SELECTOR_FORM_CHILD, function (e) {
              e.stopPropagation();
            });
          /**
           * jQuery
           */

          $__default['default'].fn[NAME] = Dropdown._jQueryInterface;
          $__default['default'].fn[NAME].Constructor = Dropdown;

          $__default['default'].fn[NAME].noConflict = function () {
            $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
            return Dropdown._jQueryInterface;
          };

          return Dropdown;
        });
        //# sourceMappingURL=dropdown.js.map

        /***/
      },

    /***/ './node_modules/bootstrap/js/dist/tooltip.js':
      /*!***************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/tooltip.js ***!
  \***************************************************/
      /***/ function (module, __unused_webpack_exports, __webpack_require__) {
        /*!
         * Bootstrap tooltip.js v4.6.2 (https://getbootstrap.com/)
         * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         */
        (function (global, factory) {
          true
            ? (module.exports = factory(
                __webpack_require__(/*! jquery */ 'jquery'),
                __webpack_require__(/*! popper.js */ './node_modules/popper.js/dist/esm/popper.js'),
                __webpack_require__(/*! ./util.js */ './node_modules/bootstrap/js/dist/util.js'),
              ))
            : 0;
        })(this, function ($, Popper, Util) {
          'use strict';

          function _interopDefaultLegacy(e) {
            return e && typeof e === 'object' && 'default' in e ? e : { default: e };
          }

          var $__default = /*#__PURE__*/ _interopDefaultLegacy($);
          var Popper__default = /*#__PURE__*/ _interopDefaultLegacy(Popper);
          var Util__default = /*#__PURE__*/ _interopDefaultLegacy(Util);

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, 'prototype', {
              writable: false,
            });
            return Constructor;
          }

          function _extends() {
            _extends = Object.assign
              ? Object.assign.bind()
              : function (target) {
                  for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];

                    for (var key in source) {
                      if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                      }
                    }
                  }

                  return target;
                };
            return _extends.apply(this, arguments);
          }

          /**
           * --------------------------------------------------------------------------
           * Bootstrap (v4.6.2): tools/sanitizer.js
           * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
           * --------------------------------------------------------------------------
           */
          var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
          var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
          var DefaultWhitelist = {
            // Global attributes allowed on any supplied element below.
            '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
            a: ['target', 'href', 'title', 'rel'],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
          };
          /**
           * A pattern that recognizes a commonly useful subset of URLs that are safe.
           *
           * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
           */

          var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
          /**
           * A pattern that matches safe data URLs. Only matches image, video and audio types.
           *
           * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
           */

          var DATA_URL_PATTERN =
            /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

          function allowedAttribute(attr, allowedAttributeList) {
            var attrName = attr.nodeName.toLowerCase();

            if (allowedAttributeList.indexOf(attrName) !== -1) {
              if (uriAttrs.indexOf(attrName) !== -1) {
                return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
              }

              return true;
            }

            var regExp = allowedAttributeList.filter(function (attrRegex) {
              return attrRegex instanceof RegExp;
            }); // Check if a regular expression validates the attribute.

            for (var i = 0, len = regExp.length; i < len; i++) {
              if (regExp[i].test(attrName)) {
                return true;
              }
            }

            return false;
          }

          function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
            if (unsafeHtml.length === 0) {
              return unsafeHtml;
            }

            if (sanitizeFn && typeof sanitizeFn === 'function') {
              return sanitizeFn(unsafeHtml);
            }

            var domParser = new window.DOMParser();
            var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
            var whitelistKeys = Object.keys(whiteList);
            var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

            var _loop = function _loop(i, len) {
              var el = elements[i];
              var elName = el.nodeName.toLowerCase();

              if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
                el.parentNode.removeChild(el);
                return 'continue';
              }

              var attributeList = [].slice.call(el.attributes); // eslint-disable-next-line unicorn/prefer-spread

              var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
              attributeList.forEach(function (attr) {
                if (!allowedAttribute(attr, whitelistedAttributes)) {
                  el.removeAttribute(attr.nodeName);
                }
              });
            };

            for (var i = 0, len = elements.length; i < len; i++) {
              var _ret = _loop(i);

              if (_ret === 'continue') continue;
            }

            return createdDocument.body.innerHTML;
          }

          /**
           * Constants
           */

          var NAME = 'tooltip';
          var VERSION = '4.6.2';
          var DATA_KEY = 'bs.tooltip';
          var EVENT_KEY = '.' + DATA_KEY;
          var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
          var CLASS_PREFIX = 'bs-tooltip';
          var BSCLS_PREFIX_REGEX = new RegExp('(^|\\s)' + CLASS_PREFIX + '\\S+', 'g');
          var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
          var CLASS_NAME_FADE = 'fade';
          var CLASS_NAME_SHOW = 'show';
          var HOVER_STATE_SHOW = 'show';
          var HOVER_STATE_OUT = 'out';
          var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
          var SELECTOR_ARROW = '.arrow';
          var TRIGGER_HOVER = 'hover';
          var TRIGGER_FOCUS = 'focus';
          var TRIGGER_CLICK = 'click';
          var TRIGGER_MANUAL = 'manual';
          var AttachmentMap = {
            AUTO: 'auto',
            TOP: 'top',
            RIGHT: 'right',
            BOTTOM: 'bottom',
            LEFT: 'left',
          };
          var Default = {
            animation: true,
            template:
              '<div class="tooltip" role="tooltip">' +
              '<div class="arrow"></div>' +
              '<div class="tooltip-inner"></div></div>',
            trigger: 'hover focus',
            title: '',
            delay: 0,
            html: false,
            selector: false,
            placement: 'top',
            offset: 0,
            container: false,
            fallbackPlacement: 'flip',
            boundary: 'scrollParent',
            customClass: '',
            sanitize: true,
            sanitizeFn: null,
            whiteList: DefaultWhitelist,
            popperConfig: null,
          };
          var DefaultType = {
            animation: 'boolean',
            template: 'string',
            title: '(string|element|function)',
            trigger: 'string',
            delay: '(number|object)',
            html: 'boolean',
            selector: '(string|boolean)',
            placement: '(string|function)',
            offset: '(number|string|function)',
            container: '(string|element|boolean)',
            fallbackPlacement: '(string|array)',
            boundary: '(string|element)',
            customClass: '(string|function)',
            sanitize: 'boolean',
            sanitizeFn: '(null|function)',
            whiteList: 'object',
            popperConfig: '(null|object)',
          };
          var Event = {
            HIDE: 'hide' + EVENT_KEY,
            HIDDEN: 'hidden' + EVENT_KEY,
            SHOW: 'show' + EVENT_KEY,
            SHOWN: 'shown' + EVENT_KEY,
            INSERTED: 'inserted' + EVENT_KEY,
            CLICK: 'click' + EVENT_KEY,
            FOCUSIN: 'focusin' + EVENT_KEY,
            FOCUSOUT: 'focusout' + EVENT_KEY,
            MOUSEENTER: 'mouseenter' + EVENT_KEY,
            MOUSELEAVE: 'mouseleave' + EVENT_KEY,
          };
          /**
           * Class definition
           */

          var Tooltip = /*#__PURE__*/ (function () {
            function Tooltip(element, config) {
              if (typeof Popper__default['default'] === 'undefined') {
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
              } // Private

              this._isEnabled = true;
              this._timeout = 0;
              this._hoverState = '';
              this._activeTrigger = {};
              this._popper = null; // Protected

              this.element = element;
              this.config = this._getConfig(config);
              this.tip = null;

              this._setListeners();
            } // Getters

            var _proto = Tooltip.prototype;

            // Public
            _proto.enable = function enable() {
              this._isEnabled = true;
            };

            _proto.disable = function disable() {
              this._isEnabled = false;
            };

            _proto.toggleEnabled = function toggleEnabled() {
              this._isEnabled = !this._isEnabled;
            };

            _proto.toggle = function toggle(event) {
              if (!this._isEnabled) {
                return;
              }

              if (event) {
                var dataKey = this.constructor.DATA_KEY;
                var context = $__default['default'](event.currentTarget).data(dataKey);

                if (!context) {
                  context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                  $__default['default'](event.currentTarget).data(dataKey, context);
                }

                context._activeTrigger.click = !context._activeTrigger.click;

                if (context._isWithActiveTrigger()) {
                  context._enter(null, context);
                } else {
                  context._leave(null, context);
                }
              } else {
                if ($__default['default'](this.getTipElement()).hasClass(CLASS_NAME_SHOW)) {
                  this._leave(null, this);

                  return;
                }

                this._enter(null, this);
              }
            };

            _proto.dispose = function dispose() {
              clearTimeout(this._timeout);
              $__default['default'].removeData(this.element, this.constructor.DATA_KEY);
              $__default['default'](this.element).off(this.constructor.EVENT_KEY);
              $__default['default'](this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

              if (this.tip) {
                $__default['default'](this.tip).remove();
              }

              this._isEnabled = null;
              this._timeout = null;
              this._hoverState = null;
              this._activeTrigger = null;

              if (this._popper) {
                this._popper.destroy();
              }

              this._popper = null;
              this.element = null;
              this.config = null;
              this.tip = null;
            };

            _proto.show = function show() {
              var _this = this;

              if ($__default['default'](this.element).css('display') === 'none') {
                throw new Error('Please use show on visible elements');
              }

              var showEvent = $__default['default'].Event(this.constructor.Event.SHOW);

              if (this.isWithContent() && this._isEnabled) {
                $__default['default'](this.element).trigger(showEvent);
                var shadowRoot = Util__default['default'].findShadowRoot(this.element);
                var isInTheDom = $__default['default'].contains(
                  shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement,
                  this.element,
                );

                if (showEvent.isDefaultPrevented() || !isInTheDom) {
                  return;
                }

                var tip = this.getTipElement();
                var tipId = Util__default['default'].getUID(this.constructor.NAME);
                tip.setAttribute('id', tipId);
                this.element.setAttribute('aria-describedby', tipId);
                this.setContent();

                if (this.config.animation) {
                  $__default['default'](tip).addClass(CLASS_NAME_FADE);
                }

                var placement =
                  typeof this.config.placement === 'function'
                    ? this.config.placement.call(this, tip, this.element)
                    : this.config.placement;

                var attachment = this._getAttachment(placement);

                this.addAttachmentClass(attachment);

                var container = this._getContainer();

                $__default['default'](tip).data(this.constructor.DATA_KEY, this);

                if (!$__default['default'].contains(this.element.ownerDocument.documentElement, this.tip)) {
                  $__default['default'](tip).appendTo(container);
                }

                $__default['default'](this.element).trigger(this.constructor.Event.INSERTED);
                this._popper = new Popper__default['default'](this.element, tip, this._getPopperConfig(attachment));
                $__default['default'](tip).addClass(CLASS_NAME_SHOW);
                $__default['default'](tip).addClass(this.config.customClass); // If this is a touch-enabled device we add extra
                // empty mouseover listeners to the body's immediate children;
                // only needed because of broken event delegation on iOS
                // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

                if ('ontouchstart' in document.documentElement) {
                  $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
                }

                var complete = function complete() {
                  if (_this.config.animation) {
                    _this._fixTransition();
                  }

                  var prevHoverState = _this._hoverState;
                  _this._hoverState = null;
                  $__default['default'](_this.element).trigger(_this.constructor.Event.SHOWN);

                  if (prevHoverState === HOVER_STATE_OUT) {
                    _this._leave(null, _this);
                  }
                };

                if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE)) {
                  var transitionDuration = Util__default['default'].getTransitionDurationFromElement(this.tip);
                  $__default['default'](this.tip)
                    .one(Util__default['default'].TRANSITION_END, complete)
                    .emulateTransitionEnd(transitionDuration);
                } else {
                  complete();
                }
              }
            };

            _proto.hide = function hide(callback) {
              var _this2 = this;

              var tip = this.getTipElement();
              var hideEvent = $__default['default'].Event(this.constructor.Event.HIDE);

              var complete = function complete() {
                if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
                  tip.parentNode.removeChild(tip);
                }

                _this2._cleanTipClass();

                _this2.element.removeAttribute('aria-describedby');

                $__default['default'](_this2.element).trigger(_this2.constructor.Event.HIDDEN);

                if (_this2._popper !== null) {
                  _this2._popper.destroy();
                }

                if (callback) {
                  callback();
                }
              };

              $__default['default'](this.element).trigger(hideEvent);

              if (hideEvent.isDefaultPrevented()) {
                return;
              }

              $__default['default'](tip).removeClass(CLASS_NAME_SHOW); // If this is a touch-enabled device we remove the extra
              // empty mouseover listeners we added for iOS support

              if ('ontouchstart' in document.documentElement) {
                $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
              }

              this._activeTrigger[TRIGGER_CLICK] = false;
              this._activeTrigger[TRIGGER_FOCUS] = false;
              this._activeTrigger[TRIGGER_HOVER] = false;

              if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE)) {
                var transitionDuration = Util__default['default'].getTransitionDurationFromElement(tip);
                $__default['default'](tip)
                  .one(Util__default['default'].TRANSITION_END, complete)
                  .emulateTransitionEnd(transitionDuration);
              } else {
                complete();
              }

              this._hoverState = '';
            };

            _proto.update = function update() {
              if (this._popper !== null) {
                this._popper.scheduleUpdate();
              }
            }; // Protected

            _proto.isWithContent = function isWithContent() {
              return Boolean(this.getTitle());
            };

            _proto.addAttachmentClass = function addAttachmentClass(attachment) {
              $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX + '-' + attachment);
            };

            _proto.getTipElement = function getTipElement() {
              this.tip = this.tip || $__default['default'](this.config.template)[0];
              return this.tip;
            };

            _proto.setContent = function setContent() {
              var tip = this.getTipElement();
              this.setElementContent(
                $__default['default'](tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)),
                this.getTitle(),
              );
              $__default['default'](tip).removeClass(CLASS_NAME_FADE + ' ' + CLASS_NAME_SHOW);
            };

            _proto.setElementContent = function setElementContent($element, content) {
              if (typeof content === 'object' && (content.nodeType || content.jquery)) {
                // Content is a DOM node or a jQuery
                if (this.config.html) {
                  if (!$__default['default'](content).parent().is($element)) {
                    $element.empty().append(content);
                  }
                } else {
                  $element.text($__default['default'](content).text());
                }

                return;
              }

              if (this.config.html) {
                if (this.config.sanitize) {
                  content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
                }

                $element.html(content);
              } else {
                $element.text(content);
              }
            };

            _proto.getTitle = function getTitle() {
              var title = this.element.getAttribute('data-original-title');

              if (!title) {
                title =
                  typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
              }

              return title;
            }; // Private

            _proto._getPopperConfig = function _getPopperConfig(attachment) {
              var _this3 = this;

              var defaultBsConfig = {
                placement: attachment,
                modifiers: {
                  offset: this._getOffset(),
                  flip: {
                    behavior: this.config.fallbackPlacement,
                  },
                  arrow: {
                    element: SELECTOR_ARROW,
                  },
                  preventOverflow: {
                    boundariesElement: this.config.boundary,
                  },
                },
                onCreate: function onCreate(data) {
                  if (data.originalPlacement !== data.placement) {
                    _this3._handlePopperPlacementChange(data);
                  }
                },
                onUpdate: function onUpdate(data) {
                  return _this3._handlePopperPlacementChange(data);
                },
              };
              return _extends({}, defaultBsConfig, this.config.popperConfig);
            };

            _proto._getOffset = function _getOffset() {
              var _this4 = this;

              var offset = {};

              if (typeof this.config.offset === 'function') {
                offset.fn = function (data) {
                  data.offsets = _extends({}, data.offsets, _this4.config.offset(data.offsets, _this4.element));
                  return data;
                };
              } else {
                offset.offset = this.config.offset;
              }

              return offset;
            };

            _proto._getContainer = function _getContainer() {
              if (this.config.container === false) {
                return document.body;
              }

              if (Util__default['default'].isElement(this.config.container)) {
                return $__default['default'](this.config.container);
              }

              return $__default['default'](document).find(this.config.container);
            };

            _proto._getAttachment = function _getAttachment(placement) {
              return AttachmentMap[placement.toUpperCase()];
            };

            _proto._setListeners = function _setListeners() {
              var _this5 = this;

              var triggers = this.config.trigger.split(' ');
              triggers.forEach(function (trigger) {
                if (trigger === 'click') {
                  $__default['default'](_this5.element).on(
                    _this5.constructor.Event.CLICK,
                    _this5.config.selector,
                    function (event) {
                      return _this5.toggle(event);
                    },
                  );
                } else if (trigger !== TRIGGER_MANUAL) {
                  var eventIn =
                    trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
                  var eventOut =
                    trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
                  $__default['default'](_this5.element)
                    .on(eventIn, _this5.config.selector, function (event) {
                      return _this5._enter(event);
                    })
                    .on(eventOut, _this5.config.selector, function (event) {
                      return _this5._leave(event);
                    });
                }
              });

              this._hideModalHandler = function () {
                if (_this5.element) {
                  _this5.hide();
                }
              };

              $__default['default'](this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

              if (this.config.selector) {
                this.config = _extends({}, this.config, {
                  trigger: 'manual',
                  selector: '',
                });
              } else {
                this._fixTitle();
              }
            };

            _proto._fixTitle = function _fixTitle() {
              var titleType = typeof this.element.getAttribute('data-original-title');

              if (this.element.getAttribute('title') || titleType !== 'string') {
                this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
                this.element.setAttribute('title', '');
              }
            };

            _proto._enter = function _enter(event, context) {
              var dataKey = this.constructor.DATA_KEY;
              context = context || $__default['default'](event.currentTarget).data(dataKey);

              if (!context) {
                context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                $__default['default'](event.currentTarget).data(dataKey, context);
              }

              if (event) {
                context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
              }

              if (
                $__default['default'](context.getTipElement()).hasClass(CLASS_NAME_SHOW) ||
                context._hoverState === HOVER_STATE_SHOW
              ) {
                context._hoverState = HOVER_STATE_SHOW;
                return;
              }

              clearTimeout(context._timeout);
              context._hoverState = HOVER_STATE_SHOW;

              if (!context.config.delay || !context.config.delay.show) {
                context.show();
                return;
              }

              context._timeout = setTimeout(function () {
                if (context._hoverState === HOVER_STATE_SHOW) {
                  context.show();
                }
              }, context.config.delay.show);
            };

            _proto._leave = function _leave(event, context) {
              var dataKey = this.constructor.DATA_KEY;
              context = context || $__default['default'](event.currentTarget).data(dataKey);

              if (!context) {
                context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                $__default['default'](event.currentTarget).data(dataKey, context);
              }

              if (event) {
                context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
              }

              if (context._isWithActiveTrigger()) {
                return;
              }

              clearTimeout(context._timeout);
              context._hoverState = HOVER_STATE_OUT;

              if (!context.config.delay || !context.config.delay.hide) {
                context.hide();
                return;
              }

              context._timeout = setTimeout(function () {
                if (context._hoverState === HOVER_STATE_OUT) {
                  context.hide();
                }
              }, context.config.delay.hide);
            };

            _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
              for (var trigger in this._activeTrigger) {
                if (this._activeTrigger[trigger]) {
                  return true;
                }
              }

              return false;
            };

            _proto._getConfig = function _getConfig(config) {
              var dataAttributes = $__default['default'](this.element).data();
              Object.keys(dataAttributes).forEach(function (dataAttr) {
                if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
                  delete dataAttributes[dataAttr];
                }
              });
              config = _extends(
                {},
                this.constructor.Default,
                dataAttributes,
                typeof config === 'object' && config ? config : {},
              );

              if (typeof config.delay === 'number') {
                config.delay = {
                  show: config.delay,
                  hide: config.delay,
                };
              }

              if (typeof config.title === 'number') {
                config.title = config.title.toString();
              }

              if (typeof config.content === 'number') {
                config.content = config.content.toString();
              }

              Util__default['default'].typeCheckConfig(NAME, config, this.constructor.DefaultType);

              if (config.sanitize) {
                config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
              }

              return config;
            };

            _proto._getDelegateConfig = function _getDelegateConfig() {
              var config = {};

              if (this.config) {
                for (var key in this.config) {
                  if (this.constructor.Default[key] !== this.config[key]) {
                    config[key] = this.config[key];
                  }
                }
              }

              return config;
            };

            _proto._cleanTipClass = function _cleanTipClass() {
              var $tip = $__default['default'](this.getTipElement());
              var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

              if (tabClass !== null && tabClass.length) {
                $tip.removeClass(tabClass.join(''));
              }
            };

            _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
              this.tip = popperData.instance.popper;

              this._cleanTipClass();

              this.addAttachmentClass(this._getAttachment(popperData.placement));
            };

            _proto._fixTransition = function _fixTransition() {
              var tip = this.getTipElement();
              var initConfigAnimation = this.config.animation;

              if (tip.getAttribute('x-placement') !== null) {
                return;
              }

              $__default['default'](tip).removeClass(CLASS_NAME_FADE);
              this.config.animation = false;
              this.hide();
              this.show();
              this.config.animation = initConfigAnimation;
            }; // Static

            Tooltip._jQueryInterface = function _jQueryInterface(config) {
              return this.each(function () {
                var $element = $__default['default'](this);
                var data = $element.data(DATA_KEY);

                var _config = typeof config === 'object' && config;

                if (!data && /dispose|hide/.test(config)) {
                  return;
                }

                if (!data) {
                  data = new Tooltip(this, _config);
                  $element.data(DATA_KEY, data);
                }

                if (typeof config === 'string') {
                  if (typeof data[config] === 'undefined') {
                    throw new TypeError('No method named "' + config + '"');
                  }

                  data[config]();
                }
              });
            };

            _createClass(Tooltip, null, [
              {
                key: 'VERSION',
                get: function get() {
                  return VERSION;
                },
              },
              {
                key: 'Default',
                get: function get() {
                  return Default;
                },
              },
              {
                key: 'NAME',
                get: function get() {
                  return NAME;
                },
              },
              {
                key: 'DATA_KEY',
                get: function get() {
                  return DATA_KEY;
                },
              },
              {
                key: 'Event',
                get: function get() {
                  return Event;
                },
              },
              {
                key: 'EVENT_KEY',
                get: function get() {
                  return EVENT_KEY;
                },
              },
              {
                key: 'DefaultType',
                get: function get() {
                  return DefaultType;
                },
              },
            ]);

            return Tooltip;
          })();
          /**
           * jQuery
           */

          $__default['default'].fn[NAME] = Tooltip._jQueryInterface;
          $__default['default'].fn[NAME].Constructor = Tooltip;

          $__default['default'].fn[NAME].noConflict = function () {
            $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
            return Tooltip._jQueryInterface;
          };

          return Tooltip;
        });
        //# sourceMappingURL=tooltip.js.map

        /***/
      },

    /***/ './node_modules/bootstrap/js/dist/util.js':
      /*!************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util.js ***!
  \************************************************/
      /***/ function (module, __unused_webpack_exports, __webpack_require__) {
        /*!
         * Bootstrap util.js v4.6.2 (https://getbootstrap.com/)
         * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         */
        (function (global, factory) {
          true ? (module.exports = factory(__webpack_require__(/*! jquery */ 'jquery'))) : 0;
        })(this, function ($) {
          'use strict';

          function _interopDefaultLegacy(e) {
            return e && typeof e === 'object' && 'default' in e ? e : { default: e };
          }

          var $__default = /*#__PURE__*/ _interopDefaultLegacy($);

          /**
           * --------------------------------------------------------------------------
           * Bootstrap (v4.6.2): util.js
           * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
           * --------------------------------------------------------------------------
           */
          /**
           * Private TransitionEnd Helpers
           */

          var TRANSITION_END = 'transitionend';
          var MAX_UID = 1000000;
          var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

          function toType(obj) {
            if (obj === null || typeof obj === 'undefined') {
              return '' + obj;
            }

            return {}.toString
              .call(obj)
              .match(/\s([a-z]+)/i)[1]
              .toLowerCase();
          }

          function getSpecialTransitionEndEvent() {
            return {
              bindType: TRANSITION_END,
              delegateType: TRANSITION_END,
              handle: function handle(event) {
                if ($__default['default'](event.target).is(this)) {
                  return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
                }

                return undefined;
              },
            };
          }

          function transitionEndEmulator(duration) {
            var _this = this;

            var called = false;
            $__default['default'](this).one(Util.TRANSITION_END, function () {
              called = true;
            });
            setTimeout(function () {
              if (!called) {
                Util.triggerTransitionEnd(_this);
              }
            }, duration);
            return this;
          }

          function setTransitionEndSupport() {
            $__default['default'].fn.emulateTransitionEnd = transitionEndEmulator;
            $__default['default'].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
          }
          /**
           * Public Util API
           */

          var Util = {
            TRANSITION_END: 'bsTransitionEnd',
            getUID: function getUID(prefix) {
              do {
                // eslint-disable-next-line no-bitwise
                prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
              } while (document.getElementById(prefix));

              return prefix;
            },
            getSelectorFromElement: function getSelectorFromElement(element) {
              var selector = element.getAttribute('data-target');

              if (!selector || selector === '#') {
                var hrefAttr = element.getAttribute('href');
                selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
              }

              try {
                return document.querySelector(selector) ? selector : null;
              } catch (_) {
                return null;
              }
            },
            getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
              if (!element) {
                return 0;
              } // Get transition-duration of the element

              var transitionDuration = $__default['default'](element).css('transition-duration');
              var transitionDelay = $__default['default'](element).css('transition-delay');
              var floatTransitionDuration = parseFloat(transitionDuration);
              var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

              if (!floatTransitionDuration && !floatTransitionDelay) {
                return 0;
              } // If multiple durations are defined, take the first

              transitionDuration = transitionDuration.split(',')[0];
              transitionDelay = transitionDelay.split(',')[0];
              return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
            },
            reflow: function reflow(element) {
              return element.offsetHeight;
            },
            triggerTransitionEnd: function triggerTransitionEnd(element) {
              $__default['default'](element).trigger(TRANSITION_END);
            },
            supportsTransitionEnd: function supportsTransitionEnd() {
              return Boolean(TRANSITION_END);
            },
            isElement: function isElement(obj) {
              return (obj[0] || obj).nodeType;
            },
            typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
              for (var property in configTypes) {
                if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
                  var expectedTypes = configTypes[property];
                  var value = config[property];
                  var valueType = value && Util.isElement(value) ? 'element' : toType(value);

                  if (!new RegExp(expectedTypes).test(valueType)) {
                    throw new Error(
                      componentName.toUpperCase() +
                        ': ' +
                        ('Option "' + property + '" provided type "' + valueType + '" ') +
                        ('but expected type "' + expectedTypes + '".'),
                    );
                  }
                }
              }
            },
            findShadowRoot: function findShadowRoot(element) {
              if (!document.documentElement.attachShadow) {
                return null;
              } // Can find the shadow root otherwise it'll return the document

              if (typeof element.getRootNode === 'function') {
                var root = element.getRootNode();
                return root instanceof ShadowRoot ? root : null;
              }

              if (element instanceof ShadowRoot) {
                return element;
              } // when we don't find a shadow root

              if (!element.parentNode) {
                return null;
              }

              return Util.findShadowRoot(element.parentNode);
            },
            jQueryDetection: function jQueryDetection() {
              if (typeof $__default['default'] === 'undefined') {
                throw new TypeError(
                  "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.",
                );
              }

              var version = $__default['default'].fn.jquery.split(' ')[0].split('.');
              var minMajor = 1;
              var ltMajor = 2;
              var minMinor = 9;
              var minPatch = 1;
              var maxMajor = 4;

              if (
                (version[0] < ltMajor && version[1] < minMinor) ||
                (version[0] === minMajor && version[1] === minMinor && version[2] < minPatch) ||
                version[0] >= maxMajor
              ) {
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
              }
            },
          };
          Util.jQueryDetection();
          setTransitionEndSupport();

          return Util;
        });
        //# sourceMappingURL=util.js.map

        /***/
      },

    /***/ './node_modules/focus-trap/dist/focus-trap.esm.js':
      /*!********************************************************!*\
  !*** ./node_modules/focus-trap/dist/focus-trap.esm.js ***!
  \********************************************************/
      /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ createFocusTrap: function () {
            return /* binding */ createFocusTrap;
          },
          /* harmony export */
        });
        /* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tabbable */ './node_modules/tabbable/dist/index.esm.js',
        );
        /*!
         * focus-trap 7.5.3
         * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
         */

        function ownKeys(e, r) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            r &&
              (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function _objectSpread2(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2
              ? ownKeys(Object(t), !0).forEach(function (r) {
                  _defineProperty(e, r, t[r]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ownKeys(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
          }
          return e;
        }
        function _defineProperty(obj, key, value) {
          key = _toPropertyKey(key);
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _toPrimitive(input, hint) {
          if (typeof input !== 'object' || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || 'default');
            if (typeof res !== 'object') return res;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return (hint === 'string' ? String : Number)(input);
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, 'string');
          return typeof key === 'symbol' ? key : String(key);
        }

        var activeFocusTraps = {
          activateTrap: function activateTrap(trapStack, trap) {
            if (trapStack.length > 0) {
              var activeTrap = trapStack[trapStack.length - 1];
              if (activeTrap !== trap) {
                activeTrap.pause();
              }
            }
            var trapIndex = trapStack.indexOf(trap);
            if (trapIndex === -1) {
              trapStack.push(trap);
            } else {
              // move this existing trap to the front of the queue
              trapStack.splice(trapIndex, 1);
              trapStack.push(trap);
            }
          },
          deactivateTrap: function deactivateTrap(trapStack, trap) {
            var trapIndex = trapStack.indexOf(trap);
            if (trapIndex !== -1) {
              trapStack.splice(trapIndex, 1);
            }
            if (trapStack.length > 0) {
              trapStack[trapStack.length - 1].unpause();
            }
          },
        };
        var isSelectableInput = function isSelectableInput(node) {
          return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
        };
        var isEscapeEvent = function isEscapeEvent(e) {
          return (
            (e === null || e === void 0 ? void 0 : e.key) === 'Escape' ||
            (e === null || e === void 0 ? void 0 : e.key) === 'Esc' ||
            (e === null || e === void 0 ? void 0 : e.keyCode) === 27
          );
        };
        var isTabEvent = function isTabEvent(e) {
          return (
            (e === null || e === void 0 ? void 0 : e.key) === 'Tab' ||
            (e === null || e === void 0 ? void 0 : e.keyCode) === 9
          );
        };

        // checks for TAB by default
        var isKeyForward = function isKeyForward(e) {
          return isTabEvent(e) && !e.shiftKey;
        };

        // checks for SHIFT+TAB by default
        var isKeyBackward = function isKeyBackward(e) {
          return isTabEvent(e) && e.shiftKey;
        };
        var delay = function delay(fn) {
          return setTimeout(fn, 0);
        };

        // Array.find/findIndex() are not supported on IE; this replicates enough
        //  of Array.findIndex() for our needs
        var findIndex = function findIndex(arr, fn) {
          var idx = -1;
          arr.every(function (value, i) {
            if (fn(value)) {
              idx = i;
              return false; // break
            }

            return true; // next
          });

          return idx;
        };

        /**
         * Get an option's value when it could be a plain value, or a handler that provides
         *  the value.
         * @param {*} value Option's value to check.
         * @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
         * @returns {*} The `value`, or the handler's returned value.
         */
        var valueOrHandler = function valueOrHandler(value) {
          for (
            var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
            _key < _len;
            _key++
          ) {
            params[_key - 1] = arguments[_key];
          }
          return typeof value === 'function' ? value.apply(void 0, params) : value;
        };
        var getActualTarget = function getActualTarget(event) {
          // NOTE: If the trap is _inside_ a shadow DOM, event.target will always be the
          //  shadow host. However, event.target.composedPath() will be an array of
          //  nodes "clicked" from inner-most (the actual element inside the shadow) to
          //  outer-most (the host HTML document). If we have access to composedPath(),
          //  then use its first element; otherwise, fall back to event.target (and
          //  this only works for an _open_ shadow DOM; otherwise,
          //  composedPath()[0] === event.target always).
          return event.target.shadowRoot && typeof event.composedPath === 'function'
            ? event.composedPath()[0]
            : event.target;
        };

        // NOTE: this must be _outside_ `createFocusTrap()` to make sure all traps in this
        //  current instance use the same stack if `userOptions.trapStack` isn't specified
        var internalTrapStack = [];
        var createFocusTrap = function createFocusTrap(elements, userOptions) {
          // SSR: a live trap shouldn't be created in this type of environment so this
          //  should be safe code to execute if the `document` option isn't specified
          var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
          var trapStack =
            (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
          var config = _objectSpread2(
            {
              returnFocusOnDeactivate: true,
              escapeDeactivates: true,
              delayInitialFocus: true,
              isKeyForward: isKeyForward,
              isKeyBackward: isKeyBackward,
            },
            userOptions,
          );
          var state = {
            // containers given to createFocusTrap()
            // @type {Array<HTMLElement>}
            containers: [],
            // list of objects identifying tabbable nodes in `containers` in the trap
            // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
            //  is active, but the trap should never get to a state where there isn't at least one group
            //  with at least one tabbable node in it (that would lead to an error condition that would
            //  result in an error being thrown)
            // @type {Array<{
            //   container: HTMLElement,
            //   tabbableNodes: Array<HTMLElement>, // empty if none
            //   focusableNodes: Array<HTMLElement>, // empty if none
            //   posTabIndexesFound: boolean,
            //   firstTabbableNode: HTMLElement|undefined,
            //   lastTabbableNode: HTMLElement|undefined,
            //   firstDomTabbableNode: HTMLElement|undefined,
            //   lastDomTabbableNode: HTMLElement|undefined,
            //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
            // }>}
            containerGroups: [],
            // same order/length as `containers` list

            // references to objects in `containerGroups`, but only those that actually have
            //  tabbable nodes in them
            // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
            //  the same length
            tabbableGroups: [],
            nodeFocusedBeforeActivation: null,
            mostRecentlyFocusedNode: null,
            active: false,
            paused: false,
            // timer ID for when delayInitialFocus is true and initial focus in this trap
            //  has been delayed during activation
            delayInitialFocusTimer: undefined,
            // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
            recentNavEvent: undefined,
          };
          var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

          /**
           * Gets a configuration option value.
           * @param {Object|undefined} configOverrideOptions If true, and option is defined in this set,
           *  value will be taken from this object. Otherwise, value will be taken from base configuration.
           * @param {string} optionName Name of the option whose value is sought.
           * @param {string|undefined} [configOptionName] Name of option to use __instead of__ `optionName`
           *  IIF `configOverrideOptions` is not defined. Otherwise, `optionName` is used.
           */
          var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
            return configOverrideOptions && configOverrideOptions[optionName] !== undefined
              ? configOverrideOptions[optionName]
              : config[configOptionName || optionName];
          };

          /**
           * Finds the index of the container that contains the element.
           * @param {HTMLElement} element
           * @param {Event} [event] If available, and `element` isn't directly found in any container,
           *  the event's composed path is used to see if includes any known trap containers in the
           *  case where the element is inside a Shadow DOM.
           * @returns {number} Index of the container in either `state.containers` or
           *  `state.containerGroups` (the order/length of these lists are the same); -1
           *  if the element isn't found.
           */
          var findContainerIndex = function findContainerIndex(element, event) {
            var composedPath =
              typeof (event === null || event === void 0 ? void 0 : event.composedPath) === 'function'
                ? event.composedPath()
                : undefined;
            // NOTE: search `containerGroups` because it's possible a group contains no tabbable
            //  nodes, but still contains focusable nodes (e.g. if they all have `tabindex=-1`)
            //  and we still need to find the element in there
            return state.containerGroups.findIndex(function (_ref) {
              var container = _ref.container,
                tabbableNodes = _ref.tabbableNodes;
              return (
                container.contains(element) || // fall back to explicit tabbable search which will take into consideration any
                //  web components if the `tabbableOptions.getShadowRoot` option was used for
                //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
                //  look inside web components even if open)
                (composedPath === null || composedPath === void 0 ? void 0 : composedPath.includes(container)) ||
                tabbableNodes.find(function (node) {
                  return node === element;
                })
              );
            });
          };

          /**
           * Gets the node for the given option, which is expected to be an option that
           *  can be either a DOM node, a string that is a selector to get a node, `false`
           *  (if a node is explicitly NOT given), or a function that returns any of these
           *  values.
           * @param {string} optionName
           * @returns {undefined | false | HTMLElement | SVGElement} Returns
           *  `undefined` if the option is not specified; `false` if the option
           *  resolved to `false` (node explicitly not given); otherwise, the resolved
           *  DOM node.
           * @throws {Error} If the option is set, not `false`, and is not, or does not
           *  resolve to a node.
           */
          var getNodeForOption = function getNodeForOption(optionName) {
            var optionValue = config[optionName];
            if (typeof optionValue === 'function') {
              for (
                var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
                _key2 < _len2;
                _key2++
              ) {
                params[_key2 - 1] = arguments[_key2];
              }
              optionValue = optionValue.apply(void 0, params);
            }
            if (optionValue === true) {
              optionValue = undefined; // use default value
            }

            if (!optionValue) {
              if (optionValue === undefined || optionValue === false) {
                return optionValue;
              }
              // else, empty string (invalid), null (invalid), 0 (invalid)

              throw new Error('`'.concat(optionName, '` was specified but was not a node, or did not return a node'));
            }
            var node = optionValue; // could be HTMLElement, SVGElement, or non-empty string at this point

            if (typeof optionValue === 'string') {
              node = doc.querySelector(optionValue); // resolve to node, or null if fails
              if (!node) {
                throw new Error('`'.concat(optionName, '` as selector refers to no known node'));
              }
            }
            return node;
          };
          var getInitialFocusNode = function getInitialFocusNode() {
            var node = getNodeForOption('initialFocus');

            // false explicitly indicates we want no initialFocus at all
            if (node === false) {
              return false;
            }
            if (
              node === undefined ||
              !(0, tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(node, config.tabbableOptions)
            ) {
              // option not specified nor focusable: use fallback options
              if (findContainerIndex(doc.activeElement) >= 0) {
                node = doc.activeElement;
              } else {
                var firstTabbableGroup = state.tabbableGroups[0];
                var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;

                // NOTE: `fallbackFocus` option function cannot return `false` (not supported)
                node = firstTabbableNode || getNodeForOption('fallbackFocus');
              }
            }
            if (!node) {
              throw new Error('Your focus-trap needs to have at least one focusable element');
            }
            return node;
          };
          var updateTabbableNodes = function updateTabbableNodes() {
            state.containerGroups = state.containers.map(function (container) {
              var tabbableNodes = (0, tabbable__WEBPACK_IMPORTED_MODULE_0__.tabbable)(
                container,
                config.tabbableOptions,
              );

              // NOTE: if we have tabbable nodes, we must have focusable nodes; focusable nodes
              //  are a superset of tabbable nodes since nodes with negative `tabindex` attributes
              //  are focusable but not tabbable
              var focusableNodes = (0, tabbable__WEBPACK_IMPORTED_MODULE_0__.focusable)(
                container,
                config.tabbableOptions,
              );
              var firstTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[0] : undefined;
              var lastTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : undefined;
              var firstDomTabbableNode = focusableNodes.find(function (node) {
                return (0, tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(node);
              });
              var lastDomTabbableNode = focusableNodes
                .slice()
                .reverse()
                .find(function (node) {
                  return (0, tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(node);
                });
              var posTabIndexesFound = !!tabbableNodes.find(function (node) {
                return (0, tabbable__WEBPACK_IMPORTED_MODULE_0__.getTabIndex)(node) > 0;
              });
              return {
                container: container,
                tabbableNodes: tabbableNodes,
                focusableNodes: focusableNodes,
                /** True if at least one node with positive `tabindex` was found in this container. */
                posTabIndexesFound: posTabIndexesFound,
                /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
                firstTabbableNode: firstTabbableNode,
                /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
                lastTabbableNode: lastTabbableNode,
                // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
                //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
                //  because that API doesn't work with Shadow DOM as well as it should (@see
                //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
                //  to address an edge case related to positive tabindex support, this seems like a much easier,
                //  "close enough most of the time" alternative for positive tabindexes which should generally
                //  be avoided anyway...
                /** First tabbable node in container, __DOM__ order; `undefined` if none. */
                firstDomTabbableNode: firstDomTabbableNode,
                /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
                lastDomTabbableNode: lastDomTabbableNode,
                /**
                 * Finds the __tabbable__ node that follows the given node in the specified direction,
                 *  in this container, if any.
                 * @param {HTMLElement} node
                 * @param {boolean} [forward] True if going in forward tab order; false if going
                 *  in reverse.
                 * @returns {HTMLElement|undefined} The next tabbable node, if any.
                 */
                nextTabbableNode: function nextTabbableNode(node) {
                  var forward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                  var nodeIdx = tabbableNodes.indexOf(node);
                  if (nodeIdx < 0) {
                    // either not tabbable nor focusable, or was focused but not tabbable (negative tabindex):
                    //  since `node` should at least have been focusable, we assume that's the case and mimic
                    //  what browsers do, which is set focus to the next node in __document position order__,
                    //  regardless of positive tabindexes, if any -- and for reasons explained in the NOTE
                    //  above related to `firstDomTabbable` and `lastDomTabbable` properties, we fall back to
                    //  basic DOM order
                    if (forward) {
                      return focusableNodes.slice(focusableNodes.indexOf(node) + 1).find(function (el) {
                        return (0, tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(el);
                      });
                    }
                    return focusableNodes
                      .slice(0, focusableNodes.indexOf(node))
                      .reverse()
                      .find(function (el) {
                        return (0, tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(el);
                      });
                  }
                  return tabbableNodes[nodeIdx + (forward ? 1 : -1)];
                },
              };
            });
            state.tabbableGroups = state.containerGroups.filter(function (group) {
              return group.tabbableNodes.length > 0;
            });

            // throw if no groups have tabbable nodes and we don't have a fallback focus node either
            if (
              state.tabbableGroups.length <= 0 &&
              !getNodeForOption('fallbackFocus') // returning false not supported for this option
            ) {
              throw new Error(
                'Your focus-trap must have at least one container with at least one tabbable node in it at all times',
              );
            }

            // NOTE: Positive tabindexes are only properly supported in single-container traps because
            //  doing it across multiple containers where tabindexes could be all over the place
            //  would require Tabbable to support multiple containers, would require additional
            //  specialized Shadow DOM support, and would require Tabbable's multi-container support
            //  to look at those containers in document position order rather than user-provided
            //  order (as they are treated in Focus-trap, for legacy reasons). See discussion on
            //  https://github.com/focus-trap/focus-trap/issues/375 for more details.
            if (
              state.containerGroups.find(function (g) {
                return g.posTabIndexesFound;
              }) &&
              state.containerGroups.length > 1
            ) {
              throw new Error(
                "At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.",
              );
            }
          };
          var tryFocus = function tryFocus(node) {
            if (node === false) {
              return;
            }
            if (node === doc.activeElement) {
              return;
            }
            if (!node || !node.focus) {
              tryFocus(getInitialFocusNode());
              return;
            }
            node.focus({
              preventScroll: !!config.preventScroll,
            });
            // NOTE: focus() API does not trigger focusIn event so set MRU node manually
            state.mostRecentlyFocusedNode = node;
            if (isSelectableInput(node)) {
              node.select();
            }
          };
          var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
            var node = getNodeForOption('setReturnFocus', previousActiveElement);
            return node ? node : node === false ? false : previousActiveElement;
          };

          /**
           * Finds the next node (in either direction) where focus should move according to a
           *  keyboard focus-in event.
           * @param {Object} params
           * @param {Node} [params.target] Known target __from which__ to navigate, if any.
           * @param {KeyboardEvent|FocusEvent} [params.event] Event to use if `target` isn't known (event
           *  will be used to determine the `target`). Ignored if `target` is specified.
           * @param {boolean} [params.isBackward] True if focus should move backward.
           * @returns {Node|undefined} The next node, or `undefined` if a next node couldn't be
           *  determined given the current state of the trap.
           */
          var findNextNavNode = function findNextNavNode(_ref2) {
            var target = _ref2.target,
              event = _ref2.event,
              _ref2$isBackward = _ref2.isBackward,
              isBackward = _ref2$isBackward === void 0 ? false : _ref2$isBackward;
            target = target || getActualTarget(event);
            updateTabbableNodes();
            var destinationNode = null;
            if (state.tabbableGroups.length > 0) {
              // make sure the target is actually contained in a group
              // NOTE: the target may also be the container itself if it's focusable
              //  with tabIndex='-1' and was given initial focus
              var containerIndex = findContainerIndex(target, event);
              var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : undefined;
              if (containerIndex < 0) {
                // target not found in any group: quite possible focus has escaped the trap,
                //  so bring it back into...
                if (isBackward) {
                  // ...the last node in the last group
                  destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
                } else {
                  // ...the first node in the first group
                  destinationNode = state.tabbableGroups[0].firstTabbableNode;
                }
              } else if (isBackward) {
                // REVERSE

                // is the target the first tabbable node in a group?
                var startOfGroupIndex = findIndex(state.tabbableGroups, function (_ref3) {
                  var firstTabbableNode = _ref3.firstTabbableNode;
                  return target === firstTabbableNode;
                });
                if (
                  startOfGroupIndex < 0 &&
                  (containerGroup.container === target ||
                    ((0, tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(target, config.tabbableOptions) &&
                      !(0, tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(target, config.tabbableOptions) &&
                      !containerGroup.nextTabbableNode(target, false)))
                ) {
                  // an exception case where the target is either the container itself, or
                  //  a non-tabbable node that was given focus (i.e. tabindex is negative
                  //  and user clicked on it or node was programmatically given focus)
                  //  and is not followed by any other tabbable node, in which
                  //  case, we should handle shift+tab as if focus were on the container's
                  //  first tabbable node, and go to the last tabbable node of the LAST group
                  startOfGroupIndex = containerIndex;
                }
                if (startOfGroupIndex >= 0) {
                  // YES: then shift+tab should go to the last tabbable node in the
                  //  previous group (and wrap around to the last tabbable node of
                  //  the LAST group if it's the first tabbable node of the FIRST group)
                  var destinationGroupIndex =
                    startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
                  var destinationGroup = state.tabbableGroups[destinationGroupIndex];
                  destinationNode =
                    (0, tabbable__WEBPACK_IMPORTED_MODULE_0__.getTabIndex)(target) >= 0
                      ? destinationGroup.lastTabbableNode
                      : destinationGroup.lastDomTabbableNode;
                } else if (!isTabEvent(event)) {
                  // user must have customized the nav keys so we have to move focus manually _within_
                  //  the active group: do this based on the order determined by tabbable()
                  destinationNode = containerGroup.nextTabbableNode(target, false);
                }
              } else {
                // FORWARD

                // is the target the last tabbable node in a group?
                var lastOfGroupIndex = findIndex(state.tabbableGroups, function (_ref4) {
                  var lastTabbableNode = _ref4.lastTabbableNode;
                  return target === lastTabbableNode;
                });
                if (
                  lastOfGroupIndex < 0 &&
                  (containerGroup.container === target ||
                    ((0, tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(target, config.tabbableOptions) &&
                      !(0, tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(target, config.tabbableOptions) &&
                      !containerGroup.nextTabbableNode(target)))
                ) {
                  // an exception case where the target is the container itself, or
                  //  a non-tabbable node that was given focus (i.e. tabindex is negative
                  //  and user clicked on it or node was programmatically given focus)
                  //  and is not followed by any other tabbable node, in which
                  //  case, we should handle tab as if focus were on the container's
                  //  last tabbable node, and go to the first tabbable node of the FIRST group
                  lastOfGroupIndex = containerIndex;
                }
                if (lastOfGroupIndex >= 0) {
                  // YES: then tab should go to the first tabbable node in the next
                  //  group (and wrap around to the first tabbable node of the FIRST
                  //  group if it's the last tabbable node of the LAST group)
                  var _destinationGroupIndex =
                    lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
                  var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
                  destinationNode =
                    (0, tabbable__WEBPACK_IMPORTED_MODULE_0__.getTabIndex)(target) >= 0
                      ? _destinationGroup.firstTabbableNode
                      : _destinationGroup.firstDomTabbableNode;
                } else if (!isTabEvent(event)) {
                  // user must have customized the nav keys so we have to move focus manually _within_
                  //  the active group: do this based on the order determined by tabbable()
                  destinationNode = containerGroup.nextTabbableNode(target);
                }
              }
            } else {
              // no groups available
              // NOTE: the fallbackFocus option does not support returning false to opt-out
              destinationNode = getNodeForOption('fallbackFocus');
            }
            return destinationNode;
          };

          // This needs to be done on mousedown and touchstart instead of click
          // so that it precedes the focus event.
          var checkPointerDown = function checkPointerDown(e) {
            var target = getActualTarget(e);
            if (findContainerIndex(target, e) >= 0) {
              // allow the click since it ocurred inside the trap
              return;
            }
            if (valueOrHandler(config.clickOutsideDeactivates, e)) {
              // immediately deactivate the trap
              trap.deactivate({
                // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
                //  which will result in the outside click setting focus to the node
                //  that was clicked (and if not focusable, to "nothing"); by setting
                //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
                //  on activation (or the configured `setReturnFocus` node), whether the
                //  outside click was on a focusable node or not
                returnFocus: config.returnFocusOnDeactivate,
              });
              return;
            }

            // This is needed for mobile devices.
            // (If we'll only let `click` events through,
            // then on mobile they will be blocked anyways if `touchstart` is blocked.)
            if (valueOrHandler(config.allowOutsideClick, e)) {
              // allow the click outside the trap to take place
              return;
            }

            // otherwise, prevent the click
            e.preventDefault();
          };

          // In case focus escapes the trap for some strange reason, pull it back in.
          // NOTE: the focusIn event is NOT cancelable, so if focus escapes, it may cause unexpected
          //  scrolling if the node that got focused was out of view; there's nothing we can do to
          //  prevent that from happening by the time we discover that focus escaped
          var checkFocusIn = function checkFocusIn(event) {
            var target = getActualTarget(event);
            var targetContained = findContainerIndex(target, event) >= 0;

            // In Firefox when you Tab out of an iframe the Document is briefly focused.
            if (targetContained || target instanceof Document) {
              if (targetContained) {
                state.mostRecentlyFocusedNode = target;
              }
            } else {
              // escaped! pull it back in to where it just left
              event.stopImmediatePropagation();

              // focus will escape if the MRU node had a positive tab index and user tried to nav forward;
              //  it will also escape if the MRU node had a 0 tab index and user tried to nav backward
              //  toward a node with a positive tab index
              var nextNode; // next node to focus, if we find one
              var navAcrossContainers = true;
              if (state.mostRecentlyFocusedNode) {
                if ((0, tabbable__WEBPACK_IMPORTED_MODULE_0__.getTabIndex)(state.mostRecentlyFocusedNode) > 0) {
                  // MRU container index must be >=0 otherwise we wouldn't have it as an MRU node...
                  var mruContainerIdx = findContainerIndex(state.mostRecentlyFocusedNode);
                  // there MAY not be any tabbable nodes in the container if there are at least 2 containers
                  //  and the MRU node is focusable but not tabbable (focus-trap requires at least 1 container
                  //  with at least one tabbable node in order to function, so this could be the other container
                  //  with nothing tabbable in it)
                  var tabbableNodes = state.containerGroups[mruContainerIdx].tabbableNodes;
                  if (tabbableNodes.length > 0) {
                    // MRU tab index MAY not be found if the MRU node is focusable but not tabbable
                    var mruTabIdx = tabbableNodes.findIndex(function (node) {
                      return node === state.mostRecentlyFocusedNode;
                    });
                    if (mruTabIdx >= 0) {
                      if (config.isKeyForward(state.recentNavEvent)) {
                        if (mruTabIdx + 1 < tabbableNodes.length) {
                          nextNode = tabbableNodes[mruTabIdx + 1];
                          navAcrossContainers = false;
                        }
                        // else, don't wrap within the container as focus should move to next/previous
                        //  container
                      } else {
                        if (mruTabIdx - 1 >= 0) {
                          nextNode = tabbableNodes[mruTabIdx - 1];
                          navAcrossContainers = false;
                        }
                        // else, don't wrap within the container as focus should move to next/previous
                        //  container
                      }
                      // else, don't find in container order without considering direction too
                    }
                  }
                  // else, no tabbable nodes in that container (which means we must have at least one other
                  //  container with at least one tabbable node in it, otherwise focus-trap would've thrown
                  //  an error the last time updateTabbableNodes() was run): find next node among all known
                  //  containers
                } else {
                  // check to see if there's at least one tabbable node with a positive tab index inside
                  //  the trap because focus seems to escape when navigating backward from a tabbable node
                  //  with tabindex=0 when this is the case (instead of wrapping to the tabbable node with
                  //  the greatest positive tab index like it should)
                  if (
                    !state.containerGroups.some(function (g) {
                      return g.tabbableNodes.some(function (n) {
                        return (0, tabbable__WEBPACK_IMPORTED_MODULE_0__.getTabIndex)(n) > 0;
                      });
                    })
                  ) {
                    // no containers with tabbable nodes with positive tab indexes which means the focus
                    //  escaped for some other reason and we should just execute the fallback to the
                    //  MRU node or initial focus node, if any
                    navAcrossContainers = false;
                  }
                }
              } else {
                // no MRU node means we're likely in some initial condition when the trap has just
                //  been activated and initial focus hasn't been given yet, in which case we should
                //  fall through to trying to focus the initial focus node, which is what should
                //  happen below at this point in the logic
                navAcrossContainers = false;
              }
              if (navAcrossContainers) {
                nextNode = findNextNavNode({
                  // move FROM the MRU node, not event-related node (which will be the node that is
                  //  outside the trap causing the focus escape we're trying to fix)
                  target: state.mostRecentlyFocusedNode,
                  isBackward: config.isKeyBackward(state.recentNavEvent),
                });
              }
              if (nextNode) {
                tryFocus(nextNode);
              } else {
                tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
              }
            }
            state.recentNavEvent = undefined; // clear
          };

          // Hijack key nav events on the first and last focusable nodes of the trap,
          // in order to prevent focus from escaping. If it escapes for even a
          // moment it can end up scrolling the page and causing confusion so we
          // kind of need to capture the action at the keydown phase.
          var checkKeyNav = function checkKeyNav(event) {
            var isBackward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            state.recentNavEvent = event;
            var destinationNode = findNextNavNode({
              event: event,
              isBackward: isBackward,
            });
            if (destinationNode) {
              if (isTabEvent(event)) {
                // since tab natively moves focus, we wouldn't have a destination node unless we
                //  were on the edge of a container and had to move to the next/previous edge, in
                //  which case we want to prevent default to keep the browser from moving focus
                //  to where it normally would
                event.preventDefault();
              }
              tryFocus(destinationNode);
            }
            // else, let the browser take care of [shift+]tab and move the focus
          };

          var checkKey = function checkKey(event) {
            if (isEscapeEvent(event) && valueOrHandler(config.escapeDeactivates, event) !== false) {
              event.preventDefault();
              trap.deactivate();
              return;
            }
            if (config.isKeyForward(event) || config.isKeyBackward(event)) {
              checkKeyNav(event, config.isKeyBackward(event));
            }
          };
          var checkClick = function checkClick(e) {
            var target = getActualTarget(e);
            if (findContainerIndex(target, e) >= 0) {
              return;
            }
            if (valueOrHandler(config.clickOutsideDeactivates, e)) {
              return;
            }
            if (valueOrHandler(config.allowOutsideClick, e)) {
              return;
            }
            e.preventDefault();
            e.stopImmediatePropagation();
          };

          //
          // EVENT LISTENERS
          //

          var addListeners = function addListeners() {
            if (!state.active) {
              return;
            }

            // There can be only one listening focus trap at a time
            activeFocusTraps.activateTrap(trapStack, trap);

            // Delay ensures that the focused element doesn't capture the event
            // that caused the focus trap activation.
            state.delayInitialFocusTimer = config.delayInitialFocus
              ? delay(function () {
                  tryFocus(getInitialFocusNode());
                })
              : tryFocus(getInitialFocusNode());
            doc.addEventListener('focusin', checkFocusIn, true);
            doc.addEventListener('mousedown', checkPointerDown, {
              capture: true,
              passive: false,
            });
            doc.addEventListener('touchstart', checkPointerDown, {
              capture: true,
              passive: false,
            });
            doc.addEventListener('click', checkClick, {
              capture: true,
              passive: false,
            });
            doc.addEventListener('keydown', checkKey, {
              capture: true,
              passive: false,
            });
            return trap;
          };
          var removeListeners = function removeListeners() {
            if (!state.active) {
              return;
            }
            doc.removeEventListener('focusin', checkFocusIn, true);
            doc.removeEventListener('mousedown', checkPointerDown, true);
            doc.removeEventListener('touchstart', checkPointerDown, true);
            doc.removeEventListener('click', checkClick, true);
            doc.removeEventListener('keydown', checkKey, true);
            return trap;
          };

          //
          // MUTATION OBSERVER
          //

          var checkDomRemoval = function checkDomRemoval(mutations) {
            var isFocusedNodeRemoved = mutations.some(function (mutation) {
              var removedNodes = Array.from(mutation.removedNodes);
              return removedNodes.some(function (node) {
                return node === state.mostRecentlyFocusedNode;
              });
            });

            // If the currently focused is removed then browsers will move focus to the
            // <body> element. If this happens, try to move focus back into the trap.
            if (isFocusedNodeRemoved) {
              tryFocus(getInitialFocusNode());
            }
          };

          // Use MutationObserver - if supported - to detect if focused node is removed
          // from the DOM.
          var mutationObserver =
            typeof window !== 'undefined' && 'MutationObserver' in window
              ? new MutationObserver(checkDomRemoval)
              : undefined;
          var updateObservedNodes = function updateObservedNodes() {
            if (!mutationObserver) {
              return;
            }
            mutationObserver.disconnect();
            if (state.active && !state.paused) {
              state.containers.map(function (container) {
                mutationObserver.observe(container, {
                  subtree: true,
                  childList: true,
                });
              });
            }
          };

          //
          // TRAP DEFINITION
          //

          trap = {
            get active() {
              return state.active;
            },
            get paused() {
              return state.paused;
            },
            activate: function activate(activateOptions) {
              if (state.active) {
                return this;
              }
              var onActivate = getOption(activateOptions, 'onActivate');
              var onPostActivate = getOption(activateOptions, 'onPostActivate');
              var checkCanFocusTrap = getOption(activateOptions, 'checkCanFocusTrap');
              if (!checkCanFocusTrap) {
                updateTabbableNodes();
              }
              state.active = true;
              state.paused = false;
              state.nodeFocusedBeforeActivation = doc.activeElement;
              onActivate === null || onActivate === void 0 || onActivate();
              var finishActivation = function finishActivation() {
                if (checkCanFocusTrap) {
                  updateTabbableNodes();
                }
                addListeners();
                updateObservedNodes();
                onPostActivate === null || onPostActivate === void 0 || onPostActivate();
              };
              if (checkCanFocusTrap) {
                checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
                return this;
              }
              finishActivation();
              return this;
            },
            deactivate: function deactivate(deactivateOptions) {
              if (!state.active) {
                return this;
              }
              var options = _objectSpread2(
                {
                  onDeactivate: config.onDeactivate,
                  onPostDeactivate: config.onPostDeactivate,
                  checkCanReturnFocus: config.checkCanReturnFocus,
                },
                deactivateOptions,
              );
              clearTimeout(state.delayInitialFocusTimer); // noop if undefined
              state.delayInitialFocusTimer = undefined;
              removeListeners();
              state.active = false;
              state.paused = false;
              updateObservedNodes();
              activeFocusTraps.deactivateTrap(trapStack, trap);
              var onDeactivate = getOption(options, 'onDeactivate');
              var onPostDeactivate = getOption(options, 'onPostDeactivate');
              var checkCanReturnFocus = getOption(options, 'checkCanReturnFocus');
              var returnFocus = getOption(options, 'returnFocus', 'returnFocusOnDeactivate');
              onDeactivate === null || onDeactivate === void 0 || onDeactivate();
              var finishDeactivation = function finishDeactivation() {
                delay(function () {
                  if (returnFocus) {
                    tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
                  }
                  onPostDeactivate === null || onPostDeactivate === void 0 || onPostDeactivate();
                });
              };
              if (returnFocus && checkCanReturnFocus) {
                checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(
                  finishDeactivation,
                  finishDeactivation,
                );
                return this;
              }
              finishDeactivation();
              return this;
            },
            pause: function pause(pauseOptions) {
              if (state.paused || !state.active) {
                return this;
              }
              var onPause = getOption(pauseOptions, 'onPause');
              var onPostPause = getOption(pauseOptions, 'onPostPause');
              state.paused = true;
              onPause === null || onPause === void 0 || onPause();
              removeListeners();
              updateObservedNodes();
              onPostPause === null || onPostPause === void 0 || onPostPause();
              return this;
            },
            unpause: function unpause(unpauseOptions) {
              if (!state.paused || !state.active) {
                return this;
              }
              var onUnpause = getOption(unpauseOptions, 'onUnpause');
              var onPostUnpause = getOption(unpauseOptions, 'onPostUnpause');
              state.paused = false;
              onUnpause === null || onUnpause === void 0 || onUnpause();
              updateTabbableNodes();
              addListeners();
              updateObservedNodes();
              onPostUnpause === null || onPostUnpause === void 0 || onPostUnpause();
              return this;
            },
            updateContainerElements: function updateContainerElements(containerElements) {
              var elementsAsArray = [].concat(containerElements).filter(Boolean);
              state.containers = elementsAsArray.map(function (element) {
                return typeof element === 'string' ? doc.querySelector(element) : element;
              });
              if (state.active) {
                updateTabbableNodes();
              }
              updateObservedNodes();
              return this;
            },
          };

          // initialize container elements
          trap.updateContainerElements(elements);
          return trap;
        };

        //# sourceMappingURL=focus-trap.esm.js.map

        /***/
      },

    /***/ './node_modules/headroom.js/dist/headroom.js':
      /*!***************************************************!*\
  !*** ./node_modules/headroom.js/dist/headroom.js ***!
  \***************************************************/
      /***/ function (module) {
        /*!
         * headroom.js v0.12.0 - Give your page some headroom. Hide your header until you need it
         * Copyright (c) 2020 Nick Williams - http://wicky.nillia.ms/headroom.js
         * License: MIT
         */

        (function (global, factory) {
          true ? (module.exports = factory()) : 0;
        })(this, function () {
          'use strict';

          function isBrowser() {
            return typeof window !== 'undefined';
          }

          /**
           * Used to detect browser support for adding an event listener with options
           * Credit: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
           */
          function passiveEventsSupported() {
            var supported = false;

            try {
              var options = {
                // eslint-disable-next-line getter-return
                get passive() {
                  supported = true;
                },
              };
              window.addEventListener('test', options, options);
              window.removeEventListener('test', options, options);
            } catch (err) {
              supported = false;
            }

            return supported;
          }

          function isSupported() {
            return !!(
              isBrowser() &&
              function () {}.bind &&
              'classList' in document.documentElement &&
              Object.assign &&
              Object.keys &&
              requestAnimationFrame
            );
          }

          function isDocument(obj) {
            return obj.nodeType === 9; // Node.DOCUMENT_NODE === 9
          }

          function isWindow(obj) {
            // `obj === window` or `obj instanceof Window` is not sufficient,
            // as the obj may be the window of an iframe.
            return obj && obj.document && isDocument(obj.document);
          }

          function windowScroller(win) {
            var doc = win.document;
            var body = doc.body;
            var html = doc.documentElement;

            return {
              /**
               * @see http://james.padolsey.com/javascript/get-document-height-cross-browser/
               * @return {Number} the scroll height of the document in pixels
               */
              scrollHeight: function () {
                return Math.max(
                  body.scrollHeight,
                  html.scrollHeight,
                  body.offsetHeight,
                  html.offsetHeight,
                  body.clientHeight,
                  html.clientHeight,
                );
              },

              /**
               * @see http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
               * @return {Number} the height of the viewport in pixels
               */
              height: function () {
                return win.innerHeight || html.clientHeight || body.clientHeight;
              },

              /**
               * Gets the Y scroll position
               * @return {Number} pixels the page has scrolled along the Y-axis
               */
              scrollY: function () {
                if (win.pageYOffset !== undefined) {
                  return win.pageYOffset;
                }

                return (html || body.parentNode || body).scrollTop;
              },
            };
          }

          function elementScroller(element) {
            return {
              /**
               * @return {Number} the scroll height of the element in pixels
               */
              scrollHeight: function () {
                return Math.max(element.scrollHeight, element.offsetHeight, element.clientHeight);
              },

              /**
               * @return {Number} the height of the element in pixels
               */
              height: function () {
                return Math.max(element.offsetHeight, element.clientHeight);
              },

              /**
               * Gets the Y scroll position
               * @return {Number} pixels the element has scrolled along the Y-axis
               */
              scrollY: function () {
                return element.scrollTop;
              },
            };
          }

          function createScroller(element) {
            return isWindow(element) ? windowScroller(element) : elementScroller(element);
          }

          /**
           * @param element EventTarget
           */
          function trackScroll(element, options, callback) {
            var isPassiveSupported = passiveEventsSupported();
            var rafId;
            var scrolled = false;
            var scroller = createScroller(element);
            var lastScrollY = scroller.scrollY();
            var details = {};

            function update() {
              var scrollY = Math.round(scroller.scrollY());
              var height = scroller.height();
              var scrollHeight = scroller.scrollHeight();

              // reuse object for less memory churn
              details.scrollY = scrollY;
              details.lastScrollY = lastScrollY;
              details.direction = scrollY > lastScrollY ? 'down' : 'up';
              details.distance = Math.abs(scrollY - lastScrollY);
              details.isOutOfBounds = scrollY < 0 || scrollY + height > scrollHeight;
              details.top = scrollY <= options.offset[details.direction];
              details.bottom = scrollY + height >= scrollHeight;
              details.toleranceExceeded = details.distance > options.tolerance[details.direction];

              callback(details);

              lastScrollY = scrollY;
              scrolled = false;
            }

            function handleScroll() {
              if (!scrolled) {
                scrolled = true;
                rafId = requestAnimationFrame(update);
              }
            }

            var eventOptions = isPassiveSupported ? { passive: true, capture: false } : false;

            element.addEventListener('scroll', handleScroll, eventOptions);
            update();

            return {
              destroy: function () {
                cancelAnimationFrame(rafId);
                element.removeEventListener('scroll', handleScroll, eventOptions);
              },
            };
          }

          function normalizeUpDown(t) {
            return t === Object(t) ? t : { down: t, up: t };
          }

          /**
           * UI enhancement for fixed headers.
           * Hides header when scrolling down
           * Shows header when scrolling up
           * @constructor
           * @param {DOMElement} elem the header element
           * @param {Object} options options for the widget
           */
          function Headroom(elem, options) {
            options = options || {};
            Object.assign(this, Headroom.options, options);
            this.classes = Object.assign({}, Headroom.options.classes, options.classes);

            this.elem = elem;
            this.tolerance = normalizeUpDown(this.tolerance);
            this.offset = normalizeUpDown(this.offset);
            this.initialised = false;
            this.frozen = false;
          }
          Headroom.prototype = {
            constructor: Headroom,

            /**
             * Start listening to scrolling
             * @public
             */
            init: function () {
              if (Headroom.cutsTheMustard && !this.initialised) {
                this.addClass('initial');
                this.initialised = true;

                // defer event registration to handle browser
                // potentially restoring previous scroll position
                setTimeout(
                  function (self) {
                    self.scrollTracker = trackScroll(
                      self.scroller,
                      { offset: self.offset, tolerance: self.tolerance },
                      self.update.bind(self),
                    );
                  },
                  100,
                  this,
                );
              }

              return this;
            },

            /**
             * Destroy the widget, clearing up after itself
             * @public
             */
            destroy: function () {
              this.initialised = false;
              Object.keys(this.classes).forEach(this.removeClass, this);
              this.scrollTracker.destroy();
            },

            /**
             * Unpin the element
             * @public
             */
            unpin: function () {
              if (this.hasClass('pinned') || !this.hasClass('unpinned')) {
                this.addClass('unpinned');
                this.removeClass('pinned');

                if (this.onUnpin) {
                  this.onUnpin.call(this);
                }
              }
            },

            /**
             * Pin the element
             * @public
             */
            pin: function () {
              if (this.hasClass('unpinned')) {
                this.addClass('pinned');
                this.removeClass('unpinned');

                if (this.onPin) {
                  this.onPin.call(this);
                }
              }
            },

            /**
             * Freezes the current state of the widget
             * @public
             */
            freeze: function () {
              this.frozen = true;
              this.addClass('frozen');
            },

            /**
             * Re-enables the default behaviour of the widget
             * @public
             */
            unfreeze: function () {
              this.frozen = false;
              this.removeClass('frozen');
            },

            top: function () {
              if (!this.hasClass('top')) {
                this.addClass('top');
                this.removeClass('notTop');

                if (this.onTop) {
                  this.onTop.call(this);
                }
              }
            },

            notTop: function () {
              if (!this.hasClass('notTop')) {
                this.addClass('notTop');
                this.removeClass('top');

                if (this.onNotTop) {
                  this.onNotTop.call(this);
                }
              }
            },

            bottom: function () {
              if (!this.hasClass('bottom')) {
                this.addClass('bottom');
                this.removeClass('notBottom');

                if (this.onBottom) {
                  this.onBottom.call(this);
                }
              }
            },

            notBottom: function () {
              if (!this.hasClass('notBottom')) {
                this.addClass('notBottom');
                this.removeClass('bottom');

                if (this.onNotBottom) {
                  this.onNotBottom.call(this);
                }
              }
            },

            shouldUnpin: function (details) {
              var scrollingDown = details.direction === 'down';

              return scrollingDown && !details.top && details.toleranceExceeded;
            },

            shouldPin: function (details) {
              var scrollingUp = details.direction === 'up';

              return (scrollingUp && details.toleranceExceeded) || details.top;
            },

            addClass: function (className) {
              this.elem.classList.add.apply(this.elem.classList, this.classes[className].split(' '));
            },

            removeClass: function (className) {
              this.elem.classList.remove.apply(this.elem.classList, this.classes[className].split(' '));
            },

            hasClass: function (className) {
              return this.classes[className].split(' ').every(function (cls) {
                return this.classList.contains(cls);
              }, this.elem);
            },

            update: function (details) {
              if (details.isOutOfBounds) {
                // Ignore bouncy scrolling in OSX
                return;
              }

              if (this.frozen === true) {
                return;
              }

              if (details.top) {
                this.top();
              } else {
                this.notTop();
              }

              if (details.bottom) {
                this.bottom();
              } else {
                this.notBottom();
              }

              if (this.shouldUnpin(details)) {
                this.unpin();
              } else if (this.shouldPin(details)) {
                this.pin();
              }
            },
          };

          /**
           * Default options
           * @type {Object}
           */
          Headroom.options = {
            tolerance: {
              up: 0,
              down: 0,
            },
            offset: 0,
            scroller: isBrowser() ? window : null,
            classes: {
              frozen: 'headroom--frozen',
              pinned: 'headroom--pinned',
              unpinned: 'headroom--unpinned',
              top: 'headroom--top',
              notTop: 'headroom--not-top',
              bottom: 'headroom--bottom',
              notBottom: 'headroom--not-bottom',
              initial: 'headroom',
            },
          };

          Headroom.cutsTheMustard = isSupported();

          return Headroom;
        });

        /***/
      },

    /***/ './node_modules/popper.js/dist/esm/popper.js':
      /*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
      /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /**!
         * @fileOverview Kickass library to create and place poppers near their reference elements.
         * @version 1.16.1
         * @license
         * Copyright (c) 2016 Federico Zivolo and contributors
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in all
         * copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
         * SOFTWARE.
         */
        var isBrowser =
          typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

        var timeoutDuration = (function () {
          var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
          for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
            if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
              return 1;
            }
          }
          return 0;
        })();

        function microtaskDebounce(fn) {
          var called = false;
          return function () {
            if (called) {
              return;
            }
            called = true;
            window.Promise.resolve().then(function () {
              called = false;
              fn();
            });
          };
        }

        function taskDebounce(fn) {
          var scheduled = false;
          return function () {
            if (!scheduled) {
              scheduled = true;
              setTimeout(function () {
                scheduled = false;
                fn();
              }, timeoutDuration);
            }
          };
        }

        var supportsMicroTasks = isBrowser && window.Promise;

        /**
         * Create a debounced version of a method, that's asynchronously deferred
         * but called in the minimum time possible.
         *
         * @method
         * @memberof Popper.Utils
         * @argument {Function} fn
         * @returns {Function}
         */
        var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

        /**
         * Check if the given variable is a function
         * @method
         * @memberof Popper.Utils
         * @argument {Any} functionToCheck - variable to check
         * @returns {Boolean} answer to: is a function?
         */
        function isFunction(functionToCheck) {
          var getType = {};
          return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
        }

        /**
         * Get CSS computed property of the given element
         * @method
         * @memberof Popper.Utils
         * @argument {Eement} element
         * @argument {String} property
         */
        function getStyleComputedProperty(element, property) {
          if (element.nodeType !== 1) {
            return [];
          }
          // NOTE: 1 DOM access here
          var window = element.ownerDocument.defaultView;
          var css = window.getComputedStyle(element, null);
          return property ? css[property] : css;
        }

        /**
         * Returns the parentNode or the host of the element
         * @method
         * @memberof Popper.Utils
         * @argument {Element} element
         * @returns {Element} parent
         */
        function getParentNode(element) {
          if (element.nodeName === 'HTML') {
            return element;
          }
          return element.parentNode || element.host;
        }

        /**
         * Returns the scrolling parent of the given element
         * @method
         * @memberof Popper.Utils
         * @argument {Element} element
         * @returns {Element} scroll parent
         */
        function getScrollParent(element) {
          // Return body, `getScroll` will take care to get the correct `scrollTop` from it
          if (!element) {
            return document.body;
          }

          switch (element.nodeName) {
            case 'HTML':
            case 'BODY':
              return element.ownerDocument.body;
            case '#document':
              return element.body;
          }

          // Firefox want us to check `-x` and `-y` variations as well

          var _getStyleComputedProp = getStyleComputedProperty(element),
            overflow = _getStyleComputedProp.overflow,
            overflowX = _getStyleComputedProp.overflowX,
            overflowY = _getStyleComputedProp.overflowY;

          if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
            return element;
          }

          return getScrollParent(getParentNode(element));
        }

        /**
         * Returns the reference node of the reference object, or the reference object itself.
         * @method
         * @memberof Popper.Utils
         * @param {Element|Object} reference - the reference element (the popper will be relative to this)
         * @returns {Element} parent
         */
        function getReferenceNode(reference) {
          return reference && reference.referenceNode ? reference.referenceNode : reference;
        }

        var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
        var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

        /**
         * Determines if the browser is Internet Explorer
         * @method
         * @memberof Popper.Utils
         * @param {Number} version to check
         * @returns {Boolean} isIE
         */
        function isIE(version) {
          if (version === 11) {
            return isIE11;
          }
          if (version === 10) {
            return isIE10;
          }
          return isIE11 || isIE10;
        }

        /**
         * Returns the offset parent of the given element
         * @method
         * @memberof Popper.Utils
         * @argument {Element} element
         * @returns {Element} offset parent
         */
        function getOffsetParent(element) {
          if (!element) {
            return document.documentElement;
          }

          var noOffsetParent = isIE(10) ? document.body : null;

          // NOTE: 1 DOM access here
          var offsetParent = element.offsetParent || null;
          // Skip hidden elements which don't have an offsetParent
          while (offsetParent === noOffsetParent && element.nextElementSibling) {
            offsetParent = (element = element.nextElementSibling).offsetParent;
          }

          var nodeName = offsetParent && offsetParent.nodeName;

          if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
            return element ? element.ownerDocument.documentElement : document.documentElement;
          }

          // .offsetParent will return the closest TH, TD or TABLE in case
          // no offsetParent is present, I hate this job...
          if (
            ['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 &&
            getStyleComputedProperty(offsetParent, 'position') === 'static'
          ) {
            return getOffsetParent(offsetParent);
          }

          return offsetParent;
        }

        function isOffsetContainer(element) {
          var nodeName = element.nodeName;

          if (nodeName === 'BODY') {
            return false;
          }
          return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
        }

        /**
         * Finds the root node (document, shadowDOM root) of the given element
         * @method
         * @memberof Popper.Utils
         * @argument {Element} node
         * @returns {Element} root node
         */
        function getRoot(node) {
          if (node.parentNode !== null) {
            return getRoot(node.parentNode);
          }

          return node;
        }

        /**
         * Finds the offset parent common to the two provided nodes
         * @method
         * @memberof Popper.Utils
         * @argument {Element} element1
         * @argument {Element} element2
         * @returns {Element} common offset parent
         */
        function findCommonOffsetParent(element1, element2) {
          // This check is needed to avoid errors in case one of the elements isn't defined for any reason
          if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
            return document.documentElement;
          }

          // Here we make sure to give as "start" the element that comes first in the DOM
          var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
          var start = order ? element1 : element2;
          var end = order ? element2 : element1;

          // Get common ancestor container
          var range = document.createRange();
          range.setStart(start, 0);
          range.setEnd(end, 0);
          var commonAncestorContainer = range.commonAncestorContainer;

          // Both nodes are inside #document

          if ((element1 !== commonAncestorContainer && element2 !== commonAncestorContainer) || start.contains(end)) {
            if (isOffsetContainer(commonAncestorContainer)) {
              return commonAncestorContainer;
            }

            return getOffsetParent(commonAncestorContainer);
          }

          // one of the nodes is inside shadowDOM, find which one
          var element1root = getRoot(element1);
          if (element1root.host) {
            return findCommonOffsetParent(element1root.host, element2);
          } else {
            return findCommonOffsetParent(element1, getRoot(element2).host);
          }
        }

        /**
         * Gets the scroll value of the given element in the given side (top and left)
         * @method
         * @memberof Popper.Utils
         * @argument {Element} element
         * @argument {String} side `top` or `left`
         * @returns {number} amount of scrolled pixels
         */
        function getScroll(element) {
          var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

          var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
          var nodeName = element.nodeName;

          if (nodeName === 'BODY' || nodeName === 'HTML') {
            var html = element.ownerDocument.documentElement;
            var scrollingElement = element.ownerDocument.scrollingElement || html;
            return scrollingElement[upperSide];
          }

          return element[upperSide];
        }

        /*
         * Sum or subtract the element scroll values (left and top) from a given rect object
         * @method
         * @memberof Popper.Utils
         * @param {Object} rect - Rect object you want to change
         * @param {HTMLElement} element - The element from the function reads the scroll values
         * @param {Boolean} subtract - set to true if you want to subtract the scroll values
         * @return {Object} rect - The modifier rect object
         */
        function includeScroll(rect, element) {
          var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          var scrollTop = getScroll(element, 'top');
          var scrollLeft = getScroll(element, 'left');
          var modifier = subtract ? -1 : 1;
          rect.top += scrollTop * modifier;
          rect.bottom += scrollTop * modifier;
          rect.left += scrollLeft * modifier;
          rect.right += scrollLeft * modifier;
          return rect;
        }

        /*
         * Helper to detect borders of a given element
         * @method
         * @memberof Popper.Utils
         * @param {CSSStyleDeclaration} styles
         * Result of `getStyleComputedProperty` on the given element
         * @param {String} axis - `x` or `y`
         * @return {number} borders - The borders size of the given axis
         */

        function getBordersSize(styles, axis) {
          var sideA = axis === 'x' ? 'Left' : 'Top';
          var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

          return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
        }

        function getSize(axis, body, html, computedStyle) {
          return Math.max(
            body['offset' + axis],
            body['scroll' + axis],
            html['client' + axis],
            html['offset' + axis],
            html['scroll' + axis],
            isIE(10)
              ? parseInt(html['offset' + axis]) +
                  parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) +
                  parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')])
              : 0,
          );
        }

        function getWindowSizes(document) {
          var body = document.body;
          var html = document.documentElement;
          var computedStyle = isIE(10) && getComputedStyle(html);

          return {
            height: getSize('Height', body, html, computedStyle),
            width: getSize('Width', body, html, computedStyle),
          };
        }

        var classCallCheck = function (instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        };

        var createClass = (function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var defineProperty = function (obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }

          return obj;
        };

        var _extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];

              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }

            return target;
          };

        /**
         * Given element offsets, generate an output similar to getBoundingClientRect
         * @method
         * @memberof Popper.Utils
         * @argument {Object} offsets
         * @returns {Object} ClientRect like output
         */
        function getClientRect(offsets) {
          return _extends({}, offsets, {
            right: offsets.left + offsets.width,
            bottom: offsets.top + offsets.height,
          });
        }

        /**
         * Get bounding client rect of given element
         * @method
         * @memberof Popper.Utils
         * @param {HTMLElement} element
         * @return {Object} client rect
         */
        function getBoundingClientRect(element) {
          var rect = {};

          // IE10 10 FIX: Please, don't ask, the element isn't
          // considered in DOM in some circumstances...
          // This isn't reproducible in IE10 compatibility mode of IE11
          try {
            if (isIE(10)) {
              rect = element.getBoundingClientRect();
              var scrollTop = getScroll(element, 'top');
              var scrollLeft = getScroll(element, 'left');
              rect.top += scrollTop;
              rect.left += scrollLeft;
              rect.bottom += scrollTop;
              rect.right += scrollLeft;
            } else {
              rect = element.getBoundingClientRect();
            }
          } catch (e) {}

          var result = {
            left: rect.left,
            top: rect.top,
            width: rect.right - rect.left,
            height: rect.bottom - rect.top,
          };

          // subtract scrollbar size from sizes
          var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
          var width = sizes.width || element.clientWidth || result.width;
          var height = sizes.height || element.clientHeight || result.height;

          var horizScrollbar = element.offsetWidth - width;
          var vertScrollbar = element.offsetHeight - height;

          // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
          // we make this check conditional for performance reasons
          if (horizScrollbar || vertScrollbar) {
            var styles = getStyleComputedProperty(element);
            horizScrollbar -= getBordersSize(styles, 'x');
            vertScrollbar -= getBordersSize(styles, 'y');

            result.width -= horizScrollbar;
            result.height -= vertScrollbar;
          }

          return getClientRect(result);
        }

        function getOffsetRectRelativeToArbitraryNode(children, parent) {
          var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          var isIE10 = isIE(10);
          var isHTML = parent.nodeName === 'HTML';
          var childrenRect = getBoundingClientRect(children);
          var parentRect = getBoundingClientRect(parent);
          var scrollParent = getScrollParent(children);

          var styles = getStyleComputedProperty(parent);
          var borderTopWidth = parseFloat(styles.borderTopWidth);
          var borderLeftWidth = parseFloat(styles.borderLeftWidth);

          // In cases where the parent is fixed, we must ignore negative scroll in offset calc
          if (fixedPosition && isHTML) {
            parentRect.top = Math.max(parentRect.top, 0);
            parentRect.left = Math.max(parentRect.left, 0);
          }
          var offsets = getClientRect({
            top: childrenRect.top - parentRect.top - borderTopWidth,
            left: childrenRect.left - parentRect.left - borderLeftWidth,
            width: childrenRect.width,
            height: childrenRect.height,
          });
          offsets.marginTop = 0;
          offsets.marginLeft = 0;

          // Subtract margins of documentElement in case it's being used as parent
          // we do this only on HTML because it's the only element that behaves
          // differently when margins are applied to it. The margins are included in
          // the box of the documentElement, in the other cases not.
          if (!isIE10 && isHTML) {
            var marginTop = parseFloat(styles.marginTop);
            var marginLeft = parseFloat(styles.marginLeft);

            offsets.top -= borderTopWidth - marginTop;
            offsets.bottom -= borderTopWidth - marginTop;
            offsets.left -= borderLeftWidth - marginLeft;
            offsets.right -= borderLeftWidth - marginLeft;

            // Attach marginTop and marginLeft because in some circumstances we may need them
            offsets.marginTop = marginTop;
            offsets.marginLeft = marginLeft;
          }

          if (
            isIE10 && !fixedPosition
              ? parent.contains(scrollParent)
              : parent === scrollParent && scrollParent.nodeName !== 'BODY'
          ) {
            offsets = includeScroll(offsets, parent);
          }

          return offsets;
        }

        function getViewportOffsetRectRelativeToArtbitraryNode(element) {
          var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          var html = element.ownerDocument.documentElement;
          var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
          var width = Math.max(html.clientWidth, window.innerWidth || 0);
          var height = Math.max(html.clientHeight, window.innerHeight || 0);

          var scrollTop = !excludeScroll ? getScroll(html) : 0;
          var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

          var offset = {
            top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
            left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
            width: width,
            height: height,
          };

          return getClientRect(offset);
        }

        /**
         * Check if the given element is fixed or is inside a fixed parent
         * @method
         * @memberof Popper.Utils
         * @argument {Element} element
         * @argument {Element} customContainer
         * @returns {Boolean} answer to "isFixed?"
         */
        function isFixed(element) {
          var nodeName = element.nodeName;
          if (nodeName === 'BODY' || nodeName === 'HTML') {
            return false;
          }
          if (getStyleComputedProperty(element, 'position') === 'fixed') {
            return true;
          }
          var parentNode = getParentNode(element);
          if (!parentNode) {
            return false;
          }
          return isFixed(parentNode);
        }

        /**
         * Finds the first parent of an element that has a transformed property defined
         * @method
         * @memberof Popper.Utils
         * @argument {Element} element
         * @returns {Element} first transformed parent or documentElement
         */

        function getFixedPositionOffsetParent(element) {
          // This check is needed to avoid errors in case one of the elements isn't defined for any reason
          if (!element || !element.parentElement || isIE()) {
            return document.documentElement;
          }
          var el = element.parentElement;
          while (el && getStyleComputedProperty(el, 'transform') === 'none') {
            el = el.parentElement;
          }
          return el || document.documentElement;
        }

        /**
         * Computed the boundaries limits and return them
         * @method
         * @memberof Popper.Utils
         * @param {HTMLElement} popper
         * @param {HTMLElement} reference
         * @param {number} padding
         * @param {HTMLElement} boundariesElement - Element used to define the boundaries
         * @param {Boolean} fixedPosition - Is in fixed position mode
         * @returns {Object} Coordinates of the boundaries
         */
        function getBoundaries(popper, reference, padding, boundariesElement) {
          var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

          // NOTE: 1 DOM access here

          var boundaries = { top: 0, left: 0 };
          var offsetParent = fixedPosition
            ? getFixedPositionOffsetParent(popper)
            : findCommonOffsetParent(popper, getReferenceNode(reference));

          // Handle viewport case
          if (boundariesElement === 'viewport') {
            boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
          } else {
            // Handle other cases based on DOM element used as boundaries
            var boundariesNode = void 0;
            if (boundariesElement === 'scrollParent') {
              boundariesNode = getScrollParent(getParentNode(reference));
              if (boundariesNode.nodeName === 'BODY') {
                boundariesNode = popper.ownerDocument.documentElement;
              }
            } else if (boundariesElement === 'window') {
              boundariesNode = popper.ownerDocument.documentElement;
            } else {
              boundariesNode = boundariesElement;
            }

            var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

            // In case of HTML, we need a different computation
            if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
              var _getWindowSizes = getWindowSizes(popper.ownerDocument),
                height = _getWindowSizes.height,
                width = _getWindowSizes.width;

              boundaries.top += offsets.top - offsets.marginTop;
              boundaries.bottom = height + offsets.top;
              boundaries.left += offsets.left - offsets.marginLeft;
              boundaries.right = width + offsets.left;
            } else {
              // for all the other DOM elements, this one is good
              boundaries = offsets;
            }
          }

          // Add paddings
          padding = padding || 0;
          var isPaddingNumber = typeof padding === 'number';
          boundaries.left += isPaddingNumber ? padding : padding.left || 0;
          boundaries.top += isPaddingNumber ? padding : padding.top || 0;
          boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
          boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

          return boundaries;
        }

        function getArea(_ref) {
          var width = _ref.width,
            height = _ref.height;

          return width * height;
        }

        /**
         * Utility used to transform the `auto` placement to the placement with more
         * available space.
         * @method
         * @memberof Popper.Utils
         * @argument {Object} data - The data object generated by update method
         * @argument {Object} options - Modifiers configuration and options
         * @returns {Object} The data object, properly modified
         */
        function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
          var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

          if (placement.indexOf('auto') === -1) {
            return placement;
          }

          var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

          var rects = {
            top: {
              width: boundaries.width,
              height: refRect.top - boundaries.top,
            },
            right: {
              width: boundaries.right - refRect.right,
              height: boundaries.height,
            },
            bottom: {
              width: boundaries.width,
              height: boundaries.bottom - refRect.bottom,
            },
            left: {
              width: refRect.left - boundaries.left,
              height: boundaries.height,
            },
          };

          var sortedAreas = Object.keys(rects)
            .map(function (key) {
              return _extends(
                {
                  key: key,
                },
                rects[key],
                {
                  area: getArea(rects[key]),
                },
              );
            })
            .sort(function (a, b) {
              return b.area - a.area;
            });

          var filteredAreas = sortedAreas.filter(function (_ref2) {
            var width = _ref2.width,
              height = _ref2.height;
            return width >= popper.clientWidth && height >= popper.clientHeight;
          });

          var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

          var variation = placement.split('-')[1];

          return computedPlacement + (variation ? '-' + variation : '');
        }

        /**
         * Get offsets to the reference element
         * @method
         * @memberof Popper.Utils
         * @param {Object} state
         * @param {Element} popper - the popper element
         * @param {Element} reference - the reference element (the popper will be relative to this)
         * @param {Element} fixedPosition - is in fixed position mode
         * @returns {Object} An object containing the offsets which will be applied to the popper
         */
        function getReferenceOffsets(state, popper, reference) {
          var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

          var commonOffsetParent = fixedPosition
            ? getFixedPositionOffsetParent(popper)
            : findCommonOffsetParent(popper, getReferenceNode(reference));
          return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
        }

        /**
         * Get the outer sizes of the given element (offset size + margins)
         * @method
         * @memberof Popper.Utils
         * @argument {Element} element
         * @returns {Object} object containing width and height properties
         */
        function getOuterSizes(element) {
          var window = element.ownerDocument.defaultView;
          var styles = window.getComputedStyle(element);
          var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
          var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
          var result = {
            width: element.offsetWidth + y,
            height: element.offsetHeight + x,
          };
          return result;
        }

        /**
         * Get the opposite placement of the given one
         * @method
         * @memberof Popper.Utils
         * @argument {String} placement
         * @returns {String} flipped placement
         */
        function getOppositePlacement(placement) {
          var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
          return placement.replace(/left|right|bottom|top/g, function (matched) {
            return hash[matched];
          });
        }

        /**
         * Get offsets to the popper
         * @method
         * @memberof Popper.Utils
         * @param {Object} position - CSS position the Popper will get applied
         * @param {HTMLElement} popper - the popper element
         * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
         * @param {String} placement - one of the valid placement options
         * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
         */
        function getPopperOffsets(popper, referenceOffsets, placement) {
          placement = placement.split('-')[0];

          // Get popper node sizes
          var popperRect = getOuterSizes(popper);

          // Add position, width and height to our offsets object
          var popperOffsets = {
            width: popperRect.width,
            height: popperRect.height,
          };

          // depending by the popper placement we have to compute its offsets slightly differently
          var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
          var mainSide = isHoriz ? 'top' : 'left';
          var secondarySide = isHoriz ? 'left' : 'top';
          var measurement = isHoriz ? 'height' : 'width';
          var secondaryMeasurement = !isHoriz ? 'height' : 'width';

          popperOffsets[mainSide] =
            referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
          if (placement === secondarySide) {
            popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
          } else {
            popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
          }

          return popperOffsets;
        }

        /**
         * Mimics the `find` method of Array
         * @method
         * @memberof Popper.Utils
         * @argument {Array} arr
         * @argument prop
         * @argument value
         * @returns index or -1
         */
        function find(arr, check) {
          // use native find if supported
          if (Array.prototype.find) {
            return arr.find(check);
          }

          // use `filter` to obtain the same behavior of `find`
          return arr.filter(check)[0];
        }

        /**
         * Return the index of the matching object
         * @method
         * @memberof Popper.Utils
         * @argument {Array} arr
         * @argument prop
         * @argument value
         * @returns index or -1
         */
        function findIndex(arr, prop, value) {
          // use native findIndex if supported
          if (Array.prototype.findIndex) {
            return arr.findIndex(function (cur) {
              return cur[prop] === value;
            });
          }

          // use `find` + `indexOf` if `findIndex` isn't supported
          var match = find(arr, function (obj) {
            return obj[prop] === value;
          });
          return arr.indexOf(match);
        }

        /**
         * Loop trough the list of modifiers and run them in order,
         * each of them will then edit the data object.
         * @method
         * @memberof Popper.Utils
         * @param {dataObject} data
         * @param {Array} modifiers
         * @param {String} ends - Optional modifier name used as stopper
         * @returns {dataObject}
         */
        function runModifiers(modifiers, data, ends) {
          var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

          modifiersToRun.forEach(function (modifier) {
            if (modifier['function']) {
              // eslint-disable-line dot-notation
              console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            }
            var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
            if (modifier.enabled && isFunction(fn)) {
              // Add properties to offsets to make them a complete clientRect object
              // we do this before each modifier to make sure the previous one doesn't
              // mess with these values
              data.offsets.popper = getClientRect(data.offsets.popper);
              data.offsets.reference = getClientRect(data.offsets.reference);

              data = fn(data, modifier);
            }
          });

          return data;
        }

        /**
         * Updates the position of the popper, computing the new offsets and applying
         * the new style.<br />
         * Prefer `scheduleUpdate` over `update` because of performance reasons.
         * @method
         * @memberof Popper
         */
        function update() {
          // if popper is destroyed, don't perform any further update
          if (this.state.isDestroyed) {
            return;
          }

          var data = {
            instance: this,
            styles: {},
            arrowStyles: {},
            attributes: {},
            flipped: false,
            offsets: {},
          };

          // compute reference element offsets
          data.offsets.reference = getReferenceOffsets(
            this.state,
            this.popper,
            this.reference,
            this.options.positionFixed,
          );

          // compute auto placement, store placement inside the data object,
          // modifiers will be able to edit `placement` if needed
          // and refer to originalPlacement to know the original value
          data.placement = computeAutoPlacement(
            this.options.placement,
            data.offsets.reference,
            this.popper,
            this.reference,
            this.options.modifiers.flip.boundariesElement,
            this.options.modifiers.flip.padding,
          );

          // store the computed placement inside `originalPlacement`
          data.originalPlacement = data.placement;

          data.positionFixed = this.options.positionFixed;

          // compute the popper offsets
          data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

          data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

          // run the modifiers
          data = runModifiers(this.modifiers, data);

          // the first `update` will call `onCreate` callback
          // the other ones will call `onUpdate` callback
          if (!this.state.isCreated) {
            this.state.isCreated = true;
            this.options.onCreate(data);
          } else {
            this.options.onUpdate(data);
          }
        }

        /**
         * Helper used to know if the given modifier is enabled.
         * @method
         * @memberof Popper.Utils
         * @returns {Boolean}
         */
        function isModifierEnabled(modifiers, modifierName) {
          return modifiers.some(function (_ref) {
            var name = _ref.name,
              enabled = _ref.enabled;
            return enabled && name === modifierName;
          });
        }

        /**
         * Get the prefixed supported property name
         * @method
         * @memberof Popper.Utils
         * @argument {String} property (camelCase)
         * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
         */
        function getSupportedPropertyName(property) {
          var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
          var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

          for (var i = 0; i < prefixes.length; i++) {
            var prefix = prefixes[i];
            var toCheck = prefix ? '' + prefix + upperProp : property;
            if (typeof document.body.style[toCheck] !== 'undefined') {
              return toCheck;
            }
          }
          return null;
        }

        /**
         * Destroys the popper.
         * @method
         * @memberof Popper
         */
        function destroy() {
          this.state.isDestroyed = true;

          // touch DOM only if `applyStyle` modifier is enabled
          if (isModifierEnabled(this.modifiers, 'applyStyle')) {
            this.popper.removeAttribute('x-placement');
            this.popper.style.position = '';
            this.popper.style.top = '';
            this.popper.style.left = '';
            this.popper.style.right = '';
            this.popper.style.bottom = '';
            this.popper.style.willChange = '';
            this.popper.style[getSupportedPropertyName('transform')] = '';
          }

          this.disableEventListeners();

          // remove the popper if user explicitly asked for the deletion on destroy
          // do not use `remove` because IE11 doesn't support it
          if (this.options.removeOnDestroy) {
            this.popper.parentNode.removeChild(this.popper);
          }
          return this;
        }

        /**
         * Get the window associated with the element
         * @argument {Element} element
         * @returns {Window}
         */
        function getWindow(element) {
          var ownerDocument = element.ownerDocument;
          return ownerDocument ? ownerDocument.defaultView : window;
        }

        function attachToScrollParents(scrollParent, event, callback, scrollParents) {
          var isBody = scrollParent.nodeName === 'BODY';
          var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
          target.addEventListener(event, callback, { passive: true });

          if (!isBody) {
            attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
          }
          scrollParents.push(target);
        }

        /**
         * Setup needed event listeners used to update the popper position
         * @method
         * @memberof Popper.Utils
         * @private
         */
        function setupEventListeners(reference, options, state, updateBound) {
          // Resize event listener on window
          state.updateBound = updateBound;
          getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

          // Scroll event listener on scroll parents
          var scrollElement = getScrollParent(reference);
          attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
          state.scrollElement = scrollElement;
          state.eventsEnabled = true;

          return state;
        }

        /**
         * It will add resize/scroll events and start recalculating
         * position of the popper element when they are triggered.
         * @method
         * @memberof Popper
         */
        function enableEventListeners() {
          if (!this.state.eventsEnabled) {
            this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
          }
        }

        /**
         * Remove event listeners used to update the popper position
         * @method
         * @memberof Popper.Utils
         * @private
         */
        function removeEventListeners(reference, state) {
          // Remove resize event listener on window
          getWindow(reference).removeEventListener('resize', state.updateBound);

          // Remove scroll event listener on scroll parents
          state.scrollParents.forEach(function (target) {
            target.removeEventListener('scroll', state.updateBound);
          });

          // Reset state
          state.updateBound = null;
          state.scrollParents = [];
          state.scrollElement = null;
          state.eventsEnabled = false;
          return state;
        }

        /**
         * It will remove resize/scroll events and won't recalculate popper position
         * when they are triggered. It also won't trigger `onUpdate` callback anymore,
         * unless you call `update` method manually.
         * @method
         * @memberof Popper
         */
        function disableEventListeners() {
          if (this.state.eventsEnabled) {
            cancelAnimationFrame(this.scheduleUpdate);
            this.state = removeEventListeners(this.reference, this.state);
          }
        }

        /**
         * Tells if a given input is a number
         * @method
         * @memberof Popper.Utils
         * @param {*} input to check
         * @return {Boolean}
         */
        function isNumeric(n) {
          return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
        }

        /**
         * Set the style to the given popper
         * @method
         * @memberof Popper.Utils
         * @argument {Element} element - Element to apply the style to
         * @argument {Object} styles
         * Object with a list of properties and values which will be applied to the element
         */
        function setStyles(element, styles) {
          Object.keys(styles).forEach(function (prop) {
            var unit = '';
            // add unit if the value is numeric and is one of the following
            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
              unit = 'px';
            }
            element.style[prop] = styles[prop] + unit;
          });
        }

        /**
         * Set the attributes to the given popper
         * @method
         * @memberof Popper.Utils
         * @argument {Element} element - Element to apply the attributes to
         * @argument {Object} styles
         * Object with a list of properties and values which will be applied to the element
         */
        function setAttributes(element, attributes) {
          Object.keys(attributes).forEach(function (prop) {
            var value = attributes[prop];
            if (value !== false) {
              element.setAttribute(prop, attributes[prop]);
            } else {
              element.removeAttribute(prop);
            }
          });
        }

        /**
         * @function
         * @memberof Modifiers
         * @argument {Object} data - The data object generated by `update` method
         * @argument {Object} data.styles - List of style properties - values to apply to popper element
         * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
         * @argument {Object} options - Modifiers configuration and options
         * @returns {Object} The same data object
         */
        function applyStyle(data) {
          // any property present in `data.styles` will be applied to the popper,
          // in this way we can make the 3rd party modifiers add custom styles to it
          // Be aware, modifiers could override the properties defined in the previous
          // lines of this modifier!
          setStyles(data.instance.popper, data.styles);

          // any property present in `data.attributes` will be applied to the popper,
          // they will be set as HTML attributes of the element
          setAttributes(data.instance.popper, data.attributes);

          // if arrowElement is defined and arrowStyles has some properties
          if (data.arrowElement && Object.keys(data.arrowStyles).length) {
            setStyles(data.arrowElement, data.arrowStyles);
          }

          return data;
        }

        /**
         * Set the x-placement attribute before everything else because it could be used
         * to add margins to the popper margins needs to be calculated to get the
         * correct popper offsets.
         * @method
         * @memberof Popper.modifiers
         * @param {HTMLElement} reference - The reference element used to position the popper
         * @param {HTMLElement} popper - The HTML element used as popper
         * @param {Object} options - Popper.js options
         */
        function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
          // compute reference element offsets
          var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

          // compute auto placement, store placement inside the data object,
          // modifiers will be able to edit `placement` if needed
          // and refer to originalPlacement to know the original value
          var placement = computeAutoPlacement(
            options.placement,
            referenceOffsets,
            popper,
            reference,
            options.modifiers.flip.boundariesElement,
            options.modifiers.flip.padding,
          );

          popper.setAttribute('x-placement', placement);

          // Apply `position` to popper before anything else because
          // without the position applied we can't guarantee correct computations
          setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

          return options;
        }

        /**
         * @function
         * @memberof Popper.Utils
         * @argument {Object} data - The data object generated by `update` method
         * @argument {Boolean} shouldRound - If the offsets should be rounded at all
         * @returns {Object} The popper's position offsets rounded
         *
         * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
         * good as it can be within reason.
         * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
         *
         * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
         * as well on High DPI screens).
         *
         * Firefox prefers no rounding for positioning and does not have blurriness on
         * high DPI screens.
         *
         * Only horizontal placement and left/right values need to be considered.
         */
        function getRoundedOffsets(data, shouldRound) {
          var _data$offsets = data.offsets,
            popper = _data$offsets.popper,
            reference = _data$offsets.reference;
          var round = Math.round,
            floor = Math.floor;

          var noRound = function noRound(v) {
            return v;
          };

          var referenceWidth = round(reference.width);
          var popperWidth = round(popper.width);

          var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
          var isVariation = data.placement.indexOf('-') !== -1;
          var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
          var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

          var horizontalToInteger = !shouldRound
            ? noRound
            : isVertical || isVariation || sameWidthParity
            ? round
            : floor;
          var verticalToInteger = !shouldRound ? noRound : round;

          return {
            left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
            top: verticalToInteger(popper.top),
            bottom: verticalToInteger(popper.bottom),
            right: horizontalToInteger(popper.right),
          };
        }

        var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

        /**
         * @function
         * @memberof Modifiers
         * @argument {Object} data - The data object generated by `update` method
         * @argument {Object} options - Modifiers configuration and options
         * @returns {Object} The data object, properly modified
         */
        function computeStyle(data, options) {
          var x = options.x,
            y = options.y;
          var popper = data.offsets.popper;

          // Remove this legacy support in Popper.js v2

          var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
            return modifier.name === 'applyStyle';
          }).gpuAcceleration;
          if (legacyGpuAccelerationOption !== undefined) {
            console.warn(
              'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!',
            );
          }
          var gpuAcceleration =
            legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

          var offsetParent = getOffsetParent(data.instance.popper);
          var offsetParentRect = getBoundingClientRect(offsetParent);

          // Styles
          var styles = {
            position: popper.position,
          };

          var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

          var sideA = x === 'bottom' ? 'top' : 'bottom';
          var sideB = y === 'right' ? 'left' : 'right';

          // if gpuAcceleration is set to `true` and transform is supported,
          //  we use `translate3d` to apply the position to the popper we
          // automatically use the supported prefixed version if needed
          var prefixedProperty = getSupportedPropertyName('transform');

          // now, let's make a step back and look at this code closely (wtf?)
          // If the content of the popper grows once it's been positioned, it
          // may happen that the popper gets misplaced because of the new content
          // overflowing its reference element
          // To avoid this problem, we provide two options (x and y), which allow
          // the consumer to define the offset origin.
          // If we position a popper on top of a reference element, we can set
          // `x` to `top` to make the popper grow towards its top instead of
          // its bottom.
          var left = void 0,
            top = void 0;
          if (sideA === 'bottom') {
            // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
            // and not the bottom of the html element
            if (offsetParent.nodeName === 'HTML') {
              top = -offsetParent.clientHeight + offsets.bottom;
            } else {
              top = -offsetParentRect.height + offsets.bottom;
            }
          } else {
            top = offsets.top;
          }
          if (sideB === 'right') {
            if (offsetParent.nodeName === 'HTML') {
              left = -offsetParent.clientWidth + offsets.right;
            } else {
              left = -offsetParentRect.width + offsets.right;
            }
          } else {
            left = offsets.left;
          }
          if (gpuAcceleration && prefixedProperty) {
            styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
            styles[sideA] = 0;
            styles[sideB] = 0;
            styles.willChange = 'transform';
          } else {
            // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
            var invertTop = sideA === 'bottom' ? -1 : 1;
            var invertLeft = sideB === 'right' ? -1 : 1;
            styles[sideA] = top * invertTop;
            styles[sideB] = left * invertLeft;
            styles.willChange = sideA + ', ' + sideB;
          }

          // Attributes
          var attributes = {
            'x-placement': data.placement,
          };

          // Update `data` attributes, styles and arrowStyles
          data.attributes = _extends({}, attributes, data.attributes);
          data.styles = _extends({}, styles, data.styles);
          data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

          return data;
        }

        /**
         * Helper used to know if the given modifier depends from another one.<br />
         * It checks if the needed modifier is listed and enabled.
         * @method
         * @memberof Popper.Utils
         * @param {Array} modifiers - list of modifiers
         * @param {String} requestingName - name of requesting modifier
         * @param {String} requestedName - name of requested modifier
         * @returns {Boolean}
         */
        function isModifierRequired(modifiers, requestingName, requestedName) {
          var requesting = find(modifiers, function (_ref) {
            var name = _ref.name;
            return name === requestingName;
          });

          var isRequired =
            !!requesting &&
            modifiers.some(function (modifier) {
              return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
            });

          if (!isRequired) {
            var _requesting = '`' + requestingName + '`';
            var requested = '`' + requestedName + '`';
            console.warn(
              requested +
                ' modifier is required by ' +
                _requesting +
                ' modifier in order to work, be sure to include it before ' +
                _requesting +
                '!',
            );
          }
          return isRequired;
        }

        /**
         * @function
         * @memberof Modifiers
         * @argument {Object} data - The data object generated by update method
         * @argument {Object} options - Modifiers configuration and options
         * @returns {Object} The data object, properly modified
         */
        function arrow(data, options) {
          var _data$offsets$arrow;

          // arrow depends on keepTogether in order to work
          if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
            return data;
          }

          var arrowElement = options.element;

          // if arrowElement is a string, suppose it's a CSS selector
          if (typeof arrowElement === 'string') {
            arrowElement = data.instance.popper.querySelector(arrowElement);

            // if arrowElement is not found, don't run the modifier
            if (!arrowElement) {
              return data;
            }
          } else {
            // if the arrowElement isn't a query selector we must check that the
            // provided DOM node is child of its popper node
            if (!data.instance.popper.contains(arrowElement)) {
              console.warn('WARNING: `arrow.element` must be child of its popper element!');
              return data;
            }
          }

          var placement = data.placement.split('-')[0];
          var _data$offsets = data.offsets,
            popper = _data$offsets.popper,
            reference = _data$offsets.reference;

          var isVertical = ['left', 'right'].indexOf(placement) !== -1;

          var len = isVertical ? 'height' : 'width';
          var sideCapitalized = isVertical ? 'Top' : 'Left';
          var side = sideCapitalized.toLowerCase();
          var altSide = isVertical ? 'left' : 'top';
          var opSide = isVertical ? 'bottom' : 'right';
          var arrowElementSize = getOuterSizes(arrowElement)[len];

          //
          // extends keepTogether behavior making sure the popper and its
          // reference have enough pixels in conjunction
          //

          // top/left side
          if (reference[opSide] - arrowElementSize < popper[side]) {
            data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
          }
          // bottom/right side
          if (reference[side] + arrowElementSize > popper[opSide]) {
            data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
          }
          data.offsets.popper = getClientRect(data.offsets.popper);

          // compute center of the popper
          var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

          // Compute the sideValue using the updated popper offsets
          // take popper margin in account because we don't have this info available
          var css = getStyleComputedProperty(data.instance.popper);
          var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
          var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
          var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

          // prevent arrowElement from being placed not contiguously to its popper
          sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

          data.arrowElement = arrowElement;
          data.offsets.arrow =
            ((_data$offsets$arrow = {}),
            defineProperty(_data$offsets$arrow, side, Math.round(sideValue)),
            defineProperty(_data$offsets$arrow, altSide, ''),
            _data$offsets$arrow);

          return data;
        }

        /**
         * Get the opposite placement variation of the given one
         * @method
         * @memberof Popper.Utils
         * @argument {String} placement variation
         * @returns {String} flipped placement variation
         */
        function getOppositeVariation(variation) {
          if (variation === 'end') {
            return 'start';
          } else if (variation === 'start') {
            return 'end';
          }
          return variation;
        }

        /**
         * List of accepted placements to use as values of the `placement` option.<br />
         * Valid placements are:
         * - `auto`
         * - `top`
         * - `right`
         * - `bottom`
         * - `left`
         *
         * Each placement can have a variation from this list:
         * - `-start`
         * - `-end`
         *
         * Variations are interpreted easily if you think of them as the left to right
         * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
         * is right.<br />
         * Vertically (`left` and `right`), `start` is top and `end` is bottom.
         *
         * Some valid examples are:
         * - `top-end` (on top of reference, right aligned)
         * - `right-start` (on right of reference, top aligned)
         * - `bottom` (on bottom, centered)
         * - `auto-end` (on the side with more space available, alignment depends by placement)
         *
         * @static
         * @type {Array}
         * @enum {String}
         * @readonly
         * @method placements
         * @memberof Popper
         */
        var placements = [
          'auto-start',
          'auto',
          'auto-end',
          'top-start',
          'top',
          'top-end',
          'right-start',
          'right',
          'right-end',
          'bottom-end',
          'bottom',
          'bottom-start',
          'left-end',
          'left',
          'left-start',
        ];

        // Get rid of `auto` `auto-start` and `auto-end`
        var validPlacements = placements.slice(3);

        /**
         * Given an initial placement, returns all the subsequent placements
         * clockwise (or counter-clockwise).
         *
         * @method
         * @memberof Popper.Utils
         * @argument {String} placement - A valid placement (it accepts variations)
         * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
         * @returns {Array} placements including their variations
         */
        function clockwise(placement) {
          var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          var index = validPlacements.indexOf(placement);
          var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
          return counter ? arr.reverse() : arr;
        }

        var BEHAVIORS = {
          FLIP: 'flip',
          CLOCKWISE: 'clockwise',
          COUNTERCLOCKWISE: 'counterclockwise',
        };

        /**
         * @function
         * @memberof Modifiers
         * @argument {Object} data - The data object generated by update method
         * @argument {Object} options - Modifiers configuration and options
         * @returns {Object} The data object, properly modified
         */
        function flip(data, options) {
          // if `inner` modifier is enabled, we can't use the `flip` modifier
          if (isModifierEnabled(data.instance.modifiers, 'inner')) {
            return data;
          }

          if (data.flipped && data.placement === data.originalPlacement) {
            // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
            return data;
          }

          var boundaries = getBoundaries(
            data.instance.popper,
            data.instance.reference,
            options.padding,
            options.boundariesElement,
            data.positionFixed,
          );

          var placement = data.placement.split('-')[0];
          var placementOpposite = getOppositePlacement(placement);
          var variation = data.placement.split('-')[1] || '';

          var flipOrder = [];

          switch (options.behavior) {
            case BEHAVIORS.FLIP:
              flipOrder = [placement, placementOpposite];
              break;
            case BEHAVIORS.CLOCKWISE:
              flipOrder = clockwise(placement);
              break;
            case BEHAVIORS.COUNTERCLOCKWISE:
              flipOrder = clockwise(placement, true);
              break;
            default:
              flipOrder = options.behavior;
          }

          flipOrder.forEach(function (step, index) {
            if (placement !== step || flipOrder.length === index + 1) {
              return data;
            }

            placement = data.placement.split('-')[0];
            placementOpposite = getOppositePlacement(placement);

            var popperOffsets = data.offsets.popper;
            var refOffsets = data.offsets.reference;

            // using floor because the reference offsets may contain decimals we are not going to consider here
            var floor = Math.floor;
            var overlapsRef =
              (placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left)) ||
              (placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right)) ||
              (placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top)) ||
              (placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom));

            var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
            var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
            var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
            var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

            var overflowsBoundaries =
              (placement === 'left' && overflowsLeft) ||
              (placement === 'right' && overflowsRight) ||
              (placement === 'top' && overflowsTop) ||
              (placement === 'bottom' && overflowsBottom);

            // flip the variation if required
            var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

            // flips variation if reference element overflows boundaries
            var flippedVariationByRef =
              !!options.flipVariations &&
              ((isVertical && variation === 'start' && overflowsLeft) ||
                (isVertical && variation === 'end' && overflowsRight) ||
                (!isVertical && variation === 'start' && overflowsTop) ||
                (!isVertical && variation === 'end' && overflowsBottom));

            // flips variation if popper content overflows boundaries
            var flippedVariationByContent =
              !!options.flipVariationsByContent &&
              ((isVertical && variation === 'start' && overflowsRight) ||
                (isVertical && variation === 'end' && overflowsLeft) ||
                (!isVertical && variation === 'start' && overflowsBottom) ||
                (!isVertical && variation === 'end' && overflowsTop));

            var flippedVariation = flippedVariationByRef || flippedVariationByContent;

            if (overlapsRef || overflowsBoundaries || flippedVariation) {
              // this boolean to detect any flip loop
              data.flipped = true;

              if (overlapsRef || overflowsBoundaries) {
                placement = flipOrder[index + 1];
              }

              if (flippedVariation) {
                variation = getOppositeVariation(variation);
              }

              data.placement = placement + (variation ? '-' + variation : '');

              // this object contains `position`, we want to preserve it along with
              // any additional property we may add in the future
              data.offsets.popper = _extends(
                {},
                data.offsets.popper,
                getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement),
              );

              data = runModifiers(data.instance.modifiers, data, 'flip');
            }
          });
          return data;
        }

        /**
         * @function
         * @memberof Modifiers
         * @argument {Object} data - The data object generated by update method
         * @argument {Object} options - Modifiers configuration and options
         * @returns {Object} The data object, properly modified
         */
        function keepTogether(data) {
          var _data$offsets = data.offsets,
            popper = _data$offsets.popper,
            reference = _data$offsets.reference;

          var placement = data.placement.split('-')[0];
          var floor = Math.floor;
          var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
          var side = isVertical ? 'right' : 'bottom';
          var opSide = isVertical ? 'left' : 'top';
          var measurement = isVertical ? 'width' : 'height';

          if (popper[side] < floor(reference[opSide])) {
            data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
          }
          if (popper[opSide] > floor(reference[side])) {
            data.offsets.popper[opSide] = floor(reference[side]);
          }

          return data;
        }

        /**
         * Converts a string containing value + unit into a px value number
         * @function
         * @memberof {modifiers~offset}
         * @private
         * @argument {String} str - Value + unit string
         * @argument {String} measurement - `height` or `width`
         * @argument {Object} popperOffsets
         * @argument {Object} referenceOffsets
         * @returns {Number|String}
         * Value in pixels, or original string if no values were extracted
         */
        function toValue(str, measurement, popperOffsets, referenceOffsets) {
          // separate value from unit
          var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
          var value = +split[1];
          var unit = split[2];

          // If it's not a number it's an operator, I guess
          if (!value) {
            return str;
          }

          if (unit.indexOf('%') === 0) {
            var element = void 0;
            switch (unit) {
              case '%p':
                element = popperOffsets;
                break;
              case '%':
              case '%r':
              default:
                element = referenceOffsets;
            }

            var rect = getClientRect(element);
            return (rect[measurement] / 100) * value;
          } else if (unit === 'vh' || unit === 'vw') {
            // if is a vh or vw, we calculate the size based on the viewport
            var size = void 0;
            if (unit === 'vh') {
              size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            } else {
              size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            }
            return (size / 100) * value;
          } else {
            // if is an explicit pixel unit, we get rid of the unit and keep the value
            // if is an implicit unit, it's px, and we return just the value
            return value;
          }
        }

        /**
         * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
         * @function
         * @memberof {modifiers~offset}
         * @private
         * @argument {String} offset
         * @argument {Object} popperOffsets
         * @argument {Object} referenceOffsets
         * @argument {String} basePlacement
         * @returns {Array} a two cells array with x and y offsets in numbers
         */
        function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
          var offsets = [0, 0];

          // Use height if placement is left or right and index is 0 otherwise use width
          // in this way the first offset will use an axis and the second one
          // will use the other one
          var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

          // Split the offset string to obtain a list of values and operands
          // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
          var fragments = offset.split(/(\+|\-)/).map(function (frag) {
            return frag.trim();
          });

          // Detect if the offset string contains a pair of values or a single one
          // they could be separated by comma or space
          var divider = fragments.indexOf(
            find(fragments, function (frag) {
              return frag.search(/,|\s/) !== -1;
            }),
          );

          if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
            console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
          }

          // If divider is found, we divide the list of values and operands to divide
          // them by ofset X and Y.
          var splitRegex = /\s*,\s*|\s+/;
          var ops =
            divider !== -1
              ? [
                  fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]),
                  [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1)),
                ]
              : [fragments];

          // Convert the values with units to absolute pixels to allow our computations
          ops = ops.map(function (op, index) {
            // Most of the units rely on the orientation of the popper
            var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
            var mergeWithPrevious = false;
            return (
              op
                // This aggregates any `+` or `-` sign that aren't considered operators
                // e.g.: 10 + +5 => [10, +, +5]
                .reduce(function (a, b) {
                  if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
                    a[a.length - 1] = b;
                    mergeWithPrevious = true;
                    return a;
                  } else if (mergeWithPrevious) {
                    a[a.length - 1] += b;
                    mergeWithPrevious = false;
                    return a;
                  } else {
                    return a.concat(b);
                  }
                }, [])
                // Here we convert the string values into number values (in px)
                .map(function (str) {
                  return toValue(str, measurement, popperOffsets, referenceOffsets);
                })
            );
          });

          // Loop trough the offsets arrays and execute the operations
          ops.forEach(function (op, index) {
            op.forEach(function (frag, index2) {
              if (isNumeric(frag)) {
                offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
              }
            });
          });
          return offsets;
        }

        /**
         * @function
         * @memberof Modifiers
         * @argument {Object} data - The data object generated by update method
         * @argument {Object} options - Modifiers configuration and options
         * @argument {Number|String} options.offset=0
         * The offset value as described in the modifier description
         * @returns {Object} The data object, properly modified
         */
        function offset(data, _ref) {
          var offset = _ref.offset;
          var placement = data.placement,
            _data$offsets = data.offsets,
            popper = _data$offsets.popper,
            reference = _data$offsets.reference;

          var basePlacement = placement.split('-')[0];

          var offsets = void 0;
          if (isNumeric(+offset)) {
            offsets = [+offset, 0];
          } else {
            offsets = parseOffset(offset, popper, reference, basePlacement);
          }

          if (basePlacement === 'left') {
            popper.top += offsets[0];
            popper.left -= offsets[1];
          } else if (basePlacement === 'right') {
            popper.top += offsets[0];
            popper.left += offsets[1];
          } else if (basePlacement === 'top') {
            popper.left += offsets[0];
            popper.top -= offsets[1];
          } else if (basePlacement === 'bottom') {
            popper.left += offsets[0];
            popper.top += offsets[1];
          }

          data.popper = popper;
          return data;
        }

        /**
         * @function
         * @memberof Modifiers
         * @argument {Object} data - The data object generated by `update` method
         * @argument {Object} options - Modifiers configuration and options
         * @returns {Object} The data object, properly modified
         */
        function preventOverflow(data, options) {
          var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

          // If offsetParent is the reference element, we really want to
          // go one step up and use the next offsetParent as reference to
          // avoid to make this modifier completely useless and look like broken
          if (data.instance.reference === boundariesElement) {
            boundariesElement = getOffsetParent(boundariesElement);
          }

          // NOTE: DOM access here
          // resets the popper's position so that the document size can be calculated excluding
          // the size of the popper element itself
          var transformProp = getSupportedPropertyName('transform');
          var popperStyles = data.instance.popper.style; // assignment to help minification
          var top = popperStyles.top,
            left = popperStyles.left,
            transform = popperStyles[transformProp];

          popperStyles.top = '';
          popperStyles.left = '';
          popperStyles[transformProp] = '';

          var boundaries = getBoundaries(
            data.instance.popper,
            data.instance.reference,
            options.padding,
            boundariesElement,
            data.positionFixed,
          );

          // NOTE: DOM access here
          // restores the original style properties after the offsets have been computed
          popperStyles.top = top;
          popperStyles.left = left;
          popperStyles[transformProp] = transform;

          options.boundaries = boundaries;

          var order = options.priority;
          var popper = data.offsets.popper;

          var check = {
            primary: function primary(placement) {
              var value = popper[placement];
              if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
                value = Math.max(popper[placement], boundaries[placement]);
              }
              return defineProperty({}, placement, value);
            },
            secondary: function secondary(placement) {
              var mainSide = placement === 'right' ? 'left' : 'top';
              var value = popper[mainSide];
              if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
                value = Math.min(
                  popper[mainSide],
                  boundaries[placement] - (placement === 'right' ? popper.width : popper.height),
                );
              }
              return defineProperty({}, mainSide, value);
            },
          };

          order.forEach(function (placement) {
            var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
            popper = _extends({}, popper, check[side](placement));
          });

          data.offsets.popper = popper;

          return data;
        }

        /**
         * @function
         * @memberof Modifiers
         * @argument {Object} data - The data object generated by `update` method
         * @argument {Object} options - Modifiers configuration and options
         * @returns {Object} The data object, properly modified
         */
        function shift(data) {
          var placement = data.placement;
          var basePlacement = placement.split('-')[0];
          var shiftvariation = placement.split('-')[1];

          // if shift shiftvariation is specified, run the modifier
          if (shiftvariation) {
            var _data$offsets = data.offsets,
              reference = _data$offsets.reference,
              popper = _data$offsets.popper;

            var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
            var side = isVertical ? 'left' : 'top';
            var measurement = isVertical ? 'width' : 'height';

            var shiftOffsets = {
              start: defineProperty({}, side, reference[side]),
              end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement]),
            };

            data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
          }

          return data;
        }

        /**
         * @function
         * @memberof Modifiers
         * @argument {Object} data - The data object generated by update method
         * @argument {Object} options - Modifiers configuration and options
         * @returns {Object} The data object, properly modified
         */
        function hide(data) {
          if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
            return data;
          }

          var refRect = data.offsets.reference;
          var bound = find(data.instance.modifiers, function (modifier) {
            return modifier.name === 'preventOverflow';
          }).boundaries;

          if (
            refRect.bottom < bound.top ||
            refRect.left > bound.right ||
            refRect.top > bound.bottom ||
            refRect.right < bound.left
          ) {
            // Avoid unnecessary DOM access if visibility hasn't changed
            if (data.hide === true) {
              return data;
            }

            data.hide = true;
            data.attributes['x-out-of-boundaries'] = '';
          } else {
            // Avoid unnecessary DOM access if visibility hasn't changed
            if (data.hide === false) {
              return data;
            }

            data.hide = false;
            data.attributes['x-out-of-boundaries'] = false;
          }

          return data;
        }

        /**
         * @function
         * @memberof Modifiers
         * @argument {Object} data - The data object generated by `update` method
         * @argument {Object} options - Modifiers configuration and options
         * @returns {Object} The data object, properly modified
         */
        function inner(data) {
          var placement = data.placement;
          var basePlacement = placement.split('-')[0];
          var _data$offsets = data.offsets,
            popper = _data$offsets.popper,
            reference = _data$offsets.reference;

          var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

          var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

          popper[isHoriz ? 'left' : 'top'] =
            reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

          data.placement = getOppositePlacement(placement);
          data.offsets.popper = getClientRect(popper);

          return data;
        }

        /**
         * Modifier function, each modifier can have a function of this type assigned
         * to its `fn` property.<br />
         * These functions will be called on each update, this means that you must
         * make sure they are performant enough to avoid performance bottlenecks.
         *
         * @function ModifierFn
         * @argument {dataObject} data - The data object generated by `update` method
         * @argument {Object} options - Modifiers configuration and options
         * @returns {dataObject} The data object, properly modified
         */

        /**
         * Modifiers are plugins used to alter the behavior of your poppers.<br />
         * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
         * needed by the library.
         *
         * Usually you don't want to override the `order`, `fn` and `onLoad` props.
         * All the other properties are configurations that could be tweaked.
         * @namespace modifiers
         */
        var modifiers = {
          /**
           * Modifier used to shift the popper on the start or end of its reference
           * element.<br />
           * It will read the variation of the `placement` property.<br />
           * It can be one either `-end` or `-start`.
           * @memberof modifiers
           * @inner
           */
          shift: {
            /** @prop {number} order=100 - Index used to define the order of execution */
            order: 100,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: shift,
          },

          /**
           * The `offset` modifier can shift your popper on both its axis.
           *
           * It accepts the following units:
           * - `px` or unit-less, interpreted as pixels
           * - `%` or `%r`, percentage relative to the length of the reference element
           * - `%p`, percentage relative to the length of the popper element
           * - `vw`, CSS viewport width unit
           * - `vh`, CSS viewport height unit
           *
           * For length is intended the main axis relative to the placement of the popper.<br />
           * This means that if the placement is `top` or `bottom`, the length will be the
           * `width`. In case of `left` or `right`, it will be the `height`.
           *
           * You can provide a single value (as `Number` or `String`), or a pair of values
           * as `String` divided by a comma or one (or more) white spaces.<br />
           * The latter is a deprecated method because it leads to confusion and will be
           * removed in v2.<br />
           * Additionally, it accepts additions and subtractions between different units.
           * Note that multiplications and divisions aren't supported.
           *
           * Valid examples are:
           * ```
           * 10
           * '10%'
           * '10, 10'
           * '10%, 10'
           * '10 + 10%'
           * '10 - 5vh + 3%'
           * '-10px + 5vh, 5px - 6%'
           * ```
           * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
           * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
           * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
           *
           * @memberof modifiers
           * @inner
           */
          offset: {
            /** @prop {number} order=200 - Index used to define the order of execution */
            order: 200,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: offset,
            /** @prop {Number|String} offset=0
             * The offset value as described in the modifier description
             */
            offset: 0,
          },

          /**
           * Modifier used to prevent the popper from being positioned outside the boundary.
           *
           * A scenario exists where the reference itself is not within the boundaries.<br />
           * We can say it has "escaped the boundaries" — or just "escaped".<br />
           * In this case we need to decide whether the popper should either:
           *
           * - detach from the reference and remain "trapped" in the boundaries, or
           * - if it should ignore the boundary and "escape with its reference"
           *
           * When `escapeWithReference` is set to`true` and reference is completely
           * outside its boundaries, the popper will overflow (or completely leave)
           * the boundaries in order to remain attached to the edge of the reference.
           *
           * @memberof modifiers
           * @inner
           */
          preventOverflow: {
            /** @prop {number} order=300 - Index used to define the order of execution */
            order: 300,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: preventOverflow,
            /**
             * @prop {Array} [priority=['left','right','top','bottom']]
             * Popper will try to prevent overflow following these priorities by default,
             * then, it could overflow on the left and on top of the `boundariesElement`
             */
            priority: ['left', 'right', 'top', 'bottom'],
            /**
             * @prop {number} padding=5
             * Amount of pixel used to define a minimum distance between the boundaries
             * and the popper. This makes sure the popper always has a little padding
             * between the edges of its container
             */
            padding: 5,
            /**
             * @prop {String|HTMLElement} boundariesElement='scrollParent'
             * Boundaries used by the modifier. Can be `scrollParent`, `window`,
             * `viewport` or any DOM element.
             */
            boundariesElement: 'scrollParent',
          },

          /**
           * Modifier used to make sure the reference and its popper stay near each other
           * without leaving any gap between the two. Especially useful when the arrow is
           * enabled and you want to ensure that it points to its reference element.
           * It cares only about the first axis. You can still have poppers with margin
           * between the popper and its reference element.
           * @memberof modifiers
           * @inner
           */
          keepTogether: {
            /** @prop {number} order=400 - Index used to define the order of execution */
            order: 400,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: keepTogether,
          },

          /**
           * This modifier is used to move the `arrowElement` of the popper to make
           * sure it is positioned between the reference element and its popper element.
           * It will read the outer size of the `arrowElement` node to detect how many
           * pixels of conjunction are needed.
           *
           * It has no effect if no `arrowElement` is provided.
           * @memberof modifiers
           * @inner
           */
          arrow: {
            /** @prop {number} order=500 - Index used to define the order of execution */
            order: 500,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: arrow,
            /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
            element: '[x-arrow]',
          },

          /**
           * Modifier used to flip the popper's placement when it starts to overlap its
           * reference element.
           *
           * Requires the `preventOverflow` modifier before it in order to work.
           *
           * **NOTE:** this modifier will interrupt the current update cycle and will
           * restart it if it detects the need to flip the placement.
           * @memberof modifiers
           * @inner
           */
          flip: {
            /** @prop {number} order=600 - Index used to define the order of execution */
            order: 600,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: flip,
            /**
             * @prop {String|Array} behavior='flip'
             * The behavior used to change the popper's placement. It can be one of
             * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
             * placements (with optional variations)
             */
            behavior: 'flip',
            /**
             * @prop {number} padding=5
             * The popper will flip if it hits the edges of the `boundariesElement`
             */
            padding: 5,
            /**
             * @prop {String|HTMLElement} boundariesElement='viewport'
             * The element which will define the boundaries of the popper position.
             * The popper will never be placed outside of the defined boundaries
             * (except if `keepTogether` is enabled)
             */
            boundariesElement: 'viewport',
            /**
             * @prop {Boolean} flipVariations=false
             * The popper will switch placement variation between `-start` and `-end` when
             * the reference element overlaps its boundaries.
             *
             * The original placement should have a set variation.
             */
            flipVariations: false,
            /**
             * @prop {Boolean} flipVariationsByContent=false
             * The popper will switch placement variation between `-start` and `-end` when
             * the popper element overlaps its reference boundaries.
             *
             * The original placement should have a set variation.
             */
            flipVariationsByContent: false,
          },

          /**
           * Modifier used to make the popper flow toward the inner of the reference element.
           * By default, when this modifier is disabled, the popper will be placed outside
           * the reference element.
           * @memberof modifiers
           * @inner
           */
          inner: {
            /** @prop {number} order=700 - Index used to define the order of execution */
            order: 700,
            /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
            enabled: false,
            /** @prop {ModifierFn} */
            fn: inner,
          },

          /**
           * Modifier used to hide the popper when its reference element is outside of the
           * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
           * be used to hide with a CSS selector the popper when its reference is
           * out of boundaries.
           *
           * Requires the `preventOverflow` modifier before it in order to work.
           * @memberof modifiers
           * @inner
           */
          hide: {
            /** @prop {number} order=800 - Index used to define the order of execution */
            order: 800,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: hide,
          },

          /**
           * Computes the style that will be applied to the popper element to gets
           * properly positioned.
           *
           * Note that this modifier will not touch the DOM, it just prepares the styles
           * so that `applyStyle` modifier can apply it. This separation is useful
           * in case you need to replace `applyStyle` with a custom implementation.
           *
           * This modifier has `850` as `order` value to maintain backward compatibility
           * with previous versions of Popper.js. Expect the modifiers ordering method
           * to change in future major versions of the library.
           *
           * @memberof modifiers
           * @inner
           */
          computeStyle: {
            /** @prop {number} order=850 - Index used to define the order of execution */
            order: 850,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: computeStyle,
            /**
             * @prop {Boolean} gpuAcceleration=true
             * If true, it uses the CSS 3D transformation to position the popper.
             * Otherwise, it will use the `top` and `left` properties
             */
            gpuAcceleration: true,
            /**
             * @prop {string} [x='bottom']
             * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
             * Change this if your popper should grow in a direction different from `bottom`
             */
            x: 'bottom',
            /**
             * @prop {string} [x='left']
             * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
             * Change this if your popper should grow in a direction different from `right`
             */
            y: 'right',
          },

          /**
           * Applies the computed styles to the popper element.
           *
           * All the DOM manipulations are limited to this modifier. This is useful in case
           * you want to integrate Popper.js inside a framework or view library and you
           * want to delegate all the DOM manipulations to it.
           *
           * Note that if you disable this modifier, you must make sure the popper element
           * has its position set to `absolute` before Popper.js can do its work!
           *
           * Just disable this modifier and define your own to achieve the desired effect.
           *
           * @memberof modifiers
           * @inner
           */
          applyStyle: {
            /** @prop {number} order=900 - Index used to define the order of execution */
            order: 900,
            /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
            enabled: true,
            /** @prop {ModifierFn} */
            fn: applyStyle,
            /** @prop {Function} */
            onLoad: applyStyleOnLoad,
            /**
             * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
             * @prop {Boolean} gpuAcceleration=true
             * If true, it uses the CSS 3D transformation to position the popper.
             * Otherwise, it will use the `top` and `left` properties
             */
            gpuAcceleration: undefined,
          },
        };

        /**
         * The `dataObject` is an object containing all the information used by Popper.js.
         * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
         * @name dataObject
         * @property {Object} data.instance The Popper.js instance
         * @property {String} data.placement Placement applied to popper
         * @property {String} data.originalPlacement Placement originally defined on init
         * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
         * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
         * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
         * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
         * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
         * @property {Object} data.boundaries Offsets of the popper boundaries
         * @property {Object} data.offsets The measurements of popper, reference and arrow elements
         * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
         * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
         * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
         */

        /**
         * Default options provided to Popper.js constructor.<br />
         * These can be overridden using the `options` argument of Popper.js.<br />
         * To override an option, simply pass an object with the same
         * structure of the `options` object, as the 3rd argument. For example:
         * ```
         * new Popper(ref, pop, {
         *   modifiers: {
         *     preventOverflow: { enabled: false }
         *   }
         * })
         * ```
         * @type {Object}
         * @static
         * @memberof Popper
         */
        var Defaults = {
          /**
           * Popper's placement.
           * @prop {Popper.placements} placement='bottom'
           */
          placement: 'bottom',

          /**
           * Set this to true if you want popper to position it self in 'fixed' mode
           * @prop {Boolean} positionFixed=false
           */
          positionFixed: false,

          /**
           * Whether events (resize, scroll) are initially enabled.
           * @prop {Boolean} eventsEnabled=true
           */
          eventsEnabled: true,

          /**
           * Set to true if you want to automatically remove the popper when
           * you call the `destroy` method.
           * @prop {Boolean} removeOnDestroy=false
           */
          removeOnDestroy: false,

          /**
           * Callback called when the popper is created.<br />
           * By default, it is set to no-op.<br />
           * Access Popper.js instance with `data.instance`.
           * @prop {onCreate}
           */
          onCreate: function onCreate() {},

          /**
           * Callback called when the popper is updated. This callback is not called
           * on the initialization/creation of the popper, but only on subsequent
           * updates.<br />
           * By default, it is set to no-op.<br />
           * Access Popper.js instance with `data.instance`.
           * @prop {onUpdate}
           */
          onUpdate: function onUpdate() {},

          /**
           * List of modifiers used to modify the offsets before they are applied to the popper.
           * They provide most of the functionalities of Popper.js.
           * @prop {modifiers}
           */
          modifiers: modifiers,
        };

        /**
         * @callback onCreate
         * @param {dataObject} data
         */

        /**
         * @callback onUpdate
         * @param {dataObject} data
         */

        // Utils
        // Methods
        var Popper = (function () {
          /**
           * Creates a new Popper.js instance.
           * @class Popper
           * @param {Element|referenceObject} reference - The reference element used to position the popper
           * @param {Element} popper - The HTML / XML element used as the popper
           * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
           * @return {Object} instance - The generated Popper.js instance
           */
          function Popper(reference, popper) {
            var _this = this;

            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            classCallCheck(this, Popper);

            this.scheduleUpdate = function () {
              return requestAnimationFrame(_this.update);
            };

            // make update() debounced, so that it only runs at most once-per-tick
            this.update = debounce(this.update.bind(this));

            // with {} we create a new object with the options inside it
            this.options = _extends({}, Popper.Defaults, options);

            // init state
            this.state = {
              isDestroyed: false,
              isCreated: false,
              scrollParents: [],
            };

            // get reference and popper elements (allow jQuery wrappers)
            this.reference = reference && reference.jquery ? reference[0] : reference;
            this.popper = popper && popper.jquery ? popper[0] : popper;

            // Deep merge modifiers options
            this.options.modifiers = {};
            Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
              _this.options.modifiers[name] = _extends(
                {},
                Popper.Defaults.modifiers[name] || {},
                options.modifiers ? options.modifiers[name] : {},
              );
            });

            // Refactoring modifiers' list (Object => Array)
            this.modifiers = Object.keys(this.options.modifiers)
              .map(function (name) {
                return _extends(
                  {
                    name: name,
                  },
                  _this.options.modifiers[name],
                );
              })
              // sort the modifiers by order
              .sort(function (a, b) {
                return a.order - b.order;
              });

            // modifiers have the ability to execute arbitrary code when Popper.js get inited
            // such code is executed in the same order of its modifier
            // they could add new properties to their options configuration
            // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
            this.modifiers.forEach(function (modifierOptions) {
              if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
                modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
              }
            });

            // fire the first update to position the popper in the right place
            this.update();

            var eventsEnabled = this.options.eventsEnabled;
            if (eventsEnabled) {
              // setup event listeners, they will take care of update the position in specific situations
              this.enableEventListeners();
            }

            this.state.eventsEnabled = eventsEnabled;
          }

          // We can't use class properties because they don't get listed in the
          // class prototype and break stuff like Sinon stubs

          createClass(Popper, [
            {
              key: 'update',
              value: function update$$1() {
                return update.call(this);
              },
            },
            {
              key: 'destroy',
              value: function destroy$$1() {
                return destroy.call(this);
              },
            },
            {
              key: 'enableEventListeners',
              value: function enableEventListeners$$1() {
                return enableEventListeners.call(this);
              },
            },
            {
              key: 'disableEventListeners',
              value: function disableEventListeners$$1() {
                return disableEventListeners.call(this);
              },

              /**
               * Schedules an update. It will run on the next UI update available.
               * @method scheduleUpdate
               * @memberof Popper
               */

              /**
               * Collection of utilities useful when writing custom modifiers.
               * Starting from version 1.7, this method is available only if you
               * include `popper-utils.js` before `popper.js`.
               *
               * **DEPRECATION**: This way to access PopperUtils is deprecated
               * and will be removed in v2! Use the PopperUtils module directly instead.
               * Due to the high instability of the methods contained in Utils, we can't
               * guarantee them to follow semver. Use them at your own risk!
               * @static
               * @private
               * @type {Object}
               * @deprecated since version 1.8
               * @member Utils
               * @memberof Popper
               */
            },
          ]);
          return Popper;
        })();

        /**
         * The `referenceObject` is an object that provides an interface compatible with Popper.js
         * and lets you use it as replacement of a real DOM node.<br />
         * You can use this method to position a popper relatively to a set of coordinates
         * in case you don't have a DOM node to use as reference.
         *
         * ```
         * new Popper(referenceObject, popperNode);
         * ```
         *
         * NB: This feature isn't supported in Internet Explorer 10.
         * @name referenceObject
         * @property {Function} data.getBoundingClientRect
         * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
         * @property {number} data.clientWidth
         * An ES6 getter that will return the width of the virtual reference element.
         * @property {number} data.clientHeight
         * An ES6 getter that will return the height of the virtual reference element.
         */

        Popper.Utils = (typeof window !== 'undefined' ? window : __webpack_require__.g).PopperUtils;
        Popper.placements = placements;
        Popper.Defaults = Defaults;

        /* harmony default export */ __webpack_exports__['default'] = Popper;
        //# sourceMappingURL=popper.js.map

        /***/
      },

    /***/ './node_modules/tabbable/dist/index.esm.js':
      /*!*************************************************!*\
  !*** ./node_modules/tabbable/dist/index.esm.js ***!
  \*************************************************/
      /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ focusable: function () {
            return /* binding */ focusable;
          },
          /* harmony export */ getTabIndex: function () {
            return /* binding */ getTabIndex;
          },
          /* harmony export */ isFocusable: function () {
            return /* binding */ isFocusable;
          },
          /* harmony export */ isTabbable: function () {
            return /* binding */ isTabbable;
          },
          /* harmony export */ tabbable: function () {
            return /* binding */ tabbable;
          },
          /* harmony export */
        });
        /*!
         * tabbable 6.2.0
         * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
         */
        // NOTE: separate `:not()` selectors has broader browser support than the newer
        //  `:not([inert], [inert] *)` (Feb 2023)
        // CAREFUL: JSDom does not support `:not([inert] *)` as a selector; using it causes
        //  the entire query to fail, resulting in no nodes found, which will break a lot
        //  of things... so we have to rely on JS to identify nodes inside an inert container
        var candidateSelectors = [
          'input:not([inert])',
          'select:not([inert])',
          'textarea:not([inert])',
          'a[href]:not([inert])',
          'button:not([inert])',
          '[tabindex]:not(slot):not([inert])',
          'audio[controls]:not([inert])',
          'video[controls]:not([inert])',
          '[contenteditable]:not([contenteditable="false"]):not([inert])',
          'details>summary:first-of-type:not([inert])',
          'details:not([inert])',
        ];
        var candidateSelector = /* #__PURE__ */ candidateSelectors.join(',');
        var NoElement = typeof Element === 'undefined';
        var matches = NoElement
          ? function () {}
          : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        var getRootNode =
          !NoElement && Element.prototype.getRootNode
            ? function (element) {
                var _element$getRootNode;
                return element === null || element === void 0
                  ? void 0
                  : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0
                  ? void 0
                  : _element$getRootNode.call(element);
              }
            : function (element) {
                return element === null || element === void 0 ? void 0 : element.ownerDocument;
              };

        /**
         * Determines if a node is inert or in an inert ancestor.
         * @param {Element} [node]
         * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
         *  see if any of them are inert. If false, only `node` itself is considered.
         * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
         *  False if `node` is falsy.
         */
        var isInert = function isInert(node, lookUp) {
          var _node$getAttribute;
          if (lookUp === void 0) {
            lookUp = true;
          }
          // CAREFUL: JSDom does not support inert at all, so we can't use the `HTMLElement.inert`
          //  JS API property; we have to check the attribute, which can either be empty or 'true';
          //  if it's `null` (not specified) or 'false', it's an active element
          var inertAtt =
            node === null || node === void 0
              ? void 0
              : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0
              ? void 0
              : _node$getAttribute.call(node, 'inert');
          var inert = inertAtt === '' || inertAtt === 'true';

          // NOTE: this could also be handled with `node.matches('[inert], :is([inert] *)')`
          //  if it weren't for `matches()` not being a function on shadow roots; the following
          //  code works for any kind of node
          // CAREFUL: JSDom does not appear to support certain selectors like `:not([inert] *)`
          //  so it likely would not support `:is([inert] *)` either...
          var result = inert || (lookUp && node && isInert(node.parentNode)); // recursive

          return result;
        };

        /**
         * Determines if a node's content is editable.
         * @param {Element} [node]
         * @returns True if it's content-editable; false if it's not or `node` is falsy.
         */
        var isContentEditable = function isContentEditable(node) {
          var _node$getAttribute2;
          // CAREFUL: JSDom does not support the `HTMLElement.isContentEditable` API so we have
          //  to use the attribute directly to check for this, which can either be empty or 'true';
          //  if it's `null` (not specified) or 'false', it's a non-editable element
          var attValue =
            node === null || node === void 0
              ? void 0
              : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0
              ? void 0
              : _node$getAttribute2.call(node, 'contenteditable');
          return attValue === '' || attValue === 'true';
        };

        /**
         * @param {Element} el container to check in
         * @param {boolean} includeContainer add container to check
         * @param {(node: Element) => boolean} filter filter candidates
         * @returns {Element[]}
         */
        var getCandidates = function getCandidates(el, includeContainer, filter) {
          // even if `includeContainer=false`, we still have to check it for inertness because
          //  if it's inert, all its children are inert
          if (isInert(el)) {
            return [];
          }
          var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
          if (includeContainer && matches.call(el, candidateSelector)) {
            candidates.unshift(el);
          }
          candidates = candidates.filter(filter);
          return candidates;
        };

        /**
         * @callback GetShadowRoot
         * @param {Element} element to check for shadow root
         * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
         */

        /**
         * @callback ShadowRootFilter
         * @param {Element} shadowHostNode the element which contains shadow content
         * @returns {boolean} true if a shadow root could potentially contain valid candidates.
         */

        /**
         * @typedef {Object} CandidateScope
         * @property {Element} scopeParent contains inner candidates
         * @property {Element[]} candidates list of candidates found in the scope parent
         */

        /**
         * @typedef {Object} IterativeOptions
         * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
         *  if a function, implies shadow support is enabled and either returns the shadow root of an element
         *  or a boolean stating if it has an undisclosed shadow root
         * @property {(node: Element) => boolean} filter filter candidates
         * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
         * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
         */

        /**
         * @param {Element[]} elements list of element containers to match candidates from
         * @param {boolean} includeContainer add container list to check
         * @param {IterativeOptions} options
         * @returns {Array.<Element|CandidateScope>}
         */
        var getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
          var candidates = [];
          var elementsToCheck = Array.from(elements);
          while (elementsToCheck.length) {
            var element = elementsToCheck.shift();
            if (isInert(element, false)) {
              // no need to look up since we're drilling down
              // anything inside this container will also be inert
              continue;
            }
            if (element.tagName === 'SLOT') {
              // add shadow dom slot scope (slot itself cannot be focusable)
              var assigned = element.assignedElements();
              var content = assigned.length ? assigned : element.children;
              var nestedCandidates = getCandidatesIteratively(content, true, options);
              if (options.flatten) {
                candidates.push.apply(candidates, nestedCandidates);
              } else {
                candidates.push({
                  scopeParent: element,
                  candidates: nestedCandidates,
                });
              }
            } else {
              // check candidate element
              var validCandidate = matches.call(element, candidateSelector);
              if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
                candidates.push(element);
              }

              // iterate over shadow content if possible
              var shadowRoot =
                element.shadowRoot ||
                // check for an undisclosed shadow
                (typeof options.getShadowRoot === 'function' && options.getShadowRoot(element));

              // no inert look up because we're already drilling down and checking for inertness
              //  on the way down, so all containers to this root node should have already been
              //  vetted as non-inert
              var validShadowRoot =
                !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
              if (shadowRoot && validShadowRoot) {
                // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
                //  shadow exists, so look at light dom children as fallback BUT create a scope for any
                //  child candidates found because they're likely slotted elements (elements that are
                //  children of the web component element (which has the shadow), in the light dom, but
                //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
                //  _after_ we return from this recursive call
                var _nestedCandidates = getCandidatesIteratively(
                  shadowRoot === true ? element.children : shadowRoot.children,
                  true,
                  options,
                );
                if (options.flatten) {
                  candidates.push.apply(candidates, _nestedCandidates);
                } else {
                  candidates.push({
                    scopeParent: element,
                    candidates: _nestedCandidates,
                  });
                }
              } else {
                // there's not shadow so just dig into the element's (light dom) children
                //  __without__ giving the element special scope treatment
                elementsToCheck.unshift.apply(elementsToCheck, element.children);
              }
            }
          }
          return candidates;
        };

        /**
         * @private
         * Determines if the node has an explicitly specified `tabindex` attribute.
         * @param {HTMLElement} node
         * @returns {boolean} True if so; false if not.
         */
        var hasTabIndex = function hasTabIndex(node) {
          return !isNaN(parseInt(node.getAttribute('tabindex'), 10));
        };

        /**
         * Determine the tab index of a given node.
         * @param {HTMLElement} node
         * @returns {number} Tab order (negative, 0, or positive number).
         * @throws {Error} If `node` is falsy.
         */
        var getTabIndex = function getTabIndex(node) {
          if (!node) {
            throw new Error('No node provided');
          }
          if (node.tabIndex < 0) {
            // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
            // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
            // yet they are still part of the regular tab order; in FF, they get a default
            // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
            // order, consider their tab index to be 0.
            // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
            // so if they don't have a tabindex attribute specifically set, assume it's 0.
            if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
              return 0;
            }
          }
          return node.tabIndex;
        };

        /**
         * Determine the tab index of a given node __for sort order purposes__.
         * @param {HTMLElement} node
         * @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
         *  has tabIndex -1, but needs to be sorted by document order in order for its content to be
         *  inserted into the correct sort position.
         * @returns {number} Tab order (negative, 0, or positive number).
         */
        var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
          var tabIndex = getTabIndex(node);
          if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
            return 0;
          }
          return tabIndex;
        };
        var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
          return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
        };
        var isInput = function isInput(node) {
          return node.tagName === 'INPUT';
        };
        var isHiddenInput = function isHiddenInput(node) {
          return isInput(node) && node.type === 'hidden';
        };
        var isDetailsWithSummary = function isDetailsWithSummary(node) {
          var r =
            node.tagName === 'DETAILS' &&
            Array.prototype.slice.apply(node.children).some(function (child) {
              return child.tagName === 'SUMMARY';
            });
          return r;
        };
        var getCheckedRadio = function getCheckedRadio(nodes, form) {
          for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].checked && nodes[i].form === form) {
              return nodes[i];
            }
          }
        };
        var isTabbableRadio = function isTabbableRadio(node) {
          if (!node.name) {
            return true;
          }
          var radioScope = node.form || getRootNode(node);
          var queryRadios = function queryRadios(name) {
            return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
          };
          var radioSet;
          if (
            typeof window !== 'undefined' &&
            typeof window.CSS !== 'undefined' &&
            typeof window.CSS.escape === 'function'
          ) {
            radioSet = queryRadios(window.CSS.escape(node.name));
          } else {
            try {
              radioSet = queryRadios(node.name);
            } catch (err) {
              // eslint-disable-next-line no-console
              console.error(
                'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
                err.message,
              );
              return false;
            }
          }
          var checked = getCheckedRadio(radioSet, node.form);
          return !checked || checked === node;
        };
        var isRadio = function isRadio(node) {
          return isInput(node) && node.type === 'radio';
        };
        var isNonTabbableRadio = function isNonTabbableRadio(node) {
          return isRadio(node) && !isTabbableRadio(node);
        };

        // determines if a node is ultimately attached to the window's document
        var isNodeAttached = function isNodeAttached(node) {
          var _nodeRoot;
          // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
          //  (but NOT _the_ document; see second 'If' comment below for more).
          // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
          //  is attached, and the one we need to check if it's in the document or not (because the
          //  shadow, and all nodes it contains, is never considered in the document since shadows
          //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
          //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
          //  visibility, including all the nodes it contains). The host could be any normal node,
          //  or a custom element (i.e. web component). Either way, that's the one that is considered
          //  part of the document, not the shadow root, nor any of its children (i.e. the node being
          //  tested).
          // To further complicate things, we have to look all the way up until we find a shadow HOST
          //  that is attached (or find none) because the node might be in nested shadows...
          // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
          //  document (per the docs) and while it's a Document-type object, that document does not
          //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
          //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
          //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
          //  node is actually detached.
          // NOTE: If `nodeRootHost` or `node` happens to be the `document` itself (which is possible
          //  if a tabbable/focusable node was quickly added to the DOM, focused, and then removed
          //  from the DOM as in https://github.com/focus-trap/focus-trap-react/issues/905), then
          //  `ownerDocument` will be `null`, hence the optional chaining on it.
          var nodeRoot = node && getRootNode(node);
          var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;

          // in some cases, a detached node will return itself as the root instead of a document or
          //  shadow root object, in which case, we shouldn't try to look further up the host chain
          var attached = false;
          if (nodeRoot && nodeRoot !== node) {
            var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
            attached = !!(
              ((_nodeRootHost = nodeRootHost) !== null &&
                _nodeRootHost !== void 0 &&
                (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null &&
                _nodeRootHost$ownerDo !== void 0 &&
                _nodeRootHost$ownerDo.contains(nodeRootHost)) ||
              (node !== null &&
                node !== void 0 &&
                (_node$ownerDocument = node.ownerDocument) !== null &&
                _node$ownerDocument !== void 0 &&
                _node$ownerDocument.contains(node))
            );
            while (!attached && nodeRootHost) {
              var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
              // since it's not attached and we have a root host, the node MUST be in a nested shadow DOM,
              //  which means we need to get the host's host and check if that parent host is contained
              //  in (i.e. attached to) the document
              nodeRoot = getRootNode(nodeRootHost);
              nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
              attached = !!(
                (_nodeRootHost2 = nodeRootHost) !== null &&
                _nodeRootHost2 !== void 0 &&
                (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null &&
                _nodeRootHost2$ownerD !== void 0 &&
                _nodeRootHost2$ownerD.contains(nodeRootHost)
              );
            }
          }
          return attached;
        };
        var isZeroArea = function isZeroArea(node) {
          var _node$getBoundingClie = node.getBoundingClientRect(),
            width = _node$getBoundingClie.width,
            height = _node$getBoundingClie.height;
          return width === 0 && height === 0;
        };
        var isHidden = function isHidden(node, _ref) {
          var displayCheck = _ref.displayCheck,
            getShadowRoot = _ref.getShadowRoot;
          // NOTE: visibility will be `undefined` if node is detached from the document
          //  (see notes about this further down), which means we will consider it visible
          //  (this is legacy behavior from a very long way back)
          // NOTE: we check this regardless of `displayCheck="none"` because this is a
          //  _visibility_ check, not a _display_ check
          if (getComputedStyle(node).visibility === 'hidden') {
            return true;
          }
          var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
          var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
          if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
            return true;
          }
          if (!displayCheck || displayCheck === 'full' || displayCheck === 'legacy-full') {
            if (typeof getShadowRoot === 'function') {
              // figure out if we should consider the node to be in an undisclosed shadow and use the
              //  'non-zero-area' fallback
              var originalNode = node;
              while (node) {
                var parentElement = node.parentElement;
                var rootNode = getRootNode(node);
                if (
                  parentElement &&
                  !parentElement.shadowRoot &&
                  getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
                ) {
                  // node has an undisclosed shadow which means we can only treat it as a black box, so we
                  //  fall back to a non-zero-area test
                  return isZeroArea(node);
                } else if (node.assignedSlot) {
                  // iterate up slot
                  node = node.assignedSlot;
                } else if (!parentElement && rootNode !== node.ownerDocument) {
                  // cross shadow boundary
                  node = rootNode.host;
                } else {
                  // iterate up normal dom
                  node = parentElement;
                }
              }
              node = originalNode;
            }
            // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
            //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
            //  it might be a falsy value, which means shadow DOM support is disabled

            // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
            //  now we can just test to see if it would normally be visible or not, provided it's
            //  attached to the main document.
            // NOTE: We must consider case where node is inside a shadow DOM and given directly to
            //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.

            if (isNodeAttached(node)) {
              // this works wherever the node is: if there's at least one client rect, it's
              //  somehow displayed; it also covers the CSS 'display: contents' case where the
              //  node itself is hidden in place of its contents; and there's no need to search
              //  up the hierarchy either
              return !node.getClientRects().length;
            }

            // Else, the node isn't attached to the document, which means the `getClientRects()`
            //  API will __always__ return zero rects (this can happen, for example, if React
            //  is used to render nodes onto a detached tree, as confirmed in this thread:
            //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
            //
            // It also means that even window.getComputedStyle(node).display will return `undefined`
            //  because styles are only computed for nodes that are in the document.
            //
            // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
            //  somehow. Though it was never stated officially, anyone who has ever used tabbable
            //  APIs on nodes in detached containers has actually implicitly used tabbable in what
            //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
            //  considering __everything__ to be visible because of the innability to determine styles.
            //
            // v6.0.0: As of this major release, the default 'full' option __no longer treats detached
            //  nodes as visible with the 'none' fallback.__
            if (displayCheck !== 'legacy-full') {
              return true; // hidden
            }
            // else, fallback to 'none' mode and consider the node visible
          } else if (displayCheck === 'non-zero-area') {
            // NOTE: Even though this tests that the node's client rect is non-zero to determine
            //  whether it's displayed, and that a detached node will __always__ have a zero-area
            //  client rect, we don't special-case for whether the node is attached or not. In
            //  this mode, we do want to consider nodes that have a zero area to be hidden at all
            //  times, and that includes attached or not.
            return isZeroArea(node);
          }

          // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
          //  it's visible
          return false;
        };

        // form fields (nested) inside a disabled fieldset are not focusable/tabbable
        //  unless they are in the _first_ <legend> element of the top-most disabled
        //  fieldset
        var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
          if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
            var parentNode = node.parentElement;
            // check if `node` is contained in a disabled <fieldset>
            while (parentNode) {
              if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
                // look for the first <legend> among the children of the disabled <fieldset>
                for (var i = 0; i < parentNode.children.length; i++) {
                  var child = parentNode.children.item(i);
                  // when the first <legend> (in document order) is found
                  if (child.tagName === 'LEGEND') {
                    // if its parent <fieldset> is not nested in another disabled <fieldset>,
                    // return whether `node` is a descendant of its first <legend>
                    return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
                  }
                }
                // the disabled <fieldset> containing `node` has no <legend>
                return true;
              }
              parentNode = parentNode.parentElement;
            }
          }

          // else, node's tabbable/focusable state should not be affected by a fieldset's
          //  enabled/disabled state
          return false;
        };
        var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
          if (
            node.disabled ||
            // we must do an inert look up to filter out any elements inside an inert ancestor
            //  because we're limited in the type of selectors we can use in JSDom (see related
            //  note related to `candidateSelectors`)
            isInert(node) ||
            isHiddenInput(node) ||
            isHidden(node, options) ||
            // For a details element with a summary, the summary element gets the focus
            isDetailsWithSummary(node) ||
            isDisabledFromFieldset(node)
          ) {
            return false;
          }
          return true;
        };
        var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
          if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
            return false;
          }
          return true;
        };
        var isValidShadowRootTabbable = function isValidShadowRootTabbable(shadowHostNode) {
          var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);
          if (isNaN(tabIndex) || tabIndex >= 0) {
            return true;
          }
          // If a custom element has an explicit negative tabindex,
          // browsers will not allow tab targeting said element's children.
          return false;
        };

        /**
         * @param {Array.<Element|CandidateScope>} candidates
         * @returns Element[]
         */
        var sortByOrder = function sortByOrder(candidates) {
          var regularTabbables = [];
          var orderedTabbables = [];
          candidates.forEach(function (item, i) {
            var isScope = !!item.scopeParent;
            var element = isScope ? item.scopeParent : item;
            var candidateTabindex = getSortOrderTabIndex(element, isScope);
            var elements = isScope ? sortByOrder(item.candidates) : element;
            if (candidateTabindex === 0) {
              isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
            } else {
              orderedTabbables.push({
                documentOrder: i,
                tabIndex: candidateTabindex,
                item: item,
                isScope: isScope,
                content: elements,
              });
            }
          });
          return orderedTabbables
            .sort(sortOrderedTabbables)
            .reduce(function (acc, sortable) {
              sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
              return acc;
            }, [])
            .concat(regularTabbables);
        };
        var tabbable = function tabbable(container, options) {
          options = options || {};
          var candidates;
          if (options.getShadowRoot) {
            candidates = getCandidatesIteratively([container], options.includeContainer, {
              filter: isNodeMatchingSelectorTabbable.bind(null, options),
              flatten: false,
              getShadowRoot: options.getShadowRoot,
              shadowRootFilter: isValidShadowRootTabbable,
            });
          } else {
            candidates = getCandidates(
              container,
              options.includeContainer,
              isNodeMatchingSelectorTabbable.bind(null, options),
            );
          }
          return sortByOrder(candidates);
        };
        var focusable = function focusable(container, options) {
          options = options || {};
          var candidates;
          if (options.getShadowRoot) {
            candidates = getCandidatesIteratively([container], options.includeContainer, {
              filter: isNodeMatchingSelectorFocusable.bind(null, options),
              flatten: true,
              getShadowRoot: options.getShadowRoot,
            });
          } else {
            candidates = getCandidates(
              container,
              options.includeContainer,
              isNodeMatchingSelectorFocusable.bind(null, options),
            );
          }
          return candidates;
        };
        var isTabbable = function isTabbable(node, options) {
          options = options || {};
          if (!node) {
            throw new Error('No node provided');
          }
          if (matches.call(node, candidateSelector) === false) {
            return false;
          }
          return isNodeMatchingSelectorTabbable(options, node);
        };
        var focusableCandidateSelector = /* #__PURE__ */ candidateSelectors.concat('iframe').join(',');
        var isFocusable = function isFocusable(node, options) {
          options = options || {};
          if (!node) {
            throw new Error('No node provided');
          }
          if (matches.call(node, focusableCandidateSelector) === false) {
            return false;
          }
          return isNodeMatchingSelectorFocusable(options, node);
        };

        //# sourceMappingURL=index.esm.js.map

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtDQUErQyxTQUFTO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qix3QkFBd0I7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLDhFQUE4RTs7QUFFL0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7O0FDNVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBNEQsNEJBQTRCLG1CQUFPLENBQUMsc0JBQVEsR0FBRyxtQkFBTyxDQUFDLDhEQUFXLEdBQUcsbUJBQU8sQ0FBQywyREFBVztBQUN0SixFQUFFLENBQ2dKO0FBQ2xKLENBQUMsc0NBQXNDOztBQUV2Qyx1Q0FBdUMsNERBQTREOztBQUVuRztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0IsMEJBQTBCOztBQUUxQix1QkFBdUI7O0FBRXZCLDZCQUE2Qjs7QUFFN0IsK0JBQStCOztBQUUvQixvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTs7O0FBR047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVixxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixzQkFBc0I7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1SUFBdUk7O0FBRXZJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBd0Q7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsMkNBQTJDLFNBQVM7QUFDcEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROzs7QUFHUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTs7O0FBR047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtEQUErRDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDBCQUEwQiw4RkFBOEY7O0FBRXhIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQztBQUNEOzs7Ozs7Ozs7OztBQ3gzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUE0RCw0QkFBNEIsbUJBQU8sQ0FBQyxzQkFBUTtBQUMxRyxFQUFFLENBQ2dIO0FBQ2xILENBQUMsd0JBQXdCOztBQUV6Qix1Q0FBdUMsNERBQTREOztBQUVuRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DLFFBQVE7O0FBRVI7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0EsOERBQThEOztBQUU5RDtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdMQTtBQUNBO0FBQ0E7QUFDQTtBQUNxRjs7QUFFckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnREFBZ0Q7QUFDaEU7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDcGJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isa0NBQWtDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxLQUFLO0FBQ25CLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixjQUFjLFNBQVM7QUFDdkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCLGNBQWMsUUFBUTtBQUN0QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsYUFBYTtBQUN4QixXQUFXLFNBQVM7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQztBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7O0FBTUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixjQUFjLFNBQVM7QUFDdkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixhQUFhLFNBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsYUFBYTtBQUN4QixXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZCxtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsZUFBZTs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsZUFBZTs7QUFFdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQix3REFBd0Q7O0FBRTlFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsU0FBUztBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CLDJCQUEyQjtBQUMzQixnQ0FBZ0M7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdEQUFnRDs7QUFFaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxTQUFTO0FBQ3ZCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsZUFBZTtBQUM3QjtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUIsNEJBQTRCO0FBQzVCOztBQUVBLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxZQUFZO0FBQzFCLGNBQWMsUUFBUTtBQUN0QixhQUFhLFlBQVk7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQSxlQUFlLFlBQVk7QUFDM0I7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBLGVBQWUsWUFBWTtBQUMzQjtBQUNBLGVBQWUsZUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxvQkFBb0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0EsZUFBZSxvQkFBb0I7QUFDbkM7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0EsY0FBYyxjQUFjO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsb0JBQW9CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQSxlQUFlLFlBQVk7QUFDM0I7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQSxlQUFlLFlBQVk7QUFDM0I7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBLGVBQWUsWUFBWTtBQUMzQjtBQUNBLGVBQWUsVUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RjtBQUN2Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0NBQWdDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGdDQUFnQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUU7QUFDckUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVtZS1mdXNpb24vLi9ub2RlX21vZHVsZXMvQHlhcmRpbnRlcm5ldC9hMTF5LWNvb2tpZS15ZXMvZGlzdC9hMTF5LWNvb2tpZS15ZXMuZXNtLmpzIiwid2VicGFjazovL3RoZW1lLWZ1c2lvbi8uL25vZGVfbW9kdWxlcy9ib2R5LXNjcm9sbC1sb2NrL2xpYi9ib2R5U2Nyb2xsTG9jay5lc20uanMiLCJ3ZWJwYWNrOi8vdGhlbWUtZnVzaW9uLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlLmpzIiwid2VicGFjazovL3RoZW1lLWZ1c2lvbi8uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvZGlzdC9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly90aGVtZS1mdXNpb24vLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL2Rpc3QvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly90aGVtZS1mdXNpb24vLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL2Rpc3QvdXRpbC5qcyIsIndlYnBhY2s6Ly90aGVtZS1mdXNpb24vLi9ub2RlX21vZHVsZXMvZm9jdXMtdHJhcC9kaXN0L2ZvY3VzLXRyYXAuZXNtLmpzIiwid2VicGFjazovL3RoZW1lLWZ1c2lvbi8uL25vZGVfbW9kdWxlcy9oZWFkcm9vbS5qcy9kaXN0L2hlYWRyb29tLmpzIiwid2VicGFjazovL3RoZW1lLWZ1c2lvbi8uL25vZGVfbW9kdWxlcy9wb3BwZXIuanMvZGlzdC9lc20vcG9wcGVyLmpzIiwid2VicGFjazovL3RoZW1lLWZ1c2lvbi8uL25vZGVfbW9kdWxlcy90YWJiYWJsZS9kaXN0L2luZGV4LmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmb2N1c1RyYXAgZnJvbSAnZm9jdXMtdHJhcCc7XG5cbmZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gIF9yZWdlbmVyYXRvclJ1bnRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGV4cG9ydHM7XG4gIH07XG4gIHZhciBleHBvcnRzID0ge30sXG4gICAgT3AgPSBPYmplY3QucHJvdG90eXBlLFxuICAgIGhhc093biA9IE9wLmhhc093blByb3BlcnR5LFxuICAgIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5IHx8IGZ1bmN0aW9uIChvYmosIGtleSwgZGVzYykge1xuICAgICAgb2JqW2tleV0gPSBkZXNjLnZhbHVlO1xuICAgIH0sXG4gICAgJFN5bWJvbCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sXG4gICAgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiLFxuICAgIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIixcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITBcbiAgICB9KSwgb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcixcbiAgICAgIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKSxcbiAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG4gICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGdlbmVyYXRvciwgXCJfaW52b2tlXCIsIHtcbiAgICAgIHZhbHVlOiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpXG4gICAgfSksIGdlbmVyYXRvcjtcbiAgfVxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJub3JtYWxcIixcbiAgICAgICAgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwidGhyb3dcIixcbiAgICAgICAgYXJnOiBlcnJcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJiBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiYgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSAmJiAoSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSk7XG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChcInRocm93XCIgIT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnLFxuICAgICAgICAgIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgdmFsdWUgJiYgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSA/IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KSA6IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHVud3JhcHBlZCkge1xuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZCwgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgIH1cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuICAgIGRlZmluZVByb3BlcnR5KHRoaXMsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPSBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZywgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcpIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtZXRob2QsIGFyZykge1xuICAgICAgaWYgKFwiZXhlY3V0aW5nXCIgPT09IHN0YXRlKSB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgaWYgKFwiY29tcGxldGVkXCIgPT09IHN0YXRlKSB7XG4gICAgICAgIGlmIChcInRocm93XCIgPT09IG1ldGhvZCkgdGhyb3cgYXJnO1xuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuICAgICAgZm9yIChjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZCwgY29udGV4dC5hcmcgPSBhcmc7Oykge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChcIm5leHRcIiA9PT0gY29udGV4dC5tZXRob2QpIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztlbHNlIGlmIChcInRocm93XCIgPT09IGNvbnRleHQubWV0aG9kKSB7XG4gICAgICAgICAgaWYgKFwic3VzcGVuZGVkU3RhcnRcIiA9PT0gc3RhdGUpIHRocm93IHN0YXRlID0gXCJjb21wbGV0ZWRcIiwgY29udGV4dC5hcmc7XG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG4gICAgICAgIH0gZWxzZSBcInJldHVyblwiID09PSBjb250ZXh0Lm1ldGhvZCAmJiBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIHN0YXRlID0gXCJleGVjdXRpbmdcIjtcbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAoXCJub3JtYWxcIiA9PT0gcmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPSBjb250ZXh0LmRvbmUgPyBcImNvbXBsZXRlZFwiIDogXCJzdXNwZW5kZWRZaWVsZFwiLCByZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUgJiYgKHN0YXRlID0gXCJjb21wbGV0ZWRcIiwgY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZE5hbWUgPSBjb250ZXh0Lm1ldGhvZCxcbiAgICAgIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZE5hbWVdO1xuICAgIGlmICh1bmRlZmluZWQgPT09IG1ldGhvZCkgcmV0dXJuIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBcInRocm93XCIgPT09IG1ldGhvZE5hbWUgJiYgZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuICYmIChjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkLCBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSwgXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkgfHwgXCJyZXR1cm5cIiAhPT0gbWV0aG9kTmFtZSAmJiAoY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBtZXRob2RcIikpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG4gICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHJldHVybiBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbDtcbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgcmV0dXJuIGluZm8gPyBpbmZvLmRvbmUgPyAoY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWUsIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2MsIFwicmV0dXJuXCIgIT09IGNvbnRleHQubWV0aG9kICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKSA6IGluZm8gOiAoY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCk7XG4gIH1cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7XG4gICAgICB0cnlMb2M6IGxvY3NbMF1cbiAgICB9O1xuICAgIDEgaW4gbG9jcyAmJiAoZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdKSwgMiBpbiBsb2NzICYmIChlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXSwgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdKSwgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCIsIGRlbGV0ZSByZWNvcmQuYXJnLCBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbe1xuICAgICAgdHJ5TG9jOiBcInJvb3RcIlxuICAgIH1dLCB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyksIHRoaXMucmVzZXQoITApO1xuICB9XG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBpdGVyYWJsZS5uZXh0KSByZXR1cm4gaXRlcmFibGU7XG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSxcbiAgICAgICAgICBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIGZvciAoOyArK2kgPCBpdGVyYWJsZS5sZW5ndGg7KSBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSByZXR1cm4gbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldLCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgICAgICAgIHJldHVybiBuZXh0LnZhbHVlID0gdW5kZWZpbmVkLCBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGRvbmVSZXN1bHRcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICBkb25lOiAhMFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmVQcm9wZXJ0eShHcCwgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIGRlZmluZVByb3BlcnR5KEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb24sXG4gICAgY29uZmlndXJhYmxlOiAhMFxuICB9KSwgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpLCBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGdlbkZ1biAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuICEhY3RvciAmJiAoY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHwgXCJHZW5lcmF0b3JGdW5jdGlvblwiID09PSAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpKTtcbiAgfSwgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSkgOiAoZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSksIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKSwgZ2VuRnVuO1xuICB9LCBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB7XG4gICAgICBfX2F3YWl0OiBhcmdcbiAgICB9O1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpLCBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3IsIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbiAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgdm9pZCAwID09PSBQcm9taXNlSW1wbCAmJiAoUHJvbWlzZUltcGwgPSBQcm9taXNlKTtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLCBQcm9taXNlSW1wbCk7XG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKSA/IGl0ZXIgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgIH0pO1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApLCBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKSwgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSksIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICB2YXIgb2JqZWN0ID0gT2JqZWN0KHZhbCksXG4gICAgICBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkga2V5cy5wdXNoKGtleSk7XG4gICAgcmV0dXJuIGtleXMucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgZm9yICg7IGtleXMubGVuZ3RoOykge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHJldHVybiBuZXh0LnZhbHVlID0ga2V5LCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICB9O1xuICB9LCBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcywgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIChza2lwVGVtcFJlc2V0KSB7XG4gICAgICBpZiAodGhpcy5wcmV2ID0gMCwgdGhpcy5uZXh0ID0gMCwgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZCwgdGhpcy5kb25lID0gITEsIHRoaXMuZGVsZWdhdGUgPSBudWxsLCB0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLmFyZyA9IHVuZGVmaW5lZCwgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSksICFza2lwVGVtcFJlc2V0KSBmb3IgKHZhciBuYW1lIGluIHRoaXMpIFwidFwiID09PSBuYW1lLmNoYXJBdCgwKSAmJiBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJiAhaXNOYU4oK25hbWUuc2xpY2UoMSkpICYmICh0aGlzW25hbWVdID0gdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZG9uZSA9ICEwO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSB0aGlzLnRyeUVudHJpZXNbMF0uY29tcGxldGlvbjtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHJvb3RSZWNvcmQudHlwZSkgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uIChleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSBcInRocm93XCIsIHJlY29yZC5hcmcgPSBleGNlcHRpb24sIGNvbnRleHQubmV4dCA9IGxvYywgY2F1Z2h0ICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksICEhY2F1Z2h0O1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV0sXG4gICAgICAgICAgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgaWYgKFwicm9vdFwiID09PSBlbnRyeS50cnlMb2MpIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIiksXG4gICAgICAgICAgICBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNGaW5hbGx5KSB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWJydXB0OiBmdW5jdGlvbiAodHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmaW5hbGx5RW50cnkgJiYgKFwiYnJlYWtcIiA9PT0gdHlwZSB8fCBcImNvbnRpbnVlXCIgPT09IHR5cGUpICYmIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYyAmJiAoZmluYWxseUVudHJ5ID0gbnVsbCk7XG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJldHVybiByZWNvcmQudHlwZSA9IHR5cGUsIHJlY29yZC5hcmcgPSBhcmcsIGZpbmFsbHlFbnRyeSA/ICh0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYywgQ29udGludWVTZW50aW5lbCkgOiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgcmV0dXJuIFwiYnJlYWtcIiA9PT0gcmVjb3JkLnR5cGUgfHwgXCJjb250aW51ZVwiID09PSByZWNvcmQudHlwZSA/IHRoaXMubmV4dCA9IHJlY29yZC5hcmcgOiBcInJldHVyblwiID09PSByZWNvcmQudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmcsIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIiwgdGhpcy5uZXh0ID0gXCJlbmRcIikgOiBcIm5vcm1hbFwiID09PSByZWNvcmQudHlwZSAmJiBhZnRlckxvYyAmJiAodGhpcy5uZXh0ID0gYWZ0ZXJMb2MpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG4gICAgZmluaXNoOiBmdW5jdGlvbiAoZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSByZXR1cm4gdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyksIHJlc2V0VHJ5RW50cnkoZW50cnkpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2F0Y2g6IGZ1bmN0aW9uICh0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24gKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH0sIFwibmV4dFwiID09PSB0aGlzLm1ldGhvZCAmJiAodGhpcy5hcmcgPSB1bmRlZmluZWQpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfSwgZXhwb3J0cztcbn1cbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSB0YWcgb2YgYW4gZWxlbWVudCB0byBhbm90aGVyIHRhZywgZS5nLiA8cD4gdG8gPGgyPi5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgICAgIFRoZSBlbGVtZW50IHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHtzdHJpbmd9ICB0cmFuc2Zvcm1UbyBUYWcgdG8gdHJhbnNmb3JtIHRvIChlLmcuICdoMicpXG4gKiBAcmV0dXJuIHtFbGVtZW50fG51bGx9IFRyYW5zZm9ybWVkIGVsZW1lbnRcbiAqL1xudmFyIHRyYW5zZm9ybVRhZyA9IGZ1bmN0aW9uIHRyYW5zZm9ybVRhZyhlbGVtZW50LCB0cmFuc2Zvcm1Ubykge1xuICBpZiAoIWVsZW1lbnQpIHJldHVybiBudWxsO1xuICB2YXIgdHJhbnNmb3JtZWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0cmFuc2Zvcm1Ubyk7XG4gIHRyYW5zZm9ybWVkRWxlbWVudC5pbm5lckhUTUwgPSBlbGVtZW50LmlubmVySFRNTDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICB0cmFuc2Zvcm1lZEVsZW1lbnQuc2V0QXR0cmlidXRlKGVsZW1lbnQuYXR0cmlidXRlc1tpXS5uYW1lLCBlbGVtZW50LmF0dHJpYnV0ZXNbaV0udmFsdWUpO1xuICB9XG4gIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSByZXR1cm4gdHJhbnNmb3JtZWRFbGVtZW50O1xuICBlbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHRyYW5zZm9ybWVkRWxlbWVudCwgZWxlbWVudCk7XG4gIHJldHVybiB0cmFuc2Zvcm1lZEVsZW1lbnQ7XG59O1xuLyoqXG4gKiBXYWl0IGZvciBhbiBlbGVtZW50IHRvIGFwcGVhciBpbiB0aGUgRE9NIGFuZCByZXNvbHZlIHdpdGggdGhlIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIFRoZSBDU1Mgc2VsZWN0b3IgZm9yIHRoZSBlbGVtZW50IHRvIHdhaXQgZm9yXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4VGltZVRvU2VhcmNoICBUaGUgbWF4aW11bSB0aW1lIHRvIHdhaXQgZm9yIHRoZSBlbGVtZW50LCBpbiBtaWxsaXNlY29uZHNcbiAqIEByZXR1cm4ge1Byb21pc2U8Tm9kZUxpc3RPZjxFbGVtZW50PiB8IEVsZW1lbnQ+fSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBlbGVtZW50IHdoZW4gaXQgYXBwZWFycyBpbiB0aGUgRE9NXG4gKiBAdGhyb3dzIHtzdHJpbmd9IElmIHRoZSBlbGVtZW50IGRvZXMgbm90IGFwcGVhciBpbiB0aGUgRE9NIGJlZm9yZSB0aGUgdGltZW91dCBpcyByZWFjaGVkXG4gKi9cbnZhciB3YWl0Rm9yRWxlbWVudCA9IGZ1bmN0aW9uIHdhaXRGb3JFbGVtZW50KHNlbGVjdG9yLCBtYXhUaW1lVG9TZWFyY2gpIHtcbiAgaWYgKG1heFRpbWVUb1NlYXJjaCA9PT0gdm9pZCAwKSB7XG4gICAgbWF4VGltZVRvU2VhcmNoID0gNTAwMDtcbiAgfVxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxuICAgICAgICBoYXNFbGVtZW50cyA9IGVsZW1lbnRzLmxlbmd0aCA+IDAsXG4gICAgICAgIGlzU2luZ2xlRWxlbWVudCA9IGVsZW1lbnRzLmxlbmd0aCA9PT0gMTtcbiAgICAgIGlmIChoYXNFbGVtZW50cykge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgcmVzb2x2ZShpc1NpbmdsZUVsZW1lbnQgPyBlbGVtZW50c1swXSA6IGVsZW1lbnRzKTtcbiAgICAgIH0gZWxzZSBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSA+PSBtYXhUaW1lVG9TZWFyY2gpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJUaW1lb3V0IGV4Y2VlZGVkLiBFbGVtZW50ICdcIiArIHNlbGVjdG9yICsgXCInIG5vdCBmb3VuZCB3aXRoaW4gdGltZWxpbWl0LlwiKSk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfSk7XG59O1xuLyoqXG4gKiBUaGUgZWxlbWVudCBoYXMgdmlzaWJpbGl0eTogaGlkZGVuLCB3aGljaCBtYWtlcyBpdCBpbml0aWFsbHkgdW4tZm9jdXNhYmxlLCBjcmVhdGluZyBhbiBlcnJvci5cbiAqIFRoaXMgZW5zdXJlcyBhbiB3YWl0IHVudGlsIGl0IGNhbiBhY3RpdmF0ZSB0aGUgdHJhcC5cbiAqIE5hbWluZyBvZiB0aGlzIGZ1bmN0aW9uIGNhbm5vdCBiZSBjaGFuZ2VkIHNpbmNlIGl0IGlzIHNlYXJjaGVkIGZvciBieSBmb2N1cy10cmFwIHBhY2thZ2VcbiAqIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2ZvY3VzLXRyYXAjOn46dGV4dD1tYW5hZ2luZy90cmFwcGluZyUyMGZvY3VzLi0sY2hlY2tDYW5Gb2N1c1RyYXAsXHQlN0IoY29udGFpbmVycyUzQSUyMEFycmF5JTNDSFRNTEVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudFtdfSBlbGVtZW50cyBUaGUgZWxlbWVudHMgdG8gY2hlY2sgZm9yIHZpc2liaWxpdHlcbiAqL1xudmFyIGNoZWNrQ2FuRm9jdXNUcmFwID0gZnVuY3Rpb24gY2hlY2tDYW5Gb2N1c1RyYXAoZWxlbWVudHMpIHtcbiAgdmFyIHJlc3VsdHMgPSBlbGVtZW50cy5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgICAgIGlmIChzdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJyAmJiBzdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiYgc3R5bGUuaGVpZ2h0ICE9PSAnMHB4JyAmJiBzdHlsZS53aWR0aCAhPT0gJzBweCcpIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDUpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQ2xhc3MgZGVmaW5pdGlvbnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBBMTF5Q29va2llWWVzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IENvbnN0cnVjdG9yID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZnVuY3Rpb24gQTExeUNvb2tpZVllcyhvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB0aGlzLm9wdGlvbnMgPSB2b2lkIDA7XG4gICAgdGhpcy5FTUJFRF9CTE9DS0VSX05FV19DTEFTU19DU1MgPSAnLmNreS1iYW5uZXItZWxlbWVudCc7XG4gICAgdGhpcy5FTUJFRF9CTE9DS0VSX0JVVFRPTl9DU1MgPSAnW2RhdGEtY2t5LXRhZz1cInBsYWNlaG9sZGVyLXRpdGxlXCJdJztcbiAgICB0aGlzLkNPT0tJRV9ZRVNfSElEREVOX0NTUyA9ICcuY2t5LWhpZGUnO1xuICAgIHRoaXMuQkFOTkVSX1RJVExFX0NTUyA9ICcuY2t5LXRpdGxlJztcbiAgICB0aGlzLkJBTk5FUl9CVE5fQ0xPU0VfQ1NTID0gJy5ja3ktYmFubmVyLWJ0bi1jbG9zZSc7XG4gICAgdGhpcy5NT0RBTF9PUEVOX0NTUyA9ICcuY2t5LW1vZGFsLW9wZW4nO1xuICAgIHRoaXMuTU9EQUxfQlROX0NMT1NFX0NTUyA9ICcuY2t5LW1vZGFsIC5ja3ktYnRuLWNsb3NlJztcbiAgICB0aGlzLk1PREFMX0JUTl9DTE9TRV9BUklBX0xBQkVMID0gJ1NsdWl0JztcbiAgICB0aGlzLk1PREFMX1RJVExFX0NTUyA9ICcuY2t5LXByZWZlcmVuY2UtdGl0bGUnO1xuICAgIHRoaXMuTU9EQUxfQUNDT1JESU9OX0NTUyA9ICcuY2t5LWFjY29yZGlvbic7XG4gICAgdGhpcy5NT0RBTF9BQ0NPUkRJT05fQlROX0NTUyA9ICcuY2t5LWFjY29yZGlvbi1idG4nO1xuICAgIHRoaXMuTU9EQUxfQUNDT1JESU9OX09QRU5fQ1NTID0gJy5ja3ktYWNjb3JkaW9uLWFjdGl2ZSc7XG4gICAgdGhpcy5DT09LSUVfQkFOTkVSX0NTUyA9ICcuY2t5LWNvbnNlbnQtY29udGFpbmVyJztcbiAgICB0aGlzLkNPT0tJRV9NT0RBTF9DU1MgPSAnLmNreS1tb2RhbCc7XG4gICAgdGhpcy5jb29raWVNb2RhbCA9IHZvaWQgMDtcbiAgICB0aGlzLmNvb2tpZUJhbm5lciA9IHZvaWQgMDtcbiAgICB0aGlzLmZvY3VzVHJhcEJhbm5lciA9IHZvaWQgMDtcbiAgICB0aGlzLmZvY3VzVHJhcE1vZGFsID0gdm9pZCAwO1xuICAgIHRoaXMuZm9jdXNUcmFwQmFubmVyT3B0aW9ucyA9IHZvaWQgMDtcbiAgICB0aGlzLmZvY3VzVHJhcE1vZGFsT3B0aW9ucyA9IHZvaWQgMDtcbiAgICB0aGlzLmZvY3VzVHJhcE9wdGlvbnMgPSB7XG4gICAgICBhbGxvd091dHNpZGVDbGljazogdHJ1ZSxcbiAgICAgIGNsaWNrT3V0c2lkZURlYWN0aXZhdGVzOiB0cnVlLFxuICAgICAgY2hlY2tDYW5Gb2N1c1RyYXA6IGNoZWNrQ2FuRm9jdXNUcmFwXG4gICAgfTtcbiAgICB0aGlzLmNsb3NlQ29va2llWWVzID0gZnVuY3Rpb24gKGVsZW1lbnRTZWxlY3Rvcikge1xuICAgICAgdmFyIGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50U2VsZWN0b3IpO1xuICAgICAgaWYgKCFjbG9zZUJ1dHRvbiB8fCBjbG9zZUJ1dHRvbi5jbG9zZXN0KF90aGlzLkNPT0tJRV9ZRVNfSElEREVOX0NTUykpIHJldHVybjtcbiAgICAgIGNsb3NlQnV0dG9uLmNsaWNrKCk7XG4gICAgfTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGlmIChBMTF5Q29va2llWWVzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gQTExeUNvb2tpZVllcy5pbnN0YW5jZTtcbiAgICB9XG4gICAgLy8gdHJhcE9wdGlvbnMgZGVjbGFyZWQgaGVyZSBzaW5jZSBzcHJlYWRvcGVyYXRvciBjYW50IGJlIHVzZWQgaW4gY2xhc3MgcHJvcGVydGllc1xuICAgIHRoaXMuZm9jdXNUcmFwQmFubmVyT3B0aW9ucyA9IF9leHRlbmRzKHt9LCB0aGlzLmZvY3VzVHJhcE9wdGlvbnMsIHtcbiAgICAgIC8vIEJ5IGRlZmF1bHQgQ29va2llWWVzIGhhcyB0aGUgYmFubmVyIGNsb3NlIGJ1dHRvbiByZW1vdmVkIGZyb20gdGhlIERPTSwgdW5sZXNzIHlvdSBlbmFibGUgdGhlIHNldHRpbmcuXG4gICAgICBvbkRlYWN0aXZhdGU6IGZ1bmN0aW9uIG9uRGVhY3RpdmF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNsb3NlQ29va2llWWVzKF90aGlzLkJBTk5FUl9CVE5fQ0xPU0VfQ1NTKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmZvY3VzVHJhcE1vZGFsT3B0aW9ucyA9IF9leHRlbmRzKHt9LCB0aGlzLmZvY3VzVHJhcE9wdGlvbnMsIHtcbiAgICAgIG9uRGVhY3RpdmF0ZTogZnVuY3Rpb24gb25EZWFjdGl2YXRlKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY2xvc2VDb29raWVZZXMoX3RoaXMuTU9EQUxfQlROX0NMT1NFX0NTUyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gQ29kZSBpcyBleGVjdXRlZCBmcm9tIGluaXQgZnVuY3Rpb24gYmVjYXVzZSBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgYXN5bmMuXG4gICAgdGhpcy5pbml0KCk7XG4gICAgQTExeUNvb2tpZVllcy5pbnN0YW5jZSA9IHRoaXM7XG4gIH1cbiAgQTExeUNvb2tpZVllcy5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uIGdldEluc3RhbmNlKCkge1xuICAgIHJldHVybiBBMTF5Q29va2llWWVzLmluc3RhbmNlO1xuICB9O1xuICB2YXIgX3Byb3RvID0gQTExeUNvb2tpZVllcy5wcm90b3R5cGU7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSW5pdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIF9wcm90by5pbml0ID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9pbml0ID0gLyojX19QVVJFX18qL19hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZSgpLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lKCkud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIHdhaXRGb3JFbGVtZW50KHRoaXMuQ09PS0lFX0JBTk5FUl9DU1MpO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHRoaXMuY29va2llQmFubmVyID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA1O1xuICAgICAgICAgICAgcmV0dXJuIHdhaXRGb3JFbGVtZW50KHRoaXMuQ09PS0lFX01PREFMX0NTUyk7XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgdGhpcy5jb29raWVNb2RhbCA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICBpZiAoISghdGhpcy5jb29raWVCYW5uZXIgfHwgIXRoaXMuY29va2llTW9kYWwpKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA4O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgZmFsc2UpO1xuICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIHRoaXMuZm9jdXNUcmFwQmFubmVyID0gZm9jdXNUcmFwLmNyZWF0ZUZvY3VzVHJhcCh0aGlzLmNvb2tpZUJhbm5lciwgdGhpcy5mb2N1c1RyYXBCYW5uZXJPcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNUcmFwTW9kYWwgPSBmb2N1c1RyYXAuY3JlYXRlRm9jdXNUcmFwKHRoaXMuY29va2llTW9kYWwsIHRoaXMuZm9jdXNUcmFwTW9kYWxPcHRpb25zKTtcbiAgICAgICAgICAgIC8vIEJhbm5lclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlQmFubmVyKCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUJhbm5lclRpdGxlVG9IMigpO1xuICAgICAgICAgICAgLy8gTW9kYWxcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZU1vZGFsKCk7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVBY2NvcmRpb25zKCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZU1vZGFsVGl0bGVUb0gyKCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZU1vZGFsQ2xvc2VCdG5BcmlhTGFiZWwoKTtcbiAgICAgICAgICAgIC8vIFBhZ2VcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRW1iZWRUZXh0KCk7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIHRoaXMpO1xuICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgfSkpO1xuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICByZXR1cm4gX2luaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIGluaXQ7XG4gIH0oKSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQmFubmVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvKipcbiAgICogQTExeTogdHJhcCBmb2N1cyBpbiBiYW5uZXIgd2hlbiB0aGUgYWNjZXB0IGFsbCBidXR0b24gaXMgZm9jdXNlZFxuICAgKi9cbiAgO1xuICBfcHJvdG8ub2JzZXJ2ZUJhbm5lciA9IGZ1bmN0aW9uIG9ic2VydmVCYW5uZXIoKSB7XG4gICAgdmFyIF90aGlzJGNvb2tpZUJhbm5lcixcbiAgICAgIF90aGlzJGZvY3VzVHJhcEJhbm5lcjIsXG4gICAgICBfdGhpczIgPSB0aGlzO1xuICAgIC8vIENoZWNrIGlmIGNvb2tpZWJhbm5lciBpcyBjdXJyZW50bHkgdmlzaWJsZVxuICAgIGlmICgoX3RoaXMkY29va2llQmFubmVyID0gdGhpcy5jb29raWVCYW5uZXIpICE9IG51bGwgJiYgX3RoaXMkY29va2llQmFubmVyLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNPT0tJRV9ZRVNfSElEREVOX0NTUy5zdWJzdHJpbmcoMSkpKSB7XG4gICAgICB2YXIgX3RoaXMkZm9jdXNUcmFwQmFubmVyO1xuICAgICAgKF90aGlzJGZvY3VzVHJhcEJhbm5lciA9IHRoaXMuZm9jdXNUcmFwQmFubmVyKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkZm9jdXNUcmFwQmFubmVyLmRlYWN0aXZhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKF90aGlzJGZvY3VzVHJhcEJhbm5lcjIgPSB0aGlzLmZvY3VzVHJhcEJhbm5lcikgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJGZvY3VzVHJhcEJhbm5lcjIuYWN0aXZhdGUoKTtcbiAgICAvLyBDaGVjayBpZiB0aGUgYmFubmVyIHN0YXlzIHZpc2libGVcbiAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzMiRmb2N1c1RyYXBCYW5uZSwgX3RoaXMyJGZvY3VzVHJhcEJhbm5lMjtcbiAgICAgICAgdmFyIGJhbm5lcklzSGlkZGVuID0gbXV0YXRpb24udGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhfdGhpczIuQ09PS0lFX1lFU19ISURERU5fQ1NTLnN1YnN0cmluZygxKSk7XG4gICAgICAgIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcycgJiYgYmFubmVySXNIaWRkZW4gPyAoX3RoaXMyJGZvY3VzVHJhcEJhbm5lID0gX3RoaXMyLmZvY3VzVHJhcEJhbm5lcikgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzMiRmb2N1c1RyYXBCYW5uZS5kZWFjdGl2YXRlKCkgOiAoX3RoaXMyJGZvY3VzVHJhcEJhbm5lMiA9IF90aGlzMi5mb2N1c1RyYXBCYW5uZXIpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpczIkZm9jdXNUcmFwQmFubmUyLmFjdGl2YXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRoaXMuY29va2llQmFubmVyLCB7XG4gICAgICBhdHRyaWJ1dGVzOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEExMXk6IHRyYW5zZm9ybSBtb2RhbCB0aXRsZSB0byBoMlxuICAgKi87XG4gIF9wcm90by5jaGFuZ2VCYW5uZXJUaXRsZVRvSDIgPSBmdW5jdGlvbiBjaGFuZ2VCYW5uZXJUaXRsZVRvSDIoKSB7XG4gICAgdmFyIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLkJBTk5FUl9USVRMRV9DU1MpO1xuICAgIGlmICghdGl0bGUpIHJldHVybjtcbiAgICB0cmFuc2Zvcm1UYWcodGl0bGUsICdoMicpO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1vZGFsID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8qKlxuICAgKiBBMTF5OiBPYnNlcnZlcyB0aGUgY29va2llIG1vZGFsIGZvciBjaGFuZ2VzXG4gICAqLztcbiAgX3Byb3RvLm9ic2VydmVNb2RhbCA9IGZ1bmN0aW9uIG9ic2VydmVNb2RhbCgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcbiAgICBpZiAoIXRoaXMuY29va2llTW9kYWwpIHJldHVybjtcbiAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIG1vZGFsIG9wZW5zXG4gICAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT0gJ2NsYXNzJyAmJiB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhfdGhpczMuTU9EQUxfT1BFTl9DU1Muc3Vic3RyaW5nKDEpKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIF90aGlzMy5mb2N1c1RyYXBNb2RhbC5hY3RpdmF0ZSgpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gSWYgdGhlIG1vZGFsIGNsb3Nlc1xuICAgICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09ICdjbGFzcycgJiYgIXRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKF90aGlzMy5NT0RBTF9PUEVOX0NTUy5zdWJzdHJpbmcoMSkpKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzJGZvY3VzVHJhcE1vZGFsO1xuICAgICAgICAgICAgKF90aGlzMyRmb2N1c1RyYXBNb2RhbCA9IF90aGlzMy5mb2N1c1RyYXBNb2RhbCkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzMyRmb2N1c1RyYXBNb2RhbC5kZWFjdGl2YXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRoaXMuY29va2llTW9kYWwsIHtcbiAgICAgIGF0dHJpYnV0ZXM6IHRydWVcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQTExeTogb2JzZXJ2ZSBhY2NvcmRpb25zIGZvciBjaGFuZ2VzIHRvIHVwZGF0ZSBhcmlhLWV4cGFuZGVkXG4gICAqLztcbiAgX3Byb3RvLm9ic2VydmVBY2NvcmRpb25zID0gZnVuY3Rpb24gb2JzZXJ2ZUFjY29yZGlvbnMoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG4gICAgdmFyIGFjY29yZGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuTU9EQUxfQUNDT1JESU9OX0NTUyk7XG4gICAgYWNjb3JkaW9ucyA9PSBudWxsID8gdm9pZCAwIDogYWNjb3JkaW9ucy5mb3JFYWNoKGZ1bmN0aW9uICh3cmFwcGVyKSB7XG4gICAgICB2YXIgYnV0dG9uID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKF90aGlzNC5NT0RBTF9BQ0NPUkRJT05fQlROX0NTUyk7XG4gICAgICBidXR0b24gPT0gbnVsbCA/IHZvaWQgMCA6IGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgbXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICAgICAgdmFyIG5ld0FyaWFTdGF0ZSA9IHdyYXBwZXIgPT0gbnVsbCA/IHZvaWQgMCA6IHdyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKF90aGlzNC5NT0RBTF9BQ0NPUkRJT05fT1BFTl9DU1Muc3Vic3RyaW5nKDEpKS50b1N0cmluZygpO1xuICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgICAgIGJ1dHRvbiA9PSBudWxsID8gdm9pZCAwIDogYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIG5ld0FyaWFTdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh3cmFwcGVyLCB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHRydWVcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBBMTF5OiB0cmFuc2Zvcm0gbW9kYWwgdGl0bGUgdG8gaDJcbiAgICovO1xuICBfcHJvdG8uY2hhbmdlTW9kYWxUaXRsZVRvSDIgPSBmdW5jdGlvbiBjaGFuZ2VNb2RhbFRpdGxlVG9IMigpIHtcbiAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuTU9EQUxfVElUTEVfQ1NTKTtcbiAgICBpZiAoIXRpdGxlKSByZXR1cm47XG4gICAgdHJhbnNmb3JtVGFnKHRpdGxlLCAnaDInKTtcbiAgfVxuICAvKipcbiAgICogQTExeTogQ2hhbmdlIGFyaWEtbGFiZWwgY2xvc2UgYnV0dG9uIGluIG1vZGFsXG4gICAqLztcbiAgX3Byb3RvLmNoYW5nZU1vZGFsQ2xvc2VCdG5BcmlhTGFiZWwgPSBmdW5jdGlvbiBjaGFuZ2VNb2RhbENsb3NlQnRuQXJpYUxhYmVsKCkge1xuICAgIHZhciBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5NT0RBTF9CVE5fQ0xPU0VfQ1NTKTtcbiAgICBpZiAoIWNsb3NlQnV0dG9uKSByZXR1cm47XG4gICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGhpcy5NT0RBTF9CVE5fQ0xPU0VfQVJJQV9MQUJFTCk7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFBhZ2UgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLyoqXG4gICAqIE1ha2UgdGhlIGFjY2VwdCB0ZXh0IHdoaWNoIGFwcGVhcnMgd2hlbiB0aGUgdXNlciBoYXMgbm90IGFjY2VwdGVkIGNvb2tpZXMgYWNjZXNzaWJsZVxuICAgKiBsaWtlIGEgYnV0dG9uLiBDaGFuZ2luZyB0aGUgPHA+IHRvIGEgPGJ1dHRvbj4gd2lsbCBsb3NlIHRoZSBldmVudCBsaXN0ZW5lci5cbiAgICovO1xuICBfcHJvdG8uY2hhbmdlRW1iZWRUZXh0ID0gZnVuY3Rpb24gY2hhbmdlRW1iZWRUZXh0KCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuICAgIHZhciBhY2NlcHRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLkVNQkVEX0JMT0NLRVJfQlVUVE9OX0NTUyk7XG4gICAgYWNjZXB0VGV4dCA9PSBudWxsID8gdm9pZCAwIDogYWNjZXB0VGV4dC5mb3JFYWNoKGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICB2YXIgYnV0dG9uID0gdHJhbnNmb3JtVGFnKHRleHQsICdidXR0b24nKTtcbiAgICAgIGlmICghYnV0dG9uKSByZXR1cm47XG4gICAgICAvLyBUaGlzIHNwZWNpYWwgY2xhc3NuYW1lcyBpcyBkZXRlY3RlZCBieSBjb29raWUteWVzIGFuZCB3aWxsIHRyaWdnZXIgYSByZW9wZW5pbmcgb2YgdGhlIG1vZGFsIHdoZW4gY2xpY2tlZFxuICAgICAgLy8gQHNlZSBodHRwczovL3d3dy5jb29raWV5ZXMuY29tL2RvY3VtZW50YXRpb24vY2hhbmdlLWNvb2tpZS1jb25zZW50LXVzaW5nLWNvb2tpZXllcy9cbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKF90aGlzNS5FTUJFRF9CTE9DS0VSX05FV19DTEFTU19DU1Muc3Vic3RyaW5nKDEpKTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIEExMXlDb29raWVZZXM7XG59KCk7XG5BMTF5Q29va2llWWVzLmluc3RhbmNlID0gLyojX19QVVJFX18qL25ldyBBMTF5Q29va2llWWVzKCk7XG5cbmV4cG9ydCB7IEExMXlDb29raWVZZXMgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YTExeS1jb29raWUteWVzLmVzbS5qcy5tYXBcbiIsImZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG4vLyBPbGRlciBicm93c2VycyBkb24ndCBzdXBwb3J0IGV2ZW50IG9wdGlvbnMsIGZlYXR1cmUgZGV0ZWN0IGl0LlxuXG4vLyBBZG9wdGVkIGFuZCBtb2RpZmllZCBzb2x1dGlvbiBmcm9tIEJvaGRhbiBEaWR1a2ggKDIwMTcpXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80MTU5NDk5Ny9pb3MtMTAtc2FmYXJpLXByZXZlbnQtc2Nyb2xsaW5nLWJlaGluZC1hLWZpeGVkLW92ZXJsYXktYW5kLW1haW50YWluLXNjcm9sbC1wb3NpXG5cbnZhciBoYXNQYXNzaXZlRXZlbnRzID0gZmFsc2U7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIHBhc3NpdmVUZXN0T3B0aW9ucyA9IHtcbiAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgIGhhc1Bhc3NpdmVFdmVudHMgPSB0cnVlO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIHBhc3NpdmVUZXN0T3B0aW9ucyk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIHBhc3NpdmVUZXN0T3B0aW9ucyk7XG59XG5cbnZhciBpc0lvc0RldmljZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybSAmJiAoL2lQKGFkfGhvbmV8b2QpLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0pIHx8IHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdNYWNJbnRlbCcgJiYgd2luZG93Lm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDEpO1xuXG5cbnZhciBsb2NrcyA9IFtdO1xudmFyIGRvY3VtZW50TGlzdGVuZXJBZGRlZCA9IGZhbHNlO1xudmFyIGluaXRpYWxDbGllbnRZID0gLTE7XG52YXIgcHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nID0gdm9pZCAwO1xudmFyIHByZXZpb3VzQm9keVBhZGRpbmdSaWdodCA9IHZvaWQgMDtcblxuLy8gcmV0dXJucyB0cnVlIGlmIGBlbGAgc2hvdWxkIGJlIGFsbG93ZWQgdG8gcmVjZWl2ZSB0b3VjaG1vdmUgZXZlbnRzLlxudmFyIGFsbG93VG91Y2hNb3ZlID0gZnVuY3Rpb24gYWxsb3dUb3VjaE1vdmUoZWwpIHtcbiAgcmV0dXJuIGxvY2tzLnNvbWUoZnVuY3Rpb24gKGxvY2spIHtcbiAgICBpZiAobG9jay5vcHRpb25zLmFsbG93VG91Y2hNb3ZlICYmIGxvY2sub3B0aW9ucy5hbGxvd1RvdWNoTW92ZShlbCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59O1xuXG52YXIgcHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChyYXdFdmVudCkge1xuICB2YXIgZSA9IHJhd0V2ZW50IHx8IHdpbmRvdy5ldmVudDtcblxuICAvLyBGb3IgdGhlIGNhc2Ugd2hlcmVieSBjb25zdW1lcnMgYWRkcyBhIHRvdWNobW92ZSBldmVudCBsaXN0ZW5lciB0byBkb2N1bWVudC5cbiAgLy8gUmVjYWxsIHRoYXQgd2UgZG8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudERlZmF1bHQsIHsgcGFzc2l2ZTogZmFsc2UgfSlcbiAgLy8gaW4gZGlzYWJsZUJvZHlTY3JvbGwgLSBzbyBpZiB3ZSBwcm92aWRlIHRoaXMgb3Bwb3J0dW5pdHkgdG8gYWxsb3dUb3VjaE1vdmUsIHRoZW5cbiAgLy8gdGhlIHRvdWNobW92ZSBldmVudCBvbiBkb2N1bWVudCB3aWxsIGJyZWFrLlxuICBpZiAoYWxsb3dUb3VjaE1vdmUoZS50YXJnZXQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBEbyBub3QgcHJldmVudCBpZiB0aGUgZXZlbnQgaGFzIG1vcmUgdGhhbiBvbmUgdG91Y2ggKHVzdWFsbHkgbWVhbmluZyB0aGlzIGlzIGEgbXVsdGkgdG91Y2ggZ2VzdHVyZSBsaWtlIHBpbmNoIHRvIHpvb20pLlxuICBpZiAoZS50b3VjaGVzLmxlbmd0aCA+IDEpIHJldHVybiB0cnVlO1xuXG4gIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIHNldE92ZXJmbG93SGlkZGVuID0gZnVuY3Rpb24gc2V0T3ZlcmZsb3dIaWRkZW4ob3B0aW9ucykge1xuICAvLyBJZiBwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQgaXMgYWxyZWFkeSBzZXQsIGRvbid0IHNldCBpdCBhZ2Fpbi5cbiAgaWYgKHByZXZpb3VzQm9keVBhZGRpbmdSaWdodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIF9yZXNlcnZlU2Nyb2xsQmFyR2FwID0gISFvcHRpb25zICYmIG9wdGlvbnMucmVzZXJ2ZVNjcm9sbEJhckdhcCA9PT0gdHJ1ZTtcbiAgICB2YXIgc2Nyb2xsQmFyR2FwID0gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICBpZiAoX3Jlc2VydmVTY3JvbGxCYXJHYXAgJiYgc2Nyb2xsQmFyR2FwID4gMCkge1xuICAgICAgcHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0ID0gZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHNjcm9sbEJhckdhcCArICdweCc7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgcHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nIGlzIGFscmVhZHkgc2V0LCBkb24ndCBzZXQgaXQgYWdhaW4uXG4gIGlmIChwcmV2aW91c0JvZHlPdmVyZmxvd1NldHRpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZyA9IGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3c7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICB9XG59O1xuXG52YXIgcmVzdG9yZU92ZXJmbG93U2V0dGluZyA9IGZ1bmN0aW9uIHJlc3RvcmVPdmVyZmxvd1NldHRpbmcoKSB7XG4gIGlmIChwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0O1xuXG4gICAgLy8gUmVzdG9yZSBwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQgdG8gdW5kZWZpbmVkIHNvIHNldE92ZXJmbG93SGlkZGVuIGtub3dzIGl0XG4gICAgLy8gY2FuIGJlIHNldCBhZ2Fpbi5cbiAgICBwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAocHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gcHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nO1xuXG4gICAgLy8gUmVzdG9yZSBwcmV2aW91c0JvZHlPdmVyZmxvd1NldHRpbmcgdG8gdW5kZWZpbmVkXG4gICAgLy8gc28gc2V0T3ZlcmZsb3dIaWRkZW4ga25vd3MgaXQgY2FuIGJlIHNldCBhZ2Fpbi5cbiAgICBwcmV2aW91c0JvZHlPdmVyZmxvd1NldHRpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbn07XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L3Njcm9sbEhlaWdodCNQcm9ibGVtc19hbmRfc29sdXRpb25zXG52YXIgaXNUYXJnZXRFbGVtZW50VG90YWxseVNjcm9sbGVkID0gZnVuY3Rpb24gaXNUYXJnZXRFbGVtZW50VG90YWxseVNjcm9sbGVkKHRhcmdldEVsZW1lbnQpIHtcbiAgcmV0dXJuIHRhcmdldEVsZW1lbnQgPyB0YXJnZXRFbGVtZW50LnNjcm9sbEhlaWdodCAtIHRhcmdldEVsZW1lbnQuc2Nyb2xsVG9wIDw9IHRhcmdldEVsZW1lbnQuY2xpZW50SGVpZ2h0IDogZmFsc2U7XG59O1xuXG52YXIgaGFuZGxlU2Nyb2xsID0gZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIHZhciBjbGllbnRZID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZIC0gaW5pdGlhbENsaWVudFk7XG5cbiAgaWYgKGFsbG93VG91Y2hNb3ZlKGV2ZW50LnRhcmdldCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGFyZ2V0RWxlbWVudCAmJiB0YXJnZXRFbGVtZW50LnNjcm9sbFRvcCA9PT0gMCAmJiBjbGllbnRZID4gMCkge1xuICAgIC8vIGVsZW1lbnQgaXMgYXQgdGhlIHRvcCBvZiBpdHMgc2Nyb2xsLlxuICAgIHJldHVybiBwcmV2ZW50RGVmYXVsdChldmVudCk7XG4gIH1cblxuICBpZiAoaXNUYXJnZXRFbGVtZW50VG90YWxseVNjcm9sbGVkKHRhcmdldEVsZW1lbnQpICYmIGNsaWVudFkgPCAwKSB7XG4gICAgLy8gZWxlbWVudCBpcyBhdCB0aGUgYm90dG9tIG9mIGl0cyBzY3JvbGwuXG4gICAgcmV0dXJuIHByZXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgfVxuXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCB2YXIgZGlzYWJsZUJvZHlTY3JvbGwgPSBmdW5jdGlvbiBkaXNhYmxlQm9keVNjcm9sbCh0YXJnZXRFbGVtZW50LCBvcHRpb25zKSB7XG4gIC8vIHRhcmdldEVsZW1lbnQgbXVzdCBiZSBwcm92aWRlZFxuICBpZiAoIXRhcmdldEVsZW1lbnQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ2Rpc2FibGVCb2R5U2Nyb2xsIHVuc3VjY2Vzc2Z1bCAtIHRhcmdldEVsZW1lbnQgbXVzdCBiZSBwcm92aWRlZCB3aGVuIGNhbGxpbmcgZGlzYWJsZUJvZHlTY3JvbGwgb24gSU9TIGRldmljZXMuJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gZGlzYWJsZUJvZHlTY3JvbGwgbXVzdCBub3QgaGF2ZSBiZWVuIGNhbGxlZCBvbiB0aGlzIHRhcmdldEVsZW1lbnQgYmVmb3JlXG4gIGlmIChsb2Nrcy5zb21lKGZ1bmN0aW9uIChsb2NrKSB7XG4gICAgcmV0dXJuIGxvY2sudGFyZ2V0RWxlbWVudCA9PT0gdGFyZ2V0RWxlbWVudDtcbiAgfSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbG9jayA9IHtcbiAgICB0YXJnZXRFbGVtZW50OiB0YXJnZXRFbGVtZW50LFxuICAgIG9wdGlvbnM6IG9wdGlvbnMgfHwge31cbiAgfTtcblxuICBsb2NrcyA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkobG9ja3MpLCBbbG9ja10pO1xuXG4gIGlmIChpc0lvc0RldmljZSkge1xuICAgIHRhcmdldEVsZW1lbnQub250b3VjaHN0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0VG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gZGV0ZWN0IHNpbmdsZSB0b3VjaC5cbiAgICAgICAgaW5pdGlhbENsaWVudFkgPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0YXJnZXRFbGVtZW50Lm9udG91Y2htb3ZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0VG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gZGV0ZWN0IHNpbmdsZSB0b3VjaC5cbiAgICAgICAgaGFuZGxlU2Nyb2xsKGV2ZW50LCB0YXJnZXRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFkb2N1bWVudExpc3RlbmVyQWRkZWQpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnREZWZhdWx0LCBoYXNQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogdW5kZWZpbmVkKTtcbiAgICAgIGRvY3VtZW50TGlzdGVuZXJBZGRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNldE92ZXJmbG93SGlkZGVuKG9wdGlvbnMpO1xuICB9XG59O1xuXG5leHBvcnQgdmFyIGNsZWFyQWxsQm9keVNjcm9sbExvY2tzID0gZnVuY3Rpb24gY2xlYXJBbGxCb2R5U2Nyb2xsTG9ja3MoKSB7XG4gIGlmIChpc0lvc0RldmljZSkge1xuICAgIC8vIENsZWFyIGFsbCBsb2NrcyBvbnRvdWNoc3RhcnQvb250b3VjaG1vdmUgaGFuZGxlcnMsIGFuZCB0aGUgcmVmZXJlbmNlcy5cbiAgICBsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uIChsb2NrKSB7XG4gICAgICBsb2NrLnRhcmdldEVsZW1lbnQub250b3VjaHN0YXJ0ID0gbnVsbDtcbiAgICAgIGxvY2sudGFyZ2V0RWxlbWVudC5vbnRvdWNobW92ZSA9IG51bGw7XG4gICAgfSk7XG5cbiAgICBpZiAoZG9jdW1lbnRMaXN0ZW5lckFkZGVkKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50RGVmYXVsdCwgaGFzUGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IHVuZGVmaW5lZCk7XG4gICAgICBkb2N1bWVudExpc3RlbmVyQWRkZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBSZXNldCBpbml0aWFsIGNsaWVudFkuXG4gICAgaW5pdGlhbENsaWVudFkgPSAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXN0b3JlT3ZlcmZsb3dTZXR0aW5nKCk7XG4gIH1cblxuICBsb2NrcyA9IFtdO1xufTtcblxuZXhwb3J0IHZhciBlbmFibGVCb2R5U2Nyb2xsID0gZnVuY3Rpb24gZW5hYmxlQm9keVNjcm9sbCh0YXJnZXRFbGVtZW50KSB7XG4gIGlmICghdGFyZ2V0RWxlbWVudCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignZW5hYmxlQm9keVNjcm9sbCB1bnN1Y2Nlc3NmdWwgLSB0YXJnZXRFbGVtZW50IG11c3QgYmUgcHJvdmlkZWQgd2hlbiBjYWxsaW5nIGVuYWJsZUJvZHlTY3JvbGwgb24gSU9TIGRldmljZXMuJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbG9ja3MgPSBsb2Nrcy5maWx0ZXIoZnVuY3Rpb24gKGxvY2spIHtcbiAgICByZXR1cm4gbG9jay50YXJnZXRFbGVtZW50ICE9PSB0YXJnZXRFbGVtZW50O1xuICB9KTtcblxuICBpZiAoaXNJb3NEZXZpY2UpIHtcbiAgICB0YXJnZXRFbGVtZW50Lm9udG91Y2hzdGFydCA9IG51bGw7XG4gICAgdGFyZ2V0RWxlbWVudC5vbnRvdWNobW92ZSA9IG51bGw7XG5cbiAgICBpZiAoZG9jdW1lbnRMaXN0ZW5lckFkZGVkICYmIGxvY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudERlZmF1bHQsIGhhc1Bhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiB1bmRlZmluZWQpO1xuICAgICAgZG9jdW1lbnRMaXN0ZW5lckFkZGVkID0gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKCFsb2Nrcy5sZW5ndGgpIHtcbiAgICByZXN0b3JlT3ZlcmZsb3dTZXR0aW5nKCk7XG4gIH1cbn07XG5cbiIsIi8qIVxuICAqIEJvb3RzdHJhcCBjb2xsYXBzZS5qcyB2NC42LjIgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gICogQ29weXJpZ2h0IDIwMTEtMjAyMiBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpLCByZXF1aXJlKCcuL3V0aWwuanMnKSkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydqcXVlcnknLCAnLi91dGlsJ10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLkNvbGxhcHNlID0gZmFjdG9yeShnbG9iYWwualF1ZXJ5LCBnbG9iYWwuVXRpbCkpO1xufSkodGhpcywgKGZ1bmN0aW9uICgkLCBVdGlsKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBfaW50ZXJvcERlZmF1bHRMZWdhY3kgKGUpIHsgcmV0dXJuIGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxuICB2YXIgJF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koJCk7XG4gIHZhciBVdGlsX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShVdGlsKTtcblxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICAgIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgdmFyIE5BTUUgPSAnY29sbGFwc2UnO1xuICB2YXIgVkVSU0lPTiA9ICc0LjYuMic7XG4gIHZhciBEQVRBX0tFWSA9ICdicy5jb2xsYXBzZSc7XG4gIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICB2YXIgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mbltOQU1FXTtcbiAgdmFyIENMQVNTX05BTUVfU0hPVyA9ICdzaG93JztcbiAgdmFyIENMQVNTX05BTUVfQ09MTEFQU0UgPSAnY29sbGFwc2UnO1xuICB2YXIgQ0xBU1NfTkFNRV9DT0xMQVBTSU5HID0gJ2NvbGxhcHNpbmcnO1xuICB2YXIgQ0xBU1NfTkFNRV9DT0xMQVBTRUQgPSAnY29sbGFwc2VkJztcbiAgdmFyIERJTUVOU0lPTl9XSURUSCA9ICd3aWR0aCc7XG4gIHZhciBESU1FTlNJT05fSEVJR0hUID0gJ2hlaWdodCc7XG4gIHZhciBFVkVOVF9TSE9XID0gXCJzaG93XCIgKyBFVkVOVF9LRVk7XG4gIHZhciBFVkVOVF9TSE9XTiA9IFwic2hvd25cIiArIEVWRU5UX0tFWTtcbiAgdmFyIEVWRU5UX0hJREUgPSBcImhpZGVcIiArIEVWRU5UX0tFWTtcbiAgdmFyIEVWRU5UX0hJRERFTiA9IFwiaGlkZGVuXCIgKyBFVkVOVF9LRVk7XG4gIHZhciBFVkVOVF9DTElDS19EQVRBX0FQSSA9IFwiY2xpY2tcIiArIEVWRU5UX0tFWSArIERBVEFfQVBJX0tFWTtcbiAgdmFyIFNFTEVDVE9SX0FDVElWRVMgPSAnLnNob3csIC5jb2xsYXBzaW5nJztcbiAgdmFyIFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJztcbiAgdmFyIERlZmF1bHQgPSB7XG4gICAgdG9nZ2xlOiB0cnVlLFxuICAgIHBhcmVudDogJydcbiAgfTtcbiAgdmFyIERlZmF1bHRUeXBlID0ge1xuICAgIHRvZ2dsZTogJ2Jvb2xlYW4nLFxuICAgIHBhcmVudDogJyhzdHJpbmd8ZWxlbWVudCknXG4gIH07XG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIHZhciBDb2xsYXBzZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29sbGFwc2UoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIl1baHJlZj1cXFwiI1wiICsgZWxlbWVudC5pZCArIFwiXFxcIl0sXCIgKyAoXCJbZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIl1bZGF0YS10YXJnZXQ9XFxcIiNcIiArIGVsZW1lbnQuaWQgKyBcIlxcXCJdXCIpKSk7XG4gICAgICB2YXIgdG9nZ2xlTGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9EQVRBX1RPR0dMRSkpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdG9nZ2xlTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgZWxlbSA9IHRvZ2dsZUxpc3RbaV07XG4gICAgICAgIHZhciBzZWxlY3RvciA9IFV0aWxfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbSk7XG4gICAgICAgIHZhciBmaWx0ZXJFbGVtZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkuZmlsdGVyKGZ1bmN0aW9uIChmb3VuZEVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gZm91bmRFbGVtID09PSBlbGVtZW50O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvcjtcblxuICAgICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnQgPyB0aGlzLl9nZXRQYXJlbnQoKSA6IG51bGw7XG5cbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fZWxlbWVudCwgdGhpcy5fdHJpZ2dlckFycmF5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy50b2dnbGUpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgIH1cbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgdmFyIF9wcm90byA9IENvbGxhcHNlLnByb3RvdHlwZTtcblxuICAgIC8vIFB1YmxpY1xuICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICBpZiAoJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uc2hvdyA9IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8ICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWN0aXZlcztcbiAgICAgIHZhciBhY3RpdmVzRGF0YTtcblxuICAgICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgICBhY3RpdmVzID0gW10uc2xpY2UuY2FsbCh0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9BQ1RJVkVTKSkuZmlsdGVyKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5fY29uZmlnLnBhcmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQnKSA9PT0gX3RoaXMuX2NvbmZpZy5wYXJlbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ09MTEFQU0UpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoYWN0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBhY3RpdmVzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlcykge1xuICAgICAgICBhY3RpdmVzRGF0YSA9ICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGFjdGl2ZXMpLm5vdCh0aGlzLl9zZWxlY3RvcikuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgaWYgKGFjdGl2ZXNEYXRhICYmIGFjdGl2ZXNEYXRhLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXJ0RXZlbnQgPSAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5FdmVudChFVkVOVF9TSE9XKTtcbiAgICAgICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudCk7XG5cbiAgICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgICAgQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZS5jYWxsKCRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGFjdGl2ZXMpLm5vdCh0aGlzLl9zZWxlY3RvciksICdoaWRlJyk7XG5cbiAgICAgICAgaWYgKCFhY3RpdmVzRGF0YSkge1xuICAgICAgICAgICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGFjdGl2ZXMpLmRhdGEoREFUQV9LRVksIG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKTtcblxuICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGhpcy5fZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRSkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IDA7XG5cbiAgICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMuX3RyaWdnZXJBcnJheSkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpO1xuXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0oX3RoaXMuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORykuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRSArIFwiIFwiICsgQ0xBU1NfTkFNRV9TSE9XKTtcbiAgICAgICAgX3RoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnO1xuXG4gICAgICAgIF90aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpO1xuXG4gICAgICAgICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKF90aGlzLl9lbGVtZW50KS50cmlnZ2VyKEVWRU5UX1NIT1dOKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpO1xuICAgICAgdmFyIHNjcm9sbFNpemUgPSBcInNjcm9sbFwiICsgY2FwaXRhbGl6ZWREaW1lbnNpb247XG4gICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG4gICAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXSh0aGlzLl9lbGVtZW50KS5vbmUoVXRpbF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gdGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXSArIFwicHhcIjtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmhpZGUgPSBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgISRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhcnRFdmVudCA9ICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkV2ZW50KEVWRU5UX0hJREUpO1xuICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGhpcy5fZWxlbWVudCkudHJpZ2dlcihzdGFydEV2ZW50KTtcblxuICAgICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKCk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IHRoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltZW5zaW9uXSArIFwicHhcIjtcbiAgICAgIFV0aWxfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnJlZmxvdyh0aGlzLl9lbGVtZW50KTtcbiAgICAgICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMuX2VsZW1lbnQpLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORykucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRSArIFwiIFwiICsgQ0xBU1NfTkFNRV9TSE9XKTtcbiAgICAgIHZhciB0cmlnZ2VyQXJyYXlMZW5ndGggPSB0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoO1xuXG4gICAgICBpZiAodHJpZ2dlckFycmF5TGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyaWdnZXJBcnJheUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHRyaWdnZXIgPSB0aGlzLl90cmlnZ2VyQXJyYXlbaV07XG4gICAgICAgICAgdmFyIHNlbGVjdG9yID0gVXRpbF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0cmlnZ2VyKTtcblxuICAgICAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyICRlbGVtID0gJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0oW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkpO1xuXG4gICAgICAgICAgICBpZiAoISRlbGVtLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odHJpZ2dlcikuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKTtcblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIF90aGlzMi5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKTtcblxuICAgICAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXShfdGhpczIuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORykuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRSkudHJpZ2dlcihFVkVOVF9ISURERU4pO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG4gICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG4gICAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXSh0aGlzLl9lbGVtZW50KS5vbmUoVXRpbF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2V0VHJhbnNpdGlvbmluZyA9IGZ1bmN0aW9uIHNldFRyYW5zaXRpb25pbmcoaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBpc1RyYW5zaXRpb25pbmc7XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpO1xuICAgICAgdGhpcy5fY29uZmlnID0gbnVsbDtcbiAgICAgIHRoaXMuX3BhcmVudCA9IG51bGw7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX3RyaWdnZXJBcnJheSA9IG51bGw7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBudWxsO1xuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IF9leHRlbmRzKHt9LCBEZWZhdWx0LCBjb25maWcpO1xuICAgICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSk7IC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG5cbiAgICAgIFV0aWxfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0RGltZW5zaW9uID0gZnVuY3Rpb24gX2dldERpbWVuc2lvbigpIHtcbiAgICAgIHZhciBoYXNXaWR0aCA9ICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKERJTUVOU0lPTl9XSURUSCk7XG4gICAgICByZXR1cm4gaGFzV2lkdGggPyBESU1FTlNJT05fV0lEVEggOiBESU1FTlNJT05fSEVJR0hUO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldFBhcmVudCA9IGZ1bmN0aW9uIF9nZXRQYXJlbnQoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHBhcmVudDtcblxuICAgICAgaWYgKFV0aWxfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmlzRWxlbWVudCh0aGlzLl9jb25maWcucGFyZW50KSkge1xuICAgICAgICBwYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50OyAvLyBJdCdzIGEgalF1ZXJ5IG9iamVjdFxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnBhcmVudC5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudFswXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9jb25maWcucGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlbGVjdG9yID0gXCJbZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIl1bZGF0YS1wYXJlbnQ9XFxcIlwiICsgdGhpcy5fY29uZmlnLnBhcmVudCArIFwiXFxcIl1cIjtcbiAgICAgIHZhciBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgICAgICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNoaWxkcmVuKS5lYWNoKGZ1bmN0aW9uIChpLCBlbGVtZW50KSB7XG4gICAgICAgIF90aGlzMy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKENvbGxhcHNlLl9nZXRUYXJnZXRGcm9tRWxlbWVudChlbGVtZW50KSwgW2VsZW1lbnRdKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MgPSBmdW5jdGlvbiBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKGVsZW1lbnQsIHRyaWdnZXJBcnJheSkge1xuICAgICAgdmFyIGlzT3BlbiA9ICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGVsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVyk7XG5cbiAgICAgIGlmICh0cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRyaWdnZXJBcnJheSkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQsICFpc09wZW4pLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBpc09wZW4pO1xuICAgICAgfVxuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgQ29sbGFwc2UuX2dldFRhcmdldEZyb21FbGVtZW50ID0gZnVuY3Rpb24gX2dldFRhcmdldEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHZhciBzZWxlY3RvciA9IFV0aWxfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICByZXR1cm4gc2VsZWN0b3IgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IG51bGw7XG4gICAgfTtcblxuICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkZWxlbWVudCA9ICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMpO1xuICAgICAgICB2YXIgZGF0YSA9ICRlbGVtZW50LmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICAgIHZhciBfY29uZmlnID0gX2V4dGVuZHMoe30sIERlZmF1bHQsICRlbGVtZW50LmRhdGEoKSwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pO1xuXG4gICAgICAgIGlmICghZGF0YSAmJiBfY29uZmlnLnRvZ2dsZSAmJiB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgICBfY29uZmlnLnRvZ2dsZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBDb2xsYXBzZSh0aGlzLCBfY29uZmlnKTtcbiAgICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vIG1ldGhvZCBuYW1lZCBcXFwiXCIgKyBjb25maWcgKyBcIlxcXCJcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ29sbGFwc2UsIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQ7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENvbGxhcHNlO1xuICB9KCk7XG4gIC8qKlxuICAgKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuXG4gICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGRvY3VtZW50KS5vbihFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIHByZXZlbnREZWZhdWx0IG9ubHkgZm9yIDxhPiBlbGVtZW50cyAod2hpY2ggY2hhbmdlIHRoZSBVUkwpIG5vdCBpbnNpZGUgdGhlIGNvbGxhcHNpYmxlIGVsZW1lbnRcbiAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC50YWdOYW1lID09PSAnQScpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyICR0cmlnZ2VyID0gJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGhpcyk7XG4gICAgdmFyIHNlbGVjdG9yID0gVXRpbF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKTtcbiAgICB2YXIgc2VsZWN0b3JzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0oc2VsZWN0b3JzKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGFyZ2V0ID0gJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGhpcyk7XG4gICAgICB2YXIgZGF0YSA9ICR0YXJnZXQuZGF0YShEQVRBX0tFWSk7XG4gICAgICB2YXIgY29uZmlnID0gZGF0YSA/ICd0b2dnbGUnIDogJHRyaWdnZXIuZGF0YSgpO1xuXG4gICAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJHRhcmdldCwgY29uZmlnKTtcbiAgICB9KTtcbiAgfSk7XG4gIC8qKlxuICAgKiBqUXVlcnlcbiAgICovXG5cbiAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uZm5bTkFNRV0gPSBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlO1xuICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENvbGxhcHNlO1xuXG4gICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgcmV0dXJuIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgcmV0dXJuIENvbGxhcHNlO1xuXG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xsYXBzZS5qcy5tYXBcbiIsIi8qIVxuICAqIEJvb3RzdHJhcCBkcm9wZG93bi5qcyB2NC42LjIgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gICogQ29weXJpZ2h0IDIwMTEtMjAyMiBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpLCByZXF1aXJlKCdwb3BwZXIuanMnKSwgcmVxdWlyZSgnLi91dGlsLmpzJykpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnanF1ZXJ5JywgJ3BvcHBlci5qcycsICcuL3V0aWwnXSwgZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuRHJvcGRvd24gPSBmYWN0b3J5KGdsb2JhbC5qUXVlcnksIGdsb2JhbC5Qb3BwZXIsIGdsb2JhbC5VdGlsKSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKCQsIFBvcHBlciwgVXRpbCkgeyAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0TGVnYWN5IChlKSB7IHJldHVybiBlICYmIHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiAnZGVmYXVsdCcgaW4gZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbiAgdmFyICRfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KCQpO1xuICB2YXIgUG9wcGVyX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShQb3BwZXIpO1xuICB2YXIgVXRpbF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koVXRpbCk7XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgICB3cml0YWJsZTogZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH1cblxuICBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIHZhciBOQU1FID0gJ2Ryb3Bkb3duJztcbiAgdmFyIFZFUlNJT04gPSAnNC42LjInO1xuICB2YXIgREFUQV9LRVkgPSAnYnMuZHJvcGRvd24nO1xuICB2YXIgRVZFTlRfS0VZID0gXCIuXCIgKyBEQVRBX0tFWTtcbiAgdmFyIERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uZm5bTkFNRV07XG4gIHZhciBFU0NBUEVfS0VZQ09ERSA9IDI3OyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBFc2NhcGUgKEVzYykga2V5XG5cbiAgdmFyIFNQQUNFX0tFWUNPREUgPSAzMjsgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3Igc3BhY2Uga2V5XG5cbiAgdmFyIFRBQl9LRVlDT0RFID0gOTsgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgdGFiIGtleVxuXG4gIHZhciBBUlJPV19VUF9LRVlDT0RFID0gMzg7IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHVwIGFycm93IGtleVxuXG4gIHZhciBBUlJPV19ET1dOX0tFWUNPREUgPSA0MDsgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgZG93biBhcnJvdyBrZXlcblxuICB2YXIgUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIID0gMzsgLy8gTW91c2VFdmVudC53aGljaCB2YWx1ZSBmb3IgdGhlIHJpZ2h0IGJ1dHRvbiAoYXNzdW1pbmcgYSByaWdodC1oYW5kZWQgbW91c2UpXG5cbiAgdmFyIFJFR0VYUF9LRVlET1dOID0gbmV3IFJlZ0V4cChBUlJPV19VUF9LRVlDT0RFICsgXCJ8XCIgKyBBUlJPV19ET1dOX0tFWUNPREUgKyBcInxcIiArIEVTQ0FQRV9LRVlDT0RFKTtcbiAgdmFyIENMQVNTX05BTUVfRElTQUJMRUQgPSAnZGlzYWJsZWQnO1xuICB2YXIgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnO1xuICB2YXIgQ0xBU1NfTkFNRV9EUk9QVVAgPSAnZHJvcHVwJztcbiAgdmFyIENMQVNTX05BTUVfRFJPUFJJR0hUID0gJ2Ryb3ByaWdodCc7XG4gIHZhciBDTEFTU19OQU1FX0RST1BMRUZUID0gJ2Ryb3BsZWZ0JztcbiAgdmFyIENMQVNTX05BTUVfTUVOVVJJR0hUID0gJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnO1xuICB2YXIgQ0xBU1NfTkFNRV9QT1NJVElPTl9TVEFUSUMgPSAncG9zaXRpb24tc3RhdGljJztcbiAgdmFyIEVWRU5UX0hJREUgPSBcImhpZGVcIiArIEVWRU5UX0tFWTtcbiAgdmFyIEVWRU5UX0hJRERFTiA9IFwiaGlkZGVuXCIgKyBFVkVOVF9LRVk7XG4gIHZhciBFVkVOVF9TSE9XID0gXCJzaG93XCIgKyBFVkVOVF9LRVk7XG4gIHZhciBFVkVOVF9TSE9XTiA9IFwic2hvd25cIiArIEVWRU5UX0tFWTtcbiAgdmFyIEVWRU5UX0NMSUNLID0gXCJjbGlja1wiICsgRVZFTlRfS0VZO1xuICB2YXIgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBcImNsaWNrXCIgKyBFVkVOVF9LRVkgKyBEQVRBX0FQSV9LRVk7XG4gIHZhciBFVkVOVF9LRVlET1dOX0RBVEFfQVBJID0gXCJrZXlkb3duXCIgKyBFVkVOVF9LRVkgKyBEQVRBX0FQSV9LRVk7XG4gIHZhciBFVkVOVF9LRVlVUF9EQVRBX0FQSSA9IFwia2V5dXBcIiArIEVWRU5UX0tFWSArIERBVEFfQVBJX0tFWTtcbiAgdmFyIFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJztcbiAgdmFyIFNFTEVDVE9SX0ZPUk1fQ0hJTEQgPSAnLmRyb3Bkb3duIGZvcm0nO1xuICB2YXIgU0VMRUNUT1JfTUVOVSA9ICcuZHJvcGRvd24tbWVudSc7XG4gIHZhciBTRUxFQ1RPUl9OQVZCQVJfTkFWID0gJy5uYXZiYXItbmF2JztcbiAgdmFyIFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMgPSAnLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknO1xuICB2YXIgUExBQ0VNRU5UX1RPUCA9ICd0b3Atc3RhcnQnO1xuICB2YXIgUExBQ0VNRU5UX1RPUEVORCA9ICd0b3AtZW5kJztcbiAgdmFyIFBMQUNFTUVOVF9CT1RUT00gPSAnYm90dG9tLXN0YXJ0JztcbiAgdmFyIFBMQUNFTUVOVF9CT1RUT01FTkQgPSAnYm90dG9tLWVuZCc7XG4gIHZhciBQTEFDRU1FTlRfUklHSFQgPSAncmlnaHQtc3RhcnQnO1xuICB2YXIgUExBQ0VNRU5UX0xFRlQgPSAnbGVmdC1zdGFydCc7XG4gIHZhciBEZWZhdWx0ID0ge1xuICAgIG9mZnNldDogMCxcbiAgICBmbGlwOiB0cnVlLFxuICAgIGJvdW5kYXJ5OiAnc2Nyb2xsUGFyZW50JyxcbiAgICByZWZlcmVuY2U6ICd0b2dnbGUnLFxuICAgIGRpc3BsYXk6ICdkeW5hbWljJyxcbiAgICBwb3BwZXJDb25maWc6IG51bGxcbiAgfTtcbiAgdmFyIERlZmF1bHRUeXBlID0ge1xuICAgIG9mZnNldDogJyhudW1iZXJ8c3RyaW5nfGZ1bmN0aW9uKScsXG4gICAgZmxpcDogJ2Jvb2xlYW4nLFxuICAgIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gICAgcmVmZXJlbmNlOiAnKHN0cmluZ3xlbGVtZW50KScsXG4gICAgZGlzcGxheTogJ3N0cmluZycsXG4gICAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0KSdcbiAgfTtcbiAgLyoqXG4gICAqIENsYXNzIGRlZmluaXRpb25cbiAgICovXG5cbiAgdmFyIERyb3Bkb3duID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEcm9wZG93bihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbDtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5fbWVudSA9IHRoaXMuX2dldE1lbnVFbGVtZW50KCk7XG4gICAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpO1xuXG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICB2YXIgX3Byb3RvID0gRHJvcGRvd24ucHJvdG90eXBlO1xuXG4gICAgLy8gUHVibGljXG4gICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8ICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRElTQUJMRUQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGlzQWN0aXZlID0gJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGhpcy5fbWVudSkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKTtcblxuICAgICAgRHJvcGRvd24uX2NsZWFyTWVudXMoKTtcblxuICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zaG93KHRydWUpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2hvdyA9IGZ1bmN0aW9uIHNob3codXNlUG9wcGVyKSB7XG4gICAgICBpZiAodXNlUG9wcGVyID09PSB2b2lkIDApIHtcbiAgICAgICAgdXNlUG9wcGVyID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8ICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRElTQUJMRUQpIHx8ICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMuX21lbnUpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfTtcbiAgICAgIHZhciBzaG93RXZlbnQgPSAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5FdmVudChFVkVOVF9TSE9XLCByZWxhdGVkVGFyZ2V0KTtcblxuICAgICAgdmFyIHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcblxuICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0ocGFyZW50KS50cmlnZ2VyKHNob3dFdmVudCk7XG5cbiAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBUb3RhbGx5IGRpc2FibGUgUG9wcGVyIGZvciBEcm9wZG93bnMgaW4gTmF2YmFyXG5cblxuICAgICAgaWYgKCF0aGlzLl9pbk5hdmJhciAmJiB1c2VQb3BwZXIpIHtcbiAgICAgICAgLy8gQ2hlY2sgZm9yIFBvcHBlciBkZXBlbmRlbmN5XG4gICAgICAgIGlmICh0eXBlb2YgUG9wcGVyX19kZWZhdWx0W1wiZGVmYXVsdFwiXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAncGFyZW50Jykge1xuICAgICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBwYXJlbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAoVXRpbF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG4gICAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2U7IC8vIENoZWNrIGlmIGl0J3MgalF1ZXJ5IGVsZW1lbnRcblxuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnJlZmVyZW5jZS5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVswXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gSWYgYm91bmRhcnkgaXMgbm90IGBzY3JvbGxQYXJlbnRgLCB0aGVuIHNldCBwb3NpdGlvbiB0byBgc3RhdGljYFxuICAgICAgICAvLyB0byBhbGxvdyB0aGUgbWVudSB0byBcImVzY2FwZVwiIHRoZSBzY3JvbGwgcGFyZW50J3MgYm91bmRhcmllc1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzI0MjUxXG5cblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJvdW5kYXJ5ICE9PSAnc2Nyb2xsUGFyZW50Jykge1xuICAgICAgICAgICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHBhcmVudCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9QT1NJVElPTl9TVEFUSUMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcl9fZGVmYXVsdFtcImRlZmF1bHRcIl0ocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKCkpO1xuICAgICAgfSAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuXG5cbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0ocGFyZW50KS5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUl9OQVYpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXShkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9uKCdtb3VzZW92ZXInLCBudWxsLCAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub29wKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuXG4gICAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXSh0aGlzLl9tZW51KS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX1NIT1cpO1xuICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0ocGFyZW50KS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX1NIT1cpLnRyaWdnZXIoJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uRXZlbnQoRVZFTlRfU0hPV04sIHJlbGF0ZWRUYXJnZXQpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmhpZGUgPSBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9ESVNBQkxFRCkgfHwgISRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMuX21lbnUpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfTtcbiAgICAgIHZhciBoaWRlRXZlbnQgPSAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5FdmVudChFVkVOVF9ISURFLCByZWxhdGVkVGFyZ2V0KTtcblxuICAgICAgdmFyIHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcblxuICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0ocGFyZW50KS50cmlnZ2VyKGhpZGVFdmVudCk7XG5cbiAgICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgICB9XG5cbiAgICAgICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMuX21lbnUpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfU0hPVyk7XG4gICAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXShwYXJlbnQpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfU0hPVykudHJpZ2dlcigkX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5FdmVudChFVkVOVF9ISURERU4sIHJlbGF0ZWRUYXJnZXQpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0ucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSk7XG4gICAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXSh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5fbWVudSA9IG51bGw7XG5cbiAgICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKTtcblxuICAgICAgICB0aGlzLl9wb3BwZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8udXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKTtcblxuICAgICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9wb3BwZXIuc2NoZWR1bGVVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9IC8vIFByaXZhdGVcbiAgICA7XG5cbiAgICBfcHJvdG8uX2FkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGhpcy5fZWxlbWVudCkub24oRVZFTlRfQ0xJQ0ssIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBfdGhpcy50b2dnbGUoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSBfZXh0ZW5kcyh7fSwgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LCAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXSh0aGlzLl9lbGVtZW50KS5kYXRhKCksIGNvbmZpZyk7XG4gICAgICBVdGlsX19kZWZhdWx0W1wiZGVmYXVsdFwiXS50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0TWVudUVsZW1lbnQgPSBmdW5jdGlvbiBfZ2V0TWVudUVsZW1lbnQoKSB7XG4gICAgICBpZiAoIXRoaXMuX21lbnUpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcblxuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgdGhpcy5fbWVudSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX01FTlUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9tZW51O1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldFBsYWNlbWVudCA9IGZ1bmN0aW9uIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgICB2YXIgJHBhcmVudERyb3Bkb3duID0gJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGhpcy5fZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgIHZhciBwbGFjZW1lbnQgPSBQTEFDRU1FTlRfQk9UVE9NOyAvLyBIYW5kbGUgZHJvcHVwXG5cbiAgICAgIGlmICgkcGFyZW50RHJvcGRvd24uaGFzQ2xhc3MoQ0xBU1NfTkFNRV9EUk9QVVApKSB7XG4gICAgICAgIHBsYWNlbWVudCA9ICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMuX21lbnUpLmhhc0NsYXNzKENMQVNTX05BTUVfTUVOVVJJR0hUKSA/IFBMQUNFTUVOVF9UT1BFTkQgOiBQTEFDRU1FTlRfVE9QO1xuICAgICAgfSBlbHNlIGlmICgkcGFyZW50RHJvcGRvd24uaGFzQ2xhc3MoQ0xBU1NfTkFNRV9EUk9QUklHSFQpKSB7XG4gICAgICAgIHBsYWNlbWVudCA9IFBMQUNFTUVOVF9SSUdIVDtcbiAgICAgIH0gZWxzZSBpZiAoJHBhcmVudERyb3Bkb3duLmhhc0NsYXNzKENMQVNTX05BTUVfRFJPUExFRlQpKSB7XG4gICAgICAgIHBsYWNlbWVudCA9IFBMQUNFTUVOVF9MRUZUO1xuICAgICAgfSBlbHNlIGlmICgkX19kZWZhdWx0W1wiZGVmYXVsdFwiXSh0aGlzLl9tZW51KS5oYXNDbGFzcyhDTEFTU19OQU1FX01FTlVSSUdIVCkpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gUExBQ0VNRU5UX0JPVFRPTUVORDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBsYWNlbWVudDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9kZXRlY3ROYXZiYXIgPSBmdW5jdGlvbiBfZGV0ZWN0TmF2YmFyKCkge1xuICAgICAgcmV0dXJuICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoJy5uYXZiYXInKS5sZW5ndGggPiAwO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldE9mZnNldCA9IGZ1bmN0aW9uIF9nZXRPZmZzZXQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIG9mZnNldCA9IHt9O1xuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5vZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb2Zmc2V0LmZuID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLm9mZnNldHMgPSBfZXh0ZW5kcyh7fSwgZGF0YS5vZmZzZXRzLCBfdGhpczIuX2NvbmZpZy5vZmZzZXQoZGF0YS5vZmZzZXRzLCBfdGhpczIuX2VsZW1lbnQpKTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9mZnNldC5vZmZzZXQgPSB0aGlzLl9jb25maWcub2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldFBvcHBlckNvbmZpZyA9IGZ1bmN0aW9uIF9nZXRQb3BwZXJDb25maWcoKSB7XG4gICAgICB2YXIgcG9wcGVyQ29uZmlnID0ge1xuICAgICAgICBwbGFjZW1lbnQ6IHRoaXMuX2dldFBsYWNlbWVudCgpLFxuICAgICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpLFxuICAgICAgICAgIGZsaXA6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRoaXMuX2NvbmZpZy5mbGlwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICAgIGJvdW5kYXJpZXNFbGVtZW50OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07IC8vIERpc2FibGUgUG9wcGVyIGlmIHdlIGhhdmUgYSBzdGF0aWMgZGlzcGxheVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHBvcHBlckNvbmZpZy5tb2RpZmllcnMuYXBwbHlTdHlsZSA9IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHBvcHBlckNvbmZpZywgdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyk7XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9ICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMpLmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICAgIHZhciBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgRHJvcGRvd24odGhpcywgX2NvbmZpZyk7XG4gICAgICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgRHJvcGRvd24uX2NsZWFyTWVudXMgPSBmdW5jdGlvbiBfY2xlYXJNZW51cyhldmVudCkge1xuICAgICAgaWYgKGV2ZW50ICYmIChldmVudC53aGljaCA9PT0gUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIIHx8IGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQud2hpY2ggIT09IFRBQl9LRVlDT0RFKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0b2dnbGVzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0b2dnbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodG9nZ2xlc1tpXSk7XG5cbiAgICAgICAgdmFyIGNvbnRleHQgPSAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXSh0b2dnbGVzW2ldKS5kYXRhKERBVEFfS0VZKTtcbiAgICAgICAgdmFyIHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldDogdG9nZ2xlc1tpXVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChldmVudCAmJiBldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldC5jbGlja0V2ZW50ID0gZXZlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkcm9wZG93bk1lbnUgPSBjb250ZXh0Ll9tZW51O1xuXG4gICAgICAgIGlmICghJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0ocGFyZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkgfHwgZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC53aGljaCA9PT0gVEFCX0tFWUNPREUpICYmICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNvbnRhaW5zKHBhcmVudCwgZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhpZGVFdmVudCA9ICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkV2ZW50KEVWRU5UX0hJREUsIHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXShwYXJlbnQpLnRyaWdnZXIoaGlkZUV2ZW50KTtcblxuICAgICAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcblxuXG4gICAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXShkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9mZignbW91c2VvdmVyJywgbnVsbCwgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9vcCk7XG4gICAgICAgIH1cblxuICAgICAgICB0b2dnbGVzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXG4gICAgICAgIGlmIChjb250ZXh0Ll9wb3BwZXIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9wb3BwZXIuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0oZHJvcGRvd25NZW51KS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX1NIT1cpO1xuICAgICAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXShwYXJlbnQpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfU0hPVykudHJpZ2dlcigkX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5FdmVudChFVkVOVF9ISURERU4sIHJlbGF0ZWRUYXJnZXQpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50ID0gZnVuY3Rpb24gX2dldFBhcmVudEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHZhciBwYXJlbnQ7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBVdGlsX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgICA7XG5cbiAgICBEcm9wZG93bi5fZGF0YUFwaUtleWRvd25IYW5kbGVyID0gZnVuY3Rpb24gX2RhdGFBcGlLZXlkb3duSGFuZGxlcihldmVudCkge1xuICAgICAgLy8gSWYgbm90IGlucHV0L3RleHRhcmVhOlxuICAgICAgLy8gIC0gQW5kIG5vdCBhIGtleSBpbiBSRUdFWFBfS0VZRE9XTiA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgICAvLyBJZiBpbnB1dC90ZXh0YXJlYTpcbiAgICAgIC8vICAtIElmIHNwYWNlIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgICAvLyAgLSBJZiBrZXkgaXMgb3RoZXIgdGhhbiBlc2NhcGVcbiAgICAgIC8vICAgIC0gSWYga2V5IGlzIG5vdCB1cCBvciBkb3duID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAgIC8vICAgIC0gSWYgdHJpZ2dlciBpbnNpZGUgdGhlIG1lbnUgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpID8gZXZlbnQud2hpY2ggPT09IFNQQUNFX0tFWUNPREUgfHwgZXZlbnQud2hpY2ggIT09IEVTQ0FQRV9LRVlDT0RFICYmIChldmVudC53aGljaCAhPT0gQVJST1dfRE9XTl9LRVlDT0RFICYmIGV2ZW50LndoaWNoICE9PSBBUlJPV19VUF9LRVlDT0RFIHx8ICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGV2ZW50LnRhcmdldCkuY2xvc2VzdChTRUxFQ1RPUl9NRU5VKS5sZW5ndGgpIDogIVJFR0VYUF9LRVlET1dOLnRlc3QoZXZlbnQud2hpY2gpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGhpcykuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9ESVNBQkxFRCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMpO1xuXG4gICAgICB2YXIgaXNBY3RpdmUgPSAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXShwYXJlbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVyk7XG5cbiAgICAgIGlmICghaXNBY3RpdmUgJiYgZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBpZiAoIWlzQWN0aXZlIHx8IGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSB8fCBldmVudC53aGljaCA9PT0gU1BBQ0VfS0VZQ09ERSkge1xuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0ocGFyZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfREFUQV9UT0dHTEUpKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGhpcykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXRlbXMgPSBbXS5zbGljZS5jYWxsKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMpKS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGl0ZW0pLmlzKCc6dmlzaWJsZScpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5kZXggPSBpdGVtcy5pbmRleE9mKGV2ZW50LnRhcmdldCk7XG5cbiAgICAgIGlmIChldmVudC53aGljaCA9PT0gQVJST1dfVVBfS0VZQ09ERSAmJiBpbmRleCA+IDApIHtcbiAgICAgICAgLy8gVXBcbiAgICAgICAgaW5kZXgtLTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBBUlJPV19ET1dOX0tFWUNPREUgJiYgaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIC8vIERvd25cbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICBpbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoRHJvcGRvd24sIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRlZmF1bHRUeXBlXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHRUeXBlO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBEcm9wZG93bjtcbiAgfSgpO1xuICAvKipcbiAgICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cblxuICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXShkb2N1bWVudCkub24oRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpLm9uKEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX01FTlUsIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpLm9uKEVWRU5UX0NMSUNLX0RBVEFfQVBJICsgXCIgXCIgKyBFVkVOVF9LRVlVUF9EQVRBX0FQSSwgRHJvcGRvd24uX2NsZWFyTWVudXMpLm9uKEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkX19kZWZhdWx0W1wiZGVmYXVsdFwiXSh0aGlzKSwgJ3RvZ2dsZScpO1xuICB9KS5vbihFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfRk9STV9DSElMRCwgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mbltOQU1FXSA9IERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2U7XG4gICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gRHJvcGRvd247XG5cbiAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICByZXR1cm4gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICByZXR1cm4gRHJvcGRvd247XG5cbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRyb3Bkb3duLmpzLm1hcFxuIiwiLyohXG4gICogQm9vdHN0cmFwIHRvb2x0aXAuanMgdjQuNi4yIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxuICAqIENvcHlyaWdodCAyMDExLTIwMjIgVGhlIEJvb3RzdHJhcCBBdXRob3JzIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvZ3JhcGhzL2NvbnRyaWJ1dG9ycylcbiAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSwgcmVxdWlyZSgncG9wcGVyLmpzJyksIHJlcXVpcmUoJy4vdXRpbC5qcycpKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2pxdWVyeScsICdwb3BwZXIuanMnLCAnLi91dGlsJ10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLlRvb2x0aXAgPSBmYWN0b3J5KGdsb2JhbC5qUXVlcnksIGdsb2JhbC5Qb3BwZXIsIGdsb2JhbC5VdGlsKSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKCQsIFBvcHBlciwgVXRpbCkgeyAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0TGVnYWN5IChlKSB7IHJldHVybiBlICYmIHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiAnZGVmYXVsdCcgaW4gZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbiAgdmFyICRfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KCQpO1xuICB2YXIgUG9wcGVyX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShQb3BwZXIpO1xuICB2YXIgVXRpbF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koVXRpbCk7XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgICB3cml0YWJsZTogZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH1cblxuICBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQm9vdHN0cmFwICh2NC42LjIpOiB0b29scy9zYW5pdGl6ZXIuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICB2YXIgdXJpQXR0cnMgPSBbJ2JhY2tncm91bmQnLCAnY2l0ZScsICdocmVmJywgJ2l0ZW10eXBlJywgJ2xvbmdkZXNjJywgJ3Bvc3RlcicsICdzcmMnLCAneGxpbms6aHJlZiddO1xuICB2YXIgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiA9IC9eYXJpYS1bXFx3LV0qJC9pO1xuICB2YXIgRGVmYXVsdFdoaXRlbGlzdCA9IHtcbiAgICAvLyBHbG9iYWwgYXR0cmlidXRlcyBhbGxvd2VkIG9uIGFueSBzdXBwbGllZCBlbGVtZW50IGJlbG93LlxuICAgICcqJzogWydjbGFzcycsICdkaXInLCAnaWQnLCAnbGFuZycsICdyb2xlJywgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTl0sXG4gICAgYTogWyd0YXJnZXQnLCAnaHJlZicsICd0aXRsZScsICdyZWwnXSxcbiAgICBhcmVhOiBbXSxcbiAgICBiOiBbXSxcbiAgICBicjogW10sXG4gICAgY29sOiBbXSxcbiAgICBjb2RlOiBbXSxcbiAgICBkaXY6IFtdLFxuICAgIGVtOiBbXSxcbiAgICBocjogW10sXG4gICAgaDE6IFtdLFxuICAgIGgyOiBbXSxcbiAgICBoMzogW10sXG4gICAgaDQ6IFtdLFxuICAgIGg1OiBbXSxcbiAgICBoNjogW10sXG4gICAgaTogW10sXG4gICAgaW1nOiBbJ3NyYycsICdzcmNzZXQnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuICAgIGxpOiBbXSxcbiAgICBvbDogW10sXG4gICAgcDogW10sXG4gICAgcHJlOiBbXSxcbiAgICBzOiBbXSxcbiAgICBzbWFsbDogW10sXG4gICAgc3BhbjogW10sXG4gICAgc3ViOiBbXSxcbiAgICBzdXA6IFtdLFxuICAgIHN0cm9uZzogW10sXG4gICAgdTogW10sXG4gICAgdWw6IFtdXG4gIH07XG4gIC8qKlxuICAgKiBBIHBhdHRlcm4gdGhhdCByZWNvZ25pemVzIGEgY29tbW9ubHkgdXNlZnVsIHN1YnNldCBvZiBVUkxzIHRoYXQgYXJlIHNhZmUuXG4gICAqXG4gICAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzEyLjIueC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICAgKi9cblxuICB2YXIgU0FGRV9VUkxfUEFUVEVSTiA9IC9eKD86KD86aHR0cHM/fG1haWx0b3xmdHB8dGVsfGZpbGV8c21zKTp8W14jJi86P10qKD86WyMvP118JCkpL2k7XG4gIC8qKlxuICAgKiBBIHBhdHRlcm4gdGhhdCBtYXRjaGVzIHNhZmUgZGF0YSBVUkxzLiBPbmx5IG1hdGNoZXMgaW1hZ2UsIHZpZGVvIGFuZCBhdWRpbyB0eXBlcy5cbiAgICpcbiAgICogU2hvdXRvdXQgdG8gQW5ndWxhciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvMTIuMi54L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gICAqL1xuXG4gIHZhciBEQVRBX1VSTF9QQVRURVJOID0gL15kYXRhOig/OmltYWdlXFwvKD86Ym1wfGdpZnxqcGVnfGpwZ3xwbmd8dGlmZnx3ZWJwKXx2aWRlb1xcLyg/Om1wZWd8bXA0fG9nZ3x3ZWJtKXxhdWRpb1xcLyg/Om1wM3xvZ2F8b2dnfG9wdXMpKTtiYXNlNjQsW1xcZCsvYS16XSs9KiQvaTtcblxuICBmdW5jdGlvbiBhbGxvd2VkQXR0cmlidXRlKGF0dHIsIGFsbG93ZWRBdHRyaWJ1dGVMaXN0KSB7XG4gICAgdmFyIGF0dHJOYW1lID0gYXR0ci5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmluZGV4T2YoYXR0ck5hbWUpICE9PSAtMSkge1xuICAgICAgaWYgKHVyaUF0dHJzLmluZGV4T2YoYXR0ck5hbWUpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihTQUZFX1VSTF9QQVRURVJOLnRlc3QoYXR0ci5ub2RlVmFsdWUpIHx8IERBVEFfVVJMX1BBVFRFUk4udGVzdChhdHRyLm5vZGVWYWx1ZSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgcmVnRXhwID0gYWxsb3dlZEF0dHJpYnV0ZUxpc3QuZmlsdGVyKGZ1bmN0aW9uIChhdHRyUmVnZXgpIHtcbiAgICAgIHJldHVybiBhdHRyUmVnZXggaW5zdGFuY2VvZiBSZWdFeHA7XG4gICAgfSk7IC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJlZ0V4cC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKHJlZ0V4cFtpXS50ZXN0KGF0dHJOYW1lKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBzYW5pdGl6ZUh0bWwodW5zYWZlSHRtbCwgd2hpdGVMaXN0LCBzYW5pdGl6ZUZuKSB7XG4gICAgaWYgKHVuc2FmZUh0bWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5zYWZlSHRtbDtcbiAgICB9XG5cbiAgICBpZiAoc2FuaXRpemVGbiAmJiB0eXBlb2Ygc2FuaXRpemVGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNhbml0aXplRm4odW5zYWZlSHRtbCk7XG4gICAgfVxuXG4gICAgdmFyIGRvbVBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCk7XG4gICAgdmFyIGNyZWF0ZWREb2N1bWVudCA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcodW5zYWZlSHRtbCwgJ3RleHQvaHRtbCcpO1xuICAgIHZhciB3aGl0ZWxpc3RLZXlzID0gT2JqZWN0LmtleXMod2hpdGVMaXN0KTtcbiAgICB2YXIgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGNyZWF0ZWREb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSk7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpLCBsZW4pIHtcbiAgICAgIHZhciBlbCA9IGVsZW1lbnRzW2ldO1xuICAgICAgdmFyIGVsTmFtZSA9IGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGlmICh3aGl0ZWxpc3RLZXlzLmluZGV4T2YoZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkgPT09IC0xKSB7XG4gICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXR0cmlidXRlTGlzdCA9IFtdLnNsaWNlLmNhbGwoZWwuYXR0cmlidXRlcyk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1zcHJlYWRcblxuICAgICAgdmFyIHdoaXRlbGlzdGVkQXR0cmlidXRlcyA9IFtdLmNvbmNhdCh3aGl0ZUxpc3RbJyonXSB8fCBbXSwgd2hpdGVMaXN0W2VsTmFtZV0gfHwgW10pO1xuICAgICAgYXR0cmlidXRlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgIGlmICghYWxsb3dlZEF0dHJpYnV0ZShhdHRyLCB3aGl0ZWxpc3RlZEF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIubm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKGkpO1xuXG4gICAgICBpZiAoX3JldCA9PT0gXCJjb250aW51ZVwiKSBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKi9cblxuICB2YXIgTkFNRSA9ICd0b29sdGlwJztcbiAgdmFyIFZFUlNJT04gPSAnNC42LjInO1xuICB2YXIgREFUQV9LRVkgPSAnYnMudG9vbHRpcCc7XG4gIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uZm5bTkFNRV07XG4gIHZhciBDTEFTU19QUkVGSVggPSAnYnMtdG9vbHRpcCc7XG4gIHZhciBCU0NMU19QUkVGSVhfUkVHRVggPSBuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIgKyBDTEFTU19QUkVGSVggKyBcIlxcXFxTK1wiLCAnZycpO1xuICB2YXIgRElTQUxMT1dFRF9BVFRSSUJVVEVTID0gWydzYW5pdGl6ZScsICd3aGl0ZUxpc3QnLCAnc2FuaXRpemVGbiddO1xuICB2YXIgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnO1xuICB2YXIgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnO1xuICB2YXIgSE9WRVJfU1RBVEVfU0hPVyA9ICdzaG93JztcbiAgdmFyIEhPVkVSX1NUQVRFX09VVCA9ICdvdXQnO1xuICB2YXIgU0VMRUNUT1JfVE9PTFRJUF9JTk5FUiA9ICcudG9vbHRpcC1pbm5lcic7XG4gIHZhciBTRUxFQ1RPUl9BUlJPVyA9ICcuYXJyb3cnO1xuICB2YXIgVFJJR0dFUl9IT1ZFUiA9ICdob3Zlcic7XG4gIHZhciBUUklHR0VSX0ZPQ1VTID0gJ2ZvY3VzJztcbiAgdmFyIFRSSUdHRVJfQ0xJQ0sgPSAnY2xpY2snO1xuICB2YXIgVFJJR0dFUl9NQU5VQUwgPSAnbWFudWFsJztcbiAgdmFyIEF0dGFjaG1lbnRNYXAgPSB7XG4gICAgQVVUTzogJ2F1dG8nLFxuICAgIFRPUDogJ3RvcCcsXG4gICAgUklHSFQ6ICdyaWdodCcsXG4gICAgQk9UVE9NOiAnYm90dG9tJyxcbiAgICBMRUZUOiAnbGVmdCdcbiAgfTtcbiAgdmFyIERlZmF1bHQgPSB7XG4gICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPicgKyAnPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+JyArICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXG4gICAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcbiAgICB0aXRsZTogJycsXG4gICAgZGVsYXk6IDAsXG4gICAgaHRtbDogZmFsc2UsXG4gICAgc2VsZWN0b3I6IGZhbHNlLFxuICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgb2Zmc2V0OiAwLFxuICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgZmFsbGJhY2tQbGFjZW1lbnQ6ICdmbGlwJyxcbiAgICBib3VuZGFyeTogJ3Njcm9sbFBhcmVudCcsXG4gICAgY3VzdG9tQ2xhc3M6ICcnLFxuICAgIHNhbml0aXplOiB0cnVlLFxuICAgIHNhbml0aXplRm46IG51bGwsXG4gICAgd2hpdGVMaXN0OiBEZWZhdWx0V2hpdGVsaXN0LFxuICAgIHBvcHBlckNvbmZpZzogbnVsbFxuICB9O1xuICB2YXIgRGVmYXVsdFR5cGUgPSB7XG4gICAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gICAgdGVtcGxhdGU6ICdzdHJpbmcnLFxuICAgIHRpdGxlOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gICAgdHJpZ2dlcjogJ3N0cmluZycsXG4gICAgZGVsYXk6ICcobnVtYmVyfG9iamVjdCknLFxuICAgIGh0bWw6ICdib29sZWFuJyxcbiAgICBzZWxlY3RvcjogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICAgIHBsYWNlbWVudDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBvZmZzZXQ6ICcobnVtYmVyfHN0cmluZ3xmdW5jdGlvbiknLFxuICAgIGNvbnRhaW5lcjogJyhzdHJpbmd8ZWxlbWVudHxib29sZWFuKScsXG4gICAgZmFsbGJhY2tQbGFjZW1lbnQ6ICcoc3RyaW5nfGFycmF5KScsXG4gICAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgICBjdXN0b21DbGFzczogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBzYW5pdGl6ZTogJ2Jvb2xlYW4nLFxuICAgIHNhbml0aXplRm46ICcobnVsbHxmdW5jdGlvbiknLFxuICAgIHdoaXRlTGlzdDogJ29iamVjdCcsXG4gICAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0KSdcbiAgfTtcbiAgdmFyIEV2ZW50ID0ge1xuICAgIEhJREU6IFwiaGlkZVwiICsgRVZFTlRfS0VZLFxuICAgIEhJRERFTjogXCJoaWRkZW5cIiArIEVWRU5UX0tFWSxcbiAgICBTSE9XOiBcInNob3dcIiArIEVWRU5UX0tFWSxcbiAgICBTSE9XTjogXCJzaG93blwiICsgRVZFTlRfS0VZLFxuICAgIElOU0VSVEVEOiBcImluc2VydGVkXCIgKyBFVkVOVF9LRVksXG4gICAgQ0xJQ0s6IFwiY2xpY2tcIiArIEVWRU5UX0tFWSxcbiAgICBGT0NVU0lOOiBcImZvY3VzaW5cIiArIEVWRU5UX0tFWSxcbiAgICBGT0NVU09VVDogXCJmb2N1c291dFwiICsgRVZFTlRfS0VZLFxuICAgIE1PVVNFRU5URVI6IFwibW91c2VlbnRlclwiICsgRVZFTlRfS0VZLFxuICAgIE1PVVNFTEVBVkU6IFwibW91c2VsZWF2ZVwiICsgRVZFTlRfS0VZXG4gIH07XG4gIC8qKlxuICAgKiBDbGFzcyBkZWZpbml0aW9uXG4gICAqL1xuXG4gIHZhciBUb29sdGlwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUb29sdGlwKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgaWYgKHR5cGVvZiBQb3BwZXJfX2RlZmF1bHRbXCJkZWZhdWx0XCJdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpJyk7XG4gICAgICB9IC8vIFByaXZhdGVcblxuXG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fdGltZW91dCA9IDA7XG4gICAgICB0aGlzLl9ob3ZlclN0YXRlID0gJyc7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0ge307XG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsOyAvLyBQcm90ZWN0ZWRcblxuICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLnRpcCA9IG51bGw7XG5cbiAgICAgIHRoaXMuX3NldExpc3RlbmVycygpO1xuICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICB2YXIgX3Byb3RvID0gVG9vbHRpcC5wcm90b3R5cGU7XG5cbiAgICAvLyBQdWJsaWNcbiAgICBfcHJvdG8uZW5hYmxlID0gZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc2FibGUgPSBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF9wcm90by50b2dnbGVFbmFibGVkID0gZnVuY3Rpb24gdG9nZ2xlRW5hYmxlZCgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWQ7XG4gICAgfTtcblxuICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIHZhciBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXShldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpO1xuXG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihldmVudC5jdXJyZW50VGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKTtcbiAgICAgICAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXShldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICFjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrO1xuXG4gICAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgICBjb250ZXh0Ll9lbnRlcihudWxsLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0Ll9sZWF2ZShudWxsLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMuZ2V0VGlwRWxlbWVudCgpKS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcyk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9lbnRlcihudWxsLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0ucmVtb3ZlRGF0YSh0aGlzLmVsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpO1xuICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGhpcy5lbGVtZW50KS5vZmYodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVF9LRVkpO1xuICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGhpcy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vZmYoJ2hpZGUuYnMubW9kYWwnLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKTtcblxuICAgICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICAgICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMudGlwKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNFbmFibGVkID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsO1xuICAgICAgdGhpcy5faG92ZXJTdGF0ZSA9IG51bGw7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0gbnVsbDtcblxuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsO1xuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuY29uZmlnID0gbnVsbDtcbiAgICAgIHRoaXMudGlwID0gbnVsbDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKCRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMuZWxlbWVudCkuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSB1c2Ugc2hvdyBvbiB2aXNpYmxlIGVsZW1lbnRzJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaG93RXZlbnQgPSAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5FdmVudCh0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1cpO1xuXG4gICAgICBpZiAodGhpcy5pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICAgICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMuZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpO1xuICAgICAgICB2YXIgc2hhZG93Um9vdCA9IFV0aWxfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZpbmRTaGFkb3dSb290KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIHZhciBpc0luVGhlRG9tID0gJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY29udGFpbnMoc2hhZG93Um9vdCAhPT0gbnVsbCA/IHNoYWRvd1Jvb3QgOiB0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCAhaXNJblRoZURvbSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKTtcbiAgICAgICAgdmFyIHRpcElkID0gVXRpbF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSk7XG4gICAgICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGlwSWQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwSWQpO1xuICAgICAgICB0aGlzLnNldENvbnRlbnQoKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGlwKS5hZGRDbGFzcyhDTEFTU19OQU1FX0ZBREUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBsYWNlbWVudCA9IHR5cGVvZiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQgPT09ICdmdW5jdGlvbicgPyB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuY2FsbCh0aGlzLCB0aXAsIHRoaXMuZWxlbWVudCkgOiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQ7XG5cbiAgICAgICAgdmFyIGF0dGFjaG1lbnQgPSB0aGlzLl9nZXRBdHRhY2htZW50KHBsYWNlbWVudCk7XG5cbiAgICAgICAgdGhpcy5hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCk7XG5cbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuX2dldENvbnRhaW5lcigpO1xuXG4gICAgICAgICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRpcCkuZGF0YSh0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKTtcblxuICAgICAgICBpZiAoISRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNvbnRhaW5zKHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgdGhpcy50aXApKSB7XG4gICAgICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGlwKS5hcHBlbmRUbyhjb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSU5TRVJURUQpO1xuICAgICAgICB0aGlzLl9wb3BwZXIgPSBuZXcgUG9wcGVyX19kZWZhdWx0W1wiZGVmYXVsdFwiXSh0aGlzLmVsZW1lbnQsIHRpcCwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpKTtcbiAgICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGlwKS5hZGRDbGFzcyhDTEFTU19OQU1FX1NIT1cpO1xuICAgICAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXSh0aXApLmFkZENsYXNzKHRoaXMuY29uZmlnLmN1c3RvbUNsYXNzKTsgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgICAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgICAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcblxuICAgICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0oZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vbignbW91c2VvdmVyJywgbnVsbCwgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9vcCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMuY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgX3RoaXMuX2ZpeFRyYW5zaXRpb24oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcHJldkhvdmVyU3RhdGUgPSBfdGhpcy5faG92ZXJTdGF0ZTtcbiAgICAgICAgICBfdGhpcy5faG92ZXJTdGF0ZSA9IG51bGw7XG4gICAgICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0oX3RoaXMuZWxlbWVudCkudHJpZ2dlcihfdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XTik7XG5cbiAgICAgICAgICBpZiAocHJldkhvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX09VVCkge1xuICAgICAgICAgICAgX3RoaXMuX2xlYXZlKG51bGwsIF90aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMudGlwKS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZBREUpKSB7XG4gICAgICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWxfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMudGlwKTtcbiAgICAgICAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXSh0aGlzLnRpcCkub25lKFV0aWxfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5oaWRlID0gZnVuY3Rpb24gaGlkZShjYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKTtcbiAgICAgIHZhciBoaWRlRXZlbnQgPSAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5FdmVudCh0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJREUpO1xuXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKF90aGlzMi5faG92ZXJTdGF0ZSAhPT0gSE9WRVJfU1RBVEVfU0hPVyAmJiB0aXAucGFyZW50Tm9kZSkge1xuICAgICAgICAgIHRpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRpcCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczIuX2NsZWFuVGlwQ2xhc3MoKTtcblxuICAgICAgICBfdGhpczIuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcblxuICAgICAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXShfdGhpczIuZWxlbWVudCkudHJpZ2dlcihfdGhpczIuY29uc3RydWN0b3IuRXZlbnQuSElEREVOKTtcblxuICAgICAgICBpZiAoX3RoaXMyLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgICAgICBfdGhpczIuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXSh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KTtcblxuICAgICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRpcCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKTsgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG5cbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0oZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vZmYoJ21vdXNlb3ZlcicsIG51bGwsICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vb3ApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfQ0xJQ0tdID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfRk9DVVNdID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfSE9WRVJdID0gZmFsc2U7XG5cbiAgICAgIGlmICgkX19kZWZhdWx0W1wiZGVmYXVsdFwiXSh0aGlzLnRpcCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GQURFKSkge1xuICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGlwKTtcbiAgICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGlwKS5vbmUoVXRpbF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnO1xuICAgIH07XG5cbiAgICBfcHJvdG8udXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9wb3BwZXIuc2NoZWR1bGVVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9IC8vIFByb3RlY3RlZFxuICAgIDtcblxuICAgIF9wcm90by5pc1dpdGhDb250ZW50ID0gZnVuY3Rpb24gaXNXaXRoQ29udGVudCgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VGl0bGUoKSk7XG4gICAgfTtcblxuICAgIF9wcm90by5hZGRBdHRhY2htZW50Q2xhc3MgPSBmdW5jdGlvbiBhZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGhpcy5nZXRUaXBFbGVtZW50KCkpLmFkZENsYXNzKENMQVNTX1BSRUZJWCArIFwiLVwiICsgYXR0YWNobWVudCk7XG4gICAgfTtcblxuICAgIF9wcm90by5nZXRUaXBFbGVtZW50ID0gZnVuY3Rpb24gZ2V0VGlwRWxlbWVudCgpIHtcbiAgICAgIHRoaXMudGlwID0gdGhpcy50aXAgfHwgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGhpcy5jb25maWcudGVtcGxhdGUpWzBdO1xuICAgICAgcmV0dXJuIHRoaXMudGlwO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2V0Q29udGVudCA9IGZ1bmN0aW9uIHNldENvbnRlbnQoKSB7XG4gICAgICB2YXIgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KCk7XG4gICAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KCRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRpcC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX1RPT0xUSVBfSU5ORVIpKSwgdGhpcy5nZXRUaXRsZSgpKTtcbiAgICAgICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRpcCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9GQURFICsgXCIgXCIgKyBDTEFTU19OQU1FX1NIT1cpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2V0RWxlbWVudENvbnRlbnQgPSBmdW5jdGlvbiBzZXRFbGVtZW50Q29udGVudCgkZWxlbWVudCwgY29udGVudCkge1xuICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnb2JqZWN0JyAmJiAoY29udGVudC5ub2RlVHlwZSB8fCBjb250ZW50LmpxdWVyeSkpIHtcbiAgICAgICAgLy8gQ29udGVudCBpcyBhIERPTSBub2RlIG9yIGEgalF1ZXJ5XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5odG1sKSB7XG4gICAgICAgICAgaWYgKCEkX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjb250ZW50KS5wYXJlbnQoKS5pcygkZWxlbWVudCkpIHtcbiAgICAgICAgICAgICRlbGVtZW50LmVtcHR5KCkuYXBwZW5kKGNvbnRlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkZWxlbWVudC50ZXh0KCRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNvbnRlbnQpLnRleHQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5odG1sKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgICAgIGNvbnRlbnQgPSBzYW5pdGl6ZUh0bWwoY29udGVudCwgdGhpcy5jb25maWcud2hpdGVMaXN0LCB0aGlzLmNvbmZpZy5zYW5pdGl6ZUZuKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRlbGVtZW50Lmh0bWwoY29udGVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZWxlbWVudC50ZXh0KGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uZ2V0VGl0bGUgPSBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcbiAgICAgIHZhciB0aXRsZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKTtcblxuICAgICAgaWYgKCF0aXRsZSkge1xuICAgICAgICB0aXRsZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy50aXRsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLnRpdGxlLmNhbGwodGhpcy5lbGVtZW50KSA6IHRoaXMuY29uZmlnLnRpdGxlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGl0bGU7XG4gICAgfSAvLyBQcml2YXRlXG4gICAgO1xuXG4gICAgX3Byb3RvLl9nZXRQb3BwZXJDb25maWcgPSBmdW5jdGlvbiBfZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgZGVmYXVsdEJzQ29uZmlnID0ge1xuICAgICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG4gICAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KCksXG4gICAgICAgICAgZmxpcDoge1xuICAgICAgICAgICAgYmVoYXZpb3I6IHRoaXMuY29uZmlnLmZhbGxiYWNrUGxhY2VtZW50XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhcnJvdzoge1xuICAgICAgICAgICAgZWxlbWVudDogU0VMRUNUT1JfQVJST1dcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IHRoaXMuY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkNyZWF0ZTogZnVuY3Rpb24gb25DcmVhdGUoZGF0YSkge1xuICAgICAgICAgIGlmIChkYXRhLm9yaWdpbmFsUGxhY2VtZW50ICE9PSBkYXRhLnBsYWNlbWVudCkge1xuICAgICAgICAgICAgX3RoaXMzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblVwZGF0ZTogZnVuY3Rpb24gb25VcGRhdGUoZGF0YSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgZGVmYXVsdEJzQ29uZmlnLCB0aGlzLmNvbmZpZy5wb3BwZXJDb25maWcpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldE9mZnNldCA9IGZ1bmN0aW9uIF9nZXRPZmZzZXQoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIG9mZnNldCA9IHt9O1xuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLm9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvZmZzZXQuZm4gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIGRhdGEub2Zmc2V0cyA9IF9leHRlbmRzKHt9LCBkYXRhLm9mZnNldHMsIF90aGlzNC5jb25maWcub2Zmc2V0KGRhdGEub2Zmc2V0cywgX3RoaXM0LmVsZW1lbnQpKTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9mZnNldC5vZmZzZXQgPSB0aGlzLmNvbmZpZy5vZmZzZXQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24gX2dldENvbnRhaW5lcigpIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5jb250YWluZXIgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICAgICAgfVxuXG4gICAgICBpZiAoVXRpbF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uaXNFbGVtZW50KHRoaXMuY29uZmlnLmNvbnRhaW5lcikpIHtcbiAgICAgICAgcmV0dXJuICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMuY29uZmlnLmNvbnRhaW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXShkb2N1bWVudCkuZmluZCh0aGlzLmNvbmZpZy5jb250YWluZXIpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldEF0dGFjaG1lbnQgPSBmdW5jdGlvbiBfZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybiBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zZXRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfc2V0TGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHZhciB0cmlnZ2VycyA9IHRoaXMuY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKTtcbiAgICAgIHRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXShfdGhpczUuZWxlbWVudCkub24oX3RoaXM1LmNvbnN0cnVjdG9yLkV2ZW50LkNMSUNLLCBfdGhpczUuY29uZmlnLnNlbGVjdG9yLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczUudG9nZ2xlKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUUklHR0VSX01BTlVBTCkge1xuICAgICAgICAgIHZhciBldmVudEluID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/IF90aGlzNS5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUVOVEVSIDogX3RoaXM1LmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTSU47XG4gICAgICAgICAgdmFyIGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/IF90aGlzNS5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUxFQVZFIDogX3RoaXM1LmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTT1VUO1xuICAgICAgICAgICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKF90aGlzNS5lbGVtZW50KS5vbihldmVudEluLCBfdGhpczUuY29uZmlnLnNlbGVjdG9yLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczUuX2VudGVyKGV2ZW50KTtcbiAgICAgICAgICB9KS5vbihldmVudE91dCwgX3RoaXM1LmNvbmZpZy5zZWxlY3RvciwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM1Ll9sZWF2ZShldmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXM1LmVsZW1lbnQpIHtcbiAgICAgICAgICBfdGhpczUuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXSh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJy5tb2RhbCcpLm9uKCdoaWRlLmJzLm1vZGFsJywgdGhpcy5faGlkZU1vZGFsSGFuZGxlcik7XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IF9leHRlbmRzKHt9LCB0aGlzLmNvbmZpZywge1xuICAgICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICAgIHNlbGVjdG9yOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ZpeFRpdGxlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fZml4VGl0bGUgPSBmdW5jdGlvbiBfZml4VGl0bGUoKSB7XG4gICAgICB2YXIgdGl0bGVUeXBlID0gdHlwZW9mIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKTtcblxuICAgICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgdGl0bGVUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJywgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCAnJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJycpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2VudGVyID0gZnVuY3Rpb24gX2VudGVyKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICB2YXIgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVk7XG4gICAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXShldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpO1xuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGV2ZW50LmN1cnJlbnRUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpO1xuICAgICAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXShldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltldmVudC50eXBlID09PSAnZm9jdXNpbicgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUl0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0oY29udGV4dC5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykgfHwgY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfU0hPVykge1xuICAgICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfU0hPVztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dCk7XG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfU0hPVztcblxuICAgICAgaWYgKCFjb250ZXh0LmNvbmZpZy5kZWxheSB8fCAhY29udGV4dC5jb25maWcuZGVsYXkuc2hvdykge1xuICAgICAgICBjb250ZXh0LnNob3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9TSE9XKSB7XG4gICAgICAgICAgY29udGV4dC5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2xlYXZlID0gZnVuY3Rpb24gX2xlYXZlKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICB2YXIgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVk7XG4gICAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXShldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpO1xuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGV2ZW50LmN1cnJlbnRUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpO1xuICAgICAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXShldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltldmVudC50eXBlID09PSAnZm9jdXNvdXQnID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJdID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dCk7XG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfT1VUO1xuXG4gICAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKSB7XG4gICAgICAgIGNvbnRleHQuaGlkZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX09VVCkge1xuICAgICAgICAgIGNvbnRleHQuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9pc1dpdGhBY3RpdmVUcmlnZ2VyID0gZnVuY3Rpb24gX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSB7XG4gICAgICBmb3IgKHZhciB0cmlnZ2VyIGluIHRoaXMuX2FjdGl2ZVRyaWdnZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRyaWdnZXJbdHJpZ2dlcl0pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIHZhciBkYXRhQXR0cmlidXRlcyA9ICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMuZWxlbWVudCkuZGF0YSgpO1xuICAgICAgT2JqZWN0LmtleXMoZGF0YUF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGRhdGFBdHRyKSB7XG4gICAgICAgIGlmIChESVNBTExPV0VEX0FUVFJJQlVURVMuaW5kZXhPZihkYXRhQXR0cikgIT09IC0xKSB7XG4gICAgICAgICAgZGVsZXRlIGRhdGFBdHRyaWJ1dGVzW2RhdGFBdHRyXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25maWcgPSBfZXh0ZW5kcyh7fSwgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LCBkYXRhQXR0cmlidXRlcywgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgICBoaWRlOiBjb25maWcuZGVsYXlcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy50aXRsZSA9IGNvbmZpZy50aXRsZS50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5jb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIFV0aWxfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpO1xuXG4gICAgICBpZiAoY29uZmlnLnNhbml0aXplKSB7XG4gICAgICAgIGNvbmZpZy50ZW1wbGF0ZSA9IHNhbml0aXplSHRtbChjb25maWcudGVtcGxhdGUsIGNvbmZpZy53aGl0ZUxpc3QsIGNvbmZpZy5zYW5pdGl6ZUZuKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXREZWxlZ2F0ZUNvbmZpZyA9IGZ1bmN0aW9uIF9nZXREZWxlZ2F0ZUNvbmZpZygpIHtcbiAgICAgIHZhciBjb25maWcgPSB7fTtcblxuICAgICAgaWYgKHRoaXMuY29uZmlnKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmNvbmZpZykge1xuICAgICAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRba2V5XSAhPT0gdGhpcy5jb25maWdba2V5XSkge1xuICAgICAgICAgICAgY29uZmlnW2tleV0gPSB0aGlzLmNvbmZpZ1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2NsZWFuVGlwQ2xhc3MgPSBmdW5jdGlvbiBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICAgIHZhciAkdGlwID0gJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0odGhpcy5nZXRUaXBFbGVtZW50KCkpO1xuICAgICAgdmFyIHRhYkNsYXNzID0gJHRpcC5hdHRyKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWCk7XG5cbiAgICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGgpIHtcbiAgICAgICAgJHRpcC5yZW1vdmVDbGFzcyh0YWJDbGFzcy5qb2luKCcnKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlID0gZnVuY3Rpb24gX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShwb3BwZXJEYXRhKSB7XG4gICAgICB0aGlzLnRpcCA9IHBvcHBlckRhdGEuaW5zdGFuY2UucG9wcGVyO1xuXG4gICAgICB0aGlzLl9jbGVhblRpcENsYXNzKCk7XG5cbiAgICAgIHRoaXMuYWRkQXR0YWNobWVudENsYXNzKHRoaXMuX2dldEF0dGFjaG1lbnQocG9wcGVyRGF0YS5wbGFjZW1lbnQpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9maXhUcmFuc2l0aW9uID0gZnVuY3Rpb24gX2ZpeFRyYW5zaXRpb24oKSB7XG4gICAgICB2YXIgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KCk7XG4gICAgICB2YXIgaW5pdENvbmZpZ0FuaW1hdGlvbiA9IHRoaXMuY29uZmlnLmFuaW1hdGlvbjtcblxuICAgICAgaWYgKHRpcC5nZXRBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50JykgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXSh0aXApLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfRkFERSk7XG4gICAgICB0aGlzLmNvbmZpZy5hbmltYXRpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB0aGlzLmNvbmZpZy5hbmltYXRpb24gPSBpbml0Q29uZmlnQW5pbWF0aW9uO1xuICAgIH0gLy8gU3RhdGljXG4gICAgO1xuXG4gICAgVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGVsZW1lbnQgPSAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXSh0aGlzKTtcbiAgICAgICAgdmFyIGRhdGEgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICB2YXIgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZztcblxuICAgICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBUb29sdGlwKHRoaXMsIF9jb25maWcpO1xuICAgICAgICAgICRlbGVtZW50LmRhdGEoREFUQV9LRVksIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhUb29sdGlwLCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRGVmYXVsdFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJOQU1FXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIE5BTUU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRBVEFfS0VZXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERBVEFfS0VZO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJFdmVudFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBFdmVudDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRVZFTlRfS0VZXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIEVWRU5UX0tFWTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRGVmYXVsdFR5cGVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdFR5cGU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRvb2x0aXA7XG4gIH0oKTtcbiAgLyoqXG4gICAqIGpRdWVyeVxuICAgKi9cblxuXG4gICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZuW05BTUVdID0gVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlO1xuICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRvb2x0aXA7XG5cbiAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICByZXR1cm4gVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIHJldHVybiBUb29sdGlwO1xuXG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10b29sdGlwLmpzLm1hcFxuIiwiLyohXG4gICogQm9vdHN0cmFwIHV0aWwuanMgdjQuNi4yIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxuICAqIENvcHlyaWdodCAyMDExLTIwMjIgVGhlIEJvb3RzdHJhcCBBdXRob3JzIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvZ3JhcGhzL2NvbnRyaWJ1dG9ycylcbiAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuVXRpbCA9IGZhY3RvcnkoZ2xvYmFsLmpRdWVyeSkpO1xufSkodGhpcywgKGZ1bmN0aW9uICgkKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBfaW50ZXJvcERlZmF1bHRMZWdhY3kgKGUpIHsgcmV0dXJuIGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxuICB2YXIgJF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koJCk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCAodjQuNi4yKTogdXRpbC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIC8qKlxuICAgKiBQcml2YXRlIFRyYW5zaXRpb25FbmQgSGVscGVyc1xuICAgKi9cblxuICB2YXIgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCc7XG4gIHZhciBNQVhfVUlEID0gMTAwMDAwMDtcbiAgdmFyIE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMDsgLy8gU2hvdXRvdXQgQW5ndXNDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxuXG4gIGZ1bmN0aW9uIHRvVHlwZShvYmopIHtcbiAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gXCJcIiArIG9iajtcbiAgICB9XG5cbiAgICByZXR1cm4ge30udG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmluZFR5cGU6IFRSQU5TSVRJT05fRU5ELFxuICAgICAgZGVsZWdhdGVUeXBlOiBUUkFOU0lUSU9OX0VORCxcbiAgICAgIGhhbmRsZTogZnVuY3Rpb24gaGFuZGxlKGV2ZW50KSB7XG4gICAgICAgIGlmICgkX19kZWZhdWx0W1wiZGVmYXVsdFwiXShldmVudC50YXJnZXQpLmlzKHRoaXMpKSB7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50LmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kRW11bGF0b3IoZHVyYXRpb24pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICAgICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHRoaXMpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgVXRpbC50cmlnZ2VyVHJhbnNpdGlvbkVuZChfdGhpcyk7XG4gICAgICB9XG4gICAgfSwgZHVyYXRpb24pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQoKSB7XG4gICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uZm4uZW11bGF0ZVRyYW5zaXRpb25FbmQgPSB0cmFuc2l0aW9uRW5kRW11bGF0b3I7XG4gICAgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uZXZlbnQuc3BlY2lhbFtVdGlsLlRSQU5TSVRJT05fRU5EXSA9IGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKTtcbiAgfVxuICAvKipcbiAgICogUHVibGljIFV0aWwgQVBJXG4gICAqL1xuXG5cbiAgdmFyIFV0aWwgPSB7XG4gICAgVFJBTlNJVElPTl9FTkQ6ICdic1RyYW5zaXRpb25FbmQnLFxuICAgIGdldFVJRDogZnVuY3Rpb24gZ2V0VUlEKHByZWZpeCkge1xuICAgICAgZG8ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgICBwcmVmaXggKz0gfn4oTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpOyAvLyBcIn5+XCIgYWN0cyBsaWtlIGEgZmFzdGVyIE1hdGguZmxvb3IoKSBoZXJlXG4gICAgICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKTtcblxuICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICB9LFxuICAgIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQ6IGZ1bmN0aW9uIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgdmFyIHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XG5cbiAgICAgIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xuICAgICAgICB2YXIgaHJlZkF0dHIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICBzZWxlY3RvciA9IGhyZWZBdHRyICYmIGhyZWZBdHRyICE9PSAnIycgPyBocmVmQXR0ci50cmltKCkgOiAnJztcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsO1xuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50OiBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9IC8vIEdldCB0cmFuc2l0aW9uLWR1cmF0aW9uIG9mIHRoZSBlbGVtZW50XG5cblxuICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9ICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGVsZW1lbnQpLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xuICAgICAgdmFyIHRyYW5zaXRpb25EZWxheSA9ICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGVsZW1lbnQpLmNzcygndHJhbnNpdGlvbi1kZWxheScpO1xuICAgICAgdmFyIGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgdmFyIGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpOyAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG5cbiAgICAgIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSAvLyBJZiBtdWx0aXBsZSBkdXJhdGlvbnMgYXJlIGRlZmluZWQsIHRha2UgdGhlIGZpcnN0XG5cblxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF07XG4gICAgICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXTtcbiAgICAgIHJldHVybiAocGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICsgcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSO1xuICAgIH0sXG4gICAgcmVmbG93OiBmdW5jdGlvbiByZWZsb3coZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH0sXG4gICAgdHJpZ2dlclRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpIHtcbiAgICAgICRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGVsZW1lbnQpLnRyaWdnZXIoVFJBTlNJVElPTl9FTkQpO1xuICAgIH0sXG4gICAgc3VwcG9ydHNUcmFuc2l0aW9uRW5kOiBmdW5jdGlvbiBzdXBwb3J0c1RyYW5zaXRpb25FbmQoKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihUUkFOU0lUSU9OX0VORCk7XG4gICAgfSxcbiAgICBpc0VsZW1lbnQ6IGZ1bmN0aW9uIGlzRWxlbWVudChvYmopIHtcbiAgICAgIHJldHVybiAob2JqWzBdIHx8IG9iaikubm9kZVR5cGU7XG4gICAgfSxcbiAgICB0eXBlQ2hlY2tDb25maWc6IGZ1bmN0aW9uIHR5cGVDaGVja0NvbmZpZyhjb21wb25lbnROYW1lLCBjb25maWcsIGNvbmZpZ1R5cGVzKSB7XG4gICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBjb25maWdUeXBlcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZ1R5cGVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICB2YXIgZXhwZWN0ZWRUeXBlcyA9IGNvbmZpZ1R5cGVzW3Byb3BlcnR5XTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBjb25maWdbcHJvcGVydHldO1xuICAgICAgICAgIHZhciB2YWx1ZVR5cGUgPSB2YWx1ZSAmJiBVdGlsLmlzRWxlbWVudCh2YWx1ZSkgPyAnZWxlbWVudCcgOiB0b1R5cGUodmFsdWUpO1xuXG4gICAgICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbXBvbmVudE5hbWUudG9VcHBlckNhc2UoKSArIFwiOiBcIiArIChcIk9wdGlvbiBcXFwiXCIgKyBwcm9wZXJ0eSArIFwiXFxcIiBwcm92aWRlZCB0eXBlIFxcXCJcIiArIHZhbHVlVHlwZSArIFwiXFxcIiBcIikgKyAoXCJidXQgZXhwZWN0ZWQgdHlwZSBcXFwiXCIgKyBleHBlY3RlZFR5cGVzICsgXCJcXFwiLlwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBmaW5kU2hhZG93Um9vdDogZnVuY3Rpb24gZmluZFNoYWRvd1Jvb3QoZWxlbWVudCkge1xuICAgICAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcblxuXG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQuZ2V0Um9vdE5vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKCk7XG4gICAgICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICB9IC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XG5cblxuICAgICAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBVdGlsLmZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgfSxcbiAgICBqUXVlcnlEZXRlY3Rpb246IGZ1bmN0aW9uIGpRdWVyeURldGVjdGlvbigpIHtcbiAgICAgIGlmICh0eXBlb2YgJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnkuIGpRdWVyeSBtdXN0IGJlIGluY2x1ZGVkIGJlZm9yZSBCb290c3RyYXBcXCdzIEphdmFTY3JpcHQuJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciB2ZXJzaW9uID0gJF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uZm4uanF1ZXJ5LnNwbGl0KCcgJylbMF0uc3BsaXQoJy4nKTtcbiAgICAgIHZhciBtaW5NYWpvciA9IDE7XG4gICAgICB2YXIgbHRNYWpvciA9IDI7XG4gICAgICB2YXIgbWluTWlub3IgPSA5O1xuICAgICAgdmFyIG1pblBhdGNoID0gMTtcbiAgICAgIHZhciBtYXhNYWpvciA9IDQ7XG5cbiAgICAgIGlmICh2ZXJzaW9uWzBdIDwgbHRNYWpvciAmJiB2ZXJzaW9uWzFdIDwgbWluTWlub3IgfHwgdmVyc2lvblswXSA9PT0gbWluTWFqb3IgJiYgdmVyc2lvblsxXSA9PT0gbWluTWlub3IgJiYgdmVyc2lvblsyXSA8IG1pblBhdGNoIHx8IHZlcnNpb25bMF0gPj0gbWF4TWFqb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb290c3RyYXBcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgYXQgbGVhc3QgalF1ZXJ5IHYxLjkuMSBidXQgbGVzcyB0aGFuIHY0LjAuMCcpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgVXRpbC5qUXVlcnlEZXRlY3Rpb24oKTtcbiAgc2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQoKTtcblxuICByZXR1cm4gVXRpbDtcblxufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbC5qcy5tYXBcbiIsIi8qIVxuKiBmb2N1cy10cmFwIDcuNS4zXG4qIEBsaWNlbnNlIE1JVCwgaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvZm9jdXMtdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFXG4qL1xuaW1wb3J0IHsgaXNGb2N1c2FibGUsIHRhYmJhYmxlLCBmb2N1c2FibGUsIGlzVGFiYmFibGUsIGdldFRhYkluZGV4IH0gZnJvbSAndGFiYmFibGUnO1xuXG5mdW5jdGlvbiBvd25LZXlzKGUsIHIpIHtcbiAgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgbyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7XG4gICAgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKS5lbnVtZXJhYmxlO1xuICAgIH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pO1xuICB9XG4gIHJldHVybiB0O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIoZSkge1xuICBmb3IgKHZhciByID0gMTsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykge1xuICAgIHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTtcbiAgICByICUgMiA/IG93bktleXMoT2JqZWN0KHQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgX2RlZmluZVByb3BlcnR5KGUsIHIsIHRbcl0pO1xuICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgcikpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlO1xufVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gIGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKHR5cGVvZiByZXMgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbn1cblxudmFyIGFjdGl2ZUZvY3VzVHJhcHMgPSB7XG4gIGFjdGl2YXRlVHJhcDogZnVuY3Rpb24gYWN0aXZhdGVUcmFwKHRyYXBTdGFjaywgdHJhcCkge1xuICAgIGlmICh0cmFwU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGFjdGl2ZVRyYXAgPSB0cmFwU3RhY2tbdHJhcFN0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKGFjdGl2ZVRyYXAgIT09IHRyYXApIHtcbiAgICAgICAgYWN0aXZlVHJhcC5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgdHJhcEluZGV4ID0gdHJhcFN0YWNrLmluZGV4T2YodHJhcCk7XG4gICAgaWYgKHRyYXBJbmRleCA9PT0gLTEpIHtcbiAgICAgIHRyYXBTdGFjay5wdXNoKHRyYXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBtb3ZlIHRoaXMgZXhpc3RpbmcgdHJhcCB0byB0aGUgZnJvbnQgb2YgdGhlIHF1ZXVlXG4gICAgICB0cmFwU3RhY2suc3BsaWNlKHRyYXBJbmRleCwgMSk7XG4gICAgICB0cmFwU3RhY2sucHVzaCh0cmFwKTtcbiAgICB9XG4gIH0sXG4gIGRlYWN0aXZhdGVUcmFwOiBmdW5jdGlvbiBkZWFjdGl2YXRlVHJhcCh0cmFwU3RhY2ssIHRyYXApIHtcbiAgICB2YXIgdHJhcEluZGV4ID0gdHJhcFN0YWNrLmluZGV4T2YodHJhcCk7XG4gICAgaWYgKHRyYXBJbmRleCAhPT0gLTEpIHtcbiAgICAgIHRyYXBTdGFjay5zcGxpY2UodHJhcEluZGV4LCAxKTtcbiAgICB9XG4gICAgaWYgKHRyYXBTdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICB0cmFwU3RhY2tbdHJhcFN0YWNrLmxlbmd0aCAtIDFdLnVucGF1c2UoKTtcbiAgICB9XG4gIH1cbn07XG52YXIgaXNTZWxlY3RhYmxlSW5wdXQgPSBmdW5jdGlvbiBpc1NlbGVjdGFibGVJbnB1dChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWUgJiYgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcgJiYgdHlwZW9mIG5vZGUuc2VsZWN0ID09PSAnZnVuY3Rpb24nO1xufTtcbnZhciBpc0VzY2FwZUV2ZW50ID0gZnVuY3Rpb24gaXNFc2NhcGVFdmVudChlKSB7XG4gIHJldHVybiAoZSA9PT0gbnVsbCB8fCBlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlLmtleSkgPT09ICdFc2NhcGUnIHx8IChlID09PSBudWxsIHx8IGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGUua2V5KSA9PT0gJ0VzYycgfHwgKGUgPT09IG51bGwgfHwgZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZS5rZXlDb2RlKSA9PT0gMjc7XG59O1xudmFyIGlzVGFiRXZlbnQgPSBmdW5jdGlvbiBpc1RhYkV2ZW50KGUpIHtcbiAgcmV0dXJuIChlID09PSBudWxsIHx8IGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGUua2V5KSA9PT0gJ1RhYicgfHwgKGUgPT09IG51bGwgfHwgZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZS5rZXlDb2RlKSA9PT0gOTtcbn07XG5cbi8vIGNoZWNrcyBmb3IgVEFCIGJ5IGRlZmF1bHRcbnZhciBpc0tleUZvcndhcmQgPSBmdW5jdGlvbiBpc0tleUZvcndhcmQoZSkge1xuICByZXR1cm4gaXNUYWJFdmVudChlKSAmJiAhZS5zaGlmdEtleTtcbn07XG5cbi8vIGNoZWNrcyBmb3IgU0hJRlQrVEFCIGJ5IGRlZmF1bHRcbnZhciBpc0tleUJhY2t3YXJkID0gZnVuY3Rpb24gaXNLZXlCYWNrd2FyZChlKSB7XG4gIHJldHVybiBpc1RhYkV2ZW50KGUpICYmIGUuc2hpZnRLZXk7XG59O1xudmFyIGRlbGF5ID0gZnVuY3Rpb24gZGVsYXkoZm4pIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDApO1xufTtcblxuLy8gQXJyYXkuZmluZC9maW5kSW5kZXgoKSBhcmUgbm90IHN1cHBvcnRlZCBvbiBJRTsgdGhpcyByZXBsaWNhdGVzIGVub3VnaFxuLy8gIG9mIEFycmF5LmZpbmRJbmRleCgpIGZvciBvdXIgbmVlZHNcbnZhciBmaW5kSW5kZXggPSBmdW5jdGlvbiBmaW5kSW5kZXgoYXJyLCBmbikge1xuICB2YXIgaWR4ID0gLTE7XG4gIGFyci5ldmVyeShmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICBpZiAoZm4odmFsdWUpKSB7XG4gICAgICBpZHggPSBpO1xuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBicmVha1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlOyAvLyBuZXh0XG4gIH0pO1xuXG4gIHJldHVybiBpZHg7XG59O1xuXG4vKipcbiAqIEdldCBhbiBvcHRpb24ncyB2YWx1ZSB3aGVuIGl0IGNvdWxkIGJlIGEgcGxhaW4gdmFsdWUsIG9yIGEgaGFuZGxlciB0aGF0IHByb3ZpZGVzXG4gKiAgdGhlIHZhbHVlLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBPcHRpb24ncyB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7Li4uKn0gW3BhcmFtc10gQW55IHBhcmFtZXRlcnMgdG8gcGFzcyB0byB0aGUgaGFuZGxlciwgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybnMgeyp9IFRoZSBgdmFsdWVgLCBvciB0aGUgaGFuZGxlcidzIHJldHVybmVkIHZhbHVlLlxuICovXG52YXIgdmFsdWVPckhhbmRsZXIgPSBmdW5jdGlvbiB2YWx1ZU9ySGFuZGxlcih2YWx1ZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwYXJhbXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS5hcHBseSh2b2lkIDAsIHBhcmFtcykgOiB2YWx1ZTtcbn07XG52YXIgZ2V0QWN0dWFsVGFyZ2V0ID0gZnVuY3Rpb24gZ2V0QWN0dWFsVGFyZ2V0KGV2ZW50KSB7XG4gIC8vIE5PVEU6IElmIHRoZSB0cmFwIGlzIF9pbnNpZGVfIGEgc2hhZG93IERPTSwgZXZlbnQudGFyZ2V0IHdpbGwgYWx3YXlzIGJlIHRoZVxuICAvLyAgc2hhZG93IGhvc3QuIEhvd2V2ZXIsIGV2ZW50LnRhcmdldC5jb21wb3NlZFBhdGgoKSB3aWxsIGJlIGFuIGFycmF5IG9mXG4gIC8vICBub2RlcyBcImNsaWNrZWRcIiBmcm9tIGlubmVyLW1vc3QgKHRoZSBhY3R1YWwgZWxlbWVudCBpbnNpZGUgdGhlIHNoYWRvdykgdG9cbiAgLy8gIG91dGVyLW1vc3QgKHRoZSBob3N0IEhUTUwgZG9jdW1lbnQpLiBJZiB3ZSBoYXZlIGFjY2VzcyB0byBjb21wb3NlZFBhdGgoKSxcbiAgLy8gIHRoZW4gdXNlIGl0cyBmaXJzdCBlbGVtZW50OyBvdGhlcndpc2UsIGZhbGwgYmFjayB0byBldmVudC50YXJnZXQgKGFuZFxuICAvLyAgdGhpcyBvbmx5IHdvcmtzIGZvciBhbiBfb3Blbl8gc2hhZG93IERPTTsgb3RoZXJ3aXNlLFxuICAvLyAgY29tcG9zZWRQYXRoKClbMF0gPT09IGV2ZW50LnRhcmdldCBhbHdheXMpLlxuICByZXR1cm4gZXZlbnQudGFyZ2V0LnNoYWRvd1Jvb3QgJiYgdHlwZW9mIGV2ZW50LmNvbXBvc2VkUGF0aCA9PT0gJ2Z1bmN0aW9uJyA/IGV2ZW50LmNvbXBvc2VkUGF0aCgpWzBdIDogZXZlbnQudGFyZ2V0O1xufTtcblxuLy8gTk9URTogdGhpcyBtdXN0IGJlIF9vdXRzaWRlXyBgY3JlYXRlRm9jdXNUcmFwKClgIHRvIG1ha2Ugc3VyZSBhbGwgdHJhcHMgaW4gdGhpc1xuLy8gIGN1cnJlbnQgaW5zdGFuY2UgdXNlIHRoZSBzYW1lIHN0YWNrIGlmIGB1c2VyT3B0aW9ucy50cmFwU3RhY2tgIGlzbid0IHNwZWNpZmllZFxudmFyIGludGVybmFsVHJhcFN0YWNrID0gW107XG52YXIgY3JlYXRlRm9jdXNUcmFwID0gZnVuY3Rpb24gY3JlYXRlRm9jdXNUcmFwKGVsZW1lbnRzLCB1c2VyT3B0aW9ucykge1xuICAvLyBTU1I6IGEgbGl2ZSB0cmFwIHNob3VsZG4ndCBiZSBjcmVhdGVkIGluIHRoaXMgdHlwZSBvZiBlbnZpcm9ubWVudCBzbyB0aGlzXG4gIC8vICBzaG91bGQgYmUgc2FmZSBjb2RlIHRvIGV4ZWN1dGUgaWYgdGhlIGBkb2N1bWVudGAgb3B0aW9uIGlzbid0IHNwZWNpZmllZFxuICB2YXIgZG9jID0gKHVzZXJPcHRpb25zID09PSBudWxsIHx8IHVzZXJPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyT3B0aW9ucy5kb2N1bWVudCkgfHwgZG9jdW1lbnQ7XG4gIHZhciB0cmFwU3RhY2sgPSAodXNlck9wdGlvbnMgPT09IG51bGwgfHwgdXNlck9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVzZXJPcHRpb25zLnRyYXBTdGFjaykgfHwgaW50ZXJuYWxUcmFwU3RhY2s7XG4gIHZhciBjb25maWcgPSBfb2JqZWN0U3ByZWFkMih7XG4gICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IHRydWUsXG4gICAgZXNjYXBlRGVhY3RpdmF0ZXM6IHRydWUsXG4gICAgZGVsYXlJbml0aWFsRm9jdXM6IHRydWUsXG4gICAgaXNLZXlGb3J3YXJkOiBpc0tleUZvcndhcmQsXG4gICAgaXNLZXlCYWNrd2FyZDogaXNLZXlCYWNrd2FyZFxuICB9LCB1c2VyT3B0aW9ucyk7XG4gIHZhciBzdGF0ZSA9IHtcbiAgICAvLyBjb250YWluZXJzIGdpdmVuIHRvIGNyZWF0ZUZvY3VzVHJhcCgpXG4gICAgLy8gQHR5cGUge0FycmF5PEhUTUxFbGVtZW50Pn1cbiAgICBjb250YWluZXJzOiBbXSxcbiAgICAvLyBsaXN0IG9mIG9iamVjdHMgaWRlbnRpZnlpbmcgdGFiYmFibGUgbm9kZXMgaW4gYGNvbnRhaW5lcnNgIGluIHRoZSB0cmFwXG4gICAgLy8gTk9URTogaXQncyBwb3NzaWJsZSB0aGF0IGEgZ3JvdXAgaGFzIG5vIHRhYmJhYmxlIG5vZGVzIGlmIG5vZGVzIGdldCByZW1vdmVkIHdoaWxlIHRoZSB0cmFwXG4gICAgLy8gIGlzIGFjdGl2ZSwgYnV0IHRoZSB0cmFwIHNob3VsZCBuZXZlciBnZXQgdG8gYSBzdGF0ZSB3aGVyZSB0aGVyZSBpc24ndCBhdCBsZWFzdCBvbmUgZ3JvdXBcbiAgICAvLyAgd2l0aCBhdCBsZWFzdCBvbmUgdGFiYmFibGUgbm9kZSBpbiBpdCAodGhhdCB3b3VsZCBsZWFkIHRvIGFuIGVycm9yIGNvbmRpdGlvbiB0aGF0IHdvdWxkXG4gICAgLy8gIHJlc3VsdCBpbiBhbiBlcnJvciBiZWluZyB0aHJvd24pXG4gICAgLy8gQHR5cGUge0FycmF5PHtcbiAgICAvLyAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgLy8gICB0YWJiYWJsZU5vZGVzOiBBcnJheTxIVE1MRWxlbWVudD4sIC8vIGVtcHR5IGlmIG5vbmVcbiAgICAvLyAgIGZvY3VzYWJsZU5vZGVzOiBBcnJheTxIVE1MRWxlbWVudD4sIC8vIGVtcHR5IGlmIG5vbmVcbiAgICAvLyAgIHBvc1RhYkluZGV4ZXNGb3VuZDogYm9vbGVhbixcbiAgICAvLyAgIGZpcnN0VGFiYmFibGVOb2RlOiBIVE1MRWxlbWVudHx1bmRlZmluZWQsXG4gICAgLy8gICBsYXN0VGFiYmFibGVOb2RlOiBIVE1MRWxlbWVudHx1bmRlZmluZWQsXG4gICAgLy8gICBmaXJzdERvbVRhYmJhYmxlTm9kZTogSFRNTEVsZW1lbnR8dW5kZWZpbmVkLFxuICAgIC8vICAgbGFzdERvbVRhYmJhYmxlTm9kZTogSFRNTEVsZW1lbnR8dW5kZWZpbmVkLFxuICAgIC8vICAgbmV4dFRhYmJhYmxlTm9kZTogKG5vZGU6IEhUTUxFbGVtZW50LCBmb3J3YXJkOiBib29sZWFuKSA9PiBIVE1MRWxlbWVudHx1bmRlZmluZWRcbiAgICAvLyB9Pn1cbiAgICBjb250YWluZXJHcm91cHM6IFtdLFxuICAgIC8vIHNhbWUgb3JkZXIvbGVuZ3RoIGFzIGBjb250YWluZXJzYCBsaXN0XG5cbiAgICAvLyByZWZlcmVuY2VzIHRvIG9iamVjdHMgaW4gYGNvbnRhaW5lckdyb3Vwc2AsIGJ1dCBvbmx5IHRob3NlIHRoYXQgYWN0dWFsbHkgaGF2ZVxuICAgIC8vICB0YWJiYWJsZSBub2RlcyBpbiB0aGVtXG4gICAgLy8gTk9URTogc2FtZSBvcmRlciBhcyBgY29udGFpbmVyc2AgYW5kIGBjb250YWluZXJHcm91cHNgLCBidXQgX19ub3QgbmVjZXNzYXJpbHlfX1xuICAgIC8vICB0aGUgc2FtZSBsZW5ndGhcbiAgICB0YWJiYWJsZUdyb3VwczogW10sXG4gICAgbm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uOiBudWxsLFxuICAgIG1vc3RSZWNlbnRseUZvY3VzZWROb2RlOiBudWxsLFxuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgcGF1c2VkOiBmYWxzZSxcbiAgICAvLyB0aW1lciBJRCBmb3Igd2hlbiBkZWxheUluaXRpYWxGb2N1cyBpcyB0cnVlIGFuZCBpbml0aWFsIGZvY3VzIGluIHRoaXMgdHJhcFxuICAgIC8vICBoYXMgYmVlbiBkZWxheWVkIGR1cmluZyBhY3RpdmF0aW9uXG4gICAgZGVsYXlJbml0aWFsRm9jdXNUaW1lcjogdW5kZWZpbmVkLFxuICAgIC8vIHRoZSBtb3N0IHJlY2VudCBLZXlib2FyZEV2ZW50IGZvciB0aGUgY29uZmlndXJlZCBuYXYga2V5ICh0eXBpY2FsbHkgW1NISUZUK11UQUIpLCBpZiBhbnlcbiAgICByZWNlbnROYXZFdmVudDogdW5kZWZpbmVkXG4gIH07XG4gIHZhciB0cmFwOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1jb25zdCAtLSBzb21lIHByaXZhdGUgZnVuY3Rpb25zIHJlZmVyZW5jZSBpdCwgYW5kIGl0cyBtZXRob2RzIHJlZmVyZW5jZSBwcml2YXRlIGZ1bmN0aW9ucywgc28gd2UgbXVzdCBkZWNsYXJlIGhlcmUgYW5kIGRlZmluZSBsYXRlclxuXG4gIC8qKlxuICAgKiBHZXRzIGEgY29uZmlndXJhdGlvbiBvcHRpb24gdmFsdWUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fHVuZGVmaW5lZH0gY29uZmlnT3ZlcnJpZGVPcHRpb25zIElmIHRydWUsIGFuZCBvcHRpb24gaXMgZGVmaW5lZCBpbiB0aGlzIHNldCxcbiAgICogIHZhbHVlIHdpbGwgYmUgdGFrZW4gZnJvbSB0aGlzIG9iamVjdC4gT3RoZXJ3aXNlLCB2YWx1ZSB3aWxsIGJlIHRha2VuIGZyb20gYmFzZSBjb25maWd1cmF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uTmFtZSBOYW1lIG9mIHRoZSBvcHRpb24gd2hvc2UgdmFsdWUgaXMgc291Z2h0LlxuICAgKiBAcGFyYW0ge3N0cmluZ3x1bmRlZmluZWR9IFtjb25maWdPcHRpb25OYW1lXSBOYW1lIG9mIG9wdGlvbiB0byB1c2UgX19pbnN0ZWFkIG9mX18gYG9wdGlvbk5hbWVgXG4gICAqICBJSUYgYGNvbmZpZ092ZXJyaWRlT3B0aW9uc2AgaXMgbm90IGRlZmluZWQuIE90aGVyd2lzZSwgYG9wdGlvbk5hbWVgIGlzIHVzZWQuXG4gICAqL1xuICB2YXIgZ2V0T3B0aW9uID0gZnVuY3Rpb24gZ2V0T3B0aW9uKGNvbmZpZ092ZXJyaWRlT3B0aW9ucywgb3B0aW9uTmFtZSwgY29uZmlnT3B0aW9uTmFtZSkge1xuICAgIHJldHVybiBjb25maWdPdmVycmlkZU9wdGlvbnMgJiYgY29uZmlnT3ZlcnJpZGVPcHRpb25zW29wdGlvbk5hbWVdICE9PSB1bmRlZmluZWQgPyBjb25maWdPdmVycmlkZU9wdGlvbnNbb3B0aW9uTmFtZV0gOiBjb25maWdbY29uZmlnT3B0aW9uTmFtZSB8fCBvcHRpb25OYW1lXTtcbiAgfTtcblxuICAvKipcbiAgICogRmluZHMgdGhlIGluZGV4IG9mIHRoZSBjb250YWluZXIgdGhhdCBjb250YWlucyB0aGUgZWxlbWVudC5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge0V2ZW50fSBbZXZlbnRdIElmIGF2YWlsYWJsZSwgYW5kIGBlbGVtZW50YCBpc24ndCBkaXJlY3RseSBmb3VuZCBpbiBhbnkgY29udGFpbmVyLFxuICAgKiAgdGhlIGV2ZW50J3MgY29tcG9zZWQgcGF0aCBpcyB1c2VkIHRvIHNlZSBpZiBpbmNsdWRlcyBhbnkga25vd24gdHJhcCBjb250YWluZXJzIGluIHRoZVxuICAgKiAgY2FzZSB3aGVyZSB0aGUgZWxlbWVudCBpcyBpbnNpZGUgYSBTaGFkb3cgRE9NLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBJbmRleCBvZiB0aGUgY29udGFpbmVyIGluIGVpdGhlciBgc3RhdGUuY29udGFpbmVyc2Agb3JcbiAgICogIGBzdGF0ZS5jb250YWluZXJHcm91cHNgICh0aGUgb3JkZXIvbGVuZ3RoIG9mIHRoZXNlIGxpc3RzIGFyZSB0aGUgc2FtZSk7IC0xXG4gICAqICBpZiB0aGUgZWxlbWVudCBpc24ndCBmb3VuZC5cbiAgICovXG4gIHZhciBmaW5kQ29udGFpbmVySW5kZXggPSBmdW5jdGlvbiBmaW5kQ29udGFpbmVySW5kZXgoZWxlbWVudCwgZXZlbnQpIHtcbiAgICB2YXIgY29tcG9zZWRQYXRoID0gdHlwZW9mIChldmVudCA9PT0gbnVsbCB8fCBldmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnQuY29tcG9zZWRQYXRoKSA9PT0gJ2Z1bmN0aW9uJyA/IGV2ZW50LmNvbXBvc2VkUGF0aCgpIDogdW5kZWZpbmVkO1xuICAgIC8vIE5PVEU6IHNlYXJjaCBgY29udGFpbmVyR3JvdXBzYCBiZWNhdXNlIGl0J3MgcG9zc2libGUgYSBncm91cCBjb250YWlucyBubyB0YWJiYWJsZVxuICAgIC8vICBub2RlcywgYnV0IHN0aWxsIGNvbnRhaW5zIGZvY3VzYWJsZSBub2RlcyAoZS5nLiBpZiB0aGV5IGFsbCBoYXZlIGB0YWJpbmRleD0tMWApXG4gICAgLy8gIGFuZCB3ZSBzdGlsbCBuZWVkIHRvIGZpbmQgdGhlIGVsZW1lbnQgaW4gdGhlcmVcbiAgICByZXR1cm4gc3RhdGUuY29udGFpbmVyR3JvdXBzLmZpbmRJbmRleChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IF9yZWYuY29udGFpbmVyLFxuICAgICAgICB0YWJiYWJsZU5vZGVzID0gX3JlZi50YWJiYWJsZU5vZGVzO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lci5jb250YWlucyhlbGVtZW50KSB8fCAoIC8vIGZhbGwgYmFjayB0byBleHBsaWNpdCB0YWJiYWJsZSBzZWFyY2ggd2hpY2ggd2lsbCB0YWtlIGludG8gY29uc2lkZXJhdGlvbiBhbnlcbiAgICAgIC8vICB3ZWIgY29tcG9uZW50cyBpZiB0aGUgYHRhYmJhYmxlT3B0aW9ucy5nZXRTaGFkb3dSb290YCBvcHRpb24gd2FzIHVzZWQgZm9yXG4gICAgICAvLyAgdGhlIHRyYXAsIGVuYWJsaW5nIHNoYWRvdyBET00gc3VwcG9ydCBpbiB0YWJiYWJsZSAoYE5vZGUuY29udGFpbnMoKWAgZG9lc24ndFxuICAgICAgLy8gIGxvb2sgaW5zaWRlIHdlYiBjb21wb25lbnRzIGV2ZW4gaWYgb3BlbilcbiAgICAgIGNvbXBvc2VkUGF0aCA9PT0gbnVsbCB8fCBjb21wb3NlZFBhdGggPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250YWluZXIpKSB8fCB0YWJiYWJsZU5vZGVzLmZpbmQoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUgPT09IGVsZW1lbnQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0cyB0aGUgbm9kZSBmb3IgdGhlIGdpdmVuIG9wdGlvbiwgd2hpY2ggaXMgZXhwZWN0ZWQgdG8gYmUgYW4gb3B0aW9uIHRoYXRcbiAgICogIGNhbiBiZSBlaXRoZXIgYSBET00gbm9kZSwgYSBzdHJpbmcgdGhhdCBpcyBhIHNlbGVjdG9yIHRvIGdldCBhIG5vZGUsIGBmYWxzZWBcbiAgICogIChpZiBhIG5vZGUgaXMgZXhwbGljaXRseSBOT1QgZ2l2ZW4pLCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbnkgb2YgdGhlc2VcbiAgICogIHZhbHVlcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbk5hbWVcbiAgICogQHJldHVybnMge3VuZGVmaW5lZCB8IGZhbHNlIHwgSFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50fSBSZXR1cm5zXG4gICAqICBgdW5kZWZpbmVkYCBpZiB0aGUgb3B0aW9uIGlzIG5vdCBzcGVjaWZpZWQ7IGBmYWxzZWAgaWYgdGhlIG9wdGlvblxuICAgKiAgcmVzb2x2ZWQgdG8gYGZhbHNlYCAobm9kZSBleHBsaWNpdGx5IG5vdCBnaXZlbik7IG90aGVyd2lzZSwgdGhlIHJlc29sdmVkXG4gICAqICBET00gbm9kZS5cbiAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBvcHRpb24gaXMgc2V0LCBub3QgYGZhbHNlYCwgYW5kIGlzIG5vdCwgb3IgZG9lcyBub3RcbiAgICogIHJlc29sdmUgdG8gYSBub2RlLlxuICAgKi9cbiAgdmFyIGdldE5vZGVGb3JPcHRpb24gPSBmdW5jdGlvbiBnZXROb2RlRm9yT3B0aW9uKG9wdGlvbk5hbWUpIHtcbiAgICB2YXIgb3B0aW9uVmFsdWUgPSBjb25maWdbb3B0aW9uTmFtZV07XG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBwYXJhbXNbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG4gICAgICBvcHRpb25WYWx1ZSA9IG9wdGlvblZhbHVlLmFwcGx5KHZvaWQgMCwgcGFyYW1zKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvblZhbHVlID09PSB0cnVlKSB7XG4gICAgICBvcHRpb25WYWx1ZSA9IHVuZGVmaW5lZDsgLy8gdXNlIGRlZmF1bHQgdmFsdWVcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvblZhbHVlKSB7XG4gICAgICBpZiAob3B0aW9uVmFsdWUgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25WYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvblZhbHVlO1xuICAgICAgfVxuICAgICAgLy8gZWxzZSwgZW1wdHkgc3RyaW5nIChpbnZhbGlkKSwgbnVsbCAoaW52YWxpZCksIDAgKGludmFsaWQpXG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImBcIi5jb25jYXQob3B0aW9uTmFtZSwgXCJgIHdhcyBzcGVjaWZpZWQgYnV0IHdhcyBub3QgYSBub2RlLCBvciBkaWQgbm90IHJldHVybiBhIG5vZGVcIikpO1xuICAgIH1cbiAgICB2YXIgbm9kZSA9IG9wdGlvblZhbHVlOyAvLyBjb3VsZCBiZSBIVE1MRWxlbWVudCwgU1ZHRWxlbWVudCwgb3Igbm9uLWVtcHR5IHN0cmluZyBhdCB0aGlzIHBvaW50XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgbm9kZSA9IGRvYy5xdWVyeVNlbGVjdG9yKG9wdGlvblZhbHVlKTsgLy8gcmVzb2x2ZSB0byBub2RlLCBvciBudWxsIGlmIGZhaWxzXG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYFwiLmNvbmNhdChvcHRpb25OYW1lLCBcImAgYXMgc2VsZWN0b3IgcmVmZXJzIHRvIG5vIGtub3duIG5vZGVcIikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcbiAgdmFyIGdldEluaXRpYWxGb2N1c05vZGUgPSBmdW5jdGlvbiBnZXRJbml0aWFsRm9jdXNOb2RlKCkge1xuICAgIHZhciBub2RlID0gZ2V0Tm9kZUZvck9wdGlvbignaW5pdGlhbEZvY3VzJyk7XG5cbiAgICAvLyBmYWxzZSBleHBsaWNpdGx5IGluZGljYXRlcyB3ZSB3YW50IG5vIGluaXRpYWxGb2N1cyBhdCBhbGxcbiAgICBpZiAobm9kZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCB8fCAhaXNGb2N1c2FibGUobm9kZSwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucykpIHtcbiAgICAgIC8vIG9wdGlvbiBub3Qgc3BlY2lmaWVkIG5vciBmb2N1c2FibGU6IHVzZSBmYWxsYmFjayBvcHRpb25zXG4gICAgICBpZiAoZmluZENvbnRhaW5lckluZGV4KGRvYy5hY3RpdmVFbGVtZW50KSA+PSAwKSB7XG4gICAgICAgIG5vZGUgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBmaXJzdFRhYmJhYmxlR3JvdXAgPSBzdGF0ZS50YWJiYWJsZUdyb3Vwc1swXTtcbiAgICAgICAgdmFyIGZpcnN0VGFiYmFibGVOb2RlID0gZmlyc3RUYWJiYWJsZUdyb3VwICYmIGZpcnN0VGFiYmFibGVHcm91cC5maXJzdFRhYmJhYmxlTm9kZTtcblxuICAgICAgICAvLyBOT1RFOiBgZmFsbGJhY2tGb2N1c2Agb3B0aW9uIGZ1bmN0aW9uIGNhbm5vdCByZXR1cm4gYGZhbHNlYCAobm90IHN1cHBvcnRlZClcbiAgICAgICAgbm9kZSA9IGZpcnN0VGFiYmFibGVOb2RlIHx8IGdldE5vZGVGb3JPcHRpb24oJ2ZhbGxiYWNrRm9jdXMnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdXIgZm9jdXMtdHJhcCBuZWVkcyB0byBoYXZlIGF0IGxlYXN0IG9uZSBmb2N1c2FibGUgZWxlbWVudCcpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcbiAgdmFyIHVwZGF0ZVRhYmJhYmxlTm9kZXMgPSBmdW5jdGlvbiB1cGRhdGVUYWJiYWJsZU5vZGVzKCkge1xuICAgIHN0YXRlLmNvbnRhaW5lckdyb3VwcyA9IHN0YXRlLmNvbnRhaW5lcnMubWFwKGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICAgIHZhciB0YWJiYWJsZU5vZGVzID0gdGFiYmFibGUoY29udGFpbmVyLCBjb25maWcudGFiYmFibGVPcHRpb25zKTtcblxuICAgICAgLy8gTk9URTogaWYgd2UgaGF2ZSB0YWJiYWJsZSBub2Rlcywgd2UgbXVzdCBoYXZlIGZvY3VzYWJsZSBub2RlczsgZm9jdXNhYmxlIG5vZGVzXG4gICAgICAvLyAgYXJlIGEgc3VwZXJzZXQgb2YgdGFiYmFibGUgbm9kZXMgc2luY2Ugbm9kZXMgd2l0aCBuZWdhdGl2ZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZXNcbiAgICAgIC8vICBhcmUgZm9jdXNhYmxlIGJ1dCBub3QgdGFiYmFibGVcbiAgICAgIHZhciBmb2N1c2FibGVOb2RlcyA9IGZvY3VzYWJsZShjb250YWluZXIsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpO1xuICAgICAgdmFyIGZpcnN0VGFiYmFibGVOb2RlID0gdGFiYmFibGVOb2Rlcy5sZW5ndGggPiAwID8gdGFiYmFibGVOb2Rlc1swXSA6IHVuZGVmaW5lZDtcbiAgICAgIHZhciBsYXN0VGFiYmFibGVOb2RlID0gdGFiYmFibGVOb2Rlcy5sZW5ndGggPiAwID8gdGFiYmFibGVOb2Rlc1t0YWJiYWJsZU5vZGVzLmxlbmd0aCAtIDFdIDogdW5kZWZpbmVkO1xuICAgICAgdmFyIGZpcnN0RG9tVGFiYmFibGVOb2RlID0gZm9jdXNhYmxlTm9kZXMuZmluZChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gaXNUYWJiYWJsZShub2RlKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGxhc3REb21UYWJiYWJsZU5vZGUgPSBmb2N1c2FibGVOb2Rlcy5zbGljZSgpLnJldmVyc2UoKS5maW5kKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiBpc1RhYmJhYmxlKG5vZGUpO1xuICAgICAgfSk7XG4gICAgICB2YXIgcG9zVGFiSW5kZXhlc0ZvdW5kID0gISF0YWJiYWJsZU5vZGVzLmZpbmQoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGdldFRhYkluZGV4KG5vZGUpID4gMDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgIHRhYmJhYmxlTm9kZXM6IHRhYmJhYmxlTm9kZXMsXG4gICAgICAgIGZvY3VzYWJsZU5vZGVzOiBmb2N1c2FibGVOb2RlcyxcbiAgICAgICAgLyoqIFRydWUgaWYgYXQgbGVhc3Qgb25lIG5vZGUgd2l0aCBwb3NpdGl2ZSBgdGFiaW5kZXhgIHdhcyBmb3VuZCBpbiB0aGlzIGNvbnRhaW5lci4gKi9cbiAgICAgICAgcG9zVGFiSW5kZXhlc0ZvdW5kOiBwb3NUYWJJbmRleGVzRm91bmQsXG4gICAgICAgIC8qKiBGaXJzdCB0YWJiYWJsZSBub2RlIGluIGNvbnRhaW5lciwgX190YWJpbmRleF9fIG9yZGVyOyBgdW5kZWZpbmVkYCBpZiBub25lLiAqL1xuICAgICAgICBmaXJzdFRhYmJhYmxlTm9kZTogZmlyc3RUYWJiYWJsZU5vZGUsXG4gICAgICAgIC8qKiBMYXN0IHRhYmJhYmxlIG5vZGUgaW4gY29udGFpbmVyLCBfX3RhYmluZGV4X18gb3JkZXI7IGB1bmRlZmluZWRgIGlmIG5vbmUuICovXG4gICAgICAgIGxhc3RUYWJiYWJsZU5vZGU6IGxhc3RUYWJiYWJsZU5vZGUsXG4gICAgICAgIC8vIE5PVEU6IERPTSBvcmRlciBpcyBOT1QgTkVDRVNTQVJJTFkgXCJkb2N1bWVudCBwb3NpdGlvblwiIG9yZGVyLCBidXQgZmlndXJpbmcgdGhhdCBvdXRcbiAgICAgICAgLy8gIHdvdWxkIHJlcXVpcmUgbW9yZSB0aGFuIGp1c3QgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05vZGUvY29tcGFyZURvY3VtZW50UG9zaXRpb25cbiAgICAgICAgLy8gIGJlY2F1c2UgdGhhdCBBUEkgZG9lc24ndCB3b3JrIHdpdGggU2hhZG93IERPTSBhcyB3ZWxsIGFzIGl0IHNob3VsZCAoQHNlZVxuICAgICAgICAvLyAgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzMyMCkgYW5kIHNpbmNlIHRoaXMgZmlyc3QvbGFzdCBpcyBvbmx5IG5lZWRlZCwgc28gZmFyLFxuICAgICAgICAvLyAgdG8gYWRkcmVzcyBhbiBlZGdlIGNhc2UgcmVsYXRlZCB0byBwb3NpdGl2ZSB0YWJpbmRleCBzdXBwb3J0LCB0aGlzIHNlZW1zIGxpa2UgYSBtdWNoIGVhc2llcixcbiAgICAgICAgLy8gIFwiY2xvc2UgZW5vdWdoIG1vc3Qgb2YgdGhlIHRpbWVcIiBhbHRlcm5hdGl2ZSBmb3IgcG9zaXRpdmUgdGFiaW5kZXhlcyB3aGljaCBzaG91bGQgZ2VuZXJhbGx5XG4gICAgICAgIC8vICBiZSBhdm9pZGVkIGFueXdheS4uLlxuICAgICAgICAvKiogRmlyc3QgdGFiYmFibGUgbm9kZSBpbiBjb250YWluZXIsIF9fRE9NX18gb3JkZXI7IGB1bmRlZmluZWRgIGlmIG5vbmUuICovXG4gICAgICAgIGZpcnN0RG9tVGFiYmFibGVOb2RlOiBmaXJzdERvbVRhYmJhYmxlTm9kZSxcbiAgICAgICAgLyoqIExhc3QgdGFiYmFibGUgbm9kZSBpbiBjb250YWluZXIsIF9fRE9NX18gb3JkZXI7IGB1bmRlZmluZWRgIGlmIG5vbmUuICovXG4gICAgICAgIGxhc3REb21UYWJiYWJsZU5vZGU6IGxhc3REb21UYWJiYWJsZU5vZGUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaW5kcyB0aGUgX190YWJiYWJsZV9fIG5vZGUgdGhhdCBmb2xsb3dzIHRoZSBnaXZlbiBub2RlIGluIHRoZSBzcGVjaWZpZWQgZGlyZWN0aW9uLFxuICAgICAgICAgKiAgaW4gdGhpcyBjb250YWluZXIsIGlmIGFueS5cbiAgICAgICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3J3YXJkXSBUcnVlIGlmIGdvaW5nIGluIGZvcndhcmQgdGFiIG9yZGVyOyBmYWxzZSBpZiBnb2luZ1xuICAgICAgICAgKiAgaW4gcmV2ZXJzZS5cbiAgICAgICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fHVuZGVmaW5lZH0gVGhlIG5leHQgdGFiYmFibGUgbm9kZSwgaWYgYW55LlxuICAgICAgICAgKi9cbiAgICAgICAgbmV4dFRhYmJhYmxlTm9kZTogZnVuY3Rpb24gbmV4dFRhYmJhYmxlTm9kZShub2RlKSB7XG4gICAgICAgICAgdmFyIGZvcndhcmQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG4gICAgICAgICAgdmFyIG5vZGVJZHggPSB0YWJiYWJsZU5vZGVzLmluZGV4T2Yobm9kZSk7XG4gICAgICAgICAgaWYgKG5vZGVJZHggPCAwKSB7XG4gICAgICAgICAgICAvLyBlaXRoZXIgbm90IHRhYmJhYmxlIG5vciBmb2N1c2FibGUsIG9yIHdhcyBmb2N1c2VkIGJ1dCBub3QgdGFiYmFibGUgKG5lZ2F0aXZlIHRhYmluZGV4KTpcbiAgICAgICAgICAgIC8vICBzaW5jZSBgbm9kZWAgc2hvdWxkIGF0IGxlYXN0IGhhdmUgYmVlbiBmb2N1c2FibGUsIHdlIGFzc3VtZSB0aGF0J3MgdGhlIGNhc2UgYW5kIG1pbWljXG4gICAgICAgICAgICAvLyAgd2hhdCBicm93c2VycyBkbywgd2hpY2ggaXMgc2V0IGZvY3VzIHRvIHRoZSBuZXh0IG5vZGUgaW4gX19kb2N1bWVudCBwb3NpdGlvbiBvcmRlcl9fLFxuICAgICAgICAgICAgLy8gIHJlZ2FyZGxlc3Mgb2YgcG9zaXRpdmUgdGFiaW5kZXhlcywgaWYgYW55IC0tIGFuZCBmb3IgcmVhc29ucyBleHBsYWluZWQgaW4gdGhlIE5PVEVcbiAgICAgICAgICAgIC8vICBhYm92ZSByZWxhdGVkIHRvIGBmaXJzdERvbVRhYmJhYmxlYCBhbmQgYGxhc3REb21UYWJiYWJsZWAgcHJvcGVydGllcywgd2UgZmFsbCBiYWNrIHRvXG4gICAgICAgICAgICAvLyAgYmFzaWMgRE9NIG9yZGVyXG4gICAgICAgICAgICBpZiAoZm9yd2FyZCkge1xuICAgICAgICAgICAgICByZXR1cm4gZm9jdXNhYmxlTm9kZXMuc2xpY2UoZm9jdXNhYmxlTm9kZXMuaW5kZXhPZihub2RlKSArIDEpLmZpbmQoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzVGFiYmFibGUoZWwpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmb2N1c2FibGVOb2Rlcy5zbGljZSgwLCBmb2N1c2FibGVOb2Rlcy5pbmRleE9mKG5vZGUpKS5yZXZlcnNlKCkuZmluZChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGlzVGFiYmFibGUoZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0YWJiYWJsZU5vZGVzW25vZGVJZHggKyAoZm9yd2FyZCA/IDEgOiAtMSldO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICAgIHN0YXRlLnRhYmJhYmxlR3JvdXBzID0gc3RhdGUuY29udGFpbmVyR3JvdXBzLmZpbHRlcihmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgIHJldHVybiBncm91cC50YWJiYWJsZU5vZGVzLmxlbmd0aCA+IDA7XG4gICAgfSk7XG5cbiAgICAvLyB0aHJvdyBpZiBubyBncm91cHMgaGF2ZSB0YWJiYWJsZSBub2RlcyBhbmQgd2UgZG9uJ3QgaGF2ZSBhIGZhbGxiYWNrIGZvY3VzIG5vZGUgZWl0aGVyXG4gICAgaWYgKHN0YXRlLnRhYmJhYmxlR3JvdXBzLmxlbmd0aCA8PSAwICYmICFnZXROb2RlRm9yT3B0aW9uKCdmYWxsYmFja0ZvY3VzJykgLy8gcmV0dXJuaW5nIGZhbHNlIG5vdCBzdXBwb3J0ZWQgZm9yIHRoaXMgb3B0aW9uXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdXIgZm9jdXMtdHJhcCBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGNvbnRhaW5lciB3aXRoIGF0IGxlYXN0IG9uZSB0YWJiYWJsZSBub2RlIGluIGl0IGF0IGFsbCB0aW1lcycpO1xuICAgIH1cblxuICAgIC8vIE5PVEU6IFBvc2l0aXZlIHRhYmluZGV4ZXMgYXJlIG9ubHkgcHJvcGVybHkgc3VwcG9ydGVkIGluIHNpbmdsZS1jb250YWluZXIgdHJhcHMgYmVjYXVzZVxuICAgIC8vICBkb2luZyBpdCBhY3Jvc3MgbXVsdGlwbGUgY29udGFpbmVycyB3aGVyZSB0YWJpbmRleGVzIGNvdWxkIGJlIGFsbCBvdmVyIHRoZSBwbGFjZVxuICAgIC8vICB3b3VsZCByZXF1aXJlIFRhYmJhYmxlIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29udGFpbmVycywgd291bGQgcmVxdWlyZSBhZGRpdGlvbmFsXG4gICAgLy8gIHNwZWNpYWxpemVkIFNoYWRvdyBET00gc3VwcG9ydCwgYW5kIHdvdWxkIHJlcXVpcmUgVGFiYmFibGUncyBtdWx0aS1jb250YWluZXIgc3VwcG9ydFxuICAgIC8vICB0byBsb29rIGF0IHRob3NlIGNvbnRhaW5lcnMgaW4gZG9jdW1lbnQgcG9zaXRpb24gb3JkZXIgcmF0aGVyIHRoYW4gdXNlci1wcm92aWRlZFxuICAgIC8vICBvcmRlciAoYXMgdGhleSBhcmUgdHJlYXRlZCBpbiBGb2N1cy10cmFwLCBmb3IgbGVnYWN5IHJlYXNvbnMpLiBTZWUgZGlzY3Vzc2lvbiBvblxuICAgIC8vICBodHRwczovL2dpdGh1Yi5jb20vZm9jdXMtdHJhcC9mb2N1cy10cmFwL2lzc3Vlcy8zNzUgZm9yIG1vcmUgZGV0YWlscy5cbiAgICBpZiAoc3RhdGUuY29udGFpbmVyR3JvdXBzLmZpbmQoZnVuY3Rpb24gKGcpIHtcbiAgICAgIHJldHVybiBnLnBvc1RhYkluZGV4ZXNGb3VuZDtcbiAgICB9KSAmJiBzdGF0ZS5jb250YWluZXJHcm91cHMubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXQgbGVhc3Qgb25lIG5vZGUgd2l0aCBhIHBvc2l0aXZlIHRhYmluZGV4IHdhcyBmb3VuZCBpbiBvbmUgb2YgeW91ciBmb2N1cy10cmFwJ3MgbXVsdGlwbGUgY29udGFpbmVycy4gUG9zaXRpdmUgdGFiaW5kZXhlcyBhcmUgb25seSBzdXBwb3J0ZWQgaW4gc2luZ2xlLWNvbnRhaW5lciBmb2N1cy10cmFwcy5cIik7XG4gICAgfVxuICB9O1xuICB2YXIgdHJ5Rm9jdXMgPSBmdW5jdGlvbiB0cnlGb2N1cyhub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChub2RlID09PSBkb2MuYWN0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIW5vZGUgfHwgIW5vZGUuZm9jdXMpIHtcbiAgICAgIHRyeUZvY3VzKGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG5vZGUuZm9jdXMoe1xuICAgICAgcHJldmVudFNjcm9sbDogISFjb25maWcucHJldmVudFNjcm9sbFxuICAgIH0pO1xuICAgIC8vIE5PVEU6IGZvY3VzKCkgQVBJIGRvZXMgbm90IHRyaWdnZXIgZm9jdXNJbiBldmVudCBzbyBzZXQgTVJVIG5vZGUgbWFudWFsbHlcbiAgICBzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSA9IG5vZGU7XG4gICAgaWYgKGlzU2VsZWN0YWJsZUlucHV0KG5vZGUpKSB7XG4gICAgICBub2RlLnNlbGVjdCgpO1xuICAgIH1cbiAgfTtcbiAgdmFyIGdldFJldHVybkZvY3VzTm9kZSA9IGZ1bmN0aW9uIGdldFJldHVybkZvY3VzTm9kZShwcmV2aW91c0FjdGl2ZUVsZW1lbnQpIHtcbiAgICB2YXIgbm9kZSA9IGdldE5vZGVGb3JPcHRpb24oJ3NldFJldHVybkZvY3VzJywgcHJldmlvdXNBY3RpdmVFbGVtZW50KTtcbiAgICByZXR1cm4gbm9kZSA/IG5vZGUgOiBub2RlID09PSBmYWxzZSA/IGZhbHNlIDogcHJldmlvdXNBY3RpdmVFbGVtZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaW5kcyB0aGUgbmV4dCBub2RlIChpbiBlaXRoZXIgZGlyZWN0aW9uKSB3aGVyZSBmb2N1cyBzaG91bGQgbW92ZSBhY2NvcmRpbmcgdG8gYVxuICAgKiAga2V5Ym9hcmQgZm9jdXMtaW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtOb2RlfSBbcGFyYW1zLnRhcmdldF0gS25vd24gdGFyZ2V0IF9fZnJvbSB3aGljaF9fIHRvIG5hdmlnYXRlLCBpZiBhbnkuXG4gICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudHxGb2N1c0V2ZW50fSBbcGFyYW1zLmV2ZW50XSBFdmVudCB0byB1c2UgaWYgYHRhcmdldGAgaXNuJ3Qga25vd24gKGV2ZW50XG4gICAqICB3aWxsIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBgdGFyZ2V0YCkuIElnbm9yZWQgaWYgYHRhcmdldGAgaXMgc3BlY2lmaWVkLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwYXJhbXMuaXNCYWNrd2FyZF0gVHJ1ZSBpZiBmb2N1cyBzaG91bGQgbW92ZSBiYWNrd2FyZC5cbiAgICogQHJldHVybnMge05vZGV8dW5kZWZpbmVkfSBUaGUgbmV4dCBub2RlLCBvciBgdW5kZWZpbmVkYCBpZiBhIG5leHQgbm9kZSBjb3VsZG4ndCBiZVxuICAgKiAgZGV0ZXJtaW5lZCBnaXZlbiB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgdHJhcC5cbiAgICovXG4gIHZhciBmaW5kTmV4dE5hdk5vZGUgPSBmdW5jdGlvbiBmaW5kTmV4dE5hdk5vZGUoX3JlZjIpIHtcbiAgICB2YXIgdGFyZ2V0ID0gX3JlZjIudGFyZ2V0LFxuICAgICAgZXZlbnQgPSBfcmVmMi5ldmVudCxcbiAgICAgIF9yZWYyJGlzQmFja3dhcmQgPSBfcmVmMi5pc0JhY2t3YXJkLFxuICAgICAgaXNCYWNrd2FyZCA9IF9yZWYyJGlzQmFja3dhcmQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIkaXNCYWNrd2FyZDtcbiAgICB0YXJnZXQgPSB0YXJnZXQgfHwgZ2V0QWN0dWFsVGFyZ2V0KGV2ZW50KTtcbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG4gICAgdmFyIGRlc3RpbmF0aW9uTm9kZSA9IG51bGw7XG4gICAgaWYgKHN0YXRlLnRhYmJhYmxlR3JvdXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgdGFyZ2V0IGlzIGFjdHVhbGx5IGNvbnRhaW5lZCBpbiBhIGdyb3VwXG4gICAgICAvLyBOT1RFOiB0aGUgdGFyZ2V0IG1heSBhbHNvIGJlIHRoZSBjb250YWluZXIgaXRzZWxmIGlmIGl0J3MgZm9jdXNhYmxlXG4gICAgICAvLyAgd2l0aCB0YWJJbmRleD0nLTEnIGFuZCB3YXMgZ2l2ZW4gaW5pdGlhbCBmb2N1c1xuICAgICAgdmFyIGNvbnRhaW5lckluZGV4ID0gZmluZENvbnRhaW5lckluZGV4KHRhcmdldCwgZXZlbnQpO1xuICAgICAgdmFyIGNvbnRhaW5lckdyb3VwID0gY29udGFpbmVySW5kZXggPj0gMCA/IHN0YXRlLmNvbnRhaW5lckdyb3Vwc1tjb250YWluZXJJbmRleF0gOiB1bmRlZmluZWQ7XG4gICAgICBpZiAoY29udGFpbmVySW5kZXggPCAwKSB7XG4gICAgICAgIC8vIHRhcmdldCBub3QgZm91bmQgaW4gYW55IGdyb3VwOiBxdWl0ZSBwb3NzaWJsZSBmb2N1cyBoYXMgZXNjYXBlZCB0aGUgdHJhcCxcbiAgICAgICAgLy8gIHNvIGJyaW5nIGl0IGJhY2sgaW50by4uLlxuICAgICAgICBpZiAoaXNCYWNrd2FyZCkge1xuICAgICAgICAgIC8vIC4uLnRoZSBsYXN0IG5vZGUgaW4gdGhlIGxhc3QgZ3JvdXBcbiAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSBzdGF0ZS50YWJiYWJsZUdyb3Vwc1tzdGF0ZS50YWJiYWJsZUdyb3Vwcy5sZW5ndGggLSAxXS5sYXN0VGFiYmFibGVOb2RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIC4uLnRoZSBmaXJzdCBub2RlIGluIHRoZSBmaXJzdCBncm91cFxuICAgICAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IHN0YXRlLnRhYmJhYmxlR3JvdXBzWzBdLmZpcnN0VGFiYmFibGVOb2RlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzQmFja3dhcmQpIHtcbiAgICAgICAgLy8gUkVWRVJTRVxuXG4gICAgICAgIC8vIGlzIHRoZSB0YXJnZXQgdGhlIGZpcnN0IHRhYmJhYmxlIG5vZGUgaW4gYSBncm91cD9cbiAgICAgICAgdmFyIHN0YXJ0T2ZHcm91cEluZGV4ID0gZmluZEluZGV4KHN0YXRlLnRhYmJhYmxlR3JvdXBzLCBmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgICB2YXIgZmlyc3RUYWJiYWJsZU5vZGUgPSBfcmVmMy5maXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0ID09PSBmaXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzdGFydE9mR3JvdXBJbmRleCA8IDAgJiYgKGNvbnRhaW5lckdyb3VwLmNvbnRhaW5lciA9PT0gdGFyZ2V0IHx8IGlzRm9jdXNhYmxlKHRhcmdldCwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucykgJiYgIWlzVGFiYmFibGUodGFyZ2V0LCBjb25maWcudGFiYmFibGVPcHRpb25zKSAmJiAhY29udGFpbmVyR3JvdXAubmV4dFRhYmJhYmxlTm9kZSh0YXJnZXQsIGZhbHNlKSkpIHtcbiAgICAgICAgICAvLyBhbiBleGNlcHRpb24gY2FzZSB3aGVyZSB0aGUgdGFyZ2V0IGlzIGVpdGhlciB0aGUgY29udGFpbmVyIGl0c2VsZiwgb3JcbiAgICAgICAgICAvLyAgYSBub24tdGFiYmFibGUgbm9kZSB0aGF0IHdhcyBnaXZlbiBmb2N1cyAoaS5lLiB0YWJpbmRleCBpcyBuZWdhdGl2ZVxuICAgICAgICAgIC8vICBhbmQgdXNlciBjbGlja2VkIG9uIGl0IG9yIG5vZGUgd2FzIHByb2dyYW1tYXRpY2FsbHkgZ2l2ZW4gZm9jdXMpXG4gICAgICAgICAgLy8gIGFuZCBpcyBub3QgZm9sbG93ZWQgYnkgYW55IG90aGVyIHRhYmJhYmxlIG5vZGUsIGluIHdoaWNoXG4gICAgICAgICAgLy8gIGNhc2UsIHdlIHNob3VsZCBoYW5kbGUgc2hpZnQrdGFiIGFzIGlmIGZvY3VzIHdlcmUgb24gdGhlIGNvbnRhaW5lcidzXG4gICAgICAgICAgLy8gIGZpcnN0IHRhYmJhYmxlIG5vZGUsIGFuZCBnbyB0byB0aGUgbGFzdCB0YWJiYWJsZSBub2RlIG9mIHRoZSBMQVNUIGdyb3VwXG4gICAgICAgICAgc3RhcnRPZkdyb3VwSW5kZXggPSBjb250YWluZXJJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRPZkdyb3VwSW5kZXggPj0gMCkge1xuICAgICAgICAgIC8vIFlFUzogdGhlbiBzaGlmdCt0YWIgc2hvdWxkIGdvIHRvIHRoZSBsYXN0IHRhYmJhYmxlIG5vZGUgaW4gdGhlXG4gICAgICAgICAgLy8gIHByZXZpb3VzIGdyb3VwIChhbmQgd3JhcCBhcm91bmQgdG8gdGhlIGxhc3QgdGFiYmFibGUgbm9kZSBvZlxuICAgICAgICAgIC8vICB0aGUgTEFTVCBncm91cCBpZiBpdCdzIHRoZSBmaXJzdCB0YWJiYWJsZSBub2RlIG9mIHRoZSBGSVJTVCBncm91cClcbiAgICAgICAgICB2YXIgZGVzdGluYXRpb25Hcm91cEluZGV4ID0gc3RhcnRPZkdyb3VwSW5kZXggPT09IDAgPyBzdGF0ZS50YWJiYWJsZUdyb3Vwcy5sZW5ndGggLSAxIDogc3RhcnRPZkdyb3VwSW5kZXggLSAxO1xuICAgICAgICAgIHZhciBkZXN0aW5hdGlvbkdyb3VwID0gc3RhdGUudGFiYmFibGVHcm91cHNbZGVzdGluYXRpb25Hcm91cEluZGV4XTtcbiAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSBnZXRUYWJJbmRleCh0YXJnZXQpID49IDAgPyBkZXN0aW5hdGlvbkdyb3VwLmxhc3RUYWJiYWJsZU5vZGUgOiBkZXN0aW5hdGlvbkdyb3VwLmxhc3REb21UYWJiYWJsZU5vZGU7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzVGFiRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgICAgLy8gdXNlciBtdXN0IGhhdmUgY3VzdG9taXplZCB0aGUgbmF2IGtleXMgc28gd2UgaGF2ZSB0byBtb3ZlIGZvY3VzIG1hbnVhbGx5IF93aXRoaW5fXG4gICAgICAgICAgLy8gIHRoZSBhY3RpdmUgZ3JvdXA6IGRvIHRoaXMgYmFzZWQgb24gdGhlIG9yZGVyIGRldGVybWluZWQgYnkgdGFiYmFibGUoKVxuICAgICAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IGNvbnRhaW5lckdyb3VwLm5leHRUYWJiYWJsZU5vZGUodGFyZ2V0LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZPUldBUkRcblxuICAgICAgICAvLyBpcyB0aGUgdGFyZ2V0IHRoZSBsYXN0IHRhYmJhYmxlIG5vZGUgaW4gYSBncm91cD9cbiAgICAgICAgdmFyIGxhc3RPZkdyb3VwSW5kZXggPSBmaW5kSW5kZXgoc3RhdGUudGFiYmFibGVHcm91cHMsIGZ1bmN0aW9uIChfcmVmNCkge1xuICAgICAgICAgIHZhciBsYXN0VGFiYmFibGVOb2RlID0gX3JlZjQubGFzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0ID09PSBsYXN0VGFiYmFibGVOb2RlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGxhc3RPZkdyb3VwSW5kZXggPCAwICYmIChjb250YWluZXJHcm91cC5jb250YWluZXIgPT09IHRhcmdldCB8fCBpc0ZvY3VzYWJsZSh0YXJnZXQsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpICYmICFpc1RhYmJhYmxlKHRhcmdldCwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucykgJiYgIWNvbnRhaW5lckdyb3VwLm5leHRUYWJiYWJsZU5vZGUodGFyZ2V0KSkpIHtcbiAgICAgICAgICAvLyBhbiBleGNlcHRpb24gY2FzZSB3aGVyZSB0aGUgdGFyZ2V0IGlzIHRoZSBjb250YWluZXIgaXRzZWxmLCBvclxuICAgICAgICAgIC8vICBhIG5vbi10YWJiYWJsZSBub2RlIHRoYXQgd2FzIGdpdmVuIGZvY3VzIChpLmUuIHRhYmluZGV4IGlzIG5lZ2F0aXZlXG4gICAgICAgICAgLy8gIGFuZCB1c2VyIGNsaWNrZWQgb24gaXQgb3Igbm9kZSB3YXMgcHJvZ3JhbW1hdGljYWxseSBnaXZlbiBmb2N1cylcbiAgICAgICAgICAvLyAgYW5kIGlzIG5vdCBmb2xsb3dlZCBieSBhbnkgb3RoZXIgdGFiYmFibGUgbm9kZSwgaW4gd2hpY2hcbiAgICAgICAgICAvLyAgY2FzZSwgd2Ugc2hvdWxkIGhhbmRsZSB0YWIgYXMgaWYgZm9jdXMgd2VyZSBvbiB0aGUgY29udGFpbmVyJ3NcbiAgICAgICAgICAvLyAgbGFzdCB0YWJiYWJsZSBub2RlLCBhbmQgZ28gdG8gdGhlIGZpcnN0IHRhYmJhYmxlIG5vZGUgb2YgdGhlIEZJUlNUIGdyb3VwXG4gICAgICAgICAgbGFzdE9mR3JvdXBJbmRleCA9IGNvbnRhaW5lckluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0T2ZHcm91cEluZGV4ID49IDApIHtcbiAgICAgICAgICAvLyBZRVM6IHRoZW4gdGFiIHNob3VsZCBnbyB0byB0aGUgZmlyc3QgdGFiYmFibGUgbm9kZSBpbiB0aGUgbmV4dFxuICAgICAgICAgIC8vICBncm91cCAoYW5kIHdyYXAgYXJvdW5kIHRvIHRoZSBmaXJzdCB0YWJiYWJsZSBub2RlIG9mIHRoZSBGSVJTVFxuICAgICAgICAgIC8vICBncm91cCBpZiBpdCdzIHRoZSBsYXN0IHRhYmJhYmxlIG5vZGUgb2YgdGhlIExBU1QgZ3JvdXApXG4gICAgICAgICAgdmFyIF9kZXN0aW5hdGlvbkdyb3VwSW5kZXggPSBsYXN0T2ZHcm91cEluZGV4ID09PSBzdGF0ZS50YWJiYWJsZUdyb3Vwcy5sZW5ndGggLSAxID8gMCA6IGxhc3RPZkdyb3VwSW5kZXggKyAxO1xuICAgICAgICAgIHZhciBfZGVzdGluYXRpb25Hcm91cCA9IHN0YXRlLnRhYmJhYmxlR3JvdXBzW19kZXN0aW5hdGlvbkdyb3VwSW5kZXhdO1xuICAgICAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IGdldFRhYkluZGV4KHRhcmdldCkgPj0gMCA/IF9kZXN0aW5hdGlvbkdyb3VwLmZpcnN0VGFiYmFibGVOb2RlIDogX2Rlc3RpbmF0aW9uR3JvdXAuZmlyc3REb21UYWJiYWJsZU5vZGU7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzVGFiRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgICAgLy8gdXNlciBtdXN0IGhhdmUgY3VzdG9taXplZCB0aGUgbmF2IGtleXMgc28gd2UgaGF2ZSB0byBtb3ZlIGZvY3VzIG1hbnVhbGx5IF93aXRoaW5fXG4gICAgICAgICAgLy8gIHRoZSBhY3RpdmUgZ3JvdXA6IGRvIHRoaXMgYmFzZWQgb24gdGhlIG9yZGVyIGRldGVybWluZWQgYnkgdGFiYmFibGUoKVxuICAgICAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IGNvbnRhaW5lckdyb3VwLm5leHRUYWJiYWJsZU5vZGUodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBubyBncm91cHMgYXZhaWxhYmxlXG4gICAgICAvLyBOT1RFOiB0aGUgZmFsbGJhY2tGb2N1cyBvcHRpb24gZG9lcyBub3Qgc3VwcG9ydCByZXR1cm5pbmcgZmFsc2UgdG8gb3B0LW91dFxuICAgICAgZGVzdGluYXRpb25Ob2RlID0gZ2V0Tm9kZUZvck9wdGlvbignZmFsbGJhY2tGb2N1cycpO1xuICAgIH1cbiAgICByZXR1cm4gZGVzdGluYXRpb25Ob2RlO1xuICB9O1xuXG4gIC8vIFRoaXMgbmVlZHMgdG8gYmUgZG9uZSBvbiBtb3VzZWRvd24gYW5kIHRvdWNoc3RhcnQgaW5zdGVhZCBvZiBjbGlja1xuICAvLyBzbyB0aGF0IGl0IHByZWNlZGVzIHRoZSBmb2N1cyBldmVudC5cbiAgdmFyIGNoZWNrUG9pbnRlckRvd24gPSBmdW5jdGlvbiBjaGVja1BvaW50ZXJEb3duKGUpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0QWN0dWFsVGFyZ2V0KGUpO1xuICAgIGlmIChmaW5kQ29udGFpbmVySW5kZXgodGFyZ2V0LCBlKSA+PSAwKSB7XG4gICAgICAvLyBhbGxvdyB0aGUgY2xpY2sgc2luY2UgaXQgb2N1cnJlZCBpbnNpZGUgdGhlIHRyYXBcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlT3JIYW5kbGVyKGNvbmZpZy5jbGlja091dHNpZGVEZWFjdGl2YXRlcywgZSkpIHtcbiAgICAgIC8vIGltbWVkaWF0ZWx5IGRlYWN0aXZhdGUgdGhlIHRyYXBcbiAgICAgIHRyYXAuZGVhY3RpdmF0ZSh7XG4gICAgICAgIC8vIE5PVEU6IGJ5IHNldHRpbmcgYHJldHVybkZvY3VzOiBmYWxzZWAsIGRlYWN0aXZhdGUoKSB3aWxsIGRvIG5vdGhpbmcsXG4gICAgICAgIC8vICB3aGljaCB3aWxsIHJlc3VsdCBpbiB0aGUgb3V0c2lkZSBjbGljayBzZXR0aW5nIGZvY3VzIHRvIHRoZSBub2RlXG4gICAgICAgIC8vICB0aGF0IHdhcyBjbGlja2VkIChhbmQgaWYgbm90IGZvY3VzYWJsZSwgdG8gXCJub3RoaW5nXCIpOyBieSBzZXR0aW5nXG4gICAgICAgIC8vICBgcmV0dXJuRm9jdXM6IHRydWVgLCB3ZSdsbCBhdHRlbXB0IHRvIHJlLWZvY3VzIHRoZSBub2RlIG9yaWdpbmFsbHktZm9jdXNlZFxuICAgICAgICAvLyAgb24gYWN0aXZhdGlvbiAob3IgdGhlIGNvbmZpZ3VyZWQgYHNldFJldHVybkZvY3VzYCBub2RlKSwgd2hldGhlciB0aGVcbiAgICAgICAgLy8gIG91dHNpZGUgY2xpY2sgd2FzIG9uIGEgZm9jdXNhYmxlIG5vZGUgb3Igbm90XG4gICAgICAgIHJldHVybkZvY3VzOiBjb25maWcucmV0dXJuRm9jdXNPbkRlYWN0aXZhdGVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRoaXMgaXMgbmVlZGVkIGZvciBtb2JpbGUgZGV2aWNlcy5cbiAgICAvLyAoSWYgd2UnbGwgb25seSBsZXQgYGNsaWNrYCBldmVudHMgdGhyb3VnaCxcbiAgICAvLyB0aGVuIG9uIG1vYmlsZSB0aGV5IHdpbGwgYmUgYmxvY2tlZCBhbnl3YXlzIGlmIGB0b3VjaHN0YXJ0YCBpcyBibG9ja2VkLilcbiAgICBpZiAodmFsdWVPckhhbmRsZXIoY29uZmlnLmFsbG93T3V0c2lkZUNsaWNrLCBlKSkge1xuICAgICAgLy8gYWxsb3cgdGhlIGNsaWNrIG91dHNpZGUgdGhlIHRyYXAgdG8gdGFrZSBwbGFjZVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIG90aGVyd2lzZSwgcHJldmVudCB0aGUgY2xpY2tcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgLy8gSW4gY2FzZSBmb2N1cyBlc2NhcGVzIHRoZSB0cmFwIGZvciBzb21lIHN0cmFuZ2UgcmVhc29uLCBwdWxsIGl0IGJhY2sgaW4uXG4gIC8vIE5PVEU6IHRoZSBmb2N1c0luIGV2ZW50IGlzIE5PVCBjYW5jZWxhYmxlLCBzbyBpZiBmb2N1cyBlc2NhcGVzLCBpdCBtYXkgY2F1c2UgdW5leHBlY3RlZFxuICAvLyAgc2Nyb2xsaW5nIGlmIHRoZSBub2RlIHRoYXQgZ290IGZvY3VzZWQgd2FzIG91dCBvZiB2aWV3OyB0aGVyZSdzIG5vdGhpbmcgd2UgY2FuIGRvIHRvXG4gIC8vICBwcmV2ZW50IHRoYXQgZnJvbSBoYXBwZW5pbmcgYnkgdGhlIHRpbWUgd2UgZGlzY292ZXIgdGhhdCBmb2N1cyBlc2NhcGVkXG4gIHZhciBjaGVja0ZvY3VzSW4gPSBmdW5jdGlvbiBjaGVja0ZvY3VzSW4oZXZlbnQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0QWN0dWFsVGFyZ2V0KGV2ZW50KTtcbiAgICB2YXIgdGFyZ2V0Q29udGFpbmVkID0gZmluZENvbnRhaW5lckluZGV4KHRhcmdldCwgZXZlbnQpID49IDA7XG5cbiAgICAvLyBJbiBGaXJlZm94IHdoZW4geW91IFRhYiBvdXQgb2YgYW4gaWZyYW1lIHRoZSBEb2N1bWVudCBpcyBicmllZmx5IGZvY3VzZWQuXG4gICAgaWYgKHRhcmdldENvbnRhaW5lZCB8fCB0YXJnZXQgaW5zdGFuY2VvZiBEb2N1bWVudCkge1xuICAgICAgaWYgKHRhcmdldENvbnRhaW5lZCkge1xuICAgICAgICBzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSA9IHRhcmdldDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNjYXBlZCEgcHVsbCBpdCBiYWNrIGluIHRvIHdoZXJlIGl0IGp1c3QgbGVmdFxuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIC8vIGZvY3VzIHdpbGwgZXNjYXBlIGlmIHRoZSBNUlUgbm9kZSBoYWQgYSBwb3NpdGl2ZSB0YWIgaW5kZXggYW5kIHVzZXIgdHJpZWQgdG8gbmF2IGZvcndhcmQ7XG4gICAgICAvLyAgaXQgd2lsbCBhbHNvIGVzY2FwZSBpZiB0aGUgTVJVIG5vZGUgaGFkIGEgMCB0YWIgaW5kZXggYW5kIHVzZXIgdHJpZWQgdG8gbmF2IGJhY2t3YXJkXG4gICAgICAvLyAgdG93YXJkIGEgbm9kZSB3aXRoIGEgcG9zaXRpdmUgdGFiIGluZGV4XG4gICAgICB2YXIgbmV4dE5vZGU7IC8vIG5leHQgbm9kZSB0byBmb2N1cywgaWYgd2UgZmluZCBvbmVcbiAgICAgIHZhciBuYXZBY3Jvc3NDb250YWluZXJzID0gdHJ1ZTtcbiAgICAgIGlmIChzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSkge1xuICAgICAgICBpZiAoZ2V0VGFiSW5kZXgoc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUpID4gMCkge1xuICAgICAgICAgIC8vIE1SVSBjb250YWluZXIgaW5kZXggbXVzdCBiZSA+PTAgb3RoZXJ3aXNlIHdlIHdvdWxkbid0IGhhdmUgaXQgYXMgYW4gTVJVIG5vZGUuLi5cbiAgICAgICAgICB2YXIgbXJ1Q29udGFpbmVySWR4ID0gZmluZENvbnRhaW5lckluZGV4KHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlKTtcbiAgICAgICAgICAvLyB0aGVyZSBNQVkgbm90IGJlIGFueSB0YWJiYWJsZSBub2RlcyBpbiB0aGUgY29udGFpbmVyIGlmIHRoZXJlIGFyZSBhdCBsZWFzdCAyIGNvbnRhaW5lcnNcbiAgICAgICAgICAvLyAgYW5kIHRoZSBNUlUgbm9kZSBpcyBmb2N1c2FibGUgYnV0IG5vdCB0YWJiYWJsZSAoZm9jdXMtdHJhcCByZXF1aXJlcyBhdCBsZWFzdCAxIGNvbnRhaW5lclxuICAgICAgICAgIC8vICB3aXRoIGF0IGxlYXN0IG9uZSB0YWJiYWJsZSBub2RlIGluIG9yZGVyIHRvIGZ1bmN0aW9uLCBzbyB0aGlzIGNvdWxkIGJlIHRoZSBvdGhlciBjb250YWluZXJcbiAgICAgICAgICAvLyAgd2l0aCBub3RoaW5nIHRhYmJhYmxlIGluIGl0KVxuICAgICAgICAgIHZhciB0YWJiYWJsZU5vZGVzID0gc3RhdGUuY29udGFpbmVyR3JvdXBzW21ydUNvbnRhaW5lcklkeF0udGFiYmFibGVOb2RlcztcbiAgICAgICAgICBpZiAodGFiYmFibGVOb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBNUlUgdGFiIGluZGV4IE1BWSBub3QgYmUgZm91bmQgaWYgdGhlIE1SVSBub2RlIGlzIGZvY3VzYWJsZSBidXQgbm90IHRhYmJhYmxlXG4gICAgICAgICAgICB2YXIgbXJ1VGFiSWR4ID0gdGFiYmFibGVOb2Rlcy5maW5kSW5kZXgoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5vZGUgPT09IHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobXJ1VGFiSWR4ID49IDApIHtcbiAgICAgICAgICAgICAgaWYgKGNvbmZpZy5pc0tleUZvcndhcmQoc3RhdGUucmVjZW50TmF2RXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1ydVRhYklkeCArIDEgPCB0YWJiYWJsZU5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgbmV4dE5vZGUgPSB0YWJiYWJsZU5vZGVzW21ydVRhYklkeCArIDFdO1xuICAgICAgICAgICAgICAgICAgbmF2QWNyb3NzQ29udGFpbmVycyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBlbHNlLCBkb24ndCB3cmFwIHdpdGhpbiB0aGUgY29udGFpbmVyIGFzIGZvY3VzIHNob3VsZCBtb3ZlIHRvIG5leHQvcHJldmlvdXNcbiAgICAgICAgICAgICAgICAvLyAgY29udGFpbmVyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG1ydVRhYklkeCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgbmV4dE5vZGUgPSB0YWJiYWJsZU5vZGVzW21ydVRhYklkeCAtIDFdO1xuICAgICAgICAgICAgICAgICAgbmF2QWNyb3NzQ29udGFpbmVycyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBlbHNlLCBkb24ndCB3cmFwIHdpdGhpbiB0aGUgY29udGFpbmVyIGFzIGZvY3VzIHNob3VsZCBtb3ZlIHRvIG5leHQvcHJldmlvdXNcbiAgICAgICAgICAgICAgICAvLyAgY29udGFpbmVyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gZWxzZSwgZG9uJ3QgZmluZCBpbiBjb250YWluZXIgb3JkZXIgd2l0aG91dCBjb25zaWRlcmluZyBkaXJlY3Rpb24gdG9vXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGVsc2UsIG5vIHRhYmJhYmxlIG5vZGVzIGluIHRoYXQgY29udGFpbmVyICh3aGljaCBtZWFucyB3ZSBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIG90aGVyXG4gICAgICAgICAgLy8gIGNvbnRhaW5lciB3aXRoIGF0IGxlYXN0IG9uZSB0YWJiYWJsZSBub2RlIGluIGl0LCBvdGhlcndpc2UgZm9jdXMtdHJhcCB3b3VsZCd2ZSB0aHJvd25cbiAgICAgICAgICAvLyAgYW4gZXJyb3IgdGhlIGxhc3QgdGltZSB1cGRhdGVUYWJiYWJsZU5vZGVzKCkgd2FzIHJ1bik6IGZpbmQgbmV4dCBub2RlIGFtb25nIGFsbCBrbm93blxuICAgICAgICAgIC8vICBjb250YWluZXJzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIHRoZXJlJ3MgYXQgbGVhc3Qgb25lIHRhYmJhYmxlIG5vZGUgd2l0aCBhIHBvc2l0aXZlIHRhYiBpbmRleCBpbnNpZGVcbiAgICAgICAgICAvLyAgdGhlIHRyYXAgYmVjYXVzZSBmb2N1cyBzZWVtcyB0byBlc2NhcGUgd2hlbiBuYXZpZ2F0aW5nIGJhY2t3YXJkIGZyb20gYSB0YWJiYWJsZSBub2RlXG4gICAgICAgICAgLy8gIHdpdGggdGFiaW5kZXg9MCB3aGVuIHRoaXMgaXMgdGhlIGNhc2UgKGluc3RlYWQgb2Ygd3JhcHBpbmcgdG8gdGhlIHRhYmJhYmxlIG5vZGUgd2l0aFxuICAgICAgICAgIC8vICB0aGUgZ3JlYXRlc3QgcG9zaXRpdmUgdGFiIGluZGV4IGxpa2UgaXQgc2hvdWxkKVxuICAgICAgICAgIGlmICghc3RhdGUuY29udGFpbmVyR3JvdXBzLnNvbWUoZnVuY3Rpb24gKGcpIHtcbiAgICAgICAgICAgIHJldHVybiBnLnRhYmJhYmxlTm9kZXMuc29tZShmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICByZXR1cm4gZ2V0VGFiSW5kZXgobikgPiAwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIC8vIG5vIGNvbnRhaW5lcnMgd2l0aCB0YWJiYWJsZSBub2RlcyB3aXRoIHBvc2l0aXZlIHRhYiBpbmRleGVzIHdoaWNoIG1lYW5zIHRoZSBmb2N1c1xuICAgICAgICAgICAgLy8gIGVzY2FwZWQgZm9yIHNvbWUgb3RoZXIgcmVhc29uIGFuZCB3ZSBzaG91bGQganVzdCBleGVjdXRlIHRoZSBmYWxsYmFjayB0byB0aGVcbiAgICAgICAgICAgIC8vICBNUlUgbm9kZSBvciBpbml0aWFsIGZvY3VzIG5vZGUsIGlmIGFueVxuICAgICAgICAgICAgbmF2QWNyb3NzQ29udGFpbmVycyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm8gTVJVIG5vZGUgbWVhbnMgd2UncmUgbGlrZWx5IGluIHNvbWUgaW5pdGlhbCBjb25kaXRpb24gd2hlbiB0aGUgdHJhcCBoYXMganVzdFxuICAgICAgICAvLyAgYmVlbiBhY3RpdmF0ZWQgYW5kIGluaXRpYWwgZm9jdXMgaGFzbid0IGJlZW4gZ2l2ZW4geWV0LCBpbiB3aGljaCBjYXNlIHdlIHNob3VsZFxuICAgICAgICAvLyAgZmFsbCB0aHJvdWdoIHRvIHRyeWluZyB0byBmb2N1cyB0aGUgaW5pdGlhbCBmb2N1cyBub2RlLCB3aGljaCBpcyB3aGF0IHNob3VsZFxuICAgICAgICAvLyAgaGFwcGVuIGJlbG93IGF0IHRoaXMgcG9pbnQgaW4gdGhlIGxvZ2ljXG4gICAgICAgIG5hdkFjcm9zc0NvbnRhaW5lcnMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChuYXZBY3Jvc3NDb250YWluZXJzKSB7XG4gICAgICAgIG5leHROb2RlID0gZmluZE5leHROYXZOb2RlKHtcbiAgICAgICAgICAvLyBtb3ZlIEZST00gdGhlIE1SVSBub2RlLCBub3QgZXZlbnQtcmVsYXRlZCBub2RlICh3aGljaCB3aWxsIGJlIHRoZSBub2RlIHRoYXQgaXNcbiAgICAgICAgICAvLyAgb3V0c2lkZSB0aGUgdHJhcCBjYXVzaW5nIHRoZSBmb2N1cyBlc2NhcGUgd2UncmUgdHJ5aW5nIHRvIGZpeClcbiAgICAgICAgICB0YXJnZXQ6IHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlLFxuICAgICAgICAgIGlzQmFja3dhcmQ6IGNvbmZpZy5pc0tleUJhY2t3YXJkKHN0YXRlLnJlY2VudE5hdkV2ZW50KVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Tm9kZSkge1xuICAgICAgICB0cnlGb2N1cyhuZXh0Tm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnlGb2N1cyhzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSB8fCBnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZS5yZWNlbnROYXZFdmVudCA9IHVuZGVmaW5lZDsgLy8gY2xlYXJcbiAgfTtcblxuICAvLyBIaWphY2sga2V5IG5hdiBldmVudHMgb24gdGhlIGZpcnN0IGFuZCBsYXN0IGZvY3VzYWJsZSBub2RlcyBvZiB0aGUgdHJhcCxcbiAgLy8gaW4gb3JkZXIgdG8gcHJldmVudCBmb2N1cyBmcm9tIGVzY2FwaW5nLiBJZiBpdCBlc2NhcGVzIGZvciBldmVuIGFcbiAgLy8gbW9tZW50IGl0IGNhbiBlbmQgdXAgc2Nyb2xsaW5nIHRoZSBwYWdlIGFuZCBjYXVzaW5nIGNvbmZ1c2lvbiBzbyB3ZVxuICAvLyBraW5kIG9mIG5lZWQgdG8gY2FwdHVyZSB0aGUgYWN0aW9uIGF0IHRoZSBrZXlkb3duIHBoYXNlLlxuICB2YXIgY2hlY2tLZXlOYXYgPSBmdW5jdGlvbiBjaGVja0tleU5hdihldmVudCkge1xuICAgIHZhciBpc0JhY2t3YXJkID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICBzdGF0ZS5yZWNlbnROYXZFdmVudCA9IGV2ZW50O1xuICAgIHZhciBkZXN0aW5hdGlvbk5vZGUgPSBmaW5kTmV4dE5hdk5vZGUoe1xuICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgaXNCYWNrd2FyZDogaXNCYWNrd2FyZFxuICAgIH0pO1xuICAgIGlmIChkZXN0aW5hdGlvbk5vZGUpIHtcbiAgICAgIGlmIChpc1RhYkV2ZW50KGV2ZW50KSkge1xuICAgICAgICAvLyBzaW5jZSB0YWIgbmF0aXZlbHkgbW92ZXMgZm9jdXMsIHdlIHdvdWxkbid0IGhhdmUgYSBkZXN0aW5hdGlvbiBub2RlIHVubGVzcyB3ZVxuICAgICAgICAvLyAgd2VyZSBvbiB0aGUgZWRnZSBvZiBhIGNvbnRhaW5lciBhbmQgaGFkIHRvIG1vdmUgdG8gdGhlIG5leHQvcHJldmlvdXMgZWRnZSwgaW5cbiAgICAgICAgLy8gIHdoaWNoIGNhc2Ugd2Ugd2FudCB0byBwcmV2ZW50IGRlZmF1bHQgdG8ga2VlcCB0aGUgYnJvd3NlciBmcm9tIG1vdmluZyBmb2N1c1xuICAgICAgICAvLyAgdG8gd2hlcmUgaXQgbm9ybWFsbHkgd291bGRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHRyeUZvY3VzKGRlc3RpbmF0aW9uTm9kZSk7XG4gICAgfVxuICAgIC8vIGVsc2UsIGxldCB0aGUgYnJvd3NlciB0YWtlIGNhcmUgb2YgW3NoaWZ0K110YWIgYW5kIG1vdmUgdGhlIGZvY3VzXG4gIH07XG5cbiAgdmFyIGNoZWNrS2V5ID0gZnVuY3Rpb24gY2hlY2tLZXkoZXZlbnQpIHtcbiAgICBpZiAoaXNFc2NhcGVFdmVudChldmVudCkgJiYgdmFsdWVPckhhbmRsZXIoY29uZmlnLmVzY2FwZURlYWN0aXZhdGVzLCBldmVudCkgIT09IGZhbHNlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdHJhcC5kZWFjdGl2YXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjb25maWcuaXNLZXlGb3J3YXJkKGV2ZW50KSB8fCBjb25maWcuaXNLZXlCYWNrd2FyZChldmVudCkpIHtcbiAgICAgIGNoZWNrS2V5TmF2KGV2ZW50LCBjb25maWcuaXNLZXlCYWNrd2FyZChldmVudCkpO1xuICAgIH1cbiAgfTtcbiAgdmFyIGNoZWNrQ2xpY2sgPSBmdW5jdGlvbiBjaGVja0NsaWNrKGUpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0QWN0dWFsVGFyZ2V0KGUpO1xuICAgIGlmIChmaW5kQ29udGFpbmVySW5kZXgodGFyZ2V0LCBlKSA+PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZU9ySGFuZGxlcihjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMsIGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZU9ySGFuZGxlcihjb25maWcuYWxsb3dPdXRzaWRlQ2xpY2ssIGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9O1xuXG4gIC8vXG4gIC8vIEVWRU5UIExJU1RFTkVSU1xuICAvL1xuXG4gIHZhciBhZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUaGVyZSBjYW4gYmUgb25seSBvbmUgbGlzdGVuaW5nIGZvY3VzIHRyYXAgYXQgYSB0aW1lXG4gICAgYWN0aXZlRm9jdXNUcmFwcy5hY3RpdmF0ZVRyYXAodHJhcFN0YWNrLCB0cmFwKTtcblxuICAgIC8vIERlbGF5IGVuc3VyZXMgdGhhdCB0aGUgZm9jdXNlZCBlbGVtZW50IGRvZXNuJ3QgY2FwdHVyZSB0aGUgZXZlbnRcbiAgICAvLyB0aGF0IGNhdXNlZCB0aGUgZm9jdXMgdHJhcCBhY3RpdmF0aW9uLlxuICAgIHN0YXRlLmRlbGF5SW5pdGlhbEZvY3VzVGltZXIgPSBjb25maWcuZGVsYXlJbml0aWFsRm9jdXMgPyBkZWxheShmdW5jdGlvbiAoKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgIH0pIDogdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGNoZWNrRm9jdXNJbiwgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoZWNrUG9pbnRlckRvd24sIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hlY2tQb2ludGVyRG93biwge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tDbGljaywge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjaGVja0tleSwge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgcmV0dXJuIHRyYXA7XG4gIH07XG4gIHZhciByZW1vdmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBjaGVja0ZvY3VzSW4sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ2xpY2ssIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hlY2tLZXksIHRydWUpO1xuICAgIHJldHVybiB0cmFwO1xuICB9O1xuXG4gIC8vXG4gIC8vIE1VVEFUSU9OIE9CU0VSVkVSXG4gIC8vXG5cbiAgdmFyIGNoZWNrRG9tUmVtb3ZhbCA9IGZ1bmN0aW9uIGNoZWNrRG9tUmVtb3ZhbChtdXRhdGlvbnMpIHtcbiAgICB2YXIgaXNGb2N1c2VkTm9kZVJlbW92ZWQgPSBtdXRhdGlvbnMuc29tZShmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgIHZhciByZW1vdmVkTm9kZXMgPSBBcnJheS5mcm9tKG11dGF0aW9uLnJlbW92ZWROb2Rlcyk7XG4gICAgICByZXR1cm4gcmVtb3ZlZE5vZGVzLnNvbWUoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUgPT09IHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGUgY3VycmVudGx5IGZvY3VzZWQgaXMgcmVtb3ZlZCB0aGVuIGJyb3dzZXJzIHdpbGwgbW92ZSBmb2N1cyB0byB0aGVcbiAgICAvLyA8Ym9keT4gZWxlbWVudC4gSWYgdGhpcyBoYXBwZW5zLCB0cnkgdG8gbW92ZSBmb2N1cyBiYWNrIGludG8gdGhlIHRyYXAuXG4gICAgaWYgKGlzRm9jdXNlZE5vZGVSZW1vdmVkKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgIH1cbiAgfTtcblxuICAvLyBVc2UgTXV0YXRpb25PYnNlcnZlciAtIGlmIHN1cHBvcnRlZCAtIHRvIGRldGVjdCBpZiBmb2N1c2VkIG5vZGUgaXMgcmVtb3ZlZFxuICAvLyBmcm9tIHRoZSBET00uXG4gIHZhciBtdXRhdGlvbk9ic2VydmVyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyA/IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNoZWNrRG9tUmVtb3ZhbCkgOiB1bmRlZmluZWQ7XG4gIHZhciB1cGRhdGVPYnNlcnZlZE5vZGVzID0gZnVuY3Rpb24gdXBkYXRlT2JzZXJ2ZWROb2RlcygpIHtcbiAgICBpZiAoIW11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgaWYgKHN0YXRlLmFjdGl2ZSAmJiAhc3RhdGUucGF1c2VkKSB7XG4gICAgICBzdGF0ZS5jb250YWluZXJzLm1hcChmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShjb250YWluZXIsIHtcbiAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvL1xuICAvLyBUUkFQIERFRklOSVRJT05cbiAgLy9cblxuICB0cmFwID0ge1xuICAgIGdldCBhY3RpdmUoKSB7XG4gICAgICByZXR1cm4gc3RhdGUuYWN0aXZlO1xuICAgIH0sXG4gICAgZ2V0IHBhdXNlZCgpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5wYXVzZWQ7XG4gICAgfSxcbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gYWN0aXZhdGUoYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgICBpZiAoc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIG9uQWN0aXZhdGUgPSBnZXRPcHRpb24oYWN0aXZhdGVPcHRpb25zLCAnb25BY3RpdmF0ZScpO1xuICAgICAgdmFyIG9uUG9zdEFjdGl2YXRlID0gZ2V0T3B0aW9uKGFjdGl2YXRlT3B0aW9ucywgJ29uUG9zdEFjdGl2YXRlJyk7XG4gICAgICB2YXIgY2hlY2tDYW5Gb2N1c1RyYXAgPSBnZXRPcHRpb24oYWN0aXZhdGVPcHRpb25zLCAnY2hlY2tDYW5Gb2N1c1RyYXAnKTtcbiAgICAgIGlmICghY2hlY2tDYW5Gb2N1c1RyYXApIHtcbiAgICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgfVxuICAgICAgc3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG4gICAgICBvbkFjdGl2YXRlID09PSBudWxsIHx8IG9uQWN0aXZhdGUgPT09IHZvaWQgMCB8fCBvbkFjdGl2YXRlKCk7XG4gICAgICB2YXIgZmluaXNoQWN0aXZhdGlvbiA9IGZ1bmN0aW9uIGZpbmlzaEFjdGl2YXRpb24oKSB7XG4gICAgICAgIGlmIChjaGVja0NhbkZvY3VzVHJhcCkge1xuICAgICAgICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdXBkYXRlT2JzZXJ2ZWROb2RlcygpO1xuICAgICAgICBvblBvc3RBY3RpdmF0ZSA9PT0gbnVsbCB8fCBvblBvc3RBY3RpdmF0ZSA9PT0gdm9pZCAwIHx8IG9uUG9zdEFjdGl2YXRlKCk7XG4gICAgICB9O1xuICAgICAgaWYgKGNoZWNrQ2FuRm9jdXNUcmFwKSB7XG4gICAgICAgIGNoZWNrQ2FuRm9jdXNUcmFwKHN0YXRlLmNvbnRhaW5lcnMuY29uY2F0KCkpLnRoZW4oZmluaXNoQWN0aXZhdGlvbiwgZmluaXNoQWN0aXZhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgZmluaXNoQWN0aXZhdGlvbigpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBkZWFjdGl2YXRlOiBmdW5jdGlvbiBkZWFjdGl2YXRlKGRlYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgICBpZiAoIXN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBvcHRpb25zID0gX29iamVjdFNwcmVhZDIoe1xuICAgICAgICBvbkRlYWN0aXZhdGU6IGNvbmZpZy5vbkRlYWN0aXZhdGUsXG4gICAgICAgIG9uUG9zdERlYWN0aXZhdGU6IGNvbmZpZy5vblBvc3REZWFjdGl2YXRlLFxuICAgICAgICBjaGVja0NhblJldHVybkZvY3VzOiBjb25maWcuY2hlY2tDYW5SZXR1cm5Gb2N1c1xuICAgICAgfSwgZGVhY3RpdmF0ZU9wdGlvbnMpO1xuICAgICAgY2xlYXJUaW1lb3V0KHN0YXRlLmRlbGF5SW5pdGlhbEZvY3VzVGltZXIpOyAvLyBub29wIGlmIHVuZGVmaW5lZFxuICAgICAgc3RhdGUuZGVsYXlJbml0aWFsRm9jdXNUaW1lciA9IHVuZGVmaW5lZDtcbiAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgc3RhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgIHVwZGF0ZU9ic2VydmVkTm9kZXMoKTtcbiAgICAgIGFjdGl2ZUZvY3VzVHJhcHMuZGVhY3RpdmF0ZVRyYXAodHJhcFN0YWNrLCB0cmFwKTtcbiAgICAgIHZhciBvbkRlYWN0aXZhdGUgPSBnZXRPcHRpb24ob3B0aW9ucywgJ29uRGVhY3RpdmF0ZScpO1xuICAgICAgdmFyIG9uUG9zdERlYWN0aXZhdGUgPSBnZXRPcHRpb24ob3B0aW9ucywgJ29uUG9zdERlYWN0aXZhdGUnKTtcbiAgICAgIHZhciBjaGVja0NhblJldHVybkZvY3VzID0gZ2V0T3B0aW9uKG9wdGlvbnMsICdjaGVja0NhblJldHVybkZvY3VzJyk7XG4gICAgICB2YXIgcmV0dXJuRm9jdXMgPSBnZXRPcHRpb24ob3B0aW9ucywgJ3JldHVybkZvY3VzJywgJ3JldHVybkZvY3VzT25EZWFjdGl2YXRlJyk7XG4gICAgICBvbkRlYWN0aXZhdGUgPT09IG51bGwgfHwgb25EZWFjdGl2YXRlID09PSB2b2lkIDAgfHwgb25EZWFjdGl2YXRlKCk7XG4gICAgICB2YXIgZmluaXNoRGVhY3RpdmF0aW9uID0gZnVuY3Rpb24gZmluaXNoRGVhY3RpdmF0aW9uKCkge1xuICAgICAgICBkZWxheShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHJldHVybkZvY3VzKSB7XG4gICAgICAgICAgICB0cnlGb2N1cyhnZXRSZXR1cm5Gb2N1c05vZGUoc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9uUG9zdERlYWN0aXZhdGUgPT09IG51bGwgfHwgb25Qb3N0RGVhY3RpdmF0ZSA9PT0gdm9pZCAwIHx8IG9uUG9zdERlYWN0aXZhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgaWYgKHJldHVybkZvY3VzICYmIGNoZWNrQ2FuUmV0dXJuRm9jdXMpIHtcbiAgICAgICAgY2hlY2tDYW5SZXR1cm5Gb2N1cyhnZXRSZXR1cm5Gb2N1c05vZGUoc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uKSkudGhlbihmaW5pc2hEZWFjdGl2YXRpb24sIGZpbmlzaERlYWN0aXZhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgZmluaXNoRGVhY3RpdmF0aW9uKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHBhdXNlOiBmdW5jdGlvbiBwYXVzZShwYXVzZU9wdGlvbnMpIHtcbiAgICAgIGlmIChzdGF0ZS5wYXVzZWQgfHwgIXN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBvblBhdXNlID0gZ2V0T3B0aW9uKHBhdXNlT3B0aW9ucywgJ29uUGF1c2UnKTtcbiAgICAgIHZhciBvblBvc3RQYXVzZSA9IGdldE9wdGlvbihwYXVzZU9wdGlvbnMsICdvblBvc3RQYXVzZScpO1xuICAgICAgc3RhdGUucGF1c2VkID0gdHJ1ZTtcbiAgICAgIG9uUGF1c2UgPT09IG51bGwgfHwgb25QYXVzZSA9PT0gdm9pZCAwIHx8IG9uUGF1c2UoKTtcbiAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgdXBkYXRlT2JzZXJ2ZWROb2RlcygpO1xuICAgICAgb25Qb3N0UGF1c2UgPT09IG51bGwgfHwgb25Qb3N0UGF1c2UgPT09IHZvaWQgMCB8fCBvblBvc3RQYXVzZSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICB1bnBhdXNlOiBmdW5jdGlvbiB1bnBhdXNlKHVucGF1c2VPcHRpb25zKSB7XG4gICAgICBpZiAoIXN0YXRlLnBhdXNlZCB8fCAhc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIG9uVW5wYXVzZSA9IGdldE9wdGlvbih1bnBhdXNlT3B0aW9ucywgJ29uVW5wYXVzZScpO1xuICAgICAgdmFyIG9uUG9zdFVucGF1c2UgPSBnZXRPcHRpb24odW5wYXVzZU9wdGlvbnMsICdvblBvc3RVbnBhdXNlJyk7XG4gICAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgIG9uVW5wYXVzZSA9PT0gbnVsbCB8fCBvblVucGF1c2UgPT09IHZvaWQgMCB8fCBvblVucGF1c2UoKTtcbiAgICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICAgIGFkZExpc3RlbmVycygpO1xuICAgICAgdXBkYXRlT2JzZXJ2ZWROb2RlcygpO1xuICAgICAgb25Qb3N0VW5wYXVzZSA9PT0gbnVsbCB8fCBvblBvc3RVbnBhdXNlID09PSB2b2lkIDAgfHwgb25Qb3N0VW5wYXVzZSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICB1cGRhdGVDb250YWluZXJFbGVtZW50czogZnVuY3Rpb24gdXBkYXRlQ29udGFpbmVyRWxlbWVudHMoY29udGFpbmVyRWxlbWVudHMpIHtcbiAgICAgIHZhciBlbGVtZW50c0FzQXJyYXkgPSBbXS5jb25jYXQoY29udGFpbmVyRWxlbWVudHMpLmZpbHRlcihCb29sZWFuKTtcbiAgICAgIHN0YXRlLmNvbnRhaW5lcnMgPSBlbGVtZW50c0FzQXJyYXkubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBkb2MucXVlcnlTZWxlY3RvcihlbGVtZW50KSA6IGVsZW1lbnQ7XG4gICAgICB9KTtcbiAgICAgIGlmIChzdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgfVxuICAgICAgdXBkYXRlT2JzZXJ2ZWROb2RlcygpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9O1xuXG4gIC8vIGluaXRpYWxpemUgY29udGFpbmVyIGVsZW1lbnRzXG4gIHRyYXAudXBkYXRlQ29udGFpbmVyRWxlbWVudHMoZWxlbWVudHMpO1xuICByZXR1cm4gdHJhcDtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUZvY3VzVHJhcCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9jdXMtdHJhcC5lc20uanMubWFwXG4iLCIvKiFcbiAqIGhlYWRyb29tLmpzIHYwLjEyLjAgLSBHaXZlIHlvdXIgcGFnZSBzb21lIGhlYWRyb29tLiBIaWRlIHlvdXIgaGVhZGVyIHVudGlsIHlvdSBuZWVkIGl0XG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgTmljayBXaWxsaWFtcyAtIGh0dHA6Ly93aWNreS5uaWxsaWEubXMvaGVhZHJvb20uanNcbiAqIExpY2Vuc2U6IE1JVFxuICovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuSGVhZHJvb20gPSBmYWN0b3J5KCkpO1xufSh0aGlzLCBmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBpc0Jyb3dzZXIoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBkZXRlY3QgYnJvd3NlciBzdXBwb3J0IGZvciBhZGRpbmcgYW4gZXZlbnQgbGlzdGVuZXIgd2l0aCBvcHRpb25zXG4gICAqIENyZWRpdDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50VGFyZ2V0L2FkZEV2ZW50TGlzdGVuZXJcbiAgICovXG4gIGZ1bmN0aW9uIHBhc3NpdmVFdmVudHNTdXBwb3J0ZWQoKSB7XG4gICAgdmFyIHN1cHBvcnRlZCA9IGZhbHNlO1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2V0dGVyLXJldHVyblxuICAgICAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgICBzdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc3VwcG9ydGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvcnRlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiAhIShcbiAgICAgIGlzQnJvd3NlcigpICYmXG4gICAgICBmdW5jdGlvbigpIHt9LmJpbmQgJiZcbiAgICAgIFwiY2xhc3NMaXN0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmXG4gICAgICBPYmplY3QuYXNzaWduICYmXG4gICAgICBPYmplY3Qua2V5cyAmJlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRG9jdW1lbnQob2JqKSB7XG4gICAgcmV0dXJuIG9iai5ub2RlVHlwZSA9PT0gOTsgLy8gTm9kZS5ET0NVTUVOVF9OT0RFID09PSA5XG4gIH1cblxuICBmdW5jdGlvbiBpc1dpbmRvdyhvYmopIHtcbiAgICAvLyBgb2JqID09PSB3aW5kb3dgIG9yIGBvYmogaW5zdGFuY2VvZiBXaW5kb3dgIGlzIG5vdCBzdWZmaWNpZW50LFxuICAgIC8vIGFzIHRoZSBvYmogbWF5IGJlIHRoZSB3aW5kb3cgb2YgYW4gaWZyYW1lLlxuICAgIHJldHVybiBvYmogJiYgb2JqLmRvY3VtZW50ICYmIGlzRG9jdW1lbnQob2JqLmRvY3VtZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdpbmRvd1Njcm9sbGVyKHdpbikge1xuICAgIHZhciBkb2MgPSB3aW4uZG9jdW1lbnQ7XG4gICAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBAc2VlIGh0dHA6Ly9qYW1lcy5wYWRvbHNleS5jb20vamF2YXNjcmlwdC9nZXQtZG9jdW1lbnQtaGVpZ2h0LWNyb3NzLWJyb3dzZXIvXG4gICAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IHRoZSBzY3JvbGwgaGVpZ2h0IG9mIHRoZSBkb2N1bWVudCBpbiBwaXhlbHNcbiAgICAgICAqL1xuICAgICAgc2Nyb2xsSGVpZ2h0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KFxuICAgICAgICAgIGJvZHkuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgIGh0bWwuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgIGJvZHkub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgIGh0bWwub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgIGJvZHkuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIGh0bWwuY2xpZW50SGVpZ2h0XG4gICAgICAgICk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEBzZWUgaHR0cDovL2FuZHlsYW5ndG9uLmNvLnVrL2Jsb2cvZGV2ZWxvcG1lbnQvZ2V0LXZpZXdwb3J0LXNpemUtd2lkdGgtYW5kLWhlaWdodC1qYXZhc2NyaXB0XG4gICAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IHRoZSBoZWlnaHQgb2YgdGhlIHZpZXdwb3J0IGluIHBpeGVsc1xuICAgICAgICovXG4gICAgICBoZWlnaHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gd2luLmlubmVySGVpZ2h0IHx8IGh0bWwuY2xpZW50SGVpZ2h0IHx8IGJvZHkuY2xpZW50SGVpZ2h0O1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBHZXRzIHRoZSBZIHNjcm9sbCBwb3NpdGlvblxuICAgICAgICogQHJldHVybiB7TnVtYmVyfSBwaXhlbHMgdGhlIHBhZ2UgaGFzIHNjcm9sbGVkIGFsb25nIHRoZSBZLWF4aXNcbiAgICAgICAqL1xuICAgICAgc2Nyb2xsWTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh3aW4ucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiB3aW4ucGFnZVlPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKGh0bWwgfHwgYm9keS5wYXJlbnROb2RlIHx8IGJvZHkpLnNjcm9sbFRvcDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZWxlbWVudFNjcm9sbGVyKGVsZW1lbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IHRoZSBzY3JvbGwgaGVpZ2h0IG9mIHRoZSBlbGVtZW50IGluIHBpeGVsc1xuICAgICAgICovXG4gICAgICBzY3JvbGxIZWlnaHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoXG4gICAgICAgICAgZWxlbWVudC5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgZWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgZWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICAgICAgKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQHJldHVybiB7TnVtYmVyfSB0aGUgaGVpZ2h0IG9mIHRoZSBlbGVtZW50IGluIHBpeGVsc1xuICAgICAgICovXG4gICAgICBoZWlnaHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoZWxlbWVudC5vZmZzZXRIZWlnaHQsIGVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0cyB0aGUgWSBzY3JvbGwgcG9zaXRpb25cbiAgICAgICAqIEByZXR1cm4ge051bWJlcn0gcGl4ZWxzIHRoZSBlbGVtZW50IGhhcyBzY3JvbGxlZCBhbG9uZyB0aGUgWS1heGlzXG4gICAgICAgKi9cbiAgICAgIHNjcm9sbFk6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNjcm9sbGVyKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gaXNXaW5kb3coZWxlbWVudCkgPyB3aW5kb3dTY3JvbGxlcihlbGVtZW50KSA6IGVsZW1lbnRTY3JvbGxlcihlbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gZWxlbWVudCBFdmVudFRhcmdldFxuICAgKi9cbiAgZnVuY3Rpb24gdHJhY2tTY3JvbGwoZWxlbWVudCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgaXNQYXNzaXZlU3VwcG9ydGVkID0gcGFzc2l2ZUV2ZW50c1N1cHBvcnRlZCgpO1xuICAgIHZhciByYWZJZDtcbiAgICB2YXIgc2Nyb2xsZWQgPSBmYWxzZTtcbiAgICB2YXIgc2Nyb2xsZXIgPSBjcmVhdGVTY3JvbGxlcihlbGVtZW50KTtcbiAgICB2YXIgbGFzdFNjcm9sbFkgPSBzY3JvbGxlci5zY3JvbGxZKCk7XG4gICAgdmFyIGRldGFpbHMgPSB7fTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHZhciBzY3JvbGxZID0gTWF0aC5yb3VuZChzY3JvbGxlci5zY3JvbGxZKCkpO1xuICAgICAgdmFyIGhlaWdodCA9IHNjcm9sbGVyLmhlaWdodCgpO1xuICAgICAgdmFyIHNjcm9sbEhlaWdodCA9IHNjcm9sbGVyLnNjcm9sbEhlaWdodCgpO1xuXG4gICAgICAvLyByZXVzZSBvYmplY3QgZm9yIGxlc3MgbWVtb3J5IGNodXJuXG4gICAgICBkZXRhaWxzLnNjcm9sbFkgPSBzY3JvbGxZO1xuICAgICAgZGV0YWlscy5sYXN0U2Nyb2xsWSA9IGxhc3RTY3JvbGxZO1xuICAgICAgZGV0YWlscy5kaXJlY3Rpb24gPSBzY3JvbGxZID4gbGFzdFNjcm9sbFkgPyBcImRvd25cIiA6IFwidXBcIjtcbiAgICAgIGRldGFpbHMuZGlzdGFuY2UgPSBNYXRoLmFicyhzY3JvbGxZIC0gbGFzdFNjcm9sbFkpO1xuICAgICAgZGV0YWlscy5pc091dE9mQm91bmRzID0gc2Nyb2xsWSA8IDAgfHwgc2Nyb2xsWSArIGhlaWdodCA+IHNjcm9sbEhlaWdodDtcbiAgICAgIGRldGFpbHMudG9wID0gc2Nyb2xsWSA8PSBvcHRpb25zLm9mZnNldFtkZXRhaWxzLmRpcmVjdGlvbl07XG4gICAgICBkZXRhaWxzLmJvdHRvbSA9IHNjcm9sbFkgKyBoZWlnaHQgPj0gc2Nyb2xsSGVpZ2h0O1xuICAgICAgZGV0YWlscy50b2xlcmFuY2VFeGNlZWRlZCA9XG4gICAgICAgIGRldGFpbHMuZGlzdGFuY2UgPiBvcHRpb25zLnRvbGVyYW5jZVtkZXRhaWxzLmRpcmVjdGlvbl07XG5cbiAgICAgIGNhbGxiYWNrKGRldGFpbHMpO1xuXG4gICAgICBsYXN0U2Nyb2xsWSA9IHNjcm9sbFk7XG4gICAgICBzY3JvbGxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcbiAgICAgIGlmICghc2Nyb2xsZWQpIHtcbiAgICAgICAgc2Nyb2xsZWQgPSB0cnVlO1xuICAgICAgICByYWZJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBldmVudE9wdGlvbnMgPSBpc1Bhc3NpdmVTdXBwb3J0ZWRcbiAgICAgID8geyBwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiBmYWxzZSB9XG4gICAgICA6IGZhbHNlO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCwgZXZlbnRPcHRpb25zKTtcbiAgICB1cGRhdGUoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSWQpO1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsLCBldmVudE9wdGlvbnMpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVVcERvd24odCkge1xuICAgIHJldHVybiB0ID09PSBPYmplY3QodCkgPyB0IDogeyBkb3duOiB0LCB1cDogdCB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFVJIGVuaGFuY2VtZW50IGZvciBmaXhlZCBoZWFkZXJzLlxuICAgKiBIaWRlcyBoZWFkZXIgd2hlbiBzY3JvbGxpbmcgZG93blxuICAgKiBTaG93cyBoZWFkZXIgd2hlbiBzY3JvbGxpbmcgdXBcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7RE9NRWxlbWVudH0gZWxlbSB0aGUgaGVhZGVyIGVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgb3B0aW9ucyBmb3IgdGhlIHdpZGdldFxuICAgKi9cbiAgZnVuY3Rpb24gSGVhZHJvb20oZWxlbSwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgSGVhZHJvb20ub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgdGhpcy5jbGFzc2VzID0gT2JqZWN0LmFzc2lnbih7fSwgSGVhZHJvb20ub3B0aW9ucy5jbGFzc2VzLCBvcHRpb25zLmNsYXNzZXMpO1xuXG4gICAgdGhpcy5lbGVtID0gZWxlbTtcbiAgICB0aGlzLnRvbGVyYW5jZSA9IG5vcm1hbGl6ZVVwRG93bih0aGlzLnRvbGVyYW5jZSk7XG4gICAgdGhpcy5vZmZzZXQgPSBub3JtYWxpemVVcERvd24odGhpcy5vZmZzZXQpO1xuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZyb3plbiA9IGZhbHNlO1xuICB9XG4gIEhlYWRyb29tLnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogSGVhZHJvb20sXG5cbiAgICAvKipcbiAgICAgKiBTdGFydCBsaXN0ZW5pbmcgdG8gc2Nyb2xsaW5nXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKEhlYWRyb29tLmN1dHNUaGVNdXN0YXJkICYmICF0aGlzLmluaXRpYWxpc2VkKSB7XG4gICAgICAgIHRoaXMuYWRkQ2xhc3MoXCJpbml0aWFsXCIpO1xuICAgICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcblxuICAgICAgICAvLyBkZWZlciBldmVudCByZWdpc3RyYXRpb24gdG8gaGFuZGxlIGJyb3dzZXJcbiAgICAgICAgLy8gcG90ZW50aWFsbHkgcmVzdG9yaW5nIHByZXZpb3VzIHNjcm9sbCBwb3NpdGlvblxuICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgIGZ1bmN0aW9uKHNlbGYpIHtcbiAgICAgICAgICAgIHNlbGYuc2Nyb2xsVHJhY2tlciA9IHRyYWNrU2Nyb2xsKFxuICAgICAgICAgICAgICBzZWxmLnNjcm9sbGVyLFxuICAgICAgICAgICAgICB7IG9mZnNldDogc2VsZi5vZmZzZXQsIHRvbGVyYW5jZTogc2VsZi50b2xlcmFuY2UgfSxcbiAgICAgICAgICAgICAgc2VsZi51cGRhdGUuYmluZChzZWxmKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95IHRoZSB3aWRnZXQsIGNsZWFyaW5nIHVwIGFmdGVyIGl0c2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBmYWxzZTtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuY2xhc3NlcykuZm9yRWFjaCh0aGlzLnJlbW92ZUNsYXNzLCB0aGlzKTtcbiAgICAgIHRoaXMuc2Nyb2xsVHJhY2tlci5kZXN0cm95KCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVucGluIHRoZSBlbGVtZW50XG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHVucGluOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmhhc0NsYXNzKFwicGlubmVkXCIpIHx8ICF0aGlzLmhhc0NsYXNzKFwidW5waW5uZWRcIikpIHtcbiAgICAgICAgdGhpcy5hZGRDbGFzcyhcInVucGlubmVkXCIpO1xuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKFwicGlubmVkXCIpO1xuXG4gICAgICAgIGlmICh0aGlzLm9uVW5waW4pIHtcbiAgICAgICAgICB0aGlzLm9uVW5waW4uY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQaW4gdGhlIGVsZW1lbnRcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgcGluOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmhhc0NsYXNzKFwidW5waW5uZWRcIikpIHtcbiAgICAgICAgdGhpcy5hZGRDbGFzcyhcInBpbm5lZFwiKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyhcInVucGlubmVkXCIpO1xuXG4gICAgICAgIGlmICh0aGlzLm9uUGluKSB7XG4gICAgICAgICAgdGhpcy5vblBpbi5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEZyZWV6ZXMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHdpZGdldFxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBmcmVlemU6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5mcm96ZW4gPSB0cnVlO1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImZyb3plblwiKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmUtZW5hYmxlcyB0aGUgZGVmYXVsdCBiZWhhdmlvdXIgb2YgdGhlIHdpZGdldFxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICB1bmZyZWV6ZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmZyb3plbiA9IGZhbHNlO1xuICAgICAgdGhpcy5yZW1vdmVDbGFzcyhcImZyb3plblwiKTtcbiAgICB9LFxuXG4gICAgdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5oYXNDbGFzcyhcInRvcFwiKSkge1xuICAgICAgICB0aGlzLmFkZENsYXNzKFwidG9wXCIpO1xuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKFwibm90VG9wXCIpO1xuXG4gICAgICAgIGlmICh0aGlzLm9uVG9wKSB7XG4gICAgICAgICAgdGhpcy5vblRvcC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIG5vdFRvcDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzQ2xhc3MoXCJub3RUb3BcIikpIHtcbiAgICAgICAgdGhpcy5hZGRDbGFzcyhcIm5vdFRvcFwiKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyhcInRvcFwiKTtcblxuICAgICAgICBpZiAodGhpcy5vbk5vdFRvcCkge1xuICAgICAgICAgIHRoaXMub25Ob3RUb3AuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBib3R0b206IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc0NsYXNzKFwiYm90dG9tXCIpKSB7XG4gICAgICAgIHRoaXMuYWRkQ2xhc3MoXCJib3R0b21cIik7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJub3RCb3R0b21cIik7XG5cbiAgICAgICAgaWYgKHRoaXMub25Cb3R0b20pIHtcbiAgICAgICAgICB0aGlzLm9uQm90dG9tLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbm90Qm90dG9tOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5oYXNDbGFzcyhcIm5vdEJvdHRvbVwiKSkge1xuICAgICAgICB0aGlzLmFkZENsYXNzKFwibm90Qm90dG9tXCIpO1xuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKFwiYm90dG9tXCIpO1xuXG4gICAgICAgIGlmICh0aGlzLm9uTm90Qm90dG9tKSB7XG4gICAgICAgICAgdGhpcy5vbk5vdEJvdHRvbS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHNob3VsZFVucGluOiBmdW5jdGlvbihkZXRhaWxzKSB7XG4gICAgICB2YXIgc2Nyb2xsaW5nRG93biA9IGRldGFpbHMuZGlyZWN0aW9uID09PSBcImRvd25cIjtcblxuICAgICAgcmV0dXJuIHNjcm9sbGluZ0Rvd24gJiYgIWRldGFpbHMudG9wICYmIGRldGFpbHMudG9sZXJhbmNlRXhjZWVkZWQ7XG4gICAgfSxcblxuICAgIHNob3VsZFBpbjogZnVuY3Rpb24oZGV0YWlscykge1xuICAgICAgdmFyIHNjcm9sbGluZ1VwID0gZGV0YWlscy5kaXJlY3Rpb24gPT09IFwidXBcIjtcblxuICAgICAgcmV0dXJuIChzY3JvbGxpbmdVcCAmJiBkZXRhaWxzLnRvbGVyYW5jZUV4Y2VlZGVkKSB8fCBkZXRhaWxzLnRvcDtcbiAgICB9LFxuXG4gICAgYWRkQ2xhc3M6IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQuYXBwbHkoXG4gICAgICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QsXG4gICAgICAgIHRoaXMuY2xhc3Nlc1tjbGFzc05hbWVdLnNwbGl0KFwiIFwiKVxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5yZW1vdmUuYXBwbHkoXG4gICAgICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QsXG4gICAgICAgIHRoaXMuY2xhc3Nlc1tjbGFzc05hbWVdLnNwbGl0KFwiIFwiKVxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgaGFzQ2xhc3M6IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuY2xhc3Nlc1tjbGFzc05hbWVdLnNwbGl0KFwiIFwiKS5ldmVyeShmdW5jdGlvbihjbHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKGNscyk7XG4gICAgICB9LCB0aGlzLmVsZW0pO1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uKGRldGFpbHMpIHtcbiAgICAgIGlmIChkZXRhaWxzLmlzT3V0T2ZCb3VuZHMpIHtcbiAgICAgICAgLy8gSWdub3JlIGJvdW5jeSBzY3JvbGxpbmcgaW4gT1NYXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZnJvemVuID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGRldGFpbHMudG9wKSB7XG4gICAgICAgIHRoaXMudG9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5vdFRvcCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGV0YWlscy5ib3R0b20pIHtcbiAgICAgICAgdGhpcy5ib3R0b20oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubm90Qm90dG9tKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNob3VsZFVucGluKGRldGFpbHMpKSB7XG4gICAgICAgIHRoaXMudW5waW4oKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG91bGRQaW4oZGV0YWlscykpIHtcbiAgICAgICAgdGhpcy5waW4oKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgb3B0aW9uc1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgSGVhZHJvb20ub3B0aW9ucyA9IHtcbiAgICB0b2xlcmFuY2U6IHtcbiAgICAgIHVwOiAwLFxuICAgICAgZG93bjogMFxuICAgIH0sXG4gICAgb2Zmc2V0OiAwLFxuICAgIHNjcm9sbGVyOiBpc0Jyb3dzZXIoKSA/IHdpbmRvdyA6IG51bGwsXG4gICAgY2xhc3Nlczoge1xuICAgICAgZnJvemVuOiBcImhlYWRyb29tLS1mcm96ZW5cIixcbiAgICAgIHBpbm5lZDogXCJoZWFkcm9vbS0tcGlubmVkXCIsXG4gICAgICB1bnBpbm5lZDogXCJoZWFkcm9vbS0tdW5waW5uZWRcIixcbiAgICAgIHRvcDogXCJoZWFkcm9vbS0tdG9wXCIsXG4gICAgICBub3RUb3A6IFwiaGVhZHJvb20tLW5vdC10b3BcIixcbiAgICAgIGJvdHRvbTogXCJoZWFkcm9vbS0tYm90dG9tXCIsXG4gICAgICBub3RCb3R0b206IFwiaGVhZHJvb20tLW5vdC1ib3R0b21cIixcbiAgICAgIGluaXRpYWw6IFwiaGVhZHJvb21cIlxuICAgIH1cbiAgfTtcblxuICBIZWFkcm9vbS5jdXRzVGhlTXVzdGFyZCA9IGlzU3VwcG9ydGVkKCk7XG5cbiAgcmV0dXJuIEhlYWRyb29tO1xuXG59KSk7XG4iLCIvKiohXG4gKiBAZmlsZU92ZXJ2aWV3IEtpY2thc3MgbGlicmFyeSB0byBjcmVhdGUgYW5kIHBsYWNlIHBvcHBlcnMgbmVhciB0aGVpciByZWZlcmVuY2UgZWxlbWVudHMuXG4gKiBAdmVyc2lvbiAxLjE2LjFcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgRmVkZXJpY28gWml2b2xvIGFuZCBjb250cmlidXRvcnNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICovXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJztcblxudmFyIHRpbWVvdXREdXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxvbmdlclRpbWVvdXRCcm93c2VycyA9IFsnRWRnZScsICdUcmlkZW50JywgJ0ZpcmVmb3gnXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb25nZXJUaW1lb3V0QnJvd3NlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoaXNCcm93c2VyICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihsb25nZXJUaW1lb3V0QnJvd3NlcnNbaV0pID49IDApIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuICByZXR1cm4gMDtcbn0oKTtcblxuZnVuY3Rpb24gbWljcm90YXNrRGVib3VuY2UoZm4pIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2FsbGVkID0gdHJ1ZTtcbiAgICB3aW5kb3cuUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsZWQgPSBmYWxzZTtcbiAgICAgIGZuKCk7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRhc2tEZWJvdW5jZShmbikge1xuICB2YXIgc2NoZWR1bGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzY2hlZHVsZWQpIHtcbiAgICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIGZuKCk7XG4gICAgICB9LCB0aW1lb3V0RHVyYXRpb24pO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIHN1cHBvcnRzTWljcm9UYXNrcyA9IGlzQnJvd3NlciAmJiB3aW5kb3cuUHJvbWlzZTtcblxuLyoqXG4qIENyZWF0ZSBhIGRlYm91bmNlZCB2ZXJzaW9uIG9mIGEgbWV0aG9kLCB0aGF0J3MgYXN5bmNocm9ub3VzbHkgZGVmZXJyZWRcbiogYnV0IGNhbGxlZCBpbiB0aGUgbWluaW11bSB0aW1lIHBvc3NpYmxlLlxuKlxuKiBAbWV0aG9kXG4qIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiogQGFyZ3VtZW50IHtGdW5jdGlvbn0gZm5cbiogQHJldHVybnMge0Z1bmN0aW9ufVxuKi9cbnZhciBkZWJvdW5jZSA9IHN1cHBvcnRzTWljcm9UYXNrcyA/IG1pY3JvdGFza0RlYm91bmNlIDogdGFza0RlYm91bmNlO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIGZ1bmN0aW9uXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0FueX0gZnVuY3Rpb25Ub0NoZWNrIC0gdmFyaWFibGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSBhbnN3ZXIgdG86IGlzIGEgZnVuY3Rpb24/XG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuY3Rpb25Ub0NoZWNrKSB7XG4gIHZhciBnZXRUeXBlID0ge307XG4gIHJldHVybiBmdW5jdGlvblRvQ2hlY2sgJiYgZ2V0VHlwZS50b1N0cmluZy5jYWxsKGZ1bmN0aW9uVG9DaGVjaykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogR2V0IENTUyBjb21wdXRlZCBwcm9wZXJ0eSBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCwgcHJvcGVydHkpIHtcbiAgaWYgKGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcbiAgdmFyIHdpbmRvdyA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgdmFyIGNzcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xuICByZXR1cm4gcHJvcGVydHkgPyBjc3NbcHJvcGVydHldIDogY3NzO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHBhcmVudE5vZGUgb3IgdGhlIGhvc3Qgb2YgdGhlIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IHBhcmVudFxuICovXG5mdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG4gIHJldHVybiBlbGVtZW50LnBhcmVudE5vZGUgfHwgZWxlbWVudC5ob3N0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHNjcm9sbGluZyBwYXJlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IHNjcm9sbCBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gUmV0dXJuIGJvZHksIGBnZXRTY3JvbGxgIHdpbGwgdGFrZSBjYXJlIHRvIGdldCB0aGUgY29ycmVjdCBgc2Nyb2xsVG9wYCBmcm9tIGl0XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgc3dpdGNoIChlbGVtZW50Lm5vZGVOYW1lKSB7XG4gICAgY2FzZSAnSFRNTCc6XG4gICAgY2FzZSAnQk9EWSc6XG4gICAgICByZXR1cm4gZWxlbWVudC5vd25lckRvY3VtZW50LmJvZHk7XG4gICAgY2FzZSAnI2RvY3VtZW50JzpcbiAgICAgIHJldHVybiBlbGVtZW50LmJvZHk7XG4gIH1cblxuICAvLyBGaXJlZm94IHdhbnQgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcblxuICB2YXIgX2dldFN0eWxlQ29tcHV0ZWRQcm9wID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQpLFxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0U3R5bGVDb21wdXRlZFByb3Aub3ZlcmZsb3csXG4gICAgICBvdmVyZmxvd1ggPSBfZ2V0U3R5bGVDb21wdXRlZFByb3Aub3ZlcmZsb3dYLFxuICAgICAgb3ZlcmZsb3dZID0gX2dldFN0eWxlQ29tcHV0ZWRQcm9wLm92ZXJmbG93WTtcblxuICBpZiAoLyhhdXRvfHNjcm9sbHxvdmVybGF5KS8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCkpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcmVmZXJlbmNlIG5vZGUgb2YgdGhlIHJlZmVyZW5jZSBvYmplY3QsIG9yIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGl0c2VsZi5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3R9IHJlZmVyZW5jZSAtIHRoZSByZWZlcmVuY2UgZWxlbWVudCAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGdldFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlKSB7XG4gIHJldHVybiByZWZlcmVuY2UgJiYgcmVmZXJlbmNlLnJlZmVyZW5jZU5vZGUgPyByZWZlcmVuY2UucmVmZXJlbmNlTm9kZSA6IHJlZmVyZW5jZTtcbn1cblxudmFyIGlzSUUxMSA9IGlzQnJvd3NlciAmJiAhISh3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlKTtcbnZhciBpc0lFMTAgPSBpc0Jyb3dzZXIgJiYgL01TSUUgMTAvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgYnJvd3NlciBpcyBJbnRlcm5ldCBFeHBsb3JlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtOdW1iZXJ9IHZlcnNpb24gdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSBpc0lFXG4gKi9cbmZ1bmN0aW9uIGlzSUUodmVyc2lvbikge1xuICBpZiAodmVyc2lvbiA9PT0gMTEpIHtcbiAgICByZXR1cm4gaXNJRTExO1xuICB9XG4gIGlmICh2ZXJzaW9uID09PSAxMCkge1xuICAgIHJldHVybiBpc0lFMTA7XG4gIH1cbiAgcmV0dXJuIGlzSUUxMSB8fCBpc0lFMTA7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgb2Zmc2V0IHBhcmVudCBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gb2Zmc2V0IHBhcmVudFxuICovXG5mdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgdmFyIG5vT2Zmc2V0UGFyZW50ID0gaXNJRSgxMCkgPyBkb2N1bWVudC5ib2R5IDogbnVsbDtcblxuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuICB2YXIgb2Zmc2V0UGFyZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQgfHwgbnVsbDtcbiAgLy8gU2tpcCBoaWRkZW4gZWxlbWVudHMgd2hpY2ggZG9uJ3QgaGF2ZSBhbiBvZmZzZXRQYXJlbnRcbiAgd2hpbGUgKG9mZnNldFBhcmVudCA9PT0gbm9PZmZzZXRQYXJlbnQgJiYgZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSAoZWxlbWVudCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKS5vZmZzZXRQYXJlbnQ7XG4gIH1cblxuICB2YXIgbm9kZU5hbWUgPSBvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0UGFyZW50Lm5vZGVOYW1lO1xuXG4gIGlmICghbm9kZU5hbWUgfHwgbm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgLy8gLm9mZnNldFBhcmVudCB3aWxsIHJldHVybiB0aGUgY2xvc2VzdCBUSCwgVEQgb3IgVEFCTEUgaW4gY2FzZVxuICAvLyBubyBvZmZzZXRQYXJlbnQgaXMgcHJlc2VudCwgSSBoYXRlIHRoaXMgam9iLi4uXG4gIGlmIChbJ1RIJywgJ1REJywgJ1RBQkxFJ10uaW5kZXhPZihvZmZzZXRQYXJlbnQubm9kZU5hbWUpICE9PSAtMSAmJiBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkob2Zmc2V0UGFyZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50O1xufVxuXG5mdW5jdGlvbiBpc09mZnNldENvbnRhaW5lcihlbGVtZW50KSB7XG4gIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIG5vZGVOYW1lID09PSAnSFRNTCcgfHwgZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpID09PSBlbGVtZW50O1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSByb290IG5vZGUgKGRvY3VtZW50LCBzaGFkb3dET00gcm9vdCkgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybnMge0VsZW1lbnR9IHJvb3Qgbm9kZVxuICovXG5mdW5jdGlvbiBnZXRSb290KG5vZGUpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBnZXRSb290KG5vZGUucGFyZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgb2Zmc2V0IHBhcmVudCBjb21tb24gdG8gdGhlIHR3byBwcm92aWRlZCBub2Rlc1xuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50MVxuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50MlxuICogQHJldHVybnMge0VsZW1lbnR9IGNvbW1vbiBvZmZzZXQgcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDEsIGVsZW1lbnQyKSB7XG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHRvIGF2b2lkIGVycm9ycyBpbiBjYXNlIG9uZSBvZiB0aGUgZWxlbWVudHMgaXNuJ3QgZGVmaW5lZCBmb3IgYW55IHJlYXNvblxuICBpZiAoIWVsZW1lbnQxIHx8ICFlbGVtZW50MS5ub2RlVHlwZSB8fCAhZWxlbWVudDIgfHwgIWVsZW1lbnQyLm5vZGVUeXBlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIC8vIEhlcmUgd2UgbWFrZSBzdXJlIHRvIGdpdmUgYXMgXCJzdGFydFwiIHRoZSBlbGVtZW50IHRoYXQgY29tZXMgZmlyc3QgaW4gdGhlIERPTVxuICB2YXIgb3JkZXIgPSBlbGVtZW50MS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlbGVtZW50MikgJiBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORztcbiAgdmFyIHN0YXJ0ID0gb3JkZXIgPyBlbGVtZW50MSA6IGVsZW1lbnQyO1xuICB2YXIgZW5kID0gb3JkZXIgPyBlbGVtZW50MiA6IGVsZW1lbnQxO1xuXG4gIC8vIEdldCBjb21tb24gYW5jZXN0b3IgY29udGFpbmVyXG4gIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gIHJhbmdlLnNldFN0YXJ0KHN0YXJ0LCAwKTtcbiAgcmFuZ2Uuc2V0RW5kKGVuZCwgMCk7XG4gIHZhciBjb21tb25BbmNlc3RvckNvbnRhaW5lciA9IHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyO1xuXG4gIC8vIEJvdGggbm9kZXMgYXJlIGluc2lkZSAjZG9jdW1lbnRcblxuICBpZiAoZWxlbWVudDEgIT09IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyICYmIGVsZW1lbnQyICE9PSBjb21tb25BbmNlc3RvckNvbnRhaW5lciB8fCBzdGFydC5jb250YWlucyhlbmQpKSB7XG4gICAgaWYgKGlzT2Zmc2V0Q29udGFpbmVyKGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKSkge1xuICAgICAgcmV0dXJuIGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQoY29tbW9uQW5jZXN0b3JDb250YWluZXIpO1xuICB9XG5cbiAgLy8gb25lIG9mIHRoZSBub2RlcyBpcyBpbnNpZGUgc2hhZG93RE9NLCBmaW5kIHdoaWNoIG9uZVxuICB2YXIgZWxlbWVudDFyb290ID0gZ2V0Um9vdChlbGVtZW50MSk7XG4gIGlmIChlbGVtZW50MXJvb3QuaG9zdCkge1xuICAgIHJldHVybiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxcm9vdC5ob3N0LCBlbGVtZW50Mik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDEsIGdldFJvb3QoZWxlbWVudDIpLmhvc3QpO1xuICB9XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc2Nyb2xsIHZhbHVlIG9mIHRoZSBnaXZlbiBlbGVtZW50IGluIHRoZSBnaXZlbiBzaWRlICh0b3AgYW5kIGxlZnQpXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBzaWRlIGB0b3BgIG9yIGBsZWZ0YFxuICogQHJldHVybnMge251bWJlcn0gYW1vdW50IG9mIHNjcm9sbGVkIHBpeGVsc1xuICovXG5mdW5jdGlvbiBnZXRTY3JvbGwoZWxlbWVudCkge1xuICB2YXIgc2lkZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ3RvcCc7XG5cbiAgdmFyIHVwcGVyU2lkZSA9IHNpZGUgPT09ICd0b3AnID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XG4gIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHZhciBodG1sID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB2YXIgc2Nyb2xsaW5nRWxlbWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHx8IGh0bWw7XG4gICAgcmV0dXJuIHNjcm9sbGluZ0VsZW1lbnRbdXBwZXJTaWRlXTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50W3VwcGVyU2lkZV07XG59XG5cbi8qXG4gKiBTdW0gb3Igc3VidHJhY3QgdGhlIGVsZW1lbnQgc2Nyb2xsIHZhbHVlcyAobGVmdCBhbmQgdG9wKSBmcm9tIGEgZ2l2ZW4gcmVjdCBvYmplY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWN0IC0gUmVjdCBvYmplY3QgeW91IHdhbnQgdG8gY2hhbmdlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgZnJvbSB0aGUgZnVuY3Rpb24gcmVhZHMgdGhlIHNjcm9sbCB2YWx1ZXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3VidHJhY3QgLSBzZXQgdG8gdHJ1ZSBpZiB5b3Ugd2FudCB0byBzdWJ0cmFjdCB0aGUgc2Nyb2xsIHZhbHVlc1xuICogQHJldHVybiB7T2JqZWN0fSByZWN0IC0gVGhlIG1vZGlmaWVyIHJlY3Qgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGluY2x1ZGVTY3JvbGwocmVjdCwgZWxlbWVudCkge1xuICB2YXIgc3VidHJhY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gIHZhciBzY3JvbGxUb3AgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ3RvcCcpO1xuICB2YXIgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbChlbGVtZW50LCAnbGVmdCcpO1xuICB2YXIgbW9kaWZpZXIgPSBzdWJ0cmFjdCA/IC0xIDogMTtcbiAgcmVjdC50b3AgKz0gc2Nyb2xsVG9wICogbW9kaWZpZXI7XG4gIHJlY3QuYm90dG9tICs9IHNjcm9sbFRvcCAqIG1vZGlmaWVyO1xuICByZWN0LmxlZnQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xuICByZWN0LnJpZ2h0ICs9IHNjcm9sbExlZnQgKiBtb2RpZmllcjtcbiAgcmV0dXJuIHJlY3Q7XG59XG5cbi8qXG4gKiBIZWxwZXIgdG8gZGV0ZWN0IGJvcmRlcnMgb2YgYSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0NTU1N0eWxlRGVjbGFyYXRpb259IHN0eWxlc1xuICogUmVzdWx0IG9mIGBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHlgIG9uIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gYXhpcyAtIGB4YCBvciBgeWBcbiAqIEByZXR1cm4ge251bWJlcn0gYm9yZGVycyAtIFRoZSBib3JkZXJzIHNpemUgb2YgdGhlIGdpdmVuIGF4aXNcbiAqL1xuXG5mdW5jdGlvbiBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsIGF4aXMpIHtcbiAgdmFyIHNpZGVBID0gYXhpcyA9PT0gJ3gnID8gJ0xlZnQnIDogJ1RvcCc7XG4gIHZhciBzaWRlQiA9IHNpZGVBID09PSAnTGVmdCcgPyAnUmlnaHQnIDogJ0JvdHRvbSc7XG5cbiAgcmV0dXJuIHBhcnNlRmxvYXQoc3R5bGVzWydib3JkZXInICsgc2lkZUEgKyAnV2lkdGgnXSkgKyBwYXJzZUZsb2F0KHN0eWxlc1snYm9yZGVyJyArIHNpZGVCICsgJ1dpZHRoJ10pO1xufVxuXG5mdW5jdGlvbiBnZXRTaXplKGF4aXMsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KGJvZHlbJ29mZnNldCcgKyBheGlzXSwgYm9keVsnc2Nyb2xsJyArIGF4aXNdLCBodG1sWydjbGllbnQnICsgYXhpc10sIGh0bWxbJ29mZnNldCcgKyBheGlzXSwgaHRtbFsnc2Nyb2xsJyArIGF4aXNdLCBpc0lFKDEwKSA/IHBhcnNlSW50KGh0bWxbJ29mZnNldCcgKyBheGlzXSkgKyBwYXJzZUludChjb21wdXRlZFN0eWxlWydtYXJnaW4nICsgKGF4aXMgPT09ICdIZWlnaHQnID8gJ1RvcCcgOiAnTGVmdCcpXSkgKyBwYXJzZUludChjb21wdXRlZFN0eWxlWydtYXJnaW4nICsgKGF4aXMgPT09ICdIZWlnaHQnID8gJ0JvdHRvbScgOiAnUmlnaHQnKV0pIDogMCk7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1NpemVzKGRvY3VtZW50KSB7XG4gIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgdmFyIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gaXNJRSgxMCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShodG1sKTtcblxuICByZXR1cm4ge1xuICAgIGhlaWdodDogZ2V0U2l6ZSgnSGVpZ2h0JywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSksXG4gICAgd2lkdGg6IGdldFNpemUoJ1dpZHRoJywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSlcbiAgfTtcbn1cblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG5cblxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG4vKipcbiAqIEdpdmVuIGVsZW1lbnQgb2Zmc2V0cywgZ2VuZXJhdGUgYW4gb3V0cHV0IHNpbWlsYXIgdG8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gb2Zmc2V0c1xuICogQHJldHVybnMge09iamVjdH0gQ2xpZW50UmVjdCBsaWtlIG91dHB1dFxuICovXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0KG9mZnNldHMpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBvZmZzZXRzLCB7XG4gICAgcmlnaHQ6IG9mZnNldHMubGVmdCArIG9mZnNldHMud2lkdGgsXG4gICAgYm90dG9tOiBvZmZzZXRzLnRvcCArIG9mZnNldHMuaGVpZ2h0XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldCBib3VuZGluZyBjbGllbnQgcmVjdCBvZiBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJuIHtPYmplY3R9IGNsaWVudCByZWN0XG4gKi9cbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0ge307XG5cbiAgLy8gSUUxMCAxMCBGSVg6IFBsZWFzZSwgZG9uJ3QgYXNrLCB0aGUgZWxlbWVudCBpc24ndFxuICAvLyBjb25zaWRlcmVkIGluIERPTSBpbiBzb21lIGNpcmN1bXN0YW5jZXMuLi5cbiAgLy8gVGhpcyBpc24ndCByZXByb2R1Y2libGUgaW4gSUUxMCBjb21wYXRpYmlsaXR5IG1vZGUgb2YgSUUxMVxuICB0cnkge1xuICAgIGlmIChpc0lFKDEwKSkge1xuICAgICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICd0b3AnKTtcbiAgICAgIHZhciBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XG4gICAgICByZWN0LnRvcCArPSBzY3JvbGxUb3A7XG4gICAgICByZWN0LmxlZnQgKz0gc2Nyb2xsTGVmdDtcbiAgICAgIHJlY3QuYm90dG9tICs9IHNjcm9sbFRvcDtcbiAgICAgIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSB7XG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHRvcDogcmVjdC50b3AsXG4gICAgd2lkdGg6IHJlY3QucmlnaHQgLSByZWN0LmxlZnQsXG4gICAgaGVpZ2h0OiByZWN0LmJvdHRvbSAtIHJlY3QudG9wXG4gIH07XG5cbiAgLy8gc3VidHJhY3Qgc2Nyb2xsYmFyIHNpemUgZnJvbSBzaXplc1xuICB2YXIgc2l6ZXMgPSBlbGVtZW50Lm5vZGVOYW1lID09PSAnSFRNTCcgPyBnZXRXaW5kb3dTaXplcyhlbGVtZW50Lm93bmVyRG9jdW1lbnQpIDoge307XG4gIHZhciB3aWR0aCA9IHNpemVzLndpZHRoIHx8IGVsZW1lbnQuY2xpZW50V2lkdGggfHwgcmVzdWx0LndpZHRoO1xuICB2YXIgaGVpZ2h0ID0gc2l6ZXMuaGVpZ2h0IHx8IGVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IHJlc3VsdC5oZWlnaHQ7XG5cbiAgdmFyIGhvcml6U2Nyb2xsYmFyID0gZWxlbWVudC5vZmZzZXRXaWR0aCAtIHdpZHRoO1xuICB2YXIgdmVydFNjcm9sbGJhciA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gaGVpZ2h0O1xuXG4gIC8vIGlmIGFuIGh5cG90aGV0aWNhbCBzY3JvbGxiYXIgaXMgZGV0ZWN0ZWQsIHdlIG11c3QgYmUgc3VyZSBpdCdzIG5vdCBhIGBib3JkZXJgXG4gIC8vIHdlIG1ha2UgdGhpcyBjaGVjayBjb25kaXRpb25hbCBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xuICBpZiAoaG9yaXpTY3JvbGxiYXIgfHwgdmVydFNjcm9sbGJhcikge1xuICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCk7XG4gICAgaG9yaXpTY3JvbGxiYXIgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAneCcpO1xuICAgIHZlcnRTY3JvbGxiYXIgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAneScpO1xuXG4gICAgcmVzdWx0LndpZHRoIC09IGhvcml6U2Nyb2xsYmFyO1xuICAgIHJlc3VsdC5oZWlnaHQgLT0gdmVydFNjcm9sbGJhcjtcbiAgfVxuXG4gIHJldHVybiBnZXRDbGllbnRSZWN0KHJlc3VsdCk7XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShjaGlsZHJlbiwgcGFyZW50KSB7XG4gIHZhciBmaXhlZFBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICB2YXIgaXNJRTEwID0gaXNJRSgxMCk7XG4gIHZhciBpc0hUTUwgPSBwYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJztcbiAgdmFyIGNoaWxkcmVuUmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChjaGlsZHJlbik7XG4gIHZhciBwYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHBhcmVudCk7XG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoY2hpbGRyZW4pO1xuXG4gIHZhciBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkocGFyZW50KTtcbiAgdmFyIGJvcmRlclRvcFdpZHRoID0gcGFyc2VGbG9hdChzdHlsZXMuYm9yZGVyVG9wV2lkdGgpO1xuICB2YXIgYm9yZGVyTGVmdFdpZHRoID0gcGFyc2VGbG9hdChzdHlsZXMuYm9yZGVyTGVmdFdpZHRoKTtcblxuICAvLyBJbiBjYXNlcyB3aGVyZSB0aGUgcGFyZW50IGlzIGZpeGVkLCB3ZSBtdXN0IGlnbm9yZSBuZWdhdGl2ZSBzY3JvbGwgaW4gb2Zmc2V0IGNhbGNcbiAgaWYgKGZpeGVkUG9zaXRpb24gJiYgaXNIVE1MKSB7XG4gICAgcGFyZW50UmVjdC50b3AgPSBNYXRoLm1heChwYXJlbnRSZWN0LnRvcCwgMCk7XG4gICAgcGFyZW50UmVjdC5sZWZ0ID0gTWF0aC5tYXgocGFyZW50UmVjdC5sZWZ0LCAwKTtcbiAgfVxuICB2YXIgb2Zmc2V0cyA9IGdldENsaWVudFJlY3Qoe1xuICAgIHRvcDogY2hpbGRyZW5SZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wIC0gYm9yZGVyVG9wV2lkdGgsXG4gICAgbGVmdDogY2hpbGRyZW5SZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQgLSBib3JkZXJMZWZ0V2lkdGgsXG4gICAgd2lkdGg6IGNoaWxkcmVuUmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IGNoaWxkcmVuUmVjdC5oZWlnaHRcbiAgfSk7XG4gIG9mZnNldHMubWFyZ2luVG9wID0gMDtcbiAgb2Zmc2V0cy5tYXJnaW5MZWZ0ID0gMDtcblxuICAvLyBTdWJ0cmFjdCBtYXJnaW5zIG9mIGRvY3VtZW50RWxlbWVudCBpbiBjYXNlIGl0J3MgYmVpbmcgdXNlZCBhcyBwYXJlbnRcbiAgLy8gd2UgZG8gdGhpcyBvbmx5IG9uIEhUTUwgYmVjYXVzZSBpdCdzIHRoZSBvbmx5IGVsZW1lbnQgdGhhdCBiZWhhdmVzXG4gIC8vIGRpZmZlcmVudGx5IHdoZW4gbWFyZ2lucyBhcmUgYXBwbGllZCB0byBpdC4gVGhlIG1hcmdpbnMgYXJlIGluY2x1ZGVkIGluXG4gIC8vIHRoZSBib3ggb2YgdGhlIGRvY3VtZW50RWxlbWVudCwgaW4gdGhlIG90aGVyIGNhc2VzIG5vdC5cbiAgaWYgKCFpc0lFMTAgJiYgaXNIVE1MKSB7XG4gICAgdmFyIG1hcmdpblRvcCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCk7XG4gICAgdmFyIG1hcmdpbkxlZnQgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5MZWZ0KTtcblxuICAgIG9mZnNldHMudG9wIC09IGJvcmRlclRvcFdpZHRoIC0gbWFyZ2luVG9wO1xuICAgIG9mZnNldHMuYm90dG9tIC09IGJvcmRlclRvcFdpZHRoIC0gbWFyZ2luVG9wO1xuICAgIG9mZnNldHMubGVmdCAtPSBib3JkZXJMZWZ0V2lkdGggLSBtYXJnaW5MZWZ0O1xuICAgIG9mZnNldHMucmlnaHQgLT0gYm9yZGVyTGVmdFdpZHRoIC0gbWFyZ2luTGVmdDtcblxuICAgIC8vIEF0dGFjaCBtYXJnaW5Ub3AgYW5kIG1hcmdpbkxlZnQgYmVjYXVzZSBpbiBzb21lIGNpcmN1bXN0YW5jZXMgd2UgbWF5IG5lZWQgdGhlbVxuICAgIG9mZnNldHMubWFyZ2luVG9wID0gbWFyZ2luVG9wO1xuICAgIG9mZnNldHMubWFyZ2luTGVmdCA9IG1hcmdpbkxlZnQ7XG4gIH1cblxuICBpZiAoaXNJRTEwICYmICFmaXhlZFBvc2l0aW9uID8gcGFyZW50LmNvbnRhaW5zKHNjcm9sbFBhcmVudCkgOiBwYXJlbnQgPT09IHNjcm9sbFBhcmVudCAmJiBzY3JvbGxQYXJlbnQubm9kZU5hbWUgIT09ICdCT0RZJykge1xuICAgIG9mZnNldHMgPSBpbmNsdWRlU2Nyb2xsKG9mZnNldHMsIHBhcmVudCk7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlKGVsZW1lbnQpIHtcbiAgdmFyIGV4Y2x1ZGVTY3JvbGwgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gIHZhciBodG1sID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgdmFyIHJlbGF0aXZlT2Zmc2V0ID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGVsZW1lbnQsIGh0bWwpO1xuICB2YXIgd2lkdGggPSBNYXRoLm1heChodG1sLmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgdmFyIGhlaWdodCA9IE1hdGgubWF4KGh0bWwuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XG5cbiAgdmFyIHNjcm9sbFRvcCA9ICFleGNsdWRlU2Nyb2xsID8gZ2V0U2Nyb2xsKGh0bWwpIDogMDtcbiAgdmFyIHNjcm9sbExlZnQgPSAhZXhjbHVkZVNjcm9sbCA/IGdldFNjcm9sbChodG1sLCAnbGVmdCcpIDogMDtcblxuICB2YXIgb2Zmc2V0ID0ge1xuICAgIHRvcDogc2Nyb2xsVG9wIC0gcmVsYXRpdmVPZmZzZXQudG9wICsgcmVsYXRpdmVPZmZzZXQubWFyZ2luVG9wLFxuICAgIGxlZnQ6IHNjcm9sbExlZnQgLSByZWxhdGl2ZU9mZnNldC5sZWZ0ICsgcmVsYXRpdmVPZmZzZXQubWFyZ2luTGVmdCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcblxuICByZXR1cm4gZ2V0Q2xpZW50UmVjdChvZmZzZXQpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiBlbGVtZW50IGlzIGZpeGVkIG9yIGlzIGluc2lkZSBhIGZpeGVkIHBhcmVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGN1c3RvbUNvbnRhaW5lclxuICogQHJldHVybnMge0Jvb2xlYW59IGFuc3dlciB0byBcImlzRml4ZWQ/XCJcbiAqL1xuZnVuY3Rpb24gaXNGaXhlZChlbGVtZW50KSB7XG4gIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50LCAncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBwYXJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgaWYgKCFwYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBpc0ZpeGVkKHBhcmVudE5vZGUpO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBmaXJzdCBwYXJlbnQgb2YgYW4gZWxlbWVudCB0aGF0IGhhcyBhIHRyYW5zZm9ybWVkIHByb3BlcnR5IGRlZmluZWRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IGZpcnN0IHRyYW5zZm9ybWVkIHBhcmVudCBvciBkb2N1bWVudEVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gVGhpcyBjaGVjayBpcyBuZWVkZWQgdG8gYXZvaWQgZXJyb3JzIGluIGNhc2Ugb25lIG9mIHRoZSBlbGVtZW50cyBpc24ndCBkZWZpbmVkIGZvciBhbnkgcmVhc29uXG4gIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5wYXJlbnRFbGVtZW50IHx8IGlzSUUoKSkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cbiAgdmFyIGVsID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICB3aGlsZSAoZWwgJiYgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsLCAndHJhbnNmb3JtJykgPT09ICdub25lJykge1xuICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgfVxuICByZXR1cm4gZWwgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xufVxuXG4vKipcbiAqIENvbXB1dGVkIHRoZSBib3VuZGFyaWVzIGxpbWl0cyBhbmQgcmV0dXJuIHRoZW1cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmZXJlbmNlXG4gKiBAcGFyYW0ge251bWJlcn0gcGFkZGluZ1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQgLSBFbGVtZW50IHVzZWQgdG8gZGVmaW5lIHRoZSBib3VuZGFyaWVzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZpeGVkUG9zaXRpb24gLSBJcyBpbiBmaXhlZCBwb3NpdGlvbiBtb2RlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDb29yZGluYXRlcyBvZiB0aGUgYm91bmRhcmllc1xuICovXG5mdW5jdGlvbiBnZXRCb3VuZGFyaWVzKHBvcHBlciwgcmVmZXJlbmNlLCBwYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCkge1xuICB2YXIgZml4ZWRQb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogZmFsc2U7XG5cbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcblxuICB2YXIgYm91bmRhcmllcyA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBmaXhlZFBvc2l0aW9uID8gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChwb3BwZXIpIDogZmluZENvbW1vbk9mZnNldFBhcmVudChwb3BwZXIsIGdldFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlKSk7XG5cbiAgLy8gSGFuZGxlIHZpZXdwb3J0IGNhc2VcbiAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAndmlld3BvcnQnKSB7XG4gICAgYm91bmRhcmllcyA9IGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShvZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xuICB9IGVsc2Uge1xuICAgIC8vIEhhbmRsZSBvdGhlciBjYXNlcyBiYXNlZCBvbiBET00gZWxlbWVudCB1c2VkIGFzIGJvdW5kYXJpZXNcbiAgICB2YXIgYm91bmRhcmllc05vZGUgPSB2b2lkIDA7XG4gICAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAnc2Nyb2xsUGFyZW50Jykge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShyZWZlcmVuY2UpKTtcbiAgICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgIGJvdW5kYXJpZXNOb2RlID0gcG9wcGVyLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd3aW5kb3cnKSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IHBvcHBlci5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBib3VuZGFyaWVzRWxlbWVudDtcbiAgICB9XG5cbiAgICB2YXIgb2Zmc2V0cyA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShib3VuZGFyaWVzTm9kZSwgb2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcblxuICAgIC8vIEluIGNhc2Ugb2YgSFRNTCwgd2UgbmVlZCBhIGRpZmZlcmVudCBjb21wdXRhdGlvblxuICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnICYmICFpc0ZpeGVkKG9mZnNldFBhcmVudCkpIHtcbiAgICAgIHZhciBfZ2V0V2luZG93U2l6ZXMgPSBnZXRXaW5kb3dTaXplcyhwb3BwZXIub3duZXJEb2N1bWVudCksXG4gICAgICAgICAgaGVpZ2h0ID0gX2dldFdpbmRvd1NpemVzLmhlaWdodCxcbiAgICAgICAgICB3aWR0aCA9IF9nZXRXaW5kb3dTaXplcy53aWR0aDtcblxuICAgICAgYm91bmRhcmllcy50b3AgKz0gb2Zmc2V0cy50b3AgLSBvZmZzZXRzLm1hcmdpblRvcDtcbiAgICAgIGJvdW5kYXJpZXMuYm90dG9tID0gaGVpZ2h0ICsgb2Zmc2V0cy50b3A7XG4gICAgICBib3VuZGFyaWVzLmxlZnQgKz0gb2Zmc2V0cy5sZWZ0IC0gb2Zmc2V0cy5tYXJnaW5MZWZ0O1xuICAgICAgYm91bmRhcmllcy5yaWdodCA9IHdpZHRoICsgb2Zmc2V0cy5sZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgYWxsIHRoZSBvdGhlciBET00gZWxlbWVudHMsIHRoaXMgb25lIGlzIGdvb2RcbiAgICAgIGJvdW5kYXJpZXMgPSBvZmZzZXRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBwYWRkaW5nc1xuICBwYWRkaW5nID0gcGFkZGluZyB8fCAwO1xuICB2YXIgaXNQYWRkaW5nTnVtYmVyID0gdHlwZW9mIHBhZGRpbmcgPT09ICdudW1iZXInO1xuICBib3VuZGFyaWVzLmxlZnQgKz0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcubGVmdCB8fCAwO1xuICBib3VuZGFyaWVzLnRvcCArPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy50b3AgfHwgMDtcbiAgYm91bmRhcmllcy5yaWdodCAtPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5yaWdodCB8fCAwO1xuICBib3VuZGFyaWVzLmJvdHRvbSAtPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5ib3R0b20gfHwgMDtcblxuICByZXR1cm4gYm91bmRhcmllcztcbn1cblxuZnVuY3Rpb24gZ2V0QXJlYShfcmVmKSB7XG4gIHZhciB3aWR0aCA9IF9yZWYud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodDtcblxuICByZXR1cm4gd2lkdGggKiBoZWlnaHQ7XG59XG5cbi8qKlxuICogVXRpbGl0eSB1c2VkIHRvIHRyYW5zZm9ybSB0aGUgYGF1dG9gIHBsYWNlbWVudCB0byB0aGUgcGxhY2VtZW50IHdpdGggbW9yZVxuICogYXZhaWxhYmxlIHNwYWNlLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQocGxhY2VtZW50LCByZWZSZWN0LCBwb3BwZXIsIHJlZmVyZW5jZSwgYm91bmRhcmllc0VsZW1lbnQpIHtcbiAgdmFyIHBhZGRpbmcgPSBhcmd1bWVudHMubGVuZ3RoID4gNSAmJiBhcmd1bWVudHNbNV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s1XSA6IDA7XG5cbiAgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdhdXRvJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIHBsYWNlbWVudDtcbiAgfVxuXG4gIHZhciBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhwb3BwZXIsIHJlZmVyZW5jZSwgcGFkZGluZywgYm91bmRhcmllc0VsZW1lbnQpO1xuXG4gIHZhciByZWN0cyA9IHtcbiAgICB0b3A6IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWZSZWN0LnRvcCAtIGJvdW5kYXJpZXMudG9wXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMucmlnaHQgLSByZWZSZWN0LnJpZ2h0LFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodFxuICAgIH0sXG4gICAgYm90dG9tOiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5ib3R0b20gLSByZWZSZWN0LmJvdHRvbVxuICAgIH0sXG4gICAgbGVmdDoge1xuICAgICAgd2lkdGg6IHJlZlJlY3QubGVmdCAtIGJvdW5kYXJpZXMubGVmdCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHRcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNvcnRlZEFyZWFzID0gT2JqZWN0LmtleXMocmVjdHMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGtleToga2V5XG4gICAgfSwgcmVjdHNba2V5XSwge1xuICAgICAgYXJlYTogZ2V0QXJlYShyZWN0c1trZXldKVxuICAgIH0pO1xuICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIuYXJlYSAtIGEuYXJlYTtcbiAgfSk7XG5cbiAgdmFyIGZpbHRlcmVkQXJlYXMgPSBzb3J0ZWRBcmVhcy5maWx0ZXIoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgdmFyIHdpZHRoID0gX3JlZjIud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9yZWYyLmhlaWdodDtcbiAgICByZXR1cm4gd2lkdGggPj0gcG9wcGVyLmNsaWVudFdpZHRoICYmIGhlaWdodCA+PSBwb3BwZXIuY2xpZW50SGVpZ2h0O1xuICB9KTtcblxuICB2YXIgY29tcHV0ZWRQbGFjZW1lbnQgPSBmaWx0ZXJlZEFyZWFzLmxlbmd0aCA+IDAgPyBmaWx0ZXJlZEFyZWFzWzBdLmtleSA6IHNvcnRlZEFyZWFzWzBdLmtleTtcblxuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG5cbiAgcmV0dXJuIGNvbXB1dGVkUGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/ICctJyArIHZhcmlhdGlvbiA6ICcnKTtcbn1cblxuLyoqXG4gKiBHZXQgb2Zmc2V0cyB0byB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtFbGVtZW50fSBwb3BwZXIgLSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gcmVmZXJlbmNlIC0gdGhlIHJlZmVyZW5jZSBlbGVtZW50ICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAqIEBwYXJhbSB7RWxlbWVudH0gZml4ZWRQb3NpdGlvbiAtIGlzIGluIGZpeGVkIHBvc2l0aW9uIG1vZGVcbiAqIEByZXR1cm5zIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBvZmZzZXRzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyXG4gKi9cbmZ1bmN0aW9uIGdldFJlZmVyZW5jZU9mZnNldHMoc3RhdGUsIHBvcHBlciwgcmVmZXJlbmNlKSB7XG4gIHZhciBmaXhlZFBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBudWxsO1xuXG4gIHZhciBjb21tb25PZmZzZXRQYXJlbnQgPSBmaXhlZFBvc2l0aW9uID8gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChwb3BwZXIpIDogZmluZENvbW1vbk9mZnNldFBhcmVudChwb3BwZXIsIGdldFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlKSk7XG4gIHJldHVybiBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUocmVmZXJlbmNlLCBjb21tb25PZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xufVxuXG4vKipcbiAqIEdldCB0aGUgb3V0ZXIgc2l6ZXMgb2YgdGhlIGdpdmVuIGVsZW1lbnQgKG9mZnNldCBzaXplICsgbWFyZ2lucylcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge09iamVjdH0gb2JqZWN0IGNvbnRhaW5pbmcgd2lkdGggYW5kIGhlaWdodCBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIGdldE91dGVyU2l6ZXMoZWxlbWVudCkge1xuICB2YXIgd2luZG93ID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICB2YXIgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIHZhciB4ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wIHx8IDApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luQm90dG9tIHx8IDApO1xuICB2YXIgeSA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkxlZnQgfHwgMCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5SaWdodCB8fCAwKTtcbiAgdmFyIHJlc3VsdCA9IHtcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCArIHksXG4gICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCArIHhcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudCBvZiB0aGUgZ2l2ZW4gb25lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50XG4gKiBAcmV0dXJucyB7U3RyaW5nfSBmbGlwcGVkIHBsYWNlbWVudFxuICovXG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgdmFyIGhhc2ggPSB7IGxlZnQ6ICdyaWdodCcsIHJpZ2h0OiAnbGVmdCcsIGJvdHRvbTogJ3RvcCcsIHRvcDogJ2JvdHRvbScgfTtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0IG9mZnNldHMgdG8gdGhlIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHBvc2l0aW9uIC0gQ1NTIHBvc2l0aW9uIHRoZSBQb3BwZXIgd2lsbCBnZXQgYXBwbGllZFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyIC0gdGhlIHBvcHBlciBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0cyAtIHRoZSByZWZlcmVuY2Ugb2Zmc2V0cyAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gKiBAcGFyYW0ge1N0cmluZ30gcGxhY2VtZW50IC0gb25lIG9mIHRoZSB2YWxpZCBwbGFjZW1lbnQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gcG9wcGVyT2Zmc2V0cyAtIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBvZmZzZXRzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyXG4gKi9cbmZ1bmN0aW9uIGdldFBvcHBlck9mZnNldHMocG9wcGVyLCByZWZlcmVuY2VPZmZzZXRzLCBwbGFjZW1lbnQpIHtcbiAgcGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG5cbiAgLy8gR2V0IHBvcHBlciBub2RlIHNpemVzXG4gIHZhciBwb3BwZXJSZWN0ID0gZ2V0T3V0ZXJTaXplcyhwb3BwZXIpO1xuXG4gIC8vIEFkZCBwb3NpdGlvbiwgd2lkdGggYW5kIGhlaWdodCB0byBvdXIgb2Zmc2V0cyBvYmplY3RcbiAgdmFyIHBvcHBlck9mZnNldHMgPSB7XG4gICAgd2lkdGg6IHBvcHBlclJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiBwb3BwZXJSZWN0LmhlaWdodFxuICB9O1xuXG4gIC8vIGRlcGVuZGluZyBieSB0aGUgcG9wcGVyIHBsYWNlbWVudCB3ZSBoYXZlIHRvIGNvbXB1dGUgaXRzIG9mZnNldHMgc2xpZ2h0bHkgZGlmZmVyZW50bHlcbiAgdmFyIGlzSG9yaXogPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICB2YXIgbWFpblNpZGUgPSBpc0hvcml6ID8gJ3RvcCcgOiAnbGVmdCc7XG4gIHZhciBzZWNvbmRhcnlTaWRlID0gaXNIb3JpeiA/ICdsZWZ0JyA6ICd0b3AnO1xuICB2YXIgbWVhc3VyZW1lbnQgPSBpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICB2YXIgc2Vjb25kYXJ5TWVhc3VyZW1lbnQgPSAhaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBwb3BwZXJPZmZzZXRzW21haW5TaWRlXSA9IHJlZmVyZW5jZU9mZnNldHNbbWFpblNpZGVdICsgcmVmZXJlbmNlT2Zmc2V0c1ttZWFzdXJlbWVudF0gLyAyIC0gcG9wcGVyUmVjdFttZWFzdXJlbWVudF0gLyAyO1xuICBpZiAocGxhY2VtZW50ID09PSBzZWNvbmRhcnlTaWRlKSB7XG4gICAgcG9wcGVyT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSA9IHJlZmVyZW5jZU9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gLSBwb3BwZXJSZWN0W3NlY29uZGFyeU1lYXN1cmVtZW50XTtcbiAgfSBlbHNlIHtcbiAgICBwb3BwZXJPZmZzZXRzW3NlY29uZGFyeVNpZGVdID0gcmVmZXJlbmNlT2Zmc2V0c1tnZXRPcHBvc2l0ZVBsYWNlbWVudChzZWNvbmRhcnlTaWRlKV07XG4gIH1cblxuICByZXR1cm4gcG9wcGVyT2Zmc2V0cztcbn1cblxuLyoqXG4gKiBNaW1pY3MgdGhlIGBmaW5kYCBtZXRob2Qgb2YgQXJyYXlcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QXJyYXl9IGFyclxuICogQGFyZ3VtZW50IHByb3BcbiAqIEBhcmd1bWVudCB2YWx1ZVxuICogQHJldHVybnMgaW5kZXggb3IgLTFcbiAqL1xuZnVuY3Rpb24gZmluZChhcnIsIGNoZWNrKSB7XG4gIC8vIHVzZSBuYXRpdmUgZmluZCBpZiBzdXBwb3J0ZWRcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5maW5kKSB7XG4gICAgcmV0dXJuIGFyci5maW5kKGNoZWNrKTtcbiAgfVxuXG4gIC8vIHVzZSBgZmlsdGVyYCB0byBvYnRhaW4gdGhlIHNhbWUgYmVoYXZpb3Igb2YgYGZpbmRgXG4gIHJldHVybiBhcnIuZmlsdGVyKGNoZWNrKVswXTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBtYXRjaGluZyBvYmplY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QXJyYXl9IGFyclxuICogQGFyZ3VtZW50IHByb3BcbiAqIEBhcmd1bWVudCB2YWx1ZVxuICogQHJldHVybnMgaW5kZXggb3IgLTFcbiAqL1xuZnVuY3Rpb24gZmluZEluZGV4KGFyciwgcHJvcCwgdmFsdWUpIHtcbiAgLy8gdXNlIG5hdGl2ZSBmaW5kSW5kZXggaWYgc3VwcG9ydGVkXG4gIGlmIChBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KSB7XG4gICAgcmV0dXJuIGFyci5maW5kSW5kZXgoZnVuY3Rpb24gKGN1cikge1xuICAgICAgcmV0dXJuIGN1cltwcm9wXSA9PT0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvLyB1c2UgYGZpbmRgICsgYGluZGV4T2ZgIGlmIGBmaW5kSW5kZXhgIGlzbid0IHN1cHBvcnRlZFxuICB2YXIgbWF0Y2ggPSBmaW5kKGFyciwgZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmpbcHJvcF0gPT09IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIGFyci5pbmRleE9mKG1hdGNoKTtcbn1cblxuLyoqXG4gKiBMb29wIHRyb3VnaCB0aGUgbGlzdCBvZiBtb2RpZmllcnMgYW5kIHJ1biB0aGVtIGluIG9yZGVyLFxuICogZWFjaCBvZiB0aGVtIHdpbGwgdGhlbiBlZGl0IHRoZSBkYXRhIG9iamVjdC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gZW5kcyAtIE9wdGlvbmFsIG1vZGlmaWVyIG5hbWUgdXNlZCBhcyBzdG9wcGVyXG4gKiBAcmV0dXJucyB7ZGF0YU9iamVjdH1cbiAqL1xuZnVuY3Rpb24gcnVuTW9kaWZpZXJzKG1vZGlmaWVycywgZGF0YSwgZW5kcykge1xuICB2YXIgbW9kaWZpZXJzVG9SdW4gPSBlbmRzID09PSB1bmRlZmluZWQgPyBtb2RpZmllcnMgOiBtb2RpZmllcnMuc2xpY2UoMCwgZmluZEluZGV4KG1vZGlmaWVycywgJ25hbWUnLCBlbmRzKSk7XG5cbiAgbW9kaWZpZXJzVG9SdW4uZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBpZiAobW9kaWZpZXJbJ2Z1bmN0aW9uJ10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICBjb25zb2xlLndhcm4oJ2Btb2RpZmllci5mdW5jdGlvbmAgaXMgZGVwcmVjYXRlZCwgdXNlIGBtb2RpZmllci5mbmAhJyk7XG4gICAgfVxuICAgIHZhciBmbiA9IG1vZGlmaWVyWydmdW5jdGlvbiddIHx8IG1vZGlmaWVyLmZuOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgIGlmIChtb2RpZmllci5lbmFibGVkICYmIGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAvLyBBZGQgcHJvcGVydGllcyB0byBvZmZzZXRzIHRvIG1ha2UgdGhlbSBhIGNvbXBsZXRlIGNsaWVudFJlY3Qgb2JqZWN0XG4gICAgICAvLyB3ZSBkbyB0aGlzIGJlZm9yZSBlYWNoIG1vZGlmaWVyIHRvIG1ha2Ugc3VyZSB0aGUgcHJldmlvdXMgb25lIGRvZXNuJ3RcbiAgICAgIC8vIG1lc3Mgd2l0aCB0aGVzZSB2YWx1ZXNcbiAgICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5wb3BwZXIpO1xuICAgICAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSk7XG5cbiAgICAgIGRhdGEgPSBmbihkYXRhLCBtb2RpZmllcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9wcGVyLCBjb21wdXRpbmcgdGhlIG5ldyBvZmZzZXRzIGFuZCBhcHBseWluZ1xuICogdGhlIG5ldyBzdHlsZS48YnIgLz5cbiAqIFByZWZlciBgc2NoZWR1bGVVcGRhdGVgIG92ZXIgYHVwZGF0ZWAgYmVjYXVzZSBvZiBwZXJmb3JtYW5jZSByZWFzb25zLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIC8vIGlmIHBvcHBlciBpcyBkZXN0cm95ZWQsIGRvbid0IHBlcmZvcm0gYW55IGZ1cnRoZXIgdXBkYXRlXG4gIGlmICh0aGlzLnN0YXRlLmlzRGVzdHJveWVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGRhdGEgPSB7XG4gICAgaW5zdGFuY2U6IHRoaXMsXG4gICAgc3R5bGVzOiB7fSxcbiAgICBhcnJvd1N0eWxlczoge30sXG4gICAgYXR0cmlidXRlczoge30sXG4gICAgZmxpcHBlZDogZmFsc2UsXG4gICAgb2Zmc2V0czoge31cbiAgfTtcblxuICAvLyBjb21wdXRlIHJlZmVyZW5jZSBlbGVtZW50IG9mZnNldHNcbiAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZU9mZnNldHModGhpcy5zdGF0ZSwgdGhpcy5wb3BwZXIsIHRoaXMucmVmZXJlbmNlLCB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZCk7XG5cbiAgLy8gY29tcHV0ZSBhdXRvIHBsYWNlbWVudCwgc3RvcmUgcGxhY2VtZW50IGluc2lkZSB0aGUgZGF0YSBvYmplY3QsXG4gIC8vIG1vZGlmaWVycyB3aWxsIGJlIGFibGUgdG8gZWRpdCBgcGxhY2VtZW50YCBpZiBuZWVkZWRcbiAgLy8gYW5kIHJlZmVyIHRvIG9yaWdpbmFsUGxhY2VtZW50IHRvIGtub3cgdGhlIG9yaWdpbmFsIHZhbHVlXG4gIGRhdGEucGxhY2VtZW50ID0gY29tcHV0ZUF1dG9QbGFjZW1lbnQodGhpcy5vcHRpb25zLnBsYWNlbWVudCwgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSwgdGhpcy5wb3BwZXIsIHRoaXMucmVmZXJlbmNlLCB0aGlzLm9wdGlvbnMubW9kaWZpZXJzLmZsaXAuYm91bmRhcmllc0VsZW1lbnQsIHRoaXMub3B0aW9ucy5tb2RpZmllcnMuZmxpcC5wYWRkaW5nKTtcblxuICAvLyBzdG9yZSB0aGUgY29tcHV0ZWQgcGxhY2VtZW50IGluc2lkZSBgb3JpZ2luYWxQbGFjZW1lbnRgXG4gIGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcblxuICBkYXRhLnBvc2l0aW9uRml4ZWQgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZDtcblxuICAvLyBjb21wdXRlIHRoZSBwb3BwZXIgb2Zmc2V0c1xuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0UG9wcGVyT2Zmc2V0cyh0aGlzLnBvcHBlciwgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSwgZGF0YS5wbGFjZW1lbnQpO1xuXG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIucG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZCA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnO1xuXG4gIC8vIHJ1biB0aGUgbW9kaWZpZXJzXG4gIGRhdGEgPSBydW5Nb2RpZmllcnModGhpcy5tb2RpZmllcnMsIGRhdGEpO1xuXG4gIC8vIHRoZSBmaXJzdCBgdXBkYXRlYCB3aWxsIGNhbGwgYG9uQ3JlYXRlYCBjYWxsYmFja1xuICAvLyB0aGUgb3RoZXIgb25lcyB3aWxsIGNhbGwgYG9uVXBkYXRlYCBjYWxsYmFja1xuICBpZiAoIXRoaXMuc3RhdGUuaXNDcmVhdGVkKSB7XG4gICAgdGhpcy5zdGF0ZS5pc0NyZWF0ZWQgPSB0cnVlO1xuICAgIHRoaXMub3B0aW9ucy5vbkNyZWF0ZShkYXRhKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm9wdGlvbnMub25VcGRhdGUoZGF0YSk7XG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgdXNlZCB0byBrbm93IGlmIHRoZSBnaXZlbiBtb2RpZmllciBpcyBlbmFibGVkLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzTW9kaWZpZXJFbmFibGVkKG1vZGlmaWVycywgbW9kaWZpZXJOYW1lKSB7XG4gIHJldHVybiBtb2RpZmllcnMuc29tZShmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgICBlbmFibGVkID0gX3JlZi5lbmFibGVkO1xuICAgIHJldHVybiBlbmFibGVkICYmIG5hbWUgPT09IG1vZGlmaWVyTmFtZTtcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBwcmVmaXhlZCBzdXBwb3J0ZWQgcHJvcGVydHkgbmFtZVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHByb3BlcnR5IChjYW1lbENhc2UpXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBwcmVmaXhlZCBwcm9wZXJ0eSAoY2FtZWxDYXNlIG9yIFBhc2NhbENhc2UsIGRlcGVuZGluZyBvbiB0aGUgdmVuZG9yIHByZWZpeClcbiAqL1xuZnVuY3Rpb24gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKHByb3BlcnR5KSB7XG4gIHZhciBwcmVmaXhlcyA9IFtmYWxzZSwgJ21zJywgJ1dlYmtpdCcsICdNb3onLCAnTyddO1xuICB2YXIgdXBwZXJQcm9wID0gcHJvcGVydHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eS5zbGljZSgxKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgIHZhciB0b0NoZWNrID0gcHJlZml4ID8gJycgKyBwcmVmaXggKyB1cHBlclByb3AgOiBwcm9wZXJ0eTtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50LmJvZHkuc3R5bGVbdG9DaGVja10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdG9DaGVjaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogRGVzdHJveXMgdGhlIHBvcHBlci5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgdGhpcy5zdGF0ZS5pc0Rlc3Ryb3llZCA9IHRydWU7XG5cbiAgLy8gdG91Y2ggRE9NIG9ubHkgaWYgYGFwcGx5U3R5bGVgIG1vZGlmaWVyIGlzIGVuYWJsZWRcbiAgaWYgKGlzTW9kaWZpZXJFbmFibGVkKHRoaXMubW9kaWZpZXJzLCAnYXBwbHlTdHlsZScpKSB7XG4gICAgdGhpcy5wb3BwZXIucmVtb3ZlQXR0cmlidXRlKCd4LXBsYWNlbWVudCcpO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUudG9wID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUubGVmdCA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnJpZ2h0ID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUuYm90dG9tID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUud2lsbENoYW5nZSA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlW2dldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyldID0gJyc7XG4gIH1cblxuICB0aGlzLmRpc2FibGVFdmVudExpc3RlbmVycygpO1xuXG4gIC8vIHJlbW92ZSB0aGUgcG9wcGVyIGlmIHVzZXIgZXhwbGljaXRseSBhc2tlZCBmb3IgdGhlIGRlbGV0aW9uIG9uIGRlc3Ryb3lcbiAgLy8gZG8gbm90IHVzZSBgcmVtb3ZlYCBiZWNhdXNlIElFMTEgZG9lc24ndCBzdXBwb3J0IGl0XG4gIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZlT25EZXN0cm95KSB7XG4gICAgdGhpcy5wb3BwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBvcHBlcik7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogR2V0IHRoZSB3aW5kb3cgYXNzb2NpYXRlZCB3aXRoIHRoZSBlbGVtZW50XG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtXaW5kb3d9XG4gKi9cbmZ1bmN0aW9uIGdldFdpbmRvdyhlbGVtZW50KSB7XG4gIHZhciBvd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgOiB3aW5kb3c7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhzY3JvbGxQYXJlbnQsIGV2ZW50LCBjYWxsYmFjaywgc2Nyb2xsUGFyZW50cykge1xuICB2YXIgaXNCb2R5ID0gc2Nyb2xsUGFyZW50Lm5vZGVOYW1lID09PSAnQk9EWSc7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBzY3JvbGxQYXJlbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyA6IHNjcm9sbFBhcmVudDtcbiAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgaWYgKCFpc0JvZHkpIHtcbiAgICBhdHRhY2hUb1Njcm9sbFBhcmVudHMoZ2V0U2Nyb2xsUGFyZW50KHRhcmdldC5wYXJlbnROb2RlKSwgZXZlbnQsIGNhbGxiYWNrLCBzY3JvbGxQYXJlbnRzKTtcbiAgfVxuICBzY3JvbGxQYXJlbnRzLnB1c2godGFyZ2V0KTtcbn1cblxuLyoqXG4gKiBTZXR1cCBuZWVkZWQgZXZlbnQgbGlzdGVuZXJzIHVzZWQgdG8gdXBkYXRlIHRoZSBwb3BwZXIgcG9zaXRpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMocmVmZXJlbmNlLCBvcHRpb25zLCBzdGF0ZSwgdXBkYXRlQm91bmQpIHtcbiAgLy8gUmVzaXplIGV2ZW50IGxpc3RlbmVyIG9uIHdpbmRvd1xuICBzdGF0ZS51cGRhdGVCb3VuZCA9IHVwZGF0ZUJvdW5kO1xuICBnZXRXaW5kb3cocmVmZXJlbmNlKS5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzdGF0ZS51cGRhdGVCb3VuZCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gIC8vIFNjcm9sbCBldmVudCBsaXN0ZW5lciBvbiBzY3JvbGwgcGFyZW50c1xuICB2YXIgc2Nyb2xsRWxlbWVudCA9IGdldFNjcm9sbFBhcmVudChyZWZlcmVuY2UpO1xuICBhdHRhY2hUb1Njcm9sbFBhcmVudHMoc2Nyb2xsRWxlbWVudCwgJ3Njcm9sbCcsIHN0YXRlLnVwZGF0ZUJvdW5kLCBzdGF0ZS5zY3JvbGxQYXJlbnRzKTtcbiAgc3RhdGUuc2Nyb2xsRWxlbWVudCA9IHNjcm9sbEVsZW1lbnQ7XG4gIHN0YXRlLmV2ZW50c0VuYWJsZWQgPSB0cnVlO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBJdCB3aWxsIGFkZCByZXNpemUvc2Nyb2xsIGV2ZW50cyBhbmQgc3RhcnQgcmVjYWxjdWxhdGluZ1xuICogcG9zaXRpb24gb2YgdGhlIHBvcHBlciBlbGVtZW50IHdoZW4gdGhleSBhcmUgdHJpZ2dlcmVkLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5mdW5jdGlvbiBlbmFibGVFdmVudExpc3RlbmVycygpIHtcbiAgaWYgKCF0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQpIHtcbiAgICB0aGlzLnN0YXRlID0gc2V0dXBFdmVudExpc3RlbmVycyh0aGlzLnJlZmVyZW5jZSwgdGhpcy5vcHRpb25zLCB0aGlzLnN0YXRlLCB0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgdXNlZCB0byB1cGRhdGUgdGhlIHBvcHBlciBwb3NpdGlvblxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMocmVmZXJlbmNlLCBzdGF0ZSkge1xuICAvLyBSZW1vdmUgcmVzaXplIGV2ZW50IGxpc3RlbmVyIG9uIHdpbmRvd1xuICBnZXRXaW5kb3cocmVmZXJlbmNlKS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzdGF0ZS51cGRhdGVCb3VuZCk7XG5cbiAgLy8gUmVtb3ZlIHNjcm9sbCBldmVudCBsaXN0ZW5lciBvbiBzY3JvbGwgcGFyZW50c1xuICBzdGF0ZS5zY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzdGF0ZS51cGRhdGVCb3VuZCk7XG4gIH0pO1xuXG4gIC8vIFJlc2V0IHN0YXRlXG4gIHN0YXRlLnVwZGF0ZUJvdW5kID0gbnVsbDtcbiAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IFtdO1xuICBzdGF0ZS5zY3JvbGxFbGVtZW50ID0gbnVsbDtcbiAgc3RhdGUuZXZlbnRzRW5hYmxlZCA9IGZhbHNlO1xuICByZXR1cm4gc3RhdGU7XG59XG5cbi8qKlxuICogSXQgd2lsbCByZW1vdmUgcmVzaXplL3Njcm9sbCBldmVudHMgYW5kIHdvbid0IHJlY2FsY3VsYXRlIHBvcHBlciBwb3NpdGlvblxuICogd2hlbiB0aGV5IGFyZSB0cmlnZ2VyZWQuIEl0IGFsc28gd29uJ3QgdHJpZ2dlciBgb25VcGRhdGVgIGNhbGxiYWNrIGFueW1vcmUsXG4gKiB1bmxlc3MgeW91IGNhbGwgYHVwZGF0ZWAgbWV0aG9kIG1hbnVhbGx5LlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5mdW5jdGlvbiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGlmICh0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgICB0aGlzLnN0YXRlID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcnModGhpcy5yZWZlcmVuY2UsIHRoaXMuc3RhdGUpO1xuICB9XG59XG5cbi8qKlxuICogVGVsbHMgaWYgYSBnaXZlbiBpbnB1dCBpcyBhIG51bWJlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHsqfSBpbnB1dCB0byBjaGVja1xuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNOdW1lcmljKG4pIHtcbiAgcmV0dXJuIG4gIT09ICcnICYmICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHN0eWxlIHRvIHRoZSBnaXZlbiBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgdG8gYXBwbHkgdGhlIHN0eWxlIHRvXG4gKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gKiBPYmplY3Qgd2l0aCBhIGxpc3Qgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKSB7XG4gIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIHZhciB1bml0ID0gJyc7XG4gICAgLy8gYWRkIHVuaXQgaWYgdGhlIHZhbHVlIGlzIG51bWVyaWMgYW5kIGlzIG9uZSBvZiB0aGUgZm9sbG93aW5nXG4gICAgaWYgKFsnd2lkdGgnLCAnaGVpZ2h0JywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLmluZGV4T2YocHJvcCkgIT09IC0xICYmIGlzTnVtZXJpYyhzdHlsZXNbcHJvcF0pKSB7XG4gICAgICB1bml0ID0gJ3B4JztcbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZVtwcm9wXSA9IHN0eWxlc1twcm9wXSArIHVuaXQ7XG4gIH0pO1xufVxuXG4vKipcbiAqIFNldCB0aGUgYXR0cmlidXRlcyB0byB0aGUgZ2l2ZW4gcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHRvIGFwcGx5IHRoZSBhdHRyaWJ1dGVzIHRvXG4gKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gKiBPYmplY3Qgd2l0aCBhIGxpc3Qgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbcHJvcF07XG4gICAgaWYgKHZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcCwgYXR0cmlidXRlc1twcm9wXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YS5zdHlsZXMgLSBMaXN0IG9mIHN0eWxlIHByb3BlcnRpZXMgLSB2YWx1ZXMgdG8gYXBwbHkgdG8gcG9wcGVyIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhLmF0dHJpYnV0ZXMgLSBMaXN0IG9mIGF0dHJpYnV0ZSBwcm9wZXJ0aWVzIC0gdmFsdWVzIHRvIGFwcGx5IHRvIHBvcHBlciBlbGVtZW50XG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgc2FtZSBkYXRhIG9iamVjdFxuICovXG5mdW5jdGlvbiBhcHBseVN0eWxlKGRhdGEpIHtcbiAgLy8gYW55IHByb3BlcnR5IHByZXNlbnQgaW4gYGRhdGEuc3R5bGVzYCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlcixcbiAgLy8gaW4gdGhpcyB3YXkgd2UgY2FuIG1ha2UgdGhlIDNyZCBwYXJ0eSBtb2RpZmllcnMgYWRkIGN1c3RvbSBzdHlsZXMgdG8gaXRcbiAgLy8gQmUgYXdhcmUsIG1vZGlmaWVycyBjb3VsZCBvdmVycmlkZSB0aGUgcHJvcGVydGllcyBkZWZpbmVkIGluIHRoZSBwcmV2aW91c1xuICAvLyBsaW5lcyBvZiB0aGlzIG1vZGlmaWVyIVxuICBzZXRTdHlsZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuc3R5bGVzKTtcblxuICAvLyBhbnkgcHJvcGVydHkgcHJlc2VudCBpbiBgZGF0YS5hdHRyaWJ1dGVzYCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlcixcbiAgLy8gdGhleSB3aWxsIGJlIHNldCBhcyBIVE1MIGF0dHJpYnV0ZXMgb2YgdGhlIGVsZW1lbnRcbiAgc2V0QXR0cmlidXRlcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5hdHRyaWJ1dGVzKTtcblxuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgZGVmaW5lZCBhbmQgYXJyb3dTdHlsZXMgaGFzIHNvbWUgcHJvcGVydGllc1xuICBpZiAoZGF0YS5hcnJvd0VsZW1lbnQgJiYgT2JqZWN0LmtleXMoZGF0YS5hcnJvd1N0eWxlcykubGVuZ3RoKSB7XG4gICAgc2V0U3R5bGVzKGRhdGEuYXJyb3dFbGVtZW50LCBkYXRhLmFycm93U3R5bGVzKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFNldCB0aGUgeC1wbGFjZW1lbnQgYXR0cmlidXRlIGJlZm9yZSBldmVyeXRoaW5nIGVsc2UgYmVjYXVzZSBpdCBjb3VsZCBiZSB1c2VkXG4gKiB0byBhZGQgbWFyZ2lucyB0byB0aGUgcG9wcGVyIG1hcmdpbnMgbmVlZHMgdG8gYmUgY2FsY3VsYXRlZCB0byBnZXQgdGhlXG4gKiBjb3JyZWN0IHBvcHBlciBvZmZzZXRzLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5tb2RpZmllcnNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZSAtIFRoZSByZWZlcmVuY2UgZWxlbWVudCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIFRoZSBIVE1MIGVsZW1lbnQgdXNlZCBhcyBwb3BwZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUG9wcGVyLmpzIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gYXBwbHlTdHlsZU9uTG9hZChyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucywgbW9kaWZpZXJPcHRpb25zLCBzdGF0ZSkge1xuICAvLyBjb21wdXRlIHJlZmVyZW5jZSBlbGVtZW50IG9mZnNldHNcbiAgdmFyIHJlZmVyZW5jZU9mZnNldHMgPSBnZXRSZWZlcmVuY2VPZmZzZXRzKHN0YXRlLCBwb3BwZXIsIHJlZmVyZW5jZSwgb3B0aW9ucy5wb3NpdGlvbkZpeGVkKTtcblxuICAvLyBjb21wdXRlIGF1dG8gcGxhY2VtZW50LCBzdG9yZSBwbGFjZW1lbnQgaW5zaWRlIHRoZSBkYXRhIG9iamVjdCxcbiAgLy8gbW9kaWZpZXJzIHdpbGwgYmUgYWJsZSB0byBlZGl0IGBwbGFjZW1lbnRgIGlmIG5lZWRlZFxuICAvLyBhbmQgcmVmZXIgdG8gb3JpZ2luYWxQbGFjZW1lbnQgdG8ga25vdyB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgdmFyIHBsYWNlbWVudCA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KG9wdGlvbnMucGxhY2VtZW50LCByZWZlcmVuY2VPZmZzZXRzLCBwb3BwZXIsIHJlZmVyZW5jZSwgb3B0aW9ucy5tb2RpZmllcnMuZmxpcC5ib3VuZGFyaWVzRWxlbWVudCwgb3B0aW9ucy5tb2RpZmllcnMuZmxpcC5wYWRkaW5nKTtcblxuICBwb3BwZXIuc2V0QXR0cmlidXRlKCd4LXBsYWNlbWVudCcsIHBsYWNlbWVudCk7XG5cbiAgLy8gQXBwbHkgYHBvc2l0aW9uYCB0byBwb3BwZXIgYmVmb3JlIGFueXRoaW5nIGVsc2UgYmVjYXVzZVxuICAvLyB3aXRob3V0IHRoZSBwb3NpdGlvbiBhcHBsaWVkIHdlIGNhbid0IGd1YXJhbnRlZSBjb3JyZWN0IGNvbXB1dGF0aW9uc1xuICBzZXRTdHlsZXMocG9wcGVyLCB7IHBvc2l0aW9uOiBvcHRpb25zLnBvc2l0aW9uRml4ZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJyB9KTtcblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7Qm9vbGVhbn0gc2hvdWxkUm91bmQgLSBJZiB0aGUgb2Zmc2V0cyBzaG91bGQgYmUgcm91bmRlZCBhdCBhbGxcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBwb3BwZXIncyBwb3NpdGlvbiBvZmZzZXRzIHJvdW5kZWRcbiAqXG4gKiBUaGUgdGFsZSBvZiBwaXhlbC1wZXJmZWN0IHBvc2l0aW9uaW5nLiBJdCdzIHN0aWxsIG5vdCAxMDAlIHBlcmZlY3QsIGJ1dCBhc1xuICogZ29vZCBhcyBpdCBjYW4gYmUgd2l0aGluIHJlYXNvbi5cbiAqIERpc2N1c3Npb24gaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL0ZlelZyYXN0YS9wb3BwZXIuanMvcHVsbC83MTVcbiAqXG4gKiBMb3cgRFBJIHNjcmVlbnMgY2F1c2UgYSBwb3BwZXIgdG8gYmUgYmx1cnJ5IGlmIG5vdCB1c2luZyBmdWxsIHBpeGVscyAoU2FmYXJpXG4gKiBhcyB3ZWxsIG9uIEhpZ2ggRFBJIHNjcmVlbnMpLlxuICpcbiAqIEZpcmVmb3ggcHJlZmVycyBubyByb3VuZGluZyBmb3IgcG9zaXRpb25pbmcgYW5kIGRvZXMgbm90IGhhdmUgYmx1cnJpbmVzcyBvblxuICogaGlnaCBEUEkgc2NyZWVucy5cbiAqXG4gKiBPbmx5IGhvcml6b250YWwgcGxhY2VtZW50IGFuZCBsZWZ0L3JpZ2h0IHZhbHVlcyBuZWVkIHRvIGJlIGNvbnNpZGVyZWQuXG4gKi9cbmZ1bmN0aW9uIGdldFJvdW5kZWRPZmZzZXRzKGRhdGEsIHNob3VsZFJvdW5kKSB7XG4gIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcbiAgdmFyIHJvdW5kID0gTWF0aC5yb3VuZCxcbiAgICAgIGZsb29yID0gTWF0aC5mbG9vcjtcblxuICB2YXIgbm9Sb3VuZCA9IGZ1bmN0aW9uIG5vUm91bmQodikge1xuICAgIHJldHVybiB2O1xuICB9O1xuXG4gIHZhciByZWZlcmVuY2VXaWR0aCA9IHJvdW5kKHJlZmVyZW5jZS53aWR0aCk7XG4gIHZhciBwb3BwZXJXaWR0aCA9IHJvdW5kKHBvcHBlci53aWR0aCk7XG5cbiAgdmFyIGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGRhdGEucGxhY2VtZW50KSAhPT0gLTE7XG4gIHZhciBpc1ZhcmlhdGlvbiA9IGRhdGEucGxhY2VtZW50LmluZGV4T2YoJy0nKSAhPT0gLTE7XG4gIHZhciBzYW1lV2lkdGhQYXJpdHkgPSByZWZlcmVuY2VXaWR0aCAlIDIgPT09IHBvcHBlcldpZHRoICUgMjtcbiAgdmFyIGJvdGhPZGRXaWR0aCA9IHJlZmVyZW5jZVdpZHRoICUgMiA9PT0gMSAmJiBwb3BwZXJXaWR0aCAlIDIgPT09IDE7XG5cbiAgdmFyIGhvcml6b250YWxUb0ludGVnZXIgPSAhc2hvdWxkUm91bmQgPyBub1JvdW5kIDogaXNWZXJ0aWNhbCB8fCBpc1ZhcmlhdGlvbiB8fCBzYW1lV2lkdGhQYXJpdHkgPyByb3VuZCA6IGZsb29yO1xuICB2YXIgdmVydGljYWxUb0ludGVnZXIgPSAhc2hvdWxkUm91bmQgPyBub1JvdW5kIDogcm91bmQ7XG5cbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiBob3Jpem9udGFsVG9JbnRlZ2VyKGJvdGhPZGRXaWR0aCAmJiAhaXNWYXJpYXRpb24gJiYgc2hvdWxkUm91bmQgPyBwb3BwZXIubGVmdCAtIDEgOiBwb3BwZXIubGVmdCksXG4gICAgdG9wOiB2ZXJ0aWNhbFRvSW50ZWdlcihwb3BwZXIudG9wKSxcbiAgICBib3R0b206IHZlcnRpY2FsVG9JbnRlZ2VyKHBvcHBlci5ib3R0b20pLFxuICAgIHJpZ2h0OiBob3Jpem9udGFsVG9JbnRlZ2VyKHBvcHBlci5yaWdodClcbiAgfTtcbn1cblxudmFyIGlzRmlyZWZveCA9IGlzQnJvd3NlciAmJiAvRmlyZWZveC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZShkYXRhLCBvcHRpb25zKSB7XG4gIHZhciB4ID0gb3B0aW9ucy54LFxuICAgICAgeSA9IG9wdGlvbnMueTtcbiAgdmFyIHBvcHBlciA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG5cbiAgLy8gUmVtb3ZlIHRoaXMgbGVnYWN5IHN1cHBvcnQgaW4gUG9wcGVyLmpzIHYyXG5cbiAgdmFyIGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiA9IGZpbmQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsIGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIHJldHVybiBtb2RpZmllci5uYW1lID09PSAnYXBwbHlTdHlsZSc7XG4gIH0pLmdwdUFjY2VsZXJhdGlvbjtcbiAgaWYgKGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBgZ3B1QWNjZWxlcmF0aW9uYCBvcHRpb24gbW92ZWQgdG8gYGNvbXB1dGVTdHlsZWAgbW9kaWZpZXIgYW5kIHdpbGwgbm90IGJlIHN1cHBvcnRlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgUG9wcGVyLmpzIScpO1xuICB9XG4gIHZhciBncHVBY2NlbGVyYXRpb24gPSBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gIT09IHVuZGVmaW5lZCA/IGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiA6IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uO1xuXG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuICB2YXIgb2Zmc2V0UGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuXG4gIC8vIFN0eWxlc1xuICB2YXIgc3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiBwb3BwZXIucG9zaXRpb25cbiAgfTtcblxuICB2YXIgb2Zmc2V0cyA9IGdldFJvdW5kZWRPZmZzZXRzKGRhdGEsIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDwgMiB8fCAhaXNGaXJlZm94KTtcblxuICB2YXIgc2lkZUEgPSB4ID09PSAnYm90dG9tJyA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gIHZhciBzaWRlQiA9IHkgPT09ICdyaWdodCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuXG4gIC8vIGlmIGdwdUFjY2VsZXJhdGlvbiBpcyBzZXQgdG8gYHRydWVgIGFuZCB0cmFuc2Zvcm0gaXMgc3VwcG9ydGVkLFxuICAvLyAgd2UgdXNlIGB0cmFuc2xhdGUzZGAgdG8gYXBwbHkgdGhlIHBvc2l0aW9uIHRvIHRoZSBwb3BwZXIgd2VcbiAgLy8gYXV0b21hdGljYWxseSB1c2UgdGhlIHN1cHBvcnRlZCBwcmVmaXhlZCB2ZXJzaW9uIGlmIG5lZWRlZFxuICB2YXIgcHJlZml4ZWRQcm9wZXJ0eSA9IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyk7XG5cbiAgLy8gbm93LCBsZXQncyBtYWtlIGEgc3RlcCBiYWNrIGFuZCBsb29rIGF0IHRoaXMgY29kZSBjbG9zZWx5ICh3dGY/KVxuICAvLyBJZiB0aGUgY29udGVudCBvZiB0aGUgcG9wcGVyIGdyb3dzIG9uY2UgaXQncyBiZWVuIHBvc2l0aW9uZWQsIGl0XG4gIC8vIG1heSBoYXBwZW4gdGhhdCB0aGUgcG9wcGVyIGdldHMgbWlzcGxhY2VkIGJlY2F1c2Ugb2YgdGhlIG5ldyBjb250ZW50XG4gIC8vIG92ZXJmbG93aW5nIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUbyBhdm9pZCB0aGlzIHByb2JsZW0sIHdlIHByb3ZpZGUgdHdvIG9wdGlvbnMgKHggYW5kIHkpLCB3aGljaCBhbGxvd1xuICAvLyB0aGUgY29uc3VtZXIgdG8gZGVmaW5lIHRoZSBvZmZzZXQgb3JpZ2luLlxuICAvLyBJZiB3ZSBwb3NpdGlvbiBhIHBvcHBlciBvbiB0b3Agb2YgYSByZWZlcmVuY2UgZWxlbWVudCwgd2UgY2FuIHNldFxuICAvLyBgeGAgdG8gYHRvcGAgdG8gbWFrZSB0aGUgcG9wcGVyIGdyb3cgdG93YXJkcyBpdHMgdG9wIGluc3RlYWQgb2ZcbiAgLy8gaXRzIGJvdHRvbS5cbiAgdmFyIGxlZnQgPSB2b2lkIDAsXG4gICAgICB0b3AgPSB2b2lkIDA7XG4gIGlmIChzaWRlQSA9PT0gJ2JvdHRvbScpIHtcbiAgICAvLyB3aGVuIG9mZnNldFBhcmVudCBpcyA8aHRtbD4gdGhlIHBvc2l0aW9uaW5nIGlzIHJlbGF0aXZlIHRvIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiAoZXhjbHVkaW5nIHRoZSBzY3JvbGxiYXIpXG4gICAgLy8gYW5kIG5vdCB0aGUgYm90dG9tIG9mIHRoZSBodG1sIGVsZW1lbnRcbiAgICBpZiAob2Zmc2V0UGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgIHRvcCA9IC1vZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0ICsgb2Zmc2V0cy5ib3R0b207XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvcCA9IC1vZmZzZXRQYXJlbnRSZWN0LmhlaWdodCArIG9mZnNldHMuYm90dG9tO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0b3AgPSBvZmZzZXRzLnRvcDtcbiAgfVxuICBpZiAoc2lkZUIgPT09ICdyaWdodCcpIHtcbiAgICBpZiAob2Zmc2V0UGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgIGxlZnQgPSAtb2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoICsgb2Zmc2V0cy5yaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdCA9IC1vZmZzZXRQYXJlbnRSZWN0LndpZHRoICsgb2Zmc2V0cy5yaWdodDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGVmdCA9IG9mZnNldHMubGVmdDtcbiAgfVxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uICYmIHByZWZpeGVkUHJvcGVydHkpIHtcbiAgICBzdHlsZXNbcHJlZml4ZWRQcm9wZXJ0eV0gPSAndHJhbnNsYXRlM2QoJyArIGxlZnQgKyAncHgsICcgKyB0b3AgKyAncHgsIDApJztcbiAgICBzdHlsZXNbc2lkZUFdID0gMDtcbiAgICBzdHlsZXNbc2lkZUJdID0gMDtcbiAgICBzdHlsZXMud2lsbENoYW5nZSA9ICd0cmFuc2Zvcm0nO1xuICB9IGVsc2Uge1xuICAgIC8vIG90aHdlcmlzZSwgd2UgdXNlIHRoZSBzdGFuZGFyZCBgdG9wYCwgYGxlZnRgLCBgYm90dG9tYCBhbmQgYHJpZ2h0YCBwcm9wZXJ0aWVzXG4gICAgdmFyIGludmVydFRvcCA9IHNpZGVBID09PSAnYm90dG9tJyA/IC0xIDogMTtcbiAgICB2YXIgaW52ZXJ0TGVmdCA9IHNpZGVCID09PSAncmlnaHQnID8gLTEgOiAxO1xuICAgIHN0eWxlc1tzaWRlQV0gPSB0b3AgKiBpbnZlcnRUb3A7XG4gICAgc3R5bGVzW3NpZGVCXSA9IGxlZnQgKiBpbnZlcnRMZWZ0O1xuICAgIHN0eWxlcy53aWxsQ2hhbmdlID0gc2lkZUEgKyAnLCAnICsgc2lkZUI7XG4gIH1cblxuICAvLyBBdHRyaWJ1dGVzXG4gIHZhciBhdHRyaWJ1dGVzID0ge1xuICAgICd4LXBsYWNlbWVudCc6IGRhdGEucGxhY2VtZW50XG4gIH07XG5cbiAgLy8gVXBkYXRlIGBkYXRhYCBhdHRyaWJ1dGVzLCBzdHlsZXMgYW5kIGFycm93U3R5bGVzXG4gIGRhdGEuYXR0cmlidXRlcyA9IF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCBkYXRhLmF0dHJpYnV0ZXMpO1xuICBkYXRhLnN0eWxlcyA9IF9leHRlbmRzKHt9LCBzdHlsZXMsIGRhdGEuc3R5bGVzKTtcbiAgZGF0YS5hcnJvd1N0eWxlcyA9IF9leHRlbmRzKHt9LCBkYXRhLm9mZnNldHMuYXJyb3csIGRhdGEuYXJyb3dTdHlsZXMpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGRlcGVuZHMgZnJvbSBhbm90aGVyIG9uZS48YnIgLz5cbiAqIEl0IGNoZWNrcyBpZiB0aGUgbmVlZGVkIG1vZGlmaWVyIGlzIGxpc3RlZCBhbmQgZW5hYmxlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVycyAtIGxpc3Qgb2YgbW9kaWZpZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdGluZ05hbWUgLSBuYW1lIG9mIHJlcXVlc3RpbmcgbW9kaWZpZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0ZWROYW1lIC0gbmFtZSBvZiByZXF1ZXN0ZWQgbW9kaWZpZXJcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc01vZGlmaWVyUmVxdWlyZWQobW9kaWZpZXJzLCByZXF1ZXN0aW5nTmFtZSwgcmVxdWVzdGVkTmFtZSkge1xuICB2YXIgcmVxdWVzdGluZyA9IGZpbmQobW9kaWZpZXJzLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBuYW1lID0gX3JlZi5uYW1lO1xuICAgIHJldHVybiBuYW1lID09PSByZXF1ZXN0aW5nTmFtZTtcbiAgfSk7XG5cbiAgdmFyIGlzUmVxdWlyZWQgPSAhIXJlcXVlc3RpbmcgJiYgbW9kaWZpZXJzLnNvbWUoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgcmV0dXJuIG1vZGlmaWVyLm5hbWUgPT09IHJlcXVlc3RlZE5hbWUgJiYgbW9kaWZpZXIuZW5hYmxlZCAmJiBtb2RpZmllci5vcmRlciA8IHJlcXVlc3Rpbmcub3JkZXI7XG4gIH0pO1xuXG4gIGlmICghaXNSZXF1aXJlZCkge1xuICAgIHZhciBfcmVxdWVzdGluZyA9ICdgJyArIHJlcXVlc3RpbmdOYW1lICsgJ2AnO1xuICAgIHZhciByZXF1ZXN0ZWQgPSAnYCcgKyByZXF1ZXN0ZWROYW1lICsgJ2AnO1xuICAgIGNvbnNvbGUud2FybihyZXF1ZXN0ZWQgKyAnIG1vZGlmaWVyIGlzIHJlcXVpcmVkIGJ5ICcgKyBfcmVxdWVzdGluZyArICcgbW9kaWZpZXIgaW4gb3JkZXIgdG8gd29yaywgYmUgc3VyZSB0byBpbmNsdWRlIGl0IGJlZm9yZSAnICsgX3JlcXVlc3RpbmcgKyAnIScpO1xuICB9XG4gIHJldHVybiBpc1JlcXVpcmVkO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gYXJyb3coZGF0YSwgb3B0aW9ucykge1xuICB2YXIgX2RhdGEkb2Zmc2V0cyRhcnJvdztcblxuICAvLyBhcnJvdyBkZXBlbmRzIG9uIGtlZXBUb2dldGhlciBpbiBvcmRlciB0byB3b3JrXG4gIGlmICghaXNNb2RpZmllclJlcXVpcmVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnYXJyb3cnLCAna2VlcFRvZ2V0aGVyJykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHZhciBhcnJvd0VsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQ7XG5cbiAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIGEgc3RyaW5nLCBzdXBwb3NlIGl0J3MgYSBDU1Mgc2VsZWN0b3JcbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gZGF0YS5pbnN0YW5jZS5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIG5vdCBmb3VuZCwgZG9uJ3QgcnVuIHRoZSBtb2RpZmllclxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgdGhlIGFycm93RWxlbWVudCBpc24ndCBhIHF1ZXJ5IHNlbGVjdG9yIHdlIG11c3QgY2hlY2sgdGhhdCB0aGVcbiAgICAvLyBwcm92aWRlZCBET00gbm9kZSBpcyBjaGlsZCBvZiBpdHMgcG9wcGVyIG5vZGVcbiAgICBpZiAoIWRhdGEuaW5zdGFuY2UucG9wcGVyLmNvbnRhaW5zKGFycm93RWxlbWVudCkpIHtcbiAgICAgIGNvbnNvbGUud2FybignV0FSTklORzogYGFycm93LmVsZW1lbnRgIG11c3QgYmUgY2hpbGQgb2YgaXRzIHBvcHBlciBlbGVtZW50IScpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcblxuICB2YXIgaXNWZXJ0aWNhbCA9IFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gIHZhciBzaWRlQ2FwaXRhbGl6ZWQgPSBpc1ZlcnRpY2FsID8gJ1RvcCcgOiAnTGVmdCc7XG4gIHZhciBzaWRlID0gc2lkZUNhcGl0YWxpemVkLnRvTG93ZXJDYXNlKCk7XG4gIHZhciBhbHRTaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICB2YXIgb3BTaWRlID0gaXNWZXJ0aWNhbCA/ICdib3R0b20nIDogJ3JpZ2h0JztcbiAgdmFyIGFycm93RWxlbWVudFNpemUgPSBnZXRPdXRlclNpemVzKGFycm93RWxlbWVudClbbGVuXTtcblxuICAvL1xuICAvLyBleHRlbmRzIGtlZXBUb2dldGhlciBiZWhhdmlvciBtYWtpbmcgc3VyZSB0aGUgcG9wcGVyIGFuZCBpdHNcbiAgLy8gcmVmZXJlbmNlIGhhdmUgZW5vdWdoIHBpeGVscyBpbiBjb25qdW5jdGlvblxuICAvL1xuXG4gIC8vIHRvcC9sZWZ0IHNpZGVcbiAgaWYgKHJlZmVyZW5jZVtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSA8IHBvcHBlcltzaWRlXSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gLT0gcG9wcGVyW3NpZGVdIC0gKHJlZmVyZW5jZVtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSk7XG4gIH1cbiAgLy8gYm90dG9tL3JpZ2h0IHNpZGVcbiAgaWYgKHJlZmVyZW5jZVtzaWRlXSArIGFycm93RWxlbWVudFNpemUgPiBwb3BwZXJbb3BTaWRlXSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gKz0gcmVmZXJlbmNlW3NpZGVdICsgYXJyb3dFbGVtZW50U2l6ZSAtIHBvcHBlcltvcFNpZGVdO1xuICB9XG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5wb3BwZXIpO1xuXG4gIC8vIGNvbXB1dGUgY2VudGVyIG9mIHRoZSBwb3BwZXJcbiAgdmFyIGNlbnRlciA9IHJlZmVyZW5jZVtzaWRlXSArIHJlZmVyZW5jZVtsZW5dIC8gMiAtIGFycm93RWxlbWVudFNpemUgLyAyO1xuXG4gIC8vIENvbXB1dGUgdGhlIHNpZGVWYWx1ZSB1c2luZyB0aGUgdXBkYXRlZCBwb3BwZXIgb2Zmc2V0c1xuICAvLyB0YWtlIHBvcHBlciBtYXJnaW4gaW4gYWNjb3VudCBiZWNhdXNlIHdlIGRvbid0IGhhdmUgdGhpcyBpbmZvIGF2YWlsYWJsZVxuICB2YXIgY3NzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGRhdGEuaW5zdGFuY2UucG9wcGVyKTtcbiAgdmFyIHBvcHBlck1hcmdpblNpZGUgPSBwYXJzZUZsb2F0KGNzc1snbWFyZ2luJyArIHNpZGVDYXBpdGFsaXplZF0pO1xuICB2YXIgcG9wcGVyQm9yZGVyU2lkZSA9IHBhcnNlRmxvYXQoY3NzWydib3JkZXInICsgc2lkZUNhcGl0YWxpemVkICsgJ1dpZHRoJ10pO1xuICB2YXIgc2lkZVZhbHVlID0gY2VudGVyIC0gZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSAtIHBvcHBlck1hcmdpblNpZGUgLSBwb3BwZXJCb3JkZXJTaWRlO1xuXG4gIC8vIHByZXZlbnQgYXJyb3dFbGVtZW50IGZyb20gYmVpbmcgcGxhY2VkIG5vdCBjb250aWd1b3VzbHkgdG8gaXRzIHBvcHBlclxuICBzaWRlVmFsdWUgPSBNYXRoLm1heChNYXRoLm1pbihwb3BwZXJbbGVuXSAtIGFycm93RWxlbWVudFNpemUsIHNpZGVWYWx1ZSksIDApO1xuXG4gIGRhdGEuYXJyb3dFbGVtZW50ID0gYXJyb3dFbGVtZW50O1xuICBkYXRhLm9mZnNldHMuYXJyb3cgPSAoX2RhdGEkb2Zmc2V0cyRhcnJvdyA9IHt9LCBkZWZpbmVQcm9wZXJ0eShfZGF0YSRvZmZzZXRzJGFycm93LCBzaWRlLCBNYXRoLnJvdW5kKHNpZGVWYWx1ZSkpLCBkZWZpbmVQcm9wZXJ0eShfZGF0YSRvZmZzZXRzJGFycm93LCBhbHRTaWRlLCAnJyksIF9kYXRhJG9mZnNldHMkYXJyb3cpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEdldCB0aGUgb3Bwb3NpdGUgcGxhY2VtZW50IHZhcmlhdGlvbiBvZiB0aGUgZ2l2ZW4gb25lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50IHZhcmlhdGlvblxuICogQHJldHVybnMge1N0cmluZ30gZmxpcHBlZCBwbGFjZW1lbnQgdmFyaWF0aW9uXG4gKi9cbmZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbikge1xuICBpZiAodmFyaWF0aW9uID09PSAnZW5kJykge1xuICAgIHJldHVybiAnc3RhcnQnO1xuICB9IGVsc2UgaWYgKHZhcmlhdGlvbiA9PT0gJ3N0YXJ0Jykge1xuICAgIHJldHVybiAnZW5kJztcbiAgfVxuICByZXR1cm4gdmFyaWF0aW9uO1xufVxuXG4vKipcbiAqIExpc3Qgb2YgYWNjZXB0ZWQgcGxhY2VtZW50cyB0byB1c2UgYXMgdmFsdWVzIG9mIHRoZSBgcGxhY2VtZW50YCBvcHRpb24uPGJyIC8+XG4gKiBWYWxpZCBwbGFjZW1lbnRzIGFyZTpcbiAqIC0gYGF1dG9gXG4gKiAtIGB0b3BgXG4gKiAtIGByaWdodGBcbiAqIC0gYGJvdHRvbWBcbiAqIC0gYGxlZnRgXG4gKlxuICogRWFjaCBwbGFjZW1lbnQgY2FuIGhhdmUgYSB2YXJpYXRpb24gZnJvbSB0aGlzIGxpc3Q6XG4gKiAtIGAtc3RhcnRgXG4gKiAtIGAtZW5kYFxuICpcbiAqIFZhcmlhdGlvbnMgYXJlIGludGVycHJldGVkIGVhc2lseSBpZiB5b3UgdGhpbmsgb2YgdGhlbSBhcyB0aGUgbGVmdCB0byByaWdodFxuICogd3JpdHRlbiBsYW5ndWFnZXMuIEhvcml6b250YWxseSAoYHRvcGAgYW5kIGBib3R0b21gKSwgYHN0YXJ0YCBpcyBsZWZ0IGFuZCBgZW5kYFxuICogaXMgcmlnaHQuPGJyIC8+XG4gKiBWZXJ0aWNhbGx5IChgbGVmdGAgYW5kIGByaWdodGApLCBgc3RhcnRgIGlzIHRvcCBhbmQgYGVuZGAgaXMgYm90dG9tLlxuICpcbiAqIFNvbWUgdmFsaWQgZXhhbXBsZXMgYXJlOlxuICogLSBgdG9wLWVuZGAgKG9uIHRvcCBvZiByZWZlcmVuY2UsIHJpZ2h0IGFsaWduZWQpXG4gKiAtIGByaWdodC1zdGFydGAgKG9uIHJpZ2h0IG9mIHJlZmVyZW5jZSwgdG9wIGFsaWduZWQpXG4gKiAtIGBib3R0b21gIChvbiBib3R0b20sIGNlbnRlcmVkKVxuICogLSBgYXV0by1lbmRgIChvbiB0aGUgc2lkZSB3aXRoIG1vcmUgc3BhY2UgYXZhaWxhYmxlLCBhbGlnbm1lbnQgZGVwZW5kcyBieSBwbGFjZW1lbnQpXG4gKlxuICogQHN0YXRpY1xuICogQHR5cGUge0FycmF5fVxuICogQGVudW0ge1N0cmluZ31cbiAqIEByZWFkb25seVxuICogQG1ldGhvZCBwbGFjZW1lbnRzXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbnZhciBwbGFjZW1lbnRzID0gWydhdXRvLXN0YXJ0JywgJ2F1dG8nLCAnYXV0by1lbmQnLCAndG9wLXN0YXJ0JywgJ3RvcCcsICd0b3AtZW5kJywgJ3JpZ2h0LXN0YXJ0JywgJ3JpZ2h0JywgJ3JpZ2h0LWVuZCcsICdib3R0b20tZW5kJywgJ2JvdHRvbScsICdib3R0b20tc3RhcnQnLCAnbGVmdC1lbmQnLCAnbGVmdCcsICdsZWZ0LXN0YXJ0J107XG5cbi8vIEdldCByaWQgb2YgYGF1dG9gIGBhdXRvLXN0YXJ0YCBhbmQgYGF1dG8tZW5kYFxudmFyIHZhbGlkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMuc2xpY2UoMyk7XG5cbi8qKlxuICogR2l2ZW4gYW4gaW5pdGlhbCBwbGFjZW1lbnQsIHJldHVybnMgYWxsIHRoZSBzdWJzZXF1ZW50IHBsYWNlbWVudHNcbiAqIGNsb2Nrd2lzZSAob3IgY291bnRlci1jbG9ja3dpc2UpLlxuICpcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwbGFjZW1lbnQgLSBBIHZhbGlkIHBsYWNlbWVudCAoaXQgYWNjZXB0cyB2YXJpYXRpb25zKVxuICogQGFyZ3VtZW50IHtCb29sZWFufSBjb3VudGVyIC0gU2V0IHRvIHRydWUgdG8gd2FsayB0aGUgcGxhY2VtZW50cyBjb3VudGVyY2xvY2t3aXNlXG4gKiBAcmV0dXJucyB7QXJyYXl9IHBsYWNlbWVudHMgaW5jbHVkaW5nIHRoZWlyIHZhcmlhdGlvbnNcbiAqL1xuZnVuY3Rpb24gY2xvY2t3aXNlKHBsYWNlbWVudCkge1xuICB2YXIgY291bnRlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG5cbiAgdmFyIGluZGV4ID0gdmFsaWRQbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KTtcbiAgdmFyIGFyciA9IHZhbGlkUGxhY2VtZW50cy5zbGljZShpbmRleCArIDEpLmNvbmNhdCh2YWxpZFBsYWNlbWVudHMuc2xpY2UoMCwgaW5kZXgpKTtcbiAgcmV0dXJuIGNvdW50ZXIgPyBhcnIucmV2ZXJzZSgpIDogYXJyO1xufVxuXG52YXIgQkVIQVZJT1JTID0ge1xuICBGTElQOiAnZmxpcCcsXG4gIENMT0NLV0lTRTogJ2Nsb2Nrd2lzZScsXG4gIENPVU5URVJDTE9DS1dJU0U6ICdjb3VudGVyY2xvY2t3aXNlJ1xufTtcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGZsaXAoZGF0YSwgb3B0aW9ucykge1xuICAvLyBpZiBgaW5uZXJgIG1vZGlmaWVyIGlzIGVuYWJsZWQsIHdlIGNhbid0IHVzZSB0aGUgYGZsaXBgIG1vZGlmaWVyXG4gIGlmIChpc01vZGlmaWVyRW5hYmxlZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgJ2lubmVyJykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGlmIChkYXRhLmZsaXBwZWQgJiYgZGF0YS5wbGFjZW1lbnQgPT09IGRhdGEub3JpZ2luYWxQbGFjZW1lbnQpIHtcbiAgICAvLyBzZWVtcyBsaWtlIGZsaXAgaXMgdHJ5aW5nIHRvIGxvb3AsIHByb2JhYmx5IHRoZXJlJ3Mgbm90IGVub3VnaCBzcGFjZSBvbiBhbnkgb2YgdGhlIGZsaXBwYWJsZSBzaWRlc1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdmFyIGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSwgb3B0aW9ucy5wYWRkaW5nLCBvcHRpb25zLmJvdW5kYXJpZXNFbGVtZW50LCBkYXRhLnBvc2l0aW9uRml4ZWQpO1xuXG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgcGxhY2VtZW50T3Bwb3NpdGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVsxXSB8fCAnJztcblxuICB2YXIgZmxpcE9yZGVyID0gW107XG5cbiAgc3dpdGNoIChvcHRpb25zLmJlaGF2aW9yKSB7XG4gICAgY2FzZSBCRUhBVklPUlMuRkxJUDpcbiAgICAgIGZsaXBPcmRlciA9IFtwbGFjZW1lbnQsIHBsYWNlbWVudE9wcG9zaXRlXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQkVIQVZJT1JTLkNMT0NLV0lTRTpcbiAgICAgIGZsaXBPcmRlciA9IGNsb2Nrd2lzZShwbGFjZW1lbnQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCRUhBVklPUlMuQ09VTlRFUkNMT0NLV0lTRTpcbiAgICAgIGZsaXBPcmRlciA9IGNsb2Nrd2lzZShwbGFjZW1lbnQsIHRydWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGZsaXBPcmRlciA9IG9wdGlvbnMuYmVoYXZpb3I7XG4gIH1cblxuICBmbGlwT3JkZXIuZm9yRWFjaChmdW5jdGlvbiAoc3RlcCwgaW5kZXgpIHtcbiAgICBpZiAocGxhY2VtZW50ICE9PSBzdGVwIHx8IGZsaXBPcmRlci5sZW5ndGggPT09IGluZGV4ICsgMSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgICBwbGFjZW1lbnRPcHBvc2l0ZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgcG9wcGVyT2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG4gICAgdmFyIHJlZk9mZnNldHMgPSBkYXRhLm9mZnNldHMucmVmZXJlbmNlO1xuXG4gICAgLy8gdXNpbmcgZmxvb3IgYmVjYXVzZSB0aGUgcmVmZXJlbmNlIG9mZnNldHMgbWF5IGNvbnRhaW4gZGVjaW1hbHMgd2UgYXJlIG5vdCBnb2luZyB0byBjb25zaWRlciBoZXJlXG4gICAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbiAgICB2YXIgb3ZlcmxhcHNSZWYgPSBwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBmbG9vcihwb3BwZXJPZmZzZXRzLnJpZ2h0KSA+IGZsb29yKHJlZk9mZnNldHMubGVmdCkgfHwgcGxhY2VtZW50ID09PSAncmlnaHQnICYmIGZsb29yKHBvcHBlck9mZnNldHMubGVmdCkgPCBmbG9vcihyZWZPZmZzZXRzLnJpZ2h0KSB8fCBwbGFjZW1lbnQgPT09ICd0b3AnICYmIGZsb29yKHBvcHBlck9mZnNldHMuYm90dG9tKSA+IGZsb29yKHJlZk9mZnNldHMudG9wKSB8fCBwbGFjZW1lbnQgPT09ICdib3R0b20nICYmIGZsb29yKHBvcHBlck9mZnNldHMudG9wKSA8IGZsb29yKHJlZk9mZnNldHMuYm90dG9tKTtcblxuICAgIHZhciBvdmVyZmxvd3NMZWZ0ID0gZmxvb3IocG9wcGVyT2Zmc2V0cy5sZWZ0KSA8IGZsb29yKGJvdW5kYXJpZXMubGVmdCk7XG4gICAgdmFyIG92ZXJmbG93c1JpZ2h0ID0gZmxvb3IocG9wcGVyT2Zmc2V0cy5yaWdodCkgPiBmbG9vcihib3VuZGFyaWVzLnJpZ2h0KTtcbiAgICB2YXIgb3ZlcmZsb3dzVG9wID0gZmxvb3IocG9wcGVyT2Zmc2V0cy50b3ApIDwgZmxvb3IoYm91bmRhcmllcy50b3ApO1xuICAgIHZhciBvdmVyZmxvd3NCb3R0b20gPSBmbG9vcihwb3BwZXJPZmZzZXRzLmJvdHRvbSkgPiBmbG9vcihib3VuZGFyaWVzLmJvdHRvbSk7XG5cbiAgICB2YXIgb3ZlcmZsb3dzQm91bmRhcmllcyA9IHBsYWNlbWVudCA9PT0gJ2xlZnQnICYmIG92ZXJmbG93c0xlZnQgfHwgcGxhY2VtZW50ID09PSAncmlnaHQnICYmIG92ZXJmbG93c1JpZ2h0IHx8IHBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgb3ZlcmZsb3dzVG9wIHx8IHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiYgb3ZlcmZsb3dzQm90dG9tO1xuXG4gICAgLy8gZmxpcCB0aGUgdmFyaWF0aW9uIGlmIHJlcXVpcmVkXG4gICAgdmFyIGlzVmVydGljYWwgPSBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuXG4gICAgLy8gZmxpcHMgdmFyaWF0aW9uIGlmIHJlZmVyZW5jZSBlbGVtZW50IG92ZXJmbG93cyBib3VuZGFyaWVzXG4gICAgdmFyIGZsaXBwZWRWYXJpYXRpb25CeVJlZiA9ICEhb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyAmJiAoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzTGVmdCB8fCBpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzUmlnaHQgfHwgIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c1RvcCB8fCAhaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c0JvdHRvbSk7XG5cbiAgICAvLyBmbGlwcyB2YXJpYXRpb24gaWYgcG9wcGVyIGNvbnRlbnQgb3ZlcmZsb3dzIGJvdW5kYXJpZXNcbiAgICB2YXIgZmxpcHBlZFZhcmlhdGlvbkJ5Q29udGVudCA9ICEhb3B0aW9ucy5mbGlwVmFyaWF0aW9uc0J5Q29udGVudCAmJiAoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzUmlnaHQgfHwgaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c0xlZnQgfHwgIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c0JvdHRvbSB8fCAhaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c1RvcCk7XG5cbiAgICB2YXIgZmxpcHBlZFZhcmlhdGlvbiA9IGZsaXBwZWRWYXJpYXRpb25CeVJlZiB8fCBmbGlwcGVkVmFyaWF0aW9uQnlDb250ZW50O1xuXG4gICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMgfHwgZmxpcHBlZFZhcmlhdGlvbikge1xuICAgICAgLy8gdGhpcyBib29sZWFuIHRvIGRldGVjdCBhbnkgZmxpcCBsb29wXG4gICAgICBkYXRhLmZsaXBwZWQgPSB0cnVlO1xuXG4gICAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcykge1xuICAgICAgICBwbGFjZW1lbnQgPSBmbGlwT3JkZXJbaW5kZXggKyAxXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZsaXBwZWRWYXJpYXRpb24pIHtcbiAgICAgICAgdmFyaWF0aW9uID0gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5wbGFjZW1lbnQgPSBwbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gJy0nICsgdmFyaWF0aW9uIDogJycpO1xuXG4gICAgICAvLyB0aGlzIG9iamVjdCBjb250YWlucyBgcG9zaXRpb25gLCB3ZSB3YW50IHRvIHByZXNlcnZlIGl0IGFsb25nIHdpdGhcbiAgICAgIC8vIGFueSBhZGRpdGlvbmFsIHByb3BlcnR5IHdlIG1heSBhZGQgaW4gdGhlIGZ1dHVyZVxuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IF9leHRlbmRzKHt9LCBkYXRhLm9mZnNldHMucG9wcGVyLCBnZXRQb3BwZXJPZmZzZXRzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLm9mZnNldHMucmVmZXJlbmNlLCBkYXRhLnBsYWNlbWVudCkpO1xuXG4gICAgICBkYXRhID0gcnVuTW9kaWZpZXJzKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCBkYXRhLCAnZmxpcCcpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24ga2VlcFRvZ2V0aGVyKGRhdGEpIHtcbiAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuXG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG4gIHZhciBzaWRlID0gaXNWZXJ0aWNhbCA/ICdyaWdodCcgOiAnYm90dG9tJztcbiAgdmFyIG9wU2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgdmFyIG1lYXN1cmVtZW50ID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcblxuICBpZiAocG9wcGVyW3NpZGVdIDwgZmxvb3IocmVmZXJlbmNlW29wU2lkZV0pKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltvcFNpZGVdID0gZmxvb3IocmVmZXJlbmNlW29wU2lkZV0pIC0gcG9wcGVyW21lYXN1cmVtZW50XTtcbiAgfVxuICBpZiAocG9wcGVyW29wU2lkZV0gPiBmbG9vcihyZWZlcmVuY2Vbc2lkZV0pKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltvcFNpZGVdID0gZmxvb3IocmVmZXJlbmNlW3NpZGVdKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgc3RyaW5nIGNvbnRhaW5pbmcgdmFsdWUgKyB1bml0IGludG8gYSBweCB2YWx1ZSBudW1iZXJcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIHttb2RpZmllcnN+b2Zmc2V0fVxuICogQHByaXZhdGVcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBzdHIgLSBWYWx1ZSArIHVuaXQgc3RyaW5nXG4gKiBAYXJndW1lbnQge1N0cmluZ30gbWVhc3VyZW1lbnQgLSBgaGVpZ2h0YCBvciBgd2lkdGhgXG4gKiBAYXJndW1lbnQge09iamVjdH0gcG9wcGVyT2Zmc2V0c1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHNcbiAqIEByZXR1cm5zIHtOdW1iZXJ8U3RyaW5nfVxuICogVmFsdWUgaW4gcGl4ZWxzLCBvciBvcmlnaW5hbCBzdHJpbmcgaWYgbm8gdmFsdWVzIHdlcmUgZXh0cmFjdGVkXG4gKi9cbmZ1bmN0aW9uIHRvVmFsdWUoc3RyLCBtZWFzdXJlbWVudCwgcG9wcGVyT2Zmc2V0cywgcmVmZXJlbmNlT2Zmc2V0cykge1xuICAvLyBzZXBhcmF0ZSB2YWx1ZSBmcm9tIHVuaXRcbiAgdmFyIHNwbGl0ID0gc3RyLm1hdGNoKC8oKD86XFwtfFxcKyk/XFxkKlxcLj9cXGQqKSguKikvKTtcbiAgdmFyIHZhbHVlID0gK3NwbGl0WzFdO1xuICB2YXIgdW5pdCA9IHNwbGl0WzJdO1xuXG4gIC8vIElmIGl0J3Mgbm90IGEgbnVtYmVyIGl0J3MgYW4gb3BlcmF0b3IsIEkgZ3Vlc3NcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBpZiAodW5pdC5pbmRleE9mKCclJykgPT09IDApIHtcbiAgICB2YXIgZWxlbWVudCA9IHZvaWQgMDtcbiAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgIGNhc2UgJyVwJzpcbiAgICAgICAgZWxlbWVudCA9IHBvcHBlck9mZnNldHM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnJSc6XG4gICAgICBjYXNlICclcic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlbGVtZW50ID0gcmVmZXJlbmNlT2Zmc2V0cztcbiAgICB9XG5cbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3QoZWxlbWVudCk7XG4gICAgcmV0dXJuIHJlY3RbbWVhc3VyZW1lbnRdIC8gMTAwICogdmFsdWU7XG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3ZoJyB8fCB1bml0ID09PSAndncnKSB7XG4gICAgLy8gaWYgaXMgYSB2aCBvciB2dywgd2UgY2FsY3VsYXRlIHRoZSBzaXplIGJhc2VkIG9uIHRoZSB2aWV3cG9ydFxuICAgIHZhciBzaXplID0gdm9pZCAwO1xuICAgIGlmICh1bml0ID09PSAndmgnKSB7XG4gICAgICBzaXplID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaXplID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpemUgLyAxMDAgKiB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpZiBpcyBhbiBleHBsaWNpdCBwaXhlbCB1bml0LCB3ZSBnZXQgcmlkIG9mIHRoZSB1bml0IGFuZCBrZWVwIHRoZSB2YWx1ZVxuICAgIC8vIGlmIGlzIGFuIGltcGxpY2l0IHVuaXQsIGl0J3MgcHgsIGFuZCB3ZSByZXR1cm4ganVzdCB0aGUgdmFsdWVcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBQYXJzZSBhbiBgb2Zmc2V0YCBzdHJpbmcgdG8gZXh0cmFwb2xhdGUgYHhgIGFuZCBgeWAgbnVtZXJpYyBvZmZzZXRzLlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2Yge21vZGlmaWVyc35vZmZzZXR9XG4gKiBAcHJpdmF0ZVxuICogQGFyZ3VtZW50IHtTdHJpbmd9IG9mZnNldFxuICogQGFyZ3VtZW50IHtPYmplY3R9IHBvcHBlck9mZnNldHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gYmFzZVBsYWNlbWVudFxuICogQHJldHVybnMge0FycmF5fSBhIHR3byBjZWxscyBhcnJheSB3aXRoIHggYW5kIHkgb2Zmc2V0cyBpbiBudW1iZXJzXG4gKi9cbmZ1bmN0aW9uIHBhcnNlT2Zmc2V0KG9mZnNldCwgcG9wcGVyT2Zmc2V0cywgcmVmZXJlbmNlT2Zmc2V0cywgYmFzZVBsYWNlbWVudCkge1xuICB2YXIgb2Zmc2V0cyA9IFswLCAwXTtcblxuICAvLyBVc2UgaGVpZ2h0IGlmIHBsYWNlbWVudCBpcyBsZWZ0IG9yIHJpZ2h0IGFuZCBpbmRleCBpcyAwIG90aGVyd2lzZSB1c2Ugd2lkdGhcbiAgLy8gaW4gdGhpcyB3YXkgdGhlIGZpcnN0IG9mZnNldCB3aWxsIHVzZSBhbiBheGlzIGFuZCB0aGUgc2Vjb25kIG9uZVxuICAvLyB3aWxsIHVzZSB0aGUgb3RoZXIgb25lXG4gIHZhciB1c2VIZWlnaHQgPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAvLyBTcGxpdCB0aGUgb2Zmc2V0IHN0cmluZyB0byBvYnRhaW4gYSBsaXN0IG9mIHZhbHVlcyBhbmQgb3BlcmFuZHNcbiAgLy8gVGhlIHJlZ2V4IGFkZHJlc3NlcyB2YWx1ZXMgd2l0aCB0aGUgcGx1cyBvciBtaW51cyBzaWduIGluIGZyb250ICgrMTAsIC0yMCwgZXRjKVxuICB2YXIgZnJhZ21lbnRzID0gb2Zmc2V0LnNwbGl0KC8oXFwrfFxcLSkvKS5tYXAoZnVuY3Rpb24gKGZyYWcpIHtcbiAgICByZXR1cm4gZnJhZy50cmltKCk7XG4gIH0pO1xuXG4gIC8vIERldGVjdCBpZiB0aGUgb2Zmc2V0IHN0cmluZyBjb250YWlucyBhIHBhaXIgb2YgdmFsdWVzIG9yIGEgc2luZ2xlIG9uZVxuICAvLyB0aGV5IGNvdWxkIGJlIHNlcGFyYXRlZCBieSBjb21tYSBvciBzcGFjZVxuICB2YXIgZGl2aWRlciA9IGZyYWdtZW50cy5pbmRleE9mKGZpbmQoZnJhZ21lbnRzLCBmdW5jdGlvbiAoZnJhZykge1xuICAgIHJldHVybiBmcmFnLnNlYXJjaCgvLHxcXHMvKSAhPT0gLTE7XG4gIH0pKTtcblxuICBpZiAoZnJhZ21lbnRzW2RpdmlkZXJdICYmIGZyYWdtZW50c1tkaXZpZGVyXS5pbmRleE9mKCcsJykgPT09IC0xKSB7XG4gICAgY29uc29sZS53YXJuKCdPZmZzZXRzIHNlcGFyYXRlZCBieSB3aGl0ZSBzcGFjZShzKSBhcmUgZGVwcmVjYXRlZCwgdXNlIGEgY29tbWEgKCwpIGluc3RlYWQuJyk7XG4gIH1cblxuICAvLyBJZiBkaXZpZGVyIGlzIGZvdW5kLCB3ZSBkaXZpZGUgdGhlIGxpc3Qgb2YgdmFsdWVzIGFuZCBvcGVyYW5kcyB0byBkaXZpZGVcbiAgLy8gdGhlbSBieSBvZnNldCBYIGFuZCBZLlxuICB2YXIgc3BsaXRSZWdleCA9IC9cXHMqLFxccyp8XFxzKy87XG4gIHZhciBvcHMgPSBkaXZpZGVyICE9PSAtMSA/IFtmcmFnbWVudHMuc2xpY2UoMCwgZGl2aWRlcikuY29uY2F0KFtmcmFnbWVudHNbZGl2aWRlcl0uc3BsaXQoc3BsaXRSZWdleClbMF1dKSwgW2ZyYWdtZW50c1tkaXZpZGVyXS5zcGxpdChzcGxpdFJlZ2V4KVsxXV0uY29uY2F0KGZyYWdtZW50cy5zbGljZShkaXZpZGVyICsgMSkpXSA6IFtmcmFnbWVudHNdO1xuXG4gIC8vIENvbnZlcnQgdGhlIHZhbHVlcyB3aXRoIHVuaXRzIHRvIGFic29sdXRlIHBpeGVscyB0byBhbGxvdyBvdXIgY29tcHV0YXRpb25zXG4gIG9wcyA9IG9wcy5tYXAoZnVuY3Rpb24gKG9wLCBpbmRleCkge1xuICAgIC8vIE1vc3Qgb2YgdGhlIHVuaXRzIHJlbHkgb24gdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBwb3BwZXJcbiAgICB2YXIgbWVhc3VyZW1lbnQgPSAoaW5kZXggPT09IDEgPyAhdXNlSGVpZ2h0IDogdXNlSGVpZ2h0KSA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgbWVyZ2VXaXRoUHJldmlvdXMgPSBmYWxzZTtcbiAgICByZXR1cm4gb3BcbiAgICAvLyBUaGlzIGFnZ3JlZ2F0ZXMgYW55IGArYCBvciBgLWAgc2lnbiB0aGF0IGFyZW4ndCBjb25zaWRlcmVkIG9wZXJhdG9yc1xuICAgIC8vIGUuZy46IDEwICsgKzUgPT4gWzEwLCArLCArNV1cbiAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBpZiAoYVthLmxlbmd0aCAtIDFdID09PSAnJyAmJiBbJysnLCAnLSddLmluZGV4T2YoYikgIT09IC0xKSB7XG4gICAgICAgIGFbYS5sZW5ndGggLSAxXSA9IGI7XG4gICAgICAgIG1lcmdlV2l0aFByZXZpb3VzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9IGVsc2UgaWYgKG1lcmdlV2l0aFByZXZpb3VzKSB7XG4gICAgICAgIGFbYS5sZW5ndGggLSAxXSArPSBiO1xuICAgICAgICBtZXJnZVdpdGhQcmV2aW91cyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhLmNvbmNhdChiKTtcbiAgICAgIH1cbiAgICB9LCBbXSlcbiAgICAvLyBIZXJlIHdlIGNvbnZlcnQgdGhlIHN0cmluZyB2YWx1ZXMgaW50byBudW1iZXIgdmFsdWVzIChpbiBweClcbiAgICAubWFwKGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIHJldHVybiB0b1ZhbHVlKHN0ciwgbWVhc3VyZW1lbnQsIHBvcHBlck9mZnNldHMsIHJlZmVyZW5jZU9mZnNldHMpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBMb29wIHRyb3VnaCB0aGUgb2Zmc2V0cyBhcnJheXMgYW5kIGV4ZWN1dGUgdGhlIG9wZXJhdGlvbnNcbiAgb3BzLmZvckVhY2goZnVuY3Rpb24gKG9wLCBpbmRleCkge1xuICAgIG9wLmZvckVhY2goZnVuY3Rpb24gKGZyYWcsIGluZGV4Mikge1xuICAgICAgaWYgKGlzTnVtZXJpYyhmcmFnKSkge1xuICAgICAgICBvZmZzZXRzW2luZGV4XSArPSBmcmFnICogKG9wW2luZGV4MiAtIDFdID09PSAnLScgPyAtMSA6IDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9mZnNldHM7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQGFyZ3VtZW50IHtOdW1iZXJ8U3RyaW5nfSBvcHRpb25zLm9mZnNldD0wXG4gKiBUaGUgb2Zmc2V0IHZhbHVlIGFzIGRlc2NyaWJlZCBpbiB0aGUgbW9kaWZpZXIgZGVzY3JpcHRpb25cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gb2Zmc2V0KGRhdGEsIF9yZWYpIHtcbiAgdmFyIG9mZnNldCA9IF9yZWYub2Zmc2V0O1xuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQsXG4gICAgICBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcblxuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuXG4gIHZhciBvZmZzZXRzID0gdm9pZCAwO1xuICBpZiAoaXNOdW1lcmljKCtvZmZzZXQpKSB7XG4gICAgb2Zmc2V0cyA9IFsrb2Zmc2V0LCAwXTtcbiAgfSBlbHNlIHtcbiAgICBvZmZzZXRzID0gcGFyc2VPZmZzZXQob2Zmc2V0LCBwb3BwZXIsIHJlZmVyZW5jZSwgYmFzZVBsYWNlbWVudCk7XG4gIH1cblxuICBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci5sZWZ0IC09IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzFdO1xuICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICd0b3AnKSB7XG4gICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIudG9wIC09IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1sxXTtcbiAgfVxuXG4gIGRhdGEucG9wcGVyID0gcG9wcGVyO1xuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KGRhdGEsIG9wdGlvbnMpIHtcbiAgdmFyIGJvdW5kYXJpZXNFbGVtZW50ID0gb3B0aW9ucy5ib3VuZGFyaWVzRWxlbWVudCB8fCBnZXRPZmZzZXRQYXJlbnQoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuXG4gIC8vIElmIG9mZnNldFBhcmVudCBpcyB0aGUgcmVmZXJlbmNlIGVsZW1lbnQsIHdlIHJlYWxseSB3YW50IHRvXG4gIC8vIGdvIG9uZSBzdGVwIHVwIGFuZCB1c2UgdGhlIG5leHQgb2Zmc2V0UGFyZW50IGFzIHJlZmVyZW5jZSB0b1xuICAvLyBhdm9pZCB0byBtYWtlIHRoaXMgbW9kaWZpZXIgY29tcGxldGVseSB1c2VsZXNzIGFuZCBsb29rIGxpa2UgYnJva2VuXG4gIGlmIChkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSA9PT0gYm91bmRhcmllc0VsZW1lbnQpIHtcbiAgICBib3VuZGFyaWVzRWxlbWVudCA9IGdldE9mZnNldFBhcmVudChib3VuZGFyaWVzRWxlbWVudCk7XG4gIH1cblxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcbiAgLy8gcmVzZXRzIHRoZSBwb3BwZXIncyBwb3NpdGlvbiBzbyB0aGF0IHRoZSBkb2N1bWVudCBzaXplIGNhbiBiZSBjYWxjdWxhdGVkIGV4Y2x1ZGluZ1xuICAvLyB0aGUgc2l6ZSBvZiB0aGUgcG9wcGVyIGVsZW1lbnQgaXRzZWxmXG4gIHZhciB0cmFuc2Zvcm1Qcm9wID0gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKTtcbiAgdmFyIHBvcHBlclN0eWxlcyA9IGRhdGEuaW5zdGFuY2UucG9wcGVyLnN0eWxlOyAvLyBhc3NpZ25tZW50IHRvIGhlbHAgbWluaWZpY2F0aW9uXG4gIHZhciB0b3AgPSBwb3BwZXJTdHlsZXMudG9wLFxuICAgICAgbGVmdCA9IHBvcHBlclN0eWxlcy5sZWZ0LFxuICAgICAgdHJhbnNmb3JtID0gcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdO1xuXG4gIHBvcHBlclN0eWxlcy50b3AgPSAnJztcbiAgcG9wcGVyU3R5bGVzLmxlZnQgPSAnJztcbiAgcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdID0gJyc7XG5cbiAgdmFyIGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSwgb3B0aW9ucy5wYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCwgZGF0YS5wb3NpdGlvbkZpeGVkKTtcblxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcbiAgLy8gcmVzdG9yZXMgdGhlIG9yaWdpbmFsIHN0eWxlIHByb3BlcnRpZXMgYWZ0ZXIgdGhlIG9mZnNldHMgaGF2ZSBiZWVuIGNvbXB1dGVkXG4gIHBvcHBlclN0eWxlcy50b3AgPSB0b3A7XG4gIHBvcHBlclN0eWxlcy5sZWZ0ID0gbGVmdDtcbiAgcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtO1xuXG4gIG9wdGlvbnMuYm91bmRhcmllcyA9IGJvdW5kYXJpZXM7XG5cbiAgdmFyIG9yZGVyID0gb3B0aW9ucy5wcmlvcml0eTtcbiAgdmFyIHBvcHBlciA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG5cbiAgdmFyIGNoZWNrID0ge1xuICAgIHByaW1hcnk6IGZ1bmN0aW9uIHByaW1hcnkocGxhY2VtZW50KSB7XG4gICAgICB2YXIgdmFsdWUgPSBwb3BwZXJbcGxhY2VtZW50XTtcbiAgICAgIGlmIChwb3BwZXJbcGxhY2VtZW50XSA8IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJiAhb3B0aW9ucy5lc2NhcGVXaXRoUmVmZXJlbmNlKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5tYXgocG9wcGVyW3BsYWNlbWVudF0sIGJvdW5kYXJpZXNbcGxhY2VtZW50XSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoe30sIHBsYWNlbWVudCwgdmFsdWUpO1xuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiBmdW5jdGlvbiBzZWNvbmRhcnkocGxhY2VtZW50KSB7XG4gICAgICB2YXIgbWFpblNpZGUgPSBwbGFjZW1lbnQgPT09ICdyaWdodCcgPyAnbGVmdCcgOiAndG9wJztcbiAgICAgIHZhciB2YWx1ZSA9IHBvcHBlclttYWluU2lkZV07XG4gICAgICBpZiAocG9wcGVyW3BsYWNlbWVudF0gPiBib3VuZGFyaWVzW3BsYWNlbWVudF0gJiYgIW9wdGlvbnMuZXNjYXBlV2l0aFJlZmVyZW5jZSkge1xuICAgICAgICB2YWx1ZSA9IE1hdGgubWluKHBvcHBlclttYWluU2lkZV0sIGJvdW5kYXJpZXNbcGxhY2VtZW50XSAtIChwbGFjZW1lbnQgPT09ICdyaWdodCcgPyBwb3BwZXIud2lkdGggOiBwb3BwZXIuaGVpZ2h0KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoe30sIG1haW5TaWRlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIG9yZGVyLmZvckVhY2goZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHZhciBzaWRlID0gWydsZWZ0JywgJ3RvcCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTEgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5JztcbiAgICBwb3BwZXIgPSBfZXh0ZW5kcyh7fSwgcG9wcGVyLCBjaGVja1tzaWRlXShwbGFjZW1lbnQpKTtcbiAgfSk7XG5cbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IHBvcHBlcjtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gc2hpZnQoZGF0YSkge1xuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIHZhciBzaGlmdHZhcmlhdGlvbiA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xuXG4gIC8vIGlmIHNoaWZ0IHNoaWZ0dmFyaWF0aW9uIGlzIHNwZWNpZmllZCwgcnVuIHRoZSBtb2RpZmllclxuICBpZiAoc2hpZnR2YXJpYXRpb24pIHtcbiAgICB2YXIgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2UsXG4gICAgICAgIHBvcHBlciA9IF9kYXRhJG9mZnNldHMucG9wcGVyO1xuXG4gICAgdmFyIGlzVmVydGljYWwgPSBbJ2JvdHRvbScsICd0b3AnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcbiAgICB2YXIgc2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgICB2YXIgbWVhc3VyZW1lbnQgPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuXG4gICAgdmFyIHNoaWZ0T2Zmc2V0cyA9IHtcbiAgICAgIHN0YXJ0OiBkZWZpbmVQcm9wZXJ0eSh7fSwgc2lkZSwgcmVmZXJlbmNlW3NpZGVdKSxcbiAgICAgIGVuZDogZGVmaW5lUHJvcGVydHkoe30sIHNpZGUsIHJlZmVyZW5jZVtzaWRlXSArIHJlZmVyZW5jZVttZWFzdXJlbWVudF0gLSBwb3BwZXJbbWVhc3VyZW1lbnRdKVxuICAgIH07XG5cbiAgICBkYXRhLm9mZnNldHMucG9wcGVyID0gX2V4dGVuZHMoe30sIHBvcHBlciwgc2hpZnRPZmZzZXRzW3NoaWZ0dmFyaWF0aW9uXSk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGhpZGUoZGF0YSkge1xuICBpZiAoIWlzTW9kaWZpZXJSZXF1aXJlZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgJ2hpZGUnLCAncHJldmVudE92ZXJmbG93JykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHZhciByZWZSZWN0ID0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZTtcbiAgdmFyIGJvdW5kID0gZmluZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgcmV0dXJuIG1vZGlmaWVyLm5hbWUgPT09ICdwcmV2ZW50T3ZlcmZsb3cnO1xuICB9KS5ib3VuZGFyaWVzO1xuXG4gIGlmIChyZWZSZWN0LmJvdHRvbSA8IGJvdW5kLnRvcCB8fCByZWZSZWN0LmxlZnQgPiBib3VuZC5yaWdodCB8fCByZWZSZWN0LnRvcCA+IGJvdW5kLmJvdHRvbSB8fCByZWZSZWN0LnJpZ2h0IDwgYm91bmQubGVmdCkge1xuICAgIC8vIEF2b2lkIHVubmVjZXNzYXJ5IERPTSBhY2Nlc3MgaWYgdmlzaWJpbGl0eSBoYXNuJ3QgY2hhbmdlZFxuICAgIGlmIChkYXRhLmhpZGUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGRhdGEuaGlkZSA9IHRydWU7XG4gICAgZGF0YS5hdHRyaWJ1dGVzWyd4LW91dC1vZi1ib3VuZGFyaWVzJ10gPSAnJztcbiAgfSBlbHNlIHtcbiAgICAvLyBBdm9pZCB1bm5lY2Vzc2FyeSBET00gYWNjZXNzIGlmIHZpc2liaWxpdHkgaGFzbid0IGNoYW5nZWRcbiAgICBpZiAoZGF0YS5oaWRlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZGF0YS5oaWRlID0gZmFsc2U7XG4gICAgZGF0YS5hdHRyaWJ1dGVzWyd4LW91dC1vZi1ib3VuZGFyaWVzJ10gPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBpbm5lcihkYXRhKSB7XG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuXG4gIHZhciBpc0hvcml6ID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgdmFyIHN1YnRyYWN0TGVuZ3RoID0gWyd0b3AnLCAnbGVmdCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPT09IC0xO1xuXG4gIHBvcHBlcltpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCddID0gcmVmZXJlbmNlW2Jhc2VQbGFjZW1lbnRdIC0gKHN1YnRyYWN0TGVuZ3RoID8gcG9wcGVyW2lzSG9yaXogPyAnd2lkdGgnIDogJ2hlaWdodCddIDogMCk7XG5cbiAgZGF0YS5wbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChwb3BwZXIpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIE1vZGlmaWVyIGZ1bmN0aW9uLCBlYWNoIG1vZGlmaWVyIGNhbiBoYXZlIGEgZnVuY3Rpb24gb2YgdGhpcyB0eXBlIGFzc2lnbmVkXG4gKiB0byBpdHMgYGZuYCBwcm9wZXJ0eS48YnIgLz5cbiAqIFRoZXNlIGZ1bmN0aW9ucyB3aWxsIGJlIGNhbGxlZCBvbiBlYWNoIHVwZGF0ZSwgdGhpcyBtZWFucyB0aGF0IHlvdSBtdXN0XG4gKiBtYWtlIHN1cmUgdGhleSBhcmUgcGVyZm9ybWFudCBlbm91Z2ggdG8gYXZvaWQgcGVyZm9ybWFuY2UgYm90dGxlbmVja3MuXG4gKlxuICogQGZ1bmN0aW9uIE1vZGlmaWVyRm5cbiAqIEBhcmd1bWVudCB7ZGF0YU9iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7ZGF0YU9iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5cbi8qKlxuICogTW9kaWZpZXJzIGFyZSBwbHVnaW5zIHVzZWQgdG8gYWx0ZXIgdGhlIGJlaGF2aW9yIG9mIHlvdXIgcG9wcGVycy48YnIgLz5cbiAqIFBvcHBlci5qcyB1c2VzIGEgc2V0IG9mIDkgbW9kaWZpZXJzIHRvIHByb3ZpZGUgYWxsIHRoZSBiYXNpYyBmdW5jdGlvbmFsaXRpZXNcbiAqIG5lZWRlZCBieSB0aGUgbGlicmFyeS5cbiAqXG4gKiBVc3VhbGx5IHlvdSBkb24ndCB3YW50IHRvIG92ZXJyaWRlIHRoZSBgb3JkZXJgLCBgZm5gIGFuZCBgb25Mb2FkYCBwcm9wcy5cbiAqIEFsbCB0aGUgb3RoZXIgcHJvcGVydGllcyBhcmUgY29uZmlndXJhdGlvbnMgdGhhdCBjb3VsZCBiZSB0d2Vha2VkLlxuICogQG5hbWVzcGFjZSBtb2RpZmllcnNcbiAqL1xudmFyIG1vZGlmaWVycyA9IHtcbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gc2hpZnQgdGhlIHBvcHBlciBvbiB0aGUgc3RhcnQgb3IgZW5kIG9mIGl0cyByZWZlcmVuY2VcbiAgICogZWxlbWVudC48YnIgLz5cbiAgICogSXQgd2lsbCByZWFkIHRoZSB2YXJpYXRpb24gb2YgdGhlIGBwbGFjZW1lbnRgIHByb3BlcnR5LjxiciAvPlxuICAgKiBJdCBjYW4gYmUgb25lIGVpdGhlciBgLWVuZGAgb3IgYC1zdGFydGAuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBzaGlmdDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0xMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDEwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IHNoaWZ0XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBgb2Zmc2V0YCBtb2RpZmllciBjYW4gc2hpZnQgeW91ciBwb3BwZXIgb24gYm90aCBpdHMgYXhpcy5cbiAgICpcbiAgICogSXQgYWNjZXB0cyB0aGUgZm9sbG93aW5nIHVuaXRzOlxuICAgKiAtIGBweGAgb3IgdW5pdC1sZXNzLCBpbnRlcnByZXRlZCBhcyBwaXhlbHNcbiAgICogLSBgJWAgb3IgYCVyYCwgcGVyY2VudGFnZSByZWxhdGl2ZSB0byB0aGUgbGVuZ3RoIG9mIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICAgKiAtIGAlcGAsIHBlcmNlbnRhZ2UgcmVsYXRpdmUgdG8gdGhlIGxlbmd0aCBvZiB0aGUgcG9wcGVyIGVsZW1lbnRcbiAgICogLSBgdndgLCBDU1Mgdmlld3BvcnQgd2lkdGggdW5pdFxuICAgKiAtIGB2aGAsIENTUyB2aWV3cG9ydCBoZWlnaHQgdW5pdFxuICAgKlxuICAgKiBGb3IgbGVuZ3RoIGlzIGludGVuZGVkIHRoZSBtYWluIGF4aXMgcmVsYXRpdmUgdG8gdGhlIHBsYWNlbWVudCBvZiB0aGUgcG9wcGVyLjxiciAvPlxuICAgKiBUaGlzIG1lYW5zIHRoYXQgaWYgdGhlIHBsYWNlbWVudCBpcyBgdG9wYCBvciBgYm90dG9tYCwgdGhlIGxlbmd0aCB3aWxsIGJlIHRoZVxuICAgKiBgd2lkdGhgLiBJbiBjYXNlIG9mIGBsZWZ0YCBvciBgcmlnaHRgLCBpdCB3aWxsIGJlIHRoZSBgaGVpZ2h0YC5cbiAgICpcbiAgICogWW91IGNhbiBwcm92aWRlIGEgc2luZ2xlIHZhbHVlIChhcyBgTnVtYmVyYCBvciBgU3RyaW5nYCksIG9yIGEgcGFpciBvZiB2YWx1ZXNcbiAgICogYXMgYFN0cmluZ2AgZGl2aWRlZCBieSBhIGNvbW1hIG9yIG9uZSAob3IgbW9yZSkgd2hpdGUgc3BhY2VzLjxiciAvPlxuICAgKiBUaGUgbGF0dGVyIGlzIGEgZGVwcmVjYXRlZCBtZXRob2QgYmVjYXVzZSBpdCBsZWFkcyB0byBjb25mdXNpb24gYW5kIHdpbGwgYmVcbiAgICogcmVtb3ZlZCBpbiB2Mi48YnIgLz5cbiAgICogQWRkaXRpb25hbGx5LCBpdCBhY2NlcHRzIGFkZGl0aW9ucyBhbmQgc3VidHJhY3Rpb25zIGJldHdlZW4gZGlmZmVyZW50IHVuaXRzLlxuICAgKiBOb3RlIHRoYXQgbXVsdGlwbGljYXRpb25zIGFuZCBkaXZpc2lvbnMgYXJlbid0IHN1cHBvcnRlZC5cbiAgICpcbiAgICogVmFsaWQgZXhhbXBsZXMgYXJlOlxuICAgKiBgYGBcbiAgICogMTBcbiAgICogJzEwJSdcbiAgICogJzEwLCAxMCdcbiAgICogJzEwJSwgMTAnXG4gICAqICcxMCArIDEwJSdcbiAgICogJzEwIC0gNXZoICsgMyUnXG4gICAqICctMTBweCArIDV2aCwgNXB4IC0gNiUnXG4gICAqIGBgYFxuICAgKiA+ICoqTkIqKjogSWYgeW91IGRlc2lyZSB0byBhcHBseSBvZmZzZXRzIHRvIHlvdXIgcG9wcGVycyBpbiBhIHdheSB0aGF0IG1heSBtYWtlIHRoZW0gb3ZlcmxhcFxuICAgKiA+IHdpdGggdGhlaXIgcmVmZXJlbmNlIGVsZW1lbnQsIHVuZm9ydHVuYXRlbHksIHlvdSB3aWxsIGhhdmUgdG8gZGlzYWJsZSB0aGUgYGZsaXBgIG1vZGlmaWVyLlxuICAgKiA+IFlvdSBjYW4gcmVhZCBtb3JlIG9uIHRoaXMgYXQgdGhpcyBbaXNzdWVdKGh0dHBzOi8vZ2l0aHViLmNvbS9GZXpWcmFzdGEvcG9wcGVyLmpzL2lzc3Vlcy8zNzMpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgb2Zmc2V0OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTIwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMjAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogb2Zmc2V0LFxuICAgIC8qKiBAcHJvcCB7TnVtYmVyfFN0cmluZ30gb2Zmc2V0PTBcbiAgICAgKiBUaGUgb2Zmc2V0IHZhbHVlIGFzIGRlc2NyaWJlZCBpbiB0aGUgbW9kaWZpZXIgZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICBvZmZzZXQ6IDBcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBwcmV2ZW50IHRoZSBwb3BwZXIgZnJvbSBiZWluZyBwb3NpdGlvbmVkIG91dHNpZGUgdGhlIGJvdW5kYXJ5LlxuICAgKlxuICAgKiBBIHNjZW5hcmlvIGV4aXN0cyB3aGVyZSB0aGUgcmVmZXJlbmNlIGl0c2VsZiBpcyBub3Qgd2l0aGluIHRoZSBib3VuZGFyaWVzLjxiciAvPlxuICAgKiBXZSBjYW4gc2F5IGl0IGhhcyBcImVzY2FwZWQgdGhlIGJvdW5kYXJpZXNcIiDigJQgb3IganVzdCBcImVzY2FwZWRcIi48YnIgLz5cbiAgICogSW4gdGhpcyBjYXNlIHdlIG5lZWQgdG8gZGVjaWRlIHdoZXRoZXIgdGhlIHBvcHBlciBzaG91bGQgZWl0aGVyOlxuICAgKlxuICAgKiAtIGRldGFjaCBmcm9tIHRoZSByZWZlcmVuY2UgYW5kIHJlbWFpbiBcInRyYXBwZWRcIiBpbiB0aGUgYm91bmRhcmllcywgb3JcbiAgICogLSBpZiBpdCBzaG91bGQgaWdub3JlIHRoZSBib3VuZGFyeSBhbmQgXCJlc2NhcGUgd2l0aCBpdHMgcmVmZXJlbmNlXCJcbiAgICpcbiAgICogV2hlbiBgZXNjYXBlV2l0aFJlZmVyZW5jZWAgaXMgc2V0IHRvYHRydWVgIGFuZCByZWZlcmVuY2UgaXMgY29tcGxldGVseVxuICAgKiBvdXRzaWRlIGl0cyBib3VuZGFyaWVzLCB0aGUgcG9wcGVyIHdpbGwgb3ZlcmZsb3cgKG9yIGNvbXBsZXRlbHkgbGVhdmUpXG4gICAqIHRoZSBib3VuZGFyaWVzIGluIG9yZGVyIHRvIHJlbWFpbiBhdHRhY2hlZCB0byB0aGUgZWRnZSBvZiB0aGUgcmVmZXJlbmNlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTMwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMzAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogcHJldmVudE92ZXJmbG93LFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtBcnJheX0gW3ByaW9yaXR5PVsnbGVmdCcsJ3JpZ2h0JywndG9wJywnYm90dG9tJ11dXG4gICAgICogUG9wcGVyIHdpbGwgdHJ5IHRvIHByZXZlbnQgb3ZlcmZsb3cgZm9sbG93aW5nIHRoZXNlIHByaW9yaXRpZXMgYnkgZGVmYXVsdCxcbiAgICAgKiB0aGVuLCBpdCBjb3VsZCBvdmVyZmxvdyBvbiB0aGUgbGVmdCBhbmQgb24gdG9wIG9mIHRoZSBgYm91bmRhcmllc0VsZW1lbnRgXG4gICAgICovXG4gICAgcHJpb3JpdHk6IFsnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJ10sXG4gICAgLyoqXG4gICAgICogQHByb3Age251bWJlcn0gcGFkZGluZz01XG4gICAgICogQW1vdW50IG9mIHBpeGVsIHVzZWQgdG8gZGVmaW5lIGEgbWluaW11bSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBib3VuZGFyaWVzXG4gICAgICogYW5kIHRoZSBwb3BwZXIuIFRoaXMgbWFrZXMgc3VyZSB0aGUgcG9wcGVyIGFsd2F5cyBoYXMgYSBsaXR0bGUgcGFkZGluZ1xuICAgICAqIGJldHdlZW4gdGhlIGVkZ2VzIG9mIGl0cyBjb250YWluZXJcbiAgICAgKi9cbiAgICBwYWRkaW5nOiA1LFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50PSdzY3JvbGxQYXJlbnQnXG4gICAgICogQm91bmRhcmllcyB1c2VkIGJ5IHRoZSBtb2RpZmllci4gQ2FuIGJlIGBzY3JvbGxQYXJlbnRgLCBgd2luZG93YCxcbiAgICAgKiBgdmlld3BvcnRgIG9yIGFueSBET00gZWxlbWVudC5cbiAgICAgKi9cbiAgICBib3VuZGFyaWVzRWxlbWVudDogJ3Njcm9sbFBhcmVudCdcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBtYWtlIHN1cmUgdGhlIHJlZmVyZW5jZSBhbmQgaXRzIHBvcHBlciBzdGF5IG5lYXIgZWFjaCBvdGhlclxuICAgKiB3aXRob3V0IGxlYXZpbmcgYW55IGdhcCBiZXR3ZWVuIHRoZSB0d28uIEVzcGVjaWFsbHkgdXNlZnVsIHdoZW4gdGhlIGFycm93IGlzXG4gICAqIGVuYWJsZWQgYW5kIHlvdSB3YW50IHRvIGVuc3VyZSB0aGF0IGl0IHBvaW50cyB0byBpdHMgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEl0IGNhcmVzIG9ubHkgYWJvdXQgdGhlIGZpcnN0IGF4aXMuIFlvdSBjYW4gc3RpbGwgaGF2ZSBwb3BwZXJzIHdpdGggbWFyZ2luXG4gICAqIGJldHdlZW4gdGhlIHBvcHBlciBhbmQgaXRzIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAga2VlcFRvZ2V0aGVyOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTQwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNDAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjoga2VlcFRvZ2V0aGVyXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoaXMgbW9kaWZpZXIgaXMgdXNlZCB0byBtb3ZlIHRoZSBgYXJyb3dFbGVtZW50YCBvZiB0aGUgcG9wcGVyIHRvIG1ha2VcbiAgICogc3VyZSBpdCBpcyBwb3NpdGlvbmVkIGJldHdlZW4gdGhlIHJlZmVyZW5jZSBlbGVtZW50IGFuZCBpdHMgcG9wcGVyIGVsZW1lbnQuXG4gICAqIEl0IHdpbGwgcmVhZCB0aGUgb3V0ZXIgc2l6ZSBvZiB0aGUgYGFycm93RWxlbWVudGAgbm9kZSB0byBkZXRlY3QgaG93IG1hbnlcbiAgICogcGl4ZWxzIG9mIGNvbmp1bmN0aW9uIGFyZSBuZWVkZWQuXG4gICAqXG4gICAqIEl0IGhhcyBubyBlZmZlY3QgaWYgbm8gYGFycm93RWxlbWVudGAgaXMgcHJvdmlkZWQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBhcnJvdzoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj01MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDUwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGFycm93LFxuICAgIC8qKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBlbGVtZW50PSdbeC1hcnJvd10nIC0gU2VsZWN0b3Igb3Igbm9kZSB1c2VkIGFzIGFycm93ICovXG4gICAgZWxlbWVudDogJ1t4LWFycm93XSdcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBmbGlwIHRoZSBwb3BwZXIncyBwbGFjZW1lbnQgd2hlbiBpdCBzdGFydHMgdG8gb3ZlcmxhcCBpdHNcbiAgICogcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqXG4gICAqIFJlcXVpcmVzIHRoZSBgcHJldmVudE92ZXJmbG93YCBtb2RpZmllciBiZWZvcmUgaXQgaW4gb3JkZXIgdG8gd29yay5cbiAgICpcbiAgICogKipOT1RFOioqIHRoaXMgbW9kaWZpZXIgd2lsbCBpbnRlcnJ1cHQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlIGFuZCB3aWxsXG4gICAqIHJlc3RhcnQgaXQgaWYgaXQgZGV0ZWN0cyB0aGUgbmVlZCB0byBmbGlwIHRoZSBwbGFjZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBmbGlwOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTYwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNjAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogZmxpcCxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7U3RyaW5nfEFycmF5fSBiZWhhdmlvcj0nZmxpcCdcbiAgICAgKiBUaGUgYmVoYXZpb3IgdXNlZCB0byBjaGFuZ2UgdGhlIHBvcHBlcidzIHBsYWNlbWVudC4gSXQgY2FuIGJlIG9uZSBvZlxuICAgICAqIGBmbGlwYCwgYGNsb2Nrd2lzZWAsIGBjb3VudGVyY2xvY2t3aXNlYCBvciBhbiBhcnJheSB3aXRoIGEgbGlzdCBvZiB2YWxpZFxuICAgICAqIHBsYWNlbWVudHMgKHdpdGggb3B0aW9uYWwgdmFyaWF0aW9ucylcbiAgICAgKi9cbiAgICBiZWhhdmlvcjogJ2ZsaXAnLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtudW1iZXJ9IHBhZGRpbmc9NVxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBmbGlwIGlmIGl0IGhpdHMgdGhlIGVkZ2VzIG9mIHRoZSBgYm91bmRhcmllc0VsZW1lbnRgXG4gICAgICovXG4gICAgcGFkZGluZzogNSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudD0ndmlld3BvcnQnXG4gICAgICogVGhlIGVsZW1lbnQgd2hpY2ggd2lsbCBkZWZpbmUgdGhlIGJvdW5kYXJpZXMgb2YgdGhlIHBvcHBlciBwb3NpdGlvbi5cbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgbmV2ZXIgYmUgcGxhY2VkIG91dHNpZGUgb2YgdGhlIGRlZmluZWQgYm91bmRhcmllc1xuICAgICAqIChleGNlcHQgaWYgYGtlZXBUb2dldGhlcmAgaXMgZW5hYmxlZClcbiAgICAgKi9cbiAgICBib3VuZGFyaWVzRWxlbWVudDogJ3ZpZXdwb3J0JyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZmxpcFZhcmlhdGlvbnM9ZmFsc2VcbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgc3dpdGNoIHBsYWNlbWVudCB2YXJpYXRpb24gYmV0d2VlbiBgLXN0YXJ0YCBhbmQgYC1lbmRgIHdoZW5cbiAgICAgKiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgb3ZlcmxhcHMgaXRzIGJvdW5kYXJpZXMuXG4gICAgICpcbiAgICAgKiBUaGUgb3JpZ2luYWwgcGxhY2VtZW50IHNob3VsZCBoYXZlIGEgc2V0IHZhcmlhdGlvbi5cbiAgICAgKi9cbiAgICBmbGlwVmFyaWF0aW9uczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGZsaXBWYXJpYXRpb25zQnlDb250ZW50PWZhbHNlXG4gICAgICogVGhlIHBvcHBlciB3aWxsIHN3aXRjaCBwbGFjZW1lbnQgdmFyaWF0aW9uIGJldHdlZW4gYC1zdGFydGAgYW5kIGAtZW5kYCB3aGVuXG4gICAgICogdGhlIHBvcHBlciBlbGVtZW50IG92ZXJsYXBzIGl0cyByZWZlcmVuY2UgYm91bmRhcmllcy5cbiAgICAgKlxuICAgICAqIFRoZSBvcmlnaW5hbCBwbGFjZW1lbnQgc2hvdWxkIGhhdmUgYSBzZXQgdmFyaWF0aW9uLlxuICAgICAqL1xuICAgIGZsaXBWYXJpYXRpb25zQnlDb250ZW50OiBmYWxzZVxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIG1ha2UgdGhlIHBvcHBlciBmbG93IHRvd2FyZCB0aGUgaW5uZXIgb2YgdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBCeSBkZWZhdWx0LCB3aGVuIHRoaXMgbW9kaWZpZXIgaXMgZGlzYWJsZWQsIHRoZSBwb3BwZXIgd2lsbCBiZSBwbGFjZWQgb3V0c2lkZVxuICAgKiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBpbm5lcjoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj03MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDcwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9ZmFsc2UgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogaW5uZXJcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBoaWRlIHRoZSBwb3BwZXIgd2hlbiBpdHMgcmVmZXJlbmNlIGVsZW1lbnQgaXMgb3V0c2lkZSBvZiB0aGVcbiAgICogcG9wcGVyIGJvdW5kYXJpZXMuIEl0IHdpbGwgc2V0IGEgYHgtb3V0LW9mLWJvdW5kYXJpZXNgIGF0dHJpYnV0ZSB3aGljaCBjYW5cbiAgICogYmUgdXNlZCB0byBoaWRlIHdpdGggYSBDU1Mgc2VsZWN0b3IgdGhlIHBvcHBlciB3aGVuIGl0cyByZWZlcmVuY2UgaXNcbiAgICogb3V0IG9mIGJvdW5kYXJpZXMuXG4gICAqXG4gICAqIFJlcXVpcmVzIHRoZSBgcHJldmVudE92ZXJmbG93YCBtb2RpZmllciBiZWZvcmUgaXQgaW4gb3JkZXIgdG8gd29yay5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGhpZGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9ODAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA4MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBoaWRlXG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBzdHlsZSB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyIGVsZW1lbnQgdG8gZ2V0c1xuICAgKiBwcm9wZXJseSBwb3NpdGlvbmVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhpcyBtb2RpZmllciB3aWxsIG5vdCB0b3VjaCB0aGUgRE9NLCBpdCBqdXN0IHByZXBhcmVzIHRoZSBzdHlsZXNcbiAgICogc28gdGhhdCBgYXBwbHlTdHlsZWAgbW9kaWZpZXIgY2FuIGFwcGx5IGl0LiBUaGlzIHNlcGFyYXRpb24gaXMgdXNlZnVsXG4gICAqIGluIGNhc2UgeW91IG5lZWQgdG8gcmVwbGFjZSBgYXBwbHlTdHlsZWAgd2l0aCBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvbi5cbiAgICpcbiAgICogVGhpcyBtb2RpZmllciBoYXMgYDg1MGAgYXMgYG9yZGVyYCB2YWx1ZSB0byBtYWludGFpbiBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAqIHdpdGggcHJldmlvdXMgdmVyc2lvbnMgb2YgUG9wcGVyLmpzLiBFeHBlY3QgdGhlIG1vZGlmaWVycyBvcmRlcmluZyBtZXRob2RcbiAgICogdG8gY2hhbmdlIGluIGZ1dHVyZSBtYWpvciB2ZXJzaW9ucyBvZiB0aGUgbGlicmFyeS5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGNvbXB1dGVTdHlsZToge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj04NTAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDg1MCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGNvbXB1dGVTdHlsZSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZ3B1QWNjZWxlcmF0aW9uPXRydWVcbiAgICAgKiBJZiB0cnVlLCBpdCB1c2VzIHRoZSBDU1MgM0QgdHJhbnNmb3JtYXRpb24gdG8gcG9zaXRpb24gdGhlIHBvcHBlci5cbiAgICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBgdG9wYCBhbmQgYGxlZnRgIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBncHVBY2NlbGVyYXRpb246IHRydWUsXG4gICAgLyoqXG4gICAgICogQHByb3Age3N0cmluZ30gW3g9J2JvdHRvbSddXG4gICAgICogV2hlcmUgdG8gYW5jaG9yIHRoZSBYIGF4aXMgKGBib3R0b21gIG9yIGB0b3BgKS4gQUtBIFggb2Zmc2V0IG9yaWdpbi5cbiAgICAgKiBDaGFuZ2UgdGhpcyBpZiB5b3VyIHBvcHBlciBzaG91bGQgZ3JvdyBpbiBhIGRpcmVjdGlvbiBkaWZmZXJlbnQgZnJvbSBgYm90dG9tYFxuICAgICAqL1xuICAgIHg6ICdib3R0b20nLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtzdHJpbmd9IFt4PSdsZWZ0J11cbiAgICAgKiBXaGVyZSB0byBhbmNob3IgdGhlIFkgYXhpcyAoYGxlZnRgIG9yIGByaWdodGApLiBBS0EgWSBvZmZzZXQgb3JpZ2luLlxuICAgICAqIENoYW5nZSB0aGlzIGlmIHlvdXIgcG9wcGVyIHNob3VsZCBncm93IGluIGEgZGlyZWN0aW9uIGRpZmZlcmVudCBmcm9tIGByaWdodGBcbiAgICAgKi9cbiAgICB5OiAncmlnaHQnXG4gIH0sXG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgdGhlIGNvbXB1dGVkIHN0eWxlcyB0byB0aGUgcG9wcGVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEFsbCB0aGUgRE9NIG1hbmlwdWxhdGlvbnMgYXJlIGxpbWl0ZWQgdG8gdGhpcyBtb2RpZmllci4gVGhpcyBpcyB1c2VmdWwgaW4gY2FzZVxuICAgKiB5b3Ugd2FudCB0byBpbnRlZ3JhdGUgUG9wcGVyLmpzIGluc2lkZSBhIGZyYW1ld29yayBvciB2aWV3IGxpYnJhcnkgYW5kIHlvdVxuICAgKiB3YW50IHRvIGRlbGVnYXRlIGFsbCB0aGUgRE9NIG1hbmlwdWxhdGlvbnMgdG8gaXQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCBpZiB5b3UgZGlzYWJsZSB0aGlzIG1vZGlmaWVyLCB5b3UgbXVzdCBtYWtlIHN1cmUgdGhlIHBvcHBlciBlbGVtZW50XG4gICAqIGhhcyBpdHMgcG9zaXRpb24gc2V0IHRvIGBhYnNvbHV0ZWAgYmVmb3JlIFBvcHBlci5qcyBjYW4gZG8gaXRzIHdvcmshXG4gICAqXG4gICAqIEp1c3QgZGlzYWJsZSB0aGlzIG1vZGlmaWVyIGFuZCBkZWZpbmUgeW91ciBvd24gdG8gYWNoaWV2ZSB0aGUgZGVzaXJlZCBlZmZlY3QuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBhcHBseVN0eWxlOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTkwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogOTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogYXBwbHlTdHlsZSxcbiAgICAvKiogQHByb3Age0Z1bmN0aW9ufSAqL1xuICAgIG9uTG9hZDogYXBwbHlTdHlsZU9uTG9hZCxcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMTAuMCwgdGhlIHByb3BlcnR5IG1vdmVkIHRvIGBjb21wdXRlU3R5bGVgIG1vZGlmaWVyXG4gICAgICogQHByb3Age0Jvb2xlYW59IGdwdUFjY2VsZXJhdGlvbj10cnVlXG4gICAgICogSWYgdHJ1ZSwgaXQgdXNlcyB0aGUgQ1NTIDNEIHRyYW5zZm9ybWF0aW9uIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIuXG4gICAgICogT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgYHRvcGAgYW5kIGBsZWZ0YCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiB1bmRlZmluZWRcbiAgfVxufTtcblxuLyoqXG4gKiBUaGUgYGRhdGFPYmplY3RgIGlzIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgaW5mb3JtYXRpb24gdXNlZCBieSBQb3BwZXIuanMuXG4gKiBUaGlzIG9iamVjdCBpcyBwYXNzZWQgdG8gbW9kaWZpZXJzIGFuZCB0byB0aGUgYG9uQ3JlYXRlYCBhbmQgYG9uVXBkYXRlYCBjYWxsYmFja3MuXG4gKiBAbmFtZSBkYXRhT2JqZWN0XG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5pbnN0YW5jZSBUaGUgUG9wcGVyLmpzIGluc3RhbmNlXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZGF0YS5wbGFjZW1lbnQgUGxhY2VtZW50IGFwcGxpZWQgdG8gcG9wcGVyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZGF0YS5vcmlnaW5hbFBsYWNlbWVudCBQbGFjZW1lbnQgb3JpZ2luYWxseSBkZWZpbmVkIG9uIGluaXRcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGF0YS5mbGlwcGVkIFRydWUgaWYgcG9wcGVyIGhhcyBiZWVuIGZsaXBwZWQgYnkgZmxpcCBtb2RpZmllclxuICogQHByb3BlcnR5IHtCb29sZWFufSBkYXRhLmhpZGUgVHJ1ZSBpZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgaXMgb3V0IG9mIGJvdW5kYXJpZXMsIHVzZWZ1bCB0byBrbm93IHdoZW4gdG8gaGlkZSB0aGUgcG9wcGVyXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBkYXRhLmFycm93RWxlbWVudCBOb2RlIHVzZWQgYXMgYXJyb3cgYnkgYXJyb3cgbW9kaWZpZXJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLnN0eWxlcyBBbnkgQ1NTIHByb3BlcnR5IGRlZmluZWQgaGVyZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlci4gSXQgZXhwZWN0cyB0aGUgSmF2YVNjcmlwdCBub21lbmNsYXR1cmUgKGVnLiBgbWFyZ2luQm90dG9tYClcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmFycm93U3R5bGVzIEFueSBDU1MgcHJvcGVydHkgZGVmaW5lZCBoZXJlIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyIGFycm93LiBJdCBleHBlY3RzIHRoZSBKYXZhU2NyaXB0IG5vbWVuY2xhdHVyZSAoZWcuIGBtYXJnaW5Cb3R0b21gKVxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuYm91bmRhcmllcyBPZmZzZXRzIG9mIHRoZSBwb3BwZXIgYm91bmRhcmllc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cyBUaGUgbWVhc3VyZW1lbnRzIG9mIHBvcHBlciwgcmVmZXJlbmNlIGFuZCBhcnJvdyBlbGVtZW50c1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5wb3BwZXIgYHRvcGAsIGBsZWZ0YCwgYHdpZHRoYCwgYGhlaWdodGAgdmFsdWVzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSBgdG9wYCwgYGxlZnRgLCBgd2lkdGhgLCBgaGVpZ2h0YCB2YWx1ZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMuYXJyb3ddIGB0b3BgIGFuZCBgbGVmdGAgb2Zmc2V0cywgb25seSBvbmUgb2YgdGhlbSB3aWxsIGJlIGRpZmZlcmVudCBmcm9tIDBcbiAqL1xuXG4vKipcbiAqIERlZmF1bHQgb3B0aW9ucyBwcm92aWRlZCB0byBQb3BwZXIuanMgY29uc3RydWN0b3IuPGJyIC8+XG4gKiBUaGVzZSBjYW4gYmUgb3ZlcnJpZGRlbiB1c2luZyB0aGUgYG9wdGlvbnNgIGFyZ3VtZW50IG9mIFBvcHBlci5qcy48YnIgLz5cbiAqIFRvIG92ZXJyaWRlIGFuIG9wdGlvbiwgc2ltcGx5IHBhc3MgYW4gb2JqZWN0IHdpdGggdGhlIHNhbWVcbiAqIHN0cnVjdHVyZSBvZiB0aGUgYG9wdGlvbnNgIG9iamVjdCwgYXMgdGhlIDNyZCBhcmd1bWVudC4gRm9yIGV4YW1wbGU6XG4gKiBgYGBcbiAqIG5ldyBQb3BwZXIocmVmLCBwb3AsIHtcbiAqICAgbW9kaWZpZXJzOiB7XG4gKiAgICAgcHJldmVudE92ZXJmbG93OiB7IGVuYWJsZWQ6IGZhbHNlIH1cbiAqICAgfVxuICogfSlcbiAqIGBgYFxuICogQHR5cGUge09iamVjdH1cbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xudmFyIERlZmF1bHRzID0ge1xuICAvKipcbiAgICogUG9wcGVyJ3MgcGxhY2VtZW50LlxuICAgKiBAcHJvcCB7UG9wcGVyLnBsYWNlbWVudHN9IHBsYWNlbWVudD0nYm90dG9tJ1xuICAgKi9cbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcblxuICAvKipcbiAgICogU2V0IHRoaXMgdG8gdHJ1ZSBpZiB5b3Ugd2FudCBwb3BwZXIgdG8gcG9zaXRpb24gaXQgc2VsZiBpbiAnZml4ZWQnIG1vZGVcbiAgICogQHByb3Age0Jvb2xlYW59IHBvc2l0aW9uRml4ZWQ9ZmFsc2VcbiAgICovXG4gIHBvc2l0aW9uRml4ZWQ6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGV2ZW50cyAocmVzaXplLCBzY3JvbGwpIGFyZSBpbml0aWFsbHkgZW5hYmxlZC5cbiAgICogQHByb3Age0Jvb2xlYW59IGV2ZW50c0VuYWJsZWQ9dHJ1ZVxuICAgKi9cbiAgZXZlbnRzRW5hYmxlZDogdHJ1ZSxcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgaWYgeW91IHdhbnQgdG8gYXV0b21hdGljYWxseSByZW1vdmUgdGhlIHBvcHBlciB3aGVuXG4gICAqIHlvdSBjYWxsIHRoZSBgZGVzdHJveWAgbWV0aG9kLlxuICAgKiBAcHJvcCB7Qm9vbGVhbn0gcmVtb3ZlT25EZXN0cm95PWZhbHNlXG4gICAqL1xuICByZW1vdmVPbkRlc3Ryb3k6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgcG9wcGVyIGlzIGNyZWF0ZWQuPGJyIC8+XG4gICAqIEJ5IGRlZmF1bHQsIGl0IGlzIHNldCB0byBuby1vcC48YnIgLz5cbiAgICogQWNjZXNzIFBvcHBlci5qcyBpbnN0YW5jZSB3aXRoIGBkYXRhLmluc3RhbmNlYC5cbiAgICogQHByb3Age29uQ3JlYXRlfVxuICAgKi9cbiAgb25DcmVhdGU6IGZ1bmN0aW9uIG9uQ3JlYXRlKCkge30sXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBwb3BwZXIgaXMgdXBkYXRlZC4gVGhpcyBjYWxsYmFjayBpcyBub3QgY2FsbGVkXG4gICAqIG9uIHRoZSBpbml0aWFsaXphdGlvbi9jcmVhdGlvbiBvZiB0aGUgcG9wcGVyLCBidXQgb25seSBvbiBzdWJzZXF1ZW50XG4gICAqIHVwZGF0ZXMuPGJyIC8+XG4gICAqIEJ5IGRlZmF1bHQsIGl0IGlzIHNldCB0byBuby1vcC48YnIgLz5cbiAgICogQWNjZXNzIFBvcHBlci5qcyBpbnN0YW5jZSB3aXRoIGBkYXRhLmluc3RhbmNlYC5cbiAgICogQHByb3Age29uVXBkYXRlfVxuICAgKi9cbiAgb25VcGRhdGU6IGZ1bmN0aW9uIG9uVXBkYXRlKCkge30sXG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgbW9kaWZpZXJzIHVzZWQgdG8gbW9kaWZ5IHRoZSBvZmZzZXRzIGJlZm9yZSB0aGV5IGFyZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIuXG4gICAqIFRoZXkgcHJvdmlkZSBtb3N0IG9mIHRoZSBmdW5jdGlvbmFsaXRpZXMgb2YgUG9wcGVyLmpzLlxuICAgKiBAcHJvcCB7bW9kaWZpZXJzfVxuICAgKi9cbiAgbW9kaWZpZXJzOiBtb2RpZmllcnNcbn07XG5cbi8qKlxuICogQGNhbGxiYWNrIG9uQ3JlYXRlXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvblVwZGF0ZVxuICogQHBhcmFtIHtkYXRhT2JqZWN0fSBkYXRhXG4gKi9cblxuLy8gVXRpbHNcbi8vIE1ldGhvZHNcbnZhciBQb3BwZXIgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IFBvcHBlci5qcyBpbnN0YW5jZS5cbiAgICogQGNsYXNzIFBvcHBlclxuICAgKiBAcGFyYW0ge0VsZW1lbnR8cmVmZXJlbmNlT2JqZWN0fSByZWZlcmVuY2UgLSBUaGUgcmVmZXJlbmNlIGVsZW1lbnQgdXNlZCB0byBwb3NpdGlvbiB0aGUgcG9wcGVyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcG9wcGVyIC0gVGhlIEhUTUwgLyBYTUwgZWxlbWVudCB1c2VkIGFzIHRoZSBwb3BwZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBZb3VyIGN1c3RvbSBvcHRpb25zIHRvIG92ZXJyaWRlIHRoZSBvbmVzIGRlZmluZWQgaW4gW0RlZmF1bHRzXSgjZGVmYXVsdHMpXG4gICAqIEByZXR1cm4ge09iamVjdH0gaW5zdGFuY2UgLSBUaGUgZ2VuZXJhdGVkIFBvcHBlci5qcyBpbnN0YW5jZVxuICAgKi9cbiAgZnVuY3Rpb24gUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBQb3BwZXIpO1xuXG4gICAgdGhpcy5zY2hlZHVsZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX3RoaXMudXBkYXRlKTtcbiAgICB9O1xuXG4gICAgLy8gbWFrZSB1cGRhdGUoKSBkZWJvdW5jZWQsIHNvIHRoYXQgaXQgb25seSBydW5zIGF0IG1vc3Qgb25jZS1wZXItdGlja1xuICAgIHRoaXMudXBkYXRlID0gZGVib3VuY2UodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICAvLyB3aXRoIHt9IHdlIGNyZWF0ZSBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgb3B0aW9ucyBpbnNpZGUgaXRcbiAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgUG9wcGVyLkRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIC8vIGluaXQgc3RhdGVcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNEZXN0cm95ZWQ6IGZhbHNlLFxuICAgICAgaXNDcmVhdGVkOiBmYWxzZSxcbiAgICAgIHNjcm9sbFBhcmVudHM6IFtdXG4gICAgfTtcblxuICAgIC8vIGdldCByZWZlcmVuY2UgYW5kIHBvcHBlciBlbGVtZW50cyAoYWxsb3cgalF1ZXJ5IHdyYXBwZXJzKVxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlICYmIHJlZmVyZW5jZS5qcXVlcnkgPyByZWZlcmVuY2VbMF0gOiByZWZlcmVuY2U7XG4gICAgdGhpcy5wb3BwZXIgPSBwb3BwZXIgJiYgcG9wcGVyLmpxdWVyeSA/IHBvcHBlclswXSA6IHBvcHBlcjtcblxuICAgIC8vIERlZXAgbWVyZ2UgbW9kaWZpZXJzIG9wdGlvbnNcbiAgICB0aGlzLm9wdGlvbnMubW9kaWZpZXJzID0ge307XG4gICAgT2JqZWN0LmtleXMoX2V4dGVuZHMoe30sIFBvcHBlci5EZWZhdWx0cy5tb2RpZmllcnMsIG9wdGlvbnMubW9kaWZpZXJzKSkuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgX3RoaXMub3B0aW9ucy5tb2RpZmllcnNbbmFtZV0gPSBfZXh0ZW5kcyh7fSwgUG9wcGVyLkRlZmF1bHRzLm1vZGlmaWVyc1tuYW1lXSB8fCB7fSwgb3B0aW9ucy5tb2RpZmllcnMgPyBvcHRpb25zLm1vZGlmaWVyc1tuYW1lXSA6IHt9KTtcbiAgICB9KTtcblxuICAgIC8vIFJlZmFjdG9yaW5nIG1vZGlmaWVycycgbGlzdCAoT2JqZWN0ID0+IEFycmF5KVxuICAgIHRoaXMubW9kaWZpZXJzID0gT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1vZGlmaWVycykubWFwKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBuYW1lOiBuYW1lXG4gICAgICB9LCBfdGhpcy5vcHRpb25zLm1vZGlmaWVyc1tuYW1lXSk7XG4gICAgfSlcbiAgICAvLyBzb3J0IHRoZSBtb2RpZmllcnMgYnkgb3JkZXJcbiAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xuICAgIH0pO1xuXG4gICAgLy8gbW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSB3aGVuIFBvcHBlci5qcyBnZXQgaW5pdGVkXG4gICAgLy8gc3VjaCBjb2RlIGlzIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIG9mIGl0cyBtb2RpZmllclxuICAgIC8vIHRoZXkgY291bGQgYWRkIG5ldyBwcm9wZXJ0aWVzIHRvIHRoZWlyIG9wdGlvbnMgY29uZmlndXJhdGlvblxuICAgIC8vIEJFIEFXQVJFOiBkb24ndCBhZGQgb3B0aW9ucyB0byBgb3B0aW9ucy5tb2RpZmllcnMubmFtZWAgYnV0IHRvIGBtb2RpZmllck9wdGlvbnNgIVxuICAgIHRoaXMubW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyT3B0aW9ucykge1xuICAgICAgaWYgKG1vZGlmaWVyT3B0aW9ucy5lbmFibGVkICYmIGlzRnVuY3Rpb24obW9kaWZpZXJPcHRpb25zLm9uTG9hZCkpIHtcbiAgICAgICAgbW9kaWZpZXJPcHRpb25zLm9uTG9hZChfdGhpcy5yZWZlcmVuY2UsIF90aGlzLnBvcHBlciwgX3RoaXMub3B0aW9ucywgbW9kaWZpZXJPcHRpb25zLCBfdGhpcy5zdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBmaXJlIHRoZSBmaXJzdCB1cGRhdGUgdG8gcG9zaXRpb24gdGhlIHBvcHBlciBpbiB0aGUgcmlnaHQgcGxhY2VcbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgdmFyIGV2ZW50c0VuYWJsZWQgPSB0aGlzLm9wdGlvbnMuZXZlbnRzRW5hYmxlZDtcbiAgICBpZiAoZXZlbnRzRW5hYmxlZCkge1xuICAgICAgLy8gc2V0dXAgZXZlbnQgbGlzdGVuZXJzLCB0aGV5IHdpbGwgdGFrZSBjYXJlIG9mIHVwZGF0ZSB0aGUgcG9zaXRpb24gaW4gc3BlY2lmaWMgc2l0dWF0aW9uc1xuICAgICAgdGhpcy5lbmFibGVFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCA9IGV2ZW50c0VuYWJsZWQ7XG4gIH1cblxuICAvLyBXZSBjYW4ndCB1c2UgY2xhc3MgcHJvcGVydGllcyBiZWNhdXNlIHRoZXkgZG9uJ3QgZ2V0IGxpc3RlZCBpbiB0aGVcbiAgLy8gY2xhc3MgcHJvdG90eXBlIGFuZCBicmVhayBzdHVmZiBsaWtlIFNpbm9uIHN0dWJzXG5cblxuICBjcmVhdGVDbGFzcyhQb3BwZXIsIFt7XG4gICAga2V5OiAndXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlJCQxKCkge1xuICAgICAgcmV0dXJuIHVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95JCQxKCkge1xuICAgICAgcmV0dXJuIGRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmFibGVFdmVudExpc3RlbmVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuYWJsZUV2ZW50TGlzdGVuZXJzJCQxKCkge1xuICAgICAgcmV0dXJuIGVuYWJsZUV2ZW50TGlzdGVuZXJzLmNhbGwodGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGlzYWJsZUV2ZW50TGlzdGVuZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzYWJsZUV2ZW50TGlzdGVuZXJzJCQxKCkge1xuICAgICAgcmV0dXJuIGRpc2FibGVFdmVudExpc3RlbmVycy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjaGVkdWxlcyBhbiB1cGRhdGUuIEl0IHdpbGwgcnVuIG9uIHRoZSBuZXh0IFVJIHVwZGF0ZSBhdmFpbGFibGUuXG4gICAgICogQG1ldGhvZCBzY2hlZHVsZVVwZGF0ZVxuICAgICAqIEBtZW1iZXJvZiBQb3BwZXJcbiAgICAgKi9cblxuXG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiB1dGlsaXRpZXMgdXNlZnVsIHdoZW4gd3JpdGluZyBjdXN0b20gbW9kaWZpZXJzLlxuICAgICAqIFN0YXJ0aW5nIGZyb20gdmVyc2lvbiAxLjcsIHRoaXMgbWV0aG9kIGlzIGF2YWlsYWJsZSBvbmx5IGlmIHlvdVxuICAgICAqIGluY2x1ZGUgYHBvcHBlci11dGlscy5qc2AgYmVmb3JlIGBwb3BwZXIuanNgLlxuICAgICAqXG4gICAgICogKipERVBSRUNBVElPTioqOiBUaGlzIHdheSB0byBhY2Nlc3MgUG9wcGVyVXRpbHMgaXMgZGVwcmVjYXRlZFxuICAgICAqIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdjIhIFVzZSB0aGUgUG9wcGVyVXRpbHMgbW9kdWxlIGRpcmVjdGx5IGluc3RlYWQuXG4gICAgICogRHVlIHRvIHRoZSBoaWdoIGluc3RhYmlsaXR5IG9mIHRoZSBtZXRob2RzIGNvbnRhaW5lZCBpbiBVdGlscywgd2UgY2FuJ3RcbiAgICAgKiBndWFyYW50ZWUgdGhlbSB0byBmb2xsb3cgc2VtdmVyLiBVc2UgdGhlbSBhdCB5b3VyIG93biByaXNrIVxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjhcbiAgICAgKiBAbWVtYmVyIFV0aWxzXG4gICAgICogQG1lbWJlcm9mIFBvcHBlclxuICAgICAqL1xuXG4gIH1dKTtcbiAgcmV0dXJuIFBvcHBlcjtcbn0oKTtcblxuLyoqXG4gKiBUaGUgYHJlZmVyZW5jZU9iamVjdGAgaXMgYW4gb2JqZWN0IHRoYXQgcHJvdmlkZXMgYW4gaW50ZXJmYWNlIGNvbXBhdGlibGUgd2l0aCBQb3BwZXIuanNcbiAqIGFuZCBsZXRzIHlvdSB1c2UgaXQgYXMgcmVwbGFjZW1lbnQgb2YgYSByZWFsIERPTSBub2RlLjxiciAvPlxuICogWW91IGNhbiB1c2UgdGhpcyBtZXRob2QgdG8gcG9zaXRpb24gYSBwb3BwZXIgcmVsYXRpdmVseSB0byBhIHNldCBvZiBjb29yZGluYXRlc1xuICogaW4gY2FzZSB5b3UgZG9uJ3QgaGF2ZSBhIERPTSBub2RlIHRvIHVzZSBhcyByZWZlcmVuY2UuXG4gKlxuICogYGBgXG4gKiBuZXcgUG9wcGVyKHJlZmVyZW5jZU9iamVjdCwgcG9wcGVyTm9kZSk7XG4gKiBgYGBcbiAqXG4gKiBOQjogVGhpcyBmZWF0dXJlIGlzbid0IHN1cHBvcnRlZCBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMC5cbiAqIEBuYW1lIHJlZmVyZW5jZU9iamVjdFxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZGF0YS5nZXRCb3VuZGluZ0NsaWVudFJlY3RcbiAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc2V0IG9mIGNvb3JkaW5hdGVzIGNvbXBhdGlibGUgd2l0aCB0aGUgbmF0aXZlIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIG1ldGhvZC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhLmNsaWVudFdpZHRoXG4gKiBBbiBFUzYgZ2V0dGVyIHRoYXQgd2lsbCByZXR1cm4gdGhlIHdpZHRoIG9mIHRoZSB2aXJ0dWFsIHJlZmVyZW5jZSBlbGVtZW50LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGRhdGEuY2xpZW50SGVpZ2h0XG4gKiBBbiBFUzYgZ2V0dGVyIHRoYXQgd2lsbCByZXR1cm4gdGhlIGhlaWdodCBvZiB0aGUgdmlydHVhbCByZWZlcmVuY2UgZWxlbWVudC5cbiAqL1xuXG5cblBvcHBlci5VdGlscyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbCkuUG9wcGVyVXRpbHM7XG5Qb3BwZXIucGxhY2VtZW50cyA9IHBsYWNlbWVudHM7XG5Qb3BwZXIuRGVmYXVsdHMgPSBEZWZhdWx0cztcblxuZXhwb3J0IGRlZmF1bHQgUG9wcGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9wcGVyLmpzLm1hcFxuIiwiLyohXG4qIHRhYmJhYmxlIDYuMi4wXG4qIEBsaWNlbnNlIE1JVCwgaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvdGFiYmFibGUvYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cbi8vIE5PVEU6IHNlcGFyYXRlIGA6bm90KClgIHNlbGVjdG9ycyBoYXMgYnJvYWRlciBicm93c2VyIHN1cHBvcnQgdGhhbiB0aGUgbmV3ZXJcbi8vICBgOm5vdChbaW5lcnRdLCBbaW5lcnRdICopYCAoRmViIDIwMjMpXG4vLyBDQVJFRlVMOiBKU0RvbSBkb2VzIG5vdCBzdXBwb3J0IGA6bm90KFtpbmVydF0gKilgIGFzIGEgc2VsZWN0b3I7IHVzaW5nIGl0IGNhdXNlc1xuLy8gIHRoZSBlbnRpcmUgcXVlcnkgdG8gZmFpbCwgcmVzdWx0aW5nIGluIG5vIG5vZGVzIGZvdW5kLCB3aGljaCB3aWxsIGJyZWFrIGEgbG90XG4vLyAgb2YgdGhpbmdzLi4uIHNvIHdlIGhhdmUgdG8gcmVseSBvbiBKUyB0byBpZGVudGlmeSBub2RlcyBpbnNpZGUgYW4gaW5lcnQgY29udGFpbmVyXG52YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gWydpbnB1dDpub3QoW2luZXJ0XSknLCAnc2VsZWN0Om5vdChbaW5lcnRdKScsICd0ZXh0YXJlYTpub3QoW2luZXJ0XSknLCAnYVtocmVmXTpub3QoW2luZXJ0XSknLCAnYnV0dG9uOm5vdChbaW5lcnRdKScsICdbdGFiaW5kZXhdOm5vdChzbG90KTpub3QoW2luZXJ0XSknLCAnYXVkaW9bY29udHJvbHNdOm5vdChbaW5lcnRdKScsICd2aWRlb1tjb250cm9sc106bm90KFtpbmVydF0pJywgJ1tjb250ZW50ZWRpdGFibGVdOm5vdChbY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIl0pOm5vdChbaW5lcnRdKScsICdkZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZTpub3QoW2luZXJ0XSknLCAnZGV0YWlsczpub3QoW2luZXJ0XSknXTtcbnZhciBjYW5kaWRhdGVTZWxlY3RvciA9IC8qICNfX1BVUkVfXyAqL2NhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKCcsJyk7XG52YXIgTm9FbGVtZW50ID0gdHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnO1xudmFyIG1hdGNoZXMgPSBOb0VsZW1lbnQgPyBmdW5jdGlvbiAoKSB7fSA6IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xudmFyIGdldFJvb3ROb2RlID0gIU5vRWxlbWVudCAmJiBFbGVtZW50LnByb3RvdHlwZS5nZXRSb290Tm9kZSA/IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHZhciBfZWxlbWVudCRnZXRSb290Tm9kZTtcbiAgcmV0dXJuIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9lbGVtZW50JGdldFJvb3ROb2RlID0gZWxlbWVudC5nZXRSb290Tm9kZSkgPT09IG51bGwgfHwgX2VsZW1lbnQkZ2V0Um9vdE5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lbGVtZW50JGdldFJvb3ROb2RlLmNhbGwoZWxlbWVudCk7XG59IDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5vd25lckRvY3VtZW50O1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgbm9kZSBpcyBpbmVydCBvciBpbiBhbiBpbmVydCBhbmNlc3Rvci5cbiAqIEBwYXJhbSB7RWxlbWVudH0gW25vZGVdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtsb29rVXBdIElmIHRydWUgYW5kIGBub2RlYCBpcyBub3QgaW5lcnQsIGxvb2tzIHVwIGF0IGFuY2VzdG9ycyB0b1xuICogIHNlZSBpZiBhbnkgb2YgdGhlbSBhcmUgaW5lcnQuIElmIGZhbHNlLCBvbmx5IGBub2RlYCBpdHNlbGYgaXMgY29uc2lkZXJlZC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIGluZXJ0IGl0c2VsZiBvciBieSB3YXkgb2YgYmVpbmcgaW4gYW4gaW5lcnQgYW5jZXN0b3IuXG4gKiAgRmFsc2UgaWYgYG5vZGVgIGlzIGZhbHN5LlxuICovXG52YXIgaXNJbmVydCA9IGZ1bmN0aW9uIGlzSW5lcnQobm9kZSwgbG9va1VwKSB7XG4gIHZhciBfbm9kZSRnZXRBdHRyaWJ1dGU7XG4gIGlmIChsb29rVXAgPT09IHZvaWQgMCkge1xuICAgIGxvb2tVcCA9IHRydWU7XG4gIH1cbiAgLy8gQ0FSRUZVTDogSlNEb20gZG9lcyBub3Qgc3VwcG9ydCBpbmVydCBhdCBhbGwsIHNvIHdlIGNhbid0IHVzZSB0aGUgYEhUTUxFbGVtZW50LmluZXJ0YFxuICAvLyAgSlMgQVBJIHByb3BlcnR5OyB3ZSBoYXZlIHRvIGNoZWNrIHRoZSBhdHRyaWJ1dGUsIHdoaWNoIGNhbiBlaXRoZXIgYmUgZW1wdHkgb3IgJ3RydWUnO1xuICAvLyAgaWYgaXQncyBgbnVsbGAgKG5vdCBzcGVjaWZpZWQpIG9yICdmYWxzZScsIGl0J3MgYW4gYWN0aXZlIGVsZW1lbnRcbiAgdmFyIGluZXJ0QXR0ID0gbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX25vZGUkZ2V0QXR0cmlidXRlID0gbm9kZS5nZXRBdHRyaWJ1dGUpID09PSBudWxsIHx8IF9ub2RlJGdldEF0dHJpYnV0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25vZGUkZ2V0QXR0cmlidXRlLmNhbGwobm9kZSwgJ2luZXJ0Jyk7XG4gIHZhciBpbmVydCA9IGluZXJ0QXR0ID09PSAnJyB8fCBpbmVydEF0dCA9PT0gJ3RydWUnO1xuXG4gIC8vIE5PVEU6IHRoaXMgY291bGQgYWxzbyBiZSBoYW5kbGVkIHdpdGggYG5vZGUubWF0Y2hlcygnW2luZXJ0XSwgOmlzKFtpbmVydF0gKiknKWBcbiAgLy8gIGlmIGl0IHdlcmVuJ3QgZm9yIGBtYXRjaGVzKClgIG5vdCBiZWluZyBhIGZ1bmN0aW9uIG9uIHNoYWRvdyByb290czsgdGhlIGZvbGxvd2luZ1xuICAvLyAgY29kZSB3b3JrcyBmb3IgYW55IGtpbmQgb2Ygbm9kZVxuICAvLyBDQVJFRlVMOiBKU0RvbSBkb2VzIG5vdCBhcHBlYXIgdG8gc3VwcG9ydCBjZXJ0YWluIHNlbGVjdG9ycyBsaWtlIGA6bm90KFtpbmVydF0gKilgXG4gIC8vICBzbyBpdCBsaWtlbHkgd291bGQgbm90IHN1cHBvcnQgYDppcyhbaW5lcnRdICopYCBlaXRoZXIuLi5cbiAgdmFyIHJlc3VsdCA9IGluZXJ0IHx8IGxvb2tVcCAmJiBub2RlICYmIGlzSW5lcnQobm9kZS5wYXJlbnROb2RlKTsgLy8gcmVjdXJzaXZlXG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIG5vZGUncyBjb250ZW50IGlzIGVkaXRhYmxlLlxuICogQHBhcmFtIHtFbGVtZW50fSBbbm9kZV1cbiAqIEByZXR1cm5zIFRydWUgaWYgaXQncyBjb250ZW50LWVkaXRhYmxlOyBmYWxzZSBpZiBpdCdzIG5vdCBvciBgbm9kZWAgaXMgZmFsc3kuXG4gKi9cbnZhciBpc0NvbnRlbnRFZGl0YWJsZSA9IGZ1bmN0aW9uIGlzQ29udGVudEVkaXRhYmxlKG5vZGUpIHtcbiAgdmFyIF9ub2RlJGdldEF0dHJpYnV0ZTI7XG4gIC8vIENBUkVGVUw6IEpTRG9tIGRvZXMgbm90IHN1cHBvcnQgdGhlIGBIVE1MRWxlbWVudC5pc0NvbnRlbnRFZGl0YWJsZWAgQVBJIHNvIHdlIGhhdmVcbiAgLy8gIHRvIHVzZSB0aGUgYXR0cmlidXRlIGRpcmVjdGx5IHRvIGNoZWNrIGZvciB0aGlzLCB3aGljaCBjYW4gZWl0aGVyIGJlIGVtcHR5IG9yICd0cnVlJztcbiAgLy8gIGlmIGl0J3MgYG51bGxgIChub3Qgc3BlY2lmaWVkKSBvciAnZmFsc2UnLCBpdCdzIGEgbm9uLWVkaXRhYmxlIGVsZW1lbnRcbiAgdmFyIGF0dFZhbHVlID0gbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX25vZGUkZ2V0QXR0cmlidXRlMiA9IG5vZGUuZ2V0QXR0cmlidXRlKSA9PT0gbnVsbCB8fCBfbm9kZSRnZXRBdHRyaWJ1dGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm9kZSRnZXRBdHRyaWJ1dGUyLmNhbGwobm9kZSwgJ2NvbnRlbnRlZGl0YWJsZScpO1xuICByZXR1cm4gYXR0VmFsdWUgPT09ICcnIHx8IGF0dFZhbHVlID09PSAndHJ1ZSc7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWwgY29udGFpbmVyIHRvIGNoZWNrIGluXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVDb250YWluZXIgYWRkIGNvbnRhaW5lciB0byBjaGVja1xuICogQHBhcmFtIHsobm9kZTogRWxlbWVudCkgPT4gYm9vbGVhbn0gZmlsdGVyIGZpbHRlciBjYW5kaWRhdGVzXG4gKiBAcmV0dXJucyB7RWxlbWVudFtdfVxuICovXG52YXIgZ2V0Q2FuZGlkYXRlcyA9IGZ1bmN0aW9uIGdldENhbmRpZGF0ZXMoZWwsIGluY2x1ZGVDb250YWluZXIsIGZpbHRlcikge1xuICAvLyBldmVuIGlmIGBpbmNsdWRlQ29udGFpbmVyPWZhbHNlYCwgd2Ugc3RpbGwgaGF2ZSB0byBjaGVjayBpdCBmb3IgaW5lcnRuZXNzIGJlY2F1c2VcbiAgLy8gIGlmIGl0J3MgaW5lcnQsIGFsbCBpdHMgY2hpbGRyZW4gYXJlIGluZXJ0XG4gIGlmIChpc0luZXJ0KGVsKSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgY2FuZGlkYXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShlbC5xdWVyeVNlbGVjdG9yQWxsKGNhbmRpZGF0ZVNlbGVjdG9yKSk7XG4gIGlmIChpbmNsdWRlQ29udGFpbmVyICYmIG1hdGNoZXMuY2FsbChlbCwgY2FuZGlkYXRlU2VsZWN0b3IpKSB7XG4gICAgY2FuZGlkYXRlcy51bnNoaWZ0KGVsKTtcbiAgfVxuICBjYW5kaWRhdGVzID0gY2FuZGlkYXRlcy5maWx0ZXIoZmlsdGVyKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuXG4vKipcbiAqIEBjYWxsYmFjayBHZXRTaGFkb3dSb290XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgdG8gY2hlY2sgZm9yIHNoYWRvdyByb290XG4gKiBAcmV0dXJucyB7U2hhZG93Um9vdHxib29sZWFufSBTaGFkb3dSb290IGlmIGF2YWlsYWJsZSBvciBib29sZWFuIGluZGljYXRpbmcgaWYgYSBzaGFkb3dSb290IGlzIGF0dGFjaGVkIGJ1dCBub3QgYXZhaWxhYmxlLlxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIFNoYWRvd1Jvb3RGaWx0ZXJcbiAqIEBwYXJhbSB7RWxlbWVudH0gc2hhZG93SG9zdE5vZGUgdGhlIGVsZW1lbnQgd2hpY2ggY29udGFpbnMgc2hhZG93IGNvbnRlbnRcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGEgc2hhZG93IHJvb3QgY291bGQgcG90ZW50aWFsbHkgY29udGFpbiB2YWxpZCBjYW5kaWRhdGVzLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQ2FuZGlkYXRlU2NvcGVcbiAqIEBwcm9wZXJ0eSB7RWxlbWVudH0gc2NvcGVQYXJlbnQgY29udGFpbnMgaW5uZXIgY2FuZGlkYXRlc1xuICogQHByb3BlcnR5IHtFbGVtZW50W119IGNhbmRpZGF0ZXMgbGlzdCBvZiBjYW5kaWRhdGVzIGZvdW5kIGluIHRoZSBzY29wZSBwYXJlbnRcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEl0ZXJhdGl2ZU9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7R2V0U2hhZG93Um9vdHxib29sZWFufSBnZXRTaGFkb3dSb290IHRydWUgaWYgc2hhZG93IHN1cHBvcnQgaXMgZW5hYmxlZDsgZmFsc3kgaWYgbm90O1xuICogIGlmIGEgZnVuY3Rpb24sIGltcGxpZXMgc2hhZG93IHN1cHBvcnQgaXMgZW5hYmxlZCBhbmQgZWl0aGVyIHJldHVybnMgdGhlIHNoYWRvdyByb290IG9mIGFuIGVsZW1lbnRcbiAqICBvciBhIGJvb2xlYW4gc3RhdGluZyBpZiBpdCBoYXMgYW4gdW5kaXNjbG9zZWQgc2hhZG93IHJvb3RcbiAqIEBwcm9wZXJ0eSB7KG5vZGU6IEVsZW1lbnQpID0+IGJvb2xlYW59IGZpbHRlciBmaWx0ZXIgY2FuZGlkYXRlc1xuICogQHByb3BlcnR5IHtib29sZWFufSBmbGF0dGVuIGlmIHRydWUgdGhlbiByZXN1bHQgd2lsbCBmbGF0dGVuIGFueSBDYW5kaWRhdGVTY29wZSBpbnRvIHRoZSByZXR1cm5lZCBsaXN0XG4gKiBAcHJvcGVydHkge1NoYWRvd1Jvb3RGaWx0ZXJ9IHNoYWRvd1Jvb3RGaWx0ZXIgZmlsdGVyIHNoYWRvdyByb290cztcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudFtdfSBlbGVtZW50cyBsaXN0IG9mIGVsZW1lbnQgY29udGFpbmVycyB0byBtYXRjaCBjYW5kaWRhdGVzIGZyb21cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZUNvbnRhaW5lciBhZGQgY29udGFpbmVyIGxpc3QgdG8gY2hlY2tcbiAqIEBwYXJhbSB7SXRlcmF0aXZlT3B0aW9uc30gb3B0aW9uc1xuICogQHJldHVybnMge0FycmF5LjxFbGVtZW50fENhbmRpZGF0ZVNjb3BlPn1cbiAqL1xudmFyIGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseSA9IGZ1bmN0aW9uIGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseShlbGVtZW50cywgaW5jbHVkZUNvbnRhaW5lciwgb3B0aW9ucykge1xuICB2YXIgY2FuZGlkYXRlcyA9IFtdO1xuICB2YXIgZWxlbWVudHNUb0NoZWNrID0gQXJyYXkuZnJvbShlbGVtZW50cyk7XG4gIHdoaWxlIChlbGVtZW50c1RvQ2hlY2subGVuZ3RoKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50c1RvQ2hlY2suc2hpZnQoKTtcbiAgICBpZiAoaXNJbmVydChlbGVtZW50LCBmYWxzZSkpIHtcbiAgICAgIC8vIG5vIG5lZWQgdG8gbG9vayB1cCBzaW5jZSB3ZSdyZSBkcmlsbGluZyBkb3duXG4gICAgICAvLyBhbnl0aGluZyBpbnNpZGUgdGhpcyBjb250YWluZXIgd2lsbCBhbHNvIGJlIGluZXJ0XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ1NMT1QnKSB7XG4gICAgICAvLyBhZGQgc2hhZG93IGRvbSBzbG90IHNjb3BlIChzbG90IGl0c2VsZiBjYW5ub3QgYmUgZm9jdXNhYmxlKVxuICAgICAgdmFyIGFzc2lnbmVkID0gZWxlbWVudC5hc3NpZ25lZEVsZW1lbnRzKCk7XG4gICAgICB2YXIgY29udGVudCA9IGFzc2lnbmVkLmxlbmd0aCA/IGFzc2lnbmVkIDogZWxlbWVudC5jaGlsZHJlbjtcbiAgICAgIHZhciBuZXN0ZWRDYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KGNvbnRlbnQsIHRydWUsIG9wdGlvbnMpO1xuICAgICAgaWYgKG9wdGlvbnMuZmxhdHRlbikge1xuICAgICAgICBjYW5kaWRhdGVzLnB1c2guYXBwbHkoY2FuZGlkYXRlcywgbmVzdGVkQ2FuZGlkYXRlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5kaWRhdGVzLnB1c2goe1xuICAgICAgICAgIHNjb3BlUGFyZW50OiBlbGVtZW50LFxuICAgICAgICAgIGNhbmRpZGF0ZXM6IG5lc3RlZENhbmRpZGF0ZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNoZWNrIGNhbmRpZGF0ZSBlbGVtZW50XG4gICAgICB2YXIgdmFsaWRDYW5kaWRhdGUgPSBtYXRjaGVzLmNhbGwoZWxlbWVudCwgY2FuZGlkYXRlU2VsZWN0b3IpO1xuICAgICAgaWYgKHZhbGlkQ2FuZGlkYXRlICYmIG9wdGlvbnMuZmlsdGVyKGVsZW1lbnQpICYmIChpbmNsdWRlQ29udGFpbmVyIHx8ICFlbGVtZW50cy5pbmNsdWRlcyhlbGVtZW50KSkpIHtcbiAgICAgICAgY2FuZGlkYXRlcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICAvLyBpdGVyYXRlIG92ZXIgc2hhZG93IGNvbnRlbnQgaWYgcG9zc2libGVcbiAgICAgIHZhciBzaGFkb3dSb290ID0gZWxlbWVudC5zaGFkb3dSb290IHx8XG4gICAgICAvLyBjaGVjayBmb3IgYW4gdW5kaXNjbG9zZWQgc2hhZG93XG4gICAgICB0eXBlb2Ygb3B0aW9ucy5nZXRTaGFkb3dSb290ID09PSAnZnVuY3Rpb24nICYmIG9wdGlvbnMuZ2V0U2hhZG93Um9vdChlbGVtZW50KTtcblxuICAgICAgLy8gbm8gaW5lcnQgbG9vayB1cCBiZWNhdXNlIHdlJ3JlIGFscmVhZHkgZHJpbGxpbmcgZG93biBhbmQgY2hlY2tpbmcgZm9yIGluZXJ0bmVzc1xuICAgICAgLy8gIG9uIHRoZSB3YXkgZG93biwgc28gYWxsIGNvbnRhaW5lcnMgdG8gdGhpcyByb290IG5vZGUgc2hvdWxkIGhhdmUgYWxyZWFkeSBiZWVuXG4gICAgICAvLyAgdmV0dGVkIGFzIG5vbi1pbmVydFxuICAgICAgdmFyIHZhbGlkU2hhZG93Um9vdCA9ICFpc0luZXJ0KHNoYWRvd1Jvb3QsIGZhbHNlKSAmJiAoIW9wdGlvbnMuc2hhZG93Um9vdEZpbHRlciB8fCBvcHRpb25zLnNoYWRvd1Jvb3RGaWx0ZXIoZWxlbWVudCkpO1xuICAgICAgaWYgKHNoYWRvd1Jvb3QgJiYgdmFsaWRTaGFkb3dSb290KSB7XG4gICAgICAgIC8vIGFkZCBzaGFkb3cgZG9tIHNjb3BlIElJRiBhIHNoYWRvdyByb290IG5vZGUgd2FzIGdpdmVuOyBvdGhlcndpc2UsIGFuIHVuZGlzY2xvc2VkXG4gICAgICAgIC8vICBzaGFkb3cgZXhpc3RzLCBzbyBsb29rIGF0IGxpZ2h0IGRvbSBjaGlsZHJlbiBhcyBmYWxsYmFjayBCVVQgY3JlYXRlIGEgc2NvcGUgZm9yIGFueVxuICAgICAgICAvLyAgY2hpbGQgY2FuZGlkYXRlcyBmb3VuZCBiZWNhdXNlIHRoZXkncmUgbGlrZWx5IHNsb3R0ZWQgZWxlbWVudHMgKGVsZW1lbnRzIHRoYXQgYXJlXG4gICAgICAgIC8vICBjaGlsZHJlbiBvZiB0aGUgd2ViIGNvbXBvbmVudCBlbGVtZW50ICh3aGljaCBoYXMgdGhlIHNoYWRvdyksIGluIHRoZSBsaWdodCBkb20sIGJ1dFxuICAgICAgICAvLyAgc2xvdHRlZCBzb21ld2hlcmUgX2luc2lkZV8gdGhlIHVuZGlzY2xvc2VkIHNoYWRvdykgLS0gdGhlIHNjb3BlIGlzIGNyZWF0ZWQgYmVsb3csXG4gICAgICAgIC8vICBfYWZ0ZXJfIHdlIHJldHVybiBmcm9tIHRoaXMgcmVjdXJzaXZlIGNhbGxcbiAgICAgICAgdmFyIF9uZXN0ZWRDYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KHNoYWRvd1Jvb3QgPT09IHRydWUgPyBlbGVtZW50LmNoaWxkcmVuIDogc2hhZG93Um9vdC5jaGlsZHJlbiwgdHJ1ZSwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChvcHRpb25zLmZsYXR0ZW4pIHtcbiAgICAgICAgICBjYW5kaWRhdGVzLnB1c2guYXBwbHkoY2FuZGlkYXRlcywgX25lc3RlZENhbmRpZGF0ZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbmRpZGF0ZXMucHVzaCh7XG4gICAgICAgICAgICBzY29wZVBhcmVudDogZWxlbWVudCxcbiAgICAgICAgICAgIGNhbmRpZGF0ZXM6IF9uZXN0ZWRDYW5kaWRhdGVzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoZXJlJ3Mgbm90IHNoYWRvdyBzbyBqdXN0IGRpZyBpbnRvIHRoZSBlbGVtZW50J3MgKGxpZ2h0IGRvbSkgY2hpbGRyZW5cbiAgICAgICAgLy8gIF9fd2l0aG91dF9fIGdpdmluZyB0aGUgZWxlbWVudCBzcGVjaWFsIHNjb3BlIHRyZWF0bWVudFxuICAgICAgICBlbGVtZW50c1RvQ2hlY2sudW5zaGlmdC5hcHBseShlbGVtZW50c1RvQ2hlY2ssIGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2FuZGlkYXRlcztcbn07XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIERldGVybWluZXMgaWYgdGhlIG5vZGUgaGFzIGFuIGV4cGxpY2l0bHkgc3BlY2lmaWVkIGB0YWJpbmRleGAgYXR0cmlidXRlLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgc287IGZhbHNlIGlmIG5vdC5cbiAqL1xudmFyIGhhc1RhYkluZGV4ID0gZnVuY3Rpb24gaGFzVGFiSW5kZXgobm9kZSkge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlSW50KG5vZGUuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpLCAxMCkpO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgdGhlIHRhYiBpbmRleCBvZiBhIGdpdmVuIG5vZGUuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUYWIgb3JkZXIgKG5lZ2F0aXZlLCAwLCBvciBwb3NpdGl2ZSBudW1iZXIpLlxuICogQHRocm93cyB7RXJyb3J9IElmIGBub2RlYCBpcyBmYWxzeS5cbiAqL1xudmFyIGdldFRhYkluZGV4ID0gZnVuY3Rpb24gZ2V0VGFiSW5kZXgobm9kZSkge1xuICBpZiAoIW5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgfVxuICBpZiAobm9kZS50YWJJbmRleCA8IDApIHtcbiAgICAvLyBpbiBDaHJvbWUsIDxkZXRhaWxzLz4sIDxhdWRpbyBjb250cm9scy8+IGFuZCA8dmlkZW8gY29udHJvbHMvPiBlbGVtZW50cyBnZXQgYSBkZWZhdWx0XG4gICAgLy8gYHRhYkluZGV4YCBvZiAtMSB3aGVuIHRoZSAndGFiaW5kZXgnIGF0dHJpYnV0ZSBpc24ndCBzcGVjaWZpZWQgaW4gdGhlIERPTSxcbiAgICAvLyB5ZXQgdGhleSBhcmUgc3RpbGwgcGFydCBvZiB0aGUgcmVndWxhciB0YWIgb3JkZXI7IGluIEZGLCB0aGV5IGdldCBhIGRlZmF1bHRcbiAgICAvLyBgdGFiSW5kZXhgIG9mIDA7IHNpbmNlIENocm9tZSBzdGlsbCBwdXRzIHRob3NlIGVsZW1lbnRzIGluIHRoZSByZWd1bGFyIHRhYlxuICAgIC8vIG9yZGVyLCBjb25zaWRlciB0aGVpciB0YWIgaW5kZXggdG8gYmUgMC5cbiAgICAvLyBBbHNvIGJyb3dzZXJzIGRvIG5vdCByZXR1cm4gYHRhYkluZGV4YCBjb3JyZWN0bHkgZm9yIGNvbnRlbnRFZGl0YWJsZSBub2RlcztcbiAgICAvLyBzbyBpZiB0aGV5IGRvbid0IGhhdmUgYSB0YWJpbmRleCBhdHRyaWJ1dGUgc3BlY2lmaWNhbGx5IHNldCwgYXNzdW1lIGl0J3MgMC5cbiAgICBpZiAoKC9eKEFVRElPfFZJREVPfERFVEFJTFMpJC8udGVzdChub2RlLnRhZ05hbWUpIHx8IGlzQ29udGVudEVkaXRhYmxlKG5vZGUpKSAmJiAhaGFzVGFiSW5kZXgobm9kZSkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbm9kZS50YWJJbmRleDtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lIHRoZSB0YWIgaW5kZXggb2YgYSBnaXZlbiBub2RlIF9fZm9yIHNvcnQgb3JkZXIgcHVycG9zZXNfXy5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzU2NvcGVdIFRydWUgZm9yIGEgY3VzdG9tIGVsZW1lbnQgd2l0aCBzaGFkb3cgcm9vdCBvciBzbG90IHRoYXQsIGJ5IGRlZmF1bHQsXG4gKiAgaGFzIHRhYkluZGV4IC0xLCBidXQgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IGRvY3VtZW50IG9yZGVyIGluIG9yZGVyIGZvciBpdHMgY29udGVudCB0byBiZVxuICogIGluc2VydGVkIGludG8gdGhlIGNvcnJlY3Qgc29ydCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRhYiBvcmRlciAobmVnYXRpdmUsIDAsIG9yIHBvc2l0aXZlIG51bWJlcikuXG4gKi9cbnZhciBnZXRTb3J0T3JkZXJUYWJJbmRleCA9IGZ1bmN0aW9uIGdldFNvcnRPcmRlclRhYkluZGV4KG5vZGUsIGlzU2NvcGUpIHtcbiAgdmFyIHRhYkluZGV4ID0gZ2V0VGFiSW5kZXgobm9kZSk7XG4gIGlmICh0YWJJbmRleCA8IDAgJiYgaXNTY29wZSAmJiAhaGFzVGFiSW5kZXgobm9kZSkpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gdGFiSW5kZXg7XG59O1xudmFyIHNvcnRPcmRlcmVkVGFiYmFibGVzID0gZnVuY3Rpb24gc29ydE9yZGVyZWRUYWJiYWJsZXMoYSwgYikge1xuICByZXR1cm4gYS50YWJJbmRleCA9PT0gYi50YWJJbmRleCA/IGEuZG9jdW1lbnRPcmRlciAtIGIuZG9jdW1lbnRPcmRlciA6IGEudGFiSW5kZXggLSBiLnRhYkluZGV4O1xufTtcbnZhciBpc0lucHV0ID0gZnVuY3Rpb24gaXNJbnB1dChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWUgPT09ICdJTlBVVCc7XG59O1xudmFyIGlzSGlkZGVuSW5wdXQgPSBmdW5jdGlvbiBpc0hpZGRlbklucHV0KG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAnaGlkZGVuJztcbn07XG52YXIgaXNEZXRhaWxzV2l0aFN1bW1hcnkgPSBmdW5jdGlvbiBpc0RldGFpbHNXaXRoU3VtbWFyeShub2RlKSB7XG4gIHZhciByID0gbm9kZS50YWdOYW1lID09PSAnREVUQUlMUycgJiYgQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KG5vZGUuY2hpbGRyZW4pLnNvbWUoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkLnRhZ05hbWUgPT09ICdTVU1NQVJZJztcbiAgfSk7XG4gIHJldHVybiByO1xufTtcbnZhciBnZXRDaGVja2VkUmFkaW8gPSBmdW5jdGlvbiBnZXRDaGVja2VkUmFkaW8obm9kZXMsIGZvcm0pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub2Rlc1tpXS5jaGVja2VkICYmIG5vZGVzW2ldLmZvcm0gPT09IGZvcm0pIHtcbiAgICAgIHJldHVybiBub2Rlc1tpXTtcbiAgICB9XG4gIH1cbn07XG52YXIgaXNUYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNUYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgaWYgKCFub2RlLm5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgcmFkaW9TY29wZSA9IG5vZGUuZm9ybSB8fCBnZXRSb290Tm9kZShub2RlKTtcbiAgdmFyIHF1ZXJ5UmFkaW9zID0gZnVuY3Rpb24gcXVlcnlSYWRpb3MobmFtZSkge1xuICAgIHJldHVybiByYWRpb1Njb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJyArIG5hbWUgKyAnXCJdJyk7XG4gIH07XG4gIHZhciByYWRpb1NldDtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuQ1NTICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkNTUy5lc2NhcGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByYWRpb1NldCA9IHF1ZXJ5UmFkaW9zKHdpbmRvdy5DU1MuZXNjYXBlKG5vZGUubmFtZSkpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICByYWRpb1NldCA9IHF1ZXJ5UmFkaW9zKG5vZGUubmFtZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcignTG9va3MgbGlrZSB5b3UgaGF2ZSBhIHJhZGlvIGJ1dHRvbiB3aXRoIGEgbmFtZSBhdHRyaWJ1dGUgY29udGFpbmluZyBpbnZhbGlkIENTUyBzZWxlY3RvciBjaGFyYWN0ZXJzIGFuZCBuZWVkIHRoZSBDU1MuZXNjYXBlIHBvbHlmaWxsOiAlcycsIGVyci5tZXNzYWdlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgdmFyIGNoZWNrZWQgPSBnZXRDaGVja2VkUmFkaW8ocmFkaW9TZXQsIG5vZGUuZm9ybSk7XG4gIHJldHVybiAhY2hlY2tlZCB8fCBjaGVja2VkID09PSBub2RlO1xufTtcbnZhciBpc1JhZGlvID0gZnVuY3Rpb24gaXNSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ3JhZGlvJztcbn07XG52YXIgaXNOb25UYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzUmFkaW8obm9kZSkgJiYgIWlzVGFiYmFibGVSYWRpbyhub2RlKTtcbn07XG5cbi8vIGRldGVybWluZXMgaWYgYSBub2RlIGlzIHVsdGltYXRlbHkgYXR0YWNoZWQgdG8gdGhlIHdpbmRvdydzIGRvY3VtZW50XG52YXIgaXNOb2RlQXR0YWNoZWQgPSBmdW5jdGlvbiBpc05vZGVBdHRhY2hlZChub2RlKSB7XG4gIHZhciBfbm9kZVJvb3Q7XG4gIC8vIFRoZSByb290IG5vZGUgaXMgdGhlIHNoYWRvdyByb290IGlmIHRoZSBub2RlIGlzIGluIGEgc2hhZG93IERPTTsgc29tZSBkb2N1bWVudCBvdGhlcndpc2VcbiAgLy8gIChidXQgTk9UIF90aGVfIGRvY3VtZW50OyBzZWUgc2Vjb25kICdJZicgY29tbWVudCBiZWxvdyBmb3IgbW9yZSkuXG4gIC8vIElmIHJvb3ROb2RlIGlzIHNoYWRvdyByb290LCBpdCdsbCBoYXZlIGEgaG9zdCwgd2hpY2ggaXMgdGhlIGVsZW1lbnQgdG8gd2hpY2ggdGhlIHNoYWRvd1xuICAvLyAgaXMgYXR0YWNoZWQsIGFuZCB0aGUgb25lIHdlIG5lZWQgdG8gY2hlY2sgaWYgaXQncyBpbiB0aGUgZG9jdW1lbnQgb3Igbm90IChiZWNhdXNlIHRoZVxuICAvLyAgc2hhZG93LCBhbmQgYWxsIG5vZGVzIGl0IGNvbnRhaW5zLCBpcyBuZXZlciBjb25zaWRlcmVkIGluIHRoZSBkb2N1bWVudCBzaW5jZSBzaGFkb3dzXG4gIC8vICBiZWhhdmUgbGlrZSBzZWxmLWNvbnRhaW5lZCBET01zOyBidXQgaWYgdGhlIHNoYWRvdydzIEhPU1QsIHdoaWNoIGlzIHBhcnQgb2YgdGhlIGRvY3VtZW50LFxuICAvLyAgaXMgaGlkZGVuLCBvciBpcyBub3QgaW4gdGhlIGRvY3VtZW50IGl0c2VsZiBidXQgaXMgZGV0YWNoZWQsIGl0IHdpbGwgYWZmZWN0IHRoZSBzaGFkb3cnc1xuICAvLyAgdmlzaWJpbGl0eSwgaW5jbHVkaW5nIGFsbCB0aGUgbm9kZXMgaXQgY29udGFpbnMpLiBUaGUgaG9zdCBjb3VsZCBiZSBhbnkgbm9ybWFsIG5vZGUsXG4gIC8vICBvciBhIGN1c3RvbSBlbGVtZW50IChpLmUuIHdlYiBjb21wb25lbnQpLiBFaXRoZXIgd2F5LCB0aGF0J3MgdGhlIG9uZSB0aGF0IGlzIGNvbnNpZGVyZWRcbiAgLy8gIHBhcnQgb2YgdGhlIGRvY3VtZW50LCBub3QgdGhlIHNoYWRvdyByb290LCBub3IgYW55IG9mIGl0cyBjaGlsZHJlbiAoaS5lLiB0aGUgbm9kZSBiZWluZ1xuICAvLyAgdGVzdGVkKS5cbiAgLy8gVG8gZnVydGhlciBjb21wbGljYXRlIHRoaW5ncywgd2UgaGF2ZSB0byBsb29rIGFsbCB0aGUgd2F5IHVwIHVudGlsIHdlIGZpbmQgYSBzaGFkb3cgSE9TVFxuICAvLyAgdGhhdCBpcyBhdHRhY2hlZCAob3IgZmluZCBub25lKSBiZWNhdXNlIHRoZSBub2RlIG1pZ2h0IGJlIGluIG5lc3RlZCBzaGFkb3dzLi4uXG4gIC8vIElmIHJvb3ROb2RlIGlzIG5vdCBhIHNoYWRvdyByb290LCBpdCB3b24ndCBoYXZlIGEgaG9zdCwgYW5kIHNvIHJvb3ROb2RlIHNob3VsZCBiZSB0aGVcbiAgLy8gIGRvY3VtZW50IChwZXIgdGhlIGRvY3MpIGFuZCB3aGlsZSBpdCdzIGEgRG9jdW1lbnQtdHlwZSBvYmplY3QsIHRoYXQgZG9jdW1lbnQgZG9lcyBub3RcbiAgLy8gIGFwcGVhciB0byBiZSB0aGUgc2FtZSBhcyB0aGUgbm9kZSdzIGBvd25lckRvY3VtZW50YCBmb3Igc29tZSByZWFzb24sIHNvIGl0J3Mgc2FmZXJcbiAgLy8gIHRvIGlnbm9yZSB0aGUgcm9vdE5vZGUgYXQgdGhpcyBwb2ludCwgYW5kIHVzZSBgbm9kZS5vd25lckRvY3VtZW50YC4gT3RoZXJ3aXNlLFxuICAvLyAgdXNpbmcgYHJvb3ROb2RlLmNvbnRhaW5zKG5vZGUpYCB3aWxsIF9hbHdheXNfIGJlIHRydWUgd2UnbGwgZ2V0IGZhbHNlLXBvc2l0aXZlcyB3aGVuXG4gIC8vICBub2RlIGlzIGFjdHVhbGx5IGRldGFjaGVkLlxuICAvLyBOT1RFOiBJZiBgbm9kZVJvb3RIb3N0YCBvciBgbm9kZWAgaGFwcGVucyB0byBiZSB0aGUgYGRvY3VtZW50YCBpdHNlbGYgKHdoaWNoIGlzIHBvc3NpYmxlXG4gIC8vICBpZiBhIHRhYmJhYmxlL2ZvY3VzYWJsZSBub2RlIHdhcyBxdWlja2x5IGFkZGVkIHRvIHRoZSBET00sIGZvY3VzZWQsIGFuZCB0aGVuIHJlbW92ZWRcbiAgLy8gIGZyb20gdGhlIERPTSBhcyBpbiBodHRwczovL2dpdGh1Yi5jb20vZm9jdXMtdHJhcC9mb2N1cy10cmFwLXJlYWN0L2lzc3Vlcy85MDUpLCB0aGVuXG4gIC8vICBgb3duZXJEb2N1bWVudGAgd2lsbCBiZSBgbnVsbGAsIGhlbmNlIHRoZSBvcHRpb25hbCBjaGFpbmluZyBvbiBpdC5cbiAgdmFyIG5vZGVSb290ID0gbm9kZSAmJiBnZXRSb290Tm9kZShub2RlKTtcbiAgdmFyIG5vZGVSb290SG9zdCA9IChfbm9kZVJvb3QgPSBub2RlUm9vdCkgPT09IG51bGwgfHwgX25vZGVSb290ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm9kZVJvb3QuaG9zdDtcblxuICAvLyBpbiBzb21lIGNhc2VzLCBhIGRldGFjaGVkIG5vZGUgd2lsbCByZXR1cm4gaXRzZWxmIGFzIHRoZSByb290IGluc3RlYWQgb2YgYSBkb2N1bWVudCBvclxuICAvLyAgc2hhZG93IHJvb3Qgb2JqZWN0LCBpbiB3aGljaCBjYXNlLCB3ZSBzaG91bGRuJ3QgdHJ5IHRvIGxvb2sgZnVydGhlciB1cCB0aGUgaG9zdCBjaGFpblxuICB2YXIgYXR0YWNoZWQgPSBmYWxzZTtcbiAgaWYgKG5vZGVSb290ICYmIG5vZGVSb290ICE9PSBub2RlKSB7XG4gICAgdmFyIF9ub2RlUm9vdEhvc3QsIF9ub2RlUm9vdEhvc3Qkb3duZXJEbywgX25vZGUkb3duZXJEb2N1bWVudDtcbiAgICBhdHRhY2hlZCA9ICEhKChfbm9kZVJvb3RIb3N0ID0gbm9kZVJvb3RIb3N0KSAhPT0gbnVsbCAmJiBfbm9kZVJvb3RIb3N0ICE9PSB2b2lkIDAgJiYgKF9ub2RlUm9vdEhvc3Qkb3duZXJEbyA9IF9ub2RlUm9vdEhvc3Qub3duZXJEb2N1bWVudCkgIT09IG51bGwgJiYgX25vZGVSb290SG9zdCRvd25lckRvICE9PSB2b2lkIDAgJiYgX25vZGVSb290SG9zdCRvd25lckRvLmNvbnRhaW5zKG5vZGVSb290SG9zdCkgfHwgbm9kZSAhPT0gbnVsbCAmJiBub2RlICE9PSB2b2lkIDAgJiYgKF9ub2RlJG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQpICE9PSBudWxsICYmIF9ub2RlJG93bmVyRG9jdW1lbnQgIT09IHZvaWQgMCAmJiBfbm9kZSRvd25lckRvY3VtZW50LmNvbnRhaW5zKG5vZGUpKTtcbiAgICB3aGlsZSAoIWF0dGFjaGVkICYmIG5vZGVSb290SG9zdCkge1xuICAgICAgdmFyIF9ub2RlUm9vdDIsIF9ub2RlUm9vdEhvc3QyLCBfbm9kZVJvb3RIb3N0MiRvd25lckQ7XG4gICAgICAvLyBzaW5jZSBpdCdzIG5vdCBhdHRhY2hlZCBhbmQgd2UgaGF2ZSBhIHJvb3QgaG9zdCwgdGhlIG5vZGUgTVVTVCBiZSBpbiBhIG5lc3RlZCBzaGFkb3cgRE9NLFxuICAgICAgLy8gIHdoaWNoIG1lYW5zIHdlIG5lZWQgdG8gZ2V0IHRoZSBob3N0J3MgaG9zdCBhbmQgY2hlY2sgaWYgdGhhdCBwYXJlbnQgaG9zdCBpcyBjb250YWluZWRcbiAgICAgIC8vICBpbiAoaS5lLiBhdHRhY2hlZCB0bykgdGhlIGRvY3VtZW50XG4gICAgICBub2RlUm9vdCA9IGdldFJvb3ROb2RlKG5vZGVSb290SG9zdCk7XG4gICAgICBub2RlUm9vdEhvc3QgPSAoX25vZGVSb290MiA9IG5vZGVSb290KSA9PT0gbnVsbCB8fCBfbm9kZVJvb3QyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm9kZVJvb3QyLmhvc3Q7XG4gICAgICBhdHRhY2hlZCA9ICEhKChfbm9kZVJvb3RIb3N0MiA9IG5vZGVSb290SG9zdCkgIT09IG51bGwgJiYgX25vZGVSb290SG9zdDIgIT09IHZvaWQgMCAmJiAoX25vZGVSb290SG9zdDIkb3duZXJEID0gX25vZGVSb290SG9zdDIub3duZXJEb2N1bWVudCkgIT09IG51bGwgJiYgX25vZGVSb290SG9zdDIkb3duZXJEICE9PSB2b2lkIDAgJiYgX25vZGVSb290SG9zdDIkb3duZXJELmNvbnRhaW5zKG5vZGVSb290SG9zdCkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXR0YWNoZWQ7XG59O1xudmFyIGlzWmVyb0FyZWEgPSBmdW5jdGlvbiBpc1plcm9BcmVhKG5vZGUpIHtcbiAgdmFyIF9ub2RlJGdldEJvdW5kaW5nQ2xpZSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgd2lkdGggPSBfbm9kZSRnZXRCb3VuZGluZ0NsaWUud2lkdGgsXG4gICAgaGVpZ2h0ID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLmhlaWdodDtcbiAgcmV0dXJuIHdpZHRoID09PSAwICYmIGhlaWdodCA9PT0gMDtcbn07XG52YXIgaXNIaWRkZW4gPSBmdW5jdGlvbiBpc0hpZGRlbihub2RlLCBfcmVmKSB7XG4gIHZhciBkaXNwbGF5Q2hlY2sgPSBfcmVmLmRpc3BsYXlDaGVjayxcbiAgICBnZXRTaGFkb3dSb290ID0gX3JlZi5nZXRTaGFkb3dSb290O1xuICAvLyBOT1RFOiB2aXNpYmlsaXR5IHdpbGwgYmUgYHVuZGVmaW5lZGAgaWYgbm9kZSBpcyBkZXRhY2hlZCBmcm9tIHRoZSBkb2N1bWVudFxuICAvLyAgKHNlZSBub3RlcyBhYm91dCB0aGlzIGZ1cnRoZXIgZG93biksIHdoaWNoIG1lYW5zIHdlIHdpbGwgY29uc2lkZXIgaXQgdmlzaWJsZVxuICAvLyAgKHRoaXMgaXMgbGVnYWN5IGJlaGF2aW9yIGZyb20gYSB2ZXJ5IGxvbmcgd2F5IGJhY2spXG4gIC8vIE5PVEU6IHdlIGNoZWNrIHRoaXMgcmVnYXJkbGVzcyBvZiBgZGlzcGxheUNoZWNrPVwibm9uZVwiYCBiZWNhdXNlIHRoaXMgaXMgYVxuICAvLyAgX3Zpc2liaWxpdHlfIGNoZWNrLCBub3QgYSBfZGlzcGxheV8gY2hlY2tcbiAgaWYgKGdldENvbXB1dGVkU3R5bGUobm9kZSkudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgaXNEaXJlY3RTdW1tYXJ5ID0gbWF0Y2hlcy5jYWxsKG5vZGUsICdkZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZScpO1xuICB2YXIgbm9kZVVuZGVyRGV0YWlscyA9IGlzRGlyZWN0U3VtbWFyeSA/IG5vZGUucGFyZW50RWxlbWVudCA6IG5vZGU7XG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZVVuZGVyRGV0YWlscywgJ2RldGFpbHM6bm90KFtvcGVuXSkgKicpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKCFkaXNwbGF5Q2hlY2sgfHwgZGlzcGxheUNoZWNrID09PSAnZnVsbCcgfHwgZGlzcGxheUNoZWNrID09PSAnbGVnYWN5LWZ1bGwnKSB7XG4gICAgaWYgKHR5cGVvZiBnZXRTaGFkb3dSb290ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBmaWd1cmUgb3V0IGlmIHdlIHNob3VsZCBjb25zaWRlciB0aGUgbm9kZSB0byBiZSBpbiBhbiB1bmRpc2Nsb3NlZCBzaGFkb3cgYW5kIHVzZSB0aGVcbiAgICAgIC8vICAnbm9uLXplcm8tYXJlYScgZmFsbGJhY2tcbiAgICAgIHZhciBvcmlnaW5hbE5vZGUgPSBub2RlO1xuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgdmFyIHBhcmVudEVsZW1lbnQgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHZhciByb290Tm9kZSA9IGdldFJvb3ROb2RlKG5vZGUpO1xuICAgICAgICBpZiAocGFyZW50RWxlbWVudCAmJiAhcGFyZW50RWxlbWVudC5zaGFkb3dSb290ICYmIGdldFNoYWRvd1Jvb3QocGFyZW50RWxlbWVudCkgPT09IHRydWUgLy8gY2hlY2sgaWYgdGhlcmUncyBhbiB1bmRpc2Nsb3NlZCBzaGFkb3dcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gbm9kZSBoYXMgYW4gdW5kaXNjbG9zZWQgc2hhZG93IHdoaWNoIG1lYW5zIHdlIGNhbiBvbmx5IHRyZWF0IGl0IGFzIGEgYmxhY2sgYm94LCBzbyB3ZVxuICAgICAgICAgIC8vICBmYWxsIGJhY2sgdG8gYSBub24temVyby1hcmVhIHRlc3RcbiAgICAgICAgICByZXR1cm4gaXNaZXJvQXJlYShub2RlKTtcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgIC8vIGl0ZXJhdGUgdXAgc2xvdFxuICAgICAgICAgIG5vZGUgPSBub2RlLmFzc2lnbmVkU2xvdDtcbiAgICAgICAgfSBlbHNlIGlmICghcGFyZW50RWxlbWVudCAmJiByb290Tm9kZSAhPT0gbm9kZS5vd25lckRvY3VtZW50KSB7XG4gICAgICAgICAgLy8gY3Jvc3Mgc2hhZG93IGJvdW5kYXJ5XG4gICAgICAgICAgbm9kZSA9IHJvb3ROb2RlLmhvc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gaXRlcmF0ZSB1cCBub3JtYWwgZG9tXG4gICAgICAgICAgbm9kZSA9IHBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG5vZGUgPSBvcmlnaW5hbE5vZGU7XG4gICAgfVxuICAgIC8vIGVsc2UsIGBnZXRTaGFkb3dSb290YCBtaWdodCBiZSB0cnVlLCBidXQgYWxsIHRoYXQgZG9lcyBpcyBlbmFibGUgc2hhZG93IERPTSBzdXBwb3J0XG4gICAgLy8gIChpLmUuIGl0IGRvZXMgbm90IGFsc28gcHJlc3VtZSB0aGF0IGFsbCBub2RlcyBtaWdodCBoYXZlIHVuZGlzY2xvc2VkIHNoYWRvd3MpOyBvclxuICAgIC8vICBpdCBtaWdodCBiZSBhIGZhbHN5IHZhbHVlLCB3aGljaCBtZWFucyBzaGFkb3cgRE9NIHN1cHBvcnQgaXMgZGlzYWJsZWRcblxuICAgIC8vIFNpbmNlIHdlIGRpZG4ndCBmaW5kIGl0IHNpdHRpbmcgaW4gYW4gdW5kaXNjbG9zZWQgc2hhZG93IChvciBzaGFkb3dzIGFyZSBkaXNhYmxlZClcbiAgICAvLyAgbm93IHdlIGNhbiBqdXN0IHRlc3QgdG8gc2VlIGlmIGl0IHdvdWxkIG5vcm1hbGx5IGJlIHZpc2libGUgb3Igbm90LCBwcm92aWRlZCBpdCdzXG4gICAgLy8gIGF0dGFjaGVkIHRvIHRoZSBtYWluIGRvY3VtZW50LlxuICAgIC8vIE5PVEU6IFdlIG11c3QgY29uc2lkZXIgY2FzZSB3aGVyZSBub2RlIGlzIGluc2lkZSBhIHNoYWRvdyBET00gYW5kIGdpdmVuIGRpcmVjdGx5IHRvXG4gICAgLy8gIGBpc1RhYmJhYmxlKClgIG9yIGBpc0ZvY3VzYWJsZSgpYCAtLSByZWdhcmRsZXNzIG9mIGBnZXRTaGFkb3dSb290YCBvcHRpb24gc2V0dGluZy5cblxuICAgIGlmIChpc05vZGVBdHRhY2hlZChub2RlKSkge1xuICAgICAgLy8gdGhpcyB3b3JrcyB3aGVyZXZlciB0aGUgbm9kZSBpczogaWYgdGhlcmUncyBhdCBsZWFzdCBvbmUgY2xpZW50IHJlY3QsIGl0J3NcbiAgICAgIC8vICBzb21laG93IGRpc3BsYXllZDsgaXQgYWxzbyBjb3ZlcnMgdGhlIENTUyAnZGlzcGxheTogY29udGVudHMnIGNhc2Ugd2hlcmUgdGhlXG4gICAgICAvLyAgbm9kZSBpdHNlbGYgaXMgaGlkZGVuIGluIHBsYWNlIG9mIGl0cyBjb250ZW50czsgYW5kIHRoZXJlJ3Mgbm8gbmVlZCB0byBzZWFyY2hcbiAgICAgIC8vICB1cCB0aGUgaGllcmFyY2h5IGVpdGhlclxuICAgICAgcmV0dXJuICFub2RlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoO1xuICAgIH1cblxuICAgIC8vIEVsc2UsIHRoZSBub2RlIGlzbid0IGF0dGFjaGVkIHRvIHRoZSBkb2N1bWVudCwgd2hpY2ggbWVhbnMgdGhlIGBnZXRDbGllbnRSZWN0cygpYFxuICAgIC8vICBBUEkgd2lsbCBfX2Fsd2F5c19fIHJldHVybiB6ZXJvIHJlY3RzICh0aGlzIGNhbiBoYXBwZW4sIGZvciBleGFtcGxlLCBpZiBSZWFjdFxuICAgIC8vICBpcyB1c2VkIHRvIHJlbmRlciBub2RlcyBvbnRvIGEgZGV0YWNoZWQgdHJlZSwgYXMgY29uZmlybWVkIGluIHRoaXMgdGhyZWFkOlxuICAgIC8vICBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzkxMTcjaXNzdWVjb21tZW50LTI4NDIyODg3MClcbiAgICAvL1xuICAgIC8vIEl0IGFsc28gbWVhbnMgdGhhdCBldmVuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpLmRpc3BsYXkgd2lsbCByZXR1cm4gYHVuZGVmaW5lZGBcbiAgICAvLyAgYmVjYXVzZSBzdHlsZXMgYXJlIG9ubHkgY29tcHV0ZWQgZm9yIG5vZGVzIHRoYXQgYXJlIGluIHRoZSBkb2N1bWVudC5cbiAgICAvL1xuICAgIC8vIE5PVEU6IFRISVMgSEFTIEJFRU4gVEhFIENBU0UgRk9SIFlFQVJTLiBJdCBpcyBub3QgbmV3LCBub3IgaXMgaXQgY2F1c2VkIGJ5IHRhYmJhYmxlXG4gICAgLy8gIHNvbWVob3cuIFRob3VnaCBpdCB3YXMgbmV2ZXIgc3RhdGVkIG9mZmljaWFsbHksIGFueW9uZSB3aG8gaGFzIGV2ZXIgdXNlZCB0YWJiYWJsZVxuICAgIC8vICBBUElzIG9uIG5vZGVzIGluIGRldGFjaGVkIGNvbnRhaW5lcnMgaGFzIGFjdHVhbGx5IGltcGxpY2l0bHkgdXNlZCB0YWJiYWJsZSBpbiB3aGF0XG4gICAgLy8gIHdhcyBsYXRlciAoYXMgb2YgdjUuMi4wIG9uIEFwciA5LCAyMDIxKSBjYWxsZWQgYGRpc3BsYXlDaGVjaz1cIm5vbmVcImAgbW9kZSAtLSBlc3NlbnRpYWxseVxuICAgIC8vICBjb25zaWRlcmluZyBfX2V2ZXJ5dGhpbmdfXyB0byBiZSB2aXNpYmxlIGJlY2F1c2Ugb2YgdGhlIGlubmFiaWxpdHkgdG8gZGV0ZXJtaW5lIHN0eWxlcy5cbiAgICAvL1xuICAgIC8vIHY2LjAuMDogQXMgb2YgdGhpcyBtYWpvciByZWxlYXNlLCB0aGUgZGVmYXVsdCAnZnVsbCcgb3B0aW9uIF9fbm8gbG9uZ2VyIHRyZWF0cyBkZXRhY2hlZFxuICAgIC8vICBub2RlcyBhcyB2aXNpYmxlIHdpdGggdGhlICdub25lJyBmYWxsYmFjay5fX1xuICAgIGlmIChkaXNwbGF5Q2hlY2sgIT09ICdsZWdhY3ktZnVsbCcpIHtcbiAgICAgIHJldHVybiB0cnVlOyAvLyBoaWRkZW5cbiAgICB9XG4gICAgLy8gZWxzZSwgZmFsbGJhY2sgdG8gJ25vbmUnIG1vZGUgYW5kIGNvbnNpZGVyIHRoZSBub2RlIHZpc2libGVcbiAgfSBlbHNlIGlmIChkaXNwbGF5Q2hlY2sgPT09ICdub24temVyby1hcmVhJykge1xuICAgIC8vIE5PVEU6IEV2ZW4gdGhvdWdoIHRoaXMgdGVzdHMgdGhhdCB0aGUgbm9kZSdzIGNsaWVudCByZWN0IGlzIG5vbi16ZXJvIHRvIGRldGVybWluZVxuICAgIC8vICB3aGV0aGVyIGl0J3MgZGlzcGxheWVkLCBhbmQgdGhhdCBhIGRldGFjaGVkIG5vZGUgd2lsbCBfX2Fsd2F5c19fIGhhdmUgYSB6ZXJvLWFyZWFcbiAgICAvLyAgY2xpZW50IHJlY3QsIHdlIGRvbid0IHNwZWNpYWwtY2FzZSBmb3Igd2hldGhlciB0aGUgbm9kZSBpcyBhdHRhY2hlZCBvciBub3QuIEluXG4gICAgLy8gIHRoaXMgbW9kZSwgd2UgZG8gd2FudCB0byBjb25zaWRlciBub2RlcyB0aGF0IGhhdmUgYSB6ZXJvIGFyZWEgdG8gYmUgaGlkZGVuIGF0IGFsbFxuICAgIC8vICB0aW1lcywgYW5kIHRoYXQgaW5jbHVkZXMgYXR0YWNoZWQgb3Igbm90LlxuICAgIHJldHVybiBpc1plcm9BcmVhKG5vZGUpO1xuICB9XG5cbiAgLy8gdmlzaWJsZSwgYXMgZmFyIGFzIHdlIGNhbiB0ZWxsLCBvciBwZXIgY3VycmVudCBgZGlzcGxheUNoZWNrPW5vbmVgIG1vZGUsIHdlIGFzc3VtZVxuICAvLyAgaXQncyB2aXNpYmxlXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIGZvcm0gZmllbGRzIChuZXN0ZWQpIGluc2lkZSBhIGRpc2FibGVkIGZpZWxkc2V0IGFyZSBub3QgZm9jdXNhYmxlL3RhYmJhYmxlXG4vLyAgdW5sZXNzIHRoZXkgYXJlIGluIHRoZSBfZmlyc3RfIDxsZWdlbmQ+IGVsZW1lbnQgb2YgdGhlIHRvcC1tb3N0IGRpc2FibGVkXG4vLyAgZmllbGRzZXRcbnZhciBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0ID0gZnVuY3Rpb24gaXNEaXNhYmxlZEZyb21GaWVsZHNldChub2RlKSB7XG4gIGlmICgvXihJTlBVVHxCVVRUT058U0VMRUNUfFRFWFRBUkVBKSQvLnRlc3Qobm9kZS50YWdOYW1lKSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICAgIC8vIGNoZWNrIGlmIGBub2RlYCBpcyBjb250YWluZWQgaW4gYSBkaXNhYmxlZCA8ZmllbGRzZXQ+XG4gICAgd2hpbGUgKHBhcmVudE5vZGUpIHtcbiAgICAgIGlmIChwYXJlbnROb2RlLnRhZ05hbWUgPT09ICdGSUVMRFNFVCcgJiYgcGFyZW50Tm9kZS5kaXNhYmxlZCkge1xuICAgICAgICAvLyBsb29rIGZvciB0aGUgZmlyc3QgPGxlZ2VuZD4gYW1vbmcgdGhlIGNoaWxkcmVuIG9mIHRoZSBkaXNhYmxlZCA8ZmllbGRzZXQ+XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjaGlsZCA9IHBhcmVudE5vZGUuY2hpbGRyZW4uaXRlbShpKTtcbiAgICAgICAgICAvLyB3aGVuIHRoZSBmaXJzdCA8bGVnZW5kPiAoaW4gZG9jdW1lbnQgb3JkZXIpIGlzIGZvdW5kXG4gICAgICAgICAgaWYgKGNoaWxkLnRhZ05hbWUgPT09ICdMRUdFTkQnKSB7XG4gICAgICAgICAgICAvLyBpZiBpdHMgcGFyZW50IDxmaWVsZHNldD4gaXMgbm90IG5lc3RlZCBpbiBhbm90aGVyIGRpc2FibGVkIDxmaWVsZHNldD4sXG4gICAgICAgICAgICAvLyByZXR1cm4gd2hldGhlciBgbm9kZWAgaXMgYSBkZXNjZW5kYW50IG9mIGl0cyBmaXJzdCA8bGVnZW5kPlxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXMuY2FsbChwYXJlbnROb2RlLCAnZmllbGRzZXRbZGlzYWJsZWRdIConKSA/IHRydWUgOiAhY2hpbGQuY29udGFpbnMobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHRoZSBkaXNhYmxlZCA8ZmllbGRzZXQ+IGNvbnRhaW5pbmcgYG5vZGVgIGhhcyBubyA8bGVnZW5kPlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZWxzZSwgbm9kZSdzIHRhYmJhYmxlL2ZvY3VzYWJsZSBzdGF0ZSBzaG91bGQgbm90IGJlIGFmZmVjdGVkIGJ5IGEgZmllbGRzZXQnc1xuICAvLyAgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZVxuICByZXR1cm4gZmFsc2U7XG59O1xudmFyIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUgPSBmdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG9wdGlvbnMsIG5vZGUpIHtcbiAgaWYgKG5vZGUuZGlzYWJsZWQgfHxcbiAgLy8gd2UgbXVzdCBkbyBhbiBpbmVydCBsb29rIHVwIHRvIGZpbHRlciBvdXQgYW55IGVsZW1lbnRzIGluc2lkZSBhbiBpbmVydCBhbmNlc3RvclxuICAvLyAgYmVjYXVzZSB3ZSdyZSBsaW1pdGVkIGluIHRoZSB0eXBlIG9mIHNlbGVjdG9ycyB3ZSBjYW4gdXNlIGluIEpTRG9tIChzZWUgcmVsYXRlZFxuICAvLyAgbm90ZSByZWxhdGVkIHRvIGBjYW5kaWRhdGVTZWxlY3RvcnNgKVxuICBpc0luZXJ0KG5vZGUpIHx8IGlzSGlkZGVuSW5wdXQobm9kZSkgfHwgaXNIaWRkZW4obm9kZSwgb3B0aW9ucykgfHxcbiAgLy8gRm9yIGEgZGV0YWlscyBlbGVtZW50IHdpdGggYSBzdW1tYXJ5LCB0aGUgc3VtbWFyeSBlbGVtZW50IGdldHMgdGhlIGZvY3VzXG4gIGlzRGV0YWlsc1dpdGhTdW1tYXJ5KG5vZGUpIHx8IGlzRGlzYWJsZWRGcm9tRmllbGRzZXQobm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZSA9IGZ1bmN0aW9uIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmIChpc05vblRhYmJhYmxlUmFkaW8obm9kZSkgfHwgZ2V0VGFiSW5kZXgobm9kZSkgPCAwIHx8ICFpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG9wdGlvbnMsIG5vZGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBpc1ZhbGlkU2hhZG93Um9vdFRhYmJhYmxlID0gZnVuY3Rpb24gaXNWYWxpZFNoYWRvd1Jvb3RUYWJiYWJsZShzaGFkb3dIb3N0Tm9kZSkge1xuICB2YXIgdGFiSW5kZXggPSBwYXJzZUludChzaGFkb3dIb3N0Tm9kZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JyksIDEwKTtcbiAgaWYgKGlzTmFOKHRhYkluZGV4KSB8fCB0YWJJbmRleCA+PSAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8gSWYgYSBjdXN0b20gZWxlbWVudCBoYXMgYW4gZXhwbGljaXQgbmVnYXRpdmUgdGFiaW5kZXgsXG4gIC8vIGJyb3dzZXJzIHdpbGwgbm90IGFsbG93IHRhYiB0YXJnZXRpbmcgc2FpZCBlbGVtZW50J3MgY2hpbGRyZW4uXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheS48RWxlbWVudHxDYW5kaWRhdGVTY29wZT59IGNhbmRpZGF0ZXNcbiAqIEByZXR1cm5zIEVsZW1lbnRbXVxuICovXG52YXIgc29ydEJ5T3JkZXIgPSBmdW5jdGlvbiBzb3J0QnlPcmRlcihjYW5kaWRhdGVzKSB7XG4gIHZhciByZWd1bGFyVGFiYmFibGVzID0gW107XG4gIHZhciBvcmRlcmVkVGFiYmFibGVzID0gW107XG4gIGNhbmRpZGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgIHZhciBpc1Njb3BlID0gISFpdGVtLnNjb3BlUGFyZW50O1xuICAgIHZhciBlbGVtZW50ID0gaXNTY29wZSA/IGl0ZW0uc2NvcGVQYXJlbnQgOiBpdGVtO1xuICAgIHZhciBjYW5kaWRhdGVUYWJpbmRleCA9IGdldFNvcnRPcmRlclRhYkluZGV4KGVsZW1lbnQsIGlzU2NvcGUpO1xuICAgIHZhciBlbGVtZW50cyA9IGlzU2NvcGUgPyBzb3J0QnlPcmRlcihpdGVtLmNhbmRpZGF0ZXMpIDogZWxlbWVudDtcbiAgICBpZiAoY2FuZGlkYXRlVGFiaW5kZXggPT09IDApIHtcbiAgICAgIGlzU2NvcGUgPyByZWd1bGFyVGFiYmFibGVzLnB1c2guYXBwbHkocmVndWxhclRhYmJhYmxlcywgZWxlbWVudHMpIDogcmVndWxhclRhYmJhYmxlcy5wdXNoKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcmRlcmVkVGFiYmFibGVzLnB1c2goe1xuICAgICAgICBkb2N1bWVudE9yZGVyOiBpLFxuICAgICAgICB0YWJJbmRleDogY2FuZGlkYXRlVGFiaW5kZXgsXG4gICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgIGlzU2NvcGU6IGlzU2NvcGUsXG4gICAgICAgIGNvbnRlbnQ6IGVsZW1lbnRzXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3JkZXJlZFRhYmJhYmxlcy5zb3J0KHNvcnRPcmRlcmVkVGFiYmFibGVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc29ydGFibGUpIHtcbiAgICBzb3J0YWJsZS5pc1Njb3BlID8gYWNjLnB1c2guYXBwbHkoYWNjLCBzb3J0YWJsZS5jb250ZW50KSA6IGFjYy5wdXNoKHNvcnRhYmxlLmNvbnRlbnQpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIFtdKS5jb25jYXQocmVndWxhclRhYmJhYmxlcyk7XG59O1xudmFyIHRhYmJhYmxlID0gZnVuY3Rpb24gdGFiYmFibGUoY29udGFpbmVyLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgY2FuZGlkYXRlcztcbiAgaWYgKG9wdGlvbnMuZ2V0U2hhZG93Um9vdCkge1xuICAgIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzSXRlcmF0aXZlbHkoW2NvbnRhaW5lcl0sIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwge1xuICAgICAgZmlsdGVyOiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUuYmluZChudWxsLCBvcHRpb25zKSxcbiAgICAgIGZsYXR0ZW46IGZhbHNlLFxuICAgICAgZ2V0U2hhZG93Um9vdDogb3B0aW9ucy5nZXRTaGFkb3dSb290LFxuICAgICAgc2hhZG93Um9vdEZpbHRlcjogaXNWYWxpZFNoYWRvd1Jvb3RUYWJiYWJsZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGNvbnRhaW5lciwgb3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyLCBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUuYmluZChudWxsLCBvcHRpb25zKSk7XG4gIH1cbiAgcmV0dXJuIHNvcnRCeU9yZGVyKGNhbmRpZGF0ZXMpO1xufTtcbnZhciBmb2N1c2FibGUgPSBmdW5jdGlvbiBmb2N1c2FibGUoY29udGFpbmVyLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgY2FuZGlkYXRlcztcbiAgaWYgKG9wdGlvbnMuZ2V0U2hhZG93Um9vdCkge1xuICAgIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzSXRlcmF0aXZlbHkoW2NvbnRhaW5lcl0sIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwge1xuICAgICAgZmlsdGVyOiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlLmJpbmQobnVsbCwgb3B0aW9ucyksXG4gICAgICBmbGF0dGVuOiB0cnVlLFxuICAgICAgZ2V0U2hhZG93Um9vdDogb3B0aW9ucy5nZXRTaGFkb3dSb290XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXMoY29udGFpbmVyLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUuYmluZChudWxsLCBvcHRpb25zKSk7XG4gIH1cbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xudmFyIGlzVGFiYmFibGUgPSBmdW5jdGlvbiBpc1RhYmJhYmxlKG5vZGUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGlmICghbm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICB9XG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgY2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG9wdGlvbnMsIG5vZGUpO1xufTtcbnZhciBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvciA9IC8qICNfX1BVUkVfXyAqL2NhbmRpZGF0ZVNlbGVjdG9ycy5jb25jYXQoJ2lmcmFtZScpLmpvaW4oJywnKTtcbnZhciBpc0ZvY3VzYWJsZSA9IGZ1bmN0aW9uIGlzRm9jdXNhYmxlKG5vZGUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGlmICghbm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICB9XG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKTtcbn07XG5cbmV4cG9ydCB7IGZvY3VzYWJsZSwgZ2V0VGFiSW5kZXgsIGlzRm9jdXNhYmxlLCBpc1RhYmJhYmxlLCB0YWJiYWJsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
