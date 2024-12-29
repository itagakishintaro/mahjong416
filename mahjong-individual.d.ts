import {LitElement} from 'lit';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import {Chart} from 'chart.js/auto';
export declare class MahjongIndividual extends LitElement {
  distinctYears: number[];
  players: string[];
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
  };
  chartData: {
    date: string;
    order: string;
    point: number;
    totalPoint: number;
  }[];
  chart: Chart | null;
  static styles: import('lit').CSSResult[];
  render(): import('lit-html').TemplateResult<1>;
  _gameType: HTMLSelectElement;
  _targetYear: HTMLSelectElement;
  _player: HTMLSelectElement;
  _myChart: HTMLCanvasElement;
  constructor();
  private _changeGame;
  private _changeYear;
  private _changePlayer;
  private _loadData;
  private _setChartData;
  private _setChart;
  private _setDistinctYears;
  private _setPlayers;
  private _setPlayerData;
  private getFourthRate;
}
declare global {
  interface HTMLElementTagNameMap {
    'mahjong-individual': MahjongIndividual;
  }
}
//# sourceMappingURL=mahjong-individual.d.ts.map
