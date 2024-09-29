var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
let MahjongRule = class MahjongRule extends LitElement {
  render() {
    return html`
      <h1>ルール</h1>
      <h2>四麻</h2>
      <p>
        <a href="https://m-league.jp/about/" target="_blank">Mリーグのルール</a
        >に準拠します。
      </p>
    `;
  }
};
MahjongRule = __decorate([customElement('mahjong-rule')], MahjongRule);
export {MahjongRule};
//# sourceMappingURL=mahjoing-rule.js.map
