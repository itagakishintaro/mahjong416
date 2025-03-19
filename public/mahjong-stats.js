import{i as t,t as e,h as s,k as a}from"./custom-element-6f1a92a3.js";import{n as i,e as r}from"./select-option-ec247a15.js";import{o}from"./map-7f5238f0.js";import{g as n,c as d,d as h}from"./firestore-724ae668.js";var l=function(t,e,s,a){for(var i,r=arguments.length,o=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,s):a,n=t.length-1;n>=0;n--)(i=t[n])&&(o=(r<3?i(o):r>3?i(e,s,o):i(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o};let c=class extends s{render(){return a`
      <h2>対戦成績</h2>
      <div class="table-container">
        <table class="versus-table">
          <tr>
            <th></th>
            ${o(this.players,(t=>a`<th>${t}</th>`))}
          </tr>
          ${o(this.players,(t=>a`
            <tr>
              <th>${t}</th>
              ${o(this.players,(e=>{if(t===e)return a`<td>-</td>`;const s=this.versusData.find((s=>s.player1===t&&s.player2===e||s.player1===e&&s.player2===t));if(!s)return a`<td>-</td>`;const i=s.player1===t?s.pointDiff:-s.pointDiff;return a`
                  <td class="${i>0?"positive":"negative"}">
                    ${i.toFixed(1)}
                    <br>
                    (${s.games}戦)
                  </td>
                `}))}
            </tr>
          `))}
        </table>
      </div>
    `}constructor(){super(),this.players=[],this.versusData=[],this.gameType="四麻",this.targetYear=(new Date).getFullYear(),this._loadData()}updateData(t,e){this.gameType=t,this.targetYear=e,this._loadData()}async _loadData(){const t=(await n(d(h,"results"))).docs.filter((t=>{const e=t.data();return e.gameInfo.gameType===this.gameType&&new Date(e.gameInfo.date).getFullYear()===this.targetYear})),e=[];t.forEach((t=>{const s=t.data().gameInfo.players;e.push(...s)})),this.players=[...new Set(e)];const s=[];for(let e=0;e<this.players.length;e++)for(let a=e+1;a<this.players.length;a++){const i=this.players[e],r=this.players[a],o=t.filter((t=>{const e=t.data();return e.gameInfo.players.includes(i)&&e.gameInfo.players.includes(r)}));if(o.length>0){let t=0;o.forEach((e=>{const s=e.data().results,a=s.find((t=>t.player===i)),o=s.find((t=>t.player===r));t+=a.point-o.point})),s.push({player1:i,player2:r,games:o.length,pointDiff:t})}}this.versusData=s}};c.styles=t`
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
  `,l([i({type:Array})],c.prototype,"players",void 0),l([i({type:Array})],c.prototype,"versusData",void 0),l([i({type:String})],c.prototype,"gameType",void 0),l([i({type:Number})],c.prototype,"targetYear",void 0),l([r("#gameType")],c.prototype,"_gameType",void 0),c=l([e("mahjong-versus")],c);var p=function(t,e,s,a){for(var i,r=arguments.length,o=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,s):a,n=t.length-1;n>=0;n--)(i=t[n])&&(o=(r<3?i(o):r>3?i(e,s,o):i(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o};let u=class extends s{render(){return a`
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
        ${o(this.distinctYears,(t=>{if(t!==(new Date).getFullYear())return a`<md-select-option value="${t}"
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
        ${o(this.totalPoints,(t=>a`
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
        ${o(this.maxPoints,(t=>a`
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
        ${o(this.avoidLast,(t=>a`
            <tr>
              <td>${t.index}</td>
              <td>${t.player}</td>
              <td>${t.point}%</td>
            </tr>
          `))}
      </table>
      <h2>役満</h2>
      <table>
        ${0===this.yakumanList.length?a`<tr>
              <td>なし</td>
            </tr>`:a`
              <tr>
                <th>日付</th>
                <th>プレイヤー</th>
                <th>役満</th>
              </tr>
            `}
        ${o(this.yakumanList,(t=>a`
            <tr>
              <td>${t.date}</td>
              <td>${t.player}</td>
              <td>${t.yakuman}</td>
            </tr>
          `))}
      </table>
      <mahjong-versus></mahjong-versus>
    `}constructor(){super(),this.distinctYears=[],this.totalPoints=[],this.maxPoints=[],this.avoidLast=[],this.yakumanList=[],this._loadData()}async _changeGame(){await this._loadData(),this._updateVersusData()}async _changeYear(){await this._loadData(),this._updateVersusData()}_updateVersusData(){const t=this._gameType.value||"四麻",e=Number(this._targetYear.value)||(new Date).getFullYear();this._versus?.updateData(t,e)}async _loadData(){const t=(await n(d(h,"results"))).docs,e=[],s=[],a=[],i=this._gameType.value||"四麻",r=Number(this._targetYear.value)||(new Date).getFullYear();t.forEach((t=>{if(t.data().gameInfo.gameType!==i||new Date(t.data().gameInfo.date).getFullYear()!==r)return;const o=t.data().results;e.push(...o);const n=t.data().chonbo;n?.length>0&&s.push(...n);const d=t.data().yakuman;if(d?.length>0){const e=d.map((e=>({...e,date:t.data().gameInfo.date})));a.push(...e)}})),this._setDistinctYears(t),this._setTotalPoint(e,s),this._setMaxPoint(e),this._setAvoidLast(e),this._setYakuman(a)}_setDistinctYears(t){const e=t.map((t=>new Date(t.data().gameInfo.date).getFullYear())),s=[...new Set(e)];this.distinctYears=s}_setTotalPoint(t,e){const s=new Map;t.forEach((t=>{const{player:e,point:a}=t;if(s.has(e)){const t=(10*(s.get(e)||0)+10*a)/10;s.set(e,t)}else s.set(e,a)})),e.forEach((t=>{const{player:e,point:a}=t;if(s.has(e)){const t=(10*(s.get(e)||0)+10*a)/10;s.set(e,t)}}));const a=Array.from(s.entries()).sort(((t,e)=>e[1]-t[1]));this.totalPoints=a.map(((t,e)=>({index:e+1,player:t[0],point:t[1]})))}_setMaxPoint(t){const e=new Map;t.forEach((t=>{const{player:s,point:a}=t;if(e.has(s)){a>(e.get(s)||0)&&e.set(s,Number(a.toFixed(1)))}else e.set(s,Number(a.toFixed(1)))}));const s=Array.from(e.entries()).sort(((t,e)=>e[1]-t[1]));this.maxPoints=s.map(((t,e)=>({index:e+1,player:t[0],point:t[1]})))}_setAvoidLast(t){const e=new Map,s="四麻"===this._gameType.value?4:3;t.forEach((t=>{const{player:a,rank:i}=t;if(e.has(a)){const t=e.get(a)||{plays:0,last:0};i===s?e.set(a,{plays:t.plays+1,last:t.last+1}):e.set(a,{plays:t.plays+1,last:t.last})}else i===s?e.set(a,{plays:1,last:1}):e.set(a,{plays:1,last:0})}));const a=Array.from(e.entries()).sort(((t,e)=>t[1].last/t[1].plays-e[1].last/e[1].plays));this.avoidLast=a.map(((t,e)=>({index:e+1,player:t[0],point:Math.round(10*(100-t[1].last/t[1].plays*100))/10})))}_setYakuman(t){this.yakumanList=t}};u.styles=[t`
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
    `],p([i({type:Array})],u.prototype,"distinctYears",void 0),p([i({type:Array})],u.prototype,"totalPoints",void 0),p([i({type:Array})],u.prototype,"maxPoints",void 0),p([i({type:Array})],u.prototype,"avoidLast",void 0),p([i({type:Array})],u.prototype,"yakumanList",void 0),p([r("#gameType")],u.prototype,"_gameType",void 0),p([r("#targetYear")],u.prototype,"_targetYear",void 0),p([r("mahjong-versus")],u.prototype,"_versus",void 0),u=p([e("mahjong-stats")],u);export{u as MahjongStats};
