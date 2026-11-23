import { element, list, section } from '../utils/dom.js';
import { renderGallery } from './MediaGallery.js';

export function renderInterests(data, openLightbox) {
  const { root, content } = section('interests', '05', 'INTERESTS / 兴趣与当下', data.title);
  const layout = element('div', 'interest-layout reveal');
  const items = element('div', 'interest-items');
  for (const item of data.items.filter(item => !item.isPlaceholder)) {
    const card = element('article', 'interest-card');
    card.append(element('h3', '', item.name), element('p', '', item.desc));
    if (item.images?.length) card.append(renderGallery(item.images, openLightbox));
    items.append(card);
  }
  if (items.childElementCount) layout.append(items);
  if (data.now?.items.length) {
    const now = element('aside', 'now-card');
    now.append(element('p', 'eyebrow', data.now.updatedAt), element('h3', '', '近期在做'),
      list(data.now.items, 'highlights'));
    layout.append(now);
  }
  content.append(layout);
  return root;
}
