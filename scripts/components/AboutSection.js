import { element, section } from '../utils/dom.js';
import { renderGallery } from './MediaGallery.js';

function archive(profile) {
  const card = element('aside', 'archive');
  const top = element('div', 'archive-top');
  top.append(element('span', 'monogram', profile.monogram), element('span', 'eyebrow', `FILE NO. ${profile.archiveId}`));
  const fields = element('dl', 'archive-fields');
  for (const [label, value] of [
    ['院校', profile.school],
    ['专业', profile.major],
    ['求职方向', profile.seeking.direction],
    ['意向城市', profile.seeking.cities],
    ['GitHub', profile.contact.githubHandle],
  ]) {
    if (!value) continue;
    const row = element('div');
    row.append(element('dt', '', label), element('dd', '', value));
    fields.append(row);
  }
  card.append(top, fields);
  return card;
}

export function renderAbout(profile, openLightbox) {
  const { about } = profile;
  const { root, content } = section('about', '01', 'ABOUT / 关于我', about.title, true);
  const layout = element('div', 'about-layout reveal');
  const narrative = element('div', 'about-copy');
  for (const paragraph of about.paragraphs) narrative.append(element('p', '', paragraph));
  const education = element('div', 'education');
  education.append(
    element('strong', '', `${profile.school} · ${profile.major}`),
    element('p', '', profile.graduation),
    element('p', '', about.courses.join(' / ')),
  );
  narrative.append(education);
  const profileMedia = renderGallery(about.photos, openLightbox, archive(profile), true);
  if (about.photos.some(photo => photo.src) && about.photoCaption) {
    const caption = element('p', 'profile-caption', about.photoCaption);
    profileMedia.querySelector('.gallery').after(caption);
  }
  layout.append(narrative, profileMedia);
  const stats = element('dl', 'stats reveal');
  for (const stat of about.stats) {
    const item = element('div');
    item.append(element('dt', '', stat.label), element('dd', '', stat.value));
    stats.append(item);
  }
  content.append(layout, stats);
  return root;
}
