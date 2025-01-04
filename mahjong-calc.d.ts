import { LitElement } from 'lit';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/progress/circular-progress.js';
import '@patternfly/elements/pf-accordion/pf-accordion.js';
import './mahjong-calc-chonbo.js';
import './mahjong-calc-yakuman.js';
import './mahjong-calc-date-and-key.js';
export declare class MahjongCalc extends LitElement {
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
    isPointCheckError: boolean;
    gameTypeElement: HTMLSelectElement;
    initialPointElement: HTMLInputElement;
    okaElement: HTMLInputElement;
    firstUmaElement: HTMLInputElement;
    secondUmaElement: HTMLInputElement;
    thirdUmaElement: HTMLInputElement;
    fourthUmaElement: HTMLInputElement;
    firstPlayerElement: HTMLInputElement;
    secondPlayerElement: HTMLInputElement;
    thirdPlayerElement: HTMLInputElement;
    fourthPlayerElement: HTMLInputElement;
    firstScoreElement: HTMLInputElement;
    secondScoreElement: HTMLInputElement;
    thirdScoreElement: HTMLInputElement;
    fourthScoreElement: HTMLInputElement;
    firstPointElement: HTMLInputElement;
    secondPointElement: HTMLInputElement;
    thirdPointElement: HTMLInputElement;
    fourthPointElement: HTMLInputElement;
    progressElement: HTMLElement;
    private _calcPoint;
    private _calc4maPoint;
    private _calc3maPoint;
    private _changeGame;
    private _setIsPointCheckError;
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