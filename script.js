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

function syncPortfolioStructure() {
  const projectGrid = document.querySelector("#projects .project-grid");
  if (projectGrid) {
    projectGrid.classList.add("four-projects");
    projectGrid.innerHTML = `
      <article class="project-card reveal visible">
        <div class="project-top"><span class="project-label">Capstone · Robotics · Computer Vision</span><span class="project-arrow">↗</span></div>
        <h3>Unmanned Underwater Vehicle (UUV/ROV)</h3>
        <p>Four-member undergraduate capstone project integrating underwater vehicle control, computer vision, sensing, navigation and robotic manipulation.</p>
        <div class="tag-row"><span>Raspberry Pi</span><span>YOLOv8</span><span>Pixhawk</span><span>ArduSub</span></div>
        <a class="project-link" href="projects/uuv.html">View project →</a>
      </article>
      <article class="project-card reveal visible">
        <div class="project-top"><span class="project-label">Intelligent Robotics · Computer Vision</span><span class="project-arrow">↗</span></div>
        <h3>Vision-Guided Underwater Waste Retrieval</h3>
        <p>Two-member robotics project combining underwater waste detection and classification with a vision-guided robotic retrieval mechanism.</p>
        <div class="tag-row"><span>Computer Vision</span><span>Robotics</span><span>Object Detection</span><span>Manipulator</span></div>
        <a class="project-link" href="projects/underwater-waste-retrieval.html">View project →</a>
      </article>
      <article class="project-card reveal visible">
        <div class="project-top"><span class="project-label">Digital Design · FPGA · HDL</span><span class="project-arrow">↗</span></div>
        <h3>Synchronous Sequential Multiplier: FSM-Based ALU Design</h3>
        <p>Four-member digital-design project implementing and validating a 3×3 unsigned sequential multiplier using an FSM-based datapath architecture.</p>
        <div class="tag-row"><span>SystemVerilog</span><span>Active-HDL</span><span>Vivado</span><span>FSM</span></div>
        <a class="project-link" href="projects/sequential-multiplier.html">View project →</a>
      </article>
      <article class="project-card reveal visible">
        <div class="project-top"><span class="project-label">Wireless Communications · Artificial Intelligence</span><span class="project-arrow">↗</span></div>
        <h3>AI-Driven Adaptive OFDM-MIMO Communication System</h3>
        <p>Individual 2×2 OFDM-MIMO project using channel-aware adaptation to jointly select modulation order and transmission-power level.</p>
        <div class="tag-row"><span>MATLAB</span><span>Simulink</span><span>OFDM</span><span>MIMO</span></div>
        <a class="project-link" href="projects/ofdm-mimo.html">View project →</a>
      </article>`;

    const style = document.createElement("style");
    style.textContent = "@media (min-width:1051px){.project-grid.four-projects{grid-template-columns:repeat(2,minmax(0,1fr));}}";
    document.head.appendChild(style);
  }

  const currentResearch = document.querySelector("#research .current-research-grid");
  if (currentResearch && currentResearch.children.length) {
    currentResearch.children[0].innerHTML = `
      <p class="eyebrow">Conference Research</p>
      <h3>Quantifying Forecast Uncertainty Cost and Mitigation in Grid-Connected and Islanded Microgrids Using Stochastic Scheduling and Rolling-Horizon MPC</h3>
      <p>Conference-paper research on uncertainty-aware scheduling and rolling-horizon model predictive control for renewable-rich microgrids. Course: <strong>Optimization of Power System Operation</strong>. Supervisor: <strong>Abu Hena Muhammad Shatil</strong>.</p>
      <div class="pub-actions"><a class="link-btn" href="research/microgrid-mpc.html">View research →</a></div>`;
  }
}

syncPortfolioStructure();

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
