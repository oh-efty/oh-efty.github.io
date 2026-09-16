(function finalizePortfolioSections() {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.content = "Academic and research portfolio of Obyedul Haque Efty — M.Sc. researcher in Electrical & Electronic Engineering focusing on power and energy systems, smart grids and microgrids, applied AI, DER cybersecurity and cyber-physical energy systems, with broader interests in photonics and emerging devices.";
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.content = "Power & Energy Systems · Smart Grids & Microgrids · Applied AI · Cyber-Physical Security · Photonics";
  }

  const heroTitle = document.querySelector("#home .hero-title");
  if (heroTitle) {
    heroTitle.textContent = "M.Sc. Researcher · Power & Energy Systems · Smart Grids & Microgrids · AI · Cyber-Physical Security";
  }

  const heroDescription = document.querySelector("#home .hero-description");
  if (heroDescription) {
    heroDescription.textContent = "My research focuses on intelligent, resilient and secure power and energy systems, spanning renewable integration, smart grids and microgrids, AI-driven analysis, cyber-physical security and dynamic grid interaction with emerging AI infrastructure.";
  }

  const profileHeadline = document.querySelector("#home .profile-card h2");
  if (profileHeadline) {
    profileHeadline.textContent = "Researching intelligent, resilient and secure energy systems.";
  }

  const aboutSection = document.querySelector("#about");
  const aboutTitle = aboutSection?.querySelector(".section-title");
  const aboutProse = aboutSection?.querySelector(".prose");
  if (aboutTitle) {
    aboutTitle.textContent = "Research at the intersection of energy, intelligence and resilience.";
  }
  if (aboutProse) {
    aboutProse.innerHTML = `
      <p>
        I am an Electrical and Electronic Engineering graduate from
        <strong>American International University-Bangladesh (AIUB)</strong> and currently pursuing an
        M.Sc. in Electrical &amp; Electronic Engineering, with a primary focus on power and energy systems,
        renewable integration and applied artificial intelligence.
      </p>
      <p>
        My current research includes cybersecurity of DER-integrated power systems and microgrids,
        AI data-center–grid interaction and dynamic grid response, and uncertainty-aware microgrid operation
        using stochastic scheduling and rolling-horizon model predictive control. My broader academic background
        also spans communications, embedded systems, robotics, VLSI and photonics.
      </p>
      <p>
        I completed my B.Sc. with a <strong>CGPA of 3.97/4.00</strong>, earning
        <strong>Summa Cum Laude with Gold Medal</strong> recognition. My long-term goal is to pursue a Ph.D.
        and contribute to academia and research through intelligent, sustainable, resilient and secure engineering systems.
      </p>`;
  }

  const contactSection = document.querySelector("#contact");
  const contactTitle = contactSection?.querySelector(".section-title");
  const contactSubtitle = contactSection?.querySelector(".section-subtitle");
  if (contactTitle) {
    contactTitle.textContent = "Research collaboration or graduate opportunity?";
  }
  if (contactSubtitle) {
    contactSubtitle.textContent = "I welcome academic discussions and research opportunities in power and energy systems, smart grids and microgrids, renewable integration, applied AI, cyber-physical security and emerging energy infrastructure, with broader interests in photonics and semiconductor technologies.";
  }

  const experienceTimeline = document.querySelector("#experience .timeline");
  if (experienceTimeline) {
    experienceTimeline.innerHTML = `
      <article class="timeline-item reveal visible">
        <div class="timeline-date">Feb 2026 — Present</div>
        <div class="timeline-content">
          <h3>M.Sc. Researcher · AIUB</h3>
          <p>Graduate research on cybersecurity of DER-integrated power systems and microgrids, AI data-center–grid dynamics, and uncertainty-aware microgrid operation.</p>
        </div>
      </article>

      <article class="timeline-item reveal visible">
        <div class="timeline-date">Sep 2025 — Jan 2026</div>
        <div class="timeline-content">
          <h3>IC Mask Design (Layout) Trainee · TAHOE</h3>
          <p>Industry-oriented IC mask/layout training using Cadence EDA tools and standard physical-layout workflows.</p>
        </div>
      </article>

      <article class="timeline-item reveal visible">
        <div class="timeline-date">Oct — Nov 2025</div>
        <div class="timeline-content">
          <h3>Engineering Intern · Dhaka Electric Supply Company Limited (DESCO)</h3>
          <p>Hands-on exposure to 132/33/11 kV and 33/11 kV substations, SCADA, protection, transformers, maintenance and metering operations.</p>
        </div>
      </article>

      <article class="timeline-item reveal visible">
        <div class="timeline-date">Oct 2025</div>
        <div class="timeline-content">
          <h3>VLSI Design Trainee · Ulkasemi</h3>
          <p>Selected among the top 100 students for intensive training covering digital RTL, analog design, design verification, physical design and mask design.</p>
        </div>
      </article>

      <article class="timeline-item reveal visible">
        <div class="timeline-date">Oct 2023 — Dec 2025</div>
        <div class="timeline-content">
          <h3>Event Manager & Organizer · AIUB Research & Development Club</h3>
          <p>Coordinated 15+ technical events, seminars and workshops with 500+ cumulative participants.</p>
        </div>
      </article>

      <article class="timeline-item reveal visible">
        <div class="timeline-date">Oct 2023 — Dec 2025</div>
        <div class="timeline-content">
          <h3>Peer Academic Mentor · AIUB EEE</h3>
          <p>Mentored 50+ junior EEE students in circuits, digital logic and introductory programming.</p>
        </div>
      </article>

      <article class="timeline-item reveal visible">
        <div class="timeline-date">Oct 2023 — Dec 2025</div>
        <div class="timeline-content">
          <h3>General Member · ESAB AIUB Unit Face</h3>
          <p>Supported student activities and events, promoting collaboration, engagement and professional development within the engineering community.</p>
        </div>
      </article>`;
  }

  const skillSection = document.querySelector("#skills");
  const skillBlocks = skillSection?.querySelector(".skill-blocks");
  const skillTitle = skillSection?.querySelector(".section-title");
  if (skillTitle) {
    skillTitle.textContent = "Tools for power systems, intelligent computation and hardware design.";
  }
  if (skillBlocks) {
    skillBlocks.innerHTML = `
      <article class="skill-card reveal visible">
        <h3>Power, Energy & Optimization</h3>
        <p>MATLAB/Simulink, Python, Pyomo, GLPK, pandapower, ANDES, PVsyst, HOMER Pro and RETScreen Expert.</p>
      </article>
      <article class="skill-card reveal visible">
        <h3>VLSI, HDL & FPGA</h3>
        <p>Cadence Virtuoso, Genus, Innovus, Tempus, Pegasus, Xilinx Vivado, Aldec Active-HDL, Verilog, SystemVerilog and VHDL.</p>
      </article>
      <article class="skill-card reveal visible">
        <h3>Embedded Systems & Robotics</h3>
        <p>Arduino, ESP32, STM32, Raspberry Pi, Pixhawk, ArduSub, Cockpit, QGroundControl and sensor-integration workflows.</p>
      </article>
      <article class="skill-card reveal visible">
        <h3>Simulation, EM & Research Tools</h3>
        <p>COMSOL Multiphysics, CST Microwave Studio, SOLIDWORKS, AutoCAD, EasyEDA, Proteus, NI Multisim, LaTeX, pandas and matplotlib.</p>
      </article>`;
  }

  const achievementGrid = document.querySelector("#achievements .achievement-grid");
  if (achievementGrid) {
    achievementGrid.innerHTML = `
      <article class="achievement-card reveal visible"><strong>Gold Medal</strong><span>Summa Cum Laude</span></article>
      <article class="achievement-card reveal visible"><strong>3.97 / 4.00</strong><span>B.Sc. CGPA</span></article>
      <article class="achievement-card reveal visible"><strong>70%</strong><span>Academic Scholarship for Excellence</span></article>
      <article class="achievement-card reveal visible"><strong>Dean's List</strong><span>Recognition across four academic years</span></article>
      <article class="achievement-card reveal visible"><strong>3rd Place</strong><span>World Nanotechnology Day 2023 Poster Competition</span></article>
      <article class="achievement-card reveal visible"><strong>IEEE</strong><span>Graduate Student Member</span></article>`;
  }
})();
