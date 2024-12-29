import {i as t, t as e, h as s, k as a} from './custom-element-6f1a92a3.js';
import {n as i, e as o} from './select-option-ec247a15.js';
import {o as r} from './map-7f5238f0.js';
import {g as n, c as d, d as l} from './firestore-724ae668.js';
var h = function (t, e, s, a) {
  for (
    var i,
      o = arguments.length,
      r =
        o < 3
          ? e
          : null === a
          ? (a = Object.getOwnPropertyDescriptor(e, s))
          : a,
      n = t.length - 1;
    n >= 0;
    n--
  )
    (i = t[n]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, s, r) : i(e, s)) || r);
  return o > 3 && r && Object.defineProperty(e, s, r), r;
};
let c = class extends s {
  render() {
    return a`
      <h1>総合成績</h1>
      <md-outlined-select
        required
        id="gameType"
        class="mdc-select"
        @change="${this._changeGame}"
      >
        <md-select-option selected value="四麻">
          <div slot="headline">四麻</div>
        </md-select-option>
        <md-select-option value="三麻">
          <div slot="headline">三麻</div>
        </md-select-option>
      </md-outlined-select>

      <md-outlined-select
        required
        id="targetYear"
        @change="${this._changeYear}"
      >
        <md-select-option selected>
          ${new Date().getFullYear()}
        </md-select-option>
        ${r(this.distinctYears, (t) => {
          if (t !== new Date().getFullYear())
            return a`<md-select-option value="${t}"
            >${t}</md-select-option
          >`;
        })}
      </md-outlined-select>
      <h2>総合ポイント</h2>
      <table>
        <tr>
          <th>順位</th>
          <th>プレイヤー</th>
          <th>総合ポイント</th>
        </tr>
        ${r(
          this.totalPoints,
          (t) => a`
            <tr>
              <td>${t.index}</td>
              <td>${t.player}</td>
              <td>${Math.round(10 * t.point) / 10}</td>
            </tr>
          `
        )}
      </table>
      <h2>最高ポイント</h2>
      <table>
        <tr>
          <th>順位</th>
          <th>プレイヤー</th>
          <th>最高ポイント</th>
        </tr>
        ${r(
          this.maxPoints,
          (t) => a`
            <tr>
              <td>${t.index}</td>
              <td>${t.player}</td>
              <td>${t.point}</td>
            </tr>
          `
        )}
      </table>
      <h2>ラス回避率</h2>
      <table>
        <tr>
          <th>順位</th>
          <th>プレイヤー</th>
          <th>ラス回避率</th>
        </tr>
        ${r(
          this.avoidLast,
          (t) => a`
            <tr>
              <td>${t.index}</td>
              <td>${t.player}</td>
              <td>${t.point}%</td>
            </tr>
          `
        )}
      </table>
    `;
  }
  constructor() {
    super(),
      (this.distinctYears = []),
      (this.totalPoints = []),
      (this.maxPoints = []),
      (this.avoidLast = []),
      this._loadData();
  }
  _changeGame() {
    this._loadData();
  }
  _changeYear() {
    this._loadData();
  }
  async _loadData() {
    const t = (await n(d(l, 'results'))).docs,
      e = [],
      s = [],
      a = this._gameType.value || '四麻',
      i = Number(this._targetYear.value) || new Date().getFullYear();
    t.forEach((t) => {
      if (
        t.data().gameInfo.gameType !== a ||
        new Date(t.data().gameInfo.date).getFullYear() !== i
      )
        return;
      const o = t.data().results;
      e.push(...o);
      const r = t.data().chonbo;
      r?.length > 0 && s.push(...r);
    }),
      this._setDistinctYears(t),
      this._setTotalPoint(e, s),
      this._setMaxPoint(e),
      this._setAvoidLast(e);
  }
  _setDistinctYears(t) {
    const e = t.map((t) => new Date(t.data().gameInfo.date).getFullYear()),
      s = [...new Set(e)];
    this.distinctYears = s;
  }
  _setTotalPoint(t, e) {
    const s = new Map();
    t.forEach((t) => {
      const {player: e, point: a} = t;
      if (s.has(e)) {
        const t = (10 * (s.get(e) || 0) + 10 * a) / 10;
        s.set(e, t);
      } else s.set(e, a);
    }),
      e.forEach((t) => {
        const {player: e, point: a} = t;
        if (s.has(e)) {
          const t = (10 * (s.get(e) || 0) + 10 * a) / 10;
          s.set(e, t);
        }
      });
    const a = Array.from(s.entries()).sort((t, e) => e[1] - t[1]);
    this.totalPoints = a.map((t, e) => ({
      index: e + 1,
      player: t[0],
      point: t[1],
    }));
  }
  _setMaxPoint(t) {
    const e = new Map();
    t.forEach((t) => {
      const {player: s, point: a} = t;
      if (e.has(s)) {
        a > (e.get(s) || 0) && e.set(s, a);
      } else e.set(s, a);
    });
    const s = Array.from(e.entries()).sort((t, e) => e[1] - t[1]);
    this.maxPoints = s.map((t, e) => ({
      index: e + 1,
      player: t[0],
      point: t[1],
    }));
  }
  _setAvoidLast(t) {
    const e = new Map(),
      s = '四麻' === this._gameType.value ? 4 : 3;
    t.forEach((t) => {
      const {player: a, rank: i} = t;
      if (e.has(a)) {
        const t = e.get(a) || {plays: 0, last: 0};
        i === s
          ? e.set(a, {plays: t.plays + 1, last: t.last + 1})
          : e.set(a, {plays: t.plays + 1, last: t.last});
      } else
        i === s ? e.set(a, {plays: 1, last: 1}) : e.set(a, {plays: 1, last: 0});
    });
    const a = Array.from(e.entries()).sort(
      (t, e) => t[1].last / t[1].plays - e[1].last / e[1].plays
    );
    this.avoidLast = a.map((t, e) => ({
      index: e + 1,
      player: t[0],
      point: Math.round(10 * (100 - (t[1].last / t[1].plays) * 100)) / 10,
    }));
  }
};
(c.styles = [
  t`
      md-outlined-select {
        min-width: calc(50% - 1rem);
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
      }

      table tr {
        border-bottom: solid 1px #eee;
        cursor: pointer;
      }

      table tr:hover {
        background-color: #d4f0fd;
      }

      table th,
      table td {
        text-align: center;
        width: 25%;
        padding: 0.5em 0;
      }
    `,
]),
  h([i({type: Array})], c.prototype, 'distinctYears', void 0),
  h([i({type: Array})], c.prototype, 'totalPoints', void 0),
  h([i({type: Array})], c.prototype, 'maxPoints', void 0),
  h([i({type: Array})], c.prototype, 'avoidLast', void 0),
  h([o('#gameType')], c.prototype, '_gameType', void 0),
  h([o('#targetYear')], c.prototype, '_targetYear', void 0),
  (c = h([e('mahjong-stats')], c));
export {c as MahjongStats};
