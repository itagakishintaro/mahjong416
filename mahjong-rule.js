var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
let MahjongRule = class MahjongRule extends LitElement {
    render() {
        return html `
      <h1>ルール</h1>
      <h2>四麻</h2>
      <p>
        <a href="https://m-league.jp/about/" target="_blank">Mリーグのルール</a
        >に準拠する。
      </p>
      <p>Mリーグと異なるルールは次のとおり。</p>
      <ul>
        <li>30符ルール：簡略化のため符計算はせずに、すべて30符とする</li>
        <li>箱下終了：マイナスの点数が発生した時点で競技終了とする</li>
      </ul>
      <p>一般と異なる主なルールは次のとおり。</p>
      <ul>
        <li>
          和了止めはない：オーラスで親が和了した場合は無条件で連荘となり、そこで止めることはできない
        </li>
        <li>
          頭ハネ：ひとつの牌に2人以上の和了宣言があった場合は、放銃者の下家、対面、上家の順に権利を発する
        </li>
        <li>
          槓(カン)時の槓ドラ表示：槓ドラは明槓でも槓子開示後（捨てる前）に表示する
        </li>
        <li>リーチ：フリテンリーチやツモ番のないリーチもかける事ができる</li>
      </ul>
      <h2>三麻</h2>
      <p>四麻のルールに準拠する。三麻独自のルールは次のとおり。</p>
      <ul>
        <li>北：北は全競技者の役牌</li>
        <li>二飜縛り：二飜以上ないと和了れない</li>
        <li>
          オープンリーチ：アガリ牌に関係する牌のみ表示することで、通常のリーチの一翻に加えて、もう一翻適用される
        </li>
      </ul>
    `;
    }
};
MahjongRule = __decorate([
    customElement('mahjong-rule')
], MahjongRule);
export { MahjongRule };
//# sourceMappingURL=mahjong-rule.js.map