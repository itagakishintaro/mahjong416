var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { query, property } from 'lit/decorators.js';
import { customElement } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/progress/circular-progress.js';
import '@patternfly/elements/pf-accordion/pf-accordion.js';
import { db } from './firestore';
import { collection, getDocs } from 'firebase/firestore/lite';
let MahjongToday = class MahjongToday extends LitElement {
    render() {
        return html `
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
        <md-select-option selected value="${new Date().toISOString().split('T')[0]}">${new Date().toISOString().split('T')[0]}</md-select-option>
        ${map(this.distinctDates, (date) => {
            const today = new Date().toISOString().split('T')[0];
            if (date === today) {
                return '';
            }
            return html `<md-select-option
            value="${date}"
            >${date}</md-select-option>
          `;
        })}
      </md-outlined-select>

      <h2>ゲームごとのポイント</h2>
      <table>
        <thead>
          <tr>
            ${map(this.todaysResults[0], (result) => {
            return html ` <th>${result.player}</th> `;
        })}
          </tr>
        </thead>
        <tbody>
          ${map(this.todaysResults, (resultArray) => {
            return html `<tr>
              ${resultArray.map((result) => {
                return html `
                  <td class="rank-${result.rank}">
                    ${Math.round(result.point * 10) / 10}(${result.rank})
                  </td>
                `;
            })}
            </tr>`;
        })}
        </tbody>
      </table>

      <h2>合計</h2>
      <table>
        <thead>
          <tr>
          ${map(Array.from(this.playerPoints.entries()), ([player, _point]) => {
            return html `
              <th>${player}</th>
          `;
        })}
          </tr>
        </thead>
        <tbody>
          <tr>
        ${map(Array.from(this.playerPoints.entries()), ([_player, point]) => {
            return html `
              <td>${Math.round(point * 10) / 10}</td>
          `;
        })}
          </tr>
        </tbody>
      </table>
    `;
    }
    constructor() {
        super();
        this.distinctDates = [];
        this.todaysResults = [];
        this.playerPoints = new Map();
        this._loadData();
    }
    _changeGame() {
        this._loadData();
    }
    _changeDate() {
        this._loadData();
    }
    async _loadData() {
        const querySnapshot = await getDocs(collection(db, 'results'));
        const docs = querySnapshot.docs;
        this.todaysResults = [];
        const gameType = this._gameType.value || '四麻';
        const targetDate = this._date.value || new Date().toISOString().split('T')[0];
        docs.sort((a, b) => {
            return a.data().gameInfo.order < b.data().gameInfo.order ? -1 : 1;
        });
        docs.forEach((doc) => {
            // ゲームタイプと日付が一致するデータのみを抽出
            if (doc.data().gameInfo.gameType !== gameType ||
                doc.data().gameInfo.date !== targetDate) {
                return;
            }
            const results = doc.data().results.sort((a, b) => {
                return a.player < b.player ? -1 : 1;
            });
            this.todaysResults.push(results);
        });
        console.log(this.todaysResults);
        // this.todaysResultsのplayerごとのpointの合計を計算する
        const playerPoints = new Map();
        this.todaysResults.forEach((results) => {
            results.forEach((result) => {
                const point = playerPoints.get(result.player) || 0;
                playerPoints.set(result.player, point + result.point);
            });
        });
        this.playerPoints = playerPoints;
        console.log(playerPoints);
        this._setDistinctDates(docs);
    }
    _setDistinctDates(docs) {
        const dates = docs.map((doc) => doc.data().gameInfo.date);
        const distinctDates = [...new Set(dates)];
        this.distinctDates = distinctDates.sort((a, b) => {
            return a < b ? 1 : -1;
        });
    }
};
MahjongToday.styles = [
    css `
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
        padding: 1em 0;
      }
    `,
];
__decorate([
    property({ type: Array })
], MahjongToday.prototype, "distinctDates", void 0);
__decorate([
    property({ type: Array })
], MahjongToday.prototype, "todaysResults", void 0);
__decorate([
    property({ attribute: false })
], MahjongToday.prototype, "playerPoints", void 0);
__decorate([
    query('#gameType')
], MahjongToday.prototype, "_gameType", void 0);
__decorate([
    query('#date')
], MahjongToday.prototype, "_date", void 0);
MahjongToday = __decorate([
    customElement('mahjong-today')
], MahjongToday);
export { MahjongToday };
//# sourceMappingURL=mahjong-today.js.map