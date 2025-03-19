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
let MahjongVersus = class MahjongVersus extends LitElement {
    render() {
        return html `
      <h2>対戦成績</h2>

      <table class="versus-table">
        <tr>
          <th></th>
          ${map(this.players, (player) => html `<th>${player}</th>`)}
        </tr>
        ${map(this.players, (player1) => html `
          <tr>
            <th>${player1}</th>
            ${map(this.players, (player2) => {
            if (player1 === player2) {
                return html `<td>-</td>`;
            }
            const data = this.versusData.find((d) => (d.player1 === player1 && d.player2 === player2) ||
                (d.player1 === player2 && d.player2 === player1));
            if (!data) {
                return html `<td>-</td>`;
            }
            const pointDiff = data.player1 === player1 ? data.pointDiff : -data.pointDiff;
            return html `
                <td class="${pointDiff > 0 ? 'positive' : 'negative'}">
                  ${pointDiff.toFixed(1)}
                  <br>
                  (${data.games}戦)
                </td>
              `;
        })}
          </tr>
        `)}
      </table>
    `;
    }
    constructor() {
        super();
        this.players = [];
        this.versusData = [];
        this.gameType = '四麻';
        this.targetYear = new Date().getFullYear();
        this._loadData();
    }
    updateData(gameType, targetYear) {
        this.gameType = gameType;
        this.targetYear = targetYear;
        this._loadData();
    }
    async _loadData() {
        const querySnapshot = await getDocs(collection(db, 'results'));
        const docs = querySnapshot.docs;
        // 指定された年とゲームタイプでフィルタリング
        const filteredDocs = docs.filter((doc) => {
            const data = doc.data();
            return (data.gameInfo.gameType === this.gameType &&
                new Date(data.gameInfo.date).getFullYear() === this.targetYear);
        });
        // プレイヤー一覧を取得
        const allPlayers = [];
        filteredDocs.forEach((doc) => {
            const players = doc.data().gameInfo.players;
            allPlayers.push(...players);
        });
        this.players = [...new Set(allPlayers)];
        // 対戦成績を計算
        const versusData = [];
        for (let i = 0; i < this.players.length; i++) {
            for (let j = i + 1; j < this.players.length; j++) {
                const player1 = this.players[i];
                const player2 = this.players[j];
                // 両プレイヤーが参加したゲームを抽出
                const commonGames = filteredDocs.filter((doc) => {
                    const data = doc.data();
                    return (data.gameInfo.players.includes(player1) &&
                        data.gameInfo.players.includes(player2));
                });
                if (commonGames.length > 0) {
                    let pointDiff = 0;
                    commonGames.forEach((doc) => {
                        const results = doc.data().results;
                        const player1Result = results.find((r) => r.player === player1);
                        const player2Result = results.find((r) => r.player === player2);
                        pointDiff += player1Result.point - player2Result.point;
                    });
                    versusData.push({
                        player1,
                        player2,
                        games: commonGames.length,
                        pointDiff,
                    });
                }
            }
        }
        this.versusData = versusData;
    }
};
MahjongVersus.styles = css `
    .versus-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }
    .versus-table th,
    .versus-table td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: center;
      min-width: 80px;
    }
    .versus-table th {
      background-color: #f5f5f5;
    }
    .positive {
      color: #2196f3;
    }
    .negative {
      color: #f44336;
    }
  `;
__decorate([
    property({ type: Array })
], MahjongVersus.prototype, "players", void 0);
__decorate([
    property({ type: Array })
], MahjongVersus.prototype, "versusData", void 0);
__decorate([
    property({ type: String })
], MahjongVersus.prototype, "gameType", void 0);
__decorate([
    property({ type: Number })
], MahjongVersus.prototype, "targetYear", void 0);
__decorate([
    query('#gameType')
], MahjongVersus.prototype, "_gameType", void 0);
MahjongVersus = __decorate([
    customElement('mahjong-versus')
], MahjongVersus);
export { MahjongVersus };
//# sourceMappingURL=mahjong-versus.js.map