!(function (t, e) {
  for (var a in e) t[a] = e[a];
})(
  window,
  (function (t) {
    var e = {};
    function a(i) {
      if (e[i]) return e[i].exports;
      var r = (e[i] = { i: i, l: !1, exports: {} });
      return t[i].call(r.exports, r, r.exports, a), (r.l = !0), r.exports;
    }
    return (
      (a.m = t),
      (a.c = e),
      (a.d = function (t, e, i) {
        a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
      }),
      (a.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (a.t = function (t, e) {
        if ((1 & e && (t = a(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (
          (a.r(i),
          Object.defineProperty(i, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var r in t)
            a.d(
              i,
              r,
              function (e) {
                return t[e];
              }.bind(null, r)
            );
        return i;
      }),
      (a.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return a.d(e, "a", e), e;
      }),
      (a.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (a.p = ""),
      a((a.s = 803))
    );
  })({
    0: function (t, e) {
      t.exports = window.jQuery;
    },
    348: function (t, e, a) {
      var i, r, n;
      /*!
       * jQuery Validation Plugin v1.19.3
       *
       * https://jqueryvalidation.org/
       *Ïđ
       * Copyright (c) 2021 Jörn Zaefferer
       * Released under the MIT license
       */ (r = [a(0)]),
        void 0 ===
          (n =
            "function" ==
            typeof (i = function (t) {
              t.extend(t.fn, {
                validate: function (e) {
                  if (this.length) {
                    var a = t.data(this[0], "validator");
                    return (
                      a ||
                      (this.attr("novalidate", "novalidate"),
                      (a = new t.validator(e, this[0])),
                      t.data(this[0], "validator", a),
                      a.settings.onsubmit &&
                        (this.on("click.validate", ":submit", function (e) {
                          (a.submitButton = e.currentTarget),
                            t(this).hasClass("cancel") && (a.cancelSubmit = !0),
                            void 0 !== t(this).attr("formnovalidate") &&
                              (a.cancelSubmit = !0);
                        }),
                        this.on("submit.validate", function (e) {
                          function i() {
                            var i, r;
                            return (
                              a.submitButton &&
                                (a.settings.submitHandler || a.formSubmitted) &&
                                (i = t("<input type='hidden'/>")
                                  .attr("name", a.submitButton.name)
                                  .val(t(a.submitButton).val())
                                  .appendTo(a.currentForm)),
                              !(
                                a.settings.submitHandler && !a.settings.debug
                              ) ||
                                ((r = a.settings.submitHandler.call(
                                  a,
                                  a.currentForm,
                                  e
                                )),
                                i && i.remove(),
                                void 0 !== r && r)
                            );
                          }
                          return (
                            a.settings.debug && e.preventDefault(),
                            a.cancelSubmit
                              ? ((a.cancelSubmit = !1), i())
                              : a.form()
                              ? a.pendingRequest
                                ? ((a.formSubmitted = !0), !1)
                                : i()
                              : (a.focusInvalid(), !1)
                          );
                        })),
                      a)
                    );
                  }
                  e &&
                    e.debug &&
                    window.console &&
                    console.warn(
                      "Nothing selected, can't validate, returning nothing."
                    );
                },
                valid: function () {
                  var e, a, i;
                  return (
                    t(this[0]).is("form")
                      ? (e = this.validate().form())
                      : ((i = []),
                        (e = !0),
                        (a = t(this[0].form).validate()),
                        this.each(function () {
                          (e = a.element(this) && e) ||
                            (i = i.concat(a.errorList));
                        }),
                        (a.errorList = i)),
                    e
                  );
                },
                rules: function (e, a) {
                  var i,
                    r,
                    n,
                    s,
                    o,
                    d,
                    l = this[0],
                    u =
                      void 0 !== this.attr("contenteditable") &&
                      "false" !== this.attr("contenteditable");
                  if (
                    null != l &&
                    (!l.form &&
                      u &&
                      ((l.form = this.closest("form")[0]),
                      (l.name = this.attr("name"))),
                    null != l.form)
                  ) {
                    if (e)
                      switch (
                        ((r = (i = t.data(l.form, "validator").settings).rules),
                        (n = t.validator.staticRules(l)),
                        e)
                      ) {
                        case "add":
                          t.extend(n, t.validator.normalizeRule(a)),
                            delete n.messages,
                            (r[l.name] = n),
                            a.messages &&
                              (i.messages[l.name] = t.extend(
                                i.messages[l.name],
                                a.messages
                              ));
                          break;
                        case "remove":
                          return a
                            ? ((d = {}),
                              t.each(a.split(/\s/), function (t, e) {
                                (d[e] = n[e]), delete n[e];
                              }),
                              d)
                            : (delete r[l.name], n);
                      }
                    return (
                      (s = t.validator.normalizeRules(
                        t.extend(
                          {},
                          t.validator.classRules(l),
                          t.validator.attributeRules(l),
                          t.validator.dataRules(l),
                          t.validator.staticRules(l)
                        ),
                        l
                      )).required &&
                        ((o = s.required),
                        delete s.required,
                        (s = t.extend({ required: o }, s))),
                      s.remote &&
                        ((o = s.remote),
                        delete s.remote,
                        (s = t.extend(s, { remote: o }))),
                      s
                    );
                  }
                },
              });
              var e,
                a = function (t) {
                  return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                };
              t.extend(t.expr.pseudos || t.expr[":"], {
                blank: function (e) {
                  return !a("" + t(e).val());
                },
                filled: function (e) {
                  var i = t(e).val();
                  return null !== i && !!a("" + i);
                },
                unchecked: function (e) {
                  return !t(e).prop("checked");
                },
              }),
                (t.validator = function (e, a) {
                  (this.settings = t.extend(!0, {}, t.validator.defaults, e)),
                    (this.currentForm = a),
                    this.init();
                }),
                (t.validator.format = function (e, a) {
                  return 1 === arguments.length
                    ? function () {
                        var a = t.makeArray(arguments);
                        return a.unshift(e), t.validator.format.apply(this, a);
                      }
                    : (void 0 === a ||
                        (arguments.length > 2 &&
                          a.constructor !== Array &&
                          (a = t.makeArray(arguments).slice(1)),
                        a.constructor !== Array && (a = [a]),
                        t.each(a, function (t, a) {
                          e = e.replace(
                            new RegExp("\\{" + t + "\\}", "g"),
                            function () {
                              return a;
                            }
                          );
                        })),
                      e);
                }),
                t.extend(t.validator, {
                  defaults: {
                    messages: {},
                    groups: {},
                    rules: {},
                    errorClass: "error",
                    pendingClass: "pending",
                    validClass: "valid",
                    errorElement: "label",
                    focusCleanup: !1,
                    focusInvalid: !0,
                    errorContainer: t([]),
                    errorLabelContainer: t([]),
                    onsubmit: !0,
                    ignore: ":hidden",
                    ignoreTitle: !1,
                    onfocusin: function (t) {
                      (this.lastActive = t),
                        this.settings.focusCleanup &&
                          (this.settings.unhighlight &&
                            this.settings.unhighlight.call(
                              this,
                              t,
                              this.settings.errorClass,
                              this.settings.validClass
                            ),
                          this.hideThese(this.errorsFor(t)));
                    },
                    onfocusout: function (t) {
                      this.checkable(t) ||
                        (!(t.name in this.submitted) && this.optional(t)) ||
                        this.element(t);
                    },
                    onkeyup: function (e, a) {
                      (9 === a.which && "" === this.elementValue(e)) ||
                        -1 !==
                          t.inArray(
                            a.keyCode,
                            [
                              16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144,
                              225,
                            ]
                          ) ||
                        ((e.name in this.submitted || e.name in this.invalid) &&
                          this.element(e));
                    },
                    onclick: function (t) {
                      t.name in this.submitted
                        ? this.element(t)
                        : t.parentNode.name in this.submitted &&
                          this.element(t.parentNode);
                    },
                    highlight: function (e, a, i) {
                      "radio" === e.type
                        ? this.findByName(e.name).addClass(a).removeClass(i)
                        : t(e).addClass(a).removeClass(i);
                    },
                    unhighlight: function (e, a, i) {
                      "radio" === e.type
                        ? this.findByName(e.name).removeClass(a).addClass(i)
                        : t(e).removeClass(a).addClass(i);
                    },
                  },
                  setDefaults: function (e) {
                    t.extend(t.validator.defaults, e);
                  },
                  messages: {
                    required: "Desculpe, este campo é obrigatório.",
                    phone: "Por favor, informe um número de celular válido.",
                    remote: "Please fix this field.",
                    email: "Please enter a valid email address.",
                    url: "Please enter a valid URL.",
                    date: "Please enter a valid date.",
                    dateISO: "Please enter a valid date (ISO).",
                    number: "Please enter a valid number.",
                    digits: "Please enter only digits.",
                    equalTo: "Please enter the same value again.",
                    maxlength: t.validator.format(
                      "Você digitou acima do limite de {0} caracteres."
                    ),
                    minlength: t.validator.format(
                      "Por favor, digite {0} caracteres ou mais."
                    ),
                    rangelength: t.validator.format(
                      "Please enter a value between {0} and {1} characters long."
                    ),
                    range: t.validator.format(
                      "Please enter a value between {0} and {1}."
                    ),
                    max: t.validator.format(
                      "Please enter a value less than or equal to {0}."
                    ),
                    min: t.validator.format(
                      "Please enter a value greater than or equal to {0}."
                    ),
                    step: t.validator.format("Please enter a multiple of {0}."),
                  },
                  autoCreateRanges: !1,
                  prototype: {
                    init: function () {
                      (this.labelContainer = t(
                        this.settings.errorLabelContainer
                      )),
                        (this.errorContext =
                          (this.labelContainer.length && this.labelContainer) ||
                          t(this.currentForm)),
                        (this.containers = t(this.settings.errorContainer).add(
                          this.settings.errorLabelContainer
                        )),
                        (this.submitted = {}),
                        (this.valueCache = {}),
                        (this.pendingRequest = 0),
                        (this.pending = {}),
                        (this.invalid = {}),
                        this.reset();
                      var e,
                        a = this.currentForm,
                        i = (this.groups = {});
                      function r(e) {
                        var i =
                          void 0 !== t(this).attr("contenteditable") &&
                          "false" !== t(this).attr("contenteditable");
                        if (
                          (!this.form &&
                            i &&
                            ((this.form = t(this).closest("form")[0]),
                            (this.name = t(this).attr("name"))),
                          a === this.form)
                        ) {
                          var r = t.data(this.form, "validator"),
                            n = "on" + e.type.replace(/^validate/, ""),
                            s = r.settings;
                          s[n] &&
                            !t(this).is(s.ignore) &&
                            s[n].call(r, this, e);
                        }
                      }
                      t.each(this.settings.groups, function (e, a) {
                        "string" == typeof a && (a = a.split(/\s/)),
                          t.each(a, function (t, a) {
                            i[a] = e;
                          });
                      }),
                        (e = this.settings.rules),
                        t.each(e, function (a, i) {
                          e[a] = t.validator.normalizeRule(i);
                        }),
                        t(this.currentForm)
                          .on(
                            "focusin.validate focusout.validate keyup.validate",
                            ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                            r
                          )
                          .on(
                            "click.validate",
                            "select, option, [type='radio'], [type='checkbox']",
                            r
                          ),
                        this.settings.invalidHandler &&
                          t(this.currentForm).on(
                            "invalid-form.validate",
                            this.settings.invalidHandler
                          );
                    },
                    form: function () {
                      return (
                        this.checkForm(),
                        t.extend(this.submitted, this.errorMap),
                        (this.invalid = t.extend({}, this.errorMap)),
                        this.valid() ||
                          t(this.currentForm).triggerHandler("invalid-form", [
                            this,
                          ]),
                        this.showErrors(),
                        this.valid()
                      );
                    },
                    checkForm: function () {
                      this.prepareForm();
                      for (
                        var t = 0, e = (this.currentElements = this.elements());
                        e[t];
                        t++
                      )
                        this.check(e[t]);
                      return this.valid();
                    },
                    element: function (e) {
                      var a,
                        i,
                        r = this.clean(e),
                        n = this.validationTargetFor(r),
                        s = this,
                        o = !0;
                      return (
                        void 0 === n
                          ? delete this.invalid[r.name]
                          : (this.prepareElement(n),
                            (this.currentElements = t(n)),
                            (i = this.groups[n.name]) &&
                              t.each(this.groups, function (t, e) {
                                e === i &&
                                  t !== n.name &&
                                  (r = s.validationTargetFor(
                                    s.clean(s.findByName(t))
                                  )) &&
                                  r.name in s.invalid &&
                                  (s.currentElements.push(r),
                                  (o = s.check(r) && o));
                              }),
                            (a = !1 !== this.check(n)),
                            (o = o && a),
                            (this.invalid[n.name] = !a),
                            this.numberOfInvalids() ||
                              (this.toHide = this.toHide.add(this.containers)),
                            this.showErrors(),
                            t(e).attr("aria-invalid", !a)),
                        o
                      );
                    },
                    showErrors: function (e) {
                      if (e) {
                        var a = this;
                        t.extend(this.errorMap, e),
                          (this.errorList = t.map(
                            this.errorMap,
                            function (t, e) {
                              return {
                                message: t,
                                element: a.findByName(e)[0],
                              };
                            }
                          )),
                          (this.successList = t.grep(
                            this.successList,
                            function (t) {
                              return !(t.name in e);
                            }
                          ));
                      }
                      this.settings.showErrors
                        ? this.settings.showErrors.call(
                            this,
                            this.errorMap,
                            this.errorList
                          )
                        : this.defaultShowErrors();
                    },
                    resetForm: function () {
                      t.fn.resetForm && t(this.currentForm).resetForm(),
                        (this.invalid = {}),
                        (this.submitted = {}),
                        this.prepareForm(),
                        this.hideErrors();
                      var e = this.elements()
                        .removeData("previousValue")
                        .removeAttr("aria-invalid");
                      this.resetElements(e);
                    },
                    resetElements: function (t) {
                      var e;
                      if (this.settings.unhighlight)
                        for (e = 0; t[e]; e++)
                          this.settings.unhighlight.call(
                            this,
                            t[e],
                            this.settings.errorClass,
                            ""
                          ),
                            this.findByName(t[e].name).removeClass(
                              this.settings.validClass
                            );
                      else
                        t.removeClass(this.settings.errorClass).removeClass(
                          this.settings.validClass
                        );
                    },
                    numberOfInvalids: function () {
                      return this.objectLength(this.invalid);
                    },
                    objectLength: function (t) {
                      var e,
                        a = 0;
                      for (e in t)
                        void 0 !== t[e] && null !== t[e] && !1 !== t[e] && a++;
                      return a;
                    },
                    hideErrors: function () {
                      this.hideThese(this.toHide);
                    },
                    hideThese: function (t) {
                      t.not(this.containers).text(""),
                        this.addWrapper(t).hide();
                    },
                    valid: function () {
                      return 0 === this.size();
                    },
                    size: function () {
                      return this.errorList.length;
                    },
                    focusInvalid: function () {
                      if (this.settings.focusInvalid)
                        try {
                          t(
                            this.findLastActive() ||
                              (this.errorList.length &&
                                this.errorList[0].element) ||
                              []
                          )
                            .filter(":visible")
                            .trigger("focus")
                            .trigger("focusin");
                        } catch (t) {}
                    },
                    findLastActive: function () {
                      var e = this.lastActive;
                      return (
                        e &&
                        1 ===
                          t.grep(this.errorList, function (t) {
                            return t.element.name === e.name;
                          }).length &&
                        e
                      );
                    },
                    elements: function () {
                      var e = this,
                        a = {};
                      return t(this.currentForm)
                        .find("input, select, textarea, [contenteditable]")
                        .not(":submit, :reset, :image, :disabled")
                        .not(this.settings.ignore)
                        .filter(function () {
                          var i = this.name || t(this).attr("name"),
                            r =
                              void 0 !== t(this).attr("contenteditable") &&
                              "false" !== t(this).attr("contenteditable");
                          return (
                            !i &&
                              e.settings.debug &&
                              window.console &&
                              console.error("%o has no name assigned", this),
                            r &&
                              ((this.form = t(this).closest("form")[0]),
                              (this.name = i)),
                            !(
                              this.form !== e.currentForm ||
                              i in a ||
                              !e.objectLength(t(this).rules()) ||
                              ((a[i] = !0), 0)
                            )
                          );
                        });
                    },
                    clean: function (e) {
                      return t(e)[0];
                    },
                    errors: function () {
                      var e = this.settings.errorClass.split(" ").join(".");
                      return t(
                        this.settings.errorElement + "." + e,
                        this.errorContext
                      );
                    },
                    resetInternals: function () {
                      (this.successList = []),
                        (this.errorList = []),
                        (this.errorMap = {}),
                        (this.toShow = t([])),
                        (this.toHide = t([]));
                    },
                    reset: function () {
                      this.resetInternals(), (this.currentElements = t([]));
                    },
                    prepareForm: function () {
                      this.reset(),
                        (this.toHide = this.errors().add(this.containers));
                    },
                    prepareElement: function (t) {
                      this.reset(), (this.toHide = this.errorsFor(t));
                    },
                    elementValue: function (e) {
                      var a,
                        i,
                        r = t(e),
                        n = e.type,
                        s =
                          void 0 !== r.attr("contenteditable") &&
                          "false" !== r.attr("contenteditable");
                      return "radio" === n || "checkbox" === n
                        ? this.findByName(e.name).filter(":checked").val()
                        : "number" === n && void 0 !== e.validity
                        ? e.validity.badInput
                          ? "NaN"
                          : r.val()
                        : ((a = s ? r.text() : r.val()),
                          "file" === n
                            ? "C:\\fakepath\\" === a.substr(0, 12)
                              ? a.substr(12)
                              : (i = a.lastIndexOf("/")) >= 0 ||
                                (i = a.lastIndexOf("\\")) >= 0
                              ? a.substr(i + 1)
                              : a
                            : "string" == typeof a
                            ? a.replace(/\r/g, "")
                            : a);
                    },
                    check: function (e) {
                      e = this.validationTargetFor(this.clean(e));
                      var a,
                        i,
                        r,
                        n,
                        s = t(e).rules(),
                        o = t.map(s, function (t, e) {
                          return e;
                        }).length,
                        d = !1,
                        l = this.elementValue(e);
                      for (i in ("function" == typeof s.normalizer
                        ? (n = s.normalizer)
                        : "function" == typeof this.settings.normalizer &&
                          (n = this.settings.normalizer),
                      n && ((l = n.call(e, l)), delete s.normalizer),
                      s)) {
                        r = { method: i, parameters: s[i] };
                        try {
                          if (
                            "dependency-mismatch" ===
                              (a = t.validator.methods[i].call(
                                this,
                                l,
                                e,
                                r.parameters
                              )) &&
                            1 === o
                          ) {
                            d = !0;
                            continue;
                          }
                          if (((d = !1), "pending" === a))
                            return void (this.toHide = this.toHide.not(
                              this.errorsFor(e)
                            ));
                          if (!a) return this.formatAndAdd(e, r), !1;
                        } catch (t) {
                          throw (
                            (this.settings.debug &&
                              window.console &&
                              console.log(
                                "Exception occurred when checking element " +
                                  e.id +
                                  ", check the '" +
                                  r.method +
                                  "' method.",
                                t
                              ),
                            t instanceof TypeError &&
                              (t.message +=
                                ".  Exception occurred when checking element " +
                                e.id +
                                ", check the '" +
                                r.method +
                                "' method."),
                            t)
                          );
                        }
                      }
                      if (!d)
                        return (
                          this.objectLength(s) && this.successList.push(e), !0
                        );
                    },
                    customDataMessage: function (e, a) {
                      return (
                        t(e).data(
                          "msg" +
                            a.charAt(0).toUpperCase() +
                            a.substring(1).toLowerCase()
                        ) || t(e).data("msg")
                      );
                    },
                    customMessage: function (t, e) {
                      var a = this.settings.messages[t];
                      return a && (a.constructor === String ? a : a[e]);
                    },
                    findDefined: function () {
                      for (var t = 0; t < arguments.length; t++)
                        if (void 0 !== arguments[t]) return arguments[t];
                    },
                    defaultMessage: function (e, a) {
                      "string" == typeof a && (a = { method: a });
                      var i = this.findDefined(
                          this.customMessage(e.name, a.method),
                          this.customDataMessage(e, a.method),
                          (!this.settings.ignoreTitle && e.title) || void 0,
                          t.validator.messages[a.method],
                          "<strong>Warning: No message defined for " +
                            e.name +
                            "</strong>"
                        ),
                        r = /\$?\{(\d+)\}/g;
                      return (
                        "function" == typeof i
                          ? (i = i.call(this, a.parameters, e))
                          : r.test(i) &&
                            (i = t.validator.format(
                              i.replace(r, "{$1}"),
                              a.parameters
                            )),
                        i
                      );
                    },
                    formatAndAdd: function (t, e) {
                      var a = this.defaultMessage(t, e);
                      this.errorList.push({
                        message: a,
                        element: t,
                        method: e.method,
                      }),
                        (this.errorMap[t.name] = a),
                        (this.submitted[t.name] = a);
                    },
                    addWrapper: function (t) {
                      return (
                        this.settings.wrapper &&
                          (t = t.add(t.parent(this.settings.wrapper))),
                        t
                      );
                    },
                    defaultShowErrors: function () {
                      var t, e, a;
                      for (t = 0; this.errorList[t]; t++)
                        (a = this.errorList[t]),
                          this.settings.highlight &&
                            this.settings.highlight.call(
                              this,
                              a.element,
                              this.settings.errorClass,
                              this.settings.validClass
                            ),
                          this.showLabel(a.element, a.message);
                      if (
                        (this.errorList.length &&
                          (this.toShow = this.toShow.add(this.containers)),
                        this.settings.success)
                      )
                        for (t = 0; this.successList[t]; t++)
                          this.showLabel(this.successList[t]);
                      if (this.settings.unhighlight)
                        for (t = 0, e = this.validElements(); e[t]; t++)
                          this.settings.unhighlight.call(
                            this,
                            e[t],
                            this.settings.errorClass,
                            this.settings.validClass
                          );
                      (this.toHide = this.toHide.not(this.toShow)),
                        this.hideErrors(),
                        this.addWrapper(this.toShow).show();
                    },
                    validElements: function () {
                      return this.currentElements.not(this.invalidElements());
                    },
                    invalidElements: function () {
                      return t(this.errorList).map(function () {
                        return this.element;
                      });
                    },
                    showLabel: function (e, a) {
                      var i,
                        r,
                        n,
                        s,
                        o = this.errorsFor(e),
                        d = this.idOrName(e),
                        l = t(e).attr("aria-describedby");
                      o.length
                        ? (o
                            .removeClass(this.settings.validClass)
                            .addClass(this.settings.errorClass),
                          o.html(a))
                        : ((i = o =
                            t("<" + this.settings.errorElement + ">")
                              .attr("id", d + "-error")
                              .addClass(this.settings.errorClass)
                              .html(a || "")),
                          this.settings.wrapper &&
                            (i = o
                              .hide()
                              .show()
                              .wrap("<" + this.settings.wrapper + "/>")
                              .parent()),
                          this.labelContainer.length
                            ? this.labelContainer.append(i)
                            : this.settings.errorPlacement
                            ? this.settings.errorPlacement.call(this, i, t(e))
                            : i.insertAfter(e),
                          o.is("label")
                            ? o.attr("for", d)
                            : 0 ===
                                o.parents(
                                  "label[for='" + this.escapeCssMeta(d) + "']"
                                ).length &&
                              ((n = o.attr("id")),
                              l
                                ? l.match(
                                    new RegExp(
                                      "\\b" + this.escapeCssMeta(n) + "\\b"
                                    )
                                  ) || (l += " " + n)
                                : (l = n),
                              t(e).attr("aria-describedby", l),
                              (r = this.groups[e.name]) &&
                                ((s = this),
                                t.each(s.groups, function (e, a) {
                                  a === r &&
                                    t(
                                      "[name='" + s.escapeCssMeta(e) + "']",
                                      s.currentForm
                                    ).attr("aria-describedby", o.attr("id"));
                                })))),
                        !a &&
                          this.settings.success &&
                          (o.text(""),
                          "string" == typeof this.settings.success
                            ? o.addClass(this.settings.success)
                            : this.settings.success(o, e)),
                        (this.toShow = this.toShow.add(o));
                    },
                    errorsFor: function (e) {
                      var a = this.escapeCssMeta(this.idOrName(e)),
                        i = t(e).attr("aria-describedby"),
                        r = "label[for='" + a + "'], label[for='" + a + "'] *";
                      return (
                        i &&
                          (r =
                            r +
                            ", #" +
                            this.escapeCssMeta(i).replace(/\s+/g, ", #")),
                        this.errors().filter(r)
                      );
                    },
                    escapeCssMeta: function (t) {
                      return t.replace(
                        /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,
                        "\\$1"
                      );
                    },
                    idOrName: function (t) {
                      return (
                        this.groups[t.name] ||
                        (this.checkable(t) ? t.name : t.id || t.name)
                      );
                    },
                    validationTargetFor: function (e) {
                      return (
                        this.checkable(e) && (e = this.findByName(e.name)),
                        t(e).not(this.settings.ignore)[0]
                      );
                    },
                    checkable: function (t) {
                      return /radio|checkbox/i.test(t.type);
                    },
                    findByName: function (e) {
                      return t(this.currentForm).find(
                        "[name='" + this.escapeCssMeta(e) + "']"
                      );
                    },
                    getLength: function (e, a) {
                      switch (a.nodeName.toLowerCase()) {
                        case "select":
                          return t("option:selected", a).length;
                        case "input":
                          if (this.checkable(a))
                            return this.findByName(a.name).filter(":checked")
                              .length;
                      }
                      return e.length;
                    },
                    depend: function (t, e) {
                      return (
                        !this.dependTypes[typeof t] ||
                        this.dependTypes[typeof t](t, e)
                      );
                    },
                    dependTypes: {
                      boolean: function (t) {
                        return t;
                      },
                      string: function (e, a) {
                        return !!t(e, a.form).length;
                      },
                      function: function (t, e) {
                        return t(e);
                      },
                    },
                    optional: function (e) {
                      var a = this.elementValue(e);
                      return (
                        !t.validator.methods.required.call(this, a, e) &&
                        "dependency-mismatch"
                      );
                    },
                    startRequest: function (e) {
                      this.pending[e.name] ||
                        (this.pendingRequest++,
                        t(e).addClass(this.settings.pendingClass),
                        (this.pending[e.name] = !0));
                    },
                    stopRequest: function (e, a) {
                      this.pendingRequest--,
                        this.pendingRequest < 0 && (this.pendingRequest = 0),
                        delete this.pending[e.name],
                        t(e).removeClass(this.settings.pendingClass),
                        a &&
                        0 === this.pendingRequest &&
                        this.formSubmitted &&
                        this.form()
                          ? (t(this.currentForm).submit(),
                            this.submitButton &&
                              t(
                                "input:hidden[name='" +
                                  this.submitButton.name +
                                  "']",
                                this.currentForm
                              ).remove(),
                            (this.formSubmitted = !1))
                          : !a &&
                            0 === this.pendingRequest &&
                            this.formSubmitted &&
                            (t(this.currentForm).triggerHandler(
                              "invalid-form",
                              [this]
                            ),
                            (this.formSubmitted = !1));
                    },
                    previousValue: function (e, a) {
                      return (
                        (a = ("string" == typeof a && a) || "remote"),
                        t.data(e, "previousValue") ||
                          t.data(e, "previousValue", {
                            old: null,
                            valid: !0,
                            message: this.defaultMessage(e, { method: a }),
                          })
                      );
                    },
                    destroy: function () {
                      this.resetForm(),
                        t(this.currentForm)
                          .off(".validate")
                          .removeData("validator")
                          .find(".validate-equalTo-blur")
                          .off(".validate-equalTo")
                          .removeClass("validate-equalTo-blur")
                          .find(".validate-lessThan-blur")
                          .off(".validate-lessThan")
                          .removeClass("validate-lessThan-blur")
                          .find(".validate-lessThanEqual-blur")
                          .off(".validate-lessThanEqual")
                          .removeClass("validate-lessThanEqual-blur")
                          .find(".validate-greaterThanEqual-blur")
                          .off(".validate-greaterThanEqual")
                          .removeClass("validate-greaterThanEqual-blur")
                          .find(".validate-greaterThan-blur")
                          .off(".validate-greaterThan")
                          .removeClass("validate-greaterThan-blur");
                    },
                  },
                  classRuleSettings: {
                    required: { required: !0 },
                    email: { email: !0 },
                    url: { url: !0 },
                    date: { date: !0 },
                    dateISO: { dateISO: !0 },
                    number: { number: !0 },
                    digits: { digits: !0 },
                    creditcard: { creditcard: !0 },
                  },
                  addClassRules: function (e, a) {
                    e.constructor === String
                      ? (this.classRuleSettings[e] = a)
                      : t.extend(this.classRuleSettings, e);
                  },
                  classRules: function (e) {
                    var a = {},
                      i = t(e).attr("class");
                    return (
                      i &&
                        t.each(i.split(" "), function () {
                          this in t.validator.classRuleSettings &&
                            t.extend(a, t.validator.classRuleSettings[this]);
                        }),
                      a
                    );
                  },
                  normalizeAttributeRule: function (t, e, a, i) {
                    /min|max|step/.test(a) &&
                      (null === e || /number|range|text/.test(e)) &&
                      ((i = Number(i)), isNaN(i) && (i = void 0)),
                      i || 0 === i
                        ? (t[a] = i)
                        : e === a && "range" !== e && (t[a] = !0);
                  },
                  attributeRules: function (e) {
                    var a,
                      i,
                      r = {},
                      n = t(e),
                      s = e.getAttribute("type");
                    for (a in t.validator.methods)
                      "required" === a
                        ? ("" === (i = e.getAttribute(a)) && (i = !0),
                          (i = !!i))
                        : (i = n.attr(a)),
                        this.normalizeAttributeRule(r, s, a, i);
                    return (
                      r.maxlength &&
                        /-1|2147483647|524288/.test(r.maxlength) &&
                        delete r.maxlength,
                      r
                    );
                  },
                  dataRules: function (e) {
                    var a,
                      i,
                      r = {},
                      n = t(e),
                      s = e.getAttribute("type");
                    for (a in t.validator.methods)
                      "" ===
                        (i = n.data(
                          "rule" +
                            a.charAt(0).toUpperCase() +
                            a.substring(1).toLowerCase()
                        )) && (i = !0),
                        this.normalizeAttributeRule(r, s, a, i);
                    return r;
                  },
                  staticRules: function (e) {
                    var a = {},
                      i = t.data(e.form, "validator");
                    return (
                      i.settings.rules &&
                        (a =
                          t.validator.normalizeRule(i.settings.rules[e.name]) ||
                          {}),
                      a
                    );
                  },
                  normalizeRules: function (e, a) {
                    return (
                      t.each(e, function (i, r) {
                        if (!1 !== r) {
                          if (r.param || r.depends) {
                            var n = !0;
                            switch (typeof r.depends) {
                              case "string":
                                n = !!t(r.depends, a.form).length;
                                break;
                              case "function":
                                n = r.depends.call(a, a);
                            }
                            n
                              ? (e[i] = void 0 === r.param || r.param)
                              : (t
                                  .data(a.form, "validator")
                                  .resetElements(t(a)),
                                delete e[i]);
                          }
                        } else delete e[i];
                      }),
                      t.each(e, function (t, i) {
                        e[t] =
                          "function" == typeof i && "normalizer" !== t
                            ? i(a)
                            : i;
                      }),
                      t.each(["minlength", "maxlength"], function () {
                        e[this] && (e[this] = Number(e[this]));
                      }),
                      t.each(["rangelength", "range"], function () {
                        var t;
                        e[this] &&
                          (Array.isArray(e[this])
                            ? (e[this] = [
                                Number(e[this][0]),
                                Number(e[this][1]),
                              ])
                            : "string" == typeof e[this] &&
                              ((t = e[this]
                                .replace(/[\[\]]/g, "")
                                .split(/[\s,]+/)),
                              (e[this] = [Number(t[0]), Number(t[1])])));
                      }),
                      t.validator.autoCreateRanges &&
                        (null != e.min &&
                          null != e.max &&
                          ((e.range = [e.min, e.max]),
                          delete e.min,
                          delete e.max),
                        null != e.minlength &&
                          null != e.maxlength &&
                          ((e.rangelength = [e.minlength, e.maxlength]),
                          delete e.minlength,
                          delete e.maxlength)),
                      e
                    );
                  },
                  normalizeRule: function (e) {
                    if ("string" == typeof e) {
                      var a = {};
                      t.each(e.split(/\s/), function () {
                        a[this] = !0;
                      }),
                        (e = a);
                    }
                    return e;
                  },
                  addMethod: function (e, a, i) {
                    (t.validator.methods[e] = a),
                      (t.validator.messages[e] =
                        void 0 !== i ? i : t.validator.messages[e]),
                      a.length < 3 &&
                        t.validator.addClassRules(
                          e,
                          t.validator.normalizeRule(e)
                        );
                  },
                  methods: {
                    required: function (e, a, i) {
                      if (!this.depend(i, a)) return "dependency-mismatch";
                      if ("select" === a.nodeName.toLowerCase()) {
                        var r = t(a).val();
                        return r && r.length > 0;
                      }
                      return this.checkable(a)
                        ? this.getLength(e, a) > 0
                        : null != e && e.length > 0;
                    },
                    email: function (t, e) {
                      return (
                        this.optional(e) ||
                        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                          t
                        )
                      );
                    },
                    url: function (t, e) {
                      return (
                        this.optional(e) ||
                        /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
                          t
                        )
                      );
                    },
                    date:
                      ((e = !1),
                      function (t, a) {
                        return (
                          e ||
                            ((e = !0),
                            this.settings.debug &&
                              window.console &&
                              console.warn(
                                "The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`."
                              )),
                          this.optional(a) ||
                            !/Invalid|NaN/.test(new Date(t).toString())
                        );
                      }),
                    dateISO: function (t, e) {
                      return (
                        this.optional(e) ||
                        /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
                          t
                        )
                      );
                    },
                    number: function (t, e) {
                      return (
                        this.optional(e) ||
                        /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                      );
                    },
                    digits: function (t, e) {
                      return this.optional(e) || /^\d+$/.test(t);
                    },
                    minlength: function (t, e, a) {
                      var i = Array.isArray(t)
                        ? t.length
                        : this.getLength(t, e);
                      return this.optional(e) || i >= a;
                    },
                    maxlength: function (t, e, a) {
                      var i = Array.isArray(t)
                        ? t.length
                        : this.getLength(t, e);
                      return this.optional(e) || i <= a;
                    },
                    rangelength: function (t, e, a) {
                      var i = Array.isArray(t)
                        ? t.length
                        : this.getLength(t, e);
                      return this.optional(e) || (i >= a[0] && i <= a[1]);
                    },
                    min: function (t, e, a) {
                      return this.optional(e) || t >= a;
                    },
                    max: function (t, e, a) {
                      return this.optional(e) || t <= a;
                    },
                    range: function (t, e, a) {
                      return this.optional(e) || (t >= a[0] && t <= a[1]);
                    },
                    step: function (e, a, i) {
                      var r,
                        n = t(a).attr("type"),
                        s =
                          "Step attribute on input type " +
                          n +
                          " is not supported.",
                        o = new RegExp("\\b" + n + "\\b"),
                        d = function (t) {
                          var e = ("" + t).match(/(?:\.(\d+))?$/);
                          return e && e[1] ? e[1].length : 0;
                        },
                        l = function (t) {
                          return Math.round(t * Math.pow(10, r));
                        },
                        u = !0;
                      if (n && !o.test(["text", "number", "range"].join()))
                        throw new Error(s);
                      return (
                        (r = d(i)),
                        (d(e) > r || l(e) % l(i) != 0) && (u = !1),
                        this.optional(a) || u
                      );
                    },
                    equalTo: function (e, a, i) {
                      var r = t(i);
                      return (
                        this.settings.onfocusout &&
                          r.not(".validate-equalTo-blur").length &&
                          r
                            .addClass("validate-equalTo-blur")
                            .on("blur.validate-equalTo", function () {
                              t(a).valid();
                            }),
                        e === r.val()
                      );
                    },
                    remote: function (e, a, i, r) {
                      if (this.optional(a)) return "dependency-mismatch";
                      r = ("string" == typeof r && r) || "remote";
                      var n,
                        s,
                        o,
                        d = this.previousValue(a, r);
                      return (
                        this.settings.messages[a.name] ||
                          (this.settings.messages[a.name] = {}),
                        (d.originalMessage =
                          d.originalMessage ||
                          this.settings.messages[a.name][r]),
                        (this.settings.messages[a.name][r] = d.message),
                        (i = ("string" == typeof i && { url: i }) || i),
                        (o = t.param(t.extend({ data: e }, i.data))),
                        d.old === o
                          ? d.valid
                          : ((d.old = o),
                            (n = this),
                            this.startRequest(a),
                            ((s = {})[a.name] = e),
                            t.ajax(
                              t.extend(
                                !0,
                                {
                                  mode: "abort",
                                  port: "validate" + a.name,
                                  dataType: "json",
                                  data: s,
                                  context: n.currentForm,
                                  success: function (t) {
                                    var i,
                                      s,
                                      o,
                                      l = !0 === t || "true" === t;
                                    (n.settings.messages[a.name][r] =
                                      d.originalMessage),
                                      l
                                        ? ((o = n.formSubmitted),
                                          n.resetInternals(),
                                          (n.toHide = n.errorsFor(a)),
                                          (n.formSubmitted = o),
                                          n.successList.push(a),
                                          (n.invalid[a.name] = !1),
                                          n.showErrors())
                                        : ((i = {}),
                                          (s =
                                            t ||
                                            n.defaultMessage(a, {
                                              method: r,
                                              parameters: e,
                                            })),
                                          (i[a.name] = d.message = s),
                                          (n.invalid[a.name] = !0),
                                          n.showErrors(i)),
                                      (d.valid = l),
                                      n.stopRequest(a, l);
                                  },
                                },
                                i
                              )
                            ),
                            "pending")
                      );
                    },
                  },
                });
              var i,
                r = {};
              return (
                t.ajaxPrefilter
                  ? t.ajaxPrefilter(function (t, e, a) {
                      var i = t.port;
                      "abort" === t.mode && (r[i] && r[i].abort(), (r[i] = a));
                    })
                  : ((i = t.ajax),
                    (t.ajax = function (e) {
                      var a = ("mode" in e ? e : t.ajaxSettings).mode,
                        n = ("port" in e ? e : t.ajaxSettings).port;
                      return "abort" === a
                        ? (r[n] && r[n].abort(),
                          (r[n] = i.apply(this, arguments)),
                          r[n])
                        : i.apply(this, arguments);
                    })),
                t
              );
            })
              ? i.apply(e, r)
              : i) || (t.exports = n);
    },
    803: function (t, e, a) {
      "use strict";
      a.r(e);
      a(348), a(804);
    },
    804: function (t, e, a) {
      var i, r, n;
      /*!
       * jQuery Validation Plugin v1.19.3
       *
       * https://jqueryvalidation.org/
       *
       * Copyright (c) 2021 Jörn Zaefferer
       * Released under the MIT license
       */ (r = [a(0), a(348)]),
        void 0 ===
          (n =
            "function" ==
            typeof (i = function (t) {
              return (
                (function () {
                  function e(t) {
                    return t
                      .replace(/<.[^<>]*?>/g, " ")
                      .replace(/&nbsp;|&#160;/gi, " ")
                      .replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "");
                  }
                  t.validator.addMethod(
                    "maxWords",
                    function (t, a, i) {
                      return (
                        this.optional(a) || e(t).match(/\b\w+\b/g).length <= i
                      );
                    },
                    t.validator.format("Please enter {0} words or less.")
                  ),
                    t.validator.addMethod(
                      "minWords",
                      function (t, a, i) {
                        return (
                          this.optional(a) || e(t).match(/\b\w+\b/g).length >= i
                        );
                      },
                      t.validator.format("Please enter at least {0} words.")
                    ),
                    t.validator.addMethod(
                      "rangeWords",
                      function (t, a, i) {
                        var r = e(t),
                          n = /\b\w+\b/g;
                        return (
                          this.optional(a) ||
                          (r.match(n).length >= i[0] &&
                            r.match(n).length <= i[1])
                        );
                      },
                      t.validator.format(
                        "Please enter between {0} and {1} words."
                      )
                    );
                })(),
                t.validator.addMethod(
                  "abaRoutingNumber",
                  function (t) {
                    var e = 0,
                      a = t.split(""),
                      i = a.length;
                    if (9 !== i) return !1;
                    for (var r = 0; r < i; r += 3)
                      e +=
                        3 * parseInt(a[r], 10) +
                        7 * parseInt(a[r + 1], 10) +
                        parseInt(a[r + 2], 10);
                    return 0 !== e && e % 10 == 0;
                  },
                  "Please enter a valid routing number."
                ),
                t.validator.addMethod(
                  "accept",
                  function (e, a, i) {
                    var r,
                      n,
                      s =
                        "string" == typeof i ? i.replace(/\s/g, "") : "image/*",
                      o = this.optional(a);
                    if (o) return o;
                    if (
                      "file" === t(a).attr("type") &&
                      ((s = s
                        .replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, "\\$&")
                        .replace(/,/g, "|")
                        .replace(/\/\*/g, "/.*")),
                      a.files && a.files.length)
                    )
                      for (
                        n = new RegExp(".?(" + s + ")$", "i"), r = 0;
                        r < a.files.length;
                        r++
                      )
                        if (!a.files[r].type.match(n)) return !1;
                    return !0;
                  },
                  t.validator.format(
                    "Please enter a value with a valid mimetype."
                  )
                ),
                t.validator.addMethod(
                  "alphanumeric",
                  function (t, e) {
                    return this.optional(e) || /^\w+$/i.test(t);
                  },
                  "Letters, numbers, and underscores only please"
                ),
                t.validator.addMethod(
                  "bankaccountNL",
                  function (t, e) {
                    if (this.optional(e)) return !0;
                    if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(t)) return !1;
                    var a,
                      i = t.replace(/ /g, ""),
                      r = 0,
                      n = i.length;
                    for (a = 0; a < n; a++)
                      r += (n - a) * i.substring(a, a + 1);
                    return r % 11 == 0;
                  },
                  "Please specify a valid bank account number"
                ),
                t.validator.addMethod(
                  "bankorgiroaccountNL",
                  function (e, a) {
                    return (
                      this.optional(a) ||
                      t.validator.methods.bankaccountNL.call(this, e, a) ||
                      t.validator.methods.giroaccountNL.call(this, e, a)
                    );
                  },
                  "Please specify a valid bank or giro account number"
                ),
                t.validator.addMethod(
                  "bic",
                  function (t, e) {
                    return (
                      this.optional(e) ||
                      /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(
                        t.toUpperCase()
                      )
                    );
                  },
                  "Please specify a valid BIC code"
                ),
                t.validator.addMethod(
                  "cifES",
                  function (t, e) {
                    "use strict";
                    if (this.optional(e)) return !0;
                    var a,
                      i,
                      r,
                      n,
                      s = new RegExp(
                        /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi
                      ),
                      o = t.substring(0, 1),
                      d = t.substring(1, 8),
                      l = t.substring(8, 9),
                      u = 0,
                      h = 0;
                    function c(t) {
                      return t % 2 == 0;
                    }
                    if (9 !== t.length || !s.test(t)) return !1;
                    for (a = 0; a < d.length; a++)
                      (i = parseInt(d[a], 10)),
                        c(a) ? (h += (i *= 2) < 10 ? i : i - 9) : (u += i);
                    return (
                      (r = (10 - (u + h).toString().substr(-1)).toString()),
                      (r = parseInt(r, 10) > 9 ? "0" : r),
                      (n = "JABCDEFGHI".substr(r, 1).toString()),
                      o.match(/[ABEH]/)
                        ? l === r
                        : o.match(/[KPQS]/)
                        ? l === n
                        : l === r || l === n
                    );
                  },
                  "Please specify a valid CIF number."
                ),
                t.validator.addMethod(
                  "cnhBR",
                  function (t) {
                    if (
                      11 !==
                      (t = t.replace(
                        /([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g,
                        ""
                      )).length
                    )
                      return !1;
                    var e,
                      a,
                      i,
                      r,
                      n,
                      s = 0,
                      o = 0;
                    if (((e = t.charAt(0)), new Array(12).join(e) === t))
                      return !1;
                    for (r = 0, n = 9; r < 9; ++r, --n) s += +t.charAt(r) * n;
                    for (
                      (a = s % 11) >= 10 && ((a = 0), (o = 2)),
                        s = 0,
                        r = 0,
                        n = 1;
                      r < 9;
                      ++r, ++n
                    )
                      s += +t.charAt(r) * n;
                    return (
                      (i = s % 11) >= 10 ? (i = 0) : (i -= o),
                      String(a).concat(i) === t.substr(-2)
                    );
                  },
                  "Please specify a valid CNH number"
                ),
                t.validator.addMethod(
                  "cnpjBR",
                  function (t, e) {
                    "use strict";
                    if (this.optional(e)) return !0;
                    if (14 !== (t = t.replace(/[^\d]+/g, "")).length) return !1;
                    if (
                      "00000000000000" === t ||
                      "11111111111111" === t ||
                      "22222222222222" === t ||
                      "33333333333333" === t ||
                      "44444444444444" === t ||
                      "55555555555555" === t ||
                      "66666666666666" === t ||
                      "77777777777777" === t ||
                      "88888888888888" === t ||
                      "99999999999999" === t
                    )
                      return !1;
                    for (
                      var a = t.length - 2,
                        i = t.substring(0, a),
                        r = t.substring(a),
                        n = 0,
                        s = a - 7,
                        o = a;
                      o >= 1;
                      o--
                    )
                      (n += i.charAt(a - o) * s--), s < 2 && (s = 9);
                    var d = n % 11 < 2 ? 0 : 11 - (n % 11);
                    if (d !== parseInt(r.charAt(0), 10)) return !1;
                    (a += 1), (i = t.substring(0, a)), (n = 0), (s = a - 7);
                    for (var l = a; l >= 1; l--)
                      (n += i.charAt(a - l) * s--), s < 2 && (s = 9);
                    return (
                      (d = n % 11 < 2 ? 0 : 11 - (n % 11)) ===
                      parseInt(r.charAt(1), 10)
                    );
                  },
                  "Please specify a CNPJ value number"
                ),
                t.validator.addMethod(
                  "cpfBR",
                  function (t, e) {
                    "use strict";
                    if (this.optional(e)) return !0;
                    if (
                      11 !==
                      (t = t.replace(
                        /([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g,
                        ""
                      )).length
                    )
                      return !1;
                    var a,
                      i,
                      r,
                      n,
                      s = 0;
                    if (
                      ((a = parseInt(t.substring(9, 10), 10)),
                      (i = parseInt(t.substring(10, 11), 10)),
                      (r = function (t, e) {
                        var a = (10 * t) % 11;
                        return (10 !== a && 11 !== a) || (a = 0), a === e;
                      }),
                      "" === t ||
                        "00000000000" === t ||
                        "11111111111" === t ||
                        "22222222222" === t ||
                        "33333333333" === t ||
                        "44444444444" === t ||
                        "55555555555" === t ||
                        "66666666666" === t ||
                        "77777777777" === t ||
                        "88888888888" === t ||
                        "99999999999" === t)
                    )
                      return !1;
                    for (n = 1; n <= 9; n++)
                      s += parseInt(t.substring(n - 1, n), 10) * (11 - n);
                    if (r(s, a)) {
                      for (s = 0, n = 1; n <= 10; n++)
                        s += parseInt(t.substring(n - 1, n), 10) * (12 - n);
                      return r(s, i);
                    }
                    return !1;
                  },
                  "Please specify a valid CPF number"
                ),
                t.validator.addMethod(
                  "creditcard",
                  function (t, e) {
                    if (this.optional(e)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(t)) return !1;
                    var a,
                      i,
                      r = 0,
                      n = 0,
                      s = !1;
                    if ((t = t.replace(/\D/g, "")).length < 13 || t.length > 19)
                      return !1;
                    for (a = t.length - 1; a >= 0; a--)
                      (i = t.charAt(a)),
                        (n = parseInt(i, 10)),
                        s && (n *= 2) > 9 && (n -= 9),
                        (r += n),
                        (s = !s);
                    return r % 10 == 0;
                  },
                  "Please enter a valid credit card number."
                ),
                t.validator.addMethod(
                  "creditcardtypes",
                  function (t, e, a) {
                    if (/[^0-9\-]+/.test(t)) return !1;
                    t = t.replace(/\D/g, "");
                    var i = 0;
                    return (
                      a.mastercard && (i |= 1),
                      a.visa && (i |= 2),
                      a.amex && (i |= 4),
                      a.dinersclub && (i |= 8),
                      a.enroute && (i |= 16),
                      a.discover && (i |= 32),
                      a.jcb && (i |= 64),
                      a.unknown && (i |= 128),
                      a.all && (i = 255),
                      (1 & i &&
                        (/^(5[12345])/.test(t) || /^(2[234567])/.test(t))) ||
                      (2 & i && /^(4)/.test(t))
                        ? 16 === t.length
                        : 4 & i && /^(3[47])/.test(t)
                        ? 15 === t.length
                        : 8 & i && /^(3(0[012345]|[68]))/.test(t)
                        ? 14 === t.length
                        : 16 & i && /^(2(014|149))/.test(t)
                        ? 15 === t.length
                        : (32 & i && /^(6011)/.test(t)) ||
                          (64 & i && /^(3)/.test(t))
                        ? 16 === t.length
                        : 64 & i && /^(2131|1800)/.test(t)
                        ? 15 === t.length
                        : !!(128 & i)
                    );
                  },
                  "Please enter a valid credit card number."
                ),
                t.validator.addMethod(
                  "currency",
                  function (t, e, a) {
                    var i,
                      r = "string" == typeof a,
                      n = r ? a : a[0],
                      s = !!r || a[1];
                    return (
                      (n = n.replace(/,/g, "")),
                      (i =
                        "^[" +
                        (n = s ? n + "]" : n + "]?") +
                        "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$"),
                      (i = new RegExp(i)),
                      this.optional(e) || i.test(t)
                    );
                  },
                  "Please specify a valid currency"
                ),
                t.validator.addMethod(
                  "dateFA",
                  function (t, e) {
                    return (
                      this.optional(e) ||
                      /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(
                        t
                      )
                    );
                  },
                  t.validator.messages.date
                ),
                t.validator.addMethod(
                  "dateITA",
                  function (t, e) {
                    var a,
                      i,
                      r,
                      n,
                      s,
                      o = !1;
                    return (
                      /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(t)
                        ? ((a = t.split("/")),
                          (i = parseInt(a[0], 10)),
                          (r = parseInt(a[1], 10)),
                          (n = parseInt(a[2], 10)),
                          (o =
                            (s = new Date(
                              Date.UTC(n, r - 1, i, 12, 0, 0, 0)
                            )).getUTCFullYear() === n &&
                            s.getUTCMonth() === r - 1 &&
                            s.getUTCDate() === i))
                        : (o = !1),
                      this.optional(e) || o
                    );
                  },
                  t.validator.messages.date
                ),
                t.validator.addMethod(
                  "dateNL",
                  function (t, e) {
                    return (
                      this.optional(e) ||
                      /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(
                        t
                      )
                    );
                  },
                  t.validator.messages.date
                ),
                t.validator.addMethod(
                  "extension",
                  function (t, e, a) {
                    return (
                      (a =
                        "string" == typeof a
                          ? a.replace(/,/g, "|")
                          : "png|jpe?g|gif"),
                      this.optional(e) ||
                        t.match(new RegExp("\\.(" + a + ")$", "i"))
                    );
                  },
                  t.validator.format(
                    "Please enter a value with a valid extension."
                  )
                ),
                t.validator.addMethod(
                  "giroaccountNL",
                  function (t, e) {
                    return this.optional(e) || /^[0-9]{1,7}$/.test(t);
                  },
                  "Please specify a valid giro account number"
                ),
                t.validator.addMethod(
                  "greaterThan",
                  function (e, a, i) {
                    var r = t(i);
                    return (
                      this.settings.onfocusout &&
                        r.not(".validate-greaterThan-blur").length &&
                        r
                          .addClass("validate-greaterThan-blur")
                          .on("blur.validate-greaterThan", function () {
                            t(a).valid();
                          }),
                      e > r.val()
                    );
                  },
                  "Please enter a greater value."
                ),
                t.validator.addMethod(
                  "greaterThanEqual",
                  function (e, a, i) {
                    var r = t(i);
                    return (
                      this.settings.onfocusout &&
                        r.not(".validate-greaterThanEqual-blur").length &&
                        r
                          .addClass("validate-greaterThanEqual-blur")
                          .on("blur.validate-greaterThanEqual", function () {
                            t(a).valid();
                          }),
                      e >= r.val()
                    );
                  },
                  "Please enter a greater value."
                ),
                t.validator.addMethod(
                  "iban",
                  function (t, e) {
                    if (this.optional(e)) return !0;
                    var a,
                      i,
                      r,
                      n,
                      s,
                      o = t.replace(/ /g, "").toUpperCase(),
                      d = "",
                      l = !0,
                      u = "";
                    if (o.length < 5) return !1;
                    if (
                      void 0 !==
                        (r = {
                          AL: "\\d{8}[\\dA-Z]{16}",
                          AD: "\\d{8}[\\dA-Z]{12}",
                          AT: "\\d{16}",
                          AZ: "[\\dA-Z]{4}\\d{20}",
                          BE: "\\d{12}",
                          BH: "[A-Z]{4}[\\dA-Z]{14}",
                          BA: "\\d{16}",
                          BR: "\\d{23}[A-Z][\\dA-Z]",
                          BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
                          CR: "\\d{17}",
                          HR: "\\d{17}",
                          CY: "\\d{8}[\\dA-Z]{16}",
                          CZ: "\\d{20}",
                          DK: "\\d{14}",
                          DO: "[A-Z]{4}\\d{20}",
                          EE: "\\d{16}",
                          FO: "\\d{14}",
                          FI: "\\d{14}",
                          FR: "\\d{10}[\\dA-Z]{11}\\d{2}",
                          GE: "[\\dA-Z]{2}\\d{16}",
                          DE: "\\d{18}",
                          GI: "[A-Z]{4}[\\dA-Z]{15}",
                          GR: "\\d{7}[\\dA-Z]{16}",
                          GL: "\\d{14}",
                          GT: "[\\dA-Z]{4}[\\dA-Z]{20}",
                          HU: "\\d{24}",
                          IS: "\\d{22}",
                          IE: "[\\dA-Z]{4}\\d{14}",
                          IL: "\\d{19}",
                          IT: "[A-Z]\\d{10}[\\dA-Z]{12}",
                          KZ: "\\d{3}[\\dA-Z]{13}",
                          KW: "[A-Z]{4}[\\dA-Z]{22}",
                          LV: "[A-Z]{4}[\\dA-Z]{13}",
                          LB: "\\d{4}[\\dA-Z]{20}",
                          LI: "\\d{5}[\\dA-Z]{12}",
                          LT: "\\d{16}",
                          LU: "\\d{3}[\\dA-Z]{13}",
                          MK: "\\d{3}[\\dA-Z]{10}\\d{2}",
                          MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
                          MR: "\\d{23}",
                          MU: "[A-Z]{4}\\d{19}[A-Z]{3}",
                          MC: "\\d{10}[\\dA-Z]{11}\\d{2}",
                          MD: "[\\dA-Z]{2}\\d{18}",
                          ME: "\\d{18}",
                          NL: "[A-Z]{4}\\d{10}",
                          NO: "\\d{11}",
                          PK: "[\\dA-Z]{4}\\d{16}",
                          PS: "[\\dA-Z]{4}\\d{21}",
                          PL: "\\d{24}",
                          PT: "\\d{21}",
                          RO: "[A-Z]{4}[\\dA-Z]{16}",
                          SM: "[A-Z]\\d{10}[\\dA-Z]{12}",
                          SA: "\\d{2}[\\dA-Z]{18}",
                          RS: "\\d{18}",
                          SK: "\\d{20}",
                          SI: "\\d{15}",
                          ES: "\\d{20}",
                          SE: "\\d{20}",
                          CH: "\\d{5}[\\dA-Z]{12}",
                          TN: "\\d{20}",
                          TR: "\\d{5}[\\dA-Z]{17}",
                          AE: "\\d{3}\\d{16}",
                          GB: "[A-Z]{4}\\d{14}",
                          VG: "[\\dA-Z]{4}\\d{16}",
                        }[o.substring(0, 2)]) &&
                      !new RegExp("^[A-Z]{2}\\d{2}" + r + "$", "").test(o)
                    )
                      return !1;
                    for (
                      a = o.substring(4, o.length) + o.substring(0, 4), n = 0;
                      n < a.length;
                      n++
                    )
                      "0" !== (i = a.charAt(n)) && (l = !1),
                        l ||
                          (d += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(
                            i
                          ));
                    for (s = 0; s < d.length; s++)
                      u = ("" + u + d.charAt(s)) % 97;
                    return 1 === u;
                  },
                  "Please specify a valid IBAN"
                ),
                t.validator.addMethod(
                  "integer",
                  function (t, e) {
                    return this.optional(e) || /^-?\d+$/.test(t);
                  },
                  "A positive or negative non-decimal number please"
                ),
                t.validator.addMethod(
                  "ipv4",
                  function (t, e) {
                    return (
                      this.optional(e) ||
                      /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(
                        t
                      )
                    );
                  },
                  "Please enter a valid IP v4 address."
                ),
                t.validator.addMethod(
                  "ipv6",
                  function (t, e) {
                    return (
                      this.optional(e) ||
                      /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(
                        t
                      )
                    );
                  },
                  "Please enter a valid IP v6 address."
                ),
                t.validator.addMethod(
                  "lessThan",
                  function (e, a, i) {
                    var r = t(i);
                    return (
                      this.settings.onfocusout &&
                        r.not(".validate-lessThan-blur").length &&
                        r
                          .addClass("validate-lessThan-blur")
                          .on("blur.validate-lessThan", function () {
                            t(a).valid();
                          }),
                      e < r.val()
                    );
                  },
                  "Please enter a lesser value."
                ),
                t.validator.addMethod(
                  "lessThanEqual",
                  function (e, a, i) {
                    var r = t(i);
                    return (
                      this.settings.onfocusout &&
                        r.not(".validate-lessThanEqual-blur").length &&
                        r
                          .addClass("validate-lessThanEqual-blur")
                          .on("blur.validate-lessThanEqual", function () {
                            t(a).valid();
                          }),
                      e <= r.val()
                    );
                  },
                  "Please enter a lesser value."
                ),
                t.validator.addMethod(
                  "lettersonly",
                  function (t, e) {
                    return this.optional(e) || /^[a-z]+$/i.test(t);
                  },
                  "Letters only please"
                ),
                t.validator.addMethod(
                  "letterswithbasicpunc",
                  function (t, e) {
                    return this.optional(e) || /^[a-z\-.,()'"\s]+$/i.test(t);
                  },
                  "Letters or punctuation only please"
                ),
                t.validator.addMethod(
                  "maxfiles",
                  function (e, a, i) {
                    return (
                      !!this.optional(a) ||
                      !(
                        "file" === t(a).attr("type") &&
                        a.files &&
                        a.files.length > i
                      )
                    );
                  },
                  t.validator.format("Please select no more than {0} files.")
                ),
                t.validator.addMethod(
                  "maxsize",
                  function (e, a, i) {
                    if (this.optional(a)) return !0;
                    if (
                      "file" === t(a).attr("type") &&
                      a.files &&
                      a.files.length
                    )
                      for (var r = 0; r < a.files.length; r++)
                        if (a.files[r].size > i) return !1;
                    return !0;
                  },
                  t.validator.format(
                    "File size must not exceed {0} bytes each."
                  )
                ),
                t.validator.addMethod(
                  "maxsizetotal",
                  function (e, a, i) {
                    if (this.optional(a)) return !0;
                    if (
                      "file" === t(a).attr("type") &&
                      a.files &&
                      a.files.length
                    )
                      for (var r = 0, n = 0; n < a.files.length; n++)
                        if ((r += a.files[n].size) > i) return !1;
                    return !0;
                  },
                  t.validator.format(
                    "Total size of all files must not exceed {0} bytes."
                  )
                ),
                t.validator.addMethod(
                  "mobileNL",
                  function (t, e) {
                    return (
                      this.optional(e) ||
                      /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(
                        t
                      )
                    );
                  },
                  "Please specify a valid mobile number"
                ),
                t.validator.addMethod(
                  "mobileRU",
                  function (t, e) {
                    var a = t.replace(/\(|\)|\s+|-/g, "");
                    return (
                      this.optional(e) ||
                      (a.length > 9 && /^((\+7|7|8)+([0-9]){10})$/.test(a))
                    );
                  },
                  "Please specify a valid mobile number"
                ),
                t.validator.addMethod(
                  "mobileUK",
                  function (t, e) {
                    return (
                      (t = t.replace(/\(|\)|\s+|-/g, "")),
                      this.optional(e) ||
                        (t.length > 9 &&
                          t.match(
                            /^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/
                          ))
                    );
                  },
                  "Please specify a valid mobile number"
                ),
                t.validator.addMethod(
                  "netmask",
                  function (t, e) {
                    return (
                      this.optional(e) ||
                      /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)/i.test(
                        t
                      )
                    );
                  },
                  "Please enter a valid netmask."
                ),
                t.validator.addMethod(
                  "nieES",
                  function (t, e) {
                    "use strict";
                    if (this.optional(e)) return !0;
                    var a,
                      i = new RegExp(
                        /^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi
                      ),
                      r = t.substr(t.length - 1).toUpperCase();
                    return (
                      !(
                        (t = t.toString().toUpperCase()).length > 10 ||
                        t.length < 9 ||
                        !i.test(t)
                      ) &&
                      ((a =
                        9 ===
                        (t = t
                          .replace(/^[X]/, "0")
                          .replace(/^[Y]/, "1")
                          .replace(/^[Z]/, "2")).length
                          ? t.substr(0, 8)
                          : t.substr(0, 9)),
                      "TRWAGMYFPDXBNJZSQVHLCKET".charAt(
                        parseInt(a, 10) % 23
                      ) === r)
                    );
                  },
                  "Please specify a valid NIE number."
                ),
                t.validator.addMethod(
                  "nifES",
                  function (t, e) {
                    "use strict";
                    return (
                      !!this.optional(e) ||
                      (!!(t = t.toUpperCase()).match(
                        "((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)"
                      ) &&
                        (/^[0-9]{8}[A-Z]{1}$/.test(t)
                          ? "TRWAGMYFPDXBNJZSQVHLCKE".charAt(
                              t.substring(8, 0) % 23
                            ) === t.charAt(8)
                          : !!/^[KLM]{1}/.test(t) &&
                            t[8] ===
                              "TRWAGMYFPDXBNJZSQVHLCKE".charAt(
                                t.substring(8, 1) % 23
                              )))
                    );
                  },
                  "Please specify a valid NIF number."
                ),
                t.validator.addMethod(
                  "nipPL",
                  function (t) {
                    "use strict";
                    if (10 !== (t = t.replace(/[^0-9]/g, "")).length) return !1;
                    for (
                      var e = [6, 5, 7, 2, 3, 4, 5, 6, 7], a = 0, i = 0;
                      i < 9;
                      i++
                    )
                      a += e[i] * t[i];
                    var r = a % 11;
                    return (10 === r ? 0 : r) === parseInt(t[9], 10);
                  },
                  "Please specify a valid NIP number."
                ),
                t.validator.addMethod(
                  "nisBR",
                  function (t) {
                    var e,
                      a,
                      i,
                      r,
                      n,
                      s = 0;
                    if (
                      11 !==
                      (t = t.replace(
                        /([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g,
                        ""
                      )).length
                    )
                      return !1;
                    for (
                      a = parseInt(t.substring(10, 11), 10),
                        e = parseInt(t.substring(0, 10), 10),
                        r = 2;
                      r < 12;
                      r++
                    )
                      (n = r),
                        10 === r && (n = 2),
                        11 === r && (n = 3),
                        (s += (e % 10) * n),
                        (e = parseInt(e / 10, 10));
                    return a === (i = (i = s % 11) > 1 ? 11 - i : 0);
                  },
                  "Please specify a valid NIS/PIS number"
                ),
                t.validator.addMethod(
                  "notEqualTo",
                  function (e, a, i) {
                    return (
                      this.optional(a) ||
                      !t.validator.methods.equalTo.call(this, e, a, i)
                    );
                  },
                  "Please enter a different value, values must not be the same."
                ),
                t.validator.addMethod(
                  "nowhitespace",
                  function (t, e) {
                    return this.optional(e) || /^\S+$/i.test(t);
                  },
                  "No white space please"
                ),
                t.validator.addMethod(
                  "pattern",
                  function (t, e, a) {
                    return (
                      !!this.optional(e) ||
                      ("string" == typeof a &&
                        (a = new RegExp("^(?:" + a + ")$")),
                      a.test(t))
                    );
                  },
                  "Invalid format."
                ),
                t.validator.addMethod(
                  "phoneNL",
                  function (t, e) {
                    return (
                      this.optional(e) ||
                      /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(
                        t
                      )
                    );
                  },
                  "Please specify a valid phone number."
                ),
                t.validator.addMethod(
                  "phonePL",
                  function (t, e) {
                    return (
                      (t = t.replace(/\s+/g, "")),
                      this.optional(e) ||
                        /^(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}$/.test(
                          t
                        )
                    );
                  },
                  "Please specify a valid phone number"
                ),
                t.validator.addMethod(
                  "phonesUK",
                  function (t, e) {
                    return (
                      (t = t.replace(/\(|\)|\s+|-/g, "")),
                      this.optional(e) ||
                        (t.length > 9 &&
                          t.match(
                            /^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/
                          ))
                    );
                  },
                  "Please specify a valid uk phone number"
                ),
                t.validator.addMethod(
                  "phoneUK",
                  function (t, e) {
                    return (
                      (t = t.replace(/\(|\)|\s+|-/g, "")),
                      this.optional(e) ||
                        (t.length > 9 &&
                          t.match(
                            /^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/
                          ))
                    );
                  },
                  "Please specify a valid phone number"
                ),
                t.validator.addMethod(
                  "phoneUS",
                  function (t, e) {
                    return (
                      (t = t.replace(/\s+/g, "")),
                      this.optional(e) ||
                        (t.length > 9 &&
                          t.match(
                            /^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]\d{2}-?\d{4}$/
                          ))
                    );
                  },
                  "Please specify a valid phone number"
                ),
                t.validator.addMethod(
                  "postalcodeBR",
                  function (t, e) {
                    return (
                      this.optional(e) ||
                      /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(t)
                    );
                  },
                  "Informe um CEP válido."
                ),
                t.validator.addMethod(
                  "postalCodeCA",
                  function (t, e) {
                    return (
                      this.optional(e) ||
                      /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test(
                        t
                      )
                    );
                  },
                  "Please specify a valid postal code"
                ),
                t.validator.addMethod(
                  "postalcodeIT",
                  function (t, e) {
                    return this.optional(e) || /^\d{5}$/.test(t);
                  },
                  "Please specify a valid postal code"
                ),
                t.validator.addMethod(
                  "postalcodeNL",
                  function (t, e) {
                    return (
                      this.optional(e) ||
                      /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(t)
                    );
                  },
                  "Please specify a valid postal code"
                ),
                t.validator.addMethod(
                  "postcodeUK",
                  function (t, e) {
                    return (
                      this.optional(e) ||
                      /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(
                        t
                      )
                    );
                  },
                  "Please specify a valid UK postcode"
                ),
                t.validator.addMethod(
                  "require_from_group",
                  function (e, a, i) {
                    var r = t(i[1], a.form),
                      n = r.eq(0),
                      s = n.data("valid_req_grp")
                        ? n.data("valid_req_grp")
                        : t.extend({}, this),
                      o =
                        r.filter(function () {
                          return s.elementValue(this);
                        }).length >= i[0];
                    return (
                      n.data("valid_req_grp", s),
                      t(a).data("being_validated") ||
                        (r.data("being_validated", !0),
                        r.each(function () {
                          s.element(this);
                        }),
                        r.data("being_validated", !1)),
                      o
                    );
                  },
                  t.validator.format(
                    "Please fill at least {0} of these fields."
                  )
                ),
                t.validator.addMethod(
                  "skip_or_fill_minimum",
                  function (e, a, i) {
                    var r = t(i[1], a.form),
                      n = r.eq(0),
                      s = n.data("valid_skip")
                        ? n.data("valid_skip")
                        : t.extend({}, this),
                      o = r.filter(function () {
                        return s.elementValue(this);
                      }).length,
                      d = 0 === o || o >= i[0];
                    return (
                      n.data("valid_skip", s),
                      t(a).data("being_validated") ||
                        (r.data("being_validated", !0),
                        r.each(function () {
                          s.element(this);
                        }),
                        r.data("being_validated", !1)),
                      d
                    );
                  },
                  t.validator.format(
                    "Please either skip these fields or fill at least {0} of them."
                  )
                ),
                t.validator.addMethod(
                  "stateUS",
                  function (t, e, a) {
                    var i,
                      r = void 0 === a,
                      n = !r && void 0 !== a.caseSensitive && a.caseSensitive,
                      s =
                        !r &&
                        void 0 !== a.includeTerritories &&
                        a.includeTerritories,
                      o =
                        !r && void 0 !== a.includeMilitary && a.includeMilitary;
                    return (
                      (i =
                        s || o
                          ? s && o
                            ? "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$"
                            : s
                            ? "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$"
                            : "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$"
                          : "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$"),
                      (i = n ? new RegExp(i) : new RegExp(i, "i")),
                      this.optional(e) || i.test(t)
                    );
                  },
                  "Please specify a valid state"
                ),
                t.validator.addMethod(
                  "strippedminlength",
                  function (e, a, i) {
                    return t(e).text().length >= i;
                  },
                  t.validator.format("Please enter at least {0} characters")
                ),
                t.validator.addMethod(
                  "time",
                  function (t, e) {
                    return (
                      this.optional(e) ||
                      /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(t)
                    );
                  },
                  "Please enter a valid time, between 00:00 and 23:59"
                ),
                t.validator.addMethod(
                  "time12h",
                  function (t, e) {
                    return (
                      this.optional(e) ||
                      /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(t)
                    );
                  },
                  "Please enter a valid time in 12-hour am/pm format"
                ),
                t.validator.addMethod(
                  "url2",
                  function (t, e) {
                    return (
                      this.optional(e) ||
                      /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
                        t
                      )
                    );
                  },
                  t.validator.messages.url
                ),
                t.validator.addMethod(
                  "vinUS",
                  function (t) {
                    if (17 !== t.length) return !1;
                    var e,
                      a,
                      i,
                      r,
                      n,
                      s,
                      o = [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F",
                        "G",
                        "H",
                        "J",
                        "K",
                        "L",
                        "M",
                        "N",
                        "P",
                        "R",
                        "S",
                        "T",
                        "U",
                        "V",
                        "W",
                        "X",
                        "Y",
                        "Z",
                      ],
                      d = [
                        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5,
                        6, 7, 8, 9,
                      ],
                      l = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
                      u = 0;
                    for (e = 0; e < 17; e++) {
                      if (
                        ((r = l[e]),
                        (i = t.slice(e, e + 1)),
                        8 === e && (s = i),
                        isNaN(i))
                      ) {
                        for (a = 0; a < o.length; a++)
                          if (i.toUpperCase() === o[a]) {
                            (i = d[a]),
                              (i *= r),
                              isNaN(s) && 8 === a && (s = o[a]);
                            break;
                          }
                      } else i *= r;
                      u += i;
                    }
                    return 10 == (n = u % 11) && (n = "X"), n === s;
                  },
                  "The specified vehicle identification number (VIN) is invalid."
                ),
                t.validator.addMethod(
                  "zipcodeUS",
                  function (t, e) {
                    return this.optional(e) || /^\d{5}(-\d{4})?$/.test(t);
                  },
                  "The specified US ZIP Code is invalid"
                ),
                t.validator.addMethod(
                  "ziprange",
                  function (t, e) {
                    return this.optional(e) || /^90[2-5]\d\{2\}-\d{4}$/.test(t);
                  },
                  "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx"
                ),
                t
              );
            })
              ? i.apply(e, r)
              : i) || (t.exports = n);
    },
  })
);
