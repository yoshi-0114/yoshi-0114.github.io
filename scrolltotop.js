(() => {
  const button = document.getElementById("backToTop");
  if (!button) return;
  const updateVisibility = () => {
    button.hidden = window.scrollY < 520;
  };
  window.addEventListener("scroll", updateVisibility, { passive: true });
  updateVisibility();
})();
