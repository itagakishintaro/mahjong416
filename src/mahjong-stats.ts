import {LitElement, html, css} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import {roundTo1, distinct} from './utils';
import {db} from './firestore';
import {collection, getDocs} from 'firebase/firestore/lite';
import {QueryDocumentSnapshot} from 'firebase/firestore/lite';
import './mahjong-versus';

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
  @property({type: Array})
  topRate: {index: number; player: string; point: number}[] = [];
  @property({type: Array})
  yakumanList: {date: string; player: string; yakuman: string}[] = [];

  static override styles = [
    css`
      md-outlined-select {
        min-width: calc(50% - 1rem);
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
        padding: 0.5em 0;
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
              <td>${roundTo1(p.point)}</td>
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
      <h2>トップ率</h2>
      <table>
        <tr>
          <th>順位</th>
          <th>プレイヤー</th>
          <th>トップ率</th>
        </tr>
        ${map(this.topRate, (p) => {
          return html`
            <tr>
              <td>${p.index}</td>
              <td>${p.player}</td>
              <td>${p.point}%</td>
            </tr>
          `;
        })}
      </table>
      <h2>役満</h2>
      <table>
        ${this.yakumanList.length === 0
          ? html`<tr>
              <td>なし</td>
            </tr>`
          : html`
              <tr>
                <th>日付</th>
                <th>プレイヤー</th>
                <th>役満</th>
              </tr>
            `}
        ${map(this.yakumanList, (yakuman) => {
          return html`
            <tr>
              <td>${yakuman.date}</td>
              <td>${yakuman.player}</td>
              <td>${yakuman.yakuman}</td>
            </tr>
          `;
        })}
      </table>
      <mahjong-versus></mahjong-versus>
    `;
  }

  @query('#gameType')
  _gameType!: HTMLSelectElement;
  @query('#targetYear')
  _targetYear!: HTMLSelectElement;
  @query('mahjong-versus')
  _versus!: HTMLElementTagNameMap['mahjong-versus'];

  constructor() {
    super();
    this._loadData();
  }

  private async _changeGame() {
    await this._loadData();
    this._updateVersusData();
  }

  private async _changeYear() {
    await this._loadData();
    this._updateVersusData();
  }

  private _updateVersusData() {
    const gameType = this._gameType.value || '四麻';
    const targetYear =
      Number(this._targetYear.value) || new Date().getFullYear();
    this._versus?.updateData(gameType, targetYear);
  }

  private async _loadData() {
    const querySnapshot = await getDocs(collection(db, 'results'));
    const docs = querySnapshot.docs;

    const allResults: Result[] = [];
    const allChonbo: Chonbo[] = [];
    const allYakuman: YakumanWithDate[] = [];
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
      const chonbo = doc.data().chonbo;
      if (chonbo?.length > 0) {
        allChonbo.push(...chonbo);
      }
      const yakuman = doc.data().yakuman;
      if (yakuman?.length > 0) {
        const yakumanWithDate = yakuman.map((yakuman: Yakuman) => {
          return {...yakuman, date: doc.data().gameInfo.date};
        });
        allYakuman.push(...yakumanWithDate);
      }
    });
    this._setDistinctYears(docs);
    this._setTotalPoint(allResults, allChonbo);
    this._setMaxPoint(allResults);
    this._setAvoidLast(allResults);
    this._setTopRate(allResults);
    this._setYakuman(allYakuman);
  }

  private _setDistinctYears(docs: QueryDocumentSnapshot[]) {
    const years = docs.map((doc) =>
      new Date(doc.data().gameInfo.date).getFullYear()
    );
    // 年の降順でソート
    this.distinctYears = distinct(years).sort((a, b) => b - a);
  }

  private _setTotalPoint(allResults: Result[], allChonbo: Chonbo[]) {
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

    // チョンボのマイナスポイントを適用
    allChonbo.forEach((chonbo) => {
      const {player, point} = chonbo;
      if (playerMap.has(player)) {
        const currentPoints = playerMap.get(player) || 0;
        const updatedPoints = (currentPoints * 10 + point * 10) / 10;
        playerMap.set(player, updatedPoints);
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
          playerMap.set(player, Number(point.toFixed(1)));
        }
      } else {
        playerMap.set(player, Number(point.toFixed(1)));
      }
    });

    const sortedPlayers = Array.from(playerMap.entries()).sort(
      (a, b) => b[1] - a[1]
    );

    this.maxPoints = sortedPlayers.map((v, i) => {
      return {index: i + 1, player: v[0], point: v[1]};
    });
  }

  // 指定した順位の出現率を集計する共通ヘルパー
  private _calcRankRate(
    allResults: Result[],
    targetRank: number,
    ascending: boolean,
    calcRate: (count: number, plays: number) => number
  ): {index: number; player: string; point: number}[] {
    const playerMap = new Map<string, {plays: number; count: number}>();

    allResults.forEach(({player, rank}) => {
      const current = playerMap.get(player) ?? {plays: 0, count: 0};
      playerMap.set(player, {
        plays: current.plays + 1,
        count: current.count + (rank === targetRank ? 1 : 0),
      });
    });

    const sortedPlayers = Array.from(playerMap.entries()).sort((a, b) => {
      const rateA = a[1].count / a[1].plays;
      const rateB = b[1].count / b[1].plays;
      return ascending ? rateA - rateB : rateB - rateA;
    });

    return sortedPlayers.map((v, i) => ({
      index: i + 1,
      player: v[0],
      point: calcRate(v[1].count, v[1].plays),
    }));
  }

  private _setAvoidLast(allResults: Result[]) {
    const last = this._gameType.value === '四麻' ? 4 : 3;
    this.avoidLast = this._calcRankRate(allResults, last, true, (count, plays) =>
      roundTo1(100 - (count / plays) * 100)
    );
  }

  private _setTopRate(allResults: Result[]) {
    this.topRate = this._calcRankRate(allResults, 1, false, (count, plays) =>
      roundTo1((count / plays) * 100)
    );
  }

  private _setYakuman(allYakuman: YakumanWithDate[]) {
    this.yakumanList = allYakuman;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mahjong-stats': MahjongStats;
  }
}
