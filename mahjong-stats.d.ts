import {LitElement} from 'lit';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import './mahjong-versus';
export declare class MahjongStats extends LitElement {
  distinctYears: number[];
  totalPoints: {
    index: number;
    player: string;
    point: number;
  }[];
  maxPoints: {
    index: number;
    player: string;
    point: number;
  }[];
  avoidLast: {
    index: number;
    player: string;
    point: number;
  }[];
  yakumanList: {
    date: string;
    player: string;
    yakuman: string;
  }[];
  static styles: import('lit').CSSResult[];
  render(): import('lit-html').TemplateResult<1>;
  _gameType: HTMLSelectElement;
  _targetYear: HTMLSelectElement;
  _versus: HTMLElementTagNameMap['mahjong-versus'];
  constructor();
  private _changeGame;
  private _changeYear;
  private _updateVersusData;
  private _loadData;
  private _setDistinctYears;
  private _setTotalPoint;
  private _setMaxPoint;
  private _setAvoidLast;
  private _setYakuman;
}
declare global {
  interface HTMLElementTagNameMap {
    'mahjong-stats': MahjongStats;
  }
}
//# sourceMappingURL=mahjong-stats.d.ts.map
