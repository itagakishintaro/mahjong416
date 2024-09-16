import {
  i as t,
  n as e,
  e as s,
  t as i,
  h as a,
  k as o,
} from './select-option-2c22287d.js';
import {o as d} from './map-7f5238f0.js';
import './pf-accordion-cc13577d.js';
import './filled-button-a7dde759.js';
import {g as r, c as h, d as n} from './firestore-724ae668.js';
var l = function (t, e, s, i) {
  for (
    var a,
      o = arguments.length,
      d =
        o < 3
          ? e
          : null === i
          ? (i = Object.getOwnPropertyDescriptor(e, s))
          : i,
      r = t.length - 1;
    r >= 0;
    r--
  )
    (a = t[r]) && (d = (o < 3 ? a(d) : o > 3 ? a(e, s, d) : a(e, s)) || d);
  return o > 3 && d && Object.defineProperty(e, s, d), d;
};
let c = class extends a {
  render() {
    return o`
      <h1>今日の成績</h1>

      <md-outlined-select required id="gameType" @change="${this._changeGame}">
        <md-select-option selected value="四麻">
          <div slot="headline">四麻</div>
        </md-select-option>
        <md-select-option value="三麻">
          <div slot="headline">三麻</div>
        </md-select-option>
      </md-outlined-select>

      <md-outlined-select required id="date" @change="${this._changeDate}">
        ${d(
          this.distinctDates,
          (t) => o`<md-select-option
            value="${t}"
            >${t}</md-select-option>
          `
        )}
      </md-outlined-select>

      <h2>ゲームごとのポイント</h2>
      <table>
        <thead>
          <tr>
            ${d(this.todaysResults[0], (t) => o` <th>${t.player}</th> `)}
          </tr>
        </thead>
        <tbody>
          ${d(
            this.todaysResults,
            (t) => o`<tr>
              ${t.map(
                (t) => o`
                  <td class="rank-${t.rank}">
                    ${Math.round(10 * t.point) / 10}(${t.rank})
                  </td>
                `
              )}
            </tr>`
          )}
        </tbody>
      </table>

      <h2>合計</h2>
      <table>
        <thead>
          <tr>
          ${d(
            Array.from(this.playerPoints.entries()),
            ([t, e]) => o`
              <th>${t}</th>
          `
          )}
          </tr>
        </thead>
        <tbody>
          <tr>
        ${d(
          Array.from(this.playerPoints.entries()),
          ([t, e]) => o`
              <td>${Math.round(10 * e) / 10}</td>
          `
        )}
          </tr>
        </tbody>
      </table>
    `;
  }
  constructor() {
    super(),
      (this.distinctDates = []),
      (this.todaysResults = []),
      (this.playerPoints = new Map()),
      this.startup();
  }
  async startup() {
    await this._loadData(), (this._date.displayText = this.distinctDates[0]);
  }
  async _changeGame() {
    await this._loadData(!0);
  }
  _changeDate() {
    this._loadData();
  }
  async _loadData(t = !1) {
    this.todaysResults = [];
    const e = (await r(h(n, 'results'))).docs;
    this._setDistinctDates(e);
    const s = this._gameType.value || '四麻',
      i = t ? this.distinctDates[0] : this._date.value || this.distinctDates[0];
    this._date.value || this.distinctDates[0],
      (this._date.value = i),
      (this._date.selectedIndex = this.distinctDates.indexOf(i)),
      t && (this._date.displayText = i),
      e.sort((t, e) =>
        t.data().gameInfo.order < e.data().gameInfo.order ? -1 : 1
      ),
      e.forEach((t) => {
        if (t.data().gameInfo.gameType !== s || t.data().gameInfo.date !== i)
          return;
        const e = t
          .data()
          .results.sort((t, e) => (t.player < e.player ? -1 : 1));
        this.todaysResults.push(e);
      });
    const a = new Map();
    this.todaysResults.forEach((t) => {
      t.forEach((t) => {
        const e = a.get(t.player) || 0;
        a.set(t.player, e + t.point);
      });
    }),
      (this.playerPoints = a);
  }
  _setDistinctDates(t) {
    this.distinctDates = [];
    const e = t.map((t) =>
        t.data().gameInfo.gameType !== this._gameType.value
          ? ''
          : t.data().gameInfo.date
      ),
      s = [...new Set(e)];
    this.distinctDates = s.sort((t, e) => (t < e ? 1 : -1));
  }
};
(c.styles = [
  t`
      md-outlined-select {
        min-width: calc(50% - 1rem);
      }
      .rank-1 {
        font-weight: bold;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
      }

      table tr {
        border-bottom: solid 1px #eee;
        cursor: pointer;
      }

      table tr:hover {
        background-color: #d4f0fd;
      }

      table th,
      table td {
        text-align: center;
        width: 25%;
        padding: .5em 0;
      }
    `,
]),
  l([e({type: Array})], c.prototype, 'distinctDates', void 0),
  l([e({type: Array})], c.prototype, 'todaysResults', void 0),
  l([e({attribute: !1})], c.prototype, 'playerPoints', void 0),
  l([s('#gameType')], c.prototype, '_gameType', void 0),
  l([s('#date')], c.prototype, '_date', void 0),
  (c = l([i('mahjong-today')], c));
export {c as MahjongToday};
