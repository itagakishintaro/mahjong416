import{i as t,n as e,e as o,t as s,h as a,k as i}from"./select-option-2c22287d.js";import{o as d}from"./map-7f5238f0.js";import"./pf-accordion-cc13577d.js";import"./filled-button-a7dde759.js";import{g as r,c as n,d as l}from"./firestore-724ae668.js";var c=function(t,e,o,s){for(var a,i=arguments.length,d=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s,r=t.length-1;r>=0;r--)(a=t[r])&&(d=(i<3?a(d):i>3?a(e,o,d):a(e,o))||d);return i>3&&d&&Object.defineProperty(e,o,d),d};let h=class extends a{render(){return i`
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
        <md-select-option selected value="${(new Date).toISOString().split("T")[0]}">${(new Date).toISOString().split("T")[0]}</md-select-option>
        ${d(this.distinctDates,(t=>t===(new Date).toISOString().split("T")[0]?"":i`<md-select-option
            value="${t}"
            >${t}</md-select-option>
          `))}
      </md-outlined-select>

      <h2>ゲームごとのポイント</h2>
      <table>
        <thead>
          <tr>
            ${d(this.todaysResults[0],(t=>i` <th>${t.player}</th> `))}
          </tr>
        </thead>
        <tbody>
          ${d(this.todaysResults,(t=>i`<tr>
              ${t.map((t=>i`
                  <td class="rank-${t.rank}">
                    ${Math.round(10*t.point)/10}(${t.rank})
                  </td>
                `))}
            </tr>`))}
        </tbody>
      </table>

      <h2>合計</h2>
      <table>
        <thead>
          <tr>
          ${d(Array.from(this.playerPoints.entries()),(([t,e])=>i`
              <th>${t}</th>
          `))}
          </tr>
        </thead>
        <tbody>
          <tr>
        ${d(Array.from(this.playerPoints.entries()),(([t,e])=>i`
              <td>${Math.round(10*e)/10}</td>
          `))}
          </tr>
        </tbody>
      </table>
    `}constructor(){super(),this.distinctDates=[],this.todaysResults=[],this.playerPoints=new Map,this._loadData()}_changeGame(){this._loadData()}_changeDate(){this._loadData()}async _loadData(){const t=(await r(n(l,"results"))).docs;this.todaysResults=[];const e=this._gameType.value||"四麻",o=this._date.value||(new Date).toISOString().split("T")[0];t.sort(((t,e)=>t.data().gameInfo.order<e.data().gameInfo.order?-1:1)),t.forEach((t=>{if(t.data().gameInfo.gameType!==e||t.data().gameInfo.date!==o)return;const s=t.data().results.sort(((t,e)=>t.player<e.player?-1:1));this.todaysResults.push(s)})),console.log(this.todaysResults);const s=new Map;this.todaysResults.forEach((t=>{t.forEach((t=>{const e=s.get(t.player)||0;s.set(t.player,e+t.point)}))})),this.playerPoints=s,console.log(s),this._setDistinctDates(t)}_setDistinctDates(t){const e=t.map((t=>t.data().gameInfo.date)),o=[...new Set(e)];this.distinctDates=o.sort(((t,e)=>t<e?1:-1))}};h.styles=[t`
      md-outlined-select {
        min-width: calc(50% - 1rem);
      }
      .rank-1 {
        font-weight: bold;
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
        padding: 1em 0;
      }
    `],c([e({type:Array})],h.prototype,"distinctDates",void 0),c([e({type:Array})],h.prototype,"todaysResults",void 0),c([e({attribute:!1})],h.prototype,"playerPoints",void 0),c([o("#gameType")],h.prototype,"_gameType",void 0),c([o("#date")],h.prototype,"_date",void 0),h=c([s("mahjong-today")],h);export{h as MahjongToday};
