import{i as t,a as e,t as i,b as o,A as s}from"./custom-element-BXQNS_jb.js";import{_ as a,n,r as d,g as r,c as l,a as h,e as c,d as m}from"./firestore-D_LKr_7c.js";import{E as p,r as u,e as g,a as b,b as v}from"./select-option-B1crfLlK.js";import{o as f,r as y,d as x}from"./utils-D4GKOtwe.js";import{c as w}from"./calc-sub-styles-CIbie5BY.js";import"./pf-accordion-DQA9naLD.js";
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class $ extends t{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}a([n({type:Boolean,reflect:!0})],$.prototype,"inset",void 0),a([n({type:Boolean,reflect:!0,attribute:"inset-start"})],$.prototype,"insetStart",void 0),a([n({type:Boolean,reflect:!0,attribute:"inset-end"})],$.prototype,"insetEnd",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const k=e`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let z=class extends ${};z.styles=[k],z=a([i("md-divider")],z);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const C={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:p.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:p.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},_={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:p.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:p.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class E extends t{get open(){return this.isOpen}set open(t){t!==this.isOpen&&(this.isOpen=t,t?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.quick=!1,this.returnValue="",this.noFocusTrap=!1,this.getOpenAnimation=()=>C,this.getCloseAnimation=()=>_,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.escapePressedWithoutCancel=!1,this.treewalker=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT),this.addEventListener("submit",this.handleSubmit)}async show(){this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const t=this.dialog;if(t.open||!this.isOpening)return void(this.isOpening=!1);if(!this.dispatchEvent(new Event("open",{cancelable:!0})))return this.open=!1,void(this.isOpening=!1);t.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),this.querySelector("[autofocus]")?.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(t=this.returnValue){if(this.isOpening=!1,!this.isConnected)return void(this.open=!1);await this.updateComplete;const e=this.dialog;if(!e.open||this.isOpening)return void(this.open=!1);const i=this.returnValue;this.returnValue=t;this.dispatchEvent(new Event("close",{cancelable:!0}))?(await this.animateDialog(this.getCloseAnimation()),e.close(t),this.open=!1,this.dispatchEvent(new Event("closed"))):this.returnValue=i}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const t=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),e={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:t,"show-top-divider":t&&!this.isAtScrollTop,"show-bottom-divider":t&&!this.isAtScrollBottom},i=this.open&&!this.noFocusTrap,a=o`
      <div
        class="focus-trap"
        tabindex="0"
        aria-hidden="true"
        @focus=${this.handleFocusTrapFocus}></div>
    `,{ariaLabel:n}=this;return o`
      <div class="scrim"></div>
      <dialog
        class=${b(e)}
        aria-label=${n||s}
        aria-labelledby=${this.hasHeadline?"headline":s}
        role=${"alert"===this.type?"alertdialog":s}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        @close=${this.handleClose}
        @keydown=${this.handleKeydown}
        .returnValue=${this.returnValue||s}>
        ${i?a:s}
        <div class="container" @click=${this.handleContentClick}>
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||s}>
              <slot
                name="headline"
                @slotchange=${this.handleHeadlineChange}></slot>
            </h2>
            <md-divider></md-divider>
          </div>
          <div class="scroller">
            <div class="content">
              <div class="top anchor"></div>
              <slot name="content"></slot>
              <div class="bottom anchor"></div>
            </div>
          </div>
          <div class="actions">
            <md-divider></md-divider>
            <slot name="actions" @slotchange=${this.handleActionsChange}></slot>
          </div>
        </div>
        ${i?a:s}
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver((t=>{for(const e of t)this.handleAnchorIntersection(e)}),{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent)return void(this.nextClickIsFromContent=!1);!this.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(t){const e=t.target,{submitter:i}=t;"dialog"===e.method&&i&&this.close(i.getAttribute("value")??this.returnValue)}handleCancel(t){if(t.target!==this.dialog)return;this.escapePressedWithoutCancel=!1;const e=!v(this,t);t.preventDefault(),e||this.close()}handleClose(){this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,this.dialog?.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(t){"Escape"===t.key&&(this.escapePressedWithoutCancel=!0,setTimeout((()=>{this.escapePressedWithoutCancel=!1})))}async animateDialog(t){if(this.cancelAnimations?.abort(),this.cancelAnimations=new AbortController,this.quick)return;const{dialog:e,scrim:i,container:o,headline:s,content:a,actions:n}=this;if(!(e&&i&&o&&s&&a&&n))return;const{container:d,dialog:r,scrim:l,headline:h,content:c,actions:m}=t,p=[[e,r??[]],[i,l??[]],[o,d??[]],[s,h??[]],[a,c??[]],[n,m??[]]],u=[];for(const[t,e]of p)for(const i of e){const e=t.animate(...i);this.cancelAnimations.signal.addEventListener("abort",(()=>{e.cancel()})),u.push(e)}await Promise.all(u.map((t=>t.finished.catch((()=>{})))))}handleHeadlineChange(t){const e=t.target;this.hasHeadline=e.assignedElements().length>0}handleActionsChange(t){const e=t.target;this.hasActions=e.assignedElements().length>0}handleIconChange(t){const e=t.target;this.hasIcon=e.assignedElements().length>0}handleAnchorIntersection(t){const{target:e,isIntersecting:i}=t;e===this.topAnchor&&(this.isAtScrollTop=i),e===this.bottomAnchor&&(this.isAtScrollBottom=i)}getIsConnectedPromise(){return new Promise((t=>{this.isConnectedPromiseResolve=t}))}handleFocusTrapFocus(t){const[e,i]=this.getFirstAndLastFocusableChildren();if(!e||!i)return void this.dialog?.focus();const o=t.target===this.firstFocusTrap,s=!o,a=t.relatedTarget===e,n=t.relatedTarget===i,d=!a&&!n;if(s&&n||o&&d)return void e.focus();(o&&a||s&&d)&&i.focus()}getFirstAndLastFocusableChildren(){let t=null,e=null;for(this.treewalker.currentNode=this.treewalker.root;this.treewalker.nextNode();){const i=this.treewalker.currentNode;A(i)&&(t||(t=i),e=i)}return[t,e]}}function A(t){const e=":not(:disabled,[disabled])";if(t.matches(":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])"+e+':not([tabindex^="-"])'))return!0;return!!t.localName.includes("-")&&(!!t.matches(e)&&(t.shadowRoot?.delegatesFocus??!1))}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */u(E),a([n({type:Boolean})],E.prototype,"open",null),a([n({type:Boolean})],E.prototype,"quick",void 0),a([n({attribute:!1})],E.prototype,"returnValue",void 0),a([n()],E.prototype,"type",void 0),a([n({type:Boolean,attribute:"no-focus-trap"})],E.prototype,"noFocusTrap",void 0),a([g("dialog")],E.prototype,"dialog",void 0),a([g(".scrim")],E.prototype,"scrim",void 0),a([g(".container")],E.prototype,"container",void 0),a([g(".headline")],E.prototype,"headline",void 0),a([g(".content")],E.prototype,"content",void 0),a([g(".actions")],E.prototype,"actions",void 0),a([d()],E.prototype,"isAtScrollTop",void 0),a([d()],E.prototype,"isAtScrollBottom",void 0),a([g(".scroller")],E.prototype,"scroller",void 0),a([g(".top.anchor")],E.prototype,"topAnchor",void 0),a([g(".bottom.anchor")],E.prototype,"bottomAnchor",void 0),a([g(".focus-trap")],E.prototype,"firstFocusTrap",void 0),a([d()],E.prototype,"hasHeadline",void 0),a([d()],E.prototype,"hasActions",void 0),a([d()],E.prototype,"hasIcon",void 0);const D=e`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let j=class extends E{};j.styles=[D],j=a([i("md-dialog")],j);var T=function(t,e,i,o){for(var s,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o,d=t.length-1;d>=0;d--)(s=t[d])&&(n=(a<3?s(n):a>3?s(e,i,n):s(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let I=class extends t{render(){return o`
      <h1>今日の成績</h1>

      <md-outlined-select required id="gameType" @change="${this._changeGame}">
        <md-select-option selected value="四麻">
          <div slot="headline">四麻</div>
        </md-select-option>
        <md-select-option value="三麻">
          <div slot="headline">三麻</div>
        </md-select-option>
      </md-outlined-select>

      <md-outlined-select required id="date" @change="${this._changeDate}">
        ${f(this.distinctDates,(t=>o`<md-select-option value="${t}"
            >${t}</md-select-option
          > `))}
      </md-outlined-select>

      <h2>ゲームごとのポイント</h2>
      <table class="game-results">
        ${(()=>{let t="";return this.todaysResultsList.map((e=>{const i=e.results.map((t=>t.player)).join(","),s=i!==t;return t=i,o`
              ${s?o`<thead><tr>
                    ${e.results.map((t=>o`<th>${t.player}</th>`))}
                    <th
                      class="edit-col-header"
                      scope="col"
                      aria-label="ゲームの編集"
                    ></th>
                  </tr></thead>`:""}
              <tbody>
                <tr>
                  ${e.results.map((t=>o`
                    <td class="rank-${t.rank}">
                      ${y(t.point)}(${t.rank})
                    </td>
                  `))}
                  <td class="edit-cell">
                    <md-icon-button
                      type="button"
                      aria-label="ゲームを編集"
                      @click=${t=>{t.stopPropagation(),this._openEditDialog(e)}}
                    >
                      <svg
                        class="edit-icon-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                        />
                      </svg>
                    </md-icon-button>
                  </td>
                </tr>
              </tbody>
            `}))})()}
      </table>

      <md-dialog
        ?open=${this._editDialogOpen}
        quick
        @closed=${this._onEditDialogClosed}
      >
        <div slot="headline">
          ${"delete-confirm"===this._editMode?"削除":"ゲームの編集"}
        </div>
        <div slot="content" class="edit-dialog-content">
          <p>${this._editHeadline}</p>
          ${"delete-confirm"===this._editMode?o`
                <div class="delete-warning">
                  ⚠ このゲームを削除します。この操作は取り消せません。
                </div>
                <md-outlined-text-field
                  style="width: 100%"
                  label="確認のため「削除」と入力"
                  type="text"
                  .value=${this._deleteConfirmInput}
                  @input=${t=>{const e=t.currentTarget;this._deleteConfirmInput=e.value}}
                ></md-outlined-text-field>
                ${this._editError?o`<p class="edit-dialog-error">${this._editError}</p>`:""}
              `:o`
                ${this._editError?o`<p class="edit-dialog-error">${this._editError}</p>`:""}
                <p>
                  このゲームの全項目（プレイヤー・得点・チョンボ・役満）を点数計算画面で編集します。
                </p>
                <div class="delete-section">
                  <p class="delete-section-label">危険な操作</p>
                  <md-text-button
                    class="danger-text-button"
                    type="button"
                    @click=${this._enterDeleteConfirm}
                    >削除</md-text-button
                  >
                </div>
              `}
        </div>
        <div slot="actions">
          ${"delete-confirm"===this._editMode?o`
                <md-text-button
                  @click=${this._cancelDeleteConfirm}
                  ?disabled=${this._deleteExecuting}
                  >戻る</md-text-button
                >
                <md-filled-button
                  class="danger-filled-button"
                  @click=${this._executeDelete}
                  ?disabled=${"削除"!==this._deleteConfirmInput||this._deleteExecuting}
                  >削除を実行</md-filled-button
                >
              `:o`
                <md-text-button @click=${this._closeEditDialog}
                  >キャンセル</md-text-button
                >
                <md-filled-button @click=${this._startEdit}
                  >編集する</md-filled-button
                >
              `}
        </div>
      </md-dialog>

      <h2>合計</h2>
      <div class="table-box">
        <table>
          <thead>
            <tr>
              ${f(Array.from(this.playerPoints.entries()),(([t,e])=>o` <th>${t}</th> `))}
            </tr>
          </thead>
          <tbody>
            <tr>
              ${f(Array.from(this.playerPoints.entries()),(([t,e])=>o` <td>${y(e)}</td> `))}
            </tr>
          </tbody>
        </table>
      </div>

      <h2>役満</h2>
      ${0===this.todaysYakuman.length?o`<p>なし</p>`:""}
      <table>
        ${f(this.todaysYakuman,(t=>o`
            <thead>
              <tr>
                ${t.map((t=>o` <th>${t.player}</th> `))}
              </tr>
            </thead>
            <tbody>
              <tr>
                ${t.map((t=>o` <td>${t.yakuman}</td> `))}
              </tr>
            </tbody>
          `))}
      </table>

      <h2>チョンボ</h2>
      ${0===this.todaysChonbo.length?o`<p>なし</p>`:""}
      ${(()=>{const t=new Map;return this.todaysChonbo.flat().forEach((e=>{t.set(e.player,(t.get(e.player)||0)+e.point)})),o`
          <table>
            <thead>
              <tr>
                ${Array.from(t.keys()).map((t=>o`<th>${t}</th>`))}
              </tr>
            </thead>
            <tbody>
              <tr>
                ${Array.from(t.values()).map((t=>o`<td>${t}</td>`))}
              </tr>
            </tbody>
          </table>
        `})()}
    `}constructor(){super(),this.distinctDates=[],this.todaysResultsList=[],this.playerPoints=new Map,this.todaysChonbo=[],this.todaysYakuman=[],this._editDialogOpen=!1,this._editHeadline="",this._editError="",this._editGame=null,this._editMode="menu",this._deleteConfirmInput="",this._deleteExecuting=!1,this.startup()}async startup(){await this._loadData();const t=(new Date).getFullYear().toString(),e=this.distinctDates[0]===t?this.distinctDates[1]:this.distinctDates[0];this._date.selectedIndex=this.distinctDates.indexOf(e),this._date.displayText=e}async _changeGame(){await this._loadData(!0)}async _changeDate(){await this._loadData()}async _loadData(t=!1){this.todaysResultsList=[],this.todaysChonbo=[],this.todaysYakuman=[];const e=(await r(l(h,"results"))).docs,i=this._gameType.value||"四麻";this._setDistinctDates(e,i);const o=(new Date).getFullYear().toString(),s=this.distinctDates[0]===o?this.distinctDates[1]:this.distinctDates[0],a=this._date.value,n=!t&&a?a:s;this._date.value=n,this._date.selectedIndex=this.distinctDates.indexOf(n),this._date.displayText=n,e.sort(((t,e)=>{const i=t.data().gameInfo.date,o=e.data().gameInfo.date;return i!==o?i<o?-1:1:t.data().gameInfo.order-e.data().gameInfo.order}));const d=new Map;e.forEach((t=>{if(t.data().gameInfo.gameType!==i)return;if(n!==o&&t.data().gameInfo.date!==n||n===o&&!t.data().gameInfo.date.startsWith(o))return;const e=[...t.data().results].sort(((t,e)=>t.player<e.player?-1:1)),s=[...t.data().chonbo??[]].sort(((t,e)=>t.player<e.player?-1:1)),a=[...t.data().yakuman??[]].sort(((t,e)=>t.player<e.player?-1:1));this.todaysResultsList.push({docId:t.id,date:t.data().gameInfo.date,order:String(t.data().gameInfo.order??""),gameType:t.data().gameInfo.gameType,results:e,chonbo:s,yakuman:a}),e.forEach((t=>{const e=d.get(t.player)||0;d.set(t.player,e+t.point)})),s.length>0&&this.todaysChonbo.push(s),a.length>0&&this.todaysYakuman.push(a)})),this.playerPoints=new Map(Array.from(d).sort(((t,e)=>t[1]<e[1]?1:-1)))}_openEditDialog(t){this._editError="",this._editGame=t,this._editHeadline=`${t.date} · 順序 ${t.order}`,this._editDialogOpen=!0}_closeEditDialog(){this._editDialogOpen=!1}_onEditDialogClosed(){this._editDialogOpen=!1,this._editGame=null,this._editError="",this._editMode="menu",this._deleteConfirmInput="",this._deleteExecuting=!1}_startEdit(){if(!this._editGame)return;const t=this._editGame;this._editDialogOpen=!1,this.dispatchEvent(new CustomEvent("edit-game",{bubbles:!0,composed:!0,detail:{gameType:t.gameType,results:[...t.results].sort(((t,e)=>e.score-t.score)),chonbo:t.chonbo,yakuman:t.yakuman,docId:t.docId,date:t.date,order:t.order}}))}_enterDeleteConfirm(){this._editMode="delete-confirm",this._deleteConfirmInput="",this._editError=""}_cancelDeleteConfirm(){this._editMode="menu",this._deleteConfirmInput="",this._editError=""}async _executeDelete(){if(this._editGame&&!this._deleteExecuting){this._deleteExecuting=!0,this._editError="";try{await c(m(h,"results",this._editGame.docId)),this._editDialogOpen=!1,await this._loadData()}catch(t){console.error(t),this._editError="削除に失敗しました。もう一度お試しください。"}finally{this._deleteExecuting=!1}}}_setDistinctDates(t,e){this.distinctDates=[];const i=t.map((t=>t.data().gameInfo.gameType!==e?"":t.data().gameInfo.date)),o=x(i).filter((t=>t));o.sort(((t,e)=>t<e?1:-1));const s=(new Date).getFullYear().toString();this.distinctDates=[s,...o]}};I.styles=[w,e`
      md-outlined-select {
        min-width: calc(50% - 1rem);
      }
      .rank-1 {
        font-weight: bold;
      }

      .table-box {
        overflow-x: auto;
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

      table.game-results tbody tr {
        cursor: default;
      }

      table th {
        background-color: #eee;
      }

      table th,
      table td {
        text-align: center;
        padding: 0.5em 0;
        min-width: 4em;
      }

      table.game-results th.edit-col-header,
      table.game-results td.edit-cell {
        width: 1%;
        min-width: unset;
        padding: 0.25em 0.1em;
        vertical-align: middle;
        text-align: center;
      }

      .edit-cell md-icon-button {
        --md-icon-button-icon-size: 20px;
      }

      .edit-icon-svg {
        display: block;
        width: 20px;
        height: 20px;
        fill: currentColor;
      }

      .edit-dialog-content {
        box-sizing: border-box;
        padding: 0.25rem 1.5rem 0.75rem;
      }

      .edit-dialog-content > p:first-of-type {
        margin: 0 0 0.5rem;
      }

      .edit-dialog-error {
        color: #b3261e;
        margin: 0.5rem 0 0;
        font-size: 0.875rem;
      }

      .delete-section {
        margin-top: 1.25rem;
        padding-top: 1rem;
        border-top: 1px solid #e0e0e0;
      }

      .delete-section-label {
        font-size: 0.75rem;
        color: #49454f;
        margin: 0 0 0.5rem;
      }

      .delete-warning {
        background-color: #fceceb;
        border-radius: 4px;
        padding: 0.75rem;
        margin-bottom: 1rem;
        font-size: 0.875rem;
        color: #410e0b;
      }

      .danger-text-button {
        --md-text-button-label-text-color: #b3261e;
        --md-text-button-hover-label-text-color: #8c1d18;
        --md-text-button-hover-state-layer-color: #b3261e;
      }

      .danger-filled-button {
        --md-filled-button-container-color: #b3261e;
        --md-filled-button-hover-container-elevation: 2;
      }
    `],T([n({type:Array})],I.prototype,"distinctDates",void 0),T([n({type:Array})],I.prototype,"todaysResultsList",void 0),T([n({attribute:!1})],I.prototype,"playerPoints",void 0),T([n({type:Array})],I.prototype,"todaysChonbo",void 0),T([n({type:Array})],I.prototype,"todaysYakuman",void 0),T([d()],I.prototype,"_editDialogOpen",void 0),T([d()],I.prototype,"_editHeadline",void 0),T([d()],I.prototype,"_editError",void 0),T([d()],I.prototype,"_editGame",void 0),T([d()],I.prototype,"_editMode",void 0),T([d()],I.prototype,"_deleteConfirmInput",void 0),T([d()],I.prototype,"_deleteExecuting",void 0),T([g("#gameType")],I.prototype,"_gameType",void 0),T([g("#date")],I.prototype,"_date",void 0),I=T([i("mahjong-today")],I);export{I as MahjongToday};
