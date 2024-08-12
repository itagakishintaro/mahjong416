import {LitElement, html, css} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';

import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import {db} from './firestore';
import {collection, getDocs} from 'firebase/firestore/lite';
import {QueryDocumentSnapshot} from 'firebase/firestore/lite';

@customElement('mahjong-individual')
export class MahjongIndividual extends LitElement {
  @property({type: Array})
  distinctYears: number[] = [];
  @property({type: Array})
  players: string[] = [];
  @property({type: Object})
  playerData: {
    totalGames: number;
    firstRate: number;
    secondRate: number;
    thirdRate: number;
    fourthRate: number;
    averageRank: number;
    totalPoints: number;
    maxPoint: number;
    averagePoint: number;
  } = {
    totalGames: 0,
    firstRate: 0,
    secondRate: 0,
    thirdRate: 0,
    fourthRate: 0,
    averageRank: 0,
    totalPoints: 0,
    maxPoint: 0,
    averagePoint: 0,
  };

  static override styles = [
    css`
      md-outlined-select {
        min-width: calc(50% - 1rem);
      }
    `,
  ];
  override render() {
    return html`
      <h1>個人成績</h1>
      <md-outlined-select
        required
        id="player"
        class="mdc-select"
        @change="${this._changePlayer}"
      >
        ${map(this.players, (player: string) => {
          return html`<md-select-option value="${player}"
            >${player}</md-select-option
          >`;
        })}
      </md-outlined-select>
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

      <h2>基本情報</h2>
        <dt>総ゲーム数</dt>
        <dd>${this.playerData.totalGames}</dd>
        <dt>1位率</dt>
        <dd>${(this.playerData.firstRate * 100).toFixed(2)}%</dd>
        <dt>2位率</dt>
        <dd>${(this.playerData.secondRate * 100).toFixed(2)}%</dd>
        <dt>3位率</dt>
        <dd>${(this.playerData.thirdRate * 100).toFixed(2)}%</dd>
        ${this.getFourthRate()}
        <dt>平均順位</dt>
        <dd>${this.playerData.averageRank.toFixed(2)}</dd>
        <dt>総合ポイント</dt>
        <dd>${this.playerData.totalPoints}</dd>
        <dt>最高得点</dt>
        <dd>${this.playerData.maxPoint}</dd>
        <dt>平均得点</dt>
        <dd>${this.playerData.averagePoint.toFixed(2)}</dd>
    `;
  }

  @query('#gameType')
  _gameType!: HTMLSelectElement;
  @query('#targetYear')
  _targetYear!: HTMLSelectElement;
  @query('#player')
  _player!: HTMLSelectElement;

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
  private _changePlayer() {
    this._loadData();
  }

  private async _loadData() {
    console.log('load data');
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
    this._setPlayers(docs);
    if (this._player.value) {
      this._setPlayerData(allResults);
    }
  }

  private _setDistinctYears(docs: QueryDocumentSnapshot[]) {
    const years = docs.map((doc) =>
      new Date(doc.data().gameInfo.date).getFullYear()
    );
    const distinctYears = [...new Set(years)];
    this.distinctYears = distinctYears;
  }

  private _setPlayers(docs: QueryDocumentSnapshot[]) {
    const allPlayers: string[] = [];
    docs.forEach((doc) => {
      const players = doc.data().gameInfo.players;
      allPlayers.push(...players);
    });
    const distinctPlayers = [...new Set(allPlayers)];
    this.players = distinctPlayers;
  }

  private _setPlayerData(allResults: Result[]) {
    const player = this._player.value;
    const playerResults = allResults.filter(
      (result) => result.player === player
    );
    const totalGames = playerResults.length;
    const firstRate =
      playerResults.filter((result) => result.rank === 1).length / totalGames;
    const secondRate =
      playerResults.filter((result) => result.rank === 2).length / totalGames;
    const thirdRate =
      playerResults.filter((result) => result.rank === 3).length / totalGames;
    const fourthRate =
      playerResults.filter((result) => result.rank === 4).length / totalGames;
    const averageRank =
      playerResults.reduce((acc, result) => acc + result.rank, 0) / totalGames;
    const totalPoints = playerResults.reduce(
      (acc, result) => acc + result.point,
      0
    );
    const maxPoint = Math.max(...playerResults.map((result) => result.point));
    const averagePoint =
      playerResults.reduce((acc, result) => acc + result.point, 0) / totalGames;
    this.playerData = {
      totalGames,
      firstRate,
      secondRate,
      thirdRate,
      fourthRate,
      averageRank,
      totalPoints,
      maxPoint,
      averagePoint,
    };
  }

  private getFourthRate() {
    if (this._gameType?.value === '四麻') {
      return html`<dt>4位率</dt><dd>${(this.playerData.fourthRate * 100).toFixed(2)}%</dd>`;
    }
    return;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mahjong-individual': MahjongIndividual;
  }
}
