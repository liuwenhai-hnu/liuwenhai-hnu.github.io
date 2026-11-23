export function element(tag, className = '', text = '') {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

export function link(label, href, className = '') {
  const node = element('a', className, label);
  node.href = href;
  if (/^https?:\/\//.test(href)) {
    node.target = '_blank';
    node.rel = 'noopener noreferrer';
  }
  return node;
}

export function button(label, className = '') {
  const node = element('button', className, label);
  node.type = 'button';
  return node;
}

export function list(items, className) {
  const node = element('ul', className);
  node.append(...items.map(item => element('li', '', item)));
  return node;
}

export function section(id, index, label, title, dark = false) {
  const root = element('section', `section${dark ? ' section-dark' : ''}`);
  root.id = id;
  root.setAttribute('aria-labelledby', `${id}-title`);
  const content = element('div', 'container');
  const header = element('header', 'section-header reveal');
  const number = element('span', 'section-number', index);
  number.setAttribute('aria-hidden', 'true');
  const heading = element('h2', '', title);
  heading.id = `${id}-title`;
  header.append(number, element('p', 'eyebrow', label), heading);
  content.append(header);
  root.append(content);
  return { root, content };
}

export function links(items) {
  const row = element('div', 'actions');
  for (const item of items.filter(item => item.url)) {
    row.append(link(item.label, item.url, item.primary ? 'button primary' : 'text-link'));
  }
  return row;
}
