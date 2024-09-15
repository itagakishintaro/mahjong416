import { LitElement } from 'lit';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/progress/circular-progress.js';
import '@patternfly/elements/pf-accordion/pf-accordion.js';
export declare class MahjongToday extends LitElement {
    distinctDates: string[];
    todaysResults: Result[][];
    playerPoints: Map<string, number>;
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
    _gameType: HTMLSelectElement;
    _date: HTMLSelectElement;
    constructor();
    private _changeGame;
    private _changeDate;
    private _loadData;
    private _setDistinctDates;
}
declare global {
    interface HTMLElementTagNameMap {
        'mahjong-today': MahjongToday;
    }
}
//# sourceMappingURL=mahjong-today.d.ts.map