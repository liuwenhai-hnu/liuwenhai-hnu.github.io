import { button, element, link } from '../utils/dom.js';

export function renderNavbar(name, entries) {
  const header = element('header', 'site-header');
  const bar = element('div', 'container nav-bar');
  const brand = link(name, '#hero', 'brand');
  const menu = button('', 'menu-toggle');
  menu.setAttribute('aria-controls', 'site-nav');
  menu.append(element('span'), element('span'), element('span'));
  const nav = element('nav', 'site-nav');
  nav.id = 'site-nav';
  nav.setAttribute('aria-label', '主导航');
  const items = entries.map(entry => link(entry.label, `#${entry.id}`, 'nav-link'));
  nav.append(...items);
  bar.append(brand, menu, nav);
  header.append(bar);

  function setOpen(open) {
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
    header.classList.toggle('menu-open', open);
  }
  setOpen(false);
  menu.addEventListener('click', () => setOpen(menu.getAttribute('aria-expanded') !== 'true'));
  header.addEventListener('click', event => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) setOpen(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && header.classList.contains('menu-open')) {
      setOpen(false);
      menu.focus();
    }
  });
  window.matchMedia('(min-width: 768px)').addEventListener('change', () => setOpen(false));

  function initialize() {
    const sections = entries.map(({ id }) => document.getElementById(id));
    let queued = false;
    function update() {
      queued = false;
      header.classList.toggle('scrolled', window.scrollY > 60);
      const readingLine = window.innerHeight * 0.38;
      let current = 0;
      sections.forEach((section, index) => {
        if (section.getBoundingClientRect().top <= readingLine) current = index;
      });
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = sections.length - 1;
      }
      items.forEach((item, index) => {
        if (index === current) item.setAttribute('aria-current', 'location');
        else item.removeAttribute('aria-current');
      });
    }
    function schedule() {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    }
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
  }
  return { header, initialize };
}
