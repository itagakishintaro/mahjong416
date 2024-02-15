/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
import '@material/web/textfield/outlined-text-field.js';
import '@patternfly/elements/pf-accordion/pf-accordion.js';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MahjongCalc extends LitElement {
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
    private _calcFirstScore;
    private _calcSecondScore;
    private _calcThirdScore;
    private _calcFourthScore;
}
declare global {
    interface HTMLElementTagNameMap {
        'mahjong-calc': MahjongCalc;
    }
}
//# sourceMappingURL=mahjong-calc.d.ts.map