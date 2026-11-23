import { element, links, list, section } from '../utils/dom.js';
import { renderGallery } from './MediaGallery.js';

export function renderCommunity(entries, openLightbox) {
  const { root, content } = section('community', '04', 'COMMUNITY / 社区与组织', '社区实践与组织', true);
  const grid = element('div', 'community-grid');
  entries.forEach(entry => {
    const card = element('article', 'community-card reveal');
    const meta = [entry.tag, entry.role, entry.period].filter(Boolean).join(' · ');
    card.append(element('p', 'eyebrow', meta), element('h3', '', entry.org),
      element('p', '', entry.summary), list(entry.highlights, 'highlights'),
      renderGallery(entry.images, openLightbox), links(entry.links));
    grid.append(card);
  });
  content.append(grid);
  return root;
}
