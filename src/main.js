import { personalInfo, aboutData, skillCategories, projectsData, servicesData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypingEffect();
  initNavbar();
  renderStats();
  renderAbout();
  renderSkills();
  renderProjects();
  renderServices();
  initContactForm();
  initCopyEmail();
  initModal();
  initCurrentYear();
});

/* --------------------------------------------------------------------------
   THEME TOGGLE
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeBtn?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    showToast(`Switched to ${newTheme} mode`);
  });
}

/* --------------------------------------------------------------------------
   TYPING EFFECT FOR HERO
   -------------------------------------------------------------------------- */
function initTypingEffect() {
  const typingEl = document.getElementById('typing-text');
  if (!typingEl) return;

  const roles = [
    "Full Stack Software Systems",
    "AI & Machine Learning Apps",
    "Scalable Web Architectures",
    "High-Performance Cloud Solutions"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* --------------------------------------------------------------------------
   NAVBAR & SCROLL BEHAVIOR
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Active navigation highlight
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  mobileToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('open');
    });
  });
}

/* --------------------------------------------------------------------------
   RENDER STATS
   -------------------------------------------------------------------------- */
function renderStats() {
  const container = document.getElementById('stats-container');
  if (!container) return;

  container.innerHTML = personalInfo.stats.map(stat => `
    <div class="stat-item">
      <span class="stat-value">${stat.value}</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   RENDER ABOUT SECTION
   -------------------------------------------------------------------------- */
function renderAbout() {
  const bioContainer = document.getElementById('about-bio');
  const pillarsContainer = document.getElementById('about-pillars');

  if (bioContainer) {
    bioContainer.innerHTML = aboutData.bio.map(paragraph => `<p>${paragraph}</p>`).join('');
  }

  if (pillarsContainer) {
    pillarsContainer.innerHTML = aboutData.pillars.map(pillar => `
      <div class="pillar-card">
        <div class="pillar-icon">
          ${getSvgIcon(pillar.icon)}
        </div>
        <h4 class="pillar-title">${pillar.title}</h4>
        <p class="pillar-desc">${pillar.desc}</p>
      </div>
    `).join('');
  }
}

/* --------------------------------------------------------------------------
   RENDER SKILLS & TABS
   -------------------------------------------------------------------------- */
function renderSkills() {
  const tabsContainer = document.getElementById('skills-tabs');
  const skillsContainer = document.getElementById('skills-container');

  if (!tabsContainer || !skillsContainer) return;

  // Render tab buttons
  tabsContainer.innerHTML = skillCategories.map((cat, index) => `
    <button class="tab-btn ${index === 0 ? 'active' : ''}" data-category="${cat.id}">
      ${cat.name}
    </button>
  `).join('');

  // Initial render of first category
  renderCategorySkills(skillCategories[0].id);

  // Tab click handler
  tabsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-btn')) {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      renderCategorySkills(e.target.dataset.category);
    }
  });
}

function renderCategorySkills(categoryId) {
  const skillsContainer = document.getElementById('skills-container');
  const category = skillCategories.find(c => c.id === categoryId);
  if (!category || !skillsContainer) return;

  skillsContainer.innerHTML = `
    <div class="skills-grid">
      ${category.skills.map(skill => `
        <div class="skill-card">
          <div class="skill-header">
            <div class="skill-title-wrap">
              <div class="skill-icon-badge">
                ${getSvgIcon(skill.icon)}
              </div>
              <span class="skill-name">${skill.name}</span>
            </div>
            <span class="skill-level-percent">${skill.level}%</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${skill.level}%"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

/* --------------------------------------------------------------------------
   RENDER PROJECTS & FILTERS
   -------------------------------------------------------------------------- */
function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!projectsGrid) return;

  function displayProjects(filter = 'all') {
    const filtered = filter === 'all'
      ? projectsData
      : projectsData.filter(p => p.category === filter);

    projectsGrid.innerHTML = filtered.map(project => `
      <div class="project-card" data-id="${project.id}">
        <div class="project-banner">
          <span class="project-category-badge">${project.categoryLabel}</span>
          <div class="project-illustration">
            &lt;${project.title.split(' ')[0]} /&gt;
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="project-tech-list">
            ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <div class="project-actions">
            <button class="details-btn open-modal-btn" data-id="${project.id}">
              <span>View Details</span> &rarr;
            </button>
            <div class="link-icons">
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="GitHub Code">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="${project.previewUrl}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="Live Preview">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click listener for modal
    document.querySelectorAll('.open-modal-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.currentTarget.dataset.id, 10);
        openProjectModal(id);
      });
    });
  }

  displayProjects();

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      displayProjects(e.target.dataset.filter);
    });
  });
}

/* --------------------------------------------------------------------------
   RENDER SERVICES
   -------------------------------------------------------------------------- */
function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  grid.innerHTML = servicesData.map(service => `
    <div class="service-card">
      <div class="service-icon-wrap">
        ${getSvgIcon(service.icon)}
      </div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-desc">${service.description}</p>
      <div class="service-highlights">
        ${service.highlights.map(h => `
          <div class="service-bullet">
            <span class="bullet-icon">&check;</span>
            <span>${h}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   PROJECT DETAIL MODAL
   -------------------------------------------------------------------------- */
function initModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  closeBtn?.addEventListener('click', () => {
    modal?.classList.remove('open');
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
    }
  });
}

function openProjectModal(id) {
  const modal = document.getElementById('project-modal');
  const body = document.getElementById('modal-body');
  const project = projectsData.find(p => p.id === id);

  if (!project || !modal || !body) return;

  body.innerHTML = `
    <span class="section-tag">${project.categoryLabel}</span>
    <h2 style="font-size: 2rem; margin: 10px 0 16px 0;">${project.title}</h2>
    <p style="color: var(--text-secondary); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
      ${project.detailedDescription}
    </p>

    <h4 style="margin-bottom: 12px;">Key Highlights & Architecture:</h4>
    <ul style="margin-bottom: 24px; display: flex; flex-direction: column; gap: 8px;">
      ${project.features.map(f => `<li style="font-size: 0.95rem; color: var(--text-primary);">&bull; ${f}</li>`).join('')}
    </ul>

    <h4 style="margin-bottom: 12px;">Technologies Used:</h4>
    <div class="project-tech-list" style="margin-bottom: 30px;">
      ${project.tech.map(t => `<span class="tech-tag" style="font-size: 0.85rem; padding: 6px 12px;">${t}</span>`).join('')}
    </div>

    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <a href="${project.previewUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Live Demo</a>
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">View Source Code</a>
    </div>
  `;

  modal.classList.add('open');
}

/* --------------------------------------------------------------------------
   COPY EMAIL & CONTACT FORM
   -------------------------------------------------------------------------- */
function initCopyEmail() {
  const heroCopyBtn = document.getElementById('copy-email-hero-btn');
  const contactCopyBtn = document.getElementById('copy-email-btn');

  const copyAction = (email) => {
    navigator.clipboard.writeText(email).then(() => {
      showToast(`Copied email (${email}) to clipboard!`);
    }).catch(() => {
      showToast(`Email address: ${email}`);
    });
  };

  heroCopyBtn?.addEventListener('click', () => copyAction(personalInfo.email));
  contactCopyBtn?.addEventListener('click', () => copyAction(personalInfo.email));
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    showToast(`Thank you, ${name}! Your message has been sent successfully.`);
    form.reset();
  });
}

function initCurrentYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* --------------------------------------------------------------------------
   TOAST NOTIFICATION
   -------------------------------------------------------------------------- */
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* --------------------------------------------------------------------------
   SVG ICON HELPER
   -------------------------------------------------------------------------- */
function getSvgIcon(name) {
  const icons = {
    'code-2': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    'cpu': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>',
    'zap': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
    'layout': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
    'javascript': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    'react': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"/><path d="M12 21C6 21 2 17 2 12S6 3 12 3s10 4 10 9-4 9-10 9z"/></svg>',
    'html': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    'typescript': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h10"/></svg>',
    'css': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>',
    'palette': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.75 1.7-1.67 0-.42-.16-.81-.43-1.11-.27-.3-.43-.7-.43-1.14 0-.92.75-1.67 1.67-1.67H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9z"/></svg>',
    'nodejs': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    'python': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/></svg>',
    'api': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    'database': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    'docker': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="4"/></svg>',
    'cloud': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
    'brain': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"/></svg>',
    'bot': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></svg>',
    'table': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
    'git': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 15V9a6 6 0 0 0-6-6H6"/><path d="M6 9v6"/></svg>',
    'workflow': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><path d="M10 6.5h4M17.5 10v4"/></svg>',
    'box': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
    'shield': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    'code': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    'sparkles': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    'server': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>',
    'gauge': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/></svg>'
  };

  return icons[name] || icons['code'];
}
