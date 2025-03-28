import{i as t,t as e,h as s,k as i}from"./custom-element-6f1a92a3.js";import{n as a}from"./tslib.es6-0fe1dd1f.js";import{e as o}from"./select-option-960bdd27.js";import{o as d}from"./map-7f5238f0.js";import"./circular-progress-77202d31.js";import"./filled-button-ee8cba52.js";import"./pf-accordion-e1b9fe75.js";import{g as h,c as r,d as l}from"./firestore-724ae668.js";var n=function(t,e,s,i){for(var a,o=arguments.length,d=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i,h=t.length-1;h>=0;h--)(a=t[h])&&(d=(o<3?a(d):o>3?a(e,s,d):a(e,s))||d);return o>3&&d&&Object.defineProperty(e,s,d),d};let c=class extends s{render(){return i`
      <h1>今日の成績</h1>

      <md-outlined-select required id="gameType" @change="${this._changeGame}">
        <md-select-option selected value="四麻">
          <div slot="headline">四麻</div>
        </md-select-option>
        <md-select-option value="三麻">
          <div slot="headline">三麻</div>
        </md-select-option>
      </md-outlined-select>

      <md-outlined-select required id="date" @change="${this._changeDate}">
        ${d(this.distinctDates,(t=>i`<md-select-option value="${t}"
            >${t}</md-select-option
          > `))}
      </md-outlined-select>

      <h2>ゲームごとのポイント</h2>
      <table>
        ${d(this.todaysResults.keys(),(t=>i`
            <thead>
              <tr>
                ${d(this.todaysResults.get(t)[0],(t=>i` <th>${t.player}</th> `))}
              </tr>
            </thead>
            <tbody>
              ${d(this.todaysResults.get(t),(t=>i`<tr>
                    ${t.map((t=>i`
                        <td class="rank-${t.rank}">
                          ${Math.round(10*t.point)/10}(${t.rank})
                        </td>
                      `))}
                  </tr>`))}
            </tbody>
          `))}
      </table>

      <h2>合計</h2>
      <div class="table-box">
        <table>
          <thead>
            <tr>
              ${d(Array.from(this.playerPoints.entries()),(([t,e])=>i` <th>${t}</th> `))}
            </tr>
          </thead>
          <tbody>
            <tr>
              ${d(Array.from(this.playerPoints.entries()),(([t,e])=>i` <td>${Math.round(10*e)/10}</td> `))}
            </tr>
          </tbody>
        </table>
      </div>

      <h2>役満</h2>
      ${0===this.todaysYakuman.length?i`<p>なし</p>`:""}
      <table>
        ${d(this.todaysYakuman,(t=>i`
            <thead>
              <tr>
                ${t.map((t=>i` <th>${t.player}</th> `))}
              </tr>
            </thead>
            <tbody>
              <tr>
                ${t.map((t=>i` <td>${t.yakuman}</td> `))}
              </tr>
            </tbody>
          `))}
      </table>

      <h2>チョンボ</h2>
      ${0===this.todaysChonbo.length?i`<p>なし</p>`:""}
      <table>
        ${d(this.todaysChonbo,(t=>i`
            <thead>
              <tr>
                ${t.map((t=>i` <th>${t.player}</th> `))}
              </tr>
            </thead>
            <tbody>
              <tr>
                ${t.map((t=>i` <td>${t.point}</td> `))}
              </tr>
            </tbody>
          `))}
      </table>
    `}constructor(){super(),this.distinctDates=[],this.todaysResults=new Map,this.playerPoints=new Map,this.todaysChonbo=[],this.todaysYakuman=[],this.startup()}async startup(){await this._loadData(),this._date.selectedIndex=0,this._date.displayText=this.distinctDates[0]}async _changeGame(){this._date.value="",await this._loadData(),this._date.selectedIndex=0,this._date.displayText=this.distinctDates[0]}_changeDate(){this._loadData()}async _loadData(){this.todaysResults=new Map,this.todaysChonbo=[],this.todaysYakuman=[];const t=(await h(r(l,"results"))).docs;this._setDistinctDates(t);const e=this._gameType.value||"四麻",s=this._date.value||this.distinctDates[0];this._date.value=s,this._date.selectedIndex=this.distinctDates.indexOf(s),t.sort(((t,e)=>t.data().gameInfo.order<e.data().gameInfo.order?-1:1));const i=new Map;t.forEach((t=>{if(t.data().gameInfo.gameType!==e||t.data().gameInfo.date!==s)return;const a=t.data().results.sort(((t,e)=>t.player<e.player?-1:1)),o=a.map((t=>t.player)).join();this.todaysResults.get(o)?this.todaysResults.get(o).push(a):this.todaysResults.set(o,[a]),a.forEach((t=>{const e=i.get(t.player)||0;i.set(t.player,e+t.point)}));const d=t.data().chonbo?.sort(((t,e)=>t.player<e.player?-1:1));d?.length>0&&this.todaysChonbo.push(d);const h=t.data().yakuman?.sort(((t,e)=>t.player<e.player?-1:1));h?.length>0&&this.todaysYakuman.push(h),console.log(this.todaysChonbo),console.log(this.todaysYakuman)})),this.playerPoints=new Map(Array.from(i).sort(((t,e)=>t[1]<e[1]?1:-1)))}_setDistinctDates(t){this.distinctDates=[];const e=t.map((t=>t.data().gameInfo.gameType!==this._gameType.value?"":t.data().gameInfo.date)),s=[...new Set(e)];this.distinctDates=s.sort(((t,e)=>t<e?1:-1))}};c.styles=[t`
      md-outlined-select {
        min-width: calc(50% - 1rem);
      }
      .rank-1 {
        font-weight: bold;
      }

      .table-box {
        overflow-x: auto;
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

      table th {
        background-color: #eee;
      }

      table th,
      table td {
        text-align: center;
        padding: 0.5em 0;
        min-width: 4em;
      }
    `],n([a({type:Array})],c.prototype,"distinctDates",void 0),n([a({type:Object})],c.prototype,"todaysResults",void 0),n([a({attribute:!1})],c.prototype,"playerPoints",void 0),n([a({type:Array})],c.prototype,"todaysChonbo",void 0),n([a({type:Array})],c.prototype,"todaysYakuman",void 0),n([o("#gameType")],c.prototype,"_gameType",void 0),n([o("#date")],c.prototype,"_date",void 0),c=n([e("mahjong-today")],c);export{c as MahjongToday};
