import{i as t,t as e,h as i,k as d}from"./custom-element-6f1a92a3.js";import{n as l,e as o}from"./select-option-ec247a15.js";import"./pf-accordion-cc199819.js";import"./filled-button-87178736.js";import{a,c as n,d as r}from"./firestore-724ae668.js";var s=function(t,e,i,d){for(var l,o=arguments.length,a=o<3?e:null===d?d=Object.getOwnPropertyDescriptor(e,i):d,n=t.length-1;n>=0;n--)(l=t[n])&&(a=(o<3?l(a):o>3?l(e,i,a):l(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let c=class extends i{render(){return d`
      <pf-accordion>
        <pf-accordion-header>
          <h2>チョンボ</h2>
        </pf-accordion-header>
        <pf-accordion-panel>
          <div>
            <md-outlined-text-field
              id="chonboPlayer1"
              label="プレイヤー"
              class="width-50"
              type="text"
            >
            </md-outlined-text-field>
            <md-outlined-text-field
              id="chonboPoint1"
              label="罰符"
              class="width-30"
              type="number"
              value="-20"
            >
            </md-outlined-text-field>
          </div>
          <div>
            <md-outlined-text-field
              id="chonboPlayer2"
              label="プレイヤー"
              class="width-50"
              type="text"
            >
            </md-outlined-text-field>
            <md-outlined-text-field
              id="chonboPoint2"
              label="罰符"
              class="width-30"
              type="number"
              value="-20"
            >
            </md-outlined-text-field>
          </div>
          <div>
            <md-outlined-text-field
              id="chonboPlayer3"
              label="プレイヤー"
              class="width-50"
              type="text"
            >
            </md-outlined-text-field>
            <md-outlined-text-field
              id="chonboPoint3"
              label="罰符"
              class="width-30"
              type="number"
              value="-20"
            >
            </md-outlined-text-field>
          </div>
          <div>
            <md-outlined-text-field
              id="chonboPlayer4"
              label="プレイヤー"
              class="width-50"
              type="text"
            >
            </md-outlined-text-field>
            <md-outlined-text-field
              id="chonboPoint4"
              label="罰符"
              class="width-30"
              type="number"
              value="-20"
            >
            </md-outlined-text-field>
          </div>
        </pf-accordion-panel>
      </pf-accordion>
    `}};c.styles=[t`
      .width-50 {
        width: calc(50% - 1rem);
        margin-bottom: 0.5em;
      }
      .width-30 {
        width: 30%;
        margin-bottom: 0.5em;
      }
      md-outlined-text-field {
        --md-outlined-field-disabled-content-opacity: 1;
      }
    `],c=s([e("mahjong-calc-chonbo")],c);var h=function(t,e,i,d){for(var l,o=arguments.length,a=o<3?e:null===d?d=Object.getOwnPropertyDescriptor(e,i):d,n=t.length-1;n>=0;n--)(l=t[n])&&(a=(o<3?l(a):o>3?l(e,i,a):l(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let m=class extends i{render(){return d`
      <pf-accordion>
        <pf-accordion-header>
          <h2>役満</h2>
        </pf-accordion-header>
        <pf-accordion-panel>
          <div>
            <md-outlined-text-field
              id="yakumanPlayer1"
              label="プレイヤー"
              class="width-50"
              type="text"
            >
            </md-outlined-text-field>
            <md-outlined-text-field
              id="yakuman1"
              label="役満"
              class="width-30"
              type="text"
              value=""
            >
            </md-outlined-text-field>
          </div>
          <div>
            <md-outlined-text-field
              id="yakumanPlayer2"
              label="プレイヤー"
              class="width-50"
              type="text"
            >
            </md-outlined-text-field>
            <md-outlined-text-field
              id="yakuman2"
              label="役満"
              class="width-30"
              type="text"
              value=""
            >
            </md-outlined-text-field>
          </div>
          <div>
            <md-outlined-text-field
              id="yakumanPlayer3"
              label="プレイヤー"
              class="width-50"
              type="text"
            >
            </md-outlined-text-field>
            <md-outlined-text-field
              id="yakuman3"
              label="役満"
              class="width-30"
              type="text"
              value=""
            >
            </md-outlined-text-field>
          </div>
          <div>
            <md-outlined-text-field
              id="yakumanPlayer4"
              label="プレイヤー"
              class="width-50"
              type="text"
            >
            </md-outlined-text-field>
            <md-outlined-text-field
              id="yakuman4"
              label="役満"
              class="width-30"
              type="text"
              value=""
            >
            </md-outlined-text-field>
          </div>
        </pf-accordion-panel>
      </pf-accordion>
    `}};m.styles=[t`
      .width-50 {
        width: calc(50% - 1rem);
        margin-bottom: 0.5em;
      }
      .width-30 {
        width: 30%;
        margin-bottom: 0.5em;
      }
      md-outlined-text-field {
        --md-outlined-field-disabled-content-opacity: 1;
      }
    `],m=h([e("mahjong-calc-yakuman")],m);var u=function(t,e,i,d){for(var l,o=arguments.length,a=o<3?e:null===d?d=Object.getOwnPropertyDescriptor(e,i):d,n=t.length-1;n>=0;n--)(l=t[n])&&(a=(o<3?l(a):o>3?l(e,i,a):l(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let f=class extends i{constructor(){super(...arguments),this.isPointCheckError=!0}render(){return d`
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
              value="25000"
              type="number"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="oka"
              class="width-50"
              label="オカ"
              value="30000"
              type="number"
              required
            ></md-outlined-text-field>
          </div>
          <div>
            <md-outlined-text-field
              id="firstUma"
              class="width-50"
              label="1着"
              value="50"
              type="number"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="secondUma"
              class="width-50"
              label="2着"
              value="10"
              type="number"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="thirdUma"
              class="width-50"
              label="3着"
              value="-10"
              type="number"
              required
            ></md-outlined-text-field>
            <md-outlined-text-field
              id="fourthUma"
              class="width-50"
              label="4着"
              value="-30"
              type="number"
              required
            ></md-outlined-text-field>
          </div>
        </pf-accordion-panel>
      </pf-accordion>
      <div class="results">
        <h2>結果</h2>
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
        <div>
          <md-outlined-text-field
            id="firstPlayer"
            label="1位"
            class="width-30"
            type="text"
          >
          </md-outlined-text-field>
          <md-outlined-text-field
            id="firstScore"
            label="得点"
            class="width-30"
            type="number"
            @blur="${this._calcFirstPoint}"
          >
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field
            id="firstPoint"
            label="ポイント"
            class="width-30"
            type="number"
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
          >
          </md-outlined-text-field>
          <md-outlined-text-field
            id="secondScore"
            label="得点"
            class="width-30"
            type="number"
            @blur="${this._calcSecondPoint}"
          >
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field
            id="secondPoint"
            label="ポイント"
            class="width-30"
            type="number"
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
          >
          </md-outlined-text-field>
          <md-outlined-text-field
            id="thirdScore"
            label="得点"
            class="width-30"
            type="number"
            @blur="${this._calcThirdPoint}"
          >
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field
            id="thirdPoint"
            label="ポイント"
            class="width-30"
            type="number"
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
          >
          </md-outlined-text-field>
          <md-outlined-text-field
            id="fourthScore"
            label="得点"
            class="width-30"
            type="number"
            @blur="${this._calcFourthPoint}"
          >
          </md-outlined-text-field>
          <span>→</span>
          <md-outlined-text-field
            id="fourthPoint"
            label="ポイント"
            class="width-30"
            type="number"
            disabled
          >
          </md-outlined-text-field>
        </div>
        <!-- チョンボ -->
        <mahjong-calc-chonbo></mahjong-calc-chonbo>
        <!-- 役満 -->
        <mahjong-calc-yakuman></mahjong-calc-yakuman>

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
    `}_calcFirstPoint(){""!==this._firstScore.value&&(this._firstPoint.value=String((Number(this._firstScore.value)-Number(this._oka.value))/1e3+Number(this._firstUma.value)),this._setIsPointCheckError())}_calcSecondPoint(){""!==this._secondScore.value&&(this._secondPoint.value=String((Number(this._secondScore.value)-Number(this._oka.value))/1e3+Number(this._secondUma.value)),this._setIsPointCheckError())}_calcThirdPoint(){""!==this._thirdScore.value&&(this._thirdPoint.value=String((Number(this._thirdScore.value)-Number(this._oka.value))/1e3+Number(this._thirdUma.value)),this._setIsPointCheckError())}_calcFourthPoint(){""!==this._fourthScore.value&&(this._fourthPoint.value=String((Number(this._fourthScore.value)-Number(this._oka.value))/1e3+Number(this._fourthUma.value)),this._setIsPointCheckError())}_changeGame(){"三麻"===this._gameType.value?this._changeSettings("35000","35000","15","0","-15","0",!0):this._changeSettings("25000","30000","50","10","-10","-30",!1),this._resetResults()}_setIsPointCheckError(){const t="三麻"===this._gameType?.value,e=[Number(this._firstScore?.value),Number(this._secondScore?.value),Number(this._thirdScore?.value)];t||e.push(Number(this._fourthScore?.value));const i=e.reduce(((t,e)=>t+e),0),d=Number(this._initialPoint?.value)*(t?3:4);this.isPointCheckError=!(this._initialPoint&&i===d)}_changeSettings(t,e,i,d,l,o,a){this._initialPoint.value=t,this._oka.value=e,this._firstUma.value=i,this._secondUma.value=d,this._thirdUma.value=l,this._fourthUma.value=o,a||this._clearFourth(),this._toggleFourth(a)}_clearFourth(){this._fourthPlayer.value="",this._fourthScore.value="",this._fourthPoint.value=""}_toggleFourth(t){this._fourthUma.disabled=t,this._fourthPlayer.disabled=t,this._fourthScore.disabled=t}_resetResults(){this._firstPlayer.value="",this._secondPlayer.value="",this._thirdPlayer.value="",this._fourthPlayer.value="",this._firstScore.value="",this._secondScore.value="",this._thirdScore.value="",this._fourthScore.value="",this._firstPoint.value="",this._secondPoint.value="",this._thirdPoint.value="",this._fourthPoint.value=""}async _uploadResults(){let t,e;this._progress.style.display="block";const i=[],d=[];"四麻"===this._gameType.value?(t=[this._firstPlayer.value,this._secondPlayer.value,this._thirdPlayer.value,this._fourthPlayer.value].sort(),e=[{rank:1,player:this._firstPlayer.value,score:Number(this._firstScore.value),point:Number(this._firstPoint.value)},{rank:2,player:this._secondPlayer.value,score:Number(this._secondScore.value),point:Number(this._secondPoint.value)},{rank:3,player:this._thirdPlayer.value,score:Number(this._thirdScore.value),point:Number(this._thirdPoint.value)},{rank:4,player:this._fourthPlayer.value,score:Number(this._fourthScore.value),point:Number(this._fourthPoint.value)}]):(t=[this._firstPlayer.value,this._secondPlayer.value,this._thirdPlayer.value].sort(),e=[{rank:1,player:this._firstPlayer.value,score:Number(this._firstScore.value),point:Number(this._firstPoint.value)},{rank:2,player:this._secondPlayer.value,score:Number(this._secondScore.value),point:Number(this._secondPoint.value)},{rank:3,player:this._thirdPlayer.value,score:Number(this._thirdScore.value),point:Number(this._thirdPoint.value)}]);const l=this.renderRoot?.querySelector("mahjong-calc-chonbo"),o=l?.renderRoot.querySelector("#chonboPlayer1"),s=l?.renderRoot.querySelector("#chonboPoint1");""!==o.value&&i.push({player:o.value,point:Number(s.value)});const c=l?.renderRoot.querySelector("#chonboPlayer2"),h=l?.renderRoot.querySelector("#chonboPoint2");""!==c.value&&i.push({player:c.value,point:Number(h.value)});const m=l?.renderRoot.querySelector("#chonboPlayer3"),u=l?.renderRoot.querySelector("#chonboPoint3");""!==m.value&&i.push({player:m.value,point:Number(u.value)});const f=l?.renderRoot.querySelector("#chonboPlayer4"),b=l?.renderRoot.querySelector("#chonboPoint4");""!==f.value&&i.push({player:f.value,point:Number(b.value)});const p=this.renderRoot?.querySelector("mahjong-calc-yakuman"),y=p?.renderRoot.querySelector("#yakumanPlayer1"),x=p?.renderRoot.querySelector("#yakuman1");""!==y.value&&d.push({player:y.value,yakuman:x.value});const v=p?.renderRoot.querySelector("#yakumanPlayer2"),P=p?.renderRoot.querySelector("#yakuman2");""!==v.value&&d.push({player:v.value,yakuman:P.value});const w=p?.renderRoot.querySelector("#yakumanPlayer3"),k=p?.renderRoot.querySelector("#yakuman3");""!==w.value&&d.push({player:w.value,yakuman:k.value});const g=p?.renderRoot.querySelector("#yakumanPlayer4"),N=p?.renderRoot.querySelector("#yakuman4");""!==g.value&&d.push({player:g.value,yakuman:N.value});const _={gameInfo:{date:this._date.value,order:this._order.value,gameType:this._gameType.value,players:t},results:e,chonbo:i,yakuman:d};try{const t=await a(n(r,"results"),_);console.log("Document written with ID: ",t.id),this.dispatchEvent(new CustomEvent("uploaded",{bubbles:!0,composed:!0}))}catch(t){console.error("Error adding document: ",t)}finally{this._progress.style.display="none"}}};f.styles=[t`
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
    `],u([l({type:Boolean})],f.prototype,"isPointCheckError",void 0),u([o("#gameType")],f.prototype,"_gameType",void 0),u([o("#initialPoint")],f.prototype,"_initialPoint",void 0),u([o("#oka")],f.prototype,"_oka",void 0),u([o("#firstUma")],f.prototype,"_firstUma",void 0),u([o("#secondUma")],f.prototype,"_secondUma",void 0),u([o("#thirdUma")],f.prototype,"_thirdUma",void 0),u([o("#fourthUma")],f.prototype,"_fourthUma",void 0),u([o("#date")],f.prototype,"_date",void 0),u([o("#order")],f.prototype,"_order",void 0),u([o("#firstPlayer")],f.prototype,"_firstPlayer",void 0),u([o("#secondPlayer")],f.prototype,"_secondPlayer",void 0),u([o("#thirdPlayer")],f.prototype,"_thirdPlayer",void 0),u([o("#fourthPlayer")],f.prototype,"_fourthPlayer",void 0),u([o("#firstScore")],f.prototype,"_firstScore",void 0),u([o("#secondScore")],f.prototype,"_secondScore",void 0),u([o("#thirdScore")],f.prototype,"_thirdScore",void 0),u([o("#fourthScore")],f.prototype,"_fourthScore",void 0),u([o("#firstPoint")],f.prototype,"_firstPoint",void 0),u([o("#secondPoint")],f.prototype,"_secondPoint",void 0),u([o("#thirdPoint")],f.prototype,"_thirdPoint",void 0),u([o("#fourthPoint")],f.prototype,"_fourthPoint",void 0),u([o("#progress")],f.prototype,"_progress",void 0),f=u([e("mahjong-calc")],f);export{f as MahjongCalc};
