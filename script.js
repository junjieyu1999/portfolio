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
    name: 'Your Name',
    role: 'Frontend designer and developer',
    tagline: 'I design and build calm, durable interfaces for the web.',
    intro:
      'I work where design and code meet: type, layout, accessibility and the small details that make a product feel considered. These are a few projects I am proud of.',

    about: [
      'I am a frontend designer and developer with a habit of starting from the materials. Before I open a design tool, I want to know who will use the thing, where they will be, and what they are carrying with them.',
      'My work spans design systems, data-heavy dashboards and small, careful marketing sites. I like projects where the constraints are real: slow connections, bright sunlight, tired eyes, strict accessibility requirements.',
      'Outside of work I garden badly, throw pots slightly better, and keep a notebook of typefaces I have seen on shopfronts.'
    ],
    skills: [
      { group: 'Design', items: ['Interface and visual design', 'Design systems and tokens', 'Prototyping and user research', 'Typography and layout'] },
      { group: 'Engineering', items: ['HTML, CSS and JavaScript', 'TypeScript, React, Vue, Svelte', 'Accessibility (WCAG 2.2)', 'Performance and offline-first apps'] },
      { group: 'Practice', items: ['Workshops and critique', 'Documentation', 'Mentoring'] }
    ],

    experience: [
      {
        period: '2023 to now',
        title: 'Senior frontend designer',
        org: 'Company Name',
        summary: 'Lead design and frontend for the core product, working with a team of engineers and a researcher.',
        points: ['Built and maintain the company design system used across four products', 'Introduced accessibility reviews to every release']
      },
      {
        period: '2020 to 2023',
        title: 'Frontend developer',
        org: 'Studio Name',
        summary: 'Built websites and web apps for clients in education, culture and the public sector.',
        points: ['Shipped more than twenty client projects from first sketch to launch', 'Set up the studio component library and starter templates']
      },
      {
        period: '2018 to 2020',
        title: 'Junior designer',
        org: 'Agency Name',
        summary: 'Designed interfaces and prototypes, and learned to code them myself.',
        points: []
      }
    ],

    contact: {
      note: 'I am open to freelance projects and full-time roles. The quickest way to reach me is email.',
      email: 'hello@example.com',
      links: [
        { label: 'GitHub', url: 'https://github.com/your-username' },
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/your-username' }
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

    projects: [
      {
        slug: 'fieldnotes',
        title: 'Fieldnotes',
        year: '2026',
        palette: 'moss',
        summary: 'An offline-first notebook that lets ecologists log sightings, photos and soil readings from places with no signal.',
        tags: ['Offline-first app', 'Research tools'],
        role: 'Lead designer and frontend developer',
        team: 'Team of four',
        stack: 'Vue, TypeScript, IndexedDB',
        live: 'https://example.com',
        repo: 'https://github.com/your-username/fieldnotes',
        story: [
          {
            heading: 'The problem',
            body: [
              'Field researchers were keeping paper notebooks and retyping them into spreadsheets weeks later. Photos lived on one phone, GPS pins on another, and entries often lost their location along the way.',
              'The team wanted one place to capture an observation in under ten seconds, even when the nearest mobile mast was an hour away.'
            ]
          },
          {
            heading: 'What I built',
            body: [
              'A single-screen capture flow made for gloves and glare: large targets, high-contrast type and one-handed reach. Everything saves to the device first and syncs in the background when a connection returns.',
              'Before writing production code I prototyped the capture screen with five researchers in a nature reserve. That session moved the record button from the top of the screen to the bottom, and cut the form down to the four fields people actually filled in.'
            ],
            points: [
              'Works fully offline, with background sync and clear sync status',
              'Glove-friendly touch targets and a sunlight mode with a contrast ratio above 7:1',
              'Exports to the spreadsheet format the lab already used'
            ]
          },
          {
            heading: 'What changed',
            body: [
              'In the pilot season, researchers logged entries on site instead of at the end of the day, and the retyping step disappeared from the team\'s workflow. The lab now uses Fieldnotes on every field trip.'
            ]
          }
        ]
      },
      {
        slug: 'terrace',
        title: 'Terrace design system',
        year: '2025',
        palette: 'ochre',
        summary: 'A shared component library and set of design tokens for a produce marketplace with web, kiosk and driver apps.',
        tags: ['Design system', 'Accessibility'],
        role: 'Design system lead',
        team: 'Two designers, three engineers',
        stack: 'Figma, React, Storybook, CSS custom properties',
        live: 'https://example.com',
        repo: '',
        story: [
          {
            heading: 'The problem',
            body: [
              'Three products had grown three slightly different buttons, five greys and no shared idea of what an error looked like. Each change meant three pull requests and an argument.'
            ]
          },
          {
            heading: 'What I built',
            body: [
              'I started with an audit of every component in production, grouped by what it was for rather than how it looked. From that came a small set of tokens for colour, type, spacing and motion, and a library of thirty components documented in Storybook with usage guidance and accessibility notes.',
              'Every component ships with keyboard behaviour and screen reader labels already tested, so teams get accessibility by default instead of as a late fix.'
            ],
            points: [
              'Tokens published once and consumed by web, kiosk and native apps',
              'Component documentation with do and do-not examples',
              'A contribution guide so product teams can propose additions'
            ]
          },
          {
            heading: 'What changed',
            body: [
              'Product teams stopped redrawing common patterns and started composing them. The audit also gave the company its first accessibility baseline, which the team has improved release by release.'
            ]
          }
        ]
      },
      {
        slug: 'tidewatch',
        title: 'Tidewatch',
        year: '2025',
        palette: 'river',
        summary: 'A monitoring dashboard that turns coastal sensor data into plain-language alerts for harbour staff.',
        tags: ['Data visualisation', 'Dashboard'],
        role: 'Product designer and frontend developer',
        team: 'Solo, with a data engineer',
        stack: 'SvelteKit, D3, REST API',
        live: 'https://example.com',
        repo: 'https://github.com/your-username/tidewatch',
        story: [
          {
            heading: 'The problem',
            body: [
              'Harbour staff had access to rich sensor data on water level, wind and wave height, but it lived in charts built for scientists. During a storm warning, they needed to know one thing: is it safe to move the vessel or not.'
            ]
          },
          {
            heading: 'What I built',
            body: [
              'The dashboard leads with a status for each berth, written in plain language and backed by the underlying numbers one click away. Charts are quiet by default and only draw attention when a reading crosses a threshold that staff themselves helped set.',
              'I designed the colour scale so that status never relies on colour alone, and tested the charts with a colour-blindness simulator at every step.'
            ],
            points: [
              'Status first, detail on demand',
              'Thresholds configured with harbour staff, not assumed',
              'Readable on a wall-mounted screen from across the room'
            ]
          },
          {
            heading: 'What changed',
            body: [
              'The harbour office now keeps Tidewatch open on a wall screen during storm season and uses the detail view in morning briefings.'
            ]
          }
        ]
      },
      {
        slug: 'kiln',
        title: 'Kiln booking site',
        year: '2024',
        palette: 'clay',
        summary: 'A small, fast website and booking flow for a community ceramics studio, built to be edited by non-developers.',
        tags: ['Marketing site', 'Booking flow'],
        role: 'Designer and developer',
        team: 'Solo',
        stack: 'Astro, vanilla JavaScript, Markdown content',
        live: 'https://example.com',
        repo: 'https://github.com/your-username/kiln',
        story: [
          {
            heading: 'The problem',
            body: [
              'The studio took bookings by direct message and kept class times in a shared spreadsheet. Students missed sessions, and the owner spent her evenings answering the same five questions.'
            ]
          },
          {
            heading: 'What I built',
            body: [
              'A warm, photography-led site with a booking flow that fits on one screen. Classes, prices and dates live in plain Markdown files, so the owner can update them herself without touching code.',
              'The whole site weighs less than most hero images, and works well on the older phones many students use.'
            ],
            points: [
              'Content managed in simple files, with a short guide for the owner',
              'Booking confirmation by email, with calendar attachments',
              'Pages load in well under a second on a slow connection'
            ]
          },
          {
            heading: 'What changed',
            body: [
              'Evening message traffic dropped sharply, and the owner has added two new classes since launch using only the guide I wrote.'
            ]
          }
        ]
      },
      {
        slug: 'ledgerleaf',
        title: 'Ledgerleaf',
        year: '2024',
        palette: 'bark',
        summary: 'A personal budgeting tool that shows where the month is going without scolding anyone about it.',
        tags: ['Personal finance', 'Charts'],
        role: 'Designer and frontend developer',
        team: 'Side project',
        stack: 'React, Zustand, Recharts',
        live: 'https://example.com',
        repo: 'https://github.com/your-username/ledgerleaf',
        story: [
          {
            heading: 'The problem',
            body: [
              'Most budgeting apps felt like report cards. I wanted something I would open willingly, that showed the shape of a month at a glance and left the judgement to me.'
            ]
          },
          {
            heading: 'What I built',
            body: [
              'A single view that lays the month out like layers of sediment: fixed costs at the bottom, flexible spending above, and what is left at the top. Tapping a layer opens its transactions.',
              'Data stays on the device. There is no account, and an export button for anyone who wants to leave.'
            ],
            points: [
              'No sign-up, no tracking, data stored locally',
              'Keyboard-friendly transaction entry',
              'Plain-language monthly summary'
            ]
          },
          {
            heading: 'What changed',
            body: [
              'It is the tool I use every week. Friends who tried it said the layered view was the first budget chart they understood without a legend.'
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
      ['Team', p.team],
      ['Built with', p.stack]
    ];
    return '' +
      '<article class="case">' +
        '<a class="back" href="#/">All work</a>' +
        '<h1>' + p.title + '</h1>' +
        '<p class="deck">' + p.summary + '</p>' +
        coverOf(p, true) +
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

  function aboutView() {
    return '' +
      '<section class="page">' +
        '<h1>About</h1>' +
        '<div class="split">' +
          '<div class="prose">' + S.about.map(function (t) { return '<p>' + t + '</p>'; }).join('') + '</div>' +
          '<div class="skills">' +
            S.skills.map(function (g) {
              return '<h2>' + g.group + '</h2><ul>' + g.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>';
            }).join('') +
          '</div>' +
        '</div>' +
      '</section>' + footer();
  }

  function experienceView() {
    return '' +
      '<section class="page">' +
        '<h1>Experience</h1>' +
        '<ol class="timeline" style="list-style:none;padding:0">' +
          S.experience.map(function (j) {
            return '<li class="job">' +
              '<p class="when" style="margin:0">' + j.period + '</p>' +
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
