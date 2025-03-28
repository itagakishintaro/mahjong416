import{i as t,t as e,h as s,k as i}from"./custom-element-6f1a92a3.js";import{n as r}from"./tslib.es6-0fe1dd1f.js";import{e as a}from"./select-option-960bdd27.js";import{o}from"./map-7f5238f0.js";import{g as n,c as d,d as h}from"./firestore-4afe899e.js";var l=function(t,e,s,i){for(var r,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i,n=t.length-1;n>=0;n--)(r=t[n])&&(o=(a<3?r(o):a>3?r(e,s,o):r(e,s))||o);return a>3&&o&&Object.defineProperty(e,s,o),o};let c=class extends s{render(){return i`
      <h2>対戦成績</h2>
      <div class="table-container">
        <table class="versus-table">
          <tr>
            <th></th>
            ${o(this.players,(t=>i`<th>${t}</th>`))}
          </tr>
          ${o(this.players,(t=>i`
              <tr>
                <th>${t}</th>
                ${o(this.players,(e=>{if(t===e)return i`<td>-</td>`;const s=this.versusData.find((s=>s.player1===t&&s.player2===e||s.player1===e&&s.player2===t));if(!s)return i`<td>-</td>`;const r=s.player1===t?s.pointDiff:-s.pointDiff;return i`
                    <td class="${r>0?"positive":"negative"}">
                      ${r.toFixed(1)}
                      <br />
                      (${s.games}戦)
                    </td>
                  `}))}
              </tr>
            `))}
        </table>
      </div>
    `}constructor(){super(),this.players=[],this.versusData=[],this.gameType="四麻",this.targetYear=(new Date).getFullYear(),this._loadData()}updateData(t,e){this.gameType=t,this.targetYear=e,this._loadData()}async _loadData(){const t=(await n(d(h,"results"))).docs.filter((t=>{const e=t.data();return e.gameInfo.gameType===this.gameType&&new Date(e.gameInfo.date).getFullYear()===this.targetYear})),e=[];t.forEach((t=>{const s=t.data().gameInfo.players;e.push(...s)})),this.players=[...new Set(e)];const s=[];for(let e=0;e<this.players.length;e++)for(let i=e+1;i<this.players.length;i++){const r=this.players[e],a=this.players[i],o=t.filter((t=>{const e=t.data();return e.gameInfo.players.includes(r)&&e.gameInfo.players.includes(a)}));if(o.length>0){let t=0;o.forEach((e=>{const s=e.data().results,i=s.find((t=>t.player===r)),o=s.find((t=>t.player===a));i&&o&&(t+=i.point-o.point)})),s.push({player1:r,player2:a,games:o.length,pointDiff:t})}}this.versusData=s}};c.styles=t`
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
`,l([r({type:Array})],c.prototype,"players",void 0),l([r({type:Array})],c.prototype,"versusData",void 0),l([r({type:String})],c.prototype,"gameType",void 0),l([r({type:Number})],c.prototype,"targetYear",void 0),l([a("#gameType")],c.prototype,"_gameType",void 0),c=l([e("mahjong-versus")],c);var p=function(t,e,s,i){for(var r,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i,n=t.length-1;n>=0;n--)(r=t[n])&&(o=(a<3?r(o):a>3?r(e,s,o):r(e,s))||o);return a>3&&o&&Object.defineProperty(e,s,o),o};let u=class extends s{render(){return i`
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
        ${o(this.distinctYears,(t=>{if(t!==(new Date).getFullYear())return i`<md-select-option value="${t}"
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
        ${o(this.totalPoints,(t=>i`
            <tr>
              <td>${t.index}</td>
              <td>${t.player}</td>
              <td>${Math.round(10*t.point)/10}</td>
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
        ${o(this.maxPoints,(t=>i`
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
        ${o(this.avoidLast,(t=>i`
            <tr>
              <td>${t.index}</td>
              <td>${t.player}</td>
              <td>${t.point}%</td>
            </tr>
          `))}
      </table>
      <h2>役満</h2>
      <table>
        ${0===this.yakumanList.length?i`<tr>
              <td>なし</td>
            </tr>`:i`
              <tr>
                <th>日付</th>
                <th>プレイヤー</th>
                <th>役満</th>
              </tr>
            `}
        ${o(this.yakumanList,(t=>i`
            <tr>
              <td>${t.date}</td>
              <td>${t.player}</td>
              <td>${t.yakuman}</td>
            </tr>
          `))}
      </table>
      <mahjong-versus></mahjong-versus>
    `}constructor(){super(),this.distinctYears=[],this.totalPoints=[],this.maxPoints=[],this.avoidLast=[],this.yakumanList=[],this._loadData()}async _changeGame(){await this._loadData(),this._updateVersusData()}async _changeYear(){await this._loadData(),this._updateVersusData()}_updateVersusData(){const t=this._gameType.value||"四麻",e=Number(this._targetYear.value)||(new Date).getFullYear();this._versus?.updateData(t,e)}async _loadData(){const t=(await n(d(h,"results"))).docs,e=[],s=[],i=[],r=this._gameType.value||"四麻",a=Number(this._targetYear.value)||(new Date).getFullYear();t.forEach((t=>{if(t.data().gameInfo.gameType!==r||new Date(t.data().gameInfo.date).getFullYear()!==a)return;const o=t.data().results;e.push(...o);const n=t.data().chonbo;n?.length>0&&s.push(...n);const d=t.data().yakuman;if(d?.length>0){const e=d.map((e=>({...e,date:t.data().gameInfo.date})));i.push(...e)}})),this._setDistinctYears(t),this._setTotalPoint(e,s),this._setMaxPoint(e),this._setAvoidLast(e),this._setYakuman(i)}_setDistinctYears(t){const e=t.map((t=>new Date(t.data().gameInfo.date).getFullYear())),s=[...new Set(e)];this.distinctYears=s}_setTotalPoint(t,e){const s=new Map;t.forEach((t=>{const{player:e,point:i}=t;if(s.has(e)){const t=(10*(s.get(e)||0)+10*i)/10;s.set(e,t)}else s.set(e,i)})),e.forEach((t=>{const{player:e,point:i}=t;if(s.has(e)){const t=(10*(s.get(e)||0)+10*i)/10;s.set(e,t)}}));const i=Array.from(s.entries()).sort(((t,e)=>e[1]-t[1]));this.totalPoints=i.map(((t,e)=>({index:e+1,player:t[0],point:t[1]})))}_setMaxPoint(t){const e=new Map;t.forEach((t=>{const{player:s,point:i}=t;if(e.has(s)){i>(e.get(s)||0)&&e.set(s,Number(i.toFixed(1)))}else e.set(s,Number(i.toFixed(1)))}));const s=Array.from(e.entries()).sort(((t,e)=>e[1]-t[1]));this.maxPoints=s.map(((t,e)=>({index:e+1,player:t[0],point:t[1]})))}_setAvoidLast(t){const e=new Map,s="四麻"===this._gameType.value?4:3;t.forEach((t=>{const{player:i,rank:r}=t;if(e.has(i)){const t=e.get(i)||{plays:0,last:0};r===s?e.set(i,{plays:t.plays+1,last:t.last+1}):e.set(i,{plays:t.plays+1,last:t.last})}else r===s?e.set(i,{plays:1,last:1}):e.set(i,{plays:1,last:0})}));const i=Array.from(e.entries()).sort(((t,e)=>t[1].last/t[1].plays-e[1].last/e[1].plays));this.avoidLast=i.map(((t,e)=>({index:e+1,player:t[0],point:Math.round(10*(100-t[1].last/t[1].plays*100))/10})))}_setYakuman(t){this.yakumanList=t}};u.styles=[t`
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
  `],p([r({type:Array})],u.prototype,"distinctYears",void 0),p([r({type:Array})],u.prototype,"totalPoints",void 0),p([r({type:Array})],u.prototype,"maxPoints",void 0),p([r({type:Array})],u.prototype,"avoidLast",void 0),p([r({type:Array})],u.prototype,"yakumanList",void 0),p([a("#gameType")],u.prototype,"_gameType",void 0),p([a("#targetYear")],u.prototype,"_targetYear",void 0),p([a("mahjong-versus")],u.prototype,"_versus",void 0),u=p([e("mahjong-stats")],u);export{u as MahjongStats};
