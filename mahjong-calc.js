/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@material/web/textfield/outlined-text-field.js';
import '@patternfly/elements/pf-accordion/pf-accordion.js';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MahjongCalc = class MahjongCalc extends LitElement {
    render() {
        return html `
      <h1>点数計算</h1>
      <pf-accordion>
        <pf-accordion-header>
          <h2>設定</h2>
        </pf-accordion-header>
        <pf-accordion-panel>
          <div>
            <md-outlined-text-field
              id="initialPoint"
              class="width-25"
              label="初期点"
              value="25000"
              type="number"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="oka"
              class="width-25"
              label="オカ"
              value="30000"
              type="number"
              required
            ></md-outlined-text-field>
          </div>
          <div>
            <md-outlined-text-field
              id="first"
              class="width-25"
              label="1着"
              value="50"
              type="number"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="second"
              class="width-25"
              label="2着"
              value="10"
              type="number"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="third"
              class="width-25"
              label="3着"
              value="-10"
              type="number"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="fourth"
              class="width-25"
              label="4着"
              value="-30"
              type="number"
              required
            ></md-outlined-text-field>
          </div>
        </pf-accordion-panel>
      </pf-accordion>
    `;
    }
};
MahjongCalc.styles = [
    css `
        .width-25 {
          width: calc(25% - 4px);
          margin-bottom: 1em;
        }
      `,
];
MahjongCalc = __decorate([
    customElement('mahjong-calc')
], MahjongCalc);
export { MahjongCalc };
//# sourceMappingURL=mahjong-calc.js.map