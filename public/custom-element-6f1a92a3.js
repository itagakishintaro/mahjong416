/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = globalThis,
  s =
    t.ShadowRoot &&
    (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype,
  i = Symbol(),
  e = new WeakMap();
class h {
  constructor(t, s, e) {
    if (((this._$cssResult$ = !0), e !== i))
      throw Error(
        'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.'
      );
    (this.cssText = t), (this.t = s);
  }
  get styleSheet() {
    let t = this.o;
    const i = this.t;
    if (s && void 0 === t) {
      const s = void 0 !== i && 1 === i.length;
      s && (t = e.get(i)),
        void 0 === t &&
          ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
          s && e.set(i, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
}
const o = (t, ...s) => {
    const e =
      1 === t.length
        ? t[0]
        : s.reduce(
            (s, i, e) =>
              s +
              ((t) => {
                if (!0 === t._$cssResult$) return t.cssText;
                if ('number' == typeof t) return t;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    t +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(i) +
              t[e + 1],
            t[0]
          );
    return new h(e, t, i);
  },
  n = s
    ? (t) => t
    : (t) =>
        t instanceof CSSStyleSheet
          ? ((t) => {
              let s = '';
              for (const i of t.cssRules) s += i.cssText;
              return ((t) =>
                new h('string' == typeof t ? t : t + '', void 0, i))(s);
            })(t)
          : t,
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ {
    is: r,
    defineProperty: c,
    getOwnPropertyDescriptor: l,
    getOwnPropertyNames: a,
    getOwnPropertySymbols: u,
    getPrototypeOf: d,
  } = Object,
  f = globalThis,
  p = f.trustedTypes,
  v = p ? p.emptyScript : '',
  g = f.reactiveElementPolyfillSupport,
  y = (t, s) => t,
  m = {
    toAttribute(t, s) {
      switch (s) {
        case Boolean:
          t = t ? v : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, s) {
      let i = t;
      switch (s) {
        case Boolean:
          i = null !== t;
          break;
        case Number:
          i = null === t ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            i = JSON.parse(t);
          } catch (t) {
            i = null;
          }
      }
      return i;
    },
  },
  b = (t, s) => !r(t, s),
  S = {attribute: !0, type: String, converter: m, reflect: !1, hasChanged: b};
(Symbol.metadata ??= Symbol('metadata')),
  (f.litPropertyMetadata ??= new WeakMap());
class w extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, s = S) {
    if (
      (s.state && (s.attribute = !1),
      this._$Ei(),
      this.elementProperties.set(t, s),
      !s.noAccessor)
    ) {
      const i = Symbol(),
        e = this.getPropertyDescriptor(t, i, s);
      void 0 !== e && c(this.prototype, t, e);
    }
  }
  static getPropertyDescriptor(t, s, i) {
    const {get: e, set: h} = l(this.prototype, t) ?? {
      get() {
        return this[s];
      },
      set(t) {
        this[s] = t;
      },
    };
    return {
      get() {
        return e?.call(this);
      },
      set(s) {
        const o = e?.call(this);
        h.call(this, s), this.requestUpdate(t, o, i);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? S;
  }
  static _$Ei() {
    if (this.hasOwnProperty(y('elementProperties'))) return;
    const t = d(this);
    t.finalize(),
      void 0 !== t.l && (this.l = [...t.l]),
      (this.elementProperties = new Map(t.elementProperties));
  }
  static finalize() {
    if (this.hasOwnProperty(y('finalized'))) return;
    if (
      ((this.finalized = !0), this._$Ei(), this.hasOwnProperty(y('properties')))
    ) {
      const t = this.properties,
        s = [...a(t), ...u(t)];
      for (const i of s) this.createProperty(i, t[i]);
    }
    const t = this[Symbol.metadata];
    if (null !== t) {
      const s = litPropertyMetadata.get(t);
      if (void 0 !== s)
        for (const [t, i] of s) this.elementProperties.set(t, i);
    }
    this._$Eh = new Map();
    for (const [t, s] of this.elementProperties) {
      const i = this._$Eu(t, s);
      void 0 !== i && this._$Eh.set(i, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const s = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const t of i) s.unshift(n(t));
    } else void 0 !== t && s.push(n(t));
    return s;
  }
  static _$Eu(t, s) {
    const i = s.attribute;
    return !1 === i
      ? void 0
      : 'string' == typeof i
      ? i
      : 'string' == typeof t
      ? t.toLowerCase()
      : void 0;
  }
  constructor() {
    super(),
      (this._$Ep = void 0),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$Em = null),
      this._$Ev();
  }
  _$Ev() {
    (this._$ES = new Promise((t) => (this.enableUpdating = t))),
      (this._$AL = new Map()),
      this._$E_(),
      this.requestUpdate(),
      this.constructor.l?.forEach((t) => t(this));
  }
  addController(t) {
    (this._$EO ??= new Set()).add(t),
      void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = new Map(),
      s = this.constructor.elementProperties;
    for (const i of s.keys())
      this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const i =
      this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return (
      ((i, e) => {
        if (s)
          i.adoptedStyleSheets = e.map((t) =>
            t instanceof CSSStyleSheet ? t : t.styleSheet
          );
        else
          for (const s of e) {
            const e = document.createElement('style'),
              h = t.litNonce;
            void 0 !== h && e.setAttribute('nonce', h),
              (e.textContent = s.cssText),
              i.appendChild(e);
          }
      })(i, this.constructor.elementStyles),
      i
    );
  }
  connectedCallback() {
    (this.renderRoot ??= this.createRenderRoot()),
      this.enableUpdating(!0),
      this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, s, i) {
    this._$AK(t, i);
  }
  _$EC(t, s) {
    const i = this.constructor.elementProperties.get(t),
      e = this.constructor._$Eu(t, i);
    if (void 0 !== e && !0 === i.reflect) {
      const h = (
        void 0 !== i.converter?.toAttribute ? i.converter : m
      ).toAttribute(s, i.type);
      (this._$Em = t),
        null == h ? this.removeAttribute(e) : this.setAttribute(e, h),
        (this._$Em = null);
    }
  }
  _$AK(t, s) {
    const i = this.constructor,
      e = i._$Eh.get(t);
    if (void 0 !== e && this._$Em !== e) {
      const t = i.getPropertyOptions(e),
        h =
          'function' == typeof t.converter
            ? {fromAttribute: t.converter}
            : void 0 !== t.converter?.fromAttribute
            ? t.converter
            : m;
      (this._$Em = e),
        (this[e] = h.fromAttribute(s, t.type)),
        (this._$Em = null);
    }
  }
  requestUpdate(t, s, i) {
    if (void 0 !== t) {
      if (
        ((i ??= this.constructor.getPropertyOptions(t)),
        !(i.hasChanged ?? b)(this[t], s))
      )
        return;
      this.P(t, s, i);
    }
    !1 === this.isUpdatePending && (this._$ES = this._$ET());
  }
  P(t, s, i) {
    this._$AL.has(t) || this._$AL.set(t, s),
      !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set()).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const t = this.scheduleUpdate();
    return null != t && (await t), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (((this.renderRoot ??= this.createRenderRoot()), this._$Ep)) {
        for (const [t, s] of this._$Ep) this[t] = s;
        this._$Ep = void 0;
      }
      const t = this.constructor.elementProperties;
      if (t.size > 0)
        for (const [s, i] of t)
          !0 !== i.wrapped ||
            this._$AL.has(s) ||
            void 0 === this[s] ||
            this.P(s, this[s], i);
    }
    let t = !1;
    const s = this._$AL;
    try {
      (t = this.shouldUpdate(s)),
        t
          ? (this.willUpdate(s),
            this._$EO?.forEach((t) => t.hostUpdate?.()),
            this.update(s))
          : this._$EU();
    } catch (s) {
      throw ((t = !1), this._$EU(), s);
    }
    t && this._$AE(s);
  }
  willUpdate(t) {}
  _$AE(t) {
    this._$EO?.forEach((t) => t.hostUpdated?.()),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
      this.updated(t);
  }
  _$EU() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    (this._$Ej &&= this._$Ej.forEach((t) => this._$EC(t, this[t]))),
      this._$EU();
  }
  updated(t) {}
  firstUpdated(t) {}
}
(w.elementStyles = []),
  (w.shadowRootOptions = {mode: 'open'}),
  (w[y('elementProperties')] = new Map()),
  (w[y('finalized')] = new Map()),
  g?.({ReactiveElement: w}),
  (f.reactiveElementVersions ??= []).push('2.0.4');
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $ = globalThis,
  _ = $.trustedTypes,
  A = _ ? _.createPolicy('lit-html', {createHTML: (t) => t}) : void 0,
  C = '$lit$',
  E = `lit$${Math.random().toFixed(9).slice(2)}$`,
  U = '?' + E,
  k = `<${U}>`,
  x = document,
  M = () => x.createComment(''),
  P = (t) => null === t || ('object' != typeof t && 'function' != typeof t),
  T = Array.isArray,
  O = '[ \t\n\f\r]',
  N = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  R = /-->/g,
  j = />/g,
  z = RegExp(
    `>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,
    'g'
  ),
  I = /'/g,
  L = /"/g,
  D = /^(?:script|style|textarea|title)$/i,
  W = (
    (t) =>
    (s, ...i) => ({_$litType$: t, strings: s, values: i})
  )(1),
  B = Symbol.for('lit-noChange'),
  H = Symbol.for('lit-nothing'),
  J = new WeakMap(),
  Z = x.createTreeWalker(x, 129);
function q(t, s) {
  if (!T(t) || !t.hasOwnProperty('raw'))
    throw Error('invalid template strings array');
  return void 0 !== A ? A.createHTML(s) : s;
}
class K {
  constructor({strings: t, _$litType$: s}, i) {
    let e;
    this.parts = [];
    let h = 0,
      o = 0;
    const n = t.length - 1,
      r = this.parts,
      [c, l] = ((t, s) => {
        const i = t.length - 1,
          e = [];
        let h,
          o = 2 === s ? '<svg>' : 3 === s ? '<math>' : '',
          n = N;
        for (let s = 0; s < i; s++) {
          const i = t[s];
          let r,
            c,
            l = -1,
            a = 0;
          for (
            ;
            a < i.length && ((n.lastIndex = a), (c = n.exec(i)), null !== c);

          )
            (a = n.lastIndex),
              n === N
                ? '!--' === c[1]
                  ? (n = R)
                  : void 0 !== c[1]
                  ? (n = j)
                  : void 0 !== c[2]
                  ? (D.test(c[2]) && (h = RegExp('</' + c[2], 'g')), (n = z))
                  : void 0 !== c[3] && (n = z)
                : n === z
                ? '>' === c[0]
                  ? ((n = h ?? N), (l = -1))
                  : void 0 === c[1]
                  ? (l = -2)
                  : ((l = n.lastIndex - c[2].length),
                    (r = c[1]),
                    (n = void 0 === c[3] ? z : '"' === c[3] ? L : I))
                : n === L || n === I
                ? (n = z)
                : n === R || n === j
                ? (n = N)
                : ((n = z), (h = void 0));
          const u = n === z && t[s + 1].startsWith('/>') ? ' ' : '';
          o +=
            n === N
              ? i + k
              : l >= 0
              ? (e.push(r), i.slice(0, l) + C + i.slice(l) + E + u)
              : i + E + (-2 === l ? s : u);
        }
        return [
          q(
            t,
            o +
              (t[i] || '<?>') +
              (2 === s ? '</svg>' : 3 === s ? '</math>' : '')
          ),
          e,
        ];
      })(t, s);
    if (
      ((this.el = K.createElement(c, i)),
      (Z.currentNode = this.el.content),
      2 === s || 3 === s)
    ) {
      const t = this.el.content.firstChild;
      t.replaceWith(...t.childNodes);
    }
    for (; null !== (e = Z.nextNode()) && r.length < n; ) {
      if (1 === e.nodeType) {
        if (e.hasAttributes())
          for (const t of e.getAttributeNames())
            if (t.endsWith(C)) {
              const s = l[o++],
                i = e.getAttribute(t).split(E),
                n = /([.?@])?(.*)/.exec(s);
              r.push({
                type: 1,
                index: h,
                name: n[2],
                strings: i,
                ctor:
                  '.' === n[1] ? X : '?' === n[1] ? Y : '@' === n[1] ? tt : Q,
              }),
                e.removeAttribute(t);
            } else
              t.startsWith(E) &&
                (r.push({type: 6, index: h}), e.removeAttribute(t));
        if (D.test(e.tagName)) {
          const t = e.textContent.split(E),
            s = t.length - 1;
          if (s > 0) {
            e.textContent = _ ? _.emptyScript : '';
            for (let i = 0; i < s; i++)
              e.append(t[i], M()), Z.nextNode(), r.push({type: 2, index: ++h});
            e.append(t[s], M());
          }
        }
      } else if (8 === e.nodeType)
        if (e.data === U) r.push({type: 2, index: h});
        else {
          let t = -1;
          for (; -1 !== (t = e.data.indexOf(E, t + 1)); )
            r.push({type: 7, index: h}), (t += E.length - 1);
        }
      h++;
    }
  }
  static createElement(t, s) {
    const i = x.createElement('template');
    return (i.innerHTML = t), i;
  }
}
function V(t, s, i = t, e) {
  if (s === B) return s;
  let h = void 0 !== e ? i.o?.[e] : i.l;
  const o = P(s) ? void 0 : s._$litDirective$;
  return (
    h?.constructor !== o &&
      (h?._$AO?.(!1),
      void 0 === o ? (h = void 0) : ((h = new o(t)), h._$AT(t, i, e)),
      void 0 !== e ? ((i.o ??= [])[e] = h) : (i.l = h)),
    void 0 !== h && (s = V(t, h._$AS(t, s.values), h, e)),
    s
  );
}
class F {
  constructor(t, s) {
    (this._$AV = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = s);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const {
        el: {content: s},
        parts: i,
      } = this._$AD,
      e = (t?.creationScope ?? x).importNode(s, !0);
    Z.currentNode = e;
    let h = Z.nextNode(),
      o = 0,
      n = 0,
      r = i[0];
    for (; void 0 !== r; ) {
      if (o === r.index) {
        let s;
        2 === r.type
          ? (s = new G(h, h.nextSibling, this, t))
          : 1 === r.type
          ? (s = new r.ctor(h, r.name, r.strings, this, t))
          : 6 === r.type && (s = new st(h, this, t)),
          this._$AV.push(s),
          (r = i[++n]);
      }
      o !== r?.index && ((h = Z.nextNode()), o++);
    }
    return (Z.currentNode = x), e;
  }
  p(t) {
    let s = 0;
    for (const i of this._$AV)
      void 0 !== i &&
        (void 0 !== i.strings
          ? (i._$AI(t, i, s), (s += i.strings.length - 2))
          : i._$AI(t[s])),
        s++;
  }
}
class G {
  get _$AU() {
    return this._$AM?._$AU ?? this.v;
  }
  constructor(t, s, i, e) {
    (this.type = 2),
      (this._$AH = H),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = s),
      (this._$AM = i),
      (this.options = e),
      (this.v = e?.isConnected ?? !0);
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const s = this._$AM;
    return void 0 !== s && 11 === t?.nodeType && (t = s.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, s = this) {
    (t = V(this, t, s)),
      P(t)
        ? t === H || null == t || '' === t
          ? (this._$AH !== H && this._$AR(), (this._$AH = H))
          : t !== this._$AH && t !== B && this._(t)
        : void 0 !== t._$litType$
        ? this.$(t)
        : void 0 !== t.nodeType
        ? this.T(t)
        : ((t) => T(t) || 'function' == typeof t?.[Symbol.iterator])(t)
        ? this.k(t)
        : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), (this._$AH = this.O(t)));
  }
  _(t) {
    this._$AH !== H && P(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.T(x.createTextNode(t)),
      (this._$AH = t);
  }
  $(t) {
    const {values: s, _$litType$: i} = t,
      e =
        'number' == typeof i
          ? this._$AC(t)
          : (void 0 === i.el &&
              (i.el = K.createElement(q(i.h, i.h[0]), this.options)),
            i);
    if (this._$AH?._$AD === e) this._$AH.p(s);
    else {
      const t = new F(e, this),
        i = t.u(this.options);
      t.p(s), this.T(i), (this._$AH = t);
    }
  }
  _$AC(t) {
    let s = J.get(t.strings);
    return void 0 === s && J.set(t.strings, (s = new K(t))), s;
  }
  k(t) {
    T(this._$AH) || ((this._$AH = []), this._$AR());
    const s = this._$AH;
    let i,
      e = 0;
    for (const h of t)
      e === s.length
        ? s.push((i = new G(this.O(M()), this.O(M()), this, this.options)))
        : (i = s[e]),
        i._$AI(h),
        e++;
    e < s.length && (this._$AR(i && i._$AB.nextSibling, e), (s.length = e));
  }
  _$AR(t = this._$AA.nextSibling, s) {
    for (this._$AP?.(!1, !0, s); t && t !== this._$AB; ) {
      const s = t.nextSibling;
      t.remove(), (t = s);
    }
  }
  setConnected(t) {
    void 0 === this._$AM && ((this.v = t), this._$AP?.(t));
  }
}
class Q {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, s, i, e, h) {
    (this.type = 1),
      (this._$AH = H),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = s),
      (this._$AM = e),
      (this.options = h),
      i.length > 2 || '' !== i[0] || '' !== i[1]
        ? ((this._$AH = Array(i.length - 1).fill(new String())),
          (this.strings = i))
        : (this._$AH = H);
  }
  _$AI(t, s = this, i, e) {
    const h = this.strings;
    let o = !1;
    if (void 0 === h)
      (t = V(this, t, s, 0)),
        (o = !P(t) || (t !== this._$AH && t !== B)),
        o && (this._$AH = t);
    else {
      const e = t;
      let n, r;
      for (t = h[0], n = 0; n < h.length - 1; n++)
        (r = V(this, e[i + n], s, n)),
          r === B && (r = this._$AH[n]),
          (o ||= !P(r) || r !== this._$AH[n]),
          r === H ? (t = H) : t !== H && (t += (r ?? '') + h[n + 1]),
          (this._$AH[n] = r);
    }
    o && !e && this.j(t);
  }
  j(t) {
    t === H
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t ?? '');
  }
}
class X extends Q {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(t) {
    this.element[this.name] = t === H ? void 0 : t;
  }
}
class Y extends Q {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== H);
  }
}
class tt extends Q {
  constructor(t, s, i, e, h) {
    super(t, s, i, e, h), (this.type = 5);
  }
  _$AI(t, s = this) {
    if ((t = V(this, t, s, 0) ?? H) === B) return;
    const i = this._$AH,
      e =
        (t === H && i !== H) ||
        t.capture !== i.capture ||
        t.once !== i.once ||
        t.passive !== i.passive,
      h = t !== H && (i === H || e);
    e && this.element.removeEventListener(this.name, this, i),
      h && this.element.addEventListener(this.name, this, t),
      (this._$AH = t);
  }
  handleEvent(t) {
    'function' == typeof this._$AH
      ? this._$AH.call(this.options?.host ?? this.element, t)
      : this._$AH.handleEvent(t);
  }
}
class st {
  constructor(t, s, i) {
    (this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = s),
      (this.options = i);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    V(this, t);
  }
}
const it = $.litHtmlPolyfillSupport;
it?.(K, G), ($.litHtmlVersions ??= []).push('3.2.0');
const et = (t, s, i) => {
  const e = i?.renderBefore ?? s;
  let h = e._$litPart$;
  if (void 0 === h) {
    const t = i?.renderBefore ?? null;
    e._$litPart$ = h = new G(s.insertBefore(M(), t), t, void 0, i ?? {});
  }
  return h._$AI(t), h;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
};
class ht extends w {
  constructor() {
    super(...arguments), (this.renderOptions = {host: this}), (this.o = void 0);
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return (this.renderOptions.renderBefore ??= t.firstChild), t;
  }
  update(t) {
    const s = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this.o = et(s, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    super.connectedCallback(), this.o?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.o?.setConnected(!1);
  }
  render() {
    return B;
  }
}
(ht._$litElement$ = !0),
  (ht.finalized = !0),
  globalThis.litElementHydrateSupport?.({LitElement: ht});
const ot = globalThis.litElementPolyfillSupport;
ot?.({LitElement: ht}), (globalThis.litElementVersions ??= []).push('4.1.0');
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt = (t) => (s, i) => {
  void 0 !== i
    ? i.addInitializer(() => {
        customElements.define(t, s);
      })
    : customElements.define(t, s);
};
export {
  H as D,
  et as Q,
  B as R,
  b as f,
  ht as h,
  o as i,
  W as k,
  nt as t,
  m as u,
};
