import {t as l, h as i, k as e} from './custom-element-6f1a92a3.js';
var t = function (l, i, e, t) {
  for (
    var r,
      u = arguments.length,
      a =
        u < 3
          ? i
          : null === t
          ? (t = Object.getOwnPropertyDescriptor(i, e))
          : t,
      p = l.length - 1;
    p >= 0;
    p--
  )
    (r = l[p]) && (a = (u < 3 ? r(a) : u > 3 ? r(i, e, a) : r(i, e)) || a);
  return u > 3 && a && Object.defineProperty(i, e, a), a;
};
let r = class extends i {
  render() {
    return e`
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
r = t([l('mahjong-rule')], r);
export {r as MahjongRule};
