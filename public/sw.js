// 麻雀416 Service Worker
// キャッシュバージョン。アセット更新時はここを上げる。
const CACHE = 'mahjong416-v2';

// 最低限のアプリシェルを事前キャッシュ
// アイコン更新時は ?v= を上げてブラウザ／OSに再取得させる
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png?v=2',
  './icons/icon-512.png?v=2',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // 同一オリジン以外（Firestore/Google API など）はキャッシュせずネットワークへ素通し
  if (url.origin !== self.location.origin) return;

  // ページ遷移はネットワーク優先、オフライン時は index.html を返す
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // 静的アセットは stale-while-revalidate
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
