import{a as t,t as e,i as s,b as r}from"./custom-element-BXQNS_jb.js";import{n as i,g as a,c as o,d as n}from"./firestore-BnCVonOG.js";import{e as h}from"./select-option-B2ua70te.js";import{o as d,d as l,r as c}from"./utils-D4GKOtwe.js";var p=function(t,e,s,r){for(var i,a=arguments.length,o=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r,n=t.length-1;n>=0;n--)(i=t[n])&&(o=(a<3?i(o):a>3?i(e,s,o):i(e,s))||o);return a>3&&o&&Object.defineProperty(e,s,o),o};let u=class extends s{render(){return r`
      <h2>対戦成績</h2>
      <div class="table-container">
        <table class="versus-table">
          <tr>
            <th></th>
            ${d(this.players,(t=>r`<th>${t}</th>`))}
          </tr>
          ${d(this.players,(t=>r`
              <tr>
                <th>${t}</th>
                ${d(this.players,(e=>{if(t===e)return r`<td>-</td>`;const s=this.versusData.find((s=>s.player1===t&&s.player2===e||s.player1===e&&s.player2===t));if(!s)return r`<td>-</td>`;const i=s.player1===t?s.pointDiff:-s.pointDiff;return r`
                    <td class="${i>0?"positive":"negative"}">
                      ${i.toFixed(1)}
                      <br />
                      (${s.games}戦)
                    </td>
                  `}))}
              </tr>
            `))}
        </table>
      </div>
    `}constructor(){super(),this.players=[],this.versusData=[],this.gameType="四麻",this.targetYear=(new Date).getFullYear(),this._loadData()}updateData(t,e){this.gameType=t,this.targetYear=e,this._loadData()}async _loadData(){const t=(await a(o(n,"results"))).docs.filter((t=>{const e=t.data();return e.gameInfo.gameType===this.gameType&&new Date(e.gameInfo.date).getFullYear()===this.targetYear})),e=[];t.forEach((t=>{const s=t.data().gameInfo.players;e.push(...s)})),this.players=l(e);const s=[];for(let e=0;e<this.players.length;e++)for(let r=e+1;r<this.players.length;r++){const i=this.players[e],a=this.players[r],o=t.filter((t=>{const e=t.data();return e.gameInfo.players.includes(i)&&e.gameInfo.players.includes(a)}));if(o.length>0){let t=0;o.forEach((e=>{const s=e.data().results,r=s.find((t=>t.player===i)),o=s.find((t=>t.player===a));r&&o&&(t+=r.point-o.point)})),s.push({player1:i,player2:a,games:o.length,pointDiff:t})}}this.versusData=s}};u.styles=t`
    .table-container {
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
    .versus-table {
      border-collapse: collapse;
      margin-top: 1rem;
      min-width: 600px;
    }
    .versus-table th,
    .versus-table td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: center;
      min-width: 80px;
    }
    .versus-table th {
      background-color: #f5f5f5;
      position: sticky;
      left: 0;
      z-index: 1;
    }
    .versus-table tr th:first-child {
      position: sticky;
      left: 0;
      z-index: 2;
    }
    .positive {
      color: #2196f3;
    }
    .negative {
      color: #f44336;
    }
  `,p([i({type:Array})],u.prototype,"players",void 0),p([i({type:Array})],u.prototype,"versusData",void 0),p([i({type:String})],u.prototype,"gameType",void 0),p([i({type:Number})],u.prototype,"targetYear",void 0),p([h("#gameType")],u.prototype,"_gameType",void 0),u=p([e("mahjong-versus")],u);var m=function(t,e,s,r){for(var i,a=arguments.length,o=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r,n=t.length-1;n>=0;n--)(i=t[n])&&(o=(a<3?i(o):a>3?i(e,s,o):i(e,s))||o);return a>3&&o&&Object.defineProperty(e,s,o),o};let v=class extends s{render(){return r`
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
          ${(new Date).getFullYear()}
        </md-select-option>
        ${d(this.distinctYears,(t=>{if(t!==(new Date).getFullYear())return r`<md-select-option value="${t}"
            >${t}</md-select-option
          >`}))}
      </md-outlined-select>
      <h2>総合ポイント</h2>
      <table>
        <tr>
          <th>順位</th>
          <th>プレイヤー</th>
          <th>総合ポイント</th>
        </tr>
        ${d(this.totalPoints,(t=>r`
            <tr>
              <td>${t.index}</td>
              <td>${t.player}</td>
              <td>${c(t.point)}</td>
            </tr>
          `))}
      </table>
      <h2>最高ポイント</h2>
      <table>
        <tr>
          <th>順位</th>
          <th>プレイヤー</th>
          <th>最高ポイント</th>
        </tr>
        ${d(this.maxPoints,(t=>r`
            <tr>
              <td>${t.index}</td>
              <td>${t.player}</td>
              <td>${t.point}</td>
            </tr>
          `))}
      </table>
      <h2>ラス回避率</h2>
      <table>
        <tr>
          <th>順位</th>
          <th>プレイヤー</th>
          <th>ラス回避率</th>
        </tr>
        ${d(this.avoidLast,(t=>r`
            <tr>
              <td>${t.index}</td>
              <td>${t.player}</td>
              <td>${t.point}%</td>
            </tr>
          `))}
      </table>
      <h2>トップ率</h2>
      <table>
        <tr>
          <th>順位</th>
          <th>プレイヤー</th>
          <th>トップ率</th>
        </tr>
        ${d(this.topRate,(t=>r`
            <tr>
              <td>${t.index}</td>
              <td>${t.player}</td>
              <td>${t.point}%</td>
            </tr>
          `))}
      </table>
      <h2>役満</h2>
      <table>
        ${0===this.yakumanList.length?r`<tr>
              <td>なし</td>
            </tr>`:r`
              <tr>
                <th>日付</th>
                <th>プレイヤー</th>
                <th>役満</th>
              </tr>
            `}
        ${d(this.yakumanList,(t=>r`
            <tr>
              <td>${t.date}</td>
              <td>${t.player}</td>
              <td>${t.yakuman}</td>
            </tr>
          `))}
      </table>
      <mahjong-versus></mahjong-versus>
    `}constructor(){super(),this.distinctYears=[],this.totalPoints=[],this.maxPoints=[],this.avoidLast=[],this.topRate=[],this.yakumanList=[],this._loadData()}async _changeGame(){await this._loadData(),this._updateVersusData()}async _changeYear(){await this._loadData(),this._updateVersusData()}_updateVersusData(){const t=this._gameType.value||"四麻",e=Number(this._targetYear.value)||(new Date).getFullYear();this._versus?.updateData(t,e)}async _loadData(){const t=(await a(o(n,"results"))).docs,e=[],s=[],r=[],i=this._gameType.value||"四麻",h=Number(this._targetYear.value)||(new Date).getFullYear();t.forEach((t=>{if(t.data().gameInfo.gameType!==i||new Date(t.data().gameInfo.date).getFullYear()!==h)return;const a=t.data().results;e.push(...a);const o=t.data().chonbo;o?.length>0&&s.push(...o);const n=t.data().yakuman;if(n?.length>0){const e=n.map((e=>({...e,date:t.data().gameInfo.date})));r.push(...e)}})),this._setDistinctYears(t),this._setTotalPoint(e,s),this._setMaxPoint(e),this._setAvoidLast(e),this._setTopRate(e),this._setYakuman(r)}_setDistinctYears(t){const e=t.map((t=>new Date(t.data().gameInfo.date).getFullYear()));this.distinctYears=l(e).sort(((t,e)=>e-t))}_setTotalPoint(t,e){const s=new Map;t.forEach((t=>{const{player:e,point:r}=t;if(s.has(e)){const t=(10*(s.get(e)||0)+10*r)/10;s.set(e,t)}else s.set(e,r)})),e.forEach((t=>{const{player:e,point:r}=t;if(s.has(e)){const t=(10*(s.get(e)||0)+10*r)/10;s.set(e,t)}}));const r=Array.from(s.entries()).sort(((t,e)=>e[1]-t[1]));this.totalPoints=r.map(((t,e)=>({index:e+1,player:t[0],point:t[1]})))}_setMaxPoint(t){const e=new Map;t.forEach((t=>{const{player:s,point:r}=t;if(e.has(s)){r>(e.get(s)||0)&&e.set(s,Number(r.toFixed(1)))}else e.set(s,Number(r.toFixed(1)))}));const s=Array.from(e.entries()).sort(((t,e)=>e[1]-t[1]));this.maxPoints=s.map(((t,e)=>({index:e+1,player:t[0],point:t[1]})))}_calcRankRate(t,e,s,r){const i=new Map;t.forEach((({player:t,rank:s})=>{const r=i.get(t)??{plays:0,count:0};i.set(t,{plays:r.plays+1,count:r.count+(s===e?1:0)})}));const a=Array.from(i.entries()).sort(((t,e)=>{const r=t[1].count/t[1].plays,i=e[1].count/e[1].plays;return s?r-i:i-r}));return a.map(((t,e)=>({index:e+1,player:t[0],point:r(t[1].count,t[1].plays)})))}_setAvoidLast(t){const e="四麻"===this._gameType.value?4:3;this.avoidLast=this._calcRankRate(t,e,!0,((t,e)=>c(100-t/e*100)))}_setTopRate(t){this.topRate=this._calcRankRate(t,1,!1,((t,e)=>c(t/e*100)))}_setYakuman(t){this.yakumanList=t}};v.styles=[t`
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
    `],m([i({type:Array})],v.prototype,"distinctYears",void 0),m([i({type:Array})],v.prototype,"totalPoints",void 0),m([i({type:Array})],v.prototype,"maxPoints",void 0),m([i({type:Array})],v.prototype,"avoidLast",void 0),m([i({type:Array})],v.prototype,"topRate",void 0),m([i({type:Array})],v.prototype,"yakumanList",void 0),m([h("#gameType")],v.prototype,"_gameType",void 0),m([h("#targetYear")],v.prototype,"_targetYear",void 0),m([h("mahjong-versus")],v.prototype,"_versus",void 0),v=m([e("mahjong-stats")],v);export{v as MahjongStats};
