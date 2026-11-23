import { element, link } from '../utils/dom.js';

export function renderHero(profile) {
  const hero = element('section', 'hero');
  hero.id = 'hero';
  hero.setAttribute('aria-labelledby', 'hero-title');
  const watermark = element('span', 'hero-watermark', 'PORTFOLIO');
  watermark.setAttribute('aria-hidden', 'true');
  const inner = element('div', 'container hero-content');
  const { seeking, hero: entry } = profile;
  if (seeking.active) {
    const status = element('p', 'seeking');
    status.append(element('span', 'status-dot'), document.createTextNode(
      [seeking.badgeText, seeking.cities].filter(Boolean).join(' · '),
    ));
    inner.append(status);
  }
  const title = element('h1', '', profile.name);
  title.id = 'hero-title';
  const accent = element('span', 'name-accent');
  accent.setAttribute('aria-hidden', 'true');
  const description = element('div', 'hero-description');
  description.append(
    element('p', 'hero-school', `${profile.school} ${profile.major.split(' · ')[0]} · ${profile.classYear}本科生`),
    element('p', '', entry.tagline),
  );
  const actions = element('div', 'actions hero-actions');
  actions.append(
    link(entry.primaryCta.label, entry.primaryCta.href, 'button primary'),
    link(entry.secondaryCta.label, entry.secondaryCta.href, 'button outline'),
  );
  inner.append(element('p', 'eyebrow hero-keywords', entry.keywords), title, accent, description, actions);
  hero.append(watermark, inner, link('向下滚动', '#about', 'hero-scroll'));
  return hero;
}
