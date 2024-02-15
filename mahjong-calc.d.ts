import { LitElement } from 'lit';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@patternfly/elements/pf-accordion/pf-accordion.js';
export declare class MahjongCalc extends LitElement {
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
    private _calcFirstScore;
    private _calcSecondScore;
    private _calcThirdScore;
    private _calcFourthScore;
    private _changeGame;
    private _changeSettings;
}
declare global {
    interface HTMLElementTagNameMap {
        'mahjong-calc': MahjongCalc;
    }
}
//# sourceMappingURL=mahjong-calc.d.ts.map