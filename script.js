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
  }

  const educationCards = [...document.querySelectorAll("#education .edu-card")];
  const bachelorCard = educationCards.find(card => card.textContent.includes("Bachelor of Science in Electrical & Electronic Engineering"));
  if (bachelorCard) {
    const details = [...bachelorCard.querySelectorAll("p")].find(p => !p.classList.contains("edu-degree"));
    if (details && !details.textContent.includes("Capstone Project Supervisor")) {
      details.insertAdjacentHTML(
        "beforeend",
        `<br>Capstone Project Supervisor: <strong>Prof. Dr. Md. Abdur Rahman</strong>, Pro-Vice Chancellor &amp; Professor, Faculty of Engineering, AIUB.`
      );
    }
  }

  const researchSection = document.querySelector("#research");
  const researchGrid = researchSection?.querySelector(".research-grid");
  const researchSubtitle = researchSection?.querySelector(".section-subtitle");
  if (researchSubtitle) {
    researchSubtitle.textContent = "Five core areas currently shape my academic and research direction.";
  }
  if (researchGrid) {
    researchGrid.classList.add("five-interests");
    researchGrid.innerHTML = `
      <article class="research-card reveal visible">
        <span class="card-number">01</span>
        <h3>Renewable Energy & Photovoltaic Systems</h3>
        <p>Renewable-energy integration, photovoltaic systems, forecasting, energy management and optimization for sustainable power systems.</p>
        <div class="tag-row"><span>PV Systems</span><span>Renewable Integration</span><span>Optimization</span></div>
      </article>

      <article class="research-card reveal visible">
        <span class="card-number">02</span>
        <h3>Smart Grids, Microgrids & DERs</h3>
        <p>Distributed energy resources, grid-connected and islanded microgrids, resilience, scheduling, stability and intelligent grid operation.</p>
        <div class="tag-row"><span>Microgrids</span><span>DERs</span><span>Smart Grids</span></div>
      </article>

      <article class="research-card reveal visible">
        <span class="card-number">03</span>
        <h3>AI & Data-Driven Power Systems</h3>
        <p>AI/ML-assisted forecasting, anomaly detection, intelligent control and data-driven decision-making for modern power and energy systems.</p>
        <div class="tag-row"><span>AI/ML</span><span>Forecasting</span><span>Intelligent Control</span></div>
      </article>

      <article class="research-card reveal visible">
        <span class="card-number">04</span>
        <h3>Cybersecurity & Cyber-Physical Energy Systems</h3>
        <p>Cybersecurity of DER-integrated power systems and microgrids, including attack impact analysis, detection, classification, mitigation and secure distributed operation.</p>
        <div class="tag-row"><span>Cybersecurity</span><span>FDI / DoS</span><span>Digital Twin</span></div>
      </article>

      <article class="research-card reveal visible">
        <span class="card-number">05</span>
        <h3>Photonics & Emerging Devices</h3>
        <p>Photonic integrated circuits, optical devices, silicon photonics, semiconductor device physics and emerging nanoelectronic technologies.</p>
        <div class="tag-row"><span>PIC</span><span>Silicon Photonics</span><span>Nanoelectronics</span></div>
      </article>`;
  }

  const currentResearch = document.querySelector("#research .current-research");
  if (currentResearch) {
    currentResearch.classList.add("selected-research");
    currentResearch.innerHTML = `
      <div class="selected-research-heading">
        <p class="eyebrow">Selected Research</p>
        <h3>Current and recent research work</h3>
        <p>M.Sc. thesis research and ICREST-oriented work across cyber-physical power systems, microgrids and emerging AI infrastructure.</p>
      </div>
      <div class="research-work-grid">
        <article class="research-work-card thesis-card">
          <div class="research-work-top">
            <span class="research-status ongoing">M.Sc. Thesis Research</span>
            <span class="research-year">2026 — Present</span>
          </div>
          <h3>Advanced Cybersecurity of DER-Integrated Power Systems / Microgrids</h3>
          <p>Cyber-physical security research on DER-integrated grids and microgrids, studying the impact of selected cyber attacks and developing suitable detection, classification and mitigation approaches.</p>
          <div class="research-meta">
            <span><strong>Supervisor</strong>: Dr. Md. Rifat Hazari, Associate Professor, Dept. of EEE, AIUB</span>
            <span><strong>Attacks</strong>: False Data Injection · DoS · command injection · GPS/time spoofing</span>
          </div>
          <div class="tag-row"><span>DER Cybersecurity</span><span>Microgrids</span><span>AI/DL</span><span>Digital Twin</span></div>
          <a class="project-link" href="research/der-cybersecurity-thesis.html">View thesis research →</a>
        </article>

        <article class="research-work-card">
          <div class="research-work-top">
            <span class="research-status ongoing">ICREST Research · Ongoing</span>
            <span class="research-year">2026 — Present</span>
          </div>
          <h3>AI Data Center–Grid Interaction and Dynamic Grid Response</h3>
          <p>Ongoing ICREST-oriented research on how rapidly changing AI-compute demand, power-electronic interfaces and UPS behavior can affect power-system dynamics, flexibility and grid response.</p>
          <div class="research-meta">
            <span><strong>Supervisor</strong>: Dr. Md. Rifat Hazari, Associate Professor, Dept. of EEE, AIUB</span>
            <span><strong>Status</strong>: Research work in progress</span>
            <span><strong>Focus</strong>: Dynamic load behavior · UPS response · nonlinear grid dynamics</span>
          </div>
          <div class="tag-row"><span>AI Data Centers</span><span>Power Systems</span><span>UPS</span><span>Dynamic Simulation</span></div>
          <a class="project-link" href="research/ai-data-center-grid.html">View research →</a>
        </article>

        <article class="research-work-card">
          <div class="research-work-top">
            <span class="research-status">ICREST Research · Completed</span>
            <span class="research-year">2026</span>
          </div>
          <h3>Quantifying Forecast Uncertainty Cost and Mitigation in Grid-Connected and Islanded Microgrids Using Stochastic Scheduling and Rolling-Horizon MPC</h3>
          <p>Completed ICREST-oriented conference research comparing deterministic/stochastic day-ahead scheduling with rolling-horizon model predictive control in renewable-rich grid-connected and islanded microgrids.</p>
          <div class="research-meta">
            <span><strong>Supervisor</strong>: Abu Hena MD Shatil, Associate Professor, Dept. of EEE, AIUB</span>
            <span><strong>Status</strong>: Research work completed, intended for ICREST submission</span>
            <span><strong>Course</strong>: Optimization of Power System Operation</span>
          </div>
          <div class="tag-row"><span>Microgrids</span><span>Stochastic Scheduling</span><span>MPC</span><span>Pyomo</span></div>
          <a class="project-link" href="research/microgrid-mpc.html">View research →</a>
        </article>
      </div>`;
  }

  const publications = document.querySelector("#publications .container");
  if (publications && !publications.querySelector(".publication-profile-row")) {
    const heading = publications.querySelector(".section-heading");
    const profileRow = document.createElement("div");
    profileRow.className = "publication-profile-row reveal visible";
    profileRow.innerHTML = `
      <div>
        <strong>2 peer-reviewed IEEE conference papers</strong>
        <span>IEEE Texas Power and Energy Conference (TPEC) 2026</span>
      </div>
      <div class="pub-profile-links">
        <a class="link-btn" href="https://scholar.google.com/citations?user=u2fjd7oAAAAJ" target="_blank" rel="noopener">Google Scholar ↗</a>
        <a class="link-btn" href="https://orcid.org/0009-0001-9240-9705" target="_blank" rel="noopener">ORCID ↗</a>
        <a class="link-btn" href="https://www.researchgate.net/profile/Obyedul-Haque-Efty" target="_blank" rel="noopener">ResearchGate ↗</a>
      </div>`;
    if (heading) heading.insertAdjacentElement("afterend", profileRow);
  }

  document.querySelectorAll("#publications .publication-card").forEach(card => {
    if (!card.querySelector(".pub-status-line")) {
      const title = card.querySelector("h3");
      if (title) {
        const status = document.createElement("p");
        status.className = "pub-status-line";
        status.textContent = "Published · 2026 · Co-author";
        title.insertAdjacentElement("afterend", status);
      }
    }
    const doi = card.querySelector('.pub-actions a[href^="https://doi.org/"]');
    if (doi) doi.textContent = "IEEE / DOI ↗";
  });

  const timeline = document.querySelector("#experience .timeline");
  if (timeline && !timeline.textContent.includes("ESAB AIUB Unit Face")) {
    const item = document.createElement("article");
    item.className = "timeline-item reveal visible";
    item.innerHTML = `
      <div class="timeline-date">Oct 2023 — Dec 2025</div>
      <div class="timeline-content">
        <h3>General Member · ESAB AIUB Unit Face</h3>
        <p class="timeline-location">Dhaka, Bangladesh</p>
        <ul class="timeline-points">
          <li>Supported the planning and execution of student activities and events, fostering collaboration and teamwork within the engineering community.</li>
          <li>Contributed to initiatives that enhanced student engagement and promoted professional development among peers.</li>
        </ul>
      </div>`;

    const peerMentor = [...timeline.querySelectorAll(".timeline-item")]
      .find(el => el.textContent.includes("Peer Academic Mentor"));
    if (peerMentor) timeline.insertBefore(item, peerMentor);
    else timeline.appendChild(item);
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