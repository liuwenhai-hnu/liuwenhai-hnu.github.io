import { button, element } from '../utils/dom.js';

// Add { src, alt, caption, fullSrc? } in the relevant data file.
export function renderGallery(images, openLightbox, fallback = null, profile = false) {
  const root = element('div', `media${profile ? ' media-profile' : ''}`);
  const grid = element('div', 'gallery');
  const caption = !profile ? element('p', 'media-caption') : null;
  if (caption) caption.hidden = true;
  const entries = images.filter(image => image.src).map(image => {
    const frame = button('', 'media-frame');
    frame.setAttribute('aria-label', `放大查看：${image.alt || image.caption || '图片'}`);
    const thumbnail = element('img');
    thumbnail.alt = image.alt || image.caption || '';
    thumbnail.loading = 'lazy';
    thumbnail.decoding = 'async';
    const zoom = element('span', 'zoom-mark', '+');
    zoom.setAttribute('aria-hidden', 'true');
    frame.append(thumbnail, zoom);
    return { image, frame, thumbnail };
  });

  function update() {
    const count = entries.length;
    root.classList.toggle('is-empty', !count && !fallback);
    grid.hidden = count === 0;
    grid.className = `gallery gallery-${['none', 'single', 'pair', 'hero-thumbs'][count] || 'stack'}`;
    if (caption) {
      const text = count === 1 ? entries[0].image.caption || '' : '';
      caption.textContent = text;
      caption.hidden = !text;
    }
    if (fallback) fallback.hidden = count > 0;
  }
  for (const entry of entries) {
    entry.frame.addEventListener('click', () => {
      openLightbox(entries.map(item => item.image), entries.indexOf(entry));
    });
    entry.thumbnail.addEventListener('error', () => {
      entries.splice(entries.indexOf(entry), 1);
      entry.frame.remove();
      update();
    }, { once: true });
    entry.thumbnail.addEventListener('load', () => entry.frame.classList.add('loaded'), { once: true });
    grid.append(entry.frame);
    entry.thumbnail.src = entry.image.src;
  }
  root.append(grid);
  if (caption) root.append(caption);
  if (fallback) root.append(fallback);
  update();
  return root;
}
