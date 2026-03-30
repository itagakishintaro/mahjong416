import{i as t,a as e,t as i,b as o,A as a}from"./custom-element-BXQNS_jb.js";import{_ as s,n,r,g as d,c as l,d as c,u as h,b as m,e as p}from"./firestore-D58uvr3k.js";import{E as u,r as v,e as b,a as g,b as y}from"./select-option-BinNGx14.js";import{o as x,r as f,d as w}from"./utils-D4GKOtwe.js";import{B as $,s as _,c as k}from"./calc-sub-styles-DMQCouV8.js";import"./pf-accordion-2H0RkR96.js";
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class z extends t{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}s([n({type:Boolean,reflect:!0})],z.prototype,"inset",void 0),s([n({type:Boolean,reflect:!0,attribute:"inset-start"})],z.prototype,"insetStart",void 0),s([n({type:Boolean,reflect:!0,attribute:"inset-end"})],z.prototype,"insetEnd",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const C=e`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let E=class extends z{};E.styles=[C],E=s([i("md-divider")],E);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class D extends ${}
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
 */;let R=class extends D{};R.styles=[_,A],R=s([i("md-text-button")],R);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const B={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:u.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:u.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},j={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:u.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:u.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class T extends t{get open(){return this.isOpen}set open(t){t!==this.isOpen&&(this.isOpen=t,t?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.quick=!1,this.returnValue="",this.noFocusTrap=!1,this.getOpenAnimation=()=>B,this.getCloseAnimation=()=>j,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.escapePressedWithoutCancel=!1,this.treewalker=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT),this.addEventListener("submit",this.handleSubmit)}async show(){this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const t=this.dialog;if(t.open||!this.isOpening)return void(this.isOpening=!1);if(!this.dispatchEvent(new Event("open",{cancelable:!0})))return this.open=!1,void(this.isOpening=!1);t.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),this.querySelector("[autofocus]")?.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(t=this.returnValue){if(this.isOpening=!1,!this.isConnected)return void(this.open=!1);await this.updateComplete;const e=this.dialog;if(!e.open||this.isOpening)return void(this.open=!1);const i=this.returnValue;this.returnValue=t;this.dispatchEvent(new Event("close",{cancelable:!0}))?(await this.animateDialog(this.getCloseAnimation()),e.close(t),this.open=!1,this.dispatchEvent(new Event("closed"))):this.returnValue=i}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const t=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),e={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:t,"show-top-divider":t&&!this.isAtScrollTop,"show-bottom-divider":t&&!this.isAtScrollBottom},i=this.open&&!this.noFocusTrap,s=o`
      <div
        class="focus-trap"
        tabindex="0"
        aria-hidden="true"
        @focus=${this.handleFocusTrapFocus}></div>
    `,{ariaLabel:n}=this;return o`
      <div class="scrim"></div>
      <dialog
        class=${g(e)}
        aria-label=${n||a}
        aria-labelledby=${this.hasHeadline?"headline":a}
        role=${"alert"===this.type?"alertdialog":a}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        @close=${this.handleClose}
        @keydown=${this.handleKeydown}
        .returnValue=${this.returnValue||a}>
        ${i?s:a}
        <div class="container" @click=${this.handleContentClick}>
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||a}>
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
        ${i?s:a}
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver((t=>{for(const e of t)this.handleAnchorIntersection(e)}),{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent)return void(this.nextClickIsFromContent=!1);!this.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(t){const e=t.target,{submitter:i}=t;"dialog"===e.method&&i&&this.close(i.getAttribute("value")??this.returnValue)}handleCancel(t){if(t.target!==this.dialog)return;this.escapePressedWithoutCancel=!1;const e=!y(this,t);t.preventDefault(),e||this.close()}handleClose(){this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,this.dialog?.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(t){"Escape"===t.key&&(this.escapePressedWithoutCancel=!0,setTimeout((()=>{this.escapePressedWithoutCancel=!1})))}async animateDialog(t){if(this.cancelAnimations?.abort(),this.cancelAnimations=new AbortController,this.quick)return;const{dialog:e,scrim:i,container:o,headline:a,content:s,actions:n}=this;if(!(e&&i&&o&&a&&s&&n))return;const{container:r,dialog:d,scrim:l,headline:c,content:h,actions:m}=t,p=[[e,d??[]],[i,l??[]],[o,r??[]],[a,c??[]],[s,h??[]],[n,m??[]]],u=[];for(const[t,e]of p)for(const i of e){const e=t.animate(...i);this.cancelAnimations.signal.addEventListener("abort",(()=>{e.cancel()})),u.push(e)}await Promise.all(u.map((t=>t.finished.catch((()=>{})))))}handleHeadlineChange(t){const e=t.target;this.hasHeadline=e.assignedElements().length>0}handleActionsChange(t){const e=t.target;this.hasActions=e.assignedElements().length>0}handleIconChange(t){const e=t.target;this.hasIcon=e.assignedElements().length>0}handleAnchorIntersection(t){const{target:e,isIntersecting:i}=t;e===this.topAnchor&&(this.isAtScrollTop=i),e===this.bottomAnchor&&(this.isAtScrollBottom=i)}getIsConnectedPromise(){return new Promise((t=>{this.isConnectedPromiseResolve=t}))}handleFocusTrapFocus(t){const[e,i]=this.getFirstAndLastFocusableChildren();if(!e||!i)return void this.dialog?.focus();const o=t.target===this.firstFocusTrap,a=!o,s=t.relatedTarget===e,n=t.relatedTarget===i,r=!s&&!n;if(a&&n||o&&r)return void e.focus();(o&&s||a&&r)&&i.focus()}getFirstAndLastFocusableChildren(){let t=null,e=null;for(this.treewalker.currentNode=this.treewalker.root;this.treewalker.nextNode();){const i=this.treewalker.currentNode;M(i)&&(t||(t=i),e=i)}return[t,e]}}function M(t){const e=":not(:disabled,[disabled])";if(t.matches(":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])"+e+':not([tabindex^="-"])'))return!0;return!!t.localName.includes("-")&&(!!t.matches(e)&&(t.shadowRoot?.delegatesFocus??!1))}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */v(T),s([n({type:Boolean})],T.prototype,"open",null),s([n({type:Boolean})],T.prototype,"quick",void 0),s([n({attribute:!1})],T.prototype,"returnValue",void 0),s([n()],T.prototype,"type",void 0),s([n({type:Boolean,attribute:"no-focus-trap"})],T.prototype,"noFocusTrap",void 0),s([b("dialog")],T.prototype,"dialog",void 0),s([b(".scrim")],T.prototype,"scrim",void 0),s([b(".container")],T.prototype,"container",void 0),s([b(".headline")],T.prototype,"headline",void 0),s([b(".content")],T.prototype,"content",void 0),s([b(".actions")],T.prototype,"actions",void 0),s([r()],T.prototype,"isAtScrollTop",void 0),s([r()],T.prototype,"isAtScrollBottom",void 0),s([b(".scroller")],T.prototype,"scroller",void 0),s([b(".top.anchor")],T.prototype,"topAnchor",void 0),s([b(".bottom.anchor")],T.prototype,"bottomAnchor",void 0),s([b(".focus-trap")],T.prototype,"firstFocusTrap",void 0),s([r()],T.prototype,"hasHeadline",void 0),s([r()],T.prototype,"hasActions",void 0),s([r()],T.prototype,"hasIcon",void 0);const F=e`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let I=class extends T{};I.styles=[F],I=s([i("md-dialog")],I);var Y=function(t,e,i,o){for(var a,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o,r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let L=class extends t{render(){return o`
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
        ${x(this.distinctDates,(t=>o`<md-select-option value="${t}"
            >${t}</md-select-option
          > `))}
      </md-outlined-select>

      <h2>ゲームごとのポイント</h2>
      <table class="game-results">
        ${(()=>{let t="";return this.todaysResultsList.map((e=>{const i=e.results.map((t=>t.player)).join(","),a=i!==t;return t=i,o`
              ${a?o`<thead><tr>
                    ${e.results.map((t=>o`<th>${t.player}</th>`))}
                    <th
                      class="edit-col-header"
                      scope="col"
                      aria-label="チョンボ・役満の編集"
                    ></th>
                  </tr></thead>`:""}
              <tbody>
                <tr>
                  ${e.results.map((t=>o`
                    <td class="rank-${t.rank}">
                      ${f(t.point)}(${t.rank})
                    </td>
                  `))}
                  <td class="edit-cell">
                    <md-icon-button
                      type="button"
                      aria-label="チョンボ・役満を編集"
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
          ${"delete-confirm"===this._editMode?"削除して再入力":"チョンボ・役満の修正"}
        </div>
        <div slot="content" class="edit-dialog-content">
          <p>${this._editHeadline}</p>
          ${"delete-confirm"===this._editMode?o`
                <div class="delete-warning">
                  ⚠
                  このゲームを削除して点数計算画面で再入力します。この操作は取り消せません。
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
                <h3>チョンボ</h3>
          ${x(this._editChonboRows,((t,e)=>o`
              <div class="dialog-row-actions">
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
                ${this._editChonboRows.length>1?o`
                      <md-icon-button
                        type="button"
                        aria-label="行を削除"
                        @click=${()=>this._removeChonboRow(e)}
                      >
                        <svg
                          class="dialog-row-icon-svg"
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
            aria-label="チョンボ行を追加"
            @click=${this._addChonboRow}
          >
            <svg
              class="dialog-row-icon-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </md-icon-button>
          <h3>役満</h3>
          ${x(this._editYakumanRows,((t,e)=>o`
              <div class="dialog-row-actions">
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
                ${this._editYakumanRows.length>1?o`
                      <md-icon-button
                        type="button"
                        aria-label="行を削除"
                        @click=${()=>this._removeYakumanRow(e)}
                      >
                        <svg
                          class="dialog-row-icon-svg"
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
            aria-label="役満行を追加"
            @click=${this._addYakumanRow}
          >
            <svg
              class="dialog-row-icon-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </md-icon-button>
          <div class="delete-section">
            <p class="delete-section-label">危険な操作</p>
            <md-text-button
              class="danger-text-button"
              type="button"
              @click=${this._enterDeleteConfirm}
            >削除して再入力</md-text-button>
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
              `}
        </div>
      </md-dialog>

      <h2>合計</h2>
      <div class="table-box">
        <table>
          <thead>
            <tr>
              ${x(Array.from(this.playerPoints.entries()),(([t,e])=>o` <th>${t}</th> `))}
            </tr>
          </thead>
          <tbody>
            <tr>
              ${x(Array.from(this.playerPoints.entries()),(([t,e])=>o` <td>${f(e)}</td> `))}
            </tr>
          </tbody>
        </table>
      </div>

      <h2>役満</h2>
      ${0===this.todaysYakuman.length?o`<p>なし</p>`:""}
      <table>
        ${x(this.todaysYakuman,(t=>o`
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
    `}constructor(){super(),this.distinctDates=[],this.todaysResultsList=[],this.playerPoints=new Map,this.todaysChonbo=[],this.todaysYakuman=[],this._editDialogOpen=!1,this._editDocId=null,this._editHeadline="",this._editChonboRows=[],this._editYakumanRows=[],this._editSaving=!1,this._editError="",this._editGame=null,this._editMode="edit",this._deleteConfirmInput="",this._deleteExecuting=!1,this.startup()}async startup(){await this._loadData();const t=(new Date).getFullYear().toString(),e=this.distinctDates[0]===t?this.distinctDates[1]:this.distinctDates[0];this._date.selectedIndex=this.distinctDates.indexOf(e),this._date.displayText=e}async _changeGame(){await this._loadData(!0)}async _changeDate(){await this._loadData()}async _loadData(t=!1){this.todaysResultsList=[],this.todaysChonbo=[],this.todaysYakuman=[];const e=(await d(l(c,"results"))).docs,i=this._gameType.value||"四麻";this._setDistinctDates(e,i);const o=(new Date).getFullYear().toString(),a=this.distinctDates[0]===o?this.distinctDates[1]:this.distinctDates[0],s=this._date.value,n=!t&&s?s:a;this._date.value=n,this._date.selectedIndex=this.distinctDates.indexOf(n),this._date.displayText=n,e.sort(((t,e)=>{const i=t.data().gameInfo.date,o=e.data().gameInfo.date;return i!==o?i<o?-1:1:t.data().gameInfo.order-e.data().gameInfo.order}));const r=new Map;e.forEach((t=>{if(t.data().gameInfo.gameType!==i)return;if(n!==o&&t.data().gameInfo.date!==n||n===o&&!t.data().gameInfo.date.startsWith(o))return;const e=[...t.data().results].sort(((t,e)=>t.player<e.player?-1:1)),a=[...t.data().chonbo??[]].sort(((t,e)=>t.player<e.player?-1:1)),s=[...t.data().yakuman??[]].sort(((t,e)=>t.player<e.player?-1:1));this.todaysResultsList.push({docId:t.id,date:t.data().gameInfo.date,order:String(t.data().gameInfo.order??""),gameType:t.data().gameInfo.gameType,results:e,chonbo:a,yakuman:s}),e.forEach((t=>{const e=r.get(t.player)||0;r.set(t.player,e+t.point)})),a.length>0&&this.todaysChonbo.push(a),s.length>0&&this.todaysYakuman.push(s)})),this.playerPoints=new Map(Array.from(r).sort(((t,e)=>t[1]<e[1]?1:-1)))}_openEditDialog(t){this._editError="",this._editDocId=t.docId,this._editGame=t,this._editHeadline=`${t.date} · 順序 ${t.order}`,this._editChonboRows=t.chonbo.length>0?t.chonbo.map((t=>({player:t.player,point:String(t.point)}))):[{player:"",point:"-20"}],this._editYakumanRows=t.yakuman.length>0?t.yakuman.map((t=>({player:t.player,yakuman:t.yakuman}))):[{player:"",yakuman:""}],this._editDialogOpen=!0}_closeEditDialog(){this._editSaving||(this._editDialogOpen=!1)}_onEditDialogClosed(){this._editDialogOpen=!1,this._editDocId=null,this._editGame=null,this._editError="",this._editSaving=!1,this._editMode="edit",this._deleteConfirmInput="",this._deleteExecuting=!1}_patchChonboRow(t,e,i){this._editChonboRows=this._editChonboRows.map(((o,a)=>a===t?{...o,[e]:i}:o))}_patchYakumanRow(t,e,i){this._editYakumanRows=this._editYakumanRows.map(((o,a)=>a===t?{...o,[e]:i}:o))}_addChonboRow(){this._editChonboRows=[...this._editChonboRows,{player:"",point:"-20"}]}_removeChonboRow(t){this._editChonboRows=this._editChonboRows.filter(((e,i)=>i!==t))}_addYakumanRow(){this._editYakumanRows=[...this._editYakumanRows,{player:"",yakuman:""}]}_removeYakumanRow(t){this._editYakumanRows=this._editYakumanRows.filter(((e,i)=>i!==t))}_chonboFromEditRows(){const t=[];for(const e of this._editChonboRows){if(""===e.player.trim())continue;const i=Number(e.point);t.push({player:e.player.trim(),point:Number.isFinite(i)?i:0})}return t}_yakumanFromEditRows(){const t=[];for(const e of this._editYakumanRows)""!==e.player.trim()&&t.push({player:e.player.trim(),yakuman:e.yakuman.trim()});return t}async _saveEditDialog(){if(this._editDocId&&!this._editSaving){this._editSaving=!0,this._editError="";try{const t=this._chonboFromEditRows(),e=this._yakumanFromEditRows();await h(m(c,"results",this._editDocId),{chonbo:t,yakuman:e}),this._editDialogOpen=!1,await this._loadData()}catch(t){console.error(t),this._editError="保存に失敗しました。もう一度お試しください。"}finally{this._editSaving=!1}}}_enterDeleteConfirm(){this._editMode="delete-confirm",this._deleteConfirmInput="",this._editError=""}_cancelDeleteConfirm(){this._editMode="edit",this._deleteConfirmInput="",this._editError=""}async _executeDelete(){if(this._editGame&&!this._deleteExecuting){this._deleteExecuting=!0,this._editError="";try{await p(m(c,"results",this._editGame.docId));const t=[...this._editGame.results].sort(((t,e)=>e.score-t.score));this._editDialogOpen=!1,this.dispatchEvent(new CustomEvent("delete-and-recalc",{bubbles:!0,composed:!0,detail:{gameType:this._editGame.gameType,results:t,chonbo:this._editGame.chonbo,yakuman:this._editGame.yakuman}}))}catch(t){console.error(t),this._editError="削除に失敗しました。もう一度お試しください。"}finally{this._deleteExecuting=!1}}}_setDistinctDates(t,e){this.distinctDates=[];const i=t.map((t=>t.data().gameInfo.gameType!==e?"":t.data().gameInfo.date)),o=w(i).filter((t=>t));o.sort(((t,e)=>t<e?1:-1));const a=(new Date).getFullYear().toString();this.distinctDates=[a,...o]}};L.styles=[k,e`
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

      .dialog-row-actions {
        display: flex;
        align-items: center;
      }

      .dialog-row-actions md-icon-button {
        --md-icon-button-icon-size: 20px;
      }

      .dialog-row-icon-svg {
        display: block;
        width: 20px;
        height: 20px;
        fill: currentColor;
      }
    `],Y([n({type:Array})],L.prototype,"distinctDates",void 0),Y([n({type:Array})],L.prototype,"todaysResultsList",void 0),Y([n({attribute:!1})],L.prototype,"playerPoints",void 0),Y([n({type:Array})],L.prototype,"todaysChonbo",void 0),Y([n({type:Array})],L.prototype,"todaysYakuman",void 0),Y([r()],L.prototype,"_editDialogOpen",void 0),Y([r()],L.prototype,"_editDocId",void 0),Y([r()],L.prototype,"_editHeadline",void 0),Y([r()],L.prototype,"_editChonboRows",void 0),Y([r()],L.prototype,"_editYakumanRows",void 0),Y([r()],L.prototype,"_editSaving",void 0),Y([r()],L.prototype,"_editError",void 0),Y([r()],L.prototype,"_editGame",void 0),Y([r()],L.prototype,"_editMode",void 0),Y([r()],L.prototype,"_deleteConfirmInput",void 0),Y([r()],L.prototype,"_deleteExecuting",void 0),Y([b("#gameType")],L.prototype,"_gameType",void 0),Y([b("#date")],L.prototype,"_date",void 0),L=Y([i("mahjong-today")],L);export{L as MahjongToday};
