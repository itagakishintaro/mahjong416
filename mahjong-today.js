var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
import {LitElement, html, css} from 'lit';
import {query, property} from 'lit/decorators.js';
import {customElement} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/progress/circular-progress.js';
import '@patternfly/elements/pf-accordion/pf-accordion.js';
import {db} from './firestore';
import {collection, getDocs} from 'firebase/firestore/lite';
let MahjongToday = class MahjongToday extends LitElement {
  render() {
    return html`
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
          return html`<md-select-option value="${date}"
            >${date}</md-select-option
          > `;
        })}
      </md-outlined-select>

      <h2>ゲームごとのポイント</h2>
      <table>
        ${map(this.todaysResults.keys(), (players) => {
          return html`
            <thead>
              <tr>
                ${map(this.todaysResults.get(players)[0], (result) => {
                  return html` <th>${result.player}</th> `;
                })}
              </tr>
            </thead>
            <tbody>
              ${map(this.todaysResults.get(players), (resultArray) => {
                return html`<tr>
                  ${resultArray.map((result) => {
                    return html`
                      <td class="rank-${result.rank}">
                        ${Math.round(result.point * 10) / 10}(${result.rank})
                      </td>
                    `;
                  })}
                </tr>`;
              })}
            </tbody>
          `;
        })}
      </table>

      <h2>合計</h2>
      <div class="table-box">
        <table>
          <thead>
            <tr>
              ${map(
                Array.from(this.playerPoints.entries()),
                ([player, _point]) => {
                  return html` <th>${player}</th> `;
                }
              )}
            </tr>
          </thead>
          <tbody>
            <tr>
              ${map(
                Array.from(this.playerPoints.entries()),
                ([_player, point]) => {
                  return html` <td>${Math.round(point * 10) / 10}</td> `;
                }
              )}
            </tr>
          </tbody>
        </table>
      </div>

      <h2>役満</h2>
      <table>
        ${map(this.todaysYakuman, (yakumanArray) => {
          return html`
            <thead>
              <tr>
                ${yakumanArray.map((yakuman) => {
                  return html` <th>${yakuman.player}</th> `;
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                ${yakumanArray.map((yakuman) => {
                  return html` <td>${yakuman.yakuman}</td> `;
                })}
              </tr>
            </tbody>
          `;
        })}
      </table>

      <h2>チョンボ</h2>
      <table>
        ${map(this.todaysChonbo, (chonboArray) => {
          return html`
            <thead>
              <tr>
                ${chonboArray.map((chonbo) => {
                  return html` <th>${chonbo.player}</th> `;
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                ${chonboArray.map((chonbo) => {
                  return html` <td>${chonbo.point}</td> `;
                })}
              </tr>
            </tbody>
          `;
        })}
      </table>
    `;
  }
  constructor() {
    super();
    this.distinctDates = [];
    this.todaysResults = new Map();
    this.playerPoints = new Map();
    this.todaysChonbo = [];
    this.todaysYakuman = [];
    this.startup();
  }
  async startup() {
    await this._loadData();
    // 初期は日付を最新の日付にする
    this._date.selectedIndex = 0;
    this._date.displayText = this.distinctDates[0];
  }
  async _changeGame() {
    // gameTypeを変えた場合は日付をリセットする
    this._date.value = '';
    await this._loadData();
    this._date.selectedIndex = 0;
    this._date.displayText = this.distinctDates[0];
  }
  _changeDate() {
    this._loadData();
  }
  async _loadData() {
    this.todaysResults = new Map();
    this.todaysChonbo = [];
    this.todaysYakuman = [];
    const querySnapshot = await getDocs(collection(db, 'results'));
    const docs = querySnapshot.docs;
    this._setDistinctDates(docs);
    const gameType = this._gameType.value || '四麻';
    // 日付を選択していない場合は最初の日付を選択する
    const targetDate = this._date.value || this.distinctDates[0];
    this._date.value = targetDate;
    this._date.selectedIndex = this.distinctDates.indexOf(targetDate);
    docs.sort((a, b) => {
      return a.data().gameInfo.order < b.data().gameInfo.order ? -1 : 1;
    });
    const playerPoints = new Map();
    docs.forEach((doc) => {
      // ゲームタイプと日付が一致するデータのみを抽出
      if (
        doc.data().gameInfo.gameType !== gameType ||
        doc.data().gameInfo.date !== targetDate
      ) {
        return;
      }
      const results = doc.data().results.sort((a, b) => {
        return a.player < b.player ? -1 : 1;
      });
      const players = results.map((result) => result.player).join();
      // メンツごとに結果を保存
      if (this.todaysResults.get(players)) {
        this.todaysResults.get(players).push(results);
      } else {
        this.todaysResults.set(players, [results]);
      }
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
      console.log(this.todaysChonbo);
      console.log(this.todaysYakuman);
    });
    // プレイヤーごとのポイントをポイント順にソートして保存
    this.playerPoints = new Map(
      Array.from(playerPoints).sort((a, b) => {
        return a[1] < b[1] ? 1 : -1;
      })
    );
  }
  _setDistinctDates(docs) {
    this.distinctDates = [];
    const dates = docs.map((doc) => {
      if (doc.data().gameInfo.gameType !== this._gameType.value) {
        return '';
      }
      return doc.data().gameInfo.date;
    });
    const distinctDates = [...new Set(dates)];
    this.distinctDates = distinctDates.sort((a, b) => {
      return a < b ? 1 : -1;
    });
  }
};
MahjongToday.styles = [
  css`
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
__decorate(
  [property({type: Array})],
  MahjongToday.prototype,
  'distinctDates',
  void 0
);
__decorate(
  [property({type: Object})],
  MahjongToday.prototype,
  'todaysResults',
  void 0
);
__decorate(
  [property({attribute: false})],
  MahjongToday.prototype,
  'playerPoints',
  void 0
);
__decorate(
  [property({type: Array})],
  MahjongToday.prototype,
  'todaysChonbo',
  void 0
);
__decorate(
  [property({type: Array})],
  MahjongToday.prototype,
  'todaysYakuman',
  void 0
);
__decorate([query('#gameType')], MahjongToday.prototype, '_gameType', void 0);
__decorate([query('#date')], MahjongToday.prototype, '_date', void 0);
MahjongToday = __decorate([customElement('mahjong-today')], MahjongToday);
export {MahjongToday};
//# sourceMappingURL=mahjong-today.js.map
