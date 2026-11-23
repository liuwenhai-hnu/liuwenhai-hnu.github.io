import { button, element } from './dom.js';
import { closeOnBackdrop, showDialog } from './dialog.js';

export function initializeLightbox() {
  const dialog = element('dialog', 'lightbox');
  dialog.setAttribute('aria-label', '图片查看器');
  const close = button('×', 'lightbox-close');
  close.setAttribute('aria-label', '关闭图片');
  close.autofocus = true;
  const previous = button('‹', 'lightbox-arrow');
  previous.setAttribute('aria-label', '上一张');
  const next = button('›', 'lightbox-arrow');
  next.setAttribute('aria-label', '下一张');
  const stage = element('div', 'lightbox-stage');
  const figure = element('figure', 'lightbox-figure');
  const image = element('img');
  const failure = element('p', 'image-error', '这张图片暂时无法加载。');
  failure.hidden = true;
  const caption = element('figcaption');
  const title = element('span');
  const position = element('span', 'lightbox-position');
  position.setAttribute('aria-live', 'polite');
  caption.append(title, position);
  figure.append(image, failure, caption);
  stage.append(previous, figure, next);
  dialog.append(close, stage);
  document.body.append(dialog);
  closeOnBackdrop(dialog);

  let entries = [];
  let index = 0;
  function render() {
    const entry = entries[index];
    image.hidden = false;
    failure.hidden = true;
    image.alt = entry.alt || entry.caption || '';
    image.src = entry.fullSrc || entry.src;
    title.textContent = entry.caption || entry.alt || '';
    position.textContent = `${index + 1} / ${entries.length}`;
    previous.hidden = next.hidden = entries.length < 2;
  }
  function move(delta) {
    index = (index + delta + entries.length) % entries.length;
    render();
  }
  image.addEventListener('error', () => {
    const entry = entries[index];
    if (entry.fullSrc && image.getAttribute('src') === entry.fullSrc && entry.fullSrc !== entry.src) {
      image.src = entry.src;
      return;
    }
    image.hidden = true;
    failure.hidden = false;
  });
  next.addEventListener('click', () => move(1));
  previous.addEventListener('click', () => move(-1));
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', event => {
    if (entries.length < 2 || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    move(event.key === 'ArrowLeft' ? -1 : 1);
  });

  return (images, activeIndex) => {
    entries = images;
    index = activeIndex;
    render();
    showDialog(dialog);
  };
}
