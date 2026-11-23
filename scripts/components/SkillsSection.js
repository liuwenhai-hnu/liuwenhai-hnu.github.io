import { element, list, section } from '../utils/dom.js';

export function renderSkills(skills) {
  const { root, content } = section('skills', '02', 'SKILLS / 专业技能', '工程技能与工具');
  const grid = element('div', 'skills-grid');
  skills.forEach((skill, index) => {
    const card = element('article', 'skill-card reveal');
    card.style.setProperty('--reveal-delay', `${index * 60}ms`);
    const number = element('span', 'eyebrow skill-number', String(index + 1).padStart(2, '0'));
    number.setAttribute('aria-hidden', 'true');
    card.append(number, element('h3', '', skill.title), element('p', '', skill.summary), list(skill.items, 'chips'));
    grid.append(card);
  });
  content.append(grid);
  return root;
}
