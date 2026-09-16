(function initGoogleAnalytics() {
  const measurementId = "G-R7TN45F61K";
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  if (!document.querySelector(`script[data-ga4="${measurementId}"]`)) {
    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    gaScript.dataset.ga4 = measurementId;
    document.head.appendChild(gaScript);
  }
})();

(function loadPolishStyles() {
  const script = document.currentScript;
  if (!script || document.querySelector('link[data-polish-styles]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = new URL('polish.css', script.src).href;
  link.dataset.polishStyles = 'true';
  document.head.appendChild(link);
})();

(function initPublicVisitorCounter() {
  const namespace = "oh-efty-github-io-v1";
  const apiBase = "https://abacus.jasoncameron.dev";
  const totalStorageKey = "efty-public-visitor-total-v1";
  const dayStorageKey = "efty-public-visitor-day-v1";

  const footerWrap = document.querySelector(".site-footer .footer-wrap");
  if (!footerWrap || document.querySelector(".visitor-counter")) return;

  const style = document.createElement("style");
  style.dataset.visitorCounterStyles = "true";
  style.textContent = `
    .visitor-counter {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      color: var(--muted);
      font-size: .78rem;
    }
    .visitor-counter-item {
      display: inline-flex;
      align-items: baseline;
      gap: 5px;
      padding: 6px 9px;
      border: 1px solid var(--line);
      border-radius: 999px;
      background: var(--surface);
      white-space: nowrap;
    }
    .visitor-counter-item strong {
      color: var(--ink-2);
      font-variant-numeric: tabular-nums;
      font-size: .82rem;
    }
    @media (max-width: 780px) {
      .visitor-counter { width: 100%; justify-content: flex-start; }
    }
  `;
  document.head.appendChild(style);

  const counter = document.createElement("div");
  counter.className = "visitor-counter";
  counter.setAttribute("aria-label", "Website visitor statistics");
  counter.setAttribute("title", "Approximate unique browser visits; repeat visits from the same browser are filtered locally.");
  counter.innerHTML = `
    <span class="visitor-counter-item"><strong data-total-visitors>—</strong> Total Visitors</span>
    <span class="visitor-counter-item"><strong data-today-visitors>—</strong> Today's Visitors</span>`;
  footerWrap.appendChild(counter);

  const totalEl = counter.querySelector("[data-total-visitors]");
  const todayEl = counter.querySelector("[data-today-visitors]");
  const numberFormat = new Intl.NumberFormat("en-US");

  function dhakaDateKey() {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Dhaka",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(new Date());
    const value = type => parts.find(part => part.type === type)?.value || "00";
    return `${value("year")}-${value("month")}-${value("day")}`;
  }

  async function counterRequest(action, key) {
    const response = await fetch(`${apiBase}/${action}/${namespace}/${encodeURIComponent(key)}`, {
      method: "GET",
      cache: "no-store"
    });
    if (!response.ok) throw new Error(`Visitor counter request failed: ${response.status}`);
    const data = await response.json();
    const value = Number(data.value);
    if (!Number.isFinite(value)) throw new Error("Visitor counter returned an invalid value");
    return value;
  }

  function isLikelyBot() {
    return /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|headless/i.test(navigator.userAgent || "");
  }

  async function loadVisitorCounts() {
    const today = dhakaDateKey();
    const todayCounterKey = `visitors-${today}`;
    const bot = isLikelyBot();

    try {
      const alreadyCountedTotal = localStorage.getItem(totalStorageKey) === "1";
      const total = await counterRequest(!bot && !alreadyCountedTotal ? "hit" : "get", "total-visitors");
      if (!bot && !alreadyCountedTotal) localStorage.setItem(totalStorageKey, "1");
      totalEl.textContent = numberFormat.format(total);
    } catch (error) {
      console.warn("Total visitor counter unavailable", error);
    }

    try {
      const countedDay = localStorage.getItem(dayStorageKey);
      const alreadyCountedToday = countedDay === today;
      const todayCount = await counterRequest(!bot && !alreadyCountedToday ? "hit" : "get", todayCounterKey);
      if (!bot && !alreadyCountedToday) localStorage.setItem(dayStorageKey, today);
      todayEl.textContent = numberFormat.format(todayCount);
    } catch (error) {
      console.warn("Today's visitor counter unavailable", error);
    }
  }

  loadVisitorCounts();
})();

const root = document.documentElement;
const themeToggle = document.querySelector("[data-theme-toggle]");
const storedTheme = localStorage.getItem("efty-theme");

function preferredTheme() {
  if (storedTheme === "dark" || storedTheme === "light") return storedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("efty-theme", theme);
  if (themeToggle) {
    themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    themeToggle.innerHTML = theme === "dark"
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
}

setTheme(preferredTheme());

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .1 });
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

  const sections = [...document.querySelectorAll("main section[id]")];
  const navAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  if (sections.length && navAnchors.length) {
    const activeObserver = new IntersectionObserver(entries => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${visible.target.id}`));
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0.05, .2, .5] });
    sections.forEach(s => activeObserver.observe(s));
  }
} else {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
}

const toast = document.querySelector(".toast");
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

document.querySelectorAll("[data-copy]").forEach(btn => {
  btn.addEventListener("click", async () => {
    const text = btn.getAttribute("data-copy");
    try {
      await navigator.clipboard.writeText(text);
      showToast("BibTeX copied");
    } catch {
      showToast("Copy unavailable — use the .bib download");
    }
  });
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
