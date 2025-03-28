var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import '@material/web/textfield/filled-text-field.js';
import '@patternfly/elements/pf-accordion/pf-accordion.js';
let MahjongCalcDateAndKey = class MahjongCalcDateAndKey extends LitElement {
  render() {
    return html`
      <pf-accordion>
        <pf-accordion-header>
          <h2>日付、順序キー</h2>
        </pf-accordion-header>
        <pf-accordion-panel>
          <md-filled-text-field
            id="date"
            label="日付"
            class="width-50"
            type="date"
            value="${new Date().toISOString().split('T')[0]}"
          >
          </md-filled-text-field>
          <md-filled-text-field
            id="order"
            label="順序キー"
            class="width-50"
            type="text"
            value="${new Date().getTime()}"
          >
          </md-filled-text-field>
        </pf-accordion-panel>
      </pf-accordion>
    `;
  }
};
MahjongCalcDateAndKey.styles = [
  css`
    .width-50 {
      width: calc(50% - 1rem);
      margin-bottom: 0.5em;
    }
  `,
];
MahjongCalcDateAndKey = __decorate(
  [customElement('mahjong-calc-date-and-key')],
  MahjongCalcDateAndKey
);
export {MahjongCalcDateAndKey};
//# sourceMappingURL=mahjong-calc-date-and-key.js.map
