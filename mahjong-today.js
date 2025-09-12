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
        ${map(this.distinctDates, (date) => {
            return html `<md-select-option value="${date}"
            >${date}</md-select-option
          > `;
        })}
      </md-outlined-select>

      <h2>ゲームごとのポイント</h2>
      <table>
        ${(() => {
            let prevMembers = '';
            return this.todaysResultsList.map((game) => {
                const members = game.results.map((r) => r.player).join(',');
                const showHeader = members !== prevMembers;
                prevMembers = members;
                return html `
              ${showHeader ? html `<thead><tr>${game.results.map((result) => html `<th>${result.player}</th>`)}</tr></thead>` : ''}
              <tbody>
                <tr>
                  ${game.results.map((result) => html `
                    <td class="rank-${result.rank}">
                      ${Math.round(result.point * 10) / 10}(${result.rank})
                    </td>
                  `)}
                </tr>
              </tbody>
            `;
            });
        })()}
      </table>

      <h2>合計</h2>
      <div class="table-box">
        <table>
          <thead>
            <tr>
              ${map(Array.from(this.playerPoints.entries()), ([player, _point]) => {
            return html ` <th>${player}</th> `;
        })}
            </tr>
          </thead>
          <tbody>
            <tr>
              ${map(Array.from(this.playerPoints.entries()), ([_player, point]) => {
            return html ` <td>${Math.round(point * 10) / 10}</td> `;
        })}
            </tr>
          </tbody>
        </table>
      </div>

      <h2>役満</h2>
      ${this.todaysYakuman.length === 0 ? html `<p>なし</p>` : ''}
      <table>
        ${map(this.todaysYakuman, (yakumanArray) => {
            return html `
            <thead>
              <tr>
                ${yakumanArray.map((yakuman) => {
                return html ` <th>${yakuman.player}</th> `;
            })}
              </tr>
            </thead>
            <tbody>
              <tr>
                ${yakumanArray.map((yakuman) => {
                return html ` <td>${yakuman.yakuman}</td> `;
            })}
              </tr>
            </tbody>
          `;
        })}
      </table>

      <h2>チョンボ</h2>
      ${this.todaysChonbo.length === 0 ? html `<p>なし</p>` : ''}
      <table>
        <thead>
          <tr>
            ${(() => {
            // 全チョンボを合算
            const chonboMap = new Map();
            this.todaysChonbo.flat().forEach((chonbo) => {
                chonboMap.set(chonbo.player, (chonboMap.get(chonbo.player) || 0) + chonbo.point);
            });
            return Array.from(chonboMap.keys()).map(player => html `<th>${player}</th>`);
        })()}
          </tr>
        </thead>
        <tbody>
          <tr>
            ${(() => {
            const chonboMap = new Map();
            this.todaysChonbo.flat().forEach((chonbo) => {
                chonboMap.set(chonbo.player, (chonboMap.get(chonbo.player) || 0) + chonbo.point);
            });
            return Array.from(chonboMap.values()).map(point => html `<td>${point}</td>`);
        })()}
          </tr>
        </tbody>
      </table>
    `;
    }
    constructor() {
        super();
        this.distinctDates = [];
        this.todaysResultsList = [];
        this.playerPoints = new Map();
        this.todaysChonbo = [];
        this.todaysYakuman = [];
        this.startup();
    }
    async startup() {
        await this._loadData();
        // 初期は日付を最新年月日にする
        const currentYear = new Date().getFullYear().toString();
        const defaultDate = this.distinctDates[0] === currentYear ? this.distinctDates[1] : this.distinctDates[0];
        this._date.selectedIndex = this.distinctDates.indexOf(defaultDate);
        this._date.displayText = defaultDate;
    }
    async _changeGame() {
        // gameTypeを変えた場合は日付をリセットする
        this._date.value = '';
        await this._loadData();
        const currentYear = new Date().getFullYear().toString();
        const defaultDate = this.distinctDates[0] === currentYear ? this.distinctDates[1] : this.distinctDates[0];
        this._date.selectedIndex = this.distinctDates.indexOf(defaultDate);
        this._date.displayText = defaultDate;
        await this._loadData();
    }
    _changeDate() {
        this._loadData();
    }
    async _loadData() {
        this.todaysResultsList = [];
        this.todaysChonbo = [];
        this.todaysYakuman = [];
        const querySnapshot = await getDocs(collection(db, 'results'));
        const docs = querySnapshot.docs;
        const gameType = this._gameType.value || '四麻';
        this._setDistinctDates(docs, gameType);
        const currentYear = new Date().getFullYear().toString();
        // デフォルトは最新年月日（distinctDates[1]が存在すればそれを使う）
        const defaultDate = this.distinctDates[0] === currentYear ? this.distinctDates[1] : this.distinctDates[0];
        const targetDate = this._date.value || defaultDate;
        this._date.value = targetDate;
        this._date.selectedIndex = this.distinctDates.indexOf(targetDate);
        this._date.displayText = targetDate;
        // docs.sort((a, b) => {
        //   return a.data().gameInfo.order < b.data().gameInfo.order ? -1 : 1;
        // });
        // 表示用に、日付と順序キーで昇順ソート
        docs.sort((a, b) => {
            const dateA = a.data().gameInfo.date;
            const dateB = b.data().gameInfo.date;
            if (dateA !== dateB) {
                return dateA < dateB ? -1 : 1;
            }
            // 日付が同じ場合はorderで昇順
            return a.data().gameInfo.order - b.data().gameInfo.order;
        });
        const playerPoints = new Map();
        docs.forEach((doc) => {
            // ゲームタイプが一致しない場合はスキップ
            if (doc.data().gameInfo.gameType !== gameType) {
                return;
            }
            // 「現在年」選択時はその年の全データを対象に
            if ((targetDate !== currentYear && doc.data().gameInfo.date !== targetDate) ||
                (targetDate === currentYear && !doc.data().gameInfo.date.startsWith(currentYear))) {
                return;
            }
            const results = doc.data().results.sort((a, b) => {
                return a.player < b.player ? -1 : 1;
            });
            // 配列に格納
            this.todaysResultsList.push({
                date: doc.data().gameInfo.date,
                order: doc.data().gameInfo.order,
                results
            });
            // プレイヤーごとのポイントを計算
            results.forEach((result) => {
                const point = playerPoints.get(result.player) || 0;
                playerPoints.set(result.player, point + result.point);
            });
            // チョンボ
            const chonbo = doc.data().chonbo?.sort((a, b) => {
                return a.player < b.player ? -1 : 1;
            });
            if (chonbo?.length > 0) {
                this.todaysChonbo.push(chonbo);
            }
            // 役満
            const yakuman = doc.data().yakuman?.sort((a, b) => {
                return a.player < b.player ? -1 : 1;
            });
            if (yakuman?.length > 0) {
                this.todaysYakuman.push(yakuman);
            }
        });
        // プレイヤーごとのポイントをポイント順にソートして保存
        this.playerPoints = new Map(Array.from(playerPoints).sort((a, b) => {
            return a[1] < b[1] ? 1 : -1;
        }));
    }
    _setDistinctDates(docs, gameType) {
        this.distinctDates = [];
        const dates = docs.map((doc) => {
            if (doc.data().gameInfo.gameType !== gameType) {
                return '';
            }
            return doc.data().gameInfo.date;
        });
        const distinctDates = [...new Set(dates)].filter((d) => d);
        distinctDates.sort((a, b) => (a < b ? 1 : -1));
        // 現在年を先頭に追加
        const currentYear = new Date().getFullYear().toString();
        this.distinctDates = [currentYear, ...distinctDates];
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

      .table-box {
        overflow-x: auto;
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

      table th {
        background-color: #eee;
      }

      table th,
      table td {
        text-align: center;
        padding: 0.5em 0;
        min-width: 4em;
      }
    `,
];
__decorate([
    property({ type: Array })
], MahjongToday.prototype, "distinctDates", void 0);
__decorate([
    property({ type: Array })
], MahjongToday.prototype, "todaysResultsList", void 0);
__decorate([
    property({ attribute: false })
], MahjongToday.prototype, "playerPoints", void 0);
__decorate([
    property({ type: Array })
], MahjongToday.prototype, "todaysChonbo", void 0);
__decorate([
    property({ type: Array })
], MahjongToday.prototype, "todaysYakuman", void 0);
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