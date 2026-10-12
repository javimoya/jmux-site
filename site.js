/* jmux — the page's behaviour, all of it: the language, the theme, the alt
 * text that follows the language, and the running head that says where in
 * the day the reader is. The words live in index.html, both languages side
 * by side; nothing here writes content. */
"use strict";

const root = document.documentElement;
const store = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } };

const TITLES = {
  es: ["jmux · La mesa tranquila", "Un día entero dirigiendo agentes de Claude Code y Codex desde jmux, un terminal para macOS: lo que haces en la ventana, lo que ves en ella y lo que jmux decide no hacer."],
  en: ["jmux · The quiet desk", "A full day of running Claude Code and Codex agents from jmux, a terminal for macOS: what you do in the window, what you see there, and what jmux chooses not to do."],
};

function setLang(lang, save) {
  root.lang = root.dataset.lang = lang;
  if (save) store("jmux.site.lang", lang);
  document.title = TITLES[lang][0];
  document.querySelector('meta[name="description"]').content = TITLES[lang][1];
  for (const el of document.querySelectorAll("[data-alt-es]")) {
    const alt = el.dataset[lang === "es" ? "altEs" : "altEn"];
    if (el.tagName === "IMG") el.alt = alt; else el.setAttribute("aria-label", alt);
  }
  for (const b of document.querySelectorAll("[data-set-lang]")) b.setAttribute("aria-pressed", String(b.dataset.setLang === lang));
  runhead.refresh();
}

const dark = matchMedia("(prefers-color-scheme: dark)");
function setTheme(pref, save) {
  root.dataset.themePref = pref;
  if (save) store("jmux.site.theme", pref);
  const night = pref === "night" || (pref === "auto" && dark.matches);
  root.dataset.theme = night ? "night" : "paper";
  document.querySelector('meta[name="theme-color"]').content = night ? "#10141c" : "#f4eee3";
  for (const b of document.querySelectorAll("[data-set-theme]")) b.setAttribute("aria-pressed", String(b.dataset.setTheme === pref));
}
dark.addEventListener("change", () => { if (root.dataset.themePref === "auto") setTheme("auto", false); });

/* The running head: the chapter on screen, its hour, and a red line that
 * crosses the head as the day goes from 07:40 to midnight. */
const runhead = (() => {
  const head = document.querySelector(".runhead");
  const now = head.querySelector(".now");
  const what = head.querySelector(".what");
  const chapters = [...document.querySelectorAll("main .ch")];
  const minutes = (t) => { const m = /^(\d\d):(\d\d)$/.exec(t); return m ? +m[1] * 60 + +m[2] : null; };
  const first = minutes("07:40"), last = 24 * 60;
  let current = null;

  function show(ch) {
    current = ch;
    if (!ch) return;
    const t = ch.dataset.time;
    const m = minutes(t);
    now.textContent = t;
    const title = [...ch.querySelectorAll(".ch-head h2 [data-l]")].find((s) => s.dataset.l === root.dataset.lang);
    what.textContent = title ? title.textContent : "";
    head.style.setProperty("--day", m === null ? 1 : Math.min(1, (m - first) / (last - first)).toFixed(3));
  }

  // The head comes in once the cover has gone, and leaves when it is back.
  new IntersectionObserver(([e]) => head.classList.toggle("on", !e.isIntersecting && e.boundingClientRect.top < 0))
    .observe(document.querySelector(".cover .horizon"));

  // A chapter is current once its head has crossed the upper third.
  const seen = new Set();
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) e.isIntersecting ? seen.add(e.target) : seen.delete(e.target);
    const on = chapters.filter((c) => seen.has(c));
    if (on.length) show(on[on.length - 1]);
  }, { rootMargin: "0px 0px -66% 0px" });
  for (const c of chapters) io.observe(c);

  return { refresh: () => show(current) };
})();

document.addEventListener("click", (e) => {
  const l = e.target.closest("[data-set-lang]");
  if (l) return setLang(l.dataset.setLang, true);
  const t = e.target.closest("[data-set-theme]");
  if (t) setTheme(t.dataset.setTheme, true);
});

setLang(root.dataset.lang, false);
setTheme(root.dataset.themePref || "auto", false);
