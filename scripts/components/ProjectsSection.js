import { button, element, links, list, section } from '../utils/dom.js';
import { renderGallery } from './MediaGallery.js';

function projectCard(project, openLightbox) {
  const card = element('article', 'project');
  const copy = element('div', 'project-copy');
  const meta = element('div', 'project-meta');
  meta.append(element('span', 'tag', project.tag), element('span', 'project-period', project.period));
  copy.append(
    meta, element('h3', '', project.title), element('p', 'project-role', project.role),
    element('p', 'project-summary', project.summary), list(project.highlights, 'highlights'),
    list(project.techStack, 'chips'), links(project.links),
  );
  const specification = element('div', 'specification');
  const metrics = element('dl');
  for (const metric of project.metrics) {
    const row = element('div');
    row.append(element('dt', '', metric.label), element('dd', '', metric.value));
    metrics.append(row);
  }
  specification.append(element('p', 'eyebrow', '工程记录 / PROJECT DATA'), metrics);
  card.append(copy, renderGallery(project.images, openLightbox, project.metrics.length ? specification : null));
  return card;
}

export function renderProjects(projects, categories, openLightbox) {
  const { root, content } = section('projects', '03', 'PROJECTS / 工程与探索', '从数字逻辑到跨界原型');
  const visible = projects.filter(project => project.enabled);
  const groups = categories.map(category => ({
    ...category, items: visible.filter(project => category.id === 'all' || project.category === category.id),
  })).filter(category => category.id === 'all' || category.items.length);
  const tabs = element('div', 'project-tabs');
  tabs.style.setProperty('--tab-count', groups.length);
  tabs.setAttribute('role', 'tablist');
  tabs.setAttribute('aria-label', '项目分类');
  const indicator = element('div', 'tab-indicator');
  indicator.setAttribute('aria-hidden', 'true');
  const panel = element('div', 'project-panel');
  panel.id = 'project-panel';
  panel.setAttribute('role', 'tabpanel');
  panel.tabIndex = 0;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const controls = groups.map(({ id, label }) => {
    const control = button(label, 'project-tab');
    control.id = `tab-${id}`;
    control.setAttribute('role', 'tab');
    control.setAttribute('aria-controls', panel.id);
    return control;
  });
  tabs.append(...controls, indicator);
  content.append(tabs, panel);

  let requested = 0;
  let rendered = 0;
  let animation;
  function moveIndicator() {
    const active = controls[requested];
    indicator.style.width = `${active.offsetWidth}px`;
    indicator.style.transform = `translate(${active.offsetLeft}px, ${active.offsetTop + active.offsetHeight - 2}px)`;
  }
  function select(index) {
    requested = index;
    controls.forEach((control, tabIndex) => {
      control.setAttribute('aria-selected', String(tabIndex === index));
      control.tabIndex = tabIndex === index ? 0 : -1;
    });
    moveIndicator();
  }
  function render(index) {
    rendered = index;
    panel.setAttribute('aria-labelledby', controls[index].id);
    const cards = groups[index].items.map(project => projectCard(project, openLightbox));
    panel.replaceChildren(...(cards.length ? cards : [element('p', '', '项目整理中。')]));
  }

  async function switchTo(index) {
    if (index === requested) return;
    const direction = index > requested ? 1 : -1;
    animation?.cancel();
    select(index);
    if (motion.matches || typeof panel.animate !== 'function' || index === rendered) {
      render(index);
      return;
    }
    const outgoing = panel.animate([
      { opacity: 1, transform: 'translateX(0)' },
      { opacity: 0, transform: `translateX(${-direction * 16}px)` },
    ], { duration: 160, easing: 'ease-in', fill: 'forwards' });
    animation = outgoing;
    try { await outgoing.finished; } catch { return; }
    outgoing.cancel();
    render(index);
    [...panel.children].slice(0, 5).forEach((card, cardIndex) => {
      card.animate([
        { opacity: 0, transform: 'translateY(8px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ], { duration: 250, delay: cardIndex * 55, easing: 'ease-out', fill: 'backwards' });
    });
    animation = panel.animate([
      { opacity: 0, transform: `translateX(${direction * 20}px)` },
      { opacity: 1, transform: 'translateX(0)' },
    ], { duration: 360, easing: 'cubic-bezier(.22, 1, .36, 1)' });
  }
  controls.forEach((control, index) => {
    control.addEventListener('click', () => switchTo(index));
    control.addEventListener('keydown', event => {
      const targets = {
        ArrowLeft: (index - 1 + controls.length) % controls.length,
        ArrowRight: (index + 1) % controls.length,
        Home: 0,
        End: controls.length - 1,
      };
      const target = targets[event.key];
      if (typeof target !== 'number') return;
      event.preventDefault();
      controls[target].focus();
      switchTo(target);
    });
  });
  motion.addEventListener('change', () => {
    animation?.cancel();
    render(requested);
  });
  select(0);
  render(0);
  requestAnimationFrame(moveIndicator);
  if ('ResizeObserver' in window) new ResizeObserver(moveIndicator).observe(tabs);
  else window.addEventListener('resize', moveIndicator);
  return root;
}
