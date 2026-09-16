(function finalizePortfolioSections() {
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
        <p>Arduino, ESP32, Raspberry Pi, Pixhawk, ArduSub, BlueOS, QGroundControl and sensor-integration workflows.</p>
      </article>
      <article class="skill-card reveal visible">
        <h3>Simulation, EM & Research Tools</h3>
        <p>COMSOL Multiphysics, CST Microwave Studio, EasyEDA, Proteus, NI Multisim, SOLIDWORKS, LaTeX, pandas and matplotlib.</p>
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
