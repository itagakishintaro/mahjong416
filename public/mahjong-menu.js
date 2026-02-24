import{i as t,a as e,t as a,b as r,A as o}from"./custom-element-BXQNS_jb.js";import{_ as i,n as s,r as n}from"./firestore-BnCVonOG.js";import{e as c,n as l,o as d,a as h,E as v}from"./select-option-B2ua70te.js";import"./mahjong-calc.js";import"./mahjong-today.js";import"./mahjong-stats.js";import"./mahjong-individual.js";import"./mahjong-title.js";import"./mahjong-rule.js";import"./circular-progress-DnPzHFx5.js";import"./pf-accordion-DBdqHKw_.js";import"./utils-D4GKOtwe.js";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class m extends t{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}i([s({type:Boolean,reflect:!0})],m.prototype,"inset",void 0),i([s({type:Boolean,reflect:!0,attribute:"inset-start"})],m.prototype,"insetStart",void 0),i([s({type:Boolean,reflect:!0,attribute:"inset-end"})],m.prototype,"insetEnd",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const p=e`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let b=class extends m{};b.styles=[p],b=i([a("md-divider")],b);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const y=Symbol("isFocusable"),u=Symbol("privateIsFocusable"),f=Symbol("externalTabIndex"),x=Symbol("isUpdatingTabIndex"),g=Symbol("updateTabIndex");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _;const w=Symbol("indicator"),j=Symbol("animateIndicator"),T=function(t){var e,a,r;class o extends t{constructor(){super(...arguments),this[e]=!0,this[a]=null,this[r]=!1}get[y](){return this[u]}set[y](t){this[y]!==t&&(this[u]=t,this[g]())}connectedCallback(){super.connectedCallback(),this[g]()}attributeChangedCallback(t,e,a){if("tabindex"===t){if(this.requestUpdate("tabIndex",Number(e??-1)),!this[x])return this.hasAttribute("tabindex")?void(this[f]=this.tabIndex):(this[f]=null,void this[g]())}else super.attributeChangedCallback(t,e,a)}[(e=u,a=f,r=x,g)](){const t=this[y]?0:-1,e=this[f]??t;this[x]=!0,this.tabIndex=e,this[x]=!1}}return i([s({noAccessor:!0})],o.prototype,"tabIndex",void 0),o}(t);class k extends T{get selected(){return this.active}set selected(t){this.active=t}constructor(){super(),this.isTab=!0,this.active=!1,this.hasIcon=!1,this.iconOnly=!1,this.fullWidthIndicator=!1,this.internals=this.attachInternals(),this.internals.role="tab",this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){const t=r`<div class="indicator"></div>`;return r`<div
      class="button"
      role="presentation"
      @click=${this.handleContentClick}>
      <md-focus-ring part="focus-ring" inward .control=${this}></md-focus-ring>
      <md-elevation part="elevation"></md-elevation>
      <md-ripple .control=${this}></md-ripple>
      <div
        class="content ${h(this.getContentClasses())}"
        role="presentation">
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
        <slot @slotchange=${this.handleSlotChange}></slot>
        ${this.fullWidthIndicator?o:t}
      </div>
      ${this.fullWidthIndicator?t:o}
    </div>`}getContentClasses(){return{"has-icon":this.hasIcon,"has-label":!this.iconOnly}}updated(){this.internals.ariaSelected=String(this.active)}async handleKeydown(t){await 0,t.defaultPrevented||"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.click())}handleContentClick(t){t.stopPropagation(),this.click()}[(_=w,j)](t){if(!this[w])return;this[w].getAnimations().forEach((t=>{t.cancel()}));const e=this.getKeyframes(t);null!==e&&this[w].animate(e,{duration:250,easing:v.EMPHASIZED})}getKeyframes(t){const e=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!this.active)return e?[{opacity:1},{transform:"none"}]:null;const a={},r=t[w]?.getBoundingClientRect()??{},o=r.left,i=r.width,s=this[w].getBoundingClientRect(),n=s.left,c=i/s.width;return e||void 0===o||void 0===n||isNaN(c)?a.opacity=0:a.transform=`translateX(${(o-n).toFixed(4)}px) scaleX(${c.toFixed(4)})`,[a,{transform:"none"}]}handleSlotChange(){this.iconOnly=!1;for(const t of this.assignedDefaultNodes){const e=t.nodeType===Node.TEXT_NODE&&!!t.wholeText.match(/\S/);if(t.nodeType===Node.ELEMENT_NODE||e)return}this.iconOnly=!0}handleIconSlotChange(){this.hasIcon=this.assignedIcons.length>0}}i([s({type:Boolean,reflect:!0,attribute:"md-tab"})],k.prototype,"isTab",void 0),i([s({type:Boolean,reflect:!0})],k.prototype,"active",void 0),i([s({type:Boolean})],k.prototype,"selected",null),i([s({type:Boolean,attribute:"has-icon"})],k.prototype,"hasIcon",void 0),i([s({type:Boolean,attribute:"icon-only"})],k.prototype,"iconOnly",void 0),i([c(".indicator")],k.prototype,_,void 0),i([n()],k.prototype,"fullWidthIndicator",void 0),i([l({flatten:!0})],k.prototype,"assignedDefaultNodes",void 0),i([d({slot:"icon",flatten:!0})],k.prototype,"assignedIcons",void 0);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class z extends t{get activeTab(){return this.tabs.find((t=>t.active))??null}set activeTab(t){t&&this.activateTab(t)}get activeTabIndex(){return this.tabs.findIndex((t=>t.active))}set activeTabIndex(t){const e=()=>{const e=this.tabs[t];e&&this.activateTab(e)};this.slotElement?e():this.updateComplete.then(e)}get focusedTab(){return this.tabs.find((t=>t.matches(":focus-within")))}constructor(){super(),this.autoActivate=!1,this.internals=this.attachInternals(),this.internals.role="tablist",this.addEventListener("keydown",this.handleKeydown.bind(this)),this.addEventListener("keyup",this.handleKeyup.bind(this)),this.addEventListener("focusout",this.handleFocusout.bind(this))}async scrollToTab(t){await this.updateComplete;const{tabs:e}=this;if(t??(t=this.activeTab),!t||!e.includes(t)||!this.tabsScrollerElement)return;for(const t of this.tabs)await t.updateComplete;const a=t.offsetLeft,r=t.offsetWidth,o=this.scrollLeft,i=a-48,s=a+r-this.offsetWidth+48,n=Math.min(i,Math.max(s,o)),c=this.focusedTab?"auto":"instant";this.tabsScrollerElement.scrollTo({behavior:c,top:0,left:n})}render(){return r`
      <div class="tabs">
        <slot
          @slotchange=${this.handleSlotChange}
          @click=${this.handleTabClick}></slot>
      </div>
      <md-divider part="divider"></md-divider>
    `}async handleTabClick(t){const e=t.target;var a;
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */(await 0,t.defaultPrevented||!((a=e)instanceof HTMLElement&&a.hasAttribute("md-tab"))||e.active)||this.activateTab(e)}activateTab(t){const{tabs:e}=this,a=this.activeTab;if(e.includes(t)&&a!==t){for(const a of e)a.active=a===t;if(a){if(!this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))){for(const t of e)t.active=t===a;return}t[j](a)}this.updateFocusableTab(t),this.scrollToTab(t)}}updateFocusableTab(t){for(const e of this.tabs)e.tabIndex=e===t?0:-1}async handleKeydown(t){await 0;const e="ArrowLeft"===t.key,a="ArrowRight"===t.key,r="Home"===t.key,o="End"===t.key;if(t.defaultPrevented||!e&&!a&&!r&&!o)return;const{tabs:i}=this;if(i.length<2)return;let s;if(t.preventDefault(),r||o)s=r?0:i.length-1;else{const t="rtl"===getComputedStyle(this).direction?e:a,{focusedTab:r}=this;if(r){const e=this.tabs.indexOf(r);s=t?e+1:e-1,s>=i.length?s=0:s<0&&(s=i.length-1)}else s=t?0:i.length-1}const n=i[s];n.focus(),this.autoActivate?this.activateTab(n):this.updateFocusableTab(n)}handleKeyup(){this.scrollToTab(this.focusedTab??this.activeTab)}handleFocusout(){if(this.matches(":focus-within"))return;const{activeTab:t}=this;t&&this.updateFocusableTab(t)}handleSlotChange(){const t=this.tabs[0];!this.activeTab&&t&&this.activateTab(t),this.scrollToTab(this.activeTab)}}i([d({flatten:!0,selector:"[md-tab]"})],z.prototype,"tabs",void 0),i([s({type:Number,attribute:"active-tab-index"})],z.prototype,"activeTabIndex",null),i([s({type:Boolean,attribute:"auto-activate"})],z.prototype,"autoActivate",void 0),i([c(".tabs")],z.prototype,"tabsScrollerElement",void 0),i([c("slot")],z.prototype,"slotElement",void 0);const C=e`:host{box-sizing:border-box;display:flex;flex-direction:column;overflow:auto;scroll-behavior:smooth;scrollbar-width:none;position:relative}:host([hidden]){display:none}:host::-webkit-scrollbar{display:none}.tabs{align-items:end;display:flex;height:100%;overflow:inherit;scroll-behavior:inherit;scrollbar-width:inherit;justify-content:space-between;width:100%}::slotted(*){flex:1}::slotted([active]){z-index:1}
`;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let I=class extends z{};I.styles=[C],I=i([a("md-tabs")],I);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class S extends k{constructor(){super(...arguments),this.inlineIcon=!1}getContentClasses(){return{...super.getContentClasses(),stacked:!this.inlineIcon}}}i([s({type:Boolean,attribute:"inline-icon"})],S.prototype,"inlineIcon",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const $=e`:host{--_active-indicator-color: var(--md-primary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-primary-tab-active-indicator-height, 3px);--_active-indicator-shape: var(--md-primary-tab-active-indicator-shape, 3px 3px 0px 0px);--_active-hover-state-layer-color: var(--md-primary-tab-active-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-hover-state-layer-opacity: var(--md-primary-tab-active-hover-state-layer-opacity, 0.08);--_active-pressed-state-layer-color: var(--md-primary-tab-active-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-state-layer-opacity: var(--md-primary-tab-active-pressed-state-layer-opacity, 0.12);--_container-color: var(--md-primary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-primary-tab-container-elevation, 0);--_container-height: var(--md-primary-tab-container-height, 48px);--_with-icon-and-label-text-container-height: var(--md-primary-tab-with-icon-and-label-text-container-height, 64px);--_hover-state-layer-color: var(--md-primary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-primary-tab-hover-state-layer-opacity, 0.08);--_pressed-state-layer-color: var(--md-primary-tab-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-primary-tab-pressed-state-layer-opacity, 0.12);--_active-focus-icon-color: var(--md-primary-tab-active-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_active-hover-icon-color: var(--md-primary-tab-active-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_active-icon-color: var(--md-primary-tab-active-icon-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-icon-color: var(--md-primary-tab-active-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-primary-tab-icon-size, 24px);--_focus-icon-color: var(--md-primary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-primary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-color: var(--md-primary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-primary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-primary-tab-label-text-font, var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-primary-tab-label-text-line-height, var(--md-sys-typescale-title-small-line-height, 1.25rem));--_label-text-size: var(--md-primary-tab-label-text-size, var(--md-sys-typescale-title-small-size, 0.875rem));--_label-text-weight: var(--md-primary-tab-label-text-weight, var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500)));--_active-focus-label-text-color: var(--md-primary-tab-active-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-hover-label-text-color: var(--md-primary-tab-active-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-label-text-color: var(--md-primary-tab-active-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-label-text-color: var(--md-primary-tab-active-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-label-text-color: var(--md-primary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-primary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-color: var(--md-primary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-primary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var(--md-primary-tab-container-shape-start-start, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-start-end: var(--md-primary-tab-container-shape-start-end, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-end: var(--md-primary-tab-container-shape-end-end, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-primary-tab-container-shape-end-start, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)))}.content.stacked{flex-direction:column;gap:2px}.content.stacked.has-icon.has-label{height:var(--_with-icon-and-label-text-container-height)}
`,B=e`:host{display:inline-flex;align-items:center;justify-content:center;outline:none;padding:0 16px;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:middle;user-select:none;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);color:var(--_label-text-color);z-index:0;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);--md-elevation-level: var(--_container-elevation)}md-focus-ring{--md-focus-ring-shape: 8px}:host([active]) md-focus-ring{margin-bottom:calc(var(--_active-indicator-height) + 1px)}.button::before{background:var(--_container-color);content:"";inset:0;position:absolute;z-index:-1}.button::before,md-ripple,md-elevation{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start)}.content{position:relative;box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;height:var(--_container-height);gap:8px}.indicator{position:absolute;box-sizing:border-box;z-index:-1;transform-origin:bottom left;background:var(--_active-indicator-color);border-radius:var(--_active-indicator-shape);height:var(--_active-indicator-height);inset:auto 0 0 0;opacity:0}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);width:var(--_icon-size);height:var(--_icon-size)}:host(:hover){color:var(--_hover-label-text-color);cursor:pointer}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus){color:var(--_focus-label-text-color)}:host(:focus) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active){color:var(--_pressed-label-text-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([active]) .indicator{opacity:1}:host([active]){color:var(--_active-label-text-color);--md-ripple-hover-color: var(--_active-hover-state-layer-color);--md-ripple-hover-opacity: var(--_active-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_active-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_active-pressed-state-layer-opacity)}:host([active]) ::slotted([slot=icon]){color:var(--_active-icon-color)}:host([active]:hover){color:var(--_active-hover-label-text-color)}:host([active]:hover) ::slotted([slot=icon]){color:var(--_active-hover-icon-color)}:host([active]:focus){color:var(--_active-focus-label-text-color)}:host([active]:focus) ::slotted([slot=icon]){color:var(--_active-focus-icon-color)}:host([active]:active){color:var(--_active-pressed-label-text-color)}:host([active]:active) ::slotted([slot=icon]){color:var(--_active-pressed-icon-color)}:host,::slotted(*){white-space:nowrap}@media(forced-colors: active){.indicator{background:CanvasText}}
`;
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let E=class extends S{};E.styles=[B,$],E=i([a("md-primary-tab")],E);var N=function(t,e,a,r){for(var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r,n=t.length-1;n>=0;n--)(o=t[n])&&(s=(i<3?o(s):i>3?o(e,a,s):o(e,a))||s);return i>3&&s&&Object.defineProperty(e,a,s),s};let A=class extends t{render(){return r`
      <md-tabs @change="${this._changed}">
        <md-primary-tab>点数計算</md-primary-tab>
        <md-primary-tab id="today">今日の成績</md-primary-tab>
        <md-primary-tab>総合成績</md-primary-tab>
        <md-primary-tab>個人成績</md-primary-tab>
        <md-primary-tab>タイトル</md-primary-tab>
        <md-primary-tab>ルール</md-primary-tab>
      </md-tabs>
      <main>
        ${((t,e,a)=>{for(const a of e)if(a[0]===t)return(0,a[1])();return a?.()})(this._activeTab,[[0,()=>r`<mahjong-calc></mahjong-calc>`],[1,()=>r`<mahjong-today></mahjong-today>`],[2,()=>r`<mahjong-stats></mahjong-stats>`],[3,()=>r`<mahjong-individual></mahjong-individual>`],[4,()=>r`<mahjong-title></mahjong-title>`],[5,()=>r`<mahjong-rule></mahjong-rule>`]])}
      </main>
    `}constructor(){super(),this._activeTab=0,this.addEventListener("uploaded",this._uploaded)}_changed(t){const e=t.target;this._activeTab=e.activeTabIndex}_uploaded(){this.shadowRoot.querySelector("#today").click()}};N([n()],A.prototype,"_activeTab",void 0),A=N([a("mahjong-menu")],A);export{A as MahjongMenu};
