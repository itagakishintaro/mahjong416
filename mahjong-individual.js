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
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
let MahjongIndividual = class MahjongIndividual extends LitElement {
    render() {
        const info = html `
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
      <dd>
        ${Math.round(this.playerData.totalPoints * 10) /
            10}（内チョンボ：${Math.round(this.playerData.chonbo * 10) / 10}）
      </dd>
      <dt>最高得点</dt>
      <dd>${this.playerData.maxPoint}</dd>
      <dt>平均得点</dt>
      <dd>${this.playerData.averagePoint.toFixed(2)}</dd>

      <h2>獲得ポイント推移</h2>
      <div class="chart">
        <canvas id="myChart"></canvas>
      </div>
    `;
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
      
      ${this._player?.value ? info : ''} 
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
            point: 0,
            chonbo: 0,
            maxPoint: 0,
            averagePoint: 0,
        };
        this.chartData = [];
        this.chart = null;
        this._loadData();
    }
    _changeGame() {
        this._loadData();
    }
    _changeYear() {
        this._loadData();
    }
    async _changePlayer() {
        await this._loadData();
        this._setChart();
    }
    async _loadData() {
        const querySnapshot = await getDocs(collection(db, 'results'));
        const docs = querySnapshot.docs;
        const allResults = [];
        const allChonbo = [];
        const gameType = this._gameType.value || '四麻';
        const targetYear = Number(this._targetYear.value) || new Date().getFullYear();
        // ゲームタイプと年が一致するデータのみを抽出
        const targetData = docs.filter((doc) => {
            return (doc.data().gameInfo.gameType === gameType &&
                new Date(doc.data().gameInfo.date).getFullYear() === targetYear);
        });
        targetData.forEach((doc) => {
            const results = doc.data().results;
            allResults.push(...results);
            const chonbo = doc.data().chonbo;
            if (chonbo?.length > 0) {
                allChonbo.push(...chonbo);
            }
        });
        this._setDistinctYears(docs);
        this._setPlayers(docs);
        if (this._player.value) {
            this._setPlayerData(allResults, allChonbo);
            this._setChartData(docs);
        }
    }
    _setChartData(docs) {
        const chartData = docs
            .filter((doc) => {
            const players = doc.data().gameInfo.players;
            return players.includes(this._player.value);
        })
            .map((doc) => {
            return {
                date: doc.data().gameInfo.date,
                order: doc.data().gameInfo.order,
                point: doc
                    .data()
                    .results.find((result) => result.player === this._player.value).point,
                totalPoint: 0, // Initialize totalPoint property
            };
        })
            .sort((a, b) => {
            if (a.date === b.date) {
                return b.order - a.order;
            }
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        this.chartData = chartData;
    }
    _setChart() {
        if (this.chart) {
            console.log('destroy');
            this.chart.destroy();
            this._myChart.removeAttribute('width');
            this._myChart.removeAttribute('height');
        }
        this._myChart.style.width = this.chartData.length * 50 + "px";
        this._myChart.style.height = "400px";
        const zeroPoints = Array(this.chartData.length).fill(0);
        this.chart = new Chart(this._myChart, {
            plugins: [ChartDataLabels],
            type: 'line',
            data: {
                labels: this.chartData.map((data) => data.date),
                datasets: [
                    {
                        label: '獲得ポイント',
                        data: this.chartData.map((data) => data.point),
                        datalabels: {
                            anchor: 'end',
                            align: 'end'
                        },
                    },
                    {
                        label: '0線',
                        data: zeroPoints,
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        datalabels: {
                            display: false,
                        },
                    },
                ],
            },
            options: {
                responsive: false,
            },
        });
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
    _setPlayerData(allResults, allChonbo) {
        const player = this._player.value;
        const playerResults = allResults.filter((result) => result.player === player);
        const playerChonbo = allChonbo.filter((chonbo) => chonbo.player === player);
        const totalGames = playerResults.length;
        const firstRate = playerResults.filter((result) => result.rank === 1).length / totalGames;
        const secondRate = playerResults.filter((result) => result.rank === 2).length / totalGames;
        const thirdRate = playerResults.filter((result) => result.rank === 3).length / totalGames;
        const fourthRate = playerResults.filter((result) => result.rank === 4).length / totalGames;
        const averageRank = playerResults.reduce((acc, result) => acc + result.rank, 0) / totalGames;
        const point = playerResults.reduce((acc, result) => acc + result.point, 0);
        const chonbo = playerChonbo.reduce((acc, result) => acc + result.point, 0);
        const totalPoints = point + chonbo;
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
            point,
            chonbo,
            maxPoint,
            averagePoint,
        };
    }
    getFourthRate() {
        if (this._gameType?.value === '四麻') {
            return html `<dt>4位率</dt>
        <dd>${(this.playerData.fourthRate * 100).toFixed(2)}%</dd>`;
        }
        return;
    }
};
MahjongIndividual.styles = [
    css `
      md-outlined-select {
        min-width: calc(50% - 1rem);
      }
      .chart {
        overflow-x: auto;
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
    property({ type: Array })
], MahjongIndividual.prototype, "chartData", void 0);
__decorate([
    property({ type: Object })
], MahjongIndividual.prototype, "chart", void 0);
__decorate([
    query('#gameType')
], MahjongIndividual.prototype, "_gameType", void 0);
__decorate([
    query('#targetYear')
], MahjongIndividual.prototype, "_targetYear", void 0);
__decorate([
    query('#player')
], MahjongIndividual.prototype, "_player", void 0);
__decorate([
    query('#myChart')
], MahjongIndividual.prototype, "_myChart", void 0);
MahjongIndividual = __decorate([
    customElement('mahjong-individual')
], MahjongIndividual);
export { MahjongIndividual };
//# sourceMappingURL=mahjong-individual.js.map