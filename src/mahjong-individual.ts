import {LitElement, html, css} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';

import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import {db} from './firestore';
import {collection, getDocs} from 'firebase/firestore/lite';
import {QueryDocumentSnapshot} from 'firebase/firestore/lite';
import {Chart} from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
    point: number;
    chonbo: number;
    maxPoint: number;
    averagePoint: number;
    yakuman: string;
  } = {
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
    yakuman: '',
  };
  @property({type: Array})
  chartData: {
    date: string;
    order: string;
    point: number;
    totalPoint: number;
  }[] = [];
  @property({type: Object})
  chart: Chart | null = null;

  static override styles = [
    css`
      md-outlined-select {
        min-width: calc(50% - 1rem);
      }
      .chart {
        overflow-x: auto;
    `,
  ];

  override render() {
    const info = html`
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
      <dt>役満</dt>
      <dd>${this.playerData.yakuman ? this.playerData.yakuman : 'なし'}</dd>

      <h2>獲得ポイント推移</h2>
      <div class="chart">
        <canvas id="myChart"></canvas>
      </div>
    `;

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

      ${this._player?.value ? info : ''}
    `;
  }

  @query('#gameType')
  _gameType!: HTMLSelectElement;
  @query('#targetYear')
  _targetYear!: HTMLSelectElement;
  @query('#player')
  _player!: HTMLSelectElement;
  @query('#myChart')
  _myChart!: HTMLCanvasElement;

  constructor() {
    super();
    this._loadData();
  }

  private async _changeGame() {
    await this._loadData();
    this._setChart();
  }
  private async _changeYear() {
    await this._loadData();
    this._setChart();
  }
  private async _changePlayer() {
    await this._loadData();
    this._setChart();
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
    // ゲームタイプと年が一致するデータのみを抽出
    const targetData = docs.filter((doc) => {
      return (
        doc.data().gameInfo.gameType === gameType &&
        new Date(doc.data().gameInfo.date).getFullYear() === targetYear
      );
    });
    targetData.forEach((doc) => {
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
    this._setPlayers(docs);
    if (this._player.value) {
      this._setPlayerData(allResults, allChonbo, allYakuman);
      this._setChartData(targetData);
    }
  }

  private _setChartData(docs: QueryDocumentSnapshot[]) {
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
            .results.find(
              (result: Result) => result.player === this._player.value
            ).point.toFixed(1),
          totalPoint: 0,
        };
      })
      .sort((a, b) => {
        if (a.date === b.date) {
          return b.order - a.order;
        }
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    this.chartData = chartData;
  }

  private _setChart() {
    if (this.chart) {
      console.log('destroy');
      this.chart.destroy();
      this._myChart.removeAttribute('width');
      this._myChart.removeAttribute('height');
    }
    this._myChart.style.width = 4 <= this.chartData.length ? this.chartData.length * 50 + 'px': '300px';
    this._myChart.style.height = '400px';
    const zeroPoints = Array(this.chartData.length).fill(0);

    this.chart = new Chart(this._myChart, {
      plugins: [ChartDataLabels],
      type: 'line',
      data: {
        labels: this.chartData.map((data) => data.date),
        datasets: [
          {
            label: '獲得ポイント',
            borderColor: 'rgba(99, 81, 159, 1)',
            data: this.chartData.map((data) => data.point),
            datalabels: {
              color: 'rgba(99, 81, 159, 1)',
              anchor: 'end',
              align: 'end',
            },
          },
          {
            label: '0線',
            borderColor: 'lightgray',
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
        plugins: {
          datalabels: {
            color: 'rgba(99, 81, 159, 1)',
            anchor: 'end',
            align: 'end',
          }
        },
        scales: {
          x: {
            position: 'bottom',
          }
        },
        animation: {
          onComplete: (_animation) => {
            const chartDiv = this.shadowRoot?.querySelector('.chart');
            if (chartDiv) {
              chartDiv.scrollLeft = chartDiv.scrollWidth;
            }
          }
        }
      },
    });
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

  private _setPlayerData(
    allResults: Result[],
    allChonbo: Chonbo[],
    allYakuman: YakumanWithDate[]
  ) {
    const player = this._player.value;
    const playerResults = allResults.filter(
      (result) => result.player === player
    );
    const playerChonbo = allChonbo.filter((chonbo) => chonbo.player === player);
    const playerYakuman = allYakuman.filter(
      (yakuman) => yakuman.player === player
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
    const point = playerResults.reduce((acc, result) => acc + result.point, 0);
    const chonbo = playerChonbo.reduce((acc, result) => acc + result.point, 0);
    const totalPoints = point + chonbo;
    const maxPoint = Number(Math.max(...playerResults.map((result) => result.point)).toFixed(1));
    const averagePoint =
      playerResults.reduce((acc, result) => acc + result.point, 0) / totalGames;
    const yakuman = playerYakuman.map((yakuman) => yakuman.yakuman).join(',');
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
      yakuman,
    };
  }

  private getFourthRate() {
    if (this._gameType?.value === '四麻') {
      return html`<dt>4位率</dt>
        <dd>${(this.playerData.fourthRate * 100).toFixed(2)}%</dd>`;
    }
    return;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mahjong-individual': MahjongIndividual;
  }
}
