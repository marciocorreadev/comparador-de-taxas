/** @format */

function _defineProperty(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function _slicedToArray(e, t) {
  return (
    _arrayWithHoles(e) ||
    _iterableToArrayLimit(e, t) ||
    _unsupportedIterableToArray(e, t) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function _iterableToArrayLimit(e, t) {
  if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
    var n = [],
      r = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o, l = e[Symbol.iterator]();
        !(r = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t);
        r = !0
      );
    } catch (u) {
      (i = !0), (a = u);
    } finally {
      try {
        r || null == l.return || l.return();
      } finally {
        if (i) throw a;
      }
    }
    return n;
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
function _createForOfIteratorHelper(e, t) {
  var n;
  if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
    if (
      Array.isArray(e) ||
      (n = _unsupportedIterableToArray(e)) ||
      (t && e && 'number' == typeof e.length)
    ) {
      n && (e = n);
      var r = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        },
        e: function (e) {
          throw e;
        },
        f: i,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  var a,
    o = !0,
    l = !1;
  return {
    s: function () {
      n = e[Symbol.iterator]();
    },
    n: function () {
      var e = n.next();
      return (o = e.done), e;
    },
    e: function (e) {
      (l = !0), (a = e);
    },
    f: function () {
      try {
        o || null == n.return || n.return();
      } finally {
        if (l) throw a;
      }
    },
  };
}
function _toConsumableArray(e) {
  return (
    _arrayWithoutHoles(e) ||
    _iterableToArray(e) ||
    _unsupportedIterableToArray(e) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ('string' == typeof e) return _arrayLikeToArray(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(e)
        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? _arrayLikeToArray(e, t)
        : void 0
    );
  }
}
function _iterableToArray(e) {
  if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function _construct(e, t, n) {
  return (_construct = _isNativeReflectConstruct()
    ? Reflect.construct
    : function (e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var i = new (Function.bind.apply(e, r))();
        return n && _setPrototypeOf(i, n.prototype), i;
      }).apply(null, arguments);
}
function _get(e, t, n) {
  return (_get =
    'undefined' != typeof Reflect && Reflect.get
      ? Reflect.get
      : function (e, t, n) {
          var r = _superPropBase(e, t);
          if (r) {
            var i = Object.getOwnPropertyDescriptor(r, t);
            return i.get ? i.get.call(n) : i.value;
          }
        })(e, t, n || e);
}
function _superPropBase(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e)); );
  return e;
}
function _inherits(e, t) {
  if ('function' != typeof t && null !== t)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && _setPrototypeOf(e, t);
}
function _setPrototypeOf(e, t) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function _createSuper(e) {
  var t = _isNativeReflectConstruct();
  return function () {
    var n,
      r = _getPrototypeOf(e);
    if (t) {
      var i = _getPrototypeOf(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return _possibleConstructorReturn(this, n);
  };
}
function _possibleConstructorReturn(e, t) {
  return !t || ('object' != typeof t && 'function' != typeof t) ? _assertThisInitialized(e) : t;
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _isNativeReflectConstruct() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ('function' == typeof Proxy) return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
  } catch (e) {
    return !1;
  }
}
function _getPrototypeOf(e) {
  return (_getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
}
/*! For license information please see main-es2015.213b38b89c1d9930c882.js.LICENSE.txt */ (window.webpackJsonp =
  window.webpackJsonp || []).push([
  [1],
  {
    0: function (e, t, n) {
      e.exports = n('zUnb');
    },
    jfjY: function (e, t, n) {
      'use strict';
      (e.exports = a), (e.exports.isMobile = a), (e.exports.default = a);
      var r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
        i = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;
      function a(e) {
        e || (e = {});
        var t = e.ua;
        if (
          (t || 'undefined' == typeof navigator || (t = navigator.userAgent),
          t &&
            t.headers &&
            'string' == typeof t.headers['user-agent'] &&
            (t = t.headers['user-agent']),
          'string' != typeof t)
        )
          return !1;
        var n = e.tablet ? i.test(t) : r.test(t);
        return (
          !n &&
            e.tablet &&
            e.featureDetect &&
            navigator &&
            navigator.maxTouchPoints > 1 &&
            -1 !== t.indexOf('Macintosh') &&
            -1 !== t.indexOf('Safari') &&
            (n = !0),
          n
        );
      }
    },
    vT00: function (e, t, n) {
      var r, i, a;
      !(function (o) {
        if ('object' == typeof e.exports) {
          var l = o(0, t);
          void 0 !== l && (e.exports = l);
        } else
          (i = [n, t]),
            void 0 === (a = 'function' == typeof (r = o) ? r.apply(t, i) : r) || (e.exports = a);
      })(function (e, t) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = void 0;
        t.default = [
          'pt',
          [['AM', 'PM'], n, n],
          n,
          [
            ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
            ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 's\xe1b'],
            [
              'domingo',
              'segunda-feira',
              'ter\xe7a-feira',
              'quarta-feira',
              'quinta-feira',
              'sexta-feira',
              's\xe1bado',
            ],
            ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 's\xe1b'],
          ],
          n,
          [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
            [
              'janeiro',
              'fevereiro',
              'mar\xe7o',
              'abril',
              'maio',
              'junho',
              'julho',
              'agosto',
              'setembro',
              'outubro',
              'novembro',
              'dezembro',
            ],
          ],
          n,
          [['a.C.', 'd.C.'], n, ['antes de Cristo', 'depois de Cristo']],
          0,
          [6, 0],
          ['dd/MM/y', "d 'de' MMM 'de' y", "d 'de' MMMM 'de' y", "EEEE, d 'de' MMMM 'de' y"],
          ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
          ['{1} {0}', n, n, n],
          [',', '.', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
          ['#,##0.###', '#,##0%', '\xa4\xa0#,##0.00', '#E0'],
          'R$',
          'Real brasileiro',
          {
            AUD: ['AU$', '$'],
            JPY: ['JP\xa5', '\xa5'],
            PTE: ['Esc.'],
            RON: [n, 'L'],
            THB: ['\u0e3f'],
            TWD: ['NT$'],
            USD: ['US$', '$'],
          },
          function (e) {
            var t = Math.floor(Math.abs(e));
            return t === Math.floor(t) && t >= 0 && t <= 1 ? 1 : 5;
          },
        ];
      });
    },
    zUnb: function (e, t, n) {
      'use strict';
      function r(e) {
        return 'function' == typeof e;
      }
      n.r(t);
      var i = !1,
        a = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(e) {
            if (e) {
              var t = new Error();
              console.warn(
                'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' +
                  t.stack
              );
            } else i && console.log('RxJS: Back to a better error behavior. Thank you. <3');
            i = e;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return i;
          },
        };
      function o(e) {
        setTimeout(function () {
          throw e;
        });
      }
      var l = {
          closed: !0,
          next: function (e) {},
          error: function (e) {
            if (a.useDeprecatedSynchronousErrorHandling) throw e;
            o(e);
          },
          complete: function () {},
        },
        u =
          Array.isArray ||
          function (e) {
            return e && 'number' == typeof e.length;
          };
      function s(e) {
        return null !== e && 'object' == typeof e;
      }
      function c(e) {
        return (
          Error.call(this),
          (this.message = e
            ? ''.concat(e.length, ' errors occurred during unsubscription:\n').concat(
                e
                  .map(function (e, t) {
                    return ''.concat(t + 1, ') ').concat(e.toString());
                  })
                  .join('\n  ')
              )
            : ''),
          (this.name = 'UnsubscriptionError'),
          (this.errors = e),
          this
        );
      }
      c.prototype = Object.create(Error.prototype);
      var h,
        d = c,
        f =
          (((h = (function () {
            function e(t) {
              _classCallCheck(this, e),
                (this.closed = !1),
                (this._parent = null),
                (this._parents = null),
                (this._subscriptions = null),
                t && (this._unsubscribe = t);
            }
            return (
              _createClass(e, [
                {
                  key: 'unsubscribe',
                  value: function () {
                    var e,
                      t = !1;
                    if (!this.closed) {
                      var n = this._parent,
                        i = this._parents,
                        a = this._unsubscribe,
                        o = this._subscriptions;
                      (this.closed = !0),
                        (this._parent = null),
                        (this._parents = null),
                        (this._subscriptions = null);
                      for (var l = -1, c = i ? i.length : 0; n; )
                        n.remove(this), (n = (++l < c && i[l]) || null);
                      if (r(a))
                        try {
                          a.call(this);
                        } catch (f) {
                          (t = !0), (e = f instanceof d ? p(f.errors) : [f]);
                        }
                      if (u(o))
                        for (l = -1, c = o.length; ++l < c; ) {
                          var h = o[l];
                          if (s(h))
                            try {
                              h.unsubscribe();
                            } catch (f) {
                              (t = !0),
                                (e = e || []),
                                f instanceof d ? (e = e.concat(p(f.errors))) : e.push(f);
                            }
                        }
                      if (t) throw new d(e);
                    }
                  },
                },
                {
                  key: 'add',
                  value: function (t) {
                    var n = t;
                    switch (typeof t) {
                      case 'function':
                        n = new e(t);
                      case 'object':
                        if (n === this || n.closed || 'function' != typeof n.unsubscribe) return n;
                        if (this.closed) return n.unsubscribe(), n;
                        if (!(n instanceof e)) {
                          var r = n;
                          (n = new e())._subscriptions = [r];
                        }
                        break;
                      default:
                        if (!t) return e.EMPTY;
                        throw new Error('unrecognized teardown ' + t + ' added to Subscription.');
                    }
                    if (n._addParent(this)) {
                      var i = this._subscriptions;
                      i ? i.push(n) : (this._subscriptions = [n]);
                    }
                    return n;
                  },
                },
                {
                  key: 'remove',
                  value: function (e) {
                    var t = this._subscriptions;
                    if (t) {
                      var n = t.indexOf(e);
                      -1 !== n && t.splice(n, 1);
                    }
                  },
                },
                {
                  key: '_addParent',
                  value: function (e) {
                    var t = this._parent,
                      n = this._parents;
                    return (
                      t !== e &&
                      (t
                        ? n
                          ? -1 === n.indexOf(e) && (n.push(e), !0)
                          : ((this._parents = [e]), !0)
                        : ((this._parent = e), !0))
                    );
                  },
                },
              ]),
              e
            );
          })()).EMPTY = (function (e) {
            return (e.closed = !0), e;
          })(new h())),
          h);
      function p(e) {
        return e.reduce(function (e, t) {
          return e.concat(t instanceof d ? t.errors : t);
        }, []);
      }
      var v =
          'function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random(),
        g = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            switch (
              (_classCallCheck(this, n),
              ((a = t.call(this)).syncErrorValue = null),
              (a.syncErrorThrown = !1),
              (a.syncErrorThrowable = !1),
              (a.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                a.destination = l;
                break;
              case 1:
                if (!e) {
                  a.destination = l;
                  break;
                }
                if ('object' == typeof e) {
                  e instanceof n
                    ? ((a.syncErrorThrowable = e.syncErrorThrowable),
                      (a.destination = e),
                      e.add(_assertThisInitialized(a)))
                    : ((a.syncErrorThrowable = !0),
                      (a.destination = new m(_assertThisInitialized(a), e)));
                  break;
                }
              default:
                (a.syncErrorThrowable = !0),
                  (a.destination = new m(_assertThisInitialized(a), e, r, i));
            }
            return a;
          }
          return (
            _createClass(
              n,
              [
                {
                  key: v,
                  value: function () {
                    return this;
                  },
                },
                {
                  key: 'next',
                  value: function (e) {
                    this.isStopped || this._next(e);
                  },
                },
                {
                  key: 'error',
                  value: function (e) {
                    this.isStopped || ((this.isStopped = !0), this._error(e));
                  },
                },
                {
                  key: 'complete',
                  value: function () {
                    this.isStopped || ((this.isStopped = !0), this._complete());
                  },
                },
                {
                  key: 'unsubscribe',
                  value: function () {
                    this.closed ||
                      ((this.isStopped = !0),
                      _get(_getPrototypeOf(n.prototype), 'unsubscribe', this).call(this));
                  },
                },
                {
                  key: '_next',
                  value: function (e) {
                    this.destination.next(e);
                  },
                },
                {
                  key: '_error',
                  value: function (e) {
                    this.destination.error(e), this.unsubscribe();
                  },
                },
                {
                  key: '_complete',
                  value: function () {
                    this.destination.complete(), this.unsubscribe();
                  },
                },
                {
                  key: '_unsubscribeAndRecycle',
                  value: function () {
                    var e = this._parent,
                      t = this._parents;
                    return (
                      (this._parent = null),
                      (this._parents = null),
                      this.unsubscribe(),
                      (this.closed = !1),
                      (this.isStopped = !1),
                      (this._parent = e),
                      (this._parents = t),
                      this
                    );
                  },
                },
              ],
              [
                {
                  key: 'create',
                  value: function (e, t, r) {
                    var i = new n(e, t, r);
                    return (i.syncErrorThrowable = !1), i;
                  },
                },
              ]
            ),
            n
          );
        })(f),
        m = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, i, a, o) {
            var u, s;
            _classCallCheck(this, n), ((u = t.call(this))._parentSubscriber = e);
            var c = _assertThisInitialized(u);
            return (
              r(i)
                ? (s = i)
                : i &&
                  ((s = i.next),
                  (a = i.error),
                  (o = i.complete),
                  i !== l &&
                    (r((c = Object.create(i)).unsubscribe) && u.add(c.unsubscribe.bind(c)),
                    (c.unsubscribe = u.unsubscribe.bind(_assertThisInitialized(u))))),
              (u._context = c),
              (u._next = s),
              (u._error = a),
              (u._complete = o),
              u
            );
          }
          return (
            _createClass(n, [
              {
                key: 'next',
                value: function (e) {
                  if (!this.isStopped && this._next) {
                    var t = this._parentSubscriber;
                    a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                      ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
                      : this.__tryOrUnsub(this._next, e);
                  }
                },
              },
              {
                key: 'error',
                value: function (e) {
                  if (!this.isStopped) {
                    var t = this._parentSubscriber,
                      n = a.useDeprecatedSynchronousErrorHandling;
                    if (this._error)
                      n && t.syncErrorThrowable
                        ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe())
                        : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                    else if (t.syncErrorThrowable)
                      n ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0)) : o(e),
                        this.unsubscribe();
                    else {
                      if ((this.unsubscribe(), n)) throw e;
                      o(e);
                    }
                  }
                },
              },
              {
                key: 'complete',
                value: function () {
                  var e = this;
                  if (!this.isStopped) {
                    var t = this._parentSubscriber;
                    if (this._complete) {
                      var n = function () {
                        return e._complete.call(e._context);
                      };
                      a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                        ? (this.__tryOrSetError(t, n), this.unsubscribe())
                        : (this.__tryOrUnsub(n), this.unsubscribe());
                    } else this.unsubscribe();
                  }
                },
              },
              {
                key: '__tryOrUnsub',
                value: function (e, t) {
                  try {
                    e.call(this._context, t);
                  } catch (n) {
                    if ((this.unsubscribe(), a.useDeprecatedSynchronousErrorHandling)) throw n;
                    o(n);
                  }
                },
              },
              {
                key: '__tryOrSetError',
                value: function (e, t, n) {
                  if (!a.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
                  try {
                    t.call(this._context, n);
                  } catch (r) {
                    return a.useDeprecatedSynchronousErrorHandling
                      ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
                      : (o(r), !0);
                  }
                  return !1;
                },
              },
              {
                key: '_unsubscribe',
                value: function () {
                  var e = this._parentSubscriber;
                  (this._context = null), (this._parentSubscriber = null), e.unsubscribe();
                },
              },
            ]),
            n
          );
        })(g),
        y = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      function _() {}
      function C() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return k(t);
      }
      function k(e) {
        return e
          ? 1 === e.length
            ? e[0]
            : function (t) {
                return e.reduce(function (e, t) {
                  return t(e);
                }, t);
              }
          : _;
      }
      var b,
        w =
          (((b = (function () {
            function e(t) {
              _classCallCheck(this, e), (this._isScalar = !1), t && (this._subscribe = t);
            }
            return (
              _createClass(e, [
                {
                  key: 'lift',
                  value: function (t) {
                    var n = new e();
                    return (n.source = this), (n.operator = t), n;
                  },
                },
                {
                  key: 'subscribe',
                  value: function (e, t, n) {
                    var r = this.operator,
                      i = (function (e, t, n) {
                        if (e) {
                          if (e instanceof g) return e;
                          if (e[v]) return e[v]();
                        }
                        return e || t || n ? new g(e, t, n) : new g(l);
                      })(e, t, n);
                    if (
                      (i.add(
                        r
                          ? r.call(i, this.source)
                          : this.source ||
                            (a.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable)
                          ? this._subscribe(i)
                          : this._trySubscribe(i)
                      ),
                      a.useDeprecatedSynchronousErrorHandling &&
                        i.syncErrorThrowable &&
                        ((i.syncErrorThrowable = !1), i.syncErrorThrown))
                    )
                      throw i.syncErrorValue;
                    return i;
                  },
                },
                {
                  key: '_trySubscribe',
                  value: function (e) {
                    try {
                      return this._subscribe(e);
                    } catch (t) {
                      a.useDeprecatedSynchronousErrorHandling &&
                        ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                        (function (e) {
                          for (; e; ) {
                            var t = e,
                              n = t.closed,
                              r = t.destination,
                              i = t.isStopped;
                            if (n || i) return !1;
                            e = r && r instanceof g ? r : null;
                          }
                          return !0;
                        })(e)
                          ? e.error(t)
                          : console.warn(t);
                    }
                  },
                },
                {
                  key: 'forEach',
                  value: function (e, t) {
                    var n = this;
                    return new (t = x(t))(function (t, r) {
                      var i;
                      i = n.subscribe(
                        function (t) {
                          try {
                            e(t);
                          } catch (n) {
                            r(n), i && i.unsubscribe();
                          }
                        },
                        r,
                        t
                      );
                    });
                  },
                },
                {
                  key: '_subscribe',
                  value: function (e) {
                    var t = this.source;
                    return t && t.subscribe(e);
                  },
                },
                {
                  key: y,
                  value: function () {
                    return this;
                  },
                },
                {
                  key: 'pipe',
                  value: function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                      t[n] = arguments[n];
                    return 0 === t.length ? this : k(t)(this);
                  },
                },
                {
                  key: 'toPromise',
                  value: function (e) {
                    var t = this;
                    return new (e = x(e))(function (e, n) {
                      var r;
                      t.subscribe(
                        function (e) {
                          return (r = e);
                        },
                        function (e) {
                          return n(e);
                        },
                        function () {
                          return e(r);
                        }
                      );
                    });
                  },
                },
              ]),
              e
            );
          })()).create = function (e) {
            return new b(e);
          }),
          b);
      function x(e) {
        if ((e || (e = a.Promise || Promise), !e)) throw new Error('no Promise impl found');
        return e;
      }
      function S() {
        return (
          Error.call(this),
          (this.message = 'object unsubscribed'),
          (this.name = 'ObjectUnsubscribedError'),
          this
        );
      }
      S.prototype = Object.create(Error.prototype);
      var E,
        T = S,
        P = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this)).subject = e),
              (i.subscriber = r),
              (i.closed = !1),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: 'unsubscribe',
                value: function () {
                  if (!this.closed) {
                    this.closed = !0;
                    var e = this.subject,
                      t = e.observers;
                    if (((this.subject = null), t && 0 !== t.length && !e.isStopped && !e.closed)) {
                      var n = t.indexOf(this.subscriber);
                      -1 !== n && t.splice(n, 1);
                    }
                  }
                },
              },
            ]),
            n
          );
        })(f),
        A = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e) {
            var r;
            return _classCallCheck(this, n), ((r = t.call(this, e)).destination = e), r;
          }
          return n;
        })(g),
        R =
          (((E = (function (e) {
            _inherits(n, e);
            var t = _createSuper(n);
            function n() {
              var e;
              return (
                _classCallCheck(this, n),
                ((e = t.call(this)).observers = []),
                (e.closed = !1),
                (e.isStopped = !1),
                (e.hasError = !1),
                (e.thrownError = null),
                e
              );
            }
            return (
              _createClass(n, [
                {
                  key: v,
                  value: function () {
                    return new A(this);
                  },
                },
                {
                  key: 'lift',
                  value: function (e) {
                    var t = new I(this, this);
                    return (t.operator = e), t;
                  },
                },
                {
                  key: 'next',
                  value: function (e) {
                    if (this.closed) throw new T();
                    if (!this.isStopped)
                      for (var t = this.observers, n = t.length, r = t.slice(), i = 0; i < n; i++)
                        r[i].next(e);
                  },
                },
                {
                  key: 'error',
                  value: function (e) {
                    if (this.closed) throw new T();
                    (this.hasError = !0), (this.thrownError = e), (this.isStopped = !0);
                    for (var t = this.observers, n = t.length, r = t.slice(), i = 0; i < n; i++)
                      r[i].error(e);
                    this.observers.length = 0;
                  },
                },
                {
                  key: 'complete',
                  value: function () {
                    if (this.closed) throw new T();
                    this.isStopped = !0;
                    for (var e = this.observers, t = e.length, n = e.slice(), r = 0; r < t; r++)
                      n[r].complete();
                    this.observers.length = 0;
                  },
                },
                {
                  key: 'unsubscribe',
                  value: function () {
                    (this.isStopped = !0), (this.closed = !0), (this.observers = null);
                  },
                },
                {
                  key: '_trySubscribe',
                  value: function (e) {
                    if (this.closed) throw new T();
                    return _get(_getPrototypeOf(n.prototype), '_trySubscribe', this).call(this, e);
                  },
                },
                {
                  key: '_subscribe',
                  value: function (e) {
                    if (this.closed) throw new T();
                    return this.hasError
                      ? (e.error(this.thrownError), f.EMPTY)
                      : this.isStopped
                      ? (e.complete(), f.EMPTY)
                      : (this.observers.push(e), new P(this, e));
                  },
                },
                {
                  key: 'asObservable',
                  value: function () {
                    var e = new w();
                    return (e.source = this), e;
                  },
                },
              ]),
              n
            );
          })(w)).create = function (e, t) {
            return new I(e, t);
          }),
          E),
        I = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n), ((i = t.call(this)).destination = e), (i.source = r), i
            );
          }
          return (
            _createClass(n, [
              {
                key: 'next',
                value: function (e) {
                  var t = this.destination;
                  t && t.next && t.next(e);
                },
              },
              {
                key: 'error',
                value: function (e) {
                  var t = this.destination;
                  t && t.error && this.destination.error(e);
                },
              },
              {
                key: 'complete',
                value: function () {
                  var e = this.destination;
                  e && e.complete && this.destination.complete();
                },
              },
              {
                key: '_subscribe',
                value: function (e) {
                  return this.source ? this.source.subscribe(e) : f.EMPTY;
                },
              },
            ]),
            n
          );
        })(R);
      function O(e) {
        return e && 'function' == typeof e.schedule;
      }
      var D = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return (
              _classCallCheck(this, n),
              ((a = t.call(this)).parent = e),
              (a.outerValue = r),
              (a.outerIndex = i),
              (a.index = 0),
              a
            );
          }
          return (
            _createClass(n, [
              {
                key: '_next',
                value: function (e) {
                  this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this);
                },
              },
              {
                key: '_error',
                value: function (e) {
                  this.parent.notifyError(e, this), this.unsubscribe();
                },
              },
              {
                key: '_complete',
                value: function () {
                  this.parent.notifyComplete(this), this.unsubscribe();
                },
              },
            ]),
            n
          );
        })(g),
        V = function (e) {
          return function (t) {
            for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
            t.closed || t.complete();
          };
        },
        M = function (e) {
          return function (t) {
            return (
              e
                .then(
                  function (e) {
                    t.closed || (t.next(e), t.complete());
                  },
                  function (e) {
                    return t.error(e);
                  }
                )
                .then(null, o),
              t
            );
          };
        };
      var N = 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator',
        L = function (e) {
          return function (t) {
            for (var n = e[N](); ; ) {
              var r = n.next();
              if (r.done) {
                t.complete();
                break;
              }
              if ((t.next(r.value), t.closed)) break;
            }
            return (
              'function' == typeof n.return &&
                t.add(function () {
                  n.return && n.return();
                }),
              t
            );
          };
        },
        F = function (e) {
          return function (t) {
            var n = e[y]();
            if ('function' != typeof n.subscribe)
              throw new TypeError('Provided object does not correctly implement Symbol.observable');
            return n.subscribe(t);
          };
        },
        U = function (e) {
          return e && 'number' == typeof e.length && 'function' != typeof e;
        };
      function j(e) {
        return !!e && 'function' != typeof e.subscribe && 'function' == typeof e.then;
      }
      var H = function (e) {
        if (e instanceof w)
          return function (t) {
            return e._isScalar ? (t.next(e.value), void t.complete()) : e.subscribe(t);
          };
        if (e && 'function' == typeof e[y]) return F(e);
        if (U(e)) return V(e);
        if (j(e)) return M(e);
        if (e && 'function' == typeof e[N]) return L(e);
        var t = s(e) ? 'an invalid object' : "'".concat(e, "'");
        throw new TypeError(
          'You provided '.concat(
            t,
            ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.'
          )
        );
      };
      function z(e, t, n, r) {
        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new D(e, n, r);
        if (!i.closed) return H(t)(i);
      }
      var B = (function (e) {
        _inherits(n, e);
        var t = _createSuper(n);
        function n() {
          return _classCallCheck(this, n), t.apply(this, arguments);
        }
        return (
          _createClass(n, [
            {
              key: 'notifyNext',
              value: function (e, t, n, r, i) {
                this.destination.next(t);
              },
            },
            {
              key: 'notifyError',
              value: function (e, t) {
                this.destination.error(e);
              },
            },
            {
              key: 'notifyComplete',
              value: function (e) {
                this.destination.complete();
              },
            },
          ]),
          n
        );
      })(g);
      function q(e, t) {
        return function (n) {
          if ('function' != typeof e)
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          return n.lift(new G(e, t));
        };
      }
      var G = (function () {
          function e(t, n) {
            _classCallCheck(this, e), (this.project = t), (this.thisArg = n);
          }
          return (
            _createClass(e, [
              {
                key: 'call',
                value: function (e, t) {
                  return t.subscribe(new $(e, this.project, this.thisArg));
                },
              },
            ]),
            e
          );
        })(),
        $ = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return (
              _classCallCheck(this, n),
              ((a = t.call(this, e)).project = r),
              (a.count = 0),
              (a.thisArg = i || _assertThisInitialized(a)),
              a
            );
          }
          return (
            _createClass(n, [
              {
                key: '_next',
                value: function (e) {
                  var t;
                  try {
                    t = this.project.call(this.thisArg, e, this.count++);
                  } catch (n) {
                    return void this.destination.error(n);
                  }
                  this.destination.next(t);
                },
              },
            ]),
            n
          );
        })(g);
      function W(e, t) {
        return new w(
          t
            ? function (n) {
                var r = new f(),
                  i = 0;
                return (
                  r.add(
                    t.schedule(function () {
                      i !== e.length
                        ? (n.next(e[i++]), n.closed || r.add(this.schedule()))
                        : n.complete();
                    })
                  ),
                  r
                );
              }
            : V(e)
        );
      }
      function Z(e, t) {
        if (!t) return e instanceof w ? e : new w(H(e));
        if (null != e) {
          if (
            (function (e) {
              return e && 'function' == typeof e[y];
            })(e)
          )
            return (function (e, t) {
              return new w(
                t
                  ? function (n) {
                      var r = new f();
                      return (
                        r.add(
                          t.schedule(function () {
                            var i = e[y]();
                            r.add(
                              i.subscribe({
                                next: function (e) {
                                  r.add(
                                    t.schedule(function () {
                                      return n.next(e);
                                    })
                                  );
                                },
                                error: function (e) {
                                  r.add(
                                    t.schedule(function () {
                                      return n.error(e);
                                    })
                                  );
                                },
                                complete: function () {
                                  r.add(
                                    t.schedule(function () {
                                      return n.complete();
                                    })
                                  );
                                },
                              })
                            );
                          })
                        ),
                        r
                      );
                    }
                  : F(e)
              );
            })(e, t);
          if (j(e))
            return (function (e, t) {
              return new w(
                t
                  ? function (n) {
                      var r = new f();
                      return (
                        r.add(
                          t.schedule(function () {
                            return e.then(
                              function (e) {
                                r.add(
                                  t.schedule(function () {
                                    n.next(e),
                                      r.add(
                                        t.schedule(function () {
                                          return n.complete();
                                        })
                                      );
                                  })
                                );
                              },
                              function (e) {
                                r.add(
                                  t.schedule(function () {
                                    return n.error(e);
                                  })
                                );
                              }
                            );
                          })
                        ),
                        r
                      );
                    }
                  : M(e)
              );
            })(e, t);
          if (U(e)) return W(e, t);
          if (
            (function (e) {
              return e && 'function' == typeof e[N];
            })(e) ||
            'string' == typeof e
          )
            return (function (e, t) {
              if (!e) throw new Error('Iterable cannot be null');
              return new w(
                t
                  ? function (n) {
                      var r,
                        i = new f();
                      return (
                        i.add(function () {
                          r && 'function' == typeof r.return && r.return();
                        }),
                        i.add(
                          t.schedule(function () {
                            (r = e[N]()),
                              i.add(
                                t.schedule(function () {
                                  if (!n.closed) {
                                    var e, t;
                                    try {
                                      var i = r.next();
                                      (e = i.value), (t = i.done);
                                    } catch (a) {
                                      return void n.error(a);
                                    }
                                    t ? n.complete() : (n.next(e), this.schedule());
                                  }
                                })
                              );
                          })
                        ),
                        i
                      );
                    }
                  : L(e)
              );
            })(e, t);
        }
        throw new TypeError(((null !== e && typeof e) || e) + ' is not observable');
      }
      function K(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.POSITIVE_INFINITY;
        return 'function' == typeof t
          ? function (r) {
              return r.pipe(
                K(function (n, r) {
                  return Z(e(n, r)).pipe(
                    q(function (e, i) {
                      return t(n, e, r, i);
                    })
                  );
                }, n)
              );
            }
          : ('number' == typeof t && (n = t),
            function (t) {
              return t.lift(new Q(e, n));
            });
      }
      var Q = (function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Number.POSITIVE_INFINITY;
            _classCallCheck(this, e), (this.project = t), (this.concurrent = n);
          }
          return (
            _createClass(e, [
              {
                key: 'call',
                value: function (e, t) {
                  return t.subscribe(new Y(e, this.project, this.concurrent));
                },
              },
            ]),
            e
          );
        })(),
        Y = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i,
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : Number.POSITIVE_INFINITY;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this, e)).project = r),
              (i.concurrent = a),
              (i.hasCompleted = !1),
              (i.buffer = []),
              (i.active = 0),
              (i.index = 0),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: '_next',
                value: function (e) {
                  this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e);
                },
              },
              {
                key: '_tryNext',
                value: function (e) {
                  var t,
                    n = this.index++;
                  try {
                    t = this.project(e, n);
                  } catch (r) {
                    return void this.destination.error(r);
                  }
                  this.active++, this._innerSub(t, e, n);
                },
              },
              {
                key: '_innerSub',
                value: function (e, t, n) {
                  var r = new D(this, void 0, void 0);
                  this.destination.add(r), z(this, e, t, n, r);
                },
              },
              {
                key: '_complete',
                value: function () {
                  (this.hasCompleted = !0),
                    0 === this.active && 0 === this.buffer.length && this.destination.complete(),
                    this.unsubscribe();
                },
              },
              {
                key: 'notifyNext',
                value: function (e, t, n, r, i) {
                  this.destination.next(t);
                },
              },
              {
                key: 'notifyComplete',
                value: function (e) {
                  var t = this.buffer;
                  this.remove(e),
                    this.active--,
                    t.length > 0
                      ? this._next(t.shift())
                      : 0 === this.active && this.hasCompleted && this.destination.complete();
                },
              },
            ]),
            n
          );
        })(B);
      function J(e) {
        return e;
      }
      function X() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Number.POSITIVE_INFINITY;
        return K(J, e);
      }
      function ee() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var r = Number.POSITIVE_INFINITY,
          i = null,
          a = t[t.length - 1];
        return (
          O(a)
            ? ((i = t.pop()), t.length > 1 && 'number' == typeof t[t.length - 1] && (r = t.pop()))
            : 'number' == typeof a && (r = t.pop()),
          null === i && 1 === t.length && t[0] instanceof w ? t[0] : X(r)(W(t, i))
        );
      }
      function te() {
        return function (e) {
          return e.lift(new ne(e));
        };
      }
      var ne = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.connectable = t);
          }
          return (
            _createClass(e, [
              {
                key: 'call',
                value: function (e, t) {
                  var n = this.connectable;
                  n._refCount++;
                  var r = new re(e, n),
                    i = t.subscribe(r);
                  return r.closed || (r.connection = n.connect()), i;
                },
              },
            ]),
            e
          );
        })(),
        re = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return _classCallCheck(this, n), ((i = t.call(this, e)).connectable = r), i;
          }
          return (
            _createClass(n, [
              {
                key: '_unsubscribe',
                value: function () {
                  var e = this.connectable;
                  if (e) {
                    this.connectable = null;
                    var t = e._refCount;
                    if (t <= 0) this.connection = null;
                    else if (((e._refCount = t - 1), t > 1)) this.connection = null;
                    else {
                      var n = this.connection,
                        r = e._connection;
                      (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
                    }
                  } else this.connection = null;
                },
              },
            ]),
            n
          );
        })(g),
        ie = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this)).source = e),
              (i.subjectFactory = r),
              (i._refCount = 0),
              (i._isComplete = !1),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: '_subscribe',
                value: function (e) {
                  return this.getSubject().subscribe(e);
                },
              },
              {
                key: 'getSubject',
                value: function () {
                  var e = this._subject;
                  return (
                    (e && !e.isStopped) || (this._subject = this.subjectFactory()), this._subject
                  );
                },
              },
              {
                key: 'connect',
                value: function () {
                  var e = this._connection;
                  return (
                    e ||
                      ((this._isComplete = !1),
                      (e = this._connection = new f()).add(
                        this.source.subscribe(new oe(this.getSubject(), this))
                      ),
                      e.closed
                        ? ((this._connection = null), (e = f.EMPTY))
                        : (this._connection = e)),
                    e
                  );
                },
              },
              {
                key: 'refCount',
                value: function () {
                  return te()(this);
                },
              },
            ]),
            n
          );
        })(w).prototype,
        ae = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: ie._subscribe },
          _isComplete: { value: ie._isComplete, writable: !0 },
          getSubject: { value: ie.getSubject },
          connect: { value: ie.connect },
          refCount: { value: ie.refCount },
        },
        oe = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return _classCallCheck(this, n), ((i = t.call(this, e)).connectable = r), i;
          }
          return (
            _createClass(n, [
              {
                key: '_error',
                value: function (e) {
                  this._unsubscribe(),
                    _get(_getPrototypeOf(n.prototype), '_error', this).call(this, e);
                },
              },
              {
                key: '_complete',
                value: function () {
                  (this.connectable._isComplete = !0),
                    this._unsubscribe(),
                    _get(_getPrototypeOf(n.prototype), '_complete', this).call(this);
                },
              },
              {
                key: '_unsubscribe',
                value: function () {
                  var e = this.connectable;
                  if (e) {
                    this.connectable = null;
                    var t = e._connection;
                    (e._refCount = 0),
                      (e._subject = null),
                      (e._connection = null),
                      t && t.unsubscribe();
                  }
                },
              },
            ]),
            n
          );
        })(A);
      function le() {
        return new R();
      }
      function ue(e, t, n) {
        var r = (function (e) {
          return function () {
            if (e) {
              var t = e.apply(void 0, arguments);
              for (var n in t) this[n] = t[n];
            }
          };
        })(t);
        function i() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          if (this instanceof i) return r.apply(this, t), this;
          var a = _construct(i, t);
          return (o.annotation = a), o;
          function o(e, t, n) {
            for (
              var r = e.hasOwnProperty('__parameters__')
                ? e.__parameters__
                : Object.defineProperty(e, '__parameters__', { value: [] }).__parameters__;
              r.length <= n;

            )
              r.push(null);
            return (r[n] = r[n] || []).push(a), e;
          }
        }
        return (
          n && (i.prototype = Object.create(n.prototype)),
          (i.prototype.ngMetadataName = e),
          (i.annotationCls = i),
          i
        );
      }
      var se = ue('Inject', function (e) {
          return { token: e };
        }),
        ce = ue('Optional'),
        he = ue('Self'),
        de = ue('SkipSelf'),
        fe = (function (e) {
          return (
            (e[(e.Default = 0)] = 'Default'),
            (e[(e.Host = 1)] = 'Host'),
            (e[(e.Self = 2)] = 'Self'),
            (e[(e.SkipSelf = 4)] = 'SkipSelf'),
            (e[(e.Optional = 8)] = 'Optional'),
            e
          );
        })({});
      function pe(e) {
        for (var t in e) if (e[t] === pe) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function ve(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function ge(e) {
        var t = e[me];
        return t && t.token === e ? t : null;
      }
      var me = pe({ ngInjectableDef: pe });
      function ye(e) {
        if ('string' == typeof e) return e;
        if (e instanceof Array) return '[' + e.map(ye).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return '' + e.overriddenName;
        if (e.name) return '' + e.name;
        var t = e.toString();
        if (null == t) return '' + t;
        var n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      var _e = pe({ __forward_ref__: pe });
      function Ce(e) {
        return (
          (e.__forward_ref__ = Ce),
          (e.toString = function () {
            return ye(this());
          }),
          e
        );
      }
      function ke(e) {
        var t = e;
        return 'function' == typeof t && t.hasOwnProperty(_e) && t.__forward_ref__ === Ce ? t() : e;
      }
      var be = 'undefined' != typeof globalThis && globalThis,
        we = 'undefined' != typeof window && window,
        xe =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        Se = 'undefined' != typeof global && global,
        Ee = be || Se || we || xe,
        Te = (function () {
          function e(t, n) {
            _classCallCheck(this, e),
              (this._desc = t),
              (this.ngMetadataName = 'InjectionToken'),
              (this.ngInjectableDef = void 0),
              'number' == typeof n
                ? (this.__NG_ELEMENT_ID__ = n)
                : void 0 !== n &&
                  (this.ngInjectableDef = ve({
                    token: this,
                    providedIn: n.providedIn || 'root',
                    factory: n.factory,
                  }));
          }
          return (
            _createClass(e, [
              {
                key: 'toString',
                value: function () {
                  return 'InjectionToken ' + this._desc;
                },
              },
            ]),
            e
          );
        })(),
        Pe = new Te('INJECTOR', -1),
        Ae = new Object(),
        Re = /\n/gm,
        Ie = pe({ provide: String, useValue: pe }),
        Oe = void 0;
      function De(e) {
        var t = Oe;
        return (Oe = e), t;
      }
      function Ve(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fe.Default;
        return (function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fe.Default;
          if (void 0 === Oe) throw new Error('inject() must be called from an injection context');
          return null === Oe
            ? (function (e, t, n) {
                var r = ge(e);
                if (r && 'root' == r.providedIn)
                  return void 0 === r.value ? (r.value = r.factory()) : r.value;
                if (n & fe.Optional) return null;
                throw new Error('Injector: NOT_FOUND ['.concat(ye(e), ']'));
              })(e, 0, t)
            : Oe.get(e, t & fe.Optional ? null : void 0, t);
        })(e, t);
      }
      var Me = (function () {
        function e() {
          _classCallCheck(this, e);
        }
        return (
          _createClass(e, [
            {
              key: 'get',
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ae;
                if (t === Ae) {
                  var n = new Error('NullInjectorError: No provider for '.concat(ye(e), '!'));
                  throw ((n.name = 'NullInjectorError'), n);
                }
                return t;
              },
            },
          ]),
          e
        );
      })();
      function Ne(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        e = e && '\n' === e.charAt(0) && '\u0275' == e.charAt(1) ? e.substr(2) : e;
        var i = ye(t);
        if (t instanceof Array) i = t.map(ye).join(' -> ');
        else if ('object' == typeof t) {
          var a = [];
          for (var o in t)
            if (t.hasOwnProperty(o)) {
              var l = t[o];
              a.push(o + ':' + ('string' == typeof l ? JSON.stringify(l) : ye(l)));
            }
          i = '{'.concat(a.join(', '), '}');
        }
        return ''
          .concat(n)
          .concat(r ? '(' + r + ')' : '', '[')
          .concat(i, ']: ')
          .concat(e.replace(Re, '\n  '));
      }
      var Le = new Te('The presence of this token marks an injector as being the root injector.'),
        Fe = function (e, t, n) {
          return new qe(e, t, n);
        },
        Ue = (function () {
          var e = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, null, [
                {
                  key: 'create',
                  value: function (e, t) {
                    return Array.isArray(e)
                      ? Fe(e, t, '')
                      : Fe(e.providers, e.parent, e.name || '');
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.THROW_IF_NOT_FOUND = Ae),
            (e.NULL = new Me()),
            (e.ngInjectableDef = ve({
              token: e,
              providedIn: 'any',
              factory: function () {
                return Ve(Pe);
              },
            })),
            (e.__NG_ELEMENT_ID__ = -1),
            e
          );
        })(),
        je = function (e) {
          return e;
        },
        He = [],
        ze = je,
        Be = function () {
          return Array.prototype.slice.call(arguments);
        },
        qe = (function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ue.NULL,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            _classCallCheck(this, e), (this.parent = n), (this.source = r);
            var i = (this._records = new Map());
            i.set(Ue, { token: Ue, fn: je, deps: He, value: this, useNew: !1 }),
              i.set(Pe, { token: Pe, fn: je, deps: He, value: this, useNew: !1 }),
              (function e(t, n) {
                if (n)
                  if ((n = ke(n)) instanceof Array) for (var r = 0; r < n.length; r++) e(t, n[r]);
                  else {
                    if ('function' == typeof n) throw $e('Function/Class not supported', n);
                    if (!n || 'object' != typeof n || !n.provide)
                      throw $e('Unexpected provider', n);
                    var i = ke(n.provide),
                      a = (function (e) {
                        var t = (function (e) {
                            var t = He,
                              n = e.deps;
                            if (n && n.length) {
                              t = [];
                              for (var r = 0; r < n.length; r++) {
                                var i = 6,
                                  a = ke(n[r]);
                                if (a instanceof Array)
                                  for (var o = 0, l = a; o < l.length; o++) {
                                    var u = l[o];
                                    u instanceof ce || u == ce
                                      ? (i |= 1)
                                      : u instanceof de || u == de
                                      ? (i &= -3)
                                      : u instanceof he || u == he
                                      ? (i &= -5)
                                      : (a = u instanceof se ? u.token : ke(u));
                                  }
                                t.push({ token: a, options: i });
                              }
                            } else if (e.useExisting)
                              t = [{ token: ke(e.useExisting), options: 6 }];
                            else if (!(n || Ie in e)) throw $e("'deps' required", e);
                            return t;
                          })(e),
                          n = je,
                          r = He,
                          i = !1,
                          a = ke(e.provide);
                        if (Ie in e) r = e.useValue;
                        else if (e.useFactory) n = e.useFactory;
                        else if (e.useExisting);
                        else if (e.useClass) (i = !0), (n = ke(e.useClass));
                        else {
                          if ('function' != typeof a)
                            throw $e(
                              'StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable',
                              e
                            );
                          (i = !0), (n = a);
                        }
                        return { deps: t, fn: n, useNew: i, value: r };
                      })(n);
                    if (!0 === n.multi) {
                      var o = t.get(i);
                      if (o) {
                        if (o.fn !== Be) throw Ge(i);
                      } else
                        t.set(
                          i,
                          (o = { token: n.provide, deps: [], useNew: !1, fn: Be, value: He })
                        );
                      (i = n), o.deps.push({ token: i, options: 6 });
                    }
                    var l = t.get(i);
                    if (l && l.fn == Be) throw Ge(i);
                    t.set(i, a);
                  }
              })(i, t);
          }
          return (
            _createClass(e, [
              {
                key: 'get',
                value: function (e, t) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fe.Default,
                    r = this._records.get(e);
                  try {
                    return (function e(t, n, r, i, a, o) {
                      try {
                        return (function (t, n, r, i, a, o) {
                          var l;
                          if (!n || o & fe.SkipSelf) o & fe.Self || (l = i.get(t, a, fe.Default));
                          else {
                            if ((l = n.value) == ze) throw Error('\u0275Circular dependency');
                            if (l === He) {
                              n.value = ze;
                              var u = n.useNew,
                                s = n.fn,
                                c = n.deps,
                                h = He;
                              if (c.length) {
                                h = [];
                                for (var d = 0; d < c.length; d++) {
                                  var f = c[d],
                                    p = f.options,
                                    v = 2 & p ? r.get(f.token) : void 0;
                                  h.push(
                                    e(
                                      f.token,
                                      v,
                                      r,
                                      v || 4 & p ? i : Ue.NULL,
                                      1 & p ? null : Ue.THROW_IF_NOT_FOUND,
                                      fe.Default
                                    )
                                  );
                                }
                              }
                              n.value = l = u
                                ? _construct(s, _toConsumableArray(h))
                                : s.apply(void 0, h);
                            }
                          }
                          return l;
                        })(t, n, r, i, a, o);
                      } catch (l) {
                        throw (
                          (l instanceof Error || (l = new Error(l)),
                          (l.ngTempTokenPath = l.ngTempTokenPath || []).unshift(t),
                          n && n.value == ze && (n.value = He),
                          l)
                        );
                      }
                    })(e, r, this._records, this.parent, t, n);
                  } catch (i) {
                    return (function (e, t, n, r) {
                      var i = e.ngTempTokenPath;
                      throw (
                        (t.__source && i.unshift(t.__source),
                        (e.message = Ne('\n' + e.message, i, 'StaticInjectorError', r)),
                        (e.ngTokenPath = i),
                        (e.ngTempTokenPath = null),
                        e)
                      );
                    })(i, e, 0, this.source);
                  }
                },
              },
              {
                key: 'toString',
                value: function () {
                  var e = [];
                  return (
                    this._records.forEach(function (t, n) {
                      return e.push(ye(n));
                    }),
                    'StaticInjector['.concat(e.join(', '), ']')
                  );
                },
              },
            ]),
            e
          );
        })();
      function Ge(e) {
        return $e('Cannot mix multi providers and regular providers', e);
      }
      function $e(e, t) {
        return new Error(Ne(e, t, 'StaticInjectorError'));
      }
      var We = new Te('AnalyzeForEntryComponents'),
        Ze = (function () {
          var e = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (e[e.Emulated] = 'Emulated'),
            (e[e.Native] = 'Native'),
            (e[e.None] = 'None'),
            (e[e.ShadowDom] = 'ShadowDom'),
            e
          );
        })(),
        Ke = (
          ('undefined' != typeof requestAnimationFrame && requestAnimationFrame) ||
          setTimeout
        ).bind(Ee),
        Qe = !0,
        Ye = !1;
      function Je() {
        return (Ye = !0), Qe;
      }
      var Xe = (function () {
          function e(t) {
            if (
              (_classCallCheck(this, e),
              (this.defaultDoc = t),
              (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
                'sanitization-inert'
              )),
              (this.inertBodyElement = this.inertDocument.body),
              null == this.inertBodyElement)
            ) {
              var n = this.inertDocument.createElement('html');
              this.inertDocument.appendChild(n),
                (this.inertBodyElement = this.inertDocument.createElement('body')),
                n.appendChild(this.inertBodyElement);
            }
            (this.inertBodyElement.innerHTML =
              '<svg><g onload="this.parentNode.remove()"></g></svg>'),
              !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector('svg')
                ? ((this.inertBodyElement.innerHTML =
                    '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                  (this.getInertBodyElement =
                    this.inertBodyElement.querySelector &&
                    this.inertBodyElement.querySelector('svg img') &&
                    (function () {
                      try {
                        return !!window.DOMParser;
                      } catch (e) {
                        return !1;
                      }
                    })()
                      ? this.getInertBodyElement_DOMParser
                      : this.getInertBodyElement_InertDocument))
                : (this.getInertBodyElement = this.getInertBodyElement_XHR);
          }
          return (
            _createClass(e, [
              {
                key: 'getInertBodyElement_XHR',
                value: function (e) {
                  e = '<body><remove></remove>' + e + '</body>';
                  try {
                    e = encodeURI(e);
                  } catch (r) {
                    return null;
                  }
                  var t = new XMLHttpRequest();
                  (t.responseType = 'document'),
                    t.open('GET', 'data:text/html;charset=utf-8,' + e, !1),
                    t.send(void 0);
                  var n = t.response.body;
                  return n.removeChild(n.firstChild), n;
                },
              },
              {
                key: 'getInertBodyElement_DOMParser',
                value: function (e) {
                  e = '<body><remove></remove>' + e + '</body>';
                  try {
                    var t = new window.DOMParser().parseFromString(e, 'text/html').body;
                    return t.removeChild(t.firstChild), t;
                  } catch (n) {
                    return null;
                  }
                },
              },
              {
                key: 'getInertBodyElement_InertDocument',
                value: function (e) {
                  var t = this.inertDocument.createElement('template');
                  return 'content' in t
                    ? ((t.innerHTML = e), t)
                    : ((this.inertBodyElement.innerHTML = e),
                      this.defaultDoc.documentMode &&
                        this.stripCustomNsAttrs(this.inertBodyElement),
                      this.inertBodyElement);
                },
              },
              {
                key: 'stripCustomNsAttrs',
                value: function (e) {
                  for (var t = e.attributes, n = t.length - 1; 0 < n; n--) {
                    var r = t.item(n).name;
                    ('xmlns:ns1' !== r && 0 !== r.indexOf('ns1:')) || e.removeAttribute(r);
                  }
                  for (var i = e.firstChild; i; )
                    i.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(i),
                      (i = i.nextSibling);
                },
              },
            ]),
            e
          );
        })(),
        et = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        tt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function nt(e) {
        return (e = String(e)).match(et) || e.match(tt)
          ? e
          : (Je() &&
              console.warn(
                'WARNING: sanitizing unsafe URL value '.concat(
                  e,
                  ' (see http://g.co/ng/security#xss)'
                )
              ),
            'unsafe:' + e);
      }
      function rt(e) {
        var t,
          n = {},
          r = _createForOfIteratorHelper(e.split(','));
        try {
          for (r.s(); !(t = r.n()).done; ) {
            n[t.value] = !0;
          }
        } catch (i) {
          r.e(i);
        } finally {
          r.f();
        }
        return n;
      }
      function it() {
        for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        for (var i = 0, a = n; i < a.length; i++) {
          var o = a[i];
          for (var l in o) o.hasOwnProperty(l) && (e[l] = !0);
        }
        return e;
      }
      var at,
        ot = rt('area,br,col,hr,img,wbr'),
        lt = rt('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        ut = rt('rp,rt'),
        st = it(ut, lt),
        ct = it(
          ot,
          it(
            lt,
            rt(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          it(
            ut,
            rt(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          st
        ),
        ht = rt('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        dt = rt('srcset'),
        ft = it(
          ht,
          dt,
          rt(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          rt(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        pt = rt('script,style,template'),
        vt = (function () {
          function e() {
            _classCallCheck(this, e), (this.sanitizedSomething = !1), (this.buf = []);
          }
          return (
            _createClass(e, [
              {
                key: 'sanitizeChildren',
                value: function (e) {
                  for (var t = e.firstChild, n = !0; t; )
                    if (
                      (t.nodeType === Node.ELEMENT_NODE
                        ? (n = this.startElement(t))
                        : t.nodeType === Node.TEXT_NODE
                        ? this.chars(t.nodeValue)
                        : (this.sanitizedSomething = !0),
                      n && t.firstChild)
                    )
                      t = t.firstChild;
                    else
                      for (; t; ) {
                        t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
                        var r = this.checkClobberedElement(t, t.nextSibling);
                        if (r) {
                          t = r;
                          break;
                        }
                        t = this.checkClobberedElement(t, t.parentNode);
                      }
                  return this.buf.join('');
                },
              },
              {
                key: 'startElement',
                value: function (e) {
                  var t = e.nodeName.toLowerCase();
                  if (!ct.hasOwnProperty(t))
                    return (this.sanitizedSomething = !0), !pt.hasOwnProperty(t);
                  this.buf.push('<'), this.buf.push(t);
                  for (var n, r = e.attributes, i = 0; i < r.length; i++) {
                    var a = r.item(i),
                      o = a.name,
                      l = o.toLowerCase();
                    if (ft.hasOwnProperty(l)) {
                      var u = a.value;
                      ht[l] && (u = nt(u)),
                        dt[l] &&
                          ((n = u),
                          (u = (n = String(n))
                            .split(',')
                            .map(function (e) {
                              return nt(e.trim());
                            })
                            .join(', '))),
                        this.buf.push(' ', o, '="', yt(u), '"');
                    } else this.sanitizedSomething = !0;
                  }
                  return this.buf.push('>'), !0;
                },
              },
              {
                key: 'endElement',
                value: function (e) {
                  var t = e.nodeName.toLowerCase();
                  ct.hasOwnProperty(t) &&
                    !ot.hasOwnProperty(t) &&
                    (this.buf.push('</'), this.buf.push(t), this.buf.push('>'));
                },
              },
              {
                key: 'chars',
                value: function (e) {
                  this.buf.push(yt(e));
                },
              },
              {
                key: 'checkClobberedElement',
                value: function (e, t) {
                  if (
                    t &&
                    (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) ===
                      Node.DOCUMENT_POSITION_CONTAINED_BY
                  )
                    throw new Error(
                      'Failed to sanitize html because the element is clobbered: ' + e.outerHTML
                    );
                  return t;
                },
              },
            ]),
            e
          );
        })(),
        gt = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        mt = /([^\#-~ |!])/g;
      function yt(e) {
        return e
          .replace(/&/g, '&amp;')
          .replace(gt, function (e) {
            return (
              '&#' + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ';'
            );
          })
          .replace(mt, function (e) {
            return '&#' + e.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      function _t(e) {
        return 'content' in e &&
          (function (e) {
            return e.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === e.nodeName;
          })(e)
          ? e.content
          : null;
      }
      var Ct = (function () {
          var e = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 };
          return (
            (e[e.NONE] = 'NONE'),
            (e[e.HTML] = 'HTML'),
            (e[e.STYLE] = 'STYLE'),
            (e[e.SCRIPT] = 'SCRIPT'),
            (e[e.URL] = 'URL'),
            (e[e.RESOURCE_URL] = 'RESOURCE_URL'),
            e
          );
        })(),
        kt = function e() {
          _classCallCheck(this, e);
        },
        bt = new RegExp(
          '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
          'g'
        ),
        wt = /^url\(([^)]+)\)$/;
      function xt(e) {
        return e.ngDebugContext;
      }
      function St(e) {
        return e.ngOriginalError;
      }
      function Et(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r];
        e.error.apply(e, n);
      }
      var Tt = (function () {
          function e() {
            _classCallCheck(this, e), (this._console = console);
          }
          return (
            _createClass(e, [
              {
                key: 'handleError',
                value: function (e) {
                  var t = this._findOriginalError(e),
                    n = this._findContext(e),
                    r = (function (e) {
                      return e.ngErrorLogger || Et;
                    })(e);
                  r(this._console, 'ERROR', e),
                    t && r(this._console, 'ORIGINAL ERROR', t),
                    n && r(this._console, 'ERROR CONTEXT', n);
                },
              },
              {
                key: '_findContext',
                value: function (e) {
                  return e ? (xt(e) ? xt(e) : this._findContext(St(e))) : null;
                },
              },
              {
                key: '_findOriginalError',
                value: function (e) {
                  for (var t = St(e); t && St(t); ) t = St(t);
                  return t;
                },
              },
            ]),
            e
          );
        })(),
        Pt = /([A-Z])/g;
      function At(e) {
        try {
          return null != e ? e.toString().slice(0, 30) : e;
        } catch (t) {
          return '[ERROR] Exception while trying to serialize the value';
        }
      }
      var Rt = null;
      function It() {
        if (!Rt) {
          var e = Ee.Symbol;
          if (e && e.iterator) Rt = e.iterator;
          else
            for (var t = Object.getOwnPropertyNames(Map.prototype), n = 0; n < t.length; ++n) {
              var r = t[n];
              'entries' !== r &&
                'size' !== r &&
                Map.prototype[r] === Map.prototype.entries &&
                (Rt = r);
            }
        }
        return Rt;
      }
      function Ot(e, t) {
        return e === t || ('number' == typeof e && 'number' == typeof t && isNaN(e) && isNaN(t));
      }
      function Dt(e, t) {
        var n = Mt(e),
          r = Mt(t);
        return n && r
          ? (function (e, t, n) {
              for (var r = e[It()](), i = t[It()](); ; ) {
                var a = r.next(),
                  o = i.next();
                if (a.done && o.done) return !0;
                if (a.done || o.done) return !1;
                if (!n(a.value, o.value)) return !1;
              }
            })(e, t, Dt)
          : !(
              n ||
              !(e && ('object' == typeof e || 'function' == typeof e)) ||
              r ||
              !(t && ('object' == typeof t || 'function' == typeof t))
            ) || Ot(e, t);
      }
      var Vt = (function () {
        function e(t) {
          _classCallCheck(this, e), (this.wrapped = t);
        }
        return (
          _createClass(e, null, [
            {
              key: 'wrap',
              value: function (t) {
                return new e(t);
              },
            },
            {
              key: 'unwrap',
              value: function (t) {
                return e.isWrapped(t) ? t.wrapped : t;
              },
            },
            {
              key: 'isWrapped',
              value: function (t) {
                return t instanceof e;
              },
            },
          ]),
          e
        );
      })();
      function Mt(e) {
        return !!Nt(e) && (Array.isArray(e) || (!(e instanceof Map) && It() in e));
      }
      function Nt(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      function Lt(e) {
        return !!e && 'function' == typeof e.then;
      }
      function Ft(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      var Ut = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.previousValue = t),
              (this.currentValue = n),
              (this.firstChange = r);
          }
          return (
            _createClass(e, [
              {
                key: 'isFirstChange',
                value: function () {
                  return this.firstChange;
                },
              },
            ]),
            e
          );
        })(),
        jt = function e() {
          _classCallCheck(this, e);
        };
      function Ht(e) {
        var t = Error(
          'No component factory found for '.concat(
            ye(e),
            '. Did you add it to @NgModule.entryComponents?'
          )
        );
        return (t[zt] = e), t;
      }
      var zt = 'ngComponent',
        Bt = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: 'resolveComponentFactory',
                value: function (e) {
                  throw Ht(e);
                },
              },
            ]),
            e
          );
        })(),
        qt = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (e.NULL = new Bt()), e;
        })(),
        Gt = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this._parent = n),
              (this._ngModule = r),
              (this._factories = new Map());
            for (var i = 0; i < t.length; i++) {
              var a = t[i];
              this._factories.set(a.componentType, a);
            }
          }
          return (
            _createClass(e, [
              {
                key: 'resolveComponentFactory',
                value: function (e) {
                  var t = this._factories.get(e);
                  if ((!t && this._parent && (t = this._parent.resolveComponentFactory(e)), !t))
                    throw Ht(e);
                  return new $t(t, this._ngModule);
                },
              },
            ]),
            e
          );
        })(),
        $t = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this)).factory = e),
              (i.ngModule = r),
              (i.selector = e.selector),
              (i.componentType = e.componentType),
              (i.ngContentSelectors = e.ngContentSelectors),
              (i.inputs = e.inputs),
              (i.outputs = e.outputs),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: 'create',
                value: function (e, t, n, r) {
                  return this.factory.create(e, t, n, r || this.ngModule);
                },
              },
            ]),
            n
          );
        })(jt),
        Wt = function e() {
          _classCallCheck(this, e);
        },
        Zt = function e() {
          _classCallCheck(this, e);
        };
      function Kt() {}
      var Qt = (function () {
          var e = function e(t) {
            _classCallCheck(this, e), (this.nativeElement = t);
          };
          return (
            (e.__NG_ELEMENT_ID__ = function () {
              return Yt(e);
            }),
            e
          );
        })(),
        Yt = Kt,
        Jt = function e() {
          _classCallCheck(this, e);
        },
        Xt = (function () {
          var e = { Important: 1, DashCase: 2 };
          return (e[e.Important] = 'Important'), (e[e.DashCase] = 'DashCase'), e;
        })(),
        en = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.__NG_ELEMENT_ID__ = function () {
              return tn();
            }),
            e
          );
        })(),
        tn = Kt,
        nn = new (function e(t) {
          _classCallCheck(this, e),
            (this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t.split('.').slice(2).join('.'));
        })('8.1.3'),
        rn = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: 'supports',
                value: function (e) {
                  return Mt(e);
                },
              },
              {
                key: 'create',
                value: function (e) {
                  return new on(e);
                },
              },
            ]),
            e
          );
        })(),
        an = function (e, t) {
          return t;
        },
        on = (function () {
          function e(t) {
            _classCallCheck(this, e),
              (this.length = 0),
              (this._linkedRecords = null),
              (this._unlinkedRecords = null),
              (this._previousItHead = null),
              (this._itHead = null),
              (this._itTail = null),
              (this._additionsHead = null),
              (this._additionsTail = null),
              (this._movesHead = null),
              (this._movesTail = null),
              (this._removalsHead = null),
              (this._removalsTail = null),
              (this._identityChangesHead = null),
              (this._identityChangesTail = null),
              (this._trackByFn = t || an);
          }
          return (
            _createClass(e, [
              {
                key: 'forEachItem',
                value: function (e) {
                  var t;
                  for (t = this._itHead; null !== t; t = t._next) e(t);
                },
              },
              {
                key: 'forEachOperation',
                value: function (e) {
                  for (var t = this._itHead, n = this._removalsHead, r = 0, i = null; t || n; ) {
                    var a = !n || (t && t.currentIndex < cn(n, r, i)) ? t : n,
                      o = cn(a, r, i),
                      l = a.currentIndex;
                    if (a === n) r--, (n = n._nextRemoved);
                    else if (((t = t._next), null == a.previousIndex)) r++;
                    else {
                      i || (i = []);
                      var u = o - r,
                        s = l - r;
                      if (u != s) {
                        for (var c = 0; c < u; c++) {
                          var h = c < i.length ? i[c] : (i[c] = 0),
                            d = h + c;
                          s <= d && d < u && (i[c] = h + 1);
                        }
                        i[a.previousIndex] = s - u;
                      }
                    }
                    o !== l && e(a, o, l);
                  }
                },
              },
              {
                key: 'forEachPreviousItem',
                value: function (e) {
                  var t;
                  for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t);
                },
              },
              {
                key: 'forEachAddedItem',
                value: function (e) {
                  var t;
                  for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
                },
              },
              {
                key: 'forEachMovedItem',
                value: function (e) {
                  var t;
                  for (t = this._movesHead; null !== t; t = t._nextMoved) e(t);
                },
              },
              {
                key: 'forEachRemovedItem',
                value: function (e) {
                  var t;
                  for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
                },
              },
              {
                key: 'forEachIdentityChange',
                value: function (e) {
                  var t;
                  for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) e(t);
                },
              },
              {
                key: 'diff',
                value: function (e) {
                  if ((null == e && (e = []), !Mt(e)))
                    throw new Error(
                      "Error trying to diff '".concat(
                        ye(e),
                        "'. Only arrays and iterables are allowed"
                      )
                    );
                  return this.check(e) ? this : null;
                },
              },
              { key: 'onDestroy', value: function () {} },
              {
                key: 'check',
                value: function (e) {
                  var t = this;
                  this._reset();
                  var n,
                    r,
                    i,
                    a = this._itHead,
                    o = !1;
                  if (Array.isArray(e)) {
                    this.length = e.length;
                    for (var l = 0; l < this.length; l++)
                      (r = e[l]),
                        (i = this._trackByFn(l, r)),
                        null !== a && Ot(a.trackById, i)
                          ? (o && (a = this._verifyReinsertion(a, r, i, l)),
                            Ot(a.item, r) || this._addIdentityChange(a, r))
                          : ((a = this._mismatch(a, r, i, l)), (o = !0)),
                        (a = a._next);
                  } else
                    (n = 0),
                      (function (e, t) {
                        if (Array.isArray(e)) for (var n = 0; n < e.length; n++) t(e[n]);
                        else for (var r, i = e[It()](); !(r = i.next()).done; ) t(r.value);
                      })(e, function (e) {
                        (i = t._trackByFn(n, e)),
                          null !== a && Ot(a.trackById, i)
                            ? (o && (a = t._verifyReinsertion(a, e, i, n)),
                              Ot(a.item, e) || t._addIdentityChange(a, e))
                            : ((a = t._mismatch(a, e, i, n)), (o = !0)),
                          (a = a._next),
                          n++;
                      }),
                      (this.length = n);
                  return this._truncate(a), (this.collection = e), this.isDirty;
                },
              },
              {
                key: '_reset',
                value: function () {
                  if (this.isDirty) {
                    var e, t;
                    for (e = this._previousItHead = this._itHead; null !== e; e = e._next)
                      e._nextPrevious = e._next;
                    for (e = this._additionsHead; null !== e; e = e._nextAdded)
                      e.previousIndex = e.currentIndex;
                    for (
                      this._additionsHead = this._additionsTail = null, e = this._movesHead;
                      null !== e;
                      e = t
                    )
                      (e.previousIndex = e.currentIndex), (t = e._nextMoved);
                    (this._movesHead = this._movesTail = null),
                      (this._removalsHead = this._removalsTail = null),
                      (this._identityChangesHead = this._identityChangesTail = null);
                  }
                },
              },
              {
                key: '_mismatch',
                value: function (e, t, n, r) {
                  var i;
                  return (
                    null === e ? (i = this._itTail) : ((i = e._prev), this._remove(e)),
                    null !==
                    (e = null === this._linkedRecords ? null : this._linkedRecords.get(n, r))
                      ? (Ot(e.item, t) || this._addIdentityChange(e, t), this._moveAfter(e, i, r))
                      : null !==
                        (e =
                          null === this._unlinkedRecords
                            ? null
                            : this._unlinkedRecords.get(n, null))
                      ? (Ot(e.item, t) || this._addIdentityChange(e, t),
                        this._reinsertAfter(e, i, r))
                      : (e = this._addAfter(new ln(t, n), i, r)),
                    e
                  );
                },
              },
              {
                key: '_verifyReinsertion',
                value: function (e, t, n, r) {
                  var i =
                    null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
                  return (
                    null !== i
                      ? (e = this._reinsertAfter(i, e._prev, r))
                      : e.currentIndex != r && ((e.currentIndex = r), this._addToMoves(e, r)),
                    e
                  );
                },
              },
              {
                key: '_truncate',
                value: function (e) {
                  for (; null !== e; ) {
                    var t = e._next;
                    this._addToRemovals(this._unlink(e)), (e = t);
                  }
                  null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
                    null !== this._additionsTail && (this._additionsTail._nextAdded = null),
                    null !== this._movesTail && (this._movesTail._nextMoved = null),
                    null !== this._itTail && (this._itTail._next = null),
                    null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
                    null !== this._identityChangesTail &&
                      (this._identityChangesTail._nextIdentityChange = null);
                },
              },
              {
                key: '_reinsertAfter',
                value: function (e, t, n) {
                  null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
                  var r = e._prevRemoved,
                    i = e._nextRemoved;
                  return (
                    null === r ? (this._removalsHead = i) : (r._nextRemoved = i),
                    null === i ? (this._removalsTail = r) : (i._prevRemoved = r),
                    this._insertAfter(e, t, n),
                    this._addToMoves(e, n),
                    e
                  );
                },
              },
              {
                key: '_moveAfter',
                value: function (e, t, n) {
                  return this._unlink(e), this._insertAfter(e, t, n), this._addToMoves(e, n), e;
                },
              },
              {
                key: '_addAfter',
                value: function (e, t, n) {
                  return (
                    this._insertAfter(e, t, n),
                    (this._additionsTail =
                      null === this._additionsTail
                        ? (this._additionsHead = e)
                        : (this._additionsTail._nextAdded = e)),
                    e
                  );
                },
              },
              {
                key: '_insertAfter',
                value: function (e, t, n) {
                  var r = null === t ? this._itHead : t._next;
                  return (
                    (e._next = r),
                    (e._prev = t),
                    null === r ? (this._itTail = e) : (r._prev = e),
                    null === t ? (this._itHead = e) : (t._next = e),
                    null === this._linkedRecords && (this._linkedRecords = new sn()),
                    this._linkedRecords.put(e),
                    (e.currentIndex = n),
                    e
                  );
                },
              },
              {
                key: '_remove',
                value: function (e) {
                  return this._addToRemovals(this._unlink(e));
                },
              },
              {
                key: '_unlink',
                value: function (e) {
                  null !== this._linkedRecords && this._linkedRecords.remove(e);
                  var t = e._prev,
                    n = e._next;
                  return (
                    null === t ? (this._itHead = n) : (t._next = n),
                    null === n ? (this._itTail = t) : (n._prev = t),
                    e
                  );
                },
              },
              {
                key: '_addToMoves',
                value: function (e, t) {
                  return (
                    e.previousIndex === t ||
                      (this._movesTail =
                        null === this._movesTail
                          ? (this._movesHead = e)
                          : (this._movesTail._nextMoved = e)),
                    e
                  );
                },
              },
              {
                key: '_addToRemovals',
                value: function (e) {
                  return (
                    null === this._unlinkedRecords && (this._unlinkedRecords = new sn()),
                    this._unlinkedRecords.put(e),
                    (e.currentIndex = null),
                    (e._nextRemoved = null),
                    null === this._removalsTail
                      ? ((this._removalsTail = this._removalsHead = e), (e._prevRemoved = null))
                      : ((e._prevRemoved = this._removalsTail),
                        (this._removalsTail = this._removalsTail._nextRemoved = e)),
                    e
                  );
                },
              },
              {
                key: '_addIdentityChange',
                value: function (e, t) {
                  return (
                    (e.item = t),
                    (this._identityChangesTail =
                      null === this._identityChangesTail
                        ? (this._identityChangesHead = e)
                        : (this._identityChangesTail._nextIdentityChange = e)),
                    e
                  );
                },
              },
              {
                key: 'isDirty',
                get: function () {
                  return (
                    null !== this._additionsHead ||
                    null !== this._movesHead ||
                    null !== this._removalsHead ||
                    null !== this._identityChangesHead
                  );
                },
              },
            ]),
            e
          );
        })(),
        ln = function e(t, n) {
          _classCallCheck(this, e),
            (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        },
        un = (function () {
          function e() {
            _classCallCheck(this, e), (this._head = null), (this._tail = null);
          }
          return (
            _createClass(e, [
              {
                key: 'add',
                value: function (e) {
                  null === this._head
                    ? ((this._head = this._tail = e), (e._nextDup = null), (e._prevDup = null))
                    : ((this._tail._nextDup = e),
                      (e._prevDup = this._tail),
                      (e._nextDup = null),
                      (this._tail = e));
                },
              },
              {
                key: 'get',
                value: function (e, t) {
                  var n;
                  for (n = this._head; null !== n; n = n._nextDup)
                    if ((null === t || t <= n.currentIndex) && Ot(n.trackById, e)) return n;
                  return null;
                },
              },
              {
                key: 'remove',
                value: function (e) {
                  var t = e._prevDup,
                    n = e._nextDup;
                  return (
                    null === t ? (this._head = n) : (t._nextDup = n),
                    null === n ? (this._tail = t) : (n._prevDup = t),
                    null === this._head
                  );
                },
              },
            ]),
            e
          );
        })(),
        sn = (function () {
          function e() {
            _classCallCheck(this, e), (this.map = new Map());
          }
          return (
            _createClass(e, [
              {
                key: 'put',
                value: function (e) {
                  var t = e.trackById,
                    n = this.map.get(t);
                  n || ((n = new un()), this.map.set(t, n)), n.add(e);
                },
              },
              {
                key: 'get',
                value: function (e, t) {
                  var n = this.map.get(e);
                  return n ? n.get(e, t) : null;
                },
              },
              {
                key: 'remove',
                value: function (e) {
                  var t = e.trackById;
                  return this.map.get(t).remove(e) && this.map.delete(t), e;
                },
              },
              {
                key: 'clear',
                value: function () {
                  this.map.clear();
                },
              },
              {
                key: 'isEmpty',
                get: function () {
                  return 0 === this.map.size;
                },
              },
            ]),
            e
          );
        })();
      function cn(e, t, n) {
        var r = e.previousIndex;
        if (null === r) return r;
        var i = 0;
        return n && r < n.length && (i = n[r]), r + t + i;
      }
      var hn = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: 'supports',
                value: function (e) {
                  return e instanceof Map || Nt(e);
                },
              },
              {
                key: 'create',
                value: function () {
                  return new dn();
                },
              },
            ]),
            e
          );
        })(),
        dn = (function () {
          function e() {
            _classCallCheck(this, e),
              (this._records = new Map()),
              (this._mapHead = null),
              (this._appendAfter = null),
              (this._previousMapHead = null),
              (this._changesHead = null),
              (this._changesTail = null),
              (this._additionsHead = null),
              (this._additionsTail = null),
              (this._removalsHead = null),
              (this._removalsTail = null);
          }
          return (
            _createClass(e, [
              {
                key: 'forEachItem',
                value: function (e) {
                  var t;
                  for (t = this._mapHead; null !== t; t = t._next) e(t);
                },
              },
              {
                key: 'forEachPreviousItem',
                value: function (e) {
                  var t;
                  for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t);
                },
              },
              {
                key: 'forEachChangedItem',
                value: function (e) {
                  var t;
                  for (t = this._changesHead; null !== t; t = t._nextChanged) e(t);
                },
              },
              {
                key: 'forEachAddedItem',
                value: function (e) {
                  var t;
                  for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
                },
              },
              {
                key: 'forEachRemovedItem',
                value: function (e) {
                  var t;
                  for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
                },
              },
              {
                key: 'diff',
                value: function (e) {
                  if (e) {
                    if (!(e instanceof Map || Nt(e)))
                      throw new Error(
                        "Error trying to diff '".concat(
                          ye(e),
                          "'. Only maps and objects are allowed"
                        )
                      );
                  } else e = new Map();
                  return this.check(e) ? this : null;
                },
              },
              { key: 'onDestroy', value: function () {} },
              {
                key: 'check',
                value: function (e) {
                  var t = this;
                  this._reset();
                  var n = this._mapHead;
                  if (
                    ((this._appendAfter = null),
                    this._forEach(e, function (e, r) {
                      if (n && n.key === r)
                        t._maybeAddToChanges(n, e), (t._appendAfter = n), (n = n._next);
                      else {
                        var i = t._getOrCreateRecordForKey(r, e);
                        n = t._insertBeforeOrAppend(n, i);
                      }
                    }),
                    n)
                  ) {
                    n._prev && (n._prev._next = null), (this._removalsHead = n);
                    for (var r = n; null !== r; r = r._nextRemoved)
                      r === this._mapHead && (this._mapHead = null),
                        this._records.delete(r.key),
                        (r._nextRemoved = r._next),
                        (r.previousValue = r.currentValue),
                        (r.currentValue = null),
                        (r._prev = null),
                        (r._next = null);
                  }
                  return (
                    this._changesTail && (this._changesTail._nextChanged = null),
                    this._additionsTail && (this._additionsTail._nextAdded = null),
                    this.isDirty
                  );
                },
              },
              {
                key: '_insertBeforeOrAppend',
                value: function (e, t) {
                  if (e) {
                    var n = e._prev;
                    return (
                      (t._next = e),
                      (t._prev = n),
                      (e._prev = t),
                      n && (n._next = t),
                      e === this._mapHead && (this._mapHead = t),
                      (this._appendAfter = e),
                      e
                    );
                  }
                  return (
                    this._appendAfter
                      ? ((this._appendAfter._next = t), (t._prev = this._appendAfter))
                      : (this._mapHead = t),
                    (this._appendAfter = t),
                    null
                  );
                },
              },
              {
                key: '_getOrCreateRecordForKey',
                value: function (e, t) {
                  if (this._records.has(e)) {
                    var n = this._records.get(e);
                    this._maybeAddToChanges(n, t);
                    var r = n._prev,
                      i = n._next;
                    return (
                      r && (r._next = i), i && (i._prev = r), (n._next = null), (n._prev = null), n
                    );
                  }
                  var a = new fn(e);
                  return this._records.set(e, a), (a.currentValue = t), this._addToAdditions(a), a;
                },
              },
              {
                key: '_reset',
                value: function () {
                  if (this.isDirty) {
                    var e;
                    for (
                      this._previousMapHead = this._mapHead, e = this._previousMapHead;
                      null !== e;
                      e = e._next
                    )
                      e._nextPrevious = e._next;
                    for (e = this._changesHead; null !== e; e = e._nextChanged)
                      e.previousValue = e.currentValue;
                    for (e = this._additionsHead; null != e; e = e._nextAdded)
                      e.previousValue = e.currentValue;
                    (this._changesHead = this._changesTail = null),
                      (this._additionsHead = this._additionsTail = null),
                      (this._removalsHead = null);
                  }
                },
              },
              {
                key: '_maybeAddToChanges',
                value: function (e, t) {
                  Ot(t, e.currentValue) ||
                    ((e.previousValue = e.currentValue),
                    (e.currentValue = t),
                    this._addToChanges(e));
                },
              },
              {
                key: '_addToAdditions',
                value: function (e) {
                  null === this._additionsHead
                    ? (this._additionsHead = this._additionsTail = e)
                    : ((this._additionsTail._nextAdded = e), (this._additionsTail = e));
                },
              },
              {
                key: '_addToChanges',
                value: function (e) {
                  null === this._changesHead
                    ? (this._changesHead = this._changesTail = e)
                    : ((this._changesTail._nextChanged = e), (this._changesTail = e));
                },
              },
              {
                key: '_forEach',
                value: function (e, t) {
                  e instanceof Map
                    ? e.forEach(t)
                    : Object.keys(e).forEach(function (n) {
                        return t(e[n], n);
                      });
                },
              },
              {
                key: 'isDirty',
                get: function () {
                  return (
                    null !== this._additionsHead ||
                    null !== this._changesHead ||
                    null !== this._removalsHead
                  );
                },
              },
            ]),
            e
          );
        })(),
        fn = function e(t) {
          _classCallCheck(this, e),
            (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        },
        pn = (function () {
          var e = (function () {
            function e(t) {
              _classCallCheck(this, e), (this.factories = t);
            }
            return (
              _createClass(
                e,
                [
                  {
                    key: 'find',
                    value: function (e) {
                      var t,
                        n = this.factories.find(function (t) {
                          return t.supports(e);
                        });
                      if (null != n) return n;
                      throw new Error(
                        "Cannot find a differ supporting object '"
                          .concat(e, "' of type '")
                          .concat((t = e).name || typeof t, "'")
                      );
                    },
                  },
                ],
                [
                  {
                    key: 'create',
                    value: function (t, n) {
                      if (null != n) {
                        var r = n.factories.slice();
                        t = t.concat(r);
                      }
                      return new e(t);
                    },
                  },
                  {
                    key: 'extend',
                    value: function (t) {
                      return {
                        provide: e,
                        useFactory: function (n) {
                          if (!n)
                            throw new Error(
                              'Cannot extend IterableDiffers without a parent injector'
                            );
                          return e.create(t, n);
                        },
                        deps: [[e, new de(), new ce()]],
                      };
                    },
                  },
                ]
              ),
              e
            );
          })();
          return (
            (e.ngInjectableDef = ve({
              token: e,
              providedIn: 'root',
              factory: function () {
                return new e([new rn()]);
              },
            })),
            e
          );
        })(),
        vn = (function () {
          var e = (function () {
            function e(t) {
              _classCallCheck(this, e), (this.factories = t);
            }
            return (
              _createClass(
                e,
                [
                  {
                    key: 'find',
                    value: function (e) {
                      var t = this.factories.find(function (t) {
                        return t.supports(e);
                      });
                      if (t) return t;
                      throw new Error("Cannot find a differ supporting object '".concat(e, "'"));
                    },
                  },
                ],
                [
                  {
                    key: 'create',
                    value: function (t, n) {
                      if (n) {
                        var r = n.factories.slice();
                        t = t.concat(r);
                      }
                      return new e(t);
                    },
                  },
                  {
                    key: 'extend',
                    value: function (t) {
                      return {
                        provide: e,
                        useFactory: function (n) {
                          if (!n)
                            throw new Error(
                              'Cannot extend KeyValueDiffers without a parent injector'
                            );
                          return e.create(t, n);
                        },
                        deps: [[e, new de(), new ce()]],
                      };
                    },
                  },
                ]
              ),
              e
            );
          })();
          return (
            (e.ngInjectableDef = ve({
              token: e,
              providedIn: 'root',
              factory: function () {
                return new e([new hn()]);
              },
            })),
            e
          );
        })(),
        gn = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.__NG_ELEMENT_ID__ = function () {
              return mn();
            }),
            e
          );
        })(),
        mn = function () {},
        yn = [new hn()],
        _n = new pn([new rn()]),
        Cn = new vn(yn),
        kn = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.__NG_ELEMENT_ID__ = function () {
              return bn(e, Qt);
            }),
            e
          );
        })(),
        bn = Kt,
        wn = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.__NG_ELEMENT_ID__ = function () {
              return xn(e, Qt);
            }),
            e
          );
        })(),
        xn = Kt;
      function Sn(e, t, n, r) {
        var i = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '"
          .concat(t, "'. Current value: '")
          .concat(n, "'.");
        return (
          r &&
            (i +=
              ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
          (function (e, t) {
            var n = new Error(e);
            return En(n, t), n;
          })(i, e)
        );
      }
      function En(e, t) {
        (e.ngDebugContext = t), (e.ngErrorLogger = t.logError.bind(t));
      }
      function Tn(e) {
        return new Error('ViewDestroyedError: Attempt to use a destroyed view: ' + e);
      }
      function Pn(e, t, n) {
        var r = e.state,
          i = 1792 & r;
        return i === t ? ((e.state = (-1793 & r) | n), (e.initIndex = -1), !0) : i === n;
      }
      function An(e, t, n) {
        return (1792 & e.state) === t && e.initIndex <= n && ((e.initIndex = n + 1), !0);
      }
      function Rn(e, t) {
        return e.nodes[t];
      }
      function In(e, t) {
        return e.nodes[t];
      }
      function On(e, t) {
        return e.nodes[t];
      }
      function Dn(e, t) {
        return e.nodes[t];
      }
      function Vn(e, t) {
        return e.nodes[t];
      }
      var Mn = {
          setCurrentNode: void 0,
          createRootView: void 0,
          createEmbeddedView: void 0,
          createComponentView: void 0,
          createNgModuleRef: void 0,
          overrideProvider: void 0,
          overrideComponentView: void 0,
          clearOverrides: void 0,
          checkAndUpdateView: void 0,
          checkNoChangesView: void 0,
          destroyView: void 0,
          resolveDep: void 0,
          createDebugContext: void 0,
          handleEvent: void 0,
          updateDirectives: void 0,
          updateRenderer: void 0,
          dirtyParentQueries: void 0,
        },
        Nn = function () {},
        Ln = new Map();
      function Fn(e) {
        var t = Ln.get(e);
        return t || ((t = ye(e) + '_' + Ln.size), Ln.set(e, t)), t;
      }
      function Un(e, t, n, r) {
        if (Vt.isWrapped(r)) {
          r = Vt.unwrap(r);
          var i = e.def.nodes[t].bindingIndex + n,
            a = Vt.unwrap(e.oldValues[i]);
          e.oldValues[i] = new Vt(a);
        }
        return r;
      }
      function jn(e) {
        return {
          id: '$$undefined',
          styles: e.styles,
          encapsulation: e.encapsulation,
          data: e.data,
        };
      }
      var Hn = 0;
      function zn(e, t, n, r) {
        return !(!(2 & e.state) && Ot(e.oldValues[t.bindingIndex + n], r));
      }
      function Bn(e, t, n, r) {
        return !!zn(e, t, n, r) && ((e.oldValues[t.bindingIndex + n] = r), !0);
      }
      function qn(e, t, n, r) {
        var i = e.oldValues[t.bindingIndex + n];
        if (1 & e.state || !Dt(i, r)) {
          var a = t.bindings[n].name;
          throw Sn(
            Mn.createDebugContext(e, t.nodeIndex),
            ''.concat(a, ': ').concat(i),
            ''.concat(a, ': ').concat(r),
            0 != (1 & e.state)
          );
        }
      }
      function Gn(e) {
        for (var t = e; t; )
          2 & t.def.flags && (t.state |= 8), (t = t.viewContainerParent || t.parent);
      }
      function $n(e, t) {
        for (var n = e; n && n !== t; ) (n.state |= 64), (n = n.viewContainerParent || n.parent);
      }
      function Wn(e, t, n, r) {
        try {
          return (
            Gn(33554432 & e.def.nodes[t].flags ? In(e, t).componentView : e),
            Mn.handleEvent(e, t, n, r)
          );
        } catch (i) {
          e.root.errorHandler.handleError(i);
        }
      }
      function Zn(e) {
        return e.parent ? In(e.parent, e.parentNodeDef.nodeIndex) : null;
      }
      function Kn(e) {
        return e.parent ? e.parentNodeDef.parent : null;
      }
      function Qn(e, t) {
        switch (201347067 & t.flags) {
          case 1:
            return In(e, t.nodeIndex).renderElement;
          case 2:
            return Rn(e, t.nodeIndex).renderText;
        }
      }
      function Yn(e) {
        return !!e.parent && !!(32768 & e.parentNodeDef.flags);
      }
      function Jn(e) {
        return !(!e.parent || 32768 & e.parentNodeDef.flags);
      }
      function Xn(e) {
        var t = {},
          n = 0,
          r = {};
        return (
          e &&
            e.forEach(function (e) {
              var i = _slicedToArray(e, 2),
                a = i[0],
                o = i[1];
              'number' == typeof a
                ? ((t[a] = o),
                  (n |= (function (e) {
                    return 1 << e % 32;
                  })(a)))
                : (r[a] = o);
            }),
          { matchedQueries: t, references: r, matchedQueryIds: n }
        );
      }
      function er(e, t) {
        return e.map(function (e) {
          var n, r, i;
          return (
            Array.isArray(e)
              ? ((i = (n = _slicedToArray(e, 2))[0]), (r = n[1]))
              : ((i = 0), (r = e)),
            r &&
              ('function' == typeof r || 'object' == typeof r) &&
              t &&
              Object.defineProperty(r, '__source', { value: t, configurable: !0 }),
            { flags: i, token: r, tokenKey: Fn(r) }
          );
        });
      }
      function tr(e, t, n) {
        var r = n.renderParent;
        return r
          ? 0 == (1 & r.flags) ||
            0 == (33554432 & r.flags) ||
            (r.element.componentRendererType &&
              r.element.componentRendererType.encapsulation === Ze.Native)
            ? In(e, n.renderParent.nodeIndex).renderElement
            : void 0
          : t;
      }
      var nr = new WeakMap();
      function rr(e) {
        var t = nr.get(e);
        return (
          t ||
            (((t = e(function () {
              return Nn;
            })).factory = e),
            nr.set(e, t)),
          t
        );
      }
      function ir(e, t, n, r, i) {
        3 === t && (n = e.renderer.parentNode(Qn(e, e.def.lastRenderRootNode))),
          ar(e, t, 0, e.def.nodes.length - 1, n, r, i);
      }
      function ar(e, t, n, r, i, a, o) {
        for (var l = n; l <= r; l++) {
          var u = e.def.nodes[l];
          11 & u.flags && lr(e, u, t, i, a, o), (l += u.childCount);
        }
      }
      function or(e, t, n, r, i, a) {
        for (var o = e; o && !Yn(o); ) o = o.parent;
        for (
          var l = o.parent, u = Kn(o), s = u.nodeIndex + u.childCount, c = u.nodeIndex + 1;
          c <= s;
          c++
        ) {
          var h = l.def.nodes[c];
          h.ngContentIndex === t && lr(l, h, n, r, i, a), (c += h.childCount);
        }
        if (!l.parent) {
          var d = e.root.projectableNodes[t];
          if (d) for (var f = 0; f < d.length; f++) ur(e, d[f], n, r, i, a);
        }
      }
      function lr(e, t, n, r, i, a) {
        if (8 & t.flags) or(e, t.ngContent.index, n, r, i, a);
        else {
          var o = Qn(e, t);
          if (
            (3 === n && 33554432 & t.flags && 48 & t.bindingFlags
              ? (16 & t.bindingFlags && ur(e, o, n, r, i, a),
                32 & t.bindingFlags && ur(In(e, t.nodeIndex).componentView, o, n, r, i, a))
              : ur(e, o, n, r, i, a),
            16777216 & t.flags)
          )
            for (var l = In(e, t.nodeIndex).viewContainer._embeddedViews, u = 0; u < l.length; u++)
              ir(l[u], n, r, i, a);
          1 & t.flags &&
            !t.element.name &&
            ar(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, i, a);
        }
      }
      function ur(e, t, n, r, i, a) {
        var o = e.renderer;
        switch (n) {
          case 1:
            o.appendChild(r, t);
            break;
          case 2:
            o.insertBefore(r, t, i);
            break;
          case 3:
            o.removeChild(r, t);
            break;
          case 0:
            a.push(t);
        }
      }
      var sr = /^:([^:]+):(.+)$/;
      function cr(e) {
        if (':' === e[0]) {
          var t = e.match(sr);
          return [t[1], t[2]];
        }
        return ['', e];
      }
      function hr(e) {
        for (var t = 0, n = 0; n < e.length; n++) t |= e[n].flags;
        return t;
      }
      var dr = new Object(),
        fr = Fn(Ue),
        pr = Fn(Pe),
        vr = Fn(Wt);
      function gr(e, t, n, r) {
        return (n = ke(n)), { index: -1, deps: er(r, ye(t)), flags: e, token: t, value: n };
      }
      function mr(e, t) {
        var n,
          r,
          i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ue.THROW_IF_NOT_FOUND,
          a = De(e);
        try {
          if (8 & t.flags) return t.token;
          if ((2 & t.flags && (i = null), 1 & t.flags)) return e._parent.get(t.token, i);
          var o = t.tokenKey;
          switch (o) {
            case fr:
            case pr:
            case vr:
              return e;
          }
          var l,
            u = e._def.providersByKey[o];
          if (u) {
            var s = e._providers[u.index];
            return void 0 === s && (s = e._providers[u.index] = yr(e, u)), s === dr ? void 0 : s;
          }
          if (
            (l = ge(t.token)) &&
            ((n = e),
            null != (r = l).providedIn &&
              ((function (e, t) {
                return e._def.modules.indexOf(t) > -1;
              })(n, r.providedIn) ||
                ('root' === r.providedIn && n._def.isRoot)))
          ) {
            var c = e._providers.length;
            return (
              (e._def.providers[c] = e._def.providersByKey[t.tokenKey] = {
                flags: 5120,
                value: l.factory,
                deps: [],
                index: c,
                token: t.token,
              }),
              (e._providers[c] = dr),
              (e._providers[c] = yr(e, e._def.providersByKey[t.tokenKey]))
            );
          }
          return 4 & t.flags ? i : e._parent.get(t.token, i);
        } finally {
          De(a);
        }
      }
      function yr(e, t) {
        var n;
        switch (201347067 & t.flags) {
          case 512:
            n = (function (e, t, n) {
              var r = n.length;
              switch (r) {
                case 0:
                  return new t();
                case 1:
                  return new t(mr(e, n[0]));
                case 2:
                  return new t(mr(e, n[0]), mr(e, n[1]));
                case 3:
                  return new t(mr(e, n[0]), mr(e, n[1]), mr(e, n[2]));
                default:
                  for (var i = new Array(r), a = 0; a < r; a++) i[a] = mr(e, n[a]);
                  return _construct(t, i);
              }
            })(e, t.value, t.deps);
            break;
          case 1024:
            n = (function (e, t, n) {
              var r = n.length;
              switch (r) {
                case 0:
                  return t();
                case 1:
                  return t(mr(e, n[0]));
                case 2:
                  return t(mr(e, n[0]), mr(e, n[1]));
                case 3:
                  return t(mr(e, n[0]), mr(e, n[1]), mr(e, n[2]));
                default:
                  for (var i = Array(r), a = 0; a < r; a++) i[a] = mr(e, n[a]);
                  return t.apply(void 0, i);
              }
            })(e, t.value, t.deps);
            break;
          case 2048:
            n = mr(e, t.deps[0]);
            break;
          case 256:
            n = t.value;
        }
        return (
          n === dr ||
            null === n ||
            'object' != typeof n ||
            131072 & t.flags ||
            'function' != typeof n.ngOnDestroy ||
            (t.flags |= 131072),
          void 0 === n ? dr : n
        );
      }
      function _r(e, t) {
        var n = e.viewContainer._embeddedViews;
        if (((null == t || t >= n.length) && (t = n.length - 1), t < 0)) return null;
        var r = n[t];
        return (r.viewContainerParent = null), wr(n, t), Mn.dirtyParentQueries(r), kr(r), r;
      }
      function Cr(e, t, n) {
        var r = t ? Qn(t, t.def.lastRenderRootNode) : e.renderElement,
          i = n.renderer.parentNode(r),
          a = n.renderer.nextSibling(r);
        ir(n, 2, i, a, void 0);
      }
      function kr(e) {
        ir(e, 3, null, null, void 0);
      }
      function br(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function wr(e, t) {
        t >= e.length - 1 ? e.pop() : e.splice(t, 1);
      }
      var xr = new Object();
      function Sr(e, t, n, r, i, a) {
        return new Er(e, t, n, r, i, a);
      }
      var Er = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a, o, l) {
            var u;
            return (
              _classCallCheck(this, n),
              ((u = t.call(this)).selector = e),
              (u.componentType = r),
              (u._inputs = a),
              (u._outputs = o),
              (u.ngContentSelectors = l),
              (u.viewDefFactory = i),
              u
            );
          }
          return (
            _createClass(n, [
              {
                key: 'create',
                value: function (e, t, n, r) {
                  if (!r) throw new Error('ngModule should be provided');
                  var i = rr(this.viewDefFactory),
                    a = i.nodes[0].element.componentProvider.nodeIndex,
                    o = Mn.createRootView(e, t || [], n, i, r, xr),
                    l = On(o, a).instance;
                  return (
                    n && o.renderer.setAttribute(In(o, 0).renderElement, 'ng-version', nn.full),
                    new Tr(o, new Ir(o), l)
                  );
                },
              },
              {
                key: 'inputs',
                get: function () {
                  var e = [],
                    t = this._inputs;
                  for (var n in t) e.push({ propName: n, templateName: t[n] });
                  return e;
                },
              },
              {
                key: 'outputs',
                get: function () {
                  var e = [];
                  for (var t in this._outputs)
                    e.push({ propName: t, templateName: this._outputs[t] });
                  return e;
                },
              },
            ]),
            n
          );
        })(jt),
        Tr = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return (
              _classCallCheck(this, n),
              ((a = t.call(this))._view = e),
              (a._viewRef = r),
              (a._component = i),
              (a._elDef = a._view.def.nodes[0]),
              (a.hostView = r),
              (a.changeDetectorRef = r),
              (a.instance = i),
              a
            );
          }
          return (
            _createClass(n, [
              {
                key: 'destroy',
                value: function () {
                  this._viewRef.destroy();
                },
              },
              {
                key: 'onDestroy',
                value: function (e) {
                  this._viewRef.onDestroy(e);
                },
              },
              {
                key: 'location',
                get: function () {
                  return new Qt(In(this._view, this._elDef.nodeIndex).renderElement);
                },
              },
              {
                key: 'injector',
                get: function () {
                  return new Mr(this._view, this._elDef);
                },
              },
              {
                key: 'componentType',
                get: function () {
                  return this._component.constructor;
                },
              },
            ]),
            n
          );
        })(
          (function () {
            return function e() {
              _classCallCheck(this, e);
            };
          })()
        );
      function Pr(e, t, n) {
        return new Ar(e, t, n);
      }
      var Ar = (function () {
        function e(t, n, r) {
          _classCallCheck(this, e),
            (this._view = t),
            (this._elDef = n),
            (this._data = r),
            (this._embeddedViews = []);
        }
        return (
          _createClass(e, [
            {
              key: 'clear',
              value: function () {
                for (var e = this._embeddedViews.length - 1; e >= 0; e--) {
                  var t = _r(this._data, e);
                  Mn.destroyView(t);
                }
              },
            },
            {
              key: 'get',
              value: function (e) {
                var t = this._embeddedViews[e];
                if (t) {
                  var n = new Ir(t);
                  return n.attachToViewContainerRef(this), n;
                }
                return null;
              },
            },
            {
              key: 'createEmbeddedView',
              value: function (e, t, n) {
                var r = e.createEmbeddedView(t || {});
                return this.insert(r, n), r;
              },
            },
            {
              key: 'createComponent',
              value: function (e, t, n, r, i) {
                var a = n || this.parentInjector;
                i || e instanceof $t || (i = a.get(Wt));
                var o = e.create(a, r, void 0, i);
                return this.insert(o.hostView, t), o;
              },
            },
            {
              key: 'insert',
              value: function (e, t) {
                if (e.destroyed)
                  throw new Error('Cannot insert a destroyed View in a ViewContainer!');
                var n,
                  r,
                  i,
                  a,
                  o,
                  l = e;
                return (
                  (n = this._view),
                  (r = this._data),
                  (i = t),
                  (a = l._view),
                  (o = r.viewContainer._embeddedViews),
                  null == i && (i = o.length),
                  (a.viewContainerParent = n),
                  br(o, i, a),
                  (function (e, t) {
                    var n = Zn(t);
                    if (n && n !== e && !(16 & t.state)) {
                      t.state |= 16;
                      var r = n.template._projectedViews;
                      r || (r = n.template._projectedViews = []),
                        r.push(t),
                        (function (e, t) {
                          if (!(4 & t.flags)) {
                            (e.nodeFlags |= 4), (t.flags |= 4);
                            for (var n = t.parent; n; ) (n.childFlags |= 4), (n = n.parent);
                          }
                        })(t.parent.def, t.parentNodeDef);
                    }
                  })(r, a),
                  Mn.dirtyParentQueries(a),
                  Cr(r, i > 0 ? o[i - 1] : null, a),
                  l.attachToViewContainerRef(this),
                  e
                );
              },
            },
            {
              key: 'move',
              value: function (e, t) {
                if (e.destroyed)
                  throw new Error('Cannot move a destroyed View in a ViewContainer!');
                var n,
                  r,
                  i,
                  a,
                  o,
                  l = this._embeddedViews.indexOf(e._view);
                return (
                  (n = this._data),
                  (r = l),
                  (i = t),
                  (a = n.viewContainer._embeddedViews),
                  (o = a[r]),
                  wr(a, r),
                  null == i && (i = a.length),
                  br(a, i, o),
                  Mn.dirtyParentQueries(o),
                  kr(o),
                  Cr(n, i > 0 ? a[i - 1] : null, o),
                  e
                );
              },
            },
            {
              key: 'indexOf',
              value: function (e) {
                return this._embeddedViews.indexOf(e._view);
              },
            },
            {
              key: 'remove',
              value: function (e) {
                var t = _r(this._data, e);
                t && Mn.destroyView(t);
              },
            },
            {
              key: 'detach',
              value: function (e) {
                var t = _r(this._data, e);
                return t ? new Ir(t) : null;
              },
            },
            {
              key: 'element',
              get: function () {
                return new Qt(this._data.renderElement);
              },
            },
            {
              key: 'injector',
              get: function () {
                return new Mr(this._view, this._elDef);
              },
            },
            {
              key: 'parentInjector',
              get: function () {
                for (var e = this._view, t = this._elDef.parent; !t && e; )
                  (t = Kn(e)), (e = e.parent);
                return e ? new Mr(e, t) : new Mr(this._view, null);
              },
            },
            {
              key: 'length',
              get: function () {
                return this._embeddedViews.length;
              },
            },
          ]),
          e
        );
      })();
      function Rr(e) {
        return new Ir(e);
      }
      var Ir = (function () {
        function e(t) {
          _classCallCheck(this, e),
            (this._view = t),
            (this._viewContainerRef = null),
            (this._appRef = null);
        }
        return (
          _createClass(e, [
            {
              key: 'markForCheck',
              value: function () {
                Gn(this._view);
              },
            },
            {
              key: 'detach',
              value: function () {
                this._view.state &= -5;
              },
            },
            {
              key: 'detectChanges',
              value: function () {
                var e = this._view.root.rendererFactory;
                e.begin && e.begin();
                try {
                  Mn.checkAndUpdateView(this._view);
                } finally {
                  e.end && e.end();
                }
              },
            },
            {
              key: 'checkNoChanges',
              value: function () {
                Mn.checkNoChangesView(this._view);
              },
            },
            {
              key: 'reattach',
              value: function () {
                this._view.state |= 4;
              },
            },
            {
              key: 'onDestroy',
              value: function (e) {
                this._view.disposables || (this._view.disposables = []),
                  this._view.disposables.push(e);
              },
            },
            {
              key: 'destroy',
              value: function () {
                this._appRef
                  ? this._appRef.detachView(this)
                  : this._viewContainerRef &&
                    this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)),
                  Mn.destroyView(this._view);
              },
            },
            {
              key: 'detachFromAppRef',
              value: function () {
                (this._appRef = null), kr(this._view), Mn.dirtyParentQueries(this._view);
              },
            },
            {
              key: 'attachToAppRef',
              value: function (e) {
                if (this._viewContainerRef)
                  throw new Error('This view is already attached to a ViewContainer!');
                this._appRef = e;
              },
            },
            {
              key: 'attachToViewContainerRef',
              value: function (e) {
                if (this._appRef)
                  throw new Error('This view is already attached directly to the ApplicationRef!');
                this._viewContainerRef = e;
              },
            },
            {
              key: 'rootNodes',
              get: function () {
                return ir(this._view, 0, void 0, void 0, (e = [])), e;
                var e;
              },
            },
            {
              key: 'context',
              get: function () {
                return this._view.context;
              },
            },
            {
              key: 'destroyed',
              get: function () {
                return 0 != (128 & this._view.state);
              },
            },
          ]),
          e
        );
      })();
      function Or(e, t) {
        return new Dr(e, t);
      }
      var Dr = (function (e) {
        _inherits(n, e);
        var t = _createSuper(n);
        function n(e, r) {
          var i;
          return _classCallCheck(this, n), ((i = t.call(this))._parentView = e), (i._def = r), i;
        }
        return (
          _createClass(n, [
            {
              key: 'createEmbeddedView',
              value: function (e) {
                return new Ir(
                  Mn.createEmbeddedView(this._parentView, this._def, this._def.element.template, e)
                );
              },
            },
            {
              key: 'elementRef',
              get: function () {
                return new Qt(In(this._parentView, this._def.nodeIndex).renderElement);
              },
            },
          ]),
          n
        );
      })(kn);
      function Vr(e, t) {
        return new Mr(e, t);
      }
      var Mr = (function () {
        function e(t, n) {
          _classCallCheck(this, e), (this.view = t), (this.elDef = n);
        }
        return (
          _createClass(e, [
            {
              key: 'get',
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : Ue.THROW_IF_NOT_FOUND;
                return Mn.resolveDep(
                  this.view,
                  this.elDef,
                  !!this.elDef && 0 != (33554432 & this.elDef.flags),
                  { flags: 0, token: e, tokenKey: Fn(e) },
                  t
                );
              },
            },
          ]),
          e
        );
      })();
      function Nr(e, t) {
        var n = e.def.nodes[t];
        if (1 & n.flags) {
          var r = In(e, n.nodeIndex);
          return n.element.template ? r.template : r.renderElement;
        }
        if (2 & n.flags) return Rn(e, n.nodeIndex).renderText;
        if (20240 & n.flags) return On(e, n.nodeIndex).instance;
        throw new Error('Illegal state: read nodeValue for node index ' + t);
      }
      function Lr(e) {
        return new Fr(e.renderer);
      }
      var Fr = (function () {
        function e(t) {
          _classCallCheck(this, e), (this.delegate = t);
        }
        return (
          _createClass(e, [
            {
              key: 'selectRootElement',
              value: function (e) {
                return this.delegate.selectRootElement(e);
              },
            },
            {
              key: 'createElement',
              value: function (e, t) {
                var n = _slicedToArray(cr(t), 2),
                  r = n[0],
                  i = n[1],
                  a = this.delegate.createElement(i, r);
                return e && this.delegate.appendChild(e, a), a;
              },
            },
            {
              key: 'createViewRoot',
              value: function (e) {
                return e;
              },
            },
            {
              key: 'createTemplateAnchor',
              value: function (e) {
                var t = this.delegate.createComment('');
                return e && this.delegate.appendChild(e, t), t;
              },
            },
            {
              key: 'createText',
              value: function (e, t) {
                var n = this.delegate.createText(t);
                return e && this.delegate.appendChild(e, n), n;
              },
            },
            {
              key: 'projectNodes',
              value: function (e, t) {
                for (var n = 0; n < t.length; n++) this.delegate.appendChild(e, t[n]);
              },
            },
            {
              key: 'attachViewAfter',
              value: function (e, t) {
                for (
                  var n = this.delegate.parentNode(e), r = this.delegate.nextSibling(e), i = 0;
                  i < t.length;
                  i++
                )
                  this.delegate.insertBefore(n, t[i], r);
              },
            },
            {
              key: 'detachView',
              value: function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t],
                    r = this.delegate.parentNode(n);
                  this.delegate.removeChild(r, n);
                }
              },
            },
            {
              key: 'destroyView',
              value: function (e, t) {
                for (var n = 0; n < t.length; n++) this.delegate.destroyNode(t[n]);
              },
            },
            {
              key: 'listen',
              value: function (e, t, n) {
                return this.delegate.listen(e, t, n);
              },
            },
            {
              key: 'listenGlobal',
              value: function (e, t, n) {
                return this.delegate.listen(e, t, n);
              },
            },
            {
              key: 'setElementProperty',
              value: function (e, t, n) {
                this.delegate.setProperty(e, t, n);
              },
            },
            {
              key: 'setElementAttribute',
              value: function (e, t, n) {
                var r = _slicedToArray(cr(t), 2),
                  i = r[0],
                  a = r[1];
                null != n
                  ? this.delegate.setAttribute(e, a, n, i)
                  : this.delegate.removeAttribute(e, a, i);
              },
            },
            { key: 'setBindingDebugInfo', value: function (e, t, n) {} },
            {
              key: 'setElementClass',
              value: function (e, t, n) {
                n ? this.delegate.addClass(e, t) : this.delegate.removeClass(e, t);
              },
            },
            {
              key: 'setElementStyle',
              value: function (e, t, n) {
                null != n ? this.delegate.setStyle(e, t, n) : this.delegate.removeStyle(e, t);
              },
            },
            {
              key: 'invokeElementMethod',
              value: function (e, t, n) {
                e[t].apply(e, n);
              },
            },
            {
              key: 'setText',
              value: function (e, t) {
                this.delegate.setValue(e, t);
              },
            },
            {
              key: 'animate',
              value: function () {
                throw new Error('Renderer.animate is no longer supported!');
              },
            },
          ]),
          e
        );
      })();
      function Ur(e, t, n, r) {
        return new jr(e, t, n, r);
      }
      var jr = (function () {
          function e(t, n, r, i) {
            _classCallCheck(this, e),
              (this._moduleType = t),
              (this._parent = n),
              (this._bootstrapComponents = r),
              (this._def = i),
              (this._destroyListeners = []),
              (this._destroyed = !1),
              (this.injector = this),
              (function (e) {
                for (
                  var t = e._def, n = (e._providers = new Array(t.providers.length)), r = 0;
                  r < t.providers.length;
                  r++
                ) {
                  var i = t.providers[r];
                  4096 & i.flags || (void 0 === n[r] && (n[r] = yr(e, i)));
                }
              })(this);
          }
          return (
            _createClass(e, [
              {
                key: 'get',
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : Ue.THROW_IF_NOT_FOUND,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fe.Default,
                    r = 0;
                  return (
                    n & fe.SkipSelf ? (r |= 1) : n & fe.Self && (r |= 4),
                    mr(this, { token: e, tokenKey: Fn(e), flags: r }, t)
                  );
                },
              },
              {
                key: 'destroy',
                value: function () {
                  if (this._destroyed)
                    throw new Error(
                      'The ng module '.concat(
                        ye(this.instance.constructor),
                        ' has already been destroyed.'
                      )
                    );
                  (this._destroyed = !0),
                    (function (e, t) {
                      for (var n = e._def, r = new Set(), i = 0; i < n.providers.length; i++)
                        if (131072 & n.providers[i].flags) {
                          var a = e._providers[i];
                          if (a && a !== dr) {
                            var o = a.ngOnDestroy;
                            'function' != typeof o || r.has(a) || (o.apply(a), r.add(a));
                          }
                        }
                    })(this),
                    this._destroyListeners.forEach(function (e) {
                      return e();
                    });
                },
              },
              {
                key: 'onDestroy',
                value: function (e) {
                  this._destroyListeners.push(e);
                },
              },
              {
                key: 'instance',
                get: function () {
                  return this.get(this._moduleType);
                },
              },
              {
                key: 'componentFactoryResolver',
                get: function () {
                  return this.get(qt);
                },
              },
            ]),
            e
          );
        })(),
        Hr = Fn(function e() {
          _classCallCheck(this, e);
        }),
        zr = Fn(en),
        Br = Fn(Qt),
        qr = Fn(wn),
        Gr = Fn(kn),
        $r = Fn(gn),
        Wr = Fn(Ue),
        Zr = Fn(Pe);
      function Kr(e, t, n, r, i, a, o, l) {
        var u = [];
        if (o)
          for (var s in o) {
            var c = _slicedToArray(o[s], 2),
              h = c[0],
              d = c[1];
            u[h] = {
              flags: 8,
              name: s,
              nonMinifiedName: d,
              ns: null,
              securityContext: null,
              suffix: null,
            };
          }
        var f = [];
        if (l) for (var p in l) f.push({ type: 1, propName: p, target: null, eventName: l[p] });
        return Jr(e, (t |= 16384), n, r, i, i, a, u, f);
      }
      function Qr(e, t, n) {
        return Jr(-1, (e |= 16), null, 0, t, t, n);
      }
      function Yr(e, t, n, r, i) {
        return Jr(-1, e, t, 0, n, r, i);
      }
      function Jr(e, t, n, r, i, a, o, l, u) {
        var s = Xn(n),
          c = s.matchedQueries,
          h = s.references,
          d = s.matchedQueryIds;
        u || (u = []), l || (l = []), (a = ke(a));
        var f = er(o, ye(i));
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: t,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: c,
          matchedQueryIds: d,
          references: h,
          ngContentIndex: -1,
          childCount: r,
          bindings: l,
          bindingFlags: hr(l),
          outputs: u,
          element: null,
          provider: { token: i, value: a, deps: f },
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function Xr(e, t) {
        return ri(e, t);
      }
      function ei(e, t) {
        for (var n = e; n.parent && !Yn(n); ) n = n.parent;
        return ii(n.parent, Kn(n), !0, t.provider.value, t.provider.deps);
      }
      function ti(e, t) {
        var n = ii(e, t.parent, (32768 & t.flags) > 0, t.provider.value, t.provider.deps);
        if (t.outputs.length)
          for (var r = 0; r < t.outputs.length; r++) {
            var i = t.outputs[r],
              a = n[i.propName];
            if (!Ft(a))
              throw new Error(
                '@Output '
                  .concat(i.propName, " not initialized in '")
                  .concat(n.constructor.name, "'.")
              );
            var o = a.subscribe(ni(e, t.parent.nodeIndex, i.eventName));
            e.disposables[t.outputIndex + r] = o.unsubscribe.bind(o);
          }
        return n;
      }
      function ni(e, t, n) {
        return function (r) {
          return Wn(e, t, n, r);
        };
      }
      function ri(e, t) {
        var n = (8192 & t.flags) > 0,
          r = t.provider;
        switch (201347067 & t.flags) {
          case 512:
            return ii(e, t.parent, n, r.value, r.deps);
          case 1024:
            return (function (e, t, n, r, i) {
              var a = i.length;
              switch (a) {
                case 0:
                  return r();
                case 1:
                  return r(oi(e, t, n, i[0]));
                case 2:
                  return r(oi(e, t, n, i[0]), oi(e, t, n, i[1]));
                case 3:
                  return r(oi(e, t, n, i[0]), oi(e, t, n, i[1]), oi(e, t, n, i[2]));
                default:
                  for (var o = Array(a), l = 0; l < a; l++) o[l] = oi(e, t, n, i[l]);
                  return r.apply(void 0, o);
              }
            })(e, t.parent, n, r.value, r.deps);
          case 2048:
            return oi(e, t.parent, n, r.deps[0]);
          case 256:
            return r.value;
        }
      }
      function ii(e, t, n, r, i) {
        var a = i.length;
        switch (a) {
          case 0:
            return new r();
          case 1:
            return new r(oi(e, t, n, i[0]));
          case 2:
            return new r(oi(e, t, n, i[0]), oi(e, t, n, i[1]));
          case 3:
            return new r(oi(e, t, n, i[0]), oi(e, t, n, i[1]), oi(e, t, n, i[2]));
          default:
            for (var o = new Array(a), l = 0; l < a; l++) o[l] = oi(e, t, n, i[l]);
            return _construct(r, o);
        }
      }
      var ai = {};
      function oi(e, t, n, r) {
        var i =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Ue.THROW_IF_NOT_FOUND;
        if (8 & r.flags) return r.token;
        var a = e;
        2 & r.flags && (i = null);
        var o = r.tokenKey;
        o === $r && (n = !(!t || !t.element.componentView)),
          t && 1 & r.flags && ((n = !1), (t = t.parent));
        for (var l = e; l; ) {
          if (t)
            switch (o) {
              case Hr:
                return Lr(li(l, t, n));
              case zr:
                return li(l, t, n).renderer;
              case Br:
                return new Qt(In(l, t.nodeIndex).renderElement);
              case qr:
                return In(l, t.nodeIndex).viewContainer;
              case Gr:
                if (t.element.template) return In(l, t.nodeIndex).template;
                break;
              case $r:
                return Rr(li(l, t, n));
              case Wr:
              case Zr:
                return Vr(l, t);
              default:
                var u = (n ? t.element.allProviders : t.element.publicProviders)[o];
                if (u) {
                  var s = On(l, u.nodeIndex);
                  return (
                    s || ((s = { instance: ri(l, u) }), (l.nodes[u.nodeIndex] = s)), s.instance
                  );
                }
            }
          (n = Yn(l)), (t = Kn(l)), (l = l.parent), 4 & r.flags && (l = null);
        }
        var c = a.root.injector.get(r.token, ai);
        return c !== ai || i === ai ? c : a.root.ngModule.injector.get(r.token, i);
      }
      function li(e, t, n) {
        var r;
        if (n) r = In(e, t.nodeIndex).componentView;
        else for (r = e; r.parent && !Yn(r); ) r = r.parent;
        return r;
      }
      function ui(e, t, n, r, i, a) {
        if (32768 & n.flags) {
          var o = In(e, n.parent.nodeIndex).componentView;
          2 & o.def.flags && (o.state |= 8);
        }
        if (((t.instance[n.bindings[r].name] = i), 524288 & n.flags)) {
          a = a || {};
          var l = Vt.unwrap(e.oldValues[n.bindingIndex + r]);
          a[n.bindings[r].nonMinifiedName] = new Ut(l, i, 0 != (2 & e.state));
        }
        return (e.oldValues[n.bindingIndex + r] = i), a;
      }
      function si(e, t) {
        if (e.def.nodeFlags & t)
          for (var n = e.def.nodes, r = 0, i = 0; i < n.length; i++) {
            var a = n[i],
              o = a.parent;
            for (
              !o && a.flags & t && hi(e, i, a.flags & t, r++),
                0 == (a.childFlags & t) && (i += a.childCount);
              o && 1 & o.flags && i === o.nodeIndex + o.childCount;

            )
              o.directChildFlags & t && (r = ci(e, o, t, r)), (o = o.parent);
          }
      }
      function ci(e, t, n, r) {
        for (var i = t.nodeIndex + 1; i <= t.nodeIndex + t.childCount; i++) {
          var a = e.def.nodes[i];
          a.flags & n && hi(e, i, a.flags & n, r++), (i += a.childCount);
        }
        return r;
      }
      function hi(e, t, n, r) {
        var i = On(e, t);
        if (i) {
          var a = i.instance;
          a &&
            (Mn.setCurrentNode(e, t),
            1048576 & n && An(e, 512, r) && a.ngAfterContentInit(),
            2097152 & n && a.ngAfterContentChecked(),
            4194304 & n && An(e, 768, r) && a.ngAfterViewInit(),
            8388608 & n && a.ngAfterViewChecked(),
            131072 & n && a.ngOnDestroy());
        }
      }
      var di = new Te('SCHEDULER_TOKEN', {
          providedIn: 'root',
          factory: function () {
            return Ke;
          },
        }),
        fi = {},
        pi = (function () {
          var e = {
            LocaleId: 0,
            DayPeriodsFormat: 1,
            DayPeriodsStandalone: 2,
            DaysFormat: 3,
            DaysStandalone: 4,
            MonthsFormat: 5,
            MonthsStandalone: 6,
            Eras: 7,
            FirstDayOfWeek: 8,
            WeekendRange: 9,
            DateFormat: 10,
            TimeFormat: 11,
            DateTimeFormat: 12,
            NumberSymbols: 13,
            NumberFormats: 14,
            CurrencySymbol: 15,
            CurrencyName: 16,
            Currencies: 17,
            PluralCase: 18,
            ExtraData: 19,
          };
          return (
            (e[e.LocaleId] = 'LocaleId'),
            (e[e.DayPeriodsFormat] = 'DayPeriodsFormat'),
            (e[e.DayPeriodsStandalone] = 'DayPeriodsStandalone'),
            (e[e.DaysFormat] = 'DaysFormat'),
            (e[e.DaysStandalone] = 'DaysStandalone'),
            (e[e.MonthsFormat] = 'MonthsFormat'),
            (e[e.MonthsStandalone] = 'MonthsStandalone'),
            (e[e.Eras] = 'Eras'),
            (e[e.FirstDayOfWeek] = 'FirstDayOfWeek'),
            (e[e.WeekendRange] = 'WeekendRange'),
            (e[e.DateFormat] = 'DateFormat'),
            (e[e.TimeFormat] = 'TimeFormat'),
            (e[e.DateTimeFormat] = 'DateTimeFormat'),
            (e[e.NumberSymbols] = 'NumberSymbols'),
            (e[e.NumberFormats] = 'NumberFormats'),
            (e[e.CurrencySymbol] = 'CurrencySymbol'),
            (e[e.CurrencyName] = 'CurrencyName'),
            (e[e.Currencies] = 'Currencies'),
            (e[e.PluralCase] = 'PluralCase'),
            (e[e.ExtraData] = 'ExtraData'),
            e
          );
        })(),
        vi = void 0,
        gi = [
          'en',
          [['a', 'p'], ['AM', 'PM'], vi],
          [['AM', 'PM'], vi, vi],
          [
            ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          ],
          vi,
          [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],
          ],
          vi,
          [
            ['B', 'A'],
            ['BC', 'AD'],
            ['Before Christ', 'Anno Domini'],
          ],
          0,
          [6, 0],
          ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
          ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
          ['{1}, {0}', vi, "{1} 'at' {0}", vi],
          ['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
          ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
          '$',
          'US Dollar',
          {},
          function (e) {
            var t = Math.floor(Math.abs(e)),
              n = e.toString().replace(/^[^.]*\.?/, '').length;
            return 1 === t && 0 === n ? 1 : 5;
          },
        ];
      function mi(e) {
        var t = e.toLowerCase().replace(/_/g, '-'),
          n = fi[t];
        if (n) return n;
        var r = t.split('-')[0];
        if ((n = fi[r])) return n;
        if ('en' === r) return gi;
        throw new Error('Missing locale data for the locale "'.concat(e, '".'));
      }
      var yi = (function (e) {
        _inherits(n, e);
        var t = _createSuper(n);
        function n() {
          var e,
            r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return _classCallCheck(this, n), ((e = t.call(this)).__isAsync = r), e;
        }
        return (
          _createClass(n, [
            {
              key: 'emit',
              value: function (e) {
                _get(_getPrototypeOf(n.prototype), 'next', this).call(this, e);
              },
            },
            {
              key: 'subscribe',
              value: function (e, t, r) {
                var i,
                  a = function (e) {
                    return null;
                  },
                  o = function () {
                    return null;
                  };
                e && 'object' == typeof e
                  ? ((i = this.__isAsync
                      ? function (t) {
                          setTimeout(function () {
                            return e.next(t);
                          });
                        }
                      : function (t) {
                          e.next(t);
                        }),
                    e.error &&
                      (a = this.__isAsync
                        ? function (t) {
                            setTimeout(function () {
                              return e.error(t);
                            });
                          }
                        : function (t) {
                            e.error(t);
                          }),
                    e.complete &&
                      (o = this.__isAsync
                        ? function () {
                            setTimeout(function () {
                              return e.complete();
                            });
                          }
                        : function () {
                            e.complete();
                          }))
                  : ((i = this.__isAsync
                      ? function (t) {
                          setTimeout(function () {
                            return e(t);
                          });
                        }
                      : function (t) {
                          e(t);
                        }),
                    t &&
                      (a = this.__isAsync
                        ? function (e) {
                            setTimeout(function () {
                              return t(e);
                            });
                          }
                        : function (e) {
                            t(e);
                          }),
                    r &&
                      (o = this.__isAsync
                        ? function () {
                            setTimeout(function () {
                              return r();
                            });
                          }
                        : function () {
                            r();
                          }));
                var l = _get(_getPrototypeOf(n.prototype), 'subscribe', this).call(this, i, a, o);
                return e instanceof f && e.add(l), l;
              },
            },
          ]),
          n
        );
      })(R);
      function _i() {
        return this._results[It()]();
      }
      var Ci = (function () {
          function e() {
            _classCallCheck(this, e),
              (this.dirty = !0),
              (this._results = []),
              (this.changes = new yi()),
              (this.length = 0);
            var t = It(),
              n = e.prototype;
            n[t] || (n[t] = _i);
          }
          return (
            _createClass(e, [
              {
                key: 'map',
                value: function (e) {
                  return this._results.map(e);
                },
              },
              {
                key: 'filter',
                value: function (e) {
                  return this._results.filter(e);
                },
              },
              {
                key: 'find',
                value: function (e) {
                  return this._results.find(e);
                },
              },
              {
                key: 'reduce',
                value: function (e, t) {
                  return this._results.reduce(e, t);
                },
              },
              {
                key: 'forEach',
                value: function (e) {
                  this._results.forEach(e);
                },
              },
              {
                key: 'some',
                value: function (e) {
                  return this._results.some(e);
                },
              },
              {
                key: 'toArray',
                value: function () {
                  return this._results.slice();
                },
              },
              {
                key: 'toString',
                value: function () {
                  return this._results.toString();
                },
              },
              {
                key: 'reset',
                value: function (e) {
                  (this._results = (function e(t, n) {
                    void 0 === n && (n = t);
                    for (var r = 0; r < t.length; r++) {
                      var i = t[r];
                      Array.isArray(i)
                        ? (n === t && (n = t.slice(0, r)), e(i, n))
                        : n !== t && n.push(i);
                    }
                    return n;
                  })(e)),
                    (this.dirty = !1),
                    (this.length = this._results.length),
                    (this.last = this._results[this.length - 1]),
                    (this.first = this._results[0]);
                },
              },
              {
                key: 'notifyOnChanges',
                value: function () {
                  this.changes.emit(this);
                },
              },
              {
                key: 'setDirty',
                value: function () {
                  this.dirty = !0;
                },
              },
              {
                key: 'destroy',
                value: function () {
                  this.changes.complete(), this.changes.unsubscribe();
                },
              },
            ]),
            e
          );
        })(),
        ki = new Te('Application Initializer'),
        bi = (function () {
          function e(t) {
            var n = this;
            _classCallCheck(this, e),
              (this.appInits = t),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise(function (e, t) {
                (n.resolve = e), (n.reject = t);
              }));
          }
          return (
            _createClass(e, [
              {
                key: 'runInitializers',
                value: function () {
                  var e = this;
                  if (!this.initialized) {
                    var t = [],
                      n = function () {
                        (e.done = !0), e.resolve();
                      };
                    if (this.appInits)
                      for (var r = 0; r < this.appInits.length; r++) {
                        var i = this.appInits[r]();
                        Lt(i) && t.push(i);
                      }
                    Promise.all(t)
                      .then(function () {
                        n();
                      })
                      .catch(function (t) {
                        e.reject(t);
                      }),
                      0 === t.length && n(),
                      (this.initialized = !0);
                  }
                },
              },
            ]),
            e
          );
        })(),
        wi = new Te('AppId');
      function xi() {
        return ''.concat(Si()).concat(Si()).concat(Si());
      }
      function Si() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      var Ei = new Te('Platform Initializer'),
        Ti = new Te('Platform ID'),
        Pi = new Te('appBootstrapListener'),
        Ai = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: 'log',
                value: function (e) {
                  console.log(e);
                },
              },
              {
                key: 'warn',
                value: function (e) {
                  console.warn(e);
                },
              },
            ]),
            e
          );
        })(),
        Ri = new Te('LocaleId');
      function Ii() {
        throw new Error('Runtime compiler is not loaded');
      }
      var Oi,
        Di,
        Vi = Ii,
        Mi = Ii,
        Ni = Ii,
        Li = Ii,
        Fi = (function () {
          function e() {
            _classCallCheck(this, e),
              (this.compileModuleSync = Vi),
              (this.compileModuleAsync = Mi),
              (this.compileModuleAndAllComponentsSync = Ni),
              (this.compileModuleAndAllComponentsAsync = Li);
          }
          return (
            _createClass(e, [
              { key: 'clearCache', value: function () {} },
              { key: 'clearCacheFor', value: function (e) {} },
              { key: 'getModuleId', value: function (e) {} },
            ]),
            e
          );
        })(),
        Ui = function e() {
          _classCallCheck(this, e);
        };
      var ji,
        Hi = !(!(ji = Ee.wtf) || ((Oi = ji.trace), !Oi) || ((Di = Oi.events), 0));
      function zi(e, t) {
        return null;
      }
      var Bi = Hi
          ? function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              return Di.createScope(e, t);
            }
          : function (e, t) {
              return zi;
            },
        qi = Hi
          ? function (e, t) {
              return Oi.leaveScope(e, t), t;
            }
          : function (e, t) {
              return t;
            },
        Gi = Promise.resolve(0);
      function $i(e) {
        'undefined' == typeof Zone
          ? Gi.then(function () {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
      }
      var Wi = (function () {
        function e(t) {
          var n,
            r = t.enableLongStackTrace,
            i = void 0 !== r && r;
          if (
            (_classCallCheck(this, e),
            (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new yi(!1)),
            (this.onMicrotaskEmpty = new yi(!1)),
            (this.onStable = new yi(!1)),
            (this.onError = new yi(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            i &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            ((n = this)._inner = n._inner.fork({
              name: 'angular',
              properties: { isAngularZone: !0 },
              onInvokeTask: function (e, t, r, i, a, o) {
                try {
                  return Yi(n), e.invokeTask(r, i, a, o);
                } finally {
                  Ji(n);
                }
              },
              onInvoke: function (e, t, r, i, a, o, l) {
                try {
                  return Yi(n), e.invoke(r, i, a, o, l);
                } finally {
                  Ji(n);
                }
              },
              onHasTask: function (e, t, r, i) {
                e.hasTask(r, i),
                  t === r &&
                    ('microTask' == i.change
                      ? ((n.hasPendingMicrotasks = i.microTask), Qi(n))
                      : 'macroTask' == i.change && (n.hasPendingMacrotasks = i.macroTask));
              },
              onHandleError: function (e, t, r, i) {
                return (
                  e.handleError(r, i),
                  n.runOutsideAngular(function () {
                    return n.onError.emit(i);
                  }),
                  !1
                );
              },
            }));
        }
        return (
          _createClass(
            e,
            [
              {
                key: 'run',
                value: function (e, t, n) {
                  return this._inner.run(e, t, n);
                },
              },
              {
                key: 'runTask',
                value: function (e, t, n, r) {
                  var i = this._inner,
                    a = i.scheduleEventTask('NgZoneEvent: ' + r, e, Ki, Zi, Zi);
                  try {
                    return i.runTask(a, t, n);
                  } finally {
                    i.cancelTask(a);
                  }
                },
              },
              {
                key: 'runGuarded',
                value: function (e, t, n) {
                  return this._inner.runGuarded(e, t, n);
                },
              },
              {
                key: 'runOutsideAngular',
                value: function (e) {
                  return this._outer.run(e);
                },
              },
            ],
            [
              {
                key: 'isInAngularZone',
                value: function () {
                  return !0 === Zone.current.get('isAngularZone');
                },
              },
              {
                key: 'assertInAngularZone',
                value: function () {
                  if (!e.isInAngularZone())
                    throw new Error('Expected to be in Angular Zone, but it is not!');
                },
              },
              {
                key: 'assertNotInAngularZone',
                value: function () {
                  if (e.isInAngularZone())
                    throw new Error('Expected to not be in Angular Zone, but it is!');
                },
              },
            ]
          ),
          e
        );
      })();
      function Zi() {}
      var Ki = {};
      function Qi(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(function () {
                  return e.onStable.emit(null);
                });
              } finally {
                e.isStable = !0;
              }
          }
      }
      function Yi(e) {
        e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function Ji(e) {
        e._nesting--, Qi(e);
      }
      var Xi,
        ea = (function () {
          function e() {
            _classCallCheck(this, e),
              (this.hasPendingMicrotasks = !1),
              (this.hasPendingMacrotasks = !1),
              (this.isStable = !0),
              (this.onUnstable = new yi()),
              (this.onMicrotaskEmpty = new yi()),
              (this.onStable = new yi()),
              (this.onError = new yi());
          }
          return (
            _createClass(e, [
              {
                key: 'run',
                value: function (e) {
                  return e();
                },
              },
              {
                key: 'runGuarded',
                value: function (e) {
                  return e();
                },
              },
              {
                key: 'runOutsideAngular',
                value: function (e) {
                  return e();
                },
              },
              {
                key: 'runTask',
                value: function (e) {
                  return e();
                },
              },
            ]),
            e
          );
        })(),
        ta = (function () {
          function e(t) {
            var n = this;
            _classCallCheck(this, e),
              (this._ngZone = t),
              (this._pendingCount = 0),
              (this._isZoneStable = !0),
              (this._didWork = !1),
              (this._callbacks = []),
              (this.taskTrackingZone = null),
              this._watchAngularEvents(),
              t.run(function () {
                n.taskTrackingZone =
                  'undefined' == typeof Zone ? null : Zone.current.get('TaskTrackingZone');
              });
          }
          return (
            _createClass(e, [
              {
                key: '_watchAngularEvents',
                value: function () {
                  var e = this;
                  this._ngZone.onUnstable.subscribe({
                    next: function () {
                      (e._didWork = !0), (e._isZoneStable = !1);
                    },
                  }),
                    this._ngZone.runOutsideAngular(function () {
                      e._ngZone.onStable.subscribe({
                        next: function () {
                          Wi.assertNotInAngularZone(),
                            $i(function () {
                              (e._isZoneStable = !0), e._runCallbacksIfReady();
                            });
                        },
                      });
                    });
                },
              },
              {
                key: 'increasePendingRequestCount',
                value: function () {
                  return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
                },
              },
              {
                key: 'decreasePendingRequestCount',
                value: function () {
                  if (((this._pendingCount -= 1), this._pendingCount < 0))
                    throw new Error('pending async requests below zero');
                  return this._runCallbacksIfReady(), this._pendingCount;
                },
              },
              {
                key: 'isStable',
                value: function () {
                  return (
                    this._isZoneStable &&
                    0 === this._pendingCount &&
                    !this._ngZone.hasPendingMacrotasks
                  );
                },
              },
              {
                key: '_runCallbacksIfReady',
                value: function () {
                  var e = this;
                  if (this.isStable())
                    $i(function () {
                      for (; 0 !== e._callbacks.length; ) {
                        var t = e._callbacks.pop();
                        clearTimeout(t.timeoutId), t.doneCb(e._didWork);
                      }
                      e._didWork = !1;
                    });
                  else {
                    var t = this.getPendingTasks();
                    (this._callbacks = this._callbacks.filter(function (e) {
                      return !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1);
                    })),
                      (this._didWork = !0);
                  }
                },
              },
              {
                key: 'getPendingTasks',
                value: function () {
                  return this.taskTrackingZone
                    ? this.taskTrackingZone.macroTasks.map(function (e) {
                        return {
                          source: e.source,
                          creationLocation: e.creationLocation,
                          data: e.data,
                        };
                      })
                    : [];
                },
              },
              {
                key: 'addCallback',
                value: function (e, t, n) {
                  var r = this,
                    i = -1;
                  t &&
                    t > 0 &&
                    (i = setTimeout(function () {
                      (r._callbacks = r._callbacks.filter(function (e) {
                        return e.timeoutId !== i;
                      })),
                        e(r._didWork, r.getPendingTasks());
                    }, t)),
                    this._callbacks.push({ doneCb: e, timeoutId: i, updateCb: n });
                },
              },
              {
                key: 'whenStable',
                value: function (e, t, n) {
                  if (n && !this.taskTrackingZone)
                    throw new Error(
                      'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                    );
                  this.addCallback(e, t, n), this._runCallbacksIfReady();
                },
              },
              {
                key: 'getPendingRequestCount',
                value: function () {
                  return this._pendingCount;
                },
              },
              {
                key: 'findProviders',
                value: function (e, t, n) {
                  return [];
                },
              },
            ]),
            e
          );
        })(),
        na = (function () {
          function e() {
            _classCallCheck(this, e), (this._applications = new Map()), ra.addToWindow(this);
          }
          return (
            _createClass(e, [
              {
                key: 'registerApplication',
                value: function (e, t) {
                  this._applications.set(e, t);
                },
              },
              {
                key: 'unregisterApplication',
                value: function (e) {
                  this._applications.delete(e);
                },
              },
              {
                key: 'unregisterAllApplications',
                value: function () {
                  this._applications.clear();
                },
              },
              {
                key: 'getTestability',
                value: function (e) {
                  return this._applications.get(e) || null;
                },
              },
              {
                key: 'getAllTestabilities',
                value: function () {
                  return Array.from(this._applications.values());
                },
              },
              {
                key: 'getAllRootElements',
                value: function () {
                  return Array.from(this._applications.keys());
                },
              },
              {
                key: 'findTestabilityInTree',
                value: function (e) {
                  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                  return ra.findTestabilityInTree(this, e, t);
                },
              },
            ]),
            e
          );
        })(),
        ra = new ((function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              { key: 'addToWindow', value: function (e) {} },
              {
                key: 'findTestabilityInTree',
                value: function (e, t, n) {
                  return null;
                },
              },
            ]),
            e
          );
        })())(),
        ia = new Te('AllowMultipleToken'),
        aa = function e(t, n) {
          _classCallCheck(this, e), (this.name = t), (this.token = n);
        };
      function oa(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          r = 'Platform: ' + t,
          i = new Te(r);
        return function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            a = la();
          if (!a || a.injector.get(ia, !1))
            if (e) e(n.concat(t).concat({ provide: i, useValue: !0 }));
            else {
              var o = n.concat(t).concat({ provide: i, useValue: !0 });
              !(function (e) {
                if (Xi && !Xi.destroyed && !Xi.injector.get(ia, !1))
                  throw new Error(
                    'There can be only one platform. Destroy the previous one to create a new one.'
                  );
                Xi = e.get(ua);
                var t = e.get(Ei, null);
                t &&
                  t.forEach(function (e) {
                    return e();
                  });
              })(Ue.create({ providers: o, name: r }));
            }
          return (function (e) {
            var t = la();
            if (!t) throw new Error('No platform exists!');
            if (!t.injector.get(e, null))
              throw new Error(
                'A platform with a different configuration has been created. Please destroy it first.'
              );
            return t;
          })(i);
        };
      }
      function la() {
        return Xi && !Xi.destroyed ? Xi : null;
      }
      var ua = (function () {
        function e(t) {
          _classCallCheck(this, e),
            (this._injector = t),
            (this._modules = []),
            (this._destroyListeners = []),
            (this._destroyed = !1);
        }
        return (
          _createClass(e, [
            {
              key: 'bootstrapModuleFactory',
              value: function (e, t) {
                var n,
                  r = this,
                  i =
                    'noop' === (n = t ? t.ngZone : void 0)
                      ? new ea()
                      : ('zone.js' === n ? void 0 : n) || new Wi({ enableLongStackTrace: Je() }),
                  a = [{ provide: Wi, useValue: i }];
                return i.run(function () {
                  var t = Ue.create({ providers: a, parent: r.injector, name: e.moduleType.name }),
                    n = e.create(t),
                    o = n.injector.get(Tt, null);
                  if (!o)
                    throw new Error(
                      'No ErrorHandler. Is platform module (BrowserModule) included?'
                    );
                  return (
                    (function (e) {
                      e.toLowerCase().replace(/_/g, '-');
                    })(n.injector.get(Ri, 'en-US')),
                    n.onDestroy(function () {
                      return da(r._modules, n);
                    }),
                    i.runOutsideAngular(function () {
                      return i.onError.subscribe({
                        next: function (e) {
                          o.handleError(e);
                        },
                      });
                    }),
                    (function (e, t, i) {
                      try {
                        var a =
                          ((o = n.injector.get(bi)).runInitializers(),
                          o.donePromise.then(function () {
                            return r._moduleDoBootstrap(n), n;
                          }));
                        return Lt(a)
                          ? a.catch(function (n) {
                              throw (
                                (t.runOutsideAngular(function () {
                                  return e.handleError(n);
                                }),
                                n)
                              );
                            })
                          : a;
                      } catch (l) {
                        throw (
                          (t.runOutsideAngular(function () {
                            return e.handleError(l);
                          }),
                          l)
                        );
                      }
                      var o;
                    })(o, i)
                  );
                });
              },
            },
            {
              key: 'bootstrapModule',
              value: function (e) {
                var t = this,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                  r = sa({}, n);
                return (function (e, t, n) {
                  return e.get(Ui).createCompiler([t]).compileModuleAsync(n);
                })(this.injector, r, e).then(function (e) {
                  return t.bootstrapModuleFactory(e, r);
                });
              },
            },
            {
              key: '_moduleDoBootstrap',
              value: function (e) {
                var t = e.injector.get(ha);
                if (e._bootstrapComponents.length > 0)
                  e._bootstrapComponents.forEach(function (e) {
                    return t.bootstrap(e);
                  });
                else {
                  if (!e.instance.ngDoBootstrap)
                    throw new Error(
                      'The module '.concat(
                        ye(e.instance.constructor),
                        ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.'
                      )
                    );
                  e.instance.ngDoBootstrap(t);
                }
                this._modules.push(e);
              },
            },
            {
              key: 'onDestroy',
              value: function (e) {
                this._destroyListeners.push(e);
              },
            },
            {
              key: 'destroy',
              value: function () {
                if (this._destroyed) throw new Error('The platform has already been destroyed!');
                this._modules.slice().forEach(function (e) {
                  return e.destroy();
                }),
                  this._destroyListeners.forEach(function (e) {
                    return e();
                  }),
                  (this._destroyed = !0);
              },
            },
            {
              key: 'injector',
              get: function () {
                return this._injector;
              },
            },
            {
              key: 'destroyed',
              get: function () {
                return this._destroyed;
              },
            },
          ]),
          e
        );
      })();
      function sa(e, t) {
        return Array.isArray(t) ? t.reduce(sa, e) : Object.assign({}, e, t);
      }
      var ca,
        ha =
          (((ca = (function () {
            function e(t, n, r, i, a, o) {
              var l = this;
              _classCallCheck(this, e),
                (this._zone = t),
                (this._console = n),
                (this._injector = r),
                (this._exceptionHandler = i),
                (this._componentFactoryResolver = a),
                (this._initStatus = o),
                (this._bootstrapListeners = []),
                (this._views = []),
                (this._runningTick = !1),
                (this._enforceNoNewChanges = !1),
                (this._stable = !0),
                (this.componentTypes = []),
                (this.components = []),
                (this._enforceNoNewChanges = Je()),
                this._zone.onMicrotaskEmpty.subscribe({
                  next: function () {
                    l._zone.run(function () {
                      l.tick();
                    });
                  },
                });
              var u = new w(function (e) {
                  (l._stable =
                    l._zone.isStable &&
                    !l._zone.hasPendingMacrotasks &&
                    !l._zone.hasPendingMicrotasks),
                    l._zone.runOutsideAngular(function () {
                      e.next(l._stable), e.complete();
                    });
                }),
                s = new w(function (e) {
                  var t;
                  l._zone.runOutsideAngular(function () {
                    t = l._zone.onStable.subscribe(function () {
                      Wi.assertNotInAngularZone(),
                        $i(function () {
                          l._stable ||
                            l._zone.hasPendingMacrotasks ||
                            l._zone.hasPendingMicrotasks ||
                            ((l._stable = !0), e.next(!0));
                        });
                    });
                  });
                  var n = l._zone.onUnstable.subscribe(function () {
                    Wi.assertInAngularZone(),
                      l._stable &&
                        ((l._stable = !1),
                        l._zone.runOutsideAngular(function () {
                          e.next(!1);
                        }));
                  });
                  return function () {
                    t.unsubscribe(), n.unsubscribe();
                  };
                });
              this.isStable = ee(
                u,
                s.pipe(function (e) {
                  return te()(
                    ((t = le),
                    function (e) {
                      var n;
                      n =
                        'function' == typeof t
                          ? t
                          : function () {
                              return t;
                            };
                      var r = Object.create(e, ae);
                      return (r.source = e), (r.subjectFactory = n), r;
                    })(e)
                  );
                  var t;
                })
              );
            }
            return (
              _createClass(e, [
                {
                  key: 'bootstrap',
                  value: function (e, t) {
                    var n,
                      r = this;
                    if (!this._initStatus.done)
                      throw new Error(
                        'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
                      );
                    (n =
                      e instanceof jt
                        ? e
                        : this._componentFactoryResolver.resolveComponentFactory(e)),
                      this.componentTypes.push(n.componentType);
                    var i = n instanceof $t ? null : this._injector.get(Wt),
                      a = n.create(Ue.NULL, [], t || n.selector, i);
                    a.onDestroy(function () {
                      r._unloadComponent(a);
                    });
                    var o = a.injector.get(ta, null);
                    return (
                      o && a.injector.get(na).registerApplication(a.location.nativeElement, o),
                      this._loadComponent(a),
                      Je() &&
                        this._console.log(
                          'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
                        ),
                      a
                    );
                  },
                },
                {
                  key: 'tick',
                  value: function () {
                    var t = this;
                    if (this._runningTick)
                      throw new Error('ApplicationRef.tick is called recursively');
                    var n = e._tickScope();
                    try {
                      this._runningTick = !0;
                      var r,
                        i = _createForOfIteratorHelper(this._views);
                      try {
                        for (i.s(); !(r = i.n()).done; ) r.value.detectChanges();
                      } catch (l) {
                        i.e(l);
                      } finally {
                        i.f();
                      }
                      if (this._enforceNoNewChanges) {
                        var a,
                          o = _createForOfIteratorHelper(this._views);
                        try {
                          for (o.s(); !(a = o.n()).done; ) a.value.checkNoChanges();
                        } catch (l) {
                          o.e(l);
                        } finally {
                          o.f();
                        }
                      }
                    } catch (u) {
                      this._zone.runOutsideAngular(function () {
                        return t._exceptionHandler.handleError(u);
                      });
                    } finally {
                      (this._runningTick = !1), qi(n);
                    }
                  },
                },
                {
                  key: 'attachView',
                  value: function (e) {
                    var t = e;
                    this._views.push(t), t.attachToAppRef(this);
                  },
                },
                {
                  key: 'detachView',
                  value: function (e) {
                    var t = e;
                    da(this._views, t), t.detachFromAppRef();
                  },
                },
                {
                  key: '_loadComponent',
                  value: function (e) {
                    this.attachView(e.hostView),
                      this.tick(),
                      this.components.push(e),
                      this._injector
                        .get(Pi, [])
                        .concat(this._bootstrapListeners)
                        .forEach(function (t) {
                          return t(e);
                        });
                  },
                },
                {
                  key: '_unloadComponent',
                  value: function (e) {
                    this.detachView(e.hostView), da(this.components, e);
                  },
                },
                {
                  key: 'ngOnDestroy',
                  value: function () {
                    this._views.slice().forEach(function (e) {
                      return e.destroy();
                    });
                  },
                },
                {
                  key: 'viewCount',
                  get: function () {
                    return this._views.length;
                  },
                },
              ]),
              e
            );
          })())._tickScope = Bi('ApplicationRef#tick()')),
          ca);
      function da(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      var fa = function e() {
          _classCallCheck(this, e);
        },
        pa = function e() {
          _classCallCheck(this, e);
        },
        va = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' },
        ga = (function () {
          function e(t, n) {
            _classCallCheck(this, e), (this._compiler = t), (this._config = n || va);
          }
          return (
            _createClass(e, [
              {
                key: 'load',
                value: function (e) {
                  return this._compiler instanceof Fi
                    ? this.loadFactory(e)
                    : this.loadAndCompile(e);
                },
              },
              {
                key: 'loadAndCompile',
                value: function (e) {
                  var t = this,
                    r = _slicedToArray(e.split('#'), 2),
                    i = r[0],
                    a = r[1];
                  return (
                    void 0 === a && (a = 'default'),
                    n('zn8P')(i)
                      .then(function (e) {
                        return e[a];
                      })
                      .then(function (e) {
                        return ma(e, i, a);
                      })
                      .then(function (e) {
                        return t._compiler.compileModuleAsync(e);
                      })
                  );
                },
              },
              {
                key: 'loadFactory',
                value: function (e) {
                  var t = _slicedToArray(e.split('#'), 2),
                    r = t[0],
                    i = t[1],
                    a = 'NgFactory';
                  return (
                    void 0 === i && ((i = 'default'), (a = '')),
                    n('zn8P')(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix)
                      .then(function (e) {
                        return e[i + a];
                      })
                      .then(function (e) {
                        return ma(e, r, i);
                      })
                  );
                },
              },
            ]),
            e
          );
        })();
      function ma(e, t, n) {
        if (!e) throw new Error("Cannot find '".concat(n, "' in '").concat(t, "'"));
        return e;
      }
      var ya = function e(t, n) {
          _classCallCheck(this, e), (this.name = t), (this.callback = n);
        },
        _a = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.listeners = []),
              (this.parent = null),
              (this._debugContext = r),
              (this.nativeNode = t),
              n && n instanceof Ca && n.addChild(this);
          }
          return (
            _createClass(e, [
              {
                key: 'injector',
                get: function () {
                  return this._debugContext.injector;
                },
              },
              {
                key: 'componentInstance',
                get: function () {
                  return this._debugContext.component;
                },
              },
              {
                key: 'context',
                get: function () {
                  return this._debugContext.context;
                },
              },
              {
                key: 'references',
                get: function () {
                  return this._debugContext.references;
                },
              },
              {
                key: 'providerTokens',
                get: function () {
                  return this._debugContext.providerTokens;
                },
              },
            ]),
            e
          );
        })(),
        Ca = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return (
              _classCallCheck(this, n),
              ((a = t.call(this, e, r, i)).properties = {}),
              (a.attributes = {}),
              (a.classes = {}),
              (a.styles = {}),
              (a.childNodes = []),
              (a.nativeElement = e),
              a
            );
          }
          return (
            _createClass(n, [
              {
                key: 'addChild',
                value: function (e) {
                  e && (this.childNodes.push(e), (e.parent = this));
                },
              },
              {
                key: 'removeChild',
                value: function (e) {
                  var t = this.childNodes.indexOf(e);
                  -1 !== t && ((e.parent = null), this.childNodes.splice(t, 1));
                },
              },
              {
                key: 'insertChildrenAfter',
                value: function (e, t) {
                  var n,
                    r = this,
                    i = this.childNodes.indexOf(e);
                  -1 !== i &&
                    ((n = this.childNodes).splice.apply(
                      n,
                      [i + 1, 0].concat(_toConsumableArray(t))
                    ),
                    t.forEach(function (t) {
                      t.parent && t.parent.removeChild(t), (e.parent = r);
                    }));
                },
              },
              {
                key: 'insertBefore',
                value: function (e, t) {
                  var n = this.childNodes.indexOf(e);
                  -1 === n
                    ? this.addChild(t)
                    : (t.parent && t.parent.removeChild(t),
                      (t.parent = this),
                      this.childNodes.splice(n, 0, t));
                },
              },
              {
                key: 'query',
                value: function (e) {
                  return this.queryAll(e)[0] || null;
                },
              },
              {
                key: 'queryAll',
                value: function (e) {
                  var t = [];
                  return (
                    (function e(t, r, i) {
                      t.childNodes.forEach(function (t) {
                        t instanceof n && (r(t) && i.push(t), e(t, r, i));
                      });
                    })(this, e, t),
                    t
                  );
                },
              },
              {
                key: 'queryAllNodes',
                value: function (e) {
                  var t = [];
                  return (
                    (function e(t, r, i) {
                      t instanceof n &&
                        t.childNodes.forEach(function (t) {
                          r(t) && i.push(t), t instanceof n && e(t, r, i);
                        });
                    })(this, e, t),
                    t
                  );
                },
              },
              {
                key: 'triggerEventHandler',
                value: function (e, t) {
                  this.listeners.forEach(function (n) {
                    n.name == e && n.callback(t);
                  });
                },
              },
              {
                key: 'children',
                get: function () {
                  return this.childNodes.filter(function (e) {
                    return e instanceof n;
                  });
                },
              },
            ]),
            n
          );
        })(_a),
        ka = new Map(),
        ba = function (e) {
          return ka.get(e) || null;
        };
      function wa(e) {
        ka.set(e.nativeNode, e);
      }
      var xa = oa(null, 'core', [
        { provide: Ti, useValue: 'unknown' },
        { provide: ua, deps: [Ue] },
        { provide: na, deps: [] },
        { provide: Ai, deps: [] },
      ]);
      function Sa() {
        return _n;
      }
      function Ea() {
        return Cn;
      }
      function Ta(e) {
        var t = [];
        return (
          e.onStable.subscribe(function () {
            for (; t.length; ) t.pop()();
          }),
          function (e) {
            t.push(e);
          }
        );
      }
      var Pa = function e(t) {
        _classCallCheck(this, e);
      };
      function Aa(e, t, n, r, i, a) {
        e |= 1;
        var o = Xn(t),
          l = o.matchedQueries,
          u = o.references;
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          flags: e,
          checkIndex: -1,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: l,
          matchedQueryIds: o.matchedQueryIds,
          references: u,
          ngContentIndex: n,
          childCount: r,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: {
            ns: null,
            name: null,
            attrs: null,
            template: a ? rr(a) : null,
            componentProvider: null,
            componentView: null,
            componentRendererType: null,
            publicProviders: null,
            allProviders: null,
            handleEvent: i || Nn,
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function Ra(e, t, n, r, i, a) {
        var o,
          l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [],
          u = arguments.length > 7 ? arguments[7] : void 0,
          s = arguments.length > 8 ? arguments[8] : void 0,
          c = arguments.length > 9 ? arguments[9] : void 0,
          h = arguments.length > 10 ? arguments[10] : void 0,
          d = arguments.length > 11 ? arguments[11] : void 0;
        c || (c = Nn);
        var f = Xn(n),
          p = f.matchedQueries,
          v = f.references,
          g = f.matchedQueryIds,
          m = null,
          y = null;
        a && ((m = (o = _slicedToArray(cr(a), 2))[0]), (y = o[1])), (u = u || []);
        for (var _ = new Array(u.length), C = 0; C < u.length; C++) {
          var k = _slicedToArray(u[C], 3),
            b = k[0],
            w = k[1],
            x = k[2],
            S = cr(w),
            E = _slicedToArray(S, 2),
            T = E[0],
            P = E[1],
            A = void 0,
            R = void 0;
          switch (15 & b) {
            case 4:
              R = x;
              break;
            case 1:
            case 8:
              A = x;
          }
          _[C] = { flags: b, ns: T, name: P, nonMinifiedName: P, securityContext: A, suffix: R };
        }
        s = s || [];
        for (var I = new Array(s.length), O = 0; O < s.length; O++) {
          var D = _slicedToArray(s[O], 2),
            V = D[0],
            M = D[1];
          I[O] = { type: 0, target: V, eventName: M, propName: null };
        }
        var N = (l = l || []).map(function (e) {
          var t = _slicedToArray(e, 2),
            n = t[0],
            r = t[1],
            i = _slicedToArray(cr(n), 2);
          return [i[0], i[1], r];
        });
        return (
          (d = (function (e) {
            if (e && '$$undefined' === e.id) {
              var t =
                (null != e.encapsulation && e.encapsulation !== Ze.None) ||
                e.styles.length ||
                Object.keys(e.data).length;
              e.id = t ? 'c' + Hn++ : '$$empty';
            }
            return e && '$$empty' === e.id && (e = null), e || null;
          })(d)),
          h && (t |= 33554432),
          {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: e,
            flags: (t |= 1),
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: p,
            matchedQueryIds: g,
            references: v,
            ngContentIndex: r,
            childCount: i,
            bindings: _,
            bindingFlags: hr(_),
            outputs: I,
            element: {
              ns: m,
              name: y,
              attrs: N,
              template: null,
              componentProvider: null,
              componentView: h || null,
              componentRendererType: d,
              publicProviders: null,
              allProviders: null,
              handleEvent: c || Nn,
            },
            provider: null,
            text: null,
            query: null,
            ngContent: null,
          }
        );
      }
      function Ia(e, t, n) {
        var r,
          i = n.element,
          a = e.root.selectorOrNode,
          o = e.renderer;
        if (e.parent || !a) {
          r = i.name ? o.createElement(i.name, i.ns) : o.createComment('');
          var l = tr(e, t, n);
          l && o.appendChild(l, r);
        } else
          r = o.selectRootElement(
            a,
            !!i.componentRendererType && i.componentRendererType.encapsulation === Ze.ShadowDom
          );
        if (i.attrs)
          for (var u = 0; u < i.attrs.length; u++) {
            var s = _slicedToArray(i.attrs[u], 3),
              c = s[0],
              h = s[1],
              d = s[2];
            o.setAttribute(r, h, d, c);
          }
        return r;
      }
      function Oa(e, t, n, r) {
        for (var i = 0; i < n.outputs.length; i++) {
          var a = n.outputs[i],
            o = Da(
              e,
              n.nodeIndex,
              ((h = a.eventName), (c = a.target) ? ''.concat(c, ':').concat(h) : h)
            ),
            l = a.target,
            u = e;
          'component' === a.target && ((l = null), (u = t));
          var s = u.renderer.listen(l || r, a.eventName, o);
          e.disposables[n.outputIndex + i] = s;
        }
        var c, h;
      }
      function Da(e, t, n) {
        return function (r) {
          return Wn(e, t, n, r);
        };
      }
      function Va(e, t, n, r) {
        if (!Bn(e, t, n, r)) return !1;
        var i = t.bindings[n],
          a = In(e, t.nodeIndex),
          o = a.renderElement,
          l = i.name;
        switch (15 & i.flags) {
          case 1:
            !(function (e, t, n, r, i, a) {
              var o = t.securityContext,
                l = o ? e.root.sanitizer.sanitize(o, a) : a;
              l = null != l ? l.toString() : null;
              var u = e.renderer;
              null != a ? u.setAttribute(n, i, l, r) : u.removeAttribute(n, i, r);
            })(e, i, o, i.ns, l, r);
            break;
          case 2:
            !(function (e, t, n, r) {
              var i = e.renderer;
              r ? i.addClass(t, n) : i.removeClass(t, n);
            })(e, o, l, r);
            break;
          case 4:
            !(function (e, t, n, r, i) {
              var a = e.root.sanitizer.sanitize(Ct.STYLE, i);
              if (null != a) {
                a = a.toString();
                var o = t.suffix;
                null != o && (a += o);
              } else a = null;
              var l = e.renderer;
              null != a ? l.setStyle(n, r, a) : l.removeStyle(n, r);
            })(e, i, o, l, r);
            break;
          case 8:
            !(function (e, t, n, r, i) {
              var a = t.securityContext,
                o = a ? e.root.sanitizer.sanitize(a, i) : i;
              e.renderer.setProperty(n, r, o);
            })(33554432 & t.flags && 32 & i.flags ? a.componentView : e, i, o, l, r);
        }
        return !0;
      }
      function Ma(e) {
        for (var t = e.def.nodeMatchedQueries; e.parent && Jn(e); ) {
          var n = e.parentNodeDef;
          e = e.parent;
          for (var r = n.nodeIndex + n.childCount, i = 0; i <= r; i++) {
            var a = e.def.nodes[i];
            67108864 & a.flags &&
              536870912 & a.flags &&
              (a.query.filterId & t) === a.query.filterId &&
              Vn(e, i).setDirty(),
              (!(1 & a.flags && i + a.childCount < n.nodeIndex) &&
                67108864 & a.childFlags &&
                536870912 & a.childFlags) ||
                (i += a.childCount);
          }
        }
        if (134217728 & e.def.nodeFlags)
          for (var o = 0; o < e.def.nodes.length; o++) {
            var l = e.def.nodes[o];
            134217728 & l.flags && 536870912 & l.flags && Vn(e, o).setDirty(), (o += l.childCount);
          }
      }
      function Na(e, t) {
        var n = Vn(e, t.nodeIndex);
        if (n.dirty) {
          var r,
            i = void 0;
          if (67108864 & t.flags) {
            var a = t.parent.parent;
            (i = La(e, a.nodeIndex, a.nodeIndex + a.childCount, t.query, [])),
              (r = On(e, t.parent.nodeIndex).instance);
          } else
            134217728 & t.flags &&
              ((i = La(e, 0, e.def.nodes.length - 1, t.query, [])), (r = e.component));
          n.reset(i);
          for (var o = t.query.bindings, l = !1, u = 0; u < o.length; u++) {
            var s = o[u],
              c = void 0;
            switch (s.bindingType) {
              case 0:
                c = n.first;
                break;
              case 1:
                (c = n), (l = !0);
            }
            r[s.propName] = c;
          }
          l && n.notifyOnChanges();
        }
      }
      function La(e, t, n, r, i) {
        for (var a = t; a <= n; a++) {
          var o = e.def.nodes[a],
            l = o.matchedQueries[r.id];
          if (
            (null != l && i.push(Fa(e, o, l)),
            1 & o.flags &&
              o.element.template &&
              (o.element.template.nodeMatchedQueries & r.filterId) === r.filterId)
          ) {
            var u = In(e, a);
            if (
              ((o.childMatchedQueries & r.filterId) === r.filterId &&
                (La(e, a + 1, a + o.childCount, r, i), (a += o.childCount)),
              16777216 & o.flags)
            )
              for (var s = u.viewContainer._embeddedViews, c = 0; c < s.length; c++) {
                var h = s[c],
                  d = Zn(h);
                d && d === u && La(h, 0, h.def.nodes.length - 1, r, i);
              }
            var f = u.template._projectedViews;
            if (f)
              for (var p = 0; p < f.length; p++) {
                var v = f[p];
                La(v, 0, v.def.nodes.length - 1, r, i);
              }
          }
          (o.childMatchedQueries & r.filterId) !== r.filterId && (a += o.childCount);
        }
        return i;
      }
      function Fa(e, t, n) {
        if (null != n)
          switch (n) {
            case 1:
              return In(e, t.nodeIndex).renderElement;
            case 0:
              return new Qt(In(e, t.nodeIndex).renderElement);
            case 2:
              return In(e, t.nodeIndex).template;
            case 3:
              return In(e, t.nodeIndex).viewContainer;
            case 4:
              return On(e, t.nodeIndex).instance;
          }
      }
      function Ua(e, t, n) {
        var r = tr(e, t, n);
        r && or(e, n.ngContent.index, 1, r, null, void 0);
      }
      function ja(e, t) {
        return za(128, e, new Array(t + 1));
      }
      function Ha(e, t) {
        for (var n = Object.keys(t), r = n.length, i = new Array(r), a = 0; a < r; a++) {
          var o = n[a];
          i[t[o]] = o;
        }
        return za(64, e, i);
      }
      function za(e, t, n) {
        for (var r = new Array(n.length), i = 0; i < n.length; i++) {
          var a = n[i];
          r[i] = {
            flags: 8,
            name: a,
            ns: null,
            nonMinifiedName: a,
            securityContext: null,
            suffix: null,
          };
        }
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: t,
          flags: e,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: -1,
          childCount: 0,
          bindings: r,
          bindingFlags: hr(r),
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function Ba(e, t, n) {
        for (var r = new Array(n.length - 1), i = 1; i < n.length; i++)
          r[i - 1] = {
            flags: 8,
            name: null,
            ns: null,
            nonMinifiedName: null,
            securityContext: null,
            suffix: n[i],
          };
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: 2,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: t,
          childCount: 0,
          bindings: r,
          bindingFlags: 8,
          outputs: [],
          element: null,
          provider: null,
          text: { prefix: n[0] },
          query: null,
          ngContent: null,
        };
      }
      function qa(e, t, n) {
        var r,
          i = e.renderer;
        r = i.createText(n.text.prefix);
        var a = tr(e, t, n);
        return a && i.appendChild(a, r), { renderText: r };
      }
      function Ga(e, t) {
        return (null != e ? e.toString() : '') + t.suffix;
      }
      function $a(e, t, n, r) {
        for (
          var i = 0,
            a = 0,
            o = 0,
            l = 0,
            u = 0,
            s = null,
            c = null,
            h = !1,
            d = !1,
            f = null,
            p = 0;
          p < t.length;
          p++
        ) {
          var v = t[p];
          if (
            ((v.nodeIndex = p),
            (v.parent = s),
            (v.bindingIndex = i),
            (v.outputIndex = a),
            (v.renderParent = c),
            (o |= v.flags),
            (u |= v.matchedQueryIds),
            v.element)
          ) {
            var g = v.element;
            (g.publicProviders = s ? s.element.publicProviders : Object.create(null)),
              (g.allProviders = g.publicProviders),
              (h = !1),
              (d = !1),
              v.element.template && (u |= v.element.template.nodeMatchedQueries);
          }
          if (
            (Za(s, v, t.length),
            (i += v.bindings.length),
            (a += v.outputs.length),
            !c && 3 & v.flags && (f = v),
            20224 & v.flags)
          ) {
            h ||
              ((h = !0),
              (s.element.publicProviders = Object.create(s.element.publicProviders)),
              (s.element.allProviders = s.element.publicProviders));
            var m = 0 != (32768 & v.flags);
            0 == (8192 & v.flags) || m
              ? (s.element.publicProviders[Fn(v.provider.token)] = v)
              : (d ||
                  ((d = !0), (s.element.allProviders = Object.create(s.element.publicProviders))),
                (s.element.allProviders[Fn(v.provider.token)] = v)),
              m && (s.element.componentProvider = v);
          }
          if (
            (s
              ? ((s.childFlags |= v.flags),
                (s.directChildFlags |= v.flags),
                (s.childMatchedQueries |= v.matchedQueryIds),
                v.element &&
                  v.element.template &&
                  (s.childMatchedQueries |= v.element.template.nodeMatchedQueries))
              : (l |= v.flags),
            v.childCount > 0)
          )
            (s = v), Wa(v) || (c = v);
          else
            for (; s && p === s.nodeIndex + s.childCount; ) {
              var y = s.parent;
              y &&
                ((y.childFlags |= s.childFlags), (y.childMatchedQueries |= s.childMatchedQueries)),
                (c = (s = y) && Wa(s) ? s.renderParent : s);
            }
        }
        return {
          factory: null,
          nodeFlags: o,
          rootNodeFlags: l,
          nodeMatchedQueries: u,
          flags: e,
          nodes: t,
          updateDirectives: n || Nn,
          updateRenderer: r || Nn,
          handleEvent: function (e, n, r, i) {
            return t[n].element.handleEvent(e, r, i);
          },
          bindingCount: i,
          outputCount: a,
          lastRenderRootNode: f,
        };
      }
      function Wa(e) {
        return 0 != (1 & e.flags) && null === e.element.name;
      }
      function Za(e, t, n) {
        var r = t.element && t.element.template;
        if (r) {
          if (!r.lastRenderRootNode)
            throw new Error('Illegal State: Embedded templates without nodes are not allowed!');
          if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags)
            throw new Error(
              "Illegal State: Last root node of a template can't have embedded views, at index ".concat(
                t.nodeIndex,
                '!'
              )
            );
        }
        if (20224 & t.flags && 0 == (1 & (e ? e.flags : 0)))
          throw new Error(
            'Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index '.concat(
              t.nodeIndex,
              '!'
            )
          );
        if (t.query) {
          if (67108864 & t.flags && (!e || 0 == (16384 & e.flags)))
            throw new Error(
              'Illegal State: Content Query nodes need to be children of directives, at index '.concat(
                t.nodeIndex,
                '!'
              )
            );
          if (134217728 & t.flags && e)
            throw new Error(
              'Illegal State: View Query nodes have to be top level nodes, at index '.concat(
                t.nodeIndex,
                '!'
              )
            );
        }
        if (t.childCount) {
          var i = e ? e.nodeIndex + e.childCount : n - 1;
          if (t.nodeIndex <= i && t.nodeIndex + t.childCount > i)
            throw new Error(
              'Illegal State: childCount of node leads outside of parent, at index '.concat(
                t.nodeIndex,
                '!'
              )
            );
        }
      }
      function Ka(e, t, n, r) {
        var i = Ja(e.root, e.renderer, e, t, n);
        return Xa(i, e.component, r), eo(i), i;
      }
      function Qa(e, t, n) {
        var r = Ja(e, e.renderer, null, null, t);
        return Xa(r, n, n), eo(r), r;
      }
      function Ya(e, t, n, r) {
        var i,
          a = t.element.componentRendererType;
        return (
          (i = a ? e.root.rendererFactory.createRenderer(r, a) : e.root.renderer),
          Ja(e.root, i, e, t.element.componentProvider, n)
        );
      }
      function Ja(e, t, n, r, i) {
        var a = new Array(i.nodes.length),
          o = i.outputCount ? new Array(i.outputCount) : null;
        return {
          def: i,
          parent: n,
          viewContainerParent: null,
          parentNodeDef: r,
          context: null,
          component: null,
          nodes: a,
          state: 13,
          root: e,
          renderer: t,
          oldValues: new Array(i.bindingCount),
          disposables: o,
          initIndex: -1,
        };
      }
      function Xa(e, t, n) {
        (e.component = t), (e.context = n);
      }
      function eo(e) {
        var t;
        Yn(e) && (t = In(e.parent, e.parentNodeDef.parent.nodeIndex).renderElement);
        for (var n = e.def, r = e.nodes, i = 0; i < n.nodes.length; i++) {
          var a = n.nodes[i],
            o = void 0;
          switch ((Mn.setCurrentNode(e, i), 201347067 & a.flags)) {
            case 1:
              var l = Ia(e, t, a),
                u = void 0;
              if (33554432 & a.flags) {
                var s = rr(a.element.componentView);
                u = Mn.createComponentView(e, a, s, l);
              }
              Oa(e, u, a, l),
                (o = {
                  renderElement: l,
                  componentView: u,
                  viewContainer: null,
                  template: a.element.template ? Or(e, a) : void 0,
                }),
                16777216 & a.flags && (o.viewContainer = Pr(e, a, o));
              break;
            case 2:
              o = qa(e, t, a);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              (o = r[i]) || 4096 & a.flags || (o = { instance: Xr(e, a) });
              break;
            case 16:
              o = { instance: ei(e, a) };
              break;
            case 16384:
              (o = r[i]) || (o = { instance: ti(e, a) }),
                32768 & a.flags &&
                  Xa(In(e, a.parent.nodeIndex).componentView, o.instance, o.instance);
              break;
            case 32:
            case 64:
            case 128:
              o = { value: void 0 };
              break;
            case 67108864:
            case 134217728:
              o = new Ci();
              break;
            case 8:
              Ua(e, t, a), (o = void 0);
          }
          r[i] = o;
        }
        so(e, uo.CreateViewNodes), po(e, 201326592, 268435456, 0);
      }
      function to(e) {
        io(e),
          Mn.updateDirectives(e, 1),
          co(e, uo.CheckNoChanges),
          Mn.updateRenderer(e, 1),
          so(e, uo.CheckNoChanges),
          (e.state &= -97);
      }
      function no(e) {
        1 & e.state ? ((e.state &= -2), (e.state |= 2)) : (e.state &= -3),
          Pn(e, 0, 256),
          io(e),
          Mn.updateDirectives(e, 0),
          co(e, uo.CheckAndUpdate),
          po(e, 67108864, 536870912, 0);
        var t = Pn(e, 256, 512);
        si(e, 2097152 | (t ? 1048576 : 0)),
          Mn.updateRenderer(e, 0),
          so(e, uo.CheckAndUpdate),
          po(e, 134217728, 536870912, 0),
          si(e, 8388608 | ((t = Pn(e, 512, 768)) ? 4194304 : 0)),
          2 & e.def.flags && (e.state &= -9),
          (e.state &= -97),
          Pn(e, 768, 1024);
      }
      function ro(e, t, n, r, i, a, o, l, u, s, c, h, d) {
        return 0 === n
          ? (function (e, t, n, r, i, a, o, l, u, s, c, h) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function (e, t, n, r, i, a, o, l, u, s, c, h) {
                    var d = t.bindings.length,
                      f = !1;
                    return (
                      d > 0 && Va(e, t, 0, n) && (f = !0),
                      d > 1 && Va(e, t, 1, r) && (f = !0),
                      d > 2 && Va(e, t, 2, i) && (f = !0),
                      d > 3 && Va(e, t, 3, a) && (f = !0),
                      d > 4 && Va(e, t, 4, o) && (f = !0),
                      d > 5 && Va(e, t, 5, l) && (f = !0),
                      d > 6 && Va(e, t, 6, u) && (f = !0),
                      d > 7 && Va(e, t, 7, s) && (f = !0),
                      d > 8 && Va(e, t, 8, c) && (f = !0),
                      d > 9 && Va(e, t, 9, h) && (f = !0),
                      f
                    );
                  })(e, t, n, r, i, a, o, l, u, s, c, h);
                case 2:
                  return (function (e, t, n, r, i, a, o, l, u, s, c, h) {
                    var d = !1,
                      f = t.bindings,
                      p = f.length;
                    if (
                      (p > 0 && Bn(e, t, 0, n) && (d = !0),
                      p > 1 && Bn(e, t, 1, r) && (d = !0),
                      p > 2 && Bn(e, t, 2, i) && (d = !0),
                      p > 3 && Bn(e, t, 3, a) && (d = !0),
                      p > 4 && Bn(e, t, 4, o) && (d = !0),
                      p > 5 && Bn(e, t, 5, l) && (d = !0),
                      p > 6 && Bn(e, t, 6, u) && (d = !0),
                      p > 7 && Bn(e, t, 7, s) && (d = !0),
                      p > 8 && Bn(e, t, 8, c) && (d = !0),
                      p > 9 && Bn(e, t, 9, h) && (d = !0),
                      d)
                    ) {
                      var v = t.text.prefix;
                      p > 0 && (v += Ga(n, f[0])),
                        p > 1 && (v += Ga(r, f[1])),
                        p > 2 && (v += Ga(i, f[2])),
                        p > 3 && (v += Ga(a, f[3])),
                        p > 4 && (v += Ga(o, f[4])),
                        p > 5 && (v += Ga(l, f[5])),
                        p > 6 && (v += Ga(u, f[6])),
                        p > 7 && (v += Ga(s, f[7])),
                        p > 8 && (v += Ga(c, f[8])),
                        p > 9 && (v += Ga(h, f[9]));
                      var g = Rn(e, t.nodeIndex).renderText;
                      e.renderer.setValue(g, v);
                    }
                    return d;
                  })(e, t, n, r, i, a, o, l, u, s, c, h);
                case 16384:
                  return (function (e, t, n, r, i, a, o, l, u, s, c, h) {
                    var d = On(e, t.nodeIndex),
                      f = d.instance,
                      p = !1,
                      v = void 0,
                      g = t.bindings.length;
                    return (
                      g > 0 && zn(e, t, 0, n) && ((p = !0), (v = ui(e, d, t, 0, n, v))),
                      g > 1 && zn(e, t, 1, r) && ((p = !0), (v = ui(e, d, t, 1, r, v))),
                      g > 2 && zn(e, t, 2, i) && ((p = !0), (v = ui(e, d, t, 2, i, v))),
                      g > 3 && zn(e, t, 3, a) && ((p = !0), (v = ui(e, d, t, 3, a, v))),
                      g > 4 && zn(e, t, 4, o) && ((p = !0), (v = ui(e, d, t, 4, o, v))),
                      g > 5 && zn(e, t, 5, l) && ((p = !0), (v = ui(e, d, t, 5, l, v))),
                      g > 6 && zn(e, t, 6, u) && ((p = !0), (v = ui(e, d, t, 6, u, v))),
                      g > 7 && zn(e, t, 7, s) && ((p = !0), (v = ui(e, d, t, 7, s, v))),
                      g > 8 && zn(e, t, 8, c) && ((p = !0), (v = ui(e, d, t, 8, c, v))),
                      g > 9 && zn(e, t, 9, h) && ((p = !0), (v = ui(e, d, t, 9, h, v))),
                      v && f.ngOnChanges(v),
                      65536 & t.flags && An(e, 256, t.nodeIndex) && f.ngOnInit(),
                      262144 & t.flags && f.ngDoCheck(),
                      p
                    );
                  })(e, t, n, r, i, a, o, l, u, s, c, h);
                case 32:
                case 64:
                case 128:
                  return (function (e, t, n, r, i, a, o, l, u, s, c, h) {
                    var d = t.bindings,
                      f = !1,
                      p = d.length;
                    if (
                      (p > 0 && Bn(e, t, 0, n) && (f = !0),
                      p > 1 && Bn(e, t, 1, r) && (f = !0),
                      p > 2 && Bn(e, t, 2, i) && (f = !0),
                      p > 3 && Bn(e, t, 3, a) && (f = !0),
                      p > 4 && Bn(e, t, 4, o) && (f = !0),
                      p > 5 && Bn(e, t, 5, l) && (f = !0),
                      p > 6 && Bn(e, t, 6, u) && (f = !0),
                      p > 7 && Bn(e, t, 7, s) && (f = !0),
                      p > 8 && Bn(e, t, 8, c) && (f = !0),
                      p > 9 && Bn(e, t, 9, h) && (f = !0),
                      f)
                    ) {
                      var v,
                        g = Dn(e, t.nodeIndex);
                      switch (201347067 & t.flags) {
                        case 32:
                          (v = new Array(d.length)),
                            p > 0 && (v[0] = n),
                            p > 1 && (v[1] = r),
                            p > 2 && (v[2] = i),
                            p > 3 && (v[3] = a),
                            p > 4 && (v[4] = o),
                            p > 5 && (v[5] = l),
                            p > 6 && (v[6] = u),
                            p > 7 && (v[7] = s),
                            p > 8 && (v[8] = c),
                            p > 9 && (v[9] = h);
                          break;
                        case 64:
                          (v = {}),
                            p > 0 && (v[d[0].name] = n),
                            p > 1 && (v[d[1].name] = r),
                            p > 2 && (v[d[2].name] = i),
                            p > 3 && (v[d[3].name] = a),
                            p > 4 && (v[d[4].name] = o),
                            p > 5 && (v[d[5].name] = l),
                            p > 6 && (v[d[6].name] = u),
                            p > 7 && (v[d[7].name] = s),
                            p > 8 && (v[d[8].name] = c),
                            p > 9 && (v[d[9].name] = h);
                          break;
                        case 128:
                          var m = n;
                          switch (p) {
                            case 1:
                              v = m.transform(n);
                              break;
                            case 2:
                              v = m.transform(r);
                              break;
                            case 3:
                              v = m.transform(r, i);
                              break;
                            case 4:
                              v = m.transform(r, i, a);
                              break;
                            case 5:
                              v = m.transform(r, i, a, o);
                              break;
                            case 6:
                              v = m.transform(r, i, a, o, l);
                              break;
                            case 7:
                              v = m.transform(r, i, a, o, l, u);
                              break;
                            case 8:
                              v = m.transform(r, i, a, o, l, u, s);
                              break;
                            case 9:
                              v = m.transform(r, i, a, o, l, u, s, c);
                              break;
                            case 10:
                              v = m.transform(r, i, a, o, l, u, s, c, h);
                          }
                      }
                      g.value = v;
                    }
                    return f;
                  })(e, t, n, r, i, a, o, l, u, s, c, h);
                default:
                  throw 'unreachable';
              }
            })(e, t, r, i, a, o, l, u, s, c, h, d)
          : (function (e, t, n) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function (e, t, n) {
                    for (var r = !1, i = 0; i < n.length; i++) Va(e, t, i, n[i]) && (r = !0);
                    return r;
                  })(e, t, n);
                case 2:
                  return (function (e, t, n) {
                    for (var r = t.bindings, i = !1, a = 0; a < n.length; a++)
                      Bn(e, t, a, n[a]) && (i = !0);
                    if (i) {
                      for (var o = '', l = 0; l < n.length; l++) o += Ga(n[l], r[l]);
                      o = t.text.prefix + o;
                      var u = Rn(e, t.nodeIndex).renderText;
                      e.renderer.setValue(u, o);
                    }
                    return i;
                  })(e, t, n);
                case 16384:
                  return (function (e, t, n) {
                    for (
                      var r = On(e, t.nodeIndex), i = r.instance, a = !1, o = void 0, l = 0;
                      l < n.length;
                      l++
                    )
                      zn(e, t, l, n[l]) && ((a = !0), (o = ui(e, r, t, l, n[l], o)));
                    return (
                      o && i.ngOnChanges(o),
                      65536 & t.flags && An(e, 256, t.nodeIndex) && i.ngOnInit(),
                      262144 & t.flags && i.ngDoCheck(),
                      a
                    );
                  })(e, t, n);
                case 32:
                case 64:
                case 128:
                  return (function (e, t, n) {
                    for (var r = t.bindings, i = !1, a = 0; a < n.length; a++)
                      Bn(e, t, a, n[a]) && (i = !0);
                    if (i) {
                      var o,
                        l = Dn(e, t.nodeIndex);
                      switch (201347067 & t.flags) {
                        case 32:
                          o = n;
                          break;
                        case 64:
                          o = {};
                          for (var u = 0; u < n.length; u++) o[r[u].name] = n[u];
                          break;
                        case 128:
                          var s = n[0],
                            c = n.slice(1);
                          o = s.transform.apply(s, _toConsumableArray(c));
                      }
                      l.value = o;
                    }
                    return i;
                  })(e, t, n);
                default:
                  throw 'unreachable';
              }
            })(e, t, r);
      }
      function io(e) {
        var t = e.def;
        if (4 & t.nodeFlags)
          for (var n = 0; n < t.nodes.length; n++) {
            var r = t.nodes[n];
            if (4 & r.flags) {
              var i = In(e, n).template._projectedViews;
              if (i)
                for (var a = 0; a < i.length; a++) {
                  var o = i[a];
                  (o.state |= 32), $n(o, e);
                }
            } else 0 == (4 & r.childFlags) && (n += r.childCount);
          }
      }
      function ao(e, t, n, r, i, a, o, l, u, s, c, h, d) {
        return (
          0 === n
            ? (function (e, t, n, r, i, a, o, l, u, s, c, h) {
                var d = t.bindings.length;
                d > 0 && qn(e, t, 0, n),
                  d > 1 && qn(e, t, 1, r),
                  d > 2 && qn(e, t, 2, i),
                  d > 3 && qn(e, t, 3, a),
                  d > 4 && qn(e, t, 4, o),
                  d > 5 && qn(e, t, 5, l),
                  d > 6 && qn(e, t, 6, u),
                  d > 7 && qn(e, t, 7, s),
                  d > 8 && qn(e, t, 8, c),
                  d > 9 && qn(e, t, 9, h);
              })(e, t, r, i, a, o, l, u, s, c, h, d)
            : (function (e, t, n) {
                for (var r = 0; r < n.length; r++) qn(e, t, r, n[r]);
              })(e, t, r),
          !1
        );
      }
      function oo(e, t) {
        if (Vn(e, t.nodeIndex).dirty)
          throw Sn(
            Mn.createDebugContext(e, t.nodeIndex),
            'Query '.concat(t.query.id, ' not dirty'),
            'Query '.concat(t.query.id, ' dirty'),
            0 != (1 & e.state)
          );
      }
      function lo(e) {
        if (!(128 & e.state)) {
          if ((co(e, uo.Destroy), so(e, uo.Destroy), si(e, 131072), e.disposables))
            for (var t = 0; t < e.disposables.length; t++) e.disposables[t]();
          !(function (e) {
            if (16 & e.state) {
              var t = Zn(e);
              if (t) {
                var n = t.template._projectedViews;
                n && (wr(n, n.indexOf(e)), Mn.dirtyParentQueries(e));
              }
            }
          })(e),
            e.renderer.destroyNode &&
              (function (e) {
                for (var t = e.def.nodes.length, n = 0; n < t; n++) {
                  var r = e.def.nodes[n];
                  1 & r.flags
                    ? e.renderer.destroyNode(In(e, n).renderElement)
                    : 2 & r.flags
                    ? e.renderer.destroyNode(Rn(e, n).renderText)
                    : (67108864 & r.flags || 134217728 & r.flags) && Vn(e, n).destroy();
                }
              })(e),
            Yn(e) && e.renderer.destroy(),
            (e.state |= 128);
        }
      }
      var uo = (function () {
        var e = {
          CreateViewNodes: 0,
          CheckNoChanges: 1,
          CheckNoChangesProjectedViews: 2,
          CheckAndUpdate: 3,
          CheckAndUpdateProjectedViews: 4,
          Destroy: 5,
        };
        return (
          (e[e.CreateViewNodes] = 'CreateViewNodes'),
          (e[e.CheckNoChanges] = 'CheckNoChanges'),
          (e[e.CheckNoChangesProjectedViews] = 'CheckNoChangesProjectedViews'),
          (e[e.CheckAndUpdate] = 'CheckAndUpdate'),
          (e[e.CheckAndUpdateProjectedViews] = 'CheckAndUpdateProjectedViews'),
          (e[e.Destroy] = 'Destroy'),
          e
        );
      })();
      function so(e, t) {
        var n = e.def;
        if (33554432 & n.nodeFlags)
          for (var r = 0; r < n.nodes.length; r++) {
            var i = n.nodes[r];
            33554432 & i.flags
              ? ho(In(e, r).componentView, t)
              : 0 == (33554432 & i.childFlags) && (r += i.childCount);
          }
      }
      function co(e, t) {
        var n = e.def;
        if (16777216 & n.nodeFlags)
          for (var r = 0; r < n.nodes.length; r++) {
            var i = n.nodes[r];
            if (16777216 & i.flags)
              for (var a = In(e, r).viewContainer._embeddedViews, o = 0; o < a.length; o++)
                ho(a[o], t);
            else 0 == (16777216 & i.childFlags) && (r += i.childCount);
          }
      }
      function ho(e, t) {
        var n = e.state;
        switch (t) {
          case uo.CheckNoChanges:
            0 == (128 & n) &&
              (12 == (12 & n) ? to(e) : 64 & n && fo(e, uo.CheckNoChangesProjectedViews));
            break;
          case uo.CheckNoChangesProjectedViews:
            0 == (128 & n) && (32 & n ? to(e) : 64 & n && fo(e, t));
            break;
          case uo.CheckAndUpdate:
            0 == (128 & n) &&
              (12 == (12 & n) ? no(e) : 64 & n && fo(e, uo.CheckAndUpdateProjectedViews));
            break;
          case uo.CheckAndUpdateProjectedViews:
            0 == (128 & n) && (32 & n ? no(e) : 64 & n && fo(e, t));
            break;
          case uo.Destroy:
            lo(e);
            break;
          case uo.CreateViewNodes:
            eo(e);
        }
      }
      function fo(e, t) {
        co(e, t), so(e, t);
      }
      function po(e, t, n, r) {
        if (e.def.nodeFlags & t && e.def.nodeFlags & n)
          for (var i = e.def.nodes.length, a = 0; a < i; a++) {
            var o = e.def.nodes[a];
            if (o.flags & t && o.flags & n)
              switch ((Mn.setCurrentNode(e, o.nodeIndex), r)) {
                case 0:
                  Na(e, o);
                  break;
                case 1:
                  oo(e, o);
              }
            (o.childFlags & t && o.childFlags & n) || (a += o.childCount);
          }
      }
      var vo = !1;
      function go(e, t, n, r, i, a) {
        var o = i.injector.get(Jt);
        return Qa(yo(e, i, o, t, n), r, a);
      }
      function mo(e, t, n, r, i, a) {
        var o = i.injector.get(Jt),
          l = yo(e, i, new Qo(o), t, n),
          u = Po(r);
        return Zo(Lo.create, Qa, null, [l, u, a]);
      }
      function yo(e, t, n, r, i) {
        var a = t.injector.get(kt),
          o = t.injector.get(Tt),
          l = n.createRenderer(null, null);
        return {
          ngModule: t,
          injector: e,
          projectableNodes: r,
          selectorOrNode: i,
          sanitizer: a,
          rendererFactory: n,
          renderer: l,
          errorHandler: o,
        };
      }
      function _o(e, t, n, r) {
        var i = Po(n);
        return Zo(Lo.create, Ka, null, [e, t, i, r]);
      }
      function Co(e, t, n, r) {
        return (
          (n = xo.get(t.element.componentProvider.provider.token) || Po(n)),
          Zo(Lo.create, Ya, null, [e, t, n, r])
        );
      }
      function ko(e, t, n, r) {
        return Ur(
          e,
          t,
          n,
          (function (e) {
            var t = (function (e) {
                var t = !1,
                  n = !1;
                return (
                  0 === bo.size ||
                    (e.providers.forEach(function (e) {
                      var r = bo.get(e.token);
                      3840 & e.flags && r && ((t = !0), (n = n || r.deprecatedBehavior));
                    }),
                    e.modules.forEach(function (e) {
                      wo.forEach(function (r, i) {
                        ge(i).providedIn === e && ((t = !0), (n = n || r.deprecatedBehavior));
                      });
                    })),
                  { hasOverrides: t, hasDeprecatedOverrides: n }
                );
              })(e),
              n = t.hasOverrides,
              r = t.hasDeprecatedOverrides;
            return n
              ? ((function (e) {
                  for (var t = 0; t < e.providers.length; t++) {
                    var n = e.providers[t];
                    r && (n.flags |= 4096);
                    var i = bo.get(n.token);
                    i &&
                      ((n.flags = (-3841 & n.flags) | i.flags),
                      (n.deps = er(i.deps)),
                      (n.value = i.value));
                  }
                  if (wo.size > 0) {
                    var a = new Set(e.modules);
                    wo.forEach(function (t, n) {
                      if (a.has(ge(n).providedIn)) {
                        var i = {
                          token: n,
                          flags: t.flags | (r ? 4096 : 0),
                          deps: er(t.deps),
                          value: t.value,
                          index: e.providers.length,
                        };
                        e.providers.push(i), (e.providersByKey[Fn(n)] = i);
                      }
                    });
                  }
                })(
                  (e = e.factory(function () {
                    return Nn;
                  }))
                ),
                e)
              : e;
          })(r)
        );
      }
      var bo = new Map(),
        wo = new Map(),
        xo = new Map();
      function So(e) {
        var t;
        bo.set(e.token, e),
          'function' == typeof e.token &&
            (t = ge(e.token)) &&
            'function' == typeof t.providedIn &&
            wo.set(e.token, e);
      }
      function Eo(e, t) {
        var n = rr(t.viewDefFactory),
          r = rr(n.nodes[0].element.componentView);
        xo.set(e, r);
      }
      function To() {
        bo.clear(), wo.clear(), xo.clear();
      }
      function Po(e) {
        if (0 === bo.size) return e;
        var t = (function (e) {
          for (var t = [], n = null, r = 0; r < e.nodes.length; r++) {
            var i = e.nodes[r];
            1 & i.flags && (n = i),
              n && 3840 & i.flags && bo.has(i.provider.token) && (t.push(n.nodeIndex), (n = null));
          }
          return t;
        })(e);
        if (0 === t.length) return e;
        e = e.factory(function () {
          return Nn;
        });
        for (var n = 0; n < t.length; n++) r(e, t[n]);
        return e;
        function r(e, t) {
          for (var n = t + 1; n < e.nodes.length; n++) {
            var r = e.nodes[n];
            if (1 & r.flags) return;
            if (3840 & r.flags) {
              var i = r.provider,
                a = bo.get(i.token);
              a &&
                ((r.flags = (-3841 & r.flags) | a.flags),
                (i.deps = er(a.deps)),
                (i.value = a.value));
            }
          }
        }
      }
      function Ao(e, t, n, r, i, a, o, l, u, s, c, h, d) {
        var f = e.def.nodes[t];
        return ro(e, f, n, r, i, a, o, l, u, s, c, h, d), 224 & f.flags ? Dn(e, t).value : void 0;
      }
      function Ro(e, t, n, r, i, a, o, l, u, s, c, h, d) {
        var f = e.def.nodes[t];
        return ao(e, f, n, r, i, a, o, l, u, s, c, h, d), 224 & f.flags ? Dn(e, t).value : void 0;
      }
      function Io(e) {
        return Zo(Lo.detectChanges, no, null, [e]);
      }
      function Oo(e) {
        return Zo(Lo.checkNoChanges, to, null, [e]);
      }
      function Do(e) {
        return Zo(Lo.destroy, lo, null, [e]);
      }
      var Vo,
        Mo,
        No,
        Lo = (function () {
          var e = { create: 0, detectChanges: 1, checkNoChanges: 2, destroy: 3, handleEvent: 4 };
          return (
            (e[e.create] = 'create'),
            (e[e.detectChanges] = 'detectChanges'),
            (e[e.checkNoChanges] = 'checkNoChanges'),
            (e[e.destroy] = 'destroy'),
            (e[e.handleEvent] = 'handleEvent'),
            e
          );
        })();
      function Fo(e, t) {
        (Mo = e), (No = t);
      }
      function Uo(e, t, n, r) {
        return Fo(e, t), Zo(Lo.handleEvent, e.def.handleEvent, null, [e, t, n, r]);
      }
      function jo(e, t) {
        if (128 & e.state) throw Tn(Lo[Vo]);
        return (
          Fo(e, qo(e, 0)),
          e.def.updateDirectives(function (e, n, r) {
            for (
              var i = e.def.nodes[n], a = arguments.length, o = new Array(a > 3 ? a - 3 : 0), l = 3;
              l < a;
              l++
            )
              o[l - 3] = arguments[l];
            return (
              0 === t ? zo(e, i, r, o) : Bo(e, i, r, o),
              16384 & i.flags && Fo(e, qo(e, n)),
              224 & i.flags ? Dn(e, i.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function Ho(e, t) {
        if (128 & e.state) throw Tn(Lo[Vo]);
        return (
          Fo(e, Go(e, 0)),
          e.def.updateRenderer(function (e, n, r) {
            for (
              var i = e.def.nodes[n], a = arguments.length, o = new Array(a > 3 ? a - 3 : 0), l = 3;
              l < a;
              l++
            )
              o[l - 3] = arguments[l];
            return (
              0 === t ? zo(e, i, r, o) : Bo(e, i, r, o),
              3 & i.flags && Fo(e, Go(e, n)),
              224 & i.flags ? Dn(e, i.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function zo(e, t, n, r) {
        if (ro.apply(void 0, [e, t, n].concat(_toConsumableArray(r)))) {
          var i = 1 === n ? r[0] : r;
          if (16384 & t.flags) {
            for (var a = {}, o = 0; o < t.bindings.length; o++) {
              var l = t.bindings[o],
                u = i[o];
              8 & l.flags &&
                (a[
                  ((f = l.nonMinifiedName),
                  'ng-reflect-' +
                    f.replace(/[$@]/g, '_').replace(Pt, function () {
                      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                      return '-' + t[1].toLowerCase();
                    }))
                ] = At(u));
            }
            var s = t.parent,
              c = In(e, s.nodeIndex).renderElement;
            if (s.element.name)
              for (var h in a) {
                var d = a[h];
                null != d ? e.renderer.setAttribute(c, h, d) : e.renderer.removeAttribute(c, h);
              }
            else e.renderer.setValue(c, 'bindings=' + JSON.stringify(a, null, 2));
          }
        }
        var f;
      }
      function Bo(e, t, n, r) {
        ao.apply(void 0, [e, t, n].concat(_toConsumableArray(r)));
      }
      function qo(e, t) {
        for (var n = t; n < e.def.nodes.length; n++) {
          var r = e.def.nodes[n];
          if (16384 & r.flags && r.bindings && r.bindings.length) return n;
        }
        return null;
      }
      function Go(e, t) {
        for (var n = t; n < e.def.nodes.length; n++) {
          var r = e.def.nodes[n];
          if (3 & r.flags && r.bindings && r.bindings.length) return n;
        }
        return null;
      }
      var $o = (function () {
        function e(t, n) {
          _classCallCheck(this, e),
            (this.view = t),
            (this.nodeIndex = n),
            null == n && (this.nodeIndex = n = 0),
            (this.nodeDef = t.def.nodes[n]);
          for (var r = this.nodeDef, i = t; r && 0 == (1 & r.flags); ) r = r.parent;
          if (!r) for (; !r && i; ) (r = Kn(i)), (i = i.parent);
          (this.elDef = r), (this.elView = i);
        }
        return (
          _createClass(e, [
            {
              key: 'logError',
              value: function (e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                  n[r - 1] = arguments[r];
                var i, a;
                2 & this.nodeDef.flags
                  ? ((i = this.view.def), (a = this.nodeDef.nodeIndex))
                  : ((i = this.elView.def), (a = this.elDef.nodeIndex));
                var o = (function (e, t) {
                    for (var n = -1, r = 0; r <= t; r++) 3 & e.nodes[r].flags && n++;
                    return n;
                  })(i, a),
                  l = -1;
                i.factory(function () {
                  var t;
                  return ++l === o ? (t = e.error).bind.apply(t, [e].concat(n)) : Nn;
                }),
                  l < o &&
                    (e.error('Illegal state: the ViewDefinitionFactory did not call the logger!'),
                    e.error.apply(e, n));
              },
            },
            {
              key: 'elOrCompView',
              get: function () {
                return In(this.elView, this.elDef.nodeIndex).componentView || this.view;
              },
            },
            {
              key: 'injector',
              get: function () {
                return Vr(this.elView, this.elDef);
              },
            },
            {
              key: 'component',
              get: function () {
                return this.elOrCompView.component;
              },
            },
            {
              key: 'context',
              get: function () {
                return this.elOrCompView.context;
              },
            },
            {
              key: 'providerTokens',
              get: function () {
                var e = [];
                if (this.elDef)
                  for (
                    var t = this.elDef.nodeIndex + 1;
                    t <= this.elDef.nodeIndex + this.elDef.childCount;
                    t++
                  ) {
                    var n = this.elView.def.nodes[t];
                    20224 & n.flags && e.push(n.provider.token), (t += n.childCount);
                  }
                return e;
              },
            },
            {
              key: 'references',
              get: function () {
                var e = {};
                if (this.elDef) {
                  Wo(this.elView, this.elDef, e);
                  for (
                    var t = this.elDef.nodeIndex + 1;
                    t <= this.elDef.nodeIndex + this.elDef.childCount;
                    t++
                  ) {
                    var n = this.elView.def.nodes[t];
                    20224 & n.flags && Wo(this.elView, n, e), (t += n.childCount);
                  }
                }
                return e;
              },
            },
            {
              key: 'componentRenderElement',
              get: function () {
                var e = (function (e) {
                  for (; e && !Yn(e); ) e = e.parent;
                  return e.parent ? In(e.parent, Kn(e).nodeIndex) : null;
                })(this.elOrCompView);
                return e ? e.renderElement : void 0;
              },
            },
            {
              key: 'renderNode',
              get: function () {
                return 2 & this.nodeDef.flags
                  ? Qn(this.view, this.nodeDef)
                  : Qn(this.elView, this.elDef);
              },
            },
          ]),
          e
        );
      })();
      function Wo(e, t, n) {
        for (var r in t.references) n[r] = Fa(e, t, t.references[r]);
      }
      function Zo(e, t, n, r) {
        var i,
          a,
          o = Vo,
          l = Mo,
          u = No;
        try {
          Vo = e;
          var s = t.apply(n, r);
          return (Mo = l), (No = u), (Vo = o), s;
        } catch (c) {
          if (xt(c) || !Mo) throw c;
          throw (
            ((i = c), (a = Ko()), i instanceof Error || (i = new Error(i.toString())), En(i, a), i)
          );
        }
      }
      function Ko() {
        return Mo ? new $o(Mo, No) : null;
      }
      var Qo = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.delegate = t);
          }
          return (
            _createClass(e, [
              {
                key: 'createRenderer',
                value: function (e, t) {
                  return new Yo(this.delegate.createRenderer(e, t));
                },
              },
              {
                key: 'begin',
                value: function () {
                  this.delegate.begin && this.delegate.begin();
                },
              },
              {
                key: 'end',
                value: function () {
                  this.delegate.end && this.delegate.end();
                },
              },
              {
                key: 'whenRenderingDone',
                value: function () {
                  return this.delegate.whenRenderingDone
                    ? this.delegate.whenRenderingDone()
                    : Promise.resolve(null);
                },
              },
            ]),
            e
          );
        })(),
        Yo = (function () {
          function e(t) {
            _classCallCheck(this, e),
              (this.delegate = t),
              (this.debugContextFactory = Ko),
              (this.data = this.delegate.data);
          }
          return (
            _createClass(e, [
              {
                key: 'createDebugContext',
                value: function (e) {
                  return this.debugContextFactory(e);
                },
              },
              {
                key: 'destroyNode',
                value: function (e) {
                  !(function (e) {
                    ka.delete(e.nativeNode);
                  })(ba(e)),
                    this.delegate.destroyNode && this.delegate.destroyNode(e);
                },
              },
              {
                key: 'destroy',
                value: function () {
                  this.delegate.destroy();
                },
              },
              {
                key: 'createElement',
                value: function (e, t) {
                  var n = this.delegate.createElement(e, t),
                    r = this.createDebugContext(n);
                  if (r) {
                    var i = new Ca(n, null, r);
                    (i.name = e), wa(i);
                  }
                  return n;
                },
              },
              {
                key: 'createComment',
                value: function (e) {
                  var t = this.delegate.createComment(e),
                    n = this.createDebugContext(t);
                  return n && wa(new _a(t, null, n)), t;
                },
              },
              {
                key: 'createText',
                value: function (e) {
                  var t = this.delegate.createText(e),
                    n = this.createDebugContext(t);
                  return n && wa(new _a(t, null, n)), t;
                },
              },
              {
                key: 'appendChild',
                value: function (e, t) {
                  var n = ba(e),
                    r = ba(t);
                  n && r && n instanceof Ca && n.addChild(r), this.delegate.appendChild(e, t);
                },
              },
              {
                key: 'insertBefore',
                value: function (e, t, n) {
                  var r = ba(e),
                    i = ba(t),
                    a = ba(n);
                  r && i && r instanceof Ca && r.insertBefore(a, i),
                    this.delegate.insertBefore(e, t, n);
                },
              },
              {
                key: 'removeChild',
                value: function (e, t) {
                  var n = ba(e),
                    r = ba(t);
                  n && r && n instanceof Ca && n.removeChild(r), this.delegate.removeChild(e, t);
                },
              },
              {
                key: 'selectRootElement',
                value: function (e, t) {
                  var n = this.delegate.selectRootElement(e, t),
                    r = Ko();
                  return r && wa(new Ca(n, null, r)), n;
                },
              },
              {
                key: 'setAttribute',
                value: function (e, t, n, r) {
                  var i = ba(e);
                  i && i instanceof Ca && (i.attributes[r ? r + ':' + t : t] = n),
                    this.delegate.setAttribute(e, t, n, r);
                },
              },
              {
                key: 'removeAttribute',
                value: function (e, t, n) {
                  var r = ba(e);
                  r && r instanceof Ca && (r.attributes[n ? n + ':' + t : t] = null),
                    this.delegate.removeAttribute(e, t, n);
                },
              },
              {
                key: 'addClass',
                value: function (e, t) {
                  var n = ba(e);
                  n && n instanceof Ca && (n.classes[t] = !0), this.delegate.addClass(e, t);
                },
              },
              {
                key: 'removeClass',
                value: function (e, t) {
                  var n = ba(e);
                  n && n instanceof Ca && (n.classes[t] = !1), this.delegate.removeClass(e, t);
                },
              },
              {
                key: 'setStyle',
                value: function (e, t, n, r) {
                  var i = ba(e);
                  i && i instanceof Ca && (i.styles[t] = n), this.delegate.setStyle(e, t, n, r);
                },
              },
              {
                key: 'removeStyle',
                value: function (e, t, n) {
                  var r = ba(e);
                  r && r instanceof Ca && (r.styles[t] = null), this.delegate.removeStyle(e, t, n);
                },
              },
              {
                key: 'setProperty',
                value: function (e, t, n) {
                  var r = ba(e);
                  r && r instanceof Ca && (r.properties[t] = n), this.delegate.setProperty(e, t, n);
                },
              },
              {
                key: 'listen',
                value: function (e, t, n) {
                  if ('string' != typeof e) {
                    var r = ba(e);
                    r && r.listeners.push(new ya(t, n));
                  }
                  return this.delegate.listen(e, t, n);
                },
              },
              {
                key: 'parentNode',
                value: function (e) {
                  return this.delegate.parentNode(e);
                },
              },
              {
                key: 'nextSibling',
                value: function (e) {
                  return this.delegate.nextSibling(e);
                },
              },
              {
                key: 'setValue',
                value: function (e, t) {
                  return this.delegate.setValue(e, t);
                },
              },
            ]),
            e
          );
        })();
      var Jo = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return (
              _classCallCheck(this, n),
              ((a = t.call(this)).moduleType = e),
              (a._bootstrapComponents = r),
              (a._ngModuleDefFactory = i),
              a
            );
          }
          return (
            _createClass(n, [
              {
                key: 'create',
                value: function (e) {
                  !(function () {
                    if (!vo) {
                      vo = !0;
                      var e = Je()
                        ? {
                            setCurrentNode: Fo,
                            createRootView: mo,
                            createEmbeddedView: _o,
                            createComponentView: Co,
                            createNgModuleRef: ko,
                            overrideProvider: So,
                            overrideComponentView: Eo,
                            clearOverrides: To,
                            checkAndUpdateView: Io,
                            checkNoChangesView: Oo,
                            destroyView: Do,
                            createDebugContext: function (e, t) {
                              return new $o(e, t);
                            },
                            handleEvent: Uo,
                            updateDirectives: jo,
                            updateRenderer: Ho,
                          }
                        : {
                            setCurrentNode: function () {},
                            createRootView: go,
                            createEmbeddedView: Ka,
                            createComponentView: Ya,
                            createNgModuleRef: Ur,
                            overrideProvider: Nn,
                            overrideComponentView: Nn,
                            clearOverrides: Nn,
                            checkAndUpdateView: no,
                            checkNoChangesView: to,
                            destroyView: lo,
                            createDebugContext: function (e, t) {
                              return new $o(e, t);
                            },
                            handleEvent: function (e, t, n, r) {
                              return e.def.handleEvent(e, t, n, r);
                            },
                            updateDirectives: function (e, t) {
                              return e.def.updateDirectives(0 === t ? Ao : Ro, e);
                            },
                            updateRenderer: function (e, t) {
                              return e.def.updateRenderer(0 === t ? Ao : Ro, e);
                            },
                          };
                      (Mn.setCurrentNode = e.setCurrentNode),
                        (Mn.createRootView = e.createRootView),
                        (Mn.createEmbeddedView = e.createEmbeddedView),
                        (Mn.createComponentView = e.createComponentView),
                        (Mn.createNgModuleRef = e.createNgModuleRef),
                        (Mn.overrideProvider = e.overrideProvider),
                        (Mn.overrideComponentView = e.overrideComponentView),
                        (Mn.clearOverrides = e.clearOverrides),
                        (Mn.checkAndUpdateView = e.checkAndUpdateView),
                        (Mn.checkNoChangesView = e.checkNoChangesView),
                        (Mn.destroyView = e.destroyView),
                        (Mn.resolveDep = oi),
                        (Mn.createDebugContext = e.createDebugContext),
                        (Mn.handleEvent = e.handleEvent),
                        (Mn.updateDirectives = e.updateDirectives),
                        (Mn.updateRenderer = e.updateRenderer),
                        (Mn.dirtyParentQueries = Ma);
                    }
                  })();
                  var t = (function (e) {
                    var t = Array.from(e.providers),
                      n = Array.from(e.modules),
                      r = {};
                    for (var i in e.providersByKey) r[i] = e.providersByKey[i];
                    return {
                      factory: e.factory,
                      isRoot: e.isRoot,
                      providers: t,
                      modules: n,
                      providersByKey: r,
                    };
                  })(rr(this._ngModuleDefFactory));
                  return Mn.createNgModuleRef(
                    this.moduleType,
                    e || Ue.NULL,
                    this._bootstrapComponents,
                    t
                  );
                },
              },
            ]),
            n
          );
        })(Zt),
        Xo = function e() {
          _classCallCheck(this, e);
        },
        el = function e() {
          _classCallCheck(this, e), (this.title = 'comparador-de-taxas');
        },
        tl = function e() {
          _classCallCheck(this, e);
        },
        nl = new Te('Location Initialized'),
        rl = function e() {
          _classCallCheck(this, e);
        },
        il = new Te('appBaseHref'),
        al = (function () {
          function e(t, n) {
            var r = this;
            _classCallCheck(this, e),
              (this._subject = new yi()),
              (this._urlChangeListeners = []),
              (this._platformStrategy = t);
            var i = this._platformStrategy.getBaseHref();
            (this._platformLocation = n),
              (this._baseHref = e.stripTrailingSlash(ol(i))),
              this._platformStrategy.onPopState(function (e) {
                r._subject.emit({ url: r.path(!0), pop: !0, state: e.state, type: e.type });
              });
          }
          return (
            _createClass(
              e,
              [
                {
                  key: 'path',
                  value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return this.normalize(this._platformStrategy.path(e));
                  },
                },
                {
                  key: 'getState',
                  value: function () {
                    return this._platformLocation.getState();
                  },
                },
                {
                  key: 'isCurrentPathEqualTo',
                  value: function (t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
                    return this.path() == this.normalize(t + e.normalizeQueryParams(n));
                  },
                },
                {
                  key: 'normalize',
                  value: function (t) {
                    return e.stripTrailingSlash(
                      (function (e, t) {
                        return e && t.startsWith(e) ? t.substring(e.length) : t;
                      })(this._baseHref, ol(t))
                    );
                  },
                },
                {
                  key: 'prepareExternalUrl',
                  value: function (e) {
                    return (
                      e && '/' !== e[0] && (e = '/' + e),
                      this._platformStrategy.prepareExternalUrl(e)
                    );
                  },
                },
                {
                  key: 'go',
                  value: function (t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    this._platformStrategy.pushState(r, '', t, n),
                      this._notifyUrlChangeListeners(
                        this.prepareExternalUrl(t + e.normalizeQueryParams(n)),
                        r
                      );
                  },
                },
                {
                  key: 'replaceState',
                  value: function (t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    this._platformStrategy.replaceState(r, '', t, n),
                      this._notifyUrlChangeListeners(
                        this.prepareExternalUrl(t + e.normalizeQueryParams(n)),
                        r
                      );
                  },
                },
                {
                  key: 'forward',
                  value: function () {
                    this._platformStrategy.forward();
                  },
                },
                {
                  key: 'back',
                  value: function () {
                    this._platformStrategy.back();
                  },
                },
                {
                  key: 'onUrlChange',
                  value: function (e) {
                    var t = this;
                    this._urlChangeListeners.push(e),
                      this.subscribe(function (e) {
                        t._notifyUrlChangeListeners(e.url, e.state);
                      });
                  },
                },
                {
                  key: '_notifyUrlChangeListeners',
                  value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                      t = arguments.length > 1 ? arguments[1] : void 0;
                    this._urlChangeListeners.forEach(function (n) {
                      return n(e, t);
                    });
                  },
                },
                {
                  key: 'subscribe',
                  value: function (e, t, n) {
                    return this._subject.subscribe({ next: e, error: t, complete: n });
                  },
                },
              ],
              [
                {
                  key: 'normalizeQueryParams',
                  value: function (e) {
                    return e && '?' !== e[0] ? '?' + e : e;
                  },
                },
                {
                  key: 'joinWithSlash',
                  value: function (e, t) {
                    if (0 == e.length) return t;
                    if (0 == t.length) return e;
                    var n = 0;
                    return (
                      e.endsWith('/') && n++,
                      t.startsWith('/') && n++,
                      2 == n ? e + t.substring(1) : 1 == n ? e + t : e + '/' + t
                    );
                  },
                },
                {
                  key: 'stripTrailingSlash',
                  value: function (e) {
                    var t = e.match(/#|\?|$/),
                      n = (t && t.index) || e.length;
                    return e.slice(0, n - ('/' === e[n - 1] ? 1 : 0)) + e.slice(n);
                  },
                },
              ]
            ),
            e
          );
        })();
      function ol(e) {
        return e.replace(/\/index.html$/, '');
      }
      var ll = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this))._platformLocation = e),
              (i._baseHref = ''),
              null != r && (i._baseHref = r),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: 'onPopState',
                value: function (e) {
                  this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e);
                },
              },
              {
                key: 'getBaseHref',
                value: function () {
                  return this._baseHref;
                },
              },
              {
                key: 'path',
                value: function () {
                  arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  var e = this._platformLocation.hash;
                  return null == e && (e = '#'), e.length > 0 ? e.substring(1) : e;
                },
              },
              {
                key: 'prepareExternalUrl',
                value: function (e) {
                  var t = al.joinWithSlash(this._baseHref, e);
                  return t.length > 0 ? '#' + t : t;
                },
              },
              {
                key: 'pushState',
                value: function (e, t, n, r) {
                  var i = this.prepareExternalUrl(n + al.normalizeQueryParams(r));
                  0 == i.length && (i = this._platformLocation.pathname),
                    this._platformLocation.pushState(e, t, i);
                },
              },
              {
                key: 'replaceState',
                value: function (e, t, n, r) {
                  var i = this.prepareExternalUrl(n + al.normalizeQueryParams(r));
                  0 == i.length && (i = this._platformLocation.pathname),
                    this._platformLocation.replaceState(e, t, i);
                },
              },
              {
                key: 'forward',
                value: function () {
                  this._platformLocation.forward();
                },
              },
              {
                key: 'back',
                value: function () {
                  this._platformLocation.back();
                },
              },
            ]),
            n
          );
        })(rl),
        ul = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            if (
              (_classCallCheck(this, n),
              ((i = t.call(this))._platformLocation = e),
              null == r && (r = i._platformLocation.getBaseHrefFromDOM()),
              null == r)
            )
              throw new Error(
                'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
              );
            return (i._baseHref = r), _possibleConstructorReturn(i);
          }
          return (
            _createClass(n, [
              {
                key: 'onPopState',
                value: function (e) {
                  this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e);
                },
              },
              {
                key: 'getBaseHref',
                value: function () {
                  return this._baseHref;
                },
              },
              {
                key: 'prepareExternalUrl',
                value: function (e) {
                  return al.joinWithSlash(this._baseHref, e);
                },
              },
              {
                key: 'path',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t =
                      this._platformLocation.pathname +
                      al.normalizeQueryParams(this._platformLocation.search),
                    n = this._platformLocation.hash;
                  return n && e ? ''.concat(t).concat(n) : t;
                },
              },
              {
                key: 'pushState',
                value: function (e, t, n, r) {
                  var i = this.prepareExternalUrl(n + al.normalizeQueryParams(r));
                  this._platformLocation.pushState(e, t, i);
                },
              },
              {
                key: 'replaceState',
                value: function (e, t, n, r) {
                  var i = this.prepareExternalUrl(n + al.normalizeQueryParams(r));
                  this._platformLocation.replaceState(e, t, i);
                },
              },
              {
                key: 'forward',
                value: function () {
                  this._platformLocation.forward();
                },
              },
              {
                key: 'back',
                value: function () {
                  this._platformLocation.back();
                },
              },
            ]),
            n
          );
        })(rl),
        sl = {
          ADP: [void 0, void 0, 0],
          AFN: [void 0, void 0, 0],
          ALL: [void 0, void 0, 0],
          AMD: [void 0, void 0, 0],
          AOA: [void 0, 'Kz'],
          ARS: [void 0, '$'],
          AUD: ['A$', '$'],
          BAM: [void 0, 'KM'],
          BBD: [void 0, '$'],
          BDT: [void 0, '\u09f3'],
          BHD: [void 0, void 0, 3],
          BIF: [void 0, void 0, 0],
          BMD: [void 0, '$'],
          BND: [void 0, '$'],
          BOB: [void 0, 'Bs'],
          BRL: ['R$'],
          BSD: [void 0, '$'],
          BWP: [void 0, 'P'],
          BYN: [void 0, '\u0440.', 2],
          BYR: [void 0, void 0, 0],
          BZD: [void 0, '$'],
          CAD: ['CA$', '$', 2],
          CHF: [void 0, void 0, 2],
          CLF: [void 0, void 0, 4],
          CLP: [void 0, '$', 0],
          CNY: ['CN\xa5', '\xa5'],
          COP: [void 0, '$', 0],
          CRC: [void 0, '\u20a1', 2],
          CUC: [void 0, '$'],
          CUP: [void 0, '$'],
          CZK: [void 0, 'K\u010d', 2],
          DJF: [void 0, void 0, 0],
          DKK: [void 0, 'kr', 2],
          DOP: [void 0, '$'],
          EGP: [void 0, 'E\xa3'],
          ESP: [void 0, '\u20a7', 0],
          EUR: ['\u20ac'],
          FJD: [void 0, '$'],
          FKP: [void 0, '\xa3'],
          GBP: ['\xa3'],
          GEL: [void 0, '\u20be'],
          GIP: [void 0, '\xa3'],
          GNF: [void 0, 'FG', 0],
          GTQ: [void 0, 'Q'],
          GYD: [void 0, '$', 0],
          HKD: ['HK$', '$'],
          HNL: [void 0, 'L'],
          HRK: [void 0, 'kn'],
          HUF: [void 0, 'Ft', 2],
          IDR: [void 0, 'Rp', 0],
          ILS: ['\u20aa'],
          INR: ['\u20b9'],
          IQD: [void 0, void 0, 0],
          IRR: [void 0, void 0, 0],
          ISK: [void 0, 'kr', 0],
          ITL: [void 0, void 0, 0],
          JMD: [void 0, '$'],
          JOD: [void 0, void 0, 3],
          JPY: ['\xa5', void 0, 0],
          KHR: [void 0, '\u17db'],
          KMF: [void 0, 'CF', 0],
          KPW: [void 0, '\u20a9', 0],
          KRW: ['\u20a9', void 0, 0],
          KWD: [void 0, void 0, 3],
          KYD: [void 0, '$'],
          KZT: [void 0, '\u20b8'],
          LAK: [void 0, '\u20ad', 0],
          LBP: [void 0, 'L\xa3', 0],
          LKR: [void 0, 'Rs'],
          LRD: [void 0, '$'],
          LTL: [void 0, 'Lt'],
          LUF: [void 0, void 0, 0],
          LVL: [void 0, 'Ls'],
          LYD: [void 0, void 0, 3],
          MGA: [void 0, 'Ar', 0],
          MGF: [void 0, void 0, 0],
          MMK: [void 0, 'K', 0],
          MNT: [void 0, '\u20ae', 0],
          MRO: [void 0, void 0, 0],
          MUR: [void 0, 'Rs', 0],
          MXN: ['MX$', '$'],
          MYR: [void 0, 'RM'],
          NAD: [void 0, '$'],
          NGN: [void 0, '\u20a6'],
          NIO: [void 0, 'C$'],
          NOK: [void 0, 'kr', 2],
          NPR: [void 0, 'Rs'],
          NZD: ['NZ$', '$'],
          OMR: [void 0, void 0, 3],
          PHP: [void 0, '\u20b1'],
          PKR: [void 0, 'Rs', 0],
          PLN: [void 0, 'z\u0142'],
          PYG: [void 0, '\u20b2', 0],
          RON: [void 0, 'lei'],
          RSD: [void 0, void 0, 0],
          RUB: [void 0, '\u20bd'],
          RUR: [void 0, '\u0440.'],
          RWF: [void 0, 'RF', 0],
          SBD: [void 0, '$'],
          SEK: [void 0, 'kr', 2],
          SGD: [void 0, '$'],
          SHP: [void 0, '\xa3'],
          SLL: [void 0, void 0, 0],
          SOS: [void 0, void 0, 0],
          SRD: [void 0, '$'],
          SSP: [void 0, '\xa3'],
          STD: [void 0, void 0, 0],
          STN: [void 0, 'Db'],
          SYP: [void 0, '\xa3', 0],
          THB: [void 0, '\u0e3f'],
          TMM: [void 0, void 0, 0],
          TND: [void 0, void 0, 3],
          TOP: [void 0, 'T$'],
          TRL: [void 0, void 0, 0],
          TRY: [void 0, '\u20ba'],
          TTD: [void 0, '$'],
          TWD: ['NT$', '$', 2],
          TZS: [void 0, void 0, 0],
          UAH: [void 0, '\u20b4'],
          UGX: [void 0, void 0, 0],
          USD: ['$'],
          UYI: [void 0, void 0, 0],
          UYU: [void 0, '$'],
          UZS: [void 0, void 0, 0],
          VEF: [void 0, 'Bs'],
          VND: ['\u20ab', void 0, 0],
          VUV: [void 0, void 0, 0],
          XAF: ['FCFA', void 0, 0],
          XCD: ['EC$', '$'],
          XOF: ['CFA', void 0, 0],
          XPF: ['CFPF', void 0, 0],
          YER: [void 0, void 0, 0],
          ZAR: [void 0, 'R'],
          ZMK: [void 0, void 0, 0],
          ZMW: [void 0, 'ZK'],
          ZWD: [void 0, void 0, 0],
        },
        cl = (function () {
          var e = { Decimal: 0, Percent: 1, Currency: 2, Scientific: 3 };
          return (
            (e[e.Decimal] = 'Decimal'),
            (e[e.Percent] = 'Percent'),
            (e[e.Currency] = 'Currency'),
            (e[e.Scientific] = 'Scientific'),
            e
          );
        })(),
        hl = (function () {
          var e = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
          return (
            (e[e.Zero] = 'Zero'),
            (e[e.One] = 'One'),
            (e[e.Two] = 'Two'),
            (e[e.Few] = 'Few'),
            (e[e.Many] = 'Many'),
            (e[e.Other] = 'Other'),
            e
          );
        })(),
        dl = (function () {
          var e = {
            Decimal: 0,
            Group: 1,
            List: 2,
            PercentSign: 3,
            PlusSign: 4,
            MinusSign: 5,
            Exponential: 6,
            SuperscriptingExponent: 7,
            PerMille: 8,
            Infinity: 9,
            NaN: 10,
            TimeSeparator: 11,
            CurrencyDecimal: 12,
            CurrencyGroup: 13,
          };
          return (
            (e[e.Decimal] = 'Decimal'),
            (e[e.Group] = 'Group'),
            (e[e.List] = 'List'),
            (e[e.PercentSign] = 'PercentSign'),
            (e[e.PlusSign] = 'PlusSign'),
            (e[e.MinusSign] = 'MinusSign'),
            (e[e.Exponential] = 'Exponential'),
            (e[e.SuperscriptingExponent] = 'SuperscriptingExponent'),
            (e[e.PerMille] = 'PerMille'),
            (e[e.Infinity] = 'Infinity'),
            (e[e.NaN] = 'NaN'),
            (e[e.TimeSeparator] = 'TimeSeparator'),
            (e[e.CurrencyDecimal] = 'CurrencyDecimal'),
            (e[e.CurrencyGroup] = 'CurrencyGroup'),
            e
          );
        })();
      function fl(e, t) {
        var n = mi(e),
          r = n[pi.NumberSymbols][t];
        if (void 0 === r) {
          if (t === dl.CurrencyDecimal) return n[pi.NumberSymbols][dl.Decimal];
          if (t === dl.CurrencyGroup) return n[pi.NumberSymbols][dl.Group];
        }
        return r;
      }
      function pl(e, t) {
        return mi(e)[pi.NumberFormats][t];
      }
      var vl = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
      function gl(e, t, n, r, i, a) {
        var o = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          l = '',
          u = !1;
        if (isFinite(e)) {
          var s = (function (e) {
            var t,
              n,
              r,
              i,
              a,
              o = Math.abs(e) + '',
              l = 0;
            for (
              (n = o.indexOf('.')) > -1 && (o = o.replace('.', '')),
                (r = o.search(/e/i)) > 0
                  ? (n < 0 && (n = r), (n += +o.slice(r + 1)), (o = o.substring(0, r)))
                  : n < 0 && (n = o.length),
                r = 0;
              '0' === o.charAt(r);
              r++
            );
            if (r === (a = o.length)) (t = [0]), (n = 1);
            else {
              for (a--; '0' === o.charAt(a); ) a--;
              for (n -= r, t = [], i = 0; r <= a; r++, i++) t[i] = Number(o.charAt(r));
            }
            return (
              n > 22 && ((t = t.splice(0, 21)), (l = n - 1), (n = 1)),
              { digits: t, exponent: l, integerLen: n }
            );
          })(e);
          o &&
            (s = (function (e) {
              if (0 === e.digits[0]) return e;
              var t = e.digits.length - e.integerLen;
              return (
                e.exponent
                  ? (e.exponent += 2)
                  : (0 === t ? e.digits.push(0, 0) : 1 === t && e.digits.push(0),
                    (e.integerLen += 2)),
                e
              );
            })(s));
          var c = t.minInt,
            h = t.minFrac,
            d = t.maxFrac;
          if (a) {
            var f = a.match(vl);
            if (null === f) throw new Error(a + ' is not a valid digit info');
            var p = f[1],
              v = f[3],
              g = f[5];
            null != p && (c = yl(p)),
              null != v && (h = yl(v)),
              null != g ? (d = yl(g)) : null != v && h > d && (d = h);
          }
          !(function (e, t, n) {
            if (t > n)
              throw new Error(
                'The minimum number of digits after fraction ('
                  .concat(t, ') is higher than the maximum (')
                  .concat(n, ').')
              );
            var r = e.digits,
              i = r.length - e.integerLen,
              a = Math.min(Math.max(t, i), n),
              o = a + e.integerLen,
              l = r[o];
            if (o > 0) {
              r.splice(Math.max(e.integerLen, o));
              for (var u = o; u < r.length; u++) r[u] = 0;
            } else {
              (i = Math.max(0, i)),
                (e.integerLen = 1),
                (r.length = Math.max(1, (o = a + 1))),
                (r[0] = 0);
              for (var s = 1; s < o; s++) r[s] = 0;
            }
            if (l >= 5)
              if (o - 1 < 0) {
                for (var c = 0; c > o; c--) r.unshift(0), e.integerLen++;
                r.unshift(1), e.integerLen++;
              } else r[o - 1]++;
            for (; i < Math.max(0, a); i++) r.push(0);
            var h = 0 !== a,
              d = t + e.integerLen,
              f = r.reduceRight(function (e, t, n, r) {
                return (
                  (r[n] = (t += e) < 10 ? t : t - 10),
                  h && (0 === r[n] && n >= d ? r.pop() : (h = !1)),
                  t >= 10 ? 1 : 0
                );
              }, 0);
            f && (r.unshift(f), e.integerLen++);
          })(s, h, d);
          var m = s.digits,
            y = s.integerLen,
            _ = s.exponent,
            C = [];
          for (
            u = m.every(function (e) {
              return !e;
            });
            y < c;
            y++
          )
            m.unshift(0);
          for (; y < 0; y++) m.unshift(0);
          y > 0 ? (C = m.splice(y, m.length)) : ((C = m), (m = [0]));
          var k = [];
          for (
            m.length >= t.lgSize && k.unshift(m.splice(-t.lgSize, m.length).join(''));
            m.length > t.gSize;

          )
            k.unshift(m.splice(-t.gSize, m.length).join(''));
          m.length && k.unshift(m.join('')),
            (l = k.join(fl(n, r))),
            C.length && (l += fl(n, i) + C.join('')),
            _ && (l += fl(n, dl.Exponential) + '+' + _);
        } else l = fl(n, dl.Infinity);
        return (l = e < 0 && !u ? t.negPre + l + t.negSuf : t.posPre + l + t.posSuf);
      }
      function ml(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '-',
          n = {
            minInt: 1,
            minFrac: 0,
            maxFrac: 0,
            posPre: '',
            posSuf: '',
            negPre: '',
            negSuf: '',
            gSize: 0,
            lgSize: 0,
          },
          r = e.split(';'),
          i = r[0],
          a = r[1],
          o =
            -1 !== i.indexOf('.')
              ? i.split('.')
              : [i.substring(0, i.lastIndexOf('0') + 1), i.substring(i.lastIndexOf('0') + 1)],
          l = o[0],
          u = o[1] || '';
        n.posPre = l.substr(0, l.indexOf('#'));
        for (var s = 0; s < u.length; s++) {
          var c = u.charAt(s);
          '0' === c
            ? (n.minFrac = n.maxFrac = s + 1)
            : '#' === c
            ? (n.maxFrac = s + 1)
            : (n.posSuf += c);
        }
        var h = l.split(',');
        if (
          ((n.gSize = h[1] ? h[1].length : 0),
          (n.lgSize = h[2] || h[1] ? (h[2] || h[1]).length : 0),
          a)
        ) {
          var d = i.length - n.posPre.length - n.posSuf.length,
            f = a.indexOf('#');
          (n.negPre = a.substr(0, f).replace(/'/g, '')),
            (n.negSuf = a.substr(f + d).replace(/'/g, ''));
        } else (n.negPre = t + n.posPre), (n.negSuf = n.posSuf);
        return n;
      }
      function yl(e) {
        var t = parseInt(e);
        if (isNaN(t)) throw new Error('Invalid integer literal when parsing ' + e);
        return t;
      }
      var _l = new Te('UseV4Plurals'),
        Cl = function e() {
          _classCallCheck(this, e);
        },
        kl = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this)).locale = e),
              (i.deprecatedPluralFn = r),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: 'getPluralCategory',
                value: function (e, t) {
                  switch (
                    this.deprecatedPluralFn
                      ? this.deprecatedPluralFn(t || this.locale, e)
                      : (function (e) {
                          return mi(e)[pi.PluralCase];
                        })(t || this.locale)(e)
                  ) {
                    case hl.Zero:
                      return 'zero';
                    case hl.One:
                      return 'one';
                    case hl.Two:
                      return 'two';
                    case hl.Few:
                      return 'few';
                    case hl.Many:
                      return 'many';
                    default:
                      return 'other';
                  }
                },
              },
            ]),
            n
          );
        })(Cl),
        bl = function e() {
          _classCallCheck(this, e);
        },
        wl = (function () {
          function e(t, n, r, i) {
            _classCallCheck(this, e),
              (this._iterableDiffers = t),
              (this._keyValueDiffers = n),
              (this._ngEl = r),
              (this._renderer = i),
              (this._initialClasses = []);
          }
          return (
            _createClass(e, [
              {
                key: 'getValue',
                value: function () {
                  return null;
                },
              },
              {
                key: 'setClass',
                value: function (e) {
                  this._removeClasses(this._initialClasses),
                    (this._initialClasses = 'string' == typeof e ? e.split(/\s+/) : []),
                    this._applyClasses(this._initialClasses),
                    this._applyClasses(this._rawClass);
                },
              },
              {
                key: 'setNgClass',
                value: function (e) {
                  this._removeClasses(this._rawClass),
                    this._applyClasses(this._initialClasses),
                    (this._iterableDiffer = null),
                    (this._keyValueDiffer = null),
                    (this._rawClass = 'string' == typeof e ? e.split(/\s+/) : e),
                    this._rawClass &&
                      (Mt(this._rawClass)
                        ? (this._iterableDiffer = this._iterableDiffers
                            .find(this._rawClass)
                            .create())
                        : (this._keyValueDiffer = this._keyValueDiffers
                            .find(this._rawClass)
                            .create()));
                },
              },
              {
                key: 'applyChanges',
                value: function () {
                  if (this._iterableDiffer) {
                    var e = this._iterableDiffer.diff(this._rawClass);
                    e && this._applyIterableChanges(e);
                  } else if (this._keyValueDiffer) {
                    var t = this._keyValueDiffer.diff(this._rawClass);
                    t && this._applyKeyValueChanges(t);
                  }
                },
              },
              {
                key: '_applyKeyValueChanges',
                value: function (e) {
                  var t = this;
                  e.forEachAddedItem(function (e) {
                    return t._toggleClass(e.key, e.currentValue);
                  }),
                    e.forEachChangedItem(function (e) {
                      return t._toggleClass(e.key, e.currentValue);
                    }),
                    e.forEachRemovedItem(function (e) {
                      e.previousValue && t._toggleClass(e.key, !1);
                    });
                },
              },
              {
                key: '_applyIterableChanges',
                value: function (e) {
                  var t = this;
                  e.forEachAddedItem(function (e) {
                    if ('string' != typeof e.item)
                      throw new Error(
                        'NgClass can only toggle CSS classes expressed as strings, got ' +
                          ye(e.item)
                      );
                    t._toggleClass(e.item, !0);
                  }),
                    e.forEachRemovedItem(function (e) {
                      return t._toggleClass(e.item, !1);
                    });
                },
              },
              {
                key: '_applyClasses',
                value: function (e) {
                  var t = this;
                  e &&
                    (Array.isArray(e) || e instanceof Set
                      ? e.forEach(function (e) {
                          return t._toggleClass(e, !0);
                        })
                      : Object.keys(e).forEach(function (n) {
                          return t._toggleClass(n, !!e[n]);
                        }));
                },
              },
              {
                key: '_removeClasses',
                value: function (e) {
                  var t = this;
                  e &&
                    (Array.isArray(e) || e instanceof Set
                      ? e.forEach(function (e) {
                          return t._toggleClass(e, !1);
                        })
                      : Object.keys(e).forEach(function (e) {
                          return t._toggleClass(e, !1);
                        }));
                },
              },
              {
                key: '_toggleClass',
                value: function (e, t) {
                  var n = this;
                  (e = e.trim()) &&
                    e.split(/\s+/g).forEach(function (e) {
                      t
                        ? n._renderer.addClass(n._ngEl.nativeElement, e)
                        : n._renderer.removeClass(n._ngEl.nativeElement, e);
                    });
                },
              },
            ]),
            e
          );
        })(),
        xl = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e) {
            return _classCallCheck(this, n), t.call(this, e);
          }
          return (
            _createClass(n, [
              {
                key: 'ngDoCheck',
                value: function () {
                  this._delegate.applyChanges();
                },
              },
              {
                key: 'klass',
                set: function (e) {
                  this._delegate.setClass(e);
                },
              },
              {
                key: 'ngClass',
                set: function (e) {
                  this._delegate.setNgClass(e);
                },
              },
            ]),
            n
          );
        })(
          (function () {
            var e = (function () {
              function e(t) {
                _classCallCheck(this, e), (this._delegate = t);
              }
              return (
                _createClass(e, [
                  {
                    key: 'getValue',
                    value: function () {
                      return this._delegate.getValue();
                    },
                  },
                ]),
                e
              );
            })();
            return (e.ngDirectiveDef = void 0), e;
          })()
        ),
        Sl = (function () {
          function e(t, n, r, i) {
            _classCallCheck(this, e),
              (this.$implicit = t),
              (this.ngForOf = n),
              (this.index = r),
              (this.count = i);
          }
          return (
            _createClass(e, [
              {
                key: 'first',
                get: function () {
                  return 0 === this.index;
                },
              },
              {
                key: 'last',
                get: function () {
                  return this.index === this.count - 1;
                },
              },
              {
                key: 'even',
                get: function () {
                  return this.index % 2 == 0;
                },
              },
              {
                key: 'odd',
                get: function () {
                  return !this.even;
                },
              },
            ]),
            e
          );
        })(),
        El = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this._viewContainer = t),
              (this._template = n),
              (this._differs = r),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          return (
            _createClass(
              e,
              [
                {
                  key: 'ngDoCheck',
                  value: function () {
                    if (this._ngForOfDirty) {
                      this._ngForOfDirty = !1;
                      var e = this._ngForOf;
                      if (!this._differ && e)
                        try {
                          this._differ = this._differs.find(e).create(this.ngForTrackBy);
                        } catch (r) {
                          throw new Error(
                            "Cannot find a differ supporting object '"
                              .concat(e, "' of type '")
                              .concat(
                                (t = e).name || typeof t,
                                "'. NgFor only supports binding to Iterables such as Arrays."
                              )
                          );
                        }
                    }
                    var t;
                    if (this._differ) {
                      var n = this._differ.diff(this._ngForOf);
                      n && this._applyChanges(n);
                    }
                  },
                },
                {
                  key: '_applyChanges',
                  value: function (e) {
                    var t = this,
                      n = [];
                    e.forEachOperation(function (e, r, i) {
                      if (null == e.previousIndex) {
                        var a = t._viewContainer.createEmbeddedView(
                            t._template,
                            new Sl(null, t._ngForOf, -1, -1),
                            i
                          ),
                          o = new Tl(e, a);
                        n.push(o);
                      } else if (null == i) t._viewContainer.remove(r);
                      else {
                        var l = t._viewContainer.get(r);
                        t._viewContainer.move(l, i);
                        var u = new Tl(e, l);
                        n.push(u);
                      }
                    });
                    for (var r = 0; r < n.length; r++) this._perViewChange(n[r].view, n[r].record);
                    for (var i = 0, a = this._viewContainer.length; i < a; i++) {
                      var o = this._viewContainer.get(i);
                      (o.context.index = i),
                        (o.context.count = a),
                        (o.context.ngForOf = this._ngForOf);
                    }
                    e.forEachIdentityChange(function (e) {
                      t._viewContainer.get(e.currentIndex).context.$implicit = e.item;
                    });
                  },
                },
                {
                  key: '_perViewChange',
                  value: function (e, t) {
                    e.context.$implicit = t.item;
                  },
                },
                {
                  key: 'ngForOf',
                  set: function (e) {
                    (this._ngForOf = e), (this._ngForOfDirty = !0);
                  },
                },
                {
                  key: 'ngForTrackBy',
                  set: function (e) {
                    Je() &&
                      null != e &&
                      'function' != typeof e &&
                      console &&
                      console.warn &&
                      console.warn(
                        'trackBy must be a function, but received '.concat(
                          JSON.stringify(e),
                          '. See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.'
                        )
                      ),
                      (this._trackByFn = e);
                  },
                  get: function () {
                    return this._trackByFn;
                  },
                },
                {
                  key: 'ngForTemplate',
                  set: function (e) {
                    e && (this._template = e);
                  },
                },
              ],
              [
                {
                  key: 'ngTemplateContextGuard',
                  value: function (e, t) {
                    return !0;
                  },
                },
              ]
            ),
            e
          );
        })(),
        Tl = function e(t, n) {
          _classCallCheck(this, e), (this.record = t), (this.view = n);
        },
        Pl = (function () {
          function e(t, n) {
            _classCallCheck(this, e),
              (this._viewContainer = t),
              (this._context = new Al()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = n);
          }
          return (
            _createClass(e, [
              {
                key: '_updateView',
                value: function () {
                  this._context.$implicit
                    ? this._thenViewRef ||
                      (this._viewContainer.clear(),
                      (this._elseViewRef = null),
                      this._thenTemplateRef &&
                        (this._thenViewRef = this._viewContainer.createEmbeddedView(
                          this._thenTemplateRef,
                          this._context
                        )))
                    : this._elseViewRef ||
                      (this._viewContainer.clear(),
                      (this._thenViewRef = null),
                      this._elseTemplateRef &&
                        (this._elseViewRef = this._viewContainer.createEmbeddedView(
                          this._elseTemplateRef,
                          this._context
                        )));
                },
              },
              {
                key: 'ngIf',
                set: function (e) {
                  (this._context.$implicit = this._context.ngIf = e), this._updateView();
                },
              },
              {
                key: 'ngIfThen',
                set: function (e) {
                  Rl('ngIfThen', e),
                    (this._thenTemplateRef = e),
                    (this._thenViewRef = null),
                    this._updateView();
                },
              },
              {
                key: 'ngIfElse',
                set: function (e) {
                  Rl('ngIfElse', e),
                    (this._elseTemplateRef = e),
                    (this._elseViewRef = null),
                    this._updateView();
                },
              },
            ]),
            e
          );
        })(),
        Al = function e() {
          _classCallCheck(this, e), (this.$implicit = null), (this.ngIf = null);
        };
      function Rl(e, t) {
        if (t && !t.createEmbeddedView)
          throw new Error(
            ''.concat(e, " must be a TemplateRef, but received '").concat(ye(t), "'.")
          );
      }
      function Il(e, t) {
        return Error("InvalidPipeArgument: '".concat(t, "' for pipe '").concat(ye(e), "'"));
      }
      var Ol = (function () {
          function e(t) {
            _classCallCheck(this, e), (this._locale = t);
          }
          return (
            _createClass(e, [
              {
                key: 'transform',
                value: function (t, n, r) {
                  if (Vl(t)) return null;
                  r = r || this._locale;
                  try {
                    return (function (e, t, n) {
                      return gl(
                        e,
                        ml(pl(t, cl.Percent), fl(t, dl.MinusSign)),
                        t,
                        dl.Group,
                        dl.Decimal,
                        n,
                        !0
                      ).replace(new RegExp('%', 'g'), fl(t, dl.PercentSign));
                    })(Ml(t), r, n);
                  } catch (i) {
                    throw Il(e, i.message);
                  }
                },
              },
            ]),
            e
          );
        })(),
        Dl = (function () {
          function e(t) {
            _classCallCheck(this, e), (this._locale = t);
          }
          return (
            _createClass(e, [
              {
                key: 'transform',
                value: function (t, n) {
                  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'symbol',
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    a = arguments.length > 4 ? arguments[4] : void 0;
                  if (Vl(t)) return null;
                  (a = a || this._locale),
                    'boolean' == typeof r &&
                      (console &&
                        console.warn &&
                        console.warn(
                          'Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".'
                        ),
                      (r = r ? 'symbol' : 'code'));
                  var o = n || 'USD';
                  'code' !== r &&
                    (o =
                      'symbol' === r || 'symbol-narrow' === r
                        ? (function (e, t) {
                            var n =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : 'en',
                              r =
                                (function (e) {
                                  return mi(e)[pi.Currencies];
                                })(n)[e] ||
                                sl[e] ||
                                [],
                              i = r[1];
                            return 'narrow' === t && 'string' == typeof i ? i : r[0] || e;
                          })(o, 'symbol' === r ? 'wide' : 'narrow', a)
                        : r);
                  try {
                    return (function (e, t, n, r, i) {
                      var a = ml(pl(t, cl.Currency), fl(t, dl.MinusSign));
                      return (
                        (a.minFrac = (function (e) {
                          var t,
                            n = sl[e];
                          return n && (t = n[2]), 'number' == typeof t ? t : 2;
                        })(r)),
                        (a.maxFrac = a.minFrac),
                        gl(e, a, t, dl.CurrencyGroup, dl.CurrencyDecimal, i)
                          .replace('\xa4', n)
                          .replace('\xa4', '')
                      );
                    })(Ml(t), a, o, n, i);
                  } catch (l) {
                    throw Il(e, l.message);
                  }
                },
              },
            ]),
            e
          );
        })();
      function Vl(e) {
        return null == e || '' === e || e != e;
      }
      function Ml(e) {
        if ('string' == typeof e && !isNaN(Number(e) - parseFloat(e))) return Number(e);
        if ('number' != typeof e) throw new Error(e + ' is not a number');
        return e;
      }
      var Nl,
        Ll = function e() {
          _classCallCheck(this, e);
        },
        Fl = new Te('DocumentToken'),
        Ul =
          (((Nl = function e() {
            _classCallCheck(this, e);
          }).ngInjectableDef = ve({
            token: Nl,
            providedIn: 'root',
            factory: function () {
              return new jl(Ve(Fl), window, Ve(Tt));
            },
          })),
          Nl),
        jl = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.document = t),
              (this.window = n),
              (this.errorHandler = r),
              (this.offset = function () {
                return [0, 0];
              });
          }
          return (
            _createClass(e, [
              {
                key: 'setOffset',
                value: function (e) {
                  this.offset = Array.isArray(e)
                    ? function () {
                        return e;
                      }
                    : e;
                },
              },
              {
                key: 'getScrollPosition',
                value: function () {
                  return this.supportScrollRestoration()
                    ? [this.window.scrollX, this.window.scrollY]
                    : [0, 0];
                },
              },
              {
                key: 'scrollToPosition',
                value: function (e) {
                  this.supportScrollRestoration() && this.window.scrollTo(e[0], e[1]);
                },
              },
              {
                key: 'scrollToAnchor',
                value: function (e) {
                  if (this.supportScrollRestoration()) {
                    e =
                      this.window.CSS && this.window.CSS.escape
                        ? this.window.CSS.escape(e)
                        : e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
                    try {
                      var t = this.document.querySelector('#' + e);
                      if (t) return void this.scrollToElement(t);
                      var n = this.document.querySelector("[name='".concat(e, "']"));
                      if (n) return void this.scrollToElement(n);
                    } catch (r) {
                      this.errorHandler.handleError(r);
                    }
                  }
                },
              },
              {
                key: 'setHistoryScrollRestoration',
                value: function (e) {
                  if (this.supportScrollRestoration()) {
                    var t = this.window.history;
                    t && t.scrollRestoration && (t.scrollRestoration = e);
                  }
                },
              },
              {
                key: 'scrollToElement',
                value: function (e) {
                  var t = e.getBoundingClientRect(),
                    n = t.left + this.window.pageXOffset,
                    r = t.top + this.window.pageYOffset,
                    i = this.offset();
                  this.window.scrollTo(n - i[0], r - i[1]);
                },
              },
              {
                key: 'supportScrollRestoration',
                value: function () {
                  try {
                    return !!this.window && !!this.window.scrollTo;
                  } catch (e) {
                    return !1;
                  }
                },
              },
            ]),
            e
          );
        })(),
        Hl = new w(function (e) {
          return e.complete();
        });
      function zl(e) {
        return e
          ? (function (e) {
              return new w(function (t) {
                return e.schedule(function () {
                  return t.complete();
                });
              });
            })(e)
          : Hl;
      }
      function Bl(e) {
        var t = new w(function (t) {
          t.next(e), t.complete();
        });
        return (t._isScalar = !0), (t.value = e), t;
      }
      function ql() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var r = t[t.length - 1];
        switch ((O(r) ? t.pop() : (r = void 0), t.length)) {
          case 0:
            return zl(r);
          case 1:
            return r ? W(t, r) : Bl(t[0]);
          default:
            return W(t, r);
        }
      }
      var Gl = (function (e) {
        _inherits(n, e);
        var t = _createSuper(n);
        function n(e) {
          var r;
          return _classCallCheck(this, n), ((r = t.call(this))._value = e), r;
        }
        return (
          _createClass(n, [
            {
              key: '_subscribe',
              value: function (e) {
                var t = _get(_getPrototypeOf(n.prototype), '_subscribe', this).call(this, e);
                return t && !t.closed && e.next(this._value), t;
              },
            },
            {
              key: 'getValue',
              value: function () {
                if (this.hasError) throw this.thrownError;
                if (this.closed) throw new T();
                return this._value;
              },
            },
            {
              key: 'next',
              value: function (e) {
                _get(_getPrototypeOf(n.prototype), 'next', this).call(this, (this._value = e));
              },
            },
            {
              key: 'value',
              get: function () {
                return this.getValue();
              },
            },
          ]),
          n
        );
      })(R);
      function $l() {
        return (
          Error.call(this),
          (this.message = 'no elements in sequence'),
          (this.name = 'EmptyError'),
          this
        );
      }
      $l.prototype = Object.create(Error.prototype);
      var Wl = $l,
        Zl = {},
        Kl = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.resultSelector = t);
          }
          return (
            _createClass(e, [
              {
                key: 'call',
                value: function (e, t) {
                  return t.subscribe(new Ql(e, this.resultSelector));
                },
              },
            ]),
            e
          );
        })(),
        Ql = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this, e)).resultSelector = r),
              (i.active = 0),
              (i.values = []),
              (i.observables = []),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: '_next',
                value: function (e) {
                  this.values.push(Zl), this.observables.push(e);
                },
              },
              {
                key: '_complete',
                value: function () {
                  var e = this.observables,
                    t = e.length;
                  if (0 === t) this.destination.complete();
                  else {
                    (this.active = t), (this.toRespond = t);
                    for (var n = 0; n < t; n++) {
                      var r = e[n];
                      this.add(z(this, r, r, n));
                    }
                  }
                },
              },
              {
                key: 'notifyComplete',
                value: function (e) {
                  0 == (this.active -= 1) && this.destination.complete();
                },
              },
              {
                key: 'notifyNext',
                value: function (e, t, n, r, i) {
                  var a = this.values,
                    o = this.toRespond ? (a[n] === Zl ? --this.toRespond : this.toRespond) : 0;
                  (a[n] = t),
                    0 === o &&
                      (this.resultSelector
                        ? this._tryResultSelector(a)
                        : this.destination.next(a.slice()));
                },
              },
              {
                key: '_tryResultSelector',
                value: function (e) {
                  var t;
                  try {
                    t = this.resultSelector.apply(this, e);
                  } catch (n) {
                    return void this.destination.error(n);
                  }
                  this.destination.next(t);
                },
              },
            ]),
            n
          );
        })(B);
      function Yl(e) {
        return new w(function (t) {
          var n;
          try {
            n = e();
          } catch (r) {
            return void t.error(r);
          }
          return (n ? Z(n) : zl()).subscribe(t);
        });
      }
      function Jl() {
        return X(1);
      }
      function Xl(e, t) {
        return function (n) {
          return n.lift(new eu(e, t));
        };
      }
      var eu = (function () {
          function e(t, n) {
            _classCallCheck(this, e), (this.predicate = t), (this.thisArg = n);
          }
          return (
            _createClass(e, [
              {
                key: 'call',
                value: function (e, t) {
                  return t.subscribe(new tu(e, this.predicate, this.thisArg));
                },
              },
            ]),
            e
          );
        })(),
        tu = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return (
              _classCallCheck(this, n),
              ((a = t.call(this, e)).predicate = r),
              (a.thisArg = i),
              (a.count = 0),
              a
            );
          }
          return (
            _createClass(n, [
              {
                key: '_next',
                value: function (e) {
                  var t;
                  try {
                    t = this.predicate.call(this.thisArg, e, this.count++);
                  } catch (n) {
                    return void this.destination.error(n);
                  }
                  t && this.destination.next(e);
                },
              },
            ]),
            n
          );
        })(g);
      function nu() {
        return (
          Error.call(this),
          (this.message = 'argument out of range'),
          (this.name = 'ArgumentOutOfRangeError'),
          this
        );
      }
      nu.prototype = Object.create(Error.prototype);
      var ru = nu;
      function iu(e) {
        return function (t) {
          return 0 === e ? zl() : t.lift(new au(e));
        };
      }
      var au = (function () {
          function e(t) {
            if ((_classCallCheck(this, e), (this.total = t), this.total < 0)) throw new ru();
          }
          return (
            _createClass(e, [
              {
                key: 'call',
                value: function (e, t) {
                  return t.subscribe(new ou(e, this.total));
                },
              },
            ]),
            e
          );
        })(),
        ou = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this, e)).total = r),
              (i.ring = new Array()),
              (i.count = 0),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: '_next',
                value: function (e) {
                  var t = this.ring,
                    n = this.total,
                    r = this.count++;
                  t.length < n ? t.push(e) : (t[r % n] = e);
                },
              },
              {
                key: '_complete',
                value: function () {
                  var e = this.destination,
                    t = this.count;
                  if (t > 0)
                    for (
                      var n = this.count >= this.total ? this.total : this.count,
                        r = this.ring,
                        i = 0;
                      i < n;
                      i++
                    ) {
                      var a = t++ % n;
                      e.next(r[a]);
                    }
                  e.complete();
                },
              },
            ]),
            n
          );
        })(g);
      function lu(e, t, n) {
        return function (r) {
          return r.lift(new uu(e, t, n));
        };
      }
      var uu = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.nextOrObserver = t),
              (this.error = n),
              (this.complete = r);
          }
          return (
            _createClass(e, [
              {
                key: 'call',
                value: function (e, t) {
                  return t.subscribe(new su(e, this.nextOrObserver, this.error, this.complete));
                },
              },
            ]),
            e
          );
        })(),
        su = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, i, a, o) {
            var l;
            return (
              _classCallCheck(this, n),
              ((l = t.call(this, e))._tapNext = _),
              (l._tapError = _),
              (l._tapComplete = _),
              (l._tapError = a || _),
              (l._tapComplete = o || _),
              r(i)
                ? ((l._context = _assertThisInitialized(l)), (l._tapNext = i))
                : i &&
                  ((l._context = i),
                  (l._tapNext = i.next || _),
                  (l._tapError = i.error || _),
                  (l._tapComplete = i.complete || _)),
              l
            );
          }
          return (
            _createClass(n, [
              {
                key: '_next',
                value: function (e) {
                  try {
                    this._tapNext.call(this._context, e);
                  } catch (t) {
                    return void this.destination.error(t);
                  }
                  this.destination.next(e);
                },
              },
              {
                key: '_error',
                value: function (e) {
                  try {
                    this._tapError.call(this._context, e);
                  } catch (e) {
                    return void this.destination.error(e);
                  }
                  this.destination.error(e);
                },
              },
              {
                key: '_complete',
                value: function () {
                  try {
                    this._tapComplete.call(this._context);
                  } catch (e) {
                    return void this.destination.error(e);
                  }
                  return this.destination.complete();
                },
              },
            ]),
            n
          );
        })(g),
        cu = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hu;
          return lu({
            hasValue: !1,
            next: function () {
              this.hasValue = !0;
            },
            complete: function () {
              if (!this.hasValue) throw e();
            },
          });
        };
      function hu() {
        return new Wl();
      }
      function du() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return function (t) {
          return t.lift(new fu(e));
        };
      }
      var fu = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.defaultValue = t);
          }
          return (
            _createClass(e, [
              {
                key: 'call',
                value: function (e, t) {
                  return t.subscribe(new pu(e, this.defaultValue));
                },
              },
            ]),
            e
          );
        })(),
        pu = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this, e)).defaultValue = r),
              (i.isEmpty = !0),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: '_next',
                value: function (e) {
                  (this.isEmpty = !1), this.destination.next(e);
                },
              },
              {
                key: '_complete',
                value: function () {
                  this.isEmpty && this.destination.next(this.defaultValue),
                    this.destination.complete();
                },
              },
            ]),
            n
          );
        })(g);
      function vu(e, t) {
        var n = arguments.length >= 2;
        return function (r) {
          return r.pipe(
            e
              ? Xl(function (t, n) {
                  return e(t, n, r);
                })
              : J,
            iu(1),
            n
              ? du(t)
              : cu(function () {
                  return new Wl();
                })
          );
        };
      }
      function gu(e) {
        return function (t) {
          var n = new mu(e),
            r = t.lift(n);
          return (n.caught = r);
        };
      }
      var mu = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.selector = t);
          }
          return (
            _createClass(e, [
              {
                key: 'call',
                value: function (e, t) {
                  return t.subscribe(new yu(e, this.selector, this.caught));
                },
              },
            ]),
            e
          );
        })(),
        yu = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return (
              _classCallCheck(this, n), ((a = t.call(this, e)).selector = r), (a.caught = i), a
            );
          }
          return (
            _createClass(n, [
              {
                key: 'error',
                value: function (e) {
                  if (!this.isStopped) {
                    var t;
                    try {
                      t = this.selector(e, this.caught);
                    } catch (i) {
                      return void _get(_getPrototypeOf(n.prototype), 'error', this).call(this, i);
                    }
                    this._unsubscribeAndRecycle();
                    var r = new D(this, void 0, void 0);
                    this.add(r), z(this, t, void 0, void 0, r);
                  }
                },
              },
            ]),
            n
          );
        })(B);
      function _u(e) {
        return function (t) {
          return 0 === e ? zl() : t.lift(new Cu(e));
        };
      }
      var Cu = (function () {
          function e(t) {
            if ((_classCallCheck(this, e), (this.total = t), this.total < 0)) throw new ru();
          }
          return (
            _createClass(e, [
              {
                key: 'call',
                value: function (e, t) {
                  return t.subscribe(new ku(e, this.total));
                },
              },
            ]),
            e
          );
        })(),
        ku = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return _classCallCheck(this, n), ((i = t.call(this, e)).total = r), (i.count = 0), i;
          }
          return (
            _createClass(n, [
              {
                key: '_next',
                value: function (e) {
                  var t = this.total,
                    n = ++this.count;
                  n <= t &&
                    (this.destination.next(e),
                    n === t && (this.destination.complete(), this.unsubscribe()));
                },
              },
            ]),
            n
          );
        })(g);
      function bu(e, t) {
        var n = arguments.length >= 2;
        return function (r) {
          return r.pipe(
            e
              ? Xl(function (t, n) {
                  return e(t, n, r);
                })
              : J,
            _u(1),
            n
              ? du(t)
              : cu(function () {
                  return new Wl();
                })
          );
        };
      }
      var wu = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e), (this.predicate = t), (this.thisArg = n), (this.source = r);
          }
          return (
            _createClass(e, [
              {
                key: 'call',
                value: function (e, t) {
                  return t.subscribe(new xu(e, this.predicate, this.thisArg, this.source));
                },
              },
            ]),
            e
          );
        })(),
        xu = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a) {
            var o;
            return (
              _classCallCheck(this, n),
              ((o = t.call(this, e)).predicate = r),
              (o.thisArg = i),
              (o.source = a),
              (o.index = 0),
              (o.thisArg = i || _assertThisInitialized(o)),
              o
            );
          }
          return (
            _createClass(n, [
              {
                key: 'notifyComplete',
                value: function (e) {
                  this.destination.next(e), this.destination.complete();
                },
              },
              {
                key: '_next',
                value: function (e) {
                  var t = !1;
                  try {
                    t = this.predicate.call(this.thisArg, e, this.index++, this.source);
                  } catch (n) {
                    return void this.destination.error(n);
                  }
                  t || this.notifyComplete(!1);
                },
              },
              {
                key: '_complete',
                value: function () {
                  this.notifyComplete(!0);
                },
              },
            ]),
            n
          );
        })(g);
      function Su(e, t) {
        return 'function' == typeof t
          ? function (n) {
              return n.pipe(
                Su(function (n, r) {
                  return Z(e(n, r)).pipe(
                    q(function (e, i) {
                      return t(n, e, r, i);
                    })
                  );
                })
              );
            }
          : function (t) {
              return t.lift(new Eu(e));
            };
      }
      var Eu = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.project = t);
          }
          return (
            _createClass(e, [
              {
                key: 'call',
                value: function (e, t) {
                  return t.subscribe(new Tu(e, this.project));
                },
              },
            ]),
            e
          );
        })(),
        Tu = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return _classCallCheck(this, n), ((i = t.call(this, e)).project = r), (i.index = 0), i;
          }
          return (
            _createClass(n, [
              {
                key: '_next',
                value: function (e) {
                  var t,
                    n = this.index++;
                  try {
                    t = this.project(e, n);
                  } catch (r) {
                    return void this.destination.error(r);
                  }
                  this._innerSub(t, e, n);
                },
              },
              {
                key: '_innerSub',
                value: function (e, t, n) {
                  var r = this.innerSubscription;
                  r && r.unsubscribe();
                  var i = new D(this, void 0, void 0);
                  this.destination.add(i), (this.innerSubscription = z(this, e, t, n, i));
                },
              },
              {
                key: '_complete',
                value: function () {
                  var e = this.innerSubscription;
                  (e && !e.closed) ||
                    _get(_getPrototypeOf(n.prototype), '_complete', this).call(this),
                    this.unsubscribe();
                },
              },
              {
                key: '_unsubscribe',
                value: function () {
                  this.innerSubscription = null;
                },
              },
              {
                key: 'notifyComplete',
                value: function (e) {
                  this.destination.remove(e),
                    (this.innerSubscription = null),
                    this.isStopped &&
                      _get(_getPrototypeOf(n.prototype), '_complete', this).call(this);
                },
              },
              {
                key: 'notifyNext',
                value: function (e, t, n, r, i) {
                  this.destination.next(t);
                },
              },
            ]),
            n
          );
        })(B);
      function Pu(e, t) {
        var n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new Au(e, t, n));
          }
        );
      }
      var Au = (function () {
          function e(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            _classCallCheck(this, e), (this.accumulator = t), (this.seed = n), (this.hasSeed = r);
          }
          return (
            _createClass(e, [
              {
                key: 'call',
                value: function (e, t) {
                  return t.subscribe(new Ru(e, this.accumulator, this.seed, this.hasSeed));
                },
              },
            ]),
            e
          );
        })(),
        Ru = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a) {
            var o;
            return (
              _classCallCheck(this, n),
              ((o = t.call(this, e)).accumulator = r),
              (o._seed = i),
              (o.hasSeed = a),
              (o.index = 0),
              o
            );
          }
          return (
            _createClass(n, [
              {
                key: '_next',
                value: function (e) {
                  if (this.hasSeed) return this._tryNext(e);
                  (this.seed = e), this.destination.next(e);
                },
              },
              {
                key: '_tryNext',
                value: function (e) {
                  var t,
                    n = this.index++;
                  try {
                    t = this.accumulator(this.seed, e, n);
                  } catch (r) {
                    this.destination.error(r);
                  }
                  (this.seed = t), this.destination.next(t);
                },
              },
              {
                key: 'seed',
                get: function () {
                  return this._seed;
                },
                set: function (e) {
                  (this.hasSeed = !0), (this._seed = e);
                },
              },
            ]),
            n
          );
        })(g);
      function Iu(e, t) {
        return K(e, t, 1);
      }
      var Ou = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.callback = t);
          }
          return (
            _createClass(e, [
              {
                key: 'call',
                value: function (e, t) {
                  return t.subscribe(new Du(e, this.callback));
                },
              },
            ]),
            e
          );
        })(),
        Du = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return _classCallCheck(this, n), (i = t.call(this, e)).add(new f(r)), i;
          }
          return n;
        })(g),
        Vu = null;
      function Mu() {
        return Vu;
      }
      var Nu,
        Lu = {
          class: 'className',
          innerHtml: 'innerHTML',
          readonly: 'readOnly',
          tabindex: 'tabIndex',
        },
        Fu = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS',
        },
        Uu = {
          A: '1',
          B: '2',
          C: '3',
          D: '4',
          E: '5',
          F: '6',
          G: '7',
          H: '8',
          I: '9',
          J: '*',
          K: '+',
          M: '-',
          N: '.',
          O: '/',
          '`': '0',
          '\x90': 'NumLock',
        },
        ju = (function () {
          if (Ee.Node)
            return (
              Ee.Node.prototype.contains ||
              function (e) {
                return !!(16 & this.compareDocumentPosition(e));
              }
            );
        })(),
        Hu = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n() {
            return _classCallCheck(this, n), t.apply(this, arguments);
          }
          return (
            _createClass(
              n,
              [
                {
                  key: 'parse',
                  value: function (e) {
                    throw new Error('parse not implemented');
                  },
                },
                {
                  key: 'hasProperty',
                  value: function (e, t) {
                    return t in e;
                  },
                },
                {
                  key: 'setProperty',
                  value: function (e, t, n) {
                    e[t] = n;
                  },
                },
                {
                  key: 'getProperty',
                  value: function (e, t) {
                    return e[t];
                  },
                },
                {
                  key: 'invoke',
                  value: function (e, t, n) {
                    e[t].apply(e, _toConsumableArray(n));
                  },
                },
                {
                  key: 'logError',
                  value: function (e) {
                    window.console && (console.error ? console.error(e) : console.log(e));
                  },
                },
                {
                  key: 'log',
                  value: function (e) {
                    window.console && window.console.log && window.console.log(e);
                  },
                },
                {
                  key: 'logGroup',
                  value: function (e) {
                    window.console && window.console.group && window.console.group(e);
                  },
                },
                {
                  key: 'logGroupEnd',
                  value: function () {
                    window.console && window.console.groupEnd && window.console.groupEnd();
                  },
                },
                {
                  key: 'contains',
                  value: function (e, t) {
                    return ju.call(e, t);
                  },
                },
                {
                  key: 'querySelector',
                  value: function (e, t) {
                    return e.querySelector(t);
                  },
                },
                {
                  key: 'querySelectorAll',
                  value: function (e, t) {
                    return e.querySelectorAll(t);
                  },
                },
                {
                  key: 'on',
                  value: function (e, t, n) {
                    e.addEventListener(t, n, !1);
                  },
                },
                {
                  key: 'onAndCancel',
                  value: function (e, t, n) {
                    return (
                      e.addEventListener(t, n, !1),
                      function () {
                        e.removeEventListener(t, n, !1);
                      }
                    );
                  },
                },
                {
                  key: 'dispatchEvent',
                  value: function (e, t) {
                    e.dispatchEvent(t);
                  },
                },
                {
                  key: 'createMouseEvent',
                  value: function (e) {
                    var t = this.getDefaultDocument().createEvent('MouseEvent');
                    return t.initEvent(e, !0, !0), t;
                  },
                },
                {
                  key: 'createEvent',
                  value: function (e) {
                    var t = this.getDefaultDocument().createEvent('Event');
                    return t.initEvent(e, !0, !0), t;
                  },
                },
                {
                  key: 'preventDefault',
                  value: function (e) {
                    e.preventDefault(), (e.returnValue = !1);
                  },
                },
                {
                  key: 'isPrevented',
                  value: function (e) {
                    return e.defaultPrevented || (null != e.returnValue && !e.returnValue);
                  },
                },
                {
                  key: 'getInnerHTML',
                  value: function (e) {
                    return e.innerHTML;
                  },
                },
                {
                  key: 'getTemplateContent',
                  value: function (e) {
                    return 'content' in e && this.isTemplateElement(e) ? e.content : null;
                  },
                },
                {
                  key: 'getOuterHTML',
                  value: function (e) {
                    return e.outerHTML;
                  },
                },
                {
                  key: 'nodeName',
                  value: function (e) {
                    return e.nodeName;
                  },
                },
                {
                  key: 'nodeValue',
                  value: function (e) {
                    return e.nodeValue;
                  },
                },
                {
                  key: 'type',
                  value: function (e) {
                    return e.type;
                  },
                },
                {
                  key: 'content',
                  value: function (e) {
                    return this.hasProperty(e, 'content') ? e.content : e;
                  },
                },
                {
                  key: 'firstChild',
                  value: function (e) {
                    return e.firstChild;
                  },
                },
                {
                  key: 'nextSibling',
                  value: function (e) {
                    return e.nextSibling;
                  },
                },
                {
                  key: 'parentElement',
                  value: function (e) {
                    return e.parentNode;
                  },
                },
                {
                  key: 'childNodes',
                  value: function (e) {
                    return e.childNodes;
                  },
                },
                {
                  key: 'childNodesAsList',
                  value: function (e) {
                    for (var t = e.childNodes, n = new Array(t.length), r = 0; r < t.length; r++)
                      n[r] = t[r];
                    return n;
                  },
                },
                {
                  key: 'clearNodes',
                  value: function (e) {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                  },
                },
                {
                  key: 'appendChild',
                  value: function (e, t) {
                    e.appendChild(t);
                  },
                },
                {
                  key: 'removeChild',
                  value: function (e, t) {
                    e.removeChild(t);
                  },
                },
                {
                  key: 'replaceChild',
                  value: function (e, t, n) {
                    e.replaceChild(t, n);
                  },
                },
                {
                  key: 'remove',
                  value: function (e) {
                    return e.parentNode && e.parentNode.removeChild(e), e;
                  },
                },
                {
                  key: 'insertBefore',
                  value: function (e, t, n) {
                    e.insertBefore(n, t);
                  },
                },
                {
                  key: 'insertAllBefore',
                  value: function (e, t, n) {
                    n.forEach(function (n) {
                      return e.insertBefore(n, t);
                    });
                  },
                },
                {
                  key: 'insertAfter',
                  value: function (e, t, n) {
                    e.insertBefore(n, t.nextSibling);
                  },
                },
                {
                  key: 'setInnerHTML',
                  value: function (e, t) {
                    e.innerHTML = t;
                  },
                },
                {
                  key: 'getText',
                  value: function (e) {
                    return e.textContent;
                  },
                },
                {
                  key: 'setText',
                  value: function (e, t) {
                    e.textContent = t;
                  },
                },
                {
                  key: 'getValue',
                  value: function (e) {
                    return e.value;
                  },
                },
                {
                  key: 'setValue',
                  value: function (e, t) {
                    e.value = t;
                  },
                },
                {
                  key: 'getChecked',
                  value: function (e) {
                    return e.checked;
                  },
                },
                {
                  key: 'setChecked',
                  value: function (e, t) {
                    e.checked = t;
                  },
                },
                {
                  key: 'createComment',
                  value: function (e) {
                    return this.getDefaultDocument().createComment(e);
                  },
                },
                {
                  key: 'createTemplate',
                  value: function (e) {
                    var t = this.getDefaultDocument().createElement('template');
                    return (t.innerHTML = e), t;
                  },
                },
                {
                  key: 'createElement',
                  value: function (e, t) {
                    return (t = t || this.getDefaultDocument()).createElement(e);
                  },
                },
                {
                  key: 'createElementNS',
                  value: function (e, t, n) {
                    return (n = n || this.getDefaultDocument()).createElementNS(e, t);
                  },
                },
                {
                  key: 'createTextNode',
                  value: function (e, t) {
                    return (t = t || this.getDefaultDocument()).createTextNode(e);
                  },
                },
                {
                  key: 'createScriptTag',
                  value: function (e, t, n) {
                    var r = (n = n || this.getDefaultDocument()).createElement('SCRIPT');
                    return r.setAttribute(e, t), r;
                  },
                },
                {
                  key: 'createStyleElement',
                  value: function (e, t) {
                    var n = (t = t || this.getDefaultDocument()).createElement('style');
                    return this.appendChild(n, this.createTextNode(e, t)), n;
                  },
                },
                {
                  key: 'createShadowRoot',
                  value: function (e) {
                    return e.createShadowRoot();
                  },
                },
                {
                  key: 'getShadowRoot',
                  value: function (e) {
                    return e.shadowRoot;
                  },
                },
                {
                  key: 'getHost',
                  value: function (e) {
                    return e.host;
                  },
                },
                {
                  key: 'clone',
                  value: function (e) {
                    return e.cloneNode(!0);
                  },
                },
                {
                  key: 'getElementsByClassName',
                  value: function (e, t) {
                    return e.getElementsByClassName(t);
                  },
                },
                {
                  key: 'getElementsByTagName',
                  value: function (e, t) {
                    return e.getElementsByTagName(t);
                  },
                },
                {
                  key: 'classList',
                  value: function (e) {
                    return Array.prototype.slice.call(e.classList, 0);
                  },
                },
                {
                  key: 'addClass',
                  value: function (e, t) {
                    e.classList.add(t);
                  },
                },
                {
                  key: 'removeClass',
                  value: function (e, t) {
                    e.classList.remove(t);
                  },
                },
                {
                  key: 'hasClass',
                  value: function (e, t) {
                    return e.classList.contains(t);
                  },
                },
                {
                  key: 'setStyle',
                  value: function (e, t, n) {
                    e.style[t] = n;
                  },
                },
                {
                  key: 'removeStyle',
                  value: function (e, t) {
                    e.style[t] = '';
                  },
                },
                {
                  key: 'getStyle',
                  value: function (e, t) {
                    return e.style[t];
                  },
                },
                {
                  key: 'hasStyle',
                  value: function (e, t, n) {
                    var r = this.getStyle(e, t) || '';
                    return n ? r == n : r.length > 0;
                  },
                },
                {
                  key: 'tagName',
                  value: function (e) {
                    return e.tagName;
                  },
                },
                {
                  key: 'attributeMap',
                  value: function (e) {
                    for (var t = new Map(), n = e.attributes, r = 0; r < n.length; r++) {
                      var i = n.item(r);
                      t.set(i.name, i.value);
                    }
                    return t;
                  },
                },
                {
                  key: 'hasAttribute',
                  value: function (e, t) {
                    return e.hasAttribute(t);
                  },
                },
                {
                  key: 'hasAttributeNS',
                  value: function (e, t, n) {
                    return e.hasAttributeNS(t, n);
                  },
                },
                {
                  key: 'getAttribute',
                  value: function (e, t) {
                    return e.getAttribute(t);
                  },
                },
                {
                  key: 'getAttributeNS',
                  value: function (e, t, n) {
                    return e.getAttributeNS(t, n);
                  },
                },
                {
                  key: 'setAttribute',
                  value: function (e, t, n) {
                    e.setAttribute(t, n);
                  },
                },
                {
                  key: 'setAttributeNS',
                  value: function (e, t, n, r) {
                    e.setAttributeNS(t, n, r);
                  },
                },
                {
                  key: 'removeAttribute',
                  value: function (e, t) {
                    e.removeAttribute(t);
                  },
                },
                {
                  key: 'removeAttributeNS',
                  value: function (e, t, n) {
                    e.removeAttributeNS(t, n);
                  },
                },
                {
                  key: 'templateAwareRoot',
                  value: function (e) {
                    return this.isTemplateElement(e) ? this.content(e) : e;
                  },
                },
                {
                  key: 'createHtmlDocument',
                  value: function () {
                    return document.implementation.createHTMLDocument('fakeTitle');
                  },
                },
                {
                  key: 'getDefaultDocument',
                  value: function () {
                    return document;
                  },
                },
                {
                  key: 'getBoundingClientRect',
                  value: function (e) {
                    try {
                      return e.getBoundingClientRect();
                    } catch (t) {
                      return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
                    }
                  },
                },
                {
                  key: 'getTitle',
                  value: function (e) {
                    return e.title;
                  },
                },
                {
                  key: 'setTitle',
                  value: function (e, t) {
                    e.title = t || '';
                  },
                },
                {
                  key: 'elementMatches',
                  value: function (e, t) {
                    return (
                      !!this.isElementNode(e) &&
                      ((e.matches && e.matches(t)) ||
                        (e.msMatchesSelector && e.msMatchesSelector(t)) ||
                        (e.webkitMatchesSelector && e.webkitMatchesSelector(t)))
                    );
                  },
                },
                {
                  key: 'isTemplateElement',
                  value: function (e) {
                    return this.isElementNode(e) && 'TEMPLATE' === e.nodeName;
                  },
                },
                {
                  key: 'isTextNode',
                  value: function (e) {
                    return e.nodeType === Node.TEXT_NODE;
                  },
                },
                {
                  key: 'isCommentNode',
                  value: function (e) {
                    return e.nodeType === Node.COMMENT_NODE;
                  },
                },
                {
                  key: 'isElementNode',
                  value: function (e) {
                    return e.nodeType === Node.ELEMENT_NODE;
                  },
                },
                {
                  key: 'hasShadowRoot',
                  value: function (e) {
                    return null != e.shadowRoot && e instanceof HTMLElement;
                  },
                },
                {
                  key: 'isShadowRoot',
                  value: function (e) {
                    return e instanceof DocumentFragment;
                  },
                },
                {
                  key: 'importIntoDoc',
                  value: function (e) {
                    return document.importNode(this.templateAwareRoot(e), !0);
                  },
                },
                {
                  key: 'adoptNode',
                  value: function (e) {
                    return document.adoptNode(e);
                  },
                },
                {
                  key: 'getHref',
                  value: function (e) {
                    return e.getAttribute('href');
                  },
                },
                {
                  key: 'getEventKey',
                  value: function (e) {
                    var t = e.key;
                    if (null == t) {
                      if (null == (t = e.keyIdentifier)) return 'Unidentified';
                      t.startsWith('U+') &&
                        ((t = String.fromCharCode(parseInt(t.substring(2), 16))),
                        3 === e.location && Uu.hasOwnProperty(t) && (t = Uu[t]));
                    }
                    return Fu[t] || t;
                  },
                },
                {
                  key: 'getGlobalEventTarget',
                  value: function (e, t) {
                    return 'window' === t
                      ? window
                      : 'document' === t
                      ? e
                      : 'body' === t
                      ? e.body
                      : null;
                  },
                },
                {
                  key: 'getHistory',
                  value: function () {
                    return window.history;
                  },
                },
                {
                  key: 'getLocation',
                  value: function () {
                    return window.location;
                  },
                },
                {
                  key: 'getBaseHref',
                  value: function (e) {
                    var t,
                      n =
                        zu || (zu = document.querySelector('base'))
                          ? zu.getAttribute('href')
                          : null;
                    return null == n
                      ? null
                      : ((t = n),
                        Nu || (Nu = document.createElement('a')),
                        Nu.setAttribute('href', t),
                        '/' === Nu.pathname.charAt(0) ? Nu.pathname : '/' + Nu.pathname);
                  },
                },
                {
                  key: 'resetBaseElement',
                  value: function () {
                    zu = null;
                  },
                },
                {
                  key: 'getUserAgent',
                  value: function () {
                    return window.navigator.userAgent;
                  },
                },
                {
                  key: 'setData',
                  value: function (e, t, n) {
                    this.setAttribute(e, 'data-' + t, n);
                  },
                },
                {
                  key: 'getData',
                  value: function (e, t) {
                    return this.getAttribute(e, 'data-' + t);
                  },
                },
                {
                  key: 'getComputedStyle',
                  value: (function (e) {
                    function t(t) {
                      return e.apply(this, arguments);
                    }
                    return (
                      (t.toString = function () {
                        return e.toString();
                      }),
                      t
                    );
                  })(function (e) {
                    return getComputedStyle(e);
                  }),
                },
                {
                  key: 'supportsWebAnimation',
                  value: function () {
                    return 'function' == typeof Element.prototype.animate;
                  },
                },
                {
                  key: 'performanceNow',
                  value: function () {
                    return window.performance && window.performance.now
                      ? window.performance.now()
                      : new Date().getTime();
                  },
                },
                {
                  key: 'supportsCookies',
                  value: function () {
                    return !0;
                  },
                },
                {
                  key: 'getCookie',
                  value: function (e) {
                    return (function (e, t) {
                      t = encodeURIComponent(t);
                      var n,
                        r = _createForOfIteratorHelper(e.split(';'));
                      try {
                        for (r.s(); !(n = r.n()).done; ) {
                          var i = n.value,
                            a = i.indexOf('='),
                            o = _slicedToArray(
                              -1 == a ? [i, ''] : [i.slice(0, a), i.slice(a + 1)],
                              2
                            ),
                            l = o[0],
                            u = o[1];
                          if (l.trim() === t) return decodeURIComponent(u);
                        }
                      } catch (s) {
                        r.e(s);
                      } finally {
                        r.f();
                      }
                      return null;
                    })(document.cookie, e);
                  },
                },
                {
                  key: 'setCookie',
                  value: function (e, t) {
                    document.cookie = encodeURIComponent(e) + '=' + encodeURIComponent(t);
                  },
                },
                {
                  key: 'attrToPropMap',
                  get: function () {
                    return Lu;
                  },
                },
              ],
              [
                {
                  key: 'makeCurrent',
                  value: function () {
                    var e;
                    (e = new n()), Vu || (Vu = e);
                  },
                },
              ]
            ),
            n
          );
        })(
          (function (e) {
            _inherits(n, e);
            var t = _createSuper(n);
            function n() {
              var e;
              _classCallCheck(this, n),
                ((e = t.call(this))._animationPrefix = null),
                (e._transitionEnd = null);
              try {
                var r = e.createElement('div', document);
                if (null != e.getStyle(r, 'animationName')) e._animationPrefix = '';
                else
                  for (var i = ['Webkit', 'Moz', 'O', 'ms'], a = 0; a < i.length; a++)
                    if (null != e.getStyle(r, i[a] + 'AnimationName')) {
                      e._animationPrefix = '-' + i[a].toLowerCase() + '-';
                      break;
                    }
                var o = {
                  WebkitTransition: 'webkitTransitionEnd',
                  MozTransition: 'transitionend',
                  OTransition: 'oTransitionEnd otransitionend',
                  transition: 'transitionend',
                };
                Object.keys(o).forEach(function (t) {
                  null != e.getStyle(r, t) && (e._transitionEnd = o[t]);
                });
              } catch (l) {
                (e._animationPrefix = null), (e._transitionEnd = null);
              }
              return e;
            }
            return (
              _createClass(n, [
                {
                  key: 'getDistributedNodes',
                  value: function (e) {
                    return e.getDistributedNodes();
                  },
                },
                {
                  key: 'resolveAndSetHref',
                  value: function (e, t, n) {
                    e.href = null == n ? t : t + '/../' + n;
                  },
                },
                {
                  key: 'supportsDOMEvents',
                  value: function () {
                    return !0;
                  },
                },
                {
                  key: 'supportsNativeShadowDOM',
                  value: function () {
                    return 'function' == typeof document.body.createShadowRoot;
                  },
                },
                {
                  key: 'getAnimationPrefix',
                  value: function () {
                    return this._animationPrefix ? this._animationPrefix : '';
                  },
                },
                {
                  key: 'getTransitionEnd',
                  value: function () {
                    return this._transitionEnd ? this._transitionEnd : '';
                  },
                },
                {
                  key: 'supportsAnimation',
                  value: function () {
                    return null != this._animationPrefix && null != this._transitionEnd;
                  },
                },
              ]),
              n
            );
          })(
            (function () {
              function e() {
                _classCallCheck(this, e), (this.resourceLoaderType = null);
              }
              return (
                _createClass(e, [
                  {
                    key: 'attrToPropMap',
                    get: function () {
                      return this._attrToPropMap;
                    },
                    set: function (e) {
                      this._attrToPropMap = e;
                    },
                  },
                ]),
                e
              );
            })()
          )
        ),
        zu = null;
      function Bu() {
        return !!window.history.pushState;
      }
      var qu = new Te('TRANSITION_ID'),
        Gu = [
          {
            provide: ki,
            useFactory: function (e, t, n) {
              return function () {
                n.get(bi).donePromise.then(function () {
                  var n = Mu();
                  Array.prototype.slice
                    .apply(n.querySelectorAll(t, 'style[ng-transition]'))
                    .filter(function (t) {
                      return n.getAttribute(t, 'ng-transition') === e;
                    })
                    .forEach(function (e) {
                      return n.remove(e);
                    });
                });
              };
            },
            deps: [qu, Fl, Ue],
            multi: !0,
          },
        ],
        $u = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(
              e,
              [
                {
                  key: 'addToWindow',
                  value: function (e) {
                    (Ee.getAngularTestability = function (t) {
                      var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = e.findTestabilityInTree(t, n);
                      if (null == r) throw new Error('Could not find testability for element.');
                      return r;
                    }),
                      (Ee.getAllAngularTestabilities = function () {
                        return e.getAllTestabilities();
                      }),
                      (Ee.getAllAngularRootElements = function () {
                        return e.getAllRootElements();
                      }),
                      Ee.frameworkStabilizers || (Ee.frameworkStabilizers = []),
                      Ee.frameworkStabilizers.push(function (e) {
                        var t = Ee.getAllAngularTestabilities(),
                          n = t.length,
                          r = !1,
                          i = function (t) {
                            (r = r || t), 0 == --n && e(r);
                          };
                        t.forEach(function (e) {
                          e.whenStable(i);
                        });
                      });
                  },
                },
                {
                  key: 'findTestabilityInTree',
                  value: function (e, t, n) {
                    if (null == t) return null;
                    var r = e.getTestability(t);
                    return null != r
                      ? r
                      : n
                      ? Mu().isShadowRoot(t)
                        ? this.findTestabilityInTree(e, Mu().getHost(t), !0)
                        : this.findTestabilityInTree(e, Mu().parentElement(t), !0)
                      : null;
                  },
                },
              ],
              [
                {
                  key: 'init',
                  value: function () {
                    var t;
                    (t = new e()), (ra = t);
                  },
                },
              ]
            ),
            e
          );
        })();
      function Wu(e, t) {
        ('undefined' != typeof COMPILED && COMPILED) || ((Ee.ng = Ee.ng || {})[e] = t);
      }
      var Zu = { ApplicationRef: ha, NgZone: Wi };
      function Ku(e) {
        return ba(e);
      }
      var Qu = new Te('EventManagerPlugins'),
        Yu = (function () {
          function e(t, n) {
            var r = this;
            _classCallCheck(this, e),
              (this._zone = n),
              (this._eventNameToPlugin = new Map()),
              t.forEach(function (e) {
                return (e.manager = r);
              }),
              (this._plugins = t.slice().reverse());
          }
          return (
            _createClass(e, [
              {
                key: 'addEventListener',
                value: function (e, t, n) {
                  return this._findPluginFor(t).addEventListener(e, t, n);
                },
              },
              {
                key: 'addGlobalEventListener',
                value: function (e, t, n) {
                  return this._findPluginFor(t).addGlobalEventListener(e, t, n);
                },
              },
              {
                key: 'getZone',
                value: function () {
                  return this._zone;
                },
              },
              {
                key: '_findPluginFor',
                value: function (e) {
                  var t = this._eventNameToPlugin.get(e);
                  if (t) return t;
                  for (var n = this._plugins, r = 0; r < n.length; r++) {
                    var i = n[r];
                    if (i.supports(e)) return this._eventNameToPlugin.set(e, i), i;
                  }
                  throw new Error('No event manager plugin found for event ' + e);
                },
              },
            ]),
            e
          );
        })(),
        Ju = (function () {
          function e(t) {
            _classCallCheck(this, e), (this._doc = t);
          }
          return (
            _createClass(e, [
              {
                key: 'addGlobalEventListener',
                value: function (e, t, n) {
                  var r = Mu().getGlobalEventTarget(this._doc, e);
                  if (!r)
                    throw new Error('Unsupported event target '.concat(r, ' for event ').concat(t));
                  return this.addEventListener(r, t, n);
                },
              },
            ]),
            e
          );
        })(),
        Xu = (function () {
          function e() {
            _classCallCheck(this, e), (this._stylesSet = new Set());
          }
          return (
            _createClass(e, [
              {
                key: 'addStyles',
                value: function (e) {
                  var t = this,
                    n = new Set();
                  e.forEach(function (e) {
                    t._stylesSet.has(e) || (t._stylesSet.add(e), n.add(e));
                  }),
                    this.onStylesAdded(n);
                },
              },
              { key: 'onStylesAdded', value: function (e) {} },
              {
                key: 'getAllStyles',
                value: function () {
                  return Array.from(this._stylesSet);
                },
              },
            ]),
            e
          );
        })(),
        es = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e) {
            var r;
            return (
              _classCallCheck(this, n),
              ((r = t.call(this))._doc = e),
              (r._hostNodes = new Set()),
              (r._styleNodes = new Set()),
              r._hostNodes.add(e.head),
              r
            );
          }
          return (
            _createClass(n, [
              {
                key: '_addStylesToHost',
                value: function (e, t) {
                  var n = this;
                  e.forEach(function (e) {
                    var r = n._doc.createElement('style');
                    (r.textContent = e), n._styleNodes.add(t.appendChild(r));
                  });
                },
              },
              {
                key: 'addHost',
                value: function (e) {
                  this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e);
                },
              },
              {
                key: 'removeHost',
                value: function (e) {
                  this._hostNodes.delete(e);
                },
              },
              {
                key: 'onStylesAdded',
                value: function (e) {
                  var t = this;
                  this._hostNodes.forEach(function (n) {
                    return t._addStylesToHost(e, n);
                  });
                },
              },
              {
                key: 'ngOnDestroy',
                value: function () {
                  this._styleNodes.forEach(function (e) {
                    return Mu().remove(e);
                  });
                },
              },
            ]),
            n
          );
        })(Xu),
        ts = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
        },
        ns = /%COMP%/g;
      function rs(e, t, n) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          Array.isArray(i) ? rs(e, i, n) : ((i = i.replace(ns, e)), n.push(i));
        }
        return n;
      }
      function is(e) {
        return function (t) {
          !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
        };
      }
      var as = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.eventManager = t),
              (this.sharedStylesHost = n),
              (this.appId = r),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new os(t));
          }
          return (
            _createClass(e, [
              {
                key: 'createRenderer',
                value: function (e, t) {
                  if (!e || !t) return this.defaultRenderer;
                  switch (t.encapsulation) {
                    case Ze.Emulated:
                      var n = this.rendererByCompId.get(t.id);
                      return (
                        n ||
                          ((n = new ss(this.eventManager, this.sharedStylesHost, t, this.appId)),
                          this.rendererByCompId.set(t.id, n)),
                        n.applyToHost(e),
                        n
                      );
                    case Ze.Native:
                    case Ze.ShadowDom:
                      return new cs(this.eventManager, this.sharedStylesHost, e, t);
                    default:
                      if (!this.rendererByCompId.has(t.id)) {
                        var r = rs(t.id, t.styles, []);
                        this.sharedStylesHost.addStyles(r),
                          this.rendererByCompId.set(t.id, this.defaultRenderer);
                      }
                      return this.defaultRenderer;
                  }
                },
              },
              { key: 'begin', value: function () {} },
              { key: 'end', value: function () {} },
            ]),
            e
          );
        })(),
        os = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.eventManager = t), (this.data = Object.create(null));
          }
          return (
            _createClass(e, [
              { key: 'destroy', value: function () {} },
              {
                key: 'createElement',
                value: function (e, t) {
                  return t ? document.createElementNS(ts[t] || t, e) : document.createElement(e);
                },
              },
              {
                key: 'createComment',
                value: function (e) {
                  return document.createComment(e);
                },
              },
              {
                key: 'createText',
                value: function (e) {
                  return document.createTextNode(e);
                },
              },
              {
                key: 'appendChild',
                value: function (e, t) {
                  e.appendChild(t);
                },
              },
              {
                key: 'insertBefore',
                value: function (e, t, n) {
                  e && e.insertBefore(t, n);
                },
              },
              {
                key: 'removeChild',
                value: function (e, t) {
                  e && e.removeChild(t);
                },
              },
              {
                key: 'selectRootElement',
                value: function (e, t) {
                  var n = 'string' == typeof e ? document.querySelector(e) : e;
                  if (!n)
                    throw new Error('The selector "'.concat(e, '" did not match any elements'));
                  return t || (n.textContent = ''), n;
                },
              },
              {
                key: 'parentNode',
                value: function (e) {
                  return e.parentNode;
                },
              },
              {
                key: 'nextSibling',
                value: function (e) {
                  return e.nextSibling;
                },
              },
              {
                key: 'setAttribute',
                value: function (e, t, n, r) {
                  if (r) {
                    t = r + ':' + t;
                    var i = ts[r];
                    i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n);
                  } else e.setAttribute(t, n);
                },
              },
              {
                key: 'removeAttribute',
                value: function (e, t, n) {
                  if (n) {
                    var r = ts[n];
                    r ? e.removeAttributeNS(r, t) : e.removeAttribute(''.concat(n, ':').concat(t));
                  } else e.removeAttribute(t);
                },
              },
              {
                key: 'addClass',
                value: function (e, t) {
                  e.classList.add(t);
                },
              },
              {
                key: 'removeClass',
                value: function (e, t) {
                  e.classList.remove(t);
                },
              },
              {
                key: 'setStyle',
                value: function (e, t, n, r) {
                  r & Xt.DashCase
                    ? e.style.setProperty(t, n, r & Xt.Important ? 'important' : '')
                    : (e.style[t] = n);
                },
              },
              {
                key: 'removeStyle',
                value: function (e, t, n) {
                  n & Xt.DashCase ? e.style.removeProperty(t) : (e.style[t] = '');
                },
              },
              {
                key: 'setProperty',
                value: function (e, t, n) {
                  us(t, 'property'), (e[t] = n);
                },
              },
              {
                key: 'setValue',
                value: function (e, t) {
                  e.nodeValue = t;
                },
              },
              {
                key: 'listen',
                value: function (e, t, n) {
                  return (
                    us(t, 'listener'),
                    'string' == typeof e
                      ? this.eventManager.addGlobalEventListener(e, t, is(n))
                      : this.eventManager.addEventListener(e, t, is(n))
                  );
                },
              },
            ]),
            e
          );
        })(),
        ls = '@'.charCodeAt(0);
      function us(e, t) {
        if (e.charCodeAt(0) === ls)
          throw new Error(
            'Found the synthetic '
              .concat(t, ' ')
              .concat(
                e,
                '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.'
              )
          );
      }
      var ss = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a) {
            var o;
            _classCallCheck(this, n), ((o = t.call(this, e)).component = i);
            var l,
              u = rs(a + '-' + i.id, i.styles, []);
            return (
              r.addStyles(u),
              (o.contentAttr = '_ngcontent-%COMP%'.replace(ns, a + '-' + i.id)),
              (o.hostAttr = ((l = a + '-' + i.id), '_nghost-%COMP%'.replace(ns, l))),
              o
            );
          }
          return (
            _createClass(n, [
              {
                key: 'applyToHost',
                value: function (e) {
                  _get(_getPrototypeOf(n.prototype), 'setAttribute', this).call(
                    this,
                    e,
                    this.hostAttr,
                    ''
                  );
                },
              },
              {
                key: 'createElement',
                value: function (e, t) {
                  var r = _get(_getPrototypeOf(n.prototype), 'createElement', this).call(
                    this,
                    e,
                    t
                  );
                  return (
                    _get(_getPrototypeOf(n.prototype), 'setAttribute', this).call(
                      this,
                      r,
                      this.contentAttr,
                      ''
                    ),
                    r
                  );
                },
              },
            ]),
            n
          );
        })(os),
        cs = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a) {
            var o;
            _classCallCheck(this, n),
              ((o = t.call(this, e)).sharedStylesHost = r),
              (o.hostEl = i),
              (o.component = a),
              (o.shadowRoot =
                a.encapsulation === Ze.ShadowDom
                  ? i.attachShadow({ mode: 'open' })
                  : i.createShadowRoot()),
              o.sharedStylesHost.addHost(o.shadowRoot);
            for (var l = rs(a.id, a.styles, []), u = 0; u < l.length; u++) {
              var s = document.createElement('style');
              (s.textContent = l[u]), o.shadowRoot.appendChild(s);
            }
            return o;
          }
          return (
            _createClass(n, [
              {
                key: 'nodeOrShadowRoot',
                value: function (e) {
                  return e === this.hostEl ? this.shadowRoot : e;
                },
              },
              {
                key: 'destroy',
                value: function () {
                  this.sharedStylesHost.removeHost(this.shadowRoot);
                },
              },
              {
                key: 'appendChild',
                value: function (e, t) {
                  return _get(_getPrototypeOf(n.prototype), 'appendChild', this).call(
                    this,
                    this.nodeOrShadowRoot(e),
                    t
                  );
                },
              },
              {
                key: 'insertBefore',
                value: function (e, t, r) {
                  return _get(_getPrototypeOf(n.prototype), 'insertBefore', this).call(
                    this,
                    this.nodeOrShadowRoot(e),
                    t,
                    r
                  );
                },
              },
              {
                key: 'removeChild',
                value: function (e, t) {
                  return _get(_getPrototypeOf(n.prototype), 'removeChild', this).call(
                    this,
                    this.nodeOrShadowRoot(e),
                    t
                  );
                },
              },
              {
                key: 'parentNode',
                value: function (e) {
                  return this.nodeOrShadowRoot(
                    _get(_getPrototypeOf(n.prototype), 'parentNode', this).call(
                      this,
                      this.nodeOrShadowRoot(e)
                    )
                  );
                },
              },
            ]),
            n
          );
        })(os),
        hs =
          ('undefined' != typeof Zone && Zone.__symbol__) ||
          function (e) {
            return '__zone_symbol__' + e;
          },
        ds = hs('addEventListener'),
        fs = hs('removeEventListener'),
        ps = {},
        vs = '__zone_symbol__propagationStopped',
        gs = (function () {
          var e = 'undefined' != typeof Zone && Zone[hs('BLACK_LISTED_EVENTS')];
          if (e) {
            var t = {};
            return (
              e.forEach(function (e) {
                t[e] = e;
              }),
              t
            );
          }
        })(),
        ms = function (e) {
          return !!gs && gs.hasOwnProperty(e);
        },
        ys = function (e) {
          var t = ps[e.type];
          if (t) {
            var n = this[t];
            if (n) {
              var r = [e];
              if (1 === n.length) {
                var i = n[0];
                return i.zone !== Zone.current
                  ? i.zone.run(i.handler, this, r)
                  : i.handler.apply(this, r);
              }
              for (var a = n.slice(), o = 0; o < a.length && !0 !== e[vs]; o++) {
                var l = a[o];
                l.zone !== Zone.current ? l.zone.run(l.handler, this, r) : l.handler.apply(this, r);
              }
            }
          }
        },
        _s = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return (
              _classCallCheck(this, n),
              ((a = t.call(this, e)).ngZone = r),
              (i &&
                (function (e) {
                  return 'server' === e;
                })(i)) ||
                a.patchEvent(),
              a
            );
          }
          return (
            _createClass(n, [
              {
                key: 'patchEvent',
                value: function () {
                  if (
                    'undefined' != typeof Event &&
                    Event &&
                    Event.prototype &&
                    !Event.prototype.__zone_symbol__stopImmediatePropagation
                  ) {
                    var e = (Event.prototype.__zone_symbol__stopImmediatePropagation =
                      Event.prototype.stopImmediatePropagation);
                    Event.prototype.stopImmediatePropagation = function () {
                      this && (this[vs] = !0), e && e.apply(this, arguments);
                    };
                  }
                },
              },
              {
                key: 'supports',
                value: function (e) {
                  return !0;
                },
              },
              {
                key: 'addEventListener',
                value: function (e, t, n) {
                  var r = this,
                    i = n;
                  if (!e[ds] || (Wi.isInAngularZone() && !ms(t))) e.addEventListener(t, i, !1);
                  else {
                    var a = ps[t];
                    a || (a = ps[t] = hs('ANGULAR' + t + 'FALSE'));
                    var o = e[a],
                      l = o && o.length > 0;
                    o || (o = e[a] = []);
                    var u = ms(t) ? Zone.root : Zone.current;
                    if (0 === o.length) o.push({ zone: u, handler: i });
                    else {
                      for (var s = !1, c = 0; c < o.length; c++)
                        if (o[c].handler === i) {
                          s = !0;
                          break;
                        }
                      s || o.push({ zone: u, handler: i });
                    }
                    l || e[ds](t, ys, !1);
                  }
                  return function () {
                    return r.removeEventListener(e, t, i);
                  };
                },
              },
              {
                key: 'removeEventListener',
                value: function (e, t, n) {
                  var r = e[fs];
                  if (!r) return e.removeEventListener.apply(e, [t, n, !1]);
                  var i = ps[t],
                    a = i && e[i];
                  if (!a) return e.removeEventListener.apply(e, [t, n, !1]);
                  for (var o = !1, l = 0; l < a.length; l++)
                    if (a[l].handler === n) {
                      (o = !0), a.splice(l, 1);
                      break;
                    }
                  o
                    ? 0 === a.length && r.apply(e, [t, ys, !1])
                    : e.removeEventListener.apply(e, [t, n, !1]);
                },
              },
            ]),
            n
          );
        })(Ju),
        Cs = {
          pan: !0,
          panstart: !0,
          panmove: !0,
          panend: !0,
          pancancel: !0,
          panleft: !0,
          panright: !0,
          panup: !0,
          pandown: !0,
          pinch: !0,
          pinchstart: !0,
          pinchmove: !0,
          pinchend: !0,
          pinchcancel: !0,
          pinchin: !0,
          pinchout: !0,
          press: !0,
          pressup: !0,
          rotate: !0,
          rotatestart: !0,
          rotatemove: !0,
          rotateend: !0,
          rotatecancel: !0,
          swipe: !0,
          swipeleft: !0,
          swiperight: !0,
          swipeup: !0,
          swipedown: !0,
          tap: !0,
        },
        ks = new Te('HammerGestureConfig'),
        bs = new Te('HammerLoader'),
        ws = (function () {
          function e() {
            _classCallCheck(this, e), (this.events = []), (this.overrides = {});
          }
          return (
            _createClass(e, [
              {
                key: 'buildHammer',
                value: function (e) {
                  var t = new Hammer(e, this.options);
                  for (var n in (t.get('pinch').set({ enable: !0 }),
                  t.get('rotate').set({ enable: !0 }),
                  this.overrides))
                    t.get(n).set(this.overrides[n]);
                  return t;
                },
              },
            ]),
            e
          );
        })(),
        xs = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a) {
            var o;
            return (
              _classCallCheck(this, n),
              ((o = t.call(this, e))._config = r),
              (o.console = i),
              (o.loader = a),
              o
            );
          }
          return (
            _createClass(n, [
              {
                key: 'supports',
                value: function (e) {
                  return !(
                    (!Cs.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e)) ||
                    (!window.Hammer &&
                      !this.loader &&
                      (this.console.warn(
                        'The "'.concat(
                          e,
                          '" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.'
                        )
                      ),
                      1))
                  );
                },
              },
              {
                key: 'addEventListener',
                value: function (e, t, n) {
                  var r = this,
                    i = this.manager.getZone();
                  if (((t = t.toLowerCase()), !window.Hammer && this.loader)) {
                    var a = !1,
                      o = function () {
                        a = !0;
                      };
                    return (
                      this.loader()
                        .then(function () {
                          if (!window.Hammer)
                            return (
                              r.console.warn(
                                'The custom HAMMER_LOADER completed, but Hammer.JS is not present.'
                              ),
                              void (o = function () {})
                            );
                          a || (o = r.addEventListener(e, t, n));
                        })
                        .catch(function () {
                          r.console.warn(
                            'The "'.concat(
                              t,
                              '" event cannot be bound because the custom Hammer.JS loader failed.'
                            )
                          ),
                            (o = function () {});
                        }),
                      function () {
                        o();
                      }
                    );
                  }
                  return i.runOutsideAngular(function () {
                    var a = r._config.buildHammer(e),
                      o = function (e) {
                        i.runGuarded(function () {
                          n(e);
                        });
                      };
                    return (
                      a.on(t, o),
                      function () {
                        a.off(t, o), 'function' == typeof a.destroy && a.destroy();
                      }
                    );
                  });
                },
              },
              {
                key: 'isCustomEvent',
                value: function (e) {
                  return this._config.events.indexOf(e) > -1;
                },
              },
            ]),
            n
          );
        })(Ju),
        Ss = ['alt', 'control', 'meta', 'shift'],
        Es = {
          alt: function (e) {
            return e.altKey;
          },
          control: function (e) {
            return e.ctrlKey;
          },
          meta: function (e) {
            return e.metaKey;
          },
          shift: function (e) {
            return e.shiftKey;
          },
        },
        Ts = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e) {
            return _classCallCheck(this, n), t.call(this, e);
          }
          return (
            _createClass(
              n,
              [
                {
                  key: 'supports',
                  value: function (e) {
                    return null != n.parseEventName(e);
                  },
                },
                {
                  key: 'addEventListener',
                  value: function (e, t, r) {
                    var i = n.parseEventName(t),
                      a = n.eventCallback(i.fullKey, r, this.manager.getZone());
                    return this.manager.getZone().runOutsideAngular(function () {
                      return Mu().onAndCancel(e, i.domEventName, a);
                    });
                  },
                },
              ],
              [
                {
                  key: 'parseEventName',
                  value: function (e) {
                    var t = e.toLowerCase().split('.'),
                      r = t.shift();
                    if (0 === t.length || ('keydown' !== r && 'keyup' !== r)) return null;
                    var i = n._normalizeKey(t.pop()),
                      a = '';
                    if (
                      (Ss.forEach(function (e) {
                        var n = t.indexOf(e);
                        n > -1 && (t.splice(n, 1), (a += e + '.'));
                      }),
                      (a += i),
                      0 != t.length || 0 === i.length)
                    )
                      return null;
                    var o = {};
                    return (o.domEventName = r), (o.fullKey = a), o;
                  },
                },
                {
                  key: 'getEventFullKey',
                  value: function (e) {
                    var t = '',
                      n = Mu().getEventKey(e);
                    return (
                      ' ' === (n = n.toLowerCase()) ? (n = 'space') : '.' === n && (n = 'dot'),
                      Ss.forEach(function (r) {
                        r != n && (0, Es[r])(e) && (t += r + '.');
                      }),
                      (t += n)
                    );
                  },
                },
                {
                  key: 'eventCallback',
                  value: function (e, t, r) {
                    return function (i) {
                      n.getEventFullKey(i) === e &&
                        r.runGuarded(function () {
                          return t(i);
                        });
                    };
                  },
                },
                {
                  key: '_normalizeKey',
                  value: function (e) {
                    switch (e) {
                      case 'esc':
                        return 'escape';
                      default:
                        return e;
                    }
                  },
                },
              ]
            ),
            n
          );
        })(Ju),
        Ps = function e() {
          _classCallCheck(this, e);
        },
        As = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e) {
            var r;
            return _classCallCheck(this, n), ((r = t.call(this))._doc = e), r;
          }
          return (
            _createClass(n, [
              {
                key: 'sanitize',
                value: function (e, t) {
                  if (null == t) return null;
                  switch (e) {
                    case Ct.NONE:
                      return t;
                    case Ct.HTML:
                      return t instanceof Is
                        ? t.changingThisBreaksApplicationSecurity
                        : (this.checkNotSafeValue(t, 'HTML'),
                          (function (e, t) {
                            var n = null;
                            try {
                              at = at || new Xe(e);
                              var r = t ? String(t) : '';
                              n = at.getInertBodyElement(r);
                              var i = 5,
                                a = r;
                              do {
                                if (0 === i)
                                  throw new Error(
                                    'Failed to sanitize html because the input is unstable'
                                  );
                                i--, (r = a), (a = n.innerHTML), (n = at.getInertBodyElement(r));
                              } while (r !== a);
                              var o = new vt(),
                                l = o.sanitizeChildren(_t(n) || n);
                              return (
                                Je() &&
                                  o.sanitizedSomething &&
                                  console.warn(
                                    'WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'
                                  ),
                                l
                              );
                            } finally {
                              if (n)
                                for (var u = _t(n) || n; u.firstChild; )
                                  u.removeChild(u.firstChild);
                            }
                          })(this._doc, String(t)));
                    case Ct.STYLE:
                      return t instanceof Os
                        ? t.changingThisBreaksApplicationSecurity
                        : (this.checkNotSafeValue(t, 'Style'),
                          (function (e) {
                            if (!(e = String(e).trim())) return '';
                            var t = e.match(wt);
                            return (t && nt(t[1]) === t[1]) ||
                              (e.match(bt) &&
                                (function (e) {
                                  for (var t = !0, n = !0, r = 0; r < e.length; r++) {
                                    var i = e.charAt(r);
                                    "'" === i && n ? (t = !t) : '"' === i && t && (n = !n);
                                  }
                                  return t && n;
                                })(e))
                              ? e
                              : (Je() &&
                                  console.warn(
                                    'WARNING: sanitizing unsafe style value '.concat(
                                      e,
                                      ' (see http://g.co/ng/security#xss).'
                                    )
                                  ),
                                'unsafe');
                          })(t));
                    case Ct.SCRIPT:
                      if (t instanceof Ds) return t.changingThisBreaksApplicationSecurity;
                      throw (
                        (this.checkNotSafeValue(t, 'Script'),
                        new Error('unsafe value used in a script context'))
                      );
                    case Ct.URL:
                      return t instanceof Ms || t instanceof Vs
                        ? t.changingThisBreaksApplicationSecurity
                        : (this.checkNotSafeValue(t, 'URL'), nt(String(t)));
                    case Ct.RESOURCE_URL:
                      if (t instanceof Ms) return t.changingThisBreaksApplicationSecurity;
                      throw (
                        (this.checkNotSafeValue(t, 'ResourceURL'),
                        new Error(
                          'unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'
                        ))
                      );
                    default:
                      throw new Error(
                        'Unexpected SecurityContext '.concat(
                          e,
                          ' (see http://g.co/ng/security#xss)'
                        )
                      );
                  }
                },
              },
              {
                key: 'checkNotSafeValue',
                value: function (e, t) {
                  if (e instanceof Rs)
                    throw new Error(
                      'Required a safe '
                        .concat(t, ', got a ')
                        .concat(e.getTypeName(), ' (see http://g.co/ng/security#xss)')
                    );
                },
              },
              {
                key: 'bypassSecurityTrustHtml',
                value: function (e) {
                  return new Is(e);
                },
              },
              {
                key: 'bypassSecurityTrustStyle',
                value: function (e) {
                  return new Os(e);
                },
              },
              {
                key: 'bypassSecurityTrustScript',
                value: function (e) {
                  return new Ds(e);
                },
              },
              {
                key: 'bypassSecurityTrustUrl',
                value: function (e) {
                  return new Vs(e);
                },
              },
              {
                key: 'bypassSecurityTrustResourceUrl',
                value: function (e) {
                  return new Ms(e);
                },
              },
            ]),
            n
          );
        })(Ps),
        Rs = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.changingThisBreaksApplicationSecurity = t);
          }
          return (
            _createClass(e, [
              {
                key: 'toString',
                value: function () {
                  return (
                    'SafeValue must use [property]=binding: ' +
                    this.changingThisBreaksApplicationSecurity +
                    ' (see http://g.co/ng/security#xss)'
                  );
                },
              },
            ]),
            e
          );
        })(),
        Is = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n() {
            return _classCallCheck(this, n), t.apply(this, arguments);
          }
          return (
            _createClass(n, [
              {
                key: 'getTypeName',
                value: function () {
                  return 'HTML';
                },
              },
            ]),
            n
          );
        })(Rs),
        Os = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n() {
            return _classCallCheck(this, n), t.apply(this, arguments);
          }
          return (
            _createClass(n, [
              {
                key: 'getTypeName',
                value: function () {
                  return 'Style';
                },
              },
            ]),
            n
          );
        })(Rs),
        Ds = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n() {
            return _classCallCheck(this, n), t.apply(this, arguments);
          }
          return (
            _createClass(n, [
              {
                key: 'getTypeName',
                value: function () {
                  return 'Script';
                },
              },
            ]),
            n
          );
        })(Rs),
        Vs = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n() {
            return _classCallCheck(this, n), t.apply(this, arguments);
          }
          return (
            _createClass(n, [
              {
                key: 'getTypeName',
                value: function () {
                  return 'URL';
                },
              },
            ]),
            n
          );
        })(Rs),
        Ms = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n() {
            return _classCallCheck(this, n), t.apply(this, arguments);
          }
          return (
            _createClass(n, [
              {
                key: 'getTypeName',
                value: function () {
                  return 'ResourceURL';
                },
              },
            ]),
            n
          );
        })(Rs),
        Ns = oa(xa, 'browser', [
          { provide: Ti, useValue: 'browser' },
          {
            provide: Ei,
            useValue: function () {
              Hu.makeCurrent(), $u.init();
            },
            multi: !0,
          },
          {
            provide: tl,
            useClass: (function (e) {
              _inherits(n, e);
              var t = _createSuper(n);
              function n(e) {
                var r;
                return _classCallCheck(this, n), ((r = t.call(this))._doc = e), r._init(), r;
              }
              return (
                _createClass(n, [
                  {
                    key: '_init',
                    value: function () {
                      (this.location = Mu().getLocation()), (this._history = Mu().getHistory());
                    },
                  },
                  {
                    key: 'getBaseHrefFromDOM',
                    value: function () {
                      return Mu().getBaseHref(this._doc);
                    },
                  },
                  {
                    key: 'onPopState',
                    value: function (e) {
                      Mu()
                        .getGlobalEventTarget(this._doc, 'window')
                        .addEventListener('popstate', e, !1);
                    },
                  },
                  {
                    key: 'onHashChange',
                    value: function (e) {
                      Mu()
                        .getGlobalEventTarget(this._doc, 'window')
                        .addEventListener('hashchange', e, !1);
                    },
                  },
                  {
                    key: 'pushState',
                    value: function (e, t, n) {
                      Bu() ? this._history.pushState(e, t, n) : (this.location.hash = n);
                    },
                  },
                  {
                    key: 'replaceState',
                    value: function (e, t, n) {
                      Bu() ? this._history.replaceState(e, t, n) : (this.location.hash = n);
                    },
                  },
                  {
                    key: 'forward',
                    value: function () {
                      this._history.forward();
                    },
                  },
                  {
                    key: 'back',
                    value: function () {
                      this._history.back();
                    },
                  },
                  {
                    key: 'getState',
                    value: function () {
                      return this._history.state;
                    },
                  },
                  {
                    key: 'href',
                    get: function () {
                      return this.location.href;
                    },
                  },
                  {
                    key: 'protocol',
                    get: function () {
                      return this.location.protocol;
                    },
                  },
                  {
                    key: 'hostname',
                    get: function () {
                      return this.location.hostname;
                    },
                  },
                  {
                    key: 'port',
                    get: function () {
                      return this.location.port;
                    },
                  },
                  {
                    key: 'pathname',
                    get: function () {
                      return this.location.pathname;
                    },
                    set: function (e) {
                      this.location.pathname = e;
                    },
                  },
                  {
                    key: 'search',
                    get: function () {
                      return this.location.search;
                    },
                  },
                  {
                    key: 'hash',
                    get: function () {
                      return this.location.hash;
                    },
                  },
                ]),
                n
              );
            })(tl),
            deps: [Fl],
          },
          {
            provide: Fl,
            useFactory: function () {
              return document;
            },
            deps: [],
          },
        ]);
      function Ls() {
        return new Tt();
      }
      var Fs = (function () {
        function e(t) {
          if ((_classCallCheck(this, e), t))
            throw new Error(
              'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
            );
        }
        return (
          _createClass(e, null, [
            {
              key: 'withServerTransition',
              value: function (t) {
                return {
                  ngModule: e,
                  providers: [
                    { provide: wi, useValue: t.appId },
                    { provide: qu, useExisting: wi },
                    Gu,
                  ],
                };
              },
            },
          ]),
          e
        );
      })();
      'undefined' != typeof window && window;
      var Us = function e(t, n) {
          _classCallCheck(this, e), (this.id = t), (this.url = n);
        },
        js = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i,
              a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'imperative',
              o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this, e, r)).navigationTrigger = a),
              (i.restoredState = o),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function () {
                  return 'NavigationStart(id: '.concat(this.id, ", url: '").concat(this.url, "')");
                },
              },
            ]),
            n
          );
        })(Us),
        Hs = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return _classCallCheck(this, n), ((a = t.call(this, e, r)).urlAfterRedirects = i), a;
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function () {
                  return 'NavigationEnd(id: '
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "')");
                },
              },
            ]),
            n
          );
        })(Us),
        zs = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return _classCallCheck(this, n), ((a = t.call(this, e, r)).reason = i), a;
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function () {
                  return 'NavigationCancel(id: '.concat(this.id, ", url: '").concat(this.url, "')");
                },
              },
            ]),
            n
          );
        })(Us),
        Bs = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return _classCallCheck(this, n), ((a = t.call(this, e, r)).error = i), a;
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function () {
                  return 'NavigationError(id: '
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', error: ")
                    .concat(this.error, ')');
                },
              },
            ]),
            n
          );
        })(Us),
        qs = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a) {
            var o;
            return (
              _classCallCheck(this, n),
              ((o = t.call(this, e, r)).urlAfterRedirects = i),
              (o.state = a),
              o
            );
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function () {
                  return 'RoutesRecognized(id: '
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "', state: ")
                    .concat(this.state, ')');
                },
              },
            ]),
            n
          );
        })(Us),
        Gs = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a) {
            var o;
            return (
              _classCallCheck(this, n),
              ((o = t.call(this, e, r)).urlAfterRedirects = i),
              (o.state = a),
              o
            );
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function () {
                  return 'GuardsCheckStart(id: '
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "', state: ")
                    .concat(this.state, ')');
                },
              },
            ]),
            n
          );
        })(Us),
        $s = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a, o) {
            var l;
            return (
              _classCallCheck(this, n),
              ((l = t.call(this, e, r)).urlAfterRedirects = i),
              (l.state = a),
              (l.shouldActivate = o),
              l
            );
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function () {
                  return 'GuardsCheckEnd(id: '
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "', state: ")
                    .concat(this.state, ', shouldActivate: ')
                    .concat(this.shouldActivate, ')');
                },
              },
            ]),
            n
          );
        })(Us),
        Ws = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a) {
            var o;
            return (
              _classCallCheck(this, n),
              ((o = t.call(this, e, r)).urlAfterRedirects = i),
              (o.state = a),
              o
            );
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function () {
                  return 'ResolveStart(id: '
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "', state: ")
                    .concat(this.state, ')');
                },
              },
            ]),
            n
          );
        })(Us),
        Zs = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i, a) {
            var o;
            return (
              _classCallCheck(this, n),
              ((o = t.call(this, e, r)).urlAfterRedirects = i),
              (o.state = a),
              o
            );
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function () {
                  return 'ResolveEnd(id: '
                    .concat(this.id, ", url: '")
                    .concat(this.url, "', urlAfterRedirects: '")
                    .concat(this.urlAfterRedirects, "', state: ")
                    .concat(this.state, ')');
                },
              },
            ]),
            n
          );
        })(Us),
        Ks = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.route = t);
          }
          return (
            _createClass(e, [
              {
                key: 'toString',
                value: function () {
                  return 'RouteConfigLoadStart(path: '.concat(this.route.path, ')');
                },
              },
            ]),
            e
          );
        })(),
        Qs = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.route = t);
          }
          return (
            _createClass(e, [
              {
                key: 'toString',
                value: function () {
                  return 'RouteConfigLoadEnd(path: '.concat(this.route.path, ')');
                },
              },
            ]),
            e
          );
        })(),
        Ys = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.snapshot = t);
          }
          return (
            _createClass(e, [
              {
                key: 'toString',
                value: function () {
                  return "ChildActivationStart(path: '".concat(
                    (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || '',
                    "')"
                  );
                },
              },
            ]),
            e
          );
        })(),
        Js = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.snapshot = t);
          }
          return (
            _createClass(e, [
              {
                key: 'toString',
                value: function () {
                  return "ChildActivationEnd(path: '".concat(
                    (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || '',
                    "')"
                  );
                },
              },
            ]),
            e
          );
        })(),
        Xs = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.snapshot = t);
          }
          return (
            _createClass(e, [
              {
                key: 'toString',
                value: function () {
                  return "ActivationStart(path: '".concat(
                    (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || '',
                    "')"
                  );
                },
              },
            ]),
            e
          );
        })(),
        ec = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.snapshot = t);
          }
          return (
            _createClass(e, [
              {
                key: 'toString',
                value: function () {
                  return "ActivationEnd(path: '".concat(
                    (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || '',
                    "')"
                  );
                },
              },
            ]),
            e
          );
        })(),
        tc = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.routerEvent = t),
              (this.position = n),
              (this.anchor = r);
          }
          return (
            _createClass(e, [
              {
                key: 'toString',
                value: function () {
                  return "Scroll(anchor: '"
                    .concat(this.anchor, "', position: '")
                    .concat(
                      this.position
                        ? ''.concat(this.position[0], ', ').concat(this.position[1])
                        : null,
                      "')"
                    );
                },
              },
            ]),
            e
          );
        })(),
        nc = function e() {
          _classCallCheck(this, e);
        },
        rc = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.params = t || {});
          }
          return (
            _createClass(e, [
              {
                key: 'has',
                value: function (e) {
                  return this.params.hasOwnProperty(e);
                },
              },
              {
                key: 'get',
                value: function (e) {
                  if (this.has(e)) {
                    var t = this.params[e];
                    return Array.isArray(t) ? t[0] : t;
                  }
                  return null;
                },
              },
              {
                key: 'getAll',
                value: function (e) {
                  if (this.has(e)) {
                    var t = this.params[e];
                    return Array.isArray(t) ? t : [t];
                  }
                  return [];
                },
              },
              {
                key: 'keys',
                get: function () {
                  return Object.keys(this.params);
                },
              },
            ]),
            e
          );
        })();
      function ic(e) {
        return new rc(e);
      }
      function ac(e) {
        var t = Error('NavigationCancelingError: ' + e);
        return (t.ngNavigationCancelingError = !0), t;
      }
      function oc(e, t, n) {
        var r = n.path.split('/');
        if (r.length > e.length) return null;
        if ('full' === n.pathMatch && (t.hasChildren() || r.length < e.length)) return null;
        for (var i = {}, a = 0; a < r.length; a++) {
          var o = r[a],
            l = e[a];
          if (o.startsWith(':')) i[o.substring(1)] = l;
          else if (o !== l.path) return null;
        }
        return { consumed: e.slice(0, r.length), posParams: i };
      }
      var lc = function e(t, n) {
        _classCallCheck(this, e), (this.routes = t), (this.module = n);
      };
      function uc(e) {
        for (
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '', n = 0;
          n < e.length;
          n++
        ) {
          var r = e[n];
          sc(r, cc(t, r));
        }
      }
      function sc(e, t) {
        if (!e)
          throw new Error(
            "\n      Invalid configuration of route '".concat(
              t,
              "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "
            )
          );
        if (Array.isArray(e))
          throw new Error(
            "Invalid configuration of route '".concat(t, "': Array cannot be specified")
          );
        if (!e.component && !e.children && !e.loadChildren && e.outlet && 'primary' !== e.outlet)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': a componentless route without children or loadChildren cannot have a named outlet set"
            )
          );
        if (e.redirectTo && e.children)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': redirectTo and children cannot be used together"
            )
          );
        if (e.redirectTo && e.loadChildren)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': redirectTo and loadChildren cannot be used together"
            )
          );
        if (e.children && e.loadChildren)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': children and loadChildren cannot be used together"
            )
          );
        if (e.redirectTo && e.component)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': redirectTo and component cannot be used together"
            )
          );
        if (e.path && e.matcher)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': path and matcher cannot be used together"
            )
          );
        if (void 0 === e.redirectTo && !e.component && !e.children && !e.loadChildren)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "'. One of the following must be provided: component, redirectTo, children or loadChildren"
            )
          );
        if (void 0 === e.path && void 0 === e.matcher)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': routes must have either a path or a matcher specified"
            )
          );
        if ('string' == typeof e.path && '/' === e.path.charAt(0))
          throw new Error(
            "Invalid configuration of route '".concat(t, "': path cannot start with a slash")
          );
        if ('' === e.path && void 0 !== e.redirectTo && void 0 === e.pathMatch)
          throw new Error(
            'Invalid configuration of route \'{path: "'
              .concat(t, '", redirectTo: "')
              .concat(
                e.redirectTo,
                "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'."
              )
          );
        if (void 0 !== e.pathMatch && 'full' !== e.pathMatch && 'prefix' !== e.pathMatch)
          throw new Error(
            "Invalid configuration of route '".concat(
              t,
              "': pathMatch can only be set to 'prefix' or 'full'"
            )
          );
        e.children && uc(e.children, t);
      }
      function cc(e, t) {
        return t
          ? e || t.path
            ? e && !t.path
              ? e + '/'
              : !e && t.path
              ? t.path
              : ''.concat(e, '/').concat(t.path)
            : ''
          : e;
      }
      function hc(e) {
        var t = e.children && e.children.map(hc),
          n = t ? Object.assign({}, e, { children: t }) : Object.assign({}, e);
        return (
          !n.component &&
            (t || n.loadChildren) &&
            n.outlet &&
            'primary' !== n.outlet &&
            (n.component = nc),
          n
        );
      }
      function dc(e, t) {
        var n,
          r = Object.keys(e),
          i = Object.keys(t);
        if (!r || !i || r.length != i.length) return !1;
        for (var a = 0; a < r.length; a++) if (e[(n = r[a])] !== t[n]) return !1;
        return !0;
      }
      function fc(e) {
        return Array.prototype.concat.apply([], e);
      }
      function pc(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function vc(e, t) {
        for (var n in e) e.hasOwnProperty(n) && t(e[n], n);
      }
      function gc(e) {
        return Ft(e) ? e : Lt(e) ? Z(Promise.resolve(e)) : ql(e);
      }
      function mc(e, t, n) {
        return n
          ? (function (e, t) {
              return dc(e, t);
            })(e.queryParams, t.queryParams) &&
              (function e(t, n) {
                if (!kc(t.segments, n.segments)) return !1;
                if (t.numberOfChildren !== n.numberOfChildren) return !1;
                for (var r in n.children) {
                  if (!t.children[r]) return !1;
                  if (!e(t.children[r], n.children[r])) return !1;
                }
                return !0;
              })(e.root, t.root)
          : (function (e, t) {
              return (
                Object.keys(t).length <= Object.keys(e).length &&
                Object.keys(t).every(function (n) {
                  return t[n] === e[n];
                })
              );
            })(e.queryParams, t.queryParams) &&
              (function e(t, n) {
                return (function t(n, r, i) {
                  if (n.segments.length > i.length)
                    return !!kc(n.segments.slice(0, i.length), i) && !r.hasChildren();
                  if (n.segments.length === i.length) {
                    if (!kc(n.segments, i)) return !1;
                    for (var a in r.children) {
                      if (!n.children[a]) return !1;
                      if (!e(n.children[a], r.children[a])) return !1;
                    }
                    return !0;
                  }
                  var o = i.slice(0, n.segments.length),
                    l = i.slice(n.segments.length);
                  return !!kc(n.segments, o) && !!n.children.primary && t(n.children.primary, r, l);
                })(t, n, n.segments);
              })(e.root, t.root);
      }
      var yc = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e), (this.root = t), (this.queryParams = n), (this.fragment = r);
          }
          return (
            _createClass(e, [
              {
                key: 'toString',
                value: function () {
                  return Sc.serialize(this);
                },
              },
              {
                key: 'queryParamMap',
                get: function () {
                  return (
                    this._queryParamMap || (this._queryParamMap = ic(this.queryParams)),
                    this._queryParamMap
                  );
                },
              },
            ]),
            e
          );
        })(),
        _c = (function () {
          function e(t, n) {
            var r = this;
            _classCallCheck(this, e),
              (this.segments = t),
              (this.children = n),
              (this.parent = null),
              vc(n, function (e, t) {
                return (e.parent = r);
              });
          }
          return (
            _createClass(e, [
              {
                key: 'hasChildren',
                value: function () {
                  return this.numberOfChildren > 0;
                },
              },
              {
                key: 'toString',
                value: function () {
                  return Ec(this);
                },
              },
              {
                key: 'numberOfChildren',
                get: function () {
                  return Object.keys(this.children).length;
                },
              },
            ]),
            e
          );
        })(),
        Cc = (function () {
          function e(t, n) {
            _classCallCheck(this, e), (this.path = t), (this.parameters = n);
          }
          return (
            _createClass(e, [
              {
                key: 'toString',
                value: function () {
                  return Oc(this);
                },
              },
              {
                key: 'parameterMap',
                get: function () {
                  return (
                    this._parameterMap || (this._parameterMap = ic(this.parameters)),
                    this._parameterMap
                  );
                },
              },
            ]),
            e
          );
        })();
      function kc(e, t) {
        return (
          e.length === t.length &&
          e.every(function (e, n) {
            return e.path === t[n].path;
          })
        );
      }
      function bc(e, t) {
        var n = [];
        return (
          vc(e.children, function (e, r) {
            'primary' === r && (n = n.concat(t(e, r)));
          }),
          vc(e.children, function (e, r) {
            'primary' !== r && (n = n.concat(t(e, r)));
          }),
          n
        );
      }
      var wc = function e() {
          _classCallCheck(this, e);
        },
        xc = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: 'parse',
                value: function (e) {
                  var t = new Lc(e);
                  return new yc(t.parseRootSegment(), t.parseQueryParams(), t.parseFragment());
                },
              },
              {
                key: 'serialize',
                value: function (e) {
                  return ''
                    .concat(
                      '/' +
                        (function e(t, n) {
                          if (!t.hasChildren()) return Ec(t);
                          if (n) {
                            var r = t.children.primary ? e(t.children.primary, !1) : '',
                              i = [];
                            return (
                              vc(t.children, function (t, n) {
                                'primary' !== n && i.push(''.concat(n, ':').concat(e(t, !1)));
                              }),
                              i.length > 0 ? ''.concat(r, '(').concat(i.join('//'), ')') : r
                            );
                          }
                          var a = bc(t, function (n, r) {
                            return 'primary' === r
                              ? [e(t.children.primary, !1)]
                              : [''.concat(r, ':').concat(e(n, !1))];
                          });
                          return ''.concat(Ec(t), '/(').concat(a.join('//'), ')');
                        })(e.root, !0)
                    )
                    .concat(
                      ((t = e.queryParams),
                      (n = Object.keys(t).map(function (e) {
                        var n = t[e];
                        return Array.isArray(n)
                          ? n
                              .map(function (t) {
                                return ''.concat(Pc(e), '=').concat(Pc(t));
                              })
                              .join('&')
                          : ''.concat(Pc(e), '=').concat(Pc(n));
                      })),
                      n.length ? '?' + n.join('&') : '')
                    )
                    .concat('string' == typeof e.fragment ? '#' + encodeURI(e.fragment) : '');
                  var t, n;
                },
              },
            ]),
            e
          );
        })(),
        Sc = new xc();
      function Ec(e) {
        return e.segments
          .map(function (e) {
            return Oc(e);
          })
          .join('/');
      }
      function Tc(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function Pc(e) {
        return Tc(e).replace(/%3B/gi, ';');
      }
      function Ac(e) {
        return Tc(e).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
      }
      function Rc(e) {
        return decodeURIComponent(e);
      }
      function Ic(e) {
        return Rc(e.replace(/\+/g, '%20'));
      }
      function Oc(e) {
        return ''.concat(Ac(e.path)).concat(
          ((t = e.parameters),
          Object.keys(t)
            .map(function (e) {
              return ';'.concat(Ac(e), '=').concat(Ac(t[e]));
            })
            .join(''))
        );
        var t;
      }
      var Dc = /^[^\/()?;=#]+/;
      function Vc(e) {
        var t = e.match(Dc);
        return t ? t[0] : '';
      }
      var Mc = /^[^=?&#]+/,
        Nc = /^[^?&#]+/,
        Lc = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.url = t), (this.remaining = t);
          }
          return (
            _createClass(e, [
              {
                key: 'parseRootSegment',
                value: function () {
                  return (
                    this.consumeOptional('/'),
                    '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#')
                      ? new _c([], {})
                      : new _c([], this.parseChildren())
                  );
                },
              },
              {
                key: 'parseQueryParams',
                value: function () {
                  var e = {};
                  if (this.consumeOptional('?'))
                    do {
                      this.parseQueryParam(e);
                    } while (this.consumeOptional('&'));
                  return e;
                },
              },
              {
                key: 'parseFragment',
                value: function () {
                  return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
                },
              },
              {
                key: 'parseChildren',
                value: function () {
                  if ('' === this.remaining) return {};
                  this.consumeOptional('/');
                  var e = [];
                  for (
                    this.peekStartsWith('(') || e.push(this.parseSegment());
                    this.peekStartsWith('/') &&
                    !this.peekStartsWith('//') &&
                    !this.peekStartsWith('/(');

                  )
                    this.capture('/'), e.push(this.parseSegment());
                  var t = {};
                  this.peekStartsWith('/(') && (this.capture('/'), (t = this.parseParens(!0)));
                  var n = {};
                  return (
                    this.peekStartsWith('(') && (n = this.parseParens(!1)),
                    (e.length > 0 || Object.keys(t).length > 0) && (n.primary = new _c(e, t)),
                    n
                  );
                },
              },
              {
                key: 'parseSegment',
                value: function () {
                  var e = Vc(this.remaining);
                  if ('' === e && this.peekStartsWith(';'))
                    throw new Error(
                      "Empty path url segment cannot have parameters: '".concat(
                        this.remaining,
                        "'."
                      )
                    );
                  return this.capture(e), new Cc(Rc(e), this.parseMatrixParams());
                },
              },
              {
                key: 'parseMatrixParams',
                value: function () {
                  for (var e = {}; this.consumeOptional(';'); ) this.parseParam(e);
                  return e;
                },
              },
              {
                key: 'parseParam',
                value: function (e) {
                  var t = Vc(this.remaining);
                  if (t) {
                    this.capture(t);
                    var n = '';
                    if (this.consumeOptional('=')) {
                      var r = Vc(this.remaining);
                      r && ((n = r), this.capture(n));
                    }
                    e[Rc(t)] = Rc(n);
                  }
                },
              },
              {
                key: 'parseQueryParam',
                value: function (e) {
                  var t = (function (e) {
                    var t = e.match(Mc);
                    return t ? t[0] : '';
                  })(this.remaining);
                  if (t) {
                    this.capture(t);
                    var n = '';
                    if (this.consumeOptional('=')) {
                      var r = (function (e) {
                        var t = e.match(Nc);
                        return t ? t[0] : '';
                      })(this.remaining);
                      r && ((n = r), this.capture(n));
                    }
                    var i = Ic(t),
                      a = Ic(n);
                    if (e.hasOwnProperty(i)) {
                      var o = e[i];
                      Array.isArray(o) || ((o = [o]), (e[i] = o)), o.push(a);
                    } else e[i] = a;
                  }
                },
              },
              {
                key: 'parseParens',
                value: function (e) {
                  var t = {};
                  for (
                    this.capture('(');
                    !this.consumeOptional(')') && this.remaining.length > 0;

                  ) {
                    var n = Vc(this.remaining),
                      r = this.remaining[n.length];
                    if ('/' !== r && ')' !== r && ';' !== r)
                      throw new Error("Cannot parse url '".concat(this.url, "'"));
                    var i = void 0;
                    n.indexOf(':') > -1
                      ? ((i = n.substr(0, n.indexOf(':'))), this.capture(i), this.capture(':'))
                      : e && (i = 'primary');
                    var a = this.parseChildren();
                    (t[i] = 1 === Object.keys(a).length ? a.primary : new _c([], a)),
                      this.consumeOptional('//');
                  }
                  return t;
                },
              },
              {
                key: 'peekStartsWith',
                value: function (e) {
                  return this.remaining.startsWith(e);
                },
              },
              {
                key: 'consumeOptional',
                value: function (e) {
                  return (
                    !!this.peekStartsWith(e) &&
                    ((this.remaining = this.remaining.substring(e.length)), !0)
                  );
                },
              },
              {
                key: 'capture',
                value: function (e) {
                  if (!this.consumeOptional(e)) throw new Error('Expected "'.concat(e, '".'));
                },
              },
            ]),
            e
          );
        })(),
        Fc = (function () {
          function e(t) {
            _classCallCheck(this, e), (this._root = t);
          }
          return (
            _createClass(e, [
              {
                key: 'parent',
                value: function (e) {
                  var t = this.pathFromRoot(e);
                  return t.length > 1 ? t[t.length - 2] : null;
                },
              },
              {
                key: 'children',
                value: function (e) {
                  var t = Uc(e, this._root);
                  return t
                    ? t.children.map(function (e) {
                        return e.value;
                      })
                    : [];
                },
              },
              {
                key: 'firstChild',
                value: function (e) {
                  var t = Uc(e, this._root);
                  return t && t.children.length > 0 ? t.children[0].value : null;
                },
              },
              {
                key: 'siblings',
                value: function (e) {
                  var t = jc(e, this._root);
                  return t.length < 2
                    ? []
                    : t[t.length - 2].children
                        .map(function (e) {
                          return e.value;
                        })
                        .filter(function (t) {
                          return t !== e;
                        });
                },
              },
              {
                key: 'pathFromRoot',
                value: function (e) {
                  return jc(e, this._root).map(function (e) {
                    return e.value;
                  });
                },
              },
              {
                key: 'root',
                get: function () {
                  return this._root.value;
                },
              },
            ]),
            e
          );
        })();
      function Uc(e, t) {
        if (e === t.value) return t;
        var n,
          r = _createForOfIteratorHelper(t.children);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var i = Uc(e, n.value);
            if (i) return i;
          }
        } catch (a) {
          r.e(a);
        } finally {
          r.f();
        }
        return null;
      }
      function jc(e, t) {
        if (e === t.value) return [t];
        var n,
          r = _createForOfIteratorHelper(t.children);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var i = jc(e, n.value);
            if (i.length) return i.unshift(t), i;
          }
        } catch (a) {
          r.e(a);
        } finally {
          r.f();
        }
        return [];
      }
      var Hc = (function () {
        function e(t, n) {
          _classCallCheck(this, e), (this.value = t), (this.children = n);
        }
        return (
          _createClass(e, [
            {
              key: 'toString',
              value: function () {
                return 'TreeNode('.concat(this.value, ')');
              },
            },
          ]),
          e
        );
      })();
      function zc(e) {
        var t = {};
        return (
          e &&
            e.children.forEach(function (e) {
              return (t[e.value.outlet] = e);
            }),
          t
        );
      }
      var Bc = (function (e) {
        _inherits(n, e);
        var t = _createSuper(n);
        function n(e, r) {
          var i;
          return (
            _classCallCheck(this, n),
            ((i = t.call(this, e)).snapshot = r),
            Kc(_assertThisInitialized(i), e),
            i
          );
        }
        return (
          _createClass(n, [
            {
              key: 'toString',
              value: function () {
                return this.snapshot.toString();
              },
            },
          ]),
          n
        );
      })(Fc);
      function qc(e, t) {
        var n = (function (e, t) {
            var n = new Wc([], {}, {}, '', {}, 'primary', t, null, e.root, -1, {});
            return new Zc('', new Hc(n, []));
          })(e, t),
          r = new Gl([new Cc('', {})]),
          i = new Gl({}),
          a = new Gl({}),
          o = new Gl({}),
          l = new Gl(''),
          u = new Gc(r, i, o, l, a, 'primary', t, n.root);
        return (u.snapshot = n.root), new Bc(new Hc(u, []), n);
      }
      var Gc = (function () {
        function e(t, n, r, i, a, o, l, u) {
          _classCallCheck(this, e),
            (this.url = t),
            (this.params = n),
            (this.queryParams = r),
            (this.fragment = i),
            (this.data = a),
            (this.outlet = o),
            (this.component = l),
            (this._futureSnapshot = u);
        }
        return (
          _createClass(e, [
            {
              key: 'toString',
              value: function () {
                return this.snapshot
                  ? this.snapshot.toString()
                  : 'Future('.concat(this._futureSnapshot, ')');
              },
            },
            {
              key: 'routeConfig',
              get: function () {
                return this._futureSnapshot.routeConfig;
              },
            },
            {
              key: 'root',
              get: function () {
                return this._routerState.root;
              },
            },
            {
              key: 'parent',
              get: function () {
                return this._routerState.parent(this);
              },
            },
            {
              key: 'firstChild',
              get: function () {
                return this._routerState.firstChild(this);
              },
            },
            {
              key: 'children',
              get: function () {
                return this._routerState.children(this);
              },
            },
            {
              key: 'pathFromRoot',
              get: function () {
                return this._routerState.pathFromRoot(this);
              },
            },
            {
              key: 'paramMap',
              get: function () {
                return (
                  this._paramMap ||
                    (this._paramMap = this.params.pipe(
                      q(function (e) {
                        return ic(e);
                      })
                    )),
                  this._paramMap
                );
              },
            },
            {
              key: 'queryParamMap',
              get: function () {
                return (
                  this._queryParamMap ||
                    (this._queryParamMap = this.queryParams.pipe(
                      q(function (e) {
                        return ic(e);
                      })
                    )),
                  this._queryParamMap
                );
              },
            },
          ]),
          e
        );
      })();
      function $c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'emptyOnly',
          n = e.pathFromRoot,
          r = 0;
        if ('always' !== t)
          for (r = n.length - 1; r >= 1; ) {
            var i = n[r],
              a = n[r - 1];
            if (i.routeConfig && '' === i.routeConfig.path) r--;
            else {
              if (a.component) break;
              r--;
            }
          }
        return (function (e) {
          return e.reduce(
            function (e, t) {
              return {
                params: Object.assign({}, e.params, t.params),
                data: Object.assign({}, e.data, t.data),
                resolve: Object.assign({}, e.resolve, t._resolvedData),
              };
            },
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      var Wc = (function () {
          function e(t, n, r, i, a, o, l, u, s, c, h) {
            _classCallCheck(this, e),
              (this.url = t),
              (this.params = n),
              (this.queryParams = r),
              (this.fragment = i),
              (this.data = a),
              (this.outlet = o),
              (this.component = l),
              (this.routeConfig = u),
              (this._urlSegment = s),
              (this._lastPathIndex = c),
              (this._resolve = h);
          }
          return (
            _createClass(e, [
              {
                key: 'toString',
                value: function () {
                  return "Route(url:'"
                    .concat(
                      this.url
                        .map(function (e) {
                          return e.toString();
                        })
                        .join('/'),
                      "', path:'"
                    )
                    .concat(this.routeConfig ? this.routeConfig.path : '', "')");
                },
              },
              {
                key: 'root',
                get: function () {
                  return this._routerState.root;
                },
              },
              {
                key: 'parent',
                get: function () {
                  return this._routerState.parent(this);
                },
              },
              {
                key: 'firstChild',
                get: function () {
                  return this._routerState.firstChild(this);
                },
              },
              {
                key: 'children',
                get: function () {
                  return this._routerState.children(this);
                },
              },
              {
                key: 'pathFromRoot',
                get: function () {
                  return this._routerState.pathFromRoot(this);
                },
              },
              {
                key: 'paramMap',
                get: function () {
                  return this._paramMap || (this._paramMap = ic(this.params)), this._paramMap;
                },
              },
              {
                key: 'queryParamMap',
                get: function () {
                  return (
                    this._queryParamMap || (this._queryParamMap = ic(this.queryParams)),
                    this._queryParamMap
                  );
                },
              },
            ]),
            e
          );
        })(),
        Zc = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this, r)).url = e),
              Kc(_assertThisInitialized(i), r),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: 'toString',
                value: function () {
                  return Qc(this._root);
                },
              },
            ]),
            n
          );
        })(Fc);
      function Kc(e, t) {
        (t.value._routerState = e),
          t.children.forEach(function (t) {
            return Kc(e, t);
          });
      }
      function Qc(e) {
        var t = e.children.length > 0 ? ' { '.concat(e.children.map(Qc).join(', '), ' } ') : '';
        return ''.concat(e.value).concat(t);
      }
      function Yc(e) {
        if (e.snapshot) {
          var t = e.snapshot,
            n = e._futureSnapshot;
          (e.snapshot = n),
            dc(t.queryParams, n.queryParams) || e.queryParams.next(n.queryParams),
            t.fragment !== n.fragment && e.fragment.next(n.fragment),
            dc(t.params, n.params) || e.params.next(n.params),
            (function (e, t) {
              if (e.length !== t.length) return !1;
              for (var n = 0; n < e.length; ++n) if (!dc(e[n], t[n])) return !1;
              return !0;
            })(t.url, n.url) || e.url.next(n.url),
            dc(t.data, n.data) || e.data.next(n.data);
        } else (e.snapshot = e._futureSnapshot), e.data.next(e._futureSnapshot.data);
      }
      function Jc(e, t) {
        var n, r;
        return (
          dc(e.params, t.params) &&
          kc((n = e.url), (r = t.url)) &&
          n.every(function (e, t) {
            return dc(e.parameters, r[t].parameters);
          }) &&
          !(!e.parent != !t.parent) &&
          (!e.parent || Jc(e.parent, t.parent))
        );
      }
      function Xc(e) {
        return 'object' == typeof e && null != e && !e.outlets && !e.segmentPath;
      }
      function eh(e, t, n, r, i) {
        var a = {};
        return (
          r &&
            vc(r, function (e, t) {
              a[t] = Array.isArray(e)
                ? e.map(function (e) {
                    return '' + e;
                  })
                : '' + e;
            }),
          new yc(
            n.root === e
              ? t
              : (function e(t, n, r) {
                  var i = {};
                  return (
                    vc(t.children, function (t, a) {
                      i[a] = t === n ? r : e(t, n, r);
                    }),
                    new _c(t.segments, i)
                  );
                })(n.root, e, t),
            a,
            i
          )
        );
      }
      var th = (function () {
          function e(t, n, r) {
            if (
              (_classCallCheck(this, e),
              (this.isAbsolute = t),
              (this.numberOfDoubleDots = n),
              (this.commands = r),
              t && r.length > 0 && Xc(r[0]))
            )
              throw new Error('Root segment cannot have matrix parameters');
            var i = r.find(function (e) {
              return 'object' == typeof e && null != e && e.outlets;
            });
            if (i && i !== pc(r)) throw new Error('{outlets:{}} has to be the last command');
          }
          return (
            _createClass(e, [
              {
                key: 'toRoot',
                value: function () {
                  return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
                },
              },
            ]),
            e
          );
        })(),
        nh = function e(t, n, r) {
          _classCallCheck(this, e),
            (this.segmentGroup = t),
            (this.processChildren = n),
            (this.index = r);
        };
      function rh(e) {
        return 'object' == typeof e && null != e && e.outlets ? e.outlets.primary : '' + e;
      }
      function ih(e, t, n) {
        if ((e || (e = new _c([], {})), 0 === e.segments.length && e.hasChildren()))
          return ah(e, t, n);
        var r = (function (e, t, n) {
            for (
              var r = 0, i = t, a = { match: !1, pathIndex: 0, commandIndex: 0 };
              i < e.segments.length;

            ) {
              if (r >= n.length) return a;
              var o = e.segments[i],
                l = rh(n[r]),
                u = r < n.length - 1 ? n[r + 1] : null;
              if (i > 0 && void 0 === l) break;
              if (l && u && 'object' == typeof u && void 0 === u.outlets) {
                if (!sh(l, u, o)) return a;
                r += 2;
              } else {
                if (!sh(l, {}, o)) return a;
                r++;
              }
              i++;
            }
            return { match: !0, pathIndex: i, commandIndex: r };
          })(e, t, n),
          i = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < e.segments.length) {
          var a = new _c(e.segments.slice(0, r.pathIndex), {});
          return (
            (a.children.primary = new _c(e.segments.slice(r.pathIndex), e.children)), ah(a, 0, i)
          );
        }
        return r.match && 0 === i.length
          ? new _c(e.segments, {})
          : r.match && !e.hasChildren()
          ? oh(e, t, n)
          : r.match
          ? ah(e, 0, i)
          : oh(e, t, n);
      }
      function ah(e, t, n) {
        if (0 === n.length) return new _c(e.segments, {});
        var r = (function (e) {
            return 'object' != typeof e[0] || void 0 === e[0].outlets
              ? { primary: e }
              : e[0].outlets;
          })(n),
          i = {};
        return (
          vc(r, function (n, r) {
            null !== n && (i[r] = ih(e.children[r], t, n));
          }),
          vc(e.children, function (e, t) {
            void 0 === r[t] && (i[t] = e);
          }),
          new _c(e.segments, i)
        );
      }
      function oh(e, t, n) {
        for (var r = e.segments.slice(0, t), i = 0; i < n.length; ) {
          if ('object' == typeof n[i] && void 0 !== n[i].outlets) {
            var a = lh(n[i].outlets);
            return new _c(r, a);
          }
          if (0 === i && Xc(n[0])) r.push(new Cc(e.segments[t].path, n[0])), i++;
          else {
            var o = rh(n[i]),
              l = i < n.length - 1 ? n[i + 1] : null;
            o && l && Xc(l) ? (r.push(new Cc(o, uh(l))), (i += 2)) : (r.push(new Cc(o, {})), i++);
          }
        }
        return new _c(r, {});
      }
      function lh(e) {
        var t = {};
        return (
          vc(e, function (e, n) {
            null !== e && (t[n] = oh(new _c([], {}), 0, e));
          }),
          t
        );
      }
      function uh(e) {
        var t = {};
        return (
          vc(e, function (e, n) {
            return (t[n] = '' + e);
          }),
          t
        );
      }
      function sh(e, t, n) {
        return e == n.path && dc(t, n.parameters);
      }
      var ch = (function () {
        function e(t, n, r, i) {
          _classCallCheck(this, e),
            (this.routeReuseStrategy = t),
            (this.futureState = n),
            (this.currState = r),
            (this.forwardEvent = i);
        }
        return (
          _createClass(e, [
            {
              key: 'activate',
              value: function (e) {
                var t = this.futureState._root,
                  n = this.currState ? this.currState._root : null;
                this.deactivateChildRoutes(t, n, e),
                  Yc(this.futureState.root),
                  this.activateChildRoutes(t, n, e);
              },
            },
            {
              key: 'deactivateChildRoutes',
              value: function (e, t, n) {
                var r = this,
                  i = zc(t);
                e.children.forEach(function (e) {
                  var t = e.value.outlet;
                  r.deactivateRoutes(e, i[t], n), delete i[t];
                }),
                  vc(i, function (e, t) {
                    r.deactivateRouteAndItsChildren(e, n);
                  });
              },
            },
            {
              key: 'deactivateRoutes',
              value: function (e, t, n) {
                var r = e.value,
                  i = t ? t.value : null;
                if (r === i)
                  if (r.component) {
                    var a = n.getContext(r.outlet);
                    a && this.deactivateChildRoutes(e, t, a.children);
                  } else this.deactivateChildRoutes(e, t, n);
                else i && this.deactivateRouteAndItsChildren(t, n);
              },
            },
            {
              key: 'deactivateRouteAndItsChildren',
              value: function (e, t) {
                this.routeReuseStrategy.shouldDetach(e.value.snapshot)
                  ? this.detachAndStoreRouteSubtree(e, t)
                  : this.deactivateRouteAndOutlet(e, t);
              },
            },
            {
              key: 'detachAndStoreRouteSubtree',
              value: function (e, t) {
                var n = t.getContext(e.value.outlet);
                if (n && n.outlet) {
                  var r = n.outlet.detach(),
                    i = n.children.onOutletDeactivated();
                  this.routeReuseStrategy.store(e.value.snapshot, {
                    componentRef: r,
                    route: e,
                    contexts: i,
                  });
                }
              },
            },
            {
              key: 'deactivateRouteAndOutlet',
              value: function (e, t) {
                var n = this,
                  r = t.getContext(e.value.outlet);
                if (r) {
                  var i = zc(e),
                    a = e.value.component ? r.children : t;
                  vc(i, function (e, t) {
                    return n.deactivateRouteAndItsChildren(e, a);
                  }),
                    r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated());
                }
              },
            },
            {
              key: 'activateChildRoutes',
              value: function (e, t, n) {
                var r = this,
                  i = zc(t);
                e.children.forEach(function (e) {
                  r.activateRoutes(e, i[e.value.outlet], n),
                    r.forwardEvent(new ec(e.value.snapshot));
                }),
                  e.children.length && this.forwardEvent(new Js(e.value.snapshot));
              },
            },
            {
              key: 'activateRoutes',
              value: function (e, t, n) {
                var r = e.value,
                  i = t ? t.value : null;
                if ((Yc(r), r === i))
                  if (r.component) {
                    var a = n.getOrCreateContext(r.outlet);
                    this.activateChildRoutes(e, t, a.children);
                  } else this.activateChildRoutes(e, t, n);
                else if (r.component) {
                  var o = n.getOrCreateContext(r.outlet);
                  if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                    var l = this.routeReuseStrategy.retrieve(r.snapshot);
                    this.routeReuseStrategy.store(r.snapshot, null),
                      o.children.onOutletReAttached(l.contexts),
                      (o.attachRef = l.componentRef),
                      (o.route = l.route.value),
                      o.outlet && o.outlet.attach(l.componentRef, l.route.value),
                      hh(l.route);
                  } else {
                    var u = (function (e) {
                        for (var t = e.parent; t; t = t.parent) {
                          var n = t.routeConfig;
                          if (n && n._loadedConfig) return n._loadedConfig;
                          if (n && n.component) return null;
                        }
                        return null;
                      })(r.snapshot),
                      s = u ? u.module.componentFactoryResolver : null;
                    (o.attachRef = null),
                      (o.route = r),
                      (o.resolver = s),
                      o.outlet && o.outlet.activateWith(r, s),
                      this.activateChildRoutes(e, null, o.children);
                  }
                } else this.activateChildRoutes(e, null, n);
              },
            },
          ]),
          e
        );
      })();
      function hh(e) {
        Yc(e.value), e.children.forEach(hh);
      }
      function dh(e) {
        return 'function' == typeof e;
      }
      function fh(e) {
        return e instanceof yc;
      }
      var ph = function e(t) {
          _classCallCheck(this, e), (this.segmentGroup = t || null);
        },
        vh = function e(t) {
          _classCallCheck(this, e), (this.urlTree = t);
        };
      function gh(e) {
        return new w(function (t) {
          return t.error(new ph(e));
        });
      }
      function mh(e) {
        return new w(function (t) {
          return t.error(new vh(e));
        });
      }
      function yh(e) {
        return new w(function (t) {
          return t.error(
            new Error(
              "Only absolute redirects can have named outlets. redirectTo: '".concat(e, "'")
            )
          );
        });
      }
      var _h = (function () {
        function e(t, n, r, i, a) {
          _classCallCheck(this, e),
            (this.configLoader = n),
            (this.urlSerializer = r),
            (this.urlTree = i),
            (this.config = a),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(Wt));
        }
        return (
          _createClass(e, [
            {
              key: 'apply',
              value: function () {
                var e = this;
                return this.expandSegmentGroup(
                  this.ngModule,
                  this.config,
                  this.urlTree.root,
                  'primary'
                )
                  .pipe(
                    q(function (t) {
                      return e.createUrlTree(t, e.urlTree.queryParams, e.urlTree.fragment);
                    })
                  )
                  .pipe(
                    gu(function (t) {
                      if (t instanceof vh) return (e.allowRedirects = !1), e.match(t.urlTree);
                      if (t instanceof ph) throw e.noMatchError(t);
                      throw t;
                    })
                  );
              },
            },
            {
              key: 'match',
              value: function (e) {
                var t = this;
                return this.expandSegmentGroup(this.ngModule, this.config, e.root, 'primary')
                  .pipe(
                    q(function (n) {
                      return t.createUrlTree(n, e.queryParams, e.fragment);
                    })
                  )
                  .pipe(
                    gu(function (e) {
                      if (e instanceof ph) throw t.noMatchError(e);
                      throw e;
                    })
                  );
              },
            },
            {
              key: 'noMatchError',
              value: function (e) {
                return new Error(
                  "Cannot match any routes. URL Segment: '".concat(e.segmentGroup, "'")
                );
              },
            },
            {
              key: 'createUrlTree',
              value: function (e, t, n) {
                var r = e.segments.length > 0 ? new _c([], { primary: e }) : e;
                return new yc(r, t, n);
              },
            },
            {
              key: 'expandSegmentGroup',
              value: function (e, t, n, r) {
                return 0 === n.segments.length && n.hasChildren()
                  ? this.expandChildren(e, t, n).pipe(
                      q(function (e) {
                        return new _c([], e);
                      })
                    )
                  : this.expandSegment(e, n, t, n.segments, r, !0);
              },
            },
            {
              key: 'expandChildren',
              value: function (e, t, n) {
                var r = this;
                return (function (n, i) {
                  if (0 === Object.keys(n).length) return ql({});
                  var a = [],
                    o = [],
                    l = {};
                  return (
                    vc(n, function (n, i) {
                      var u,
                        s,
                        c = ((u = i), (s = n), r.expandSegmentGroup(e, t, s, u)).pipe(
                          q(function (e) {
                            return (l[i] = e);
                          })
                        );
                      'primary' === i ? a.push(c) : o.push(c);
                    }),
                    ql.apply(null, a.concat(o)).pipe(
                      Jl(),
                      vu(),
                      q(function () {
                        return l;
                      })
                    )
                  );
                })(n.children);
              },
            },
            {
              key: 'expandSegment',
              value: function (e, t, n, r, i, a) {
                var o = this;
                return ql.apply(void 0, _toConsumableArray(n)).pipe(
                  q(function (l) {
                    return o.expandSegmentAgainstRoute(e, t, n, l, r, i, a).pipe(
                      gu(function (e) {
                        if (e instanceof ph) return ql(null);
                        throw e;
                      })
                    );
                  }),
                  Jl(),
                  bu(function (e) {
                    return !!e;
                  }),
                  gu(function (e, n) {
                    if (e instanceof Wl || 'EmptyError' === e.name) {
                      if (o.noLeftoversInUrl(t, r, i)) return ql(new _c([], {}));
                      throw new ph(t);
                    }
                    throw e;
                  })
                );
              },
            },
            {
              key: 'noLeftoversInUrl',
              value: function (e, t, n) {
                return 0 === t.length && !e.children[n];
              },
            },
            {
              key: 'expandSegmentAgainstRoute',
              value: function (e, t, n, r, i, a, o) {
                return wh(r) !== a
                  ? gh(t)
                  : void 0 === r.redirectTo
                  ? this.matchSegmentAgainstRoute(e, t, r, i)
                  : o && this.allowRedirects
                  ? this.expandSegmentAgainstRouteUsingRedirect(e, t, n, r, i, a)
                  : gh(t);
              },
            },
            {
              key: 'expandSegmentAgainstRouteUsingRedirect',
              value: function (e, t, n, r, i, a) {
                return '**' === r.path
                  ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(e, n, r, a)
                  : this.expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, i, a);
              },
            },
            {
              key: 'expandWildCardWithParamsAgainstRouteUsingRedirect',
              value: function (e, t, n, r) {
                var i = this,
                  a = this.applyRedirectCommands([], n.redirectTo, {});
                return n.redirectTo.startsWith('/')
                  ? mh(a)
                  : this.lineralizeSegments(n, a).pipe(
                      K(function (n) {
                        var a = new _c(n, {});
                        return i.expandSegment(e, a, t, n, r, !1);
                      })
                    );
              },
            },
            {
              key: 'expandRegularSegmentAgainstRouteUsingRedirect',
              value: function (e, t, n, r, i, a) {
                var o = this,
                  l = Ch(t, r, i),
                  u = l.matched,
                  s = l.consumedSegments,
                  c = l.lastChild,
                  h = l.positionalParamSegments;
                if (!u) return gh(t);
                var d = this.applyRedirectCommands(s, r.redirectTo, h);
                return r.redirectTo.startsWith('/')
                  ? mh(d)
                  : this.lineralizeSegments(r, d).pipe(
                      K(function (r) {
                        return o.expandSegment(e, t, n, r.concat(i.slice(c)), a, !1);
                      })
                    );
              },
            },
            {
              key: 'matchSegmentAgainstRoute',
              value: function (e, t, n, r) {
                var i = this;
                if ('**' === n.path)
                  return n.loadChildren
                    ? this.configLoader.load(e.injector, n).pipe(
                        q(function (e) {
                          return (n._loadedConfig = e), new _c(r, {});
                        })
                      )
                    : ql(new _c(r, {}));
                var a = Ch(t, n, r),
                  o = a.matched,
                  l = a.consumedSegments,
                  u = a.lastChild;
                if (!o) return gh(t);
                var s = r.slice(u);
                return this.getChildConfig(e, n, r).pipe(
                  K(function (e) {
                    var n = e.module,
                      r = e.routes,
                      a = (function (e, t, n, r) {
                        return n.length > 0 &&
                          (function (e, t, n) {
                            return n.some(function (n) {
                              return bh(e, t, n) && 'primary' !== wh(n);
                            });
                          })(e, n, r)
                          ? {
                              segmentGroup: kh(
                                new _c(
                                  t,
                                  (function (e, t) {
                                    var n = {};
                                    n.primary = t;
                                    var r,
                                      i = _createForOfIteratorHelper(e);
                                    try {
                                      for (i.s(); !(r = i.n()).done; ) {
                                        var a = r.value;
                                        '' === a.path &&
                                          'primary' !== wh(a) &&
                                          (n[wh(a)] = new _c([], {}));
                                      }
                                    } catch (o) {
                                      i.e(o);
                                    } finally {
                                      i.f();
                                    }
                                    return n;
                                  })(r, new _c(n, e.children))
                                )
                              ),
                              slicedSegments: [],
                            }
                          : 0 === n.length &&
                            (function (e, t, n) {
                              return n.some(function (n) {
                                return bh(e, t, n);
                              });
                            })(e, n, r)
                          ? {
                              segmentGroup: kh(
                                new _c(
                                  e.segments,
                                  (function (e, t, n, r) {
                                    var i,
                                      a = {},
                                      o = _createForOfIteratorHelper(n);
                                    try {
                                      for (o.s(); !(i = o.n()).done; ) {
                                        var l = i.value;
                                        bh(e, t, l) && !r[wh(l)] && (a[wh(l)] = new _c([], {}));
                                      }
                                    } catch (u) {
                                      o.e(u);
                                    } finally {
                                      o.f();
                                    }
                                    return Object.assign({}, r, a);
                                  })(e, n, r, e.children)
                                )
                              ),
                              slicedSegments: n,
                            }
                          : { segmentGroup: e, slicedSegments: n };
                      })(t, l, s, r),
                      o = a.segmentGroup,
                      u = a.slicedSegments;
                    return 0 === u.length && o.hasChildren()
                      ? i.expandChildren(n, r, o).pipe(
                          q(function (e) {
                            return new _c(l, e);
                          })
                        )
                      : 0 === r.length && 0 === u.length
                      ? ql(new _c(l, {}))
                      : i.expandSegment(n, o, r, u, 'primary', !0).pipe(
                          q(function (e) {
                            return new _c(l.concat(e.segments), e.children);
                          })
                        );
                  })
                );
              },
            },
            {
              key: 'getChildConfig',
              value: function (e, t, n) {
                var r = this;
                return t.children
                  ? ql(new lc(t.children, e))
                  : t.loadChildren
                  ? void 0 !== t._loadedConfig
                    ? ql(t._loadedConfig)
                    : (function (e, t, n) {
                        var r,
                          i = t.canLoad;
                        return i && 0 !== i.length
                          ? Z(i)
                              .pipe(
                                q(function (r) {
                                  var i,
                                    a = e.get(r);
                                  if (
                                    (function (e) {
                                      return e && dh(e.canLoad);
                                    })(a)
                                  )
                                    i = a.canLoad(t, n);
                                  else {
                                    if (!dh(a)) throw new Error('Invalid CanLoad guard');
                                    i = a(t, n);
                                  }
                                  return gc(i);
                                })
                              )
                              .pipe(
                                Jl(),
                                ((r = function (e) {
                                  return !0 === e;
                                }),
                                function (e) {
                                  return e.lift(new wu(r, void 0, e));
                                })
                              )
                          : ql(!0);
                      })(e.injector, t, n).pipe(
                        K(function (n) {
                          return n
                            ? r.configLoader.load(e.injector, t).pipe(
                                q(function (e) {
                                  return (t._loadedConfig = e), e;
                                })
                              )
                            : (function (e) {
                                return new w(function (t) {
                                  return t.error(
                                    ac(
                                      'Cannot load children because the guard of the route "path: \''.concat(
                                        e.path,
                                        '\'" returned false'
                                      )
                                    )
                                  );
                                });
                              })(t);
                        })
                      )
                  : ql(new lc([], e));
              },
            },
            {
              key: 'lineralizeSegments',
              value: function (e, t) {
                for (var n = [], r = t.root; ; ) {
                  if (((n = n.concat(r.segments)), 0 === r.numberOfChildren)) return ql(n);
                  if (r.numberOfChildren > 1 || !r.children.primary) return yh(e.redirectTo);
                  r = r.children.primary;
                }
              },
            },
            {
              key: 'applyRedirectCommands',
              value: function (e, t, n) {
                return this.applyRedirectCreatreUrlTree(t, this.urlSerializer.parse(t), e, n);
              },
            },
            {
              key: 'applyRedirectCreatreUrlTree',
              value: function (e, t, n, r) {
                var i = this.createSegmentGroup(e, t.root, n, r);
                return new yc(
                  i,
                  this.createQueryParams(t.queryParams, this.urlTree.queryParams),
                  t.fragment
                );
              },
            },
            {
              key: 'createQueryParams',
              value: function (e, t) {
                var n = {};
                return (
                  vc(e, function (e, r) {
                    if ('string' == typeof e && e.startsWith(':')) {
                      var i = e.substring(1);
                      n[r] = t[i];
                    } else n[r] = e;
                  }),
                  n
                );
              },
            },
            {
              key: 'createSegmentGroup',
              value: function (e, t, n, r) {
                var i = this,
                  a = this.createSegments(e, t.segments, n, r),
                  o = {};
                return (
                  vc(t.children, function (t, a) {
                    o[a] = i.createSegmentGroup(e, t, n, r);
                  }),
                  new _c(a, o)
                );
              },
            },
            {
              key: 'createSegments',
              value: function (e, t, n, r) {
                var i = this;
                return t.map(function (t) {
                  return t.path.startsWith(':') ? i.findPosParam(e, t, r) : i.findOrReturn(t, n);
                });
              },
            },
            {
              key: 'findPosParam',
              value: function (e, t, n) {
                var r = n[t.path.substring(1)];
                if (!r)
                  throw new Error(
                    "Cannot redirect to '".concat(e, "'. Cannot find '").concat(t.path, "'.")
                  );
                return r;
              },
            },
            {
              key: 'findOrReturn',
              value: function (e, t) {
                var n,
                  r = 0,
                  i = _createForOfIteratorHelper(t);
                try {
                  for (i.s(); !(n = i.n()).done; ) {
                    var a = n.value;
                    if (a.path === e.path) return t.splice(r), a;
                    r++;
                  }
                } catch (o) {
                  i.e(o);
                } finally {
                  i.f();
                }
                return e;
              },
            },
          ]),
          e
        );
      })();
      function Ch(e, t, n) {
        if ('' === t.path)
          return 'full' === t.pathMatch && (e.hasChildren() || n.length > 0)
            ? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
            : { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        var r = (t.matcher || oc)(n, e, t);
        return r
          ? {
              matched: !0,
              consumedSegments: r.consumed,
              lastChild: r.consumed.length,
              positionalParamSegments: r.posParams,
            }
          : { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
      }
      function kh(e) {
        if (1 === e.numberOfChildren && e.children.primary) {
          var t = e.children.primary;
          return new _c(e.segments.concat(t.segments), t.children);
        }
        return e;
      }
      function bh(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || 'full' !== n.pathMatch) &&
          '' === n.path &&
          void 0 !== n.redirectTo
        );
      }
      function wh(e) {
        return e.outlet || 'primary';
      }
      var xh = function e(t) {
          _classCallCheck(this, e), (this.path = t), (this.route = this.path[this.path.length - 1]);
        },
        Sh = function e(t, n) {
          _classCallCheck(this, e), (this.component = t), (this.route = n);
        };
      function Eh(e, t, n) {
        var r = (function (e) {
          if (!e) return null;
          for (var t = e.parent; t; t = t.parent) {
            var n = t.routeConfig;
            if (n && n._loadedConfig) return n._loadedConfig;
          }
          return null;
        })(t);
        return (r ? r.module.injector : n).get(e);
      }
      function Th(e, t, n) {
        var r = zc(e),
          i = e.value;
        vc(r, function (e, r) {
          Th(e, i.component ? (t ? t.children.getContext(r) : null) : t, n);
        }),
          n.canDeactivateChecks.push(
            new Sh(
              i.component && t && t.outlet && t.outlet.isActivated ? t.outlet.component : null,
              i
            )
          );
      }
      var Ph = Symbol('INITIAL_VALUE');
      function Ah() {
        return Su(function (e) {
          return function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r = null,
              i = null;
            return (
              O(t[t.length - 1]) && (i = t.pop()),
              'function' == typeof t[t.length - 1] && (r = t.pop()),
              1 === t.length && u(t[0]) && (t = t[0]),
              W(t, i).lift(new Kl(r))
            );
          }
            .apply(
              void 0,
              _toConsumableArray(
                e.map(function (e) {
                  return e.pipe(
                    _u(1),
                    (function () {
                      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                      return function (e) {
                        var n = t[t.length - 1];
                        O(n) ? t.pop() : (n = null);
                        var r = t.length;
                        return (function () {
                          return Jl()(ql.apply(void 0, arguments));
                        })(1 !== r || n ? (r > 0 ? W(t, n) : zl(n)) : Bl(t[0]), e);
                      };
                    })(Ph)
                  );
                })
              )
            )
            .pipe(
              Pu(function (e, t) {
                var n = !1;
                return t.reduce(function (e, r, i) {
                  if (e !== Ph) return e;
                  if ((r === Ph && (n = !0), !n)) {
                    if (!1 === r) return r;
                    if (i === t.length - 1 || fh(r)) return r;
                  }
                  return e;
                }, e);
              }, Ph),
              Xl(function (e) {
                return e !== Ph;
              }),
              q(function (e) {
                return fh(e) ? e : !0 === e;
              }),
              _u(1)
            );
        });
      }
      function Rh(e, t) {
        return null !== e && t && t(new Xs(e)), ql(!0);
      }
      function Ih(e, t) {
        return null !== e && t && t(new Ys(e)), ql(!0);
      }
      function Oh(e, t, n) {
        var r = t.routeConfig ? t.routeConfig.canActivate : null;
        return r && 0 !== r.length
          ? ql(
              r.map(function (r) {
                return Yl(function () {
                  var i,
                    a = Eh(r, t, n);
                  if (
                    (function (e) {
                      return e && dh(e.canActivate);
                    })(a)
                  )
                    i = gc(a.canActivate(t, e));
                  else {
                    if (!dh(a)) throw new Error('Invalid CanActivate guard');
                    i = gc(a(t, e));
                  }
                  return i.pipe(bu());
                });
              })
            ).pipe(Ah())
          : ql(!0);
      }
      function Dh(e, t, n) {
        var r = t[t.length - 1],
          i = t
            .slice(0, t.length - 1)
            .reverse()
            .map(function (e) {
              return (function (e) {
                var t = e.routeConfig ? e.routeConfig.canActivateChild : null;
                return t && 0 !== t.length ? { node: e, guards: t } : null;
              })(e);
            })
            .filter(function (e) {
              return null !== e;
            })
            .map(function (t) {
              return Yl(function () {
                return ql(
                  t.guards.map(function (i) {
                    var a,
                      o = Eh(i, t.node, n);
                    if (
                      (function (e) {
                        return e && dh(e.canActivateChild);
                      })(o)
                    )
                      a = gc(o.canActivateChild(r, e));
                    else {
                      if (!dh(o)) throw new Error('Invalid CanActivateChild guard');
                      a = gc(o(r, e));
                    }
                    return a.pipe(bu());
                  })
                ).pipe(Ah());
              });
            });
        return ql(i).pipe(Ah());
      }
      var Vh = function e() {
          _classCallCheck(this, e);
        },
        Mh = (function () {
          function e(t, n, r, i, a, o) {
            _classCallCheck(this, e),
              (this.rootComponentType = t),
              (this.config = n),
              (this.urlTree = r),
              (this.url = i),
              (this.paramsInheritanceStrategy = a),
              (this.relativeLinkResolution = o);
          }
          return (
            _createClass(e, [
              {
                key: 'recognize',
                value: function () {
                  try {
                    var e = Fh(this.urlTree.root, [], [], this.config, this.relativeLinkResolution)
                        .segmentGroup,
                      t = this.processSegmentGroup(this.config, e, 'primary'),
                      n = new Wc(
                        [],
                        Object.freeze({}),
                        Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        {},
                        'primary',
                        this.rootComponentType,
                        null,
                        this.urlTree.root,
                        -1,
                        {}
                      ),
                      r = new Hc(n, t),
                      i = new Zc(this.url, r);
                    return this.inheritParamsAndData(i._root), ql(i);
                  } catch (a) {
                    return new w(function (e) {
                      return e.error(a);
                    });
                  }
                },
              },
              {
                key: 'inheritParamsAndData',
                value: function (e) {
                  var t = this,
                    n = e.value,
                    r = $c(n, this.paramsInheritanceStrategy);
                  (n.params = Object.freeze(r.params)),
                    (n.data = Object.freeze(r.data)),
                    e.children.forEach(function (e) {
                      return t.inheritParamsAndData(e);
                    });
                },
              },
              {
                key: 'processSegmentGroup',
                value: function (e, t, n) {
                  return 0 === t.segments.length && t.hasChildren()
                    ? this.processChildren(e, t)
                    : this.processSegment(e, t, t.segments, n);
                },
              },
              {
                key: 'processChildren',
                value: function (e, t) {
                  var n,
                    r = this,
                    i = bc(t, function (t, n) {
                      return r.processSegmentGroup(e, t, n);
                    });
                  return (
                    (n = {}),
                    i.forEach(function (e) {
                      var t = n[e.value.outlet];
                      if (t) {
                        var r = t.url
                            .map(function (e) {
                              return e.toString();
                            })
                            .join('/'),
                          i = e.value.url
                            .map(function (e) {
                              return e.toString();
                            })
                            .join('/');
                        throw new Error(
                          "Two segments cannot have the same outlet name: '"
                            .concat(r, "' and '")
                            .concat(i, "'.")
                        );
                      }
                      n[e.value.outlet] = e.value;
                    }),
                    i.sort(function (e, t) {
                      return 'primary' === e.value.outlet
                        ? -1
                        : 'primary' === t.value.outlet
                        ? 1
                        : e.value.outlet.localeCompare(t.value.outlet);
                    }),
                    i
                  );
                },
              },
              {
                key: 'processSegment',
                value: function (e, t, n, r) {
                  var i,
                    a = _createForOfIteratorHelper(e);
                  try {
                    for (a.s(); !(i = a.n()).done; ) {
                      var o = i.value;
                      try {
                        return this.processSegmentAgainstRoute(o, t, n, r);
                      } catch (l) {
                        if (!(l instanceof Vh)) throw l;
                      }
                    }
                  } catch (u) {
                    a.e(u);
                  } finally {
                    a.f();
                  }
                  if (this.noLeftoversInUrl(t, n, r)) return [];
                  throw new Vh();
                },
              },
              {
                key: 'noLeftoversInUrl',
                value: function (e, t, n) {
                  return 0 === t.length && !e.children[n];
                },
              },
              {
                key: 'processSegmentAgainstRoute',
                value: function (e, t, n, r) {
                  if (e.redirectTo) throw new Vh();
                  if ((e.outlet || 'primary') !== r) throw new Vh();
                  var i,
                    a = [],
                    o = [];
                  if ('**' === e.path) {
                    var l = n.length > 0 ? pc(n).parameters : {};
                    i = new Wc(
                      n,
                      l,
                      Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                      this.urlTree.fragment,
                      Hh(e),
                      r,
                      e.component,
                      e,
                      Nh(t),
                      Lh(t) + n.length,
                      zh(e)
                    );
                  } else {
                    var u = (function (e, t, n) {
                      if ('' === t.path) {
                        if ('full' === t.pathMatch && (e.hasChildren() || n.length > 0))
                          throw new Vh();
                        return { consumedSegments: [], lastChild: 0, parameters: {} };
                      }
                      var r = (t.matcher || oc)(n, e, t);
                      if (!r) throw new Vh();
                      var i = {};
                      vc(r.posParams, function (e, t) {
                        i[t] = e.path;
                      });
                      var a =
                        r.consumed.length > 0
                          ? Object.assign({}, i, r.consumed[r.consumed.length - 1].parameters)
                          : i;
                      return {
                        consumedSegments: r.consumed,
                        lastChild: r.consumed.length,
                        parameters: a,
                      };
                    })(t, e, n);
                    (a = u.consumedSegments),
                      (o = n.slice(u.lastChild)),
                      (i = new Wc(
                        a,
                        u.parameters,
                        Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        Hh(e),
                        r,
                        e.component,
                        e,
                        Nh(t),
                        Lh(t) + a.length,
                        zh(e)
                      ));
                  }
                  var s = (function (e) {
                      return e.children ? e.children : e.loadChildren ? e._loadedConfig.routes : [];
                    })(e),
                    c = Fh(t, a, o, s, this.relativeLinkResolution),
                    h = c.segmentGroup,
                    d = c.slicedSegments;
                  if (0 === d.length && h.hasChildren()) {
                    var f = this.processChildren(s, h);
                    return [new Hc(i, f)];
                  }
                  if (0 === s.length && 0 === d.length) return [new Hc(i, [])];
                  var p = this.processSegment(s, h, d, 'primary');
                  return [new Hc(i, p)];
                },
              },
            ]),
            e
          );
        })();
      function Nh(e) {
        for (var t = e; t._sourceSegment; ) t = t._sourceSegment;
        return t;
      }
      function Lh(e) {
        for (var t = e, n = t._segmentIndexShift ? t._segmentIndexShift : 0; t._sourceSegment; )
          n += (t = t._sourceSegment)._segmentIndexShift ? t._segmentIndexShift : 0;
        return n - 1;
      }
      function Fh(e, t, n, r, i) {
        if (
          n.length > 0 &&
          (function (e, t, n) {
            return n.some(function (n) {
              return Uh(e, t, n) && 'primary' !== jh(n);
            });
          })(e, n, r)
        ) {
          var a = new _c(
            t,
            (function (e, t, n, r) {
              var i = {};
              (i.primary = r), (r._sourceSegment = e), (r._segmentIndexShift = t.length);
              var a,
                o = _createForOfIteratorHelper(n);
              try {
                for (o.s(); !(a = o.n()).done; ) {
                  var l = a.value;
                  if ('' === l.path && 'primary' !== jh(l)) {
                    var u = new _c([], {});
                    (u._sourceSegment = e), (u._segmentIndexShift = t.length), (i[jh(l)] = u);
                  }
                }
              } catch (s) {
                o.e(s);
              } finally {
                o.f();
              }
              return i;
            })(e, t, r, new _c(n, e.children))
          );
          return (
            (a._sourceSegment = e),
            (a._segmentIndexShift = t.length),
            { segmentGroup: a, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function (e, t, n) {
            return n.some(function (n) {
              return Uh(e, t, n);
            });
          })(e, n, r)
        ) {
          var o = new _c(
            e.segments,
            (function (e, t, n, r, i, a) {
              var o,
                l = {},
                u = _createForOfIteratorHelper(r);
              try {
                for (u.s(); !(o = u.n()).done; ) {
                  var s = o.value;
                  if (Uh(e, n, s) && !i[jh(s)]) {
                    var c = new _c([], {});
                    (c._sourceSegment = e),
                      (c._segmentIndexShift = 'legacy' === a ? e.segments.length : t.length),
                      (l[jh(s)] = c);
                  }
                }
              } catch (h) {
                u.e(h);
              } finally {
                u.f();
              }
              return Object.assign({}, i, l);
            })(e, t, n, r, e.children, i)
          );
          return (
            (o._sourceSegment = e),
            (o._segmentIndexShift = t.length),
            { segmentGroup: o, slicedSegments: n }
          );
        }
        var l = new _c(e.segments, e.children);
        return (
          (l._sourceSegment = e),
          (l._segmentIndexShift = t.length),
          { segmentGroup: l, slicedSegments: n }
        );
      }
      function Uh(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || 'full' !== n.pathMatch) &&
          '' === n.path &&
          void 0 === n.redirectTo
        );
      }
      function jh(e) {
        return e.outlet || 'primary';
      }
      function Hh(e) {
        return e.data || {};
      }
      function zh(e) {
        return e.resolve || {};
      }
      function Bh(e, t, n, r) {
        var i = Eh(e, t, r);
        return gc(i.resolve ? i.resolve(t, n) : i(t, n));
      }
      function qh(e) {
        return function (t) {
          return t.pipe(
            Su(function (t) {
              var n = e(t);
              return n
                ? Z(n).pipe(
                    q(function () {
                      return t;
                    })
                  )
                : Z([t]);
            })
          );
        };
      }
      var Gh = function e() {
          _classCallCheck(this, e);
        },
        $h = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: 'shouldDetach',
                value: function (e) {
                  return !1;
                },
              },
              { key: 'store', value: function (e, t) {} },
              {
                key: 'shouldAttach',
                value: function (e) {
                  return !1;
                },
              },
              {
                key: 'retrieve',
                value: function (e) {
                  return null;
                },
              },
              {
                key: 'shouldReuseRoute',
                value: function (e, t) {
                  return e.routeConfig === t.routeConfig;
                },
              },
            ]),
            e
          );
        })(),
        Wh = new Te('ROUTES'),
        Zh = (function () {
          function e(t, n, r, i) {
            _classCallCheck(this, e),
              (this.loader = t),
              (this.compiler = n),
              (this.onLoadStartListener = r),
              (this.onLoadEndListener = i);
          }
          return (
            _createClass(e, [
              {
                key: 'load',
                value: function (e, t) {
                  var n = this;
                  return (
                    this.onLoadStartListener && this.onLoadStartListener(t),
                    this.loadModuleFactory(t.loadChildren).pipe(
                      q(function (r) {
                        n.onLoadEndListener && n.onLoadEndListener(t);
                        var i = r.create(e);
                        return new lc(fc(i.injector.get(Wh)).map(hc), i);
                      })
                    )
                  );
                },
              },
              {
                key: 'loadModuleFactory',
                value: function (e) {
                  var t = this;
                  return 'string' == typeof e
                    ? Z(this.loader.load(e))
                    : gc(e()).pipe(
                        K(function (e) {
                          return e instanceof Zt ? ql(e) : Z(t.compiler.compileModuleAsync(e));
                        })
                      );
                },
              },
            ]),
            e
          );
        })(),
        Kh = function e() {
          _classCallCheck(this, e);
        },
        Qh = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: 'shouldProcessUrl',
                value: function (e) {
                  return !0;
                },
              },
              {
                key: 'extract',
                value: function (e) {
                  return e;
                },
              },
              {
                key: 'merge',
                value: function (e, t) {
                  return e;
                },
              },
            ]),
            e
          );
        })();
      function Yh(e) {
        throw e;
      }
      function Jh(e, t, n) {
        return t.parse('/');
      }
      function Xh(e, t) {
        return ql(null);
      }
      var ed = (function () {
          function e(t, n, r, i, a, o, l, u) {
            var s = this;
            _classCallCheck(this, e),
              (this.rootComponentType = t),
              (this.urlSerializer = n),
              (this.rootContexts = r),
              (this.location = i),
              (this.config = u),
              (this.lastSuccessfulNavigation = null),
              (this.currentNavigation = null),
              (this.navigationId = 0),
              (this.isNgZoneEnabled = !1),
              (this.events = new R()),
              (this.errorHandler = Yh),
              (this.malformedUriErrorHandler = Jh),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.hooks = { beforePreactivation: Xh, afterPreactivation: Xh }),
              (this.urlHandlingStrategy = new Qh()),
              (this.routeReuseStrategy = new $h()),
              (this.onSameUrlNavigation = 'ignore'),
              (this.paramsInheritanceStrategy = 'emptyOnly'),
              (this.urlUpdateStrategy = 'deferred'),
              (this.relativeLinkResolution = 'legacy'),
              (this.ngModule = a.get(Wt)),
              (this.console = a.get(Ai));
            var c = a.get(Wi);
            (this.isNgZoneEnabled = c instanceof Wi),
              this.resetConfig(u),
              (this.currentUrlTree = new yc(new _c([], {}), {}, null)),
              (this.rawUrlTree = this.currentUrlTree),
              (this.browserUrlTree = this.currentUrlTree),
              (this.configLoader = new Zh(
                o,
                l,
                function (e) {
                  return s.triggerEvent(new Ks(e));
                },
                function (e) {
                  return s.triggerEvent(new Qs(e));
                }
              )),
              (this.routerState = qc(this.currentUrlTree, this.rootComponentType)),
              (this.transitions = new Gl({
                id: 0,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                rawUrl: this.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: 'imperative',
                restoredState: null,
                currentSnapshot: this.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: this.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              (this.navigations = this.setupNavigations(this.transitions)),
              this.processNavigations();
          }
          return (
            _createClass(e, [
              {
                key: 'setupNavigations',
                value: function (e) {
                  var t = this,
                    n = this.events;
                  return e.pipe(
                    Xl(function (e) {
                      return 0 !== e.id;
                    }),
                    q(function (e) {
                      return Object.assign({}, e, {
                        extractedUrl: t.urlHandlingStrategy.extract(e.rawUrl),
                      });
                    }),
                    Su(function (e) {
                      var r,
                        i,
                        a,
                        o,
                        l = !1,
                        u = !1;
                      return ql(e).pipe(
                        lu(function (e) {
                          t.currentNavigation = {
                            id: e.id,
                            initialUrl: e.currentRawUrl,
                            extractedUrl: e.extractedUrl,
                            trigger: e.source,
                            extras: e.extras,
                            previousNavigation: t.lastSuccessfulNavigation
                              ? Object.assign({}, t.lastSuccessfulNavigation, {
                                  previousNavigation: null,
                                })
                              : null,
                          };
                        }),
                        Su(function (e) {
                          var r,
                            i,
                            a,
                            o,
                            l =
                              !t.navigated ||
                              e.extractedUrl.toString() !== t.browserUrlTree.toString();
                          if (
                            ('reload' === t.onSameUrlNavigation || l) &&
                            t.urlHandlingStrategy.shouldProcessUrl(e.rawUrl)
                          )
                            return ql(e).pipe(
                              Su(function (e) {
                                var r = t.transitions.getValue();
                                return (
                                  n.next(
                                    new js(
                                      e.id,
                                      t.serializeUrl(e.extractedUrl),
                                      e.source,
                                      e.restoredState
                                    )
                                  ),
                                  r !== t.transitions.getValue() ? Hl : [e]
                                );
                              }),
                              Su(function (e) {
                                return Promise.resolve(e);
                              }),
                              ((r = t.ngModule.injector),
                              (i = t.configLoader),
                              (a = t.urlSerializer),
                              (o = t.config),
                              function (e) {
                                return e.pipe(
                                  Su(function (e) {
                                    return (function (e, t, n, r, i) {
                                      return new _h(e, t, n, r, i).apply();
                                    })(r, i, a, e.extractedUrl, o).pipe(
                                      q(function (t) {
                                        return Object.assign({}, e, { urlAfterRedirects: t });
                                      })
                                    );
                                  })
                                );
                              }),
                              lu(function (e) {
                                t.currentNavigation = Object.assign({}, t.currentNavigation, {
                                  finalUrl: e.urlAfterRedirects,
                                });
                              }),
                              (function (e, n, r, i, a) {
                                return function (r) {
                                  return r.pipe(
                                    K(function (r) {
                                      return (function (e, t, n, r) {
                                        var i =
                                            arguments.length > 4 && void 0 !== arguments[4]
                                              ? arguments[4]
                                              : 'emptyOnly',
                                          a =
                                            arguments.length > 5 && void 0 !== arguments[5]
                                              ? arguments[5]
                                              : 'legacy';
                                        return new Mh(e, t, n, r, i, a).recognize();
                                      })(
                                        e,
                                        n,
                                        r.urlAfterRedirects,
                                        ((o = r.urlAfterRedirects), t.serializeUrl(o)),
                                        i,
                                        a
                                      ).pipe(
                                        q(function (e) {
                                          return Object.assign({}, r, { targetSnapshot: e });
                                        })
                                      );
                                      var o;
                                    })
                                  );
                                };
                              })(
                                t.rootComponentType,
                                t.config,
                                0,
                                t.paramsInheritanceStrategy,
                                t.relativeLinkResolution
                              ),
                              lu(function (e) {
                                'eager' === t.urlUpdateStrategy &&
                                  (e.extras.skipLocationChange ||
                                    t.setBrowserUrl(
                                      e.urlAfterRedirects,
                                      !!e.extras.replaceUrl,
                                      e.id,
                                      e.extras.state
                                    ),
                                  (t.browserUrlTree = e.urlAfterRedirects));
                              }),
                              lu(function (e) {
                                var r = new qs(
                                  e.id,
                                  t.serializeUrl(e.extractedUrl),
                                  t.serializeUrl(e.urlAfterRedirects),
                                  e.targetSnapshot
                                );
                                n.next(r);
                              })
                            );
                          if (
                            l &&
                            t.rawUrlTree &&
                            t.urlHandlingStrategy.shouldProcessUrl(t.rawUrlTree)
                          ) {
                            var u = e.id,
                              s = e.extractedUrl,
                              c = e.source,
                              h = e.restoredState,
                              d = e.extras,
                              f = new js(u, t.serializeUrl(s), c, h);
                            n.next(f);
                            var p = qc(s, t.rootComponentType).snapshot;
                            return ql(
                              Object.assign({}, e, {
                                targetSnapshot: p,
                                urlAfterRedirects: s,
                                extras: Object.assign({}, d, {
                                  skipLocationChange: !1,
                                  replaceUrl: !1,
                                }),
                              })
                            );
                          }
                          return (
                            (t.rawUrlTree = e.rawUrl),
                            (t.browserUrlTree = e.urlAfterRedirects),
                            e.resolve(null),
                            Hl
                          );
                        }),
                        qh(function (e) {
                          var n = e.targetSnapshot,
                            r = e.id,
                            i = e.extractedUrl,
                            a = e.rawUrl,
                            o = e.extras,
                            l = o.skipLocationChange,
                            u = o.replaceUrl;
                          return t.hooks.beforePreactivation(n, {
                            navigationId: r,
                            appliedUrlTree: i,
                            rawUrlTree: a,
                            skipLocationChange: !!l,
                            replaceUrl: !!u,
                          });
                        }),
                        lu(function (e) {
                          var n = new Gs(
                            e.id,
                            t.serializeUrl(e.extractedUrl),
                            t.serializeUrl(e.urlAfterRedirects),
                            e.targetSnapshot
                          );
                          t.triggerEvent(n);
                        }),
                        q(function (e) {
                          return Object.assign({}, e, {
                            guards:
                              ((n = e.targetSnapshot),
                              (r = e.currentSnapshot),
                              (i = t.rootContexts),
                              (a = n._root),
                              (function e(t, n, r, i) {
                                var a =
                                    arguments.length > 4 && void 0 !== arguments[4]
                                      ? arguments[4]
                                      : { canDeactivateChecks: [], canActivateChecks: [] },
                                  o = zc(n);
                                return (
                                  t.children.forEach(function (t) {
                                    !(function (t, n, r, i) {
                                      var a =
                                          arguments.length > 4 && void 0 !== arguments[4]
                                            ? arguments[4]
                                            : { canDeactivateChecks: [], canActivateChecks: [] },
                                        o = t.value,
                                        l = n ? n.value : null,
                                        u = r ? r.getContext(t.value.outlet) : null;
                                      if (l && o.routeConfig === l.routeConfig) {
                                        var s = (function (e, t, n) {
                                          if ('function' == typeof n) return n(e, t);
                                          switch (n) {
                                            case 'pathParamsChange':
                                              return !kc(e.url, t.url);
                                            case 'pathParamsOrQueryParamsChange':
                                              return (
                                                !kc(e.url, t.url) ||
                                                !dc(e.queryParams, t.queryParams)
                                              );
                                            case 'always':
                                              return !0;
                                            case 'paramsOrQueryParamsChange':
                                              return !Jc(e, t) || !dc(e.queryParams, t.queryParams);
                                            case 'paramsChange':
                                            default:
                                              return !Jc(e, t);
                                          }
                                        })(l, o, o.routeConfig.runGuardsAndResolvers);
                                        s
                                          ? a.canActivateChecks.push(new xh(i))
                                          : ((o.data = l.data),
                                            (o._resolvedData = l._resolvedData)),
                                          e(t, n, o.component ? (u ? u.children : null) : r, i, a),
                                          s &&
                                            a.canDeactivateChecks.push(
                                              new Sh(
                                                (u && u.outlet && u.outlet.component) || null,
                                                l
                                              )
                                            );
                                      } else
                                        l && Th(n, u, a),
                                          a.canActivateChecks.push(new xh(i)),
                                          e(
                                            t,
                                            null,
                                            o.component ? (u ? u.children : null) : r,
                                            i,
                                            a
                                          );
                                    })(t, o[t.value.outlet], r, i.concat([t.value]), a),
                                      delete o[t.value.outlet];
                                  }),
                                  vc(o, function (e, t) {
                                    return Th(e, r.getContext(t), a);
                                  }),
                                  a
                                );
                              })(a, r ? r._root : null, i, [a.value])),
                          });
                          var n, r, i, a;
                        }),
                        (function (e, t) {
                          return function (n) {
                            return n.pipe(
                              K(function (n) {
                                var r = n.targetSnapshot,
                                  i = n.currentSnapshot,
                                  a = n.guards,
                                  o = a.canActivateChecks,
                                  l = a.canDeactivateChecks;
                                return 0 === l.length && 0 === o.length
                                  ? ql(Object.assign({}, n, { guardsResult: !0 }))
                                  : (function (e, t, n, r) {
                                      return Z(e).pipe(
                                        K(function (e) {
                                          return (function (e, t, n, r, i) {
                                            var a =
                                              t && t.routeConfig
                                                ? t.routeConfig.canDeactivate
                                                : null;
                                            return a && 0 !== a.length
                                              ? ql(
                                                  a.map(function (a) {
                                                    var o,
                                                      l = Eh(a, t, i);
                                                    if (
                                                      (function (e) {
                                                        return e && dh(e.canDeactivate);
                                                      })(l)
                                                    )
                                                      o = gc(l.canDeactivate(e, t, n, r));
                                                    else {
                                                      if (!dh(l))
                                                        throw new Error(
                                                          'Invalid CanDeactivate guard'
                                                        );
                                                      o = gc(l(e, t, n, r));
                                                    }
                                                    return o.pipe(bu());
                                                  })
                                                ).pipe(Ah())
                                              : ql(!0);
                                          })(e.component, e.route, n, t, r);
                                        }),
                                        bu(function (e) {
                                          return !0 !== e;
                                        }, !0)
                                      );
                                    })(l, r, i, e).pipe(
                                      K(function (n) {
                                        return n && 'boolean' == typeof n
                                          ? (function (e, t, n, r) {
                                              return Z(t).pipe(
                                                Iu(function (t) {
                                                  return Z([
                                                    Ih(t.route.parent, r),
                                                    Rh(t.route, r),
                                                    Dh(e, t.path, n),
                                                    Oh(e, t.route, n),
                                                  ]).pipe(
                                                    Jl(),
                                                    bu(function (e) {
                                                      return !0 !== e;
                                                    }, !0)
                                                  );
                                                }),
                                                bu(function (e) {
                                                  return !0 !== e;
                                                }, !0)
                                              );
                                            })(r, o, e, t)
                                          : ql(n);
                                      }),
                                      q(function (e) {
                                        return Object.assign({}, n, { guardsResult: e });
                                      })
                                    );
                              })
                            );
                          };
                        })(t.ngModule.injector, function (e) {
                          return t.triggerEvent(e);
                        }),
                        lu(function (e) {
                          if (fh(e.guardsResult)) {
                            var n = ac(
                              'Redirecting to "'.concat(t.serializeUrl(e.guardsResult), '"')
                            );
                            throw ((n.url = e.guardsResult), n);
                          }
                        }),
                        lu(function (e) {
                          var n = new $s(
                            e.id,
                            t.serializeUrl(e.extractedUrl),
                            t.serializeUrl(e.urlAfterRedirects),
                            e.targetSnapshot,
                            !!e.guardsResult
                          );
                          t.triggerEvent(n);
                        }),
                        Xl(function (e) {
                          if (!e.guardsResult) {
                            t.resetUrlToCurrentUrlTree();
                            var r = new zs(e.id, t.serializeUrl(e.extractedUrl), '');
                            return n.next(r), e.resolve(!1), !1;
                          }
                          return !0;
                        }),
                        qh(function (e) {
                          if (e.guards.canActivateChecks.length)
                            return ql(e).pipe(
                              lu(function (e) {
                                var n = new Ws(
                                  e.id,
                                  t.serializeUrl(e.extractedUrl),
                                  t.serializeUrl(e.urlAfterRedirects),
                                  e.targetSnapshot
                                );
                                t.triggerEvent(n);
                              }),
                              ((n = t.paramsInheritanceStrategy),
                              (r = t.ngModule.injector),
                              function (e) {
                                return e.pipe(
                                  K(function (e) {
                                    var t = e.targetSnapshot,
                                      i = e.guards.canActivateChecks;
                                    return i.length
                                      ? Z(i).pipe(
                                          Iu(function (e) {
                                            return (function (e, t, n, r) {
                                              return (function (e, t, n, r) {
                                                var i = Object.keys(e);
                                                if (0 === i.length) return ql({});
                                                if (1 === i.length) {
                                                  var a = i[0];
                                                  return Bh(e[a], t, n, r).pipe(
                                                    q(function (e) {
                                                      return _defineProperty({}, a, e);
                                                    })
                                                  );
                                                }
                                                var o = {};
                                                return Z(i)
                                                  .pipe(
                                                    K(function (i) {
                                                      return Bh(e[i], t, n, r).pipe(
                                                        q(function (e) {
                                                          return (o[i] = e), e;
                                                        })
                                                      );
                                                    })
                                                  )
                                                  .pipe(
                                                    vu(),
                                                    q(function () {
                                                      return o;
                                                    })
                                                  );
                                              })(e._resolve, e, t, r).pipe(
                                                q(function (t) {
                                                  return (
                                                    (e._resolvedData = t),
                                                    (e.data = Object.assign(
                                                      {},
                                                      e.data,
                                                      $c(e, n).resolve
                                                    )),
                                                    null
                                                  );
                                                })
                                              );
                                            })(e.route, t, n, r);
                                          }),
                                          (function (e, t) {
                                            return arguments.length >= 2
                                              ? function (n) {
                                                  return C(Pu(e, t), iu(1), du(t))(n);
                                                }
                                              : function (t) {
                                                  return C(
                                                    Pu(function (t, n, r) {
                                                      return e(t, n, r + 1);
                                                    }),
                                                    iu(1)
                                                  )(t);
                                                };
                                          })(function (e, t) {
                                            return e;
                                          }),
                                          q(function (t) {
                                            return e;
                                          })
                                        )
                                      : ql(e);
                                  })
                                );
                              }),
                              lu(function (e) {
                                var n = new Zs(
                                  e.id,
                                  t.serializeUrl(e.extractedUrl),
                                  t.serializeUrl(e.urlAfterRedirects),
                                  e.targetSnapshot
                                );
                                t.triggerEvent(n);
                              })
                            );
                          var n, r;
                        }),
                        qh(function (e) {
                          var n = e.targetSnapshot,
                            r = e.id,
                            i = e.extractedUrl,
                            a = e.rawUrl,
                            o = e.extras,
                            l = o.skipLocationChange,
                            u = o.replaceUrl;
                          return t.hooks.afterPreactivation(n, {
                            navigationId: r,
                            appliedUrlTree: i,
                            rawUrlTree: a,
                            skipLocationChange: !!l,
                            replaceUrl: !!u,
                          });
                        }),
                        q(function (e) {
                          var n = (function (e, t, n) {
                            var r = (function e(t, n, r) {
                              if (r && t.shouldReuseRoute(n.value, r.value.snapshot)) {
                                var i = r.value;
                                i._futureSnapshot = n.value;
                                var a = (function (t, n, r) {
                                  return n.children.map(function (n) {
                                    var i,
                                      a = _createForOfIteratorHelper(r.children);
                                    try {
                                      for (a.s(); !(i = a.n()).done; ) {
                                        var o = i.value;
                                        if (t.shouldReuseRoute(o.value.snapshot, n.value))
                                          return e(t, n, o);
                                      }
                                    } catch (l) {
                                      a.e(l);
                                    } finally {
                                      a.f();
                                    }
                                    return e(t, n);
                                  });
                                })(t, n, r);
                                return new Hc(i, a);
                              }
                              var o = t.retrieve(n.value);
                              if (o) {
                                var l = o.route;
                                return (
                                  (function e(t, n) {
                                    if (t.value.routeConfig !== n.value.routeConfig)
                                      throw new Error(
                                        'Cannot reattach ActivatedRouteSnapshot created from a different route'
                                      );
                                    if (t.children.length !== n.children.length)
                                      throw new Error(
                                        'Cannot reattach ActivatedRouteSnapshot with a different number of children'
                                      );
                                    n.value._futureSnapshot = t.value;
                                    for (var r = 0; r < t.children.length; ++r)
                                      e(t.children[r], n.children[r]);
                                  })(n, l),
                                  l
                                );
                              }
                              var u,
                                s = new Gc(
                                  new Gl((u = n.value).url),
                                  new Gl(u.params),
                                  new Gl(u.queryParams),
                                  new Gl(u.fragment),
                                  new Gl(u.data),
                                  u.outlet,
                                  u.component,
                                  u
                                ),
                                c = n.children.map(function (n) {
                                  return e(t, n);
                                });
                              return new Hc(s, c);
                            })(e, t._root, n ? n._root : void 0);
                            return new Bc(r, t);
                          })(t.routeReuseStrategy, e.targetSnapshot, e.currentRouterState);
                          return Object.assign({}, e, { targetRouterState: n });
                        }),
                        lu(function (e) {
                          (t.currentUrlTree = e.urlAfterRedirects),
                            (t.rawUrlTree = t.urlHandlingStrategy.merge(
                              t.currentUrlTree,
                              e.rawUrl
                            )),
                            (t.routerState = e.targetRouterState),
                            'deferred' === t.urlUpdateStrategy &&
                              (e.extras.skipLocationChange ||
                                t.setBrowserUrl(
                                  t.rawUrlTree,
                                  !!e.extras.replaceUrl,
                                  e.id,
                                  e.extras.state
                                ),
                              (t.browserUrlTree = e.urlAfterRedirects));
                        }),
                        ((i = t.rootContexts),
                        (a = t.routeReuseStrategy),
                        (o = function (e) {
                          return t.triggerEvent(e);
                        }),
                        q(function (e) {
                          return (
                            new ch(a, e.targetRouterState, e.currentRouterState, o).activate(i), e
                          );
                        })),
                        lu({
                          next: function () {
                            l = !0;
                          },
                          complete: function () {
                            l = !0;
                          },
                        }),
                        ((r = function () {
                          if (!l && !u) {
                            t.resetUrlToCurrentUrlTree();
                            var r = new zs(
                              e.id,
                              t.serializeUrl(e.extractedUrl),
                              'Navigation ID '
                                .concat(e.id, ' is not equal to the current navigation id ')
                                .concat(t.navigationId)
                            );
                            n.next(r), e.resolve(!1);
                          }
                          t.currentNavigation = null;
                        }),
                        function (e) {
                          return e.lift(new Ou(r));
                        }),
                        gu(function (r) {
                          if (((u = !0), (l = r) && l.ngNavigationCancelingError)) {
                            var i = fh(r.url);
                            i ||
                              ((t.navigated = !0),
                              t.resetStateAndUrl(e.currentRouterState, e.currentUrlTree, e.rawUrl));
                            var a = new zs(e.id, t.serializeUrl(e.extractedUrl), r.message);
                            n.next(a), e.resolve(!1), i && t.navigateByUrl(r.url);
                          } else {
                            t.resetStateAndUrl(e.currentRouterState, e.currentUrlTree, e.rawUrl);
                            var o = new Bs(e.id, t.serializeUrl(e.extractedUrl), r);
                            n.next(o);
                            try {
                              e.resolve(t.errorHandler(r));
                            } catch (s) {
                              e.reject(s);
                            }
                          }
                          var l;
                          return Hl;
                        })
                      );
                    })
                  );
                },
              },
              {
                key: 'resetRootComponentType',
                value: function (e) {
                  (this.rootComponentType = e),
                    (this.routerState.root.component = this.rootComponentType);
                },
              },
              {
                key: 'getTransition',
                value: function () {
                  var e = this.transitions.value;
                  return (e.urlAfterRedirects = this.browserUrlTree), e;
                },
              },
              {
                key: 'setTransition',
                value: function (e) {
                  this.transitions.next(Object.assign({}, this.getTransition(), e));
                },
              },
              {
                key: 'initialNavigation',
                value: function () {
                  this.setUpLocationChangeListener(),
                    0 === this.navigationId &&
                      this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
                },
              },
              {
                key: 'setUpLocationChangeListener',
                value: function () {
                  var e = this;
                  this.locationSubscription ||
                    (this.locationSubscription = this.location.subscribe(function (t) {
                      var n = e.parseUrl(t.url),
                        r = 'popstate' === t.type ? 'popstate' : 'hashchange',
                        i = t.state && t.state.navigationId ? t.state : null;
                      setTimeout(function () {
                        e.scheduleNavigation(n, r, i, { replaceUrl: !0 });
                      }, 0);
                    }));
                },
              },
              {
                key: 'getCurrentNavigation',
                value: function () {
                  return this.currentNavigation;
                },
              },
              {
                key: 'triggerEvent',
                value: function (e) {
                  this.events.next(e);
                },
              },
              {
                key: 'resetConfig',
                value: function (e) {
                  uc(e),
                    (this.config = e.map(hc)),
                    (this.navigated = !1),
                    (this.lastSuccessfulId = -1);
                },
              },
              {
                key: 'ngOnDestroy',
                value: function () {
                  this.dispose();
                },
              },
              {
                key: 'dispose',
                value: function () {
                  this.locationSubscription &&
                    (this.locationSubscription.unsubscribe(), (this.locationSubscription = null));
                },
              },
              {
                key: 'createUrlTree',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.relativeTo,
                    r = t.queryParams,
                    i = t.fragment,
                    a = t.preserveQueryParams,
                    o = t.queryParamsHandling,
                    l = t.preserveFragment;
                  Je() &&
                    a &&
                    console &&
                    console.warn &&
                    console.warn(
                      'preserveQueryParams is deprecated, use queryParamsHandling instead.'
                    );
                  var u = n || this.routerState.root,
                    s = l ? this.currentUrlTree.fragment : i,
                    c = null;
                  if (o)
                    switch (o) {
                      case 'merge':
                        c = Object.assign({}, this.currentUrlTree.queryParams, r);
                        break;
                      case 'preserve':
                        c = this.currentUrlTree.queryParams;
                        break;
                      default:
                        c = r || null;
                    }
                  else c = a ? this.currentUrlTree.queryParams : r || null;
                  return (
                    null !== c && (c = this.removeEmptyProps(c)),
                    (function (e, t, n, r, i) {
                      if (0 === n.length) return eh(t.root, t.root, t, r, i);
                      var a = (function (e) {
                        if ('string' == typeof e[0] && 1 === e.length && '/' === e[0])
                          return new th(!0, 0, e);
                        var t = 0,
                          n = !1,
                          r = e.reduce(function (e, r, i) {
                            if ('object' == typeof r && null != r) {
                              if (r.outlets) {
                                var a = {};
                                return (
                                  vc(r.outlets, function (e, t) {
                                    a[t] = 'string' == typeof e ? e.split('/') : e;
                                  }),
                                  [].concat(_toConsumableArray(e), [{ outlets: a }])
                                );
                              }
                              if (r.segmentPath)
                                return [].concat(_toConsumableArray(e), [r.segmentPath]);
                            }
                            return 'string' != typeof r
                              ? [].concat(_toConsumableArray(e), [r])
                              : 0 === i
                              ? (r.split('/').forEach(function (r, i) {
                                  (0 == i && '.' === r) ||
                                    (0 == i && '' === r
                                      ? (n = !0)
                                      : '..' === r
                                      ? t++
                                      : '' != r && e.push(r));
                                }),
                                e)
                              : [].concat(_toConsumableArray(e), [r]);
                          }, []);
                        return new th(n, t, r);
                      })(n);
                      if (a.toRoot()) return eh(t.root, new _c([], {}), t, r, i);
                      var o = (function (e, t, n) {
                          if (e.isAbsolute) return new nh(t.root, !0, 0);
                          if (-1 === n.snapshot._lastPathIndex)
                            return new nh(n.snapshot._urlSegment, !0, 0);
                          var r = Xc(e.commands[0]) ? 0 : 1;
                          return (function (e, t, n) {
                            for (var r = e, i = t, a = n; a > i; ) {
                              if (((a -= i), !(r = r.parent)))
                                throw new Error("Invalid number of '../'");
                              i = r.segments.length;
                            }
                            return new nh(r, !1, i - a);
                          })(
                            n.snapshot._urlSegment,
                            n.snapshot._lastPathIndex + r,
                            e.numberOfDoubleDots
                          );
                        })(a, t, e),
                        l = o.processChildren
                          ? ah(o.segmentGroup, o.index, a.commands)
                          : ih(o.segmentGroup, o.index, a.commands);
                      return eh(o.segmentGroup, l, t, r, i);
                    })(u, this.currentUrlTree, e, c, s)
                  );
                },
              },
              {
                key: 'navigateByUrl',
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { skipLocationChange: !1 };
                  Je() &&
                    this.isNgZoneEnabled &&
                    !Wi.isInAngularZone() &&
                    this.console.warn(
                      "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
                    );
                  var n = fh(e) ? e : this.parseUrl(e),
                    r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
                  return this.scheduleNavigation(r, 'imperative', null, t);
                },
              },
              {
                key: 'navigate',
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { skipLocationChange: !1 };
                  return (
                    (function (e) {
                      for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (null == n)
                          throw new Error(
                            'The requested path contains '.concat(n, ' segment at index ').concat(t)
                          );
                      }
                    })(e),
                    this.navigateByUrl(this.createUrlTree(e, t), t)
                  );
                },
              },
              {
                key: 'serializeUrl',
                value: function (e) {
                  return this.urlSerializer.serialize(e);
                },
              },
              {
                key: 'parseUrl',
                value: function (e) {
                  var t;
                  try {
                    t = this.urlSerializer.parse(e);
                  } catch (n) {
                    t = this.malformedUriErrorHandler(n, this.urlSerializer, e);
                  }
                  return t;
                },
              },
              {
                key: 'isActive',
                value: function (e, t) {
                  if (fh(e)) return mc(this.currentUrlTree, e, t);
                  var n = this.parseUrl(e);
                  return mc(this.currentUrlTree, n, t);
                },
              },
              {
                key: 'removeEmptyProps',
                value: function (e) {
                  return Object.keys(e).reduce(function (t, n) {
                    var r = e[n];
                    return null != r && (t[n] = r), t;
                  }, {});
                },
              },
              {
                key: 'processNavigations',
                value: function () {
                  var e = this;
                  this.navigations.subscribe(
                    function (t) {
                      (e.navigated = !0),
                        (e.lastSuccessfulId = t.id),
                        e.events.next(
                          new Hs(
                            t.id,
                            e.serializeUrl(t.extractedUrl),
                            e.serializeUrl(e.currentUrlTree)
                          )
                        ),
                        (e.lastSuccessfulNavigation = e.currentNavigation),
                        (e.currentNavigation = null),
                        t.resolve(!0);
                    },
                    function (t) {
                      e.console.warn('Unhandled Navigation Error: ');
                    }
                  );
                },
              },
              {
                key: 'scheduleNavigation',
                value: function (e, t, n, r) {
                  var i = this.getTransition();
                  if (
                    i &&
                    'imperative' !== t &&
                    'imperative' === i.source &&
                    i.rawUrl.toString() === e.toString()
                  )
                    return Promise.resolve(!0);
                  if (
                    i &&
                    'hashchange' == t &&
                    'popstate' === i.source &&
                    i.rawUrl.toString() === e.toString()
                  )
                    return Promise.resolve(!0);
                  if (
                    i &&
                    'popstate' == t &&
                    'hashchange' === i.source &&
                    i.rawUrl.toString() === e.toString()
                  )
                    return Promise.resolve(!0);
                  var a = null,
                    o = null,
                    l = new Promise(function (e, t) {
                      (a = e), (o = t);
                    }),
                    u = ++this.navigationId;
                  return (
                    this.setTransition({
                      id: u,
                      source: t,
                      restoredState: n,
                      currentUrlTree: this.currentUrlTree,
                      currentRawUrl: this.rawUrlTree,
                      rawUrl: e,
                      extras: r,
                      resolve: a,
                      reject: o,
                      promise: l,
                      currentSnapshot: this.routerState.snapshot,
                      currentRouterState: this.routerState,
                    }),
                    l.catch(function (e) {
                      return Promise.reject(e);
                    })
                  );
                },
              },
              {
                key: 'setBrowserUrl',
                value: function (e, t, n, r) {
                  var i = this.urlSerializer.serialize(e);
                  (r = r || {}),
                    this.location.isCurrentPathEqualTo(i) || t
                      ? this.location.replaceState(i, '', Object.assign({}, r, { navigationId: n }))
                      : this.location.go(i, '', Object.assign({}, r, { navigationId: n }));
                },
              },
              {
                key: 'resetStateAndUrl',
                value: function (e, t, n) {
                  (this.routerState = e),
                    (this.currentUrlTree = t),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n)),
                    this.resetUrlToCurrentUrlTree();
                },
              },
              {
                key: 'resetUrlToCurrentUrlTree',
                value: function () {
                  this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), '', {
                    navigationId: this.lastSuccessfulId,
                  });
                },
              },
              {
                key: 'url',
                get: function () {
                  return this.serializeUrl(this.currentUrlTree);
                },
              },
            ]),
            e
          );
        })(),
        td = function e() {
          _classCallCheck(this, e),
            (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new nd()),
            (this.attachRef = null);
        },
        nd = (function () {
          function e() {
            _classCallCheck(this, e), (this.contexts = new Map());
          }
          return (
            _createClass(e, [
              {
                key: 'onChildOutletCreated',
                value: function (e, t) {
                  var n = this.getOrCreateContext(e);
                  (n.outlet = t), this.contexts.set(e, n);
                },
              },
              {
                key: 'onChildOutletDestroyed',
                value: function (e) {
                  var t = this.getContext(e);
                  t && (t.outlet = null);
                },
              },
              {
                key: 'onOutletDeactivated',
                value: function () {
                  var e = this.contexts;
                  return (this.contexts = new Map()), e;
                },
              },
              {
                key: 'onOutletReAttached',
                value: function (e) {
                  this.contexts = e;
                },
              },
              {
                key: 'getOrCreateContext',
                value: function (e) {
                  var t = this.getContext(e);
                  return t || ((t = new td()), this.contexts.set(e, t)), t;
                },
              },
              {
                key: 'getContext',
                value: function (e) {
                  return this.contexts.get(e) || null;
                },
              },
            ]),
            e
          );
        })(),
        rd = (function () {
          function e(t, n, r, i, a) {
            _classCallCheck(this, e),
              (this.parentContexts = t),
              (this.location = n),
              (this.resolver = r),
              (this.changeDetector = a),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new yi()),
              (this.deactivateEvents = new yi()),
              (this.name = i || 'primary'),
              t.onChildOutletCreated(this.name, this);
          }
          return (
            _createClass(e, [
              {
                key: 'ngOnDestroy',
                value: function () {
                  this.parentContexts.onChildOutletDestroyed(this.name);
                },
              },
              {
                key: 'ngOnInit',
                value: function () {
                  if (!this.activated) {
                    var e = this.parentContexts.getContext(this.name);
                    e &&
                      e.route &&
                      (e.attachRef
                        ? this.attach(e.attachRef, e.route)
                        : this.activateWith(e.route, e.resolver || null));
                  }
                },
              },
              {
                key: 'detach',
                value: function () {
                  if (!this.activated) throw new Error('Outlet is not activated');
                  this.location.detach();
                  var e = this.activated;
                  return (this.activated = null), (this._activatedRoute = null), e;
                },
              },
              {
                key: 'attach',
                value: function (e, t) {
                  (this.activated = e),
                    (this._activatedRoute = t),
                    this.location.insert(e.hostView);
                },
              },
              {
                key: 'deactivate',
                value: function () {
                  if (this.activated) {
                    var e = this.component;
                    this.activated.destroy(),
                      (this.activated = null),
                      (this._activatedRoute = null),
                      this.deactivateEvents.emit(e);
                  }
                },
              },
              {
                key: 'activateWith',
                value: function (e, t) {
                  if (this.isActivated)
                    throw new Error('Cannot activate an already activated outlet');
                  this._activatedRoute = e;
                  var n = (t = t || this.resolver).resolveComponentFactory(
                      e._futureSnapshot.routeConfig.component
                    ),
                    r = this.parentContexts.getOrCreateContext(this.name).children,
                    i = new id(e, r, this.location.injector);
                  (this.activated = this.location.createComponent(n, this.location.length, i)),
                    this.changeDetector.markForCheck(),
                    this.activateEvents.emit(this.activated.instance);
                },
              },
              {
                key: 'isActivated',
                get: function () {
                  return !!this.activated;
                },
              },
              {
                key: 'component',
                get: function () {
                  if (!this.activated) throw new Error('Outlet is not activated');
                  return this.activated.instance;
                },
              },
              {
                key: 'activatedRoute',
                get: function () {
                  if (!this.activated) throw new Error('Outlet is not activated');
                  return this._activatedRoute;
                },
              },
              {
                key: 'activatedRouteData',
                get: function () {
                  return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
                },
              },
            ]),
            e
          );
        })(),
        id = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e), (this.route = t), (this.childContexts = n), (this.parent = r);
          }
          return (
            _createClass(e, [
              {
                key: 'get',
                value: function (e, t) {
                  return e === Gc
                    ? this.route
                    : e === nd
                    ? this.childContexts
                    : this.parent.get(e, t);
                },
              },
            ]),
            e
          );
        })(),
        ad = function e() {
          _classCallCheck(this, e);
        },
        od = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: 'preload',
                value: function (e, t) {
                  return t().pipe(
                    gu(function () {
                      return ql(null);
                    })
                  );
                },
              },
            ]),
            e
          );
        })(),
        ld = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: 'preload',
                value: function (e, t) {
                  return ql(null);
                },
              },
            ]),
            e
          );
        })(),
        ud = (function () {
          function e(t, n, r, i, a) {
            _classCallCheck(this, e),
              (this.router = t),
              (this.injector = i),
              (this.preloadingStrategy = a),
              (this.loader = new Zh(
                n,
                r,
                function (e) {
                  return t.triggerEvent(new Ks(e));
                },
                function (e) {
                  return t.triggerEvent(new Qs(e));
                }
              ));
          }
          return (
            _createClass(e, [
              {
                key: 'setUpPreloading',
                value: function () {
                  var e = this;
                  this.subscription = this.router.events
                    .pipe(
                      Xl(function (e) {
                        return e instanceof Hs;
                      }),
                      Iu(function () {
                        return e.preload();
                      })
                    )
                    .subscribe(function () {});
                },
              },
              {
                key: 'preload',
                value: function () {
                  var e = this.injector.get(Wt);
                  return this.processRoutes(e, this.router.config);
                },
              },
              {
                key: 'ngOnDestroy',
                value: function () {
                  this.subscription.unsubscribe();
                },
              },
              {
                key: 'processRoutes',
                value: function (e, t) {
                  var n,
                    r = [],
                    i = _createForOfIteratorHelper(t);
                  try {
                    for (i.s(); !(n = i.n()).done; ) {
                      var a = n.value;
                      if (a.loadChildren && !a.canLoad && a._loadedConfig) {
                        var o = a._loadedConfig;
                        r.push(this.processRoutes(o.module, o.routes));
                      } else
                        a.loadChildren && !a.canLoad
                          ? r.push(this.preloadConfig(e, a))
                          : a.children && r.push(this.processRoutes(e, a.children));
                    }
                  } catch (l) {
                    i.e(l);
                  } finally {
                    i.f();
                  }
                  return Z(r).pipe(
                    X(),
                    q(function (e) {})
                  );
                },
              },
              {
                key: 'preloadConfig',
                value: function (e, t) {
                  var n = this;
                  return this.preloadingStrategy.preload(t, function () {
                    return n.loader.load(e.injector, t).pipe(
                      K(function (e) {
                        return (t._loadedConfig = e), n.processRoutes(e.module, e.routes);
                      })
                    );
                  });
                },
              },
            ]),
            e
          );
        })(),
        sd = (function () {
          function e(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            _classCallCheck(this, e),
              (this.router = t),
              (this.viewportScroller = n),
              (this.options = r),
              (this.lastId = 0),
              (this.lastSource = 'imperative'),
              (this.restoredId = 0),
              (this.store = {}),
              (r.scrollPositionRestoration = r.scrollPositionRestoration || 'disabled'),
              (r.anchorScrolling = r.anchorScrolling || 'disabled');
          }
          return (
            _createClass(e, [
              {
                key: 'init',
                value: function () {
                  'disabled' !== this.options.scrollPositionRestoration &&
                    this.viewportScroller.setHistoryScrollRestoration('manual'),
                    (this.routerEventsSubscription = this.createScrollEvents()),
                    (this.scrollEventsSubscription = this.consumeScrollEvents());
                },
              },
              {
                key: 'createScrollEvents',
                value: function () {
                  var e = this;
                  return this.router.events.subscribe(function (t) {
                    t instanceof js
                      ? ((e.store[e.lastId] = e.viewportScroller.getScrollPosition()),
                        (e.lastSource = t.navigationTrigger),
                        (e.restoredId = t.restoredState ? t.restoredState.navigationId : 0))
                      : t instanceof Hs &&
                        ((e.lastId = t.id),
                        e.scheduleScrollEvent(t, e.router.parseUrl(t.urlAfterRedirects).fragment));
                  });
                },
              },
              {
                key: 'consumeScrollEvents',
                value: function () {
                  var e = this;
                  return this.router.events.subscribe(function (t) {
                    t instanceof tc &&
                      (t.position
                        ? 'top' === e.options.scrollPositionRestoration
                          ? e.viewportScroller.scrollToPosition([0, 0])
                          : 'enabled' === e.options.scrollPositionRestoration &&
                            e.viewportScroller.scrollToPosition(t.position)
                        : t.anchor && 'enabled' === e.options.anchorScrolling
                        ? e.viewportScroller.scrollToAnchor(t.anchor)
                        : 'disabled' !== e.options.scrollPositionRestoration &&
                          e.viewportScroller.scrollToPosition([0, 0]));
                  });
                },
              },
              {
                key: 'scheduleScrollEvent',
                value: function (e, t) {
                  this.router.triggerEvent(
                    new tc(
                      e,
                      'popstate' === this.lastSource ? this.store[this.restoredId] : null,
                      t
                    )
                  );
                },
              },
              {
                key: 'ngOnDestroy',
                value: function () {
                  this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(),
                    this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
                },
              },
            ]),
            e
          );
        })(),
        cd = new Te('ROUTER_CONFIGURATION'),
        hd = new Te('ROUTER_FORROOT_GUARD'),
        dd = [
          al,
          { provide: wc, useClass: xc },
          {
            provide: ed,
            useFactory: _d,
            deps: [ha, wc, nd, al, Ue, fa, Fi, Wh, cd, [Kh, new ce()], [Gh, new ce()]],
          },
          nd,
          { provide: Gc, useFactory: Cd, deps: [ed] },
          { provide: fa, useClass: ga },
          ud,
          ld,
          od,
          { provide: cd, useValue: { enableTracing: !1 } },
        ];
      function fd() {
        return new aa('Router', ed);
      }
      var pd = (function () {
        function e(t, n) {
          _classCallCheck(this, e);
        }
        return (
          _createClass(e, null, [
            {
              key: 'forRoot',
              value: function (t, n) {
                return {
                  ngModule: e,
                  providers: [
                    dd,
                    yd(t),
                    { provide: hd, useFactory: md, deps: [[ed, new ce(), new de()]] },
                    { provide: cd, useValue: n || {} },
                    { provide: rl, useFactory: gd, deps: [tl, [new se(il), new ce()], cd] },
                    { provide: sd, useFactory: vd, deps: [ed, Ul, cd] },
                    {
                      provide: ad,
                      useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : ld,
                    },
                    { provide: aa, multi: !0, useFactory: fd },
                    [
                      kd,
                      { provide: ki, multi: !0, useFactory: bd, deps: [kd] },
                      { provide: xd, useFactory: wd, deps: [kd] },
                      { provide: Pi, multi: !0, useExisting: xd },
                    ],
                  ],
                };
              },
            },
            {
              key: 'forChild',
              value: function (t) {
                return { ngModule: e, providers: [yd(t)] };
              },
            },
          ]),
          e
        );
      })();
      function vd(e, t, n) {
        return n.scrollOffset && t.setOffset(n.scrollOffset), new sd(e, t, n);
      }
      function gd(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return n.useHash ? new ll(e, t) : new ul(e, t);
      }
      function md(e) {
        if (e)
          throw new Error(
            'RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.'
          );
        return 'guarded';
      }
      function yd(e) {
        return [
          { provide: We, multi: !0, useValue: e },
          { provide: Wh, multi: !0, useValue: e },
        ];
      }
      function _d(e, t, n, r, i, a, o, l) {
        var u = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : {},
          s = arguments.length > 9 ? arguments[9] : void 0,
          c = arguments.length > 10 ? arguments[10] : void 0,
          h = new ed(null, t, n, r, i, a, o, fc(l));
        if (
          (s && (h.urlHandlingStrategy = s),
          c && (h.routeReuseStrategy = c),
          u.errorHandler && (h.errorHandler = u.errorHandler),
          u.malformedUriErrorHandler && (h.malformedUriErrorHandler = u.malformedUriErrorHandler),
          u.enableTracing)
        ) {
          var d = Mu();
          h.events.subscribe(function (e) {
            d.logGroup('Router Event: ' + e.constructor.name),
              d.log(e.toString()),
              d.log(e),
              d.logGroupEnd();
          });
        }
        return (
          u.onSameUrlNavigation && (h.onSameUrlNavigation = u.onSameUrlNavigation),
          u.paramsInheritanceStrategy &&
            (h.paramsInheritanceStrategy = u.paramsInheritanceStrategy),
          u.urlUpdateStrategy && (h.urlUpdateStrategy = u.urlUpdateStrategy),
          u.relativeLinkResolution && (h.relativeLinkResolution = u.relativeLinkResolution),
          h
        );
      }
      function Cd(e) {
        return e.routerState.root;
      }
      var kd = (function () {
        function e(t) {
          _classCallCheck(this, e),
            (this.injector = t),
            (this.initNavigation = !1),
            (this.resultOfPreactivationDone = new R());
        }
        return (
          _createClass(e, [
            {
              key: 'appInitializer',
              value: function () {
                var e = this;
                return this.injector.get(nl, Promise.resolve(null)).then(function () {
                  var t = null,
                    n = new Promise(function (e) {
                      return (t = e);
                    }),
                    r = e.injector.get(ed),
                    i = e.injector.get(cd);
                  if (e.isLegacyDisabled(i) || e.isLegacyEnabled(i)) t(!0);
                  else if ('disabled' === i.initialNavigation)
                    r.setUpLocationChangeListener(), t(!0);
                  else {
                    if ('enabled' !== i.initialNavigation)
                      throw new Error(
                        "Invalid initialNavigation options: '".concat(i.initialNavigation, "'")
                      );
                    (r.hooks.afterPreactivation = function () {
                      return e.initNavigation
                        ? ql(null)
                        : ((e.initNavigation = !0), t(!0), e.resultOfPreactivationDone);
                    }),
                      r.initialNavigation();
                  }
                  return n;
                });
              },
            },
            {
              key: 'bootstrapListener',
              value: function (e) {
                var t = this.injector.get(cd),
                  n = this.injector.get(ud),
                  r = this.injector.get(sd),
                  i = this.injector.get(ed),
                  a = this.injector.get(ha);
                e === a.components[0] &&
                  (this.isLegacyEnabled(t)
                    ? i.initialNavigation()
                    : this.isLegacyDisabled(t) && i.setUpLocationChangeListener(),
                  n.setUpPreloading(),
                  r.init(),
                  i.resetRootComponentType(a.componentTypes[0]),
                  this.resultOfPreactivationDone.next(null),
                  this.resultOfPreactivationDone.complete());
              },
            },
            {
              key: 'isLegacyEnabled',
              value: function (e) {
                return (
                  'legacy_enabled' === e.initialNavigation ||
                  !0 === e.initialNavigation ||
                  void 0 === e.initialNavigation
                );
              },
            },
            {
              key: 'isLegacyDisabled',
              value: function (e) {
                return 'legacy_disabled' === e.initialNavigation || !1 === e.initialNavigation;
              },
            },
          ]),
          e
        );
      })();
      function bd(e) {
        return e.appInitializer.bind(e);
      }
      function wd(e) {
        return e.bootstrapListener.bind(e);
      }
      var xd = new Te('Router Initializer'),
        Sd = jn({ encapsulation: 2, styles: [], data: {} });
      function Ed(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            Kr(1, 212992, null, 0, rd, [nd, wn, qt, [8, null], gn], null, null),
          ],
          function (e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      var Td = Sr(
          'ng-component',
          nc,
          function (e) {
            return $a(
              0,
              [
                (e()(), Ra(0, 0, null, null, 1, 'ng-component', [], null, null, null, Ed, Sd)),
                Kr(1, 49152, null, 0, nc, [], null, null),
              ],
              null,
              null
            );
          },
          {},
          {},
          []
        ),
        Pd = (function () {
          function e(t, n) {
            _classCallCheck(this, e), (this.open = t), (this.close = n || t);
          }
          return (
            _createClass(e, [
              {
                key: 'isManual',
                value: function () {
                  return 'manual' === this.open || 'manual' === this.close;
                },
              },
            ]),
            e
          );
        })(),
        Ad = { hover: ['mouseover', 'mouseout'], focus: ['focusin', 'focusout'] };
      function Rd(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ad,
          n = (e || '').trim();
        if (0 === n.length) return [];
        var r = n
            .split(/\s+/)
            .map(function (e) {
              return e.split(':');
            })
            .map(function (e) {
              var n = t[e[0]] || e;
              return new Pd(n[0], n[1]);
            }),
          i = r.filter(function (e) {
            return e.isManual();
          });
        if (i.length > 1)
          throw new Error('Triggers parse error: only one manual trigger is allowed');
        if (1 === i.length && r.length > 1)
          throw new Error(
            "Triggers parse error: manual trigger can't be mixed with other triggers"
          );
        return r;
      }
      var Id,
        Od = ('undefined' != typeof window && window) || {},
        Dd = {},
        Vd = 'undefined' == typeof console || !('warn' in console);
      function Md(e) {
        !Je() || Vd || e in Dd || ((Dd[e] = !0), console.warn(e));
      }
      function Nd(e, t) {
        if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      var Ld = function e(t, n, r) {
          _classCallCheck(this, e), (this.nodes = t), (this.viewRef = n), (this.componentRef = r);
        },
        Fd = (function () {
          function e(t, n, r, i, a, o, l, u) {
            _classCallCheck(this, e),
              (this._viewContainerRef = t),
              (this._renderer = n),
              (this._elementRef = r),
              (this._injector = i),
              (this._componentFactoryResolver = a),
              (this._ngZone = o),
              (this._applicationRef = l),
              (this._posService = u),
              (this.onBeforeShow = new yi()),
              (this.onShown = new yi()),
              (this.onBeforeHide = new yi()),
              (this.onHidden = new yi()),
              (this._providers = []),
              (this._isHiding = !1),
              (this.containerDefaultSelector = 'body'),
              (this._listenOpts = {}),
              (this._globalListener = Function.prototype);
          }
          return (
            _createClass(e, [
              {
                key: 'attach',
                value: function (e) {
                  return (
                    (this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(
                      e
                    )),
                    this
                  );
                },
              },
              {
                key: 'to',
                value: function (e) {
                  return (this.container = e || this.container), this;
                },
              },
              {
                key: 'position',
                value: function (e) {
                  return (
                    (this.attachment = e.attachment || this.attachment),
                    (this._elementRef = e.target || this._elementRef),
                    this
                  );
                },
              },
              {
                key: 'provide',
                value: function (e) {
                  return this._providers.push(e), this;
                },
              },
              {
                key: 'show',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  if (
                    (this._subscribePositioning(),
                    (this._innerComponent = null),
                    !this._componentRef)
                  ) {
                    this.onBeforeShow.emit(),
                      (this._contentRef = this._getContentRef(
                        e.content,
                        e.context,
                        e.initialState
                      ));
                    var t = Ue.create({ providers: this._providers, parent: this._injector });
                    (this._componentRef = this._componentFactory.create(t, this._contentRef.nodes)),
                      this._applicationRef.attachView(this._componentRef.hostView),
                      (this.instance = this._componentRef.instance),
                      Object.assign(this._componentRef.instance, e),
                      this.container instanceof Qt &&
                        this.container.nativeElement.appendChild(
                          this._componentRef.location.nativeElement
                        ),
                      'string' == typeof this.container &&
                        'undefined' != typeof document &&
                        (
                          document.querySelector(this.container) ||
                          document.querySelector(this.containerDefaultSelector)
                        ).appendChild(this._componentRef.location.nativeElement),
                      !this.container &&
                        this._elementRef &&
                        this._elementRef.nativeElement.parentElement &&
                        this._elementRef.nativeElement.parentElement.appendChild(
                          this._componentRef.location.nativeElement
                        ),
                      this._contentRef.componentRef &&
                        ((this._innerComponent = this._contentRef.componentRef.instance),
                        this._contentRef.componentRef.changeDetectorRef.markForCheck(),
                        this._contentRef.componentRef.changeDetectorRef.detectChanges()),
                      this._componentRef.changeDetectorRef.markForCheck(),
                      this._componentRef.changeDetectorRef.detectChanges(),
                      this.onShown.emit(this._componentRef.instance);
                  }
                  return this._registerOutsideClick(), this._componentRef;
                },
              },
              {
                key: 'hide',
                value: function () {
                  if (!this._componentRef) return this;
                  this._posService.deletePositionElement(this._componentRef.location),
                    this.onBeforeHide.emit(this._componentRef.instance);
                  var e = this._componentRef.location.nativeElement;
                  return (
                    e.parentNode.removeChild(e),
                    this._contentRef.componentRef && this._contentRef.componentRef.destroy(),
                    this._componentRef.destroy(),
                    this._viewContainerRef &&
                      this._contentRef.viewRef &&
                      this._viewContainerRef.remove(
                        this._viewContainerRef.indexOf(this._contentRef.viewRef)
                      ),
                    this._contentRef.viewRef && this._contentRef.viewRef.destroy(),
                    (this._contentRef = null),
                    (this._componentRef = null),
                    this._removeGlobalListener(),
                    this.onHidden.emit(),
                    this
                  );
                },
              },
              {
                key: 'toggle',
                value: function () {
                  this.isShown ? this.hide() : this.show();
                },
              },
              {
                key: 'dispose',
                value: function () {
                  this.isShown && this.hide(),
                    this._unsubscribePositioning(),
                    this._unregisterListenersFn && this._unregisterListenersFn();
                },
              },
              {
                key: 'listen',
                value: function (e) {
                  var t = this;
                  (this.triggers = e.triggers || this.triggers),
                    (this._listenOpts.outsideClick = e.outsideClick),
                    (this._listenOpts.outsideEsc = e.outsideEsc),
                    (e.target = e.target || this._elementRef.nativeElement);
                  var n = (this._listenOpts.hide = function () {
                      return e.hide ? e.hide() : void t.hide();
                    }),
                    r = (this._listenOpts.show = function (n) {
                      e.show ? e.show(n) : t.show(n), n();
                    });
                  return (
                    (this._unregisterListenersFn = (function (e, t) {
                      var n = Rd(t.triggers),
                        r = t.target;
                      if (1 === n.length && n[0].isManual()) return Function.prototype;
                      var i = [],
                        a = [],
                        o = function () {
                          a.forEach(function (e) {
                            return i.push(e());
                          }),
                            (a.length = 0);
                        };
                      return (
                        n.forEach(function (n) {
                          var l = n.open === n.close,
                            u = l ? t.toggle : t.show;
                          l ||
                            a.push(function () {
                              return e.listen(r, n.close, t.hide);
                            }),
                            i.push(
                              e.listen(r, n.open, function () {
                                return u(o);
                              })
                            );
                        }),
                        function () {
                          i.forEach(function (e) {
                            return e();
                          });
                        }
                      );
                    })(this._renderer, {
                      target: e.target,
                      triggers: e.triggers,
                      show: r,
                      hide: n,
                      toggle: function (e) {
                        t.isShown ? n() : r(e);
                      },
                    })),
                    this
                  );
                },
              },
              {
                key: '_removeGlobalListener',
                value: function () {
                  this._globalListener && (this._globalListener(), (this._globalListener = null));
                },
              },
              {
                key: 'attachInline',
                value: function (e, t) {
                  return (this._inlineViewRef = e.createEmbeddedView(t)), this;
                },
              },
              {
                key: '_registerOutsideClick',
                value: function () {
                  var e = this;
                  if (this._componentRef && this._componentRef.location) {
                    if (this._listenOpts.outsideClick) {
                      var t = this._componentRef.location.nativeElement;
                      setTimeout(function () {
                        var n;
                        e._globalListener = (n = {
                          targets: [t, e._elementRef.nativeElement],
                          outsideClick: e._listenOpts.outsideClick,
                          hide: function () {
                            return e._listenOpts.hide();
                          },
                        }).outsideClick
                          ? e._renderer.listen('document', 'click', function (e) {
                              (n.target && n.target.contains(e.target)) ||
                                (n.targets &&
                                  n.targets.some(function (t) {
                                    return t.contains(e.target);
                                  })) ||
                                n.hide();
                            })
                          : Function.prototype;
                      });
                    }
                    var n;
                    this._listenOpts.outsideEsc &&
                      (this._globalListener = (n = {
                        targets: [
                          this._componentRef.location.nativeElement,
                          this._elementRef.nativeElement,
                        ],
                        outsideEsc: this._listenOpts.outsideEsc,
                        hide: function () {
                          return e._listenOpts.hide();
                        },
                      }).outsideEsc
                        ? this._renderer.listen('document', 'keyup.esc', function (e) {
                            (n.target && n.target.contains(e.target)) ||
                              (n.targets &&
                                n.targets.some(function (t) {
                                  return t.contains(e.target);
                                })) ||
                              n.hide();
                          })
                        : Function.prototype);
                  }
                },
              },
              {
                key: 'getInnerComponent',
                value: function () {
                  return this._innerComponent;
                },
              },
              {
                key: '_subscribePositioning',
                value: function () {
                  var e = this;
                  !this._zoneSubscription &&
                    this.attachment &&
                    (this.onShown.subscribe(function () {
                      e._posService.position({
                        element: e._componentRef.location,
                        target: e._elementRef,
                        attachment: e.attachment,
                        appendToBody: 'body' === e.container,
                      });
                    }),
                    (this._zoneSubscription = this._ngZone.onStable.subscribe(function () {
                      e._componentRef && e._posService.calcPosition();
                    })));
                },
              },
              {
                key: '_unsubscribePositioning',
                value: function () {
                  this._zoneSubscription &&
                    (this._zoneSubscription.unsubscribe(), (this._zoneSubscription = null));
                },
              },
              {
                key: '_getContentRef',
                value: function (e, t, n) {
                  if (!e) return new Ld([]);
                  if (e instanceof kn) {
                    if (this._viewContainerRef) {
                      var r = this._viewContainerRef.createEmbeddedView(e, t);
                      return r.markForCheck(), new Ld([r.rootNodes], r);
                    }
                    var i = e.createEmbeddedView({});
                    return this._applicationRef.attachView(i), new Ld([i.rootNodes], i);
                  }
                  if ('function' == typeof e) {
                    var a = this._componentFactoryResolver.resolveComponentFactory(e),
                      o = Ue.create({ providers: this._providers, parent: this._injector }),
                      l = a.create(o);
                    return (
                      Object.assign(l.instance, n),
                      this._applicationRef.attachView(l.hostView),
                      new Ld([[l.location.nativeElement]], l.hostView, l)
                    );
                  }
                  return new Ld([[this._renderer.createText('' + e)]]);
                },
              },
              {
                key: 'isShown',
                get: function () {
                  return !this._isHiding && !!this._componentRef;
                },
              },
            ]),
            e
          );
        })(),
        Ud = (function () {
          function e(t, n, r, i, a) {
            _classCallCheck(this, e),
              (this._componentFactoryResolver = t),
              (this._ngZone = n),
              (this._injector = r),
              (this._posService = i),
              (this._applicationRef = a);
          }
          return (
            _createClass(e, [
              {
                key: 'createLoader',
                value: function (e, t, n) {
                  return new Fd(
                    t,
                    n,
                    e,
                    this._injector,
                    this._componentFactoryResolver,
                    this._ngZone,
                    this._applicationRef,
                    this._posService
                  );
                },
              },
            ]),
            e
          );
        })();
      function jd(e, t, n, i) {
        return (
          r(n) && ((i = n), (n = void 0)),
          i
            ? jd(e, t, n).pipe(
                q(function (e) {
                  return u(e) ? i.apply(void 0, _toConsumableArray(e)) : i(e);
                })
              )
            : new w(function (r) {
                !(function e(t, n, r, i, a) {
                  var o;
                  if (
                    (function (e) {
                      return (
                        e &&
                        'function' == typeof e.addEventListener &&
                        'function' == typeof e.removeEventListener
                      );
                    })(t)
                  ) {
                    var l = t;
                    t.addEventListener(n, r, a),
                      (o = function () {
                        return l.removeEventListener(n, r, a);
                      });
                  } else if (
                    (function (e) {
                      return e && 'function' == typeof e.on && 'function' == typeof e.off;
                    })(t)
                  ) {
                    var u = t;
                    t.on(n, r),
                      (o = function () {
                        return u.off(n, r);
                      });
                  } else if (
                    (function (e) {
                      return (
                        e &&
                        'function' == typeof e.addListener &&
                        'function' == typeof e.removeListener
                      );
                    })(t)
                  ) {
                    var s = t;
                    t.addListener(n, r),
                      (o = function () {
                        return s.removeListener(n, r);
                      });
                  } else {
                    if (!t || !t.length) throw new TypeError('Invalid event target');
                    for (var c = 0, h = t.length; c < h; c++) e(t[c], n, r, i, a);
                  }
                  i.add(o);
                })(
                  e,
                  t,
                  function (e) {
                    r.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : e);
                  },
                  r,
                  n
                );
              })
        );
      }
      var Hd = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this, e, r)).scheduler = e),
              (i.work = r),
              (i.pending = !1),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: 'schedule',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                  if (this.closed) return this;
                  this.state = e;
                  var n = this.id,
                    r = this.scheduler;
                  return (
                    null != n && (this.id = this.recycleAsyncId(r, n, t)),
                    (this.pending = !0),
                    (this.delay = t),
                    (this.id = this.id || this.requestAsyncId(r, this.id, t)),
                    this
                  );
                },
              },
              {
                key: 'requestAsyncId',
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                  return setInterval(e.flush.bind(e, this), n);
                },
              },
              {
                key: 'recycleAsyncId',
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                  if (null !== n && this.delay === n && !1 === this.pending) return t;
                  clearInterval(t);
                },
              },
              {
                key: 'execute',
                value: function (e, t) {
                  if (this.closed) return new Error('executing a cancelled action');
                  this.pending = !1;
                  var n = this._execute(e, t);
                  if (n) return n;
                  !1 === this.pending &&
                    null != this.id &&
                    (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
                },
              },
              {
                key: '_execute',
                value: function (e, t) {
                  var n = !1,
                    r = void 0;
                  try {
                    this.work(e);
                  } catch (i) {
                    (n = !0), (r = (!!i && i) || new Error(i));
                  }
                  if (n) return this.unsubscribe(), r;
                },
              },
              {
                key: '_unsubscribe',
                value: function () {
                  var e = this.id,
                    t = this.scheduler,
                    n = t.actions,
                    r = n.indexOf(this);
                  (this.work = null),
                    (this.state = null),
                    (this.pending = !1),
                    (this.scheduler = null),
                    -1 !== r && n.splice(r, 1),
                    null != e && (this.id = this.recycleAsyncId(t, e, null)),
                    (this.delay = null);
                },
              },
            ]),
            n
          );
        })(
          (function (e) {
            _inherits(n, e);
            var t = _createSuper(n);
            function n(e, r) {
              return _classCallCheck(this, n), t.call(this);
            }
            return (
              _createClass(n, [
                {
                  key: 'schedule',
                  value: function (e) {
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return this;
                  },
                },
              ]),
              n
            );
          })(f)
        ),
        zd = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n), ((i = t.call(this, e, r)).scheduler = e), (i.work = r), i
            );
          }
          return (
            _createClass(n, [
              {
                key: 'requestAsyncId',
                value: function (e, t) {
                  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                  return null !== r && r > 0
                    ? _get(_getPrototypeOf(n.prototype), 'requestAsyncId', this).call(this, e, t, r)
                    : (e.actions.push(this),
                      e.scheduled ||
                        (e.scheduled = requestAnimationFrame(function () {
                          return e.flush(null);
                        })));
                },
              },
              {
                key: 'recycleAsyncId',
                value: function (e, t) {
                  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                  if ((null !== r && r > 0) || (null === r && this.delay > 0))
                    return _get(_getPrototypeOf(n.prototype), 'recycleAsyncId', this).call(
                      this,
                      e,
                      t,
                      r
                    );
                  0 === e.actions.length && (cancelAnimationFrame(t), (e.scheduled = void 0));
                },
              },
            ]),
            n
          );
        })(Hd),
        Bd = (function () {
          var e = (function () {
            function e(t) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.now;
              _classCallCheck(this, e), (this.SchedulerAction = t), (this.now = n);
            }
            return (
              _createClass(e, [
                {
                  key: 'schedule',
                  value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                      n = arguments.length > 2 ? arguments[2] : void 0;
                    return new this.SchedulerAction(this, e).schedule(n, t);
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.now = function () {
              return Date.now();
            }),
            e
          );
        })(),
        qd = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e) {
            var r,
              i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bd.now;
            return (
              _classCallCheck(this, n),
              ((r = t.call(this, e, function () {
                return n.delegate && n.delegate !== _assertThisInitialized(r)
                  ? n.delegate.now()
                  : i();
              })).actions = []),
              (r.active = !1),
              (r.scheduled = void 0),
              r
            );
          }
          return (
            _createClass(n, [
              {
                key: 'schedule',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    r = arguments.length > 2 ? arguments[2] : void 0;
                  return n.delegate && n.delegate !== this
                    ? n.delegate.schedule(e, t, r)
                    : _get(_getPrototypeOf(n.prototype), 'schedule', this).call(this, e, t, r);
                },
              },
              {
                key: 'flush',
                value: function (e) {
                  var t = this.actions;
                  if (this.active) t.push(e);
                  else {
                    var n;
                    this.active = !0;
                    do {
                      if ((n = e.execute(e.state, e.delay))) break;
                    } while ((e = t.shift()));
                    if (((this.active = !1), n)) {
                      for (; (e = t.shift()); ) e.unsubscribe();
                      throw n;
                    }
                  }
                },
              },
            ]),
            n
          );
        })(Bd),
        Gd = new ((function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n() {
            return _classCallCheck(this, n), t.apply(this, arguments);
          }
          return (
            _createClass(n, [
              {
                key: 'flush',
                value: function (e) {
                  (this.active = !0), (this.scheduled = void 0);
                  var t,
                    n = this.actions,
                    r = -1,
                    i = n.length;
                  e = e || n.shift();
                  do {
                    if ((t = e.execute(e.state, e.delay))) break;
                  } while (++r < i && (e = n.shift()));
                  if (((this.active = !1), t)) {
                    for (; ++r < i && (e = n.shift()); ) e.unsubscribe();
                    throw t;
                  }
                },
              },
            ]),
            n
          );
        })(qd))(zd);
      function $d(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n;
      }
      function Wd(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
      }
      function Zd(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
          case 'HTML':
          case 'BODY':
            return e.ownerDocument.body;
          case '#document':
            return e.body;
        }
        var t = $d(e),
          n = t.overflow,
          r = t.overflowX,
          i = t.overflowY;
        return /(auto|scroll|overlay)/.test(String(n) + String(i) + String(r)) ? e : Zd(Wd(e));
      }
      var Kd = 'undefined' != typeof window && 'undefined' != typeof document,
        Qd = Kd && !(!window.MSInputMethodContext || !document.documentMode),
        Yd = Kd && !(!window.MSInputMethodContext || !/MSIE 10/.test(navigator.userAgent));
      function Jd(e) {
        return 11 === e ? Qd : 10 === e ? Yd : Qd || Yd;
      }
      function Xd(e) {
        if (!e) return document.documentElement;
        for (
          var t, n = Jd(10) ? document.body : null, r = e.offsetParent || null;
          r === n && e.nextElementSibling && t !== e.nextElementSibling;

        )
          r = (t = e.nextElementSibling).offsetParent;
        var i = r && r.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i
          ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(r.nodeName) && 'static' === $d(r, 'position')
            ? Xd(r)
            : r
          : t
          ? t.ownerDocument.documentElement
          : document.documentElement;
      }
      function ef(e) {
        return null !== e.parentNode ? ef(e.parentNode) : e;
      }
      function tf(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
          r = n ? e : t,
          i = n ? t : e,
          a = document.createRange();
        a.setStart(r, 0), a.setEnd(i, 0);
        var o,
          l,
          u = a.commonAncestorContainer;
        if ((e !== u && t !== u) || r.contains(i))
          return 'BODY' === (l = (o = u).nodeName) ||
            ('HTML' !== l && Xd(o.firstElementChild) !== o)
            ? Xd(u)
            : u;
        var s = ef(e);
        return s.host ? tf(s.host, t) : tf(e, ef(t).host);
      }
      function nf(e, t) {
        var n = 'x' === t ? 'Left' : 'Top',
          r = 'Left' === n ? 'Right' : 'Bottom';
        return (
          parseFloat(e['border'.concat(n, 'Width')]) + parseFloat(e['border'.concat(r, 'Width')])
        );
      }
      function rf(e, t, n, r) {
        return Math.max(
          t['offset' + e],
          t['scroll' + e],
          n['client' + e],
          n['offset' + e],
          n['scroll' + e],
          Jd(10)
            ? parseInt(n['offset' + e], 10) +
                parseInt(r['margin' + ('Height' === e ? 'Top' : 'Left')], 10) +
                parseInt(r['margin' + ('Height' === e ? 'Bottom' : 'Right')], 10)
            : 0
        );
      }
      function af(e) {
        var t = e.body,
          n = e.documentElement,
          r = Jd(10) && getComputedStyle(n);
        return { height: rf('Height', t, n, r), width: rf('Width', t, n, r) };
      }
      function of(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'top',
          n = 'top' === t ? 'scrollTop' : 'scrollLeft',
          r = e.nodeName;
        if ('BODY' === r || 'HTML' === r) {
          var i = e.ownerDocument.documentElement;
          return (e.ownerDocument.scrollingElement || i)[n];
        }
        return e[n];
      }
      function lf(e) {
        return Object.assign({}, e, { right: e.left + e.width, bottom: e.top + e.height });
      }
      function uf(e) {
        var t = {};
        try {
          if (Jd(10)) {
            t = e.getBoundingClientRect();
            var n = of(e, 'top'),
              r = of(e, 'left');
            (t.top += n), (t.left += r), (t.bottom += n), (t.right += r);
          } else t = e.getBoundingClientRect();
        } catch (s) {
          return;
        }
        var i = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
          a = 'HTML' === e.nodeName ? af(e.ownerDocument) : {},
          o = e.offsetWidth - (a.width || e.clientWidth || i.right - i.left),
          l = e.offsetHeight - (a.height || e.clientHeight || i.bottom - i.top);
        if (o || l) {
          var u = $d(e);
          (o -= nf(u, 'x')), (l -= nf(u, 'y')), (i.width -= o), (i.height -= l);
        }
        return lf(i);
      }
      function sf(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = Jd(10),
          i = 'HTML' === t.nodeName,
          a = uf(e),
          o = uf(t),
          l = Zd(e),
          u = $d(t),
          s = parseFloat(u.borderTopWidth),
          c = parseFloat(u.borderLeftWidth);
        n && i && ((o.top = Math.max(o.top, 0)), (o.left = Math.max(o.left, 0)));
        var h = lf({
          top: a.top - o.top - s,
          left: a.left - o.left - c,
          width: a.width,
          height: a.height,
        });
        if (((h.marginTop = 0), (h.marginLeft = 0), !r && i)) {
          var d = parseFloat(u.marginTop),
            f = parseFloat(u.marginLeft);
          (h.top -= s - d),
            (h.bottom -= s - d),
            (h.left -= c - f),
            (h.right -= c - f),
            (h.marginTop = d),
            (h.marginLeft = f);
        }
        return (
          (r && !n ? t.contains(l) : t === l && 'BODY' !== l.nodeName) &&
            (h = (function (e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = of(t, 'top'),
                i = of(t, 'left'),
                a = n ? -1 : 1;
              return (
                (e.top += r * a), (e.bottom += r * a), (e.left += i * a), (e.right += i * a), e
              );
            })(h, t)),
          h
        );
      }
      function cf(e) {
        if (!e || !e.parentElement || Jd()) return document.documentElement;
        for (var t = e.parentElement; t && 'none' === $d(t, 'transform'); ) t = t.parentElement;
        return t || document.documentElement;
      }
      function hf(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = arguments.length > 3 ? arguments[3] : void 0,
          i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          a = { top: 0, left: 0 },
          o = i ? cf(e) : tf(e, t);
        if ('viewport' === r)
          a = (function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = e.ownerDocument.documentElement,
              r = sf(e, n),
              i = Math.max(n.clientWidth, window.innerWidth || 0),
              a = Math.max(n.clientHeight, window.innerHeight || 0),
              o = t ? 0 : of(n),
              l = t ? 0 : of(n, 'left');
            return lf({
              top: o - Number(r.top) + Number(r.marginTop),
              left: l - Number(r.left) + Number(r.marginLeft),
              width: i,
              height: a,
            });
          })(o, i);
        else {
          var l;
          'scrollParent' === r
            ? 'BODY' === (l = Zd(Wd(t))).nodeName && (l = e.ownerDocument.documentElement)
            : (l = 'window' === r ? e.ownerDocument.documentElement : r);
          var u = sf(l, o, i);
          if (
            'HTML' !== l.nodeName ||
            (function e(t) {
              var n = t.nodeName;
              return 'BODY' !== n && 'HTML' !== n && ('fixed' === $d(t, 'position') || e(Wd(t)));
            })(o)
          )
            a = u;
          else {
            var s = af(e.ownerDocument),
              c = s.height,
              h = s.width;
            (a.top += u.top - u.marginTop),
              (a.bottom = Number(c) + Number(u.top)),
              (a.left += u.left - u.marginLeft),
              (a.right = Number(h) + Number(u.left));
          }
        }
        return (a.left += n), (a.top += n), (a.right -= n), (a.bottom -= n), a;
      }
      function df(e) {
        return e.width * e.height;
      }
      function ff(e, t, n, r) {
        var i =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : ['top', 'bottom', 'right', 'left'],
          a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 'viewport',
          o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        if (-1 === e.indexOf('auto')) return e;
        var l = hf(n, r, o, a),
          u = {
            top: { width: l.width, height: t.top - l.top },
            right: { width: l.right - t.right, height: l.height },
            bottom: { width: l.width, height: l.bottom - t.bottom },
            left: { width: t.left - l.left, height: l.height },
          },
          s = Object.keys(u)
            .map(function (e) {
              return Object.assign({ key: e }, u[e], { area: df(u[e]) });
            })
            .sort(function (e, t) {
              return t.area - e.area;
            }),
          c = s.filter(function (e) {
            var t = e.width,
              r = e.height;
            return t >= n.clientWidth && r >= n.clientHeight;
          }),
          h =
            (c = c.filter(function (e) {
              return i.some(function (t) {
                return t === e.key;
              });
            })).length > 0
              ? c[0].key
              : s[0].key,
          d = e.split(' ')[1];
        return (
          (n.className = n.className.replace(/bs-tooltip-auto/g, 'bs-tooltip-' + h)),
          h + (d ? '-' + d : '')
        );
      }
      function pf(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
          n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
          r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return { width: Number(e.offsetWidth) + r, height: Number(e.offsetHeight) + n };
      }
      function vf(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return sf(t, n ? cf(e) : tf(e, t), n);
      }
      function gf(e, t, n) {
        var r = n.split(' ')[0],
          i = pf(e),
          a = { width: i.width, height: i.height },
          o = -1 !== ['right', 'left'].indexOf(r),
          l = o ? 'top' : 'left',
          u = o ? 'left' : 'top',
          s = o ? 'height' : 'width',
          c = o ? 'width' : 'height';
        return (
          (a[l] = t[l] + t[s] / 2 - i[s] / 2),
          (a[u] =
            r === u
              ? t[u] - i[c]
              : t[
                  (function (e) {
                    var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
                    return e.replace(/left|right|bottom|top/g, function (e) {
                      return t[e];
                    });
                  })(u)
                ]),
          a
        );
      }
      function mf(e, t) {
        return e && e.modifiers && e.modifiers[t] && e.modifiers[t].enabled;
      }
      function yf(e, t, n) {
        Object.keys(t).forEach(function (r) {
          var i,
            a = '';
          -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(r) &&
            '' !== (i = t[r]) &&
            !isNaN(parseFloat(i)) &&
            isFinite(i) &&
            (a = 'px'),
            n
              ? n.setStyle(e, r, ''.concat(String(t[r])).concat(a))
              : (e.style[r] = String(t[r]) + a);
        });
      }
      function _f(e) {
        var t,
          n = e.offsets.target,
          r = e.instance.target.querySelector('.arrow');
        if (!r) return e;
        var i = -1 !== ['left', 'right'].indexOf(e.placement.split(' ')[0]),
          a = i ? 'height' : 'width',
          o = i ? 'Top' : 'Left',
          l = o.toLowerCase(),
          u = i ? 'left' : 'top',
          s = i ? 'bottom' : 'right',
          c = pf(r)[a],
          h = e.placement.split(' ')[1];
        e.offsets.host[s] - c < n[l] && (n[l] -= n[l] - (e.offsets.host[s] - c)),
          Number(e.offsets.host[l]) + Number(c) > n[s] &&
            (n[l] += Number(e.offsets.host[l]) + Number(c) - Number(n[s])),
          (n = lf(n));
        var d,
          f = $d(e.instance.target),
          p = parseFloat(f['margin' + o]),
          v = parseFloat(f['border'.concat(o, 'Width')]);
        if (h) {
          var g = parseFloat(f.borderRadius),
            m = Number(p + v + g);
          d =
            l === h
              ? Number(e.offsets.host[l]) + m
              : Number(e.offsets.host[l]) + Number(e.offsets.host[a] - m);
        } else d = Number(e.offsets.host[l]) + Number(e.offsets.host[a] / 2 - c / 2);
        var y = d - n[l] - p - v;
        return (
          (y = Math.max(Math.min(n[a] - c, y), 0)),
          (e.offsets.arrow =
            (_defineProperty((t = {}), l, Math.round(y)), _defineProperty(t, u, ''), t)),
          (e.instance.arrow = r),
          e
        );
      }
      function Cf(e) {
        if (((e.offsets.target = lf(e.offsets.target)), !mf(e.options, 'flip')))
          return (
            (e.offsets.target = Object.assign(
              {},
              e.offsets.target,
              gf(e.instance.target, e.offsets.host, e.placement)
            )),
            e
          );
        var t = hf(e.instance.target, e.instance.host, 0, 'viewport', !1),
          n = e.placement.split(' ')[0],
          r = e.placement.split(' ')[1] || '',
          i = ff(
            'auto',
            e.offsets.host,
            e.instance.target,
            e.instance.host,
            e.options.allowedPositions
          ),
          a = [n, i];
        return (
          a.forEach(function (i, o) {
            if (n !== i || a.length === o + 1) return e;
            var l =
                ('left' === (n = e.placement.split(' ')[0]) &&
                  Math.floor(e.offsets.target.right) > Math.floor(e.offsets.host.left)) ||
                ('right' === n &&
                  Math.floor(e.offsets.target.left) < Math.floor(e.offsets.host.right)) ||
                ('top' === n &&
                  Math.floor(e.offsets.target.bottom) > Math.floor(e.offsets.host.top)) ||
                ('bottom' === n &&
                  Math.floor(e.offsets.target.top) < Math.floor(e.offsets.host.bottom)),
              u = Math.floor(e.offsets.target.left) < Math.floor(t.left),
              s = Math.floor(e.offsets.target.right) > Math.floor(t.right),
              c = Math.floor(e.offsets.target.top) < Math.floor(t.top),
              h = Math.floor(e.offsets.target.bottom) > Math.floor(t.bottom),
              d =
                ('left' === n && u) ||
                ('right' === n && s) ||
                ('top' === n && c) ||
                ('bottom' === n && h),
              f = -1 !== ['top', 'bottom'].indexOf(n),
              p =
                (f && 'left' === r && u) ||
                (f && 'right' === r && s) ||
                (!f && 'left' === r && c) ||
                (!f && 'right' === r && h);
            (l || d || p) &&
              ((l || d) && (n = a[o + 1]),
              p &&
                (r = (function (e) {
                  return 'right' === e ? 'left' : 'left' === e ? 'right' : e;
                })(r)),
              (e.placement = n + (r ? ' ' + r : '')),
              (e.offsets.target = Object.assign(
                {},
                e.offsets.target,
                gf(e.instance.target, e.offsets.host, e.placement)
              )));
          }),
          e
        );
      }
      function kf(e) {
        if (!mf(e.options, 'preventOverflow')) return e;
        var t = e.instance.target.style,
          n = t.top,
          r = t.left,
          i = t.transform;
        (t.top = ''), (t.left = ''), (t.transform = '');
        var a = hf(e.instance.target, e.instance.host, 0, 'scrollParent', !1);
        (t.top = n), (t.left = r), (t.transform = i);
        var o,
          l = {
            primary: function (t) {
              var n = e.offsets.target[t];
              return (
                e.offsets.target[t] < a[t] && (n = Math.max(e.offsets.target[t], a[t])),
                _defineProperty({}, t, n)
              );
            },
            secondary: function (t) {
              var n = 'right' === t ? 'left' : 'top',
                r = e.offsets.target[n];
              return (
                e.offsets.target[t] > a[t] &&
                  (r = Math.min(
                    e.offsets.target[n],
                    a[t] - ('right' === t ? e.offsets.target.width : e.offsets.target.height)
                  )),
                _defineProperty({}, n, r)
              );
            },
          };
        return (
          ['left', 'right', 'top', 'bottom'].forEach(function (t) {
            (o = -1 !== ['left', 'top'].indexOf(t) ? 'primary' : 'secondary'),
              (e.offsets.target = Object.assign({}, e.offsets.target, l[o](t)));
          }),
          e
        );
      }
      function bf(e) {
        var t = e.placement,
          n = t.split(' ')[0],
          r = t.split(' ')[1];
        if (r) {
          var i = e.offsets,
            a = i.host,
            o = i.target,
            l = -1 !== ['bottom', 'top'].indexOf(n),
            u = l ? 'left' : 'top',
            s = l ? 'width' : 'height',
            c = {
              start: _defineProperty({}, u, a[u]),
              end: _defineProperty({}, u, a[u] + a[s] - o[s]),
            };
          e.offsets.target = Object.assign(
            {},
            o,
            _defineProperty({}, u, u === r ? c.start[u] : c.end[u])
          );
        }
        return e;
      }
      var wf = new ((function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: 'position',
                value: function (e, t) {
                  !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                  return this.offset(e, t, !1);
                },
              },
              {
                key: 'offset',
                value: function (e, t) {
                  !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                  return vf(t, e);
                },
              },
              {
                key: 'positionElements',
                value: function (e, t, n, r, i) {
                  return [Cf, bf, kf, _f].reduce(
                    function (e, t) {
                      return t(e);
                    },
                    (function (e, t, n, r) {
                      var i = vf(e, t);
                      n.match(/^(auto)*\s*(left|right|top|bottom)*$/) ||
                        n.match(
                          /^(left|right|top|bottom)*(?: (left|right|top|bottom))?\s*(start|end)*$/
                        ) ||
                        (n = 'auto');
                      var a = !!n.match(/auto/g),
                        o = n.match(/auto\s(left|right|top|bottom)/)
                          ? n.split(' ')[1] || 'auto'
                          : n,
                        l = o.match(/^(left|right|top|bottom)* ?(?!\1)(left|right|top|bottom)?/);
                      return (
                        l && (o = l[1] + (l[2] ? ' ' + l[2] : '')),
                        -1 !==
                          ['left right', 'right left', 'top bottom', 'bottom top'].indexOf(o) &&
                          (o = 'auto'),
                        {
                          options: r,
                          instance: { target: e, host: t, arrow: null },
                          offsets: { target: gf(e, i, o), host: i, arrow: null },
                          positionFixed: !1,
                          placement: (o = ff(o, i, e, t, r ? r.allowedPositions : void 0)),
                          placementAuto: a,
                        }
                      );
                    })(t, e, n, i)
                  );
                },
              },
            ]),
            e
          );
        })())(),
        xf = (function () {
          function e(t, n, r) {
            var i = this;
            _classCallCheck(this, e),
              (this.update$$ = new R()),
              (this.positionElements = new Map()),
              (this.isDisabled = !1),
              (function (e) {
                return 'browser' === e;
              })(r) &&
                t.runOutsideAngular(function () {
                  (i.triggerEvent$ = ee(
                    jd(window, 'scroll', { passive: !0 }),
                    jd(window, 'resize', { passive: !0 }),
                    ql(0, Gd),
                    i.update$$
                  )),
                    i.triggerEvent$.subscribe(function () {
                      i.isDisabled ||
                        i.positionElements.forEach(function (e) {
                          !(function (e, t, n, r, i, a) {
                            var o = wf.positionElements(e, t, n, r, i),
                              l = (function (e) {
                                return {
                                  width: e.offsets.target.width,
                                  height: e.offsets.target.height,
                                  left: Math.floor(e.offsets.target.left),
                                  top: Math.round(e.offsets.target.top),
                                  bottom: Math.round(e.offsets.target.bottom),
                                  right: Math.floor(e.offsets.target.right),
                                };
                              })(o);
                            yf(
                              t,
                              {
                                'will-change': 'transform',
                                top: '0px',
                                left: '0px',
                                transform: 'translate3d('
                                  .concat(l.left, 'px, ')
                                  .concat(l.top, 'px, 0px)'),
                              },
                              a
                            ),
                              o.instance.arrow && yf(o.instance.arrow, o.offsets.arrow, a),
                              (function (e, t) {
                                var n = e.instance.target,
                                  r = n.className;
                                e.placementAuto &&
                                  (-1 !==
                                    (r = (r = (r = r.replace(
                                      /bs-popover-auto/g,
                                      'bs-popover-' + e.placement
                                    )).replace(
                                      /bs-tooltip-auto/g,
                                      'bs-tooltip-' + e.placement
                                    )).replace(/\sauto/g, ' ' + e.placement)).indexOf('popover') &&
                                    -1 === r.indexOf('popover-auto') &&
                                    (r += ' popover-auto'),
                                  -1 !== r.indexOf('tooltip') &&
                                    -1 === r.indexOf('tooltip-auto') &&
                                    (r += ' tooltip-auto')),
                                  (r = r.replace(
                                    /left|right|top|bottom/g,
                                    '' + e.placement.split(' ')[0]
                                  )),
                                  t ? t.setAttribute(n, 'class', r) : (n.className = r);
                              })(o, a);
                          })(
                            Sf(e.target),
                            Sf(e.element),
                            e.attachment,
                            e.appendToBody,
                            i.options,
                            n.createRenderer(null, null)
                          );
                        });
                    });
                });
          }
          return (
            _createClass(e, [
              {
                key: 'position',
                value: function (e) {
                  this.addPositionElement(e);
                },
              },
              {
                key: 'disable',
                value: function () {
                  this.isDisabled = !0;
                },
              },
              {
                key: 'enable',
                value: function () {
                  this.isDisabled = !1;
                },
              },
              {
                key: 'addPositionElement',
                value: function (e) {
                  this.positionElements.set(Sf(e.element), e);
                },
              },
              {
                key: 'calcPosition',
                value: function () {
                  this.update$$.next();
                },
              },
              {
                key: 'deletePositionElement',
                value: function (e) {
                  this.positionElements.delete(Sf(e));
                },
              },
              {
                key: 'setOptions',
                value: function (e) {
                  this.options = e;
                },
              },
              {
                key: 'event$',
                get: function () {
                  return this.triggerEvent$;
                },
              },
            ]),
            e
          );
        })();
      function Sf(e) {
        return 'string' == typeof e
          ? document.querySelector(e)
          : e instanceof Qt
          ? e.nativeElement
          : e;
      }
      var Ef = new qd(Hd);
      function Tf(e) {
        return !u(e) && e - parseFloat(e) + 1 >= 0;
      }
      function Pf(e) {
        var t = e.index,
          n = e.period,
          r = e.subscriber;
        if ((r.next(t), !r.closed)) {
          if (-1 === n) return r.complete();
          (e.index = t + 1), this.schedule(e, n);
        }
      }
      var Af,
        Rf = function e() {
          _classCallCheck(this, e),
            (this.adaptivePosition = !0),
            (this.placement = 'top'),
            (this.triggers = 'hover focus'),
            (this.delay = 0);
        },
        If = (function () {
          function e(t) {
            _classCallCheck(this, e), Object.assign(this, t);
          }
          return (
            _createClass(e, [
              {
                key: 'ngAfterViewInit',
                value: function () {
                  (this.classMap = { in: !1, fade: !1 }),
                    (this.classMap[this.placement] = !0),
                    (this.classMap['tooltip-' + this.placement] = !0),
                    (this.classMap.in = !0),
                    this.animation && (this.classMap.fade = !0),
                    this.containerClass && (this.classMap[this.containerClass] = !0);
                },
              },
              {
                key: 'isBs3',
                get: function () {
                  return (
                    void 0 === Od ||
                    (void 0 === Od.__theme
                      ? (Id ||
                          (Id = (function () {
                            if ('undefined' == typeof document) return null;
                            var e = document.createElement('span');
                            (e.innerText = 'test bs version'),
                              document.body.appendChild(e),
                              e.classList.add('d-none');
                            var t = e.getBoundingClientRect();
                            return document.body.removeChild(e), t && 0 === t.top ? 'bs4' : 'bs3';
                          })()),
                        'bs3' === Id)
                      : 'bs4' !== Od.__theme)
                  );
                },
              },
            ]),
            e
          );
        })(),
        Of = 0,
        Df =
          ((Af = (function () {
            function e(t, n, r, i, a, o) {
              _classCallCheck(this, e),
                (this._elementRef = i),
                (this._renderer = a),
                (this._positionService = o),
                (this.tooltipId = Of++),
                (this.tooltipChange = new yi()),
                (this.containerClass = ''),
                (this.tooltipAnimation = !0),
                (this.tooltipFadeDuration = 150),
                (this.tooltipStateChanged = new yi()),
                (this._tooltip = n
                  .createLoader(this._elementRef, t, this._renderer)
                  .provide({ provide: Rf, useValue: r })),
                Object.assign(this, r),
                (this.onShown = this._tooltip.onShown),
                (this.onHidden = this._tooltip.onHidden);
            }
            return (
              _createClass(e, [
                {
                  key: 'ngOnInit',
                  value: function () {
                    var e = this;
                    this._tooltip.listen({
                      triggers: this.triggers,
                      show: function () {
                        return e.show();
                      },
                    }),
                      this.tooltipChange.subscribe(function (t) {
                        t || e._tooltip.hide();
                      }),
                      this.onShown.subscribe(function () {
                        e.setAriaDescribedBy();
                      }),
                      this.onHidden.subscribe(function () {
                        e.setAriaDescribedBy();
                      });
                  },
                },
                {
                  key: 'setAriaDescribedBy',
                  value: function () {
                    (this._ariaDescribedby = this.isOpen ? 'tooltip-' + this.tooltipId : null),
                      this._ariaDescribedby
                        ? this._renderer.setAttribute(
                            this._elementRef.nativeElement,
                            'aria-describedby',
                            this._ariaDescribedby
                          )
                        : this._renderer.removeAttribute(
                            this._elementRef.nativeElement,
                            'aria-describedby'
                          );
                  },
                },
                {
                  key: 'toggle',
                  value: function () {
                    if (this.isOpen) return this.hide();
                    this.show();
                  },
                },
                {
                  key: 'show',
                  value: function () {
                    var e = this;
                    if (
                      (this._positionService.setOptions({
                        modifiers: {
                          flip: { enabled: this.adaptivePosition },
                          preventOverflow: { enabled: this.adaptivePosition },
                        },
                      }),
                      !(this.isOpen || this.isDisabled || this._delayTimeoutId) && this.tooltip)
                    ) {
                      var t = function () {
                          e._delayTimeoutId && (e._delayTimeoutId = void 0),
                            e._tooltip
                              .attach(If)
                              .to(e.container)
                              .position({ attachment: e.placement })
                              .show({
                                content: e.tooltip,
                                placement: e.placement,
                                containerClass: e.containerClass,
                                id: 'tooltip-' + e.tooltipId,
                              });
                        },
                        n = function () {
                          e._tooltipCancelShowFn && e._tooltipCancelShowFn();
                        };
                      this.delay
                        ? (this._delaySubscription && this._delaySubscription.unsubscribe(),
                          (this._delaySubscription = (function () {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                              t = arguments.length > 1 ? arguments[1] : void 0,
                              n = arguments.length > 2 ? arguments[2] : void 0,
                              r = -1;
                            return (
                              Tf(t) ? (r = Number(t) < 1 ? 1 : Number(t)) : O(t) && (n = t),
                              O(n) || (n = Ef),
                              new w(function (t) {
                                var i = Tf(e) ? e : +e - n.now();
                                return n.schedule(Pf, i, { index: 0, period: r, subscriber: t });
                              })
                            );
                          })(this.delay).subscribe(function () {
                            t(), n();
                          })),
                          this.triggers &&
                            Rd(this.triggers).forEach(function (t) {
                              e._tooltipCancelShowFn = e._renderer.listen(
                                e._elementRef.nativeElement,
                                t.close,
                                function () {
                                  e._delaySubscription.unsubscribe(), n();
                                }
                              );
                            }))
                        : t();
                    }
                  },
                },
                {
                  key: 'hide',
                  value: function () {
                    var e = this;
                    this._delayTimeoutId &&
                      (clearTimeout(this._delayTimeoutId), (this._delayTimeoutId = void 0)),
                      this._tooltip.isShown &&
                        ((this._tooltip.instance.classMap.in = !1),
                        setTimeout(function () {
                          e._tooltip.hide();
                        }, this.tooltipFadeDuration));
                  },
                },
                {
                  key: 'ngOnDestroy',
                  value: function () {
                    this._tooltip.dispose(),
                      this.tooltipChange.unsubscribe(),
                      this._delaySubscription && this._delaySubscription.unsubscribe(),
                      this.onShown.unsubscribe(),
                      this.onHidden.unsubscribe();
                  },
                },
                {
                  key: 'isOpen',
                  get: function () {
                    return this._tooltip.isShown;
                  },
                  set: function (e) {
                    e ? this.show() : this.hide();
                  },
                },
                {
                  key: 'htmlContent',
                  set: function (e) {
                    Md('tooltipHtml was deprecated, please use `tooltip` instead'),
                      (this.tooltip = e);
                  },
                },
                {
                  key: '_placement',
                  set: function (e) {
                    Md('tooltipPlacement was deprecated, please use `placement` instead'),
                      (this.placement = e);
                  },
                },
                {
                  key: '_isOpen',
                  set: function (e) {
                    Md('tooltipIsOpen was deprecated, please use `isOpen` instead'),
                      (this.isOpen = e);
                  },
                  get: function () {
                    return (
                      Md('tooltipIsOpen was deprecated, please use `isOpen` instead'), this.isOpen
                    );
                  },
                },
                {
                  key: '_enable',
                  set: function (e) {
                    Md('tooltipEnable was deprecated, please use `isDisabled` instead'),
                      (this.isDisabled = !e);
                  },
                  get: function () {
                    return (
                      Md('tooltipEnable was deprecated, please use `isDisabled` instead'),
                      this.isDisabled
                    );
                  },
                },
                {
                  key: '_appendToBody',
                  set: function (e) {
                    Md('tooltipAppendToBody was deprecated, please use `container="body"` instead'),
                      (this.container = e ? 'body' : this.container);
                  },
                  get: function () {
                    return (
                      Md(
                        'tooltipAppendToBody was deprecated, please use `container="body"` instead'
                      ),
                      'body' === this.container
                    );
                  },
                },
                {
                  key: '_popupClass',
                  set: function (e) {
                    Md('tooltipClass deprecated');
                  },
                },
                {
                  key: '_tooltipContext',
                  set: function (e) {
                    Md('tooltipContext deprecated');
                  },
                },
                {
                  key: '_tooltipPopupDelay',
                  set: function (e) {
                    Md('tooltipPopupDelay is deprecated, use `delay` instead'), (this.delay = e);
                  },
                },
                {
                  key: '_tooltipTrigger',
                  get: function () {
                    return (
                      Md('tooltipTrigger was deprecated, please use `triggers` instead'),
                      this.triggers
                    );
                  },
                  set: function (e) {
                    Md('tooltipTrigger was deprecated, please use `triggers` instead'),
                      (this.triggers = (e || '').toString());
                  },
                },
              ]),
              e
            );
          })()),
          (function (e, t, n, r) {
            var i,
              a = arguments.length,
              o = a < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
              o = Reflect.decorate(e, t, n, r);
            else
              for (var l = e.length - 1; l >= 0; l--)
                (i = e[l]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
            a > 3 && o && Object.defineProperty(t, n, o);
          })(
            [
              function (e, t) {
                var n = ' __'.concat(t, 'Value');
                Object.defineProperty(e, t, {
                  get: function () {
                    return this[n];
                  },
                  set: function (e) {
                    var r = this[n];
                    (this[n] = e), r !== e && this[t + 'Change'] && this[t + 'Change'].emit(e);
                  },
                });
              },
              Nd('design:type', Object),
            ],
            Af.prototype,
            'tooltip',
            void 0
          ),
          Af),
        Vf = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, null, [
              {
                key: 'forRoot',
                value: function () {
                  return { ngModule: e, providers: [Rf, Ud, xf] };
                },
              },
            ]),
            e
          );
        })(),
        Mf = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            _classCallCheck(this, n),
              ((i = t.call(this, e)).sources = r),
              (i.completed = 0),
              (i.haveValues = 0);
            var a = r.length;
            i.values = new Array(a);
            for (var o = 0; o < a; o++) {
              var l = z(_assertThisInitialized(i), r[o], null, o);
              l && i.add(l);
            }
            return i;
          }
          return (
            _createClass(n, [
              {
                key: 'notifyNext',
                value: function (e, t, n, r, i) {
                  (this.values[n] = t), i._hasValue || ((i._hasValue = !0), this.haveValues++);
                },
              },
              {
                key: 'notifyComplete',
                value: function (e) {
                  var t = this.destination,
                    n = this.haveValues,
                    r = this.values,
                    i = r.length;
                  e._hasValue
                    ? (this.completed++,
                      this.completed === i && (n === i && t.next(r), t.complete()))
                    : t.complete();
                },
              },
            ]),
            n
          );
        })(B),
        Nf = new Te('NgValueAccessor'),
        Lf = new Te('CompositionEventMode'),
        Ff = (function () {
          function e(t, n, r) {
            var i;
            _classCallCheck(this, e),
              (this._renderer = t),
              (this._elementRef = n),
              (this._compositionMode = r),
              (this.onChange = function (e) {}),
              (this.onTouched = function () {}),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode =
                  ((i = Mu() ? Mu().getUserAgent() : ''), !/android (\d+)/.test(i.toLowerCase())));
          }
          return (
            _createClass(e, [
              {
                key: 'writeValue',
                value: function (e) {
                  this._renderer.setProperty(
                    this._elementRef.nativeElement,
                    'value',
                    null == e ? '' : e
                  );
                },
              },
              {
                key: 'registerOnChange',
                value: function (e) {
                  this.onChange = e;
                },
              },
              {
                key: 'registerOnTouched',
                value: function (e) {
                  this.onTouched = e;
                },
              },
              {
                key: 'setDisabledState',
                value: function (e) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', e);
                },
              },
              {
                key: '_handleInput',
                value: function (e) {
                  (!this._compositionMode || (this._compositionMode && !this._composing)) &&
                    this.onChange(e);
                },
              },
              {
                key: '_compositionStart',
                value: function () {
                  this._composing = !0;
                },
              },
              {
                key: '_compositionEnd',
                value: function (e) {
                  (this._composing = !1), this._compositionMode && this.onChange(e);
                },
              },
            ]),
            e
          );
        })(),
        Uf = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: 'reset',
                value: function (e) {
                  this.control && this.control.reset(e);
                },
              },
              {
                key: 'hasError',
                value: function (e, t) {
                  return !!this.control && this.control.hasError(e, t);
                },
              },
              {
                key: 'getError',
                value: function (e, t) {
                  return this.control ? this.control.getError(e, t) : null;
                },
              },
              {
                key: 'value',
                get: function () {
                  return this.control ? this.control.value : null;
                },
              },
              {
                key: 'valid',
                get: function () {
                  return this.control ? this.control.valid : null;
                },
              },
              {
                key: 'invalid',
                get: function () {
                  return this.control ? this.control.invalid : null;
                },
              },
              {
                key: 'pending',
                get: function () {
                  return this.control ? this.control.pending : null;
                },
              },
              {
                key: 'disabled',
                get: function () {
                  return this.control ? this.control.disabled : null;
                },
              },
              {
                key: 'enabled',
                get: function () {
                  return this.control ? this.control.enabled : null;
                },
              },
              {
                key: 'errors',
                get: function () {
                  return this.control ? this.control.errors : null;
                },
              },
              {
                key: 'pristine',
                get: function () {
                  return this.control ? this.control.pristine : null;
                },
              },
              {
                key: 'dirty',
                get: function () {
                  return this.control ? this.control.dirty : null;
                },
              },
              {
                key: 'touched',
                get: function () {
                  return this.control ? this.control.touched : null;
                },
              },
              {
                key: 'status',
                get: function () {
                  return this.control ? this.control.status : null;
                },
              },
              {
                key: 'untouched',
                get: function () {
                  return this.control ? this.control.untouched : null;
                },
              },
              {
                key: 'statusChanges',
                get: function () {
                  return this.control ? this.control.statusChanges : null;
                },
              },
              {
                key: 'valueChanges',
                get: function () {
                  return this.control ? this.control.valueChanges : null;
                },
              },
              {
                key: 'path',
                get: function () {
                  return null;
                },
              },
            ]),
            e
          );
        })(),
        jf = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n() {
            return _classCallCheck(this, n), t.apply(this, arguments);
          }
          return (
            _createClass(n, [
              {
                key: 'formDirective',
                get: function () {
                  return null;
                },
              },
              {
                key: 'path',
                get: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(Uf);
      function Hf() {
        throw new Error('unimplemented');
      }
      var zf = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n() {
            var e;
            return (
              _classCallCheck(this, n),
              ((e = t.apply(this, arguments))._parent = null),
              (e.name = null),
              (e.valueAccessor = null),
              (e._rawValidators = []),
              (e._rawAsyncValidators = []),
              e
            );
          }
          return (
            _createClass(n, [
              {
                key: 'validator',
                get: function () {
                  return Hf();
                },
              },
              {
                key: 'asyncValidator',
                get: function () {
                  return Hf();
                },
              },
            ]),
            n
          );
        })(Uf),
        Bf = (function () {
          function e(t) {
            _classCallCheck(this, e), (this._cd = t);
          }
          return (
            _createClass(e, [
              {
                key: 'ngClassUntouched',
                get: function () {
                  return !!this._cd.control && this._cd.control.untouched;
                },
              },
              {
                key: 'ngClassTouched',
                get: function () {
                  return !!this._cd.control && this._cd.control.touched;
                },
              },
              {
                key: 'ngClassPristine',
                get: function () {
                  return !!this._cd.control && this._cd.control.pristine;
                },
              },
              {
                key: 'ngClassDirty',
                get: function () {
                  return !!this._cd.control && this._cd.control.dirty;
                },
              },
              {
                key: 'ngClassValid',
                get: function () {
                  return !!this._cd.control && this._cd.control.valid;
                },
              },
              {
                key: 'ngClassInvalid',
                get: function () {
                  return !!this._cd.control && this._cd.control.invalid;
                },
              },
              {
                key: 'ngClassPending',
                get: function () {
                  return !!this._cd.control && this._cd.control.pending;
                },
              },
            ]),
            e
          );
        })(),
        qf = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e) {
            return _classCallCheck(this, n), t.call(this, e);
          }
          return n;
        })(Bf),
        Gf = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e) {
            return _classCallCheck(this, n), t.call(this, e);
          }
          return n;
        })(Bf);
      function $f(e) {
        return null == e || 0 === e.length;
      }
      var Wf = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
        Zf = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, null, [
              {
                key: 'min',
                value: function (e) {
                  return function (t) {
                    if ($f(t.value) || $f(e)) return null;
                    var n = parseFloat(t.value);
                    return !isNaN(n) && n < e ? { min: { min: e, actual: t.value } } : null;
                  };
                },
              },
              {
                key: 'max',
                value: function (e) {
                  return function (t) {
                    if ($f(t.value) || $f(e)) return null;
                    var n = parseFloat(t.value);
                    return !isNaN(n) && n > e ? { max: { max: e, actual: t.value } } : null;
                  };
                },
              },
              {
                key: 'required',
                value: function (e) {
                  return $f(e.value) ? { required: !0 } : null;
                },
              },
              {
                key: 'requiredTrue',
                value: function (e) {
                  return !0 === e.value ? null : { required: !0 };
                },
              },
              {
                key: 'email',
                value: function (e) {
                  return $f(e.value) || Wf.test(e.value) ? null : { email: !0 };
                },
              },
              {
                key: 'minLength',
                value: function (e) {
                  return function (t) {
                    if ($f(t.value)) return null;
                    var n = t.value ? t.value.length : 0;
                    return n < e ? { minlength: { requiredLength: e, actualLength: n } } : null;
                  };
                },
              },
              {
                key: 'maxLength',
                value: function (e) {
                  return function (t) {
                    var n = t.value ? t.value.length : 0;
                    return n > e ? { maxlength: { requiredLength: e, actualLength: n } } : null;
                  };
                },
              },
              {
                key: 'pattern',
                value: function (t) {
                  return t
                    ? ('string' == typeof t
                        ? ((r = ''),
                          '^' !== t.charAt(0) && (r += '^'),
                          (r += t),
                          '$' !== t.charAt(t.length - 1) && (r += '$'),
                          (n = new RegExp(r)))
                        : ((r = t.toString()), (n = t)),
                      function (e) {
                        if ($f(e.value)) return null;
                        var t = e.value;
                        return n.test(t)
                          ? null
                          : { pattern: { requiredPattern: r, actualValue: t } };
                      })
                    : e.nullValidator;
                  var n, r;
                },
              },
              {
                key: 'nullValidator',
                value: function (e) {
                  return null;
                },
              },
              {
                key: 'compose',
                value: function (e) {
                  if (!e) return null;
                  var t = e.filter(Kf);
                  return 0 == t.length
                    ? null
                    : function (e) {
                        return Yf(
                          (function (e, t) {
                            return t.map(function (t) {
                              return t(e);
                            });
                          })(e, t)
                        );
                      };
                },
              },
              {
                key: 'composeAsync',
                value: function (e) {
                  if (!e) return null;
                  var t = e.filter(Kf);
                  return 0 == t.length
                    ? null
                    : function (e) {
                        return (function e() {
                          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                            n[r] = arguments[r];
                          var i;
                          return (
                            'function' == typeof n[n.length - 1] && (i = n.pop()),
                            1 === n.length && u(n[0]) && (n = n[0]),
                            0 === n.length
                              ? Hl
                              : i
                              ? e(n).pipe(
                                  q(function (e) {
                                    return i.apply(void 0, _toConsumableArray(e));
                                  })
                                )
                              : new w(function (e) {
                                  return new Mf(e, n);
                                })
                          );
                        })(
                          (function (e, t) {
                            return t.map(function (t) {
                              return t(e);
                            });
                          })(e, t).map(Qf)
                        ).pipe(q(Yf));
                      };
                },
              },
            ]),
            e
          );
        })();
      function Kf(e) {
        return null != e;
      }
      function Qf(e) {
        var t = Lt(e) ? Z(e) : e;
        if (!Ft(t)) throw new Error('Expected validator to return Promise or Observable.');
        return t;
      }
      function Yf(e) {
        var t = e.reduce(function (e, t) {
          return null != t ? Object.assign({}, e, t) : e;
        }, {});
        return 0 === Object.keys(t).length ? null : t;
      }
      function Jf(e) {
        return e.validate
          ? function (t) {
              return e.validate(t);
            }
          : e;
      }
      function Xf(e) {
        return e.validate
          ? function (t) {
              return e.validate(t);
            }
          : e;
      }
      var ep = (function () {
          function e() {
            _classCallCheck(this, e), (this._accessors = []);
          }
          return (
            _createClass(e, [
              {
                key: 'add',
                value: function (e, t) {
                  this._accessors.push([e, t]);
                },
              },
              {
                key: 'remove',
                value: function (e) {
                  for (var t = this._accessors.length - 1; t >= 0; --t)
                    if (this._accessors[t][1] === e) return void this._accessors.splice(t, 1);
                },
              },
              {
                key: 'select',
                value: function (e) {
                  var t = this;
                  this._accessors.forEach(function (n) {
                    t._isSameGroup(n, e) && n[1] !== e && n[1].fireUncheck(e.value);
                  });
                },
              },
              {
                key: '_isSameGroup',
                value: function (e, t) {
                  return (
                    !!e[0].control && e[0]._parent === t._control._parent && e[1].name === t.name
                  );
                },
              },
            ]),
            e
          );
        })(),
        tp =
          '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',
        np =
          '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
        rp = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, null, [
              {
                key: 'controlParentException',
                value: function () {
                  throw new Error(
                    "formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " +
                      tp
                  );
                },
              },
              {
                key: 'ngModelGroupException',
                value: function () {
                  throw new Error(
                    'formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        '.concat(
                      np,
                      '\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        \n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>'
                    )
                  );
                },
              },
              {
                key: 'missingFormException',
                value: function () {
                  throw new Error(
                    'formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ' +
                      tp
                  );
                },
              },
              {
                key: 'groupParentException',
                value: function () {
                  throw new Error(
                    "formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " +
                      np
                  );
                },
              },
              {
                key: 'arrayParentException',
                value: function () {
                  throw new Error(
                    'formArrayName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        \n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });'
                  );
                },
              },
              {
                key: 'disabledAttrWarning',
                value: function () {
                  console.warn(
                    "\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    "
                  );
                },
              },
              {
                key: 'ngModelWarning',
                value: function (e) {
                  console.warn(
                    "\n    It looks like you're using ngModel on the same form field as "
                      .concat(
                        e,
                        '. \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/'
                      )
                      .concat(
                        'formControl' === e ? 'FormControlDirective' : 'FormControlName',
                        '#use-with-ngmodel\n    '
                      )
                  );
                },
              },
            ]),
            e
          );
        })();
      function ip(e, t) {
        return null == e
          ? '' + t
          : (t && 'object' == typeof t && (t = 'Object'),
            ''.concat(e, ': ').concat(t).slice(0, 50));
      }
      var ap = (function () {
          function e(t, n) {
            _classCallCheck(this, e),
              (this._renderer = t),
              (this._elementRef = n),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = function (e) {}),
              (this.onTouched = function () {}),
              (this._compareWith = Ot);
          }
          return (
            _createClass(e, [
              {
                key: 'writeValue',
                value: function (e) {
                  this.value = e;
                  var t = this._getOptionId(e);
                  null == t &&
                    this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
                  var n = ip(t, e);
                  this._renderer.setProperty(this._elementRef.nativeElement, 'value', n);
                },
              },
              {
                key: 'registerOnChange',
                value: function (e) {
                  var t = this;
                  this.onChange = function (n) {
                    (t.value = t._getOptionValue(n)), e(t.value);
                  };
                },
              },
              {
                key: 'registerOnTouched',
                value: function (e) {
                  this.onTouched = e;
                },
              },
              {
                key: 'setDisabledState',
                value: function (e) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', e);
                },
              },
              {
                key: '_registerOption',
                value: function () {
                  return (this._idCounter++).toString();
                },
              },
              {
                key: '_getOptionId',
                value: function (e) {
                  for (var t = 0, n = Array.from(this._optionMap.keys()); t < n.length; t++) {
                    var r = n[t];
                    if (this._compareWith(this._optionMap.get(r), e)) return r;
                  }
                  return null;
                },
              },
              {
                key: '_getOptionValue',
                value: function (e) {
                  var t = (function (e) {
                    return e.split(':')[0];
                  })(e);
                  return this._optionMap.has(t) ? this._optionMap.get(t) : e;
                },
              },
              {
                key: 'compareWith',
                set: function (e) {
                  if ('function' != typeof e)
                    throw new Error(
                      'compareWith must be a function, but received ' + JSON.stringify(e)
                    );
                  this._compareWith = e;
                },
              },
            ]),
            e
          );
        })(),
        op = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this._element = t),
              (this._renderer = n),
              (this._select = r),
              this._select && (this.id = this._select._registerOption());
          }
          return (
            _createClass(e, [
              {
                key: '_setElementValue',
                value: function (e) {
                  this._renderer.setProperty(this._element.nativeElement, 'value', e);
                },
              },
              {
                key: 'ngOnDestroy',
                value: function () {
                  this._select &&
                    (this._select._optionMap.delete(this.id),
                    this._select.writeValue(this._select.value));
                },
              },
              {
                key: 'ngValue',
                set: function (e) {
                  null != this._select &&
                    (this._select._optionMap.set(this.id, e),
                    this._setElementValue(ip(this.id, e)),
                    this._select.writeValue(this._select.value));
                },
              },
              {
                key: 'value',
                set: function (e) {
                  this._setElementValue(e),
                    this._select && this._select.writeValue(this._select.value);
                },
              },
            ]),
            e
          );
        })();
      function lp(e, t) {
        return null == e
          ? '' + t
          : ('string' == typeof t && (t = "'".concat(t, "'")),
            t && 'object' == typeof t && (t = 'Object'),
            ''.concat(e, ': ').concat(t).slice(0, 50));
      }
      var up = (function () {
        function e(t, n, r) {
          _classCallCheck(this, e),
            (this._element = t),
            (this._renderer = n),
            (this._select = r),
            this._select && (this.id = this._select._registerOption(this));
        }
        return (
          _createClass(e, [
            {
              key: '_setElementValue',
              value: function (e) {
                this._renderer.setProperty(this._element.nativeElement, 'value', e);
              },
            },
            {
              key: '_setSelected',
              value: function (e) {
                this._renderer.setProperty(this._element.nativeElement, 'selected', e);
              },
            },
            {
              key: 'ngOnDestroy',
              value: function () {
                this._select &&
                  (this._select._optionMap.delete(this.id),
                  this._select.writeValue(this._select.value));
              },
            },
            {
              key: 'ngValue',
              set: function (e) {
                null != this._select &&
                  ((this._value = e),
                  this._setElementValue(lp(this.id, e)),
                  this._select.writeValue(this._select.value));
              },
            },
            {
              key: 'value',
              set: function (e) {
                this._select
                  ? ((this._value = e),
                    this._setElementValue(lp(this.id, e)),
                    this._select.writeValue(this._select.value))
                  : this._setElementValue(e);
              },
            },
          ]),
          e
        );
      })();
      function sp(e, t) {
        return [].concat(_toConsumableArray(t.path), [e]);
      }
      function cp(e, t) {
        e || pp(t, 'Cannot find control with'),
          t.valueAccessor || pp(t, 'No value accessor for form control with'),
          (e.validator = Zf.compose([e.validator, t.validator])),
          (e.asyncValidator = Zf.composeAsync([e.asyncValidator, t.asyncValidator])),
          t.valueAccessor.writeValue(e.value),
          (function (e, t) {
            t.valueAccessor.registerOnChange(function (n) {
              (e._pendingValue = n),
                (e._pendingChange = !0),
                (e._pendingDirty = !0),
                'change' === e.updateOn && hp(e, t);
            });
          })(e, t),
          (function (e, t) {
            e.registerOnChange(function (e, n) {
              t.valueAccessor.writeValue(e), n && t.viewToModelUpdate(e);
            });
          })(e, t),
          (function (e, t) {
            t.valueAccessor.registerOnTouched(function () {
              (e._pendingTouched = !0),
                'blur' === e.updateOn && e._pendingChange && hp(e, t),
                'submit' !== e.updateOn && e.markAsTouched();
            });
          })(e, t),
          t.valueAccessor.setDisabledState &&
            e.registerOnDisabledChange(function (e) {
              t.valueAccessor.setDisabledState(e);
            }),
          t._rawValidators.forEach(function (t) {
            t.registerOnValidatorChange &&
              t.registerOnValidatorChange(function () {
                return e.updateValueAndValidity();
              });
          }),
          t._rawAsyncValidators.forEach(function (t) {
            t.registerOnValidatorChange &&
              t.registerOnValidatorChange(function () {
                return e.updateValueAndValidity();
              });
          });
      }
      function hp(e, t) {
        e._pendingDirty && e.markAsDirty(),
          e.setValue(e._pendingValue, { emitModelToViewChange: !1 }),
          t.viewToModelUpdate(e._pendingValue),
          (e._pendingChange = !1);
      }
      function dp(e, t) {
        null == e && pp(t, 'Cannot find control with'),
          (e.validator = Zf.compose([e.validator, t.validator])),
          (e.asyncValidator = Zf.composeAsync([e.asyncValidator, t.asyncValidator]));
      }
      function fp(e) {
        return pp(e, 'There is no FormControl instance attached to form control element with');
      }
      function pp(e, t) {
        var n;
        throw (
          ((n =
            e.path.length > 1
              ? "path: '".concat(e.path.join(' -> '), "'")
              : e.path[0]
              ? "name: '".concat(e.path, "'")
              : 'unspecified name attribute'),
          new Error(''.concat(t, ' ').concat(n)))
        );
      }
      function vp(e) {
        return null != e ? Zf.compose(e.map(Jf)) : null;
      }
      function gp(e) {
        return null != e ? Zf.composeAsync(e.map(Xf)) : null;
      }
      var mp = [
        (function () {
          function e(t, n) {
            _classCallCheck(this, e),
              (this._renderer = t),
              (this._elementRef = n),
              (this.onChange = function (e) {}),
              (this.onTouched = function () {});
          }
          return (
            _createClass(e, [
              {
                key: 'writeValue',
                value: function (e) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'checked', e);
                },
              },
              {
                key: 'registerOnChange',
                value: function (e) {
                  this.onChange = e;
                },
              },
              {
                key: 'registerOnTouched',
                value: function (e) {
                  this.onTouched = e;
                },
              },
              {
                key: 'setDisabledState',
                value: function (e) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', e);
                },
              },
            ]),
            e
          );
        })(),
        (function () {
          function e(t, n) {
            _classCallCheck(this, e),
              (this._renderer = t),
              (this._elementRef = n),
              (this.onChange = function (e) {}),
              (this.onTouched = function () {});
          }
          return (
            _createClass(e, [
              {
                key: 'writeValue',
                value: function (e) {
                  this._renderer.setProperty(
                    this._elementRef.nativeElement,
                    'value',
                    parseFloat(e)
                  );
                },
              },
              {
                key: 'registerOnChange',
                value: function (e) {
                  this.onChange = function (t) {
                    e('' == t ? null : parseFloat(t));
                  };
                },
              },
              {
                key: 'registerOnTouched',
                value: function (e) {
                  this.onTouched = e;
                },
              },
              {
                key: 'setDisabledState',
                value: function (e) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', e);
                },
              },
            ]),
            e
          );
        })(),
        (function () {
          function e(t, n) {
            _classCallCheck(this, e),
              (this._renderer = t),
              (this._elementRef = n),
              (this.onChange = function (e) {}),
              (this.onTouched = function () {});
          }
          return (
            _createClass(e, [
              {
                key: 'writeValue',
                value: function (e) {
                  this._renderer.setProperty(
                    this._elementRef.nativeElement,
                    'value',
                    null == e ? '' : e
                  );
                },
              },
              {
                key: 'registerOnChange',
                value: function (e) {
                  this.onChange = function (t) {
                    e('' == t ? null : parseFloat(t));
                  };
                },
              },
              {
                key: 'registerOnTouched',
                value: function (e) {
                  this.onTouched = e;
                },
              },
              {
                key: 'setDisabledState',
                value: function (e) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', e);
                },
              },
            ]),
            e
          );
        })(),
        ap,
        (function () {
          function e(t, n) {
            _classCallCheck(this, e),
              (this._renderer = t),
              (this._elementRef = n),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = function (e) {}),
              (this.onTouched = function () {}),
              (this._compareWith = Ot);
          }
          return (
            _createClass(e, [
              {
                key: 'writeValue',
                value: function (e) {
                  var t,
                    n = this;
                  if (((this.value = e), Array.isArray(e))) {
                    var r = e.map(function (e) {
                      return n._getOptionId(e);
                    });
                    t = function (e, t) {
                      e._setSelected(r.indexOf(t.toString()) > -1);
                    };
                  } else
                    t = function (e, t) {
                      e._setSelected(!1);
                    };
                  this._optionMap.forEach(t);
                },
              },
              {
                key: 'registerOnChange',
                value: function (e) {
                  var t = this;
                  this.onChange = function (n) {
                    var r = [];
                    if (n.hasOwnProperty('selectedOptions'))
                      for (var i = n.selectedOptions, a = 0; a < i.length; a++) {
                        var o = i.item(a),
                          l = t._getOptionValue(o.value);
                        r.push(l);
                      }
                    else
                      for (var u = n.options, s = 0; s < u.length; s++) {
                        var c = u.item(s);
                        if (c.selected) {
                          var h = t._getOptionValue(c.value);
                          r.push(h);
                        }
                      }
                    (t.value = r), e(r);
                  };
                },
              },
              {
                key: 'registerOnTouched',
                value: function (e) {
                  this.onTouched = e;
                },
              },
              {
                key: 'setDisabledState',
                value: function (e) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', e);
                },
              },
              {
                key: '_registerOption',
                value: function (e) {
                  var t = (this._idCounter++).toString();
                  return this._optionMap.set(t, e), t;
                },
              },
              {
                key: '_getOptionId',
                value: function (e) {
                  for (var t = 0, n = Array.from(this._optionMap.keys()); t < n.length; t++) {
                    var r = n[t];
                    if (this._compareWith(this._optionMap.get(r)._value, e)) return r;
                  }
                  return null;
                },
              },
              {
                key: '_getOptionValue',
                value: function (e) {
                  var t = (function (e) {
                    return e.split(':')[0];
                  })(e);
                  return this._optionMap.has(t) ? this._optionMap.get(t)._value : e;
                },
              },
              {
                key: 'compareWith',
                set: function (e) {
                  if ('function' != typeof e)
                    throw new Error(
                      'compareWith must be a function, but received ' + JSON.stringify(e)
                    );
                  this._compareWith = e;
                },
              },
            ]),
            e
          );
        })(),
        (function () {
          function e(t, n, r, i) {
            _classCallCheck(this, e),
              (this._renderer = t),
              (this._elementRef = n),
              (this._registry = r),
              (this._injector = i),
              (this.onChange = function () {}),
              (this.onTouched = function () {});
          }
          return (
            _createClass(e, [
              {
                key: 'ngOnInit',
                value: function () {
                  (this._control = this._injector.get(zf)),
                    this._checkName(),
                    this._registry.add(this._control, this);
                },
              },
              {
                key: 'ngOnDestroy',
                value: function () {
                  this._registry.remove(this);
                },
              },
              {
                key: 'writeValue',
                value: function (e) {
                  (this._state = e === this.value),
                    this._renderer.setProperty(
                      this._elementRef.nativeElement,
                      'checked',
                      this._state
                    );
                },
              },
              {
                key: 'registerOnChange',
                value: function (e) {
                  var t = this;
                  (this._fn = e),
                    (this.onChange = function () {
                      e(t.value), t._registry.select(t);
                    });
                },
              },
              {
                key: 'fireUncheck',
                value: function (e) {
                  this.writeValue(e);
                },
              },
              {
                key: 'registerOnTouched',
                value: function (e) {
                  this.onTouched = e;
                },
              },
              {
                key: 'setDisabledState',
                value: function (e) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', e);
                },
              },
              {
                key: '_checkName',
                value: function () {
                  this.name &&
                    this.formControlName &&
                    this.name !== this.formControlName &&
                    this._throwNameError(),
                    !this.name && this.formControlName && (this.name = this.formControlName);
                },
              },
              {
                key: '_throwNameError',
                value: function () {
                  throw new Error(
                    '\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    '
                  );
                },
              },
            ]),
            e
          );
        })(),
      ];
      function yp(e) {
        var t = Cp(e) ? e.validators : e;
        return Array.isArray(t) ? vp(t) : t || null;
      }
      function _p(e, t) {
        var n = Cp(t) ? t.asyncValidators : e;
        return Array.isArray(n) ? gp(n) : n || null;
      }
      function Cp(e) {
        return null != e && !Array.isArray(e) && 'object' == typeof e;
      }
      var kp = (function () {
          function e(t, n) {
            _classCallCheck(this, e),
              (this.validator = t),
              (this.asyncValidator = n),
              (this._onCollectionChange = function () {}),
              (this.pristine = !0),
              (this.touched = !1),
              (this._onDisabledChange = []);
          }
          return (
            _createClass(e, [
              {
                key: 'setValidators',
                value: function (e) {
                  this.validator = yp(e);
                },
              },
              {
                key: 'setAsyncValidators',
                value: function (e) {
                  this.asyncValidator = _p(e);
                },
              },
              {
                key: 'clearValidators',
                value: function () {
                  this.validator = null;
                },
              },
              {
                key: 'clearAsyncValidators',
                value: function () {
                  this.asyncValidator = null;
                },
              },
              {
                key: 'markAsTouched',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.touched = !0), this._parent && !e.onlySelf && this._parent.markAsTouched(e);
                },
              },
              {
                key: 'markAllAsTouched',
                value: function () {
                  this.markAsTouched({ onlySelf: !0 }),
                    this._forEachChild(function (e) {
                      return e.markAllAsTouched();
                    });
                },
              },
              {
                key: 'markAsUntouched',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.touched = !1),
                    (this._pendingTouched = !1),
                    this._forEachChild(function (e) {
                      e.markAsUntouched({ onlySelf: !0 });
                    }),
                    this._parent && !e.onlySelf && this._parent._updateTouched(e);
                },
              },
              {
                key: 'markAsDirty',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.pristine = !1), this._parent && !e.onlySelf && this._parent.markAsDirty(e);
                },
              },
              {
                key: 'markAsPristine',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.pristine = !0),
                    (this._pendingDirty = !1),
                    this._forEachChild(function (e) {
                      e.markAsPristine({ onlySelf: !0 });
                    }),
                    this._parent && !e.onlySelf && this._parent._updatePristine(e);
                },
              },
              {
                key: 'markAsPending',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.status = 'PENDING'),
                    !1 !== e.emitEvent && this.statusChanges.emit(this.status),
                    this._parent && !e.onlySelf && this._parent.markAsPending(e);
                },
              },
              {
                key: 'disable',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = this._parentMarkedDirty(e.onlySelf);
                  (this.status = 'DISABLED'),
                    (this.errors = null),
                    this._forEachChild(function (t) {
                      t.disable(Object.assign({}, e, { onlySelf: !0 }));
                    }),
                    this._updateValue(),
                    !1 !== e.emitEvent &&
                      (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
                    this._updateAncestors(Object.assign({}, e, { skipPristineCheck: t })),
                    this._onDisabledChange.forEach(function (e) {
                      return e(!0);
                    });
                },
              },
              {
                key: 'enable',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = this._parentMarkedDirty(e.onlySelf);
                  (this.status = 'VALID'),
                    this._forEachChild(function (t) {
                      t.enable(Object.assign({}, e, { onlySelf: !0 }));
                    }),
                    this.updateValueAndValidity({ onlySelf: !0, emitEvent: e.emitEvent }),
                    this._updateAncestors(Object.assign({}, e, { skipPristineCheck: t })),
                    this._onDisabledChange.forEach(function (e) {
                      return e(!1);
                    });
                },
              },
              {
                key: '_updateAncestors',
                value: function (e) {
                  this._parent &&
                    !e.onlySelf &&
                    (this._parent.updateValueAndValidity(e),
                    e.skipPristineCheck || this._parent._updatePristine(),
                    this._parent._updateTouched());
                },
              },
              {
                key: 'setParent',
                value: function (e) {
                  this._parent = e;
                },
              },
              {
                key: 'updateValueAndValidity',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  this._setInitialStatus(),
                    this._updateValue(),
                    this.enabled &&
                      (this._cancelExistingSubscription(),
                      (this.errors = this._runValidator()),
                      (this.status = this._calculateStatus()),
                      ('VALID' !== this.status && 'PENDING' !== this.status) ||
                        this._runAsyncValidator(e.emitEvent)),
                    !1 !== e.emitEvent &&
                      (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
                    this._parent && !e.onlySelf && this._parent.updateValueAndValidity(e);
                },
              },
              {
                key: '_updateTreeValidity',
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : { emitEvent: !0 };
                  this._forEachChild(function (t) {
                    return t._updateTreeValidity(e);
                  }),
                    this.updateValueAndValidity({ onlySelf: !0, emitEvent: e.emitEvent });
                },
              },
              {
                key: '_setInitialStatus',
                value: function () {
                  this.status = this._allControlsDisabled() ? 'DISABLED' : 'VALID';
                },
              },
              {
                key: '_runValidator',
                value: function () {
                  return this.validator ? this.validator(this) : null;
                },
              },
              {
                key: '_runAsyncValidator',
                value: function (e) {
                  var t = this;
                  if (this.asyncValidator) {
                    this.status = 'PENDING';
                    var n = Qf(this.asyncValidator(this));
                    this._asyncValidationSubscription = n.subscribe(function (n) {
                      return t.setErrors(n, { emitEvent: e });
                    });
                  }
                },
              },
              {
                key: '_cancelExistingSubscription',
                value: function () {
                  this._asyncValidationSubscription &&
                    this._asyncValidationSubscription.unsubscribe();
                },
              },
              {
                key: 'setErrors',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  (this.errors = e), this._updateControlsErrors(!1 !== t.emitEvent);
                },
              },
              {
                key: 'get',
                value: function (e) {
                  return (function (e, t, n) {
                    return null == t
                      ? null
                      : (t instanceof Array || (t = t.split('.')),
                        t instanceof Array && 0 === t.length
                          ? null
                          : t.reduce(function (e, t) {
                              return e instanceof wp
                                ? e.controls.hasOwnProperty(t)
                                  ? e.controls[t]
                                  : null
                                : (e instanceof xp && e.at(t)) || null;
                            }, e));
                  })(this, e);
                },
              },
              {
                key: 'getError',
                value: function (e, t) {
                  var n = t ? this.get(t) : this;
                  return n && n.errors ? n.errors[e] : null;
                },
              },
              {
                key: 'hasError',
                value: function (e, t) {
                  return !!this.getError(e, t);
                },
              },
              {
                key: '_updateControlsErrors',
                value: function (e) {
                  (this.status = this._calculateStatus()),
                    e && this.statusChanges.emit(this.status),
                    this._parent && this._parent._updateControlsErrors(e);
                },
              },
              {
                key: '_initObservables',
                value: function () {
                  (this.valueChanges = new yi()), (this.statusChanges = new yi());
                },
              },
              {
                key: '_calculateStatus',
                value: function () {
                  return this._allControlsDisabled()
                    ? 'DISABLED'
                    : this.errors
                    ? 'INVALID'
                    : this._anyControlsHaveStatus('PENDING')
                    ? 'PENDING'
                    : this._anyControlsHaveStatus('INVALID')
                    ? 'INVALID'
                    : 'VALID';
                },
              },
              {
                key: '_anyControlsHaveStatus',
                value: function (e) {
                  return this._anyControls(function (t) {
                    return t.status === e;
                  });
                },
              },
              {
                key: '_anyControlsDirty',
                value: function () {
                  return this._anyControls(function (e) {
                    return e.dirty;
                  });
                },
              },
              {
                key: '_anyControlsTouched',
                value: function () {
                  return this._anyControls(function (e) {
                    return e.touched;
                  });
                },
              },
              {
                key: '_updatePristine',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.pristine = !this._anyControlsDirty()),
                    this._parent && !e.onlySelf && this._parent._updatePristine(e);
                },
              },
              {
                key: '_updateTouched',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.touched = this._anyControlsTouched()),
                    this._parent && !e.onlySelf && this._parent._updateTouched(e);
                },
              },
              {
                key: '_isBoxedValue',
                value: function (e) {
                  return (
                    'object' == typeof e &&
                    null !== e &&
                    2 === Object.keys(e).length &&
                    'value' in e &&
                    'disabled' in e
                  );
                },
              },
              {
                key: '_registerOnCollectionChange',
                value: function (e) {
                  this._onCollectionChange = e;
                },
              },
              {
                key: '_setUpdateStrategy',
                value: function (e) {
                  Cp(e) && null != e.updateOn && (this._updateOn = e.updateOn);
                },
              },
              {
                key: '_parentMarkedDirty',
                value: function (e) {
                  return (
                    !e && this._parent && this._parent.dirty && !this._parent._anyControlsDirty()
                  );
                },
              },
              {
                key: 'parent',
                get: function () {
                  return this._parent;
                },
              },
              {
                key: 'valid',
                get: function () {
                  return 'VALID' === this.status;
                },
              },
              {
                key: 'invalid',
                get: function () {
                  return 'INVALID' === this.status;
                },
              },
              {
                key: 'pending',
                get: function () {
                  return 'PENDING' == this.status;
                },
              },
              {
                key: 'disabled',
                get: function () {
                  return 'DISABLED' === this.status;
                },
              },
              {
                key: 'enabled',
                get: function () {
                  return 'DISABLED' !== this.status;
                },
              },
              {
                key: 'dirty',
                get: function () {
                  return !this.pristine;
                },
              },
              {
                key: 'untouched',
                get: function () {
                  return !this.touched;
                },
              },
              {
                key: 'updateOn',
                get: function () {
                  return this._updateOn
                    ? this._updateOn
                    : this.parent
                    ? this.parent.updateOn
                    : 'change';
                },
              },
              {
                key: 'root',
                get: function () {
                  for (var e = this; e._parent; ) e = e._parent;
                  return e;
                },
              },
            ]),
            e
          );
        })(),
        bp = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n() {
            var e,
              r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              i = arguments.length > 1 ? arguments[1] : void 0,
              a = arguments.length > 2 ? arguments[2] : void 0;
            return (
              _classCallCheck(this, n),
              ((e = t.call(this, yp(i), _p(a, i)))._onChange = []),
              e._applyFormState(r),
              e._setUpdateStrategy(i),
              e.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
              e._initObservables(),
              e
            );
          }
          return (
            _createClass(n, [
              {
                key: 'setValue',
                value: function (e) {
                  var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  (this.value = this._pendingValue = e),
                    this._onChange.length &&
                      !1 !== n.emitModelToViewChange &&
                      this._onChange.forEach(function (e) {
                        return e(t.value, !1 !== n.emitViewToModelChange);
                      }),
                    this.updateValueAndValidity(n);
                },
              },
              {
                key: 'patchValue',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this.setValue(e, t);
                },
              },
              {
                key: 'reset',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this._applyFormState(e),
                    this.markAsPristine(t),
                    this.markAsUntouched(t),
                    this.setValue(this.value, t),
                    (this._pendingChange = !1);
                },
              },
              { key: '_updateValue', value: function () {} },
              {
                key: '_anyControls',
                value: function (e) {
                  return !1;
                },
              },
              {
                key: '_allControlsDisabled',
                value: function () {
                  return this.disabled;
                },
              },
              {
                key: 'registerOnChange',
                value: function (e) {
                  this._onChange.push(e);
                },
              },
              {
                key: '_clearChangeFns',
                value: function () {
                  (this._onChange = []),
                    (this._onDisabledChange = []),
                    (this._onCollectionChange = function () {});
                },
              },
              {
                key: 'registerOnDisabledChange',
                value: function (e) {
                  this._onDisabledChange.push(e);
                },
              },
              { key: '_forEachChild', value: function (e) {} },
              {
                key: '_syncPendingControls',
                value: function () {
                  return !(
                    'submit' !== this.updateOn ||
                    (this._pendingDirty && this.markAsDirty(),
                    this._pendingTouched && this.markAsTouched(),
                    !this._pendingChange) ||
                    (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }),
                    0)
                  );
                },
              },
              {
                key: '_applyFormState',
                value: function (e) {
                  this._isBoxedValue(e)
                    ? ((this.value = this._pendingValue = e.value),
                      e.disabled
                        ? this.disable({ onlySelf: !0, emitEvent: !1 })
                        : this.enable({ onlySelf: !0, emitEvent: !1 }))
                    : (this.value = this._pendingValue = e);
                },
              },
            ]),
            n
          );
        })(kp),
        wp = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return (
              _classCallCheck(this, n),
              ((a = t.call(this, yp(r), _p(i, r))).controls = e),
              a._initObservables(),
              a._setUpdateStrategy(r),
              a._setUpControls(),
              a.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
              a
            );
          }
          return (
            _createClass(n, [
              {
                key: 'registerControl',
                value: function (e, t) {
                  return this.controls[e]
                    ? this.controls[e]
                    : ((this.controls[e] = t),
                      t.setParent(this),
                      t._registerOnCollectionChange(this._onCollectionChange),
                      t);
                },
              },
              {
                key: 'addControl',
                value: function (e, t) {
                  this.registerControl(e, t),
                    this.updateValueAndValidity(),
                    this._onCollectionChange();
                },
              },
              {
                key: 'removeControl',
                value: function (e) {
                  this.controls[e] && this.controls[e]._registerOnCollectionChange(function () {}),
                    delete this.controls[e],
                    this.updateValueAndValidity(),
                    this._onCollectionChange();
                },
              },
              {
                key: 'setControl',
                value: function (e, t) {
                  this.controls[e] && this.controls[e]._registerOnCollectionChange(function () {}),
                    delete this.controls[e],
                    t && this.registerControl(e, t),
                    this.updateValueAndValidity(),
                    this._onCollectionChange();
                },
              },
              {
                key: 'contains',
                value: function (e) {
                  return this.controls.hasOwnProperty(e) && this.controls[e].enabled;
                },
              },
              {
                key: 'setValue',
                value: function (e) {
                  var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this._checkAllValuesPresent(e),
                    Object.keys(e).forEach(function (r) {
                      t._throwIfControlMissing(r),
                        t.controls[r].setValue(e[r], { onlySelf: !0, emitEvent: n.emitEvent });
                    }),
                    this.updateValueAndValidity(n);
                },
              },
              {
                key: 'patchValue',
                value: function (e) {
                  var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  Object.keys(e).forEach(function (r) {
                    t.controls[r] &&
                      t.controls[r].patchValue(e[r], { onlySelf: !0, emitEvent: n.emitEvent });
                  }),
                    this.updateValueAndValidity(n);
                },
              },
              {
                key: 'reset',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this._forEachChild(function (n, r) {
                    n.reset(e[r], { onlySelf: !0, emitEvent: t.emitEvent });
                  }),
                    this._updatePristine(t),
                    this._updateTouched(t),
                    this.updateValueAndValidity(t);
                },
              },
              {
                key: 'getRawValue',
                value: function () {
                  return this._reduceChildren({}, function (e, t, n) {
                    return (e[n] = t instanceof bp ? t.value : t.getRawValue()), e;
                  });
                },
              },
              {
                key: '_syncPendingControls',
                value: function () {
                  var e = this._reduceChildren(!1, function (e, t) {
                    return !!t._syncPendingControls() || e;
                  });
                  return e && this.updateValueAndValidity({ onlySelf: !0 }), e;
                },
              },
              {
                key: '_throwIfControlMissing',
                value: function (e) {
                  if (!Object.keys(this.controls).length)
                    throw new Error(
                      "\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
                    );
                  if (!this.controls[e])
                    throw new Error('Cannot find form control with name: '.concat(e, '.'));
                },
              },
              {
                key: '_forEachChild',
                value: function (e) {
                  var t = this;
                  Object.keys(this.controls).forEach(function (n) {
                    return e(t.controls[n], n);
                  });
                },
              },
              {
                key: '_setUpControls',
                value: function () {
                  var e = this;
                  this._forEachChild(function (t) {
                    t.setParent(e), t._registerOnCollectionChange(e._onCollectionChange);
                  });
                },
              },
              {
                key: '_updateValue',
                value: function () {
                  this.value = this._reduceValue();
                },
              },
              {
                key: '_anyControls',
                value: function (e) {
                  var t = this,
                    n = !1;
                  return (
                    this._forEachChild(function (r, i) {
                      n = n || (t.contains(i) && e(r));
                    }),
                    n
                  );
                },
              },
              {
                key: '_reduceValue',
                value: function () {
                  var e = this;
                  return this._reduceChildren({}, function (t, n, r) {
                    return (n.enabled || e.disabled) && (t[r] = n.value), t;
                  });
                },
              },
              {
                key: '_reduceChildren',
                value: function (e, t) {
                  var n = e;
                  return (
                    this._forEachChild(function (e, r) {
                      n = t(n, e, r);
                    }),
                    n
                  );
                },
              },
              {
                key: '_allControlsDisabled',
                value: function () {
                  for (var e = 0, t = Object.keys(this.controls); e < t.length; e++) {
                    var n = t[e];
                    if (this.controls[n].enabled) return !1;
                  }
                  return Object.keys(this.controls).length > 0 || this.disabled;
                },
              },
              {
                key: '_checkAllValuesPresent',
                value: function (e) {
                  this._forEachChild(function (t, n) {
                    if (void 0 === e[n])
                      throw new Error(
                        "Must supply a value for form control with name: '".concat(n, "'.")
                      );
                  });
                },
              },
            ]),
            n
          );
        })(kp),
        xp = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return (
              _classCallCheck(this, n),
              ((a = t.call(this, yp(r), _p(i, r))).controls = e),
              a._initObservables(),
              a._setUpdateStrategy(r),
              a._setUpControls(),
              a.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
              a
            );
          }
          return (
            _createClass(n, [
              {
                key: 'at',
                value: function (e) {
                  return this.controls[e];
                },
              },
              {
                key: 'push',
                value: function (e) {
                  this.controls.push(e),
                    this._registerControl(e),
                    this.updateValueAndValidity(),
                    this._onCollectionChange();
                },
              },
              {
                key: 'insert',
                value: function (e, t) {
                  this.controls.splice(e, 0, t),
                    this._registerControl(t),
                    this.updateValueAndValidity();
                },
              },
              {
                key: 'removeAt',
                value: function (e) {
                  this.controls[e] && this.controls[e]._registerOnCollectionChange(function () {}),
                    this.controls.splice(e, 1),
                    this.updateValueAndValidity();
                },
              },
              {
                key: 'setControl',
                value: function (e, t) {
                  this.controls[e] && this.controls[e]._registerOnCollectionChange(function () {}),
                    this.controls.splice(e, 1),
                    t && (this.controls.splice(e, 0, t), this._registerControl(t)),
                    this.updateValueAndValidity(),
                    this._onCollectionChange();
                },
              },
              {
                key: 'setValue',
                value: function (e) {
                  var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this._checkAllValuesPresent(e),
                    e.forEach(function (e, r) {
                      t._throwIfControlMissing(r),
                        t.at(r).setValue(e, { onlySelf: !0, emitEvent: n.emitEvent });
                    }),
                    this.updateValueAndValidity(n);
                },
              },
              {
                key: 'patchValue',
                value: function (e) {
                  var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  e.forEach(function (e, r) {
                    t.at(r) && t.at(r).patchValue(e, { onlySelf: !0, emitEvent: n.emitEvent });
                  }),
                    this.updateValueAndValidity(n);
                },
              },
              {
                key: 'reset',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this._forEachChild(function (n, r) {
                    n.reset(e[r], { onlySelf: !0, emitEvent: t.emitEvent });
                  }),
                    this._updatePristine(t),
                    this._updateTouched(t),
                    this.updateValueAndValidity(t);
                },
              },
              {
                key: 'getRawValue',
                value: function () {
                  return this.controls.map(function (e) {
                    return e instanceof bp ? e.value : e.getRawValue();
                  });
                },
              },
              {
                key: 'clear',
                value: function () {
                  this.controls.length < 1 ||
                    (this._forEachChild(function (e) {
                      return e._registerOnCollectionChange(function () {});
                    }),
                    this.controls.splice(0),
                    this.updateValueAndValidity());
                },
              },
              {
                key: '_syncPendingControls',
                value: function () {
                  var e = this.controls.reduce(function (e, t) {
                    return !!t._syncPendingControls() || e;
                  }, !1);
                  return e && this.updateValueAndValidity({ onlySelf: !0 }), e;
                },
              },
              {
                key: '_throwIfControlMissing',
                value: function (e) {
                  if (!this.controls.length)
                    throw new Error(
                      "\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
                    );
                  if (!this.at(e)) throw new Error('Cannot find form control at index ' + e);
                },
              },
              {
                key: '_forEachChild',
                value: function (e) {
                  this.controls.forEach(function (t, n) {
                    e(t, n);
                  });
                },
              },
              {
                key: '_updateValue',
                value: function () {
                  var e = this;
                  this.value = this.controls
                    .filter(function (t) {
                      return t.enabled || e.disabled;
                    })
                    .map(function (e) {
                      return e.value;
                    });
                },
              },
              {
                key: '_anyControls',
                value: function (e) {
                  return this.controls.some(function (t) {
                    return t.enabled && e(t);
                  });
                },
              },
              {
                key: '_setUpControls',
                value: function () {
                  var e = this;
                  this._forEachChild(function (t) {
                    return e._registerControl(t);
                  });
                },
              },
              {
                key: '_checkAllValuesPresent',
                value: function (e) {
                  this._forEachChild(function (t, n) {
                    if (void 0 === e[n])
                      throw new Error(
                        'Must supply a value for form control at index: '.concat(n, '.')
                      );
                  });
                },
              },
              {
                key: '_allControlsDisabled',
                value: function () {
                  var e,
                    t = _createForOfIteratorHelper(this.controls);
                  try {
                    for (t.s(); !(e = t.n()).done; ) {
                      if (e.value.enabled) return !1;
                    }
                  } catch (n) {
                    t.e(n);
                  } finally {
                    t.f();
                  }
                  return this.controls.length > 0 || this.disabled;
                },
              },
              {
                key: '_registerControl',
                value: function (e) {
                  e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange);
                },
              },
              {
                key: 'length',
                get: function () {
                  return this.controls.length;
                },
              },
            ]),
            n
          );
        })(kp),
        Sp = new Te('NgFormSelectorWarning'),
        Ep = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n() {
            return _classCallCheck(this, n), t.apply(this, arguments);
          }
          return (
            _createClass(n, [
              {
                key: 'ngOnInit',
                value: function () {
                  this._checkParentType(), this.formDirective.addFormGroup(this);
                },
              },
              {
                key: 'ngOnDestroy',
                value: function () {
                  this.formDirective && this.formDirective.removeFormGroup(this);
                },
              },
              { key: '_checkParentType', value: function () {} },
              {
                key: 'control',
                get: function () {
                  return this.formDirective.getFormGroup(this);
                },
              },
              {
                key: 'path',
                get: function () {
                  return sp(this.name, this._parent);
                },
              },
              {
                key: 'formDirective',
                get: function () {
                  return this._parent ? this._parent.formDirective : null;
                },
              },
              {
                key: 'validator',
                get: function () {
                  return vp(this._validators);
                },
              },
              {
                key: 'asyncValidator',
                get: function () {
                  return gp(this._asyncValidators);
                },
              },
            ]),
            n
          );
        })(jf),
        Tp = function e() {
          _classCallCheck(this, e);
        },
        Pp = new Te('NgModelWithFormControlWarning'),
        Ap = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r) {
            var i;
            return (
              _classCallCheck(this, n),
              ((i = t.call(this))._validators = e),
              (i._asyncValidators = r),
              (i.submitted = !1),
              (i.directives = []),
              (i.form = null),
              (i.ngSubmit = new yi()),
              i
            );
          }
          return (
            _createClass(n, [
              {
                key: 'ngOnChanges',
                value: function (e) {
                  this._checkFormPresent(),
                    e.hasOwnProperty('form') &&
                      (this._updateValidators(),
                      this._updateDomValue(),
                      this._updateRegistrations());
                },
              },
              {
                key: 'addControl',
                value: function (e) {
                  var t = this.form.get(e.path);
                  return (
                    cp(t, e),
                    t.updateValueAndValidity({ emitEvent: !1 }),
                    this.directives.push(e),
                    t
                  );
                },
              },
              {
                key: 'getControl',
                value: function (e) {
                  return this.form.get(e.path);
                },
              },
              {
                key: 'removeControl',
                value: function (e) {
                  var t, n, r;
                  (t = this.directives), (n = e), (r = t.indexOf(n)) > -1 && t.splice(r, 1);
                },
              },
              {
                key: 'addFormGroup',
                value: function (e) {
                  var t = this.form.get(e.path);
                  dp(t, e), t.updateValueAndValidity({ emitEvent: !1 });
                },
              },
              { key: 'removeFormGroup', value: function (e) {} },
              {
                key: 'getFormGroup',
                value: function (e) {
                  return this.form.get(e.path);
                },
              },
              {
                key: 'addFormArray',
                value: function (e) {
                  var t = this.form.get(e.path);
                  dp(t, e), t.updateValueAndValidity({ emitEvent: !1 });
                },
              },
              { key: 'removeFormArray', value: function (e) {} },
              {
                key: 'getFormArray',
                value: function (e) {
                  return this.form.get(e.path);
                },
              },
              {
                key: 'updateModel',
                value: function (e, t) {
                  this.form.get(e.path).setValue(t);
                },
              },
              {
                key: 'onSubmit',
                value: function (e) {
                  return (
                    (this.submitted = !0),
                    (t = this.directives),
                    this.form._syncPendingControls(),
                    t.forEach(function (e) {
                      var t = e.control;
                      'submit' === t.updateOn &&
                        t._pendingChange &&
                        (e.viewToModelUpdate(t._pendingValue), (t._pendingChange = !1));
                    }),
                    this.ngSubmit.emit(e),
                    !1
                  );
                  var t;
                },
              },
              {
                key: 'onReset',
                value: function () {
                  this.resetForm();
                },
              },
              {
                key: 'resetForm',
                value: function (e) {
                  this.form.reset(e), (this.submitted = !1);
                },
              },
              {
                key: '_updateDomValue',
                value: function () {
                  var e = this;
                  this.directives.forEach(function (t) {
                    var n = e.form.get(t.path);
                    t.control !== n &&
                      ((function (e, t) {
                        t.valueAccessor.registerOnChange(function () {
                          return fp(t);
                        }),
                          t.valueAccessor.registerOnTouched(function () {
                            return fp(t);
                          }),
                          t._rawValidators.forEach(function (e) {
                            e.registerOnValidatorChange && e.registerOnValidatorChange(null);
                          }),
                          t._rawAsyncValidators.forEach(function (e) {
                            e.registerOnValidatorChange && e.registerOnValidatorChange(null);
                          }),
                          e && e._clearChangeFns();
                      })(t.control, t),
                      n && cp(n, t),
                      (t.control = n));
                  }),
                    this.form._updateTreeValidity({ emitEvent: !1 });
                },
              },
              {
                key: '_updateRegistrations',
                value: function () {
                  var e = this;
                  this.form._registerOnCollectionChange(function () {
                    return e._updateDomValue();
                  }),
                    this._oldForm && this._oldForm._registerOnCollectionChange(function () {}),
                    (this._oldForm = this.form);
                },
              },
              {
                key: '_updateValidators',
                value: function () {
                  var e = vp(this._validators);
                  this.form.validator = Zf.compose([this.form.validator, e]);
                  var t = gp(this._asyncValidators);
                  this.form.asyncValidator = Zf.composeAsync([this.form.asyncValidator, t]);
                },
              },
              {
                key: '_checkFormPresent',
                value: function () {
                  this.form || rp.missingFormException();
                },
              },
              {
                key: 'formDirective',
                get: function () {
                  return this;
                },
              },
              {
                key: 'control',
                get: function () {
                  return this.form;
                },
              },
              {
                key: 'path',
                get: function () {
                  return [];
                },
              },
            ]),
            n
          );
        })(jf),
        Rp = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return (
              _classCallCheck(this, n),
              ((a = t.call(this))._parent = e),
              (a._validators = r),
              (a._asyncValidators = i),
              a
            );
          }
          return (
            _createClass(n, [
              {
                key: '_checkParentType',
                value: function () {
                  Op(this._parent) && rp.groupParentException();
                },
              },
            ]),
            n
          );
        })(Ep),
        Ip = (function (e) {
          _inherits(n, e);
          var t = _createSuper(n);
          function n(e, r, i) {
            var a;
            return (
              _classCallCheck(this, n),
              ((a = t.call(this))._parent = e),
              (a._validators = r),
              (a._asyncValidators = i),
              a
            );
          }
          return (
            _createClass(n, [
              {
                key: 'ngOnInit',
                value: function () {
                  this._checkParentType(), this.formDirective.addFormArray(this);
                },
              },
              {
                key: 'ngOnDestroy',
                value: function () {
                  this.formDirective && this.formDirective.removeFormArray(this);
                },
              },
              {
                key: '_checkParentType',
                value: function () {
                  Op(this._parent) && rp.arrayParentException();
                },
              },
              {
                key: 'control',
                get: function () {
                  return this.formDirective.getFormArray(this);
                },
              },
              {
                key: 'formDirective',
                get: function () {
                  return this._parent ? this._parent.formDirective : null;
                },
              },
              {
                key: 'path',
                get: function () {
                  return sp(this.name, this._parent);
                },
              },
              {
                key: 'validator',
                get: function () {
                  return vp(this._validators);
                },
              },
              {
                key: 'asyncValidator',
                get: function () {
                  return gp(this._asyncValidators);
                },
              },
            ]),
            n
          );
        })(jf);
      function Op(e) {
        return !(e instanceof Rp || e instanceof Ap || e instanceof Ip);
      }
      var Dp,
        Vp,
        Mp,
        Np =
          (((Dp = (function (e) {
            _inherits(n, e);
            var t = _createSuper(n);
            function n(e, r, i, a, o) {
              var l;
              return (
                _classCallCheck(this, n),
                ((l = t.call(this))._ngModelWarningConfig = o),
                (l._added = !1),
                (l.update = new yi()),
                (l._ngModelWarningSent = !1),
                (l._parent = e),
                (l._rawValidators = r || []),
                (l._rawAsyncValidators = i || []),
                (l.valueAccessor = (function (e, t) {
                  if (!t) return null;
                  Array.isArray(t) ||
                    pp(e, 'Value accessor was not provided as an array for form control with');
                  var n = void 0,
                    r = void 0,
                    i = void 0;
                  return (
                    t.forEach(function (t) {
                      var a;
                      t.constructor === Ff
                        ? (n = t)
                        : ((a = t),
                          mp.some(function (e) {
                            return a.constructor === e;
                          })
                            ? (r &&
                                pp(
                                  e,
                                  'More than one built-in value accessor matches form control with'
                                ),
                              (r = t))
                            : (i &&
                                pp(
                                  e,
                                  'More than one custom value accessor matches form control with'
                                ),
                              (i = t)));
                    }),
                    i || r || n || (pp(e, 'No valid value accessor for form control with'), null)
                  );
                })(_assertThisInitialized(l), a)),
                l
              );
            }
            return (
              _createClass(n, [
                {
                  key: 'ngOnChanges',
                  value: function (e) {
                    var t, r;
                    this._added || this._setUpControl(),
                      (function (e, t) {
                        if (!e.hasOwnProperty('model')) return !1;
                        var n = e.model;
                        return !!n.isFirstChange() || !Ot(t, n.currentValue);
                      })(e, this.viewModel) &&
                        ((t = n),
                        (r = this._ngModelWarningConfig),
                        Je() &&
                          'never' !== r &&
                          ((((null !== r && 'once' !== r) || t._ngModelWarningSentOnce) &&
                            ('always' !== r || this._ngModelWarningSent)) ||
                            (rp.ngModelWarning('formControlName'),
                            (t._ngModelWarningSentOnce = !0),
                            (this._ngModelWarningSent = !0))),
                        (this.viewModel = this.model),
                        this.formDirective.updateModel(this, this.model));
                  },
                },
                {
                  key: 'ngOnDestroy',
                  value: function () {
                    this.formDirective && this.formDirective.removeControl(this);
                  },
                },
                {
                  key: 'viewToModelUpdate',
                  value: function (e) {
                    (this.viewModel = e), this.update.emit(e);
                  },
                },
                {
                  key: '_checkParentType',
                  value: function () {
                    !(this._parent instanceof Rp) && this._parent instanceof Ep
                      ? rp.ngModelGroupException()
                      : this._parent instanceof Rp ||
                        this._parent instanceof Ap ||
                        this._parent instanceof Ip ||
                        rp.controlParentException();
                  },
                },
                {
                  key: '_setUpControl',
                  value: function () {
                    this._checkParentType(),
                      (this.control = this.formDirective.addControl(this)),
                      this.control.disabled &&
                        this.valueAccessor.setDisabledState &&
                        this.valueAccessor.setDisabledState(!0),
                      (this._added = !0);
                  },
                },
                {
                  key: 'isDisabled',
                  set: function (e) {
                    rp.disabledAttrWarning();
                  },
                },
                {
                  key: 'path',
                  get: function () {
                    return sp(this.name, this._parent);
                  },
                },
                {
                  key: 'formDirective',
                  get: function () {
                    return this._parent ? this._parent.formDirective : null;
                  },
                },
                {
                  key: 'validator',
                  get: function () {
                    return vp(this._rawValidators);
                  },
                },
                {
                  key: 'asyncValidator',
                  get: function () {
                    return gp(this._rawAsyncValidators);
                  },
                },
              ]),
              n
            );
          })(zf))._ngModelWarningSentOnce = !1),
          Dp),
        Lp = function e() {
          _classCallCheck(this, e);
        },
        Fp = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, [
              {
                key: 'group',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = this._reduceControls(e),
                    r = null,
                    i = null,
                    a = void 0;
                  return (
                    null != t &&
                      ((function (e) {
                        return (
                          void 0 !== e.asyncValidators ||
                          void 0 !== e.validators ||
                          void 0 !== e.updateOn
                        );
                      })(t)
                        ? ((r = null != t.validators ? t.validators : null),
                          (i = null != t.asyncValidators ? t.asyncValidators : null),
                          (a = null != t.updateOn ? t.updateOn : void 0))
                        : ((r = null != t.validator ? t.validator : null),
                          (i = null != t.asyncValidator ? t.asyncValidator : null))),
                    new wp(n, { asyncValidators: i, updateOn: a, validators: r })
                  );
                },
              },
              {
                key: 'control',
                value: function (e, t, n) {
                  return new bp(e, t, n);
                },
              },
              {
                key: 'array',
                value: function (e, t, n) {
                  var r = this,
                    i = e.map(function (e) {
                      return r._createControl(e);
                    });
                  return new xp(i, t, n);
                },
              },
              {
                key: '_reduceControls',
                value: function (e) {
                  var t = this,
                    n = {};
                  return (
                    Object.keys(e).forEach(function (r) {
                      n[r] = t._createControl(e[r]);
                    }),
                    n
                  );
                },
              },
              {
                key: '_createControl',
                value: function (e) {
                  return e instanceof bp || e instanceof wp || e instanceof xp
                    ? e
                    : Array.isArray(e)
                    ? this.control(e[0], e.length > 1 ? e[1] : null, e.length > 2 ? e[2] : null)
                    : this.control(e);
                },
              },
            ]),
            e
          );
        })(),
        Up = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, null, [
              {
                key: 'withConfig',
                value: function (t) {
                  return {
                    ngModule: e,
                    providers: [{ provide: Sp, useValue: t.warnOnDeprecatedNgFormSelector }],
                  };
                },
              },
            ]),
            e
          );
        })(),
        jp = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, null, [
              {
                key: 'withConfig',
                value: function (t) {
                  return {
                    ngModule: e,
                    providers: [{ provide: Pp, useValue: t.warnOnNgModelWithFormControl }],
                  };
                },
              },
            ]),
            e
          );
        })(),
        Hp = (function (e) {
          return (e[(e.FINANCIAL = 0)] = 'FINANCIAL'), (e[(e.NATURAL = 1)] = 'NATURAL'), e;
        })({}),
        zp = new Te('currency.mask.config'),
        Bp = (function () {
          function e(t) {
            _classCallCheck(this, e), (this.htmlInputElement = t);
          }
          return (
            _createClass(e, [
              {
                key: 'setCursorAt',
                value: function (e) {
                  if (this.htmlInputElement.setSelectionRange)
                    this.htmlInputElement.focus(), this.htmlInputElement.setSelectionRange(e, e);
                  else if (this.htmlInputElement.createTextRange) {
                    var t = this.htmlInputElement.createTextRange();
                    t.collapse(!0),
                      t.moveEnd('character', e),
                      t.moveStart('character', e),
                      t.select();
                  }
                },
              },
              {
                key: 'updateValueAndCursor',
                value: function (e, t, n) {
                  (this.rawValue = e), this.setCursorAt((n -= t - e.length));
                },
              },
              {
                key: 'canInputMoreNumbers',
                get: function () {
                  var e = !(
                      this.rawValue.replace(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g, '').length >=
                        this.htmlInputElement.maxLength && this.htmlInputElement.maxLength >= 0
                    ),
                    t = this.inputSelection.selectionStart,
                    n = this.inputSelection.selectionEnd,
                    r = !(
                      t == n ||
                      !this.htmlInputElement.value
                        .substring(t, n)
                        .match(/[^0-9\u0660-\u0669\u06F0-\u06F9]/)
                    ),
                    i = '0' == this.htmlInputElement.value.substring(0, 1);
                  return e || r || i;
                },
              },
              {
                key: 'inputSelection',
                get: function () {
                  var e = 0,
                    t = 0;
                  if (
                    'number' == typeof this.htmlInputElement.selectionStart &&
                    'number' == typeof this.htmlInputElement.selectionEnd
                  )
                    (e = this.htmlInputElement.selectionStart),
                      (t = this.htmlInputElement.selectionEnd);
                  else {
                    var n = document.selection.createRange();
                    if (n && n.parentElement() == this.htmlInputElement) {
                      var r = this.htmlInputElement.value.length,
                        i = this.htmlInputElement.value.replace(/\r\n/g, '\n'),
                        a = this.htmlInputElement.createTextRange();
                      a.moveToBookmark(n.getBookmark());
                      var o = this.htmlInputElement.createTextRange();
                      o.collapse(!1),
                        a.compareEndPoints('StartToEnd', o) > -1
                          ? (e = t = r)
                          : ((e = -a.moveStart('character', -r)),
                            (e += i.slice(0, e).split('\n').length - 1),
                            a.compareEndPoints('EndToEnd', o) > -1
                              ? (t = r)
                              : ((t = -a.moveEnd('character', -r)),
                                (t += i.slice(0, t).split('\n').length - 1)));
                    }
                  }
                  return { selectionStart: e, selectionEnd: t };
                },
              },
              {
                key: 'rawValue',
                get: function () {
                  return this.htmlInputElement && this.htmlInputElement.value;
                },
                set: function (e) {
                  (this._storedRawValue = e),
                    this.htmlInputElement && (this.htmlInputElement.value = e);
                },
              },
              {
                key: 'storedRawValue',
                get: function () {
                  return this._storedRawValue;
                },
              },
            ]),
            e
          );
        })(),
        qp = (function () {
          function e(t, n) {
            _classCallCheck(this, e),
              (this.htmlInputElement = t),
              (this.options = n),
              (this.SINGLE_DIGIT_REGEX = new RegExp(/^[0-9\u0660-\u0669\u06F0-\u06F9]$/)),
              (this.ONLY_NUMBERS_REGEX = new RegExp(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g)),
              (this.PER_AR_NUMBER = new Map()),
              (this.inputManager = new Bp(t)),
              this.initialize();
          }
          return (
            _createClass(e, [
              {
                key: 'initialize',
                value: function () {
                  this.PER_AR_NUMBER.set('\u06f0', '0'),
                    this.PER_AR_NUMBER.set('\u06f1', '1'),
                    this.PER_AR_NUMBER.set('\u06f2', '2'),
                    this.PER_AR_NUMBER.set('\u06f3', '3'),
                    this.PER_AR_NUMBER.set('\u06f4', '4'),
                    this.PER_AR_NUMBER.set('\u06f5', '5'),
                    this.PER_AR_NUMBER.set('\u06f6', '6'),
                    this.PER_AR_NUMBER.set('\u06f7', '7'),
                    this.PER_AR_NUMBER.set('\u06f8', '8'),
                    this.PER_AR_NUMBER.set('\u06f9', '9'),
                    this.PER_AR_NUMBER.set('\u0660', '0'),
                    this.PER_AR_NUMBER.set('\u0661', '1'),
                    this.PER_AR_NUMBER.set('\u0662', '2'),
                    this.PER_AR_NUMBER.set('\u0663', '3'),
                    this.PER_AR_NUMBER.set('\u0664', '4'),
                    this.PER_AR_NUMBER.set('\u0665', '5'),
                    this.PER_AR_NUMBER.set('\u0666', '6'),
                    this.PER_AR_NUMBER.set('\u0667', '7'),
                    this.PER_AR_NUMBER.set('\u0668', '8'),
                    this.PER_AR_NUMBER.set('\u0669', '9');
                },
              },
              {
                key: 'addNumber',
                value: function (e) {
                  var t = this.options,
                    n = t.decimal,
                    r = t.precision,
                    i = t.inputMode,
                    a = String.fromCharCode(e),
                    o = a === this.options.decimal;
                  if (this.rawValue) {
                    var l = this.inputSelection.selectionStart,
                      u = this.inputSelection.selectionEnd,
                      s = this.rawValue.substring(0, l),
                      c = this.rawValue.substring(u, this.rawValue.length),
                      h = -1 !== s.indexOf(n);
                    i === Hp.NATURAL && h && l === u && (c = c.substring(1));
                    var d = s + a + c,
                      f = l + 1;
                    if ((!o && a !== this.options.thousands) || a !== c[0]) {
                      if (!this.SINGLE_DIGIT_REGEX.test(a)) return;
                    } else f++;
                    (this.rawValue = d), this.updateFieldValue(f);
                  } else {
                    this.rawValue = this.applyMask(!1, a);
                    var p = void 0;
                    i === Hp.NATURAL && r > 0 && ((p = this.rawValue.indexOf(n)), o && p++),
                      this.updateFieldValue(p);
                  }
                },
              },
              {
                key: 'applyMask',
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = this.options,
                    i = r.allowNegative,
                    a = r.decimal,
                    o = r.precision,
                    l = r.prefix,
                    u = r.suffix,
                    s = r.thousands,
                    c = r.min,
                    h = r.max,
                    d = r.inputMode,
                    f = (t = e ? new Number(t).toFixed(o) : t).replace(this.ONLY_NUMBERS_REGEX, '');
                  if (!f && t !== a) return '';
                  d !== Hp.NATURAL ||
                    e ||
                    n ||
                    (f = (t = this.padOrTrimPrecision(t)).replace(this.ONLY_NUMBERS_REGEX, ''));
                  var p = f
                    .slice(0, f.length - o)
                    .replace(/^\u0660*/g, '')
                    .replace(/^\u06F0*/g, '')
                    .replace(/^0*/g, '');
                  '' == p && (p = '0');
                  var v = parseInt(p);
                  (p = p.replace(
                    /\B(?=([0-9\u0660-\u0669\u06F0-\u06F9]{3})+(?![0-9\u0660-\u0669\u06F0-\u06F9]))/g,
                    s
                  )),
                    s && p.startsWith(s) && (p = p.substring(1));
                  var g = p,
                    m = f.slice(f.length - o),
                    y = parseInt(m) || 0,
                    _ = t.indexOf('-') > -1;
                  h = this.isNullOrUndefined(h) || this.isNullOrUndefined(c) ? h : Math.max(h, c);
                  var C = v + y / 100;
                  return (
                    (C = _ ? -C : C),
                    !this.isNullOrUndefined(h) && C > h
                      ? this.applyMask(!0, h + '')
                      : !this.isNullOrUndefined(c) && C < c
                      ? this.applyMask(!0, c + '')
                      : (o > 0 &&
                          (g += '0' == g && m.length < o ? a + '0'.repeat(o - 1) + m : a + m),
                        (_ && i && 0 != C ? '-' : '') + l + g + u)
                  );
                },
              },
              {
                key: 'padOrTrimPrecision',
                value: function (e) {
                  var t = this.options,
                    n = t.decimal,
                    r = t.precision,
                    i = e.lastIndexOf(n);
                  -1 === i && ((i = e.length), (e += n));
                  var a = e.substring(i).replace(this.ONLY_NUMBERS_REGEX, ''),
                    o = a.length;
                  if (o < r) for (var l = o; l < r; l++) a += '0';
                  else o > r && (a = a.substring(0, a.length + r - o));
                  return e.substring(0, i) + n + a;
                },
              },
              {
                key: 'clearMask',
                value: function (e) {
                  if (this.isNullable() && '' === e) return null;
                  var t = (e || '0')
                    .replace(this.options.prefix, '')
                    .replace(this.options.suffix, '');
                  return (
                    this.options.thousands &&
                      (t = t.replace(new RegExp('\\' + this.options.thousands, 'g'), '')),
                    this.options.decimal && (t = t.replace(this.options.decimal, '.')),
                    this.PER_AR_NUMBER.forEach(function (e, n) {
                      var r = new RegExp(n, 'g');
                      t = t.replace(r, e);
                    }),
                    parseFloat(t)
                  );
                },
              },
              {
                key: 'changeToNegative',
                value: function () {
                  this.options.allowNegative &&
                    '' != this.rawValue &&
                    '-' != this.rawValue.charAt(0) &&
                    0 != this.value &&
                    (this.rawValue = this.applyMask(!1, '-' + this.rawValue));
                },
              },
              {
                key: 'changeToPositive',
                value: function () {
                  this.rawValue = this.applyMask(!1, this.rawValue.replace('-', ''));
                },
              },
              {
                key: 'removeNumber',
                value: function (e) {
                  var t = this.options,
                    n = t.decimal,
                    r = t.thousands,
                    i = t.prefix,
                    a = t.suffix,
                    o = t.inputMode;
                  if (this.isNullable() && 0 == this.value) this.rawValue = null;
                  else {
                    var l = this.inputSelection.selectionEnd,
                      u = this.inputSelection.selectionStart,
                      s = this.rawValue.length - a.length;
                    if (
                      ((l = Math.min(s, Math.max(l, i.length))),
                      (u = Math.min(s, Math.max(u, i.length))) !== l ||
                        this.inputSelection.selectionStart === this.inputSelection.selectionEnd)
                    ) {
                      var c = this.rawValue.indexOf(n);
                      -1 === c && (c = this.rawValue.length);
                      var h = 0,
                        d = '';
                      if (l === u)
                        if (8 == e) {
                          if (u <= i.length) return;
                          u--,
                            this.rawValue.substr(u, 1).match(/\d/) || u--,
                            o === Hp.NATURAL && c < l && (h = -1);
                        } else if (46 == e || 63272 == e) {
                          if (u === s) return;
                          l++, this.rawValue.substr(u, 1).match(/\d/) || (u++, l++);
                        }
                      if (o === Hp.NATURAL && u > c)
                        for (var f = l - u, p = 0; p < f; p++) d += '0';
                      var v = this.rawValue.length - l;
                      (this.rawValue =
                        this.rawValue.substring(0, u) + d + this.rawValue.substring(l)),
                        this.rawValue.substr(i.length, 1) === r &&
                          ((this.rawValue =
                            this.rawValue.substring(0, i.length) +
                            this.rawValue.substring(i.length + 1)),
                          (v = Math.min(v, this.rawValue.length - i.length))),
                        this.updateFieldValue(this.rawValue.length - v + h, !0);
                    } else this.updateFieldValue(u);
                  }
                },
              },
              {
                key: 'updateFieldValue',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = this.applyMask(!1, this.rawValue || '', t);
                  (e = null == e ? this.rawValue.length : e),
                    (e = Math.max(
                      this.options.prefix.length,
                      Math.min(e, this.rawValue.length - this.options.suffix.length)
                    )),
                    this.inputManager.updateValueAndCursor(n, this.rawValue.length, e);
                },
              },
              {
                key: 'updateOptions',
                value: function (e) {
                  var t = this.value;
                  (this.options = e), (this.value = t);
                },
              },
              {
                key: 'prefixLength',
                value: function () {
                  return this.options.prefix.length;
                },
              },
              {
                key: 'suffixLength',
                value: function () {
                  return this.options.suffix.length;
                },
              },
              {
                key: 'isNullable',
                value: function () {
                  return this.options.nullable;
                },
              },
              {
                key: 'isNullOrUndefined',
                value: function (e) {
                  return null == e;
                },
              },
              {
                key: 'canInputMoreNumbers',
                get: function () {
                  return this.inputManager.canInputMoreNumbers;
                },
              },
              {
                key: 'inputSelection',
                get: function () {
                  return this.inputManager.inputSelection;
                },
              },
              {
                key: 'rawValue',
                get: function () {
                  return this.inputManager.rawValue;
                },
                set: function (e) {
                  this.inputManager.rawValue = e;
                },
              },
              {
                key: 'storedRawValue',
                get: function () {
                  return this.inputManager.storedRawValue;
                },
              },
              {
                key: 'value',
                get: function () {
                  return this.clearMask(this.rawValue);
                },
                set: function (e) {
                  this.rawValue = this.applyMask(!0, '' + e);
                },
              },
            ]),
            e
          );
        })(),
        Gp = (function () {
          function e(t, n) {
            _classCallCheck(this, e), (this.inputService = new qp(t, n));
          }
          return (
            _createClass(e, [
              {
                key: 'handleCut',
                value: function (e) {
                  var t = this;
                  setTimeout(function () {
                    t.inputService.updateFieldValue(),
                      t.setValue(t.inputService.value),
                      t.onModelChange(t.inputService.value);
                  }, 0);
                },
              },
              {
                key: 'handleInput',
                value: function (e) {
                  var t = this.inputService.rawValue.charCodeAt(
                      this.inputService.rawValue.length - 1
                    ),
                    n = this.inputService.rawValue.length,
                    r = this.inputService.inputSelection.selectionEnd,
                    i = this.inputService.storedRawValue.length;
                  if (
                    ((this.inputService.rawValue = this.inputService.storedRawValue),
                    n == r && 1 == Math.abs(n - i))
                  ) {
                    if ((n < i && this.inputService.removeNumber(8), n > i))
                      switch (t) {
                        case 43:
                          this.inputService.changeToPositive();
                          break;
                        case 45:
                          this.inputService.changeToNegative();
                          break;
                        default:
                          if (!this.inputService.canInputMoreNumbers) return;
                          this.inputService.addNumber(t);
                      }
                    this.setCursorPosition(e), this.onModelChange(this.inputService.value);
                  } else this.setCursorPosition(e);
                },
              },
              {
                key: 'handleKeydown',
                value: function (e) {
                  var t = e.which || e.charCode || e.keyCode;
                  (8 != t && 46 != t && 63272 != t) ||
                    (e.preventDefault(),
                    this.inputService.inputSelection.selectionStart <=
                      this.inputService.prefixLength() &&
                    this.inputService.inputSelection.selectionEnd >=
                      this.inputService.rawValue.length - this.inputService.suffixLength()
                      ? this.clearValue()
                      : (this.inputService.removeNumber(t),
                        this.onModelChange(this.inputService.value)));
                },
              },
              {
                key: 'clearValue',
                value: function () {
                  this.setValue(this.inputService.isNullable() ? null : 0),
                    this.onModelChange(this.inputService.value);
                },
              },
              {
                key: 'handleKeypress',
                value: function (e) {
                  var t = e.which || e.charCode || e.keyCode;
                  if ((e.preventDefault(), 97 !== t || !e.ctrlKey)) {
                    switch (t) {
                      case void 0:
                      case 9:
                      case 13:
                        return;
                      case 43:
                        this.inputService.changeToPositive();
                        break;
                      case 45:
                        this.inputService.changeToNegative();
                        break;
                      default:
                        this.inputService.canInputMoreNumbers &&
                          (Math.abs(
                            this.inputService.inputSelection.selectionEnd -
                              this.inputService.inputSelection.selectionStart
                          ) == this.inputService.rawValue.length && this.setValue(null),
                          this.inputService.addNumber(t));
                    }
                    this.onModelChange(this.inputService.value);
                  }
                },
              },
              {
                key: 'handlePaste',
                value: function (e) {
                  var t = this;
                  setTimeout(function () {
                    t.inputService.updateFieldValue(),
                      t.setValue(t.inputService.value),
                      t.onModelChange(t.inputService.value);
                  }, 1);
                },
              },
              {
                key: 'updateOptions',
                value: function (e) {
                  this.inputService.updateOptions(e);
                },
              },
              {
                key: 'getOnModelChange',
                value: function () {
                  return this.onModelChange;
                },
              },
              {
                key: 'setOnModelChange',
                value: function (e) {
                  this.onModelChange = e;
                },
              },
              {
                key: 'getOnModelTouched',
                value: function () {
                  return this.onModelTouched;
                },
              },
              {
                key: 'setOnModelTouched',
                value: function (e) {
                  this.onModelTouched = e;
                },
              },
              {
                key: 'setValue',
                value: function (e) {
                  this.inputService.value = e;
                },
              },
              {
                key: 'setCursorPosition',
                value: function (e) {
                  setTimeout(function () {
                    e.target.setSelectionRange(e.target.value.length, e.target.value.length);
                  }, 0);
                },
              },
            ]),
            e
          );
        })(),
        $p = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.currencyMaskConfig = t),
              (this.elementRef = n),
              (this.keyValueDiffers = r),
              (this.options = {}),
              (this.optionsTemplate = {
                align: 'right',
                allowNegative: !0,
                allowZero: !0,
                decimal: '.',
                precision: 2,
                prefix: '$ ',
                suffix: '',
                thousands: ',',
                nullable: !1,
                inputMode: Hp.FINANCIAL,
              }),
              t && (this.optionsTemplate = t),
              (this.keyValueDiffer = r.find({}).create());
          }
          return (
            _createClass(e, [
              {
                key: 'ngAfterViewInit',
                value: function () {
                  this.elementRef.nativeElement.style.textAlign =
                    this.options && this.options.align
                      ? this.options.align
                      : this.optionsTemplate.align;
                },
              },
              {
                key: 'ngDoCheck',
                value: function () {
                  this.keyValueDiffer.diff(this.options) &&
                    ((this.elementRef.nativeElement.style.textAlign = this.options.align
                      ? this.options.align
                      : this.optionsTemplate.align),
                    this.inputHandler.updateOptions(
                      Object.assign({}, this.optionsTemplate, this.options)
                    ));
                },
              },
              {
                key: 'ngOnInit',
                value: function () {
                  this.inputHandler = new Gp(
                    this.elementRef.nativeElement,
                    Object.assign({}, this.optionsTemplate, this.options)
                  );
                },
              },
              {
                key: 'handleBlur',
                value: function (e) {
                  this.inputHandler.getOnModelTouched().apply(e);
                },
              },
              {
                key: 'handleCut',
                value: function (e) {
                  this.isChromeAndroid() || (!this.isReadOnly() && this.inputHandler.handleCut(e));
                },
              },
              {
                key: 'handleInput',
                value: function (e) {
                  this.isChromeAndroid() && !this.isReadOnly() && this.inputHandler.handleInput(e);
                },
              },
              {
                key: 'handleKeydown',
                value: function (e) {
                  this.isChromeAndroid() ||
                    (!this.isReadOnly() && this.inputHandler.handleKeydown(e));
                },
              },
              {
                key: 'handleKeypress',
                value: function (e) {
                  this.isChromeAndroid() ||
                    (!this.isReadOnly() && this.inputHandler.handleKeypress(e));
                },
              },
              {
                key: 'handlePaste',
                value: function (e) {
                  this.isChromeAndroid() ||
                    (!this.isReadOnly() && this.inputHandler.handlePaste(e));
                },
              },
              {
                key: 'handleDrop',
                value: function (e) {
                  this.isChromeAndroid() || e.preventDefault();
                },
              },
              {
                key: 'isChromeAndroid',
                value: function () {
                  return (
                    /chrome/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent)
                  );
                },
              },
              {
                key: 'isReadOnly',
                value: function () {
                  return this.elementRef.nativeElement.hasAttribute('readonly');
                },
              },
              {
                key: 'registerOnChange',
                value: function (e) {
                  this.inputHandler.setOnModelChange(e);
                },
              },
              {
                key: 'registerOnTouched',
                value: function (e) {
                  this.inputHandler.setOnModelTouched(e);
                },
              },
              {
                key: 'setDisabledState',
                value: function (e) {
                  this.elementRef.nativeElement.disabled = e;
                },
              },
              {
                key: 'writeValue',
                value: function (e) {
                  this.inputHandler.setValue(e);
                },
              },
            ]),
            e
          );
        })(),
        Wp = (Vp = (function () {
          function e() {
            _classCallCheck(this, e);
          }
          return (
            _createClass(e, null, [
              {
                key: 'forRoot',
                value: function (e) {
                  return { ngModule: Vp, providers: [{ provide: zp, useValue: e }] };
                },
              },
            ]),
            e
          );
        })()),
        Zp = n('jfjY'),
        Kp = (function () {
          function e(t, n, r) {
            _classCallCheck(this, e),
              (this.formBuilder = t),
              (this.taxasService = n),
              (this.el = r),
              (this.taxas = {}),
              (this.bkpTaxas = {}),
              (this.resultados = []),
              (this.tabela = 'todos'),
              (this.validForm = !0),
              (this.tipoTaxaAVista = '(1 Dia)'),
              (this.visualizacaoDasTaxas = 'vendedor'),
              (this.width = document.querySelector('body').scrollWidth),
              (this.mobile = Object(Zp.isMobile)()),
              (this.section = this.el.nativeElement.querySelector('section')),
              (this.subscriptions = []);
          }
          return (
            _createClass(e, [
              {
                key: 'ngOnInit',
                value: function () {
                  var e = this;
                  for (var t in ((this.taxas = this.taxasService.getTaxas()), this.taxas))
                    this.bkpTaxas[t] = this.taxas[t];
                  (this.form = this.formBuilder.group({
                    valorTransacao: [0, [Zf.required, Zf.min(0.1)]],
                    planoRecebimento: [localStorage.getItem('planoRecebimento') || '1D'],
                    taxaCreditoAVista: [
                      '30D' == localStorage.getItem('planoRecebimento')
                        ? localStorage.getItem('creditoAVista30D') || this.taxas.creditoAVista30D
                        : localStorage.getItem('creditoAVista1D') || this.taxas.creditoAVista1D,
                    ],
                    taxaCreditoParcelado2a6: [
                      '30D' == localStorage.getItem('planoRecebimento')
                        ? localStorage.getItem('creditoParcelado2a630D') ||
                          this.taxas.creditoParcelado2a630D
                        : localStorage.getItem('creditoParcelado2a61D') ||
                          this.taxas.creditoParcelado2a61D,
                    ],
                    taxaCreditoParcelado7a12: [
                      '30D' == localStorage.getItem('planoRecebimento')
                        ? localStorage.getItem('CreditoParcelado7a1230D') ||
                          this.taxas.creditoParcelado7a1230D
                        : localStorage.getItem('CreditoParcelado7a121D') ||
                          this.taxas.creditoParcelado7a121D,
                    ],
                    taxaDebito: [this.taxas.debitoNull],
                    taxaParcelamento: [localStorage.getItem('taxaParcelamento') || 0],
                    promocao: ['null'],
                    visualizacaoDasTaxas: [
                      localStorage.getItem('visualizacaoDasTaxas') || 'vendedor',
                    ],
                  })),
                    this.subscriptions.push(
                      this.form.get('visualizacaoDasTaxas').valueChanges.subscribe(function (e) {
                        localStorage.setItem('visualizacaoDasTaxas', e);
                      })
                    ),
                    this.subscriptions.push(
                      this.form.get('taxaParcelamento').valueChanges.subscribe(function (e) {
                        localStorage.setItem('taxaParcelamento', e);
                      })
                    ),
                    this.subscriptions.push(
                      this.form.get('taxaDebito').valueChanges.subscribe(function (t) {
                        e.atualizarTxDebito(e.form.get('promocao').value, t);
                      })
                    ),
                    this.subscriptions.push(
                      this.form.get('taxaCreditoAVista').valueChanges.subscribe(function (t) {
                        e.atualizarTxCredAVista(e.form.get('planoRecebimento').value, t);
                      })
                    ),
                    this.subscriptions.push(
                      this.form.get('taxaCreditoParcelado2a6').valueChanges.subscribe(function (t) {
                        e.atualizarTxCredParcelado2a6(e.form.get('planoRecebimento').value, t),
                          e.form.get('taxaCreditoParcelado7a12').setValue(t);
                      })
                    ),
                    this.subscriptions.push(
                      this.form
                        .get('taxaCreditoParcelado7a12')
                        .valueChanges.subscribe(function (t) {
                          e.atualizarTxCredParcelado7a12(e.form.get('planoRecebimento').value, t);
                        })
                    ),
                    this.subscriptions.push(
                      this.form.get('planoRecebimento').valueChanges.subscribe(function (t) {
                        localStorage.setItem('planoRecebimento', t);
                        var n = e.obterTxCredito(t);
                        e.form.get('taxaCreditoParcelado2a6').setValue(n.parcelado2a6),
                          e.form.get('taxaCreditoParcelado7a12').setValue(n.parcelado7a12),
                          e.atualizarValorCredAVista(n.aVista),
                          (e.tipoTaxaAVista = n.tipoTaxaAVista);
                      })
                    ),
                    this.subscriptions.push(
                      this.form.get('promocao').valueChanges.subscribe(function (t) {
                        var n = e.obterTxCredito(e.form.get('planoRecebimento').value),
                          r = e.obterTxDebito(t);
                        e.form.get('taxaDebito').setValue(r.taxa),
                          e.atualizarValorCredAVista(n.aVista);
                      })
                    ),
                    this.subscriptions.push(
                      this.form.get('visualizacaoDasTaxas').valueChanges.subscribe(function (t) {
                        (e.visualizacaoDasTaxas = t), setTimeout(function () {}, 300);
                      })
                    ),
                    this.form.get('valorTransacao').valueChanges.subscribe(function (t) {
                      t > 0.1 && (e.validForm = 'VALID' == e.form.get('valorTransacao').status);
                    });
                },
              },
              {
                key: 'atualizarTxDebito',
                value: function (e, t) {
                  var n = this;
                  return {
                    0: function () {
                      return (n.taxas.debito0 = t), localStorage.setItem('debito0', t.toString());
                    },
                    199: function () {
                      return (
                        (n.taxas.debito199 = t), localStorage.setItem('debito199', t.toString())
                      );
                    },
                    null: function () {
                      return (
                        (n.taxas.debitoNull = t), localStorage.setItem('debitoNull', t.toString())
                      );
                    },
                  }[e]();
                },
              },
              {
                key: 'atualizarTxCredAVista',
                value: function (e, t) {
                  var n = this;
                  if ('0' != this.form.get('promocao').value)
                    return {
                      '1D': function () {
                        return (
                          (n.taxas.creditoAVista1D = t),
                          localStorage.setItem('creditoAVista1D', t.toString())
                        );
                      },
                      '30D': function () {
                        return (
                          (n.taxas.creditoAVista30D = t),
                          localStorage.setItem('creditoAVista30D', t.toString())
                        );
                      },
                    }[e]();
                  (this.taxas.creditoAVista0 = t),
                    localStorage.setItem('creditoAVista0', t.toString());
                },
              },
              {
                key: 'atualizarTxCredParcelado2a6',
                value: function (e, t) {
                  var n = this;
                  return {
                    '1D': function () {
                      return (
                        (n.taxas.creditoParcelado2a61D = t),
                        localStorage.setItem('creditoParcelado2a61D', t.toString())
                      );
                    },
                    '30D': function () {
                      return (
                        (n.taxas.creditoParcelado2a630D = t),
                        localStorage.setItem('creditoParcelado2a630D', t.toString())
                      );
                    },
                  }[e]();
                },
              },
              {
                key: 'atualizarTxCredParcelado7a12',
                value: function (e, t) {
                  var n = this;
                  return {
                    '1D': function () {
                      return (
                        (n.taxas.creditoParcelado7a121D = t),
                        localStorage.setItem('creditoParcelado7a121D', t.toString())
                      );
                    },
                    '30D': function () {
                      return (
                        (n.taxas.creditoParcelado7a1230D = t),
                        localStorage.setItem('creditoParcelado7a1230D', t.toString())
                      );
                    },
                  }[e]();
                },
              },
              {
                key: 'atualizarValorCredAVista',
                value: function (e) {
                  '0' === this.form.get('promocao').value
                    ? this.form.get('taxaCreditoAVista').setValue(this.taxas.creditoAVista0)
                    : this.form.get('taxaCreditoAVista').setValue(e);
                },
              },
              {
                key: 'obterTxCredito',
                value: function (e) {
                  return {
                    '1D': {
                      parcelado2a6: this.taxas.creditoParcelado2a61D,
                      parcelado7a12: this.taxas.creditoParcelado7a121D,
                      aVista: this.taxas.creditoAVista1D,
                      tipoTaxaAVista: '(1 Dia)',
                    },
                    '30D': {
                      parcelado2a6: this.taxas.creditoParcelado2a630D,
                      parcelado7a12: this.taxas.creditoParcelado7a1230D,
                      aVista: this.taxas.creditoAVista30D,
                      tipoTaxaAVista: '(30 Dias)',
                    },
                  }[e];
                },
              },
              {
                key: 'obterTxDebito',
                value: function (e) {
                  return {
                    0: { taxa: this.taxas.debito0 },
                    199: { taxa: this.taxas.debito199 },
                    null: { taxa: this.taxas.debitoNull },
                  }[e];
                },
              },
              {
                key: 'validarFormulario',
                value: function () {
                  this.validForm = 'VALID' == this.form.get('valorTransacao').status;
                },
              },
              {
                key: 'calculaAVista',
                value: function (e, t) {
                  var n = 'D\xe9b.' === t ? e.taxaDebito : e.taxaCreditoAVista,
                    r = e.valorTransacao,
                    i = Number((100 * n).toFixed(3)),
                    a = r / (1 - (i /= 100) / 100),
                    o = {};
                  (o.nome = { curto: t, longo: 'D\xe9b.' === t ? 'D\xe9bito' : 'Cr\xe9dito 1x' }),
                    (o.txIntermediacao = 'D\xe9b.' === t ? 0 : n),
                    (o.qtdeParcelas = 1),
                    (o.txParcelamento = 0),
                    (o.txTotal = i),
                    (o.valorVenda = r),
                    (o.valorParcelaDespesaVendedor = r),
                    (o.valorTxIntermediacaoVendedor = 'D\xe9b.' === t ? 0 : n),
                    (o.valorTxParcelamentoVendedor = 0),
                    (o.valorTxDespesaVendedor = (r * i) / 100),
                    (o.valorTxDebito = 'D\xe9b.' === t ? i : 0),
                    (o.valorLiquidoDespesaVendedor = r - o.valorTxDespesaVendedor),
                    (o.valorVendaDespesaCliente = a),
                    (o.valorParcelaDespesaCliente = a),
                    (o.valorTxIntermediacaoCliente = 'D\xe9b.' === t ? 0 : n),
                    (o.valorTxParcelamentoCliente = 0),
                    (o.txDebitoJurosCliente = a - r),
                    (o.valorTxDespesaCliente = o.txDebitoJurosCliente),
                    (o.valorLiquidoDespesaClientel = r),
                    (o.valorVendaDespesaParcelamentoCliente = r),
                    (o.valorParcelaDespesaParcelamentoCliente = r),
                    (o.valorLiquidoDespesaIntermediacaoCliente = r - o.valorTxDespesaVendedor),
                    this.resultados.push(o);
                },
              },
              {
                key: 'calculaParcelado',
                value: function (e) {
                  for (var t = e.valorTransacao, n = 2; n <= 12; n++) {
                    var r = this.calcularTxParcelamento(t, n, e.taxaParcelamento / 100),
                      i = {};
                    (i.nome = { curto: n + 'x', longo: 'Cr\xe9dito '.concat(n, 'x') }),
                      (i.qtdeParcelas = n),
                      (i.txIntermediacao =
                        n <= 6
                          ? parseFloat(e.taxaCreditoParcelado2a6)
                          : parseFloat(e.taxaCreditoParcelado7a12)),
                      (i.txParcelamento = (r / t) * 100),
                      (i.txParcelamento = Number(i.txParcelamento.toFixed(2))),
                      (i.txTotal = i.txIntermediacao + i.txParcelamento),
                      (i.valorVenda = t),
                      (i.valorParcelaDespesaVendedor = t / n),
                      (i.valorTxIntermediacaoVendedor = (t * i.txIntermediacao) / 100),
                      (i.valorTxParcelamentoVendedor = (t * i.txParcelamento) / 100),
                      (i.valorTxDespesaVendedor =
                        i.valorTxIntermediacaoVendedor + i.valorTxParcelamentoVendedor),
                      (i.valorLiquidoDespesaVendedor = t - i.valorTxDespesaVendedor),
                      (i.valorVendaDespesaCliente = t / (1 - i.txTotal / 100)),
                      (i.valorParcelaDespesaCliente = i.valorVendaDespesaCliente / n),
                      (i.valorTxIntermediacaoCliente =
                        (i.valorVendaDespesaCliente * i.txIntermediacao) / 100),
                      (i.valorTxParcelamentoCliente =
                        (i.valorVendaDespesaCliente * i.txParcelamento) / 100),
                      (i.valorTxDespesaCliente =
                        i.valorTxIntermediacaoCliente + i.valorTxParcelamentoCliente),
                      (i.valorLiquidoDespesaClientel = t),
                      (i.valorVendaDespesaParcelamentoCliente = t + i.valorTxParcelamentoCliente),
                      (i.valorParcelaDespesaParcelamentoCliente =
                        i.valorVendaDespesaParcelamentoCliente / n),
                      (i.valorLiquidoDespesaIntermediacaoCliente =
                        t - i.valorTxIntermediacaoVendedor),
                      (i.valorTxDebito = 0),
                      (i.txDebitoJurosCliente = 0),
                      this.resultados.push(i);
                  }
                },
              },
              {
                key: 'calcularTxParcelamento',
                value: function (e, t, n) {
                  for (var r = 0, i = e / t, a = 1; a <= t; a++) r += i / Math.pow(1 + n, a);
                  return e - r;
                },
              },
              {
                key: 'calcular',
                value: function (e) {
                  this.validarFormulario(),
                    this.validForm
                      ? ((this.resultados = []),
                        this.calculaAVista(e, 'D\xe9b.'),
                        this.calculaAVista(e, '1x'),
                        this.calculaParcelado(e))
                      : (this.validarFormulario(),
                        this.el.nativeElement.querySelector('.valorTransacao').focus());
                },
              },
              {
                key: 'limpar',
                value: function () {
                  for (var e in ((this.resultados = []),
                  (this.validForm = !0),
                  this.el.nativeElement.querySelector('.valorTransacao').focus(),
                  this.taxas))
                    this.taxas[e] = this.bkpTaxas[e];
                  this.form.setValue({
                    valorTransacao: 0,
                    planoRecebimento: '1D',
                    taxaCreditoAVista: 0,
                    taxaCreditoParcelado2a6: 0,
                    taxaCreditoParcelado7a12: 0,
                    taxaDebito: 0,
                    taxaParcelamento: 0,
                    promocao: 'null',
                    visualizacaoDasTaxas: 'vendedor',
                  });
                },
              },
              {
                key: 'recalcular',
                value: function () {
                  (this.resultados = []),
                    (this.validForm = !0),
                    this.el.nativeElement.querySelector('.valorTransacao').focus();
                },
              },
              {
                key: 'getWidth',
                value: function () {
                  (this.width = document.querySelector('body').scrollWidth),
                    (this.mobile = Object(Zp.isMobile)());
                },
              },
              {
                key: 'removerTooltip',
                value: function () {
                  document.querySelector('bs-tooltip-container') &&
                    document.querySelector('bs-tooltip-container').classList.remove('show');
                },
              },
              {
                key: 'addTooltip',
                value: function () {
                  document.querySelector('bs-tooltip-container') &&
                    document.querySelector('bs-tooltip-container').classList.add('show');
                },
              },
              {
                key: 'ngOnDestroy',
                value: function () {
                  this.subscriptions.forEach(function (e) {
                    e.unsubscribe();
                  });
                },
              },
            ]),
            e
          );
        })(),
        Qp =
          (((Mp = (function () {
            function e() {
              _classCallCheck(this, e),
                (this.taxas = {
                  creditoParcelado2a61D: localStorage.getItem('creditoParcelado2a61D') || 0,
                  creditoParcelado2a630D: localStorage.getItem('creditoParcelado2a630D') || 0,
                  creditoParcelado7a121D: localStorage.getItem('creditoParcelado7a121D') || 0,
                  creditoParcelado7a1230D: localStorage.getItem('creditoParcelado7a1230D') || 0,
                  creditoAVista1D: localStorage.getItem('creditoAVista1D') || 0,
                  creditoAVista30D: localStorage.getItem('creditoAVista30D') || 0,
                  creditoAVista0: localStorage.getItem('creditoAVista0') || 0,
                  debito0: localStorage.getItem('debito0') || 0,
                  debito199: localStorage.getItem('debito199') || 0,
                  debitoNull: localStorage.getItem('debitoNull') || 0,
                });
            }
            return (
              _createClass(e, [
                {
                  key: 'getTaxas',
                  value: function () {
                    return this.taxas;
                  },
                },
              ]),
              e
            );
          })()).ngInjectableDef = ve({
            factory: function () {
              return new Mp();
            },
            token: Mp,
            providedIn: 'root',
          })),
          Mp),
        Yp = jn({
          encapsulation: 0,
          styles: [
            [
              '.fa-exclamation-triangle[_ngcontent-%COMP%]{color:var(--yellow)}.col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .limpar[_ngcontent-%COMP%]{padding-top:3px}.calcular[_ngcontent-%COMP%], .limpar[_ngcontent-%COMP%]{padding-top:10px}.calcular[_ngcontent-%COMP%]{font-size:12px;color:var(--blue)}div.calcular[_ngcontent-%COMP%]:hover{transition:.1s;color:var(--blue)}.alert-erro[_ngcontent-%COMP%], label[_ngcontent-%COMP%]{font-size:16px;font-weight:600}.alert-erro[_ngcontent-%COMP%]{position:absolute;top:5px;right:15px;color:var(--red);display:block}button[_ngcontent-%COMP%]:disabled{cursor:no-drop}div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:15px}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .titulo1[_ngcontent-%COMP%]{background-color:#888a8bf8}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .titulo2[_ngcontent-%COMP%]{background-color:#17a2b8}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .titulo4[_ngcontent-%COMP%]{background-color:#d4ae53}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .titulo3[_ngcontent-%COMP%]{background-color:#964980}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:#fff;font-weight:500;font-size:14px}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .subtitulo1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .subtitulo2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .subtitulo3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .subtitulo4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .subtitulo1[_ngcontent-%COMP%]{background-color:#aaacad}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .subtitulo2[_ngcontent-%COMP%]{background-color:#58a9b6}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .subtitulo4[_ngcontent-%COMP%]{background-color:#c9ab66}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .subtitulo3[_ngcontent-%COMP%]{background-color:#c378ae}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#e6e9e9}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#d9dddd}div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:14px}div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:14px;vertical-align:middle}table[_ngcontent-%COMP%]{font-size:1px}section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.titulo-plano[_ngcontent-%COMP%]{font-size:12px;font-weight:700}.customClass[_ngcontent-%COMP%]{background-color:#964980}[_nghost-%COMP%] .tooltip-inner{border:2px solid #000;background-color:var(--dark);color:var(--light);font-size:13px;border-top-color:#000}[_nghost-%COMP%] .tooltip.bottom .tooltip-arrow:before, [_nghost-%COMP%] .tooltip.top .tooltip-arrow:before{border-top-color:#000;border-bottom-color:#000}section[_ngcontent-%COMP%]{box-shadow:0 0 2px var(--dark)}#dadosTabela[_ngcontent-%COMP%]{width:100%;margin:0 auto;transition:all .3s ease}#dadosTabela[_ngcontent-%COMP%]:hidden{transition:all .3s ease}[_ngcontent-%COMP%]::-webkit-scrollbar{-webkit-appearance:none;height:5px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:var(--secondary)}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--maq);border-radius:15px}.obs[_ngcontent-%COMP%]{font-style:italic}.fa-info-circle[_ngcontent-%COMP%]{color:var(--maq)}.all-table[_ngcontent-%COMP%]{height:600px}@media (min-width:376px){[_ngcontent-%COMP%]::-webkit-scrollbar{-webkit-appearance:none;height:8px}}@media (min-width:768px){.top-form[_ngcontent-%COMP%]{padding-top:90px!important}.limpar[_ngcontent-%COMP%]{padding-top:14px}.alert-erro[_ngcontent-%COMP%]{display:inline;top:9px}.alert-erro[_ngcontent-%COMP%], .obs[_ngcontent-%COMP%], label[_ngcontent-%COMP%]{font-size:12px}}@media (min-width:992px){.top-form[_ngcontent-%COMP%]{padding-top:170px!important}.limpar[_ngcontent-%COMP%]{padding-top:36px}.calcular[_ngcontent-%COMP%]{padding-top:32px}}',
            ],
          ],
          data: {},
        });
      function Jp(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(
              0,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'alert-erro']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Ba(-1, null, ['Valor obrigat\xf3rio! '])),
          ],
          null,
          null
        );
      }
      function Xp(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(0, 0, null, null, 0, 'div', [['class', 'col-md-6']], null, null, null, null, null)),
          ],
          null,
          null
        );
      }
      function ev(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(
              0,
              0,
              null,
              null,
              1,
              'th',
              [
                ['class', 'text-center titulo2'],
                ['colspan', '3'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Ba(-1, null, [' VENDEDOR ARCANDO COM TODAS AS TAXAS '])),
          ],
          null,
          null
        );
      }
      function tv(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(
              0,
              0,
              null,
              null,
              1,
              'th',
              [
                ['class', 'text-center titulo4'],
                ['colspan', '4'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Ba(-1, null, [' CLIENTE ARCANDO COM TODAS AS TAXAS '])),
          ],
          null,
          null
        );
      }
      function nv(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(
              0,
              0,
              null,
              null,
              1,
              'th',
              [
                ['class', 'text-center titulo3'],
                ['colspan', '4'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Ba(-1, null, [' CLIENTE ARCANDO COM A TAXA DE PARCELAMENTO '])),
          ],
          null,
          null
        );
      }
      function rv(e) {
        return $a(
          0,
          [(e()(), Ba(-1, null, [' Descri\xe7\xe3o do plano de pagamento. ']))],
          null,
          null
        );
      }
      function iv(e) {
        return $a(0, [(e()(), Ba(-1, null, [' Taxa de parcelamento ao m\xeas. ']))], null, null);
      }
      function av(e) {
        return $a(
          0,
          [
            (e()(),
            Ba(-1, null, [' Taxa de intermedia\xe7\xe3o mais a taxa de parcelamento ao m\xeas. '])),
          ],
          null,
          null
        );
      }
      function ov(e) {
        return $a(
          0,
          [
            (e()(),
            Ba(-1, null, [
              ' Parcela sem acr\xe9scimo no caso do vendedor arcar com os descontos. ',
            ])),
          ],
          null,
          null
        );
      }
      function lv(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(
              0,
              0,
              null,
              null,
              4,
              'th',
              [['class', 'text-center subtitulo2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Aa(0, [['subtitulo4', 2]], null, 0, null, ov)),
            (e()(),
            Ra(
              2,
              16777216,
              null,
              null,
              2,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              3,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(-1, null, ['Valor das Parcelas ao Cliente'])),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          null
        );
      }
      function uv(e) {
        return $a(
          0,
          [(e()(), Ba(-1, null, [' Valor das taxas de intermedia\xe7\xe3o e de parcelamento. ']))],
          null,
          null
        );
      }
      function sv(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(
              0,
              0,
              null,
              null,
              4,
              'th',
              [['class', 'text-center subtitulo2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Aa(0, [['subtitulo5', 2]], null, 0, null, uv)),
            (e()(),
            Ra(
              2,
              16777216,
              null,
              null,
              2,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              3,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(-1, null, ['Valor das taxas'])),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          null
        );
      }
      function cv(e) {
        return $a(
          0,
          [
            (e()(),
            Ba(-1, null, [
              ' Valor da compra subtra\xeddo da taxa. \xc9 o valor que o vendedor ir\xe1 receber. ',
            ])),
          ],
          null,
          null
        );
      }
      function hv(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(
              0,
              0,
              null,
              null,
              4,
              'th',
              [['class', 'text-center subtitulo2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Aa(0, [['subtitulo6', 2]], null, 0, null, cv)),
            (e()(),
            Ra(
              2,
              16777216,
              null,
              null,
              2,
              'span',
              [
                ['class', 'text-center'],
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              3,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(-1, null, ['Vendedor Recebe'])),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          null
        );
      }
      function dv(e) {
        return $a(
          0,
          [
            (e()(),
            Ba(-1, null, [
              ' Valor da compra no caso do vendedor repassar as taxas do financiamento ao cliente. Vendedor ir\xe1 receber o valor integral da transa\xe7\xe3o.',
            ])),
          ],
          null,
          null
        );
      }
      function fv(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(
              0,
              0,
              null,
              null,
              4,
              'th',
              [['class', 'text-center subtitulo4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Aa(0, [['subtitulo7', 2]], null, 0, null, dv)),
            (e()(),
            Ra(
              2,
              16777216,
              null,
              null,
              2,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              3,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(-1, null, ['Valor ao Cliente'])),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          null
        );
      }
      function pv(e) {
        return $a(
          0,
          [
            (e()(),
            Ba(-1, null, [
              ' Valor da parcela no caso do vendedor repassar as taxas do financiamento ao cliente.',
            ])),
          ],
          null,
          null
        );
      }
      function vv(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(
              0,
              0,
              null,
              null,
              4,
              'th',
              [['class', 'text-center subtitulo4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Aa(0, [['subtitulo8', 2]], null, 0, null, pv)),
            (e()(),
            Ra(
              2,
              16777216,
              null,
              null,
              2,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              3,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(-1, null, ['Valor das Parcelas ao Cliente'])),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          null
        );
      }
      function gv(e) {
        return $a(
          0,
          [(e()(), Ba(-1, null, [' Valor das taxas de intermedia\xe7\xe3o e de parcelamento.']))],
          null,
          null
        );
      }
      function mv(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(
              0,
              0,
              null,
              null,
              4,
              'th',
              [['class', 'text-center subtitulo4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Aa(0, [['subtitulo8', 2]], null, 0, null, gv)),
            (e()(),
            Ra(
              2,
              16777216,
              null,
              null,
              2,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              3,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(-1, null, ['Valor das taxas'])),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          null
        );
      }
      function yv(e) {
        return $a(
          0,
          [(e()(), Ba(-1, null, ['\xc9 o valor que o vendedor ir\xe1 receber.']))],
          null,
          null
        );
      }
      function _v(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(
              0,
              0,
              null,
              null,
              4,
              'th',
              [['class', 'text-center subtitulo4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Aa(0, [['subtitulo9', 2]], null, 0, null, yv)),
            (e()(),
            Ra(
              2,
              16777216,
              null,
              null,
              2,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              3,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(-1, null, ['Vendedor Recebe'])),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          null
        );
      }
      function Cv(e) {
        return $a(
          0,
          [
            (e()(),
            Ba(-1, null, ['Valor da compra para o cliente com juros da taxa de parcelamento.'])),
          ],
          null,
          null
        );
      }
      function kv(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(
              0,
              0,
              null,
              null,
              4,
              'th',
              [['class', 'text-center subtitulo3']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Aa(0, [['subtitulo10', 2]], null, 0, null, Cv)),
            (e()(),
            Ra(
              2,
              16777216,
              null,
              null,
              2,
              'span',
              [
                ['class', 'text-center'],
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              3,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(-1, null, ['Valor ao Cliente'])),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          null
        );
      }
      function bv(e) {
        return $a(
          0,
          [
            (e()(),
            Ba(-1, null, ['Valor da parcelada somente com juros da taxa de parcelamento.'])),
          ],
          null,
          null
        );
      }
      function wv(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(
              0,
              0,
              null,
              null,
              4,
              'th',
              [['class', 'text-center subtitulo3']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Aa(0, [['subtitulo11', 2]], null, 0, null, bv)),
            (e()(),
            Ra(
              2,
              16777216,
              null,
              null,
              2,
              'span',
              [
                ['class', 'text-center'],
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              3,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(-1, null, ['Valor das Parcelas ao Cliente'])),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          null
        );
      }
      function xv(e) {
        return $a(
          0,
          [
            (e()(),
            Ba(-1, null, [
              'Valor l\xedquido descontando a taxa de intermedia\xe7\xe3o. \xc9 o valor que o vendedor ir\xe1 receber.',
            ])),
          ],
          null,
          null
        );
      }
      function Sv(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(
              0,
              0,
              null,
              null,
              4,
              'th',
              [['class', 'text-center subtitulo3']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Aa(0, [['subtitulo12', 2]], null, 0, null, xv)),
            (e()(),
            Ra(
              2,
              16777216,
              null,
              null,
              2,
              'span',
              [
                ['class', 'text-center'],
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              3,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(-1, null, ['Vendedor Recebe'])),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          null
        );
      }
      function Ev(e) {
        return $a(
          0,
          [(e()(), Ba(0, null, [' Taxa de Parcelamento ao m\xeas: ', ' '])), ja(1, 2)],
          null,
          function (e, t) {
            var n = Un(
              t,
              0,
              0,
              e(
                t,
                1,
                0,
                Nr(t.parent.parent, 0),
                (null == t.parent.context.$implicit
                  ? null
                  : t.parent.context.$implicit.txParcelamento) / 100,
                '1.2'
              )
            );
            e(t, 0, 0, n);
          }
        );
      }
      function Tv(e) {
        return $a(
          0,
          [
            (e()(), Ba(0, null, ['Taxa de intermedia\xe7\xe3o: ', ' '])),
            ja(1, 2),
            (e()(), Ra(2, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), Ra(3, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), Ba(4, null, [' Taxa de Parcelamento: ', ' '])),
            ja(5, 2),
          ],
          null,
          function (e, t) {
            var n = Un(
              t,
              0,
              0,
              e(
                t,
                1,
                0,
                Nr(t.parent.parent, 0),
                (null == t.parent.context.$implicit
                  ? null
                  : t.parent.context.$implicit.txIntermediacao) /
                  100 +
                  (null == t.parent.context.$implicit
                    ? null
                    : t.parent.context.$implicit.valorTxDebito) /
                    100,
                '1.2'
              )
            );
            e(t, 0, 0, n);
            var r = Un(
              t,
              4,
              0,
              e(
                t,
                5,
                0,
                Nr(t.parent.parent, 0),
                (null == t.parent.context.$implicit
                  ? null
                  : t.parent.context.$implicit.txParcelamento) / 100,
                '1.2'
              )
            );
            e(t, 4, 0, r);
          }
        );
      }
      function Pv(e) {
        return $a(
          0,
          [
            (e()(), Ra(0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(), Ba(-1, null, [' Valor da venda dividido pelas quantidade de parcelas. '])),
            (e()(), Ra(2, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), Ba(3, null, [' ', ' / ', ' '])),
            ja(4, 2),
          ],
          null,
          function (e, t) {
            var n = Un(
              t,
              3,
              0,
              e(
                t,
                4,
                0,
                Nr(t.parent.parent.parent, 1),
                t.parent.parent.context.$implicit.valorVenda,
                'BRL'
              )
            );
            e(t, 3, 0, n, t.parent.parent.context.$implicit.qtdeParcelas);
          }
        );
      }
      function Av(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(0, 0, null, null, 5, 'td', [['class', 'conteudo2']], null, null, null, null, null)),
            (e()(), Aa(0, [['parcelaCliente', 2]], null, 0, null, Pv)),
            (e()(),
            Ra(
              2,
              16777216,
              null,
              null,
              3,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              3,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(4, null, ['', ''])),
            ja(5, 2),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          function (e, t) {
            var n = Un(
              t,
              4,
              0,
              e(
                t,
                5,
                0,
                Nr(t.parent.parent, 1),
                null == t.parent.context.$implicit
                  ? null
                  : t.parent.context.$implicit.valorParcelaDespesaVendedor,
                'BRL'
              )
            );
            e(t, 4, 0, n);
          }
        );
      }
      function Rv(e) {
        return $a(
          0,
          [
            (e()(), Ba(0, null, [' Valor de desconto da taxa D\xe9bito: ', ' '])),
            ja(1, 2),
            (e()(), Ra(2, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), Ra(3, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), Ba(4, null, [' Valor de desconto da taxa de intermedia\xe7\xe3o: ', ' '])),
            ja(5, 2),
            (e()(), Ra(6, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), Ra(7, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), Ba(8, null, [' Valor de desconto da taxa de Parcelamento: ', ' '])),
            ja(9, 2),
          ],
          null,
          function (e, t) {
            var n = Un(
              t,
              0,
              0,
              e(
                t,
                1,
                0,
                Nr(t.parent.parent.parent, 1),
                t.parent.parent.context.$implicit.valorTxDebito,
                'BRL'
              )
            );
            e(t, 0, 0, n);
            var r = Un(
              t,
              4,
              0,
              e(
                t,
                5,
                0,
                Nr(t.parent.parent.parent, 1),
                null == t.parent.parent.context.$implicit
                  ? null
                  : t.parent.parent.context.$implicit.valorTxIntermediacaoVendedor,
                'BRL'
              )
            );
            e(t, 4, 0, r);
            var i = Un(
              t,
              8,
              0,
              e(
                t,
                9,
                0,
                Nr(t.parent.parent.parent, 1),
                null == t.parent.parent.context.$implicit
                  ? null
                  : t.parent.parent.context.$implicit.valorTxParcelamentoVendedor,
                'BRL'
              )
            );
            e(t, 8, 0, i);
          }
        );
      }
      function Iv(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(0, 0, null, null, 5, 'td', [['class', 'conteudo2']], null, null, null, null, null)),
            (e()(), Aa(0, [['valorTxDespesaVendedor', 2]], null, 0, null, Rv)),
            (e()(),
            Ra(
              2,
              16777216,
              null,
              null,
              3,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              3,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(4, null, [' ', ''])),
            ja(5, 2),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          function (e, t) {
            var n = Un(
              t,
              4,
              0,
              e(
                t,
                5,
                0,
                Nr(t.parent.parent, 1),
                t.parent.context.$implicit.valorTxDespesaVendedor,
                'BRL'
              )
            );
            e(t, 4, 0, n);
          }
        );
      }
      function Ov(e) {
        return $a(
          0,
          [
            (e()(), Ra(0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(), Ba(-1, null, [' Valor da venda subtra\xeddo pelo Valor da venda das taxas. '])),
            (e()(), Ra(2, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), Ba(3, null, [' ', ' - ', ' '])),
            ja(4, 2),
            ja(5, 2),
          ],
          null,
          function (e, t) {
            var n = Un(
                t,
                3,
                0,
                e(
                  t,
                  4,
                  0,
                  Nr(t.parent.parent.parent, 1),
                  t.parent.parent.context.$implicit.valorVenda,
                  'BRL'
                )
              ),
              r = Un(
                t,
                3,
                1,
                e(
                  t,
                  5,
                  0,
                  Nr(t.parent.parent.parent, 1),
                  t.parent.parent.context.$implicit.valorTxDespesaVendedor,
                  'BRL'
                )
              );
            e(t, 3, 0, n, r);
          }
        );
      }
      function Dv(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(
              0,
              0,
              null,
              null,
              7,
              'td',
              [
                ['class', 'conteudo2 text-center'],
                ['currencyMask', ''],
              ],
              null,
              [
                [null, 'blur'],
                [null, 'cut'],
                [null, 'input'],
                [null, 'keydown'],
                [null, 'keypress'],
                [null, 'paste'],
                [null, 'drop'],
              ],
              function (e, t, n) {
                var r = !0;
                return (
                  'blur' === t && (r = !1 !== Nr(e, 2).handleBlur(n) && r),
                  'cut' === t && (r = !1 !== Nr(e, 2).handleCut(n) && r),
                  'input' === t && (r = !1 !== Nr(e, 2).handleInput(n) && r),
                  'keydown' === t && (r = !1 !== Nr(e, 2).handleKeydown(n) && r),
                  'keypress' === t && (r = !1 !== Nr(e, 2).handleKeypress(n) && r),
                  'paste' === t && (r = !1 !== Nr(e, 2).handlePaste(n) && r),
                  'drop' === t && (r = !1 !== Nr(e, 2).handleDrop(n) && r),
                  r
                );
              },
              null,
              null
            )),
            Yr(
              5120,
              null,
              Nf,
              function (e) {
                return [e];
              },
              [$p]
            ),
            Kr(2, 4538368, null, 0, $p, [[2, zp], Qt, vn], null, null),
            (e()(), Aa(0, [['valorLiquidoDespesaVendedor', 2]], null, 0, null, Ov)),
            (e()(),
            Ra(
              4,
              16777216,
              null,
              null,
              3,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              5,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(6, null, [' ', ' '])),
            ja(7, 2),
          ],
          function (e, t) {
            e(t, 2, 0), e(t, 5, 0, Nr(t, 3), 'auto', 'div');
          },
          function (e, t) {
            var n = Un(
              t,
              6,
              0,
              e(
                t,
                7,
                0,
                Nr(t.parent.parent, 1),
                t.parent.context.$implicit.valorLiquidoDespesaVendedor,
                'BRL'
              )
            );
            e(t, 6, 0, n);
          }
        );
      }
      function Vv(e) {
        return $a(
          0,
          [
            (e()(), Ra(0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(), Ba(-1, null, [' Valor da venda somado ao Valor do total de taxas. '])),
            (e()(), Ba(2, null, [' ', ' + ', ' '])),
            ja(3, 2),
            ja(4, 2),
          ],
          null,
          function (e, t) {
            var n = Un(
                t,
                2,
                0,
                e(
                  t,
                  3,
                  0,
                  Nr(t.parent.parent.parent, 1),
                  t.parent.parent.context.$implicit.valorVenda,
                  'BRL'
                )
              ),
              r = Un(
                t,
                2,
                1,
                e(
                  t,
                  4,
                  0,
                  Nr(t.parent.parent.parent, 1),
                  t.parent.parent.context.$implicit.valorTxDespesaCliente,
                  'BRL'
                )
              );
            e(t, 2, 0, n, r);
          }
        );
      }
      function Mv(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(0, 0, null, null, 5, 'td', [['class', 'conteudo4']], null, null, null, null, null)),
            (e()(), Aa(0, [['valorVendaDespesaCliente', 2]], null, 0, null, Vv)),
            (e()(),
            Ra(
              2,
              16777216,
              null,
              null,
              3,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              3,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(4, null, [' ', ''])),
            ja(5, 2),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          function (e, t) {
            var n = Un(
              t,
              4,
              0,
              e(
                t,
                5,
                0,
                Nr(t.parent.parent, 1),
                t.parent.context.$implicit.valorVendaDespesaCliente,
                'BRL'
              )
            );
            e(t, 4, 0, n);
          }
        );
      }
      function Nv(e) {
        return $a(
          0,
          [
            (e()(), Ra(0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(), Ba(-1, null, [' Valor da venda dividido pelas quantidade de parcelas. '])),
            (e()(), Ra(2, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), Ba(3, null, [' ', ' / ', ' '])),
            ja(4, 2),
          ],
          null,
          function (e, t) {
            var n = Un(
              t,
              3,
              0,
              e(
                t,
                4,
                0,
                Nr(t.parent.parent.parent, 1),
                t.parent.parent.context.$implicit.valorVendaDespesaCliente,
                'BRL'
              )
            );
            e(t, 3, 0, n, t.parent.parent.context.$implicit.qtdeParcelas);
          }
        );
      }
      function Lv(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(0, 0, null, null, 5, 'td', [['class', 'conteudo4']], null, null, null, null, null)),
            (e()(), Aa(0, [['valorParcelaDespesaCliente', 2]], null, 0, null, Nv)),
            (e()(),
            Ra(
              2,
              16777216,
              null,
              null,
              3,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              3,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(4, null, [' ', ' '])),
            ja(5, 2),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          function (e, t) {
            var n = Un(
              t,
              4,
              0,
              e(
                t,
                5,
                0,
                Nr(t.parent.parent, 1),
                t.parent.context.$implicit.valorParcelaDespesaCliente,
                'BRL'
              )
            );
            e(t, 4, 0, n);
          }
        );
      }
      function Fv(e) {
        return $a(
          0,
          [
            (e()(), Ba(0, null, [' Valor de desconto da taxa D\xe9bito: ', ' '])),
            ja(1, 2),
            (e()(), Ra(2, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), Ra(3, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), Ba(4, null, [' Valor de desconto da taxa de intermedia\xe7\xe3o: ', ' '])),
            ja(5, 2),
            (e()(), Ra(6, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), Ra(7, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), Ba(8, null, [' Valor de desconto da taxa de Parcelamento: ', ' '])),
            ja(9, 2),
          ],
          null,
          function (e, t) {
            var n = Un(
              t,
              0,
              0,
              e(
                t,
                1,
                0,
                Nr(t.parent.parent.parent, 1),
                t.parent.parent.context.$implicit.txDebitoJurosCliente,
                'BRL'
              )
            );
            e(t, 0, 0, n);
            var r = Un(
              t,
              4,
              0,
              e(
                t,
                5,
                0,
                Nr(t.parent.parent.parent, 1),
                null == t.parent.parent.context.$implicit
                  ? null
                  : t.parent.parent.context.$implicit.valorTxIntermediacaoCliente,
                'BRL'
              )
            );
            e(t, 4, 0, r);
            var i = Un(
              t,
              8,
              0,
              e(
                t,
                9,
                0,
                Nr(t.parent.parent.parent, 1),
                null == t.parent.parent.context.$implicit
                  ? null
                  : t.parent.parent.context.$implicit.valorTxParcelamentoCliente,
                'BRL'
              )
            );
            e(t, 8, 0, i);
          }
        );
      }
      function Uv(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(0, 0, null, null, 5, 'td', [['class', 'conteudo4']], null, null, null, null, null)),
            (e()(), Aa(0, [['valorTxDespesaCliente', 2]], null, 0, null, Fv)),
            (e()(),
            Ra(
              2,
              16777216,
              null,
              null,
              3,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              3,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(4, null, ['', ''])),
            ja(5, 2),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          function (e, t) {
            var n = Un(
              t,
              4,
              0,
              e(
                t,
                5,
                0,
                Nr(t.parent.parent, 1),
                t.parent.context.$implicit.valorTxDespesaCliente,
                'BRL'
              )
            );
            e(t, 4, 0, n);
          }
        );
      }
      function jv(e) {
        return $a(
          0,
          [
            (e()(), Ra(0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(), Ba(-1, null, [' Valor liqu\xeddo da venda. '])),
          ],
          null,
          null
        );
      }
      function Hv(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(0, 0, null, null, 5, 'td', [['class', 'conteudo4']], null, null, null, null, null)),
            (e()(), Aa(0, [['valorLiquidoDespesaClientel', 2]], null, 0, null, jv)),
            (e()(),
            Ra(
              2,
              16777216,
              null,
              null,
              3,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              3,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(4, null, ['', ''])),
            ja(5, 2),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          function (e, t) {
            var n = Un(
              t,
              4,
              0,
              e(
                t,
                5,
                0,
                Nr(t.parent.parent, 1),
                t.parent.context.$implicit.valorLiquidoDespesaClientel,
                'BRL'
              )
            );
            e(t, 4, 0, n);
          }
        );
      }
      function zv(e) {
        return $a(
          0,
          [
            (e()(), Ra(0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(),
            Ba(-1, null, [
              ' Valor da venda somado ao Valor da taxa do parcelamento pelo cliente. ',
            ])),
            (e()(), Ba(2, null, [' ', ' + ', ' '])),
            ja(3, 2),
            ja(4, 2),
          ],
          null,
          function (e, t) {
            var n = Un(
                t,
                2,
                0,
                e(
                  t,
                  3,
                  0,
                  Nr(t.parent.parent.parent, 1),
                  t.parent.parent.context.$implicit.valorVenda,
                  'BRL'
                )
              ),
              r = Un(
                t,
                2,
                1,
                e(
                  t,
                  4,
                  0,
                  Nr(t.parent.parent.parent, 1),
                  t.parent.parent.context.$implicit.valorTxParcelamentoCliente,
                  'BRL'
                )
              );
            e(t, 2, 0, n, r);
          }
        );
      }
      function Bv(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(0, 0, null, null, 5, 'td', [['class', 'conteudo3']], null, null, null, null, null)),
            (e()(), Aa(0, [['valorVendaDespesaParcelamentoCliente', 2]], null, 0, null, zv)),
            (e()(),
            Ra(
              2,
              16777216,
              null,
              null,
              3,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              3,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(4, null, [' ', ''])),
            ja(5, 2),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          function (e, t) {
            var n = Un(
              t,
              4,
              0,
              e(
                t,
                5,
                0,
                Nr(t.parent.parent, 1),
                t.parent.context.$implicit.valorVendaDespesaParcelamentoCliente,
                'BRL'
              )
            );
            e(t, 4, 0, n);
          }
        );
      }
      function qv(e) {
        return $a(
          0,
          [
            (e()(), Ra(0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(), Ba(-1, null, [' Valor da venda dividido pelas quantidade de parcelas. '])),
            (e()(), Ra(2, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), Ba(3, null, [' ', ' / ', ' '])),
            ja(4, 2),
          ],
          null,
          function (e, t) {
            var n = Un(
              t,
              3,
              0,
              e(
                t,
                4,
                0,
                Nr(t.parent.parent.parent, 1),
                t.parent.parent.context.$implicit.valorVendaDespesaParcelamentoCliente,
                'BRL'
              )
            );
            e(t, 3, 0, n, t.parent.parent.context.$implicit.qtdeParcelas);
          }
        );
      }
      function Gv(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(0, 0, null, null, 5, 'td', [['class', 'conteudo3']], null, null, null, null, null)),
            (e()(), Aa(0, [['valorParcelaDespesaParcelamentoCliente', 2]], null, 0, null, qv)),
            (e()(),
            Ra(
              2,
              16777216,
              null,
              null,
              3,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              3,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(4, null, [' ', ''])),
            ja(5, 2),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          function (e, t) {
            var n = Un(
              t,
              4,
              0,
              e(
                t,
                5,
                0,
                Nr(t.parent.parent, 1),
                t.parent.context.$implicit.valorParcelaDespesaParcelamentoCliente,
                'BRL'
              )
            );
            e(t, 4, 0, n);
          }
        );
      }
      function $v(e) {
        return $a(
          0,
          [
            (e()(), Ra(0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(),
            Ba(-1, null, [
              'Valor da venda subtra\xeddo ao valor da taxa da taxa de intermedia\xe7\xe3o. ',
            ])),
            (e()(), Ra(2, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), Ba(3, null, [' ', ' - ', ' '])),
            ja(4, 2),
            ja(5, 2),
          ],
          null,
          function (e, t) {
            var n = Un(
                t,
                3,
                0,
                e(
                  t,
                  4,
                  0,
                  Nr(t.parent.parent.parent, 1),
                  t.parent.parent.context.$implicit.valorVenda,
                  'BRL'
                )
              ),
              r = Un(
                t,
                3,
                1,
                e(
                  t,
                  5,
                  0,
                  Nr(t.parent.parent.parent, 1),
                  t.parent.parent.context.$implicit.valorTxIntermediacaoVendedor,
                  'BRL'
                )
              );
            e(t, 3, 0, n, r);
          }
        );
      }
      function Wv(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(0, 0, null, null, 5, 'td', [['class', 'conteudo3']], null, null, null, null, null)),
            (e()(), Aa(0, [['valorLiquidoDespesaIntermediacaoCliente', 2]], null, 0, null, $v)),
            (e()(),
            Ra(
              2,
              16777216,
              null,
              null,
              3,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              3,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(4, null, [' ', ''])),
            ja(5, 2),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          function (e, t) {
            var n = Un(
              t,
              4,
              0,
              e(
                t,
                5,
                0,
                Nr(t.parent.parent, 1),
                t.parent.context.$implicit.valorLiquidoDespesaIntermediacaoCliente,
                'BRL'
              )
            );
            e(t, 4, 0, n);
          }
        );
      }
      function Zv(e) {
        return $a(
          0,
          [
            (e()(), Ra(0, 0, null, null, 41, 'tr', [], null, null, null, null, null)),
            Yr(512, null, bl, wl, [pn, vn, Qt, en]),
            Kr(2, 278528, null, 0, xl, [bl], { ngClass: [0, 'ngClass'] }, null),
            Ha(3, { odd: 0, even: 1 }),
            (e()(),
            Ra(
              4,
              0,
              null,
              null,
              3,
              'td',
              [['class', 'conteudo1 titulo-plano']],
              [[8, 'hidden', 0]],
              null,
              null,
              null,
              null
            )),
            (e()(), Ra(5, 16777216, null, null, 2, 'span', [], null, null, null, null, null)),
            Kr(6, 212992, null, 0, Df, [wn, Ud, Rf, Qt, en, xf], { tooltip: [0, 'tooltip'] }, null),
            (e()(), Ba(7, null, ['', ''])),
            (e()(),
            Ra(
              8,
              0,
              null,
              null,
              1,
              'td',
              [['class', 'conteudo1 titulo-plano']],
              [[8, 'hidden', 0]],
              null,
              null,
              null,
              null
            )),
            (e()(), Ba(9, null, ['', ''])),
            (e()(),
            Ra(10, 0, null, null, 5, 'td', [['class', 'conteudo1']], null, null, null, null, null)),
            (e()(), Aa(0, [['txParcelamento', 2]], null, 0, null, Ev)),
            (e()(),
            Ra(
              12,
              16777216,
              null,
              null,
              3,
              'span',
              [
                ['container', 'div'],
                ['triggers', 'hover:!hover'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              13,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], triggers: [1, 'triggers'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(14, null, [' ', ''])),
            ja(15, 2),
            (e()(),
            Ra(16, 0, null, null, 5, 'td', [['class', 'conteudo1']], null, null, null, null, null)),
            (e()(), Aa(0, [['txTotal', 2]], null, 0, null, Tv)),
            (e()(),
            Ra(
              18,
              16777216,
              null,
              null,
              3,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              19,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(20, null, [' ', ''])),
            ja(21, 2),
            (e()(), Aa(16777216, null, null, 1, null, Av)),
            Kr(23, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Aa(16777216, null, null, 1, null, Iv)),
            Kr(25, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Aa(16777216, null, null, 1, null, Dv)),
            Kr(27, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Aa(16777216, null, null, 1, null, Mv)),
            Kr(29, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Aa(16777216, null, null, 1, null, Lv)),
            Kr(31, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Aa(16777216, null, null, 1, null, Uv)),
            Kr(33, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Aa(16777216, null, null, 1, null, Hv)),
            Kr(35, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Aa(16777216, null, null, 1, null, Bv)),
            Kr(37, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Aa(16777216, null, null, 1, null, Gv)),
            Kr(39, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Aa(16777216, null, null, 1, null, Wv)),
            Kr(41, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
          ],
          function (e, t) {
            var n,
              r = t.component,
              i = e(t, 3, 0, t.context.odd, t.context.even);
            e(t, 2, 0, i),
              e(
                t,
                6,
                0,
                '' +
                  (null !=
                  (n =
                    null == t.context.$implicit || null == t.context.$implicit.nome
                      ? null
                      : t.context.$implicit.nome.longo)
                    ? n.toString()
                    : '')
              ),
              e(t, 13, 0, Nr(t, 11), 'hover:!hover', 'div'),
              e(t, 19, 0, Nr(t, 17), 'auto', 'div'),
              e(t, 23, 0, 'vendedor' == r.visualizacaoDasTaxas),
              e(t, 25, 0, 'vendedor' == r.visualizacaoDasTaxas),
              e(t, 27, 0, 'vendedor' == r.visualizacaoDasTaxas),
              e(t, 29, 0, 'cliente' == r.visualizacaoDasTaxas),
              e(t, 31, 0, 'cliente' == r.visualizacaoDasTaxas),
              e(t, 33, 0, 'cliente' == r.visualizacaoDasTaxas),
              e(t, 35, 0, 'cliente' == r.visualizacaoDasTaxas),
              e(t, 37, 0, 'vendedor' == r.visualizacaoDasTaxas),
              e(t, 39, 0, 'vendedor' == r.visualizacaoDasTaxas),
              e(t, 41, 0, 'vendedor' == r.visualizacaoDasTaxas);
          },
          function (e, t) {
            var n = t.component;
            e(t, 4, 0, n.width > 375),
              e(
                t,
                7,
                0,
                null == t.context.$implicit || null == t.context.$implicit.nome
                  ? null
                  : t.context.$implicit.nome.curto
              ),
              e(t, 8, 0, n.width <= 375),
              e(
                t,
                9,
                0,
                null == t.context.$implicit || null == t.context.$implicit.nome
                  ? null
                  : t.context.$implicit.nome.longo
              );
            var r = Un(
              t,
              14,
              0,
              e(
                t,
                15,
                0,
                Nr(t.parent, 0),
                (null == t.context.$implicit ? null : t.context.$implicit.txParcelamento) / 100,
                '1.2-3'
              )
            );
            e(t, 14, 0, r);
            var i = Un(
              t,
              20,
              0,
              e(
                t,
                21,
                0,
                Nr(t.parent, 0),
                (null == t.context.$implicit ? null : t.context.$implicit.txTotal) / 100,
                '1.2-3'
              )
            );
            e(t, 20, 0, i);
          }
        );
      }
      function Kv(e) {
        return $a(
          0,
          [
            Qr(0, Ol, [Ri]),
            Qr(0, Dl, [Ri]),
            (e()(),
            Ra(
              2,
              0,
              null,
              null,
              204,
              'div',
              [['class', 'all-table']],
              null,
              [
                ['window', 'resize'],
                ['window', 'scroll'],
                ['window', 'click'],
              ],
              function (e, t, n) {
                var r = !0,
                  i = e.component;
                return (
                  'window:resize' === t && (r = !1 !== i.getWidth() && r),
                  'window:scroll' === t && (r = !1 !== i.removerTooltip() && r),
                  'window:click' === t && (r = !1 !== i.addTooltip() && r),
                  r
                );
              },
              null,
              null
            )),
            (e()(),
            Ra(
              3,
              0,
              null,
              null,
              137,
              'div',
              [['class', 'container pt-1']],
              [
                [2, 'top-form', null],
                [8, 'hidden', 0],
              ],
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ra(
              4,
              0,
              null,
              null,
              136,
              'div',
              [['class', 'card card-principal']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ra(
              5,
              0,
              null,
              null,
              135,
              'div',
              [['class', 'card-body']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ra(
              6,
              0,
              null,
              null,
              134,
              'form',
              [['novalidate', '']],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'submit'],
                [null, 'reset'],
              ],
              function (e, t, n) {
                var r = !0;
                return (
                  'submit' === t && (r = !1 !== Nr(e, 8).onSubmit(n) && r),
                  'reset' === t && (r = !1 !== Nr(e, 8).onReset() && r),
                  r
                );
              },
              null,
              null
            )),
            Kr(7, 16384, null, 0, Tp, [], null, null),
            Kr(
              8,
              540672,
              null,
              0,
              Ap,
              [
                [8, null],
                [8, null],
              ],
              { form: [0, 'form'] },
              null
            ),
            Yr(2048, null, jf, null, [Ap]),
            Kr(10, 16384, null, 0, Gf, [[4, jf]], null, null),
            (e()(),
            Ra(11, 0, null, null, 129, 'div', [['class', 'row']], null, null, null, null, null)),
            (e()(),
            Ra(
              12,
              0,
              null,
              null,
              16,
              'div',
              [['class', 'col-md-6 col-lg-4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ra(
              13,
              0,
              null,
              null,
              3,
              'label',
              [
                ['class', ''],
                ['for', 'valorTransacao'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Ba(-1, null, ['Valor da Venda: '])),
            (e()(),
            Ra(
              15,
              16777216,
              null,
              null,
              1,
              'i',
              [
                ['class', 'fas ml-1 fa-exclamation-triangle'],
                [
                  'tooltip',
                  'Digite aqui o valor da transa\xe7\xe3o, essa informa\xe7\xe3o \xe9 obrigat\xf3ria.',
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              16,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'] },
              null
            ),
            (e()(), Aa(16777216, null, null, 1, null, Jp)),
            Kr(18, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(),
            Ra(
              19,
              0,
              null,
              null,
              9,
              'input',
              [
                ['autofocus', ''],
                ['class', 'form-control valorTransacao'],
                ['currencyMask', ''],
                ['formControlName', 'valorTransacao'],
                ['id', 'valorTransacao'],
                ['inputmode', 'numeric'],
                ['name', 'valorTransacao'],
                ['onClick', 'this.select()'],
                ['type', 'text'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'blur'],
                [null, 'input'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'cut'],
                [null, 'keydown'],
                [null, 'keypress'],
                [null, 'paste'],
                [null, 'drop'],
              ],
              function (e, t, n) {
                var r = !0,
                  i = e.component;
                return (
                  'input' === t && (r = !1 !== Nr(e, 23)._handleInput(n.target.value) && r),
                  'blur' === t && (r = !1 !== Nr(e, 23).onTouched() && r),
                  'compositionstart' === t && (r = !1 !== Nr(e, 23)._compositionStart() && r),
                  'compositionend' === t &&
                    (r = !1 !== Nr(e, 23)._compositionEnd(n.target.value) && r),
                  'blur' === t && (r = !1 !== Nr(e, 24).handleBlur(n) && r),
                  'cut' === t && (r = !1 !== Nr(e, 24).handleCut(n) && r),
                  'input' === t && (r = !1 !== Nr(e, 24).handleInput(n) && r),
                  'keydown' === t && (r = !1 !== Nr(e, 24).handleKeydown(n) && r),
                  'keypress' === t && (r = !1 !== Nr(e, 24).handleKeypress(n) && r),
                  'paste' === t && (r = !1 !== Nr(e, 24).handlePaste(n) && r),
                  'drop' === t && (r = !1 !== Nr(e, 24).handleDrop(n) && r),
                  'blur' === t && (r = !1 !== i.validarFormulario() && r),
                  r
                );
              },
              null,
              null
            )),
            Yr(512, null, bl, wl, [pn, vn, Qt, en]),
            Kr(
              21,
              278528,
              null,
              0,
              xl,
              [bl],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            Ha(22, { 'is-invalid': 0 }),
            Kr(23, 16384, null, 0, Ff, [en, Qt, [2, Lf]], null, null),
            Kr(24, 4538368, null, 0, $p, [[2, zp], Qt, vn], null, null),
            Yr(
              1024,
              null,
              Nf,
              function (e, t) {
                return [e, t];
              },
              [Ff, $p]
            ),
            Kr(
              26,
              671744,
              null,
              0,
              Np,
              [
                [3, jf],
                [8, null],
                [8, null],
                [6, Nf],
                [2, Pp],
              ],
              { name: [0, 'name'] },
              null
            ),
            Yr(2048, null, zf, null, [Np]),
            Kr(28, 16384, null, 0, qf, [[4, zf]], null, null),
            (e()(),
            Ra(
              29,
              0,
              null,
              null,
              18,
              'div',
              [['class', 'col-md-6 col-lg-4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ra(
              30,
              0,
              null,
              null,
              3,
              'label',
              [['for', 'planoRecebimento']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Ba(-1, null, ['Plano de Recebimento: '])),
            (e()(),
            Ra(
              32,
              16777216,
              null,
              null,
              1,
              'i',
              [
                ['class', 'far fa-question-circle'],
                [
                  'tooltip',
                  'Possibilita o recebimento de todo o valor das vendas parceladas em uma \xfanica vez (antecipa\xe7\xe3o) ou em parcelas.',
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              33,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'] },
              null
            ),
            (e()(),
            Ra(
              34,
              0,
              null,
              null,
              13,
              'select',
              [
                ['class', 'form-control'],
                ['formControlName', 'planoRecebimento'],
                ['id', 'planoRecebimento'],
                ['name', 'planoRecebimento'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'change'],
                [null, 'blur'],
              ],
              function (e, t, n) {
                var r = !0;
                return (
                  'change' === t && (r = !1 !== Nr(e, 35).onChange(n.target.value) && r),
                  'blur' === t && (r = !1 !== Nr(e, 35).onTouched() && r),
                  r
                );
              },
              null,
              null
            )),
            Kr(35, 16384, null, 0, ap, [en, Qt], null, null),
            Yr(
              1024,
              null,
              Nf,
              function (e) {
                return [e];
              },
              [ap]
            ),
            Kr(
              37,
              671744,
              null,
              0,
              Np,
              [
                [3, jf],
                [8, null],
                [8, null],
                [6, Nf],
                [2, Pp],
              ],
              { name: [0, 'name'] },
              null
            ),
            Yr(2048, null, zf, null, [Np]),
            Kr(39, 16384, null, 0, qf, [[4, zf]], null, null),
            (e()(),
            Ra(40, 0, null, null, 3, 'option', [['value', '1D']], null, null, null, null, null)),
            Kr(41, 147456, null, 0, op, [Qt, en, [2, ap]], { value: [0, 'value'] }, null),
            Kr(42, 147456, null, 0, up, [Qt, en, [8, null]], { value: [0, 'value'] }, null),
            (e()(), Ba(-1, null, ['1 Dia (Antecipado)'])),
            (e()(),
            Ra(44, 0, null, null, 3, 'option', [['value', '30D']], null, null, null, null, null)),
            Kr(45, 147456, null, 0, op, [Qt, en, [2, ap]], { value: [0, 'value'] }, null),
            Kr(46, 147456, null, 0, up, [Qt, en, [8, null]], { value: [0, 'value'] }, null),
            (e()(), Ba(-1, null, ['30 Dias (Normal em parcelas)'])),
            (e()(),
            Ra(
              48,
              0,
              null,
              null,
              12,
              'div',
              [['class', 'col-md-6 col-lg-4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ra(
              49,
              0,
              null,
              null,
              3,
              'label',
              [['for', 'taxaDebito']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Ba(-1, null, ['Taxa D\xe9bito: '])),
            (e()(),
            Ra(
              51,
              16777216,
              null,
              null,
              1,
              'i',
              [
                ['class', 'far fa-question-circle'],
                ['tooltip', 'Taxa cobrada por vendas a d\xe9bito.'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              52,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'] },
              null
            ),
            (e()(),
            Ra(
              53,
              0,
              null,
              null,
              7,
              'input',
              [
                ['class', 'form-control'],
                ['currencyMask', ''],
                ['formControlName', 'taxaDebito'],
                ['id', 'taxaDebito'],
                ['inputmode', 'numeric'],
                ['name', 'taxaDebito'],
                ['onClick', 'this.select()'],
                ['type', 'text'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'cut'],
                [null, 'keydown'],
                [null, 'keypress'],
                [null, 'paste'],
                [null, 'drop'],
              ],
              function (e, t, n) {
                var r = !0;
                return (
                  'input' === t && (r = !1 !== Nr(e, 54)._handleInput(n.target.value) && r),
                  'blur' === t && (r = !1 !== Nr(e, 54).onTouched() && r),
                  'compositionstart' === t && (r = !1 !== Nr(e, 54)._compositionStart() && r),
                  'compositionend' === t &&
                    (r = !1 !== Nr(e, 54)._compositionEnd(n.target.value) && r),
                  'blur' === t && (r = !1 !== Nr(e, 55).handleBlur(n) && r),
                  'cut' === t && (r = !1 !== Nr(e, 55).handleCut(n) && r),
                  'input' === t && (r = !1 !== Nr(e, 55).handleInput(n) && r),
                  'keydown' === t && (r = !1 !== Nr(e, 55).handleKeydown(n) && r),
                  'keypress' === t && (r = !1 !== Nr(e, 55).handleKeypress(n) && r),
                  'paste' === t && (r = !1 !== Nr(e, 55).handlePaste(n) && r),
                  'drop' === t && (r = !1 !== Nr(e, 55).handleDrop(n) && r),
                  r
                );
              },
              null,
              null
            )),
            Kr(54, 16384, null, 0, Ff, [en, Qt, [2, Lf]], null, null),
            Kr(55, 4538368, null, 0, $p, [[2, zp], Qt, vn], { options: [0, 'options'] }, null),
            Ha(56, { decimal: 0, prefix: 1, suffix: 2, thousands: 3 }),
            Yr(
              1024,
              null,
              Nf,
              function (e, t) {
                return [e, t];
              },
              [Ff, $p]
            ),
            Kr(
              58,
              671744,
              null,
              0,
              Np,
              [
                [3, jf],
                [8, null],
                [8, null],
                [6, Nf],
                [2, Pp],
              ],
              { name: [0, 'name'] },
              null
            ),
            Yr(2048, null, zf, null, [Np]),
            Kr(60, 16384, null, 0, qf, [[4, zf]], null, null),
            (e()(),
            Ra(
              61,
              0,
              null,
              null,
              12,
              'div',
              [['class', 'col-md-6 col-lg-4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ra(
              62,
              0,
              null,
              null,
              3,
              'label',
              [['for', 'taxaCreditoAVista']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Ba(63, null, ['Taxa Cr\xe9dito a Vista ', ': '])),
            (e()(),
            Ra(
              64,
              16777216,
              null,
              null,
              1,
              'i',
              [
                ['class', 'far fa-question-circle'],
                ['tooltip', 'Taxa cobrada por vendas em cr\xe9dito \xe0 vista.'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              65,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'] },
              null
            ),
            (e()(),
            Ra(
              66,
              0,
              null,
              null,
              7,
              'input',
              [
                ['class', 'form-control'],
                ['currencyMask', ''],
                ['formControlName', 'taxaCreditoAVista'],
                ['id', 'taxaCreditoAVista'],
                ['inputmode', 'numeric'],
                ['name', 'taxaCreditoAVista'],
                ['onClick', 'this.select()'],
                ['type', 'text'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'cut'],
                [null, 'keydown'],
                [null, 'keypress'],
                [null, 'paste'],
                [null, 'drop'],
              ],
              function (e, t, n) {
                var r = !0;
                return (
                  'input' === t && (r = !1 !== Nr(e, 67)._handleInput(n.target.value) && r),
                  'blur' === t && (r = !1 !== Nr(e, 67).onTouched() && r),
                  'compositionstart' === t && (r = !1 !== Nr(e, 67)._compositionStart() && r),
                  'compositionend' === t &&
                    (r = !1 !== Nr(e, 67)._compositionEnd(n.target.value) && r),
                  'blur' === t && (r = !1 !== Nr(e, 68).handleBlur(n) && r),
                  'cut' === t && (r = !1 !== Nr(e, 68).handleCut(n) && r),
                  'input' === t && (r = !1 !== Nr(e, 68).handleInput(n) && r),
                  'keydown' === t && (r = !1 !== Nr(e, 68).handleKeydown(n) && r),
                  'keypress' === t && (r = !1 !== Nr(e, 68).handleKeypress(n) && r),
                  'paste' === t && (r = !1 !== Nr(e, 68).handlePaste(n) && r),
                  'drop' === t && (r = !1 !== Nr(e, 68).handleDrop(n) && r),
                  r
                );
              },
              null,
              null
            )),
            Kr(67, 16384, null, 0, Ff, [en, Qt, [2, Lf]], null, null),
            Kr(68, 4538368, null, 0, $p, [[2, zp], Qt, vn], { options: [0, 'options'] }, null),
            Ha(69, { decimal: 0, prefix: 1, suffix: 2, thousands: 3 }),
            Yr(
              1024,
              null,
              Nf,
              function (e, t) {
                return [e, t];
              },
              [Ff, $p]
            ),
            Kr(
              71,
              671744,
              null,
              0,
              Np,
              [
                [3, jf],
                [8, null],
                [8, null],
                [6, Nf],
                [2, Pp],
              ],
              { name: [0, 'name'] },
              null
            ),
            Yr(2048, null, zf, null, [Np]),
            Kr(73, 16384, null, 0, qf, [[4, zf]], null, null),
            (e()(),
            Ra(
              74,
              0,
              null,
              null,
              12,
              'div',
              [['class', 'col-md-6 col-lg-4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ra(
              75,
              0,
              null,
              null,
              3,
              'label',
              [['for', 'taxaCreditoParcelado2a6']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Ba(-1, null, ['Taxa de Cr\xe9dito Parcelado 2x a 6x: '])),
            (e()(),
            Ra(
              77,
              16777216,
              null,
              null,
              1,
              'i',
              [
                ['class', 'far fa-question-circle'],
                ['tooltip', 'Taxa cobrada por vendas em cr\xe9dito parcelado'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              78,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'] },
              null
            ),
            (e()(),
            Ra(
              79,
              0,
              null,
              null,
              7,
              'input',
              [
                ['class', 'form-control'],
                ['currencyMask', ''],
                ['formControlName', 'taxaCreditoParcelado2a6'],
                ['id', 'taxaCreditoParcelado2a6'],
                ['inputmode', 'numeric'],
                ['name', 'taxaCreditoParcelado2a6'],
                ['onClick', 'this.select()'],
                ['type', 'text'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'cut'],
                [null, 'keydown'],
                [null, 'keypress'],
                [null, 'paste'],
                [null, 'drop'],
              ],
              function (e, t, n) {
                var r = !0;
                return (
                  'input' === t && (r = !1 !== Nr(e, 80)._handleInput(n.target.value) && r),
                  'blur' === t && (r = !1 !== Nr(e, 80).onTouched() && r),
                  'compositionstart' === t && (r = !1 !== Nr(e, 80)._compositionStart() && r),
                  'compositionend' === t &&
                    (r = !1 !== Nr(e, 80)._compositionEnd(n.target.value) && r),
                  'blur' === t && (r = !1 !== Nr(e, 81).handleBlur(n) && r),
                  'cut' === t && (r = !1 !== Nr(e, 81).handleCut(n) && r),
                  'input' === t && (r = !1 !== Nr(e, 81).handleInput(n) && r),
                  'keydown' === t && (r = !1 !== Nr(e, 81).handleKeydown(n) && r),
                  'keypress' === t && (r = !1 !== Nr(e, 81).handleKeypress(n) && r),
                  'paste' === t && (r = !1 !== Nr(e, 81).handlePaste(n) && r),
                  'drop' === t && (r = !1 !== Nr(e, 81).handleDrop(n) && r),
                  r
                );
              },
              null,
              null
            )),
            Kr(80, 16384, null, 0, Ff, [en, Qt, [2, Lf]], null, null),
            Kr(81, 4538368, null, 0, $p, [[2, zp], Qt, vn], { options: [0, 'options'] }, null),
            Ha(82, { decimal: 0, prefix: 1, suffix: 2, thousands: 3 }),
            Yr(
              1024,
              null,
              Nf,
              function (e, t) {
                return [e, t];
              },
              [Ff, $p]
            ),
            Kr(
              84,
              671744,
              null,
              0,
              Np,
              [
                [3, jf],
                [8, null],
                [8, null],
                [6, Nf],
                [2, Pp],
              ],
              { name: [0, 'name'] },
              null
            ),
            Yr(2048, null, zf, null, [Np]),
            Kr(86, 16384, null, 0, qf, [[4, zf]], null, null),
            (e()(),
            Ra(
              87,
              0,
              null,
              null,
              12,
              'div',
              [['class', 'col-md-6 col-lg-4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ra(
              88,
              0,
              null,
              null,
              3,
              'label',
              [['for', 'taxaCreditoParcelado7a12']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Ba(-1, null, ['Taxa de Cr\xe9dito Parcelado 7x a 12x: '])),
            (e()(),
            Ra(
              90,
              16777216,
              null,
              null,
              1,
              'i',
              [
                ['class', 'far fa-question-circle'],
                ['tooltip', 'Taxa cobrada por vendas em cr\xe9dito parcelado.'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              91,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'] },
              null
            ),
            (e()(),
            Ra(
              92,
              0,
              null,
              null,
              7,
              'input',
              [
                ['class', 'form-control'],
                ['currencyMask', ''],
                ['formControlName', 'taxaCreditoParcelado7a12'],
                ['id', 'taxaCreditoParcelado7a12'],
                ['inputmode', 'numeric'],
                ['name', 'taxaCreditoParcelado7a12'],
                ['onClick', 'this.select()'],
                ['type', 'text'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'cut'],
                [null, 'keydown'],
                [null, 'keypress'],
                [null, 'paste'],
                [null, 'drop'],
              ],
              function (e, t, n) {
                var r = !0;
                return (
                  'input' === t && (r = !1 !== Nr(e, 93)._handleInput(n.target.value) && r),
                  'blur' === t && (r = !1 !== Nr(e, 93).onTouched() && r),
                  'compositionstart' === t && (r = !1 !== Nr(e, 93)._compositionStart() && r),
                  'compositionend' === t &&
                    (r = !1 !== Nr(e, 93)._compositionEnd(n.target.value) && r),
                  'blur' === t && (r = !1 !== Nr(e, 94).handleBlur(n) && r),
                  'cut' === t && (r = !1 !== Nr(e, 94).handleCut(n) && r),
                  'input' === t && (r = !1 !== Nr(e, 94).handleInput(n) && r),
                  'keydown' === t && (r = !1 !== Nr(e, 94).handleKeydown(n) && r),
                  'keypress' === t && (r = !1 !== Nr(e, 94).handleKeypress(n) && r),
                  'paste' === t && (r = !1 !== Nr(e, 94).handlePaste(n) && r),
                  'drop' === t && (r = !1 !== Nr(e, 94).handleDrop(n) && r),
                  r
                );
              },
              null,
              null
            )),
            Kr(93, 16384, null, 0, Ff, [en, Qt, [2, Lf]], null, null),
            Kr(94, 4538368, null, 0, $p, [[2, zp], Qt, vn], { options: [0, 'options'] }, null),
            Ha(95, { decimal: 0, prefix: 1, suffix: 2, thousands: 3 }),
            Yr(
              1024,
              null,
              Nf,
              function (e, t) {
                return [e, t];
              },
              [Ff, $p]
            ),
            Kr(
              97,
              671744,
              null,
              0,
              Np,
              [
                [3, jf],
                [8, null],
                [8, null],
                [6, Nf],
                [2, Pp],
              ],
              { name: [0, 'name'] },
              null
            ),
            Yr(2048, null, zf, null, [Np]),
            Kr(99, 16384, null, 0, qf, [[4, zf]], null, null),
            (e()(),
            Ra(
              100,
              0,
              null,
              null,
              12,
              'div',
              [['class', 'col-md-6 col-lg-4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ra(
              101,
              0,
              null,
              null,
              3,
              'label',
              [['for', 'taxaParcelamento']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Ba(-1, null, ['Taxa de Antecipa\xe7\xe3o / Parcelamento A.M.: '])),
            (e()(),
            Ra(
              103,
              16777216,
              null,
              null,
              1,
              'i',
              [
                ['class', 'far fa-question-circle'],
                ['tooltip', 'Taxa cobrada em cada parcela por vendas em cr\xe9dito parcelado.'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              104,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'] },
              null
            ),
            (e()(),
            Ra(
              105,
              0,
              null,
              null,
              7,
              'input',
              [
                ['class', 'form-control'],
                ['currencyMask', ''],
                ['formControlName', 'taxaParcelamento'],
                ['id', 'taxaParcelamento'],
                ['inputmode', 'numeric'],
                ['name', 'taxaParcelamento'],
                ['onClick', 'this.select()'],
                ['type', 'text'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'cut'],
                [null, 'keydown'],
                [null, 'keypress'],
                [null, 'paste'],
                [null, 'drop'],
              ],
              function (e, t, n) {
                var r = !0;
                return (
                  'input' === t && (r = !1 !== Nr(e, 106)._handleInput(n.target.value) && r),
                  'blur' === t && (r = !1 !== Nr(e, 106).onTouched() && r),
                  'compositionstart' === t && (r = !1 !== Nr(e, 106)._compositionStart() && r),
                  'compositionend' === t &&
                    (r = !1 !== Nr(e, 106)._compositionEnd(n.target.value) && r),
                  'blur' === t && (r = !1 !== Nr(e, 107).handleBlur(n) && r),
                  'cut' === t && (r = !1 !== Nr(e, 107).handleCut(n) && r),
                  'input' === t && (r = !1 !== Nr(e, 107).handleInput(n) && r),
                  'keydown' === t && (r = !1 !== Nr(e, 107).handleKeydown(n) && r),
                  'keypress' === t && (r = !1 !== Nr(e, 107).handleKeypress(n) && r),
                  'paste' === t && (r = !1 !== Nr(e, 107).handlePaste(n) && r),
                  'drop' === t && (r = !1 !== Nr(e, 107).handleDrop(n) && r),
                  r
                );
              },
              null,
              null
            )),
            Kr(106, 16384, null, 0, Ff, [en, Qt, [2, Lf]], null, null),
            Kr(107, 4538368, null, 0, $p, [[2, zp], Qt, vn], { options: [0, 'options'] }, null),
            Ha(108, { decimal: 0, prefix: 1, suffix: 2, thousands: 3 }),
            Yr(
              1024,
              null,
              Nf,
              function (e, t) {
                return [e, t];
              },
              [Ff, $p]
            ),
            Kr(
              110,
              671744,
              null,
              0,
              Np,
              [
                [3, jf],
                [8, null],
                [8, null],
                [6, Nf],
                [2, Pp],
              ],
              { name: [0, 'name'] },
              null
            ),
            Yr(2048, null, zf, null, [Np]),
            Kr(112, 16384, null, 0, qf, [[4, zf]], null, null),
            (e()(),
            Ra(
              113,
              0,
              null,
              null,
              18,
              'div',
              [['class', 'col-md-6 col-lg-3']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ra(
              114,
              0,
              null,
              null,
              3,
              'label',
              [['for', 'visualizacaoDasTaxas']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Ba(-1, null, ['Tipo de Vis\xe3o das Taxas: '])),
            (e()(),
            Ra(
              116,
              16777216,
              null,
              null,
              1,
              'i',
              [
                ['class', 'far fa-question-circle'],
                ['tooltip', 'Tipo de vis\xe3o das taxas na tabela que ir\xe1 ser gerada.'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              117,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'] },
              null
            ),
            (e()(),
            Ra(
              118,
              0,
              null,
              null,
              13,
              'select',
              [
                ['class', 'form-control'],
                ['formControlName', 'visualizacaoDasTaxas'],
                ['id', 'visualizacaoDasTaxas'],
                ['name', 'visualizacaoDasTaxas'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'change'],
                [null, 'blur'],
              ],
              function (e, t, n) {
                var r = !0;
                return (
                  'change' === t && (r = !1 !== Nr(e, 119).onChange(n.target.value) && r),
                  'blur' === t && (r = !1 !== Nr(e, 119).onTouched() && r),
                  r
                );
              },
              null,
              null
            )),
            Kr(119, 16384, null, 0, ap, [en, Qt], null, null),
            Yr(
              1024,
              null,
              Nf,
              function (e) {
                return [e];
              },
              [ap]
            ),
            Kr(
              121,
              671744,
              null,
              0,
              Np,
              [
                [3, jf],
                [8, null],
                [8, null],
                [6, Nf],
                [2, Pp],
              ],
              { name: [0, 'name'] },
              null
            ),
            Yr(2048, null, zf, null, [Np]),
            Kr(123, 16384, null, 0, qf, [[4, zf]], null, null),
            (e()(),
            Ra(
              124,
              0,
              null,
              null,
              3,
              'option',
              [['value', 'vendedor']],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(125, 147456, null, 0, op, [Qt, en, [2, ap]], { value: [0, 'value'] }, null),
            Kr(126, 147456, null, 0, up, [Qt, en, [8, null]], { value: [0, 'value'] }, null),
            (e()(), Ba(-1, null, ['Vendedor'])),
            (e()(),
            Ra(
              128,
              0,
              null,
              null,
              3,
              'option',
              [['value', 'cliente']],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(129, 147456, null, 0, op, [Qt, en, [2, ap]], { value: [0, 'value'] }, null),
            Kr(130, 147456, null, 0, up, [Qt, en, [8, null]], { value: [0, 'value'] }, null),
            (e()(), Ba(-1, null, ['Cliente'])),
            (e()(), Aa(16777216, null, null, 1, null, Xp)),
            Kr(133, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(),
            Ra(
              134,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'col-md-3 col-lg-2 limpar']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ra(
              135,
              0,
              null,
              null,
              1,
              'button',
              [
                ['class', 'btn btn-secondary btn-block btn-sm'],
                ['type', 'button'],
              ],
              null,
              [[null, 'click']],
              function (e, t, n) {
                var r = !0;
                return 'click' === t && (r = !1 !== e.component.limpar() && r), r;
              },
              null,
              null
            )),
            (e()(), Ba(-1, null, [' Limpar '])),
            (e()(),
            Ra(
              137,
              0,
              null,
              null,
              3,
              'div',
              [['class', 'col-md-3 col-lg-3 calcular']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ra(
              138,
              0,
              null,
              null,
              2,
              'button',
              [
                ['class', 'btn btn-primary btn-block btn-hover'],
                ['type', 'button'],
              ],
              null,
              [[null, 'click']],
              function (e, t, n) {
                var r = !0,
                  i = e.component;
                return 'click' === t && (r = !1 !== i.calcular(i.form.value) && r), r;
              },
              null,
              null
            )),
            (e()(), Ra(139, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(), Ba(-1, null, [' C\xe1lcular '])),
            (e()(),
            Ra(
              141,
              0,
              null,
              null,
              65,
              'div',
              [['id', 'dadosTabela']],
              [
                [2, 'container', null],
                [8, 'hidden', 0],
              ],
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ra(
              142,
              0,
              null,
              null,
              4,
              'div',
              [
                ['class', 'limpar'],
                ['style', 'width: 130px'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ra(
              143,
              0,
              null,
              null,
              3,
              'button',
              [
                ['class', 'btn btn-secondary btn-block btn-sm'],
                ['type', 'button'],
              ],
              null,
              [[null, 'click']],
              function (e, t, n) {
                var r = !0;
                return 'click' === t && (r = !1 !== e.component.recalcular() && r), r;
              },
              null,
              null
            )),
            (e()(),
            Ra(
              144,
              0,
              null,
              null,
              0,
              'i',
              [['class', 'fas fa-reply mr-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Ra(145, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(), Ba(-1, null, [' Recalcular '])),
            (e()(),
            Ra(
              147,
              0,
              null,
              null,
              53,
              'section',
              [['class', 'table-responsive pt-1 mb-1']],
              null,
              [[null, 'scroll']],
              function (e, t, n) {
                var r = !0;
                return 'scroll' === t && (r = !1 !== e.component.removerTooltip() && r), r;
              },
              null,
              null
            )),
            (e()(),
            Ra(
              148,
              0,
              null,
              null,
              52,
              'table',
              [['class', 'table table-bordered table-hover table-sm text-center mb-0']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Ra(149, 0, null, null, 48, 'thead', [], null, null, null, null, null)),
            (e()(), Ra(150, 0, null, null, 8, 'tr', [], null, null, null, null, null)),
            (e()(),
            Ra(
              151,
              0,
              null,
              null,
              1,
              'th',
              [
                ['class', 'text-center titulo1'],
                ['colspan', '3'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Ba(-1, null, ['PLANO'])),
            (e()(), Aa(16777216, null, null, 1, null, ev)),
            Kr(154, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Aa(16777216, null, null, 1, null, tv)),
            Kr(156, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Aa(16777216, null, null, 1, null, nv)),
            Kr(158, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Ra(159, 0, null, null, 38, 'tr', [], null, null, null, null, null)),
            (e()(),
            Ra(
              160,
              0,
              null,
              null,
              7,
              'th',
              [['class', 'text-center subtitulo1']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Aa(0, [['subtitulo1', 2]], null, 0, null, rv)),
            (e()(),
            Ra(
              162,
              16777216,
              null,
              null,
              2,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              [[8, 'hidden', 0]],
              null,
              null,
              null,
              null
            )),
            Kr(
              163,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(-1, null, ['Desc.'])),
            (e()(),
            Ra(
              165,
              16777216,
              null,
              null,
              2,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              [[8, 'hidden', 0]],
              null,
              null,
              null,
              null
            )),
            Kr(
              166,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(-1, null, ['Descri\xe7\xe3o'])),
            (e()(),
            Ra(
              168,
              0,
              null,
              null,
              4,
              'th',
              [['class', 'text-center subtitulo1']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Aa(0, [['subtitulo2', 2]], null, 0, null, iv)),
            (e()(),
            Ra(
              170,
              16777216,
              null,
              null,
              2,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              171,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(-1, null, ['Taxa A.M.'])),
            (e()(),
            Ra(
              173,
              0,
              null,
              null,
              4,
              'th',
              [['class', 'text-center subtitulo1']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Aa(0, [['subtitulo3', 2]], null, 0, null, av)),
            (e()(),
            Ra(
              175,
              16777216,
              null,
              null,
              2,
              'span',
              [
                ['container', 'div'],
                ['placement', 'auto'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            Kr(
              176,
              212992,
              null,
              0,
              Df,
              [wn, Ud, Rf, Qt, en, xf],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), Ba(-1, null, ['Taxa Total'])),
            (e()(), Aa(16777216, null, null, 1, null, lv)),
            Kr(179, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Aa(16777216, null, null, 1, null, sv)),
            Kr(181, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Aa(16777216, null, null, 1, null, hv)),
            Kr(183, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Aa(16777216, null, null, 1, null, fv)),
            Kr(185, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Aa(16777216, null, null, 1, null, vv)),
            Kr(187, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Aa(16777216, null, null, 1, null, mv)),
            Kr(189, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Aa(16777216, null, null, 1, null, _v)),
            Kr(191, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Aa(16777216, null, null, 1, null, kv)),
            Kr(193, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Aa(16777216, null, null, 1, null, wv)),
            Kr(195, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Aa(16777216, null, null, 1, null, Sv)),
            Kr(197, 16384, null, 0, Pl, [wn, kn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Ra(198, 0, null, null, 2, 'tbody', [], null, null, null, null, null)),
            (e()(), Aa(16777216, null, null, 1, null, Zv)),
            Kr(200, 278528, null, 0, El, [wn, kn, pn], { ngForOf: [0, 'ngForOf'] }, null),
            (e()(),
            Ra(
              201,
              0,
              null,
              null,
              2,
              'p',
              [['class', 'obs ml-2']],
              [[8, 'hidden', 0]],
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ra(
              202,
              0,
              null,
              null,
              0,
              'i',
              [['class', 'fas fa-info-circle']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Ba(-1, null, [' Clique sobre a taxa ou valor para mais detalhes. '])),
            (e()(),
            Ra(
              204,
              0,
              null,
              null,
              2,
              'p',
              [['class', 'obs']],
              [[8, 'hidden', 0]],
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ra(
              205,
              0,
              null,
              null,
              0,
              'i',
              [['class', 'fas fa-info-circle mr-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Ba(-1, null, ['Passe o mouse sobre a taxa ou valor para mais detalhes. '])),
          ],
          function (e, t) {
            var n = t.component;
            e(t, 8, 0, n.form),
              e(
                t,
                16,
                0,
                'Digite aqui o valor da transa\xe7\xe3o, essa informa\xe7\xe3o \xe9 obrigat\xf3ria.'
              ),
              e(t, 18, 0, !n.validForm);
            var r = e(t, 22, 0, !n.validForm);
            e(t, 21, 0, 'form-control valorTransacao', r),
              e(t, 24, 0),
              e(t, 26, 0, 'valorTransacao'),
              e(
                t,
                33,
                0,
                'Possibilita o recebimento de todo o valor das vendas parceladas em uma \xfanica vez (antecipa\xe7\xe3o) ou em parcelas.'
              ),
              e(t, 37, 0, 'planoRecebimento'),
              e(t, 41, 0, '1D'),
              e(t, 42, 0, '1D'),
              e(t, 45, 0, '30D'),
              e(t, 46, 0, '30D'),
              e(t, 52, 0, 'Taxa cobrada por vendas a d\xe9bito.');
            var i = e(t, 56, 0, '.', '', ' %', ',');
            e(t, 55, 0, i),
              e(t, 58, 0, 'taxaDebito'),
              e(t, 65, 0, 'Taxa cobrada por vendas em cr\xe9dito \xe0 vista.');
            var a = e(t, 69, 0, '.', '', ' %', ',');
            e(t, 68, 0, a),
              e(t, 71, 0, 'taxaCreditoAVista'),
              e(t, 78, 0, 'Taxa cobrada por vendas em cr\xe9dito parcelado');
            var o = e(t, 82, 0, '.', '', ' %', ',');
            e(t, 81, 0, o),
              e(t, 84, 0, 'taxaCreditoParcelado2a6'),
              e(t, 91, 0, 'Taxa cobrada por vendas em cr\xe9dito parcelado.');
            var l = e(t, 95, 0, '.', '', ' %', ',');
            e(t, 94, 0, l),
              e(t, 97, 0, 'taxaCreditoParcelado7a12'),
              e(t, 104, 0, 'Taxa cobrada em cada parcela por vendas em cr\xe9dito parcelado.');
            var u = e(t, 108, 0, '.', '', ' %', ',');
            e(t, 107, 0, u),
              e(t, 110, 0, 'taxaParcelamento'),
              e(t, 117, 0, 'Tipo de vis\xe3o das taxas na tabela que ir\xe1 ser gerada.'),
              e(t, 121, 0, 'visualizacaoDasTaxas'),
              e(t, 125, 0, 'vendedor'),
              e(t, 126, 0, 'vendedor'),
              e(t, 129, 0, 'cliente'),
              e(t, 130, 0, 'cliente'),
              e(t, 133, 0, n.width < 992),
              e(t, 154, 0, 'vendedor' == n.visualizacaoDasTaxas),
              e(t, 156, 0, 'cliente' == n.visualizacaoDasTaxas),
              e(t, 158, 0, 'vendedor' == n.visualizacaoDasTaxas),
              e(t, 163, 0, Nr(t, 161), 'auto', 'div'),
              e(t, 166, 0, Nr(t, 161), 'auto', 'div'),
              e(t, 171, 0, Nr(t, 169), 'auto', 'div'),
              e(t, 176, 0, Nr(t, 174), 'auto', 'div'),
              e(t, 179, 0, 'vendedor' == n.visualizacaoDasTaxas),
              e(t, 181, 0, 'vendedor' == n.visualizacaoDasTaxas),
              e(t, 183, 0, 'vendedor' == n.visualizacaoDasTaxas),
              e(t, 185, 0, 'cliente' == n.visualizacaoDasTaxas),
              e(t, 187, 0, 'cliente' == n.visualizacaoDasTaxas),
              e(t, 189, 0, 'cliente' == n.visualizacaoDasTaxas),
              e(t, 191, 0, 'cliente' == n.visualizacaoDasTaxas),
              e(t, 193, 0, 'vendedor' == n.visualizacaoDasTaxas),
              e(t, 195, 0, 'vendedor' == n.visualizacaoDasTaxas),
              e(t, 197, 0, 'vendedor' == n.visualizacaoDasTaxas),
              e(t, 200, 0, n.resultados);
          },
          function (e, t) {
            var n = t.component;
            e(t, 3, 0, n.resultados.length <= 0, n.resultados.length > 0),
              e(
                t,
                6,
                0,
                Nr(t, 10).ngClassUntouched,
                Nr(t, 10).ngClassTouched,
                Nr(t, 10).ngClassPristine,
                Nr(t, 10).ngClassDirty,
                Nr(t, 10).ngClassValid,
                Nr(t, 10).ngClassInvalid,
                Nr(t, 10).ngClassPending
              ),
              e(
                t,
                19,
                0,
                Nr(t, 28).ngClassUntouched,
                Nr(t, 28).ngClassTouched,
                Nr(t, 28).ngClassPristine,
                Nr(t, 28).ngClassDirty,
                Nr(t, 28).ngClassValid,
                Nr(t, 28).ngClassInvalid,
                Nr(t, 28).ngClassPending
              ),
              e(
                t,
                34,
                0,
                Nr(t, 39).ngClassUntouched,
                Nr(t, 39).ngClassTouched,
                Nr(t, 39).ngClassPristine,
                Nr(t, 39).ngClassDirty,
                Nr(t, 39).ngClassValid,
                Nr(t, 39).ngClassInvalid,
                Nr(t, 39).ngClassPending
              ),
              e(
                t,
                53,
                0,
                Nr(t, 60).ngClassUntouched,
                Nr(t, 60).ngClassTouched,
                Nr(t, 60).ngClassPristine,
                Nr(t, 60).ngClassDirty,
                Nr(t, 60).ngClassValid,
                Nr(t, 60).ngClassInvalid,
                Nr(t, 60).ngClassPending
              ),
              e(t, 63, 0, n.tipoTaxaAVista),
              e(
                t,
                66,
                0,
                Nr(t, 73).ngClassUntouched,
                Nr(t, 73).ngClassTouched,
                Nr(t, 73).ngClassPristine,
                Nr(t, 73).ngClassDirty,
                Nr(t, 73).ngClassValid,
                Nr(t, 73).ngClassInvalid,
                Nr(t, 73).ngClassPending
              ),
              e(
                t,
                79,
                0,
                Nr(t, 86).ngClassUntouched,
                Nr(t, 86).ngClassTouched,
                Nr(t, 86).ngClassPristine,
                Nr(t, 86).ngClassDirty,
                Nr(t, 86).ngClassValid,
                Nr(t, 86).ngClassInvalid,
                Nr(t, 86).ngClassPending
              ),
              e(
                t,
                92,
                0,
                Nr(t, 99).ngClassUntouched,
                Nr(t, 99).ngClassTouched,
                Nr(t, 99).ngClassPristine,
                Nr(t, 99).ngClassDirty,
                Nr(t, 99).ngClassValid,
                Nr(t, 99).ngClassInvalid,
                Nr(t, 99).ngClassPending
              ),
              e(
                t,
                105,
                0,
                Nr(t, 112).ngClassUntouched,
                Nr(t, 112).ngClassTouched,
                Nr(t, 112).ngClassPristine,
                Nr(t, 112).ngClassDirty,
                Nr(t, 112).ngClassValid,
                Nr(t, 112).ngClassInvalid,
                Nr(t, 112).ngClassPending
              ),
              e(
                t,
                118,
                0,
                Nr(t, 123).ngClassUntouched,
                Nr(t, 123).ngClassTouched,
                Nr(t, 123).ngClassPristine,
                Nr(t, 123).ngClassDirty,
                Nr(t, 123).ngClassValid,
                Nr(t, 123).ngClassInvalid,
                Nr(t, 123).ngClassPending
              ),
              e(t, 141, 0, n.width > 767, n.resultados.length <= 0),
              e(t, 162, 0, n.width > 375),
              e(t, 165, 0, n.width <= 375),
              e(t, 201, 0, !n.mobile),
              e(t, 204, 0, n.mobile);
          }
        );
      }
      var Qv = Sr(
          'app-comparador-de-taxas',
          Kp,
          function (e) {
            return $a(
              0,
              [
                (e()(),
                Ra(0, 0, null, null, 1, 'app-comparador-de-taxas', [], null, null, null, Kv, Yp)),
                Kr(1, 245760, null, 0, Kp, [Fp, Qp, Qt], null, null),
              ],
              function (e, t) {
                e(t, 1, 0);
              },
              null
            );
          },
          {},
          {},
          []
        ),
        Yv = jn({
          encapsulation: 0,
          styles: [
            '.tooltip[_nghost-%COMP%] {\n      display: block;\n      pointer-events: none;\n    }\n    .bs3.tooltip.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.tooltip.bottom[_nghost-%COMP%] {\n      margin-top: 0px;\n    }\n    .bs3.bs-tooltip-left[_nghost-%COMP%], .bs3.bs-tooltip-right[_nghost-%COMP%]{\n      margin: 0px;\n    }\n    .bs3.bs-tooltip-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-tooltip-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      margin: .3rem 0;\n    }',
          ],
          data: {},
        });
      function Jv(e) {
        return $a(
          2,
          [
            (e()(),
            Ra(
              0,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'tooltip-arrow arrow']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ra(
              1,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'tooltip-inner']],
              null,
              null,
              null,
              null,
              null
            )),
            {
              nodeIndex: -1,
              parent: null,
              renderParent: null,
              bindingIndex: -1,
              outputIndex: -1,
              checkIndex: -1,
              flags: 8,
              childFlags: 0,
              directChildFlags: 0,
              childMatchedQueries: 0,
              matchedQueries: {},
              matchedQueryIds: 0,
              references: {},
              ngContentIndex: null,
              childCount: 0,
              bindings: [],
              bindingFlags: 0,
              outputs: [],
              element: null,
              provider: null,
              text: null,
              query: null,
              ngContent: { index: 0 },
            },
          ],
          null,
          null
        );
      }
      var Xv = Sr(
          'bs-tooltip-container',
          If,
          function (e) {
            return $a(
              0,
              [
                (e()(),
                Ra(
                  0,
                  0,
                  null,
                  null,
                  1,
                  'bs-tooltip-container',
                  [['role', 'tooltip']],
                  [
                    [8, 'className', 0],
                    [2, 'show', null],
                    [2, 'bs3', null],
                    [1, 'id', 0],
                  ],
                  null,
                  null,
                  Jv,
                  Yv
                )),
                Kr(1, 4243456, null, 0, If, [Rf], null, null),
              ],
              null,
              function (e, t) {
                e(
                  t,
                  0,
                  0,
                  'tooltip in tooltip-' +
                    Nr(t, 1).placement +
                    ' bs-tooltip-' +
                    Nr(t, 1).placement +
                    ' ' +
                    Nr(t, 1).placement +
                    ' ' +
                    Nr(t, 1).containerClass,
                  !Nr(t, 1).isBs3,
                  Nr(t, 1).isBs3,
                  Nr(t, 1).id
                );
              }
            );
          },
          {},
          {},
          ['*']
        ),
        eg = jn({ encapsulation: 0, styles: [['']], data: {} });
      function tg(e) {
        return $a(
          0,
          [
            (e()(),
            Ra(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            Kr(1, 212992, null, 0, rd, [nd, wn, qt, [8, null], gn], null, null),
          ],
          function (e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      var ng,
        rg,
        ig,
        ag = Sr(
          'app-root',
          el,
          function (e) {
            return $a(
              0,
              [
                (e()(), Ra(0, 0, null, null, 1, 'app-root', [], null, null, null, tg, eg)),
                Kr(1, 49152, null, 0, el, [], null, null),
              ],
              null,
              null
            );
          },
          {},
          {},
          []
        ),
        og = function e() {
          _classCallCheck(this, e);
        },
        lg = n('vT00');
      (ng = n.n(lg).a),
        'string' != typeof (rg = 'pt-BR') && ((ig = rg), (rg = ng[pi.LocaleId])),
        (rg = rg.toLowerCase().replace(/_/g, '-')),
        (fi[rg] = ng),
        ig && (fi[rg][pi.ExtraData] = ig);
      var ug = function e() {
          _classCallCheck(this, e);
        },
        sg = new Jo(Xo, [el], function (e) {
          return (function (e) {
            for (var t = {}, n = [], r = !1, i = 0; i < e.length; i++) {
              var a = e[i];
              a.token === Le && !0 === a.value && (r = !0),
                1073741824 & a.flags && n.push(a.token),
                (a.index = i),
                (t[Fn(a.token)] = a);
            }
            return { factory: null, providersByKey: t, providers: e, modules: n, isRoot: r };
          })([
            gr(512, qt, Gt, [[8, [Td, Qv, Xv, ag]], [3, qt], Wt]),
            gr(4352, Ri, 'pt-BR', []),
            gr(4608, Cl, kl, [Ri, [2, _l]]),
            gr(5120, di, Ta, [Wi]),
            gr(5120, wi, xi, []),
            gr(5120, pn, Sa, []),
            gr(5120, vn, Ea, []),
            gr(4608, Ps, As, [Fl]),
            gr(6144, kt, null, [Ps]),
            gr(4608, ks, ws, []),
            gr(
              5120,
              Qu,
              function (e, t, n, r, i, a, o, l) {
                return [new _s(e, t, n), new Ts(r), new xs(i, a, o, l)];
              },
              [Fl, Wi, Ti, Fl, Fl, ks, Ai, [2, bs]]
            ),
            gr(4608, Yu, Yu, [Qu, Wi]),
            gr(135680, es, es, [Fl]),
            gr(4608, as, as, [Yu, es, wi]),
            gr(6144, Jt, null, [as]),
            gr(6144, Xu, null, [es]),
            gr(4608, ta, ta, [Wi]),
            gr(5120, Gc, Cd, [ed]),
            gr(4608, ld, ld, []),
            gr(6144, ad, null, [ld]),
            gr(135680, ud, ud, [ed, fa, Fi, Ue, ad]),
            gr(4608, od, od, []),
            gr(5120, sd, vd, [ed, Ul, cd]),
            gr(5120, xd, wd, [kd]),
            gr(
              5120,
              Pi,
              function (e) {
                return [e];
              },
              [xd]
            ),
            gr(4608, ep, ep, []),
            gr(4608, Fp, Fp, []),
            gr(4608, Rf, Rf, []),
            gr(4608, xf, xf, [Wi, Jt, Ti]),
            gr(4608, Ud, Ud, [qt, Wi, Ue, xf, ha]),
            gr(4608, Qp, Qp, []),
            gr(1073742336, Ll, Ll, []),
            gr(1024, Tt, Ls, []),
            gr(
              1024,
              aa,
              function () {
                return [fd()];
              },
              []
            ),
            gr(512, kd, kd, [Ue]),
            gr(
              1024,
              ki,
              function (e, t) {
                return [
                  ((n = e),
                  Wu('probe', Ku),
                  Wu(
                    'coreTokens',
                    Object.assign(
                      {},
                      Zu,
                      (n || []).reduce(function (e, t) {
                        return (e[t.name] = t.token), e;
                      }, {})
                    )
                  ),
                  function () {
                    return Ku;
                  }),
                  bd(t),
                ];
                var n;
              },
              [[2, aa], kd]
            ),
            gr(512, bi, bi, [[2, ki]]),
            gr(131584, ha, ha, [Wi, Ai, Ue, Tt, qt, bi]),
            gr(1073742336, Pa, Pa, [ha]),
            gr(1073742336, Fs, Fs, [[3, Fs]]),
            gr(1024, hd, md, [[3, ed]]),
            gr(512, wc, xc, []),
            gr(512, nd, nd, []),
            gr(256, cd, {}, []),
            gr(1024, rl, gd, [tl, [2, il], cd]),
            gr(512, al, al, [rl, tl]),
            gr(512, Fi, Fi, []),
            gr(512, fa, ga, [Fi, [2, pa]]),
            gr(
              1024,
              Wh,
              function () {
                return [
                  [
                    { path: '', component: Kp },
                    { path: '', pathMatch: 'full', redirectTo: 'comparador' },
                    { path: '**', component: Kp },
                  ],
                ];
              },
              []
            ),
            gr(1024, ed, _d, [ha, wc, nd, al, Ue, fa, Fi, Wh, cd, [2, Kh], [2, Gh]]),
            gr(1073742336, pd, pd, [
              [2, hd],
              [2, ed],
            ]),
            gr(1073742336, og, og, []),
            gr(1073742336, Lp, Lp, []),
            gr(1073742336, Up, Up, []),
            gr(1073742336, jp, jp, []),
            gr(1073742336, Wp, Wp, []),
            gr(1073742336, Vf, Vf, []),
            gr(1073742336, ug, ug, []),
            gr(1073742336, Xo, Xo, []),
            gr(256, Le, !0, []),
            gr(
              256,
              zp,
              {
                align: 'left',
                allowNegative: !1,
                allowZero: !1,
                decimal: ',',
                precision: 2,
                prefix: 'R$ ',
                suffix: '',
                thousands: '.',
                nullable: !0,
                inputMode: 0,
              },
              []
            ),
          ]);
        });
      (function () {
        if (Ye) throw new Error('Cannot enable prod mode after platform setup.');
        Qe = !1;
      })(),
        Ns()
          .bootstrapModuleFactory(sg)
          .catch(function (e) {
            return console.error(e);
          });
    },
    zn8P: function (e, t) {
      function n(e) {
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (e.exports = n),
        (n.id = 'zn8P');
    },
  },
  [[0, 0]],
]);
