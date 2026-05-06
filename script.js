const STORAGE_KEY = "site-theme";

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // ignore
  }
}

function getPreferredTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // ignore
  }
  // Default to light to match the reference landing.
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function initThemeToggle() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  let theme = getPreferredTheme();
  setTheme(theme);

  btn.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    setTheme(theme);
  });
}

function initYear() {
  const el = document.getElementById("year");
  if (!el) return;
  el.textContent = String(new Date().getFullYear());
}

function initExternalLinks() {
  for (const a of document.querySelectorAll('a[target="_blank"]')) {
    if (!a.rel || !a.rel.includes("noopener")) {
      a.rel = "noopener noreferrer";
    }
  }
}

function initTopbarHeroMode() {
  const topbar = document.getElementById("top");
  const hero = document.getElementById("hero");
  if (!topbar || !hero) return;

  const set = (overHero) => {
    topbar.classList.toggle("topbar--over-hero", overHero);
  };

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      ([entry]) => {
        set(entry.isIntersecting);
      },
      { root: null, threshold: 0.15 }
    );
    io.observe(hero);
    return;
  }

  const onScroll = () => {
    const r = hero.getBoundingClientRect();
    set(r.bottom > 80);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

initThemeToggle();
initYear();
initExternalLinks();
initTopbarHeroMode();
