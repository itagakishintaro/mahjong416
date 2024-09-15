import{i as t,n as e,e as d,t as s,h as a,k as i}from"./select-option-2c22287d.js";import{o}from"./map-7f5238f0.js";import{g as n,c as r,d as l}from"./firestore-724ae668.js";var c=function(t,e,d,s){for(var a,i=arguments.length,o=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,d):s,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(i<3?a(o):i>3?a(e,d,o):a(e,d))||o);return i>3&&o&&Object.defineProperty(e,d,o),o};let h=class extends a{render(){return i`
      <h1>個人成績</h1>
      <md-outlined-select
        required
        id="player"
        class="mdc-select"
        @change="${this._changePlayer}"
      >
        ${o(this.players,(t=>i`<md-select-option value="${t}"
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
        ${o(this.distinctYears,(t=>{if(t!==(new Date).getFullYear())return i`<md-select-option value="${t}"
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
      <dd>${Math.round(10*this.playerData.totalPoints)/10}</dd>
      <dt>最高得点</dt>
      <dd>${this.playerData.maxPoint}</dd>
      <dt>平均得点</dt>
      <dd>${this.playerData.averagePoint.toFixed(2)}</dd>
    `}constructor(){super(),this.distinctYears=[],this.players=[],this.playerData={totalGames:0,firstRate:0,secondRate:0,thirdRate:0,fourthRate:0,averageRank:0,totalPoints:0,maxPoint:0,averagePoint:0},this._loadData()}_changeGame(){this._loadData()}_changeYear(){this._loadData()}_changePlayer(){this._loadData()}async _loadData(){console.log("load data");const t=(await n(r(l,"results"))).docs,e=[],d=this._gameType.value||"四麻",s=Number(this._targetYear.value)||(new Date).getFullYear();t.forEach((t=>{if(t.data().gameInfo.gameType!==d||new Date(t.data().gameInfo.date).getFullYear()!==s)return;const a=t.data().results;e.push(...a)})),this._setDistinctYears(t),this._setPlayers(t),this._player.value&&this._setPlayerData(e)}_setDistinctYears(t){const e=t.map((t=>new Date(t.data().gameInfo.date).getFullYear())),d=[...new Set(e)];this.distinctYears=d}_setPlayers(t){const e=[];t.forEach((t=>{const d=t.data().gameInfo.players;e.push(...d)}));const d=[...new Set(e)];this.players=d}_setPlayerData(t){const e=this._player.value,d=t.filter((t=>t.player===e)),s=d.length,a=d.filter((t=>1===t.rank)).length/s,i=d.filter((t=>2===t.rank)).length/s,o=d.filter((t=>3===t.rank)).length/s,n=d.filter((t=>4===t.rank)).length/s,r=d.reduce(((t,e)=>t+e.rank),0)/s,l=d.reduce(((t,e)=>t+e.point),0),c=Math.max(...d.map((t=>t.point))),h=d.reduce(((t,e)=>t+e.point),0)/s;this.playerData={totalGames:s,firstRate:a,secondRate:i,thirdRate:o,fourthRate:n,averageRank:r,totalPoints:l,maxPoint:c,averagePoint:h}}getFourthRate(){if("四麻"===this._gameType?.value)return i`<dt>4位率</dt>
        <dd>${(100*this.playerData.fourthRate).toFixed(2)}%</dd>`}};h.styles=[t`
      md-outlined-select {
        min-width: calc(50% - 1rem);
      }
    `],c([e({type:Array})],h.prototype,"distinctYears",void 0),c([e({type:Array})],h.prototype,"players",void 0),c([e({type:Object})],h.prototype,"playerData",void 0),c([d("#gameType")],h.prototype,"_gameType",void 0),c([d("#targetYear")],h.prototype,"_targetYear",void 0),c([d("#player")],h.prototype,"_player",void 0),h=c([s("mahjong-individual")],h);export{h as MahjongIndividual};
