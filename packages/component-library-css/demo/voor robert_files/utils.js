/*! For license information please see utils.js.LICENSE.txt */
!(function () {
  'use strict';
  var t = {
      d: function (e, n) {
        for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
      },
      o: function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      },
      r: function (t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      },
    },
    e = {};
  t.r(e),
    t.d(e, {
      run: function () {
        return xt;
      },
      runGroup: function () {
        return At;
      },
    });
  var n = {};
  t.r(n),
    t.d(n, {
      getScroller: function () {
        return zt;
      },
      lock: function () {
        return Jt;
      },
      unlock: function () {
        return Rt;
      },
    });
  var r = {};
  t.r(r),
    t.d(r, {
      reInitChildren: function () {
        return de;
      },
    });
  var o = {};
  t.r(o),
    t.d(o, {
      down: function () {
        return me;
      },
      up: function () {
        return ye;
      },
    });
  var i = {};
  t.r(i),
    t.d(i, {
      elVisibleHeight: function () {
        return Ae;
      },
      elements: function () {
        return je;
      },
      height: function () {
        return xe;
      },
      width: function () {
        return Ee;
      },
    });
  var a = {};
  t.r(a),
    t.d(a, {
      clear: function () {
        return ze;
      },
      get: function () {
        return He;
      },
      put: function () {
        return Ne;
      },
      remove: function () {
        return qe;
      },
    });
  var c = {};
  t.r(c),
    t.d(c, {
      clear: function () {
        return We;
      },
      get: function () {
        return Re;
      },
      put: function () {
        return Je;
      },
      remove: function () {
        return Ue;
      },
    });
  var u = {};
  t.r(u),
    t.d(u, {
      get: function () {
        return Be;
      },
      remove: function () {
        return Ye;
      },
      set: function () {
        return Xe;
      },
    });
  var l = {};
  function s(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function f(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        var n = null == t ? null : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
        if (null != n) {
          var r,
            o,
            i,
            a,
            c = [],
            u = !0,
            l = !1;
          try {
            if (((i = (n = n.call(t)).next), 0 === e)) {
              if (Object(n) !== n) return;
              u = !1;
            } else for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== e); u = !0);
          } catch (t) {
            (l = !0), (o = t);
          } finally {
            try {
              if (!u && null != n.return && ((a = n.return()), Object(a) !== a)) return;
            } finally {
              if (l) throw o;
            }
          }
          return c;
        }
      })(t, e) ||
      (function (t, e) {
        if (t) {
          if ('string' == typeof t) return s(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? s(t, e)
              : void 0
          );
        }
      })(t, e) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      })()
    );
  }
  function d() {
    for (
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = t.length;
      n--;
      e.unshift(t[n])
    );
    return e;
  }
  function p(t) {
    return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
  }
  function g() {
    return d(
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document).querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ),
    ).filter(function (t) {
      return p(t);
    });
  }
  function v() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {};
    if (n && e) {
      if (27 === t.keyCode) return e.focus(), void r();
      if (9 === t.keyCode) {
        var o = g(n),
          i = o[0],
          a = o[o.length - 1];
        t.shiftKey
          ? document.activeElement === i && (a.focus(), t.preventDefault())
          : document.activeElement === a && (i.focus(), t.preventDefault());
      }
    } else console.error('You need to pass a container and trigger node to focusLoop.');
  }
  function h(t, e) {
    Object.keys(e).forEach(function (n) {
      return t.setAttribute(n, e[n]);
    });
  }
  t.r(l),
    t.d(l, {
      animate: function () {
        return e;
      },
      applyBrowserClasses: function () {
        return Ht;
      },
      arrayEquals: function () {
        return k;
      },
      arrayToInt: function () {
        return P;
      },
      aspectRatioToPadding: function () {
        return L;
      },
      bodyLock: function () {
        return n;
      },
      browsers: function () {
        return Nt;
      },
      checkNotificationPromise: function () {
        return De;
      },
      clipboard: function () {
        return Ut;
      },
      consoleError: function () {
        return x;
      },
      consoleInfo: function () {
        return A;
      },
      consoleLog: function () {
        return T;
      },
      consoleWarn: function () {
        return C;
      },
      convertElements: function () {
        return d;
      },
      cookieStorage: function () {
        return u;
      },
      debounce: function () {
        return Te;
      },
      deepMerge: function () {
        return W;
      },
      delay: function () {
        return Y;
      },
      delegate: function () {
        return _e;
      },
      dragHorizontal: function () {
        return Bt;
      },
      escapeHtml: function () {
        return $;
      },
      escapeScripts: function () {
        return K;
      },
      filterObject: function () {
        return B;
      },
      findNestedObject: function () {
        return X;
      },
      focusLoop: function () {
        return v;
      },
      getChildren: function () {
        return Xt;
      },
      getClosest: function () {
        return Yt;
      },
      getConfig: function () {
        return G;
      },
      getCoords: function () {
        return $t;
      },
      getFocusable: function () {
        return g;
      },
      getHiddenHeight: function () {
        return Kt;
      },
      getNode: function () {
        return Vt;
      },
      getNodes: function () {
        return Gt;
      },
      hasClassFromArray: function () {
        return Qt;
      },
      hasScrollbar: function () {
        return Zt;
      },
      insertAfter: function () {
        return te;
      },
      insertBefore: function () {
        return ee;
      },
      isEmptyObject: function () {
        return V;
      },
      isExternalLink: function () {
        return ne;
      },
      isFileLink: function () {
        return re;
      },
      isFormDirty: function () {
        return oe;
      },
      isFunction: function () {
        return N;
      },
      isImageLink: function () {
        return ie;
      },
      isJestTest: function () {
        return E;
      },
      isJson: function () {
        return Q;
      },
      isObject: function () {
        return Z;
      },
      isRtl: function () {
        return ae;
      },
      localStorage: function () {
        return a;
      },
      matchesOrContainedInSelectors: function () {
        return ce;
      },
      mimicFn: function () {
        return ft;
      },
      objectAssign: function () {
        return dt;
      },
      objectToAttributes: function () {
        return mt;
      },
      objectToFormData: function () {
        return pt;
      },
      openNewTab: function () {
        return ue;
      },
      parseUrl: function () {
        return gt;
      },
      popup: function () {
        return le;
      },
      queryToJson: function () {
        return St;
      },
      ready: function () {
        return Ie;
      },
      removeClassThatContains: function () {
        return se;
      },
      resize: function () {
        return Me;
      },
      saferHtml: function () {
        return vt;
      },
      sessionStorage: function () {
        return c;
      },
      setAttributes: function () {
        return h;
      },
      shouldLoadChunk: function () {
        return fe;
      },
      simpleBar: function () {
        return r;
      },
      slide: function () {
        return o;
      },
      slugify: function () {
        return ht;
      },
      spacerClasses: function () {
        return Se;
      },
      speak: function () {
        return j;
      },
      sprintf: function () {
        return bt;
      },
      trigger: function () {
        return Wt;
      },
      uniqueId: function () {
        return jt;
      },
      updateQueryVar: function () {
        return Et;
      },
      viewport: function () {
        return i;
      },
      visible: function () {
        return p;
      },
      vsprintf: function () {
        return wt;
      },
    });
  var m = { containers: [] },
    y = { previousMessage: '' },
    b = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'polite',
        e = document.createElement('div');
      h(e, {
        'aria-live': t,
        'aria-relevant': 'additions text',
        'aria-atomic': 'true',
        style:
          'position: absolute; margin: -1px; padding: 0; height: 1px; width: 1px; overflow: hidden; clip: rect(1px, 1px, 1px, 1px); -webkit-clip-path: inset(50%); clip-path: inset(50%); border: 0; word-wrap: normal !important;',
      }),
        document.body.appendChild(e),
        m.containers.push(e);
    },
    w = function () {
      var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '').replace(/<[^<>]+>/g, ' ');
      return y.previousMessage === t && (t += ' '), (y.previousMessage = t), t;
    },
    O = function () {
      return m.containers.forEach(function (t) {
        return (t.textContent = '');
      });
    },
    S = function () {
      m.containers.length || (b('assertive'), b('polite'));
    };
  function j() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'polite';
    S(), O();
    var n = m.containers.filter(function (t) {
      return t.getAttribute('aria-live') === e;
    })[0];
    n && (n.textContent = w(t));
  }
  function E() {
    return !!window.__TEST__;
  }
  function x() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
    window.console && !E() && console.error(t);
  }
  function A() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
    window.console && !E() && console.info(t);
  }
  function T() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
    window.console && !E() && console.log(t);
  }
  function C() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
    window.console && !E() && console.warn(t);
  }
  function k(t, e) {
    return (
      Array.isArray(t) &&
      Array.isArray(e) &&
      t.length === e.length &&
      t.every(function (t, n) {
        return t === e[n];
      })
    );
  }
  var P = function () {
    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function (t) {
      return parseInt(t, 10);
    });
  };
  function L() {
    var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '').split(':');
    return parseFloat(((t[1] / t[0]) * 100).toFixed(5));
  }
  function _(t) {
    return (
      (_ =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
      _(t)
    );
  }
  var I = 'function' == typeof Symbol && Symbol.for ? Symbol.for('react.element') : 60103,
    M = function (t) {
      return !!t && 'object' === _(t);
    },
    D = function (t) {
      var e = Object.prototype.toString.call(t);
      return (
        '[object RegExp]' === e ||
        '[object Date]' === e ||
        (function (t) {
          return t.$$typeof === I;
        })(t)
      );
    };
  function F(t) {
    return M(t) && !D(t);
  }
  function N(t) {
    return t && '[object Function]' === {}.toString.call(t);
  }
  function H(t, e) {
    return !1 !== e.clone && e.isMergeableObject(t) ? U(((n = t), Array.isArray(n) ? [] : {}), t, e) : t;
    var n;
  }
  function q(t, e, n) {
    return t.concat(e).map(function (t) {
      return H(t, n);
    });
  }
  function z(t, e, n) {
    var r = t.slice();
    return (
      e.forEach(function (e, o) {
        void 0 === r[o]
          ? (r[o] = n.cloneUnlessOtherwiseSpecified(e, n))
          : n.isMergeableObject(e)
          ? (r[o] = U(t[o], e, n))
          : -1 === t.indexOf(e) && r.push(e);
      }),
      r
    );
  }
  function J(t) {
    return Object.keys(t).concat(
      (function (t) {
        return Object.getOwnPropertySymbols
          ? Object.getOwnPropertySymbols(t).filter(function (e) {
              return t.propertyIsEnumerable(e);
            })
          : [];
      })(t),
    );
  }
  function R(t, e) {
    try {
      return e in t;
    } catch (t) {
      return !1;
    }
  }
  function U(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    (n.arrayMerge = (function (t) {
      var e = q;
      return 'combine' === t.arrayMerge ? (e = z) : N(t.arrayMerge) && (e = t.arrayMerge), e;
    })(n)),
      (n.isMergeableObject = n.isMergeableObject || F),
      (n.cloneUnlessOtherwiseSpecified = H);
    var r = Array.isArray(e);
    return r === Array.isArray(t)
      ? r
        ? n.arrayMerge(t, e, n)
        : (function (t, e, n) {
            var r = {};
            return (
              n.isMergeableObject(t) &&
                J(t).forEach(function (e) {
                  r[e] = H(t[e], n);
                }),
              J(e).forEach(function (o) {
                (function (t, e) {
                  return R(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
                })(t, o) ||
                  (R(t, o) && n.isMergeableObject(e[o])
                    ? (r[o] = (function (t, e) {
                        if (!e.customMerge) return U;
                        var n = e.customMerge(t);
                        return 'function' == typeof n ? n : U;
                      })(o, n)(t[o], e[o], n))
                    : (r[o] = H(e[o], n)));
              }),
              r
            );
          })(t, e, n)
      : H(e, n);
  }
  U.all = function (t, e) {
    if (!Array.isArray(t)) throw new Error('first argument should be an array');
    return t.reduce(function (t, n) {
      return U(t, n, e);
    }, {});
  };
  var W = U,
    B = function (t, e) {
      var n = Object.entries(t).filter(e);
      return Object.fromEntries(n);
    };
  function X(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
    return (function t(r) {
      if ('object' === _(r))
        for (var o in r)
          if (Object.prototype.hasOwnProperty.call(r, o)) {
            if (o === e && r[o] === n) return r;
            var i = t(r[o]);
            if (i) return i;
          }
      return null;
    })(t);
  }
  function Y() {
    var t,
      e,
      n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {},
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
      o = [];
    function i(t, n) {
      e = window.setTimeout(function () {
        if (((e = null), t(), o.length)) {
          var n = o.shift();
          i(n.fn, n.t);
        }
      }, n);
    }
    return (
      (t = {
        delay: function (n, r) {
          return o.length || e ? o.push({ fn: n, t: r }) : i(n, r), t;
        },
        cancel: function () {
          return window.clearTimeout(e), (o = []), t;
        },
      }),
      t.delay(n, r)
    );
  }
  function $() {
    return String(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
  function K() {
    return String(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '').replace(
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      '',
    );
  }
  function G() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    return e && t[e] ? t[e] : t;
  }
  function V(t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return JSON.stringify(t) === JSON.stringify({});
  }
  function Q(t) {
    if (null === t) return !1;
    try {
      JSON.parse(t);
    } catch (t) {
      return !1;
    }
    return !0;
  }
  function Z(t) {
    return !(!t || 'object' !== _(t) || Array.isArray(t));
  }
  function tt(t, e, n) {
    return (
      (e = (function (t) {
        var e = (function (t, e) {
          if ('object' !== _(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, 'string');
            if ('object' !== _(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' === _(e) ? e : String(e);
      })(e)) in t
        ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (t[e] = n),
      t
    );
  }
  function et(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function nt(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      e &&
        (r = r.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function rt(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? nt(Object(n), !0).forEach(function (e) {
            tt(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : nt(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  var ot = function (t, e, n, r) {
      if ('length' !== n && 'prototype' !== n && 'arguments' !== n && 'caller' !== n) {
        var o = Object.getOwnPropertyDescriptor(t, n),
          i = Object.getOwnPropertyDescriptor(e, n);
        (!it(o, i) && r) || Object.defineProperty(t, n, i);
      }
    },
    it = function (t, e) {
      return (
        void 0 === t ||
        t.configurable ||
        (t.writable === e.writable &&
          t.enumerable === e.enumerable &&
          t.configurable === e.configurable &&
          (t.writable || t.value === e.value))
      );
    },
    at = function (t, e) {
      var n = Object.getPrototypeOf(e);
      n !== Object.getPrototypeOf(t) && Object.setPrototypeOf(t, n);
    },
    ct = function (t, e) {
      return '/* Wrapped '.concat(t, '*/\n').concat(e);
    },
    ut = Object.getOwnPropertyDescriptor(Function.prototype, 'toString'),
    lt = Object.getOwnPropertyDescriptor(Function.prototype.toString, 'name'),
    st = function (t, e, n) {
      var r = '' === n ? '' : 'with '.concat(n.trim(), '() '),
        o = ct.bind(null, r, e.toString());
      Object.defineProperty(o, 'name', lt), Object.defineProperty(t, 'toString', rt(rt({}, ut), {}, { value: o }));
    };
  function ft(t, e) {
    var n,
      r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).ignoreNonConfigurable,
      o = void 0 !== r && r,
      i = t.name,
      a = (function (t, e) {
        var n = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (t) {
                if ('string' == typeof t) return et(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  'Object' === n && t.constructor && (n = t.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(t)
                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? et(t, e)
                    : void 0
                );
              }
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var i,
          a = !0,
          c = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (c = !0), (i = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw i;
            }
          },
        };
      })(Reflect.ownKeys(e));
    try {
      for (a.s(); !(n = a.n()).done; ) {
        var c = n.value;
        ot(t, e, c, o);
      }
    } catch (t) {
      a.e(t);
    } finally {
      a.f();
    }
    return at(t, e), st(t, e, i), t;
  }
  function dt() {
    for (var t = {}, e = 0; e < arguments.length; e += 1)
      for (var n = arguments[e], r = Object.keys(n), o = 0; o < r.length; o += 1) t[r[o]] = n[r[o]];
    return t;
  }
  var pt = function (t, e, n) {
    var r = new window.FormData();
    return (
      (function t(e, o) {
        if (
          !(function (t) {
            return (
              Array.isArray(n) &&
              n.some(function (e) {
                return e === t;
              })
            );
          })(o)
        )
          if (((o = o || ''), e instanceof window.File)) r.append(o, e);
          else if (Array.isArray(e)) for (var i = 0; i < e.length; i++) t(e[i], o + '[' + i + ']');
          else if ('object' === _(e) && e)
            for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t(e[a], '' === o ? a : o + '[' + a + ']');
          else null != e && r.append(o, e);
      })(t, e),
      r
    );
  };
  function gt(t, e) {
    for (
      var n,
        r = [
          'source',
          'scheme',
          'authority',
          'userInfo',
          'user',
          'pass',
          'host',
          'port',
          'relative',
          'path',
          'directory',
          'file',
          'query',
          'fragment',
        ],
        o = {},
        i = (o['phpjs.parse_url.mode'] && o['phpjs.parse_url.mode'].local_value) || 'php',
        a = {
          php: /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
          strict:
            /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
          loose:
            /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        },
        c = a[i].exec(t),
        u = {},
        l = 14;
      l--;

    )
      c[l] && (u[r[l]] = c[l]);
    return e
      ? u[e.replace('PHP_URL_', '').toLowerCase()]
      : ('php' !== i &&
          ((n = (o['phpjs.parse_url.queryKey'] && o['phpjs.parse_url.queryKey'].local_value) || 'queryKey'),
          (a = /(?:^|&)([^&=]*)=?([^&]*)/g),
          (u[n] = {}),
          (u[r[12]] || '').replace(a, function (t, e, r) {
            e && (u[n][e] = r);
          })),
        (u.source = null),
        u);
  }
  function vt(t) {
    for (var e = t[0], n = 1; n < arguments.length; n++)
      (e += String(arguments[n]).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')), (e += t[n]);
    return e;
  }
  function ht() {
    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '')
      .toString()
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/-$/g, '');
  }
  function mt(t) {
    var e = [];
    return (
      Object.entries(t).forEach(function (t) {
        var n = f(t, 2),
          r = n[0],
          o = n[1];
        if (o.length || 'alt' === r)
          if (Array.isArray(o)) {
            var i = o.filter(function (t) {
              return t;
            });
            e.push(''.concat(r, '="').concat(i.join(' '), '"'));
          } else e.push(''.concat(r, '="').concat(o, '"'));
      }),
      e.join(' ')
    );
  }
  var yt = {
    not_string: /[^s]/,
    not_bool: /[^t]/,
    not_type: /[^T]/,
    not_primitive: /[^v]/,
    number: /[diefg]/,
    numeric_arg: /[bcdiefguxX]/,
    json: /[j]/,
    not_json: /[^j]/,
    text: /^[^\x25]+/,
    modulo: /^\x25{2}/,
    placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
    key: /^([a-z_][a-z_\d]*)/i,
    key_access: /^\.([a-z_][a-z_\d]*)/i,
    index_access: /^\[(\d+)\]/,
    sign: /^[+-]/,
  };
  function bt(t) {
    return (function (t, e) {
      var n,
        r,
        o,
        i,
        a,
        c,
        u,
        l,
        s,
        f = 1,
        d = t.length,
        p = '';
      for (r = 0; r < d; r++)
        if ('string' == typeof t[r]) p += t[r];
        else if ('object' === _(t[r])) {
          if ((i = t[r]).keys)
            for (n = e[f], o = 0; o < i.keys.length; o++) {
              if (null == n)
                throw new Error(
                  bt('[sprintf] Cannot access property "%s" of undefined value "%s"', i.keys[o], i.keys[o - 1]),
                );
              n = n[i.keys[o]];
            }
          else n = i.param_no ? e[i.param_no] : e[f++];
          if (
            (yt.not_type.test(i.type) && yt.not_primitive.test(i.type) && n instanceof Function && (n = n()),
            yt.numeric_arg.test(i.type) && 'number' != typeof n && isNaN(n))
          )
            throw new TypeError(bt('[sprintf] expecting number but found %T', n));
          switch ((yt.number.test(i.type) && (l = n >= 0), i.type)) {
            case 'b':
              n = parseInt(n, 10).toString(2);
              break;
            case 'c':
              n = String.fromCharCode(parseInt(n, 10));
              break;
            case 'd':
            case 'i':
              n = parseInt(n, 10);
              break;
            case 'j':
              n = JSON.stringify(n, null, i.width ? parseInt(i.width) : 0);
              break;
            case 'e':
              n = i.precision ? parseFloat(n).toExponential(i.precision) : parseFloat(n).toExponential();
              break;
            case 'f':
              n = i.precision ? parseFloat(n).toFixed(i.precision) : parseFloat(n);
              break;
            case 'g':
              n = i.precision ? String(Number(n.toPrecision(i.precision))) : parseFloat(n);
              break;
            case 'o':
              n = (parseInt(n, 10) >>> 0).toString(8);
              break;
            case 's':
              (n = String(n)), (n = i.precision ? n.substring(0, i.precision) : n);
              break;
            case 't':
              (n = String(!!n)), (n = i.precision ? n.substring(0, i.precision) : n);
              break;
            case 'T':
              (n = Object.prototype.toString.call(n).slice(8, -1).toLowerCase()),
                (n = i.precision ? n.substring(0, i.precision) : n);
              break;
            case 'u':
              n = parseInt(n, 10) >>> 0;
              break;
            case 'v':
              (n = n.valueOf()), (n = i.precision ? n.substring(0, i.precision) : n);
              break;
            case 'x':
              n = (parseInt(n, 10) >>> 0).toString(16);
              break;
            case 'X':
              n = (parseInt(n, 10) >>> 0).toString(16).toUpperCase();
          }
          yt.json.test(i.type)
            ? (p += n)
            : (!yt.number.test(i.type) || (l && !i.sign)
                ? (s = '')
                : ((s = l ? '+' : '-'), (n = n.toString().replace(yt.sign, ''))),
              (c = i.pad_char ? ('0' === i.pad_char ? '0' : i.pad_char.charAt(1)) : ' '),
              (u = i.width - (s + n).length),
              (a = i.width && u > 0 ? c.repeat(u) : ''),
              (p += i.align ? s + n + a : '0' === c ? s + a + n : a + s + n));
        }
      return p;
    })(
      (function (t) {
        if (Ot[t]) return Ot[t];
        for (var e, n = t, r = [], o = 0; n; ) {
          if (null !== (e = yt.text.exec(n))) r.push(e[0]);
          else if (null !== (e = yt.modulo.exec(n))) r.push('%');
          else {
            if (null === (e = yt.placeholder.exec(n))) throw new SyntaxError('[sprintf] unexpected placeholder');
            if (e[2]) {
              o |= 1;
              var i = [],
                a = e[2],
                c = [];
              if (null === (c = yt.key.exec(a))) throw new SyntaxError('[sprintf] failed to parse named argument key');
              for (i.push(c[1]); '' !== (a = a.substring(c[0].length)); )
                if (null !== (c = yt.key_access.exec(a))) i.push(c[1]);
                else {
                  if (null === (c = yt.index_access.exec(a)))
                    throw new SyntaxError('[sprintf] failed to parse named argument key');
                  i.push(c[1]);
                }
              e[2] = i;
            } else o |= 2;
            if (3 === o) throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported');
            r.push({
              placeholder: e[0],
              param_no: e[1],
              keys: e[2],
              sign: e[3],
              pad_char: e[4],
              align: e[5],
              width: e[6],
              precision: e[7],
              type: e[8],
            });
          }
          n = n.substring(e[0].length);
        }
        return (Ot[t] = r);
      })(t),
      arguments,
    );
  }
  function wt(t, e) {
    return bt.apply(null, [t].concat(e || []));
  }
  var Ot = Object.create(null),
    St = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
        e = t.length ? t : window.location.search.slice(1),
        n = e.length ? e.split('&') : [],
        r = {},
        o = [];
      return (
        n.forEach(function (t) {
          (o = t.split('=')), (r[o[0]] = decodeURIComponent(o[1] || ''));
        }),
        JSON.parse(JSON.stringify(r))
      );
    };
  function jt() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'id';
    return ''.concat(t.length ? ''.concat(t, '-') : '').concat(Math.random().toString(36).substr(2, 9));
  }
  function Et(t, e) {
    var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.location.href).split('#'),
      r = n[1] ? '#'.concat(n[1]) : '',
      o = n[0].split('?'),
      i = o[0],
      a = o[1],
      c = void 0 !== a ? a.split('&') : [],
      u = !1;
    return (
      c.forEach(function (n, r) {
        n.startsWith(''.concat(t, '=')) && ((u = !0), e ? (c[r] = ''.concat(t, '=').concat(e)) : c.splice(r, 1));
      }),
      !u && e && (c[c.length] = ''.concat(t, '=').concat(e)),
      ''.concat(i).concat('?').concat(c.join('&')).concat(r)
    );
  }
  var xt = function () {
      var t,
        e,
        n,
        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (r) {
        var i = o.onAnimateInit,
          a = void 0 === i ? function () {} : i,
          c = o.onAnimateStart,
          u = void 0 === c ? function () {} : c,
          l = o.onAnimateEnd,
          s = void 0 === l ? function () {} : l,
          f = o.delay,
          d = void 0 === f ? (null === (t = r.dataset) || void 0 === t ? void 0 : t.animationDelay) || 0 : f,
          p = o.duration,
          g = void 0 === p ? (null === (e = r.dataset) || void 0 === e ? void 0 : e.animationDuration) || 400 : p,
          v = o.easing,
          h = void 0 === v ? (null === (n = r.dataset) || void 0 === n ? void 0 : n.animationEasing) || 'linear' : v,
          m = (function (t, e) {
            var n,
              r,
              o,
              i,
              a,
              c = {},
              u = {},
              l = e.distanceFrom,
              s =
                void 0 === l
                  ? (null === (n = t.dataset) || void 0 === n ? void 0 : n.translateDistanceFrom) || '20px'
                  : l,
              f = e.distanceTo,
              d =
                void 0 === f ? (null === (r = t.dataset) || void 0 === r ? void 0 : r.translateDistanceTo) || '0px' : f,
              p = e.opacityFrom,
              g = void 0 === p ? (null === (o = t.dataset) || void 0 === o ? void 0 : o.translateOpacityFrom) : p,
              v = e.opacityTo,
              h = void 0 === v ? (null === (i = t.dataset) || void 0 === i ? void 0 : i.translateOpacityTo) : v,
              m = e.types;
            return (
              (void 0 === m ? (null === (a = t.dataset) || void 0 === a ? void 0 : a.animationTypes) || '' : m)
                .split(' ')
                .forEach(function (t) {
                  'fadeIn' === t && ((c.opacity = g || 0), (u.opacity = h || 1)),
                    'fadeOut' === t && ((c.opacity = g || 1), (u.opacity = h || 0)),
                    'translateY' === t &&
                      ((c.transform = 'translateY('.concat(s, ')')), (u.transform = 'translateY('.concat(d, ')')));
                }),
              [c, u]
            );
          })(r, o);
        a(),
          setTimeout(function () {
            u(),
              requestAnimationFrame(function () {
                r.animate(m, { duration: Number(g), easing: h }).onfinish = function () {
                  !(function (t, e) {
                    var n,
                      r,
                      o,
                      i = e.distanceTo,
                      a =
                        void 0 === i
                          ? (null === (n = t.dataset) || void 0 === n ? void 0 : n.translateDistanceTo) || '0px'
                          : i,
                      c = e.opacityTo,
                      u = void 0 === c ? (null === (r = t.dataset) || void 0 === r ? void 0 : r.translateOpacityTo) : c,
                      l = e.types;
                    (void 0 === l ? (null === (o = t.dataset) || void 0 === o ? void 0 : o.animationTypes) || '' : l)
                      .split(' ')
                      .forEach(function (e) {
                        'fadeIn' === e && ((t.style.opacity = u || '1'), t.setAttribute('aria-hidden', 'false')),
                          'fadeOut' === e && ((t.style.opacity = u || '0'), t.setAttribute('aria-hidden', 'true')),
                          'translateY' === e && (t.style.transform = 'translateY('.concat(a, ')'));
                      });
                  })(r, o),
                    s();
                };
              });
          }, d);
      }
    },
    At = function () {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach(function (t) {
        var e = t.target,
          n = t.options;
        xt(e, n);
      });
    },
    Tt = /(android)/i.test(window.navigator.userAgent),
    Ct = !!window.chrome,
    kt = 'undefined' != typeof InstallTrigger,
    Pt = document.documentMode || !1,
    Lt = !Pt && !!window.StyleMedia,
    _t = !!window.navigator.userAgent.match(/(iPod|iPhone|iPad)/i),
    It = !!window.navigator.userAgent.match(/(iPod|iPhone)/i),
    Mt = !!window.opera || window.navigator.userAgent.indexOf(' OPR/') >= 0,
    Dt =
      Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 ||
      (!Ct && !Mt && 'undefined' !== window.webkitAudioContext),
    Ft = window.navigator.platform;
  function Nt() {
    return {
      android: Tt,
      chrome: Ct,
      edge: Lt,
      firefox: kt,
      ie: Pt,
      ios: _t,
      iosMobile: It,
      opera: Mt,
      safari: Dt,
      os: Ft,
    };
  }
  function Ht() {
    var t = Nt(),
      e = document.body.classList;
    t.android ? e.add('device-android') : t.ios && e.add('device-ios'),
      t.edge
        ? e.add('browser-edge')
        : t.chrome
        ? e.add('browser-chrome')
        : t.firefox
        ? e.add('browser-firefox')
        : t.ie
        ? e.add('browser-ie')
        : t.opera
        ? e.add('browser-opera')
        : t.safari && e.add('browser-safari');
  }
  var qt = 0,
    zt = function () {
      var t = Nt();
      return t.ie || t.firefox || (t.chrome && !t.edge) ? document.documentElement : document.body;
    },
    Jt = function () {
      var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
        e = zt(),
        n = document.body.style;
      (qt = e.scrollTop),
        (n.overflowY = 'scroll'),
        (n.position = 'fixed'),
        (n.width = '100%'),
        t && (n.marginTop = '-'.concat(qt, 'px'));
    },
    Rt = function () {
      var t = zt(),
        e = document.body.style;
      (e.overflowY = ''), (e.position = 'static'), (e.marginTop = '0px'), (e.width = ''), (t.scrollTop = qt);
    };
  function Ut() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
    if (window.clipboardData && window.clipboardData.setData) return window.clipboardData.setData('Text', t);
    if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
      var e = document.createElement('textarea');
      (e.textContent = t), (e.style.position = 'fixed'), document.body.appendChild(e), e.select();
      try {
        return document.execCommand('copy');
      } catch (t) {
        return C('Copy to clipboard failed.', t), !1;
      } finally {
        document.body.removeChild(e);
      }
    }
  }
  function Wt() {
    var t,
      e = dt(
        { data: {}, el: document, event: '', native: !0 },
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      );
    if (e.native) (t = document.createEvent('HTMLEvents')).initEvent(e.event, !0, !1);
    else
      try {
        t = new window.CustomEvent(e.event, { detail: e.data });
      } catch (n) {
        (t = document.createEvent('CustomEvent')).initCustomEvent(e.event, !0, !0, e.data);
      }
    e.el.dispatchEvent(t);
  }
  function Bt(t) {
    var e = { isDown: !1, moveEventTriggered: !1, startX: 0, scrollLeft: 0 };
    t.addEventListener('mousedown', function (n) {
      (e.isDown = !0),
        t.classList.add('drag-horizontal--active'),
        (e.startX = n.pageX - t.offsetLeft),
        (e.scrollLeft = t.scrollLeft);
    }),
      t.addEventListener('mouseleave', function () {
        (e.isDown = !1), t.classList.remove('drag-horizontal--active');
      }),
      t.addEventListener('mouseup', function () {
        (e.isDown = !1),
          t.classList.remove('drag-horizontal--active'),
          Wt({ event: 'gform-utils/horizontal-drag-ended', native: !1 }),
          (e.moveEventTriggered = !1);
      }),
      t.addEventListener('mousemove', function (n) {
        if (e.isDown) {
          n.preventDefault();
          var r = 3 * (n.pageX - t.offsetLeft - e.startX);
          (t.scrollLeft = e.scrollLeft - r),
            e.moveEventTriggered ||
              (Wt({ event: 'gform-utils/horizontal-drag-started', native: !1 }), (e.moveEventTriggered = !0));
        }
      });
  }
  function Xt(t) {
    for (var e = [], n = t.children.length; n--; ) 8 !== t.children[n].nodeType && e.unshift(t.children[n]);
    return e;
  }
  function Yt(t, e) {
    var n, r;
    for (
      ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(
        function (t) {
          return 'function' == typeof document.body[t] && ((n = t), !0);
        },
      );
      t;

    ) {
      if ((r = t.parentElement) && r[n](e)) return r;
      t = r;
    }
    return null;
  }
  function $t(t) {
    var e = t.getBoundingClientRect(),
      n = document.body,
      r = document.documentElement,
      o = window.pageYOffset || r.scrollTop || n.scrollTop,
      i = window.pageXOffset || r.scrollLeft || n.scrollLeft,
      a = r.clientTop || n.clientTop || 0,
      c = r.clientLeft || n.clientLeft || 0,
      u = e.top + o - a,
      l = e.left + i - c;
    return { top: Math.round(u), left: Math.round(l), bottom: Math.round(e.bottom) };
  }
  function Kt(t) {
    var e = t.clientWidth,
      n = t;
    (n.style.visibility = 'hidden'),
      (n.style.height = 'auto'),
      (n.style.maxHeight = 'none'),
      (n.style.position = 'fixed'),
      (n.style.width = ''.concat(e, 'px'));
    var r = n.offsetHeight;
    return (
      (n.style.visibility = ''),
      (n.style.height = ''),
      (n.style.maxHeight = ''),
      (n.style.width = ''),
      (n.style.position = ''),
      (n.style.zIndex = ''),
      r
    );
  }
  function Gt() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
      e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document,
      r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? t : '[data-js="'.concat(t, '"]'),
      o = n.querySelectorAll(r);
    return e && (o = d(o)), o;
  }
  function Vt() {
    var t = Gt(
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
      !1,
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document,
      arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    );
    return t.length > 0 ? t[0] : null;
  }
  function Qt(t) {
    var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
      n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '';
    return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).some(function (r) {
      return t.classList.contains(''.concat(e).concat(r).concat(n));
    });
  }
  function Zt(t) {
    return { vertical: t.scrollHeight > t.clientHeight, horizontal: t.scrollWidth > t.clientWidth };
  }
  function te(t, e) {
    e.parentNode.insertBefore(t, e.nextElementSibling);
  }
  function ee(t, e) {
    e.parentNode.insertBefore(t, e);
  }
  function ne() {
    var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '').match(
      /^([^:/?#]+:)?(?:\/\/([^/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/,
    );
    return (
      ('string' == typeof t[1] && t[1].length > 0 && t[1].toLowerCase() !== window.location.protocol) ||
      ('string' == typeof t[2] &&
        t[2].length > 0 &&
        t[2].replace(new RegExp(':('.concat({ 'http:': 80, 'https:': 443 }[window.location.protocol], ')?$')), '') !==
          window.location.host)
    );
  }
  function re() {
    return -1 !== (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '').split('/').pop().indexOf('.');
  }
  function oe() {
    var t, e;
    if (!window.gforms_original_json || !window.UpdateFormObject) return !1;
    window.UpdateFormObject();
    var n =
        '1' ===
        (null === (t = window) || void 0 === t || null === (e = t.gf_legacy) || void 0 === e ? void 0 : e.is_legacy),
      r = JSON.parse(JSON.stringify(JSON.parse(window.gforms_original_json))),
      o = JSON.parse(JSON.stringify(window.form));
    return (
      n &&
        (r.fields.forEach(function (t, e) {
          delete r.fields[e].layoutGroupId;
        }),
        o.fields.forEach(function (t, e) {
          delete o.fields[e].layoutGroupId;
        })),
      JSON.stringify(r) !== JSON.stringify(o)
    );
  }
  function ie() {
    var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '')
      .split('.')
      .pop()
      .toLowerCase()
      .match(/(jpg|jpeg|png|gif|svg)/g);
    return (t && t.length > 0) || !1;
  }
  function ae() {
    var t = document.createElement('div');
    document.body.appendChild(t);
    var e = 'rtl' === window.getComputedStyle(t, null).getPropertyValue('direction');
    return document.body.removeChild(t), e;
  }
  function ce(t, e) {
    for (var n = 0; n < e.length; n++)
      for (var r = document.querySelectorAll(e[n]), o = 0; o < r.length; o++)
        if (t === r[o] || r[o].contains(t)) return !0;
    return !1;
  }
  function ue() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
      e = document.createElement('a');
    (e.href = t), (e.target = '_blank'), document.body.appendChild(e), e.click(), e.remove();
  }
  function le() {
    var t = dt(
      {
        event: null,
        url: '',
        center: !0,
        name: '_blank',
        specs: {
          menubar: 0,
          scrollbars: 0,
          status: 1,
          titlebar: 1,
          toolbar: 0,
          top: 100,
          left: 100,
          width: 500,
          height: 300,
        },
      },
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    );
    if ((t.event && (t.event.preventDefault(), t.url.length || (t.url = t.event.currentTarget.href)), t.url.length)) {
      t.center &&
        ((t.specs.top = window.screen.height / 2 - t.specs.height / 2),
        (t.specs.left = window.screen.width / 2 - t.specs.width / 2));
      var e = [];
      Object.entries(t.specs).forEach(function (t) {
        var n = f(t, 2),
          r = n[0],
          o = n[1],
          i = ''.concat(r, '=').concat(o);
        e.push(i);
      }),
        window.open(t.url, t.name, e.join());
    }
  }
  function se(t) {
    for (
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '', n = 0;
      n < t.classList.length;
      n++
    )
      -1 !== t.classList.item(n).indexOf(e) && t.classList.remove(t.classList.item(n));
  }
  function fe() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
    return document.querySelectorAll('[data-load-chunk-'.concat(t, ']')).length > 0;
  }
  var de = function (t) {
      var e,
        n = (null === (e = window) || void 0 === e ? void 0 : e.SimpleBar) || {};
      n.instances &&
        t &&
        Gt('[data-simplebar]', !0, t, !0).forEach(function (t) {
          var e;
          return null !== (e = n.instances.get(t)) && void 0 !== e ? e : new n(t);
        });
    },
    pe = [],
    ge = function (t) {
      return t < 0.2074
        ? -3.8716 * t * t * t + 6.137 * t * t + 0.4 * t
        : 1.1317 * (t - 1) * (t - 1) * (t - 1) - 0.1975 * (t - 1) * (t - 1) + 1;
    },
    ve = function (t) {
      pe[t] || (pe[t] = { up: null, down: null });
    },
    he = function (t) {
      pe[t].up && (window.cancelAnimationFrame(pe[t].up), (pe[t].up = null)),
        pe[t].down && (window.cancelAnimationFrame(pe[t].down), (pe[t].down = null));
    },
    me = function (t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 400,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        o = t.offsetHeight,
        i = Kt(t),
        a = null;
      (t.style.maxHeight = '0'), ve(e), he(e);
      var c = function c(u) {
        a || (a = u);
        var l = u - a,
          s = ge(l / n) * (i - o) + o;
        (t.style.maxHeight = ''.concat(s, 'px')),
          l < n
            ? (pe[e].down = window.requestAnimationFrame(c))
            : ((pe[e].down = null), (t.style.maxHeight = 'none'), r && r());
      };
      setTimeout(function () {
        pe[e].down = window.requestAnimationFrame(c);
      }, 25);
    },
    ye = function (t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 400,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        o = t.offsetHeight,
        i = null;
      (t.style.maxHeight = ''.concat(o, 'px')), ve(e), he(e);
      var a = function a(c) {
        i || (i = c);
        var u = c - i,
          l = ge(u / n) * (0 - o) + o;
        (t.style.maxHeight = ''.concat(l, 'px')),
          u < n
            ? (pe[e].up = window.requestAnimationFrame(a))
            : ((pe[e].up = null), (t.style.maxHeight = '0'), r && r());
      };
      setTimeout(function () {
        pe[e].up = window.requestAnimationFrame(a);
      }, 25);
    };
  function be(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      e &&
        (r = r.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function we(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? be(Object(n), !0).forEach(function (e) {
            tt(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : be(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  var Oe = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'gform-spacing',
      r = {};
    return !t || ('string' != typeof t && 'number' != typeof t && !Array.isArray(t)) || (Array.isArray(t) && !t.length)
      ? r
      : 'string' == typeof t || 'number' == typeof t
      ? ((r[''.concat(n, '--').concat(e, 'bottom-').concat(t)] = !0), r)
      : 1 === t.length
      ? (['top', 'right', 'bottom', 'left'].forEach(function (o) {
          r[''.concat(n, '--').concat(e).concat(o, '-').concat(t[0])] = !0;
        }),
        r)
      : 2 === t.length
      ? (['top', 'bottom'].forEach(function (o) {
          r[''.concat(n, '--').concat(e).concat(o, '-').concat(t[0])] = !0;
        }),
        ['right', 'left'].forEach(function (o) {
          r[''.concat(n, '--').concat(e).concat(o, '-').concat(t[1])] = !0;
        }),
        r)
      : 3 === t.length
      ? ((r[''.concat(n, '--').concat(e, 'top-').concat(t[0])] = !0),
        ['right', 'left'].forEach(function (o) {
          r[''.concat(n, '--').concat(e).concat(o, '-').concat(t[1])] = !0;
        }),
        (r['gform-spacing--'.concat(e, 'bottom-').concat(t[2])] = !0),
        r)
      : 4 === t.length
      ? ((r[''.concat(n, '--').concat(e, 'top-').concat(t[0])] = !0),
        (r[''.concat(n, '--').concat(e, 'right-').concat(t[1])] = !0),
        (r[''.concat(n, '--').concat(e, 'bottom-').concat(t[2])] = !0),
        (r[''.concat(n, '--').concat(e, 'left-').concat(t[3])] = !0),
        r)
      : r;
  };
  function Se() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'gform-spacing',
      n = {};
    return !t ||
      ('string' != typeof t && 'number' != typeof t && !Array.isArray(t) && ('object' !== _(t) || Array.isArray(t))) ||
      (Array.isArray(t) && !t.length)
      ? n
      : ((n[e] = !0),
        'string' == typeof t || 'number' == typeof t || Array.isArray(t)
          ? we(we({}, n), Oe(t, '', e))
          : ['', 'md', 'lg'].reduce(function (n, r) {
              return Object.prototype.hasOwnProperty.call(t, r)
                ? we(we({}, n), Oe(t[r], r ? ''.concat(r, '-') : '', e))
                : n;
            }, n));
  }
  var je = function () {
      var t = 'undefined' != typeof window && window,
        e = 'undefined' != typeof document && document;
      return { docElem: e && e.documentElement, win: t };
    },
    Ee = function () {
      var t = je(),
        e = t.docElem,
        n = t.win,
        r = e.clientWidth,
        o = n.innerWidth;
      return r < o ? o : r;
    },
    xe = function () {
      var t = je(),
        e = t.docElem,
        n = t.win,
        r = e.clientHeight,
        o = n.innerHeight;
      return r < o ? o : r;
    },
    Ae = function (t) {
      var e = t.offsetHeight,
        n = xe(),
        r = t.getBoundingClientRect(),
        o = r.bottom,
        i = r.top;
      return Math.max(0, i > 0 ? Math.min(e, n - i) : Math.min(o, n));
    };
  function Te(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if ('function' != typeof t)
      throw new TypeError('Expected the first argument to be a function, got `'.concat(_(t), '`'));
    var n,
      r,
      o,
      i = e.wait,
      a = void 0 === i ? 0 : i,
      c = e.maxWait,
      u = void 0 === c ? Number.Infinity : c,
      l = e.before,
      s = void 0 !== l && l,
      f = e.after,
      d = void 0 === f || f;
    if (!s && !d) throw new Error("Both `before` and `after` are false, function wouldn't be called.");
    var p = function () {
      for (var e = arguments.length, i = new Array(e), c = 0; c < e; c++) i[c] = arguments[c];
      var l = this,
        f = s && !n;
      return (
        clearTimeout(n),
        (n = setTimeout(function () {
          (n = void 0), r && (clearTimeout(r), (r = void 0)), d && (o = t.apply(l, i));
        }, a)),
        u > 0 &&
          u !== Number.Infinity &&
          !r &&
          (r = setTimeout(function () {
            (r = void 0), n && (clearTimeout(n), (n = void 0)), d && (o = t.apply(l, i));
          }, u)),
        f && (o = t.apply(l, i)),
        o
      );
    };
    return (
      ft(p, t),
      (p.cancel = function () {
        n && (clearTimeout(n), (n = void 0)), r && (clearTimeout(r), (r = void 0));
      }),
      p
    );
  }
  var Ce = 9;
  if ('undefined' != typeof Element && !Element.prototype.matches) {
    var ke = Element.prototype;
    ke.matches =
      ke.matchesSelector ||
      ke.mozMatchesSelector ||
      ke.msMatchesSelector ||
      ke.oMatchesSelector ||
      ke.webkitMatchesSelector;
  }
  function Pe(t, e, n, r, o) {
    var i = Le.apply(this, arguments);
    return (
      t.addEventListener(n, i, o),
      {
        destroy: function () {
          t.removeEventListener(n, i, o);
        },
      }
    );
  }
  function Le(t, e, n, r) {
    return function (n) {
      (n.delegateTarget = (function (t, e) {
        for (; t && t.nodeType !== Ce; ) {
          if ('function' == typeof t.matches && t.matches(e)) return t;
          t = t.parentNode;
        }
      })(n.target, e)),
        n.delegateTarget && r.call(t, n);
    };
  }
  var _e = function (t, e, n, r) {
    var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    return 'function' == typeof t.addEventListener
      ? Pe.apply(null, arguments)
      : 'function' == typeof n
      ? Pe.bind(null, document).apply(null, arguments)
      : ('string' == typeof t && (t = document.querySelectorAll(t)),
        Array.prototype.map.call(t, function (t) {
          return Pe(t, e, n, r, o);
        }));
  };
  function Ie(t) {
    'loading' !== document.readyState
      ? t()
      : document.addEventListener
      ? document.addEventListener('DOMContentLoaded', t)
      : document.attachEvent('onreadystatechange', function () {
          'loading' !== document.readyState && t();
        });
  }
  function Me() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {},
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200;
    arguments.length > 2 && void 0 !== arguments[2] && !arguments[2]
      ? window.removeEventListener('resize', Te(t, { wait: e }))
      : window.addEventListener('resize', Te(t, { wait: e }));
  }
  function De() {
    try {
      window.Notification.requestPermission().then();
    } catch (t) {
      return !1;
    }
    return !0;
  }
  var Fe,
    Ne = function (t, e) {
      window.localStorage.setItem(t, e);
    },
    He = function (t) {
      return window.localStorage.getItem(t);
    },
    qe = function (t) {
      return window.localStorage.removeItem(t);
    },
    ze = function () {
      window.localStorage.clear();
    },
    Je = function (t, e) {
      window.sessionStorage.setItem(t, e);
    },
    Re = function (t) {
      return window.sessionStorage.getItem(t);
    },
    Ue = function (t) {
      return window.sessionStorage.removeItem(t);
    },
    We = function () {
      window.sessionStorage.clear();
    },
    Be = function () {
      for (
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
          e = document.cookie.split(';'),
          n = 0;
        n < e.length;
        n++
      ) {
        var r = e[n].split('=');
        if (t === r[0].trim()) return decodeURIComponent(r[1]);
      }
      return null;
    },
    Xe = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0,
        o = '',
        i = e;
      if (n && !isNaN(Number(n))) {
        var a = new Date();
        a.setTime(a.getTime() + 24 * Number(n) * 60 * 60 * 1e3), (o = ' expires=' + a.toUTCString());
      }
      if (r) {
        var c = Be(t);
        i = '' !== c && null !== c ? c + ',' + e : e;
      }
      document.cookie = encodeURIComponent(t) + '=' + encodeURIComponent(i) + ';' + o;
    },
    Ye = function (t) {
      Xe(t, '', -1);
    };
  (window.gform = window.gform || {}),
    (window.gform.utils = window.gform.utils || {}),
    (Fe = window.gform.utils),
    Object.entries(l).forEach(function (t) {
      var e = f(t, 2),
        n = e[0],
        r = e[1];
      Fe[n] = r;
    });
})();
//# sourceMappingURL=utils.js.map
