var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/filled-button.js';
import '@patternfly/elements/pf-accordion/pf-accordion.js';
let MahjongCalcYakuman = class MahjongCalcYakuman extends LitElement {
    render() {
        return html `
      <pf-accordion>
        <pf-accordion-header>
          <h2>役満</h2>
        </pf-accordion-header>
        <pf-accordion-panel>
          <div>
            <md-outlined-text-field
              id="yakumanPlayer1"
              label="プレイヤー"
              class="width-50"
              type="text"
            >
            </md-outlined-text-field>
            <md-outlined-text-field
              id="yakuman1"
              label="役満"
              class="width-30"
              type="text"
              value=""
            >
            </md-outlined-text-field>
          </div>
          <div>
            <md-outlined-text-field
              id="yakumanPlayer2"
              label="プレイヤー"
              class="width-50"
              type="text"
            >
            </md-outlined-text-field>
            <md-outlined-text-field
              id="yakuman2"
              label="役満"
              class="width-30"
              type="text"
              value=""
            >
            </md-outlined-text-field>
          </div>
          <div>
            <md-outlined-text-field
              id="yakumanPlayer3"
              label="プレイヤー"
              class="width-50"
              type="text"
            >
            </md-outlined-text-field>
            <md-outlined-text-field
              id="yakuman3"
              label="役満"
              class="width-30"
              type="text"
              value=""
            >
            </md-outlined-text-field>
          </div>
          <div>
            <md-outlined-text-field
              id="yakumanPlayer4"
              label="プレイヤー"
              class="width-50"
              type="text"
            >
            </md-outlined-text-field>
            <md-outlined-text-field
              id="yakuman4"
              label="役満"
              class="width-30"
              type="text"
              value=""
            >
            </md-outlined-text-field>
          </div>
        </pf-accordion-panel>
      </pf-accordion>
    `;
    }
};
MahjongCalcYakuman.styles = [
    css `
      .width-50 {
        width: calc(50% - 1rem);
        margin-bottom: 0.5em;
      }
      .width-30 {
        width: 30%;
        margin-bottom: 0.5em;
      }
      md-outlined-text-field {
        --md-outlined-field-disabled-content-opacity: 1;
      }
    `,
];
MahjongCalcYakuman = __decorate([
    customElement('mahjong-calc-yakuman')
], MahjongCalcYakuman);
export { MahjongCalcYakuman };
//# sourceMappingURL=mahjong-calc-yakuman.js.map