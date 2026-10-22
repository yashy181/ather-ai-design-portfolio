// Small progressive enhancement: reveal cards as they enter the viewport.
const revealTargets = document.querySelectorAll('.project-card, .approach-step, .about-copy');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((target) => {
    target.classList.add('reveal');
    observer.observe(target);
  });
}
