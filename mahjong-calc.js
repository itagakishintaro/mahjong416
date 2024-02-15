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
              id="firstUma"
              class="width-25"
              label="1着"
              value="50"
              type="number"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="secondUma"
              class="width-25"
              label="2着"
              value="10"
              type="number"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="thirdUma"
              class="width-25"
              label="3着"
              value="-10"
              type="number"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="fourthUma"
              class="width-25"
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
          <md-outlined-text-field id="firstResult" type="number" @blur="${this._calcFirstScore}">
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field id="firstScore" type="number" disabled>
          </md-outlined-text-field>
        </div>
        <div>
          <label for="secondResult">2位</label>
          <md-outlined-text-field id="secondResult" type="number" @blur="${this._calcSecondScore}">
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field id="secondScore" disabled>
          </md-outlined-text-field>
        </div>
        <div>
          <label for="thirdResult">3位</label>
          <md-outlined-text-field id="thirdResult" type="number" @blur="${this._calcThirdScore}">
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field id="thirdScore" disabled>
          </md-outlined-text-field>
        </div>
        <div>
          <label for="fourthResult">4位</label>
          <md-outlined-text-field id="fourthResult" type="number" @blur="${this._calcFourthScore}">
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field id="fourthScore" disabled>
          </md-outlined-text-field>
        </div>
      </div>
    `;
    }
    _calcFirstScore() {
        const oka = this.shadowRoot?.getElementById('oka');
        const firstUma = this.shadowRoot?.getElementById('firstUma');
        const firstResult = this.shadowRoot?.getElementById('firstResult');
        const score = (Number(firstResult?.value) - Number(oka?.value)) / 1000 + Number(firstUma?.value);
        const firstScore = this.shadowRoot?.getElementById('firstScore');
        firstScore.value = String(score);
    }
    _calcSecondScore() {
        const oka = this.shadowRoot?.getElementById('oka');
        const secondUma = this.shadowRoot?.getElementById('secondUma');
        const secondResult = this.shadowRoot?.getElementById('secondResult');
        const score = (Number(secondResult?.value) - Number(oka?.value)) / 1000 + Number(secondUma?.value);
        const secondScore = this.shadowRoot?.getElementById('secondScore');
        secondScore.value = String(score);
    }
    _calcThirdScore() {
        const oka = this.shadowRoot?.getElementById('oka');
        const thirdUma = this.shadowRoot?.getElementById('thirdUma');
        const thirdResult = this.shadowRoot?.getElementById('thirdResult');
        const score = (Number(thirdResult?.value) - Number(oka?.value)) / 1000 + Number(thirdUma?.value);
        const thirdScore = this.shadowRoot?.getElementById('thirdScore');
        thirdScore.value = String(score);
    }
    _calcFourthScore() {
        const oka = this.shadowRoot?.getElementById('oka');
        const fourthUma = this.shadowRoot?.getElementById('fourthUma');
        const fourthResult = this.shadowRoot?.getElementById('fourthResult');
        const score = (Number(fourthResult?.value) - Number(oka?.value)) / 1000 + Number(fourthUma?.value);
        const fourthScore = this.shadowRoot?.getElementById('fourthScore');
        fourthScore.value = String(score);
    }
};
MahjongCalc.styles = [
    css `
        .width-25 {
          width: calc(25% - 4px);
          margin-bottom: 1em;
        }
        .results {
          margin-top: 2em;
          margin-left: 1em;
        }
      `,
];
MahjongCalc = __decorate([
    customElement('mahjong-calc')
], MahjongCalc);
export { MahjongCalc };
//# sourceMappingURL=mahjong-calc.js.map