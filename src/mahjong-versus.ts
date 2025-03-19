import {LitElement, html, css} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';

import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import {db} from './firestore';
import {collection, getDocs} from 'firebase/firestore/lite';

interface VersusData {
  player1: string;
  player2: string;
  games: number;
  pointDiff: number;
}

@customElement('mahjong-versus')
export class MahjongVersus extends LitElement {
  @property({type: Array})
  players: string[] = [];
  @property({type: Array})
  versusData: VersusData[] = [];
  @property({type: String})
  gameType = '四麻';
  @property({type: Number})
  targetYear: number = new Date().getFullYear();

  static override styles = css`
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

  override render() {
    return html`
      <h2>対戦成績</h2>

      <table class="versus-table">
        <tr>
          <th></th>
          ${map(
            this.players,
            (player) => html`<th>${player}</th>`
          )}
        </tr>
        ${map(this.players, (player1) => html`
          <tr>
            <th>${player1}</th>
            ${map(this.players, (player2) => {
              if (player1 === player2) {
                return html`<td>-</td>`;
              }
              const data = this.versusData.find(
                (d) =>
                  (d.player1 === player1 && d.player2 === player2) ||
                  (d.player1 === player2 && d.player2 === player1)
              );
              if (!data) {
                return html`<td>-</td>`;
              }
              const pointDiff =
                data.player1 === player1 ? data.pointDiff : -data.pointDiff;
              return html`
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

  @query('#gameType')
  _gameType!: HTMLSelectElement;

  constructor() {
    super();
    this._loadData();
  }

  public updateData(gameType: string, targetYear: number) {
    this.gameType = gameType;
    this.targetYear = targetYear;
    this._loadData();
  }

  private async _loadData() {
    const querySnapshot = await getDocs(collection(db, 'results'));
    const docs = querySnapshot.docs;

    // 指定された年とゲームタイプでフィルタリング
    const filteredDocs = docs.filter((doc) => {
      const data = doc.data();
      return (
        data.gameInfo.gameType === this.gameType &&
        new Date(data.gameInfo.date).getFullYear() === this.targetYear
      );
    });

    // プレイヤー一覧を取得
    const allPlayers: string[] = [];
    filteredDocs.forEach((doc) => {
      const players = doc.data().gameInfo.players;
      allPlayers.push(...players);
    });
    this.players = [...new Set(allPlayers)];

    // 対戦成績を計算
    const versusData: VersusData[] = [];
    for (let i = 0; i < this.players.length; i++) {
      for (let j = i + 1; j < this.players.length; j++) {
        const player1 = this.players[i];
        const player2 = this.players[j];

        // 両プレイヤーが参加したゲームを抽出
        const commonGames = filteredDocs.filter((doc) => {
          const data = doc.data();
          return (
            data.gameInfo.players.includes(player1) &&
            data.gameInfo.players.includes(player2)
          );
        });

        if (commonGames.length > 0) {
          let pointDiff = 0;
          commonGames.forEach((doc) => {
            const results = doc.data().results;
            const player1Result = results.find(
              (r: any) => r.player === player1
            );
            const player2Result = results.find(
              (r: any) => r.player === player2
            );
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
}

declare global {
  interface HTMLElementTagNameMap {
    'mahjong-versus': MahjongVersus;
  }
}