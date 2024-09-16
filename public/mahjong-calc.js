import {i as t, e, t as i, h as d, k as l} from './select-option-2c22287d.js';
import './pf-accordion-cc13577d.js';
import './filled-button-a7dde759.js';
import {a as s, c as o, d as r} from './firestore-724ae668.js';
var a = function (t, e, i, d) {
  for (
    var l,
      s = arguments.length,
      o =
        s < 3
          ? e
          : null === d
          ? (d = Object.getOwnPropertyDescriptor(e, i))
          : d,
      r = t.length - 1;
    r >= 0;
    r--
  )
    (l = t[r]) && (o = (s < 3 ? l(o) : s > 3 ? l(e, i, o) : l(e, i)) || o);
  return s > 3 && o && Object.defineProperty(e, i, o), o;
};
let n = class extends d {
  render() {
    return l`
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
    `;
  }
  _calcFirstPoint() {
    '' !== this._firstScore.value &&
      (this._firstPoint.value = String(
        (Number(this._firstScore.value) - Number(this._oka.value)) / 1e3 +
          Number(this._firstUma.value)
      ));
  }
  _calcSecondPoint() {
    '' !== this._secondScore.value &&
      (this._secondPoint.value = String(
        (Number(this._secondScore.value) - Number(this._oka.value)) / 1e3 +
          Number(this._secondUma.value)
      ));
  }
  _calcThirdPoint() {
    '' !== this._thirdScore.value &&
      (this._thirdPoint.value = String(
        (Number(this._thirdScore.value) - Number(this._oka.value)) / 1e3 +
          Number(this._thirdUma.value)
      ));
  }
  _calcFourthPoint() {
    '' !== this._fourthScore.value &&
      (this._fourthPoint.value = String(
        (Number(this._fourthScore.value) - Number(this._oka.value)) / 1e3 +
          Number(this._fourthUma.value)
      ));
  }
  _changeGame() {
    '三麻' === this._gameType.value
      ? this._changeSettings('35000', '40000', '15', '0', '-15', '0', !0)
      : this._changeSettings('25000', '30000', '50', '10', '-10', '-30', !1),
      this._resetResults();
  }
  _changeSettings(t, e, i, d, l, s, o) {
    ((this.shadowRoot?.getElementById('initialPoint')).value = t),
      (this._oka.value = e),
      (this._firstUma.value = i),
      (this._secondUma.value = d),
      (this._thirdUma.value = l),
      (this._fourthUma.value = s),
      o || this._clearFourth(),
      this._toggleFourth(o);
  }
  _clearFourth() {
    (this._fourthPlayer.value = ''),
      (this._fourthScore.value = ''),
      (this._fourthPoint.value = '');
  }
  _toggleFourth(t) {
    (this._fourthUma.disabled = t),
      (this._fourthPlayer.disabled = t),
      (this._fourthScore.disabled = t);
  }
  _resetResults() {
    (this._firstPlayer.value = ''),
      (this._secondPlayer.value = ''),
      (this._thirdPlayer.value = ''),
      (this._fourthPlayer.value = ''),
      (this._firstScore.value = ''),
      (this._secondScore.value = ''),
      (this._thirdScore.value = ''),
      (this._fourthScore.value = ''),
      (this._firstPoint.value = ''),
      (this._secondPoint.value = ''),
      (this._thirdPoint.value = ''),
      (this._fourthPoint.value = '');
  }
  async _uploadResults() {
    let t, e;
    (this._progress.style.display = 'block'),
      '四麻' === this._gameType.value
        ? ((t = [
            this._firstPlayer.value,
            this._secondPlayer.value,
            this._thirdPlayer.value,
            this._fourthPlayer.value,
          ].sort()),
          (e = [
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
          ]))
        : ((t = [
            this._firstPlayer.value,
            this._secondPlayer.value,
            this._thirdPlayer.value,
          ].sort()),
          (e = [
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
          ]));
    const i = {
      gameInfo: {
        date: this._date.value,
        order: this._order.value,
        gameType: this._gameType.value,
        players: t,
      },
      results: e,
    };
    try {
      const t = await s(o(r, 'results'), i);
      console.log('Document written with ID: ', t.id);
    } catch (t) {
      console.error('Error adding document: ', t);
    } finally {
      this._progress.style.display = 'none';
    }
  }
};
(n.styles = [
  t`
      .width-50 {
        width: calc(50% - 1rem);
        margin-bottom: 1em;
      }
      .width-30 {
        width: 30%;
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
]),
  a([e('#gameType')], n.prototype, '_gameType', void 0),
  a([e('#initialPoint')], n.prototype, '_initialPoint', void 0),
  a([e('#oka')], n.prototype, '_oka', void 0),
  a([e('#firstUma')], n.prototype, '_firstUma', void 0),
  a([e('#secondUma')], n.prototype, '_secondUma', void 0),
  a([e('#thirdUma')], n.prototype, '_thirdUma', void 0),
  a([e('#fourthUma')], n.prototype, '_fourthUma', void 0),
  a([e('#date')], n.prototype, '_date', void 0),
  a([e('#order')], n.prototype, '_order', void 0),
  a([e('#firstPlayer')], n.prototype, '_firstPlayer', void 0),
  a([e('#secondPlayer')], n.prototype, '_secondPlayer', void 0),
  a([e('#thirdPlayer')], n.prototype, '_thirdPlayer', void 0),
  a([e('#fourthPlayer')], n.prototype, '_fourthPlayer', void 0),
  a([e('#firstScore')], n.prototype, '_firstScore', void 0),
  a([e('#secondScore')], n.prototype, '_secondScore', void 0),
  a([e('#thirdScore')], n.prototype, '_thirdScore', void 0),
  a([e('#fourthScore')], n.prototype, '_fourthScore', void 0),
  a([e('#firstPoint')], n.prototype, '_firstPoint', void 0),
  a([e('#secondPoint')], n.prototype, '_secondPoint', void 0),
  a([e('#thirdPoint')], n.prototype, '_thirdPoint', void 0),
  a([e('#fourthPoint')], n.prototype, '_fourthPoint', void 0),
  a([e('#progress')], n.prototype, '_progress', void 0),
  (n = a([i('mahjong-calc')], n));
export {n as MahjongCalc};
