import { button, element, link } from '../utils/dom.js';

export function renderFooter(profile, year) {
  const footer = element('footer', 'site-footer section-dark');
  footer.id = 'contact';
  footer.setAttribute('aria-labelledby', 'contact-title');
  const watermark = element('span', 'footer-watermark', profile.watermark);
  watermark.setAttribute('aria-hidden', 'true');
  const layout = element('div', 'container');
  const top = element('div', 'footer-top');
  const intro = element('div');
  const heading = element('h2', '', profile.name);
  heading.id = 'contact-title';
  intro.append(element('p', 'eyebrow', 'CONTACT / 联系'), heading,
    element('p', '', `${profile.school} · ${profile.major}`));
  const contacts = element('dl', 'contacts');
  const { contact } = profile;
  for (const [label, value, href] of [
    ['邮箱', contact.email], ['手机', contact.phone], ['微信', contact.wechat],
    ['GitHub', contact.githubHandle, contact.github],
  ]) {
    if (!value) continue;
    const row = element('div');
    const detail = element('dd');
    if (href) {
      detail.append(link(value, href, 'text-link'));
    } else {
      const copy = button('复制', 'copy-button');
      copy.dataset.copy = value;
      copy.dataset.kind = label;
      copy.setAttribute('aria-label', `复制${label}`);
      detail.append(element('span', '', value), copy);
    }
    row.append(element('dt', '', label), detail);
    contacts.append(row);
  }
  top.append(intro, contacts);
  const bottom = element('div', 'footer-bottom');
  bottom.append(element('p', '', `© ${year} ${profile.name}`), link('回到顶部 ↑', '#hero', 'text-link'));
  layout.append(top, bottom);
  footer.append(watermark, layout);
  return footer;
}
