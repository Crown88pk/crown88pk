// includes.js
async function inject(selector, file) {
  const el = document.querySelector(selector);
  if (!el) return;

  const res = await fetch(file);
  const html = await res.text();
  el.innerHTML = html;
}

inject("#header-container", "header.html");
inject("#under-slide-container", "under-slide.html");