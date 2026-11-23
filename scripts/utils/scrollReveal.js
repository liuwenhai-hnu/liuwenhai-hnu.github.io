export function initializeReveals() {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(node => {
    if (node.getBoundingClientRect().top <= window.innerHeight) return;
    node.classList.add('will-reveal');
    observer.observe(node);
  });
}
