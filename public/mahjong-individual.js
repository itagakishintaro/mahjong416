import{i as t,t as e,h as d,k as s}from"./custom-element-6f1a92a3.js";import{n as a,e as i}from"./select-option-ec247a15.js";import{o}from"./map-7f5238f0.js";import{g as n,c as r,d as l}from"./firestore-4afe899e.js";var c=function(t,e,d,s){for(var a,i=arguments.length,o=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,d):s,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(i<3?a(o):i>3?a(e,d,o):a(e,d))||o);return i>3&&o&&Object.defineProperty(e,d,o),o};let h=class extends d{render(){return s`
      <h1>個人成績</h1>
      <md-outlined-select
        required
        id="player"
        class="mdc-select"
        @change="${this._changePlayer}"
      >
        ${o(this.players,(t=>s`<md-select-option value="${t}"
            >${t}</md-select-option
          >`))}
      </md-outlined-select>
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
        ${o(this.distinctYears,(t=>{if(t!==(new Date).getFullYear())return s`<md-select-option value="${t}"
            >${t}</md-select-option
          >`}))}
      </md-outlined-select>

      <h2>基本情報</h2>
      <dt>総ゲーム数</dt>
      <dd>${this.playerData.totalGames}</dd>
      <dt>1位率</dt>
      <dd>${(100*this.playerData.firstRate).toFixed(2)}%</dd>
      <dt>2位率</dt>
      <dd>${(100*this.playerData.secondRate).toFixed(2)}%</dd>
      <dt>3位率</dt>
      <dd>${(100*this.playerData.thirdRate).toFixed(2)}%</dd>
      ${this.getFourthRate()}
      <dt>平均順位</dt>
      <dd>${this.playerData.averageRank.toFixed(2)}</dd>
      <dt>総合ポイント</dt>
      <dd>
        ${Math.round(10*this.playerData.totalPoints)/10}（内チョンボ：${Math.round(10*this.playerData.chonbo)/10}）
      </dd>
      <dt>最高得点</dt>
      <dd>${this.playerData.maxPoint}</dd>
      <dt>平均得点</dt>
      <dd>${this.playerData.averagePoint.toFixed(2)}</dd>
    `}constructor(){super(),this.distinctYears=[],this.players=[],this.playerData={totalGames:0,firstRate:0,secondRate:0,thirdRate:0,fourthRate:0,averageRank:0,totalPoints:0,point:0,chonbo:0,maxPoint:0,averagePoint:0},this._loadData()}_changeGame(){this._loadData()}_changeYear(){this._loadData()}_changePlayer(){this._loadData()}async _loadData(){console.log("load data");const t=(await n(r(l,"results"))).docs,e=[],d=[],s=this._gameType.value||"四麻",a=Number(this._targetYear.value)||(new Date).getFullYear();t.forEach((t=>{if(t.data().gameInfo.gameType!==s||new Date(t.data().gameInfo.date).getFullYear()!==a)return;const i=t.data().results;e.push(...i);const o=t.data().chonbo;o?.length>0&&d.push(...o)})),this._setDistinctYears(t),this._setPlayers(t),this._player.value&&this._setPlayerData(e,d)}_setDistinctYears(t){const e=t.map((t=>new Date(t.data().gameInfo.date).getFullYear())),d=[...new Set(e)];this.distinctYears=d}_setPlayers(t){const e=[];t.forEach((t=>{const d=t.data().gameInfo.players;e.push(...d)}));const d=[...new Set(e)];this.players=d}_setPlayerData(t,e){const d=this._player.value,s=t.filter((t=>t.player===d)),a=e.filter((t=>t.player===d)),i=s.length,o=s.filter((t=>1===t.rank)).length/i,n=s.filter((t=>2===t.rank)).length/i,r=s.filter((t=>3===t.rank)).length/i,l=s.filter((t=>4===t.rank)).length/i,c=s.reduce(((t,e)=>t+e.rank),0)/i,h=s.reduce(((t,e)=>t+e.point),0),m=a.reduce(((t,e)=>t+e.point),0),p=h+m,u=Math.max(...s.map((t=>t.point))),v=s.reduce(((t,e)=>t+e.point),0)/i;this.playerData={totalGames:i,firstRate:o,secondRate:n,thirdRate:r,fourthRate:l,averageRank:c,totalPoints:p,point:h,chonbo:m,maxPoint:u,averagePoint:v}}getFourthRate(){if("四麻"===this._gameType?.value)return s`<dt>4位率</dt>
        <dd>${(100*this.playerData.fourthRate).toFixed(2)}%</dd>`}};h.styles=[t`
    md-outlined-select {
      min-width: calc(50% - 1rem);
    }
  `],c([a({type:Array})],h.prototype,"distinctYears",void 0),c([a({type:Array})],h.prototype,"players",void 0),c([a({type:Object})],h.prototype,"playerData",void 0),c([i("#gameType")],h.prototype,"_gameType",void 0),c([i("#targetYear")],h.prototype,"_targetYear",void 0),c([i("#player")],h.prototype,"_player",void 0),h=c([e("mahjong-individual")],h);export{h as MahjongIndividual};
