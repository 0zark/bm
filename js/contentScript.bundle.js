! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(r, a, function (t) {
                return e[t]
            }.bind(null, a));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 21)
}([function (e, t, n) {
    "use strict";
    e.exports = n(4)
}, function (e, t, n) {
    "use strict";
    ! function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (e) {
            console.error(e)
        }
    }(), e.exports = n(5)
}, , function (e, t, n) {
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var r = Object.getOwnPropertySymbols,
        a = Object.prototype.hasOwnProperty,
        l = Object.prototype.propertyIsEnumerable;

    function o(e) {
        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }
    e.exports = function () {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map((function (e) {
                    return t[e]
                })).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach((function (e) {
                r[e] = e
            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function (e, t) {
        for (var n, i, u = o(e), s = 1; s < arguments.length; s++) {
            for (var c in n = Object(arguments[s])) a.call(n, c) && (u[c] = n[c]);
            if (r) {
                i = r(n);
                for (var f = 0; f < i.length; f++) l.call(n, i[f]) && (u[i[f]] = n[i[f]])
            }
        }
        return u
    }
}, function (e, t, n) {
    "use strict";
    /** @license React v17.0.2
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r = n(3),
        a = 60103,
        l = 60106;
    t.Fragment = 60107, t.StrictMode = 60108, t.Profiler = 60114;
    var o = 60109,
        i = 60110,
        u = 60112;
    t.Suspense = 60113;
    var s = 60115,
        c = 60116;
    if ("function" == typeof Symbol && Symbol.for) {
        var f = Symbol.for;
        a = f("react.element"), l = f("react.portal"), t.Fragment = f("react.fragment"), t.StrictMode = f("react.strict_mode"), t.Profiler = f("react.profiler"), o = f("react.provider"), i = f("react.context"), u = f("react.forward_ref"), t.Suspense = f("react.suspense"), s = f("react.memo"), c = f("react.lazy")
    }
    var d = "function" == typeof Symbol && Symbol.iterator;

    function p(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var h = {
            isMounted: function () {
                return !1
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {}
        },
        g = {};

    function m(e, t, n) {
        this.props = e, this.context = t, this.refs = g, this.updater = n || h
    }

    function y() {}

    function v(e, t, n) {
        this.props = e, this.context = t, this.refs = g, this.updater = n || h
    }
    m.prototype.isReactComponent = {}, m.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(p(85));
        this.updater.enqueueSetState(this, e, t, "setState")
    }, m.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, y.prototype = m.prototype;
    var b = v.prototype = new y;
    b.constructor = v, r(b, m.prototype), b.isPureReactComponent = !0;
    var w = {
            current: null
        },
        k = Object.prototype.hasOwnProperty,
        _ = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function S(e, t, n) {
        var r, l = {},
            o = null,
            i = null;
        if (null != t)
            for (r in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (o = "" + t.key), t) k.call(t, r) && !_.hasOwnProperty(r) && (l[r] = t[r]);
        var u = arguments.length - 2;
        if (1 === u) l.children = n;
        else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            l.children = s
        }
        if (e && e.defaultProps)
            for (r in u = e.defaultProps) void 0 === l[r] && (l[r] = u[r]);
        return {
            $$typeof: a,
            type: e,
            key: o,
            ref: i,
            props: l,
            _owner: w.current
        }
    }

    function x(e) {
        return "object" == typeof e && null !== e && e.$$typeof === a
    }
    var C = /\/+/g;

    function E(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? function (e) {
            var t = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + e.replace(/[=:]/g, (function (e) {
                return t[e]
            }))
        }("" + e.key) : t.toString(36)
    }

    function M(e, t, n, r, o) {
        var i = typeof e;
        "undefined" !== i && "boolean" !== i || (e = null);
        var u = !1;
        if (null === e) u = !0;
        else switch (i) {
            case "string":
            case "number":
                u = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case a:
                    case l:
                        u = !0
                }
        }
        if (u) return o = o(u = e), e = "" === r ? "." + E(u, 0) : r, Array.isArray(o) ? (n = "", null != e && (n = e.replace(C, "$&/") + "/"), M(o, t, n, "", (function (e) {
            return e
        }))) : null != o && (x(o) && (o = function (e, t) {
            return {
                $$typeof: a,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner
            }
        }(o, n + (!o.key || u && u.key === o.key ? "" : ("" + o.key).replace(C, "$&/") + "/") + e)), t.push(o)), 1;
        if (u = 0, r = "" === r ? "." : r + ":", Array.isArray(e))
            for (var s = 0; s < e.length; s++) {
                var c = r + E(i = e[s], s);
                u += M(i, t, n, c, o)
            } else if ("function" == typeof (c = function (e) {
                    return null === e || "object" != typeof e ? null : "function" == typeof (e = d && e[d] || e["@@iterator"]) ? e : null
                }(e)))
                for (e = c.call(e), s = 0; !(i = e.next()).done;) u += M(i = i.value, t, n, c = r + E(i, s++), o);
            else if ("object" === i) throw t = "" + e, Error(p(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
        return u
    }

    function T(e, t, n) {
        if (null == e) return e;
        var r = [],
            a = 0;
        return M(e, r, "", "", (function (e) {
            return t.call(n, e, a++)
        })), r
    }

    function L(e) {
        if (-1 === e._status) {
            var t = e._result;
            t = t(), e._status = 0, e._result = t, t.then((function (t) {
                0 === e._status && (t = t.default, e._status = 1, e._result = t)
            }), (function (t) {
                0 === e._status && (e._status = 2, e._result = t)
            }))
        }
        if (1 === e._status) return e._result;
        throw e._result
    }
    var N = {
        current: null
    };

    function P() {
        var e = N.current;
        if (null === e) throw Error(p(321));
        return e
    }
    var O = {
        ReactCurrentDispatcher: N,
        ReactCurrentBatchConfig: {
            transition: 0
        },
        ReactCurrentOwner: w,
        IsSomeRendererActing: {
            current: !1
        },
        assign: r
    };
    t.Children = {
        map: T,
        forEach: function (e, t, n) {
            T(e, (function () {
                t.apply(this, arguments)
            }), n)
        },
        count: function (e) {
            var t = 0;
            return T(e, (function () {
                t++
            })), t
        },
        toArray: function (e) {
            return T(e, (function (e) {
                return e
            })) || []
        },
        only: function (e) {
            if (!x(e)) throw Error(p(143));
            return e
        }
    }, t.Component = m, t.PureComponent = v, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O, t.cloneElement = function (e, t, n) {
        if (null == e) throw Error(p(267, e));
        var l = r({}, e.props),
            o = e.key,
            i = e.ref,
            u = e._owner;
        if (null != t) {
            if (void 0 !== t.ref && (i = t.ref, u = w.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for (c in t) k.call(t, c) && !_.hasOwnProperty(c) && (l[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c])
        }
        var c = arguments.length - 2;
        if (1 === c) l.children = n;
        else if (1 < c) {
            s = Array(c);
            for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
            l.children = s
        }
        return {
            $$typeof: a,
            type: e.type,
            key: o,
            ref: i,
            props: l,
            _owner: u
        }
    }, t.createContext = function (e, t) {
        return void 0 === t && (t = null), (e = {
            $$typeof: i,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }).Provider = {
            $$typeof: o,
            _context: e
        }, e.Consumer = e
    }, t.createElement = S, t.createFactory = function (e) {
        var t = S.bind(null, e);
        return t.type = e, t
    }, t.createRef = function () {
        return {
            current: null
        }
    }, t.forwardRef = function (e) {
        return {
            $$typeof: u,
            render: e
        }
    }, t.isValidElement = x, t.lazy = function (e) {
        return {
            $$typeof: c,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: L
        }
    }, t.memo = function (e, t) {
        return {
            $$typeof: s,
            type: e,
            compare: void 0 === t ? null : t
        }
    }, t.useCallback = function (e, t) {
        return P().useCallback(e, t)
    }, t.useContext = function (e, t) {
        return P().useContext(e, t)
    }, t.useDebugValue = function () {}, t.useEffect = function (e, t) {
        return P().useEffect(e, t)
    }, t.useImperativeHandle = function (e, t, n) {
        return P().useImperativeHandle(e, t, n)
    }, t.useLayoutEffect = function (e, t) {
        return P().useLayoutEffect(e, t)
    }, t.useMemo = function (e, t) {
        return P().useMemo(e, t)
    }, t.useReducer = function (e, t, n) {
        return P().useReducer(e, t, n)
    }, t.useRef = function (e) {
        return P().useRef(e)
    }, t.useState = function (e) {
        return P().useState(e)
    }, t.version = "17.0.2"
}, function (e, t, n) {
    "use strict";
    /** @license React v17.0.2
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r = n(0),
        a = n(3),
        l = n(6);

    function o(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    if (!r) throw Error(o(227));
    var i = new Set,
        u = {};

    function s(e, t) {
        c(e, t), c(e + "Capture", t)
    }

    function c(e, t) {
        for (u[e] = t, e = 0; e < t.length; e++) i.add(t[e])
    }
    var f = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
        d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        p = Object.prototype.hasOwnProperty,
        h = {},
        g = {};

    function m(e, t, n, r, a, l, o) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = o
    }
    var y = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) {
        y[e] = new m(e, 0, !1, e, null, !1, !1)
    })), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach((function (e) {
        var t = e[0];
        y[t] = new m(t, 1, !1, e[1], null, !1, !1)
    })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
        y[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
    })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
        y[e] = new m(e, 2, !1, e, null, !1, !1)
    })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) {
        y[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
    })), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
        y[e] = new m(e, 3, !0, e, null, !1, !1)
    })), ["capture", "download"].forEach((function (e) {
        y[e] = new m(e, 4, !1, e, null, !1, !1)
    })), ["cols", "rows", "size", "span"].forEach((function (e) {
        y[e] = new m(e, 6, !1, e, null, !1, !1)
    })), ["rowSpan", "start"].forEach((function (e) {
        y[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
    }));
    var v = /[\-:]([a-z])/g;

    function b(e) {
        return e[1].toUpperCase()
    }

    function w(e, t, n, r) {
        var a = y.hasOwnProperty(t) ? y[t] : null;
        (null !== a ? 0 === a.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function (e, t, n, r) {
            if (null == t || function (e, t, n, r) {
                    if (null !== n && 0 === n.type) return !1;
                    switch (typeof t) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                        default:
                            return !1
                    }
                }(e, t, n, r)) return !0;
            if (r) return !1;
            if (null !== n) switch (n.type) {
                case 3:
                    return !t;
                case 4:
                    return !1 === t;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t
            }
            return !1
        }(t, n, a, r) && (n = null), r || null === a ? function (e) {
            return !!p.call(g, e) || !p.call(h, e) && (d.test(e) ? g[e] = !0 : (h[e] = !0, !1))
        }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) {
        var t = e.replace(v, b);
        y[t] = new m(t, 1, !1, e, null, !1, !1)
    })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) {
        var t = e.replace(v, b);
        y[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
    })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
        var t = e.replace(v, b);
        y[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
    })), ["tabIndex", "crossOrigin"].forEach((function (e) {
        y[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
    })), y.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) {
        y[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
    }));
    var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        _ = 60103,
        S = 60106,
        x = 60107,
        C = 60108,
        E = 60114,
        M = 60109,
        T = 60110,
        L = 60112,
        N = 60113,
        P = 60120,
        O = 60115,
        z = 60116,
        D = 60121,
        U = 60128,
        F = 60129,
        A = 60130,
        I = 60131;
    if ("function" == typeof Symbol && Symbol.for) {
        var R = Symbol.for;
        _ = R("react.element"), S = R("react.portal"), x = R("react.fragment"), C = R("react.strict_mode"), E = R("react.profiler"), M = R("react.provider"), T = R("react.context"), L = R("react.forward_ref"), N = R("react.suspense"), P = R("react.suspense_list"), O = R("react.memo"), z = R("react.lazy"), D = R("react.block"), R("react.scope"), U = R("react.opaque.id"), F = R("react.debug_trace_mode"), A = R("react.offscreen"), I = R("react.legacy_hidden")
    }
    var j, B = "function" == typeof Symbol && Symbol.iterator;

    function H(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof (e = B && e[B] || e["@@iterator"]) ? e : null
    }

    function V(e) {
        if (void 0 === j) try {
            throw Error()
        } catch (e) {
            var t = e.stack.trim().match(/\n( *(at )?)/);
            j = t && t[1] || ""
        }
        return "\n" + j + e
    }
    var $ = !1;

    function W(e, t) {
        if (!e || $) return "";
        $ = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function () {
                        throw Error()
                    }, Object.defineProperty(t.prototype, "props", {
                        set: function () {
                            throw Error()
                        }
                    }), "object" == typeof Reflect && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (e) {
                        var r = e
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (e) {
                        r = e
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (e) {
                    r = e
                }
                e()
            }
        } catch (e) {
            if (e && r && "string" == typeof e.stack) {
                for (var a = e.stack.split("\n"), l = r.stack.split("\n"), o = a.length - 1, i = l.length - 1; 1 <= o && 0 <= i && a[o] !== l[i];) i--;
                for (; 1 <= o && 0 <= i; o--, i--)
                    if (a[o] !== l[i]) {
                        if (1 !== o || 1 !== i)
                            do {
                                if (o--, 0 > --i || a[o] !== l[i]) return "\n" + a[o].replace(" at new ", " at ")
                            } while (1 <= o && 0 <= i);
                        break
                    }
            }
        } finally {
            $ = !1, Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? V(e) : ""
    }

    function Q(e) {
        switch (e.tag) {
            case 5:
                return V(e.type);
            case 16:
                return V("Lazy");
            case 13:
                return V("Suspense");
            case 19:
                return V("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = W(e.type, !1);
            case 11:
                return e = W(e.type.render, !1);
            case 22:
                return e = W(e.type._render, !1);
            case 1:
                return e = W(e.type, !0);
            default:
                return ""
        }
    }

    function q(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
            case x:
                return "Fragment";
            case S:
                return "Portal";
            case E:
                return "Profiler";
            case C:
                return "StrictMode";
            case N:
                return "Suspense";
            case P:
                return "SuspenseList"
        }
        if ("object" == typeof e) switch (e.$$typeof) {
            case T:
                return (e.displayName || "Context") + ".Consumer";
            case M:
                return (e._context.displayName || "Context") + ".Provider";
            case L:
                var t = e.render;
                return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
            case O:
                return q(e.type);
            case D:
                return q(e._render);
            case z:
                t = e._payload, e = e._init;
                try {
                    return q(e(t))
                } catch (e) {}
        }
        return null
    }

    function Y(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
                return e;
            default:
                return ""
        }
    }

    function G(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
    }

    function K(e) {
        e._valueTracker || (e._valueTracker = function (e) {
            var t = G(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                var a = n.get,
                    l = n.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                        return a.call(this)
                    },
                    set: function (e) {
                        r = "" + e, l.call(this, e)
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: n.enumerable
                }), {
                    getValue: function () {
                        return r
                    },
                    setValue: function (e) {
                        r = "" + e
                    },
                    stopTracking: function () {
                        e._valueTracker = null, delete e[t]
                    }
                }
            }
        }(e))
    }

    function X(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            r = "";
        return e && (r = G(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
    }

    function Z(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }

    function J(e, t) {
        var n = t.checked;
        return a({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked
        })
    }

    function ee(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
        n = Y(null != t.value ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }
    }

    function te(e, t) {
        null != (t = t.checked) && w(e, "checked", t, !1)
    }

    function ne(e, t) {
        te(e, t);
        var n = Y(t.value),
            r = t.type;
        if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
        t.hasOwnProperty("value") ? ae(e, t.type, n) : t.hasOwnProperty("defaultValue") && ae(e, t.type, Y(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
    }

    function re(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
        }
        "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
    }

    function ae(e, t, n) {
        "number" === t && Z(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }

    function le(e, t) {
        return e = a({
            children: void 0
        }, t), (t = function (e) {
            var t = "";
            return r.Children.forEach(e, (function (e) {
                null != e && (t += e)
            })), t
        }(t.children)) && (e.children = t), e
    }

    function oe(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + Y(n), t = null, a = 0; a < e.length; a++) {
                if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                null !== t || e[a].disabled || (t = e[a])
            }
            null !== t && (t.selected = !0)
        }
    }

    function ie(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
        return a({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function ue(e, t) {
        var n = t.value;
        if (null == n) {
            if (n = t.children, t = t.defaultValue, null != n) {
                if (null != t) throw Error(o(92));
                if (Array.isArray(n)) {
                    if (!(1 >= n.length)) throw Error(o(93));
                    n = n[0]
                }
                t = n
            }
            null == t && (t = ""), n = t
        }
        e._wrapperState = {
            initialValue: Y(n)
        }
    }

    function se(e, t) {
        var n = Y(t.value),
            r = Y(t.defaultValue);
        null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
    }

    function ce(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
    }
    var fe = "http://www.w3.org/1999/xhtml",
        de = "http://www.w3.org/2000/svg";

    function pe(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function he(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e ? pe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
    }
    var ge, me, ye = (me = function (e, t) {
        if (e.namespaceURI !== de || "innerHTML" in e) e.innerHTML = t;
        else {
            for ((ge = ge || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ge.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) {
        MSApp.execUnsafeLocalFunction((function () {
            return me(e, t)
        }))
    } : me);

    function ve(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
        }
        e.textContent = t
    }
    var be = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        we = ["Webkit", "ms", "Moz", "O"];

    function ke(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || be.hasOwnProperty(e) && be[e] ? ("" + t).trim() : t + "px"
    }

    function _e(e, t) {
        for (var n in e = e.style, t)
            if (t.hasOwnProperty(n)) {
                var r = 0 === n.indexOf("--"),
                    a = ke(n, t[n], r);
                "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a
            }
    }
    Object.keys(be).forEach((function (e) {
        we.forEach((function (t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), be[t] = be[e]
        }))
    }));
    var Se = a({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function xe(e, t) {
        if (t) {
            if (Se[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children) throw Error(o(60));
                if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61))
            }
            if (null != t.style && "object" != typeof t.style) throw Error(o(62))
        }
    }

    function Ce(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }

    function Ee(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
    }
    var Me = null,
        Te = null,
        Le = null;

    function Ne(e) {
        if (e = ea(e)) {
            if ("function" != typeof Me) throw Error(o(280));
            var t = e.stateNode;
            t && (t = na(t), Me(e.stateNode, e.type, t))
        }
    }

    function Pe(e) {
        Te ? Le ? Le.push(e) : Le = [e] : Te = e
    }

    function Oe() {
        if (Te) {
            var e = Te,
                t = Le;
            if (Le = Te = null, Ne(e), t)
                for (e = 0; e < t.length; e++) Ne(t[e])
        }
    }

    function ze(e, t) {
        return e(t)
    }

    function De(e, t, n, r, a) {
        return e(t, n, r, a)
    }

    function Ue() {}
    var Fe = ze,
        Ae = !1,
        Ie = !1;

    function Re() {
        null === Te && null === Le || (Ue(), Oe())
    }

    function je(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = na(n);
        if (null === r) return null;
        n = r[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && "function" != typeof n) throw Error(o(231, t, typeof n));
        return n
    }
    var Be = !1;
    if (f) try {
        var He = {};
        Object.defineProperty(He, "passive", {
            get: function () {
                Be = !0
            }
        }), window.addEventListener("test", He, He), window.removeEventListener("test", He, He)
    } catch (me) {
        Be = !1
    }

    function Ve(e, t, n, r, a, l, o, i, u) {
        var s = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, s)
        } catch (e) {
            this.onError(e)
        }
    }
    var $e = !1,
        We = null,
        Qe = !1,
        qe = null,
        Ye = {
            onError: function (e) {
                $e = !0, We = e
            }
        };

    function Ge(e, t, n, r, a, l, o, i, u) {
        $e = !1, We = null, Ve.apply(Ye, arguments)
    }

    function Ke(e) {
        var t = e,
            n = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do {
                0 != (1026 & (t = e).flags) && (n = t.return), e = t.return
            } while (e)
        }
        return 3 === t.tag ? n : null
    }

    function Xe(e) {
        if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
        }
        return null
    }

    function Ze(e) {
        if (Ke(e) !== e) throw Error(o(188))
    }

    function Je(e) {
        if (!(e = function (e) {
                var t = e.alternate;
                if (!t) {
                    if (null === (t = Ke(e))) throw Error(o(188));
                    return t !== e ? null : e
                }
                for (var n = e, r = t;;) {
                    var a = n.return;
                    if (null === a) break;
                    var l = a.alternate;
                    if (null === l) {
                        if (null !== (r = a.return)) {
                            n = r;
                            continue
                        }
                        break
                    }
                    if (a.child === l.child) {
                        for (l = a.child; l;) {
                            if (l === n) return Ze(a), e;
                            if (l === r) return Ze(a), t;
                            l = l.sibling
                        }
                        throw Error(o(188))
                    }
                    if (n.return !== r.return) n = a, r = l;
                    else {
                        for (var i = !1, u = a.child; u;) {
                            if (u === n) {
                                i = !0, n = a, r = l;
                                break
                            }
                            if (u === r) {
                                i = !0, r = a, n = l;
                                break
                            }
                            u = u.sibling
                        }
                        if (!i) {
                            for (u = l.child; u;) {
                                if (u === n) {
                                    i = !0, n = l, r = a;
                                    break
                                }
                                if (u === r) {
                                    i = !0, r = l, n = a;
                                    break
                                }
                                u = u.sibling
                            }
                            if (!i) throw Error(o(189))
                        }
                    }
                    if (n.alternate !== r) throw Error(o(190))
                }
                if (3 !== n.tag) throw Error(o(188));
                return n.stateNode.current === n ? e : t
            }(e))) return null;
        for (var t = e;;) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) t.child.return = t, t = t.child;
            else {
                if (t === e) break;
                for (; !t.sibling;) {
                    if (!t.return || t.return === e) return null;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return null
    }

    function et(e, t) {
        for (var n = e.alternate; null !== t;) {
            if (t === e || t === n) return !0;
            t = t.return
        }
        return !1
    }
    var tt, nt, rt, at, lt = !1,
        ot = [],
        it = null,
        ut = null,
        st = null,
        ct = new Map,
        ft = new Map,
        dt = [],
        pt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function ht(e, t, n, r, a) {
        return {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: 16 | n,
            nativeEvent: a,
            targetContainers: [r]
        }
    }

    function gt(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                it = null;
                break;
            case "dragenter":
            case "dragleave":
                ut = null;
                break;
            case "mouseover":
            case "mouseout":
                st = null;
                break;
            case "pointerover":
            case "pointerout":
                ct.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                ft.delete(t.pointerId)
        }
    }

    function mt(e, t, n, r, a, l) {
        return null === e || e.nativeEvent !== l ? (e = ht(t, n, r, a, l), null !== t && (null !== (t = ea(t)) && nt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
    }

    function yt(e) {
        var t = Jr(e.target);
        if (null !== t) {
            var n = Ke(t);
            if (null !== n)
                if (13 === (t = n.tag)) {
                    if (null !== (t = Xe(n))) return e.blockedOn = t, void at(e.lanePriority, (function () {
                        l.unstable_runWithPriority(e.priority, (function () {
                            rt(n)
                        }))
                    }))
                } else if (3 === t && n.stateNode.hydrate) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
        }
        e.blockedOn = null
    }

    function vt(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) return null !== (t = ea(n)) && nt(t), e.blockedOn = n, !1;
            t.shift()
        }
        return !0
    }

    function bt(e, t, n) {
        vt(e) && n.delete(t)
    }

    function wt() {
        for (lt = !1; 0 < ot.length;) {
            var e = ot[0];
            if (null !== e.blockedOn) {
                null !== (e = ea(e.blockedOn)) && tt(e);
                break
            }
            for (var t = e.targetContainers; 0 < t.length;) {
                var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                if (null !== n) {
                    e.blockedOn = n;
                    break
                }
                t.shift()
            }
            null === e.blockedOn && ot.shift()
        }
        null !== it && vt(it) && (it = null), null !== ut && vt(ut) && (ut = null), null !== st && vt(st) && (st = null), ct.forEach(bt), ft.forEach(bt)
    }

    function kt(e, t) {
        e.blockedOn === t && (e.blockedOn = null, lt || (lt = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, wt)))
    }

    function _t(e) {
        function t(t) {
            return kt(t, e)
        }
        if (0 < ot.length) {
            kt(ot[0], e);
            for (var n = 1; n < ot.length; n++) {
                var r = ot[n];
                r.blockedOn === e && (r.blockedOn = null)
            }
        }
        for (null !== it && kt(it, e), null !== ut && kt(ut, e), null !== st && kt(st, e), ct.forEach(t), ft.forEach(t), n = 0; n < dt.length; n++)(r = dt[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < dt.length && null === (n = dt[0]).blockedOn;) yt(n), null === n.blockedOn && dt.shift()
    }

    function St(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var xt = {
            animationend: St("Animation", "AnimationEnd"),
            animationiteration: St("Animation", "AnimationIteration"),
            animationstart: St("Animation", "AnimationStart"),
            transitionend: St("Transition", "TransitionEnd")
        },
        Ct = {},
        Et = {};

    function Mt(e) {
        if (Ct[e]) return Ct[e];
        if (!xt[e]) return e;
        var t, n = xt[e];
        for (t in n)
            if (n.hasOwnProperty(t) && t in Et) return Ct[e] = n[t];
        return e
    }
    f && (Et = document.createElement("div").style, "AnimationEvent" in window || (delete xt.animationend.animation, delete xt.animationiteration.animation, delete xt.animationstart.animation), "TransitionEvent" in window || delete xt.transitionend.transition);
    var Tt = Mt("animationend"),
        Lt = Mt("animationiteration"),
        Nt = Mt("animationstart"),
        Pt = Mt("transitionend"),
        Ot = new Map,
        zt = new Map,
        Dt = ["abort", "abort", Tt, "animationEnd", Lt, "animationIteration", Nt, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Pt, "transitionEnd", "waiting", "waiting"];

    function Ut(e, t) {
        for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
                a = e[n + 1];
            a = "on" + (a[0].toUpperCase() + a.slice(1)), zt.set(r, t), Ot.set(r, a), s(a, [r])
        }
    }(0, l.unstable_now)();
    var Ft = 8;

    function At(e) {
        if (0 != (1 & e)) return Ft = 15, 1;
        if (0 != (2 & e)) return Ft = 14, 2;
        if (0 != (4 & e)) return Ft = 13, 4;
        var t = 24 & e;
        return 0 !== t ? (Ft = 12, t) : 0 != (32 & e) ? (Ft = 11, 32) : 0 !== (t = 192 & e) ? (Ft = 10, t) : 0 != (256 & e) ? (Ft = 9, 256) : 0 !== (t = 3584 & e) ? (Ft = 8, t) : 0 != (4096 & e) ? (Ft = 7, 4096) : 0 !== (t = 4186112 & e) ? (Ft = 6, t) : 0 !== (t = 62914560 & e) ? (Ft = 5, t) : 67108864 & e ? (Ft = 4, 67108864) : 0 != (134217728 & e) ? (Ft = 3, 134217728) : 0 !== (t = 805306368 & e) ? (Ft = 2, t) : 0 != (1073741824 & e) ? (Ft = 1, 1073741824) : (Ft = 8, e)
    }

    function It(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return Ft = 0;
        var r = 0,
            a = 0,
            l = e.expiredLanes,
            o = e.suspendedLanes,
            i = e.pingedLanes;
        if (0 !== l) r = l, a = Ft = 15;
        else if (0 !== (l = 134217727 & n)) {
            var u = l & ~o;
            0 !== u ? (r = At(u), a = Ft) : 0 !== (i &= l) && (r = At(i), a = Ft)
        } else 0 !== (l = n & ~o) ? (r = At(l), a = Ft) : 0 !== i && (r = At(i), a = Ft);
        if (0 === r) return 0;
        if (r = n & ((0 > (r = 31 - $t(r)) ? 0 : 1 << r) << 1) - 1, 0 !== t && t !== r && 0 == (t & o)) {
            if (At(t), a <= Ft) return t;
            Ft = a
        }
        if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t;) a = 1 << (n = 31 - $t(t)), r |= e[n], t &= ~a;
        return r
    }

    function Rt(e) {
        return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
    }

    function jt(e, t) {
        switch (e) {
            case 15:
                return 1;
            case 14:
                return 2;
            case 12:
                return 0 === (e = Bt(24 & ~t)) ? jt(10, t) : e;
            case 10:
                return 0 === (e = Bt(192 & ~t)) ? jt(8, t) : e;
            case 8:
                return 0 === (e = Bt(3584 & ~t)) && (0 === (e = Bt(4186112 & ~t)) && (e = 512)), e;
            case 2:
                return 0 === (t = Bt(805306368 & ~t)) && (t = 268435456), t
        }
        throw Error(o(358, e))
    }

    function Bt(e) {
        return e & -e
    }

    function Ht(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
    }

    function Vt(e, t, n) {
        e.pendingLanes |= t;
        var r = t - 1;
        e.suspendedLanes &= r, e.pingedLanes &= r, (e = e.eventTimes)[t = 31 - $t(t)] = n
    }
    var $t = Math.clz32 ? Math.clz32 : function (e) {
            return 0 === e ? 32 : 31 - (Wt(e) / Qt | 0) | 0
        },
        Wt = Math.log,
        Qt = Math.LN2;
    var qt = l.unstable_UserBlockingPriority,
        Yt = l.unstable_runWithPriority,
        Gt = !0;

    function Kt(e, t, n, r) {
        Ae || Ue();
        var a = Zt,
            l = Ae;
        Ae = !0;
        try {
            De(a, e, t, n, r)
        } finally {
            (Ae = l) || Re()
        }
    }

    function Xt(e, t, n, r) {
        Yt(qt, Zt.bind(null, e, t, n, r))
    }

    function Zt(e, t, n, r) {
        var a;
        if (Gt)
            if ((a = 0 == (4 & t)) && 0 < ot.length && -1 < pt.indexOf(e)) e = ht(null, e, t, n, r), ot.push(e);
            else {
                var l = Jt(e, t, n, r);
                if (null === l) a && gt(e, r);
                else {
                    if (a) {
                        if (-1 < pt.indexOf(e)) return e = ht(l, e, t, n, r), void ot.push(e);
                        if (function (e, t, n, r, a) {
                                switch (t) {
                                    case "focusin":
                                        return it = mt(it, e, t, n, r, a), !0;
                                    case "dragenter":
                                        return ut = mt(ut, e, t, n, r, a), !0;
                                    case "mouseover":
                                        return st = mt(st, e, t, n, r, a), !0;
                                    case "pointerover":
                                        var l = a.pointerId;
                                        return ct.set(l, mt(ct.get(l) || null, e, t, n, r, a)), !0;
                                    case "gotpointercapture":
                                        return l = a.pointerId, ft.set(l, mt(ft.get(l) || null, e, t, n, r, a)), !0
                                }
                                return !1
                            }(l, e, t, n, r)) return;
                        gt(e, r)
                    }
                    Or(e, t, r, null, n)
                }
            }
    }

    function Jt(e, t, n, r) {
        var a = Ee(r);
        if (null !== (a = Jr(a))) {
            var l = Ke(a);
            if (null === l) a = null;
            else {
                var o = l.tag;
                if (13 === o) {
                    if (null !== (a = Xe(l))) return a;
                    a = null
                } else if (3 === o) {
                    if (l.stateNode.hydrate) return 3 === l.tag ? l.stateNode.containerInfo : null;
                    a = null
                } else l !== a && (a = null)
            }
        }
        return Or(e, t, r, a, n), null
    }
    var en = null,
        tn = null,
        nn = null;

    function rn() {
        if (nn) return nn;
        var e, t, n = tn,
            r = n.length,
            a = "value" in en ? en.value : en.textContent,
            l = a.length;
        for (e = 0; e < r && n[e] === a[e]; e++);
        var o = r - e;
        for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
        return nn = a.slice(e, 1 < t ? 1 - t : void 0)
    }

    function an(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
    }

    function ln() {
        return !0
    }

    function on() {
        return !1
    }

    function un(e) {
        function t(t, n, r, a, l) {
            for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = l, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(a) : a[o]);
            return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? ln : on, this.isPropagationStopped = on, this
        }
        return a(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = ln)
            },
            stopPropagation: function () {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = ln)
            },
            persist: function () {},
            isPersistent: ln
        }), t
    }
    var sn, cn, fn, dn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        pn = un(dn),
        hn = a({}, dn, {
            view: 0,
            detail: 0
        }),
        gn = un(hn),
        mn = a({}, hn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Mn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function (e) {
                return "movementX" in e ? e.movementX : (e !== fn && (fn && "mousemove" === e.type ? (sn = e.screenX - fn.screenX, cn = e.screenY - fn.screenY) : cn = sn = 0, fn = e), sn)
            },
            movementY: function (e) {
                return "movementY" in e ? e.movementY : cn
            }
        }),
        yn = un(mn),
        vn = un(a({}, mn, {
            dataTransfer: 0
        })),
        bn = un(a({}, hn, {
            relatedTarget: 0
        })),
        wn = un(a({}, dn, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        })),
        kn = un(a({}, dn, {
            clipboardData: function (e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        })),
        _n = un(a({}, dn, {
            data: 0
        })),
        Sn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        xn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        Cn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function En(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = Cn[e]) && !!t[e]
    }

    function Mn() {
        return En
    }
    var Tn = un(a({}, hn, {
            key: function (e) {
                if (e.key) {
                    var t = Sn[e.key] || e.key;
                    if ("Unidentified" !== t) return t
                }
                return "keypress" === e.type ? 13 === (e = an(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? xn[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Mn,
            charCode: function (e) {
                return "keypress" === e.type ? an(e) : 0
            },
            keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            },
            which: function (e) {
                return "keypress" === e.type ? an(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            }
        })),
        Ln = un(a({}, mn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        })),
        Nn = un(a({}, hn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Mn
        })),
        Pn = un(a({}, dn, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        })),
        On = un(a({}, mn, {
            deltaX: function (e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function (e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        })),
        zn = [9, 13, 27, 32],
        Dn = f && "CompositionEvent" in window,
        Un = null;
    f && "documentMode" in document && (Un = document.documentMode);
    var Fn = f && "TextEvent" in window && !Un,
        An = f && (!Dn || Un && 8 < Un && 11 >= Un),
        In = String.fromCharCode(32),
        Rn = !1;

    function jn(e, t) {
        switch (e) {
            case "keyup":
                return -1 !== zn.indexOf(t.keyCode);
            case "keydown":
                return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Bn(e) {
        return "object" == typeof (e = e.detail) && "data" in e ? e.data : null
    }
    var Hn = !1;
    var Vn = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function $n(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Vn[e.type] : "textarea" === t
    }

    function Wn(e, t, n, r) {
        Pe(r), 0 < (t = Dr(t, "onChange")).length && (n = new pn("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }))
    }
    var Qn = null,
        qn = null;

    function Yn(e) {
        Er(e, 0)
    }

    function Gn(e) {
        if (X(ta(e))) return e
    }

    function Kn(e, t) {
        if ("change" === e) return t
    }
    var Xn = !1;
    if (f) {
        var Zn;
        if (f) {
            var Jn = "oninput" in document;
            if (!Jn) {
                var er = document.createElement("div");
                er.setAttribute("oninput", "return;"), Jn = "function" == typeof er.oninput
            }
            Zn = Jn
        } else Zn = !1;
        Xn = Zn && (!document.documentMode || 9 < document.documentMode)
    }

    function tr() {
        Qn && (Qn.detachEvent("onpropertychange", nr), qn = Qn = null)
    }

    function nr(e) {
        if ("value" === e.propertyName && Gn(qn)) {
            var t = [];
            if (Wn(t, qn, e, Ee(e)), e = Yn, Ae) e(t);
            else {
                Ae = !0;
                try {
                    ze(e, t)
                } finally {
                    Ae = !1, Re()
                }
            }
        }
    }

    function rr(e, t, n) {
        "focusin" === e ? (tr(), qn = n, (Qn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
    }

    function ar(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Gn(qn)
    }

    function lr(e, t) {
        if ("click" === e) return Gn(t)
    }

    function or(e, t) {
        if ("input" === e || "change" === e) return Gn(t)
    }
    var ir = "function" == typeof Object.is ? Object.is : function (e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        ur = Object.prototype.hasOwnProperty;

    function sr(e, t) {
        if (ir(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
            if (!ur.call(t, n[r]) || !ir(e[n[r]], t[n[r]])) return !1;
        return !0
    }

    function cr(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function fr(e, t) {
        var n, r = cr(e);
        for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t) return {
                    node: r,
                    offset: t - e
                };
                e = n
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e
                    }
                    r = r.parentNode
                }
                r = void 0
            }
            r = cr(r)
        }
    }

    function dr(e, t) {
        return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
    }

    function pr() {
        for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" == typeof t.contentWindow.location.href
            } catch (e) {
                n = !1
            }
            if (!n) break;
            t = Z((e = t.contentWindow).document)
        }
        return t
    }

    function hr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
    }
    var gr = f && "documentMode" in document && 11 >= document.documentMode,
        mr = null,
        yr = null,
        vr = null,
        br = !1;

    function wr(e, t, n) {
        var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        br || null == mr || mr !== Z(r) || ("selectionStart" in (r = mr) && hr(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : r = {
            anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }, vr && sr(vr, r) || (vr = r, 0 < (r = Dr(yr, "onSelect")).length && (t = new pn("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = mr)))
    }
    Ut("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), Ut("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Ut(Dt, 2);
    for (var kr = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), _r = 0; _r < kr.length; _r++) zt.set(kr[_r], 0);
    c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Sr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        xr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));

    function Cr(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n,
            function (e, t, n, r, a, l, i, u, s) {
                if (Ge.apply(this, arguments), $e) {
                    if (!$e) throw Error(o(198));
                    var c = We;
                    $e = !1, We = null, Qe || (Qe = !0, qe = c)
                }
            }(r, t, void 0, e), e.currentTarget = null
    }

    function Er(e, t) {
        t = 0 != (4 & t);
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                a = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t)
                    for (var o = r.length - 1; 0 <= o; o--) {
                        var i = r[o],
                            u = i.instance,
                            s = i.currentTarget;
                        if (i = i.listener, u !== l && a.isPropagationStopped()) break e;
                        Cr(a, i, s), l = u
                    } else
                        for (o = 0; o < r.length; o++) {
                            if (u = (i = r[o]).instance, s = i.currentTarget, i = i.listener, u !== l && a.isPropagationStopped()) break e;
                            Cr(a, i, s), l = u
                        }
            }
        }
        if (Qe) throw e = qe, Qe = !1, qe = null, e
    }

    function Mr(e, t) {
        var n = ra(t),
            r = e + "__bubble";
        n.has(r) || (Pr(t, e, 2, !1), n.add(r))
    }
    var Tr = "_reactListening" + Math.random().toString(36).slice(2);

    function Lr(e) {
        e[Tr] || (e[Tr] = !0, i.forEach((function (t) {
            xr.has(t) || Nr(t, !1, e, null), Nr(t, !0, e, null)
        })))
    }

    function Nr(e, t, n, r) {
        var a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
            l = n;
        if ("selectionchange" === e && 9 !== n.nodeType && (l = n.ownerDocument), null !== r && !t && xr.has(e)) {
            if ("scroll" !== e) return;
            a |= 2, l = r
        }
        var o = ra(l),
            i = e + "__" + (t ? "capture" : "bubble");
        o.has(i) || (t && (a |= 4), Pr(l, e, a, t), o.add(i))
    }

    function Pr(e, t, n, r) {
        var a = zt.get(t);
        switch (void 0 === a ? 2 : a) {
            case 0:
                a = Kt;
                break;
            case 1:
                a = Xt;
                break;
            default:
                a = Zt
        }
        n = a.bind(null, t, n, e), a = void 0, !Be || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
            capture: !0,
            passive: a
        }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
            passive: a
        }) : e.addEventListener(t, n, !1)
    }

    function Or(e, t, n, r, a) {
        var l = r;
        if (0 == (1 & t) && 0 == (2 & t) && null !== r) e: for (;;) {
            if (null === r) return;
            var o = r.tag;
            if (3 === o || 4 === o) {
                var i = r.stateNode.containerInfo;
                if (i === a || 8 === i.nodeType && i.parentNode === a) break;
                if (4 === o)
                    for (o = r.return; null !== o;) {
                        var u = o.tag;
                        if ((3 === u || 4 === u) && ((u = o.stateNode.containerInfo) === a || 8 === u.nodeType && u.parentNode === a)) return;
                        o = o.return
                    }
                for (; null !== i;) {
                    if (null === (o = Jr(i))) return;
                    if (5 === (u = o.tag) || 6 === u) {
                        r = l = o;
                        continue e
                    }
                    i = i.parentNode
                }
            }
            r = r.return
        }! function (e, t, n) {
            if (Ie) return e(t, n);
            Ie = !0;
            try {
                Fe(e, t, n)
            } finally {
                Ie = !1, Re()
            }
        }((function () {
            var r = l,
                a = Ee(n),
                o = [];
            e: {
                var i = Ot.get(e);
                if (void 0 !== i) {
                    var u = pn,
                        s = e;
                    switch (e) {
                        case "keypress":
                            if (0 === an(n)) break e;
                        case "keydown":
                        case "keyup":
                            u = Tn;
                            break;
                        case "focusin":
                            s = "focus", u = bn;
                            break;
                        case "focusout":
                            s = "blur", u = bn;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            u = bn;
                            break;
                        case "click":
                            if (2 === n.button) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            u = yn;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            u = vn;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            u = Nn;
                            break;
                        case Tt:
                        case Lt:
                        case Nt:
                            u = wn;
                            break;
                        case Pt:
                            u = Pn;
                            break;
                        case "scroll":
                            u = gn;
                            break;
                        case "wheel":
                            u = On;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            u = kn;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            u = Ln
                    }
                    var c = 0 != (4 & t),
                        f = !c && "scroll" === e,
                        d = c ? null !== i ? i + "Capture" : null : i;
                    c = [];
                    for (var p, h = r; null !== h;) {
                        var g = (p = h).stateNode;
                        if (5 === p.tag && null !== g && (p = g, null !== d && (null != (g = je(h, d)) && c.push(zr(h, g, p)))), f) break;
                        h = h.return
                    }
                    0 < c.length && (i = new u(i, s, null, n, a), o.push({
                        event: i,
                        listeners: c
                    }))
                }
            }
            if (0 == (7 & t)) {
                if (u = "mouseout" === e || "pointerout" === e, (!(i = "mouseover" === e || "pointerover" === e) || 0 != (16 & t) || !(s = n.relatedTarget || n.fromElement) || !Jr(s) && !s[Xr]) && (u || i) && (i = a.window === a ? a : (i = a.ownerDocument) ? i.defaultView || i.parentWindow : window, u ? (u = r, null !== (s = (s = n.relatedTarget || n.toElement) ? Jr(s) : null) && (s !== (f = Ke(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null, s = r), u !== s)) {
                    if (c = yn, g = "onMouseLeave", d = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Ln, g = "onPointerLeave", d = "onPointerEnter", h = "pointer"), f = null == u ? i : ta(u), p = null == s ? i : ta(s), (i = new c(g, h + "leave", u, n, a)).target = f, i.relatedTarget = p, g = null, Jr(a) === r && ((c = new c(d, h + "enter", s, n, a)).target = p, c.relatedTarget = f, g = c), f = g, u && s) e: {
                        for (d = s, h = 0, p = c = u; p; p = Ur(p)) h++;
                        for (p = 0, g = d; g; g = Ur(g)) p++;
                        for (; 0 < h - p;) c = Ur(c),
                        h--;
                        for (; 0 < p - h;) d = Ur(d),
                        p--;
                        for (; h--;) {
                            if (c === d || null !== d && c === d.alternate) break e;
                            c = Ur(c), d = Ur(d)
                        }
                        c = null
                    }
                    else c = null;
                    null !== u && Fr(o, i, u, c, !1), null !== s && null !== f && Fr(o, f, s, c, !0)
                }
                if ("select" === (u = (i = r ? ta(r) : window).nodeName && i.nodeName.toLowerCase()) || "input" === u && "file" === i.type) var m = Kn;
                else if ($n(i))
                    if (Xn) m = or;
                    else {
                        m = ar;
                        var y = rr
                    }
                else(u = i.nodeName) && "input" === u.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (m = lr);
                switch (m && (m = m(e, r)) ? Wn(o, m, n, a) : (y && y(e, i, r), "focusout" === e && (y = i._wrapperState) && y.controlled && "number" === i.type && ae(i, "number", i.value)), y = r ? ta(r) : window, e) {
                    case "focusin":
                        ($n(y) || "true" === y.contentEditable) && (mr = y, yr = r, vr = null);
                        break;
                    case "focusout":
                        vr = yr = mr = null;
                        break;
                    case "mousedown":
                        br = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        br = !1, wr(o, n, a);
                        break;
                    case "selectionchange":
                        if (gr) break;
                    case "keydown":
                    case "keyup":
                        wr(o, n, a)
                }
                var v;
                if (Dn) e: {
                    switch (e) {
                        case "compositionstart":
                            var b = "onCompositionStart";
                            break e;
                        case "compositionend":
                            b = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            b = "onCompositionUpdate";
                            break e
                    }
                    b = void 0
                }
                else Hn ? jn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                b && (An && "ko" !== n.locale && (Hn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Hn && (v = rn()) : (tn = "value" in (en = a) ? en.value : en.textContent, Hn = !0)), 0 < (y = Dr(r, b)).length && (b = new _n(b, e, null, n, a), o.push({
                    event: b,
                    listeners: y
                }), v ? b.data = v : null !== (v = Bn(n)) && (b.data = v))), (v = Fn ? function (e, t) {
                    switch (e) {
                        case "compositionend":
                            return Bn(t);
                        case "keypress":
                            return 32 !== t.which ? null : (Rn = !0, In);
                        case "textInput":
                            return (e = t.data) === In && Rn ? null : e;
                        default:
                            return null
                    }
                }(e, n) : function (e, t) {
                    if (Hn) return "compositionend" === e || !Dn && jn(e, t) ? (e = rn(), nn = tn = en = null, Hn = !1, e) : null;
                    switch (e) {
                        case "paste":
                            return null;
                        case "keypress":
                            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                if (t.char && 1 < t.char.length) return t.char;
                                if (t.which) return String.fromCharCode(t.which)
                            }
                            return null;
                        case "compositionend":
                            return An && "ko" !== t.locale ? null : t.data;
                        default:
                            return null
                    }
                }(e, n)) && (0 < (r = Dr(r, "onBeforeInput")).length && (a = new _n("onBeforeInput", "beforeinput", null, n, a), o.push({
                    event: a,
                    listeners: r
                }), a.data = v))
            }
            Er(o, t)
        }))
    }

    function zr(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }

    function Dr(e, t) {
        for (var n = t + "Capture", r = []; null !== e;) {
            var a = e,
                l = a.stateNode;
            5 === a.tag && null !== l && (a = l, null != (l = je(e, n)) && r.unshift(zr(e, l, a)), null != (l = je(e, t)) && r.push(zr(e, l, a))), e = e.return
        }
        return r
    }

    function Ur(e) {
        if (null === e) return null;
        do {
            e = e.return
        } while (e && 5 !== e.tag);
        return e || null
    }

    function Fr(e, t, n, r, a) {
        for (var l = t._reactName, o = []; null !== n && n !== r;) {
            var i = n,
                u = i.alternate,
                s = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag && null !== s && (i = s, a ? null != (u = je(n, l)) && o.unshift(zr(n, u, i)) : a || null != (u = je(n, l)) && o.push(zr(n, u, i))), n = n.return
        }
        0 !== o.length && e.push({
            event: t,
            listeners: o
        })
    }

    function Ar() {}
    var Ir = null,
        Rr = null;

    function jr(e, t) {
        switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                return !!t.autoFocus
        }
        return !1
    }

    function Br(e, t) {
        return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
    }
    var Hr = "function" == typeof setTimeout ? setTimeout : void 0,
        Vr = "function" == typeof clearTimeout ? clearTimeout : void 0;

    function $r(e) {
        1 === e.nodeType ? e.textContent = "" : 9 === e.nodeType && (null != (e = e.body) && (e.textContent = ""))
    }

    function Wr(e) {
        for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break
        }
        return e
    }

    function Qr(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("$" === n || "$!" === n || "$?" === n) {
                    if (0 === t) return e;
                    t--
                } else "/$" === n && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var qr = 0;
    var Yr = Math.random().toString(36).slice(2),
        Gr = "__reactFiber$" + Yr,
        Kr = "__reactProps$" + Yr,
        Xr = "__reactContainer$" + Yr,
        Zr = "__reactEvents$" + Yr;

    function Jr(e) {
        var t = e[Gr];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[Xr] || n[Gr]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                    for (e = Qr(e); null !== e;) {
                        if (n = e[Gr]) return n;
                        e = Qr(e)
                    }
                return t
            }
            n = (e = n).parentNode
        }
        return null
    }

    function ea(e) {
        return !(e = e[Gr] || e[Xr]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
    }

    function ta(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(o(33))
    }

    function na(e) {
        return e[Kr] || null
    }

    function ra(e) {
        var t = e[Zr];
        return void 0 === t && (t = e[Zr] = new Set), t
    }
    var aa = [],
        la = -1;

    function oa(e) {
        return {
            current: e
        }
    }

    function ia(e) {
        0 > la || (e.current = aa[la], aa[la] = null, la--)
    }

    function ua(e, t) {
        la++, aa[la] = e.current, e.current = t
    }
    var sa = {},
        ca = oa(sa),
        fa = oa(!1),
        da = sa;

    function pa(e, t) {
        var n = e.type.contextTypes;
        if (!n) return sa;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var a, l = {};
        for (a in n) l[a] = t[a];
        return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
    }

    function ha(e) {
        return null != (e = e.childContextTypes)
    }

    function ga() {
        ia(fa), ia(ca)
    }

    function ma(e, t, n) {
        if (ca.current !== sa) throw Error(o(168));
        ua(ca, t), ua(fa, n)
    }

    function ya(e, t, n) {
        var r = e.stateNode;
        if (e = t.childContextTypes, "function" != typeof r.getChildContext) return n;
        for (var l in r = r.getChildContext())
            if (!(l in e)) throw Error(o(108, q(t) || "Unknown", l));
        return a({}, n, r)
    }

    function va(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || sa, da = ca.current, ua(ca, e), ua(fa, fa.current), !0
    }

    function ba(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(o(169));
        n ? (e = ya(e, t, da), r.__reactInternalMemoizedMergedChildContext = e, ia(fa), ia(ca), ua(ca, e)) : ia(fa), ua(fa, n)
    }
    var wa = null,
        ka = null,
        _a = l.unstable_runWithPriority,
        Sa = l.unstable_scheduleCallback,
        xa = l.unstable_cancelCallback,
        Ca = l.unstable_shouldYield,
        Ea = l.unstable_requestPaint,
        Ma = l.unstable_now,
        Ta = l.unstable_getCurrentPriorityLevel,
        La = l.unstable_ImmediatePriority,
        Na = l.unstable_UserBlockingPriority,
        Pa = l.unstable_NormalPriority,
        Oa = l.unstable_LowPriority,
        za = l.unstable_IdlePriority,
        Da = {},
        Ua = void 0 !== Ea ? Ea : function () {},
        Fa = null,
        Aa = null,
        Ia = !1,
        Ra = Ma(),
        ja = 1e4 > Ra ? Ma : function () {
            return Ma() - Ra
        };

    function Ba() {
        switch (Ta()) {
            case La:
                return 99;
            case Na:
                return 98;
            case Pa:
                return 97;
            case Oa:
                return 96;
            case za:
                return 95;
            default:
                throw Error(o(332))
        }
    }

    function Ha(e) {
        switch (e) {
            case 99:
                return La;
            case 98:
                return Na;
            case 97:
                return Pa;
            case 96:
                return Oa;
            case 95:
                return za;
            default:
                throw Error(o(332))
        }
    }

    function Va(e, t) {
        return e = Ha(e), _a(e, t)
    }

    function $a(e, t, n) {
        return e = Ha(e), Sa(e, t, n)
    }

    function Wa() {
        if (null !== Aa) {
            var e = Aa;
            Aa = null, xa(e)
        }
        Qa()
    }

    function Qa() {
        if (!Ia && null !== Fa) {
            Ia = !0;
            var e = 0;
            try {
                var t = Fa;
                Va(99, (function () {
                    for (; e < t.length; e++) {
                        var n = t[e];
                        do {
                            n = n(!0)
                        } while (null !== n)
                    }
                })), Fa = null
            } catch (t) {
                throw null !== Fa && (Fa = Fa.slice(e + 1)), Sa(La, Wa), t
            } finally {
                Ia = !1
            }
        }
    }
    var qa = k.ReactCurrentBatchConfig;

    function Ya(e, t) {
        if (e && e.defaultProps) {
            for (var n in t = a({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
            return t
        }
        return t
    }
    var Ga = oa(null),
        Ka = null,
        Xa = null,
        Za = null;

    function Ja() {
        Za = Xa = Ka = null
    }

    function el(e) {
        var t = Ga.current;
        ia(Ga), e.type._context._currentValue = t
    }

    function tl(e, t) {
        for (; null !== e;) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
                if (null === n || (n.childLanes & t) === t) break;
                n.childLanes |= t
            } else e.childLanes |= t, null !== n && (n.childLanes |= t);
            e = e.return
        }
    }

    function nl(e, t) {
        Ka = e, Za = Xa = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (Do = !0), e.firstContext = null)
    }

    function rl(e, t) {
        if (Za !== e && !1 !== t && 0 !== t)
            if ("number" == typeof t && 1073741823 !== t || (Za = e, t = 1073741823), t = {
                    context: e,
                    observedBits: t,
                    next: null
                }, null === Xa) {
                if (null === Ka) throw Error(o(308));
                Xa = t, Ka.dependencies = {
                    lanes: 0,
                    firstContext: t,
                    responders: null
                }
            } else Xa = Xa.next = t;
        return e._currentValue
    }
    var al = !1;

    function ll(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null
            },
            effects: null
        }
    }

    function ol(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }

    function il(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function ul(e, t) {
        if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
        }
    }

    function sl(e, t) {
        var n = e.updateQueue,
            r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
                l = null;
            if (null !== (n = n.firstBaseUpdate)) {
                do {
                    var o = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null
                    };
                    null === l ? a = l = o : l = l.next = o, n = n.next
                } while (null !== n);
                null === l ? a = l = t : l = l.next = t
            } else a = l = t;
            return n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects
            }, void(e.updateQueue = n)
        }
        null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
    }

    function cl(e, t, n, r) {
        var l = e.updateQueue;
        al = !1;
        var o = l.firstBaseUpdate,
            i = l.lastBaseUpdate,
            u = l.shared.pending;
        if (null !== u) {
            l.shared.pending = null;
            var s = u,
                c = s.next;
            s.next = null, null === i ? o = c : i.next = c, i = s;
            var f = e.alternate;
            if (null !== f) {
                var d = (f = f.updateQueue).lastBaseUpdate;
                d !== i && (null === d ? f.firstBaseUpdate = c : d.next = c, f.lastBaseUpdate = s)
            }
        }
        if (null !== o) {
            for (d = l.baseState, i = 0, f = c = s = null;;) {
                u = o.lane;
                var p = o.eventTime;
                if ((r & u) === u) {
                    null !== f && (f = f.next = {
                        eventTime: p,
                        lane: 0,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null
                    });
                    e: {
                        var h = e,
                            g = o;
                        switch (u = t, p = n, g.tag) {
                            case 1:
                                if ("function" == typeof (h = g.payload)) {
                                    d = h.call(p, d, u);
                                    break e
                                }
                                d = h;
                                break e;
                            case 3:
                                h.flags = -4097 & h.flags | 64;
                            case 0:
                                if (null == (u = "function" == typeof (h = g.payload) ? h.call(p, d, u) : h)) break e;
                                d = a({}, d, u);
                                break e;
                            case 2:
                                al = !0
                        }
                    }
                    null !== o.callback && (e.flags |= 32, null === (u = l.effects) ? l.effects = [o] : u.push(o))
                } else p = {
                    eventTime: p,
                    lane: u,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null
                }, null === f ? (c = f = p, s = d) : f = f.next = p, i |= u;
                if (null === (o = o.next)) {
                    if (null === (u = l.shared.pending)) break;
                    o = u.next, u.next = null, l.lastBaseUpdate = u, l.shared.pending = null
                }
            }
            null === f && (s = d), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = f, Ii |= i, e.lanes = i, e.memoizedState = d
        }
    }

    function fl(e, t, n) {
        if (e = t.effects, t.effects = null, null !== e)
            for (t = 0; t < e.length; t++) {
                var r = e[t],
                    a = r.callback;
                if (null !== a) {
                    if (r.callback = null, r = n, "function" != typeof a) throw Error(o(191, a));
                    a.call(r)
                }
            }
    }
    var dl = (new r.Component).refs;

    function pl(e, t, n, r) {
        n = null == (n = n(r, t = e.memoizedState)) ? t : a({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
    }
    var hl = {
        isMounted: function (e) {
            return !!(e = e._reactInternals) && Ke(e) === e
        },
        enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = su(),
                a = cu(e),
                l = il(r, a);
            l.payload = t, null != n && (l.callback = n), ul(e, l), fu(e, a, r)
        },
        enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = su(),
                a = cu(e),
                l = il(r, a);
            l.tag = 1, l.payload = t, null != n && (l.callback = n), ul(e, l), fu(e, a, r)
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = su(),
                r = cu(e),
                a = il(n, r);
            a.tag = 2, null != t && (a.callback = t), ul(e, a), fu(e, r, n)
        }
    };

    function gl(e, t, n, r, a, l, o) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, l, o) : !t.prototype || !t.prototype.isPureReactComponent || (!sr(n, r) || !sr(a, l))
    }

    function ml(e, t, n) {
        var r = !1,
            a = sa,
            l = t.contextType;
        return "object" == typeof l && null !== l ? l = rl(l) : (a = ha(t) ? da : ca.current, l = (r = null != (r = t.contextTypes)) ? pa(e, a) : sa), t = new t(n, l), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = hl, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = l), t
    }

    function yl(e, t, n, r) {
        e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hl.enqueueReplaceState(t, t.state, null)
    }

    function vl(e, t, n, r) {
        var a = e.stateNode;
        a.props = n, a.state = e.memoizedState, a.refs = dl, ll(e);
        var l = t.contextType;
        "object" == typeof l && null !== l ? a.context = rl(l) : (l = ha(t) ? da : ca.current, a.context = pa(e, l)), cl(e, n, a, r), a.state = e.memoizedState, "function" == typeof (l = t.getDerivedStateFromProps) && (pl(e, t, l, n), a.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (t = a.state, "function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && hl.enqueueReplaceState(a, a.state, null), cl(e, n, a, r), a.state = e.memoizedState), "function" == typeof a.componentDidMount && (e.flags |= 4)
    }
    var bl = Array.isArray;

    function wl(e, t, n) {
        if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
            if (n._owner) {
                if (n = n._owner) {
                    if (1 !== n.tag) throw Error(o(309));
                    var r = n.stateNode
                }
                if (!r) throw Error(o(147, e));
                var a = "" + e;
                return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === a ? t.ref : ((t = function (e) {
                    var t = r.refs;
                    t === dl && (t = r.refs = {}), null === e ? delete t[a] : t[a] = e
                })._stringRef = a, t)
            }
            if ("string" != typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e))
        }
        return e
    }

    function kl(e, t) {
        if ("textarea" !== e.type) throw Error(o(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t))
    }

    function _l(e) {
        function t(t, n) {
            if (e) {
                var r = t.lastEffect;
                null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.flags = 8
            }
        }

        function n(n, r) {
            if (!e) return null;
            for (; null !== r;) t(n, r), r = r.sibling;
            return null
        }

        function r(e, t) {
            for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
            return e
        }

        function a(e, t) {
            return (e = Vu(e, t)).index = 0, e.sibling = null, e
        }

        function l(t, n, r) {
            return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags = 2, n) : r : (t.flags = 2, n) : n
        }

        function i(t) {
            return e && null === t.alternate && (t.flags = 2), t
        }

        function u(e, t, n, r) {
            return null === t || 6 !== t.tag ? ((t = qu(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
        }

        function s(e, t, n, r) {
            return null !== t && t.elementType === n.type ? ((r = a(t, n.props)).ref = wl(e, t, n), r.return = e, r) : ((r = $u(n.type, n.key, n.props, null, e.mode, r)).ref = wl(e, t, n), r.return = e, r)
        }

        function c(e, t, n, r) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Yu(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
        }

        function f(e, t, n, r, l) {
            return null === t || 7 !== t.tag ? ((t = Wu(n, e.mode, r, l)).return = e, t) : ((t = a(t, n)).return = e, t)
        }

        function d(e, t, n) {
            if ("string" == typeof t || "number" == typeof t) return (t = qu("" + t, e.mode, n)).return = e, t;
            if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                    case _:
                        return (n = $u(t.type, t.key, t.props, null, e.mode, n)).ref = wl(e, null, t), n.return = e, n;
                    case S:
                        return (t = Yu(t, e.mode, n)).return = e, t
                }
                if (bl(t) || H(t)) return (t = Wu(t, e.mode, n, null)).return = e, t;
                kl(e, t)
            }
            return null
        }

        function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n) return null !== a ? null : u(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                    case _:
                        return n.key === a ? n.type === x ? f(e, t, n.props.children, r, a) : s(e, t, n, r) : null;
                    case S:
                        return n.key === a ? c(e, t, n, r) : null
                }
                if (bl(n) || H(n)) return null !== a ? null : f(e, t, n, r, null);
                kl(e, n)
            }
            return null
        }

        function h(e, t, n, r, a) {
            if ("string" == typeof r || "number" == typeof r) return u(t, e = e.get(n) || null, "" + r, a);
            if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                    case _:
                        return e = e.get(null === r.key ? n : r.key) || null, r.type === x ? f(t, e, r.props.children, a, r.key) : s(t, e, r, a);
                    case S:
                        return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a)
                }
                if (bl(r) || H(r)) return f(t, e = e.get(n) || null, r, a, null);
                kl(t, r)
            }
            return null
        }

        function g(a, o, i, u) {
            for (var s = null, c = null, f = o, g = o = 0, m = null; null !== f && g < i.length; g++) {
                f.index > g ? (m = f, f = null) : m = f.sibling;
                var y = p(a, f, i[g], u);
                if (null === y) {
                    null === f && (f = m);
                    break
                }
                e && f && null === y.alternate && t(a, f), o = l(y, o, g), null === c ? s = y : c.sibling = y, c = y, f = m
            }
            if (g === i.length) return n(a, f), s;
            if (null === f) {
                for (; g < i.length; g++) null !== (f = d(a, i[g], u)) && (o = l(f, o, g), null === c ? s = f : c.sibling = f, c = f);
                return s
            }
            for (f = r(a, f); g < i.length; g++) null !== (m = h(f, a, g, i[g], u)) && (e && null !== m.alternate && f.delete(null === m.key ? g : m.key), o = l(m, o, g), null === c ? s = m : c.sibling = m, c = m);
            return e && f.forEach((function (e) {
                return t(a, e)
            })), s
        }

        function m(a, i, u, s) {
            var c = H(u);
            if ("function" != typeof c) throw Error(o(150));
            if (null == (u = c.call(u))) throw Error(o(151));
            for (var f = c = null, g = i, m = i = 0, y = null, v = u.next(); null !== g && !v.done; m++, v = u.next()) {
                g.index > m ? (y = g, g = null) : y = g.sibling;
                var b = p(a, g, v.value, s);
                if (null === b) {
                    null === g && (g = y);
                    break
                }
                e && g && null === b.alternate && t(a, g), i = l(b, i, m), null === f ? c = b : f.sibling = b, f = b, g = y
            }
            if (v.done) return n(a, g), c;
            if (null === g) {
                for (; !v.done; m++, v = u.next()) null !== (v = d(a, v.value, s)) && (i = l(v, i, m), null === f ? c = v : f.sibling = v, f = v);
                return c
            }
            for (g = r(a, g); !v.done; m++, v = u.next()) null !== (v = h(g, a, m, v.value, s)) && (e && null !== v.alternate && g.delete(null === v.key ? m : v.key), i = l(v, i, m), null === f ? c = v : f.sibling = v, f = v);
            return e && g.forEach((function (e) {
                return t(a, e)
            })), c
        }
        return function (e, r, l, u) {
            var s = "object" == typeof l && null !== l && l.type === x && null === l.key;
            s && (l = l.props.children);
            var c = "object" == typeof l && null !== l;
            if (c) switch (l.$$typeof) {
                case _:
                    e: {
                        for (c = l.key, s = r; null !== s;) {
                            if (s.key === c) {
                                switch (s.tag) {
                                    case 7:
                                        if (l.type === x) {
                                            n(e, s.sibling), (r = a(s, l.props.children)).return = e, e = r;
                                            break e
                                        }
                                        break;
                                    default:
                                        if (s.elementType === l.type) {
                                            n(e, s.sibling), (r = a(s, l.props)).ref = wl(e, s, l), r.return = e, e = r;
                                            break e
                                        }
                                }
                                n(e, s);
                                break
                            }
                            t(e, s), s = s.sibling
                        }
                        l.type === x ? ((r = Wu(l.props.children, e.mode, u, l.key)).return = e, e = r) : ((u = $u(l.type, l.key, l.props, null, e.mode, u)).ref = wl(e, r, l), u.return = e, e = u)
                    }
                    return i(e);
                case S:
                    e: {
                        for (s = l.key; null !== r;) {
                            if (r.key === s) {
                                if (4 === r.tag && r.stateNode.containerInfo === l.containerInfo && r.stateNode.implementation === l.implementation) {
                                    n(e, r.sibling), (r = a(r, l.children || [])).return = e, e = r;
                                    break e
                                }
                                n(e, r);
                                break
                            }
                            t(e, r), r = r.sibling
                        }(r = Yu(l, e.mode, u)).return = e,
                        e = r
                    }
                    return i(e)
            }
            if ("string" == typeof l || "number" == typeof l) return l = "" + l, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = a(r, l)).return = e, e = r) : (n(e, r), (r = qu(l, e.mode, u)).return = e, e = r), i(e);
            if (bl(l)) return g(e, r, l, u);
            if (H(l)) return m(e, r, l, u);
            if (c && kl(e, l), void 0 === l && !s) switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                    throw Error(o(152, q(e.type) || "Component"))
            }
            return n(e, r)
        }
    }
    var Sl = _l(!0),
        xl = _l(!1),
        Cl = {},
        El = oa(Cl),
        Ml = oa(Cl),
        Tl = oa(Cl);

    function Ll(e) {
        if (e === Cl) throw Error(o(174));
        return e
    }

    function Nl(e, t) {
        switch (ua(Tl, t), ua(Ml, e), ua(El, Cl), e = t.nodeType) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : he(null, "");
                break;
            default:
                t = he(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
        }
        ia(El), ua(El, t)
    }

    function Pl() {
        ia(El), ia(Ml), ia(Tl)
    }

    function Ol(e) {
        Ll(Tl.current);
        var t = Ll(El.current),
            n = he(t, e.type);
        t !== n && (ua(Ml, e), ua(El, n))
    }

    function zl(e) {
        Ml.current === e && (ia(El), ia(Ml))
    }
    var Dl = oa(0);

    function Ul(e) {
        for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (0 != (64 & t.flags)) return t
            } else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }
    var Fl = null,
        Al = null,
        Il = !1;

    function Rl(e, t) {
        var n = Bu(5, null, null, 0);
        n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.flags = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
    }

    function jl(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
            case 6:
                return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
            case 13:
            default:
                return !1
        }
    }

    function Bl(e) {
        if (Il) {
            var t = Al;
            if (t) {
                var n = t;
                if (!jl(e, t)) {
                    if (!(t = Wr(n.nextSibling)) || !jl(e, t)) return e.flags = -1025 & e.flags | 2, Il = !1, void(Fl = e);
                    Rl(Fl, n)
                }
                Fl = e, Al = Wr(t.firstChild)
            } else e.flags = -1025 & e.flags | 2, Il = !1, Fl = e
        }
    }

    function Hl(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
        Fl = e
    }

    function Vl(e) {
        if (e !== Fl) return !1;
        if (!Il) return Hl(e), Il = !0, !1;
        var t = e.type;
        if (5 !== e.tag || "head" !== t && "body" !== t && !Br(t, e.memoizedProps))
            for (t = Al; t;) Rl(e, t), t = Wr(t.nextSibling);
        if (Hl(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("/$" === n) {
                            if (0 === t) {
                                Al = Wr(e.nextSibling);
                                break e
                            }
                            t--
                        } else "$" !== n && "$!" !== n && "$?" !== n || t++
                    }
                    e = e.nextSibling
                }
                Al = null
            }
        } else Al = Fl ? Wr(e.stateNode.nextSibling) : null;
        return !0
    }

    function $l() {
        Al = Fl = null, Il = !1
    }
    var Wl = [];

    function Ql() {
        for (var e = 0; e < Wl.length; e++) Wl[e]._workInProgressVersionPrimary = null;
        Wl.length = 0
    }
    var ql = k.ReactCurrentDispatcher,
        Yl = k.ReactCurrentBatchConfig,
        Gl = 0,
        Kl = null,
        Xl = null,
        Zl = null,
        Jl = !1,
        eo = !1;

    function to() {
        throw Error(o(321))
    }

    function no(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
        return !0
    }

    function ro(e, t, n, r, a, l) {
        if (Gl = l, Kl = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ql.current = null === e || null === e.memoizedState ? No : Po, e = n(r, a), eo) {
            l = 0;
            do {
                if (eo = !1, !(25 > l)) throw Error(o(301));
                l += 1, Zl = Xl = null, t.updateQueue = null, ql.current = Oo, e = n(r, a)
            } while (eo)
        }
        if (ql.current = Lo, t = null !== Xl && null !== Xl.next, Gl = 0, Zl = Xl = Kl = null, Jl = !1, t) throw Error(o(300));
        return e
    }

    function ao() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return null === Zl ? Kl.memoizedState = Zl = e : Zl = Zl.next = e, Zl
    }

    function lo() {
        if (null === Xl) {
            var e = Kl.alternate;
            e = null !== e ? e.memoizedState : null
        } else e = Xl.next;
        var t = null === Zl ? Kl.memoizedState : Zl.next;
        if (null !== t) Zl = t, Xl = e;
        else {
            if (null === e) throw Error(o(310));
            e = {
                memoizedState: (Xl = e).memoizedState,
                baseState: Xl.baseState,
                baseQueue: Xl.baseQueue,
                queue: Xl.queue,
                next: null
            }, null === Zl ? Kl.memoizedState = Zl = e : Zl = Zl.next = e
        }
        return Zl
    }

    function oo(e, t) {
        return "function" == typeof t ? t(e) : t
    }

    function io(e) {
        var t = lo(),
            n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = Xl,
            a = r.baseQueue,
            l = n.pending;
        if (null !== l) {
            if (null !== a) {
                var i = a.next;
                a.next = l.next, l.next = i
            }
            r.baseQueue = a = l, n.pending = null
        }
        if (null !== a) {
            a = a.next, r = r.baseState;
            var u = i = l = null,
                s = a;
            do {
                var c = s.lane;
                if ((Gl & c) === c) null !== u && (u = u.next = {
                    lane: 0,
                    action: s.action,
                    eagerReducer: s.eagerReducer,
                    eagerState: s.eagerState,
                    next: null
                }), r = s.eagerReducer === e ? s.eagerState : e(r, s.action);
                else {
                    var f = {
                        lane: c,
                        action: s.action,
                        eagerReducer: s.eagerReducer,
                        eagerState: s.eagerState,
                        next: null
                    };
                    null === u ? (i = u = f, l = r) : u = u.next = f, Kl.lanes |= c, Ii |= c
                }
                s = s.next
            } while (null !== s && s !== a);
            null === u ? l = r : u.next = i, ir(r, t.memoizedState) || (Do = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = u, n.lastRenderedState = r
        }
        return [t.memoizedState, n.dispatch]
    }

    function uo(e) {
        var t = lo(),
            n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
        if (null !== a) {
            n.pending = null;
            var i = a = a.next;
            do {
                l = e(l, i.action), i = i.next
            } while (i !== a);
            ir(l, t.memoizedState) || (Do = !0), t.memoizedState = l, null === t.baseQueue && (t.baseState = l), n.lastRenderedState = l
        }
        return [l, r]
    }

    function so(e, t, n) {
        var r = t._getVersion;
        r = r(t._source);
        var a = t._workInProgressVersionPrimary;
        if (null !== a ? e = a === r : (e = e.mutableReadLanes, (e = (Gl & e) === e) && (t._workInProgressVersionPrimary = r, Wl.push(t))), e) return n(t._source);
        throw Wl.push(t), Error(o(350))
    }

    function co(e, t, n, r) {
        var a = Ni;
        if (null === a) throw Error(o(349));
        var l = t._getVersion,
            i = l(t._source),
            u = ql.current,
            s = u.useState((function () {
                return so(a, t, n)
            })),
            c = s[1],
            f = s[0];
        s = Zl;
        var d = e.memoizedState,
            p = d.refs,
            h = p.getSnapshot,
            g = d.source;
        d = d.subscribe;
        var m = Kl;
        return e.memoizedState = {
            refs: p,
            source: t,
            subscribe: r
        }, u.useEffect((function () {
            p.getSnapshot = n, p.setSnapshot = c;
            var e = l(t._source);
            if (!ir(i, e)) {
                e = n(t._source), ir(f, e) || (c(e), e = cu(m), a.mutableReadLanes |= e & a.pendingLanes), e = a.mutableReadLanes, a.entangledLanes |= e;
                for (var r = a.entanglements, o = e; 0 < o;) {
                    var u = 31 - $t(o),
                        s = 1 << u;
                    r[u] |= e, o &= ~s
                }
            }
        }), [n, t, r]), u.useEffect((function () {
            return r(t._source, (function () {
                var e = p.getSnapshot,
                    n = p.setSnapshot;
                try {
                    n(e(t._source));
                    var r = cu(m);
                    a.mutableReadLanes |= r & a.pendingLanes
                } catch (e) {
                    n((function () {
                        throw e
                    }))
                }
            }))
        }), [t, r]), ir(h, n) && ir(g, t) && ir(d, r) || ((e = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: oo,
            lastRenderedState: f
        }).dispatch = c = To.bind(null, Kl, e), s.queue = e, s.baseQueue = null, f = so(a, t, n), s.memoizedState = s.baseState = f), f
    }

    function fo(e, t, n) {
        return co(lo(), e, t, n)
    }

    function po(e) {
        var t = ao();
        return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: oo,
            lastRenderedState: e
        }).dispatch = To.bind(null, Kl, e), [t.memoizedState, e]
    }

    function ho(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, null === (t = Kl.updateQueue) ? (t = {
            lastEffect: null
        }, Kl.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
    }

    function go(e) {
        return e = {
            current: e
        }, ao().memoizedState = e
    }

    function mo() {
        return lo().memoizedState
    }

    function yo(e, t, n, r) {
        var a = ao();
        Kl.flags |= e, a.memoizedState = ho(1 | t, n, void 0, void 0 === r ? null : r)
    }

    function vo(e, t, n, r) {
        var a = lo();
        r = void 0 === r ? null : r;
        var l = void 0;
        if (null !== Xl) {
            var o = Xl.memoizedState;
            if (l = o.destroy, null !== r && no(r, o.deps)) return void ho(t, n, l, r)
        }
        Kl.flags |= e, a.memoizedState = ho(1 | t, n, l, r)
    }

    function bo(e, t) {
        return yo(516, 4, e, t)
    }

    function wo(e, t) {
        return vo(516, 4, e, t)
    }

    function ko(e, t) {
        return vo(4, 2, e, t)
    }

    function _o(e, t) {
        return "function" == typeof t ? (e = e(), t(e), function () {
            t(null)
        }) : null != t ? (e = e(), t.current = e, function () {
            t.current = null
        }) : void 0
    }

    function So(e, t, n) {
        return n = null != n ? n.concat([e]) : null, vo(4, 2, _o.bind(null, t, e), n)
    }

    function xo() {}

    function Co(e, t) {
        var n = lo();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && no(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
    }

    function Eo(e, t) {
        var n = lo();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && no(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
    }

    function Mo(e, t) {
        var n = Ba();
        Va(98 > n ? 98 : n, (function () {
            e(!0)
        })), Va(97 < n ? 97 : n, (function () {
            var n = Yl.transition;
            Yl.transition = 1;
            try {
                e(!1), t()
            } finally {
                Yl.transition = n
            }
        }))
    }

    function To(e, t, n) {
        var r = su(),
            a = cu(e),
            l = {
                lane: a,
                action: n,
                eagerReducer: null,
                eagerState: null,
                next: null
            },
            o = t.pending;
        if (null === o ? l.next = l : (l.next = o.next, o.next = l), t.pending = l, o = e.alternate, e === Kl || null !== o && o === Kl) eo = Jl = !0;
        else {
            if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer)) try {
                var i = t.lastRenderedState,
                    u = o(i, n);
                if (l.eagerReducer = o, l.eagerState = u, ir(u, i)) return
            } catch (e) {}
            fu(e, a, r)
        }
    }
    var Lo = {
            readContext: rl,
            useCallback: to,
            useContext: to,
            useEffect: to,
            useImperativeHandle: to,
            useLayoutEffect: to,
            useMemo: to,
            useReducer: to,
            useRef: to,
            useState: to,
            useDebugValue: to,
            useDeferredValue: to,
            useTransition: to,
            useMutableSource: to,
            useOpaqueIdentifier: to,
            unstable_isNewReconciler: !1
        },
        No = {
            readContext: rl,
            useCallback: function (e, t) {
                return ao().memoizedState = [e, void 0 === t ? null : t], e
            },
            useContext: rl,
            useEffect: bo,
            useImperativeHandle: function (e, t, n) {
                return n = null != n ? n.concat([e]) : null, yo(4, 2, _o.bind(null, t, e), n)
            },
            useLayoutEffect: function (e, t) {
                return yo(4, 2, e, t)
            },
            useMemo: function (e, t) {
                var n = ao();
                return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
            },
            useReducer: function (e, t, n) {
                var r = ao();
                return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }).dispatch = To.bind(null, Kl, e), [r.memoizedState, e]
            },
            useRef: go,
            useState: po,
            useDebugValue: xo,
            useDeferredValue: function (e) {
                var t = po(e),
                    n = t[0],
                    r = t[1];
                return bo((function () {
                    var t = Yl.transition;
                    Yl.transition = 1;
                    try {
                        r(e)
                    } finally {
                        Yl.transition = t
                    }
                }), [e]), n
            },
            useTransition: function () {
                var e = po(!1),
                    t = e[0];
                return go(e = Mo.bind(null, e[1])), [e, t]
            },
            useMutableSource: function (e, t, n) {
                var r = ao();
                return r.memoizedState = {
                    refs: {
                        getSnapshot: t,
                        setSnapshot: null
                    },
                    source: e,
                    subscribe: n
                }, co(r, e, t, n)
            },
            useOpaqueIdentifier: function () {
                if (Il) {
                    var e = !1,
                        t = function (e) {
                            return {
                                $$typeof: U,
                                toString: e,
                                valueOf: e
                            }
                        }((function () {
                            throw e || (e = !0, n("r:" + (qr++).toString(36))), Error(o(355))
                        })),
                        n = po(t)[1];
                    return 0 == (2 & Kl.mode) && (Kl.flags |= 516, ho(5, (function () {
                        n("r:" + (qr++).toString(36))
                    }), void 0, null)), t
                }
                return po(t = "r:" + (qr++).toString(36)), t
            },
            unstable_isNewReconciler: !1
        },
        Po = {
            readContext: rl,
            useCallback: Co,
            useContext: rl,
            useEffect: wo,
            useImperativeHandle: So,
            useLayoutEffect: ko,
            useMemo: Eo,
            useReducer: io,
            useRef: mo,
            useState: function () {
                return io(oo)
            },
            useDebugValue: xo,
            useDeferredValue: function (e) {
                var t = io(oo),
                    n = t[0],
                    r = t[1];
                return wo((function () {
                    var t = Yl.transition;
                    Yl.transition = 1;
                    try {
                        r(e)
                    } finally {
                        Yl.transition = t
                    }
                }), [e]), n
            },
            useTransition: function () {
                var e = io(oo)[0];
                return [mo().current, e]
            },
            useMutableSource: fo,
            useOpaqueIdentifier: function () {
                return io(oo)[0]
            },
            unstable_isNewReconciler: !1
        },
        Oo = {
            readContext: rl,
            useCallback: Co,
            useContext: rl,
            useEffect: wo,
            useImperativeHandle: So,
            useLayoutEffect: ko,
            useMemo: Eo,
            useReducer: uo,
            useRef: mo,
            useState: function () {
                return uo(oo)
            },
            useDebugValue: xo,
            useDeferredValue: function (e) {
                var t = uo(oo),
                    n = t[0],
                    r = t[1];
                return wo((function () {
                    var t = Yl.transition;
                    Yl.transition = 1;
                    try {
                        r(e)
                    } finally {
                        Yl.transition = t
                    }
                }), [e]), n
            },
            useTransition: function () {
                var e = uo(oo)[0];
                return [mo().current, e]
            },
            useMutableSource: fo,
            useOpaqueIdentifier: function () {
                return uo(oo)[0]
            },
            unstable_isNewReconciler: !1
        },
        zo = k.ReactCurrentOwner,
        Do = !1;

    function Uo(e, t, n, r) {
        t.child = null === e ? xl(t, null, n, r) : Sl(t, e.child, n, r)
    }

    function Fo(e, t, n, r, a) {
        n = n.render;
        var l = t.ref;
        return nl(t, a), r = ro(e, t, n, r, l, a), null === e || Do ? (t.flags |= 1, Uo(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~a, ni(e, t, a))
    }

    function Ao(e, t, n, r, a, l) {
        if (null === e) {
            var o = n.type;
            return "function" != typeof o || Hu(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = $u(n.type, null, r, t, t.mode, l)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, Io(e, t, o, r, a, l))
        }
        return o = e.child, 0 == (a & l) && (a = o.memoizedProps, (n = null !== (n = n.compare) ? n : sr)(a, r) && e.ref === t.ref) ? ni(e, t, l) : (t.flags |= 1, (e = Vu(o, r)).ref = t.ref, e.return = t, t.child = e)
    }

    function Io(e, t, n, r, a, l) {
        if (null !== e && sr(e.memoizedProps, r) && e.ref === t.ref) {
            if (Do = !1, 0 == (l & a)) return t.lanes = e.lanes, ni(e, t, l);
            0 != (16384 & e.flags) && (Do = !0)
        }
        return Bo(e, t, n, r, l)
    }

    function Ro(e, t, n) {
        var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
        if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
            if (0 == (4 & t.mode)) t.memoizedState = {
                baseLanes: 0
            }, bu(t, n);
            else {
                if (0 == (1073741824 & n)) return e = null !== l ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                    baseLanes: e
                }, bu(t, e), null;
                t.memoizedState = {
                    baseLanes: 0
                }, bu(t, null !== l ? l.baseLanes : n)
            }
        else null !== l ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, bu(t, r);
        return Uo(e, t, a, n), t.child
    }

    function jo(e, t) {
        var n = t.ref;
        (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 128)
    }

    function Bo(e, t, n, r, a) {
        var l = ha(n) ? da : ca.current;
        return l = pa(t, l), nl(t, a), n = ro(e, t, n, r, l, a), null === e || Do ? (t.flags |= 1, Uo(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~a, ni(e, t, a))
    }

    function Ho(e, t, n, r, a) {
        if (ha(n)) {
            var l = !0;
            va(t)
        } else l = !1;
        if (nl(t, a), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), ml(t, n, r), vl(t, n, r, a), r = !0;
        else if (null === e) {
            var o = t.stateNode,
                i = t.memoizedProps;
            o.props = i;
            var u = o.context,
                s = n.contextType;
            "object" == typeof s && null !== s ? s = rl(s) : s = pa(t, s = ha(n) ? da : ca.current);
            var c = n.getDerivedStateFromProps,
                f = "function" == typeof c || "function" == typeof o.getSnapshotBeforeUpdate;
            f || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (i !== r || u !== s) && yl(t, o, r, s), al = !1;
            var d = t.memoizedState;
            o.state = d, cl(t, r, o, a), u = t.memoizedState, i !== r || d !== u || fa.current || al ? ("function" == typeof c && (pl(t, n, c, r), u = t.memoizedState), (i = al || gl(t, n, i, r, d, u, s)) ? (f || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || ("function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" == typeof o.componentDidMount && (t.flags |= 4)) : ("function" == typeof o.componentDidMount && (t.flags |= 4), t.memoizedProps = r, t.memoizedState = u), o.props = r, o.state = u, o.context = s, r = i) : ("function" == typeof o.componentDidMount && (t.flags |= 4), r = !1)
        } else {
            o = t.stateNode, ol(e, t), i = t.memoizedProps, s = t.type === t.elementType ? i : Ya(t.type, i), o.props = s, f = t.pendingProps, d = o.context, "object" == typeof (u = n.contextType) && null !== u ? u = rl(u) : u = pa(t, u = ha(n) ? da : ca.current);
            var p = n.getDerivedStateFromProps;
            (c = "function" == typeof p || "function" == typeof o.getSnapshotBeforeUpdate) || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (i !== f || d !== u) && yl(t, o, r, u), al = !1, d = t.memoizedState, o.state = d, cl(t, r, o, a);
            var h = t.memoizedState;
            i !== f || d !== h || fa.current || al ? ("function" == typeof p && (pl(t, n, p, r), h = t.memoizedState), (s = al || gl(t, n, s, r, d, h, u)) ? (c || "function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate || ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(r, h, u), "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, h, u)), "function" == typeof o.componentDidUpdate && (t.flags |= 4), "function" == typeof o.getSnapshotBeforeUpdate && (t.flags |= 256)) : ("function" != typeof o.componentDidUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 256), t.memoizedProps = r, t.memoizedState = h), o.props = r, o.state = h, o.context = u, r = s) : ("function" != typeof o.componentDidUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 256), r = !1)
        }
        return Vo(e, t, n, r, l, a)
    }

    function Vo(e, t, n, r, a, l) {
        jo(e, t);
        var o = 0 != (64 & t.flags);
        if (!r && !o) return a && ba(t, n, !1), ni(e, t, l);
        r = t.stateNode, zo.current = t;
        var i = o && "function" != typeof n.getDerivedStateFromError ? null : r.render();
        return t.flags |= 1, null !== e && o ? (t.child = Sl(t, e.child, null, l), t.child = Sl(t, null, i, l)) : Uo(e, t, i, l), t.memoizedState = r.state, a && ba(t, n, !0), t.child
    }

    function $o(e) {
        var t = e.stateNode;
        t.pendingContext ? ma(0, t.pendingContext, t.pendingContext !== t.context) : t.context && ma(0, t.context, !1), Nl(e, t.containerInfo)
    }
    var Wo, Qo, qo, Yo = {
        dehydrated: null,
        retryLane: 0
    };

    function Go(e, t, n) {
        var r, a = t.pendingProps,
            l = Dl.current,
            o = !1;
        return (r = 0 != (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & l)), r ? (o = !0, t.flags &= -65) : null !== e && null === e.memoizedState || void 0 === a.fallback || !0 === a.unstable_avoidThisFallback || (l |= 1), ua(Dl, 1 & l), null === e ? (void 0 !== a.fallback && Bl(t), e = a.children, l = a.fallback, o ? (e = Ko(t, e, l, n), t.child.memoizedState = {
            baseLanes: n
        }, t.memoizedState = Yo, e) : "number" == typeof a.unstable_expectedLoadTime ? (e = Ko(t, e, l, n), t.child.memoizedState = {
            baseLanes: n
        }, t.memoizedState = Yo, t.lanes = 33554432, e) : ((n = Qu({
            mode: "visible",
            children: e
        }, t.mode, n, null)).return = t, t.child = n)) : (e.memoizedState, o ? (a = Zo(e, t, a.children, a.fallback, n), o = t.child, l = e.child.memoizedState, o.memoizedState = null === l ? {
            baseLanes: n
        } : {
            baseLanes: l.baseLanes | n
        }, o.childLanes = e.childLanes & ~n, t.memoizedState = Yo, a) : (n = Xo(e, t, a.children, n), t.memoizedState = null, n))
    }

    function Ko(e, t, n, r) {
        var a = e.mode,
            l = e.child;
        return t = {
            mode: "hidden",
            children: t
        }, 0 == (2 & a) && null !== l ? (l.childLanes = 0, l.pendingProps = t) : l = Qu(t, a, 0, null), n = Wu(n, a, r, null), l.return = e, n.return = e, l.sibling = n, e.child = l, n
    }

    function Xo(e, t, n, r) {
        var a = e.child;
        return e = a.sibling, n = Vu(a, {
            mode: "visible",
            children: n
        }), 0 == (2 & t.mode) && (n.lanes = r), n.return = t, n.sibling = null, null !== e && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n
    }

    function Zo(e, t, n, r, a) {
        var l = t.mode,
            o = e.child;
        e = o.sibling;
        var i = {
            mode: "hidden",
            children: n
        };
        return 0 == (2 & l) && t.child !== o ? ((n = t.child).childLanes = 0, n.pendingProps = i, null !== (o = n.lastEffect) ? (t.firstEffect = n.firstEffect, t.lastEffect = o, o.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = Vu(o, i), null !== e ? r = Vu(e, r) : (r = Wu(r, l, a, null)).flags |= 2, r.return = t, n.return = t, n.sibling = r, t.child = n, r
    }

    function Jo(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        null !== n && (n.lanes |= t), tl(e.return, t)
    }

    function ei(e, t, n, r, a, l) {
        var o = e.memoizedState;
        null === o ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: a,
            lastEffect: l
        } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a, o.lastEffect = l)
    }

    function ti(e, t, n) {
        var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
        if (Uo(e, t, r.children, n), 0 != (2 & (r = Dl.current))) r = 1 & r | 2, t.flags |= 64;
        else {
            if (null !== e && 0 != (64 & e.flags)) e: for (e = t.child; null !== e;) {
                if (13 === e.tag) null !== e.memoizedState && Jo(e, n);
                else if (19 === e.tag) Jo(e, n);
                else if (null !== e.child) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; null === e.sibling;) {
                    if (null === e.return || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            r &= 1
        }
        if (ua(Dl, r), 0 == (2 & t.mode)) t.memoizedState = null;
        else switch (a) {
            case "forwards":
                for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === Ul(e) && (a = n), n = n.sibling;
                null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), ei(t, !1, a, n, l, t.lastEffect);
                break;
            case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a;) {
                    if (null !== (e = a.alternate) && null === Ul(e)) {
                        t.child = a;
                        break
                    }
                    e = a.sibling, a.sibling = n, n = a, a = e
                }
                ei(t, !0, n, null, l, t.lastEffect);
                break;
            case "together":
                ei(t, !1, null, null, void 0, t.lastEffect);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function ni(e, t, n) {
        if (null !== e && (t.dependencies = e.dependencies), Ii |= t.lanes, 0 != (n & t.childLanes)) {
            if (null !== e && t.child !== e.child) throw Error(o(153));
            if (null !== t.child) {
                for (n = Vu(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Vu(e, e.pendingProps)).return = t;
                n.sibling = null
            }
            return t.child
        }
        return null
    }

    function ri(e, t) {
        if (!Il) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                null === n ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
    }

    function ai(e, t, n) {
        var r = t.pendingProps;
        switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return null;
            case 1:
                return ha(t.type) && ga(), null;
            case 3:
                return Pl(), ia(fa), ia(ca), Ql(), (r = t.stateNode).pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (Vl(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)), null;
            case 5:
                zl(t);
                var l = Ll(Tl.current);
                if (n = t.type, null !== e && null != t.stateNode) Qo(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
                else {
                    if (!r) {
                        if (null === t.stateNode) throw Error(o(166));
                        return null
                    }
                    if (e = Ll(El.current), Vl(t)) {
                        r = t.stateNode, n = t.type;
                        var i = t.memoizedProps;
                        switch (r[Gr] = t, r[Kr] = i, n) {
                            case "dialog":
                                Mr("cancel", r), Mr("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Mr("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (e = 0; e < Sr.length; e++) Mr(Sr[e], r);
                                break;
                            case "source":
                                Mr("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Mr("error", r), Mr("load", r);
                                break;
                            case "details":
                                Mr("toggle", r);
                                break;
                            case "input":
                                ee(r, i), Mr("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!i.multiple
                                }, Mr("invalid", r);
                                break;
                            case "textarea":
                                ue(r, i), Mr("invalid", r)
                        }
                        for (var s in xe(n, i), e = null, i) i.hasOwnProperty(s) && (l = i[s], "children" === s ? "string" == typeof l ? r.textContent !== l && (e = ["children", l]) : "number" == typeof l && r.textContent !== "" + l && (e = ["children", "" + l]) : u.hasOwnProperty(s) && null != l && "onScroll" === s && Mr("scroll", r));
                        switch (n) {
                            case "input":
                                K(r), re(r, i, !0);
                                break;
                            case "textarea":
                                K(r), ce(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                "function" == typeof i.onClick && (r.onclick = Ar)
                        }
                        r = e, t.updateQueue = r, null !== r && (t.flags |= 4)
                    } else {
                        switch (s = 9 === l.nodeType ? l : l.ownerDocument, e === fe && (e = pe(n)), e === fe ? "script" === n ? ((e = s.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = s.createElement(n, {
                            is: r.is
                        }) : (e = s.createElement(n), "select" === n && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Gr] = t, e[Kr] = r, Wo(e, t), t.stateNode = e, s = Ce(n, r), n) {
                            case "dialog":
                                Mr("cancel", e), Mr("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Mr("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Sr.length; l++) Mr(Sr[l], e);
                                l = r;
                                break;
                            case "source":
                                Mr("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Mr("error", e), Mr("load", e), l = r;
                                break;
                            case "details":
                                Mr("toggle", e), l = r;
                                break;
                            case "input":
                                ee(e, r), l = J(e, r), Mr("invalid", e);
                                break;
                            case "option":
                                l = le(e, r);
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = a({}, r, {
                                    value: void 0
                                }), Mr("invalid", e);
                                break;
                            case "textarea":
                                ue(e, r), l = ie(e, r), Mr("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        xe(n, l);
                        var c = l;
                        for (i in c)
                            if (c.hasOwnProperty(i)) {
                                var f = c[i];
                                "style" === i ? _e(e, f) : "dangerouslySetInnerHTML" === i ? null != (f = f ? f.__html : void 0) && ye(e, f) : "children" === i ? "string" == typeof f ? ("textarea" !== n || "" !== f) && ve(e, f) : "number" == typeof f && ve(e, "" + f) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (u.hasOwnProperty(i) ? null != f && "onScroll" === i && Mr("scroll", e) : null != f && w(e, i, f, s))
                            } switch (n) {
                            case "input":
                                K(e), re(e, r, !1);
                                break;
                            case "textarea":
                                K(e), ce(e);
                                break;
                            case "option":
                                null != r.value && e.setAttribute("value", "" + Y(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, null != (i = r.value) ? oe(e, !!r.multiple, i, !1) : null != r.defaultValue && oe(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                "function" == typeof l.onClick && (e.onclick = Ar)
                        }
                        jr(n, r) && (t.flags |= 4)
                    }
                    null !== t.ref && (t.flags |= 128)
                }
                return null;
            case 6:
                if (e && null != t.stateNode) qo(0, t, e.memoizedProps, r);
                else {
                    if ("string" != typeof r && null === t.stateNode) throw Error(o(166));
                    n = Ll(Tl.current), Ll(El.current), Vl(t) ? (r = t.stateNode, n = t.memoizedProps, r[Gr] = t, r.nodeValue !== n && (t.flags |= 4)) : ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Gr] = t, t.stateNode = r)
                }
                return null;
            case 13:
                return ia(Dl), r = t.memoizedState, 0 != (64 & t.flags) ? (t.lanes = n, t) : (r = null !== r, n = !1, null === e ? void 0 !== t.memoizedProps.fallback && Vl(t) : n = null !== e.memoizedState, r && !n && 0 != (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Dl.current) ? 0 === Ui && (Ui = 3) : (0 !== Ui && 3 !== Ui || (Ui = 4), null === Ni || 0 == (134217727 & Ii) && 0 == (134217727 & Ri) || gu(Ni, Oi))), (r || n) && (t.flags |= 4), null);
            case 4:
                return Pl(), null === e && Lr(t.stateNode.containerInfo), null;
            case 10:
                return el(t), null;
            case 17:
                return ha(t.type) && ga(), null;
            case 19:
                if (ia(Dl), null === (r = t.memoizedState)) return null;
                if (i = 0 != (64 & t.flags), null === (s = r.rendering))
                    if (i) ri(r, !1);
                    else {
                        if (0 !== Ui || null !== e && 0 != (64 & e.flags))
                            for (e = t.child; null !== e;) {
                                if (null !== (s = Ul(e))) {
                                    for (t.flags |= 64, ri(r, !1), null !== (i = s.updateQueue) && (t.updateQueue = i, t.flags |= 4), null === r.lastEffect && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = n, n = t.child; null !== n;) e = r, (i = n).flags &= 2, i.nextEffect = null, i.firstEffect = null, i.lastEffect = null, null === (s = i.alternate) ? (i.childLanes = 0, i.lanes = e, i.child = null, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = null === e ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }), n = n.sibling;
                                    return ua(Dl, 1 & Dl.current | 2), t.child
                                }
                                e = e.sibling
                            }
                        null !== r.tail && ja() > Vi && (t.flags |= 64, i = !0, ri(r, !1), t.lanes = 33554432)
                    }
                else {
                    if (!i)
                        if (null !== (e = Ul(s))) {
                            if (t.flags |= 64, i = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), ri(r, !0), null === r.tail && "hidden" === r.tailMode && !s.alternate && !Il) return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null
                        } else 2 * ja() - r.renderingStartTime > Vi && 1073741824 !== n && (t.flags |= 64, i = !0, ri(r, !1), t.lanes = 33554432);
                    r.isBackwards ? (s.sibling = t.child, t.child = s) : (null !== (n = r.last) ? n.sibling = s : t.child = s, r.last = s)
                }
                return null !== r.tail ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = ja(), n.sibling = null, t = Dl.current, ua(Dl, i ? 1 & t | 2 : 1 & t), n) : null;
            case 23:
            case 24:
                return wu(), null !== e && null !== e.memoizedState != (null !== t.memoizedState) && "unstable-defer-without-hiding" !== r.mode && (t.flags |= 4), null
        }
        throw Error(o(156, t.tag))
    }

    function li(e) {
        switch (e.tag) {
            case 1:
                ha(e.type) && ga();
                var t = e.flags;
                return 4096 & t ? (e.flags = -4097 & t | 64, e) : null;
            case 3:
                if (Pl(), ia(fa), ia(ca), Ql(), 0 != (64 & (t = e.flags))) throw Error(o(285));
                return e.flags = -4097 & t | 64, e;
            case 5:
                return zl(e), null;
            case 13:
                return ia(Dl), 4096 & (t = e.flags) ? (e.flags = -4097 & t | 64, e) : null;
            case 19:
                return ia(Dl), null;
            case 4:
                return Pl(), null;
            case 10:
                return el(e), null;
            case 23:
            case 24:
                return wu(), null;
            default:
                return null
        }
    }

    function oi(e, t) {
        try {
            var n = "",
                r = t;
            do {
                n += Q(r), r = r.return
            } while (r);
            var a = n
        } catch (e) {
            a = "\nError generating stack: " + e.message + "\n" + e.stack
        }
        return {
            value: e,
            source: t,
            stack: a
        }
    }

    function ii(e, t) {
        try {
            console.error(t.value)
        } catch (e) {
            setTimeout((function () {
                throw e
            }))
        }
    }
    Wo = function (e, t) {
        for (var n = t.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === t) break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === t) return;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }, Qo = function (e, t, n, r) {
        var l = e.memoizedProps;
        if (l !== r) {
            e = t.stateNode, Ll(El.current);
            var o, i = null;
            switch (n) {
                case "input":
                    l = J(e, l), r = J(e, r), i = [];
                    break;
                case "option":
                    l = le(e, l), r = le(e, r), i = [];
                    break;
                case "select":
                    l = a({}, l, {
                        value: void 0
                    }), r = a({}, r, {
                        value: void 0
                    }), i = [];
                    break;
                case "textarea":
                    l = ie(e, l), r = ie(e, r), i = [];
                    break;
                default:
                    "function" != typeof l.onClick && "function" == typeof r.onClick && (e.onclick = Ar)
            }
            for (f in xe(n, r), n = null, l)
                if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && null != l[f])
                    if ("style" === f) {
                        var s = l[f];
                        for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                    } else "dangerouslySetInnerHTML" !== f && "children" !== f && "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (u.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
            for (f in r) {
                var c = r[f];
                if (s = null != l ? l[f] : void 0, r.hasOwnProperty(f) && c !== s && (null != c || null != s))
                    if ("style" === f)
                        if (s) {
                            for (o in s) !s.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                            for (o in c) c.hasOwnProperty(o) && s[o] !== c[o] && (n || (n = {}), n[o] = c[o])
                        } else n || (i || (i = []), i.push(f, n)), n = c;
                else "dangerouslySetInnerHTML" === f ? (c = c ? c.__html : void 0, s = s ? s.__html : void 0, null != c && s !== c && (i = i || []).push(f, c)) : "children" === f ? "string" != typeof c && "number" != typeof c || (i = i || []).push(f, "" + c) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && (u.hasOwnProperty(f) ? (null != c && "onScroll" === f && Mr("scroll", e), i || s === c || (i = [])) : "object" == typeof c && null !== c && c.$$typeof === U ? c.toString() : (i = i || []).push(f, c))
            }
            n && (i = i || []).push("style", n);
            var f = i;
            (t.updateQueue = f) && (t.flags |= 4)
        }
    }, qo = function (e, t, n, r) {
        n !== r && (t.flags |= 4)
    };
    var ui = "function" == typeof WeakMap ? WeakMap : Map;

    function si(e, t, n) {
        (n = il(-1, n)).tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function () {
            qi || (qi = !0, Yi = r), ii(0, t)
        }, n
    }

    function ci(e, t, n) {
        (n = il(-1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
            var a = t.value;
            n.payload = function () {
                return ii(0, t), r(a)
            }
        }
        var l = e.stateNode;
        return null !== l && "function" == typeof l.componentDidCatch && (n.callback = function () {
            "function" != typeof r && (null === Gi ? Gi = new Set([this]) : Gi.add(this), ii(0, t));
            var e = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: null !== e ? e : ""
            })
        }), n
    }
    var fi = "function" == typeof WeakSet ? WeakSet : Set;

    function di(e) {
        var t = e.ref;
        if (null !== t)
            if ("function" == typeof t) try {
                t(null)
            } catch (t) {
                Au(e, t)
            } else t.current = null
    }

    function pi(e, t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
                return;
            case 1:
                if (256 & t.flags && null !== e) {
                    var n = e.memoizedProps,
                        r = e.memoizedState;
                    t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Ya(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t
                }
                return;
            case 3:
                return void(256 & t.flags && $r(t.stateNode.containerInfo));
            case 5:
            case 6:
            case 4:
            case 17:
                return
        }
        throw Error(o(163))
    }

    function hi(e, t, n) {
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
                if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                    e = t = t.next;
                    do {
                        if (3 == (3 & e.tag)) {
                            var r = e.create;
                            e.destroy = r()
                        }
                        e = e.next
                    } while (e !== t)
                }
                if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                    e = t = t.next;
                    do {
                        var a = e;
                        r = a.next, 0 != (4 & (a = a.tag)) && 0 != (1 & a) && (Du(n, e), zu(n, e)), e = r
                    } while (e !== t)
                }
                return;
            case 1:
                return e = n.stateNode, 4 & n.flags && (null === t ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : Ya(n.type, t.memoizedProps), e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), void(null !== (t = n.updateQueue) && fl(n, t, e));
            case 3:
                if (null !== (t = n.updateQueue)) {
                    if (e = null, null !== n.child) switch (n.child.tag) {
                        case 5:
                            e = n.child.stateNode;
                            break;
                        case 1:
                            e = n.child.stateNode
                    }
                    fl(n, t, e)
                }
                return;
            case 5:
                return e = n.stateNode, void(null === t && 4 & n.flags && jr(n.type, n.memoizedProps) && e.focus());
            case 6:
            case 4:
            case 12:
                return;
            case 13:
                return void(null === n.memoizedState && (n = n.alternate, null !== n && (n = n.memoizedState, null !== n && (n = n.dehydrated, null !== n && _t(n)))));
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
                return
        }
        throw Error(o(163))
    }

    function gi(e, t) {
        for (var n = e;;) {
            if (5 === n.tag) {
                var r = n.stateNode;
                if (t) "function" == typeof (r = r.style).setProperty ? r.setProperty("display", "none", "important") : r.display = "none";
                else {
                    r = n.stateNode;
                    var a = n.memoizedProps.style;
                    a = null != a && a.hasOwnProperty("display") ? a.display : null, r.style.display = ke("display", a)
                }
            } else if (6 === n.tag) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
            else if ((23 !== n.tag && 24 !== n.tag || null === n.memoizedState || n === e) && null !== n.child) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === e) break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === e) return;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }

    function mi(e, t) {
        if (ka && "function" == typeof ka.onCommitFiberUnmount) try {
            ka.onCommitFiberUnmount(wa, t)
        } catch (e) {}
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                    var n = e = e.next;
                    do {
                        var r = n,
                            a = r.destroy;
                        if (r = r.tag, void 0 !== a)
                            if (0 != (4 & r)) Du(t, n);
                            else {
                                r = t;
                                try {
                                    a()
                                } catch (e) {
                                    Au(r, e)
                                }
                            } n = n.next
                    } while (n !== e)
                }
                break;
            case 1:
                if (di(t), "function" == typeof (e = t.stateNode).componentWillUnmount) try {
                    e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
                } catch (e) {
                    Au(t, e)
                }
                break;
            case 5:
                di(t);
                break;
            case 4:
                _i(e, t)
        }
    }

    function yi(e) {
        e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null
    }

    function vi(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag
    }

    function bi(e) {
        e: {
            for (var t = e.return; null !== t;) {
                if (vi(t)) break e;
                t = t.return
            }
            throw Error(o(160))
        }
        var n = t;
        switch (t = n.stateNode, n.tag) {
            case 5:
                var r = !1;
                break;
            case 3:
            case 4:
                t = t.containerInfo, r = !0;
                break;
            default:
                throw Error(o(161))
        }
        16 & n.flags && (ve(t, ""), n.flags &= -17);e: t: for (n = e;;) {
            for (; null === n.sibling;) {
                if (null === n.return || vi(n.return)) {
                    n = null;
                    break e
                }
                n = n.return
            }
            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                if (2 & n.flags) continue t;
                if (null === n.child || 4 === n.tag) continue t;
                n.child.return = n, n = n.child
            }
            if (!(2 & n.flags)) {
                n = n.stateNode;
                break e
            }
        }
        r ? wi(e, n, t) : ki(e, n, t)
    }

    function wi(e, t, n) {
        var r = e.tag,
            a = 5 === r || 6 === r;
        if (a) e = a ? e.stateNode : e.stateNode.instance, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Ar));
        else if (4 !== r && null !== (e = e.child))
            for (wi(e, t, n), e = e.sibling; null !== e;) wi(e, t, n), e = e.sibling
    }

    function ki(e, t, n) {
        var r = e.tag,
            a = 5 === r || 6 === r;
        if (a) e = a ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
            for (ki(e, t, n), e = e.sibling; null !== e;) ki(e, t, n), e = e.sibling
    }

    function _i(e, t) {
        for (var n, r, a = t, l = !1;;) {
            if (!l) {
                l = a.return;
                e: for (;;) {
                    if (null === l) throw Error(o(160));
                    switch (n = l.stateNode, l.tag) {
                        case 5:
                            r = !1;
                            break e;
                        case 3:
                        case 4:
                            n = n.containerInfo, r = !0;
                            break e
                    }
                    l = l.return
                }
                l = !0
            }
            if (5 === a.tag || 6 === a.tag) {
                e: for (var i = e, u = a, s = u;;)
                    if (mi(i, s), null !== s.child && 4 !== s.tag) s.child.return = s, s = s.child;
                    else {
                        if (s === u) break e;
                        for (; null === s.sibling;) {
                            if (null === s.return || s.return === u) break e;
                            s = s.return
                        }
                        s.sibling.return = s.return, s = s.sibling
                    }r ? (i = n, u = a.stateNode, 8 === i.nodeType ? i.parentNode.removeChild(u) : i.removeChild(u)) : n.removeChild(a.stateNode)
            }
            else if (4 === a.tag) {
                if (null !== a.child) {
                    n = a.stateNode.containerInfo, r = !0, a.child.return = a, a = a.child;
                    continue
                }
            } else if (mi(e, a), null !== a.child) {
                a.child.return = a, a = a.child;
                continue
            }
            if (a === t) break;
            for (; null === a.sibling;) {
                if (null === a.return || a.return === t) return;
                4 === (a = a.return).tag && (l = !1)
            }
            a.sibling.return = a.return, a = a.sibling
        }
    }

    function Si(e, t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                var n = t.updateQueue;
                if (null !== (n = null !== n ? n.lastEffect : null)) {
                    var r = n = n.next;
                    do {
                        3 == (3 & r.tag) && (e = r.destroy, r.destroy = void 0, void 0 !== e && e()), r = r.next
                    } while (r !== n)
                }
                return;
            case 1:
                return;
            case 5:
                if (null != (n = t.stateNode)) {
                    r = t.memoizedProps;
                    var a = null !== e ? e.memoizedProps : r;
                    e = t.type;
                    var l = t.updateQueue;
                    if (t.updateQueue = null, null !== l) {
                        for (n[Kr] = r, "input" === e && "radio" === r.type && null != r.name && te(n, r), Ce(e, a), t = Ce(e, r), a = 0; a < l.length; a += 2) {
                            var i = l[a],
                                u = l[a + 1];
                            "style" === i ? _e(n, u) : "dangerouslySetInnerHTML" === i ? ye(n, u) : "children" === i ? ve(n, u) : w(n, i, u, t)
                        }
                        switch (e) {
                            case "input":
                                ne(n, r);
                                break;
                            case "textarea":
                                se(n, r);
                                break;
                            case "select":
                                e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (l = r.value) ? oe(n, !!r.multiple, l, !1) : e !== !!r.multiple && (null != r.defaultValue ? oe(n, !!r.multiple, r.defaultValue, !0) : oe(n, !!r.multiple, r.multiple ? [] : "", !1))
                        }
                    }
                }
                return;
            case 6:
                if (null === t.stateNode) throw Error(o(162));
                return void(t.stateNode.nodeValue = t.memoizedProps);
            case 3:
                return void((n = t.stateNode).hydrate && (n.hydrate = !1, _t(n.containerInfo)));
            case 12:
                return;
            case 13:
                return null !== t.memoizedState && (Hi = ja(), gi(t.child, !0)), void xi(t);
            case 19:
                return void xi(t);
            case 17:
                return;
            case 23:
            case 24:
                return void gi(t, null !== t.memoizedState)
        }
        throw Error(o(163))
    }

    function xi(e) {
        var t = e.updateQueue;
        if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new fi), t.forEach((function (t) {
                var r = Ru.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r))
            }))
        }
    }

    function Ci(e, t) {
        return null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && (null !== (t = t.memoizedState) && null === t.dehydrated)
    }
    var Ei = Math.ceil,
        Mi = k.ReactCurrentDispatcher,
        Ti = k.ReactCurrentOwner,
        Li = 0,
        Ni = null,
        Pi = null,
        Oi = 0,
        zi = 0,
        Di = oa(0),
        Ui = 0,
        Fi = null,
        Ai = 0,
        Ii = 0,
        Ri = 0,
        ji = 0,
        Bi = null,
        Hi = 0,
        Vi = 1 / 0;

    function $i() {
        Vi = ja() + 500
    }
    var Wi, Qi = null,
        qi = !1,
        Yi = null,
        Gi = null,
        Ki = !1,
        Xi = null,
        Zi = 90,
        Ji = [],
        eu = [],
        tu = null,
        nu = 0,
        ru = null,
        au = -1,
        lu = 0,
        ou = 0,
        iu = null,
        uu = !1;

    function su() {
        return 0 != (48 & Li) ? ja() : -1 !== au ? au : au = ja()
    }

    function cu(e) {
        if (0 == (2 & (e = e.mode))) return 1;
        if (0 == (4 & e)) return 99 === Ba() ? 1 : 2;
        if (0 === lu && (lu = Ai), 0 !== qa.transition) {
            0 !== ou && (ou = null !== Bi ? Bi.pendingLanes : 0), e = lu;
            var t = 4186112 & ~ou;
            return 0 === (t &= -t) && (0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192)), t
        }
        return e = Ba(), 0 != (4 & Li) && 98 === e ? e = jt(12, lu) : e = jt(e = function (e) {
            switch (e) {
                case 99:
                    return 15;
                case 98:
                    return 10;
                case 97:
                case 96:
                    return 8;
                case 95:
                    return 2;
                default:
                    return 0
            }
        }(e), lu), e
    }

    function fu(e, t, n) {
        if (50 < nu) throw nu = 0, ru = null, Error(o(185));
        if (null === (e = du(e, t))) return null;
        Vt(e, t, n), e === Ni && (Ri |= t, 4 === Ui && gu(e, Oi));
        var r = Ba();
        1 === t ? 0 != (8 & Li) && 0 == (48 & Li) ? mu(e) : (pu(e, n), 0 === Li && ($i(), Wa())) : (0 == (4 & Li) || 98 !== r && 99 !== r || (null === tu ? tu = new Set([e]) : tu.add(e)), pu(e, n)), Bi = e
    }

    function du(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
        return 3 === n.tag ? n.stateNode : null
    }

    function pu(e, t) {
        for (var n = e.callbackNode, r = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
            var u = 31 - $t(i),
                s = 1 << u,
                c = l[u];
            if (-1 === c) {
                if (0 == (s & r) || 0 != (s & a)) {
                    c = t, At(s);
                    var f = Ft;
                    l[u] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1
                }
            } else c <= t && (e.expiredLanes |= s);
            i &= ~s
        }
        if (r = It(e, e === Ni ? Oi : 0), t = Ft, 0 === r) null !== n && (n !== Da && xa(n), e.callbackNode = null, e.callbackPriority = 0);
        else {
            if (null !== n) {
                if (e.callbackPriority === t) return;
                n !== Da && xa(n)
            }
            15 === t ? (n = mu.bind(null, e), null === Fa ? (Fa = [n], Aa = Sa(La, Qa)) : Fa.push(n), n = Da) : 14 === t ? n = $a(99, mu.bind(null, e)) : n = $a(n = function (e) {
                switch (e) {
                    case 15:
                    case 14:
                        return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                        return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                        return 97;
                    case 3:
                    case 2:
                    case 1:
                        return 95;
                    case 0:
                        return 90;
                    default:
                        throw Error(o(358, e))
                }
            }(t), hu.bind(null, e)), e.callbackPriority = t, e.callbackNode = n
        }
    }

    function hu(e) {
        if (au = -1, ou = lu = 0, 0 != (48 & Li)) throw Error(o(327));
        var t = e.callbackNode;
        if (Ou() && e.callbackNode !== t) return null;
        var n = It(e, e === Ni ? Oi : 0);
        if (0 === n) return null;
        var r = n,
            a = Li;
        Li |= 16;
        var l = Su();
        for (Ni === e && Oi === r || ($i(), ku(e, r));;) try {
            Eu();
            break
        } catch (t) {
            _u(e, t)
        }
        if (Ja(), Mi.current = l, Li = a, null !== Pi ? r = 0 : (Ni = null, Oi = 0, r = Ui), 0 != (Ai & Ri)) ku(e, 0);
        else if (0 !== r) {
            if (2 === r && (Li |= 64, e.hydrate && (e.hydrate = !1, $r(e.containerInfo)), 0 !== (n = Rt(e)) && (r = xu(e, n))), 1 === r) throw t = Fi, ku(e, 0), gu(e, n), pu(e, ja()), t;
            switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
                case 0:
                case 1:
                    throw Error(o(345));
                case 2:
                    Lu(e);
                    break;
                case 3:
                    if (gu(e, n), (62914560 & n) === n && 10 < (r = Hi + 500 - ja())) {
                        if (0 !== It(e, 0)) break;
                        if (((a = e.suspendedLanes) & n) !== n) {
                            su(), e.pingedLanes |= e.suspendedLanes & a;
                            break
                        }
                        e.timeoutHandle = Hr(Lu.bind(null, e), r);
                        break
                    }
                    Lu(e);
                    break;
                case 4:
                    if (gu(e, n), (4186112 & n) === n) break;
                    for (r = e.eventTimes, a = -1; 0 < n;) {
                        var i = 31 - $t(n);
                        l = 1 << i, (i = r[i]) > a && (a = i), n &= ~l
                    }
                    if (n = a, 10 < (n = (120 > (n = ja() - n) ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Ei(n / 1960)) - n)) {
                        e.timeoutHandle = Hr(Lu.bind(null, e), n);
                        break
                    }
                    Lu(e);
                    break;
                case 5:
                    Lu(e);
                    break;
                default:
                    throw Error(o(329))
            }
        }
        return pu(e, ja()), e.callbackNode === t ? hu.bind(null, e) : null
    }

    function gu(e, t) {
        for (t &= ~ji, t &= ~Ri, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - $t(t),
                r = 1 << n;
            e[n] = -1, t &= ~r
        }
    }

    function mu(e) {
        if (0 != (48 & Li)) throw Error(o(327));
        if (Ou(), e === Ni && 0 != (e.expiredLanes & Oi)) {
            var t = Oi,
                n = xu(e, t);
            0 != (Ai & Ri) && (n = xu(e, t = It(e, t)))
        } else n = xu(e, t = It(e, 0));
        if (0 !== e.tag && 2 === n && (Li |= 64, e.hydrate && (e.hydrate = !1, $r(e.containerInfo)), 0 !== (t = Rt(e)) && (n = xu(e, t))), 1 === n) throw n = Fi, ku(e, 0), gu(e, t), pu(e, ja()), n;
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, Lu(e), pu(e, ja()), null
    }

    function yu(e, t) {
        var n = Li;
        Li |= 1;
        try {
            return e(t)
        } finally {
            0 === (Li = n) && ($i(), Wa())
        }
    }

    function vu(e, t) {
        var n = Li;
        Li &= -2, Li |= 8;
        try {
            return e(t)
        } finally {
            0 === (Li = n) && ($i(), Wa())
        }
    }

    function bu(e, t) {
        ua(Di, zi), zi |= t, Ai |= t
    }

    function wu() {
        zi = Di.current, ia(Di)
    }

    function ku(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (-1 !== n && (e.timeoutHandle = -1, Vr(n)), null !== Pi)
            for (n = Pi.return; null !== n;) {
                var r = n;
                switch (r.tag) {
                    case 1:
                        null != (r = r.type.childContextTypes) && ga();
                        break;
                    case 3:
                        Pl(), ia(fa), ia(ca), Ql();
                        break;
                    case 5:
                        zl(r);
                        break;
                    case 4:
                        Pl();
                        break;
                    case 13:
                    case 19:
                        ia(Dl);
                        break;
                    case 10:
                        el(r);
                        break;
                    case 23:
                    case 24:
                        wu()
                }
                n = n.return
            }
        Ni = e, Pi = Vu(e.current, null), Oi = zi = Ai = t, Ui = 0, Fi = null, ji = Ri = Ii = 0
    }

    function _u(e, t) {
        for (;;) {
            var n = Pi;
            try {
                if (Ja(), ql.current = Lo, Jl) {
                    for (var r = Kl.memoizedState; null !== r;) {
                        var a = r.queue;
                        null !== a && (a.pending = null), r = r.next
                    }
                    Jl = !1
                }
                if (Gl = 0, Zl = Xl = Kl = null, eo = !1, Ti.current = null, null === n || null === n.return) {
                    Ui = 1, Fi = t, Pi = null;
                    break
                }
                e: {
                    var l = e,
                        o = n.return,
                        i = n,
                        u = t;
                    if (t = Oi, i.flags |= 2048, i.firstEffect = i.lastEffect = null, null !== u && "object" == typeof u && "function" == typeof u.then) {
                        var s = u;
                        if (0 == (2 & i.mode)) {
                            var c = i.alternate;
                            c ? (i.updateQueue = c.updateQueue, i.memoizedState = c.memoizedState, i.lanes = c.lanes) : (i.updateQueue = null, i.memoizedState = null)
                        }
                        var f = 0 != (1 & Dl.current),
                            d = o;
                        do {
                            var p;
                            if (p = 13 === d.tag) {
                                var h = d.memoizedState;
                                if (null !== h) p = null !== h.dehydrated;
                                else {
                                    var g = d.memoizedProps;
                                    p = void 0 !== g.fallback && (!0 !== g.unstable_avoidThisFallback || !f)
                                }
                            }
                            if (p) {
                                var m = d.updateQueue;
                                if (null === m) {
                                    var y = new Set;
                                    y.add(s), d.updateQueue = y
                                } else m.add(s);
                                if (0 == (2 & d.mode)) {
                                    if (d.flags |= 64, i.flags |= 16384, i.flags &= -2981, 1 === i.tag)
                                        if (null === i.alternate) i.tag = 17;
                                        else {
                                            var v = il(-1, 1);
                                            v.tag = 2, ul(i, v)
                                        } i.lanes |= 1;
                                    break e
                                }
                                u = void 0, i = t;
                                var b = l.pingCache;
                                if (null === b ? (b = l.pingCache = new ui, u = new Set, b.set(s, u)) : void 0 === (u = b.get(s)) && (u = new Set, b.set(s, u)), !u.has(i)) {
                                    u.add(i);
                                    var w = Iu.bind(null, l, s, i);
                                    s.then(w, w)
                                }
                                d.flags |= 4096, d.lanes = t;
                                break e
                            }
                            d = d.return
                        } while (null !== d);
                        u = Error((q(i.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")
                    }
                    5 !== Ui && (Ui = 2),
                    u = oi(u, i),
                    d = o;do {
                        switch (d.tag) {
                            case 3:
                                l = u, d.flags |= 4096, t &= -t, d.lanes |= t, sl(d, si(0, l, t));
                                break e;
                            case 1:
                                l = u;
                                var k = d.type,
                                    _ = d.stateNode;
                                if (0 == (64 & d.flags) && ("function" == typeof k.getDerivedStateFromError || null !== _ && "function" == typeof _.componentDidCatch && (null === Gi || !Gi.has(_)))) {
                                    d.flags |= 4096, t &= -t, d.lanes |= t, sl(d, ci(d, l, t));
                                    break e
                                }
                        }
                        d = d.return
                    } while (null !== d)
                }
                Tu(n)
            } catch (e) {
                t = e, Pi === n && null !== n && (Pi = n = n.return);
                continue
            }
            break
        }
    }

    function Su() {
        var e = Mi.current;
        return Mi.current = Lo, null === e ? Lo : e
    }

    function xu(e, t) {
        var n = Li;
        Li |= 16;
        var r = Su();
        for (Ni === e && Oi === t || ku(e, t);;) try {
            Cu();
            break
        } catch (t) {
            _u(e, t)
        }
        if (Ja(), Li = n, Mi.current = r, null !== Pi) throw Error(o(261));
        return Ni = null, Oi = 0, Ui
    }

    function Cu() {
        for (; null !== Pi;) Mu(Pi)
    }

    function Eu() {
        for (; null !== Pi && !Ca();) Mu(Pi)
    }

    function Mu(e) {
        var t = Wi(e.alternate, e, zi);
        e.memoizedProps = e.pendingProps, null === t ? Tu(e) : Pi = t, Ti.current = null
    }

    function Tu(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, 0 == (2048 & t.flags)) {
                if (null !== (n = ai(n, t, zi))) return void(Pi = n);
                if (24 !== (n = t).tag && 23 !== n.tag || null === n.memoizedState || 0 != (1073741824 & zi) || 0 == (4 & n.mode)) {
                    for (var r = 0, a = n.child; null !== a;) r |= a.lanes | a.childLanes, a = a.sibling;
                    n.childLanes = r
                }
                null !== e && 0 == (2048 & e.flags) && (null === e.firstEffect && (e.firstEffect = t.firstEffect), null !== t.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (null !== e.lastEffect ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t))
            } else {
                if (null !== (n = li(t))) return n.flags &= 2047, void(Pi = n);
                null !== e && (e.firstEffect = e.lastEffect = null, e.flags |= 2048)
            }
            if (null !== (t = t.sibling)) return void(Pi = t);
            Pi = t = e
        } while (null !== t);
        0 === Ui && (Ui = 5)
    }

    function Lu(e) {
        var t = Ba();
        return Va(99, Nu.bind(null, e, t)), null
    }

    function Nu(e, t) {
        do {
            Ou()
        } while (null !== Xi);
        if (0 != (48 & Li)) throw Error(o(327));
        var n = e.finishedWork;
        if (null === n) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
        e.callbackNode = null;
        var r = n.lanes | n.childLanes,
            a = r,
            l = e.pendingLanes & ~a;
        e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= a, e.mutableReadLanes &= a, e.entangledLanes &= a, a = e.entanglements;
        for (var i = e.eventTimes, u = e.expirationTimes; 0 < l;) {
            var s = 31 - $t(l),
                c = 1 << s;
            a[s] = 0, i[s] = -1, u[s] = -1, l &= ~c
        }
        if (null !== tu && 0 == (24 & r) && tu.has(e) && tu.delete(e), e === Ni && (Pi = Ni = null, Oi = 0), 1 < n.flags ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, null !== r) {
            if (a = Li, Li |= 32, Ti.current = null, Ir = Gt, hr(i = pr())) {
                if ("selectionStart" in i) u = {
                    start: i.selectionStart,
                    end: i.selectionEnd
                };
                else e: if (u = (u = i.ownerDocument) && u.defaultView || window, (c = u.getSelection && u.getSelection()) && 0 !== c.rangeCount) {
                    u = c.anchorNode, l = c.anchorOffset, s = c.focusNode, c = c.focusOffset;
                    try {
                        u.nodeType, s.nodeType
                    } catch (e) {
                        u = null;
                        break e
                    }
                    var f = 0,
                        d = -1,
                        p = -1,
                        h = 0,
                        g = 0,
                        m = i,
                        y = null;
                    t: for (;;) {
                        for (var v; m !== u || 0 !== l && 3 !== m.nodeType || (d = f + l), m !== s || 0 !== c && 3 !== m.nodeType || (p = f + c), 3 === m.nodeType && (f += m.nodeValue.length), null !== (v = m.firstChild);) y = m, m = v;
                        for (;;) {
                            if (m === i) break t;
                            if (y === u && ++h === l && (d = f), y === s && ++g === c && (p = f), null !== (v = m.nextSibling)) break;
                            y = (m = y).parentNode
                        }
                        m = v
                    }
                    u = -1 === d || -1 === p ? null : {
                        start: d,
                        end: p
                    }
                } else u = null;
                u = u || {
                    start: 0,
                    end: 0
                }
            } else u = null;
            Rr = {
                focusedElem: i,
                selectionRange: u
            }, Gt = !1, iu = null, uu = !1, Qi = r;
            do {
                try {
                    Pu()
                } catch (e) {
                    if (null === Qi) throw Error(o(330));
                    Au(Qi, e), Qi = Qi.nextEffect
                }
            } while (null !== Qi);
            iu = null, Qi = r;
            do {
                try {
                    for (i = e; null !== Qi;) {
                        var b = Qi.flags;
                        if (16 & b && ve(Qi.stateNode, ""), 128 & b) {
                            var w = Qi.alternate;
                            if (null !== w) {
                                var k = w.ref;
                                null !== k && ("function" == typeof k ? k(null) : k.current = null)
                            }
                        }
                        switch (1038 & b) {
                            case 2:
                                bi(Qi), Qi.flags &= -3;
                                break;
                            case 6:
                                bi(Qi), Qi.flags &= -3, Si(Qi.alternate, Qi);
                                break;
                            case 1024:
                                Qi.flags &= -1025;
                                break;
                            case 1028:
                                Qi.flags &= -1025, Si(Qi.alternate, Qi);
                                break;
                            case 4:
                                Si(Qi.alternate, Qi);
                                break;
                            case 8:
                                _i(i, u = Qi);
                                var _ = u.alternate;
                                yi(u), null !== _ && yi(_)
                        }
                        Qi = Qi.nextEffect
                    }
                } catch (e) {
                    if (null === Qi) throw Error(o(330));
                    Au(Qi, e), Qi = Qi.nextEffect
                }
            } while (null !== Qi);
            if (k = Rr, w = pr(), b = k.focusedElem, i = k.selectionRange, w !== b && b && b.ownerDocument && dr(b.ownerDocument.documentElement, b)) {
                null !== i && hr(b) && (w = i.start, void 0 === (k = i.end) && (k = w), "selectionStart" in b ? (b.selectionStart = w, b.selectionEnd = Math.min(k, b.value.length)) : (k = (w = b.ownerDocument || document) && w.defaultView || window).getSelection && (k = k.getSelection(), u = b.textContent.length, _ = Math.min(i.start, u), i = void 0 === i.end ? _ : Math.min(i.end, u), !k.extend && _ > i && (u = i, i = _, _ = u), u = fr(b, _), l = fr(b, i), u && l && (1 !== k.rangeCount || k.anchorNode !== u.node || k.anchorOffset !== u.offset || k.focusNode !== l.node || k.focusOffset !== l.offset) && ((w = w.createRange()).setStart(u.node, u.offset), k.removeAllRanges(), _ > i ? (k.addRange(w), k.extend(l.node, l.offset)) : (w.setEnd(l.node, l.offset), k.addRange(w))))), w = [];
                for (k = b; k = k.parentNode;) 1 === k.nodeType && w.push({
                    element: k,
                    left: k.scrollLeft,
                    top: k.scrollTop
                });
                for ("function" == typeof b.focus && b.focus(), b = 0; b < w.length; b++)(k = w[b]).element.scrollLeft = k.left, k.element.scrollTop = k.top
            }
            Gt = !!Ir, Rr = Ir = null, e.current = n, Qi = r;
            do {
                try {
                    for (b = e; null !== Qi;) {
                        var S = Qi.flags;
                        if (36 & S && hi(b, Qi.alternate, Qi), 128 & S) {
                            w = void 0;
                            var x = Qi.ref;
                            if (null !== x) {
                                var C = Qi.stateNode;
                                switch (Qi.tag) {
                                    case 5:
                                        w = C;
                                        break;
                                    default:
                                        w = C
                                }
                                "function" == typeof x ? x(w) : x.current = w
                            }
                        }
                        Qi = Qi.nextEffect
                    }
                } catch (e) {
                    if (null === Qi) throw Error(o(330));
                    Au(Qi, e), Qi = Qi.nextEffect
                }
            } while (null !== Qi);
            Qi = null, Ua(), Li = a
        } else e.current = n;
        if (Ki) Ki = !1, Xi = e, Zi = t;
        else
            for (Qi = r; null !== Qi;) t = Qi.nextEffect, Qi.nextEffect = null, 8 & Qi.flags && ((S = Qi).sibling = null, S.stateNode = null), Qi = t;
        if (0 === (r = e.pendingLanes) && (Gi = null), 1 === r ? e === ru ? nu++ : (nu = 0, ru = e) : nu = 0, n = n.stateNode, ka && "function" == typeof ka.onCommitFiberRoot) try {
            ka.onCommitFiberRoot(wa, n, void 0, 64 == (64 & n.current.flags))
        } catch (e) {}
        if (pu(e, ja()), qi) throw qi = !1, e = Yi, Yi = null, e;
        return 0 != (8 & Li) || Wa(), null
    }

    function Pu() {
        for (; null !== Qi;) {
            var e = Qi.alternate;
            uu || null === iu || (0 != (8 & Qi.flags) ? et(Qi, iu) && (uu = !0) : 13 === Qi.tag && Ci(e, Qi) && et(Qi, iu) && (uu = !0));
            var t = Qi.flags;
            0 != (256 & t) && pi(e, Qi), 0 == (512 & t) || Ki || (Ki = !0, $a(97, (function () {
                return Ou(), null
            }))), Qi = Qi.nextEffect
        }
    }

    function Ou() {
        if (90 !== Zi) {
            var e = 97 < Zi ? 97 : Zi;
            return Zi = 90, Va(e, Uu)
        }
        return !1
    }

    function zu(e, t) {
        Ji.push(t, e), Ki || (Ki = !0, $a(97, (function () {
            return Ou(), null
        })))
    }

    function Du(e, t) {
        eu.push(t, e), Ki || (Ki = !0, $a(97, (function () {
            return Ou(), null
        })))
    }

    function Uu() {
        if (null === Xi) return !1;
        var e = Xi;
        if (Xi = null, 0 != (48 & Li)) throw Error(o(331));
        var t = Li;
        Li |= 32;
        var n = eu;
        eu = [];
        for (var r = 0; r < n.length; r += 2) {
            var a = n[r],
                l = n[r + 1],
                i = a.destroy;
            if (a.destroy = void 0, "function" == typeof i) try {
                i()
            } catch (e) {
                if (null === l) throw Error(o(330));
                Au(l, e)
            }
        }
        for (n = Ji, Ji = [], r = 0; r < n.length; r += 2) {
            a = n[r], l = n[r + 1];
            try {
                var u = a.create;
                a.destroy = u()
            } catch (e) {
                if (null === l) throw Error(o(330));
                Au(l, e)
            }
        }
        for (u = e.current.firstEffect; null !== u;) e = u.nextEffect, u.nextEffect = null, 8 & u.flags && (u.sibling = null, u.stateNode = null), u = e;
        return Li = t, Wa(), !0
    }

    function Fu(e, t, n) {
        ul(e, t = si(0, t = oi(n, t), 1)), t = su(), null !== (e = du(e, 1)) && (Vt(e, 1, t), pu(e, t))
    }

    function Au(e, t) {
        if (3 === e.tag) Fu(e, e, t);
        else
            for (var n = e.return; null !== n;) {
                if (3 === n.tag) {
                    Fu(n, e, t);
                    break
                }
                if (1 === n.tag) {
                    var r = n.stateNode;
                    if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Gi || !Gi.has(r))) {
                        var a = ci(n, e = oi(t, e), 1);
                        if (ul(n, a), a = su(), null !== (n = du(n, 1))) Vt(n, 1, a), pu(n, a);
                        else if ("function" == typeof r.componentDidCatch && (null === Gi || !Gi.has(r))) try {
                            r.componentDidCatch(t, e)
                        } catch (e) {}
                        break
                    }
                }
                n = n.return
            }
    }

    function Iu(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t), t = su(), e.pingedLanes |= e.suspendedLanes & n, Ni === e && (Oi & n) === n && (4 === Ui || 3 === Ui && (62914560 & Oi) === Oi && 500 > ja() - Hi ? ku(e, 0) : ji |= n), pu(e, t)
    }

    function Ru(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t), 0 === (t = 0) && (0 == (2 & (t = e.mode)) ? t = 1 : 0 == (4 & t) ? t = 99 === Ba() ? 1 : 2 : (0 === lu && (lu = Ai), 0 === (t = Bt(62914560 & ~lu)) && (t = 4194304))), n = su(), null !== (e = du(e, t)) && (Vt(e, t, n), pu(e, n))
    }

    function ju(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Bu(e, t, n, r) {
        return new ju(e, t, n, r)
    }

    function Hu(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
    }

    function Vu(e, t) {
        var n = e.alternate;
        return null === n ? ((n = Bu(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
    }

    function $u(e, t, n, r, a, l) {
        var i = 2;
        if (r = e, "function" == typeof e) Hu(e) && (i = 1);
        else if ("string" == typeof e) i = 5;
        else e: switch (e) {
            case x:
                return Wu(n.children, a, l, t);
            case F:
                i = 8, a |= 16;
                break;
            case C:
                i = 8, a |= 1;
                break;
            case E:
                return (e = Bu(12, n, t, 8 | a)).elementType = E, e.type = E, e.lanes = l, e;
            case N:
                return (e = Bu(13, n, t, a)).type = N, e.elementType = N, e.lanes = l, e;
            case P:
                return (e = Bu(19, n, t, a)).elementType = P, e.lanes = l, e;
            case A:
                return Qu(n, a, l, t);
            case I:
                return (e = Bu(24, n, t, a)).elementType = I, e.lanes = l, e;
            default:
                if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                    case M:
                        i = 10;
                        break e;
                    case T:
                        i = 9;
                        break e;
                    case L:
                        i = 11;
                        break e;
                    case O:
                        i = 14;
                        break e;
                    case z:
                        i = 16, r = null;
                        break e;
                    case D:
                        i = 22;
                        break e
                }
                throw Error(o(130, null == e ? e : typeof e, ""))
        }
        return (t = Bu(i, n, t, a)).elementType = e, t.type = r, t.lanes = l, t
    }

    function Wu(e, t, n, r) {
        return (e = Bu(7, e, r, t)).lanes = n, e
    }

    function Qu(e, t, n, r) {
        return (e = Bu(23, e, r, t)).elementType = A, e.lanes = n, e
    }

    function qu(e, t, n) {
        return (e = Bu(6, e, null, t)).lanes = n, e
    }

    function Yu(e, t, n) {
        return (t = Bu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function Gu(e, t, n) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Ht(0), this.expirationTimes = Ht(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ht(0), this.mutableSourceEagerHydrationData = null
    }

    function Ku(e, t, n) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
            $$typeof: S,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }

    function Xu(e, t, n, r) {
        var a = t.current,
            l = su(),
            i = cu(a);
        e: if (n) {
            t: {
                if (Ke(n = n._reactInternals) !== n || 1 !== n.tag) throw Error(o(170));
                var u = n;do {
                    switch (u.tag) {
                        case 3:
                            u = u.stateNode.context;
                            break t;
                        case 1:
                            if (ha(u.type)) {
                                u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                                break t
                            }
                    }
                    u = u.return
                } while (null !== u);
                throw Error(o(171))
            }
            if (1 === n.tag) {
                var s = n.type;
                if (ha(s)) {
                    n = ya(n, s, u);
                    break e
                }
            }
            n = u
        }
        else n = sa;
        return null === t.context ? t.context = n : t.pendingContext = n, (t = il(l, i)).payload = {
            element: e
        }, null !== (r = void 0 === r ? null : r) && (t.callback = r), ul(a, t), fu(a, i, l), i
    }

    function Zu(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
            case 5:
            default:
                return e.child.stateNode
        }
    }

    function Ju(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t
        }
    }

    function es(e, t) {
        Ju(e, t), (e = e.alternate) && Ju(e, t)
    }

    function ts(e, t, n) {
        var r = null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources || null;
        if (n = new Gu(e, t, null != n && !0 === n.hydrate), t = Bu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0), n.current = t, t.stateNode = n, ll(t), e[Xr] = n.current, Lr(8 === e.nodeType ? e.parentNode : e), r)
            for (e = 0; e < r.length; e++) {
                var a = (t = r[e])._getVersion;
                a = a(t._source), null == n.mutableSourceEagerHydrationData ? n.mutableSourceEagerHydrationData = [t, a] : n.mutableSourceEagerHydrationData.push(t, a)
            }
        this._internalRoot = n
    }

    function ns(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    }

    function rs(e, t, n, r, a) {
        var l = n._reactRootContainer;
        if (l) {
            var o = l._internalRoot;
            if ("function" == typeof a) {
                var i = a;
                a = function () {
                    var e = Zu(o);
                    i.call(e)
                }
            }
            Xu(t, o, e, a)
        } else {
            if (l = n._reactRootContainer = function (e, t) {
                    if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                        for (var n; n = e.lastChild;) e.removeChild(n);
                    return new ts(e, 0, t ? {
                        hydrate: !0
                    } : void 0)
                }(n, r), o = l._internalRoot, "function" == typeof a) {
                var u = a;
                a = function () {
                    var e = Zu(o);
                    u.call(e)
                }
            }
            vu((function () {
                Xu(t, o, e, a)
            }))
        }
        return Zu(o)
    }

    function as(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!ns(t)) throw Error(o(200));
        return Ku(e, t, null, n)
    }
    Wi = function (e, t, n) {
        var r = t.lanes;
        if (null !== e)
            if (e.memoizedProps !== t.pendingProps || fa.current) Do = !0;
            else {
                if (0 == (n & r)) {
                    switch (Do = !1, t.tag) {
                        case 3:
                            $o(t), $l();
                            break;
                        case 5:
                            Ol(t);
                            break;
                        case 1:
                            ha(t.type) && va(t);
                            break;
                        case 4:
                            Nl(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            r = t.memoizedProps.value;
                            var a = t.type._context;
                            ua(Ga, a._currentValue), a._currentValue = r;
                            break;
                        case 13:
                            if (null !== t.memoizedState) return 0 != (n & t.child.childLanes) ? Go(e, t, n) : (ua(Dl, 1 & Dl.current), null !== (t = ni(e, t, n)) ? t.sibling : null);
                            ua(Dl, 1 & Dl.current);
                            break;
                        case 19:
                            if (r = 0 != (n & t.childLanes), 0 != (64 & e.flags)) {
                                if (r) return ti(e, t, n);
                                t.flags |= 64
                            }
                            if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), ua(Dl, Dl.current), r) break;
                            return null;
                        case 23:
                        case 24:
                            return t.lanes = 0, Ro(e, t, n)
                    }
                    return ni(e, t, n)
                }
                Do = 0 != (16384 & e.flags)
            }
        else Do = !1;
        switch (t.lanes = 0, t.tag) {
            case 2:
                if (r = t.type, null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, a = pa(t, ca.current), nl(t, n), a = ro(null, t, r, e, a, n), t.flags |= 1, "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof) {
                    if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ha(r)) {
                        var l = !0;
                        va(t)
                    } else l = !1;
                    t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, ll(t);
                    var i = r.getDerivedStateFromProps;
                    "function" == typeof i && pl(t, r, i, e), a.updater = hl, t.stateNode = a, a._reactInternals = t, vl(t, r, e, n), t = Vo(null, t, r, !0, l, n)
                } else t.tag = 0, Uo(null, t, a, n), t = t.child;
                return t;
            case 16:
                a = t.elementType;
                e: {
                    switch (null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, a = (l = a._init)(a._payload), t.type = a, l = t.tag = function (e) {
                        if ("function" == typeof e) return Hu(e) ? 1 : 0;
                        if (null != e) {
                            if ((e = e.$$typeof) === L) return 11;
                            if (e === O) return 14
                        }
                        return 2
                    }(a), e = Ya(a, e), l) {
                        case 0:
                            t = Bo(null, t, a, e, n);
                            break e;
                        case 1:
                            t = Ho(null, t, a, e, n);
                            break e;
                        case 11:
                            t = Fo(null, t, a, e, n);
                            break e;
                        case 14:
                            t = Ao(null, t, a, Ya(a.type, e), r, n);
                            break e
                    }
                    throw Error(o(306, a, ""))
                }
                return t;
            case 0:
                return r = t.type, a = t.pendingProps, Bo(e, t, r, a = t.elementType === r ? a : Ya(r, a), n);
            case 1:
                return r = t.type, a = t.pendingProps, Ho(e, t, r, a = t.elementType === r ? a : Ya(r, a), n);
            case 3:
                if ($o(t), r = t.updateQueue, null === e || null === r) throw Error(o(282));
                if (r = t.pendingProps, a = null !== (a = t.memoizedState) ? a.element : null, ol(e, t), cl(t, r, null, n), (r = t.memoizedState.element) === a) $l(), t = ni(e, t, n);
                else {
                    if ((l = (a = t.stateNode).hydrate) && (Al = Wr(t.stateNode.containerInfo.firstChild), Fl = t, l = Il = !0), l) {
                        if (null != (e = a.mutableSourceEagerHydrationData))
                            for (a = 0; a < e.length; a += 2)(l = e[a])._workInProgressVersionPrimary = e[a + 1], Wl.push(l);
                        for (n = xl(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 1024, n = n.sibling
                    } else Uo(e, t, r, n), $l();
                    t = t.child
                }
                return t;
            case 5:
                return Ol(t), null === e && Bl(t), r = t.type, a = t.pendingProps, l = null !== e ? e.memoizedProps : null, i = a.children, Br(r, a) ? i = null : null !== l && Br(r, l) && (t.flags |= 16), jo(e, t), Uo(e, t, i, n), t.child;
            case 6:
                return null === e && Bl(t), null;
            case 13:
                return Go(e, t, n);
            case 4:
                return Nl(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Sl(t, null, r, n) : Uo(e, t, r, n), t.child;
            case 11:
                return r = t.type, a = t.pendingProps, Fo(e, t, r, a = t.elementType === r ? a : Ya(r, a), n);
            case 7:
                return Uo(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
                return Uo(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    r = t.type._context,
                    a = t.pendingProps,
                    i = t.memoizedProps,
                    l = a.value;
                    var u = t.type._context;
                    if (ua(Ga, u._currentValue), u._currentValue = l, null !== i)
                        if (u = i.value, 0 === (l = ir(u, l) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(u, l) : 1073741823))) {
                            if (i.children === a.children && !fa.current) {
                                t = ni(e, t, n);
                                break e
                            }
                        } else
                            for (null !== (u = t.child) && (u.return = t); null !== u;) {
                                var s = u.dependencies;
                                if (null !== s) {
                                    i = u.child;
                                    for (var c = s.firstContext; null !== c;) {
                                        if (c.context === r && 0 != (c.observedBits & l)) {
                                            1 === u.tag && ((c = il(-1, n & -n)).tag = 2, ul(u, c)), u.lanes |= n, null !== (c = u.alternate) && (c.lanes |= n), tl(u.return, n), s.lanes |= n;
                                            break
                                        }
                                        c = c.next
                                    }
                                } else i = 10 === u.tag && u.type === t.type ? null : u.child;
                                if (null !== i) i.return = u;
                                else
                                    for (i = u; null !== i;) {
                                        if (i === t) {
                                            i = null;
                                            break
                                        }
                                        if (null !== (u = i.sibling)) {
                                            u.return = i.return, i = u;
                                            break
                                        }
                                        i = i.return
                                    }
                                u = i
                            }
                    Uo(e, t, a.children, n),
                    t = t.child
                }
                return t;
            case 9:
                return a = t.type, r = (l = t.pendingProps).children, nl(t, n), r = r(a = rl(a, l.unstable_observedBits)), t.flags |= 1, Uo(e, t, r, n), t.child;
            case 14:
                return l = Ya(a = t.type, t.pendingProps), Ao(e, t, a, l = Ya(a.type, l), r, n);
            case 15:
                return Io(e, t, t.type, t.pendingProps, r, n);
            case 17:
                return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ya(r, a), null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, ha(r) ? (e = !0, va(t)) : e = !1, nl(t, n), ml(t, r, a), vl(t, r, a, n), Vo(null, t, r, !0, e, n);
            case 19:
                return ti(e, t, n);
            case 23:
            case 24:
                return Ro(e, t, n)
        }
        throw Error(o(156, t.tag))
    }, ts.prototype.render = function (e) {
        Xu(e, this._internalRoot, null, null)
    }, ts.prototype.unmount = function () {
        var e = this._internalRoot,
            t = e.containerInfo;
        Xu(null, e, null, (function () {
            t[Xr] = null
        }))
    }, tt = function (e) {
        13 === e.tag && (fu(e, 4, su()), es(e, 4))
    }, nt = function (e) {
        13 === e.tag && (fu(e, 67108864, su()), es(e, 67108864))
    }, rt = function (e) {
        if (13 === e.tag) {
            var t = su(),
                n = cu(e);
            fu(e, n, t), es(e, n)
        }
    }, at = function (e, t) {
        return t()
    }, Me = function (e, t, n) {
        switch (t) {
            case "input":
                if (ne(e, n), t = n.name, "radio" === n.type && null != t) {
                    for (n = e; n.parentNode;) n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var a = na(r);
                            if (!a) throw Error(o(90));
                            X(r), ne(r, a)
                        }
                    }
                }
                break;
            case "textarea":
                se(e, n);
                break;
            case "select":
                null != (t = n.value) && oe(e, !!n.multiple, t, !1)
        }
    }, ze = yu, De = function (e, t, n, r, a) {
        var l = Li;
        Li |= 4;
        try {
            return Va(98, e.bind(null, t, n, r, a))
        } finally {
            0 === (Li = l) && ($i(), Wa())
        }
    }, Ue = function () {
        0 == (49 & Li) && (function () {
            if (null !== tu) {
                var e = tu;
                tu = null, e.forEach((function (e) {
                    e.expiredLanes |= 24 & e.pendingLanes, pu(e, ja())
                }))
            }
            Wa()
        }(), Ou())
    }, Fe = function (e, t) {
        var n = Li;
        Li |= 2;
        try {
            return e(t)
        } finally {
            0 === (Li = n) && ($i(), Wa())
        }
    };
    var ls = {
            Events: [ea, ta, na, Pe, Oe, Ou, {
                current: !1
            }]
        },
        os = {
            findFiberByHostInstance: Jr,
            bundleType: 0,
            version: "17.0.2",
            rendererPackageName: "react-dom"
        },
        is = {
            bundleType: os.bundleType,
            version: os.version,
            rendererPackageName: os.rendererPackageName,
            rendererConfig: os.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: k.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
                return null === (e = Je(e)) ? null : e.stateNode
            },
            findFiberByHostInstance: os.findFiberByHostInstance || function () {
                return null
            },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null
        };
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var us = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!us.isDisabled && us.supportsFiber) try {
            wa = us.inject(is), ka = us
        } catch (me) {}
    }
    t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ls, t.createPortal = as, t.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
            if ("function" == typeof e.render) throw Error(o(188));
            throw Error(o(268, Object.keys(e)))
        }
        return e = null === (e = Je(t)) ? null : e.stateNode
    }, t.flushSync = function (e, t) {
        var n = Li;
        if (0 != (48 & n)) return e(t);
        Li |= 1;
        try {
            if (e) return Va(99, e.bind(null, t))
        } finally {
            Li = n, Wa()
        }
    }, t.hydrate = function (e, t, n) {
        if (!ns(t)) throw Error(o(200));
        return rs(null, e, t, !0, n)
    }, t.render = function (e, t, n) {
        if (!ns(t)) throw Error(o(200));
        return rs(null, e, t, !1, n)
    }, t.unmountComponentAtNode = function (e) {
        if (!ns(e)) throw Error(o(40));
        return !!e._reactRootContainer && (vu((function () {
            rs(null, null, e, !1, (function () {
                e._reactRootContainer = null, e[Xr] = null
            }))
        })), !0)
    }, t.unstable_batchedUpdates = yu, t.unstable_createPortal = function (e, t) {
        return as(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
    }, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!ns(n)) throw Error(o(200));
        if (null == e || void 0 === e._reactInternals) throw Error(o(38));
        return rs(e, t, n, !1, r)
    }, t.version = "17.0.2"
}, function (e, t, n) {
    "use strict";
    e.exports = n(7)
}, function (e, t, n) {
    "use strict";
    /** @license React v0.20.2
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r, a, l, o;
    if ("object" == typeof performance && "function" == typeof performance.now) {
        var i = performance;
        t.unstable_now = function () {
            return i.now()
        }
    } else {
        var u = Date,
            s = u.now();
        t.unstable_now = function () {
            return u.now() - s
        }
    }
    if ("undefined" == typeof window || "function" != typeof MessageChannel) {
        var c = null,
            f = null,
            d = function () {
                if (null !== c) try {
                    var e = t.unstable_now();
                    c(!0, e), c = null
                } catch (e) {
                    throw setTimeout(d, 0), e
                }
            };
        r = function (e) {
            null !== c ? setTimeout(r, 0, e) : (c = e, setTimeout(d, 0))
        }, a = function (e, t) {
            f = setTimeout(e, t)
        }, l = function () {
            clearTimeout(f)
        }, t.unstable_shouldYield = function () {
            return !1
        }, o = t.unstable_forceFrameRate = function () {}
    } else {
        var p = window.setTimeout,
            h = window.clearTimeout;
        if ("undefined" != typeof console) {
            var g = window.cancelAnimationFrame;
            "function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), "function" != typeof g && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
        }
        var m = !1,
            y = null,
            v = -1,
            b = 5,
            w = 0;
        t.unstable_shouldYield = function () {
            return t.unstable_now() >= w
        }, o = function () {}, t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < e ? Math.floor(1e3 / e) : 5
        };
        var k = new MessageChannel,
            _ = k.port2;
        k.port1.onmessage = function () {
            if (null !== y) {
                var e = t.unstable_now();
                w = e + b;
                try {
                    y(!0, e) ? _.postMessage(null) : (m = !1, y = null)
                } catch (e) {
                    throw _.postMessage(null), e
                }
            } else m = !1
        }, r = function (e) {
            y = e, m || (m = !0, _.postMessage(null))
        }, a = function (e, n) {
            v = p((function () {
                e(t.unstable_now())
            }), n)
        }, l = function () {
            h(v), v = -1
        }
    }

    function S(e, t) {
        var n = e.length;
        e.push(t);
        e: for (;;) {
            var r = n - 1 >>> 1,
                a = e[r];
            if (!(void 0 !== a && 0 < E(a, t))) break e;
            e[r] = t, e[n] = a, n = r
        }
    }

    function x(e) {
        return void 0 === (e = e[0]) ? null : e
    }

    function C(e) {
        var t = e[0];
        if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
                e[0] = n;
                e: for (var r = 0, a = e.length; r < a;) {
                    var l = 2 * (r + 1) - 1,
                        o = e[l],
                        i = l + 1,
                        u = e[i];
                    if (void 0 !== o && 0 > E(o, n)) void 0 !== u && 0 > E(u, o) ? (e[r] = u, e[i] = n, r = i) : (e[r] = o, e[l] = n, r = l);
                    else {
                        if (!(void 0 !== u && 0 > E(u, n))) break e;
                        e[r] = u, e[i] = n, r = i
                    }
                }
            }
            return t
        }
        return null
    }

    function E(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id
    }
    var M = [],
        T = [],
        L = 1,
        N = null,
        P = 3,
        O = !1,
        z = !1,
        D = !1;

    function U(e) {
        for (var t = x(T); null !== t;) {
            if (null === t.callback) C(T);
            else {
                if (!(t.startTime <= e)) break;
                C(T), t.sortIndex = t.expirationTime, S(M, t)
            }
            t = x(T)
        }
    }

    function F(e) {
        if (D = !1, U(e), !z)
            if (null !== x(M)) z = !0, r(A);
            else {
                var t = x(T);
                null !== t && a(F, t.startTime - e)
            }
    }

    function A(e, n) {
        z = !1, D && (D = !1, l()), O = !0;
        var r = P;
        try {
            for (U(n), N = x(M); null !== N && (!(N.expirationTime > n) || e && !t.unstable_shouldYield());) {
                var o = N.callback;
                if ("function" == typeof o) {
                    N.callback = null, P = N.priorityLevel;
                    var i = o(N.expirationTime <= n);
                    n = t.unstable_now(), "function" == typeof i ? N.callback = i : N === x(M) && C(M), U(n)
                } else C(M);
                N = x(M)
            }
            if (null !== N) var u = !0;
            else {
                var s = x(T);
                null !== s && a(F, s.startTime - n), u = !1
            }
            return u
        } finally {
            N = null, P = r, O = !1
        }
    }
    var I = o;
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) {
        e.callback = null
    }, t.unstable_continueExecution = function () {
        z || O || (z = !0, r(A))
    }, t.unstable_getCurrentPriorityLevel = function () {
        return P
    }, t.unstable_getFirstCallbackNode = function () {
        return x(M)
    }, t.unstable_next = function (e) {
        switch (P) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = P
        }
        var n = P;
        P = t;
        try {
            return e()
        } finally {
            P = n
        }
    }, t.unstable_pauseExecution = function () {}, t.unstable_requestPaint = I, t.unstable_runWithPriority = function (e, t) {
        switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3
        }
        var n = P;
        P = e;
        try {
            return t()
        } finally {
            P = n
        }
    }, t.unstable_scheduleCallback = function (e, n, o) {
        var i = t.unstable_now();
        switch ("object" == typeof o && null !== o ? o = "number" == typeof (o = o.delay) && 0 < o ? i + o : i : o = i, e) {
            case 1:
                var u = -1;
                break;
            case 2:
                u = 250;
                break;
            case 5:
                u = 1073741823;
                break;
            case 4:
                u = 1e4;
                break;
            default:
                u = 5e3
        }
        return e = {
            id: L++,
            callback: n,
            priorityLevel: e,
            startTime: o,
            expirationTime: u = o + u,
            sortIndex: -1
        }, o > i ? (e.sortIndex = o, S(T, e), null === x(M) && e === x(T) && (D ? l() : D = !0, a(F, o - i))) : (e.sortIndex = u, S(M, e), z || O || (z = !0, r(A))), e
    }, t.unstable_wrapCallback = function (e) {
        var t = P;
        return function () {
            var n = P;
            P = t;
            try {
                return e.apply(this, arguments)
            } finally {
                P = n
            }
        }
    }
}, , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
        a = n.n(r),
        l = n(1),
        o = n.n(l);
    var i = function (e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
    };
    Map;
    Set;
    "undefined" != typeof window ? a.a.useLayoutEffect : a.a.useEffect;
    const u = Math.PI,
        s = 2 * u,
        c = 1e-6,
        f = s - c;

    function d() {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
    }

    function p() {
        return new d
    }
    d.prototype = p.prototype = {
        constructor: d,
        moveTo: function (e, t) {
            this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t)
        },
        closePath: function () {
            null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
        },
        lineTo: function (e, t) {
            this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t)
        },
        quadraticCurveTo: function (e, t, n, r) {
            this._ += "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +r)
        },
        bezierCurveTo: function (e, t, n, r, a, l) {
            this._ += "C" + +e + "," + +t + "," + +n + "," + +r + "," + (this._x1 = +a) + "," + (this._y1 = +l)
        },
        arcTo: function (e, t, n, r, a) {
            e = +e, t = +t, n = +n, r = +r, a = +a;
            var l = this._x1,
                o = this._y1,
                i = n - e,
                s = r - t,
                f = l - e,
                d = o - t,
                p = f * f + d * d;
            if (a < 0) throw new Error("negative radius: " + a);
            if (null === this._x1) this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
            else if (p > c)
                if (Math.abs(d * i - s * f) > c && a) {
                    var h = n - l,
                        g = r - o,
                        m = i * i + s * s,
                        y = h * h + g * g,
                        v = Math.sqrt(m),
                        b = Math.sqrt(p),
                        w = a * Math.tan((u - Math.acos((m + p - y) / (2 * v * b))) / 2),
                        k = w / b,
                        _ = w / v;
                    Math.abs(k - 1) > c && (this._ += "L" + (e + k * f) + "," + (t + k * d)), this._ += "A" + a + "," + a + ",0,0," + +(d * h > f * g) + "," + (this._x1 = e + _ * i) + "," + (this._y1 = t + _ * s)
                } else this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
            else;
        },
        arc: function (e, t, n, r, a, l) {
            e = +e, t = +t, l = !!l;
            var o = (n = +n) * Math.cos(r),
                i = n * Math.sin(r),
                d = e + o,
                p = t + i,
                h = 1 ^ l,
                g = l ? r - a : a - r;
            if (n < 0) throw new Error("negative radius: " + n);
            null === this._x1 ? this._ += "M" + d + "," + p : (Math.abs(this._x1 - d) > c || Math.abs(this._y1 - p) > c) && (this._ += "L" + d + "," + p), n && (g < 0 && (g = g % s + s), g > f ? this._ += "A" + n + "," + n + ",0,1," + h + "," + (e - o) + "," + (t - i) + "A" + n + "," + n + ",0,1," + h + "," + (this._x1 = d) + "," + (this._y1 = p) : g > c && (this._ += "A" + n + "," + n + ",0," + +(g >= u) + "," + h + "," + (this._x1 = e + n * Math.cos(a)) + "," + (this._y1 = t + n * Math.sin(a))))
        },
        rect: function (e, t, n, r) {
            this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +r + "h" + -n + "Z"
        },
        toString: function () {
            return this._
        }
    };
    var h = p,
        g = (Array.prototype.slice, function (e) {
            return "object" == typeof e && "length" in e ? e : Array.from(e)
        }),
        m = function (e) {
            return function () {
                return e
            }
        };

    function y(e) {
        this._context = e
    }
    y.prototype = {
        areaStart: function () {
            this._line = 0
        },
        areaEnd: function () {
            this._line = NaN
        },
        lineStart: function () {
            this._point = 0
        },
        lineEnd: function () {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function (e, t) {
            switch (e = +e, t = +t, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                    break;
                case 1:
                    this._point = 2;
                default:
                    this._context.lineTo(e, t)
            }
        }
    };
    var v = function (e) {
        return new y(e)
    };

    function b(e) {
        return e[0]
    }

    function w(e) {
        return e[1]
    }
    var k = function (e, t) {
        var n = m(!0),
            r = null,
            a = v,
            l = null;

        function o(o) {
            var i, u, s, c = (o = g(o)).length,
                f = !1;
            for (null == r && (l = a(s = h())), i = 0; i <= c; ++i) !(i < c && n(u = o[i], i, o)) === f && ((f = !f) ? l.lineStart() : l.lineEnd()), f && l.point(+e(u, i, o), +t(u, i, o));
            if (s) return l = null, s + "" || null
        }
        return e = "function" == typeof e ? e : void 0 === e ? b : m(e), t = "function" == typeof t ? t : void 0 === t ? w : m(t), o.x = function (t) {
            return arguments.length ? (e = "function" == typeof t ? t : m(+t), o) : e
        }, o.y = function (e) {
            return arguments.length ? (t = "function" == typeof e ? e : m(+e), o) : t
        }, o.defined = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : m(!!e), o) : n
        }, o.curve = function (e) {
            return arguments.length ? (a = e, null != r && (l = a(r)), o) : a
        }, o.context = function (e) {
            return arguments.length ? (null == e ? r = l = null : l = a(r = e), o) : r
        }, o
    };

    function _(e) {
        return e < 0 ? -1 : 1
    }

    function S(e, t, n) {
        var r = e._x1 - e._x0,
            a = t - e._x1,
            l = (e._y1 - e._y0) / (r || a < 0 && -0),
            o = (n - e._y1) / (a || r < 0 && -0),
            i = (l * a + o * r) / (r + a);
        return (_(l) + _(o)) * Math.min(Math.abs(l), Math.abs(o), .5 * Math.abs(i)) || 0
    }

    function x(e, t) {
        var n = e._x1 - e._x0;
        return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t
    }

    function C(e, t, n) {
        var r = e._x0,
            a = e._y0,
            l = e._x1,
            o = e._y1,
            i = (l - r) / 3;
        e._context.bezierCurveTo(r + i, a + i * t, l - i, o - i * n, l, o)
    }

    function E(e) {
        this._context = e
    }

    function M(e) {
        this._context = new T(e)
    }

    function T(e) {
        this._context = e
    }
    E.prototype = {
        areaStart: function () {
            this._line = 0
        },
        areaEnd: function () {
            this._line = NaN
        },
        lineStart: function () {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
        },
        lineEnd: function () {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break;
                case 3:
                    C(this, this._t0, x(this, this._t0))
            }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        },
        point: function (e, t) {
            var n = NaN;
            if (t = +t, (e = +e) !== this._x1 || t !== this._y1) {
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, C(this, x(this, n = S(this, e, t)), n);
                        break;
                    default:
                        C(this, this._t0, n = S(this, e, t))
                }
                this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n
            }
        }
    }, (M.prototype = Object.create(E.prototype)).point = function (e, t) {
        E.prototype.point.call(this, t, e)
    }, T.prototype = {
        moveTo: function (e, t) {
            this._context.moveTo(t, e)
        },
        closePath: function () {
            this._context.closePath()
        },
        lineTo: function (e, t) {
            this._context.lineTo(t, e)
        },
        bezierCurveTo: function (e, t, n, r, a, l) {
            this._context.bezierCurveTo(t, e, r, n, l, a)
        }
    };
    var L = function (e) {
        return null === e ? NaN : +e
    };
    var N = function (e) {
        let t = e,
            n = e;

        function r(e, t, r, a) {
            for (null == r && (r = 0), null == a && (a = e.length); r < a;) {
                const l = r + a >>> 1;
                n(e[l], t) < 0 ? r = l + 1 : a = l
            }
            return r
        }
        return 1 === e.length && (t = (t, n) => e(t) - n, n = function (e) {
            return (t, n) => i(e(t), n)
        }(e)), {
            left: r,
            center: function (e, n, a, l) {
                null == a && (a = 0), null == l && (l = e.length);
                const o = r(e, n, a, l - 1);
                return o > a && t(e[o - 1], n) > -t(e[o], n) ? o - 1 : o
            },
            right: function (e, t, r, a) {
                for (null == r && (r = 0), null == a && (a = e.length); r < a;) {
                    const l = r + a >>> 1;
                    n(e[l], t) > 0 ? a = l : r = l + 1
                }
                return r
            }
        }
    };
    var P = Math.sqrt(50),
        O = Math.sqrt(10),
        z = Math.sqrt(2);

    function D(e, t, n) {
        var r = Math.abs(t - e) / Math.max(0, n),
            a = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
            l = r / a;
        return l >= P ? a *= 10 : l >= O ? a *= 5 : l >= z && (a *= 2), t < e ? -a : a
    }
    const U = 1e3,
        F = 6e4,
        A = 36e5,
        I = 864e5,
        R = 6048e5,
        j = 2592e6,
        B = 31536e6;
    var H = new Date,
        V = new Date;

    function $(e, t, n, r) {
        function a(t) {
            return e(t = 0 === arguments.length ? new Date : new Date(+t)), t
        }
        return a.floor = function (t) {
            return e(t = new Date(+t)), t
        }, a.ceil = function (n) {
            return e(n = new Date(n - 1)), t(n, 1), e(n), n
        }, a.round = function (e) {
            var t = a(e),
                n = a.ceil(e);
            return e - t < n - e ? t : n
        }, a.offset = function (e, n) {
            return t(e = new Date(+e), null == n ? 1 : Math.floor(n)), e
        }, a.range = function (n, r, l) {
            var o, i = [];
            if (n = a.ceil(n), l = null == l ? 1 : Math.floor(l), !(n < r && l > 0)) return i;
            do {
                i.push(o = new Date(+n)), t(n, l), e(n)
            } while (o < n && n < r);
            return i
        }, a.filter = function (n) {
            return $((function (t) {
                if (t >= t)
                    for (; e(t), !n(t);) t.setTime(t - 1)
            }), (function (e, r) {
                if (e >= e)
                    if (r < 0)
                        for (; ++r <= 0;)
                            for (; t(e, -1), !n(e););
                    else
                        for (; --r >= 0;)
                            for (; t(e, 1), !n(e););
            }))
        }, n && (a.count = function (t, r) {
            return H.setTime(+t), V.setTime(+r), e(H), e(V), Math.floor(n(H, V))
        }, a.every = function (e) {
            return e = Math.floor(e), isFinite(e) && e > 0 ? e > 1 ? a.filter(r ? function (t) {
                return r(t) % e == 0
            } : function (t) {
                return a.count(0, t) % e == 0
            }) : a : null
        }), a
    }
    var W = $((function () {}), (function (e, t) {
        e.setTime(+e + t)
    }), (function (e, t) {
        return t - e
    }));
    W.every = function (e) {
        return e = Math.floor(e), isFinite(e) && e > 0 ? e > 1 ? $((function (t) {
            t.setTime(Math.floor(t / e) * e)
        }), (function (t, n) {
            t.setTime(+t + n * e)
        }), (function (t, n) {
            return (n - t) / e
        })) : W : null
    };
    var Q = W,
        q = (W.range, $((function (e) {
            e.setTime(e - e.getMilliseconds())
        }), (function (e, t) {
            e.setTime(+e + t * U)
        }), (function (e, t) {
            return (t - e) / U
        }), (function (e) {
            return e.getUTCSeconds()
        }))),
        Y = q,
        G = (q.range, $((function (e) {
            e.setTime(e - e.getMilliseconds() - e.getSeconds() * U)
        }), (function (e, t) {
            e.setTime(+e + t * F)
        }), (function (e, t) {
            return (t - e) / F
        }), (function (e) {
            return e.getMinutes()
        }))),
        K = G,
        X = (G.range, $((function (e) {
            e.setTime(e - e.getMilliseconds() - e.getSeconds() * U - e.getMinutes() * F)
        }), (function (e, t) {
            e.setTime(+e + t * A)
        }), (function (e, t) {
            return (t - e) / A
        }), (function (e) {
            return e.getHours()
        }))),
        Z = X,
        J = (X.range, $((e => e.setHours(0, 0, 0, 0)), ((e, t) => e.setDate(e.getDate() + t)), ((e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * F) / I), (e => e.getDate() - 1))),
        ee = J;
    J.range;

    function te(e) {
        return $((function (t) {
            t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0)
        }), (function (e, t) {
            e.setDate(e.getDate() + 7 * t)
        }), (function (e, t) {
            return (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * F) / R
        }))
    }
    var ne = te(0),
        re = te(1),
        ae = te(2),
        le = te(3),
        oe = te(4),
        ie = te(5),
        ue = te(6),
        se = (ne.range, re.range, ae.range, le.range, oe.range, ie.range, ue.range, $((function (e) {
            e.setDate(1), e.setHours(0, 0, 0, 0)
        }), (function (e, t) {
            e.setMonth(e.getMonth() + t)
        }), (function (e, t) {
            return t.getMonth() - e.getMonth() + 12 * (t.getFullYear() - e.getFullYear())
        }), (function (e) {
            return e.getMonth()
        }))),
        ce = se,
        fe = (se.range, $((function (e) {
            e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
        }), (function (e, t) {
            e.setFullYear(e.getFullYear() + t)
        }), (function (e, t) {
            return t.getFullYear() - e.getFullYear()
        }), (function (e) {
            return e.getFullYear()
        })));
    fe.every = function (e) {
        return isFinite(e = Math.floor(e)) && e > 0 ? $((function (t) {
            t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
        }), (function (t, n) {
            t.setFullYear(t.getFullYear() + n * e)
        })) : null
    };
    var de = fe,
        pe = (fe.range, $((function (e) {
            e.setUTCSeconds(0, 0)
        }), (function (e, t) {
            e.setTime(+e + t * F)
        }), (function (e, t) {
            return (t - e) / F
        }), (function (e) {
            return e.getUTCMinutes()
        }))),
        he = pe,
        ge = (pe.range, $((function (e) {
            e.setUTCMinutes(0, 0, 0)
        }), (function (e, t) {
            e.setTime(+e + t * A)
        }), (function (e, t) {
            return (t - e) / A
        }), (function (e) {
            return e.getUTCHours()
        }))),
        me = ge,
        ye = (ge.range, $((function (e) {
            e.setUTCHours(0, 0, 0, 0)
        }), (function (e, t) {
            e.setUTCDate(e.getUTCDate() + t)
        }), (function (e, t) {
            return (t - e) / I
        }), (function (e) {
            return e.getUTCDate() - 1
        }))),
        ve = ye;
    ye.range;

    function be(e) {
        return $((function (t) {
            t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0)
        }), (function (e, t) {
            e.setUTCDate(e.getUTCDate() + 7 * t)
        }), (function (e, t) {
            return (t - e) / R
        }))
    }
    var we = be(0),
        ke = be(1),
        _e = be(2),
        Se = be(3),
        xe = be(4),
        Ce = be(5),
        Ee = be(6),
        Me = (we.range, ke.range, _e.range, Se.range, xe.range, Ce.range, Ee.range, $((function (e) {
            e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0)
        }), (function (e, t) {
            e.setUTCMonth(e.getUTCMonth() + t)
        }), (function (e, t) {
            return t.getUTCMonth() - e.getUTCMonth() + 12 * (t.getUTCFullYear() - e.getUTCFullYear())
        }), (function (e) {
            return e.getUTCMonth()
        }))),
        Te = Me,
        Le = (Me.range, $((function (e) {
            e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
        }), (function (e, t) {
            e.setUTCFullYear(e.getUTCFullYear() + t)
        }), (function (e, t) {
            return t.getUTCFullYear() - e.getUTCFullYear()
        }), (function (e) {
            return e.getUTCFullYear()
        })));
    Le.every = function (e) {
        return isFinite(e = Math.floor(e)) && e > 0 ? $((function (t) {
            t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
        }), (function (t, n) {
            t.setUTCFullYear(t.getUTCFullYear() + n * e)
        })) : null
    };
    var Ne = Le;
    Le.range;

    function Pe(e, t, n, r, a, l) {
        const o = [
            [Y, 1, U],
            [Y, 5, 5e3],
            [Y, 15, 15e3],
            [Y, 30, 3e4],
            [l, 1, F],
            [l, 5, 3e5],
            [l, 15, 9e5],
            [l, 30, 18e5],
            [a, 1, A],
            [a, 3, 108e5],
            [a, 6, 216e5],
            [a, 12, 432e5],
            [r, 1, I],
            [r, 2, 1728e5],
            [n, 1, R],
            [t, 1, j],
            [t, 3, 7776e6],
            [e, 1, B]
        ];

        function i(t, n, r) {
            const a = Math.abs(n - t) / r,
                l = N((([, , e]) => e)).right(o, a);
            if (l === o.length) return e.every(D(t / B, n / B, r));
            if (0 === l) return Q.every(Math.max(D(t, n, r), 1));
            const [i, u] = o[a / o[l - 1][2] < o[l][2] / a ? l - 1 : l];
            return i.every(u)
        }
        return [function (e, t, n) {
            const r = t < e;
            r && ([e, t] = [t, e]);
            const a = n && "function" == typeof n.range ? n : i(e, t, n),
                l = a ? a.range(e, +t + 1) : [];
            return r ? l.reverse() : l
        }, i]
    }
    const [Oe, ze] = Pe(Ne, Te, we, ve, me, he), [De, Ue] = Pe(de, ce, ne, ee, Z, K);

    function Fe(e) {
        if (0 <= e.y && e.y < 100) {
            var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
            return t.setFullYear(e.y), t
        }
        return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L)
    }

    function Ae(e) {
        if (0 <= e.y && e.y < 100) {
            var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
            return t.setUTCFullYear(e.y), t
        }
        return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L))
    }

    function Ie(e, t, n) {
        return {
            y: e,
            m: t,
            d: n,
            H: 0,
            M: 0,
            S: 0,
            L: 0
        }
    }
    var Re, je = {
            "-": "",
            _: " ",
            0: "0"
        },
        Be = /^\s*\d+/,
        He = /^%/,
        Ve = /[\\^$*+?|[\]().{}]/g;

    function $e(e, t, n) {
        var r = e < 0 ? "-" : "",
            a = (r ? -e : e) + "",
            l = a.length;
        return r + (l < n ? new Array(n - l + 1).join(t) + a : a)
    }

    function We(e) {
        return e.replace(Ve, "\\$&")
    }

    function Qe(e) {
        return new RegExp("^(?:" + e.map(We).join("|") + ")", "i")
    }

    function qe(e) {
        return new Map(e.map(((e, t) => [e.toLowerCase(), t])))
    }

    function Ye(e, t, n) {
        var r = Be.exec(t.slice(n, n + 1));
        return r ? (e.w = +r[0], n + r[0].length) : -1
    }

    function Ge(e, t, n) {
        var r = Be.exec(t.slice(n, n + 1));
        return r ? (e.u = +r[0], n + r[0].length) : -1
    }

    function Ke(e, t, n) {
        var r = Be.exec(t.slice(n, n + 2));
        return r ? (e.U = +r[0], n + r[0].length) : -1
    }

    function Xe(e, t, n) {
        var r = Be.exec(t.slice(n, n + 2));
        return r ? (e.V = +r[0], n + r[0].length) : -1
    }

    function Ze(e, t, n) {
        var r = Be.exec(t.slice(n, n + 2));
        return r ? (e.W = +r[0], n + r[0].length) : -1
    }

    function Je(e, t, n) {
        var r = Be.exec(t.slice(n, n + 4));
        return r ? (e.y = +r[0], n + r[0].length) : -1
    }

    function et(e, t, n) {
        var r = Be.exec(t.slice(n, n + 2));
        return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1
    }

    function tt(e, t, n) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
        return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1
    }

    function nt(e, t, n) {
        var r = Be.exec(t.slice(n, n + 1));
        return r ? (e.q = 3 * r[0] - 3, n + r[0].length) : -1
    }

    function rt(e, t, n) {
        var r = Be.exec(t.slice(n, n + 2));
        return r ? (e.m = r[0] - 1, n + r[0].length) : -1
    }

    function at(e, t, n) {
        var r = Be.exec(t.slice(n, n + 2));
        return r ? (e.d = +r[0], n + r[0].length) : -1
    }

    function lt(e, t, n) {
        var r = Be.exec(t.slice(n, n + 3));
        return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1
    }

    function ot(e, t, n) {
        var r = Be.exec(t.slice(n, n + 2));
        return r ? (e.H = +r[0], n + r[0].length) : -1
    }

    function it(e, t, n) {
        var r = Be.exec(t.slice(n, n + 2));
        return r ? (e.M = +r[0], n + r[0].length) : -1
    }

    function ut(e, t, n) {
        var r = Be.exec(t.slice(n, n + 2));
        return r ? (e.S = +r[0], n + r[0].length) : -1
    }

    function st(e, t, n) {
        var r = Be.exec(t.slice(n, n + 3));
        return r ? (e.L = +r[0], n + r[0].length) : -1
    }

    function ct(e, t, n) {
        var r = Be.exec(t.slice(n, n + 6));
        return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1
    }

    function ft(e, t, n) {
        var r = He.exec(t.slice(n, n + 1));
        return r ? n + r[0].length : -1
    }

    function dt(e, t, n) {
        var r = Be.exec(t.slice(n));
        return r ? (e.Q = +r[0], n + r[0].length) : -1
    }

    function pt(e, t, n) {
        var r = Be.exec(t.slice(n));
        return r ? (e.s = +r[0], n + r[0].length) : -1
    }

    function ht(e, t) {
        return $e(e.getDate(), t, 2)
    }

    function gt(e, t) {
        return $e(e.getHours(), t, 2)
    }

    function mt(e, t) {
        return $e(e.getHours() % 12 || 12, t, 2)
    }

    function yt(e, t) {
        return $e(1 + ee.count(de(e), e), t, 3)
    }

    function vt(e, t) {
        return $e(e.getMilliseconds(), t, 3)
    }

    function bt(e, t) {
        return vt(e, t) + "000"
    }

    function wt(e, t) {
        return $e(e.getMonth() + 1, t, 2)
    }

    function kt(e, t) {
        return $e(e.getMinutes(), t, 2)
    }

    function _t(e, t) {
        return $e(e.getSeconds(), t, 2)
    }

    function St(e) {
        var t = e.getDay();
        return 0 === t ? 7 : t
    }

    function xt(e, t) {
        return $e(ne.count(de(e) - 1, e), t, 2)
    }

    function Ct(e) {
        var t = e.getDay();
        return t >= 4 || 0 === t ? oe(e) : oe.ceil(e)
    }

    function Et(e, t) {
        return e = Ct(e), $e(oe.count(de(e), e) + (4 === de(e).getDay()), t, 2)
    }

    function Mt(e) {
        return e.getDay()
    }

    function Tt(e, t) {
        return $e(re.count(de(e) - 1, e), t, 2)
    }

    function Lt(e, t) {
        return $e(e.getFullYear() % 100, t, 2)
    }

    function Nt(e, t) {
        return $e((e = Ct(e)).getFullYear() % 100, t, 2)
    }

    function Pt(e, t) {
        return $e(e.getFullYear() % 1e4, t, 4)
    }

    function Ot(e, t) {
        var n = e.getDay();
        return $e((e = n >= 4 || 0 === n ? oe(e) : oe.ceil(e)).getFullYear() % 1e4, t, 4)
    }

    function zt(e) {
        var t = e.getTimezoneOffset();
        return (t > 0 ? "-" : (t *= -1, "+")) + $e(t / 60 | 0, "0", 2) + $e(t % 60, "0", 2)
    }

    function Dt(e, t) {
        return $e(e.getUTCDate(), t, 2)
    }

    function Ut(e, t) {
        return $e(e.getUTCHours(), t, 2)
    }

    function Ft(e, t) {
        return $e(e.getUTCHours() % 12 || 12, t, 2)
    }

    function At(e, t) {
        return $e(1 + ve.count(Ne(e), e), t, 3)
    }

    function It(e, t) {
        return $e(e.getUTCMilliseconds(), t, 3)
    }

    function Rt(e, t) {
        return It(e, t) + "000"
    }

    function jt(e, t) {
        return $e(e.getUTCMonth() + 1, t, 2)
    }

    function Bt(e, t) {
        return $e(e.getUTCMinutes(), t, 2)
    }

    function Ht(e, t) {
        return $e(e.getUTCSeconds(), t, 2)
    }

    function Vt(e) {
        var t = e.getUTCDay();
        return 0 === t ? 7 : t
    }

    function $t(e, t) {
        return $e(we.count(Ne(e) - 1, e), t, 2)
    }

    function Wt(e) {
        var t = e.getUTCDay();
        return t >= 4 || 0 === t ? xe(e) : xe.ceil(e)
    }

    function Qt(e, t) {
        return e = Wt(e), $e(xe.count(Ne(e), e) + (4 === Ne(e).getUTCDay()), t, 2)
    }

    function qt(e) {
        return e.getUTCDay()
    }

    function Yt(e, t) {
        return $e(ke.count(Ne(e) - 1, e), t, 2)
    }

    function Gt(e, t) {
        return $e(e.getUTCFullYear() % 100, t, 2)
    }

    function Kt(e, t) {
        return $e((e = Wt(e)).getUTCFullYear() % 100, t, 2)
    }

    function Xt(e, t) {
        return $e(e.getUTCFullYear() % 1e4, t, 4)
    }

    function Zt(e, t) {
        var n = e.getUTCDay();
        return $e((e = n >= 4 || 0 === n ? xe(e) : xe.ceil(e)).getUTCFullYear() % 1e4, t, 4)
    }

    function Jt() {
        return "+0000"
    }

    function en() {
        return "%"
    }

    function tn(e) {
        return +e
    }

    function nn(e) {
        return Math.floor(+e / 1e3)
    }
    Re = function (e) {
        var t = e.dateTime,
            n = e.date,
            r = e.time,
            a = e.periods,
            l = e.days,
            o = e.shortDays,
            i = e.months,
            u = e.shortMonths,
            s = Qe(a),
            c = qe(a),
            f = Qe(l),
            d = qe(l),
            p = Qe(o),
            h = qe(o),
            g = Qe(i),
            m = qe(i),
            y = Qe(u),
            v = qe(u),
            b = {
                a: function (e) {
                    return o[e.getDay()]
                },
                A: function (e) {
                    return l[e.getDay()]
                },
                b: function (e) {
                    return u[e.getMonth()]
                },
                B: function (e) {
                    return i[e.getMonth()]
                },
                c: null,
                d: ht,
                e: ht,
                f: bt,
                g: Nt,
                G: Ot,
                H: gt,
                I: mt,
                j: yt,
                L: vt,
                m: wt,
                M: kt,
                p: function (e) {
                    return a[+(e.getHours() >= 12)]
                },
                q: function (e) {
                    return 1 + ~~(e.getMonth() / 3)
                },
                Q: tn,
                s: nn,
                S: _t,
                u: St,
                U: xt,
                V: Et,
                w: Mt,
                W: Tt,
                x: null,
                X: null,
                y: Lt,
                Y: Pt,
                Z: zt,
                "%": en
            },
            w = {
                a: function (e) {
                    return o[e.getUTCDay()]
                },
                A: function (e) {
                    return l[e.getUTCDay()]
                },
                b: function (e) {
                    return u[e.getUTCMonth()]
                },
                B: function (e) {
                    return i[e.getUTCMonth()]
                },
                c: null,
                d: Dt,
                e: Dt,
                f: Rt,
                g: Kt,
                G: Zt,
                H: Ut,
                I: Ft,
                j: At,
                L: It,
                m: jt,
                M: Bt,
                p: function (e) {
                    return a[+(e.getUTCHours() >= 12)]
                },
                q: function (e) {
                    return 1 + ~~(e.getUTCMonth() / 3)
                },
                Q: tn,
                s: nn,
                S: Ht,
                u: Vt,
                U: $t,
                V: Qt,
                w: qt,
                W: Yt,
                x: null,
                X: null,
                y: Gt,
                Y: Xt,
                Z: Jt,
                "%": en
            },
            k = {
                a: function (e, t, n) {
                    var r = p.exec(t.slice(n));
                    return r ? (e.w = h.get(r[0].toLowerCase()), n + r[0].length) : -1
                },
                A: function (e, t, n) {
                    var r = f.exec(t.slice(n));
                    return r ? (e.w = d.get(r[0].toLowerCase()), n + r[0].length) : -1
                },
                b: function (e, t, n) {
                    var r = y.exec(t.slice(n));
                    return r ? (e.m = v.get(r[0].toLowerCase()), n + r[0].length) : -1
                },
                B: function (e, t, n) {
                    var r = g.exec(t.slice(n));
                    return r ? (e.m = m.get(r[0].toLowerCase()), n + r[0].length) : -1
                },
                c: function (e, n, r) {
                    return x(e, t, n, r)
                },
                d: at,
                e: at,
                f: ct,
                g: et,
                G: Je,
                H: ot,
                I: ot,
                j: lt,
                L: st,
                m: rt,
                M: it,
                p: function (e, t, n) {
                    var r = s.exec(t.slice(n));
                    return r ? (e.p = c.get(r[0].toLowerCase()), n + r[0].length) : -1
                },
                q: nt,
                Q: dt,
                s: pt,
                S: ut,
                u: Ge,
                U: Ke,
                V: Xe,
                w: Ye,
                W: Ze,
                x: function (e, t, r) {
                    return x(e, n, t, r)
                },
                X: function (e, t, n) {
                    return x(e, r, t, n)
                },
                y: et,
                Y: Je,
                Z: tt,
                "%": ft
            };

        function _(e, t) {
            return function (n) {
                var r, a, l, o = [],
                    i = -1,
                    u = 0,
                    s = e.length;
                for (n instanceof Date || (n = new Date(+n)); ++i < s;) 37 === e.charCodeAt(i) && (o.push(e.slice(u, i)), null != (a = je[r = e.charAt(++i)]) ? r = e.charAt(++i) : a = "e" === r ? " " : "0", (l = t[r]) && (r = l(n, a)), o.push(r), u = i + 1);
                return o.push(e.slice(u, i)), o.join("")
            }
        }

        function S(e, t) {
            return function (n) {
                var r, a, l = Ie(1900, void 0, 1);
                if (x(l, e, n += "", 0) != n.length) return null;
                if ("Q" in l) return new Date(l.Q);
                if ("s" in l) return new Date(1e3 * l.s + ("L" in l ? l.L : 0));
                if (t && !("Z" in l) && (l.Z = 0), "p" in l && (l.H = l.H % 12 + 12 * l.p), void 0 === l.m && (l.m = "q" in l ? l.q : 0), "V" in l) {
                    if (l.V < 1 || l.V > 53) return null;
                    "w" in l || (l.w = 1), "Z" in l ? (a = (r = Ae(Ie(l.y, 0, 1))).getUTCDay(), r = a > 4 || 0 === a ? ke.ceil(r) : ke(r), r = ve.offset(r, 7 * (l.V - 1)), l.y = r.getUTCFullYear(), l.m = r.getUTCMonth(), l.d = r.getUTCDate() + (l.w + 6) % 7) : (a = (r = Fe(Ie(l.y, 0, 1))).getDay(), r = a > 4 || 0 === a ? re.ceil(r) : re(r), r = ee.offset(r, 7 * (l.V - 1)), l.y = r.getFullYear(), l.m = r.getMonth(), l.d = r.getDate() + (l.w + 6) % 7)
                } else("W" in l || "U" in l) && ("w" in l || (l.w = "u" in l ? l.u % 7 : "W" in l ? 1 : 0), a = "Z" in l ? Ae(Ie(l.y, 0, 1)).getUTCDay() : Fe(Ie(l.y, 0, 1)).getDay(), l.m = 0, l.d = "W" in l ? (l.w + 6) % 7 + 7 * l.W - (a + 5) % 7 : l.w + 7 * l.U - (a + 6) % 7);
                return "Z" in l ? (l.H += l.Z / 100 | 0, l.M += l.Z % 100, Ae(l)) : Fe(l)
            }
        }

        function x(e, t, n, r) {
            for (var a, l, o = 0, i = t.length, u = n.length; o < i;) {
                if (r >= u) return -1;
                if (37 === (a = t.charCodeAt(o++))) {
                    if (a = t.charAt(o++), !(l = k[a in je ? t.charAt(o++) : a]) || (r = l(e, n, r)) < 0) return -1
                } else if (a != n.charCodeAt(r++)) return -1
            }
            return r
        }
        return b.x = _(n, b), b.X = _(r, b), b.c = _(t, b), w.x = _(n, w), w.X = _(r, w), w.c = _(t, w), {
            format: function (e) {
                var t = _(e += "", b);
                return t.toString = function () {
                    return e
                }, t
            },
            parse: function (e) {
                var t = S(e += "", !1);
                return t.toString = function () {
                    return e
                }, t
            },
            utcFormat: function (e) {
                var t = _(e += "", w);
                return t.toString = function () {
                    return e
                }, t
            },
            utcParse: function (e) {
                var t = S(e += "", !0);
                return t.toString = function () {
                    return e
                }, t
            }
        }
    }({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }), Re.format, Re.parse, Re.utcFormat, Re.utcParse;
    const rn = N(i);
    rn.right, rn.left, N(L).center;
    var an = function (e, t, n) {
        e.prototype = t.prototype = n, n.constructor = e
    };

    function ln(e, t) {
        var n = Object.create(e.prototype);
        for (var r in t) n[r] = t[r];
        return n
    }

    function on() {}
    var un = .7,
        sn = 1 / un,
        cn = "\\s*([+-]?\\d+)\\s*",
        fn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        dn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        pn = /^#([0-9a-f]{3,8})$/,
        hn = new RegExp("^rgb\\(" + [cn, cn, cn] + "\\)$"),
        gn = new RegExp("^rgb\\(" + [dn, dn, dn] + "\\)$"),
        mn = new RegExp("^rgba\\(" + [cn, cn, cn, fn] + "\\)$"),
        yn = new RegExp("^rgba\\(" + [dn, dn, dn, fn] + "\\)$"),
        vn = new RegExp("^hsl\\(" + [fn, dn, dn] + "\\)$"),
        bn = new RegExp("^hsla\\(" + [fn, dn, dn, fn] + "\\)$"),
        wn = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        };

    function kn() {
        return this.rgb().formatHex()
    }

    function _n() {
        return this.rgb().formatRgb()
    }

    function Sn(e) {
        var t, n;
        return e = (e + "").trim().toLowerCase(), (t = pn.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), 6 === n ? xn(t) : 3 === n ? new Tn(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | 240 & t, (15 & t) << 4 | 15 & t, 1) : 8 === n ? Cn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (255 & t) / 255) : 4 === n ? Cn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | 240 & t, ((15 & t) << 4 | 15 & t) / 255) : null) : (t = hn.exec(e)) ? new Tn(t[1], t[2], t[3], 1) : (t = gn.exec(e)) ? new Tn(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, 1) : (t = mn.exec(e)) ? Cn(t[1], t[2], t[3], t[4]) : (t = yn.exec(e)) ? Cn(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, t[4]) : (t = vn.exec(e)) ? On(t[1], t[2] / 100, t[3] / 100, 1) : (t = bn.exec(e)) ? On(t[1], t[2] / 100, t[3] / 100, t[4]) : wn.hasOwnProperty(e) ? xn(wn[e]) : "transparent" === e ? new Tn(NaN, NaN, NaN, 0) : null
    }

    function xn(e) {
        return new Tn(e >> 16 & 255, e >> 8 & 255, 255 & e, 1)
    }

    function Cn(e, t, n, r) {
        return r <= 0 && (e = t = n = NaN), new Tn(e, t, n, r)
    }

    function En(e) {
        return e instanceof on || (e = Sn(e)), e ? new Tn((e = e.rgb()).r, e.g, e.b, e.opacity) : new Tn
    }

    function Mn(e, t, n, r) {
        return 1 === arguments.length ? En(e) : new Tn(e, t, n, null == r ? 1 : r)
    }

    function Tn(e, t, n, r) {
        this.r = +e, this.g = +t, this.b = +n, this.opacity = +r
    }

    function Ln() {
        return "#" + Pn(this.r) + Pn(this.g) + Pn(this.b)
    }

    function Nn() {
        var e = this.opacity;
        return (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === e ? ")" : ", " + e + ")")
    }

    function Pn(e) {
        return ((e = Math.max(0, Math.min(255, Math.round(e) || 0))) < 16 ? "0" : "") + e.toString(16)
    }

    function On(e, t, n, r) {
        return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Dn(e, t, n, r)
    }

    function zn(e) {
        if (e instanceof Dn) return new Dn(e.h, e.s, e.l, e.opacity);
        if (e instanceof on || (e = Sn(e)), !e) return new Dn;
        if (e instanceof Dn) return e;
        var t = (e = e.rgb()).r / 255,
            n = e.g / 255,
            r = e.b / 255,
            a = Math.min(t, n, r),
            l = Math.max(t, n, r),
            o = NaN,
            i = l - a,
            u = (l + a) / 2;
        return i ? (o = t === l ? (n - r) / i + 6 * (n < r) : n === l ? (r - t) / i + 2 : (t - n) / i + 4, i /= u < .5 ? l + a : 2 - l - a, o *= 60) : i = u > 0 && u < 1 ? 0 : o, new Dn(o, i, u, e.opacity)
    }

    function Dn(e, t, n, r) {
        this.h = +e, this.s = +t, this.l = +n, this.opacity = +r
    }

    function Un(e, t, n) {
        return 255 * (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t)
    }

    function Fn(e, t, n, r, a) {
        var l = e * e,
            o = l * e;
        return ((1 - 3 * e + 3 * l - o) * t + (4 - 6 * l + 3 * o) * n + (1 + 3 * e + 3 * l - 3 * o) * r + o * a) / 6
    }
    an(on, Sn, {
        copy: function (e) {
            return Object.assign(new this.constructor, this, e)
        },
        displayable: function () {
            return this.rgb().displayable()
        },
        hex: kn,
        formatHex: kn,
        formatHsl: function () {
            return zn(this).formatHsl()
        },
        formatRgb: _n,
        toString: _n
    }), an(Tn, Mn, ln(on, {
        brighter: function (e) {
            return e = null == e ? sn : Math.pow(sn, e), new Tn(this.r * e, this.g * e, this.b * e, this.opacity)
        },
        darker: function (e) {
            return e = null == e ? un : Math.pow(un, e), new Tn(this.r * e, this.g * e, this.b * e, this.opacity)
        },
        rgb: function () {
            return this
        },
        displayable: function () {
            return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
        },
        hex: Ln,
        formatHex: Ln,
        formatRgb: Nn,
        toString: Nn
    })), an(Dn, (function (e, t, n, r) {
        return 1 === arguments.length ? zn(e) : new Dn(e, t, n, null == r ? 1 : r)
    }), ln(on, {
        brighter: function (e) {
            return e = null == e ? sn : Math.pow(sn, e), new Dn(this.h, this.s, this.l * e, this.opacity)
        },
        darker: function (e) {
            return e = null == e ? un : Math.pow(un, e), new Dn(this.h, this.s, this.l * e, this.opacity)
        },
        rgb: function () {
            var e = this.h % 360 + 360 * (this.h < 0),
                t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                r = n + (n < .5 ? n : 1 - n) * t,
                a = 2 * n - r;
            return new Tn(Un(e >= 240 ? e - 240 : e + 120, a, r), Un(e, a, r), Un(e < 120 ? e + 240 : e - 120, a, r), this.opacity)
        },
        displayable: function () {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        },
        formatHsl: function () {
            var e = this.opacity;
            return (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === e ? ")" : ", " + e + ")")
        }
    }));
    var An = e => () => e;

    function In(e, t) {
        return function (n) {
            return e + n * t
        }
    }

    function Rn(e) {
        return 1 == (e = +e) ? jn : function (t, n) {
            return n - t ? function (e, t, n) {
                return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n,
                    function (r) {
                        return Math.pow(e + r * t, n)
                    }
            }(t, n, e) : An(isNaN(t) ? n : t)
        }
    }

    function jn(e, t) {
        var n = t - e;
        return n ? In(e, n) : An(isNaN(e) ? t : e)
    }(function e(t) {
        var n = Rn(t);

        function r(e, t) {
            var r = n((e = Mn(e)).r, (t = Mn(t)).r),
                a = n(e.g, t.g),
                l = n(e.b, t.b),
                o = jn(e.opacity, t.opacity);
            return function (t) {
                return e.r = r(t), e.g = a(t), e.b = l(t), e.opacity = o(t), e + ""
            }
        }
        return r.gamma = e, r
    })(1);

    function Bn(e) {
        return function (t) {
            var n, r, a = t.length,
                l = new Array(a),
                o = new Array(a),
                i = new Array(a);
            for (n = 0; n < a; ++n) r = Mn(t[n]), l[n] = r.r || 0, o[n] = r.g || 0, i[n] = r.b || 0;
            return l = e(l), o = e(o), i = e(i), r.opacity = 1,
                function (e) {
                    return r.r = l(e), r.g = o(e), r.b = i(e), r + ""
                }
        }
    }
    Bn((function (e) {
        var t = e.length - 1;
        return function (n) {
            var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t),
                a = e[r],
                l = e[r + 1],
                o = r > 0 ? e[r - 1] : 2 * a - l,
                i = r < t - 1 ? e[r + 2] : 2 * l - a;
            return Fn((n - r / t) * t, o, a, l, i)
        }
    })), Bn((function (e) {
        var t = e.length;
        return function (n) {
            var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t),
                a = e[(r + t - 1) % t],
                l = e[r % t],
                o = e[(r + 1) % t],
                i = e[(r + 2) % t];
            return Fn((n - r / t) * t, a, l, o, i)
        }
    }));
    var Hn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
    new RegExp(Hn.source, "g");

    function Vn(e, t) {
        if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
        var n, r = e.slice(0, n);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)]
    }
    var $n = function (e) {
            return (e = Vn(Math.abs(e))) ? e[1] : NaN
        },
        Wn = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function Qn(e) {
        if (!(t = Wn.exec(e))) throw new Error("invalid format: " + e);
        var t;
        return new qn({
            fill: t[1],
            align: t[2],
            sign: t[3],
            symbol: t[4],
            zero: t[5],
            width: t[6],
            comma: t[7],
            precision: t[8] && t[8].slice(1),
            trim: t[9],
            type: t[10]
        })
    }

    function qn(e) {
        this.fill = void 0 === e.fill ? " " : e.fill + "", this.align = void 0 === e.align ? ">" : e.align + "", this.sign = void 0 === e.sign ? "-" : e.sign + "", this.symbol = void 0 === e.symbol ? "" : e.symbol + "", this.zero = !!e.zero, this.width = void 0 === e.width ? void 0 : +e.width, this.comma = !!e.comma, this.precision = void 0 === e.precision ? void 0 : +e.precision, this.trim = !!e.trim, this.type = void 0 === e.type ? "" : e.type + ""
    }
    Qn.prototype = qn.prototype, qn.prototype.toString = function () {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    var Yn, Gn, Kn = function (e, t) {
            var n = Vn(e, t);
            if (!n) return e + "";
            var r = n[0],
                a = n[1];
            return a < 0 ? "0." + new Array(-a).join("0") + r : r.length > a + 1 ? r.slice(0, a + 1) + "." + r.slice(a + 1) : r + new Array(a - r.length + 2).join("0")
        },
        Xn = {
            "%": (e, t) => (100 * e).toFixed(t),
            b: e => Math.round(e).toString(2),
            c: e => e + "",
            d: function (e) {
                return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10)
            },
            e: (e, t) => e.toExponential(t),
            f: (e, t) => e.toFixed(t),
            g: (e, t) => e.toPrecision(t),
            o: e => Math.round(e).toString(8),
            p: (e, t) => Kn(100 * e, t),
            r: Kn,
            s: function (e, t) {
                var n = Vn(e, t);
                if (!n) return e + "";
                var r = n[0],
                    a = n[1],
                    l = a - (Yn = 3 * Math.max(-8, Math.min(8, Math.floor(a / 3)))) + 1,
                    o = r.length;
                return l === o ? r : l > o ? r + new Array(l - o + 1).join("0") : l > 0 ? r.slice(0, l) + "." + r.slice(l) : "0." + new Array(1 - l).join("0") + Vn(e, Math.max(0, t + l - 1))[0]
            },
            X: e => Math.round(e).toString(16).toUpperCase(),
            x: e => Math.round(e).toString(16)
        },
        Zn = function (e) {
            return e
        },
        Jn = Array.prototype.map,
        er = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
        tr = function (e) {
            var t, n, r = void 0 === e.grouping || void 0 === e.thousands ? Zn : (t = Jn.call(e.grouping, Number), n = e.thousands + "", function (e, r) {
                    for (var a = e.length, l = [], o = 0, i = t[0], u = 0; a > 0 && i > 0 && (u + i + 1 > r && (i = Math.max(1, r - u)), l.push(e.substring(a -= i, a + i)), !((u += i + 1) > r));) i = t[o = (o + 1) % t.length];
                    return l.reverse().join(n)
                }),
                a = void 0 === e.currency ? "" : e.currency[0] + "",
                l = void 0 === e.currency ? "" : e.currency[1] + "",
                o = void 0 === e.decimal ? "." : e.decimal + "",
                i = void 0 === e.numerals ? Zn : function (e) {
                    return function (t) {
                        return t.replace(/[0-9]/g, (function (t) {
                            return e[+t]
                        }))
                    }
                }(Jn.call(e.numerals, String)),
                u = void 0 === e.percent ? "%" : e.percent + "",
                s = void 0 === e.minus ? "−" : e.minus + "",
                c = void 0 === e.nan ? "NaN" : e.nan + "";

            function f(e) {
                var t = (e = Qn(e)).fill,
                    n = e.align,
                    f = e.sign,
                    d = e.symbol,
                    p = e.zero,
                    h = e.width,
                    g = e.comma,
                    m = e.precision,
                    y = e.trim,
                    v = e.type;
                "n" === v ? (g = !0, v = "g") : Xn[v] || (void 0 === m && (m = 12), y = !0, v = "g"), (p || "0" === t && "=" === n) && (p = !0, t = "0", n = "=");
                var b = "$" === d ? a : "#" === d && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "",
                    w = "$" === d ? l : /[%p]/.test(v) ? u : "",
                    k = Xn[v],
                    _ = /[defgprs%]/.test(v);

                function S(e) {
                    var a, l, u, d = b,
                        S = w;
                    if ("c" === v) S = k(e) + S, e = "";
                    else {
                        var x = (e = +e) < 0 || 1 / e < 0;
                        if (e = isNaN(e) ? c : k(Math.abs(e), m), y && (e = function (e) {
                                e: for (var t, n = e.length, r = 1, a = -1; r < n; ++r) switch (e[r]) {
                                    case ".":
                                        a = t = r;
                                        break;
                                    case "0":
                                        0 === a && (a = r), t = r;
                                        break;
                                    default:
                                        if (!+e[r]) break e;
                                        a > 0 && (a = 0)
                                }
                                return a > 0 ? e.slice(0, a) + e.slice(t + 1) : e
                            }(e)), x && 0 == +e && "+" !== f && (x = !1), d = (x ? "(" === f ? f : s : "-" === f || "(" === f ? "" : f) + d, S = ("s" === v ? er[8 + Yn / 3] : "") + S + (x && "(" === f ? ")" : ""), _)
                            for (a = -1, l = e.length; ++a < l;)
                                if (48 > (u = e.charCodeAt(a)) || u > 57) {
                                    S = (46 === u ? o + e.slice(a + 1) : e.slice(a)) + S, e = e.slice(0, a);
                                    break
                                }
                    }
                    g && !p && (e = r(e, 1 / 0));
                    var C = d.length + e.length + S.length,
                        E = C < h ? new Array(h - C + 1).join(t) : "";
                    switch (g && p && (e = r(E + e, E.length ? h - S.length : 1 / 0), E = ""), n) {
                        case "<":
                            e = d + e + S + E;
                            break;
                        case "=":
                            e = d + E + e + S;
                            break;
                        case "^":
                            e = E.slice(0, C = E.length >> 1) + d + e + S + E.slice(C);
                            break;
                        default:
                            e = E + d + e + S
                    }
                    return i(e)
                }
                return m = void 0 === m ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, m)) : Math.max(0, Math.min(20, m)), S.toString = function () {
                    return e + ""
                }, S
            }
            return {
                format: f,
                formatPrefix: function (e, t) {
                    var n = f(((e = Qn(e)).type = "f", e)),
                        r = 3 * Math.max(-8, Math.min(8, Math.floor($n(t) / 3))),
                        a = Math.pow(10, -r),
                        l = er[8 + r / 3];
                    return function (e) {
                        return n(a * e) + l
                    }
                }
            }
        };
    ! function (e) {
        Gn = tr(e), Gn.format, Gn.formatPrefix
    }({
        thousands: ",",
        grouping: [3],
        currency: ["$", ""]
    });
    Symbol("implicit");
    Math.pow(2, -52), new Uint32Array(512);
    Math.PI, Math.pow;
    k();
    const nr = {
        behavior: "mixed",
        position: ""
    };
    const rr = () => {
        let e;
        try {
            e = JSON.parse(window.localStorage.getItem("bm-sidebar-settings")) || nr
        } catch (t) {
            console.error(t), e = nr
        }
        return "top-left" !== e.position && "center-left" !== e.position || "mixed" === e.behavior && (e.behavior = "overlap"), "mobile.twitter.com" === window.document.location.hostname && (e.behavior = "overlap"), e
    };

    function ar(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
            if (null == n) return;
            var r, a, l = [],
                o = !0,
                i = !1;
            try {
                for (n = n.call(e); !(o = (r = n.next()).done) && (l.push(r.value), !t || l.length !== t); o = !0);
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (i) throw a
                }
            }
            return l
        }(e, t) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return lr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return lr(e, t)
        }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function lr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function or() {
        const e = ar(Object(r.useState)(!0), 2),
            t = (e[0], e[1], ar(Object(r.useState)([]), 2)),
            n = (t[0], t[1], ar(Object(r.useState)(window.__BLACKMAGIC_GLOBAL.location), 2)),
            l = n[0],
            o = n[1];
        Object(r.useEffect)((() => {
            window.__BLACKMAGIC_GLOBAL.locationChangeListeners.push((() => {
                o(window.__BLACKMAGIC_GLOBAL.location)
            })), window.addEventListener("message", (function (e) {
                i(e.data)
            }));
            try {
                chrome.runtime.onMessage.addListener((function (e, t, n) {
                    i(e)
                }))
            } catch (e) {
                console.error(e)
            }
        }), []);
        const i = e => {
                if ("bm.frame.link.navigate" === e.type && (e.newTab ? window.open(e.link) : window.location.href = e.link), "bm.frame.auth.token.save" === e.type && window.localStorage && window.localStorage.setItem("__blackmagic__.token", e.token), "bm.frame.settings.apply" === e.type && window.localStorage && (window.localStorage.setItem("bm-sidebar-settings", JSON.stringify(e.settings)), window.location.reload()), "bm.frame.settings.update" === e.type && window.localStorage) {
                    const t = rr();
                    t[e.key] = e.value, window.localStorage.setItem("bm-sidebar-settings", JSON.stringify(t)), window.location.reload()
                }
            },
            u = decodeURIComponent(function (e) {
                for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                    for (var a = n[r];
                        " " == a.charAt(0);) a = a.substring(1, a.length);
                    if (0 == a.indexOf(t)) return a.substring(t.length, a.length)
                }
                return null
            }("twid") || "").replace("u=", ""),
            s = window.localStorage.getItem("__blackmagic__.token") || "",
            c = rr(),
            f = [
                ["path", l.pathname],
                ["bgColor", window.document.body.style.backgroundColor],
                ["twid", u],
                ["savedToken", s],
                ["pos", c.position],
                ["bhv", c.behavior]
            ].filter((e => {
                let t = ar(e, 2);
                t[0];
                return !!t[1]
            })).map((e => {
                let t = ar(e, 2),
                    n = t[0],
                    r = t[1];
                return [n, encodeURIComponent(r)].join("=")
            })).join("&"),
            d = `${window.localStorage.getItem("bm-endpoint")||"https://blackmagic.so"}/frame/render/?${f}`;
        let p = chrome.runtime.getURL("frame.html?" + btoa(d));
        return a.a.createElement("div", {
            className: "bm-wrapper"
        }, a.a.createElement("div", {
            onClick: () => {
                window.__BLACKMAGIC_GLOBAL && window.__BLACKMAGIC_GLOBAL.close()
            },
            className: "bm-collapse-button",
            title: "Close BlackMagic.so Sidebar"
        }, a.a.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            style: {
                width: 16
            },
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
        }, a.a.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M13 5l7 7-7 7M5 5l7 7-7 7"
        }))), a.a.createElement("iframe", {
            key: p,
            src: p,
            style: {
                width: "100%",
                height: "100vh",
                border: "0"
            }
        }))
    }
    const ir = () => document.querySelector("#layers"),
        ur = () => document.querySelector("#blackmagic-so-extension-root-791251982312"),
        sr = () => 0 === window.location.pathname.indexOf("/messages");

    function cr() {
        return {
            pathname: window.location.pathname
        }
    }

    function fr() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.force,
            n = void 0 !== t && t;
        if (n || !1 !== window.__BLACKMAGIC_GLOBAL.isOpen) {
            window.__BLACKMAGIC_GLOBAL.isOpen = !1, ur().style.display = "none";
            const e = rr();
            "top-left" === e.position || "center-left" === e.position ? (window.document.body.style.paddingLeft = "0", ir().firstChild.style.paddingLeft = "0") : (window.document.body.style.paddingRight = "0", ir().firstChild.style.paddingRight = "0")
        }
    }

    function dr() {
        return "mobile.twitter.com" === document.location.hostname && window.innerWidth <= 500
    }

    function pr() {
        const e = ur();
        sr() ? e.classList.contains("message-page") || e.classList.add("message-page") : e.classList.contains("message-page") && e.classList.remove("message-page")
    }

    function hr() {
        window.location.pathname !== window.__BLACKMAGIC_GLOBAL.location.pathname && (window.__BLACKMAGIC_GLOBAL.location = cr(), window.__BLACKMAGIC_GLOBAL.locationChangeListeners.forEach((e => e())));
        const e = null === localStorage.getItem("blackmagic-open") || "1" === localStorage.getItem("blackmagic-open");
        if (document.querySelector('[data-testid="primaryColumn"]') || sr())
            if (ur()) e ? function () {
                let e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).force;
                if (void 0 !== e && e || !0 !== window.__BLACKMAGIC_GLOBAL.isOpen) {
                    window.__BLACKMAGIC_GLOBAL.isOpen = !0, ur().style.display = "block";
                    const e = rr();
                    "push" === e.behavior ? "top-left" === e.position || "center-left" === e.position ? (window.document.body.style.paddingLeft = "400px", ir().firstChild.style.paddingLeft = "400px") : (window.document.body.style.paddingRight = "400px", ir().firstChild.style.paddingRight = "400px") : "top-left" === e.position || "center-left" === e.position ? (window.document.body.style.paddingLeft = "0", ir().firstChild.style.paddingLeft = "0") : (window.document.body.style.paddingRight = "0", ir().firstChild.style.paddingRight = "0")
                }
            }() : fr();
            else {
                e && window.document.body.classList.add("blackmagic-opened");
                const t = rr(),
                    n = document.createElement("div");
                n.setAttribute("id", "blackmagic-so-extension-root-791251982312"), "top-left" !== t.position && "center-left" !== t.position || n.classList.add("top-left"), dr() && n.classList.add("twitter-mobile-root"), n.style.backgroundColor = document.body.style.backgroundColor, "rgb(255, 255, 255)" !== document.body.style.backgroundColor && n.classList.add("night-mode"), n.classList.add("behavior-" + rr().behavior);
                const a = "mixed" === rr().behavior ? document.querySelector('[role="main"]') : document.body;
                try {
                    a.insertBefore(n, a.firstChild)
                } catch (e) {
                    console.error(e)
                } - 1 === window.__BLACKMAGIC_GLOBAL.locationChangeListeners.indexOf(pr) && window.__BLACKMAGIC_GLOBAL.locationChangeListeners.push(pr), pr();
                const l = document.createElement("div");
                let i = ["top-left", "center-left", "center-right"].indexOf(t.position) > -1 ? t.position : "";
                dr() && (i += " mobile-twitter"), l.innerHTML = `<div id="blackmagic-open-button-791251982312" class="${i}">\n          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />\n          </svg>\n          <span>\n            <span class="bm-icon-text">Black Magic</span> <span class="bm-icon-emoji">✨</span>\n          </span>\n        </div>`, l.addEventListener("click", (() => {
                    window.__BLACKMAGIC_GLOBAL.open()
                }));
                try {
                    a.insertBefore(l, a.firstChild)
                } catch (e) {
                    console.error(e)
                }
                e && o.a.render(r.createElement(or, null), n)
            }
        else ur() && fr()
    }
    window.__BLACKMAGIC_GLOBAL = {
        isOpen: null,
        locationChangeListeners: [],
        location: cr(),
        close: function () {
            window.document.body.classList.remove("blackmagic-opened"), localStorage.setItem("blackmagic-open", "0")
        },
        open: function () {
            window.document.body.classList.add("blackmagic-opened"), localStorage.setItem("blackmagic-open", "1");
            const e = ur();
            o.a.render(r.createElement(or, null), e)
        }
    }, dr() && "1" === localStorage.getItem("blackmagic-open") && localStorage.setItem("blackmagic-open", 0), setInterval(hr, 200), hr()
}]);