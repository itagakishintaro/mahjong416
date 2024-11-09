var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { query } from 'lit/decorators.js';
import { customElement } from 'lit/decorators.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/progress/circular-progress.js';
import '@patternfly/elements/pf-accordion/pf-accordion.js';
import { db } from './firestore';
import { collection, addDoc } from 'firebase/firestore/lite';
let MahjongCalc = class MahjongCalc extends LitElement {
    render() {
        return html `
      <h1>点数計算</h1>

      <md-outlined-select required id="gameType" @change="${this._changeGame}">
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
        <div>
          <md-outlined-text-field
            id="firstPlayer"
            label="1位"
            class="width-30"
            type="text"
          >
          </md-outlined-text-field>
          <md-outlined-text-field
            id="firstScore"
            label="得点"
            class="width-30"
            type="number"
            @blur="${this._calcFirstPoint}"
          >
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field
            id="firstPoint"
            label="ポイント"
            class="width-30"
            type="number"
            disabled
          >
          </md-outlined-text-field>
        </div>
        <div>
          <md-outlined-text-field
            id="secondPlayer"
            label="2位"
            class="width-30"
            type="text"
          >
          </md-outlined-text-field>
          <md-outlined-text-field
            id="secondScore"
            label="得点"
            class="width-30"
            type="number"
            @blur="${this._calcSecondPoint}"
          >
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field
            id="secondPoint"
            label="ポイント"
            class="width-30"
            type="number"
            disabled
          >
          </md-outlined-text-field>
        </div>
        <div>
          <md-outlined-text-field
            id="thirdPlayer"
            label="3位"
            class="width-30"
            type="text"
          >
          </md-outlined-text-field>
          <md-outlined-text-field
            id="thirdScore"
            label="得点"
            class="width-30"
            type="number"
            @blur="${this._calcThirdPoint}"
          >
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field
            id="thirdPoint"
            label="ポイント"
            class="width-30"
            type="number"
            disabled
          >
          </md-outlined-text-field>
        </div>
        <div>
          <md-outlined-text-field
            id="fourthPlayer"
            label="4位"
            class="width-30"
            type="text"
          >
          </md-outlined-text-field>
          <md-outlined-text-field
            id="fourthScore"
            label="得点"
            class="width-30"
            type="number"
            @blur="${this._calcFourthPoint}"
          >
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field
            id="fourthPoint"
            label="ポイント"
            class="width-30"
            type="number"
            disabled
          >
          </md-outlined-text-field>
        </div>

        <pf-accordion>
          <pf-accordion-header>
            <h2>チョンボ</h2>
          </pf-accordion-header>
          <pf-accordion-panel>
            <div>
              <md-outlined-text-field
                id="chonboPlayer1"
                label="プレイヤー"
                class="width-50"
                type="text"
              >
              </md-outlined-text-field>
              <md-outlined-text-field
                id="chonboPoint1"
                label="罰符"
                class="width-30"
                type="number"
                value="-20"
              >
              </md-outlined-text-field>
            </div>
            <div>
              <md-outlined-text-field
                id="chonboPlayer2"
                label="プレイヤー"
                class="width-50"
                type="text"
              >
              </md-outlined-text-field>
              <md-outlined-text-field
                id="chonboPoint2"
                label="罰符"
                class="width-30"
                type="number"
                value="-20"
              >
              </md-outlined-text-field>
            </div>
            <div>
              <md-outlined-text-field
                id="chonboPlayer3"
                label="プレイヤー"
                class="width-50"
                type="text"
              >
              </md-outlined-text-field>
              <md-outlined-text-field
                id="chonboPoint3"
                label="罰符"
                class="width-30"
                type="number"
                value="-20"
              >
              </md-outlined-text-field>
            </div>
            <div>
              <md-outlined-text-field
                id="chonboPlayer4"
                label="プレイヤー"
                class="width-50"
                type="text"
              >
              </md-outlined-text-field>
              <md-outlined-text-field
                id="chonboPoint4"
                label="罰符"
                class="width-30"
                type="number"
                value="-20"
              >
              </md-outlined-text-field>
            </div>
          </pf-accordion-panel>
        </pf-accordion>

        <div class="controle">
          <md-filled-tonal-button @click="${this._resetResults}"
            >リセット</md-filled-tonal-button
          >
          <md-filled-button @click="${this._uploadResults}"
            >登録</md-filled-button
          >
          <md-circular-progress
            indeterminate
            id="progress"
            style="display: none"
          ></md-circular-progress>
        </div>
      </div>
    `;
    }
    _calcFirstPoint() {
        if (this._firstScore.value === '') {
            return;
        }
        this._firstPoint.value = String((Number(this._firstScore.value) - Number(this._oka.value)) / 1000 +
            Number(this._firstUma.value));
    }
    _calcSecondPoint() {
        if (this._secondScore.value === '') {
            return;
        }
        this._secondPoint.value = String((Number(this._secondScore.value) - Number(this._oka.value)) / 1000 +
            Number(this._secondUma.value));
    }
    _calcThirdPoint() {
        if (this._thirdScore.value === '') {
            return;
        }
        this._thirdPoint.value = String((Number(this._thirdScore.value) - Number(this._oka.value)) / 1000 +
            Number(this._thirdUma.value));
    }
    _calcFourthPoint() {
        if (this._fourthScore.value === '') {
            return;
        }
        this._fourthPoint.value = String((Number(this._fourthScore.value) - Number(this._oka.value)) / 1000 +
            Number(this._fourthUma.value));
    }
    _changeGame() {
        if (this._gameType.value === '三麻') {
            this._changeSettings('35000', '40000', '15', '0', '-15', '0', true);
        }
        else {
            this._changeSettings('25000', '30000', '50', '10', '-10', '-30', false);
        }
        this._resetResults();
    }
    _changeSettings(initialPoint, oka, firstUma, secondUma, thirdUma, fourthUma, noFourth) {
        (this.shadowRoot?.getElementById('initialPoint')).value = initialPoint;
        this._oka.value = oka;
        this._firstUma.value = firstUma;
        this._secondUma.value = secondUma;
        this._thirdUma.value = thirdUma;
        this._fourthUma.value = fourthUma;
        if (!noFourth) {
            this._clearFourth();
        }
        this._toggleFourth(noFourth);
    }
    _clearFourth() {
        this._fourthPlayer.value = '';
        this._fourthScore.value = '';
        this._fourthPoint.value = '';
    }
    _toggleFourth(noFourth) {
        this._fourthUma.disabled = noFourth;
        this._fourthPlayer.disabled = noFourth;
        this._fourthScore.disabled = noFourth;
    }
    _resetResults() {
        this._firstPlayer.value = '';
        this._secondPlayer.value = '';
        this._thirdPlayer.value = '';
        this._fourthPlayer.value = '';
        this._firstScore.value = '';
        this._secondScore.value = '';
        this._thirdScore.value = '';
        this._fourthScore.value = '';
        this._firstPoint.value = '';
        this._secondPoint.value = '';
        this._thirdPoint.value = '';
        this._fourthPoint.value = '';
    }
    async _uploadResults() {
        this._progress.style.display = 'block';
        let players;
        let results;
        const chonbo = [];
        if (this._gameType.value === '四麻') {
            players = [
                this._firstPlayer.value,
                this._secondPlayer.value,
                this._thirdPlayer.value,
                this._fourthPlayer.value,
            ].sort();
            results = [
                {
                    rank: 1,
                    player: this._firstPlayer.value,
                    score: Number(this._firstScore.value),
                    point: Number(this._firstPoint.value),
                },
                {
                    rank: 2,
                    player: this._secondPlayer.value,
                    score: Number(this._secondScore.value),
                    point: Number(this._secondPoint.value),
                },
                {
                    rank: 3,
                    player: this._thirdPlayer.value,
                    score: Number(this._thirdScore.value),
                    point: Number(this._thirdPoint.value),
                },
                {
                    rank: 4,
                    player: this._fourthPlayer.value,
                    score: Number(this._fourthScore.value),
                    point: Number(this._fourthPoint.value),
                },
            ];
        }
        else {
            players = [
                this._firstPlayer.value,
                this._secondPlayer.value,
                this._thirdPlayer.value,
            ].sort();
            results = [
                {
                    rank: 1,
                    player: this._firstPlayer.value,
                    score: Number(this._firstScore.value),
                    point: Number(this._firstPoint.value),
                },
                {
                    rank: 2,
                    player: this._secondPlayer.value,
                    score: Number(this._secondScore.value),
                    point: Number(this._secondPoint.value),
                },
                {
                    rank: 3,
                    player: this._thirdPlayer.value,
                    score: Number(this._thirdScore.value),
                    point: Number(this._thirdPoint.value),
                },
            ];
        }
        if (this._chonboPlayer1.value !== '') {
            chonbo.push({
                player: this._chonboPlayer1.value,
                point: Number(this._chonboPoint1.value),
            });
        }
        if (this._chonboPlayer2.value !== '') {
            chonbo.push({
                player: this._chonboPlayer2.value,
                point: Number(this._chonboPoint2.value),
            });
        }
        if (this._chonboPlayer3.value !== '') {
            chonbo.push({
                player: this._chonboPlayer3.value,
                point: Number(this._chonboPoint3.value),
            });
        }
        if (this._chonboPlayer4.value !== '') {
            chonbo.push({
                player: this._chonboPlayer4.value,
                point: Number(this._chonboPoint4.value),
            });
        }
        const data = {
            gameInfo: {
                date: this._date.value,
                order: this._order.value,
                gameType: this._gameType.value,
                players: players,
            },
            results: results,
            chonbo: chonbo,
        };
        try {
            const docRef = await addDoc(collection(db, 'results'), data);
            console.log('Document written with ID: ', docRef.id);
            this.dispatchEvent(new CustomEvent('uploaded', { bubbles: true, composed: true }));
        }
        catch (e) {
            console.error('Error adding document: ', e);
        }
        finally {
            this._progress.style.display = 'none';
        }
    }
};
MahjongCalc.styles = [
    css `
      .width-50 {
        width: calc(50% - 1rem);
        margin-bottom: 0.5em;
      }
      .width-30 {
        width: 30%;
        margin-bottom: 0.5em;
      }
      .results {
        margin-top: 2em;
        margin-left: 1em;
      }
      .controle {
        margin-top: 1em;
      }
      md-outlined-text-field {
        --md-outlined-field-disabled-content-opacity: 1;
      }
    `,
];
__decorate([
    query('#gameType')
], MahjongCalc.prototype, "_gameType", void 0);
__decorate([
    query('#initialPoint')
], MahjongCalc.prototype, "_initialPoint", void 0);
__decorate([
    query('#oka')
], MahjongCalc.prototype, "_oka", void 0);
__decorate([
    query('#firstUma')
], MahjongCalc.prototype, "_firstUma", void 0);
__decorate([
    query('#secondUma')
], MahjongCalc.prototype, "_secondUma", void 0);
__decorate([
    query('#thirdUma')
], MahjongCalc.prototype, "_thirdUma", void 0);
__decorate([
    query('#fourthUma')
], MahjongCalc.prototype, "_fourthUma", void 0);
__decorate([
    query('#date')
], MahjongCalc.prototype, "_date", void 0);
__decorate([
    query('#order')
], MahjongCalc.prototype, "_order", void 0);
__decorate([
    query('#firstPlayer')
], MahjongCalc.prototype, "_firstPlayer", void 0);
__decorate([
    query('#secondPlayer')
], MahjongCalc.prototype, "_secondPlayer", void 0);
__decorate([
    query('#thirdPlayer')
], MahjongCalc.prototype, "_thirdPlayer", void 0);
__decorate([
    query('#fourthPlayer')
], MahjongCalc.prototype, "_fourthPlayer", void 0);
__decorate([
    query('#firstScore')
], MahjongCalc.prototype, "_firstScore", void 0);
__decorate([
    query('#secondScore')
], MahjongCalc.prototype, "_secondScore", void 0);
__decorate([
    query('#thirdScore')
], MahjongCalc.prototype, "_thirdScore", void 0);
__decorate([
    query('#fourthScore')
], MahjongCalc.prototype, "_fourthScore", void 0);
__decorate([
    query('#firstPoint')
], MahjongCalc.prototype, "_firstPoint", void 0);
__decorate([
    query('#secondPoint')
], MahjongCalc.prototype, "_secondPoint", void 0);
__decorate([
    query('#thirdPoint')
], MahjongCalc.prototype, "_thirdPoint", void 0);
__decorate([
    query('#fourthPoint')
], MahjongCalc.prototype, "_fourthPoint", void 0);
__decorate([
    query('#chonboPlayer1')
], MahjongCalc.prototype, "_chonboPlayer1", void 0);
__decorate([
    query('#chonboPoint1')
], MahjongCalc.prototype, "_chonboPoint1", void 0);
__decorate([
    query('#chonboPlayer2')
], MahjongCalc.prototype, "_chonboPlayer2", void 0);
__decorate([
    query('#chonboPoint2')
], MahjongCalc.prototype, "_chonboPoint2", void 0);
__decorate([
    query('#chonboPlayer3')
], MahjongCalc.prototype, "_chonboPlayer3", void 0);
__decorate([
    query('#chonboPoint3')
], MahjongCalc.prototype, "_chonboPoint3", void 0);
__decorate([
    query('#chonboPlayer4')
], MahjongCalc.prototype, "_chonboPlayer4", void 0);
__decorate([
    query('#chonboPoint4')
], MahjongCalc.prototype, "_chonboPoint4", void 0);
__decorate([
    query('#progress')
], MahjongCalc.prototype, "_progress", void 0);
MahjongCalc = __decorate([
    customElement('mahjong-calc')
], MahjongCalc);
export { MahjongCalc };
//# sourceMappingURL=mahjong-calc.js.map