import {
  u as t,
  f as e,
  h as i,
  k as o,
  i as r,
  t as s,
  R as n,
  D as l,
  Q as a,
} from './custom-element-6f1a92a3.js';
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const d = {
    attribute: !0,
    type: String,
    converter: t,
    reflect: !1,
    hasChanged: e,
  },
  c = (t = d, e, i) => {
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
 */ function h(t) {
  return (e, i) =>
    'object' == typeof i
      ? c(t, e, i)
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
function u(t) {
  return h({...t, state: !0, attribute: !1});
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const p = (t, e, i) => ((i.configurable = !0), (i.enumerable = !0), i);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function f(t, e) {
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
      return p(0, 0, {
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
    return p(0, 0, {
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
 */ let v;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function m(t) {
  return (e, i) => {
    const {slot: o, selector: r} = t ?? {},
      s = 'slot' + (o ? `[name=${o}]` : ':not([name])');
    return p(0, 0, {
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
 */ function b(t) {
  return (e, i) => {
    const {slot: o} = t ?? {},
      r = 'slot' + (o ? `[name=${o}]` : ':not([name])');
    return p(0, 0, {
      get() {
        const e = this.renderRoot?.querySelector(r);
        return e?.assignedNodes(t) ?? [];
      },
    });
  };
}
function x(t, e, i, o) {
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
function g(t, e, i, o) {
  if ('a' === i && !o)
    throw new TypeError('Private accessor was defined without a getter');
  if ('function' == typeof e ? t !== e || !o : !e.has(t))
    throw new TypeError(
      'Cannot read private member from an object whose class did not declare it'
    );
  return 'm' === i ? o : 'a' === i ? o.call(t) : o ? o.value : e.get(t);
}
function y(t, e, i, o, r) {
  if ('m' === o) throw new TypeError('Private method is not writable');
  if ('a' === o && !r)
    throw new TypeError('Private accessor was defined without a setter');
  if ('function' == typeof e ? t !== e || !r : !e.has(t))
    throw new TypeError(
      'Cannot write private member to an object whose class did not declare it'
    );
  return 'a' === o ? r.call(t, i) : r ? (r.value = i) : e.set(t, i), i;
}
'function' == typeof SuppressedError && SuppressedError;
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class w extends i {
  connectedCallback() {
    super.connectedCallback(), this.setAttribute('aria-hidden', 'true');
  }
  render() {
    return o`<span class="shadow"></span>`;
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const _ = r`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let $ = class extends w {};
($.styles = [_]), ($ = x([s('md-elevation')], $));
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const E = Symbol('attachableController');
let k;
k = new MutationObserver((t) => {
  for (const e of t) e.target[E]?.hostConnected();
});
class z {
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
      (t[E] = this),
      k?.observe(t, {attributeFilter: ['for']});
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
 */ const C = ['focusin', 'focusout', 'pointerdown'];
class T extends i {
  constructor() {
    super(...arguments),
      (this.visible = !1),
      (this.inward = !1),
      (this.attachableController = new z(
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
    if (!t[S]) {
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
      t[S] = !0;
    }
  }
  onControlChange(t, e) {
    for (const i of C)
      t?.removeEventListener(i, this), e?.addEventListener(i, this);
  }
  update(t) {
    t.has('visible') && this.dispatchEvent(new Event('visibility-changed')),
      super.update(t);
  }
}
x([h({type: Boolean, reflect: !0})], T.prototype, 'visible', void 0),
  x([h({type: Boolean, reflect: !0})], T.prototype, 'inward', void 0);
const S = Symbol('handledByFocusRing'),
  R = r`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let I = class extends T {};
(I.styles = [R]), (I = x([s('md-focus-ring')], I));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6,
  },
  O =
    (t) =>
    (...e) => ({_$litDirective$: t, values: e});
class B {
  constructor(t) {}
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, i) {
    (this.t = t), (this._$AM = e), (this.i = i);
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
 */ const P = O(
    class extends B {
      constructor(t) {
        if (
          (super(t),
          t.type !== A.ATTRIBUTE || 'class' !== t.name || t.strings?.length > 2)
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
        return n;
      }
    }
  ),
  M = {
    STANDARD: 'cubic-bezier(0.2, 0, 0, 1)',
    STANDARD_ACCELERATE: 'cubic-bezier(.3,0,1,1)',
    STANDARD_DECELERATE: 'cubic-bezier(0,0,0,1)',
    EMPHASIZED: 'cubic-bezier(.3,0,0,1)',
    EMPHASIZED_ACCELERATE: 'cubic-bezier(.3,0,.8,.15)',
    EMPHASIZED_DECELERATE: 'cubic-bezier(.05,.7,.1,1)',
  };
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ var D;
!(function (t) {
  (t[(t.INACTIVE = 0)] = 'INACTIVE'),
    (t[(t.TOUCH_DELAY = 1)] = 'TOUCH_DELAY'),
    (t[(t.HOLDING = 2)] = 'HOLDING'),
    (t[(t.WAITING_FOR_CLICK = 3)] = 'WAITING_FOR_CLICK');
})(D || (D = {}));
const L = [
    'click',
    'contextmenu',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerup',
  ],
  N = window.matchMedia('(forced-colors: active)');
class F extends i {
  constructor() {
    super(...arguments),
      (this.disabled = !1),
      (this.hovered = !1),
      (this.pressed = !1),
      (this.rippleSize = ''),
      (this.rippleScale = ''),
      (this.initialSize = 0),
      (this.state = D.INACTIVE),
      (this.checkBoundsAfterContextMenu = !1),
      (this.attachableController = new z(
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
    return o`<div class="surface ${P(t)}"></div>`;
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
      this.state !== D.INACTIVE && this.endPressAnimation());
  }
  handlePointerup(t) {
    if (this.shouldReactToEvent(t)) {
      if (this.state !== D.HOLDING)
        return this.state === D.TOUCH_DELAY
          ? ((this.state = D.WAITING_FOR_CLICK),
            void this.startPressAnimation(this.rippleStartEvent))
          : void 0;
      this.state = D.WAITING_FOR_CLICK;
    }
  }
  async handlePointerdown(t) {
    if (this.shouldReactToEvent(t)) {
      if (((this.rippleStartEvent = t), !this.isTouch(t)))
        return (
          (this.state = D.WAITING_FOR_CLICK), void this.startPressAnimation(t)
        );
      (this.checkBoundsAfterContextMenu && !this.inBounds(t)) ||
        ((this.checkBoundsAfterContextMenu = !1),
        (this.state = D.TOUCH_DELAY),
        await new Promise((t) => {
          setTimeout(t, 150);
        }),
        this.state === D.TOUCH_DELAY &&
          ((this.state = D.HOLDING), this.startPressAnimation(t)));
    }
  }
  handleClick() {
    this.disabled ||
      (this.state !== D.WAITING_FOR_CLICK
        ? this.state === D.INACTIVE &&
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
      {
        pseudoElement: '::after',
        duration: 450,
        easing: M.STANDARD,
        fill: 'forwards',
      }
    );
  }
  async endPressAnimation() {
    (this.rippleStartEvent = void 0), (this.state = D.INACTIVE);
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
    if (!N?.matches)
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
    for (const i of L)
      t?.removeEventListener(i, this), e?.addEventListener(i, this);
  }
}
x([h({type: Boolean, reflect: !0})], F.prototype, 'disabled', void 0),
  x([u()], F.prototype, 'hovered', void 0),
  x([u()], F.prototype, 'pressed', void 0),
  x([f('.surface')], F.prototype, 'mdRoot', void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const V = r`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let U = class extends F {};
(U.styles = [V]), (U = x([s('md-ripple')], U));
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class q extends i {
  constructor() {
    super(...arguments),
      (this.disabled = !1),
      (this.error = !1),
      (this.focused = !1),
      (this.label = ''),
      (this.noAsterisk = !1),
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
      r = {
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
    return o`
      <div class="field ${P(r)}">
        <div class="container-overflow">
          ${this.renderBackground?.()} ${this.renderIndicator?.()} ${i}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${e} ${i ? l : t}
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
    if (!t && !e) return l;
    const i = o`<span>${t}</span>`,
      r = e ? o`<span class="counter">${e}</span>` : l,
      s = this.error && this.errorText && !this.refreshErrorAlert;
    return o`
      <div class="supporting-text" role=${s ? 'alert' : l}>${i}${r}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `;
  }
  updateSlottedAriaDescribedBy() {
    for (const t of this.slottedAriaDescribedBy)
      a(o`${this.supportingOrErrorText} ${this.counterText}`, t),
        t.setAttribute('hidden', '');
  }
  renderLabel(t) {
    if (!this.label) return l;
    let e;
    e = t
      ? this.focused || this.populated || this.isAnimating
      : !this.focused && !this.populated && !this.isAnimating;
    const i = {hidden: !e, floating: t, resting: !t},
      r = `${this.label}${this.required && !this.noAsterisk ? '*' : ''}`;
    return o`
      <span class="label ${P(i)}" aria-hidden=${!e}
        >${r}</span
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
        {duration: 150, easing: M.STANDARD}
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
x([h({type: Boolean})], q.prototype, 'disabled', void 0),
  x([h({type: Boolean})], q.prototype, 'error', void 0),
  x([h({type: Boolean})], q.prototype, 'focused', void 0),
  x([h()], q.prototype, 'label', void 0),
  x(
    [h({type: Boolean, attribute: 'no-asterisk'})],
    q.prototype,
    'noAsterisk',
    void 0
  ),
  x([h({type: Boolean})], q.prototype, 'populated', void 0),
  x([h({type: Boolean})], q.prototype, 'required', void 0),
  x([h({type: Boolean})], q.prototype, 'resizable', void 0),
  x([h({attribute: 'supporting-text'})], q.prototype, 'supportingText', void 0),
  x([h({attribute: 'error-text'})], q.prototype, 'errorText', void 0),
  x([h({type: Number})], q.prototype, 'count', void 0),
  x([h({type: Number})], q.prototype, 'max', void 0),
  x(
    [h({type: Boolean, attribute: 'has-start'})],
    q.prototype,
    'hasStart',
    void 0
  ),
  x([h({type: Boolean, attribute: 'has-end'})], q.prototype, 'hasEnd', void 0),
  x(
    [m({slot: 'aria-describedby'})],
    q.prototype,
    'slottedAriaDescribedBy',
    void 0
  ),
  x([u()], q.prototype, 'isAnimating', void 0),
  x([u()], q.prototype, 'refreshErrorAlert', void 0),
  x([u()], q.prototype, 'disableTransitions', void 0),
  x([f('.label.floating')], q.prototype, 'floatingLabelEl', void 0),
  x([f('.label.resting')], q.prototype, 'restingLabelEl', void 0),
  x([f('.container')], q.prototype, 'containerEl', void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class H extends q {
  renderOutline(t) {
    return o`
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
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const j = r`@layer styles{:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_container-shape-start-start: var(--md-outlined-field-container-shape-start-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-field-container-shape-start-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-field-container-shape-end-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-field-container-shape-end-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)))}.outline{border-color:var(--_outline-color);border-radius:inherit;display:flex;pointer-events:none;height:100%;position:absolute;width:100%;z-index:1}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}}@layer hcm{@media(forced-colors: active){.disabled .outline{border-color:GrayText;color:GrayText}.disabled :is(.outline-start,.outline-end,.outline-panel-inactive){opacity:1}}}
`,
  /**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */ W = r`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let G = class extends H {};
(G.styles = [W, j]), (G = x([s('md-outlined-field')], G));
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = Symbol.for(''),
  K = (t) => {
    if (t?.r === Y) return t?._$litStatic$;
  },
  X = (t, ...e) => ({
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
    r: Y,
  }),
  Z = new Map(),
  J = (
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
        for (a = e[d]; d < o && void 0 !== ((s = i[d]), (r = K(s))); )
          (a += r + e[++d]), (c = !0);
        d !== o && l.push(s), n.push(a), d++;
      }
      if ((d === o && n.push(e[o]), c)) {
        const t = n.join('$$lit$$');
        void 0 === (e = Z.get(t)) && ((n.raw = n), Z.set(t, (e = n))), (i = l);
      }
      return t(e, ...i);
    }
  )(o),
  Q = 'important',
  tt = ' !' + Q,
  et = O(
    class extends B {
      constructor(t) {
        if (
          (super(t),
          t.type !== A.ATTRIBUTE || 'style' !== t.name || t.strings?.length > 2)
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
            const e = 'string' == typeof o && o.endsWith(tt);
            t.includes('-') || e
              ? i.setProperty(t, e ? o.slice(0, -11) : o, e ? Q : '')
              : (i[t] = o);
          }
        }
        return n;
      }
    }
  );
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function it(t, e = dt) {
  const i = st(t, e);
  return i && ((i.tabIndex = 0), i.focus()), i;
}
function ot(t, e = dt) {
  const i = nt(t, e);
  return i && ((i.tabIndex = 0), i.focus()), i;
}
function rt(t, e = dt) {
  for (let i = 0; i < t.length; i++) {
    const o = t[i];
    if (0 === o.tabIndex && e(o)) return {item: o, index: i};
  }
  return null;
}
function st(t, e = dt) {
  for (const i of t) if (e(i)) return i;
  return null;
}
function nt(t, e = dt) {
  for (let i = t.length - 1; i >= 0; i--) {
    const o = t[i];
    if (e(o)) return o;
  }
  return null;
}
function lt(t, e, i = dt, o = !0) {
  if (e) {
    const r = (function (t, e, i = dt, o = !0) {
      for (let r = 1; r < t.length; r++) {
        const s = (r + e) % t.length;
        if (s < e && !o) return null;
        const n = t[s];
        if (i(n)) return n;
      }
      return t[e] ? t[e] : null;
    })(t, e.index, i, o);
    return r && ((r.tabIndex = 0), r.focus()), r;
  }
  return it(t, i);
}
function at(t, e, i = dt, o = !0) {
  if (e) {
    const r = (function (t, e, i = dt, o = !0) {
      for (let r = 1; r < t.length; r++) {
        const s = (e - r + t.length) % t.length;
        if (s > e && !o) return null;
        const n = t[s];
        if (i(n)) return n;
      }
      return t[e] ? t[e] : null;
    })(t, e.index, i, o);
    return r && ((r.tabIndex = 0), r.focus()), r;
  }
  return ot(t, i);
}
function dt(t) {
  return !t.disabled;
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const ct = 'ArrowDown',
  ht = 'ArrowLeft',
  ut = 'ArrowUp',
  pt = 'ArrowRight',
  ft = 'Home',
  vt = 'End';
class mt {
  constructor(t) {
    (this.handleKeydown = (t) => {
      const e = t.key;
      if (t.defaultPrevented || !this.isNavigableKey(e)) return;
      const i = this.items;
      if (!i.length) return;
      const o = rt(i, this.isActivatable);
      t.preventDefault();
      const r = this.isRtl();
      let s = null;
      switch (e) {
        case ct:
        case r ? ht : pt:
          s = lt(i, o, this.isActivatable, this.wrapNavigation());
          break;
        case ut:
        case r ? pt : ht:
          s = at(i, o, this.isActivatable, this.wrapNavigation());
          break;
        case ft:
          s = it(i, this.isActivatable);
          break;
        case vt:
          s = ot(i, this.isActivatable);
      }
      s && o && o.item !== s && (o.item.tabIndex = -1);
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
        const i = st(t, this.isActivatable);
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
      wrapNavigation: a,
    } = t;
    (this.isItem = e),
      (this.getPossibleItems = i),
      (this.isRtl = o),
      (this.deactivateItem = r),
      (this.activateItem = s),
      (this.isNavigableKey = n),
      (this.isActivatable = l),
      (this.wrapNavigation = a ?? (() => !0));
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
      e = rt(t, this.isActivatable);
    return (
      e && (e.item.tabIndex = -1),
      lt(t, e, this.isActivatable, this.wrapNavigation())
    );
  }
  activatePreviousItem() {
    const t = this.items,
      e = rt(t, this.isActivatable);
    return (
      e && (e.item.tabIndex = -1),
      at(t, e, this.isActivatable, this.wrapNavigation())
    );
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const bt = function (t, e) {
    return new CustomEvent('close-menu', {
      bubbles: !0,
      composed: !0,
      detail: {initiator: t, reason: e, itemPath: [t]},
    });
  },
  xt = {SPACE: 'Space', ENTER: 'Enter'},
  gt = 'click-selection',
  yt = 'keydown',
  wt = {ESCAPE: 'Escape', SPACE: xt.SPACE, ENTER: xt.ENTER};
function _t(t) {
  return Object.values(wt).some((e) => e === t);
}
function $t(t, e) {
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
const Et = 'none',
  kt = 'list-root',
  zt = 'first-item',
  Ct = 'last-item',
  Tt = 'end-start',
  St = 'start-start';
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Rt {
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
      b = e.getSurfacePositionClientRect
        ? e.getSurfacePositionClientRect()
        : e.getBoundingClientRect(),
      [x, g] = d.split('-'),
      [y, w] = a.split('-'),
      _ = 'ltr' === getComputedStyle(t).direction;
    let {
      blockInset: $,
      blockOutOfBoundsCorrection: E,
      surfaceBlockProperty: k,
    } = this.calculateBlock({
      surfaceRect: m,
      anchorRect: b,
      anchorBlock: y,
      surfaceBlock: x,
      yOffset: n,
      positioning: r,
      windowInnerHeight: h,
      blockScrollbarHeight: f,
    });
    if (E) {
      const t = 'start' === x ? 'end' : 'start',
        e = 'start' === y ? 'end' : 'start',
        i = this.calculateBlock({
          surfaceRect: m,
          anchorRect: b,
          anchorBlock: e,
          surfaceBlock: t,
          yOffset: n,
          positioning: r,
          windowInnerHeight: h,
          blockScrollbarHeight: f,
        });
      E > i.blockOutOfBoundsCorrection &&
        (($ = i.blockInset),
        (E = i.blockOutOfBoundsCorrection),
        (k = i.surfaceBlockProperty));
    }
    let {
      inlineInset: z,
      inlineOutOfBoundsCorrection: C,
      surfaceInlineProperty: T,
    } = this.calculateInline({
      surfaceRect: m,
      anchorRect: b,
      anchorInline: w,
      surfaceInline: g,
      xOffset: s,
      positioning: r,
      isLTR: _,
      windowInnerWidth: c,
      inlineScrollbarWidth: v,
    });
    if (C) {
      const t = 'start' === g ? 'end' : 'start',
        e = 'start' === w ? 'end' : 'start',
        i = this.calculateInline({
          surfaceRect: m,
          anchorRect: b,
          anchorInline: e,
          surfaceInline: t,
          xOffset: s,
          positioning: r,
          isLTR: _,
          windowInnerWidth: c,
          inlineScrollbarWidth: v,
        });
      Math.abs(C) > Math.abs(i.inlineOutOfBoundsCorrection) &&
        ((z = i.inlineInset),
        (C = i.inlineOutOfBoundsCorrection),
        (T = i.surfaceInlineProperty));
    }
    'move' === l && (($ -= E), (z -= C)),
      (this.surfaceStylesInternal = {
        display: 'block',
        opacity: '1',
        [k]: `${$}px`,
        [T]: `${z}px`,
      }),
      'resize' === l &&
        (E && (this.surfaceStylesInternal.height = m.height - E + 'px'),
        C && (this.surfaceStylesInternal.width = m.width - C + 'px')),
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
      b =
        u * (f * r.left + v * (a - r.right - d)) +
        p * (f * (a - r.right - d) + v * r.left);
    let x = 'start' === i ? 'inset-inline-start' : 'inset-inline-end';
    return (
      ('document' !== l && 'fixed' !== l) ||
        (x = ('start' === i && e) || ('end' === i && !e) ? 'left' : 'right'),
      {
        inlineInset:
          c * b +
          m +
          h *
            (u * (f * window.scrollX - v * window.scrollX) +
              p * (v * window.scrollX - f * window.scrollX)),
        inlineOutOfBoundsCorrection: Math.abs(Math.min(0, a - b - m - s.width)),
        surfaceInlineProperty: x,
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
 */ const It = 0,
  At = 1,
  Ot = 2;
class Bt {
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
          this.typeaheadRecords.find((t) => 0 === t[At].tabIndex) ?? null),
        this.lastActiveRecord && (this.lastActiveRecord[At].tabIndex = -1),
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
          this.lastActiveRecord && (this.lastActiveRecord[At].tabIndex = -1)
        )
      );
    'Space' === t.code && t.preventDefault(),
      (this.cancelTypeaheadTimeout = setTimeout(
        this.endTypeahead,
        this.getProperties().typeaheadBufferTime
      )),
      (this.typaheadBuffer += t.key.toLowerCase());
    const e = this.lastActiveRecord ? this.lastActiveRecord[It] : -1,
      i = this.typeaheadRecords.length,
      o = (t) => (t[It] + i - e) % i,
      r = this.typeaheadRecords
        .filter((t) => !t[At].disabled && t[Ot].startsWith(this.typaheadBuffer))
        .sort((t, e) => o(t) - o(e));
    if (0 === r.length)
      return (
        clearTimeout(this.cancelTypeaheadTimeout),
        this.lastActiveRecord && (this.lastActiveRecord[At].tabIndex = -1),
        void this.endTypeahead()
      );
    const s = 1 === this.typaheadBuffer.length;
    let n;
    (n = this.lastActiveRecord === r[0] && s ? r[1] ?? r[0] : r[0]),
      this.lastActiveRecord && (this.lastActiveRecord[At].tabIndex = -1),
      (this.lastActiveRecord = n),
      (n[At].tabIndex = 0),
      n[At].focus();
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const Pt = new Set([ct, ut, ft, vt]),
  Mt = new Set([ht, pt, ...Pt]);
class Dt extends i {
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
      (this.anchorCorner = Tt),
      (this.menuCorner = St),
      (this.stayOpenOnOutsideClick = !1),
      (this.stayOpenOnFocusout = !1),
      (this.skipRestoreFocus = !1),
      (this.defaultFocus = zt),
      (this.noNavigationWrap = !1),
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
      /**
       * @license
       * Copyright 2022 Google LLC
       * SPDX-License-Identifier: Apache-2.0
       */
      (this.listController = new mt({
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
          if (!this.isSubmenu) return Mt.has(t);
          return (
            t === ('rtl' === getComputedStyle(this).direction ? ht : pt) ||
            Pt.has(t)
          );
        },
        wrapNavigation: () => !this.noNavigationWrap,
      })),
      (this.lastFocusedElement = null),
      (this.typeaheadController = new Bt(() => ({
        getItems: () => this.items,
        typeaheadBufferTime: this.typeaheadDelay,
        active: this.typeaheadActive,
      }))),
      (this.currentAnchorElement = null),
      (this.internals = this.attachInternals()),
      (this.menuPositionController = new Rt(this, () => ({
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
            $t(t.relatedTarget, this) ||
            (0 !== this.pointerPath.length && $t(t.relatedTarget, e))
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
          e = rt(t);
        e && this.defaultFocus !== Et && (e.item.tabIndex = -1);
        let i = !this.quick;
        switch (
          (this.quick
            ? this.dispatchEvent(new Event('opening'))
            : (i = !!(await this.animateOpen())),
          this.defaultFocus)
        ) {
          case zt:
            const e = st(t);
            e && ((e.tabIndex = 0), e.focus(), await e.updateComplete);
            break;
          case Ct:
            const i = nt(t);
            i && ((i.tabIndex = 0), i.focus(), await i.updateComplete);
            break;
          case kt:
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
  getBoundingClientRect() {
    return this.surfaceEl
      ? this.surfaceEl.getBoundingClientRect()
      : super.getBoundingClientRect();
  }
  getClientRects() {
    return this.surfaceEl
      ? this.surfaceEl.getClientRects()
      : super.getClientRects();
  }
  render() {
    return this.renderSurface();
  }
  renderSurface() {
    return o`
      <div
        class="menu ${P(this.getSurfaceClasses())}"
        style=${et(this.menuPositionController.surfaceStyles)}
        popover=${'popover' === this.positioning ? 'manual' : l}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding"> ${this.renderMenuItems()} </div>
        </div>
      </div>
    `;
  }
  renderMenuItems() {
    return o`<slot
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
    return o`<md-elevation part="elevation"></md-elevation>`;
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
      _t(t.code) &&
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
        easing: M.EMPHASIZED,
      }),
      d = e.animate(
        [{transform: s ? `translateY(-${r}px)` : ''}, {transform: ''}],
        {duration: 500, easing: M.EMPHASIZED}
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
    let t;
    const e = new Promise((e) => {
        t = e;
      }),
      i = this.surfaceEl,
      o = this.slotEl;
    if (!i || !o) return t(!1), e;
    const r = 'UP' === this.openDirection;
    this.dispatchEvent(new Event('closing')),
      i.classList.toggle('animating', !0);
    const s = this.openCloseAnimationSignal.start(),
      n = i.offsetHeight,
      l = this.items,
      a = 150,
      d = 50 / l.length,
      c = i.animate([{height: `${n}px`}, {height: 0.35 * n + 'px'}], {
        duration: a,
        easing: M.EMPHASIZED_ACCELERATE,
      }),
      h = o.animate(
        [{transform: ''}, {transform: r ? `translateY(-${0.65 * n}px)` : ''}],
        {duration: a, easing: M.EMPHASIZED_ACCELERATE}
      ),
      u = i.animate([{opacity: 1}, {opacity: 0}], {duration: 50, delay: 100}),
      p = [];
    for (let t = 0; t < l.length; t++) {
      const e = l[r ? t : l.length - 1 - t],
        i = e.animate([{opacity: 1}, {opacity: 0}], {
          duration: 50,
          delay: 50 + d * t,
        });
      i.addEventListener('finish', () => {
        e.classList.toggle('md-menu-hidden', !0);
      }),
        p.push([e, i]);
    }
    return (
      s.addEventListener('abort', () => {
        c.cancel(),
          h.cancel(),
          u.cancel(),
          p.forEach(([t, e]) => {
            e.cancel(), t.classList.toggle('md-menu-hidden', !1);
          }),
          t(!1);
      }),
      c.addEventListener('finish', () => {
        i.classList.toggle('animating', !1),
          p.forEach(([t]) => {
            t.classList.toggle('md-menu-hidden', !1);
          }),
          this.openCloseAnimationSignal.finish(),
          this.dispatchEvent(new Event('closed')),
          t(!0);
      }),
      e
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
x([f('.menu')], Dt.prototype, 'surfaceEl', void 0),
  x([f('slot')], Dt.prototype, 'slotEl', void 0),
  x([h()], Dt.prototype, 'anchor', void 0),
  x([h()], Dt.prototype, 'positioning', void 0),
  x([h({type: Boolean})], Dt.prototype, 'quick', void 0),
  x(
    [h({type: Boolean, attribute: 'has-overflow'})],
    Dt.prototype,
    'hasOverflow',
    void 0
  ),
  x([h({type: Boolean, reflect: !0})], Dt.prototype, 'open', void 0),
  x(
    [h({type: Number, attribute: 'x-offset'})],
    Dt.prototype,
    'xOffset',
    void 0
  ),
  x(
    [h({type: Number, attribute: 'y-offset'})],
    Dt.prototype,
    'yOffset',
    void 0
  ),
  x(
    [h({type: Number, attribute: 'typeahead-delay'})],
    Dt.prototype,
    'typeaheadDelay',
    void 0
  ),
  x([h({attribute: 'anchor-corner'})], Dt.prototype, 'anchorCorner', void 0),
  x([h({attribute: 'menu-corner'})], Dt.prototype, 'menuCorner', void 0),
  x(
    [h({type: Boolean, attribute: 'stay-open-on-outside-click'})],
    Dt.prototype,
    'stayOpenOnOutsideClick',
    void 0
  ),
  x(
    [h({type: Boolean, attribute: 'stay-open-on-focusout'})],
    Dt.prototype,
    'stayOpenOnFocusout',
    void 0
  ),
  x(
    [h({type: Boolean, attribute: 'skip-restore-focus'})],
    Dt.prototype,
    'skipRestoreFocus',
    void 0
  ),
  x([h({attribute: 'default-focus'})], Dt.prototype, 'defaultFocus', void 0),
  x(
    [h({type: Boolean, attribute: 'no-navigation-wrap'})],
    Dt.prototype,
    'noNavigationWrap',
    void 0
  ),
  x([m({flatten: !0})], Dt.prototype, 'slotItems', void 0),
  x([u()], Dt.prototype, 'typeaheadActive', void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Lt = r`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px))}.menu{border-radius:var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px));display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);color:inherit;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit;scrollbar-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit;scrollbar-width:inherit}.item-padding{padding-block:8px}.has-overflow:not([popover]) .items{overflow:visible}.has-overflow.animating .items,.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}
`;
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let Nt = class extends Dt {};
(Nt.styles = [Lt]), (Nt = x([s('md-menu')], Nt));
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ft = [
  'role',
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
function Vt(t) {
  return t
    .replace('aria', 'aria-')
    .replace(/Elements?/g, '')
    .toLowerCase();
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function Ut(t) {
  for (const e of Ft) t.createProperty(e, {attribute: Vt(e), reflect: !0});
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
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ function qt(t, e) {
  !e.bubbles || (t.shadowRoot && !e.composed) || e.stopPropagation();
  const i = Reflect.construct(e.constructor, [e.type, e]),
    o = t.dispatchEvent(i);
  return o || e.preventDefault(), o;
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ Ft.map(Vt);
const Ht = Symbol('internals'),
  jt = Symbol('privateInternals');
function Wt(t) {
  return class extends t {
    get [Ht]() {
      return this[jt] || (this[jt] = this.attachInternals()), this[jt];
    }
  };
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const Gt = Symbol('createValidator'),
  Yt = Symbol('getValidityAnchor'),
  Kt = Symbol('privateValidator'),
  Xt = Symbol('privateSyncValidity'),
  Zt = Symbol('privateCustomValidationMessage');
function Jt(t) {
  var e;
  class i extends t {
    constructor() {
      super(...arguments), (this[e] = '');
    }
    get validity() {
      return this[Xt](), this[Ht].validity;
    }
    get validationMessage() {
      return this[Xt](), this[Ht].validationMessage;
    }
    get willValidate() {
      return this[Xt](), this[Ht].willValidate;
    }
    checkValidity() {
      return this[Xt](), this[Ht].checkValidity();
    }
    reportValidity() {
      return this[Xt](), this[Ht].reportValidity();
    }
    setCustomValidity(t) {
      (this[Zt] = t), this[Xt]();
    }
    requestUpdate(t, e, i) {
      super.requestUpdate(t, e, i), this[Xt]();
    }
    firstUpdated(t) {
      super.firstUpdated(t), this[Xt]();
    }
    [((e = Zt), Xt)]() {
      this[Kt] || (this[Kt] = this[Gt]());
      const {validity: t, validationMessage: e} = this[Kt].getValidity(),
        i = !!this[Zt],
        o = this[Zt] || e;
      this[Ht].setValidity({...t, customError: i}, o, this[Yt]() ?? void 0);
    }
    [Gt]() {
      throw new Error('Implement [createValidator]');
    }
    [Yt]() {
      throw new Error('Implement [getValidityAnchor]');
    }
  }
  return i;
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const Qt = Symbol('getFormValue'),
  te = Symbol('getFormState');
function ee(t) {
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
        this[Ht].setFormValue(this[Qt](), this[te]());
    }
    [Qt]() {
      throw new Error('Implement [getFormValue]');
    }
    [te]() {
      return this[Qt]();
    }
    formDisabledCallback(t) {
      this.disabled = t;
    }
  }
  return (
    (e.formAssociated = !0),
    x([h({noAccessor: !0})], e.prototype, 'name', null),
    x([h({type: Boolean, noAccessor: !0})], e.prototype, 'disabled', null),
    e
  );
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const ie = Symbol('onReportValidity'),
  oe = Symbol('privateCleanupFormListeners'),
  re = Symbol('privateDoNotReportInvalid'),
  se = Symbol('privateIsSelfReportingValidity'),
  ne = Symbol('privateCallOnReportValidity');
function le(t) {
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
            !this[re] &&
              t.isTrusted &&
              this.addEventListener(
                'invalid',
                () => {
                  this[ne](t);
                },
                {once: !0}
              );
          },
          {capture: !0}
        );
    }
    checkValidity() {
      this[re] = !0;
      const t = super.checkValidity();
      return (this[re] = !1), t;
    }
    reportValidity() {
      this[se] = !0;
      const t = super.reportValidity();
      return t && this[ne](null), (this[se] = !1), t;
    }
    [((e = oe), (i = re), (o = se), ne)](t) {
      const e = t?.defaultPrevented;
      if (e) return;
      this[ie](t);
      !e &&
        t?.defaultPrevented &&
        (this[se] ||
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
    [ie](t) {
      throw new Error('Implement [onReportValidity]');
    }
    formAssociatedCallback(t) {
      super.formAssociatedCallback && super.formAssociatedCallback(t),
        this[oe].abort(),
        t &&
          ((this[oe] = new AbortController()),
          (function (t, e, i, o) {
            const r = (function (t) {
              if (!ae.has(t)) {
                const e = new EventTarget();
                ae.set(t, e);
                for (const i of ['reportValidity', 'requestSubmit']) {
                  const o = t[i];
                  t[i] = function () {
                    e.dispatchEvent(new Event('before'));
                    const t = Reflect.apply(o, this, arguments);
                    return e.dispatchEvent(new Event('after')), t;
                  };
                }
              }
              return ae.get(t);
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
              this[ne](null);
            },
            this[oe].signal
          ));
    }
  }
  return r;
}
const ae = new WeakMap();
class de {
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
 */ class ce extends de {
  computeValidity(t) {
    return (
      this.selectControl ||
        (this.selectControl = document.createElement('select')),
      a(o`<option value=${t.value}></option>`, this.selectControl),
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
var he;
const ue = Symbol('value'),
  pe = le(Jt(ee(Wt(i))));
class fe extends pe {
  get value() {
    return this[ue];
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
      (this.noAsterisk = !1),
      (this.supportingText = ''),
      (this.error = !1),
      (this.menuPositioning = 'popover'),
      (this.clampMenuWidth = !1),
      (this.typeaheadDelay = 200),
      (this.hasLeadingIcon = !1),
      (this.displayText = ''),
      (this.menuAlign = 'start'),
      (this[he] = ''),
      (this.lastUserSetValue = null),
      (this.lastUserSetSelectedIndex = null),
      (this.lastSelectedOption = null),
      (this.lastSelectedOptionRecords = []),
      (this.nativeError = !1),
      (this.nativeErrorText = ''),
      (this.focused = !1),
      (this.open = !1),
      (this.defaultFocus = Et),
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
  [((he = ue), ie)](t) {
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
    return o`
      <span
        class="select ${P(this.getRenderClasses())}"
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
    return J`
      <${this.fieldTag}
          aria-haspopup="listbox"
          role="combobox"
          part="field"
          id="field"
          tabindex=${this.disabled ? '-1' : '0'}
          aria-label=${this.ariaLabel || l}
          aria-describedby="description"
          aria-expanded=${this.open ? 'true' : 'false'}
          aria-controls="listbox"
          class="field"
          label=${this.label}
          ?no-asterisk=${this.noAsterisk}
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
    return o`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `;
  }
  renderTrailingIcon() {
    return o`
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
    return o`<div id="label">${this.displayText || o`&nbsp;`}</div>`;
  }
  renderMenu() {
    const t = this.label || this.ariaLabel;
    return o`<div class="menu-wrapper">
      <md-menu
        id="listbox"
        .defaultFocus=${this.defaultFocus}
        role="listbox"
        tabindex="-1"
        aria-label=${t || l}
        stay-open-on-focusout
        part="menu"
        exportparts="focus-ring: menu-focus-ring"
        anchor="field"
        style=${et({
          '--__menu-min-width': `${this.selectWidth}px`,
          '--__menu-max-width': this.clampMenuWidth
            ? `${this.selectWidth}px`
            : void 0,
        })}
        no-navigation-wrap
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
    return o`<slot></slot>`;
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
          this.defaultFocus = Et;
          break;
        case 'End':
          this.defaultFocus = Ct;
          break;
        case 'ArrowUp':
        case 'Home':
          this.defaultFocus = zt;
      }
      return;
    }
    if (1 === t.key.length) {
      e.onKeydown(t), t.preventDefault();
      const {lastActiveRecord: i} = e;
      if (!i) return;
      this.labelEl?.setAttribute?.('aria-live', 'polite');
      this.selectItem(i[At]) && this.dispatchInteractionEvents();
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
    (t.relatedTarget && $t(t.relatedTarget, this)) || (this.open = !1);
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
        (this[ue] = i.value),
        (this.displayText = i.displayText);
    } else
      (e = null !== this.lastSelectedOption),
        (this.lastSelectedOption = null),
        (this[ue] = ''),
        (this.displayText = '');
    return e;
  }
  async handleOpening(t) {
    if (
      (this.labelEl?.removeAttribute?.('aria-live'),
      this.redispatchEvent(t),
      this.defaultFocus !== Et)
    )
      return;
    const e = this.menu.items,
      i = rt(e)?.item;
    let [o] = this.lastSelectedOptionRecords[0] ?? [null];
    i && i !== o && (i.tabIndex = -1),
      (o = o ?? e[0]),
      o && ((o.tabIndex = 0), o.focus());
  }
  redispatchEvent(t) {
    qt(this, t);
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
      ((r = e.key), Object.values(xt).some((t) => t === r)))
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
  [Qt]() {
    return this.value;
  }
  formResetCallback() {
    this.reset();
  }
  formStateRestoreCallback(t) {
    this.value = t;
  }
  click() {
    this.field?.click();
  }
  [Gt]() {
    return new ce(() => this);
  }
  [Yt]() {
    return this.field;
  }
}
Ut(fe),
  (fe.shadowRootOptions = {...i.shadowRootOptions, delegatesFocus: !0}),
  x([h({type: Boolean})], fe.prototype, 'quick', void 0),
  x([h({type: Boolean})], fe.prototype, 'required', void 0),
  x(
    [h({type: String, attribute: 'error-text'})],
    fe.prototype,
    'errorText',
    void 0
  ),
  x([h()], fe.prototype, 'label', void 0),
  x(
    [h({type: Boolean, attribute: 'no-asterisk'})],
    fe.prototype,
    'noAsterisk',
    void 0
  ),
  x(
    [h({type: String, attribute: 'supporting-text'})],
    fe.prototype,
    'supportingText',
    void 0
  ),
  x([h({type: Boolean, reflect: !0})], fe.prototype, 'error', void 0),
  x(
    [h({attribute: 'menu-positioning'})],
    fe.prototype,
    'menuPositioning',
    void 0
  ),
  x(
    [h({type: Boolean, attribute: 'clamp-menu-width'})],
    fe.prototype,
    'clampMenuWidth',
    void 0
  ),
  x(
    [h({type: Number, attribute: 'typeahead-delay'})],
    fe.prototype,
    'typeaheadDelay',
    void 0
  ),
  x(
    [h({type: Boolean, attribute: 'has-leading-icon'})],
    fe.prototype,
    'hasLeadingIcon',
    void 0
  ),
  x([h({attribute: 'display-text'})], fe.prototype, 'displayText', void 0),
  x([h({attribute: 'menu-align'})], fe.prototype, 'menuAlign', void 0),
  x([h()], fe.prototype, 'value', null),
  x(
    [h({type: Number, attribute: 'selected-index'})],
    fe.prototype,
    'selectedIndex',
    null
  ),
  x([u()], fe.prototype, 'nativeError', void 0),
  x([u()], fe.prototype, 'nativeErrorText', void 0),
  x([u()], fe.prototype, 'focused', void 0),
  x([u()], fe.prototype, 'open', void 0),
  x([u()], fe.prototype, 'defaultFocus', void 0),
  x([f('.field')], fe.prototype, 'field', void 0),
  x([f('md-menu')], fe.prototype, 'menu', void 0),
  x([f('#label')], fe.prototype, 'labelEl', void 0),
  x(
    [m({slot: 'leading-icon', flatten: !0})],
    fe.prototype,
    'leadingIcons',
    void 0
  );
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ve extends fe {
  constructor() {
    super(...arguments), (this.fieldTag = X`md-outlined-field`);
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const me = r`:host{--_text-field-disabled-input-text-color: var(--md-outlined-select-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-input-text-opacity: var(--md-outlined-select-text-field-disabled-input-text-opacity, 0.38);--_text-field-disabled-label-text-color: var(--md-outlined-select-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-label-text-opacity: var(--md-outlined-select-text-field-disabled-label-text-opacity, 0.38);--_text-field-disabled-leading-icon-color: var(--md-outlined-select-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-leading-icon-opacity: var(--md-outlined-select-text-field-disabled-leading-icon-opacity, 0.38);--_text-field-disabled-outline-color: var(--md-outlined-select-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-outline-opacity: var(--md-outlined-select-text-field-disabled-outline-opacity, 0.12);--_text-field-disabled-outline-width: var(--md-outlined-select-text-field-disabled-outline-width, 1px);--_text-field-disabled-supporting-text-color: var(--md-outlined-select-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-supporting-text-opacity: var(--md-outlined-select-text-field-disabled-supporting-text-opacity, 0.38);--_text-field-disabled-trailing-icon-color: var(--md-outlined-select-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-trailing-icon-opacity: var(--md-outlined-select-text-field-disabled-trailing-icon-opacity, 0.38);--_text-field-error-focus-input-text-color: var(--md-outlined-select-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-focus-label-text-color: var(--md-outlined-select-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-leading-icon-color: var(--md-outlined-select-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-focus-outline-color: var(--md-outlined-select-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-supporting-text-color: var(--md-outlined-select-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-trailing-icon-color: var(--md-outlined-select-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-input-text-color: var(--md-outlined-select-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-label-text-color: var(--md-outlined-select-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-leading-icon-color: var(--md-outlined-select-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-hover-outline-color: var(--md-outlined-select-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-supporting-text-color: var(--md-outlined-select-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-trailing-icon-color: var(--md-outlined-select-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-input-text-color: var(--md-outlined-select-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-label-text-color: var(--md-outlined-select-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-leading-icon-color: var(--md-outlined-select-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-outline-color: var(--md-outlined-select-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-supporting-text-color: var(--md-outlined-select-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-trailing-icon-color: var(--md-outlined-select-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-focus-input-text-color: var(--md-outlined-select-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-focus-label-text-color: var(--md-outlined-select-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-leading-icon-color: var(--md-outlined-select-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-outline-color: var(--md-outlined-select-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-outline-width: var(--md-outlined-select-text-field-focus-outline-width, 3px);--_text-field-focus-supporting-text-color: var(--md-outlined-select-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-trailing-icon-color: var(--md-outlined-select-text-field-focus-trailing-icon-color, var(--md-sys-color-primary, #6750a4));--_text-field-hover-input-text-color: var(--md-outlined-select-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-label-text-color: var(--md-outlined-select-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-leading-icon-color: var(--md-outlined-select-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-outline-color: var(--md-outlined-select-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-outline-width: var(--md-outlined-select-text-field-hover-outline-width, 1px);--_text-field-hover-supporting-text-color: var(--md-outlined-select-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-trailing-icon-color: var(--md-outlined-select-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-input-text-color: var(--md-outlined-select-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-input-text-font: var(--md-outlined-select-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-input-text-line-height: var(--md-outlined-select-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-input-text-size: var(--md-outlined-select-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-input-text-weight: var(--md-outlined-select-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-label-text-color: var(--md-outlined-select-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-label-text-font: var(--md-outlined-select-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-label-text-line-height: var(--md-outlined-select-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-label-text-populated-line-height: var(--md-outlined-select-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-label-text-populated-size: var(--md-outlined-select-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-label-text-size: var(--md-outlined-select-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-label-text-weight: var(--md-outlined-select-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-leading-icon-color: var(--md-outlined-select-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-leading-icon-size: var(--md-outlined-select-text-field-leading-icon-size, 24px);--_text-field-outline-color: var(--md-outlined-select-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_text-field-outline-width: var(--md-outlined-select-text-field-outline-width, 1px);--_text-field-supporting-text-color: var(--md-outlined-select-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-supporting-text-font: var(--md-outlined-select-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-supporting-text-line-height: var(--md-outlined-select-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-supporting-text-size: var(--md-outlined-select-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-supporting-text-weight: var(--md-outlined-select-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-trailing-icon-color: var(--md-outlined-select-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-trailing-icon-size: var(--md-outlined-select-text-field-trailing-icon-size, 24px);--_text-field-container-shape-start-start: var(--md-outlined-select-text-field-container-shape-start-start, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-start-end: var(--md-outlined-select-text-field-container-shape-start-end, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-end-end: var(--md-outlined-select-text-field-container-shape-end-end, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-end-start: var(--md-outlined-select-text-field-container-shape-end-start, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--md-outlined-field-container-shape-end-end: var(--_text-field-container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_text-field-container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_text-field-container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_text-field-container-shape-start-start);--md-outlined-field-content-color: var(--_text-field-input-text-color);--md-outlined-field-content-font: var(--_text-field-input-text-font);--md-outlined-field-content-line-height: var(--_text-field-input-text-line-height);--md-outlined-field-content-size: var(--_text-field-input-text-size);--md-outlined-field-content-weight: var(--_text-field-input-text-weight);--md-outlined-field-disabled-content-color: var(--_text-field-disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_text-field-disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_text-field-disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_text-field-disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_text-field-disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_text-field-disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_text-field-disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_text-field-disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_text-field-disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_text-field-disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_text-field-disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_text-field-disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_text-field-disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_text-field-error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_text-field-error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_text-field-error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_text-field-error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_text-field-error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_text-field-error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_text-field-error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_text-field-error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_text-field-error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_text-field-error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_text-field-error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_text-field-error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_text-field-error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_text-field-error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_text-field-error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_text-field-error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_text-field-error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_text-field-error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_text-field-focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_text-field-focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_text-field-focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_text-field-focus-outline-color);--md-outlined-field-focus-outline-width: var(--_text-field-focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_text-field-focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_text-field-focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_text-field-hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_text-field-hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_text-field-hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_text-field-hover-outline-color);--md-outlined-field-hover-outline-width: var(--_text-field-hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_text-field-hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_text-field-hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_text-field-label-text-color);--md-outlined-field-label-text-font: var(--_text-field-label-text-font);--md-outlined-field-label-text-line-height: var(--_text-field-label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_text-field-label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_text-field-label-text-populated-size);--md-outlined-field-label-text-size: var(--_text-field-label-text-size);--md-outlined-field-label-text-weight: var(--_text-field-label-text-weight);--md-outlined-field-leading-content-color: var(--_text-field-leading-icon-color);--md-outlined-field-outline-color: var(--_text-field-outline-color);--md-outlined-field-outline-width: var(--_text-field-outline-width);--md-outlined-field-supporting-text-color: var(--_text-field-supporting-text-color);--md-outlined-field-supporting-text-font: var(--_text-field-supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_text-field-supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_text-field-supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_text-field-supporting-text-weight);--md-outlined-field-trailing-content-color: var(--_text-field-trailing-icon-color)}[has-start] .icon.leading{font-size:var(--_text-field-leading-icon-size);height:var(--_text-field-leading-icon-size);width:var(--_text-field-leading-icon-size)}.icon.trailing{font-size:var(--_text-field-trailing-icon-size);height:var(--_text-field-trailing-icon-size);width:var(--_text-field-trailing-icon-size)}
`,
  /**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */ be = r`:host{color:unset;min-width:210px;display:flex}.field{cursor:default;outline:none}.select{position:relative;flex-direction:column}.icon.trailing svg,.icon ::slotted(*){fill:currentColor}.icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}.icon slot{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.icon.trailing :is(.up,.down){opacity:0;transition:opacity 75ms linear 75ms}.select:not(.open) .down,.select.open .up{opacity:1}.field,.select,md-menu{min-width:inherit;width:inherit;max-width:inherit;display:flex}md-menu{min-width:var(--__menu-min-width);max-width:var(--__menu-max-width, inherit)}.menu-wrapper{width:0px;height:0px;max-width:inherit}md-menu ::slotted(:not[disabled]){cursor:pointer}.field,.select{width:100%}:host{display:inline-flex}:host([disabled]){pointer-events:none}
`;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let xe = class extends ve {};
(xe.styles = [be, me]), (xe = x([s('md-outlined-select')], xe));
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ge = r`:host{display:flex;--md-ripple-hover-color: var(--md-menu-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-menu-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-menu-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-menu-item-pressed-state-layer-opacity, 0.12)}:host([disabled]){opacity:var(--md-menu-item-disabled-opacity, 0.3);pointer-events:none}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled){cursor:pointer}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;color:var(--md-menu-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-menu-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-menu-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-menu-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-menu-item-one-line-container-height, 56px);padding-top:var(--md-menu-item-top-space, 12px);padding-bottom:var(--md-menu-item-bottom-space, 12px);padding-inline-start:var(--md-menu-item-leading-space, 16px);padding-inline-end:var(--md-menu-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-menu-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-menu-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-menu-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-menu-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-menu-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-menu-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-menu-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-menu-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-menu-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}.list-item{background-color:var(--md-menu-item-container-color, transparent)}.list-item.selected{background-color:var(--md-menu-item-selected-container-color, var(--md-sys-color-secondary-container, #e8def8))}.selected:not(.disabled) ::slotted(*){color:var(--md-menu-item-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b))}@media(forced-colors: active){:host([disabled]),:host([disabled]) slot{color:GrayText;opacity:1}.list-item{position:relative}.list-item.selected::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}
`;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class ye extends i {
  constructor() {
    super(...arguments), (this.multiline = !1);
  }
  render() {
    return o`
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
      if ((we(i) && (e += 1), e > 1)) {
        t = !0;
        break;
      }
    this.multiline = t;
  }
}
function we(t) {
  for (const e of t.assignedNodes({flatten: !0})) {
    const t = e.nodeType === Node.ELEMENT_NODE,
      i = e.nodeType === Node.TEXT_NODE && e.textContent?.match(/\S/);
    if (t || i) return !0;
  }
  return !1;
}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ x([h({type: Boolean, reflect: !0})], ye.prototype, 'multiline', void 0),
  x(
    [
      (function (t) {
        return (e, i) =>
          p(0, 0, {
            get() {
              return (
                this.renderRoot ?? (v ??= document.createDocumentFragment())
              ).querySelectorAll(t);
            },
          });
      })('.text slot'),
    ],
    ye.prototype,
    'textSlots',
    void 0
  );
const _e = r`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let $e = class extends ye {};
($e.styles = [_e]), ($e = x([s('md-item')], $e));
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ee {
  constructor(t, e) {
    (this.host = t),
      (this.internalTypeaheadText = null),
      (this.onClick = () => {
        this.host.keepOpen ||
          this.host.dispatchEvent(bt(this.host, {kind: gt}));
      }),
      (this.onKeydown = (t) => {
        if (this.host.href && 'Enter' === t.code) {
          const t = this.getInteractiveElement();
          t instanceof HTMLAnchorElement && t.click();
        }
        if (t.defaultPrevented) return;
        const e = t.code;
        (this.host.keepOpen && 'Escape' !== e) ||
          (_t(e) &&
            (t.preventDefault(),
            this.host.dispatchEvent(bt(this.host, {kind: yt, key: e}))));
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
 */ class ke {
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
      (this.menuItemController = new Ee(t, e)),
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
 */ class ze extends i {
  constructor() {
    super(...arguments),
      (this.disabled = !1),
      (this.isMenuItem = !0),
      (this.selected = !1),
      (this.value = ''),
      (this.type = 'option'),
      (this.selectOptionController = new ke(this, {
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
    return this.renderListItem(o`
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
    return o`
      <li
        id="item"
        tabindex=${this.disabled ? -1 : 0}
        role=${this.selectOptionController.role}
        aria-label=${this.ariaLabel || l}
        aria-selected=${this.ariaSelected || l}
        aria-checked=${this.ariaChecked || l}
        aria-expanded=${this.ariaExpanded || l}
        aria-haspopup=${this.ariaHasPopup || l}
        class="list-item ${P(this.getRenderClasses())}"
        @click=${this.selectOptionController.onClick}
        @keydown=${this.selectOptionController.onKeydown}
        >${t}</li
      >
    `;
  }
  renderRipple() {
    return o` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`;
  }
  renderFocusRing() {
    return o` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`;
  }
  getRenderClasses() {
    return {disabled: this.disabled, selected: this.selected};
  }
  renderBody() {
    return o`
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
Ut(ze),
  (ze.shadowRootOptions = {...i.shadowRootOptions, delegatesFocus: !0}),
  x([h({type: Boolean, reflect: !0})], ze.prototype, 'disabled', void 0),
  x(
    [h({type: Boolean, attribute: 'md-menu-item', reflect: !0})],
    ze.prototype,
    'isMenuItem',
    void 0
  ),
  x([h({type: Boolean})], ze.prototype, 'selected', void 0),
  x([h()], ze.prototype, 'value', void 0),
  x([f('.list-item')], ze.prototype, 'listItemRoot', void 0),
  x([m({slot: 'headline'})], ze.prototype, 'headlineElements', void 0),
  x(
    [m({slot: 'supporting-text'})],
    ze.prototype,
    'supportingTextElements',
    void 0
  ),
  x([b({slot: ''})], ze.prototype, 'defaultElements', void 0),
  x([h({attribute: 'typeahead-text'})], ze.prototype, 'typeaheadText', null),
  x([h({attribute: 'display-text'})], ze.prototype, 'displayText', null);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ce = class extends ze {};
(Ce.styles = [ge]), (Ce = x([s('md-select-option')], Ce));
export {
  M as E,
  q as F,
  Ee as M,
  P as R,
  de as V,
  x as _,
  b as a,
  Ut as b,
  X as c,
  O as d,
  f as e,
  B as f,
  le as g,
  Jt as h,
  Ht as i,
  ee as j,
  J as k,
  et as l,
  Wt as m,
  h as n,
  m as o,
  qt as p,
  Qt as q,
  u as r,
  ge as s,
  A as t,
  Gt as u,
  Yt as v,
  ie as w,
  W as x,
  g as y,
  y as z,
};
