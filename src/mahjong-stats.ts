import {LitElement, html, css} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import {db} from './firestore';
import {collection, getDocs} from 'firebase/firestore/lite';
import {QueryDocumentSnapshot} from 'firebase/firestore/lite';

@customElement('mahjong-stats')
export class MahjongStats extends LitElement {
  @property({type: Array})
  distinctYears: number[] = [];
  @property({type: Array})
  totalPoints: {index: number; player: string; point: number}[] = [];
  @property({type: Array})
  maxPoints: {index: number; player: string; point: number}[] = [];
  @property({type: Array})
  avoidLast: {index: number; player: string; point: number}[] = [];

  static override styles = [
    css`
      md-outlined-select {
        min-width: calc(50% - 1rem);
      }
      table {
        margin-top: 2em;
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
  override render() {
    return html`
      <h1>総合成績</h1>
      <md-outlined-select
        required
        id="gameType"
        class="mdc-select"
        @change="${this._changeGame}"
      >
        <md-select-option selected value="四麻">
          <div slot="headline">四麻</div>
        </md-select-option>
        <md-select-option value="三麻">
          <div slot="headline">三麻</div>
        </md-select-option>
      </md-outlined-select>

      <md-outlined-select
        required
        id="targetYear"
        @change="${this._changeYear}"
      >
        <md-select-option selected>
          ${new Date().getFullYear()}
        </md-select-option>
        ${map(this.distinctYears, (year: number) => {
          const thisYear = new Date().getFullYear();
          if (year === thisYear) {
            return;
          }
          return html`<md-select-option value="${year}"
            >${year}</md-select-option
          >`;
        })}
      </md-outlined-select>
      <h2>総合ポイント</h2>
      <table>
        <tr>
          <th>順位</th>
          <th>プレイヤー</th>
          <th>総合ポイント</th>
        </tr>
        ${map(this.totalPoints, (p) => {
          return html`
            <tr>
              <td>${p.index}</td>
              <td>${p.player}</td>
              <td>${Math.round(p.point * 10) / 10}</td>
            </tr>
          `;
        })}
      </table>
      <h2>最高ポイント</h2>
      <table>
        <tr>
          <th>順位</th>
          <th>プレイヤー</th>
          <th>最高ポイント</th>
        </tr>
        ${map(this.maxPoints, (p) => {
          return html`
            <tr>
              <td>${p.index}</td>
              <td>${p.player}</td>
              <td>${p.point}</td>
            </tr>
          `;
        })}
      </table>
      <h2>ラス回避率</h2>
      <table>
        <tr>
          <th>順位</th>
          <th>プレイヤー</th>
          <th>ラス回避率</th>
        </tr>
        ${map(this.avoidLast, (p) => {
          return html`
            <tr>
              <td>${p.index}</td>
              <td>${p.player}</td>
              <td>${p.point}%</td>
            </tr>
          `;
        })}
      </table>
    `;
  }

  @query('#gameType')
  _gameType!: HTMLSelectElement;
  @query('#targetYear')
  _targetYear!: HTMLSelectElement;

  constructor() {
    super();
    this._loadData();
  }

  private _changeGame() {
    this._loadData();
  }
  private _changeYear() {
    this._loadData();
  }

  private async _loadData() {
    const querySnapshot = await getDocs(collection(db, 'results'));
    const docs = querySnapshot.docs;

    const allResults: Result[] = [];
    const gameType = this._gameType.value || '四麻';
    const targetYear =
      Number(this._targetYear.value) || new Date().getFullYear();
    docs.forEach((doc) => {
      // ゲームタイプと年が一致するデータのみを抽出
      if (
        doc.data().gameInfo.gameType !== gameType ||
        new Date(doc.data().gameInfo.date).getFullYear() !== targetYear
      ) {
        return;
      }
      const results = doc.data().results;
      allResults.push(...results);
    });
    this._setDistinctYears(docs);
    this._setTotalPoint(allResults);
    this._setMaxPoint(allResults);
    this._setAvoidLast(allResults);
  }

  private _setDistinctYears(docs: QueryDocumentSnapshot[]) {
    const years = docs.map((doc) =>
      new Date(doc.data().gameInfo.date).getFullYear()
    );
    const distinctYears = [...new Set(years)];
    this.distinctYears = distinctYears;
  }

  private _setTotalPoint(allResults: Result[]) {
    const playerMap = new Map<string, number>();

    allResults.forEach((result) => {
      const {player, point} = result;
      if (playerMap.has(player)) {
        const currentPoints = playerMap.get(player) || 0;
        // JSでは小数の計算が正確に行われないため、10倍して計算後に10で割る
        const updatedPoints = (currentPoints * 10 + point * 10) / 10;
        playerMap.set(player, updatedPoints);
      } else {
        playerMap.set(player, point);
      }
    });

    const sortedPlayers = Array.from(playerMap.entries()).sort(
      (a, b) => b[1] - a[1]
    );
    this.totalPoints = sortedPlayers.map((v, i) => {
      return {index: i + 1, player: v[0], point: v[1]};
    });
  }

  private _setMaxPoint(allResults: Result[]) {
    const playerMap = new Map<string, number>();

    allResults.forEach((result) => {
      const {player, point} = result;
      if (playerMap.has(player)) {
        const currentPoints = playerMap.get(player) || 0;
        if (point > currentPoints) {
          playerMap.set(player, point);
        }
      } else {
        playerMap.set(player, point);
      }
    });

    const sortedPlayers = Array.from(playerMap.entries()).sort(
      (a, b) => b[1] - a[1]
    );

    this.maxPoints = sortedPlayers.map((v, i) => {
      return {index: i + 1, player: v[0], point: v[1]};
    });
  }

  private _setAvoidLast(allResults: Result[]) {
    const playerMap = new Map<string, {plays: number; last: number}>();
    const last = this._gameType.value === '四麻' ? 4 : 3;

    allResults.forEach((result) => {
      const {player, rank} = result;
      if (playerMap.has(player)) {
        const current = playerMap.get(player) || {plays: 0, last: 0};
        if (rank === last) {
          playerMap.set(player, {
            plays: current.plays + 1,
            last: current.last + 1,
          });
        } else {
          playerMap.set(player, {
            plays: current.plays + 1,
            last: current.last,
          });
        }
      } else {
        if (rank === last) {
          playerMap.set(player, {plays: 1, last: 1});
        } else {
          playerMap.set(player, {plays: 1, last: 0});
        }
      }
    });

    const sortedPlayers = Array.from(playerMap.entries()).sort(
      (a, b) => a[1].last / a[1].plays - b[1].last / b[1].plays
    );

    this.avoidLast = sortedPlayers.map((v, i) => {
      return {
        index: i + 1,
        player: v[0],
        point: Math.round((100 - (v[1].last / v[1].plays) * 100) * 10) / 10,
      };
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mahjong-stats': MahjongStats;
  }
}
