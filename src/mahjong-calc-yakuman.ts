import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/filled-button.js';
import '@patternfly/elements/pf-accordion/pf-accordion.js';
import {calcSubStyles} from './calc-sub-styles';

@customElement('mahjong-calc-yakuman')
export class MahjongCalcYakuman extends LitElement {
  static override styles = [calcSubStyles];

  override render() {
    return html`
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
}
