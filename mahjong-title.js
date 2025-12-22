var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { db } from './firestore';
import { collection, addDoc, getDocs } from 'firebase/firestore/lite';
import '@patternfly/elements/pf-accordion/pf-accordion.js';
let MahjongTitleList = class MahjongTitleList extends LitElement {
    constructor() {
        super();
        this.titles = [];
        this._loadTitles();
    }
    async _loadTitles() {
        try {
            const querySnapshot = await getDocs(collection(db, 'titles'));
            const loadedTitles = querySnapshot.docs.map((doc, index) => {
                const data = doc.data();
                return {
                    id: index + 1,
                    year: Number(data.year),
                    name: String(data.name),
                    winner: String(data.winner),
                    displayOrder: Number(data.displayOrder),
                };
            });
            // データが正しく取得できているか確認
            console.log('Loaded titles:', loadedTitles);
            this.titles = loadedTitles;
            // 状態が更新されたことを通知
            this.requestUpdate();
        }
        catch (e) {
            console.error('Error loading titles: ', e);
        }
    }
    async addTitle(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newTitle = {
            year: Number(formData.get('year')),
            name: String(formData.get('name')),
            winner: String(formData.get('winner')),
            displayOrder: Number(formData.get('displayOrder')),
        };
        try {
            await addDoc(collection(db, 'titles'), newTitle);
            await this._loadTitles(); // 一覧を再読み込み
            form.reset();
        }
        catch (e) {
            console.error('Error adding title: ', e);
        }
    }
    render() {
        // データがない場合のローディング表示
        if (this.titles.length === 0) {
            return html `
        <div class="title-container">
          <h2>タイトル一覧</h2>
          <p>データを読み込んでいます...</p>
        </div>
      `;
        }
        // 年ごとにタイトルをグループ化
        const groupedTitles = this.titles.reduce((groups, title) => {
            const year = title.year;
            if (!groups[year]) {
                groups[year] = [];
            }
            groups[year].push(title);
            return groups;
        }, {});
        // 年ごとにdisplayOrder昇順で並び替え
        Object.values(groupedTitles).forEach((titlesInYear) => titlesInYear.sort((a, b) => a.displayOrder - b.displayOrder));
        // 年の降順でグループを並べ替え
        const sortedYears = Object.keys(groupedTitles)
            .map(Number)
            .sort((a, b) => b - a);
        return html `
      <div class="title-container">
        <h1>タイトル一覧</h1>

        <pf-accordion>
          <pf-accordion-header>
            <h2>タイトル登録</h2>
          </pf-accordion-header>
          <pf-accordion-panel>
            <div class="form-container">
              <form class="title-form" @submit=${this.addTitle}>
                <div>
                  <input type="number" name="year" placeholder="年" required />
                </div>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="タイトル名"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="winner"
                    placeholder="タイトル獲得者名"
                    required
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="displayOrder"
                    placeholder="表示順"
                    required
                  />
                </div>
                <button type="submit">登録</button>
              </form>
            </div>
          </pf-accordion-panel>
        </pf-accordion>

        <div class="title-list">
          ${sortedYears.map((year) => html `
              <div class="year-group">
                <div class="year-header">${year}年</div>
                <div class="title-items">
                  ${groupedTitles[year].map((title) => html `
                      <div class="title-item">
                        <h3>${title.name}</h3>
                        <p class="winner-name">${title.winner}</p>
                      </div>
                    `)}
                </div>
              </div>
            `)}
        </div>
      </div>
    `;
    }
};
MahjongTitleList.styles = [
    css `
      .title-form {
        margin-bottom: 20px;
        padding: 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
      .title-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .year-group {
        border-top: 2px solid #666;
        padding-top: 15px;
      }
      .year-header {
        font-size: 1.2em;
        margin-bottom: 10px;
        color: #333;
      }
      .title-items {
        display: grid;
        gap: 10px;
      }
      .title-item {
        padding: 10px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;
      }
      .title-item h3 {
        margin: 0 0 10px 0;
        color: #666;
        font-size: 0.8em;
      }
      .winner-name {
        margin: 0;
        padding-left: 1em;
        font-size: 1.2em;
        font-weight: bold;
        color: #333;
      }
      input,
      button {
        margin: 5px;
        padding: 5px;
      }
      pf-accordion {
        margin-bottom: 20px;
      }
      .form-container {
        background: #fff;
      }
    `,
];
__decorate([
    state()
], MahjongTitleList.prototype, "titles", void 0);
MahjongTitleList = __decorate([
    customElement('mahjong-title')
], MahjongTitleList);
export { MahjongTitleList };
//# sourceMappingURL=mahjong-title.js.map