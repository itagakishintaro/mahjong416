/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = globalThis,
  e =
    t.ShadowRoot &&
    (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype,
  i = Symbol(),
  o = new WeakMap();
class r {
  constructor(t, e, o) {
    if (((this._$cssResult$ = !0), o !== i))
      throw Error(
        'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.'
      );
    (this.cssText = t), (this.t = e);
  }
  get styleSheet() {
    let t = this.o;
    const i = this.t;
    if (e && void 0 === t) {
      const e = void 0 !== i && 1 === i.length;
      e && (t = o.get(i)),
        void 0 === t &&
          ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
          e && o.set(i, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
}
const s = (t, ...e) => {
    const o =
      1 === t.length
        ? t[0]
        : e.reduce(
            (e, i, o) =>
              e +
              ((t) => {
                if (!0 === t._$cssResult$) return t.cssText;
                if ('number' == typeof t) return t;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    t +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(i) +
              t[o + 1],
            t[0]
          );
    return new r(o, t, i);
  },
  n = e
    ? (t) => t
    : (t) =>
        t instanceof CSSStyleSheet
          ? ((t) => {
              let e = '';
              for (const i of t.cssRules) e += i.cssText;
              return ((t) =>
                new r('string' == typeof t ? t : t + '', void 0, i))(e);
            })(t)
          : t,
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ {
    is: l,
    defineProperty: a,
    getOwnPropertyDescriptor: d,
    getOwnPropertyNames: c,
    getOwnPropertySymbols: h,
    getPrototypeOf: u,
  } = Object,
  p = globalThis,
  f = p.trustedTypes,
  v = f ? f.emptyScript : '',
  m = p.reactiveElementPolyfillSupport,
  g = (t, e) => t,
  b = {
    toAttribute(t, e) {
      switch (e) {
        case Boolean:
          t = t ? v : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, e) {
      let i = t;
      switch (e) {
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
  x = (t, e) => !l(t, e),
  y = {attribute: !0, type: String, converter: b, reflect: !1, hasChanged: x};
(Symbol.metadata ??= Symbol('metadata')),
  (p.litPropertyMetadata ??= new WeakMap());
class _ extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = y) {
    if (
      (e.state && (e.attribute = !1),
      this._$Ei(),
      this.elementProperties.set(t, e),
      !e.noAccessor)
    ) {
      const i = Symbol(),
        o = this.getPropertyDescriptor(t, i, e);
      void 0 !== o && a(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const {get: o, set: r} = d(this.prototype, t) ?? {
      get() {
        return this[e];
      },
      set(t) {
        this[e] = t;
      },
    };
    return {
      get() {
        return o?.call(this);
      },
      set(e) {
        const s = o?.call(this);
        r.call(this, e), this.requestUpdate(t, s, i);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? y;
  }
  static _$Ei() {
    if (this.hasOwnProperty(g('elementProperties'))) return;
    const t = u(this);
    t.finalize(),
      void 0 !== t.l && (this.l = [...t.l]),
      (this.elementProperties = new Map(t.elementProperties));
  }
  static finalize() {
    if (this.hasOwnProperty(g('finalized'))) return;
    if (
      ((this.finalized = !0), this._$Ei(), this.hasOwnProperty(g('properties')))
    ) {
      const t = this.properties,
        e = [...c(t), ...h(t)];
      for (const i of e) this.createProperty(i, t[i]);
    }
    const t = this[Symbol.metadata];
    if (null !== t) {
      const e = litPropertyMetadata.get(t);
      if (void 0 !== e)
        for (const [t, i] of e) this.elementProperties.set(t, i);
    }
    this._$Eh = new Map();
    for (const [t, e] of this.elementProperties) {
      const i = this._$Eu(t, e);
      void 0 !== i && this._$Eh.set(i, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const t of i) e.unshift(n(t));
    } else void 0 !== t && e.push(n(t));
    return e;
  }
  static _$Eu(t, e) {
    const i = e.attribute;
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
      e = this.constructor.elementProperties;
    for (const i of e.keys())
      this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const i =
      this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return (
      ((i, o) => {
        if (e)
          i.adoptedStyleSheets = o.map((t) =>
            t instanceof CSSStyleSheet ? t : t.styleSheet
          );
        else
          for (const e of o) {
            const o = document.createElement('style'),
              r = t.litNonce;
            void 0 !== r && o.setAttribute('nonce', r),
              (o.textContent = e.cssText),
              i.appendChild(o);
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
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$EC(t, e) {
    const i = this.constructor.elementProperties.get(t),
      o = this.constructor._$Eu(t, i);
    if (void 0 !== o && !0 === i.reflect) {
      const r = (
        void 0 !== i.converter?.toAttribute ? i.converter : b
      ).toAttribute(e, i.type);
      (this._$Em = t),
        null == r ? this.removeAttribute(o) : this.setAttribute(o, r),
        (this._$Em = null);
    }
  }
  _$AK(t, e) {
    const i = this.constructor,
      o = i._$Eh.get(t);
    if (void 0 !== o && this._$Em !== o) {
      const t = i.getPropertyOptions(o),
        r =
          'function' == typeof t.converter
            ? {fromAttribute: t.converter}
            : void 0 !== t.converter?.fromAttribute
            ? t.converter
            : b;
      (this._$Em = o),
        (this[o] = r.fromAttribute(e, t.type)),
        (this._$Em = null);
    }
  }
  requestUpdate(t, e, i) {
    if (void 0 !== t) {
      if (
        ((i ??= this.constructor.getPropertyOptions(t)),
        !(i.hasChanged ?? x)(this[t], e))
      )
        return;
      this.P(t, e, i);
    }
    !1 === this.isUpdatePending && (this._$ES = this._$ET());
  }
  P(t, e, i) {
    this._$AL.has(t) || this._$AL.set(t, e),
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
        for (const [t, e] of this._$Ep) this[t] = e;
        this._$Ep = void 0;
      }
      const t = this.constructor.elementProperties;
      if (t.size > 0)
        for (const [e, i] of t)
          !0 !== i.wrapped ||
            this._$AL.has(e) ||
            void 0 === this[e] ||
            this.P(e, this[e], i);
    }
    let t = !1;
    const e = this._$AL;
    try {
      (t = this.shouldUpdate(e)),
        t
          ? (this.willUpdate(e),
            this._$EO?.forEach((t) => t.hostUpdate?.()),
            this.update(e))
          : this._$EU();
    } catch (e) {
      throw ((t = !1), this._$EU(), e);
    }
    t && this._$AE(e);
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
(_.elementStyles = []),
  (_.shadowRootOptions = {mode: 'open'}),
  (_[g('elementProperties')] = new Map()),
  (_[g('finalized')] = new Map()),
  m?.({ReactiveElement: _}),
  (p.reactiveElementVersions ??= []).push('2.0.4');
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w = globalThis,
  $ = w.trustedTypes,
  S = $ ? $.createPolicy('lit-html', {createHTML: (t) => t}) : void 0,
  k = '$lit$',
  C = `lit$${(Math.random() + '').slice(9)}$`,
  z = '?' + C,
  E = `<${z}>`,
  T = document,
  R = () => T.createComment(''),
  A = (t) => null === t || ('object' != typeof t && 'function' != typeof t),
  I = Array.isArray,
  M = '[ \t\n\f\r]',
  O = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  P = /-->/g,
  U = />/g,
  B = RegExp(
    `>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,
    'g'
  ),
  N = /'/g,
  L = /"/g,
  F = /^(?:script|style|textarea|title)$/i,
  W = (
    (t) =>
    (e, ...i) => ({_$litType$: t, strings: e, values: i})
  )(1),
  j = Symbol.for('lit-noChange'),
  D = Symbol.for('lit-nothing'),
  q = new WeakMap(),
  V = T.createTreeWalker(T, 129);
function H(t, e) {
  if (!Array.isArray(t) || !t.hasOwnProperty('raw'))
    throw Error('invalid template strings array');
  return void 0 !== S ? S.createHTML(e) : e;
}
class K {
  constructor({strings: t, _$litType$: e}, i) {
    let o;
    this.parts = [];
    let r = 0,
      s = 0;
    const n = t.length - 1,
      l = this.parts,
      [a, d] = ((t, e) => {
        const i = t.length - 1,
          o = [];
        let r,
          s = 2 === e ? '<svg>' : '',
          n = O;
        for (let e = 0; e < i; e++) {
          const i = t[e];
          let l,
            a,
            d = -1,
            c = 0;
          for (
            ;
            c < i.length && ((n.lastIndex = c), (a = n.exec(i)), null !== a);

          )
            (c = n.lastIndex),
              n === O
                ? '!--' === a[1]
                  ? (n = P)
                  : void 0 !== a[1]
                  ? (n = U)
                  : void 0 !== a[2]
                  ? (F.test(a[2]) && (r = RegExp('</' + a[2], 'g')), (n = B))
                  : void 0 !== a[3] && (n = B)
                : n === B
                ? '>' === a[0]
                  ? ((n = r ?? O), (d = -1))
                  : void 0 === a[1]
                  ? (d = -2)
                  : ((d = n.lastIndex - a[2].length),
                    (l = a[1]),
                    (n = void 0 === a[3] ? B : '"' === a[3] ? L : N))
                : n === L || n === N
                ? (n = B)
                : n === P || n === U
                ? (n = O)
                : ((n = B), (r = void 0));
          const h = n === B && t[e + 1].startsWith('/>') ? ' ' : '';
          s +=
            n === O
              ? i + E
              : d >= 0
              ? (o.push(l), i.slice(0, d) + k + i.slice(d) + C + h)
              : i + C + (-2 === d ? e : h);
        }
        return [H(t, s + (t[i] || '<?>') + (2 === e ? '</svg>' : '')), o];
      })(t, e);
    if (
      ((this.el = K.createElement(a, i)),
      (V.currentNode = this.el.content),
      2 === e)
    ) {
      const t = this.el.content.firstChild;
      t.replaceWith(...t.childNodes);
    }
    for (; null !== (o = V.nextNode()) && l.length < n; ) {
      if (1 === o.nodeType) {
        if (o.hasAttributes())
          for (const t of o.getAttributeNames())
            if (t.endsWith(k)) {
              const e = d[s++],
                i = o.getAttribute(t).split(C),
                n = /([.?@])?(.*)/.exec(e);
              l.push({
                type: 1,
                index: r,
                name: n[2],
                strings: i,
                ctor:
                  '.' === n[1] ? Z : '?' === n[1] ? Q : '@' === n[1] ? tt : X,
              }),
                o.removeAttribute(t);
            } else
              t.startsWith(C) &&
                (l.push({type: 6, index: r}), o.removeAttribute(t));
        if (F.test(o.tagName)) {
          const t = o.textContent.split(C),
            e = t.length - 1;
          if (e > 0) {
            o.textContent = $ ? $.emptyScript : '';
            for (let i = 0; i < e; i++)
              o.append(t[i], R()), V.nextNode(), l.push({type: 2, index: ++r});
            o.append(t[e], R());
          }
        }
      } else if (8 === o.nodeType)
        if (o.data === z) l.push({type: 2, index: r});
        else {
          let t = -1;
          for (; -1 !== (t = o.data.indexOf(C, t + 1)); )
            l.push({type: 7, index: r}), (t += C.length - 1);
        }
      r++;
    }
  }
  static createElement(t, e) {
    const i = T.createElement('template');
    return (i.innerHTML = t), i;
  }
}
function G(t, e, i = t, o) {
  if (e === j) return e;
  let r = void 0 !== o ? i._$Co?.[o] : i._$Cl;
  const s = A(e) ? void 0 : e._$litDirective$;
  return (
    r?.constructor !== s &&
      (r?._$AO?.(!1),
      void 0 === s ? (r = void 0) : ((r = new s(t)), r._$AT(t, i, o)),
      void 0 !== o ? ((i._$Co ??= [])[o] = r) : (i._$Cl = r)),
    void 0 !== r && (e = G(t, r._$AS(t, e.values), r, o)),
    e
  );
}
class Y {
  constructor(t, e) {
    (this._$AV = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = e);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const {
        el: {content: e},
        parts: i,
      } = this._$AD,
      o = (t?.creationScope ?? T).importNode(e, !0);
    V.currentNode = o;
    let r = V.nextNode(),
      s = 0,
      n = 0,
      l = i[0];
    for (; void 0 !== l; ) {
      if (s === l.index) {
        let e;
        2 === l.type
          ? (e = new J(r, r.nextSibling, this, t))
          : 1 === l.type
          ? (e = new l.ctor(r, l.name, l.strings, this, t))
          : 6 === l.type && (e = new et(r, this, t)),
          this._$AV.push(e),
          (l = i[++n]);
      }
      s !== l?.index && ((r = V.nextNode()), s++);
    }
    return (V.currentNode = T), o;
  }
  p(t) {
    let e = 0;
    for (const i of this._$AV)
      void 0 !== i &&
        (void 0 !== i.strings
          ? (i._$AI(t, i, e), (e += i.strings.length - 2))
          : i._$AI(t[e])),
        e++;
  }
}
class J {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, i, o) {
    (this.type = 2),
      (this._$AH = D),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = e),
      (this._$AM = i),
      (this.options = o),
      (this._$Cv = o?.isConnected ?? !0);
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return void 0 !== e && 11 === t?.nodeType && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    (t = G(this, t, e)),
      A(t)
        ? t === D || null == t || '' === t
          ? (this._$AH !== D && this._$AR(), (this._$AH = D))
          : t !== this._$AH && t !== j && this._(t)
        : void 0 !== t._$litType$
        ? this.$(t)
        : void 0 !== t.nodeType
        ? this.T(t)
        : ((t) => I(t) || 'function' == typeof t?.[Symbol.iterator])(t)
        ? this.k(t)
        : this._(t);
  }
  S(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), (this._$AH = this.S(t)));
  }
  _(t) {
    this._$AH !== D && A(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.T(T.createTextNode(t)),
      (this._$AH = t);
  }
  $(t) {
    const {values: e, _$litType$: i} = t,
      o =
        'number' == typeof i
          ? this._$AC(t)
          : (void 0 === i.el &&
              (i.el = K.createElement(H(i.h, i.h[0]), this.options)),
            i);
    if (this._$AH?._$AD === o) this._$AH.p(e);
    else {
      const t = new Y(o, this),
        i = t.u(this.options);
      t.p(e), this.T(i), (this._$AH = t);
    }
  }
  _$AC(t) {
    let e = q.get(t.strings);
    return void 0 === e && q.set(t.strings, (e = new K(t))), e;
  }
  k(t) {
    I(this._$AH) || ((this._$AH = []), this._$AR());
    const e = this._$AH;
    let i,
      o = 0;
    for (const r of t)
      o === e.length
        ? e.push((i = new J(this.S(R()), this.S(R()), this, this.options)))
        : (i = e[o]),
        i._$AI(r),
        o++;
    o < e.length && (this._$AR(i && i._$AB.nextSibling, o), (e.length = o));
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t && t !== this._$AB; ) {
      const e = t.nextSibling;
      t.remove(), (t = e);
    }
  }
  setConnected(t) {
    void 0 === this._$AM && ((this._$Cv = t), this._$AP?.(t));
  }
}
class X {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, i, o, r) {
    (this.type = 1),
      (this._$AH = D),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = e),
      (this._$AM = o),
      (this.options = r),
      i.length > 2 || '' !== i[0] || '' !== i[1]
        ? ((this._$AH = Array(i.length - 1).fill(new String())),
          (this.strings = i))
        : (this._$AH = D);
  }
  _$AI(t, e = this, i, o) {
    const r = this.strings;
    let s = !1;
    if (void 0 === r)
      (t = G(this, t, e, 0)),
        (s = !A(t) || (t !== this._$AH && t !== j)),
        s && (this._$AH = t);
    else {
      const o = t;
      let n, l;
      for (t = r[0], n = 0; n < r.length - 1; n++)
        (l = G(this, o[i + n], e, n)),
          l === j && (l = this._$AH[n]),
          (s ||= !A(l) || l !== this._$AH[n]),
          l === D ? (t = D) : t !== D && (t += (l ?? '') + r[n + 1]),
          (this._$AH[n] = l);
    }
    s && !o && this.j(t);
  }
  j(t) {
    t === D
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t ?? '');
  }
}
class Z extends X {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(t) {
    this.element[this.name] = t === D ? void 0 : t;
  }
}
class Q extends X {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== D);
  }
}
class tt extends X {
  constructor(t, e, i, o, r) {
    super(t, e, i, o, r), (this.type = 5);
  }
  _$AI(t, e = this) {
    if ((t = G(this, t, e, 0) ?? D) === j) return;
    const i = this._$AH,
      o =
        (t === D && i !== D) ||
        t.capture !== i.capture ||
        t.once !== i.once ||
        t.passive !== i.passive,
      r = t !== D && (i === D || o);
    o && this.element.removeEventListener(this.name, this, i),
      r && this.element.addEventListener(this.name, this, t),
      (this._$AH = t);
  }
  handleEvent(t) {
    'function' == typeof this._$AH
      ? this._$AH.call(this.options?.host ?? this.element, t)
      : this._$AH.handleEvent(t);
  }
}
class et {
  constructor(t, e, i) {
    (this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = e),
      (this.options = i);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    G(this, t);
  }
}
const it = w.litHtmlPolyfillSupport;
it?.(K, J), (w.litHtmlVersions ??= []).push('3.1.2');
const ot = (t, e, i) => {
  const o = i?.renderBefore ?? e;
  let r = o._$litPart$;
  if (void 0 === r) {
    const t = i?.renderBefore ?? null;
    o._$litPart$ = r = new J(e.insertBefore(R(), t), t, void 0, i ?? {});
  }
  return r._$AI(t), r;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
};
class rt extends _ {
  constructor() {
    super(...arguments),
      (this.renderOptions = {host: this}),
      (this._$Do = void 0);
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return (this.renderOptions.renderBefore ??= t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this._$Do = ot(e, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return j;
  }
}
(rt._$litElement$ = !0),
  (rt.finalized = !0),
  globalThis.litElementHydrateSupport?.({LitElement: rt});
const st = globalThis.litElementPolyfillSupport;
st?.({LitElement: rt}), (globalThis.litElementVersions ??= []).push('4.0.4');
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt = (t) => (e, i) => {
    void 0 !== i
      ? i.addInitializer(() => {
          customElements.define(t, e);
        })
      : customElements.define(t, e);
  },
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ lt = {
    attribute: !0,
    type: String,
    converter: b,
    reflect: !1,
    hasChanged: x,
  },
  at = (t = lt, e, i) => {
    const {kind: o, metadata: r} = i;
    let s = globalThis.litPropertyMetadata.get(r);
    if (
      (void 0 === s && globalThis.litPropertyMetadata.set(r, (s = new Map())),
      s.set(i.name, t),
      'accessor' === o)
    ) {
      const {name: o} = i;
      return {
        set(i) {
          const r = e.get.call(this);
          e.set.call(this, i), this.requestUpdate(o, r, t);
        },
        init(e) {
          return void 0 !== e && this.P(o, void 0, t), e;
        },
      };
    }
    if ('setter' === o) {
      const {name: o} = i;
      return function (i) {
        const r = this[o];
        e.call(this, i), this.requestUpdate(o, r, t);
      };
    }
    throw Error('Unsupported decorator location: ' + o);
  };
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function dt(t) {
  return (e, i) =>
    'object' == typeof i
      ? at(t, e, i)
      : ((t, e, i) => {
          const o = e.hasOwnProperty(i);
          return (
            e.constructor.createProperty(i, o ? {...t, wrapped: !0} : t),
            o ? Object.getOwnPropertyDescriptor(e, i) : void 0
          );
        })(t, e, i);
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
}
function ct(t) {
  return dt({...t, state: !0, attribute: !1});
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const ht = (t, e, i) => ((i.configurable = !0), (i.enumerable = !0), i);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function ut(t, e) {
  return (i, o, r) => {
    const s = (e) => e.renderRoot?.querySelector(t) ?? null;
    if (e) {
      const {get: t, set: e} =
        'object' == typeof o
          ? i
          : r ??
            (() => {
              const t = Symbol();
              return {
                get() {
                  return this[t];
                },
                set(e) {
                  this[t] = e;
                },
              };
            })();
      return ht(0, 0, {
        get() {
          let i = t.call(this);
          return (
            void 0 === i &&
              ((i = s(this)),
              (null !== i || this.hasUpdated) && e.call(this, i)),
            i
          );
        },
      });
    }
    return ht(0, 0, {
      get() {
        return s(this);
      },
    });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let pt;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ft(t) {
  return (e, i) => {
    const {slot: o, selector: r} = t ?? {},
      s = 'slot' + (o ? `[name=${o}]` : ':not([name])');
    return ht(0, 0, {
      get() {
        const e = this.renderRoot?.querySelector(s),
          i = e?.assignedElements(t) ?? [];
        return void 0 === r ? i : i.filter((t) => t.matches(r));
      },
    });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function vt(t, e, i, o) {
  for (
    var r,
      s = arguments.length,
      n =
        s < 3
          ? e
          : null === o
          ? (o = Object.getOwnPropertyDescriptor(e, i))
          : o,
      l = t.length - 1;
    l >= 0;
    l--
  )
    (r = t[l]) && (n = (s < 3 ? r(n) : s > 3 ? r(e, i, n) : r(e, i)) || n);
  return s > 3 && n && Object.defineProperty(e, i, n), n;
}
'function' == typeof SuppressedError && SuppressedError;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const mt = 1,
  gt = 3,
  bt = 4,
  xt =
    (t) =>
    (...e) => ({_$litDirective$: t, values: e});
class yt {
  constructor(t) {}
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, i) {
    (this._$Ct = t), (this._$AM = e), (this._$Ci = i);
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const _t = xt(
    class extends yt {
      constructor(t) {
        if (
          (super(t),
          t.type !== mt || 'class' !== t.name || t.strings?.length > 2)
        )
          throw Error(
            '`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.'
          );
      }
      render(t) {
        return (
          ' ' +
          Object.keys(t)
            .filter((e) => t[e])
            .join(' ') +
          ' '
        );
      }
      update(t, [e]) {
        if (void 0 === this.st) {
          (this.st = new Set()),
            void 0 !== t.strings &&
              (this.nt = new Set(
                t.strings
                  .join(' ')
                  .split(/\s/)
                  .filter((t) => '' !== t)
              ));
          for (const t in e) e[t] && !this.nt?.has(t) && this.st.add(t);
          return this.render(e);
        }
        const i = t.element.classList;
        for (const t of this.st) t in e || (i.remove(t), this.st.delete(t));
        for (const t in e) {
          const o = !!e[t];
          o === this.st.has(t) ||
            this.nt?.has(t) ||
            (o ? (i.add(t), this.st.add(t)) : (i.remove(t), this.st.delete(t)));
        }
        return j;
      }
    }
  ),
  wt = 'cubic-bezier(0.2, 0, 0, 1)',
  $t = 'cubic-bezier(.3,0,0,1)',
  St = 'cubic-bezier(.3,0,.8,.15)';
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class kt extends rt {
  constructor() {
    super(...arguments),
      (this.disabled = !1),
      (this.error = !1),
      (this.focused = !1),
      (this.label = ''),
      (this.populated = !1),
      (this.required = !1),
      (this.resizable = !1),
      (this.supportingText = ''),
      (this.errorText = ''),
      (this.count = -1),
      (this.max = -1),
      (this.hasStart = !1),
      (this.hasEnd = !1),
      (this.isAnimating = !1),
      (this.refreshErrorAlert = !1),
      (this.disableTransitions = !1);
  }
  get counterText() {
    const t = this.count ?? -1,
      e = this.max ?? -1;
    return t < 0 || e <= 0 ? '' : `${t} / ${e}`;
  }
  get supportingOrErrorText() {
    return this.error && this.errorText ? this.errorText : this.supportingText;
  }
  reannounceError() {
    this.refreshErrorAlert = !0;
  }
  update(t) {
    t.has('disabled') &&
      void 0 !== t.get('disabled') &&
      (this.disableTransitions = !0),
      this.disabled &&
        this.focused &&
        (t.set('focused', !0), (this.focused = !1)),
      this.animateLabelIfNeeded({
        wasFocused: t.get('focused'),
        wasPopulated: t.get('populated'),
      }),
      super.update(t);
  }
  render() {
    const t = this.renderLabel(!0),
      e = this.renderLabel(!1),
      i = this.renderOutline?.(t),
      o = {
        disabled: this.disabled,
        'disable-transitions': this.disableTransitions,
        error: this.error && !this.disabled,
        focused: this.focused,
        'with-start': this.hasStart,
        'with-end': this.hasEnd,
        populated: this.populated,
        resizable: this.resizable,
        required: this.required,
        'no-label': !this.label,
      };
    return W`
      <div class="field ${_t(o)}">
        <div class="container-overflow">
          ${this.renderBackground?.()} ${this.renderIndicator?.()} ${i}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${e} ${i ? D : t}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `;
  }
  updated(t) {
    (t.has('supportingText') ||
      t.has('errorText') ||
      t.has('count') ||
      t.has('max')) &&
      this.updateSlottedAriaDescribedBy(),
      this.refreshErrorAlert &&
        requestAnimationFrame(() => {
          this.refreshErrorAlert = !1;
        }),
      this.disableTransitions &&
        requestAnimationFrame(() => {
          this.disableTransitions = !1;
        });
  }
  renderSupportingText() {
    const {supportingOrErrorText: t, counterText: e} = this;
    if (!t && !e) return D;
    const i = W`<span>${t}</span>`,
      o = e ? W`<span class="counter">${e}</span>` : D,
      r = this.error && this.errorText && !this.refreshErrorAlert;
    return W`
      <div class="supporting-text" role=${r ? 'alert' : D}>${i}${o}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `;
  }
  updateSlottedAriaDescribedBy() {
    for (const t of this.slottedAriaDescribedBy)
      ot(W`${this.supportingOrErrorText} ${this.counterText}`, t),
        t.setAttribute('hidden', '');
  }
  renderLabel(t) {
    if (!this.label) return D;
    let e;
    e = t
      ? this.focused || this.populated || this.isAnimating
      : !this.focused && !this.populated && !this.isAnimating;
    const i = {hidden: !e, floating: t, resting: !t},
      o = `${this.label}${this.required ? '*' : ''}`;
    return W`
      <span class="label ${_t(i)}" aria-hidden=${!e}
        >${o}</span
      >
    `;
  }
  animateLabelIfNeeded({wasFocused: t, wasPopulated: e}) {
    if (!this.label) return;
    t ?? (t = this.focused), e ?? (e = this.populated);
    (t || e) !== (this.focused || this.populated) &&
      ((this.isAnimating = !0),
      this.labelAnimation?.cancel(),
      (this.labelAnimation = this.floatingLabelEl?.animate(
        this.getLabelKeyframes(),
        {duration: 150, easing: wt}
      )),
      this.labelAnimation?.addEventListener('finish', () => {
        this.isAnimating = !1;
      }));
  }
  getLabelKeyframes() {
    const {floatingLabelEl: t, restingLabelEl: e} = this;
    if (!t || !e) return [];
    const {x: i, y: o, height: r} = t.getBoundingClientRect(),
      {x: s, y: n, height: l} = e.getBoundingClientRect(),
      a = t.scrollWidth,
      d = e.scrollWidth,
      c = d / a,
      h = `translateX(${s - i}px) translateY(${
        n - o + Math.round((l - r * c) / 2)
      }px) scale(${c})`,
      u = 'translateX(0) translateY(0) scale(1)',
      p = e.clientWidth,
      f = d > p ? p / c + 'px' : '';
    return this.focused || this.populated
      ? [
          {transform: h, width: f},
          {transform: u, width: f},
        ]
      : [
          {transform: u, width: f},
          {transform: h, width: f},
        ];
  }
  getSurfacePositionClientRect() {
    return this.containerEl.getBoundingClientRect();
  }
}
vt([dt({type: Boolean})], kt.prototype, 'disabled', void 0),
  vt([dt({type: Boolean})], kt.prototype, 'error', void 0),
  vt([dt({type: Boolean})], kt.prototype, 'focused', void 0),
  vt([dt()], kt.prototype, 'label', void 0),
  vt([dt({type: Boolean})], kt.prototype, 'populated', void 0),
  vt([dt({type: Boolean})], kt.prototype, 'required', void 0),
  vt([dt({type: Boolean})], kt.prototype, 'resizable', void 0),
  vt(
    [dt({attribute: 'supporting-text'})],
    kt.prototype,
    'supportingText',
    void 0
  ),
  vt([dt({attribute: 'error-text'})], kt.prototype, 'errorText', void 0),
  vt([dt({type: Number})], kt.prototype, 'count', void 0),
  vt([dt({type: Number})], kt.prototype, 'max', void 0),
  vt(
    [dt({type: Boolean, attribute: 'has-start'})],
    kt.prototype,
    'hasStart',
    void 0
  ),
  vt(
    [dt({type: Boolean, attribute: 'has-end'})],
    kt.prototype,
    'hasEnd',
    void 0
  ),
  vt(
    [ft({slot: 'aria-describedby'})],
    kt.prototype,
    'slottedAriaDescribedBy',
    void 0
  ),
  vt([ct()], kt.prototype, 'isAnimating', void 0),
  vt([ct()], kt.prototype, 'refreshErrorAlert', void 0),
  vt([ct()], kt.prototype, 'disableTransitions', void 0),
  vt([ut('.label.floating')], kt.prototype, 'floatingLabelEl', void 0),
  vt([ut('.label.resting')], kt.prototype, 'restingLabelEl', void 0),
  vt([ut('.container')], kt.prototype, 'containerEl', void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ct extends kt {
  renderOutline(t) {
    return W`
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${t}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const zt = s`@layer styles{:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_container-shape: var(--md-outlined-field-container-shape, 4px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_container-shape-start-start: var( --md-outlined-field-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-field-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-field-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-field-container-shape-end-start, var(--_container-shape) )}.outline{border-color:var(--_outline-color);border-radius:inherit;display:flex;pointer-events:none;height:100%;position:absolute;width:100%;z-index:1}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}:host-context([dir=rtl]) .resizable .container,:host([dir=rtl]) .resizable .container{clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}}@layer hcm{@media(forced-colors: active){.disabled .outline{border-color:GrayText;color:GrayText}.disabled :is(.outline-start,.outline-end,.outline-panel-inactive){opacity:1}}}/*# sourceMappingURL=outlined-styles.css.map */
`,
  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */ Et = s`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}/*# sourceMappingURL=shared-styles.css.map */
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let Tt = class extends Ct {};
(Tt.styles = [Et, zt]), (Tt = vt([nt('md-outlined-field')], Tt));
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Rt = Symbol.for(''),
  At = (t) => {
    if (t?.r === Rt) return t?._$litStatic$;
  },
  It = (t, ...e) => ({
    _$litStatic$: e.reduce(
      (e, i, o) =>
        e +
        ((t) => {
          if (void 0 !== t._$litStatic$) return t._$litStatic$;
          throw Error(
            `Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`
          );
        })(i) +
        t[o + 1],
      t[0]
    ),
    r: Rt,
  }),
  Mt = new Map(),
  Ot = (
    (t) =>
    (e, ...i) => {
      const o = i.length;
      let r, s;
      const n = [],
        l = [];
      let a,
        d = 0,
        c = !1;
      for (; d < o; ) {
        for (a = e[d]; d < o && void 0 !== ((s = i[d]), (r = At(s))); )
          (a += r + e[++d]), (c = !0);
        d !== o && l.push(s), n.push(a), d++;
      }
      if ((d === o && n.push(e[o]), c)) {
        const t = n.join('$$lit$$');
        void 0 === (e = Mt.get(t)) && ((n.raw = n), Mt.set(t, (e = n))),
          (i = l);
      }
      return t(e, ...i);
    }
  )(W),
  Pt = s`:host{--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-shape: var(--md-outlined-text-field-container-shape, 4px);--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var( --md-outlined-text-field-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-text-field-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-text-field-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-text-field-container-shape-end-start, var(--_container-shape) );--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space)}/*# sourceMappingURL=outlined-styles.css.map */
`,
  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ Ut = {},
  Bt = xt(
    class extends yt {
      constructor(t) {
        if ((super(t), t.type !== gt && t.type !== mt && t.type !== bt))
          throw Error(
            'The `live` directive is not allowed on child or event bindings'
          );
        if (!((t) => void 0 === t.strings)(t))
          throw Error('`live` bindings can only contain a single expression');
      }
      render(t) {
        return t;
      }
      update(t, [e]) {
        if (e === j || e === D) return e;
        const i = t.element,
          o = t.name;
        if (t.type === gt) {
          if (e === i[o]) return j;
        } else if (t.type === bt) {
          if (!!e === i.hasAttribute(o)) return j;
        } else if (t.type === mt && i.getAttribute(o) === e + '') return j;
        return (
          ((t, e = Ut) => {
            t._$AH = e;
            /**
             * @license
             * Copyright 2020 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
          })(t),
          e
        );
      }
    }
  ),
  Nt = 'important',
  Lt = ' !' + Nt,
  Ft = xt(
    class extends yt {
      constructor(t) {
        if (
          (super(t),
          t.type !== mt || 'style' !== t.name || t.strings?.length > 2)
        )
          throw Error(
            'The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.'
          );
      }
      render(t) {
        return Object.keys(t).reduce((e, i) => {
          const o = t[i];
          return null == o
            ? e
            : e +
                `${(i = i.includes('-')
                  ? i
                  : i
                      .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, '-$&')
                      .toLowerCase())}:${o};`;
        }, '');
      }
      update(t, [e]) {
        const {style: i} = t.element;
        if (void 0 === this.ft)
          return (this.ft = new Set(Object.keys(e))), this.render(e);
        for (const t of this.ft)
          null == e[t] &&
            (this.ft.delete(t),
            t.includes('-') ? i.removeProperty(t) : (i[t] = null));
        for (const t in e) {
          const o = e[t];
          if (null != o) {
            this.ft.add(t);
            const e = 'string' == typeof o && o.endsWith(Lt);
            t.includes('-') || e
              ? i.setProperty(t, e ? o.slice(0, -11) : o, e ? Nt : '')
              : (i[t] = o);
          }
        }
        return j;
      }
    }
  ),
  Wt = [
    'ariaAtomic',
    'ariaAutoComplete',
    'ariaBusy',
    'ariaChecked',
    'ariaColCount',
    'ariaColIndex',
    'ariaColSpan',
    'ariaCurrent',
    'ariaDisabled',
    'ariaExpanded',
    'ariaHasPopup',
    'ariaHidden',
    'ariaInvalid',
    'ariaKeyShortcuts',
    'ariaLabel',
    'ariaLevel',
    'ariaLive',
    'ariaModal',
    'ariaMultiLine',
    'ariaMultiSelectable',
    'ariaOrientation',
    'ariaPlaceholder',
    'ariaPosInSet',
    'ariaPressed',
    'ariaReadOnly',
    'ariaRequired',
    'ariaRoleDescription',
    'ariaRowCount',
    'ariaRowIndex',
    'ariaRowSpan',
    'ariaSelected',
    'ariaSetSize',
    'ariaSort',
    'ariaValueMax',
    'ariaValueMin',
    'ariaValueNow',
    'ariaValueText',
  ];
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function jt(t) {
  return t
    .replace('aria', 'aria-')
    .replace(/Elements?/g, '')
    .toLowerCase();
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function Dt(t) {
  for (const e of Wt) t.createProperty(e, {attribute: jt(e), reflect: !0});
  t.addInitializer((t) => {
    const e = {
      hostConnected() {
        t.setAttribute('role', 'presentation');
      },
    };
    t.addController(e);
  });
}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ Wt.map(jt);
const qt = {fromAttribute: (t) => t ?? '', toAttribute: (t) => t || null};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function Vt(t, e) {
  !e.bubbles || (t.shadowRoot && !e.composed) || e.stopPropagation();
  const i = Reflect.construct(e.constructor, [e.type, e]),
    o = t.dispatchEvent(i);
  return o || e.preventDefault(), o;
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const Ht = Symbol('internals'),
  Kt = Symbol('privateInternals');
function Gt(t) {
  return class extends t {
    get [Ht]() {
      return this[Kt] || (this[Kt] = this.attachInternals()), this[Kt];
    }
  };
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const Yt = Symbol('createValidator'),
  Jt = Symbol('getValidityAnchor'),
  Xt = Symbol('privateValidator'),
  Zt = Symbol('privateSyncValidity'),
  Qt = Symbol('privateCustomValidationMessage');
function te(t) {
  var e;
  class i extends t {
    constructor() {
      super(...arguments), (this[e] = '');
    }
    get validity() {
      return this[Zt](), this[Ht].validity;
    }
    get validationMessage() {
      return this[Zt](), this[Ht].validationMessage;
    }
    get willValidate() {
      return this[Zt](), this[Ht].willValidate;
    }
    checkValidity() {
      return this[Zt](), this[Ht].checkValidity();
    }
    reportValidity() {
      return this[Zt](), this[Ht].reportValidity();
    }
    setCustomValidity(t) {
      (this[Qt] = t), this[Zt]();
    }
    requestUpdate(t, e, i) {
      super.requestUpdate(t, e, i), this[Zt]();
    }
    firstUpdated(t) {
      super.firstUpdated(t), this[Zt]();
    }
    [((e = Qt), Zt)]() {
      this[Xt] || (this[Xt] = this[Yt]());
      const {validity: t, validationMessage: e} = this[Xt].getValidity(),
        i = !!this[Qt],
        o = this[Qt] || e;
      this[Ht].setValidity({...t, customError: i}, o, this[Jt]() ?? void 0);
    }
    [Yt]() {
      throw new Error('Implement [createValidator]');
    }
    [Jt]() {
      throw new Error('Implement [getValidityAnchor]');
    }
  }
  return i;
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const ee = Symbol('getFormValue'),
  ie = Symbol('getFormState');
function oe(t) {
  class e extends t {
    get form() {
      return this[Ht].form;
    }
    get labels() {
      return this[Ht].labels;
    }
    get name() {
      return this.getAttribute('name') ?? '';
    }
    set name(t) {
      this.setAttribute('name', t);
    }
    get disabled() {
      return this.hasAttribute('disabled');
    }
    set disabled(t) {
      this.toggleAttribute('disabled', t);
    }
    attributeChangedCallback(t, e, i) {
      if ('name' !== t && 'disabled' !== t)
        super.attributeChangedCallback(t, e, i);
      else {
        const i = 'disabled' === t ? null !== e : e;
        this.requestUpdate(t, i);
      }
    }
    requestUpdate(t, e, i) {
      super.requestUpdate(t, e, i),
        this[Ht].setFormValue(this[ee](), this[ie]());
    }
    [ee]() {
      throw new Error('Implement [getFormValue]');
    }
    [ie]() {
      return this[ee]();
    }
    formDisabledCallback(t) {
      this.disabled = t;
    }
  }
  return (
    (e.formAssociated = !0),
    vt([dt({noAccessor: !0})], e.prototype, 'name', null),
    vt([dt({type: Boolean, noAccessor: !0})], e.prototype, 'disabled', null),
    e
  );
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const re = Symbol('onReportValidity'),
  se = Symbol('privateCleanupFormListeners'),
  ne = Symbol('privateDoNotReportInvalid'),
  le = Symbol('privateIsSelfReportingValidity'),
  ae = Symbol('privateCallOnReportValidity');
function de(t) {
  var e, i, o;
  class r extends t {
    constructor(...t) {
      super(...t),
        (this[e] = new AbortController()),
        (this[i] = !1),
        (this[o] = !1),
        this.addEventListener(
          'invalid',
          (t) => {
            !this[ne] &&
              t.isTrusted &&
              this.addEventListener(
                'invalid',
                () => {
                  this[ae](t);
                },
                {once: !0}
              );
          },
          {capture: !0}
        );
    }
    checkValidity() {
      this[ne] = !0;
      const t = super.checkValidity();
      return (this[ne] = !1), t;
    }
    reportValidity() {
      this[le] = !0;
      const t = super.reportValidity();
      return t && this[ae](null), (this[le] = !1), t;
    }
    [((e = se), (i = ne), (o = le), ae)](t) {
      const e = t?.defaultPrevented;
      if (e) return;
      this[re](t);
      !e &&
        t?.defaultPrevented &&
        (this[le] ||
          (function (t, e) {
            if (!t) return !0;
            let i;
            for (const e of t.elements)
              if (e.matches(':invalid')) {
                i = e;
                break;
              }
            return i === e;
          })(
            /**
             * @license
             * Copyright 2023 Google LLC
             * SPDX-License-Identifier: Apache-2.0
             */ this[Ht].form,
            this
          )) &&
        this.focus();
    }
    [re](t) {
      throw new Error('Implement [onReportValidity]');
    }
    formAssociatedCallback(t) {
      super.formAssociatedCallback && super.formAssociatedCallback(t),
        this[se].abort(),
        t &&
          ((this[se] = new AbortController()),
          (function (t, e, i, o) {
            const r = (function (t) {
              if (!ce.has(t)) {
                const e = new EventTarget();
                ce.set(t, e);
                for (const i of ['reportValidity', 'requestSubmit']) {
                  const o = t[i];
                  t[i] = function () {
                    e.dispatchEvent(new Event('before'));
                    const t = Reflect.apply(o, this, arguments);
                    return e.dispatchEvent(new Event('after')), t;
                  };
                }
              }
              return ce.get(t);
            })(e);
            let s,
              n = !1,
              l = !1;
            r.addEventListener(
              'before',
              () => {
                (l = !0),
                  (s = new AbortController()),
                  (n = !1),
                  t.addEventListener(
                    'invalid',
                    () => {
                      n = !0;
                    },
                    {signal: s.signal}
                  );
              },
              {signal: o}
            ),
              r.addEventListener(
                'after',
                () => {
                  (l = !1), s?.abort(), n || i();
                },
                {signal: o}
              ),
              e.addEventListener(
                'submit',
                () => {
                  l || i();
                },
                {signal: o}
              );
          })(
            this,
            t,
            () => {
              this[ae](null);
            },
            this[se].signal
          ));
    }
  }
  return r;
}
const ce = new WeakMap();
class he {
  constructor(t) {
    (this.getCurrentState = t),
      (this.currentValidity = {validity: {}, validationMessage: ''});
  }
  getValidity() {
    const t = this.getCurrentState();
    if (!(!this.prevState || !this.equals(this.prevState, t)))
      return this.currentValidity;
    const {validity: e, validationMessage: i} = this.computeValidity(t);
    return (
      (this.prevState = this.copy(t)),
      (this.currentValidity = {
        validationMessage: i,
        validity: {
          badInput: e.badInput,
          customError: e.customError,
          patternMismatch: e.patternMismatch,
          rangeOverflow: e.rangeOverflow,
          rangeUnderflow: e.rangeUnderflow,
          stepMismatch: e.stepMismatch,
          tooLong: e.tooLong,
          tooShort: e.tooShort,
          typeMismatch: e.typeMismatch,
          valueMissing: e.valueMissing,
        },
      }),
      this.currentValidity
    );
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class ue extends he {
  computeValidity({state: t, renderedControl: e}) {
    let i = e;
    pe(t) && !i
      ? ((i = this.inputControl || document.createElement('input')),
        (this.inputControl = i))
      : i ||
        ((i = this.textAreaControl || document.createElement('textarea')),
        (this.textAreaControl = i));
    const o = pe(t) ? i : null;
    if (
      (o && (o.type = t.type),
      i.value !== t.value && (i.value = t.value),
      (i.required = t.required),
      o)
    ) {
      const e = t;
      e.pattern ? (o.pattern = e.pattern) : o.removeAttribute('pattern'),
        e.min ? (o.min = e.min) : o.removeAttribute('min'),
        e.max ? (o.max = e.max) : o.removeAttribute('max'),
        e.step ? (o.step = e.step) : o.removeAttribute('step');
    }
    return (
      (t.minLength ?? -1) > -1
        ? i.setAttribute('minlength', String(t.minLength))
        : i.removeAttribute('minlength'),
      (t.maxLength ?? -1) > -1
        ? i.setAttribute('maxlength', String(t.maxLength))
        : i.removeAttribute('maxlength'),
      {validity: i.validity, validationMessage: i.validationMessage}
    );
  }
  equals({state: t}, {state: e}) {
    const i =
      t.type === e.type &&
      t.value === e.value &&
      t.required === e.required &&
      t.minLength === e.minLength &&
      t.maxLength === e.maxLength;
    return pe(t) && pe(e)
      ? i &&
          t.pattern === e.pattern &&
          t.min === e.min &&
          t.max === e.max &&
          t.step === e.step
      : i;
  }
  copy({state: t}) {
    return {
      state: pe(t) ? this.copyInput(t) : this.copyTextArea(t),
      renderedControl: null,
    };
  }
  copyInput(t) {
    const {type: e, pattern: i, min: o, max: r, step: s} = t;
    return {
      ...this.copySharedState(t),
      type: e,
      pattern: i,
      min: o,
      max: r,
      step: s,
    };
  }
  copyTextArea(t) {
    return {...this.copySharedState(t), type: t.type};
  }
  copySharedState({value: t, required: e, minLength: i, maxLength: o}) {
    return {value: t, required: e, minLength: i, maxLength: o};
  }
}
function pe(t) {
  return 'textarea' !== t.type;
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const fe = de(te(oe(Gt(rt))));
class ve extends fe {
  constructor() {
    super(...arguments),
      (this.error = !1),
      (this.errorText = ''),
      (this.label = ''),
      (this.required = !1),
      (this.value = ''),
      (this.prefixText = ''),
      (this.suffixText = ''),
      (this.hasLeadingIcon = !1),
      (this.hasTrailingIcon = !1),
      (this.supportingText = ''),
      (this.textDirection = ''),
      (this.rows = 2),
      (this.cols = 20),
      (this.inputMode = ''),
      (this.max = ''),
      (this.maxLength = -1),
      (this.min = ''),
      (this.minLength = -1),
      (this.noSpinner = !1),
      (this.pattern = ''),
      (this.placeholder = ''),
      (this.readOnly = !1),
      (this.multiple = !1),
      (this.step = ''),
      (this.type = 'text'),
      (this.autocomplete = ''),
      (this.dirty = !1),
      (this.focused = !1),
      (this.nativeError = !1),
      (this.nativeErrorText = '');
  }
  get selectionDirection() {
    return this.getInputOrTextarea().selectionDirection;
  }
  set selectionDirection(t) {
    this.getInputOrTextarea().selectionDirection = t;
  }
  get selectionEnd() {
    return this.getInputOrTextarea().selectionEnd;
  }
  set selectionEnd(t) {
    this.getInputOrTextarea().selectionEnd = t;
  }
  get selectionStart() {
    return this.getInputOrTextarea().selectionStart;
  }
  set selectionStart(t) {
    this.getInputOrTextarea().selectionStart = t;
  }
  get valueAsNumber() {
    const t = this.getInput();
    return t ? t.valueAsNumber : NaN;
  }
  set valueAsNumber(t) {
    const e = this.getInput();
    e && ((e.valueAsNumber = t), (this.value = e.value));
  }
  get valueAsDate() {
    const t = this.getInput();
    return t ? t.valueAsDate : null;
  }
  set valueAsDate(t) {
    const e = this.getInput();
    e && ((e.valueAsDate = t), (this.value = e.value));
  }
  get hasError() {
    return this.error || this.nativeError;
  }
  select() {
    this.getInputOrTextarea().select();
  }
  setRangeText(...t) {
    this.getInputOrTextarea().setRangeText(...t),
      (this.value = this.getInputOrTextarea().value);
  }
  setSelectionRange(t, e, i) {
    this.getInputOrTextarea().setSelectionRange(t, e, i);
  }
  stepDown(t) {
    const e = this.getInput();
    e && (e.stepDown(t), (this.value = e.value));
  }
  stepUp(t) {
    const e = this.getInput();
    e && (e.stepUp(t), (this.value = e.value));
  }
  reset() {
    (this.dirty = !1),
      (this.value = this.getAttribute('value') ?? ''),
      (this.nativeError = !1),
      (this.nativeErrorText = '');
  }
  attributeChangedCallback(t, e, i) {
    ('value' === t && this.dirty) || super.attributeChangedCallback(t, e, i);
  }
  render() {
    const t = {
      disabled: this.disabled,
      error: !this.disabled && this.hasError,
      textarea: 'textarea' === this.type,
      'no-spinner': this.noSpinner,
    };
    return W`
      <span class="text-field ${_t(t)}">
        ${this.renderField()}
      </span>
    `;
  }
  updated(t) {
    const e = this.getInputOrTextarea().value;
    this.value !== e && (this.value = e);
  }
  renderField() {
    return Ot`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${'textarea' === this.type}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
    </${this.fieldTag}>`;
  }
  renderLeadingIcon() {
    return W`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `;
  }
  renderTrailingIcon() {
    return W`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `;
  }
  renderInputOrTextarea() {
    const t = {direction: this.textDirection},
      e = this.ariaLabel || this.label || D,
      i = this.autocomplete,
      o = (this.maxLength ?? -1) > -1,
      r = (this.minLength ?? -1) > -1;
    if ('textarea' === this.type)
      return W`
        <textarea
          class="input"
          style=${Ft(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${i || D}
          ?disabled=${this.disabled}
          maxlength=${o ? this.maxLength : D}
          minlength=${r ? this.minLength : D}
          placeholder=${this.placeholder || D}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${Bt(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;
    const s = this.renderPrefix(),
      n = this.renderSuffix(),
      l = this.inputMode;
    return W`
      <div class="input-wrapper">
        ${s}
        <input
          class="input"
          style=${Ft(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${i || D}
          ?disabled=${this.disabled}
          inputmode=${l || D}
          max=${this.max || D}
          maxlength=${o ? this.maxLength : D}
          min=${this.min || D}
          minlength=${r ? this.minLength : D}
          pattern=${this.pattern || D}
          placeholder=${this.placeholder || D}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step || D}
          type=${this.type}
          .value=${Bt(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${n}
      </div>
    `;
  }
  renderPrefix() {
    return this.renderAffix(this.prefixText, !1);
  }
  renderSuffix() {
    return this.renderAffix(this.suffixText, !0);
  }
  renderAffix(t, e) {
    if (!t) return D;
    return W`<span class="${_t({suffix: e, prefix: !e})}">${t}</span>`;
  }
  getErrorText() {
    return this.error ? this.errorText : this.nativeErrorText;
  }
  handleFocusChange() {
    this.focused = this.inputOrTextarea?.matches(':focus') ?? !1;
  }
  handleInput(t) {
    (this.dirty = !0), (this.value = t.target.value);
  }
  redispatchEvent(t) {
    Vt(this, t);
  }
  getInputOrTextarea() {
    return (
      this.inputOrTextarea || (this.connectedCallback(), this.scheduleUpdate()),
      this.isUpdatePending && this.scheduleUpdate(),
      this.inputOrTextarea
    );
  }
  getInput() {
    return 'textarea' === this.type ? null : this.getInputOrTextarea();
  }
  handleIconChange() {
    (this.hasLeadingIcon = this.leadingIcons.length > 0),
      (this.hasTrailingIcon = this.trailingIcons.length > 0);
  }
  [ee]() {
    return this.value;
  }
  formResetCallback() {
    this.reset();
  }
  formStateRestoreCallback(t) {
    this.value = t;
  }
  focus() {
    this.getInputOrTextarea().focus();
  }
  [Yt]() {
    return new ue(() => ({state: this, renderedControl: this.inputOrTextarea}));
  }
  [Jt]() {
    return this.inputOrTextarea;
  }
  [re](t) {
    t?.preventDefault();
    const e = this.getErrorText();
    (this.nativeError = !!t),
      (this.nativeErrorText = this.validationMessage),
      e === this.getErrorText() && this.field?.reannounceError();
  }
}
Dt(ve),
  (ve.shadowRootOptions = {...rt.shadowRootOptions, delegatesFocus: !0}),
  vt([dt({type: Boolean, reflect: !0})], ve.prototype, 'error', void 0),
  vt([dt({attribute: 'error-text'})], ve.prototype, 'errorText', void 0),
  vt([dt()], ve.prototype, 'label', void 0),
  vt([dt({type: Boolean, reflect: !0})], ve.prototype, 'required', void 0),
  vt([dt()], ve.prototype, 'value', void 0),
  vt([dt({attribute: 'prefix-text'})], ve.prototype, 'prefixText', void 0),
  vt([dt({attribute: 'suffix-text'})], ve.prototype, 'suffixText', void 0),
  vt(
    [dt({type: Boolean, attribute: 'has-leading-icon'})],
    ve.prototype,
    'hasLeadingIcon',
    void 0
  ),
  vt(
    [dt({type: Boolean, attribute: 'has-trailing-icon'})],
    ve.prototype,
    'hasTrailingIcon',
    void 0
  ),
  vt(
    [dt({attribute: 'supporting-text'})],
    ve.prototype,
    'supportingText',
    void 0
  ),
  vt(
    [dt({attribute: 'text-direction'})],
    ve.prototype,
    'textDirection',
    void 0
  ),
  vt([dt({type: Number})], ve.prototype, 'rows', void 0),
  vt([dt({type: Number})], ve.prototype, 'cols', void 0),
  vt([dt({reflect: !0})], ve.prototype, 'inputMode', void 0),
  vt([dt()], ve.prototype, 'max', void 0),
  vt([dt({type: Number})], ve.prototype, 'maxLength', void 0),
  vt([dt()], ve.prototype, 'min', void 0),
  vt([dt({type: Number})], ve.prototype, 'minLength', void 0),
  vt(
    [dt({type: Boolean, attribute: 'no-spinner'})],
    ve.prototype,
    'noSpinner',
    void 0
  ),
  vt([dt()], ve.prototype, 'pattern', void 0),
  vt([dt({reflect: !0, converter: qt})], ve.prototype, 'placeholder', void 0),
  vt([dt({type: Boolean, reflect: !0})], ve.prototype, 'readOnly', void 0),
  vt([dt({type: Boolean, reflect: !0})], ve.prototype, 'multiple', void 0),
  vt([dt()], ve.prototype, 'step', void 0),
  vt([dt({reflect: !0})], ve.prototype, 'type', void 0),
  vt([dt({reflect: !0})], ve.prototype, 'autocomplete', void 0),
  vt([ct()], ve.prototype, 'dirty', void 0),
  vt([ct()], ve.prototype, 'focused', void 0),
  vt([ct()], ve.prototype, 'nativeError', void 0),
  vt([ct()], ve.prototype, 'nativeErrorText', void 0),
  vt([ut('.input')], ve.prototype, 'inputOrTextarea', void 0),
  vt([ut('.field')], ve.prototype, 'field', void 0),
  vt([ft({slot: 'leading-icon'})], ve.prototype, 'leadingIcons', void 0),
  vt([ft({slot: 'trailing-icon'})], ve.prototype, 'trailingIcons', void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class me extends ve {
  constructor() {
    super(...arguments), (this.fieldTag = It`md-outlined-field`);
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const ge = s`:host{display:inline-flex;outline:none;resize:both;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}/*# sourceMappingURL=shared-styles.css.map */
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let be = class extends me {
  constructor() {
    super(...arguments), (this.fieldTag = It`md-outlined-field`);
  }
};
(be.styles = [ge, Pt]), (be = vt([nt('md-outlined-text-field')], be));
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class xe extends rt {
  connectedCallback() {
    super.connectedCallback(), this.setAttribute('aria-hidden', 'true');
  }
  render() {
    return W`<span class="shadow"></span>`;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const ye = s`:host{display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let _e = class extends xe {};
(_e.styles = [ye]), (_e = vt([nt('md-elevation')], _e));
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const we = Symbol('attachableController');
let $e;
$e = new MutationObserver((t) => {
  for (const e of t) e.target[we]?.hostConnected();
});
class Se {
  get htmlFor() {
    return this.host.getAttribute('for');
  }
  set htmlFor(t) {
    null === t
      ? this.host.removeAttribute('for')
      : this.host.setAttribute('for', t);
  }
  get control() {
    return this.host.hasAttribute('for')
      ? this.htmlFor && this.host.isConnected
        ? this.host.getRootNode().querySelector(`#${this.htmlFor}`)
        : null
      : this.currentControl || this.host.parentElement;
  }
  set control(t) {
    t ? this.attach(t) : this.detach();
  }
  constructor(t, e) {
    (this.host = t),
      (this.onControlChange = e),
      (this.currentControl = null),
      t.addController(this),
      (t[we] = this),
      $e?.observe(t, {attributeFilter: ['for']});
  }
  attach(t) {
    t !== this.currentControl &&
      (this.setCurrentControl(t), this.host.removeAttribute('for'));
  }
  detach() {
    this.setCurrentControl(null), this.host.setAttribute('for', '');
  }
  hostConnected() {
    this.setCurrentControl(this.control);
  }
  hostDisconnected() {
    this.setCurrentControl(null);
  }
  setCurrentControl(t) {
    this.onControlChange(this.currentControl, t), (this.currentControl = t);
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const ke = ['focusin', 'focusout', 'pointerdown'];
class Ce extends rt {
  constructor() {
    super(...arguments),
      (this.visible = !1),
      (this.inward = !1),
      (this.attachableController = new Se(
        this,
        this.onControlChange.bind(this)
      ));
  }
  get htmlFor() {
    return this.attachableController.htmlFor;
  }
  set htmlFor(t) {
    this.attachableController.htmlFor = t;
  }
  get control() {
    return this.attachableController.control;
  }
  set control(t) {
    this.attachableController.control = t;
  }
  attach(t) {
    this.attachableController.attach(t);
  }
  detach() {
    this.attachableController.detach();
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute('aria-hidden', 'true');
  }
  handleEvent(t) {
    if (!t[ze]) {
      switch (t.type) {
        default:
          return;
        case 'focusin':
          this.visible = this.control?.matches(':focus-visible') ?? !1;
          break;
        case 'focusout':
        case 'pointerdown':
          this.visible = !1;
      }
      t[ze] = !0;
    }
  }
  onControlChange(t, e) {
    for (const i of ke)
      t?.removeEventListener(i, this), e?.addEventListener(i, this);
  }
  update(t) {
    t.has('visible') && this.dispatchEvent(new Event('visibility-changed')),
      super.update(t);
  }
}
vt([dt({type: Boolean, reflect: !0})], Ce.prototype, 'visible', void 0),
  vt([dt({type: Boolean, reflect: !0})], Ce.prototype, 'inward', void 0);
const ze = Symbol('handledByFocusRing'),
  Ee = s`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let Te = class extends Ce {};
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Re(t, e = Be) {
  const i = Me(t, e);
  return i && ((i.tabIndex = 0), i.focus()), i;
}
function Ae(t, e = Be) {
  const i = Oe(t, e);
  return i && ((i.tabIndex = 0), i.focus()), i;
}
function Ie(t, e = Be) {
  for (let i = 0; i < t.length; i++) {
    const o = t[i];
    if (0 === o.tabIndex && e(o)) return {item: o, index: i};
  }
  return null;
}
function Me(t, e = Be) {
  for (const i of t) if (e(i)) return i;
  return null;
}
function Oe(t, e = Be) {
  for (let i = t.length - 1; i >= 0; i--) {
    const o = t[i];
    if (e(o)) return o;
  }
  return null;
}
function Pe(t, e, i = Be) {
  if (e) {
    const o = (function (t, e, i = Be) {
      for (let o = 1; o < t.length; o++) {
        const r = t[(o + e) % t.length];
        if (i(r)) return r;
      }
      return t[e] ? t[e] : null;
    })(t, e.index, i);
    return o && ((o.tabIndex = 0), o.focus()), o;
  }
  return Re(t, i);
}
function Ue(t, e, i = Be) {
  if (e) {
    const o = (function (t, e, i = Be) {
      for (let o = 1; o < t.length; o++) {
        const r = t[(e - o + t.length) % t.length];
        if (i(r)) return r;
      }
      return t[e] ? t[e] : null;
    })(t, e.index, i);
    return o && ((o.tabIndex = 0), o.focus()), o;
  }
  return Ae(t, i);
}
function Be(t) {
  return !t.disabled;
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ (Te.styles = [Ee]), (Te = vt([nt('md-focus-ring')], Te));
const Ne = 'ArrowDown',
  Le = 'ArrowLeft',
  Fe = 'ArrowUp',
  We = 'ArrowRight',
  je = 'Home',
  De = 'End';
class qe {
  constructor(t) {
    (this.handleKeydown = (t) => {
      const e = t.key;
      if (t.defaultPrevented || !this.isNavigableKey(e)) return;
      const i = this.items;
      if (!i.length) return;
      const o = Ie(i, this.isActivatable);
      o && (o.item.tabIndex = -1), t.preventDefault();
      const r = this.isRtl();
      switch (e) {
        case Ne:
        case r ? Le : We:
          Pe(i, o, this.isActivatable);
          break;
        case Fe:
        case r ? We : Le:
          Ue(i, o, this.isActivatable);
          break;
        case je:
          Re(i, this.isActivatable);
          break;
        case De:
          Ae(i, this.isActivatable);
      }
    }),
      (this.onDeactivateItems = () => {
        const t = this.items;
        for (const e of t) this.deactivateItem(e);
      }),
      (this.onRequestActivation = (t) => {
        this.onDeactivateItems();
        const e = t.target;
        this.activateItem(e), e.focus();
      }),
      (this.onSlotchange = () => {
        const t = this.items;
        let e = !1;
        for (const i of t) {
          !(!i.disabled && i.tabIndex > -1) || e
            ? (i.tabIndex = -1)
            : ((e = !0), (i.tabIndex = 0));
        }
        if (e) return;
        const i = Me(t, this.isActivatable);
        i && (i.tabIndex = 0);
      });
    const {
      isItem: e,
      getPossibleItems: i,
      isRtl: o,
      deactivateItem: r,
      activateItem: s,
      isNavigableKey: n,
      isActivatable: l,
    } = t;
    (this.isItem = e),
      (this.getPossibleItems = i),
      (this.isRtl = o),
      (this.deactivateItem = r),
      (this.activateItem = s),
      (this.isNavigableKey = n),
      (this.isActivatable = l);
  }
  get items() {
    const t = this.getPossibleItems(),
      e = [];
    for (const i of t) {
      if (this.isItem(i)) {
        e.push(i);
        continue;
      }
      const t = i.item;
      t && this.isItem(t) && e.push(t);
    }
    return e;
  }
  activateNextItem() {
    const t = this.items,
      e = Ie(t, this.isActivatable);
    return e && (e.item.tabIndex = -1), Pe(t, e, this.isActivatable);
  }
  activatePreviousItem() {
    const t = this.items,
      e = Ie(t, this.isActivatable);
    return e && (e.item.tabIndex = -1), Ue(t, e, this.isActivatable);
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const Ve = function (t, e) {
    return new CustomEvent('close-menu', {
      bubbles: !0,
      composed: !0,
      detail: {initiator: t, reason: e, itemPath: [t]},
    });
  },
  He = {SPACE: 'Space', ENTER: 'Enter'},
  Ke = 'click-selection',
  Ge = 'keydown',
  Ye = {ESCAPE: 'Escape', SPACE: He.SPACE, ENTER: He.ENTER};
function Je(t) {
  return Object.values(Ye).some((e) => e === t);
}
function Xe(t, e) {
  const i = new Event('md-contains', {bubbles: !0, composed: !0});
  let o = [];
  const r = (t) => {
    o = t.composedPath();
  };
  e.addEventListener('md-contains', r),
    t.dispatchEvent(i),
    e.removeEventListener('md-contains', r);
  return o.length > 0;
}
const Ze = 'none',
  Qe = 'list-root',
  ti = 'first-item',
  ei = 'last-item',
  ii = 'end-start',
  oi = 'start-start';
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class ri {
  constructor(t, e) {
    (this.host = t),
      (this.getProperties = e),
      (this.surfaceStylesInternal = {display: 'none'}),
      (this.lastValues = {isOpen: !1}),
      this.host.addController(this);
  }
  get surfaceStyles() {
    return this.surfaceStylesInternal;
  }
  async position() {
    const {
        surfaceEl: t,
        anchorEl: e,
        anchorCorner: i,
        surfaceCorner: o,
        positioning: r,
        xOffset: s,
        yOffset: n,
        repositionStrategy: l,
      } = this.getProperties(),
      a = i.toLowerCase().trim(),
      d = o.toLowerCase().trim();
    if (!t || !e) return;
    const c = window.innerWidth,
      h = window.innerHeight,
      u = document.createElement('div');
    (u.style.opacity = '0'),
      (u.style.position = 'fixed'),
      (u.style.display = 'block'),
      (u.style.inset = '0'),
      document.body.appendChild(u);
    const p = u.getBoundingClientRect();
    u.remove();
    const f = window.innerHeight - p.bottom,
      v = window.innerWidth - p.right;
    (this.surfaceStylesInternal = {display: 'block', opacity: '0'}),
      this.host.requestUpdate(),
      await this.host.updateComplete,
      t.popover && t.isConnected && t.showPopover();
    const m = t.getSurfacePositionClientRect
        ? t.getSurfacePositionClientRect()
        : t.getBoundingClientRect(),
      g = e.getSurfacePositionClientRect
        ? e.getSurfacePositionClientRect()
        : e.getBoundingClientRect(),
      [b, x] = d.split('-'),
      [y, _] = a.split('-'),
      w = 'ltr' === getComputedStyle(t).direction;
    let {
      blockInset: $,
      blockOutOfBoundsCorrection: S,
      surfaceBlockProperty: k,
    } = this.calculateBlock({
      surfaceRect: m,
      anchorRect: g,
      anchorBlock: y,
      surfaceBlock: b,
      yOffset: n,
      positioning: r,
      windowInnerHeight: h,
      blockScrollbarHeight: f,
    });
    if (S) {
      const t = 'start' === b ? 'end' : 'start',
        e = 'start' === y ? 'end' : 'start',
        i = this.calculateBlock({
          surfaceRect: m,
          anchorRect: g,
          anchorBlock: e,
          surfaceBlock: t,
          yOffset: n,
          positioning: r,
          windowInnerHeight: h,
          blockScrollbarHeight: f,
        });
      S > i.blockOutOfBoundsCorrection &&
        (($ = i.blockInset),
        (S = i.blockOutOfBoundsCorrection),
        (k = i.surfaceBlockProperty));
    }
    let {
      inlineInset: C,
      inlineOutOfBoundsCorrection: z,
      surfaceInlineProperty: E,
    } = this.calculateInline({
      surfaceRect: m,
      anchorRect: g,
      anchorInline: _,
      surfaceInline: x,
      xOffset: s,
      positioning: r,
      isLTR: w,
      windowInnerWidth: c,
      inlineScrollbarWidth: v,
    });
    if (z) {
      const t = 'start' === x ? 'end' : 'start',
        e = 'start' === _ ? 'end' : 'start',
        i = this.calculateInline({
          surfaceRect: m,
          anchorRect: g,
          anchorInline: e,
          surfaceInline: t,
          xOffset: s,
          positioning: r,
          isLTR: w,
          windowInnerWidth: c,
          inlineScrollbarWidth: v,
        });
      Math.abs(z) > Math.abs(i.inlineOutOfBoundsCorrection) &&
        ((C = i.inlineInset),
        (z = i.inlineOutOfBoundsCorrection),
        (E = i.surfaceInlineProperty));
    }
    'move' === l && (($ -= S), (C -= z)),
      (this.surfaceStylesInternal = {
        display: 'block',
        opacity: '1',
        [k]: `${$}px`,
        [E]: `${C}px`,
      }),
      'resize' === l &&
        (S && (this.surfaceStylesInternal.height = m.height - S + 'px'),
        z && (this.surfaceStylesInternal.width = m.width - z + 'px')),
      this.host.requestUpdate();
  }
  calculateBlock(t) {
    const {
        surfaceRect: e,
        anchorRect: i,
        anchorBlock: o,
        surfaceBlock: r,
        yOffset: s,
        positioning: n,
        windowInnerHeight: l,
        blockScrollbarHeight: a,
      } = t,
      d = 'fixed' === n || 'document' === n ? 1 : 0,
      c = 'document' === n ? 1 : 0,
      h = 'start' === r ? 1 : 0,
      u = 'end' === r ? 1 : 0,
      p = (o !== r ? 1 : 0) * i.height + s,
      f = h * i.top + u * (l - i.bottom - a);
    return {
      blockInset: d * f + c * (h * window.scrollY - u * window.scrollY) + p,
      blockOutOfBoundsCorrection: Math.abs(Math.min(0, l - f - p - e.height)),
      surfaceBlockProperty:
        'start' === r ? 'inset-block-start' : 'inset-block-end',
    };
  }
  calculateInline(t) {
    const {
        isLTR: e,
        surfaceInline: i,
        anchorInline: o,
        anchorRect: r,
        surfaceRect: s,
        xOffset: n,
        positioning: l,
        windowInnerWidth: a,
        inlineScrollbarWidth: d,
      } = t,
      c = 'fixed' === l || 'document' === l ? 1 : 0,
      h = 'document' === l ? 1 : 0,
      u = e ? 1 : 0,
      p = e ? 0 : 1,
      f = 'start' === i ? 1 : 0,
      v = 'end' === i ? 1 : 0,
      m = (o !== i ? 1 : 0) * r.width + n,
      g =
        u * (f * r.left + v * (a - r.right - d)) +
        p * (f * (a - r.right - d) + v * r.left);
    let b = 'start' === i ? 'inset-inline-start' : 'inset-inline-end';
    return (
      ('document' !== l && 'fixed' !== l) ||
        (b = ('start' === i && e) || ('end' === i && !e) ? 'left' : 'right'),
      {
        inlineInset:
          c * g +
          m +
          h *
            (u * (f * window.scrollX - v * window.scrollX) +
              p * (v * window.scrollX - f * window.scrollX)),
        inlineOutOfBoundsCorrection: Math.abs(Math.min(0, a - g - m - s.width)),
        surfaceInlineProperty: b,
      }
    );
  }
  hostUpdate() {
    this.onUpdate();
  }
  hostUpdated() {
    this.onUpdate();
  }
  async onUpdate() {
    const t = this.getProperties();
    let e = !1;
    for (const [i, o] of Object.entries(t))
      if (((e = e || o !== this.lastValues[i]), e)) break;
    const i = this.lastValues.isOpen !== t.isOpen,
      o = !!t.anchorEl,
      r = !!t.surfaceEl;
    e &&
      o &&
      r &&
      ((this.lastValues.isOpen = t.isOpen),
      t.isOpen
        ? ((this.lastValues = t), await this.position(), t.onOpen())
        : i && (await t.beforeClose(), this.close(), t.onClose()));
  }
  close() {
    (this.surfaceStylesInternal = {display: 'none'}), this.host.requestUpdate();
    const t = this.getProperties().surfaceEl;
    t?.popover && t?.isConnected && t.hidePopover();
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const si = 0,
  ni = 1,
  li = 2;
class ai {
  constructor(t) {
    (this.getProperties = t),
      (this.typeaheadRecords = []),
      (this.typaheadBuffer = ''),
      (this.cancelTypeaheadTimeout = 0),
      (this.isTypingAhead = !1),
      (this.lastActiveRecord = null),
      (this.onKeydown = (t) => {
        this.isTypingAhead ? this.typeahead(t) : this.beginTypeahead(t);
      }),
      (this.endTypeahead = () => {
        (this.isTypingAhead = !1),
          (this.typaheadBuffer = ''),
          (this.typeaheadRecords = []);
      });
  }
  get items() {
    return this.getProperties().getItems();
  }
  get active() {
    return this.getProperties().active;
  }
  beginTypeahead(t) {
    this.active &&
      ('Space' === t.code ||
        'Enter' === t.code ||
        t.code.startsWith('Arrow') ||
        'Escape' === t.code ||
        ((this.isTypingAhead = !0),
        (this.typeaheadRecords = this.items.map((t, e) => [
          e,
          t,
          t.typeaheadText.trim().toLowerCase(),
        ])),
        (this.lastActiveRecord =
          this.typeaheadRecords.find((t) => 0 === t[ni].tabIndex) ?? null),
        this.lastActiveRecord && (this.lastActiveRecord[ni].tabIndex = -1),
        this.typeahead(t)));
  }
  typeahead(t) {
    if (t.defaultPrevented) return;
    if (
      (clearTimeout(this.cancelTypeaheadTimeout),
      'Enter' === t.code || t.code.startsWith('Arrow') || 'Escape' === t.code)
    )
      return (
        this.endTypeahead(),
        void (
          this.lastActiveRecord && (this.lastActiveRecord[ni].tabIndex = -1)
        )
      );
    'Space' === t.code && t.preventDefault(),
      (this.cancelTypeaheadTimeout = setTimeout(
        this.endTypeahead,
        this.getProperties().typeaheadBufferTime
      )),
      (this.typaheadBuffer += t.key.toLowerCase());
    const e = this.lastActiveRecord ? this.lastActiveRecord[si] : -1,
      i = this.typeaheadRecords.length,
      o = (t) => (t[si] + i - e) % i,
      r = this.typeaheadRecords
        .filter((t) => !t[ni].disabled && t[li].startsWith(this.typaheadBuffer))
        .sort((t, e) => o(t) - o(e));
    if (0 === r.length)
      return (
        clearTimeout(this.cancelTypeaheadTimeout),
        this.lastActiveRecord && (this.lastActiveRecord[ni].tabIndex = -1),
        void this.endTypeahead()
      );
    const s = 1 === this.typaheadBuffer.length;
    let n;
    (n = this.lastActiveRecord === r[0] && s ? r[1] ?? r[0] : r[0]),
      this.lastActiveRecord && (this.lastActiveRecord[ni].tabIndex = -1),
      (this.lastActiveRecord = n),
      (n[ni].tabIndex = 0),
      n[ni].focus();
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const di = new Set([Ne, Fe, je, De]),
  ci = new Set([Le, We, ...di]);
class hi extends rt {
  get openDirection() {
    return 'start' === this.menuCorner.split('-')[0] ? 'DOWN' : 'UP';
  }
  get anchorElement() {
    return this.anchor
      ? this.getRootNode().querySelector(`#${this.anchor}`)
      : this.currentAnchorElement;
  }
  set anchorElement(t) {
    (this.currentAnchorElement = t), this.requestUpdate('anchorElement');
  }
  constructor() {
    super(),
      (this.anchor = ''),
      (this.positioning = 'absolute'),
      (this.quick = !1),
      (this.hasOverflow = !1),
      (this.open = !1),
      (this.xOffset = 0),
      (this.yOffset = 0),
      (this.typeaheadDelay = 200),
      (this.anchorCorner = ii),
      (this.menuCorner = oi),
      (this.stayOpenOnOutsideClick = !1),
      (this.stayOpenOnFocusout = !1),
      (this.skipRestoreFocus = !1),
      (this.defaultFocus = ti),
      (this.typeaheadActive = !0),
      (this.isSubmenu = !1),
      (this.pointerPath = []),
      (this.isRepositioning = !1),
      (this.openCloseAnimationSignal = (function () {
        let t = null;
        return {
          start: () => (t?.abort(), (t = new AbortController()), t.signal),
          finish() {
            t = null;
          },
        };
      })()),
      (this.listController = new qe({
        isItem: (t) => t.hasAttribute('md-menu-item'),
        getPossibleItems: () => this.slotItems,
        isRtl: () => 'rtl' === getComputedStyle(this).direction,
        deactivateItem: (t) => {
          (t.selected = !1), (t.tabIndex = -1);
        },
        activateItem: (t) => {
          (t.selected = !0), (t.tabIndex = 0);
        },
        isNavigableKey: (t) => {
          if (!this.isSubmenu) return ci.has(t);
          return (
            t === ('rtl' === getComputedStyle(this).direction ? Le : We) ||
            di.has(t)
          );
        },
      })),
      (this.lastFocusedElement = null),
      (this.typeaheadController = new ai(() => ({
        getItems: () => this.items,
        typeaheadBufferTime: this.typeaheadDelay,
        active: this.typeaheadActive,
      }))),
      (this.currentAnchorElement = null),
      (this.internals = this.attachInternals()),
      (this.menuPositionController = new ri(this, () => ({
        anchorCorner: this.anchorCorner,
        surfaceCorner: this.menuCorner,
        surfaceEl: this.surfaceEl,
        anchorEl: this.anchorElement,
        positioning:
          'popover' === this.positioning ? 'document' : this.positioning,
        isOpen: this.open,
        xOffset: this.xOffset,
        yOffset: this.yOffset,
        onOpen: this.onOpened,
        beforeClose: this.beforeClose,
        onClose: this.onClosed,
        repositionStrategy:
          this.hasOverflow && 'popover' !== this.positioning
            ? 'move'
            : 'resize',
      }))),
      (this.onWindowResize = () => {
        this.isRepositioning ||
          ('document' !== this.positioning &&
            'fixed' !== this.positioning &&
            'popover' !== this.positioning) ||
          ((this.isRepositioning = !0),
          this.reposition(),
          (this.isRepositioning = !1));
      }),
      (this.handleFocusout = async (t) => {
        const e = this.anchorElement;
        if (
          this.stayOpenOnFocusout ||
          !this.open ||
          this.pointerPath.includes(e)
        )
          return;
        if (t.relatedTarget) {
          if (
            Xe(t.relatedTarget, this) ||
            (0 !== this.pointerPath.length && Xe(t.relatedTarget, e))
          )
            return;
        } else if (this.pointerPath.includes(this)) return;
        const i = this.skipRestoreFocus;
        (this.skipRestoreFocus = !0),
          this.close(),
          await this.updateComplete,
          (this.skipRestoreFocus = i);
      }),
      (this.onOpened = async () => {
        this.lastFocusedElement = (function (t = document) {
          let e = t.activeElement;
          for (; e && e?.shadowRoot?.activeElement; )
            e = e.shadowRoot.activeElement;
          return e;
        })();
        const t = this.items,
          e = Ie(t);
        e && this.defaultFocus !== Ze && (e.item.tabIndex = -1);
        let i = !this.quick;
        switch (
          (this.quick
            ? this.dispatchEvent(new Event('opening'))
            : (i = !!(await this.animateOpen())),
          this.defaultFocus)
        ) {
          case ti:
            const e = Me(t);
            e && ((e.tabIndex = 0), e.focus(), await e.updateComplete);
            break;
          case ei:
            const i = Oe(t);
            i && ((i.tabIndex = 0), i.focus(), await i.updateComplete);
            break;
          case Qe:
            this.focus();
        }
        i || this.dispatchEvent(new Event('opened'));
      }),
      (this.beforeClose = async () => {
        (this.open = !1),
          this.skipRestoreFocus || this.lastFocusedElement?.focus?.(),
          this.quick || (await this.animateClose());
      }),
      (this.onClosed = () => {
        this.quick &&
          (this.dispatchEvent(new Event('closing')),
          this.dispatchEvent(new Event('closed')));
      }),
      (this.onWindowPointerdown = (t) => {
        this.pointerPath = t.composedPath();
      }),
      (this.onDocumentClick = (t) => {
        if (!this.open) return;
        const e = t.composedPath();
        this.stayOpenOnOutsideClick ||
          e.includes(this) ||
          e.includes(this.anchorElement) ||
          (this.open = !1);
      }),
      (this.internals.role = 'menu'),
      this.addEventListener('keydown', this.handleKeydown),
      this.addEventListener('keydown', this.captureKeydown, {capture: !0}),
      this.addEventListener('focusout', this.handleFocusout);
  }
  get items() {
    return this.listController.items;
  }
  willUpdate(t) {
    t.has('open') &&
      (this.open
        ? this.removeAttribute('aria-hidden')
        : this.setAttribute('aria-hidden', 'true'));
  }
  update(t) {
    t.has('open') &&
      (this.open
        ? this.setUpGlobalEventListeners()
        : this.cleanUpGlobalEventListeners()),
      t.has('positioning') &&
        'popover' === this.positioning &&
        !this.showPopover &&
        (this.positioning = 'fixed'),
      super.update(t);
  }
  connectedCallback() {
    super.connectedCallback(), this.open && this.setUpGlobalEventListeners();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.cleanUpGlobalEventListeners();
  }
  render() {
    return this.renderSurface();
  }
  renderSurface() {
    return W`
      <div
        class="menu ${_t(this.getSurfaceClasses())}"
        style=${Ft(this.menuPositionController.surfaceStyles)}
        popover=${'popover' === this.positioning ? 'manual' : D}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding"> ${this.renderMenuItems()} </div>
        </div>
      </div>
    `;
  }
  renderMenuItems() {
    return W`<slot
      @close-menu=${this.onCloseMenu}
      @deactivate-items=${this.onDeactivateItems}
      @request-activation=${this.onRequestActivation}
      @deactivate-typeahead=${this.handleDeactivateTypeahead}
      @activate-typeahead=${this.handleActivateTypeahead}
      @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
      @close-on-focusout=${this.handleCloseOnFocusout}
      @slotchange=${this.listController.onSlotchange}></slot>`;
  }
  renderElevation() {
    return W`<md-elevation part="elevation"></md-elevation>`;
  }
  getSurfaceClasses() {
    return {
      open: this.open,
      fixed: 'fixed' === this.positioning,
      'has-overflow': this.hasOverflow,
    };
  }
  captureKeydown(t) {
    t.target === this &&
      !t.defaultPrevented &&
      Je(t.code) &&
      (t.preventDefault(), this.close()),
      this.typeaheadController.onKeydown(t);
  }
  async animateOpen() {
    const t = this.surfaceEl,
      e = this.slotEl;
    if (!t || !e) return !0;
    const i = this.openDirection;
    this.dispatchEvent(new Event('opening')),
      t.classList.toggle('animating', !0);
    const o = this.openCloseAnimationSignal.start(),
      r = t.offsetHeight,
      s = 'UP' === i,
      n = this.items,
      l = 250 / n.length,
      a = t.animate([{height: '0px'}, {height: `${r}px`}], {
        duration: 500,
        easing: $t,
      }),
      d = e.animate(
        [{transform: s ? `translateY(-${r}px)` : ''}, {transform: ''}],
        {duration: 500, easing: $t}
      ),
      c = t.animate([{opacity: 0}, {opacity: 1}], 50),
      h = [];
    for (let t = 0; t < n.length; t++) {
      const e = n[s ? n.length - 1 - t : t],
        i = e.animate([{opacity: 0}, {opacity: 1}], {
          duration: 250,
          delay: l * t,
        });
      e.classList.toggle('md-menu-hidden', !0),
        i.addEventListener('finish', () => {
          e.classList.toggle('md-menu-hidden', !1);
        }),
        h.push([e, i]);
    }
    let u = (t) => {};
    const p = new Promise((t) => {
      u = t;
    });
    return (
      o.addEventListener('abort', () => {
        a.cancel(),
          d.cancel(),
          c.cancel(),
          h.forEach(([t, e]) => {
            t.classList.toggle('md-menu-hidden', !1), e.cancel();
          }),
          u(!0);
      }),
      a.addEventListener('finish', () => {
        t.classList.toggle('animating', !1),
          this.openCloseAnimationSignal.finish(),
          u(!1);
      }),
      await p
    );
  }
  animateClose() {
    let t, e;
    const i = new Promise((i, o) => {
        (t = i), (e = o);
      }),
      o = this.surfaceEl,
      r = this.slotEl;
    if (!o || !r) return e(), i;
    const s = 'UP' === this.openDirection;
    this.dispatchEvent(new Event('closing')),
      o.classList.toggle('animating', !0);
    const n = this.openCloseAnimationSignal.start(),
      l = o.offsetHeight,
      a = this.items,
      d = 150,
      c = 50 / a.length,
      h = o.animate([{height: `${l}px`}, {height: 0.35 * l + 'px'}], {
        duration: d,
        easing: St,
      }),
      u = r.animate(
        [{transform: ''}, {transform: s ? `translateY(-${0.65 * l}px)` : ''}],
        {duration: d, easing: St}
      ),
      p = o.animate([{opacity: 1}, {opacity: 0}], {duration: 50, delay: 100}),
      f = [];
    for (let t = 0; t < a.length; t++) {
      const e = a[s ? t : a.length - 1 - t],
        i = e.animate([{opacity: 1}, {opacity: 0}], {
          duration: 50,
          delay: 50 + c * t,
        });
      i.addEventListener('finish', () => {
        e.classList.toggle('md-menu-hidden', !0);
      }),
        f.push([e, i]);
    }
    return (
      n.addEventListener('abort', () => {
        h.cancel(),
          u.cancel(),
          p.cancel(),
          f.forEach(([t, e]) => {
            e.cancel(), t.classList.toggle('md-menu-hidden', !1);
          }),
          e();
      }),
      h.addEventListener('finish', () => {
        o.classList.toggle('animating', !1),
          f.forEach(([t]) => {
            t.classList.toggle('md-menu-hidden', !1);
          }),
          this.openCloseAnimationSignal.finish(),
          this.dispatchEvent(new Event('closed')),
          t(!0);
      }),
      i
    );
  }
  handleKeydown(t) {
    (this.pointerPath = []), this.listController.handleKeydown(t);
  }
  setUpGlobalEventListeners() {
    document.addEventListener('click', this.onDocumentClick, {capture: !0}),
      window.addEventListener('pointerdown', this.onWindowPointerdown),
      document.addEventListener('resize', this.onWindowResize, {passive: !0}),
      window.addEventListener('resize', this.onWindowResize, {passive: !0});
  }
  cleanUpGlobalEventListeners() {
    document.removeEventListener('click', this.onDocumentClick, {capture: !0}),
      window.removeEventListener('pointerdown', this.onWindowPointerdown),
      document.removeEventListener('resize', this.onWindowResize),
      window.removeEventListener('resize', this.onWindowResize);
  }
  onCloseMenu() {
    this.close();
  }
  onDeactivateItems(t) {
    t.stopPropagation(), this.listController.onDeactivateItems();
  }
  onRequestActivation(t) {
    t.stopPropagation(), this.listController.onRequestActivation(t);
  }
  handleDeactivateTypeahead(t) {
    t.stopPropagation(), (this.typeaheadActive = !1);
  }
  handleActivateTypeahead(t) {
    t.stopPropagation(), (this.typeaheadActive = !0);
  }
  handleStayOpenOnFocusout(t) {
    t.stopPropagation(), (this.stayOpenOnFocusout = !0);
  }
  handleCloseOnFocusout(t) {
    t.stopPropagation(), (this.stayOpenOnFocusout = !1);
  }
  close() {
    this.open = !1;
    this.slotItems.forEach((t) => {
      t.close?.();
    });
  }
  show() {
    this.open = !0;
  }
  activateNextItem() {
    return this.listController.activateNextItem() ?? null;
  }
  activatePreviousItem() {
    return this.listController.activatePreviousItem() ?? null;
  }
  reposition() {
    this.open && this.menuPositionController.position();
  }
}
vt([ut('.menu')], hi.prototype, 'surfaceEl', void 0),
  vt([ut('slot')], hi.prototype, 'slotEl', void 0),
  vt([dt()], hi.prototype, 'anchor', void 0),
  vt([dt()], hi.prototype, 'positioning', void 0),
  vt([dt({type: Boolean})], hi.prototype, 'quick', void 0),
  vt(
    [dt({type: Boolean, attribute: 'has-overflow'})],
    hi.prototype,
    'hasOverflow',
    void 0
  ),
  vt([dt({type: Boolean, reflect: !0})], hi.prototype, 'open', void 0),
  vt(
    [dt({type: Number, attribute: 'x-offset'})],
    hi.prototype,
    'xOffset',
    void 0
  ),
  vt(
    [dt({type: Number, attribute: 'y-offset'})],
    hi.prototype,
    'yOffset',
    void 0
  ),
  vt(
    [dt({type: Number, attribute: 'typeahead-delay'})],
    hi.prototype,
    'typeaheadDelay',
    void 0
  ),
  vt([dt({attribute: 'anchor-corner'})], hi.prototype, 'anchorCorner', void 0),
  vt([dt({attribute: 'menu-corner'})], hi.prototype, 'menuCorner', void 0),
  vt(
    [dt({type: Boolean, attribute: 'stay-open-on-outside-click'})],
    hi.prototype,
    'stayOpenOnOutsideClick',
    void 0
  ),
  vt(
    [dt({type: Boolean, attribute: 'stay-open-on-focusout'})],
    hi.prototype,
    'stayOpenOnFocusout',
    void 0
  ),
  vt(
    [dt({type: Boolean, attribute: 'skip-restore-focus'})],
    hi.prototype,
    'skipRestoreFocus',
    void 0
  ),
  vt([dt({attribute: 'default-focus'})], hi.prototype, 'defaultFocus', void 0),
  vt([ft({flatten: !0})], hi.prototype, 'slotItems', void 0),
  vt([ct()], hi.prototype, 'typeaheadActive', void 0);
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ui = s`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, 4px)}.menu{border-radius:var(--md-menu-container-shape, 4px);display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);color:inherit;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit}.item-padding{padding-block:8px}.has-overflow:not([popover]) .items{overflow:visible}.has-overflow.animating .items,.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}/*# sourceMappingURL=menu-styles.css.map */
`;
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let pi = class extends hi {};
(pi.styles = [ui]), (pi = vt([nt('md-menu')], pi));
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class fi extends he {
  computeValidity(t) {
    return (
      this.selectControl ||
        (this.selectControl = document.createElement('select')),
      ot(W`<option value=${t.value}></option>`, this.selectControl),
      (this.selectControl.value = t.value),
      (this.selectControl.required = t.required),
      {
        validity: this.selectControl.validity,
        validationMessage: this.selectControl.validationMessage,
      }
    );
  }
  equals(t, e) {
    return t.value === e.value && t.required === e.required;
  }
  copy({value: t, required: e}) {
    return {value: t, required: e};
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var vi;
const mi = Symbol('value'),
  gi = de(te(oe(Gt(rt))));
class bi extends gi {
  get value() {
    return this[mi];
  }
  set value(t) {
    (this.lastUserSetValue = t), this.select(t);
  }
  get options() {
    return this.menu?.items ?? [];
  }
  get selectedIndex() {
    const [t, e] = (this.getSelectedOptions() ?? [])[0] ?? [];
    return e ?? -1;
  }
  set selectedIndex(t) {
    (this.lastUserSetSelectedIndex = t), this.selectIndex(t);
  }
  get selectedOptions() {
    return (this.getSelectedOptions() ?? []).map(([t]) => t);
  }
  get hasError() {
    return this.error || this.nativeError;
  }
  constructor() {
    super(),
      (this.quick = !1),
      (this.required = !1),
      (this.errorText = ''),
      (this.label = ''),
      (this.supportingText = ''),
      (this.error = !1),
      (this.menuPositioning = 'popover'),
      (this.clampMenuWidth = !1),
      (this.typeaheadDelay = 200),
      (this.hasLeadingIcon = !1),
      (this.displayText = ''),
      (this.menuAlign = 'start'),
      (this[vi] = ''),
      (this.lastUserSetValue = null),
      (this.lastUserSetSelectedIndex = null),
      (this.lastSelectedOption = null),
      (this.lastSelectedOptionRecords = []),
      (this.nativeError = !1),
      (this.nativeErrorText = ''),
      (this.focused = !1),
      (this.open = !1),
      (this.defaultFocus = Ze),
      (this.prevOpen = this.open),
      (this.selectWidth = 0),
      this.addEventListener('focus', this.handleFocus.bind(this)),
      this.addEventListener('blur', this.handleBlur.bind(this));
  }
  select(t) {
    const e = this.options.find((e) => e.value === t);
    e && this.selectItem(e);
  }
  selectIndex(t) {
    const e = this.options[t];
    e && this.selectItem(e);
  }
  reset() {
    for (const t of this.options) t.selected = t.hasAttribute('selected');
    this.updateValueAndDisplayText(),
      (this.nativeError = !1),
      (this.nativeErrorText = '');
  }
  [((vi = mi), re)](t) {
    t?.preventDefault();
    const e = this.getErrorText();
    (this.nativeError = !!t),
      (this.nativeErrorText = this.validationMessage),
      e === this.getErrorText() && this.field?.reannounceError();
  }
  update(t) {
    if (
      (this.hasUpdated || this.initUserSelection(),
      this.prevOpen !== this.open && this.open)
    ) {
      const t = this.getBoundingClientRect();
      this.selectWidth = t.width;
    }
    (this.prevOpen = this.open), super.update(t);
  }
  render() {
    return W`
      <span
        class="select ${_t(this.getRenderClasses())}"
        @focusout=${this.handleFocusout}>
        ${this.renderField()} ${this.renderMenu()}
      </span>
    `;
  }
  async firstUpdated(t) {
    await this.menu?.updateComplete,
      this.lastSelectedOptionRecords.length || this.initUserSelection(),
      this.lastSelectedOptionRecords.length ||
        this.options.length ||
        setTimeout(() => {
          this.updateValueAndDisplayText();
        }),
      super.firstUpdated(t);
  }
  getRenderClasses() {
    return {disabled: this.disabled, error: this.error, open: this.open};
  }
  renderField() {
    return Ot`
      <${this.fieldTag}
          aria-haspopup="listbox"
          role="combobox"
          part="field"
          id="field"
          tabindex=${this.disabled ? '-1' : '0'}
          aria-label=${this.ariaLabel || D}
          aria-describedby="description"
          aria-expanded=${this.open ? 'true' : 'false'}
          aria-controls="listbox"
          class="field"
          label=${this.label}
          .focused=${this.focused || this.open}
          .populated=${!!this.displayText}
          .disabled=${this.disabled}
          .required=${this.required}
          .error=${this.hasError}
          ?has-start=${this.hasLeadingIcon}
          has-end
          supporting-text=${this.supportingText}
          error-text=${this.getErrorText()}
          @keydown=${this.handleKeydown}
          @click=${this.handleClick}>
         ${this.renderFieldContent()}
         <div id="description" slot="aria-describedby"></div>
      </${this.fieldTag}>`;
  }
  renderFieldContent() {
    return [
      this.renderLeadingIcon(),
      this.renderLabel(),
      this.renderTrailingIcon(),
    ];
  }
  renderLeadingIcon() {
    return W`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `;
  }
  renderTrailingIcon() {
    return W`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}>
          <svg height="5" viewBox="7 10 10 5" focusable="false">
            <polygon
              class="down"
              stroke="none"
              fill-rule="evenodd"
              points="7 10 12 15 17 10"></polygon>
            <polygon
              class="up"
              stroke="none"
              fill-rule="evenodd"
              points="7 15 12 10 17 15"></polygon>
          </svg>
        </slot>
      </span>
    `;
  }
  renderLabel() {
    return W`<div id="label">${this.displayText || W`&nbsp;`}</div>`;
  }
  renderMenu() {
    const t = this.label || this.ariaLabel;
    return W`<div class="menu-wrapper">
      <md-menu
        id="listbox"
        .defaultFocus=${this.defaultFocus}
        role="listbox"
        tabindex="-1"
        aria-label=${t || D}
        stay-open-on-focusout
        part="menu"
        exportparts="focus-ring: menu-focus-ring"
        anchor="field"
        style=${Ft({
          '--__menu-min-width': `${this.selectWidth}px`,
          '--__menu-max-width': this.clampMenuWidth
            ? `${this.selectWidth}px`
            : void 0,
        })}
        .open=${this.open}
        .quick=${this.quick}
        .positioning=${this.menuPositioning}
        .typeaheadDelay=${this.typeaheadDelay}
        .anchorCorner=${'start' === this.menuAlign ? 'end-start' : 'end-end'}
        .menuCorner=${'start' === this.menuAlign ? 'start-start' : 'start-end'}
        @opening=${this.handleOpening}
        @opened=${this.redispatchEvent}
        @closing=${this.redispatchEvent}
        @closed=${this.handleClosed}
        @close-menu=${this.handleCloseMenu}
        @request-selection=${this.handleRequestSelection}
        @request-deselection=${this.handleRequestDeselection}>
        ${this.renderMenuContent()}
      </md-menu>
    </div>`;
  }
  renderMenuContent() {
    return W`<slot></slot>`;
  }
  handleKeydown(t) {
    if (this.open || this.disabled || !this.menu) return;
    const e = this.menu.typeaheadController,
      i =
        'Space' === t.code ||
        'ArrowDown' === t.code ||
        'ArrowUp' === t.code ||
        'End' === t.code ||
        'Home' === t.code ||
        'Enter' === t.code;
    if (!e.isTypingAhead && i) {
      switch ((t.preventDefault(), (this.open = !0), t.code)) {
        case 'Space':
        case 'ArrowDown':
        case 'Enter':
          this.defaultFocus = Ze;
          break;
        case 'End':
          this.defaultFocus = ei;
          break;
        case 'ArrowUp':
        case 'Home':
          this.defaultFocus = ti;
      }
      return;
    }
    if (1 === t.key.length) {
      e.onKeydown(t), t.preventDefault();
      const {lastActiveRecord: i} = e;
      if (!i) return;
      this.labelEl?.setAttribute?.('aria-live', 'polite');
      this.selectItem(i[ni]) && this.dispatchInteractionEvents();
    }
  }
  handleClick() {
    this.open = !this.open;
  }
  handleFocus() {
    this.focused = !0;
  }
  handleBlur() {
    this.focused = !1;
  }
  handleFocusout(t) {
    (t.relatedTarget && Xe(t.relatedTarget, this)) || (this.open = !1);
  }
  getSelectedOptions() {
    if (!this.menu) return (this.lastSelectedOptionRecords = []), null;
    const t = this.menu.items;
    return (
      (this.lastSelectedOptionRecords = (function (t) {
        const e = [];
        for (let i = 0; i < t.length; i++) {
          const o = t[i];
          o.selected && e.push([o, i]);
        }
        return e;
      })(t)),
      this.lastSelectedOptionRecords
    );
  }
  async getUpdateComplete() {
    return await this.menu?.updateComplete, super.getUpdateComplete();
  }
  updateValueAndDisplayText() {
    const t = this.getSelectedOptions() ?? [];
    let e = !1;
    if (t.length) {
      const [i] = t[0];
      (e = this.lastSelectedOption !== i),
        (this.lastSelectedOption = i),
        (this[mi] = i.value),
        (this.displayText = i.displayText);
    } else
      (e = null !== this.lastSelectedOption),
        (this.lastSelectedOption = null),
        (this[mi] = ''),
        (this.displayText = '');
    return e;
  }
  async handleOpening(t) {
    if (
      (this.labelEl?.removeAttribute?.('aria-live'),
      this.redispatchEvent(t),
      this.defaultFocus !== Ze)
    )
      return;
    const e = this.menu.items,
      i = Ie(e)?.item;
    let [o] = this.lastSelectedOptionRecords[0] ?? [null];
    i && i !== o && (i.tabIndex = -1),
      (o = o ?? e[0]),
      o && ((o.tabIndex = 0), o.focus());
  }
  redispatchEvent(t) {
    Vt(this, t);
  }
  handleClosed(t) {
    (this.open = !1), this.redispatchEvent(t);
  }
  handleCloseMenu(t) {
    const e = t.detail.reason,
      i = t.detail.itemPath[0];
    this.open = !1;
    let o = !1;
    var r;
    'click-selection' === e.kind ||
    ('keydown' === e.kind &&
      ((r = e.key), Object.values(He).some((t) => t === r)))
      ? (o = this.selectItem(i))
      : ((i.tabIndex = -1), i.blur()),
      o && this.dispatchInteractionEvents();
  }
  selectItem(t) {
    return (
      (this.getSelectedOptions() ?? []).forEach(([e]) => {
        t !== e && (e.selected = !1);
      }),
      (t.selected = !0),
      this.updateValueAndDisplayText()
    );
  }
  handleRequestSelection(t) {
    const e = t.target;
    this.lastSelectedOptionRecords.some(([t]) => t === e) || this.selectItem(e);
  }
  handleRequestDeselection(t) {
    const e = t.target;
    this.lastSelectedOptionRecords.some(([t]) => t === e) &&
      this.updateValueAndDisplayText();
  }
  initUserSelection() {
    this.lastUserSetValue && !this.lastSelectedOptionRecords.length
      ? this.select(this.lastUserSetValue)
      : null === this.lastUserSetSelectedIndex ||
        this.lastSelectedOptionRecords.length
      ? this.updateValueAndDisplayText()
      : this.selectIndex(this.lastUserSetSelectedIndex);
  }
  handleIconChange() {
    this.hasLeadingIcon = this.leadingIcons.length > 0;
  }
  dispatchInteractionEvents() {
    this.dispatchEvent(new Event('input', {bubbles: !0, composed: !0})),
      this.dispatchEvent(new Event('change', {bubbles: !0}));
  }
  getErrorText() {
    return this.error ? this.errorText : this.nativeErrorText;
  }
  [ee]() {
    return this.value;
  }
  formResetCallback() {
    this.reset();
  }
  formStateRestoreCallback(t) {
    this.value = t;
  }
  [Yt]() {
    return new fi(() => this);
  }
  [Jt]() {
    return this.field;
  }
}
Dt(bi),
  (bi.shadowRootOptions = {...rt.shadowRootOptions, delegatesFocus: !0}),
  vt([dt({type: Boolean})], bi.prototype, 'quick', void 0),
  vt([dt({type: Boolean})], bi.prototype, 'required', void 0),
  vt(
    [dt({type: String, attribute: 'error-text'})],
    bi.prototype,
    'errorText',
    void 0
  ),
  vt([dt()], bi.prototype, 'label', void 0),
  vt(
    [dt({type: String, attribute: 'supporting-text'})],
    bi.prototype,
    'supportingText',
    void 0
  ),
  vt([dt({type: Boolean, reflect: !0})], bi.prototype, 'error', void 0),
  vt(
    [dt({attribute: 'menu-positioning'})],
    bi.prototype,
    'menuPositioning',
    void 0
  ),
  vt(
    [dt({type: Boolean, attribute: 'clamp-menu-width'})],
    bi.prototype,
    'clampMenuWidth',
    void 0
  ),
  vt(
    [dt({type: Number, attribute: 'typeahead-delay'})],
    bi.prototype,
    'typeaheadDelay',
    void 0
  ),
  vt(
    [dt({type: Boolean, attribute: 'has-leading-icon'})],
    bi.prototype,
    'hasLeadingIcon',
    void 0
  ),
  vt([dt({attribute: 'display-text'})], bi.prototype, 'displayText', void 0),
  vt([dt({attribute: 'menu-align'})], bi.prototype, 'menuAlign', void 0),
  vt([dt()], bi.prototype, 'value', null),
  vt(
    [dt({type: Number, attribute: 'selected-index'})],
    bi.prototype,
    'selectedIndex',
    null
  ),
  vt([ct()], bi.prototype, 'nativeError', void 0),
  vt([ct()], bi.prototype, 'nativeErrorText', void 0),
  vt([ct()], bi.prototype, 'focused', void 0),
  vt([ct()], bi.prototype, 'open', void 0),
  vt([ct()], bi.prototype, 'defaultFocus', void 0),
  vt([ut('.field')], bi.prototype, 'field', void 0),
  vt([ut('md-menu')], bi.prototype, 'menu', void 0),
  vt([ut('#label')], bi.prototype, 'labelEl', void 0),
  vt(
    [ft({slot: 'leading-icon', flatten: !0})],
    bi.prototype,
    'leadingIcons',
    void 0
  );
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class xi extends bi {
  constructor() {
    super(...arguments), (this.fieldTag = It`md-outlined-field`);
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const yi = s`:host{--_text-field-container-shape: var(--md-outlined-select-text-field-container-shape, 4px);--_text-field-disabled-input-text-color: var(--md-outlined-select-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-input-text-opacity: var(--md-outlined-select-text-field-disabled-input-text-opacity, 0.38);--_text-field-disabled-label-text-color: var(--md-outlined-select-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-label-text-opacity: var(--md-outlined-select-text-field-disabled-label-text-opacity, 0.38);--_text-field-disabled-leading-icon-color: var(--md-outlined-select-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-leading-icon-opacity: var(--md-outlined-select-text-field-disabled-leading-icon-opacity, 0.38);--_text-field-disabled-outline-color: var(--md-outlined-select-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-outline-opacity: var(--md-outlined-select-text-field-disabled-outline-opacity, 0.12);--_text-field-disabled-outline-width: var(--md-outlined-select-text-field-disabled-outline-width, 1px);--_text-field-disabled-supporting-text-color: var(--md-outlined-select-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-supporting-text-opacity: var(--md-outlined-select-text-field-disabled-supporting-text-opacity, 0.38);--_text-field-disabled-trailing-icon-color: var(--md-outlined-select-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-trailing-icon-opacity: var(--md-outlined-select-text-field-disabled-trailing-icon-opacity, 0.38);--_text-field-error-focus-input-text-color: var(--md-outlined-select-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-focus-label-text-color: var(--md-outlined-select-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-leading-icon-color: var(--md-outlined-select-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-focus-outline-color: var(--md-outlined-select-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-supporting-text-color: var(--md-outlined-select-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-trailing-icon-color: var(--md-outlined-select-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-input-text-color: var(--md-outlined-select-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-label-text-color: var(--md-outlined-select-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-leading-icon-color: var(--md-outlined-select-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-hover-outline-color: var(--md-outlined-select-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-supporting-text-color: var(--md-outlined-select-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-trailing-icon-color: var(--md-outlined-select-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-input-text-color: var(--md-outlined-select-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-label-text-color: var(--md-outlined-select-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-leading-icon-color: var(--md-outlined-select-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-outline-color: var(--md-outlined-select-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-supporting-text-color: var(--md-outlined-select-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-trailing-icon-color: var(--md-outlined-select-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-focus-input-text-color: var(--md-outlined-select-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-focus-label-text-color: var(--md-outlined-select-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-leading-icon-color: var(--md-outlined-select-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-outline-color: var(--md-outlined-select-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-outline-width: var(--md-outlined-select-text-field-focus-outline-width, 3px);--_text-field-focus-supporting-text-color: var(--md-outlined-select-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-trailing-icon-color: var(--md-outlined-select-text-field-focus-trailing-icon-color, var(--md-sys-color-primary, #6750a4));--_text-field-hover-input-text-color: var(--md-outlined-select-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-label-text-color: var(--md-outlined-select-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-leading-icon-color: var(--md-outlined-select-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-outline-color: var(--md-outlined-select-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-outline-width: var(--md-outlined-select-text-field-hover-outline-width, 1px);--_text-field-hover-supporting-text-color: var(--md-outlined-select-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-trailing-icon-color: var(--md-outlined-select-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-input-text-color: var(--md-outlined-select-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-input-text-font: var(--md-outlined-select-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-input-text-line-height: var(--md-outlined-select-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-input-text-size: var(--md-outlined-select-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-input-text-weight: var(--md-outlined-select-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-label-text-color: var(--md-outlined-select-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-label-text-font: var(--md-outlined-select-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-label-text-line-height: var(--md-outlined-select-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-label-text-populated-line-height: var(--md-outlined-select-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-label-text-populated-size: var(--md-outlined-select-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-label-text-size: var(--md-outlined-select-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-label-text-weight: var(--md-outlined-select-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-leading-icon-color: var(--md-outlined-select-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-leading-icon-size: var(--md-outlined-select-text-field-leading-icon-size, 24px);--_text-field-outline-color: var(--md-outlined-select-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_text-field-outline-width: var(--md-outlined-select-text-field-outline-width, 1px);--_text-field-supporting-text-color: var(--md-outlined-select-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-supporting-text-font: var(--md-outlined-select-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-supporting-text-line-height: var(--md-outlined-select-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-supporting-text-size: var(--md-outlined-select-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-supporting-text-weight: var(--md-outlined-select-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-trailing-icon-color: var(--md-outlined-select-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-trailing-icon-size: var(--md-outlined-select-text-field-trailing-icon-size, 24px);--_text-field-container-shape-start-start: var( --md-outlined-select-text-field-container-shape-start-start, var(--_text-field-container-shape) );--_text-field-container-shape-start-end: var( --md-outlined-select-text-field-container-shape-start-end, var(--_text-field-container-shape) );--_text-field-container-shape-end-end: var( --md-outlined-select-text-field-container-shape-end-end, var(--_text-field-container-shape) );--_text-field-container-shape-end-start: var( --md-outlined-select-text-field-container-shape-end-start, var(--_text-field-container-shape) );--md-outlined-field-container-shape-end-end: var(--_text-field-container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_text-field-container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_text-field-container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_text-field-container-shape-start-start);--md-outlined-field-content-color: var(--_text-field-input-text-color);--md-outlined-field-content-font: var(--_text-field-input-text-font);--md-outlined-field-content-line-height: var(--_text-field-input-text-line-height);--md-outlined-field-content-size: var(--_text-field-input-text-size);--md-outlined-field-content-weight: var(--_text-field-input-text-weight);--md-outlined-field-disabled-content-color: var(--_text-field-disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_text-field-disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_text-field-disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_text-field-disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_text-field-disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_text-field-disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_text-field-disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_text-field-disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_text-field-disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_text-field-disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_text-field-disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_text-field-disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_text-field-disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_text-field-error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_text-field-error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_text-field-error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_text-field-error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_text-field-error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_text-field-error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_text-field-error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_text-field-error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_text-field-error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_text-field-error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_text-field-error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_text-field-error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_text-field-error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_text-field-error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_text-field-error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_text-field-error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_text-field-error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_text-field-error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_text-field-focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_text-field-focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_text-field-focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_text-field-focus-outline-color);--md-outlined-field-focus-outline-width: var(--_text-field-focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_text-field-focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_text-field-focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_text-field-hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_text-field-hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_text-field-hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_text-field-hover-outline-color);--md-outlined-field-hover-outline-width: var(--_text-field-hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_text-field-hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_text-field-hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_text-field-label-text-color);--md-outlined-field-label-text-font: var(--_text-field-label-text-font);--md-outlined-field-label-text-line-height: var(--_text-field-label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_text-field-label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_text-field-label-text-populated-size);--md-outlined-field-label-text-size: var(--_text-field-label-text-size);--md-outlined-field-label-text-weight: var(--_text-field-label-text-weight);--md-outlined-field-leading-content-color: var(--_text-field-leading-icon-color);--md-outlined-field-outline-color: var(--_text-field-outline-color);--md-outlined-field-outline-width: var(--_text-field-outline-width);--md-outlined-field-supporting-text-color: var(--_text-field-supporting-text-color);--md-outlined-field-supporting-text-font: var(--_text-field-supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_text-field-supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_text-field-supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_text-field-supporting-text-weight);--md-outlined-field-trailing-content-color: var(--_text-field-trailing-icon-color)}[has-start] .icon.leading{font-size:var(--_text-field-leading-icon-size);height:var(--_text-field-leading-icon-size);width:var(--_text-field-leading-icon-size)}.icon.trailing{font-size:var(--_text-field-trailing-icon-size);height:var(--_text-field-trailing-icon-size);width:var(--_text-field-trailing-icon-size)}/*# sourceMappingURL=outlined-select-styles.css.map */
`,
  /**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */ _i = s`:host{color:unset;min-width:210px;display:flex}.field{cursor:default;outline:none}.select{position:relative;flex-direction:column}.icon.trailing svg,.icon ::slotted(*){fill:currentColor}.icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}.icon slot{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.icon.trailing :is(.up,.down){opacity:0;transition:opacity 75ms linear 75ms}.select:not(.open) .down,.select.open .up{opacity:1}.field,.select,md-menu{min-width:inherit;width:inherit;max-width:inherit;display:flex}md-menu{min-width:var(--__menu-min-width);max-width:var(--__menu-max-width, inherit)}.menu-wrapper{width:0px;height:0px;max-width:inherit}md-menu ::slotted(:not[disabled]){cursor:pointer}.field,.select{width:100%}:host{display:inline-flex}:host([disabled]){pointer-events:none}/*# sourceMappingURL=shared-styles.css.map */
`;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let wi = class extends xi {};
(wi.styles = [_i, yi]), (wi = vt([nt('md-outlined-select')], wi));
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const $i = s`:host{display:flex;--md-ripple-hover-color: var(--md-menu-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-menu-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-menu-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-menu-item-pressed-state-layer-opacity, 0.12)}:host([disabled]){opacity:var(--md-menu-item-disabled-opacity, 0.3);pointer-events:none}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled){cursor:pointer}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;color:var(--md-menu-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-menu-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-menu-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-menu-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-menu-item-one-line-container-height, 56px);padding-top:var(--md-menu-item-top-space, 12px);padding-bottom:var(--md-menu-item-bottom-space, 12px);padding-inline-start:var(--md-menu-item-leading-space, 16px);padding-inline-end:var(--md-menu-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-menu-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-menu-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-menu-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-menu-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-menu-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-menu-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-menu-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-menu-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-menu-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}.list-item{background-color:var(--md-menu-item-container-color, transparent)}.list-item.selected{background-color:var(--md-menu-item-selected-container-color, var(--md-sys-color-secondary-container, #e8def8))}.selected:not(.disabled) ::slotted(*){color:var(--md-menu-item-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b))}@media(forced-colors: active){:host([disabled]),:host([disabled]) slot{color:GrayText;opacity:1}.list-item{position:relative}.list-item.selected::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}/*# sourceMappingURL=menu-item-styles.css.map */
`;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Si extends rt {
  constructor() {
    super(...arguments), (this.multiline = !1);
  }
  render() {
    return W`
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          class="default-slot"
          @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          name="supporting-text"
          @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `;
  }
  handleTextSlotChange() {
    let t = !1,
      e = 0;
    for (const i of this.textSlots)
      if ((ki(i) && (e += 1), e > 1)) {
        t = !0;
        break;
      }
    this.multiline = t;
  }
}
function ki(t) {
  for (const e of t.assignedNodes({flatten: !0})) {
    const t = e.nodeType === Node.ELEMENT_NODE,
      i = e.nodeType === Node.TEXT_NODE && e.textContent?.match(/\S/);
    if (t || i) return !0;
  }
  return !1;
}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ vt([dt({type: Boolean, reflect: !0})], Si.prototype, 'multiline', void 0),
  vt(
    [
      (function (t) {
        return (e, i) =>
          ht(0, 0, {
            get() {
              return (
                this.renderRoot ?? (pt ??= document.createDocumentFragment())
              ).querySelectorAll(t);
            },
          });
      })('.text slot'),
    ],
    Si.prototype,
    'textSlots',
    void 0
  );
const Ci = s`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}/*# sourceMappingURL=item-styles.css.map */
`;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let zi = class extends Si {};
(zi.styles = [Ci]), (zi = vt([nt('md-item')], zi));
var Ei;
!(function (t) {
  (t[(t.INACTIVE = 0)] = 'INACTIVE'),
    (t[(t.TOUCH_DELAY = 1)] = 'TOUCH_DELAY'),
    (t[(t.HOLDING = 2)] = 'HOLDING'),
    (t[(t.WAITING_FOR_CLICK = 3)] = 'WAITING_FOR_CLICK');
})(Ei || (Ei = {}));
const Ti = [
    'click',
    'contextmenu',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerup',
  ],
  Ri = window.matchMedia('(forced-colors: active)');
class Ai extends rt {
  constructor() {
    super(...arguments),
      (this.disabled = !1),
      (this.hovered = !1),
      (this.pressed = !1),
      (this.rippleSize = ''),
      (this.rippleScale = ''),
      (this.initialSize = 0),
      (this.state = Ei.INACTIVE),
      (this.checkBoundsAfterContextMenu = !1),
      (this.attachableController = new Se(
        this,
        this.onControlChange.bind(this)
      ));
  }
  get htmlFor() {
    return this.attachableController.htmlFor;
  }
  set htmlFor(t) {
    this.attachableController.htmlFor = t;
  }
  get control() {
    return this.attachableController.control;
  }
  set control(t) {
    this.attachableController.control = t;
  }
  attach(t) {
    this.attachableController.attach(t);
  }
  detach() {
    this.attachableController.detach();
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute('aria-hidden', 'true');
  }
  render() {
    const t = {hovered: this.hovered, pressed: this.pressed};
    return W`<div class="surface ${_t(t)}"></div>`;
  }
  update(t) {
    t.has('disabled') &&
      this.disabled &&
      ((this.hovered = !1), (this.pressed = !1)),
      super.update(t);
  }
  handlePointerenter(t) {
    this.shouldReactToEvent(t) && (this.hovered = !0);
  }
  handlePointerleave(t) {
    this.shouldReactToEvent(t) &&
      ((this.hovered = !1),
      this.state !== Ei.INACTIVE && this.endPressAnimation());
  }
  handlePointerup(t) {
    if (this.shouldReactToEvent(t)) {
      if (this.state !== Ei.HOLDING)
        return this.state === Ei.TOUCH_DELAY
          ? ((this.state = Ei.WAITING_FOR_CLICK),
            void this.startPressAnimation(this.rippleStartEvent))
          : void 0;
      this.state = Ei.WAITING_FOR_CLICK;
    }
  }
  async handlePointerdown(t) {
    if (this.shouldReactToEvent(t)) {
      if (((this.rippleStartEvent = t), !this.isTouch(t)))
        return (
          (this.state = Ei.WAITING_FOR_CLICK), void this.startPressAnimation(t)
        );
      (this.checkBoundsAfterContextMenu && !this.inBounds(t)) ||
        ((this.checkBoundsAfterContextMenu = !1),
        (this.state = Ei.TOUCH_DELAY),
        await new Promise((t) => {
          setTimeout(t, 150);
        }),
        this.state === Ei.TOUCH_DELAY &&
          ((this.state = Ei.HOLDING), this.startPressAnimation(t)));
    }
  }
  handleClick() {
    this.disabled ||
      (this.state !== Ei.WAITING_FOR_CLICK
        ? this.state === Ei.INACTIVE &&
          (this.startPressAnimation(), this.endPressAnimation())
        : this.endPressAnimation());
  }
  handlePointercancel(t) {
    this.shouldReactToEvent(t) && this.endPressAnimation();
  }
  handleContextmenu() {
    this.disabled ||
      ((this.checkBoundsAfterContextMenu = !0), this.endPressAnimation());
  }
  determineRippleSize() {
    const {height: t, width: e} = this.getBoundingClientRect(),
      i = Math.max(t, e),
      o = Math.max(0.35 * i, 75),
      r = Math.floor(0.2 * i),
      s = Math.sqrt(e ** 2 + t ** 2) + 10;
    (this.initialSize = r),
      (this.rippleScale = '' + (s + o) / r),
      (this.rippleSize = `${r}px`);
  }
  getNormalizedPointerEventCoords(t) {
    const {scrollX: e, scrollY: i} = window,
      {left: o, top: r} = this.getBoundingClientRect(),
      s = e + o,
      n = i + r,
      {pageX: l, pageY: a} = t;
    return {x: l - s, y: a - n};
  }
  getTranslationCoordinates(t) {
    const {height: e, width: i} = this.getBoundingClientRect(),
      o = {x: (i - this.initialSize) / 2, y: (e - this.initialSize) / 2};
    let r;
    return (
      (r =
        t instanceof PointerEvent
          ? this.getNormalizedPointerEventCoords(t)
          : {x: i / 2, y: e / 2}),
      (r = {x: r.x - this.initialSize / 2, y: r.y - this.initialSize / 2}),
      {startPoint: r, endPoint: o}
    );
  }
  startPressAnimation(t) {
    if (!this.mdRoot) return;
    (this.pressed = !0),
      this.growAnimation?.cancel(),
      this.determineRippleSize();
    const {startPoint: e, endPoint: i} = this.getTranslationCoordinates(t),
      o = `${e.x}px, ${e.y}px`,
      r = `${i.x}px, ${i.y}px`;
    this.growAnimation = this.mdRoot.animate(
      {
        top: [0, 0],
        left: [0, 0],
        height: [this.rippleSize, this.rippleSize],
        width: [this.rippleSize, this.rippleSize],
        transform: [
          `translate(${o}) scale(1)`,
          `translate(${r}) scale(${this.rippleScale})`,
        ],
      },
      {pseudoElement: '::after', duration: 450, easing: wt, fill: 'forwards'}
    );
  }
  async endPressAnimation() {
    (this.rippleStartEvent = void 0), (this.state = Ei.INACTIVE);
    const t = this.growAnimation;
    let e = 1 / 0;
    'number' == typeof t?.currentTime
      ? (e = t.currentTime)
      : t?.currentTime && (e = t.currentTime.to('ms').value),
      e >= 225
        ? (this.pressed = !1)
        : (await new Promise((t) => {
            setTimeout(t, 225 - e);
          }),
          this.growAnimation === t && (this.pressed = !1));
  }
  shouldReactToEvent(t) {
    if (this.disabled || !t.isPrimary) return !1;
    if (
      this.rippleStartEvent &&
      this.rippleStartEvent.pointerId !== t.pointerId
    )
      return !1;
    if ('pointerenter' === t.type || 'pointerleave' === t.type)
      return !this.isTouch(t);
    const e = 1 === t.buttons;
    return this.isTouch(t) || e;
  }
  inBounds({x: t, y: e}) {
    const {top: i, left: o, bottom: r, right: s} = this.getBoundingClientRect();
    return t >= o && t <= s && e >= i && e <= r;
  }
  isTouch({pointerType: t}) {
    return 'touch' === t;
  }
  async handleEvent(t) {
    if (!Ri?.matches)
      switch (t.type) {
        case 'click':
          this.handleClick();
          break;
        case 'contextmenu':
          this.handleContextmenu();
          break;
        case 'pointercancel':
          this.handlePointercancel(t);
          break;
        case 'pointerdown':
          await this.handlePointerdown(t);
          break;
        case 'pointerenter':
          this.handlePointerenter(t);
          break;
        case 'pointerleave':
          this.handlePointerleave(t);
          break;
        case 'pointerup':
          this.handlePointerup(t);
      }
  }
  onControlChange(t, e) {
    for (const i of Ti)
      t?.removeEventListener(i, this), e?.addEventListener(i, this);
  }
}
vt([dt({type: Boolean, reflect: !0})], Ai.prototype, 'disabled', void 0),
  vt([ct()], Ai.prototype, 'hovered', void 0),
  vt([ct()], Ai.prototype, 'pressed', void 0),
  vt([ut('.surface')], Ai.prototype, 'mdRoot', void 0);
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ii = s`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let Mi = class extends Ai {};
(Mi.styles = [Ii]), (Mi = vt([nt('md-ripple')], Mi));
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Oi {
  constructor(t, e) {
    (this.host = t),
      (this.internalTypeaheadText = null),
      (this.onClick = () => {
        this.host.keepOpen ||
          this.host.dispatchEvent(Ve(this.host, {kind: Ke}));
      }),
      (this.onKeydown = (t) => {
        if (this.host.href && 'Enter' === t.code) {
          const t = this.getInteractiveElement();
          t instanceof HTMLAnchorElement && t.click();
        }
        if (t.defaultPrevented) return;
        const e = t.code;
        (this.host.keepOpen && 'Escape' !== e) ||
          (Je(e) &&
            (t.preventDefault(),
            this.host.dispatchEvent(Ve(this.host, {kind: Ge, key: e}))));
      }),
      (this.getHeadlineElements = e.getHeadlineElements),
      (this.getSupportingTextElements = e.getSupportingTextElements),
      (this.getDefaultElements = e.getDefaultElements),
      (this.getInteractiveElement = e.getInteractiveElement),
      this.host.addController(this);
  }
  get typeaheadText() {
    if (null !== this.internalTypeaheadText) return this.internalTypeaheadText;
    const t = this.getHeadlineElements(),
      e = [];
    return (
      t.forEach((t) => {
        t.textContent && t.textContent.trim() && e.push(t.textContent.trim());
      }),
      0 === e.length &&
        this.getDefaultElements().forEach((t) => {
          t.textContent && t.textContent.trim() && e.push(t.textContent.trim());
        }),
      0 === e.length &&
        this.getSupportingTextElements().forEach((t) => {
          t.textContent && t.textContent.trim() && e.push(t.textContent.trim());
        }),
      e.join(' ')
    );
  }
  get tagName() {
    switch (this.host.type) {
      case 'link':
        return 'a';
      case 'button':
        return 'button';
      default:
        return 'li';
    }
  }
  get role() {
    return 'option' === this.host.type ? 'option' : 'menuitem';
  }
  hostConnected() {
    this.host.toggleAttribute('md-menu-item', !0);
  }
  hostUpdate() {
    this.host.href && (this.host.type = 'link');
  }
  setTypeaheadText(t) {
    this.internalTypeaheadText = t;
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Pi {
  get role() {
    return this.menuItemController.role;
  }
  get typeaheadText() {
    return this.menuItemController.typeaheadText;
  }
  setTypeaheadText(t) {
    this.menuItemController.setTypeaheadText(t);
  }
  get displayText() {
    return null !== this.internalDisplayText
      ? this.internalDisplayText
      : this.menuItemController.typeaheadText;
  }
  setDisplayText(t) {
    this.internalDisplayText = t;
  }
  constructor(t, e) {
    (this.host = t),
      (this.internalDisplayText = null),
      (this.lastSelected = this.host.selected),
      (this.firstUpdate = !0),
      (this.onClick = () => {
        this.menuItemController.onClick();
      }),
      (this.onKeydown = (t) => {
        this.menuItemController.onKeydown(t);
      }),
      (this.menuItemController = new Oi(t, e)),
      t.addController(this);
  }
  hostUpdate() {
    this.lastSelected !== this.host.selected &&
      (this.host.ariaSelected = this.host.selected ? 'true' : 'false');
  }
  hostUpdated() {
    this.lastSelected === this.host.selected ||
      this.firstUpdate ||
      (this.host.selected
        ? this.host.dispatchEvent(
            new Event('request-selection', {bubbles: !0, composed: !0})
          )
        : this.host.dispatchEvent(
            new Event('request-deselection', {bubbles: !0, composed: !0})
          )),
      (this.lastSelected = this.host.selected),
      (this.firstUpdate = !1);
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Ui extends rt {
  constructor() {
    super(...arguments),
      (this.disabled = !1),
      (this.isMenuItem = !0),
      (this.selected = !1),
      (this.value = ''),
      (this.type = 'option'),
      (this.selectOptionController = new Pi(this, {
        getHeadlineElements: () => this.headlineElements,
        getSupportingTextElements: () => this.supportingTextElements,
        getDefaultElements: () => this.defaultElements,
        getInteractiveElement: () => this.listItemRoot,
      }));
  }
  get typeaheadText() {
    return this.selectOptionController.typeaheadText;
  }
  set typeaheadText(t) {
    this.selectOptionController.setTypeaheadText(t);
  }
  get displayText() {
    return this.selectOptionController.displayText;
  }
  set displayText(t) {
    this.selectOptionController.setDisplayText(t);
  }
  render() {
    return this.renderListItem(W`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `);
  }
  renderListItem(t) {
    return W`
      <li
        id="item"
        tabindex=${this.disabled ? -1 : 0}
        role=${this.selectOptionController.role}
        aria-label=${this.ariaLabel || D}
        aria-selected=${this.ariaSelected || D}
        aria-checked=${this.ariaChecked || D}
        aria-expanded=${this.ariaExpanded || D}
        aria-haspopup=${this.ariaHasPopup || D}
        class="list-item ${_t(this.getRenderClasses())}"
        @click=${this.selectOptionController.onClick}
        @keydown=${this.selectOptionController.onKeydown}
        >${t}</li
      >
    `;
  }
  renderRipple() {
    return W` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`;
  }
  renderFocusRing() {
    return W` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`;
  }
  getRenderClasses() {
    return {disabled: this.disabled, selected: this.selected};
  }
  renderBody() {
    return W`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `;
  }
  focus() {
    this.listItemRoot?.focus();
  }
}
Dt(Ui),
  (Ui.shadowRootOptions = {...rt.shadowRootOptions, delegatesFocus: !0}),
  vt([dt({type: Boolean, reflect: !0})], Ui.prototype, 'disabled', void 0),
  vt(
    [dt({type: Boolean, attribute: 'md-menu-item', reflect: !0})],
    Ui.prototype,
    'isMenuItem',
    void 0
  ),
  vt([dt({type: Boolean})], Ui.prototype, 'selected', void 0),
  vt([dt()], Ui.prototype, 'value', void 0),
  vt([ut('.list-item')], Ui.prototype, 'listItemRoot', void 0),
  vt([ft({slot: 'headline'})], Ui.prototype, 'headlineElements', void 0),
  vt(
    [ft({slot: 'supporting-text'})],
    Ui.prototype,
    'supportingTextElements',
    void 0
  ),
  vt(
    [
      (function (t) {
        return (e, i) => {
          const {slot: o} = t ?? {},
            r = 'slot' + (o ? `[name=${o}]` : ':not([name])');
          return ht(0, 0, {
            get() {
              const e = this.renderRoot?.querySelector(r);
              return e?.assignedNodes(t) ?? [];
            },
          });
        };
      })({slot: ''}),
    ],
    Ui.prototype,
    'defaultElements',
    void 0
  ),
  vt([dt({attribute: 'typeahead-text'})], Ui.prototype, 'typeaheadText', null),
  vt([dt({attribute: 'display-text'})], Ui.prototype, 'displayText', null);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Bi = class extends Ui {};
function Ni(t, e, i, o) {
  for (
    var r,
      s = arguments.length,
      n =
        s < 3
          ? e
          : null === o
          ? (o = Object.getOwnPropertyDescriptor(e, i))
          : o,
      l = t.length - 1;
    l >= 0;
    l--
  )
    (r = t[l]) && (n = (s < 3 ? r(n) : s > 3 ? r(e, i, n) : r(e, i)) || n);
  return s > 3 && n && Object.defineProperty(e, i, n), n;
}
function Li(t, e, i, o) {
  if ('a' === i && !o)
    throw new TypeError('Private accessor was defined without a getter');
  if ('function' == typeof e ? t !== e || !o : !e.has(t))
    throw new TypeError(
      'Cannot read private member from an object whose class did not declare it'
    );
  return 'm' === i ? o : 'a' === i ? o.call(t) : o ? o.value : e.get(t);
}
function Fi(t, e, i, o, r) {
  if ('m' === o) throw new TypeError('Private method is not writable');
  if ('a' === o && !r)
    throw new TypeError('Private accessor was defined without a setter');
  if ('function' == typeof e ? t !== e || !r : !e.has(t))
    throw new TypeError(
      'Cannot write private member to an object whose class did not declare it'
    );
  return 'a' === o ? r.call(t, i) : r ? (r.value = i) : e.set(t, i), i;
}
(Bi.styles = [$i]),
  (Bi = vt([nt('md-select-option')], Bi)),
  'function' == typeof SuppressedError && SuppressedError;
class Wi {
  static {
    this.instances = new WeakMap();
  }
  get prefix() {
    return `[${this.host.localName}${this.host.id ? `#${this.host.id}` : ''}]`;
  }
  static debugLog(t = null) {
    try {
      return (
        null !== t && ((Wi.logDebug = !!t), (localStorage.pfeLog = !!t)),
        'true' === localStorage.pfeLog
      );
    } catch (t) {
      return Wi.logDebug;
    }
  }
  static log(...t) {
    Wi.debugLog() && console.log(...t);
  }
  static warn(...t) {
    console.warn(...t);
  }
  static error(...t) {
    console.error([...t].join(' '));
  }
  log(...t) {
    Wi.log(this.prefix, ...t);
  }
  warn(...t) {
    Wi.warn(this.prefix, ...t);
  }
  error(...t) {
    Wi.error(this.prefix, ...t);
  }
  constructor(t) {
    if (((this.host = t), Wi.instances.get(t))) return Wi.instances.get(t);
    t.addController(this), Wi.instances.set(t, this);
  }
  hostConnected() {
    this.log('connected');
  }
}
class ji {
  static {
    this.instances = new WeakMap();
  }
  constructor(t, e) {
    (this.host = t),
      (this.options = e),
      (this.mo = new MutationObserver(this.parse)),
      (this.cache = new Map()),
      (this.class = t.constructor),
      (this.logger = new Wi(this.host)),
      ji.instances.set(t, this);
    const i = this.options?.properties ?? {};
    for (const [t, e] of Object.entries(i)) this.initProp(t, e);
    t.addController(this),
      (this.cascadeProperties = (function (t, e, i = !1) {
        let o;
        return function (...r) {
          const s = this,
            n = i && !o;
          clearTimeout(o),
            (o = window.setTimeout(function () {
              (o = null), i || t.apply(s, r);
            }, e)),
            n && t.apply(s, r);
        };
      })(this.cascadeProperties, 1));
  }
  hostUpdated() {
    this.cascadeProperties();
  }
  hostConnected() {
    this.mo.observe(this.host, {attributes: !0, childList: !0}),
      this.cascadeProperties();
  }
  hostDisconnected() {
    this.mo.disconnect();
  }
  cascadeProperties(t = this.host.children) {
    if (this.host.isConnected) {
      const e = this.cache.keys();
      if (!t) return this._cascadeAttributes(e, this.cache);
      for (const i of t)
        if (i instanceof Element)
          for (const t of e)
            if (i.matches(t)) {
              const e = this.cache.get(t);
              for (const t of e ?? []) this._copyAttribute(t, i);
            }
    }
  }
  initProp(t, e) {
    for (const i of [e].flat(1 / 0).filter(Boolean)) {
      const {attribute: e} = this.class.getPropertyOptions(t),
        o = 'string' == typeof e ? e : t.toLowerCase();
      this.cache.get(i) ? this.cache.get(i)?.push(o) : this.cache.set(i, [o]);
    }
  }
  parse(t) {
    for (const e of t ?? [])
      'childList' === e.type && e.addedNodes.length
        ? this.cascadeProperties(e.addedNodes)
        : 'attributes' === e.type &&
          this._cascadeAttributes(this.cache.keys(), this.cache);
  }
  async _copyAttribute(t, e) {
    this.logger.log(`copying ${t} to ${e}`);
    const i = this.host.getAttribute(t);
    e.isConnected && (null == i ? e.removeAttribute(t) : e.setAttribute(t, i));
  }
  _cascadeAttributes(t, e) {
    for (const i of t)
      for (const t of e.get(i) ?? []) this._cascadeAttribute(t, i);
  }
  _cascadeAttribute(t, e) {
    const i = [
      ...this.host.querySelectorAll(e),
      ...(this.host.shadowRoot?.querySelectorAll(e) ?? []),
    ];
    for (const e of i) this._copyAttribute(t, e);
  }
}
!(
  /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
  (function (t, e, i, o) {
    for (
      var r,
        s = arguments.length,
        n =
          s < 3
            ? e
            : null === o
            ? (o = Object.getOwnPropertyDescriptor(e, i))
            : o,
        l = t.length - 1;
      l >= 0;
      l--
    )
      (r = t[l]) && (n = (s < 3 ? r(n) : s > 3 ? r(e, i, n) : r(e, i)) || n);
    s > 3 && n && Object.defineProperty(e, i, n);
  })(
    [
      function (t, e, i) {
        if ('function' != typeof i?.value)
          throw new TypeError(
            `Only methods can be decorated with @bound. <${
              e ?? t.name
            }> is not a method!`
          );
        return {
          configurable: true,
          get() {
            const t = i.value.bind(this);
            return (
              Object.defineProperty(this, e, {
                value: t,
                configurable: true,
                writable: !0,
              }),
              t
            );
          },
        };
      },
    ],
    ji.prototype,
    'parse',
    null
  )
);
const Di = Symbol('observed properties controller');
class qi {
  static {
    this.hosts = new WeakMap();
  }
  delete(t) {
    this.values.delete(t);
  }
  constructor(t) {
    if (((this.host = t), (this.values = new Map()), qi.hosts.get(t)))
      return qi.hosts.get(t);
    t.addController(this), (t[Di] = this);
  }
  hostUpdate() {
    for (const [t, [e, [i, o]]] of this.values)
      this.host[e]?.(i, o), this.delete(t);
  }
  hostUpdated() {
    this.host.removeController(this);
  }
  cache(t, e, ...i) {
    this.values.set(t, [e, i]);
  }
}
function Vi(t, e, i) {
  const o = Object.getOwnPropertyDescriptor(t, e);
  Object.defineProperty(t, e, {
    ...o,
    configurable: !0,
    set(t) {
      const r = this[e];
      if ((o?.set?.call(this, t), 'function' == typeof i)) i.call(this, r, t);
      else {
        const o = i || `_${e}Changed`;
        this.hasUpdated ? this[o]?.(r, t) : this[Di].cache(e, o, r, t);
      }
    },
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Hi = (t, e) =>
    'method' === e.kind && e.descriptor && !('value' in e.descriptor)
      ? {
          ...e,
          finisher(i) {
            i.createProperty(e.key, t);
          },
        }
      : {
          kind: 'field',
          key: Symbol(),
          placement: 'own',
          descriptor: {},
          originalKey: e.key,
          initializer() {
            'function' == typeof e.initializer &&
              (this[e.key] = e.initializer.call(this));
          },
          finisher(i) {
            i.createProperty(e.key, t);
          },
        },
  Ki = (t, e, i) => {
    e.constructor.createProperty(i, t);
  };
function Gi(t) {
  return (e, i) => (void 0 !== i ? Ki(t, e, i) : Hi(t, e));
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
}
const Yi = (t) => (e) =>
    'function' == typeof e
      ? ((t, e) => (customElements.define(t, e), e))(t, e)
      : ((t, e) => {
          const {kind: i, elements: o} = e;
          return {
            kind: i,
            elements: o,
            finisher(e) {
              customElements.define(t, e);
            },
          };
        })(t, e),
  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ Ji = window,
  Xi =
    Ji.ShadowRoot &&
    (void 0 === Ji.ShadyCSS || Ji.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype,
  Zi = Symbol(),
  Qi = new WeakMap();
class to {
  constructor(t, e, i) {
    if (((this._$cssResult$ = !0), i !== Zi))
      throw Error(
        'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.'
      );
    (this.cssText = t), (this.t = e);
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Xi && void 0 === t) {
      const i = void 0 !== e && 1 === e.length;
      i && (t = Qi.get(e)),
        void 0 === t &&
          ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
          i && Qi.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
}
const eo = (t, ...e) => {
    const i =
      1 === t.length
        ? t[0]
        : e.reduce(
            (e, i, o) =>
              e +
              ((t) => {
                if (!0 === t._$cssResult$) return t.cssText;
                if ('number' == typeof t) return t;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    t +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(i) +
              t[o + 1],
            t[0]
          );
    return new to(i, t, Zi);
  },
  io = Xi
    ? (t) => t
    : (t) =>
        t instanceof CSSStyleSheet
          ? ((t) => {
              let e = '';
              for (const i of t.cssRules) e += i.cssText;
              return ((t) =>
                new to('string' == typeof t ? t : t + '', void 0, Zi))(e);
            })(t)
          : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var oo;
const ro = window,
  so = ro.trustedTypes,
  no = so ? so.emptyScript : '',
  lo = ro.reactiveElementPolyfillSupport,
  ao = {
    toAttribute(t, e) {
      switch (e) {
        case Boolean:
          t = t ? no : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, e) {
      let i = t;
      switch (e) {
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
  co = (t, e) => e !== t && (e == e || t == t),
  ho = {
    attribute: !0,
    type: String,
    converter: ao,
    reflect: !1,
    hasChanged: co,
  },
  uo = 'finalized';
class po extends HTMLElement {
  constructor() {
    super(),
      (this._$Ei = new Map()),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$El = null),
      this._$Eu();
  }
  static addInitializer(t) {
    var e;
    this.finalize(),
      (null !== (e = this.h) && void 0 !== e ? e : (this.h = [])).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return (
      this.elementProperties.forEach((e, i) => {
        const o = this._$Ep(i, e);
        void 0 !== o && (this._$Ev.set(o, i), t.push(o));
      }),
      t
    );
  }
  static createProperty(t, e = ho) {
    if (
      (e.state && (e.attribute = !1),
      this.finalize(),
      this.elementProperties.set(t, e),
      !e.noAccessor && !this.prototype.hasOwnProperty(t))
    ) {
      const i = 'symbol' == typeof t ? Symbol() : '__' + t,
        o = this.getPropertyDescriptor(t, i, e);
      void 0 !== o && Object.defineProperty(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    return {
      get() {
        return this[e];
      },
      set(o) {
        const r = this[t];
        (this[e] = o), this.requestUpdate(t, r, i);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || ho;
  }
  static finalize() {
    if (this.hasOwnProperty(uo)) return !1;
    this[uo] = !0;
    const t = Object.getPrototypeOf(this);
    if (
      (t.finalize(),
      void 0 !== t.h && (this.h = [...t.h]),
      (this.elementProperties = new Map(t.elementProperties)),
      (this._$Ev = new Map()),
      this.hasOwnProperty('properties'))
    ) {
      const t = this.properties,
        e = [
          ...Object.getOwnPropertyNames(t),
          ...Object.getOwnPropertySymbols(t),
        ];
      for (const i of e) this.createProperty(i, t[i]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const t of i) e.unshift(io(t));
    } else void 0 !== t && e.push(io(t));
    return e;
  }
  static _$Ep(t, e) {
    const i = e.attribute;
    return !1 === i
      ? void 0
      : 'string' == typeof i
      ? i
      : 'string' == typeof t
      ? t.toLowerCase()
      : void 0;
  }
  _$Eu() {
    var t;
    (this._$E_ = new Promise((t) => (this.enableUpdating = t))),
      (this._$AL = new Map()),
      this._$Eg(),
      this.requestUpdate(),
      null === (t = this.constructor.h) ||
        void 0 === t ||
        t.forEach((t) => t(this));
  }
  addController(t) {
    var e, i;
    (null !== (e = this._$ES) && void 0 !== e ? e : (this._$ES = [])).push(t),
      void 0 !== this.renderRoot &&
        this.isConnected &&
        (null === (i = t.hostConnected) || void 0 === i || i.call(t));
  }
  removeController(t) {
    var e;
    null === (e = this._$ES) ||
      void 0 === e ||
      e.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, e) => {
      this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
    });
  }
  createRenderRoot() {
    var t;
    const e =
      null !== (t = this.shadowRoot) && void 0 !== t
        ? t
        : this.attachShadow(this.constructor.shadowRootOptions);
    return (
      ((t, e) => {
        Xi
          ? (t.adoptedStyleSheets = e.map((t) =>
              t instanceof CSSStyleSheet ? t : t.styleSheet
            ))
          : e.forEach((e) => {
              const i = document.createElement('style'),
                o = Ji.litNonce;
              void 0 !== o && i.setAttribute('nonce', o),
                (i.textContent = e.cssText),
                t.appendChild(i);
            });
      })(e, this.constructor.elementStyles),
      e
    );
  }
  connectedCallback() {
    var t;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      null === (t = this._$ES) ||
        void 0 === t ||
        t.forEach((t) => {
          var e;
          return null === (e = t.hostConnected) || void 0 === e
            ? void 0
            : e.call(t);
        });
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    null === (t = this._$ES) ||
      void 0 === t ||
      t.forEach((t) => {
        var e;
        return null === (e = t.hostDisconnected) || void 0 === e
          ? void 0
          : e.call(t);
      });
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$EO(t, e, i = ho) {
    var o;
    const r = this.constructor._$Ep(t, i);
    if (void 0 !== r && !0 === i.reflect) {
      const s = (
        void 0 !==
        (null === (o = i.converter) || void 0 === o ? void 0 : o.toAttribute)
          ? i.converter
          : ao
      ).toAttribute(e, i.type);
      (this._$El = t),
        null == s ? this.removeAttribute(r) : this.setAttribute(r, s),
        (this._$El = null);
    }
  }
  _$AK(t, e) {
    var i;
    const o = this.constructor,
      r = o._$Ev.get(t);
    if (void 0 !== r && this._$El !== r) {
      const t = o.getPropertyOptions(r),
        s =
          'function' == typeof t.converter
            ? {fromAttribute: t.converter}
            : void 0 !==
              (null === (i = t.converter) || void 0 === i
                ? void 0
                : i.fromAttribute)
            ? t.converter
            : ao;
      (this._$El = r),
        (this[r] = s.fromAttribute(e, t.type)),
        (this._$El = null);
    }
  }
  requestUpdate(t, e, i) {
    let o = !0;
    void 0 !== t &&
      (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || co)(
        this[t],
        e
      )
        ? (this._$AL.has(t) || this._$AL.set(t, e),
          !0 === i.reflect &&
            this._$El !== t &&
            (void 0 === this._$EC && (this._$EC = new Map()),
            this._$EC.set(t, i)))
        : (o = !1)),
      !this.isUpdatePending && o && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
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
    var t;
    if (!this.isUpdatePending) return;
    this.hasUpdated,
      this._$Ei &&
        (this._$Ei.forEach((t, e) => (this[e] = t)), (this._$Ei = void 0));
    let e = !1;
    const i = this._$AL;
    try {
      (e = this.shouldUpdate(i)),
        e
          ? (this.willUpdate(i),
            null === (t = this._$ES) ||
              void 0 === t ||
              t.forEach((t) => {
                var e;
                return null === (e = t.hostUpdate) || void 0 === e
                  ? void 0
                  : e.call(t);
              }),
            this.update(i))
          : this._$Ek();
    } catch (t) {
      throw ((e = !1), this._$Ek(), t);
    }
    e && this._$AE(i);
  }
  willUpdate(t) {}
  _$AE(t) {
    var e;
    null === (e = this._$ES) ||
      void 0 === e ||
      e.forEach((t) => {
        var e;
        return null === (e = t.hostUpdated) || void 0 === e
          ? void 0
          : e.call(t);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
      this.updated(t);
  }
  _$Ek() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    void 0 !== this._$EC &&
      (this._$EC.forEach((t, e) => this._$EO(e, this[e], t)),
      (this._$EC = void 0)),
      this._$Ek();
  }
  updated(t) {}
  firstUpdated(t) {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var fo;
(po[uo] = !0),
  (po.elementProperties = new Map()),
  (po.elementStyles = []),
  (po.shadowRootOptions = {mode: 'open'}),
  null == lo || lo({ReactiveElement: po}),
  (null !== (oo = ro.reactiveElementVersions) && void 0 !== oo
    ? oo
    : (ro.reactiveElementVersions = [])
  ).push('1.6.3');
const vo = window,
  mo = vo.trustedTypes,
  go = mo ? mo.createPolicy('lit-html', {createHTML: (t) => t}) : void 0,
  bo = '$lit$',
  xo = `lit$${(Math.random() + '').slice(9)}$`,
  yo = '?' + xo,
  _o = `<${yo}>`,
  wo = document,
  $o = () => wo.createComment(''),
  So = (t) => null === t || ('object' != typeof t && 'function' != typeof t),
  ko = Array.isArray,
  Co = '[ \t\n\f\r]',
  zo = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  Eo = /-->/g,
  To = />/g,
  Ro = RegExp(
    `>|${Co}(?:([^\\s"'>=/]+)(${Co}*=${Co}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,
    'g'
  ),
  Ao = /'/g,
  Io = /"/g,
  Mo = /^(?:script|style|textarea|title)$/i,
  Oo = (
    (t) =>
    (e, ...i) => ({_$litType$: t, strings: e, values: i})
  )(1),
  Po = Symbol.for('lit-noChange'),
  Uo = Symbol.for('lit-nothing'),
  Bo = new WeakMap(),
  No = wo.createTreeWalker(wo, 129, null, !1);
function Lo(t, e) {
  if (!Array.isArray(t) || !t.hasOwnProperty('raw'))
    throw Error('invalid template strings array');
  return void 0 !== go ? go.createHTML(e) : e;
}
const Fo = (t, e) => {
  const i = t.length - 1,
    o = [];
  let r,
    s = 2 === e ? '<svg>' : '',
    n = zo;
  for (let e = 0; e < i; e++) {
    const i = t[e];
    let l,
      a,
      d = -1,
      c = 0;
    for (; c < i.length && ((n.lastIndex = c), (a = n.exec(i)), null !== a); )
      (c = n.lastIndex),
        n === zo
          ? '!--' === a[1]
            ? (n = Eo)
            : void 0 !== a[1]
            ? (n = To)
            : void 0 !== a[2]
            ? (Mo.test(a[2]) && (r = RegExp('</' + a[2], 'g')), (n = Ro))
            : void 0 !== a[3] && (n = Ro)
          : n === Ro
          ? '>' === a[0]
            ? ((n = null != r ? r : zo), (d = -1))
            : void 0 === a[1]
            ? (d = -2)
            : ((d = n.lastIndex - a[2].length),
              (l = a[1]),
              (n = void 0 === a[3] ? Ro : '"' === a[3] ? Io : Ao))
          : n === Io || n === Ao
          ? (n = Ro)
          : n === Eo || n === To
          ? (n = zo)
          : ((n = Ro), (r = void 0));
    const h = n === Ro && t[e + 1].startsWith('/>') ? ' ' : '';
    s +=
      n === zo
        ? i + _o
        : d >= 0
        ? (o.push(l), i.slice(0, d) + bo + i.slice(d) + xo + h)
        : i + xo + (-2 === d ? (o.push(void 0), e) : h);
  }
  return [Lo(t, s + (t[i] || '<?>') + (2 === e ? '</svg>' : '')), o];
};
class Wo {
  constructor({strings: t, _$litType$: e}, i) {
    let o;
    this.parts = [];
    let r = 0,
      s = 0;
    const n = t.length - 1,
      l = this.parts,
      [a, d] = Fo(t, e);
    if (
      ((this.el = Wo.createElement(a, i)),
      (No.currentNode = this.el.content),
      2 === e)
    ) {
      const t = this.el.content,
        e = t.firstChild;
      e.remove(), t.append(...e.childNodes);
    }
    for (; null !== (o = No.nextNode()) && l.length < n; ) {
      if (1 === o.nodeType) {
        if (o.hasAttributes()) {
          const t = [];
          for (const e of o.getAttributeNames())
            if (e.endsWith(bo) || e.startsWith(xo)) {
              const i = d[s++];
              if ((t.push(e), void 0 !== i)) {
                const t = o.getAttribute(i.toLowerCase() + bo).split(xo),
                  e = /([.?@])?(.*)/.exec(i);
                l.push({
                  type: 1,
                  index: r,
                  name: e[2],
                  strings: t,
                  ctor:
                    '.' === e[1]
                      ? Ho
                      : '?' === e[1]
                      ? Go
                      : '@' === e[1]
                      ? Yo
                      : Vo,
                });
              } else l.push({type: 6, index: r});
            }
          for (const e of t) o.removeAttribute(e);
        }
        if (Mo.test(o.tagName)) {
          const t = o.textContent.split(xo),
            e = t.length - 1;
          if (e > 0) {
            o.textContent = mo ? mo.emptyScript : '';
            for (let i = 0; i < e; i++)
              o.append(t[i], $o()),
                No.nextNode(),
                l.push({type: 2, index: ++r});
            o.append(t[e], $o());
          }
        }
      } else if (8 === o.nodeType)
        if (o.data === yo) l.push({type: 2, index: r});
        else {
          let t = -1;
          for (; -1 !== (t = o.data.indexOf(xo, t + 1)); )
            l.push({type: 7, index: r}), (t += xo.length - 1);
        }
      r++;
    }
  }
  static createElement(t, e) {
    const i = wo.createElement('template');
    return (i.innerHTML = t), i;
  }
}
function jo(t, e, i = t, o) {
  var r, s, n, l;
  if (e === Po) return e;
  let a =
    void 0 !== o
      ? null === (r = i._$Co) || void 0 === r
        ? void 0
        : r[o]
      : i._$Cl;
  const d = So(e) ? void 0 : e._$litDirective$;
  return (
    (null == a ? void 0 : a.constructor) !== d &&
      (null === (s = null == a ? void 0 : a._$AO) ||
        void 0 === s ||
        s.call(a, !1),
      void 0 === d ? (a = void 0) : ((a = new d(t)), a._$AT(t, i, o)),
      void 0 !== o
        ? ((null !== (n = (l = i)._$Co) && void 0 !== n ? n : (l._$Co = []))[
            o
          ] = a)
        : (i._$Cl = a)),
    void 0 !== a && (e = jo(t, a._$AS(t, e.values), a, o)),
    e
  );
}
class Do {
  constructor(t, e) {
    (this._$AV = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = e);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    var e;
    const {
        el: {content: i},
        parts: o,
      } = this._$AD,
      r = (
        null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e
          ? e
          : wo
      ).importNode(i, !0);
    No.currentNode = r;
    let s = No.nextNode(),
      n = 0,
      l = 0,
      a = o[0];
    for (; void 0 !== a; ) {
      if (n === a.index) {
        let e;
        2 === a.type
          ? (e = new qo(s, s.nextSibling, this, t))
          : 1 === a.type
          ? (e = new a.ctor(s, a.name, a.strings, this, t))
          : 6 === a.type && (e = new Jo(s, this, t)),
          this._$AV.push(e),
          (a = o[++l]);
      }
      n !== (null == a ? void 0 : a.index) && ((s = No.nextNode()), n++);
    }
    return (No.currentNode = wo), r;
  }
  v(t) {
    let e = 0;
    for (const i of this._$AV)
      void 0 !== i &&
        (void 0 !== i.strings
          ? (i._$AI(t, i, e), (e += i.strings.length - 2))
          : i._$AI(t[e])),
        e++;
  }
}
class qo {
  constructor(t, e, i, o) {
    var r;
    (this.type = 2),
      (this._$AH = Uo),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = e),
      (this._$AM = i),
      (this.options = o),
      (this._$Cp =
        null === (r = null == o ? void 0 : o.isConnected) || void 0 === r || r);
  }
  get _$AU() {
    var t, e;
    return null !==
      (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) &&
      void 0 !== e
      ? e
      : this._$Cp;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return (
      void 0 !== e &&
        11 === (null == t ? void 0 : t.nodeType) &&
        (t = e.parentNode),
      t
    );
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    (t = jo(this, t, e)),
      So(t)
        ? t === Uo || null == t || '' === t
          ? (this._$AH !== Uo && this._$AR(), (this._$AH = Uo))
          : t !== this._$AH && t !== Po && this._(t)
        : void 0 !== t._$litType$
        ? this.g(t)
        : void 0 !== t.nodeType
        ? this.$(t)
        : ((t) =>
            ko(t) ||
            'function' == typeof (null == t ? void 0 : t[Symbol.iterator]))(t)
        ? this.T(t)
        : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), (this._$AH = this.k(t)));
  }
  _(t) {
    this._$AH !== Uo && So(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.$(wo.createTextNode(t)),
      (this._$AH = t);
  }
  g(t) {
    var e;
    const {values: i, _$litType$: o} = t,
      r =
        'number' == typeof o
          ? this._$AC(t)
          : (void 0 === o.el &&
              (o.el = Wo.createElement(Lo(o.h, o.h[0]), this.options)),
            o);
    if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === r)
      this._$AH.v(i);
    else {
      const t = new Do(r, this),
        e = t.u(this.options);
      t.v(i), this.$(e), (this._$AH = t);
    }
  }
  _$AC(t) {
    let e = Bo.get(t.strings);
    return void 0 === e && Bo.set(t.strings, (e = new Wo(t))), e;
  }
  T(t) {
    ko(this._$AH) || ((this._$AH = []), this._$AR());
    const e = this._$AH;
    let i,
      o = 0;
    for (const r of t)
      o === e.length
        ? e.push((i = new qo(this.k($o()), this.k($o()), this, this.options)))
        : (i = e[o]),
        i._$AI(r),
        o++;
    o < e.length && (this._$AR(i && i._$AB.nextSibling, o), (e.length = o));
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for (
      null === (i = this._$AP) || void 0 === i || i.call(this, !1, !0, e);
      t && t !== this._$AB;

    ) {
      const e = t.nextSibling;
      t.remove(), (t = e);
    }
  }
  setConnected(t) {
    var e;
    void 0 === this._$AM &&
      ((this._$Cp = t),
      null === (e = this._$AP) || void 0 === e || e.call(this, t));
  }
}
class Vo {
  constructor(t, e, i, o, r) {
    (this.type = 1),
      (this._$AH = Uo),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = e),
      (this._$AM = o),
      (this.options = r),
      i.length > 2 || '' !== i[0] || '' !== i[1]
        ? ((this._$AH = Array(i.length - 1).fill(new String())),
          (this.strings = i))
        : (this._$AH = Uo);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, i, o) {
    const r = this.strings;
    let s = !1;
    if (void 0 === r)
      (t = jo(this, t, e, 0)),
        (s = !So(t) || (t !== this._$AH && t !== Po)),
        s && (this._$AH = t);
    else {
      const o = t;
      let n, l;
      for (t = r[0], n = 0; n < r.length - 1; n++)
        (l = jo(this, o[i + n], e, n)),
          l === Po && (l = this._$AH[n]),
          s || (s = !So(l) || l !== this._$AH[n]),
          l === Uo
            ? (t = Uo)
            : t !== Uo && (t += (null != l ? l : '') + r[n + 1]),
          (this._$AH[n] = l);
    }
    s && !o && this.j(t);
  }
  j(t) {
    t === Uo
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, null != t ? t : '');
  }
}
class Ho extends Vo {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(t) {
    this.element[this.name] = t === Uo ? void 0 : t;
  }
}
const Ko = mo ? mo.emptyScript : '';
class Go extends Vo {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(t) {
    t && t !== Uo
      ? this.element.setAttribute(this.name, Ko)
      : this.element.removeAttribute(this.name);
  }
}
class Yo extends Vo {
  constructor(t, e, i, o, r) {
    super(t, e, i, o, r), (this.type = 5);
  }
  _$AI(t, e = this) {
    var i;
    if ((t = null !== (i = jo(this, t, e, 0)) && void 0 !== i ? i : Uo) === Po)
      return;
    const o = this._$AH,
      r =
        (t === Uo && o !== Uo) ||
        t.capture !== o.capture ||
        t.once !== o.once ||
        t.passive !== o.passive,
      s = t !== Uo && (o === Uo || r);
    r && this.element.removeEventListener(this.name, this, o),
      s && this.element.addEventListener(this.name, this, t),
      (this._$AH = t);
  }
  handleEvent(t) {
    var e, i;
    'function' == typeof this._$AH
      ? this._$AH.call(
          null !==
            (i =
              null === (e = this.options) || void 0 === e ? void 0 : e.host) &&
            void 0 !== i
            ? i
            : this.element,
          t
        )
      : this._$AH.handleEvent(t);
  }
}
class Jo {
  constructor(t, e, i) {
    (this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = e),
      (this.options = i);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    jo(this, t);
  }
}
const Xo = vo.litHtmlPolyfillSupport;
null == Xo || Xo(Wo, qo),
  (null !== (fo = vo.litHtmlVersions) && void 0 !== fo
    ? fo
    : (vo.litHtmlVersions = [])
  ).push('2.8.0');
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Zo, Qo;
class tr extends po {
  constructor() {
    super(...arguments),
      (this.renderOptions = {host: this}),
      (this._$Do = void 0);
  }
  createRenderRoot() {
    var t, e;
    const i = super.createRenderRoot();
    return (
      (null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t) ||
        (e.renderBefore = i.firstChild),
      i
    );
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this._$Do = ((t, e, i) => {
        var o, r;
        const s =
          null !== (o = null == i ? void 0 : i.renderBefore) && void 0 !== o
            ? o
            : e;
        let n = s._$litPart$;
        if (void 0 === n) {
          const t =
            null !== (r = null == i ? void 0 : i.renderBefore) && void 0 !== r
              ? r
              : null;
          s._$litPart$ = n = new qo(
            e.insertBefore($o(), t),
            t,
            void 0,
            null != i ? i : {}
          );
        }
        return n._$AI(t), n;
      })(e, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var t;
    super.connectedCallback(),
      null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(),
      null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
  }
  render() {
    return Po;
  }
}
(tr.finalized = !0),
  (tr._$litElement$ = !0),
  null === (Zo = globalThis.litElementHydrateSupport) ||
    void 0 === Zo ||
    Zo.call(globalThis, {LitElement: tr});
const er = globalThis.litElementPolyfillSupport;
function ir(t) {
  return document.head.querySelector(`meta[name="${t}"]`)?.content;
}
null == er || er({LitElement: tr}),
  (null !== (Qo = globalThis.litElementVersions) && void 0 !== Qo
    ? Qo
    : (globalThis.litElementVersions = [])
  ).push('3.3.3');
const or = (function (t) {
  return {
    fromAttribute: (e) => ('string' != typeof e ? null : e.split(',').map(t)),
    toAttribute: (t) => t.join(','),
  };
})((t) => parseInt(t?.trim(), 10));
class rr extends Event {
  constructor(t, e) {
    super(t, {bubbles: !0, composed: !0, ...e});
  }
}
const sr = document.body.hasAttribute('no-auto-reveal');
function nr(t = 'pfe') {
  return `${t}-${Math.random().toString(36).substr(2, 9)}`;
}
var lr, ar, dr, cr, hr, ur, pr, fr;
window.PfeConfig = Object.assign(window.PfeConfig ?? {}, {
  trackPerformance:
    window.PfeConfig?.trackPerformance ?? 'true' === ir('pf-track-performance'),
  autoReveal:
    window.PfeConfig?.autoReveal ??
    (sr ? !sr : 'true' === ir('pf-auto-reveal')),
  get log() {
    return !!localStorage.pfeLog;
  },
  set log(t) {
    t
      ? localStorage.setItem('pfeLog', 'true')
      : localStorage.removeItem('pfeLog');
  },
});
const vr = eo`#heading{font-size:100%;padding:0;margin:0}a,button{cursor:pointer}.toggle,.toggle:after,.toggle:before{padding:0;margin:0}.toggle{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;border:0}.toggle:after{content:"";position:absolute;bottom:0;left:0}span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}`;
class mr extends rr {
  constructor(t, e, i) {
    super('change'),
      (this.expanded = t),
      (this.toggle = e),
      (this.accordion = i);
  }
}
class gr extends tr {
  constructor() {
    super(...arguments),
      lr.add(this),
      (this.expanded = !1),
      ar.set(this, void 0),
      dr.set(this, new Wi(this)),
      cr.set(this, void 0);
  }
  connectedCallback() {
    super.connectedCallback(),
      this.addEventListener('click', Li(this, lr, 'm', fr)),
      (this.hidden = !0),
      this.id || (this.id = nr(this.localName)),
      Li(this, lr, 'm', hr).call(this);
  }
  render() {
    switch (this.headingTag) {
      case 'h1':
        return Oo`<h1 id="heading">${Li(this, lr, 'm', ur).call(this)}</h1>`;
      case 'h2':
        return Oo`<h2 id="heading">${Li(this, lr, 'm', ur).call(this)}</h2>`;
      case 'h3':
        return Oo`<h3 id="heading">${Li(this, lr, 'm', ur).call(this)}</h3>`;
      case 'h4':
        return Oo`<h4 id="heading">${Li(this, lr, 'm', ur).call(this)}</h4>`;
      case 'h5':
        return Oo`<h5 id="heading">${Li(this, lr, 'm', ur).call(this)}</h5>`;
      case 'h6':
        return Oo`<h6 id="heading">${Li(this, lr, 'm', ur).call(this)}</h6>`;
      default:
        return Li(this, lr, 'm', ur).call(this);
    }
  }
}
(ar = new WeakMap()),
  (dr = new WeakMap()),
  (cr = new WeakMap()),
  (lr = new WeakSet()),
  (hr = async function () {
    this.headingText && !this.headingTag && (this.headingTag = 'h3'),
      Fi(this, cr, Li(this, lr, 'm', pr).call(this), 'f'),
      Li(this, cr, 'f') !== Li(this, ar, 'f') && Fi(this, ar, void 0, 'f');
    do {
      await this.updateComplete;
    } while (!(await this.updateComplete));
    this.hidden = !1;
  }),
  (ur = function () {
    const t =
      this.headingText?.trim() ?? Li(this, cr, 'f')?.textContent?.trim();
    return Oo`
      <button id="button"
              class="toggle"
              aria-expanded="${String(!!this.expanded)}">
        <span part="text">${
          t ??
          Oo`
          <slot></slot>`
        }
        </span>
        ${this.renderAfterButton?.()}
      </button>
    `;
  }),
  (pr = function () {
    if (this.firstElementChild || this.firstChild) {
      if (this.firstElementChild) {
        const [t, ...e] = Array.from(this.children).filter((t) => {
          return (
            !t.hasAttribute('slot') &&
            (e = t) instanceof HTMLElement &&
            !!e.tagName.match(/P|^H[1-6]/)
          );
          var e;
        });
        return t
          ? (e.length &&
              Li(this, dr, 'f').warn(
                'Heading currently only supports 1 tag; extra tags will be ignored.'
              ),
            t)
          : void Li(this, dr, 'f').warn('No heading information was provided.');
      }
      return (
        Li(this, ar, 'f') ||
          Li(this, dr, 'f').warn(
            'Header should contain at least 1 heading tag for correct semantics.'
          ),
        Fi(this, ar, document.createElement('h3'), 'f'),
        this.firstChild?.nodeType === Node.TEXT_NODE
          ? (Li(this, ar, 'f').textContent = this.firstChild.textContent)
          : (Li(this, ar, 'f').textContent = this.textContent),
        Li(this, ar, 'f')
      );
    }
    Li(this, dr, 'f').warn('No header content provided');
  }),
  (fr = function (t) {
    const e = !this.expanded,
      i = t.composedPath().find(Jr.isAccordion);
    i && this.dispatchEvent(new mr(e, this, i));
  }),
  (gr.styles = [vr]),
  (gr.shadowRootOptions = {...tr.shadowRootOptions, delegatesFocus: !0}),
  Ni([Gi({type: Boolean, reflect: !0})], gr.prototype, 'expanded', void 0),
  Ni(
    [Gi({reflect: !0, attribute: 'heading-text'})],
    gr.prototype,
    'headingText',
    void 0
  ),
  Ni(
    [Gi({reflect: !0, attribute: 'heading-tag'})],
    gr.prototype,
    'headingTag',
    void 0
  );
const br = eo`:host{display:none;overflow:hidden;will-change:height}:host([expanded]){display:block;position:relative}:host(.animating){display:block;transition:height .3s ease-in-out}:host([fixed]){overflow-y:auto}.body{position:relative;overflow:hidden}.body:after{content:"";position:absolute;top:0;bottom:0;left:0}`;
class xr extends tr {
  constructor() {
    super(...arguments), (this.expanded = !1);
  }
  connectedCallback() {
    super.connectedCallback(),
      this.id || (this.id = nr(this.localName)),
      this.setAttribute('role', 'region');
  }
  render() {
    return Oo`
      <div tabindex="-1">
        <div id="container" class="content" part="container">
          <div class="body">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}
(xr.styles = [br]),
  Ni([Gi({type: Boolean, reflect: !0})], xr.prototype, 'expanded', void 0);
const yr = (t) =>
  !(
    !t ||
    t.hasAttribute('disabled') ||
    t.ariaHidden ||
    t.hasAttribute('hidden')
  );
class _r {
  #t;
  #e;
  #i = [];
  get #o() {
    return this.#i.filter(yr);
  }
  get #r() {
    return this.#o && this.activeItem ? this.#o.indexOf(this.activeItem) : -1;
  }
  get #s() {
    return this.activeItem ? this.#i.indexOf(this.activeItem) : -1;
  }
  get activeItem() {
    return this.#t;
  }
  get firstItem() {
    return this.#o[0];
  }
  get lastItem() {
    return this.#o.at(-1);
  }
  get nextItem() {
    return this.#r >= this.#o.length - 1
      ? this.firstItem
      : this.#o[this.#r + 1];
  }
  get prevItem() {
    return this.#r > 0 ? this.#o[this.#r - 1] : this.lastItem;
  }
  constructor(t) {
    (this.host = t), this.host.addController(this);
  }
  #n = (t) => {
    if (
      t.ctrlKey ||
      t.altKey ||
      t.metaKey ||
      !this.#o.length ||
      !t.composedPath().some((t) => this.#o.includes(t))
    )
      return;
    const e = this.activeItem;
    let i = !1;
    const o =
      !!e &&
      ('SELECT' === e.tagName || 'spinbutton' === e.getAttribute('role'));
    switch (t.key) {
      case 'ArrowLeft':
        this.focusOnItem(this.prevItem), (i = !0);
        break;
      case 'ArrowRight':
        this.focusOnItem(this.nextItem), (i = !0);
        break;
      case 'ArrowUp':
        if (o) return;
        this.focusOnItem(this.prevItem), (i = !0);
        break;
      case 'ArrowDown':
        if (o) return;
        this.focusOnItem(this.nextItem), (i = !0);
        break;
      case 'Home':
        this.focusOnItem(this.firstItem), (i = !0);
        break;
      case 'PageUp':
        if (o) return;
        this.focusOnItem(this.firstItem), (i = !0);
        break;
      case 'End':
        this.focusOnItem(this.lastItem), (i = !0);
        break;
      case 'PageDown':
        if (o) return;
        this.focusOnItem(this.lastItem), (i = !0);
    }
    i && (t.stopPropagation(), t.preventDefault());
  };
  updateActiveItem(t) {
    t &&
      (this.#t && t !== this.#t && (this.#t.tabIndex = -1),
      (t.tabIndex = 0),
      (this.#t = t));
  }
  focusOnItem(t) {
    this.updateActiveItem(t || this.firstItem),
      this.#t?.focus(),
      this.host.requestUpdate();
  }
  updateItems(t) {
    const e = [...t.slice(this.#s), ...t.slice(0, this.#s)].find((t) =>
      this.#o.includes(t)
    );
    this.focusOnItem(e || this.firstItem);
  }
  initItems(t, e = this.host) {
    this.#i = t ?? [];
    const i = this.#o,
      [o] = i;
    this.#t = o;
    for (const t of i) t.tabIndex = this.#t === t ? 0 : -1;
    (this.#e && e === this.#e) ||
      (this.#e?.removeEventListener('keydown', this.#n),
      (this.#e = e),
      this.hostConnected());
  }
  hostConnected() {
    this.#e?.addEventListener('keydown', this.#n);
  }
  hostDisconnected() {
    this.#e?.removeEventListener('keydown', this.#n);
  }
}
var wr,
  $r,
  Sr,
  kr,
  Cr,
  zr,
  Er,
  Tr,
  Rr,
  Ar,
  Ir,
  Mr,
  Or,
  Pr,
  Ur,
  Br,
  Nr,
  Lr,
  Fr,
  Wr,
  jr,
  Dr,
  qr,
  Vr;
const Hr = eo`:host{transition-property:box-shadow,border;transition-timing-function:ease-out;transition-duration:1ms}`,
  Kr = /^[0-9.]+(?<unit>[a-zA-Z]+)/g;
class Gr extends rr {
  constructor(t, e) {
    super('expand'), (this.toggle = t), (this.panel = e);
  }
}
class Yr extends rr {
  constructor(t, e) {
    super('collapse'), (this.toggle = t), (this.panel = e);
  }
}
class Jr extends tr {
  constructor() {
    super(...arguments),
      wr.add(this),
      kr.set(this, new _r(this)),
      Cr.set(this, []),
      (this.expandedSets = new Set()),
      Er.set(this, new Wi(this)),
      Tr.set(this, getComputedStyle(this)),
      Rr.set(this, Li(this, wr, 'm', Fr).call(this)),
      Ar.set(this, !1),
      Ir.set(
        this,
        new MutationObserver(() => Li(this, wr, 'm', Mr).call(this))
      );
  }
  static isAccordion(t) {
    return t instanceof Jr;
  }
  static isHeader(t) {
    return t instanceof gr;
  }
  static isPanel(t) {
    return t instanceof xr;
  }
  get expandedIndex() {
    return Li(this, Cr, 'f');
  }
  set expandedIndex(t) {
    const e = Li(this, Cr, 'f');
    Fi(this, Cr, t, 'f'),
      JSON.stringify(e) !== JSON.stringify(t) &&
        (this.requestUpdate('expandedIndex', e),
        this.collapseAll().then(async () => {
          for (const t of this.expandedIndex) await this.expand(t, this);
        }));
  }
  get headers() {
    return Li(this, wr, 'm', Dr).call(this);
  }
  get panels() {
    return Li(this, wr, 'm', qr).call(this);
  }
  async getUpdateComplete() {
    const t = await super.getUpdateComplete(),
      e = await Promise.all([
        ...Li(this, wr, 'm', Dr)
          .call(this)
          .map((t) => t.updateComplete),
        ...Li(this, wr, 'm', qr)
          .call(this)
          .map((t) => t.updateComplete),
      ]);
    return t && e.every(Boolean);
  }
  connectedCallback() {
    super.connectedCallback(),
      this.addEventListener('change', Li(this, wr, 'm', jr)),
      Li(this, Ir, 'f').observe(this, {childList: !0}),
      Li(this, wr, 'm', Mr).call(this);
  }
  render() {
    return Oo`
      <slot></slot>
    `;
  }
  async firstUpdated() {
    const {headers: t} = this;
    t.forEach((t, e) => {
      if (t.expanded) {
        Li(this, wr, 'm', Ur).call(this, t, e);
        const i = Li(this, wr, 'm', Pr).call(this, t);
        i && Li(this, wr, 'm', Br).call(this, i);
      }
    });
  }
  updateAccessibility() {
    const {headers: t} = this;
    t.forEach((t) => {
      const e = Li(this, wr, 'm', Pr).call(this, t);
      e &&
        (t.setAttribute('aria-controls', e.id),
        e.setAttribute('aria-labelledby', t.id),
        (e.hidden = !e.expanded));
    });
  }
  async toggle(t) {
    const {headers: e} = this;
    e[t].expanded ? await this.collapse(t) : await this.expand(t);
  }
  async expand(t, e) {
    const i = Li(this, wr, 'm', Dr).call(this, e)[t];
    if (!i) return;
    const o = Li(this, wr, 'm', Pr).call(this, i);
    o &&
      (Li(this, wr, 'm', Ur).call(this, i, t),
      Li(this, wr, 'm', Br).call(this, o),
      i.focus(),
      this.dispatchEvent(new Gr(i, o)),
      await this.updateComplete);
  }
  async expandAll() {
    this.headers.forEach((t) => Li(this, wr, 'm', Ur).call(this, t)),
      this.panels.forEach((t) => Li(this, wr, 'm', Br).call(this, t)),
      await this.updateComplete;
  }
  async collapse(t) {
    const e = this.headers.at(t),
      i = this.panels.at(t);
    e &&
      i &&
      (Li(this, wr, 'm', Nr).call(this, e),
      Li(this, wr, 'm', Lr).call(this, i),
      this.dispatchEvent(new Yr(e, i)),
      await this.updateComplete);
  }
  async collapseAll() {
    this.headers.forEach((t) => Li(this, wr, 'm', Nr).call(this, t)),
      this.panels.forEach((t) => Li(this, wr, 'm', Lr).call(this, t)),
      await this.updateComplete;
  }
}
($r = Jr),
  (kr = new WeakMap()),
  (Cr = new WeakMap()),
  (Er = new WeakMap()),
  (Tr = new WeakMap()),
  (Rr = new WeakMap()),
  (Ar = new WeakMap()),
  (Ir = new WeakMap()),
  (wr = new WeakSet()),
  (Sr = function (t) {
    return t instanceof mr;
  }),
  (zr = function () {
    const {headers: t} = this,
      e = t.findIndex((t) => t.matches(':focus,:focus-within'));
    return e > -1 ? t.at(e) : void 0;
  }),
  (Mr = async function () {
    Fi(this, Ar, Li(this, Ar, 'f') || !!(await this.updateComplete), 'f'),
      Li(this, kr, 'f').initItems(this.headers),
      this.addEventListener('focusin', Li(this, wr, 'm', Or)),
      this.updateAccessibility();
  }),
  (Or = function (t) {
    Li(this, wr, 'a', zr) &&
      Li(this, kr, 'f').updateActiveItem(Li(this, wr, 'a', zr));
  }),
  (Pr = function (t) {
    const e = t.nextElementSibling;
    return Jr.isPanel(e)
      ? e
      : void Li(this, Er, 'f').error(
          'Sibling element to a header needs to be a panel'
        );
  }),
  (Ur = function (t, e = Li(this, wr, 'm', Vr).call(this, t)) {
    this.expandedSets.add(e),
      Fi(this, Cr, [...this.expandedSets], 'f'),
      (t.expanded = !0);
  }),
  (Br = async function (t) {
    (t.expanded = !0), (t.hidden = !1), await t.updateComplete;
    const e = t.getBoundingClientRect();
    Li(this, wr, 'm', Wr).call(this, t, 0, e.height);
  }),
  (Nr = async function (t, e = Li(this, wr, 'm', Vr).call(this, t)) {
    this.expandedSets || (await this.updateComplete),
      this.expandedSets.delete(e),
      (t.expanded = !1),
      await t.updateComplete;
  }),
  (Lr = async function (t) {
    if ((await t.updateComplete, !t.expanded)) return;
    const e = t.getBoundingClientRect();
    (t.expanded = !1),
      (t.hidden = !0),
      Li(this, wr, 'm', Wr).call(this, t, e.height, 0),
      await t.updateComplete;
  }),
  (Fr = function () {
    if ('computedStyleMap' in this)
      return this.computedStyleMap().get('transition-duration')?.to('ms').value;
    {
      const {transitionDuration: t} = Li(this, Tr, 'f'),
        e = Kr.exec(t)?.groups;
      if (!e) return 0;
      const i = parseFloat(t);
      return 's' === e.unit ? 1e3 * i : i;
    }
  }),
  (Wr = async function (t, e, i) {
    if (t) {
      const o = t.previousElementSibling,
        r = Li(this, wr, 'm', Fr).call(this);
      r && Fi(this, Rr, r, 'f');
      const s = Li(this, Rr, 'f') ?? 0;
      o?.classList.add('animating'), t.classList.add('animating');
      const n = t.animate({height: [`${e}px`, `${i}px`]}, {duration: s});
      n.play(),
        await n.finished,
        o?.classList.remove('animating'),
        t.classList.remove('animating'),
        t.style.removeProperty('height'),
        (t.hidden = !t.expanded);
    }
  }),
  (jr = function (t) {
    if (
      Li(Jr, $r, 'm', Sr).call(Jr, t) &&
      !this.classList.contains('animating')
    ) {
      const e = Li(this, wr, 'm', Vr).call(this, t.target);
      t.expanded ? this.expand(e, t.accordion) : this.collapse(e);
    }
  }),
  (Dr = function (t = this) {
    return Array.from(t.children).filter(Jr.isHeader);
  }),
  (qr = function (t = this) {
    return Array.from(t.children).filter(Jr.isPanel);
  }),
  (Vr = function (t) {
    return Jr.isHeader(t)
      ? this.headers.findIndex((e) => e.id === t.id)
      : Jr.isPanel(t)
      ? this.panels.findIndex((e) => e.id === t.id)
      : (Li(this, Er, 'f').warn(
          'The #getIndex method expects to receive a header or panel element.'
        ),
        -1);
  }),
  (Jr.styles = [Hr]),
  Ni(
    [Gi({attribute: 'expanded-index', converter: or})],
    Jr.prototype,
    'expandedIndex',
    null
  );
class Xr {
  static {
    this.anonymous = Symbol('anonymous slot');
  }
  #l = new Map();
  #a;
  #d = !1;
  #c = new MutationObserver((t) => this.#h(t));
  #u;
  #p = {};
  constructor(t, ...e) {
    if (
      ((this.host = t),
      (this.#a = new Wi(this.host)),
      (function (t) {
        return 1 === t.length && 'object' == typeof t[0] && null !== t[0];
      })(e))
    ) {
      const [{slots: t, deprecations: i}] = e;
      (this.#u = t), (this.#p = i ?? {});
    } else e.length >= 1 ? ((this.#u = e), (this.#p = {})) : (this.#u = [null]);
    t.addController(this);
  }
  async hostConnected() {
    this.host.addEventListener('slotchange', this.#f),
      (this.#d = !1),
      this.#c.observe(this.host, {childList: !0}),
      this.#l.clear(),
      this.#u.forEach(this.#v),
      Object.values(this.#p).forEach(this.#v),
      this.host.requestUpdate(),
      await this.host.updateComplete,
      this.host.requestUpdate();
  }
  hostUpdated() {
    this.#d || (this.#u.forEach(this.#v), (this.#d = !0));
  }
  hostDisconnected() {
    this.#c.disconnect();
  }
  hasSlotted(...t) {
    return t.length
      ? t.some((t) => this.#l.get(t)?.hasContent ?? !1)
      : (this.#a.warn(
          'Please provide at least one slot name for which to search.'
        ),
        !1);
  }
  getSlotted(...t) {
    return t.length
      ? t.flatMap((t) => this.#l.get(t)?.elements ?? [])
      : this.#l.get(Xr.anonymous)?.elements ?? [];
  }
  #f = (t) => {
    const e = t.target.name;
    this.#v(e), this.host.requestUpdate();
  };
  #h = async (t) => {
    const e = [];
    for (const {addedNodes: i, removedNodes: o} of t)
      for (const t of [...i, ...o])
        t instanceof HTMLElement && t.slot && (this.#v(t.slot), e.push(t.slot));
    this.host.requestUpdate();
  };
  #m(t) {
    return Array.from(this.host.children).filter(
      (
        (t) => (e) =>
          t === Xr.anonymous
            ? !e.hasAttribute('slot')
            : e.getAttribute('slot') === t
      )(t)
    );
  }
  #v = (t) => {
    const e = t || Xr.anonymous,
      i = this.#l.get(e)?.slot?.assignedElements?.() ?? this.#m(e),
      o = t ? `slot[name="${t}"]` : 'slot:not([name])',
      r = this.host.shadowRoot?.querySelector?.(o) ?? null,
      s = !!i.length;
    this.#l.set(e, {elements: i, name: t ?? '', hasContent: s, slot: r}),
      this.#a.log(t, s);
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var Zr, Qr, ts, es, is, os, rs;
const ss = eo`:host{position:relative;display:inline-block;line-height:0;height:fit-content!important;width:fit-content!important}#container{display:grid;grid-template:1fr/1fr;place-content:center}#container.content ::slotted(*){display:none}svg{fill:currentcolor}`,
  ns = window.requestIdleCallback ?? window.requestAnimationFrame;
class ls extends ErrorEvent {
  constructor(t, e) {
    super('error', {message: `Could not load icon at ${t}`}),
      (this.originalError = e);
  }
}
class as extends tr {
  constructor() {
    super(...arguments),
      Zr.add(this),
      (this.set = Li(this, Zr, 'a', is).defaultIconSet),
      (this.icon = ''),
      (this.loading = 'lazy'),
      ts.set(this, !1),
      es.set(this, new Wi(this));
  }
  static addIconSet(t, e) {
    if ('function' != typeof e)
      Wi.warn(
        `[${this.name}.addIconSet(setName, getter)]: getter must be a function`
      );
    else {
      this.getters.set(t, e);
      for (const t of this.instances) t.load();
    }
  }
  connectedCallback() {
    super.connectedCallback(), Li(this, Zr, 'a', is).instances.add(this);
  }
  willUpdate(t) {
    t.has('icon') && Li(this, Zr, 'm', rs).call(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), Li(this, Zr, 'a', is).instances.delete(this);
  }
  render() {
    const t = this.content ?? '';
    return Oo`
      <div id="container" aria-hidden="true">${t}<span part="fallback" ?hidden=${!!t}>
          <slot></slot>
        </span>
      </div>
    `;
  }
  async load() {
    const {set: t, icon: e} = this,
      i =
        Li(this, Zr, 'a', is).getters.get(t) ??
        Li(this, Zr, 'a', is).getIconUrl;
    let o = 'UNKNOWN ICON';
    if (t && e)
      try {
        const r = i(t, e);
        o = r instanceof URL ? r.pathname : r;
        const s = await import(o);
        (this.content =
          s.default instanceof Node ? s.default.cloneNode(!0) : s.default),
          await this.updateComplete,
          this.dispatchEvent(new Event('load', {bubbles: !0}));
      } catch (t) {
        const e = new ls(o, t);
        Li(this, es, 'f').error(t.message), this.dispatchEvent(e);
      }
  }
}
(Qr = as),
  (ts = new WeakMap()),
  (es = new WeakMap()),
  (Zr = new WeakSet()),
  (is = function () {
    return this.constructor;
  }),
  (os = function () {
    Li(this, Zr, 'a', is).io.observe(this), Li(this, ts, 'f') && this.load();
  }),
  (rs = function () {
    switch (this.loading) {
      case 'idle':
        return void ns(() => this.load());
      case 'lazy':
        return void Li(this, Zr, 'm', os).call(this);
      case 'eager':
        return void this.load();
    }
  }),
  (as.styles = [ss]),
  (as.getIconUrl = (t, e) => new URL(`./icons/${t}/${e}.js`, import.meta.url)),
  (as.onIntersect = (t) =>
    t.forEach(({isIntersecting: t, target: e}) => {
      const i = e;
      Fi(i, ts, t, 'f'),
        ns(() => {
          Li(i, ts, 'f') && i.load();
        });
    })),
  (as.io = new IntersectionObserver(Qr.onIntersect)),
  (as.getters = new Map()),
  (as.instances = new Set()),
  Ni([Gi()], as.prototype, 'set', void 0),
  Ni([Gi({reflect: !0})], as.prototype, 'icon', void 0),
  Ni([Gi()], as.prototype, 'loading', void 0),
  Ni(
    [
      (function (t) {
        return Gi({...t, state: !0});
      })(),
    ],
    as.prototype,
    'content',
    void 0
  );
const ds = eo`:host([size=sm]) #container{--_size:var(--pf-global--icon--FontSize--sm, 10px)}:host([size=md]) #container{--_size:var(--pf-global--icon--FontSize--md, 18px)}:host([size=lg]) #container{--_size:var(--pf-global--icon--FontSize--lg, 24px)}:host([size=xl]) #container{--_size:var(--pf-global--icon--FontSize--xl, 54px)}#container,svg{width:var(--pf-icon--size,var(--_size));height:var(--pf-icon--size,var(--_size));min-width:var(--pf-icon--size,var(--_size));min-height:var(--pf-icon--size,var(--_size))}`;
let cs = class extends as {
  constructor() {
    super(...arguments), (this.size = 'sm');
  }
};
var hs;
(cs.styles = [...as.styles, ds]),
  (cs.defaultIconSet = 'fas'),
  Ni([Gi({reflect: !0})], cs.prototype, 'size', void 0),
  (cs = Ni([Yi('pf-icon')], cs));
const us = eo`:host{--pf-icon--size:var(--pf-c-accordion__toggle--IconSize, 10px);color:var(--pf-c-accordion__toggle--Color,var(--pf-global--Color--100,#151515));background-color:var(--pf-global--BackgroundColor--100,#fff)}:host([large]){--pf-c-accordion__toggle--PaddingTop:var(--pf-global--spacer--md, 1rem);--pf-c-accordion__toggle--PaddingRight:var(--pf-global--spacer--md, 1rem);--pf-c-accordion__toggle--PaddingBottom:var(--pf-global--spacer--md, 1rem);--pf-c-accordion__toggle--PaddingLeft:var(--pf-global--spacer--lg, 1.5rem);--pf-c-accordion__toggle--FontFamily:var(--pf-global--FontFamily--redhat-updated--heading--sans-serif,\n      "RedHatDisplayUpdated",\n      "Overpass",\n      overpass,\n      helvetica,\n      arial,\n      sans-serif\n    );--pf-c-accordion__toggle--FontSize:var(--pf-global--FontSize--xl, 1.25rem);--pf-c-accordion__toggle--hover-text--Color:var(--pf-global--Color--100, #151515);--pf-c-accordion__toggle--active-text--Color:var(--pf-global--Color--100, #151515);--pf-c-accordion__toggle--active-text--FontWeight:var(--pf-global--FontWeight--normal, 400);--pf-c-accordion__toggle--focus-text--Color:var(--pf-global--Color--100, #151515);--pf-c-accordion__toggle--focus-text--FontWeight:var(--pf-global--FontWeight--normal, 400);--pf-c-accordion__toggle--expanded-text--Color:var(--pf-global--Color--100, #151515);--pf-c-accordion__toggle--expanded-text--FontWeight:var(--pf-global--FontWeight--normal, 400);--pf-icon--size:var(--pf-c-accordion__toggle--IconSize, 12px)}#heading{font-weight:var(--pf-c-accordion__toggle--FontWeight,var(--pf-global--FontWeight--normal,400))}.toggle,.toggle:after,.toggle:before{background-color:var(--pf-c-accordion__toggle--BackgroundColor,transparent)}.icon{transition:var(--pf-c-accordion__toggle-icon--Transition, .2s ease-in 0s)}.toggle{padding:var(--pf-c-accordion__toggle--PaddingTop,var(--pf-global--spacer--md,.5rem)) var(--pf-c-accordion__toggle--PaddingRight,var(--pf-global--spacer--md,1rem)) var(--pf-c-accordion__toggle--PaddingBottom,var(--pf-global--spacer--sm,.5rem)) var(--pf-c-accordion__toggle--PaddingLeft,var(--pf-global--spacer--md,1rem));font-family:var(--pf-c-accordion__toggle--FontFamily,\n      var(--pf-global--FontFamily--redhat-updated--heading--sans-serif,\n        "RedHatTextUpdated",\n        helvetica,\n        arial,\n        sans-serif));font-size:var(--pf-c-accordion__toggle--FontSize, var(--pf-global--FontSize--lg, 1rem));font-weight:var(--pf-c-accordion__toggle--FontWeight,var(--pf-global--FontWeight--normal,400));color:var(--pf-c-accordion__toggle--Color,var(--pf-global--Color--100,#151515))}.toggle[aria-expanded=true]{--pf-c-accordion__toggle--after--BackgroundColor:var(\n      --pf-c-accordion__toggle--expanded--before--BackgroundColor,\n      var(\n        --pf-global--primary-color--100,\n        #0066cc\n      )\n    )}.toggle:after{top:var(--pf-c-accordion__toggle--before--Top,-1px);width:var(--pf-c-accordion__toggle--before--Width,var(--pf-global--BorderWidth--lg,3px));background-color:var(--pf-c-accordion__toggle--after--BackgroundColor,transparent)}span{max-width:var(--pf-c-accordion__toggle-text--MaxWidth,calc(100% - var(--pf-global--spacer--lg,1.5rem)))}.toggle[aria-expanded=true] .icon{rotate:var(--pf-c-accordion__toggle--expanded-icon--Rotate,90deg)}.toggle:active,.toggle:focus,.toggle:hover{background-color:var(--pf-c-accordion__toggle--active--BackgroundColor,var(--pf-global--BackgroundColor--200,#f0f0f0))}.toggle:active span,.toggle:focus span,.toggle:hover span{color:var(--pf-c-accordion__toggle--active-text--Color,var(--pf-global--link--Color,#06c))}.toggle:active span,.toggle:focus span{font-weight:var(--pf-c-accordion__toggle--active-text--FontWeight,var(--pf-global--FontWeight--semi-bold,700))}`;
let ps = class extends gr {
  constructor() {
    super(...arguments), hs.set(this, new Xr(this, 'accents', null));
  }
  renderAfterButton() {
    return Oo`${
      Li(this, hs, 'f').hasSlotted('accents')
        ? Oo`
      <span part="accents">
        <slot name="accents"></slot>
      </span>`
        : ''
    }
      <pf-icon part="icon"
                icon="${this.icon ?? 'angle-right'}"
                set="${this.iconSet ?? 'fas'}"
                class="icon"
                size="lg"></pf-icon>
    `;
  }
};
(hs = new WeakMap()),
  (ps.styles = [...gr.styles, us]),
  Ni([Gi({reflect: !0})], ps.prototype, 'bordered', void 0),
  Ni([Gi({reflect: !0})], ps.prototype, 'icon', void 0),
  Ni(
    [Gi({reflect: !0, attribute: 'icon-set'})],
    ps.prototype,
    'iconSet',
    void 0
  ),
  (ps = Ni([Yi('pf-accordion-header')], ps));
const fs = eo`:host{color:var(--pf-global--Color--100,#151515);background-color:var(--pf-c-accordion--BackgroundColor,var(--pf-global--BackgroundColor--light-100,#fff))}.body{padding:var(--pf-c-accordion__panel-body--PaddingTop,var(--pf-global--spacer--sm,.5rem)) var(--pf-c-accordion__panel-body--PaddingRight,var(--pf-global--spacer--md,1rem)) var(--pf-c-accordion__panel-body--PaddingBottom,var(--pf-global--spacer--sm,.5rem)) var(--pf-c-accordion__panel-body--PaddingLeft,var(--pf-global--spacer--md,1rem))}.body:after{width:var(--pf-c-accordion__panel-body--before--Width,var(--pf-global--BorderWidth--lg,3px));background-color:var(--pf-c-accordion__panel-body--before--BackgroundColor,transparent)}:host([large]){--pf-c-accordion__panel-body--PaddingTop:var(--pf-c-accordion--m-display-lg__expanded-content-body--PaddingTop, 0);--pf-c-accordion__panel-body--PaddingRight:var(--pf-c-accordion--m-display-lg__expanded-content-body--PaddingRight, 1rem);--pf-c-accordion__panel-body--PaddingBottom:var(--pf-c-accordion--m-display-lg__expanded-content-body--PaddingBottom, 1.5rem);--pf-c-accordion__panel-body--PaddingLeft:var(--pf-c-accordion--m-display-lg__expanded-content-body--PaddingLeft, 1.5rem);--pf-c-accordion__panel--FontSize:var(--pf-c-accordion--m-display-lg__expanded-content--FontSize, 1rem);--pf-c-accordion__panel--Color:var(--pf-c-accordion--m-display-lg__expanded-content--Color, #151515)}:host([large]) .body:last-child{--pf-c-accordion__panel-body--PaddingBottom:var(--pf-c-accordion--m-display-lg__expanded-content-body--last-child--PaddingBottom, 1.5rem)}.content{color:var(--pf-c-accordion__panel--Color,var(--pf-global--Color--dark-200,#6a6e73));font-size:var(--pf-c-accordion__panel--FontSize, var(--pf-global--FontSize--sm, .875rem))}:host([fixed]){max-height:var(--pf-c-accordion__panel--m-fixed--MaxHeight,9.375rem)}.content[expanded],:host([expanded]) .content{--pf-c-accordion__panel-body--before--BackgroundColor:var(\n      --pf-c-accordion__panel--content-body--before--BackgroundColor,\n      var(--pf-global--primary-color--100, #0066cc))}`;
let vs = class extends xr {};
(vs.styles = [...xr.styles, fs]),
  Ni([Gi({reflect: !0})], vs.prototype, 'bordered', void 0),
  (vs = Ni([Yi('pf-accordion-panel')], vs));
const ms = eo`:host{--accordion__bordered--Color:var(--rh-color-black-300, #d2d2d2);color:var(--pf-global--Color--100,#151515);background-color:var(--pf-global--BackgroundColor--100,#fff)}:host([bordered]) ::slotted(pf-accordion-header:first-child),:host([large]) ::slotted(pf-accordion-header:first-child){display:block;border-top:1px solid var(--accordion__bordered--Color);border-bottom:1px solid var(--accordion__bordered--Color)}:host([bordered]) ::slotted(pf-accordion-header:not(:first-child)),:host([large]) ::slotted(pf-accordion-header:not(:first-child)){display:block;border-bottom:1px solid var(--accordion__bordered--Color)}:host([bordered]) ::slotted(pf-accordion-header:is([expanded])),:host([large]) ::slotted(pf-accordion-header:is([expanded])){display:block;border-bottom:0}:host([bordered]) ::slotted(pf-accordion-panel:is([expanded])),:host([large]) ::slotted(pf-accordion-panel:is([expanded])){display:block;border-bottom:1px solid var(--accordion__bordered--Color)}`;
let gs = class extends Jr {
  constructor() {
    super(...arguments),
      (this.single = !1),
      (this.bordered = !1),
      (this.large = !1),
      (this.fixed = !1);
  }
  async firstUpdated() {
    let t = null;
    if (this.single) {
      const e = [...this.querySelectorAll('pf-accordion-header')],
        i = e.filter((t) => t.hasAttribute('expanded')).pop();
      i && (t = e.indexOf(i));
    }
    await super.firstUpdated(),
      null !== t &&
        this.headers.forEach((e, i) => {
          this.headers.at(i)?.toggleAttribute('expanded', i === t),
            this.panels.at(i)?.toggleAttribute('expanded', i === t);
        });
  }
  async expand(t, e) {
    if (-1 === t) return;
    const i = this.headers;
    this.single &&
      (await Promise.all([...i.map((t, e) => t.expanded && this.collapse(e))])),
      await super.expand(t, e);
  }
};
(gs.styles = [...Jr.styles, ms]),
  Ni([Gi({reflect: !0, type: Boolean})], gs.prototype, 'single', void 0),
  Ni([Gi({type: Boolean, reflect: !0})], gs.prototype, 'bordered', void 0),
  Ni(
    [
      (function (...t) {
        if (1 === t.length) {
          const [e] = t;
          return function (t, i) {
            t.constructor.addInitializer((t) => new qi(t)), Vi(t, i, e);
          };
        }
        {
          const [e, i] = t;
          e.constructor.addInitializer((t) => new qi(t)), Vi(e, i);
        }
      })(function () {
        [...this.headers, ...this.panels].forEach((t) =>
          t.toggleAttribute('large', this.large)
        );
      }),
      Gi({type: Boolean, reflect: !0}),
    ],
    gs.prototype,
    'large',
    void 0
  ),
  Ni([Gi({type: Boolean, reflect: !0})], gs.prototype, 'fixed', void 0),
  (gs = Ni([Yi('pf-accordion')], gs));
var bs = function (t, e, i, o) {
  for (
    var r,
      s = arguments.length,
      n =
        s < 3
          ? e
          : null === o
          ? (o = Object.getOwnPropertyDescriptor(e, i))
          : o,
      l = t.length - 1;
    l >= 0;
    l--
  )
    (r = t[l]) && (n = (s < 3 ? r(n) : s > 3 ? r(e, i, n) : r(e, i)) || n);
  return s > 3 && n && Object.defineProperty(e, i, n), n;
};
let xs = class extends rt {
  render() {
    return W`
      <h1>点数計算</h1>

      <md-outlined-select required id="gameType" class="width-50" @change="${this._changeGame}">
          <md-select-option selected value="四麻">
            <div slot="headline">四麻</div>
          </md-select-option>
          <md-select-option value="三麻">
            <div slot="headline">三麻</div>
          </md-select-option>
        </md-outlined-select>

      <pf-accordion>
        <pf-accordion-header>
          <h2>設定</h2>
        </pf-accordion-header>
        <pf-accordion-panel>

          <div>
            <md-outlined-text-field
              id="initialPoint"
              class="width-50"
              label="初期点"
              value="25000"
              type="number"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="oka"
              class="width-50"
              label="オカ"
              value="30000"
              type="number"
              required
            ></md-outlined-text-field>
          </div>
          <div>
            <md-outlined-text-field
              id="firstUma"
              class="width-50"
              label="1着"
              value="50"
              type="number"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="secondUma"
              class="width-50"
              label="2着"
              value="10"
              type="number"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="thirdUma"
              class="width-50"
              label="3着"
              value="-10"
              type="number"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="fourthUma"
              class="width-50"
              label="4着"
              value="-30"
              type="number"
              required
            ></md-outlined-text-field>
          </div>
        </pf-accordion-panel>
      </pf-accordion>
      <div class="results">
        <h2>結果</h2>
        <div>
          <label for="firstResult">1位</label>
          <md-outlined-text-field id="firstResult" class="width-50" type="number" @blur="${this._calcFirstScore}">
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field id="firstScore" class="width-50" type="number" disabled>
          </md-outlined-text-field>
        </div>
        <div>
          <label for="secondResult">2位</label>
          <md-outlined-text-field id="secondResult" class="width-50" type="number" @blur="${this._calcSecondScore}">
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field id="secondScore" class="width-50" disabled>
          </md-outlined-text-field>
        </div>
        <div>
          <label for="thirdResult">3位</label>
          <md-outlined-text-field id="thirdResult" class="width-50" type="number" @blur="${this._calcThirdScore}">
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field id="thirdScore" class="width-50" disabled>
          </md-outlined-text-field>
        </div>
        <div>
          <label for="fourthResult">4位</label>
          <md-outlined-text-field id="fourthResult" class="width-50" type="number" @blur="${this._calcFourthScore}">
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field id="fourthScore" class="width-50" disabled>
          </md-outlined-text-field>
        </div>
      </div>
    `;
  }
  _calcFirstScore() {
    const t = this.shadowRoot?.getElementById('oka'),
      e = this.shadowRoot?.getElementById('firstUma'),
      i = this.shadowRoot?.getElementById('firstResult'),
      o = (Number(i?.value) - Number(t?.value)) / 1e3 + Number(e?.value),
      r = this.shadowRoot?.getElementById('firstScore');
    r.value = String(o);
  }
  _calcSecondScore() {
    const t = this.shadowRoot?.getElementById('oka'),
      e = this.shadowRoot?.getElementById('secondUma'),
      i = this.shadowRoot?.getElementById('secondResult'),
      o = (Number(i?.value) - Number(t?.value)) / 1e3 + Number(e?.value),
      r = this.shadowRoot?.getElementById('secondScore');
    r.value = String(o);
  }
  _calcThirdScore() {
    const t = this.shadowRoot?.getElementById('oka'),
      e = this.shadowRoot?.getElementById('thirdUma'),
      i = this.shadowRoot?.getElementById('thirdResult'),
      o = (Number(i?.value) - Number(t?.value)) / 1e3 + Number(e?.value),
      r = this.shadowRoot?.getElementById('thirdScore');
    r.value = String(o);
  }
  _calcFourthScore() {
    const t = this.shadowRoot?.getElementById('oka'),
      e = this.shadowRoot?.getElementById('fourthUma'),
      i = this.shadowRoot?.getElementById('fourthResult'),
      o = (Number(i?.value) - Number(t?.value)) / 1e3 + Number(e?.value),
      r = this.shadowRoot?.getElementById('fourthScore');
    r.value = String(o);
  }
  _changeGame() {
    const t = this.shadowRoot?.getElementById('gameType');
    '三麻' === t.value
      ? this._changeSettings('35000', '40000', '15', '0', '-15', '0', !0)
      : this._changeSettings('25000', '30000', '50', '10', '-10', '-30', !1);
  }
  _changeSettings(t, e, i, o, r, s, n) {
    const l = this.shadowRoot?.getElementById('initialPoint');
    l.value = t;
    const a = this.shadowRoot?.getElementById('oka');
    a.value = e;
    const d = this.shadowRoot?.getElementById('firstUma');
    d.value = i;
    const c = this.shadowRoot?.getElementById('secondUma');
    c.value = o;
    const h = this.shadowRoot?.getElementById('thirdUma');
    h.value = r;
    const u = this.shadowRoot?.getElementById('fourthUma');
    (u.value = s), (u.disabled = n);
    const p = this.shadowRoot?.getElementById('fourthResult');
    (p.value = ''), (p.disabled = n);
  }
};
(xs.styles = [
  s`
        .width-50 {
          width: calc(50% - 3em);
          margin-bottom: 1em;
        }
        .results {
          margin-top: 2em;
          margin-left: 1em;
        }
      `,
]),
  (xs = bs([nt('mahjong-calc')], xs));
export {xs as MahjongCalc};
