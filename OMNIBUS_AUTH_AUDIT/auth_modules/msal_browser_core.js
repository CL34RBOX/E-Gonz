/*! @azure/msal-browser v2.28.2 2022-09-06 */
"use strict";
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).msal = {})
}(this, (function(e) {
    var t = function(e, r) {
        return t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        t(e, r)
    };
    function r(e, r) {
        function n() {
            this.constructor = e
        }
        t(e, r),
        e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
        new n)
    }
    var n = function() {
        return n = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in t = arguments[r])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ,
        n.apply(this, arguments)
    };
    function o(e, t, r, n) {
        return new (r || (r = Promise))((function(o, i) {
            function a(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value,
                t instanceof r ? t : new r((function(e) {
                    e(t)
                }
                ))).then(a, s)
            }
            c((n = n.apply(e, t || [])).next())
        }
        ))
    }
    function i(e, t) {
        var r, n, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function s(e) {
            return function(t) {
                return function(e) {
                    if (r)
                        throw new TypeError("Generator is already executing.");
                    while (a)
                        try {
                            if (r = 1,
                            n && (o = 2 & e[0] ? n["return"] : e[0] ? n["throw"] || ((o = n["return"]) && o.call(n),
                            0) : n.next) && !(o = o.call(n, e[1])).done)
                                return o;
                            switch (n = 0,
                            o && (e = [2 & e[0], o.value]),
                            e[0]) {
                                case 0:
                                case 1:
                                    o = e;
                                    break;
                                default:
                                    if (!(o = a.trys,
                                    o = o.length > 0 && o[o.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!o || e[1] > o[0] && e[1] < o[3])) {
                                        a.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = e;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(e);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                            }
                            e = t.call(e, a)
                        } catch (t) {
                            e = [6, t],
                            n = 0
                        } finally {
                            r = o = 0
                        }
                    if (5 & e[0])
                        throw e[1];
                    return {
                        value: e[0] ? e[1] : void 0,
                        done: !0
                    }
                }([e, t])
            }
        }
    }
