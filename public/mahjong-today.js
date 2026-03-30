import{i as t,a as e,t as i,b as a,A as o}from"./custom-element-BXQNS_jb.js";import{_ as s,n,r,g as d,c as l,d as c,u as h,b as p}from"./firestore-BEkXhs6K.js";import{E as m,r as u,e as v,a as b,b as g}from"./select-option-BZcZE8K1.js";import{o as y,r as x,d as f}from"./utils-D4GKOtwe.js";import{B as w,s as $,c as _}from"./calc-sub-styles-C9XBvYLz.js";import"./pf-accordion-Bi6UiB7j.js";
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class k extends t{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}s([n({type:Boolean,reflect:!0})],k.prototype,"inset",void 0),s([n({type:Boolean,reflect:!0,attribute:"inset-start"})],k.prototype,"insetStart",void 0),s([n({type:Boolean,reflect:!0,attribute:"inset-end"})],k.prototype,"insetEnd",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const z=e`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let C=class extends k{};C.styles=[z],C=s([i("md-divider")],C);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class E extends w{}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const A=e`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let D=class extends E{};D.styles=[$,A],D=s([i("md-text-button")],D);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const j={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:m.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:m.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},R={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:m.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:m.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class T extends t{get open(){return this.isOpen}set open(t){t!==this.isOpen&&(this.isOpen=t,t?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.quick=!1,this.returnValue="",this.noFocusTrap=!1,this.getOpenAnimation=()=>j,this.getCloseAnimation=()=>R,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.escapePressedWithoutCancel=!1,this.treewalker=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT),this.addEventListener("submit",this.handleSubmit)}async show(){this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const t=this.dialog;if(t.open||!this.isOpening)return void(this.isOpening=!1);if(!this.dispatchEvent(new Event("open",{cancelable:!0})))return this.open=!1,void(this.isOpening=!1);t.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),this.querySelector("[autofocus]")?.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(t=this.returnValue){if(this.isOpening=!1,!this.isConnected)return void(this.open=!1);await this.updateComplete;const e=this.dialog;if(!e.open||this.isOpening)return void(this.open=!1);const i=this.returnValue;this.returnValue=t;this.dispatchEvent(new Event("close",{cancelable:!0}))?(await this.animateDialog(this.getCloseAnimation()),e.close(t),this.open=!1,this.dispatchEvent(new Event("closed"))):this.returnValue=i}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const t=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),e={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:t,"show-top-divider":t&&!this.isAtScrollTop,"show-bottom-divider":t&&!this.isAtScrollBottom},i=this.open&&!this.noFocusTrap,s=a`
      <div
        class="focus-trap"
        tabindex="0"
        aria-hidden="true"
        @focus=${this.handleFocusTrapFocus}></div>
    `,{ariaLabel:n}=this;return a`
      <div class="scrim"></div>
      <dialog
        class=${b(e)}
        aria-label=${n||o}
        aria-labelledby=${this.hasHeadline?"headline":o}
        role=${"alert"===this.type?"alertdialog":o}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        @close=${this.handleClose}
        @keydown=${this.handleKeydown}
        .returnValue=${this.returnValue||o}>
        ${i?s:o}
        <div class="container" @click=${this.handleContentClick}>
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||o}>
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
        ${i?s:o}
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver((t=>{for(const e of t)this.handleAnchorIntersection(e)}),{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent)return void(this.nextClickIsFromContent=!1);!this.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(t){const e=t.target,{submitter:i}=t;"dialog"===e.method&&i&&this.close(i.getAttribute("value")??this.returnValue)}handleCancel(t){if(t.target!==this.dialog)return;this.escapePressedWithoutCancel=!1;const e=!g(this,t);t.preventDefault(),e||this.close()}handleClose(){this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,this.dialog?.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(t){"Escape"===t.key&&(this.escapePressedWithoutCancel=!0,setTimeout((()=>{this.escapePressedWithoutCancel=!1})))}async animateDialog(t){if(this.cancelAnimations?.abort(),this.cancelAnimations=new AbortController,this.quick)return;const{dialog:e,scrim:i,container:a,headline:o,content:s,actions:n}=this;if(!(e&&i&&a&&o&&s&&n))return;const{container:r,dialog:d,scrim:l,headline:c,content:h,actions:p}=t,m=[[e,d??[]],[i,l??[]],[a,r??[]],[o,c??[]],[s,h??[]],[n,p??[]]],u=[];for(const[t,e]of m)for(const i of e){const e=t.animate(...i);this.cancelAnimations.signal.addEventListener("abort",(()=>{e.cancel()})),u.push(e)}await Promise.all(u.map((t=>t.finished.catch((()=>{})))))}handleHeadlineChange(t){const e=t.target;this.hasHeadline=e.assignedElements().length>0}handleActionsChange(t){const e=t.target;this.hasActions=e.assignedElements().length>0}handleIconChange(t){const e=t.target;this.hasIcon=e.assignedElements().length>0}handleAnchorIntersection(t){const{target:e,isIntersecting:i}=t;e===this.topAnchor&&(this.isAtScrollTop=i),e===this.bottomAnchor&&(this.isAtScrollBottom=i)}getIsConnectedPromise(){return new Promise((t=>{this.isConnectedPromiseResolve=t}))}handleFocusTrapFocus(t){const[e,i]=this.getFirstAndLastFocusableChildren();if(!e||!i)return void this.dialog?.focus();const a=t.target===this.firstFocusTrap,o=!a,s=t.relatedTarget===e,n=t.relatedTarget===i,r=!s&&!n;if(o&&n||a&&r)return void e.focus();(a&&s||o&&r)&&i.focus()}getFirstAndLastFocusableChildren(){let t=null,e=null;for(this.treewalker.currentNode=this.treewalker.root;this.treewalker.nextNode();){const i=this.treewalker.currentNode;F(i)&&(t||(t=i),e=i)}return[t,e]}}function F(t){const e=":not(:disabled,[disabled])";if(t.matches(":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])"+e+':not([tabindex^="-"])'))return!0;return!!t.localName.includes("-")&&(!!t.matches(e)&&(t.shadowRoot?.delegatesFocus??!1))}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */u(T),s([n({type:Boolean})],T.prototype,"open",null),s([n({type:Boolean})],T.prototype,"quick",void 0),s([n({attribute:!1})],T.prototype,"returnValue",void 0),s([n()],T.prototype,"type",void 0),s([n({type:Boolean,attribute:"no-focus-trap"})],T.prototype,"noFocusTrap",void 0),s([v("dialog")],T.prototype,"dialog",void 0),s([v(".scrim")],T.prototype,"scrim",void 0),s([v(".container")],T.prototype,"container",void 0),s([v(".headline")],T.prototype,"headline",void 0),s([v(".content")],T.prototype,"content",void 0),s([v(".actions")],T.prototype,"actions",void 0),s([r()],T.prototype,"isAtScrollTop",void 0),s([r()],T.prototype,"isAtScrollBottom",void 0),s([v(".scroller")],T.prototype,"scroller",void 0),s([v(".top.anchor")],T.prototype,"topAnchor",void 0),s([v(".bottom.anchor")],T.prototype,"bottomAnchor",void 0),s([v(".focus-trap")],T.prototype,"firstFocusTrap",void 0),s([r()],T.prototype,"hasHeadline",void 0),s([r()],T.prototype,"hasActions",void 0),s([r()],T.prototype,"hasIcon",void 0);const B=e`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let I=class extends T{};I.styles=[B],I=s([i("md-dialog")],I);var S=function(t,e,i,a){for(var o,s=arguments.length,n=s<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a,r=t.length-1;r>=0;r--)(o=t[r])&&(n=(s<3?o(n):s>3?o(e,i,n):o(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Y=class extends t{render(){return a`
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
        ${y(this.distinctDates,(t=>a`<md-select-option value="${t}"
            >${t}</md-select-option
          > `))}
      </md-outlined-select>

      <h2>ゲームごとのポイント</h2>
      <table class="game-results">
        ${(()=>{let t="";return this.todaysResultsList.map((e=>{const i=e.results.map((t=>t.player)).join(","),o=i!==t;return t=i,a`
              ${o?a`<thead><tr>
                    ${e.results.map((t=>a`<th>${t.player}</th>`))}
                    <th>操作</th>
                  </tr></thead>`:""}
              <tbody>
                <tr>
                  ${e.results.map((t=>a`
                    <td class="rank-${t.rank}">
                      ${x(t.point)}(${t.rank})
                    </td>
                  `))}
                  <td class="edit-cell">
                    <md-text-button
                      @click=${t=>{t.stopPropagation(),this._openEditDialog(e)}}
                      >編集</md-text-button
                    >
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
        <div slot="headline">チョンボ・役満の修正</div>
        <div slot="content" class="edit-dialog-content">
          <p>${this._editHeadline}</p>
          ${this._editError?a`<p class="edit-dialog-error">${this._editError}</p>`:""}
          <h3>チョンボ</h3>
          ${y(this._editChonboRows,((t,e)=>a`
              <div>
                <md-outlined-text-field
                  class="width-50"
                  label="プレイヤー"
                  type="text"
                  .value=${t.player}
                  @input=${t=>{const i=t.currentTarget;this._patchChonboRow(e,"player",i.value)}}
                ></md-outlined-text-field>
                <md-outlined-text-field
                  class="width-30"
                  label="罰符"
                  type="number"
                  .value=${t.point}
                  @input=${t=>{const i=t.currentTarget;this._patchChonboRow(e,"point",i.value)}}
                ></md-outlined-text-field>
              </div>
            `))}
          <h3>役満</h3>
          ${y(this._editYakumanRows,((t,e)=>a`
              <div>
                <md-outlined-text-field
                  class="width-50"
                  label="プレイヤー"
                  type="text"
                  .value=${t.player}
                  @input=${t=>{const i=t.currentTarget;this._patchYakumanRow(e,"player",i.value)}}
                ></md-outlined-text-field>
                <md-outlined-text-field
                  class="width-30"
                  label="役満"
                  type="text"
                  .value=${t.yakuman}
                  @input=${t=>{const i=t.currentTarget;this._patchYakumanRow(e,"yakuman",i.value)}}
                ></md-outlined-text-field>
              </div>
            `))}
        </div>
        <div slot="actions">
          <md-text-button
            @click=${this._closeEditDialog}
            ?disabled=${this._editSaving}
            >キャンセル</md-text-button
          >
          <md-filled-button
            @click=${this._saveEditDialog}
            ?disabled=${this._editSaving}
            >保存</md-filled-button
          >
        </div>
      </md-dialog>

      <h2>合計</h2>
      <div class="table-box">
        <table>
          <thead>
            <tr>
              ${y(Array.from(this.playerPoints.entries()),(([t,e])=>a` <th>${t}</th> `))}
            </tr>
          </thead>
          <tbody>
            <tr>
              ${y(Array.from(this.playerPoints.entries()),(([t,e])=>a` <td>${x(e)}</td> `))}
            </tr>
          </tbody>
        </table>
      </div>

      <h2>役満</h2>
      ${0===this.todaysYakuman.length?a`<p>なし</p>`:""}
      <table>
        ${y(this.todaysYakuman,(t=>a`
            <thead>
              <tr>
                ${t.map((t=>a` <th>${t.player}</th> `))}
              </tr>
            </thead>
            <tbody>
              <tr>
                ${t.map((t=>a` <td>${t.yakuman}</td> `))}
              </tr>
            </tbody>
          `))}
      </table>

      <h2>チョンボ</h2>
      ${0===this.todaysChonbo.length?a`<p>なし</p>`:""}
      ${(()=>{const t=new Map;return this.todaysChonbo.flat().forEach((e=>{t.set(e.player,(t.get(e.player)||0)+e.point)})),a`
          <table>
            <thead>
              <tr>
                ${Array.from(t.keys()).map((t=>a`<th>${t}</th>`))}
              </tr>
            </thead>
            <tbody>
              <tr>
                ${Array.from(t.values()).map((t=>a`<td>${t}</td>`))}
              </tr>
            </tbody>
          </table>
        `})()}
    `}constructor(){super(),this.distinctDates=[],this.todaysResultsList=[],this.playerPoints=new Map,this.todaysChonbo=[],this.todaysYakuman=[],this._editDialogOpen=!1,this._editDocId=null,this._editHeadline="",this._editChonboRows=[],this._editYakumanRows=[],this._editSaving=!1,this._editError="",this.startup()}async startup(){await this._loadData();const t=(new Date).getFullYear().toString(),e=this.distinctDates[0]===t?this.distinctDates[1]:this.distinctDates[0];this._date.selectedIndex=this.distinctDates.indexOf(e),this._date.displayText=e}async _changeGame(){await this._loadData(!0)}async _changeDate(){await this._loadData()}async _loadData(t=!1){this.todaysResultsList=[],this.todaysChonbo=[],this.todaysYakuman=[];const e=(await d(l(c,"results"))).docs,i=this._gameType.value||"四麻";this._setDistinctDates(e,i);const a=(new Date).getFullYear().toString(),o=this.distinctDates[0]===a?this.distinctDates[1]:this.distinctDates[0],s=this._date.value,n=!t&&s?s:o;this._date.value=n,this._date.selectedIndex=this.distinctDates.indexOf(n),this._date.displayText=n,e.sort(((t,e)=>{const i=t.data().gameInfo.date,a=e.data().gameInfo.date;return i!==a?i<a?-1:1:t.data().gameInfo.order-e.data().gameInfo.order}));const r=new Map;e.forEach((t=>{if(t.data().gameInfo.gameType!==i)return;if(n!==a&&t.data().gameInfo.date!==n||n===a&&!t.data().gameInfo.date.startsWith(a))return;const e=[...t.data().results].sort(((t,e)=>t.player<e.player?-1:1)),o=[...t.data().chonbo??[]].sort(((t,e)=>t.player<e.player?-1:1)),s=[...t.data().yakuman??[]].sort(((t,e)=>t.player<e.player?-1:1));this.todaysResultsList.push({docId:t.id,date:t.data().gameInfo.date,order:String(t.data().gameInfo.order??""),results:e,chonbo:o,yakuman:s}),e.forEach((t=>{const e=r.get(t.player)||0;r.set(t.player,e+t.point)})),o.length>0&&this.todaysChonbo.push(o),s.length>0&&this.todaysYakuman.push(s)})),this.playerPoints=new Map(Array.from(r).sort(((t,e)=>t[1]<e[1]?1:-1)))}_openEditDialog(t){this._editError="",this._editDocId=t.docId,this._editHeadline=`${t.date} · 順序 ${t.order}`,this._editChonboRows=[0,1,2,3].map((e=>{const i=t.chonbo[e];return i?{player:i.player,point:String(i.point)}:{player:"",point:"-20"}})),this._editYakumanRows=[0,1,2,3].map((e=>{const i=t.yakuman[e];return i?{player:i.player,yakuman:i.yakuman}:{player:"",yakuman:""}})),this._editDialogOpen=!0}_closeEditDialog(){this._editSaving||(this._editDialogOpen=!1)}_onEditDialogClosed(){this._editDialogOpen=!1,this._editDocId=null,this._editError="",this._editSaving=!1}_patchChonboRow(t,e,i){this._editChonboRows=this._editChonboRows.map(((a,o)=>o===t?{...a,[e]:i}:a))}_patchYakumanRow(t,e,i){this._editYakumanRows=this._editYakumanRows.map(((a,o)=>o===t?{...a,[e]:i}:a))}_chonboFromEditRows(){const t=[];for(const e of this._editChonboRows){if(""===e.player.trim())continue;const i=Number(e.point);t.push({player:e.player.trim(),point:Number.isFinite(i)?i:0})}return t}_yakumanFromEditRows(){const t=[];for(const e of this._editYakumanRows)""!==e.player.trim()&&t.push({player:e.player.trim(),yakuman:e.yakuman.trim()});return t}async _saveEditDialog(){if(this._editDocId&&!this._editSaving){this._editSaving=!0,this._editError="";try{const t=this._chonboFromEditRows(),e=this._yakumanFromEditRows();await h(p(c,"results",this._editDocId),{chonbo:t,yakuman:e}),this._editDialogOpen=!1,await this._loadData()}catch(t){console.error(t),this._editError="保存に失敗しました。もう一度お試しください。"}finally{this._editSaving=!1}}}_setDistinctDates(t,e){this.distinctDates=[];const i=t.map((t=>t.data().gameInfo.gameType!==e?"":t.data().gameInfo.date)),a=f(i).filter((t=>t));a.sort(((t,e)=>t<e?1:-1));const o=(new Date).getFullYear().toString();this.distinctDates=[o,...a]}};Y.styles=[_,e`
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

      .edit-cell {
        vertical-align: middle;
        white-space: nowrap;
      }

      .edit-dialog-content {
        padding: 0 0 0.5rem;
      }

      .edit-dialog-content h3 {
        margin: 0.75rem 0 0.25rem;
        font-size: 1rem;
        font-weight: 600;
      }

      .edit-dialog-error {
        color: #b3261e;
        margin: 0.5rem 0 0;
        font-size: 0.875rem;
      }
    `],S([n({type:Array})],Y.prototype,"distinctDates",void 0),S([n({type:Array})],Y.prototype,"todaysResultsList",void 0),S([n({attribute:!1})],Y.prototype,"playerPoints",void 0),S([n({type:Array})],Y.prototype,"todaysChonbo",void 0),S([n({type:Array})],Y.prototype,"todaysYakuman",void 0),S([r()],Y.prototype,"_editDialogOpen",void 0),S([r()],Y.prototype,"_editDocId",void 0),S([r()],Y.prototype,"_editHeadline",void 0),S([r()],Y.prototype,"_editChonboRows",void 0),S([r()],Y.prototype,"_editYakumanRows",void 0),S([r()],Y.prototype,"_editSaving",void 0),S([r()],Y.prototype,"_editError",void 0),S([v("#gameType")],Y.prototype,"_gameType",void 0),S([v("#date")],Y.prototype,"_date",void 0),Y=S([i("mahjong-today")],Y);export{Y as MahjongToday};
