!(function (t, e) {
  for (var s in e) t[s] = e[s];
})(
  window,
  (function (t) {
    var e = {};
    function s(i) {
      if (e[i]) return e[i].exports;
      var n = (e[i] = { i: i, l: !1, exports: {} });
      return t[i].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
    }
    return (
      (s.m = t),
      (s.c = e),
      (s.d = function (t, e, i) {
        s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
      }),
      (s.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (s.t = function (t, e) {
        if ((1 & e && (t = s(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (
          (s.r(i),
          Object.defineProperty(i, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var n in t)
            s.d(
              i,
              n,
              function (e) {
                return t[e];
              }.bind(null, n)
            );
        return i;
      }),
      (s.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return s.d(e, "a", e), e;
      }),
      (s.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (s.p = ""),
      s((s.s = 813))
    );
  })({
    135: function (t, e, s) {
      "use strict";
      var i = s(19),
        n = s.n(i)()(function (t) {
          return t[1];
        });
      n.push([
        t.i,
        '#theme-settings{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Gotham, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;font-size:13px !important;position:fixed;top:0;right:0;height:100%;z-index:99999999;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:230px;-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,0.2);box-shadow:0 0 20px 0 rgba(0,0,0,0.2);-webkit-transition:all .2s ease-in;-o-transition:all .2s ease-in;transition:all .2s ease-in;-webkit-transform:translateX(250px);-ms-transform:translateX(250px);transform:translateX(250px)}#theme-settings h5{position:relative;font-size:11px;font-weight:600}#theme-settings .theme-settings-header{font-size:11px}#theme-settings .disabled{color:#d1d2d3 !important}#theme-settings.theme-settings-open{-webkit-transition-delay:.1s;-o-transition-delay:.1s;transition-delay:.1s;-webkit-transform:none !important;-ms-transform:none !important;transform:none !important}#theme-settings .theme-settings-open-btn{position:absolute;top:90px;left:0;z-index:-1;display:block;width:40px;height:40px;border-top-left-radius:50%;border-bottom-left-radius:50%;background:#444;color:#fff !important;text-align:center;font-size:20px !important;line-height:40px;opacity:1;-webkit-transition:all .1s linear .2s;-o-transition:all .1s linear .2s;transition:all .1s linear .2s;-webkit-transform:translateX(-60px);-ms-transform:translateX(-60px);transform:translateX(-60px)}#theme-settings .theme-settings-open-btn::before{content:"";width:18px;height:18px;display:block;background-size:100% 100%;position:absolute;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BJREFUeNrUml1IFFEUx8fNh6jMkkjY2pDAaokksVrItGLXhQiUPiDIjOg58CmISPt4EyIK3yKQEKIPhKJeCnM/lMyHonop6CUKE01Eow+Mxe1/6AytSzvec+fOpH/4gei952NmnHvuuVOUzWYtF1oHDoGDIAHaFeddAntBD/NJOwJKQIM4GMjO1k8QVpgb5rG2ZkAaxHRikU6oY2eFNApqHObT38Yc5idArZcJOAVvKwO6QQNYyzTw7zIK8/skMRULn7gnoG6OMYvAMUZHvZLBAaHxKct7ffUygVIfEij1MoH9PiSwTzK4SLAORMBzHxKggLaDFyYTWMEG11v+6D0nMWXiEaJb+sbH4EmV4DWIS+7AHnAW9IExsBrEQNT6v+plvoByjuci6M9PgH6xy1oYSoPduY9QfAEFT6oHDbkJnDNkeAY8BCfABrAMLAYVoAl0gW+GfLXb1WiIK0K36gVbFOqXcnA9a0YhMthqwFAHCAgLw+a8slpHraoVppOuaO4piCMufafpf2AATGs+h8/AaRfP8R1wTXMuxZyyr8TmOTYahRRxcfVtVoIJod9RjtnK3y1lBEb6DQRvc1ngl2Lcas/NLSWo1rktuIUPDL7XJbZugVeFaqGbAkMvDSYgsdXtVMy9Exj6bDCB74Ld3lunBGYkewnD5UHAxKSwYG7QYPBLQYni2E1OCbQInG4zmIDE1vFCCVSBowJDTQYTkNiiGKvzW4sbwYjGQrbTwBpQBiY1FrKwvZC1gR+atcggKHaZQKemb4q5jQwkXRZUnS6Cb3HpOxHg9rYbnQJXuaUo0Ulww6XvHroKawxtaOhOVitc9SDoMuCPYg7am/qkvUk20JR6DO5zqT0CfvGaQW+5RnAALDHgK0WdFDuBqLQrPA9EMffltlVM3QU/lOQjqll9Ier7n+dbM86NrajCeYDXon7VU262reKLfIF3kkonNI1gOOu/htm3Y3yqzd0y3vBU+HTVP4AaMGGqhJ0Q1klu1awSvLQGHwRDPgQ/xK9gTzYRj3xIQORjPh7yTXqZQIkPCSz3MoGYYof6LpcNlQz9fE9xzy07UBGWv/Ug5fDuHgc7HOZHeEwhpdiHZ58a2ES5+sytYqdBlcLcKh47q0mr+7GH5Jj1XwpZfz63OcxL+xnFeR2g1vr7uc1H3QB+CzAA7A9pvcD5g+8AAAAASUVORK5CYII=");left:50%;top:50%;transform:translate(-50%, -50%);margin-left:2px}[dir=rtl] #theme-settings .theme-settings-open-btn{border-radius:0;border-top-right-radius:50%;border-bottom-right-radius:50%}[dir=rtl] #theme-settings .theme-settings-open-btn::before{margin-left:-2px}#theme-settings.theme-settings-open .theme-settings-open-btn{opacity:0;-webkit-transition-delay:0s;-o-transition-delay:0s;transition-delay:0s;-webkit-transform:none !important;-ms-transform:none !important;transform:none !important}#theme-settings .theme-settings-close-btn{position:absolute;top:50%;right:0;display:block;font-size:20px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}#theme-settings>h5{flex:0 0 auto}#theme-settings .theme-settings-inner{position:relative;overflow:auto;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;opacity:1;-webkit-transition:opacity .2s;-o-transition:opacity .2s;transition:opacity .2s}#theme-settings .theme-settings-inner>div:first-child>hr:first-of-type{display:none !important}#theme-settings .theme-settings-inner>div:first-child>h5:first-of-type{padding-top:0 !important}#theme-settings .theme-settings-themes-inner{position:relative;opacity:1;-webkit-transition:opacity .2s;-o-transition:opacity .2s;transition:opacity .2s}#theme-settings .theme-settings-theme-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;align-items:center;-ms-flex-align:center;-webkit-box-flex:1;-ms-flex:1 1 100%;flex:1 1 100%;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:10px;padding:0 24px;width:100%;cursor:pointer}#theme-settings .theme-settings-theme-item input{position:absolute;z-index:-1;opacity:0}#theme-settings .theme-settings-theme-item input ~ span{opacity:.25;-webkit-transition:all .2s;-o-transition:all .2s;transition:all .2s}#theme-settings .theme-settings-theme-item .theme-settings-theme-checkmark{display:inline-block;width:6px;height:12px;border-right:1px solid;border-bottom:1px solid;opacity:0;-webkit-transition:all .2s;-o-transition:all .2s;transition:all .2s;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}[dir=rtl] #theme-settings .theme-settings-theme-item .theme-settings-theme-checkmark{border-right:none;border-left:1px solid;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}#theme-settings .theme-settings-theme-item input:checked:not([disabled]) ~ span,#theme-settings .theme-settings-theme-item:hover input:not([disabled]) ~ span{opacity:1}#theme-settings .theme-settings-theme-item input:checked:not([disabled]) ~ span .theme-settings-theme-checkmark{opacity:1}#theme-settings .theme-settings-theme-colors span{display:block;margin:0 1px;width:10px;height:10px;border-radius:50%;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,0.1) inset;box-shadow:0 0 0 1px rgba(0,0,0,0.1) inset}.dark-style #theme-settings .theme-settings-theme-colors span{-webkit-box-shadow:0 0 0 1px rgba(255,255,255,0.1) inset;box-shadow:0 0 0 1px rgba(255,255,255,0.1) inset}#theme-settings.theme-settings-loading .theme-settings-inner,#theme-settings.theme-settings-loading-theme .theme-settings-themes-inner{opacity:.2}#theme-settings.theme-settings-loading .theme-settings-inner::after,#theme-settings.theme-settings-loading-theme .theme-settings-themes-inner::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:999;display:block}#theme-settings .theme-settings-navbarBg-inner[disabled] .theme-settings-bg-item,#theme-settings .theme-settings-sidenavBg-inner[disabled] .theme-settings-bg-item,#theme-settings .theme-settings-bg-item.disabled{opacity:.2;cursor:default}#theme-settings .theme-settings-bg-item{display:block;float:left;margin:3px;width:16px;height:16px;border-radius:2px;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,0.1) inset;box-shadow:0 0 0 1px rgba(0,0,0,0.1) inset;cursor:pointer}#theme-settings .theme-settings-bg-item.active{-webkit-box-shadow:0 0 0 2px #000;box-shadow:0 0 0 2px #000}#theme-settings .theme-settings-bg-item input{position:absolute;visibility:hidden;clip:rect(0, 0, 0, 0);pointer-events:none}.layout-sidenav-100vh #theme-settings{height:100vh}[dir=rtl] #theme-settings{right:auto;left:0;-webkit-transform:translateX(-250px);-ms-transform:translateX(-250px);transform:translateX(-250px)}[dir=rtl] #theme-settings .theme-settings-open-btn{right:0;left:auto;-webkit-transform:translateX(60px);-ms-transform:translateX(60px);transform:translateX(60px)}[dir=rtl] #theme-settings .theme-settings-close-btn{right:auto;left:0}[dir=rtl] #theme-settings .theme-settings-bg-item{float:right}\n',
        "",
      ]),
        (e.a = n);
    },
    18: function (t, e, s) {
      "use strict";
      var i,
        n = function () {
          return (
            void 0 === i &&
              (i = Boolean(window && document && document.all && !window.atob)),
            i
          );
        },
        a = (function () {
          var t = {};
          return function (e) {
            if (void 0 === t[e]) {
              var s = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                s instanceof window.HTMLIFrameElement
              )
                try {
                  s = s.contentDocument.head;
                } catch (t) {
                  s = null;
                }
              t[e] = s;
            }
            return t[e];
          };
        })(),
        r = [];
      function o(t) {
        for (var e = -1, s = 0; s < r.length; s++)
          if (r[s].identifier === t) {
            e = s;
            break;
          }
        return e;
      }
      function l(t, e) {
        for (var s = {}, i = [], n = 0; n < t.length; n++) {
          var a = t[n],
            l = e.base ? a[0] + e.base : a[0],
            c = s[l] || 0,
            h = "".concat(l, " ").concat(c);
          s[l] = c + 1;
          var d = o(h),
            g = { css: a[1], media: a[2], sourceMap: a[3] };
          -1 !== d
            ? (r[d].references++, r[d].updater(g))
            : r.push({ identifier: h, updater: f(g, e), references: 1 }),
            i.push(h);
        }
        return i;
      }
      function c(t) {
        var e = document.createElement("style"),
          i = t.attributes || {};
        if (void 0 === i.nonce) {
          var n = s.nc;
          n && (i.nonce = n);
        }
        if (
          (Object.keys(i).forEach(function (t) {
            e.setAttribute(t, i[t]);
          }),
          "function" == typeof t.insert)
        )
          t.insert(e);
        else {
          var r = a(t.insert || "head");
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(e);
        }
        return e;
      }
      var h,
        d =
          ((h = []),
          function (t, e) {
            return (h[t] = e), h.filter(Boolean).join("\n");
          });
      function g(t, e, s, i) {
        var n = s
          ? ""
          : i.media
          ? "@media ".concat(i.media, " {").concat(i.css, "}")
          : i.css;
        if (t.styleSheet) t.styleSheet.cssText = d(e, n);
        else {
          var a = document.createTextNode(n),
            r = t.childNodes;
          r[e] && t.removeChild(r[e]),
            r.length ? t.insertBefore(a, r[e]) : t.appendChild(a);
        }
      }
      function u(t, e, s) {
        var i = s.css,
          n = s.media,
          a = s.sourceMap;
        if (
          (n ? t.setAttribute("media", n) : t.removeAttribute("media"),
          a &&
            "undefined" != typeof btoa &&
            (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
              " */"
            )),
          t.styleSheet)
        )
          t.styleSheet.cssText = i;
        else {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(i));
        }
      }
      var v = null,
        m = 0;
      function f(t, e) {
        var s, i, n;
        if (e.singleton) {
          var a = m++;
          (s = v || (v = c(e))),
            (i = g.bind(null, s, a, !1)),
            (n = g.bind(null, s, a, !0));
        } else
          (s = c(e)),
            (i = u.bind(null, s, e)),
            (n = function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(s);
            });
        return (
          i(t),
          function (e) {
            if (e) {
              if (
                e.css === t.css &&
                e.media === t.media &&
                e.sourceMap === t.sourceMap
              )
                return;
              i((t = e));
            } else n();
          }
        );
      }
      t.exports = function (t, e) {
        (e = e || {}).singleton ||
          "boolean" == typeof e.singleton ||
          (e.singleton = n());
        var s = l((t = t || []), e);
        return function (t) {
          if (
            ((t = t || []),
            "[object Array]" === Object.prototype.toString.call(t))
          ) {
            for (var i = 0; i < s.length; i++) {
              var n = o(s[i]);
              r[n].references--;
            }
            for (var a = l(t, e), c = 0; c < s.length; c++) {
              var h = o(s[c]);
              0 === r[h].references && (r[h].updater(), r.splice(h, 1));
            }
            s = a;
          }
        };
      };
    },
    19: function (t, e, s) {
      "use strict";
      t.exports = function (t) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var s = t(e);
              return e[2] ? "@media ".concat(e[2], " {").concat(s, "}") : s;
            }).join("");
          }),
          (e.i = function (t, s, i) {
            "string" == typeof t && (t = [[null, t, ""]]);
            var n = {};
            if (i)
              for (var a = 0; a < this.length; a++) {
                var r = this[a][0];
                null != r && (n[r] = !0);
              }
            for (var o = 0; o < t.length; o++) {
              var l = [].concat(t[o]);
              (i && n[l[0]]) ||
                (s &&
                  (l[2]
                    ? (l[2] = "".concat(s, " and ").concat(l[2]))
                    : (l[2] = s)),
                e.push(l));
            }
          }),
          e
        );
      };
    },
    351: function (t, e) {
      t.exports =
        '<div id="theme-settings" class="theme-bg-white"> <a href="javascript:void(0)" class="theme-settings-open-btn" tabindex="-1"></a> <h5 class="p-4 m-0 line-height-1 font-weight-bolder bg-light theme-settings-header"> <span class="theme-settings-t-panel_header"></span> <a href="javascript:void(0)" class="theme-settings-close-btn font-weight-light px-4 py-2 text-body" tabindex="-1">&times;</a> </h5> <div class="theme-settings-inner pt-4"> <label class="m-0 px-4 pb-3 d-flex media align-items-middle theme-settings-rtl"> <div class="media-body"><span class="theme-settings-t-rtl_switcher"></span></div> <div class="switcher switcher-sm d-block m-0"> <input class="switcher-input" type="checkbox"> <span class="switcher-indicator"> <span class="switcher-yes"></span> <span class="switcher-no"></span> </span> </div> </label> <label class="m-0 px-4 pb-3 theme-settings-style w-100"> <select class="custom-select custom-select-sm d-block w-100"></select> </label> <div class="theme-settings-layout"> <hr class="m-0 border-light"> <h5 class="m-0 px-4 py-3 line-height-1 text-light d-block"> <span class="theme-settings-t-layout_header"></span> </h5> <label class="m-0 px-4 pb-3 d-block theme-settings-layoutPosition"> <select class="custom-select custom-select-sm d-block w-100"> <option value="static" class="theme-settings-t-layout_static"></option> <option value="static-offcanvas" class="theme-settings-t-layout_offcanvas"></option> <option value="fixed" class="theme-settings-t-layout_fixed"></option> <option value="fixed-offcanvas" class="theme-settings-t-layout_fixed_offcanvas"></option> </select> </label> <label class="m-0 px-4 pb-3 d-flex media align-items-middle theme-settings-layoutNavbarFixed"> <div class="media-body"><span class="theme-settings-t-layout_navbar_swicher"></span></div> <div class="switcher switcher-sm d-block m-0"> <input class="switcher-input" type="checkbox"> <span class="switcher-indicator"> <span class="switcher-yes"></span> <span class="switcher-no"></span> </span> </div> </label> <label class="m-0 px-4 pb-3 d-flex media align-items-middle theme-settings-layoutFooterFixed"> <div class="media-body"><span class="theme-settings-t-layout_footer_swicher"></span></div> <div class="switcher switcher-sm d-block m-0"> <input class="switcher-input" type="checkbox"> <span class="switcher-indicator"> <span class="switcher-yes"></span> <span class="switcher-no"></span> </span> </div> </label> <label class="m-0 px-4 pb-3 d-flex media align-items-middle theme-settings-layoutReversed"> <div class="media-body"><span class="theme-settings-t-layout_reversed_swicher"></span></div> <div class="switcher switcher-sm d-block m-0"> <input class="switcher-input" type="checkbox"> <span class="switcher-indicator"> <span class="switcher-yes"></span> <span class="switcher-no"></span> </span> </div> </label> </div> <div class="theme-settings-navbarBg"> <hr class="m-0 border-light"> <h5 class="m-0 px-4 py-3 line-height-1 text-light d-block"> <span class="theme-settings-t-navbar_bg_header"></span> </h5> <fieldset class="m-0 px-4 pb-3 d-block clearfix theme-settings-navbarBg-inner"></fieldset> </div> <div class="theme-settings-sidenavBg"> <hr class="m-0 border-light"> <h5 class="m-0 px-4 py-3 line-height-1 text-light d-block"> <span class="theme-settings-t-sidenav_bg_header"></span> </h5> <fieldset class="m-0 px-4 pb-3 d-block clearfix theme-settings-sidenavBg-inner"></fieldset> </div> <div class="theme-settings-footerBg"> <hr class="m-0 border-light"> <h5 class="m-0 px-4 py-3 line-height-1 text-light d-block"> <span class="theme-settings-t-footer_bg_header"></span> </h5> <fieldset class="m-0 px-4 pb-3 d-block clearfix theme-settings-footerBg-inner"></fieldset> </div> <div class="theme-settings-themes"> <hr class="m-0 border-light"> <h5 class="m-0 px-4 py-3 line-height-1 text-light d-block"> <span class="theme-settings-t-theme_header"></span> </h5> <div class="theme-settings-themes-inner"></div> </div> </div> </div> ';
    },
    352: function (t, e) {
      t.exports =
        '<label class="theme-settings-theme-item custom-controls-stacked"> <input type="radio" name="theme-settings-current-theme"> <span class="d-block mr-auto"> <span class="theme-settings-theme-checkmark"></span> &nbsp;&nbsp; <span class="theme-settings-theme-name"></span> </span> <span class="theme-settings-theme-colors d-flex"></span> </label> ';
    },
    813: function (t, e, s) {
      "use strict";
      s.r(e),
        s.d(e, "ThemeSettings", function () {
          return y;
        });
      var i = s(18),
        n = s.n(i),
        a = s(135),
        r = { insert: "head", singleton: !1 },
        o = (n()(a.a, r), a.a.locals, s(351)),
        l = s.n(o),
        c = s(352),
        h = s.n(c),
        d = s(92),
        g = s.n(d);
      function u(t, e, s) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = s),
          t
        );
      }
      function v(t, e) {
        for (var s = 0; s < e.length; s++) {
          var i = e[s];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var m = [
          "rtl",
          "style",
          "layoutPosition",
          "layoutNavbarFixed",
          "layoutFooterFixed",
          "layoutReversed",
          "navbarBg",
          "sidenavBg",
          "footerBg",
          "themes",
        ],
        f = ["light", "material", "dark"],
        y = (function () {
          function t(e) {
            var s = e.cssPath,
              i = e.themesPath,
              n = e.cssFilenamePattern,
              a = e.controls,
              r = e.styles,
              o = e.sidenavBgs,
              l = e.defaultSidenavBg,
              c = e.navbarBgs,
              h = e.defaultNavbarBg,
              d = e.footerBgs,
              g = e.defaultFooterBg,
              u = e.availableThemes,
              v = e.defaultTheme,
              y = e.pathResolver,
              b = e.onSettingsChange,
              p = e.lang;
            if (
              ((function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              !this._ssr)
            ) {
              if (!window.layoutHelpers)
                throw new Error("window.layoutHelpers required.");
              if (
                ((this.settings = {}),
                (this.settings.cssPath = s),
                (this.settings.themesPath = i),
                (this.settings.cssFilenamePattern = n || "%name%.css"),
                (this.settings.navbarBgs = c || t.NAVBAR_BGS),
                (this.settings.defaultNavbarBg = h || "navbar-theme"),
                (this.settings.sidenavBgs = o || t.SIDENAV_BGS),
                (this.settings.defaultSidenavBg = l || "sidenav-theme"),
                (this.settings.footerBgs = d || t.FOOTER_BGS),
                (this.settings.defaultFooterBg = g || "footer-theme"),
                (this.settings.availableThemes = u || t.AVAILABLE_THEMES),
                (this.settings.defaultTheme = this._getDefaultTheme(
                  void 0 !== v ? v : 1
                )),
                (this.settings.controls = a || m),
                (this.settings.styles = r || f),
                (this.settings.lang = p || "en"),
                (this.pathResolver =
                  y ||
                  function (t) {
                    return t;
                  }),
                this.settings.styles.length < 2)
              ) {
                var _ = this.settings.controls.indexOf("style");
                -1 !== _ &&
                  (this.settings.controls = this.settings.controls
                    .slice(0, _)
                    .concat(this.settings.controls.slice(_ + 1)));
              }
              (this.settings.onSettingsChange =
                "function" == typeof b ? b : function () {}),
                this._loadSettings(),
                (this._listeners = []),
                (this._controls = {}),
                this._initDirection(),
                this._initStyle(),
                this._initTheme(),
                this.setLayoutPosition(this.settings.layoutPosition, !1),
                this.setLayoutNavbarFixed(this.settings.layoutNavbarFixed, !1),
                this.setLayoutFooterFixed(this.settings.layoutFooterFixed, !1),
                this.setLayoutReversed(this.settings.layoutReversed, !1),
                this._setup(),
                this._waitForNavs();
            }
          }
          var e, s, i;
          return (
            (e = t),
            (s = [
              {
                key: "setRtl",
                value: function (t) {
                  this._hasControls("rtl") &&
                    (this._setSetting("Rtl", String(t)),
                    window.location.reload());
                },
              },
              {
                key: "setStyle",
                value: function (t) {
                  this._hasControls("style") &&
                    (this._setSetting(
                      "Style",
                      -1 === ["material", "dark"].indexOf(t) ? "light" : t
                    ),
                    window.location.reload());
                },
              },
              {
                key: "isLightStyle",
                value: function () {
                  return document.documentElement.classList.contains(
                    "light-style"
                  );
                },
              },
              {
                key: "isMaterialStyle",
                value: function () {
                  return document.documentElement.classList.contains(
                    "material-style"
                  );
                },
              },
              {
                key: "isDarkStyle",
                value: function () {
                  return document.documentElement.classList.contains(
                    "dark-style"
                  );
                },
              },
              {
                key: "setTheme",
                value: function (t) {
                  var e =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    s =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null;
                  if (this._hasControls("themes")) {
                    var i = this._getThemeByName(t);
                    if (i) {
                      (this.settings.theme = i),
                        e && this._setSetting("Theme", t);
                      var n = this.pathResolver(
                        this.settings.themesPath +
                          this.settings.cssFilenamePattern.replace(
                            "%name%",
                            t +
                              ("light" !== this.settings.style
                                ? "-".concat(this.settings.style)
                                : "")
                          )
                      );
                      this._loadStylesheets(
                        u(
                          {},
                          n,
                          document.querySelector(".theme-settings-theme-css")
                        ),
                        s || function () {}
                      ),
                        e &&
                          this.settings.onSettingsChange.call(
                            this,
                            this.settings
                          );
                    }
                  }
                },
              },
              {
                key: "setLayoutPosition",
                value: function (t) {
                  var e =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  this._hasControls("layoutPosition") &&
                    (("static" !== t &&
                      "static-offcanvas" !== t &&
                      "fixed" !== t &&
                      "fixed-offcanvas" !== t) ||
                      ((this.settings.layoutPosition = t),
                      e && this._setSetting("LayoutPosition", t),
                      window.layoutHelpers.setPosition(
                        "fixed" === t || "fixed-offcanvas" === t,
                        "static-offcanvas" === t || "fixed-offcanvas" === t
                      ),
                      e &&
                        this.settings.onSettingsChange.call(
                          this,
                          this.settings
                        )));
                },
              },
              {
                key: "setLayoutNavbarFixed",
                value: function (t) {
                  var e =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  this._hasControls("layoutNavbarFixed") &&
                    ((this.settings.layoutNavbarFixed = t),
                    e && this._setSetting("FixedNavbar", t),
                    window.layoutHelpers.setNavbarFixed(t),
                    e &&
                      this.settings.onSettingsChange.call(this, this.settings));
                },
              },
              {
                key: "setLayoutFooterFixed",
                value: function (t) {
                  var e =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  this._hasControls("layoutFooterFixed") &&
                    ((this.settings.layoutFooterFixed = t),
                    e && this._setSetting("FixedFooter", t),
                    window.layoutHelpers.setFooterFixed(t),
                    e &&
                      this.settings.onSettingsChange.call(this, this.settings));
                },
              },
              {
                key: "setLayoutReversed",
                value: function (t) {
                  var e =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  this._hasControls("layoutReversed") &&
                    ((this.settings.layoutReversed = t),
                    e && this._setSetting("LayoutReversed", t),
                    window.layoutHelpers.setReversed(t),
                    e &&
                      this.settings.onSettingsChange.call(this, this.settings));
                },
              },
              {
                key: "setNavbarBg",
                value: function (t) {
                  var e =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    s =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : document;
                  if (
                    this._hasControls("navbarBg") &&
                    -1 !== this.settings.navbarBgs.indexOf(t)
                  ) {
                    (this.settings.navbarBg = t),
                      e && this._setSetting("NavbarBg", t);
                    var i = s.querySelector(
                      ".layout-navbar.navbar, .layout-navbar .navbar"
                    );
                    if (i) {
                      (i.className = i.className.replace(
                        /^bg\-[^ ]+| bg\-[^ ]+/gi,
                        ""
                      )),
                        i.classList.remove("navbar-light"),
                        i.classList.remove("navbar-dark");
                      var n = t.split(" ");
                      i.classList.add("bg-".concat(n[0]));
                      for (var a = 1, r = n.length; a < r; a++)
                        i.classList.add(n[a]);
                      e &&
                        this.settings.onSettingsChange.call(
                          this,
                          this.settings
                        );
                    }
                  }
                },
              },
              {
                key: "setSidenavBg",
                value: function (t) {
                  var e =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    s =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : document;
                  if (
                    this._hasControls("sidenavBg") &&
                    -1 !== this.settings.sidenavBgs.indexOf(t)
                  ) {
                    (this.settings.sidenavBg = t),
                      e && this._setSetting("SidenavBg", t);
                    var i = s.querySelector(
                      ".layout-sidenav.sidenav, .layout-sidenav .sidenav, .layout-sidenav-horizontal.sidenav, .layout-sidenav-horizontal .sidenav"
                    );
                    if (i) {
                      (i.className = i.className.replace(
                        /^bg\-[^ ]+| bg\-[^ ]+/gi,
                        ""
                      )),
                        i.classList.remove("sidenav-light"),
                        i.classList.remove("sidenav-dark");
                      var n = t.split(" ");
                      i.classList.contains("sidenav-horizontal") &&
                        ((n = n
                          .join(" ")
                          .replace(" sidenav-dark", "")
                          .replace(" sidenav-light", "")
                          .split(" "))[0] = n[0].replace(/-darke?r?$/, "")),
                        i.classList.add("bg-".concat(n[0]));
                      for (var a = 1, r = n.length; a < r; a++)
                        i.classList.add(n[a]);
                      e &&
                        this.settings.onSettingsChange.call(
                          this,
                          this.settings
                        );
                    }
                  }
                },
              },
              {
                key: "setFooterBg",
                value: function (t) {
                  var e =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    s =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : document;
                  if (
                    this._hasControls("footerBg") &&
                    -1 !== this.settings.footerBgs.indexOf(t)
                  ) {
                    (this.settings.footerBg = t),
                      e && this._setSetting("FooterBg", t);
                    var i = s.querySelector(
                      ".layout-footer.footer, .layout-footer .footer"
                    );
                    if (i) {
                      (i.className = i.className.replace(
                        /^bg\-[^ ]+| bg\-[^ ]+/gi,
                        ""
                      )),
                        i.classList.remove("footer-light"),
                        i.classList.remove("footer-dark");
                      var n = t.split(" ");
                      i.classList.add("bg-".concat(n[0]));
                      for (var a = 1, r = n.length; a < r; a++)
                        i.classList.add(n[a]);
                      e &&
                        this.settings.onSettingsChange.call(
                          this,
                          this.settings
                        );
                    }
                  }
                },
              },
              {
                key: "setLang",
                value: function (e) {
                  var s = this,
                    i =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  if (e !== this.settings.lang || i) {
                    if (!t.LANGUAGES[e])
                      throw new Error('Language "'.concat(e, '" not found!'));
                    var n = t.LANGUAGES[e];
                    [
                      "panel_header",
                      "rtl_switcher",
                      "style_switcher_light",
                      "style_switcher_material",
                      "style_switcher_dark",
                      "layout_header",
                      "layout_static",
                      "layout_offcanvas",
                      "layout_fixed",
                      "layout_fixed_offcanvas",
                      "layout_navbar_swicher",
                      "layout_footer_swicher",
                      "layout_reversed_swicher",
                      "navbar_bg_header",
                      "sidenav_bg_header",
                      "footer_bg_header",
                      "theme_header",
                    ].forEach(function (t) {
                      var e = s.container.querySelector(
                        ".theme-settings-t-".concat(t)
                      );
                      e && (e.textContent = n[t]);
                    });
                    for (
                      var a = n.themes || {},
                        r =
                          this.container.querySelectorAll(
                            ".theme-settings-theme-item"
                          ) || [],
                        o = 0,
                        l = r.length;
                      o < l;
                      o++
                    ) {
                      var c = r[o].querySelector('input[type="radio"]').value;
                      r[o].querySelector(
                        ".theme-settings-theme-name"
                      ).textContent = a[c] || this._getThemeByName(c).title;
                    }
                    this.settings.lang = e;
                  }
                },
              },
              {
                key: "update",
                value: function () {
                  if (!this._ssr) {
                    var t = !!document.querySelector(".layout-navbar"),
                      e = !!document.querySelector(".layout-sidenav"),
                      s = !!document.querySelector(
                        ".layout-sidenav-horizontal.sidenav, .layout-sidenav-horizontal .sidenav"
                      ),
                      i = !!document.querySelector(".layout-wrapper.layout-1"),
                      n = !!document.querySelector(".layout-footer");
                    if (
                      (this._controls.layoutReversed &&
                        (e
                          ? (this._controls.layoutReversed.removeAttribute(
                              "disabled"
                            ),
                            this._controls.layoutReversedW.classList.remove(
                              "disabled"
                            ))
                          : (this._controls.layoutReversed.setAttribute(
                              "disabled",
                              "disabled"
                            ),
                            this._controls.layoutReversedW.classList.add(
                              "disabled"
                            ))),
                      this._controls.layoutNavbarFixed &&
                        (t
                          ? (this._controls.layoutNavbarFixed.removeAttribute(
                              "disabled"
                            ),
                            this._controls.layoutNavbarFixedW.classList.remove(
                              "disabled"
                            ))
                          : (this._controls.layoutNavbarFixed.setAttribute(
                              "disabled",
                              "disabled"
                            ),
                            this._controls.layoutNavbarFixedW.classList.add(
                              "disabled"
                            ))),
                      this._controls.layoutFooterFixed &&
                        (n
                          ? (this._controls.layoutFooterFixed.removeAttribute(
                              "disabled"
                            ),
                            this._controls.layoutFooterFixedW.classList.remove(
                              "disabled"
                            ))
                          : (this._controls.layoutFooterFixed.setAttribute(
                              "disabled",
                              "disabled"
                            ),
                            this._controls.layoutFooterFixedW.classList.add(
                              "disabled"
                            ))),
                      this._controls.layoutPosition &&
                        (e
                          ? (this._controls.layoutPosition
                              .querySelector('[value="static-offcanvas"]')
                              .removeAttribute("disabled"),
                            this._controls.layoutPosition
                              .querySelector('[value="fixed-offcanvas"]')
                              .removeAttribute("disabled"))
                          : (this._controls.layoutPosition
                              .querySelector('[value="static-offcanvas"]')
                              .setAttribute("disabled", "disabled"),
                            this._controls.layoutPosition
                              .querySelector('[value="fixed-offcanvas"]')
                              .setAttribute("disabled", "disabled")),
                        (!t && !e) || (!e && !i)
                          ? this._controls.layoutPosition.setAttribute(
                              "disabled",
                              "disabled"
                            )
                          : this._controls.layoutPosition.removeAttribute(
                              "disabled"
                            )),
                      this._controls.navbarBgWInner &&
                        (t
                          ? this._controls.navbarBgWInner.removeAttribute(
                              "disabled"
                            )
                          : this._controls.navbarBgWInner.setAttribute(
                              "disabled",
                              "disabled"
                            )),
                      this._controls.sidenavBgWInner)
                    ) {
                      var a = Array.prototype.slice.call(
                        document.querySelectorAll(
                          ".theme-settings-sidenavBg-inner .theme-settings-bg-item"
                        )
                      );
                      e || s
                        ? (a.forEach(function (t) {
                            t.classList.remove("disabled"),
                              t
                                .querySelector("input")
                                .removeAttribute("disabled");
                          }),
                          s &&
                            a.forEach(function (t) {
                              /-darke?r?/.test(t.className) &&
                                !/bg-dark/.test(t.className) &&
                                (t.classList.add("disabled"),
                                t
                                  .querySelector("input")
                                  .setAttribute("disabled", "disabled"));
                            }))
                        : a.forEach(function (t) {
                            t.classList.add("disabled"),
                              t
                                .querySelector("input")
                                .setAttribute("disabled", "disabled");
                          });
                    }
                    this._controls.footerBgWInner &&
                      (n
                        ? this._controls.footerBgWInner.removeAttribute(
                            "disabled"
                          )
                        : this._controls.footerBgWInner.setAttribute(
                            "disabled",
                            "disabled"
                          ));
                  }
                },
              },
              {
                key: "updateNavbarBg",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : document;
                  this.setNavbarBg(this.settings.navbarBg, !1, t);
                },
              },
              {
                key: "updateSidenavBg",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : document;
                  this.setSidenavBg(this.settings.sidenavBg, !1, t);
                },
              },
              {
                key: "updateFooterBg",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : document;
                  this.setFooterBg(this.settings.footerBg, !1, t);
                },
              },
              {
                key: "clearLocalStorage",
                value: function () {
                  this._ssr ||
                    (this._setSetting("Theme", ""),
                    this._setSetting("Rtl", ""),
                    this._setSetting("Style", ""),
                    this._setSetting("LayoutReversed", ""),
                    this._setSetting("FixedNavbar", ""),
                    this._setSetting("FixedFooter", ""),
                    this._setSetting("LayoutPosition", ""),
                    this._setSetting("NavbarBg", ""),
                    this._setSetting("SidenavBg", ""),
                    this._setSetting("FooterBg", ""));
                },
              },
              {
                key: "destroy",
                value: function () {
                  this._ssr ||
                    (this._cleanup(),
                    (this.settings = null),
                    this.container.parentNode.removeChild(this.container),
                    (this.container = null));
                },
              },
              {
                key: "_loadSettings",
                value: function () {
                  var t,
                    e = document.documentElement.classList,
                    s = this._getSetting("Rtl"),
                    i = this._getSetting("Style"),
                    n = this._getSetting("LayoutReversed"),
                    a = this._getSetting("FixedNavbar"),
                    r = this._getSetting("FixedFooter"),
                    o = this._getSetting("NavbarBg"),
                    l = this._getSetting("SidenavBg"),
                    c = this._getSetting("FooterBg"),
                    h = this._getSetting("LayoutPosition");
                  (t =
                    "" !== h &&
                    -1 !==
                      [
                        "static",
                        "static-offcanvas",
                        "fixed",
                        "fixed-offcanvas",
                      ].indexOf(h)
                      ? h
                      : e.contains("layout-offcanvas")
                      ? "static-offcanvas"
                      : e.contains("layout-fixed")
                      ? "fixed"
                      : e.contains("layout-fixed-offcanvas")
                      ? "fixed-offcanvas"
                      : "static"),
                    (this.settings.rtl =
                      "" !== s
                        ? "true" === s
                        : "rtl" ===
                          document.documentElement.getAttribute("dir")),
                    (this.settings.style =
                      -1 !== this.settings.styles.indexOf(i)
                        ? i
                        : e.contains("material-style")
                        ? "material"
                        : e.contains("dark-style")
                        ? "dark"
                        : "light"),
                    -1 === this.settings.styles.indexOf(this.settings.style) &&
                      (this.settings.style = this.settings.styles[0]),
                    (this.settings.layoutPosition = t),
                    (this.settings.layoutReversed =
                      "" !== n ? "true" === n : e.contains("layout-reversed")),
                    (this.settings.layoutNavbarFixed =
                      "" !== a
                        ? "true" === a
                        : e.contains("layout-navbar-fixed")),
                    (this.settings.layoutFooterFixed =
                      "" !== r
                        ? "true" === r
                        : e.contains("layout-footer-fixed")),
                    (this.settings.navbarBg =
                      -1 !== this.settings.navbarBgs.indexOf(o)
                        ? o
                        : this.settings.defaultNavbarBg),
                    (this.settings.sidenavBg =
                      -1 !== this.settings.sidenavBgs.indexOf(l)
                        ? l
                        : this.settings.defaultSidenavBg),
                    (this.settings.footerBg =
                      -1 !== this.settings.footerBgs.indexOf(c)
                        ? c
                        : this.settings.defaultFooterBg),
                    (this.settings.theme = this._getThemeByName(
                      this._getSetting("Theme"),
                      !0
                    )),
                    this._hasControls("rtl") ||
                      (this.settings.rtl =
                        "rtl" === document.documentElement.getAttribute("dir")),
                    this._hasControls("style") ||
                      (this.settings.style = e.contains("material-style")
                        ? "material"
                        : e.contains("dark-style")
                        ? "dark"
                        : "light"),
                    this._hasControls("layoutPosition") ||
                      (this.settings.layoutPosition = null),
                    this._hasControls("layoutReversed") ||
                      (this.settings.layoutReversed = null),
                    this._hasControls("layoutNavbarFixed") ||
                      (this.settings.layoutNavbarFixed = null),
                    this._hasControls("layoutFooterFixed") ||
                      (this.settings.layoutFooterFixed = null),
                    this._hasControls("navbarBg") ||
                      (this.settings.navbarBg = null),
                    this._hasControls("sidenavBg") ||
                      (this.settings.sidenavBg = null),
                    this._hasControls("footerBg") ||
                      (this.settings.footerBg = null),
                    this._hasControls("themes") || (this.settings.theme = null);
                },
              },
              {
                key: "_setup",
                value: function () {
                  var t = this,
                    e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : document;
                  this._cleanup(),
                    (this.container = this._getElementFromString(l.a));
                  var s = this.container.querySelector(
                      ".theme-settings-open-btn"
                    ),
                    i = function () {
                      t.container.classList.add("theme-settings-open"),
                        t.update(),
                        t._updateInterval && clearInterval(t._updateInterval),
                        (t._updateInterval = setInterval(function () {
                          t.update();
                        }, 1e3));
                    };
                  s.addEventListener("click", i),
                    this._listeners.push([s, "click", i]);
                  var n = this.container.querySelector(
                      ".theme-settings-close-btn"
                    ),
                    a = function () {
                      t.container.classList.remove("theme-settings-open"),
                        t._updateInterval &&
                          (clearInterval(t._updateInterval),
                          (t._updateInterval = null));
                    };
                  n.addEventListener("click", a),
                    this._listeners.push([n, "click", a]);
                  var r = this.container.querySelector(".theme-settings-rtl");
                  if (this._hasControls("rtl")) {
                    var o = r.querySelector("input");
                    this.settings.rtl && o.setAttribute("checked", "checked");
                    var c = function (e) {
                      t._loadingState(!0), t.setRtl(e.target.checked);
                    };
                    o.addEventListener("change", c),
                      this._listeners.push([o, "change", c]);
                  } else r.parentNode.removeChild(r);
                  var d = this.container.querySelector(".theme-settings-style");
                  if (this._hasControls("style")) {
                    var u = d.querySelector("select");
                    this.settings.styles.forEach(function (e) {
                      var s = t._getElementFromString(
                        '<option value="'
                          .concat(
                            e,
                            '" class="theme-settings-t-style_switcher_'
                          )
                          .concat(e, '" ')
                          .concat(
                            t.settings.style === e ? 'selected="selected"' : "",
                            "></option>"
                          )
                      );
                      u.appendChild(s);
                    });
                    var v = function (e) {
                      t._loadingState(!0), t.setStyle(e.target.value);
                    };
                    u.addEventListener("change", v),
                      this._listeners.push([u, "change", v]);
                  } else d.parentNode.removeChild(d);
                  var m = this.container.querySelector(
                    ".theme-settings-layout"
                  );
                  if (
                    this._hasControls(
                      "layoutPosition layoutNavbarFixed layoutFooterFixed layoutReversed",
                      !0
                    )
                  ) {
                    var f = this.container.querySelector(
                      ".theme-settings-layoutPosition"
                    );
                    if (this._hasControls("layoutPosition")) {
                      (this._controls.layoutPosition =
                        f.querySelector("select")),
                        (this._controls.layoutPosition.value =
                          this.settings.layoutPosition);
                      var y = function (e) {
                        return t.setLayoutPosition(e.target.value);
                      };
                      this._controls.layoutPosition.addEventListener(
                        "change",
                        y
                      ),
                        this._listeners.push([
                          this._controls.layoutPosition,
                          "change",
                          y,
                        ]);
                    } else f.parentNode.removeChild(f);
                    if (
                      ((this._controls.layoutNavbarFixedW =
                        this.container.querySelector(
                          ".theme-settings-layoutNavbarFixed"
                        )),
                      this._hasControls("layoutNavbarFixed"))
                    ) {
                      (this._controls.layoutNavbarFixed =
                        this._controls.layoutNavbarFixedW.querySelector(
                          "input"
                        )),
                        this.settings.layoutNavbarFixed &&
                          this._controls.layoutNavbarFixed.setAttribute(
                            "checked",
                            "checked"
                          );
                      var b = function (e) {
                        return t.setLayoutNavbarFixed(e.target.checked);
                      };
                      this._controls.layoutNavbarFixed.addEventListener(
                        "change",
                        b
                      ),
                        this._listeners.push([
                          this._controls.layoutNavbarFixed,
                          "change",
                          b,
                        ]);
                    } else
                      this._controls.layoutNavbarFixedW.parentNode.removeChild(
                        this._controls.layoutNavbarFixedW
                      );
                    if (
                      ((this._controls.layoutFooterFixedW =
                        this.container.querySelector(
                          ".theme-settings-layoutFooterFixed"
                        )),
                      this._hasControls("layoutFooterFixed"))
                    ) {
                      (this._controls.layoutFooterFixed =
                        this._controls.layoutFooterFixedW.querySelector(
                          "input"
                        )),
                        this.settings.layoutFooterFixed &&
                          this._controls.layoutFooterFixed.setAttribute(
                            "checked",
                            "checked"
                          );
                      var p = function (e) {
                        return t.setLayoutFooterFixed(e.target.checked);
                      };
                      this._controls.layoutFooterFixed.addEventListener(
                        "change",
                        p
                      ),
                        this._listeners.push([
                          this._controls.layoutFooterFixed,
                          "change",
                          p,
                        ]);
                    } else
                      this._controls.layoutFooterFixedW.parentNode.removeChild(
                        this._controls.layoutFooterFixedW
                      );
                    if (
                      ((this._controls.layoutReversedW =
                        this.container.querySelector(
                          ".theme-settings-layoutReversed"
                        )),
                      this._hasControls("layoutReversed"))
                    ) {
                      (this._controls.layoutReversed =
                        this._controls.layoutReversedW.querySelector("input")),
                        this.settings.layoutReversed &&
                          this._controls.layoutReversed.setAttribute(
                            "checked",
                            "checked"
                          );
                      var _ = function (e) {
                        return t.setLayoutReversed(e.target.checked);
                      };
                      this._controls.layoutReversed.addEventListener(
                        "change",
                        _
                      ),
                        this._listeners.push([
                          this._controls.layoutReversed,
                          "change",
                          _,
                        ]);
                    } else
                      this._controls.layoutReversedW.parentNode.removeChild(
                        this._controls.layoutReversedW
                      );
                  } else m.parentNode.removeChild(m);
                  var k = this.container.querySelector(
                    ".theme-settings-navbarBg"
                  );
                  this._hasControls("navbarBg")
                    ? ((this._controls.navbarBgWInner = k.querySelector(
                        ".theme-settings-navbarBg-inner"
                      )),
                      this.settings.navbarBgs.forEach(function (e) {
                        var s = t._getElementFromString(g.a),
                          i = s.querySelector("input");
                        s.classList.add("bg-".concat(e.split(" ")[0])),
                          (i.name = "theme-settings-navbarBg-input"),
                          (i.value = e),
                          t.settings.navbarBg === e &&
                            (i.setAttribute("checked", "checked"),
                            s.classList.add("active"));
                        var n = function (e) {
                          for (
                            var s = t._controls.navbarBgWInner.querySelectorAll(
                                ".theme-settings-bg-item"
                              ),
                              i = 0,
                              n = s.length;
                            i < n;
                            i++
                          )
                            s[i].classList.remove("active");
                          e.target.parentNode.classList.add("active"),
                            t.setNavbarBg(e.target.value);
                        };
                        i.addEventListener("change", n),
                          t._listeners.push([i, "change", n]),
                          t._controls.navbarBgWInner.appendChild(s);
                      }))
                    : k.parentNode.removeChild(k);
                  var x = this.container.querySelector(
                    ".theme-settings-sidenavBg"
                  );
                  this._hasControls("sidenavBg")
                    ? ((this._controls.sidenavBgWInner = x.querySelector(
                        ".theme-settings-sidenavBg-inner"
                      )),
                      this.settings.sidenavBgs.forEach(function (e) {
                        var s = t._getElementFromString(g.a),
                          i = s.querySelector("input");
                        s.classList.add("bg-".concat(e.split(" ")[0])),
                          (i.name = "theme-settings-sidenavBg-input"),
                          (i.value = e),
                          t.settings.sidenavBg === e &&
                            (i.setAttribute("checked", "checked"),
                            s.classList.add("active"));
                        var n = function (e) {
                          for (
                            var s =
                                t._controls.sidenavBgWInner.querySelectorAll(
                                  ".theme-settings-bg-item"
                                ),
                              i = 0,
                              n = s.length;
                            i < n;
                            i++
                          )
                            s[i].classList.remove("active");
                          e.target.parentNode.classList.add("active"),
                            t.setSidenavBg(e.target.value);
                        };
                        i.addEventListener("change", n),
                          t._listeners.push([i, "change", n]),
                          t._controls.sidenavBgWInner.appendChild(s);
                      }))
                    : x.parentNode.removeChild(x);
                  var S = this.container.querySelector(
                    ".theme-settings-footerBg"
                  );
                  this._hasControls("footerBg")
                    ? ((this._controls.footerBgWInner = S.querySelector(
                        ".theme-settings-footerBg-inner"
                      )),
                      this.settings.footerBgs.forEach(function (e) {
                        var s = t._getElementFromString(g.a),
                          i = s.querySelector("input");
                        s.classList.add("bg-".concat(e.split(" ")[0])),
                          (i.name = "theme-settings-footerBg-input"),
                          (i.value = e),
                          t.settings.footerBg === e &&
                            (i.setAttribute("checked", "checked"),
                            s.classList.add("active"));
                        var n = function (e) {
                          for (
                            var s = t._controls.footerBgWInner.querySelectorAll(
                                ".theme-settings-bg-item"
                              ),
                              i = 0,
                              n = s.length;
                            i < n;
                            i++
                          )
                            s[i].classList.remove("active");
                          e.target.parentNode.classList.add("active"),
                            t.setFooterBg(e.target.value);
                        };
                        i.addEventListener("change", n),
                          t._listeners.push([i, "change", n]),
                          t._controls.footerBgWInner.appendChild(s);
                      }))
                    : S.parentNode.removeChild(S);
                  var w = this.container.querySelector(
                    ".theme-settings-themes"
                  );
                  if (this._hasControls("themes")) {
                    var B = this.container.querySelector(
                      ".theme-settings-themes-inner"
                    );
                    this.settings.availableThemes.forEach(function (e) {
                      var s = t._getElementFromString(h.a),
                        i = s.querySelector("input"),
                        n = t.isDarkStyle() ? e.colorsDark : e.colors;
                      (i.value = e.name),
                        t.settings.theme.name === e.name &&
                          i.setAttribute("checked", "checked"),
                        (s.querySelector(
                          ".theme-settings-theme-colors"
                        ).innerHTML = '\n          <span style="background: '
                          .concat(
                            n.primary,
                            '"></span>\n          <span style="background: '
                          )
                          .concat(
                            n.navbar,
                            '"></span>\n          <span style="background: '
                          )
                          .concat(n.sidenav, '"></span>\n        '));
                      var a = function (e) {
                        t._loading ||
                          ((t._loading = !0),
                          t._loadingState(!0, !0),
                          t.setTheme(e.target.value, !0, function () {
                            (t._loading = !1), t._loadingState(!1, !0);
                          }));
                      };
                      i.addEventListener("change", a),
                        t._listeners.push([i, "change", a]),
                        B.appendChild(s);
                    });
                  } else w.parentNode.removeChild(w);
                  this.setLang(this.settings.lang, !0),
                    e === document
                      ? e.body
                        ? e.body.appendChild(this.container)
                        : window.addEventListener(
                            "DOMContentLoaded",
                            function () {
                              return e.body.appendChild(t.container);
                            }
                          )
                      : e.appendChild(this.container);
                },
              },
              {
                key: "_initDirection",
                value: function () {
                  this._hasControls("rtl") &&
                    document.documentElement.setAttribute(
                      "dir",
                      this.settings.rtl ? "rtl" : "ltr"
                    );
                },
              },
              {
                key: "_initStyle",
                value: function () {
                  if (this._hasControls("style")) {
                    var t = this.settings.style;
                    this._insertStylesheet(
                      "theme-settings-bootstrap-css",
                      this.pathResolver(
                        this.settings.cssPath +
                          this.settings.cssFilenamePattern.replace(
                            "%name%",
                            "bootstrap" + ("light" !== t ? "-".concat(t) : "")
                          )
                      )
                    ),
                      this._insertStylesheet(
                        "theme-settings-appwork-css",
                        this.pathResolver(
                          this.settings.cssPath +
                            this.settings.cssFilenamePattern.replace(
                              "%name%",
                              "appwork" + ("light" !== t ? "-".concat(t) : "")
                            )
                        )
                      ),
                      this._insertStylesheet(
                        "theme-settings-colors-css",
                        this.pathResolver(
                          this.settings.cssPath +
                            this.settings.cssFilenamePattern.replace(
                              "%name%",
                              "colors" + ("light" !== t ? "-".concat(t) : "")
                            )
                        )
                      ),
                      ("light" === t
                        ? ["material-style", "dark-style"]
                        : "material" === t
                        ? ["light-style", "dark-style"]
                        : ["light-style", "material-style"]
                      ).forEach(function (t) {
                        document.documentElement.classList.remove(t);
                      }),
                      document.documentElement.classList.add(
                        "".concat(t, "-style")
                      ),
                      "material" === t &&
                        window.attachMaterialRipple &&
                        (document.body
                          ? window.attachMaterialRipple()
                          : window.addEventListener(
                              "DOMContentLoaded",
                              function () {
                                return window.attachMaterialRipple();
                              }
                            ));
                  }
                },
              },
              {
                key: "_initTheme",
                value: function () {
                  this._hasControls("themes") &&
                    this._insertStylesheet(
                      "theme-settings-theme-css",
                      this.pathResolver(
                        this.settings.themesPath +
                          this.settings.cssFilenamePattern.replace(
                            "%name%",
                            this.settings.theme.name +
                              ("light" !== this.settings.style
                                ? "-".concat(this.settings.style)
                                : "")
                          )
                      )
                    );
                },
              },
              {
                key: "_insertStylesheet",
                value: function (t, e) {
                  var s = document.querySelector(".".concat(t));
                  if (
                    "number" == typeof document.documentMode &&
                    document.documentMode < 11
                  ) {
                    if (!s) return;
                    if (e === s.getAttribute("href")) return;
                    var i = document.createElement("link");
                    i.setAttribute("rel", "stylesheet"),
                      i.setAttribute("type", "text/css"),
                      (i.className = t),
                      i.setAttribute("href", e),
                      s.parentNode.insertBefore(i, s.nextSibling);
                  } else
                    document.write(
                      '<link rel="stylesheet" type="text/css" href="'
                        .concat(e, '" class="')
                        .concat(t, '">')
                    );
                  s.parentNode.removeChild(s);
                },
              },
              {
                key: "_loadStylesheets",
                value: function (t, e) {
                  var s = Object.keys(t),
                    i = s.length,
                    n = 0;
                  function a(t, e, s) {
                    var i = document.createElement("link");
                    i.setAttribute("href", t),
                      i.setAttribute("rel", "stylesheet"),
                      i.setAttribute("type", "text/css"),
                      (i.className = e.className);
                    var n,
                      a,
                      r = "sheet" in i ? "sheet" : "styleSheet",
                      o = "sheet" in i ? "cssRules" : "rules";
                    (n = setTimeout(function () {
                      clearInterval(a),
                        clearTimeout(n),
                        e.parentNode.removeChild(i),
                        s(!1, t);
                    }, 15e3)),
                      (a = setInterval(function () {
                        try {
                          i[r] &&
                            i[r][o].length &&
                            (clearInterval(a),
                            clearTimeout(n),
                            e.parentNode.removeChild(e),
                            s(!0));
                        } catch (t) {
                          console.error(t);
                        }
                      }, 10)),
                      e.parentNode.insertBefore(i, e.nextSibling);
                  }
                  for (var r = 0; r < s.length; r++)
                    a(s[r], t[s[r]], function (t, s) {
                      t ||
                        (console &&
                          "function" == typeof console.error &&
                          console.error(
                            "Error occured while loading stylesheets!"
                          ),
                        alert("Error occured while loading stylesheets!"),
                        console.log(s)),
                        ++n >= i && e();
                    });
                },
              },
              {
                key: "_loadingState",
                value: function (t, e) {
                  this.container.classList[t ? "add" : "remove"](
                    "theme-settings-loading".concat(e ? "-theme" : "")
                  );
                },
              },
              {
                key: "_waitForNavs",
                value: function () {
                  var t = this;
                  this._addObserver(
                    ".layout-navbar.navbar, .layout-navbar .navbar",
                    function (t) {
                      return (
                        t &&
                        t.classList &&
                        t.classList.contains("layout-navbar") &&
                        (t.classList.contains("navbar") ||
                          t.querySelector(".navbar"))
                      );
                    },
                    function () {
                      return t.setNavbarBg(t.settings.navbarBg, !1);
                    }
                  ),
                    this._addObserver(
                      ".layout-sidenav.sidenav, .layout-sidenav .sidenav, .layout-sidenav-horizontal.sidenav, .layout-sidenav-horizontal .sidenav",
                      function (t) {
                        return (
                          t &&
                          t.classList &&
                          (t.classList.contains("layout-sidenav") ||
                            t.classList.contains(
                              "layout-sidenav-horizontal"
                            )) &&
                          (t.classList.contains("sidenav") ||
                            t.querySelector(".sidenav"))
                        );
                      },
                      function () {
                        return t.setSidenavBg(t.settings.sidenavBg, !1);
                      }
                    ),
                    this._addObserver(
                      ".layout-footer.footer, .layout-footer .footer",
                      function (t) {
                        return (
                          t &&
                          t.classList &&
                          t.classList.contains("layout-footer") &&
                          (t.classList.contains("footer") ||
                            t.querySelector(".footer"))
                        );
                      },
                      function () {
                        return t.setFooterBg(t.settings.footerBg, !1);
                      }
                    ),
                    !document.body &&
                      ((this._observers && this._observers.length) ||
                        (this._intervals && this._intervals.length)) &&
                      window.addEventListener("load", function e() {
                        t._clearObservers(),
                          t.setNavbarBg(t.settings.navbarBg, !1),
                          t.setSidenavBg(t.settings.sidenavBg, !1),
                          t.setFooterBg(t.settings.footerBg, !1),
                          window.removeEventListener("load", e);
                      });
                },
              },
              {
                key: "_addObserver",
                value: function (t, e, s) {
                  var i,
                    n,
                    a = this;
                  this._observers || (this._observers = []),
                    this._intervals || (this._intervals = []),
                    document.querySelector(t)
                      ? s.call(this)
                      : document.body ||
                        ("undefined" != typeof MutationObserver
                          ? ((i = new MutationObserver(function (t) {
                              t.forEach(function (t) {
                                if (t.addedNodes)
                                  for (
                                    var n = 0;
                                    n < t.addedNodes.length;
                                    n++
                                  ) {
                                    var r = t.addedNodes[n];
                                    if (e.call(a, r)) {
                                      i.disconnect(),
                                        a._observers.splice(
                                          a._observers.indexOf(i),
                                          1
                                        ),
                                        (i = null),
                                        s.call(a);
                                      break;
                                    }
                                  }
                              });
                            })),
                            this._observers.push(i),
                            i.observe(document.documentElement, {
                              childList: !0,
                              subtree: !0,
                              attributes: !1,
                              characterData: !1,
                            }))
                          : ((n = setInterval(function () {
                              document.querySelector(t) &&
                                (clearInterval(n),
                                a._intervals.splice(a._intervals.indexOf(n), 1),
                                (n = null),
                                s.call(a));
                            }, 10)),
                            this._intervals.push(n)));
                },
              },
              {
                key: "_clearObservers",
                value: function () {
                  if (this._observers && this._observers.length)
                    for (var t = 0, e = this._observers.length; t < e; t++)
                      this._observers[t].disconnect();
                  if (this._intervals && this._intervals.length)
                    for (var s = 0, i = this._intervals.length; s < i; s++)
                      clearInterval(this._intervals[s]);
                  (this._observers = null), (this._intervals = null);
                },
              },
              {
                key: "_getElementFromString",
                value: function (t) {
                  var e = document.createElement("div");
                  return (e.innerHTML = t), e.firstChild;
                },
              },
              {
                key: "_getSetting",
                value: function (t) {
                  var e = null;
                  try {
                    e = localStorage.getItem("themeSettings".concat(t));
                  } catch (t) {}
                  return String(e || "");
                },
              },
              {
                key: "_setSetting",
                value: function (t, e) {
                  try {
                    localStorage.setItem("themeSettings".concat(t), String(e));
                  } catch (t) {}
                },
              },
              {
                key: "_removeListeners",
                value: function () {
                  for (var t = 0, e = this._listeners.length; t < e; t++)
                    this._listeners[t][0].removeEventListener(
                      this._listeners[t][1],
                      this._listeners[t][2]
                    );
                },
              },
              {
                key: "_cleanup",
                value: function () {
                  this._removeListeners(),
                    (this._listeners = []),
                    (this._controls = {}),
                    this._clearObservers(),
                    this._updateInterval &&
                      (clearInterval(this._updateInterval),
                      (this._updateInterval = null));
                },
              },
              {
                key: "_ssr",
                get: function () {
                  return "undefined" == typeof window;
                },
              },
              {
                key: "_hasControls",
                value: function (t) {
                  var e = this,
                    s =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  return t.split(" ").reduce(function (t, i) {
                    return (
                      -1 !== e.settings.controls.indexOf(i)
                        ? (s || !1 !== t) && (t = !0)
                        : (s && !0 === t) || (t = !1),
                      t
                    );
                  }, null);
                },
              },
              {
                key: "_getDefaultTheme",
                value: function (t) {
                  var e;
                  if (
                    !(e =
                      "string" == typeof t
                        ? this._getThemeByName(t, !1)
                        : this.settings.availableThemes[t])
                  )
                    throw new Error('Theme ID "'.concat(t, '" not found!'));
                  return e;
                },
              },
              {
                key: "_getThemeByName",
                value: function (t) {
                  for (
                    var e =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      s = this.settings.availableThemes,
                      i = 0,
                      n = s.length;
                    i < n;
                    i++
                  )
                    if (s[i].name === t) return s[i];
                  return e ? this.settings.defaultTheme : null;
                },
              },
            ]) && v(e.prototype, s),
            i && v(e, i),
            t
          );
        })();
      (y.AVAILABLE_THEMES = [
        {
          name: "theme-air",
          title: "Air",
          colors: { primary: "#3c97fe", navbar: "#f8f8f8", sidenav: "#f8f8f8" },
          colorsDark: {
            primary: "#3c97fe",
            navbar: "#25282e",
            sidenav: "#25282e",
          },
        },
        {
          name: "theme-corporate",
          title: "Corporate",
          colors: { primary: "#26B4FF", navbar: "#fff", sidenav: "#2e323a" },
          colorsDark: {
            primary: "#26B4FF",
            navbar: "#1c1f24",
            sidenav: "#2f3238",
          },
        },
        {
          name: "theme-cotton",
          title: "Сotton",
          colors: { primary: "#e84c64", navbar: "#ffffff", sidenav: "#ffffff" },
          colorsDark: {
            primary: "#e84c64",
            navbar: "#25282e",
            sidenav: "#d2d3d4",
          },
        },
        {
          name: "theme-gradient",
          title: "Gradient",
          colors: {
            primary: "#775cdc",
            navbar: "#ffffff",
            sidenav: "linear-gradient(to top, #4e54c8, #8c55e4)",
          },
          colorsDark: {
            primary: "#775cdc",
            navbar: "#1c1f24",
            sidenav: "linear-gradient(to top, #4e54c8, #8c55e4)",
          },
        },
        {
          name: "theme-paper",
          title: "Paper",
          colors: { primary: "#17b3a3", navbar: "#ffffff", sidenav: "#ffffff" },
          colorsDark: {
            primary: "#17b3a3",
            navbar: "#32353b",
            sidenav: "#ffffff",
          },
        },
        {
          name: "theme-shadow",
          title: "Shadow",
          colors: { primary: "#7b83ff", navbar: "#f8f8f8", sidenav: "#ececf9" },
          colorsDark: {
            primary: "#7b83ff",
            navbar: "#25282e",
            sidenav: "#424256",
          },
        },
        {
          name: "theme-soft",
          title: "Soft",
          colors: { primary: "#1cbb84", navbar: "#39517b", sidenav: "#ffffff" },
          colorsDark: {
            primary: "#1cbb84",
            navbar: "#39517b",
            sidenav: "#E9E9EA",
          },
        },
        {
          name: "theme-sunrise",
          title: "Sunrise",
          colors: { primary: "#fc5a5c", navbar: "#222222", sidenav: "#ffffff" },
          colorsDark: {
            primary: "#fc5a5c",
            navbar: "#fff",
            sidenav: "#1c1f24",
          },
        },
        {
          name: "theme-twitlight",
          title: "Twitlight",
          colors: { primary: "#4c84ff", navbar: "#343c44", sidenav: "#3f4853" },
          colorsDark: {
            primary: "#4c84ff",
            navbar: "#2b3239",
            sidenav: "#303942",
          },
        },
        {
          name: "theme-vibrant",
          title: "Vibrant",
          colors: { primary: "#fc5a5c", navbar: "#f8f8f8", sidenav: "#222222" },
          colorsDark: {
            primary: "#fc5a5c",
            navbar: "#25282e",
            sidenav: "#1c1f24",
          },
        },
      ]),
        (y.NAVBAR_BGS = [
          "navbar-theme",
          "primary",
          "primary-dark navbar-dark",
          "primary-darker navbar-dark",
          "secondary",
          "secondary-dark navbar-dark",
          "secondary-darker navbar-dark",
          "success",
          "success-dark navbar-dark",
          "success-darker navbar-dark",
          "info",
          "info-dark navbar-dark",
          "info-darker navbar-dark",
          "warning",
          "warning-dark navbar-light",
          "warning-darker navbar-light",
          "danger",
          "danger-dark navbar-dark",
          "danger-darker navbar-dark",
          "dark",
          "white",
          "light",
          "lighter",
        ]),
        (y.SIDENAV_BGS = [
          "sidenav-theme",
          "primary",
          "primary-dark sidenav-dark",
          "primary-darker sidenav-dark",
          "secondary",
          "secondary-dark sidenav-dark",
          "secondary-darker sidenav-dark",
          "success",
          "success-dark sidenav-dark",
          "success-darker sidenav-dark",
          "info",
          "info-dark sidenav-dark",
          "info-darker sidenav-dark",
          "warning",
          "warning-dark sidenav-light",
          "warning-darker sidenav-light",
          "danger",
          "danger-dark sidenav-dark",
          "danger-darker sidenav-dark",
          "dark",
          "white",
          "light",
          "lighter",
        ]),
        (y.FOOTER_BGS = [
          "footer-theme",
          "primary",
          "primary-dark footer-dark",
          "primary-darker footer-dark",
          "secondary",
          "secondary-dark footer-dark",
          "secondary-darker footer-dark",
          "success",
          "success-dark footer-dark",
          "success-darker footer-dark",
          "info",
          "info-dark footer-dark",
          "info-darker footer-dark",
          "warning",
          "warning-dark footer-light",
          "warning-darker footer-light",
          "danger",
          "danger-dark footer-dark",
          "danger-darker footer-dark",
          "dark",
          "white",
          "light",
          "lighter",
        ]),
        (y.LANGUAGES = {
          en: {
            panel_header: "SETTINGS",
            rtl_switcher: "RTL direction",
            style_switcher_light: "Light style",
            style_switcher_material: "Material style",
            style_switcher_dark: "Dark style",
            layout_header: "LAYOUT",
            layout_static: "Static",
            layout_offcanvas: "Offcanvas",
            layout_fixed: "Fixed",
            layout_fixed_offcanvas: "Fixed offcanvas",
            layout_navbar_swicher: "Fixed navbar",
            layout_footer_swicher: "Fixed footer",
            layout_reversed_swicher: "Reversed",
            navbar_bg_header: "NAVBAR BACKGROUND",
            sidenav_bg_header: "SIDENAV BACKGROUND",
            footer_bg_header: "FOOTER BACKGROUND",
            theme_header: "THEME",
          },
        });
    },
    92: function (t, e) {
      t.exports =
        '<label class="theme-settings-bg-item"> <input type="radio"> <span class="theme-settings-bg-name"></span> </label> ';
    },
  })
);
