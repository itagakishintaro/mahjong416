import{u as t,f as e}from"./custom-element-6f1a92a3.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r={attribute:!0,type:String,converter:t,reflect:!1,hasChanged:e},o=(t=r,e,o)=>{const{kind:n,metadata:i}=o;let a=globalThis.litPropertyMetadata.get(i);if(void 0===a&&globalThis.litPropertyMetadata.set(i,a=new Map),a.set(o.name,t),"accessor"===n){const{name:r}=o;return{set(o){const n=e.get.call(this);e.set.call(this,o),this.requestUpdate(r,n,t)},init(e){return void 0!==e&&this.P(r,void 0,t),e}}}if("setter"===n){const{name:r}=o;return function(o){const n=this[r];e.call(this,o),this.requestUpdate(r,n,t)}}throw Error("Unsupported decorator location: "+n)};function n(t){return(e,r)=>"object"==typeof r?o(t,e,r):((t,e,r)=>{const o=e.hasOwnProperty(r);return e.constructor.createProperty(r,o?{...t,wrapped:!0}:t),o?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function i(t){return n({...t,state:!0,attribute:!1})}function a(t,e,r,o){for(var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o,s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a}function s(t,e,r,o){if("a"===r&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?o:"a"===r?o.call(t):o?o.value:e.get(t)}function c(t,e,r,o,n){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!n:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===o?n.call(t,r):n?n.value=r:e.set(t,r),r}"function"==typeof SuppressedError&&SuppressedError;export{a as _,s as a,c as b,n,i as r};
