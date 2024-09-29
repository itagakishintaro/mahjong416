import{i as t,t as e,h as i,k as d}from"./custom-element-6f1a92a3.js";import{e as o}from"./select-option-ec247a15.js";import"./pf-accordion-cc199819.js";import"./filled-button-87178736.js";import{a as l,c as s,d as n}from"./firestore-4afe899e.js";var r=function(t,e,i,d){for(var o,l=arguments.length,s=l<3?e:null===d?d=Object.getOwnPropertyDescriptor(e,i):d,n=t.length-1;n>=0;n--)(o=t[n])&&(s=(l<3?o(s):l>3?o(e,i,s):o(e,i))||s);return l>3&&s&&Object.defineProperty(e,i,s),s};let a=class extends i{render(){return d`
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

        <div class="controle">
          <md-filled-tonal-button @click="${this._resetResults}"
            >リセット</md-filled-tonal-button
          >
          <md-filled-button @click="${this._uploadResults}"
            >登録</md-filled-button
          >
          <md-circular-progress
            indeterminate
            id="progress"
            style="display: none"
          ></md-circular-progress>
        </div>
      </div>
    `}_calcFirstPoint(){""!==this._firstScore.value&&(this._firstPoint.value=String((Number(this._firstScore.value)-Number(this._oka.value))/1e3+Number(this._firstUma.value)))}_calcSecondPoint(){""!==this._secondScore.value&&(this._secondPoint.value=String((Number(this._secondScore.value)-Number(this._oka.value))/1e3+Number(this._secondUma.value)))}_calcThirdPoint(){""!==this._thirdScore.value&&(this._thirdPoint.value=String((Number(this._thirdScore.value)-Number(this._oka.value))/1e3+Number(this._thirdUma.value)))}_calcFourthPoint(){""!==this._fourthScore.value&&(this._fourthPoint.value=String((Number(this._fourthScore.value)-Number(this._oka.value))/1e3+Number(this._fourthUma.value)))}_changeGame(){"三麻"===this._gameType.value?this._changeSettings("35000","40000","15","0","-15","0",!0):this._changeSettings("25000","30000","50","10","-10","-30",!1),this._resetResults()}_changeSettings(t,e,i,d,o,l,s){(this.shadowRoot?.getElementById("initialPoint")).value=t,this._oka.value=e,this._firstUma.value=i,this._secondUma.value=d,this._thirdUma.value=o,this._fourthUma.value=l,s||this._clearFourth(),this._toggleFourth(s)}_clearFourth(){this._fourthPlayer.value="",this._fourthScore.value="",this._fourthPoint.value=""}_toggleFourth(t){this._fourthUma.disabled=t,this._fourthPlayer.disabled=t,this._fourthScore.disabled=t}_resetResults(){this._firstPlayer.value="",this._secondPlayer.value="",this._thirdPlayer.value="",this._fourthPlayer.value="",this._firstScore.value="",this._secondScore.value="",this._thirdScore.value="",this._fourthScore.value="",this._firstPoint.value="",this._secondPoint.value="",this._thirdPoint.value="",this._fourthPoint.value=""}async _uploadResults(){let t,e;this._progress.style.display="block";const i=[];"四麻"===this._gameType.value?(t=[this._firstPlayer.value,this._secondPlayer.value,this._thirdPlayer.value,this._fourthPlayer.value].sort(),e=[{rank:1,player:this._firstPlayer.value,score:Number(this._firstScore.value),point:Number(this._firstPoint.value)},{rank:2,player:this._secondPlayer.value,score:Number(this._secondScore.value),point:Number(this._secondPoint.value)},{rank:3,player:this._thirdPlayer.value,score:Number(this._thirdScore.value),point:Number(this._thirdPoint.value)},{rank:4,player:this._fourthPlayer.value,score:Number(this._fourthScore.value),point:Number(this._fourthPoint.value)}]):(t=[this._firstPlayer.value,this._secondPlayer.value,this._thirdPlayer.value].sort(),e=[{rank:1,player:this._firstPlayer.value,score:Number(this._firstScore.value),point:Number(this._firstPoint.value)},{rank:2,player:this._secondPlayer.value,score:Number(this._secondScore.value),point:Number(this._secondPoint.value)},{rank:3,player:this._thirdPlayer.value,score:Number(this._thirdScore.value),point:Number(this._thirdPoint.value)}]),""!==this._chonboPlayer1.value&&i.push({player:this._chonboPlayer1.value,point:Number(this._chonboPoint1.value)}),""!==this._chonboPlayer2.value&&i.push({player:this._chonboPlayer2.value,point:Number(this._chonboPoint2.value)}),""!==this._chonboPlayer3.value&&i.push({player:this._chonboPlayer3.value,point:Number(this._chonboPoint3.value)}),""!==this._chonboPlayer4.value&&i.push({player:this._chonboPlayer4.value,point:Number(this._chonboPoint4.value)});const d={gameInfo:{date:this._date.value,order:this._order.value,gameType:this._gameType.value,players:t},results:e,chonbo:i};try{const t=await l(s(n,"results"),d);console.log("Document written with ID: ",t.id),this.dispatchEvent(new CustomEvent("uploaded",{bubbles:!0,composed:!0}))}catch(t){console.error("Error adding document: ",t)}finally{this._progress.style.display="none"}}};a.styles=[t`
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
  `],r([o("#gameType")],a.prototype,"_gameType",void 0),r([o("#initialPoint")],a.prototype,"_initialPoint",void 0),r([o("#oka")],a.prototype,"_oka",void 0),r([o("#firstUma")],a.prototype,"_firstUma",void 0),r([o("#secondUma")],a.prototype,"_secondUma",void 0),r([o("#thirdUma")],a.prototype,"_thirdUma",void 0),r([o("#fourthUma")],a.prototype,"_fourthUma",void 0),r([o("#date")],a.prototype,"_date",void 0),r([o("#order")],a.prototype,"_order",void 0),r([o("#firstPlayer")],a.prototype,"_firstPlayer",void 0),r([o("#secondPlayer")],a.prototype,"_secondPlayer",void 0),r([o("#thirdPlayer")],a.prototype,"_thirdPlayer",void 0),r([o("#fourthPlayer")],a.prototype,"_fourthPlayer",void 0),r([o("#firstScore")],a.prototype,"_firstScore",void 0),r([o("#secondScore")],a.prototype,"_secondScore",void 0),r([o("#thirdScore")],a.prototype,"_thirdScore",void 0),r([o("#fourthScore")],a.prototype,"_fourthScore",void 0),r([o("#firstPoint")],a.prototype,"_firstPoint",void 0),r([o("#secondPoint")],a.prototype,"_secondPoint",void 0),r([o("#thirdPoint")],a.prototype,"_thirdPoint",void 0),r([o("#fourthPoint")],a.prototype,"_fourthPoint",void 0),r([o("#chonboPlayer1")],a.prototype,"_chonboPlayer1",void 0),r([o("#chonboPoint1")],a.prototype,"_chonboPoint1",void 0),r([o("#chonboPlayer2")],a.prototype,"_chonboPlayer2",void 0),r([o("#chonboPoint2")],a.prototype,"_chonboPoint2",void 0),r([o("#chonboPlayer3")],a.prototype,"_chonboPlayer3",void 0),r([o("#chonboPoint3")],a.prototype,"_chonboPoint3",void 0),r([o("#chonboPlayer4")],a.prototype,"_chonboPlayer4",void 0),r([o("#chonboPoint4")],a.prototype,"_chonboPoint4",void 0),r([o("#progress")],a.prototype,"_progress",void 0),a=r([e("mahjong-calc")],a);export{a as MahjongCalc};
