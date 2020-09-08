/**
 * /*! For license information please see main-es2015.213b38b89c1d9930c882.js.LICENSE.txt
 *
 * @format
 */

(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (e, t, n) {
      e.exports = n('zUnb');
    },
    jfjY: function (e, t, n) {
      'use strict';
      (e.exports = o), (e.exports.isMobile = o), (e.exports.default = o);
      var r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
        i = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;
      function o(e) {
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
      var r, i, o;
      !(function (s) {
        if ('object' == typeof e.exports) {
          var l = s(0, t);
          void 0 !== l && (e.exports = l);
        } else
          (i = [n, t]),
            void 0 === (o = 'function' == typeof (r = s) ? r.apply(t, i) : r) || (e.exports = o);
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
      let i = !1;
      const o = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
          if (e) {
            const e = new Error();
            console.warn(
              'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' +
                e.stack
            );
          } else i && console.log('RxJS: Back to a better error behavior. Thank you. <3');
          i = e;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return i;
        },
      };
      function s(e) {
        setTimeout(() => {
          throw e;
        });
      }
      const l = {
          closed: !0,
          next(e) {},
          error(e) {
            if (o.useDeprecatedSynchronousErrorHandling) throw e;
            s(e);
          },
          complete() {},
        },
        a = Array.isArray || ((e) => e && 'number' == typeof e.length);
      function u(e) {
        return null !== e && 'object' == typeof e;
      }
      function c(e) {
        return (
          Error.call(this),
          (this.message = e
            ? `${e.length} errors occurred during unsubscription:\n${e
                .map((e, t) => `${t + 1}) ${e.toString()}`)
                .join('\n  ')}`
            : ''),
          (this.name = 'UnsubscriptionError'),
          (this.errors = e),
          this
        );
      }
      c.prototype = Object.create(Error.prototype);
      const h = c;
      let d = (() => {
        class e {
          constructor(e) {
            (this.closed = !1),
              (this._parent = null),
              (this._parents = null),
              (this._subscriptions = null),
              e && (this._unsubscribe = e);
          }
          unsubscribe() {
            let e,
              t = !1;
            if (this.closed) return;
            let { _parent: n, _parents: i, _unsubscribe: o, _subscriptions: s } = this;
            (this.closed = !0),
              (this._parent = null),
              (this._parents = null),
              (this._subscriptions = null);
            let l = -1,
              c = i ? i.length : 0;
            for (; n; ) n.remove(this), (n = (++l < c && i[l]) || null);
            if (r(o))
              try {
                o.call(this);
              } catch (d) {
                (t = !0), (e = d instanceof h ? p(d.errors) : [d]);
              }
            if (a(s))
              for (l = -1, c = s.length; ++l < c; ) {
                const n = s[l];
                if (u(n))
                  try {
                    n.unsubscribe();
                  } catch (d) {
                    (t = !0),
                      (e = e || []),
                      d instanceof h ? (e = e.concat(p(d.errors))) : e.push(d);
                  }
              }
            if (t) throw new h(e);
          }
          add(t) {
            let n = t;
            switch (typeof t) {
              case 'function':
                n = new e(t);
              case 'object':
                if (n === this || n.closed || 'function' != typeof n.unsubscribe) return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof e)) {
                  const t = n;
                  (n = new e()), (n._subscriptions = [t]);
                }
                break;
              default:
                if (!t) return e.EMPTY;
                throw new Error('unrecognized teardown ' + t + ' added to Subscription.');
            }
            if (n._addParent(this)) {
              const e = this._subscriptions;
              e ? e.push(n) : (this._subscriptions = [n]);
            }
            return n;
          }
          remove(e) {
            const t = this._subscriptions;
            if (t) {
              const n = t.indexOf(e);
              -1 !== n && t.splice(n, 1);
            }
          }
          _addParent(e) {
            let { _parent: t, _parents: n } = this;
            return (
              t !== e &&
              (t
                ? n
                  ? -1 === n.indexOf(e) && (n.push(e), !0)
                  : ((this._parents = [e]), !0)
                : ((this._parent = e), !0))
            );
          }
        }
        return (
          (e.EMPTY = (function (e) {
            return (e.closed = !0), e;
          })(new e())),
          e
        );
      })();
      function p(e) {
        return e.reduce((e, t) => e.concat(t instanceof h ? t.errors : t), []);
      }
      const f =
        'function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
      class g extends d {
        constructor(e, t, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = l;
              break;
            case 1:
              if (!e) {
                this.destination = l;
                break;
              }
              if ('object' == typeof e) {
                e instanceof g
                  ? ((this.syncErrorThrowable = e.syncErrorThrowable),
                    (this.destination = e),
                    e.add(this))
                  : ((this.syncErrorThrowable = !0), (this.destination = new m(this, e)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0), (this.destination = new m(this, e, t, n));
          }
        }
        [f]() {
          return this;
        }
        static create(e, t, n) {
          const r = new g(e, t, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(e) {
          this.isStopped || this._next(e);
        }
        error(e) {
          this.isStopped || ((this.isStopped = !0), this._error(e));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(e) {
          this.destination.next(e);
        }
        _error(e) {
          this.destination.error(e), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parent: e, _parents: t } = this;
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
        }
      }
      class m extends g {
        constructor(e, t, n, i) {
          let o;
          super(), (this._parentSubscriber = e);
          let s = this;
          r(t)
            ? (o = t)
            : t &&
              ((o = t.next),
              (n = t.error),
              (i = t.complete),
              t !== l &&
                ((s = Object.create(t)),
                r(s.unsubscribe) && this.add(s.unsubscribe.bind(s)),
                (s.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = s),
            (this._next = o),
            (this._error = n),
            (this._complete = i);
        }
        next(e) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: t } = this;
            o.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
              ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, e);
          }
        }
        error(e) {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this,
              { useDeprecatedSynchronousErrorHandling: n } = o;
            if (this._error)
              n && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
            else if (t.syncErrorThrowable)
              n ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0)) : s(e), this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw e;
              s(e);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this;
            if (this._complete) {
              const t = () => this._complete.call(this._context);
              o.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, t), this.unsubscribe())
                : (this.__tryOrUnsub(t), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(e, t) {
          try {
            e.call(this._context, t);
          } catch (n) {
            if ((this.unsubscribe(), o.useDeprecatedSynchronousErrorHandling)) throw n;
            s(n);
          }
        }
        __tryOrSetError(e, t, n) {
          if (!o.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
          try {
            t.call(this._context, n);
          } catch (r) {
            return o.useDeprecatedSynchronousErrorHandling
              ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
              : (s(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: e } = this;
          (this._context = null), (this._parentSubscriber = null), e.unsubscribe();
        }
      }
      const v = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      function _() {}
      function b(...e) {
        return y(e);
      }
      function y(e) {
        return e
          ? 1 === e.length
            ? e[0]
            : function (t) {
                return e.reduce((e, t) => t(e), t);
              }
          : _;
      }
      let w = (() => {
        class e {
          constructor(e) {
            (this._isScalar = !1), e && (this._subscribe = e);
          }
          lift(t) {
            const n = new e();
            return (n.source = this), (n.operator = t), n;
          }
          subscribe(e, t, n) {
            const { operator: r } = this,
              i = (function (e, t, n) {
                if (e) {
                  if (e instanceof g) return e;
                  if (e[f]) return e[f]();
                }
                return e || t || n ? new g(e, t, n) : new g(l);
              })(e, t, n);
            if (
              (i.add(
                r
                  ? r.call(i, this.source)
                  : this.source ||
                    (o.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable)
                  ? this._subscribe(i)
                  : this._trySubscribe(i)
              ),
              o.useDeprecatedSynchronousErrorHandling &&
                i.syncErrorThrowable &&
                ((i.syncErrorThrowable = !1), i.syncErrorThrown))
            )
              throw i.syncErrorValue;
            return i;
          }
          _trySubscribe(e) {
            try {
              return this._subscribe(e);
            } catch (t) {
              o.useDeprecatedSynchronousErrorHandling &&
                ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                (function (e) {
                  for (; e; ) {
                    const { closed: t, destination: n, isStopped: r } = e;
                    if (t || r) return !1;
                    e = n && n instanceof g ? n : null;
                  }
                  return !0;
                })(e)
                  ? e.error(t)
                  : console.warn(t);
            }
          }
          forEach(e, t) {
            return new (t = C(t))((t, n) => {
              let r;
              r = this.subscribe(
                (t) => {
                  try {
                    e(t);
                  } catch (i) {
                    n(i), r && r.unsubscribe();
                  }
                },
                n,
                t
              );
            });
          }
          _subscribe(e) {
            const { source: t } = this;
            return t && t.subscribe(e);
          }
          [v]() {
            return this;
          }
          pipe(...e) {
            return 0 === e.length ? this : y(e)(this);
          }
          toPromise(e) {
            return new (e = C(e))((e, t) => {
              let n;
              this.subscribe(
                (e) => (n = e),
                (e) => t(e),
                () => e(n)
              );
            });
          }
        }
        return (e.create = (t) => new e(t)), e;
      })();
      function C(e) {
        if ((e || (e = o.Promise || Promise), !e)) throw new Error('no Promise impl found');
        return e;
      }
      function x() {
        return (
          Error.call(this),
          (this.message = 'object unsubscribed'),
          (this.name = 'ObjectUnsubscribedError'),
          this
        );
      }
      x.prototype = Object.create(Error.prototype);
      const S = x;
      class E extends d {
        constructor(e, t) {
          super(), (this.subject = e), (this.subscriber = t), (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const e = this.subject,
            t = e.observers;
          if (((this.subject = null), !t || 0 === t.length || e.isStopped || e.closed)) return;
          const n = t.indexOf(this.subscriber);
          -1 !== n && t.splice(n, 1);
        }
      }
      class T extends g {
        constructor(e) {
          super(e), (this.destination = e);
        }
      }
      let P = (() => {
        class e extends w {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [f]() {
            return new T(this);
          }
          lift(e) {
            const t = new R(this, this);
            return (t.operator = e), t;
          }
          next(e) {
            if (this.closed) throw new S();
            if (!this.isStopped) {
              const { observers: t } = this,
                n = t.length,
                r = t.slice();
              for (let i = 0; i < n; i++) r[i].next(e);
            }
          }
          error(e) {
            if (this.closed) throw new S();
            (this.hasError = !0), (this.thrownError = e), (this.isStopped = !0);
            const { observers: t } = this,
              n = t.length,
              r = t.slice();
            for (let i = 0; i < n; i++) r[i].error(e);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new S();
            this.isStopped = !0;
            const { observers: e } = this,
              t = e.length,
              n = e.slice();
            for (let r = 0; r < t; r++) n[r].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(e) {
            if (this.closed) throw new S();
            return super._trySubscribe(e);
          }
          _subscribe(e) {
            if (this.closed) throw new S();
            return this.hasError
              ? (e.error(this.thrownError), d.EMPTY)
              : this.isStopped
              ? (e.complete(), d.EMPTY)
              : (this.observers.push(e), new E(this, e));
          }
          asObservable() {
            const e = new w();
            return (e.source = this), e;
          }
        }
        return (e.create = (e, t) => new R(e, t)), e;
      })();
      class R extends P {
        constructor(e, t) {
          super(), (this.destination = e), (this.source = t);
        }
        next(e) {
          const { destination: t } = this;
          t && t.next && t.next(e);
        }
        error(e) {
          const { destination: t } = this;
          t && t.error && this.destination.error(e);
        }
        complete() {
          const { destination: e } = this;
          e && e.complete && this.destination.complete();
        }
        _subscribe(e) {
          const { source: t } = this;
          return t ? this.source.subscribe(e) : d.EMPTY;
        }
      }
      function A(e) {
        return e && 'function' == typeof e.schedule;
      }
      class D extends g {
        constructor(e, t, n) {
          super(),
            (this.parent = e),
            (this.outerValue = t),
            (this.outerIndex = n),
            (this.index = 0);
        }
        _next(e) {
          this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this);
        }
        _error(e) {
          this.parent.notifyError(e, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      const I = (e) => (t) => {
          for (let n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
          t.closed || t.complete();
        },
        O = (e) => (t) => (
          e
            .then(
              (e) => {
                t.closed || (t.next(e), t.complete());
              },
              (e) => t.error(e)
            )
            .then(null, s),
          t
        );
      function V() {
        return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
      }
      const k = V(),
        M = (e) => (t) => {
          const n = e[k]();
          for (;;) {
            const e = n.next();
            if (e.done) {
              t.complete();
              break;
            }
            if ((t.next(e.value), t.closed)) break;
          }
          return (
            'function' == typeof n.return &&
              t.add(() => {
                n.return && n.return();
              }),
            t
          );
        },
        N = (e) => (t) => {
          const n = e[v]();
          if ('function' != typeof n.subscribe)
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
          return n.subscribe(t);
        },
        L = (e) => e && 'number' == typeof e.length && 'function' != typeof e;
      function F(e) {
        return !!e && 'function' != typeof e.subscribe && 'function' == typeof e.then;
      }
      const U = (e) => {
        if (e instanceof w)
          return (t) => (e._isScalar ? (t.next(e.value), void t.complete()) : e.subscribe(t));
        if (e && 'function' == typeof e[v]) return N(e);
        if (L(e)) return I(e);
        if (F(e)) return O(e);
        if (e && 'function' == typeof e[k]) return M(e);
        {
          const t = u(e) ? 'an invalid object' : `'${e}'`;
          throw new TypeError(
            `You provided ${t} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`
          );
        }
      };
      function $(e, t, n, r, i = new D(e, n, r)) {
        if (!i.closed) return U(t)(i);
      }
      class j extends g {
        notifyNext(e, t, n, r, i) {
          this.destination.next(t);
        }
        notifyError(e, t) {
          this.destination.error(e);
        }
        notifyComplete(e) {
          this.destination.complete();
        }
      }
      function H(e, t) {
        return function (n) {
          if ('function' != typeof e)
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          return n.lift(new z(e, t));
        };
      }
      class z {
        constructor(e, t) {
          (this.project = e), (this.thisArg = t);
        }
        call(e, t) {
          return t.subscribe(new B(e, this.project, this.thisArg));
        }
      }
      class B extends g {
        constructor(e, t, n) {
          super(e), (this.project = t), (this.count = 0), (this.thisArg = n || this);
        }
        _next(e) {
          let t;
          try {
            t = this.project.call(this.thisArg, e, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(t);
        }
      }
      function q(e, t) {
        return new w(
          t
            ? (n) => {
                const r = new d();
                let i = 0;
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
            : I(e)
        );
      }
      function G(e, t) {
        if (!t) return e instanceof w ? e : new w(U(e));
        if (null != e) {
          if (
            (function (e) {
              return e && 'function' == typeof e[v];
            })(e)
          )
            return (function (e, t) {
              return new w(
                t
                  ? (n) => {
                      const r = new d();
                      return (
                        r.add(
                          t.schedule(() => {
                            const i = e[v]();
                            r.add(
                              i.subscribe({
                                next(e) {
                                  r.add(t.schedule(() => n.next(e)));
                                },
                                error(e) {
                                  r.add(t.schedule(() => n.error(e)));
                                },
                                complete() {
                                  r.add(t.schedule(() => n.complete()));
                                },
                              })
                            );
                          })
                        ),
                        r
                      );
                    }
                  : N(e)
              );
            })(e, t);
          if (F(e))
            return (function (e, t) {
              return new w(
                t
                  ? (n) => {
                      const r = new d();
                      return (
                        r.add(
                          t.schedule(() =>
                            e.then(
                              (e) => {
                                r.add(
                                  t.schedule(() => {
                                    n.next(e), r.add(t.schedule(() => n.complete()));
                                  })
                                );
                              },
                              (e) => {
                                r.add(t.schedule(() => n.error(e)));
                              }
                            )
                          )
                        ),
                        r
                      );
                    }
                  : O(e)
              );
            })(e, t);
          if (L(e)) return q(e, t);
          if (
            (function (e) {
              return e && 'function' == typeof e[k];
            })(e) ||
            'string' == typeof e
          )
            return (function (e, t) {
              if (!e) throw new Error('Iterable cannot be null');
              return new w(
                t
                  ? (n) => {
                      const r = new d();
                      let i;
                      return (
                        r.add(() => {
                          i && 'function' == typeof i.return && i.return();
                        }),
                        r.add(
                          t.schedule(() => {
                            (i = e[k]()),
                              r.add(
                                t.schedule(function () {
                                  if (n.closed) return;
                                  let e, t;
                                  try {
                                    const n = i.next();
                                    (e = n.value), (t = n.done);
                                  } catch (r) {
                                    return void n.error(r);
                                  }
                                  t ? n.complete() : (n.next(e), this.schedule());
                                })
                              );
                          })
                        ),
                        r
                      );
                    }
                  : M(e)
              );
            })(e, t);
        }
        throw new TypeError(((null !== e && typeof e) || e) + ' is not observable');
      }
      function W(e, t, n = Number.POSITIVE_INFINITY) {
        return 'function' == typeof t
          ? (r) => r.pipe(W((n, r) => G(e(n, r)).pipe(H((e, i) => t(n, e, r, i))), n))
          : ('number' == typeof t && (n = t), (t) => t.lift(new Z(e, n)));
      }
      class Z {
        constructor(e, t = Number.POSITIVE_INFINITY) {
          (this.project = e), (this.concurrent = t);
        }
        call(e, t) {
          return t.subscribe(new K(e, this.project, this.concurrent));
        }
      }
      class K extends j {
        constructor(e, t, n = Number.POSITIVE_INFINITY) {
          super(e),
            (this.project = t),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(e) {
          this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e);
        }
        _tryNext(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(t, e, n);
        }
        _innerSub(e, t, n) {
          const r = new D(this, void 0, void 0);
          this.destination.add(r), $(this, e, t, n, r);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active && 0 === this.buffer.length && this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(e, t, n, r, i) {
          this.destination.next(t);
        }
        notifyComplete(e) {
          const t = this.buffer;
          this.remove(e),
            this.active--,
            t.length > 0
              ? this._next(t.shift())
              : 0 === this.active && this.hasCompleted && this.destination.complete();
        }
      }
      function Q(e) {
        return e;
      }
      function Y(e = Number.POSITIVE_INFINITY) {
        return W(Q, e);
      }
      function J(...e) {
        let t = Number.POSITIVE_INFINITY,
          n = null,
          r = e[e.length - 1];
        return (
          A(r)
            ? ((n = e.pop()), e.length > 1 && 'number' == typeof e[e.length - 1] && (t = e.pop()))
            : 'number' == typeof r && (t = e.pop()),
          null === n && 1 === e.length && e[0] instanceof w ? e[0] : Y(t)(q(e, n))
        );
      }
      function X() {
        return function (e) {
          return e.lift(new ee(e));
        };
      }
      class ee {
        constructor(e) {
          this.connectable = e;
        }
        call(e, t) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new te(e, n),
            i = t.subscribe(r);
          return r.closed || (r.connection = n.connect()), i;
        }
      }
      class te extends g {
        constructor(e, t) {
          super(e), (this.connectable = t);
        }
        _unsubscribe() {
          const { connectable: e } = this;
          if (!e) return void (this.connection = null);
          this.connectable = null;
          const t = e._refCount;
          if (t <= 0) return void (this.connection = null);
          if (((e._refCount = t - 1), t > 1)) return void (this.connection = null);
          const { connection: n } = this,
            r = e._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
      const ne = class extends w {
          constructor(e, t) {
            super(),
              (this.source = e),
              (this.subjectFactory = t),
              (this._refCount = 0),
              (this._isComplete = !1);
          }
          _subscribe(e) {
            return this.getSubject().subscribe(e);
          }
          getSubject() {
            const e = this._subject;
            return (e && !e.isStopped) || (this._subject = this.subjectFactory()), this._subject;
          }
          connect() {
            let e = this._connection;
            return (
              e ||
                ((this._isComplete = !1),
                (e = this._connection = new d()),
                e.add(this.source.subscribe(new ie(this.getSubject(), this))),
                e.closed ? ((this._connection = null), (e = d.EMPTY)) : (this._connection = e)),
              e
            );
          }
          refCount() {
            return X()(this);
          }
        }.prototype,
        re = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: ne._subscribe },
          _isComplete: { value: ne._isComplete, writable: !0 },
          getSubject: { value: ne.getSubject },
          connect: { value: ne.connect },
          refCount: { value: ne.refCount },
        };
      class ie extends T {
        constructor(e, t) {
          super(e), (this.connectable = t);
        }
        _error(e) {
          this._unsubscribe(), super._error(e);
        }
        _complete() {
          (this.connectable._isComplete = !0), this._unsubscribe(), super._complete();
        }
        _unsubscribe() {
          const e = this.connectable;
          if (e) {
            this.connectable = null;
            const t = e._connection;
            (e._refCount = 0), (e._subject = null), (e._connection = null), t && t.unsubscribe();
          }
        }
      }
      function oe() {
        return new P();
      }
      function se(e, t, n) {
        const r = (function (e) {
          return function (...t) {
            if (e) {
              const n = e(...t);
              for (const e in n) this[e] = n[e];
            }
          };
        })(t);
        function i(...e) {
          if (this instanceof i) return r.apply(this, e), this;
          const t = new i(...e);
          return (n.annotation = t), n;
          function n(e, n, r) {
            const i = e.hasOwnProperty('__parameters__')
              ? e.__parameters__
              : Object.defineProperty(e, '__parameters__', { value: [] }).__parameters__;
            for (; i.length <= r; ) i.push(null);
            return (i[r] = i[r] || []).push(t), e;
          }
        }
        return (
          n && (i.prototype = Object.create(n.prototype)),
          (i.prototype.ngMetadataName = e),
          (i.annotationCls = i),
          i
        );
      }
      const le = se('Inject', (e) => ({ token: e })),
        ae = se('Optional'),
        ue = se('Self'),
        ce = se('SkipSelf');
      var he = (function (e) {
        return (
          (e[(e.Default = 0)] = 'Default'),
          (e[(e.Host = 1)] = 'Host'),
          (e[(e.Self = 2)] = 'Self'),
          (e[(e.SkipSelf = 4)] = 'SkipSelf'),
          (e[(e.Optional = 8)] = 'Optional'),
          e
        );
      })({});
      function de(e) {
        for (let t in e) if (e[t] === de) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function pe(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function fe(e) {
        const t = e[ge];
        return t && t.token === e ? t : null;
      }
      const ge = de({ ngInjectableDef: de });
      function me(e) {
        if ('string' == typeof e) return e;
        if (e instanceof Array) return '[' + e.map(me).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return '' + e.overriddenName;
        if (e.name) return '' + e.name;
        const t = e.toString();
        if (null == t) return '' + t;
        const n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      const ve = de({ __forward_ref__: de });
      function _e(e) {
        return (
          (e.__forward_ref__ = _e),
          (e.toString = function () {
            return me(this());
          }),
          e
        );
      }
      function be(e) {
        const t = e;
        return 'function' == typeof t && t.hasOwnProperty(ve) && t.__forward_ref__ === _e ? t() : e;
      }
      const ye = 'undefined' != typeof globalThis && globalThis,
        we = 'undefined' != typeof window && window,
        Ce =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        xe = 'undefined' != typeof global && global,
        Se = ye || xe || we || Ce;
      class Ee {
        constructor(e, t) {
          (this._desc = e),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ngInjectableDef = void 0),
            'number' == typeof t
              ? (this.__NG_ELEMENT_ID__ = t)
              : void 0 !== t &&
                (this.ngInjectableDef = pe({
                  token: this,
                  providedIn: t.providedIn || 'root',
                  factory: t.factory,
                }));
        }
        toString() {
          return 'InjectionToken ' + this._desc;
        }
      }
      const Te = new Ee('INJECTOR', -1),
        Pe = new Object(),
        Re = /\n/gm,
        Ae = de({ provide: String, useValue: de });
      let De = void 0;
      function Ie(e) {
        const t = De;
        return (De = e), t;
      }
      function Oe(e, t = he.Default) {
        return (function (e, t = he.Default) {
          if (void 0 === De) throw new Error('inject() must be called from an injection context');
          return null === De
            ? (function (e, t, n) {
                const r = fe(e);
                if (r && 'root' == r.providedIn)
                  return void 0 === r.value ? (r.value = r.factory()) : r.value;
                if (n & he.Optional) return null;
                throw new Error(`Injector: NOT_FOUND [${me(e)}]`);
              })(e, 0, t)
            : De.get(e, t & he.Optional ? null : void 0, t);
        })(e, t);
      }
      class Ve {
        get(e, t = Pe) {
          if (t === Pe) {
            const t = new Error(`NullInjectorError: No provider for ${me(e)}!`);
            throw ((t.name = 'NullInjectorError'), t);
          }
          return t;
        }
      }
      function ke(e, t, n, r = null) {
        e = e && '\n' === e.charAt(0) && '\u0275' == e.charAt(1) ? e.substr(2) : e;
        let i = me(t);
        if (t instanceof Array) i = t.map(me).join(' -> ');
        else if ('object' == typeof t) {
          let e = [];
          for (let n in t)
            if (t.hasOwnProperty(n)) {
              let r = t[n];
              e.push(n + ':' + ('string' == typeof r ? JSON.stringify(r) : me(r)));
            }
          i = `{${e.join(', ')}}`;
        }
        return `${n}${r ? '(' + r + ')' : ''}[${i}]: ${e.replace(Re, '\n  ')}`;
      }
      const Me = new Ee('The presence of this token marks an injector as being the root injector.'),
        Ne = function (e, t, n) {
          return new He(e, t, n);
        };
      let Le = (() => {
        class e {
          static create(e, t) {
            return Array.isArray(e) ? Ne(e, t, '') : Ne(e.providers, e.parent, e.name || '');
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = Pe),
          (e.NULL = new Ve()),
          (e.ngInjectableDef = pe({ token: e, providedIn: 'any', factory: () => Oe(Te) })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      const Fe = function (e) {
          return e;
        },
        Ue = [],
        $e = Fe,
        je = function () {
          return Array.prototype.slice.call(arguments);
        };
      class He {
        constructor(e, t = Le.NULL, n = null) {
          (this.parent = t), (this.source = n);
          const r = (this._records = new Map());
          r.set(Le, { token: Le, fn: Fe, deps: Ue, value: this, useNew: !1 }),
            r.set(Te, { token: Te, fn: Fe, deps: Ue, value: this, useNew: !1 }),
            (function e(t, n) {
              if (n)
                if ((n = be(n)) instanceof Array) for (let r = 0; r < n.length; r++) e(t, n[r]);
                else {
                  if ('function' == typeof n) throw Be('Function/Class not supported', n);
                  if (!n || 'object' != typeof n || !n.provide) throw Be('Unexpected provider', n);
                  {
                    let e = be(n.provide);
                    const r = (function (e) {
                      const t = (function (e) {
                        let t = Ue;
                        const n = e.deps;
                        if (n && n.length) {
                          t = [];
                          for (let e = 0; e < n.length; e++) {
                            let r = 6,
                              i = be(n[e]);
                            if (i instanceof Array)
                              for (let e = 0, t = i; e < t.length; e++) {
                                const n = t[e];
                                n instanceof ae || n == ae
                                  ? (r |= 1)
                                  : n instanceof ce || n == ce
                                  ? (r &= -3)
                                  : n instanceof ue || n == ue
                                  ? (r &= -5)
                                  : (i = n instanceof le ? n.token : be(n));
                              }
                            t.push({ token: i, options: r });
                          }
                        } else if (e.useExisting) t = [{ token: be(e.useExisting), options: 6 }];
                        else if (!n && !(Ae in e)) throw Be("'deps' required", e);
                        return t;
                      })(e);
                      let n = Fe,
                        r = Ue,
                        i = !1,
                        o = be(e.provide);
                      if (Ae in e) r = e.useValue;
                      else if (e.useFactory) n = e.useFactory;
                      else if (e.useExisting);
                      else if (e.useClass) (i = !0), (n = be(e.useClass));
                      else {
                        if ('function' != typeof o)
                          throw Be(
                            'StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable',
                            e
                          );
                        (i = !0), (n = o);
                      }
                      return { deps: t, fn: n, useNew: i, value: r };
                    })(n);
                    if (!0 === n.multi) {
                      let r = t.get(e);
                      if (r) {
                        if (r.fn !== je) throw ze(e);
                      } else
                        t.set(
                          e,
                          (r = { token: n.provide, deps: [], useNew: !1, fn: je, value: Ue })
                        );
                      (e = n), r.deps.push({ token: e, options: 6 });
                    }
                    const i = t.get(e);
                    if (i && i.fn == je) throw ze(e);
                    t.set(e, r);
                  }
                }
            })(r, e);
        }
        get(e, t, n = he.Default) {
          const r = this._records.get(e);
          try {
            return (function e(t, n, r, i, o, s) {
              try {
                return (function (t, n, r, i, o, s) {
                  let l;
                  if (!n || s & he.SkipSelf) s & he.Self || (l = i.get(t, o, he.Default));
                  else {
                    if (((l = n.value), l == $e)) throw Error('\u0275Circular dependency');
                    if (l === Ue) {
                      n.value = $e;
                      let t = void 0,
                        o = n.useNew,
                        s = n.fn,
                        a = n.deps,
                        u = Ue;
                      if (a.length) {
                        u = [];
                        for (let t = 0; t < a.length; t++) {
                          const n = a[t],
                            o = n.options,
                            s = 2 & o ? r.get(n.token) : void 0;
                          u.push(
                            e(
                              n.token,
                              s,
                              r,
                              s || 4 & o ? i : Le.NULL,
                              1 & o ? null : Le.THROW_IF_NOT_FOUND,
                              he.Default
                            )
                          );
                        }
                      }
                      n.value = l = o ? new s(...u) : s.apply(t, u);
                    }
                  }
                  return l;
                })(t, n, r, i, o, s);
              } catch (l) {
                throw (
                  (l instanceof Error || (l = new Error(l)),
                  (l.ngTempTokenPath = l.ngTempTokenPath || []).unshift(t),
                  n && n.value == $e && (n.value = Ue),
                  l)
                );
              }
            })(e, r, this._records, this.parent, t, n);
          } catch (i) {
            return (function (e, t, n, r) {
              const i = e.ngTempTokenPath;
              throw (
                (t.__source && i.unshift(t.__source),
                (e.message = ke('\n' + e.message, i, 'StaticInjectorError', r)),
                (e.ngTokenPath = i),
                (e.ngTempTokenPath = null),
                e)
              );
            })(i, e, 0, this.source);
          }
        }
        toString() {
          const e = [];
          return this._records.forEach((t, n) => e.push(me(n))), `StaticInjector[${e.join(', ')}]`;
        }
      }
      function ze(e) {
        return Be('Cannot mix multi providers and regular providers', e);
      }
      function Be(e, t) {
        return new Error(ke(e, t, 'StaticInjectorError'));
      }
      const qe = new Ee('AnalyzeForEntryComponents'),
        Ge = (function () {
          var e = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (e[e.Emulated] = 'Emulated'),
            (e[e.Native] = 'Native'),
            (e[e.None] = 'None'),
            (e[e.ShadowDom] = 'ShadowDom'),
            e
          );
        })(),
        We = (() =>
          (
            ('undefined' != typeof requestAnimationFrame && requestAnimationFrame) ||
            setTimeout
          ).bind(Se))();
      let Ze = !0,
        Ke = !1;
      function Qe() {
        return (Ke = !0), Ze;
      }
      class Ye {
        constructor(e) {
          if (
            ((this.defaultDoc = e),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
              'sanitization-inert'
            )),
            (this.inertBodyElement = this.inertDocument.body),
            null == this.inertBodyElement)
          ) {
            const e = this.inertDocument.createElement('html');
            this.inertDocument.appendChild(e),
              (this.inertBodyElement = this.inertDocument.createElement('body')),
              e.appendChild(this.inertBodyElement);
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
        getInertBodyElement_XHR(e) {
          e = '<body><remove></remove>' + e + '</body>';
          try {
            e = encodeURI(e);
          } catch (r) {
            return null;
          }
          const t = new XMLHttpRequest();
          (t.responseType = 'document'),
            t.open('GET', 'data:text/html;charset=utf-8,' + e, !1),
            t.send(void 0);
          const n = t.response.body;
          return n.removeChild(n.firstChild), n;
        }
        getInertBodyElement_DOMParser(e) {
          e = '<body><remove></remove>' + e + '</body>';
          try {
            const t = new window.DOMParser().parseFromString(e, 'text/html').body;
            return t.removeChild(t.firstChild), t;
          } catch (t) {
            return null;
          }
        }
        getInertBodyElement_InertDocument(e) {
          const t = this.inertDocument.createElement('template');
          return 'content' in t
            ? ((t.innerHTML = e), t)
            : ((this.inertBodyElement.innerHTML = e),
              this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement),
              this.inertBodyElement);
        }
        stripCustomNsAttrs(e) {
          const t = e.attributes;
          for (let r = t.length - 1; 0 < r; r--) {
            const n = t.item(r).name;
            ('xmlns:ns1' !== n && 0 !== n.indexOf('ns1:')) || e.removeAttribute(n);
          }
          let n = e.firstChild;
          for (; n; )
            n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n), (n = n.nextSibling);
        }
      }
      const Je = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Xe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function et(e) {
        return (e = String(e)).match(Je) || e.match(Xe)
          ? e
          : (Qe() &&
              console.warn(
                `WARNING: sanitizing unsafe URL value ${e} (see http://g.co/ng/security#xss)`
              ),
            'unsafe:' + e);
      }
      function tt(e) {
        const t = {};
        for (const n of e.split(',')) t[n] = !0;
        return t;
      }
      function nt(...e) {
        const t = {};
        for (const n of e) for (const e in n) n.hasOwnProperty(e) && (t[e] = !0);
        return t;
      }
      const rt = tt('area,br,col,hr,img,wbr'),
        it = tt('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        ot = tt('rp,rt'),
        st = nt(ot, it),
        lt = nt(
          rt,
          nt(
            it,
            tt(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          nt(
            ot,
            tt(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          st
        ),
        at = tt('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        ut = tt('srcset'),
        ct = nt(
          at,
          ut,
          tt(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          tt(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        ht = tt('script,style,template');
      class dt {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(e) {
          let t = e.firstChild,
            n = !0;
          for (; t; )
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
                let e = this.checkClobberedElement(t, t.nextSibling);
                if (e) {
                  t = e;
                  break;
                }
                t = this.checkClobberedElement(t, t.parentNode);
              }
          return this.buf.join('');
        }
        startElement(e) {
          const t = e.nodeName.toLowerCase();
          if (!lt.hasOwnProperty(t)) return (this.sanitizedSomething = !0), !ht.hasOwnProperty(t);
          this.buf.push('<'), this.buf.push(t);
          const n = e.attributes;
          for (let i = 0; i < n.length; i++) {
            const e = n.item(i),
              t = e.name,
              o = t.toLowerCase();
            if (!ct.hasOwnProperty(o)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let s = e.value;
            at[o] && (s = et(s)),
              ut[o] &&
                ((r = s),
                (s = (r = String(r))
                  .split(',')
                  .map((e) => et(e.trim()))
                  .join(', '))),
              this.buf.push(' ', t, '="', gt(s), '"');
          }
          var r;
          return this.buf.push('>'), !0;
        }
        endElement(e) {
          const t = e.nodeName.toLowerCase();
          lt.hasOwnProperty(t) &&
            !rt.hasOwnProperty(t) &&
            (this.buf.push('</'), this.buf.push(t), this.buf.push('>'));
        }
        chars(e) {
          this.buf.push(gt(e));
        }
        checkClobberedElement(e, t) {
          if (
            t &&
            (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              'Failed to sanitize html because the element is clobbered: ' + e.outerHTML
            );
          return t;
        }
      }
      const pt = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        ft = /([^\#-~ |!])/g;
      function gt(e) {
        return e
          .replace(/&/g, '&amp;')
          .replace(pt, function (e) {
            return (
              '&#' + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ';'
            );
          })
          .replace(ft, function (e) {
            return '&#' + e.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let mt;
      function vt(e) {
        return 'content' in e &&
          (function (e) {
            return e.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === e.nodeName;
          })(e)
          ? e.content
          : null;
      }
      const _t = (function () {
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
      })();
      class bt {}
      const yt = new RegExp(
          '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
          'g'
        ),
        wt = /^url\(([^)]+)\)$/;
      function Ct(e) {
        return e.ngDebugContext;
      }
      function xt(e) {
        return e.ngOriginalError;
      }
      function St(e, ...t) {
        e.error(...t);
      }
      class Et {
        constructor() {
          this._console = console;
        }
        handleError(e) {
          const t = this._findOriginalError(e),
            n = this._findContext(e),
            r = (function (e) {
              return e.ngErrorLogger || St;
            })(e);
          r(this._console, 'ERROR', e),
            t && r(this._console, 'ORIGINAL ERROR', t),
            n && r(this._console, 'ERROR CONTEXT', n);
        }
        _findContext(e) {
          return e ? (Ct(e) ? Ct(e) : this._findContext(xt(e))) : null;
        }
        _findOriginalError(e) {
          let t = xt(e);
          for (; t && xt(t); ) t = xt(t);
          return t;
        }
      }
      const Tt = /([A-Z])/g;
      function Pt(e) {
        try {
          return null != e ? e.toString().slice(0, 30) : e;
        } catch (t) {
          return '[ERROR] Exception while trying to serialize the value';
        }
      }
      let Rt = null;
      function At() {
        if (!Rt) {
          const e = Se.Symbol;
          if (e && e.iterator) Rt = e.iterator;
          else {
            const e = Object.getOwnPropertyNames(Map.prototype);
            for (let t = 0; t < e.length; ++t) {
              const n = e[t];
              'entries' !== n &&
                'size' !== n &&
                Map.prototype[n] === Map.prototype.entries &&
                (Rt = n);
            }
          }
        }
        return Rt;
      }
      function Dt(e, t) {
        return e === t || ('number' == typeof e && 'number' == typeof t && isNaN(e) && isNaN(t));
      }
      function It(e, t) {
        const n = Vt(e),
          r = Vt(t);
        if (n && r)
          return (function (e, t, n) {
            const r = e[At()](),
              i = t[At()]();
            for (;;) {
              const e = r.next(),
                t = i.next();
              if (e.done && t.done) return !0;
              if (e.done || t.done) return !1;
              if (!n(e.value, t.value)) return !1;
            }
          })(e, t, It);
        {
          const i = e && ('object' == typeof e || 'function' == typeof e),
            o = t && ('object' == typeof t || 'function' == typeof t);
          return !(n || !i || r || !o) || Dt(e, t);
        }
      }
      class Ot {
        constructor(e) {
          this.wrapped = e;
        }
        static wrap(e) {
          return new Ot(e);
        }
        static unwrap(e) {
          return Ot.isWrapped(e) ? e.wrapped : e;
        }
        static isWrapped(e) {
          return e instanceof Ot;
        }
      }
      function Vt(e) {
        return !!kt(e) && (Array.isArray(e) || (!(e instanceof Map) && At() in e));
      }
      function kt(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      function Mt(e) {
        return !!e && 'function' == typeof e.then;
      }
      function Nt(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      class Lt {
        constructor(e, t, n) {
          (this.previousValue = e), (this.currentValue = t), (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      class Ft {}
      function Ut(e) {
        const t = Error(
          `No component factory found for ${me(e)}. Did you add it to @NgModule.entryComponents?`
        );
        return (t[$t] = e), t;
      }
      const $t = 'ngComponent';
      class jt {
        resolveComponentFactory(e) {
          throw Ut(e);
        }
      }
      let Ht = (() => {
        class e {}
        return (e.NULL = new jt()), e;
      })();
      class zt {
        constructor(e, t, n) {
          (this._parent = t), (this._ngModule = n), (this._factories = new Map());
          for (let r = 0; r < e.length; r++) {
            const t = e[r];
            this._factories.set(t.componentType, t);
          }
        }
        resolveComponentFactory(e) {
          let t = this._factories.get(e);
          if ((!t && this._parent && (t = this._parent.resolveComponentFactory(e)), !t))
            throw Ut(e);
          return new Bt(t, this._ngModule);
        }
      }
      class Bt extends Ft {
        constructor(e, t) {
          super(),
            (this.factory = e),
            (this.ngModule = t),
            (this.selector = e.selector),
            (this.componentType = e.componentType),
            (this.ngContentSelectors = e.ngContentSelectors),
            (this.inputs = e.inputs),
            (this.outputs = e.outputs);
        }
        create(e, t, n, r) {
          return this.factory.create(e, t, n, r || this.ngModule);
        }
      }
      class qt {}
      class Gt {}
      function Wt(...e) {}
      let Zt = (() => {
        class e {
          constructor(e) {
            this.nativeElement = e;
          }
        }
        return (e.__NG_ELEMENT_ID__ = () => Kt(e)), e;
      })();
      const Kt = Wt;
      class Qt {}
      class Yt {}
      const Jt = (function () {
        var e = { Important: 1, DashCase: 2 };
        return (e[e.Important] = 'Important'), (e[e.DashCase] = 'DashCase'), e;
      })();
      let Xt = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => en()), e;
      })();
      const en = Wt;
      class tn {
        constructor(e) {
          (this.full = e),
            (this.major = e.split('.')[0]),
            (this.minor = e.split('.')[1]),
            (this.patch = e.split('.').slice(2).join('.'));
        }
      }
      const nn = new tn('8.1.3');
      class rn {
        constructor() {}
        supports(e) {
          return Vt(e);
        }
        create(e) {
          return new sn(e);
        }
      }
      const on = (e, t) => t;
      class sn {
        constructor(e) {
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
            (this._trackByFn = e || on);
        }
        forEachItem(e) {
          let t;
          for (t = this._itHead; null !== t; t = t._next) e(t);
        }
        forEachOperation(e) {
          let t = this._itHead,
            n = this._removalsHead,
            r = 0,
            i = null;
          for (; t || n; ) {
            const o = !n || (t && t.currentIndex < cn(n, r, i)) ? t : n,
              s = cn(o, r, i),
              l = o.currentIndex;
            if (o === n) r--, (n = n._nextRemoved);
            else if (((t = t._next), null == o.previousIndex)) r++;
            else {
              i || (i = []);
              const e = s - r,
                t = l - r;
              if (e != t) {
                for (let n = 0; n < e; n++) {
                  const r = n < i.length ? i[n] : (i[n] = 0),
                    o = r + n;
                  t <= o && o < e && (i[n] = r + 1);
                }
                i[o.previousIndex] = t - e;
              }
            }
            s !== l && e(o, s, l);
          }
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t);
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }
        forEachMovedItem(e) {
          let t;
          for (t = this._movesHead; null !== t; t = t._nextMoved) e(t);
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }
        forEachIdentityChange(e) {
          let t;
          for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) e(t);
        }
        diff(e) {
          if ((null == e && (e = []), !Vt(e)))
            throw new Error(
              `Error trying to diff '${me(e)}'. Only arrays and iterables are allowed`
            );
          return this.check(e) ? this : null;
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t,
            n,
            r,
            i = this._itHead,
            o = !1;
          if (Array.isArray(e)) {
            this.length = e.length;
            for (let t = 0; t < this.length; t++)
              (n = e[t]),
                (r = this._trackByFn(t, n)),
                null !== i && Dt(i.trackById, r)
                  ? (o && (i = this._verifyReinsertion(i, n, r, t)),
                    Dt(i.item, n) || this._addIdentityChange(i, n))
                  : ((i = this._mismatch(i, n, r, t)), (o = !0)),
                (i = i._next);
          } else
            (t = 0),
              (function (e, t) {
                if (Array.isArray(e)) for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[At()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(e, (e) => {
                (r = this._trackByFn(t, e)),
                  null !== i && Dt(i.trackById, r)
                    ? (o && (i = this._verifyReinsertion(i, e, r, t)),
                      Dt(i.item, e) || this._addIdentityChange(i, e))
                    : ((i = this._mismatch(i, e, r, t)), (o = !0)),
                  (i = i._next),
                  t++;
              }),
              (this.length = t);
          return this._truncate(i), (this.collection = e), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let e, t;
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
        }
        _mismatch(e, t, n, r) {
          let i;
          return (
            null === e ? (i = this._itTail) : ((i = e._prev), this._remove(e)),
            null !== (e = null === this._linkedRecords ? null : this._linkedRecords.get(n, r))
              ? (Dt(e.item, t) || this._addIdentityChange(e, t), this._moveAfter(e, i, r))
              : null !==
                (e = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null))
              ? (Dt(e.item, t) || this._addIdentityChange(e, t), this._reinsertAfter(e, i, r))
              : (e = this._addAfter(new ln(t, n), i, r)),
            e
          );
        }
        _verifyReinsertion(e, t, n, r) {
          let i = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
          return (
            null !== i
              ? (e = this._reinsertAfter(i, e._prev, r))
              : e.currentIndex != r && ((e.currentIndex = r), this._addToMoves(e, r)),
            e
          );
        }
        _truncate(e) {
          for (; null !== e; ) {
            const t = e._next;
            this._addToRemovals(this._unlink(e)), (e = t);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail && (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(e, t, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
          const r = e._prevRemoved,
            i = e._nextRemoved;
          return (
            null === r ? (this._removalsHead = i) : (r._nextRemoved = i),
            null === i ? (this._removalsTail = r) : (i._prevRemoved = r),
            this._insertAfter(e, t, n),
            this._addToMoves(e, n),
            e
          );
        }
        _moveAfter(e, t, n) {
          return this._unlink(e), this._insertAfter(e, t, n), this._addToMoves(e, n), e;
        }
        _addAfter(e, t, n) {
          return (
            this._insertAfter(e, t, n),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = e)
                : (this._additionsTail._nextAdded = e)),
            e
          );
        }
        _insertAfter(e, t, n) {
          const r = null === t ? this._itHead : t._next;
          return (
            (e._next = r),
            (e._prev = t),
            null === r ? (this._itTail = e) : (r._prev = e),
            null === t ? (this._itHead = e) : (t._next = e),
            null === this._linkedRecords && (this._linkedRecords = new un()),
            this._linkedRecords.put(e),
            (e.currentIndex = n),
            e
          );
        }
        _remove(e) {
          return this._addToRemovals(this._unlink(e));
        }
        _unlink(e) {
          null !== this._linkedRecords && this._linkedRecords.remove(e);
          const t = e._prev,
            n = e._next;
          return (
            null === t ? (this._itHead = n) : (t._next = n),
            null === n ? (this._itTail = t) : (n._prev = t),
            e
          );
        }
        _addToMoves(e, t) {
          return (
            e.previousIndex === t ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = e)
                  : (this._movesTail._nextMoved = e)),
            e
          );
        }
        _addToRemovals(e) {
          return (
            null === this._unlinkedRecords && (this._unlinkedRecords = new un()),
            this._unlinkedRecords.put(e),
            (e.currentIndex = null),
            (e._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = e), (e._prevRemoved = null))
              : ((e._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = e)),
            e
          );
        }
        _addIdentityChange(e, t) {
          return (
            (e.item = t),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = e)
                : (this._identityChangesTail._nextIdentityChange = e)),
            e
          );
        }
      }
      class ln {
        constructor(e, t) {
          (this.item = e),
            (this.trackById = t),
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
        }
      }
      class an {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(e) {
          null === this._head
            ? ((this._head = this._tail = e), (e._nextDup = null), (e._prevDup = null))
            : ((this._tail._nextDup = e),
              (e._prevDup = this._tail),
              (e._nextDup = null),
              (this._tail = e));
        }
        get(e, t) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if ((null === t || t <= n.currentIndex) && Dt(n.trackById, e)) return n;
          return null;
        }
        remove(e) {
          const t = e._prevDup,
            n = e._nextDup;
          return (
            null === t ? (this._head = n) : (t._nextDup = n),
            null === n ? (this._tail = t) : (n._prevDup = t),
            null === this._head
          );
        }
      }
      class un {
        constructor() {
          this.map = new Map();
        }
        put(e) {
          const t = e.trackById;
          let n = this.map.get(t);
          n || ((n = new an()), this.map.set(t, n)), n.add(e);
        }
        get(e, t) {
          const n = this.map.get(e);
          return n ? n.get(e, t) : null;
        }
        remove(e) {
          const t = e.trackById;
          return this.map.get(t).remove(e) && this.map.delete(t), e;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function cn(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let i = 0;
        return n && r < n.length && (i = n[r]), r + t + i;
      }
      class hn {
        constructor() {}
        supports(e) {
          return e instanceof Map || kt(e);
        }
        create() {
          return new dn();
        }
      }
      class dn {
        constructor() {
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
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(e) {
          let t;
          for (t = this._mapHead; null !== t; t = t._next) e(t);
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t);
        }
        forEachChangedItem(e) {
          let t;
          for (t = this._changesHead; null !== t; t = t._nextChanged) e(t);
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }
        diff(e) {
          if (e) {
            if (!(e instanceof Map || kt(e)))
              throw new Error(`Error trying to diff '${me(e)}'. Only maps and objects are allowed`);
          } else e = new Map();
          return this.check(e) ? this : null;
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(e, (e, n) => {
              if (t && t.key === n)
                this._maybeAddToChanges(t, e), (this._appendAfter = t), (t = t._next);
              else {
                const r = this._getOrCreateRecordForKey(n, e);
                t = this._insertBeforeOrAppend(t, r);
              }
            }),
            t)
          ) {
            t._prev && (t._prev._next = null), (this._removalsHead = t);
            for (let e = t; null !== e; e = e._nextRemoved)
              e === this._mapHead && (this._mapHead = null),
                this._records.delete(e.key),
                (e._nextRemoved = e._next),
                (e.previousValue = e.currentValue),
                (e.currentValue = null),
                (e._prev = null),
                (e._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(e, t) {
          if (e) {
            const n = e._prev;
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
        }
        _getOrCreateRecordForKey(e, t) {
          if (this._records.has(e)) {
            const n = this._records.get(e);
            this._maybeAddToChanges(n, t);
            const r = n._prev,
              i = n._next;
            return r && (r._next = i), i && (i._prev = r), (n._next = null), (n._prev = null), n;
          }
          const n = new pn(e);
          return this._records.set(e, n), (n.currentValue = t), this._addToAdditions(n), n;
        }
        _reset() {
          if (this.isDirty) {
            let e;
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
        }
        _maybeAddToChanges(e, t) {
          Dt(t, e.currentValue) ||
            ((e.previousValue = e.currentValue), (e.currentValue = t), this._addToChanges(e));
        }
        _addToAdditions(e) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = e)
            : ((this._additionsTail._nextAdded = e), (this._additionsTail = e));
        }
        _addToChanges(e) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = e)
            : ((this._changesTail._nextChanged = e), (this._changesTail = e));
        }
        _forEach(e, t) {
          e instanceof Map ? e.forEach(t) : Object.keys(e).forEach((n) => t(e[n], n));
        }
      }
      class pn {
        constructor(e) {
          (this.key = e),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      let fn = (() => {
          class e {
            constructor(e) {
              this.factories = e;
            }
            static create(t, n) {
              if (null != n) {
                const e = n.factories.slice();
                t = t.concat(e);
              }
              return new e(t);
            }
            static extend(t) {
              return {
                provide: e,
                useFactory: (n) => {
                  if (!n)
                    throw new Error('Cannot extend IterableDiffers without a parent injector');
                  return e.create(t, n);
                },
                deps: [[e, new ce(), new ae()]],
              };
            }
            find(e) {
              const t = this.factories.find((t) => t.supports(e));
              if (null != t) return t;
              throw new Error(
                `Cannot find a differ supporting object '${e}' of type '${
                  ((n = e), n.name || typeof n)
                }'`
              );
              var n;
            }
          }
          return (
            (e.ngInjectableDef = pe({
              token: e,
              providedIn: 'root',
              factory: () => new e([new rn()]),
            })),
            e
          );
        })(),
        gn = (() => {
          class e {
            constructor(e) {
              this.factories = e;
            }
            static create(t, n) {
              if (n) {
                const e = n.factories.slice();
                t = t.concat(e);
              }
              return new e(t);
            }
            static extend(t) {
              return {
                provide: e,
                useFactory: (n) => {
                  if (!n)
                    throw new Error('Cannot extend KeyValueDiffers without a parent injector');
                  return e.create(t, n);
                },
                deps: [[e, new ce(), new ae()]],
              };
            }
            find(e) {
              const t = this.factories.find((t) => t.supports(e));
              if (t) return t;
              throw new Error(`Cannot find a differ supporting object '${e}'`);
            }
          }
          return (
            (e.ngInjectableDef = pe({
              token: e,
              providedIn: 'root',
              factory: () => new e([new hn()]),
            })),
            e
          );
        })(),
        mn = (() => {
          class e {}
          return (e.__NG_ELEMENT_ID__ = () => vn()), e;
        })();
      const vn = (...e) => {},
        _n = [new hn()],
        bn = new fn([new rn()]),
        yn = new gn(_n);
      let wn = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => Cn(e, Zt)), e;
      })();
      const Cn = Wt;
      let xn = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => Sn(e, Zt)), e;
      })();
      const Sn = Wt;
      function En(e, t, n, r) {
        let i = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '${t}'. Current value: '${n}'.`;
        return (
          r &&
            (i +=
              ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
          (function (e, t) {
            const n = new Error(e);
            return Tn(n, t), n;
          })(i, e)
        );
      }
      function Tn(e, t) {
        (e.ngDebugContext = t), (e.ngErrorLogger = t.logError.bind(t));
      }
      function Pn(e) {
        return new Error('ViewDestroyedError: Attempt to use a destroyed view: ' + e);
      }
      function Rn(e, t, n) {
        const r = e.state,
          i = 1792 & r;
        return i === t ? ((e.state = (-1793 & r) | n), (e.initIndex = -1), !0) : i === n;
      }
      function An(e, t, n) {
        return (1792 & e.state) === t && e.initIndex <= n && ((e.initIndex = n + 1), !0);
      }
      function Dn(e, t) {
        return e.nodes[t];
      }
      function In(e, t) {
        return e.nodes[t];
      }
      function On(e, t) {
        return e.nodes[t];
      }
      function Vn(e, t) {
        return e.nodes[t];
      }
      function kn(e, t) {
        return e.nodes[t];
      }
      const Mn = {
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
        Nn = () => {},
        Ln = new Map();
      function Fn(e) {
        let t = Ln.get(e);
        return t || ((t = me(e) + '_' + Ln.size), Ln.set(e, t)), t;
      }
      function Un(e, t, n, r) {
        if (Ot.isWrapped(r)) {
          r = Ot.unwrap(r);
          const i = e.def.nodes[t].bindingIndex + n,
            o = Ot.unwrap(e.oldValues[i]);
          e.oldValues[i] = new Ot(o);
        }
        return r;
      }
      function $n(e) {
        return {
          id: '$$undefined',
          styles: e.styles,
          encapsulation: e.encapsulation,
          data: e.data,
        };
      }
      let jn = 0;
      function Hn(e, t, n, r) {
        return !(!(2 & e.state) && Dt(e.oldValues[t.bindingIndex + n], r));
      }
      function zn(e, t, n, r) {
        return !!Hn(e, t, n, r) && ((e.oldValues[t.bindingIndex + n] = r), !0);
      }
      function Bn(e, t, n, r) {
        const i = e.oldValues[t.bindingIndex + n];
        if (1 & e.state || !It(i, r)) {
          const o = t.bindings[n].name;
          throw En(
            Mn.createDebugContext(e, t.nodeIndex),
            `${o}: ${i}`,
            `${o}: ${r}`,
            0 != (1 & e.state)
          );
        }
      }
      function qn(e) {
        let t = e;
        for (; t; ) 2 & t.def.flags && (t.state |= 8), (t = t.viewContainerParent || t.parent);
      }
      function Gn(e, t) {
        let n = e;
        for (; n && n !== t; ) (n.state |= 64), (n = n.viewContainerParent || n.parent);
      }
      function Wn(e, t, n, r) {
        try {
          return (
            qn(33554432 & e.def.nodes[t].flags ? In(e, t).componentView : e),
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
            return Dn(e, t.nodeIndex).renderText;
        }
      }
      function Yn(e) {
        return !!e.parent && !!(32768 & e.parentNodeDef.flags);
      }
      function Jn(e) {
        return !(!e.parent || 32768 & e.parentNodeDef.flags);
      }
      function Xn(e) {
        const t = {};
        let n = 0;
        const r = {};
        return (
          e &&
            e.forEach(([e, i]) => {
              'number' == typeof e
                ? ((t[e] = i),
                  (n |= (function (e) {
                    return 1 << e % 32;
                  })(e)))
                : (r[e] = i);
            }),
          { matchedQueries: t, references: r, matchedQueryIds: n }
        );
      }
      function er(e, t) {
        return e.map((e) => {
          let n, r;
          return (
            Array.isArray(e) ? ([r, n] = e) : ((r = 0), (n = e)),
            n &&
              ('function' == typeof n || 'object' == typeof n) &&
              t &&
              Object.defineProperty(n, '__source', { value: t, configurable: !0 }),
            { flags: r, token: n, tokenKey: Fn(n) }
          );
        });
      }
      function tr(e, t, n) {
        let r = n.renderParent;
        return r
          ? 0 == (1 & r.flags) ||
            0 == (33554432 & r.flags) ||
            (r.element.componentRendererType &&
              r.element.componentRendererType.encapsulation === Ge.Native)
            ? In(e, n.renderParent.nodeIndex).renderElement
            : void 0
          : t;
      }
      const nr = new WeakMap();
      function rr(e) {
        let t = nr.get(e);
        return t || ((t = e(() => Nn)), (t.factory = e), nr.set(e, t)), t;
      }
      function ir(e, t, n, r, i) {
        3 === t && (n = e.renderer.parentNode(Qn(e, e.def.lastRenderRootNode))),
          or(e, t, 0, e.def.nodes.length - 1, n, r, i);
      }
      function or(e, t, n, r, i, o, s) {
        for (let l = n; l <= r; l++) {
          const n = e.def.nodes[l];
          11 & n.flags && lr(e, n, t, i, o, s), (l += n.childCount);
        }
      }
      function sr(e, t, n, r, i, o) {
        let s = e;
        for (; s && !Yn(s); ) s = s.parent;
        const l = s.parent,
          a = Kn(s),
          u = a.nodeIndex + a.childCount;
        for (let c = a.nodeIndex + 1; c <= u; c++) {
          const e = l.def.nodes[c];
          e.ngContentIndex === t && lr(l, e, n, r, i, o), (c += e.childCount);
        }
        if (!l.parent) {
          const s = e.root.projectableNodes[t];
          if (s) for (let t = 0; t < s.length; t++) ar(e, s[t], n, r, i, o);
        }
      }
      function lr(e, t, n, r, i, o) {
        if (8 & t.flags) sr(e, t.ngContent.index, n, r, i, o);
        else {
          const s = Qn(e, t);
          if (
            (3 === n && 33554432 & t.flags && 48 & t.bindingFlags
              ? (16 & t.bindingFlags && ar(e, s, n, r, i, o),
                32 & t.bindingFlags && ar(In(e, t.nodeIndex).componentView, s, n, r, i, o))
              : ar(e, s, n, r, i, o),
            16777216 & t.flags)
          ) {
            const s = In(e, t.nodeIndex).viewContainer._embeddedViews;
            for (let e = 0; e < s.length; e++) ir(s[e], n, r, i, o);
          }
          1 & t.flags &&
            !t.element.name &&
            or(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, i, o);
        }
      }
      function ar(e, t, n, r, i, o) {
        const s = e.renderer;
        switch (n) {
          case 1:
            s.appendChild(r, t);
            break;
          case 2:
            s.insertBefore(r, t, i);
            break;
          case 3:
            s.removeChild(r, t);
            break;
          case 0:
            o.push(t);
        }
      }
      const ur = /^:([^:]+):(.+)$/;
      function cr(e) {
        if (':' === e[0]) {
          const t = e.match(ur);
          return [t[1], t[2]];
        }
        return ['', e];
      }
      function hr(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) t |= e[n].flags;
        return t;
      }
      const dr = new Object(),
        pr = Fn(Le),
        fr = Fn(Te),
        gr = Fn(qt);
      function mr(e, t, n, r) {
        return (n = be(n)), { index: -1, deps: er(r, me(t)), flags: e, token: t, value: n };
      }
      function vr(e, t, n = Le.THROW_IF_NOT_FOUND) {
        const r = Ie(e);
        try {
          if (8 & t.flags) return t.token;
          if ((2 & t.flags && (n = null), 1 & t.flags)) return e._parent.get(t.token, n);
          const s = t.tokenKey;
          switch (s) {
            case pr:
            case fr:
            case gr:
              return e;
          }
          const l = e._def.providersByKey[s];
          let a;
          if (l) {
            let t = e._providers[l.index];
            return void 0 === t && (t = e._providers[l.index] = _r(e, l)), t === dr ? void 0 : t;
          }
          if (
            (a = fe(t.token)) &&
            ((i = e),
            null != (o = a).providedIn &&
              ((function (e, t) {
                return e._def.modules.indexOf(t) > -1;
              })(i, o.providedIn) ||
                ('root' === o.providedIn && i._def.isRoot)))
          ) {
            const n = e._providers.length;
            return (
              (e._def.providers[n] = e._def.providersByKey[t.tokenKey] = {
                flags: 5120,
                value: a.factory,
                deps: [],
                index: n,
                token: t.token,
              }),
              (e._providers[n] = dr),
              (e._providers[n] = _r(e, e._def.providersByKey[t.tokenKey]))
            );
          }
          return 4 & t.flags ? n : e._parent.get(t.token, n);
        } finally {
          Ie(r);
        }
        var i, o;
      }
      function _r(e, t) {
        let n;
        switch (201347067 & t.flags) {
          case 512:
            n = (function (e, t, n) {
              const r = n.length;
              switch (r) {
                case 0:
                  return new t();
                case 1:
                  return new t(vr(e, n[0]));
                case 2:
                  return new t(vr(e, n[0]), vr(e, n[1]));
                case 3:
                  return new t(vr(e, n[0]), vr(e, n[1]), vr(e, n[2]));
                default:
                  const i = new Array(r);
                  for (let t = 0; t < r; t++) i[t] = vr(e, n[t]);
                  return new t(...i);
              }
            })(e, t.value, t.deps);
            break;
          case 1024:
            n = (function (e, t, n) {
              const r = n.length;
              switch (r) {
                case 0:
                  return t();
                case 1:
                  return t(vr(e, n[0]));
                case 2:
                  return t(vr(e, n[0]), vr(e, n[1]));
                case 3:
                  return t(vr(e, n[0]), vr(e, n[1]), vr(e, n[2]));
                default:
                  const i = Array(r);
                  for (let t = 0; t < r; t++) i[t] = vr(e, n[t]);
                  return t(...i);
              }
            })(e, t.value, t.deps);
            break;
          case 2048:
            n = vr(e, t.deps[0]);
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
      function br(e, t) {
        const n = e.viewContainer._embeddedViews;
        if (((null == t || t >= n.length) && (t = n.length - 1), t < 0)) return null;
        const r = n[t];
        return (r.viewContainerParent = null), xr(n, t), Mn.dirtyParentQueries(r), wr(r), r;
      }
      function yr(e, t, n) {
        const r = t ? Qn(t, t.def.lastRenderRootNode) : e.renderElement,
          i = n.renderer.parentNode(r),
          o = n.renderer.nextSibling(r);
        ir(n, 2, i, o, void 0);
      }
      function wr(e) {
        ir(e, 3, null, null, void 0);
      }
      function Cr(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function xr(e, t) {
        t >= e.length - 1 ? e.pop() : e.splice(t, 1);
      }
      const Sr = new Object();
      function Er(e, t, n, r, i, o) {
        return new Tr(e, t, n, r, i, o);
      }
      class Tr extends Ft {
        constructor(e, t, n, r, i, o) {
          super(),
            (this.selector = e),
            (this.componentType = t),
            (this._inputs = r),
            (this._outputs = i),
            (this.ngContentSelectors = o),
            (this.viewDefFactory = n);
        }
        get inputs() {
          const e = [],
            t = this._inputs;
          for (let n in t) e.push({ propName: n, templateName: t[n] });
          return e;
        }
        get outputs() {
          const e = [];
          for (let t in this._outputs) e.push({ propName: t, templateName: this._outputs[t] });
          return e;
        }
        create(e, t, n, r) {
          if (!r) throw new Error('ngModule should be provided');
          const i = rr(this.viewDefFactory),
            o = i.nodes[0].element.componentProvider.nodeIndex,
            s = Mn.createRootView(e, t || [], n, i, r, Sr),
            l = On(s, o).instance;
          return (
            n && s.renderer.setAttribute(In(s, 0).renderElement, 'ng-version', nn.full),
            new Pr(s, new Ir(s), l)
          );
        }
      }
      class Pr extends class {} {
        constructor(e, t, n) {
          super(),
            (this._view = e),
            (this._viewRef = t),
            (this._component = n),
            (this._elDef = this._view.def.nodes[0]),
            (this.hostView = t),
            (this.changeDetectorRef = t),
            (this.instance = n);
        }
        get location() {
          return new Zt(In(this._view, this._elDef.nodeIndex).renderElement);
        }
        get injector() {
          return new Mr(this._view, this._elDef);
        }
        get componentType() {
          return this._component.constructor;
        }
        destroy() {
          this._viewRef.destroy();
        }
        onDestroy(e) {
          this._viewRef.onDestroy(e);
        }
      }
      function Rr(e, t, n) {
        return new Ar(e, t, n);
      }
      class Ar {
        constructor(e, t, n) {
          (this._view = e), (this._elDef = t), (this._data = n), (this._embeddedViews = []);
        }
        get element() {
          return new Zt(this._data.renderElement);
        }
        get injector() {
          return new Mr(this._view, this._elDef);
        }
        get parentInjector() {
          let e = this._view,
            t = this._elDef.parent;
          for (; !t && e; ) (t = Kn(e)), (e = e.parent);
          return e ? new Mr(e, t) : new Mr(this._view, null);
        }
        clear() {
          for (let e = this._embeddedViews.length - 1; e >= 0; e--) {
            const t = br(this._data, e);
            Mn.destroyView(t);
          }
        }
        get(e) {
          const t = this._embeddedViews[e];
          if (t) {
            const e = new Ir(t);
            return e.attachToViewContainerRef(this), e;
          }
          return null;
        }
        get length() {
          return this._embeddedViews.length;
        }
        createEmbeddedView(e, t, n) {
          const r = e.createEmbeddedView(t || {});
          return this.insert(r, n), r;
        }
        createComponent(e, t, n, r, i) {
          const o = n || this.parentInjector;
          i || e instanceof Bt || (i = o.get(qt));
          const s = e.create(o, r, void 0, i);
          return this.insert(s.hostView, t), s;
        }
        insert(e, t) {
          if (e.destroyed) throw new Error('Cannot insert a destroyed View in a ViewContainer!');
          const n = e;
          return (
            (function (e, t, n, r) {
              let i = t.viewContainer._embeddedViews;
              null == n && (n = i.length),
                (r.viewContainerParent = e),
                Cr(i, n, r),
                (function (e, t) {
                  const n = Zn(t);
                  if (!n || n === e || 16 & t.state) return;
                  t.state |= 16;
                  let r = n.template._projectedViews;
                  r || (r = n.template._projectedViews = []),
                    r.push(t),
                    (function (e, t) {
                      if (4 & t.flags) return;
                      (e.nodeFlags |= 4), (t.flags |= 4);
                      let n = t.parent;
                      for (; n; ) (n.childFlags |= 4), (n = n.parent);
                    })(t.parent.def, t.parentNodeDef);
                })(t, r),
                Mn.dirtyParentQueries(r),
                yr(t, n > 0 ? i[n - 1] : null, r);
            })(this._view, this._data, t, n._view),
            n.attachToViewContainerRef(this),
            e
          );
        }
        move(e, t) {
          if (e.destroyed) throw new Error('Cannot move a destroyed View in a ViewContainer!');
          const n = this._embeddedViews.indexOf(e._view);
          return (
            (function (e, t, n) {
              const r = e.viewContainer._embeddedViews,
                i = r[t];
              xr(r, t),
                null == n && (n = r.length),
                Cr(r, n, i),
                Mn.dirtyParentQueries(i),
                wr(i),
                yr(e, n > 0 ? r[n - 1] : null, i);
            })(this._data, n, t),
            e
          );
        }
        indexOf(e) {
          return this._embeddedViews.indexOf(e._view);
        }
        remove(e) {
          const t = br(this._data, e);
          t && Mn.destroyView(t);
        }
        detach(e) {
          const t = br(this._data, e);
          return t ? new Ir(t) : null;
        }
      }
      function Dr(e) {
        return new Ir(e);
      }
      class Ir {
        constructor(e) {
          (this._view = e), (this._viewContainerRef = null), (this._appRef = null);
        }
        get rootNodes() {
          return (function (e) {
            const t = [];
            return ir(e, 0, void 0, void 0, t), t;
          })(this._view);
        }
        get context() {
          return this._view.context;
        }
        get destroyed() {
          return 0 != (128 & this._view.state);
        }
        markForCheck() {
          qn(this._view);
        }
        detach() {
          this._view.state &= -5;
        }
        detectChanges() {
          const e = this._view.root.rendererFactory;
          e.begin && e.begin();
          try {
            Mn.checkAndUpdateView(this._view);
          } finally {
            e.end && e.end();
          }
        }
        checkNoChanges() {
          Mn.checkNoChangesView(this._view);
        }
        reattach() {
          this._view.state |= 4;
        }
        onDestroy(e) {
          this._view.disposables || (this._view.disposables = []), this._view.disposables.push(e);
        }
        destroy() {
          this._appRef
            ? this._appRef.detachView(this)
            : this._viewContainerRef &&
              this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)),
            Mn.destroyView(this._view);
        }
        detachFromAppRef() {
          (this._appRef = null), wr(this._view), Mn.dirtyParentQueries(this._view);
        }
        attachToAppRef(e) {
          if (this._viewContainerRef)
            throw new Error('This view is already attached to a ViewContainer!');
          this._appRef = e;
        }
        attachToViewContainerRef(e) {
          if (this._appRef)
            throw new Error('This view is already attached directly to the ApplicationRef!');
          this._viewContainerRef = e;
        }
      }
      function Or(e, t) {
        return new Vr(e, t);
      }
      class Vr extends wn {
        constructor(e, t) {
          super(), (this._parentView = e), (this._def = t);
        }
        createEmbeddedView(e) {
          return new Ir(
            Mn.createEmbeddedView(this._parentView, this._def, this._def.element.template, e)
          );
        }
        get elementRef() {
          return new Zt(In(this._parentView, this._def.nodeIndex).renderElement);
        }
      }
      function kr(e, t) {
        return new Mr(e, t);
      }
      class Mr {
        constructor(e, t) {
          (this.view = e), (this.elDef = t);
        }
        get(e, t = Le.THROW_IF_NOT_FOUND) {
          return Mn.resolveDep(
            this.view,
            this.elDef,
            !!this.elDef && 0 != (33554432 & this.elDef.flags),
            { flags: 0, token: e, tokenKey: Fn(e) },
            t
          );
        }
      }
      function Nr(e, t) {
        const n = e.def.nodes[t];
        if (1 & n.flags) {
          const t = In(e, n.nodeIndex);
          return n.element.template ? t.template : t.renderElement;
        }
        if (2 & n.flags) return Dn(e, n.nodeIndex).renderText;
        if (20240 & n.flags) return On(e, n.nodeIndex).instance;
        throw new Error('Illegal state: read nodeValue for node index ' + t);
      }
      function Lr(e) {
        return new Fr(e.renderer);
      }
      class Fr {
        constructor(e) {
          this.delegate = e;
        }
        selectRootElement(e) {
          return this.delegate.selectRootElement(e);
        }
        createElement(e, t) {
          const [n, r] = cr(t),
            i = this.delegate.createElement(r, n);
          return e && this.delegate.appendChild(e, i), i;
        }
        createViewRoot(e) {
          return e;
        }
        createTemplateAnchor(e) {
          const t = this.delegate.createComment('');
          return e && this.delegate.appendChild(e, t), t;
        }
        createText(e, t) {
          const n = this.delegate.createText(t);
          return e && this.delegate.appendChild(e, n), n;
        }
        projectNodes(e, t) {
          for (let n = 0; n < t.length; n++) this.delegate.appendChild(e, t[n]);
        }
        attachViewAfter(e, t) {
          const n = this.delegate.parentNode(e),
            r = this.delegate.nextSibling(e);
          for (let i = 0; i < t.length; i++) this.delegate.insertBefore(n, t[i], r);
        }
        detachView(e) {
          for (let t = 0; t < e.length; t++) {
            const n = e[t],
              r = this.delegate.parentNode(n);
            this.delegate.removeChild(r, n);
          }
        }
        destroyView(e, t) {
          for (let n = 0; n < t.length; n++) this.delegate.destroyNode(t[n]);
        }
        listen(e, t, n) {
          return this.delegate.listen(e, t, n);
        }
        listenGlobal(e, t, n) {
          return this.delegate.listen(e, t, n);
        }
        setElementProperty(e, t, n) {
          this.delegate.setProperty(e, t, n);
        }
        setElementAttribute(e, t, n) {
          const [r, i] = cr(t);
          null != n
            ? this.delegate.setAttribute(e, i, n, r)
            : this.delegate.removeAttribute(e, i, r);
        }
        setBindingDebugInfo(e, t, n) {}
        setElementClass(e, t, n) {
          n ? this.delegate.addClass(e, t) : this.delegate.removeClass(e, t);
        }
        setElementStyle(e, t, n) {
          null != n ? this.delegate.setStyle(e, t, n) : this.delegate.removeStyle(e, t);
        }
        invokeElementMethod(e, t, n) {
          e[t].apply(e, n);
        }
        setText(e, t) {
          this.delegate.setValue(e, t);
        }
        animate() {
          throw new Error('Renderer.animate is no longer supported!');
        }
      }
      function Ur(e, t, n, r) {
        return new $r(e, t, n, r);
      }
      class $r {
        constructor(e, t, n, r) {
          (this._moduleType = e),
            (this._parent = t),
            (this._bootstrapComponents = n),
            (this._def = r),
            (this._destroyListeners = []),
            (this._destroyed = !1),
            (this.injector = this),
            (function (e) {
              const t = e._def,
                n = (e._providers = new Array(t.providers.length));
              for (let r = 0; r < t.providers.length; r++) {
                const i = t.providers[r];
                4096 & i.flags || (void 0 === n[r] && (n[r] = _r(e, i)));
              }
            })(this);
        }
        get(e, t = Le.THROW_IF_NOT_FOUND, n = he.Default) {
          let r = 0;
          return (
            n & he.SkipSelf ? (r |= 1) : n & he.Self && (r |= 4),
            vr(this, { token: e, tokenKey: Fn(e), flags: r }, t)
          );
        }
        get instance() {
          return this.get(this._moduleType);
        }
        get componentFactoryResolver() {
          return this.get(Ht);
        }
        destroy() {
          if (this._destroyed)
            throw new Error(
              `The ng module ${me(this.instance.constructor)} has already been destroyed.`
            );
          (this._destroyed = !0),
            (function (e, t) {
              const n = e._def,
                r = new Set();
              for (let i = 0; i < n.providers.length; i++)
                if (131072 & n.providers[i].flags) {
                  const t = e._providers[i];
                  if (t && t !== dr) {
                    const e = t.ngOnDestroy;
                    'function' != typeof e || r.has(t) || (e.apply(t), r.add(t));
                  }
                }
            })(this),
            this._destroyListeners.forEach((e) => e());
        }
        onDestroy(e) {
          this._destroyListeners.push(e);
        }
      }
      const jr = Fn(Qt),
        Hr = Fn(Xt),
        zr = Fn(Zt),
        Br = Fn(xn),
        qr = Fn(wn),
        Gr = Fn(mn),
        Wr = Fn(Le),
        Zr = Fn(Te);
      function Kr(e, t, n, r, i, o, s, l) {
        const a = [];
        if (s)
          for (let c in s) {
            const [e, t] = s[c];
            a[e] = {
              flags: 8,
              name: c,
              nonMinifiedName: t,
              ns: null,
              securityContext: null,
              suffix: null,
            };
          }
        const u = [];
        if (l) for (let c in l) u.push({ type: 1, propName: c, target: null, eventName: l[c] });
        return Jr(e, (t |= 16384), n, r, i, i, o, a, u);
      }
      function Qr(e, t, n) {
        return Jr(-1, (e |= 16), null, 0, t, t, n);
      }
      function Yr(e, t, n, r, i) {
        return Jr(-1, e, t, 0, n, r, i);
      }
      function Jr(e, t, n, r, i, o, s, l, a) {
        const { matchedQueries: u, references: c, matchedQueryIds: h } = Xn(n);
        a || (a = []), l || (l = []), (o = be(o));
        const d = er(s, me(i));
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
          matchedQueries: u,
          matchedQueryIds: h,
          references: c,
          ngContentIndex: -1,
          childCount: r,
          bindings: l,
          bindingFlags: hr(l),
          outputs: a,
          element: null,
          provider: { token: i, value: o, deps: d },
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function Xr(e, t) {
        return ri(e, t);
      }
      function ei(e, t) {
        let n = e;
        for (; n.parent && !Yn(n); ) n = n.parent;
        return ii(n.parent, Kn(n), !0, t.provider.value, t.provider.deps);
      }
      function ti(e, t) {
        const n = ii(e, t.parent, (32768 & t.flags) > 0, t.provider.value, t.provider.deps);
        if (t.outputs.length)
          for (let r = 0; r < t.outputs.length; r++) {
            const i = t.outputs[r],
              o = n[i.propName];
            if (!Nt(o))
              throw new Error(`@Output ${i.propName} not initialized in '${n.constructor.name}'.`);
            {
              const n = o.subscribe(ni(e, t.parent.nodeIndex, i.eventName));
              e.disposables[t.outputIndex + r] = n.unsubscribe.bind(n);
            }
          }
        return n;
      }
      function ni(e, t, n) {
        return (r) => Wn(e, t, n, r);
      }
      function ri(e, t) {
        const n = (8192 & t.flags) > 0,
          r = t.provider;
        switch (201347067 & t.flags) {
          case 512:
            return ii(e, t.parent, n, r.value, r.deps);
          case 1024:
            return (function (e, t, n, r, i) {
              const o = i.length;
              switch (o) {
                case 0:
                  return r();
                case 1:
                  return r(si(e, t, n, i[0]));
                case 2:
                  return r(si(e, t, n, i[0]), si(e, t, n, i[1]));
                case 3:
                  return r(si(e, t, n, i[0]), si(e, t, n, i[1]), si(e, t, n, i[2]));
                default:
                  const s = Array(o);
                  for (let r = 0; r < o; r++) s[r] = si(e, t, n, i[r]);
                  return r(...s);
              }
            })(e, t.parent, n, r.value, r.deps);
          case 2048:
            return si(e, t.parent, n, r.deps[0]);
          case 256:
            return r.value;
        }
      }
      function ii(e, t, n, r, i) {
        const o = i.length;
        switch (o) {
          case 0:
            return new r();
          case 1:
            return new r(si(e, t, n, i[0]));
          case 2:
            return new r(si(e, t, n, i[0]), si(e, t, n, i[1]));
          case 3:
            return new r(si(e, t, n, i[0]), si(e, t, n, i[1]), si(e, t, n, i[2]));
          default:
            const s = new Array(o);
            for (let r = 0; r < o; r++) s[r] = si(e, t, n, i[r]);
            return new r(...s);
        }
      }
      const oi = {};
      function si(e, t, n, r, i = Le.THROW_IF_NOT_FOUND) {
        if (8 & r.flags) return r.token;
        const o = e;
        2 & r.flags && (i = null);
        const s = r.tokenKey;
        s === Gr && (n = !(!t || !t.element.componentView)),
          t && 1 & r.flags && ((n = !1), (t = t.parent));
        let l = e;
        for (; l; ) {
          if (t)
            switch (s) {
              case jr:
                return Lr(li(l, t, n));
              case Hr:
                return li(l, t, n).renderer;
              case zr:
                return new Zt(In(l, t.nodeIndex).renderElement);
              case Br:
                return In(l, t.nodeIndex).viewContainer;
              case qr:
                if (t.element.template) return In(l, t.nodeIndex).template;
                break;
              case Gr:
                return Dr(li(l, t, n));
              case Wr:
              case Zr:
                return kr(l, t);
              default:
                const e = (n ? t.element.allProviders : t.element.publicProviders)[s];
                if (e) {
                  let t = On(l, e.nodeIndex);
                  return (
                    t || ((t = { instance: ri(l, e) }), (l.nodes[e.nodeIndex] = t)), t.instance
                  );
                }
            }
          (n = Yn(l)), (t = Kn(l)), (l = l.parent), 4 & r.flags && (l = null);
        }
        const a = o.root.injector.get(r.token, oi);
        return a !== oi || i === oi ? a : o.root.ngModule.injector.get(r.token, i);
      }
      function li(e, t, n) {
        let r;
        if (n) r = In(e, t.nodeIndex).componentView;
        else for (r = e; r.parent && !Yn(r); ) r = r.parent;
        return r;
      }
      function ai(e, t, n, r, i, o) {
        if (32768 & n.flags) {
          const t = In(e, n.parent.nodeIndex).componentView;
          2 & t.def.flags && (t.state |= 8);
        }
        if (((t.instance[n.bindings[r].name] = i), 524288 & n.flags)) {
          o = o || {};
          const t = Ot.unwrap(e.oldValues[n.bindingIndex + r]);
          o[n.bindings[r].nonMinifiedName] = new Lt(t, i, 0 != (2 & e.state));
        }
        return (e.oldValues[n.bindingIndex + r] = i), o;
      }
      function ui(e, t) {
        if (!(e.def.nodeFlags & t)) return;
        const n = e.def.nodes;
        let r = 0;
        for (let i = 0; i < n.length; i++) {
          const o = n[i];
          let s = o.parent;
          for (
            !s && o.flags & t && hi(e, i, o.flags & t, r++),
              0 == (o.childFlags & t) && (i += o.childCount);
            s && 1 & s.flags && i === s.nodeIndex + s.childCount;

          )
            s.directChildFlags & t && (r = ci(e, s, t, r)), (s = s.parent);
        }
      }
      function ci(e, t, n, r) {
        for (let i = t.nodeIndex + 1; i <= t.nodeIndex + t.childCount; i++) {
          const t = e.def.nodes[i];
          t.flags & n && hi(e, i, t.flags & n, r++), (i += t.childCount);
        }
        return r;
      }
      function hi(e, t, n, r) {
        const i = On(e, t);
        if (!i) return;
        const o = i.instance;
        o &&
          (Mn.setCurrentNode(e, t),
          1048576 & n && An(e, 512, r) && o.ngAfterContentInit(),
          2097152 & n && o.ngAfterContentChecked(),
          4194304 & n && An(e, 768, r) && o.ngAfterViewInit(),
          8388608 & n && o.ngAfterViewChecked(),
          131072 & n && o.ngOnDestroy());
      }
      const di = new Ee('SCHEDULER_TOKEN', { providedIn: 'root', factory: () => We }),
        pi = {},
        fi = (function () {
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
        gi = void 0;
      var mi = [
        'en',
        [['a', 'p'], ['AM', 'PM'], gi],
        [['AM', 'PM'], gi, gi],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        ],
        gi,
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
        gi,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini'],
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', gi, "{1} 'at' {0}", gi],
        ['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        '$',
        'US Dollar',
        {},
        function (e) {
          let t = Math.floor(Math.abs(e)),
            n = e.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === t && 0 === n ? 1 : 5;
        },
      ];
      function vi(e) {
        const t = e.toLowerCase().replace(/_/g, '-');
        let n = pi[t];
        if (n) return n;
        const r = t.split('-')[0];
        if (((n = pi[r]), n)) return n;
        if ('en' === r) return mi;
        throw new Error(`Missing locale data for the locale "${e}".`);
      }
      let _i = 'en-US';
      class bi extends P {
        constructor(e = !1) {
          super(), (this.__isAsync = e);
        }
        emit(e) {
          super.next(e);
        }
        subscribe(e, t, n) {
          let r,
            i = (e) => null,
            o = () => null;
          e && 'object' == typeof e
            ? ((r = this.__isAsync
                ? (t) => {
                    setTimeout(() => e.next(t));
                  }
                : (t) => {
                    e.next(t);
                  }),
              e.error &&
                (i = this.__isAsync
                  ? (t) => {
                      setTimeout(() => e.error(t));
                    }
                  : (t) => {
                      e.error(t);
                    }),
              e.complete &&
                (o = this.__isAsync
                  ? () => {
                      setTimeout(() => e.complete());
                    }
                  : () => {
                      e.complete();
                    }))
            : ((r = this.__isAsync
                ? (t) => {
                    setTimeout(() => e(t));
                  }
                : (t) => {
                    e(t);
                  }),
              t &&
                (i = this.__isAsync
                  ? (e) => {
                      setTimeout(() => t(e));
                    }
                  : (e) => {
                      t(e);
                    }),
              n &&
                (o = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const s = super.subscribe(r, i, o);
          return e instanceof d && e.add(s), s;
        }
      }
      function yi() {
        return this._results[At()]();
      }
      class wi {
        constructor() {
          (this.dirty = !0), (this._results = []), (this.changes = new bi()), (this.length = 0);
          const e = At(),
            t = wi.prototype;
          t[e] || (t[e] = yi);
        }
        map(e) {
          return this._results.map(e);
        }
        filter(e) {
          return this._results.filter(e);
        }
        find(e) {
          return this._results.find(e);
        }
        reduce(e, t) {
          return this._results.reduce(e, t);
        }
        forEach(e) {
          this._results.forEach(e);
        }
        some(e) {
          return this._results.some(e);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(e) {
          (this._results = (function e(t, n) {
            void 0 === n && (n = t);
            for (let r = 0; r < t.length; r++) {
              let i = t[r];
              Array.isArray(i) ? (n === t && (n = t.slice(0, r)), e(i, n)) : n !== t && n.push(i);
            }
            return n;
          })(e)),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0]);
        }
        notifyOnChanges() {
          this.changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      const Ci = new Ee('Application Initializer');
      class xi {
        constructor(e) {
          (this.appInits = e),
            (this.initialized = !1),
            (this.done = !1),
            (this.donePromise = new Promise((e, t) => {
              (this.resolve = e), (this.reject = t);
            }));
        }
        runInitializers() {
          if (this.initialized) return;
          const e = [],
            t = () => {
              (this.done = !0), this.resolve();
            };
          if (this.appInits)
            for (let n = 0; n < this.appInits.length; n++) {
              const t = this.appInits[n]();
              Mt(t) && e.push(t);
            }
          Promise.all(e)
            .then(() => {
              t();
            })
            .catch((e) => {
              this.reject(e);
            }),
            0 === e.length && t(),
            (this.initialized = !0);
        }
      }
      const Si = new Ee('AppId');
      function Ei() {
        return `${Ti()}${Ti()}${Ti()}`;
      }
      function Ti() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Pi = new Ee('Platform Initializer'),
        Ri = new Ee('Platform ID'),
        Ai = new Ee('appBootstrapListener');
      class Di {
        log(e) {
          console.log(e);
        }
        warn(e) {
          console.warn(e);
        }
      }
      const Ii = new Ee('LocaleId');
      function Oi() {
        throw new Error('Runtime compiler is not loaded');
      }
      const Vi = Oi,
        ki = Oi,
        Mi = Oi,
        Ni = Oi;
      class Li {
        constructor() {
          (this.compileModuleSync = Vi),
            (this.compileModuleAsync = ki),
            (this.compileModuleAndAllComponentsSync = Mi),
            (this.compileModuleAndAllComponentsAsync = Ni);
        }
        clearCache() {}
        clearCacheFor(e) {}
        getModuleId(e) {}
      }
      class Fi {}
      let Ui, $i;
      function ji() {
        const e = Se.wtf;
        return !(!e || ((Ui = e.trace), !Ui) || (($i = Ui.events), 0));
      }
      const Hi = ji();
      function zi(e, t) {
        return null;
      }
      const Bi = Hi
          ? function (e, t = null) {
              return $i.createScope(e, t);
            }
          : (e, t) => zi,
        qi = Hi
          ? function (e, t) {
              return Ui.leaveScope(e, t), t;
            }
          : (e, t) => t,
        Gi = (() => Promise.resolve(0))();
      function Wi(e) {
        'undefined' == typeof Zone
          ? Gi.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
      }
      class Zi {
        constructor({ enableLongStackTrace: e = !1 }) {
          if (
            ((this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new bi(!1)),
            (this.onMicrotaskEmpty = new bi(!1)),
            (this.onStable = new bi(!1)),
            (this.onError = new bi(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          var t;
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            e &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            ((t = this)._inner = t._inner.fork({
              name: 'angular',
              properties: { isAngularZone: !0 },
              onInvokeTask: (e, n, r, i, o, s) => {
                try {
                  return Ji(t), e.invokeTask(r, i, o, s);
                } finally {
                  Xi(t);
                }
              },
              onInvoke: (e, n, r, i, o, s, l) => {
                try {
                  return Ji(t), e.invoke(r, i, o, s, l);
                } finally {
                  Xi(t);
                }
              },
              onHasTask: (e, n, r, i) => {
                e.hasTask(r, i),
                  n === r &&
                    ('microTask' == i.change
                      ? ((t.hasPendingMicrotasks = i.microTask), Yi(t))
                      : 'macroTask' == i.change && (t.hasPendingMacrotasks = i.macroTask));
              },
              onHandleError: (e, n, r, i) => (
                e.handleError(r, i), t.runOutsideAngular(() => t.onError.emit(i)), !1
              ),
            }));
        }
        static isInAngularZone() {
          return !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!Zi.isInAngularZone())
            throw new Error('Expected to be in Angular Zone, but it is not!');
        }
        static assertNotInAngularZone() {
          if (Zi.isInAngularZone())
            throw new Error('Expected to not be in Angular Zone, but it is!');
        }
        run(e, t, n) {
          return this._inner.run(e, t, n);
        }
        runTask(e, t, n, r) {
          const i = this._inner,
            o = i.scheduleEventTask('NgZoneEvent: ' + r, e, Qi, Ki, Ki);
          try {
            return i.runTask(o, t, n);
          } finally {
            i.cancelTask(o);
          }
        }
        runGuarded(e, t, n) {
          return this._inner.runGuarded(e, t, n);
        }
        runOutsideAngular(e) {
          return this._outer.run(e);
        }
      }
      function Ki() {}
      const Qi = {};
      function Yi(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function Ji(e) {
        e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function Xi(e) {
        e._nesting--, Yi(e);
      }
      class eo {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new bi()),
            (this.onMicrotaskEmpty = new bi()),
            (this.onStable = new bi()),
            (this.onError = new bi());
        }
        run(e) {
          return e();
        }
        runGuarded(e) {
          return e();
        }
        runOutsideAngular(e) {
          return e();
        }
        runTask(e) {
          return e();
        }
      }
      class to {
        constructor(e) {
          (this._ngZone = e),
            (this._pendingCount = 0),
            (this._isZoneStable = !0),
            (this._didWork = !1),
            (this._callbacks = []),
            (this.taskTrackingZone = null),
            this._watchAngularEvents(),
            e.run(() => {
              this.taskTrackingZone =
                'undefined' == typeof Zone ? null : Zone.current.get('TaskTrackingZone');
            });
        }
        _watchAngularEvents() {
          this._ngZone.onUnstable.subscribe({
            next: () => {
              (this._didWork = !0), (this._isZoneStable = !1);
            },
          }),
            this._ngZone.runOutsideAngular(() => {
              this._ngZone.onStable.subscribe({
                next: () => {
                  Zi.assertNotInAngularZone(),
                    Wi(() => {
                      (this._isZoneStable = !0), this._runCallbacksIfReady();
                    });
                },
              });
            });
        }
        increasePendingRequestCount() {
          return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
        }
        decreasePendingRequestCount() {
          if (((this._pendingCount -= 1), this._pendingCount < 0))
            throw new Error('pending async requests below zero');
          return this._runCallbacksIfReady(), this._pendingCount;
        }
        isStable() {
          return (
            this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
          );
        }
        _runCallbacksIfReady() {
          if (this.isStable())
            Wi(() => {
              for (; 0 !== this._callbacks.length; ) {
                let e = this._callbacks.pop();
                clearTimeout(e.timeoutId), e.doneCb(this._didWork);
              }
              this._didWork = !1;
            });
          else {
            let e = this.getPendingTasks();
            (this._callbacks = this._callbacks.filter(
              (t) => !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1)
            )),
              (this._didWork = !0);
          }
        }
        getPendingTasks() {
          return this.taskTrackingZone
            ? this.taskTrackingZone.macroTasks.map((e) => ({
                source: e.source,
                creationLocation: e.creationLocation,
                data: e.data,
              }))
            : [];
        }
        addCallback(e, t, n) {
          let r = -1;
          t &&
            t > 0 &&
            (r = setTimeout(() => {
              (this._callbacks = this._callbacks.filter((e) => e.timeoutId !== r)),
                e(this._didWork, this.getPendingTasks());
            }, t)),
            this._callbacks.push({ doneCb: e, timeoutId: r, updateCb: n });
        }
        whenStable(e, t, n) {
          if (n && !this.taskTrackingZone)
            throw new Error(
              'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
            );
          this.addCallback(e, t, n), this._runCallbacksIfReady();
        }
        getPendingRequestCount() {
          return this._pendingCount;
        }
        findProviders(e, t, n) {
          return [];
        }
      }
      class no {
        constructor() {
          (this._applications = new Map()), oo.addToWindow(this);
        }
        registerApplication(e, t) {
          this._applications.set(e, t);
        }
        unregisterApplication(e) {
          this._applications.delete(e);
        }
        unregisterAllApplications() {
          this._applications.clear();
        }
        getTestability(e) {
          return this._applications.get(e) || null;
        }
        getAllTestabilities() {
          return Array.from(this._applications.values());
        }
        getAllRootElements() {
          return Array.from(this._applications.keys());
        }
        findTestabilityInTree(e, t = !0) {
          return oo.findTestabilityInTree(this, e, t);
        }
      }
      class ro {
        addToWindow(e) {}
        findTestabilityInTree(e, t, n) {
          return null;
        }
      }
      let io,
        oo = new ro();
      const so = new Ee('AllowMultipleToken');
      class lo {
        constructor(e, t) {
          (this.name = e), (this.token = t);
        }
      }
      function ao(e, t, n = []) {
        const r = 'Platform: ' + t,
          i = new Ee(r);
        return (t = []) => {
          let o = uo();
          if (!o || o.injector.get(so, !1))
            if (e) e(n.concat(t).concat({ provide: i, useValue: !0 }));
            else {
              const e = n.concat(t).concat({ provide: i, useValue: !0 });
              !(function (e) {
                if (io && !io.destroyed && !io.injector.get(so, !1))
                  throw new Error(
                    'There can be only one platform. Destroy the previous one to create a new one.'
                  );
                io = e.get(co);
                const t = e.get(Pi, null);
                t && t.forEach((e) => e());
              })(Le.create({ providers: e, name: r }));
            }
          return (function (e) {
            const t = uo();
            if (!t) throw new Error('No platform exists!');
            if (!t.injector.get(e, null))
              throw new Error(
                'A platform with a different configuration has been created. Please destroy it first.'
              );
            return t;
          })(i);
        };
      }
      function uo() {
        return io && !io.destroyed ? io : null;
      }
      class co {
        constructor(e) {
          (this._injector = e),
            (this._modules = []),
            (this._destroyListeners = []),
            (this._destroyed = !1);
        }
        bootstrapModuleFactory(e, t) {
          const n = (function (e) {
              let t;
              return (
                (t =
                  'noop' === e
                    ? new eo()
                    : ('zone.js' === e ? void 0 : e) || new Zi({ enableLongStackTrace: Qe() })),
                t
              );
            })(t ? t.ngZone : void 0),
            r = [{ provide: Zi, useValue: n }];
          return n.run(() => {
            const t = Le.create({ providers: r, parent: this.injector, name: e.moduleType.name }),
              i = e.create(t),
              o = i.injector.get(Et, null);
            if (!o)
              throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
            return (
              (function (e) {
                _i = e.toLowerCase().replace(/_/g, '-');
              })(i.injector.get(Ii, 'en-US')),
              i.onDestroy(() => fo(this._modules, i)),
              n.runOutsideAngular(() =>
                n.onError.subscribe({
                  next: (e) => {
                    o.handleError(e);
                  },
                })
              ),
              (function (e, t, n) {
                try {
                  const r = n();
                  return Mt(r)
                    ? r.catch((n) => {
                        throw (t.runOutsideAngular(() => e.handleError(n)), n);
                      })
                    : r;
                } catch (r) {
                  throw (t.runOutsideAngular(() => e.handleError(r)), r);
                }
              })(o, n, () => {
                const e = i.injector.get(xi);
                return (
                  e.runInitializers(), e.donePromise.then(() => (this._moduleDoBootstrap(i), i))
                );
              })
            );
          });
        }
        bootstrapModule(e, t = []) {
          const n = ho({}, t);
          return (function (e, t, n) {
            return e.get(Fi).createCompiler([t]).compileModuleAsync(n);
          })(this.injector, n, e).then((e) => this.bootstrapModuleFactory(e, n));
        }
        _moduleDoBootstrap(e) {
          const t = e.injector.get(po);
          if (e._bootstrapComponents.length > 0)
            e._bootstrapComponents.forEach((e) => t.bootstrap(e));
          else {
            if (!e.instance.ngDoBootstrap)
              throw new Error(
                `The module ${me(
                  e.instance.constructor
                )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
              );
            e.instance.ngDoBootstrap(t);
          }
          this._modules.push(e);
        }
        onDestroy(e) {
          this._destroyListeners.push(e);
        }
        get injector() {
          return this._injector;
        }
        destroy() {
          if (this._destroyed) throw new Error('The platform has already been destroyed!');
          this._modules.slice().forEach((e) => e.destroy()),
            this._destroyListeners.forEach((e) => e()),
            (this._destroyed = !0);
        }
        get destroyed() {
          return this._destroyed;
        }
      }
      function ho(e, t) {
        return Array.isArray(t) ? t.reduce(ho, e) : Object.assign({}, e, t);
      }
      let po = (() => {
        class e {
          constructor(e, t, n, r, i, o) {
            (this._zone = e),
              (this._console = t),
              (this._injector = n),
              (this._exceptionHandler = r),
              (this._componentFactoryResolver = i),
              (this._initStatus = o),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._enforceNoNewChanges = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._enforceNoNewChanges = Qe()),
              this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                },
              });
            const s = new w((e) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    e.next(this._stable), e.complete();
                  });
              }),
              l = new w((e) => {
                let t;
                this._zone.runOutsideAngular(() => {
                  t = this._zone.onStable.subscribe(() => {
                    Zi.assertNotInAngularZone(),
                      Wi(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), e.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  Zi.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        e.next(!1);
                      }));
                });
                return () => {
                  t.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = J(
              s,
              l.pipe((e) => {
                return X()(
                  ((t = oe),
                  function (e) {
                    let n;
                    n =
                      'function' == typeof t
                        ? t
                        : function () {
                            return t;
                          };
                    const r = Object.create(e, re);
                    return (r.source = e), (r.subjectFactory = n), r;
                  })(e)
                );
                var t;
              })
            );
          }
          bootstrap(e, t) {
            if (!this._initStatus.done)
              throw new Error(
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
              );
            let n;
            (n = e instanceof Ft ? e : this._componentFactoryResolver.resolveComponentFactory(e)),
              this.componentTypes.push(n.componentType);
            const r = n instanceof Bt ? null : this._injector.get(qt),
              i = n.create(Le.NULL, [], t || n.selector, r);
            i.onDestroy(() => {
              this._unloadComponent(i);
            });
            const o = i.injector.get(to, null);
            return (
              o && i.injector.get(no).registerApplication(i.location.nativeElement, o),
              this._loadComponent(i),
              Qe() &&
                this._console.log(
                  'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
                ),
              i
            );
          }
          tick() {
            if (this._runningTick) throw new Error('ApplicationRef.tick is called recursively');
            const t = e._tickScope();
            try {
              this._runningTick = !0;
              for (let e of this._views) e.detectChanges();
              if (this._enforceNoNewChanges) for (let e of this._views) e.checkNoChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(n));
            } finally {
              (this._runningTick = !1), qi(t);
            }
          }
          attachView(e) {
            const t = e;
            this._views.push(t), t.attachToAppRef(this);
          }
          detachView(e) {
            const t = e;
            fo(this._views, t), t.detachFromAppRef();
          }
          _loadComponent(e) {
            this.attachView(e.hostView),
              this.tick(),
              this.components.push(e),
              this._injector
                .get(Ai, [])
                .concat(this._bootstrapListeners)
                .forEach((t) => t(e));
          }
          _unloadComponent(e) {
            this.detachView(e.hostView), fo(this.components, e);
          }
          ngOnDestroy() {
            this._views.slice().forEach((e) => e.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (e._tickScope = Bi('ApplicationRef#tick()')), e;
      })();
      function fo(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      class go {}
      class mo {}
      const vo = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' };
      class _o {
        constructor(e, t) {
          (this._compiler = e), (this._config = t || vo);
        }
        load(e) {
          return this._compiler instanceof Li ? this.loadFactory(e) : this.loadAndCompile(e);
        }
        loadAndCompile(e) {
          let [t, r] = e.split('#');
          return (
            void 0 === r && (r = 'default'),
            n('zn8P')(t)
              .then((e) => e[r])
              .then((e) => bo(e, t, r))
              .then((e) => this._compiler.compileModuleAsync(e))
          );
        }
        loadFactory(e) {
          let [t, r] = e.split('#'),
            i = 'NgFactory';
          return (
            void 0 === r && ((r = 'default'), (i = '')),
            n('zn8P')(this._config.factoryPathPrefix + t + this._config.factoryPathSuffix)
              .then((e) => e[r + i])
              .then((e) => bo(e, t, r))
          );
        }
      }
      function bo(e, t, n) {
        if (!e) throw new Error(`Cannot find '${n}' in '${t}'`);
        return e;
      }
      class yo {
        constructor(e, t) {
          (this.name = e), (this.callback = t);
        }
      }
      class wo {
        constructor(e, t, n) {
          (this.listeners = []),
            (this.parent = null),
            (this._debugContext = n),
            (this.nativeNode = e),
            t && t instanceof Co && t.addChild(this);
        }
        get injector() {
          return this._debugContext.injector;
        }
        get componentInstance() {
          return this._debugContext.component;
        }
        get context() {
          return this._debugContext.context;
        }
        get references() {
          return this._debugContext.references;
        }
        get providerTokens() {
          return this._debugContext.providerTokens;
        }
      }
      class Co extends wo {
        constructor(e, t, n) {
          super(e, t, n),
            (this.properties = {}),
            (this.attributes = {}),
            (this.classes = {}),
            (this.styles = {}),
            (this.childNodes = []),
            (this.nativeElement = e);
        }
        addChild(e) {
          e && (this.childNodes.push(e), (e.parent = this));
        }
        removeChild(e) {
          const t = this.childNodes.indexOf(e);
          -1 !== t && ((e.parent = null), this.childNodes.splice(t, 1));
        }
        insertChildrenAfter(e, t) {
          const n = this.childNodes.indexOf(e);
          -1 !== n &&
            (this.childNodes.splice(n + 1, 0, ...t),
            t.forEach((t) => {
              t.parent && t.parent.removeChild(t), (e.parent = this);
            }));
        }
        insertBefore(e, t) {
          const n = this.childNodes.indexOf(e);
          -1 === n
            ? this.addChild(t)
            : (t.parent && t.parent.removeChild(t),
              (t.parent = this),
              this.childNodes.splice(n, 0, t));
        }
        query(e) {
          return this.queryAll(e)[0] || null;
        }
        queryAll(e) {
          const t = [];
          return (
            (function e(t, n, r) {
              t.childNodes.forEach((t) => {
                t instanceof Co && (n(t) && r.push(t), e(t, n, r));
              });
            })(this, e, t),
            t
          );
        }
        queryAllNodes(e) {
          const t = [];
          return (
            (function e(t, n, r) {
              t instanceof Co &&
                t.childNodes.forEach((t) => {
                  n(t) && r.push(t), t instanceof Co && e(t, n, r);
                });
            })(this, e, t),
            t
          );
        }
        get children() {
          return this.childNodes.filter((e) => e instanceof Co);
        }
        triggerEventHandler(e, t) {
          this.listeners.forEach((n) => {
            n.name == e && n.callback(t);
          });
        }
      }
      const xo = new Map(),
        So = function (e) {
          return xo.get(e) || null;
        };
      function Eo(e) {
        xo.set(e.nativeNode, e);
      }
      const To = ao(null, 'core', [
        { provide: Ri, useValue: 'unknown' },
        { provide: co, deps: [Le] },
        { provide: no, deps: [] },
        { provide: Di, deps: [] },
      ]);
      function Po() {
        return bn;
      }
      function Ro() {
        return yn;
      }
      function Ao(e) {
        let t = [];
        return (
          e.onStable.subscribe(() => {
            for (; t.length; ) t.pop()();
          }),
          function (e) {
            t.push(e);
          }
        );
      }
      class Do {
        constructor(e) {}
      }
      function Io(e, t, n, r, i, o) {
        e |= 1;
        const { matchedQueries: s, references: l, matchedQueryIds: a } = Xn(t);
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
          matchedQueries: s,
          matchedQueryIds: a,
          references: l,
          ngContentIndex: n,
          childCount: r,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: {
            ns: null,
            name: null,
            attrs: null,
            template: o ? rr(o) : null,
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
      function Oo(e, t, n, r, i, o, s = [], l, a, u, c, h) {
        u || (u = Nn);
        const { matchedQueries: d, references: p, matchedQueryIds: f } = Xn(n);
        let g = null,
          m = null;
        o && ([g, m] = cr(o)), (l = l || []);
        const v = new Array(l.length);
        for (let y = 0; y < l.length; y++) {
          const [e, t, n] = l[y],
            [r, i] = cr(t);
          let o = void 0,
            s = void 0;
          switch (15 & e) {
            case 4:
              s = n;
              break;
            case 1:
            case 8:
              o = n;
          }
          v[y] = { flags: e, ns: r, name: i, nonMinifiedName: i, securityContext: o, suffix: s };
        }
        a = a || [];
        const _ = new Array(a.length);
        for (let y = 0; y < a.length; y++) {
          const [e, t] = a[y];
          _[y] = { type: 0, target: e, eventName: t, propName: null };
        }
        const b = (s = s || []).map(([e, t]) => {
          const [n, r] = cr(e);
          return [n, r, t];
        });
        return (
          (h = (function (e) {
            if (e && '$$undefined' === e.id) {
              const t =
                (null != e.encapsulation && e.encapsulation !== Ge.None) ||
                e.styles.length ||
                Object.keys(e.data).length;
              e.id = t ? 'c' + jn++ : '$$empty';
            }
            return e && '$$empty' === e.id && (e = null), e || null;
          })(h)),
          c && (t |= 33554432),
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
            matchedQueries: d,
            matchedQueryIds: f,
            references: p,
            ngContentIndex: r,
            childCount: i,
            bindings: v,
            bindingFlags: hr(v),
            outputs: _,
            element: {
              ns: g,
              name: m,
              attrs: b,
              template: null,
              componentProvider: null,
              componentView: c || null,
              componentRendererType: h,
              publicProviders: null,
              allProviders: null,
              handleEvent: u || Nn,
            },
            provider: null,
            text: null,
            query: null,
            ngContent: null,
          }
        );
      }
      function Vo(e, t, n) {
        const r = n.element,
          i = e.root.selectorOrNode,
          o = e.renderer;
        let s;
        if (e.parent || !i) {
          s = r.name ? o.createElement(r.name, r.ns) : o.createComment('');
          const i = tr(e, t, n);
          i && o.appendChild(i, s);
        } else
          s = o.selectRootElement(
            i,
            !!r.componentRendererType && r.componentRendererType.encapsulation === Ge.ShadowDom
          );
        if (r.attrs)
          for (let l = 0; l < r.attrs.length; l++) {
            const [e, t, n] = r.attrs[l];
            o.setAttribute(s, t, n, e);
          }
        return s;
      }
      function ko(e, t, n, r) {
        for (let s = 0; s < n.outputs.length; s++) {
          const l = n.outputs[s],
            a = Mo(e, n.nodeIndex, ((o = l.eventName), (i = l.target) ? `${i}:${o}` : o));
          let u = l.target,
            c = e;
          'component' === l.target && ((u = null), (c = t));
          const h = c.renderer.listen(u || r, l.eventName, a);
          e.disposables[n.outputIndex + s] = h;
        }
        var i, o;
      }
      function Mo(e, t, n) {
        return (r) => Wn(e, t, n, r);
      }
      function No(e, t, n, r) {
        if (!zn(e, t, n, r)) return !1;
        const i = t.bindings[n],
          o = In(e, t.nodeIndex),
          s = o.renderElement,
          l = i.name;
        switch (15 & i.flags) {
          case 1:
            !(function (e, t, n, r, i, o) {
              const s = t.securityContext;
              let l = s ? e.root.sanitizer.sanitize(s, o) : o;
              l = null != l ? l.toString() : null;
              const a = e.renderer;
              null != o ? a.setAttribute(n, i, l, r) : a.removeAttribute(n, i, r);
            })(e, i, s, i.ns, l, r);
            break;
          case 2:
            !(function (e, t, n, r) {
              const i = e.renderer;
              r ? i.addClass(t, n) : i.removeClass(t, n);
            })(e, s, l, r);
            break;
          case 4:
            !(function (e, t, n, r, i) {
              let o = e.root.sanitizer.sanitize(_t.STYLE, i);
              if (null != o) {
                o = o.toString();
                const e = t.suffix;
                null != e && (o += e);
              } else o = null;
              const s = e.renderer;
              null != o ? s.setStyle(n, r, o) : s.removeStyle(n, r);
            })(e, i, s, l, r);
            break;
          case 8:
            !(function (e, t, n, r, i) {
              const o = t.securityContext;
              let s = o ? e.root.sanitizer.sanitize(o, i) : i;
              e.renderer.setProperty(n, r, s);
            })(33554432 & t.flags && 32 & i.flags ? o.componentView : e, i, s, l, r);
        }
        return !0;
      }
      function Lo(e) {
        const t = e.def.nodeMatchedQueries;
        for (; e.parent && Jn(e); ) {
          let n = e.parentNodeDef;
          e = e.parent;
          const r = n.nodeIndex + n.childCount;
          for (let i = 0; i <= r; i++) {
            const r = e.def.nodes[i];
            67108864 & r.flags &&
              536870912 & r.flags &&
              (r.query.filterId & t) === r.query.filterId &&
              kn(e, i).setDirty(),
              (!(1 & r.flags && i + r.childCount < n.nodeIndex) &&
                67108864 & r.childFlags &&
                536870912 & r.childFlags) ||
                (i += r.childCount);
          }
        }
        if (134217728 & e.def.nodeFlags)
          for (let n = 0; n < e.def.nodes.length; n++) {
            const t = e.def.nodes[n];
            134217728 & t.flags && 536870912 & t.flags && kn(e, n).setDirty(), (n += t.childCount);
          }
      }
      function Fo(e, t) {
        const n = kn(e, t.nodeIndex);
        if (!n.dirty) return;
        let r,
          i = void 0;
        if (67108864 & t.flags) {
          const n = t.parent.parent;
          (i = Uo(e, n.nodeIndex, n.nodeIndex + n.childCount, t.query, [])),
            (r = On(e, t.parent.nodeIndex).instance);
        } else
          134217728 & t.flags &&
            ((i = Uo(e, 0, e.def.nodes.length - 1, t.query, [])), (r = e.component));
        n.reset(i);
        const o = t.query.bindings;
        let s = !1;
        for (let l = 0; l < o.length; l++) {
          const e = o[l];
          let t;
          switch (e.bindingType) {
            case 0:
              t = n.first;
              break;
            case 1:
              (t = n), (s = !0);
          }
          r[e.propName] = t;
        }
        s && n.notifyOnChanges();
      }
      function Uo(e, t, n, r, i) {
        for (let o = t; o <= n; o++) {
          const t = e.def.nodes[o],
            n = t.matchedQueries[r.id];
          if (
            (null != n && i.push($o(e, t, n)),
            1 & t.flags &&
              t.element.template &&
              (t.element.template.nodeMatchedQueries & r.filterId) === r.filterId)
          ) {
            const n = In(e, o);
            if (
              ((t.childMatchedQueries & r.filterId) === r.filterId &&
                (Uo(e, o + 1, o + t.childCount, r, i), (o += t.childCount)),
              16777216 & t.flags)
            ) {
              const e = n.viewContainer._embeddedViews;
              for (let t = 0; t < e.length; t++) {
                const o = e[t],
                  s = Zn(o);
                s && s === n && Uo(o, 0, o.def.nodes.length - 1, r, i);
              }
            }
            const s = n.template._projectedViews;
            if (s)
              for (let e = 0; e < s.length; e++) {
                const t = s[e];
                Uo(t, 0, t.def.nodes.length - 1, r, i);
              }
          }
          (t.childMatchedQueries & r.filterId) !== r.filterId && (o += t.childCount);
        }
        return i;
      }
      function $o(e, t, n) {
        if (null != n)
          switch (n) {
            case 1:
              return In(e, t.nodeIndex).renderElement;
            case 0:
              return new Zt(In(e, t.nodeIndex).renderElement);
            case 2:
              return In(e, t.nodeIndex).template;
            case 3:
              return In(e, t.nodeIndex).viewContainer;
            case 4:
              return On(e, t.nodeIndex).instance;
          }
      }
      function jo(e, t, n) {
        const r = tr(e, t, n);
        r && sr(e, n.ngContent.index, 1, r, null, void 0);
      }
      function Ho(e, t) {
        return Bo(128, e, new Array(t + 1));
      }
      function zo(e, t) {
        const n = Object.keys(t),
          r = n.length,
          i = new Array(r);
        for (let o = 0; o < r; o++) {
          const e = n[o];
          i[t[e]] = e;
        }
        return Bo(64, e, i);
      }
      function Bo(e, t, n) {
        const r = new Array(n.length);
        for (let i = 0; i < n.length; i++) {
          const e = n[i];
          r[i] = {
            flags: 8,
            name: e,
            ns: null,
            nonMinifiedName: e,
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
      function qo(e, t, n) {
        const r = new Array(n.length - 1);
        for (let i = 1; i < n.length; i++)
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
      function Go(e, t, n) {
        let r;
        const i = e.renderer;
        r = i.createText(n.text.prefix);
        const o = tr(e, t, n);
        return o && i.appendChild(o, r), { renderText: r };
      }
      function Wo(e, t) {
        return (null != e ? e.toString() : '') + t.suffix;
      }
      function Zo(e, t, n, r) {
        let i = 0,
          o = 0,
          s = 0,
          l = 0,
          a = 0,
          u = null,
          c = null,
          h = !1,
          d = !1,
          p = null;
        for (let f = 0; f < t.length; f++) {
          const e = t[f];
          if (
            ((e.nodeIndex = f),
            (e.parent = u),
            (e.bindingIndex = i),
            (e.outputIndex = o),
            (e.renderParent = c),
            (s |= e.flags),
            (a |= e.matchedQueryIds),
            e.element)
          ) {
            const t = e.element;
            (t.publicProviders = u ? u.element.publicProviders : Object.create(null)),
              (t.allProviders = t.publicProviders),
              (h = !1),
              (d = !1),
              e.element.template && (a |= e.element.template.nodeMatchedQueries);
          }
          if (
            (Qo(u, e, t.length),
            (i += e.bindings.length),
            (o += e.outputs.length),
            !c && 3 & e.flags && (p = e),
            20224 & e.flags)
          ) {
            h ||
              ((h = !0),
              (u.element.publicProviders = Object.create(u.element.publicProviders)),
              (u.element.allProviders = u.element.publicProviders));
            const t = 0 != (32768 & e.flags);
            0 == (8192 & e.flags) || t
              ? (u.element.publicProviders[Fn(e.provider.token)] = e)
              : (d ||
                  ((d = !0), (u.element.allProviders = Object.create(u.element.publicProviders))),
                (u.element.allProviders[Fn(e.provider.token)] = e)),
              t && (u.element.componentProvider = e);
          }
          if (
            (u
              ? ((u.childFlags |= e.flags),
                (u.directChildFlags |= e.flags),
                (u.childMatchedQueries |= e.matchedQueryIds),
                e.element &&
                  e.element.template &&
                  (u.childMatchedQueries |= e.element.template.nodeMatchedQueries))
              : (l |= e.flags),
            e.childCount > 0)
          )
            (u = e), Ko(e) || (c = e);
          else
            for (; u && f === u.nodeIndex + u.childCount; ) {
              const e = u.parent;
              e &&
                ((e.childFlags |= u.childFlags), (e.childMatchedQueries |= u.childMatchedQueries)),
                (u = e),
                (c = u && Ko(u) ? u.renderParent : u);
            }
        }
        return {
          factory: null,
          nodeFlags: s,
          rootNodeFlags: l,
          nodeMatchedQueries: a,
          flags: e,
          nodes: t,
          updateDirectives: n || Nn,
          updateRenderer: r || Nn,
          handleEvent: (e, n, r, i) => t[n].element.handleEvent(e, r, i),
          bindingCount: i,
          outputCount: o,
          lastRenderRootNode: p,
        };
      }
      function Ko(e) {
        return 0 != (1 & e.flags) && null === e.element.name;
      }
      function Qo(e, t, n) {
        const r = t.element && t.element.template;
        if (r) {
          if (!r.lastRenderRootNode)
            throw new Error('Illegal State: Embedded templates without nodes are not allowed!');
          if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags)
            throw new Error(
              `Illegal State: Last root node of a template can't have embedded views, at index ${t.nodeIndex}!`
            );
        }
        if (20224 & t.flags && 0 == (1 & (e ? e.flags : 0)))
          throw new Error(
            `Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${t.nodeIndex}!`
          );
        if (t.query) {
          if (67108864 & t.flags && (!e || 0 == (16384 & e.flags)))
            throw new Error(
              `Illegal State: Content Query nodes need to be children of directives, at index ${t.nodeIndex}!`
            );
          if (134217728 & t.flags && e)
            throw new Error(
              `Illegal State: View Query nodes have to be top level nodes, at index ${t.nodeIndex}!`
            );
        }
        if (t.childCount) {
          const r = e ? e.nodeIndex + e.childCount : n - 1;
          if (t.nodeIndex <= r && t.nodeIndex + t.childCount > r)
            throw new Error(
              `Illegal State: childCount of node leads outside of parent, at index ${t.nodeIndex}!`
            );
        }
      }
      function Yo(e, t, n, r) {
        const i = es(e.root, e.renderer, e, t, n);
        return ts(i, e.component, r), ns(i), i;
      }
      function Jo(e, t, n) {
        const r = es(e, e.renderer, null, null, t);
        return ts(r, n, n), ns(r), r;
      }
      function Xo(e, t, n, r) {
        const i = t.element.componentRendererType;
        let o;
        return (
          (o = i ? e.root.rendererFactory.createRenderer(r, i) : e.root.renderer),
          es(e.root, o, e, t.element.componentProvider, n)
        );
      }
      function es(e, t, n, r, i) {
        const o = new Array(i.nodes.length),
          s = i.outputCount ? new Array(i.outputCount) : null;
        return {
          def: i,
          parent: n,
          viewContainerParent: null,
          parentNodeDef: r,
          context: null,
          component: null,
          nodes: o,
          state: 13,
          root: e,
          renderer: t,
          oldValues: new Array(i.bindingCount),
          disposables: s,
          initIndex: -1,
        };
      }
      function ts(e, t, n) {
        (e.component = t), (e.context = n);
      }
      function ns(e) {
        let t;
        Yn(e) && (t = In(e.parent, e.parentNodeDef.parent.nodeIndex).renderElement);
        const n = e.def,
          r = e.nodes;
        for (let i = 0; i < n.nodes.length; i++) {
          const o = n.nodes[i];
          let s;
          switch ((Mn.setCurrentNode(e, i), 201347067 & o.flags)) {
            case 1:
              const n = Vo(e, t, o);
              let l = void 0;
              if (33554432 & o.flags) {
                const t = rr(o.element.componentView);
                l = Mn.createComponentView(e, o, t, n);
              }
              ko(e, l, o, n),
                (s = {
                  renderElement: n,
                  componentView: l,
                  viewContainer: null,
                  template: o.element.template ? Or(e, o) : void 0,
                }),
                16777216 & o.flags && (s.viewContainer = Rr(e, o, s));
              break;
            case 2:
              s = Go(e, t, o);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              (s = r[i]), s || 4096 & o.flags || (s = { instance: Xr(e, o) });
              break;
            case 16:
              s = { instance: ei(e, o) };
              break;
            case 16384:
              (s = r[i]),
                s || (s = { instance: ti(e, o) }),
                32768 & o.flags &&
                  ts(In(e, o.parent.nodeIndex).componentView, s.instance, s.instance);
              break;
            case 32:
            case 64:
            case 128:
              s = { value: void 0 };
              break;
            case 67108864:
            case 134217728:
              s = new wi();
              break;
            case 8:
              jo(e, t, o), (s = void 0);
          }
          r[i] = s;
        }
        hs(e, cs.CreateViewNodes), gs(e, 201326592, 268435456, 0);
      }
      function rs(e) {
        ss(e),
          Mn.updateDirectives(e, 1),
          ds(e, cs.CheckNoChanges),
          Mn.updateRenderer(e, 1),
          hs(e, cs.CheckNoChanges),
          (e.state &= -97);
      }
      function is(e) {
        1 & e.state ? ((e.state &= -2), (e.state |= 2)) : (e.state &= -3),
          Rn(e, 0, 256),
          ss(e),
          Mn.updateDirectives(e, 0),
          ds(e, cs.CheckAndUpdate),
          gs(e, 67108864, 536870912, 0);
        let t = Rn(e, 256, 512);
        ui(e, 2097152 | (t ? 1048576 : 0)),
          Mn.updateRenderer(e, 0),
          hs(e, cs.CheckAndUpdate),
          gs(e, 134217728, 536870912, 0),
          (t = Rn(e, 512, 768)),
          ui(e, 8388608 | (t ? 4194304 : 0)),
          2 & e.def.flags && (e.state &= -9),
          (e.state &= -97),
          Rn(e, 768, 1024);
      }
      function os(e, t, n, r, i, o, s, l, a, u, c, h, d) {
        return 0 === n
          ? (function (e, t, n, r, i, o, s, l, a, u, c, h) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function (e, t, n, r, i, o, s, l, a, u, c, h) {
                    const d = t.bindings.length;
                    let p = !1;
                    return (
                      d > 0 && No(e, t, 0, n) && (p = !0),
                      d > 1 && No(e, t, 1, r) && (p = !0),
                      d > 2 && No(e, t, 2, i) && (p = !0),
                      d > 3 && No(e, t, 3, o) && (p = !0),
                      d > 4 && No(e, t, 4, s) && (p = !0),
                      d > 5 && No(e, t, 5, l) && (p = !0),
                      d > 6 && No(e, t, 6, a) && (p = !0),
                      d > 7 && No(e, t, 7, u) && (p = !0),
                      d > 8 && No(e, t, 8, c) && (p = !0),
                      d > 9 && No(e, t, 9, h) && (p = !0),
                      p
                    );
                  })(e, t, n, r, i, o, s, l, a, u, c, h);
                case 2:
                  return (function (e, t, n, r, i, o, s, l, a, u, c, h) {
                    let d = !1;
                    const p = t.bindings,
                      f = p.length;
                    if (
                      (f > 0 && zn(e, t, 0, n) && (d = !0),
                      f > 1 && zn(e, t, 1, r) && (d = !0),
                      f > 2 && zn(e, t, 2, i) && (d = !0),
                      f > 3 && zn(e, t, 3, o) && (d = !0),
                      f > 4 && zn(e, t, 4, s) && (d = !0),
                      f > 5 && zn(e, t, 5, l) && (d = !0),
                      f > 6 && zn(e, t, 6, a) && (d = !0),
                      f > 7 && zn(e, t, 7, u) && (d = !0),
                      f > 8 && zn(e, t, 8, c) && (d = !0),
                      f > 9 && zn(e, t, 9, h) && (d = !0),
                      d)
                    ) {
                      let d = t.text.prefix;
                      f > 0 && (d += Wo(n, p[0])),
                        f > 1 && (d += Wo(r, p[1])),
                        f > 2 && (d += Wo(i, p[2])),
                        f > 3 && (d += Wo(o, p[3])),
                        f > 4 && (d += Wo(s, p[4])),
                        f > 5 && (d += Wo(l, p[5])),
                        f > 6 && (d += Wo(a, p[6])),
                        f > 7 && (d += Wo(u, p[7])),
                        f > 8 && (d += Wo(c, p[8])),
                        f > 9 && (d += Wo(h, p[9]));
                      const g = Dn(e, t.nodeIndex).renderText;
                      e.renderer.setValue(g, d);
                    }
                    return d;
                  })(e, t, n, r, i, o, s, l, a, u, c, h);
                case 16384:
                  return (function (e, t, n, r, i, o, s, l, a, u, c, h) {
                    const d = On(e, t.nodeIndex),
                      p = d.instance;
                    let f = !1,
                      g = void 0;
                    const m = t.bindings.length;
                    return (
                      m > 0 && Hn(e, t, 0, n) && ((f = !0), (g = ai(e, d, t, 0, n, g))),
                      m > 1 && Hn(e, t, 1, r) && ((f = !0), (g = ai(e, d, t, 1, r, g))),
                      m > 2 && Hn(e, t, 2, i) && ((f = !0), (g = ai(e, d, t, 2, i, g))),
                      m > 3 && Hn(e, t, 3, o) && ((f = !0), (g = ai(e, d, t, 3, o, g))),
                      m > 4 && Hn(e, t, 4, s) && ((f = !0), (g = ai(e, d, t, 4, s, g))),
                      m > 5 && Hn(e, t, 5, l) && ((f = !0), (g = ai(e, d, t, 5, l, g))),
                      m > 6 && Hn(e, t, 6, a) && ((f = !0), (g = ai(e, d, t, 6, a, g))),
                      m > 7 && Hn(e, t, 7, u) && ((f = !0), (g = ai(e, d, t, 7, u, g))),
                      m > 8 && Hn(e, t, 8, c) && ((f = !0), (g = ai(e, d, t, 8, c, g))),
                      m > 9 && Hn(e, t, 9, h) && ((f = !0), (g = ai(e, d, t, 9, h, g))),
                      g && p.ngOnChanges(g),
                      65536 & t.flags && An(e, 256, t.nodeIndex) && p.ngOnInit(),
                      262144 & t.flags && p.ngDoCheck(),
                      f
                    );
                  })(e, t, n, r, i, o, s, l, a, u, c, h);
                case 32:
                case 64:
                case 128:
                  return (function (e, t, n, r, i, o, s, l, a, u, c, h) {
                    const d = t.bindings;
                    let p = !1;
                    const f = d.length;
                    if (
                      (f > 0 && zn(e, t, 0, n) && (p = !0),
                      f > 1 && zn(e, t, 1, r) && (p = !0),
                      f > 2 && zn(e, t, 2, i) && (p = !0),
                      f > 3 && zn(e, t, 3, o) && (p = !0),
                      f > 4 && zn(e, t, 4, s) && (p = !0),
                      f > 5 && zn(e, t, 5, l) && (p = !0),
                      f > 6 && zn(e, t, 6, a) && (p = !0),
                      f > 7 && zn(e, t, 7, u) && (p = !0),
                      f > 8 && zn(e, t, 8, c) && (p = !0),
                      f > 9 && zn(e, t, 9, h) && (p = !0),
                      p)
                    ) {
                      const p = Vn(e, t.nodeIndex);
                      let g;
                      switch (201347067 & t.flags) {
                        case 32:
                          (g = new Array(d.length)),
                            f > 0 && (g[0] = n),
                            f > 1 && (g[1] = r),
                            f > 2 && (g[2] = i),
                            f > 3 && (g[3] = o),
                            f > 4 && (g[4] = s),
                            f > 5 && (g[5] = l),
                            f > 6 && (g[6] = a),
                            f > 7 && (g[7] = u),
                            f > 8 && (g[8] = c),
                            f > 9 && (g[9] = h);
                          break;
                        case 64:
                          (g = {}),
                            f > 0 && (g[d[0].name] = n),
                            f > 1 && (g[d[1].name] = r),
                            f > 2 && (g[d[2].name] = i),
                            f > 3 && (g[d[3].name] = o),
                            f > 4 && (g[d[4].name] = s),
                            f > 5 && (g[d[5].name] = l),
                            f > 6 && (g[d[6].name] = a),
                            f > 7 && (g[d[7].name] = u),
                            f > 8 && (g[d[8].name] = c),
                            f > 9 && (g[d[9].name] = h);
                          break;
                        case 128:
                          const e = n;
                          switch (f) {
                            case 1:
                              g = e.transform(n);
                              break;
                            case 2:
                              g = e.transform(r);
                              break;
                            case 3:
                              g = e.transform(r, i);
                              break;
                            case 4:
                              g = e.transform(r, i, o);
                              break;
                            case 5:
                              g = e.transform(r, i, o, s);
                              break;
                            case 6:
                              g = e.transform(r, i, o, s, l);
                              break;
                            case 7:
                              g = e.transform(r, i, o, s, l, a);
                              break;
                            case 8:
                              g = e.transform(r, i, o, s, l, a, u);
                              break;
                            case 9:
                              g = e.transform(r, i, o, s, l, a, u, c);
                              break;
                            case 10:
                              g = e.transform(r, i, o, s, l, a, u, c, h);
                          }
                      }
                      p.value = g;
                    }
                    return p;
                  })(e, t, n, r, i, o, s, l, a, u, c, h);
                default:
                  throw 'unreachable';
              }
            })(e, t, r, i, o, s, l, a, u, c, h, d)
          : (function (e, t, n) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function (e, t, n) {
                    let r = !1;
                    for (let i = 0; i < n.length; i++) No(e, t, i, n[i]) && (r = !0);
                    return r;
                  })(e, t, n);
                case 2:
                  return (function (e, t, n) {
                    const r = t.bindings;
                    let i = !1;
                    for (let o = 0; o < n.length; o++) zn(e, t, o, n[o]) && (i = !0);
                    if (i) {
                      let i = '';
                      for (let e = 0; e < n.length; e++) i += Wo(n[e], r[e]);
                      i = t.text.prefix + i;
                      const o = Dn(e, t.nodeIndex).renderText;
                      e.renderer.setValue(o, i);
                    }
                    return i;
                  })(e, t, n);
                case 16384:
                  return (function (e, t, n) {
                    const r = On(e, t.nodeIndex),
                      i = r.instance;
                    let o = !1,
                      s = void 0;
                    for (let l = 0; l < n.length; l++)
                      Hn(e, t, l, n[l]) && ((o = !0), (s = ai(e, r, t, l, n[l], s)));
                    return (
                      s && i.ngOnChanges(s),
                      65536 & t.flags && An(e, 256, t.nodeIndex) && i.ngOnInit(),
                      262144 & t.flags && i.ngDoCheck(),
                      o
                    );
                  })(e, t, n);
                case 32:
                case 64:
                case 128:
                  return (function (e, t, n) {
                    const r = t.bindings;
                    let i = !1;
                    for (let o = 0; o < n.length; o++) zn(e, t, o, n[o]) && (i = !0);
                    if (i) {
                      const i = Vn(e, t.nodeIndex);
                      let o;
                      switch (201347067 & t.flags) {
                        case 32:
                          o = n;
                          break;
                        case 64:
                          o = {};
                          for (let i = 0; i < n.length; i++) o[r[i].name] = n[i];
                          break;
                        case 128:
                          const e = n[0],
                            t = n.slice(1);
                          o = e.transform(...t);
                      }
                      i.value = o;
                    }
                    return i;
                  })(e, t, n);
                default:
                  throw 'unreachable';
              }
            })(e, t, r);
      }
      function ss(e) {
        const t = e.def;
        if (4 & t.nodeFlags)
          for (let n = 0; n < t.nodes.length; n++) {
            const r = t.nodes[n];
            if (4 & r.flags) {
              const t = In(e, n).template._projectedViews;
              if (t)
                for (let n = 0; n < t.length; n++) {
                  const r = t[n];
                  (r.state |= 32), Gn(r, e);
                }
            } else 0 == (4 & r.childFlags) && (n += r.childCount);
          }
      }
      function ls(e, t, n, r, i, o, s, l, a, u, c, h, d) {
        return (
          0 === n
            ? (function (e, t, n, r, i, o, s, l, a, u, c, h) {
                const d = t.bindings.length;
                d > 0 && Bn(e, t, 0, n),
                  d > 1 && Bn(e, t, 1, r),
                  d > 2 && Bn(e, t, 2, i),
                  d > 3 && Bn(e, t, 3, o),
                  d > 4 && Bn(e, t, 4, s),
                  d > 5 && Bn(e, t, 5, l),
                  d > 6 && Bn(e, t, 6, a),
                  d > 7 && Bn(e, t, 7, u),
                  d > 8 && Bn(e, t, 8, c),
                  d > 9 && Bn(e, t, 9, h);
              })(e, t, r, i, o, s, l, a, u, c, h, d)
            : (function (e, t, n) {
                for (let r = 0; r < n.length; r++) Bn(e, t, r, n[r]);
              })(e, t, r),
          !1
        );
      }
      function as(e, t) {
        if (kn(e, t.nodeIndex).dirty)
          throw En(
            Mn.createDebugContext(e, t.nodeIndex),
            `Query ${t.query.id} not dirty`,
            `Query ${t.query.id} dirty`,
            0 != (1 & e.state)
          );
      }
      function us(e) {
        if (!(128 & e.state)) {
          if ((ds(e, cs.Destroy), hs(e, cs.Destroy), ui(e, 131072), e.disposables))
            for (let t = 0; t < e.disposables.length; t++) e.disposables[t]();
          !(function (e) {
            if (!(16 & e.state)) return;
            const t = Zn(e);
            if (t) {
              const n = t.template._projectedViews;
              n && (xr(n, n.indexOf(e)), Mn.dirtyParentQueries(e));
            }
          })(e),
            e.renderer.destroyNode &&
              (function (e) {
                const t = e.def.nodes.length;
                for (let n = 0; n < t; n++) {
                  const t = e.def.nodes[n];
                  1 & t.flags
                    ? e.renderer.destroyNode(In(e, n).renderElement)
                    : 2 & t.flags
                    ? e.renderer.destroyNode(Dn(e, n).renderText)
                    : (67108864 & t.flags || 134217728 & t.flags) && kn(e, n).destroy();
                }
              })(e),
            Yn(e) && e.renderer.destroy(),
            (e.state |= 128);
        }
      }
      const cs = (function () {
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
      function hs(e, t) {
        const n = e.def;
        if (33554432 & n.nodeFlags)
          for (let r = 0; r < n.nodes.length; r++) {
            const i = n.nodes[r];
            33554432 & i.flags
              ? ps(In(e, r).componentView, t)
              : 0 == (33554432 & i.childFlags) && (r += i.childCount);
          }
      }
      function ds(e, t) {
        const n = e.def;
        if (16777216 & n.nodeFlags)
          for (let r = 0; r < n.nodes.length; r++) {
            const i = n.nodes[r];
            if (16777216 & i.flags) {
              const n = In(e, r).viewContainer._embeddedViews;
              for (let e = 0; e < n.length; e++) ps(n[e], t);
            } else 0 == (16777216 & i.childFlags) && (r += i.childCount);
          }
      }
      function ps(e, t) {
        const n = e.state;
        switch (t) {
          case cs.CheckNoChanges:
            0 == (128 & n) &&
              (12 == (12 & n) ? rs(e) : 64 & n && fs(e, cs.CheckNoChangesProjectedViews));
            break;
          case cs.CheckNoChangesProjectedViews:
            0 == (128 & n) && (32 & n ? rs(e) : 64 & n && fs(e, t));
            break;
          case cs.CheckAndUpdate:
            0 == (128 & n) &&
              (12 == (12 & n) ? is(e) : 64 & n && fs(e, cs.CheckAndUpdateProjectedViews));
            break;
          case cs.CheckAndUpdateProjectedViews:
            0 == (128 & n) && (32 & n ? is(e) : 64 & n && fs(e, t));
            break;
          case cs.Destroy:
            us(e);
            break;
          case cs.CreateViewNodes:
            ns(e);
        }
      }
      function fs(e, t) {
        ds(e, t), hs(e, t);
      }
      function gs(e, t, n, r) {
        if (!(e.def.nodeFlags & t && e.def.nodeFlags & n)) return;
        const i = e.def.nodes.length;
        for (let o = 0; o < i; o++) {
          const i = e.def.nodes[o];
          if (i.flags & t && i.flags & n)
            switch ((Mn.setCurrentNode(e, i.nodeIndex), r)) {
              case 0:
                Fo(e, i);
                break;
              case 1:
                as(e, i);
            }
          (i.childFlags & t && i.childFlags & n) || (o += i.childCount);
        }
      }
      let ms = !1;
      function vs(e, t, n, r, i, o) {
        const s = i.injector.get(Yt);
        return Jo(bs(e, i, s, t, n), r, o);
      }
      function _s(e, t, n, r, i, o) {
        const s = i.injector.get(Yt),
          l = bs(e, i, new Ys(s), t, n),
          a = As(r);
        return Ks(Ms.create, Jo, null, [l, a, o]);
      }
      function bs(e, t, n, r, i) {
        const o = t.injector.get(bt),
          s = t.injector.get(Et),
          l = n.createRenderer(null, null);
        return {
          ngModule: t,
          injector: e,
          projectableNodes: r,
          selectorOrNode: i,
          sanitizer: o,
          rendererFactory: n,
          renderer: l,
          errorHandler: s,
        };
      }
      function ys(e, t, n, r) {
        const i = As(n);
        return Ks(Ms.create, Yo, null, [e, t, i, r]);
      }
      function ws(e, t, n, r) {
        return (
          (n = Es.get(t.element.componentProvider.provider.token) || As(n)),
          Ks(Ms.create, Xo, null, [e, t, n, r])
        );
      }
      function Cs(e, t, n, r) {
        return Ur(
          e,
          t,
          n,
          (function (e) {
            const { hasOverrides: t, hasDeprecatedOverrides: n } = (function (e) {
              let t = !1,
                n = !1;
              return (
                0 === xs.size ||
                  (e.providers.forEach((e) => {
                    const r = xs.get(e.token);
                    3840 & e.flags && r && ((t = !0), (n = n || r.deprecatedBehavior));
                  }),
                  e.modules.forEach((e) => {
                    Ss.forEach((r, i) => {
                      fe(i).providedIn === e && ((t = !0), (n = n || r.deprecatedBehavior));
                    });
                  })),
                { hasOverrides: t, hasDeprecatedOverrides: n }
              );
            })(e);
            return t
              ? ((function (e) {
                  for (let t = 0; t < e.providers.length; t++) {
                    const r = e.providers[t];
                    n && (r.flags |= 4096);
                    const i = xs.get(r.token);
                    i &&
                      ((r.flags = (-3841 & r.flags) | i.flags),
                      (r.deps = er(i.deps)),
                      (r.value = i.value));
                  }
                  if (Ss.size > 0) {
                    let t = new Set(e.modules);
                    Ss.forEach((r, i) => {
                      if (t.has(fe(i).providedIn)) {
                        let t = {
                          token: i,
                          flags: r.flags | (n ? 4096 : 0),
                          deps: er(r.deps),
                          value: r.value,
                          index: e.providers.length,
                        };
                        e.providers.push(t), (e.providersByKey[Fn(i)] = t);
                      }
                    });
                  }
                })((e = e.factory(() => Nn))),
                e)
              : e;
          })(r)
        );
      }
      const xs = new Map(),
        Ss = new Map(),
        Es = new Map();
      function Ts(e) {
        let t;
        xs.set(e.token, e),
          'function' == typeof e.token &&
            (t = fe(e.token)) &&
            'function' == typeof t.providedIn &&
            Ss.set(e.token, e);
      }
      function Ps(e, t) {
        const n = rr(t.viewDefFactory),
          r = rr(n.nodes[0].element.componentView);
        Es.set(e, r);
      }
      function Rs() {
        xs.clear(), Ss.clear(), Es.clear();
      }
      function As(e) {
        if (0 === xs.size) return e;
        const t = (function (e) {
          const t = [];
          let n = null;
          for (let r = 0; r < e.nodes.length; r++) {
            const i = e.nodes[r];
            1 & i.flags && (n = i),
              n && 3840 & i.flags && xs.has(i.provider.token) && (t.push(n.nodeIndex), (n = null));
          }
          return t;
        })(e);
        if (0 === t.length) return e;
        e = e.factory(() => Nn);
        for (let r = 0; r < t.length; r++) n(e, t[r]);
        return e;
        function n(e, t) {
          for (let n = t + 1; n < e.nodes.length; n++) {
            const t = e.nodes[n];
            if (1 & t.flags) return;
            if (3840 & t.flags) {
              const e = t.provider,
                n = xs.get(e.token);
              n &&
                ((t.flags = (-3841 & t.flags) | n.flags),
                (e.deps = er(n.deps)),
                (e.value = n.value));
            }
          }
        }
      }
      function Ds(e, t, n, r, i, o, s, l, a, u, c, h, d) {
        const p = e.def.nodes[t];
        return os(e, p, n, r, i, o, s, l, a, u, c, h, d), 224 & p.flags ? Vn(e, t).value : void 0;
      }
      function Is(e, t, n, r, i, o, s, l, a, u, c, h, d) {
        const p = e.def.nodes[t];
        return ls(e, p, n, r, i, o, s, l, a, u, c, h, d), 224 & p.flags ? Vn(e, t).value : void 0;
      }
      function Os(e) {
        return Ks(Ms.detectChanges, is, null, [e]);
      }
      function Vs(e) {
        return Ks(Ms.checkNoChanges, rs, null, [e]);
      }
      function ks(e) {
        return Ks(Ms.destroy, us, null, [e]);
      }
      const Ms = (function () {
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
      let Ns, Ls, Fs;
      function Us(e, t) {
        (Ls = e), (Fs = t);
      }
      function $s(e, t, n, r) {
        return Us(e, t), Ks(Ms.handleEvent, e.def.handleEvent, null, [e, t, n, r]);
      }
      function js(e, t) {
        if (128 & e.state) throw Pn(Ms[Ns]);
        return (
          Us(e, qs(e, 0)),
          e.def.updateDirectives(function (e, n, r, ...i) {
            const o = e.def.nodes[n];
            return (
              0 === t ? zs(e, o, r, i) : Bs(e, o, r, i),
              16384 & o.flags && Us(e, qs(e, n)),
              224 & o.flags ? Vn(e, o.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function Hs(e, t) {
        if (128 & e.state) throw Pn(Ms[Ns]);
        return (
          Us(e, Gs(e, 0)),
          e.def.updateRenderer(function (e, n, r, ...i) {
            const o = e.def.nodes[n];
            return (
              0 === t ? zs(e, o, r, i) : Bs(e, o, r, i),
              3 & o.flags && Us(e, Gs(e, n)),
              224 & o.flags ? Vn(e, o.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function zs(e, t, n, r) {
        if (os(e, t, n, ...r)) {
          const o = 1 === n ? r[0] : r;
          if (16384 & t.flags) {
            const n = {};
            for (let e = 0; e < t.bindings.length; e++) {
              const r = t.bindings[e],
                s = o[e];
              8 & r.flags &&
                (n[
                  ((i = r.nonMinifiedName),
                  'ng-reflect-' +
                    i.replace(/[$@]/g, '_').replace(Tt, (...e) => '-' + e[1].toLowerCase()))
                ] = Pt(s));
            }
            const r = t.parent,
              s = In(e, r.nodeIndex).renderElement;
            if (r.element.name)
              for (let t in n) {
                const r = n[t];
                null != r ? e.renderer.setAttribute(s, t, r) : e.renderer.removeAttribute(s, t);
              }
            else e.renderer.setValue(s, 'bindings=' + JSON.stringify(n, null, 2));
          }
        }
        var i;
      }
      function Bs(e, t, n, r) {
        ls(e, t, n, ...r);
      }
      function qs(e, t) {
        for (let n = t; n < e.def.nodes.length; n++) {
          const t = e.def.nodes[n];
          if (16384 & t.flags && t.bindings && t.bindings.length) return n;
        }
        return null;
      }
      function Gs(e, t) {
        for (let n = t; n < e.def.nodes.length; n++) {
          const t = e.def.nodes[n];
          if (3 & t.flags && t.bindings && t.bindings.length) return n;
        }
        return null;
      }
      class Ws {
        constructor(e, t) {
          (this.view = e),
            (this.nodeIndex = t),
            null == t && (this.nodeIndex = t = 0),
            (this.nodeDef = e.def.nodes[t]);
          let n = this.nodeDef,
            r = e;
          for (; n && 0 == (1 & n.flags); ) n = n.parent;
          if (!n) for (; !n && r; ) (n = Kn(r)), (r = r.parent);
          (this.elDef = n), (this.elView = r);
        }
        get elOrCompView() {
          return In(this.elView, this.elDef.nodeIndex).componentView || this.view;
        }
        get injector() {
          return kr(this.elView, this.elDef);
        }
        get component() {
          return this.elOrCompView.component;
        }
        get context() {
          return this.elOrCompView.context;
        }
        get providerTokens() {
          const e = [];
          if (this.elDef)
            for (
              let t = this.elDef.nodeIndex + 1;
              t <= this.elDef.nodeIndex + this.elDef.childCount;
              t++
            ) {
              const n = this.elView.def.nodes[t];
              20224 & n.flags && e.push(n.provider.token), (t += n.childCount);
            }
          return e;
        }
        get references() {
          const e = {};
          if (this.elDef) {
            Zs(this.elView, this.elDef, e);
            for (
              let t = this.elDef.nodeIndex + 1;
              t <= this.elDef.nodeIndex + this.elDef.childCount;
              t++
            ) {
              const n = this.elView.def.nodes[t];
              20224 & n.flags && Zs(this.elView, n, e), (t += n.childCount);
            }
          }
          return e;
        }
        get componentRenderElement() {
          const e = (function (e) {
            for (; e && !Yn(e); ) e = e.parent;
            return e.parent ? In(e.parent, Kn(e).nodeIndex) : null;
          })(this.elOrCompView);
          return e ? e.renderElement : void 0;
        }
        get renderNode() {
          return 2 & this.nodeDef.flags ? Qn(this.view, this.nodeDef) : Qn(this.elView, this.elDef);
        }
        logError(e, ...t) {
          let n, r;
          2 & this.nodeDef.flags
            ? ((n = this.view.def), (r = this.nodeDef.nodeIndex))
            : ((n = this.elView.def), (r = this.elDef.nodeIndex));
          const i = (function (e, t) {
            let n = -1;
            for (let r = 0; r <= t; r++) 3 & e.nodes[r].flags && n++;
            return n;
          })(n, r);
          let o = -1;
          n.factory(() => (o++, o === i ? e.error.bind(e, ...t) : Nn)),
            o < i &&
              (e.error('Illegal state: the ViewDefinitionFactory did not call the logger!'),
              e.error(...t));
        }
      }
      function Zs(e, t, n) {
        for (let r in t.references) n[r] = $o(e, t, t.references[r]);
      }
      function Ks(e, t, n, r) {
        const i = Ns,
          o = Ls,
          s = Fs;
        try {
          Ns = e;
          const l = t.apply(n, r);
          return (Ls = o), (Fs = s), (Ns = i), l;
        } catch (l) {
          if (Ct(l) || !Ls) throw l;
          throw (function (e, t) {
            return e instanceof Error || (e = new Error(e.toString())), Tn(e, t), e;
          })(l, Qs());
        }
      }
      function Qs() {
        return Ls ? new Ws(Ls, Fs) : null;
      }
      class Ys {
        constructor(e) {
          this.delegate = e;
        }
        createRenderer(e, t) {
          return new Js(this.delegate.createRenderer(e, t));
        }
        begin() {
          this.delegate.begin && this.delegate.begin();
        }
        end() {
          this.delegate.end && this.delegate.end();
        }
        whenRenderingDone() {
          return this.delegate.whenRenderingDone
            ? this.delegate.whenRenderingDone()
            : Promise.resolve(null);
        }
      }
      class Js {
        constructor(e) {
          (this.delegate = e), (this.debugContextFactory = Qs), (this.data = this.delegate.data);
        }
        createDebugContext(e) {
          return this.debugContextFactory(e);
        }
        destroyNode(e) {
          !(function (e) {
            xo.delete(e.nativeNode);
          })(So(e)),
            this.delegate.destroyNode && this.delegate.destroyNode(e);
        }
        destroy() {
          this.delegate.destroy();
        }
        createElement(e, t) {
          const n = this.delegate.createElement(e, t),
            r = this.createDebugContext(n);
          if (r) {
            const t = new Co(n, null, r);
            (t.name = e), Eo(t);
          }
          return n;
        }
        createComment(e) {
          const t = this.delegate.createComment(e),
            n = this.createDebugContext(t);
          return n && Eo(new wo(t, null, n)), t;
        }
        createText(e) {
          const t = this.delegate.createText(e),
            n = this.createDebugContext(t);
          return n && Eo(new wo(t, null, n)), t;
        }
        appendChild(e, t) {
          const n = So(e),
            r = So(t);
          n && r && n instanceof Co && n.addChild(r), this.delegate.appendChild(e, t);
        }
        insertBefore(e, t, n) {
          const r = So(e),
            i = So(t),
            o = So(n);
          r && i && r instanceof Co && r.insertBefore(o, i), this.delegate.insertBefore(e, t, n);
        }
        removeChild(e, t) {
          const n = So(e),
            r = So(t);
          n && r && n instanceof Co && n.removeChild(r), this.delegate.removeChild(e, t);
        }
        selectRootElement(e, t) {
          const n = this.delegate.selectRootElement(e, t),
            r = Qs();
          return r && Eo(new Co(n, null, r)), n;
        }
        setAttribute(e, t, n, r) {
          const i = So(e);
          i && i instanceof Co && (i.attributes[r ? r + ':' + t : t] = n),
            this.delegate.setAttribute(e, t, n, r);
        }
        removeAttribute(e, t, n) {
          const r = So(e);
          r && r instanceof Co && (r.attributes[n ? n + ':' + t : t] = null),
            this.delegate.removeAttribute(e, t, n);
        }
        addClass(e, t) {
          const n = So(e);
          n && n instanceof Co && (n.classes[t] = !0), this.delegate.addClass(e, t);
        }
        removeClass(e, t) {
          const n = So(e);
          n && n instanceof Co && (n.classes[t] = !1), this.delegate.removeClass(e, t);
        }
        setStyle(e, t, n, r) {
          const i = So(e);
          i && i instanceof Co && (i.styles[t] = n), this.delegate.setStyle(e, t, n, r);
        }
        removeStyle(e, t, n) {
          const r = So(e);
          r && r instanceof Co && (r.styles[t] = null), this.delegate.removeStyle(e, t, n);
        }
        setProperty(e, t, n) {
          const r = So(e);
          r && r instanceof Co && (r.properties[t] = n), this.delegate.setProperty(e, t, n);
        }
        listen(e, t, n) {
          if ('string' != typeof e) {
            const r = So(e);
            r && r.listeners.push(new yo(t, n));
          }
          return this.delegate.listen(e, t, n);
        }
        parentNode(e) {
          return this.delegate.parentNode(e);
        }
        nextSibling(e) {
          return this.delegate.nextSibling(e);
        }
        setValue(e, t) {
          return this.delegate.setValue(e, t);
        }
      }
      function Xs(e, t, n) {
        return new el(e, t, n);
      }
      class el extends Gt {
        constructor(e, t, n) {
          super(),
            (this.moduleType = e),
            (this._bootstrapComponents = t),
            (this._ngModuleDefFactory = n);
        }
        create(e) {
          !(function () {
            if (ms) return;
            ms = !0;
            const e = Qe()
              ? {
                  setCurrentNode: Us,
                  createRootView: _s,
                  createEmbeddedView: ys,
                  createComponentView: ws,
                  createNgModuleRef: Cs,
                  overrideProvider: Ts,
                  overrideComponentView: Ps,
                  clearOverrides: Rs,
                  checkAndUpdateView: Os,
                  checkNoChangesView: Vs,
                  destroyView: ks,
                  createDebugContext: (e, t) => new Ws(e, t),
                  handleEvent: $s,
                  updateDirectives: js,
                  updateRenderer: Hs,
                }
              : {
                  setCurrentNode: () => {},
                  createRootView: vs,
                  createEmbeddedView: Yo,
                  createComponentView: Xo,
                  createNgModuleRef: Ur,
                  overrideProvider: Nn,
                  overrideComponentView: Nn,
                  clearOverrides: Nn,
                  checkAndUpdateView: is,
                  checkNoChangesView: rs,
                  destroyView: us,
                  createDebugContext: (e, t) => new Ws(e, t),
                  handleEvent: (e, t, n, r) => e.def.handleEvent(e, t, n, r),
                  updateDirectives: (e, t) => e.def.updateDirectives(0 === t ? Ds : Is, e),
                  updateRenderer: (e, t) => e.def.updateRenderer(0 === t ? Ds : Is, e),
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
              (Mn.resolveDep = si),
              (Mn.createDebugContext = e.createDebugContext),
              (Mn.handleEvent = e.handleEvent),
              (Mn.updateDirectives = e.updateDirectives),
              (Mn.updateRenderer = e.updateRenderer),
              (Mn.dirtyParentQueries = Lo);
          })();
          const t = (function (e) {
            const t = Array.from(e.providers),
              n = Array.from(e.modules),
              r = {};
            for (const i in e.providersByKey) r[i] = e.providersByKey[i];
            return {
              factory: e.factory,
              isRoot: e.isRoot,
              providers: t,
              modules: n,
              providersByKey: r,
            };
          })(rr(this._ngModuleDefFactory));
          return Mn.createNgModuleRef(this.moduleType, e || Le.NULL, this._bootstrapComponents, t);
        }
      }
      class tl {}
      class nl {
        constructor() {
          this.title = 'comparador-de-taxas';
        }
      }
      class rl {}
      const il = new Ee('Location Initialized');
      class ol {}
      const sl = new Ee('appBaseHref');
      class ll {
        constructor(e, t) {
          (this._subject = new bi()), (this._urlChangeListeners = []), (this._platformStrategy = e);
          const n = this._platformStrategy.getBaseHref();
          (this._platformLocation = t),
            (this._baseHref = ll.stripTrailingSlash(al(n))),
            this._platformStrategy.onPopState((e) => {
              this._subject.emit({ url: this.path(!0), pop: !0, state: e.state, type: e.type });
            });
        }
        path(e = !1) {
          return this.normalize(this._platformStrategy.path(e));
        }
        getState() {
          return this._platformLocation.getState();
        }
        isCurrentPathEqualTo(e, t = '') {
          return this.path() == this.normalize(e + ll.normalizeQueryParams(t));
        }
        normalize(e) {
          return ll.stripTrailingSlash(
            (function (e, t) {
              return e && t.startsWith(e) ? t.substring(e.length) : t;
            })(this._baseHref, al(e))
          );
        }
        prepareExternalUrl(e) {
          return e && '/' !== e[0] && (e = '/' + e), this._platformStrategy.prepareExternalUrl(e);
        }
        go(e, t = '', n = null) {
          this._platformStrategy.pushState(n, '', e, t),
            this._notifyUrlChangeListeners(
              this.prepareExternalUrl(e + ll.normalizeQueryParams(t)),
              n
            );
        }
        replaceState(e, t = '', n = null) {
          this._platformStrategy.replaceState(n, '', e, t),
            this._notifyUrlChangeListeners(
              this.prepareExternalUrl(e + ll.normalizeQueryParams(t)),
              n
            );
        }
        forward() {
          this._platformStrategy.forward();
        }
        back() {
          this._platformStrategy.back();
        }
        onUrlChange(e) {
          this._urlChangeListeners.push(e),
            this.subscribe((e) => {
              this._notifyUrlChangeListeners(e.url, e.state);
            });
        }
        _notifyUrlChangeListeners(e = '', t) {
          this._urlChangeListeners.forEach((n) => n(e, t));
        }
        subscribe(e, t, n) {
          return this._subject.subscribe({ next: e, error: t, complete: n });
        }
        static normalizeQueryParams(e) {
          return e && '?' !== e[0] ? '?' + e : e;
        }
        static joinWithSlash(e, t) {
          if (0 == e.length) return t;
          if (0 == t.length) return e;
          let n = 0;
          return (
            e.endsWith('/') && n++,
            t.startsWith('/') && n++,
            2 == n ? e + t.substring(1) : 1 == n ? e + t : e + '/' + t
          );
        }
        static stripTrailingSlash(e) {
          const t = e.match(/#|\?|$/),
            n = (t && t.index) || e.length;
          return e.slice(0, n - ('/' === e[n - 1] ? 1 : 0)) + e.slice(n);
        }
      }
      function al(e) {
        return e.replace(/\/index.html$/, '');
      }
      class ul extends ol {
        constructor(e, t) {
          super(),
            (this._platformLocation = e),
            (this._baseHref = ''),
            null != t && (this._baseHref = t);
        }
        onPopState(e) {
          this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e);
        }
        getBaseHref() {
          return this._baseHref;
        }
        path(e = !1) {
          let t = this._platformLocation.hash;
          return null == t && (t = '#'), t.length > 0 ? t.substring(1) : t;
        }
        prepareExternalUrl(e) {
          const t = ll.joinWithSlash(this._baseHref, e);
          return t.length > 0 ? '#' + t : t;
        }
        pushState(e, t, n, r) {
          let i = this.prepareExternalUrl(n + ll.normalizeQueryParams(r));
          0 == i.length && (i = this._platformLocation.pathname),
            this._platformLocation.pushState(e, t, i);
        }
        replaceState(e, t, n, r) {
          let i = this.prepareExternalUrl(n + ll.normalizeQueryParams(r));
          0 == i.length && (i = this._platformLocation.pathname),
            this._platformLocation.replaceState(e, t, i);
        }
        forward() {
          this._platformLocation.forward();
        }
        back() {
          this._platformLocation.back();
        }
      }
      class cl extends ol {
        constructor(e, t) {
          if (
            (super(),
            (this._platformLocation = e),
            null == t && (t = this._platformLocation.getBaseHrefFromDOM()),
            null == t)
          )
            throw new Error(
              'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
            );
          this._baseHref = t;
        }
        onPopState(e) {
          this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e);
        }
        getBaseHref() {
          return this._baseHref;
        }
        prepareExternalUrl(e) {
          return ll.joinWithSlash(this._baseHref, e);
        }
        path(e = !1) {
          const t =
              this._platformLocation.pathname +
              ll.normalizeQueryParams(this._platformLocation.search),
            n = this._platformLocation.hash;
          return n && e ? `${t}${n}` : t;
        }
        pushState(e, t, n, r) {
          const i = this.prepareExternalUrl(n + ll.normalizeQueryParams(r));
          this._platformLocation.pushState(e, t, i);
        }
        replaceState(e, t, n, r) {
          const i = this.prepareExternalUrl(n + ll.normalizeQueryParams(r));
          this._platformLocation.replaceState(e, t, i);
        }
        forward() {
          this._platformLocation.forward();
        }
        back() {
          this._platformLocation.back();
        }
      }
      const hl = {
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
        dl = (function () {
          var e = { Decimal: 0, Percent: 1, Currency: 2, Scientific: 3 };
          return (
            (e[e.Decimal] = 'Decimal'),
            (e[e.Percent] = 'Percent'),
            (e[e.Currency] = 'Currency'),
            (e[e.Scientific] = 'Scientific'),
            e
          );
        })(),
        pl = (function () {
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
        fl = (function () {
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
      function gl(e, t) {
        const n = vi(e),
          r = n[fi.NumberSymbols][t];
        if (void 0 === r) {
          if (t === fl.CurrencyDecimal) return n[fi.NumberSymbols][fl.Decimal];
          if (t === fl.CurrencyGroup) return n[fi.NumberSymbols][fl.Group];
        }
        return r;
      }
      function ml(e, t) {
        return vi(e)[fi.NumberFormats][t];
      }
      const vl = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
      function _l(e, t, n, r, i, o, s = !1) {
        let l = '',
          a = !1;
        if (isFinite(e)) {
          let u = (function (e) {
            let t,
              n,
              r,
              i,
              o,
              s = Math.abs(e) + '',
              l = 0;
            for (
              (n = s.indexOf('.')) > -1 && (s = s.replace('.', '')),
                (r = s.search(/e/i)) > 0
                  ? (n < 0 && (n = r), (n += +s.slice(r + 1)), (s = s.substring(0, r)))
                  : n < 0 && (n = s.length),
                r = 0;
              '0' === s.charAt(r);
              r++
            );
            if (r === (o = s.length)) (t = [0]), (n = 1);
            else {
              for (o--; '0' === s.charAt(o); ) o--;
              for (n -= r, t = [], i = 0; r <= o; r++, i++) t[i] = Number(s.charAt(r));
            }
            return (
              n > 22 && ((t = t.splice(0, 21)), (l = n - 1), (n = 1)),
              { digits: t, exponent: l, integerLen: n }
            );
          })(e);
          s &&
            (u = (function (e) {
              if (0 === e.digits[0]) return e;
              const t = e.digits.length - e.integerLen;
              return (
                e.exponent
                  ? (e.exponent += 2)
                  : (0 === t ? e.digits.push(0, 0) : 1 === t && e.digits.push(0),
                    (e.integerLen += 2)),
                e
              );
            })(u));
          let c = t.minInt,
            h = t.minFrac,
            d = t.maxFrac;
          if (o) {
            const e = o.match(vl);
            if (null === e) throw new Error(o + ' is not a valid digit info');
            const t = e[1],
              n = e[3],
              r = e[5];
            null != t && (c = yl(t)),
              null != n && (h = yl(n)),
              null != r ? (d = yl(r)) : null != n && h > d && (d = h);
          }
          !(function (e, t, n) {
            if (t > n)
              throw new Error(
                `The minimum number of digits after fraction (${t}) is higher than the maximum (${n}).`
              );
            let r = e.digits,
              i = r.length - e.integerLen;
            const o = Math.min(Math.max(t, i), n);
            let s = o + e.integerLen,
              l = r[s];
            if (s > 0) {
              r.splice(Math.max(e.integerLen, s));
              for (let e = s; e < r.length; e++) r[e] = 0;
            } else {
              (i = Math.max(0, i)),
                (e.integerLen = 1),
                (r.length = Math.max(1, (s = o + 1))),
                (r[0] = 0);
              for (let e = 1; e < s; e++) r[e] = 0;
            }
            if (l >= 5)
              if (s - 1 < 0) {
                for (let t = 0; t > s; t--) r.unshift(0), e.integerLen++;
                r.unshift(1), e.integerLen++;
              } else r[s - 1]++;
            for (; i < Math.max(0, o); i++) r.push(0);
            let a = 0 !== o;
            const u = t + e.integerLen,
              c = r.reduceRight(function (e, t, n, r) {
                return (
                  (r[n] = (t += e) < 10 ? t : t - 10),
                  a && (0 === r[n] && n >= u ? r.pop() : (a = !1)),
                  t >= 10 ? 1 : 0
                );
              }, 0);
            c && (r.unshift(c), e.integerLen++);
          })(u, h, d);
          let p = u.digits,
            f = u.integerLen;
          const g = u.exponent;
          let m = [];
          for (a = p.every((e) => !e); f < c; f++) p.unshift(0);
          for (; f < 0; f++) p.unshift(0);
          f > 0 ? (m = p.splice(f, p.length)) : ((m = p), (p = [0]));
          const v = [];
          for (
            p.length >= t.lgSize && v.unshift(p.splice(-t.lgSize, p.length).join(''));
            p.length > t.gSize;

          )
            v.unshift(p.splice(-t.gSize, p.length).join(''));
          p.length && v.unshift(p.join('')),
            (l = v.join(gl(n, r))),
            m.length && (l += gl(n, i) + m.join('')),
            g && (l += gl(n, fl.Exponential) + '+' + g);
        } else l = gl(n, fl.Infinity);
        return (l = e < 0 && !a ? t.negPre + l + t.negSuf : t.posPre + l + t.posSuf), l;
      }
      function bl(e, t = '-') {
        const n = {
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
          o = r[1],
          s =
            -1 !== i.indexOf('.')
              ? i.split('.')
              : [i.substring(0, i.lastIndexOf('0') + 1), i.substring(i.lastIndexOf('0') + 1)],
          l = s[0],
          a = s[1] || '';
        n.posPre = l.substr(0, l.indexOf('#'));
        for (let c = 0; c < a.length; c++) {
          const e = a.charAt(c);
          '0' === e
            ? (n.minFrac = n.maxFrac = c + 1)
            : '#' === e
            ? (n.maxFrac = c + 1)
            : (n.posSuf += e);
        }
        const u = l.split(',');
        if (
          ((n.gSize = u[1] ? u[1].length : 0),
          (n.lgSize = u[2] || u[1] ? (u[2] || u[1]).length : 0),
          o)
        ) {
          const e = i.length - n.posPre.length - n.posSuf.length,
            t = o.indexOf('#');
          (n.negPre = o.substr(0, t).replace(/'/g, '')),
            (n.negSuf = o.substr(t + e).replace(/'/g, ''));
        } else (n.negPre = t + n.posPre), (n.negSuf = n.posSuf);
        return n;
      }
      function yl(e) {
        const t = parseInt(e);
        if (isNaN(t)) throw new Error('Invalid integer literal when parsing ' + e);
        return t;
      }
      const wl = new Ee('UseV4Plurals');
      class Cl {}
      class xl extends Cl {
        constructor(e, t) {
          super(), (this.locale = e), (this.deprecatedPluralFn = t);
        }
        getPluralCategory(e, t) {
          switch (
            this.deprecatedPluralFn
              ? this.deprecatedPluralFn(t || this.locale, e)
              : (function (e) {
                  return vi(e)[fi.PluralCase];
                })(t || this.locale)(e)
          ) {
            case pl.Zero:
              return 'zero';
            case pl.One:
              return 'one';
            case pl.Two:
              return 'two';
            case pl.Few:
              return 'few';
            case pl.Many:
              return 'many';
            default:
              return 'other';
          }
        }
      }
      class Sl {}
      class El {
        constructor(e, t, n, r) {
          (this._iterableDiffers = e),
            (this._keyValueDiffers = t),
            (this._ngEl = n),
            (this._renderer = r),
            (this._initialClasses = []);
        }
        getValue() {
          return null;
        }
        setClass(e) {
          this._removeClasses(this._initialClasses),
            (this._initialClasses = 'string' == typeof e ? e.split(/\s+/) : []),
            this._applyClasses(this._initialClasses),
            this._applyClasses(this._rawClass);
        }
        setNgClass(e) {
          this._removeClasses(this._rawClass),
            this._applyClasses(this._initialClasses),
            (this._iterableDiffer = null),
            (this._keyValueDiffer = null),
            (this._rawClass = 'string' == typeof e ? e.split(/\s+/) : e),
            this._rawClass &&
              (Vt(this._rawClass)
                ? (this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create())
                : (this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create()));
        }
        applyChanges() {
          if (this._iterableDiffer) {
            const e = this._iterableDiffer.diff(this._rawClass);
            e && this._applyIterableChanges(e);
          } else if (this._keyValueDiffer) {
            const e = this._keyValueDiffer.diff(this._rawClass);
            e && this._applyKeyValueChanges(e);
          }
        }
        _applyKeyValueChanges(e) {
          e.forEachAddedItem((e) => this._toggleClass(e.key, e.currentValue)),
            e.forEachChangedItem((e) => this._toggleClass(e.key, e.currentValue)),
            e.forEachRemovedItem((e) => {
              e.previousValue && this._toggleClass(e.key, !1);
            });
        }
        _applyIterableChanges(e) {
          e.forEachAddedItem((e) => {
            if ('string' != typeof e.item)
              throw new Error(
                'NgClass can only toggle CSS classes expressed as strings, got ' + me(e.item)
              );
            this._toggleClass(e.item, !0);
          }),
            e.forEachRemovedItem((e) => this._toggleClass(e.item, !1));
        }
        _applyClasses(e) {
          e &&
            (Array.isArray(e) || e instanceof Set
              ? e.forEach((e) => this._toggleClass(e, !0))
              : Object.keys(e).forEach((t) => this._toggleClass(t, !!e[t])));
        }
        _removeClasses(e) {
          e &&
            (Array.isArray(e) || e instanceof Set
              ? e.forEach((e) => this._toggleClass(e, !1))
              : Object.keys(e).forEach((e) => this._toggleClass(e, !1)));
        }
        _toggleClass(e, t) {
          (e = e.trim()) &&
            e.split(/\s+/g).forEach((e) => {
              t
                ? this._renderer.addClass(this._ngEl.nativeElement, e)
                : this._renderer.removeClass(this._ngEl.nativeElement, e);
            });
        }
      }
      let Tl = (() => {
        class e {
          constructor(e) {
            this._delegate = e;
          }
          getValue() {
            return this._delegate.getValue();
          }
        }
        return (e.ngDirectiveDef = void 0), e;
      })();
      class Pl extends Tl {
        constructor(e) {
          super(e);
        }
        set klass(e) {
          this._delegate.setClass(e);
        }
        set ngClass(e) {
          this._delegate.setNgClass(e);
        }
        ngDoCheck() {
          this._delegate.applyChanges();
        }
      }
      class Rl {
        constructor(e, t, n, r) {
          (this.$implicit = e), (this.ngForOf = t), (this.index = n), (this.count = r);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      class Al {
        constructor(e, t, n) {
          (this._viewContainer = e),
            (this._template = t),
            (this._differs = n),
            (this._ngForOfDirty = !0),
            (this._differ = null);
        }
        set ngForOf(e) {
          (this._ngForOf = e), (this._ngForOfDirty = !0);
        }
        set ngForTrackBy(e) {
          Qe() &&
            null != e &&
            'function' != typeof e &&
            console &&
            console.warn &&
            console.warn(
              `trackBy must be a function, but received ${JSON.stringify(
                e
              )}. See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.`
            ),
            (this._trackByFn = e);
        }
        get ngForTrackBy() {
          return this._trackByFn;
        }
        set ngForTemplate(e) {
          e && (this._template = e);
        }
        ngDoCheck() {
          if (this._ngForOfDirty) {
            this._ngForOfDirty = !1;
            const n = this._ngForOf;
            if (!this._differ && n)
              try {
                this._differ = this._differs.find(n).create(this.ngForTrackBy);
              } catch (t) {
                throw new Error(
                  `Cannot find a differ supporting object '${n}' of type '${
                    ((e = n), e.name || typeof e)
                  }'. NgFor only supports binding to Iterables such as Arrays.`
                );
              }
          }
          var e;
          if (this._differ) {
            const e = this._differ.diff(this._ngForOf);
            e && this._applyChanges(e);
          }
        }
        _applyChanges(e) {
          const t = [];
          e.forEachOperation((e, n, r) => {
            if (null == e.previousIndex) {
              const n = this._viewContainer.createEmbeddedView(
                  this._template,
                  new Rl(null, this._ngForOf, -1, -1),
                  r
                ),
                i = new Dl(e, n);
              t.push(i);
            } else if (null == r) this._viewContainer.remove(n);
            else {
              const i = this._viewContainer.get(n);
              this._viewContainer.move(i, r);
              const o = new Dl(e, i);
              t.push(o);
            }
          });
          for (let n = 0; n < t.length; n++) this._perViewChange(t[n].view, t[n].record);
          for (let n = 0, r = this._viewContainer.length; n < r; n++) {
            const e = this._viewContainer.get(n);
            (e.context.index = n), (e.context.count = r), (e.context.ngForOf = this._ngForOf);
          }
          e.forEachIdentityChange((e) => {
            this._viewContainer.get(e.currentIndex).context.$implicit = e.item;
          });
        }
        _perViewChange(e, t) {
          e.context.$implicit = t.item;
        }
        static ngTemplateContextGuard(e, t) {
          return !0;
        }
      }
      class Dl {
        constructor(e, t) {
          (this.record = e), (this.view = t);
        }
      }
      class Il {
        constructor(e, t) {
          (this._viewContainer = e),
            (this._context = new Ol()),
            (this._thenTemplateRef = null),
            (this._elseTemplateRef = null),
            (this._thenViewRef = null),
            (this._elseViewRef = null),
            (this._thenTemplateRef = t);
        }
        set ngIf(e) {
          (this._context.$implicit = this._context.ngIf = e), this._updateView();
        }
        set ngIfThen(e) {
          Vl('ngIfThen', e),
            (this._thenTemplateRef = e),
            (this._thenViewRef = null),
            this._updateView();
        }
        set ngIfElse(e) {
          Vl('ngIfElse', e),
            (this._elseTemplateRef = e),
            (this._elseViewRef = null),
            this._updateView();
        }
        _updateView() {
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
        }
      }
      class Ol {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function Vl(e, t) {
        if (t && !t.createEmbeddedView)
          throw new Error(`${e} must be a TemplateRef, but received '${me(t)}'.`);
      }
      function kl(e, t) {
        return Error(`InvalidPipeArgument: '${t}' for pipe '${me(e)}'`);
      }
      class Ml {
        constructor(e) {
          this._locale = e;
        }
        transform(e, t, n) {
          if (Ll(e)) return null;
          n = n || this._locale;
          try {
            return (function (e, t, n) {
              return _l(
                e,
                bl(ml(t, dl.Percent), gl(t, fl.MinusSign)),
                t,
                fl.Group,
                fl.Decimal,
                n,
                !0
              ).replace(new RegExp('%', 'g'), gl(t, fl.PercentSign));
            })(Fl(e), n, t);
          } catch (r) {
            throw kl(Ml, r.message);
          }
        }
      }
      class Nl {
        constructor(e) {
          this._locale = e;
        }
        transform(e, t, n = 'symbol', r, i) {
          if (Ll(e)) return null;
          (i = i || this._locale),
            'boolean' == typeof n &&
              (console &&
                console.warn &&
                console.warn(
                  'Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".'
                ),
              (n = n ? 'symbol' : 'code'));
          let o = t || 'USD';
          'code' !== n &&
            (o =
              'symbol' === n || 'symbol-narrow' === n
                ? (function (e, t, n = 'en') {
                    const r =
                        (function (e) {
                          return vi(e)[fi.Currencies];
                        })(n)[e] ||
                        hl[e] ||
                        [],
                      i = r[1];
                    return 'narrow' === t && 'string' == typeof i ? i : r[0] || e;
                  })(o, 'symbol' === n ? 'wide' : 'narrow', i)
                : n);
          try {
            return (function (e, t, n, r, i) {
              const o = bl(ml(t, dl.Currency), gl(t, fl.MinusSign));
              return (
                (o.minFrac = (function (e) {
                  let t;
                  const n = hl[e];
                  return n && (t = n[2]), 'number' == typeof t ? t : 2;
                })(r)),
                (o.maxFrac = o.minFrac),
                _l(e, o, t, fl.CurrencyGroup, fl.CurrencyDecimal, i)
                  .replace('\xa4', n)
                  .replace('\xa4', '')
              );
            })(Fl(e), i, o, t, r);
          } catch (s) {
            throw kl(Nl, s.message);
          }
        }
      }
      function Ll(e) {
        return null == e || '' === e || e != e;
      }
      function Fl(e) {
        if ('string' == typeof e && !isNaN(Number(e) - parseFloat(e))) return Number(e);
        if ('number' != typeof e) throw new Error(e + ' is not a number');
        return e;
      }
      class Ul {}
      const $l = new Ee('DocumentToken');
      let jl = (() => {
        class e {}
        return (
          (e.ngInjectableDef = pe({
            token: e,
            providedIn: 'root',
            factory: () => new Hl(Oe($l), window, Oe(Et)),
          })),
          e
        );
      })();
      class Hl {
        constructor(e, t, n) {
          (this.document = e),
            (this.window = t),
            (this.errorHandler = n),
            (this.offset = () => [0, 0]);
        }
        setOffset(e) {
          this.offset = Array.isArray(e) ? () => e : e;
        }
        getScrollPosition() {
          return this.supportScrollRestoration()
            ? [this.window.scrollX, this.window.scrollY]
            : [0, 0];
        }
        scrollToPosition(e) {
          this.supportScrollRestoration() && this.window.scrollTo(e[0], e[1]);
        }
        scrollToAnchor(e) {
          if (this.supportScrollRestoration()) {
            e =
              this.window.CSS && this.window.CSS.escape
                ? this.window.CSS.escape(e)
                : e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
            try {
              const t = this.document.querySelector('#' + e);
              if (t) return void this.scrollToElement(t);
              const n = this.document.querySelector(`[name='${e}']`);
              if (n) return void this.scrollToElement(n);
            } catch (t) {
              this.errorHandler.handleError(t);
            }
          }
        }
        setHistoryScrollRestoration(e) {
          if (this.supportScrollRestoration()) {
            const t = this.window.history;
            t && t.scrollRestoration && (t.scrollRestoration = e);
          }
        }
        scrollToElement(e) {
          const t = e.getBoundingClientRect(),
            n = t.left + this.window.pageXOffset,
            r = t.top + this.window.pageYOffset,
            i = this.offset();
          this.window.scrollTo(n - i[0], r - i[1]);
        }
        supportScrollRestoration() {
          try {
            return !!this.window && !!this.window.scrollTo;
          } catch (e) {
            return !1;
          }
        }
      }
      const zl = new w((e) => e.complete());
      function Bl(e) {
        return e
          ? (function (e) {
              return new w((t) => e.schedule(() => t.complete()));
            })(e)
          : zl;
      }
      function ql(e) {
        const t = new w((t) => {
          t.next(e), t.complete();
        });
        return (t._isScalar = !0), (t.value = e), t;
      }
      function Gl(...e) {
        let t = e[e.length - 1];
        switch ((A(t) ? e.pop() : (t = void 0), e.length)) {
          case 0:
            return Bl(t);
          case 1:
            return t ? q(e, t) : ql(e[0]);
          default:
            return q(e, t);
        }
      }
      class Wl extends P {
        constructor(e) {
          super(), (this._value = e);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(e) {
          const t = super._subscribe(e);
          return t && !t.closed && e.next(this._value), t;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new S();
          return this._value;
        }
        next(e) {
          super.next((this._value = e));
        }
      }
      function Zl() {
        return (
          Error.call(this),
          (this.message = 'no elements in sequence'),
          (this.name = 'EmptyError'),
          this
        );
      }
      Zl.prototype = Object.create(Error.prototype);
      const Kl = Zl,
        Ql = {};
      class Yl {
        constructor(e) {
          this.resultSelector = e;
        }
        call(e, t) {
          return t.subscribe(new Jl(e, this.resultSelector));
        }
      }
      class Jl extends j {
        constructor(e, t) {
          super(e),
            (this.resultSelector = t),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(e) {
          this.values.push(Ql), this.observables.push(e);
        }
        _complete() {
          const e = this.observables,
            t = e.length;
          if (0 === t) this.destination.complete();
          else {
            (this.active = t), (this.toRespond = t);
            for (let n = 0; n < t; n++) {
              const t = e[n];
              this.add($(this, t, t, n));
            }
          }
        }
        notifyComplete(e) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(e, t, n, r, i) {
          const o = this.values,
            s = this.toRespond ? (o[n] === Ql ? --this.toRespond : this.toRespond) : 0;
          (o[n] = t),
            0 === s &&
              (this.resultSelector ? this._tryResultSelector(o) : this.destination.next(o.slice()));
        }
        _tryResultSelector(e) {
          let t;
          try {
            t = this.resultSelector.apply(this, e);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(t);
        }
      }
      function Xl(e) {
        return new w((t) => {
          let n;
          try {
            n = e();
          } catch (r) {
            return void t.error(r);
          }
          return (n ? G(n) : Bl()).subscribe(t);
        });
      }
      function ea() {
        return Y(1);
      }
      function ta(e, t) {
        return function (n) {
          return n.lift(new na(e, t));
        };
      }
      class na {
        constructor(e, t) {
          (this.predicate = e), (this.thisArg = t);
        }
        call(e, t) {
          return t.subscribe(new ra(e, this.predicate, this.thisArg));
        }
      }
      class ra extends g {
        constructor(e, t, n) {
          super(e), (this.predicate = t), (this.thisArg = n), (this.count = 0);
        }
        _next(e) {
          let t;
          try {
            t = this.predicate.call(this.thisArg, e, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          t && this.destination.next(e);
        }
      }
      function ia() {
        return (
          Error.call(this),
          (this.message = 'argument out of range'),
          (this.name = 'ArgumentOutOfRangeError'),
          this
        );
      }
      ia.prototype = Object.create(Error.prototype);
      const oa = ia;
      function sa(e) {
        return function (t) {
          return 0 === e ? Bl() : t.lift(new la(e));
        };
      }
      class la {
        constructor(e) {
          if (((this.total = e), this.total < 0)) throw new oa();
        }
        call(e, t) {
          return t.subscribe(new aa(e, this.total));
        }
      }
      class aa extends g {
        constructor(e, t) {
          super(e), (this.total = t), (this.ring = new Array()), (this.count = 0);
        }
        _next(e) {
          const t = this.ring,
            n = this.total,
            r = this.count++;
          t.length < n ? t.push(e) : (t[r % n] = e);
        }
        _complete() {
          const e = this.destination;
          let t = this.count;
          if (t > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              r = this.ring;
            for (let i = 0; i < n; i++) {
              const i = t++ % n;
              e.next(r[i]);
            }
          }
          e.complete();
        }
      }
      function ua(e, t, n) {
        return function (r) {
          return r.lift(new ca(e, t, n));
        };
      }
      class ca {
        constructor(e, t, n) {
          (this.nextOrObserver = e), (this.error = t), (this.complete = n);
        }
        call(e, t) {
          return t.subscribe(new ha(e, this.nextOrObserver, this.error, this.complete));
        }
      }
      class ha extends g {
        constructor(e, t, n, i) {
          super(e),
            (this._tapNext = _),
            (this._tapError = _),
            (this._tapComplete = _),
            (this._tapError = n || _),
            (this._tapComplete = i || _),
            r(t)
              ? ((this._context = this), (this._tapNext = t))
              : t &&
                ((this._context = t),
                (this._tapNext = t.next || _),
                (this._tapError = t.error || _),
                (this._tapComplete = t.complete || _));
        }
        _next(e) {
          try {
            this._tapNext.call(this._context, e);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.next(e);
        }
        _error(e) {
          try {
            this._tapError.call(this._context, e);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.error(e);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (e) {
            return void this.destination.error(e);
          }
          return this.destination.complete();
        }
      }
      const da = (e = pa) =>
        ua({
          hasValue: !1,
          next() {
            this.hasValue = !0;
          },
          complete() {
            if (!this.hasValue) throw e();
          },
        });
      function pa() {
        return new Kl();
      }
      function fa(e = null) {
        return (t) => t.lift(new ga(e));
      }
      class ga {
        constructor(e) {
          this.defaultValue = e;
        }
        call(e, t) {
          return t.subscribe(new ma(e, this.defaultValue));
        }
      }
      class ma extends g {
        constructor(e, t) {
          super(e), (this.defaultValue = t), (this.isEmpty = !0);
        }
        _next(e) {
          (this.isEmpty = !1), this.destination.next(e);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
        }
      }
      function va(e, t) {
        const n = arguments.length >= 2;
        return (r) =>
          r.pipe(e ? ta((t, n) => e(t, n, r)) : Q, sa(1), n ? fa(t) : da(() => new Kl()));
      }
      function _a(e) {
        return function (t) {
          const n = new ba(e),
            r = t.lift(n);
          return (n.caught = r);
        };
      }
      class ba {
        constructor(e) {
          this.selector = e;
        }
        call(e, t) {
          return t.subscribe(new ya(e, this.selector, this.caught));
        }
      }
      class ya extends j {
        constructor(e, t, n) {
          super(e), (this.selector = t), (this.caught = n);
        }
        error(e) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(e, this.caught);
            } catch (t) {
              return void super.error(t);
            }
            this._unsubscribeAndRecycle();
            const r = new D(this, void 0, void 0);
            this.add(r), $(this, n, void 0, void 0, r);
          }
        }
      }
      function wa(e) {
        return (t) => (0 === e ? Bl() : t.lift(new Ca(e)));
      }
      class Ca {
        constructor(e) {
          if (((this.total = e), this.total < 0)) throw new oa();
        }
        call(e, t) {
          return t.subscribe(new xa(e, this.total));
        }
      }
      class xa extends g {
        constructor(e, t) {
          super(e), (this.total = t), (this.count = 0);
        }
        _next(e) {
          const t = this.total,
            n = ++this.count;
          n <= t &&
            (this.destination.next(e),
            n === t && (this.destination.complete(), this.unsubscribe()));
        }
      }
      function Sa(e, t) {
        const n = arguments.length >= 2;
        return (r) =>
          r.pipe(e ? ta((t, n) => e(t, n, r)) : Q, wa(1), n ? fa(t) : da(() => new Kl()));
      }
      class Ea {
        constructor(e, t, n) {
          (this.predicate = e), (this.thisArg = t), (this.source = n);
        }
        call(e, t) {
          return t.subscribe(new Ta(e, this.predicate, this.thisArg, this.source));
        }
      }
      class Ta extends g {
        constructor(e, t, n, r) {
          super(e),
            (this.predicate = t),
            (this.thisArg = n),
            (this.source = r),
            (this.index = 0),
            (this.thisArg = n || this);
        }
        notifyComplete(e) {
          this.destination.next(e), this.destination.complete();
        }
        _next(e) {
          let t = !1;
          try {
            t = this.predicate.call(this.thisArg, e, this.index++, this.source);
          } catch (n) {
            return void this.destination.error(n);
          }
          t || this.notifyComplete(!1);
        }
        _complete() {
          this.notifyComplete(!0);
        }
      }
      function Pa(e, t) {
        return 'function' == typeof t
          ? (n) => n.pipe(Pa((n, r) => G(e(n, r)).pipe(H((e, i) => t(n, e, r, i)))))
          : (t) => t.lift(new Ra(e));
      }
      class Ra {
        constructor(e) {
          this.project = e;
        }
        call(e, t) {
          return t.subscribe(new Aa(e, this.project));
        }
      }
      class Aa extends j {
        constructor(e, t) {
          super(e), (this.project = t), (this.index = 0);
        }
        _next(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(t, e, n);
        }
        _innerSub(e, t, n) {
          const r = this.innerSubscription;
          r && r.unsubscribe();
          const i = new D(this, void 0, void 0);
          this.destination.add(i), (this.innerSubscription = $(this, e, t, n, i));
        }
        _complete() {
          const { innerSubscription: e } = this;
          (e && !e.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = null;
        }
        notifyComplete(e) {
          this.destination.remove(e),
            (this.innerSubscription = null),
            this.isStopped && super._complete();
        }
        notifyNext(e, t, n, r, i) {
          this.destination.next(t);
        }
      }
      function Da(e, t) {
        let n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new Ia(e, t, n));
          }
        );
      }
      class Ia {
        constructor(e, t, n = !1) {
          (this.accumulator = e), (this.seed = t), (this.hasSeed = n);
        }
        call(e, t) {
          return t.subscribe(new Oa(e, this.accumulator, this.seed, this.hasSeed));
        }
      }
      class Oa extends g {
        constructor(e, t, n, r) {
          super(e), (this.accumulator = t), (this._seed = n), (this.hasSeed = r), (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(e) {
          (this.hasSeed = !0), (this._seed = e);
        }
        _next(e) {
          if (this.hasSeed) return this._tryNext(e);
          (this.seed = e), this.destination.next(e);
        }
        _tryNext(e) {
          const t = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, e, t);
          } catch (r) {
            this.destination.error(r);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
      function Va(e, t) {
        return W(e, t, 1);
      }
      class ka {
        constructor(e) {
          this.callback = e;
        }
        call(e, t) {
          return t.subscribe(new Ma(e, this.callback));
        }
      }
      class Ma extends g {
        constructor(e, t) {
          super(e), this.add(new d(t));
        }
      }
      let Na = null;
      function La() {
        return Na;
      }
      const Fa = {
          class: 'className',
          innerHtml: 'innerHTML',
          readonly: 'readOnly',
          tabindex: 'tabIndex',
        },
        Ua = {
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
        $a = {
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
        ja = (() => {
          if (Se.Node)
            return (
              Se.Node.prototype.contains ||
              function (e) {
                return !!(16 & this.compareDocumentPosition(e));
              }
            );
        })();
      class Ha extends class extends class {
        constructor() {
          this.resourceLoaderType = null;
        }
        get attrToPropMap() {
          return this._attrToPropMap;
        }
        set attrToPropMap(e) {
          this._attrToPropMap = e;
        }
      } {
        constructor() {
          super(), (this._animationPrefix = null), (this._transitionEnd = null);
          try {
            const e = this.createElement('div', document);
            if (null != this.getStyle(e, 'animationName')) this._animationPrefix = '';
            else {
              const t = ['Webkit', 'Moz', 'O', 'ms'];
              for (let n = 0; n < t.length; n++)
                if (null != this.getStyle(e, t[n] + 'AnimationName')) {
                  this._animationPrefix = '-' + t[n].toLowerCase() + '-';
                  break;
                }
            }
            const t = {
              WebkitTransition: 'webkitTransitionEnd',
              MozTransition: 'transitionend',
              OTransition: 'oTransitionEnd otransitionend',
              transition: 'transitionend',
            };
            Object.keys(t).forEach((n) => {
              null != this.getStyle(e, n) && (this._transitionEnd = t[n]);
            });
          } catch (e) {
            (this._animationPrefix = null), (this._transitionEnd = null);
          }
        }
        getDistributedNodes(e) {
          return e.getDistributedNodes();
        }
        resolveAndSetHref(e, t, n) {
          e.href = null == n ? t : t + '/../' + n;
        }
        supportsDOMEvents() {
          return !0;
        }
        supportsNativeShadowDOM() {
          return 'function' == typeof document.body.createShadowRoot;
        }
        getAnimationPrefix() {
          return this._animationPrefix ? this._animationPrefix : '';
        }
        getTransitionEnd() {
          return this._transitionEnd ? this._transitionEnd : '';
        }
        supportsAnimation() {
          return null != this._animationPrefix && null != this._transitionEnd;
        }
      } {
        parse(e) {
          throw new Error('parse not implemented');
        }
        static makeCurrent() {
          var e;
          (e = new Ha()), Na || (Na = e);
        }
        hasProperty(e, t) {
          return t in e;
        }
        setProperty(e, t, n) {
          e[t] = n;
        }
        getProperty(e, t) {
          return e[t];
        }
        invoke(e, t, n) {
          e[t](...n);
        }
        logError(e) {
          window.console && (console.error ? console.error(e) : console.log(e));
        }
        log(e) {
          window.console && window.console.log && window.console.log(e);
        }
        logGroup(e) {
          window.console && window.console.group && window.console.group(e);
        }
        logGroupEnd() {
          window.console && window.console.groupEnd && window.console.groupEnd();
        }
        get attrToPropMap() {
          return Fa;
        }
        contains(e, t) {
          return ja.call(e, t);
        }
        querySelector(e, t) {
          return e.querySelector(t);
        }
        querySelectorAll(e, t) {
          return e.querySelectorAll(t);
        }
        on(e, t, n) {
          e.addEventListener(t, n, !1);
        }
        onAndCancel(e, t, n) {
          return (
            e.addEventListener(t, n, !1),
            () => {
              e.removeEventListener(t, n, !1);
            }
          );
        }
        dispatchEvent(e, t) {
          e.dispatchEvent(t);
        }
        createMouseEvent(e) {
          const t = this.getDefaultDocument().createEvent('MouseEvent');
          return t.initEvent(e, !0, !0), t;
        }
        createEvent(e) {
          const t = this.getDefaultDocument().createEvent('Event');
          return t.initEvent(e, !0, !0), t;
        }
        preventDefault(e) {
          e.preventDefault(), (e.returnValue = !1);
        }
        isPrevented(e) {
          return e.defaultPrevented || (null != e.returnValue && !e.returnValue);
        }
        getInnerHTML(e) {
          return e.innerHTML;
        }
        getTemplateContent(e) {
          return 'content' in e && this.isTemplateElement(e) ? e.content : null;
        }
        getOuterHTML(e) {
          return e.outerHTML;
        }
        nodeName(e) {
          return e.nodeName;
        }
        nodeValue(e) {
          return e.nodeValue;
        }
        type(e) {
          return e.type;
        }
        content(e) {
          return this.hasProperty(e, 'content') ? e.content : e;
        }
        firstChild(e) {
          return e.firstChild;
        }
        nextSibling(e) {
          return e.nextSibling;
        }
        parentElement(e) {
          return e.parentNode;
        }
        childNodes(e) {
          return e.childNodes;
        }
        childNodesAsList(e) {
          const t = e.childNodes,
            n = new Array(t.length);
          for (let r = 0; r < t.length; r++) n[r] = t[r];
          return n;
        }
        clearNodes(e) {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
        }
        appendChild(e, t) {
          e.appendChild(t);
        }
        removeChild(e, t) {
          e.removeChild(t);
        }
        replaceChild(e, t, n) {
          e.replaceChild(t, n);
        }
        remove(e) {
          return e.parentNode && e.parentNode.removeChild(e), e;
        }
        insertBefore(e, t, n) {
          e.insertBefore(n, t);
        }
        insertAllBefore(e, t, n) {
          n.forEach((n) => e.insertBefore(n, t));
        }
        insertAfter(e, t, n) {
          e.insertBefore(n, t.nextSibling);
        }
        setInnerHTML(e, t) {
          e.innerHTML = t;
        }
        getText(e) {
          return e.textContent;
        }
        setText(e, t) {
          e.textContent = t;
        }
        getValue(e) {
          return e.value;
        }
        setValue(e, t) {
          e.value = t;
        }
        getChecked(e) {
          return e.checked;
        }
        setChecked(e, t) {
          e.checked = t;
        }
        createComment(e) {
          return this.getDefaultDocument().createComment(e);
        }
        createTemplate(e) {
          const t = this.getDefaultDocument().createElement('template');
          return (t.innerHTML = e), t;
        }
        createElement(e, t) {
          return (t = t || this.getDefaultDocument()).createElement(e);
        }
        createElementNS(e, t, n) {
          return (n = n || this.getDefaultDocument()).createElementNS(e, t);
        }
        createTextNode(e, t) {
          return (t = t || this.getDefaultDocument()).createTextNode(e);
        }
        createScriptTag(e, t, n) {
          const r = (n = n || this.getDefaultDocument()).createElement('SCRIPT');
          return r.setAttribute(e, t), r;
        }
        createStyleElement(e, t) {
          const n = (t = t || this.getDefaultDocument()).createElement('style');
          return this.appendChild(n, this.createTextNode(e, t)), n;
        }
        createShadowRoot(e) {
          return e.createShadowRoot();
        }
        getShadowRoot(e) {
          return e.shadowRoot;
        }
        getHost(e) {
          return e.host;
        }
        clone(e) {
          return e.cloneNode(!0);
        }
        getElementsByClassName(e, t) {
          return e.getElementsByClassName(t);
        }
        getElementsByTagName(e, t) {
          return e.getElementsByTagName(t);
        }
        classList(e) {
          return Array.prototype.slice.call(e.classList, 0);
        }
        addClass(e, t) {
          e.classList.add(t);
        }
        removeClass(e, t) {
          e.classList.remove(t);
        }
        hasClass(e, t) {
          return e.classList.contains(t);
        }
        setStyle(e, t, n) {
          e.style[t] = n;
        }
        removeStyle(e, t) {
          e.style[t] = '';
        }
        getStyle(e, t) {
          return e.style[t];
        }
        hasStyle(e, t, n) {
          const r = this.getStyle(e, t) || '';
          return n ? r == n : r.length > 0;
        }
        tagName(e) {
          return e.tagName;
        }
        attributeMap(e) {
          const t = new Map(),
            n = e.attributes;
          for (let r = 0; r < n.length; r++) {
            const e = n.item(r);
            t.set(e.name, e.value);
          }
          return t;
        }
        hasAttribute(e, t) {
          return e.hasAttribute(t);
        }
        hasAttributeNS(e, t, n) {
          return e.hasAttributeNS(t, n);
        }
        getAttribute(e, t) {
          return e.getAttribute(t);
        }
        getAttributeNS(e, t, n) {
          return e.getAttributeNS(t, n);
        }
        setAttribute(e, t, n) {
          e.setAttribute(t, n);
        }
        setAttributeNS(e, t, n, r) {
          e.setAttributeNS(t, n, r);
        }
        removeAttribute(e, t) {
          e.removeAttribute(t);
        }
        removeAttributeNS(e, t, n) {
          e.removeAttributeNS(t, n);
        }
        templateAwareRoot(e) {
          return this.isTemplateElement(e) ? this.content(e) : e;
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        getBoundingClientRect(e) {
          try {
            return e.getBoundingClientRect();
          } catch (t) {
            return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
          }
        }
        getTitle(e) {
          return e.title;
        }
        setTitle(e, t) {
          e.title = t || '';
        }
        elementMatches(e, t) {
          return (
            !!this.isElementNode(e) &&
            ((e.matches && e.matches(t)) ||
              (e.msMatchesSelector && e.msMatchesSelector(t)) ||
              (e.webkitMatchesSelector && e.webkitMatchesSelector(t)))
          );
        }
        isTemplateElement(e) {
          return this.isElementNode(e) && 'TEMPLATE' === e.nodeName;
        }
        isTextNode(e) {
          return e.nodeType === Node.TEXT_NODE;
        }
        isCommentNode(e) {
          return e.nodeType === Node.COMMENT_NODE;
        }
        isElementNode(e) {
          return e.nodeType === Node.ELEMENT_NODE;
        }
        hasShadowRoot(e) {
          return null != e.shadowRoot && e instanceof HTMLElement;
        }
        isShadowRoot(e) {
          return e instanceof DocumentFragment;
        }
        importIntoDoc(e) {
          return document.importNode(this.templateAwareRoot(e), !0);
        }
        adoptNode(e) {
          return document.adoptNode(e);
        }
        getHref(e) {
          return e.getAttribute('href');
        }
        getEventKey(e) {
          let t = e.key;
          if (null == t) {
            if (((t = e.keyIdentifier), null == t)) return 'Unidentified';
            t.startsWith('U+') &&
              ((t = String.fromCharCode(parseInt(t.substring(2), 16))),
              3 === e.location && $a.hasOwnProperty(t) && (t = $a[t]));
          }
          return Ua[t] || t;
        }
        getGlobalEventTarget(e, t) {
          return 'window' === t ? window : 'document' === t ? e : 'body' === t ? e.body : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(e) {
          const t =
            Ba || ((Ba = document.querySelector('base')), Ba) ? Ba.getAttribute('href') : null;
          return null == t
            ? null
            : ((n = t),
              za || (za = document.createElement('a')),
              za.setAttribute('href', n),
              '/' === za.pathname.charAt(0) ? za.pathname : '/' + za.pathname);
          var n;
        }
        resetBaseElement() {
          Ba = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        setData(e, t, n) {
          this.setAttribute(e, 'data-' + t, n);
        }
        getData(e, t) {
          return this.getAttribute(e, 'data-' + t);
        }
        getComputedStyle(e) {
          return getComputedStyle(e);
        }
        supportsWebAnimation() {
          return 'function' == typeof Element.prototype.animate;
        }
        performanceNow() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(e) {
          return (function (e, t) {
            t = encodeURIComponent(t);
            for (const n of e.split(';')) {
              const e = n.indexOf('='),
                [r, i] = -1 == e ? [n, ''] : [n.slice(0, e), n.slice(e + 1)];
              if (r.trim() === t) return decodeURIComponent(i);
            }
            return null;
          })(document.cookie, e);
        }
        setCookie(e, t) {
          document.cookie = encodeURIComponent(e) + '=' + encodeURIComponent(t);
        }
      }
      let za,
        Ba = null;
      function qa() {
        return !!window.history.pushState;
      }
      const Ga = new Ee('TRANSITION_ID'),
        Wa = [
          {
            provide: Ci,
            useFactory: function (e, t, n) {
              return () => {
                n.get(xi).donePromise.then(() => {
                  const n = La();
                  Array.prototype.slice
                    .apply(n.querySelectorAll(t, 'style[ng-transition]'))
                    .filter((t) => n.getAttribute(t, 'ng-transition') === e)
                    .forEach((e) => n.remove(e));
                });
              };
            },
            deps: [Ga, $l, Le],
            multi: !0,
          },
        ];
      class Za {
        static init() {
          var e;
          (e = new Za()), (oo = e);
        }
        addToWindow(e) {
          (Se.getAngularTestability = (t, n = !0) => {
            const r = e.findTestabilityInTree(t, n);
            if (null == r) throw new Error('Could not find testability for element.');
            return r;
          }),
            (Se.getAllAngularTestabilities = () => e.getAllTestabilities()),
            (Se.getAllAngularRootElements = () => e.getAllRootElements()),
            Se.frameworkStabilizers || (Se.frameworkStabilizers = []),
            Se.frameworkStabilizers.push((e) => {
              const t = Se.getAllAngularTestabilities();
              let n = t.length,
                r = !1;
              const i = function (t) {
                (r = r || t), n--, 0 == n && e(r);
              };
              t.forEach(function (e) {
                e.whenStable(i);
              });
            });
        }
        findTestabilityInTree(e, t, n) {
          if (null == t) return null;
          const r = e.getTestability(t);
          return null != r
            ? r
            : n
            ? La().isShadowRoot(t)
              ? this.findTestabilityInTree(e, La().getHost(t), !0)
              : this.findTestabilityInTree(e, La().parentElement(t), !0)
            : null;
        }
      }
      function Ka(e, t) {
        ('undefined' != typeof COMPILED && COMPILED) || ((Se.ng = Se.ng || {})[e] = t);
      }
      const Qa = (() => ({ ApplicationRef: po, NgZone: Zi }))();
      function Ya(e) {
        return So(e);
      }
      const Ja = new Ee('EventManagerPlugins');
      class Xa {
        constructor(e, t) {
          (this._zone = t),
            (this._eventNameToPlugin = new Map()),
            e.forEach((e) => (e.manager = this)),
            (this._plugins = e.slice().reverse());
        }
        addEventListener(e, t, n) {
          return this._findPluginFor(t).addEventListener(e, t, n);
        }
        addGlobalEventListener(e, t, n) {
          return this._findPluginFor(t).addGlobalEventListener(e, t, n);
        }
        getZone() {
          return this._zone;
        }
        _findPluginFor(e) {
          const t = this._eventNameToPlugin.get(e);
          if (t) return t;
          const n = this._plugins;
          for (let r = 0; r < n.length; r++) {
            const t = n[r];
            if (t.supports(e)) return this._eventNameToPlugin.set(e, t), t;
          }
          throw new Error('No event manager plugin found for event ' + e);
        }
      }
      class eu {
        constructor(e) {
          this._doc = e;
        }
        addGlobalEventListener(e, t, n) {
          const r = La().getGlobalEventTarget(this._doc, e);
          if (!r) throw new Error(`Unsupported event target ${r} for event ${t}`);
          return this.addEventListener(r, t, n);
        }
      }
      class tu {
        constructor() {
          this._stylesSet = new Set();
        }
        addStyles(e) {
          const t = new Set();
          e.forEach((e) => {
            this._stylesSet.has(e) || (this._stylesSet.add(e), t.add(e));
          }),
            this.onStylesAdded(t);
        }
        onStylesAdded(e) {}
        getAllStyles() {
          return Array.from(this._stylesSet);
        }
      }
      class nu extends tu {
        constructor(e) {
          super(),
            (this._doc = e),
            (this._hostNodes = new Set()),
            (this._styleNodes = new Set()),
            this._hostNodes.add(e.head);
        }
        _addStylesToHost(e, t) {
          e.forEach((e) => {
            const n = this._doc.createElement('style');
            (n.textContent = e), this._styleNodes.add(t.appendChild(n));
          });
        }
        addHost(e) {
          this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e);
        }
        removeHost(e) {
          this._hostNodes.delete(e);
        }
        onStylesAdded(e) {
          this._hostNodes.forEach((t) => this._addStylesToHost(e, t));
        }
        ngOnDestroy() {
          this._styleNodes.forEach((e) => La().remove(e));
        }
      }
      const ru = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
        },
        iu = /%COMP%/g;
      function ou(e, t, n) {
        for (let r = 0; r < t.length; r++) {
          let i = t[r];
          Array.isArray(i) ? ou(e, i, n) : ((i = i.replace(iu, e)), n.push(i));
        }
        return n;
      }
      function su(e) {
        return (t) => {
          !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
        };
      }
      class lu {
        constructor(e, t, n) {
          (this.eventManager = e),
            (this.sharedStylesHost = t),
            (this.appId = n),
            (this.rendererByCompId = new Map()),
            (this.defaultRenderer = new au(e));
        }
        createRenderer(e, t) {
          if (!e || !t) return this.defaultRenderer;
          switch (t.encapsulation) {
            case Ge.Emulated: {
              let n = this.rendererByCompId.get(t.id);
              return (
                n ||
                  ((n = new hu(this.eventManager, this.sharedStylesHost, t, this.appId)),
                  this.rendererByCompId.set(t.id, n)),
                n.applyToHost(e),
                n
              );
            }
            case Ge.Native:
            case Ge.ShadowDom:
              return new du(this.eventManager, this.sharedStylesHost, e, t);
            default:
              if (!this.rendererByCompId.has(t.id)) {
                const e = ou(t.id, t.styles, []);
                this.sharedStylesHost.addStyles(e),
                  this.rendererByCompId.set(t.id, this.defaultRenderer);
              }
              return this.defaultRenderer;
          }
        }
        begin() {}
        end() {}
      }
      class au {
        constructor(e) {
          (this.eventManager = e), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(e, t) {
          return t ? document.createElementNS(ru[t] || t, e) : document.createElement(e);
        }
        createComment(e) {
          return document.createComment(e);
        }
        createText(e) {
          return document.createTextNode(e);
        }
        appendChild(e, t) {
          e.appendChild(t);
        }
        insertBefore(e, t, n) {
          e && e.insertBefore(t, n);
        }
        removeChild(e, t) {
          e && e.removeChild(t);
        }
        selectRootElement(e, t) {
          let n = 'string' == typeof e ? document.querySelector(e) : e;
          if (!n) throw new Error(`The selector "${e}" did not match any elements`);
          return t || (n.textContent = ''), n;
        }
        parentNode(e) {
          return e.parentNode;
        }
        nextSibling(e) {
          return e.nextSibling;
        }
        setAttribute(e, t, n, r) {
          if (r) {
            t = r + ':' + t;
            const i = ru[r];
            i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n);
          } else e.setAttribute(t, n);
        }
        removeAttribute(e, t, n) {
          if (n) {
            const r = ru[n];
            r ? e.removeAttributeNS(r, t) : e.removeAttribute(`${n}:${t}`);
          } else e.removeAttribute(t);
        }
        addClass(e, t) {
          e.classList.add(t);
        }
        removeClass(e, t) {
          e.classList.remove(t);
        }
        setStyle(e, t, n, r) {
          r & Jt.DashCase
            ? e.style.setProperty(t, n, r & Jt.Important ? 'important' : '')
            : (e.style[t] = n);
        }
        removeStyle(e, t, n) {
          n & Jt.DashCase ? e.style.removeProperty(t) : (e.style[t] = '');
        }
        setProperty(e, t, n) {
          cu(t, 'property'), (e[t] = n);
        }
        setValue(e, t) {
          e.nodeValue = t;
        }
        listen(e, t, n) {
          return (
            cu(t, 'listener'),
            'string' == typeof e
              ? this.eventManager.addGlobalEventListener(e, t, su(n))
              : this.eventManager.addEventListener(e, t, su(n))
          );
        }
      }
      const uu = (() => '@'.charCodeAt(0))();
      function cu(e, t) {
        if (e.charCodeAt(0) === uu)
          throw new Error(
            `Found the synthetic ${t} ${e}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`
          );
      }
      class hu extends au {
        constructor(e, t, n, r) {
          super(e), (this.component = n);
          const i = ou(r + '-' + n.id, n.styles, []);
          t.addStyles(i),
            (this.contentAttr = '_ngcontent-%COMP%'.replace(iu, r + '-' + n.id)),
            (this.hostAttr = (function (e) {
              return '_nghost-%COMP%'.replace(iu, e);
            })(r + '-' + n.id));
        }
        applyToHost(e) {
          super.setAttribute(e, this.hostAttr, '');
        }
        createElement(e, t) {
          const n = super.createElement(e, t);
          return super.setAttribute(n, this.contentAttr, ''), n;
        }
      }
      class du extends au {
        constructor(e, t, n, r) {
          super(e),
            (this.sharedStylesHost = t),
            (this.hostEl = n),
            (this.component = r),
            (this.shadowRoot =
              r.encapsulation === Ge.ShadowDom
                ? n.attachShadow({ mode: 'open' })
                : n.createShadowRoot()),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const i = ou(r.id, r.styles, []);
          for (let o = 0; o < i.length; o++) {
            const e = document.createElement('style');
            (e.textContent = i[o]), this.shadowRoot.appendChild(e);
          }
        }
        nodeOrShadowRoot(e) {
          return e === this.hostEl ? this.shadowRoot : e;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(e, t) {
          return super.appendChild(this.nodeOrShadowRoot(e), t);
        }
        insertBefore(e, t, n) {
          return super.insertBefore(this.nodeOrShadowRoot(e), t, n);
        }
        removeChild(e, t) {
          return super.removeChild(this.nodeOrShadowRoot(e), t);
        }
        parentNode(e) {
          return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)));
        }
      }
      const pu = (() =>
          ('undefined' != typeof Zone && Zone.__symbol__) ||
          function (e) {
            return '__zone_symbol__' + e;
          })(),
        fu = pu('addEventListener'),
        gu = pu('removeEventListener'),
        mu = {},
        vu = '__zone_symbol__propagationStopped',
        _u = (() => {
          const e = 'undefined' != typeof Zone && Zone[pu('BLACK_LISTED_EVENTS')];
          if (e) {
            const t = {};
            return (
              e.forEach((e) => {
                t[e] = e;
              }),
              t
            );
          }
        })(),
        bu = function (e) {
          return !!_u && _u.hasOwnProperty(e);
        },
        yu = function (e) {
          const t = mu[e.type];
          if (!t) return;
          const n = this[t];
          if (!n) return;
          const r = [e];
          if (1 === n.length) {
            const e = n[0];
            return e.zone !== Zone.current
              ? e.zone.run(e.handler, this, r)
              : e.handler.apply(this, r);
          }
          {
            const t = n.slice();
            for (let n = 0; n < t.length && !0 !== e[vu]; n++) {
              const e = t[n];
              e.zone !== Zone.current ? e.zone.run(e.handler, this, r) : e.handler.apply(this, r);
            }
          }
        };
      class wu extends eu {
        constructor(e, t, n) {
          super(e),
            (this.ngZone = t),
            (n &&
              (function (e) {
                return 'server' === e;
              })(n)) ||
              this.patchEvent();
        }
        patchEvent() {
          if ('undefined' == typeof Event || !Event || !Event.prototype) return;
          if (Event.prototype.__zone_symbol__stopImmediatePropagation) return;
          const e = (Event.prototype.__zone_symbol__stopImmediatePropagation =
            Event.prototype.stopImmediatePropagation);
          Event.prototype.stopImmediatePropagation = function () {
            this && (this[vu] = !0), e && e.apply(this, arguments);
          };
        }
        supports(e) {
          return !0;
        }
        addEventListener(e, t, n) {
          let r = n;
          if (!e[fu] || (Zi.isInAngularZone() && !bu(t))) e.addEventListener(t, r, !1);
          else {
            let n = mu[t];
            n || (n = mu[t] = pu('ANGULAR' + t + 'FALSE'));
            let i = e[n];
            const o = i && i.length > 0;
            i || (i = e[n] = []);
            const s = bu(t) ? Zone.root : Zone.current;
            if (0 === i.length) i.push({ zone: s, handler: r });
            else {
              let e = !1;
              for (let t = 0; t < i.length; t++)
                if (i[t].handler === r) {
                  e = !0;
                  break;
                }
              e || i.push({ zone: s, handler: r });
            }
            o || e[fu](t, yu, !1);
          }
          return () => this.removeEventListener(e, t, r);
        }
        removeEventListener(e, t, n) {
          let r = e[gu];
          if (!r) return e.removeEventListener.apply(e, [t, n, !1]);
          let i = mu[t],
            o = i && e[i];
          if (!o) return e.removeEventListener.apply(e, [t, n, !1]);
          let s = !1;
          for (let l = 0; l < o.length; l++)
            if (o[l].handler === n) {
              (s = !0), o.splice(l, 1);
              break;
            }
          s
            ? 0 === o.length && r.apply(e, [t, yu, !1])
            : e.removeEventListener.apply(e, [t, n, !1]);
        }
      }
      const Cu = {
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
        xu = new Ee('HammerGestureConfig'),
        Su = new Ee('HammerLoader');
      class Eu {
        constructor() {
          (this.events = []), (this.overrides = {});
        }
        buildHammer(e) {
          const t = new Hammer(e, this.options);
          t.get('pinch').set({ enable: !0 }), t.get('rotate').set({ enable: !0 });
          for (const n in this.overrides) t.get(n).set(this.overrides[n]);
          return t;
        }
      }
      class Tu extends eu {
        constructor(e, t, n, r) {
          super(e), (this._config = t), (this.console = n), (this.loader = r);
        }
        supports(e) {
          return !(
            (!Cu.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e)) ||
            (!window.Hammer &&
              !this.loader &&
              (this.console.warn(
                `The "${e}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`
              ),
              1))
          );
        }
        addEventListener(e, t, n) {
          const r = this.manager.getZone();
          if (((t = t.toLowerCase()), !window.Hammer && this.loader)) {
            let r = !1,
              i = () => {
                r = !0;
              };
            return (
              this.loader()
                .then(() => {
                  if (!window.Hammer)
                    return (
                      this.console.warn(
                        'The custom HAMMER_LOADER completed, but Hammer.JS is not present.'
                      ),
                      void (i = () => {})
                    );
                  r || (i = this.addEventListener(e, t, n));
                })
                .catch(() => {
                  this.console.warn(
                    `The "${t}" event cannot be bound because the custom Hammer.JS loader failed.`
                  ),
                    (i = () => {});
                }),
              () => {
                i();
              }
            );
          }
          return r.runOutsideAngular(() => {
            const i = this._config.buildHammer(e),
              o = function (e) {
                r.runGuarded(function () {
                  n(e);
                });
              };
            return (
              i.on(t, o),
              () => {
                i.off(t, o), 'function' == typeof i.destroy && i.destroy();
              }
            );
          });
        }
        isCustomEvent(e) {
          return this._config.events.indexOf(e) > -1;
        }
      }
      const Pu = ['alt', 'control', 'meta', 'shift'],
        Ru = {
          alt: (e) => e.altKey,
          control: (e) => e.ctrlKey,
          meta: (e) => e.metaKey,
          shift: (e) => e.shiftKey,
        };
      class Au extends eu {
        constructor(e) {
          super(e);
        }
        supports(e) {
          return null != Au.parseEventName(e);
        }
        addEventListener(e, t, n) {
          const r = Au.parseEventName(t),
            i = Au.eventCallback(r.fullKey, n, this.manager.getZone());
          return this.manager
            .getZone()
            .runOutsideAngular(() => La().onAndCancel(e, r.domEventName, i));
        }
        static parseEventName(e) {
          const t = e.toLowerCase().split('.'),
            n = t.shift();
          if (0 === t.length || ('keydown' !== n && 'keyup' !== n)) return null;
          const r = Au._normalizeKey(t.pop());
          let i = '';
          if (
            (Pu.forEach((e) => {
              const n = t.indexOf(e);
              n > -1 && (t.splice(n, 1), (i += e + '.'));
            }),
            (i += r),
            0 != t.length || 0 === r.length)
          )
            return null;
          const o = {};
          return (o.domEventName = n), (o.fullKey = i), o;
        }
        static getEventFullKey(e) {
          let t = '',
            n = La().getEventKey(e);
          return (
            (n = n.toLowerCase()),
            ' ' === n ? (n = 'space') : '.' === n && (n = 'dot'),
            Pu.forEach((r) => {
              r != n && (0, Ru[r])(e) && (t += r + '.');
            }),
            (t += n),
            t
          );
        }
        static eventCallback(e, t, n) {
          return (r) => {
            Au.getEventFullKey(r) === e && n.runGuarded(() => t(r));
          };
        }
        static _normalizeKey(e) {
          switch (e) {
            case 'esc':
              return 'escape';
            default:
              return e;
          }
        }
      }
      class Du {}
      class Iu extends Du {
        constructor(e) {
          super(), (this._doc = e);
        }
        sanitize(e, t) {
          if (null == t) return null;
          switch (e) {
            case _t.NONE:
              return t;
            case _t.HTML:
              return t instanceof Vu
                ? t.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(t, 'HTML'),
                  (function (e, t) {
                    let n = null;
                    try {
                      mt = mt || new Ye(e);
                      let r = t ? String(t) : '';
                      n = mt.getInertBodyElement(r);
                      let i = 5,
                        o = r;
                      do {
                        if (0 === i)
                          throw new Error('Failed to sanitize html because the input is unstable');
                        i--, (r = o), (o = n.innerHTML), (n = mt.getInertBodyElement(r));
                      } while (r !== o);
                      const s = new dt(),
                        l = s.sanitizeChildren(vt(n) || n);
                      return (
                        Qe() &&
                          s.sanitizedSomething &&
                          console.warn(
                            'WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'
                          ),
                        l
                      );
                    } finally {
                      if (n) {
                        const e = vt(n) || n;
                        for (; e.firstChild; ) e.removeChild(e.firstChild);
                      }
                    }
                  })(this._doc, String(t)));
            case _t.STYLE:
              return t instanceof ku
                ? t.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(t, 'Style'),
                  (function (e) {
                    if (!(e = String(e).trim())) return '';
                    const t = e.match(wt);
                    return (t && et(t[1]) === t[1]) ||
                      (e.match(yt) &&
                        (function (e) {
                          let t = !0,
                            n = !0;
                          for (let r = 0; r < e.length; r++) {
                            const i = e.charAt(r);
                            "'" === i && n ? (t = !t) : '"' === i && t && (n = !n);
                          }
                          return t && n;
                        })(e))
                      ? e
                      : (Qe() &&
                          console.warn(
                            `WARNING: sanitizing unsafe style value ${e} (see http://g.co/ng/security#xss).`
                          ),
                        'unsafe');
                  })(t));
            case _t.SCRIPT:
              if (t instanceof Mu) return t.changingThisBreaksApplicationSecurity;
              throw (
                (this.checkNotSafeValue(t, 'Script'),
                new Error('unsafe value used in a script context'))
              );
            case _t.URL:
              return t instanceof Lu || t instanceof Nu
                ? t.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(t, 'URL'), et(String(t)));
            case _t.RESOURCE_URL:
              if (t instanceof Lu) return t.changingThisBreaksApplicationSecurity;
              throw (
                (this.checkNotSafeValue(t, 'ResourceURL'),
                new Error(
                  'unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'
                ))
              );
            default:
              throw new Error(`Unexpected SecurityContext ${e} (see http://g.co/ng/security#xss)`);
          }
        }
        checkNotSafeValue(e, t) {
          if (e instanceof Ou)
            throw new Error(
              `Required a safe ${t}, got a ${e.getTypeName()} (see http://g.co/ng/security#xss)`
            );
        }
        bypassSecurityTrustHtml(e) {
          return new Vu(e);
        }
        bypassSecurityTrustStyle(e) {
          return new ku(e);
        }
        bypassSecurityTrustScript(e) {
          return new Mu(e);
        }
        bypassSecurityTrustUrl(e) {
          return new Nu(e);
        }
        bypassSecurityTrustResourceUrl(e) {
          return new Lu(e);
        }
      }
      class Ou {
        constructor(e) {
          this.changingThisBreaksApplicationSecurity = e;
        }
        toString() {
          return (
            'SafeValue must use [property]=binding: ' +
            this.changingThisBreaksApplicationSecurity +
            ' (see http://g.co/ng/security#xss)'
          );
        }
      }
      class Vu extends Ou {
        getTypeName() {
          return 'HTML';
        }
      }
      class ku extends Ou {
        getTypeName() {
          return 'Style';
        }
      }
      class Mu extends Ou {
        getTypeName() {
          return 'Script';
        }
      }
      class Nu extends Ou {
        getTypeName() {
          return 'URL';
        }
      }
      class Lu extends Ou {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      const Fu = ao(To, 'browser', [
        { provide: Ri, useValue: 'browser' },
        {
          provide: Pi,
          useValue: function () {
            Ha.makeCurrent(), Za.init();
          },
          multi: !0,
        },
        {
          provide: rl,
          useClass: class extends rl {
            constructor(e) {
              super(), (this._doc = e), this._init();
            }
            _init() {
              (this.location = La().getLocation()), (this._history = La().getHistory());
            }
            getBaseHrefFromDOM() {
              return La().getBaseHref(this._doc);
            }
            onPopState(e) {
              La().getGlobalEventTarget(this._doc, 'window').addEventListener('popstate', e, !1);
            }
            onHashChange(e) {
              La().getGlobalEventTarget(this._doc, 'window').addEventListener('hashchange', e, !1);
            }
            get href() {
              return this.location.href;
            }
            get protocol() {
              return this.location.protocol;
            }
            get hostname() {
              return this.location.hostname;
            }
            get port() {
              return this.location.port;
            }
            get pathname() {
              return this.location.pathname;
            }
            get search() {
              return this.location.search;
            }
            get hash() {
              return this.location.hash;
            }
            set pathname(e) {
              this.location.pathname = e;
            }
            pushState(e, t, n) {
              qa() ? this._history.pushState(e, t, n) : (this.location.hash = n);
            }
            replaceState(e, t, n) {
              qa() ? this._history.replaceState(e, t, n) : (this.location.hash = n);
            }
            forward() {
              this._history.forward();
            }
            back() {
              this._history.back();
            }
            getState() {
              return this._history.state;
            }
          },
          deps: [$l],
        },
        {
          provide: $l,
          useFactory: function () {
            return document;
          },
          deps: [],
        },
      ]);
      function Uu() {
        return new Et();
      }
      class $u {
        constructor(e) {
          if (e)
            throw new Error(
              'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
            );
        }
        static withServerTransition(e) {
          return {
            ngModule: $u,
            providers: [{ provide: Si, useValue: e.appId }, { provide: Ga, useExisting: Si }, Wa],
          };
        }
      }
      'undefined' != typeof window && window;
      class ju {
        constructor(e, t) {
          (this.id = e), (this.url = t);
        }
      }
      class Hu extends ju {
        constructor(e, t, n = 'imperative', r = null) {
          super(e, t), (this.navigationTrigger = n), (this.restoredState = r);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class zu extends ju {
        constructor(e, t, n) {
          super(e, t), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class Bu extends ju {
        constructor(e, t, n) {
          super(e, t), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class qu extends ju {
        constructor(e, t, n) {
          super(e, t), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class Gu extends ju {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Wu extends ju {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Zu extends ju {
        constructor(e, t, n, r, i) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r), (this.shouldActivate = i);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Ku extends ju {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Qu extends ju {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Yu {
        constructor(e) {
          this.route = e;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class Ju {
        constructor(e) {
          this.route = e;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Xu {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class ec {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class tc {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class nc {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class rc {
        constructor(e, t, n) {
          (this.routerEvent = e), (this.position = t), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class ic {}
      class oc {
        constructor(e) {
          this.params = e || {};
        }
        has(e) {
          return this.params.hasOwnProperty(e);
        }
        get(e) {
          if (this.has(e)) {
            const t = this.params[e];
            return Array.isArray(t) ? t[0] : t;
          }
          return null;
        }
        getAll(e) {
          if (this.has(e)) {
            const t = this.params[e];
            return Array.isArray(t) ? t : [t];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function sc(e) {
        return new oc(e);
      }
      function lc(e) {
        const t = Error('NavigationCancelingError: ' + e);
        return (t.ngNavigationCancelingError = !0), t;
      }
      function ac(e, t, n) {
        const r = n.path.split('/');
        if (r.length > e.length) return null;
        if ('full' === n.pathMatch && (t.hasChildren() || r.length < e.length)) return null;
        const i = {};
        for (let o = 0; o < r.length; o++) {
          const t = r[o],
            n = e[o];
          if (t.startsWith(':')) i[t.substring(1)] = n;
          else if (t !== n.path) return null;
        }
        return { consumed: e.slice(0, r.length), posParams: i };
      }
      class uc {
        constructor(e, t) {
          (this.routes = e), (this.module = t);
        }
      }
      function cc(e, t = '') {
        for (let n = 0; n < e.length; n++) {
          const r = e[n];
          hc(r, dc(t, r));
        }
      }
      function hc(e, t) {
        if (!e)
          throw new Error(
            `\n      Invalid configuration of route '${t}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
          );
        if (Array.isArray(e))
          throw new Error(`Invalid configuration of route '${t}': Array cannot be specified`);
        if (!e.component && !e.children && !e.loadChildren && e.outlet && 'primary' !== e.outlet)
          throw new Error(
            `Invalid configuration of route '${t}': a componentless route without children or loadChildren cannot have a named outlet set`
          );
        if (e.redirectTo && e.children)
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and children cannot be used together`
          );
        if (e.redirectTo && e.loadChildren)
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and loadChildren cannot be used together`
          );
        if (e.children && e.loadChildren)
          throw new Error(
            `Invalid configuration of route '${t}': children and loadChildren cannot be used together`
          );
        if (e.redirectTo && e.component)
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and component cannot be used together`
          );
        if (e.path && e.matcher)
          throw new Error(
            `Invalid configuration of route '${t}': path and matcher cannot be used together`
          );
        if (void 0 === e.redirectTo && !e.component && !e.children && !e.loadChildren)
          throw new Error(
            `Invalid configuration of route '${t}'. One of the following must be provided: component, redirectTo, children or loadChildren`
          );
        if (void 0 === e.path && void 0 === e.matcher)
          throw new Error(
            `Invalid configuration of route '${t}': routes must have either a path or a matcher specified`
          );
        if ('string' == typeof e.path && '/' === e.path.charAt(0))
          throw new Error(`Invalid configuration of route '${t}': path cannot start with a slash`);
        if ('' === e.path && void 0 !== e.redirectTo && void 0 === e.pathMatch)
          throw new Error(
            `Invalid configuration of route '{path: "${t}", redirectTo: "${e.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
          );
        if (void 0 !== e.pathMatch && 'full' !== e.pathMatch && 'prefix' !== e.pathMatch)
          throw new Error(
            `Invalid configuration of route '${t}': pathMatch can only be set to 'prefix' or 'full'`
          );
        e.children && cc(e.children, t);
      }
      function dc(e, t) {
        return t
          ? e || t.path
            ? e && !t.path
              ? e + '/'
              : !e && t.path
              ? t.path
              : `${e}/${t.path}`
            : ''
          : e;
      }
      function pc(e) {
        const t = e.children && e.children.map(pc),
          n = t ? Object.assign({}, e, { children: t }) : Object.assign({}, e);
        return (
          !n.component &&
            (t || n.loadChildren) &&
            n.outlet &&
            'primary' !== n.outlet &&
            (n.component = ic),
          n
        );
      }
      function fc(e, t) {
        const n = Object.keys(e),
          r = Object.keys(t);
        if (!n || !r || n.length != r.length) return !1;
        let i;
        for (let o = 0; o < n.length; o++) if (((i = n[o]), e[i] !== t[i])) return !1;
        return !0;
      }
      function gc(e) {
        return Array.prototype.concat.apply([], e);
      }
      function mc(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function vc(e, t) {
        for (const n in e) e.hasOwnProperty(n) && t(e[n], n);
      }
      function _c(e) {
        return Nt(e) ? e : Mt(e) ? G(Promise.resolve(e)) : Gl(e);
      }
      function bc(e, t, n) {
        return n
          ? (function (e, t) {
              return fc(e, t);
            })(e.queryParams, t.queryParams) &&
              (function e(t, n) {
                if (!xc(t.segments, n.segments)) return !1;
                if (t.numberOfChildren !== n.numberOfChildren) return !1;
                for (const r in n.children) {
                  if (!t.children[r]) return !1;
                  if (!e(t.children[r], n.children[r])) return !1;
                }
                return !0;
              })(e.root, t.root)
          : (function (e, t) {
              return (
                Object.keys(t).length <= Object.keys(e).length &&
                Object.keys(t).every((n) => t[n] === e[n])
              );
            })(e.queryParams, t.queryParams) &&
              (function e(t, n) {
                return (function t(n, r, i) {
                  if (n.segments.length > i.length)
                    return !!xc(n.segments.slice(0, i.length), i) && !r.hasChildren();
                  if (n.segments.length === i.length) {
                    if (!xc(n.segments, i)) return !1;
                    for (const t in r.children) {
                      if (!n.children[t]) return !1;
                      if (!e(n.children[t], r.children[t])) return !1;
                    }
                    return !0;
                  }
                  {
                    const e = i.slice(0, n.segments.length),
                      o = i.slice(n.segments.length);
                    return (
                      !!xc(n.segments, e) && !!n.children.primary && t(n.children.primary, r, o)
                    );
                  }
                })(t, n, n.segments);
              })(e.root, t.root);
      }
      class yc {
        constructor(e, t, n) {
          (this.root = e), (this.queryParams = t), (this.fragment = n);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = sc(this.queryParams)), this._queryParamMap
          );
        }
        toString() {
          return Pc.serialize(this);
        }
      }
      class wc {
        constructor(e, t) {
          (this.segments = e),
            (this.children = t),
            (this.parent = null),
            vc(t, (e, t) => (e.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Rc(this);
        }
      }
      class Cc {
        constructor(e, t) {
          (this.path = e), (this.parameters = t);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = sc(this.parameters)), this._parameterMap
          );
        }
        toString() {
          return kc(this);
        }
      }
      function xc(e, t) {
        return e.length === t.length && e.every((e, n) => e.path === t[n].path);
      }
      function Sc(e, t) {
        let n = [];
        return (
          vc(e.children, (e, r) => {
            'primary' === r && (n = n.concat(t(e, r)));
          }),
          vc(e.children, (e, r) => {
            'primary' !== r && (n = n.concat(t(e, r)));
          }),
          n
        );
      }
      class Ec {}
      class Tc {
        parse(e) {
          const t = new Uc(e);
          return new yc(t.parseRootSegment(), t.parseQueryParams(), t.parseFragment());
        }
        serialize(e) {
          return `${
            '/' +
            (function e(t, n) {
              if (!t.hasChildren()) return Rc(t);
              if (n) {
                const n = t.children.primary ? e(t.children.primary, !1) : '',
                  r = [];
                return (
                  vc(t.children, (t, n) => {
                    'primary' !== n && r.push(`${n}:${e(t, !1)}`);
                  }),
                  r.length > 0 ? `${n}(${r.join('//')})` : n
                );
              }
              {
                const n = Sc(t, (n, r) =>
                  'primary' === r ? [e(t.children.primary, !1)] : [`${r}:${e(n, !1)}`]
                );
                return `${Rc(t)}/(${n.join('//')})`;
              }
            })(e.root, !0)
          }${(function (e) {
            const t = Object.keys(e).map((t) => {
              const n = e[t];
              return Array.isArray(n)
                ? n.map((e) => `${Dc(t)}=${Dc(e)}`).join('&')
                : `${Dc(t)}=${Dc(n)}`;
            });
            return t.length ? '?' + t.join('&') : '';
          })(e.queryParams)}${'string' == typeof e.fragment ? '#' + encodeURI(e.fragment) : ''}`;
        }
      }
      const Pc = new Tc();
      function Rc(e) {
        return e.segments.map((e) => kc(e)).join('/');
      }
      function Ac(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function Dc(e) {
        return Ac(e).replace(/%3B/gi, ';');
      }
      function Ic(e) {
        return Ac(e).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
      }
      function Oc(e) {
        return decodeURIComponent(e);
      }
      function Vc(e) {
        return Oc(e.replace(/\+/g, '%20'));
      }
      function kc(e) {
        return `${Ic(e.path)}${
          ((t = e.parameters),
          Object.keys(t)
            .map((e) => `;${Ic(e)}=${Ic(t[e])}`)
            .join(''))
        }`;
        var t;
      }
      const Mc = /^[^\/()?;=#]+/;
      function Nc(e) {
        const t = e.match(Mc);
        return t ? t[0] : '';
      }
      const Lc = /^[^=?&#]+/,
        Fc = /^[^?&#]+/;
      class Uc {
        constructor(e) {
          (this.url = e), (this.remaining = e);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#')
              ? new wc([], {})
              : new wc([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const e = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(e);
            } while (this.consumeOptional('&'));
          return e;
        }
        parseFragment() {
          return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const e = [];
          for (
            this.peekStartsWith('(') || e.push(this.parseSegment());
            this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(');

          )
            this.capture('/'), e.push(this.parseSegment());
          let t = {};
          this.peekStartsWith('/(') && (this.capture('/'), (t = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith('(') && (n = this.parseParens(!1)),
            (e.length > 0 || Object.keys(t).length > 0) && (n.primary = new wc(e, t)),
            n
          );
        }
        parseSegment() {
          const e = Nc(this.remaining);
          if ('' === e && this.peekStartsWith(';'))
            throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
          return this.capture(e), new Cc(Oc(e), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const e = {};
          for (; this.consumeOptional(';'); ) this.parseParam(e);
          return e;
        }
        parseParam(e) {
          const t = Nc(this.remaining);
          if (!t) return;
          this.capture(t);
          let n = '';
          if (this.consumeOptional('=')) {
            const e = Nc(this.remaining);
            e && ((n = e), this.capture(n));
          }
          e[Oc(t)] = Oc(n);
        }
        parseQueryParam(e) {
          const t = (function (e) {
            const t = e.match(Lc);
            return t ? t[0] : '';
          })(this.remaining);
          if (!t) return;
          this.capture(t);
          let n = '';
          if (this.consumeOptional('=')) {
            const e = (function (e) {
              const t = e.match(Fc);
              return t ? t[0] : '';
            })(this.remaining);
            e && ((n = e), this.capture(n));
          }
          const r = Vc(t),
            i = Vc(n);
          if (e.hasOwnProperty(r)) {
            let t = e[r];
            Array.isArray(t) || ((t = [t]), (e[r] = t)), t.push(i);
          } else e[r] = i;
        }
        parseParens(e) {
          const t = {};
          for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
            const n = Nc(this.remaining),
              r = this.remaining[n.length];
            if ('/' !== r && ')' !== r && ';' !== r)
              throw new Error(`Cannot parse url '${this.url}'`);
            let i = void 0;
            n.indexOf(':') > -1
              ? ((i = n.substr(0, n.indexOf(':'))), this.capture(i), this.capture(':'))
              : e && (i = 'primary');
            const o = this.parseChildren();
            (t[i] = 1 === Object.keys(o).length ? o.primary : new wc([], o)),
              this.consumeOptional('//');
          }
          return t;
        }
        peekStartsWith(e) {
          return this.remaining.startsWith(e);
        }
        consumeOptional(e) {
          return (
            !!this.peekStartsWith(e) && ((this.remaining = this.remaining.substring(e.length)), !0)
          );
        }
        capture(e) {
          if (!this.consumeOptional(e)) throw new Error(`Expected "${e}".`);
        }
      }
      class $c {
        constructor(e) {
          this._root = e;
        }
        get root() {
          return this._root.value;
        }
        parent(e) {
          const t = this.pathFromRoot(e);
          return t.length > 1 ? t[t.length - 2] : null;
        }
        children(e) {
          const t = jc(e, this._root);
          return t ? t.children.map((e) => e.value) : [];
        }
        firstChild(e) {
          const t = jc(e, this._root);
          return t && t.children.length > 0 ? t.children[0].value : null;
        }
        siblings(e) {
          const t = Hc(e, this._root);
          return t.length < 2
            ? []
            : t[t.length - 2].children.map((e) => e.value).filter((t) => t !== e);
        }
        pathFromRoot(e) {
          return Hc(e, this._root).map((e) => e.value);
        }
      }
      function jc(e, t) {
        if (e === t.value) return t;
        for (const n of t.children) {
          const t = jc(e, n);
          if (t) return t;
        }
        return null;
      }
      function Hc(e, t) {
        if (e === t.value) return [t];
        for (const n of t.children) {
          const r = Hc(e, n);
          if (r.length) return r.unshift(t), r;
        }
        return [];
      }
      class zc {
        constructor(e, t) {
          (this.value = e), (this.children = t);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Bc(e) {
        const t = {};
        return e && e.children.forEach((e) => (t[e.value.outlet] = e)), t;
      }
      class qc extends $c {
        constructor(e, t) {
          super(e), (this.snapshot = t), Yc(this, e);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function Gc(e, t) {
        const n = (function (e, t) {
            const n = new Kc([], {}, {}, '', {}, 'primary', t, null, e.root, -1, {});
            return new Qc('', new zc(n, []));
          })(e, t),
          r = new Wl([new Cc('', {})]),
          i = new Wl({}),
          o = new Wl({}),
          s = new Wl({}),
          l = new Wl(''),
          a = new Wc(r, i, s, l, o, 'primary', t, n.root);
        return (a.snapshot = n.root), new qc(new zc(a, []), n);
      }
      class Wc {
        constructor(e, t, n, r, i, o, s, l) {
          (this.url = e),
            (this.params = t),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = i),
            (this.outlet = o),
            (this.component = s),
            (this._futureSnapshot = l);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = this.params.pipe(H((e) => sc(e)))), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(H((e) => sc(e)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
        }
      }
      function Zc(e, t = 'emptyOnly') {
        const n = e.pathFromRoot;
        let r = 0;
        if ('always' !== t)
          for (r = n.length - 1; r >= 1; ) {
            const e = n[r],
              t = n[r - 1];
            if (e.routeConfig && '' === e.routeConfig.path) r--;
            else {
              if (t.component) break;
              r--;
            }
          }
        return (function (e) {
          return e.reduce(
            (e, t) => ({
              params: Object.assign({}, e.params, t.params),
              data: Object.assign({}, e.data, t.data),
              resolve: Object.assign({}, e.resolve, t._resolvedData),
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      class Kc {
        constructor(e, t, n, r, i, o, s, l, a, u, c) {
          (this.url = e),
            (this.params = t),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = i),
            (this.outlet = o),
            (this.component = s),
            (this.routeConfig = l),
            (this._urlSegment = a),
            (this._lastPathIndex = u),
            (this._resolve = c);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return this._paramMap || (this._paramMap = sc(this.params)), this._paramMap;
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = sc(this.queryParams)), this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url.map((e) => e.toString()).join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class Qc extends $c {
        constructor(e, t) {
          super(t), (this.url = e), Yc(this, t);
        }
        toString() {
          return Jc(this._root);
        }
      }
      function Yc(e, t) {
        (t.value._routerState = e), t.children.forEach((t) => Yc(e, t));
      }
      function Jc(e) {
        const t = e.children.length > 0 ? ` { ${e.children.map(Jc).join(', ')} } ` : '';
        return `${e.value}${t}`;
      }
      function Xc(e) {
        if (e.snapshot) {
          const t = e.snapshot,
            n = e._futureSnapshot;
          (e.snapshot = n),
            fc(t.queryParams, n.queryParams) || e.queryParams.next(n.queryParams),
            t.fragment !== n.fragment && e.fragment.next(n.fragment),
            fc(t.params, n.params) || e.params.next(n.params),
            (function (e, t) {
              if (e.length !== t.length) return !1;
              for (let n = 0; n < e.length; ++n) if (!fc(e[n], t[n])) return !1;
              return !0;
            })(t.url, n.url) || e.url.next(n.url),
            fc(t.data, n.data) || e.data.next(n.data);
        } else (e.snapshot = e._futureSnapshot), e.data.next(e._futureSnapshot.data);
      }
      function eh(e, t) {
        var n, r;
        return (
          fc(e.params, t.params) &&
          xc((n = e.url), (r = t.url)) &&
          n.every((e, t) => fc(e.parameters, r[t].parameters)) &&
          !(!e.parent != !t.parent) &&
          (!e.parent || eh(e.parent, t.parent))
        );
      }
      function th(e) {
        return 'object' == typeof e && null != e && !e.outlets && !e.segmentPath;
      }
      function nh(e, t, n, r, i) {
        let o = {};
        return (
          r &&
            vc(r, (e, t) => {
              o[t] = Array.isArray(e) ? e.map((e) => '' + e) : '' + e;
            }),
          new yc(
            n.root === e
              ? t
              : (function e(t, n, r) {
                  const i = {};
                  return (
                    vc(t.children, (t, o) => {
                      i[o] = t === n ? r : e(t, n, r);
                    }),
                    new wc(t.segments, i)
                  );
                })(n.root, e, t),
            o,
            i
          )
        );
      }
      class rh {
        constructor(e, t, n) {
          if (
            ((this.isAbsolute = e),
            (this.numberOfDoubleDots = t),
            (this.commands = n),
            e && n.length > 0 && th(n[0]))
          )
            throw new Error('Root segment cannot have matrix parameters');
          const r = n.find((e) => 'object' == typeof e && null != e && e.outlets);
          if (r && r !== mc(n)) throw new Error('{outlets:{}} has to be the last command');
        }
        toRoot() {
          return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
        }
      }
      class ih {
        constructor(e, t, n) {
          (this.segmentGroup = e), (this.processChildren = t), (this.index = n);
        }
      }
      function oh(e) {
        return 'object' == typeof e && null != e && e.outlets ? e.outlets.primary : '' + e;
      }
      function sh(e, t, n) {
        if ((e || (e = new wc([], {})), 0 === e.segments.length && e.hasChildren()))
          return lh(e, t, n);
        const r = (function (e, t, n) {
            let r = 0,
              i = t;
            const o = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; i < e.segments.length; ) {
              if (r >= n.length) return o;
              const t = e.segments[i],
                s = oh(n[r]),
                l = r < n.length - 1 ? n[r + 1] : null;
              if (i > 0 && void 0 === s) break;
              if (s && l && 'object' == typeof l && void 0 === l.outlets) {
                if (!hh(s, l, t)) return o;
                r += 2;
              } else {
                if (!hh(s, {}, t)) return o;
                r++;
              }
              i++;
            }
            return { match: !0, pathIndex: i, commandIndex: r };
          })(e, t, n),
          i = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < e.segments.length) {
          const t = new wc(e.segments.slice(0, r.pathIndex), {});
          return (
            (t.children.primary = new wc(e.segments.slice(r.pathIndex), e.children)), lh(t, 0, i)
          );
        }
        return r.match && 0 === i.length
          ? new wc(e.segments, {})
          : r.match && !e.hasChildren()
          ? ah(e, t, n)
          : r.match
          ? lh(e, 0, i)
          : ah(e, t, n);
      }
      function lh(e, t, n) {
        if (0 === n.length) return new wc(e.segments, {});
        {
          const r = (function (e) {
              return 'object' != typeof e[0] || void 0 === e[0].outlets
                ? { primary: e }
                : e[0].outlets;
            })(n),
            i = {};
          return (
            vc(r, (n, r) => {
              null !== n && (i[r] = sh(e.children[r], t, n));
            }),
            vc(e.children, (e, t) => {
              void 0 === r[t] && (i[t] = e);
            }),
            new wc(e.segments, i)
          );
        }
      }
      function ah(e, t, n) {
        const r = e.segments.slice(0, t);
        let i = 0;
        for (; i < n.length; ) {
          if ('object' == typeof n[i] && void 0 !== n[i].outlets) {
            const e = uh(n[i].outlets);
            return new wc(r, e);
          }
          if (0 === i && th(n[0])) {
            r.push(new Cc(e.segments[t].path, n[0])), i++;
            continue;
          }
          const o = oh(n[i]),
            s = i < n.length - 1 ? n[i + 1] : null;
          o && s && th(s) ? (r.push(new Cc(o, ch(s))), (i += 2)) : (r.push(new Cc(o, {})), i++);
        }
        return new wc(r, {});
      }
      function uh(e) {
        const t = {};
        return (
          vc(e, (e, n) => {
            null !== e && (t[n] = ah(new wc([], {}), 0, e));
          }),
          t
        );
      }
      function ch(e) {
        const t = {};
        return vc(e, (e, n) => (t[n] = '' + e)), t;
      }
      function hh(e, t, n) {
        return e == n.path && fc(t, n.parameters);
      }
      class dh {
        constructor(e, t, n, r) {
          (this.routeReuseStrategy = e),
            (this.futureState = t),
            (this.currState = n),
            (this.forwardEvent = r);
        }
        activate(e) {
          const t = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(t, n, e),
            Xc(this.futureState.root),
            this.activateChildRoutes(t, n, e);
        }
        deactivateChildRoutes(e, t, n) {
          const r = Bc(t);
          e.children.forEach((e) => {
            const t = e.value.outlet;
            this.deactivateRoutes(e, r[t], n), delete r[t];
          }),
            vc(r, (e, t) => {
              this.deactivateRouteAndItsChildren(e, n);
            });
        }
        deactivateRoutes(e, t, n) {
          const r = e.value,
            i = t ? t.value : null;
          if (r === i)
            if (r.component) {
              const i = n.getContext(r.outlet);
              i && this.deactivateChildRoutes(e, t, i.children);
            } else this.deactivateChildRoutes(e, t, n);
          else i && this.deactivateRouteAndItsChildren(t, n);
        }
        deactivateRouteAndItsChildren(e, t) {
          this.routeReuseStrategy.shouldDetach(e.value.snapshot)
            ? this.detachAndStoreRouteSubtree(e, t)
            : this.deactivateRouteAndOutlet(e, t);
        }
        detachAndStoreRouteSubtree(e, t) {
          const n = t.getContext(e.value.outlet);
          if (n && n.outlet) {
            const t = n.outlet.detach(),
              r = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(e.value.snapshot, {
              componentRef: t,
              route: e,
              contexts: r,
            });
          }
        }
        deactivateRouteAndOutlet(e, t) {
          const n = t.getContext(e.value.outlet);
          if (n) {
            const r = Bc(e),
              i = e.value.component ? n.children : t;
            vc(r, (e, t) => this.deactivateRouteAndItsChildren(e, i)),
              n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated());
          }
        }
        activateChildRoutes(e, t, n) {
          const r = Bc(t);
          e.children.forEach((e) => {
            this.activateRoutes(e, r[e.value.outlet], n),
              this.forwardEvent(new nc(e.value.snapshot));
          }),
            e.children.length && this.forwardEvent(new ec(e.value.snapshot));
        }
        activateRoutes(e, t, n) {
          const r = e.value,
            i = t ? t.value : null;
          if ((Xc(r), r === i))
            if (r.component) {
              const i = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(e, t, i.children);
            } else this.activateChildRoutes(e, t, n);
          else if (r.component) {
            const t = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const e = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null),
                t.children.onOutletReAttached(e.contexts),
                (t.attachRef = e.componentRef),
                (t.route = e.route.value),
                t.outlet && t.outlet.attach(e.componentRef, e.route.value),
                ph(e.route);
            } else {
              const n = (function (e) {
                  for (let t = e.parent; t; t = t.parent) {
                    const e = t.routeConfig;
                    if (e && e._loadedConfig) return e._loadedConfig;
                    if (e && e.component) return null;
                  }
                  return null;
                })(r.snapshot),
                i = n ? n.module.componentFactoryResolver : null;
              (t.attachRef = null),
                (t.route = r),
                (t.resolver = i),
                t.outlet && t.outlet.activateWith(r, i),
                this.activateChildRoutes(e, null, t.children);
            }
          } else this.activateChildRoutes(e, null, n);
        }
      }
      function ph(e) {
        Xc(e.value), e.children.forEach(ph);
      }
      function fh(e) {
        return 'function' == typeof e;
      }
      function gh(e) {
        return e instanceof yc;
      }
      class mh {
        constructor(e) {
          this.segmentGroup = e || null;
        }
      }
      class vh {
        constructor(e) {
          this.urlTree = e;
        }
      }
      function _h(e) {
        return new w((t) => t.error(new mh(e)));
      }
      function bh(e) {
        return new w((t) => t.error(new vh(e)));
      }
      function yh(e) {
        return new w((t) =>
          t.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${e}'`))
        );
      }
      class wh {
        constructor(e, t, n, r, i) {
          (this.configLoader = t),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = i),
            (this.allowRedirects = !0),
            (this.ngModule = e.get(qt));
        }
        apply() {
          return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, 'primary')
            .pipe(H((e) => this.createUrlTree(e, this.urlTree.queryParams, this.urlTree.fragment)))
            .pipe(
              _a((e) => {
                if (e instanceof vh) return (this.allowRedirects = !1), this.match(e.urlTree);
                if (e instanceof mh) throw this.noMatchError(e);
                throw e;
              })
            );
        }
        match(e) {
          return this.expandSegmentGroup(this.ngModule, this.config, e.root, 'primary')
            .pipe(H((t) => this.createUrlTree(t, e.queryParams, e.fragment)))
            .pipe(
              _a((e) => {
                if (e instanceof mh) throw this.noMatchError(e);
                throw e;
              })
            );
        }
        noMatchError(e) {
          return new Error(`Cannot match any routes. URL Segment: '${e.segmentGroup}'`);
        }
        createUrlTree(e, t, n) {
          const r = e.segments.length > 0 ? new wc([], { primary: e }) : e;
          return new yc(r, t, n);
        }
        expandSegmentGroup(e, t, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(e, t, n).pipe(H((e) => new wc([], e)))
            : this.expandSegment(e, n, t, n.segments, r, !0);
        }
        expandChildren(e, t, n) {
          return (function (e, t) {
            if (0 === Object.keys(e).length) return Gl({});
            const n = [],
              r = [],
              i = {};
            return (
              vc(e, (e, o) => {
                const s = t(o, e).pipe(H((e) => (i[o] = e)));
                'primary' === o ? n.push(s) : r.push(s);
              }),
              Gl.apply(null, n.concat(r)).pipe(
                ea(),
                va(),
                H(() => i)
              )
            );
          })(n.children, (n, r) => this.expandSegmentGroup(e, t, r, n));
        }
        expandSegment(e, t, n, r, i, o) {
          return Gl(...n).pipe(
            H((s) =>
              this.expandSegmentAgainstRoute(e, t, n, s, r, i, o).pipe(
                _a((e) => {
                  if (e instanceof mh) return Gl(null);
                  throw e;
                })
              )
            ),
            ea(),
            Sa((e) => !!e),
            _a((e, n) => {
              if (e instanceof Kl || 'EmptyError' === e.name) {
                if (this.noLeftoversInUrl(t, r, i)) return Gl(new wc([], {}));
                throw new mh(t);
              }
              throw e;
            })
          );
        }
        noLeftoversInUrl(e, t, n) {
          return 0 === t.length && !e.children[n];
        }
        expandSegmentAgainstRoute(e, t, n, r, i, o, s) {
          return Eh(r) !== o
            ? _h(t)
            : void 0 === r.redirectTo
            ? this.matchSegmentAgainstRoute(e, t, r, i)
            : s && this.allowRedirects
            ? this.expandSegmentAgainstRouteUsingRedirect(e, t, n, r, i, o)
            : _h(t);
        }
        expandSegmentAgainstRouteUsingRedirect(e, t, n, r, i, o) {
          return '**' === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(e, n, r, o)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, i, o);
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(e, t, n, r) {
          const i = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith('/')
            ? bh(i)
            : this.lineralizeSegments(n, i).pipe(
                W((n) => {
                  const i = new wc(n, {});
                  return this.expandSegment(e, i, t, n, r, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, i, o) {
          const { matched: s, consumedSegments: l, lastChild: a, positionalParamSegments: u } = Ch(
            t,
            r,
            i
          );
          if (!s) return _h(t);
          const c = this.applyRedirectCommands(l, r.redirectTo, u);
          return r.redirectTo.startsWith('/')
            ? bh(c)
            : this.lineralizeSegments(r, c).pipe(
                W((r) => this.expandSegment(e, t, n, r.concat(i.slice(a)), o, !1))
              );
        }
        matchSegmentAgainstRoute(e, t, n, r) {
          if ('**' === n.path)
            return n.loadChildren
              ? this.configLoader
                  .load(e.injector, n)
                  .pipe(H((e) => ((n._loadedConfig = e), new wc(r, {}))))
              : Gl(new wc(r, {}));
          const { matched: i, consumedSegments: o, lastChild: s } = Ch(t, n, r);
          if (!i) return _h(t);
          const l = r.slice(s);
          return this.getChildConfig(e, n, r).pipe(
            W((e) => {
              const n = e.module,
                r = e.routes,
                { segmentGroup: i, slicedSegments: s } = (function (e, t, n, r) {
                  return n.length > 0 &&
                    (function (e, t, n) {
                      return n.some((n) => Sh(e, t, n) && 'primary' !== Eh(n));
                    })(e, n, r)
                    ? {
                        segmentGroup: xh(
                          new wc(
                            t,
                            (function (e, t) {
                              const n = {};
                              n.primary = t;
                              for (const r of e)
                                '' === r.path && 'primary' !== Eh(r) && (n[Eh(r)] = new wc([], {}));
                              return n;
                            })(r, new wc(n, e.children))
                          )
                        ),
                        slicedSegments: [],
                      }
                    : 0 === n.length &&
                      (function (e, t, n) {
                        return n.some((n) => Sh(e, t, n));
                      })(e, n, r)
                    ? {
                        segmentGroup: xh(
                          new wc(
                            e.segments,
                            (function (e, t, n, r) {
                              const i = {};
                              for (const o of n)
                                Sh(e, t, o) && !r[Eh(o)] && (i[Eh(o)] = new wc([], {}));
                              return Object.assign({}, r, i);
                            })(e, n, r, e.children)
                          )
                        ),
                        slicedSegments: n,
                      }
                    : { segmentGroup: e, slicedSegments: n };
                })(t, o, l, r);
              return 0 === s.length && i.hasChildren()
                ? this.expandChildren(n, r, i).pipe(H((e) => new wc(o, e)))
                : 0 === r.length && 0 === s.length
                ? Gl(new wc(o, {}))
                : this.expandSegment(n, i, r, s, 'primary', !0).pipe(
                    H((e) => new wc(o.concat(e.segments), e.children))
                  );
            })
          );
        }
        getChildConfig(e, t, n) {
          return t.children
            ? Gl(new uc(t.children, e))
            : t.loadChildren
            ? void 0 !== t._loadedConfig
              ? Gl(t._loadedConfig)
              : (function (e, t, n) {
                  const r = t.canLoad;
                  return r && 0 !== r.length
                    ? G(r)
                        .pipe(
                          H((r) => {
                            const i = e.get(r);
                            let o;
                            if (
                              (function (e) {
                                return e && fh(e.canLoad);
                              })(i)
                            )
                              o = i.canLoad(t, n);
                            else {
                              if (!fh(i)) throw new Error('Invalid CanLoad guard');
                              o = i(t, n);
                            }
                            return _c(o);
                          })
                        )
                        .pipe(ea(), ((i = (e) => !0 === e), (e) => e.lift(new Ea(i, void 0, e))))
                    : Gl(!0);
                  var i;
                })(e.injector, t, n).pipe(
                  W((n) =>
                    n
                      ? this.configLoader
                          .load(e.injector, t)
                          .pipe(H((e) => ((t._loadedConfig = e), e)))
                      : (function (e) {
                          return new w((t) =>
                            t.error(
                              lc(
                                `Cannot load children because the guard of the route "path: '${e.path}'" returned false`
                              )
                            )
                          );
                        })(t)
                  )
                )
            : Gl(new uc([], e));
        }
        lineralizeSegments(e, t) {
          let n = [],
            r = t.root;
          for (;;) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren)) return Gl(n);
            if (r.numberOfChildren > 1 || !r.children.primary) return yh(e.redirectTo);
            r = r.children.primary;
          }
        }
        applyRedirectCommands(e, t, n) {
          return this.applyRedirectCreatreUrlTree(t, this.urlSerializer.parse(t), e, n);
        }
        applyRedirectCreatreUrlTree(e, t, n, r) {
          const i = this.createSegmentGroup(e, t.root, n, r);
          return new yc(
            i,
            this.createQueryParams(t.queryParams, this.urlTree.queryParams),
            t.fragment
          );
        }
        createQueryParams(e, t) {
          const n = {};
          return (
            vc(e, (e, r) => {
              if ('string' == typeof e && e.startsWith(':')) {
                const i = e.substring(1);
                n[r] = t[i];
              } else n[r] = e;
            }),
            n
          );
        }
        createSegmentGroup(e, t, n, r) {
          const i = this.createSegments(e, t.segments, n, r);
          let o = {};
          return (
            vc(t.children, (t, i) => {
              o[i] = this.createSegmentGroup(e, t, n, r);
            }),
            new wc(i, o)
          );
        }
        createSegments(e, t, n, r) {
          return t.map((t) =>
            t.path.startsWith(':') ? this.findPosParam(e, t, r) : this.findOrReturn(t, n)
          );
        }
        findPosParam(e, t, n) {
          const r = n[t.path.substring(1)];
          if (!r) throw new Error(`Cannot redirect to '${e}'. Cannot find '${t.path}'.`);
          return r;
        }
        findOrReturn(e, t) {
          let n = 0;
          for (const r of t) {
            if (r.path === e.path) return t.splice(n), r;
            n++;
          }
          return e;
        }
      }
      function Ch(e, t, n) {
        if ('' === t.path)
          return 'full' === t.pathMatch && (e.hasChildren() || n.length > 0)
            ? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
            : { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        const r = (t.matcher || ac)(n, e, t);
        return r
          ? {
              matched: !0,
              consumedSegments: r.consumed,
              lastChild: r.consumed.length,
              positionalParamSegments: r.posParams,
            }
          : { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
      }
      function xh(e) {
        if (1 === e.numberOfChildren && e.children.primary) {
          const t = e.children.primary;
          return new wc(e.segments.concat(t.segments), t.children);
        }
        return e;
      }
      function Sh(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || 'full' !== n.pathMatch) &&
          '' === n.path &&
          void 0 !== n.redirectTo
        );
      }
      function Eh(e) {
        return e.outlet || 'primary';
      }
      class Th {
        constructor(e) {
          (this.path = e), (this.route = this.path[this.path.length - 1]);
        }
      }
      class Ph {
        constructor(e, t) {
          (this.component = e), (this.route = t);
        }
      }
      function Rh(e, t, n) {
        const r = e._root;
        return (function e(t, n, r, i, o = { canDeactivateChecks: [], canActivateChecks: [] }) {
          const s = Bc(n);
          return (
            t.children.forEach((t) => {
              !(function (t, n, r, i, o = { canDeactivateChecks: [], canActivateChecks: [] }) {
                const s = t.value,
                  l = n ? n.value : null,
                  a = r ? r.getContext(t.value.outlet) : null;
                if (l && s.routeConfig === l.routeConfig) {
                  const u = (function (e, t, n) {
                    if ('function' == typeof n) return n(e, t);
                    switch (n) {
                      case 'pathParamsChange':
                        return !xc(e.url, t.url);
                      case 'pathParamsOrQueryParamsChange':
                        return !xc(e.url, t.url) || !fc(e.queryParams, t.queryParams);
                      case 'always':
                        return !0;
                      case 'paramsOrQueryParamsChange':
                        return !eh(e, t) || !fc(e.queryParams, t.queryParams);
                      case 'paramsChange':
                      default:
                        return !eh(e, t);
                    }
                  })(l, s, s.routeConfig.runGuardsAndResolvers);
                  u
                    ? o.canActivateChecks.push(new Th(i))
                    : ((s.data = l.data), (s._resolvedData = l._resolvedData)),
                    e(t, n, s.component ? (a ? a.children : null) : r, i, o),
                    u &&
                      o.canDeactivateChecks.push(
                        new Ph((a && a.outlet && a.outlet.component) || null, l)
                      );
                } else
                  l && Dh(n, a, o),
                    o.canActivateChecks.push(new Th(i)),
                    e(t, null, s.component ? (a ? a.children : null) : r, i, o);
              })(t, s[t.value.outlet], r, i.concat([t.value]), o),
                delete s[t.value.outlet];
            }),
            vc(s, (e, t) => Dh(e, r.getContext(t), o)),
            o
          );
        })(r, t ? t._root : null, n, [r.value]);
      }
      function Ah(e, t, n) {
        const r = (function (e) {
          if (!e) return null;
          for (let t = e.parent; t; t = t.parent) {
            const e = t.routeConfig;
            if (e && e._loadedConfig) return e._loadedConfig;
          }
          return null;
        })(t);
        return (r ? r.module.injector : n).get(e);
      }
      function Dh(e, t, n) {
        const r = Bc(e),
          i = e.value;
        vc(r, (e, r) => {
          Dh(e, i.component ? (t ? t.children.getContext(r) : null) : t, n);
        }),
          n.canDeactivateChecks.push(
            new Ph(
              i.component && t && t.outlet && t.outlet.isActivated ? t.outlet.component : null,
              i
            )
          );
      }
      const Ih = Symbol('INITIAL_VALUE');
      function Oh() {
        return Pa((e) =>
          (function (...e) {
            let t = null,
              n = null;
            return (
              A(e[e.length - 1]) && (n = e.pop()),
              'function' == typeof e[e.length - 1] && (t = e.pop()),
              1 === e.length && a(e[0]) && (e = e[0]),
              q(e, n).lift(new Yl(t))
            );
          })(
            ...e.map((e) =>
              e.pipe(
                wa(1),
                (function (...e) {
                  return (t) => {
                    let n = e[e.length - 1];
                    A(n) ? e.pop() : (n = null);
                    const r = e.length;
                    return (function (...e) {
                      return ea()(Gl(...e));
                    })(1 !== r || n ? (r > 0 ? q(e, n) : Bl(n)) : ql(e[0]), t);
                  };
                })(Ih)
              )
            )
          ).pipe(
            Da((e, t) => {
              let n = !1;
              return t.reduce((e, r, i) => {
                if (e !== Ih) return e;
                if ((r === Ih && (n = !0), !n)) {
                  if (!1 === r) return r;
                  if (i === t.length - 1 || gh(r)) return r;
                }
                return e;
              }, e);
            }, Ih),
            ta((e) => e !== Ih),
            H((e) => (gh(e) ? e : !0 === e)),
            wa(1)
          )
        );
      }
      function Vh(e, t) {
        return null !== e && t && t(new tc(e)), Gl(!0);
      }
      function kh(e, t) {
        return null !== e && t && t(new Xu(e)), Gl(!0);
      }
      function Mh(e, t, n) {
        const r = t.routeConfig ? t.routeConfig.canActivate : null;
        return r && 0 !== r.length
          ? Gl(
              r.map((r) =>
                Xl(() => {
                  const i = Ah(r, t, n);
                  let o;
                  if (
                    (function (e) {
                      return e && fh(e.canActivate);
                    })(i)
                  )
                    o = _c(i.canActivate(t, e));
                  else {
                    if (!fh(i)) throw new Error('Invalid CanActivate guard');
                    o = _c(i(t, e));
                  }
                  return o.pipe(Sa());
                })
              )
            ).pipe(Oh())
          : Gl(!0);
      }
      function Nh(e, t, n) {
        const r = t[t.length - 1],
          i = t
            .slice(0, t.length - 1)
            .reverse()
            .map((e) =>
              (function (e) {
                const t = e.routeConfig ? e.routeConfig.canActivateChild : null;
                return t && 0 !== t.length ? { node: e, guards: t } : null;
              })(e)
            )
            .filter((e) => null !== e)
            .map((t) =>
              Xl(() =>
                Gl(
                  t.guards.map((i) => {
                    const o = Ah(i, t.node, n);
                    let s;
                    if (
                      (function (e) {
                        return e && fh(e.canActivateChild);
                      })(o)
                    )
                      s = _c(o.canActivateChild(r, e));
                    else {
                      if (!fh(o)) throw new Error('Invalid CanActivateChild guard');
                      s = _c(o(r, e));
                    }
                    return s.pipe(Sa());
                  })
                ).pipe(Oh())
              )
            );
        return Gl(i).pipe(Oh());
      }
      class Lh {}
      class Fh {
        constructor(e, t, n, r, i, o) {
          (this.rootComponentType = e),
            (this.config = t),
            (this.urlTree = n),
            (this.url = r),
            (this.paramsInheritanceStrategy = i),
            (this.relativeLinkResolution = o);
        }
        recognize() {
          try {
            const e = jh(this.urlTree.root, [], [], this.config, this.relativeLinkResolution)
                .segmentGroup,
              t = this.processSegmentGroup(this.config, e, 'primary'),
              n = new Kc(
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
              r = new zc(n, t),
              i = new Qc(this.url, r);
            return this.inheritParamsAndData(i._root), Gl(i);
          } catch (e) {
            return new w((t) => t.error(e));
          }
        }
        inheritParamsAndData(e) {
          const t = e.value,
            n = Zc(t, this.paramsInheritanceStrategy);
          (t.params = Object.freeze(n.params)),
            (t.data = Object.freeze(n.data)),
            e.children.forEach((e) => this.inheritParamsAndData(e));
        }
        processSegmentGroup(e, t, n) {
          return 0 === t.segments.length && t.hasChildren()
            ? this.processChildren(e, t)
            : this.processSegment(e, t, t.segments, n);
        }
        processChildren(e, t) {
          const n = Sc(t, (t, n) => this.processSegmentGroup(e, t, n));
          return (
            (function (e) {
              const t = {};
              e.forEach((e) => {
                const n = t[e.value.outlet];
                if (n) {
                  const t = n.url.map((e) => e.toString()).join('/'),
                    r = e.value.url.map((e) => e.toString()).join('/');
                  throw new Error(
                    `Two segments cannot have the same outlet name: '${t}' and '${r}'.`
                  );
                }
                t[e.value.outlet] = e.value;
              });
            })(n),
            n.sort((e, t) =>
              'primary' === e.value.outlet
                ? -1
                : 'primary' === t.value.outlet
                ? 1
                : e.value.outlet.localeCompare(t.value.outlet)
            ),
            n
          );
        }
        processSegment(e, t, n, r) {
          for (const o of e)
            try {
              return this.processSegmentAgainstRoute(o, t, n, r);
            } catch (i) {
              if (!(i instanceof Lh)) throw i;
            }
          if (this.noLeftoversInUrl(t, n, r)) return [];
          throw new Lh();
        }
        noLeftoversInUrl(e, t, n) {
          return 0 === t.length && !e.children[n];
        }
        processSegmentAgainstRoute(e, t, n, r) {
          if (e.redirectTo) throw new Lh();
          if ((e.outlet || 'primary') !== r) throw new Lh();
          let i,
            o = [],
            s = [];
          if ('**' === e.path) {
            const o = n.length > 0 ? mc(n).parameters : {};
            i = new Kc(
              n,
              o,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              Bh(e),
              r,
              e.component,
              e,
              Uh(t),
              $h(t) + n.length,
              qh(e)
            );
          } else {
            const l = (function (e, t, n) {
              if ('' === t.path) {
                if ('full' === t.pathMatch && (e.hasChildren() || n.length > 0)) throw new Lh();
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              const r = (t.matcher || ac)(n, e, t);
              if (!r) throw new Lh();
              const i = {};
              vc(r.posParams, (e, t) => {
                i[t] = e.path;
              });
              const o =
                r.consumed.length > 0
                  ? Object.assign({}, i, r.consumed[r.consumed.length - 1].parameters)
                  : i;
              return { consumedSegments: r.consumed, lastChild: r.consumed.length, parameters: o };
            })(t, e, n);
            (o = l.consumedSegments),
              (s = n.slice(l.lastChild)),
              (i = new Kc(
                o,
                l.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                Bh(e),
                r,
                e.component,
                e,
                Uh(t),
                $h(t) + o.length,
                qh(e)
              ));
          }
          const l = (function (e) {
              return e.children ? e.children : e.loadChildren ? e._loadedConfig.routes : [];
            })(e),
            { segmentGroup: a, slicedSegments: u } = jh(t, o, s, l, this.relativeLinkResolution);
          if (0 === u.length && a.hasChildren()) {
            const e = this.processChildren(l, a);
            return [new zc(i, e)];
          }
          if (0 === l.length && 0 === u.length) return [new zc(i, [])];
          const c = this.processSegment(l, a, u, 'primary');
          return [new zc(i, c)];
        }
      }
      function Uh(e) {
        let t = e;
        for (; t._sourceSegment; ) t = t._sourceSegment;
        return t;
      }
      function $h(e) {
        let t = e,
          n = t._segmentIndexShift ? t._segmentIndexShift : 0;
        for (; t._sourceSegment; )
          (t = t._sourceSegment), (n += t._segmentIndexShift ? t._segmentIndexShift : 0);
        return n - 1;
      }
      function jh(e, t, n, r, i) {
        if (
          n.length > 0 &&
          (function (e, t, n) {
            return n.some((n) => Hh(e, t, n) && 'primary' !== zh(n));
          })(e, n, r)
        ) {
          const i = new wc(
            t,
            (function (e, t, n, r) {
              const i = {};
              (i.primary = r), (r._sourceSegment = e), (r._segmentIndexShift = t.length);
              for (const o of n)
                if ('' === o.path && 'primary' !== zh(o)) {
                  const n = new wc([], {});
                  (n._sourceSegment = e), (n._segmentIndexShift = t.length), (i[zh(o)] = n);
                }
              return i;
            })(e, t, r, new wc(n, e.children))
          );
          return (
            (i._sourceSegment = e),
            (i._segmentIndexShift = t.length),
            { segmentGroup: i, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function (e, t, n) {
            return n.some((n) => Hh(e, t, n));
          })(e, n, r)
        ) {
          const o = new wc(
            e.segments,
            (function (e, t, n, r, i, o) {
              const s = {};
              for (const l of r)
                if (Hh(e, n, l) && !i[zh(l)]) {
                  const n = new wc([], {});
                  (n._sourceSegment = e),
                    (n._segmentIndexShift = 'legacy' === o ? e.segments.length : t.length),
                    (s[zh(l)] = n);
                }
              return Object.assign({}, i, s);
            })(e, t, n, r, e.children, i)
          );
          return (
            (o._sourceSegment = e),
            (o._segmentIndexShift = t.length),
            { segmentGroup: o, slicedSegments: n }
          );
        }
        const o = new wc(e.segments, e.children);
        return (
          (o._sourceSegment = e),
          (o._segmentIndexShift = t.length),
          { segmentGroup: o, slicedSegments: n }
        );
      }
      function Hh(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || 'full' !== n.pathMatch) &&
          '' === n.path &&
          void 0 === n.redirectTo
        );
      }
      function zh(e) {
        return e.outlet || 'primary';
      }
      function Bh(e) {
        return e.data || {};
      }
      function qh(e) {
        return e.resolve || {};
      }
      function Gh(e, t, n, r) {
        const i = Ah(e, t, r);
        return _c(i.resolve ? i.resolve(t, n) : i(t, n));
      }
      function Wh(e) {
        return function (t) {
          return t.pipe(
            Pa((t) => {
              const n = e(t);
              return n ? G(n).pipe(H(() => t)) : G([t]);
            })
          );
        };
      }
      class Zh {}
      class Kh {
        shouldDetach(e) {
          return !1;
        }
        store(e, t) {}
        shouldAttach(e) {
          return !1;
        }
        retrieve(e) {
          return null;
        }
        shouldReuseRoute(e, t) {
          return e.routeConfig === t.routeConfig;
        }
      }
      const Qh = new Ee('ROUTES');
      class Yh {
        constructor(e, t, n, r) {
          (this.loader = e),
            (this.compiler = t),
            (this.onLoadStartListener = n),
            (this.onLoadEndListener = r);
        }
        load(e, t) {
          return (
            this.onLoadStartListener && this.onLoadStartListener(t),
            this.loadModuleFactory(t.loadChildren).pipe(
              H((n) => {
                this.onLoadEndListener && this.onLoadEndListener(t);
                const r = n.create(e);
                return new uc(gc(r.injector.get(Qh)).map(pc), r);
              })
            )
          );
        }
        loadModuleFactory(e) {
          return 'string' == typeof e
            ? G(this.loader.load(e))
            : _c(e()).pipe(
                W((e) => (e instanceof Gt ? Gl(e) : G(this.compiler.compileModuleAsync(e))))
              );
        }
      }
      class Jh {}
      class Xh {
        shouldProcessUrl(e) {
          return !0;
        }
        extract(e) {
          return e;
        }
        merge(e, t) {
          return e;
        }
      }
      function ed(e) {
        throw e;
      }
      function td(e, t, n) {
        return t.parse('/');
      }
      function nd(e, t) {
        return Gl(null);
      }
      class rd {
        constructor(e, t, n, r, i, o, s, l) {
          (this.rootComponentType = e),
            (this.urlSerializer = t),
            (this.rootContexts = n),
            (this.location = r),
            (this.config = l),
            (this.lastSuccessfulNavigation = null),
            (this.currentNavigation = null),
            (this.navigationId = 0),
            (this.isNgZoneEnabled = !1),
            (this.events = new P()),
            (this.errorHandler = ed),
            (this.malformedUriErrorHandler = td),
            (this.navigated = !1),
            (this.lastSuccessfulId = -1),
            (this.hooks = { beforePreactivation: nd, afterPreactivation: nd }),
            (this.urlHandlingStrategy = new Xh()),
            (this.routeReuseStrategy = new Kh()),
            (this.onSameUrlNavigation = 'ignore'),
            (this.paramsInheritanceStrategy = 'emptyOnly'),
            (this.urlUpdateStrategy = 'deferred'),
            (this.relativeLinkResolution = 'legacy'),
            (this.ngModule = i.get(qt)),
            (this.console = i.get(Di));
          const a = i.get(Zi);
          (this.isNgZoneEnabled = a instanceof Zi),
            this.resetConfig(l),
            (this.currentUrlTree = new yc(new wc([], {}), {}, null)),
            (this.rawUrlTree = this.currentUrlTree),
            (this.browserUrlTree = this.currentUrlTree),
            (this.configLoader = new Yh(
              o,
              s,
              (e) => this.triggerEvent(new Yu(e)),
              (e) => this.triggerEvent(new Ju(e))
            )),
            (this.routerState = Gc(this.currentUrlTree, this.rootComponentType)),
            (this.transitions = new Wl({
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
        setupNavigations(e) {
          const t = this.events;
          return e.pipe(
            ta((e) => 0 !== e.id),
            H((e) =>
              Object.assign({}, e, { extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl) })
            ),
            Pa((e) => {
              let n = !1,
                r = !1;
              return Gl(e).pipe(
                ua((e) => {
                  this.currentNavigation = {
                    id: e.id,
                    initialUrl: e.currentRawUrl,
                    extractedUrl: e.extractedUrl,
                    trigger: e.source,
                    extras: e.extras,
                    previousNavigation: this.lastSuccessfulNavigation
                      ? Object.assign({}, this.lastSuccessfulNavigation, {
                          previousNavigation: null,
                        })
                      : null,
                  };
                }),
                Pa((e) => {
                  const n =
                    !this.navigated || e.extractedUrl.toString() !== this.browserUrlTree.toString();
                  if (
                    ('reload' === this.onSameUrlNavigation || n) &&
                    this.urlHandlingStrategy.shouldProcessUrl(e.rawUrl)
                  )
                    return Gl(e).pipe(
                      Pa((e) => {
                        const n = this.transitions.getValue();
                        return (
                          t.next(
                            new Hu(
                              e.id,
                              this.serializeUrl(e.extractedUrl),
                              e.source,
                              e.restoredState
                            )
                          ),
                          n !== this.transitions.getValue() ? zl : [e]
                        );
                      }),
                      Pa((e) => Promise.resolve(e)),
                      ((r = this.ngModule.injector),
                      (i = this.configLoader),
                      (o = this.urlSerializer),
                      (s = this.config),
                      function (e) {
                        return e.pipe(
                          Pa((e) =>
                            (function (e, t, n, r, i) {
                              return new wh(e, t, n, r, i).apply();
                            })(r, i, o, e.extractedUrl, s).pipe(
                              H((t) => Object.assign({}, e, { urlAfterRedirects: t }))
                            )
                          )
                        );
                      }),
                      ua((e) => {
                        this.currentNavigation = Object.assign({}, this.currentNavigation, {
                          finalUrl: e.urlAfterRedirects,
                        });
                      }),
                      (function (e, t, n, r, i) {
                        return function (o) {
                          return o.pipe(
                            W((o) =>
                              (function (e, t, n, r, i = 'emptyOnly', o = 'legacy') {
                                return new Fh(e, t, n, r, i, o).recognize();
                              })(e, t, o.urlAfterRedirects, n(o.urlAfterRedirects), r, i).pipe(
                                H((e) => Object.assign({}, o, { targetSnapshot: e }))
                              )
                            )
                          );
                        };
                      })(
                        this.rootComponentType,
                        this.config,
                        (e) => this.serializeUrl(e),
                        this.paramsInheritanceStrategy,
                        this.relativeLinkResolution
                      ),
                      ua((e) => {
                        'eager' === this.urlUpdateStrategy &&
                          (e.extras.skipLocationChange ||
                            this.setBrowserUrl(
                              e.urlAfterRedirects,
                              !!e.extras.replaceUrl,
                              e.id,
                              e.extras.state
                            ),
                          (this.browserUrlTree = e.urlAfterRedirects));
                      }),
                      ua((e) => {
                        const n = new Gu(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        t.next(n);
                      })
                    );
                  var r, i, o, s;
                  if (
                    n &&
                    this.rawUrlTree &&
                    this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                  ) {
                    const { id: n, extractedUrl: r, source: i, restoredState: o, extras: s } = e,
                      l = new Hu(n, this.serializeUrl(r), i, o);
                    t.next(l);
                    const a = Gc(r, this.rootComponentType).snapshot;
                    return Gl(
                      Object.assign({}, e, {
                        targetSnapshot: a,
                        urlAfterRedirects: r,
                        extras: Object.assign({}, s, { skipLocationChange: !1, replaceUrl: !1 }),
                      })
                    );
                  }
                  return (
                    (this.rawUrlTree = e.rawUrl),
                    (this.browserUrlTree = e.urlAfterRedirects),
                    e.resolve(null),
                    zl
                  );
                }),
                Wh((e) => {
                  const {
                    targetSnapshot: t,
                    id: n,
                    extractedUrl: r,
                    rawUrl: i,
                    extras: { skipLocationChange: o, replaceUrl: s },
                  } = e;
                  return this.hooks.beforePreactivation(t, {
                    navigationId: n,
                    appliedUrlTree: r,
                    rawUrlTree: i,
                    skipLocationChange: !!o,
                    replaceUrl: !!s,
                  });
                }),
                ua((e) => {
                  const t = new Wu(
                    e.id,
                    this.serializeUrl(e.extractedUrl),
                    this.serializeUrl(e.urlAfterRedirects),
                    e.targetSnapshot
                  );
                  this.triggerEvent(t);
                }),
                H((e) =>
                  Object.assign({}, e, {
                    guards: Rh(e.targetSnapshot, e.currentSnapshot, this.rootContexts),
                  })
                ),
                (function (e, t) {
                  return function (n) {
                    return n.pipe(
                      W((n) => {
                        const {
                          targetSnapshot: r,
                          currentSnapshot: i,
                          guards: { canActivateChecks: o, canDeactivateChecks: s },
                        } = n;
                        return 0 === s.length && 0 === o.length
                          ? Gl(Object.assign({}, n, { guardsResult: !0 }))
                          : (function (e, t, n, r) {
                              return G(e).pipe(
                                W((e) =>
                                  (function (e, t, n, r, i) {
                                    const o =
                                      t && t.routeConfig ? t.routeConfig.canDeactivate : null;
                                    return o && 0 !== o.length
                                      ? Gl(
                                          o.map((o) => {
                                            const s = Ah(o, t, i);
                                            let l;
                                            if (
                                              (function (e) {
                                                return e && fh(e.canDeactivate);
                                              })(s)
                                            )
                                              l = _c(s.canDeactivate(e, t, n, r));
                                            else {
                                              if (!fh(s))
                                                throw new Error('Invalid CanDeactivate guard');
                                              l = _c(s(e, t, n, r));
                                            }
                                            return l.pipe(Sa());
                                          })
                                        ).pipe(Oh())
                                      : Gl(!0);
                                  })(e.component, e.route, n, t, r)
                                ),
                                Sa((e) => !0 !== e, !0)
                              );
                            })(s, r, i, e).pipe(
                              W((n) =>
                                n && 'boolean' == typeof n
                                  ? (function (e, t, n, r) {
                                      return G(t).pipe(
                                        Va((t) =>
                                          G([
                                            kh(t.route.parent, r),
                                            Vh(t.route, r),
                                            Nh(e, t.path, n),
                                            Mh(e, t.route, n),
                                          ]).pipe(
                                            ea(),
                                            Sa((e) => !0 !== e, !0)
                                          )
                                        ),
                                        Sa((e) => !0 !== e, !0)
                                      );
                                    })(r, o, e, t)
                                  : Gl(n)
                              ),
                              H((e) => Object.assign({}, n, { guardsResult: e }))
                            );
                      })
                    );
                  };
                })(this.ngModule.injector, (e) => this.triggerEvent(e)),
                ua((e) => {
                  if (gh(e.guardsResult)) {
                    const t = lc(`Redirecting to "${this.serializeUrl(e.guardsResult)}"`);
                    throw ((t.url = e.guardsResult), t);
                  }
                }),
                ua((e) => {
                  const t = new Zu(
                    e.id,
                    this.serializeUrl(e.extractedUrl),
                    this.serializeUrl(e.urlAfterRedirects),
                    e.targetSnapshot,
                    !!e.guardsResult
                  );
                  this.triggerEvent(t);
                }),
                ta((e) => {
                  if (!e.guardsResult) {
                    this.resetUrlToCurrentUrlTree();
                    const n = new Bu(e.id, this.serializeUrl(e.extractedUrl), '');
                    return t.next(n), e.resolve(!1), !1;
                  }
                  return !0;
                }),
                Wh((e) => {
                  if (e.guards.canActivateChecks.length)
                    return Gl(e).pipe(
                      ua((e) => {
                        const t = new Ku(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        this.triggerEvent(t);
                      }),
                      ((t = this.paramsInheritanceStrategy),
                      (n = this.ngModule.injector),
                      function (e) {
                        return e.pipe(
                          W((e) => {
                            const {
                              targetSnapshot: r,
                              guards: { canActivateChecks: i },
                            } = e;
                            return i.length
                              ? G(i).pipe(
                                  Va((e) =>
                                    (function (e, t, n, r) {
                                      return (function (e, t, n, r) {
                                        const i = Object.keys(e);
                                        if (0 === i.length) return Gl({});
                                        if (1 === i.length) {
                                          const o = i[0];
                                          return Gh(e[o], t, n, r).pipe(H((e) => ({ [o]: e })));
                                        }
                                        const o = {};
                                        return G(i)
                                          .pipe(
                                            W((i) =>
                                              Gh(e[i], t, n, r).pipe(H((e) => ((o[i] = e), e)))
                                            )
                                          )
                                          .pipe(
                                            va(),
                                            H(() => o)
                                          );
                                      })(e._resolve, e, t, r).pipe(
                                        H(
                                          (t) => (
                                            (e._resolvedData = t),
                                            (e.data = Object.assign({}, e.data, Zc(e, n).resolve)),
                                            null
                                          )
                                        )
                                      );
                                    })(e.route, r, t, n)
                                  ),
                                  (function (e, t) {
                                    return arguments.length >= 2
                                      ? function (n) {
                                          return b(Da(e, t), sa(1), fa(t))(n);
                                        }
                                      : function (t) {
                                          return b(
                                            Da((t, n, r) => e(t, n, r + 1)),
                                            sa(1)
                                          )(t);
                                        };
                                  })((e, t) => e),
                                  H((t) => e)
                                )
                              : Gl(e);
                          })
                        );
                      }),
                      ua((e) => {
                        const t = new Qu(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        this.triggerEvent(t);
                      })
                    );
                  var t, n;
                }),
                Wh((e) => {
                  const {
                    targetSnapshot: t,
                    id: n,
                    extractedUrl: r,
                    rawUrl: i,
                    extras: { skipLocationChange: o, replaceUrl: s },
                  } = e;
                  return this.hooks.afterPreactivation(t, {
                    navigationId: n,
                    appliedUrlTree: r,
                    rawUrlTree: i,
                    skipLocationChange: !!o,
                    replaceUrl: !!s,
                  });
                }),
                H((e) => {
                  const t = (function (e, t, n) {
                    const r = (function e(t, n, r) {
                      if (r && t.shouldReuseRoute(n.value, r.value.snapshot)) {
                        const i = r.value;
                        i._futureSnapshot = n.value;
                        const o = (function (t, n, r) {
                          return n.children.map((n) => {
                            for (const i of r.children)
                              if (t.shouldReuseRoute(i.value.snapshot, n.value)) return e(t, n, i);
                            return e(t, n);
                          });
                        })(t, n, r);
                        return new zc(i, o);
                      }
                      {
                        const r = t.retrieve(n.value);
                        if (r) {
                          const e = r.route;
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
                              for (let r = 0; r < t.children.length; ++r)
                                e(t.children[r], n.children[r]);
                            })(n, e),
                            e
                          );
                        }
                        {
                          const r = new Wc(
                              new Wl((i = n.value).url),
                              new Wl(i.params),
                              new Wl(i.queryParams),
                              new Wl(i.fragment),
                              new Wl(i.data),
                              i.outlet,
                              i.component,
                              i
                            ),
                            o = n.children.map((n) => e(t, n));
                          return new zc(r, o);
                        }
                      }
                      var i;
                    })(e, t._root, n ? n._root : void 0);
                    return new qc(r, t);
                  })(this.routeReuseStrategy, e.targetSnapshot, e.currentRouterState);
                  return Object.assign({}, e, { targetRouterState: t });
                }),
                ua((e) => {
                  (this.currentUrlTree = e.urlAfterRedirects),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(
                      this.currentUrlTree,
                      e.rawUrl
                    )),
                    (this.routerState = e.targetRouterState),
                    'deferred' === this.urlUpdateStrategy &&
                      (e.extras.skipLocationChange ||
                        this.setBrowserUrl(
                          this.rawUrlTree,
                          !!e.extras.replaceUrl,
                          e.id,
                          e.extras.state
                        ),
                      (this.browserUrlTree = e.urlAfterRedirects));
                }),
                ((o = this.rootContexts),
                (s = this.routeReuseStrategy),
                (l = (e) => this.triggerEvent(e)),
                H((e) => (new dh(s, e.targetRouterState, e.currentRouterState, l).activate(o), e))),
                ua({
                  next() {
                    n = !0;
                  },
                  complete() {
                    n = !0;
                  },
                }),
                ((i = () => {
                  if (!n && !r) {
                    this.resetUrlToCurrentUrlTree();
                    const n = new Bu(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      `Navigation ID ${e.id} is not equal to the current navigation id ${this.navigationId}`
                    );
                    t.next(n), e.resolve(!1);
                  }
                  this.currentNavigation = null;
                }),
                (e) => e.lift(new ka(i))),
                _a((n) => {
                  if (((r = !0), (i = n) && i.ngNavigationCancelingError)) {
                    const r = gh(n.url);
                    r ||
                      ((this.navigated = !0),
                      this.resetStateAndUrl(e.currentRouterState, e.currentUrlTree, e.rawUrl));
                    const i = new Bu(e.id, this.serializeUrl(e.extractedUrl), n.message);
                    t.next(i), e.resolve(!1), r && this.navigateByUrl(n.url);
                  } else {
                    this.resetStateAndUrl(e.currentRouterState, e.currentUrlTree, e.rawUrl);
                    const r = new qu(e.id, this.serializeUrl(e.extractedUrl), n);
                    t.next(r);
                    try {
                      e.resolve(this.errorHandler(n));
                    } catch (o) {
                      e.reject(o);
                    }
                  }
                  var i;
                  return zl;
                })
              );
              var i, o, s, l;
            })
          );
        }
        resetRootComponentType(e) {
          (this.rootComponentType = e), (this.routerState.root.component = this.rootComponentType);
        }
        getTransition() {
          const e = this.transitions.value;
          return (e.urlAfterRedirects = this.browserUrlTree), e;
        }
        setTransition(e) {
          this.transitions.next(Object.assign({}, this.getTransition(), e));
        }
        initialNavigation() {
          this.setUpLocationChangeListener(),
            0 === this.navigationId &&
              this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
        }
        setUpLocationChangeListener() {
          this.locationSubscription ||
            (this.locationSubscription = this.location.subscribe((e) => {
              let t = this.parseUrl(e.url);
              const n = 'popstate' === e.type ? 'popstate' : 'hashchange',
                r = e.state && e.state.navigationId ? e.state : null;
              setTimeout(() => {
                this.scheduleNavigation(t, n, r, { replaceUrl: !0 });
              }, 0);
            }));
        }
        get url() {
          return this.serializeUrl(this.currentUrlTree);
        }
        getCurrentNavigation() {
          return this.currentNavigation;
        }
        triggerEvent(e) {
          this.events.next(e);
        }
        resetConfig(e) {
          cc(e), (this.config = e.map(pc)), (this.navigated = !1), (this.lastSuccessfulId = -1);
        }
        ngOnDestroy() {
          this.dispose();
        }
        dispose() {
          this.locationSubscription &&
            (this.locationSubscription.unsubscribe(), (this.locationSubscription = null));
        }
        createUrlTree(e, t = {}) {
          const {
            relativeTo: n,
            queryParams: r,
            fragment: i,
            preserveQueryParams: o,
            queryParamsHandling: s,
            preserveFragment: l,
          } = t;
          Qe() &&
            o &&
            console &&
            console.warn &&
            console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
          const a = n || this.routerState.root,
            u = l ? this.currentUrlTree.fragment : i;
          let c = null;
          if (s)
            switch (s) {
              case 'merge':
                c = Object.assign({}, this.currentUrlTree.queryParams, r);
                break;
              case 'preserve':
                c = this.currentUrlTree.queryParams;
                break;
              default:
                c = r || null;
            }
          else c = o ? this.currentUrlTree.queryParams : r || null;
          return (
            null !== c && (c = this.removeEmptyProps(c)),
            (function (e, t, n, r, i) {
              if (0 === n.length) return nh(t.root, t.root, t, r, i);
              const o = (function (e) {
                if ('string' == typeof e[0] && 1 === e.length && '/' === e[0])
                  return new rh(!0, 0, e);
                let t = 0,
                  n = !1;
                const r = e.reduce((e, r, i) => {
                  if ('object' == typeof r && null != r) {
                    if (r.outlets) {
                      const t = {};
                      return (
                        vc(r.outlets, (e, n) => {
                          t[n] = 'string' == typeof e ? e.split('/') : e;
                        }),
                        [...e, { outlets: t }]
                      );
                    }
                    if (r.segmentPath) return [...e, r.segmentPath];
                  }
                  return 'string' != typeof r
                    ? [...e, r]
                    : 0 === i
                    ? (r.split('/').forEach((r, i) => {
                        (0 == i && '.' === r) ||
                          (0 == i && '' === r ? (n = !0) : '..' === r ? t++ : '' != r && e.push(r));
                      }),
                      e)
                    : [...e, r];
                }, []);
                return new rh(n, t, r);
              })(n);
              if (o.toRoot()) return nh(t.root, new wc([], {}), t, r, i);
              const s = (function (e, t, n) {
                  if (e.isAbsolute) return new ih(t.root, !0, 0);
                  if (-1 === n.snapshot._lastPathIndex)
                    return new ih(n.snapshot._urlSegment, !0, 0);
                  const r = th(e.commands[0]) ? 0 : 1;
                  return (function (e, t, n) {
                    let r = e,
                      i = t,
                      o = n;
                    for (; o > i; ) {
                      if (((o -= i), (r = r.parent), !r))
                        throw new Error("Invalid number of '../'");
                      i = r.segments.length;
                    }
                    return new ih(r, !1, i - o);
                  })(n.snapshot._urlSegment, n.snapshot._lastPathIndex + r, e.numberOfDoubleDots);
                })(o, t, e),
                l = s.processChildren
                  ? lh(s.segmentGroup, s.index, o.commands)
                  : sh(s.segmentGroup, s.index, o.commands);
              return nh(s.segmentGroup, l, t, r, i);
            })(a, this.currentUrlTree, e, c, u)
          );
        }
        navigateByUrl(e, t = { skipLocationChange: !1 }) {
          Qe() &&
            this.isNgZoneEnabled &&
            !Zi.isInAngularZone() &&
            this.console.warn(
              "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
            );
          const n = gh(e) ? e : this.parseUrl(e),
            r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
          return this.scheduleNavigation(r, 'imperative', null, t);
        }
        navigate(e, t = { skipLocationChange: !1 }) {
          return (
            (function (e) {
              for (let t = 0; t < e.length; t++) {
                const n = e[t];
                if (null == n)
                  throw new Error(`The requested path contains ${n} segment at index ${t}`);
              }
            })(e),
            this.navigateByUrl(this.createUrlTree(e, t), t)
          );
        }
        serializeUrl(e) {
          return this.urlSerializer.serialize(e);
        }
        parseUrl(e) {
          let t;
          try {
            t = this.urlSerializer.parse(e);
          } catch (n) {
            t = this.malformedUriErrorHandler(n, this.urlSerializer, e);
          }
          return t;
        }
        isActive(e, t) {
          if (gh(e)) return bc(this.currentUrlTree, e, t);
          const n = this.parseUrl(e);
          return bc(this.currentUrlTree, n, t);
        }
        removeEmptyProps(e) {
          return Object.keys(e).reduce((t, n) => {
            const r = e[n];
            return null != r && (t[n] = r), t;
          }, {});
        }
        processNavigations() {
          this.navigations.subscribe(
            (e) => {
              (this.navigated = !0),
                (this.lastSuccessfulId = e.id),
                this.events.next(
                  new zu(
                    e.id,
                    this.serializeUrl(e.extractedUrl),
                    this.serializeUrl(this.currentUrlTree)
                  )
                ),
                (this.lastSuccessfulNavigation = this.currentNavigation),
                (this.currentNavigation = null),
                e.resolve(!0);
            },
            (e) => {
              this.console.warn('Unhandled Navigation Error: ');
            }
          );
        }
        scheduleNavigation(e, t, n, r) {
          const i = this.getTransition();
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
          let o = null,
            s = null;
          const l = new Promise((e, t) => {
              (o = e), (s = t);
            }),
            a = ++this.navigationId;
          return (
            this.setTransition({
              id: a,
              source: t,
              restoredState: n,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.rawUrlTree,
              rawUrl: e,
              extras: r,
              resolve: o,
              reject: s,
              promise: l,
              currentSnapshot: this.routerState.snapshot,
              currentRouterState: this.routerState,
            }),
            l.catch((e) => Promise.reject(e))
          );
        }
        setBrowserUrl(e, t, n, r) {
          const i = this.urlSerializer.serialize(e);
          (r = r || {}),
            this.location.isCurrentPathEqualTo(i) || t
              ? this.location.replaceState(i, '', Object.assign({}, r, { navigationId: n }))
              : this.location.go(i, '', Object.assign({}, r, { navigationId: n }));
        }
        resetStateAndUrl(e, t, n) {
          (this.routerState = e),
            (this.currentUrlTree = t),
            (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n)),
            this.resetUrlToCurrentUrlTree();
        }
        resetUrlToCurrentUrlTree() {
          this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), '', {
            navigationId: this.lastSuccessfulId,
          });
        }
      }
      class id {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new od()),
            (this.attachRef = null);
        }
      }
      class od {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(e, t) {
          const n = this.getOrCreateContext(e);
          (n.outlet = t), this.contexts.set(e, n);
        }
        onChildOutletDestroyed(e) {
          const t = this.getContext(e);
          t && (t.outlet = null);
        }
        onOutletDeactivated() {
          const e = this.contexts;
          return (this.contexts = new Map()), e;
        }
        onOutletReAttached(e) {
          this.contexts = e;
        }
        getOrCreateContext(e) {
          let t = this.getContext(e);
          return t || ((t = new id()), this.contexts.set(e, t)), t;
        }
        getContext(e) {
          return this.contexts.get(e) || null;
        }
      }
      class sd {
        constructor(e, t, n, r, i) {
          (this.parentContexts = e),
            (this.location = t),
            (this.resolver = n),
            (this.changeDetector = i),
            (this.activated = null),
            (this._activatedRoute = null),
            (this.activateEvents = new bi()),
            (this.deactivateEvents = new bi()),
            (this.name = r || 'primary'),
            e.onChildOutletCreated(this.name, this);
        }
        ngOnDestroy() {
          this.parentContexts.onChildOutletDestroyed(this.name);
        }
        ngOnInit() {
          if (!this.activated) {
            const e = this.parentContexts.getContext(this.name);
            e &&
              e.route &&
              (e.attachRef
                ? this.attach(e.attachRef, e.route)
                : this.activateWith(e.route, e.resolver || null));
          }
        }
        get isActivated() {
          return !!this.activated;
        }
        get component() {
          if (!this.activated) throw new Error('Outlet is not activated');
          return this.activated.instance;
        }
        get activatedRoute() {
          if (!this.activated) throw new Error('Outlet is not activated');
          return this._activatedRoute;
        }
        get activatedRouteData() {
          return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
        }
        detach() {
          if (!this.activated) throw new Error('Outlet is not activated');
          this.location.detach();
          const e = this.activated;
          return (this.activated = null), (this._activatedRoute = null), e;
        }
        attach(e, t) {
          (this.activated = e), (this._activatedRoute = t), this.location.insert(e.hostView);
        }
        deactivate() {
          if (this.activated) {
            const e = this.component;
            this.activated.destroy(),
              (this.activated = null),
              (this._activatedRoute = null),
              this.deactivateEvents.emit(e);
          }
        }
        activateWith(e, t) {
          if (this.isActivated) throw new Error('Cannot activate an already activated outlet');
          this._activatedRoute = e;
          const n = (t = t || this.resolver).resolveComponentFactory(
              e._futureSnapshot.routeConfig.component
            ),
            r = this.parentContexts.getOrCreateContext(this.name).children,
            i = new ld(e, r, this.location.injector);
          (this.activated = this.location.createComponent(n, this.location.length, i)),
            this.changeDetector.markForCheck(),
            this.activateEvents.emit(this.activated.instance);
        }
      }
      class ld {
        constructor(e, t, n) {
          (this.route = e), (this.childContexts = t), (this.parent = n);
        }
        get(e, t) {
          return e === Wc ? this.route : e === od ? this.childContexts : this.parent.get(e, t);
        }
      }
      class ad {}
      class ud {
        preload(e, t) {
          return t().pipe(_a(() => Gl(null)));
        }
      }
      class cd {
        preload(e, t) {
          return Gl(null);
        }
      }
      class hd {
        constructor(e, t, n, r, i) {
          (this.router = e),
            (this.injector = r),
            (this.preloadingStrategy = i),
            (this.loader = new Yh(
              t,
              n,
              (t) => e.triggerEvent(new Yu(t)),
              (t) => e.triggerEvent(new Ju(t))
            ));
        }
        setUpPreloading() {
          this.subscription = this.router.events
            .pipe(
              ta((e) => e instanceof zu),
              Va(() => this.preload())
            )
            .subscribe(() => {});
        }
        preload() {
          const e = this.injector.get(qt);
          return this.processRoutes(e, this.router.config);
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
        processRoutes(e, t) {
          const n = [];
          for (const r of t)
            if (r.loadChildren && !r.canLoad && r._loadedConfig) {
              const e = r._loadedConfig;
              n.push(this.processRoutes(e.module, e.routes));
            } else
              r.loadChildren && !r.canLoad
                ? n.push(this.preloadConfig(e, r))
                : r.children && n.push(this.processRoutes(e, r.children));
          return G(n).pipe(
            Y(),
            H((e) => {})
          );
        }
        preloadConfig(e, t) {
          return this.preloadingStrategy.preload(t, () =>
            this.loader
              .load(e.injector, t)
              .pipe(W((e) => ((t._loadedConfig = e), this.processRoutes(e.module, e.routes))))
          );
        }
      }
      class dd {
        constructor(e, t, n = {}) {
          (this.router = e),
            (this.viewportScroller = t),
            (this.options = n),
            (this.lastId = 0),
            (this.lastSource = 'imperative'),
            (this.restoredId = 0),
            (this.store = {}),
            (n.scrollPositionRestoration = n.scrollPositionRestoration || 'disabled'),
            (n.anchorScrolling = n.anchorScrolling || 'disabled');
        }
        init() {
          'disabled' !== this.options.scrollPositionRestoration &&
            this.viewportScroller.setHistoryScrollRestoration('manual'),
            (this.routerEventsSubscription = this.createScrollEvents()),
            (this.scrollEventsSubscription = this.consumeScrollEvents());
        }
        createScrollEvents() {
          return this.router.events.subscribe((e) => {
            e instanceof Hu
              ? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
                (this.lastSource = e.navigationTrigger),
                (this.restoredId = e.restoredState ? e.restoredState.navigationId : 0))
              : e instanceof zu &&
                ((this.lastId = e.id),
                this.scheduleScrollEvent(e, this.router.parseUrl(e.urlAfterRedirects).fragment));
          });
        }
        consumeScrollEvents() {
          return this.router.events.subscribe((e) => {
            e instanceof rc &&
              (e.position
                ? 'top' === this.options.scrollPositionRestoration
                  ? this.viewportScroller.scrollToPosition([0, 0])
                  : 'enabled' === this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition(e.position)
                : e.anchor && 'enabled' === this.options.anchorScrolling
                ? this.viewportScroller.scrollToAnchor(e.anchor)
                : 'disabled' !== this.options.scrollPositionRestoration &&
                  this.viewportScroller.scrollToPosition([0, 0]));
          });
        }
        scheduleScrollEvent(e, t) {
          this.router.triggerEvent(
            new rc(e, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, t)
          );
        }
        ngOnDestroy() {
          this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(),
            this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
        }
      }
      const pd = new Ee('ROUTER_CONFIGURATION'),
        fd = new Ee('ROUTER_FORROOT_GUARD'),
        gd = [
          ll,
          { provide: Ec, useClass: Tc },
          {
            provide: rd,
            useFactory: Cd,
            deps: [po, Ec, od, ll, Le, go, Li, Qh, pd, [Jh, new ae()], [Zh, new ae()]],
          },
          od,
          { provide: Wc, useFactory: xd, deps: [rd] },
          { provide: go, useClass: _o },
          hd,
          cd,
          ud,
          { provide: pd, useValue: { enableTracing: !1 } },
        ];
      function md() {
        return new lo('Router', rd);
      }
      class vd {
        constructor(e, t) {}
        static forRoot(e, t) {
          return {
            ngModule: vd,
            providers: [
              gd,
              wd(e),
              { provide: fd, useFactory: yd, deps: [[rd, new ae(), new ce()]] },
              { provide: pd, useValue: t || {} },
              { provide: ol, useFactory: bd, deps: [rl, [new le(sl), new ae()], pd] },
              { provide: dd, useFactory: _d, deps: [rd, jl, pd] },
              { provide: ad, useExisting: t && t.preloadingStrategy ? t.preloadingStrategy : cd },
              { provide: lo, multi: !0, useFactory: md },
              [
                Sd,
                { provide: Ci, multi: !0, useFactory: Ed, deps: [Sd] },
                { provide: Pd, useFactory: Td, deps: [Sd] },
                { provide: Ai, multi: !0, useExisting: Pd },
              ],
            ],
          };
        }
        static forChild(e) {
          return { ngModule: vd, providers: [wd(e)] };
        }
      }
      function _d(e, t, n) {
        return n.scrollOffset && t.setOffset(n.scrollOffset), new dd(e, t, n);
      }
      function bd(e, t, n = {}) {
        return n.useHash ? new ul(e, t) : new cl(e, t);
      }
      function yd(e) {
        if (e)
          throw new Error(
            'RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.'
          );
        return 'guarded';
      }
      function wd(e) {
        return [
          { provide: qe, multi: !0, useValue: e },
          { provide: Qh, multi: !0, useValue: e },
        ];
      }
      function Cd(e, t, n, r, i, o, s, l, a = {}, u, c) {
        const h = new rd(null, t, n, r, i, o, s, gc(l));
        if (
          (u && (h.urlHandlingStrategy = u),
          c && (h.routeReuseStrategy = c),
          a.errorHandler && (h.errorHandler = a.errorHandler),
          a.malformedUriErrorHandler && (h.malformedUriErrorHandler = a.malformedUriErrorHandler),
          a.enableTracing)
        ) {
          const e = La();
          h.events.subscribe((t) => {
            e.logGroup('Router Event: ' + t.constructor.name),
              e.log(t.toString()),
              e.log(t),
              e.logGroupEnd();
          });
        }
        return (
          a.onSameUrlNavigation && (h.onSameUrlNavigation = a.onSameUrlNavigation),
          a.paramsInheritanceStrategy &&
            (h.paramsInheritanceStrategy = a.paramsInheritanceStrategy),
          a.urlUpdateStrategy && (h.urlUpdateStrategy = a.urlUpdateStrategy),
          a.relativeLinkResolution && (h.relativeLinkResolution = a.relativeLinkResolution),
          h
        );
      }
      function xd(e) {
        return e.routerState.root;
      }
      class Sd {
        constructor(e) {
          (this.injector = e),
            (this.initNavigation = !1),
            (this.resultOfPreactivationDone = new P());
        }
        appInitializer() {
          return this.injector.get(il, Promise.resolve(null)).then(() => {
            let e = null;
            const t = new Promise((t) => (e = t)),
              n = this.injector.get(rd),
              r = this.injector.get(pd);
            if (this.isLegacyDisabled(r) || this.isLegacyEnabled(r)) e(!0);
            else if ('disabled' === r.initialNavigation) n.setUpLocationChangeListener(), e(!0);
            else {
              if ('enabled' !== r.initialNavigation)
                throw new Error(`Invalid initialNavigation options: '${r.initialNavigation}'`);
              (n.hooks.afterPreactivation = () =>
                this.initNavigation
                  ? Gl(null)
                  : ((this.initNavigation = !0), e(!0), this.resultOfPreactivationDone)),
                n.initialNavigation();
            }
            return t;
          });
        }
        bootstrapListener(e) {
          const t = this.injector.get(pd),
            n = this.injector.get(hd),
            r = this.injector.get(dd),
            i = this.injector.get(rd),
            o = this.injector.get(po);
          e === o.components[0] &&
            (this.isLegacyEnabled(t)
              ? i.initialNavigation()
              : this.isLegacyDisabled(t) && i.setUpLocationChangeListener(),
            n.setUpPreloading(),
            r.init(),
            i.resetRootComponentType(o.componentTypes[0]),
            this.resultOfPreactivationDone.next(null),
            this.resultOfPreactivationDone.complete());
        }
        isLegacyEnabled(e) {
          return (
            'legacy_enabled' === e.initialNavigation ||
            !0 === e.initialNavigation ||
            void 0 === e.initialNavigation
          );
        }
        isLegacyDisabled(e) {
          return 'legacy_disabled' === e.initialNavigation || !1 === e.initialNavigation;
        }
      }
      function Ed(e) {
        return e.appInitializer.bind(e);
      }
      function Td(e) {
        return e.bootstrapListener.bind(e);
      }
      const Pd = new Ee('Router Initializer');
      var Rd = $n({ encapsulation: 2, styles: [], data: {} });
      function Ad(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            Kr(1, 212992, null, 0, sd, [od, xn, Ht, [8, null], mn], null, null),
          ],
          function (e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      function Dd(e) {
        return Zo(
          0,
          [
            (e()(), Oo(0, 0, null, null, 1, 'ng-component', [], null, null, null, Ad, Rd)),
            Kr(1, 49152, null, 0, ic, [], null, null),
          ],
          null,
          null
        );
      }
      var Id = Er('ng-component', ic, Dd, {}, {}, []);
      class Od {
        constructor(e, t) {
          (this.open = e), (this.close = t || e);
        }
        isManual() {
          return 'manual' === this.open || 'manual' === this.close;
        }
      }
      const Vd = { hover: ['mouseover', 'mouseout'], focus: ['focusin', 'focusout'] };
      function kd(e, t = Vd) {
        const n = (e || '').trim();
        if (0 === n.length) return [];
        const r = n
            .split(/\s+/)
            .map((e) => e.split(':'))
            .map((e) => {
              const n = t[e[0]] || e;
              return new Od(n[0], n[1]);
            }),
          i = r.filter((e) => e.isManual());
        if (i.length > 1)
          throw new Error('Triggers parse error: only one manual trigger is allowed');
        if (1 === i.length && r.length > 1)
          throw new Error(
            "Triggers parse error: manual trigger can't be mixed with other triggers"
          );
        return r;
      }
      const Md = ('undefined' != typeof window && window) || {};
      let Nd;
      const Ld = {},
        Fd = 'undefined' == typeof console || !('warn' in console);
      function Ud(e) {
        !Qe() || Fd || e in Ld || ((Ld[e] = !0), console.warn(e));
      }
      function $d(e, t) {
        if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      class jd {
        constructor(e, t, n) {
          (this.nodes = e), (this.viewRef = t), (this.componentRef = n);
        }
      }
      class Hd {
        constructor(e, t, n, r, i, o, s, l) {
          (this._viewContainerRef = e),
            (this._renderer = t),
            (this._elementRef = n),
            (this._injector = r),
            (this._componentFactoryResolver = i),
            (this._ngZone = o),
            (this._applicationRef = s),
            (this._posService = l),
            (this.onBeforeShow = new bi()),
            (this.onShown = new bi()),
            (this.onBeforeHide = new bi()),
            (this.onHidden = new bi()),
            (this._providers = []),
            (this._isHiding = !1),
            (this.containerDefaultSelector = 'body'),
            (this._listenOpts = {}),
            (this._globalListener = Function.prototype);
        }
        get isShown() {
          return !this._isHiding && !!this._componentRef;
        }
        attach(e) {
          return (
            (this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(e)),
            this
          );
        }
        to(e) {
          return (this.container = e || this.container), this;
        }
        position(e) {
          return (
            (this.attachment = e.attachment || this.attachment),
            (this._elementRef = e.target || this._elementRef),
            this
          );
        }
        provide(e) {
          return this._providers.push(e), this;
        }
        show(e = {}) {
          if ((this._subscribePositioning(), (this._innerComponent = null), !this._componentRef)) {
            this.onBeforeShow.emit(),
              (this._contentRef = this._getContentRef(e.content, e.context, e.initialState));
            const t = Le.create({ providers: this._providers, parent: this._injector });
            (this._componentRef = this._componentFactory.create(t, this._contentRef.nodes)),
              this._applicationRef.attachView(this._componentRef.hostView),
              (this.instance = this._componentRef.instance),
              Object.assign(this._componentRef.instance, e),
              this.container instanceof Zt &&
                this.container.nativeElement.appendChild(this._componentRef.location.nativeElement),
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
        }
        hide() {
          if (!this._componentRef) return this;
          this._posService.deletePositionElement(this._componentRef.location),
            this.onBeforeHide.emit(this._componentRef.instance);
          const e = this._componentRef.location.nativeElement;
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
        }
        toggle() {
          this.isShown ? this.hide() : this.show();
        }
        dispose() {
          this.isShown && this.hide(),
            this._unsubscribePositioning(),
            this._unregisterListenersFn && this._unregisterListenersFn();
        }
        listen(e) {
          (this.triggers = e.triggers || this.triggers),
            (this._listenOpts.outsideClick = e.outsideClick),
            (this._listenOpts.outsideEsc = e.outsideEsc),
            (e.target = e.target || this._elementRef.nativeElement);
          const t = (this._listenOpts.hide = () => (e.hide ? e.hide() : void this.hide())),
            n = (this._listenOpts.show = (t) => {
              e.show ? e.show(t) : this.show(t), t();
            });
          return (
            (this._unregisterListenersFn = (function (e, t) {
              const n = kd(t.triggers),
                r = t.target;
              if (1 === n.length && n[0].isManual()) return Function.prototype;
              const i = [],
                o = [],
                s = () => {
                  o.forEach((e) => i.push(e())), (o.length = 0);
                };
              return (
                n.forEach((n) => {
                  const l = n.open === n.close,
                    a = l ? t.toggle : t.show;
                  l || o.push(() => e.listen(r, n.close, t.hide)),
                    i.push(e.listen(r, n.open, () => a(s)));
                }),
                () => {
                  i.forEach((e) => e());
                }
              );
            })(this._renderer, {
              target: e.target,
              triggers: e.triggers,
              show: n,
              hide: t,
              toggle: (e) => {
                this.isShown ? t() : n(e);
              },
            })),
            this
          );
        }
        _removeGlobalListener() {
          this._globalListener && (this._globalListener(), (this._globalListener = null));
        }
        attachInline(e, t) {
          return (this._inlineViewRef = e.createEmbeddedView(t)), this;
        }
        _registerOutsideClick() {
          if (this._componentRef && this._componentRef.location) {
            if (this._listenOpts.outsideClick) {
              const e = this._componentRef.location.nativeElement;
              setTimeout(() => {
                var t;
                this._globalListener = (t = {
                  targets: [e, this._elementRef.nativeElement],
                  outsideClick: this._listenOpts.outsideClick,
                  hide: () => this._listenOpts.hide(),
                }).outsideClick
                  ? this._renderer.listen('document', 'click', (e) => {
                      (t.target && t.target.contains(e.target)) ||
                        (t.targets && t.targets.some((t) => t.contains(e.target))) ||
                        t.hide();
                    })
                  : Function.prototype;
              });
            }
            var e;
            this._listenOpts.outsideEsc &&
              (this._globalListener = (e = {
                targets: [
                  this._componentRef.location.nativeElement,
                  this._elementRef.nativeElement,
                ],
                outsideEsc: this._listenOpts.outsideEsc,
                hide: () => this._listenOpts.hide(),
              }).outsideEsc
                ? this._renderer.listen('document', 'keyup.esc', (t) => {
                    (e.target && e.target.contains(t.target)) ||
                      (e.targets && e.targets.some((e) => e.contains(t.target))) ||
                      e.hide();
                  })
                : Function.prototype);
          }
        }
        getInnerComponent() {
          return this._innerComponent;
        }
        _subscribePositioning() {
          !this._zoneSubscription &&
            this.attachment &&
            (this.onShown.subscribe(() => {
              this._posService.position({
                element: this._componentRef.location,
                target: this._elementRef,
                attachment: this.attachment,
                appendToBody: 'body' === this.container,
              });
            }),
            (this._zoneSubscription = this._ngZone.onStable.subscribe(() => {
              this._componentRef && this._posService.calcPosition();
            })));
        }
        _unsubscribePositioning() {
          this._zoneSubscription &&
            (this._zoneSubscription.unsubscribe(), (this._zoneSubscription = null));
        }
        _getContentRef(e, t, n) {
          if (!e) return new jd([]);
          if (e instanceof wn) {
            if (this._viewContainerRef) {
              const n = this._viewContainerRef.createEmbeddedView(e, t);
              return n.markForCheck(), new jd([n.rootNodes], n);
            }
            const n = e.createEmbeddedView({});
            return this._applicationRef.attachView(n), new jd([n.rootNodes], n);
          }
          if ('function' == typeof e) {
            const t = this._componentFactoryResolver.resolveComponentFactory(e),
              r = Le.create({ providers: this._providers, parent: this._injector }),
              i = t.create(r);
            return (
              Object.assign(i.instance, n),
              this._applicationRef.attachView(i.hostView),
              new jd([[i.location.nativeElement]], i.hostView, i)
            );
          }
          return new jd([[this._renderer.createText('' + e)]]);
        }
      }
      class zd {
        constructor(e, t, n, r, i) {
          (this._componentFactoryResolver = e),
            (this._ngZone = t),
            (this._injector = n),
            (this._posService = r),
            (this._applicationRef = i);
        }
        createLoader(e, t, n) {
          return new Hd(
            t,
            n,
            e,
            this._injector,
            this._componentFactoryResolver,
            this._ngZone,
            this._applicationRef,
            this._posService
          );
        }
      }
      function Bd(e, t, n, i) {
        return (
          r(n) && ((i = n), (n = void 0)),
          i
            ? Bd(e, t, n).pipe(H((e) => (a(e) ? i(...e) : i(e))))
            : new w((r) => {
                !(function e(t, n, r, i, o) {
                  let s;
                  if (
                    (function (e) {
                      return (
                        e &&
                        'function' == typeof e.addEventListener &&
                        'function' == typeof e.removeEventListener
                      );
                    })(t)
                  ) {
                    const e = t;
                    t.addEventListener(n, r, o), (s = () => e.removeEventListener(n, r, o));
                  } else if (
                    (function (e) {
                      return e && 'function' == typeof e.on && 'function' == typeof e.off;
                    })(t)
                  ) {
                    const e = t;
                    t.on(n, r), (s = () => e.off(n, r));
                  } else if (
                    (function (e) {
                      return (
                        e &&
                        'function' == typeof e.addListener &&
                        'function' == typeof e.removeListener
                      );
                    })(t)
                  ) {
                    const e = t;
                    t.addListener(n, r), (s = () => e.removeListener(n, r));
                  } else {
                    if (!t || !t.length) throw new TypeError('Invalid event target');
                    for (let s = 0, l = t.length; s < l; s++) e(t[s], n, r, i, o);
                  }
                  i.add(s);
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
      class qd extends d {
        constructor(e, t) {
          super();
        }
        schedule(e, t = 0) {
          return this;
        }
      }
      class Gd extends qd {
        constructor(e, t) {
          super(e, t), (this.scheduler = e), (this.work = t), (this.pending = !1);
        }
        schedule(e, t = 0) {
          if (this.closed) return this;
          this.state = e;
          const n = this.id,
            r = this.scheduler;
          return (
            null != n && (this.id = this.recycleAsyncId(r, n, t)),
            (this.pending = !0),
            (this.delay = t),
            (this.id = this.id || this.requestAsyncId(r, this.id, t)),
            this
          );
        }
        requestAsyncId(e, t, n = 0) {
          return setInterval(e.flush.bind(e, this), n);
        }
        recycleAsyncId(e, t, n = 0) {
          if (null !== n && this.delay === n && !1 === this.pending) return t;
          clearInterval(t);
        }
        execute(e, t) {
          if (this.closed) return new Error('executing a cancelled action');
          this.pending = !1;
          const n = this._execute(e, t);
          if (n) return n;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(e, t) {
          let n = !1,
            r = void 0;
          try {
            this.work(e);
          } catch (i) {
            (n = !0), (r = (!!i && i) || new Error(i));
          }
          if (n) return this.unsubscribe(), r;
        }
        _unsubscribe() {
          const e = this.id,
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
        }
      }
      class Wd extends Gd {
        constructor(e, t) {
          super(e, t), (this.scheduler = e), (this.work = t);
        }
        requestAsyncId(e, t, n = 0) {
          return null !== n && n > 0
            ? super.requestAsyncId(e, t, n)
            : (e.actions.push(this),
              e.scheduled || (e.scheduled = requestAnimationFrame(() => e.flush(null))));
        }
        recycleAsyncId(e, t, n = 0) {
          if ((null !== n && n > 0) || (null === n && this.delay > 0))
            return super.recycleAsyncId(e, t, n);
          0 === e.actions.length && (cancelAnimationFrame(t), (e.scheduled = void 0));
        }
      }
      let Zd = (() => {
        class e {
          constructor(t, n = e.now) {
            (this.SchedulerAction = t), (this.now = n);
          }
          schedule(e, t = 0, n) {
            return new this.SchedulerAction(this, e).schedule(n, t);
          }
        }
        return (e.now = () => Date.now()), e;
      })();
      class Kd extends Zd {
        constructor(e, t = Zd.now) {
          super(e, () => (Kd.delegate && Kd.delegate !== this ? Kd.delegate.now() : t())),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(e, t = 0, n) {
          return Kd.delegate && Kd.delegate !== this
            ? Kd.delegate.schedule(e, t, n)
            : super.schedule(e, t, n);
        }
        flush(e) {
          const { actions: t } = this;
          if (this.active) return void t.push(e);
          let n;
          this.active = !0;
          do {
            if ((n = e.execute(e.state, e.delay))) break;
          } while ((e = t.shift()));
          if (((this.active = !1), n)) {
            for (; (e = t.shift()); ) e.unsubscribe();
            throw n;
          }
        }
      }
      class Qd extends Kd {
        flush(e) {
          (this.active = !0), (this.scheduled = void 0);
          const { actions: t } = this;
          let n,
            r = -1,
            i = t.length;
          e = e || t.shift();
          do {
            if ((n = e.execute(e.state, e.delay))) break;
          } while (++r < i && (e = t.shift()));
          if (((this.active = !1), n)) {
            for (; ++r < i && (e = t.shift()); ) e.unsubscribe();
            throw n;
          }
        }
      }
      const Yd = new Qd(Wd);
      function Jd(e, t) {
        if (1 !== e.nodeType) return [];
        const n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n;
      }
      function Xd(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
      }
      function ep(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
          case 'HTML':
          case 'BODY':
            return e.ownerDocument.body;
          case '#document':
            return e.body;
        }
        const { overflow: t, overflowX: n, overflowY: r } = Jd(e);
        return /(auto|scroll|overlay)/.test(String(t) + String(r) + String(n)) ? e : ep(Xd(e));
      }
      const tp = 'undefined' != typeof window && 'undefined' != typeof document,
        np = tp && !(!window.MSInputMethodContext || !document.documentMode),
        rp = tp && !(!window.MSInputMethodContext || !/MSIE 10/.test(navigator.userAgent));
      function ip(e) {
        return 11 === e ? np : 10 === e ? rp : np || rp;
      }
      function op(e) {
        if (!e) return document.documentElement;
        const t = ip(10) ? document.body : null;
        let n,
          r = e.offsetParent || null;
        for (; r === t && e.nextElementSibling && n !== e.nextElementSibling; )
          (n = e.nextElementSibling), (r = n.offsetParent);
        const i = r && r.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i
          ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(r.nodeName) && 'static' === Jd(r, 'position')
            ? op(r)
            : r
          : n
          ? n.ownerDocument.documentElement
          : document.documentElement;
      }
      function sp(e) {
        return null !== e.parentNode ? sp(e.parentNode) : e;
      }
      function lp(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        const n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
          r = n ? e : t,
          i = n ? t : e,
          o = document.createRange();
        o.setStart(r, 0), o.setEnd(i, 0);
        const { commonAncestorContainer: s } = o;
        if ((e !== s && t !== s) || r.contains(i))
          return (function (e) {
            const { nodeName: t } = e;
            return 'BODY' !== t && ('HTML' === t || op(e.firstElementChild) === e);
          })(s)
            ? s
            : op(s);
        const l = sp(e);
        return l.host ? lp(l.host, t) : lp(e, sp(t).host);
      }
      function ap(e, t) {
        const n = 'x' === t ? 'Left' : 'Top',
          r = 'Left' === n ? 'Right' : 'Bottom';
        return parseFloat(e[`border${n}Width`]) + parseFloat(e[`border${r}Width`]);
      }
      function up(e, t, n, r) {
        return Math.max(
          t['offset' + e],
          t['scroll' + e],
          n['client' + e],
          n['offset' + e],
          n['scroll' + e],
          ip(10)
            ? parseInt(n['offset' + e], 10) +
                parseInt(r['margin' + ('Height' === e ? 'Top' : 'Left')], 10) +
                parseInt(r['margin' + ('Height' === e ? 'Bottom' : 'Right')], 10)
            : 0
        );
      }
      function cp(e) {
        const t = e.body,
          n = e.documentElement,
          r = ip(10) && getComputedStyle(n);
        return { height: up('Height', t, n, r), width: up('Width', t, n, r) };
      }
      function hp(e, t = 'top') {
        const n = 'top' === t ? 'scrollTop' : 'scrollLeft',
          r = e.nodeName;
        if ('BODY' === r || 'HTML' === r) {
          const t = e.ownerDocument.documentElement;
          return (e.ownerDocument.scrollingElement || t)[n];
        }
        return e[n];
      }
      function dp(e) {
        return Object.assign({}, e, { right: e.left + e.width, bottom: e.top + e.height });
      }
      function pp(e) {
        let t = {};
        try {
          if (ip(10)) {
            t = e.getBoundingClientRect();
            const n = hp(e, 'top'),
              r = hp(e, 'left');
            (t.top += n), (t.left += r), (t.bottom += n), (t.right += r);
          } else t = e.getBoundingClientRect();
        } catch (s) {
          return;
        }
        const n = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
          r = 'HTML' === e.nodeName ? cp(e.ownerDocument) : {};
        let i = e.offsetWidth - (r.width || e.clientWidth || n.right - n.left),
          o = e.offsetHeight - (r.height || e.clientHeight || n.bottom - n.top);
        if (i || o) {
          const t = Jd(e);
          (i -= ap(t, 'x')), (o -= ap(t, 'y')), (n.width -= i), (n.height -= o);
        }
        return dp(n);
      }
      function fp(e, t, n = !1) {
        const r = ip(10),
          i = 'HTML' === t.nodeName,
          o = pp(e),
          s = pp(t),
          l = ep(e),
          a = Jd(t),
          u = parseFloat(a.borderTopWidth),
          c = parseFloat(a.borderLeftWidth);
        n && i && ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
        let h = dp({
          top: o.top - s.top - u,
          left: o.left - s.left - c,
          width: o.width,
          height: o.height,
        });
        if (((h.marginTop = 0), (h.marginLeft = 0), !r && i)) {
          const e = parseFloat(a.marginTop),
            t = parseFloat(a.marginLeft);
          (h.top -= u - e),
            (h.bottom -= u - e),
            (h.left -= c - t),
            (h.right -= c - t),
            (h.marginTop = e),
            (h.marginLeft = t);
        }
        return (
          (r && !n ? t.contains(l) : t === l && 'BODY' !== l.nodeName) &&
            (h = (function (e, t, n = !1) {
              const r = hp(t, 'top'),
                i = hp(t, 'left'),
                o = n ? -1 : 1;
              return (
                (e.top += r * o), (e.bottom += r * o), (e.left += i * o), (e.right += i * o), e
              );
            })(h, t)),
          h
        );
      }
      function gp(e) {
        if (!e || !e.parentElement || ip()) return document.documentElement;
        let t = e.parentElement;
        for (; t && 'none' === Jd(t, 'transform'); ) t = t.parentElement;
        return t || document.documentElement;
      }
      function mp(e, t, n = 0, r, i = !1) {
        let o = { top: 0, left: 0 };
        const s = i ? gp(e) : lp(e, t);
        if ('viewport' === r)
          o = (function (e, t = !1) {
            const n = e.ownerDocument.documentElement,
              r = fp(e, n),
              i = Math.max(n.clientWidth, window.innerWidth || 0),
              o = Math.max(n.clientHeight, window.innerHeight || 0),
              s = t ? 0 : hp(n),
              l = t ? 0 : hp(n, 'left');
            return dp({
              top: s - Number(r.top) + Number(r.marginTop),
              left: l - Number(r.left) + Number(r.marginLeft),
              width: i,
              height: o,
            });
          })(s, i);
        else {
          let n;
          'scrollParent' === r
            ? ((n = ep(Xd(t))), 'BODY' === n.nodeName && (n = e.ownerDocument.documentElement))
            : (n = 'window' === r ? e.ownerDocument.documentElement : r);
          const l = fp(n, s, i);
          if (
            'HTML' !== n.nodeName ||
            (function e(t) {
              const n = t.nodeName;
              return 'BODY' !== n && 'HTML' !== n && ('fixed' === Jd(t, 'position') || e(Xd(t)));
            })(s)
          )
            o = l;
          else {
            const { height: t, width: n } = cp(e.ownerDocument);
            (o.top += l.top - l.marginTop),
              (o.bottom = Number(t) + Number(l.top)),
              (o.left += l.left - l.marginLeft),
              (o.right = Number(n) + Number(l.left));
          }
        }
        return (o.left += n), (o.top += n), (o.right -= n), (o.bottom -= n), o;
      }
      function vp({ width: e, height: t }) {
        return e * t;
      }
      function _p(e, t, n, r, i = ['top', 'bottom', 'right', 'left'], o = 'viewport', s = 0) {
        if (-1 === e.indexOf('auto')) return e;
        const l = mp(n, r, s, o),
          a = {
            top: { width: l.width, height: t.top - l.top },
            right: { width: l.right - t.right, height: l.height },
            bottom: { width: l.width, height: l.bottom - t.bottom },
            left: { width: t.left - l.left, height: l.height },
          },
          u = Object.keys(a)
            .map((e) => Object.assign({ key: e }, a[e], { area: vp(a[e]) }))
            .sort((e, t) => t.area - e.area);
        let c = u.filter(({ width: e, height: t }) => e >= n.clientWidth && t >= n.clientHeight);
        c = c.filter((e) => i.some((t) => t === e.key));
        const h = c.length > 0 ? c[0].key : u[0].key,
          d = e.split(' ')[1];
        return (
          (n.className = n.className.replace(/bs-tooltip-auto/g, 'bs-tooltip-' + h)),
          h + (d ? '-' + d : '')
        );
      }
      function bp(e) {
        const t = e.ownerDocument.defaultView.getComputedStyle(e),
          n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
          r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return { width: Number(e.offsetWidth) + r, height: Number(e.offsetHeight) + n };
      }
      function yp(e, t, n = null) {
        return fp(t, n ? gp(e) : lp(e, t), n);
      }
      function wp(e, t, n) {
        const r = n.split(' ')[0],
          i = bp(e),
          o = { width: i.width, height: i.height },
          s = -1 !== ['right', 'left'].indexOf(r),
          l = s ? 'top' : 'left',
          a = s ? 'left' : 'top',
          u = s ? 'height' : 'width',
          c = s ? 'width' : 'height';
        return (
          (o[l] = t[l] + t[u] / 2 - i[u] / 2),
          (o[a] =
            r === a
              ? t[a] - i[c]
              : t[
                  (function (e) {
                    const t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
                    return e.replace(/left|right|bottom|top/g, (e) => t[e]);
                  })(a)
                ]),
          o
        );
      }
      function Cp(e, t) {
        return e && e.modifiers && e.modifiers[t] && e.modifiers[t].enabled;
      }
      function xp(e, t, n) {
        Object.keys(t).forEach((r) => {
          let i = '';
          var o;
          -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(r) &&
            '' !== (o = t[r]) &&
            !isNaN(parseFloat(o)) &&
            isFinite(o) &&
            (i = 'px'),
            n ? n.setStyle(e, r, `${String(t[r])}${i}`) : (e.style[r] = String(t[r]) + i);
        });
      }
      function Sp(e) {
        let t = e.offsets.target;
        const n = e.instance.target.querySelector('.arrow');
        if (!n) return e;
        const r = -1 !== ['left', 'right'].indexOf(e.placement.split(' ')[0]),
          i = r ? 'height' : 'width',
          o = r ? 'Top' : 'Left',
          s = o.toLowerCase(),
          l = r ? 'left' : 'top',
          a = r ? 'bottom' : 'right',
          u = bp(n)[i],
          c = e.placement.split(' ')[1];
        e.offsets.host[a] - u < t[s] && (t[s] -= t[s] - (e.offsets.host[a] - u)),
          Number(e.offsets.host[s]) + Number(u) > t[a] &&
            (t[s] += Number(e.offsets.host[s]) + Number(u) - Number(t[a])),
          (t = dp(t));
        const h = Jd(e.instance.target),
          d = parseFloat(h['margin' + o]),
          p = parseFloat(h[`border${o}Width`]);
        let f;
        if (c) {
          const t = parseFloat(h.borderRadius),
            n = Number(d + p + t);
          f =
            s === c
              ? Number(e.offsets.host[s]) + n
              : Number(e.offsets.host[s]) + Number(e.offsets.host[i] - n);
        } else f = Number(e.offsets.host[s]) + Number(e.offsets.host[i] / 2 - u / 2);
        let g = f - t[s] - d - p;
        return (
          (g = Math.max(Math.min(t[i] - u, g), 0)),
          (e.offsets.arrow = { [s]: Math.round(g), [l]: '' }),
          (e.instance.arrow = n),
          e
        );
      }
      function Ep(e) {
        if (((e.offsets.target = dp(e.offsets.target)), !Cp(e.options, 'flip')))
          return (
            (e.offsets.target = Object.assign(
              {},
              e.offsets.target,
              wp(e.instance.target, e.offsets.host, e.placement)
            )),
            e
          );
        const t = mp(e.instance.target, e.instance.host, 0, 'viewport', !1);
        let n = e.placement.split(' ')[0],
          r = e.placement.split(' ')[1] || '';
        const i = _p(
            'auto',
            e.offsets.host,
            e.instance.target,
            e.instance.host,
            e.options.allowedPositions
          ),
          o = [n, i];
        return (
          o.forEach((i, s) => {
            if (n !== i || o.length === s + 1) return e;
            n = e.placement.split(' ')[0];
            const l =
                ('left' === n &&
                  Math.floor(e.offsets.target.right) > Math.floor(e.offsets.host.left)) ||
                ('right' === n &&
                  Math.floor(e.offsets.target.left) < Math.floor(e.offsets.host.right)) ||
                ('top' === n &&
                  Math.floor(e.offsets.target.bottom) > Math.floor(e.offsets.host.top)) ||
                ('bottom' === n &&
                  Math.floor(e.offsets.target.top) < Math.floor(e.offsets.host.bottom)),
              a = Math.floor(e.offsets.target.left) < Math.floor(t.left),
              u = Math.floor(e.offsets.target.right) > Math.floor(t.right),
              c = Math.floor(e.offsets.target.top) < Math.floor(t.top),
              h = Math.floor(e.offsets.target.bottom) > Math.floor(t.bottom),
              d =
                ('left' === n && a) ||
                ('right' === n && u) ||
                ('top' === n && c) ||
                ('bottom' === n && h),
              p = -1 !== ['top', 'bottom'].indexOf(n),
              f =
                (p && 'left' === r && a) ||
                (p && 'right' === r && u) ||
                (!p && 'left' === r && c) ||
                (!p && 'right' === r && h);
            (l || d || f) &&
              ((l || d) && (n = o[s + 1]),
              f &&
                (r = (function (e) {
                  return 'right' === e ? 'left' : 'left' === e ? 'right' : e;
                })(r)),
              (e.placement = n + (r ? ' ' + r : '')),
              (e.offsets.target = Object.assign(
                {},
                e.offsets.target,
                wp(e.instance.target, e.offsets.host, e.placement)
              )));
          }),
          e
        );
      }
      function Tp(e) {
        if (!Cp(e.options, 'preventOverflow')) return e;
        const t = 'transform',
          n = e.instance.target.style,
          { top: r, left: i, [t]: o } = n;
        (n.top = ''), (n.left = ''), (n[t] = '');
        const s = mp(e.instance.target, e.instance.host, 0, 'scrollParent', !1);
        (n.top = r), (n.left = i), (n[t] = o);
        const l = {
          primary(t) {
            let n = e.offsets.target[t];
            return (
              e.offsets.target[t] < s[t] && (n = Math.max(e.offsets.target[t], s[t])), { [t]: n }
            );
          },
          secondary(t) {
            const n = 'right' === t ? 'left' : 'top';
            let r = e.offsets.target[n];
            return (
              e.offsets.target[t] > s[t] &&
                (r = Math.min(
                  e.offsets.target[n],
                  s[t] - ('right' === t ? e.offsets.target.width : e.offsets.target.height)
                )),
              { [n]: r }
            );
          },
        };
        let a;
        return (
          ['left', 'right', 'top', 'bottom'].forEach((t) => {
            (a = -1 !== ['left', 'top'].indexOf(t) ? 'primary' : 'secondary'),
              (e.offsets.target = Object.assign({}, e.offsets.target, l[a](t)));
          }),
          e
        );
      }
      function Pp(e) {
        const t = e.placement,
          n = t.split(' ')[0],
          r = t.split(' ')[1];
        if (r) {
          const { host: t, target: i } = e.offsets,
            o = -1 !== ['bottom', 'top'].indexOf(n),
            s = o ? 'left' : 'top',
            l = o ? 'width' : 'height',
            a = { start: { [s]: t[s] }, end: { [s]: t[s] + t[l] - i[l] } };
          e.offsets.target = Object.assign({}, i, { [s]: s === r ? a.start[s] : a.end[s] });
        }
        return e;
      }
      class Rp {
        position(e, t, n = !0) {
          return this.offset(e, t, !1);
        }
        offset(e, t, n = !0) {
          return yp(t, e);
        }
        positionElements(e, t, n, r, i) {
          return [Ep, Pp, Tp, Sp].reduce(
            (e, t) => t(e),
            (function (e, t, n, r) {
              const i = yp(e, t);
              n.match(/^(auto)*\s*(left|right|top|bottom)*$/) ||
                n.match(/^(left|right|top|bottom)*(?: (left|right|top|bottom))?\s*(start|end)*$/) ||
                (n = 'auto');
              const o = !!n.match(/auto/g);
              let s = n.match(/auto\s(left|right|top|bottom)/) ? n.split(' ')[1] || 'auto' : n;
              const l = s.match(/^(left|right|top|bottom)* ?(?!\1)(left|right|top|bottom)?/);
              l && (s = l[1] + (l[2] ? ' ' + l[2] : '')),
                -1 !== ['left right', 'right left', 'top bottom', 'bottom top'].indexOf(s) &&
                  (s = 'auto');
              const a = wp(e, i, s);
              return (
                (s = _p(s, i, e, t, r ? r.allowedPositions : void 0)),
                {
                  options: r,
                  instance: { target: e, host: t, arrow: null },
                  offsets: { target: a, host: i, arrow: null },
                  positionFixed: !1,
                  placement: s,
                  placementAuto: o,
                }
              );
            })(t, e, n, i)
          );
        }
      }
      const Ap = new Rp();
      class Dp {
        constructor(e, t, n) {
          (this.update$$ = new P()),
            (this.positionElements = new Map()),
            (this.isDisabled = !1),
            (function (e) {
              return 'browser' === e;
            })(n) &&
              e.runOutsideAngular(() => {
                (this.triggerEvent$ = J(
                  Bd(window, 'scroll', { passive: !0 }),
                  Bd(window, 'resize', { passive: !0 }),
                  Gl(0, Yd),
                  this.update$$
                )),
                  this.triggerEvent$.subscribe(() => {
                    this.isDisabled ||
                      this.positionElements.forEach((e) => {
                        !(function (e, t, n, r, i, o) {
                          const s = Ap.positionElements(e, t, n, r, i),
                            l = (function (e) {
                              return {
                                width: e.offsets.target.width,
                                height: e.offsets.target.height,
                                left: Math.floor(e.offsets.target.left),
                                top: Math.round(e.offsets.target.top),
                                bottom: Math.round(e.offsets.target.bottom),
                                right: Math.floor(e.offsets.target.right),
                              };
                            })(s);
                          xp(
                            t,
                            {
                              'will-change': 'transform',
                              top: '0px',
                              left: '0px',
                              transform: `translate3d(${l.left}px, ${l.top}px, 0px)`,
                            },
                            o
                          ),
                            s.instance.arrow && xp(s.instance.arrow, s.offsets.arrow, o),
                            (function (e, t) {
                              const n = e.instance.target;
                              let r = n.className;
                              e.placementAuto &&
                                ((r = r.replace(/bs-popover-auto/g, 'bs-popover-' + e.placement)),
                                (r = r.replace(/bs-tooltip-auto/g, 'bs-tooltip-' + e.placement)),
                                (r = r.replace(/\sauto/g, ' ' + e.placement)),
                                -1 !== r.indexOf('popover') &&
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
                            })(s, o);
                        })(
                          Ip(e.target),
                          Ip(e.element),
                          e.attachment,
                          e.appendToBody,
                          this.options,
                          t.createRenderer(null, null)
                        );
                      });
                  });
              });
        }
        position(e) {
          this.addPositionElement(e);
        }
        get event$() {
          return this.triggerEvent$;
        }
        disable() {
          this.isDisabled = !0;
        }
        enable() {
          this.isDisabled = !1;
        }
        addPositionElement(e) {
          this.positionElements.set(Ip(e.element), e);
        }
        calcPosition() {
          this.update$$.next();
        }
        deletePositionElement(e) {
          this.positionElements.delete(Ip(e));
        }
        setOptions(e) {
          this.options = e;
        }
      }
      function Ip(e) {
        return 'string' == typeof e
          ? document.querySelector(e)
          : e instanceof Zt
          ? e.nativeElement
          : e;
      }
      const Op = new Kd(Gd);
      function Vp(e) {
        return !a(e) && e - parseFloat(e) + 1 >= 0;
      }
      function kp(e) {
        const { index: t, period: n, subscriber: r } = e;
        if ((r.next(t), !r.closed)) {
          if (-1 === n) return r.complete();
          (e.index = t + 1), this.schedule(e, n);
        }
      }
      class Mp {
        constructor() {
          (this.adaptivePosition = !0),
            (this.placement = 'top'),
            (this.triggers = 'hover focus'),
            (this.delay = 0);
        }
      }
      class Np {
        constructor(e) {
          Object.assign(this, e);
        }
        get isBs3() {
          return (
            void 0 === Md ||
            (void 0 === Md.__theme
              ? (Nd ||
                  (Nd = (function () {
                    if ('undefined' == typeof document) return null;
                    const e = document.createElement('span');
                    (e.innerText = 'test bs version'),
                      document.body.appendChild(e),
                      e.classList.add('d-none');
                    const t = e.getBoundingClientRect();
                    return document.body.removeChild(e), t && 0 === t.top ? 'bs4' : 'bs3';
                  })()),
                'bs3' === Nd)
              : 'bs4' !== Md.__theme)
          );
        }
        ngAfterViewInit() {
          (this.classMap = { in: !1, fade: !1 }),
            (this.classMap[this.placement] = !0),
            (this.classMap['tooltip-' + this.placement] = !0),
            (this.classMap.in = !0),
            this.animation && (this.classMap.fade = !0),
            this.containerClass && (this.classMap[this.containerClass] = !0);
        }
      }
      let Lp = 0,
        Fp = (() => {
          class e {
            constructor(e, t, n, r, i, o) {
              (this._elementRef = r),
                (this._renderer = i),
                (this._positionService = o),
                (this.tooltipId = Lp++),
                (this.tooltipChange = new bi()),
                (this.containerClass = ''),
                (this.tooltipAnimation = !0),
                (this.tooltipFadeDuration = 150),
                (this.tooltipStateChanged = new bi()),
                (this._tooltip = t
                  .createLoader(this._elementRef, e, this._renderer)
                  .provide({ provide: Mp, useValue: n })),
                Object.assign(this, n),
                (this.onShown = this._tooltip.onShown),
                (this.onHidden = this._tooltip.onHidden);
            }
            get isOpen() {
              return this._tooltip.isShown;
            }
            set isOpen(e) {
              e ? this.show() : this.hide();
            }
            set htmlContent(e) {
              Ud('tooltipHtml was deprecated, please use `tooltip` instead'), (this.tooltip = e);
            }
            set _placement(e) {
              Ud('tooltipPlacement was deprecated, please use `placement` instead'),
                (this.placement = e);
            }
            set _isOpen(e) {
              Ud('tooltipIsOpen was deprecated, please use `isOpen` instead'), (this.isOpen = e);
            }
            get _isOpen() {
              return Ud('tooltipIsOpen was deprecated, please use `isOpen` instead'), this.isOpen;
            }
            set _enable(e) {
              Ud('tooltipEnable was deprecated, please use `isDisabled` instead'),
                (this.isDisabled = !e);
            }
            get _enable() {
              return (
                Ud('tooltipEnable was deprecated, please use `isDisabled` instead'), this.isDisabled
              );
            }
            set _appendToBody(e) {
              Ud('tooltipAppendToBody was deprecated, please use `container="body"` instead'),
                (this.container = e ? 'body' : this.container);
            }
            get _appendToBody() {
              return (
                Ud('tooltipAppendToBody was deprecated, please use `container="body"` instead'),
                'body' === this.container
              );
            }
            set _popupClass(e) {
              Ud('tooltipClass deprecated');
            }
            set _tooltipContext(e) {
              Ud('tooltipContext deprecated');
            }
            set _tooltipPopupDelay(e) {
              Ud('tooltipPopupDelay is deprecated, use `delay` instead'), (this.delay = e);
            }
            get _tooltipTrigger() {
              return (
                Ud('tooltipTrigger was deprecated, please use `triggers` instead'), this.triggers
              );
            }
            set _tooltipTrigger(e) {
              Ud('tooltipTrigger was deprecated, please use `triggers` instead'),
                (this.triggers = (e || '').toString());
            }
            ngOnInit() {
              this._tooltip.listen({ triggers: this.triggers, show: () => this.show() }),
                this.tooltipChange.subscribe((e) => {
                  e || this._tooltip.hide();
                }),
                this.onShown.subscribe(() => {
                  this.setAriaDescribedBy();
                }),
                this.onHidden.subscribe(() => {
                  this.setAriaDescribedBy();
                });
            }
            setAriaDescribedBy() {
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
            }
            toggle() {
              if (this.isOpen) return this.hide();
              this.show();
            }
            show() {
              if (
                (this._positionService.setOptions({
                  modifiers: {
                    flip: { enabled: this.adaptivePosition },
                    preventOverflow: { enabled: this.adaptivePosition },
                  },
                }),
                this.isOpen || this.isDisabled || this._delayTimeoutId || !this.tooltip)
              )
                return;
              const e = () => {
                  this._delayTimeoutId && (this._delayTimeoutId = void 0),
                    this._tooltip
                      .attach(Np)
                      .to(this.container)
                      .position({ attachment: this.placement })
                      .show({
                        content: this.tooltip,
                        placement: this.placement,
                        containerClass: this.containerClass,
                        id: 'tooltip-' + this.tooltipId,
                      });
                },
                t = () => {
                  this._tooltipCancelShowFn && this._tooltipCancelShowFn();
                };
              this.delay
                ? (this._delaySubscription && this._delaySubscription.unsubscribe(),
                  (this._delaySubscription = (function (e = 0, t, n) {
                    let r = -1;
                    return (
                      Vp(t) ? (r = Number(t) < 1 ? 1 : Number(t)) : A(t) && (n = t),
                      A(n) || (n = Op),
                      new w((t) => {
                        const i = Vp(e) ? e : +e - n.now();
                        return n.schedule(kp, i, { index: 0, period: r, subscriber: t });
                      })
                    );
                  })(this.delay).subscribe(() => {
                    e(), t();
                  })),
                  this.triggers &&
                    kd(this.triggers).forEach((e) => {
                      this._tooltipCancelShowFn = this._renderer.listen(
                        this._elementRef.nativeElement,
                        e.close,
                        () => {
                          this._delaySubscription.unsubscribe(), t();
                        }
                      );
                    }))
                : e();
            }
            hide() {
              this._delayTimeoutId &&
                (clearTimeout(this._delayTimeoutId), (this._delayTimeoutId = void 0)),
                this._tooltip.isShown &&
                  ((this._tooltip.instance.classMap.in = !1),
                  setTimeout(() => {
                    this._tooltip.hide();
                  }, this.tooltipFadeDuration));
            }
            ngOnDestroy() {
              this._tooltip.dispose(),
                this.tooltipChange.unsubscribe(),
                this._delaySubscription && this._delaySubscription.unsubscribe(),
                this.onShown.unsubscribe(),
                this.onHidden.unsubscribe();
            }
          }
          return (
            (function (e, t, n, r) {
              var i,
                o = arguments.length,
                s = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
              if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                s = Reflect.decorate(e, t, n, r);
              else
                for (var l = e.length - 1; l >= 0; l--)
                  (i = e[l]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
              o > 3 && s && Object.defineProperty(t, n, s);
            })(
              [
                function (e, t) {
                  const n = ` __${t}Value`;
                  Object.defineProperty(e, t, {
                    get() {
                      return this[n];
                    },
                    set(e) {
                      const r = this[n];
                      (this[n] = e), r !== e && this[t + 'Change'] && this[t + 'Change'].emit(e);
                    },
                  });
                },
                $d('design:type', Object),
              ],
              e.prototype,
              'tooltip',
              void 0
            ),
            e
          );
        })();
      class Up {
        static forRoot() {
          return { ngModule: Up, providers: [Mp, zd, Dp] };
        }
      }
      class $p extends j {
        constructor(e, t) {
          super(e), (this.sources = t), (this.completed = 0), (this.haveValues = 0);
          const n = t.length;
          this.values = new Array(n);
          for (let r = 0; r < n; r++) {
            const e = $(this, t[r], null, r);
            e && this.add(e);
          }
        }
        notifyNext(e, t, n, r, i) {
          (this.values[n] = t), i._hasValue || ((i._hasValue = !0), this.haveValues++);
        }
        notifyComplete(e) {
          const { destination: t, haveValues: n, values: r } = this,
            i = r.length;
          e._hasValue
            ? (this.completed++, this.completed === i && (n === i && t.next(r), t.complete()))
            : t.complete();
        }
      }
      const jp = new Ee('NgValueAccessor'),
        Hp = new Ee('CompositionEventMode');
      class zp {
        constructor(e, t, n) {
          (this._renderer = e),
            (this._elementRef = t),
            (this._compositionMode = n),
            (this.onChange = (e) => {}),
            (this.onTouched = () => {}),
            (this._composing = !1),
            null == this._compositionMode &&
              (this._compositionMode = !(function () {
                const e = La() ? La().getUserAgent() : '';
                return /android (\d+)/.test(e.toLowerCase());
              })());
        }
        writeValue(e) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'value', null == e ? '' : e);
        }
        registerOnChange(e) {
          this.onChange = e;
        }
        registerOnTouched(e) {
          this.onTouched = e;
        }
        setDisabledState(e) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', e);
        }
        _handleInput(e) {
          (!this._compositionMode || (this._compositionMode && !this._composing)) &&
            this.onChange(e);
        }
        _compositionStart() {
          this._composing = !0;
        }
        _compositionEnd(e) {
          (this._composing = !1), this._compositionMode && this.onChange(e);
        }
      }
      class Bp {
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        reset(e) {
          this.control && this.control.reset(e);
        }
        hasError(e, t) {
          return !!this.control && this.control.hasError(e, t);
        }
        getError(e, t) {
          return this.control ? this.control.getError(e, t) : null;
        }
      }
      class qp extends Bp {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      function Gp() {
        throw new Error('unimplemented');
      }
      class Wp extends Bp {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null),
            (this._rawValidators = []),
            (this._rawAsyncValidators = []);
        }
        get validator() {
          return Gp();
        }
        get asyncValidator() {
          return Gp();
        }
      }
      class Zp {
        constructor(e) {
          this._cd = e;
        }
        get ngClassUntouched() {
          return !!this._cd.control && this._cd.control.untouched;
        }
        get ngClassTouched() {
          return !!this._cd.control && this._cd.control.touched;
        }
        get ngClassPristine() {
          return !!this._cd.control && this._cd.control.pristine;
        }
        get ngClassDirty() {
          return !!this._cd.control && this._cd.control.dirty;
        }
        get ngClassValid() {
          return !!this._cd.control && this._cd.control.valid;
        }
        get ngClassInvalid() {
          return !!this._cd.control && this._cd.control.invalid;
        }
        get ngClassPending() {
          return !!this._cd.control && this._cd.control.pending;
        }
      }
      class Kp extends Zp {
        constructor(e) {
          super(e);
        }
      }
      class Qp extends Zp {
        constructor(e) {
          super(e);
        }
      }
      function Yp(e) {
        return null == e || 0 === e.length;
      }
      const Jp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
      class Xp {
        static min(e) {
          return (t) => {
            if (Yp(t.value) || Yp(e)) return null;
            const n = parseFloat(t.value);
            return !isNaN(n) && n < e ? { min: { min: e, actual: t.value } } : null;
          };
        }
        static max(e) {
          return (t) => {
            if (Yp(t.value) || Yp(e)) return null;
            const n = parseFloat(t.value);
            return !isNaN(n) && n > e ? { max: { max: e, actual: t.value } } : null;
          };
        }
        static required(e) {
          return Yp(e.value) ? { required: !0 } : null;
        }
        static requiredTrue(e) {
          return !0 === e.value ? null : { required: !0 };
        }
        static email(e) {
          return Yp(e.value) || Jp.test(e.value) ? null : { email: !0 };
        }
        static minLength(e) {
          return (t) => {
            if (Yp(t.value)) return null;
            const n = t.value ? t.value.length : 0;
            return n < e ? { minlength: { requiredLength: e, actualLength: n } } : null;
          };
        }
        static maxLength(e) {
          return (t) => {
            const n = t.value ? t.value.length : 0;
            return n > e ? { maxlength: { requiredLength: e, actualLength: n } } : null;
          };
        }
        static pattern(e) {
          if (!e) return Xp.nullValidator;
          let t, n;
          return (
            'string' == typeof e
              ? ((n = ''),
                '^' !== e.charAt(0) && (n += '^'),
                (n += e),
                '$' !== e.charAt(e.length - 1) && (n += '$'),
                (t = new RegExp(n)))
              : ((n = e.toString()), (t = e)),
            (e) => {
              if (Yp(e.value)) return null;
              const r = e.value;
              return t.test(r) ? null : { pattern: { requiredPattern: n, actualValue: r } };
            }
          );
        }
        static nullValidator(e) {
          return null;
        }
        static compose(e) {
          if (!e) return null;
          const t = e.filter(ef);
          return 0 == t.length
            ? null
            : function (e) {
                return nf(
                  (function (e, t) {
                    return t.map((t) => t(e));
                  })(e, t)
                );
              };
        }
        static composeAsync(e) {
          if (!e) return null;
          const t = e.filter(ef);
          return 0 == t.length
            ? null
            : function (e) {
                return (function e(...t) {
                  let n;
                  return (
                    'function' == typeof t[t.length - 1] && (n = t.pop()),
                    1 === t.length && a(t[0]) && (t = t[0]),
                    0 === t.length
                      ? zl
                      : n
                      ? e(t).pipe(H((e) => n(...e)))
                      : new w((e) => new $p(e, t))
                  );
                })(
                  (function (e, t) {
                    return t.map((t) => t(e));
                  })(e, t).map(tf)
                ).pipe(H(nf));
              };
        }
      }
      function ef(e) {
        return null != e;
      }
      function tf(e) {
        const t = Mt(e) ? G(e) : e;
        if (!Nt(t)) throw new Error('Expected validator to return Promise or Observable.');
        return t;
      }
      function nf(e) {
        const t = e.reduce((e, t) => (null != t ? Object.assign({}, e, t) : e), {});
        return 0 === Object.keys(t).length ? null : t;
      }
      function rf(e) {
        return e.validate ? (t) => e.validate(t) : e;
      }
      function of(e) {
        return e.validate ? (t) => e.validate(t) : e;
      }
      class sf {
        constructor() {
          this._accessors = [];
        }
        add(e, t) {
          this._accessors.push([e, t]);
        }
        remove(e) {
          for (let t = this._accessors.length - 1; t >= 0; --t)
            if (this._accessors[t][1] === e) return void this._accessors.splice(t, 1);
        }
        select(e) {
          this._accessors.forEach((t) => {
            this._isSameGroup(t, e) && t[1] !== e && t[1].fireUncheck(e.value);
          });
        }
        _isSameGroup(e, t) {
          return !!e[0].control && e[0]._parent === t._control._parent && e[1].name === t.name;
        }
      }
      const lf =
          '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',
        af =
          '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });';
      class uf {
        static controlParentException() {
          throw new Error(
            "formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " +
              lf
          );
        }
        static ngModelGroupException() {
          throw new Error(
            `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ${af}\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        \n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>`
          );
        }
        static missingFormException() {
          throw new Error(
            'formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ' +
              lf
          );
        }
        static groupParentException() {
          throw new Error(
            "formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " +
              af
          );
        }
        static arrayParentException() {
          throw new Error(
            'formArrayName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        \n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });'
          );
        }
        static disabledAttrWarning() {
          console.warn(
            "\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    "
          );
        }
        static ngModelWarning(e) {
          console.warn(
            `\n    It looks like you're using ngModel on the same form field as ${e}. \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/${
              'formControl' === e ? 'FormControlDirective' : 'FormControlName'
            }#use-with-ngmodel\n    `
          );
        }
      }
      function cf(e, t) {
        return null == e
          ? '' + t
          : (t && 'object' == typeof t && (t = 'Object'), `${e}: ${t}`.slice(0, 50));
      }
      class hf {
        constructor(e, t) {
          (this._renderer = e),
            (this._elementRef = t),
            (this._optionMap = new Map()),
            (this._idCounter = 0),
            (this.onChange = (e) => {}),
            (this.onTouched = () => {}),
            (this._compareWith = Dt);
        }
        set compareWith(e) {
          if ('function' != typeof e)
            throw new Error('compareWith must be a function, but received ' + JSON.stringify(e));
          this._compareWith = e;
        }
        writeValue(e) {
          this.value = e;
          const t = this._getOptionId(e);
          null == t &&
            this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
          const n = cf(t, e);
          this._renderer.setProperty(this._elementRef.nativeElement, 'value', n);
        }
        registerOnChange(e) {
          this.onChange = (t) => {
            (this.value = this._getOptionValue(t)), e(this.value);
          };
        }
        registerOnTouched(e) {
          this.onTouched = e;
        }
        setDisabledState(e) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', e);
        }
        _registerOption() {
          return (this._idCounter++).toString();
        }
        _getOptionId(e) {
          for (const t of Array.from(this._optionMap.keys()))
            if (this._compareWith(this._optionMap.get(t), e)) return t;
          return null;
        }
        _getOptionValue(e) {
          const t = (function (e) {
            return e.split(':')[0];
          })(e);
          return this._optionMap.has(t) ? this._optionMap.get(t) : e;
        }
      }
      class df {
        constructor(e, t, n) {
          (this._element = e),
            (this._renderer = t),
            (this._select = n),
            this._select && (this.id = this._select._registerOption());
        }
        set ngValue(e) {
          null != this._select &&
            (this._select._optionMap.set(this.id, e),
            this._setElementValue(cf(this.id, e)),
            this._select.writeValue(this._select.value));
        }
        set value(e) {
          this._setElementValue(e), this._select && this._select.writeValue(this._select.value);
        }
        _setElementValue(e) {
          this._renderer.setProperty(this._element.nativeElement, 'value', e);
        }
        ngOnDestroy() {
          this._select &&
            (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value));
        }
      }
      function pf(e, t) {
        return null == e
          ? '' + t
          : ('string' == typeof t && (t = `'${t}'`),
            t && 'object' == typeof t && (t = 'Object'),
            `${e}: ${t}`.slice(0, 50));
      }
      class ff {
        constructor(e, t, n) {
          (this._element = e),
            (this._renderer = t),
            (this._select = n),
            this._select && (this.id = this._select._registerOption(this));
        }
        set ngValue(e) {
          null != this._select &&
            ((this._value = e),
            this._setElementValue(pf(this.id, e)),
            this._select.writeValue(this._select.value));
        }
        set value(e) {
          this._select
            ? ((this._value = e),
              this._setElementValue(pf(this.id, e)),
              this._select.writeValue(this._select.value))
            : this._setElementValue(e);
        }
        _setElementValue(e) {
          this._renderer.setProperty(this._element.nativeElement, 'value', e);
        }
        _setSelected(e) {
          this._renderer.setProperty(this._element.nativeElement, 'selected', e);
        }
        ngOnDestroy() {
          this._select &&
            (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value));
        }
      }
      function gf(e, t) {
        return [...t.path, e];
      }
      function mf(e, t) {
        e || yf(t, 'Cannot find control with'),
          t.valueAccessor || yf(t, 'No value accessor for form control with'),
          (e.validator = Xp.compose([e.validator, t.validator])),
          (e.asyncValidator = Xp.composeAsync([e.asyncValidator, t.asyncValidator])),
          t.valueAccessor.writeValue(e.value),
          (function (e, t) {
            t.valueAccessor.registerOnChange((n) => {
              (e._pendingValue = n),
                (e._pendingChange = !0),
                (e._pendingDirty = !0),
                'change' === e.updateOn && vf(e, t);
            });
          })(e, t),
          (function (e, t) {
            e.registerOnChange((e, n) => {
              t.valueAccessor.writeValue(e), n && t.viewToModelUpdate(e);
            });
          })(e, t),
          (function (e, t) {
            t.valueAccessor.registerOnTouched(() => {
              (e._pendingTouched = !0),
                'blur' === e.updateOn && e._pendingChange && vf(e, t),
                'submit' !== e.updateOn && e.markAsTouched();
            });
          })(e, t),
          t.valueAccessor.setDisabledState &&
            e.registerOnDisabledChange((e) => {
              t.valueAccessor.setDisabledState(e);
            }),
          t._rawValidators.forEach((t) => {
            t.registerOnValidatorChange &&
              t.registerOnValidatorChange(() => e.updateValueAndValidity());
          }),
          t._rawAsyncValidators.forEach((t) => {
            t.registerOnValidatorChange &&
              t.registerOnValidatorChange(() => e.updateValueAndValidity());
          });
      }
      function vf(e, t) {
        e._pendingDirty && e.markAsDirty(),
          e.setValue(e._pendingValue, { emitModelToViewChange: !1 }),
          t.viewToModelUpdate(e._pendingValue),
          (e._pendingChange = !1);
      }
      function _f(e, t) {
        null == e && yf(t, 'Cannot find control with'),
          (e.validator = Xp.compose([e.validator, t.validator])),
          (e.asyncValidator = Xp.composeAsync([e.asyncValidator, t.asyncValidator]));
      }
      function bf(e) {
        return yf(e, 'There is no FormControl instance attached to form control element with');
      }
      function yf(e, t) {
        let n;
        throw (
          ((n =
            e.path.length > 1
              ? `path: '${e.path.join(' -> ')}'`
              : e.path[0]
              ? `name: '${e.path}'`
              : 'unspecified name attribute'),
          new Error(`${t} ${n}`))
        );
      }
      function wf(e) {
        return null != e ? Xp.compose(e.map(rf)) : null;
      }
      function Cf(e) {
        return null != e ? Xp.composeAsync(e.map(of)) : null;
      }
      const xf = [
        class {
          constructor(e, t) {
            (this._renderer = e),
              (this._elementRef = t),
              (this.onChange = (e) => {}),
              (this.onTouched = () => {});
          }
          writeValue(e) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'checked', e);
          }
          registerOnChange(e) {
            this.onChange = e;
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', e);
          }
        },
        class {
          constructor(e, t) {
            (this._renderer = e),
              (this._elementRef = t),
              (this.onChange = (e) => {}),
              (this.onTouched = () => {});
          }
          writeValue(e) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(e));
          }
          registerOnChange(e) {
            this.onChange = (t) => {
              e('' == t ? null : parseFloat(t));
            };
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', e);
          }
        },
        class {
          constructor(e, t) {
            (this._renderer = e),
              (this._elementRef = t),
              (this.onChange = (e) => {}),
              (this.onTouched = () => {});
          }
          writeValue(e) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', null == e ? '' : e);
          }
          registerOnChange(e) {
            this.onChange = (t) => {
              e('' == t ? null : parseFloat(t));
            };
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', e);
          }
        },
        hf,
        class {
          constructor(e, t) {
            (this._renderer = e),
              (this._elementRef = t),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = (e) => {}),
              (this.onTouched = () => {}),
              (this._compareWith = Dt);
          }
          set compareWith(e) {
            if ('function' != typeof e)
              throw new Error('compareWith must be a function, but received ' + JSON.stringify(e));
            this._compareWith = e;
          }
          writeValue(e) {
            let t;
            if (((this.value = e), Array.isArray(e))) {
              const n = e.map((e) => this._getOptionId(e));
              t = (e, t) => {
                e._setSelected(n.indexOf(t.toString()) > -1);
              };
            } else
              t = (e, t) => {
                e._setSelected(!1);
              };
            this._optionMap.forEach(t);
          }
          registerOnChange(e) {
            this.onChange = (t) => {
              const n = [];
              if (t.hasOwnProperty('selectedOptions')) {
                const e = t.selectedOptions;
                for (let t = 0; t < e.length; t++) {
                  const r = e.item(t),
                    i = this._getOptionValue(r.value);
                  n.push(i);
                }
              } else {
                const e = t.options;
                for (let t = 0; t < e.length; t++) {
                  const r = e.item(t);
                  if (r.selected) {
                    const e = this._getOptionValue(r.value);
                    n.push(e);
                  }
                }
              }
              (this.value = n), e(n);
            };
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', e);
          }
          _registerOption(e) {
            const t = (this._idCounter++).toString();
            return this._optionMap.set(t, e), t;
          }
          _getOptionId(e) {
            for (const t of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(t)._value, e)) return t;
            return null;
          }
          _getOptionValue(e) {
            const t = (function (e) {
              return e.split(':')[0];
            })(e);
            return this._optionMap.has(t) ? this._optionMap.get(t)._value : e;
          }
        },
        class {
          constructor(e, t, n, r) {
            (this._renderer = e),
              (this._elementRef = t),
              (this._registry = n),
              (this._injector = r),
              (this.onChange = () => {}),
              (this.onTouched = () => {});
          }
          ngOnInit() {
            (this._control = this._injector.get(Wp)),
              this._checkName(),
              this._registry.add(this._control, this);
          }
          ngOnDestroy() {
            this._registry.remove(this);
          }
          writeValue(e) {
            (this._state = e === this.value),
              this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
          }
          registerOnChange(e) {
            (this._fn = e),
              (this.onChange = () => {
                e(this.value), this._registry.select(this);
              });
          }
          fireUncheck(e) {
            this.writeValue(e);
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', e);
          }
          _checkName() {
            this.name &&
              this.formControlName &&
              this.name !== this.formControlName &&
              this._throwNameError(),
              !this.name && this.formControlName && (this.name = this.formControlName);
          }
          _throwNameError() {
            throw new Error(
              '\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    '
            );
          }
        },
      ];
      function Sf(e) {
        const t = Tf(e) ? e.validators : e;
        return Array.isArray(t) ? wf(t) : t || null;
      }
      function Ef(e, t) {
        const n = Tf(t) ? t.asyncValidators : e;
        return Array.isArray(n) ? Cf(n) : n || null;
      }
      function Tf(e) {
        return null != e && !Array.isArray(e) && 'object' == typeof e;
      }
      class Pf {
        constructor(e, t) {
          (this.validator = e),
            (this.asyncValidator = t),
            (this._onCollectionChange = () => {}),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []);
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return 'VALID' === this.status;
        }
        get invalid() {
          return 'INVALID' === this.status;
        }
        get pending() {
          return 'PENDING' == this.status;
        }
        get disabled() {
          return 'DISABLED' === this.status;
        }
        get enabled() {
          return 'DISABLED' !== this.status;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
        }
        setValidators(e) {
          this.validator = Sf(e);
        }
        setAsyncValidators(e) {
          this.asyncValidator = Ef(e);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(e = {}) {
          (this.touched = !0), this._parent && !e.onlySelf && this._parent.markAsTouched(e);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }), this._forEachChild((e) => e.markAllAsTouched());
        }
        markAsUntouched(e = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((e) => {
              e.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !e.onlySelf && this._parent._updateTouched(e);
        }
        markAsDirty(e = {}) {
          (this.pristine = !1), this._parent && !e.onlySelf && this._parent.markAsDirty(e);
        }
        markAsPristine(e = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((e) => {
              e.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !e.onlySelf && this._parent._updatePristine(e);
        }
        markAsPending(e = {}) {
          (this.status = 'PENDING'),
            !1 !== e.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !e.onlySelf && this._parent.markAsPending(e);
        }
        disable(e = {}) {
          const t = this._parentMarkedDirty(e.onlySelf);
          (this.status = 'DISABLED'),
            (this.errors = null),
            this._forEachChild((t) => {
              t.disable(Object.assign({}, e, { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== e.emitEvent &&
              (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._updateAncestors(Object.assign({}, e, { skipPristineCheck: t })),
            this._onDisabledChange.forEach((e) => e(!0));
        }
        enable(e = {}) {
          const t = this._parentMarkedDirty(e.onlySelf);
          (this.status = 'VALID'),
            this._forEachChild((t) => {
              t.enable(Object.assign({}, e, { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: e.emitEvent }),
            this._updateAncestors(Object.assign({}, e, { skipPristineCheck: t })),
            this._onDisabledChange.forEach((e) => e(!1));
        }
        _updateAncestors(e) {
          this._parent &&
            !e.onlySelf &&
            (this._parent.updateValueAndValidity(e),
            e.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(e) {
          this._parent = e;
        }
        updateValueAndValidity(e = {}) {
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
        }
        _updateTreeValidity(e = { emitEvent: !0 }) {
          this._forEachChild((t) => t._updateTreeValidity(e)),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: e.emitEvent });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? 'DISABLED' : 'VALID';
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(e) {
          if (this.asyncValidator) {
            this.status = 'PENDING';
            const t = tf(this.asyncValidator(this));
            this._asyncValidationSubscription = t.subscribe((t) =>
              this.setErrors(t, { emitEvent: e })
            );
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe();
        }
        setErrors(e, t = {}) {
          (this.errors = e), this._updateControlsErrors(!1 !== t.emitEvent);
        }
        get(e) {
          return (function (e, t, n) {
            return null == t
              ? null
              : (t instanceof Array || (t = t.split('.')),
                t instanceof Array && 0 === t.length
                  ? null
                  : t.reduce(
                      (e, t) =>
                        e instanceof Af
                          ? e.controls.hasOwnProperty(t)
                            ? e.controls[t]
                            : null
                          : (e instanceof Df && e.at(t)) || null,
                      e
                    ));
          })(this, e);
        }
        getError(e, t) {
          const n = t ? this.get(t) : this;
          return n && n.errors ? n.errors[e] : null;
        }
        hasError(e, t) {
          return !!this.getError(e, t);
        }
        get root() {
          let e = this;
          for (; e._parent; ) e = e._parent;
          return e;
        }
        _updateControlsErrors(e) {
          (this.status = this._calculateStatus()),
            e && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(e);
        }
        _initObservables() {
          (this.valueChanges = new bi()), (this.statusChanges = new bi());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? 'DISABLED'
            : this.errors
            ? 'INVALID'
            : this._anyControlsHaveStatus('PENDING')
            ? 'PENDING'
            : this._anyControlsHaveStatus('INVALID')
            ? 'INVALID'
            : 'VALID';
        }
        _anyControlsHaveStatus(e) {
          return this._anyControls((t) => t.status === e);
        }
        _anyControlsDirty() {
          return this._anyControls((e) => e.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((e) => e.touched);
        }
        _updatePristine(e = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !e.onlySelf && this._parent._updatePristine(e);
        }
        _updateTouched(e = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !e.onlySelf && this._parent._updateTouched(e);
        }
        _isBoxedValue(e) {
          return (
            'object' == typeof e &&
            null !== e &&
            2 === Object.keys(e).length &&
            'value' in e &&
            'disabled' in e
          );
        }
        _registerOnCollectionChange(e) {
          this._onCollectionChange = e;
        }
        _setUpdateStrategy(e) {
          Tf(e) && null != e.updateOn && (this._updateOn = e.updateOn);
        }
        _parentMarkedDirty(e) {
          return !e && this._parent && this._parent.dirty && !this._parent._anyControlsDirty();
        }
      }
      class Rf extends Pf {
        constructor(e = null, t, n) {
          super(Sf(t), Ef(n, t)),
            (this._onChange = []),
            this._applyFormState(e),
            this._setUpdateStrategy(t),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
            this._initObservables();
        }
        setValue(e, t = {}) {
          (this.value = this._pendingValue = e),
            this._onChange.length &&
              !1 !== t.emitModelToViewChange &&
              this._onChange.forEach((e) => e(this.value, !1 !== t.emitViewToModelChange)),
            this.updateValueAndValidity(t);
        }
        patchValue(e, t = {}) {
          this.setValue(e, t);
        }
        reset(e = null, t = {}) {
          this._applyFormState(e),
            this.markAsPristine(t),
            this.markAsUntouched(t),
            this.setValue(this.value, t),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(e) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(e) {
          this._onChange.push(e);
        }
        _clearChangeFns() {
          (this._onChange = []),
            (this._onDisabledChange = []),
            (this._onCollectionChange = () => {});
        }
        registerOnDisabledChange(e) {
          this._onDisabledChange.push(e);
        }
        _forEachChild(e) {}
        _syncPendingControls() {
          return !(
            'submit' !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), 0)
          );
        }
        _applyFormState(e) {
          this._isBoxedValue(e)
            ? ((this.value = this._pendingValue = e.value),
              e.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = e);
        }
      }
      class Af extends Pf {
        constructor(e, t, n) {
          super(Sf(t), Ef(n, t)),
            (this.controls = e),
            this._initObservables(),
            this._setUpdateStrategy(t),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        registerControl(e, t) {
          return this.controls[e]
            ? this.controls[e]
            : ((this.controls[e] = t),
              t.setParent(this),
              t._registerOnCollectionChange(this._onCollectionChange),
              t);
        }
        addControl(e, t) {
          this.registerControl(e, t), this.updateValueAndValidity(), this._onCollectionChange();
        }
        removeControl(e) {
          this.controls[e] && this.controls[e]._registerOnCollectionChange(() => {}),
            delete this.controls[e],
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        setControl(e, t) {
          this.controls[e] && this.controls[e]._registerOnCollectionChange(() => {}),
            delete this.controls[e],
            t && this.registerControl(e, t),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        contains(e) {
          return this.controls.hasOwnProperty(e) && this.controls[e].enabled;
        }
        setValue(e, t = {}) {
          this._checkAllValuesPresent(e),
            Object.keys(e).forEach((n) => {
              this._throwIfControlMissing(n),
                this.controls[n].setValue(e[n], { onlySelf: !0, emitEvent: t.emitEvent });
            }),
            this.updateValueAndValidity(t);
        }
        patchValue(e, t = {}) {
          Object.keys(e).forEach((n) => {
            this.controls[n] &&
              this.controls[n].patchValue(e[n], { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this.updateValueAndValidity(t);
        }
        reset(e = {}, t = {}) {
          this._forEachChild((n, r) => {
            n.reset(e[r], { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this._updatePristine(t),
            this._updateTouched(t),
            this.updateValueAndValidity(t);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (e, t, n) => ((e[n] = t instanceof Rf ? t.value : t.getRawValue()), e)
          );
        }
        _syncPendingControls() {
          let e = this._reduceChildren(!1, (e, t) => !!t._syncPendingControls() || e);
          return e && this.updateValueAndValidity({ onlySelf: !0 }), e;
        }
        _throwIfControlMissing(e) {
          if (!Object.keys(this.controls).length)
            throw new Error(
              "\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.controls[e]) throw new Error(`Cannot find form control with name: ${e}.`);
        }
        _forEachChild(e) {
          Object.keys(this.controls).forEach((t) => e(this.controls[t], t));
        }
        _setUpControls() {
          this._forEachChild((e) => {
            e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(e) {
          let t = !1;
          return (
            this._forEachChild((n, r) => {
              t = t || (this.contains(r) && e(n));
            }),
            t
          );
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (e, t, n) => ((t.enabled || this.disabled) && (e[n] = t.value), e)
          );
        }
        _reduceChildren(e, t) {
          let n = e;
          return (
            this._forEachChild((e, r) => {
              n = t(n, e, r);
            }),
            n
          );
        }
        _allControlsDisabled() {
          for (const e of Object.keys(this.controls)) if (this.controls[e].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _checkAllValuesPresent(e) {
          this._forEachChild((t, n) => {
            if (void 0 === e[n])
              throw new Error(`Must supply a value for form control with name: '${n}'.`);
          });
        }
      }
      class Df extends Pf {
        constructor(e, t, n) {
          super(Sf(t), Ef(n, t)),
            (this.controls = e),
            this._initObservables(),
            this._setUpdateStrategy(t),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        at(e) {
          return this.controls[e];
        }
        push(e) {
          this.controls.push(e),
            this._registerControl(e),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        insert(e, t) {
          this.controls.splice(e, 0, t), this._registerControl(t), this.updateValueAndValidity();
        }
        removeAt(e) {
          this.controls[e] && this.controls[e]._registerOnCollectionChange(() => {}),
            this.controls.splice(e, 1),
            this.updateValueAndValidity();
        }
        setControl(e, t) {
          this.controls[e] && this.controls[e]._registerOnCollectionChange(() => {}),
            this.controls.splice(e, 1),
            t && (this.controls.splice(e, 0, t), this._registerControl(t)),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(e, t = {}) {
          this._checkAllValuesPresent(e),
            e.forEach((e, n) => {
              this._throwIfControlMissing(n),
                this.at(n).setValue(e, { onlySelf: !0, emitEvent: t.emitEvent });
            }),
            this.updateValueAndValidity(t);
        }
        patchValue(e, t = {}) {
          e.forEach((e, n) => {
            this.at(n) && this.at(n).patchValue(e, { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this.updateValueAndValidity(t);
        }
        reset(e = [], t = {}) {
          this._forEachChild((n, r) => {
            n.reset(e[r], { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this._updatePristine(t),
            this._updateTouched(t),
            this.updateValueAndValidity(t);
        }
        getRawValue() {
          return this.controls.map((e) => (e instanceof Rf ? e.value : e.getRawValue()));
        }
        clear() {
          this.controls.length < 1 ||
            (this._forEachChild((e) => e._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity());
        }
        _syncPendingControls() {
          let e = this.controls.reduce((e, t) => !!t._syncPendingControls() || e, !1);
          return e && this.updateValueAndValidity({ onlySelf: !0 }), e;
        }
        _throwIfControlMissing(e) {
          if (!this.controls.length)
            throw new Error(
              "\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.at(e)) throw new Error('Cannot find form control at index ' + e);
        }
        _forEachChild(e) {
          this.controls.forEach((t, n) => {
            e(t, n);
          });
        }
        _updateValue() {
          this.value = this.controls.filter((e) => e.enabled || this.disabled).map((e) => e.value);
        }
        _anyControls(e) {
          return this.controls.some((t) => t.enabled && e(t));
        }
        _setUpControls() {
          this._forEachChild((e) => this._registerControl(e));
        }
        _checkAllValuesPresent(e) {
          this._forEachChild((t, n) => {
            if (void 0 === e[n])
              throw new Error(`Must supply a value for form control at index: ${n}.`);
          });
        }
        _allControlsDisabled() {
          for (const e of this.controls) if (e.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(e) {
          e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      const If = new Ee('NgFormSelectorWarning');
      class Of extends qp {
        ngOnInit() {
          this._checkParentType(), this.formDirective.addFormGroup(this);
        }
        ngOnDestroy() {
          this.formDirective && this.formDirective.removeFormGroup(this);
        }
        get control() {
          return this.formDirective.getFormGroup(this);
        }
        get path() {
          return gf(this.name, this._parent);
        }
        get formDirective() {
          return this._parent ? this._parent.formDirective : null;
        }
        get validator() {
          return wf(this._validators);
        }
        get asyncValidator() {
          return Cf(this._asyncValidators);
        }
        _checkParentType() {}
      }
      class Vf {}
      const kf = new Ee('NgModelWithFormControlWarning');
      class Mf extends qp {
        constructor(e, t) {
          super(),
            (this._validators = e),
            (this._asyncValidators = t),
            (this.submitted = !1),
            (this.directives = []),
            (this.form = null),
            (this.ngSubmit = new bi());
        }
        ngOnChanges(e) {
          this._checkFormPresent(),
            e.hasOwnProperty('form') &&
              (this._updateValidators(), this._updateDomValue(), this._updateRegistrations());
        }
        get formDirective() {
          return this;
        }
        get control() {
          return this.form;
        }
        get path() {
          return [];
        }
        addControl(e) {
          const t = this.form.get(e.path);
          return mf(t, e), t.updateValueAndValidity({ emitEvent: !1 }), this.directives.push(e), t;
        }
        getControl(e) {
          return this.form.get(e.path);
        }
        removeControl(e) {
          !(function (e, t) {
            const n = e.indexOf(t);
            n > -1 && e.splice(n, 1);
          })(this.directives, e);
        }
        addFormGroup(e) {
          const t = this.form.get(e.path);
          _f(t, e), t.updateValueAndValidity({ emitEvent: !1 });
        }
        removeFormGroup(e) {}
        getFormGroup(e) {
          return this.form.get(e.path);
        }
        addFormArray(e) {
          const t = this.form.get(e.path);
          _f(t, e), t.updateValueAndValidity({ emitEvent: !1 });
        }
        removeFormArray(e) {}
        getFormArray(e) {
          return this.form.get(e.path);
        }
        updateModel(e, t) {
          this.form.get(e.path).setValue(t);
        }
        onSubmit(e) {
          return (
            (this.submitted = !0),
            (t = this.directives),
            this.form._syncPendingControls(),
            t.forEach((e) => {
              const t = e.control;
              'submit' === t.updateOn &&
                t._pendingChange &&
                (e.viewToModelUpdate(t._pendingValue), (t._pendingChange = !1));
            }),
            this.ngSubmit.emit(e),
            !1
          );
          var t;
        }
        onReset() {
          this.resetForm();
        }
        resetForm(e) {
          this.form.reset(e), (this.submitted = !1);
        }
        _updateDomValue() {
          this.directives.forEach((e) => {
            const t = this.form.get(e.path);
            e.control !== t &&
              ((function (e, t) {
                t.valueAccessor.registerOnChange(() => bf(t)),
                  t.valueAccessor.registerOnTouched(() => bf(t)),
                  t._rawValidators.forEach((e) => {
                    e.registerOnValidatorChange && e.registerOnValidatorChange(null);
                  }),
                  t._rawAsyncValidators.forEach((e) => {
                    e.registerOnValidatorChange && e.registerOnValidatorChange(null);
                  }),
                  e && e._clearChangeFns();
              })(e.control, e),
              t && mf(t, e),
              (e.control = t));
          }),
            this.form._updateTreeValidity({ emitEvent: !1 });
        }
        _updateRegistrations() {
          this.form._registerOnCollectionChange(() => this._updateDomValue()),
            this._oldForm && this._oldForm._registerOnCollectionChange(() => {}),
            (this._oldForm = this.form);
        }
        _updateValidators() {
          const e = wf(this._validators);
          this.form.validator = Xp.compose([this.form.validator, e]);
          const t = Cf(this._asyncValidators);
          this.form.asyncValidator = Xp.composeAsync([this.form.asyncValidator, t]);
        }
        _checkFormPresent() {
          this.form || uf.missingFormException();
        }
      }
      class Nf extends Of {
        constructor(e, t, n) {
          super(), (this._parent = e), (this._validators = t), (this._asyncValidators = n);
        }
        _checkParentType() {
          Ff(this._parent) && uf.groupParentException();
        }
      }
      class Lf extends qp {
        constructor(e, t, n) {
          super(), (this._parent = e), (this._validators = t), (this._asyncValidators = n);
        }
        ngOnInit() {
          this._checkParentType(), this.formDirective.addFormArray(this);
        }
        ngOnDestroy() {
          this.formDirective && this.formDirective.removeFormArray(this);
        }
        get control() {
          return this.formDirective.getFormArray(this);
        }
        get formDirective() {
          return this._parent ? this._parent.formDirective : null;
        }
        get path() {
          return gf(this.name, this._parent);
        }
        get validator() {
          return wf(this._validators);
        }
        get asyncValidator() {
          return Cf(this._asyncValidators);
        }
        _checkParentType() {
          Ff(this._parent) && uf.arrayParentException();
        }
      }
      function Ff(e) {
        return !(e instanceof Nf || e instanceof Mf || e instanceof Lf);
      }
      let Uf = (() => {
        class e extends Wp {
          constructor(e, t, n, r, i) {
            super(),
              (this._ngModelWarningConfig = i),
              (this._added = !1),
              (this.update = new bi()),
              (this._ngModelWarningSent = !1),
              (this._parent = e),
              (this._rawValidators = t || []),
              (this._rawAsyncValidators = n || []),
              (this.valueAccessor = (function (e, t) {
                if (!t) return null;
                Array.isArray(t) ||
                  yf(e, 'Value accessor was not provided as an array for form control with');
                let n = void 0,
                  r = void 0,
                  i = void 0;
                return (
                  t.forEach((t) => {
                    var o;
                    t.constructor === zp
                      ? (n = t)
                      : ((o = t),
                        xf.some((e) => o.constructor === e)
                          ? (r &&
                              yf(
                                e,
                                'More than one built-in value accessor matches form control with'
                              ),
                            (r = t))
                          : (i &&
                              yf(
                                e,
                                'More than one custom value accessor matches form control with'
                              ),
                            (i = t)));
                  }),
                  i || r || n || (yf(e, 'No valid value accessor for form control with'), null)
                );
              })(this, r));
          }
          set isDisabled(e) {
            uf.disabledAttrWarning();
          }
          ngOnChanges(t) {
            var n, r;
            this._added || this._setUpControl(),
              (function (e, t) {
                if (!e.hasOwnProperty('model')) return !1;
                const n = e.model;
                return !!n.isFirstChange() || !Dt(t, n.currentValue);
              })(t, this.viewModel) &&
                ('formControlName',
                (n = e),
                this,
                (r = this._ngModelWarningConfig),
                Qe() &&
                  'never' !== r &&
                  ((((null !== r && 'once' !== r) || n._ngModelWarningSentOnce) &&
                    ('always' !== r || this._ngModelWarningSent)) ||
                    (uf.ngModelWarning('formControlName'),
                    (n._ngModelWarningSentOnce = !0),
                    (this._ngModelWarningSent = !0))),
                (this.viewModel = this.model),
                this.formDirective.updateModel(this, this.model));
          }
          ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
          }
          viewToModelUpdate(e) {
            (this.viewModel = e), this.update.emit(e);
          }
          get path() {
            return gf(this.name, this._parent);
          }
          get formDirective() {
            return this._parent ? this._parent.formDirective : null;
          }
          get validator() {
            return wf(this._rawValidators);
          }
          get asyncValidator() {
            return Cf(this._rawAsyncValidators);
          }
          _checkParentType() {
            !(this._parent instanceof Nf) && this._parent instanceof Of
              ? uf.ngModelGroupException()
              : this._parent instanceof Nf ||
                this._parent instanceof Mf ||
                this._parent instanceof Lf ||
                uf.controlParentException();
          }
          _setUpControl() {
            this._checkParentType(),
              (this.control = this.formDirective.addControl(this)),
              this.control.disabled &&
                this.valueAccessor.setDisabledState &&
                this.valueAccessor.setDisabledState(!0),
              (this._added = !0);
          }
        }
        return (e._ngModelWarningSentOnce = !1), e;
      })();
      class $f {}
      class jf {
        group(e, t = null) {
          const n = this._reduceControls(e);
          let r = null,
            i = null,
            o = void 0;
          return (
            null != t &&
              ((function (e) {
                return (
                  void 0 !== e.asyncValidators || void 0 !== e.validators || void 0 !== e.updateOn
                );
              })(t)
                ? ((r = null != t.validators ? t.validators : null),
                  (i = null != t.asyncValidators ? t.asyncValidators : null),
                  (o = null != t.updateOn ? t.updateOn : void 0))
                : ((r = null != t.validator ? t.validator : null),
                  (i = null != t.asyncValidator ? t.asyncValidator : null))),
            new Af(n, { asyncValidators: i, updateOn: o, validators: r })
          );
        }
        control(e, t, n) {
          return new Rf(e, t, n);
        }
        array(e, t, n) {
          const r = e.map((e) => this._createControl(e));
          return new Df(r, t, n);
        }
        _reduceControls(e) {
          const t = {};
          return (
            Object.keys(e).forEach((n) => {
              t[n] = this._createControl(e[n]);
            }),
            t
          );
        }
        _createControl(e) {
          return e instanceof Rf || e instanceof Af || e instanceof Df
            ? e
            : Array.isArray(e)
            ? this.control(e[0], e.length > 1 ? e[1] : null, e.length > 2 ? e[2] : null)
            : this.control(e);
        }
      }
      class Hf {
        static withConfig(e) {
          return {
            ngModule: Hf,
            providers: [{ provide: If, useValue: e.warnOnDeprecatedNgFormSelector }],
          };
        }
      }
      class zf {
        static withConfig(e) {
          return {
            ngModule: zf,
            providers: [{ provide: kf, useValue: e.warnOnNgModelWithFormControl }],
          };
        }
      }
      var Bf = (function (e) {
        return (e[(e.FINANCIAL = 0)] = 'FINANCIAL'), (e[(e.NATURAL = 1)] = 'NATURAL'), e;
      })({});
      let qf = new Ee('currency.mask.config');
      class Gf {
        constructor(e) {
          this.htmlInputElement = e;
        }
        setCursorAt(e) {
          if (this.htmlInputElement.setSelectionRange)
            this.htmlInputElement.focus(), this.htmlInputElement.setSelectionRange(e, e);
          else if (this.htmlInputElement.createTextRange) {
            let t = this.htmlInputElement.createTextRange();
            t.collapse(!0), t.moveEnd('character', e), t.moveStart('character', e), t.select();
          }
        }
        updateValueAndCursor(e, t, n) {
          (this.rawValue = e), this.setCursorAt((n -= t - e.length));
        }
        get canInputMoreNumbers() {
          let e = !(
              this.rawValue.replace(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g, '').length >=
                this.htmlInputElement.maxLength && this.htmlInputElement.maxLength >= 0
            ),
            t = this.inputSelection.selectionStart,
            n = this.inputSelection.selectionEnd,
            r = !(
              t == n ||
              !this.htmlInputElement.value.substring(t, n).match(/[^0-9\u0660-\u0669\u06F0-\u06F9]/)
            ),
            i = '0' == this.htmlInputElement.value.substring(0, 1);
          return e || r || i;
        }
        get inputSelection() {
          let e = 0,
            t = 0;
          if (
            'number' == typeof this.htmlInputElement.selectionStart &&
            'number' == typeof this.htmlInputElement.selectionEnd
          )
            (e = this.htmlInputElement.selectionStart), (t = this.htmlInputElement.selectionEnd);
          else {
            let n = document.selection.createRange();
            if (n && n.parentElement() == this.htmlInputElement) {
              let r = this.htmlInputElement.value.length,
                i = this.htmlInputElement.value.replace(/\r\n/g, '\n'),
                o = this.htmlInputElement.createTextRange();
              o.moveToBookmark(n.getBookmark());
              let s = this.htmlInputElement.createTextRange();
              s.collapse(!1),
                o.compareEndPoints('StartToEnd', s) > -1
                  ? (e = t = r)
                  : ((e = -o.moveStart('character', -r)),
                    (e += i.slice(0, e).split('\n').length - 1),
                    o.compareEndPoints('EndToEnd', s) > -1
                      ? (t = r)
                      : ((t = -o.moveEnd('character', -r)),
                        (t += i.slice(0, t).split('\n').length - 1)));
            }
          }
          return { selectionStart: e, selectionEnd: t };
        }
        get rawValue() {
          return this.htmlInputElement && this.htmlInputElement.value;
        }
        set rawValue(e) {
          (this._storedRawValue = e), this.htmlInputElement && (this.htmlInputElement.value = e);
        }
        get storedRawValue() {
          return this._storedRawValue;
        }
      }
      class Wf {
        constructor(e, t) {
          (this.htmlInputElement = e),
            (this.options = t),
            (this.SINGLE_DIGIT_REGEX = new RegExp(/^[0-9\u0660-\u0669\u06F0-\u06F9]$/)),
            (this.ONLY_NUMBERS_REGEX = new RegExp(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g)),
            (this.PER_AR_NUMBER = new Map()),
            (this.inputManager = new Gf(e)),
            this.initialize();
        }
        initialize() {
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
        }
        addNumber(e) {
          const { decimal: t, precision: n, inputMode: r } = this.options;
          let i = String.fromCharCode(e);
          const o = i === this.options.decimal;
          if (this.rawValue) {
            let e = this.inputSelection.selectionStart,
              n = this.inputSelection.selectionEnd;
            const s = this.rawValue.substring(0, e);
            let l = this.rawValue.substring(n, this.rawValue.length);
            const a = -1 !== s.indexOf(t);
            r === Bf.NATURAL && a && e === n && (l = l.substring(1));
            const u = s + i + l;
            let c = e + 1;
            if ((!o && i !== this.options.thousands) || i !== l[0]) {
              if (!this.SINGLE_DIGIT_REGEX.test(i)) return;
            } else c++;
            (this.rawValue = u), this.updateFieldValue(c);
          } else {
            this.rawValue = this.applyMask(!1, i);
            let e = void 0;
            r === Bf.NATURAL && n > 0 && ((e = this.rawValue.indexOf(t)), o && e++),
              this.updateFieldValue(e);
          }
        }
        applyMask(e, t, n = !1) {
          let {
              allowNegative: r,
              decimal: i,
              precision: o,
              prefix: s,
              suffix: l,
              thousands: a,
              min: u,
              max: c,
              inputMode: h,
            } = this.options,
            d = (t = e ? new Number(t).toFixed(o) : t).replace(this.ONLY_NUMBERS_REGEX, '');
          if (!d && t !== i) return '';
          h !== Bf.NATURAL ||
            e ||
            n ||
            (d = (t = this.padOrTrimPrecision(t)).replace(this.ONLY_NUMBERS_REGEX, ''));
          let p = d
            .slice(0, d.length - o)
            .replace(/^\u0660*/g, '')
            .replace(/^\u06F0*/g, '')
            .replace(/^0*/g, '');
          '' == p && (p = '0');
          let f = parseInt(p);
          (p = p.replace(
            /\B(?=([0-9\u0660-\u0669\u06F0-\u06F9]{3})+(?![0-9\u0660-\u0669\u06F0-\u06F9]))/g,
            a
          )),
            a && p.startsWith(a) && (p = p.substring(1));
          let g = p,
            m = d.slice(d.length - o),
            v = parseInt(m) || 0,
            _ = t.indexOf('-') > -1;
          c = this.isNullOrUndefined(c) || this.isNullOrUndefined(u) ? c : Math.max(c, u);
          let b = f + v / 100;
          return (
            (b = _ ? -b : b),
            !this.isNullOrUndefined(c) && b > c
              ? this.applyMask(!0, c + '')
              : !this.isNullOrUndefined(u) && b < u
              ? this.applyMask(!0, u + '')
              : (o > 0 && (g += '0' == g && m.length < o ? i + '0'.repeat(o - 1) + m : i + m),
                (_ && r && 0 != b ? '-' : '') + s + g + l)
          );
        }
        padOrTrimPrecision(e) {
          let { decimal: t, precision: n } = this.options,
            r = e.lastIndexOf(t);
          -1 === r && ((r = e.length), (e += t));
          let i = e.substring(r).replace(this.ONLY_NUMBERS_REGEX, '');
          const o = i.length;
          if (o < n) for (let s = o; s < n; s++) i += '0';
          else o > n && (i = i.substring(0, i.length + n - o));
          return e.substring(0, r) + t + i;
        }
        clearMask(e) {
          if (this.isNullable() && '' === e) return null;
          let t = (e || '0').replace(this.options.prefix, '').replace(this.options.suffix, '');
          return (
            this.options.thousands &&
              (t = t.replace(new RegExp('\\' + this.options.thousands, 'g'), '')),
            this.options.decimal && (t = t.replace(this.options.decimal, '.')),
            this.PER_AR_NUMBER.forEach((e, n) => {
              const r = new RegExp(n, 'g');
              t = t.replace(r, e);
            }),
            parseFloat(t)
          );
        }
        changeToNegative() {
          this.options.allowNegative &&
            '' != this.rawValue &&
            '-' != this.rawValue.charAt(0) &&
            0 != this.value &&
            (this.rawValue = this.applyMask(!1, '-' + this.rawValue));
        }
        changeToPositive() {
          this.rawValue = this.applyMask(!1, this.rawValue.replace('-', ''));
        }
        removeNumber(e) {
          let { decimal: t, thousands: n, prefix: r, suffix: i, inputMode: o } = this.options;
          if (this.isNullable() && 0 == this.value) return void (this.rawValue = null);
          let s = this.inputSelection.selectionEnd,
            l = this.inputSelection.selectionStart;
          const a = this.rawValue.length - i.length;
          if (
            ((s = Math.min(a, Math.max(s, r.length))),
            (l = Math.min(a, Math.max(l, r.length))),
            l === s && this.inputSelection.selectionStart !== this.inputSelection.selectionEnd)
          )
            return void this.updateFieldValue(l);
          let u = this.rawValue.indexOf(t);
          -1 === u && (u = this.rawValue.length);
          let c = 0,
            h = '';
          if (s === l)
            if (8 == e) {
              if (l <= r.length) return;
              l--,
                this.rawValue.substr(l, 1).match(/\d/) || l--,
                o === Bf.NATURAL && u < s && (c = -1);
            } else if (46 == e || 63272 == e) {
              if (l === a) return;
              s++, this.rawValue.substr(l, 1).match(/\d/) || (l++, s++);
            }
          if (o === Bf.NATURAL && l > u) {
            const e = s - l;
            for (let t = 0; t < e; t++) h += '0';
          }
          let d = this.rawValue.length - s;
          (this.rawValue = this.rawValue.substring(0, l) + h + this.rawValue.substring(s)),
            this.rawValue.substr(r.length, 1) === n &&
              ((this.rawValue =
                this.rawValue.substring(0, r.length) + this.rawValue.substring(r.length + 1)),
              (d = Math.min(d, this.rawValue.length - r.length))),
            this.updateFieldValue(this.rawValue.length - d + c, !0);
        }
        updateFieldValue(e, t = !1) {
          let n = this.applyMask(!1, this.rawValue || '', t);
          (e = null == e ? this.rawValue.length : e),
            (e = Math.max(
              this.options.prefix.length,
              Math.min(e, this.rawValue.length - this.options.suffix.length)
            )),
            this.inputManager.updateValueAndCursor(n, this.rawValue.length, e);
        }
        updateOptions(e) {
          let t = this.value;
          (this.options = e), (this.value = t);
        }
        prefixLength() {
          return this.options.prefix.length;
        }
        suffixLength() {
          return this.options.suffix.length;
        }
        isNullable() {
          return this.options.nullable;
        }
        get canInputMoreNumbers() {
          return this.inputManager.canInputMoreNumbers;
        }
        get inputSelection() {
          return this.inputManager.inputSelection;
        }
        get rawValue() {
          return this.inputManager.rawValue;
        }
        set rawValue(e) {
          this.inputManager.rawValue = e;
        }
        get storedRawValue() {
          return this.inputManager.storedRawValue;
        }
        get value() {
          return this.clearMask(this.rawValue);
        }
        set value(e) {
          this.rawValue = this.applyMask(!0, '' + e);
        }
        isNullOrUndefined(e) {
          return null == e;
        }
      }
      class Zf {
        constructor(e, t) {
          this.inputService = new Wf(e, t);
        }
        handleCut(e) {
          setTimeout(() => {
            this.inputService.updateFieldValue(),
              this.setValue(this.inputService.value),
              this.onModelChange(this.inputService.value);
          }, 0);
        }
        handleInput(e) {
          let t = this.inputService.rawValue.charCodeAt(this.inputService.rawValue.length - 1),
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
        }
        handleKeydown(e) {
          let t = e.which || e.charCode || e.keyCode;
          (8 != t && 46 != t && 63272 != t) ||
            (e.preventDefault(),
            this.inputService.inputSelection.selectionStart <= this.inputService.prefixLength() &&
            this.inputService.inputSelection.selectionEnd >=
              this.inputService.rawValue.length - this.inputService.suffixLength()
              ? this.clearValue()
              : (this.inputService.removeNumber(t), this.onModelChange(this.inputService.value)));
        }
        clearValue() {
          this.setValue(this.inputService.isNullable() ? null : 0),
            this.onModelChange(this.inputService.value);
        }
        handleKeypress(e) {
          let t = e.which || e.charCode || e.keyCode;
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
        }
        handlePaste(e) {
          setTimeout(() => {
            this.inputService.updateFieldValue(),
              this.setValue(this.inputService.value),
              this.onModelChange(this.inputService.value);
          }, 1);
        }
        updateOptions(e) {
          this.inputService.updateOptions(e);
        }
        getOnModelChange() {
          return this.onModelChange;
        }
        setOnModelChange(e) {
          this.onModelChange = e;
        }
        getOnModelTouched() {
          return this.onModelTouched;
        }
        setOnModelTouched(e) {
          this.onModelTouched = e;
        }
        setValue(e) {
          this.inputService.value = e;
        }
        setCursorPosition(e) {
          setTimeout(function () {
            e.target.setSelectionRange(e.target.value.length, e.target.value.length);
          }, 0);
        }
      }
      let Kf = class {
        constructor(e, t, n) {
          (this.currencyMaskConfig = e),
            (this.elementRef = t),
            (this.keyValueDiffers = n),
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
              inputMode: Bf.FINANCIAL,
            }),
            e && (this.optionsTemplate = e),
            (this.keyValueDiffer = n.find({}).create());
        }
        ngAfterViewInit() {
          this.elementRef.nativeElement.style.textAlign =
            this.options && this.options.align ? this.options.align : this.optionsTemplate.align;
        }
        ngDoCheck() {
          this.keyValueDiffer.diff(this.options) &&
            ((this.elementRef.nativeElement.style.textAlign = this.options.align
              ? this.options.align
              : this.optionsTemplate.align),
            this.inputHandler.updateOptions(Object.assign({}, this.optionsTemplate, this.options)));
        }
        ngOnInit() {
          this.inputHandler = new Zf(
            this.elementRef.nativeElement,
            Object.assign({}, this.optionsTemplate, this.options)
          );
        }
        handleBlur(e) {
          this.inputHandler.getOnModelTouched().apply(e);
        }
        handleCut(e) {
          this.isChromeAndroid() || (!this.isReadOnly() && this.inputHandler.handleCut(e));
        }
        handleInput(e) {
          this.isChromeAndroid() && !this.isReadOnly() && this.inputHandler.handleInput(e);
        }
        handleKeydown(e) {
          this.isChromeAndroid() || (!this.isReadOnly() && this.inputHandler.handleKeydown(e));
        }
        handleKeypress(e) {
          this.isChromeAndroid() || (!this.isReadOnly() && this.inputHandler.handleKeypress(e));
        }
        handlePaste(e) {
          this.isChromeAndroid() || (!this.isReadOnly() && this.inputHandler.handlePaste(e));
        }
        handleDrop(e) {
          this.isChromeAndroid() || e.preventDefault();
        }
        isChromeAndroid() {
          return /chrome/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent);
        }
        isReadOnly() {
          return this.elementRef.nativeElement.hasAttribute('readonly');
        }
        registerOnChange(e) {
          this.inputHandler.setOnModelChange(e);
        }
        registerOnTouched(e) {
          this.inputHandler.setOnModelTouched(e);
        }
        setDisabledState(e) {
          this.elementRef.nativeElement.disabled = e;
        }
        writeValue(e) {
          this.inputHandler.setValue(e);
        }
      };
      var Qf;
      let Yf = (Qf = class {
        static forRoot(e) {
          return { ngModule: Qf, providers: [{ provide: qf, useValue: e }] };
        }
      });
      var Jf = n('jfjY');
      class Xf {
        constructor(e, t, n) {
          (this.formBuilder = e),
            (this.taxasService = t),
            (this.el = n),
            (this.taxas = {}),
            (this.bkpTaxas = {}),
            (this.resultados = []),
            (this.tabela = 'todos'),
            (this.validForm = !0),
            (this.tipoTaxaAVista = '(1 Dia)'),
            (this.visualizacaoDasTaxas = 'vendedor'),
            (this.width = document.querySelector('body').scrollWidth),
            (this.mobile = Object(Jf.isMobile)()),
            (this.section = this.el.nativeElement.querySelector('section')),
            (this.subscriptions = []);
        }
        ngOnInit() {
          this.taxas = this.taxasService.getTaxas();
          for (const e in this.taxas) this.bkpTaxas[e] = this.taxas[e];
          (this.form = this.formBuilder.group({
            valorTransacao: [0, [Xp.required, Xp.min(0.1)]],
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
                : localStorage.getItem('creditoParcelado2a61D') || this.taxas.creditoParcelado2a61D,
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
            visualizacaoDasTaxas: [localStorage.getItem('visualizacaoDasTaxas') || 'vendedor'],
          })),
            this.subscriptions.push(
              this.form.get('visualizacaoDasTaxas').valueChanges.subscribe((e) => {
                localStorage.setItem('visualizacaoDasTaxas', e);
              })
            ),
            this.subscriptions.push(
              this.form.get('taxaParcelamento').valueChanges.subscribe((e) => {
                localStorage.setItem('taxaParcelamento', e);
              })
            ),
            this.subscriptions.push(
              this.form.get('taxaDebito').valueChanges.subscribe((e) => {
                this.atualizarTxDebito(this.form.get('promocao').value, e);
              })
            ),
            this.subscriptions.push(
              this.form.get('taxaCreditoAVista').valueChanges.subscribe((e) => {
                this.atualizarTxCredAVista(this.form.get('planoRecebimento').value, e);
              })
            ),
            this.subscriptions.push(
              this.form.get('taxaCreditoParcelado2a6').valueChanges.subscribe((e) => {
                this.atualizarTxCredParcelado2a6(this.form.get('planoRecebimento').value, e),
                  this.form.get('taxaCreditoParcelado7a12').setValue(e);
              })
            ),
            this.subscriptions.push(
              this.form.get('taxaCreditoParcelado7a12').valueChanges.subscribe((e) => {
                this.atualizarTxCredParcelado7a12(this.form.get('planoRecebimento').value, e);
              })
            ),
            this.subscriptions.push(
              this.form.get('planoRecebimento').valueChanges.subscribe((e) => {
                localStorage.setItem('planoRecebimento', e);
                const t = this.obterTxCredito(e);
                this.form.get('taxaCreditoParcelado2a6').setValue(t.parcelado2a6),
                  this.form.get('taxaCreditoParcelado7a12').setValue(t.parcelado7a12),
                  this.atualizarValorCredAVista(t.aVista),
                  (this.tipoTaxaAVista = t.tipoTaxaAVista);
              })
            ),
            this.subscriptions.push(
              this.form.get('promocao').valueChanges.subscribe((e) => {
                const t = this.obterTxCredito(this.form.get('planoRecebimento').value),
                  n = this.obterTxDebito(e);
                this.form.get('taxaDebito').setValue(n.taxa),
                  this.atualizarValorCredAVista(t.aVista);
              })
            ),
            this.subscriptions.push(
              this.form.get('visualizacaoDasTaxas').valueChanges.subscribe((e) => {
                (this.visualizacaoDasTaxas = e), setTimeout(() => {}, 300);
              })
            ),
            this.form.get('valorTransacao').valueChanges.subscribe((e) => {
              e > 0.1 && (this.validForm = 'VALID' == this.form.get('valorTransacao').status);
            });
        }
        atualizarTxDebito(e, t) {
          return {
            0: () => ((this.taxas.debito0 = t), localStorage.setItem('debito0', t.toString())),
            199: () => (
              (this.taxas.debito199 = t), localStorage.setItem('debito199', t.toString())
            ),
            null: () => (
              (this.taxas.debitoNull = t), localStorage.setItem('debitoNull', t.toString())
            ),
          }[e]();
        }
        atualizarTxCredAVista(e, t) {
          if ('0' != this.form.get('promocao').value)
            return {
              '1D': () => (
                (this.taxas.creditoAVista1D = t),
                localStorage.setItem('creditoAVista1D', t.toString())
              ),
              '30D': () => (
                (this.taxas.creditoAVista30D = t),
                localStorage.setItem('creditoAVista30D', t.toString())
              ),
            }[e]();
          (this.taxas.creditoAVista0 = t), localStorage.setItem('creditoAVista0', t.toString());
        }
        atualizarTxCredParcelado2a6(e, t) {
          return {
            '1D': () => (
              (this.taxas.creditoParcelado2a61D = t),
              localStorage.setItem('creditoParcelado2a61D', t.toString())
            ),
            '30D': () => (
              (this.taxas.creditoParcelado2a630D = t),
              localStorage.setItem('creditoParcelado2a630D', t.toString())
            ),
          }[e]();
        }
        atualizarTxCredParcelado7a12(e, t) {
          return {
            '1D': () => (
              (this.taxas.creditoParcelado7a121D = t),
              localStorage.setItem('creditoParcelado7a121D', t.toString())
            ),
            '30D': () => (
              (this.taxas.creditoParcelado7a1230D = t),
              localStorage.setItem('creditoParcelado7a1230D', t.toString())
            ),
          }[e]();
        }
        atualizarValorCredAVista(e) {
          '0' === this.form.get('promocao').value
            ? this.form.get('taxaCreditoAVista').setValue(this.taxas.creditoAVista0)
            : this.form.get('taxaCreditoAVista').setValue(e);
        }
        obterTxCredito(e) {
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
        }
        obterTxDebito(e) {
          return {
            0: { taxa: this.taxas.debito0 },
            199: { taxa: this.taxas.debito199 },
            null: { taxa: this.taxas.debitoNull },
          }[e];
        }
        validarFormulario() {
          this.validForm = 'VALID' == this.form.get('valorTransacao').status;
        }
        calculaAVista(e, t) {
          const n = 'D\xe9b.' === t ? e.taxaDebito : e.taxaCreditoAVista,
            r = e.valorTransacao;
          let i = Number((100 * n).toFixed(3));
          i /= 100;
          const o = r / (1 - i / 100);
          let s = {};
          (s.nome = { curto: t, longo: 'D\xe9b.' === t ? 'D\xe9bito' : 'Cr\xe9dito 1x' }),
            (s.txIntermediacao = 'D\xe9b.' === t ? 0 : n),
            (s.qtdeParcelas = 1),
            (s.txParcelamento = 0),
            (s.txTotal = i),
            (s.valorVenda = r),
            (s.valorParcelaDespesaVendedor = r),
            (s.valorTxIntermediacaoVendedor = 'D\xe9b.' === t ? 0 : n),
            (s.valorTxParcelamentoVendedor = 0),
            (s.valorTxDespesaVendedor = (r * i) / 100),
            (s.valorTxDebito = 'D\xe9b.' === t ? i : 0),
            (s.valorLiquidoDespesaVendedor = r - s.valorTxDespesaVendedor),
            (s.valorVendaDespesaCliente = o),
            (s.valorParcelaDespesaCliente = o),
            (s.valorTxIntermediacaoCliente = 'D\xe9b.' === t ? 0 : n),
            (s.valorTxParcelamentoCliente = 0),
            (s.txDebitoJurosCliente = o - r),
            (s.valorTxDespesaCliente = s.txDebitoJurosCliente),
            (s.valorLiquidoDespesaClientel = r),
            (s.valorVendaDespesaParcelamentoCliente = r),
            (s.valorParcelaDespesaParcelamentoCliente = r),
            (s.valorLiquidoDespesaIntermediacaoCliente = r - s.valorTxDespesaVendedor),
            this.resultados.push(s);
        }
        calculaParcelado(e) {
          const t = e.valorTransacao;
          for (let n = 2; n <= 12; n++) {
            let r = this.calcularTxParcelamento(t, n, e.taxaParcelamento / 100),
              i = {};
            (i.nome = { curto: n + 'x', longo: `Cr\xe9dito ${n}x` }),
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
              (i.valorLiquidoDespesaIntermediacaoCliente = t - i.valorTxIntermediacaoVendedor),
              (i.valorTxDebito = 0),
              (i.txDebitoJurosCliente = 0),
              this.resultados.push(i);
          }
        }
        calcularTxParcelamento(e, t, n) {
          let r = 0,
            i = e / t;
          for (let o = 1; o <= t; o++) r += i / Math.pow(1 + n, o);
          return e - r;
        }
        calcular(e) {
          this.validarFormulario(),
            this.validForm
              ? ((this.resultados = []),
                this.calculaAVista(e, 'D\xe9b.'),
                this.calculaAVista(e, '1x'),
                this.calculaParcelado(e))
              : (this.validarFormulario(),
                this.el.nativeElement.querySelector('.valorTransacao').focus());
        }
        limpar() {
          (this.resultados = []),
            (this.validForm = !0),
            this.el.nativeElement.querySelector('.valorTransacao').focus();
          for (const e in this.taxas) this.taxas[e] = this.bkpTaxas[e];
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
        }
        recalcular() {
          (this.resultados = []),
            (this.validForm = !0),
            this.el.nativeElement.querySelector('.valorTransacao').focus();
        }
        getWidth() {
          (this.width = document.querySelector('body').scrollWidth),
            (this.mobile = Object(Jf.isMobile)());
        }
        removerTooltip() {
          document.querySelector('bs-tooltip-container') &&
            document.querySelector('bs-tooltip-container').classList.remove('show');
        }
        addTooltip() {
          document.querySelector('bs-tooltip-container') &&
            document.querySelector('bs-tooltip-container').classList.add('show');
        }
        ngOnDestroy() {
          this.subscriptions.forEach((e) => {
            e.unsubscribe();
          });
        }
      }
      let eg = (() => {
        class e {
          constructor() {
            this.taxas = {
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
            };
          }
          getTaxas() {
            return this.taxas;
          }
        }
        return (
          (e.ngInjectableDef = pe({
            factory: function () {
              return new e();
            },
            token: e,
            providedIn: 'root',
          })),
          e
        );
      })();
      var tg = $n({
        encapsulation: 0,
        styles: [
          [
            '.fa-exclamation-triangle[_ngcontent-%COMP%]{color:var(--yellow)}.col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .limpar[_ngcontent-%COMP%]{padding-top:3px}.calcular[_ngcontent-%COMP%], .limpar[_ngcontent-%COMP%]{padding-top:10px}.calcular[_ngcontent-%COMP%]{font-size:12px;color:var(--blue)}div.calcular[_ngcontent-%COMP%]:hover{transition:.1s;color:var(--blue)}.alert-erro[_ngcontent-%COMP%], label[_ngcontent-%COMP%]{font-size:16px;font-weight:600}.alert-erro[_ngcontent-%COMP%]{position:absolute;top:5px;right:15px;color:var(--red);display:block}button[_ngcontent-%COMP%]:disabled{cursor:no-drop}div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:15px}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .titulo1[_ngcontent-%COMP%]{background-color:#888a8bf8}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .titulo2[_ngcontent-%COMP%]{background-color:#17a2b8}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .titulo4[_ngcontent-%COMP%]{background-color:#d4ae53}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .titulo3[_ngcontent-%COMP%]{background-color:#964980}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:#fff;font-weight:500;font-size:14px}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .subtitulo1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .subtitulo2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .subtitulo3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .subtitulo4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .subtitulo1[_ngcontent-%COMP%]{background-color:#aaacad}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .subtitulo2[_ngcontent-%COMP%]{background-color:#58a9b6}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .subtitulo4[_ngcontent-%COMP%]{background-color:#c9ab66}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .subtitulo3[_ngcontent-%COMP%]{background-color:#c378ae}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#e6e9e9}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#d9dddd}div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:14px}div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:14px;vertical-align:middle}table[_ngcontent-%COMP%]{font-size:1px}section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.titulo-plano[_ngcontent-%COMP%]{font-size:12px;font-weight:700}.customClass[_ngcontent-%COMP%]{background-color:#964980}[_nghost-%COMP%] .tooltip-inner{border:2px solid #000;background-color:var(--dark);color:var(--light);font-size:13px;border-top-color:#000}[_nghost-%COMP%] .tooltip.bottom .tooltip-arrow:before, [_nghost-%COMP%] .tooltip.top .tooltip-arrow:before{border-top-color:#000;border-bottom-color:#000}section[_ngcontent-%COMP%]{box-shadow:0 0 2px var(--dark)}#dadosTabela[_ngcontent-%COMP%]{width:100%;margin:0 auto;transition:all .3s ease}#dadosTabela[_ngcontent-%COMP%]:hidden{transition:all .3s ease}[_ngcontent-%COMP%]::-webkit-scrollbar{-webkit-appearance:none;height:5px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:var(--secondary)}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--maq);border-radius:15px}.obs[_ngcontent-%COMP%]{font-style:italic}.fa-info-circle[_ngcontent-%COMP%]{color:var(--maq)}.all-table[_ngcontent-%COMP%]{height:600px}@media (min-width:376px){[_ngcontent-%COMP%]::-webkit-scrollbar{-webkit-appearance:none;height:8px}}@media (min-width:768px){.top-form[_ngcontent-%COMP%]{padding-top:90px!important}.limpar[_ngcontent-%COMP%]{padding-top:14px}.alert-erro[_ngcontent-%COMP%]{display:inline;top:9px}.alert-erro[_ngcontent-%COMP%], .obs[_ngcontent-%COMP%], label[_ngcontent-%COMP%]{font-size:12px}}@media (min-width:992px){.top-form[_ngcontent-%COMP%]{padding-top:170px!important}.limpar[_ngcontent-%COMP%]{padding-top:36px}.calcular[_ngcontent-%COMP%]{padding-top:32px}}',
          ],
        ],
        data: {},
      });
      function ng(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(
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
            (e()(), qo(-1, null, ['Valor obrigat\xf3rio! '])),
          ],
          null,
          null
        );
      }
      function rg(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(0, 0, null, null, 0, 'div', [['class', 'col-md-6']], null, null, null, null, null)),
          ],
          null,
          null
        );
      }
      function ig(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(
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
            (e()(), qo(-1, null, [' VENDEDOR ARCANDO COM TODAS AS TAXAS '])),
          ],
          null,
          null
        );
      }
      function og(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(
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
            (e()(), qo(-1, null, [' CLIENTE ARCANDO COM TODAS AS TAXAS '])),
          ],
          null,
          null
        );
      }
      function sg(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(
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
            (e()(), qo(-1, null, [' CLIENTE ARCANDO COM A TAXA DE PARCELAMENTO '])),
          ],
          null,
          null
        );
      }
      function lg(e) {
        return Zo(
          0,
          [(e()(), qo(-1, null, [' Descri\xe7\xe3o do plano de pagamento. ']))],
          null,
          null
        );
      }
      function ag(e) {
        return Zo(0, [(e()(), qo(-1, null, [' Taxa de parcelamento ao m\xeas. ']))], null, null);
      }
      function ug(e) {
        return Zo(
          0,
          [
            (e()(),
            qo(-1, null, [' Taxa de intermedia\xe7\xe3o mais a taxa de parcelamento ao m\xeas. '])),
          ],
          null,
          null
        );
      }
      function cg(e) {
        return Zo(
          0,
          [
            (e()(),
            qo(-1, null, [
              ' Parcela sem acr\xe9scimo no caso do vendedor arcar com os descontos. ',
            ])),
          ],
          null,
          null
        );
      }
      function hg(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(
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
            (e()(), Io(0, [['subtitulo4', 2]], null, 0, null, cg)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(-1, null, ['Valor das Parcelas ao Cliente'])),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          null
        );
      }
      function dg(e) {
        return Zo(
          0,
          [(e()(), qo(-1, null, [' Valor das taxas de intermedia\xe7\xe3o e de parcelamento. ']))],
          null,
          null
        );
      }
      function pg(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(
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
            (e()(), Io(0, [['subtitulo5', 2]], null, 0, null, dg)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(-1, null, ['Valor das taxas'])),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          null
        );
      }
      function fg(e) {
        return Zo(
          0,
          [
            (e()(),
            qo(-1, null, [
              ' Valor da compra subtra\xeddo da taxa. \xc9 o valor que o vendedor ir\xe1 receber. ',
            ])),
          ],
          null,
          null
        );
      }
      function gg(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(
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
            (e()(), Io(0, [['subtitulo6', 2]], null, 0, null, fg)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(-1, null, ['Vendedor Recebe'])),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          null
        );
      }
      function mg(e) {
        return Zo(
          0,
          [
            (e()(),
            qo(-1, null, [
              ' Valor da compra no caso do vendedor repassar as taxas do financiamento ao cliente. Vendedor ir\xe1 receber o valor integral da transa\xe7\xe3o.',
            ])),
          ],
          null,
          null
        );
      }
      function vg(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(
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
            (e()(), Io(0, [['subtitulo7', 2]], null, 0, null, mg)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(-1, null, ['Valor ao Cliente'])),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          null
        );
      }
      function _g(e) {
        return Zo(
          0,
          [
            (e()(),
            qo(-1, null, [
              ' Valor da parcela no caso do vendedor repassar as taxas do financiamento ao cliente.',
            ])),
          ],
          null,
          null
        );
      }
      function bg(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(
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
            (e()(), Io(0, [['subtitulo8', 2]], null, 0, null, _g)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(-1, null, ['Valor das Parcelas ao Cliente'])),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          null
        );
      }
      function yg(e) {
        return Zo(
          0,
          [(e()(), qo(-1, null, [' Valor das taxas de intermedia\xe7\xe3o e de parcelamento.']))],
          null,
          null
        );
      }
      function wg(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(
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
            (e()(), Io(0, [['subtitulo8', 2]], null, 0, null, yg)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(-1, null, ['Valor das taxas'])),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          null
        );
      }
      function Cg(e) {
        return Zo(
          0,
          [(e()(), qo(-1, null, ['\xc9 o valor que o vendedor ir\xe1 receber.']))],
          null,
          null
        );
      }
      function xg(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(
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
            (e()(), Io(0, [['subtitulo9', 2]], null, 0, null, Cg)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(-1, null, ['Vendedor Recebe'])),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          null
        );
      }
      function Sg(e) {
        return Zo(
          0,
          [
            (e()(),
            qo(-1, null, ['Valor da compra para o cliente com juros da taxa de parcelamento.'])),
          ],
          null,
          null
        );
      }
      function Eg(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(
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
            (e()(), Io(0, [['subtitulo10', 2]], null, 0, null, Sg)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(-1, null, ['Valor ao Cliente'])),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          null
        );
      }
      function Tg(e) {
        return Zo(
          0,
          [
            (e()(),
            qo(-1, null, ['Valor da parcelada somente com juros da taxa de parcelamento.'])),
          ],
          null,
          null
        );
      }
      function Pg(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(
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
            (e()(), Io(0, [['subtitulo11', 2]], null, 0, null, Tg)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(-1, null, ['Valor das Parcelas ao Cliente'])),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          null
        );
      }
      function Rg(e) {
        return Zo(
          0,
          [
            (e()(),
            qo(-1, null, [
              'Valor l\xedquido descontando a taxa de intermedia\xe7\xe3o. \xc9 o valor que o vendedor ir\xe1 receber.',
            ])),
          ],
          null,
          null
        );
      }
      function Ag(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(
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
            (e()(), Io(0, [['subtitulo12', 2]], null, 0, null, Rg)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(-1, null, ['Vendedor Recebe'])),
          ],
          function (e, t) {
            e(t, 3, 0, Nr(t, 1), 'auto', 'div');
          },
          null
        );
      }
      function Dg(e) {
        return Zo(
          0,
          [(e()(), qo(0, null, [' Taxa de Parcelamento ao m\xeas: ', ' '])), Ho(1, 2)],
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
      function Ig(e) {
        return Zo(
          0,
          [
            (e()(), qo(0, null, ['Taxa de intermedia\xe7\xe3o: ', ' '])),
            Ho(1, 2),
            (e()(), Oo(2, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), Oo(3, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), qo(4, null, [' Taxa de Parcelamento: ', ' '])),
            Ho(5, 2),
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
      function Og(e) {
        return Zo(
          0,
          [
            (e()(), Oo(0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(), qo(-1, null, [' Valor da venda dividido pelas quantidade de parcelas. '])),
            (e()(), Oo(2, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), qo(3, null, [' ', ' / ', ' '])),
            Ho(4, 2),
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
      function Vg(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(0, 0, null, null, 5, 'td', [['class', 'conteudo2']], null, null, null, null, null)),
            (e()(), Io(0, [['parcelaCliente', 2]], null, 0, null, Og)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(4, null, ['', ''])),
            Ho(5, 2),
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
      function kg(e) {
        return Zo(
          0,
          [
            (e()(), qo(0, null, [' Valor de desconto da taxa D\xe9bito: ', ' '])),
            Ho(1, 2),
            (e()(), Oo(2, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), Oo(3, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), qo(4, null, [' Valor de desconto da taxa de intermedia\xe7\xe3o: ', ' '])),
            Ho(5, 2),
            (e()(), Oo(6, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), Oo(7, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), qo(8, null, [' Valor de desconto da taxa de Parcelamento: ', ' '])),
            Ho(9, 2),
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
      function Mg(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(0, 0, null, null, 5, 'td', [['class', 'conteudo2']], null, null, null, null, null)),
            (e()(), Io(0, [['valorTxDespesaVendedor', 2]], null, 0, null, kg)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(4, null, [' ', ''])),
            Ho(5, 2),
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
      function Ng(e) {
        return Zo(
          0,
          [
            (e()(), Oo(0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(), qo(-1, null, [' Valor da venda subtra\xeddo pelo Valor da venda das taxas. '])),
            (e()(), Oo(2, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), qo(3, null, [' ', ' - ', ' '])),
            Ho(4, 2),
            Ho(5, 2),
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
      function Lg(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(
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
              jp,
              function (e) {
                return [e];
              },
              [Kf]
            ),
            Kr(2, 4538368, null, 0, Kf, [[2, qf], Zt, gn], null, null),
            (e()(), Io(0, [['valorLiquidoDespesaVendedor', 2]], null, 0, null, Ng)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(6, null, [' ', ' '])),
            Ho(7, 2),
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
      function Fg(e) {
        return Zo(
          0,
          [
            (e()(), Oo(0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(), qo(-1, null, [' Valor da venda somado ao Valor do total de taxas. '])),
            (e()(), qo(2, null, [' ', ' + ', ' '])),
            Ho(3, 2),
            Ho(4, 2),
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
      function Ug(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(0, 0, null, null, 5, 'td', [['class', 'conteudo4']], null, null, null, null, null)),
            (e()(), Io(0, [['valorVendaDespesaCliente', 2]], null, 0, null, Fg)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(4, null, [' ', ''])),
            Ho(5, 2),
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
      function $g(e) {
        return Zo(
          0,
          [
            (e()(), Oo(0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(), qo(-1, null, [' Valor da venda dividido pelas quantidade de parcelas. '])),
            (e()(), Oo(2, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), qo(3, null, [' ', ' / ', ' '])),
            Ho(4, 2),
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
      function jg(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(0, 0, null, null, 5, 'td', [['class', 'conteudo4']], null, null, null, null, null)),
            (e()(), Io(0, [['valorParcelaDespesaCliente', 2]], null, 0, null, $g)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(4, null, [' ', ' '])),
            Ho(5, 2),
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
      function Hg(e) {
        return Zo(
          0,
          [
            (e()(), qo(0, null, [' Valor de desconto da taxa D\xe9bito: ', ' '])),
            Ho(1, 2),
            (e()(), Oo(2, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), Oo(3, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), qo(4, null, [' Valor de desconto da taxa de intermedia\xe7\xe3o: ', ' '])),
            Ho(5, 2),
            (e()(), Oo(6, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), Oo(7, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), qo(8, null, [' Valor de desconto da taxa de Parcelamento: ', ' '])),
            Ho(9, 2),
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
      function zg(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(0, 0, null, null, 5, 'td', [['class', 'conteudo4']], null, null, null, null, null)),
            (e()(), Io(0, [['valorTxDespesaCliente', 2]], null, 0, null, Hg)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(4, null, ['', ''])),
            Ho(5, 2),
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
      function Bg(e) {
        return Zo(
          0,
          [
            (e()(), Oo(0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(), qo(-1, null, [' Valor liqu\xeddo da venda. '])),
          ],
          null,
          null
        );
      }
      function qg(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(0, 0, null, null, 5, 'td', [['class', 'conteudo4']], null, null, null, null, null)),
            (e()(), Io(0, [['valorLiquidoDespesaClientel', 2]], null, 0, null, Bg)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(4, null, ['', ''])),
            Ho(5, 2),
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
      function Gg(e) {
        return Zo(
          0,
          [
            (e()(), Oo(0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(),
            qo(-1, null, [
              ' Valor da venda somado ao Valor da taxa do parcelamento pelo cliente. ',
            ])),
            (e()(), qo(2, null, [' ', ' + ', ' '])),
            Ho(3, 2),
            Ho(4, 2),
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
      function Wg(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(0, 0, null, null, 5, 'td', [['class', 'conteudo3']], null, null, null, null, null)),
            (e()(), Io(0, [['valorVendaDespesaParcelamentoCliente', 2]], null, 0, null, Gg)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(4, null, [' ', ''])),
            Ho(5, 2),
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
      function Zg(e) {
        return Zo(
          0,
          [
            (e()(), Oo(0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(), qo(-1, null, [' Valor da venda dividido pelas quantidade de parcelas. '])),
            (e()(), Oo(2, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), qo(3, null, [' ', ' / ', ' '])),
            Ho(4, 2),
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
      function Kg(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(0, 0, null, null, 5, 'td', [['class', 'conteudo3']], null, null, null, null, null)),
            (e()(), Io(0, [['valorParcelaDespesaParcelamentoCliente', 2]], null, 0, null, Zg)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(4, null, [' ', ''])),
            Ho(5, 2),
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
      function Qg(e) {
        return Zo(
          0,
          [
            (e()(), Oo(0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(),
            qo(-1, null, [
              'Valor da venda subtra\xeddo ao valor da taxa da taxa de intermedia\xe7\xe3o. ',
            ])),
            (e()(), Oo(2, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(), qo(3, null, [' ', ' - ', ' '])),
            Ho(4, 2),
            Ho(5, 2),
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
      function Yg(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(0, 0, null, null, 5, 'td', [['class', 'conteudo3']], null, null, null, null, null)),
            (e()(), Io(0, [['valorLiquidoDespesaIntermediacaoCliente', 2]], null, 0, null, Qg)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(4, null, [' ', ''])),
            Ho(5, 2),
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
      function Jg(e) {
        return Zo(
          0,
          [
            (e()(), Oo(0, 0, null, null, 41, 'tr', [], null, null, null, null, null)),
            Yr(512, null, Sl, El, [fn, gn, Zt, Xt]),
            Kr(2, 278528, null, 0, Pl, [Sl], { ngClass: [0, 'ngClass'] }, null),
            zo(3, { odd: 0, even: 1 }),
            (e()(),
            Oo(
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
            (e()(), Oo(5, 16777216, null, null, 2, 'span', [], null, null, null, null, null)),
            Kr(6, 212992, null, 0, Fp, [xn, zd, Mp, Zt, Xt, Dp], { tooltip: [0, 'tooltip'] }, null),
            (e()(), qo(7, null, ['', ''])),
            (e()(),
            Oo(
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
            (e()(), qo(9, null, ['', ''])),
            (e()(),
            Oo(10, 0, null, null, 5, 'td', [['class', 'conteudo1']], null, null, null, null, null)),
            (e()(), Io(0, [['txParcelamento', 2]], null, 0, null, Dg)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], triggers: [1, 'triggers'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(14, null, [' ', ''])),
            Ho(15, 2),
            (e()(),
            Oo(16, 0, null, null, 5, 'td', [['class', 'conteudo1']], null, null, null, null, null)),
            (e()(), Io(0, [['txTotal', 2]], null, 0, null, Ig)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(20, null, [' ', ''])),
            Ho(21, 2),
            (e()(), Io(16777216, null, null, 1, null, Vg)),
            Kr(23, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Io(16777216, null, null, 1, null, Mg)),
            Kr(25, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Io(16777216, null, null, 1, null, Lg)),
            Kr(27, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Io(16777216, null, null, 1, null, Ug)),
            Kr(29, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Io(16777216, null, null, 1, null, jg)),
            Kr(31, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Io(16777216, null, null, 1, null, zg)),
            Kr(33, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Io(16777216, null, null, 1, null, qg)),
            Kr(35, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Io(16777216, null, null, 1, null, Wg)),
            Kr(37, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Io(16777216, null, null, 1, null, Kg)),
            Kr(39, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Io(16777216, null, null, 1, null, Yg)),
            Kr(41, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
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
      function Xg(e) {
        return Zo(
          0,
          [
            Qr(0, Ml, [Ii]),
            Qr(0, Nl, [Ii]),
            (e()(),
            Oo(
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
            Oo(
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
            Oo(
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
            Oo(
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
            Oo(
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
            Kr(7, 16384, null, 0, Vf, [], null, null),
            Kr(
              8,
              540672,
              null,
              0,
              Mf,
              [
                [8, null],
                [8, null],
              ],
              { form: [0, 'form'] },
              null
            ),
            Yr(2048, null, qp, null, [Mf]),
            Kr(10, 16384, null, 0, Qp, [[4, qp]], null, null),
            (e()(),
            Oo(11, 0, null, null, 129, 'div', [['class', 'row']], null, null, null, null, null)),
            (e()(),
            Oo(
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
            Oo(
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
            (e()(), qo(-1, null, ['Valor da Venda: '])),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'] },
              null
            ),
            (e()(), Io(16777216, null, null, 1, null, ng)),
            Kr(18, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(),
            Oo(
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
            Yr(512, null, Sl, El, [fn, gn, Zt, Xt]),
            Kr(
              21,
              278528,
              null,
              0,
              Pl,
              [Sl],
              { klass: [0, 'klass'], ngClass: [1, 'ngClass'] },
              null
            ),
            zo(22, { 'is-invalid': 0 }),
            Kr(23, 16384, null, 0, zp, [Xt, Zt, [2, Hp]], null, null),
            Kr(24, 4538368, null, 0, Kf, [[2, qf], Zt, gn], null, null),
            Yr(
              1024,
              null,
              jp,
              function (e, t) {
                return [e, t];
              },
              [zp, Kf]
            ),
            Kr(
              26,
              671744,
              null,
              0,
              Uf,
              [
                [3, qp],
                [8, null],
                [8, null],
                [6, jp],
                [2, kf],
              ],
              { name: [0, 'name'] },
              null
            ),
            Yr(2048, null, Wp, null, [Uf]),
            Kr(28, 16384, null, 0, Kp, [[4, Wp]], null, null),
            (e()(),
            Oo(
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
            Oo(
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
            (e()(), qo(-1, null, ['Plano de Recebimento: '])),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'] },
              null
            ),
            (e()(),
            Oo(
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
            Kr(35, 16384, null, 0, hf, [Xt, Zt], null, null),
            Yr(
              1024,
              null,
              jp,
              function (e) {
                return [e];
              },
              [hf]
            ),
            Kr(
              37,
              671744,
              null,
              0,
              Uf,
              [
                [3, qp],
                [8, null],
                [8, null],
                [6, jp],
                [2, kf],
              ],
              { name: [0, 'name'] },
              null
            ),
            Yr(2048, null, Wp, null, [Uf]),
            Kr(39, 16384, null, 0, Kp, [[4, Wp]], null, null),
            (e()(),
            Oo(40, 0, null, null, 3, 'option', [['value', '1D']], null, null, null, null, null)),
            Kr(41, 147456, null, 0, df, [Zt, Xt, [2, hf]], { value: [0, 'value'] }, null),
            Kr(42, 147456, null, 0, ff, [Zt, Xt, [8, null]], { value: [0, 'value'] }, null),
            (e()(), qo(-1, null, ['1 Dia (Antecipado)'])),
            (e()(),
            Oo(44, 0, null, null, 3, 'option', [['value', '30D']], null, null, null, null, null)),
            Kr(45, 147456, null, 0, df, [Zt, Xt, [2, hf]], { value: [0, 'value'] }, null),
            Kr(46, 147456, null, 0, ff, [Zt, Xt, [8, null]], { value: [0, 'value'] }, null),
            (e()(), qo(-1, null, ['30 Dias (Normal em parcelas)'])),
            (e()(),
            Oo(
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
            Oo(
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
            (e()(), qo(-1, null, ['Taxa D\xe9bito: '])),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'] },
              null
            ),
            (e()(),
            Oo(
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
            Kr(54, 16384, null, 0, zp, [Xt, Zt, [2, Hp]], null, null),
            Kr(55, 4538368, null, 0, Kf, [[2, qf], Zt, gn], { options: [0, 'options'] }, null),
            zo(56, { decimal: 0, prefix: 1, suffix: 2, thousands: 3 }),
            Yr(
              1024,
              null,
              jp,
              function (e, t) {
                return [e, t];
              },
              [zp, Kf]
            ),
            Kr(
              58,
              671744,
              null,
              0,
              Uf,
              [
                [3, qp],
                [8, null],
                [8, null],
                [6, jp],
                [2, kf],
              ],
              { name: [0, 'name'] },
              null
            ),
            Yr(2048, null, Wp, null, [Uf]),
            Kr(60, 16384, null, 0, Kp, [[4, Wp]], null, null),
            (e()(),
            Oo(
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
            Oo(
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
            (e()(), qo(63, null, ['Taxa Cr\xe9dito a Vista ', ': '])),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'] },
              null
            ),
            (e()(),
            Oo(
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
            Kr(67, 16384, null, 0, zp, [Xt, Zt, [2, Hp]], null, null),
            Kr(68, 4538368, null, 0, Kf, [[2, qf], Zt, gn], { options: [0, 'options'] }, null),
            zo(69, { decimal: 0, prefix: 1, suffix: 2, thousands: 3 }),
            Yr(
              1024,
              null,
              jp,
              function (e, t) {
                return [e, t];
              },
              [zp, Kf]
            ),
            Kr(
              71,
              671744,
              null,
              0,
              Uf,
              [
                [3, qp],
                [8, null],
                [8, null],
                [6, jp],
                [2, kf],
              ],
              { name: [0, 'name'] },
              null
            ),
            Yr(2048, null, Wp, null, [Uf]),
            Kr(73, 16384, null, 0, Kp, [[4, Wp]], null, null),
            (e()(),
            Oo(
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
            Oo(
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
            (e()(), qo(-1, null, ['Taxa de Cr\xe9dito Parcelado 2x a 6x: '])),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'] },
              null
            ),
            (e()(),
            Oo(
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
            Kr(80, 16384, null, 0, zp, [Xt, Zt, [2, Hp]], null, null),
            Kr(81, 4538368, null, 0, Kf, [[2, qf], Zt, gn], { options: [0, 'options'] }, null),
            zo(82, { decimal: 0, prefix: 1, suffix: 2, thousands: 3 }),
            Yr(
              1024,
              null,
              jp,
              function (e, t) {
                return [e, t];
              },
              [zp, Kf]
            ),
            Kr(
              84,
              671744,
              null,
              0,
              Uf,
              [
                [3, qp],
                [8, null],
                [8, null],
                [6, jp],
                [2, kf],
              ],
              { name: [0, 'name'] },
              null
            ),
            Yr(2048, null, Wp, null, [Uf]),
            Kr(86, 16384, null, 0, Kp, [[4, Wp]], null, null),
            (e()(),
            Oo(
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
            Oo(
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
            (e()(), qo(-1, null, ['Taxa de Cr\xe9dito Parcelado 7x a 12x: '])),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'] },
              null
            ),
            (e()(),
            Oo(
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
            Kr(93, 16384, null, 0, zp, [Xt, Zt, [2, Hp]], null, null),
            Kr(94, 4538368, null, 0, Kf, [[2, qf], Zt, gn], { options: [0, 'options'] }, null),
            zo(95, { decimal: 0, prefix: 1, suffix: 2, thousands: 3 }),
            Yr(
              1024,
              null,
              jp,
              function (e, t) {
                return [e, t];
              },
              [zp, Kf]
            ),
            Kr(
              97,
              671744,
              null,
              0,
              Uf,
              [
                [3, qp],
                [8, null],
                [8, null],
                [6, jp],
                [2, kf],
              ],
              { name: [0, 'name'] },
              null
            ),
            Yr(2048, null, Wp, null, [Uf]),
            Kr(99, 16384, null, 0, Kp, [[4, Wp]], null, null),
            (e()(),
            Oo(
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
            Oo(
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
            (e()(), qo(-1, null, ['Taxa de Antecipa\xe7\xe3o / Parcelamento A.M.: '])),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'] },
              null
            ),
            (e()(),
            Oo(
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
            Kr(106, 16384, null, 0, zp, [Xt, Zt, [2, Hp]], null, null),
            Kr(107, 4538368, null, 0, Kf, [[2, qf], Zt, gn], { options: [0, 'options'] }, null),
            zo(108, { decimal: 0, prefix: 1, suffix: 2, thousands: 3 }),
            Yr(
              1024,
              null,
              jp,
              function (e, t) {
                return [e, t];
              },
              [zp, Kf]
            ),
            Kr(
              110,
              671744,
              null,
              0,
              Uf,
              [
                [3, qp],
                [8, null],
                [8, null],
                [6, jp],
                [2, kf],
              ],
              { name: [0, 'name'] },
              null
            ),
            Yr(2048, null, Wp, null, [Uf]),
            Kr(112, 16384, null, 0, Kp, [[4, Wp]], null, null),
            (e()(),
            Oo(
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
            Oo(
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
            (e()(), qo(-1, null, ['Tipo de Vis\xe3o das Taxas: '])),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'] },
              null
            ),
            (e()(),
            Oo(
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
            Kr(119, 16384, null, 0, hf, [Xt, Zt], null, null),
            Yr(
              1024,
              null,
              jp,
              function (e) {
                return [e];
              },
              [hf]
            ),
            Kr(
              121,
              671744,
              null,
              0,
              Uf,
              [
                [3, qp],
                [8, null],
                [8, null],
                [6, jp],
                [2, kf],
              ],
              { name: [0, 'name'] },
              null
            ),
            Yr(2048, null, Wp, null, [Uf]),
            Kr(123, 16384, null, 0, Kp, [[4, Wp]], null, null),
            (e()(),
            Oo(
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
            Kr(125, 147456, null, 0, df, [Zt, Xt, [2, hf]], { value: [0, 'value'] }, null),
            Kr(126, 147456, null, 0, ff, [Zt, Xt, [8, null]], { value: [0, 'value'] }, null),
            (e()(), qo(-1, null, ['Vendedor'])),
            (e()(),
            Oo(
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
            Kr(129, 147456, null, 0, df, [Zt, Xt, [2, hf]], { value: [0, 'value'] }, null),
            Kr(130, 147456, null, 0, ff, [Zt, Xt, [8, null]], { value: [0, 'value'] }, null),
            (e()(), qo(-1, null, ['Cliente'])),
            (e()(), Io(16777216, null, null, 1, null, rg)),
            Kr(133, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(),
            Oo(
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
            Oo(
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
            (e()(), qo(-1, null, [' Limpar '])),
            (e()(),
            Oo(
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
            Oo(
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
            (e()(), Oo(139, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(), qo(-1, null, [' C\xe1lcular '])),
            (e()(),
            Oo(
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
            Oo(
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
            Oo(
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
            Oo(
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
            (e()(), Oo(145, 0, null, null, 1, 'span', [], null, null, null, null, null)),
            (e()(), qo(-1, null, [' Recalcular '])),
            (e()(),
            Oo(
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
            Oo(
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
            (e()(), Oo(149, 0, null, null, 48, 'thead', [], null, null, null, null, null)),
            (e()(), Oo(150, 0, null, null, 8, 'tr', [], null, null, null, null, null)),
            (e()(),
            Oo(
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
            (e()(), qo(-1, null, ['PLANO'])),
            (e()(), Io(16777216, null, null, 1, null, ig)),
            Kr(154, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Io(16777216, null, null, 1, null, og)),
            Kr(156, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Io(16777216, null, null, 1, null, sg)),
            Kr(158, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Oo(159, 0, null, null, 38, 'tr', [], null, null, null, null, null)),
            (e()(),
            Oo(
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
            (e()(), Io(0, [['subtitulo1', 2]], null, 0, null, lg)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(-1, null, ['Desc.'])),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(-1, null, ['Descri\xe7\xe3o'])),
            (e()(),
            Oo(
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
            (e()(), Io(0, [['subtitulo2', 2]], null, 0, null, ag)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(-1, null, ['Taxa A.M.'])),
            (e()(),
            Oo(
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
            (e()(), Io(0, [['subtitulo3', 2]], null, 0, null, ug)),
            (e()(),
            Oo(
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
              Fp,
              [xn, zd, Mp, Zt, Xt, Dp],
              { tooltip: [0, 'tooltip'], placement: [1, 'placement'], container: [2, 'container'] },
              null
            ),
            (e()(), qo(-1, null, ['Taxa Total'])),
            (e()(), Io(16777216, null, null, 1, null, hg)),
            Kr(179, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Io(16777216, null, null, 1, null, pg)),
            Kr(181, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Io(16777216, null, null, 1, null, gg)),
            Kr(183, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Io(16777216, null, null, 1, null, vg)),
            Kr(185, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Io(16777216, null, null, 1, null, bg)),
            Kr(187, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Io(16777216, null, null, 1, null, wg)),
            Kr(189, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Io(16777216, null, null, 1, null, xg)),
            Kr(191, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Io(16777216, null, null, 1, null, Eg)),
            Kr(193, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Io(16777216, null, null, 1, null, Pg)),
            Kr(195, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Io(16777216, null, null, 1, null, Ag)),
            Kr(197, 16384, null, 0, Il, [xn, wn], { ngIf: [0, 'ngIf'] }, null),
            (e()(), Oo(198, 0, null, null, 2, 'tbody', [], null, null, null, null, null)),
            (e()(), Io(16777216, null, null, 1, null, Jg)),
            Kr(200, 278528, null, 0, Al, [xn, wn, fn], { ngForOf: [0, 'ngForOf'] }, null),
            (e()(),
            Oo(
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
            Oo(
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
            (e()(), qo(-1, null, [' Clique sobre a taxa ou valor para mais detalhes. '])),
            (e()(),
            Oo(
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
            Oo(
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
            (e()(), qo(-1, null, ['Passe o mouse sobre a taxa ou valor para mais detalhes. '])),
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
            var o = e(t, 69, 0, '.', '', ' %', ',');
            e(t, 68, 0, o),
              e(t, 71, 0, 'taxaCreditoAVista'),
              e(t, 78, 0, 'Taxa cobrada por vendas em cr\xe9dito parcelado');
            var s = e(t, 82, 0, '.', '', ' %', ',');
            e(t, 81, 0, s),
              e(t, 84, 0, 'taxaCreditoParcelado2a6'),
              e(t, 91, 0, 'Taxa cobrada por vendas em cr\xe9dito parcelado.');
            var l = e(t, 95, 0, '.', '', ' %', ',');
            e(t, 94, 0, l),
              e(t, 97, 0, 'taxaCreditoParcelado7a12'),
              e(t, 104, 0, 'Taxa cobrada em cada parcela por vendas em cr\xe9dito parcelado.');
            var a = e(t, 108, 0, '.', '', ' %', ',');
            e(t, 107, 0, a),
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
      function em(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(0, 0, null, null, 1, 'app-comparador-de-taxas', [], null, null, null, Xg, tg)),
            Kr(1, 245760, null, 0, Xf, [jf, eg, Zt], null, null),
          ],
          function (e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      var tm = Er('app-comparador-de-taxas', Xf, em, {}, {}, []),
        nm = $n({
          encapsulation: 0,
          styles: [
            '.tooltip[_nghost-%COMP%] {\n      display: block;\n      pointer-events: none;\n    }\n    .bs3.tooltip.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.tooltip.bottom[_nghost-%COMP%] {\n      margin-top: 0px;\n    }\n    .bs3.bs-tooltip-left[_nghost-%COMP%], .bs3.bs-tooltip-right[_nghost-%COMP%]{\n      margin: 0px;\n    }\n    .bs3.bs-tooltip-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-tooltip-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      margin: .3rem 0;\n    }',
          ],
          data: {},
        });
      function rm(e) {
        return Zo(
          2,
          [
            (e()(),
            Oo(
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
            Oo(
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
      function im(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(
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
              rm,
              nm
            )),
            Kr(1, 4243456, null, 0, Np, [Mp], null, null),
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
      }
      var om = Er('bs-tooltip-container', Np, im, {}, {}, ['*']),
        sm = $n({ encapsulation: 0, styles: [['']], data: {} });
      function lm(e) {
        return Zo(
          0,
          [
            (e()(),
            Oo(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            Kr(1, 212992, null, 0, sd, [od, xn, Ht, [8, null], mn], null, null),
          ],
          function (e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      function am(e) {
        return Zo(
          0,
          [
            (e()(), Oo(0, 0, null, null, 1, 'app-root', [], null, null, null, lm, sm)),
            Kr(1, 49152, null, 0, nl, [], null, null),
          ],
          null,
          null
        );
      }
      var um = Er('app-root', nl, am, {}, {}, []);
      class cm {}
      var hm,
        dm,
        pm,
        fm = n('vT00');
      (hm = n.n(fm).a),
        'string' != typeof (dm = 'pt-BR') && ((pm = dm), (dm = hm[fi.LocaleId])),
        (dm = dm.toLowerCase().replace(/_/g, '-')),
        (pi[dm] = hm),
        pm && (pi[dm][fi.ExtraData] = pm);
      class gm {}
      var mm = Xs(tl, [nl], function (e) {
        return (function (e) {
          const t = {},
            n = [];
          let r = !1;
          for (let i = 0; i < e.length; i++) {
            const o = e[i];
            o.token === Me && !0 === o.value && (r = !0),
              1073741824 & o.flags && n.push(o.token),
              (o.index = i),
              (t[Fn(o.token)] = o);
          }
          return { factory: null, providersByKey: t, providers: e, modules: n, isRoot: r };
        })([
          mr(512, Ht, zt, [[8, [Id, tm, om, um]], [3, Ht], qt]),
          mr(4352, Ii, 'pt-BR', []),
          mr(4608, Cl, xl, [Ii, [2, wl]]),
          mr(5120, di, Ao, [Zi]),
          mr(5120, Si, Ei, []),
          mr(5120, fn, Po, []),
          mr(5120, gn, Ro, []),
          mr(4608, Du, Iu, [$l]),
          mr(6144, bt, null, [Du]),
          mr(4608, xu, Eu, []),
          mr(
            5120,
            Ja,
            function (e, t, n, r, i, o, s, l) {
              return [new wu(e, t, n), new Au(r), new Tu(i, o, s, l)];
            },
            [$l, Zi, Ri, $l, $l, xu, Di, [2, Su]]
          ),
          mr(4608, Xa, Xa, [Ja, Zi]),
          mr(135680, nu, nu, [$l]),
          mr(4608, lu, lu, [Xa, nu, Si]),
          mr(6144, Yt, null, [lu]),
          mr(6144, tu, null, [nu]),
          mr(4608, to, to, [Zi]),
          mr(5120, Wc, xd, [rd]),
          mr(4608, cd, cd, []),
          mr(6144, ad, null, [cd]),
          mr(135680, hd, hd, [rd, go, Li, Le, ad]),
          mr(4608, ud, ud, []),
          mr(5120, dd, _d, [rd, jl, pd]),
          mr(5120, Pd, Td, [Sd]),
          mr(
            5120,
            Ai,
            function (e) {
              return [e];
            },
            [Pd]
          ),
          mr(4608, sf, sf, []),
          mr(4608, jf, jf, []),
          mr(4608, Mp, Mp, []),
          mr(4608, Dp, Dp, [Zi, Yt, Ri]),
          mr(4608, zd, zd, [Ht, Zi, Le, Dp, po]),
          mr(4608, eg, eg, []),
          mr(1073742336, Ul, Ul, []),
          mr(1024, Et, Uu, []),
          mr(
            1024,
            lo,
            function () {
              return [md()];
            },
            []
          ),
          mr(512, Sd, Sd, [Le]),
          mr(
            1024,
            Ci,
            function (e, t) {
              return [
                ((n = e),
                Ka('probe', Ya),
                Ka(
                  'coreTokens',
                  Object.assign(
                    {},
                    Qa,
                    (n || []).reduce((e, t) => ((e[t.name] = t.token), e), {})
                  )
                ),
                () => Ya),
                Ed(t),
              ];
              var n;
            },
            [[2, lo], Sd]
          ),
          mr(512, xi, xi, [[2, Ci]]),
          mr(131584, po, po, [Zi, Di, Le, Et, Ht, xi]),
          mr(1073742336, Do, Do, [po]),
          mr(1073742336, $u, $u, [[3, $u]]),
          mr(1024, fd, yd, [[3, rd]]),
          mr(512, Ec, Tc, []),
          mr(512, od, od, []),
          mr(256, pd, {}, []),
          mr(1024, ol, bd, [rl, [2, sl], pd]),
          mr(512, ll, ll, [ol, rl]),
          mr(512, Li, Li, []),
          mr(512, go, _o, [Li, [2, mo]]),
          mr(
            1024,
            Qh,
            function () {
              return [
                [
                  { path: '', component: Xf },
                  { path: '', pathMatch: 'full', redirectTo: 'comparador' },
                  { path: '**', component: Xf },
                ],
              ];
            },
            []
          ),
          mr(1024, rd, Cd, [po, Ec, od, ll, Le, go, Li, Qh, pd, [2, Jh], [2, Zh]]),
          mr(1073742336, vd, vd, [
            [2, fd],
            [2, rd],
          ]),
          mr(1073742336, cm, cm, []),
          mr(1073742336, $f, $f, []),
          mr(1073742336, Hf, Hf, []),
          mr(1073742336, zf, zf, []),
          mr(1073742336, Yf, Yf, []),
          mr(1073742336, Up, Up, []),
          mr(1073742336, gm, gm, []),
          mr(1073742336, tl, tl, []),
          mr(256, Me, !0, []),
          mr(
            256,
            qf,
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
        if (Ke) throw new Error('Cannot enable prod mode after platform setup.');
        Ze = !1;
      })(),
        Fu()
          .bootstrapModuleFactory(mm)
          .catch((e) => console.error(e));
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
