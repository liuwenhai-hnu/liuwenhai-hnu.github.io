import { button, element, link, section } from '../utils/dom.js';
import { closeOnBackdrop, showDialog } from '../utils/dialog.js';

export function renderNotes(data) {
  const { root, content } = section('notes', '06', 'NOTES / 工程笔记', data.title);
  const grid = element('div', 'community-grid');
  const dialog = element('dialog', 'note-dialog');
  dialog.setAttribute('aria-labelledby', 'note-dialog-title');
  const body = element('article');
  const heading = element('h3');
  heading.id = 'note-dialog-title';
  const paragraphs = element('div');
  const close = button('关闭', 'button outline');
  close.autofocus = true;
  close.addEventListener('click', () => dialog.close());
  body.append(close, heading, paragraphs);
  dialog.append(body);
  closeOnBackdrop(dialog);
  for (const note of data.items) {
    const card = element('article', 'interest-card reveal');
    card.append(element('p', 'eyebrow', [note.date, note.category].filter(Boolean).join(' · ')),
      element('h3', '', note.title), element('p', '', note.summary));
    if (note.externalUrl) {
      card.append(link('阅读笔记', note.externalUrl, 'text-link'));
    } else if (note.contentParagraphs?.length) {
      const open = button('阅读笔记', 'text-link');
      open.addEventListener('click', () => {
        heading.textContent = note.title;
        paragraphs.replaceChildren(...note.contentParagraphs.map(text => element('p', '', text)));
        showDialog(dialog);
      });
      card.append(open);
    }
    grid.append(card);
  }
  content.append(grid, dialog);
  return root;
}
