import{a as t,t as e,i as s,b as i}from"./custom-element-BXQNS_jb.js";import{n as a,g as r,c as o,d as h}from"./firestore-BnCVonOG.js";import{e as d}from"./select-option-B2ua70te.js";import{o as n,r as l,d as c}from"./utils-D4GKOtwe.js";import"./circular-progress-DnPzHFx5.js";import"./pf-accordion-DBdqHKw_.js";var p=function(t,e,s,i){for(var a,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i,h=t.length-1;h>=0;h--)(a=t[h])&&(o=(r<3?a(o):r>3?a(e,s,o):a(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o};let b=class extends s{render(){return i`
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
        ${n(this.distinctDates,(t=>i`<md-select-option value="${t}"
            >${t}</md-select-option
          > `))}
      </md-outlined-select>

      <h2>ゲームごとのポイント</h2>
      <table>
        ${(()=>{let t="";return this.todaysResultsList.map((e=>{const s=e.results.map((t=>t.player)).join(","),a=s!==t;return t=s,i`
              ${a?i`<thead><tr>${e.results.map((t=>i`<th>${t.player}</th>`))}</tr></thead>`:""}
              <tbody>
                <tr>
                  ${e.results.map((t=>i`
                    <td class="rank-${t.rank}">
                      ${l(t.point)}(${t.rank})
                    </td>
                  `))}
                </tr>
              </tbody>
            `}))})()}
      </table>

      <h2>合計</h2>
      <div class="table-box">
        <table>
          <thead>
            <tr>
              ${n(Array.from(this.playerPoints.entries()),(([t,e])=>i` <th>${t}</th> `))}
            </tr>
          </thead>
          <tbody>
            <tr>
              ${n(Array.from(this.playerPoints.entries()),(([t,e])=>i` <td>${l(e)}</td> `))}
            </tr>
          </tbody>
        </table>
      </div>

      <h2>役満</h2>
      ${0===this.todaysYakuman.length?i`<p>なし</p>`:""}
      <table>
        ${n(this.todaysYakuman,(t=>i`
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
      ${(()=>{const t=new Map;return this.todaysChonbo.flat().forEach((e=>{t.set(e.player,(t.get(e.player)||0)+e.point)})),i`
          <table>
            <thead>
              <tr>
                ${Array.from(t.keys()).map((t=>i`<th>${t}</th>`))}
              </tr>
            </thead>
            <tbody>
              <tr>
                ${Array.from(t.values()).map((t=>i`<td>${t}</td>`))}
              </tr>
            </tbody>
          </table>
        `})()}
    `}constructor(){super(),this.distinctDates=[],this.todaysResultsList=[],this.playerPoints=new Map,this.todaysChonbo=[],this.todaysYakuman=[],this.startup()}async startup(){await this._loadData();const t=(new Date).getFullYear().toString(),e=this.distinctDates[0]===t?this.distinctDates[1]:this.distinctDates[0];this._date.selectedIndex=this.distinctDates.indexOf(e),this._date.displayText=e}async _changeGame(){this._date.value="",await this._loadData();const t=(new Date).getFullYear().toString(),e=this.distinctDates[0]===t?this.distinctDates[1]:this.distinctDates[0];this._date.selectedIndex=this.distinctDates.indexOf(e),this._date.displayText=e}async _changeDate(){await this._loadData()}async _loadData(){this.todaysResultsList=[],this.todaysChonbo=[],this.todaysYakuman=[];const t=(await r(o(h,"results"))).docs,e=this._gameType.value||"四麻";this._setDistinctDates(t,e);const s=(new Date).getFullYear().toString(),i=this.distinctDates[0]===s?this.distinctDates[1]:this.distinctDates[0],a=this._date.value||i;this._date.value=a,this._date.selectedIndex=this.distinctDates.indexOf(a),this._date.displayText=a,t.sort(((t,e)=>{const s=t.data().gameInfo.date,i=e.data().gameInfo.date;return s!==i?s<i?-1:1:t.data().gameInfo.order-e.data().gameInfo.order}));const d=new Map;t.forEach((t=>{if(t.data().gameInfo.gameType!==e)return;if(a!==s&&t.data().gameInfo.date!==a||a===s&&!t.data().gameInfo.date.startsWith(s))return;const i=t.data().results.sort(((t,e)=>t.player<e.player?-1:1));this.todaysResultsList.push({date:t.data().gameInfo.date,order:t.data().gameInfo.order,results:i}),i.forEach((t=>{const e=d.get(t.player)||0;d.set(t.player,e+t.point)}));const r=t.data().chonbo?.sort(((t,e)=>t.player<e.player?-1:1));r?.length>0&&this.todaysChonbo.push(r);const o=t.data().yakuman?.sort(((t,e)=>t.player<e.player?-1:1));o?.length>0&&this.todaysYakuman.push(o)})),this.playerPoints=new Map(Array.from(d).sort(((t,e)=>t[1]<e[1]?1:-1)))}_setDistinctDates(t,e){this.distinctDates=[];const s=t.map((t=>t.data().gameInfo.gameType!==e?"":t.data().gameInfo.date)),i=c(s).filter((t=>t));i.sort(((t,e)=>t<e?1:-1));const a=(new Date).getFullYear().toString();this.distinctDates=[a,...i]}};b.styles=[t`
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
    `],p([a({type:Array})],b.prototype,"distinctDates",void 0),p([a({type:Array})],b.prototype,"todaysResultsList",void 0),p([a({attribute:!1})],b.prototype,"playerPoints",void 0),p([a({type:Array})],b.prototype,"todaysChonbo",void 0),p([a({type:Array})],b.prototype,"todaysYakuman",void 0),p([d("#gameType")],b.prototype,"_gameType",void 0),p([d("#date")],b.prototype,"_date",void 0),b=p([e("mahjong-today")],b);export{b as MahjongToday};
