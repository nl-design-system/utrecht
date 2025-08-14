!(function () {
  'use strict';
  var e,
    n = {
      3856: function (e, n, t) {
        var o = gform.utils,
          r = function () {
            (0, o.consoleInfo)('Gravity Forms Common: Initialized all javascript that targeted document ready.');
          },
          i = function () {
            (0, o.ready)(r);
          },
          u = window.gform_theme_config,
          a = {},
          d = window.gform,
          c = !1,
          f = function (e) {
            var n = e.target;
            if ((w(n) || m(n)) && !s()) {
              var t = '<input type="hidden" name="version_hash" value="'.concat(
                u.common.form.honeypot.version_hash,
                '" />',
              );
              n.insertAdjacentHTML('beforeend', t);
            }
          },
          m = function (e) {
            var n = e.dataset.formid,
              t = (0, o.getNodes)('#gform_save_'.concat(n), !0, e, !0);
            return t.length > 0 && '1' === t[0].value;
          },
          w = function (e) {
            var n = e.dataset.formid,
              t = (0, o.getNodes)('input[name = "gform_target_page_number_'.concat(n, '"]'), !0, e, !0)[0];
            return void 0 !== t && (0 === parseInt(t.value) || c);
          },
          s = function () {
            return (
              window._phantom ||
              window.callPhantom ||
              window.__phantomas ||
              window.Buffer ||
              window.emit ||
              window.spawn ||
              window.webdriver ||
              window._selenium ||
              window._Selenium_IDE_Recorder ||
              window.callSelenium ||
              window.__nightmare ||
              window.domAutomation ||
              window.domAutomationController ||
              window.document.__webdriver_evaluate ||
              window.document.__selenium_evaluate ||
              window.document.__webdriver_script_function ||
              window.document.__webdriver_script_func ||
              window.document.__webdriver_script_fn ||
              window.document.__fxdriver_evaluate ||
              window.document.__driver_unwrapped ||
              window.document.__webdriver_unwrapped ||
              window.document.__driver_evaluate ||
              window.document.__selenium_unwrapped ||
              window.document.__fxdriver_unwrapped ||
              window.document.documentElement.getAttribute('selenium') ||
              window.document.documentElement.getAttribute('webdriver') ||
              window.document.documentElement.getAttribute('driver')
            );
          },
          l = function () {
            (a.forms = (0, o.getNodes)('.gform_wrapper form', !0, document, !0)),
              a.forms.forEach(function (e) {
                return jQuery(document).on('submit', e, f);
              }),
              d.addAction('gform_frontend_pages_evaluated', function (e, n, t) {
                var o = parseInt(document.querySelector('#gform_target_page_number_' + t.options.formId).value, 10);
                (0 === o || (t.options.pages.length + 1 === o && !t.options.pages[o - 2].isVisible)) && (c = !0);
              }),
              (0, o.consoleInfo)('Gravity Forms Honeypot: Initialized.'),
              (0, o.consoleInfo)('Gravity Forms Form JS: Initialized..');
          },
          _ = function () {
            i(), l(), console.info('Gravity Forms Theme: Initialized all javascript that targeted document ready.');
          },
          p = gform_theme_config,
          v = t.n(p);
        (t.p = v().public_path), (0, o.ready)(_);
      },
    },
    t = {};
  function o(e) {
    var r = t[e];
    if (void 0 !== r) return r.exports;
    var i = (t[e] = { exports: {} });
    return n[e](i, i.exports, o), i.exports;
  }
  (o.m = n),
    (e = []),
    (o.O = function (n, t, r, i) {
      if (!t) {
        var u = 1 / 0;
        for (f = 0; f < e.length; f++) {
          (t = e[f][0]), (r = e[f][1]), (i = e[f][2]);
          for (var a = !0, d = 0; d < t.length; d++)
            (!1 & i || u >= i) &&
            Object.keys(o.O).every(function (e) {
              return o.O[e](t[d]);
            })
              ? t.splice(d--, 1)
              : ((a = !1), i < u && (u = i));
          if (a) {
            e.splice(f--, 1);
            var c = r();
            void 0 !== c && (n = c);
          }
        }
        return n;
      }
      i = i || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > i; f--) e[f] = e[f - 1];
      e[f] = [t, r, i];
    }),
    (o.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(n, { a: n }), n;
    }),
    (o.d = function (e, n) {
      for (var t in n) o.o(n, t) && !o.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
    }),
    (o.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (o.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (function () {
      var e;
      o.g.importScripts && (e = o.g.location + '');
      var n = o.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var t = n.getElementsByTagName('script');
        t.length && (e = t[t.length - 1].src);
      }
      if (!e) throw new Error('Automatic publicPath is not supported in this browser');
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (o.p = e);
    })(),
    (function () {
      var e = { 415: 0 };
      o.O.j = function (n) {
        return 0 === e[n];
      };
      var n = function (n, t) {
          var r,
            i,
            u = t[0],
            a = t[1],
            d = t[2],
            c = 0;
          if (
            u.some(function (n) {
              return 0 !== e[n];
            })
          ) {
            for (r in a) o.o(a, r) && (o.m[r] = a[r]);
            if (d) var f = d(o);
          }
          for (n && n(t); c < u.length; c++) (i = u[c]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return o.O(f);
        },
        t = (self.webpackChunkgravityforms = self.webpackChunkgravityforms || []);
      t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
    })(),
    o.O(void 0, [499], function () {
      return o(9553);
    });
  var r = o.O(void 0, [499], function () {
    return o(3856);
  });
  r = o.O(r);
})();
//# sourceMappingURL=scripts-theme.js.map
