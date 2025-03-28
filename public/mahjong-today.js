import{i as t,t as e,h as s,k as i}from"./custom-element-6f1a92a3.js";import{n as a,e as o}from"./select-option-ec247a15.js";import{o as h}from"./map-7f5238f0.js";import"./pf-accordion-cc199819.js";import"./filled-button-87178736.js";import{g as d,c as r,d as l}from"./firestore-4afe899e.js";var n=function(t,e,s,i){for(var a,o=arguments.length,h=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i,d=t.length-1;d>=0;d--)(a=t[d])&&(h=(o<3?a(h):o>3?a(e,s,h):a(e,s))||h);return o>3&&h&&Object.defineProperty(e,s,h),h};let c=class extends s{render(){return i`
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
        ${h(this.distinctDates,(t=>i`<md-select-option value="${t}"
            >${t}</md-select-option
          > `))}
      </md-outlined-select>

      <h2>ゲームごとのポイント</h2>
      <table>
        ${h(this.todaysResults.keys(),(t=>i`
            <thead>
              <tr>
                ${h(this.todaysResults.get(t)[0],(t=>i` <th>${t.player}</th> `))}
              </tr>
            </thead>
            <tbody>
              ${h(this.todaysResults.get(t),(t=>i`<tr>
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
              ${h(Array.from(this.playerPoints.entries()),(([t,e])=>i` <th>${t}</th> `))}
            </tr>
          </thead>
          <tbody>
            <tr>
              ${h(Array.from(this.playerPoints.entries()),(([t,e])=>i` <td>${Math.round(10*e)/10}</td> `))}
            </tr>
          </tbody>
        </table>
      </div>

      <h2>役満</h2>
      ${0===this.todaysYakuman.length?i`<p>なし</p>`:""}
      <table>
        ${h(this.todaysYakuman,(t=>i`
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
        ${h(this.todaysChonbo,(t=>i`
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
    `}constructor(){super(),this.distinctDates=[],this.todaysResults=new Map,this.playerPoints=new Map,this.todaysChonbo=[],this.todaysYakuman=[],this.startup()}async startup(){await this._loadData(),this._date.selectedIndex=0,this._date.displayText=this.distinctDates[0]}async _changeGame(){this._date.value="",await this._loadData(),this._date.selectedIndex=0,this._date.displayText=this.distinctDates[0]}_changeDate(){this._loadData()}async _loadData(){this.todaysResults=new Map,this.todaysChonbo=[],this.todaysYakuman=[];const t=(await d(r(l,"results"))).docs;this._setDistinctDates(t);const e=this._gameType.value||"四麻",s=this._date.value||this.distinctDates[0];this._date.value=s,this._date.selectedIndex=this.distinctDates.indexOf(s),t.sort(((t,e)=>t.data().gameInfo.order<e.data().gameInfo.order?-1:1));const i=new Map;t.forEach((t=>{if(t.data().gameInfo.gameType!==e||t.data().gameInfo.date!==s)return;const a=t.data().results.sort(((t,e)=>t.player<e.player?-1:1)),o=a.map((t=>t.player)).join();this.todaysResults.get(o)?this.todaysResults.get(o).push(a):this.todaysResults.set(o,[a]),a.forEach((t=>{const e=i.get(t.player)||0;i.set(t.player,e+t.point)}));const h=t.data().chonbo?.sort(((t,e)=>t.player<e.player?-1:1));h?.length>0&&this.todaysChonbo.push(h);const d=t.data().yakuman?.sort(((t,e)=>t.player<e.player?-1:1));d?.length>0&&this.todaysYakuman.push(d),console.log(this.todaysChonbo),console.log(this.todaysYakuman)})),this.playerPoints=new Map(Array.from(i).sort(((t,e)=>t[1]<e[1]?1:-1)))}_setDistinctDates(t){this.distinctDates=[];const e=t.map((t=>t.data().gameInfo.gameType!==this._gameType.value?"":t.data().gameInfo.date)),s=[...new Set(e)];this.distinctDates=s.sort(((t,e)=>t<e?1:-1))}};c.styles=[t`
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
