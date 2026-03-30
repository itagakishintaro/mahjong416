import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {choose} from 'lit/directives/choose.js';

import '@material/web/tabs/tabs.js';
import '@material/web/tabs/primary-tab.js';
import './mahjong-calc';
import './mahjong-today';
import './mahjong-stats';
import './mahjong-individual';
import './mahjong-title';
import './mahjong-rule';

@customElement('mahjong-menu')
export class MahjongMenu extends LitElement {
  @state()
  private _activeTab = 0;
  @state()
  private _prefillData: PrefillData | null = null;

  override render() {
    return html`
      <md-tabs @change="${this._changed}">
        <md-primary-tab id="calc">点数計算</md-primary-tab>
        <md-primary-tab id="today">今日の成績</md-primary-tab>
        <md-primary-tab>総合成績</md-primary-tab>
        <md-primary-tab>個人成績</md-primary-tab>
        <md-primary-tab>タイトル</md-primary-tab>
        <md-primary-tab>ルール</md-primary-tab>
      </md-tabs>
      <main>
        ${choose(this._activeTab, [
          [0, () => html`<mahjong-calc .prefillData=${this._prefillData}></mahjong-calc>`],
          [1, () => html`<mahjong-today></mahjong-today>`],
          [2, () => html`<mahjong-stats></mahjong-stats>`],
          [3, () => html`<mahjong-individual></mahjong-individual>`],
          [4, () => html`<mahjong-title></mahjong-title>`],
          [5, () => html`<mahjong-rule></mahjong-rule>`],
        ])}
      </main>
    `;
  }

  constructor() {
    super();
    this.addEventListener('uploaded', this._uploaded);
    this.addEventListener('delete-and-recalc', this._deleteAndRecalc);
  }

  private _changed(event: CustomEvent) {
    const tabsElement = event.target as HTMLElementTagNameMap['md-tabs'];
    const newTab = tabsElement.activeTabIndex;
    // 点数計算タブ以外に移動したときだけ prefillData をクリア
    if (newTab !== 0) {
      this._prefillData = null;
    }
    this._activeTab = newTab;
  }

  private _uploaded() {
    // click() → _changed() → this._activeTab = 1 の流れでタブ切り替えと再描画を行う
    const todayButton = this.shadowRoot!.querySelector('#today') as HTMLElement;
    todayButton.click();
  }

  private _deleteAndRecalc(event: Event) {
    const detail = (event as CustomEvent<PrefillData>).detail;
    this._prefillData = detail;
    const calcButton = this.shadowRoot!.querySelector('#calc') as HTMLElement;
    calcButton.click();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mahjong-menu': MahjongMenu;
  }
}
