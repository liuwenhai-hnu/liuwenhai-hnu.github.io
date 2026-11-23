import { button, element } from '../utils/dom.js';

// Add { src, alt, caption, fullSrc? } in the relevant data file.
export function renderGallery(images, openLightbox, fallback = null, profile = false) {
  const root = element('div', `media${profile ? ' media-profile' : ''}`);
  const grid = element('div', 'gallery');
  const entries = images.filter(image => image.src).map(image => {
    const frame = button('', 'media-frame');
    frame.setAttribute('aria-label', `放大查看：${image.alt || image.caption || '图片'}`);
    const thumbnail = element('img');
    thumbnail.alt = image.alt || image.caption || '';
    thumbnail.loading = 'lazy';
    thumbnail.decoding = 'async';
    frame.append(thumbnail, element('span', 'zoom-mark', '＋'));
    return { image, frame, thumbnail };
  });

  function update() {
    const count = entries.length;
    root.classList.toggle('is-empty', !count && !fallback);
    grid.hidden = count === 0;
    grid.className = `gallery gallery-${['none', 'single', 'pair', 'hero-thumbs'][count] || 'stack'}`;
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
  if (fallback) root.append(fallback);
  update();
  return root;
}
