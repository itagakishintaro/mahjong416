import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/filled-button.js';
import '@patternfly/elements/pf-accordion/pf-accordion.js';

@customElement('mahjong-calc-chonbo')
export class MahjongCalcChonbo extends LitElement {
  static override styles = [
    css`
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

  override render() {
    return html`
      <pf-accordion>
        <pf-accordion-header>
          <h2>チョンボ</h2>
        </pf-accordion-header>
        <pf-accordion-panel>
          <div>
            <md-outlined-text-field
              id="chonboPlayer1"
              label="プレイヤー"
              class="width-50"
              type="text"
            >
            </md-outlined-text-field>
            <md-outlined-text-field
              id="chonboPoint1"
              label="罰符"
              class="width-30"
              type="number"
              value="-20"
            >
            </md-outlined-text-field>
          </div>
          <div>
            <md-outlined-text-field
              id="chonboPlayer2"
              label="プレイヤー"
              class="width-50"
              type="text"
            >
            </md-outlined-text-field>
            <md-outlined-text-field
              id="chonboPoint2"
              label="罰符"
              class="width-30"
              type="number"
              value="-20"
            >
            </md-outlined-text-field>
          </div>
          <div>
            <md-outlined-text-field
              id="chonboPlayer3"
              label="プレイヤー"
              class="width-50"
              type="text"
            >
            </md-outlined-text-field>
            <md-outlined-text-field
              id="chonboPoint3"
              label="罰符"
              class="width-30"
              type="number"
              value="-20"
            >
            </md-outlined-text-field>
          </div>
          <div>
            <md-outlined-text-field
              id="chonboPlayer4"
              label="プレイヤー"
              class="width-50"
              type="text"
            >
            </md-outlined-text-field>
            <md-outlined-text-field
              id="chonboPoint4"
              label="罰符"
              class="width-30"
              type="number"
              value="-20"
            >
            </md-outlined-text-field>
          </div>
        </pf-accordion-panel>
      </pf-accordion>
    `;
  }
}
