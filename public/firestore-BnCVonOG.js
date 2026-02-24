import{f as t,u as e}from"./custom-element-BXQNS_jb.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n={attribute:!0,type:String,converter:e,reflect:!1,hasChanged:t},r=(t=n,e,r)=>{const{kind:i,metadata:s}=r;let o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(r.name,t),"accessor"===i){const{name:n}=r;return{set(r){const i=e.get.call(this);e.set.call(this,r),this.requestUpdate(n,i,t,!0,r)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===i){const{name:n}=r;return function(r){const i=this[n];e.call(this,r),this.requestUpdate(n,i,t,!0,r)}}throw Error("Unsupported decorator location: "+i)};function i(t){return(e,n)=>"object"==typeof n?r(t,e,n):((t,e,n)=>{const r=e.hasOwnProperty(n);return e.constructor.createProperty(n,t),r?Object.getOwnPropertyDescriptor(e,n):void 0})(t,e,n)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function s(t){return i({...t,state:!0,attribute:!1})}function o(t,e,n,r){for(var i,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r,u=t.length-1;u>=0;u--)(i=t[u])&&(o=(s<3?i(o):s>3?i(e,n,o):i(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o}function u(t,e,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(t):r?r.value:e.get(t)}function a(t,e,n,r,i){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?i.call(t,n):i?i.value=n:e.set(t,n),n}"function"==typeof SuppressedError&&SuppressedError;const c=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],s=e+1<t.length,o=s?t[e+1]:0,u=e+2<t.length,a=u?t[e+2]:0,c=i>>2,h=(3&i)<<4|o>>4;let l=(15&o)<<2|a>>6,f=63&a;u||(f=64,s||(l=64)),r.push(n[c],n[h],n[l],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(c(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const u=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==s||null==o||null==u)throw new l;const a=i<<2|s>>4;if(r.push(a),64!==o){const t=s<<4&240|o>>2;if(r.push(t),64!==u){const t=o<<6&192|u;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const f=function(t){return function(t){const e=c(t);return h.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const d=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().H,p=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&function(t){try{return h.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(t[1]);return e&&JSON.parse(e)},w=()=>{try{return d()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const t=process.env.H;return t?JSON.parse(t):void 0})()||p()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>{const e=(t=>w()?.emulatorHosts?.[t])(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},g=()=>w()?.config
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */;class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}const v={};let E=!1;function N(t,e){if("undefined"==typeof window||"undefined"==typeof document||!y(window.location.host)||v[t]===e||v[t]||E)return;function n(t){return`__firebase__banner__${t}`}v[t]=e;const r="__firebase__banner",i=function(){const t={prod:[],emulator:[]};for(const e of Object.keys(v))v[e]?t.emulator.push(e):t.prod.push(e);return t}().prod.length>0;function s(){const t=document.createElement("span");return t.style.cursor="pointer",t.style.marginLeft="16px",t.style.fontSize="24px",t.innerHTML=" &times;",t.onclick=()=>{E=!0,function(){const t=document.getElementById(r);t&&t.remove()}()},t}function o(){const t=function(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}(r),e=n("text"),o=document.getElementById(e)||document.createElement("span"),u=n("learnmore"),a=document.getElementById(u)||document.createElement("a"),c=n("preprendIcon"),h=document.getElementById(c)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(t.created){const e=t.element;!function(t){t.style.display="flex",t.style.background="#7faaf0",t.style.position="fixed",t.style.bottom="5px",t.style.left="5px",t.style.padding=".5em",t.style.borderRadius="5px",t.style.alignItems="center"}(e),function(t,e){t.setAttribute("id",e),t.innerText="Learn more",t.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",t.setAttribute("target","__blank"),t.style.paddingLeft="5px",t.style.textDecoration="underline"}(a,u);const n=s();!function(t,e){t.setAttribute("width","24"),t.setAttribute("id",e),t.setAttribute("height","24"),t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("fill","none"),t.style.marginLeft="-6px"}(h,c),e.append(h,o,a,n),document.body.appendChild(e)}i?(o.innerText="Preview backend disconnected.",h.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(h.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',o.innerText="Preview backend running in this workspace."),o.setAttribute("id",e)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o()}class I extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(D,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new I(r,o,n)}}const D=/\{\$([^}]+)}/g;function A(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(T(n)&&T(s)){if(!A(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function T(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(t){return t&&t._delegate?t._delegate:t}class ${constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new b;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),n=t?.optional??!1;if(!this.isInitialized(e)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:e})}catch(t){if(n)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:C})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=C){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=C){return this.instances.has(t)}getOptions(t=C){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),r=this.onInitCallbacks.get(n)??new Set;r.add(t),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&t(i,n),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===C?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}var r;return n||null}normalizeInstanceIdentifier(t=C){return this.component?this.component.multipleInstances?t:C:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class x{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new O(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(M||(M={}));const F={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},R=M.INFO,P={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},k=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=P[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class L{constructor(t){this.name=t,this._logLevel=R,this._logHandler=k,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in M))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?F[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...t),this._logHandler(this,M.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...t),this._logHandler(this,M.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,M.INFO,...t),this._logHandler(this,M.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,M.WARN,...t),this._logHandler(this,M.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...t),this._logHandler(this,M.ERROR,...t)}}const V=(t,e)=>e.some((e=>t instanceof e));let U,j;const B=new WeakMap,q=new WeakMap,H=new WeakMap,z=new WeakMap,J=new WeakMap;let K={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return q.get(t);if("objectStoreNames"===e)return t.objectStoreNames||H.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Z(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function G(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(j||(j=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Q(this),e),Z(B.get(this))}:function(...e){return Z(t.apply(Q(this),e))}:function(e,...n){const r=t.call(Q(this),e,...n);return H.set(r,e.sort?e.sort():[e]),Z(r)}}function W(t){return"function"==typeof t?G(t):(t instanceof IDBTransaction&&function(t){if(q.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));q.set(t,e)}(t),V(t,U||(U=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,K):t)}function Z(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(Z(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&B.set(e,t)})).catch((()=>{})),J.set(e,t),e}(t);if(z.has(t))return z.get(t);const e=W(t);return e!==t&&(z.set(t,e),J.set(e,t)),e}const Q=t=>J.get(t);const X=["get","getKey","getAll","getAllKeys","count"],Y=["put","add","delete","clear"],tt=new Map;function et(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(tt.get(e))return tt.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Y.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!X.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return tt.set(e,s),s}K=(t=>({...t,get:(e,n,r)=>et(e,n)||t.get(e,n,r),has:(e,n)=>!!et(e,n)||t.has(e,n)}))(K);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===e?.type}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const rt="@firebase/app",it="0.14.8",st=new L("@firebase/app"),ot="@firebase/app-compat",ut="@firebase/analytics-compat",at="@firebase/analytics",ct="@firebase/app-check-compat",ht="@firebase/app-check",lt="@firebase/auth",ft="@firebase/auth-compat",dt="@firebase/database",pt="@firebase/data-connect",wt="@firebase/database-compat",mt="@firebase/functions",gt="@firebase/functions-compat",bt="@firebase/installations",yt="@firebase/installations-compat",vt="@firebase/messaging",Et="@firebase/messaging-compat",Nt="@firebase/performance",It="@firebase/performance-compat",St="@firebase/remote-config",Dt="@firebase/remote-config-compat",At="@firebase/storage",Tt="@firebase/storage-compat",_t="@firebase/firestore",$t="@firebase/ai",Ct="@firebase/firestore-compat",Ot="firebase",xt="[DEFAULT]",Mt={[rt]:"fire-core",[ot]:"fire-core-compat",[at]:"fire-analytics",[ut]:"fire-analytics-compat",[ht]:"fire-app-check",[ct]:"fire-app-check-compat",[lt]:"fire-auth",[ft]:"fire-auth-compat",[dt]:"fire-rtdb",[pt]:"fire-data-connect",[wt]:"fire-rtdb-compat",[mt]:"fire-fn",[gt]:"fire-fn-compat",[bt]:"fire-iid",[yt]:"fire-iid-compat",[vt]:"fire-fcm",[Et]:"fire-fcm-compat",[Nt]:"fire-perf",[It]:"fire-perf-compat",[St]:"fire-rc",[Dt]:"fire-rc-compat",[At]:"fire-gcs",[Tt]:"fire-gcs-compat",[_t]:"fire-fst",[Ct]:"fire-fst-compat",[$t]:"fire-vertex","fire-js":"fire-js",[Ot]:"fire-js-all"},Ft=new Map,Rt=new Map,Pt=new Map;function kt(t,e){try{t.container.addComponent(e)}catch(n){st.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Lt(t){const e=t.name;if(Pt.has(e))return st.debug(`There were multiple attempts to register component ${e}.`),!1;Pt.set(e,t);for(const e of Ft.values())kt(e,t);for(const e of Rt.values())kt(e,t);return!0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vt=new S("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ut{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new $("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const r={name:xt,automaticDataCollectionEnabled:!0,...e},i=r.name;if("string"!=typeof i||!i)throw Vt.create("bad-app-name",{appName:String(i)});if(n||(n=g()),!n)throw Vt.create("no-options");const s=Ft.get(i);if(s){if(A(n,s.options)&&A(r,s.config))return s;throw Vt.create("duplicate-app",{appName:i})}const o=new x(i);for(const t of Pt.values())o.addComponent(t);const u=new Ut(n,r,o);return Ft.set(i,u),u}function Bt(t,e,n){let r=Mt[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const t=[`Unable to register library "${r}" with version "${e}":`];return i&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void st.warn(t.join(" "))}Lt(new $(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="firebase-heartbeat-database",Ht=1,zt="firebase-heartbeat-store";let Jt=null;function Kt(){return Jt||(Jt=function(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),u=Z(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(Z(o.result),t.oldVersion,t.newVersion,Z(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),u.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),u}(qt,Ht,{upgrade:(t,e)=>{if(0===e)try{t.createObjectStore(zt)}catch(t){console.warn(t)}}}).catch((t=>{throw Vt.create("idb-open",{originalErrorMessage:t.message})}))),Jt}async function Gt(t,e){try{const n=(await Kt()).transaction(zt,"readwrite"),r=n.objectStore(zt);await r.put(e,Wt(t)),await n.done}catch(t){if(t instanceof I)st.warn(t.message);else{const e=Vt.create("idb-set",{originalErrorMessage:t?.message});st.warn(e.message)}}}function Wt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Xt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Qt();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===e||this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return;if(this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats.length>30){const t=function(t){if(0===t.length)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){st.warn(t)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const t=Qt(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Yt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=f(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return st.warn(t),""}}}function Qt(){return(new Date).toISOString().substring(0,10)}class Xt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=(await Kt()).transaction(zt),n=await e.objectStore(zt).get(Wt(t));return await e.done,n}catch(t){if(t instanceof I)st.warn(t.message);else{const e=Vt.create("idb-get",{originalErrorMessage:t?.message});st.warn(e.message)}}}(this.app);return t?.heartbeats?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const e=await this.read();return Gt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){if(await this._canUseIndexedDBPromise){const e=await this.read();return Gt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:[...e.heartbeats,...t.heartbeats]})}}}function Yt(t){return f(JSON.stringify({version:2,heartbeats:t})).length}var te;te="",Lt(new $("platform-logger",(t=>new nt(t)),"PRIVATE")),Lt(new $("heartbeat",(t=>new Zt(t)),"PRIVATE")),Bt(rt,it,te),Bt(rt,it,"esm2020"),Bt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Bt("firebase","12.9.0","app");var ee,ne="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(t,e,n){n||(n=0);const r=Array(16);if("string"==typeof e)for(var i=0;i<16;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;i<16;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];let s,o=t.g[3];s=e+(o^n&(i^o))+r[0]+3614090360&4294967295,s=o+(i^(e=n+(s<<7&4294967295|s>>>25))&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,s=n+(e^(i=o+(s<<17&4294967295|s>>>15))&(o^e))+r[3]+3250441966&4294967295,s=e+(o^(n=i+(s<<22&4294967295|s>>>10))&(i^o))+r[4]+4118548399&4294967295,s=o+(i^(e=n+(s<<7&4294967295|s>>>25))&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,s=n+(e^(i=o+(s<<17&4294967295|s>>>15))&(o^e))+r[7]+4249261313&4294967295,s=e+(o^(n=i+(s<<22&4294967295|s>>>10))&(i^o))+r[8]+1770035416&4294967295,s=o+(i^(e=n+(s<<7&4294967295|s>>>25))&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,s=n+(e^(i=o+(s<<17&4294967295|s>>>15))&(o^e))+r[11]+2304563134&4294967295,s=e+(o^(n=i+(s<<22&4294967295|s>>>10))&(i^o))+r[12]+1804603682&4294967295,s=o+(i^(e=n+(s<<7&4294967295|s>>>25))&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,s=n+(e^(i=o+(s<<17&4294967295|s>>>15))&(o^e))+r[15]+1236535329&4294967295,s=e+(i^o&((n=i+(s<<22&4294967295|s>>>10))^i))+r[1]+4129170786&4294967295,s=o+(n^i&((e=n+(s<<5&4294967295|s>>>27))^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,s=n+(o^e&((i=o+(s<<14&4294967295|s>>>18))^o))+r[0]+3921069994&4294967295,s=e+(i^o&((n=i+(s<<20&4294967295|s>>>12))^i))+r[5]+3593408605&4294967295,s=o+(n^i&((e=n+(s<<5&4294967295|s>>>27))^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,s=n+(o^e&((i=o+(s<<14&4294967295|s>>>18))^o))+r[4]+3889429448&4294967295,s=e+(i^o&((n=i+(s<<20&4294967295|s>>>12))^i))+r[9]+568446438&4294967295,s=o+(n^i&((e=n+(s<<5&4294967295|s>>>27))^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,s=n+(o^e&((i=o+(s<<14&4294967295|s>>>18))^o))+r[8]+1163531501&4294967295,s=e+(i^o&((n=i+(s<<20&4294967295|s>>>12))^i))+r[13]+2850285829&4294967295,s=o+(n^i&((e=n+(s<<5&4294967295|s>>>27))^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,s=n+(o^e&((i=o+(s<<14&4294967295|s>>>18))^o))+r[12]+2368359562&4294967295,s=e+((n=i+(s<<20&4294967295|s>>>12))^i^o)+r[5]+4294588738&4294967295,s=o+((e=n+(s<<4&4294967295|s>>>28))^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,s=n+((i=o+(s<<16&4294967295|s>>>16))^o^e)+r[14]+4259657740&4294967295,s=e+((n=i+(s<<23&4294967295|s>>>9))^i^o)+r[1]+2763975236&4294967295,s=o+((e=n+(s<<4&4294967295|s>>>28))^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,s=n+((i=o+(s<<16&4294967295|s>>>16))^o^e)+r[10]+3200236656&4294967295,s=e+((n=i+(s<<23&4294967295|s>>>9))^i^o)+r[13]+681279174&4294967295,s=o+((e=n+(s<<4&4294967295|s>>>28))^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,s=n+((i=o+(s<<16&4294967295|s>>>16))^o^e)+r[6]+76029189&4294967295,s=e+((n=i+(s<<23&4294967295|s>>>9))^i^o)+r[9]+3654602809&4294967295,s=o+((e=n+(s<<4&4294967295|s>>>28))^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,s=n+((i=o+(s<<16&4294967295|s>>>16))^o^e)+r[2]+3299628645&4294967295,s=e+(i^((n=i+(s<<23&4294967295|s>>>9))|~o))+r[0]+4096336452&4294967295,s=o+(n^((e=n+(s<<6&4294967295|s>>>26))|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,s=n+(o^((i=o+(s<<15&4294967295|s>>>17))|~e))+r[5]+4237533241&4294967295,s=e+(i^((n=i+(s<<21&4294967295|s>>>11))|~o))+r[12]+1700485571&4294967295,s=o+(n^((e=n+(s<<6&4294967295|s>>>26))|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,s=n+(o^((i=o+(s<<15&4294967295|s>>>17))|~e))+r[1]+2240044497&4294967295,s=e+(i^((n=i+(s<<21&4294967295|s>>>11))|~o))+r[8]+1873313359&4294967295,s=o+(n^((e=n+(s<<6&4294967295|s>>>26))|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,s=n+(o^((i=o+(s<<15&4294967295|s>>>17))|~e))+r[13]+1309151649&4294967295,s=e+(i^((n=i+(s<<21&4294967295|s>>>11))|~o))+r[4]+4149444226&4294967295,s=o+(n^((e=n+(s<<6&4294967295|s>>>26))|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,s=n+(o^((i=o+(s<<15&4294967295|s>>>17))|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}function r(t,e){this.h=e;const n=[];let r=!0;for(let i=t.length-1;i>=0;i--){const s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}!function(t,e){function n(){}n.prototype=e.prototype,t.F=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.D=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}(e,(function(){this.blockSize=-1})),e.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.v=function(t,e){void 0===e&&(e=t.length);const r=e-this.blockSize,i=this.C;let s=this.h,o=0;for(;o<e;){if(0==s)for(;o<=r;)n(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(i[s++]=t.charCodeAt(o++),s==this.blockSize){n(this,i),s=0;break}}else for(;o<e;)if(i[s++]=t[o++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=e},e.prototype.A=function(){var t=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;e=8*this.o;for(var n=t.length-8;n<t.length;++n)t[n]=255&e,e/=256;for(this.v(t),t=Array(16),e=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)t[e++]=this.g[n]>>>r&255;return t};var i={};function s(t){return-128<=t&&t<128?function(t,e){var n=i;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new r([0|t],t<0?-1:0)})):new r([0|t],t<0?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return u;if(t<0)return f(o(-t));const e=[];let n=1;for(let r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new r(e,0)}var u=s(0),a=s(1),c=s(16777216);function h(t){if(0!=t.h)return!1;for(let e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function l(t){return-1==t.h}function f(t){const e=t.g.length,n=[];for(let r=0;r<e;r++)n[r]=~t.g[r];return new r(n,~t.h).add(a)}function d(t,e){return t.add(f(e))}function p(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function w(t,e){this.g=t,this.h=e}function m(t,e){if(h(e))throw Error("division by zero");if(h(t))return new w(u,u);if(l(t))return e=m(f(t),e),new w(f(e.g),f(e.h));if(l(e))return e=m(t,f(e)),new w(f(e.g),e.h);if(t.g.length>30){if(l(t)||l(e))throw Error("slowDivide_ only works with positive integers.");for(var n=a,r=e;r.l(t)<=0;)n=g(n),r=g(r);var i=b(n,1),s=b(r,1);for(r=b(r,2),n=b(n,2);!h(r);){var c=s.add(r);c.l(t)<=0&&(i=i.add(n),s=c),r=b(r,1),n=b(n,1)}return e=d(t,i.j(e)),new w(i,e)}for(i=u;t.l(e)>=0;){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=(r=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,r-48),c=(s=o(n)).j(e);l(c)||c.l(t)>0;)c=(s=o(n-=r)).j(e);h(s)&&(s=a),i=i.add(s),t=d(t,c)}return new w(i,t)}function g(t){const e=t.g.length+1,n=[];for(let r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new r(n,t.h)}function b(t,e){const n=e>>5;e%=32;const i=t.g.length-n,s=[];for(let r=0;r<i;r++)s[r]=e>0?t.i(r+n)>>>e|t.i(r+n+1)<<32-e:t.i(r+n);return new r(s,t.h)}(t=r.prototype).m=function(){if(l(this))return-f(this).m();let t=0,e=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);t+=(r>=0?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if((t=t||10)<2||36<t)throw Error("radix out of range: "+t);if(h(this))return"0";if(l(this))return"-"+f(this).toString(t);const e=o(Math.pow(t,6));var n=this;let r="";for(;;){const i=m(n,e).g;let s=(((n=d(n,i.j(e))).g.length>0?n.g[0]:n.h)>>>0).toString(t);if(h(n=i))return s+r;for(;s.length<6;)s="0"+s;r=s+r}},t.i=function(t){return t<0?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return l(t=d(this,t))?-1:h(t)?0:1},t.abs=function(){return l(this)?f(this):this},t.add=function(t){const e=Math.max(this.g.length,t.g.length),n=[];let i=0;for(let r=0;r<=e;r++){let e=i+(65535&this.i(r))+(65535&t.i(r)),s=(e>>>16)+(this.i(r)>>>16)+(t.i(r)>>>16);i=s>>>16,e&=65535,s&=65535,n[r]=s<<16|e}return new r(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(h(this)||h(t))return u;if(l(this))return l(t)?f(this).j(f(t)):f(f(this).j(t));if(l(t))return f(this.j(f(t)));if(this.l(c)<0&&t.l(c)<0)return o(this.m()*t.m());const e=this.g.length+t.g.length,n=[];for(var i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(let e=0;e<t.g.length;e++){const r=this.i(i)>>>16,s=65535&this.i(i),o=t.i(e)>>>16,u=65535&t.i(e);n[2*i+2*e]+=s*u,p(n,2*i+2*e),n[2*i+2*e+1]+=r*u,p(n,2*i+2*e+1),n[2*i+2*e+1]+=s*o,p(n,2*i+2*e+1),n[2*i+2*e+2]+=r*o,p(n,2*i+2*e+2)}for(t=0;t<e;t++)n[t]=n[2*t+1]<<16|n[2*t];for(t=e;t<2*e;t++)n[t]=0;return new r(n,0)},t.B=function(t){return m(this,t).h},t.and=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new r(n,this.h&t.h)},t.or=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new r(n,this.h|t.h)},t.xor=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new r(n,this.h^t.h)},e.prototype.digest=e.prototype.A,e.prototype.reset=e.prototype.u,e.prototype.update=e.prototype.v,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.B,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if((n=n||10)<2||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return f(t(e.substring(1),n));if(e.indexOf("-")>=0)throw Error('number format error: interior "-" character');const r=o(Math.pow(n,8));let i=u;for(let t=0;t<e.length;t+=8){var s=Math.min(8,e.length-t);const u=parseInt(e.substring(t,t+s),n);s<8?(s=o(Math.pow(n,s)),i=i.j(s).add(o(u))):(i=i.j(r),i=i.add(o(u)))}return i},ee=r}).apply(void 0!==ne?ne:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class re{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}re.UNAUTHENTICATED=new re(null),re.GOOGLE_CREDENTIALS=new re("google-credentials-uid"),re.FIRST_PARTY=new re("first-party-uid"),re.MOCK_USER=new re("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ie="12.9.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const se=new L("@firebase/firestore");function oe(t,...e){if(se.logLevel<=M.DEBUG){const n=e.map(ce);se.debug(`Firestore (${ie}): ${t}`,...n)}}function ue(t,...e){if(se.logLevel<=M.ERROR){const n=e.map(ce);se.error(`Firestore (${ie}): ${t}`,...n)}}function ae(t,...e){if(se.logLevel<=M.WARN){const n=e.map(ce);se.warn(`Firestore (${ie}): ${t}`,...n)}}function ce(t){if("string"==typeof t)return t;try{return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t,e,n){let r="Unexpected state";"string"==typeof e?r=e:n=e,le(t,r,n)}function le(t,e,n){let r=`FIRESTORE (${ie}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(t){r+=" CONTEXT: "+n}throw ue(r),new Error(r)}function fe(t,e,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,t||le(e,i,r)}function de(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable"};class we extends I{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ge{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(re.UNAUTHENTICATED)))}shutdown(){}}class be{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class ye{constructor(t){this.auth=null,t.onInit((t=>{this.auth=t}))}getToken(){return this.auth?this.auth.getToken().then((t=>t?(fe("string"==typeof t.accessToken,42297,{t}),new me(t.accessToken,new re(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}class ve{constructor(t,e,n){this.i=t,this.o=e,this.u=n,this.type="FirstParty",this.user=re.FIRST_PARTY,this.l=new Map}h(){return this.u?this.u():null}get headers(){this.l.set("X-Goog-AuthUser",this.i);const t=this.h();return t&&this.l.set("Authorization",t),this.o&&this.l.set("X-Goog-Iam-Authorization-Token",this.o),this.l}}class Ee{constructor(t,e,n){this.i=t,this.o=e,this.u=n}getToken(){return Promise.resolve(new ve(this.i,this.o,this.u))}start(t,e){t.enqueueRetryable((()=>e(re.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ne{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ie{constructor(t,e){var n;this.m=e,this.appCheck=null,this.P=null,null!=(n=t)&&void 0!==n.settings&&t.settings.appCheckToken&&(this.P=t.settings.appCheckToken),e.onInit((t=>{this.appCheck=t}))}getToken(){return this.P?Promise.resolve(new Ne(this.P)):this.appCheck?this.appCheck.getToken().then((t=>t?(fe("string"==typeof t.token,3470,{tokenResult:t}),new Ne(t.token)):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t,e,n,r,i,s,o,u,a,c,h){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=u,this.useFetchStreams=a,this.isUsingEmulator=c,this.apiKey=h}}const De="(default)";class Ae{constructor(t,e){this.projectId=t,this.database=e||De}static empty(){return new Ae("","")}get isDefaultDatabase(){return this.database===De}isEqual(t){return t instanceof Ae&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Te(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{static newId(){const t=62*Math.floor(256/62);let e="";for(;e.length<20;){const n=Te(40);for(let r=0;r<n.length;++r)e.length<20&&n[r]<t&&(e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return e}}function $e(t,e){return t<e?-1:t>e?1:0}function Ce(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.charAt(r),i=e.charAt(r);if(n!==i)return Me(n)===Me(i)?$e(n,i):Me(n)?1:-1}return $e(t.length,e.length)}const Oe=55296,xe=57343;function Me(t){const e=t.charCodeAt(0);return e>=Oe&&e<=xe}function Fe(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="__name__";class Pe{constructor(t,e,n){void 0===e?e=0:e>t.length&&he(637,{offset:e,range:t.length}),void 0===n?n=t.length-e:n>t.length-e&&he(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Pe.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Pe?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=Pe.compareSegments(t.get(r),e.get(r));if(0!==n)return n}return $e(t.length,e.length)}static compareSegments(t,e){const n=Pe.isNumericId(t),r=Pe.isNumericId(e);return n&&!r?-1:!n&&r?1:n&&r?Pe.extractNumericId(t).compare(Pe.extractNumericId(e)):Ce(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ee.fromString(t.substring(4,t.length-2))}}class ke extends Pe{construct(t,e,n){return new ke(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new we(pe.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ke(e)}static emptyPath(){return new ke([])}}const Le=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends Pe{construct(t,e,n){return new Ve(t,e,n)}static isValidIdentifier(t){return Le.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Re}static keyField(){return new Ve([Re])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new we(pe.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new we(pe.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new we(pe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new we(pe.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ve(e)}static emptyPath(){return new Ve([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t){this.path=t}static fromPath(t){return new Ue(ke.fromString(t))}static fromName(t){return new Ue(ke.fromString(t).popFirst(5))}static empty(){return new Ue(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ke.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ke.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ue(new ke(t.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t,e,n){if(!n)throw new we(pe.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Be(t){if(!Ue.isDocumentKey(t))throw new we(pe.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qe(t){if(Ue.isDocumentKey(t))throw new we(pe.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function He(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}function ze(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":he(12329,{type:typeof t})}function Je(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new we(pe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ze(t);throw new we(pe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}let Ge=null;function We(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="RestConnection",Qe={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Xe{get T(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.R=e+"://"+t.host,this.V=`projects/${n}/databases/${r}`,this.A=this.databaseId.database===De?`project_id=${n}`:`project_id=${n}&database_id=${r}`}I(t,e,n,r,i){const s=(null===Ge?Ge=268435456+Math.round(2147483648*Math.random()):Ge++,"0x"+Ge.toString(16)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */),o=this.p(t,e.toUriEncodedString());oe(Ze,`Sending RPC '${t}' ${s}:`,o,n);const u={"google-cloud-resource-prefix":this.V,"x-goog-request-params":this.A};this.F(u,r,i);const{host:a}=new URL(o),c=y(a);return this.v(t,o,u,n,c).then((e=>(oe(Ze,`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw ae(Ze,`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}D(t,e,n,r,i,s){return this.I(t,e,n,r,i)}F(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+ie,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}p(t,e){const n=Qe[t];let r=`${this.R}/v1/${e}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,tn;function en(t){if(void 0===t)return ue("RPC_ERROR","HTTP error has no status"),pe.UNKNOWN;switch(t){case 200:return pe.OK;case 400:return pe.FAILED_PRECONDITION;case 401:return pe.UNAUTHENTICATED;case 403:return pe.PERMISSION_DENIED;case 404:return pe.NOT_FOUND;case 409:return pe.ABORTED;case 416:return pe.OUT_OF_RANGE;case 429:return pe.RESOURCE_EXHAUSTED;case 499:return pe.CANCELLED;case 500:return pe.UNKNOWN;case 501:return pe.UNIMPLEMENTED;case 503:return pe.UNAVAILABLE;case 504:return pe.DEADLINE_EXCEEDED;default:return t>=200&&t<300?pe.OK:t>=400&&t<500?pe.FAILED_PRECONDITION:t>=500&&t<600?pe.INTERNAL:pe.UNKNOWN}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(tn=Ye||(Ye={}))[tn.OK=0]="OK",tn[tn.CANCELLED=1]="CANCELLED",tn[tn.UNKNOWN=2]="UNKNOWN",tn[tn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tn[tn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tn[tn.NOT_FOUND=5]="NOT_FOUND",tn[tn.ALREADY_EXISTS=6]="ALREADY_EXISTS",tn[tn.PERMISSION_DENIED=7]="PERMISSION_DENIED",tn[tn.UNAUTHENTICATED=16]="UNAUTHENTICATED",tn[tn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tn[tn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tn[tn.ABORTED=10]="ABORTED",tn[tn.OUT_OF_RANGE=11]="OUT_OF_RANGE",tn[tn.UNIMPLEMENTED=12]="UNIMPLEMENTED",tn[tn.INTERNAL=13]="INTERNAL",tn[tn.UNAVAILABLE=14]="UNAVAILABLE",tn[tn.DATA_LOSS=15]="DATA_LOSS";class nn extends Xe{S(t,e){throw new Error("Not supported by FetchConnection")}async v(t,e,n,r,i){const s=JSON.stringify(r);let o;try{const t={method:"POST",headers:n,body:s};i&&(t.credentials="include"),o=await fetch(e,t)}catch(t){const e=t;throw new we(en(e.status),"Request failed with error: "+e.statusText)}if(!o.ok){let t=await o.json();Array.isArray(t)&&(t=t[0]);const e=t?.error?.message;throw new we(en(o.status),`Request failed with error: ${e??o.statusText}`)}return o.json()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function sn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new on("Invalid base64 string: "+t):t}}(t);return new un(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new un(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $e(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}un.EMPTY_BYTE_STRING=new un("");const an=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cn(t){if(fe(!!t,39018),"string"==typeof t){let e=0;const n=an.exec(t);if(fe(!!n,46558,{timestamp:t}),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:hn(t.seconds),nanos:hn(t.nanos)}}function hn(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ln(t){return"string"==typeof t?un.fromBase64String(t):un.fromUint8Array(t)}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,e){const n={typeString:t};return e&&(n.value=e),n}function dn(t,e){if(!He(t))throw new we(pe.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==s&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new we(pe.INVALID_ARGUMENT,n);return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=-62135596800,wn=1e6;class mn{static now(){return mn.fromMillis(Date.now())}static fromDate(t){return mn.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*wn);return new mn(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new we(pe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new we(pe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<pn)throw new we(pe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new we(pe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wn}_compareTo(t){return this.seconds===t.seconds?$e(this.nanoseconds,t.nanoseconds):$e(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:mn._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(dn(t,mn._jsonSchema))return new mn(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-pn;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}function gn(t){const e=(t?.mapValue?.fields||{}).J?.stringValue;return"server_timestamp"===e}function bn(t){const e=t.mapValue.fields.K;return gn(e)?bn(e):e}function yn(t){const e=cn(t.mapValue.fields.G.timestampValue);return new mn(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn._jsonSchemaVersion="firestore/timestamp/1.0",mn._jsonSchema={type:fn("string",mn._jsonSchemaVersion),seconds:fn("number"),nanoseconds:fn("number")};const vn="__type__",En="__max__",Nn={},In="__vector__",Sn="value";function Dn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gn(t)?4:function(t){return(((t.mapValue||{}).fields||{}).J||{}).stringValue===En}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)?9007199254740991:function(t){const e=(t?.mapValue?.fields||{})[vn]?.stringValue;return e===In}(t)?10:11:he(28295,{value:t})}function An(t,e){if(t===e)return!0;const n=Dn(t);if(n!==Dn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yn(t).isEqual(yn(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=cn(t.timestampValue),r=cn(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return ln(t.bytesValue).isEqual(ln(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return hn(t.geoPointValue.latitude)===hn(e.geoPointValue.latitude)&&hn(t.geoPointValue.longitude)===hn(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return hn(t.integerValue)===hn(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=hn(t.doubleValue),r=hn(e.doubleValue);return n===r?We(n)===We(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Fe(t.arrayValue.values||[],e.arrayValue.values||[],An);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(rn(n)!==rn(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!An(n[t],r[t])))return!1;return!0}(t,e);default:return he(52216,{left:t})}}function Tn(t,e){return void 0!==(t.values||[]).find((t=>An(t,e)))}function _n(t,e){if(t===e)return 0;const n=Dn(t),r=Dn(e);if(n!==r)return $e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return $e(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=hn(t.integerValue||t.doubleValue),r=hn(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return $n(t.timestampValue,e.timestampValue);case 4:return $n(yn(t),yn(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ln(t),r=ln(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=$e(n[t],r[t]);if(0!==e)return e}return $e(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=$e(hn(t.latitude),hn(e.latitude));return 0!==n?n:$e(hn(t.longitude),hn(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Cn(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=e.fields||{},i=n[Sn]?.arrayValue,s=r[Sn]?.arrayValue,o=$e(i?.values?.length||0,s?.values?.length||0);return 0!==o?o:Cn(i,s)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Nn&&e===Nn)return 0;if(t===Nn)return 1;if(e===Nn)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=Ce(r[t],s[t]);if(0!==e)return e;const o=_n(n[r[t]],i[s[t]]);if(0!==o)return o}return $e(r.length,s.length)}(t.mapValue,e.mapValue);default:throw he(23264,{C:n})}}function $n(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return $e(t,e);const n=cn(t),r=cn(e),i=$e(n.seconds,r.seconds);return 0!==i?i:$e(n.nanos,r.nanos)}function Cn(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=_n(n[t],r[t]);if(e)return e}return $e(n.length,r.length)}function On(t){return!!t&&"arrayValue"in t}function xn(t){return!!t&&"nullValue"in t}function Mn(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fn(t){return!!t&&"mapValue"in t}function Rn(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return sn(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Rn(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Rn(t.arrayValue.values[n]);return e}return{...t}}class Pn{constructor(t,e){this.position=t,this.inclusive=e}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{}class Ln extends kn{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Un(t,e,n):"array-contains"===e?new Hn(t,n):"in"===e?new zn(t,n):"not-in"===e?new Jn(t,n):"array-contains-any"===e?new Kn(t,n):new Ln(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new jn(t,n):new Bn(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&void 0===e.nullValue&&this.matchesComparison(_n(e,this.value)):null!==e&&Dn(this.value)===Dn(e)&&this.matchesComparison(_n(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return he(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends kn{constructor(t,e){super(),this.filters=t,this.op=e,this.N=null}static create(t,e){return new Vn(t,e)}matches(t){return function(t){return"and"===t.op}(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.N||(this.N=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.N}getFilters(){return Object.assign([],this.filters)}}class Un extends Ln{constructor(t,e,n){super(t,e,n),this.key=Ue.fromName(n.referenceValue)}matches(t){const e=Ue.comparator(t.key,this.key);return this.matchesComparison(e)}}class jn extends Ln{constructor(t,e){super(t,"in",e),this.keys=qn("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Bn extends Ln{constructor(t,e){super(t,"not-in",e),this.keys=qn("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function qn(t,e){return(e.arrayValue?.values||[]).map((t=>Ue.fromName(t.referenceValue)))}class Hn extends Ln{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return On(e)&&Tn(e.arrayValue,this.value)}}class zn extends Ln{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Tn(this.value.arrayValue,e)}}class Jn extends Ln{constructor(t,e){super(t,"not-in",e)}matches(t){if(Tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&void 0===e.nullValue&&!Tn(this.value.arrayValue,e)}}class Kn extends Ln{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!On(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Tn(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,e="asc"){this.field=t,this.dir=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{static fromTimestamp(t){return new Wn(t)}static min(){return new Wn(new mn(0,0))}static max(){return new Wn(new mn(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e){this.comparator=t,this.root=e||Xn.EMPTY}insert(t,e){return new Zn(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Xn.BLACK,null,null))}remove(t){return new Zn(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xn.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qn(this.root,t,this.comparator,!0)}}class Qn{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xn{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Xn.RED,this.left=null!=r?r:Xn.EMPTY,this.right=null!=i?i:Xn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Xn(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Xn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Xn.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw he(43730,{key:this.key,value:this.value});if(this.right.isRed())throw he(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw he(27949);return t+(this.isRed()?0:1)}}Xn.EMPTY=null,Xn.RED=!0,Xn.BLACK=!1,Xn.EMPTY=new class{constructor(){this.size=0}get key(){throw he(57766)}get value(){throw he(16141)}get color(){throw he(16727)}get left(){throw he(29726)}get right(){throw he(36894)}copy(t,e,n,r,i){return this}insert(t,e,n){return new Xn(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yn{constructor(t){this.comparator=t,this.data=new Zn(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new tr(this.data.getIterator())}getIteratorFrom(t){return new tr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Yn))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Yn(this.comparator);return e.data=t,e}}class tr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t){this.fields=t,t.sort(Ve.comparator)}static empty(){return new er([])}unionWith(t){let e=new Yn(Ve.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new er(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Fe(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t){this.value=t}static empty(){return new nr({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Fn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Rn(e)}setAll(t){let e=Ve.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Rn(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Fn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return An(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Fn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){sn(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new nr(Rn(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new rr(t,0,Wn.min(),Wn.min(),Wn.min(),nr.empty(),0)}static newFoundDocument(t,e,n,r){return new rr(t,1,e,Wn.min(),n,r,0)}static newNoDocument(t,e){return new rr(t,2,e,Wn.min(),Wn.min(),nr.empty(),0)}static newUnknownDocument(t,e){return new rr(t,3,e,Wn.min(),Wn.min(),nr.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Wn.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=nr.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=nr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Wn.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof rr&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new rr(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.O=null}}function sr(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ir(t,e,n,r,i,s,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=u,this.q=null,this.L=null,this.B=null,this.startAt,this.endAt}}function ur(t){const e=de(t);return e.L||(e.L=function(t,e){if("F"===t.limitType)return sr(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Gn(t.field,e)}));const n=t.endAt?new Pn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Pn(t.startAt.position,t.startAt.inclusive):null;return sr(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,function(t){const e=de(t);if(null===e.q){e.q=[];const t=new Set;for(const n of e.explicitOrderBy)e.q.push(n),t.add(n.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new Yn(Ve.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.q.push(new Gn(r,n))})),t.has(Ve.keyField().canonicalString())||e.q.push(new Gn(Ve.keyField(),n))}return e.q}(t))),e.L}function ar(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:We(e)?"-0":e}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this._=void 0}}class hr extends cr{}class lr extends cr{constructor(t){super(),this.elements=t}}class fr extends cr{constructor(t){super(),this.elements=t}}class dr extends cr{constructor(t,e){super(),this.serializer=t,this.$=e}}class pr{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new pr}static exists(t){return new pr(void 0,t)}static updateTime(t){return new pr(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}class wr{}class mr extends wr{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class gr extends wr{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class br extends wr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yr extends wr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr={asc:"ASCENDING",desc:"DESCENDING"},Er={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Nr={and:"AND",or:"OR"};class Ir{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Sr(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dr(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ar(t,e){return Sr(t,e.toTimestamp())}function Tr(t){return fe(!!t,49232),Wn.fromTimestamp(function(t){const e=cn(t);return new mn(e.seconds,e.nanos)}(t))}function _r(t,e){return $r(t,e).canonicalString()}function $r(t,e){const n=function(t){return new ke(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function Cr(t,e){return _r(t.databaseId,e.path)}function Or(t,e,n){return{name:Cr(t,e),fields:n.value.mapValue.fields}}function xr(t,e){const n={structuredQuery:{}},r=e.path;let i;null!==e.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=function(t,e){return _r(t.databaseId,e)}(t,i);const s=function(t){if(0!==t.length)return kr(Vn.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Pr(t.field),direction:Mr(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const u=function(t,e){return t.useProto3Json||function(t){return null==t}(e)?e:{value:e}}(t,e.limit);return null!==u&&(n.structuredQuery.limit=u),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{M:n,parent:i}}function Mr(t){return vr[t]}function Fr(t){return Er[t]}function Rr(t){return Nr[t]}function Pr(t){return{fieldPath:t.canonicalString()}}function kr(t){return t instanceof Ln?function(t){if("=="===t.op){if(Mn(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NAN"}};if(xn(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Mn(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NOT_NAN"}};if(xn(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pr(t.field),op:Fr(t.op),value:t.value}}}(t):t instanceof Vn?function(t){const e=t.getFilters().map((t=>kr(t)));return 1===e.length?e[0]:{compositeFilter:{op:Rr(t.op),filters:e}}}(t):he(54877,{filter:t})}function Lr(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Vr(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}function Ur(t){return!!t&&"function"==typeof t._toProto&&"ProtoValue"===t._protoValueType}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t){return new Ir(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{}class qr extends Br{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.k=!1}j(){if(this.k)throw new we(pe.FAILED_PRECONDITION,"The client has already been terminated.")}I(t,e,n,r){return this.j(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.I(t,$r(e,n),r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===pe.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new we(pe.UNKNOWN,t.toString())}))}D(t,e,n,r,i){return this.j(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.D(t,$r(e,n),r,s,o,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===pe.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new we(pe.UNKNOWN,t.toString())}))}terminate(){this.k=!0,this.connection.terminate()}}async function Hr(t,e){const n=de(t),r={writes:e.map((t=>function(t,e){let n;if(e instanceof mr)n={update:Or(t,e.key,e.value)};else if(e instanceof br)n={delete:Cr(t,e.key)};else if(e instanceof gr)n={update:Or(t,e.key,e.data),updateMask:Lr(e.fieldMask)};else{if(!(e instanceof yr))return he(16599,{U:e.type});n={verify:Cr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof hr)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof lr)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof fr)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof dr)return{fieldPath:e.field.canonicalString(),increment:n.$};throw he(20930,{transform:e.transform})}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ar(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:he(27497)}(t,e.precondition)),n}(n.serializer,t)))};await n.I("Commit",n.serializer.databaseId,ke.emptyPath(),r)}async function zr(t,e){const n=de(t),{M:r,parent:i}=xr(n.serializer,ur(e));return(await n.D("RunQuery",n.serializer.databaseId,i,{structuredQuery:r.structuredQuery})).filter((t=>!!t.document)).map((t=>function(t,e,n){const r=function(t,e){const n=function(t){const e=ke.fromString(t);return fe(Vr(e),10190,{key:e.toString()}),e}(e);if(n.get(1)!==t.databaseId.projectId)throw new we(pe.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new we(pe.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ue(function(t){return fe(t.length>4&&"documents"===t.get(4),29091,{key:t.toString()}),t.popFirst(5)}(n))}(t,e.name),i=Tr(e.updateTime),s=e.createTime?Tr(e.createTime):Wn.min(),o=new nr({mapValue:{fields:e.fields}}),u=rr.newFoundDocument(r,i,s,o);return n?u.setHasCommittedMutations():u}(n.serializer,t.document,void 0)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="ComponentProvider",Kr=new Map;function Gr(t){if(t._terminated)throw new we(pe.FAILED_PRECONDITION,"The client has already been terminated.");if(!Kr.has(t)){oe(Jr,"Initializing Datastore");const e=function(t){return new nn(t)}(function(t,e,n,r,i){return new Se(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Ke(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t._databaseId,t.app.options.appId||"",t._persistenceKey,t.app.options.apiKey,t._freezeSettings())),n=jr(t._databaseId),r=function(t,e,n,r){return new qr(t,e,n,r)}(t._authCredentials,t._appCheckCredentials,e,n);Kr.set(t,r)}return Kr.get(t)}const Wr="firestore.googleapis.com",Zr=!0;class Qr{constructor(t){if(void 0===t.host){if(void 0!==t.ssl)throw new we(pe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wr,this.ssl=Zr}else this.host=t.host,this.ssl=t.ssl??Zr;if(this.isUsingEmulator=void 0!==t.emulatorOptions,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new we(pe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}!function(t,e,n,r){if(!0===e&&!0===r)throw new we(pe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ke(t.experimentalLongPollingOptions??{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new we(pe.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new we(pe.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new we(pe.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Xr{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new we(pe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new we(pe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qr(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ge;switch(t.type){case"firstParty":return new Ee(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new we(pe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Kr.get(t);e&&(oe(Jr,"Removing Datastore"),Kr.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yr{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Yr(this.firestore,t,this._query)}}class ti{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ti(this.firestore,t,this._key)}toJSON(){return{type:ti._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(dn(e,ti._jsonSchema))return new ti(t,n||null,new Ue(ke.fromString(e.referencePath)))}}ti._jsonSchemaVersion="firestore/documentReference/1.0",ti._jsonSchema={type:fn("string",ti._jsonSchemaVersion),referencePath:fn("string")};class ei extends Yr{constructor(t,e,n){super(t,e,function(t){return new or(t)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ti(this.firestore,null,new Ue(t))}withConverter(t){return new ei(this.firestore,t,this._path)}}function ni(t,e,...n){if(t=_(t),je("collection","path",e),t instanceof Xr){const r=ke.fromString(e,...n);return qe(r),new ei(t,null,r)}{if(!(t instanceof ti||t instanceof ei))throw new we(pe.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return qe(r),new ei(t.firestore,null,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ri{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ri(un.fromBase64String(t))}catch(t){throw new we(pe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new ri(un.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:ri._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(dn(t,ri._jsonSchema))return ri.fromBase64String(t.bytes)}}ri._jsonSchemaVersion="firestore/bytes/1.0",ri._jsonSchema={type:fn("string",ri._jsonSchemaVersion),bytes:fn("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ii{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new we(pe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new we(pe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new we(pe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return $e(this._lat,t._lat)||$e(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:oi._jsonSchemaVersion}}static fromJSON(t){if(dn(t,oi._jsonSchema))return new oi(t.latitude,t.longitude)}}oi._jsonSchemaVersion="firestore/geoPoint/1.0",oi._jsonSchema={type:fn("string",oi._jsonSchemaVersion),latitude:fn("number"),longitude:fn("number")};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ui{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}toJSON(){return{type:ui._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(dn(t,ui._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((t=>"number"==typeof t)))return new ui(t.vectorValues);throw new we(pe.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ui._jsonSchemaVersion="firestore/vectorValue/1.0",ui._jsonSchema={type:fn("string",ui._jsonSchemaVersion),vectorValues:fn("object")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ai=/^__.*__$/;class ci{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new gr(t,this.data,this.fieldMask,e,this.fieldTransforms):new mr(t,this.data,e,this.fieldTransforms)}}function hi(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he(40011,{dataSource:t})}}class li{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new li({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){const e=this.path?.child(t),n=this.contextWith({path:e,arrayElement:!1});return n.validatePathSegment(t),n}childContextForFieldPath(t){const e=this.path?.child(t),n=this.contextWith({path:e,arrayElement:!1});return n.validatePath(),n}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return yi(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(0===t.length)throw this.createError("Document fields must not be empty");if(hi(this.dataSource)&&ai.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class fi{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||jr(t)}createContext(t,e,n,r=!1){return new li({dataSource:t,methodName:e,targetDoc:n,path:Ve.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function di(t,e){if(wi(t=_(t)))return mi("Unsupported field value:",e,t),pi(t,e);if(t instanceof si)return function(t,e){if(!hi(e.dataSource))throw e.createError(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.createError(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&4!==e.dataSource)throw e.createError("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=di(i,e.childContextForArray(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=_(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return function(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!We(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?function(t){return{integerValue:""+t}}(e):ar(t,e)}(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=mn.fromDate(t);return{timestampValue:Sr(e.serializer,n)}}if(t instanceof mn){const n=new mn(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Sr(e.serializer,n)}}if(t instanceof oi)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ri)return{bytesValue:Dr(e.serializer,t._byteString)};if(t instanceof ti){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.createError(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:_r(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof ui)return function(t,e){const n=t instanceof ui?t.toArray():t,r={fields:{[vn]:{stringValue:In},[Sn]:{arrayValue:{values:n.map((t=>{if("number"!=typeof t)throw e.createError("VectorValues must only contain numeric values.");return ar(e.serializer,t)}))}}}};return{mapValue:r}}(t,e);if(Ur(t))return t._toProto(e.serializer);throw e.createError(`Unsupported field value: ${ze(t)}`)}(t,e)}function pi(t,e){const n={};return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sn(t,((t,r)=>{const i=di(r,e.childContextForField(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function wi(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof mn||t instanceof oi||t instanceof ri||t instanceof ti||t instanceof si||t instanceof ui||Ur(t))}function mi(t,e,n){if(!wi(n)||!He(n)){const r=ze(n);throw"an object"===r?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function gi(t,e,n){if((e=_(e))instanceof ii)return e._internalPath;if("string"==typeof e)return function(t,e,n){if(e.search(bi)>=0)throw yi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ii(...e.split("."))._internalPath}catch(r){throw yi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e);throw yi("Field path arguments must be of type string or ",t,!1,void 0,n)}const bi=new RegExp("[~\\*/\\[\\]]");function yi(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let u=`Function ${e}() called with invalid data`;n&&(u+=" (via `toFirestore()`)"),u+=". ";let a="";return(s||o)&&(a+=" (found",s&&(a+=` in field ${r}`),o&&(a+=` in document ${i}`),a+=")"),new we(pe.INVALID_ARGUMENT,u+t+a)}function vi(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ti(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ni(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(t){if(this._document){const e=this._document.data.field(gi("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ni extends Ei{data(){return super.data()}}class Ii{constructor(t,e){this._docs=e,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(t,e){this._docs.forEach(t,e)}}class Si{convertValue(t,e="none"){switch(Dn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return hn(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ln(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw he(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return sn(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertVectorValue(t){const e=t.fields?.[Sn].arrayValue?.values?.map((t=>hn(t.doubleValue)));return new ui(e)}convertGeoPoint(t){return new oi(hn(t.latitude),hn(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=bn(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(yn(t));default:return null}}convertTimestamp(t){const e=cn(t);return new mn(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ke.fromString(t);fe(Vr(n),9688,{name:t});const r=new Ae(n.get(1),n.get(3)),i=new Ue(n.popFirst(5));return r.isEqual(e)||ue(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends Si{constructor(t){super(),this.firestore=t}convertBytes(t){return new ri(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ti(this.firestore,null,e)}}function Ai(t){!function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new we(pe.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}((t=Je(t,Yr))._query);const e=Gr(t.firestore),n=new Di(t.firestore);return zr(e,t._query).then((e=>{const r=e.map((e=>new Ni(t.firestore,n,e.key,e,t.converter)));return"L"===t._query.limitType&&r.reverse(),new Ii(t,r)}))}function Ti(t,e){const n=function(t,e,...n){if(t=_(t),1===arguments.length&&(e=_e.newId()),je("doc","path",e),t instanceof Xr){const r=ke.fromString(e,...n);return Be(r),new ti(t,null,new Ue(r))}{if(!(t instanceof ti||t instanceof ei))throw new we(pe.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Be(r),new ti(t.firestore,t instanceof ei?t.converter:null,new Ue(r))}}(t=Je(t,ei)),r=function(t,e){let n;return n=t?t.toFirestore(e):e,n}(t.converter,e),i=function(t,e,n,r,i,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,i);mi("Data must be an object, but it was:",o,r);const u=pi(r,o);let a,c;if(s.merge)a=new er(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=gi(e,r,n);if(!o.contains(i))throw new we(pe.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);vi(t,i)||t.push(i)}a=new er(t),c=o.fieldTransforms.filter((t=>a.covers(t.field)))}else a=null,c=o.fieldTransforms;return new ci(new nr(u),a,c)}(function(t){const e=t._freezeSettings(),n=jr(t._databaseId);return new fi(t._databaseId,!!e.ignoreUndefinedProperties,n)}(t.firestore),"addDoc",n._key,r,null!==n.converter,{});return Hr(Gr(t.firestore),[i.toMutation(n._key,pr.exists(!1))]).then((()=>n))}const _i="4.11.0";ie="12.9.0_lite",Lt(new $("firestore/lite",((t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),i=new Xr(new ye(t.getProvider("auth-internal")),new Ie(r,t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new we(pe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ae(t.options.projectId,e)}(r,e),r);return n&&i._setSettings(n),i}),"PUBLIC").setMultipleInstances(!0)),Bt("firestore-lite",_i,""),Bt("firestore-lite",_i,"esm2020");const $i=function(t){const e="object"==typeof t?t:function(t=xt){const e=Ft.get(t);if(!e&&t===xt&&g())return jt();if(!e)throw Vt.create("no-app",{appName:t});return e}(),n="string"==typeof t?t:"(default)",r=function(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}(e,"firestore/lite").getImmediate({identifier:n});if(!r._initialized){const t=m("firestore");t&&function(t,e,n,r={}){t=Je(t,Xr);const i=y(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},u=`${e}:${n}`;i&&(async function(t){(await fetch(t,{credentials:"include"})).ok}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(`https://${u}`),N("Firestore",!0)),s.host!==Wr&&s.host!==u&&ae("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const a={...s,host:u,ssl:i,emulatorOptions:r};if(!A(a,o)&&(t._setSettings(a),r.mockUserToken)){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=re.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[f(JSON.stringify({alg:"none",type:"JWT"})),f(JSON.stringify(s)),""].join(".")}(r.mockUserToken,t._app?.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new we(pe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new re(i)}t._authCredentials=new be(new me(e,n))}}(r,...t)}return r}(jt({apiKey:"AIzaSyD5nHJBocA72gyVu7GuZRjwlYBFDBNf468",authDomain:"mahjong416.firebaseapp.com",projectId:"mahjong416",storageBucket:"mahjong416.appspot.com",messagingSenderId:"330986708658",appId:"1:330986708658:web:f98cd944afe9615db373ab"}));export{o as _,Ti as a,u as b,ni as c,$i as d,a as e,Ai as g,i as n,s as r};
