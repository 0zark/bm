
! function(e) {
    var r = {};
    function s(n) {
        if (r[n]) return r[n].exports;
        var g = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(g.exports, g, g.exports, s), g.l = !0, g.exports
    }
    s.m = e, s.c = r, s.d = function(e, r, n) {
        s.o(e, r) || Object.defineProperty(e, r, {
            enumerable: !0,
            get: n
        })
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, r) {
        if (1 & r && (e = s(e)), 8 & r) return e;
        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & r && "string" != typeof e)
            for (var g in e) s.d(n, g, function(r) {
                return e[r]
            }.bind(null, g));
        return n
    }, s.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(r, "a", r), r
    }, s.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }, s.p = "", s(s.s = 17)
}({
    17: function(e, r, s) {
        "use strict";
        s.r(r);
        s(18);
        var n = s(8);
        s.n(n)
            .a.runtime.onInstalled.addListener((() => {
                console.emoji("🦄", "extension installed")
            }))
    },
    18: function(e, r, s) {
        "use strict";
        /**
         *  emoji-log
         *
         *  @author   abhijithvijayan <abhijithvijayan.in>
         *  @license  MIT License
         *
         *  Art by Colin J. Randall
         *
         *               \
         *                \
         *                 \\
         *                  \\
         *                   >\/7
         *               _.-(6'  \
         *              (=___._/` \
         *                   )  \ |
         *                  /   / |
         *                 /    > /
         *                j    < _\
         *            _.-' :      ``.
         *            \ r=._\        `.
         *           <`\\_  \         .`-.
         *            \ r-7  `-. ._  ' .  `\
         *             \`,      `-.`7  7)   )
         *              \/         \|  \'  / `-._
         *                         ||    .'
         *                          \\  (
         *                           >\  >
         *                       ,.-' >.'
         *                      <.'_.''
         *                        <'
         *
         */
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n;
        function g(e, r = "🐶", s) {
            const g = (t = e) && (null == t ? void 0 : t.stack) && (null == t ? void 0 : t.message) && "string" == typeof t.stack && "string" == typeof t.message;
            var t;
            const a = g ? e.message : e,
                m = s || (null == e ? void 0 : e.toString()
                    .length) * n.LINE_LENGTH_VARIABLE || n.DEFAULT_LINE_LENGTH;
            console.log(`\n      /‾${"‾‾".repeat(m)}‾\n  ${r} < `, a, `\n      \\_${"__".repeat(m)}_\n  `), g && ("undefined" != typeof window ? (console.groupCollapsed(r + " > Stack Trace:"), console.error(e.stack), console.groupEnd()) : (console.log(r + " > Stack Trace:"), console.error(e.stack)))
        }
        r.CustomConsole = class {},
            function(e) {
                e[e.LINE_LENGTH_VARIABLE = .66] = "LINE_LENGTH_VARIABLE", e[e.DEFAULT_LINE_LENGTH = 4] = "DEFAULT_LINE_LENGTH", e[e.ONE = 1] = "ONE", e[e.TWO = 2] = "TWO", e[e.THREE = 3] = "THREE"
            }(n || (n = {})), console.emoji = function(...e) {
                const r = [];
                return r[0] = function() {
                    return g("Meow", "🐱"), this
                }, r[n.ONE] = function(e) {
                    return g(e), this
                }, r[n.TWO] = function(e, r) {
                    return g(r, e), this
                }, r[n.THREE] = function(e, r, s) {
                    return g(r, e, s), this
                }, this.emoji = function(...e) {
                    return r[e.length](...e), this
                }, this.emoji(...e), this
            }
    },
    8: function(e, r, s) {
        var n, g, t;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, g = [e], void 0 === (t = "function" == typeof(n = function(e) {
            "use strict";
            if ("undefined" == typeof browser || Object.getPrototypeOf(browser) !== Object.prototype) {
                const r = "The message port closed before a response was received.",
                    s = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
                    n = e => {
                        const n = {
                            alarms: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                clearAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            bookmarks: {
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getChildren: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getRecent: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getSubTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTree: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            browserAction: {
                                disable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                enable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                getBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                openPopup: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            browsingData: {
                                remove: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                removeCache: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCookies: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeDownloads: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFormData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeHistory: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeLocalStorage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePasswords: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePluginData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                settings: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            commands: {
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            contextMenus: {
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            cookies: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAllCookieStores: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            devtools: {
                                inspectedWindow: {
                                    eval: {
                                        minArgs: 1,
                                        maxArgs: 2,
                                        singleCallbackArg: !1
                                    }
                                },
                                panels: {
                                    create: {
                                        minArgs: 3,
                                        maxArgs: 3,
                                        singleCallbackArg: !0
                                    },
                                    elements: {
                                        createSidebarPane: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    }
                                }
                            },
                            downloads: {
                                cancel: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                download: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                erase: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFileIcon: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                open: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                pause: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFile: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                resume: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            extension: {
                                isAllowedFileSchemeAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                isAllowedIncognitoAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            history: {
                                addUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                deleteRange: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getVisits: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            i18n: {
                                detectLanguage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAcceptLanguages: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            identity: {
                                launchWebAuthFlow: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            idle: {
                                queryState: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            management: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getSelf: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setEnabled: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                uninstallSelf: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            notifications: {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPermissionLevel: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            pageAction: {
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                hide: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            permissions: {
                                contains: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                request: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            runtime: {
                                getBackgroundPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPlatformInfo: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                openOptionsPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                requestUpdateCheck: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                sendMessage: {
                                    minArgs: 1,
                                    maxArgs: 3
                                },
                                sendNativeMessage: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                setUninstallURL: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            sessions: {
                                getDevices: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getRecentlyClosed: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                restore: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            storage: {
                                local: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                },
                                managed: {
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    }
                                },
                                sync: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                }
                            },
                            tabs: {
                                captureVisibleTab: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                detectLanguage: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                discard: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                duplicate: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                executeScript: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getZoom: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getZoomSettings: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goBack: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goForward: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                highlight: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                insertCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                query: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                reload: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                sendMessage: {
                                    minArgs: 2,
                                    maxArgs: 3
                                },
                                setZoom: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                setZoomSettings: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                update: {
                                    minArgs: 1,
                                    maxArgs: 2
                                }
                            },
                            topSites: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            webNavigation: {
                                getAllFrames: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFrame: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            webRequest: {
                                handlerBehaviorChanged: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            windows: {
                                create: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getLastFocused: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            }
                        };
                        if (0 === Object.keys(n)
                            .length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                        class g extends WeakMap {
                            constructor(e, r) {
                                super(r), this.createItem = e
                            }
                            get(e) {
                                return this.has(e) || this.set(e, this.createItem(e)), super.get(e)
                            }
                        }
                        const t = e => e && "object" == typeof e && "function" == typeof e.then,
                            a = (r, s) => (...n) => {
                                e.runtime.lastError ? r.reject(new Error(e.runtime.lastError.message)) : s.singleCallbackArg || n.length <= 1 && !1 !== s.singleCallbackArg ? r.resolve(n[0]) : r.resolve(n)
                            },
                            m = e => 1 == e ? "argument" : "arguments",
                            o = (e, r) => function(s, ...n) {
                                if (n.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${m(r.minArgs)} for ${e}(), got ${n.length}`);
                                if (n.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${m(r.maxArgs)} for ${e}(), got ${n.length}`);
                                return new Promise(((g, t) => {
                                    if (r.fallbackToNoCallback) try {
                                        s[e](...n, a({
                                            resolve: g,
                                            reject: t
                                        }, r))
                                    } catch (t) {
                                        console.warn(e + " API method doesn't seem to support the callback parameter, falling back to call it without a callback: ", t), s[e](...n), r.fallbackToNoCallback = !1, r.noCallback = !0, g()
                                    } else r.noCallback ? (s[e](...n), g()) : s[e](...n, a({
                                        resolve: g,
                                        reject: t
                                    }, r))
                                }))
                            },
                            i = (e, r, s) => new Proxy(r, {
                                apply: (r, n, g) => s.call(n, e, ...g)
                            });
                        let A = Function.call.bind(Object.prototype.hasOwnProperty);
                        const l = (e, r = {}, s = {}) => {
                                let n = Object.create(null),
                                    g = {
                                        has: (r, s) => s in e || s in n,
                                        get(g, t, a) {
                                            if (t in n) return n[t];
                                            if (!(t in e)) return;
                                            let m = e[t];
                                            if ("function" == typeof m)
                                                if ("function" == typeof r[t]) m = i(e, e[t], r[t]);
                                                else if (A(s, t)) {
                                                let r = o(t, s[t]);
                                                m = i(e, e[t], r)
                                            } else m = m.bind(e);
                                            else if ("object" == typeof m && null !== m && (A(r, t) || A(s, t))) m = l(m, r[t], s[t]);
                                            else {
                                                if (!A(s, "*")) return Object.defineProperty(n, t, {
                                                    configurable: !0,
                                                    enumerable: !0,
                                                    get: () => e[t],
                                                    set(r) {
                                                        e[t] = r
                                                    }
                                                }), m;
                                                m = l(m, r[t], s["*"])
                                            }
                                            return n[t] = m, m
                                        },
                                        set: (r, s, g, t) => (s in n ? n[s] = g : e[s] = g, !0),
                                        defineProperty: (e, r, s) => Reflect.defineProperty(n, r, s),
                                        deleteProperty: (e, r) => Reflect.deleteProperty(n, r)
                                    },
                                    t = Object.create(e);
                                return new Proxy(t, g)
                            },
                            c = e => ({
                                addListener(r, s, ...n) {
                                    r.addListener(e.get(s), ...n)
                                },
                                hasListener: (r, s) => r.hasListener(e.get(s)),
                                removeListener(r, s) {
                                    r.removeListener(e.get(s))
                                }
                            }),
                            x = new g((e => "function" != typeof e ? e : function(r) {
                                const s = l(r, {}, {
                                    getContent: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                });
                                e(s)
                            }));
                        let u = !1;
                        const d = new g((e => "function" != typeof e ? e : function(r, n, g) {
                                let a, m, o = !1,
                                    i = new Promise((e => {
                                        a = function(r) {
                                            u || (console.warn(s, (new Error)
                                                .stack), u = !0), o = !0, e(r)
                                        }
                                    }));
                                try {
                                    m = e(r, n, a)
                                } catch (e) {
                                    m = Promise.reject(e)
                                }
                                const A = !0 !== m && t(m);
                                if (!0 !== m && !A && !o) return !1;
                                const l = e => {
                                    e.then((e => {
                                            g(e)
                                        }), (e => {
                                            let r;
                                            r = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred", g({
                                                __mozWebExtensionPolyfillReject__: !0,
                                                message: r
                                            })
                                        }))
                                        .catch((e => {
                                            console.error("Failed to send onMessage rejected reply", e)
                                        }))
                                };
                                return l(A ? m : i), !0
                            })),
                            f = ({
                                reject: s,
                                resolve: n
                            }, g) => {
                                e.runtime.lastError ? e.runtime.lastError.message === r ? n() : s(new Error(e.runtime.lastError.message)) : g && g.__mozWebExtensionPolyfillReject__ ? s(new Error(g.message)) : n(g)
                            },
                            p = (e, r, s, ...n) => {
                                if (n.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${m(r.minArgs)} for ${e}(), got ${n.length}`);
                                if (n.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${m(r.maxArgs)} for ${e}(), got ${n.length}`);
                                return new Promise(((e, r) => {
                                    const g = f.bind(null, {
                                        resolve: e,
                                        reject: r
                                    });
                                    n.push(g), s.sendMessage(...n)
                                }))
                            },
                            b = {
                                devtools: {
                                    network: {
                                        onRequestFinished: c(x)
                                    }
                                },
                                runtime: {
                                    onMessage: c(d),
                                    onMessageExternal: c(d),
                                    sendMessage: p.bind(null, "sendMessage", {
                                        minArgs: 1,
                                        maxArgs: 3
                                    })
                                },
                                tabs: {
                                    sendMessage: p.bind(null, "sendMessage", {
                                        minArgs: 2,
                                        maxArgs: 3
                                    })
                                }
                            },
                            h = {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            };
                        return n.privacy = {
                            network: {
                                "*": h
                            },
                            services: {
                                "*": h
                            },
                            websites: {
                                "*": h
                            }
                        }, l(e, b, n)
                    };
                if ("object" != typeof chrome || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
                e.exports = n(chrome)
            } else e.exports = browser
        }) ? n.apply(r, g) : n) || (e.exports = t)
    }
