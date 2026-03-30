import {LitElement, html, css} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/iconbutton/icon-button.js';
import '@patternfly/elements/pf-accordion/pf-accordion.js';
import {calcSubStyles} from './calc-sub-styles';

@customElement('mahjong-calc-chonbo')
export class MahjongCalcChonbo extends LitElement {
  static override styles = [
    calcSubStyles,
    css`
      .row-actions {
        display: flex;
        align-items: center;
      }
      md-icon-button {
        --md-icon-button-icon-size: 20px;
      }
      .row-icon-svg {
        display: block;
        width: 20px;
        height: 20px;
        fill: currentColor;
      }
    `,
  ];

  @state()
  private _rows: {player: string; point: string}[] = [{player: '', point: '-20'}];

  private _addRow() {
    this._rows = [...this._rows, {player: '', point: '-20'}];
  }

  private _removeRow(index: number) {
    this._rows = this._rows.filter((_, i) => i !== index);
  }

  private _patchRow(index: number, field: 'player' | 'point', value: string) {
    this._rows = this._rows.map((row, i) =>
      i === index ? {...row, [field]: value} : row
    );
  }

  getChonbo(): Chonbo[] {
    return this._rows
      .filter((r) => r.player.trim() !== '')
      .map((r) => ({player: r.player.trim(), point: Number(r.point)}));
  }

  reset() {
    this._rows = [{player: '', point: '-20'}];
  }

  setRows(chonbo: Chonbo[]) {
    this._rows =
      chonbo.length > 0
        ? chonbo.map((c) => ({player: c.player, point: String(c.point)}))
        : [{player: '', point: '-20'}];
  }

  override render() {
    return html`
      <pf-accordion>
        <pf-accordion-header>
          <h2>チョンボ</h2>
        </pf-accordion-header>
        <pf-accordion-panel>
          ${this._rows.map(
            (row, i) => html`
              <div class="row-actions">
                <md-outlined-text-field
                  label="プレイヤー"
                  class="width-50"
                  type="text"
                  .value=${row.player}
                  @input=${(e: Event) => {
                    const field = e.currentTarget as unknown as {value: string};
                    this._patchRow(i, 'player', field.value);
                  }}
                ></md-outlined-text-field>
                <md-outlined-text-field
                  label="罰符"
                  class="width-30"
                  type="number"
                  .value=${row.point}
                  @input=${(e: Event) => {
                    const field = e.currentTarget as unknown as {value: string};
                    this._patchRow(i, 'point', field.value);
                  }}
                ></md-outlined-text-field>
                ${this._rows.length > 1
                  ? html`
                      <md-icon-button
                        type="button"
                        aria-label="行を削除"
                        @click=${() => this._removeRow(i)}
                      >
                        <svg
                          class="row-icon-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                          />
                        </svg>
                      </md-icon-button>
                    `
                  : ''}
              </div>
            `
          )}
          <md-icon-button
            type="button"
            aria-label="行を追加"
            @click=${this._addRow}
          >
            <svg
              class="row-icon-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </md-icon-button>
        </pf-accordion-panel>
      </pf-accordion>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mahjong-calc-chonbo': MahjongCalcChonbo;
  }
}
