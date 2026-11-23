import { siteConfig } from '../data/siteConfig.js';
import { profileData } from '../data/profile.js';
import { skillsData } from '../data/skills.js';
import { projectCategories, projectsData } from '../data/projects.js';
import { communityData } from '../data/community.js';
import { interestsData } from '../data/interests.js';
import { notesData } from '../data/notes.js';
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderAbout } from './components/AboutSection.js';
import { renderSkills } from './components/SkillsSection.js';
import { renderProjects } from './components/ProjectsSection.js';
import { renderCommunity } from './components/CommunitySection.js';
import { renderInterests } from './components/InterestsSection.js';
import { renderNotes } from './components/NotesSection.js';
import { renderFooter } from './components/Footer.js';
import { initializeLightbox } from './utils/lightbox.js';
import { initializeClipboard } from './utils/clipboard.js';
import { initializeReveals } from './utils/scrollReveal.js';

const openLightbox = initializeLightbox();
const main = document.createElement('main');
main.id = 'main';
main.tabIndex = -1;
main.append(
  renderHero(profileData),
  renderAbout(profileData, openLightbox),
  renderSkills(skillsData),
  renderProjects(projectsData, projectCategories, openLightbox),
  renderCommunity(communityData, openLightbox),
);
if (interestsData.enabled) main.append(renderInterests(interestsData));
if (notesData.enabled && notesData.items.length) main.append(renderNotes(notesData));
const footer = renderFooter(profileData, siteConfig.year);
const ids = new Set([...main.children].map(section => section.id).concat(footer.id));
const navbar = renderNavbar(profileData.name, siteConfig.nav.filter(entry => ids.has(entry.id)));
document.getElementById('app').append(navbar.header, main, footer);
if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'instant' });
navbar.initialize();
initializeReveals();
initializeClipboard();
