/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import '@material/web/textfield/outlined-text-field.js';
import '@patternfly/elements/pf-accordion/pf-accordion.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('mahjong-calc')
export class MahjongCalc extends LitElement {
    static override styles = [
      css`
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

  override render() {
    return html`
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

  private _calcFirstScore() {
    const oka = this.shadowRoot?.getElementById('oka') as HTMLInputElement;
    const firstUma = this.shadowRoot?.getElementById('firstUma') as HTMLInputElement;
    const firstResult = this.shadowRoot?.getElementById('firstResult') as HTMLInputElement;
    const score = (Number(firstResult?.value) - Number(oka?.value))/1000 + Number(firstUma?.value);
    const firstScore = this.shadowRoot?.getElementById('firstScore') as HTMLInputElement;
    firstScore.value = String(score);
  }

  private _calcSecondScore() {
    const oka = this.shadowRoot?.getElementById('oka') as HTMLInputElement;
    const secondUma = this.shadowRoot?.getElementById('secondUma') as HTMLInputElement;
    const secondResult = this.shadowRoot?.getElementById('secondResult') as HTMLInputElement;
    const score = (Number(secondResult?.value) - Number(oka?.value))/1000 + Number(secondUma?.value);
    const secondScore = this.shadowRoot?.getElementById('secondScore') as HTMLInputElement;
    secondScore.value = String(score);
  }

  private _calcThirdScore() {
    const oka = this.shadowRoot?.getElementById('oka') as HTMLInputElement;
    const thirdUma = this.shadowRoot?.getElementById('thirdUma') as HTMLInputElement;
    const thirdResult = this.shadowRoot?.getElementById('thirdResult') as HTMLInputElement;
    const score = (Number(thirdResult?.value) - Number(oka?.value))/1000 + Number(thirdUma?.value);
    const thirdScore = this.shadowRoot?.getElementById('thirdScore') as HTMLInputElement;
    thirdScore.value = String(score);
  }

  private _calcFourthScore() {
    const oka = this.shadowRoot?.getElementById('oka') as HTMLInputElement;
    const fourthUma = this.shadowRoot?.getElementById('fourthUma') as HTMLInputElement;
    const fourthResult = this.shadowRoot?.getElementById('fourthResult') as HTMLInputElement;
    const score = (Number(fourthResult?.value) - Number(oka?.value))/1000 + Number(fourthUma?.value);
    const fourthScore = this.shadowRoot?.getElementById('fourthScore') as HTMLInputElement;
    fourthScore.value = String(score);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'mahjong-calc': MahjongCalc;
  }
}
