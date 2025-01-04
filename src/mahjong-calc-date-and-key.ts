import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import '@material/web/textfield/filled-text-field.js';
import '@patternfly/elements/pf-accordion/pf-accordion.js';

@customElement('mahjong-calc-date-and-key')
export class MahjongCalcDateAndKey extends LitElement {
  static override styles = [
    css`
      .width-50 {
        width: calc(50% - 1rem);
        margin-bottom: 0.5em;
      }
    `,
  ];

  override render() {
    return html`
      <pf-accordion>
        <pf-accordion-header>
          <h2>日付、順序キー</h2>
        </pf-accordion-header>
        <pf-accordion-panel>
          <md-filled-text-field
            id="date"
            label="日付"
            class="width-50"
            type="date"
            value="${new Date().toISOString().split('T')[0]}"
          >
          </md-filled-text-field>
          <md-filled-text-field
            id="order"
            label="順序キー"
            class="width-50"
            type="text"
            value="${new Date().getTime()}"
          >
          </md-filled-text-field>
        </pf-accordion-panel>
      </pf-accordion>
    `;
  }
}
