/* ==============================================================
   Portfolio content and rendering.

   Everything you need to edit lives in the SITE object below.
   There is no database: the data is hardcoded, and pages are
   drawn in the browser using hash routes (#/about, #/work/slug),
   which is what lets this run on GitHub Pages with no server.
   ============================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------
     1. Your content (edit this part)
  ------------------------------------------------------------- */
  const SITE = {
    name: 'Yu Jun Jie',
    role: 'Product management and technology consulting',
    tagline: 'I turn what people and businesses need into software that works.',
    intro:
      'I am a product-minded technology professional who has delivered software, automation and AI-enabled solutions across international development, government and private industry. I translate stakeholder needs into scalable digital solutions.',

    photo: 'profilepic.jpg',
    photoAlt: 'Portrait of Yu Jun Jie in a tan jacket and striped shirt',

    about: [
      'I enjoy solving problems that do not have obvious answers. My work sits where people, business and technology meet. I have collaborated with international stakeholders at the United Nations and led product discussions between clients and developers.',
      'I am studying Information Systems at Singapore Management University, majoring in Business Analytics and Digital Cloud Solutions. Before that I completed a diploma in Bioengineering at Singapore Polytechnic.',
      'Away from work, I have played water polo for Singapore and won gold at the SEA Games in 2017 and 2023. I also enjoy backpacking through unfamiliar regions and am teaching myself oil painting.'
    ],
    skills: [
      { group: 'Technical', tone: 'var(--moss)', items: ['Python', 'Java', 'SQL', 'Power BI', 'Next.js', 'React'] },
      { group: 'AI', tone: 'var(--ochre-ink)', items: ['Generative AI', 'Prompt engineering', 'LLMs', 'RAG', 'Fine-tuning', 'Agentic AI'] },
      { group: 'Business', tone: 'var(--clay)', items: ['Stakeholder management', 'Product lifecycle', 'Requirements gathering', 'Process optimisation'] }
    ],
    background: [
      { group: 'Education', items: ['B.Sc. Information Systems, Singapore Management University (2022 to 2027)', 'Diploma in Bioengineering, Singapore Polytechnic (2017 to 2019)'] },
      { group: 'Awards', items: ['Singapore National Water Polo, SEA Games gold (2017, 2023)', 'SMU Yip Pin Xiu Sports Scholarship', 'Runner-up, MaritimeONE Digital Challenge'] },
      { group: 'Languages', items: ['English (fluent)', 'Mandarin (fluent)', 'Spanish (basic)'] }
    ],

    experience: [
      {
        period: 'Jan to May 2026',
        place: 'Singapore',
        title: 'Product Manager',
        org: 'Final year capstone with Calibre Financial Advisory',
        summary: 'Led communication between the client and a multidisciplinary engineering team across the whole product lifecycle.',
        points: [
          'Turned stakeholder discussions into user stories, product requirements and technical deliverables',
          'Prioritised features by balancing user value, technical feasibility and project timelines',
          'Presented iterative demos and managed stakeholder expectations',
          'Selected by the project sponsor to continue supporting future development and to mentor the project teams that followed'
        ]
      },
      {
        period: 'Aug 2025 to Jan 2026',
        place: 'Copenhagen, Denmark',
        title: 'Software Engineer Intern',
        org: 'United Nations Development Programme (UNDP)',
        summary: 'Worked with international stakeholders to design software supporting sustainability and internal operations.',
        points: [
          'Translated business requirements into functional specifications and UML',
          'Designed stakeholder dashboards in Power BI that improved visibility into operational performance',
          'Supported IoT data analysis and full software development lifecycle delivery'
        ]
      },
      {
        period: 'Feb to Jul 2023',
        place: 'Singapore',
        title: 'Software Engineer Intern',
        org: 'Sunco Systems',
        summary: 'Worked with business users to understand operational pain points before building software to address them.',
        points: [
          'Designed an inventory platform that improved stock visibility and reduced waste',
          'Developed automation for repetitive workflows, reducing manual effort'
        ]
      }
    ],

    contact: {
      note: 'I am interested in product management, technology consulting, and AI and digital transformation work. The quickest way to reach me is email.',
      email: 'yujunjie1999@gmail.com',
      links: [
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/yu-junjie' },
        { label: 'GitHub', url: 'https://github.com/junjieyu1999' }
      ]
    },

    /* Colour sets used to draw each project's cover artwork.
       c[0] is the sky, c[1] to c[5] are the layers from top to bottom. */
    palettes: {
      moss:  { c: ['#DDE2CF', '#B8C4A1', '#8CA178', '#5F7A55', '#3C5340', '#222B25'], sun: '#D9A441' },
      ochre: { c: ['#EEDFB8', '#E0C27F', '#C08A2B', '#97651F', '#6B4423', '#33261A'], sun: '#F7EEDA' },
      clay:  { c: ['#EADCCB', '#D7B193', '#B96F4C', '#8A4A32', '#5C3426', '#2E1D17'], sun: '#F6E7C4' },
      river: { c: ['#DADFD6', '#B0BDB6', '#7F958D', '#55726B', '#34504D', '#1B2D2D'], sun: '#D9A441' },
      bark:  { c: ['#E4DCC8', '#C9BA98', '#A28F68', '#76664A', '#4A3F30', '#251F18'], sun: '#C08A2B' }
    },

    /* Leave live or repo as '' to hide that button. Add a link when you have one.
       image is the cover shown on the case study page; leave it out to show the artwork instead. */
    projects: [
      {
        slug: 'advisorone',
        place: 'Singapore',
        image: 'calibreadvisoryprofile.png',
        imageAlt: 'Calibre Advisory logo',
        imageRatio: '1047 / 310',
        title: 'AdvisorOne',
        year: '2026',
        palette: 'moss',
        summary: 'An AI-powered financial advisory platform designed to improve advisor workflow and give managers better insight.',
        tags: ['AI product', 'Financial services'],
        role: 'Product Manager',
        org: 'Calibre Financial Advisory (final year capstone)',
        focus: 'Product management, AI',
        live: '',
        repo: '',
        story: [
          {
            heading: 'The brief',
            body: [
              'AdvisorOne was my final year capstone with Calibre Financial Advisory: an AI-enabled platform meant to improve how advisors work and to give managers better insight. As product manager, I led product discovery and kept the client and a multidisciplinary engineering team talking to each other throughout.'
            ]
          },
          {
            heading: 'What I did',
            body: [
              'I ran stakeholder discussions and turned business goals into user stories, product requirements and technical deliverables. I prioritised features by weighing user value, technical feasibility and project timelines, and presented working demos at each iteration to keep expectations aligned.'
            ],
            points: [
              'Led product discovery and stakeholder communication',
              'Translated business needs into requirements and feature priorities',
              'Presented iterative demonstrations to the client'
            ]
          },
          {
            heading: 'What came of it',
            body: [
              'The project sponsor selected me to continue supporting future development and to mentor the project teams that followed.'
            ]
          }
        ]
      },
      {
        slug: 'satellite-service-inventory',
        place: 'Copenhagen, Denmark',
        image: 'UnitedNationsprofile.webp',
        imageAlt: 'United Nations emblem',
        title: 'Satellite Service Inventory',
        year: '2025',
        palette: 'river',
        summary: 'An interactive system that visualises Starlink satellite coverage and capabilities to support operational planning at the UNDP.',
        tags: ['Data visualisation', 'International development'],
        role: 'Software Engineer Intern',
        org: 'United Nations Development Programme (UNDP)',
        focus: 'Data visualisation, operational planning',
        live: '',
        repo: '',
        story: [
          {
            heading: 'The context',
            body: [
              'UNDP works in dynamic geopolitical environments, where operational planning depends on good information. This project gave planners a clearer view of satellite service coverage and capabilities.'
            ]
          },
          {
            heading: 'What I built',
            body: [
              'I developed an interactive system that visualises Starlink satellite coverage and capabilities, so planning decisions can be based on data. I worked with international stakeholders throughout development.'
            ],
            points: [
              'Interactive visualisation of coverage and capabilities',
              'Built to support data-driven operational planning',
              'Developed in collaboration with stakeholders from different countries'
            ]
          }
        ]
      },
      {
        slug: 'operations-dashboards',
        place: 'Copenhagen, Denmark',
        image: 'UnitedNationsprofile.webp',
        imageAlt: 'United Nations emblem',
        title: 'Operations dashboards',
        year: '2025',
        palette: 'ochre',
        summary: 'Power BI dashboards and supporting software that gave UNDP stakeholders clearer visibility into operational performance.',
        tags: ['Dashboards', 'Sustainability'],
        role: 'Software Engineer Intern',
        org: 'United Nations Development Programme (UNDP)',
        focus: 'Power BI, IoT data, UML',
        live: '',
        repo: '',
        story: [
          {
            heading: 'The context',
            body: [
              'Part of my internship at UNDP was designing software that supported sustainability and internal operations, in collaboration with international stakeholders.'
            ]
          },
          {
            heading: 'What I did',
            body: [
              'I translated business requirements into functional specifications and UML, designed stakeholder dashboards in Power BI, and supported IoT data analysis and delivery across the full software development lifecycle.'
            ],
            points: [
              'Functional specifications and UML drawn from business requirements',
              'Stakeholder dashboards in Power BI',
              'Support for IoT data analysis',
              'Delivery across the full software development lifecycle'
            ]
          },
          {
            heading: 'What changed',
            body: [
              'The dashboards improved visibility into operational performance for the stakeholders who used them.'
            ]
          }
        ]
      },
      {
        slug: 'inventory-platform',
        place: 'Singapore',
        title: 'Inventory platform',
        year: '2023',
        palette: 'clay',
        summary: 'An inventory platform and workflow automations for Sunco Systems that improved stock visibility and reduced waste.',
        tags: ['Inventory', 'Automation'],
        role: 'Software Engineer Intern',
        org: 'Sunco Systems',
        focus: 'Inventory systems, automation',
        live: '',
        repo: '',
        story: [
          {
            heading: 'Starting with the users',
            body: [
              'Before designing anything, I partnered with business users to understand their operational pain points.'
            ]
          },
          {
            heading: 'What I built',
            body: [
              'The result was an inventory platform that improved stock visibility and reduced waste. I also identified repetitive workflows and developed automation that reduced manual effort and improved operational efficiency.'
            ],
            points: [
              'Inventory platform with clearer stock visibility',
              'Automation for repetitive workflows',
              'Less waste and less manual effort'
            ]
          }
        ]
      }
    ]
  };

  /* ------------------------------------------------------------
     2. Cover artwork: layered earth drawn as SVG, no images needed
  ------------------------------------------------------------- */
  function hashString(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function rng(seed) {
    let a = hashString(seed);
    return function () {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function strata(seed, pal, opts) {
    const o = opts || {};
    const w = o.w || 1200;
    const h = o.h || 800;
    const layers = 5;
    const rand = rng(seed);
    const tilt = (rand() - 0.5) * h * 0.14;
    const sunX = w * (0.28 + 0.44 * rand());
    const sunR = Math.min(w, h) * 0.14;
    const f1 = (n) => n.toFixed(1);

    let svg = '<svg class="strata' + (o.animate ? ' is-animated' : '') + '" viewBox="0 0 ' + w + ' ' + h +
      '" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">' +
      '<rect width="' + w + '" height="' + h + '" fill="' + pal.c[0] + '"/>' +
      '<circle cx="' + f1(sunX) + '" cy="' + f1(h * 0.33) + '" r="' + f1(sunR) + '" fill="' + pal.sun + '"/>';

    for (let i = 1; i <= layers; i++) {
      const base = h * (0.4 + 0.11 * (i - 1)) + (rand() - 0.5) * h * 0.02;
      const amp = h * 0.032 * (0.6 + rand());
      const freq = 1 + rand() * 1.6;
      const phase = rand() * 6.283;
      const steps = 10;
      const pts = [];
      for (let k = 0; k <= steps; k++) {
        const u = k / steps;
        pts.push([w * u, base + tilt * (u - 0.5) + Math.sin(u * 6.283 * freq + phase) * amp + (rand() - 0.5) * amp * 0.5]);
      }
      let top = 'M' + f1(pts[0][0]) + ',' + f1(pts[0][1]);
      for (let k = 1; k < steps; k++) {
        const mx = (pts[k][0] + pts[k + 1][0]) / 2;
        const my = (pts[k][1] + pts[k + 1][1]) / 2;
        top += ' Q' + f1(pts[k][0]) + ',' + f1(pts[k][1]) + ' ' + f1(mx) + ',' + f1(my);
      }
      top += ' L' + f1(pts[steps][0]) + ',' + f1(pts[steps][1]);
      svg += '<g class="band" style="--i:' + i + '">' +
        '<path d="' + top + ' L' + w + ',' + h + ' L0,' + h + ' Z" fill="' + pal.c[i] + '"/>' +
        '<path d="' + top + '" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="' + f1(w / 600) + '"/>' +
        '</g>';
    }
    return svg + '</svg>';
  }

  function stripGradient(colors) {
    const step = 100 / colors.length;
    return 'linear-gradient(to bottom,' + colors.map(function (c, i) {
      return c + ' ' + (i * step).toFixed(1) + '% ' + ((i + 1) * step).toFixed(1) + '%';
    }).join(',') + ')';
  }

  /* ------------------------------------------------------------
     3. Views
  ------------------------------------------------------------- */
  const S = SITE;
  const projects = S.projects;

  function coverOf(p, animate) {
    return '<div class="cover">' + strata(p.slug, S.palettes[p.palette], { animate: !!animate }) + '</div>';
  }

  function caseCover(p) {
    const art = strata(p.slug, S.palettes[p.palette], { animate: false });
    if (!p.image) { return '<div class="cover">' + art + '</div>'; }
    return '<div class="cover" style="aspect-ratio:' + (p.imageRatio || '21 / 9') + '">' + art +
      '<img class="cover-img" src="' + p.image + '" alt="' + p.imageAlt + '" onerror="this.remove()"></div>';
  }

  function tagsOf(p) { return p.tags.join(', '); }

  function homeView() {
    const first = projects[0];
    const rest = projects.slice(1);
    return '' +
      '<section class="hero" aria-labelledby="page-title">' +
        '<div>' +
          '<h1 id="page-title">' + S.tagline + '</h1>' +
          '<p class="lede">' + S.intro + '</p>' +
          '<div class="actions">' +
            '<a class="btn" href="#/work/' + first.slug + '">Read the latest case study</a>' +
            '<a class="btn ghost" href="#/about">About me</a>' +
          '</div>' +
        '</div>' +
        '<div class="arch">' + strata('arch-' + S.name, S.palettes.moss, { w: 600, h: 800, animate: true }) + '</div>' +
      '</section>' +

      '<section class="work" aria-labelledby="work-h">' +
        '<h2 id="work-h">Selected work</h2>' +
        '<article class="card featured">' +
          coverOf(first) +
          '<div>' +
            '<h3><a class="stretch" href="#/work/' + first.slug + '">' + first.title + '</a></h3>' +
            '<p>' + first.summary + '</p>' +
            '<p class="meta">' + tagsOf(first) + ', ' + first.year + '</p>' +
          '</div>' +
        '</article>' +
        '<ul class="rows">' +
          rest.map(function (p) {
            return '<li><article class="card row">' +
              coverOf(p) +
              '<div><h3><a class="stretch" href="#/work/' + p.slug + '">' + p.title + '</a></h3><p>' + p.summary + '</p></div>' +
              '<div class="meta"><strong>' + p.year + '</strong>' + tagsOf(p) + '</div>' +
            '</article></li>';
          }).join('') +
        '</ul>' +
      '</section>' +
      footer();
  }

  function caseView(p, index) {
    const prev = projects[index - 1];
    const next = projects[index + 1];
    const facts = [
      ['Role', p.role],
      ['Year', p.year],
      ['Organisation', p.org],
      ['Location', p.place],
      ['Focus', p.focus]
    ].filter(function (f) { return f[1]; });
    return '' +
      '<article class="case">' +
        '<a class="back" href="#/">All work</a>' +
        '<h1>' + p.title + '</h1>' +
        '<p class="deck">' + p.summary + '</p>' +
        caseCover(p) +
        '<dl class="facts">' +
          facts.map(function (f) { return '<div><dt>' + f[0] + '</dt><dd>' + f[1] + '</dd></div>'; }).join('') +
        '</dl>' +
        '<div class="prose">' +
          p.story.map(function (s) {
            return '<h2>' + s.heading + '</h2>' +
              s.body.map(function (t) { return '<p>' + t + '</p>'; }).join('') +
              (s.points ? '<ul class="points">' + s.points.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul>' : '');
          }).join('') +
        '</div>' +
        ((p.live || p.repo)
          ? '<div class="actions links">' +
              (p.live ? '<a class="btn" href="' + p.live + '" target="_blank" rel="noopener">Visit the live site</a>' : '') +
              (p.repo ? '<a class="btn ghost" href="' + p.repo + '" target="_blank" rel="noopener">View the code</a>' : '') +
            '</div>'
          : '') +
        '<nav class="pager" aria-label="More case studies">' +
          (prev ? '<a class="prev" href="#/work/' + prev.slug + '"><small>Previous project</small><strong>' + prev.title + '</strong></a>' : '<span></span>') +
          (next ? '<a class="next" href="#/work/' + next.slug + '"><small>Next project</small><strong>' + next.title + '</strong></a>' : '') +
        '</nav>' +
      '</article>' +
      footer();
  }

  function chipGroups(groups) {
    return groups.map(function (g) {
      return '<div class="skillgroup" style="--gc:' + g.tone + '"><h3>' + g.group + '</h3><ul class="chips">' +
        g.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul></div>';
    }).join('');
  }

  function aboutView() {
    return '' +
      '<section class="page">' +
        '<h1>About</h1>' +
        '<div class="split">' +
          '<div class="prose">' + S.about.map(function (t) { return '<p>' + t + '</p>'; }).join('') + '</div>' +
          (S.photo ? '<div class="portrait"><img src="' + S.photo + '" alt="' + S.photoAlt + '" width="800" height="533"></div>' : '') +
        '</div>' +
        '<section class="glance" aria-labelledby="skills-h">' +
          '<h2 id="skills-h">Skills at a glance</h2>' +
          '<div class="skillgrid">' + chipGroups(S.skills) + '</div>' +
        '</section>' +
        '<section class="background" aria-label="Education, awards and languages">' +
          S.background.map(function (g) {
            return '<div><h3>' + g.group + '</h3><ul>' + g.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul></div>';
          }).join('') +
        '</section>' +
      '</section>' + footer();
  }

  function experienceView() {
    return '' +
      '<section class="page">' +
        '<h1>Experience</h1>' +
        '<ol class="timeline" style="list-style:none;padding:0">' +
          S.experience.map(function (j) {
            return '<li class="job">' +
              '<p class="when" style="margin:0">' + j.period + (j.place ? '<span class="where">' + j.place + '</span>' : '') + '</p>' +
              '<div><h2>' + j.title + '</h2><p class="org" style="margin-top:.1rem;font-family:inherit;font-size:1rem">' + j.org + '</p>' +
              '<p>' + j.summary + '</p>' +
              (j.points.length ? '<ul class="points">' + j.points.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul>' : '') +
              '</div></li>';
          }).join('') +
        '</ol>' +
      '</section>' + footer();
  }

  function contactView() {
    const c = S.contact;
    return '' +
      '<section class="page">' +
        '<h1>Let\'s talk</h1>' +
        '<div class="prose" style="margin-top:1.5rem"><p>' + c.note + '</p></div>' +
        '<a class="mail" href="mailto:' + c.email + '">' + c.email + '</a>' +
        '<ul class="contact-links">' +
          c.links.map(function (l) { return '<li><a href="' + l.url + '" target="_blank" rel="noopener">' + l.label + '</a></li>'; }).join('') +
        '</ul>' +
      '</section>' + footer();
  }

  function notFoundView() {
    return '<section class="page"><h1>That page does not exist</h1>' +
      '<div class="actions"><a class="btn" href="#/">Back to the home page</a></div></section>';
  }

  function footer() {
    return '<p class="foot">' + S.name + '. Built by hand with HTML, CSS and JavaScript.</p>';
  }

  /* ------------------------------------------------------------
     4. Sidebar
  ------------------------------------------------------------- */
  const navItems = [
    { key: 'home', label: 'Home', href: '#/' },
    { key: 'about', label: 'About', href: '#/about' },
    { key: 'experience', label: 'Experience', href: '#/experience' },
    { key: 'contact', label: 'Contact', href: '#/contact' }
  ];

  function sidebarHTML() {
    return '' +
      '<a class="brand" href="#/" aria-label="' + S.name + ', home">' +
        '<span class="mark">' + strata('mark-' + S.name, S.palettes.moss, { w: 120, h: 120 }) + '</span>' +
        '<span><span class="brand-name">' + S.name + '</span><span class="brand-role">' + S.role + '</span></span>' +
      '</a>' +
      '<nav aria-label="Main">' +
        '<ul class="nav">' +
          navItems.map(function (n) { return '<li><a href="' + n.href + '" data-key="' + n.key + '">' + n.label + '</a></li>'; }).join('') +
        '</ul>' +
        '<p class="nav-title" id="side-work">Work</p>' +
        '<ul class="projects" aria-labelledby="side-work">' +
          projects.map(function (p) {
            return '<li class="proj" data-slug="' + p.slug + '" style="--strip:' + stripGradient(S.palettes[p.palette].c) + '">' +
              '<a href="#/work/' + p.slug + '"><span class="strip" aria-hidden="true"></span><span class="ptitle">' + p.title + '</span><span class="pyear">' + p.year + '</span></a>' +
              '<div class="peek"><div><p>' + p.summary + '</p><p class="ptags">' + tagsOf(p) + '</p></div></div>' +
            '</li>';
          }).join('') +
        '</ul>' +
      '</nav>' +
      '<div class="side-foot"><ul>' +
        '<li><a href="mailto:' + S.contact.email + '">Email</a></li>' +
        S.contact.links.map(function (l) { return '<li><a href="' + l.url + '" target="_blank" rel="noopener">' + l.label + '</a></li>'; }).join('') +
      '</ul></div>';
  }

  /* ------------------------------------------------------------
     5. Router
  ------------------------------------------------------------- */
  const main = document.getElementById('main');
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.getElementById('menuBtn');
  const scrim = document.getElementById('scrim');
  let firstRender = true;

  sidebar.innerHTML = sidebarHTML();
  document.getElementById('mbName').textContent = S.name;

  function setMenu(open) {
    sidebar.classList.toggle('open', open);
    scrim.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.textContent = open ? 'Close' : 'Menu';
  }
  menuBtn.addEventListener('click', function () { setMenu(!sidebar.classList.contains('open')); });
  scrim.addEventListener('click', function () { setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) { setMenu(false); menuBtn.focus(); }
  });

  function updateActive(key, slug) {
    sidebar.querySelectorAll('.nav a').forEach(function (a) {
      if (a.dataset.key === key) { a.setAttribute('aria-current', 'page'); } else { a.removeAttribute('aria-current'); }
    });
    sidebar.querySelectorAll('.proj').forEach(function (li) {
      const on = li.dataset.slug === slug;
      li.dataset.active = String(on);
      const a = li.querySelector('a');
      if (on) { a.setAttribute('aria-current', 'page'); a.setAttribute('aria-expanded', 'true'); } else { a.removeAttribute('aria-current'); a.removeAttribute('aria-expanded'); }
    });
  }

  function route() {
    const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
    const page = parts[0];
    const slug = parts[1];
    let html, title, key = '', activeSlug = '';

    if (!page || (page === 'work' && !slug)) {
      html = homeView(); title = S.name + ' | ' + S.role; key = 'home';
    } else if (page === 'about') {
      html = aboutView(); title = 'About | ' + S.name; key = 'about';
    } else if (page === 'experience') {
      html = experienceView(); title = 'Experience | ' + S.name; key = 'experience';
    } else if (page === 'contact') {
      html = contactView(); title = 'Contact | ' + S.name; key = 'contact';
    } else if (page === 'work') {
      const idx = projects.findIndex(function (p) { return p.slug === slug; });
      if (idx > -1) {
        html = caseView(projects[idx], idx); title = projects[idx].title + ' | ' + S.name; activeSlug = slug;
      } else { html = notFoundView(); title = 'Not found | ' + S.name; }
    } else {
      html = notFoundView(); title = 'Not found | ' + S.name;
    }

    main.innerHTML = '<div class="view">' + html + '</div>';
    document.title = title;
    updateActive(key, activeSlug);
    setMenu(false);
    window.scrollTo(0, 0);

    const h1 = main.querySelector('h1');
    if (h1) {
      h1.setAttribute('tabindex', '-1');
      if (!firstRender) { h1.focus({ preventScroll: true }); }
    }
    if (activeSlug) {
      const link = sidebar.querySelector('.proj[data-active="true"]');
      if (link) { link.scrollIntoView({ block: 'nearest' }); }
    }
    firstRender = false;
  }

  window.addEventListener('hashchange', route);
  route();
})();
