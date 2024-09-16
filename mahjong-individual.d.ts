import {LitElement} from 'lit';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
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
    maxPoint: number;
    averagePoint: number;
  };
  static styles: import('lit').CSSResult[];
  render(): import('lit-html').TemplateResult<1>;
  _gameType: HTMLSelectElement;
  _targetYear: HTMLSelectElement;
  _player: HTMLSelectElement;
  constructor();
  private _changeGame;
  private _changeYear;
  private _changePlayer;
  private _loadData;
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
