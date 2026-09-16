(function loadPortfolioScripts() {
  const loader = document.currentScript;
  if (!loader) return;

  const base = document.createElement("script");
  base.src = new URL("script-base.js", loader.src).href;
  base.onload = () => {
    const audit = document.createElement("script");
    audit.src = new URL("portfolio-audit.js", loader.src).href;
    document.body.appendChild(audit);
  };
  document.body.appendChild(base);
})();
