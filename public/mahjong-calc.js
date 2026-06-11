import{a as t,t as e,i,b as s}from"./custom-element-BXQNS_jb.js";import{r as l,n as d,s as o,d as n,a,b as r,c as h}from"./firestore-D_LKr_7c.js";import{e as c}from"./select-option-B1crfLlK.js";import{c as m}from"./calc-sub-styles-CIbie5BY.js";import"./pf-accordion-DQA9naLD.js";var u=function(t,e,i,s){for(var l,d=arguments.length,o=d<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,n=t.length-1;n>=0;n--)(l=t[n])&&(o=(d<3?l(o):d>3?l(e,i,o):l(e,i))||o);return d>3&&o&&Object.defineProperty(e,i,o),o};let p=class extends i{constructor(){super(...arguments),this._rows=[{player:"",point:"-20"}]}_addRow(){this._rows=[...this._rows,{player:"",point:"-20"}]}_removeRow(t){this._rows=this._rows.filter(((e,i)=>i!==t))}_patchRow(t,e,i){this._rows=this._rows.map(((s,l)=>l===t?{...s,[e]:i}:s))}getChonbo(){return this._rows.filter((t=>""!==t.player.trim())).map((t=>({player:t.player.trim(),point:Number(t.point)})))}reset(){this._rows=[{player:"",point:"-20"}]}setRows(t){this._rows=t.length>0?t.map((t=>({player:t.player,point:String(t.point)}))):[{player:"",point:"-20"}]}render(){return s`
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
    `}};p.styles=[m,t`
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
    `],u([l()],p.prototype,"_rows",void 0),p=u([e("mahjong-calc-chonbo")],p);var f=function(t,e,i,s){for(var l,d=arguments.length,o=d<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,n=t.length-1;n>=0;n--)(l=t[n])&&(o=(d<3?l(o):d>3?l(e,i,o):l(e,i))||o);return d>3&&o&&Object.defineProperty(e,i,o),o};let b=class extends i{constructor(){super(...arguments),this._rows=[{player:"",yakuman:""}]}_addRow(){this._rows=[...this._rows,{player:"",yakuman:""}]}_removeRow(t){this._rows=this._rows.filter(((e,i)=>i!==t))}_patchRow(t,e,i){this._rows=this._rows.map(((s,l)=>l===t?{...s,[e]:i}:s))}getYakuman(){return this._rows.filter((t=>""!==t.player.trim())).map((t=>({player:t.player.trim(),yakuman:t.yakuman.trim()})))}reset(){this._rows=[{player:"",yakuman:""}]}setRows(t){this._rows=t.length>0?t.map((t=>({player:t.player,yakuman:t.yakuman}))):[{player:"",yakuman:""}]}render(){return s`
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
    `}};b.styles=[m,t`
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
    `],f([l()],b.prototype,"_rows",void 0),b=f([e("mahjong-calc-yakuman")],b);var v=function(t,e,i,s){for(var l,d=arguments.length,o=d<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,n=t.length-1;n>=0;n--)(l=t[n])&&(o=(d<3?l(o):d>3?l(e,i,o):l(e,i))||o);return d>3&&o&&Object.defineProperty(e,i,o),o};let y=class extends i{render(){return s`
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
    `}getDate(){return this._dateElement?.value??""}getOrder(){return this._orderElement?.value??""}setValues(t,e){this._dateElement.value=t,this._orderElement.value=e}};y.styles=[t`
      .width-50 {
        width: calc(50% - 1rem);
        margin-bottom: 0.5em;
      }
    `],v([c("#date")],y.prototype,"_dateElement",void 0),v([c("#order")],y.prototype,"_orderElement",void 0),y=v([e("mahjong-calc-date-and-key")],y);var g=function(t,e,i,s){for(var l,d=arguments.length,o=d<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,n=t.length-1;n>=0;n--)(l=t[n])&&(o=(d<3?l(o):d>3?l(e,i,o):l(e,i))||o);return d>3&&o&&Object.defineProperty(e,i,o),o};let x=class extends i{constructor(){super(...arguments),this.isPointCheckError=!0,this.prefillData=null,this._editDocId=null,this._editLabel=""}render(){return s`
      <h1>点数計算</h1>

      ${this._editDocId?s`
            <div class="edit-banner">
              <span>編集中: ${this._editLabel}</span>
              <md-text-button @click="${this._cancelEdit}"
                >編集をキャンセル</md-text-button
              >
            </div>
          `:""}

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
            >${this._editDocId?"更新":"登録"}</md-filled-button
          >
          <md-circular-progress
            indeterminate
            id="progress"
            style="display: none"
          ></md-circular-progress>
        </div>
      </div>
    `}willUpdate(t){t.has("prefillData")&&this.prefillData&&(this._editDocId=this.prefillData.docId??null,this._editLabel=this.prefillData.date?`${this.prefillData.date} のゲーム`:"")}updated(t){t.has("prefillData")&&this.prefillData&&this._applyPrefillData(this.prefillData)}async _applyPrefillData(t){this.gameTypeElement.value=t.gameType,this._changeGame(),t.date&&t.order&&this._dateAndKeyElement&&(await this._dateAndKeyElement.updateComplete,this._dateAndKeyElement.setValues(t.date,t.order));const e=[...t.results].sort(((t,e)=>e.score-t.score)),i=[this.firstPlayerElement,this.secondPlayerElement,this.thirdPlayerElement,this.fourthPlayerElement],s=[this.firstScoreElement,this.secondScoreElement,this.thirdScoreElement,this.fourthScoreElement];e.forEach(((t,e)=>{i[e].value=t.player,s[e].value=String(t.score)}));const l=this.renderRoot?.querySelector("mahjong-calc-chonbo");l?.setRows(t.chonbo);const d=this.renderRoot?.querySelector("mahjong-calc-yakuman");d?.setRows(t.yakuman),this._calcPoint()}_cancelEdit(){this._editDocId=null,this._editLabel="",this._resetResults(),this.dispatchEvent(new CustomEvent("edit-cancelled",{bubbles:!0,composed:!0}))}_calcPoint(){"三麻"===this.gameTypeElement.value?this._calc3maPoint():this._calc4maPoint(),this._setIsPointCheckError()}_calc4maPoint(){const t=this.firstScoreElement.valueAsNumber,e=this.secondScoreElement.valueAsNumber,i=this.thirdScoreElement.valueAsNumber,s=this.fourthScoreElement.valueAsNumber,l=this.firstUmaElement.valueAsNumber,d=this.secondUmaElement.valueAsNumber,o=this.thirdUmaElement.valueAsNumber,n=this.fourthUmaElement.valueAsNumber,a=this.okaElement.valueAsNumber,r=(l,d,o,n)=>{t&&(this.firstPointElement.value=String(l)),e&&(this.secondPointElement.value=String(d)),i&&(this.thirdPointElement.value=String(o)),s&&(this.fourthPointElement.value=String(n))};if(t===e&&t===i&&t===s){const e=(t-a)/1e3+(l+d+o+n)/4;r(e,e,e,e)}else if(t===e&&t===i){const e=(t-a)/1e3+(l+d+o)/3;r(e,e,e,(s-a)/1e3+n)}else if(e===i&&e===s){const i=(e-a)/1e3+(d+o+n)/3;r((t-a)/1e3+l,i,i,i)}else if(t===e){const e=(t-a)/1e3+(l+d)/2;r(e,e,(i-a)/1e3+o,(s-a)/1e3+n)}else if(e===i){const i=(e-a)/1e3+(d+o)/2;r((t-a)/1e3+l,i,i,(s-a)/1e3+n)}else if(i===s){const s=(i-a)/1e3+(o+n)/2;r((t-a)/1e3+l,(e-a)/1e3+d,s,s)}else{r((t-a)/1e3+l,(e-a)/1e3+d,(i-a)/1e3+o,(s-a)/1e3+n)}}_calc3maPoint(){const t=this.firstScoreElement.valueAsNumber,e=this.secondScoreElement.valueAsNumber,i=this.thirdScoreElement.valueAsNumber,s=this.firstUmaElement.valueAsNumber,l=this.secondUmaElement.valueAsNumber,d=this.thirdUmaElement.valueAsNumber,o=this.okaElement.valueAsNumber,n=(t,e,i)=>{this.firstPointElement.value=String(t),this.secondPointElement.value=String(e),this.thirdPointElement.value=String(i)};if(t===e&&t===i){const e=(t-o)/1e3+(s+l+d)/3;n(e,e,e)}else if(t===e){const e=(t-o)/1e3+(s+l)/2;n(e,e,(i-o)/1e3+d)}else if(e===i){const i=(e-o)/1e3+(l+d)/2;n((t-o)/1e3+s,i,i)}else{n((t-o)/1e3+s,(e-o)/1e3+l,(i-o)/1e3+d)}}_changeGame(){"三麻"===this.gameTypeElement.value?this._changeSettings(35e3,35e3,15,0,-15,0,!0):this._changeSettings(25e3,3e4,50,10,-10,-30,!1),this._resetResults()}_setIsPointCheckError(){const t="三麻"===this.gameTypeElement?.value,e=[this.firstScoreElement.valueAsNumber,this.secondScoreElement.valueAsNumber,this.thirdScoreElement.valueAsNumber];t||e.push(this.fourthScoreElement.valueAsNumber);const i=e.reduce(((t,e)=>t+e),0),s=this.initialPointElement.valueAsNumber*(t?3:4);this.isPointCheckError=!(this.initialPointElement.valueAsNumber&&i===s)}_changeSettings(t,e,i,s,l,d,o){this.initialPointElement.value=String(t),this.okaElement.value=String(e),this.firstUmaElement.value=String(i),this.secondUmaElement.value=String(s),this.thirdUmaElement.value=String(l),this.fourthUmaElement.value=String(d),o||this._clearFourth(),this._toggleFourth(o)}_clearFourth(){this.fourthPlayerElement.value="",this.fourthScoreElement.value="",this.fourthPointElement.value=""}_toggleFourth(t){this.fourthUmaElement.disabled=t,this.fourthPlayerElement.disabled=t,this.fourthScoreElement.disabled=t}_resetResults(){this.firstPlayerElement.value="",this.secondPlayerElement.value="",this.thirdPlayerElement.value="",this.fourthPlayerElement.value="",this.firstScoreElement.value="",this.secondScoreElement.value="",this.thirdScoreElement.value="",this.fourthScoreElement.value="",this.firstPointElement.value="",this.secondPointElement.value="",this.thirdPointElement.value="",this.fourthPointElement.value="",this.renderRoot?.querySelector("mahjong-calc-chonbo")?.reset(),this.renderRoot?.querySelector("mahjong-calc-yakuman")?.reset()}async _uploadResults(){let t,e;this.progressElement.style.display="block";const i=[],s=[];"四麻"===this.gameTypeElement.value?(t=[this.firstPlayerElement.value,this.secondPlayerElement.value,this.thirdPlayerElement.value,this.fourthPlayerElement.value].sort(),e=[{rank:1,player:this.firstPlayerElement.value,score:Number(this.firstScoreElement.value),point:Number(this.firstPointElement.value)},{rank:this.firstScoreElement.value===this.secondScoreElement.value?1:2,player:this.secondPlayerElement.value,score:Number(this.secondScoreElement.value),point:Number(this.secondPointElement.value)},{rank:this.firstScoreElement.value===this.thirdScoreElement.value?1:this.secondScoreElement.value===this.thirdScoreElement.value?2:3,player:this.thirdPlayerElement.value,score:Number(this.thirdScoreElement.value),point:Number(this.thirdPointElement.value)},{rank:this.firstScoreElement.value===this.fourthScoreElement.value?1:this.secondScoreElement.value===this.fourthScoreElement.value?2:this.thirdScoreElement.value===this.fourthScoreElement.value?3:4,player:this.fourthPlayerElement.value,score:Number(this.fourthScoreElement.value),point:Number(this.fourthPointElement.value)}]):(t=[this.firstPlayerElement.value,this.secondPlayerElement.value,this.thirdPlayerElement.value].sort(),e=[{rank:1,player:this.firstPlayerElement.value,score:Number(this.firstScoreElement.value),point:Number(this.firstPointElement.value)},{rank:2,player:this.secondPlayerElement.value,score:Number(this.secondScoreElement.value),point:Number(this.secondPointElement.value)},{rank:3,player:this.thirdPlayerElement.value,score:Number(this.thirdScoreElement.value),point:Number(this.thirdPointElement.value)}]);const l=this.renderRoot?.querySelector("mahjong-calc-chonbo");i.push(...l?.getChonbo()??[]);const d=this.renderRoot?.querySelector("mahjong-calc-yakuman");s.push(...d?.getYakuman()??[]);const c={gameInfo:{date:this._dateAndKeyElement?.getDate(),order:this._dateAndKeyElement?.getOrder(),gameType:this.gameTypeElement.value,players:t},results:e,chonbo:i,yakuman:s};try{this._editDocId?await o(n(a,"results",this._editDocId),c):await r(h(a,"results"),c),this.dispatchEvent(new CustomEvent("uploaded",{bubbles:!0,composed:!0}))}catch(t){console.error("Error adding document: ",t)}finally{this.progressElement.style.display="none"}}};x.styles=[t`
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
      .edit-banner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #e8f0fe;
        border-radius: 4px;
        padding: 0.5rem 0.75rem;
        margin-bottom: 1em;
        font-size: 0.875rem;
      }
    `],g([d({type:Boolean})],x.prototype,"isPointCheckError",void 0),g([d({attribute:!1})],x.prototype,"prefillData",void 0),g([l()],x.prototype,"_editDocId",void 0),g([l()],x.prototype,"_editLabel",void 0),g([c("#gameType")],x.prototype,"gameTypeElement",void 0),g([c("#initialPoint")],x.prototype,"initialPointElement",void 0),g([c("#oka")],x.prototype,"okaElement",void 0),g([c("#firstUma")],x.prototype,"firstUmaElement",void 0),g([c("#secondUma")],x.prototype,"secondUmaElement",void 0),g([c("#thirdUma")],x.prototype,"thirdUmaElement",void 0),g([c("#fourthUma")],x.prototype,"fourthUmaElement",void 0),g([c("#firstPlayer")],x.prototype,"firstPlayerElement",void 0),g([c("#secondPlayer")],x.prototype,"secondPlayerElement",void 0),g([c("#thirdPlayer")],x.prototype,"thirdPlayerElement",void 0),g([c("#fourthPlayer")],x.prototype,"fourthPlayerElement",void 0),g([c("#firstScore")],x.prototype,"firstScoreElement",void 0),g([c("#secondScore")],x.prototype,"secondScoreElement",void 0),g([c("#thirdScore")],x.prototype,"thirdScoreElement",void 0),g([c("#fourthScore")],x.prototype,"fourthScoreElement",void 0),g([c("#firstPoint")],x.prototype,"firstPointElement",void 0),g([c("#secondPoint")],x.prototype,"secondPointElement",void 0),g([c("#thirdPoint")],x.prototype,"thirdPointElement",void 0),g([c("#fourthPoint")],x.prototype,"fourthPointElement",void 0),g([c("#progress")],x.prototype,"progressElement",void 0),g([c("mahjong-calc-date-and-key")],x.prototype,"_dateAndKeyElement",void 0),x=g([e("mahjong-calc")],x);export{x as MahjongCalc};
