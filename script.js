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
    tagline: 'I build products, grow businesses and make art.',
    intro:
      'I am a product-minded technology professional and an Information Systems student at Singapore Management University. I have delivered software and AI-enabled solutions across international development, government and private industry. Today I also co-own a water polo club and run my own digital art studio.',

    avatar: 'smallprofile-web.jpg',
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
      { group: 'Awards', items: ['Singapore National Water Polo: SEA Games gold (2017, 2023), SEA Games bronze (2019), Asian Games (2018, 2023)', 'SMU Yip Pin Xiu Sports Scholarship', 'Runner-up, MaritimeONE Digital Challenge'] },
      { group: 'Languages', items: ['English (fluent)', 'Mandarin (fluent)', 'Spanish (beginner)'] }
    ],

    experience: [
      {
        period: 'Jan to May 2026',
        place: 'Singapore',
        title: 'Product Manager and AI Architecture Engineer',
        org: 'Final year capstone with Calibre Financial Advisory',
        sector: 'Financial advisory',
        summary: 'Worked in a team of six to build AdvisorOne, an AI-enabled advisory platform. I led communication between the client and the engineers across the whole product lifecycle.',
        points: [
          'Turned stakeholder discussions into user stories, product requirements and technical deliverables',
          'Prioritised features by balancing user value, technical feasibility and project timelines',
          'Ran iterative demos to manage the client’s expectations',
          'Designed the AI architecture: prompt engineering on an OpenAI model, with a small retrieval-augmented generation (RAG) layer for guardrails and context',
          'Set up the database design and Git version control for the team',
          'Submitted the platform to Calibre, and was chosen by the project sponsor to continue supporting development and to mentor the next project team'
        ],
        links: [{ label: 'Read the AdvisorOne case study', href: '#/work/advisorone' }]
      },
      {
        period: 'Aug 2025 to Jan 2026',
        place: 'Copenhagen, Denmark',
        title: 'Software Engineer Intern',
        org: 'United Nations Development Programme (UNDP)',
        sector: 'International affairs and humanitarian',
        summary: 'Worked with international stakeholders to design software supporting sustainability and internal operations.',
        points: [
          'Built a satellite service inventory that centralises data for about 170 UNDP offices worldwide. The Denmark office has admin and management access, and every other office has a limited view',
          'Replaced several versions of Excel sheets, which took a couple of days to finalise, with a dashboard that is one click away',
          'Translated business requirements into functional specifications and UML',
          'Designed stakeholder dashboards in Power BI that improved visibility into operational performance',
          'Ran testing and user acceptance testing with stakeholders',
          'Supported IoT data analysis and delivery across the full software development lifecycle'
        ],
        links: [
          { label: 'Read the recommendation letter', href: '#/recommendation' },
          { label: 'Read the case study', href: '#/work/satellite-service-inventory' }
        ]
      },
      {
        period: 'Jan to May 2024',
        place: 'Singapore',
        title: 'Bartender and Software Engineer',
        org: 'Slippery Slope, a cocktail bar',
        sector: 'Food and beverage',
        summary: 'While working shifts behind the bar, I saw how much time manual stock entry took and how many ingredients were wasted. I offered to help the owners for free, and turned it into a university project using their real sales data.',
        points: [
          'Acted as the link between the university and the owners, gathered pain points from fellow staff, and met the module’s requirements',
          'Built a database and inventory system with regression-based sales forecasting to streamline ordering and cut wastage',
          'Built a tool that flags ingredients nearing expiry and posts to a Telegram chat, so staff know which drinks to push',
          'Automated daily, weekly and monthly reports for the owners and managers',
          'Worked peak service behind the bar, prioritising orders and recommending drinks to suit guests’ preferences'
        ],
        links: [{ label: 'Read the case study', href: '#/work/slippery-slope' }]
      },
      {
        period: 'Feb to Jul 2023',
        place: 'Singapore',
        title: 'Software Engineer Intern',
        org: 'Sunco Systems',
        sector: 'Perfumery and e-commerce',
        summary: 'Worked with business users to understand operational pain points before building software to address them.',
        points: [
          'Designed an inventory platform that improved stock visibility and reduced waste',
          'Automated warehouse order and inventory workflows with UiPath, reducing manual effort',
          'Built a .NET application for a perfumery manufacturer that connects hardware to software, cutting the perfumers’ process from about five minutes to three and reducing redundant physical movement'
        ],
        links: [{ label: 'Read the case study', href: '#/work/inventory-platform' }]
      }
    ],

    /* The Sports page. Add or edit games, pillars and photos here. */
    sport: {
      title: 'Sports',
      intro: 'I am a high performance athlete. I have represented Singapore in water polo at the SEA Games and the Asian Games, and the sport has shaped how I work: calm under pressure, careful with my time, competitive, and always a team player.',
      team: 'Singapore National Water Polo',
      hero: { image: 'wp1-web.jpg', alt: 'The Singapore water polo team lined up at the poolside in front of a stand of supporters waving Singapore flags', pos: '50% 72%', caption: 'With the Singapore team and our supporters at the 2023 SEA Games.' },
      lead: 'Training and competing at national level is a full-time discipline on top of everything else. These are the habits it built, and where they show up in my work.',
      pillars: [
        {
          title: 'Performing under pressure',
          body: 'Finals, packed stands and a running clock leave no room to freeze. I learned to stay composed when a game is tight, to make the next decision well instead of dwelling on the last one, and to reset quickly after a mistake.',
          atWork: 'Client demos, tight deadlines and stakeholder meetings feel familiar, and I keep a clear head when plans change.'
        },
        {
          title: 'Managing my time',
          body: 'Squad training, recovery, studies and everything else compete for the same hours. Being a national athlete taught me to plan ahead, protect what matters most and commit fully to whatever I am doing at that moment.',
          atWork: 'I prioritise by value and deadline, and I hold myself to the dates I commit to.'
        },
        {
          title: 'Competitive, and a team player',
          body: 'I compete to win, and I know that a team wins together. Sometimes being a team player means taking a step back when a teammate is better in that moment, and backing them fully. I would rather help the team succeed than protect my own spot.',
          atWork: 'I give credit freely, back the strongest idea in the room, and keep the team’s goal ahead of my own.'
        },
        {
          title: 'Being the best version of myself',
          body: 'Competing against the best in the region means measuring myself against my own standard, not only the scoreboard. I look for what I can improve every day, in training and in how I prepare.',
          atWork: 'I ask for feedback, work on my weak points and keep raising the standard of what I deliver.'
        },
        {
          title: 'Perseverance',
          body: 'There were long seasons of early mornings, hard losses and setbacks before the results came. The medals sit on top of years of showing up when it was difficult, and I learned that progress is built from those days.',
          atWork: 'I stay with hard problems and long projects until they are done properly.'
        }
      ],
      pr: {
        title: 'Speaking for the team',
        paras: [
          'Representing Singapore comes with a public side. I have been media-trained, and I know how to speak in public, stay on message and give measured, professional answers when someone puts a microphone in front of me.',
          'That experience gives me an ease in front of an audience, whether it is a room of stakeholders, a client presentation or a team briefing. I know how to listen to the question, stay calm and say what matters clearly.'
        ],
        image: 'wp2-web.jpg',
        alt: 'Yu Jun Jie sitting on the grass with his SEA Games gold medal, in front of a Team Singapore banner for the 32nd SEA Games',
        caption: 'With my gold medal, in front of a Team Singapore banner for the 32nd SEA Games (5 to 17 May 2023).'
      },
      action: { image: 'wp3.jpg', alt: 'A water polo match, with a ball hitting the goal as players contest it', caption: 'Match action. Photo: CNA' },
      games: [
        { year: '2023', name: 'SEA Games', result: 'Gold', kind: 'gold' },
        { year: '2023', name: 'Asian Games', result: 'Represented Singapore', kind: 'plain' },
        { year: '2019', name: 'SEA Games', result: 'Bronze', kind: 'bronze' },
        { year: '2018', name: 'Asian Games', result: 'Represented Singapore', kind: 'plain' },
        { year: '2017', name: 'SEA Games', result: 'Gold', kind: 'gold' }
      ],
      beyond: [
        ['SMU Yip Pin Xiu Sports Scholarship', 'A sports scholarship from Singapore Management University, where I study Information Systems.'],
        ['Coaching at Aegir Waterpolo', 'Since January 2022 I have coached students and mentored fellow coaches at the club I co-own, overseeing the quality of training.']
      ],
      image: 'aegirprofile.jpg',
      imageAlt: 'Aegir Waterpolo players gathered at the poolside with their coach',
      imagePos: '50% 58%'
    },

    contact: {
      note: 'I am interested in product management, technology consulting, and AI and digital transformation work. You can reach me by email or phone.',
      email: 'yujunjie1999@gmail.com',
      phone: { display: '+65 9060 1533', href: '+6590601533' },
      links: [
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/yu-junjie' },
        { label: 'GitHub', url: 'https://github.com/junjieyu1999' }
      ]
    },

    /* The "Working on now" page. Update the date and the lists as things change. */
    now: {
      updated: 'November 2026',
      title: 'What I am working on now',
      intro: 'Alongside my studies, I run two ventures: a water polo club and a digital art studio. Here is what each one needs from me at the moment.',
      items: [
        {
          slug: 'aegir-waterpolo',
          name: 'Aegir Waterpolo',
          role: 'Co-owner and head coach',
          place: 'Singapore',
          status: 'Ongoing since January 2022',
          palette: 'river',
          tone: 'var(--moss)',
          image: 'aegirprofile.jpg',
          imageAlt: 'Aegir Waterpolo players gathered at the poolside with their coach',
          imagePos: '50% 58%',
          link: { label: 'Visit aegirwaterpolo.com', url: 'https://www.aegirwaterpolo.com/' },
          blurb: 'Moving the club’s payments online and using data to keep more students training with us.',
          summary: 'Aegir Waterpolo is a water polo club in Singapore that I co-own with a business partner. Ownership means weighing the perspectives of many stakeholders and meeting their needs as well as we can, while keeping the business growing.',
          roles: ['Head coach', 'Coach mentor and quality assurance', 'Social media manager (video producer and editor)', 'Digital marketing', 'Data and business analyst'],
          current: [
            ['Digitalising payments', 'My business partner and I are moving the club’s payment processes online so that we can tackle student drop-off.'],
            ['Keeping students longer', 'I am analysing when students are likely to stop attending, and designing incentives that encourage them to stay.'],
            ['Reaching new players', 'I am growing the club’s presence on social media to attract new customers, both from our existing community and from the wider pool of talent in Singapore.']
          ]
        },
        {
          slug: 'Junjie-studio',
          name: 'Junjie Studio',
          role: 'Founder and artist',
          place: 'Online studio',
          status: 'Open since June 2026',
          palette: 'clay',
          tone: 'var(--clay)',
          image: 'artprofile-web.jpg',
          imageAlt: 'An artist at work among paintings laid out on a studio floor',
          imagePos: '50% 72%',
          link: { label: 'Visit junjiestudio.com', url: 'https://junjiestudio.com' },
          blurb: 'Launching a monthly postcard club in January 2027, with fifteen people already on the waiting list.',
          summary: 'Junjie Studio is my own digital art studio. I disliked how exclusive and hidden away art can feel, so I built an online studio that visitors can walk through as if they were standing in a physical space. The studio opened in June 2026.',
          roles: ['Painter', 'Social media manager', 'Business development', 'Administration'],
          current: [
            ['A monthly postcard club', 'I am starting a snail mail postcard club on a monthly subscription. Each month, subscribers receive a printed copy of one of my artworks.'],
            ['Places I have travelled to', 'Each postcard shows a place I have visited, painted in my style, with a short story and my recommendations for what to do there.'],
            ['Logistics and numbers', 'I am working out domestic and international shipping, and calculating breakeven points and the return on my investment.'],
            ['Waiting list', 'Fifteen people have already joined the waiting list ahead of the January launch.']
          ]
        }
      ]
    },

    recommendation: {
      pdf: 'JJ Recommendation letter.pdf',
      preview: 'recommendation-letter-preview.png',
      about: 'A reference from the United Nations Development Programme, written after my internship as a Software Engineer Intern in Copenhagen, from 1 August 2025 to 9 January 2026.',
      quote: 'His ability to independently architect and deliver a production-ready solution was particularly impressive.',
      quote2: 'Given his competence, professionalism, and strong work ethic, I am confident he will be a valuable asset to any team he joins.',
      from: 'Tin Win Aung',
      title: 'Software Development Specialist, Information & Technology Management',
      org: 'United Nations Development Programme',
      place: 'UN City, Copenhagen, Denmark',
      summary: 'The letter highlights the Satellite Communication Service Inventory and Tracking Application I built. It replaced a fragmented, Excel-based process and now gives the team real-time visibility into global inventory and subscription statuses. It also describes my work across the full development lifecycle, from database design and data entry interfaces to a custom analytics dashboard.'
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
        role: 'Product Manager and AI Architecture Engineer',
        org: 'Calibre Financial Advisory (final year capstone)',
        team: 'Team of six',
        focus: 'Product management, AI architecture',
        live: '',
        repo: '',
        story: [
          {
            heading: 'The brief',
            body: [
              'AdvisorOne was my final year capstone with Calibre Financial Advisory: an AI-enabled platform meant to improve how advisors work and to give managers better insight. As product manager and AI architecture engineer on a team of six, I led product discovery and kept the client and the engineers talking to each other throughout.'
            ]
          },
          {
            heading: 'What I did',
            body: [
              'I ran stakeholder discussions and turned business goals into user stories, product requirements and technical deliverables. I prioritised features by weighing user value, technical feasibility and project timelines, and presented working demos at each iteration to keep expectations aligned.',
              'On the technical side, I designed the AI architecture. It uses prompt engineering on an OpenAI model, together with a small retrieval-augmented generation (RAG) layer that provides guardrails and context.'
            ],
            points: [
              'Led product discovery and stakeholder communication',
              'Translated business needs into requirements and feature priorities',
              'Presented iterative demonstrations to the client',
              'Designed the database schema and the GitHub version control workflow for the engineering team',
              'Designed the AI architecture, including prompt engineering, guardrails and RAG'
            ]
          },
          {
            heading: 'What came of it',
            body: [
              'The platform was submitted to Calibre at the end of the project. The project sponsor selected me to continue supporting future development and to mentor the project teams that followed.'
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
        summary: 'An interactive system that visualises Starlink satellite coverage and capabilities across about 170 UNDP offices, to support operational planning.',
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
              'I developed an interactive system that visualises Starlink satellite coverage and capabilities, so planning decisions can be based on data. I worked with many international stakeholders throughout development.',
              'The system centralises data for about 170 UNDP offices worldwide. Only the Denmark office has admin and management access, and every other office has a limited view.'
            ],
            points: [
              'Interactive visualisation of coverage and capabilities',
              'One central source for about 170 offices, with role-based access',
              'Replaced a fragmented, Excel-based process with a single source of truth',
              'Built to support data-driven operational planning',
              'Developed in collaboration with stakeholders from different countries',
              'Testing and user acceptance testing with stakeholders to make sure the system met their needs'
            ]
          },
          {
            heading: 'What changed',
            body: [
              'Teams used to work from several versions of Excel sheets, which took a couple of days to finalise. The same information is now on a dashboard that is one click away.'
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
        slug: 'slippery-slope',
        place: 'Singapore',
        image: 'slipperyslope.jpg',
        imageAlt: 'Slippery Slope cocktail bar logo',
        imageFit: 'contain',
        title: 'Slippery Slope inventory system',
        year: '2024',
        palette: 'bark',
        summary: 'An inventory and reporting system for a cocktail bar near Maxwell. It forecasts sales, tracks ingredients and nudges staff to use stock that is close to expiry.',
        tags: ['Inventory', 'Automation'],
        role: 'Bartender and Software Engineer',
        org: 'Slippery Slope (cocktail bar)',
        focus: 'Forecasting, inventory, Telegram automation',
        live: '',
        repo: '',
        story: [
          {
            heading: 'How it started',
            body: [
              'I was working shifts as a bartender when I noticed how long manual stock entry took, and how many ingredients went to waste. I brought it up with the owners and offered to help for free, in exchange for real sales data that I could use for a project in one of my university modules.',
              'The module did not require an external company, and a makeshift project would have been easy. I chose a real one to make it more interesting.'
            ]
          },
          {
            heading: 'Working between two sides',
            body: [
              'I acted as the link between the university and the owners. I collected pain points from the other staff, and made sure the project still met the school’s requirements.'
            ]
          },
          {
            heading: 'What I built',
            body: [
              'A database and inventory system with regression-based sales forecasting, to streamline ordering and cut wastage. Based on current stock, the system updates a Telegram chat and tells staff which drinks to push, because the ingredients in them are nearing their expiry dates.'
            ],
            points: [
              'Regression-based sales forecasting to guide ordering',
              'Ingredient tracking with expiry alerts in a Telegram chat',
              'Daily, weekly and monthly reports for the owners and managers, covering total sales, best sellers and the top-selling employee',
              'A list of ingredients running low, with the vendor to contact for the next order'
            ]
          },
          {
            heading: 'What changed',
            body: [
              'The bar manages its ingredients better, so less goes to waste and costs are lower.'
            ]
          }
        ]
      },
      {
        slug: 'inventory-platform',
        place: 'Singapore',
        image: 'suncosystemprofile-circle.png',
        imageAlt: 'Sunco Systems logo',
        imageFit: 'contain',
        title: 'Inventory platform',
        year: '2023',
        palette: 'clay',
        summary: 'An inventory platform and automations for Sunco Systems, including a .NET application that cut a perfumery manufacturing process from five minutes to three.',
        tags: ['Inventory', 'Automation'],
        role: 'Software Engineer Intern',
        org: 'Sunco Systems',
        focus: 'Inventory systems, RPA, .NET',
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
              'The result was an inventory platform that improved stock visibility and reduced waste. I also identified repetitive workflows and developed automation that reduced manual effort and improved operational efficiency.',
              'In the warehouse, I used UiPath to automate order and inventory workflows. For a perfumery manufacturer, I built a .NET application that connects hardware to software, so that perfumers make fewer redundant movements while manufacturing.'
            ],
            points: [
              'Inventory platform with clearer stock visibility',
              'UiPath robotic process automation for warehouse orders and inventory',
              '.NET application connecting manufacturing hardware to software',
              'Less waste, less manual effort and less physical strain'
            ]
          },
          {
            heading: 'What changed',
            body: [
              'The perfumers’ process dropped from about five minutes to three, with less repeated physical movement.'
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

  function imgTag(src, alt, pos, fit) {
    return '<img class="cover-img' + (fit ? ' contain' : '') + '" src="' + src + '" alt="' + alt + '"' +
      (pos ? ' style="object-position:' + pos + '"' : '') + ' onerror="this.remove()">';
  }

  /* Cover for a project card. Uses the project's image when it has one,
     otherwise the drawn artwork. natural keeps a wide banner at its own shape. */
  function coverOf(p, animate, natural) {
    const art = strata(p.slug, S.palettes[p.palette], { animate: !!animate });
    if (!p.image) { return '<div class="cover">' + art + '</div>'; }
    const ratio = natural && p.imageRatio ? ' style="aspect-ratio:' + p.imageRatio + '"' : '';
    return '<div class="cover"' + ratio + '>' + art + imgTag(p.image, '', p.imagePos, p.imageFit === 'contain') + '</div>';
  }

  function caseCover(p) {
    const art = strata(p.slug, S.palettes[p.palette], { animate: false });
    if (!p.image) { return '<div class="cover">' + art + '</div>'; }
    return '<div class="cover" style="aspect-ratio:' + (p.imageRatio || '21 / 9') + '">' + art +
      '<img class="cover-img' + (p.imageFit === 'contain' ? ' contain' : '') + '" src="' + p.image + '" alt="' + p.imageAlt + '" onerror="this.remove()"></div>';
  }

  function tagsOf(p) { return p.tags.join(', '); }

  function pdfUrl() { return encodeURI(S.recommendation.pdf); }

  function homeView() {
    const first = projects[0];
    const rest = projects.slice(1);
    const R = S.recommendation;
    return '' +
      '<section class="hero" aria-labelledby="page-title">' +
        '<div>' +
          '<h1 id="page-title">' + S.tagline + '</h1>' +
          '<p class="lede">' + S.intro + '</p>' +
          '<div class="actions">' +
            '<a class="btn" href="#/now">See what I am working on</a>' +
            '<a class="btn ghost" href="#/recommendation">Read my UN recommendation</a>' +
          '</div>' +
        '</div>' +
        '<div class="arch">' + strata('arch-' + S.name, S.palettes.moss, { w: 600, h: 800 }) +
          (S.photo ? imgTag(S.photo, S.photoAlt, '47% 0') : '') + '</div>' +
      '</section>' +

      '<section class="work" aria-labelledby="now-h">' +
        '<h2 id="now-h">' + S.now.title + '</h2>' +
        '<ul class="nowgrid">' +
          S.now.items.map(function (v) {
            return '<li><article class="card nowcard">' +
              '<div class="cover" style="aspect-ratio:16 / 7">' + strata('now-' + v.slug, S.palettes[v.palette], {}) +
                (v.image ? imgTag(v.image, '', v.imagePos) : '') + '</div>' +
              '<h3><a class="stretch" href="#/now">' + v.name + '</a></h3>' +
              '<p class="vmeta">' + v.role + ', ' + v.status + '</p>' +
              '<p class="blurb">' + v.blurb + '</p>' +
            '</article></li>';
          }).join('') +
        '</ul>' +
      '</section>' +

      '<section class="recband" aria-labelledby="rec-h">' +
        '<div>' +
          '<h2 id="rec-h">Recommended by the United Nations Development Programme</h2>' +
          '<blockquote><p>' + R.quote + '</p></blockquote>' +
          '<p class="cite">' + R.from + ', ' + R.title + '</p>' +
          '<div class="actions">' +
            '<a class="btn light" href="#/recommendation">Read the recommendation</a>' +
            '<a class="btn ghost-light" href="' + pdfUrl() + '" target="_blank" rel="noopener">Open the letter as a PDF</a>' +
          '</div>' +
        '</div>' +
        '<a class="letter-thumb" href="#/recommendation" aria-label="Read the recommendation letter">' +
          '<img src="' + R.preview + '" alt="" width="910" height="1286">' +
        '</a>' +
      '</section>' +

      '<section class="work" aria-labelledby="work-h">' +
        '<h2 id="work-h">Selected work</h2>' +
        '<article class="card featured">' +
          coverOf(first, false, true) +
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
      ['Team', p.team],
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
              (j.sector ? '<p class="sector">' + j.sector + '</p>' : '') +
              '<p>' + j.summary + '</p>' +
              (j.points.length ? '<ul class="points">' + j.points.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul>' : '') +
              (j.links && j.links.length ? '<p class="inline-link">' + j.links.map(function (l) { return '<a href="' + l.href + '">' + l.label + '</a>'; }).join('') + '</p>' : '') +
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
        '<p class="phone-line"><a href="tel:' + c.phone.href + '">' + c.phone.display + '</a></p>' +
        '<ul class="contact-links">' +
          c.links.map(function (l) { return '<li><a href="' + l.url + '" target="_blank" rel="noopener">' + l.label + '</a></li>'; }).join('') +
        '</ul>' +
      '</section>' + footer();
  }

  function nowView() {
    const N = S.now;
    return '' +
      '<section class="page nowpage">' +
        '<h1>' + N.title + '</h1>' +
        '<p class="updated">Last updated ' + N.updated + '</p>' +
        '<p class="deck">' + N.intro + '</p>' +
        N.items.map(function (v) {
          return '<article class="venture" id="' + v.slug + '" style="--gc:' + v.tone + '">' +
            '<div class="cover" style="aspect-ratio:21 / 9">' + strata('now-' + v.slug, S.palettes[v.palette], {}) +
              (v.image ? imgTag(v.image, v.imageAlt, v.imagePos) : '') + '</div>' +
            '<header class="vhead"><h2>' + v.name + '</h2>' +
              '<p class="vmeta">' + v.role + (v.place ? ', ' + v.place : '') + ', ' + v.status + '</p></header>' +
            '<div class="vgrid">' +
              '<div class="vabout">' +
                '<p class="vsummary">' + v.summary + '</p>' +
                '<h3>My roles</h3>' +
                '<ul class="chips">' + v.roles.map(function (r) { return '<li>' + r + '</li>'; }).join('') + '</ul>' +
                (v.link ? '<div class="actions"><a class="btn ghost" href="' + v.link.url + '" target="_blank" rel="noopener">' + v.link.label + '</a></div>' : '') +
              '</div>' +
              '<div class="vnow"><h3>Right now</h3><ul class="points">' +
                v.current.map(function (c) { return '<li><strong>' + c[0] + '.</strong> ' + c[1] + '</li>'; }).join('') +
              '</ul></div>' +
            '</div>' +
          '</article>';
        }).join('') +
      '</section>' + footer();
  }

  function sportView() {
    const P = S.sport;
    return '' +
      '<section class="page sportpage">' +
        '<h1>' + P.title + '</h1>' +
        '<p class="deck">' + P.intro + '</p>' +
        '<figure class="shot hero-shot"><div class="shotbox" style="aspect-ratio:16 / 8"><img src="' + P.hero.image + '" alt="' + P.hero.alt + '" style="object-position:' + P.hero.pos + '" onerror="this.remove()"></div>' +
          '<figcaption class="caption">' + P.hero.caption + '</figcaption></figure>' +
        '<h2 class="subhead">What high performance taught me</h2>' +
        '<p class="lead">' + P.lead + '</p>' +
        '<div class="pillars">' +
          P.pillars.map(function (p) {
            return '<article class="pillar"><h3>' + p.title + '</h3><p>' + p.body + '</p>' +
              '<p class="atwork"><span>At work</span>' + p.atWork + '</p></article>';
          }).join('') +
        '</div>' +
        '<div class="split prsplit">' +
          '<div class="prose"><h2 class="subhead" style="margin-top:0">' + P.pr.title + '</h2>' +
            P.pr.paras.map(function (t) { return '<p>' + t + '</p>'; }).join('') + '</div>' +
          '<figure class="shot"><div class="shotbox" style="aspect-ratio:3 / 4"><img src="' + P.pr.image + '" alt="' + P.pr.alt + '" style="object-position:50% 62%" onerror="this.remove()"></div>' +
            '<figcaption class="caption">' + P.pr.caption + '</figcaption></figure>' +
        '</div>' +
        '<h2 class="subhead">Representing Singapore</h2>' +
        '<p class="sport-team">' + P.team + '</p>' +
        '<ol class="timeline" style="list-style:none;padding:0">' +
          P.games.map(function (g) {
            return '<li class="job">' +
              '<p class="when" style="margin:0">' + g.year + '</p>' +
              '<div><h3 class="gname">' + g.name + '</h3><p class="result"><span class="medal ' + g.kind + '">' + g.result + '</span></p></div>' +
              '</li>';
          }).join('') +
        '</ol>' +
        '<figure class="shot action-shot"><div class="shotbox" style="aspect-ratio:830 / 468"><img src="' + P.action.image + '" alt="' + P.action.alt + '" onerror="this.remove()"></div>' +
          '<figcaption class="caption">' + P.action.caption + '</figcaption></figure>' +
        '<h2 class="subhead">Beyond the pool</h2>' +
        '<div class="cover" style="aspect-ratio:21 / 9;margin-top:1.25rem;border-radius:4px">' + strata('sport-cover', S.palettes.river, {}) + imgTag(P.image, P.imageAlt, P.imagePos) + '</div>' +
        '<ul class="points sportpoints">' +
          P.beyond.map(function (b) { return '<li><strong>' + b[0] + '.</strong> ' + b[1] + '</li>'; }).join('') +
        '</ul>' +
        '<div class="actions"><a class="btn ghost" href="#/now">See Aegir Waterpolo</a></div>' +
      '</section>' + footer();
  }

  function recView() {
    const R = S.recommendation;
    return '' +
      '<section class="page recpage">' +
        '<h1>Recommendation from the United Nations</h1>' +
        '<p class="deck">' + R.about + '</p>' +
        '<div class="recgrid">' +
          '<div class="recmain">' +
            '<blockquote class="bigquote"><p>' + R.quote + '</p></blockquote>' +
            '<p class="cite"><strong>' + R.from + '</strong><br>' + R.title + '<br>' + R.org + ', ' + R.place + '</p>' +
            '<div class="prose"><p>' + R.summary + '</p></div>' +
            '<blockquote class="smallquote"><p>' + R.quote2 + '</p></blockquote>' +
            '<div class="actions"><a class="btn" href="' + pdfUrl() + '" target="_blank" rel="noopener">Open the full letter (PDF)</a>' +
            '<a class="btn ghost" href="#/work/satellite-service-inventory">See the project it describes</a></div>' +
          '</div>' +
          '<div class="recletter">' +
            '<a href="' + pdfUrl() + '" target="_blank" rel="noopener">' +
              '<img src="' + R.preview + '" alt="First page of the recommendation letter from the United Nations Development Programme" width="910" height="1286">' +
            '</a>' +
            '<p class="caption">Select the letter to open the full PDF.</p>' +
          '</div>' +
        '</div>' +
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
    { key: 'now', label: 'Working on now', href: '#/now' },
    { key: 'about', label: 'About', href: '#/about' },
    { key: 'experience', label: 'Experience', href: '#/experience' },
    { key: 'sport', label: 'Sports', href: '#/sport' },
    { key: 'recommendation', label: 'UN recommendation', href: '#/recommendation' },
    { key: 'contact', label: 'Contact', href: '#/contact' }
  ];

  function sidebarHTML() {
    return '' +
      '<a class="brand" href="#/" aria-label="' + S.name + ', home">' +
        '<span class="mark">' + strata('mark-' + S.name, S.palettes.moss, { w: 120, h: 120 }) +
          (S.avatar ? '<img src="' + S.avatar + '" alt="" width="260" height="260" onerror="this.remove()">' : '') + '</span>' +
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
        '<li><a href="tel:' + S.contact.phone.href + '">Phone</a></li>' +
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
    } else if (page === 'now') {
      html = nowView(); title = S.now.title + ' | ' + S.name; key = 'now';
    } else if (page === 'recommendation') {
      html = recView(); title = 'UN recommendation | ' + S.name; key = 'recommendation';
    } else if (page === 'about') {
      html = aboutView(); title = 'About | ' + S.name; key = 'about';
    } else if (page === 'experience') {
      html = experienceView(); title = 'Experience | ' + S.name; key = 'experience';
    } else if (page === 'sport') {
      html = sportView(); title = S.sport.title + ' | ' + S.name; key = 'sport';
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
