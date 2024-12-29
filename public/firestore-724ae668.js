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
const t = function (t) {
    const e = [];
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      let i = t.charCodeAt(r);
      i < 128
        ? (e[n++] = i)
        : i < 2048
        ? ((e[n++] = (i >> 6) | 192), (e[n++] = (63 & i) | 128))
        : 55296 == (64512 & i) &&
          r + 1 < t.length &&
          56320 == (64512 & t.charCodeAt(r + 1))
        ? ((i = 65536 + ((1023 & i) << 10) + (1023 & t.charCodeAt(++r))),
          (e[n++] = (i >> 18) | 240),
          (e[n++] = ((i >> 12) & 63) | 128),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (63 & i) | 128))
        : ((e[n++] = (i >> 12) | 224),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (63 & i) | 128));
    }
    return e;
  },
  e = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + '+/=';
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + '-_.';
    },
    HAS_NATIVE_SUPPORT: 'function' == typeof atob,
    encodeByteArray(t, e) {
      if (!Array.isArray(t))
        throw Error('encodeByteArray takes an array as a parameter');
      this.init_();
      const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let e = 0; e < t.length; e += 3) {
        const i = t[e],
          s = e + 1 < t.length,
          o = s ? t[e + 1] : 0,
          u = e + 2 < t.length,
          a = u ? t[e + 2] : 0,
          c = i >> 2,
          h = ((3 & i) << 4) | (o >> 4);
        let l = ((15 & o) << 2) | (a >> 6),
          f = 63 & a;
        u || ((f = 64), s || (l = 64)), r.push(n[c], n[h], n[l], n[f]);
      }
      return r.join('');
    },
    encodeString(e, n) {
      return this.HAS_NATIVE_SUPPORT && !n
        ? btoa(e)
        : this.encodeByteArray(t(e), n);
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(t)
        : (function (t) {
            const e = [];
            let n = 0,
              r = 0;
            for (; n < t.length; ) {
              const i = t[n++];
              if (i < 128) e[r++] = String.fromCharCode(i);
              else if (i > 191 && i < 224) {
                const s = t[n++];
                e[r++] = String.fromCharCode(((31 & i) << 6) | (63 & s));
              } else if (i > 239 && i < 365) {
                const s =
                  (((7 & i) << 18) |
                    ((63 & t[n++]) << 12) |
                    ((63 & t[n++]) << 6) |
                    (63 & t[n++])) -
                  65536;
                (e[r++] = String.fromCharCode(55296 + (s >> 10))),
                  (e[r++] = String.fromCharCode(56320 + (1023 & s)));
              } else {
                const s = t[n++],
                  o = t[n++];
                e[r++] = String.fromCharCode(
                  ((15 & i) << 12) | ((63 & s) << 6) | (63 & o)
                );
              }
            }
            return e.join('');
          })(this.decodeStringToByteArray(t, e));
    },
    decodeStringToByteArray(t, e) {
      this.init_();
      const r = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        i = [];
      for (let e = 0; e < t.length; ) {
        const s = r[t.charAt(e++)],
          o = e < t.length ? r[t.charAt(e)] : 0;
        ++e;
        const u = e < t.length ? r[t.charAt(e)] : 64;
        ++e;
        const a = e < t.length ? r[t.charAt(e)] : 64;
        if ((++e, null == s || null == o || null == u || null == a))
          throw new n();
        const c = (s << 2) | (o >> 4);
        if ((i.push(c), 64 !== u)) {
          const t = ((o << 4) & 240) | (u >> 2);
          if ((i.push(t), 64 !== a)) {
            const t = ((u << 6) & 192) | a;
            i.push(t);
          }
        }
      }
      return i;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let t = 0; t < this.ENCODED_VALS.length; t++)
          (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
            (this.charToByteMap_[this.byteToCharMap_[t]] = t),
            (this.byteToCharMapWebSafe_[t] =
              this.ENCODED_VALS_WEBSAFE.charAt(t)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
            t >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t));
      }
    },
  };
class n extends Error {
  constructor() {
    super(...arguments), (this.name = 'DecodeBase64StringError');
  }
}
const r = function (n) {
  return (function (n) {
    const r = t(n);
    return e.encodeByteArray(r, !0);
  })(n).replace(/\./g, '');
};
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
const i = () =>
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
    (function () {
      if ('undefined' != typeof self) return self;
      if ('undefined' != typeof window) return window;
      if ('undefined' != typeof global) return global;
      throw new Error('Unable to locate global object.');
    })().$,
  s = () => {
    if ('undefined' == typeof document) return;
    let t;
    try {
      t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch (t) {
      return;
    }
    const n =
      t &&
      (function (t) {
        try {
          return e.decodeString(t, !0);
        } catch (t) {
          console.error('base64Decode failed: ', t);
        }
        return null;
      })(t[1]);
    return n && JSON.parse(n);
  },
  o = () => {
    try {
      return (
        i() ||
        (() => {
          if ('undefined' == typeof process || void 0 === process.env) return;
          const t = process.env.$;
          return t ? JSON.parse(t) : void 0;
        })() ||
        s()
      );
    } catch (t) {
      return void console.info(
        `Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`
      );
    }
  },
  u = (t) => {
    const e = ((t) => {
      var e, n;
      return null ===
        (n = null === (e = o()) || void 0 === e ? void 0 : e.emulatorHosts) ||
        void 0 === n
        ? void 0
        : n[t];
    })(t);
    if (!e) return;
    const n = e.lastIndexOf(':');
    if (n <= 0 || n + 1 === e.length)
      throw new Error(`Invalid host ${e} with no separate hostname and port!`);
    const r = parseInt(e.substring(n + 1), 10);
    return '[' === e[0] ? [e.substring(1, n - 1), r] : [e.substring(0, n), r];
  },
  a = () => {
    var t;
    return null === (t = o()) || void 0 === t ? void 0 : t.config;
  };
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
class c {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, e) => {
        (this.resolve = t), (this.reject = e);
      }));
  }
  wrapCallback(t) {
    return (e, n) => {
      e ? this.reject(e) : this.resolve(n),
        'function' == typeof t &&
          (this.promise.catch(() => {}), 1 === t.length ? t(e) : t(e, n));
    };
  }
}
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
 */ class h extends Error {
  constructor(t, e, n) {
    super(e),
      (this.code = t),
      (this.customData = n),
      (this.name = 'FirebaseError'),
      Object.setPrototypeOf(this, h.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, l.prototype.create);
  }
}
class l {
  constructor(t, e, n) {
    (this.service = t), (this.serviceName = e), (this.errors = n);
  }
  create(t, ...e) {
    const n = e[0] || {},
      r = `${this.service}/${t}`,
      i = this.errors[t],
      s = i
        ? (function (t, e) {
            return t.replace(f, (t, n) => {
              const r = e[n];
              return null != r ? String(r) : `<${n}?>`;
            });
          })(i, n)
        : 'Error',
      o = `${this.serviceName}: ${s} (${r}).`;
    return new h(r, o, n);
  }
}
const f = /\{\$([^}]+)}/g;
function d(t, e) {
  if (t === e) return !0;
  const n = Object.keys(t),
    r = Object.keys(e);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const n = t[i],
      s = e[i];
    if (p(n) && p(s)) {
      if (!d(n, s)) return !1;
    } else if (n !== s) return !1;
  }
  for (const t of r) if (!n.includes(t)) return !1;
  return !0;
}
function p(t) {
  return null !== t && 'object' == typeof t;
}
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
 */ function w(t) {
  return t && t._delegate ? t._delegate : t;
}
class m {
  constructor(t, e, n) {
    (this.name = t),
      (this.instanceFactory = e),
      (this.type = n),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = 'LAZY'),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
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
 */ const g = '[DEFAULT]';
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
 */ class b {
  constructor(t, e) {
    (this.name = t),
      (this.container = e),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const e = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(e)) {
      const t = new c();
      if (
        (this.instancesDeferred.set(e, t),
        this.isInitialized(e) || this.shouldAutoInitialize())
      )
        try {
          const n = this.getOrInitializeService({instanceIdentifier: e});
          n && t.resolve(n);
        } catch (t) {}
    }
    return this.instancesDeferred.get(e).promise;
  }
  getImmediate(t) {
    var e;
    const n = this.normalizeInstanceIdentifier(
        null == t ? void 0 : t.identifier
      ),
      r = null !== (e = null == t ? void 0 : t.optional) && void 0 !== e && e;
    if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
      if (r) return null;
      throw Error(`Service ${this.name} is not available`);
    }
    try {
      return this.getOrInitializeService({instanceIdentifier: n});
    } catch (t) {
      if (r) return null;
      throw t;
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), this.shouldAutoInitialize())) {
      if (
        (function (t) {
          return 'EAGER' === t.instantiationMode;
        })(
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
           */ t
        )
      )
        try {
          this.getOrInitializeService({instanceIdentifier: g});
        } catch (t) {}
      for (const [t, e] of this.instancesDeferred.entries()) {
        const n = this.normalizeInstanceIdentifier(t);
        try {
          const t = this.getOrInitializeService({instanceIdentifier: n});
          e.resolve(t);
        } catch (t) {}
      }
    }
  }
  clearInstance(t = g) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((t) => 'INTERNAL' in t).map((t) => t.INTERNAL.delete()),
      ...t.filter((t) => '_delete' in t).map((t) => t._delete()),
    ]);
  }
  isComponentSet() {
    return null != this.component;
  }
  isInitialized(t = g) {
    return this.instances.has(t);
  }
  getOptions(t = g) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const {options: e = {}} = t,
      n = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(n))
      throw Error(`${this.name}(${n}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const r = this.getOrInitializeService({instanceIdentifier: n, options: e});
    for (const [t, e] of this.instancesDeferred.entries()) {
      n === this.normalizeInstanceIdentifier(t) && e.resolve(r);
    }
    return r;
  }
  onInit(t, e) {
    var n;
    const r = this.normalizeInstanceIdentifier(e),
      i =
        null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n
          ? n
          : new Set();
    i.add(t), this.onInitCallbacks.set(r, i);
    const s = this.instances.get(r);
    return (
      s && t(s, r),
      () => {
        i.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, e) {
    const n = this.onInitCallbacks.get(e);
    if (n)
      for (const r of n)
        try {
          r(t, e);
        } catch (t) {}
  }
  getOrInitializeService({instanceIdentifier: t, options: e = {}}) {
    let n = this.instances.get(t);
    if (
      !n &&
      this.component &&
      ((n = this.component.instanceFactory(this.container, {
        instanceIdentifier: ((r = t), r === g ? void 0 : r),
        options: e,
      })),
      this.instances.set(t, n),
      this.instancesOptions.set(t, e),
      this.invokeOnInitCallbacks(n, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, n);
      } catch (t) {}
    var r;
    return n || null;
  }
  normalizeInstanceIdentifier(t = g) {
    return this.component ? (this.component.multipleInstances ? t : g) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && 'EXPLICIT' !== this.component.instantiationMode;
  }
}
class v {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const e = this.getProvider(t.name);
    if (e.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`
      );
    e.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const e = new b(t, this);
    return this.providers.set(t, e), e;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
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
 */ var y;
!(function (t) {
  (t[(t.DEBUG = 0)] = 'DEBUG'),
    (t[(t.VERBOSE = 1)] = 'VERBOSE'),
    (t[(t.INFO = 2)] = 'INFO'),
    (t[(t.WARN = 3)] = 'WARN'),
    (t[(t.ERROR = 4)] = 'ERROR'),
    (t[(t.SILENT = 5)] = 'SILENT');
})(y || (y = {}));
const E = {
    debug: y.DEBUG,
    verbose: y.VERBOSE,
    info: y.INFO,
    warn: y.WARN,
    error: y.ERROR,
    silent: y.SILENT,
  },
  I = y.INFO,
  D = {
    [y.DEBUG]: 'log',
    [y.VERBOSE]: 'log',
    [y.INFO]: 'info',
    [y.WARN]: 'warn',
    [y.ERROR]: 'error',
  },
  N = (t, e, ...n) => {
    if (e < t.logLevel) return;
    const r = new Date().toISOString(),
      i = D[e];
    if (!i)
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`
      );
    console[i](`[${r}]  ${t.name}:`, ...n);
  };
class S {
  constructor(t) {
    (this.name = t),
      (this._logLevel = I),
      (this._logHandler = N),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in y))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = 'string' == typeof t ? E[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if ('function' != typeof t)
      throw new TypeError('Value assigned to `logHandler` must be a function');
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, y.DEBUG, ...t),
      this._logHandler(this, y.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, y.VERBOSE, ...t),
      this._logHandler(this, y.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, y.INFO, ...t),
      this._logHandler(this, y.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, y.WARN, ...t),
      this._logHandler(this, y.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, y.ERROR, ...t),
      this._logHandler(this, y.ERROR, ...t);
  }
}
const $ = (t, e) => e.some((e) => t instanceof e);
let A, T;
const _ = new WeakMap(),
  O = new WeakMap(),
  F = new WeakMap(),
  x = new WeakMap(),
  R = new WeakMap();
let C = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if ('done' === e) return O.get(t);
      if ('objectStoreNames' === e) return t.objectStoreNames || F.get(t);
      if ('store' === e)
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return P(t[e]);
  },
  set: (t, e, n) => ((t[e] = n), !0),
  has: (t, e) =>
    (t instanceof IDBTransaction && ('done' === e || 'store' === e)) || e in t,
};
function k(t) {
  return t !== IDBDatabase.prototype.transaction ||
    'objectStoreNames' in IDBTransaction.prototype
    ? (
        T ||
        (T = [
          IDBCursor.prototype.advance,
          IDBCursor.prototype.continue,
          IDBCursor.prototype.continuePrimaryKey,
        ])
      ).includes(t)
      ? function (...e) {
          return t.apply(V(this), e), P(_.get(this));
        }
      : function (...e) {
          return P(t.apply(V(this), e));
        }
    : function (e, ...n) {
        const r = t.call(V(this), e, ...n);
        return F.set(r, e.sort ? e.sort() : [e]), P(r);
      };
}
function M(t) {
  return 'function' == typeof t
    ? k(t)
    : (t instanceof IDBTransaction &&
        (function (t) {
          if (O.has(t)) return;
          const e = new Promise((e, n) => {
            const r = () => {
                t.removeEventListener('complete', i),
                  t.removeEventListener('error', s),
                  t.removeEventListener('abort', s);
              },
              i = () => {
                e(), r();
              },
              s = () => {
                n(t.error || new DOMException('AbortError', 'AbortError')), r();
              };
            t.addEventListener('complete', i),
              t.addEventListener('error', s),
              t.addEventListener('abort', s);
          });
          O.set(t, e);
        })(t),
      $(
        t,
        A ||
          (A = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
          ])
      )
        ? new Proxy(t, C)
        : t);
}
function P(t) {
  if (t instanceof IDBRequest)
    return (function (t) {
      const e = new Promise((e, n) => {
        const r = () => {
            t.removeEventListener('success', i),
              t.removeEventListener('error', s);
          },
          i = () => {
            e(P(t.result)), r();
          },
          s = () => {
            n(t.error), r();
          };
        t.addEventListener('success', i), t.addEventListener('error', s);
      });
      return (
        e
          .then((e) => {
            e instanceof IDBCursor && _.set(e, t);
          })
          .catch(() => {}),
        R.set(e, t),
        e
      );
    })(t);
  if (x.has(t)) return x.get(t);
  const e = M(t);
  return e !== t && (x.set(t, e), R.set(e, t)), e;
}
const V = (t) => R.get(t);
const L = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
  j = ['put', 'add', 'delete', 'clear'],
  B = new Map();
function U(t, e) {
  if (!(t instanceof IDBDatabase) || e in t || 'string' != typeof e) return;
  if (B.get(e)) return B.get(e);
  const n = e.replace(/FromIndex$/, ''),
    r = e !== n,
    i = j.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    (!i && !L.includes(n))
  )
    return;
  const s = async function (t, ...e) {
    const s = this.transaction(t, i ? 'readwrite' : 'readonly');
    let o = s.store;
    return (
      r && (o = o.index(e.shift())),
      (await Promise.all([o[n](...e), i && s.done]))[0]
    );
  };
  return B.set(e, s), s;
}
C = ((t) => ({
  ...t,
  get: (e, n, r) => U(e, n) || t.get(e, n, r),
  has: (e, n) => !!U(e, n) || t.has(e, n),
}))(C);
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
class q {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((t) => {
        if (
          (function (t) {
            const e = t.getComponent();
            return 'VERSION' === (null == e ? void 0 : e.type);
          })(t)
        ) {
          const e = t.getImmediate();
          return `${e.library}/${e.version}`;
        }
        return null;
      })
      .filter((t) => t)
      .join(' ');
  }
}
const z = '@firebase/app',
  H = '0.10.8',
  K = new S('@firebase/app'),
  G = '@firebase/app-compat',
  J = '@firebase/analytics-compat',
  W = '@firebase/analytics',
  Q = '@firebase/app-check-compat',
  Z = '@firebase/app-check',
  Y = '@firebase/auth',
  X = '@firebase/auth-compat',
  tt = '@firebase/database',
  et = '@firebase/database-compat',
  nt = '@firebase/functions',
  rt = '@firebase/functions-compat',
  it = '@firebase/installations',
  st = '@firebase/installations-compat',
  ot = '@firebase/messaging',
  ut = '@firebase/messaging-compat',
  at = '@firebase/performance',
  ct = '@firebase/performance-compat',
  ht = '@firebase/remote-config',
  lt = '@firebase/remote-config-compat',
  ft = '@firebase/storage',
  dt = '@firebase/storage-compat',
  pt = '@firebase/firestore',
  wt = '@firebase/vertexai-preview',
  mt = '@firebase/firestore-compat',
  gt = 'firebase',
  bt = '[DEFAULT]',
  vt = {
    [z]: 'fire-core',
    [G]: 'fire-core-compat',
    [W]: 'fire-analytics',
    [J]: 'fire-analytics-compat',
    [Z]: 'fire-app-check',
    [Q]: 'fire-app-check-compat',
    [Y]: 'fire-auth',
    [X]: 'fire-auth-compat',
    [tt]: 'fire-rtdb',
    [et]: 'fire-rtdb-compat',
    [nt]: 'fire-fn',
    [rt]: 'fire-fn-compat',
    [it]: 'fire-iid',
    [st]: 'fire-iid-compat',
    [ot]: 'fire-fcm',
    [ut]: 'fire-fcm-compat',
    [at]: 'fire-perf',
    [ct]: 'fire-perf-compat',
    [ht]: 'fire-rc',
    [lt]: 'fire-rc-compat',
    [ft]: 'fire-gcs',
    [dt]: 'fire-gcs-compat',
    [pt]: 'fire-fst',
    [mt]: 'fire-fst-compat',
    [wt]: 'fire-vertex',
    'fire-js': 'fire-js',
    [gt]: 'fire-js-all',
  },
  yt = new Map(),
  Et = new Map(),
  It = new Map();
function Dt(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    K.debug(
      `Component ${e.name} failed to register with FirebaseApp ${t.name}`,
      n
    );
  }
}
function Nt(t) {
  const e = t.name;
  if (It.has(e))
    return (
      K.debug(`There were multiple attempts to register component ${e}.`), !1
    );
  It.set(e, t);
  for (const e of yt.values()) Dt(e, t);
  for (const e of Et.values()) Dt(e, t);
  return !0;
}
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
const St = new l('app', 'Firebase', {
  'no-app':
    "No Firebase App '{$appName}' has been created - call initializeApp() first",
  'bad-app-name': "Illegal App name: '{$appName}'",
  'duplicate-app':
    "Firebase App named '{$appName}' already exists with different options or config",
  'app-deleted': "Firebase App named '{$appName}' already deleted",
  'server-app-deleted': 'Firebase Server App has been deleted',
  'no-options':
    'Need to provide options, when not being deployed to hosting via source.',
  'invalid-app-argument':
    'firebase.{$appName}() takes either no argument or a Firebase App instance.',
  'invalid-log-argument':
    'First argument to `onLog` must be null or a function.',
  'idb-open':
    'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
  'idb-get':
    'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
  'idb-set':
    'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
  'idb-delete':
    'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
  'finalization-registry-not-supported':
    'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
  'invalid-server-app-environment':
    'FirebaseServerApp is not for use in browser environments.',
});
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
class $t {
  constructor(t, e, n) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, e)),
      (this._name = e.name),
      (this._automaticDataCollectionEnabled = e.automaticDataCollectionEnabled),
      (this._container = n),
      this.container.addComponent(new m('app', () => this, 'PUBLIC'));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw St.create('app-deleted', {appName: this._name});
  }
}
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
 */ function At(t, e = {}) {
  let n = t;
  if ('object' != typeof e) {
    e = {name: e};
  }
  const r = Object.assign({name: bt, automaticDataCollectionEnabled: !1}, e),
    i = r.name;
  if ('string' != typeof i || !i)
    throw St.create('bad-app-name', {appName: String(i)});
  if ((n || (n = a()), !n)) throw St.create('no-options');
  const s = yt.get(i);
  if (s) {
    if (d(n, s.options) && d(r, s.config)) return s;
    throw St.create('duplicate-app', {appName: i});
  }
  const o = new v(i);
  for (const t of It.values()) o.addComponent(t);
  const u = new $t(n, r, o);
  return yt.set(i, u), u;
}
function Tt(t, e, n) {
  var r;
  let i = null !== (r = vt[t]) && void 0 !== r ? r : t;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    o = e.match(/\s|\//);
  if (s || o) {
    const t = [`Unable to register library "${i}" with version "${e}":`];
    return (
      s &&
        t.push(
          `library name "${i}" contains illegal characters (whitespace or "/")`
        ),
      s && o && t.push('and'),
      o &&
        t.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`
        ),
      void K.warn(t.join(' '))
    );
  }
  Nt(new m(`${i}-version`, () => ({library: i, version: e}), 'VERSION'));
}
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
 */ const _t = 'firebase-heartbeat-database',
  Ot = 1,
  Ft = 'firebase-heartbeat-store';
let xt = null;
function Rt() {
  return (
    xt ||
      (xt = (function (
        t,
        e,
        {blocked: n, upgrade: r, blocking: i, terminated: s} = {}
      ) {
        const o = indexedDB.open(t, e),
          u = P(o);
        return (
          r &&
            o.addEventListener('upgradeneeded', (t) => {
              r(P(o.result), t.oldVersion, t.newVersion, P(o.transaction), t);
            }),
          n &&
            o.addEventListener('blocked', (t) =>
              n(t.oldVersion, t.newVersion, t)
            ),
          u
            .then((t) => {
              s && t.addEventListener('close', () => s()),
                i &&
                  t.addEventListener('versionchange', (t) =>
                    i(t.oldVersion, t.newVersion, t)
                  );
            })
            .catch(() => {}),
          u
        );
      })(_t, Ot, {
        upgrade: (t, e) => {
          if (0 === e)
            try {
              t.createObjectStore(Ft);
            } catch (t) {
              console.warn(t);
            }
        },
      }).catch((t) => {
        throw St.create('idb-open', {originalErrorMessage: t.message});
      })),
    xt
  );
}
async function Ct(t, e) {
  try {
    const n = (await Rt()).transaction(Ft, 'readwrite'),
      r = n.objectStore(Ft);
    await r.put(e, kt(t)), await n.done;
  } catch (t) {
    if (t instanceof h) K.warn(t.message);
    else {
      const e = St.create('idb-set', {
        originalErrorMessage: null == t ? void 0 : t.message,
      });
      K.warn(e.message);
    }
  }
}
function kt(t) {
  return `${t.name}!${t.options.appId}`;
}
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
 */ class Mt {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const e = this.container.getProvider('app').getImmediate();
    (this._storage = new Vt(e)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((t) => ((this._heartbeatsCache = t), t)));
  }
  async triggerHeartbeat() {
    var t, e;
    const n = this.container
        .getProvider('platform-logger')
        .getImmediate()
        .getPlatformInfoString(),
      r = Pt();
    if (
      (null !=
        (null === (t = this._heartbeatsCache) || void 0 === t
          ? void 0
          : t.heartbeats) ||
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        null !=
          (null === (e = this._heartbeatsCache) || void 0 === e
            ? void 0
            : e.heartbeats))) &&
      this._heartbeatsCache.lastSentHeartbeatDate !== r &&
      !this._heartbeatsCache.heartbeats.some((t) => t.date === r)
    )
      return (
        this._heartbeatsCache.heartbeats.push({date: r, agent: n}),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((t) => {
            const e = new Date(t.date).valueOf();
            return Date.now() - e <= 2592e6;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    var t;
    if (
      (null === this._heartbeatsCache && (await this._heartbeatsCachePromise),
      null ==
        (null === (t = this._heartbeatsCache) || void 0 === t
          ? void 0
          : t.heartbeats) || 0 === this._heartbeatsCache.heartbeats.length)
    )
      return '';
    const e = Pt(),
      {heartbeatsToSend: n, unsentEntries: i} = (function (t, e = 1024) {
        const n = [];
        let r = t.slice();
        for (const i of t) {
          const t = n.find((t) => t.agent === i.agent);
          if (t) {
            if ((t.dates.push(i.date), Lt(n) > e)) {
              t.dates.pop();
              break;
            }
          } else if ((n.push({agent: i.agent, dates: [i.date]}), Lt(n) > e)) {
            n.pop();
            break;
          }
          r = r.slice(1);
        }
        return {heartbeatsToSend: n, unsentEntries: r};
      })(this._heartbeatsCache.heartbeats),
      s = r(JSON.stringify({version: 2, heartbeats: n}));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = e),
      i.length > 0
        ? ((this._heartbeatsCache.heartbeats = i),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      s
    );
  }
}
function Pt() {
  return new Date().toISOString().substring(0, 10);
}
class Vt {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return (
      !!(function () {
        try {
          return 'object' == typeof indexedDB;
        } catch (t) {
          return !1;
        }
      })() &&
      new Promise((t, e) => {
        try {
          let n = !0;
          const r = 'validate-browser-context-for-indexeddb-analytics-module',
            i = self.indexedDB.open(r);
          (i.onsuccess = () => {
            i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0);
          }),
            (i.onupgradeneeded = () => {
              n = !1;
            }),
            (i.onerror = () => {
              var t;
              e(
                (null === (t = i.error) || void 0 === t ? void 0 : t.message) ||
                  ''
              );
            });
        } catch (t) {
          e(t);
        }
      })
        .then(() => !0)
        .catch(() => !1)
    );
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const t = await (async function (t) {
        try {
          const e = (await Rt()).transaction(Ft),
            n = await e.objectStore(Ft).get(kt(t));
          return await e.done, n;
        } catch (t) {
          if (t instanceof h) K.warn(t.message);
          else {
            const e = St.create('idb-get', {
              originalErrorMessage: null == t ? void 0 : t.message,
            });
            K.warn(e.message);
          }
        }
      })(this.app);
      return (null == t ? void 0 : t.heartbeats) ? t : {heartbeats: []};
    }
    return {heartbeats: []};
  }
  async overwrite(t) {
    var e;
    if (await this._canUseIndexedDBPromise) {
      const n = await this.read();
      return Ct(this.app, {
        lastSentHeartbeatDate:
          null !== (e = t.lastSentHeartbeatDate) && void 0 !== e
            ? e
            : n.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    }
  }
  async add(t) {
    var e;
    if (await this._canUseIndexedDBPromise) {
      const n = await this.read();
      return Ct(this.app, {
        lastSentHeartbeatDate:
          null !== (e = t.lastSentHeartbeatDate) && void 0 !== e
            ? e
            : n.lastSentHeartbeatDate,
        heartbeats: [...n.heartbeats, ...t.heartbeats],
      });
    }
  }
}
function Lt(t) {
  return r(JSON.stringify({version: 2, heartbeats: t})).length;
}
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
 */ var jt;
(jt = ''),
  Nt(new m('platform-logger', (t) => new q(t), 'PRIVATE')),
  Nt(new m('heartbeat', (t) => new Mt(t), 'PRIVATE')),
  Tt(z, H, jt),
  Tt(z, H, 'esm2017'),
  Tt('fire-js', '');
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
Tt('firebase', '10.12.5', 'app');
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
class Bt {
  constructor(t) {
    this.uid = t;
  }
  isAuthenticated() {
    return null != this.uid;
  }
  toKey() {
    return this.isAuthenticated() ? 'uid:' + this.uid : 'anonymous-user';
  }
  isEqual(t) {
    return t.uid === this.uid;
  }
}
(Bt.UNAUTHENTICATED = new Bt(null)),
  (Bt.GOOGLE_CREDENTIALS = new Bt('google-credentials-uid')),
  (Bt.FIRST_PARTY = new Bt('first-party-uid')),
  (Bt.MOCK_USER = new Bt('mock-user'));
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
let Ut = '10.12.5';
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
 */ const qt = new S('@firebase/firestore');
function zt(t, ...e) {
  if (qt.logLevel <= y.DEBUG) {
    const n = e.map(Gt);
    qt.debug(`Firestore (${Ut}): ${t}`, ...n);
  }
}
function Ht(t, ...e) {
  if (qt.logLevel <= y.ERROR) {
    const n = e.map(Gt);
    qt.error(`Firestore (${Ut}): ${t}`, ...n);
  }
}
function Kt(t, ...e) {
  if (qt.logLevel <= y.WARN) {
    const n = e.map(Gt);
    qt.warn(`Firestore (${Ut}): ${t}`, ...n);
  }
}
function Gt(t) {
  if ('string' == typeof t) return t;
  try {
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
    return (function (t) {
      return JSON.stringify(t);
    })(t);
  } catch (e) {
    return t;
  }
}
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
 */ function Jt(t = 'Unexpected state') {
  const e = `FIRESTORE (${Ut}) INTERNAL ASSERTION FAILED: ` + t;
  throw (Ht(e), new Error(e));
}
function Wt(t, e) {
  t || Jt();
}
function Qt(t, e) {
  return t;
}
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
 */ const Zt = 'unknown',
  Yt = 'invalid-argument',
  Xt = 'unauthenticated',
  te = 'failed-precondition',
  ee = 'unimplemented';
class ne extends h {
  constructor(t, e) {
    super(t, e),
      (this.code = t),
      (this.message = e),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`);
  }
}
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
 */ class re {
  constructor(t, e) {
    (this.user = e),
      (this.type = 'OAuth'),
      (this.headers = new Map()),
      this.headers.set('Authorization', `Bearer ${t}`);
  }
}
class ie {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(t, e) {
    t.enqueueRetryable(() => e(Bt.UNAUTHENTICATED));
  }
  shutdown() {}
}
class se {
  constructor(t) {
    (this.token = t), (this.changeListener = null);
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(t, e) {
    (this.changeListener = e), t.enqueueRetryable(() => e(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class oe {
  constructor(t) {
    (this.auth = null),
      t.onInit((t) => {
        this.auth = t;
      });
  }
  getToken() {
    return this.auth
      ? this.auth
          .getToken()
          .then((t) =>
            t
              ? (Wt('string' == typeof t.accessToken),
                new re(t.accessToken, new Bt(this.auth.getUid())))
              : null
          )
      : Promise.resolve(null);
  }
  invalidateToken() {}
  start(t, e) {}
  shutdown() {}
}
class ue {
  constructor(t, e, n) {
    (this.t = t),
      (this.i = e),
      (this.o = n),
      (this.type = 'FirstParty'),
      (this.user = Bt.FIRST_PARTY),
      (this.u = new Map());
  }
  l() {
    return this.o ? this.o() : null;
  }
  get headers() {
    this.u.set('X-Goog-AuthUser', this.t);
    const t = this.l();
    return (
      t && this.u.set('Authorization', t),
      this.i && this.u.set('X-Goog-Iam-Authorization-Token', this.i),
      this.u
    );
  }
}
class ae {
  constructor(t, e, n) {
    (this.t = t), (this.i = e), (this.o = n);
  }
  getToken() {
    return Promise.resolve(new ue(this.t, this.i, this.o));
  }
  start(t, e) {
    t.enqueueRetryable(() => e(Bt.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class ce {
  constructor(t) {
    (this.value = t),
      (this.type = 'AppCheck'),
      (this.headers = new Map()),
      t && t.length > 0 && this.headers.set('x-firebase-appcheck', this.value);
  }
}
class he {
  constructor(t) {
    (this.h = t),
      (this.appCheck = null),
      t.onInit((t) => {
        this.appCheck = t;
      });
  }
  getToken() {
    return this.appCheck
      ? this.appCheck
          .getToken()
          .then((t) =>
            t ? (Wt('string' == typeof t.token), new ce(t.token)) : null
          )
      : Promise.resolve(null);
  }
  invalidateToken() {}
  start(t, e) {}
  shutdown() {}
}
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
 */ class le {
  constructor(t, e, n, r, i, s, o, u, a) {
    (this.databaseId = t),
      (this.appId = e),
      (this.persistenceKey = n),
      (this.host = r),
      (this.ssl = i),
      (this.forceLongPolling = s),
      (this.autoDetectLongPolling = o),
      (this.longPollingOptions = u),
      (this.useFetchStreams = a);
  }
}
class fe {
  constructor(t, e) {
    (this.projectId = t), (this.database = e || '(default)');
  }
  static empty() {
    return new fe('', '');
  }
  get isDefaultDatabase() {
    return '(default)' === this.database;
  }
  isEqual(t) {
    return (
      t instanceof fe &&
      t.projectId === this.projectId &&
      t.database === this.database
    );
  }
}
class de {
  constructor(t, e, n) {
    void 0 === e ? (e = 0) : e > t.length && Jt(),
      void 0 === n ? (n = t.length - e) : n > t.length - e && Jt(),
      (this.segments = t),
      (this.offset = e),
      (this.len = n);
  }
  get length() {
    return this.len;
  }
  isEqual(t) {
    return 0 === de.comparator(this, t);
  }
  child(t) {
    const e = this.segments.slice(this.offset, this.limit());
    return (
      t instanceof de
        ? t.forEach((t) => {
            e.push(t);
          })
        : e.push(t),
      this.construct(e)
    );
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(t) {
    return (
      (t = void 0 === t ? 1 : t),
      this.construct(this.segments, this.offset + t, this.length - t)
    );
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(t) {
    return this.segments[this.offset + t];
  }
  isEmpty() {
    return 0 === this.length;
  }
  isPrefixOf(t) {
    if (t.length < this.length) return !1;
    for (let e = 0; e < this.length; e++)
      if (this.get(e) !== t.get(e)) return !1;
    return !0;
  }
  isImmediateParentOf(t) {
    if (this.length + 1 !== t.length) return !1;
    for (let e = 0; e < this.length; e++)
      if (this.get(e) !== t.get(e)) return !1;
    return !0;
  }
  forEach(t) {
    for (let e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(t, e) {
    const n = Math.min(t.length, e.length);
    for (let r = 0; r < n; r++) {
      const n = t.get(r),
        i = e.get(r);
      if (n < i) return -1;
      if (n > i) return 1;
    }
    return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
  }
}
class pe extends de {
  construct(t, e, n) {
    return new pe(t, e, n);
  }
  canonicalString() {
    return this.toArray().join('/');
  }
  toString() {
    return this.canonicalString();
  }
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join('/');
  }
  static fromString(...t) {
    const e = [];
    for (const n of t) {
      if (n.indexOf('//') >= 0)
        throw new ne(
          Yt,
          `Invalid segment (${n}). Paths must not contain // in them.`
        );
      e.push(...n.split('/').filter((t) => t.length > 0));
    }
    return new pe(e);
  }
  static emptyPath() {
    return new pe([]);
  }
}
const we = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class me extends de {
  construct(t, e, n) {
    return new me(t, e, n);
  }
  static isValidIdentifier(t) {
    return we.test(t);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (t) => (
          (t = t.replace(/\\/g, '\\\\').replace(/`/g, '\\`')),
          me.isValidIdentifier(t) || (t = '`' + t + '`'),
          t
        )
      )
      .join('.');
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return 1 === this.length && '__name__' === this.get(0);
  }
  static keyField() {
    return new me(['__name__']);
  }
  static fromServerFormat(t) {
    const e = [];
    let n = '',
      r = 0;
    const i = () => {
      if (0 === n.length)
        throw new ne(
          Yt,
          `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
        );
      e.push(n), (n = '');
    };
    let s = !1;
    for (; r < t.length; ) {
      const e = t[r];
      if ('\\' === e) {
        if (r + 1 === t.length)
          throw new ne(Yt, 'Path has trailing escape character: ' + t);
        const e = t[r + 1];
        if ('\\' !== e && '.' !== e && '`' !== e)
          throw new ne(Yt, 'Path has invalid escape sequence: ' + t);
        (n += e), (r += 2);
      } else
        '`' === e
          ? ((s = !s), r++)
          : '.' !== e || s
          ? ((n += e), r++)
          : (i(), r++);
    }
    if ((i(), s)) throw new ne(Yt, 'Unterminated ` in path: ' + t);
    return new me(e);
  }
  static emptyPath() {
    return new me([]);
  }
}
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
 */ class ge {
  constructor(t) {
    this.path = t;
  }
  static fromPath(t) {
    return new ge(pe.fromString(t));
  }
  static fromName(t) {
    return new ge(pe.fromString(t).popFirst(5));
  }
  static empty() {
    return new ge(pe.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(t) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(t) {
    return null !== t && 0 === pe.comparator(this.path, t.path);
  }
  toString() {
    return this.path.toString();
  }
  static comparator(t, e) {
    return pe.comparator(t.path, e.path);
  }
  static isDocumentKey(t) {
    return t.length % 2 == 0;
  }
  static fromSegments(t) {
    return new ge(new pe(t.slice()));
  }
}
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
 */ function be(t, e, n) {
  if (!n)
    throw new ne(Yt, `Function ${t}() cannot be called with an empty ${e}.`);
}
function ve(t) {
  if (!ge.isDocumentKey(t))
    throw new ne(
      Yt,
      `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`
    );
}
function ye(t) {
  if (ge.isDocumentKey(t))
    throw new ne(
      Yt,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`
    );
}
function Ee(t) {
  if (void 0 === t) return 'undefined';
  if (null === t) return 'null';
  if ('string' == typeof t)
    return t.length > 20 && (t = `${t.substring(0, 20)}...`), JSON.stringify(t);
  if ('number' == typeof t || 'boolean' == typeof t) return '' + t;
  if ('object' == typeof t) {
    if (t instanceof Array) return 'an array';
    {
      const e = (function (t) {
        return t.constructor ? t.constructor.name : null;
      })(t);
      return e ? `a custom ${e} object` : 'an object';
    }
  }
  return 'function' == typeof t ? 'a function' : Jt();
}
function Ie(t, e) {
  if (('_delegate' in t && (t = t._delegate), !(t instanceof e))) {
    if (e.name === t.constructor.name)
      throw new ne(
        Yt,
        'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
      );
    {
      const n = Ee(t);
      throw new ne(Yt, `Expected type '${e.name}', but it was: ${n}`);
    }
  }
  return t;
}
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
 */ function De(t) {
  const e = {};
  return (
    void 0 !== t.timeoutSeconds && (e.timeoutSeconds = t.timeoutSeconds), e
  );
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
   */
}
let Ne = null;
function Se(t) {
  return 0 === t && 1 / t == -1 / 0;
}
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
 */ const $e = {
  BatchGetDocuments: 'batchGet',
  Commit: 'commit',
  RunQuery: 'runQuery',
  RunAggregationQuery: 'runAggregationQuery',
};
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
 */ var Ae, Te;
function _e(t) {
  if (void 0 === t) return Ht('RPC_ERROR', 'HTTP error has no status'), Zt;
  switch (t) {
    case 200:
      return 'ok';
    case 400:
      return te;
    case 401:
      return Xt;
    case 403:
      return 'permission-denied';
    case 404:
      return 'not-found';
    case 409:
      return 'aborted';
    case 416:
      return 'out-of-range';
    case 429:
      return 'resource-exhausted';
    case 499:
      return 'cancelled';
    case 500:
      return Zt;
    case 501:
      return ee;
    case 503:
      return 'unavailable';
    case 504:
      return 'deadline-exceeded';
    default:
      return t >= 200 && t < 300
        ? 'ok'
        : t >= 400 && t < 500
        ? te
        : t >= 500 && t < 600
        ? 'internal'
        : Zt;
  }
}
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
 */ ((Te = Ae || (Ae = {}))[(Te.OK = 0)] = 'OK'),
  (Te[(Te.CANCELLED = 1)] = 'CANCELLED'),
  (Te[(Te.UNKNOWN = 2)] = 'UNKNOWN'),
  (Te[(Te.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
  (Te[(Te.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
  (Te[(Te.NOT_FOUND = 5)] = 'NOT_FOUND'),
  (Te[(Te.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
  (Te[(Te.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
  (Te[(Te.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
  (Te[(Te.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
  (Te[(Te.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
  (Te[(Te.ABORTED = 10)] = 'ABORTED'),
  (Te[(Te.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
  (Te[(Te.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
  (Te[(Te.INTERNAL = 13)] = 'INTERNAL'),
  (Te[(Te.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
  (Te[(Te.DATA_LOSS = 15)] = 'DATA_LOSS');
class Oe extends class {
  constructor(t) {
    (this.databaseInfo = t), (this.databaseId = t.databaseId);
    const e = t.ssl ? 'https' : 'http',
      n = encodeURIComponent(this.databaseId.projectId),
      r = encodeURIComponent(this.databaseId.database);
    (this.m = e + '://' + t.host),
      (this.A = `projects/${n}/databases/${r}`),
      (this.T =
        '(default)' === this.databaseId.database
          ? `project_id=${n}`
          : `project_id=${n}&database_id=${r}`);
  }
  get R() {
    return !1;
  }
  P(t, e, n, r, i) {
    const s =
        (null === Ne
          ? (Ne = 268435456 + Math.round(2147483648 * Math.random()))
          : Ne++,
        '0x' + Ne.toString(16)),
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
      o = this.I(t, e.toUriEncodedString());
    zt('RestConnection', `Sending RPC '${t}' ${s}:`, o, n);
    const u = {
      'google-cloud-resource-prefix': this.A,
      'x-goog-request-params': this.T,
    };
    return (
      this.V(u, r, i),
      this.p(t, o, u, n).then(
        (e) => (zt('RestConnection', `Received RPC '${t}' ${s}: `, e), e),
        (e) => {
          throw (
            (Kt(
              'RestConnection',
              `RPC '${t}' ${s} failed with error: `,
              e,
              'url: ',
              o,
              'request:',
              n
            ),
            e)
          );
        }
      )
    );
  }
  g(t, e, n, r, i, s) {
    return this.P(t, e, n, r, i);
  }
  V(t, e, n) {
    (t['X-Goog-Api-Client'] = 'gl-js/ fire/' + Ut),
      (t['Content-Type'] = 'text/plain'),
      this.databaseInfo.appId &&
        (t['X-Firebase-GMPID'] = this.databaseInfo.appId),
      e && e.headers.forEach((e, n) => (t[n] = e)),
      n && n.headers.forEach((e, n) => (t[n] = e));
  }
  I(t, e) {
    const n = $e[t];
    return `${this.m}/v1/${e}:${n}`;
  }
  terminate() {}
} {
  constructor(t, e) {
    super(t), (this.F = e);
  }
  v(t, e) {
    throw new Error('Not supported by FetchConnection');
  }
  async p(t, e, n, r) {
    var i;
    const s = JSON.stringify(r);
    let o;
    try {
      o = await this.F(e, {method: 'POST', headers: n, body: s});
    } catch (t) {
      const e = t;
      throw new ne(_e(e.status), 'Request failed with error: ' + e.statusText);
    }
    if (!o.ok) {
      let t = await o.json();
      Array.isArray(t) && (t = t[0]);
      const e =
        null === (i = null == t ? void 0 : t.error) || void 0 === i
          ? void 0
          : i.message;
      throw new ne(
        _e(o.status),
        `Request failed with error: ${null != e ? e : o.statusText}`
      );
    }
    return o.json();
  }
}
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
 */ function Fe(t) {
  const e = 'undefined' != typeof self && (self.crypto || self.msCrypto),
    n = new Uint8Array(t);
  if (e && 'function' == typeof e.getRandomValues) e.getRandomValues(n);
  else for (let e = 0; e < t; e++) n[e] = Math.floor(256 * Math.random());
  return n;
}
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
 */ class xe {
  static newId() {
    const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      e = 62 * Math.floor(256 / 62);
    let n = '';
    for (; n.length < 20; ) {
      const r = Fe(40);
      for (let i = 0; i < r.length; ++i)
        n.length < 20 && r[i] < e && (n += t.charAt(r[i] % 62));
    }
    return n;
  }
}
function Re(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function Ce(t, e, n) {
  return t.length === e.length && t.every((t, r) => n(t, e[r]));
}
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
 */ function ke(t) {
  let e = 0;
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e;
}
function Me(t, e) {
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}
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
 */ class Pe extends Error {
  constructor() {
    super(...arguments), (this.name = 'Base64DecodeError');
  }
}
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
 */ class Ve {
  constructor(t) {
    this.binaryString = t;
  }
  static fromBase64String(t) {
    const e = (function (t) {
      try {
        return atob(t);
      } catch (t) {
        throw 'undefined' != typeof DOMException && t instanceof DOMException
          ? new Pe('Invalid base64 string: ' + t)
          : t;
      }
    })(t);
    return new Ve(e);
  }
  static fromUint8Array(t) {
    const e = (function (t) {
      let e = '';
      for (let n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
      return e;
    })(t);
    return new Ve(e);
  }
  [Symbol.iterator]() {
    let t = 0;
    return {
      next: () =>
        t < this.binaryString.length
          ? {value: this.binaryString.charCodeAt(t++), done: !1}
          : {value: void 0, done: !0},
    };
  }
  toBase64() {
    return (t = this.binaryString), btoa(t);
    var t;
  }
  toUint8Array() {
    return (function (t) {
      const e = new Uint8Array(t.length);
      for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
      return e;
    })(
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
       */ this.binaryString
    );
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(t) {
    return Re(this.binaryString, t.binaryString);
  }
  isEqual(t) {
    return this.binaryString === t.binaryString;
  }
}
Ve.EMPTY_BYTE_STRING = new Ve('');
const Le = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function je(t) {
  if ((Wt(!!t), 'string' == typeof t)) {
    let e = 0;
    const n = Le.exec(t);
    if ((Wt(!!n), n[1])) {
      let t = n[1];
      (t = (t + '000000000').substr(0, 9)), (e = Number(t));
    }
    const r = new Date(t);
    return {seconds: Math.floor(r.getTime() / 1e3), nanos: e};
  }
  return {seconds: Be(t.seconds), nanos: Be(t.nanos)};
}
function Be(t) {
  return 'number' == typeof t ? t : 'string' == typeof t ? Number(t) : 0;
}
function Ue(t) {
  return 'string' == typeof t ? Ve.fromBase64String(t) : Ve.fromUint8Array(t);
}
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
 */ class qe {
  constructor(t, e) {
    if (((this.seconds = t), (this.nanoseconds = e), e < 0))
      throw new ne(Yt, 'Timestamp nanoseconds out of range: ' + e);
    if (e >= 1e9) throw new ne(Yt, 'Timestamp nanoseconds out of range: ' + e);
    if (t < -62135596800)
      throw new ne(Yt, 'Timestamp seconds out of range: ' + t);
    if (t >= 253402300800)
      throw new ne(Yt, 'Timestamp seconds out of range: ' + t);
  }
  static now() {
    return qe.fromMillis(Date.now());
  }
  static fromDate(t) {
    return qe.fromMillis(t.getTime());
  }
  static fromMillis(t) {
    const e = Math.floor(t / 1e3),
      n = Math.floor(1e6 * (t - 1e3 * e));
    return new qe(e, n);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(t) {
    return this.seconds === t.seconds
      ? Re(this.nanoseconds, t.nanoseconds)
      : Re(this.seconds, t.seconds);
  }
  isEqual(t) {
    return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
  }
  toString() {
    return (
      'Timestamp(seconds=' +
      this.seconds +
      ', nanoseconds=' +
      this.nanoseconds +
      ')'
    );
  }
  toJSON() {
    return {seconds: this.seconds, nanoseconds: this.nanoseconds};
  }
  valueOf() {
    const t = this.seconds - -62135596800;
    return (
      String(t).padStart(12, '0') +
      '.' +
      String(this.nanoseconds).padStart(9, '0')
    );
  }
}
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
 */ function ze(t) {
  var e, n;
  return (
    'server_timestamp' ===
    (null ===
      (n = (
        (null === (e = null == t ? void 0 : t.mapValue) || void 0 === e
          ? void 0
          : e.fields) || {}
      ).k) || void 0 === n
      ? void 0
      : n.stringValue)
  );
}
function He(t) {
  const e = t.mapValue.fields.M;
  return ze(e) ? He(e) : e;
}
function Ke(t) {
  const e = je(t.mapValue.fields.L.timestampValue);
  return new qe(e.seconds, e.nanos);
}
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
 */ const Ge = {fields: {k: {stringValue: '__max__'}}};
function Je(t) {
  return 'nullValue' in t
    ? 0
    : 'booleanValue' in t
    ? 1
    : 'integerValue' in t || 'doubleValue' in t
    ? 2
    : 'timestampValue' in t
    ? 3
    : 'stringValue' in t
    ? 5
    : 'bytesValue' in t
    ? 6
    : 'referenceValue' in t
    ? 7
    : 'geoPointValue' in t
    ? 8
    : 'arrayValue' in t
    ? 9
    : 'mapValue' in t
    ? ze(t)
      ? 4
      : (function (t) {
          return (
            '__max__' ===
            (((t.mapValue || {}).fields || {}).k || {}).stringValue
          );
        })(
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
           */ t
        )
      ? 9007199254740991
      : 10
    : Jt();
}
function We(t, e) {
  if (t === e) return !0;
  const n = Je(t);
  if (n !== Je(e)) return !1;
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return Ke(t).isEqual(Ke(e));
    case 3:
      return (function (t, e) {
        if (
          'string' == typeof t.timestampValue &&
          'string' == typeof e.timestampValue &&
          t.timestampValue.length === e.timestampValue.length
        )
          return t.timestampValue === e.timestampValue;
        const n = je(t.timestampValue),
          r = je(e.timestampValue);
        return n.seconds === r.seconds && n.nanos === r.nanos;
      })(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return (function (t, e) {
        return Ue(t.bytesValue).isEqual(Ue(e.bytesValue));
      })(t, e);
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return (function (t, e) {
        return (
          Be(t.geoPointValue.latitude) === Be(e.geoPointValue.latitude) &&
          Be(t.geoPointValue.longitude) === Be(e.geoPointValue.longitude)
        );
      })(t, e);
    case 2:
      return (function (t, e) {
        if ('integerValue' in t && 'integerValue' in e)
          return Be(t.integerValue) === Be(e.integerValue);
        if ('doubleValue' in t && 'doubleValue' in e) {
          const n = Be(t.doubleValue),
            r = Be(e.doubleValue);
          return n === r ? Se(n) === Se(r) : isNaN(n) && isNaN(r);
        }
        return !1;
      })(t, e);
    case 9:
      return Ce(t.arrayValue.values || [], e.arrayValue.values || [], We);
    case 10:
      return (function (t, e) {
        const n = t.mapValue.fields || {},
          r = e.mapValue.fields || {};
        if (ke(n) !== ke(r)) return !1;
        for (const t in n)
          if (n.hasOwnProperty(t) && (void 0 === r[t] || !We(n[t], r[t])))
            return !1;
        return !0;
      })(t, e);
    default:
      return Jt();
  }
}
function Qe(t, e) {
  return void 0 !== (t.values || []).find((t) => We(t, e));
}
function Ze(t, e) {
  if (t === e) return 0;
  const n = Je(t),
    r = Je(e);
  if (n !== r) return Re(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return Re(t.booleanValue, e.booleanValue);
    case 2:
      return (function (t, e) {
        const n = Be(t.integerValue || t.doubleValue),
          r = Be(e.integerValue || e.doubleValue);
        return n < r
          ? -1
          : n > r
          ? 1
          : n === r
          ? 0
          : isNaN(n)
          ? isNaN(r)
            ? 0
            : -1
          : 1;
      })(t, e);
    case 3:
      return Ye(t.timestampValue, e.timestampValue);
    case 4:
      return Ye(Ke(t), Ke(e));
    case 5:
      return Re(t.stringValue, e.stringValue);
    case 6:
      return (function (t, e) {
        const n = Ue(t),
          r = Ue(e);
        return n.compareTo(r);
      })(t.bytesValue, e.bytesValue);
    case 7:
      return (function (t, e) {
        const n = t.split('/'),
          r = e.split('/');
        for (let t = 0; t < n.length && t < r.length; t++) {
          const e = Re(n[t], r[t]);
          if (0 !== e) return e;
        }
        return Re(n.length, r.length);
      })(t.referenceValue, e.referenceValue);
    case 8:
      return (function (t, e) {
        const n = Re(Be(t.latitude), Be(e.latitude));
        return 0 !== n ? n : Re(Be(t.longitude), Be(e.longitude));
      })(t.geoPointValue, e.geoPointValue);
    case 9:
      return (function (t, e) {
        const n = t.values || [],
          r = e.values || [];
        for (let t = 0; t < n.length && t < r.length; ++t) {
          const e = Ze(n[t], r[t]);
          if (e) return e;
        }
        return Re(n.length, r.length);
      })(t.arrayValue, e.arrayValue);
    case 10:
      return (function (t, e) {
        if (t === Ge && e === Ge) return 0;
        if (t === Ge) return 1;
        if (e === Ge) return -1;
        const n = t.fields || {},
          r = Object.keys(n),
          i = e.fields || {},
          s = Object.keys(i);
        r.sort(), s.sort();
        for (let t = 0; t < r.length && t < s.length; ++t) {
          const e = Re(r[t], s[t]);
          if (0 !== e) return e;
          const o = Ze(n[r[t]], i[s[t]]);
          if (0 !== o) return o;
        }
        return Re(r.length, s.length);
      })(t.mapValue, e.mapValue);
    default:
      throw Jt();
  }
}
function Ye(t, e) {
  if ('string' == typeof t && 'string' == typeof e && t.length === e.length)
    return Re(t, e);
  const n = je(t),
    r = je(e),
    i = Re(n.seconds, r.seconds);
  return 0 !== i ? i : Re(n.nanos, r.nanos);
}
function Xe(t) {
  return !!t && 'arrayValue' in t;
}
function tn(t) {
  return !!t && 'nullValue' in t;
}
function en(t) {
  return !!t && 'doubleValue' in t && isNaN(Number(t.doubleValue));
}
function nn(t) {
  return !!t && 'mapValue' in t;
}
function rn(t) {
  if (t.geoPointValue)
    return {geoPointValue: Object.assign({}, t.geoPointValue)};
  if (t.timestampValue && 'object' == typeof t.timestampValue)
    return {timestampValue: Object.assign({}, t.timestampValue)};
  if (t.mapValue) {
    const e = {mapValue: {fields: {}}};
    return Me(t.mapValue.fields, (t, n) => (e.mapValue.fields[t] = rn(n))), e;
  }
  if (t.arrayValue) {
    const e = {arrayValue: {values: []}};
    for (let n = 0; n < (t.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = rn(t.arrayValue.values[n]);
    return e;
  }
  return Object.assign({}, t);
}
class sn {
  constructor(t, e) {
    (this.position = t), (this.inclusive = e);
  }
}
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
 */ class on {}
class un extends on {
  constructor(t, e, n) {
    super(), (this.field = t), (this.op = e), (this.value = n);
  }
  static create(t, e, n) {
    return t.isKeyField()
      ? 'in' === e || 'not-in' === e
        ? this.createKeyFieldInFilter(t, e, n)
        : new cn(t, e, n)
      : 'array-contains' === e
      ? new dn(t, n)
      : 'in' === e
      ? new pn(t, n)
      : 'not-in' === e
      ? new wn(t, n)
      : 'array-contains-any' === e
      ? new mn(t, n)
      : new un(t, e, n);
  }
  static createKeyFieldInFilter(t, e, n) {
    return 'in' === e ? new hn(t, n) : new ln(t, n);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return '!=' === this.op
      ? null !== e && this.matchesComparison(Ze(e, this.value))
      : null !== e &&
          Je(this.value) === Je(e) &&
          this.matchesComparison(Ze(e, this.value));
  }
  matchesComparison(t) {
    switch (this.op) {
      case '<':
        return t < 0;
      case '<=':
        return t <= 0;
      case '==':
        return 0 === t;
      case '!=':
        return 0 !== t;
      case '>':
        return t > 0;
      case '>=':
        return t >= 0;
      default:
        return Jt();
    }
  }
  isInequality() {
    return ['<', '<=', '>', '>=', '!=', 'not-in'].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
}
class an extends on {
  constructor(t, e) {
    super(), (this.filters = t), (this.op = e), (this.D = null);
  }
  static create(t, e) {
    return new an(t, e);
  }
  matches(t) {
    return (function (t) {
      return 'and' === t.op;
    })(this)
      ? void 0 === this.filters.find((e) => !e.matches(t))
      : void 0 !== this.filters.find((e) => e.matches(t));
  }
  getFlattenedFilters() {
    return (
      null !== this.D ||
        (this.D = this.filters.reduce(
          (t, e) => t.concat(e.getFlattenedFilters()),
          []
        )),
      this.D
    );
  }
  getFilters() {
    return Object.assign([], this.filters);
  }
}
class cn extends un {
  constructor(t, e, n) {
    super(t, e, n), (this.key = ge.fromName(n.referenceValue));
  }
  matches(t) {
    const e = ge.comparator(t.key, this.key);
    return this.matchesComparison(e);
  }
}
class hn extends un {
  constructor(t, e) {
    super(t, 'in', e), (this.keys = fn('in', e));
  }
  matches(t) {
    return this.keys.some((e) => e.isEqual(t.key));
  }
}
class ln extends un {
  constructor(t, e) {
    super(t, 'not-in', e), (this.keys = fn('not-in', e));
  }
  matches(t) {
    return !this.keys.some((e) => e.isEqual(t.key));
  }
}
function fn(t, e) {
  var n;
  return (
    (null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []
  ).map((t) => ge.fromName(t.referenceValue));
}
class dn extends un {
  constructor(t, e) {
    super(t, 'array-contains', e);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return Xe(e) && Qe(e.arrayValue, this.value);
  }
}
class pn extends un {
  constructor(t, e) {
    super(t, 'in', e);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return null !== e && Qe(this.value.arrayValue, e);
  }
}
class wn extends un {
  constructor(t, e) {
    super(t, 'not-in', e);
  }
  matches(t) {
    if (Qe(this.value.arrayValue, {nullValue: 'NULL_VALUE'})) return !1;
    const e = t.data.field(this.field);
    return null !== e && !Qe(this.value.arrayValue, e);
  }
}
class mn extends un {
  constructor(t, e) {
    super(t, 'array-contains-any', e);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return (
      !(!Xe(e) || !e.arrayValue.values) &&
      e.arrayValue.values.some((t) => Qe(this.value.arrayValue, t))
    );
  }
}
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
 */ class gn {
  constructor(t, e = 'asc') {
    (this.field = t), (this.dir = e);
  }
}
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
 */ class bn {
  constructor(t) {
    this.timestamp = t;
  }
  static fromTimestamp(t) {
    return new bn(t);
  }
  static min() {
    return new bn(new qe(0, 0));
  }
  static max() {
    return new bn(new qe(253402300799, 999999999));
  }
  compareTo(t) {
    return this.timestamp._compareTo(t.timestamp);
  }
  isEqual(t) {
    return this.timestamp.isEqual(t.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return 'SnapshotVersion(' + this.timestamp.toString() + ')';
  }
  toTimestamp() {
    return this.timestamp;
  }
}
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
 */ class vn {
  constructor(t, e) {
    (this.comparator = t), (this.root = e || En.EMPTY);
  }
  insert(t, e) {
    return new vn(
      this.comparator,
      this.root
        .insert(t, e, this.comparator)
        .copy(null, null, En.BLACK, null, null)
    );
  }
  remove(t) {
    return new vn(
      this.comparator,
      this.root
        .remove(t, this.comparator)
        .copy(null, null, En.BLACK, null, null)
    );
  }
  get(t) {
    let e = this.root;
    for (; !e.isEmpty(); ) {
      const n = this.comparator(t, e.key);
      if (0 === n) return e.value;
      n < 0 ? (e = e.left) : n > 0 && (e = e.right);
    }
    return null;
  }
  indexOf(t) {
    let e = 0,
      n = this.root;
    for (; !n.isEmpty(); ) {
      const r = this.comparator(t, n.key);
      if (0 === r) return e + n.left.size;
      r < 0 ? (n = n.left) : ((e += n.left.size + 1), (n = n.right));
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(t) {
    return this.root.inorderTraversal(t);
  }
  forEach(t) {
    this.inorderTraversal((e, n) => (t(e, n), !1));
  }
  toString() {
    const t = [];
    return (
      this.inorderTraversal((e, n) => (t.push(`${e}:${n}`), !1)),
      `{${t.join(', ')}}`
    );
  }
  reverseTraversal(t) {
    return this.root.reverseTraversal(t);
  }
  getIterator() {
    return new yn(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(t) {
    return new yn(this.root, t, this.comparator, !1);
  }
  getReverseIterator() {
    return new yn(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(t) {
    return new yn(this.root, t, this.comparator, !0);
  }
}
class yn {
  constructor(t, e, n, r) {
    (this.isReverse = r), (this.nodeStack = []);
    let i = 1;
    for (; !t.isEmpty(); )
      if (((i = e ? n(t.key, e) : 1), e && r && (i *= -1), i < 0))
        t = this.isReverse ? t.left : t.right;
      else {
        if (0 === i) {
          this.nodeStack.push(t);
          break;
        }
        this.nodeStack.push(t), (t = this.isReverse ? t.right : t.left);
      }
  }
  getNext() {
    let t = this.nodeStack.pop();
    const e = {key: t.key, value: t.value};
    if (this.isReverse)
      for (t = t.left; !t.isEmpty(); ) this.nodeStack.push(t), (t = t.right);
    else for (t = t.right; !t.isEmpty(); ) this.nodeStack.push(t), (t = t.left);
    return e;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (0 === this.nodeStack.length) return null;
    const t = this.nodeStack[this.nodeStack.length - 1];
    return {key: t.key, value: t.value};
  }
}
class En {
  constructor(t, e, n, r, i) {
    (this.key = t),
      (this.value = e),
      (this.color = null != n ? n : En.RED),
      (this.left = null != r ? r : En.EMPTY),
      (this.right = null != i ? i : En.EMPTY),
      (this.size = this.left.size + 1 + this.right.size);
  }
  copy(t, e, n, r, i) {
    return new En(
      null != t ? t : this.key,
      null != e ? e : this.value,
      null != n ? n : this.color,
      null != r ? r : this.left,
      null != i ? i : this.right
    );
  }
  isEmpty() {
    return !1;
  }
  inorderTraversal(t) {
    return (
      this.left.inorderTraversal(t) ||
      t(this.key, this.value) ||
      this.right.inorderTraversal(t)
    );
  }
  reverseTraversal(t) {
    return (
      this.right.reverseTraversal(t) ||
      t(this.key, this.value) ||
      this.left.reverseTraversal(t)
    );
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(t, e, n) {
    let r = this;
    const i = n(t, r.key);
    return (
      (r =
        i < 0
          ? r.copy(null, null, null, r.left.insert(t, e, n), null)
          : 0 === i
          ? r.copy(null, e, null, null, null)
          : r.copy(null, null, null, null, r.right.insert(t, e, n))),
      r.fixUp()
    );
  }
  removeMin() {
    if (this.left.isEmpty()) return En.EMPTY;
    let t = this;
    return (
      t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()),
      (t = t.copy(null, null, null, t.left.removeMin(), null)),
      t.fixUp()
    );
  }
  remove(t, e) {
    let n,
      r = this;
    if (e(t, r.key) < 0)
      r.left.isEmpty() ||
        r.left.isRed() ||
        r.left.left.isRed() ||
        (r = r.moveRedLeft()),
        (r = r.copy(null, null, null, r.left.remove(t, e), null));
    else {
      if (
        (r.left.isRed() && (r = r.rotateRight()),
        r.right.isEmpty() ||
          r.right.isRed() ||
          r.right.left.isRed() ||
          (r = r.moveRedRight()),
        0 === e(t, r.key))
      ) {
        if (r.right.isEmpty()) return En.EMPTY;
        (n = r.right.min()),
          (r = r.copy(n.key, n.value, null, null, r.right.removeMin()));
      }
      r = r.copy(null, null, null, null, r.right.remove(t, e));
    }
    return r.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let t = this;
    return (
      t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()),
      t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()),
      t.left.isRed() && t.right.isRed() && (t = t.colorFlip()),
      t
    );
  }
  moveRedLeft() {
    let t = this.colorFlip();
    return (
      t.right.left.isRed() &&
        ((t = t.copy(null, null, null, null, t.right.rotateRight())),
        (t = t.rotateLeft()),
        (t = t.colorFlip())),
      t
    );
  }
  moveRedRight() {
    let t = this.colorFlip();
    return (
      t.left.left.isRed() && ((t = t.rotateRight()), (t = t.colorFlip())), t
    );
  }
  rotateLeft() {
    const t = this.copy(null, null, En.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, t, null);
  }
  rotateRight() {
    const t = this.copy(null, null, En.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, t);
  }
  colorFlip() {
    const t = this.left.copy(null, null, !this.left.color, null, null),
      e = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t, e);
  }
  checkMaxDepth() {
    const t = this.check();
    return Math.pow(2, t) <= this.size + 1;
  }
  check() {
    if (this.isRed() && this.left.isRed()) throw Jt();
    if (this.right.isRed()) throw Jt();
    const t = this.left.check();
    if (t !== this.right.check()) throw Jt();
    return t + (this.isRed() ? 0 : 1);
  }
}
(En.EMPTY = null),
  (En.RED = !0),
  (En.BLACK = !1),
  (En.EMPTY = new (class {
    constructor() {
      this.size = 0;
    }
    get key() {
      throw Jt();
    }
    get value() {
      throw Jt();
    }
    get color() {
      throw Jt();
    }
    get left() {
      throw Jt();
    }
    get right() {
      throw Jt();
    }
    copy(t, e, n, r, i) {
      return this;
    }
    insert(t, e, n) {
      return new En(t, e);
    }
    remove(t, e) {
      return this;
    }
    isEmpty() {
      return !0;
    }
    inorderTraversal(t) {
      return !1;
    }
    reverseTraversal(t) {
      return !1;
    }
    minKey() {
      return null;
    }
    maxKey() {
      return null;
    }
    isRed() {
      return !1;
    }
    checkMaxDepth() {
      return !0;
    }
    check() {
      return 0;
    }
  })());
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
class In {
  constructor(t) {
    (this.comparator = t), (this.data = new vn(this.comparator));
  }
  has(t) {
    return null !== this.data.get(t);
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(t) {
    return this.data.indexOf(t);
  }
  forEach(t) {
    this.data.inorderTraversal((e, n) => (t(e), !1));
  }
  forEachInRange(t, e) {
    const n = this.data.getIteratorFrom(t[0]);
    for (; n.hasNext(); ) {
      const r = n.getNext();
      if (this.comparator(r.key, t[1]) >= 0) return;
      e(r.key);
    }
  }
  forEachWhile(t, e) {
    let n;
    for (
      n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator();
      n.hasNext();

    )
      if (!t(n.getNext().key)) return;
  }
  firstAfterOrEqual(t) {
    const e = this.data.getIteratorFrom(t);
    return e.hasNext() ? e.getNext().key : null;
  }
  getIterator() {
    return new Dn(this.data.getIterator());
  }
  getIteratorFrom(t) {
    return new Dn(this.data.getIteratorFrom(t));
  }
  add(t) {
    return this.copy(this.data.remove(t).insert(t, !0));
  }
  delete(t) {
    return this.has(t) ? this.copy(this.data.remove(t)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(t) {
    let e = this;
    return (
      e.size < t.size && ((e = t), (t = this)),
      t.forEach((t) => {
        e = e.add(t);
      }),
      e
    );
  }
  isEqual(t) {
    if (!(t instanceof In)) return !1;
    if (this.size !== t.size) return !1;
    const e = this.data.getIterator(),
      n = t.data.getIterator();
    for (; e.hasNext(); ) {
      const t = e.getNext().key,
        r = n.getNext().key;
      if (0 !== this.comparator(t, r)) return !1;
    }
    return !0;
  }
  toArray() {
    const t = [];
    return (
      this.forEach((e) => {
        t.push(e);
      }),
      t
    );
  }
  toString() {
    const t = [];
    return this.forEach((e) => t.push(e)), 'SortedSet(' + t.toString() + ')';
  }
  copy(t) {
    const e = new In(this.comparator);
    return (e.data = t), e;
  }
}
class Dn {
  constructor(t) {
    this.iter = t;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
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
 */ class Nn {
  constructor(t) {
    (this.fields = t), t.sort(me.comparator);
  }
  static empty() {
    return new Nn([]);
  }
  unionWith(t) {
    let e = new In(me.comparator);
    for (const t of this.fields) e = e.add(t);
    for (const n of t) e = e.add(n);
    return new Nn(e.toArray());
  }
  covers(t) {
    for (const e of this.fields) if (e.isPrefixOf(t)) return !0;
    return !1;
  }
  isEqual(t) {
    return Ce(this.fields, t.fields, (t, e) => t.isEqual(e));
  }
}
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
 */ class Sn {
  constructor(t) {
    this.value = t;
  }
  static empty() {
    return new Sn({mapValue: {}});
  }
  field(t) {
    if (t.isEmpty()) return this.value;
    {
      let e = this.value;
      for (let n = 0; n < t.length - 1; ++n)
        if (((e = (e.mapValue.fields || {})[t.get(n)]), !nn(e))) return null;
      return (e = (e.mapValue.fields || {})[t.lastSegment()]), e || null;
    }
  }
  set(t, e) {
    this.getFieldsMap(t.popLast())[t.lastSegment()] = rn(e);
  }
  setAll(t) {
    let e = me.emptyPath(),
      n = {},
      r = [];
    t.forEach((t, i) => {
      if (!e.isImmediateParentOf(i)) {
        const t = this.getFieldsMap(e);
        this.applyChanges(t, n, r), (n = {}), (r = []), (e = i.popLast());
      }
      t ? (n[i.lastSegment()] = rn(t)) : r.push(i.lastSegment());
    });
    const i = this.getFieldsMap(e);
    this.applyChanges(i, n, r);
  }
  delete(t) {
    const e = this.field(t.popLast());
    nn(e) && e.mapValue.fields && delete e.mapValue.fields[t.lastSegment()];
  }
  isEqual(t) {
    return We(this.value, t.value);
  }
  getFieldsMap(t) {
    let e = this.value;
    e.mapValue.fields || (e.mapValue = {fields: {}});
    for (let n = 0; n < t.length; ++n) {
      let r = e.mapValue.fields[t.get(n)];
      (nn(r) && r.mapValue.fields) ||
        ((r = {mapValue: {fields: {}}}), (e.mapValue.fields[t.get(n)] = r)),
        (e = r);
    }
    return e.mapValue.fields;
  }
  applyChanges(t, e, n) {
    Me(e, (e, n) => (t[e] = n));
    for (const e of n) delete t[e];
  }
  clone() {
    return new Sn(rn(this.value));
  }
}
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
 */ class $n {
  constructor(t, e, n, r, i, s, o) {
    (this.key = t),
      (this.documentType = e),
      (this.version = n),
      (this.readTime = r),
      (this.createTime = i),
      (this.data = s),
      (this.documentState = o);
  }
  static newInvalidDocument(t) {
    return new $n(t, 0, bn.min(), bn.min(), bn.min(), Sn.empty(), 0);
  }
  static newFoundDocument(t, e, n, r) {
    return new $n(t, 1, e, bn.min(), n, r, 0);
  }
  static newNoDocument(t, e) {
    return new $n(t, 2, e, bn.min(), bn.min(), Sn.empty(), 0);
  }
  static newUnknownDocument(t, e) {
    return new $n(t, 3, e, bn.min(), bn.min(), Sn.empty(), 2);
  }
  convertToFoundDocument(t, e) {
    return (
      !this.createTime.isEqual(bn.min()) ||
        (2 !== this.documentType && 0 !== this.documentType) ||
        (this.createTime = t),
      (this.version = t),
      (this.documentType = 1),
      (this.data = e),
      (this.documentState = 0),
      this
    );
  }
  convertToNoDocument(t) {
    return (
      (this.version = t),
      (this.documentType = 2),
      (this.data = Sn.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(t) {
    return (
      (this.version = t),
      (this.documentType = 3),
      (this.data = Sn.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this;
  }
  setHasLocalMutations() {
    return (this.documentState = 1), (this.version = bn.min()), this;
  }
  setReadTime(t) {
    return (this.readTime = t), this;
  }
  get hasLocalMutations() {
    return 1 === this.documentState;
  }
  get hasCommittedMutations() {
    return 2 === this.documentState;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return 0 !== this.documentType;
  }
  isFoundDocument() {
    return 1 === this.documentType;
  }
  isNoDocument() {
    return 2 === this.documentType;
  }
  isUnknownDocument() {
    return 3 === this.documentType;
  }
  isEqual(t) {
    return (
      t instanceof $n &&
      this.key.isEqual(t.key) &&
      this.version.isEqual(t.version) &&
      this.documentType === t.documentType &&
      this.documentState === t.documentState &&
      this.data.isEqual(t.data)
    );
  }
  mutableCopy() {
    return new $n(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.createTime,
      this.data.clone(),
      this.documentState
    );
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(
      this.data.value
    )}, {createTime: ${this.createTime}}), {documentType: ${
      this.documentType
    }}), {documentState: ${this.documentState}})`;
  }
}
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
 */ class An {
  constructor(t, e = null, n = [], r = [], i = null, s = null, o = null) {
    (this.path = t),
      (this.collectionGroup = e),
      (this.orderBy = n),
      (this.filters = r),
      (this.limit = i),
      (this.startAt = s),
      (this.endAt = o),
      (this.C = null);
  }
}
function Tn(t, e = null, n = [], r = [], i = null, s = null, o = null) {
  return new An(t, e, n, r, i, s, o);
}
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
 */ class _n {
  constructor(
    t,
    e = null,
    n = [],
    r = [],
    i = null,
    s = 'F',
    o = null,
    u = null
  ) {
    (this.path = t),
      (this.collectionGroup = e),
      (this.explicitOrderBy = n),
      (this.filters = r),
      (this.limit = i),
      (this.limitType = s),
      (this.startAt = o),
      (this.endAt = u),
      (this.S = null),
      (this.N = null),
      (this.O = null),
      this.startAt,
      this.endAt;
  }
}
function On(t) {
  const e = Qt(t);
  return (
    e.N ||
      (e.N = (function (t, e) {
        if ('F' === t.limitType)
          return Tn(
            t.path,
            t.collectionGroup,
            e,
            t.filters,
            t.limit,
            t.startAt,
            t.endAt
          );
        {
          e = e.map((t) => {
            const e = 'desc' === t.dir ? 'asc' : 'desc';
            return new gn(t.field, e);
          });
          const n = t.endAt
              ? new sn(t.endAt.position, t.endAt.inclusive)
              : null,
            r = t.startAt
              ? new sn(t.startAt.position, t.startAt.inclusive)
              : null;
          return Tn(t.path, t.collectionGroup, e, t.filters, t.limit, n, r);
        }
      })(
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
         */ e,
        (function (t) {
          const e = Qt(t);
          if (null === e.S) {
            e.S = [];
            const t = new Set();
            for (const n of e.explicitOrderBy)
              e.S.push(n), t.add(n.field.canonicalString());
            const n =
                e.explicitOrderBy.length > 0
                  ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
                  : 'asc',
              r = (function (t) {
                let e = new In(me.comparator);
                return (
                  t.filters.forEach((t) => {
                    t.getFlattenedFilters().forEach((t) => {
                      t.isInequality() && (e = e.add(t.field));
                    });
                  }),
                  e
                );
              })(e);
            r.forEach((r) => {
              t.has(r.canonicalString()) ||
                r.isKeyField() ||
                e.S.push(new gn(r, n));
            }),
              t.has(me.keyField().canonicalString()) ||
                e.S.push(new gn(me.keyField(), n));
          }
          return e.S;
        })(t)
      )),
    e.N
  );
}
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
 */ class Fn {
  constructor() {
    this._ = void 0;
  }
}
class xn extends Fn {}
class Rn extends Fn {
  constructor(t) {
    super(), (this.elements = t);
  }
}
class Cn extends Fn {
  constructor(t) {
    super(), (this.elements = t);
  }
}
class kn extends Fn {
  constructor(t, e) {
    super(), (this.serializer = t), (this.q = e);
  }
}
class Mn {
  constructor(t, e) {
    (this.updateTime = t), (this.exists = e);
  }
  static none() {
    return new Mn();
  }
  static exists(t) {
    return new Mn(void 0, t);
  }
  static updateTime(t) {
    return new Mn(t);
  }
  get isNone() {
    return void 0 === this.updateTime && void 0 === this.exists;
  }
  isEqual(t) {
    return (
      this.exists === t.exists &&
      (this.updateTime
        ? !!t.updateTime && this.updateTime.isEqual(t.updateTime)
        : !t.updateTime)
    );
  }
}
class Pn {}
class Vn extends Pn {
  constructor(t, e, n, r = []) {
    super(),
      (this.key = t),
      (this.value = e),
      (this.precondition = n),
      (this.fieldTransforms = r),
      (this.type = 0);
  }
  getFieldMask() {
    return null;
  }
}
class Ln extends Pn {
  constructor(t, e, n, r, i = []) {
    super(),
      (this.key = t),
      (this.data = e),
      (this.fieldMask = n),
      (this.precondition = r),
      (this.fieldTransforms = i),
      (this.type = 1);
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
class jn extends Pn {
  constructor(t, e) {
    super(),
      (this.key = t),
      (this.precondition = e),
      (this.type = 2),
      (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
class Bn extends Pn {
  constructor(t, e) {
    super(),
      (this.key = t),
      (this.precondition = e),
      (this.type = 3),
      (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
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
 */ const Un = {asc: 'ASCENDING', desc: 'DESCENDING'},
  qn = {
    '<': 'LESS_THAN',
    '<=': 'LESS_THAN_OR_EQUAL',
    '>': 'GREATER_THAN',
    '>=': 'GREATER_THAN_OR_EQUAL',
    '==': 'EQUAL',
    '!=': 'NOT_EQUAL',
    'array-contains': 'ARRAY_CONTAINS',
    in: 'IN',
    'not-in': 'NOT_IN',
    'array-contains-any': 'ARRAY_CONTAINS_ANY',
  },
  zn = {and: 'AND', or: 'OR'};
class Hn {
  constructor(t, e) {
    (this.databaseId = t), (this.useProto3Json = e);
  }
}
function Kn(t, e) {
  return t.useProto3Json
    ? `${new Date(1e3 * e.seconds)
        .toISOString()
        .replace(/\.\d*/, '')
        .replace('Z', '')}.${('000000000' + e.nanoseconds).slice(-9)}Z`
    : {seconds: '' + e.seconds, nanos: e.nanoseconds};
}
function Gn(t, e) {
  return t.useProto3Json ? e.toBase64() : e.toUint8Array();
}
function Jn(t, e) {
  return Kn(t, e.toTimestamp());
}
function Wn(t) {
  return (
    Wt(!!t),
    bn.fromTimestamp(
      (function (t) {
        const e = je(t);
        return new qe(e.seconds, e.nanos);
      })(t)
    )
  );
}
function Qn(t, e) {
  return Zn(t, e).canonicalString();
}
function Zn(t, e) {
  const n = (function (t) {
    return new pe(['projects', t.projectId, 'databases', t.database]);
  })(t).child('documents');
  return void 0 === e ? n : n.child(e);
}
function Yn(t, e) {
  return Qn(t.databaseId, e.path);
}
function Xn(t, e, n) {
  return {name: Yn(t, e), fields: n.value.mapValue.fields};
}
function tr(t, e) {
  const n = {structuredQuery: {}},
    r = e.path;
  let i;
  null !== e.collectionGroup
    ? ((i = r),
      (n.structuredQuery.from = [
        {collectionId: e.collectionGroup, allDescendants: !0},
      ]))
    : ((i = r.popLast()),
      (n.structuredQuery.from = [{collectionId: r.lastSegment()}])),
    (n.parent = (function (t, e) {
      return Qn(t.databaseId, e);
    })(t, i));
  const s = (function (t) {
    if (0 !== t.length) return sr(an.create(t, 'and'));
  })(e.filters);
  s && (n.structuredQuery.where = s);
  const o = (function (t) {
    if (0 !== t.length)
      return t.map((t) =>
        (function (t) {
          return {field: ir(t.field), direction: er(t.dir)};
        })(t)
      );
  })(e.orderBy);
  o && (n.structuredQuery.orderBy = o);
  const u = (function (t, e) {
    return t.useProto3Json ||
      (function (t) {
        return null == t;
      })(e)
      ? e
      : {value: e};
  })(t, e.limit);
  return (
    null !== u && (n.structuredQuery.limit = u),
    e.startAt &&
      (n.structuredQuery.startAt = (function (t) {
        return {before: t.inclusive, values: t.position};
      })(e.startAt)),
    e.endAt &&
      (n.structuredQuery.endAt = (function (t) {
        return {before: !t.inclusive, values: t.position};
      })(e.endAt)),
    {B: n, parent: i}
  );
}
function er(t) {
  return Un[t];
}
function nr(t) {
  return qn[t];
}
function rr(t) {
  return zn[t];
}
function ir(t) {
  return {fieldPath: t.canonicalString()};
}
function sr(t) {
  return t instanceof un
    ? (function (t) {
        if ('==' === t.op) {
          if (en(t.value))
            return {unaryFilter: {field: ir(t.field), op: 'IS_NAN'}};
          if (tn(t.value))
            return {unaryFilter: {field: ir(t.field), op: 'IS_NULL'}};
        } else if ('!=' === t.op) {
          if (en(t.value))
            return {unaryFilter: {field: ir(t.field), op: 'IS_NOT_NAN'}};
          if (tn(t.value))
            return {unaryFilter: {field: ir(t.field), op: 'IS_NOT_NULL'}};
        }
        return {
          fieldFilter: {field: ir(t.field), op: nr(t.op), value: t.value},
        };
      })(t)
    : t instanceof an
    ? (function (t) {
        const e = t.getFilters().map((t) => sr(t));
        return 1 === e.length
          ? e[0]
          : {compositeFilter: {op: rr(t.op), filters: e}};
      })(t)
    : Jt();
}
function or(t) {
  const e = [];
  return t.fields.forEach((t) => e.push(t.canonicalString())), {fieldPaths: e};
}
function ur(t) {
  return t.length >= 4 && 'projects' === t.get(0) && 'databases' === t.get(2);
}
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
 */ function ar(t) {
  return new Hn(t, !0);
}
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
 */ class cr extends class {} {
  constructor(t, e, n, r) {
    super(),
      (this.authCredentials = t),
      (this.appCheckCredentials = e),
      (this.connection = n),
      (this.serializer = r),
      (this.Y = !1);
  }
  Z() {
    if (this.Y) throw new ne(te, 'The client has already been terminated.');
  }
  P(t, e, n, r) {
    return (
      this.Z(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([i, s]) => this.connection.P(t, Zn(e, n), r, i, s))
        .catch((t) => {
          throw 'FirebaseError' === t.name
            ? (t.code === Xt &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              t)
            : new ne(Zt, t.toString());
        })
    );
  }
  g(t, e, n, r, i) {
    return (
      this.Z(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([s, o]) => this.connection.g(t, Zn(e, n), r, s, o, i))
        .catch((t) => {
          throw 'FirebaseError' === t.name
            ? (t.code === Xt &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              t)
            : new ne(Zt, t.toString());
        })
    );
  }
  terminate() {
    (this.Y = !0), this.connection.terminate();
  }
}
async function hr(t, e) {
  const n = Qt(t),
    r = {
      writes: e.map((t) =>
        (function (t, e) {
          let n;
          if (e instanceof Vn) n = {update: Xn(t, e.key, e.value)};
          else if (e instanceof jn) n = {delete: Yn(t, e.key)};
          else if (e instanceof Ln)
            n = {update: Xn(t, e.key, e.data), updateMask: or(e.fieldMask)};
          else {
            if (!(e instanceof Bn)) return Jt();
            n = {verify: Yn(t, e.key)};
          }
          return (
            e.fieldTransforms.length > 0 &&
              (n.updateTransforms = e.fieldTransforms.map((t) =>
                (function (t, e) {
                  const n = e.transform;
                  if (n instanceof xn)
                    return {
                      fieldPath: e.field.canonicalString(),
                      setToServerValue: 'REQUEST_TIME',
                    };
                  if (n instanceof Rn)
                    return {
                      fieldPath: e.field.canonicalString(),
                      appendMissingElements: {values: n.elements},
                    };
                  if (n instanceof Cn)
                    return {
                      fieldPath: e.field.canonicalString(),
                      removeAllFromArray: {values: n.elements},
                    };
                  if (n instanceof kn)
                    return {
                      fieldPath: e.field.canonicalString(),
                      increment: n.q,
                    };
                  throw Jt();
                })(0, t)
              )),
            e.precondition.isNone ||
              (n.currentDocument = (function (t, e) {
                return void 0 !== e.updateTime
                  ? {updateTime: Jn(t, e.updateTime)}
                  : void 0 !== e.exists
                  ? {exists: e.exists}
                  : Jt();
              })(t, e.precondition)),
            n
          );
        })(n.serializer, t)
      ),
    };
  await n.P('Commit', n.serializer.databaseId, pe.emptyPath(), r);
}
async function lr(t, e) {
  const n = Qt(t),
    {B: r, parent: i} = tr(n.serializer, On(e));
  return (
    await n.g('RunQuery', n.serializer.databaseId, i, {
      structuredQuery: r.structuredQuery,
    })
  )
    .filter((t) => !!t.document)
    .map((t) =>
      (function (t, e, n) {
        const r = (function (t, e) {
            const n = (function (t) {
              const e = pe.fromString(t);
              return Wt(ur(e)), e;
            })(e);
            if (n.get(1) !== t.databaseId.projectId)
              throw new ne(
                Yt,
                'Tried to deserialize key from different project: ' +
                  n.get(1) +
                  ' vs ' +
                  t.databaseId.projectId
              );
            if (n.get(3) !== t.databaseId.database)
              throw new ne(
                Yt,
                'Tried to deserialize key from different database: ' +
                  n.get(3) +
                  ' vs ' +
                  t.databaseId.database
              );
            return new ge(
              (function (t) {
                return (
                  Wt(t.length > 4 && 'documents' === t.get(4)), t.popFirst(5)
                );
              })(n)
            );
          })(t, e.name),
          i = Wn(e.updateTime),
          s = e.createTime ? Wn(e.createTime) : bn.min(),
          o = new Sn({mapValue: {fields: e.fields}}),
          u = $n.newFoundDocument(r, i, s, o);
        return (
          n && u.setHasCommittedMutations(),
          n ? u.setHasCommittedMutations() : u
        );
      })(n.serializer, t.document, void 0)
    );
}
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
 */ const fr = new Map();
function dr(t) {
  if (t._terminated)
    throw new ne(te, 'The client has already been terminated.');
  if (!fr.has(t)) {
    zt('ComponentProvider', 'Initializing Datastore');
    const e = (function (t) {
        return new Oe(t, fetch.bind(null));
      })(
        (function (t, e, n, r) {
          return new le(
            t,
            e,
            n,
            r.host,
            r.ssl,
            r.experimentalForceLongPolling,
            r.experimentalAutoDetectLongPolling,
            De(r.experimentalLongPollingOptions),
            r.useFetchStreams
          );
        })(
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
           */ t._databaseId,
          t.app.options.appId || '',
          t._persistenceKey,
          t._freezeSettings()
        )
      ),
      n = ar(t._databaseId),
      r = (function (t, e, n, r) {
        return new cr(t, e, n, r);
      })(t._authCredentials, t._appCheckCredentials, e, n);
    fr.set(t, r);
  }
  return fr.get(t);
}
class pr {
  constructor(t) {
    var e, n;
    if (void 0 === t.host) {
      if (void 0 !== t.ssl)
        throw new ne(Yt, "Can't provide ssl option if host option is not set");
      (this.host = 'firestore.googleapis.com'), (this.ssl = !0);
    } else
      (this.host = t.host),
        (this.ssl = null === (e = t.ssl) || void 0 === e || e);
    if (
      ((this.credentials = t.credentials),
      (this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
      (this.localCache = t.localCache),
      void 0 === t.cacheSizeBytes)
    )
      this.cacheSizeBytes = 41943040;
    else {
      if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576)
        throw new ne(Yt, 'cacheSizeBytes must be at least 1048576');
      this.cacheSizeBytes = t.cacheSizeBytes;
    }
    !(function (t, e, n, r) {
      if (!0 === e && !0 === r)
        throw new ne(Yt, `${t} and ${n} cannot be used together.`);
    })(
      'experimentalForceLongPolling',
      t.experimentalForceLongPolling,
      'experimentalAutoDetectLongPolling',
      t.experimentalAutoDetectLongPolling
    ),
      (this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : void 0 === t.experimentalAutoDetectLongPolling
        ? (this.experimentalAutoDetectLongPolling = !0)
        : (this.experimentalAutoDetectLongPolling =
            !!t.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = De(
        null !== (n = t.experimentalLongPollingOptions) && void 0 !== n ? n : {}
      )),
      (function (t) {
        if (void 0 !== t.timeoutSeconds) {
          if (isNaN(t.timeoutSeconds))
            throw new ne(
              Yt,
              `invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`
            );
          if (t.timeoutSeconds < 5)
            throw new ne(
              Yt,
              `invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`
            );
          if (t.timeoutSeconds > 30)
            throw new ne(
              Yt,
              `invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`
            );
        }
      })(
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
         */ this.experimentalLongPollingOptions
      ),
      (this.useFetchStreams = !!t.useFetchStreams);
  }
  isEqual(t) {
    return (
      this.host === t.host &&
      this.ssl === t.ssl &&
      this.credentials === t.credentials &&
      this.cacheSizeBytes === t.cacheSizeBytes &&
      this.experimentalForceLongPolling === t.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        t.experimentalAutoDetectLongPolling &&
      (function (t, e) {
        return t.timeoutSeconds === e.timeoutSeconds;
      })(
        this.experimentalLongPollingOptions,
        t.experimentalLongPollingOptions
      ) &&
      this.ignoreUndefinedProperties === t.ignoreUndefinedProperties &&
      this.useFetchStreams === t.useFetchStreams
    );
  }
}
class wr {
  constructor(t, e, n, r) {
    (this._authCredentials = t),
      (this._appCheckCredentials = e),
      (this._databaseId = n),
      (this._app = r),
      (this.type = 'firestore-lite'),
      (this._persistenceKey = '(lite)'),
      (this._settings = new pr({})),
      (this._settingsFrozen = !1);
  }
  get app() {
    if (!this._app)
      throw new ne(
        te,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available"
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return void 0 !== this._terminateTask;
  }
  _setSettings(t) {
    if (this._settingsFrozen)
      throw new ne(
        te,
        'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
      );
    (this._settings = new pr(t)),
      void 0 !== t.credentials &&
        (this._authCredentials = (function (t) {
          if (!t) return new ie();
          switch (t.type) {
            case 'firstParty':
              return new ae(
                t.sessionIndex || '0',
                t.iamToken || null,
                t.authTokenFactory || null
              );
            case 'provider':
              return t.client;
            default:
              throw new ne(
                Yt,
                'makeAuthCredentialsProvider failed due to invalid credential type'
              );
          }
        })(t.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return (this._settingsFrozen = !0), this._settings;
  }
  _delete() {
    return (
      this._terminateTask || (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    };
  }
  _terminate() {
    return (
      (function (t) {
        const e = fr.get(t);
        e &&
          (zt('ComponentProvider', 'Removing Datastore'),
          fr.delete(t),
          e.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
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
class mr {
  constructor(t, e, n) {
    (this.converter = e),
      (this._query = n),
      (this.type = 'query'),
      (this.firestore = t);
  }
  withConverter(t) {
    return new mr(this.firestore, t, this._query);
  }
}
class gr {
  constructor(t, e, n) {
    (this.converter = e),
      (this._key = n),
      (this.type = 'document'),
      (this.firestore = t);
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new br(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(t) {
    return new gr(this.firestore, t, this._key);
  }
}
class br extends mr {
  constructor(t, e, n) {
    super(
      t,
      e,
      (function (t) {
        return new _n(t);
      })(n)
    ),
      (this._path = n),
      (this.type = 'collection');
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const t = this._path.popLast();
    return t.isEmpty() ? null : new gr(this.firestore, null, new ge(t));
  }
  withConverter(t) {
    return new br(this.firestore, t, this._path);
  }
}
function vr(t, e, ...n) {
  if (((t = w(t)), be('collection', 'path', e), t instanceof wr)) {
    const r = pe.fromString(e, ...n);
    return ye(r), new br(t, null, r);
  }
  {
    if (!(t instanceof gr || t instanceof br))
      throw new ne(
        Yt,
        'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
      );
    const r = t._path.child(pe.fromString(e, ...n));
    return ye(r), new br(t.firestore, null, r);
  }
}
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
class yr {
  constructor(t) {
    this._byteString = t;
  }
  static fromBase64String(t) {
    try {
      return new yr(Ve.fromBase64String(t));
    } catch (t) {
      throw new ne(Yt, 'Failed to construct data from Base64 string: ' + t);
    }
  }
  static fromUint8Array(t) {
    return new yr(Ve.fromUint8Array(t));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return 'Bytes(base64: ' + this.toBase64() + ')';
  }
  isEqual(t) {
    return this._byteString.isEqual(t._byteString);
  }
}
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
 */ class Er {
  constructor(...t) {
    for (let e = 0; e < t.length; ++e)
      if (0 === t[e].length)
        throw new ne(
          Yt,
          'Invalid field name at argument $(i + 1). Field names must not be empty.'
        );
    this._internalPath = new me(t);
  }
  isEqual(t) {
    return this._internalPath.isEqual(t._internalPath);
  }
}
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
 */ class Ir {
  constructor(t) {
    this._methodName = t;
  }
}
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
 */ class Dr {
  constructor(t, e) {
    if (!isFinite(t) || t < -90 || t > 90)
      throw new ne(
        Yt,
        'Latitude must be a number between -90 and 90, but was: ' + t
      );
    if (!isFinite(e) || e < -180 || e > 180)
      throw new ne(
        Yt,
        'Longitude must be a number between -180 and 180, but was: ' + e
      );
    (this._lat = t), (this._long = e);
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(t) {
    return this._lat === t._lat && this._long === t._long;
  }
  toJSON() {
    return {latitude: this._lat, longitude: this._long};
  }
  _compareTo(t) {
    return Re(this._lat, t._lat) || Re(this._long, t._long);
  }
}
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
 */ const Nr = /^__.*__$/;
class Sr {
  constructor(t, e, n) {
    (this.data = t), (this.fieldMask = e), (this.fieldTransforms = n);
  }
  toMutation(t, e) {
    return null !== this.fieldMask
      ? new Ln(t, this.data, this.fieldMask, e, this.fieldTransforms)
      : new Vn(t, this.data, e, this.fieldTransforms);
  }
}
function $r(t) {
  switch (t) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw Jt();
  }
}
class Ar {
  constructor(t, e, n, r, i, s) {
    (this.settings = t),
      (this.databaseId = e),
      (this.serializer = n),
      (this.ignoreUndefinedProperties = r),
      void 0 === i && this.tt(),
      (this.fieldTransforms = i || []),
      (this.fieldMask = s || []);
  }
  get path() {
    return this.settings.path;
  }
  get et() {
    return this.settings.et;
  }
  rt(t) {
    return new Ar(
      Object.assign(Object.assign({}, this.settings), t),
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties,
      this.fieldTransforms,
      this.fieldMask
    );
  }
  nt(t) {
    var e;
    const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
      r = this.rt({path: n, it: !1});
    return r.st(t), r;
  }
  ot(t) {
    var e;
    const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
      r = this.rt({path: n, it: !1});
    return r.tt(), r;
  }
  ut(t) {
    return this.rt({path: void 0, it: !0});
  }
  _t(t) {
    return Mr(
      t,
      this.settings.methodName,
      this.settings.ct || !1,
      this.path,
      this.settings.lt
    );
  }
  contains(t) {
    return (
      void 0 !== this.fieldMask.find((e) => t.isPrefixOf(e)) ||
      void 0 !== this.fieldTransforms.find((e) => t.isPrefixOf(e.field))
    );
  }
  tt() {
    if (this.path)
      for (let t = 0; t < this.path.length; t++) this.st(this.path.get(t));
  }
  st(t) {
    if (0 === t.length) throw this._t('Document fields must not be empty');
    if ($r(this.et) && Nr.test(t))
      throw this._t('Document fields cannot begin and end with "__"');
  }
}
class Tr {
  constructor(t, e, n) {
    (this.databaseId = t),
      (this.ignoreUndefinedProperties = e),
      (this.serializer = n || ar(t));
  }
  ht(t, e, n, r = !1) {
    return new Ar(
      {et: t, methodName: e, lt: n, path: me.emptyPath(), it: !1, ct: r},
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties
    );
  }
}
function _r(t, e) {
  if (Fr((t = w(t)))) return xr('Unsupported field value:', e, t), Or(t, e);
  if (t instanceof Ir)
    return (
      (function (t, e) {
        if (!$r(e.et))
          throw e._t(
            `${t._methodName}() can only be used with update() and set()`
          );
        if (!e.path)
          throw e._t(
            `${t._methodName}() is not currently supported inside arrays`
          );
        const n = t._toFieldTransform(e);
        n && e.fieldTransforms.push(n);
      })(t, e),
      null
    );
  if (void 0 === t && e.ignoreUndefinedProperties) return null;
  if ((e.path && e.fieldMask.push(e.path), t instanceof Array)) {
    if (e.settings.it && 4 !== e.et)
      throw e._t('Nested arrays are not supported');
    return (function (t, e) {
      const n = [];
      let r = 0;
      for (const i of t) {
        let t = _r(i, e.ut(r));
        null == t && (t = {nullValue: 'NULL_VALUE'}), n.push(t), r++;
      }
      return {arrayValue: {values: n}};
    })(t, e);
  }
  return (function (t, e) {
    if (null === (t = w(t))) return {nullValue: 'NULL_VALUE'};
    if ('number' == typeof t)
      return (function (t, e) {
        return (function (t) {
          return (
            'number' == typeof t &&
            Number.isInteger(t) &&
            !Se(t) &&
            t <= Number.MAX_SAFE_INTEGER &&
            t >= Number.MIN_SAFE_INTEGER
          );
        })(e)
          ? (function (t) {
              return {integerValue: '' + t};
            })(e)
          : (function (t, e) {
              if (t.useProto3Json) {
                if (isNaN(e)) return {doubleValue: 'NaN'};
                if (e === 1 / 0) return {doubleValue: 'Infinity'};
                if (e === -1 / 0) return {doubleValue: '-Infinity'};
              }
              return {doubleValue: Se(e) ? '-0' : e};
            })(t, e);
      })(e.serializer, t);
    if ('boolean' == typeof t) return {booleanValue: t};
    if ('string' == typeof t) return {stringValue: t};
    if (t instanceof Date) {
      const n = qe.fromDate(t);
      return {timestampValue: Kn(e.serializer, n)};
    }
    if (t instanceof qe) {
      const n = new qe(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
      return {timestampValue: Kn(e.serializer, n)};
    }
    if (t instanceof Dr)
      return {geoPointValue: {latitude: t.latitude, longitude: t.longitude}};
    if (t instanceof yr) return {bytesValue: Gn(e.serializer, t._byteString)};
    if (t instanceof gr) {
      const n = e.databaseId,
        r = t.firestore._databaseId;
      if (!r.isEqual(n))
        throw e._t(
          `Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`
        );
      return {
        referenceValue: Qn(
          t.firestore._databaseId || e.databaseId,
          t._key.path
        ),
      };
    }
    throw e._t(`Unsupported field value: ${Ee(t)}`);
  })(t, e);
}
function Or(t, e) {
  const n = {};
  return (
    (function (t) {
      for (const e in t)
        if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
      return !0;
    })(t)
      ? e.path && e.path.length > 0 && e.fieldMask.push(e.path)
      : Me(t, (t, r) => {
          const i = _r(r, e.nt(t));
          null != i && (n[t] = i);
        }),
    {mapValue: {fields: n}}
  );
}
function Fr(t) {
  return !(
    'object' != typeof t ||
    null === t ||
    t instanceof Array ||
    t instanceof Date ||
    t instanceof qe ||
    t instanceof Dr ||
    t instanceof yr ||
    t instanceof gr ||
    t instanceof Ir
  );
}
function xr(t, e, n) {
  if (
    !Fr(n) ||
    !(function (t) {
      return (
        'object' == typeof t &&
        null !== t &&
        (Object.getPrototypeOf(t) === Object.prototype ||
          null === Object.getPrototypeOf(t))
      );
    })(n)
  ) {
    const r = Ee(n);
    throw 'an object' === r ? e._t(t + ' a custom object') : e._t(t + ' ' + r);
  }
}
function Rr(t, e, n) {
  if ((e = w(e)) instanceof Er) return e._internalPath;
  if ('string' == typeof e) return kr(t, e);
  throw Mr('Field path arguments must be of type string or ', t, !1, void 0, n);
}
const Cr = new RegExp('[~\\*/\\[\\]]');
function kr(t, e, n) {
  if (e.search(Cr) >= 0)
    throw Mr(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t,
      !1,
      void 0,
      n
    );
  try {
    return new Er(...e.split('.'))._internalPath;
  } catch (r) {
    throw Mr(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t,
      !1,
      void 0,
      n
    );
  }
}
function Mr(t, e, n, r, i) {
  const s = r && !r.isEmpty(),
    o = void 0 !== i;
  let u = `Function ${e}() called with invalid data`;
  n && (u += ' (via `toFirestore()`)'), (u += '. ');
  let a = '';
  return (
    (s || o) &&
      ((a += ' (found'),
      s && (a += ` in field ${r}`),
      o && (a += ` in document ${i}`),
      (a += ')')),
    new ne(Yt, u + t + a)
  );
}
function Pr(t, e) {
  return t.some((t) => t.isEqual(e));
}
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
 */ class Vr {
  constructor(t, e, n, r, i) {
    (this._firestore = t),
      (this._userDataWriter = e),
      (this._key = n),
      (this._document = r),
      (this._converter = i);
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new gr(this._firestore, this._converter, this._key);
  }
  exists() {
    return null !== this._document;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const t = new Lr(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null
        );
        return this._converter.fromFirestore(t);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(t) {
    if (this._document) {
      const e = this._document.data.field(
        (function (t, e) {
          return 'string' == typeof e
            ? kr(t, e)
            : e instanceof Er
            ? e._internalPath
            : e._delegate._internalPath;
        })(
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
           */ 'DocumentSnapshot.get',
          t
        )
      );
      if (null !== e) return this._userDataWriter.convertValue(e);
    }
  }
}
class Lr extends Vr {
  data() {
    return super.data();
  }
}
class jr {
  constructor(t, e) {
    (this._docs = e), (this.query = t);
  }
  get docs() {
    return [...this._docs];
  }
  get size() {
    return this.docs.length;
  }
  get empty() {
    return 0 === this.docs.length;
  }
  forEach(t, e) {
    this._docs.forEach(t, e);
  }
}
class Br extends class {
  convertValue(t, e = 'none') {
    switch (Je(t)) {
      case 0:
        return null;
      case 1:
        return t.booleanValue;
      case 2:
        return Be(t.integerValue || t.doubleValue);
      case 3:
        return this.convertTimestamp(t.timestampValue);
      case 4:
        return this.convertServerTimestamp(t, e);
      case 5:
        return t.stringValue;
      case 6:
        return this.convertBytes(Ue(t.bytesValue));
      case 7:
        return this.convertReference(t.referenceValue);
      case 8:
        return this.convertGeoPoint(t.geoPointValue);
      case 9:
        return this.convertArray(t.arrayValue, e);
      case 10:
        return this.convertObject(t.mapValue, e);
      default:
        throw Jt();
    }
  }
  convertObject(t, e) {
    return this.convertObjectMap(t.fields, e);
  }
  convertObjectMap(t, e = 'none') {
    const n = {};
    return (
      Me(t, (t, r) => {
        n[t] = this.convertValue(r, e);
      }),
      n
    );
  }
  convertGeoPoint(t) {
    return new Dr(Be(t.latitude), Be(t.longitude));
  }
  convertArray(t, e) {
    return (t.values || []).map((t) => this.convertValue(t, e));
  }
  convertServerTimestamp(t, e) {
    switch (e) {
      case 'previous':
        const n = He(t);
        return null == n ? null : this.convertValue(n, e);
      case 'estimate':
        return this.convertTimestamp(Ke(t));
      default:
        return null;
    }
  }
  convertTimestamp(t) {
    const e = je(t);
    return new qe(e.seconds, e.nanos);
  }
  convertDocumentKey(t, e) {
    const n = pe.fromString(t);
    Wt(ur(n));
    const r = new fe(n.get(1), n.get(3)),
      i = new ge(n.popFirst(5));
    return (
      r.isEqual(e) ||
        Ht(
          `Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`
        ),
      i
    );
  }
} {
  constructor(t) {
    super(), (this.firestore = t);
  }
  convertBytes(t) {
    return new yr(t);
  }
  convertReference(t) {
    const e = this.convertDocumentKey(t, this.firestore._databaseId);
    return new gr(this.firestore, null, e);
  }
}
function Ur(t) {
  !(function (t) {
    if ('L' === t.limitType && 0 === t.explicitOrderBy.length)
      throw new ne(
        ee,
        'limitToLast() queries require specifying at least one orderBy() clause'
      );
  })((t = Ie(t, mr))._query);
  const e = dr(t.firestore),
    n = new Br(t.firestore);
  return lr(e, t._query).then((e) => {
    const r = e.map((e) => new Lr(t.firestore, n, e.key, e, t.converter));
    return 'L' === t._query.limitType && r.reverse(), new jr(t, r);
  });
}
function qr(t, e) {
  const n = (function (t, e, ...n) {
      if (
        ((t = w(t)),
        1 === arguments.length && (e = xe.newId()),
        be('doc', 'path', e),
        t instanceof wr)
      ) {
        const r = pe.fromString(e, ...n);
        return ve(r), new gr(t, null, new ge(r));
      }
      {
        if (!(t instanceof gr || t instanceof br))
          throw new ne(
            Yt,
            'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
          );
        const r = t._path.child(pe.fromString(e, ...n));
        return (
          ve(r),
          new gr(t.firestore, t instanceof br ? t.converter : null, new ge(r))
        );
      }
    })((t = Ie(t, br))),
    r = (function (t, e, n) {
      let r;
      return (
        (r = t
          ? n && (n.merge || n.mergeFields)
            ? t.toFirestore(e, n)
            : t.toFirestore(e)
          : e),
        r
      );
    })(t.converter, e),
    i = (function (t, e, n, r, i, s = {}) {
      const o = t.ht(s.merge || s.mergeFields ? 2 : 0, e, n, i);
      xr('Data must be an object, but it was:', o, r);
      const u = Or(r, o);
      let a, c;
      if (s.merge) (a = new Nn(o.fieldMask)), (c = o.fieldTransforms);
      else if (s.mergeFields) {
        const t = [];
        for (const r of s.mergeFields) {
          const i = Rr(e, r, n);
          if (!o.contains(i))
            throw new ne(
              Yt,
              `Field '${i}' is specified in your field mask but missing from your input data.`
            );
          Pr(t, i) || t.push(i);
        }
        (a = new Nn(t)),
          (c = o.fieldTransforms.filter((t) => a.covers(t.field)));
      } else (a = null), (c = o.fieldTransforms);
      return new Sr(new Sn(u), a, c);
    })(
      (function (t) {
        const e = t._freezeSettings(),
          n = ar(t._databaseId);
        return new Tr(t._databaseId, !!e.ignoreUndefinedProperties, n);
      })(t.firestore),
      'addDoc',
      n._key,
      r,
      null !== n.converter,
      {}
    );
  return hr(dr(t.firestore), [i.toMutation(n._key, Mn.exists(!1))]).then(
    () => n
  );
}
(Ut = '10.12.5_lite'),
  Nt(
    new m(
      'firestore/lite',
      (t, {instanceIdentifier: e, options: n}) => {
        const r = t.getProvider('app').getImmediate(),
          i = new wr(
            new oe(t.getProvider('auth-internal')),
            new he(t.getProvider('app-check-internal')),
            (function (t, e) {
              if (
                !Object.prototype.hasOwnProperty.apply(t.options, ['projectId'])
              )
                throw new ne(
                  Yt,
                  '"projectId" not provided in firebase.initializeApp.'
                );
              return new fe(t.options.projectId, e);
            })(
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
               */ r,
              e
            ),
            r
          );
        return n && i._setSettings(n), i;
      },
      'PUBLIC'
    ).setMultipleInstances(!0)
  ),
  Tt('firestore-lite', '4.6.5', ''),
  Tt('firestore-lite', '4.6.5', 'esm2017');
const zr = (function (t, e) {
  const n =
      'object' == typeof t
        ? t
        : (function (t = bt) {
            const e = yt.get(t);
            if (!e && t === bt && a()) return At();
            if (!e) throw St.create('no-app', {appName: t});
            return e;
          })(),
    i = 'string' == typeof t ? t : e || '(default)',
    s = (function (t, e) {
      const n = t.container
        .getProvider('heartbeat')
        .getImmediate({optional: !0});
      return n && n.triggerHeartbeat(), t.container.getProvider(e);
    })(n, 'firestore/lite').getImmediate({identifier: i});
  if (!s._initialized) {
    const t = u('firestore');
    t &&
      (function (t, e, n, i = {}) {
        var s;
        const o = (t = Ie(t, wr))._getSettings(),
          u = `${e}:${n}`;
        if (
          ('firestore.googleapis.com' !== o.host &&
            o.host !== u &&
            Kt(
              'Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.'
            ),
          t._setSettings(
            Object.assign(Object.assign({}, o), {host: u, ssl: !1})
          ),
          i.mockUserToken)
        ) {
          let e, n;
          if ('string' == typeof i.mockUserToken)
            (e = i.mockUserToken), (n = Bt.MOCK_USER);
          else {
            e = (function (t, e) {
              if (t.uid)
                throw new Error(
                  'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
                );
              const n = e || 'demo-project',
                i = t.iat || 0,
                s = t.sub || t.user_id;
              if (!s)
                throw new Error(
                  "mockUserToken must contain 'sub' or 'user_id' field!"
                );
              const o = Object.assign(
                {
                  iss: `https://securetoken.google.com/${n}`,
                  aud: n,
                  iat: i,
                  exp: i + 3600,
                  auth_time: i,
                  sub: s,
                  user_id: s,
                  firebase: {sign_in_provider: 'custom', identities: {}},
                },
                t
              );
              return [
                r(JSON.stringify({alg: 'none', type: 'JWT'})),
                r(JSON.stringify(o)),
                '',
              ].join('.');
            })(
              i.mockUserToken,
              null === (s = t._app) || void 0 === s
                ? void 0
                : s.options.projectId
            );
            const o = i.mockUserToken.sub || i.mockUserToken.user_id;
            if (!o)
              throw new ne(
                Yt,
                "mockUserToken must contain 'sub' or 'user_id' field!"
              );
            n = new Bt(o);
          }
          t._authCredentials = new se(new re(e, n));
        }
      })(s, ...t);
  }
  return s;
})(
  At({
    apiKey: 'AIzaSyD5nHJBocA72gyVu7GuZRjwlYBFDBNf468',
    authDomain: 'mahjong416.firebaseapp.com',
    projectId: 'mahjong416',
    storageBucket: 'mahjong416.appspot.com',
    messagingSenderId: '330986708658',
    appId: '1:330986708658:web:f98cd944afe9615db373ab',
  })
);
export {qr as a, vr as c, zr as d, Ur as g};
