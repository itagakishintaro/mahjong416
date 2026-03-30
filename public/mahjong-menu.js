import{b as t,A as e,i as a,a as r,t as o}from"./custom-element-BXQNS_jb.js";import{_ as i,n as s,r as c}from"./firestore-D58uvr3k.js";import"./mahjong-today.js";import{e as n,n as l,o as d,a as h,E as v}from"./select-option-BinNGx14.js";import"./mahjong-calc.js";import"./mahjong-stats.js";import"./mahjong-individual.js";import"./mahjong-title.js";import"./mahjong-rule.js";import"./utils-D4GKOtwe.js";import"./calc-sub-styles-DMQCouV8.js";import"./pf-accordion-2H0RkR96.js";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=Symbol("isFocusable"),p=Symbol("privateIsFocusable"),b=Symbol("externalTabIndex"),y=Symbol("isUpdatingTabIndex"),u=Symbol("updateTabIndex");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var f;const x=Symbol("indicator"),g=Symbol("animateIndicator"),_=function(t){var e,a,r;class o extends t{constructor(){super(...arguments),this[e]=!0,this[a]=null,this[r]=!1}get[m](){return this[p]}set[m](t){this[m]!==t&&(this[p]=t,this[u]())}connectedCallback(){super.connectedCallback(),this[u]()}attributeChangedCallback(t,e,a){if("tabindex"===t){if(this.requestUpdate("tabIndex",Number(e??-1)),!this[y])return this.hasAttribute("tabindex")?void(this[b]=this.tabIndex):(this[b]=null,void this[u]())}else super.attributeChangedCallback(t,e,a)}[(e=p,a=b,r=y,u)](){const t=this[m]?0:-1,e=this[b]??t;this[y]=!0,this.tabIndex=e,this[y]=!1}}return i([s({noAccessor:!0})],o.prototype,"tabIndex",void 0),o}(a);class w extends _{get selected(){return this.active}set selected(t){this.active=t}constructor(){super(),this.isTab=!0,this.active=!1,this.hasIcon=!1,this.iconOnly=!1,this.fullWidthIndicator=!1,this.internals=this.attachInternals(),this.internals.role="tab",this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){const a=t`<div class="indicator"></div>`;return t`<div
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
        ${this.fullWidthIndicator?e:a}
      </div>
      ${this.fullWidthIndicator?a:e}
    </div>`}getContentClasses(){return{"has-icon":this.hasIcon,"has-label":!this.iconOnly}}updated(){this.internals.ariaSelected=String(this.active)}async handleKeydown(t){await 0,t.defaultPrevented||"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.click())}handleContentClick(t){t.stopPropagation(),this.click()}[(f=x,g)](t){if(!this[x])return;this[x].getAnimations().forEach((t=>{t.cancel()}));const e=this.getKeyframes(t);null!==e&&this[x].animate(e,{duration:250,easing:v.EMPHASIZED})}getKeyframes(t){const e=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!this.active)return e?[{opacity:1},{transform:"none"}]:null;const a={},r=t[x]?.getBoundingClientRect()??{},o=r.left,i=r.width,s=this[x].getBoundingClientRect(),c=s.left,n=i/s.width;return e||void 0===o||void 0===c||isNaN(n)?a.opacity=0:a.transform=`translateX(${(o-c).toFixed(4)}px) scaleX(${n.toFixed(4)})`,[a,{transform:"none"}]}handleSlotChange(){this.iconOnly=!1;for(const t of this.assignedDefaultNodes){const e=t.nodeType===Node.TEXT_NODE&&!!t.wholeText.match(/\S/);if(t.nodeType===Node.ELEMENT_NODE||e)return}this.iconOnly=!0}handleIconSlotChange(){this.hasIcon=this.assignedIcons.length>0}}i([s({type:Boolean,reflect:!0,attribute:"md-tab"})],w.prototype,"isTab",void 0),i([s({type:Boolean,reflect:!0})],w.prototype,"active",void 0),i([s({type:Boolean})],w.prototype,"selected",null),i([s({type:Boolean,attribute:"has-icon"})],w.prototype,"hasIcon",void 0),i([s({type:Boolean,attribute:"icon-only"})],w.prototype,"iconOnly",void 0),i([n(".indicator")],w.prototype,f,void 0),i([c()],w.prototype,"fullWidthIndicator",void 0),i([l({flatten:!0})],w.prototype,"assignedDefaultNodes",void 0),i([d({slot:"icon",flatten:!0})],w.prototype,"assignedIcons",void 0);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class j extends a{get activeTab(){return this.tabs.find((t=>t.active))??null}set activeTab(t){t&&this.activateTab(t)}get activeTabIndex(){return this.tabs.findIndex((t=>t.active))}set activeTabIndex(t){const e=()=>{const e=this.tabs[t];e&&this.activateTab(e)};this.slotElement?e():this.updateComplete.then(e)}get focusedTab(){return this.tabs.find((t=>t.matches(":focus-within")))}constructor(){super(),this.autoActivate=!1,this.internals=this.attachInternals(),this.internals.role="tablist",this.addEventListener("keydown",this.handleKeydown.bind(this)),this.addEventListener("keyup",this.handleKeyup.bind(this)),this.addEventListener("focusout",this.handleFocusout.bind(this))}async scrollToTab(t){await this.updateComplete;const{tabs:e}=this;if(t??(t=this.activeTab),!t||!e.includes(t)||!this.tabsScrollerElement)return;for(const t of this.tabs)await t.updateComplete;const a=t.offsetLeft,r=t.offsetWidth,o=this.scrollLeft,i=a-48,s=a+r-this.offsetWidth+48,c=Math.min(i,Math.max(s,o)),n=this.focusedTab?"auto":"instant";this.tabsScrollerElement.scrollTo({behavior:n,top:0,left:c})}render(){return t`
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
 */(await 0,t.defaultPrevented||!((a=e)instanceof HTMLElement&&a.hasAttribute("md-tab"))||e.active)||this.activateTab(e)}activateTab(t){const{tabs:e}=this,a=this.activeTab;if(e.includes(t)&&a!==t){for(const a of e)a.active=a===t;if(a){if(!this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))){for(const t of e)t.active=t===a;return}t[g](a)}this.updateFocusableTab(t),this.scrollToTab(t)}}updateFocusableTab(t){for(const e of this.tabs)e.tabIndex=e===t?0:-1}async handleKeydown(t){await 0;const e="ArrowLeft"===t.key,a="ArrowRight"===t.key,r="Home"===t.key,o="End"===t.key;if(t.defaultPrevented||!e&&!a&&!r&&!o)return;const{tabs:i}=this;if(i.length<2)return;let s;if(t.preventDefault(),r||o)s=r?0:i.length-1;else{const t="rtl"===getComputedStyle(this).direction?e:a,{focusedTab:r}=this;if(r){const e=this.tabs.indexOf(r);s=t?e+1:e-1,s>=i.length?s=0:s<0&&(s=i.length-1)}else s=t?0:i.length-1}const c=i[s];c.focus(),this.autoActivate?this.activateTab(c):this.updateFocusableTab(c)}handleKeyup(){this.scrollToTab(this.focusedTab??this.activeTab)}handleFocusout(){if(this.matches(":focus-within"))return;const{activeTab:t}=this;t&&this.updateFocusableTab(t)}handleSlotChange(){const t=this.tabs[0];!this.activeTab&&t&&this.activateTab(t),this.scrollToTab(this.activeTab)}}i([d({flatten:!0,selector:"[md-tab]"})],j.prototype,"tabs",void 0),i([s({type:Number,attribute:"active-tab-index"})],j.prototype,"activeTabIndex",null),i([s({type:Boolean,attribute:"auto-activate"})],j.prototype,"autoActivate",void 0),i([n(".tabs")],j.prototype,"tabsScrollerElement",void 0),i([n("slot")],j.prototype,"slotElement",void 0);const T=r`:host{box-sizing:border-box;display:flex;flex-direction:column;overflow:auto;scroll-behavior:smooth;scrollbar-width:none;position:relative}:host([hidden]){display:none}:host::-webkit-scrollbar{display:none}.tabs{align-items:end;display:flex;height:100%;overflow:inherit;scroll-behavior:inherit;scrollbar-width:inherit;justify-content:space-between;width:100%}::slotted(*){flex:1}::slotted([active]){z-index:1}
`;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let z=class extends j{};z.styles=[T],z=i([o("md-tabs")],z);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class k extends w{constructor(){super(...arguments),this.inlineIcon=!1}getContentClasses(){return{...super.getContentClasses(),stacked:!this.inlineIcon}}}i([s({type:Boolean,attribute:"inline-icon"})],k.prototype,"inlineIcon",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const C=r`:host{--_active-indicator-color: var(--md-primary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-primary-tab-active-indicator-height, 3px);--_active-indicator-shape: var(--md-primary-tab-active-indicator-shape, 3px 3px 0px 0px);--_active-hover-state-layer-color: var(--md-primary-tab-active-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-hover-state-layer-opacity: var(--md-primary-tab-active-hover-state-layer-opacity, 0.08);--_active-pressed-state-layer-color: var(--md-primary-tab-active-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-state-layer-opacity: var(--md-primary-tab-active-pressed-state-layer-opacity, 0.12);--_container-color: var(--md-primary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-primary-tab-container-elevation, 0);--_container-height: var(--md-primary-tab-container-height, 48px);--_with-icon-and-label-text-container-height: var(--md-primary-tab-with-icon-and-label-text-container-height, 64px);--_hover-state-layer-color: var(--md-primary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-primary-tab-hover-state-layer-opacity, 0.08);--_pressed-state-layer-color: var(--md-primary-tab-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-primary-tab-pressed-state-layer-opacity, 0.12);--_active-focus-icon-color: var(--md-primary-tab-active-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_active-hover-icon-color: var(--md-primary-tab-active-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_active-icon-color: var(--md-primary-tab-active-icon-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-icon-color: var(--md-primary-tab-active-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-primary-tab-icon-size, 24px);--_focus-icon-color: var(--md-primary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-primary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-color: var(--md-primary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-primary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-primary-tab-label-text-font, var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-primary-tab-label-text-line-height, var(--md-sys-typescale-title-small-line-height, 1.25rem));--_label-text-size: var(--md-primary-tab-label-text-size, var(--md-sys-typescale-title-small-size, 0.875rem));--_label-text-weight: var(--md-primary-tab-label-text-weight, var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500)));--_active-focus-label-text-color: var(--md-primary-tab-active-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-hover-label-text-color: var(--md-primary-tab-active-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-label-text-color: var(--md-primary-tab-active-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-label-text-color: var(--md-primary-tab-active-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-label-text-color: var(--md-primary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-primary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-color: var(--md-primary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-primary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var(--md-primary-tab-container-shape-start-start, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-start-end: var(--md-primary-tab-container-shape-start-end, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-end: var(--md-primary-tab-container-shape-end-end, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-primary-tab-container-shape-end-start, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)))}.content.stacked{flex-direction:column;gap:2px}.content.stacked.has-icon.has-label{height:var(--_with-icon-and-label-text-container-height)}
`,I=r`:host{display:inline-flex;align-items:center;justify-content:center;outline:none;padding:0 16px;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:middle;user-select:none;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);color:var(--_label-text-color);z-index:0;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);--md-elevation-level: var(--_container-elevation)}md-focus-ring{--md-focus-ring-shape: 8px}:host([active]) md-focus-ring{margin-bottom:calc(var(--_active-indicator-height) + 1px)}.button::before{background:var(--_container-color);content:"";inset:0;position:absolute;z-index:-1}.button::before,md-ripple,md-elevation{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start)}.content{position:relative;box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;height:var(--_container-height);gap:8px}.indicator{position:absolute;box-sizing:border-box;z-index:-1;transform-origin:bottom left;background:var(--_active-indicator-color);border-radius:var(--_active-indicator-shape);height:var(--_active-indicator-height);inset:auto 0 0 0;opacity:0}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);width:var(--_icon-size);height:var(--_icon-size)}:host(:hover){color:var(--_hover-label-text-color);cursor:pointer}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus){color:var(--_focus-label-text-color)}:host(:focus) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active){color:var(--_pressed-label-text-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([active]) .indicator{opacity:1}:host([active]){color:var(--_active-label-text-color);--md-ripple-hover-color: var(--_active-hover-state-layer-color);--md-ripple-hover-opacity: var(--_active-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_active-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_active-pressed-state-layer-opacity)}:host([active]) ::slotted([slot=icon]){color:var(--_active-icon-color)}:host([active]:hover){color:var(--_active-hover-label-text-color)}:host([active]:hover) ::slotted([slot=icon]){color:var(--_active-hover-icon-color)}:host([active]:focus){color:var(--_active-focus-label-text-color)}:host([active]:focus) ::slotted([slot=icon]){color:var(--_active-focus-icon-color)}:host([active]:active){color:var(--_active-pressed-label-text-color)}:host([active]:active) ::slotted([slot=icon]){color:var(--_active-pressed-icon-color)}:host,::slotted(*){white-space:nowrap}@media(forced-colors: active){.indicator{background:CanvasText}}
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
let $=class extends k{};$.styles=[I,C],$=i([o("md-primary-tab")],$);var S=function(t,e,a,r){for(var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r,c=t.length-1;c>=0;c--)(o=t[c])&&(s=(i<3?o(s):i>3?o(e,a,s):o(e,a))||s);return i>3&&s&&Object.defineProperty(e,a,s),s};let B=class extends a{render(){return t`
      <md-tabs @change="${this._changed}">
        <md-primary-tab id="calc">点数計算</md-primary-tab>
        <md-primary-tab id="today">今日の成績</md-primary-tab>
        <md-primary-tab>総合成績</md-primary-tab>
        <md-primary-tab>個人成績</md-primary-tab>
        <md-primary-tab>タイトル</md-primary-tab>
        <md-primary-tab>ルール</md-primary-tab>
      </md-tabs>
      <main>
        ${((t,e,a)=>{for(const a of e)if(a[0]===t)return(0,a[1])();return a?.()})(this._activeTab,[[0,()=>t`<mahjong-calc .prefillData=${this._prefillData}></mahjong-calc>`],[1,()=>t`<mahjong-today></mahjong-today>`],[2,()=>t`<mahjong-stats></mahjong-stats>`],[3,()=>t`<mahjong-individual></mahjong-individual>`],[4,()=>t`<mahjong-title></mahjong-title>`],[5,()=>t`<mahjong-rule></mahjong-rule>`]])}
      </main>
    `}constructor(){super(),this._activeTab=0,this._prefillData=null,this.addEventListener("uploaded",this._uploaded),this.addEventListener("delete-and-recalc",this._deleteAndRecalc)}_changed(t){const e=t.target;this._activeTab=e.activeTabIndex,this._prefillData=null}_uploaded(){this.shadowRoot.querySelector("#today").click()}_deleteAndRecalc(t){const e=t.detail;this._prefillData=e;this.shadowRoot.querySelector("#calc").click()}};S([c()],B.prototype,"_activeTab",void 0),S([c()],B.prototype,"_prefillData",void 0),B=S([o("mahjong-menu")],B);export{B as MahjongMenu};
