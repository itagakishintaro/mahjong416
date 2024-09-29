import{i as t,t as e,h as s,k as i}from"./custom-element-6f1a92a3.js";import{n as a,e as o}from"./select-option-ec247a15.js";import{o as d}from"./map-7f5238f0.js";import"./pf-accordion-cc199819.js";import"./filled-button-87178736.js";import{g as h,c as r,d as n}from"./firestore-4afe899e.js";var l=function(t,e,s,i){for(var a,o=arguments.length,d=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i,h=t.length-1;h>=0;h--)(a=t[h])&&(d=(o<3?a(d):o>3?a(e,s,d):a(e,s))||d);return o>3&&d&&Object.defineProperty(e,s,d),d};let c=class extends s{render(){return i`
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
            ${d(Array.from(this.playerPoints.entries()),(([t,e])=>i` <th>${t}</th> `))}
          </tr>
        </thead>
        <tbody>
          <tr>
            ${d(Array.from(this.playerPoints.entries()),(([t,e])=>i` <td>${Math.round(10*e)/10}</td> `))}
          </tr>
        </tbody>
      </table>

      <h2>チョンボ</h2>
      <table>
        <thead>
          <tr>
            ${d(this.todaysChonbo[0],(t=>i` <th>${t.player}</th> `))}
          </tr>
        </thead>
        <tbody>
          ${d(this.todaysChonbo,(t=>i`<tr>
              ${t.map((t=>i` <td>${Math.round(10*t.point)/10}</td> `))}
            </tr>`))}
        </tbody>
      </table>
    `}constructor(){super(),this.distinctDates=[],this.todaysResults=[],this.playerPoints=new Map,this.todaysChonbo=[],this.startup()}async startup(){await this._loadData(),this._date.selectedIndex=0,this._date.displayText=this.distinctDates[0]}async _changeGame(){this._date.value="",await this._loadData(),this._date.selectedIndex=0,this._date.displayText=this.distinctDates[0]}_changeDate(){this._loadData()}async _loadData(){this.todaysResults=[],this.todaysChonbo=[];const t=(await h(r(n,"results"))).docs;this._setDistinctDates(t);const e=this._gameType.value||"四麻",s=this._date.value||this.distinctDates[0];this._date.value=s,this._date.selectedIndex=this.distinctDates.indexOf(s),t.sort(((t,e)=>t.data().gameInfo.order<e.data().gameInfo.order?-1:1)),t.forEach((t=>{if(t.data().gameInfo.gameType!==e||t.data().gameInfo.date!==s)return;const i=t.data().results.sort(((t,e)=>t.player<e.player?-1:1));this.todaysResults.push(i);const a=t.data().chonbo?.sort(((t,e)=>t.player<e.player?-1:1));a?.length>0&&this.todaysChonbo.push(a)}));const i=new Map;this.todaysResults.forEach((t=>{t.forEach((t=>{const e=i.get(t.player)||0;i.set(t.player,e+t.point)}))})),this.playerPoints=i}_setDistinctDates(t){this.distinctDates=[];const e=t.map((t=>t.data().gameInfo.gameType!==this._gameType.value?"":t.data().gameInfo.date)),s=[...new Set(e)];this.distinctDates=s.sort(((t,e)=>t<e?1:-1))}};c.styles=[t`
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
      padding: 0.5em 0;
    }
  `],l([a({type:Array})],c.prototype,"distinctDates",void 0),l([a({type:Array})],c.prototype,"todaysResults",void 0),l([a({attribute:!1})],c.prototype,"playerPoints",void 0),l([a({type:Array})],c.prototype,"todaysChonbo",void 0),l([o("#gameType")],c.prototype,"_gameType",void 0),l([o("#date")],c.prototype,"_date",void 0),c=l([e("mahjong-today")],c);export{c as MahjongToday};
