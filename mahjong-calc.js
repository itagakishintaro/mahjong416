var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@material/web/button/filled-tonal-button.js';
import '@patternfly/elements/pf-accordion/pf-accordion.js';
let MahjongCalc = class MahjongCalc extends LitElement {
    render() {
        return html `
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

        <md-filled-tonal-button @click="${this._resetResults}">リセット</md-filled-tonal-button>
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
    _changeGame() {
        const game = this.shadowRoot?.getElementById('gameType');
        if (game.value === '三麻') {
            this._changeSettings('35000', '40000', '15', '0', '-15', '0', true);
        }
        else {
            this._changeSettings('25000', '30000', '50', '10', '-10', '-30', false);
        }
        this._resetResults();
    }
    _changeSettings(initialPoint, oka, firstUma, secondUma, thirdUma, fourthUma, existsFourth) {
        const initialPointElement = this.shadowRoot?.getElementById('initialPoint');
        initialPointElement.value = initialPoint;
        const okaElement = this.shadowRoot?.getElementById('oka');
        okaElement.value = oka;
        const firstUmaElement = this.shadowRoot?.getElementById('firstUma');
        firstUmaElement.value = firstUma;
        const secondUmaElement = this.shadowRoot?.getElementById('secondUma');
        secondUmaElement.value = secondUma;
        const thirdUmaElement = this.shadowRoot?.getElementById('thirdUma');
        thirdUmaElement.value = thirdUma;
        const fourthUmaElement = this.shadowRoot?.getElementById('fourthUma');
        fourthUmaElement.value = fourthUma;
        fourthUmaElement.disabled = existsFourth;
        const fourthResult = this.shadowRoot?.getElementById('fourthResult');
        fourthResult.value = '';
        fourthResult.disabled = existsFourth;
    }
    _resetResults() {
        const firstResult = this.shadowRoot?.getElementById('firstResult');
        firstResult.value = '';
        const secondResult = this.shadowRoot?.getElementById('secondResult');
        secondResult.value = '';
        const thirdResult = this.shadowRoot?.getElementById('thirdResult');
        thirdResult.value = '';
        const fourthResult = this.shadowRoot?.getElementById('fourthResult');
        fourthResult.value = '';
        const firstScore = this.shadowRoot?.getElementById('firstScore');
        firstScore.value = '';
        const secondScore = this.shadowRoot?.getElementById('secondScore');
        secondScore.value = '';
        const thirdScore = this.shadowRoot?.getElementById('thirdScore');
        thirdScore.value = '';
        const fourthScore = this.shadowRoot?.getElementById('fourthScore');
        fourthScore.value = '';
    }
};
MahjongCalc.styles = [
    css `
        .width-50 {
          width: calc(50% - 3em);
          margin-bottom: 1em;
        }
        .results {
          margin-top: 2em;
          margin-left: 1em;
        }
        md-outlined-text-field {
          --md-outlined-field-disabled-content-opacity: 1;
        }
        

      `,
];
MahjongCalc = __decorate([
    customElement('mahjong-calc')
], MahjongCalc);
export { MahjongCalc };
//# sourceMappingURL=mahjong-calc.js.map