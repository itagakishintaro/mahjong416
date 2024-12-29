import {i as t, t as e, h as i, k as s} from './custom-element-6f1a92a3.js';
import {n, e as r} from './select-option-ec247a15.js';
import {o} from './map-7f5238f0.js';
import {g as h, c as a, d as c} from './firestore-724ae668.js';
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function l(t) {
  return (t + 0.5) | 0;
}
const u = (t, e, i) => Math.max(Math.min(t, i), e);
function f(t) {
  return u(l(2.55 * t), 0, 255);
}
function d(t) {
  return u(l(255 * t), 0, 255);
}
function p(t) {
  return u(l(t / 2.55) / 100, 0, 1);
}
function b(t) {
  return u(l(100 * t), 0, 100);
}
const g = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  m = [...'0123456789ABCDEF'],
  v = (t) => m[15 & t],
  x = (t) => m[(240 & t) >> 4] + m[15 & t],
  y = (t) => (240 & t) >> 4 == (15 & t);
function M(t) {
  var e = ((t) => y(t.r) && y(t.g) && y(t.b) && y(t.a))(t) ? v : x;
  return t
    ? '#' + e(t.r) + e(t.g) + e(t.b) + ((t, e) => (t < 255 ? e(t) : ''))(t.a, e)
    : void 0;
}
const w =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function _(t, e, i) {
  const s = e * Math.min(i, 1 - i),
    n = (e, n = (e + t / 30) % 12) =>
      i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1);
  return [n(0), n(8), n(4)];
}
function k(t, e, i) {
  const s = (s, n = (s + t / 60) % 6) =>
    i - i * e * Math.max(Math.min(n, 4 - n, 1), 0);
  return [s(5), s(3), s(1)];
}
function O(t, e, i) {
  const s = _(t, 1, 0.5);
  let n;
  for (e + i > 1 && ((n = 1 / (e + i)), (e *= n), (i *= n)), n = 0; n < 3; n++)
    (s[n] *= 1 - e - i), (s[n] += e);
  return s;
}
function S(t) {
  const e = t.r / 255,
    i = t.g / 255,
    s = t.b / 255,
    n = Math.max(e, i, s),
    r = Math.min(e, i, s),
    o = (n + r) / 2;
  let h, a, c;
  return (
    n !== r &&
      ((c = n - r),
      (a = o > 0.5 ? c / (2 - n - r) : c / (n + r)),
      (h = (function (t, e, i, s, n) {
        return t === n
          ? (e - i) / s + (e < i ? 6 : 0)
          : e === n
          ? (i - t) / s + 2
          : (t - e) / s + 4;
      })(e, i, s, c, n)),
      (h = 60 * h + 0.5)),
    [0 | h, a || 0, o]
  );
}
function D(t, e, i, s) {
  return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(d);
}
function A(t, e, i) {
  return D(_, t, e, i);
}
function C(t) {
  return ((t % 360) + 360) % 360;
}
function R(t) {
  const e = w.exec(t);
  let i,
    s = 255;
  if (!e) return;
  e[5] !== i && (s = e[6] ? f(+e[5]) : d(+e[5]));
  const n = C(+e[2]),
    r = +e[3] / 100,
    o = +e[4] / 100;
  return (
    (i =
      'hwb' === e[1]
        ? (function (t, e, i) {
            return D(O, t, e, i);
          })(n, r, o)
        : 'hsv' === e[1]
        ? (function (t, e, i) {
            return D(k, t, e, i);
          })(n, r, o)
        : A(n, r, o)),
    {r: i[0], g: i[1], b: i[2], a: s}
  );
}
const j = {
    x: 'dark',
    Z: 'light',
    Y: 're',
    X: 'blu',
    W: 'gr',
    V: 'medium',
    U: 'slate',
    A: 'ee',
    T: 'ol',
    S: 'or',
    B: 'ra',
    C: 'lateg',
    D: 'ights',
    R: 'in',
    Q: 'turquois',
    E: 'hi',
    P: 'ro',
    O: 'al',
    N: 'le',
    M: 'de',
    L: 'yello',
    F: 'en',
    K: 'ch',
    G: 'arks',
    H: 'ea',
    I: 'ightg',
    J: 'wh',
  },
  L = {
    OiceXe: 'f0f8ff',
    antiquewEte: 'faebd7',
    aqua: 'ffff',
    aquamarRe: '7fffd4',
    azuY: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '0',
    blanKedOmond: 'ffebcd',
    Xe: 'ff',
    XeviTet: '8a2be2',
    bPwn: 'a52a2a',
    burlywood: 'deb887',
    caMtXe: '5f9ea0',
    KartYuse: '7fff00',
    KocTate: 'd2691e',
    cSO: 'ff7f50',
    cSnflowerXe: '6495ed',
    cSnsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: 'ffff',
    xXe: '8b',
    xcyan: '8b8b',
    xgTMnPd: 'b8860b',
    xWay: 'a9a9a9',
    xgYF: '6400',
    xgYy: 'a9a9a9',
    xkhaki: 'bdb76b',
    xmagFta: '8b008b',
    xTivegYF: '556b2f',
    xSange: 'ff8c00',
    xScEd: '9932cc',
    xYd: '8b0000',
    xsOmon: 'e9967a',
    xsHgYF: '8fbc8f',
    xUXe: '483d8b',
    xUWay: '2f4f4f',
    xUgYy: '2f4f4f',
    xQe: 'ced1',
    xviTet: '9400d3',
    dAppRk: 'ff1493',
    dApskyXe: 'bfff',
    dimWay: '696969',
    dimgYy: '696969',
    dodgerXe: '1e90ff',
    fiYbrick: 'b22222',
    flSOwEte: 'fffaf0',
    foYstWAn: '228b22',
    fuKsia: 'ff00ff',
    gaRsbSo: 'dcdcdc',
    ghostwEte: 'f8f8ff',
    gTd: 'ffd700',
    gTMnPd: 'daa520',
    Way: '808080',
    gYF: '8000',
    gYFLw: 'adff2f',
    gYy: '808080',
    honeyMw: 'f0fff0',
    hotpRk: 'ff69b4',
    RdianYd: 'cd5c5c',
    Rdigo: '4b0082',
    ivSy: 'fffff0',
    khaki: 'f0e68c',
    lavFMr: 'e6e6fa',
    lavFMrXsh: 'fff0f5',
    lawngYF: '7cfc00',
    NmoncEffon: 'fffacd',
    ZXe: 'add8e6',
    ZcSO: 'f08080',
    Zcyan: 'e0ffff',
    ZgTMnPdLw: 'fafad2',
    ZWay: 'd3d3d3',
    ZgYF: '90ee90',
    ZgYy: 'd3d3d3',
    ZpRk: 'ffb6c1',
    ZsOmon: 'ffa07a',
    ZsHgYF: '20b2aa',
    ZskyXe: '87cefa',
    ZUWay: '778899',
    ZUgYy: '778899',
    ZstAlXe: 'b0c4de',
    ZLw: 'ffffe0',
    lime: 'ff00',
    limegYF: '32cd32',
    lRF: 'faf0e6',
    magFta: 'ff00ff',
    maPon: '800000',
    VaquamarRe: '66cdaa',
    VXe: 'cd',
    VScEd: 'ba55d3',
    VpurpN: '9370db',
    VsHgYF: '3cb371',
    VUXe: '7b68ee',
    VsprRggYF: 'fa9a',
    VQe: '48d1cc',
    VviTetYd: 'c71585',
    midnightXe: '191970',
    mRtcYam: 'f5fffa',
    mistyPse: 'ffe4e1',
    moccasR: 'ffe4b5',
    navajowEte: 'ffdead',
    navy: '80',
    Tdlace: 'fdf5e6',
    Tive: '808000',
    TivedBb: '6b8e23',
    Sange: 'ffa500',
    SangeYd: 'ff4500',
    ScEd: 'da70d6',
    pOegTMnPd: 'eee8aa',
    pOegYF: '98fb98',
    pOeQe: 'afeeee',
    pOeviTetYd: 'db7093',
    papayawEp: 'ffefd5',
    pHKpuff: 'ffdab9',
    peru: 'cd853f',
    pRk: 'ffc0cb',
    plum: 'dda0dd',
    powMrXe: 'b0e0e6',
    purpN: '800080',
    YbeccapurpN: '663399',
    Yd: 'ff0000',
    Psybrown: 'bc8f8f',
    PyOXe: '4169e1',
    saddNbPwn: '8b4513',
    sOmon: 'fa8072',
    sandybPwn: 'f4a460',
    sHgYF: '2e8b57',
    sHshell: 'fff5ee',
    siFna: 'a0522d',
    silver: 'c0c0c0',
    skyXe: '87ceeb',
    UXe: '6a5acd',
    UWay: '708090',
    UgYy: '708090',
    snow: 'fffafa',
    sprRggYF: 'ff7f',
    stAlXe: '4682b4',
    tan: 'd2b48c',
    teO: '8080',
    tEstN: 'd8bfd8',
    tomato: 'ff6347',
    Qe: '40e0d0',
    viTet: 'ee82ee',
    JHt: 'f5deb3',
    wEte: 'ffffff',
    wEtesmoke: 'f5f5f5',
    Lw: 'ffff00',
    LwgYF: '9acd32',
  };
let E;
function P(t) {
  E ||
    ((E = (function () {
      const t = {},
        e = Object.keys(L),
        i = Object.keys(j);
      let s, n, r, o, h;
      for (s = 0; s < e.length; s++) {
        for (o = h = e[s], n = 0; n < i.length; n++)
          (r = i[n]), (h = h.replace(r, j[r]));
        (r = parseInt(L[o], 16)),
          (t[h] = [(r >> 16) & 255, (r >> 8) & 255, 255 & r]);
      }
      return t;
    })()),
    (E.transparent = [0, 0, 0, 0]));
  const e = E[t.toLowerCase()];
  return e && {r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255};
}
const N =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
const T = (t) =>
    t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055,
  F = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
function I(t, e, i) {
  if (t) {
    let s = S(t);
    (s[e] = Math.max(0, Math.min(s[e] + s[e] * i, 0 === e ? 360 : 1))),
      (s = A(s)),
      (t.r = s[0]),
      (t.g = s[1]),
      (t.b = s[2]);
  }
}
function z(t, e) {
  return t ? Object.assign(e || {}, t) : t;
}
function $(t) {
  var e = {r: 0, g: 0, b: 0, a: 255};
  return (
    Array.isArray(t)
      ? t.length >= 3 &&
        ((e = {r: t[0], g: t[1], b: t[2], a: 255}),
        t.length > 3 && (e.a = d(t[3])))
      : ((e = z(t, {r: 0, g: 0, b: 0, a: 1})).a = d(e.a)),
    e
  );
}
function W(t) {
  return 'r' === t.charAt(0)
    ? (function (t) {
        const e = N.exec(t);
        let i,
          s,
          n,
          r = 255;
        if (e) {
          if (e[7] !== i) {
            const t = +e[7];
            r = e[8] ? f(t) : u(255 * t, 0, 255);
          }
          return (
            (i = +e[1]),
            (s = +e[3]),
            (n = +e[5]),
            (i = 255 & (e[2] ? f(i) : u(i, 0, 255))),
            (s = 255 & (e[4] ? f(s) : u(s, 0, 255))),
            (n = 255 & (e[6] ? f(n) : u(n, 0, 255))),
            {r: i, g: s, b: n, a: r}
          );
        }
      })(t)
    : R(t);
}
class B {
  constructor(t) {
    if (t instanceof B) return t;
    const e = typeof t;
    let i;
    var s, n, r;
    'object' === e
      ? (i = $(t))
      : 'string' === e &&
        ((r = (s = t).length),
        '#' === s[0] &&
          (4 === r || 5 === r
            ? (n = {
                r: 255 & (17 * g[s[1]]),
                g: 255 & (17 * g[s[2]]),
                b: 255 & (17 * g[s[3]]),
                a: 5 === r ? 17 * g[s[4]] : 255,
              })
            : (7 !== r && 9 !== r) ||
              (n = {
                r: (g[s[1]] << 4) | g[s[2]],
                g: (g[s[3]] << 4) | g[s[4]],
                b: (g[s[5]] << 4) | g[s[6]],
                a: 9 === r ? (g[s[7]] << 4) | g[s[8]] : 255,
              })),
        (i = n || P(t) || W(t))),
      (this._rgb = i),
      (this._valid = !!i);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = z(this._rgb);
    return t && (t.a = p(t.a)), t;
  }
  set rgb(t) {
    this._rgb = $(t);
  }
  rgbString() {
    return this._valid
      ? (t = this._rgb) &&
          (t.a < 255
            ? `rgba(${t.r}, ${t.g}, ${t.b}, ${p(t.a)})`
            : `rgb(${t.r}, ${t.g}, ${t.b})`)
      : void 0;
    var t;
  }
  hexString() {
    return this._valid ? M(this._rgb) : void 0;
  }
  hslString() {
    return this._valid
      ? (function (t) {
          if (!t) return;
          const e = S(t),
            i = e[0],
            s = b(e[1]),
            n = b(e[2]);
          return t.a < 255
            ? `hsla(${i}, ${s}%, ${n}%, ${p(t.a)})`
            : `hsl(${i}, ${s}%, ${n}%)`;
        })(this._rgb)
      : void 0;
  }
  mix(t, e) {
    if (t) {
      const i = this.rgb,
        s = t.rgb;
      let n;
      const r = e === n ? 0.5 : e,
        o = 2 * r - 1,
        h = i.a - s.a,
        a = ((o * h == -1 ? o : (o + h) / (1 + o * h)) + 1) / 2;
      (n = 1 - a),
        (i.r = 255 & (a * i.r + n * s.r + 0.5)),
        (i.g = 255 & (a * i.g + n * s.g + 0.5)),
        (i.b = 255 & (a * i.b + n * s.b + 0.5)),
        (i.a = r * i.a + (1 - r) * s.a),
        (this.rgb = i);
    }
    return this;
  }
  interpolate(t, e) {
    return (
      t &&
        (this._rgb = (function (t, e, i) {
          const s = F(p(t.r)),
            n = F(p(t.g)),
            r = F(p(t.b));
          return {
            r: d(T(s + i * (F(p(e.r)) - s))),
            g: d(T(n + i * (F(p(e.g)) - n))),
            b: d(T(r + i * (F(p(e.b)) - r))),
            a: t.a + i * (e.a - t.a),
          };
        })(this._rgb, t._rgb, e)),
      this
    );
  }
  clone() {
    return new B(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = d(t)), this;
  }
  clearer(t) {
    return (this._rgb.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      e = l(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
    return (t.r = t.g = t.b = e), this;
  }
  opaquer(t) {
    return (this._rgb.a *= 1 + t), this;
  }
  negate() {
    const t = this._rgb;
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
  }
  lighten(t) {
    return I(this._rgb, 2, t), this;
  }
  darken(t) {
    return I(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return I(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return I(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return (
      (function (t, e) {
        var i = S(t);
        (i[0] = C(i[0] + e)),
          (i = A(i)),
          (t.r = i[0]),
          (t.g = i[1]),
          (t.b = i[2]);
      })(this._rgb, t),
      this
    );
  }
}
/*!
 * Chart.js v4.4.6
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ function Y() {}
const H = (() => {
  let t = 0;
  return () => t++;
})();
function V(t) {
  return null == t;
}
function U(t) {
  if (Array.isArray && Array.isArray(t)) return !0;
  const e = Object.prototype.toString.call(t);
  return '[object' === e.slice(0, 7) && 'Array]' === e.slice(-6);
}
function X(t) {
  return null !== t && '[object Object]' === Object.prototype.toString.call(t);
}
function Z(t) {
  return ('number' == typeof t || t instanceof Number) && isFinite(+t);
}
function K(t, e) {
  return Z(t) ? t : e;
}
function q(t, e) {
  return void 0 === t ? e : t;
}
const Q = (t, e) =>
  'string' == typeof t && t.endsWith('%') ? (parseFloat(t) / 100) * e : +t;
function G(t, e, i) {
  if (t && 'function' == typeof t.call) return t.apply(i, e);
}
function J(t, e, i, s) {
  let n, r, o;
  if (U(t))
    if (((r = t.length), s)) for (n = r - 1; n >= 0; n--) e.call(i, t[n], n);
    else for (n = 0; n < r; n++) e.call(i, t[n], n);
  else if (X(t))
    for (o = Object.keys(t), r = o.length, n = 0; n < r; n++)
      e.call(i, t[o[n]], o[n]);
}
function tt(t, e) {
  let i, s, n, r;
  if (!t || !e || t.length !== e.length) return !1;
  for (i = 0, s = t.length; i < s; ++i)
    if (
      ((n = t[i]),
      (r = e[i]),
      n.datasetIndex !== r.datasetIndex || n.index !== r.index)
    )
      return !1;
  return !0;
}
function et(t) {
  if (U(t)) return t.map(et);
  if (X(t)) {
    const e = Object.create(null),
      i = Object.keys(t),
      s = i.length;
    let n = 0;
    for (; n < s; ++n) e[i[n]] = et(t[i[n]]);
    return e;
  }
  return t;
}
function it(t) {
  return -1 === ['__proto__', 'prototype', 'constructor'].indexOf(t);
}
function st(t, e, i, s) {
  if (!it(t)) return;
  const n = e[t],
    r = i[t];
  X(n) && X(r) ? nt(n, r, s) : (e[t] = et(r));
}
function nt(t, e, i) {
  const s = U(e) ? e : [e],
    n = s.length;
  if (!X(t)) return t;
  const r = (i = i || {}).merger || st;
  let o;
  for (let e = 0; e < n; ++e) {
    if (((o = s[e]), !X(o))) continue;
    const n = Object.keys(o);
    for (let e = 0, s = n.length; e < s; ++e) r(n[e], t, o, i);
  }
  return t;
}
function rt(t, e) {
  return nt(t, e, {merger: ot});
}
function ot(t, e, i) {
  if (!it(t)) return;
  const s = e[t],
    n = i[t];
  X(s) && X(n)
    ? rt(s, n)
    : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = et(n));
}
const ht = {'': (t) => t, x: (t) => t.x, y: (t) => t.y};
function at(t, e) {
  const i =
    ht[e] ||
    (ht[e] = (function (t) {
      const e = (function (t) {
        const e = t.split('.'),
          i = [];
        let s = '';
        for (const t of e)
          (s += t),
            s.endsWith('\\')
              ? (s = s.slice(0, -1) + '.')
              : (i.push(s), (s = ''));
        return i;
      })(t);
      return (t) => {
        for (const i of e) {
          if ('' === i) break;
          t = t && t[i];
        }
        return t;
      };
    })(e));
  return i(t);
}
function ct(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
const lt = (t) => void 0 !== t,
  ut = (t) => 'function' == typeof t,
  ft = (t, e) => {
    if (t.size !== e.size) return !1;
    for (const i of t) if (!e.has(i)) return !1;
    return !0;
  };
const dt = Math.PI,
  pt = 2 * dt,
  bt = pt + dt,
  gt = Number.POSITIVE_INFINITY,
  mt = dt / 180,
  vt = dt / 2,
  xt = dt / 4,
  yt = (2 * dt) / 3,
  Mt = Math.log10,
  wt = Math.sign;
function _t(t, e, i) {
  return Math.abs(t - e) < i;
}
function kt(t) {
  const e = Math.round(t);
  t = _t(t, e, t / 1e3) ? e : t;
  const i = Math.pow(10, Math.floor(Mt(t))),
    s = t / i;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i;
}
function Ot(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function St(t, e, i) {
  let s, n, r;
  for (s = 0, n = t.length; s < n; s++)
    (r = t[s][i]),
      isNaN(r) || ((e.min = Math.min(e.min, r)), (e.max = Math.max(e.max, r)));
}
function Dt(t) {
  return t * (dt / 180);
}
function At(t) {
  return t * (180 / dt);
}
function Ct(t) {
  if (!Z(t)) return;
  let e = 1,
    i = 0;
  for (; Math.round(t * e) / e !== t; ) (e *= 10), i++;
  return i;
}
function Rt(t, e) {
  const i = e.x - t.x,
    s = e.y - t.y,
    n = Math.sqrt(i * i + s * s);
  let r = Math.atan2(s, i);
  return r < -0.5 * dt && (r += pt), {angle: r, distance: n};
}
function jt(t, e) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Lt(t, e) {
  return ((t - e + bt) % pt) - dt;
}
function Et(t) {
  return ((t % pt) + pt) % pt;
}
function Pt(t, e, i, s) {
  const n = Et(t),
    r = Et(e),
    o = Et(i),
    h = Et(r - n),
    a = Et(o - n),
    c = Et(n - r),
    l = Et(n - o);
  return n === r || n === o || (s && r === o) || (h > a && c < l);
}
function Nt(t, e, i) {
  return Math.max(e, Math.min(i, t));
}
function Tt(t, e, i, s = 1e-6) {
  return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s;
}
function Ft(t, e, i) {
  i = i || ((i) => t[i] < e);
  let s,
    n = t.length - 1,
    r = 0;
  for (; n - r > 1; ) (s = (r + n) >> 1), i(s) ? (r = s) : (n = s);
  return {lo: r, hi: n};
}
const It = (t, e, i, s) =>
    Ft(
      t,
      i,
      s
        ? (s) => {
            const n = t[s][e];
            return n < i || (n === i && t[s + 1][e] === i);
          }
        : (s) => t[s][e] < i
    ),
  zt = (t, e, i) => Ft(t, i, (s) => t[s][e] >= i);
const $t = ['push', 'pop', 'shift', 'splice', 'unshift'];
function Wt(t, e) {
  const i = t._chartjs;
  if (!i) return;
  const s = i.listeners,
    n = s.indexOf(e);
  -1 !== n && s.splice(n, 1),
    s.length > 0 ||
      ($t.forEach((e) => {
        delete t[e];
      }),
      delete t._chartjs);
}
function Bt(t) {
  const e = new Set(t);
  return e.size === t.length ? t : Array.from(e);
}
const Yt =
  'undefined' == typeof window
    ? function (t) {
        return t();
      }
    : window.requestAnimationFrame;
function Ht(t, e) {
  let i = [],
    s = !1;
  return function (...n) {
    (i = n),
      s ||
        ((s = !0),
        Yt.call(window, () => {
          (s = !1), t.apply(e, i);
        }));
  };
}
const Vt = (t) => ('start' === t ? 'left' : 'end' === t ? 'right' : 'center'),
  Ut = (t, e, i) => ('start' === t ? e : 'end' === t ? i : (e + i) / 2);
function Xt(t, e, i) {
  const s = e.length;
  let n = 0,
    r = s;
  if (t._sorted) {
    const {iScale: o, _parsed: h} = t,
      a = o.axis,
      {min: c, max: l, minDefined: u, maxDefined: f} = o.getUserBounds();
    u &&
      (n = Nt(
        Math.min(It(h, a, c).lo, i ? s : It(e, a, o.getPixelForValue(c)).lo),
        0,
        s - 1
      )),
      (r = f
        ? Nt(
            Math.max(
              It(h, o.axis, l, !0).hi + 1,
              i ? 0 : It(e, a, o.getPixelForValue(l), !0).hi + 1
            ),
            n,
            s
          ) - n
        : s - n);
  }
  return {start: n, count: r};
}
function Zt(t) {
  const {xScale: e, yScale: i, _scaleRanges: s} = t,
    n = {xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max};
  if (!s) return (t._scaleRanges = n), !0;
  const r =
    s.xmin !== e.min ||
    s.xmax !== e.max ||
    s.ymin !== i.min ||
    s.ymax !== i.max;
  return Object.assign(s, n), r;
}
const Kt = (t) => 0 === t || 1 === t,
  qt = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * pt) / i),
  Qt = (t, e, i) => Math.pow(2, -10 * t) * Math.sin(((t - e) * pt) / i) + 1,
  Gt = {
    linear: (t) => t,
    easeInQuad: (t) => t * t,
    easeOutQuad: (t) => -t * (t - 2),
    easeInOutQuad: (t) =>
      (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
    easeInCubic: (t) => t * t * t,
    easeOutCubic: (t) => (t -= 1) * t * t + 1,
    easeInOutCubic: (t) =>
      (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
    easeInQuart: (t) => t * t * t * t,
    easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
    easeInOutQuart: (t) =>
      (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
    easeInQuint: (t) => t * t * t * t * t,
    easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
    easeInOutQuint: (t) =>
      (t /= 0.5) < 1
        ? 0.5 * t * t * t * t * t
        : 0.5 * ((t -= 2) * t * t * t * t + 2),
    easeInSine: (t) => 1 - Math.cos(t * vt),
    easeOutSine: (t) => Math.sin(t * vt),
    easeInOutSine: (t) => -0.5 * (Math.cos(dt * t) - 1),
    easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
    easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
    easeInOutExpo: (t) =>
      Kt(t)
        ? t
        : t < 0.5
        ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
        : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
    easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
    easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
    easeInOutCirc: (t) =>
      (t /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - t * t) - 1)
        : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
    easeInElastic: (t) => (Kt(t) ? t : qt(t, 0.075, 0.3)),
    easeOutElastic: (t) => (Kt(t) ? t : Qt(t, 0.075, 0.3)),
    easeInOutElastic(t) {
      const e = 0.1125;
      return Kt(t)
        ? t
        : t < 0.5
        ? 0.5 * qt(2 * t, e, 0.45)
        : 0.5 + 0.5 * Qt(2 * t - 1, e, 0.45);
    },
    easeInBack(t) {
      const e = 1.70158;
      return t * t * ((e + 1) * t - e);
    },
    easeOutBack(t) {
      const e = 1.70158;
      return (t -= 1) * t * ((e + 1) * t + e) + 1;
    },
    easeInOutBack(t) {
      let e = 1.70158;
      return (t /= 0.5) < 1
        ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
        : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
    },
    easeInBounce: (t) => 1 - Gt.easeOutBounce(1 - t),
    easeOutBounce(t) {
      const e = 7.5625,
        i = 2.75;
      return t < 1 / i
        ? e * t * t
        : t < 2 / i
        ? e * (t -= 1.5 / i) * t + 0.75
        : t < 2.5 / i
        ? e * (t -= 2.25 / i) * t + 0.9375
        : e * (t -= 2.625 / i) * t + 0.984375;
    },
    easeInOutBounce: (t) =>
      t < 0.5
        ? 0.5 * Gt.easeInBounce(2 * t)
        : 0.5 * Gt.easeOutBounce(2 * t - 1) + 0.5,
  };
function Jt(t) {
  if (t && 'object' == typeof t) {
    const e = t.toString();
    return '[object CanvasPattern]' === e || '[object CanvasGradient]' === e;
  }
  return !1;
}
function te(t) {
  return Jt(t) ? t : new B(t);
}
function ee(t) {
  return Jt(t) ? t : new B(t).saturate(0.5).darken(0.1).hexString();
}
const ie = ['x', 'y', 'borderWidth', 'radius', 'tension'],
  se = ['color', 'borderColor', 'backgroundColor'];
const ne = new Map();
function re(t, e, i) {
  return (function (t, e) {
    e = e || {};
    const i = t + JSON.stringify(e);
    let s = ne.get(i);
    return s || ((s = new Intl.NumberFormat(t, e)), ne.set(i, s)), s;
  })(e, i).format(t);
}
const oe = {
  values: (t) => (U(t) ? t : '' + t),
  numeric(t, e, i) {
    if (0 === t) return '0';
    const s = this.chart.options.locale;
    let n,
      r = t;
    if (i.length > 1) {
      const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
      (e < 1e-4 || e > 1e15) && (n = 'scientific'),
        (r = (function (t, e) {
          let i =
            e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
          Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
          return i;
        })(t, i));
    }
    const o = Mt(Math.abs(r)),
      h = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0),
      a = {notation: n, minimumFractionDigits: h, maximumFractionDigits: h};
    return Object.assign(a, this.options.ticks.format), re(t, s, a);
  },
  logarithmic(t, e, i) {
    if (0 === t) return '0';
    const s = i[e].significand || t / Math.pow(10, Math.floor(Mt(t)));
    return [1, 2, 3, 5, 10, 15].includes(s) || e > 0.8 * i.length
      ? oe.numeric.call(this, t, e, i)
      : '';
  },
};
var he = {formatters: oe};
const ae = Object.create(null),
  ce = Object.create(null);
function le(t, e) {
  if (!e) return t;
  const i = e.split('.');
  for (let e = 0, s = i.length; e < s; ++e) {
    const s = i[e];
    t = t[s] || (t[s] = Object.create(null));
  }
  return t;
}
function ue(t, e, i) {
  return 'string' == typeof e ? nt(le(t, e), i) : nt(le(t, ''), e);
}
class fe {
  constructor(t, e) {
    (this.animation = void 0),
      (this.backgroundColor = 'rgba(0,0,0,0.1)'),
      (this.borderColor = 'rgba(0,0,0,0.1)'),
      (this.color = '#666'),
      (this.datasets = {}),
      (this.devicePixelRatio = (t) => t.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        'mousemove',
        'mouseout',
        'click',
        'touchstart',
        'touchmove',
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: 'normal',
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (t, e) => ee(e.backgroundColor)),
      (this.hoverBorderColor = (t, e) => ee(e.borderColor)),
      (this.hoverColor = (t, e) => ee(e.color)),
      (this.indexAxis = 'x'),
      (this.interaction = {
        mode: 'nearest',
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(e);
  }
  set(t, e) {
    return ue(this, t, e);
  }
  get(t) {
    return le(this, t);
  }
  describe(t, e) {
    return ue(ce, t, e);
  }
  override(t, e) {
    return ue(ae, t, e);
  }
  route(t, e, i, s) {
    const n = le(this, t),
      r = le(this, i),
      o = '_' + e;
    Object.defineProperties(n, {
      [o]: {value: n[e], writable: !0},
      [e]: {
        enumerable: !0,
        get() {
          const t = this[o],
            e = r[s];
          return X(t) ? Object.assign({}, e, t) : q(t, e);
        },
        set(t) {
          this[o] = t;
        },
      },
    });
  }
  apply(t) {
    t.forEach((t) => t(this));
  }
}
var de = new fe(
  {
    _scriptable: (t) => !t.startsWith('on'),
    _indexable: (t) => 'events' !== t,
    hover: {_fallback: 'interaction'},
    interaction: {_scriptable: !1, _indexable: !1},
  },
  [
    function (t) {
      t.set('animation', {
        delay: void 0,
        duration: 1e3,
        easing: 'easeOutQuart',
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0,
      }),
        t.describe('animation', {
          _fallback: !1,
          _indexable: !1,
          _scriptable: (t) =>
            'onProgress' !== t && 'onComplete' !== t && 'fn' !== t,
        }),
        t.set('animations', {
          colors: {type: 'color', properties: se},
          numbers: {type: 'number', properties: ie},
        }),
        t.describe('animations', {_fallback: 'animation'}),
        t.set('transitions', {
          active: {animation: {duration: 400}},
          resize: {animation: {duration: 0}},
          show: {
            animations: {
              colors: {from: 'transparent'},
              visible: {type: 'boolean', duration: 0},
            },
          },
          hide: {
            animations: {
              colors: {to: 'transparent'},
              visible: {type: 'boolean', easing: 'linear', fn: (t) => 0 | t},
            },
          },
        });
    },
    function (t) {
      t.set('layout', {
        autoPadding: !0,
        padding: {top: 0, right: 0, bottom: 0, left: 0},
      });
    },
    function (t) {
      t.set('scale', {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: 'ticks',
        clip: !0,
        grace: 0,
        grid: {
          display: !0,
          lineWidth: 1,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickLength: 8,
          tickWidth: (t, e) => e.lineWidth,
          tickColor: (t, e) => e.color,
          offset: !1,
        },
        border: {display: !0, dash: [], dashOffset: 0, width: 1},
        title: {display: !1, text: '', padding: {top: 4, bottom: 4}},
        ticks: {
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          textStrokeWidth: 0,
          textStrokeColor: '',
          padding: 3,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 3,
          labelOffset: 0,
          callback: he.formatters.values,
          minor: {},
          major: {},
          align: 'center',
          crossAlign: 'near',
          showLabelBackdrop: !1,
          backdropColor: 'rgba(255, 255, 255, 0.75)',
          backdropPadding: 2,
        },
      }),
        t.route('scale.ticks', 'color', '', 'color'),
        t.route('scale.grid', 'color', '', 'borderColor'),
        t.route('scale.border', 'color', '', 'borderColor'),
        t.route('scale.title', 'color', '', 'color'),
        t.describe('scale', {
          _fallback: !1,
          _scriptable: (t) =>
            !t.startsWith('before') &&
            !t.startsWith('after') &&
            'callback' !== t &&
            'parser' !== t,
          _indexable: (t) =>
            'borderDash' !== t && 'tickBorderDash' !== t && 'dash' !== t,
        }),
        t.describe('scales', {_fallback: 'scale'}),
        t.describe('scale.ticks', {
          _scriptable: (t) => 'backdropPadding' !== t && 'callback' !== t,
          _indexable: (t) => 'backdropPadding' !== t,
        });
    },
  ]
);
function pe(t, e, i, s, n) {
  let r = e[n];
  return (
    r || ((r = e[n] = t.measureText(n).width), i.push(n)), r > s && (s = r), s
  );
}
function be(t, e, i, s) {
  let n = ((s = s || {}).data = s.data || {}),
    r = (s.garbageCollect = s.garbageCollect || []);
  s.font !== e &&
    ((n = s.data = {}), (r = s.garbageCollect = []), (s.font = e)),
    t.save(),
    (t.font = e);
  let o = 0;
  const h = i.length;
  let a, c, l, u, f;
  for (a = 0; a < h; a++)
    if (((u = i[a]), null == u || U(u))) {
      if (U(u))
        for (c = 0, l = u.length; c < l; c++)
          (f = u[c]), null == f || U(f) || (o = pe(t, n, r, o, f));
    } else o = pe(t, n, r, o, u);
  t.restore();
  const d = r.length / 2;
  if (d > i.length) {
    for (a = 0; a < d; a++) delete n[r[a]];
    r.splice(0, d);
  }
  return o;
}
function ge(t, e, i) {
  const s = t.currentDevicePixelRatio,
    n = 0 !== i ? Math.max(i / 2, 0.5) : 0;
  return Math.round((e - n) * s) / s + n;
}
function me(t, e) {
  (e || t) &&
    ((e = e || t.getContext('2d')).save(),
    e.resetTransform(),
    e.clearRect(0, 0, t.width, t.height),
    e.restore());
}
function ve(t, e, i, s) {
  xe(t, e, i, s, null);
}
function xe(t, e, i, s, n) {
  let r, o, h, a, c, l, u, f;
  const d = e.pointStyle,
    p = e.rotation,
    b = e.radius;
  let g = (p || 0) * mt;
  if (
    d &&
    'object' == typeof d &&
    ((r = d.toString()),
    '[object HTMLImageElement]' === r || '[object HTMLCanvasElement]' === r)
  )
    return (
      t.save(),
      t.translate(i, s),
      t.rotate(g),
      t.drawImage(d, -d.width / 2, -d.height / 2, d.width, d.height),
      void t.restore()
    );
  if (!(isNaN(b) || b <= 0)) {
    switch ((t.beginPath(), d)) {
      default:
        n ? t.ellipse(i, s, n / 2, b, 0, 0, pt) : t.arc(i, s, b, 0, pt),
          t.closePath();
        break;
      case 'triangle':
        (l = n ? n / 2 : b),
          t.moveTo(i + Math.sin(g) * l, s - Math.cos(g) * b),
          (g += yt),
          t.lineTo(i + Math.sin(g) * l, s - Math.cos(g) * b),
          (g += yt),
          t.lineTo(i + Math.sin(g) * l, s - Math.cos(g) * b),
          t.closePath();
        break;
      case 'rectRounded':
        (c = 0.516 * b),
          (a = b - c),
          (o = Math.cos(g + xt) * a),
          (u = Math.cos(g + xt) * (n ? n / 2 - c : a)),
          (h = Math.sin(g + xt) * a),
          (f = Math.sin(g + xt) * (n ? n / 2 - c : a)),
          t.arc(i - u, s - h, c, g - dt, g - vt),
          t.arc(i + f, s - o, c, g - vt, g),
          t.arc(i + u, s + h, c, g, g + vt),
          t.arc(i - f, s + o, c, g + vt, g + dt),
          t.closePath();
        break;
      case 'rect':
        if (!p) {
          (a = Math.SQRT1_2 * b),
            (l = n ? n / 2 : a),
            t.rect(i - l, s - a, 2 * l, 2 * a);
          break;
        }
        g += xt;
      case 'rectRot':
        (u = Math.cos(g) * (n ? n / 2 : b)),
          (o = Math.cos(g) * b),
          (h = Math.sin(g) * b),
          (f = Math.sin(g) * (n ? n / 2 : b)),
          t.moveTo(i - u, s - h),
          t.lineTo(i + f, s - o),
          t.lineTo(i + u, s + h),
          t.lineTo(i - f, s + o),
          t.closePath();
        break;
      case 'crossRot':
        g += xt;
      case 'cross':
        (u = Math.cos(g) * (n ? n / 2 : b)),
          (o = Math.cos(g) * b),
          (h = Math.sin(g) * b),
          (f = Math.sin(g) * (n ? n / 2 : b)),
          t.moveTo(i - u, s - h),
          t.lineTo(i + u, s + h),
          t.moveTo(i + f, s - o),
          t.lineTo(i - f, s + o);
        break;
      case 'star':
        (u = Math.cos(g) * (n ? n / 2 : b)),
          (o = Math.cos(g) * b),
          (h = Math.sin(g) * b),
          (f = Math.sin(g) * (n ? n / 2 : b)),
          t.moveTo(i - u, s - h),
          t.lineTo(i + u, s + h),
          t.moveTo(i + f, s - o),
          t.lineTo(i - f, s + o),
          (g += xt),
          (u = Math.cos(g) * (n ? n / 2 : b)),
          (o = Math.cos(g) * b),
          (h = Math.sin(g) * b),
          (f = Math.sin(g) * (n ? n / 2 : b)),
          t.moveTo(i - u, s - h),
          t.lineTo(i + u, s + h),
          t.moveTo(i + f, s - o),
          t.lineTo(i - f, s + o);
        break;
      case 'line':
        (o = n ? n / 2 : Math.cos(g) * b),
          (h = Math.sin(g) * b),
          t.moveTo(i - o, s - h),
          t.lineTo(i + o, s + h);
        break;
      case 'dash':
        t.moveTo(i, s),
          t.lineTo(i + Math.cos(g) * (n ? n / 2 : b), s + Math.sin(g) * b);
        break;
      case !1:
        t.closePath();
    }
    t.fill(), e.borderWidth > 0 && t.stroke();
  }
}
function ye(t, e, i) {
  return (
    (i = i || 0.5),
    !e ||
      (t &&
        t.x > e.left - i &&
        t.x < e.right + i &&
        t.y > e.top - i &&
        t.y < e.bottom + i)
  );
}
function Me(t, e) {
  t.save(),
    t.beginPath(),
    t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
    t.clip();
}
function we(t) {
  t.restore();
}
function _e(t, e, i, s, n) {
  if (!e) return t.lineTo(i.x, i.y);
  if ('middle' === n) {
    const s = (e.x + i.x) / 2;
    t.lineTo(s, e.y), t.lineTo(s, i.y);
  } else ('after' === n) != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
  t.lineTo(i.x, i.y);
}
function ke(t, e, i, s) {
  if (!e) return t.lineTo(i.x, i.y);
  t.bezierCurveTo(
    s ? e.cp1x : e.cp2x,
    s ? e.cp1y : e.cp2y,
    s ? i.cp2x : i.cp1x,
    s ? i.cp2y : i.cp1y,
    i.x,
    i.y
  );
}
function Oe(t, e, i, s, n) {
  if (n.strikethrough || n.underline) {
    const r = t.measureText(s),
      o = e - r.actualBoundingBoxLeft,
      h = e + r.actualBoundingBoxRight,
      a = i - r.actualBoundingBoxAscent,
      c = i + r.actualBoundingBoxDescent,
      l = n.strikethrough ? (a + c) / 2 : c;
    (t.strokeStyle = t.fillStyle),
      t.beginPath(),
      (t.lineWidth = n.decorationWidth || 2),
      t.moveTo(o, l),
      t.lineTo(h, l),
      t.stroke();
  }
}
function Se(t, e) {
  const i = t.fillStyle;
  (t.fillStyle = e.color),
    t.fillRect(e.left, e.top, e.width, e.height),
    (t.fillStyle = i);
}
function De(t, e, i, s, n, r = {}) {
  const o = U(e) ? e : [e],
    h = r.strokeWidth > 0 && '' !== r.strokeColor;
  let a, c;
  for (
    t.save(),
      t.font = n.string,
      (function (t, e) {
        e.translation && t.translate(e.translation[0], e.translation[1]),
          V(e.rotation) || t.rotate(e.rotation),
          e.color && (t.fillStyle = e.color),
          e.textAlign && (t.textAlign = e.textAlign),
          e.textBaseline && (t.textBaseline = e.textBaseline);
      })(t, r),
      a = 0;
    a < o.length;
    ++a
  )
    (c = o[a]),
      r.backdrop && Se(t, r.backdrop),
      h &&
        (r.strokeColor && (t.strokeStyle = r.strokeColor),
        V(r.strokeWidth) || (t.lineWidth = r.strokeWidth),
        t.strokeText(c, i, s, r.maxWidth)),
      t.fillText(c, i, s, r.maxWidth),
      Oe(t, i, s, c, r),
      (s += Number(n.lineHeight));
  t.restore();
}
function Ae(t, e) {
  const {x: i, y: s, w: n, h: r, radius: o} = e;
  t.arc(i + o.topLeft, s + o.topLeft, o.topLeft, 1.5 * dt, dt, !0),
    t.lineTo(i, s + r - o.bottomLeft),
    t.arc(i + o.bottomLeft, s + r - o.bottomLeft, o.bottomLeft, dt, vt, !0),
    t.lineTo(i + n - o.bottomRight, s + r),
    t.arc(
      i + n - o.bottomRight,
      s + r - o.bottomRight,
      o.bottomRight,
      vt,
      0,
      !0
    ),
    t.lineTo(i + n, s + o.topRight),
    t.arc(i + n - o.topRight, s + o.topRight, o.topRight, 0, -vt, !0),
    t.lineTo(i + o.topLeft, s);
}
const Ce = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  Re = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function je(t, e) {
  const i = ('' + t).match(Ce);
  if (!i || 'normal' === i[1]) return 1.2 * e;
  switch (((t = +i[2]), i[3])) {
    case 'px':
      return t;
    case '%':
      t /= 100;
  }
  return e * t;
}
const Le = (t) => +t || 0;
function Ee(t, e) {
  const i = {},
    s = X(e),
    n = s ? Object.keys(e) : e,
    r = X(t) ? (s ? (i) => q(t[i], t[e[i]]) : (e) => t[e]) : () => t;
  for (const t of n) i[t] = Le(r(t));
  return i;
}
function Pe(t) {
  return Ee(t, {top: 'y', right: 'x', bottom: 'y', left: 'x'});
}
function Ne(t) {
  return Ee(t, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
function Te(t) {
  const e = Pe(t);
  return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
}
function Fe(t, e) {
  (t = t || {}), (e = e || de.font);
  let i = q(t.size, e.size);
  'string' == typeof i && (i = parseInt(i, 10));
  let s = q(t.style, e.style);
  s &&
    !('' + s).match(Re) &&
    (console.warn('Invalid font style specified: "' + s + '"'), (s = void 0));
  const n = {
    family: q(t.family, e.family),
    lineHeight: je(q(t.lineHeight, e.lineHeight), i),
    size: i,
    style: s,
    weight: q(t.weight, e.weight),
    string: '',
  };
  return (
    (n.string = (function (t) {
      return !t || V(t.size) || V(t.family)
        ? null
        : (t.style ? t.style + ' ' : '') +
            (t.weight ? t.weight + ' ' : '') +
            t.size +
            'px ' +
            t.family;
    })(n)),
    n
  );
}
function Ie(t, e, i, s) {
  let n,
    r,
    o,
    h = !0;
  for (n = 0, r = t.length; n < r; ++n)
    if (
      ((o = t[n]),
      void 0 !== o &&
        (void 0 !== e && 'function' == typeof o && ((o = o(e)), (h = !1)),
        void 0 !== i && U(o) && ((o = o[i % o.length]), (h = !1)),
        void 0 !== o))
    )
      return s && !h && (s.cacheable = !1), o;
}
function ze(t, e) {
  return Object.assign(Object.create(t), e);
}
function $e(t, e = [''], i, s, n = () => t[0]) {
  const r = i || t;
  void 0 === s && (s = Qe('_fallback', t));
  const o = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: !0,
    _scopes: t,
    _rootScopes: r,
    _fallback: s,
    _getTarget: n,
    override: (i) => $e([i, ...t], e, r, s),
  };
  return new Proxy(o, {
    deleteProperty: (e, i) => (delete e[i], delete e._keys, delete t[0][i], !0),
    get: (i, s) =>
      Ve(i, s, () =>
        (function (t, e, i, s) {
          let n;
          for (const r of e)
            if (((n = Qe(Ye(r, t), i)), void 0 !== n))
              return He(t, n) ? Ke(i, s, t, n) : n;
        })(s, e, t, i)
      ),
    getOwnPropertyDescriptor: (t, e) =>
      Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
    getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
    has: (t, e) => Ge(t).includes(e),
    ownKeys: (t) => Ge(t),
    set(t, e, i) {
      const s = t._storage || (t._storage = n());
      return (t[e] = s[e] = i), delete t._keys, !0;
    },
  });
}
function We(t, e, i, s) {
  const n = {
    _cacheable: !1,
    _proxy: t,
    _context: e,
    _subProxy: i,
    _stack: new Set(),
    _descriptors: Be(t, s),
    setContext: (e) => We(t, e, i, s),
    override: (n) => We(t.override(n), e, i, s),
  };
  return new Proxy(n, {
    deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
    get: (t, e, i) =>
      Ve(t, e, () =>
        (function (t, e, i) {
          const {_proxy: s, _context: n, _subProxy: r, _descriptors: o} = t;
          let h = s[e];
          ut(h) &&
            o.isScriptable(e) &&
            (h = (function (t, e, i, s) {
              const {_proxy: n, _context: r, _subProxy: o, _stack: h} = i;
              if (h.has(t))
                throw new Error(
                  'Recursion detected: ' + Array.from(h).join('->') + '->' + t
                );
              h.add(t);
              let a = e(r, o || s);
              h.delete(t), He(t, a) && (a = Ke(n._scopes, n, t, a));
              return a;
            })(e, h, t, i));
          U(h) &&
            h.length &&
            (h = (function (t, e, i, s) {
              const {_proxy: n, _context: r, _subProxy: o, _descriptors: h} = i;
              if (void 0 !== r.index && s(t)) return e[r.index % e.length];
              if (X(e[0])) {
                const i = e,
                  s = n._scopes.filter((t) => t !== i);
                e = [];
                for (const a of i) {
                  const i = Ke(s, n, t, a);
                  e.push(We(i, r, o && o[t], h));
                }
              }
              return e;
            })(e, h, t, o.isIndexable));
          He(e, h) && (h = We(h, n, r && r[e], o));
          return h;
        })(t, e, i)
      ),
    getOwnPropertyDescriptor: (e, i) =>
      e._descriptors.allKeys
        ? Reflect.has(t, i)
          ? {enumerable: !0, configurable: !0}
          : void 0
        : Reflect.getOwnPropertyDescriptor(t, i),
    getPrototypeOf: () => Reflect.getPrototypeOf(t),
    has: (e, i) => Reflect.has(t, i),
    ownKeys: () => Reflect.ownKeys(t),
    set: (e, i, s) => ((t[i] = s), delete e[i], !0),
  });
}
function Be(t, e = {scriptable: !0, indexable: !0}) {
  const {
    _scriptable: i = e.scriptable,
    _indexable: s = e.indexable,
    _allKeys: n = e.allKeys,
  } = t;
  return {
    allKeys: n,
    scriptable: i,
    indexable: s,
    isScriptable: ut(i) ? i : () => i,
    isIndexable: ut(s) ? s : () => s,
  };
}
const Ye = (t, e) => (t ? t + ct(e) : e),
  He = (t, e) =>
    X(e) &&
    'adapters' !== t &&
    (null === Object.getPrototypeOf(e) || e.constructor === Object);
function Ve(t, e, i) {
  if (Object.prototype.hasOwnProperty.call(t, e) || 'constructor' === e)
    return t[e];
  const s = i();
  return (t[e] = s), s;
}
function Ue(t, e, i) {
  return ut(t) ? t(e, i) : t;
}
const Xe = (t, e) => (!0 === t ? e : 'string' == typeof t ? at(e, t) : void 0);
function Ze(t, e, i, s, n) {
  for (const r of e) {
    const e = Xe(i, r);
    if (e) {
      t.add(e);
      const r = Ue(e._fallback, i, n);
      if (void 0 !== r && r !== i && r !== s) return r;
    } else if (!1 === e && void 0 !== s && i !== s) return null;
  }
  return !1;
}
function Ke(t, e, i, s) {
  const n = e._rootScopes,
    r = Ue(e._fallback, i, s),
    o = [...t, ...n],
    h = new Set();
  h.add(s);
  let a = qe(h, o, i, r || i, s);
  return (
    null !== a &&
    (void 0 === r || r === i || ((a = qe(h, o, r, a, s)), null !== a)) &&
    $e(Array.from(h), [''], n, r, () =>
      (function (t, e, i) {
        const s = t._getTarget();
        e in s || (s[e] = {});
        const n = s[e];
        if (U(n) && X(i)) return i;
        return n || {};
      })(e, i, s)
    )
  );
}
function qe(t, e, i, s, n) {
  for (; i; ) i = Ze(t, e, i, s, n);
  return i;
}
function Qe(t, e) {
  for (const i of e) {
    if (!i) continue;
    const e = i[t];
    if (void 0 !== e) return e;
  }
}
function Ge(t) {
  let e = t._keys;
  return (
    e ||
      (e = t._keys =
        (function (t) {
          const e = new Set();
          for (const i of t)
            for (const t of Object.keys(i).filter((t) => !t.startsWith('_')))
              e.add(t);
          return Array.from(e);
        })(t._scopes)),
    e
  );
}
function Je(t, e, i, s) {
  const {iScale: n} = t,
    {key: r = 'r'} = this._parsing,
    o = new Array(s);
  let h, a, c, l;
  for (h = 0, a = s; h < a; ++h)
    (c = h + i), (l = e[c]), (o[h] = {r: n.parse(at(l, r), c)});
  return o;
}
const ti = Number.EPSILON || 1e-14,
  ei = (t, e) => e < t.length && !t[e].skip && t[e],
  ii = (t) => ('x' === t ? 'y' : 'x');
function si(t, e, i, s) {
  const n = t.skip ? e : t,
    r = e,
    o = i.skip ? e : i,
    h = jt(r, n),
    a = jt(o, r);
  let c = h / (h + a),
    l = a / (h + a);
  (c = isNaN(c) ? 0 : c), (l = isNaN(l) ? 0 : l);
  const u = s * c,
    f = s * l;
  return {
    previous: {x: r.x - u * (o.x - n.x), y: r.y - u * (o.y - n.y)},
    next: {x: r.x + f * (o.x - n.x), y: r.y + f * (o.y - n.y)},
  };
}
function ni(t, e = 'x') {
  const i = ii(e),
    s = t.length,
    n = Array(s).fill(0),
    r = Array(s);
  let o,
    h,
    a,
    c = ei(t, 0);
  for (o = 0; o < s; ++o)
    if (((h = a), (a = c), (c = ei(t, o + 1)), a)) {
      if (c) {
        const t = c[e] - a[e];
        n[o] = 0 !== t ? (c[i] - a[i]) / t : 0;
      }
      r[o] = h
        ? c
          ? wt(n[o - 1]) !== wt(n[o])
            ? 0
            : (n[o - 1] + n[o]) / 2
          : n[o - 1]
        : n[o];
    }
  !(function (t, e, i) {
    const s = t.length;
    let n,
      r,
      o,
      h,
      a,
      c = ei(t, 0);
    for (let l = 0; l < s - 1; ++l)
      (a = c),
        (c = ei(t, l + 1)),
        a &&
          c &&
          (_t(e[l], 0, ti)
            ? (i[l] = i[l + 1] = 0)
            : ((n = i[l] / e[l]),
              (r = i[l + 1] / e[l]),
              (h = Math.pow(n, 2) + Math.pow(r, 2)),
              h <= 9 ||
                ((o = 3 / Math.sqrt(h)),
                (i[l] = n * o * e[l]),
                (i[l + 1] = r * o * e[l]))));
  })(t, n, r),
    (function (t, e, i = 'x') {
      const s = ii(i),
        n = t.length;
      let r,
        o,
        h,
        a = ei(t, 0);
      for (let c = 0; c < n; ++c) {
        if (((o = h), (h = a), (a = ei(t, c + 1)), !h)) continue;
        const n = h[i],
          l = h[s];
        o &&
          ((r = (n - o[i]) / 3),
          (h[`cp1${i}`] = n - r),
          (h[`cp1${s}`] = l - r * e[c])),
          a &&
            ((r = (a[i] - n) / 3),
            (h[`cp2${i}`] = n + r),
            (h[`cp2${s}`] = l + r * e[c]));
      }
    })(t, r, e);
}
function ri(t, e, i) {
  return Math.max(Math.min(t, i), e);
}
function oi(t, e, i, s, n) {
  let r, o, h, a;
  if (
    (e.spanGaps && (t = t.filter((t) => !t.skip)),
    'monotone' === e.cubicInterpolationMode)
  )
    ni(t, n);
  else {
    let i = s ? t[t.length - 1] : t[0];
    for (r = 0, o = t.length; r < o; ++r)
      (h = t[r]),
        (a = si(i, h, t[Math.min(r + 1, o - (s ? 0 : 1)) % o], e.tension)),
        (h.cp1x = a.previous.x),
        (h.cp1y = a.previous.y),
        (h.cp2x = a.next.x),
        (h.cp2y = a.next.y),
        (i = h);
  }
  e.capBezierPoints &&
    (function (t, e) {
      let i,
        s,
        n,
        r,
        o,
        h = ye(t[0], e);
      for (i = 0, s = t.length; i < s; ++i)
        (o = r),
          (r = h),
          (h = i < s - 1 && ye(t[i + 1], e)),
          r &&
            ((n = t[i]),
            o &&
              ((n.cp1x = ri(n.cp1x, e.left, e.right)),
              (n.cp1y = ri(n.cp1y, e.top, e.bottom))),
            h &&
              ((n.cp2x = ri(n.cp2x, e.left, e.right)),
              (n.cp2y = ri(n.cp2y, e.top, e.bottom))));
    })(t, i);
}
function hi() {
  return 'undefined' != typeof window && 'undefined' != typeof document;
}
function ai(t) {
  let e = t.parentNode;
  return e && '[object ShadowRoot]' === e.toString() && (e = e.host), e;
}
function ci(t, e, i) {
  let s;
  return (
    'string' == typeof t
      ? ((s = parseInt(t, 10)),
        -1 !== t.indexOf('%') && (s = (s / 100) * e.parentNode[i]))
      : (s = t),
    s
  );
}
const li = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
const ui = ['top', 'right', 'bottom', 'left'];
function fi(t, e, i) {
  const s = {};
  i = i ? '-' + i : '';
  for (let n = 0; n < 4; n++) {
    const r = ui[n];
    s[r] = parseFloat(t[e + '-' + r + i]) || 0;
  }
  return (s.width = s.left + s.right), (s.height = s.top + s.bottom), s;
}
const di = (t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot);
function pi(t, e) {
  if ('native' in t) return t;
  const {canvas: i, currentDevicePixelRatio: s} = e,
    n = li(i),
    r = 'border-box' === n.boxSizing,
    o = fi(n, 'padding'),
    h = fi(n, 'border', 'width'),
    {
      x: a,
      y: c,
      box: l,
    } = (function (t, e) {
      const i = t.touches,
        s = i && i.length ? i[0] : t,
        {offsetX: n, offsetY: r} = s;
      let o,
        h,
        a = !1;
      if (di(n, r, t.target)) (o = n), (h = r);
      else {
        const t = e.getBoundingClientRect();
        (o = s.clientX - t.left), (h = s.clientY - t.top), (a = !0);
      }
      return {x: o, y: h, box: a};
    })(t, i),
    u = o.left + (l && h.left),
    f = o.top + (l && h.top);
  let {width: d, height: p} = e;
  return (
    r && ((d -= o.width + h.width), (p -= o.height + h.height)),
    {
      x: Math.round((((a - u) / d) * i.width) / s),
      y: Math.round((((c - f) / p) * i.height) / s),
    }
  );
}
const bi = (t) => Math.round(10 * t) / 10;
function gi(t, e, i, s) {
  const n = li(t),
    r = fi(n, 'margin'),
    o = ci(n.maxWidth, t, 'clientWidth') || gt,
    h = ci(n.maxHeight, t, 'clientHeight') || gt,
    a = (function (t, e, i) {
      let s, n;
      if (void 0 === e || void 0 === i) {
        const r = t && ai(t);
        if (r) {
          const t = r.getBoundingClientRect(),
            o = li(r),
            h = fi(o, 'border', 'width'),
            a = fi(o, 'padding');
          (e = t.width - a.width - h.width),
            (i = t.height - a.height - h.height),
            (s = ci(o.maxWidth, r, 'clientWidth')),
            (n = ci(o.maxHeight, r, 'clientHeight'));
        } else (e = t.clientWidth), (i = t.clientHeight);
      }
      return {width: e, height: i, maxWidth: s || gt, maxHeight: n || gt};
    })(t, e, i);
  let {width: c, height: l} = a;
  if ('content-box' === n.boxSizing) {
    const t = fi(n, 'border', 'width'),
      e = fi(n, 'padding');
    (c -= e.width + t.width), (l -= e.height + t.height);
  }
  (c = Math.max(0, c - r.width)),
    (l = Math.max(0, s ? c / s : l - r.height)),
    (c = bi(Math.min(c, o, a.maxWidth))),
    (l = bi(Math.min(l, h, a.maxHeight))),
    c && !l && (l = bi(c / 2));
  return (
    (void 0 !== e || void 0 !== i) &&
      s &&
      a.height &&
      l > a.height &&
      ((l = a.height), (c = bi(Math.floor(l * s)))),
    {width: c, height: l}
  );
}
function mi(t, e, i) {
  const s = e || 1,
    n = Math.floor(t.height * s),
    r = Math.floor(t.width * s);
  (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
  const o = t.canvas;
  return (
    o.style &&
      (i || (!o.style.height && !o.style.width)) &&
      ((o.style.height = `${t.height}px`), (o.style.width = `${t.width}px`)),
    (t.currentDevicePixelRatio !== s || o.height !== n || o.width !== r) &&
      ((t.currentDevicePixelRatio = s),
      (o.height = n),
      (o.width = r),
      t.ctx.setTransform(s, 0, 0, s, 0, 0),
      !0)
  );
}
const vi = (function () {
  let t = !1;
  try {
    const e = {
      get passive() {
        return (t = !0), !1;
      },
    };
    hi() &&
      (window.addEventListener('test', null, e),
      window.removeEventListener('test', null, e));
  } catch (t) {}
  return t;
})();
function xi(t, e) {
  const i = (function (t, e) {
      return li(t).getPropertyValue(e);
    })(t, e),
    s = i && i.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function yi(t, e, i, s) {
  return {x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y)};
}
function Mi(t, e, i, s) {
  return {
    x: t.x + i * (e.x - t.x),
    y:
      'middle' === s
        ? i < 0.5
          ? t.y
          : e.y
        : 'after' === s
        ? i < 1
          ? t.y
          : e.y
        : i > 0
        ? e.y
        : t.y,
  };
}
function wi(t, e, i, s) {
  const n = {x: t.cp2x, y: t.cp2y},
    r = {x: e.cp1x, y: e.cp1y},
    o = yi(t, n, i),
    h = yi(n, r, i),
    a = yi(r, e, i),
    c = yi(o, h, i),
    l = yi(h, a, i);
  return yi(c, l, i);
}
function _i(t, e, i) {
  return t
    ? (function (t, e) {
        return {
          x: (i) => t + t + e - i,
          setWidth(t) {
            e = t;
          },
          textAlign: (t) =>
            'center' === t ? t : 'right' === t ? 'left' : 'right',
          xPlus: (t, e) => t - e,
          leftForLtr: (t, e) => t - e,
        };
      })(e, i)
    : {
        x: (t) => t,
        setWidth(t) {},
        textAlign: (t) => t,
        xPlus: (t, e) => t + e,
        leftForLtr: (t, e) => t,
      };
}
function ki(t, e) {
  let i, s;
  ('ltr' !== e && 'rtl' !== e) ||
    ((i = t.canvas.style),
    (s = [i.getPropertyValue('direction'), i.getPropertyPriority('direction')]),
    i.setProperty('direction', e, 'important'),
    (t.prevTextDirection = s));
}
function Oi(t, e) {
  void 0 !== e &&
    (delete t.prevTextDirection,
    t.canvas.style.setProperty('direction', e[0], e[1]));
}
function Si(t) {
  return 'angle' === t
    ? {between: Pt, compare: Lt, normalize: Et}
    : {between: Tt, compare: (t, e) => t - e, normalize: (t) => t};
}
function Di({start: t, end: e, count: i, loop: s, style: n}) {
  return {start: t % i, end: e % i, loop: s && (e - t + 1) % i == 0, style: n};
}
function Ai(t, e, i) {
  if (!i) return [t];
  const {property: s, start: n, end: r} = i,
    o = e.length,
    {compare: h, between: a, normalize: c} = Si(s),
    {
      start: l,
      end: u,
      loop: f,
      style: d,
    } = (function (t, e, i) {
      const {property: s, start: n, end: r} = i,
        {between: o, normalize: h} = Si(s),
        a = e.length;
      let c,
        l,
        {start: u, end: f, loop: d} = t;
      if (d) {
        for (
          u += a, f += a, c = 0, l = a;
          c < l && o(h(e[u % a][s]), n, r);
          ++c
        )
          u--, f--;
        (u %= a), (f %= a);
      }
      return f < u && (f += a), {start: u, end: f, loop: d, style: t.style};
    })(t, e, i),
    p = [];
  let b,
    g,
    m,
    v = !1,
    x = null;
  const y = () => v || (a(n, m, b) && 0 !== h(n, m)),
    M = () => !v || 0 === h(r, b) || a(r, m, b);
  for (let t = l, i = l; t <= u; ++t)
    (g = e[t % o]),
      g.skip ||
        ((b = c(g[s])),
        b !== m &&
          ((v = a(b, n, r)),
          null === x && y() && (x = 0 === h(b, n) ? t : i),
          null !== x &&
            M() &&
            (p.push(Di({start: x, end: t, loop: f, count: o, style: d})),
            (x = null)),
          (i = t),
          (m = b)));
  return (
    null !== x && p.push(Di({start: x, end: u, loop: f, count: o, style: d})), p
  );
}
function Ci(t, e) {
  const i = [],
    s = t.segments;
  for (let n = 0; n < s.length; n++) {
    const r = Ai(s[n], t.points, e);
    r.length && i.push(...r);
  }
  return i;
}
function Ri(t, e, i, s) {
  return s && s.setContext && i
    ? (function (t, e, i, s) {
        const n = t._chart.getContext(),
          r = ji(t.options),
          {
            _datasetIndex: o,
            options: {spanGaps: h},
          } = t,
          a = i.length,
          c = [];
        let l = r,
          u = e[0].start,
          f = u;
        function d(t, e, s, n) {
          const r = h ? -1 : 1;
          if (t !== e) {
            for (t += a; i[t % a].skip; ) t -= r;
            for (; i[e % a].skip; ) e += r;
            t % a != e % a &&
              (c.push({start: t % a, end: e % a, loop: s, style: n}),
              (l = n),
              (u = e % a));
          }
        }
        for (const t of e) {
          u = h ? u : t.start;
          let e,
            r = i[u % a];
          for (f = u + 1; f <= t.end; f++) {
            const h = i[f % a];
            (e = ji(
              s.setContext(
                ze(n, {
                  type: 'segment',
                  p0: r,
                  p1: h,
                  p0DataIndex: (f - 1) % a,
                  p1DataIndex: f % a,
                  datasetIndex: o,
                })
              )
            )),
              Li(e, l) && d(u, f - 1, t.loop, l),
              (r = h),
              (l = e);
          }
          u < f - 1 && d(u, f - 1, t.loop, l);
        }
        return c;
      })(t, e, i, s)
    : e;
}
function ji(t) {
  return {
    backgroundColor: t.backgroundColor,
    borderCapStyle: t.borderCapStyle,
    borderDash: t.borderDash,
    borderDashOffset: t.borderDashOffset,
    borderJoinStyle: t.borderJoinStyle,
    borderWidth: t.borderWidth,
    borderColor: t.borderColor,
  };
}
function Li(t, e) {
  if (!e) return !1;
  const i = [],
    s = function (t, e) {
      return Jt(e) ? (i.includes(e) || i.push(e), i.indexOf(e)) : e;
    };
  return JSON.stringify(t, s) !== JSON.stringify(e, s);
}
/*!
 * Chart.js v4.4.6
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ class Ei {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(t, e, i, s) {
    const n = e.listeners[s],
      r = e.duration;
    n.forEach((s) =>
      s({
        chart: t,
        initial: e.initial,
        numSteps: r,
        currentStep: Math.min(i - e.start, r),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = Yt.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((i, s) => {
      if (!i.running || !i.items.length) return;
      const n = i.items;
      let r,
        o = n.length - 1,
        h = !1;
      for (; o >= 0; --o)
        (r = n[o]),
          r._active
            ? (r._total > i.duration && (i.duration = r._total),
              r.tick(t),
              (h = !0))
            : ((n[o] = n[n.length - 1]), n.pop());
      h && (s.draw(), this._notify(s, i, t, 'progress')),
        n.length ||
          ((i.running = !1),
          this._notify(s, i, t, 'complete'),
          (i.initial = !1)),
        (e += n.length);
    }),
      (this._lastDate = t),
      0 === e && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let i = e.get(t);
    return (
      i ||
        ((i = {
          running: !1,
          initial: !0,
          items: [],
          listeners: {complete: [], progress: []},
        }),
        e.set(t, i)),
      i
    );
  }
  listen(t, e, i) {
    this._getAnims(t).listeners[e].push(i);
  }
  add(t, e) {
    e && e.length && this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e &&
      ((e.running = !0),
      (e.start = Date.now()),
      (e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const e = this._charts.get(t);
    return !!(e && e.running && e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length) return;
    const i = e.items;
    let s = i.length - 1;
    for (; s >= 0; --s) i[s].cancel();
    (e.items = []), this._notify(t, e, Date.now(), 'complete');
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Pi = new Ei();
const Ni = 'transparent',
  Ti = {
    boolean: (t, e, i) => (i > 0.5 ? e : t),
    color(t, e, i) {
      const s = te(t || Ni),
        n = s.valid && te(e || Ni);
      return n && n.valid ? n.mix(s, i).hexString() : e;
    },
    number: (t, e, i) => t + (e - t) * i,
  };
class Fi {
  constructor(t, e, i, s) {
    const n = e[i];
    s = Ie([t.to, s, n, t.from]);
    const r = Ie([t.from, n, s]);
    (this._active = !0),
      (this._fn = t.fn || Ti[t.type || typeof r]),
      (this._easing = Gt[t.easing] || Gt.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = e),
      (this._prop = i),
      (this._from = r),
      (this._to = s),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(t, e, i) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop],
        n = i - this._start,
        r = this._duration - n;
      (this._start = i),
        (this._duration = Math.floor(Math.max(r, t.duration))),
        (this._total += n),
        (this._loop = !!t.loop),
        (this._to = Ie([t.to, e, s, t.from])),
        (this._from = Ie([t.from, s, e]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const e = t - this._start,
      i = this._duration,
      s = this._prop,
      n = this._from,
      r = this._loop,
      o = this._to;
    let h;
    if (((this._active = n !== o && (r || e < i)), !this._active))
      return (this._target[s] = o), void this._notify(!0);
    e < 0
      ? (this._target[s] = n)
      : ((h = (e / i) % 2),
        (h = r && h > 1 ? 2 - h : h),
        (h = this._easing(Math.min(1, Math.max(0, h)))),
        (this._target[s] = this._fn(n, o, h)));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, i) => {
      t.push({res: e, rej: i});
    });
  }
  _notify(t) {
    const e = t ? 'res' : 'rej',
      i = this._promises || [];
    for (let t = 0; t < i.length; t++) i[t][e]();
  }
}
class Ii {
  constructor(t, e) {
    (this._chart = t), (this._properties = new Map()), this.configure(e);
  }
  configure(t) {
    if (!X(t)) return;
    const e = Object.keys(de.animation),
      i = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const n = t[s];
      if (!X(n)) return;
      const r = {};
      for (const t of e) r[t] = n[t];
      ((U(n.properties) && n.properties) || [s]).forEach((t) => {
        (t !== s && i.has(t)) || i.set(t, r);
      });
    });
  }
  _animateOptions(t, e) {
    const i = e.options,
      s = (function (t, e) {
        if (!e) return;
        let i = t.options;
        if (!i) return void (t.options = e);
        i.$shared &&
          (t.options = i =
            Object.assign({}, i, {$shared: !1, $animations: {}}));
        return i;
      })(t, i);
    if (!s) return [];
    const n = this._createAnimations(s, i);
    return (
      i.$shared &&
        (function (t, e) {
          const i = [],
            s = Object.keys(e);
          for (let e = 0; e < s.length; e++) {
            const n = t[s[e]];
            n && n.active() && i.push(n.wait());
          }
          return Promise.all(i);
        })(t.options.$animations, i).then(
          () => {
            t.options = i;
          },
          () => {}
        ),
      n
    );
  }
  _createAnimations(t, e) {
    const i = this._properties,
      s = [],
      n = t.$animations || (t.$animations = {}),
      r = Object.keys(e),
      o = Date.now();
    let h;
    for (h = r.length - 1; h >= 0; --h) {
      const a = r[h];
      if ('$' === a.charAt(0)) continue;
      if ('options' === a) {
        s.push(...this._animateOptions(t, e));
        continue;
      }
      const c = e[a];
      let l = n[a];
      const u = i.get(a);
      if (l) {
        if (u && l.active()) {
          l.update(u, c, o);
          continue;
        }
        l.cancel();
      }
      u && u.duration
        ? ((n[a] = l = new Fi(u, t, a, c)), s.push(l))
        : (t[a] = c);
    }
    return s;
  }
  update(t, e) {
    if (0 === this._properties.size) return void Object.assign(t, e);
    const i = this._createAnimations(t, e);
    return i.length ? (Pi.add(this._chart, i), !0) : void 0;
  }
}
function zi(t, e) {
  const i = (t && t.options) || {},
    s = i.reverse,
    n = void 0 === i.min ? e : 0,
    r = void 0 === i.max ? e : 0;
  return {start: s ? r : n, end: s ? n : r};
}
function $i(t, e) {
  const i = [],
    s = t._getSortedDatasetMetas(e);
  let n, r;
  for (n = 0, r = s.length; n < r; ++n) i.push(s[n].index);
  return i;
}
function Wi(t, e, i, s = {}) {
  const n = t.keys,
    r = 'single' === s.mode;
  let o, h, a, c;
  if (null === e) return;
  let l = !1;
  for (o = 0, h = n.length; o < h; ++o) {
    if (((a = +n[o]), a === i)) {
      if (((l = !0), s.all)) continue;
      break;
    }
    (c = t.values[a]), Z(c) && (r || 0 === e || wt(e) === wt(c)) && (e += c);
  }
  return l || s.all ? e : 0;
}
function Bi(t, e) {
  const i = t && t.options.stacked;
  return i || (void 0 === i && void 0 !== e.stack);
}
function Yi(t, e, i) {
  const s = t[e] || (t[e] = {});
  return s[i] || (s[i] = {});
}
function Hi(t, e, i, s) {
  for (const n of e.getMatchingVisibleMetas(s).reverse()) {
    const e = t[n.index];
    if ((i && e > 0) || (!i && e < 0)) return n.index;
  }
  return null;
}
function Vi(t, e) {
  const {chart: i, _cachedMeta: s} = t,
    n = i._stacks || (i._stacks = {}),
    {iScale: r, vScale: o, index: h} = s,
    a = r.axis,
    c = o.axis,
    l = (function (t, e, i) {
      return `${t.id}.${e.id}.${i.stack || i.type}`;
    })(r, o, s),
    u = e.length;
  let f;
  for (let t = 0; t < u; ++t) {
    const i = e[t],
      {[a]: r, [c]: u} = i;
    (f = (i._stacks || (i._stacks = {}))[c] = Yi(n, l, r)),
      (f[h] = u),
      (f._top = Hi(f, o, !0, s.type)),
      (f._bottom = Hi(f, o, !1, s.type));
    (f._visualValues || (f._visualValues = {}))[h] = u;
  }
}
function Ui(t, e) {
  const i = t.scales;
  return Object.keys(i)
    .filter((t) => i[t].axis === e)
    .shift();
}
function Xi(t, e) {
  const i = t.controller.index,
    s = t.vScale && t.vScale.axis;
  if (s) {
    e = e || t._parsed;
    for (const t of e) {
      const e = t._stacks;
      if (!e || void 0 === e[s] || void 0 === e[s][i]) return;
      delete e[s][i],
        void 0 !== e[s]._visualValues &&
          void 0 !== e[s]._visualValues[i] &&
          delete e[s]._visualValues[i];
    }
  }
}
const Zi = (t) => 'reset' === t || 'none' === t,
  Ki = (t, e) => (e ? t : Object.assign({}, t));
class qi {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(t, e) {
    (this.chart = t),
      (this._ctx = t.ctx),
      (this.index = e),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (t._stacked = Bi(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled('filler') &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        );
  }
  updateIndex(t) {
    this.index !== t && Xi(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      e = this._cachedMeta,
      i = this.getDataset(),
      s = (t, e, i, s) => ('x' === t ? e : 'r' === t ? s : i),
      n = (e.xAxisID = q(i.xAxisID, Ui(t, 'x'))),
      r = (e.yAxisID = q(i.yAxisID, Ui(t, 'y'))),
      o = (e.rAxisID = q(i.rAxisID, Ui(t, 'r'))),
      h = e.indexAxis,
      a = (e.iAxisID = s(h, n, r, o)),
      c = (e.vAxisID = s(h, r, n, o));
    (e.xScale = this.getScaleForId(n)),
      (e.yScale = this.getScaleForId(r)),
      (e.rScale = this.getScaleForId(o)),
      (e.iScale = this.getScaleForId(a)),
      (e.vScale = this.getScaleForId(c));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update('reset');
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && Wt(this._data, this), t._stacked && Xi(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      e = t.data || (t.data = []),
      i = this._data;
    if (X(e)) {
      const t = this._cachedMeta;
      this._data = (function (t, e) {
        const {iScale: i, vScale: s} = e,
          n = 'x' === i.axis ? 'x' : 'y',
          r = 'x' === s.axis ? 'x' : 'y',
          o = Object.keys(t),
          h = new Array(o.length);
        let a, c, l;
        for (a = 0, c = o.length; a < c; ++a)
          (l = o[a]), (h[a] = {[n]: l, [r]: t[l]});
        return h;
      })(e, t);
    } else if (i !== e) {
      if (i) {
        Wt(i, this);
        const t = this._cachedMeta;
        Xi(t), (t._parsed = []);
      }
      e &&
        Object.isExtensible(e) &&
        ((n = this),
        (s = e)._chartjs
          ? s._chartjs.listeners.push(n)
          : (Object.defineProperty(s, '_chartjs', {
              configurable: !0,
              enumerable: !1,
              value: {listeners: [n]},
            }),
            $t.forEach((t) => {
              const e = '_onData' + ct(t),
                i = s[t];
              Object.defineProperty(s, t, {
                configurable: !0,
                enumerable: !1,
                value(...t) {
                  const n = i.apply(this, t);
                  return (
                    s._chartjs.listeners.forEach((i) => {
                      'function' == typeof i[e] && i[e](...t);
                    }),
                    n
                  );
                },
              });
            }))),
        (this._syncList = []),
        (this._data = e);
    }
    var s, n;
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta,
      i = this.getDataset();
    let s = !1;
    this._dataCheck();
    const n = e._stacked;
    (e._stacked = Bi(e.vScale, e)),
      e.stack !== i.stack && ((s = !0), Xi(e), (e.stack = i.stack)),
      this._resyncElements(t),
      (s || n !== e._stacked) &&
        (Vi(this, e._parsed), (e._stacked = Bi(e.vScale, e)));
  }
  configure() {
    const t = this.chart.config,
      e = t.datasetScopeKeys(this._type),
      i = t.getOptionScopes(this.getDataset(), e, !0);
    (this.options = t.createResolver(i, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(t, e) {
    const {_cachedMeta: i, _data: s} = this,
      {iScale: n, _stacked: r} = i,
      o = n.axis;
    let h,
      a,
      c,
      l = (0 === t && e === s.length) || i._sorted,
      u = t > 0 && i._parsed[t - 1];
    if (!1 === this._parsing) (i._parsed = s), (i._sorted = !0), (c = s);
    else {
      c = U(s[t])
        ? this.parseArrayData(i, s, t, e)
        : X(s[t])
        ? this.parseObjectData(i, s, t, e)
        : this.parsePrimitiveData(i, s, t, e);
      const n = () => null === a[o] || (u && a[o] < u[o]);
      for (h = 0; h < e; ++h)
        (i._parsed[h + t] = a = c[h]), l && (n() && (l = !1), (u = a));
      i._sorted = l;
    }
    r && Vi(this, c);
  }
  parsePrimitiveData(t, e, i, s) {
    const {iScale: n, vScale: r} = t,
      o = n.axis,
      h = r.axis,
      a = n.getLabels(),
      c = n === r,
      l = new Array(s);
    let u, f, d;
    for (u = 0, f = s; u < f; ++u)
      (d = u + i), (l[u] = {[o]: c || n.parse(a[d], d), [h]: r.parse(e[d], d)});
    return l;
  }
  parseArrayData(t, e, i, s) {
    const {xScale: n, yScale: r} = t,
      o = new Array(s);
    let h, a, c, l;
    for (h = 0, a = s; h < a; ++h)
      (c = h + i),
        (l = e[c]),
        (o[h] = {x: n.parse(l[0], c), y: r.parse(l[1], c)});
    return o;
  }
  parseObjectData(t, e, i, s) {
    const {xScale: n, yScale: r} = t,
      {xAxisKey: o = 'x', yAxisKey: h = 'y'} = this._parsing,
      a = new Array(s);
    let c, l, u, f;
    for (c = 0, l = s; c < l; ++c)
      (u = c + i),
        (f = e[u]),
        (a[c] = {x: n.parse(at(f, o), u), y: r.parse(at(f, h), u)});
    return a;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, i) {
    const s = this.chart,
      n = this._cachedMeta,
      r = e[t.axis];
    return Wi(
      {keys: $i(s, !0), values: e._stacks[t.axis]._visualValues},
      r,
      n.index,
      {mode: i}
    );
  }
  updateRangeFromParsed(t, e, i, s) {
    const n = i[e.axis];
    let r = null === n ? NaN : n;
    const o = s && i._stacks[e.axis];
    s && o && ((s.values = o), (r = Wi(s, n, this._cachedMeta.index))),
      (t.min = Math.min(t.min, r)),
      (t.max = Math.max(t.max, r));
  }
  getMinMax(t, e) {
    const i = this._cachedMeta,
      s = i._parsed,
      n = i._sorted && t === i.iScale,
      r = s.length,
      o = this._getOtherScale(t),
      h = ((t, e, i) =>
        t && !e.hidden && e._stacked && {keys: $i(i, !0), values: null})(
        e,
        i,
        this.chart
      ),
      a = {min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY},
      {min: c, max: l} = (function (t) {
        const {
          min: e,
          max: i,
          minDefined: s,
          maxDefined: n,
        } = t.getUserBounds();
        return {
          min: s ? e : Number.NEGATIVE_INFINITY,
          max: n ? i : Number.POSITIVE_INFINITY,
        };
      })(o);
    let u, f;
    function d() {
      f = s[u];
      const e = f[o.axis];
      return !Z(f[t.axis]) || c > e || l < e;
    }
    for (
      u = 0;
      u < r && (d() || (this.updateRangeFromParsed(a, t, f, h), !n));
      ++u
    );
    if (n)
      for (u = r - 1; u >= 0; --u)
        if (!d()) {
          this.updateRangeFromParsed(a, t, f, h);
          break;
        }
    return a;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed,
      i = [];
    let s, n, r;
    for (s = 0, n = e.length; s < n; ++s) (r = e[s][t.axis]), Z(r) && i.push(r);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      i = e.iScale,
      s = e.vScale,
      n = this.getParsed(t);
    return {
      label: i ? '' + i.getLabelForValue(n[i.axis]) : '',
      value: s ? '' + s.getLabelForValue(n[s.axis]) : '',
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || 'default'),
      (e._clip = (function (t) {
        let e, i, s, n;
        return (
          X(t)
            ? ((e = t.top), (i = t.right), (s = t.bottom), (n = t.left))
            : (e = i = s = n = t),
          {top: e, right: i, bottom: s, left: n, disabled: !1 === t}
        );
      })(
        q(
          this.options.clip,
          (function (t, e, i) {
            if (!1 === i) return !1;
            const s = zi(t, i),
              n = zi(e, i);
            return {top: n.end, right: s.end, bottom: n.start, left: s.start};
          })(e.xScale, e.yScale, this.getMaxOverflow())
        )
      ));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      e = this.chart,
      i = this._cachedMeta,
      s = i.data || [],
      n = e.chartArea,
      r = [],
      o = this._drawStart || 0,
      h = this._drawCount || s.length - o,
      a = this.options.drawActiveElementsOnTop;
    let c;
    for (i.dataset && i.dataset.draw(t, n, o, h), c = o; c < o + h; ++c) {
      const e = s[c];
      e.hidden || (e.active && a ? r.push(e) : e.draw(t, n));
    }
    for (c = 0; c < r.length; ++c) r[c].draw(t, n);
  }
  getStyle(t, e) {
    const i = e ? 'active' : 'default';
    return void 0 === t && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(i)
      : this.resolveDataElementOptions(t || 0, i);
  }
  getContext(t, e, i) {
    const s = this.getDataset();
    let n;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const e = this._cachedMeta.data[t];
      (n =
        e.$context ||
        (e.$context = (function (t, e, i) {
          return ze(t, {
            active: !1,
            dataIndex: e,
            parsed: void 0,
            raw: void 0,
            element: i,
            index: e,
            mode: 'default',
            type: 'data',
          });
        })(this.getContext(), t, e))),
        (n.parsed = this.getParsed(t)),
        (n.raw = s.data[t]),
        (n.index = n.dataIndex = t);
    } else
      (n =
        this.$context ||
        (this.$context = (function (t, e) {
          return ze(t, {
            active: !1,
            dataset: void 0,
            datasetIndex: e,
            index: e,
            mode: 'default',
            type: 'dataset',
          });
        })(this.chart.getContext(), this.index))),
        (n.dataset = s),
        (n.index = n.datasetIndex = this.index);
    return (n.active = !!e), (n.mode = i), n;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = 'default', i) {
    const s = 'active' === e,
      n = this._cachedDataOpts,
      r = t + '-' + e,
      o = n[r],
      h = this.enableOptionSharing && lt(i);
    if (o) return Ki(o, h);
    const a = this.chart.config,
      c = a.datasetElementScopeKeys(this._type, t),
      l = s ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
      u = a.getOptionScopes(this.getDataset(), c),
      f = Object.keys(de.elements[t]),
      d = a.resolveNamedOptions(u, f, () => this.getContext(i, s, e), l);
    return d.$shared && ((d.$shared = h), (n[r] = Object.freeze(Ki(d, h)))), d;
  }
  _resolveAnimations(t, e, i) {
    const s = this.chart,
      n = this._cachedDataOpts,
      r = `animation-${e}`,
      o = n[r];
    if (o) return o;
    let h;
    if (!1 !== s.options.animation) {
      const s = this.chart.config,
        n = s.datasetAnimationScopeKeys(this._type, e),
        r = s.getOptionScopes(this.getDataset(), n);
      h = s.createResolver(r, this.getContext(t, i, e));
    }
    const a = new Ii(s, h && h.animations);
    return h && h._cacheable && (n[r] = Object.freeze(a)), a;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, e) {
    return !e || Zi(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const i = this.resolveDataElementOptions(t, e),
      s = this._sharedOptions,
      n = this.getSharedOptions(i),
      r = this.includeOptions(e, n) || n !== s;
    return (
      this.updateSharedOptions(n, e, i), {sharedOptions: n, includeOptions: r}
    );
  }
  updateElement(t, e, i, s) {
    Zi(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i);
  }
  updateSharedOptions(t, e, i) {
    t && !Zi(e) && this._resolveAnimations(void 0, e).update(t, i);
  }
  _setStyle(t, e, i, s) {
    t.active = s;
    const n = this.getStyle(e, s);
    this._resolveAnimations(e, i, s).update(t, {
      options: (!s && this.getSharedOptions(n)) || n,
    });
  }
  removeHoverStyle(t, e, i) {
    this._setStyle(t, i, 'active', !1);
  }
  setHoverStyle(t, e, i) {
    this._setStyle(t, i, 'active', !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, 'active', !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, 'active', !0);
  }
  _resyncElements(t) {
    const e = this._data,
      i = this._cachedMeta.data;
    for (const [t, e, i] of this._syncList) this[t](e, i);
    this._syncList = [];
    const s = i.length,
      n = e.length,
      r = Math.min(n, s);
    r && this.parse(0, r),
      n > s
        ? this._insertElements(s, n - s, t)
        : n < s && this._removeElements(n, s - n);
  }
  _insertElements(t, e, i = !0) {
    const s = this._cachedMeta,
      n = s.data,
      r = t + e;
    let o;
    const h = (t) => {
      for (t.length += e, o = t.length - 1; o >= r; o--) t[o] = t[o - e];
    };
    for (h(n), o = t; o < r; ++o) n[o] = new this.dataElementType();
    this._parsing && h(s._parsed),
      this.parse(t, e),
      i && this.updateElements(n, t, e, 'reset');
  }
  updateElements(t, e, i, s) {}
  _removeElements(t, e) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const s = i._parsed.splice(t, e);
      i._stacked && Xi(i, s);
    }
    i.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [e, i, s] = t;
      this[e](i, s);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(['_insertElements', this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(['_removeElements', 0, 1]);
  }
  _onDataSplice(t, e) {
    e && this._sync(['_removeElements', t, e]);
    const i = arguments.length - 2;
    i && this._sync(['_insertElements', t, i]);
  }
  _onDataUnshift() {
    this._sync(['_insertElements', 0, arguments.length]);
  }
}
function Qi(t) {
  const e = t.iScale,
    i = (function (t, e) {
      if (!t._cache.$bar) {
        const i = t.getMatchingVisibleMetas(e);
        let s = [];
        for (let e = 0, n = i.length; e < n; e++)
          s = s.concat(i[e].controller.getAllParsedValues(t));
        t._cache.$bar = Bt(s.sort((t, e) => t - e));
      }
      return t._cache.$bar;
    })(e, t.type);
  let s,
    n,
    r,
    o,
    h = e._length;
  const a = () => {
    32767 !== r &&
      -32768 !== r &&
      (lt(o) && (h = Math.min(h, Math.abs(r - o) || h)), (o = r));
  };
  for (s = 0, n = i.length; s < n; ++s) (r = e.getPixelForValue(i[s])), a();
  for (o = void 0, s = 0, n = e.ticks.length; s < n; ++s)
    (r = e.getPixelForTick(s)), a();
  return h;
}
function Gi(t, e, i, s) {
  return (
    U(t)
      ? (function (t, e, i, s) {
          const n = i.parse(t[0], s),
            r = i.parse(t[1], s),
            o = Math.min(n, r),
            h = Math.max(n, r);
          let a = o,
            c = h;
          Math.abs(o) > Math.abs(h) && ((a = h), (c = o)),
            (e[i.axis] = c),
            (e._custom = {
              barStart: a,
              barEnd: c,
              start: n,
              end: r,
              min: o,
              max: h,
            });
        })(t, e, i, s)
      : (e[i.axis] = i.parse(t, s)),
    e
  );
}
function Ji(t, e, i, s) {
  const n = t.iScale,
    r = t.vScale,
    o = n.getLabels(),
    h = n === r,
    a = [];
  let c, l, u, f;
  for (c = i, l = i + s; c < l; ++c)
    (f = e[c]),
      (u = {}),
      (u[n.axis] = h || n.parse(o[c], c)),
      a.push(Gi(f, u, r, c));
  return a;
}
function ts(t) {
  return t && void 0 !== t.barStart && void 0 !== t.barEnd;
}
function es(t, e, i, s) {
  let n = e.borderSkipped;
  const r = {};
  if (!n) return void (t.borderSkipped = r);
  if (!0 === n)
    return void (t.borderSkipped = {top: !0, right: !0, bottom: !0, left: !0});
  const {
    start: o,
    end: h,
    reverse: a,
    top: c,
    bottom: l,
  } = (function (t) {
    let e, i, s, n, r;
    return (
      t.horizontal
        ? ((e = t.base > t.x), (i = 'left'), (s = 'right'))
        : ((e = t.base < t.y), (i = 'bottom'), (s = 'top')),
      e ? ((n = 'end'), (r = 'start')) : ((n = 'start'), (r = 'end')),
      {start: i, end: s, reverse: e, top: n, bottom: r}
    );
  })(t);
  'middle' === n &&
    i &&
    ((t.enableBorderRadius = !0),
    (i._top || 0) === s
      ? (n = c)
      : (i._bottom || 0) === s
      ? (n = l)
      : ((r[is(l, o, h, a)] = !0), (n = c))),
    (r[is(n, o, h, a)] = !0),
    (t.borderSkipped = r);
}
function is(t, e, i, s) {
  var n, r, o;
  return (
    s
      ? ((o = i),
        (t = ss((t = (n = t) === (r = e) ? o : n === o ? r : n), i, e)))
      : (t = ss(t, e, i)),
    t
  );
}
function ss(t, e, i) {
  return 'start' === t ? e : 'end' === t ? i : t;
}
function ns(t, {inflateAmount: e}, i) {
  t.inflateAmount = 'auto' === e ? (1 === i ? 0.33 : 0) : e;
}
class rs extends qi {
  static id = 'doughnut';
  static defaults = {
    datasetElementType: !1,
    dataElementType: 'arc',
    animation: {animateRotate: !0, animateScale: !1},
    animations: {
      numbers: {
        type: 'number',
        properties: [
          'circumference',
          'endAngle',
          'innerRadius',
          'outerRadius',
          'startAngle',
          'x',
          'y',
          'offset',
          'borderWidth',
          'spacing',
        ],
      },
    },
    cutout: '50%',
    rotation: 0,
    circumference: 360,
    radius: '100%',
    spacing: 0,
    indexAxis: 'r',
  };
  static descriptors = {
    _scriptable: (t) => 'spacing' !== t,
    _indexable: (t) =>
      'spacing' !== t &&
      !t.startsWith('borderDash') &&
      !t.startsWith('hoverBorderDash'),
  };
  static overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data;
            if (e.labels.length && e.datasets.length) {
              const {
                labels: {pointStyle: i, color: s},
              } = t.legend.options;
              return e.labels.map((e, n) => {
                const r = t.getDatasetMeta(0).controller.getStyle(n);
                return {
                  text: e,
                  fillStyle: r.backgroundColor,
                  strokeStyle: r.borderColor,
                  fontColor: s,
                  lineWidth: r.borderWidth,
                  pointStyle: i,
                  hidden: !t.getDataVisibility(n),
                  index: n,
                };
              });
            }
            return [];
          },
        },
        onClick(t, e, i) {
          i.chart.toggleDataVisibility(e.index), i.chart.update();
        },
      },
    },
  };
  constructor(t, e) {
    super(t, e),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0);
  }
  linkScales() {}
  parse(t, e) {
    const i = this.getDataset().data,
      s = this._cachedMeta;
    if (!1 === this._parsing) s._parsed = i;
    else {
      let n,
        r,
        o = (t) => +i[t];
      if (X(i[t])) {
        const {key: t = 'value'} = this._parsing;
        o = (e) => +at(i[e], t);
      }
      for (n = t, r = t + e; n < r; ++n) s._parsed[n] = o(n);
    }
  }
  _getRotation() {
    return Dt(this.options.rotation - 90);
  }
  _getCircumference() {
    return Dt(this.options.circumference);
  }
  _getRotationExtents() {
    let t = pt,
      e = -pt;
    for (let i = 0; i < this.chart.data.datasets.length; ++i)
      if (
        this.chart.isDatasetVisible(i) &&
        this.chart.getDatasetMeta(i).type === this._type
      ) {
        const s = this.chart.getDatasetMeta(i).controller,
          n = s._getRotation(),
          r = s._getCircumference();
        (t = Math.min(t, n)), (e = Math.max(e, n + r));
      }
    return {rotation: t, circumference: e - t};
  }
  update(t) {
    const e = this.chart,
      {chartArea: i} = e,
      s = this._cachedMeta,
      n = s.data,
      r =
        this.getMaxBorderWidth() + this.getMaxOffset(n) + this.options.spacing,
      o = Math.max((Math.min(i.width, i.height) - r) / 2, 0),
      h = Math.min(
        ((a = this.options.cutout),
        (c = o),
        'string' == typeof a && a.endsWith('%') ? parseFloat(a) / 100 : +a / c),
        1
      );
    var a, c;
    const l = this._getRingWeight(this.index),
      {circumference: u, rotation: f} = this._getRotationExtents(),
      {
        ratioX: d,
        ratioY: p,
        offsetX: b,
        offsetY: g,
      } = (function (t, e, i) {
        let s = 1,
          n = 1,
          r = 0,
          o = 0;
        if (e < pt) {
          const h = t,
            a = h + e,
            c = Math.cos(h),
            l = Math.sin(h),
            u = Math.cos(a),
            f = Math.sin(a),
            d = (t, e, s) =>
              Pt(t, h, a, !0) ? 1 : Math.max(e, e * i, s, s * i),
            p = (t, e, s) =>
              Pt(t, h, a, !0) ? -1 : Math.min(e, e * i, s, s * i),
            b = d(0, c, u),
            g = d(vt, l, f),
            m = p(dt, c, u),
            v = p(dt + vt, l, f);
          (s = (b - m) / 2),
            (n = (g - v) / 2),
            (r = -(b + m) / 2),
            (o = -(g + v) / 2);
        }
        return {ratioX: s, ratioY: n, offsetX: r, offsetY: o};
      })(f, u, h),
      m = (i.width - r) / d,
      v = (i.height - r) / p,
      x = Math.max(Math.min(m, v) / 2, 0),
      y = Q(this.options.radius, x),
      M = (y - Math.max(y * h, 0)) / this._getVisibleDatasetWeightTotal();
    (this.offsetX = b * y),
      (this.offsetY = g * y),
      (s.total = this.calculateTotal()),
      (this.outerRadius = y - M * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - M * l, 0)),
      this.updateElements(n, 0, n.length, t);
  }
  _circumference(t, e) {
    const i = this.options,
      s = this._cachedMeta,
      n = this._getCircumference();
    return (e && i.animation.animateRotate) ||
      !this.chart.getDataVisibility(t) ||
      null === s._parsed[t] ||
      s.data[t].hidden
      ? 0
      : this.calculateCircumference((s._parsed[t] * n) / pt);
  }
  updateElements(t, e, i, s) {
    const n = 'reset' === s,
      r = this.chart,
      o = r.chartArea,
      h = r.options.animation,
      a = (o.left + o.right) / 2,
      c = (o.top + o.bottom) / 2,
      l = n && h.animateScale,
      u = l ? 0 : this.innerRadius,
      f = l ? 0 : this.outerRadius,
      {sharedOptions: d, includeOptions: p} = this._getSharedOptions(e, s);
    let b,
      g = this._getRotation();
    for (b = 0; b < e; ++b) g += this._circumference(b, n);
    for (b = e; b < e + i; ++b) {
      const e = this._circumference(b, n),
        i = t[b],
        r = {
          x: a + this.offsetX,
          y: c + this.offsetY,
          startAngle: g,
          endAngle: g + e,
          circumference: e,
          outerRadius: f,
          innerRadius: u,
        };
      p &&
        (r.options =
          d || this.resolveDataElementOptions(b, i.active ? 'active' : s)),
        (g += e),
        this.updateElement(i, b, r, s);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta,
      e = t.data;
    let i,
      s = 0;
    for (i = 0; i < e.length; i++) {
      const n = t._parsed[i];
      null === n ||
        isNaN(n) ||
        !this.chart.getDataVisibility(i) ||
        e[i].hidden ||
        (s += Math.abs(n));
    }
    return s;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? pt * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      i = this.chart,
      s = i.data.labels || [],
      n = re(e._parsed[t], i.options.locale);
    return {label: s[t] || '', value: n};
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const i = this.chart;
    let s, n, r, o, h;
    if (!t)
      for (s = 0, n = i.data.datasets.length; s < n; ++s)
        if (i.isDatasetVisible(s)) {
          (r = i.getDatasetMeta(s)), (t = r.data), (o = r.controller);
          break;
        }
    if (!t) return 0;
    for (s = 0, n = t.length; s < n; ++s)
      (h = o.resolveDataElementOptions(s)),
        'inner' !== h.borderAlign &&
          (e = Math.max(e, h.borderWidth || 0, h.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let i = 0, s = t.length; i < s; ++i) {
      const t = this.resolveDataElementOptions(i);
      e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let i = 0; i < t; ++i)
      this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(q(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
class os extends qi {
  static id = 'polarArea';
  static defaults = {
    dataElementType: 'arc',
    animation: {animateRotate: !0, animateScale: !0},
    animations: {
      numbers: {
        type: 'number',
        properties: [
          'x',
          'y',
          'startAngle',
          'endAngle',
          'innerRadius',
          'outerRadius',
        ],
      },
    },
    indexAxis: 'r',
    startAngle: 0,
  };
  static overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data;
            if (e.labels.length && e.datasets.length) {
              const {
                labels: {pointStyle: i, color: s},
              } = t.legend.options;
              return e.labels.map((e, n) => {
                const r = t.getDatasetMeta(0).controller.getStyle(n);
                return {
                  text: e,
                  fillStyle: r.backgroundColor,
                  strokeStyle: r.borderColor,
                  fontColor: s,
                  lineWidth: r.borderWidth,
                  pointStyle: i,
                  hidden: !t.getDataVisibility(n),
                  index: n,
                };
              });
            }
            return [];
          },
        },
        onClick(t, e, i) {
          i.chart.toggleDataVisibility(e.index), i.chart.update();
        },
      },
    },
    scales: {
      r: {
        type: 'radialLinear',
        angleLines: {display: !1},
        beginAtZero: !0,
        grid: {circular: !0},
        pointLabels: {display: !1},
        startAngle: 0,
      },
    },
  };
  constructor(t, e) {
    super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      i = this.chart,
      s = i.data.labels || [],
      n = re(e._parsed[t].r, i.options.locale);
    return {label: s[t] || '', value: n};
  }
  parseObjectData(t, e, i, s) {
    return Je.bind(this)(t, e, i, s);
  }
  update(t) {
    const e = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(e, 0, e.length, t);
  }
  getMinMax() {
    const t = this._cachedMeta,
      e = {min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY};
    return (
      t.data.forEach((t, i) => {
        const s = this.getParsed(i).r;
        !isNaN(s) &&
          this.chart.getDataVisibility(i) &&
          (s < e.min && (e.min = s), s > e.max && (e.max = s));
      }),
      e
    );
  }
  _updateRadius() {
    const t = this.chart,
      e = t.chartArea,
      i = t.options,
      s = Math.min(e.right - e.left, e.bottom - e.top),
      n = Math.max(s / 2, 0),
      r =
        (n -
          Math.max(
            i.cutoutPercentage ? (n / 100) * i.cutoutPercentage : 1,
            0
          )) /
        t.getVisibleDatasetCount();
    (this.outerRadius = n - r * this.index),
      (this.innerRadius = this.outerRadius - r);
  }
  updateElements(t, e, i, s) {
    const n = 'reset' === s,
      r = this.chart,
      o = r.options.animation,
      h = this._cachedMeta.rScale,
      a = h.xCenter,
      c = h.yCenter,
      l = h.getIndexAngle(0) - 0.5 * dt;
    let u,
      f = l;
    const d = 360 / this.countVisibleElements();
    for (u = 0; u < e; ++u) f += this._computeAngle(u, s, d);
    for (u = e; u < e + i; u++) {
      const e = t[u];
      let i = f,
        p = f + this._computeAngle(u, s, d),
        b = r.getDataVisibility(u)
          ? h.getDistanceFromCenterForValue(this.getParsed(u).r)
          : 0;
      (f = p), n && (o.animateScale && (b = 0), o.animateRotate && (i = p = l));
      const g = {
        x: a,
        y: c,
        innerRadius: 0,
        outerRadius: b,
        startAngle: i,
        endAngle: p,
        options: this.resolveDataElementOptions(u, e.active ? 'active' : s),
      };
      this.updateElement(e, u, g, s);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let e = 0;
    return (
      t.data.forEach((t, i) => {
        !isNaN(this.getParsed(i).r) && this.chart.getDataVisibility(i) && e++;
      }),
      e
    );
  }
  _computeAngle(t, e, i) {
    return this.chart.getDataVisibility(t)
      ? Dt(this.resolveDataElementOptions(t, e).angle || i)
      : 0;
  }
}
var hs = Object.freeze({
  __proto__: null,
  BarController: class extends qi {
    static id = 'bar';
    static defaults = {
      datasetElementType: !1,
      dataElementType: 'bar',
      categoryPercentage: 0.8,
      barPercentage: 0.9,
      grouped: !0,
      animations: {
        numbers: {
          type: 'number',
          properties: ['x', 'y', 'base', 'width', 'height'],
        },
      },
    };
    static overrides = {
      scales: {
        _index_: {type: 'category', offset: !0, grid: {offset: !0}},
        _value_: {type: 'linear', beginAtZero: !0},
      },
    };
    parsePrimitiveData(t, e, i, s) {
      return Ji(t, e, i, s);
    }
    parseArrayData(t, e, i, s) {
      return Ji(t, e, i, s);
    }
    parseObjectData(t, e, i, s) {
      const {iScale: n, vScale: r} = t,
        {xAxisKey: o = 'x', yAxisKey: h = 'y'} = this._parsing,
        a = 'x' === n.axis ? o : h,
        c = 'x' === r.axis ? o : h,
        l = [];
      let u, f, d, p;
      for (u = i, f = i + s; u < f; ++u)
        (p = e[u]),
          (d = {}),
          (d[n.axis] = n.parse(at(p, a), u)),
          l.push(Gi(at(p, c), d, r, u));
      return l;
    }
    updateRangeFromParsed(t, e, i, s) {
      super.updateRangeFromParsed(t, e, i, s);
      const n = i._custom;
      n &&
        e === this._cachedMeta.vScale &&
        ((t.min = Math.min(t.min, n.min)), (t.max = Math.max(t.max, n.max)));
    }
    getMaxOverflow() {
      return 0;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        {iScale: i, vScale: s} = e,
        n = this.getParsed(t),
        r = n._custom,
        o = ts(r)
          ? '[' + r.start + ', ' + r.end + ']'
          : '' + s.getLabelForValue(n[s.axis]);
      return {label: '' + i.getLabelForValue(n[i.axis]), value: o};
    }
    initialize() {
      (this.enableOptionSharing = !0), super.initialize();
      this._cachedMeta.stack = this.getDataset().stack;
    }
    update(t) {
      const e = this._cachedMeta;
      this.updateElements(e.data, 0, e.data.length, t);
    }
    updateElements(t, e, i, s) {
      const n = 'reset' === s,
        {
          index: r,
          _cachedMeta: {vScale: o},
        } = this,
        h = o.getBasePixel(),
        a = o.isHorizontal(),
        c = this._getRuler(),
        {sharedOptions: l, includeOptions: u} = this._getSharedOptions(e, s);
      for (let f = e; f < e + i; f++) {
        const e = this.getParsed(f),
          i =
            n || V(e[o.axis])
              ? {base: h, head: h}
              : this._calculateBarValuePixels(f),
          d = this._calculateBarIndexPixels(f, c),
          p = (e._stacks || {})[o.axis],
          b = {
            horizontal: a,
            base: i.base,
            enableBorderRadius:
              !p || ts(e._custom) || r === p._top || r === p._bottom,
            x: a ? i.head : d.center,
            y: a ? d.center : i.head,
            height: a ? d.size : Math.abs(i.size),
            width: a ? Math.abs(i.size) : d.size,
          };
        u &&
          (b.options =
            l || this.resolveDataElementOptions(f, t[f].active ? 'active' : s));
        const g = b.options || t[f].options;
        es(b, g, p, r), ns(b, g, c.ratio), this.updateElement(t[f], f, b, s);
      }
    }
    _getStacks(t, e) {
      const {iScale: i} = this._cachedMeta,
        s = i
          .getMatchingVisibleMetas(this._type)
          .filter((t) => t.controller.options.grouped),
        n = i.options.stacked,
        r = [],
        o = this._cachedMeta.controller.getParsed(e),
        h = o && o[i.axis],
        a = (t) => {
          const e = t._parsed.find((t) => t[i.axis] === h),
            s = e && e[t.vScale.axis];
          if (V(s) || isNaN(s)) return !0;
        };
      for (const i of s)
        if (
          (void 0 === e || !a(i)) &&
          ((!1 === n ||
            -1 === r.indexOf(i.stack) ||
            (void 0 === n && void 0 === i.stack)) &&
            r.push(i.stack),
          i.index === t)
        )
          break;
      return r.length || r.push(void 0), r;
    }
    _getStackCount(t) {
      return this._getStacks(void 0, t).length;
    }
    _getStackIndex(t, e, i) {
      const s = this._getStacks(t, i),
        n = void 0 !== e ? s.indexOf(e) : -1;
      return -1 === n ? s.length - 1 : n;
    }
    _getRuler() {
      const t = this.options,
        e = this._cachedMeta,
        i = e.iScale,
        s = [];
      let n, r;
      for (n = 0, r = e.data.length; n < r; ++n)
        s.push(i.getPixelForValue(this.getParsed(n)[i.axis], n));
      const o = t.barThickness;
      return {
        min: o || Qi(e),
        pixels: s,
        start: i._startPixel,
        end: i._endPixel,
        stackCount: this._getStackCount(),
        scale: i,
        grouped: t.grouped,
        ratio: o ? 1 : t.categoryPercentage * t.barPercentage,
      };
    }
    _calculateBarValuePixels(t) {
      const {
          _cachedMeta: {vScale: e, _stacked: i, index: s},
          options: {base: n, minBarLength: r},
        } = this,
        o = n || 0,
        h = this.getParsed(t),
        a = h._custom,
        c = ts(a);
      let l,
        u,
        f = h[e.axis],
        d = 0,
        p = i ? this.applyStack(e, h, i) : f;
      p !== f && ((d = p - f), (p = f)),
        c &&
          ((f = a.barStart),
          (p = a.barEnd - a.barStart),
          0 !== f && wt(f) !== wt(a.barEnd) && (d = 0),
          (d += f));
      const b = V(n) || c ? d : n;
      let g = e.getPixelForValue(b);
      if (
        ((l = this.chart.getDataVisibility(t) ? e.getPixelForValue(d + p) : g),
        (u = l - g),
        Math.abs(u) < r)
      ) {
        (u =
          (function (t, e, i) {
            return 0 !== t
              ? wt(t)
              : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1);
          })(u, e, o) * r),
          f === o && (g -= u / 2);
        const t = e.getPixelForDecimal(0),
          n = e.getPixelForDecimal(1),
          a = Math.min(t, n),
          d = Math.max(t, n);
        (g = Math.max(Math.min(g, d), a)),
          (l = g + u),
          i &&
            !c &&
            (h._stacks[e.axis]._visualValues[s] =
              e.getValueForPixel(l) - e.getValueForPixel(g));
      }
      if (g === e.getPixelForValue(o)) {
        const t = (wt(u) * e.getLineWidthForValue(o)) / 2;
        (g += t), (u -= t);
      }
      return {size: u, base: g, head: l, center: l + u / 2};
    }
    _calculateBarIndexPixels(t, e) {
      const i = e.scale,
        s = this.options,
        n = s.skipNull,
        r = q(s.maxBarThickness, 1 / 0);
      let o, h;
      if (e.grouped) {
        const i = n ? this._getStackCount(t) : e.stackCount,
          a =
            'flex' === s.barThickness
              ? (function (t, e, i, s) {
                  const n = e.pixels,
                    r = n[t];
                  let o = t > 0 ? n[t - 1] : null,
                    h = t < n.length - 1 ? n[t + 1] : null;
                  const a = i.categoryPercentage;
                  null === o &&
                    (o = r - (null === h ? e.end - e.start : h - r)),
                    null === h && (h = r + r - o);
                  const c = r - ((r - Math.min(o, h)) / 2) * a;
                  return {
                    chunk: ((Math.abs(h - o) / 2) * a) / s,
                    ratio: i.barPercentage,
                    start: c,
                  };
                })(t, e, s, i)
              : (function (t, e, i, s) {
                  const n = i.barThickness;
                  let r, o;
                  return (
                    V(n)
                      ? ((r = e.min * i.categoryPercentage),
                        (o = i.barPercentage))
                      : ((r = n * s), (o = 1)),
                    {chunk: r / s, ratio: o, start: e.pixels[t] - r / 2}
                  );
                })(t, e, s, i),
          c = this._getStackIndex(
            this.index,
            this._cachedMeta.stack,
            n ? t : void 0
          );
        (o = a.start + a.chunk * c + a.chunk / 2),
          (h = Math.min(r, a.chunk * a.ratio));
      } else
        (o = i.getPixelForValue(this.getParsed(t)[i.axis], t)),
          (h = Math.min(r, e.min * e.ratio));
      return {base: o - h / 2, head: o + h / 2, center: o, size: h};
    }
    draw() {
      const t = this._cachedMeta,
        e = t.vScale,
        i = t.data,
        s = i.length;
      let n = 0;
      for (; n < s; ++n)
        null === this.getParsed(n)[e.axis] ||
          i[n].hidden ||
          i[n].draw(this._ctx);
    }
  },
  BubbleController: class extends qi {
    static id = 'bubble';
    static defaults = {
      datasetElementType: !1,
      dataElementType: 'point',
      animations: {
        numbers: {
          type: 'number',
          properties: ['x', 'y', 'borderWidth', 'radius'],
        },
      },
    };
    static overrides = {scales: {x: {type: 'linear'}, y: {type: 'linear'}}};
    initialize() {
      (this.enableOptionSharing = !0), super.initialize();
    }
    parsePrimitiveData(t, e, i, s) {
      const n = super.parsePrimitiveData(t, e, i, s);
      for (let t = 0; t < n.length; t++)
        n[t]._custom = this.resolveDataElementOptions(t + i).radius;
      return n;
    }
    parseArrayData(t, e, i, s) {
      const n = super.parseArrayData(t, e, i, s);
      for (let t = 0; t < n.length; t++) {
        const s = e[i + t];
        n[t]._custom = q(s[2], this.resolveDataElementOptions(t + i).radius);
      }
      return n;
    }
    parseObjectData(t, e, i, s) {
      const n = super.parseObjectData(t, e, i, s);
      for (let t = 0; t < n.length; t++) {
        const s = e[i + t];
        n[t]._custom = q(
          s && s.r && +s.r,
          this.resolveDataElementOptions(t + i).radius
        );
      }
      return n;
    }
    getMaxOverflow() {
      const t = this._cachedMeta.data;
      let e = 0;
      for (let i = t.length - 1; i >= 0; --i)
        e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
      return e > 0 && e;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        i = this.chart.data.labels || [],
        {xScale: s, yScale: n} = e,
        r = this.getParsed(t),
        o = s.getLabelForValue(r.x),
        h = n.getLabelForValue(r.y),
        a = r._custom;
      return {
        label: i[t] || '',
        value: '(' + o + ', ' + h + (a ? ', ' + a : '') + ')',
      };
    }
    update(t) {
      const e = this._cachedMeta.data;
      this.updateElements(e, 0, e.length, t);
    }
    updateElements(t, e, i, s) {
      const n = 'reset' === s,
        {iScale: r, vScale: o} = this._cachedMeta,
        {sharedOptions: h, includeOptions: a} = this._getSharedOptions(e, s),
        c = r.axis,
        l = o.axis;
      for (let u = e; u < e + i; u++) {
        const e = t[u],
          i = !n && this.getParsed(u),
          f = {},
          d = (f[c] = n ? r.getPixelForDecimal(0.5) : r.getPixelForValue(i[c])),
          p = (f[l] = n ? o.getBasePixel() : o.getPixelForValue(i[l]));
        (f.skip = isNaN(d) || isNaN(p)),
          a &&
            ((f.options =
              h || this.resolveDataElementOptions(u, e.active ? 'active' : s)),
            n && (f.options.radius = 0)),
          this.updateElement(e, u, f, s);
      }
    }
    resolveDataElementOptions(t, e) {
      const i = this.getParsed(t);
      let s = super.resolveDataElementOptions(t, e);
      s.$shared && (s = Object.assign({}, s, {$shared: !1}));
      const n = s.radius;
      return (
        'active' !== e && (s.radius = 0), (s.radius += q(i && i._custom, n)), s
      );
    }
  },
  DoughnutController: rs,
  LineController: class extends qi {
    static id = 'line';
    static defaults = {
      datasetElementType: 'line',
      dataElementType: 'point',
      showLine: !0,
      spanGaps: !1,
    };
    static overrides = {
      scales: {_index_: {type: 'category'}, _value_: {type: 'linear'}},
    };
    initialize() {
      (this.enableOptionSharing = !0),
        (this.supportsDecimation = !0),
        super.initialize();
    }
    update(t) {
      const e = this._cachedMeta,
        {dataset: i, data: s = [], _dataset: n} = e,
        r = this.chart._animationsDisabled;
      let {start: o, count: h} = Xt(e, s, r);
      (this._drawStart = o),
        (this._drawCount = h),
        Zt(e) && ((o = 0), (h = s.length)),
        (i._chart = this.chart),
        (i._datasetIndex = this.index),
        (i._decimated = !!n._decimated),
        (i.points = s);
      const a = this.resolveDatasetElementOptions(t);
      this.options.showLine || (a.borderWidth = 0),
        (a.segment = this.options.segment),
        this.updateElement(i, void 0, {animated: !r, options: a}, t),
        this.updateElements(s, o, h, t);
    }
    updateElements(t, e, i, s) {
      const n = 'reset' === s,
        {iScale: r, vScale: o, _stacked: h, _dataset: a} = this._cachedMeta,
        {sharedOptions: c, includeOptions: l} = this._getSharedOptions(e, s),
        u = r.axis,
        f = o.axis,
        {spanGaps: d, segment: p} = this.options,
        b = Ot(d) ? d : Number.POSITIVE_INFINITY,
        g = this.chart._animationsDisabled || n || 'none' === s,
        m = e + i,
        v = t.length;
      let x = e > 0 && this.getParsed(e - 1);
      for (let i = 0; i < v; ++i) {
        const d = t[i],
          v = g ? d : {};
        if (i < e || i >= m) {
          v.skip = !0;
          continue;
        }
        const y = this.getParsed(i),
          M = V(y[f]),
          w = (v[u] = r.getPixelForValue(y[u], i)),
          _ = (v[f] =
            n || M
              ? o.getBasePixel()
              : o.getPixelForValue(h ? this.applyStack(o, y, h) : y[f], i));
        (v.skip = isNaN(w) || isNaN(_) || M),
          (v.stop = i > 0 && Math.abs(y[u] - x[u]) > b),
          p && ((v.parsed = y), (v.raw = a.data[i])),
          l &&
            (v.options =
              c || this.resolveDataElementOptions(i, d.active ? 'active' : s)),
          g || this.updateElement(d, i, v, s),
          (x = y);
      }
    }
    getMaxOverflow() {
      const t = this._cachedMeta,
        e = t.dataset,
        i = (e.options && e.options.borderWidth) || 0,
        s = t.data || [];
      if (!s.length) return i;
      const n = s[0].size(this.resolveDataElementOptions(0)),
        r = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
      return Math.max(i, n, r) / 2;
    }
    draw() {
      const t = this._cachedMeta;
      t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
        super.draw();
    }
  },
  PieController: class extends rs {
    static id = 'pie';
    static defaults = {
      cutout: 0,
      rotation: 0,
      circumference: 360,
      radius: '100%',
    };
  },
  PolarAreaController: os,
  RadarController: class extends qi {
    static id = 'radar';
    static defaults = {
      datasetElementType: 'line',
      dataElementType: 'point',
      indexAxis: 'r',
      showLine: !0,
      elements: {line: {fill: 'start'}},
    };
    static overrides = {aspectRatio: 1, scales: {r: {type: 'radialLinear'}}};
    getLabelAndValue(t) {
      const e = this._cachedMeta.vScale,
        i = this.getParsed(t);
      return {
        label: e.getLabels()[t],
        value: '' + e.getLabelForValue(i[e.axis]),
      };
    }
    parseObjectData(t, e, i, s) {
      return Je.bind(this)(t, e, i, s);
    }
    update(t) {
      const e = this._cachedMeta,
        i = e.dataset,
        s = e.data || [],
        n = e.iScale.getLabels();
      if (((i.points = s), 'resize' !== t)) {
        const e = this.resolveDatasetElementOptions(t);
        this.options.showLine || (e.borderWidth = 0);
        const r = {_loop: !0, _fullLoop: n.length === s.length, options: e};
        this.updateElement(i, void 0, r, t);
      }
      this.updateElements(s, 0, s.length, t);
    }
    updateElements(t, e, i, s) {
      const n = this._cachedMeta.rScale,
        r = 'reset' === s;
      for (let o = e; o < e + i; o++) {
        const e = t[o],
          i = this.resolveDataElementOptions(o, e.active ? 'active' : s),
          h = n.getPointPositionForValue(o, this.getParsed(o).r),
          a = r ? n.xCenter : h.x,
          c = r ? n.yCenter : h.y,
          l = {
            x: a,
            y: c,
            angle: h.angle,
            skip: isNaN(a) || isNaN(c),
            options: i,
          };
        this.updateElement(e, o, l, s);
      }
    }
  },
  ScatterController: class extends qi {
    static id = 'scatter';
    static defaults = {
      datasetElementType: !1,
      dataElementType: 'point',
      showLine: !1,
      fill: !1,
    };
    static overrides = {
      interaction: {mode: 'point'},
      scales: {x: {type: 'linear'}, y: {type: 'linear'}},
    };
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        i = this.chart.data.labels || [],
        {xScale: s, yScale: n} = e,
        r = this.getParsed(t),
        o = s.getLabelForValue(r.x),
        h = n.getLabelForValue(r.y);
      return {label: i[t] || '', value: '(' + o + ', ' + h + ')'};
    }
    update(t) {
      const e = this._cachedMeta,
        {data: i = []} = e,
        s = this.chart._animationsDisabled;
      let {start: n, count: r} = Xt(e, i, s);
      if (
        ((this._drawStart = n),
        (this._drawCount = r),
        Zt(e) && ((n = 0), (r = i.length)),
        this.options.showLine)
      ) {
        this.datasetElementType || this.addElements();
        const {dataset: n, _dataset: r} = e;
        (n._chart = this.chart),
          (n._datasetIndex = this.index),
          (n._decimated = !!r._decimated),
          (n.points = i);
        const o = this.resolveDatasetElementOptions(t);
        (o.segment = this.options.segment),
          this.updateElement(n, void 0, {animated: !s, options: o}, t);
      } else
        this.datasetElementType &&
          (delete e.dataset, (this.datasetElementType = !1));
      this.updateElements(i, n, r, t);
    }
    addElements() {
      const {showLine: t} = this.options;
      !this.datasetElementType &&
        t &&
        (this.datasetElementType = this.chart.registry.getElement('line')),
        super.addElements();
    }
    updateElements(t, e, i, s) {
      const n = 'reset' === s,
        {iScale: r, vScale: o, _stacked: h, _dataset: a} = this._cachedMeta,
        c = this.resolveDataElementOptions(e, s),
        l = this.getSharedOptions(c),
        u = this.includeOptions(s, l),
        f = r.axis,
        d = o.axis,
        {spanGaps: p, segment: b} = this.options,
        g = Ot(p) ? p : Number.POSITIVE_INFINITY,
        m = this.chart._animationsDisabled || n || 'none' === s;
      let v = e > 0 && this.getParsed(e - 1);
      for (let c = e; c < e + i; ++c) {
        const e = t[c],
          i = this.getParsed(c),
          p = m ? e : {},
          x = V(i[d]),
          y = (p[f] = r.getPixelForValue(i[f], c)),
          M = (p[d] =
            n || x
              ? o.getBasePixel()
              : o.getPixelForValue(h ? this.applyStack(o, i, h) : i[d], c));
        (p.skip = isNaN(y) || isNaN(M) || x),
          (p.stop = c > 0 && Math.abs(i[f] - v[f]) > g),
          b && ((p.parsed = i), (p.raw = a.data[c])),
          u &&
            (p.options =
              l || this.resolveDataElementOptions(c, e.active ? 'active' : s)),
          m || this.updateElement(e, c, p, s),
          (v = i);
      }
      this.updateSharedOptions(l, s, c);
    }
    getMaxOverflow() {
      const t = this._cachedMeta,
        e = t.data || [];
      if (!this.options.showLine) {
        let t = 0;
        for (let i = e.length - 1; i >= 0; --i)
          t = Math.max(t, e[i].size(this.resolveDataElementOptions(i)) / 2);
        return t > 0 && t;
      }
      const i = t.dataset,
        s = (i.options && i.options.borderWidth) || 0;
      if (!e.length) return s;
      const n = e[0].size(this.resolveDataElementOptions(0)),
        r = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
      return Math.max(s, n, r) / 2;
    }
  },
});
function as() {
  throw new Error(
    'This method is not implemented: Check that a complete date adapter is provided.'
  );
}
class cs {
  static override(t) {
    Object.assign(cs.prototype, t);
  }
  options;
  constructor(t) {
    this.options = t || {};
  }
  init() {}
  formats() {
    return as();
  }
  parse() {
    return as();
  }
  format() {
    return as();
  }
  add() {
    return as();
  }
  diff() {
    return as();
  }
  startOf() {
    return as();
  }
  endOf() {
    return as();
  }
}
var ls = cs;
function us(t, e, i, s) {
  const {controller: n, data: r, _sorted: o} = t,
    h = n._cachedMeta.iScale;
  if (h && e === h.axis && 'r' !== e && o && r.length) {
    const t = h._reversePixels ? zt : It;
    if (!s) return t(r, e, i);
    if (n._sharedOptions) {
      const s = r[0],
        n = 'function' == typeof s.getRange && s.getRange(e);
      if (n) {
        const s = t(r, e, i - n),
          o = t(r, e, i + n);
        return {lo: s.lo, hi: o.hi};
      }
    }
  }
  return {lo: 0, hi: r.length - 1};
}
function fs(t, e, i, s, n) {
  const r = t.getSortedVisibleDatasetMetas(),
    o = i[e];
  for (let t = 0, i = r.length; t < i; ++t) {
    const {index: i, data: h} = r[t],
      {lo: a, hi: c} = us(r[t], e, o, n);
    for (let t = a; t <= c; ++t) {
      const e = h[t];
      e.skip || s(e, i, t);
    }
  }
}
function ds(t, e, i, s, n) {
  const r = [];
  if (!n && !t.isPointInArea(e)) return r;
  return (
    fs(
      t,
      i,
      e,
      function (i, o, h) {
        (n || ye(i, t.chartArea, 0)) &&
          i.inRange(e.x, e.y, s) &&
          r.push({element: i, datasetIndex: o, index: h});
      },
      !0
    ),
    r
  );
}
function ps(t, e, i, s, n, r) {
  let o = [];
  const h = (function (t) {
    const e = -1 !== t.indexOf('x'),
      i = -1 !== t.indexOf('y');
    return function (t, s) {
      const n = e ? Math.abs(t.x - s.x) : 0,
        r = i ? Math.abs(t.y - s.y) : 0;
      return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2));
    };
  })(i);
  let a = Number.POSITIVE_INFINITY;
  return (
    fs(t, i, e, function (i, c, l) {
      const u = i.inRange(e.x, e.y, n);
      if (s && !u) return;
      const f = i.getCenterPoint(n);
      if (!(!!r || t.isPointInArea(f)) && !u) return;
      const d = h(e, f);
      d < a
        ? ((o = [{element: i, datasetIndex: c, index: l}]), (a = d))
        : d === a && o.push({element: i, datasetIndex: c, index: l});
    }),
    o
  );
}
function bs(t, e, i, s, n, r) {
  return r || t.isPointInArea(e)
    ? 'r' !== i || s
      ? ps(t, e, i, s, n, r)
      : (function (t, e, i, s) {
          let n = [];
          return (
            fs(t, i, e, function (t, i, r) {
              const {startAngle: o, endAngle: h} = t.getProps(
                  ['startAngle', 'endAngle'],
                  s
                ),
                {angle: a} = Rt(t, {x: e.x, y: e.y});
              Pt(a, o, h) && n.push({element: t, datasetIndex: i, index: r});
            }),
            n
          );
        })(t, e, i, n)
    : [];
}
function gs(t, e, i, s, n) {
  const r = [],
    o = 'x' === i ? 'inXRange' : 'inYRange';
  let h = !1;
  return (
    fs(t, i, e, (t, s, a) => {
      t[o] &&
        t[o](e[i], n) &&
        (r.push({element: t, datasetIndex: s, index: a}),
        (h = h || t.inRange(e.x, e.y, n)));
    }),
    s && !h ? [] : r
  );
}
var ms = {
  evaluateInteractionItems: fs,
  modes: {
    index(t, e, i, s) {
      const n = pi(e, t),
        r = i.axis || 'x',
        o = i.includeInvisible || !1,
        h = i.intersect ? ds(t, n, r, s, o) : bs(t, n, r, !1, s, o),
        a = [];
      return h.length
        ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
            const e = h[0].index,
              i = t.data[e];
            i &&
              !i.skip &&
              a.push({element: i, datasetIndex: t.index, index: e});
          }),
          a)
        : [];
    },
    dataset(t, e, i, s) {
      const n = pi(e, t),
        r = i.axis || 'xy',
        o = i.includeInvisible || !1;
      let h = i.intersect ? ds(t, n, r, s, o) : bs(t, n, r, !1, s, o);
      if (h.length > 0) {
        const e = h[0].datasetIndex,
          i = t.getDatasetMeta(e).data;
        h = [];
        for (let t = 0; t < i.length; ++t)
          h.push({element: i[t], datasetIndex: e, index: t});
      }
      return h;
    },
    point: (t, e, i, s) =>
      ds(t, pi(e, t), i.axis || 'xy', s, i.includeInvisible || !1),
    nearest(t, e, i, s) {
      const n = pi(e, t),
        r = i.axis || 'xy',
        o = i.includeInvisible || !1;
      return bs(t, n, r, i.intersect, s, o);
    },
    x: (t, e, i, s) => gs(t, pi(e, t), 'x', i.intersect, s),
    y: (t, e, i, s) => gs(t, pi(e, t), 'y', i.intersect, s),
  },
};
const vs = ['left', 'top', 'right', 'bottom'];
function xs(t, e) {
  return t.filter((t) => t.pos === e);
}
function ys(t, e) {
  return t.filter((t) => -1 === vs.indexOf(t.pos) && t.box.axis === e);
}
function Ms(t, e) {
  return t.sort((t, i) => {
    const s = e ? i : t,
      n = e ? t : i;
    return s.weight === n.weight ? s.index - n.index : s.weight - n.weight;
  });
}
function ws(t, e) {
  const i = (function (t) {
      const e = {};
      for (const i of t) {
        const {stack: t, pos: s, stackWeight: n} = i;
        if (!t || !vs.includes(s)) continue;
        const r = e[t] || (e[t] = {count: 0, placed: 0, weight: 0, size: 0});
        r.count++, (r.weight += n);
      }
      return e;
    })(t),
    {vBoxMaxWidth: s, hBoxMaxHeight: n} = e;
  let r, o, h;
  for (r = 0, o = t.length; r < o; ++r) {
    h = t[r];
    const {fullSize: o} = h.box,
      a = i[h.stack],
      c = a && h.stackWeight / a.weight;
    h.horizontal
      ? ((h.width = c ? c * s : o && e.availableWidth), (h.height = n))
      : ((h.width = s), (h.height = c ? c * n : o && e.availableHeight));
  }
  return i;
}
function _s(t, e, i, s) {
  return Math.max(t[i], e[i]) + Math.max(t[s], e[s]);
}
function ks(t, e) {
  (t.top = Math.max(t.top, e.top)),
    (t.left = Math.max(t.left, e.left)),
    (t.bottom = Math.max(t.bottom, e.bottom)),
    (t.right = Math.max(t.right, e.right));
}
function Os(t, e, i, s) {
  const {pos: n, box: r} = i,
    o = t.maxPadding;
  if (!X(n)) {
    i.size && (t[n] -= i.size);
    const e = s[i.stack] || {size: 0, count: 1};
    (e.size = Math.max(e.size, i.horizontal ? r.height : r.width)),
      (i.size = e.size / e.count),
      (t[n] += i.size);
  }
  r.getPadding && ks(o, r.getPadding());
  const h = Math.max(0, e.outerWidth - _s(o, t, 'left', 'right')),
    a = Math.max(0, e.outerHeight - _s(o, t, 'top', 'bottom')),
    c = h !== t.w,
    l = a !== t.h;
  return (
    (t.w = h),
    (t.h = a),
    i.horizontal ? {same: c, other: l} : {same: l, other: c}
  );
}
function Ss(t, e) {
  const i = e.maxPadding;
  function s(t) {
    const s = {left: 0, top: 0, right: 0, bottom: 0};
    return (
      t.forEach((t) => {
        s[t] = Math.max(e[t], i[t]);
      }),
      s
    );
  }
  return s(t ? ['left', 'right'] : ['top', 'bottom']);
}
function Ds(t, e, i, s) {
  const n = [];
  let r, o, h, a, c, l;
  for (r = 0, o = t.length, c = 0; r < o; ++r) {
    (h = t[r]),
      (a = h.box),
      a.update(h.width || e.w, h.height || e.h, Ss(h.horizontal, e));
    const {same: o, other: u} = Os(e, i, h, s);
    (c |= o && n.length), (l = l || u), a.fullSize || n.push(h);
  }
  return (c && Ds(n, e, i, s)) || l;
}
function As(t, e, i, s, n) {
  (t.top = i),
    (t.left = e),
    (t.right = e + s),
    (t.bottom = i + n),
    (t.width = s),
    (t.height = n);
}
function Cs(t, e, i, s) {
  const n = i.padding;
  let {x: r, y: o} = e;
  for (const h of t) {
    const t = h.box,
      a = s[h.stack] || {count: 1, placed: 0, weight: 1},
      c = h.stackWeight / a.weight || 1;
    if (h.horizontal) {
      const s = e.w * c,
        r = a.size || t.height;
      lt(a.start) && (o = a.start),
        t.fullSize
          ? As(t, n.left, o, i.outerWidth - n.right - n.left, r)
          : As(t, e.left + a.placed, o, s, r),
        (a.start = o),
        (a.placed += s),
        (o = t.bottom);
    } else {
      const s = e.h * c,
        o = a.size || t.width;
      lt(a.start) && (r = a.start),
        t.fullSize
          ? As(t, r, n.top, o, i.outerHeight - n.bottom - n.top)
          : As(t, r, e.top + a.placed, o, s),
        (a.start = r),
        (a.placed += s),
        (r = t.right);
    }
  }
  (e.x = r), (e.y = o);
}
var Rs = {
  addBox(t, e) {
    t.boxes || (t.boxes = []),
      (e.fullSize = e.fullSize || !1),
      (e.position = e.position || 'top'),
      (e.weight = e.weight || 0),
      (e._layers =
        e._layers ||
        function () {
          return [
            {
              z: 0,
              draw(t) {
                e.draw(t);
              },
            },
          ];
        }),
      t.boxes.push(e);
  },
  removeBox(t, e) {
    const i = t.boxes ? t.boxes.indexOf(e) : -1;
    -1 !== i && t.boxes.splice(i, 1);
  },
  configure(t, e, i) {
    (e.fullSize = i.fullSize), (e.position = i.position), (e.weight = i.weight);
  },
  update(t, e, i, s) {
    if (!t) return;
    const n = Te(t.options.layout.padding),
      r = Math.max(e - n.width, 0),
      o = Math.max(i - n.height, 0),
      h = (function (t) {
        const e = (function (t) {
            const e = [];
            let i, s, n, r, o, h;
            for (i = 0, s = (t || []).length; i < s; ++i)
              (n = t[i]),
                ({
                  position: r,
                  options: {stack: o, stackWeight: h = 1},
                } = n),
                e.push({
                  index: i,
                  box: n,
                  pos: r,
                  horizontal: n.isHorizontal(),
                  weight: n.weight,
                  stack: o && r + o,
                  stackWeight: h,
                });
            return e;
          })(t),
          i = Ms(
            e.filter((t) => t.box.fullSize),
            !0
          ),
          s = Ms(xs(e, 'left'), !0),
          n = Ms(xs(e, 'right')),
          r = Ms(xs(e, 'top'), !0),
          o = Ms(xs(e, 'bottom')),
          h = ys(e, 'x'),
          a = ys(e, 'y');
        return {
          fullSize: i,
          leftAndTop: s.concat(r),
          rightAndBottom: n.concat(a).concat(o).concat(h),
          chartArea: xs(e, 'chartArea'),
          vertical: s.concat(n).concat(a),
          horizontal: r.concat(o).concat(h),
        };
      })(t.boxes),
      a = h.vertical,
      c = h.horizontal;
    J(t.boxes, (t) => {
      'function' == typeof t.beforeLayout && t.beforeLayout();
    });
    const l =
        a.reduce(
          (t, e) => (e.box.options && !1 === e.box.options.display ? t : t + 1),
          0
        ) || 1,
      u = Object.freeze({
        outerWidth: e,
        outerHeight: i,
        padding: n,
        availableWidth: r,
        availableHeight: o,
        vBoxMaxWidth: r / 2 / l,
        hBoxMaxHeight: o / 2,
      }),
      f = Object.assign({}, n);
    ks(f, Te(s));
    const d = Object.assign(
        {maxPadding: f, w: r, h: o, x: n.left, y: n.top},
        n
      ),
      p = ws(a.concat(c), u);
    Ds(h.fullSize, d, u, p),
      Ds(a, d, u, p),
      Ds(c, d, u, p) && Ds(a, d, u, p),
      (function (t) {
        const e = t.maxPadding;
        function i(i) {
          const s = Math.max(e[i] - t[i], 0);
          return (t[i] += s), s;
        }
        (t.y += i('top')), (t.x += i('left')), i('right'), i('bottom');
      })(d),
      Cs(h.leftAndTop, d, u, p),
      (d.x += d.w),
      (d.y += d.h),
      Cs(h.rightAndBottom, d, u, p),
      (t.chartArea = {
        left: d.left,
        top: d.top,
        right: d.left + d.w,
        bottom: d.top + d.h,
        height: d.h,
        width: d.w,
      }),
      J(h.chartArea, (e) => {
        const i = e.box;
        Object.assign(i, t.chartArea),
          i.update(d.w, d.h, {left: 0, top: 0, right: 0, bottom: 0});
      });
  },
};
class js {
  acquireContext(t, e) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, i) {}
  removeEventListener(t, e, i) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, i, s) {
    return (
      (e = Math.max(0, e || t.width)),
      (i = i || t.height),
      {width: e, height: Math.max(0, s ? Math.floor(e / s) : i)}
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class Ls extends js {
  acquireContext(t) {
    return (t && t.getContext && t.getContext('2d')) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Es = '$chartjs',
  Ps = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout',
  },
  Ns = (t) => null === t || '' === t;
const Ts = !!vi && {passive: !0};
function Fs(t, e, i) {
  t && t.canvas && t.canvas.removeEventListener(e, i, Ts);
}
function Is(t, e) {
  for (const i of t) if (i === e || i.contains(e)) return !0;
}
function zs(t, e, i) {
  const s = t.canvas,
    n = new MutationObserver((t) => {
      let e = !1;
      for (const i of t)
        (e = e || Is(i.addedNodes, s)), (e = e && !Is(i.removedNodes, s));
      e && i();
    });
  return n.observe(document, {childList: !0, subtree: !0}), n;
}
function $s(t, e, i) {
  const s = t.canvas,
    n = new MutationObserver((t) => {
      let e = !1;
      for (const i of t)
        (e = e || Is(i.removedNodes, s)), (e = e && !Is(i.addedNodes, s));
      e && i();
    });
  return n.observe(document, {childList: !0, subtree: !0}), n;
}
const Ws = new Map();
let Bs = 0;
function Ys() {
  const t = window.devicePixelRatio;
  t !== Bs &&
    ((Bs = t),
    Ws.forEach((e, i) => {
      i.currentDevicePixelRatio !== t && e();
    }));
}
function Hs(t, e, i) {
  const s = t.canvas,
    n = s && ai(s);
  if (!n) return;
  const r = Ht((t, e) => {
      const s = n.clientWidth;
      i(t, e), s < n.clientWidth && i();
    }, window),
    o = new ResizeObserver((t) => {
      const e = t[0],
        i = e.contentRect.width,
        s = e.contentRect.height;
      (0 === i && 0 === s) || r(i, s);
    });
  return (
    o.observe(n),
    (function (t, e) {
      Ws.size || window.addEventListener('resize', Ys), Ws.set(t, e);
    })(t, r),
    o
  );
}
function Vs(t, e, i) {
  i && i.disconnect(),
    'resize' === e &&
      (function (t) {
        Ws.delete(t), Ws.size || window.removeEventListener('resize', Ys);
      })(t);
}
function Us(t, e, i) {
  const s = t.canvas,
    n = Ht((e) => {
      null !== t.ctx &&
        i(
          (function (t, e) {
            const i = Ps[t.type] || t.type,
              {x: s, y: n} = pi(t, e);
            return {
              type: i,
              chart: e,
              native: t,
              x: void 0 !== s ? s : null,
              y: void 0 !== n ? n : null,
            };
          })(e, t)
        );
    }, t);
  return (
    (function (t, e, i) {
      t && t.addEventListener(e, i, Ts);
    })(s, e, n),
    n
  );
}
class Xs extends js {
  acquireContext(t, e) {
    const i = t && t.getContext && t.getContext('2d');
    return i && i.canvas === t
      ? ((function (t, e) {
          const i = t.style,
            s = t.getAttribute('height'),
            n = t.getAttribute('width');
          if (
            ((t[Es] = {
              initial: {
                height: s,
                width: n,
                style: {display: i.display, height: i.height, width: i.width},
              },
            }),
            (i.display = i.display || 'block'),
            (i.boxSizing = i.boxSizing || 'border-box'),
            Ns(n))
          ) {
            const e = xi(t, 'width');
            void 0 !== e && (t.width = e);
          }
          if (Ns(s))
            if ('' === t.style.height) t.height = t.width / (e || 2);
            else {
              const e = xi(t, 'height');
              void 0 !== e && (t.height = e);
            }
        })(t, e),
        i)
      : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Es]) return !1;
    const i = e[Es].initial;
    ['height', 'width'].forEach((t) => {
      const s = i[t];
      V(s) ? e.removeAttribute(t) : e.setAttribute(t, s);
    });
    const s = i.style || {};
    return (
      Object.keys(s).forEach((t) => {
        e.style[t] = s[t];
      }),
      (e.width = e.width),
      delete e[Es],
      !0
    );
  }
  addEventListener(t, e, i) {
    this.removeEventListener(t, e);
    const s = t.$proxies || (t.$proxies = {}),
      n = {attach: zs, detach: $s, resize: Hs}[e] || Us;
    s[e] = n(t, e, i);
  }
  removeEventListener(t, e) {
    const i = t.$proxies || (t.$proxies = {}),
      s = i[e];
    if (!s) return;
    (({attach: Vs, detach: Vs, resize: Vs})[e] || Fs)(t, e, s), (i[e] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, i, s) {
    return gi(t, e, i, s);
  }
  isAttached(t) {
    const e = t && ai(t);
    return !(!e || !e.isConnected);
  }
}
class Zs {
  static defaults = {};
  static defaultRoutes = void 0;
  x;
  y;
  active = !1;
  options;
  $animations;
  tooltipPosition(t) {
    const {x: e, y: i} = this.getProps(['x', 'y'], t);
    return {x: e, y: i};
  }
  hasValue() {
    return Ot(this.x) && Ot(this.y);
  }
  getProps(t, e) {
    const i = this.$animations;
    if (!e || !i) return this;
    const s = {};
    return (
      t.forEach((t) => {
        s[t] = i[t] && i[t].active() ? i[t]._to : this[t];
      }),
      s
    );
  }
}
function Ks(t, e) {
  const i = t.options.ticks,
    s = (function (t) {
      const e = t.options.offset,
        i = t._tickSize(),
        s = t._length / i + (e ? 0 : 1),
        n = t._maxLength / i;
      return Math.floor(Math.min(s, n));
    })(t),
    n = Math.min(i.maxTicksLimit || s, s),
    r = i.major.enabled
      ? (function (t) {
          const e = [];
          let i, s;
          for (i = 0, s = t.length; i < s; i++) t[i].major && e.push(i);
          return e;
        })(e)
      : [],
    o = r.length,
    h = r[0],
    a = r[o - 1],
    c = [];
  if (o > n)
    return (
      (function (t, e, i, s) {
        let n,
          r = 0,
          o = i[0];
        for (s = Math.ceil(s), n = 0; n < t.length; n++)
          n === o && (e.push(t[n]), r++, (o = i[r * s]));
      })(e, c, r, o / n),
      c
    );
  const l = (function (t, e, i) {
    const s = (function (t) {
        const e = t.length;
        let i, s;
        if (e < 2) return !1;
        for (s = t[0], i = 1; i < e; ++i) if (t[i] - t[i - 1] !== s) return !1;
        return s;
      })(t),
      n = e.length / i;
    if (!s) return Math.max(n, 1);
    const r = (function (t) {
      const e = [],
        i = Math.sqrt(t);
      let s;
      for (s = 1; s < i; s++) t % s == 0 && (e.push(s), e.push(t / s));
      return i === (0 | i) && e.push(i), e.sort((t, e) => t - e).pop(), e;
    })(s);
    for (let t = 0, e = r.length - 1; t < e; t++) {
      const e = r[t];
      if (e > n) return e;
    }
    return Math.max(n, 1);
  })(r, e, n);
  if (o > 0) {
    let t, i;
    const s = o > 1 ? Math.round((a - h) / (o - 1)) : null;
    for (qs(e, c, l, V(s) ? 0 : h - s, h), t = 0, i = o - 1; t < i; t++)
      qs(e, c, l, r[t], r[t + 1]);
    return qs(e, c, l, a, V(s) ? e.length : a + s), c;
  }
  return qs(e, c, l), c;
}
function qs(t, e, i, s, n) {
  const r = q(s, 0),
    o = Math.min(q(n, t.length), t.length);
  let h,
    a,
    c,
    l = 0;
  for (
    i = Math.ceil(i), n && ((h = n - s), (i = h / Math.floor(h / i))), c = r;
    c < 0;

  )
    l++, (c = Math.round(r + l * i));
  for (a = Math.max(r, 0); a < o; a++)
    a === c && (e.push(t[a]), l++, (c = Math.round(r + l * i)));
}
const Qs = (t, e, i) => ('top' === e || 'left' === e ? t[e] + i : t[e] - i),
  Gs = (t, e) => Math.min(e || t, t);
function Js(t, e) {
  const i = [],
    s = t.length / e,
    n = t.length;
  let r = 0;
  for (; r < n; r += s) i.push(t[Math.floor(r)]);
  return i;
}
function tn(t, e, i) {
  const s = t.ticks.length,
    n = Math.min(e, s - 1),
    r = t._startPixel,
    o = t._endPixel,
    h = 1e-6;
  let a,
    c = t.getPixelForTick(n);
  if (
    !(
      i &&
      ((a =
        1 === s
          ? Math.max(c - r, o - c)
          : 0 === e
          ? (t.getPixelForTick(1) - c) / 2
          : (c - t.getPixelForTick(n - 1)) / 2),
      (c += n < e ? a : -a),
      c < r - h || c > o + h)
    )
  )
    return c;
}
function en(t) {
  return t.drawTicks ? t.tickLength : 0;
}
function sn(t, e) {
  if (!t.display) return 0;
  const i = Fe(t.font, e),
    s = Te(t.padding);
  return (U(t.text) ? t.text.length : 1) * i.lineHeight + s.height;
}
function nn(t, e, i) {
  let s = Vt(t);
  return (
    ((i && 'right' !== e) || (!i && 'right' === e)) &&
      (s = ((t) => ('left' === t ? 'right' : 'right' === t ? 'left' : t))(s)),
    s
  );
}
class rn extends Zs {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = {left: 0, right: 0, top: 0, bottom: 0}),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(t) {
    (this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax));
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let {_userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: s} = this;
    return (
      (t = K(t, Number.POSITIVE_INFINITY)),
      (e = K(e, Number.NEGATIVE_INFINITY)),
      (i = K(i, Number.POSITIVE_INFINITY)),
      (s = K(s, Number.NEGATIVE_INFINITY)),
      {min: K(t, i), max: K(e, s), minDefined: Z(t), maxDefined: Z(e)}
    );
  }
  getMinMax(t) {
    let e,
      {min: i, max: s, minDefined: n, maxDefined: r} = this.getUserBounds();
    if (n && r) return {min: i, max: s};
    const o = this.getMatchingVisibleMetas();
    for (let h = 0, a = o.length; h < a; ++h)
      (e = o[h].controller.getMinMax(this, t)),
        n || (i = Math.min(i, e.min)),
        r || (s = Math.max(s, e.max));
    return (
      (i = r && i > s ? s : i),
      (s = n && i > s ? i : s),
      {min: K(i, K(s, i)), max: K(s, K(i, s))}
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    );
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    G(this.options.beforeUpdate, [this]);
  }
  update(t, e, i) {
    const {beginAtZero: s, grace: n, ticks: r} = this.options,
      o = r.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = i =
        Object.assign({left: 0, right: 0, top: 0, bottom: 0}, i)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + i.left + i.right
        : this.height + i.top + i.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = (function (t, e, i) {
          const {min: s, max: n} = t,
            r = Q(e, (n - s) / 2),
            o = (t, e) => (i && 0 === t ? 0 : t + e);
          return {min: o(s, -Math.abs(r)), max: o(n, r)};
        })(this, n, s)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const h = o < this.ticks.length;
    this._convertTicksToLabels(h ? Js(this.ticks, o) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      r.display &&
        (r.autoSkip || 'auto' === r.source) &&
        ((this.ticks = Ks(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      h && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let t,
      e,
      i = this.options.reverse;
    this.isHorizontal()
      ? ((t = this.left), (e = this.right))
      : ((t = this.top), (e = this.bottom), (i = !i)),
      (this._startPixel = t),
      (this._endPixel = e),
      (this._reversePixels = i),
      (this._length = e - t),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    G(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    G(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    G(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), G(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks('beforeDataLimits');
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks('afterDataLimits');
  }
  beforeBuildTicks() {
    this._callHooks('beforeBuildTicks');
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks('afterBuildTicks');
  }
  beforeTickToLabelConversion() {
    G(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let i, s, n;
    for (i = 0, s = t.length; i < s; i++)
      (n = t[i]), (n.label = G(e.callback, [n.value, i, t], this));
  }
  afterTickToLabelConversion() {
    G(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    G(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      e = t.ticks,
      i = Gs(this.ticks.length, t.ticks.maxTicksLimit),
      s = e.minRotation || 0,
      n = e.maxRotation;
    let r,
      o,
      h,
      a = s;
    if (
      !this._isVisible() ||
      !e.display ||
      s >= n ||
      i <= 1 ||
      !this.isHorizontal()
    )
      return void (this.labelRotation = s);
    const c = this._getLabelSizes(),
      l = c.widest.width,
      u = c.highest.height,
      f = Nt(this.chart.width - l, 0, this.maxWidth);
    (r = t.offset ? this.maxWidth / i : f / (i - 1)),
      l + 6 > r &&
        ((r = f / (i - (t.offset ? 0.5 : 1))),
        (o =
          this.maxHeight -
          en(t.grid) -
          e.padding -
          sn(t.title, this.chart.options.font)),
        (h = Math.sqrt(l * l + u * u)),
        (a = At(
          Math.min(
            Math.asin(Nt((c.highest.height + 6) / r, -1, 1)),
            Math.asin(Nt(o / h, -1, 1)) - Math.asin(Nt(u / h, -1, 1))
          )
        )),
        (a = Math.max(s, Math.min(n, a)))),
      (this.labelRotation = a);
  }
  afterCalculateLabelRotation() {
    G(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    G(this.options.beforeFit, [this]);
  }
  fit() {
    const t = {width: 0, height: 0},
      {
        chart: e,
        options: {ticks: i, title: s, grid: n},
      } = this,
      r = this._isVisible(),
      o = this.isHorizontal();
    if (r) {
      const r = sn(s, e.options.font);
      if (
        (o
          ? ((t.width = this.maxWidth), (t.height = en(n) + r))
          : ((t.height = this.maxHeight), (t.width = en(n) + r)),
        i.display && this.ticks.length)
      ) {
        const {
            first: e,
            last: s,
            widest: n,
            highest: r,
          } = this._getLabelSizes(),
          h = 2 * i.padding,
          a = Dt(this.labelRotation),
          c = Math.cos(a),
          l = Math.sin(a);
        if (o) {
          const e = i.mirror ? 0 : l * n.width + c * r.height;
          t.height = Math.min(this.maxHeight, t.height + e + h);
        } else {
          const e = i.mirror ? 0 : c * n.width + l * r.height;
          t.width = Math.min(this.maxWidth, t.width + e + h);
        }
        this._calculatePadding(e, s, l, c);
      }
    }
    this._handleMargins(),
      o
        ? ((this.width = this._length =
            e.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            e.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(t, e, i, s) {
    const {
        ticks: {align: n, padding: r},
        position: o,
      } = this.options,
      h = 0 !== this.labelRotation,
      a = 'top' !== o && 'x' === this.axis;
    if (this.isHorizontal()) {
      const o = this.getPixelForTick(0) - this.left,
        c = this.right - this.getPixelForTick(this.ticks.length - 1);
      let l = 0,
        u = 0;
      h
        ? a
          ? ((l = s * t.width), (u = i * e.height))
          : ((l = i * t.height), (u = s * e.width))
        : 'start' === n
        ? (u = e.width)
        : 'end' === n
        ? (l = t.width)
        : 'inner' !== n && ((l = t.width / 2), (u = e.width / 2)),
        (this.paddingLeft = Math.max(
          ((l - o + r) * this.width) / (this.width - o),
          0
        )),
        (this.paddingRight = Math.max(
          ((u - c + r) * this.width) / (this.width - c),
          0
        ));
    } else {
      let i = e.height / 2,
        s = t.height / 2;
      'start' === n
        ? ((i = 0), (s = t.height))
        : 'end' === n && ((i = e.height), (s = 0)),
        (this.paddingTop = i + r),
        (this.paddingBottom = s + r);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    G(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const {axis: t, position: e} = this.options;
    return 'top' === e || 'bottom' === e || 'x' === t;
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    let e, i;
    for (
      this.beforeTickToLabelConversion(),
        this.generateTickLabels(t),
        e = 0,
        i = t.length;
      e < i;
      e++
    )
      V(t[e].label) && (t.splice(e, 1), i--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let i = this.ticks;
      e < i.length && (i = Js(i, e)),
        (this._labelSizes = t =
          this._computeLabelSizes(
            i,
            i.length,
            this.options.ticks.maxTicksLimit
          ));
    }
    return t;
  }
  _computeLabelSizes(t, e, i) {
    const {ctx: s, _longestTextCache: n} = this,
      r = [],
      o = [],
      h = Math.floor(e / Gs(e, i));
    let a,
      c,
      l,
      u,
      f,
      d,
      p,
      b,
      g,
      m,
      v,
      x = 0,
      y = 0;
    for (a = 0; a < e; a += h) {
      if (
        ((u = t[a].label),
        (f = this._resolveTickFontOptions(a)),
        (s.font = d = f.string),
        (p = n[d] = n[d] || {data: {}, gc: []}),
        (b = f.lineHeight),
        (g = m = 0),
        V(u) || U(u))
      ) {
        if (U(u))
          for (c = 0, l = u.length; c < l; ++c)
            (v = u[c]),
              V(v) || U(v) || ((g = pe(s, p.data, p.gc, g, v)), (m += b));
      } else (g = pe(s, p.data, p.gc, g, u)), (m = b);
      r.push(g), o.push(m), (x = Math.max(g, x)), (y = Math.max(m, y));
    }
    !(function (t, e) {
      J(t, (t) => {
        const i = t.gc,
          s = i.length / 2;
        let n;
        if (s > e) {
          for (n = 0; n < s; ++n) delete t.data[i[n]];
          i.splice(0, s);
        }
      });
    })(n, e);
    const M = r.indexOf(x),
      w = o.indexOf(y),
      _ = (t) => ({width: r[t] || 0, height: o[t] || 0});
    return {
      first: _(0),
      last: _(e - 1),
      widest: _(M),
      highest: _(w),
      widths: r,
      heights: o,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return Nt(this._alignToPixels ? ge(this.chart, e, 0) : e, -32768, 32767);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const {min: t, max: e} = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const i = e[t];
      return (
        i.$context ||
        (i.$context = (function (t, e, i) {
          return ze(t, {tick: i, index: e, type: 'tick'});
        })(this.getContext(), t, i))
      );
    }
    return (
      this.$context ||
      (this.$context = ze(this.chart.getContext(), {
        scale: this,
        type: 'scale',
      }))
    );
  }
  _tickSize() {
    const t = this.options.ticks,
      e = Dt(this.labelRotation),
      i = Math.abs(Math.cos(e)),
      s = Math.abs(Math.sin(e)),
      n = this._getLabelSizes(),
      r = t.autoSkipPadding || 0,
      o = n ? n.widest.width + r : 0,
      h = n ? n.highest.height + r : 0;
    return this.isHorizontal()
      ? h * i > o * s
        ? o / i
        : h / s
      : h * s < o * i
      ? h / i
      : o / s;
  }
  _isVisible() {
    const t = this.options.display;
    return 'auto' !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis,
      i = this.chart,
      s = this.options,
      {grid: n, position: r, border: o} = s,
      h = n.offset,
      a = this.isHorizontal(),
      c = this.ticks.length + (h ? 1 : 0),
      l = en(n),
      u = [],
      f = o.setContext(this.getContext()),
      d = f.display ? f.width : 0,
      p = d / 2,
      b = function (t) {
        return ge(i, t, d);
      };
    let g, m, v, x, y, M, w, _, k, O, S, D;
    if ('top' === r)
      (g = b(this.bottom)),
        (M = this.bottom - l),
        (_ = g - p),
        (O = b(t.top) + p),
        (D = t.bottom);
    else if ('bottom' === r)
      (g = b(this.top)),
        (O = t.top),
        (D = b(t.bottom) - p),
        (M = g + p),
        (_ = this.top + l);
    else if ('left' === r)
      (g = b(this.right)),
        (y = this.right - l),
        (w = g - p),
        (k = b(t.left) + p),
        (S = t.right);
    else if ('right' === r)
      (g = b(this.left)),
        (k = t.left),
        (S = b(t.right) - p),
        (y = g + p),
        (w = this.left + l);
    else if ('x' === e) {
      if ('center' === r) g = b((t.top + t.bottom) / 2 + 0.5);
      else if (X(r)) {
        const t = Object.keys(r)[0],
          e = r[t];
        g = b(this.chart.scales[t].getPixelForValue(e));
      }
      (O = t.top), (D = t.bottom), (M = g + p), (_ = M + l);
    } else if ('y' === e) {
      if ('center' === r) g = b((t.left + t.right) / 2);
      else if (X(r)) {
        const t = Object.keys(r)[0],
          e = r[t];
        g = b(this.chart.scales[t].getPixelForValue(e));
      }
      (y = g - p), (w = y - l), (k = t.left), (S = t.right);
    }
    const A = q(s.ticks.maxTicksLimit, c),
      C = Math.max(1, Math.ceil(c / A));
    for (m = 0; m < c; m += C) {
      const t = this.getContext(m),
        e = n.setContext(t),
        s = o.setContext(t),
        r = e.lineWidth,
        c = e.color,
        l = s.dash || [],
        f = s.dashOffset,
        d = e.tickWidth,
        p = e.tickColor,
        b = e.tickBorderDash || [],
        g = e.tickBorderDashOffset;
      (v = tn(this, m, h)),
        void 0 !== v &&
          ((x = ge(i, v, r)),
          a ? (y = w = k = S = x) : (M = _ = O = D = x),
          u.push({
            tx1: y,
            ty1: M,
            tx2: w,
            ty2: _,
            x1: k,
            y1: O,
            x2: S,
            y2: D,
            width: r,
            color: c,
            borderDash: l,
            borderDashOffset: f,
            tickWidth: d,
            tickColor: p,
            tickBorderDash: b,
            tickBorderDashOffset: g,
          }));
    }
    return (this._ticksLength = c), (this._borderValue = g), u;
  }
  _computeLabelItems(t) {
    const e = this.axis,
      i = this.options,
      {position: s, ticks: n} = i,
      r = this.isHorizontal(),
      o = this.ticks,
      {align: h, crossAlign: a, padding: c, mirror: l} = n,
      u = en(i.grid),
      f = u + c,
      d = l ? -c : f,
      p = -Dt(this.labelRotation),
      b = [];
    let g,
      m,
      v,
      x,
      y,
      M,
      w,
      _,
      k,
      O,
      S,
      D,
      A = 'middle';
    if ('top' === s)
      (M = this.bottom - d), (w = this._getXAxisLabelAlignment());
    else if ('bottom' === s)
      (M = this.top + d), (w = this._getXAxisLabelAlignment());
    else if ('left' === s) {
      const t = this._getYAxisLabelAlignment(u);
      (w = t.textAlign), (y = t.x);
    } else if ('right' === s) {
      const t = this._getYAxisLabelAlignment(u);
      (w = t.textAlign), (y = t.x);
    } else if ('x' === e) {
      if ('center' === s) M = (t.top + t.bottom) / 2 + f;
      else if (X(s)) {
        const t = Object.keys(s)[0],
          e = s[t];
        M = this.chart.scales[t].getPixelForValue(e) + f;
      }
      w = this._getXAxisLabelAlignment();
    } else if ('y' === e) {
      if ('center' === s) y = (t.left + t.right) / 2 - f;
      else if (X(s)) {
        const t = Object.keys(s)[0],
          e = s[t];
        y = this.chart.scales[t].getPixelForValue(e);
      }
      w = this._getYAxisLabelAlignment(u).textAlign;
    }
    'y' === e && ('start' === h ? (A = 'top') : 'end' === h && (A = 'bottom'));
    const C = this._getLabelSizes();
    for (g = 0, m = o.length; g < m; ++g) {
      (v = o[g]), (x = v.label);
      const t = n.setContext(this.getContext(g));
      (_ = this.getPixelForTick(g) + n.labelOffset),
        (k = this._resolveTickFontOptions(g)),
        (O = k.lineHeight),
        (S = U(x) ? x.length : 1);
      const e = S / 2,
        i = t.color,
        h = t.textStrokeColor,
        c = t.textStrokeWidth;
      let u,
        f = w;
      if (
        (r
          ? ((y = _),
            'inner' === w &&
              (f =
                g === m - 1
                  ? this.options.reverse
                    ? 'left'
                    : 'right'
                  : 0 === g
                  ? this.options.reverse
                    ? 'right'
                    : 'left'
                  : 'center'),
            (D =
              'top' === s
                ? 'near' === a || 0 !== p
                  ? -S * O + O / 2
                  : 'center' === a
                  ? -C.highest.height / 2 - e * O + O
                  : -C.highest.height + O / 2
                : 'near' === a || 0 !== p
                ? O / 2
                : 'center' === a
                ? C.highest.height / 2 - e * O
                : C.highest.height - S * O),
            l && (D *= -1),
            0 === p || t.showLabelBackdrop || (y += (O / 2) * Math.sin(p)))
          : ((M = _), (D = ((1 - S) * O) / 2)),
        t.showLabelBackdrop)
      ) {
        const e = Te(t.backdropPadding),
          i = C.heights[g],
          s = C.widths[g];
        let n = D - e.top,
          r = 0 - e.left;
        switch (A) {
          case 'middle':
            n -= i / 2;
            break;
          case 'bottom':
            n -= i;
        }
        switch (w) {
          case 'center':
            r -= s / 2;
            break;
          case 'right':
            r -= s;
            break;
          case 'inner':
            g === m - 1 ? (r -= s) : g > 0 && (r -= s / 2);
        }
        u = {
          left: r,
          top: n,
          width: s + e.width,
          height: i + e.height,
          color: t.backdropColor,
        };
      }
      b.push({
        label: x,
        font: k,
        textOffset: D,
        options: {
          rotation: p,
          color: i,
          strokeColor: h,
          strokeWidth: c,
          textAlign: f,
          textBaseline: A,
          translation: [y, M],
          backdrop: u,
        },
      });
    }
    return b;
  }
  _getXAxisLabelAlignment() {
    const {position: t, ticks: e} = this.options;
    if (-Dt(this.labelRotation)) return 'top' === t ? 'left' : 'right';
    let i = 'center';
    return (
      'start' === e.align
        ? (i = 'left')
        : 'end' === e.align
        ? (i = 'right')
        : 'inner' === e.align && (i = 'inner'),
      i
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: e,
        ticks: {crossAlign: i, mirror: s, padding: n},
      } = this.options,
      r = t + n,
      o = this._getLabelSizes().widest.width;
    let h, a;
    return (
      'left' === e
        ? s
          ? ((a = this.right + n),
            'near' === i
              ? (h = 'left')
              : 'center' === i
              ? ((h = 'center'), (a += o / 2))
              : ((h = 'right'), (a += o)))
          : ((a = this.right - r),
            'near' === i
              ? (h = 'right')
              : 'center' === i
              ? ((h = 'center'), (a -= o / 2))
              : ((h = 'left'), (a = this.left)))
        : 'right' === e
        ? s
          ? ((a = this.left + n),
            'near' === i
              ? (h = 'right')
              : 'center' === i
              ? ((h = 'center'), (a -= o / 2))
              : ((h = 'left'), (a -= o)))
          : ((a = this.left + r),
            'near' === i
              ? (h = 'left')
              : 'center' === i
              ? ((h = 'center'), (a += o / 2))
              : ((h = 'right'), (a = this.right)))
        : (h = 'right'),
      {textAlign: h, x: a}
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      e = this.options.position;
    return 'left' === e || 'right' === e
      ? {top: 0, left: this.left, bottom: t.height, right: this.right}
      : 'top' === e || 'bottom' === e
      ? {top: this.top, left: 0, bottom: this.bottom, right: t.width}
      : void 0;
  }
  drawBackground() {
    const {
      ctx: t,
      options: {backgroundColor: e},
      left: i,
      top: s,
      width: n,
      height: r,
    } = this;
    e && (t.save(), (t.fillStyle = e), t.fillRect(i, s, n, r), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display) return 0;
    const i = this.ticks.findIndex((e) => e.value === t);
    if (i >= 0) {
      return e.setContext(this.getContext(i)).lineWidth;
    }
    return 0;
  }
  drawGrid(t) {
    const e = this.options.grid,
      i = this.ctx,
      s =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t));
    let n, r;
    const o = (t, e, s) => {
      s.width &&
        s.color &&
        (i.save(),
        (i.lineWidth = s.width),
        (i.strokeStyle = s.color),
        i.setLineDash(s.borderDash || []),
        (i.lineDashOffset = s.borderDashOffset),
        i.beginPath(),
        i.moveTo(t.x, t.y),
        i.lineTo(e.x, e.y),
        i.stroke(),
        i.restore());
    };
    if (e.display)
      for (n = 0, r = s.length; n < r; ++n) {
        const t = s[n];
        e.drawOnChartArea && o({x: t.x1, y: t.y1}, {x: t.x2, y: t.y2}, t),
          e.drawTicks &&
            o(
              {x: t.tx1, y: t.ty1},
              {x: t.tx2, y: t.ty2},
              {
                color: t.tickColor,
                width: t.tickWidth,
                borderDash: t.tickBorderDash,
                borderDashOffset: t.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: e,
        options: {border: i, grid: s},
      } = this,
      n = i.setContext(this.getContext()),
      r = i.display ? n.width : 0;
    if (!r) return;
    const o = s.setContext(this.getContext(0)).lineWidth,
      h = this._borderValue;
    let a, c, l, u;
    this.isHorizontal()
      ? ((a = ge(t, this.left, r) - r / 2),
        (c = ge(t, this.right, o) + o / 2),
        (l = u = h))
      : ((l = ge(t, this.top, r) - r / 2),
        (u = ge(t, this.bottom, o) + o / 2),
        (a = c = h)),
      e.save(),
      (e.lineWidth = n.width),
      (e.strokeStyle = n.color),
      e.beginPath(),
      e.moveTo(a, l),
      e.lineTo(c, u),
      e.stroke(),
      e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const e = this.ctx,
      i = this._computeLabelArea();
    i && Me(e, i);
    const s = this.getLabelItems(t);
    for (const t of s) {
      const i = t.options,
        s = t.font;
      De(e, t.label, 0, t.textOffset, s, i);
    }
    i && we(e);
  }
  drawTitle() {
    const {
      ctx: t,
      options: {position: e, title: i, reverse: s},
    } = this;
    if (!i.display) return;
    const n = Fe(i.font),
      r = Te(i.padding),
      o = i.align;
    let h = n.lineHeight / 2;
    'bottom' === e || 'center' === e || X(e)
      ? ((h += r.bottom),
        U(i.text) && (h += n.lineHeight * (i.text.length - 1)))
      : (h += r.top);
    const {
      titleX: a,
      titleY: c,
      maxWidth: l,
      rotation: u,
    } = (function (t, e, i, s) {
      const {top: n, left: r, bottom: o, right: h, chart: a} = t,
        {chartArea: c, scales: l} = a;
      let u,
        f,
        d,
        p = 0;
      const b = o - n,
        g = h - r;
      if (t.isHorizontal()) {
        if (((f = Ut(s, r, h)), X(i))) {
          const t = Object.keys(i)[0],
            s = i[t];
          d = l[t].getPixelForValue(s) + b - e;
        } else
          d = 'center' === i ? (c.bottom + c.top) / 2 + b - e : Qs(t, i, e);
        u = h - r;
      } else {
        if (X(i)) {
          const t = Object.keys(i)[0],
            s = i[t];
          f = l[t].getPixelForValue(s) - g + e;
        } else
          f = 'center' === i ? (c.left + c.right) / 2 - g + e : Qs(t, i, e);
        (d = Ut(s, o, n)), (p = 'left' === i ? -vt : vt);
      }
      return {titleX: f, titleY: d, maxWidth: u, rotation: p};
    })(this, h, e, o);
    De(t, i.text, 0, 0, n, {
      color: i.color,
      maxWidth: l,
      rotation: u,
      textAlign: nn(o, e, s),
      textBaseline: 'middle',
      translation: [a, c],
    });
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      e = (t.ticks && t.ticks.z) || 0,
      i = q(t.grid && t.grid.z, -1),
      s = q(t.border && t.border.z, 0);
    return this._isVisible() && this.draw === rn.prototype.draw
      ? [
          {
            z: i,
            draw: (t) => {
              this.drawBackground(), this.drawGrid(t), this.drawTitle();
            },
          },
          {
            z: s,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: e,
            draw: (t) => {
              this.drawLabels(t);
            },
          },
        ]
      : [
          {
            z: e,
            draw: (t) => {
              this.draw(t);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(),
      i = this.axis + 'AxisID',
      s = [];
    let n, r;
    for (n = 0, r = e.length; n < r; ++n) {
      const r = e[n];
      r[i] !== this.id || (t && r.type !== t) || s.push(r);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    return Fe(this.options.ticks.setContext(this.getContext(t)).font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class on {
  constructor(t, e, i) {
    (this.type = t),
      (this.scope = e),
      (this.override = i),
      (this.items = Object.create(null));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      t.prototype
    );
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let i;
    (function (t) {
      return 'id' in t && 'defaults' in t;
    })(e) && (i = this.register(e));
    const s = this.items,
      n = t.id,
      r = this.scope + '.' + n;
    if (!n) throw new Error('class does not have id: ' + t);
    return (
      n in s ||
        ((s[n] = t),
        (function (t, e, i) {
          const s = nt(Object.create(null), [
            i ? de.get(i) : {},
            de.get(e),
            t.defaults,
          ]);
          de.set(e, s),
            t.defaultRoutes &&
              (function (t, e) {
                Object.keys(e).forEach((i) => {
                  const s = i.split('.'),
                    n = s.pop(),
                    r = [t].concat(s).join('.'),
                    o = e[i].split('.'),
                    h = o.pop(),
                    a = o.join('.');
                  de.route(r, n, a, h);
                });
              })(e, t.defaultRoutes);
          t.descriptors && de.describe(e, t.descriptors);
        })(t, r, i),
        this.override && de.override(t.id, t.overrides)),
      r
    );
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items,
      i = t.id,
      s = this.scope;
    i in e && delete e[i],
      s && i in de[s] && (delete de[s][i], this.override && delete ae[i]);
  }
}
class hn {
  constructor() {
    (this.controllers = new on(qi, 'datasets', !0)),
      (this.elements = new on(Zs, 'elements')),
      (this.plugins = new on(Object, 'plugins')),
      (this.scales = new on(rn, 'scales')),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...t) {
    this._each('register', t);
  }
  remove(...t) {
    this._each('unregister', t);
  }
  addControllers(...t) {
    this._each('register', t, this.controllers);
  }
  addElements(...t) {
    this._each('register', t, this.elements);
  }
  addPlugins(...t) {
    this._each('register', t, this.plugins);
  }
  addScales(...t) {
    this._each('register', t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, 'controller');
  }
  getElement(t) {
    return this._get(t, this.elements, 'element');
  }
  getPlugin(t) {
    return this._get(t, this.plugins, 'plugin');
  }
  getScale(t) {
    return this._get(t, this.scales, 'scale');
  }
  removeControllers(...t) {
    this._each('unregister', t, this.controllers);
  }
  removeElements(...t) {
    this._each('unregister', t, this.elements);
  }
  removePlugins(...t) {
    this._each('unregister', t, this.plugins);
  }
  removeScales(...t) {
    this._each('unregister', t, this.scales);
  }
  _each(t, e, i) {
    [...e].forEach((e) => {
      const s = i || this._getRegistryForType(e);
      i || s.isForType(e) || (s === this.plugins && e.id)
        ? this._exec(t, s, e)
        : J(e, (e) => {
            const s = i || this._getRegistryForType(e);
            this._exec(t, s, e);
          });
    });
  }
  _exec(t, e, i) {
    const s = ct(t);
    G(i['before' + s], [], i), e[t](i), G(i['after' + s], [], i);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const i = this._typedRegistries[e];
      if (i.isForType(t)) return i;
    }
    return this.plugins;
  }
  _get(t, e, i) {
    const s = e.get(t);
    if (void 0 === s)
      throw new Error('"' + t + '" is not a registered ' + i + '.');
    return s;
  }
}
var an = new hn();
class cn {
  constructor() {
    this._init = [];
  }
  notify(t, e, i, s) {
    'beforeInit' === e &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, 'install'));
    const n = s ? this._descriptors(t).filter(s) : this._descriptors(t),
      r = this._notify(n, t, e, i);
    return (
      'afterDestroy' === e &&
        (this._notify(n, t, 'stop'), this._notify(this._init, t, 'uninstall')),
      r
    );
  }
  _notify(t, e, i, s) {
    s = s || {};
    for (const n of t) {
      const t = n.plugin;
      if (!1 === G(t[i], [e, s, n.options], t) && s.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    V(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const e = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const i = t && t.config,
      s = q(i.options && i.options.plugins, {}),
      n = (function (t) {
        const e = {},
          i = [],
          s = Object.keys(an.plugins.items);
        for (let t = 0; t < s.length; t++) i.push(an.getPlugin(s[t]));
        const n = t.plugins || [];
        for (let t = 0; t < n.length; t++) {
          const s = n[t];
          -1 === i.indexOf(s) && (i.push(s), (e[s.id] = !0));
        }
        return {plugins: i, localIds: e};
      })(i);
    return !1 !== s || e
      ? (function (t, {plugins: e, localIds: i}, s, n) {
          const r = [],
            o = t.getContext();
          for (const h of e) {
            const e = h.id,
              a = ln(s[e], n);
            null !== a &&
              r.push({
                plugin: h,
                options: un(t.config, {plugin: h, local: i[e]}, a, o),
              });
          }
          return r;
        })(t, n, s, e)
      : [];
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [],
      i = this._cache,
      s = (t, e) =>
        t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id));
    this._notify(s(e, i), t, 'stop'), this._notify(s(i, e), t, 'start');
  }
}
function ln(t, e) {
  return e || !1 !== t ? (!0 === t ? {} : t) : null;
}
function un(t, {plugin: e, local: i}, s, n) {
  const r = t.pluginScopeKeys(e),
    o = t.getOptionScopes(s, r);
  return (
    i && e.defaults && o.push(e.defaults),
    t.createResolver(o, n, [''], {scriptable: !1, indexable: !1, allKeys: !0})
  );
}
function fn(t, e) {
  const i = de.datasets[t] || {};
  return (
    ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || 'x'
  );
}
function dn(t) {
  if ('x' === t || 'y' === t || 'r' === t) return t;
}
function pn(t, ...e) {
  if (dn(t)) return t;
  for (const s of e) {
    const e =
      s.axis ||
      ('top' === (i = s.position) || 'bottom' === i
        ? 'x'
        : 'left' === i || 'right' === i
        ? 'y'
        : void 0) ||
      (t.length > 1 && dn(t[0].toLowerCase()));
    if (e) return e;
  }
  var i;
  throw new Error(
    `Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`
  );
}
function bn(t, e, i) {
  if (i[e + 'AxisID'] === t) return {axis: e};
}
function gn(t, e) {
  const i = ae[t.type] || {scales: {}},
    s = e.scales || {},
    n = fn(t.type, e),
    r = Object.create(null);
  return (
    Object.keys(s).forEach((e) => {
      const o = s[e];
      if (!X(o))
        return console.error(`Invalid scale configuration for scale: ${e}`);
      if (o._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${e}`
        );
      const h = pn(
          e,
          o,
          (function (t, e) {
            if (e.data && e.data.datasets) {
              const i = e.data.datasets.filter(
                (e) => e.xAxisID === t || e.yAxisID === t
              );
              if (i.length) return bn(t, 'x', i[0]) || bn(t, 'y', i[0]);
            }
            return {};
          })(e, t),
          de.scales[o.type]
        ),
        a = (function (t, e) {
          return t === e ? '_index_' : '_value_';
        })(h, n),
        c = i.scales || {};
      r[e] = rt(Object.create(null), [{axis: h}, o, c[h], c[a]]);
    }),
    t.data.datasets.forEach((i) => {
      const n = i.type || t.type,
        o = i.indexAxis || fn(n, e),
        h = (ae[n] || {}).scales || {};
      Object.keys(h).forEach((t) => {
        const e = (function (t, e) {
            let i = t;
            return (
              '_index_' === t
                ? (i = e)
                : '_value_' === t && (i = 'x' === e ? 'y' : 'x'),
              i
            );
          })(t, o),
          n = i[e + 'AxisID'] || e;
        (r[n] = r[n] || Object.create(null)), rt(r[n], [{axis: e}, s[n], h[t]]);
      });
    }),
    Object.keys(r).forEach((t) => {
      const e = r[t];
      rt(e, [de.scales[e.type], de.scale]);
    }),
    r
  );
}
function mn(t) {
  const e = t.options || (t.options = {});
  (e.plugins = q(e.plugins, {})), (e.scales = gn(t, e));
}
function vn(t) {
  return (
    ((t = t || {}).datasets = t.datasets || []), (t.labels = t.labels || []), t
  );
}
const xn = new Map(),
  yn = new Set();
function Mn(t, e) {
  let i = xn.get(t);
  return i || ((i = e()), xn.set(t, i), yn.add(i)), i;
}
const wn = (t, e, i) => {
  const s = at(e, i);
  void 0 !== s && t.add(s);
};
class _n {
  constructor(t) {
    (this._config = (function (t) {
      return ((t = t || {}).data = vn(t.data)), mn(t), t;
    })(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = vn(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), mn(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Mn(t, () => [[`datasets.${t}`, '']]);
  }
  datasetAnimationScopeKeys(t, e) {
    return Mn(`${t}.transition.${e}`, () => [
      [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
      [`datasets.${t}`, ''],
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return Mn(`${t}-${e}`, () => [
      [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ''],
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id;
    return Mn(`${this.type}-plugin-${e}`, () => [
      [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, e) {
    const i = this._scopeCache;
    let s = i.get(t);
    return (s && !e) || ((s = new Map()), i.set(t, s)), s;
  }
  getOptionScopes(t, e, i) {
    const {options: s, type: n} = this,
      r = this._cachedScopes(t, i),
      o = r.get(e);
    if (o) return o;
    const h = new Set();
    e.forEach((e) => {
      t && (h.add(t), e.forEach((e) => wn(h, t, e))),
        e.forEach((t) => wn(h, s, t)),
        e.forEach((t) => wn(h, ae[n] || {}, t)),
        e.forEach((t) => wn(h, de, t)),
        e.forEach((t) => wn(h, ce, t));
    });
    const a = Array.from(h);
    return (
      0 === a.length && a.push(Object.create(null)), yn.has(e) && r.set(e, a), a
    );
  }
  chartOptionScopes() {
    const {options: t, type: e} = this;
    return [t, ae[e] || {}, de.datasets[e] || {}, {type: e}, de, ce];
  }
  resolveNamedOptions(t, e, i, s = ['']) {
    const n = {$shared: !0},
      {resolver: r, subPrefixes: o} = kn(this._resolverCache, t, s);
    let h = r;
    if (
      (function (t, e) {
        const {isScriptable: i, isIndexable: s} = Be(t);
        for (const n of e) {
          const e = i(n),
            r = s(n),
            o = (r || e) && t[n];
          if ((e && (ut(o) || On(o))) || (r && U(o))) return !0;
        }
        return !1;
      })(r, e)
    ) {
      n.$shared = !1;
      h = We(r, (i = ut(i) ? i() : i), this.createResolver(t, i, o));
    }
    for (const t of e) n[t] = h[t];
    return n;
  }
  createResolver(t, e, i = [''], s) {
    const {resolver: n} = kn(this._resolverCache, t, i);
    return X(e) ? We(n, e, void 0, s) : n;
  }
}
function kn(t, e, i) {
  let s = t.get(e);
  s || ((s = new Map()), t.set(e, s));
  const n = i.join();
  let r = s.get(n);
  if (!r) {
    (r = {
      resolver: $e(e, i),
      subPrefixes: i.filter((t) => !t.toLowerCase().includes('hover')),
    }),
      s.set(n, r);
  }
  return r;
}
const On = (t) => X(t) && Object.getOwnPropertyNames(t).some((e) => ut(t[e]));
const Sn = ['top', 'bottom', 'left', 'right', 'chartArea'];
function Dn(t, e) {
  return 'top' === t || 'bottom' === t || (-1 === Sn.indexOf(t) && 'x' === e);
}
function An(t, e) {
  return function (i, s) {
    return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t];
  };
}
function Cn(t) {
  const e = t.chart,
    i = e.options.animation;
  e.notifyPlugins('afterRender'), G(i && i.onComplete, [t], e);
}
function Rn(t) {
  const e = t.chart,
    i = e.options.animation;
  G(i && i.onProgress, [t], e);
}
function jn(t) {
  return (
    hi() && 'string' == typeof t
      ? (t = document.getElementById(t))
      : t && t.length && (t = t[0]),
    t && t.canvas && (t = t.canvas),
    t
  );
}
const Ln = {},
  En = (t) => {
    const e = jn(t);
    return Object.values(Ln)
      .filter((t) => t.canvas === e)
      .pop();
  };
function Pn(t, e, i) {
  const s = Object.keys(t);
  for (const n of s) {
    const s = +n;
    if (s >= e) {
      const r = t[n];
      delete t[n], (i > 0 || s > e) && (t[s + i] = r);
    }
  }
}
function Nn(t, e, i) {
  return t.options.clip ? t[i] : e[i];
}
class Tn {
  static defaults = de;
  static instances = Ln;
  static overrides = ae;
  static registry = an;
  static version = '4.4.6';
  static getChart = En;
  static register(...t) {
    an.add(...t), Fn();
  }
  static unregister(...t) {
    an.remove(...t), Fn();
  }
  constructor(t, e) {
    const i = (this.config = new _n(e)),
      s = jn(t),
      n = En(s);
    if (n)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          n.id +
          "' must be destroyed before the canvas with ID '" +
          n.canvas.id +
          "' can be reused."
      );
    const r = i.createResolver(i.chartOptionScopes(), this.getContext());
    (this.platform = new (i.platform ||
      (function (t) {
        return !hi() ||
          ('undefined' != typeof OffscreenCanvas &&
            t instanceof OffscreenCanvas)
          ? Ls
          : Xs;
      })(s))()),
      this.platform.updateConfig(i);
    const o = this.platform.acquireContext(s, r.aspectRatio),
      h = o && o.canvas,
      a = h && h.height,
      c = h && h.width;
    (this.id = H()),
      (this.ctx = o),
      (this.canvas = h),
      (this.width = c),
      (this.height = a),
      (this._options = r),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this._plugins = new cn()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = (function (t, e) {
        let i;
        return function (...s) {
          return (
            e ? (clearTimeout(i), (i = setTimeout(t, e, s))) : t.apply(this, s),
            e
          );
        };
      })((t) => this.update(t), r.resizeDelay || 0)),
      (this._dataChanges = []),
      (Ln[this.id] = this),
      o && h
        ? (Pi.listen(this, 'complete', Cn),
          Pi.listen(this, 'progress', Rn),
          this._initialize(),
          this.attached && this.update())
        : console.error(
            "Failed to create chart: can't acquire context from the given item"
          );
  }
  get aspectRatio() {
    const {
      options: {aspectRatio: t, maintainAspectRatio: e},
      width: i,
      height: s,
      _aspectRatio: n,
    } = this;
    return V(t) ? (e && n ? n : s ? i / s : null) : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return an;
  }
  _initialize() {
    return (
      this.notifyPlugins('beforeInit'),
      this.options.responsive
        ? this.resize()
        : mi(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins('afterInit'),
      this
    );
  }
  clear() {
    return me(this.canvas, this.ctx), this;
  }
  stop() {
    return Pi.stop(this), this;
  }
  resize(t, e) {
    Pi.running(this)
      ? (this._resizeBeforeDraw = {width: t, height: e})
      : this._resize(t, e);
  }
  _resize(t, e) {
    const i = this.options,
      s = this.canvas,
      n = i.maintainAspectRatio && this.aspectRatio,
      r = this.platform.getMaximumSize(s, t, e, n),
      o = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
      h = this.width ? 'resize' : 'attach';
    (this.width = r.width),
      (this.height = r.height),
      (this._aspectRatio = this.aspectRatio),
      mi(this, o, !0) &&
        (this.notifyPlugins('resize', {size: r}),
        G(i.onResize, [this, r], this),
        this.attached && this._doResize(h) && this.render());
  }
  ensureScalesHaveIDs() {
    J(this.options.scales || {}, (t, e) => {
      t.id = e;
    });
  }
  buildOrUpdateScales() {
    const t = this.options,
      e = t.scales,
      i = this.scales,
      s = Object.keys(i).reduce((t, e) => ((t[e] = !1), t), {});
    let n = [];
    e &&
      (n = n.concat(
        Object.keys(e).map((t) => {
          const i = e[t],
            s = pn(t, i),
            n = 'r' === s,
            r = 'x' === s;
          return {
            options: i,
            dposition: n ? 'chartArea' : r ? 'bottom' : 'left',
            dtype: n ? 'radialLinear' : r ? 'category' : 'linear',
          };
        })
      )),
      J(n, (e) => {
        const n = e.options,
          r = n.id,
          o = pn(r, n),
          h = q(n.type, e.dtype);
        (void 0 !== n.position && Dn(n.position, o) === Dn(e.dposition)) ||
          (n.position = e.dposition),
          (s[r] = !0);
        let a = null;
        if (r in i && i[r].type === h) a = i[r];
        else {
          (a = new (an.getScale(h))({
            id: r,
            type: h,
            ctx: this.ctx,
            chart: this,
          })),
            (i[a.id] = a);
        }
        a.init(n, t);
      }),
      J(s, (t, e) => {
        t || delete i[e];
      }),
      J(i, (t) => {
        Rs.configure(this, t, t.options), Rs.addBox(this, t);
      });
  }
  _updateMetasets() {
    const t = this._metasets,
      e = this.data.datasets.length,
      i = t.length;
    if ((t.sort((t, e) => t.index - e.index), i > e)) {
      for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
      t.splice(e, i - e);
    }
    this._sortedMetasets = t.slice(0).sort(An('order', 'index'));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: t,
      data: {datasets: e},
    } = this;
    t.length > e.length && delete this._stacks,
      t.forEach((t, i) => {
        0 === e.filter((e) => e === t._dataset).length &&
          this._destroyDatasetMeta(i);
      });
  }
  buildOrUpdateControllers() {
    const t = [],
      e = this.data.datasets;
    let i, s;
    for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) {
      const s = e[i];
      let n = this.getDatasetMeta(i);
      const r = s.type || this.config.type;
      if (
        (n.type &&
          n.type !== r &&
          (this._destroyDatasetMeta(i), (n = this.getDatasetMeta(i))),
        (n.type = r),
        (n.indexAxis = s.indexAxis || fn(r, this.options)),
        (n.order = s.order || 0),
        (n.index = i),
        (n.label = '' + s.label),
        (n.visible = this.isDatasetVisible(i)),
        n.controller)
      )
        n.controller.updateIndex(i), n.controller.linkScales();
      else {
        const e = an.getController(r),
          {datasetElementType: s, dataElementType: o} = de.datasets[r];
        Object.assign(e, {
          dataElementType: an.getElement(o),
          datasetElementType: s && an.getElement(s),
        }),
          (n.controller = new e(this, i)),
          t.push(n.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    J(
      this.data.datasets,
      (t, e) => {
        this.getDatasetMeta(e).controller.reset();
      },
      this
    );
  }
  reset() {
    this._resetElements(), this.notifyPlugins('reset');
  }
  update(t) {
    const e = this.config;
    e.update();
    const i = (this._options = e.createResolver(
        e.chartOptionScopes(),
        this.getContext()
      )),
      s = (this._animationsDisabled = !i.animation);
    if (
      (this._updateScales(),
      this._checkEventBindings(),
      this._updateHiddenIndices(),
      this._plugins.invalidate(),
      !1 === this.notifyPlugins('beforeUpdate', {mode: t, cancelable: !0}))
    )
      return;
    const n = this.buildOrUpdateControllers();
    this.notifyPlugins('beforeElementsUpdate');
    let r = 0;
    for (let t = 0, e = this.data.datasets.length; t < e; t++) {
      const {controller: e} = this.getDatasetMeta(t),
        i = !s && -1 === n.indexOf(e);
      e.buildOrUpdateElements(i), (r = Math.max(+e.getMaxOverflow(), r));
    }
    (r = this._minPadding = i.layout.autoPadding ? r : 0),
      this._updateLayout(r),
      s ||
        J(n, (t) => {
          t.reset();
        }),
      this._updateDatasets(t),
      this.notifyPlugins('afterUpdate', {mode: t}),
      this._layers.sort(An('z', '_idx'));
    const {_active: o, _lastEvent: h} = this;
    h
      ? this._eventHandler(h, !0)
      : o.length && this._updateHoverStyles(o, o, !0),
      this.render();
  }
  _updateScales() {
    J(this.scales, (t) => {
      Rs.removeBox(this, t);
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options,
      e = new Set(Object.keys(this._listeners)),
      i = new Set(t.events);
    (ft(e, i) && !!this._responsiveListeners === t.responsive) ||
      (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const {_hiddenIndices: t} = this,
      e = this._getUniformDataChanges() || [];
    for (const {method: i, start: s, count: n} of e) {
      Pn(t, s, '_removeElements' === i ? -n : n);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length) return;
    this._dataChanges = [];
    const e = this.data.datasets.length,
      i = (e) =>
        new Set(
          t
            .filter((t) => t[0] === e)
            .map((t, e) => e + ',' + t.splice(1).join(','))
        ),
      s = i(0);
    for (let t = 1; t < e; t++) if (!ft(s, i(t))) return;
    return Array.from(s)
      .map((t) => t.split(','))
      .map((t) => ({method: t[1], start: +t[2], count: +t[3]}));
  }
  _updateLayout(t) {
    if (!1 === this.notifyPlugins('beforeLayout', {cancelable: !0})) return;
    Rs.update(this, this.width, this.height, t);
    const e = this.chartArea,
      i = e.width <= 0 || e.height <= 0;
    (this._layers = []),
      J(
        this.boxes,
        (t) => {
          (i && 'chartArea' === t.position) ||
            (t.configure && t.configure(), this._layers.push(...t._layers()));
        },
        this
      ),
      this._layers.forEach((t, e) => {
        t._idx = e;
      }),
      this.notifyPlugins('afterLayout');
  }
  _updateDatasets(t) {
    if (
      !1 !==
      this.notifyPlugins('beforeDatasetsUpdate', {mode: t, cancelable: !0})
    ) {
      for (let t = 0, e = this.data.datasets.length; t < e; ++t)
        this.getDatasetMeta(t).controller.configure();
      for (let e = 0, i = this.data.datasets.length; e < i; ++e)
        this._updateDataset(e, ut(t) ? t({datasetIndex: e}) : t);
      this.notifyPlugins('afterDatasetsUpdate', {mode: t});
    }
  }
  _updateDataset(t, e) {
    const i = this.getDatasetMeta(t),
      s = {meta: i, index: t, mode: e, cancelable: !0};
    !1 !== this.notifyPlugins('beforeDatasetUpdate', s) &&
      (i.controller._update(e),
      (s.cancelable = !1),
      this.notifyPlugins('afterDatasetUpdate', s));
  }
  render() {
    !1 !== this.notifyPlugins('beforeRender', {cancelable: !0}) &&
      (Pi.has(this)
        ? this.attached && !Pi.running(this) && Pi.start(this)
        : (this.draw(), Cn({chart: this})));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const {width: t, height: e} = this._resizeBeforeDraw;
      (this._resizeBeforeDraw = null), this._resize(t, e);
    }
    if ((this.clear(), this.width <= 0 || this.height <= 0)) return;
    if (!1 === this.notifyPlugins('beforeDraw', {cancelable: !0})) return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
    this.notifyPlugins('afterDraw');
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets,
      i = [];
    let s, n;
    for (s = 0, n = e.length; s < n; ++s) {
      const n = e[s];
      (t && !n.visible) || i.push(n);
    }
    return i;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (!1 === this.notifyPlugins('beforeDatasetsDraw', {cancelable: !0}))
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
    this.notifyPlugins('afterDatasetsDraw');
  }
  _drawDataset(t) {
    const e = this.ctx,
      i = t._clip,
      s = !i.disabled,
      n = (function (t, e) {
        const {xScale: i, yScale: s} = t;
        return i && s
          ? {
              left: Nn(i, e, 'left'),
              right: Nn(i, e, 'right'),
              top: Nn(s, e, 'top'),
              bottom: Nn(s, e, 'bottom'),
            }
          : e;
      })(t, this.chartArea),
      r = {meta: t, index: t.index, cancelable: !0};
    !1 !== this.notifyPlugins('beforeDatasetDraw', r) &&
      (s &&
        Me(e, {
          left: !1 === i.left ? 0 : n.left - i.left,
          right: !1 === i.right ? this.width : n.right + i.right,
          top: !1 === i.top ? 0 : n.top - i.top,
          bottom: !1 === i.bottom ? this.height : n.bottom + i.bottom,
        }),
      t.controller.draw(),
      s && we(e),
      (r.cancelable = !1),
      this.notifyPlugins('afterDatasetDraw', r));
  }
  isPointInArea(t) {
    return ye(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, i, s) {
    const n = ms.modes[e];
    return 'function' == typeof n ? n(this, t, i, s) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t],
      i = this._metasets;
    let s = i.filter((t) => t && t._dataset === e).pop();
    return (
      s ||
        ((s = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (e && e.order) || 0,
          index: t,
          _dataset: e,
          _parsed: [],
          _sorted: !1,
        }),
        i.push(s)),
      s
    );
  }
  getContext() {
    return (
      this.$context || (this.$context = ze(null, {chart: this, type: 'chart'}))
    );
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e) return !1;
    const i = this.getDatasetMeta(t);
    return 'boolean' == typeof i.hidden ? !i.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    this.getDatasetMeta(t).hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, i) {
    const s = i ? 'show' : 'hide',
      n = this.getDatasetMeta(t),
      r = n.controller._resolveAnimations(void 0, s);
    lt(e)
      ? ((n.data[e].hidden = !i), this.update())
      : (this.setDatasetVisibility(t, i),
        r.update(n, {visible: i}),
        this.update((e) => (e.datasetIndex === t ? s : void 0)));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (
      this.stop(), Pi.remove(this), t = 0, e = this.data.datasets.length;
      t < e;
      ++t
    )
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins('beforeDestroy');
    const {canvas: t, ctx: e} = this;
    this._stop(),
      this.config.clearCache(),
      t &&
        (this.unbindEvents(),
        me(t, e),
        this.platform.releaseContext(e),
        (this.canvas = null),
        (this.ctx = null)),
      delete Ln[this.id],
      this.notifyPlugins('afterDestroy');
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(),
      this.options.responsive
        ? this.bindResponsiveEvents()
        : (this.attached = !0);
  }
  bindUserEvents() {
    const t = this._listeners,
      e = this.platform,
      i = (i, s) => {
        e.addEventListener(this, i, s), (t[i] = s);
      },
      s = (t, e, i) => {
        (t.offsetX = e), (t.offsetY = i), this._eventHandler(t);
      };
    J(this.options.events, (t) => i(t, s));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners,
      e = this.platform,
      i = (i, s) => {
        e.addEventListener(this, i, s), (t[i] = s);
      },
      s = (i, s) => {
        t[i] && (e.removeEventListener(this, i, s), delete t[i]);
      },
      n = (t, e) => {
        this.canvas && this.resize(t, e);
      };
    let r;
    const o = () => {
      s('attach', o),
        (this.attached = !0),
        this.resize(),
        i('resize', n),
        i('detach', r);
    };
    (r = () => {
      (this.attached = !1),
        s('resize', n),
        this._stop(),
        this._resize(0, 0),
        i('attach', o);
    }),
      e.isAttached(this.canvas) ? o() : r();
  }
  unbindEvents() {
    J(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }),
      (this._listeners = {}),
      J(this._responsiveListeners, (t, e) => {
        this.platform.removeEventListener(this, e, t);
      }),
      (this._responsiveListeners = void 0);
  }
  updateHoverStyle(t, e, i) {
    const s = i ? 'set' : 'remove';
    let n, r, o, h;
    for (
      'dataset' === e &&
        ((n = this.getDatasetMeta(t[0].datasetIndex)),
        n.controller['_' + s + 'DatasetHoverStyle']()),
        o = 0,
        h = t.length;
      o < h;
      ++o
    ) {
      r = t[o];
      const e = r && this.getDatasetMeta(r.datasetIndex).controller;
      e && e[s + 'HoverStyle'](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [],
      i = t.map(({datasetIndex: t, index: e}) => {
        const i = this.getDatasetMeta(t);
        if (!i) throw new Error('No dataset found at index ' + t);
        return {datasetIndex: t, element: i.data[e], index: e};
      });
    !tt(i, e) &&
      ((this._active = i),
      (this._lastEvent = null),
      this._updateHoverStyles(i, e));
  }
  notifyPlugins(t, e, i) {
    return this._plugins.notify(this, t, e, i);
  }
  isPluginEnabled(t) {
    return 1 === this._plugins._cache.filter((e) => e.plugin.id === t).length;
  }
  _updateHoverStyles(t, e, i) {
    const s = this.options.hover,
      n = (t, e) =>
        t.filter(
          (t) =>
            !e.some(
              (e) => t.datasetIndex === e.datasetIndex && t.index === e.index
            )
        ),
      r = n(e, t),
      o = i ? t : n(t, e);
    r.length && this.updateHoverStyle(r, s.mode, !1),
      o.length && s.mode && this.updateHoverStyle(o, s.mode, !0);
  }
  _eventHandler(t, e) {
    const i = {
        event: t,
        replay: e,
        cancelable: !0,
        inChartArea: this.isPointInArea(t),
      },
      s = (e) =>
        (e.options.events || this.options.events).includes(t.native.type);
    if (!1 === this.notifyPlugins('beforeEvent', i, s)) return;
    const n = this._handleEvent(t, e, i.inChartArea);
    return (
      (i.cancelable = !1),
      this.notifyPlugins('afterEvent', i, s),
      (n || i.changed) && this.render(),
      this
    );
  }
  _handleEvent(t, e, i) {
    const {_active: s = [], options: n} = this,
      r = e,
      o = this._getActiveElements(t, s, i, r),
      h = (function (t) {
        return (
          'mouseup' === t.type || 'click' === t.type || 'contextmenu' === t.type
        );
      })(t),
      a = (function (t, e, i, s) {
        return i && 'mouseout' !== t.type ? (s ? e : t) : null;
      })(t, this._lastEvent, i, h);
    i &&
      ((this._lastEvent = null),
      G(n.onHover, [t, o, this], this),
      h && G(n.onClick, [t, o, this], this));
    const c = !tt(o, s);
    return (
      (c || e) && ((this._active = o), this._updateHoverStyles(o, s, e)),
      (this._lastEvent = a),
      c
    );
  }
  _getActiveElements(t, e, i, s) {
    if ('mouseout' === t.type) return [];
    if (!i) return e;
    const n = this.options.hover;
    return this.getElementsAtEventForMode(t, n.mode, n, s);
  }
}
function Fn() {
  return J(Tn.instances, (t) => t._plugins.invalidate());
}
function In(t, e, i, s) {
  const n = Ee(t.options.borderRadius, [
    'outerStart',
    'outerEnd',
    'innerStart',
    'innerEnd',
  ]);
  const r = (i - e) / 2,
    o = Math.min(r, (s * e) / 2),
    h = (t) => {
      const e = ((i - Math.min(r, t)) * s) / 2;
      return Nt(t, 0, Math.min(r, e));
    };
  return {
    outerStart: h(n.outerStart),
    outerEnd: h(n.outerEnd),
    innerStart: Nt(n.innerStart, 0, o),
    innerEnd: Nt(n.innerEnd, 0, o),
  };
}
function zn(t, e, i, s) {
  return {x: i + t * Math.cos(e), y: s + t * Math.sin(e)};
}
function $n(t, e, i, s, n, r) {
  const {x: o, y: h, startAngle: a, pixelMargin: c, innerRadius: l} = e,
    u = Math.max(e.outerRadius + s + i - c, 0),
    f = l > 0 ? l + s + i + c : 0;
  let d = 0;
  const p = n - a;
  if (s) {
    const t = ((l > 0 ? l - s : 0) + (u > 0 ? u - s : 0)) / 2;
    d = (p - (0 !== t ? (p * t) / (t + s) : p)) / 2;
  }
  const b = (p - Math.max(0.001, p * u - i / dt) / u) / 2,
    g = a + b + d,
    m = n - b - d,
    {
      outerStart: v,
      outerEnd: x,
      innerStart: y,
      innerEnd: M,
    } = In(e, f, u, m - g),
    w = u - v,
    _ = u - x,
    k = g + v / w,
    O = m - x / _,
    S = f + y,
    D = f + M,
    A = g + y / S,
    C = m - M / D;
  if ((t.beginPath(), r)) {
    const e = (k + O) / 2;
    if ((t.arc(o, h, u, k, e), t.arc(o, h, u, e, O), x > 0)) {
      const e = zn(_, O, o, h);
      t.arc(e.x, e.y, x, O, m + vt);
    }
    const i = zn(D, m, o, h);
    if ((t.lineTo(i.x, i.y), M > 0)) {
      const e = zn(D, C, o, h);
      t.arc(e.x, e.y, M, m + vt, C + Math.PI);
    }
    const s = (m - M / f + (g + y / f)) / 2;
    if (
      (t.arc(o, h, f, m - M / f, s, !0),
      t.arc(o, h, f, s, g + y / f, !0),
      y > 0)
    ) {
      const e = zn(S, A, o, h);
      t.arc(e.x, e.y, y, A + Math.PI, g - vt);
    }
    const n = zn(w, g, o, h);
    if ((t.lineTo(n.x, n.y), v > 0)) {
      const e = zn(w, k, o, h);
      t.arc(e.x, e.y, v, g - vt, k);
    }
  } else {
    t.moveTo(o, h);
    const e = Math.cos(k) * u + o,
      i = Math.sin(k) * u + h;
    t.lineTo(e, i);
    const s = Math.cos(O) * u + o,
      n = Math.sin(O) * u + h;
    t.lineTo(s, n);
  }
  t.closePath();
}
function Wn(t, e, i, s, n) {
  const {fullCircles: r, startAngle: o, circumference: h, options: a} = e,
    {
      borderWidth: c,
      borderJoinStyle: l,
      borderDash: u,
      borderDashOffset: f,
    } = a,
    d = 'inner' === a.borderAlign;
  if (!c) return;
  t.setLineDash(u || []),
    (t.lineDashOffset = f),
    d
      ? ((t.lineWidth = 2 * c), (t.lineJoin = l || 'round'))
      : ((t.lineWidth = c), (t.lineJoin = l || 'bevel'));
  let p = e.endAngle;
  if (r) {
    $n(t, e, i, s, p, n);
    for (let e = 0; e < r; ++e) t.stroke();
    isNaN(h) || (p = o + (h % pt || pt));
  }
  d &&
    (function (t, e, i) {
      const {
        startAngle: s,
        pixelMargin: n,
        x: r,
        y: o,
        outerRadius: h,
        innerRadius: a,
      } = e;
      let c = n / h;
      t.beginPath(),
        t.arc(r, o, h, s - c, i + c),
        a > n
          ? ((c = n / a), t.arc(r, o, a, i + c, s - c, !0))
          : t.arc(r, o, n, i + vt, s - vt),
        t.closePath(),
        t.clip();
    })(t, e, p),
    r || ($n(t, e, i, s, p, n), t.stroke());
}
class Bn extends Zs {
  static id = 'arc';
  static defaults = {
    borderAlign: 'center',
    borderColor: '#fff',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
  };
  static defaultRoutes = {backgroundColor: 'backgroundColor'};
  static descriptors = {_scriptable: !0, _indexable: (t) => 'borderDash' !== t};
  circumference;
  endAngle;
  fullCircles;
  innerRadius;
  outerRadius;
  pixelMargin;
  startAngle;
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      t && Object.assign(this, t);
  }
  inRange(t, e, i) {
    const s = this.getProps(['x', 'y'], i),
      {angle: n, distance: r} = Rt(s, {x: t, y: e}),
      {
        startAngle: o,
        endAngle: h,
        innerRadius: a,
        outerRadius: c,
        circumference: l,
      } = this.getProps(
        [
          'startAngle',
          'endAngle',
          'innerRadius',
          'outerRadius',
          'circumference',
        ],
        i
      ),
      u = (this.options.spacing + this.options.borderWidth) / 2,
      f = q(l, h - o),
      d = Pt(n, o, h) && o !== h,
      p = f >= pt || d,
      b = Tt(r, a + u, c + u);
    return p && b;
  }
  getCenterPoint(t) {
    const {
        x: e,
        y: i,
        startAngle: s,
        endAngle: n,
        innerRadius: r,
        outerRadius: o,
      } = this.getProps(
        ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'],
        t
      ),
      {offset: h, spacing: a} = this.options,
      c = (s + n) / 2,
      l = (r + o + a + h) / 2;
    return {x: e + Math.cos(c) * l, y: i + Math.sin(c) * l};
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const {options: e, circumference: i} = this,
      s = (e.offset || 0) / 4,
      n = (e.spacing || 0) / 2,
      r = e.circular;
    if (
      ((this.pixelMargin = 'inner' === e.borderAlign ? 0.33 : 0),
      (this.fullCircles = i > pt ? Math.floor(i / pt) : 0),
      0 === i || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return;
    t.save();
    const o = (this.startAngle + this.endAngle) / 2;
    t.translate(Math.cos(o) * s, Math.sin(o) * s);
    const h = s * (1 - Math.sin(Math.min(dt, i || 0)));
    (t.fillStyle = e.backgroundColor),
      (t.strokeStyle = e.borderColor),
      (function (t, e, i, s, n) {
        const {fullCircles: r, startAngle: o, circumference: h} = e;
        let a = e.endAngle;
        if (r) {
          $n(t, e, i, s, a, n);
          for (let e = 0; e < r; ++e) t.fill();
          isNaN(h) || (a = o + (h % pt || pt));
        }
        $n(t, e, i, s, a, n), t.fill();
      })(t, this, h, n, r),
      Wn(t, this, h, n, r),
      t.restore();
  }
}
function Yn(t, e, i = e) {
  (t.lineCap = q(i.borderCapStyle, e.borderCapStyle)),
    t.setLineDash(q(i.borderDash, e.borderDash)),
    (t.lineDashOffset = q(i.borderDashOffset, e.borderDashOffset)),
    (t.lineJoin = q(i.borderJoinStyle, e.borderJoinStyle)),
    (t.lineWidth = q(i.borderWidth, e.borderWidth)),
    (t.strokeStyle = q(i.borderColor, e.borderColor));
}
function Hn(t, e, i) {
  t.lineTo(i.x, i.y);
}
function Vn(t, e, i = {}) {
  const s = t.length,
    {start: n = 0, end: r = s - 1} = i,
    {start: o, end: h} = e,
    a = Math.max(n, o),
    c = Math.min(r, h),
    l = (n < o && r < o) || (n > h && r > h);
  return {
    count: s,
    start: a,
    loop: e.loop,
    ilen: c < a && !l ? s + c - a : c - a,
  };
}
function Un(t, e, i, s) {
  const {points: n, options: r} = e,
    {count: o, start: h, loop: a, ilen: c} = Vn(n, i, s),
    l = (function (t) {
      return t.stepped
        ? _e
        : t.tension || 'monotone' === t.cubicInterpolationMode
        ? ke
        : Hn;
    })(r);
  let u,
    f,
    d,
    {move: p = !0, reverse: b} = s || {};
  for (u = 0; u <= c; ++u)
    (f = n[(h + (b ? c - u : u)) % o]),
      f.skip ||
        (p ? (t.moveTo(f.x, f.y), (p = !1)) : l(t, d, f, b, r.stepped),
        (d = f));
  return a && ((f = n[(h + (b ? c : 0)) % o]), l(t, d, f, b, r.stepped)), !!a;
}
function Xn(t, e, i, s) {
  const n = e.points,
    {count: r, start: o, ilen: h} = Vn(n, i, s),
    {move: a = !0, reverse: c} = s || {};
  let l,
    u,
    f,
    d,
    p,
    b,
    g = 0,
    m = 0;
  const v = (t) => (o + (c ? h - t : t)) % r,
    x = () => {
      d !== p && (t.lineTo(g, p), t.lineTo(g, d), t.lineTo(g, b));
    };
  for (a && ((u = n[v(0)]), t.moveTo(u.x, u.y)), l = 0; l <= h; ++l) {
    if (((u = n[v(l)]), u.skip)) continue;
    const e = u.x,
      i = u.y,
      s = 0 | e;
    s === f
      ? (i < d ? (d = i) : i > p && (p = i), (g = (m * g + e) / ++m))
      : (x(), t.lineTo(e, i), (f = s), (m = 0), (d = p = i)),
      (b = i);
  }
  x();
}
function Zn(t) {
  const e = t.options,
    i = e.borderDash && e.borderDash.length;
  return !(
    t._decimated ||
    t._loop ||
    e.tension ||
    'monotone' === e.cubicInterpolationMode ||
    e.stepped ||
    i
  )
    ? Xn
    : Un;
}
const Kn = 'function' == typeof Path2D;
function qn(t, e, i, s) {
  Kn && !e.options.segment
    ? (function (t, e, i, s) {
        let n = e._path;
        n || ((n = e._path = new Path2D()), e.path(n, i, s) && n.closePath()),
          Yn(t, e.options),
          t.stroke(n);
      })(t, e, i, s)
    : (function (t, e, i, s) {
        const {segments: n, options: r} = e,
          o = Zn(e);
        for (const h of n)
          Yn(t, r, h.style),
            t.beginPath(),
            o(t, e, h, {start: i, end: i + s - 1}) && t.closePath(),
            t.stroke();
      })(t, e, i, s);
}
class Qn extends Zs {
  static id = 'line';
  static defaults = {
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: 'miter',
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: 'default',
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  };
  static defaultRoutes = {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
  };
  static descriptors = {
    _scriptable: !0,
    _indexable: (t) => 'borderDash' !== t && 'fill' !== t,
  };
  constructor(t) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const i = this.options;
    if (
      (i.tension || 'monotone' === i.cubicInterpolationMode) &&
      !i.stepped &&
      !this._pointsUpdated
    ) {
      const s = i.spanGaps ? this._loop : this._fullLoop;
      oi(this._points, i, t, s, e), (this._pointsUpdated = !0);
    }
  }
  set points(t) {
    (this._points = t),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return (
      this._segments ||
      (this._segments = (function (t, e) {
        const i = t.points,
          s = t.options.spanGaps,
          n = i.length;
        if (!n) return [];
        const r = !!t._loop,
          {start: o, end: h} = (function (t, e, i, s) {
            let n = 0,
              r = e - 1;
            if (i && !s) for (; n < e && !t[n].skip; ) n++;
            for (; n < e && t[n].skip; ) n++;
            for (n %= e, i && (r += n); r > n && t[r % e].skip; ) r--;
            return (r %= e), {start: n, end: r};
          })(i, n, r, s);
        return Ri(
          t,
          !0 === s
            ? [{start: o, end: h, loop: r}]
            : (function (t, e, i, s) {
                const n = t.length,
                  r = [];
                let o,
                  h = e,
                  a = t[e];
                for (o = e + 1; o <= i; ++o) {
                  const i = t[o % n];
                  i.skip || i.stop
                    ? a.skip ||
                      ((s = !1),
                      r.push({start: e % n, end: (o - 1) % n, loop: s}),
                      (e = h = i.stop ? o : null))
                    : ((h = o), a.skip && (e = o)),
                    (a = i);
                }
                return (
                  null !== h && r.push({start: e % n, end: h % n, loop: s}), r
                );
              })(
                i,
                o,
                h < o ? h + n : h,
                !!t._fullLoop && 0 === o && h === n - 1
              ),
          i,
          e
        );
      })(this, this.options.segment))
    );
  }
  first() {
    const t = this.segments,
      e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments,
      e = this.points,
      i = t.length;
    return i && e[t[i - 1].end];
  }
  interpolate(t, e) {
    const i = this.options,
      s = t[e],
      n = this.points,
      r = Ci(this, {property: e, start: s, end: s});
    if (!r.length) return;
    const o = [],
      h = (function (t) {
        return t.stepped
          ? Mi
          : t.tension || 'monotone' === t.cubicInterpolationMode
          ? wi
          : yi;
      })(i);
    let a, c;
    for (a = 0, c = r.length; a < c; ++a) {
      const {start: c, end: l} = r[a],
        u = n[c],
        f = n[l];
      if (u === f) {
        o.push(u);
        continue;
      }
      const d = h(u, f, Math.abs((s - u[e]) / (f[e] - u[e])), i.stepped);
      (d[e] = t[e]), o.push(d);
    }
    return 1 === o.length ? o[0] : o;
  }
  pathSegment(t, e, i) {
    return Zn(this)(t, this, e, i);
  }
  path(t, e, i) {
    const s = this.segments,
      n = Zn(this);
    let r = this._loop;
    (e = e || 0), (i = i || this.points.length - e);
    for (const o of s) r &= n(t, this, o, {start: e, end: e + i - 1});
    return !!r;
  }
  draw(t, e, i, s) {
    const n = this.options || {};
    (this.points || []).length &&
      n.borderWidth &&
      (t.save(), qn(t, this, i, s), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
function Gn(t, e, i, s) {
  const n = t.options,
    {[i]: r} = t.getProps([i], s);
  return Math.abs(e - r) < n.radius + n.hitRadius;
}
class Jn extends Zs {
  static id = 'point';
  parsed;
  skip;
  stop;
  static defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: 'circle',
    radius: 3,
    rotation: 0,
  };
  static defaultRoutes = {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
  };
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      t && Object.assign(this, t);
  }
  inRange(t, e, i) {
    const s = this.options,
      {x: n, y: r} = this.getProps(['x', 'y'], i);
    return (
      Math.pow(t - n, 2) + Math.pow(e - r, 2) <
      Math.pow(s.hitRadius + s.radius, 2)
    );
  }
  inXRange(t, e) {
    return Gn(this, t, 'x', e);
  }
  inYRange(t, e) {
    return Gn(this, t, 'y', e);
  }
  getCenterPoint(t) {
    const {x: e, y: i} = this.getProps(['x', 'y'], t);
    return {x: e, y: i};
  }
  size(t) {
    let e = (t = t || this.options || {}).radius || 0;
    e = Math.max(e, (e && t.hoverRadius) || 0);
    return 2 * (e + ((e && t.borderWidth) || 0));
  }
  draw(t, e) {
    const i = this.options;
    this.skip ||
      i.radius < 0.1 ||
      !ye(this, e, this.size(i) / 2) ||
      ((t.strokeStyle = i.borderColor),
      (t.lineWidth = i.borderWidth),
      (t.fillStyle = i.backgroundColor),
      ve(t, i, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
function tr(t, e) {
  const {
    x: i,
    y: s,
    base: n,
    width: r,
    height: o,
  } = t.getProps(['x', 'y', 'base', 'width', 'height'], e);
  let h, a, c, l, u;
  return (
    t.horizontal
      ? ((u = o / 2),
        (h = Math.min(i, n)),
        (a = Math.max(i, n)),
        (c = s - u),
        (l = s + u))
      : ((u = r / 2),
        (h = i - u),
        (a = i + u),
        (c = Math.min(s, n)),
        (l = Math.max(s, n))),
    {left: h, top: c, right: a, bottom: l}
  );
}
function er(t, e, i, s) {
  return t ? 0 : Nt(e, i, s);
}
function ir(t) {
  const e = tr(t),
    i = e.right - e.left,
    s = e.bottom - e.top,
    n = (function (t, e, i) {
      const s = t.options.borderWidth,
        n = t.borderSkipped,
        r = Pe(s);
      return {
        t: er(n.top, r.top, 0, i),
        r: er(n.right, r.right, 0, e),
        b: er(n.bottom, r.bottom, 0, i),
        l: er(n.left, r.left, 0, e),
      };
    })(t, i / 2, s / 2),
    r = (function (t, e, i) {
      const {enableBorderRadius: s} = t.getProps(['enableBorderRadius']),
        n = t.options.borderRadius,
        r = Ne(n),
        o = Math.min(e, i),
        h = t.borderSkipped,
        a = s || X(n);
      return {
        topLeft: er(!a || h.top || h.left, r.topLeft, 0, o),
        topRight: er(!a || h.top || h.right, r.topRight, 0, o),
        bottomLeft: er(!a || h.bottom || h.left, r.bottomLeft, 0, o),
        bottomRight: er(!a || h.bottom || h.right, r.bottomRight, 0, o),
      };
    })(t, i / 2, s / 2);
  return {
    outer: {x: e.left, y: e.top, w: i, h: s, radius: r},
    inner: {
      x: e.left + n.l,
      y: e.top + n.t,
      w: i - n.l - n.r,
      h: s - n.t - n.b,
      radius: {
        topLeft: Math.max(0, r.topLeft - Math.max(n.t, n.l)),
        topRight: Math.max(0, r.topRight - Math.max(n.t, n.r)),
        bottomLeft: Math.max(0, r.bottomLeft - Math.max(n.b, n.l)),
        bottomRight: Math.max(0, r.bottomRight - Math.max(n.b, n.r)),
      },
    },
  };
}
function sr(t, e, i, s) {
  const n = null === e,
    r = null === i,
    o = t && !(n && r) && tr(t, s);
  return o && (n || Tt(e, o.left, o.right)) && (r || Tt(i, o.top, o.bottom));
}
function nr(t, e) {
  t.rect(e.x, e.y, e.w, e.h);
}
function rr(t, e, i = {}) {
  const s = t.x !== i.x ? -e : 0,
    n = t.y !== i.y ? -e : 0,
    r = (t.x + t.w !== i.x + i.w ? e : 0) - s,
    o = (t.y + t.h !== i.y + i.h ? e : 0) - n;
  return {x: t.x + s, y: t.y + n, w: t.w + r, h: t.h + o, radius: t.radius};
}
class or extends Zs {
  static id = 'bar';
  static defaults = {
    borderSkipped: 'start',
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: 'auto',
    pointStyle: void 0,
  };
  static defaultRoutes = {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
  };
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.inflateAmount = void 0),
      t && Object.assign(this, t);
  }
  draw(t) {
    const {
        inflateAmount: e,
        options: {borderColor: i, backgroundColor: s},
      } = this,
      {inner: n, outer: r} = ir(this),
      o =
        (h = r.radius).topLeft || h.topRight || h.bottomLeft || h.bottomRight
          ? Ae
          : nr;
    var h;
    t.save(),
      (r.w === n.w && r.h === n.h) ||
        (t.beginPath(),
        o(t, rr(r, e, n)),
        t.clip(),
        o(t, rr(n, -e, r)),
        (t.fillStyle = i),
        t.fill('evenodd')),
      t.beginPath(),
      o(t, rr(n, e)),
      (t.fillStyle = s),
      t.fill(),
      t.restore();
  }
  inRange(t, e, i) {
    return sr(this, t, e, i);
  }
  inXRange(t, e) {
    return sr(this, t, null, e);
  }
  inYRange(t, e) {
    return sr(this, null, t, e);
  }
  getCenterPoint(t) {
    const {
      x: e,
      y: i,
      base: s,
      horizontal: n,
    } = this.getProps(['x', 'y', 'base', 'horizontal'], t);
    return {x: n ? (e + s) / 2 : e, y: n ? i : (i + s) / 2};
  }
  getRange(t) {
    return 'x' === t ? this.width / 2 : this.height / 2;
  }
}
var hr = Object.freeze({
  __proto__: null,
  ArcElement: Bn,
  BarElement: or,
  LineElement: Qn,
  PointElement: Jn,
});
const ar = [
    'rgb(54, 162, 235)',
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)',
  ],
  cr = ar.map((t) => t.replace('rgb(', 'rgba(').replace(')', ', 0.5)'));
function lr(t) {
  return ar[t % ar.length];
}
function ur(t) {
  return cr[t % cr.length];
}
function fr(t) {
  let e = 0;
  return (i, s) => {
    const n = t.getDatasetMeta(s).controller;
    n instanceof rs
      ? (e = (function (t, e) {
          return (t.backgroundColor = t.data.map(() => lr(e++))), e;
        })(i, e))
      : n instanceof os
      ? (e = (function (t, e) {
          return (t.backgroundColor = t.data.map(() => ur(e++))), e;
        })(i, e))
      : n &&
        (e = (function (t, e) {
          return (t.borderColor = lr(e)), (t.backgroundColor = ur(e)), ++e;
        })(i, e));
  };
}
function dr(t) {
  let e;
  for (e in t) if (t[e].borderColor || t[e].backgroundColor) return !0;
  return !1;
}
var pr = {
  id: 'colors',
  defaults: {enabled: !0, forceOverride: !1},
  beforeLayout(t, e, i) {
    if (!i.enabled) return;
    const {
        data: {datasets: s},
        options: n,
      } = t.config,
      {elements: r} = n,
      o =
        dr(s) ||
        ((h = n) && (h.borderColor || h.backgroundColor)) ||
        (r && dr(r)) ||
        'rgba(0,0,0,0.1)' !== de.borderColor ||
        'rgba(0,0,0,0.1)' !== de.backgroundColor;
    var h;
    if (!i.forceOverride && o) return;
    const a = fr(t);
    s.forEach(a);
  },
};
function br(t) {
  if (t._decimated) {
    const e = t._data;
    delete t._decimated,
      delete t._data,
      Object.defineProperty(t, 'data', {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: e,
      });
  }
}
function gr(t) {
  t.data.datasets.forEach((t) => {
    br(t);
  });
}
var mr = {
  id: 'decimation',
  defaults: {algorithm: 'min-max', enabled: !1},
  beforeElementsUpdate: (t, e, i) => {
    if (!i.enabled) return void gr(t);
    const s = t.width;
    t.data.datasets.forEach((e, n) => {
      const {_data: r, indexAxis: o} = e,
        h = t.getDatasetMeta(n),
        a = r || e.data;
      if ('y' === Ie([o, t.options.indexAxis])) return;
      if (!h.controller.supportsDecimation) return;
      const c = t.scales[h.xAxisID];
      if ('linear' !== c.type && 'time' !== c.type) return;
      if (t.options.parsing) return;
      let {start: l, count: u} = (function (t, e) {
        const i = e.length;
        let s,
          n = 0;
        const {iScale: r} = t,
          {min: o, max: h, minDefined: a, maxDefined: c} = r.getUserBounds();
        return (
          a && (n = Nt(It(e, r.axis, o).lo, 0, i - 1)),
          (s = c ? Nt(It(e, r.axis, h).hi + 1, n, i) - n : i - n),
          {start: n, count: s}
        );
      })(h, a);
      if (u <= (i.threshold || 4 * s)) return void br(e);
      let f;
      switch (
        (V(r) &&
          ((e._data = a),
          delete e.data,
          Object.defineProperty(e, 'data', {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return this._decimated;
            },
            set: function (t) {
              this._data = t;
            },
          })),
        i.algorithm)
      ) {
        case 'lttb':
          f = (function (t, e, i, s, n) {
            const r = n.samples || s;
            if (r >= i) return t.slice(e, e + i);
            const o = [],
              h = (i - 2) / (r - 2);
            let a = 0;
            const c = e + i - 1;
            let l,
              u,
              f,
              d,
              p,
              b = e;
            for (o[a++] = t[b], l = 0; l < r - 2; l++) {
              let s,
                n = 0,
                r = 0;
              const c = Math.floor((l + 1) * h) + 1 + e,
                g = Math.min(Math.floor((l + 2) * h) + 1, i) + e,
                m = g - c;
              for (s = c; s < g; s++) (n += t[s].x), (r += t[s].y);
              (n /= m), (r /= m);
              const v = Math.floor(l * h) + 1 + e,
                x = Math.min(Math.floor((l + 1) * h) + 1, i) + e,
                {x: y, y: M} = t[b];
              for (f = d = -1, s = v; s < x; s++)
                (d =
                  0.5 *
                  Math.abs((y - n) * (t[s].y - M) - (y - t[s].x) * (r - M))),
                  d > f && ((f = d), (u = t[s]), (p = s));
              (o[a++] = u), (b = p);
            }
            return (o[a++] = t[c]), o;
          })(a, l, u, s, i);
          break;
        case 'min-max':
          f = (function (t, e, i, s) {
            let n,
              r,
              o,
              h,
              a,
              c,
              l,
              u,
              f,
              d,
              p = 0,
              b = 0;
            const g = [],
              m = e + i - 1,
              v = t[e].x,
              x = t[m].x - v;
            for (n = e; n < e + i; ++n) {
              (r = t[n]), (o = ((r.x - v) / x) * s), (h = r.y);
              const e = 0 | o;
              if (e === a)
                h < f ? ((f = h), (c = n)) : h > d && ((d = h), (l = n)),
                  (p = (b * p + r.x) / ++b);
              else {
                const i = n - 1;
                if (!V(c) && !V(l)) {
                  const e = Math.min(c, l),
                    s = Math.max(c, l);
                  e !== u && e !== i && g.push({...t[e], x: p}),
                    s !== u && s !== i && g.push({...t[s], x: p});
                }
                n > 0 && i !== u && g.push(t[i]),
                  g.push(r),
                  (a = e),
                  (b = 0),
                  (f = d = h),
                  (c = l = u = n);
              }
            }
            return g;
          })(a, l, u, s);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`);
      }
      e._decimated = f;
    });
  },
  destroy(t) {
    gr(t);
  },
};
function vr(t, e, i, s) {
  if (s) return;
  let n = e[t],
    r = i[t];
  return (
    'angle' === t && ((n = Et(n)), (r = Et(r))), {property: t, start: n, end: r}
  );
}
function xr(t, e, i) {
  for (; e > t; e--) {
    const t = i[e];
    if (!isNaN(t.x) && !isNaN(t.y)) break;
  }
  return e;
}
function yr(t, e, i, s) {
  return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
}
function Mr(t, e) {
  let i = [],
    s = !1;
  return (
    U(t)
      ? ((s = !0), (i = t))
      : (i = (function (t, e) {
          const {x: i = null, y: s = null} = t || {},
            n = e.points,
            r = [];
          return (
            e.segments.forEach(({start: t, end: e}) => {
              e = xr(t, e, n);
              const o = n[t],
                h = n[e];
              null !== s
                ? (r.push({x: o.x, y: s}), r.push({x: h.x, y: s}))
                : null !== i &&
                  (r.push({x: i, y: o.y}), r.push({x: i, y: h.y}));
            }),
            r
          );
        })(t, e)),
    i.length
      ? new Qn({points: i, options: {tension: 0}, _loop: s, _fullLoop: s})
      : null
  );
}
function wr(t) {
  return t && !1 !== t.fill;
}
function _r(t, e, i) {
  let s = t[e].fill;
  const n = [e];
  let r;
  if (!i) return s;
  for (; !1 !== s && -1 === n.indexOf(s); ) {
    if (!Z(s)) return s;
    if (((r = t[s]), !r)) return !1;
    if (r.visible) return s;
    n.push(s), (s = r.fill);
  }
  return !1;
}
function kr(t, e, i) {
  const s = (function (t) {
    const e = t.options,
      i = e.fill;
    let s = q(i && i.target, i);
    void 0 === s && (s = !!e.backgroundColor);
    if (!1 === s || null === s) return !1;
    if (!0 === s) return 'origin';
    return s;
  })(t);
  if (X(s)) return !isNaN(s.value) && s;
  let n = parseFloat(s);
  return Z(n) && Math.floor(n) === n
    ? (function (t, e, i, s) {
        ('-' !== t && '+' !== t) || (i = e + i);
        if (i === e || i < 0 || i >= s) return !1;
        return i;
      })(s[0], e, n, i)
    : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(s) >= 0 && s;
}
function Or(t, e, i) {
  const s = [];
  for (let n = 0; n < i.length; n++) {
    const r = i[n],
      {first: o, last: h, point: a} = Sr(r, e, 'x');
    if (!(!a || (o && h)))
      if (o) s.unshift(a);
      else if ((t.push(a), !h)) break;
  }
  t.push(...s);
}
function Sr(t, e, i) {
  const s = t.interpolate(e, i);
  if (!s) return {};
  const n = s[i],
    r = t.segments,
    o = t.points;
  let h = !1,
    a = !1;
  for (let t = 0; t < r.length; t++) {
    const e = r[t],
      s = o[e.start][i],
      c = o[e.end][i];
    if (Tt(n, s, c)) {
      (h = n === s), (a = n === c);
      break;
    }
  }
  return {first: h, last: a, point: s};
}
class Dr {
  constructor(t) {
    (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
  }
  pathSegment(t, e, i) {
    const {x: s, y: n, radius: r} = this;
    return (
      (e = e || {start: 0, end: pt}),
      t.arc(s, n, r, e.end, e.start, !0),
      !i.bounds
    );
  }
  interpolate(t) {
    const {x: e, y: i, radius: s} = this,
      n = t.angle;
    return {x: e + Math.cos(n) * s, y: i + Math.sin(n) * s, angle: n};
  }
}
function Ar(t) {
  const {chart: e, fill: i, line: s} = t;
  if (Z(i))
    return (function (t, e) {
      const i = t.getDatasetMeta(e),
        s = i && t.isDatasetVisible(e);
      return s ? i.dataset : null;
    })(e, i);
  if ('stack' === i)
    return (function (t) {
      const {scale: e, index: i, line: s} = t,
        n = [],
        r = s.segments,
        o = s.points,
        h = (function (t, e) {
          const i = [],
            s = t.getMatchingVisibleMetas('line');
          for (let t = 0; t < s.length; t++) {
            const n = s[t];
            if (n.index === e) break;
            n.hidden || i.unshift(n.dataset);
          }
          return i;
        })(e, i);
      h.push(Mr({x: null, y: e.bottom}, s));
      for (let t = 0; t < r.length; t++) {
        const e = r[t];
        for (let t = e.start; t <= e.end; t++) Or(n, o[t], h);
      }
      return new Qn({points: n, options: {}});
    })(t);
  if ('shape' === i) return !0;
  const n = (function (t) {
    const e = t.scale || {};
    if (e.getPointPositionForValue)
      return (function (t) {
        const {scale: e, fill: i} = t,
          s = e.options,
          n = e.getLabels().length,
          r = s.reverse ? e.max : e.min,
          o = (function (t, e, i) {
            let s;
            return (
              (s =
                'start' === t
                  ? i
                  : 'end' === t
                  ? e.options.reverse
                    ? e.min
                    : e.max
                  : X(t)
                  ? t.value
                  : e.getBaseValue()),
              s
            );
          })(i, e, r),
          h = [];
        if (s.grid.circular) {
          const t = e.getPointPositionForValue(0, r);
          return new Dr({
            x: t.x,
            y: t.y,
            radius: e.getDistanceFromCenterForValue(o),
          });
        }
        for (let t = 0; t < n; ++t) h.push(e.getPointPositionForValue(t, o));
        return h;
      })(t);
    return (function (t) {
      const {scale: e = {}, fill: i} = t,
        s = (function (t, e) {
          let i = null;
          return (
            'start' === t
              ? (i = e.bottom)
              : 'end' === t
              ? (i = e.top)
              : X(t)
              ? (i = e.getPixelForValue(t.value))
              : e.getBasePixel && (i = e.getBasePixel()),
            i
          );
        })(i, e);
      if (Z(s)) {
        const t = e.isHorizontal();
        return {x: t ? s : null, y: t ? null : s};
      }
      return null;
    })(t);
  })(t);
  return n instanceof Dr ? n : Mr(n, s);
}
function Cr(t, e, i) {
  const s = Ar(e),
    {line: n, scale: r, axis: o} = e,
    h = n.options,
    a = h.fill,
    c = h.backgroundColor,
    {above: l = c, below: u = c} = a || {};
  s &&
    n.points.length &&
    (Me(t, i),
    (function (t, e) {
      const {line: i, target: s, above: n, below: r, area: o, scale: h} = e,
        a = i._loop ? 'angle' : e.axis;
      t.save(),
        'x' === a &&
          r !== n &&
          (Rr(t, s, o.top),
          jr(t, {line: i, target: s, color: n, scale: h, property: a}),
          t.restore(),
          t.save(),
          Rr(t, s, o.bottom));
      jr(t, {line: i, target: s, color: r, scale: h, property: a}), t.restore();
    })(t, {line: n, target: s, above: l, below: u, area: i, scale: r, axis: o}),
    we(t));
}
function Rr(t, e, i) {
  const {segments: s, points: n} = e;
  let r = !0,
    o = !1;
  t.beginPath();
  for (const h of s) {
    const {start: s, end: a} = h,
      c = n[s],
      l = n[xr(s, a, n)];
    r ? (t.moveTo(c.x, c.y), (r = !1)) : (t.lineTo(c.x, i), t.lineTo(c.x, c.y)),
      (o = !!e.pathSegment(t, h, {move: o})),
      o ? t.closePath() : t.lineTo(l.x, i);
  }
  t.lineTo(e.first().x, i), t.closePath(), t.clip();
}
function jr(t, e) {
  const {line: i, target: s, property: n, color: r, scale: o} = e,
    h = (function (t, e, i) {
      const s = t.segments,
        n = t.points,
        r = e.points,
        o = [];
      for (const t of s) {
        let {start: s, end: h} = t;
        h = xr(s, h, n);
        const a = vr(i, n[s], n[h], t.loop);
        if (!e.segments) {
          o.push({source: t, target: a, start: n[s], end: n[h]});
          continue;
        }
        const c = Ci(e, a);
        for (const e of c) {
          const s = vr(i, r[e.start], r[e.end], e.loop),
            h = Ai(t, n, s);
          for (const t of h)
            o.push({
              source: t,
              target: e,
              start: {[i]: yr(a, s, 'start', Math.max)},
              end: {[i]: yr(a, s, 'end', Math.min)},
            });
        }
      }
      return o;
    })(i, s, n);
  for (const {source: e, target: a, start: c, end: l} of h) {
    const {style: {backgroundColor: h = r} = {}} = e,
      u = !0 !== s;
    t.save(), (t.fillStyle = h), Lr(t, o, u && vr(n, c, l)), t.beginPath();
    const f = !!i.pathSegment(t, e);
    let d;
    if (u) {
      f ? t.closePath() : Er(t, s, l, n);
      const e = !!s.pathSegment(t, a, {move: f, reverse: !0});
      (d = f && e), d || Er(t, s, c, n);
    }
    t.closePath(), t.fill(d ? 'evenodd' : 'nonzero'), t.restore();
  }
}
function Lr(t, e, i) {
  const {top: s, bottom: n} = e.chart.chartArea,
    {property: r, start: o, end: h} = i || {};
  'x' === r && (t.beginPath(), t.rect(o, s, h - o, n - s), t.clip());
}
function Er(t, e, i, s) {
  const n = e.interpolate(i, s);
  n && t.lineTo(n.x, n.y);
}
var Pr = {
  id: 'filler',
  afterDatasetsUpdate(t, e, i) {
    const s = (t.data.datasets || []).length,
      n = [];
    let r, o, h, a;
    for (o = 0; o < s; ++o)
      (r = t.getDatasetMeta(o)),
        (h = r.dataset),
        (a = null),
        h &&
          h.options &&
          h instanceof Qn &&
          (a = {
            visible: t.isDatasetVisible(o),
            index: o,
            fill: kr(h, o, s),
            chart: t,
            axis: r.controller.options.indexAxis,
            scale: r.vScale,
            line: h,
          }),
        (r.$filler = a),
        n.push(a);
    for (o = 0; o < s; ++o)
      (a = n[o]), a && !1 !== a.fill && (a.fill = _r(n, o, i.propagate));
  },
  beforeDraw(t, e, i) {
    const s = 'beforeDraw' === i.drawTime,
      n = t.getSortedVisibleDatasetMetas(),
      r = t.chartArea;
    for (let e = n.length - 1; e >= 0; --e) {
      const i = n[e].$filler;
      i &&
        (i.line.updateControlPoints(r, i.axis), s && i.fill && Cr(t.ctx, i, r));
    }
  },
  beforeDatasetsDraw(t, e, i) {
    if ('beforeDatasetsDraw' !== i.drawTime) return;
    const s = t.getSortedVisibleDatasetMetas();
    for (let e = s.length - 1; e >= 0; --e) {
      const i = s[e].$filler;
      wr(i) && Cr(t.ctx, i, t.chartArea);
    }
  },
  beforeDatasetDraw(t, e, i) {
    const s = e.meta.$filler;
    wr(s) && 'beforeDatasetDraw' === i.drawTime && Cr(t.ctx, s, t.chartArea);
  },
  defaults: {propagate: !0, drawTime: 'beforeDatasetDraw'},
};
const Nr = (t, e) => {
  let {boxHeight: i = e, boxWidth: s = e} = t;
  return (
    t.usePointStyle &&
      ((i = Math.min(i, e)), (s = t.pointStyleWidth || Math.min(s, e))),
    {boxWidth: s, boxHeight: i, itemHeight: Math.max(e, i)}
  );
};
class Tr extends Zs {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, e, i) {
    (this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = i),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = G(t.generateLabels, [this.chart], this) || [];
    t.filter && (e = e.filter((e) => t.filter(e, this.chart.data))),
      t.sort && (e = e.sort((e, i) => t.sort(e, i, this.chart.data))),
      this.options.reverse && e.reverse(),
      (this.legendItems = e);
  }
  fit() {
    const {options: t, ctx: e} = this;
    if (!t.display) return void (this.width = this.height = 0);
    const i = t.labels,
      s = Fe(i.font),
      n = s.size,
      r = this._computeTitleHeight(),
      {boxWidth: o, itemHeight: h} = Nr(i, n);
    let a, c;
    (e.font = s.string),
      this.isHorizontal()
        ? ((a = this.maxWidth), (c = this._fitRows(r, n, o, h) + 10))
        : ((c = this.maxHeight), (a = this._fitCols(r, s, o, h) + 10)),
      (this.width = Math.min(a, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(c, t.maxHeight || this.maxHeight));
  }
  _fitRows(t, e, i, s) {
    const {
        ctx: n,
        maxWidth: r,
        options: {
          labels: {padding: o},
        },
      } = this,
      h = (this.legendHitBoxes = []),
      a = (this.lineWidths = [0]),
      c = s + o;
    let l = t;
    (n.textAlign = 'left'), (n.textBaseline = 'middle');
    let u = -1,
      f = -c;
    return (
      this.legendItems.forEach((t, d) => {
        const p = i + e / 2 + n.measureText(t.text).width;
        (0 === d || a[a.length - 1] + p + 2 * o > r) &&
          ((l += c), (a[a.length - (d > 0 ? 0 : 1)] = 0), (f += c), u++),
          (h[d] = {left: 0, top: f, row: u, width: p, height: s}),
          (a[a.length - 1] += p + o);
      }),
      l
    );
  }
  _fitCols(t, e, i, s) {
    const {
        ctx: n,
        maxHeight: r,
        options: {
          labels: {padding: o},
        },
      } = this,
      h = (this.legendHitBoxes = []),
      a = (this.columnSizes = []),
      c = r - t;
    let l = o,
      u = 0,
      f = 0,
      d = 0,
      p = 0;
    return (
      this.legendItems.forEach((t, r) => {
        const {itemWidth: b, itemHeight: g} = (function (t, e, i, s, n) {
          const r = (function (t, e, i, s) {
              let n = t.text;
              n &&
                'string' != typeof n &&
                (n = n.reduce((t, e) => (t.length > e.length ? t : e)));
              return e + i.size / 2 + s.measureText(n).width;
            })(s, t, e, i),
            o = (function (t, e, i) {
              let s = t;
              'string' != typeof e.text && (s = Fr(e, i));
              return s;
            })(n, s, e.lineHeight);
          return {itemWidth: r, itemHeight: o};
        })(i, e, n, t, s);
        r > 0 &&
          f + g + 2 * o > c &&
          ((l += u + o),
          a.push({width: u, height: f}),
          (d += u + o),
          p++,
          (u = f = 0)),
          (h[r] = {left: d, top: f, col: p, width: b, height: g}),
          (u = Math.max(u, b)),
          (f += g + o);
      }),
      (l += u),
      a.push({width: u, height: f}),
      l
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: e,
        options: {
          align: i,
          labels: {padding: s},
          rtl: n,
        },
      } = this,
      r = _i(n, this.left, this.width);
    if (this.isHorizontal()) {
      let n = 0,
        o = Ut(i, this.left + s, this.right - this.lineWidths[n]);
      for (const h of e)
        n !== h.row &&
          ((n = h.row),
          (o = Ut(i, this.left + s, this.right - this.lineWidths[n]))),
          (h.top += this.top + t + s),
          (h.left = r.leftForLtr(r.x(o), h.width)),
          (o += h.width + s);
    } else {
      let n = 0,
        o = Ut(i, this.top + t + s, this.bottom - this.columnSizes[n].height);
      for (const h of e)
        h.col !== n &&
          ((n = h.col),
          (o = Ut(
            i,
            this.top + t + s,
            this.bottom - this.columnSizes[n].height
          ))),
          (h.top = o),
          (h.left += this.left + s),
          (h.left = r.leftForLtr(r.x(h.left), h.width)),
          (o += h.height + s);
    }
  }
  isHorizontal() {
    return (
      'top' === this.options.position || 'bottom' === this.options.position
    );
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Me(t, this), this._draw(), we(t);
    }
  }
  _draw() {
    const {options: t, columnSizes: e, lineWidths: i, ctx: s} = this,
      {align: n, labels: r} = t,
      o = de.color,
      h = _i(t.rtl, this.left, this.width),
      a = Fe(r.font),
      {padding: c} = r,
      l = a.size,
      u = l / 2;
    let f;
    this.drawTitle(),
      (s.textAlign = h.textAlign('left')),
      (s.textBaseline = 'middle'),
      (s.lineWidth = 0.5),
      (s.font = a.string);
    const {boxWidth: d, boxHeight: p, itemHeight: b} = Nr(r, l),
      g = this.isHorizontal(),
      m = this._computeTitleHeight();
    (f = g
      ? {
          x: Ut(n, this.left + c, this.right - i[0]),
          y: this.top + c + m,
          line: 0,
        }
      : {
          x: this.left + c,
          y: Ut(n, this.top + m + c, this.bottom - e[0].height),
          line: 0,
        }),
      ki(this.ctx, t.textDirection);
    const v = b + c;
    this.legendItems.forEach((x, y) => {
      (s.strokeStyle = x.fontColor), (s.fillStyle = x.fontColor);
      const M = s.measureText(x.text).width,
        w = h.textAlign(x.textAlign || (x.textAlign = r.textAlign)),
        _ = d + u + M;
      let k = f.x,
        O = f.y;
      h.setWidth(this.width),
        g
          ? y > 0 &&
            k + _ + c > this.right &&
            ((O = f.y += v),
            f.line++,
            (k = f.x = Ut(n, this.left + c, this.right - i[f.line])))
          : y > 0 &&
            O + v > this.bottom &&
            ((k = f.x = k + e[f.line].width + c),
            f.line++,
            (O = f.y =
              Ut(n, this.top + m + c, this.bottom - e[f.line].height)));
      if (
        ((function (t, e, i) {
          if (isNaN(d) || d <= 0 || isNaN(p) || p < 0) return;
          s.save();
          const n = q(i.lineWidth, 1);
          if (
            ((s.fillStyle = q(i.fillStyle, o)),
            (s.lineCap = q(i.lineCap, 'butt')),
            (s.lineDashOffset = q(i.lineDashOffset, 0)),
            (s.lineJoin = q(i.lineJoin, 'miter')),
            (s.lineWidth = n),
            (s.strokeStyle = q(i.strokeStyle, o)),
            s.setLineDash(q(i.lineDash, [])),
            r.usePointStyle)
          ) {
            const o = {
                radius: (p * Math.SQRT2) / 2,
                pointStyle: i.pointStyle,
                rotation: i.rotation,
                borderWidth: n,
              },
              a = h.xPlus(t, d / 2);
            xe(s, o, a, e + u, r.pointStyleWidth && d);
          } else {
            const r = e + Math.max((l - p) / 2, 0),
              o = h.leftForLtr(t, d),
              a = Ne(i.borderRadius);
            s.beginPath(),
              Object.values(a).some((t) => 0 !== t)
                ? Ae(s, {x: o, y: r, w: d, h: p, radius: a})
                : s.rect(o, r, d, p),
              s.fill(),
              0 !== n && s.stroke();
          }
          s.restore();
        })(h.x(k), O, x),
        (k = ((t, e, i, s) =>
          t === (s ? 'left' : 'right') ? i : 'center' === t ? (e + i) / 2 : e)(
          w,
          k + d + u,
          g ? k + _ : this.right,
          t.rtl
        )),
        (function (t, e, i) {
          De(s, i.text, t, e + b / 2, a, {
            strikethrough: i.hidden,
            textAlign: h.textAlign(i.textAlign),
          });
        })(h.x(k), O, x),
        g)
      )
        f.x += _ + c;
      else if ('string' != typeof x.text) {
        const t = a.lineHeight;
        f.y += Fr(x, t) + c;
      } else f.y += v;
    }),
      Oi(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options,
      e = t.title,
      i = Fe(e.font),
      s = Te(e.padding);
    if (!e.display) return;
    const n = _i(t.rtl, this.left, this.width),
      r = this.ctx,
      o = e.position,
      h = i.size / 2,
      a = s.top + h;
    let c,
      l = this.left,
      u = this.width;
    if (this.isHorizontal())
      (u = Math.max(...this.lineWidths)),
        (c = this.top + a),
        (l = Ut(t.align, l, this.right - u));
    else {
      const e = this.columnSizes.reduce((t, e) => Math.max(t, e.height), 0);
      c =
        a +
        Ut(
          t.align,
          this.top,
          this.bottom - e - t.labels.padding - this._computeTitleHeight()
        );
    }
    const f = Ut(o, l, l + u);
    (r.textAlign = n.textAlign(Vt(o))),
      (r.textBaseline = 'middle'),
      (r.strokeStyle = e.color),
      (r.fillStyle = e.color),
      (r.font = i.string),
      De(r, e.text, f, c, i);
  }
  _computeTitleHeight() {
    const t = this.options.title,
      e = Fe(t.font),
      i = Te(t.padding);
    return t.display ? e.lineHeight + i.height : 0;
  }
  _getLegendItemAt(t, e) {
    let i, s, n;
    if (Tt(t, this.left, this.right) && Tt(e, this.top, this.bottom))
      for (n = this.legendHitBoxes, i = 0; i < n.length; ++i)
        if (
          ((s = n[i]),
          Tt(t, s.left, s.left + s.width) && Tt(e, s.top, s.top + s.height))
        )
          return this.legendItems[i];
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (
      !(function (t, e) {
        if (('mousemove' === t || 'mouseout' === t) && (e.onHover || e.onLeave))
          return !0;
        if (e.onClick && ('click' === t || 'mouseup' === t)) return !0;
        return !1;
      })(t.type, e)
    )
      return;
    const i = this._getLegendItemAt(t.x, t.y);
    if ('mousemove' === t.type || 'mouseout' === t.type) {
      const r = this._hoveredItem,
        o =
          ((n = i),
          null !== (s = r) &&
            null !== n &&
            s.datasetIndex === n.datasetIndex &&
            s.index === n.index);
      r && !o && G(e.onLeave, [t, r, this], this),
        (this._hoveredItem = i),
        i && !o && G(e.onHover, [t, i, this], this);
    } else i && G(e.onClick, [t, i, this], this);
    var s, n;
  }
}
function Fr(t, e) {
  return e * (t.text ? t.text.length : 0);
}
var Ir = {
  id: 'legend',
  _element: Tr,
  start(t, e, i) {
    const s = (t.legend = new Tr({ctx: t.ctx, options: i, chart: t}));
    Rs.configure(t, s, i), Rs.addBox(t, s);
  },
  stop(t) {
    Rs.removeBox(t, t.legend), delete t.legend;
  },
  beforeUpdate(t, e, i) {
    const s = t.legend;
    Rs.configure(t, s, i), (s.options = i);
  },
  afterUpdate(t) {
    const e = t.legend;
    e.buildLabels(), e.adjustHitBoxes();
  },
  afterEvent(t, e) {
    e.replay || t.legend.handleEvent(e.event);
  },
  defaults: {
    display: !0,
    position: 'top',
    align: 'center',
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(t, e, i) {
      const s = e.datasetIndex,
        n = i.chart;
      n.isDatasetVisible(s)
        ? (n.hide(s), (e.hidden = !0))
        : (n.show(s), (e.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (t) => t.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(t) {
        const e = t.data.datasets,
          {
            labels: {
              usePointStyle: i,
              pointStyle: s,
              textAlign: n,
              color: r,
              useBorderRadius: o,
              borderRadius: h,
            },
          } = t.legend.options;
        return t._getSortedDatasetMetas().map((t) => {
          const a = t.controller.getStyle(i ? 0 : void 0),
            c = Te(a.borderWidth);
          return {
            text: e[t.index].label,
            fillStyle: a.backgroundColor,
            fontColor: r,
            hidden: !t.visible,
            lineCap: a.borderCapStyle,
            lineDash: a.borderDash,
            lineDashOffset: a.borderDashOffset,
            lineJoin: a.borderJoinStyle,
            lineWidth: (c.width + c.height) / 4,
            strokeStyle: a.borderColor,
            pointStyle: s || a.pointStyle,
            rotation: a.rotation,
            textAlign: n || a.textAlign,
            borderRadius: o && (h || a.borderRadius),
            datasetIndex: t.index,
          };
        }, this);
      },
    },
    title: {
      color: (t) => t.chart.options.color,
      display: !1,
      position: 'center',
      text: '',
    },
  },
  descriptors: {
    _scriptable: (t) => !t.startsWith('on'),
    labels: {
      _scriptable: (t) => !['generateLabels', 'filter', 'sort'].includes(t),
    },
  },
};
class zr extends Zs {
  constructor(t) {
    super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, e) {
    const i = this.options;
    if (((this.left = 0), (this.top = 0), !i.display))
      return void (this.width = this.height = this.right = this.bottom = 0);
    (this.width = this.right = t), (this.height = this.bottom = e);
    const s = U(i.text) ? i.text.length : 1;
    this._padding = Te(i.padding);
    const n = s * Fe(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = n) : (this.width = n);
  }
  isHorizontal() {
    const t = this.options.position;
    return 'top' === t || 'bottom' === t;
  }
  _drawArgs(t) {
    const {top: e, left: i, bottom: s, right: n, options: r} = this,
      o = r.align;
    let h,
      a,
      c,
      l = 0;
    return (
      this.isHorizontal()
        ? ((a = Ut(o, i, n)), (c = e + t), (h = n - i))
        : ('left' === r.position
            ? ((a = i + t), (c = Ut(o, s, e)), (l = -0.5 * dt))
            : ((a = n - t), (c = Ut(o, e, s)), (l = 0.5 * dt)),
          (h = s - e)),
      {titleX: a, titleY: c, maxWidth: h, rotation: l}
    );
  }
  draw() {
    const t = this.ctx,
      e = this.options;
    if (!e.display) return;
    const i = Fe(e.font),
      s = i.lineHeight / 2 + this._padding.top,
      {titleX: n, titleY: r, maxWidth: o, rotation: h} = this._drawArgs(s);
    De(t, e.text, 0, 0, i, {
      color: e.color,
      maxWidth: o,
      rotation: h,
      textAlign: Vt(e.align),
      textBaseline: 'middle',
      translation: [n, r],
    });
  }
}
var $r = {
  id: 'title',
  _element: zr,
  start(t, e, i) {
    !(function (t, e) {
      const i = new zr({ctx: t.ctx, options: e, chart: t});
      Rs.configure(t, i, e), Rs.addBox(t, i), (t.titleBlock = i);
    })(t, i);
  },
  stop(t) {
    const e = t.titleBlock;
    Rs.removeBox(t, e), delete t.titleBlock;
  },
  beforeUpdate(t, e, i) {
    const s = t.titleBlock;
    Rs.configure(t, s, i), (s.options = i);
  },
  defaults: {
    align: 'center',
    display: !1,
    font: {weight: 'bold'},
    fullSize: !0,
    padding: 10,
    position: 'top',
    text: '',
    weight: 2e3,
  },
  defaultRoutes: {color: 'color'},
  descriptors: {_scriptable: !0, _indexable: !1},
};
const Wr = new WeakMap();
var Br = {
  id: 'subtitle',
  start(t, e, i) {
    const s = new zr({ctx: t.ctx, options: i, chart: t});
    Rs.configure(t, s, i), Rs.addBox(t, s), Wr.set(t, s);
  },
  stop(t) {
    Rs.removeBox(t, Wr.get(t)), Wr.delete(t);
  },
  beforeUpdate(t, e, i) {
    const s = Wr.get(t);
    Rs.configure(t, s, i), (s.options = i);
  },
  defaults: {
    align: 'center',
    display: !1,
    font: {weight: 'normal'},
    fullSize: !0,
    padding: 0,
    position: 'top',
    text: '',
    weight: 1500,
  },
  defaultRoutes: {color: 'color'},
  descriptors: {_scriptable: !0, _indexable: !1},
};
const Yr = {
  average(t) {
    if (!t.length) return !1;
    let e,
      i,
      s = new Set(),
      n = 0,
      r = 0;
    for (e = 0, i = t.length; e < i; ++e) {
      const i = t[e].element;
      if (i && i.hasValue()) {
        const t = i.tooltipPosition();
        s.add(t.x), (n += t.y), ++r;
      }
    }
    if (0 === r || 0 === s.size) return !1;
    return {x: [...s].reduce((t, e) => t + e) / s.size, y: n / r};
  },
  nearest(t, e) {
    if (!t.length) return !1;
    let i,
      s,
      n,
      r = e.x,
      o = e.y,
      h = Number.POSITIVE_INFINITY;
    for (i = 0, s = t.length; i < s; ++i) {
      const s = t[i].element;
      if (s && s.hasValue()) {
        const t = jt(e, s.getCenterPoint());
        t < h && ((h = t), (n = s));
      }
    }
    if (n) {
      const t = n.tooltipPosition();
      (r = t.x), (o = t.y);
    }
    return {x: r, y: o};
  },
};
function Hr(t, e) {
  return e && (U(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
}
function Vr(t) {
  return ('string' == typeof t || t instanceof String) && t.indexOf('\n') > -1
    ? t.split('\n')
    : t;
}
function Ur(t, e) {
  const {element: i, datasetIndex: s, index: n} = e,
    r = t.getDatasetMeta(s).controller,
    {label: o, value: h} = r.getLabelAndValue(n);
  return {
    chart: t,
    label: o,
    parsed: r.getParsed(n),
    raw: t.data.datasets[s].data[n],
    formattedValue: h,
    dataset: r.getDataset(),
    dataIndex: n,
    datasetIndex: s,
    element: i,
  };
}
function Xr(t, e) {
  const i = t.chart.ctx,
    {body: s, footer: n, title: r} = t,
    {boxWidth: o, boxHeight: h} = e,
    a = Fe(e.bodyFont),
    c = Fe(e.titleFont),
    l = Fe(e.footerFont),
    u = r.length,
    f = n.length,
    d = s.length,
    p = Te(e.padding);
  let b = p.height,
    g = 0,
    m = s.reduce(
      (t, e) => t + e.before.length + e.lines.length + e.after.length,
      0
    );
  if (
    ((m += t.beforeBody.length + t.afterBody.length),
    u &&
      (b += u * c.lineHeight + (u - 1) * e.titleSpacing + e.titleMarginBottom),
    m)
  ) {
    b +=
      d * (e.displayColors ? Math.max(h, a.lineHeight) : a.lineHeight) +
      (m - d) * a.lineHeight +
      (m - 1) * e.bodySpacing;
  }
  f && (b += e.footerMarginTop + f * l.lineHeight + (f - 1) * e.footerSpacing);
  let v = 0;
  const x = function (t) {
    g = Math.max(g, i.measureText(t).width + v);
  };
  return (
    i.save(),
    (i.font = c.string),
    J(t.title, x),
    (i.font = a.string),
    J(t.beforeBody.concat(t.afterBody), x),
    (v = e.displayColors ? o + 2 + e.boxPadding : 0),
    J(s, (t) => {
      J(t.before, x), J(t.lines, x), J(t.after, x);
    }),
    (v = 0),
    (i.font = l.string),
    J(t.footer, x),
    i.restore(),
    (g += p.width),
    {width: g, height: b}
  );
}
function Zr(t, e, i, s) {
  const {x: n, width: r} = i,
    {
      width: o,
      chartArea: {left: h, right: a},
    } = t;
  let c = 'center';
  return (
    'center' === s
      ? (c = n <= (h + a) / 2 ? 'left' : 'right')
      : n <= r / 2
      ? (c = 'left')
      : n >= o - r / 2 && (c = 'right'),
    (function (t, e, i, s) {
      const {x: n, width: r} = s,
        o = i.caretSize + i.caretPadding;
      return (
        ('left' === t && n + r + o > e.width) ||
        ('right' === t && n - r - o < 0) ||
        void 0
      );
    })(c, t, e, i) && (c = 'center'),
    c
  );
}
function Kr(t, e, i) {
  const s =
    i.yAlign ||
    e.yAlign ||
    (function (t, e) {
      const {y: i, height: s} = e;
      return i < s / 2 ? 'top' : i > t.height - s / 2 ? 'bottom' : 'center';
    })(t, i);
  return {xAlign: i.xAlign || e.xAlign || Zr(t, e, i, s), yAlign: s};
}
function qr(t, e, i, s) {
  const {caretSize: n, caretPadding: r, cornerRadius: o} = t,
    {xAlign: h, yAlign: a} = i,
    c = n + r,
    {topLeft: l, topRight: u, bottomLeft: f, bottomRight: d} = Ne(o);
  let p = (function (t, e) {
    let {x: i, width: s} = t;
    return 'right' === e ? (i -= s) : 'center' === e && (i -= s / 2), i;
  })(e, h);
  const b = (function (t, e, i) {
    let {y: s, height: n} = t;
    return 'top' === e ? (s += i) : (s -= 'bottom' === e ? n + i : n / 2), s;
  })(e, a, c);
  return (
    'center' === a
      ? 'left' === h
        ? (p += c)
        : 'right' === h && (p -= c)
      : 'left' === h
      ? (p -= Math.max(l, f) + n)
      : 'right' === h && (p += Math.max(u, d) + n),
    {x: Nt(p, 0, s.width - e.width), y: Nt(b, 0, s.height - e.height)}
  );
}
function Qr(t, e, i) {
  const s = Te(i.padding);
  return 'center' === e
    ? t.x + t.width / 2
    : 'right' === e
    ? t.x + t.width - s.right
    : t.x + s.left;
}
function Gr(t) {
  return Hr([], Vr(t));
}
function Jr(t, e) {
  const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
  return i ? t.override(i) : t;
}
const to = {
  beforeTitle: Y,
  title(t) {
    if (t.length > 0) {
      const e = t[0],
        i = e.chart.data.labels,
        s = i ? i.length : 0;
      if (this && this.options && 'dataset' === this.options.mode)
        return e.dataset.label || '';
      if (e.label) return e.label;
      if (s > 0 && e.dataIndex < s) return i[e.dataIndex];
    }
    return '';
  },
  afterTitle: Y,
  beforeBody: Y,
  beforeLabel: Y,
  label(t) {
    if (this && this.options && 'dataset' === this.options.mode)
      return t.label + ': ' + t.formattedValue || t.formattedValue;
    let e = t.dataset.label || '';
    e && (e += ': ');
    const i = t.formattedValue;
    return V(i) || (e += i), e;
  },
  labelColor(t) {
    const e = t.chart
      .getDatasetMeta(t.datasetIndex)
      .controller.getStyle(t.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(t) {
    const e = t.chart
      .getDatasetMeta(t.datasetIndex)
      .controller.getStyle(t.dataIndex);
    return {pointStyle: e.pointStyle, rotation: e.rotation};
  },
  afterLabel: Y,
  afterBody: Y,
  beforeFooter: Y,
  footer: Y,
  afterFooter: Y,
};
function eo(t, e, i, s) {
  const n = t[e].call(i, s);
  return void 0 === n ? to[e].call(i, s) : n;
}
class io extends Zs {
  static positioners = Yr;
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(t) {
    (this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const e = this.chart,
      i = this.options.setContext(this.getContext()),
      s = i.enabled && e.options.animation && i.animations,
      n = new Ii(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(n)), n;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context =
        ((t = this.chart.getContext()),
        (e = this),
        (i = this._tooltipItems),
        ze(t, {tooltip: e, tooltipItems: i, type: 'tooltip'})))
    );
    var t, e, i;
  }
  getTitle(t, e) {
    const {callbacks: i} = e,
      s = eo(i, 'beforeTitle', this, t),
      n = eo(i, 'title', this, t),
      r = eo(i, 'afterTitle', this, t);
    let o = [];
    return (o = Hr(o, Vr(s))), (o = Hr(o, Vr(n))), (o = Hr(o, Vr(r))), o;
  }
  getBeforeBody(t, e) {
    return Gr(eo(e.callbacks, 'beforeBody', this, t));
  }
  getBody(t, e) {
    const {callbacks: i} = e,
      s = [];
    return (
      J(t, (t) => {
        const e = {before: [], lines: [], after: []},
          n = Jr(i, t);
        Hr(e.before, Vr(eo(n, 'beforeLabel', this, t))),
          Hr(e.lines, eo(n, 'label', this, t)),
          Hr(e.after, Vr(eo(n, 'afterLabel', this, t))),
          s.push(e);
      }),
      s
    );
  }
  getAfterBody(t, e) {
    return Gr(eo(e.callbacks, 'afterBody', this, t));
  }
  getFooter(t, e) {
    const {callbacks: i} = e,
      s = eo(i, 'beforeFooter', this, t),
      n = eo(i, 'footer', this, t),
      r = eo(i, 'afterFooter', this, t);
    let o = [];
    return (o = Hr(o, Vr(s))), (o = Hr(o, Vr(n))), (o = Hr(o, Vr(r))), o;
  }
  _createItems(t) {
    const e = this._active,
      i = this.chart.data,
      s = [],
      n = [],
      r = [];
    let o,
      h,
      a = [];
    for (o = 0, h = e.length; o < h; ++o) a.push(Ur(this.chart, e[o]));
    return (
      t.filter && (a = a.filter((e, s, n) => t.filter(e, s, n, i))),
      t.itemSort && (a = a.sort((e, s) => t.itemSort(e, s, i))),
      J(a, (e) => {
        const i = Jr(t.callbacks, e);
        s.push(eo(i, 'labelColor', this, e)),
          n.push(eo(i, 'labelPointStyle', this, e)),
          r.push(eo(i, 'labelTextColor', this, e));
      }),
      (this.labelColors = s),
      (this.labelPointStyles = n),
      (this.labelTextColors = r),
      (this.dataPoints = a),
      a
    );
  }
  update(t, e) {
    const i = this.options.setContext(this.getContext()),
      s = this._active;
    let n,
      r = [];
    if (s.length) {
      const t = Yr[i.position].call(this, s, this._eventPosition);
      (r = this._createItems(i)),
        (this.title = this.getTitle(r, i)),
        (this.beforeBody = this.getBeforeBody(r, i)),
        (this.body = this.getBody(r, i)),
        (this.afterBody = this.getAfterBody(r, i)),
        (this.footer = this.getFooter(r, i));
      const e = (this._size = Xr(this, i)),
        o = Object.assign({}, t, e),
        h = Kr(this.chart, i, o),
        a = qr(i, o, h, this.chart);
      (this.xAlign = h.xAlign),
        (this.yAlign = h.yAlign),
        (n = {
          opacity: 1,
          x: a.x,
          y: a.y,
          width: e.width,
          height: e.height,
          caretX: t.x,
          caretY: t.y,
        });
    } else 0 !== this.opacity && (n = {opacity: 0});
    (this._tooltipItems = r),
      (this.$context = void 0),
      n && this._resolveAnimations().update(this, n),
      t &&
        i.external &&
        i.external.call(this, {chart: this.chart, tooltip: this, replay: e});
  }
  drawCaret(t, e, i, s) {
    const n = this.getCaretPosition(t, i, s);
    e.lineTo(n.x1, n.y1), e.lineTo(n.x2, n.y2), e.lineTo(n.x3, n.y3);
  }
  getCaretPosition(t, e, i) {
    const {xAlign: s, yAlign: n} = this,
      {caretSize: r, cornerRadius: o} = i,
      {topLeft: h, topRight: a, bottomLeft: c, bottomRight: l} = Ne(o),
      {x: u, y: f} = t,
      {width: d, height: p} = e;
    let b, g, m, v, x, y;
    return (
      'center' === n
        ? ((x = f + p / 2),
          'left' === s
            ? ((b = u), (g = b - r), (v = x + r), (y = x - r))
            : ((b = u + d), (g = b + r), (v = x - r), (y = x + r)),
          (m = b))
        : ((g =
            'left' === s
              ? u + Math.max(h, c) + r
              : 'right' === s
              ? u + d - Math.max(a, l) - r
              : this.caretX),
          'top' === n
            ? ((v = f), (x = v - r), (b = g - r), (m = g + r))
            : ((v = f + p), (x = v + r), (b = g + r), (m = g - r)),
          (y = v)),
      {x1: b, x2: g, x3: m, y1: v, y2: x, y3: y}
    );
  }
  drawTitle(t, e, i) {
    const s = this.title,
      n = s.length;
    let r, o, h;
    if (n) {
      const a = _i(i.rtl, this.x, this.width);
      for (
        t.x = Qr(this, i.titleAlign, i),
          e.textAlign = a.textAlign(i.titleAlign),
          e.textBaseline = 'middle',
          r = Fe(i.titleFont),
          o = i.titleSpacing,
          e.fillStyle = i.titleColor,
          e.font = r.string,
          h = 0;
        h < n;
        ++h
      )
        e.fillText(s[h], a.x(t.x), t.y + r.lineHeight / 2),
          (t.y += r.lineHeight + o),
          h + 1 === n && (t.y += i.titleMarginBottom - o);
    }
  }
  _drawColorBox(t, e, i, s, n) {
    const r = this.labelColors[i],
      o = this.labelPointStyles[i],
      {boxHeight: h, boxWidth: a} = n,
      c = Fe(n.bodyFont),
      l = Qr(this, 'left', n),
      u = s.x(l),
      f = h < c.lineHeight ? (c.lineHeight - h) / 2 : 0,
      d = e.y + f;
    if (n.usePointStyle) {
      const e = {
          radius: Math.min(a, h) / 2,
          pointStyle: o.pointStyle,
          rotation: o.rotation,
          borderWidth: 1,
        },
        i = s.leftForLtr(u, a) + a / 2,
        c = d + h / 2;
      (t.strokeStyle = n.multiKeyBackground),
        (t.fillStyle = n.multiKeyBackground),
        ve(t, e, i, c),
        (t.strokeStyle = r.borderColor),
        (t.fillStyle = r.backgroundColor),
        ve(t, e, i, c);
    } else {
      (t.lineWidth = X(r.borderWidth)
        ? Math.max(...Object.values(r.borderWidth))
        : r.borderWidth || 1),
        (t.strokeStyle = r.borderColor),
        t.setLineDash(r.borderDash || []),
        (t.lineDashOffset = r.borderDashOffset || 0);
      const e = s.leftForLtr(u, a),
        i = s.leftForLtr(s.xPlus(u, 1), a - 2),
        o = Ne(r.borderRadius);
      Object.values(o).some((t) => 0 !== t)
        ? (t.beginPath(),
          (t.fillStyle = n.multiKeyBackground),
          Ae(t, {x: e, y: d, w: a, h, radius: o}),
          t.fill(),
          t.stroke(),
          (t.fillStyle = r.backgroundColor),
          t.beginPath(),
          Ae(t, {x: i, y: d + 1, w: a - 2, h: h - 2, radius: o}),
          t.fill())
        : ((t.fillStyle = n.multiKeyBackground),
          t.fillRect(e, d, a, h),
          t.strokeRect(e, d, a, h),
          (t.fillStyle = r.backgroundColor),
          t.fillRect(i, d + 1, a - 2, h - 2));
    }
    t.fillStyle = this.labelTextColors[i];
  }
  drawBody(t, e, i) {
    const {body: s} = this,
      {
        bodySpacing: n,
        bodyAlign: r,
        displayColors: o,
        boxHeight: h,
        boxWidth: a,
        boxPadding: c,
      } = i,
      l = Fe(i.bodyFont);
    let u = l.lineHeight,
      f = 0;
    const d = _i(i.rtl, this.x, this.width),
      p = function (i) {
        e.fillText(i, d.x(t.x + f), t.y + u / 2), (t.y += u + n);
      },
      b = d.textAlign(r);
    let g, m, v, x, y, M, w;
    for (
      e.textAlign = r,
        e.textBaseline = 'middle',
        e.font = l.string,
        t.x = Qr(this, b, i),
        e.fillStyle = i.bodyColor,
        J(this.beforeBody, p),
        f = o && 'right' !== b ? ('center' === r ? a / 2 + c : a + 2 + c) : 0,
        x = 0,
        M = s.length;
      x < M;
      ++x
    ) {
      for (
        g = s[x],
          m = this.labelTextColors[x],
          e.fillStyle = m,
          J(g.before, p),
          v = g.lines,
          o &&
            v.length &&
            (this._drawColorBox(e, t, x, d, i),
            (u = Math.max(l.lineHeight, h))),
          y = 0,
          w = v.length;
        y < w;
        ++y
      )
        p(v[y]), (u = l.lineHeight);
      J(g.after, p);
    }
    (f = 0), (u = l.lineHeight), J(this.afterBody, p), (t.y -= n);
  }
  drawFooter(t, e, i) {
    const s = this.footer,
      n = s.length;
    let r, o;
    if (n) {
      const h = _i(i.rtl, this.x, this.width);
      for (
        t.x = Qr(this, i.footerAlign, i),
          t.y += i.footerMarginTop,
          e.textAlign = h.textAlign(i.footerAlign),
          e.textBaseline = 'middle',
          r = Fe(i.footerFont),
          e.fillStyle = i.footerColor,
          e.font = r.string,
          o = 0;
        o < n;
        ++o
      )
        e.fillText(s[o], h.x(t.x), t.y + r.lineHeight / 2),
          (t.y += r.lineHeight + i.footerSpacing);
    }
  }
  drawBackground(t, e, i, s) {
    const {xAlign: n, yAlign: r} = this,
      {x: o, y: h} = t,
      {width: a, height: c} = i,
      {
        topLeft: l,
        topRight: u,
        bottomLeft: f,
        bottomRight: d,
      } = Ne(s.cornerRadius);
    (e.fillStyle = s.backgroundColor),
      (e.strokeStyle = s.borderColor),
      (e.lineWidth = s.borderWidth),
      e.beginPath(),
      e.moveTo(o + l, h),
      'top' === r && this.drawCaret(t, e, i, s),
      e.lineTo(o + a - u, h),
      e.quadraticCurveTo(o + a, h, o + a, h + u),
      'center' === r && 'right' === n && this.drawCaret(t, e, i, s),
      e.lineTo(o + a, h + c - d),
      e.quadraticCurveTo(o + a, h + c, o + a - d, h + c),
      'bottom' === r && this.drawCaret(t, e, i, s),
      e.lineTo(o + f, h + c),
      e.quadraticCurveTo(o, h + c, o, h + c - f),
      'center' === r && 'left' === n && this.drawCaret(t, e, i, s),
      e.lineTo(o, h + l),
      e.quadraticCurveTo(o, h, o + l, h),
      e.closePath(),
      e.fill(),
      s.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart,
      i = this.$animations,
      s = i && i.x,
      n = i && i.y;
    if (s || n) {
      const i = Yr[t.position].call(this, this._active, this._eventPosition);
      if (!i) return;
      const r = (this._size = Xr(this, t)),
        o = Object.assign({}, i, this._size),
        h = Kr(e, t, o),
        a = qr(t, o, h, e);
      (s._to === a.x && n._to === a.y) ||
        ((this.xAlign = h.xAlign),
        (this.yAlign = h.yAlign),
        (this.width = r.width),
        (this.height = r.height),
        (this.caretX = i.x),
        (this.caretY = i.y),
        this._resolveAnimations().update(this, a));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let i = this.opacity;
    if (!i) return;
    this._updateAnimationTarget(e);
    const s = {width: this.width, height: this.height},
      n = {x: this.x, y: this.y};
    i = Math.abs(i) < 0.001 ? 0 : i;
    const r = Te(e.padding),
      o =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    e.enabled &&
      o &&
      (t.save(),
      (t.globalAlpha = i),
      this.drawBackground(n, t, s, e),
      ki(t, e.textDirection),
      (n.y += r.top),
      this.drawTitle(n, t, e),
      this.drawBody(n, t, e),
      this.drawFooter(n, t, e),
      Oi(t, e.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const i = this._active,
      s = t.map(({datasetIndex: t, index: e}) => {
        const i = this.chart.getDatasetMeta(t);
        if (!i) throw new Error('Cannot find a dataset at index ' + t);
        return {datasetIndex: t, element: i.data[e], index: e};
      }),
      n = !tt(i, s),
      r = this._positionChanged(s, e);
    (n || r) &&
      ((this._active = s),
      (this._eventPosition = e),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, e, i = !0) {
    if (e && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options,
      n = this._active || [],
      r = this._getActiveElements(t, n, e, i),
      o = this._positionChanged(r, t),
      h = e || !tt(r, n) || o;
    return (
      h &&
        ((this._active = r),
        (s.enabled || s.external) &&
          ((this._eventPosition = {x: t.x, y: t.y}), this.update(!0, e))),
      h
    );
  }
  _getActiveElements(t, e, i, s) {
    const n = this.options;
    if ('mouseout' === t.type) return [];
    if (!s)
      return e.filter(
        (t) =>
          this.chart.data.datasets[t.datasetIndex] &&
          void 0 !==
            this.chart
              .getDatasetMeta(t.datasetIndex)
              .controller.getParsed(t.index)
      );
    const r = this.chart.getElementsAtEventForMode(t, n.mode, n, i);
    return n.reverse && r.reverse(), r;
  }
  _positionChanged(t, e) {
    const {caretX: i, caretY: s, options: n} = this,
      r = Yr[n.position].call(this, t, e);
    return !1 !== r && (i !== r.x || s !== r.y);
  }
}
var so = {
    id: 'tooltip',
    _element: io,
    positioners: Yr,
    afterInit(t, e, i) {
      i && (t.tooltip = new io({chart: t, options: i}));
    },
    beforeUpdate(t, e, i) {
      t.tooltip && t.tooltip.initialize(i);
    },
    reset(t, e, i) {
      t.tooltip && t.tooltip.initialize(i);
    },
    afterDraw(t) {
      const e = t.tooltip;
      if (e && e._willRender()) {
        const i = {tooltip: e};
        if (!1 === t.notifyPlugins('beforeTooltipDraw', {...i, cancelable: !0}))
          return;
        e.draw(t.ctx), t.notifyPlugins('afterTooltipDraw', i);
      }
    },
    afterEvent(t, e) {
      if (t.tooltip) {
        const i = e.replay;
        t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0);
      }
    },
    defaults: {
      enabled: !0,
      external: null,
      position: 'average',
      backgroundColor: 'rgba(0,0,0,0.8)',
      titleColor: '#fff',
      titleFont: {weight: 'bold'},
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: 'left',
      bodyColor: '#fff',
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: 'left',
      footerColor: '#fff',
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: {weight: 'bold'},
      footerAlign: 'left',
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: (t, e) => e.bodyFont.size,
      boxWidth: (t, e) => e.bodyFont.size,
      multiKeyBackground: '#fff',
      displayColors: !0,
      boxPadding: 0,
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 0,
      animation: {duration: 400, easing: 'easeOutQuart'},
      animations: {
        numbers: {
          type: 'number',
          properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
        },
        opacity: {easing: 'linear', duration: 200},
      },
      callbacks: to,
    },
    defaultRoutes: {bodyFont: 'font', footerFont: 'font', titleFont: 'font'},
    descriptors: {
      _scriptable: (t) =>
        'filter' !== t && 'itemSort' !== t && 'external' !== t,
      _indexable: !1,
      callbacks: {_scriptable: !1, _indexable: !1},
      animation: {_fallback: !1},
      animations: {_fallback: 'animation'},
    },
    additionalOptionScopes: ['interaction'],
  },
  no = Object.freeze({
    __proto__: null,
    Colors: pr,
    Decimation: mr,
    Filler: Pr,
    Legend: Ir,
    SubTitle: Br,
    Title: $r,
    Tooltip: so,
  });
function ro(t, e, i, s) {
  const n = t.indexOf(e);
  if (-1 === n)
    return ((t, e, i, s) => (
      'string' == typeof e
        ? ((i = t.push(e) - 1), s.unshift({index: i, label: e}))
        : isNaN(e) && (i = null),
      i
    ))(t, e, i, s);
  return n !== t.lastIndexOf(e) ? i : n;
}
function oo(t) {
  const e = this.getLabels();
  return t >= 0 && t < e.length ? e[t] : t;
}
function ho(t, e) {
  const i = [],
    {
      bounds: s,
      step: n,
      min: r,
      max: o,
      precision: h,
      count: a,
      maxTicks: c,
      maxDigits: l,
      includeBounds: u,
    } = t,
    f = n || 1,
    d = c - 1,
    {min: p, max: b} = e,
    g = !V(r),
    m = !V(o),
    v = !V(a),
    x = (b - p) / (l + 1);
  let y,
    M,
    w,
    _,
    k = kt((b - p) / d / f) * f;
  if (k < 1e-14 && !g && !m) return [{value: p}, {value: b}];
  (_ = Math.ceil(b / k) - Math.floor(p / k)),
    _ > d && (k = kt((_ * k) / d / f) * f),
    V(h) || ((y = Math.pow(10, h)), (k = Math.ceil(k * y) / y)),
    'ticks' === s
      ? ((M = Math.floor(p / k) * k), (w = Math.ceil(b / k) * k))
      : ((M = p), (w = b)),
    g &&
    m &&
    n &&
    (function (t, e) {
      const i = Math.round(t);
      return i - e <= t && i + e >= t;
    })((o - r) / n, k / 1e3)
      ? ((_ = Math.round(Math.min((o - r) / k, c))),
        (k = (o - r) / _),
        (M = r),
        (w = o))
      : v
      ? ((M = g ? r : M), (w = m ? o : w), (_ = a - 1), (k = (w - M) / _))
      : ((_ = (w - M) / k),
        (_ = _t(_, Math.round(_), k / 1e3) ? Math.round(_) : Math.ceil(_)));
  const O = Math.max(Ct(k), Ct(M));
  (y = Math.pow(10, V(h) ? O : h)),
    (M = Math.round(M * y) / y),
    (w = Math.round(w * y) / y);
  let S = 0;
  for (
    g &&
    (u && M !== r
      ? (i.push({value: r}),
        M < r && S++,
        _t(Math.round((M + S * k) * y) / y, r, ao(r, x, t)) && S++)
      : M < r && S++);
    S < _;
    ++S
  ) {
    const t = Math.round((M + S * k) * y) / y;
    if (m && t > o) break;
    i.push({value: t});
  }
  return (
    m && u && w !== o
      ? i.length && _t(i[i.length - 1].value, o, ao(o, x, t))
        ? (i[i.length - 1].value = o)
        : i.push({value: o})
      : (m && w !== o) || i.push({value: w}),
    i
  );
}
function ao(t, e, {horizontal: i, minRotation: s}) {
  const n = Dt(s),
    r = (i ? Math.sin(n) : Math.cos(n)) || 0.001,
    o = 0.75 * e * ('' + t).length;
  return Math.min(e / r, o);
}
class co extends rn {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    return V(t) ||
      (('number' == typeof t || t instanceof Number) && !isFinite(+t))
      ? null
      : +t;
  }
  handleTickRangeOptions() {
    const {beginAtZero: t} = this.options,
      {minDefined: e, maxDefined: i} = this.getUserBounds();
    let {min: s, max: n} = this;
    const r = (t) => (s = e ? s : t),
      o = (t) => (n = i ? n : t);
    if (t) {
      const t = wt(s),
        e = wt(n);
      t < 0 && e < 0 ? o(0) : t > 0 && e > 0 && r(0);
    }
    if (s === n) {
      let e = 0 === n ? 1 : Math.abs(0.05 * n);
      o(n + e), t || r(s - e);
    }
    (this.min = s), (this.max = n);
  }
  getTickLimit() {
    const t = this.options.ticks;
    let e,
      {maxTicksLimit: i, stepSize: s} = t;
    return (
      s
        ? ((e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1),
          e > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`
            ),
            (e = 1e3)))
        : ((e = this.computeTickLimit()), (i = i || 11)),
      i && (e = Math.min(i, e)),
      e
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      e = t.ticks;
    let i = this.getTickLimit();
    i = Math.max(2, i);
    const s = ho(
      {
        maxTicks: i,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: e.precision,
        step: e.stepSize,
        count: e.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: e.minRotation || 0,
        includeBounds: !1 !== e.includeBounds,
      },
      this._range || this
    );
    return (
      'ticks' === t.bounds && St(s, this, 'value'),
      t.reverse
        ? (s.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      s
    );
  }
  configure() {
    const t = this.ticks;
    let e = this.min,
      i = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const s = (i - e) / Math.max(t.length - 1, 1) / 2;
      (e -= s), (i += s);
    }
    (this._startValue = e), (this._endValue = i), (this._valueRange = i - e);
  }
  getLabelForValue(t) {
    return re(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class lo extends co {
  static id = 'linear';
  static defaults = {ticks: {callback: he.formatters.numeric}};
  determineDataLimits() {
    const {min: t, max: e} = this.getMinMax(!0);
    (this.min = Z(t) ? t : 0),
      (this.max = Z(e) ? e : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      e = t ? this.width : this.height,
      i = Dt(this.options.ticks.minRotation),
      s = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
      n = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, n.lineHeight / s));
  }
  getPixelForValue(t) {
    return null === t
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
const uo = (t) => Math.floor(Mt(t)),
  fo = (t, e) => Math.pow(10, uo(t) + e);
function po(t) {
  return 1 === t / Math.pow(10, uo(t));
}
function bo(t, e, i) {
  const s = Math.pow(10, i),
    n = Math.floor(t / s);
  return Math.ceil(e / s) - n;
}
function go(t, {min: e, max: i}) {
  e = K(t.min, e);
  const s = [],
    n = uo(e);
  let r = (function (t, e) {
      let i = uo(e - t);
      for (; bo(t, e, i) > 10; ) i++;
      for (; bo(t, e, i) < 10; ) i--;
      return Math.min(i, uo(t));
    })(e, i),
    o = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
  const h = Math.pow(10, r),
    a = n > r ? Math.pow(10, n) : 0,
    c = Math.round((e - a) * o) / o,
    l = Math.floor((e - a) / h / 10) * h * 10;
  let u = Math.floor((c - l) / Math.pow(10, r)),
    f = K(t.min, Math.round((a + l + u * Math.pow(10, r)) * o) / o);
  for (; f < i; )
    s.push({value: f, major: po(f), significand: u}),
      u >= 10 ? (u = u < 15 ? 15 : 20) : u++,
      u >= 20 && (r++, (u = 2), (o = r >= 0 ? 1 : o)),
      (f = Math.round((a + l + u * Math.pow(10, r)) * o) / o);
  const d = K(t.max, f);
  return s.push({value: d, major: po(d), significand: u}), s;
}
class mo extends rn {
  static id = 'logarithmic';
  static defaults = {
    ticks: {callback: he.formatters.logarithmic, major: {enabled: !0}},
  };
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    const i = co.prototype.parse.apply(this, [t, e]);
    if (0 !== i) return Z(i) && i > 0 ? i : null;
    this._zero = !0;
  }
  determineDataLimits() {
    const {min: t, max: e} = this.getMinMax(!0);
    (this.min = Z(t) ? Math.max(0, t) : null),
      (this.max = Z(e) ? Math.max(0, e) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !Z(this._userMin) &&
        (this.min = t === fo(this.min, 0) ? fo(this.min, -1) : fo(this.min, 0)),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const {minDefined: t, maxDefined: e} = this.getUserBounds();
    let i = this.min,
      s = this.max;
    const n = (e) => (i = t ? i : e),
      r = (t) => (s = e ? s : t);
    i === s && (i <= 0 ? (n(1), r(10)) : (n(fo(i, -1)), r(fo(s, 1)))),
      i <= 0 && n(fo(s, -1)),
      s <= 0 && r(fo(i, 1)),
      (this.min = i),
      (this.max = s);
  }
  buildTicks() {
    const t = this.options,
      e = go({min: this._userMin, max: this._userMax}, this);
    return (
      'ticks' === t.bounds && St(e, this, 'value'),
      t.reverse
        ? (e.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      e
    );
  }
  getLabelForValue(t) {
    return void 0 === t
      ? '0'
      : re(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(),
      (this._startValue = Mt(t)),
      (this._valueRange = Mt(this.max) - Mt(t));
  }
  getPixelForValue(t) {
    return (
      (void 0 !== t && 0 !== t) || (t = this.min),
      null === t || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (Mt(t) - this._startValue) / this._valueRange
          )
    );
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
function vo(t) {
  const e = t.ticks;
  if (e.display && t.display) {
    const t = Te(e.backdropPadding);
    return q(e.font && e.font.size, de.font.size) + t.height;
  }
  return 0;
}
function xo(t, e, i, s, n) {
  return t === s || t === n
    ? {start: e - i / 2, end: e + i / 2}
    : t < s || t > n
    ? {start: e - i, end: e}
    : {start: e, end: e + i};
}
function yo(t) {
  const e = {
      l: t.left + t._padding.left,
      r: t.right - t._padding.right,
      t: t.top + t._padding.top,
      b: t.bottom - t._padding.bottom,
    },
    i = Object.assign({}, e),
    s = [],
    n = [],
    r = t._pointLabels.length,
    o = t.options.pointLabels,
    h = o.centerPointLabels ? dt / r : 0;
  for (let u = 0; u < r; u++) {
    const r = o.setContext(t.getPointLabelContext(u));
    n[u] = r.padding;
    const f = t.getPointPosition(u, t.drawingArea + n[u], h),
      d = Fe(r.font),
      p =
        ((a = t.ctx),
        (c = d),
        (l = U((l = t._pointLabels[u])) ? l : [l]),
        {w: be(a, c.string, l), h: l.length * c.lineHeight});
    s[u] = p;
    const b = Et(t.getIndexAngle(u) + h),
      g = Math.round(At(b));
    Mo(i, e, b, xo(g, f.x, p.w, 0, 180), xo(g, f.y, p.h, 90, 270));
  }
  var a, c, l;
  t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b),
    (t._pointLabelItems = (function (t, e, i) {
      const s = [],
        n = t._pointLabels.length,
        r = t.options,
        {centerPointLabels: o, display: h} = r.pointLabels,
        a = {extra: vo(r) / 2, additionalAngle: o ? dt / n : 0};
      let c;
      for (let r = 0; r < n; r++) {
        (a.padding = i[r]), (a.size = e[r]);
        const n = wo(t, r, a);
        s.push(n),
          'auto' === h && ((n.visible = _o(n, c)), n.visible && (c = n));
      }
      return s;
    })(t, s, n));
}
function Mo(t, e, i, s, n) {
  const r = Math.abs(Math.sin(i)),
    o = Math.abs(Math.cos(i));
  let h = 0,
    a = 0;
  s.start < e.l
    ? ((h = (e.l - s.start) / r), (t.l = Math.min(t.l, e.l - h)))
    : s.end > e.r && ((h = (s.end - e.r) / r), (t.r = Math.max(t.r, e.r + h))),
    n.start < e.t
      ? ((a = (e.t - n.start) / o), (t.t = Math.min(t.t, e.t - a)))
      : n.end > e.b &&
        ((a = (n.end - e.b) / o), (t.b = Math.max(t.b, e.b + a)));
}
function wo(t, e, i) {
  const s = t.drawingArea,
    {extra: n, additionalAngle: r, padding: o, size: h} = i,
    a = t.getPointPosition(e, s + n + o, r),
    c = Math.round(At(Et(a.angle + vt))),
    l = (function (t, e, i) {
      90 === i || 270 === i ? (t -= e / 2) : (i > 270 || i < 90) && (t -= e);
      return t;
    })(a.y, h.h, c),
    u = (function (t) {
      if (0 === t || 180 === t) return 'center';
      if (t < 180) return 'left';
      return 'right';
    })(c),
    f = (function (t, e, i) {
      'right' === i ? (t -= e) : 'center' === i && (t -= e / 2);
      return t;
    })(a.x, h.w, u);
  return {
    visible: !0,
    x: a.x,
    y: l,
    textAlign: u,
    left: f,
    top: l,
    right: f + h.w,
    bottom: l + h.h,
  };
}
function _o(t, e) {
  if (!e) return !0;
  const {left: i, top: s, right: n, bottom: r} = t;
  return !(
    ye({x: i, y: s}, e) ||
    ye({x: i, y: r}, e) ||
    ye({x: n, y: s}, e) ||
    ye({x: n, y: r}, e)
  );
}
function ko(t, e, i) {
  const {left: s, top: n, right: r, bottom: o} = i,
    {backdropColor: h} = e;
  if (!V(h)) {
    const i = Ne(e.borderRadius),
      a = Te(e.backdropPadding);
    t.fillStyle = h;
    const c = s - a.left,
      l = n - a.top,
      u = r - s + a.width,
      f = o - n + a.height;
    Object.values(i).some((t) => 0 !== t)
      ? (t.beginPath(), Ae(t, {x: c, y: l, w: u, h: f, radius: i}), t.fill())
      : t.fillRect(c, l, u, f);
  }
}
function Oo(t, e, i, s) {
  const {ctx: n} = t;
  if (i) n.arc(t.xCenter, t.yCenter, e, 0, pt);
  else {
    let i = t.getPointPosition(0, e);
    n.moveTo(i.x, i.y);
    for (let r = 1; r < s; r++)
      (i = t.getPointPosition(r, e)), n.lineTo(i.x, i.y);
  }
}
class So extends co {
  static id = 'radialLinear';
  static defaults = {
    display: !0,
    animate: !0,
    position: 'chartArea',
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0,
    },
    grid: {circular: !1},
    startAngle: 0,
    ticks: {showLabelBackdrop: !0, callback: he.formatters.numeric},
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: {size: 10},
      callback: (t) => t,
      padding: 5,
      centerPointLabels: !1,
    },
  };
  static defaultRoutes = {
    'angleLines.color': 'borderColor',
    'pointLabels.color': 'color',
    'ticks.color': 'color',
  };
  static descriptors = {angleLines: {_fallback: 'grid'}};
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const t = (this._padding = Te(vo(this.options) / 2)),
      e = (this.width = this.maxWidth - t.width),
      i = (this.height = this.maxHeight - t.height);
    (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(e, i) / 2));
  }
  determineDataLimits() {
    const {min: t, max: e} = this.getMinMax(!1);
    (this.min = Z(t) && !isNaN(t) ? t : 0),
      (this.max = Z(e) && !isNaN(e) ? e : 0),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / vo(this.options));
  }
  generateTickLabels(t) {
    co.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((t, e) => {
          const i = G(this.options.pointLabels.callback, [t, e], this);
          return i || 0 === i ? i : '';
        })
        .filter((t, e) => this.chart.getDataVisibility(e)));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display
      ? yo(this)
      : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, i, s) {
    (this.xCenter += Math.floor((t - e) / 2)),
      (this.yCenter += Math.floor((i - s) / 2)),
      (this.drawingArea -= Math.min(
        this.drawingArea / 2,
        Math.max(t, e, i, s)
      ));
  }
  getIndexAngle(t) {
    return Et(
      t * (pt / (this._pointLabels.length || 1)) +
        Dt(this.options.startAngle || 0)
    );
  }
  getDistanceFromCenterForValue(t) {
    if (V(t)) return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (V(t)) return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const i = e[t];
      return (function (t, e, i) {
        return ze(t, {label: i, index: e, type: 'pointLabel'});
      })(this.getContext(), t, i);
    }
  }
  getPointPosition(t, e, i = 0) {
    const s = this.getIndexAngle(t) - vt + i;
    return {
      x: Math.cos(s) * e + this.xCenter,
      y: Math.sin(s) * e + this.yCenter,
      angle: s,
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const {left: e, top: i, right: s, bottom: n} = this._pointLabelItems[t];
    return {left: e, top: i, right: s, bottom: n};
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: {circular: e},
    } = this.options;
    if (t) {
      const i = this.ctx;
      i.save(),
        i.beginPath(),
        Oo(
          this,
          this.getDistanceFromCenterForValue(this._endValue),
          e,
          this._pointLabels.length
        ),
        i.closePath(),
        (i.fillStyle = t),
        i.fill(),
        i.restore();
    }
  }
  drawGrid() {
    const t = this.ctx,
      e = this.options,
      {angleLines: i, grid: s, border: n} = e,
      r = this._pointLabels.length;
    let o, h, a;
    if (
      (e.pointLabels.display &&
        (function (t, e) {
          const {
            ctx: i,
            options: {pointLabels: s},
          } = t;
          for (let n = e - 1; n >= 0; n--) {
            const e = t._pointLabelItems[n];
            if (!e.visible) continue;
            const r = s.setContext(t.getPointLabelContext(n));
            ko(i, r, e);
            const o = Fe(r.font),
              {x: h, y: a, textAlign: c} = e;
            De(i, t._pointLabels[n], h, a + o.lineHeight / 2, o, {
              color: r.color,
              textAlign: c,
              textBaseline: 'middle',
            });
          }
        })(this, r),
      s.display &&
        this.ticks.forEach((t, e) => {
          if (0 !== e || (0 === e && this.min < 0)) {
            h = this.getDistanceFromCenterForValue(t.value);
            const i = this.getContext(e),
              o = s.setContext(i),
              a = n.setContext(i);
            !(function (t, e, i, s, n) {
              const r = t.ctx,
                o = e.circular,
                {color: h, lineWidth: a} = e;
              (!o && !s) ||
                !h ||
                !a ||
                i < 0 ||
                (r.save(),
                (r.strokeStyle = h),
                (r.lineWidth = a),
                r.setLineDash(n.dash || []),
                (r.lineDashOffset = n.dashOffset),
                r.beginPath(),
                Oo(t, i, o, s),
                r.closePath(),
                r.stroke(),
                r.restore());
            })(this, o, h, r, a);
          }
        }),
      i.display)
    ) {
      for (t.save(), o = r - 1; o >= 0; o--) {
        const s = i.setContext(this.getPointLabelContext(o)),
          {color: n, lineWidth: r} = s;
        r &&
          n &&
          ((t.lineWidth = r),
          (t.strokeStyle = n),
          t.setLineDash(s.borderDash),
          (t.lineDashOffset = s.borderDashOffset),
          (h = this.getDistanceFromCenterForValue(
            e.reverse ? this.min : this.max
          )),
          (a = this.getPointPosition(o, h)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(a.x, a.y),
          t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      e = this.options,
      i = e.ticks;
    if (!i.display) return;
    const s = this.getIndexAngle(0);
    let n, r;
    t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(s),
      (t.textAlign = 'center'),
      (t.textBaseline = 'middle'),
      this.ticks.forEach((s, o) => {
        if (0 === o && this.min >= 0 && !e.reverse) return;
        const h = i.setContext(this.getContext(o)),
          a = Fe(h.font);
        if (
          ((n = this.getDistanceFromCenterForValue(this.ticks[o].value)),
          h.showLabelBackdrop)
        ) {
          (t.font = a.string),
            (r = t.measureText(s.label).width),
            (t.fillStyle = h.backdropColor);
          const e = Te(h.backdropPadding);
          t.fillRect(
            -r / 2 - e.left,
            -n - a.size / 2 - e.top,
            r + e.width,
            a.size + e.height
          );
        }
        De(t, s.label, 0, -n, a, {
          color: h.color,
          strokeColor: h.textStrokeColor,
          strokeWidth: h.textStrokeWidth,
        });
      }),
      t.restore();
  }
  drawTitle() {}
}
const Do = {
    millisecond: {common: !0, size: 1, steps: 1e3},
    second: {common: !0, size: 1e3, steps: 60},
    minute: {common: !0, size: 6e4, steps: 60},
    hour: {common: !0, size: 36e5, steps: 24},
    day: {common: !0, size: 864e5, steps: 30},
    week: {common: !1, size: 6048e5, steps: 4},
    month: {common: !0, size: 2628e6, steps: 12},
    quarter: {common: !1, size: 7884e6, steps: 4},
    year: {common: !0, size: 3154e7},
  },
  Ao = Object.keys(Do);
function Co(t, e) {
  return t - e;
}
function Ro(t, e) {
  if (V(e)) return null;
  const i = t._adapter,
    {parser: s, round: n, isoWeekday: r} = t._parseOpts;
  let o = e;
  return (
    'function' == typeof s && (o = s(o)),
    Z(o) || (o = 'string' == typeof s ? i.parse(o, s) : i.parse(o)),
    null === o
      ? null
      : (n &&
          (o =
            'week' !== n || (!Ot(r) && !0 !== r)
              ? i.startOf(o, n)
              : i.startOf(o, 'isoWeek', r)),
        +o)
  );
}
function jo(t, e, i, s) {
  const n = Ao.length;
  for (let r = Ao.indexOf(t); r < n - 1; ++r) {
    const t = Do[Ao[r]],
      n = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
    if (t.common && Math.ceil((i - e) / (n * t.size)) <= s) return Ao[r];
  }
  return Ao[n - 1];
}
function Lo(t, e, i) {
  if (i) {
    if (i.length) {
      const {lo: s, hi: n} = Ft(i, e);
      t[i[s] >= e ? i[s] : i[n]] = !0;
    }
  } else t[e] = !0;
}
function Eo(t, e, i) {
  const s = [],
    n = {},
    r = e.length;
  let o, h;
  for (o = 0; o < r; ++o) (h = e[o]), (n[h] = o), s.push({value: h, major: !1});
  return 0 !== r && i
    ? (function (t, e, i, s) {
        const n = t._adapter,
          r = +n.startOf(e[0].value, s),
          o = e[e.length - 1].value;
        let h, a;
        for (h = r; h <= o; h = +n.add(h, 1, s))
          (a = i[h]), a >= 0 && (e[a].major = !0);
        return e;
      })(t, s, n, i)
    : s;
}
class Po extends rn {
  static id = 'time';
  static defaults = {
    bounds: 'data',
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: 'millisecond',
      displayFormats: {},
    },
    ticks: {source: 'auto', callback: !1, major: {enabled: !1}},
  };
  constructor(t) {
    super(t),
      (this._cache = {data: [], labels: [], all: []}),
      (this._unit = 'day'),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(t, e = {}) {
    const i = t.time || (t.time = {}),
      s = (this._adapter = new ls(t.adapters.date));
    s.init(e),
      rt(i.displayFormats, s.formats()),
      (this._parseOpts = {
        parser: i.parser,
        round: i.round,
        isoWeekday: i.isoWeekday,
      }),
      super.init(t),
      (this._normalized = e.normalized);
  }
  parse(t, e) {
    return void 0 === t ? null : Ro(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = {data: [], labels: [], all: []});
  }
  determineDataLimits() {
    const t = this.options,
      e = this._adapter,
      i = t.time.unit || 'day';
    let {min: s, max: n, minDefined: r, maxDefined: o} = this.getUserBounds();
    function h(t) {
      r || isNaN(t.min) || (s = Math.min(s, t.min)),
        o || isNaN(t.max) || (n = Math.max(n, t.max));
    }
    (r && o) ||
      (h(this._getLabelBounds()),
      ('ticks' === t.bounds && 'labels' === t.ticks.source) ||
        h(this.getMinMax(!1))),
      (s = Z(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i)),
      (n = Z(n) && !isNaN(n) ? n : +e.endOf(Date.now(), i) + 1),
      (this.min = Math.min(s, n - 1)),
      (this.max = Math.max(s + 1, n));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY,
      i = Number.NEGATIVE_INFINITY;
    return t.length && ((e = t[0]), (i = t[t.length - 1])), {min: e, max: i};
  }
  buildTicks() {
    const t = this.options,
      e = t.time,
      i = t.ticks,
      s = 'labels' === i.source ? this.getLabelTimestamps() : this._generate();
    'ticks' === t.bounds &&
      s.length &&
      ((this.min = this._userMin || s[0]),
      (this.max = this._userMax || s[s.length - 1]));
    const n = this.min,
      r = (function (t, e, i) {
        let s = 0,
          n = t.length;
        for (; s < n && t[s] < e; ) s++;
        for (; n > s && t[n - 1] > i; ) n--;
        return s > 0 || n < t.length ? t.slice(s, n) : t;
      })(s, n, this.max);
    return (
      (this._unit =
        e.unit ||
        (i.autoSkip
          ? jo(e.minUnit, this.min, this.max, this._getLabelCapacity(n))
          : (function (t, e, i, s, n) {
              for (let r = Ao.length - 1; r >= Ao.indexOf(i); r--) {
                const i = Ao[r];
                if (Do[i].common && t._adapter.diff(n, s, i) >= e - 1) return i;
              }
              return Ao[i ? Ao.indexOf(i) : 0];
            })(this, r.length, e.minUnit, this.min, this.max))),
      (this._majorUnit =
        i.major.enabled && 'year' !== this._unit
          ? (function (t) {
              for (let e = Ao.indexOf(t) + 1, i = Ao.length; e < i; ++e)
                if (Do[Ao[e]].common) return Ao[e];
            })(this._unit)
          : void 0),
      this.initOffsets(s),
      t.reverse && r.reverse(),
      Eo(this, r, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e,
      i,
      s = 0,
      n = 0;
    this.options.offset &&
      t.length &&
      ((e = this.getDecimalForValue(t[0])),
      (s = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2),
      (i = this.getDecimalForValue(t[t.length - 1])),
      (n =
        1 === t.length
          ? i
          : (i - this.getDecimalForValue(t[t.length - 2])) / 2));
    const r = t.length < 3 ? 0.5 : 0.25;
    (s = Nt(s, 0, r)),
      (n = Nt(n, 0, r)),
      (this._offsets = {start: s, end: n, factor: 1 / (s + 1 + n)});
  }
  _generate() {
    const t = this._adapter,
      e = this.min,
      i = this.max,
      s = this.options,
      n = s.time,
      r = n.unit || jo(n.minUnit, e, i, this._getLabelCapacity(e)),
      o = q(s.ticks.stepSize, 1),
      h = 'week' === r && n.isoWeekday,
      a = Ot(h) || !0 === h,
      c = {};
    let l,
      u,
      f = e;
    if (
      (a && (f = +t.startOf(f, 'isoWeek', h)),
      (f = +t.startOf(f, a ? 'day' : r)),
      t.diff(i, e, r) > 1e5 * o)
    )
      throw new Error(
        e + ' and ' + i + ' are too far apart with stepSize of ' + o + ' ' + r
      );
    const d = 'data' === s.ticks.source && this.getDataTimestamps();
    for (l = f, u = 0; l < i; l = +t.add(l, o, r), u++) Lo(c, l, d);
    return (
      (l !== i && 'ticks' !== s.bounds && 1 !== u) || Lo(c, l, d),
      Object.keys(c)
        .sort(Co)
        .map((t) => +t)
    );
  }
  getLabelForValue(t) {
    const e = this._adapter,
      i = this.options.time;
    return i.tooltipFormat
      ? e.format(t, i.tooltipFormat)
      : e.format(t, i.displayFormats.datetime);
  }
  format(t, e) {
    const i = this.options.time.displayFormats,
      s = this._unit,
      n = e || i[s];
    return this._adapter.format(t, n);
  }
  _tickFormatFunction(t, e, i, s) {
    const n = this.options,
      r = n.ticks.callback;
    if (r) return G(r, [t, e, i], this);
    const o = n.time.displayFormats,
      h = this._unit,
      a = this._majorUnit,
      c = h && o[h],
      l = a && o[a],
      u = i[e],
      f = a && l && u && u.major;
    return this._adapter.format(t, s || (f ? l : c));
  }
  generateTickLabels(t) {
    let e, i, s;
    for (e = 0, i = t.length; e < i; ++e)
      (s = t[e]), (s.label = this._tickFormatFunction(s.value, e, t));
  }
  getDecimalForValue(t) {
    return null === t ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets,
      i = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + i) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets,
      i = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks,
      i = this.ctx.measureText(t).width,
      s = Dt(this.isHorizontal() ? e.maxRotation : e.minRotation),
      n = Math.cos(s),
      r = Math.sin(s),
      o = this._resolveTickFontOptions(0).size;
    return {w: i * n + o * r, h: i * r + o * n};
  }
  _getLabelCapacity(t) {
    const e = this.options.time,
      i = e.displayFormats,
      s = i[e.unit] || i.millisecond,
      n = this._tickFormatFunction(t, 0, Eo(this, [t], this._majorUnit), s),
      r = this._getLabelSize(n),
      o =
        Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) -
        1;
    return o > 0 ? o : 1;
  }
  getDataTimestamps() {
    let t,
      e,
      i = this._cache.data || [];
    if (i.length) return i;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return (this._cache.data = s[0].controller.getAllParsedValues(this));
    for (t = 0, e = s.length; t < e; ++t)
      i = i.concat(s[t].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(i));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, i;
    if (t.length) return t;
    const s = this.getLabels();
    for (e = 0, i = s.length; e < i; ++e) t.push(Ro(this, s[e]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return Bt(t.sort(Co));
  }
}
function No(t, e, i) {
  let s,
    n,
    r,
    o,
    h = 0,
    a = t.length - 1;
  i
    ? (e >= t[h].pos && e <= t[a].pos && ({lo: h, hi: a} = It(t, 'pos', e)),
      ({pos: s, time: r} = t[h]),
      ({pos: n, time: o} = t[a]))
    : (e >= t[h].time && e <= t[a].time && ({lo: h, hi: a} = It(t, 'time', e)),
      ({time: s, pos: r} = t[h]),
      ({time: n, pos: o} = t[a]));
  const c = n - s;
  return c ? r + ((o - r) * (e - s)) / c : r;
}
var To = Object.freeze({
  __proto__: null,
  CategoryScale: class extends rn {
    static id = 'category';
    static defaults = {ticks: {callback: oo}};
    constructor(t) {
      super(t),
        (this._startValue = void 0),
        (this._valueRange = 0),
        (this._addedLabels = []);
    }
    init(t) {
      const e = this._addedLabels;
      if (e.length) {
        const t = this.getLabels();
        for (const {index: i, label: s} of e) t[i] === s && t.splice(i, 1);
        this._addedLabels = [];
      }
      super.init(t);
    }
    parse(t, e) {
      if (V(t)) return null;
      const i = this.getLabels();
      return ((t, e) => (null === t ? null : Nt(Math.round(t), 0, e)))(
        (e =
          isFinite(e) && i[e] === t ? e : ro(i, t, q(e, t), this._addedLabels)),
        i.length - 1
      );
    }
    determineDataLimits() {
      const {minDefined: t, maxDefined: e} = this.getUserBounds();
      let {min: i, max: s} = this.getMinMax(!0);
      'ticks' === this.options.bounds &&
        (t || (i = 0), e || (s = this.getLabels().length - 1)),
        (this.min = i),
        (this.max = s);
    }
    buildTicks() {
      const t = this.min,
        e = this.max,
        i = this.options.offset,
        s = [];
      let n = this.getLabels();
      (n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1)),
        (this._valueRange = Math.max(n.length - (i ? 0 : 1), 1)),
        (this._startValue = this.min - (i ? 0.5 : 0));
      for (let i = t; i <= e; i++) s.push({value: i});
      return s;
    }
    getLabelForValue(t) {
      return oo.call(this, t);
    }
    configure() {
      super.configure(),
        this.isHorizontal() || (this._reversePixels = !this._reversePixels);
    }
    getPixelForValue(t) {
      return (
        'number' != typeof t && (t = this.parse(t)),
        null === t
          ? NaN
          : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
      );
    }
    getPixelForTick(t) {
      const e = this.ticks;
      return t < 0 || t > e.length - 1
        ? null
        : this.getPixelForValue(e[t].value);
    }
    getValueForPixel(t) {
      return Math.round(
        this._startValue + this.getDecimalForPixel(t) * this._valueRange
      );
    }
    getBasePixel() {
      return this.bottom;
    }
  },
  LinearScale: lo,
  LogarithmicScale: mo,
  RadialLinearScale: So,
  TimeScale: Po,
  TimeSeriesScale: class extends Po {
    static id = 'timeseries';
    static defaults = Po.defaults;
    constructor(t) {
      super(t),
        (this._table = []),
        (this._minPos = void 0),
        (this._tableRange = void 0);
    }
    initOffsets() {
      const t = this._getTimestampsForTable(),
        e = (this._table = this.buildLookupTable(t));
      (this._minPos = No(e, this.min)),
        (this._tableRange = No(e, this.max) - this._minPos),
        super.initOffsets(t);
    }
    buildLookupTable(t) {
      const {min: e, max: i} = this,
        s = [],
        n = [];
      let r, o, h, a, c;
      for (r = 0, o = t.length; r < o; ++r)
        (a = t[r]), a >= e && a <= i && s.push(a);
      if (s.length < 2)
        return [
          {time: e, pos: 0},
          {time: i, pos: 1},
        ];
      for (r = 0, o = s.length; r < o; ++r)
        (c = s[r + 1]),
          (h = s[r - 1]),
          (a = s[r]),
          Math.round((c + h) / 2) !== a && n.push({time: a, pos: r / (o - 1)});
      return n;
    }
    _generate() {
      const t = this.min,
        e = this.max;
      let i = super.getDataTimestamps();
      return (
        (i.includes(t) && i.length) || i.splice(0, 0, t),
        (i.includes(e) && 1 !== i.length) || i.push(e),
        i.sort((t, e) => t - e)
      );
    }
    _getTimestampsForTable() {
      let t = this._cache.all || [];
      if (t.length) return t;
      const e = this.getDataTimestamps(),
        i = this.getLabelTimestamps();
      return (
        (t =
          e.length && i.length
            ? this.normalize(e.concat(i))
            : e.length
            ? e
            : i),
        (t = this._cache.all = t),
        t
      );
    }
    getDecimalForValue(t) {
      return (No(this._table, t) - this._minPos) / this._tableRange;
    }
    getValueForPixel(t) {
      const e = this._offsets,
        i = this.getDecimalForPixel(t) / e.factor - e.end;
      return No(this._table, i * this._tableRange + this._minPos, !0);
    }
  },
});
const Fo = [hs, hr, no, To];
Tn.register(...Fo);
/*!
 * chartjs-plugin-datalabels v2.2.0
 * https://chartjs-plugin-datalabels.netlify.app
 * (c) 2017-2022 chartjs-plugin-datalabels contributors
 * Released under the MIT license
 */
var Io = (function () {
    if ('undefined' != typeof window) {
      if (window.devicePixelRatio) return window.devicePixelRatio;
      var t = window.screen;
      if (t) return (t.deviceXDPI || 1) / (t.logicalXDPI || 1);
    }
    return 1;
  })(),
  zo = function (t) {
    var e,
      i = [];
    for (t = [].concat(t); t.length; )
      'string' == typeof (e = t.pop())
        ? i.unshift.apply(i, e.split('\n'))
        : Array.isArray(e)
        ? t.push.apply(t, e)
        : V(t) || i.unshift('' + e);
    return i;
  },
  $o = function (t, e, i) {
    var s,
      n = [].concat(e),
      r = n.length,
      o = t.font,
      h = 0;
    for (t.font = i.string, s = 0; s < r; ++s)
      h = Math.max(t.measureText(n[s]).width, h);
    return (t.font = o), {height: r * i.lineHeight, width: h};
  },
  Wo = function (t, e, i) {
    return Math.max(t, Math.min(e, i));
  },
  Bo = function (t, e) {
    var i,
      s,
      n,
      r,
      o = t.slice(),
      h = [];
    for (i = 0, n = e.length; i < n; ++i)
      (r = e[i]), -1 === (s = o.indexOf(r)) ? h.push([r, 1]) : o.splice(s, 1);
    for (i = 0, n = o.length; i < n; ++i) h.push([o[i], -1]);
    return h;
  };
function Yo(t, e) {
  var i = e.x,
    s = e.y;
  if (null === i) return {x: 0, y: -1};
  if (null === s) return {x: 1, y: 0};
  var n = t.x - i,
    r = t.y - s,
    o = Math.sqrt(n * n + r * r);
  return {x: o ? n / o : 0, y: o ? r / o : -1};
}
var Ho = 0,
  Vo = 1,
  Uo = 2,
  Xo = 4,
  Zo = 8;
function Ko(t, e, i) {
  var s = Ho;
  return (
    t < i.left ? (s |= Vo) : t > i.right && (s |= Uo),
    e < i.top ? (s |= Zo) : e > i.bottom && (s |= Xo),
    s
  );
}
function qo(t, e) {
  var i,
    s,
    n = e.anchor,
    r = t;
  return (
    e.clamp &&
      (r = (function (t, e) {
        for (
          var i,
            s,
            n,
            r = t.x0,
            o = t.y0,
            h = t.x1,
            a = t.y1,
            c = Ko(r, o, e),
            l = Ko(h, a, e);
          c | l && !(c & l);

        )
          (i = c || l) & Zo
            ? ((s = r + ((h - r) * (e.top - o)) / (a - o)), (n = e.top))
            : i & Xo
            ? ((s = r + ((h - r) * (e.bottom - o)) / (a - o)), (n = e.bottom))
            : i & Uo
            ? ((n = o + ((a - o) * (e.right - r)) / (h - r)), (s = e.right))
            : i & Vo &&
              ((n = o + ((a - o) * (e.left - r)) / (h - r)), (s = e.left)),
            i === c
              ? (c = Ko((r = s), (o = n), e))
              : (l = Ko((h = s), (a = n), e));
        return {x0: r, x1: h, y0: o, y1: a};
      })(r, e.area)),
    'start' === n
      ? ((i = r.x0), (s = r.y0))
      : 'end' === n
      ? ((i = r.x1), (s = r.y1))
      : ((i = (r.x0 + r.x1) / 2), (s = (r.y0 + r.y1) / 2)),
    (function (t, e, i, s, n) {
      switch (n) {
        case 'center':
          i = s = 0;
          break;
        case 'bottom':
          (i = 0), (s = 1);
          break;
        case 'right':
          (i = 1), (s = 0);
          break;
        case 'left':
          (i = -1), (s = 0);
          break;
        case 'top':
          (i = 0), (s = -1);
          break;
        case 'start':
          (i = -i), (s = -s);
          break;
        case 'end':
          break;
        default:
          (n *= Math.PI / 180), (i = Math.cos(n)), (s = Math.sin(n));
      }
      return {x: t, y: e, vx: i, vy: s};
    })(i, s, t.vx, t.vy, e.align)
  );
}
var Qo = function (t, e) {
    var i = (t.startAngle + t.endAngle) / 2,
      s = Math.cos(i),
      n = Math.sin(i),
      r = t.innerRadius,
      o = t.outerRadius;
    return qo(
      {
        x0: t.x + s * r,
        y0: t.y + n * r,
        x1: t.x + s * o,
        y1: t.y + n * o,
        vx: s,
        vy: n,
      },
      e
    );
  },
  Go = function (t, e) {
    var i = Yo(t, e.origin),
      s = i.x * t.options.radius,
      n = i.y * t.options.radius;
    return qo(
      {x0: t.x - s, y0: t.y - n, x1: t.x + s, y1: t.y + n, vx: i.x, vy: i.y},
      e
    );
  },
  Jo = function (t, e) {
    var i = Yo(t, e.origin),
      s = t.x,
      n = t.y,
      r = 0,
      o = 0;
    return (
      t.horizontal
        ? ((s = Math.min(t.x, t.base)), (r = Math.abs(t.base - t.x)))
        : ((n = Math.min(t.y, t.base)), (o = Math.abs(t.base - t.y))),
      qo({x0: s, y0: n + o, x1: s + r, y1: n, vx: i.x, vy: i.y}, e)
    );
  },
  th = function (t, e) {
    var i = Yo(t, e.origin);
    return qo(
      {
        x0: t.x,
        y0: t.y,
        x1: t.x + (t.width || 0),
        y1: t.y + (t.height || 0),
        vx: i.x,
        vy: i.y,
      },
      e
    );
  },
  eh = function (t) {
    return Math.round(t * Io) / Io;
  };
function ih(t, e) {
  var i = e.chart.getDatasetMeta(e.datasetIndex).vScale;
  if (!i) return null;
  if (void 0 !== i.xCenter && void 0 !== i.yCenter)
    return {x: i.xCenter, y: i.yCenter};
  var s = i.getBasePixel();
  return t.horizontal ? {x: s, y: null} : {x: null, y: s};
}
function sh(t, e, i) {
  var s = i.backgroundColor,
    n = i.borderColor,
    r = i.borderWidth;
  (s || (n && r)) &&
    (t.beginPath(),
    (function (t, e, i, s, n, r) {
      var o = Math.PI / 2;
      if (r) {
        var h = Math.min(r, n / 2, s / 2),
          a = e + h,
          c = i + h,
          l = e + s - h,
          u = i + n - h;
        t.moveTo(e, c),
          a < l && c < u
            ? (t.arc(a, c, h, -Math.PI, -o),
              t.arc(l, c, h, -o, 0),
              t.arc(l, u, h, 0, o),
              t.arc(a, u, h, o, Math.PI))
            : a < l
            ? (t.moveTo(a, i),
              t.arc(l, c, h, -o, o),
              t.arc(a, c, h, o, Math.PI + o))
            : c < u
            ? (t.arc(a, c, h, -Math.PI, 0), t.arc(a, u, h, 0, Math.PI))
            : t.arc(a, c, h, -Math.PI, Math.PI),
          t.closePath(),
          t.moveTo(e, i);
      } else t.rect(e, i, s, n);
    })(
      t,
      eh(e.x) + r / 2,
      eh(e.y) + r / 2,
      eh(e.w) - r,
      eh(e.h) - r,
      i.borderRadius
    ),
    t.closePath(),
    s && ((t.fillStyle = s), t.fill()),
    n &&
      r &&
      ((t.strokeStyle = n),
      (t.lineWidth = r),
      (t.lineJoin = 'miter'),
      t.stroke()));
}
function nh(t, e, i) {
  var s = t.shadowBlur,
    n = i.stroked,
    r = eh(i.x),
    o = eh(i.y),
    h = eh(i.w);
  n && t.strokeText(e, r, o, h),
    i.filled &&
      (s && n && (t.shadowBlur = 0),
      t.fillText(e, r, o, h),
      s && n && (t.shadowBlur = s));
}
var rh = function (t, e, i, s) {
  var n = this;
  (n._config = t),
    (n._index = s),
    (n._model = null),
    (n._rects = null),
    (n._ctx = e),
    (n._el = i);
};
nt(rh.prototype, {
  _modelize: function (t, e, i, s) {
    var n,
      r = this,
      o = r._index,
      h = Fe(Ie([i.font, {}], s, o)),
      a = Ie([i.color, de.color], s, o);
    return {
      align: Ie([i.align, 'center'], s, o),
      anchor: Ie([i.anchor, 'center'], s, o),
      area: s.chart.chartArea,
      backgroundColor: Ie([i.backgroundColor, null], s, o),
      borderColor: Ie([i.borderColor, null], s, o),
      borderRadius: Ie([i.borderRadius, 0], s, o),
      borderWidth: Ie([i.borderWidth, 0], s, o),
      clamp: Ie([i.clamp, !1], s, o),
      clip: Ie([i.clip, !1], s, o),
      color: a,
      display: t,
      font: h,
      lines: e,
      offset: Ie([i.offset, 4], s, o),
      opacity: Ie([i.opacity, 1], s, o),
      origin: ih(r._el, s),
      padding: Te(Ie([i.padding, 4], s, o)),
      positioner:
        ((n = r._el),
        n instanceof Bn
          ? Qo
          : n instanceof Jn
          ? Go
          : n instanceof or
          ? Jo
          : th),
      rotation: Ie([i.rotation, 0], s, o) * (Math.PI / 180),
      size: $o(r._ctx, e, h),
      textAlign: Ie([i.textAlign, 'start'], s, o),
      textShadowBlur: Ie([i.textShadowBlur, 0], s, o),
      textShadowColor: Ie([i.textShadowColor, a], s, o),
      textStrokeColor: Ie([i.textStrokeColor, a], s, o),
      textStrokeWidth: Ie([i.textStrokeWidth, 0], s, o),
    };
  },
  update: function (t) {
    var e,
      i,
      s,
      n = this,
      r = null,
      o = null,
      h = n._index,
      a = n._config,
      c = Ie([a.display, !0], t, h);
    c &&
      ((e = t.dataset.data[h]),
      (s = V((i = q(G(a.formatter, [e, t]), e))) ? [] : zo(i)).length &&
        (o = (function (t) {
          var e = t.borderWidth || 0,
            i = t.padding,
            s = t.size.height,
            n = t.size.width,
            r = -n / 2,
            o = -s / 2;
          return {
            frame: {
              x: r - i.left - e,
              y: o - i.top - e,
              w: n + i.width + 2 * e,
              h: s + i.height + 2 * e,
            },
            text: {x: r, y: o, w: n, h: s},
          };
        })((r = n._modelize(c, s, a, t))))),
      (n._model = r),
      (n._rects = o);
  },
  geometry: function () {
    return this._rects ? this._rects.frame : {};
  },
  rotation: function () {
    return this._model ? this._model.rotation : 0;
  },
  visible: function () {
    return this._model && this._model.opacity;
  },
  model: function () {
    return this._model;
  },
  draw: function (t, e) {
    var i,
      s = t.ctx,
      n = this._model,
      r = this._rects;
    this.visible() &&
      (s.save(),
      n.clip &&
        ((i = n.area),
        s.beginPath(),
        s.rect(i.left, i.top, i.right - i.left, i.bottom - i.top),
        s.clip()),
      (s.globalAlpha = Wo(0, n.opacity, 1)),
      s.translate(eh(e.x), eh(e.y)),
      s.rotate(n.rotation),
      sh(s, r.frame, n),
      (function (t, e, i, s) {
        var n,
          r = s.textAlign,
          o = s.color,
          h = !!o,
          a = s.font,
          c = e.length,
          l = s.textStrokeColor,
          u = s.textStrokeWidth,
          f = l && u;
        if (c && (h || f))
          for (
            i = (function (t, e, i) {
              var s = i.lineHeight,
                n = t.w,
                r = t.x;
              return (
                'center' === e
                  ? (r += n / 2)
                  : ('end' !== e && 'right' !== e) || (r += n),
                {h: s, w: n, x: r, y: t.y + s / 2}
              );
            })(i, r, a),
              t.font = a.string,
              t.textAlign = r,
              t.textBaseline = 'middle',
              t.shadowBlur = s.textShadowBlur,
              t.shadowColor = s.textShadowColor,
              h && (t.fillStyle = o),
              f &&
                ((t.lineJoin = 'round'),
                (t.lineWidth = u),
                (t.strokeStyle = l)),
              n = 0,
              c = e.length;
            n < c;
            ++n
          )
            nh(t, e[n], {
              stroked: f,
              filled: h,
              w: i.w,
              x: i.x,
              y: i.y + i.h * n,
            });
      })(s, n.lines, r.text, n),
      s.restore());
  },
});
var oh = Number.MIN_SAFE_INTEGER || -9007199254740991,
  hh = Number.MAX_SAFE_INTEGER || 9007199254740991;
function ah(t, e, i) {
  var s = Math.cos(i),
    n = Math.sin(i),
    r = e.x,
    o = e.y;
  return {
    x: r + s * (t.x - r) - n * (t.y - o),
    y: o + n * (t.x - r) + s * (t.y - o),
  };
}
function ch(t, e) {
  var i,
    s,
    n,
    r,
    o,
    h = hh,
    a = oh,
    c = e.origin;
  for (i = 0; i < t.length; ++i)
    (n = (s = t[i]).x - c.x),
      (r = s.y - c.y),
      (o = e.vx * n + e.vy * r),
      (h = Math.min(h, o)),
      (a = Math.max(a, o));
  return {min: h, max: a};
}
function lh(t, e) {
  var i = e.x - t.x,
    s = e.y - t.y,
    n = Math.sqrt(i * i + s * s);
  return {vx: (e.x - t.x) / n, vy: (e.y - t.y) / n, origin: t, ln: n};
}
var uh = function () {
  (this._rotation = 0), (this._rect = {x: 0, y: 0, w: 0, h: 0});
};
function fh(t, e, i) {
  var s = e.positioner(t, e),
    n = s.vx,
    r = s.vy;
  if (!n && !r) return {x: s.x, y: s.y};
  var o = i.w,
    h = i.h,
    a = e.rotation,
    c = Math.abs((o / 2) * Math.cos(a)) + Math.abs((h / 2) * Math.sin(a)),
    l = Math.abs((o / 2) * Math.sin(a)) + Math.abs((h / 2) * Math.cos(a)),
    u = 1 / Math.max(Math.abs(n), Math.abs(r));
  return (
    (c *= n * u),
    (l *= r * u),
    (c += e.offset * n),
    (l += e.offset * r),
    {x: s.x + c, y: s.y + l}
  );
}
nt(uh.prototype, {
  center: function () {
    var t = this._rect;
    return {x: t.x + t.w / 2, y: t.y + t.h / 2};
  },
  update: function (t, e, i) {
    (this._rotation = i),
      (this._rect = {x: e.x + t.x, y: e.y + t.y, w: e.w, h: e.h});
  },
  contains: function (t) {
    var e = this,
      i = e._rect;
    return !(
      (t = ah(t, e.center(), -e._rotation)).x < i.x - 1 ||
      t.y < i.y - 1 ||
      t.x > i.x + i.w + 2 ||
      t.y > i.y + i.h + 2
    );
  },
  intersects: function (t) {
    var e,
      i,
      s,
      n = this._points(),
      r = t._points(),
      o = [lh(n[0], n[1]), lh(n[0], n[3])];
    for (
      this._rotation !== t._rotation && o.push(lh(r[0], r[1]), lh(r[0], r[3])),
        e = 0;
      e < o.length;
      ++e
    )
      if (
        ((i = ch(n, o[e])), (s = ch(r, o[e])), i.max < s.min || s.max < i.min)
      )
        return !1;
    return !0;
  },
  _points: function () {
    var t = this,
      e = t._rect,
      i = t._rotation,
      s = t.center();
    return [
      ah({x: e.x, y: e.y}, s, i),
      ah({x: e.x + e.w, y: e.y}, s, i),
      ah({x: e.x + e.w, y: e.y + e.h}, s, i),
      ah({x: e.x, y: e.y + e.h}, s, i),
    ];
  },
});
var dh = {
    prepare: function (t) {
      var e,
        i,
        s,
        n,
        r,
        o = [];
      for (e = 0, s = t.length; e < s; ++e)
        for (i = 0, n = t[e].length; i < n; ++i)
          (r = t[e][i]),
            o.push(r),
            (r.$layout = {
              _box: new uh(),
              _hidable: !1,
              _visible: !0,
              _set: e,
              _idx: r._index,
            });
      return (
        o.sort(function (t, e) {
          var i = t.$layout,
            s = e.$layout;
          return i._idx === s._idx ? s._set - i._set : s._idx - i._idx;
        }),
        this.update(o),
        o
      );
    },
    update: function (t) {
      var e,
        i,
        s,
        n,
        r,
        o = !1;
      for (e = 0, i = t.length; e < i; ++e)
        (n = (s = t[e]).model()),
          ((r = s.$layout)._hidable = n && 'auto' === n.display),
          (r._visible = s.visible()),
          (o |= r._hidable);
      o &&
        (function (t) {
          var e, i, s, n, r, o, h;
          for (e = 0, i = t.length; e < i; ++e)
            (n = (s = t[e]).$layout)._visible &&
              ((h = new Proxy(s._el, {get: (t, e) => t.getProps([e], !0)[e]})),
              (r = s.geometry()),
              (o = fh(h, s.model(), r)),
              n._box.update(o, r, s.rotation()));
          (function (t, e) {
            var i, s, n, r;
            for (i = t.length - 1; i >= 0; --i)
              for (n = t[i].$layout, s = i - 1; s >= 0 && n._visible; --s)
                (r = t[s].$layout)._visible &&
                  n._box.intersects(r._box) &&
                  e(n, r);
          })(t, function (t, e) {
            var i = t._hidable,
              s = e._hidable;
            (i && s) || s ? (e._visible = !1) : i && (t._visible = !1);
          });
        })(t);
    },
    lookup: function (t, e) {
      var i, s;
      for (i = t.length - 1; i >= 0; --i)
        if ((s = t[i].$layout) && s._visible && s._box.contains(e)) return t[i];
      return null;
    },
    draw: function (t, e) {
      var i, s, n, r, o, h;
      for (i = 0, s = e.length; i < s; ++i)
        (r = (n = e[i]).$layout)._visible &&
          ((o = n.geometry()),
          (h = fh(n._el, n.model(), o)),
          r._box.update(h, o, n.rotation()),
          n.draw(t, h));
    },
  },
  ph = '$datalabels',
  bh = '$default';
function gh(t, e, i, s) {
  if (e) {
    var n,
      r = i.$context,
      o = i.$groups;
    e[o._set] &&
      (n = e[o._set][o._key]) &&
      !0 === G(n, [r, s]) &&
      ((t[ph]._dirty = !0), i.update(r));
  }
}
function mh(t, e) {
  var i,
    s,
    n = t[ph],
    r = n._listeners;
  if (r.enter || r.leave) {
    if ('mousemove' === e.type) s = dh.lookup(n._labels, e);
    else if ('mouseout' !== e.type) return;
    (i = n._hovered),
      (n._hovered = s),
      (function (t, e, i, s, n) {
        var r, o;
        (i || s) &&
          (i ? (s ? i !== s && (o = r = !0) : (o = !0)) : (r = !0),
          o && gh(t, e.leave, i, n),
          r && gh(t, e.enter, s, n));
      })(t, r, i, s, e);
  }
}
var vh = {
    id: 'datalabels',
    defaults: {
      align: 'center',
      anchor: 'center',
      backgroundColor: null,
      borderColor: null,
      borderRadius: 0,
      borderWidth: 0,
      clamp: !1,
      clip: !1,
      color: void 0,
      display: !0,
      font: {
        family: void 0,
        lineHeight: 1.2,
        size: void 0,
        style: void 0,
        weight: null,
      },
      formatter: function (t) {
        if (V(t)) return null;
        var e,
          i,
          s,
          n = t;
        if (X(t))
          if (V(t.label))
            if (V(t.r))
              for (n = '', s = 0, i = (e = Object.keys(t)).length; s < i; ++s)
                n += (0 !== s ? ', ' : '') + e[s] + ': ' + t[e[s]];
            else n = t.r;
          else n = t.label;
        return '' + n;
      },
      labels: void 0,
      listeners: {},
      offset: 4,
      opacity: 1,
      padding: {top: 4, right: 4, bottom: 4, left: 4},
      rotation: 0,
      textAlign: 'start',
      textStrokeColor: void 0,
      textStrokeWidth: 0,
      textShadowBlur: 0,
      textShadowColor: void 0,
    },
    beforeInit: function (t) {
      t[ph] = {_actives: []};
    },
    beforeUpdate: function (t) {
      var e = t[ph];
      (e._listened = !1),
        (e._listeners = {}),
        (e._datasets = []),
        (e._labels = []);
    },
    afterDatasetUpdate: function (t, e, i) {
      var s,
        n,
        r,
        o,
        h,
        a,
        c,
        l,
        u = e.index,
        f = t[ph],
        d = (f._datasets[u] = []),
        p = t.isDatasetVisible(u),
        b = t.data.datasets[u],
        g = (function (t, e) {
          var i,
            s,
            n,
            r = t.datalabels,
            o = [];
          return !1 === r
            ? null
            : (!0 === r && (r = {}),
              (e = nt({}, [e, r])),
              (s = e.labels || {}),
              (n = Object.keys(s)),
              delete e.labels,
              n.length
                ? n.forEach(function (t) {
                    s[t] && o.push(nt({}, [e, s[t], {_key: t}]));
                  })
                : o.push(e),
              (i = o.reduce(function (t, e) {
                return (
                  J(e.listeners || {}, function (i, s) {
                    (t[s] = t[s] || {}), (t[s][e._key || bh] = i);
                  }),
                  delete e.listeners,
                  t
                );
              }, {})),
              {labels: o, listeners: i});
        })(b, i),
        m = e.meta.data || [],
        v = t.ctx;
      for (v.save(), s = 0, r = m.length; s < r; ++s)
        if (
          (((c = m[s])[ph] = []), p && c && t.getDataVisibility(s) && !c.skip)
        )
          for (n = 0, o = g.labels.length; n < o; ++n)
            (a = (h = g.labels[n])._key),
              ((l = new rh(h, v, c, s)).$groups = {_set: u, _key: a || bh}),
              (l.$context = {
                active: !1,
                chart: t,
                dataIndex: s,
                dataset: b,
                datasetIndex: u,
              }),
              l.update(l.$context),
              c[ph].push(l),
              d.push(l);
      v.restore(),
        nt(f._listeners, g.listeners, {
          merger: function (t, i, s) {
            (i[t] = i[t] || {}), (i[t][e.index] = s[t]), (f._listened = !0);
          },
        });
    },
    afterUpdate: function (t) {
      t[ph]._labels = dh.prepare(t[ph]._datasets);
    },
    afterDatasetsDraw: function (t) {
      dh.draw(t, t[ph]._labels);
    },
    beforeEvent: function (t, e) {
      if (t[ph]._listened) {
        var i = e.event;
        switch (i.type) {
          case 'mousemove':
          case 'mouseout':
            mh(t, i);
            break;
          case 'click':
            !(function (t, e) {
              var i = t[ph],
                s = i._listeners.click,
                n = s && dh.lookup(i._labels, e);
              n && gh(t, s, n, e);
            })(t, i);
        }
      }
    },
    afterEvent: function (t) {
      var e,
        i,
        s,
        n,
        r,
        o,
        h,
        a = t[ph],
        c = a._actives,
        l = (a._actives = t.getActiveElements()),
        u = Bo(c, l);
      for (e = 0, i = u.length; e < i; ++e)
        if ((r = u[e])[1])
          for (s = 0, n = (h = r[0].element[ph] || []).length; s < n; ++s)
            ((o = h[s]).$context.active = 1 === r[1]), o.update(o.$context);
      (a._dirty || u.length) && (dh.update(a._labels), t.render()),
        delete a._dirty;
    },
  },
  xh = function (t, e, i, s) {
    for (
      var n,
        r = arguments.length,
        o =
          r < 3
            ? e
            : null === s
            ? (s = Object.getOwnPropertyDescriptor(e, i))
            : s,
        h = t.length - 1;
      h >= 0;
      h--
    )
      (n = t[h]) && (o = (r < 3 ? n(o) : r > 3 ? n(e, i, o) : n(e, i)) || o);
    return r > 3 && o && Object.defineProperty(e, i, o), o;
  };
let yh = class extends i {
  render() {
    const t = s`
          <h2>基本情報</h2>
      <dt>総ゲーム数</dt>
      <dd>${this.playerData.totalGames}</dd>
      <dt>1位率</dt>
      <dd>${(100 * this.playerData.firstRate).toFixed(2)}%</dd>
      <dt>2位率</dt>
      <dd>${(100 * this.playerData.secondRate).toFixed(2)}%</dd>
      <dt>3位率</dt>
      <dd>${(100 * this.playerData.thirdRate).toFixed(2)}%</dd>
      ${this.getFourthRate()}
      <dt>平均順位</dt>
      <dd>${this.playerData.averageRank.toFixed(2)}</dd>
      <dt>総合ポイント</dt>
      <dd>
        ${Math.round(10 * this.playerData.totalPoints) / 10}（内チョンボ：${
      Math.round(10 * this.playerData.chonbo) / 10
    }）
      </dd>
      <dt>最高得点</dt>
      <dd>${this.playerData.maxPoint}</dd>
      <dt>平均得点</dt>
      <dd>${this.playerData.averagePoint.toFixed(2)}</dd>

      <h2>獲得ポイント推移</h2>
      <div class="chart">
        <canvas id="myChart"></canvas>
      </div>
    `;
    return s`
      <h1>個人成績</h1>
      <md-outlined-select
        required
        id="player"
        class="mdc-select"
        @change="${this._changePlayer}"
      >
        ${o(
          this.players,
          (t) => s`<md-select-option value="${t}"
            >${t}</md-select-option
          >`
        )}
      </md-outlined-select>
      <md-outlined-select
        required
        id="gameType"
        class="mdc-select"
        @change="${this._changeGame}"
      >
        <md-select-option selected value="四麻">
          <div slot="headline">四麻</div>
        </md-select-option>
        <md-select-option value="三麻">
          <div slot="headline">三麻</div>
        </md-select-option>
      </md-outlined-select>

      <md-outlined-select
        required
        id="targetYear"
        @change="${this._changeYear}"
      >
        <md-select-option selected>
          ${new Date().getFullYear()}
        </md-select-option>
        ${o(this.distinctYears, (t) => {
          if (t !== new Date().getFullYear())
            return s`<md-select-option value="${t}"
            >${t}</md-select-option
          >`;
        })}
      </md-outlined-select>
      
      ${this._player?.value ? t : ''} 
    `;
  }
  constructor() {
    super(),
      (this.distinctYears = []),
      (this.players = []),
      (this.playerData = {
        totalGames: 0,
        firstRate: 0,
        secondRate: 0,
        thirdRate: 0,
        fourthRate: 0,
        averageRank: 0,
        totalPoints: 0,
        point: 0,
        chonbo: 0,
        maxPoint: 0,
        averagePoint: 0,
      }),
      (this.chartData = []),
      (this.chart = null),
      this._loadData();
  }
  async _changeGame() {
    await this._loadData(), this._setChart();
  }
  async _changeYear() {
    await this._loadData(), this._setChart();
  }
  async _changePlayer() {
    await this._loadData(), this._setChart();
  }
  async _loadData() {
    const t = (await h(a(c, 'results'))).docs,
      e = [],
      i = [],
      s = this._gameType.value || '四麻',
      n = Number(this._targetYear.value) || new Date().getFullYear(),
      r = t.filter(
        (t) =>
          t.data().gameInfo.gameType === s &&
          new Date(t.data().gameInfo.date).getFullYear() === n
      );
    r.forEach((t) => {
      const s = t.data().results;
      e.push(...s);
      const n = t.data().chonbo;
      n?.length > 0 && i.push(...n);
    }),
      this._setDistinctYears(t),
      this._setPlayers(t),
      this._player.value && (this._setPlayerData(e, i), this._setChartData(r));
  }
  _setChartData(t) {
    const e = t
      .filter((t) => t.data().gameInfo.players.includes(this._player.value))
      .map((t) => ({
        date: t.data().gameInfo.date,
        order: t.data().gameInfo.order,
        point: t.data().results.find((t) => t.player === this._player.value)
          .point,
        totalPoint: 0,
      }))
      .sort((t, e) =>
        t.date === e.date
          ? e.order - t.order
          : new Date(e.date).getTime() - new Date(t.date).getTime()
      );
    this.chartData = e;
  }
  _setChart() {
    this.chart &&
      (console.log('destroy'),
      this.chart.destroy(),
      this._myChart.removeAttribute('width'),
      this._myChart.removeAttribute('height')),
      (this._myChart.style.width = 50 * this.chartData.length + 'px'),
      (this._myChart.style.height = '400px');
    const t = Array(this.chartData.length).fill(0);
    this.chart = new Tn(this._myChart, {
      plugins: [vh],
      type: 'line',
      data: {
        labels: this.chartData.map((t) => t.date),
        datasets: [
          {
            label: '獲得ポイント',
            borderColor: 'rgba(99, 81, 159, 1)',
            data: this.chartData.map((t) => t.point),
            datalabels: {
              color: 'rgba(99, 81, 159, 1)',
              anchor: 'end',
              align: 'end',
            },
          },
          {
            label: '0線',
            borderColor: 'lightgray',
            data: t,
            pointRadius: 0,
            pointHoverRadius: 0,
            datalabels: {display: !1},
          },
        ],
      },
      options: {responsive: !1},
    });
  }
  _setDistinctYears(t) {
    const e = t.map((t) => new Date(t.data().gameInfo.date).getFullYear()),
      i = [...new Set(e)];
    this.distinctYears = i;
  }
  _setPlayers(t) {
    const e = [];
    t.forEach((t) => {
      const i = t.data().gameInfo.players;
      e.push(...i);
    });
    const i = [...new Set(e)];
    this.players = i;
  }
  _setPlayerData(t, e) {
    const i = this._player.value,
      s = t.filter((t) => t.player === i),
      n = e.filter((t) => t.player === i),
      r = s.length,
      o = s.filter((t) => 1 === t.rank).length / r,
      h = s.filter((t) => 2 === t.rank).length / r,
      a = s.filter((t) => 3 === t.rank).length / r,
      c = s.filter((t) => 4 === t.rank).length / r,
      l = s.reduce((t, e) => t + e.rank, 0) / r,
      u = s.reduce((t, e) => t + e.point, 0),
      f = n.reduce((t, e) => t + e.point, 0),
      d = u + f,
      p = Math.max(...s.map((t) => t.point)),
      b = s.reduce((t, e) => t + e.point, 0) / r;
    this.playerData = {
      totalGames: r,
      firstRate: o,
      secondRate: h,
      thirdRate: a,
      fourthRate: c,
      averageRank: l,
      totalPoints: d,
      point: u,
      chonbo: f,
      maxPoint: p,
      averagePoint: b,
    };
  }
  getFourthRate() {
    if ('四麻' === this._gameType?.value)
      return s`<dt>4位率</dt>
        <dd>${(100 * this.playerData.fourthRate).toFixed(2)}%</dd>`;
  }
};
(yh.styles = [
  t`
      md-outlined-select {
        min-width: calc(50% - 1rem);
      }
      .chart {
        overflow-x: auto;
    `,
]),
  xh([n({type: Array})], yh.prototype, 'distinctYears', void 0),
  xh([n({type: Array})], yh.prototype, 'players', void 0),
  xh([n({type: Object})], yh.prototype, 'playerData', void 0),
  xh([n({type: Array})], yh.prototype, 'chartData', void 0),
  xh([n({type: Object})], yh.prototype, 'chart', void 0),
  xh([r('#gameType')], yh.prototype, '_gameType', void 0),
  xh([r('#targetYear')], yh.prototype, '_targetYear', void 0),
  xh([r('#player')], yh.prototype, '_player', void 0),
  xh([r('#myChart')], yh.prototype, '_myChart', void 0),
  (yh = xh([e('mahjong-individual')], yh));
export {yh as MahjongIndividual};
