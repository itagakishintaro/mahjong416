import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import '@material/web/tabs/tabs.js';
import '@material/web/tabs/primary-tab.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@material/web/menu/menu.js';
import '@material/web/menu/menu-item.js';
import '@material/web/button/filled-button.js';

@customElement('mahjong-menu')
export class MahjongMenu extends LitElement {
  override render() {
    return html`
      <md-tabs @change="${this._changed}">
        <md-primary-tab>点数計算</md-primary-tab>
        <md-primary-tab>総合成績</md-primary-tab>
        <md-primary-tab>個人成績</md-primary-tab>
      </md-tabs>
      <main>
        <mahjong-calc></mahjong-calc>
      </main>
    `;
  }

  private _changed(event: CustomEvent) {
    const tabsElement = event.target as HTMLElementTagNameMap['md-tabs'];
    const index = tabsElement.activeTabIndex;
    if (index === 0) {
      this.shadowRoot!.querySelector('main')!.innerHTML =
        '<mahjong-calc></mahjong-calc>';
    }
    if (index === 1) {
      this.shadowRoot!.querySelector('main')!.innerHTML =
        '<mahjong-stats></mahjong-stats>';
    }
    if (index === 2) {
      this.shadowRoot!.querySelector('main')!.innerHTML =
        '<mahjong-individual></mahjong-individual>';
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mahjong-menu': MahjongMenu;
  }
}
