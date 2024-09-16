import {LitElement} from 'lit';
import '@material/web/tabs/tabs.js';
import '@material/web/tabs/primary-tab.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@material/web/menu/menu.js';
import '@material/web/menu/menu-item.js';
import '@material/web/button/filled-button.js';
export declare class MahjongMenu extends LitElement {
  render(): import('lit-html').TemplateResult<1>;
  constructor();
  private _changed;
  private _uploaded;
}
declare global {
  interface HTMLElementTagNameMap {
    'mahjong-menu': MahjongMenu;
  }
}
//# sourceMappingURL=mahjong-menu.d.ts.map
