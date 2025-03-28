import{i as e,t as i,h as t,k as r}from"./custom-element-6f1a92a3.js";import{r as a}from"./tslib.es6-0fe1dd1f.js";import{g as n,c as o,d,a as s}from"./firestore-4afe899e.js";import"./pf-accordion-e1b9fe75.js";var l=function(e,i,t,r){for(var a,n=arguments.length,o=n<3?i:null===r?r=Object.getOwnPropertyDescriptor(i,t):r,d=e.length-1;d>=0;d--)(a=e[d])&&(o=(n<3?a(o):n>3?a(i,t,o):a(i,t))||o);return n>3&&o&&Object.defineProperty(i,t,o),o};let c=class extends t{constructor(){super(),this.titles=[],this._loadTitles()}async _loadTitles(){try{const e=(await n(o(d,"titles"))).docs.map(((e,i)=>{const t=e.data();return{id:i+1,year:Number(t.year),name:String(t.name),winner:String(t.winner),displayOrder:Number(t.displayOrder)}}));console.log("Loaded titles:",e),this.titles=e,this.requestUpdate()}catch(e){console.error("Error loading titles: ",e)}}async addTitle(e){e.preventDefault();const i=e.target,t=new FormData(i),r={year:Number(t.get("year")),name:String(t.get("name")),winner:String(t.get("winner")),displayOrder:Number(t.get("displayOrder"))};try{await s(o(d,"titles"),r),await this._loadTitles(),i.reset()}catch(e){console.error("Error adding title: ",e)}}render(){if(0===this.titles.length)return r`
        <div class="title-container">
          <h2>麻雀タイトル一覧</h2>
          <p>データを読み込んでいます...</p>
        </div>
      `;const e=this.titles.reduce(((e,i)=>{const t=i.year;return e[t]||(e[t]=[]),e[t].push(i),e}),{}),i=Object.keys(e).map(Number).sort(((e,i)=>i-e));return r`
      <div class="title-container">
        <h1>麻雀タイトル一覧</h1>

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
          ${i.map((i=>r`
              <div class="year-group">
                <div class="year-header">${i}年</div>
                <div class="title-items">
                  ${e[i].map((e=>r`
                      <div class="title-item">
                        <h3>${e.name}</h3>
                        <p class="winner-name">${e.winner}</p>
                      </div>
                    `))}
                </div>
              </div>
            `))}
        </div>
      </div>
    `}};c.styles=[e`
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
  `],l([a()],c.prototype,"titles",void 0),c=l([i("mahjong-title")],c);export{c as MahjongTitleList};
