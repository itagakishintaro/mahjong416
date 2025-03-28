import {LitElement} from 'lit';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
interface VersusData {
  player1: string;
  player2: string;
  games: number;
  pointDiff: number;
}
export declare class MahjongVersus extends LitElement {
  players: string[];
  versusData: VersusData[];
  gameType: string;
  targetYear: number;
  static styles: import('lit').CSSResult;
  render(): import('lit-html').TemplateResult<1>;
  _gameType: HTMLSelectElement;
  constructor();
  updateData(gameType: string, targetYear: number): void;
  private _loadData;
}
declare global {
  interface HTMLElementTagNameMap {
    'mahjong-versus': MahjongVersus;
  }
}
export {};
//# sourceMappingURL=mahjong-versus.d.ts.map
