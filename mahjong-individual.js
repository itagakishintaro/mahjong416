var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import { db } from './firestore';
import { collection, getDocs } from 'firebase/firestore/lite';
let MahjongIndividual = class MahjongIndividual extends LitElement {
    render() {
        return html `
      <h1>個人成績</h1>
      <md-outlined-select
        required
        id="player"
        class="mdc-select"
        @change="${this._changePlayer}"
      >
        ${map(this.players, (player) => {
            return html `<md-select-option value="${player}"
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
        ${map(this.distinctYears, (year) => {
            const thisYear = new Date().getFullYear();
            if (year === thisYear) {
                return;
            }
            return html `<md-select-option value="${year}"
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
    constructor() {
        super();
        this.distinctYears = [];
        this.players = [];
        this.playerData = {
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
        this._loadData();
    }
    _changeGame() {
        this._loadData();
    }
    _changeYear() {
        this._loadData();
    }
    _changePlayer() {
        this._loadData();
    }
    async _loadData() {
        console.log('load data');
        const querySnapshot = await getDocs(collection(db, 'results'));
        const docs = querySnapshot.docs;
        const allResults = [];
        const gameType = this._gameType.value || '四麻';
        const targetYear = Number(this._targetYear.value) || new Date().getFullYear();
        docs.forEach((doc) => {
            // ゲームタイプと年が一致するデータのみを抽出
            if (doc.data().gameInfo.gameType !== gameType ||
                new Date(doc.data().gameInfo.date).getFullYear() !== targetYear) {
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
    _setDistinctYears(docs) {
        const years = docs.map((doc) => new Date(doc.data().gameInfo.date).getFullYear());
        const distinctYears = [...new Set(years)];
        this.distinctYears = distinctYears;
    }
    _setPlayers(docs) {
        const allPlayers = [];
        docs.forEach((doc) => {
            const players = doc.data().gameInfo.players;
            allPlayers.push(...players);
        });
        const distinctPlayers = [...new Set(allPlayers)];
        this.players = distinctPlayers;
    }
    _setPlayerData(allResults) {
        const player = this._player.value;
        const playerResults = allResults.filter((result) => result.player === player);
        const totalGames = playerResults.length;
        const firstRate = playerResults.filter((result) => result.rank === 1).length / totalGames;
        const secondRate = playerResults.filter((result) => result.rank === 2).length / totalGames;
        const thirdRate = playerResults.filter((result) => result.rank === 3).length / totalGames;
        const fourthRate = playerResults.filter((result) => result.rank === 4).length / totalGames;
        const averageRank = playerResults.reduce((acc, result) => acc + result.rank, 0) / totalGames;
        const totalPoints = playerResults.reduce((acc, result) => acc + result.point, 0);
        const maxPoint = Math.max(...playerResults.map((result) => result.point));
        const averagePoint = playerResults.reduce((acc, result) => acc + result.point, 0) / totalGames;
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
    getFourthRate() {
        if (this._gameType?.value === '四麻') {
            return html `<dt>4位率</dt><dd>${(this.playerData.fourthRate * 100).toFixed(2)}%</dd>`;
        }
        return;
    }
};
MahjongIndividual.styles = [
    css `
      md-outlined-select {
        min-width: calc(50% - 1rem);
      }
    `,
];
__decorate([
    property({ type: Array })
], MahjongIndividual.prototype, "distinctYears", void 0);
__decorate([
    property({ type: Array })
], MahjongIndividual.prototype, "players", void 0);
__decorate([
    property({ type: Object })
], MahjongIndividual.prototype, "playerData", void 0);
__decorate([
    query('#gameType')
], MahjongIndividual.prototype, "_gameType", void 0);
__decorate([
    query('#targetYear')
], MahjongIndividual.prototype, "_targetYear", void 0);
__decorate([
    query('#player')
], MahjongIndividual.prototype, "_player", void 0);
MahjongIndividual = __decorate([
    customElement('mahjong-individual')
], MahjongIndividual);
export { MahjongIndividual };
//# sourceMappingURL=mahjong-individual.js.map