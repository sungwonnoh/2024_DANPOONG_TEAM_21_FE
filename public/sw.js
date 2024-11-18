self.addEventListener("install", (event) => {
  // Service Worker가 설치될 때 캐시할 자원들을 지정합니다.
  event.waitUntil(
    caches.open("my-cache").then((cache) => {
      return cache.addAll([
        "/", // 기본 페이지
        "/index.html", // index.html
        "/manifest.webmanifest", // manifest 파일
        "/pwa-64x64.png", // 아이콘 파일
        "/pwa-192x192.png", // 아이콘 파일
        "/pwa-512x512.png", // 아이콘 파일
      ]);
    })
  );
});

self.addEventListener("activate", (event) => {
  // Service Worker가 활성화될 때, 이전 버전의 캐시를 삭제합니다.
  const cacheWhitelist = ["my-cache"]; // 현재 사용하는 캐시만 남기기
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName); // 구 버전 캐시 삭제
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  // 네트워크 요청이 있을 때 캐시된 리소스를 우선 반환하고, 없으면 네트워크에서 가져옵니다.
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // 캐시된 응답을 반환
      }
      return fetch(event.request); // 네트워크에서 새로 요청
    })
  );
});
