import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@material/web/button/filled-tonal-button.js'
import '@patternfly/elements/pf-accordion/pf-accordion.js';


@customElement('mahjong-calc')
export class MahjongCalc extends LitElement {
    static override styles = [
      css`
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

  override render() {
    return html`
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

  private _changeGame() {
    const game = this.shadowRoot?.getElementById('gameType') as HTMLSelectElement;
    if (game.value === '三麻') {
      this._changeSettings('35000', '40000', '15', '0', '-15', '0', true);
    } else {
      this._changeSettings('25000', '30000', '50', '10', '-10', '-30', false);
    }
    this._resetResults();
  }

  private _changeSettings(initialPoint: string, oka: string, firstUma: string, secondUma: string, thirdUma: string, fourthUma: string, existsFourth: boolean) {
    const initialPointElement = this.shadowRoot?.getElementById('initialPoint') as HTMLInputElement;
    initialPointElement.value = initialPoint;
    const okaElement = this.shadowRoot?.getElementById('oka') as HTMLInputElement;
    okaElement.value = oka;
    const firstUmaElement = this.shadowRoot?.getElementById('firstUma') as HTMLInputElement;
    firstUmaElement.value = firstUma;
    const secondUmaElement = this.shadowRoot?.getElementById('secondUma') as HTMLInputElement;
    secondUmaElement.value = secondUma;
    const thirdUmaElement = this.shadowRoot?.getElementById('thirdUma') as HTMLInputElement;
    thirdUmaElement.value = thirdUma;
    const fourthUmaElement = this.shadowRoot?.getElementById('fourthUma') as HTMLInputElement;
    fourthUmaElement.value = fourthUma;
    fourthUmaElement.disabled = existsFourth;
    const fourthResult = this.shadowRoot?.getElementById('fourthResult') as HTMLInputElement;
    fourthResult.value = '';
    fourthResult.disabled = existsFourth;
  }

  private _resetResults() {
    const firstResult = this.shadowRoot?.getElementById('firstResult') as HTMLInputElement;
    firstResult.value = '';
    const secondResult = this.shadowRoot?.getElementById('secondResult') as HTMLInputElement;
    secondResult.value = '';
    const thirdResult = this.shadowRoot?.getElementById('thirdResult') as HTMLInputElement;
    thirdResult.value = '';
    const fourthResult = this.shadowRoot?.getElementById('fourthResult') as HTMLInputElement;
    fourthResult.value = '';

    const firstScore = this.shadowRoot?.getElementById('firstScore') as HTMLInputElement;
    firstScore.value = '';
    const secondScore = this.shadowRoot?.getElementById('secondScore') as HTMLInputElement;
    secondScore.value = '';
    const thirdScore = this.shadowRoot?.getElementById('thirdScore') as HTMLInputElement;
    thirdScore.value = '';
    const fourthScore = this.shadowRoot?.getElementById('fourthScore') as HTMLInputElement;
    fourthScore.value = '';
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'mahjong-calc': MahjongCalc;
  }
}
