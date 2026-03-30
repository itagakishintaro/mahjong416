import{a as t,t as e,i,b as s}from"./custom-element-BXQNS_jb.js";import{r as d,n as l,a as o,c as n,d as a}from"./firestore-BEkXhs6K.js";import{e as r}from"./select-option-BZcZE8K1.js";import{c as h}from"./calc-sub-styles-TXa5v11K.js";import"./pf-accordion-Bi6UiB7j.js";var c=function(t,e,i,s){for(var d,l=arguments.length,o=l<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,n=t.length-1;n>=0;n--)(d=t[n])&&(o=(l<3?d(o):l>3?d(e,i,o):d(e,i))||o);return l>3&&o&&Object.defineProperty(e,i,o),o};let m=class extends i{constructor(){super(...arguments),this._rows=[{player:"",point:"-20"}]}_addRow(){this._rows=[...this._rows,{player:"",point:"-20"}]}_removeRow(t){this._rows=this._rows.filter(((e,i)=>i!==t))}_patchRow(t,e,i){this._rows=this._rows.map(((s,d)=>d===t?{...s,[e]:i}:s))}getChonbo(){return this._rows.filter((t=>""!==t.player.trim())).map((t=>({player:t.player.trim(),point:Number(t.point)})))}reset(){this._rows=[{player:"",point:"-20"}]}render(){return s`
      <pf-accordion>
        <pf-accordion-header>
          <h2>チョンボ</h2>
        </pf-accordion-header>
        <pf-accordion-panel>
          ${this._rows.map(((t,e)=>s`
              <div class="row-actions">
                <md-outlined-text-field
                  label="プレイヤー"
                  class="width-50"
                  type="text"
                  .value=${t.player}
                  @input=${t=>{const i=t.currentTarget;this._patchRow(e,"player",i.value)}}
                ></md-outlined-text-field>
                <md-outlined-text-field
                  label="罰符"
                  class="width-30"
                  type="number"
                  .value=${t.point}
                  @input=${t=>{const i=t.currentTarget;this._patchRow(e,"point",i.value)}}
                ></md-outlined-text-field>
                ${this._rows.length>1?s`
                      <md-icon-button
                        type="button"
                        aria-label="行を削除"
                        @click=${()=>this._removeRow(e)}
                      >
                        <svg
                          class="row-icon-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                          />
                        </svg>
                      </md-icon-button>
                    `:""}
              </div>
            `))}
          <md-icon-button
            type="button"
            aria-label="行を追加"
            @click=${this._addRow}
          >
            <svg
              class="row-icon-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </md-icon-button>
        </pf-accordion-panel>
      </pf-accordion>
    `}};m.styles=[h,t`
      .row-actions {
        display: flex;
        align-items: center;
      }
      md-icon-button {
        --md-icon-button-icon-size: 20px;
      }
      .row-icon-svg {
        display: block;
        width: 20px;
        height: 20px;
        fill: currentColor;
      }
    `],c([d()],m.prototype,"_rows",void 0),m=c([e("mahjong-calc-chonbo")],m);var u=function(t,e,i,s){for(var d,l=arguments.length,o=l<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,n=t.length-1;n>=0;n--)(d=t[n])&&(o=(l<3?d(o):l>3?d(e,i,o):d(e,i))||o);return l>3&&o&&Object.defineProperty(e,i,o),o};let p=class extends i{constructor(){super(...arguments),this._rows=[{player:"",yakuman:""}]}_addRow(){this._rows=[...this._rows,{player:"",yakuman:""}]}_removeRow(t){this._rows=this._rows.filter(((e,i)=>i!==t))}_patchRow(t,e,i){this._rows=this._rows.map(((s,d)=>d===t?{...s,[e]:i}:s))}getYakuman(){return this._rows.filter((t=>""!==t.player.trim())).map((t=>({player:t.player.trim(),yakuman:t.yakuman.trim()})))}reset(){this._rows=[{player:"",yakuman:""}]}render(){return s`
      <pf-accordion>
        <pf-accordion-header>
          <h2>役満</h2>
        </pf-accordion-header>
        <pf-accordion-panel>
          ${this._rows.map(((t,e)=>s`
              <div class="row-actions">
                <md-outlined-text-field
                  label="プレイヤー"
                  class="width-50"
                  type="text"
                  .value=${t.player}
                  @input=${t=>{const i=t.currentTarget;this._patchRow(e,"player",i.value)}}
                ></md-outlined-text-field>
                <md-outlined-text-field
                  label="役満"
                  class="width-30"
                  type="text"
                  .value=${t.yakuman}
                  @input=${t=>{const i=t.currentTarget;this._patchRow(e,"yakuman",i.value)}}
                ></md-outlined-text-field>
                ${this._rows.length>1?s`
                      <md-icon-button
                        type="button"
                        aria-label="行を削除"
                        @click=${()=>this._removeRow(e)}
                      >
                        <svg
                          class="row-icon-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                          />
                        </svg>
                      </md-icon-button>
                    `:""}
              </div>
            `))}
          <md-icon-button
            type="button"
            aria-label="行を追加"
            @click=${this._addRow}
          >
            <svg
              class="row-icon-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </md-icon-button>
        </pf-accordion-panel>
      </pf-accordion>
    `}};p.styles=[h,t`
      .row-actions {
        display: flex;
        align-items: center;
      }
      md-icon-button {
        --md-icon-button-icon-size: 20px;
      }
      .row-icon-svg {
        display: block;
        width: 20px;
        height: 20px;
        fill: currentColor;
      }
    `],u([d()],p.prototype,"_rows",void 0),p=u([e("mahjong-calc-yakuman")],p);var f=function(t,e,i,s){for(var d,l=arguments.length,o=l<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,n=t.length-1;n>=0;n--)(d=t[n])&&(o=(l<3?d(o):l>3?d(e,i,o):d(e,i))||o);return l>3&&o&&Object.defineProperty(e,i,o),o};let v=class extends i{render(){return s`
      <pf-accordion>
        <pf-accordion-header>
          <h2>日付、順序キー</h2>
        </pf-accordion-header>
        <pf-accordion-panel>
          <md-filled-text-field
            id="date"
            label="日付"
            class="width-50"
            type="date"
            value="${(new Date).toISOString().split("T")[0]}"
          >
          </md-filled-text-field>
          <md-filled-text-field
            id="order"
            label="順序キー"
            class="width-50"
            type="text"
            value="${(new Date).getTime()}"
          >
          </md-filled-text-field>
        </pf-accordion-panel>
      </pf-accordion>
    `}};v.styles=[t`
      .width-50 {
        width: calc(50% - 1rem);
        margin-bottom: 0.5em;
      }
    `],v=f([e("mahjong-calc-date-and-key")],v);var b=function(t,e,i,s){for(var d,l=arguments.length,o=l<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,n=t.length-1;n>=0;n--)(d=t[n])&&(o=(l<3?d(o):l>3?d(e,i,o):d(e,i))||o);return l>3&&o&&Object.defineProperty(e,i,o),o};let y=class extends i{constructor(){super(...arguments),this.isPointCheckError=!0}render(){return s`
      <h1>点数計算</h1>

      <md-outlined-select required id="gameType" @change="${this._changeGame}">
        <md-select-option selected value="四麻">
          <div slot="headline">四麻</div>
        </md-select-option>
        <md-select-option value="三麻">
          <div slot="headline">三麻</div>
        </md-select-option>
      </md-outlined-select>

      <pf-accordion>
        <pf-accordion-header>
          <h2>設定</h2>
        </pf-accordion-header>
        <pf-accordion-panel>
          <div>
            <md-outlined-text-field
              id="initialPoint"
              class="width-50"
              label="初期点"
              type="number"
              value="25000"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="oka"
              class="width-50"
              label="オカ"
              type="number"
              value="30000"
              required
            ></md-outlined-text-field>
          </div>
          <div>
            <md-outlined-text-field
              id="firstUma"
              class="width-50"
              label="1着"
              type="number"
              value="50"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="secondUma"
              class="width-50"
              label="2着"
              type="number"
              value="10"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="thirdUma"
              class="width-50"
              label="3着"
              type="number"
              value="-10"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="fourthUma"
              class="width-50"
              label="4着"
              type="number"
              value="-30"
              required
            ></md-outlined-text-field>
          </div>
        </pf-accordion-panel>
      </pf-accordion>
      <div class="results">
        <h2>結果</h2>

        <!-- 日付、順序キー -->
        <mahjong-calc-date-and-key></mahjong-calc-date-and-key>
        <!-- チョンボ -->
        <mahjong-calc-chonbo></mahjong-calc-chonbo>
        <!-- 役満 -->
        <mahjong-calc-yakuman></mahjong-calc-yakuman>
        <div>
          <md-outlined-text-field
            id="firstPlayer"
            label="1位"
            class="width-30"
            type="text"
            value=""
          >
          </md-outlined-text-field>
          <md-outlined-text-field
            id="firstScore"
            label="得点"
            class="width-30"
            type="number"
            value=""
            @blur="${this._calcPoint}"
          >
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field
            id="firstPoint"
            label="ポイント"
            class="width-30"
            type="number"
            step="0.1"
            value=""
            disabled
          >
          </md-outlined-text-field>
        </div>
        <div>
          <md-outlined-text-field
            id="secondPlayer"
            label="2位"
            class="width-30"
            type="text"
            value=""
          >
          </md-outlined-text-field>
          <md-outlined-text-field
            id="secondScore"
            label="得点"
            class="width-30"
            type="number"
            value=""
            @blur="${this._calcPoint}"
          >
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field
            id="secondPoint"
            label="ポイント"
            class="width-30"
            type="number"
            step="0.1"
            value=""
            disabled
          >
          </md-outlined-text-field>
        </div>
        <div>
          <md-outlined-text-field
            id="thirdPlayer"
            label="3位"
            class="width-30"
            type="text"
            value=""
          >
          </md-outlined-text-field>
          <md-outlined-text-field
            id="thirdScore"
            label="得点"
            class="width-30"
            type="number"
            value=""
            @blur="${this._calcPoint}"
          >
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field
            id="thirdPoint"
            label="ポイント"
            class="width-30"
            type="number"
            step="0.1"
            value=""
            disabled
          >
          </md-outlined-text-field>
        </div>
        <div>
          <md-outlined-text-field
            id="fourthPlayer"
            label="4位"
            class="width-30"
            type="text"
            value=""
          >
          </md-outlined-text-field>
          <md-outlined-text-field
            id="fourthScore"
            label="得点"
            class="width-30"
            type="number"
            value=""
            @blur="${this._calcPoint}"
          >
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field
            id="fourthPoint"
            label="ポイント"
            class="width-30"
            type="number"
            step="0.1"
            value=""
            disabled
          >
          </md-outlined-text-field>
        </div>

        <div class="controle">
          <md-filled-tonal-button @click="${this._resetResults}"
            >リセット</md-filled-tonal-button
          >
          <md-filled-button
            @click="${this._uploadResults}"
            ?disabled="${this.isPointCheckError}"
            >登録</md-filled-button
          >
          <md-circular-progress
            indeterminate
            id="progress"
            style="display: none"
          ></md-circular-progress>
        </div>
      </div>
    `}_calcPoint(){"三麻"===this.gameTypeElement.value?this._calc3maPoint():this._calc4maPoint(),this._setIsPointCheckError()}_calc4maPoint(){const t=this.firstScoreElement.valueAsNumber,e=this.secondScoreElement.valueAsNumber,i=this.thirdScoreElement.valueAsNumber,s=this.fourthScoreElement.valueAsNumber,d=this.firstUmaElement.valueAsNumber,l=this.secondUmaElement.valueAsNumber,o=this.thirdUmaElement.valueAsNumber,n=this.fourthUmaElement.valueAsNumber,a=this.okaElement.valueAsNumber,r=(d,l,o,n)=>{t&&(this.firstPointElement.value=String(d)),e&&(this.secondPointElement.value=String(l)),i&&(this.thirdPointElement.value=String(o)),s&&(this.fourthPointElement.value=String(n))};if(t===e&&t===i&&t===s){const e=(t-a)/1e3+(d+l+o+n)/4;r(e,e,e,e)}else if(t===e&&t===i){const e=(t-a)/1e3+(d+l+o)/3;r(e,e,e,(s-a)/1e3+n)}else if(e===i&&e===s){const i=(e-a)/1e3+(l+o+n)/3;r((t-a)/1e3+d,i,i,i)}else if(t===e){const e=(t-a)/1e3+(d+l)/2;r(e,e,(i-a)/1e3+o,(s-a)/1e3+n)}else if(e===i){const i=(e-a)/1e3+(l+o)/2;r((t-a)/1e3+d,i,i,(s-a)/1e3+n)}else if(i===s){const s=(i-a)/1e3+(o+n)/2;r((t-a)/1e3+d,(e-a)/1e3+l,s,s)}else{r((t-a)/1e3+d,(e-a)/1e3+l,(i-a)/1e3+o,(s-a)/1e3+n)}}_calc3maPoint(){const t=this.firstScoreElement.valueAsNumber,e=this.secondScoreElement.valueAsNumber,i=this.thirdScoreElement.valueAsNumber,s=this.firstUmaElement.valueAsNumber,d=this.secondUmaElement.valueAsNumber,l=this.thirdUmaElement.valueAsNumber,o=this.okaElement.valueAsNumber,n=(t,e,i)=>{this.firstPointElement.value=String(t),this.secondPointElement.value=String(e),this.thirdPointElement.value=String(i)};if(t===e&&t===i){const e=(t-o)/1e3+(s+d+l)/3;n(e,e,e)}else if(t===e){const e=(t-o)/1e3+(s+d)/2;n(e,e,(i-o)/1e3+l)}else if(e===i){const i=(e-o)/1e3+(d+l)/2;n((t-o)/1e3+s,i,i)}else{n((t-o)/1e3+s,(e-o)/1e3+d,(i-o)/1e3+l)}}_changeGame(){"三麻"===this.gameTypeElement.value?this._changeSettings(35e3,35e3,15,0,-15,0,!0):this._changeSettings(25e3,3e4,50,10,-10,-30,!1),this._resetResults()}_setIsPointCheckError(){const t="三麻"===this.gameTypeElement?.value,e=[this.firstScoreElement.valueAsNumber,this.secondScoreElement.valueAsNumber,this.thirdScoreElement.valueAsNumber];t||e.push(this.fourthScoreElement.valueAsNumber);const i=e.reduce(((t,e)=>t+e),0),s=this.initialPointElement.valueAsNumber*(t?3:4);this.isPointCheckError=!(this.initialPointElement.valueAsNumber&&i===s)}_changeSettings(t,e,i,s,d,l,o){this.initialPointElement.value=String(t),this.okaElement.value=String(e),this.firstUmaElement.value=String(i),this.secondUmaElement.value=String(s),this.thirdUmaElement.value=String(d),this.fourthUmaElement.value=String(l),o||this._clearFourth(),this._toggleFourth(o)}_clearFourth(){this.fourthPlayerElement.value="",this.fourthScoreElement.value="",this.fourthPointElement.value=""}_toggleFourth(t){this.fourthUmaElement.disabled=t,this.fourthPlayerElement.disabled=t,this.fourthScoreElement.disabled=t}_resetResults(){this.firstPlayerElement.value="",this.secondPlayerElement.value="",this.thirdPlayerElement.value="",this.fourthPlayerElement.value="",this.firstScoreElement.value="",this.secondScoreElement.value="",this.thirdScoreElement.value="",this.fourthScoreElement.value="",this.firstPointElement.value="",this.secondPointElement.value="",this.thirdPointElement.value="",this.fourthPointElement.value="",this.renderRoot?.querySelector("mahjong-calc-chonbo")?.reset(),this.renderRoot?.querySelector("mahjong-calc-yakuman")?.reset()}async _uploadResults(){let t,e;this.progressElement.style.display="block";const i=[],s=[];"四麻"===this.gameTypeElement.value?(t=[this.firstPlayerElement.value,this.secondPlayerElement.value,this.thirdPlayerElement.value,this.fourthPlayerElement.value].sort(),e=[{rank:1,player:this.firstPlayerElement.value,score:Number(this.firstScoreElement.value),point:Number(this.firstPointElement.value)},{rank:this.firstScoreElement.value===this.secondScoreElement.value?1:2,player:this.secondPlayerElement.value,score:Number(this.secondScoreElement.value),point:Number(this.secondPointElement.value)},{rank:this.firstScoreElement.value===this.thirdScoreElement.value?1:this.secondScoreElement.value===this.thirdScoreElement.value?2:3,player:this.thirdPlayerElement.value,score:Number(this.thirdScoreElement.value),point:Number(this.thirdPointElement.value)},{rank:this.firstScoreElement.value===this.fourthScoreElement.value?1:this.secondScoreElement.value===this.fourthScoreElement.value?2:this.thirdScoreElement.value===this.fourthScoreElement.value?3:4,player:this.fourthPlayerElement.value,score:Number(this.fourthScoreElement.value),point:Number(this.fourthPointElement.value)}]):(t=[this.firstPlayerElement.value,this.secondPlayerElement.value,this.thirdPlayerElement.value].sort(),e=[{rank:1,player:this.firstPlayerElement.value,score:Number(this.firstScoreElement.value),point:Number(this.firstPointElement.value)},{rank:2,player:this.secondPlayerElement.value,score:Number(this.secondScoreElement.value),point:Number(this.secondPointElement.value)},{rank:3,player:this.thirdPlayerElement.value,score:Number(this.thirdScoreElement.value),point:Number(this.thirdPointElement.value)}]);const d=this.renderRoot?.querySelector("mahjong-calc-chonbo");i.push(...d?.getChonbo()??[]);const l=this.renderRoot?.querySelector("mahjong-calc-yakuman");s.push(...l?.getYakuman()??[]);const r=this.renderRoot?.querySelector("mahjong-calc-date-and-key"),h=r?.renderRoot?.querySelector("#date"),c=r?.renderRoot?.querySelector("#order"),m={gameInfo:{date:h?.value,order:c?.value,gameType:this.gameTypeElement.value,players:t},results:e,chonbo:i,yakuman:s};try{await o(n(a,"results"),m),this.dispatchEvent(new CustomEvent("uploaded",{bubbles:!0,composed:!0}))}catch(t){console.error("Error adding document: ",t)}finally{this.progressElement.style.display="none"}}};y.styles=[t`
      .width-50 {
        width: calc(50% - 1rem);
        margin-bottom: 0.5em;
      }
      .width-30 {
        width: 30%;
        margin-bottom: 0.5em;
      }
      .results {
        margin-top: 2em;
        margin-left: 1em;
      }
      .controle {
        margin-top: 1em;
      }
      md-outlined-text-field {
        --md-outlined-field-disabled-content-opacity: 1;
      }
    `],b([l({type:Boolean})],y.prototype,"isPointCheckError",void 0),b([r("#gameType")],y.prototype,"gameTypeElement",void 0),b([r("#initialPoint")],y.prototype,"initialPointElement",void 0),b([r("#oka")],y.prototype,"okaElement",void 0),b([r("#firstUma")],y.prototype,"firstUmaElement",void 0),b([r("#secondUma")],y.prototype,"secondUmaElement",void 0),b([r("#thirdUma")],y.prototype,"thirdUmaElement",void 0),b([r("#fourthUma")],y.prototype,"fourthUmaElement",void 0),b([r("#firstPlayer")],y.prototype,"firstPlayerElement",void 0),b([r("#secondPlayer")],y.prototype,"secondPlayerElement",void 0),b([r("#thirdPlayer")],y.prototype,"thirdPlayerElement",void 0),b([r("#fourthPlayer")],y.prototype,"fourthPlayerElement",void 0),b([r("#firstScore")],y.prototype,"firstScoreElement",void 0),b([r("#secondScore")],y.prototype,"secondScoreElement",void 0),b([r("#thirdScore")],y.prototype,"thirdScoreElement",void 0),b([r("#fourthScore")],y.prototype,"fourthScoreElement",void 0),b([r("#firstPoint")],y.prototype,"firstPointElement",void 0),b([r("#secondPoint")],y.prototype,"secondPointElement",void 0),b([r("#thirdPoint")],y.prototype,"thirdPointElement",void 0),b([r("#fourthPoint")],y.prototype,"fourthPointElement",void 0),b([r("#progress")],y.prototype,"progressElement",void 0),y=b([e("mahjong-calc")],y);export{y as MahjongCalc};
