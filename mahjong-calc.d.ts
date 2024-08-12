import { LitElement } from 'lit';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/progress/circular-progress.js';
import '@patternfly/elements/pf-accordion/pf-accordion.js';
export declare class MahjongCalc extends LitElement {
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
    _gameType: HTMLSelectElement;
    _initialPoint: HTMLInputElement;
    _oka: HTMLInputElement;
    _firstUma: HTMLInputElement;
    _secondUma: HTMLInputElement;
    _thirdUma: HTMLInputElement;
    _fourthUma: HTMLInputElement;
    _date: HTMLInputElement;
    _order: HTMLInputElement;
    _firstPlayer: HTMLInputElement;
    _secondPlayer: HTMLInputElement;
    _thirdPlayer: HTMLInputElement;
    _fourthPlayer: HTMLInputElement;
    _firstScore: HTMLInputElement;
    _secondScore: HTMLInputElement;
    _thirdScore: HTMLInputElement;
    _fourthScore: HTMLInputElement;
    _firstPoint: HTMLInputElement;
    _secondPoint: HTMLInputElement;
    _thirdPoint: HTMLInputElement;
    _fourthPoint: HTMLInputElement;
    _progress: HTMLElement;
    private _calcFirstPoint;
    private _calcSecondPoint;
    private _calcThirdPoint;
    private _calcFourthPoint;
    private _changeGame;
    private _changeSettings;
    private _clearFourth;
    private _toggleFourth;
    private _resetResults;
    private _uploadResults;
}
declare global {
    interface HTMLElementTagNameMap {
        'mahjong-calc': MahjongCalc;
    }
}
//# sourceMappingURL=mahjong-calc.d.ts.map