import{i as e,t,h as i,k as d}from"./custom-element-6f1a92a3.js";import{n as l,e as o}from"./select-option-ec247a15.js";import"./pf-accordion-cc199819.js";import"./filled-button-87178736.js";import{a as n,c as a,d as s}from"./firestore-4afe899e.js";var r=function(e,t,i,d){for(var l,o=arguments.length,n=o<3?t:null===d?d=Object.getOwnPropertyDescriptor(t,i):d,a=e.length-1;a>=0;a--)(l=e[a])&&(n=(o<3?l(n):o>3?l(t,i,n):l(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let c=class extends i{render(){return d`
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
    `}};c.styles=[e`
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
  `],c=r([t("mahjong-calc-chonbo")],c);var h=function(e,t,i,d){for(var l,o=arguments.length,n=o<3?t:null===d?d=Object.getOwnPropertyDescriptor(t,i):d,a=e.length-1;a>=0;a--)(l=e[a])&&(n=(o<3?l(n):o>3?l(t,i,n):l(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let m=class extends i{render(){return d`
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
    `}};m.styles=[e`
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
  `],m=h([t("mahjong-calc-yakuman")],m);var u=function(e,t,i,d){for(var l,o=arguments.length,n=o<3?t:null===d?d=Object.getOwnPropertyDescriptor(t,i):d,a=e.length-1;a>=0;a--)(l=e[a])&&(n=(o<3?l(n):o>3?l(t,i,n):l(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let f=class extends i{render(){return d`
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
    `}};f.styles=[e`
    .width-50 {
      width: calc(50% - 1rem);
      margin-bottom: 0.5em;
    }
  `],f=u([t("mahjong-calc-date-and-key")],f);var p=function(e,t,i,d){for(var l,o=arguments.length,n=o<3?t:null===d?d=Object.getOwnPropertyDescriptor(t,i):d,a=e.length-1;a>=0;a--)(l=e[a])&&(n=(o<3?l(n):o>3?l(t,i,n):l(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let b=class extends i{constructor(){super(...arguments),this.isPointCheckError=!0}render(){return d`
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
    `}_calcPoint(){"三麻"===this.gameTypeElement.value?this._calc3maPoint():this._calc4maPoint(),this._setIsPointCheckError()}_calc4maPoint(){const e=this.firstScoreElement.valueAsNumber,t=this.secondScoreElement.valueAsNumber,i=this.thirdScoreElement.valueAsNumber,d=this.fourthScoreElement.valueAsNumber,l=this.firstUmaElement.valueAsNumber,o=this.secondUmaElement.valueAsNumber,n=this.thirdUmaElement.valueAsNumber,a=this.fourthUmaElement.valueAsNumber,s=this.okaElement.valueAsNumber,r=(l,o,n,a)=>{e&&(this.firstPointElement.value=String(l)),t&&(this.secondPointElement.value=String(o)),i&&(this.thirdPointElement.value=String(n)),d&&(this.fourthPointElement.value=String(a))};if(e===t&&e===i&&e===d){const t=(e-s)/1e3+(l+o+n+a)/4;r(t,t,t,t)}else if(e===t&&e===i){const t=(e-s)/1e3+(l+o+n)/3;r(t,t,t,(d-s)/1e3+a)}else if(t===i&&t===d){const i=(t-s)/1e3+(o+n+a)/3;r((e-s)/1e3+l,i,i,i)}else if(e===t){const t=(e-s)/1e3+(l+o)/2;r(t,t,(i-s)/1e3+n,(d-s)/1e3+a)}else if(t===i){const i=(t-s)/1e3+(o+n)/2;r((e-s)/1e3+l,i,i,(d-s)/1e3+a)}else if(i===d){const d=(i-s)/1e3+(n+a)/2;r((e-s)/1e3+l,(t-s)/1e3+o,d,d)}else{r((e-s)/1e3+l,(t-s)/1e3+o,(i-s)/1e3+n,(d-s)/1e3+a)}}_calc3maPoint(){const e=this.firstScoreElement.valueAsNumber,t=this.secondScoreElement.valueAsNumber,i=this.thirdScoreElement.valueAsNumber,d=this.firstUmaElement.valueAsNumber,l=this.secondUmaElement.valueAsNumber,o=this.thirdUmaElement.valueAsNumber,n=this.okaElement.valueAsNumber,a=(e,t,i)=>{this.firstPointElement.value=String(e),this.secondPointElement.value=String(t),this.thirdPointElement.value=String(i)};if(e===t&&e===i){const t=(e-n)/1e3+(d+l+o)/3;a(t,t,t)}else if(e===t){const t=(e-n)/1e3+(d+l)/2;a(t,t,(i-n)/1e3+o)}else if(t===i){const i=(t-n)/1e3+(l+o)/2;a((e-n)/1e3+d,i,i)}else{a((e-n)/1e3+d,(t-n)/1e3+l,(i-n)/1e3+o)}}_changeGame(){"三麻"===this.gameTypeElement.value?this._changeSettings(35e3,35e3,15,0,-15,0,!0):this._changeSettings(25e3,3e4,50,10,-10,-30,!1),this._resetResults()}_setIsPointCheckError(){const e="三麻"===this.gameTypeElement?.value,t=[this.firstScoreElement.valueAsNumber,this.secondScoreElement.valueAsNumber,this.thirdScoreElement.valueAsNumber];e||t.push(this.fourthScoreElement.valueAsNumber);const i=t.reduce(((e,t)=>e+t),0),d=this.initialPointElement.valueAsNumber*(e?3:4);this.isPointCheckError=!(this.initialPointElement.valueAsNumber&&i===d)}_changeSettings(e,t,i,d,l,o,n){this.initialPointElement.value=String(e),this.okaElement.value=String(t),this.firstUmaElement.value=String(i),this.secondUmaElement.value=String(d),this.thirdUmaElement.value=String(l),this.fourthUmaElement.value=String(o),n||this._clearFourth(),this._toggleFourth(n)}_clearFourth(){this.fourthPlayerElement.value="",this.fourthScoreElement.value="",this.fourthPointElement.value=""}_toggleFourth(e){this.fourthUmaElement.disabled=e,this.fourthPlayerElement.disabled=e,this.fourthScoreElement.disabled=e}_resetResults(){this.firstPlayerElement.value="",this.secondPlayerElement.value="",this.thirdPlayerElement.value="",this.fourthPlayerElement.value="",this.firstScoreElement.value="",this.secondScoreElement.value="",this.thirdScoreElement.value="",this.fourthScoreElement.value="",this.firstPointElement.value="",this.secondPointElement.value="",this.thirdPointElement.value="",this.fourthPointElement.value=""}async _uploadResults(){let e,t;this.progressElement.style.display="block";const i=[],d=[];"四麻"===this.gameTypeElement.value?(e=[this.firstPlayerElement.value,this.secondPlayerElement.value,this.thirdPlayerElement.value,this.fourthPlayerElement.value].sort(),t=[{rank:1,player:this.firstPlayerElement.value,score:Number(this.firstScoreElement.value),point:Number(this.firstPointElement.value)},{rank:this.firstScoreElement.value===this.secondScoreElement.value?1:2,player:this.secondPlayerElement.value,score:Number(this.secondScoreElement.value),point:Number(this.secondPointElement.value)},{rank:this.firstScoreElement.value===this.thirdScoreElement.value?1:this.secondScoreElement.value===this.thirdScoreElement.value?2:3,player:this.thirdPlayerElement.value,score:Number(this.thirdScoreElement.value),point:Number(this.thirdPointElement.value)},{rank:this.firstScoreElement.value===this.fourthScoreElement.value?1:this.secondScoreElement.value===this.fourthScoreElement.value?2:this.thirdScoreElement.value===this.fourthScoreElement.value?3:4,player:this.fourthPlayerElement.value,score:Number(this.fourthScoreElement.value),point:Number(this.fourthPointElement.value)}]):(e=[this.firstPlayerElement.value,this.secondPlayerElement.value,this.thirdPlayerElement.value].sort(),t=[{rank:1,player:this.firstPlayerElement.value,score:Number(this.firstScoreElement.value),point:Number(this.firstPointElement.value)},{rank:2,player:this.secondPlayerElement.value,score:Number(this.secondScoreElement.value),point:Number(this.secondPointElement.value)},{rank:3,player:this.thirdPlayerElement.value,score:Number(this.thirdScoreElement.value),point:Number(this.thirdPointElement.value)}]);const l=this.renderRoot?.querySelector("mahjong-calc-chonbo"),o=l?.renderRoot.querySelector("#chonboPlayer1"),r=l?.renderRoot.querySelector("#chonboPoint1");""!==o.value&&i.push({player:o.value,point:Number(r.value)});const c=l?.renderRoot.querySelector("#chonboPlayer2"),h=l?.renderRoot.querySelector("#chonboPoint2");""!==c.value&&i.push({player:c.value,point:Number(h.value)});const m=l?.renderRoot.querySelector("#chonboPlayer3"),u=l?.renderRoot.querySelector("#chonboPoint3");""!==m.value&&i.push({player:m.value,point:Number(u.value)});const f=l?.renderRoot.querySelector("#chonboPlayer4"),p=l?.renderRoot.querySelector("#chonboPoint4");""!==f.value&&i.push({player:f.value,point:Number(p.value)});const b=this.renderRoot?.querySelector("mahjong-calc-yakuman"),y=b?.renderRoot.querySelector("#yakumanPlayer1"),x=b?.renderRoot.querySelector("#yakuman1");""!==y.value&&d.push({player:y.value,yakuman:x.value});const v=b?.renderRoot.querySelector("#yakumanPlayer2"),w=b?.renderRoot.querySelector("#yakuman2");""!==v.value&&d.push({player:v.value,yakuman:w.value});const P=b?.renderRoot.querySelector("#yakumanPlayer3"),g=b?.renderRoot.querySelector("#yakuman3");""!==P.value&&d.push({player:P.value,yakuman:g.value});const k=b?.renderRoot.querySelector("#yakumanPlayer4"),j=b?.renderRoot.querySelector("#yakuman4");""!==k.value&&d.push({player:k.value,yakuman:j.value});const S=this.renderRoot?.querySelector("mahjong-calc-date-and-key"),E=S?.renderRoot?.querySelector("#date"),N=S?.renderRoot?.querySelector("#order"),U={gameInfo:{date:E?.value,order:N?.value,gameType:this.gameTypeElement.value,players:e},results:t,chonbo:i,yakuman:d};try{const e=await n(a(s,"results"),U);console.log("Document written with ID: ",e.id),this.dispatchEvent(new CustomEvent("uploaded",{bubbles:!0,composed:!0}))}catch(e){console.error("Error adding document: ",e)}finally{this.progressElement.style.display="none"}}};b.styles=[e`
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
  `],p([l({type:Boolean})],b.prototype,"isPointCheckError",void 0),p([o("#gameType")],b.prototype,"gameTypeElement",void 0),p([o("#initialPoint")],b.prototype,"initialPointElement",void 0),p([o("#oka")],b.prototype,"okaElement",void 0),p([o("#firstUma")],b.prototype,"firstUmaElement",void 0),p([o("#secondUma")],b.prototype,"secondUmaElement",void 0),p([o("#thirdUma")],b.prototype,"thirdUmaElement",void 0),p([o("#fourthUma")],b.prototype,"fourthUmaElement",void 0),p([o("#firstPlayer")],b.prototype,"firstPlayerElement",void 0),p([o("#secondPlayer")],b.prototype,"secondPlayerElement",void 0),p([o("#thirdPlayer")],b.prototype,"thirdPlayerElement",void 0),p([o("#fourthPlayer")],b.prototype,"fourthPlayerElement",void 0),p([o("#firstScore")],b.prototype,"firstScoreElement",void 0),p([o("#secondScore")],b.prototype,"secondScoreElement",void 0),p([o("#thirdScore")],b.prototype,"thirdScoreElement",void 0),p([o("#fourthScore")],b.prototype,"fourthScoreElement",void 0),p([o("#firstPoint")],b.prototype,"firstPointElement",void 0),p([o("#secondPoint")],b.prototype,"secondPointElement",void 0),p([o("#thirdPoint")],b.prototype,"thirdPointElement",void 0),p([o("#fourthPoint")],b.prototype,"fourthPointElement",void 0),p([o("#progress")],b.prototype,"progressElement",void 0),b=p([t("mahjong-calc")],b);export{b as MahjongCalc};
