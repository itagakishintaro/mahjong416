import {
  d as t,
  f as e,
  t as o,
  V as r,
  g as i,
  h as l,
  j as a,
  b as n,
  _ as s,
  n as d,
  r as c,
  e as f,
  o as h,
  R as v,
  k as p,
  l as u,
  p as m,
  q as g,
  u as b,
  v as x,
  w as y,
  m as _,
  c as w,
  F as $,
  x as z,
  y as k,
  z as C,
} from './select-option-ec247a15.js';
import {
  i as S,
  R as A,
  D as B,
  h as I,
  k as T,
  t as M,
} from './custom-element-6f1a92a3.js';
import {B as E, s as F, a as W} from './filled-button-87178736.js';
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const P = S`:host{--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-outlined-text-field-container-shape-start-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-text-field-container-shape-start-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-text-field-container-shape-end-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-text-field-container-shape-end-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space)}
`,
  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ R = {},
  L = t(
    class extends e {
      constructor(t) {
        if (
          (super(t),
          t.type !== o.PROPERTY &&
            t.type !== o.ATTRIBUTE &&
            t.type !== o.BOOLEAN_ATTRIBUTE)
        )
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
        if (e === A || e === B) return e;
        const r = t.element,
          i = t.name;
        if (t.type === o.PROPERTY) {
          if (e === r[i]) return A;
        } else if (t.type === o.BOOLEAN_ATTRIBUTE) {
          if (!!e === r.hasAttribute(i)) return A;
        } else if (t.type === o.ATTRIBUTE && r.getAttribute(i) === e + '')
          return A;
        return (
          ((t, e = R) => {
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
  N = {fromAttribute: (t) => t ?? '', toAttribute: (t) => t || null};
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class O extends r {
  computeValidity({state: t, renderedControl: e}) {
    let o = e;
    U(t) && !o
      ? ((o = this.inputControl || document.createElement('input')),
        (this.inputControl = o))
      : o ||
        ((o = this.textAreaControl || document.createElement('textarea')),
        (this.textAreaControl = o));
    const r = U(t) ? o : null;
    if (
      (r && (r.type = t.type),
      o.value !== t.value && (o.value = t.value),
      (o.required = t.required),
      r)
    ) {
      const e = t;
      e.pattern ? (r.pattern = e.pattern) : r.removeAttribute('pattern'),
        e.min ? (r.min = e.min) : r.removeAttribute('min'),
        e.max ? (r.max = e.max) : r.removeAttribute('max'),
        e.step ? (r.step = e.step) : r.removeAttribute('step');
    }
    return (
      (t.minLength ?? -1) > -1
        ? o.setAttribute('minlength', String(t.minLength))
        : o.removeAttribute('minlength'),
      (t.maxLength ?? -1) > -1
        ? o.setAttribute('maxlength', String(t.maxLength))
        : o.removeAttribute('maxlength'),
      {validity: o.validity, validationMessage: o.validationMessage}
    );
  }
  equals({state: t}, {state: e}) {
    const o =
      t.type === e.type &&
      t.value === e.value &&
      t.required === e.required &&
      t.minLength === e.minLength &&
      t.maxLength === e.maxLength;
    return U(t) && U(e)
      ? o &&
          t.pattern === e.pattern &&
          t.min === e.min &&
          t.max === e.max &&
          t.step === e.step
      : o;
  }
  copy({state: t}) {
    return {
      state: U(t) ? this.copyInput(t) : this.copyTextArea(t),
      renderedControl: null,
    };
  }
  copyInput(t) {
    const {type: e, pattern: o, min: r, max: i, step: l} = t;
    return {
      ...this.copySharedState(t),
      type: e,
      pattern: o,
      min: r,
      max: i,
      step: l,
    };
  }
  copyTextArea(t) {
    return {...this.copySharedState(t), type: t.type};
  }
  copySharedState({value: t, required: e, minLength: o, maxLength: r}) {
    return {value: t, required: e, minLength: o, maxLength: r};
  }
}
function U(t) {
  return 'textarea' !== t.type;
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const j = i(l(a(_(I))));
class D extends j {
  constructor() {
    super(...arguments),
      (this.error = !1),
      (this.errorText = ''),
      (this.label = ''),
      (this.noAsterisk = !1),
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
  setSelectionRange(t, e, o) {
    this.getInputOrTextarea().setSelectionRange(t, e, o);
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
  attributeChangedCallback(t, e, o) {
    ('value' === t && this.dirty) || super.attributeChangedCallback(t, e, o);
  }
  render() {
    const t = {
      disabled: this.disabled,
      error: !this.disabled && this.hasError,
      textarea: 'textarea' === this.type,
      'no-spinner': this.noSpinner,
    };
    return T`
      <span class="text-field ${v(t)}">
        ${this.renderField()}
      </span>
    `;
  }
  updated(t) {
    const e = this.getInputOrTextarea().value;
    this.value !== e && (this.value = e);
  }
  renderField() {
    return p`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      ?no-asterisk=${this.noAsterisk}
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
    return T`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `;
  }
  renderTrailingIcon() {
    return T`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `;
  }
  renderInputOrTextarea() {
    const t = {direction: this.textDirection},
      e = this.ariaLabel || this.label || B,
      o = this.autocomplete,
      r = (this.maxLength ?? -1) > -1,
      i = (this.minLength ?? -1) > -1;
    if ('textarea' === this.type)
      return T`
        <textarea
          class="input"
          style=${u(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${o || B}
          name=${this.name || B}
          ?disabled=${this.disabled}
          maxlength=${r ? this.maxLength : B}
          minlength=${i ? this.minLength : B}
          placeholder=${this.placeholder || B}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${L(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;
    const l = this.renderPrefix(),
      a = this.renderSuffix(),
      n = this.inputMode;
    return T`
      <div class="input-wrapper">
        ${l}
        <input
          class="input"
          style=${u(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${o || B}
          name=${this.name || B}
          ?disabled=${this.disabled}
          inputmode=${n || B}
          max=${this.max || B}
          maxlength=${r ? this.maxLength : B}
          min=${this.min || B}
          minlength=${i ? this.minLength : B}
          pattern=${this.pattern || B}
          placeholder=${this.placeholder || B}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step || B}
          type=${this.type}
          .value=${L(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${a}
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
    if (!t) return B;
    return T`<span class="${v({suffix: e, prefix: !e})}">${t}</span>`;
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
    m(this, t);
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
  [g]() {
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
  [b]() {
    return new O(() => ({state: this, renderedControl: this.inputOrTextarea}));
  }
  [x]() {
    return this.inputOrTextarea;
  }
  [y](t) {
    t?.preventDefault();
    const e = this.getErrorText();
    (this.nativeError = !!t),
      (this.nativeErrorText = this.validationMessage),
      e === this.getErrorText() && this.field?.reannounceError();
  }
}
n(D),
  (D.shadowRootOptions = {...I.shadowRootOptions, delegatesFocus: !0}),
  s([d({type: Boolean, reflect: !0})], D.prototype, 'error', void 0),
  s([d({attribute: 'error-text'})], D.prototype, 'errorText', void 0),
  s([d()], D.prototype, 'label', void 0),
  s(
    [d({type: Boolean, attribute: 'no-asterisk'})],
    D.prototype,
    'noAsterisk',
    void 0
  ),
  s([d({type: Boolean, reflect: !0})], D.prototype, 'required', void 0),
  s([d()], D.prototype, 'value', void 0),
  s([d({attribute: 'prefix-text'})], D.prototype, 'prefixText', void 0),
  s([d({attribute: 'suffix-text'})], D.prototype, 'suffixText', void 0),
  s(
    [d({type: Boolean, attribute: 'has-leading-icon'})],
    D.prototype,
    'hasLeadingIcon',
    void 0
  ),
  s(
    [d({type: Boolean, attribute: 'has-trailing-icon'})],
    D.prototype,
    'hasTrailingIcon',
    void 0
  ),
  s([d({attribute: 'supporting-text'})], D.prototype, 'supportingText', void 0),
  s([d({attribute: 'text-direction'})], D.prototype, 'textDirection', void 0),
  s([d({type: Number})], D.prototype, 'rows', void 0),
  s([d({type: Number})], D.prototype, 'cols', void 0),
  s([d({reflect: !0})], D.prototype, 'inputMode', void 0),
  s([d()], D.prototype, 'max', void 0),
  s([d({type: Number})], D.prototype, 'maxLength', void 0),
  s([d()], D.prototype, 'min', void 0),
  s([d({type: Number})], D.prototype, 'minLength', void 0),
  s(
    [d({type: Boolean, attribute: 'no-spinner'})],
    D.prototype,
    'noSpinner',
    void 0
  ),
  s([d()], D.prototype, 'pattern', void 0),
  s([d({reflect: !0, converter: N})], D.prototype, 'placeholder', void 0),
  s([d({type: Boolean, reflect: !0})], D.prototype, 'readOnly', void 0),
  s([d({type: Boolean, reflect: !0})], D.prototype, 'multiple', void 0),
  s([d()], D.prototype, 'step', void 0),
  s([d({reflect: !0})], D.prototype, 'type', void 0),
  s([d({reflect: !0})], D.prototype, 'autocomplete', void 0),
  s([c()], D.prototype, 'dirty', void 0),
  s([c()], D.prototype, 'focused', void 0),
  s([c()], D.prototype, 'nativeError', void 0),
  s([c()], D.prototype, 'nativeErrorText', void 0),
  s([f('.input')], D.prototype, 'inputOrTextarea', void 0),
  s([f('.field')], D.prototype, 'field', void 0),
  s([h({slot: 'leading-icon'})], D.prototype, 'leadingIcons', void 0),
  s([h({slot: 'trailing-icon'})], D.prototype, 'trailingIcons', void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class H extends D {
  constructor() {
    super(...arguments), (this.fieldTag = w`md-outlined-field`);
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const q = S`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let J = class extends H {
  constructor() {
    super(...arguments), (this.fieldTag = w`md-outlined-field`);
  }
};
(J.styles = [q, P]), (J = s([M('md-outlined-text-field')], J));
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class K extends $ {
  renderBackground() {
    return T`
      <div class="background"></div>
      <div class="state-layer"></div>
    `;
  }
  renderIndicator() {
    return T`<div class="active-indicator"></div>`;
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const V = S`@layer styles{:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px);--_container-shape-start-start: var(--md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)))}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%;z-index:1}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}}@layer hcm{@media(forced-colors: active){.disabled .active-indicator::before{border-color:GrayText;opacity:1}}}
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let Z = class extends K {};
(Z.styles = [z, V]), (Z = s([M('md-filled-field')], Z));
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const G = S`:host{--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space)}
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ class Q extends D {
  constructor() {
    super(...arguments), (this.fieldTag = w`md-filled-field`);
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let X = class extends Q {
  constructor() {
    super(...arguments), (this.fieldTag = w`md-filled-field`);
  }
};
(X.styles = [q, G]), (X = s([M('md-filled-text-field')], X));
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Y extends E {
  renderElevationOrOutline() {
    return T`<md-elevation part="elevation"></md-elevation>`;
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const tt = S`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_container-shape-start-start: var(--md-filled-tonal-button-container-shape-start-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-tonal-button-container-shape-start-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-tonal-button-container-shape-end-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-tonal-button-container-shape-end-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px)}
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let et = class extends Y {};
(et.styles = [F, W, tt]), (et = s([M('md-filled-tonal-button')], et));
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ot extends I {
  constructor() {
    super(...arguments),
      (this.value = 0),
      (this.max = 1),
      (this.indeterminate = !1),
      (this.fourColor = !1);
  }
  render() {
    const {ariaLabel: t} = this;
    return T`
      <div
        class="progress ${v(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${t || B}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate ? B : this.value}
        >${this.renderIndicator()}</div
      >
    `;
  }
  getRenderClasses() {
    return {indeterminate: this.indeterminate, 'four-color': this.fourColor};
  }
}
n(ot),
  s([d({type: Number})], ot.prototype, 'value', void 0),
  s([d({type: Number})], ot.prototype, 'max', void 0),
  s([d({type: Boolean})], ot.prototype, 'indeterminate', void 0),
  s(
    [d({type: Boolean, attribute: 'four-color'})],
    ot.prototype,
    'fourColor',
    void 0
  );
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class rt extends ot {
  renderIndicator() {
    return this.indeterminate
      ? this.renderIndeterminateContainer()
      : this.renderDeterminateContainer();
  }
  renderDeterminateContainer() {
    const t = 100 * (1 - this.value / this.max);
    return T`
      <svg viewBox="0 0 4800 4800">
        <circle class="track" pathLength="100"></circle>
        <circle
          class="active-track"
          pathLength="100"
          stroke-dashoffset=${t}></circle>
      </svg>
    `;
  }
  renderIndeterminateContainer() {
    return T` <div class="spinner">
      <div class="left">
        <div class="circle"></div>
      </div>
      <div class="right">
        <div class="circle"></div>
      </div>
    </div>`;
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const it = S`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}
`;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ let lt = class extends rt {};
(lt.styles = [it]), (lt = s([M('md-circular-progress')], lt));
const at = !0;
class nt {
  static {
    this.instances = new WeakMap();
  }
  get prefix() {
    return `[${this.host.localName}${this.host.id ? `#${this.host.id}` : ''}]`;
  }
  static debugLog(t = null) {
    try {
      return (
        null !== t && ((nt.logDebug = !!t), (localStorage.pfeLog = !!t)),
        'true' === localStorage.pfeLog
      );
    } catch (t) {
      return nt.logDebug;
    }
  }
  static log(...t) {
    nt.debugLog() && console.log(...t);
  }
  static warn(...t) {
    console.warn(...t);
  }
  static error(...t) {
    console.error([...t].join(' '));
  }
  log(...t) {
    nt.log(this.prefix, ...t);
  }
  warn(...t) {
    nt.warn(this.prefix, ...t);
  }
  error(...t) {
    nt.error(this.prefix, ...t);
  }
  constructor(t) {
    if (((this.host = t), nt.instances.get(t))) return nt.instances.get(t);
    t.addController(this), nt.instances.set(t, this);
  }
  hostConnected() {
    this.log('connected');
  }
}
class st {
  static {
    this.instances = new WeakMap();
  }
  constructor(t, e) {
    (this.host = t),
      (this.options = e),
      (this.mo = new MutationObserver(this.parse)),
      (this.cache = new Map()),
      (this.class = t.constructor),
      (this.logger = new nt(this.host)),
      st.instances.set(t, this);
    const o = this.options?.properties ?? {};
    for (const [t, e] of Object.entries(o)) this.initProp(t, e);
    t.addController(this),
      (this.cascadeProperties = (function (t, e, o = !1) {
        let r;
        return function (...i) {
          const l = this,
            a = o && !r;
          clearTimeout(r),
            (r = window.setTimeout(function () {
              (r = null), o || t.apply(l, i);
            }, e)),
            a && t.apply(l, i);
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
      for (const o of t)
        if (o instanceof Element)
          for (const t of e)
            if (o.matches(t)) {
              const e = this.cache.get(t);
              for (const t of e ?? []) this._copyAttribute(t, o);
            }
    }
  }
  initProp(t, e) {
    for (const o of [e].flat(1 / 0).filter(Boolean)) {
      const {attribute: e} = this.class.getPropertyOptions(t),
        r = 'string' == typeof e ? e : t.toLowerCase();
      this.cache.get(o) ? this.cache.get(o)?.push(r) : this.cache.set(o, [r]);
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
    const o = this.host.getAttribute(t);
    e.isConnected && (null == o ? e.removeAttribute(t) : e.setAttribute(t, o));
  }
  _cascadeAttributes(t, e) {
    for (const o of t)
      for (const t of e.get(o) ?? []) this._cascadeAttribute(t, o);
  }
  _cascadeAttribute(t, e) {
    const o = [
      ...this.host.querySelectorAll(e),
      ...(this.host.shadowRoot?.querySelectorAll(e) ?? []),
    ];
    for (const e of o) this._copyAttribute(t, e);
  }
}
s(
  [
    function (t, e, o) {
      if ('function' != typeof o?.value)
        throw new TypeError(
          `Only methods can be decorated with @bound. <${
            e ?? t.name
          }> is not a method!`
        );
      return {
        configurable: at,
        get() {
          const t = o.value.bind(this);
          return (
            Object.defineProperty(this, e, {
              value: t,
              configurable: at,
              writable: !0,
            }),
            t
          );
        },
      };
    },
  ],
  st.prototype,
  'parse',
  null
);
const dt = Symbol('observed properties controller');
class ct {
  static {
    this.hosts = new WeakMap();
  }
  delete(t) {
    this.values.delete(t);
  }
  constructor(t) {
    if (((this.host = t), (this.values = new Map()), ct.hosts.get(t)))
      return ct.hosts.get(t);
    t.addController(this), (t[dt] = this);
  }
  hostUpdate() {
    for (const [t, [e, [o, r]]] of this.values)
      this.host[e]?.(o, r), this.delete(t);
  }
  hostUpdated() {
    this.host.removeController(this);
  }
  cache(t, e, ...o) {
    this.values.set(t, [e, o]);
  }
}
function ft(t, e, o) {
  const r = Object.getOwnPropertyDescriptor(t, e);
  Object.defineProperty(t, e, {
    ...r,
    configurable: !0,
    set(t) {
      const i = this[e];
      if ((r?.set?.call(this, t), 'function' == typeof o)) o.call(this, i, t);
      else {
        const r = o || `_${e}Changed`;
        this.hasUpdated ? this[r]?.(i, t) : this[dt].cache(e, r, i, t);
      }
    },
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const ht = (t, e) =>
    'method' === e.kind && e.descriptor && !('value' in e.descriptor)
      ? {
          ...e,
          finisher(o) {
            o.createProperty(e.key, t);
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
          finisher(o) {
            o.createProperty(e.key, t);
          },
        },
  vt = (t, e, o) => {
    e.constructor.createProperty(o, t);
  };
function pt(t) {
  return (e, o) => (void 0 !== o ? vt(t, e, o) : ht(t, e));
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
}
const ut = (t) => (e) =>
    'function' == typeof e
      ? ((t, e) => (customElements.define(t, e), e))(t, e)
      : ((t, e) => {
          const {kind: o, elements: r} = e;
          return {
            kind: o,
            elements: r,
            finisher(e) {
              customElements.define(t, e);
            },
          };
        })(t, e),
  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ mt = window,
  gt =
    mt.ShadowRoot &&
    (void 0 === mt.ShadyCSS || mt.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype,
  bt = Symbol(),
  xt = new WeakMap();
class yt {
  constructor(t, e, o) {
    if (((this._$cssResult$ = !0), o !== bt))
      throw Error(
        'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.'
      );
    (this.cssText = t), (this.t = e);
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (gt && void 0 === t) {
      const o = void 0 !== e && 1 === e.length;
      o && (t = xt.get(e)),
        void 0 === t &&
          ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
          o && xt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
}
const _t = (t, ...e) => {
    const o =
      1 === t.length
        ? t[0]
        : e.reduce(
            (e, o, r) =>
              e +
              ((t) => {
                if (!0 === t._$cssResult$) return t.cssText;
                if ('number' == typeof t) return t;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    t +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(o) +
              t[r + 1],
            t[0]
          );
    return new yt(o, t, bt);
  },
  wt = gt
    ? (t) => t
    : (t) =>
        t instanceof CSSStyleSheet
          ? ((t) => {
              let e = '';
              for (const o of t.cssRules) e += o.cssText;
              return ((t) =>
                new yt('string' == typeof t ? t : t + '', void 0, bt))(e);
            })(t)
          : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $t;
const zt = window,
  kt = zt.trustedTypes,
  Ct = kt ? kt.emptyScript : '',
  St = zt.reactiveElementPolyfillSupport,
  At = {
    toAttribute(t, e) {
      switch (e) {
        case Boolean:
          t = t ? Ct : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, e) {
      let o = t;
      switch (e) {
        case Boolean:
          o = null !== t;
          break;
        case Number:
          o = null === t ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            o = JSON.parse(t);
          } catch (t) {
            o = null;
          }
      }
      return o;
    },
  },
  Bt = (t, e) => e !== t && (e == e || t == t),
  It = {
    attribute: !0,
    type: String,
    converter: At,
    reflect: !1,
    hasChanged: Bt,
  },
  Tt = 'finalized';
class Mt extends HTMLElement {
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
      this.elementProperties.forEach((e, o) => {
        const r = this._$Ep(o, e);
        void 0 !== r && (this._$Ev.set(r, o), t.push(r));
      }),
      t
    );
  }
  static createProperty(t, e = It) {
    if (
      (e.state && (e.attribute = !1),
      this.finalize(),
      this.elementProperties.set(t, e),
      !e.noAccessor && !this.prototype.hasOwnProperty(t))
    ) {
      const o = 'symbol' == typeof t ? Symbol() : '__' + t,
        r = this.getPropertyDescriptor(t, o, e);
      void 0 !== r && Object.defineProperty(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, o) {
    return {
      get() {
        return this[e];
      },
      set(r) {
        const i = this[t];
        (this[e] = r), this.requestUpdate(t, i, o);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || It;
  }
  static finalize() {
    if (this.hasOwnProperty(Tt)) return !1;
    this[Tt] = !0;
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
      for (const o of e) this.createProperty(o, t[o]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const o = new Set(t.flat(1 / 0).reverse());
      for (const t of o) e.unshift(wt(t));
    } else void 0 !== t && e.push(wt(t));
    return e;
  }
  static _$Ep(t, e) {
    const o = e.attribute;
    return !1 === o
      ? void 0
      : 'string' == typeof o
      ? o
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
    var e, o;
    (null !== (e = this._$ES) && void 0 !== e ? e : (this._$ES = [])).push(t),
      void 0 !== this.renderRoot &&
        this.isConnected &&
        (null === (o = t.hostConnected) || void 0 === o || o.call(t));
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
        gt
          ? (t.adoptedStyleSheets = e.map((t) =>
              t instanceof CSSStyleSheet ? t : t.styleSheet
            ))
          : e.forEach((e) => {
              const o = document.createElement('style'),
                r = mt.litNonce;
              void 0 !== r && o.setAttribute('nonce', r),
                (o.textContent = e.cssText),
                t.appendChild(o);
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
  attributeChangedCallback(t, e, o) {
    this._$AK(t, o);
  }
  _$EO(t, e, o = It) {
    var r;
    const i = this.constructor._$Ep(t, o);
    if (void 0 !== i && !0 === o.reflect) {
      const l = (
        void 0 !==
        (null === (r = o.converter) || void 0 === r ? void 0 : r.toAttribute)
          ? o.converter
          : At
      ).toAttribute(e, o.type);
      (this._$El = t),
        null == l ? this.removeAttribute(i) : this.setAttribute(i, l),
        (this._$El = null);
    }
  }
  _$AK(t, e) {
    var o;
    const r = this.constructor,
      i = r._$Ev.get(t);
    if (void 0 !== i && this._$El !== i) {
      const t = r.getPropertyOptions(i),
        l =
          'function' == typeof t.converter
            ? {fromAttribute: t.converter}
            : void 0 !==
              (null === (o = t.converter) || void 0 === o
                ? void 0
                : o.fromAttribute)
            ? t.converter
            : At;
      (this._$El = i),
        (this[i] = l.fromAttribute(e, t.type)),
        (this._$El = null);
    }
  }
  requestUpdate(t, e, o) {
    let r = !0;
    void 0 !== t &&
      (((o = o || this.constructor.getPropertyOptions(t)).hasChanged || Bt)(
        this[t],
        e
      )
        ? (this._$AL.has(t) || this._$AL.set(t, e),
          !0 === o.reflect &&
            this._$El !== t &&
            (void 0 === this._$EC && (this._$EC = new Map()),
            this._$EC.set(t, o)))
        : (r = !1)),
      !this.isUpdatePending && r && (this._$E_ = this._$Ej());
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
    const o = this._$AL;
    try {
      (e = this.shouldUpdate(o)),
        e
          ? (this.willUpdate(o),
            null === (t = this._$ES) ||
              void 0 === t ||
              t.forEach((t) => {
                var e;
                return null === (e = t.hostUpdate) || void 0 === e
                  ? void 0
                  : e.call(t);
              }),
            this.update(o))
          : this._$Ek();
    } catch (t) {
      throw ((e = !1), this._$Ek(), t);
    }
    e && this._$AE(o);
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
var Et;
(Mt[Tt] = !0),
  (Mt.elementProperties = new Map()),
  (Mt.elementStyles = []),
  (Mt.shadowRootOptions = {mode: 'open'}),
  null == St || St({ReactiveElement: Mt}),
  (null !== ($t = zt.reactiveElementVersions) && void 0 !== $t
    ? $t
    : (zt.reactiveElementVersions = [])
  ).push('1.6.3');
const Ft = window,
  Wt = Ft.trustedTypes,
  Pt = Wt ? Wt.createPolicy('lit-html', {createHTML: (t) => t}) : void 0,
  Rt = '$lit$',
  Lt = `lit$${(Math.random() + '').slice(9)}$`,
  Nt = '?' + Lt,
  Ot = `<${Nt}>`,
  Ut = document,
  jt = () => Ut.createComment(''),
  Dt = (t) => null === t || ('object' != typeof t && 'function' != typeof t),
  Ht = Array.isArray,
  qt = '[ \t\n\f\r]',
  Jt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  Kt = /-->/g,
  Vt = />/g,
  Zt = RegExp(
    `>|${qt}(?:([^\\s"'>=/]+)(${qt}*=${qt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,
    'g'
  ),
  Gt = /'/g,
  Qt = /"/g,
  Xt = /^(?:script|style|textarea|title)$/i,
  Yt = (
    (t) =>
    (e, ...o) => ({_$litType$: t, strings: e, values: o})
  )(1),
  te = Symbol.for('lit-noChange'),
  ee = Symbol.for('lit-nothing'),
  oe = new WeakMap(),
  re = Ut.createTreeWalker(Ut, 129, null, !1);
function ie(t, e) {
  if (!Array.isArray(t) || !t.hasOwnProperty('raw'))
    throw Error('invalid template strings array');
  return void 0 !== Pt ? Pt.createHTML(e) : e;
}
const le = (t, e) => {
  const o = t.length - 1,
    r = [];
  let i,
    l = 2 === e ? '<svg>' : '',
    a = Jt;
  for (let e = 0; e < o; e++) {
    const o = t[e];
    let n,
      s,
      d = -1,
      c = 0;
    for (; c < o.length && ((a.lastIndex = c), (s = a.exec(o)), null !== s); )
      (c = a.lastIndex),
        a === Jt
          ? '!--' === s[1]
            ? (a = Kt)
            : void 0 !== s[1]
            ? (a = Vt)
            : void 0 !== s[2]
            ? (Xt.test(s[2]) && (i = RegExp('</' + s[2], 'g')), (a = Zt))
            : void 0 !== s[3] && (a = Zt)
          : a === Zt
          ? '>' === s[0]
            ? ((a = null != i ? i : Jt), (d = -1))
            : void 0 === s[1]
            ? (d = -2)
            : ((d = a.lastIndex - s[2].length),
              (n = s[1]),
              (a = void 0 === s[3] ? Zt : '"' === s[3] ? Qt : Gt))
          : a === Qt || a === Gt
          ? (a = Zt)
          : a === Kt || a === Vt
          ? (a = Jt)
          : ((a = Zt), (i = void 0));
    const f = a === Zt && t[e + 1].startsWith('/>') ? ' ' : '';
    l +=
      a === Jt
        ? o + Ot
        : d >= 0
        ? (r.push(n), o.slice(0, d) + Rt + o.slice(d) + Lt + f)
        : o + Lt + (-2 === d ? (r.push(void 0), e) : f);
  }
  return [ie(t, l + (t[o] || '<?>') + (2 === e ? '</svg>' : '')), r];
};
class ae {
  constructor({strings: t, _$litType$: e}, o) {
    let r;
    this.parts = [];
    let i = 0,
      l = 0;
    const a = t.length - 1,
      n = this.parts,
      [s, d] = le(t, e);
    if (
      ((this.el = ae.createElement(s, o)),
      (re.currentNode = this.el.content),
      2 === e)
    ) {
      const t = this.el.content,
        e = t.firstChild;
      e.remove(), t.append(...e.childNodes);
    }
    for (; null !== (r = re.nextNode()) && n.length < a; ) {
      if (1 === r.nodeType) {
        if (r.hasAttributes()) {
          const t = [];
          for (const e of r.getAttributeNames())
            if (e.endsWith(Rt) || e.startsWith(Lt)) {
              const o = d[l++];
              if ((t.push(e), void 0 !== o)) {
                const t = r.getAttribute(o.toLowerCase() + Rt).split(Lt),
                  e = /([.?@])?(.*)/.exec(o);
                n.push({
                  type: 1,
                  index: i,
                  name: e[2],
                  strings: t,
                  ctor:
                    '.' === e[1]
                      ? fe
                      : '?' === e[1]
                      ? ve
                      : '@' === e[1]
                      ? pe
                      : ce,
                });
              } else n.push({type: 6, index: i});
            }
          for (const e of t) r.removeAttribute(e);
        }
        if (Xt.test(r.tagName)) {
          const t = r.textContent.split(Lt),
            e = t.length - 1;
          if (e > 0) {
            r.textContent = Wt ? Wt.emptyScript : '';
            for (let o = 0; o < e; o++)
              r.append(t[o], jt()),
                re.nextNode(),
                n.push({type: 2, index: ++i});
            r.append(t[e], jt());
          }
        }
      } else if (8 === r.nodeType)
        if (r.data === Nt) n.push({type: 2, index: i});
        else {
          let t = -1;
          for (; -1 !== (t = r.data.indexOf(Lt, t + 1)); )
            n.push({type: 7, index: i}), (t += Lt.length - 1);
        }
      i++;
    }
  }
  static createElement(t, e) {
    const o = Ut.createElement('template');
    return (o.innerHTML = t), o;
  }
}
function ne(t, e, o = t, r) {
  var i, l, a, n;
  if (e === te) return e;
  let s =
    void 0 !== r
      ? null === (i = o._$Co) || void 0 === i
        ? void 0
        : i[r]
      : o._$Cl;
  const d = Dt(e) ? void 0 : e._$litDirective$;
  return (
    (null == s ? void 0 : s.constructor) !== d &&
      (null === (l = null == s ? void 0 : s._$AO) ||
        void 0 === l ||
        l.call(s, !1),
      void 0 === d ? (s = void 0) : ((s = new d(t)), s._$AT(t, o, r)),
      void 0 !== r
        ? ((null !== (a = (n = o)._$Co) && void 0 !== a ? a : (n._$Co = []))[
            r
          ] = s)
        : (o._$Cl = s)),
    void 0 !== s && (e = ne(t, s._$AS(t, e.values), s, r)),
    e
  );
}
class se {
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
        el: {content: o},
        parts: r,
      } = this._$AD,
      i = (
        null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e
          ? e
          : Ut
      ).importNode(o, !0);
    re.currentNode = i;
    let l = re.nextNode(),
      a = 0,
      n = 0,
      s = r[0];
    for (; void 0 !== s; ) {
      if (a === s.index) {
        let e;
        2 === s.type
          ? (e = new de(l, l.nextSibling, this, t))
          : 1 === s.type
          ? (e = new s.ctor(l, s.name, s.strings, this, t))
          : 6 === s.type && (e = new ue(l, this, t)),
          this._$AV.push(e),
          (s = r[++n]);
      }
      a !== (null == s ? void 0 : s.index) && ((l = re.nextNode()), a++);
    }
    return (re.currentNode = Ut), i;
  }
  v(t) {
    let e = 0;
    for (const o of this._$AV)
      void 0 !== o &&
        (void 0 !== o.strings
          ? (o._$AI(t, o, e), (e += o.strings.length - 2))
          : o._$AI(t[e])),
        e++;
  }
}
class de {
  constructor(t, e, o, r) {
    var i;
    (this.type = 2),
      (this._$AH = ee),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = e),
      (this._$AM = o),
      (this.options = r),
      (this._$Cp =
        null === (i = null == r ? void 0 : r.isConnected) || void 0 === i || i);
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
    (t = ne(this, t, e)),
      Dt(t)
        ? t === ee || null == t || '' === t
          ? (this._$AH !== ee && this._$AR(), (this._$AH = ee))
          : t !== this._$AH && t !== te && this._(t)
        : void 0 !== t._$litType$
        ? this.g(t)
        : void 0 !== t.nodeType
        ? this.$(t)
        : ((t) =>
            Ht(t) ||
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
    this._$AH !== ee && Dt(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.$(Ut.createTextNode(t)),
      (this._$AH = t);
  }
  g(t) {
    var e;
    const {values: o, _$litType$: r} = t,
      i =
        'number' == typeof r
          ? this._$AC(t)
          : (void 0 === r.el &&
              (r.el = ae.createElement(ie(r.h, r.h[0]), this.options)),
            r);
    if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === i)
      this._$AH.v(o);
    else {
      const t = new se(i, this),
        e = t.u(this.options);
      t.v(o), this.$(e), (this._$AH = t);
    }
  }
  _$AC(t) {
    let e = oe.get(t.strings);
    return void 0 === e && oe.set(t.strings, (e = new ae(t))), e;
  }
  T(t) {
    Ht(this._$AH) || ((this._$AH = []), this._$AR());
    const e = this._$AH;
    let o,
      r = 0;
    for (const i of t)
      r === e.length
        ? e.push((o = new de(this.k(jt()), this.k(jt()), this, this.options)))
        : (o = e[r]),
        o._$AI(i),
        r++;
    r < e.length && (this._$AR(o && o._$AB.nextSibling, r), (e.length = r));
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var o;
    for (
      null === (o = this._$AP) || void 0 === o || o.call(this, !1, !0, e);
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
class ce {
  constructor(t, e, o, r, i) {
    (this.type = 1),
      (this._$AH = ee),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = e),
      (this._$AM = r),
      (this.options = i),
      o.length > 2 || '' !== o[0] || '' !== o[1]
        ? ((this._$AH = Array(o.length - 1).fill(new String())),
          (this.strings = o))
        : (this._$AH = ee);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, o, r) {
    const i = this.strings;
    let l = !1;
    if (void 0 === i)
      (t = ne(this, t, e, 0)),
        (l = !Dt(t) || (t !== this._$AH && t !== te)),
        l && (this._$AH = t);
    else {
      const r = t;
      let a, n;
      for (t = i[0], a = 0; a < i.length - 1; a++)
        (n = ne(this, r[o + a], e, a)),
          n === te && (n = this._$AH[a]),
          l || (l = !Dt(n) || n !== this._$AH[a]),
          n === ee
            ? (t = ee)
            : t !== ee && (t += (null != n ? n : '') + i[a + 1]),
          (this._$AH[a] = n);
    }
    l && !r && this.j(t);
  }
  j(t) {
    t === ee
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, null != t ? t : '');
  }
}
class fe extends ce {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(t) {
    this.element[this.name] = t === ee ? void 0 : t;
  }
}
const he = Wt ? Wt.emptyScript : '';
class ve extends ce {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(t) {
    t && t !== ee
      ? this.element.setAttribute(this.name, he)
      : this.element.removeAttribute(this.name);
  }
}
class pe extends ce {
  constructor(t, e, o, r, i) {
    super(t, e, o, r, i), (this.type = 5);
  }
  _$AI(t, e = this) {
    var o;
    if ((t = null !== (o = ne(this, t, e, 0)) && void 0 !== o ? o : ee) === te)
      return;
    const r = this._$AH,
      i =
        (t === ee && r !== ee) ||
        t.capture !== r.capture ||
        t.once !== r.once ||
        t.passive !== r.passive,
      l = t !== ee && (r === ee || i);
    i && this.element.removeEventListener(this.name, this, r),
      l && this.element.addEventListener(this.name, this, t),
      (this._$AH = t);
  }
  handleEvent(t) {
    var e, o;
    'function' == typeof this._$AH
      ? this._$AH.call(
          null !==
            (o =
              null === (e = this.options) || void 0 === e ? void 0 : e.host) &&
            void 0 !== o
            ? o
            : this.element,
          t
        )
      : this._$AH.handleEvent(t);
  }
}
class ue {
  constructor(t, e, o) {
    (this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = e),
      (this.options = o);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    ne(this, t);
  }
}
const me = Ft.litHtmlPolyfillSupport;
null == me || me(ae, de),
  (null !== (Et = Ft.litHtmlVersions) && void 0 !== Et
    ? Et
    : (Ft.litHtmlVersions = [])
  ).push('2.8.0');
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ge, be;
class xe extends Mt {
  constructor() {
    super(...arguments),
      (this.renderOptions = {host: this}),
      (this._$Do = void 0);
  }
  createRenderRoot() {
    var t, e;
    const o = super.createRenderRoot();
    return (
      (null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t) ||
        (e.renderBefore = o.firstChild),
      o
    );
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this._$Do = ((t, e, o) => {
        var r, i;
        const l =
          null !== (r = null == o ? void 0 : o.renderBefore) && void 0 !== r
            ? r
            : e;
        let a = l._$litPart$;
        if (void 0 === a) {
          const t =
            null !== (i = null == o ? void 0 : o.renderBefore) && void 0 !== i
              ? i
              : null;
          l._$litPart$ = a = new de(
            e.insertBefore(jt(), t),
            t,
            void 0,
            null != o ? o : {}
          );
        }
        return a._$AI(t), a;
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
    return te;
  }
}
(xe.finalized = !0),
  (xe._$litElement$ = !0),
  null === (ge = globalThis.litElementHydrateSupport) ||
    void 0 === ge ||
    ge.call(globalThis, {LitElement: xe});
const ye = globalThis.litElementPolyfillSupport;
function _e(t) {
  return document.head.querySelector(`meta[name="${t}"]`)?.content;
}
null == ye || ye({LitElement: xe}),
  (null !== (be = globalThis.litElementVersions) && void 0 !== be
    ? be
    : (globalThis.litElementVersions = [])
  ).push('3.3.3');
const we = (function (t) {
  return {
    fromAttribute: (e) => ('string' != typeof e ? null : e.split(',').map(t)),
    toAttribute: (t) => t.join(','),
  };
})((t) => parseInt(t?.trim(), 10));
class $e extends Event {
  constructor(t, e) {
    super(t, {bubbles: !0, composed: !0, ...e});
  }
}
const ze = document.body.hasAttribute('no-auto-reveal');
function ke(t = 'pfe') {
  return `${t}-${Math.random().toString(36).substr(2, 9)}`;
}
var Ce, Se, Ae, Be, Ie, Te, Me, Ee;
window.PfeConfig = Object.assign(window.PfeConfig ?? {}, {
  trackPerformance:
    window.PfeConfig?.trackPerformance ?? 'true' === _e('pf-track-performance'),
  autoReveal:
    window.PfeConfig?.autoReveal ??
    (ze ? !ze : 'true' === _e('pf-auto-reveal')),
  get log() {
    return !!localStorage.pfeLog;
  },
  set log(t) {
    t
      ? localStorage.setItem('pfeLog', 'true')
      : localStorage.removeItem('pfeLog');
  },
});
const Fe = _t`#heading{font-size:100%;padding:0;margin:0}a,button{cursor:pointer}.toggle,.toggle:after,.toggle:before{padding:0;margin:0}.toggle{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;border:0}.toggle:after{content:"";position:absolute;bottom:0;left:0}span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}`;
class We extends $e {
  constructor(t, e, o) {
    super('change'),
      (this.expanded = t),
      (this.toggle = e),
      (this.accordion = o);
  }
}
class Pe extends xe {
  constructor() {
    super(...arguments),
      Ce.add(this),
      (this.expanded = !1),
      Se.set(this, void 0),
      Ae.set(this, new nt(this)),
      Be.set(this, void 0);
  }
  connectedCallback() {
    super.connectedCallback(),
      this.addEventListener('click', k(this, Ce, 'm', Ee)),
      (this.hidden = !0),
      this.id || (this.id = ke(this.localName)),
      k(this, Ce, 'm', Ie).call(this);
  }
  render() {
    switch (this.headingTag) {
      case 'h1':
        return Yt`<h1 id="heading">${k(this, Ce, 'm', Te).call(this)}</h1>`;
      case 'h2':
        return Yt`<h2 id="heading">${k(this, Ce, 'm', Te).call(this)}</h2>`;
      case 'h3':
        return Yt`<h3 id="heading">${k(this, Ce, 'm', Te).call(this)}</h3>`;
      case 'h4':
        return Yt`<h4 id="heading">${k(this, Ce, 'm', Te).call(this)}</h4>`;
      case 'h5':
        return Yt`<h5 id="heading">${k(this, Ce, 'm', Te).call(this)}</h5>`;
      case 'h6':
        return Yt`<h6 id="heading">${k(this, Ce, 'm', Te).call(this)}</h6>`;
      default:
        return k(this, Ce, 'm', Te).call(this);
    }
  }
}
(Se = new WeakMap()),
  (Ae = new WeakMap()),
  (Be = new WeakMap()),
  (Ce = new WeakSet()),
  (Ie = async function () {
    this.headingText && !this.headingTag && (this.headingTag = 'h3'),
      C(this, Be, k(this, Ce, 'm', Me).call(this), 'f'),
      k(this, Be, 'f') !== k(this, Se, 'f') && C(this, Se, void 0, 'f');
    do {
      await this.updateComplete;
    } while (!(await this.updateComplete));
    this.hidden = !1;
  }),
  (Te = function () {
    const t = this.headingText?.trim() ?? k(this, Be, 'f')?.textContent?.trim();
    return Yt`
      <button id="button"
              class="toggle"
              aria-expanded="${String(!!this.expanded)}">
        <span part="text">${
          t ??
          Yt`
          <slot></slot>`
        }
        </span>
        ${this.renderAfterButton?.()}
      </button>
    `;
  }),
  (Me = function () {
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
              k(this, Ae, 'f').warn(
                'Heading currently only supports 1 tag; extra tags will be ignored.'
              ),
            t)
          : void k(this, Ae, 'f').warn('No heading information was provided.');
      }
      return (
        k(this, Se, 'f') ||
          k(this, Ae, 'f').warn(
            'Header should contain at least 1 heading tag for correct semantics.'
          ),
        C(this, Se, document.createElement('h3'), 'f'),
        this.firstChild?.nodeType === Node.TEXT_NODE
          ? (k(this, Se, 'f').textContent = this.firstChild.textContent)
          : (k(this, Se, 'f').textContent = this.textContent),
        k(this, Se, 'f')
      );
    }
    k(this, Ae, 'f').warn('No header content provided');
  }),
  (Ee = function (t) {
    const e = !this.expanded,
      o = t.composedPath().find(mo.isAccordion);
    o && this.dispatchEvent(new We(e, this, o));
  }),
  (Pe.styles = [Fe]),
  (Pe.shadowRootOptions = {...xe.shadowRootOptions, delegatesFocus: !0}),
  s([pt({type: Boolean, reflect: !0})], Pe.prototype, 'expanded', void 0),
  s(
    [pt({reflect: !0, attribute: 'heading-text'})],
    Pe.prototype,
    'headingText',
    void 0
  ),
  s(
    [pt({reflect: !0, attribute: 'heading-tag'})],
    Pe.prototype,
    'headingTag',
    void 0
  );
const Re = _t`:host{display:none;overflow:hidden;will-change:height}:host([expanded]){display:block;position:relative}:host(.animating){display:block;transition:height .3s ease-in-out}:host([fixed]){overflow-y:auto}.body{position:relative;overflow:hidden}.body:after{content:"";position:absolute;top:0;bottom:0;left:0}`;
class Le extends xe {
  constructor() {
    super(...arguments), (this.expanded = !1);
  }
  connectedCallback() {
    super.connectedCallback(),
      this.id || (this.id = ke(this.localName)),
      this.setAttribute('role', 'region');
  }
  render() {
    return Yt`
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
(Le.styles = [Re]),
  s([pt({type: Boolean, reflect: !0})], Le.prototype, 'expanded', void 0);
const Ne = (t) =>
  !(
    !t ||
    t.hasAttribute('disabled') ||
    t.ariaHidden ||
    t.hasAttribute('hidden')
  );
class Oe {
  #t;
  #e;
  #o = [];
  get #r() {
    return this.#o.filter(Ne);
  }
  get #i() {
    return this.#r && this.activeItem ? this.#r.indexOf(this.activeItem) : -1;
  }
  get #l() {
    return this.activeItem ? this.#o.indexOf(this.activeItem) : -1;
  }
  get activeItem() {
    return this.#t;
  }
  get firstItem() {
    return this.#r[0];
  }
  get lastItem() {
    return this.#r.at(-1);
  }
  get nextItem() {
    return this.#i >= this.#r.length - 1
      ? this.firstItem
      : this.#r[this.#i + 1];
  }
  get prevItem() {
    return this.#i > 0 ? this.#r[this.#i - 1] : this.lastItem;
  }
  constructor(t) {
    (this.host = t), this.host.addController(this);
  }
  #a = (t) => {
    if (
      t.ctrlKey ||
      t.altKey ||
      t.metaKey ||
      !this.#r.length ||
      !t.composedPath().some((t) => this.#r.includes(t))
    )
      return;
    const e = this.activeItem;
    let o = !1;
    const r =
      !!e &&
      ('SELECT' === e.tagName || 'spinbutton' === e.getAttribute('role'));
    switch (t.key) {
      case 'ArrowLeft':
        this.focusOnItem(this.prevItem), (o = !0);
        break;
      case 'ArrowRight':
        this.focusOnItem(this.nextItem), (o = !0);
        break;
      case 'ArrowUp':
        if (r) return;
        this.focusOnItem(this.prevItem), (o = !0);
        break;
      case 'ArrowDown':
        if (r) return;
        this.focusOnItem(this.nextItem), (o = !0);
        break;
      case 'Home':
        this.focusOnItem(this.firstItem), (o = !0);
        break;
      case 'PageUp':
        if (r) return;
        this.focusOnItem(this.firstItem), (o = !0);
        break;
      case 'End':
        this.focusOnItem(this.lastItem), (o = !0);
        break;
      case 'PageDown':
        if (r) return;
        this.focusOnItem(this.lastItem), (o = !0);
    }
    o && (t.stopPropagation(), t.preventDefault());
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
    const e = [...t.slice(this.#l), ...t.slice(0, this.#l)].find((t) =>
      this.#r.includes(t)
    );
    this.focusOnItem(e || this.firstItem);
  }
  initItems(t, e = this.host) {
    this.#o = t ?? [];
    const o = this.#r,
      [r] = o;
    this.#t = r;
    for (const t of o) t.tabIndex = this.#t === t ? 0 : -1;
    (this.#e && e === this.#e) ||
      (this.#e?.removeEventListener('keydown', this.#a),
      (this.#e = e),
      this.hostConnected());
  }
  hostConnected() {
    this.#e?.addEventListener('keydown', this.#a);
  }
  hostDisconnected() {
    this.#e?.removeEventListener('keydown', this.#a);
  }
}
var Ue,
  je,
  De,
  He,
  qe,
  Je,
  Ke,
  Ve,
  Ze,
  Ge,
  Qe,
  Xe,
  Ye,
  to,
  eo,
  oo,
  ro,
  io,
  lo,
  ao,
  no,
  so,
  co,
  fo;
const ho = _t`:host{transition-property:box-shadow,border;transition-timing-function:ease-out;transition-duration:1ms}`,
  vo = /^[0-9.]+(?<unit>[a-zA-Z]+)/g;
class po extends $e {
  constructor(t, e) {
    super('expand'), (this.toggle = t), (this.panel = e);
  }
}
class uo extends $e {
  constructor(t, e) {
    super('collapse'), (this.toggle = t), (this.panel = e);
  }
}
class mo extends xe {
  constructor() {
    super(...arguments),
      Ue.add(this),
      He.set(this, new Oe(this)),
      qe.set(this, []),
      (this.expandedSets = new Set()),
      Ke.set(this, new nt(this)),
      Ve.set(this, getComputedStyle(this)),
      Ze.set(this, k(this, Ue, 'm', lo).call(this)),
      Ge.set(this, !1),
      Qe.set(this, new MutationObserver(() => k(this, Ue, 'm', Xe).call(this)));
  }
  static isAccordion(t) {
    return t instanceof mo;
  }
  static isHeader(t) {
    return t instanceof Pe;
  }
  static isPanel(t) {
    return t instanceof Le;
  }
  get expandedIndex() {
    return k(this, qe, 'f');
  }
  set expandedIndex(t) {
    const e = k(this, qe, 'f');
    C(this, qe, t, 'f'),
      JSON.stringify(e) !== JSON.stringify(t) &&
        (this.requestUpdate('expandedIndex', e),
        this.collapseAll().then(async () => {
          for (const t of this.expandedIndex) await this.expand(t, this);
        }));
  }
  get headers() {
    return k(this, Ue, 'm', so).call(this);
  }
  get panels() {
    return k(this, Ue, 'm', co).call(this);
  }
  async getUpdateComplete() {
    const t = await super.getUpdateComplete(),
      e = await Promise.all([
        ...k(this, Ue, 'm', so)
          .call(this)
          .map((t) => t.updateComplete),
        ...k(this, Ue, 'm', co)
          .call(this)
          .map((t) => t.updateComplete),
      ]);
    return t && e.every(Boolean);
  }
  connectedCallback() {
    super.connectedCallback(),
      this.addEventListener('change', k(this, Ue, 'm', no)),
      k(this, Qe, 'f').observe(this, {childList: !0}),
      k(this, Ue, 'm', Xe).call(this);
  }
  render() {
    return Yt`
      <slot></slot>
    `;
  }
  async firstUpdated() {
    const {headers: t} = this;
    t.forEach((t, e) => {
      if (t.expanded) {
        k(this, Ue, 'm', eo).call(this, t, e);
        const o = k(this, Ue, 'm', to).call(this, t);
        o && k(this, Ue, 'm', oo).call(this, o);
      }
    });
  }
  updateAccessibility() {
    const {headers: t} = this;
    t.forEach((t) => {
      const e = k(this, Ue, 'm', to).call(this, t);
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
    const o = k(this, Ue, 'm', so).call(this, e)[t];
    if (!o) return;
    const r = k(this, Ue, 'm', to).call(this, o);
    r &&
      (k(this, Ue, 'm', eo).call(this, o, t),
      k(this, Ue, 'm', oo).call(this, r),
      o.focus(),
      this.dispatchEvent(new po(o, r)),
      await this.updateComplete);
  }
  async expandAll() {
    this.headers.forEach((t) => k(this, Ue, 'm', eo).call(this, t)),
      this.panels.forEach((t) => k(this, Ue, 'm', oo).call(this, t)),
      await this.updateComplete;
  }
  async collapse(t) {
    const e = this.headers.at(t),
      o = this.panels.at(t);
    e &&
      o &&
      (k(this, Ue, 'm', ro).call(this, e),
      k(this, Ue, 'm', io).call(this, o),
      this.dispatchEvent(new uo(e, o)),
      await this.updateComplete);
  }
  async collapseAll() {
    this.headers.forEach((t) => k(this, Ue, 'm', ro).call(this, t)),
      this.panels.forEach((t) => k(this, Ue, 'm', io).call(this, t)),
      await this.updateComplete;
  }
}
(je = mo),
  (He = new WeakMap()),
  (qe = new WeakMap()),
  (Ke = new WeakMap()),
  (Ve = new WeakMap()),
  (Ze = new WeakMap()),
  (Ge = new WeakMap()),
  (Qe = new WeakMap()),
  (Ue = new WeakSet()),
  (De = function (t) {
    return t instanceof We;
  }),
  (Je = function () {
    const {headers: t} = this,
      e = t.findIndex((t) => t.matches(':focus,:focus-within'));
    return e > -1 ? t.at(e) : void 0;
  }),
  (Xe = async function () {
    C(this, Ge, k(this, Ge, 'f') || !!(await this.updateComplete), 'f'),
      k(this, He, 'f').initItems(this.headers),
      this.addEventListener('focusin', k(this, Ue, 'm', Ye)),
      this.updateAccessibility();
  }),
  (Ye = function (t) {
    k(this, Ue, 'a', Je) &&
      k(this, He, 'f').updateActiveItem(k(this, Ue, 'a', Je));
  }),
  (to = function (t) {
    const e = t.nextElementSibling;
    return mo.isPanel(e)
      ? e
      : void k(this, Ke, 'f').error(
          'Sibling element to a header needs to be a panel'
        );
  }),
  (eo = function (t, e = k(this, Ue, 'm', fo).call(this, t)) {
    this.expandedSets.add(e),
      C(this, qe, [...this.expandedSets], 'f'),
      (t.expanded = !0);
  }),
  (oo = async function (t) {
    (t.expanded = !0), (t.hidden = !1), await t.updateComplete;
    const e = t.getBoundingClientRect();
    k(this, Ue, 'm', ao).call(this, t, 0, e.height);
  }),
  (ro = async function (t, e = k(this, Ue, 'm', fo).call(this, t)) {
    this.expandedSets || (await this.updateComplete),
      this.expandedSets.delete(e),
      (t.expanded = !1),
      await t.updateComplete;
  }),
  (io = async function (t) {
    if ((await t.updateComplete, !t.expanded)) return;
    const e = t.getBoundingClientRect();
    (t.expanded = !1),
      (t.hidden = !0),
      k(this, Ue, 'm', ao).call(this, t, e.height, 0),
      await t.updateComplete;
  }),
  (lo = function () {
    if ('computedStyleMap' in this)
      return this.computedStyleMap().get('transition-duration')?.to('ms').value;
    {
      const {transitionDuration: t} = k(this, Ve, 'f'),
        e = vo.exec(t)?.groups;
      if (!e) return 0;
      const o = parseFloat(t);
      return 's' === e.unit ? 1e3 * o : o;
    }
  }),
  (ao = async function (t, e, o) {
    if (t) {
      const r = t.previousElementSibling,
        i = k(this, Ue, 'm', lo).call(this);
      i && C(this, Ze, i, 'f');
      const l = k(this, Ze, 'f') ?? 0;
      r?.classList.add('animating'), t.classList.add('animating');
      const a = t.animate({height: [`${e}px`, `${o}px`]}, {duration: l});
      a.play(),
        await a.finished,
        r?.classList.remove('animating'),
        t.classList.remove('animating'),
        t.style.removeProperty('height'),
        (t.hidden = !t.expanded);
    }
  }),
  (no = function (t) {
    if (
      k(mo, je, 'm', De).call(mo, t) &&
      !this.classList.contains('animating')
    ) {
      const e = k(this, Ue, 'm', fo).call(this, t.target);
      t.expanded ? this.expand(e, t.accordion) : this.collapse(e);
    }
  }),
  (so = function (t = this) {
    return Array.from(t.children).filter(mo.isHeader);
  }),
  (co = function (t = this) {
    return Array.from(t.children).filter(mo.isPanel);
  }),
  (fo = function (t) {
    return mo.isHeader(t)
      ? this.headers.findIndex((e) => e.id === t.id)
      : mo.isPanel(t)
      ? this.panels.findIndex((e) => e.id === t.id)
      : (k(this, Ke, 'f').warn(
          'The #getIndex method expects to receive a header or panel element.'
        ),
        -1);
  }),
  (mo.styles = [ho]),
  s(
    [pt({attribute: 'expanded-index', converter: we})],
    mo.prototype,
    'expandedIndex',
    null
  );
class go {
  static {
    this.anonymous = Symbol('anonymous slot');
  }
  #n = new Map();
  #s;
  #d = !1;
  #c = new MutationObserver((t) => this.#f(t));
  #h;
  #v = {};
  constructor(t, ...e) {
    if (
      ((this.host = t),
      (this.#s = new nt(this.host)),
      (function (t) {
        return 1 === t.length && 'object' == typeof t[0] && null !== t[0];
      })(e))
    ) {
      const [{slots: t, deprecations: o}] = e;
      (this.#h = t), (this.#v = o ?? {});
    } else e.length >= 1 ? ((this.#h = e), (this.#v = {})) : (this.#h = [null]);
    t.addController(this);
  }
  async hostConnected() {
    this.host.addEventListener('slotchange', this.#p),
      (this.#d = !1),
      this.#c.observe(this.host, {childList: !0}),
      this.#n.clear(),
      this.#h.forEach(this.#u),
      Object.values(this.#v).forEach(this.#u),
      this.host.requestUpdate(),
      await this.host.updateComplete,
      this.host.requestUpdate();
  }
  hostUpdated() {
    this.#d || (this.#h.forEach(this.#u), (this.#d = !0));
  }
  hostDisconnected() {
    this.#c.disconnect();
  }
  hasSlotted(...t) {
    return t.length
      ? t.some((t) => this.#n.get(t)?.hasContent ?? !1)
      : (this.#s.warn(
          'Please provide at least one slot name for which to search.'
        ),
        !1);
  }
  getSlotted(...t) {
    return t.length
      ? t.flatMap((t) => this.#n.get(t)?.elements ?? [])
      : this.#n.get(go.anonymous)?.elements ?? [];
  }
  #p = (t) => {
    const e = t.target.name;
    this.#u(e), this.host.requestUpdate();
  };
  #f = async (t) => {
    const e = [];
    for (const {addedNodes: o, removedNodes: r} of t)
      for (const t of [...o, ...r])
        t instanceof HTMLElement && t.slot && (this.#u(t.slot), e.push(t.slot));
    this.host.requestUpdate();
  };
  #m(t) {
    return Array.from(this.host.children).filter(
      (
        (t) => (e) =>
          t === go.anonymous
            ? !e.hasAttribute('slot')
            : e.getAttribute('slot') === t
      )(t)
    );
  }
  #u = (t) => {
    const e = t || go.anonymous,
      o = this.#n.get(e)?.slot?.assignedElements?.() ?? this.#m(e),
      r = t ? `slot[name="${t}"]` : 'slot:not([name])',
      i = this.host.shadowRoot?.querySelector?.(r) ?? null,
      l = !!o.length;
    this.#n.set(e, {elements: o, name: t ?? '', hasContent: l, slot: i}),
      this.#s.log(t, l);
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var bo, xo, yo, _o, wo, $o, zo;
const ko = _t`:host{position:relative;display:inline-block;line-height:0;height:fit-content!important;width:fit-content!important}#container{display:grid;grid-template:1fr/1fr;place-content:center}#container.content ::slotted(*){display:none}svg{fill:currentcolor}`,
  Co = window.requestIdleCallback ?? window.requestAnimationFrame;
class So extends ErrorEvent {
  constructor(t, e) {
    super('error', {message: `Could not load icon at ${t}`}),
      (this.originalError = e);
  }
}
class Ao extends xe {
  constructor() {
    super(...arguments),
      bo.add(this),
      (this.set = k(this, bo, 'a', wo).defaultIconSet),
      (this.icon = ''),
      (this.loading = 'lazy'),
      yo.set(this, !1),
      _o.set(this, new nt(this));
  }
  static addIconSet(t, e) {
    if ('function' != typeof e)
      nt.warn(
        `[${this.name}.addIconSet(setName, getter)]: getter must be a function`
      );
    else {
      this.getters.set(t, e);
      for (const t of this.instances) t.load();
    }
  }
  connectedCallback() {
    super.connectedCallback(), k(this, bo, 'a', wo).instances.add(this);
  }
  willUpdate(t) {
    t.has('icon') && k(this, bo, 'm', zo).call(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), k(this, bo, 'a', wo).instances.delete(this);
  }
  render() {
    const t = this.content ?? '';
    return Yt`
      <div id="container" aria-hidden="true">${t}<span part="fallback" ?hidden=${!!t}>
          <slot></slot>
        </span>
      </div>
    `;
  }
  async load() {
    const {set: t, icon: e} = this,
      o =
        k(this, bo, 'a', wo).getters.get(t) ?? k(this, bo, 'a', wo).getIconUrl;
    let r = 'UNKNOWN ICON';
    if (t && e)
      try {
        const i = o(t, e);
        r = i instanceof URL ? i.pathname : i;
        const l = await import(r);
        (this.content =
          l.default instanceof Node ? l.default.cloneNode(!0) : l.default),
          await this.updateComplete,
          this.dispatchEvent(new Event('load', {bubbles: !0}));
      } catch (t) {
        const e = new So(r, t);
        k(this, _o, 'f').error(t.message), this.dispatchEvent(e);
      }
  }
}
(xo = Ao),
  (yo = new WeakMap()),
  (_o = new WeakMap()),
  (bo = new WeakSet()),
  (wo = function () {
    return this.constructor;
  }),
  ($o = function () {
    k(this, bo, 'a', wo).io.observe(this), k(this, yo, 'f') && this.load();
  }),
  (zo = function () {
    switch (this.loading) {
      case 'idle':
        return void Co(() => this.load());
      case 'lazy':
        return void k(this, bo, 'm', $o).call(this);
      case 'eager':
        return void this.load();
    }
  }),
  (Ao.styles = [ko]),
  (Ao.getIconUrl = (t, e) => new URL(`./icons/${t}/${e}.js`, import.meta.url)),
  (Ao.onIntersect = (t) =>
    t.forEach(({isIntersecting: t, target: e}) => {
      const o = e;
      C(o, yo, t, 'f'),
        Co(() => {
          k(o, yo, 'f') && o.load();
        });
    })),
  (Ao.io = new IntersectionObserver(xo.onIntersect)),
  (Ao.getters = new Map()),
  (Ao.instances = new Set()),
  s([pt()], Ao.prototype, 'set', void 0),
  s([pt({reflect: !0})], Ao.prototype, 'icon', void 0),
  s([pt()], Ao.prototype, 'loading', void 0),
  s(
    [
      (function (t) {
        return pt({...t, state: !0});
      })(),
    ],
    Ao.prototype,
    'content',
    void 0
  );
const Bo = _t`:host([size=sm]) #container{--_size:var(--pf-global--icon--FontSize--sm, 10px)}:host([size=md]) #container{--_size:var(--pf-global--icon--FontSize--md, 18px)}:host([size=lg]) #container{--_size:var(--pf-global--icon--FontSize--lg, 24px)}:host([size=xl]) #container{--_size:var(--pf-global--icon--FontSize--xl, 54px)}#container,svg{width:var(--pf-icon--size,var(--_size));height:var(--pf-icon--size,var(--_size));min-width:var(--pf-icon--size,var(--_size));min-height:var(--pf-icon--size,var(--_size))}`;
let Io = class extends Ao {
  constructor() {
    super(...arguments), (this.size = 'sm');
  }
};
var To;
(Io.styles = [...Ao.styles, Bo]),
  (Io.defaultIconSet = 'fas'),
  s([pt({reflect: !0})], Io.prototype, 'size', void 0),
  (Io = s([ut('pf-icon')], Io));
const Mo = _t`:host{--pf-icon--size:var(--pf-c-accordion__toggle--IconSize, 10px);color:var(--pf-c-accordion__toggle--Color,var(--pf-global--Color--100,#151515));background-color:var(--pf-global--BackgroundColor--100,#fff)}:host([large]){--pf-c-accordion__toggle--PaddingTop:var(--pf-global--spacer--md, 1rem);--pf-c-accordion__toggle--PaddingRight:var(--pf-global--spacer--md, 1rem);--pf-c-accordion__toggle--PaddingBottom:var(--pf-global--spacer--md, 1rem);--pf-c-accordion__toggle--PaddingLeft:var(--pf-global--spacer--lg, 1.5rem);--pf-c-accordion__toggle--FontFamily:var(--pf-global--FontFamily--redhat-updated--heading--sans-serif,\n      "RedHatDisplayUpdated",\n      "Overpass",\n      overpass,\n      helvetica,\n      arial,\n      sans-serif\n    );--pf-c-accordion__toggle--FontSize:var(--pf-global--FontSize--xl, 1.25rem);--pf-c-accordion__toggle--hover-text--Color:var(--pf-global--Color--100, #151515);--pf-c-accordion__toggle--active-text--Color:var(--pf-global--Color--100, #151515);--pf-c-accordion__toggle--active-text--FontWeight:var(--pf-global--FontWeight--normal, 400);--pf-c-accordion__toggle--focus-text--Color:var(--pf-global--Color--100, #151515);--pf-c-accordion__toggle--focus-text--FontWeight:var(--pf-global--FontWeight--normal, 400);--pf-c-accordion__toggle--expanded-text--Color:var(--pf-global--Color--100, #151515);--pf-c-accordion__toggle--expanded-text--FontWeight:var(--pf-global--FontWeight--normal, 400);--pf-icon--size:var(--pf-c-accordion__toggle--IconSize, 12px)}#heading{font-weight:var(--pf-c-accordion__toggle--FontWeight,var(--pf-global--FontWeight--normal,400))}.toggle,.toggle:after,.toggle:before{background-color:var(--pf-c-accordion__toggle--BackgroundColor,transparent)}.icon{transition:var(--pf-c-accordion__toggle-icon--Transition, .2s ease-in 0s)}.toggle{padding:var(--pf-c-accordion__toggle--PaddingTop,var(--pf-global--spacer--md,.5rem)) var(--pf-c-accordion__toggle--PaddingRight,var(--pf-global--spacer--md,1rem)) var(--pf-c-accordion__toggle--PaddingBottom,var(--pf-global--spacer--sm,.5rem)) var(--pf-c-accordion__toggle--PaddingLeft,var(--pf-global--spacer--md,1rem));font-family:var(--pf-c-accordion__toggle--FontFamily,\n      var(--pf-global--FontFamily--redhat-updated--heading--sans-serif,\n        "RedHatTextUpdated",\n        helvetica,\n        arial,\n        sans-serif));font-size:var(--pf-c-accordion__toggle--FontSize, var(--pf-global--FontSize--lg, 1rem));font-weight:var(--pf-c-accordion__toggle--FontWeight,var(--pf-global--FontWeight--normal,400));color:var(--pf-c-accordion__toggle--Color,var(--pf-global--Color--100,#151515))}.toggle[aria-expanded=true]{--pf-c-accordion__toggle--after--BackgroundColor:var(\n      --pf-c-accordion__toggle--expanded--before--BackgroundColor,\n      var(\n        --pf-global--primary-color--100,\n        #0066cc\n      )\n    )}.toggle:after{top:var(--pf-c-accordion__toggle--before--Top,-1px);width:var(--pf-c-accordion__toggle--before--Width,var(--pf-global--BorderWidth--lg,3px));background-color:var(--pf-c-accordion__toggle--after--BackgroundColor,transparent)}span{max-width:var(--pf-c-accordion__toggle-text--MaxWidth,calc(100% - var(--pf-global--spacer--lg,1.5rem)))}.toggle[aria-expanded=true] .icon{rotate:var(--pf-c-accordion__toggle--expanded-icon--Rotate,90deg)}.toggle:active,.toggle:focus,.toggle:hover{background-color:var(--pf-c-accordion__toggle--active--BackgroundColor,var(--pf-global--BackgroundColor--200,#f0f0f0))}.toggle:active span,.toggle:focus span,.toggle:hover span{color:var(--pf-c-accordion__toggle--active-text--Color,var(--pf-global--link--Color,#06c))}.toggle:active span,.toggle:focus span{font-weight:var(--pf-c-accordion__toggle--active-text--FontWeight,var(--pf-global--FontWeight--semi-bold,700))}`;
let Eo = class extends Pe {
  constructor() {
    super(...arguments), To.set(this, new go(this, 'accents', null));
  }
  renderAfterButton() {
    return Yt`${
      k(this, To, 'f').hasSlotted('accents')
        ? Yt`
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
(To = new WeakMap()),
  (Eo.styles = [...Pe.styles, Mo]),
  s([pt({reflect: !0})], Eo.prototype, 'bordered', void 0),
  s([pt({reflect: !0})], Eo.prototype, 'icon', void 0),
  s(
    [pt({reflect: !0, attribute: 'icon-set'})],
    Eo.prototype,
    'iconSet',
    void 0
  ),
  (Eo = s([ut('pf-accordion-header')], Eo));
const Fo = _t`:host{color:var(--pf-global--Color--100,#151515);background-color:var(--pf-c-accordion--BackgroundColor,var(--pf-global--BackgroundColor--light-100,#fff))}.body{padding:var(--pf-c-accordion__panel-body--PaddingTop,var(--pf-global--spacer--sm,.5rem)) var(--pf-c-accordion__panel-body--PaddingRight,var(--pf-global--spacer--md,1rem)) var(--pf-c-accordion__panel-body--PaddingBottom,var(--pf-global--spacer--sm,.5rem)) var(--pf-c-accordion__panel-body--PaddingLeft,var(--pf-global--spacer--md,1rem))}.body:after{width:var(--pf-c-accordion__panel-body--before--Width,var(--pf-global--BorderWidth--lg,3px));background-color:var(--pf-c-accordion__panel-body--before--BackgroundColor,transparent)}:host([large]){--pf-c-accordion__panel-body--PaddingTop:var(--pf-c-accordion--m-display-lg__expanded-content-body--PaddingTop, 0);--pf-c-accordion__panel-body--PaddingRight:var(--pf-c-accordion--m-display-lg__expanded-content-body--PaddingRight, 1rem);--pf-c-accordion__panel-body--PaddingBottom:var(--pf-c-accordion--m-display-lg__expanded-content-body--PaddingBottom, 1.5rem);--pf-c-accordion__panel-body--PaddingLeft:var(--pf-c-accordion--m-display-lg__expanded-content-body--PaddingLeft, 1.5rem);--pf-c-accordion__panel--FontSize:var(--pf-c-accordion--m-display-lg__expanded-content--FontSize, 1rem);--pf-c-accordion__panel--Color:var(--pf-c-accordion--m-display-lg__expanded-content--Color, #151515)}:host([large]) .body:last-child{--pf-c-accordion__panel-body--PaddingBottom:var(--pf-c-accordion--m-display-lg__expanded-content-body--last-child--PaddingBottom, 1.5rem)}.content{color:var(--pf-c-accordion__panel--Color,var(--pf-global--Color--dark-200,#6a6e73));font-size:var(--pf-c-accordion__panel--FontSize, var(--pf-global--FontSize--sm, .875rem))}:host([fixed]){max-height:var(--pf-c-accordion__panel--m-fixed--MaxHeight,9.375rem)}.content[expanded],:host([expanded]) .content{--pf-c-accordion__panel-body--before--BackgroundColor:var(\n      --pf-c-accordion__panel--content-body--before--BackgroundColor,\n      var(--pf-global--primary-color--100, #0066cc))}`;
let Wo = class extends Le {};
(Wo.styles = [...Le.styles, Fo]),
  s([pt({reflect: !0})], Wo.prototype, 'bordered', void 0),
  (Wo = s([ut('pf-accordion-panel')], Wo));
const Po = _t`:host{--accordion__bordered--Color:var(--rh-color-black-300, #d2d2d2);color:var(--pf-global--Color--100,#151515);background-color:var(--pf-global--BackgroundColor--100,#fff)}:host([bordered]) ::slotted(pf-accordion-header:first-child),:host([large]) ::slotted(pf-accordion-header:first-child){display:block;border-top:1px solid var(--accordion__bordered--Color);border-bottom:1px solid var(--accordion__bordered--Color)}:host([bordered]) ::slotted(pf-accordion-header:not(:first-child)),:host([large]) ::slotted(pf-accordion-header:not(:first-child)){display:block;border-bottom:1px solid var(--accordion__bordered--Color)}:host([bordered]) ::slotted(pf-accordion-header:is([expanded])),:host([large]) ::slotted(pf-accordion-header:is([expanded])){display:block;border-bottom:0}:host([bordered]) ::slotted(pf-accordion-panel:is([expanded])),:host([large]) ::slotted(pf-accordion-panel:is([expanded])){display:block;border-bottom:1px solid var(--accordion__bordered--Color)}`;
let Ro = class extends mo {
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
        o = e.filter((t) => t.hasAttribute('expanded')).pop();
      o && (t = e.indexOf(o));
    }
    await super.firstUpdated(),
      null !== t &&
        this.headers.forEach((e, o) => {
          this.headers.at(o)?.toggleAttribute('expanded', o === t),
            this.panels.at(o)?.toggleAttribute('expanded', o === t);
        });
  }
  async expand(t, e) {
    if (-1 === t) return;
    const o = this.headers;
    this.single &&
      (await Promise.all([...o.map((t, e) => t.expanded && this.collapse(e))])),
      await super.expand(t, e);
  }
};
(Ro.styles = [...mo.styles, Po]),
  s([pt({reflect: !0, type: Boolean})], Ro.prototype, 'single', void 0),
  s([pt({type: Boolean, reflect: !0})], Ro.prototype, 'bordered', void 0),
  s(
    [
      (function (...t) {
        if (1 === t.length) {
          const [e] = t;
          return function (t, o) {
            t.constructor.addInitializer((t) => new ct(t)), ft(t, o, e);
          };
        }
        {
          const [e, o] = t;
          e.constructor.addInitializer((t) => new ct(t)), ft(e, o);
        }
      })(function () {
        [...this.headers, ...this.panels].forEach((t) =>
          t.toggleAttribute('large', this.large)
        );
      }),
      pt({type: Boolean, reflect: !0}),
    ],
    Ro.prototype,
    'large',
    void 0
  ),
  s([pt({type: Boolean, reflect: !0})], Ro.prototype, 'fixed', void 0),
  (Ro = s([ut('pf-accordion')], Ro));
