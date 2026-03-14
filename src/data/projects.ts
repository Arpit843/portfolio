import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 7,
    title: 'SmartDesk – Intelligent IT Helpdesk',
    description:
      'Full-stack IT ticketing platform with AI-driven routing, SLA prediction, and resolution assistance — zero external AI APIs.',
    fullDescription:
      'SmartDesk is a production-grade IT helpdesk built with Next.js 14 and TypeScript. It handles the complete ticket lifecycle with three role tiers (User, Agent, Admin) and a full audit trail. Its on-device intelligence layer auto-classifies tickets, routes them via a weighted scoring engine, predicts SLA breach risk, and surfaces similar historical tickets using TF-IDF-style matching — all server-side, no external AI.',
    thumbnail: '/images/smartdesk-thumb.png',
    techStack: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'Tailwind CSS', 'Zod'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com',
    type: 'fullstack',
    year: 2025,
    slug: 'smartdesk-helpdesk',
    status: 'completed',
    impact:
      'Reduces average ticket-to-assignment time by ~70% through automated routing and eliminates manual SLA monitoring.',
    features: [
      'Context-aware ticket classification — keyword scoring auto-assigns priority & category',
      'Adaptive routing engine — 40% workload, 35% expertise, 15% priority handling, 10% round-robin',
      'SLA risk prediction — time-based + complexity scoring with per-ticket recommendations',
      'Resolution helper — TF-IDF similarity against historical tickets & knowledge base',
      'Role-based access: User, Agent, Admin with middleware-enforced route protection',
      'Public & internal comments with full activity audit log',
      'Bcrypt password hashing (12 rounds), JWT sessions, Zod validation',
    ],
    challenges: [
      'Designing a scoring system that balances agent fairness with ticket urgency without external ML',
      'Keeping SLA predictions accurate across varying ticket complexity without historical ML training',
      'Making the intelligence layer fast enough to run inline on every ticket save',
      'Structuring the Prisma schema to capture routing metadata without query overhead',
    ],
    images: ['/images/smartdesk-1.png', '/images/smartdesk-2.png'],
    exampleUsage: [
      {
        scenario: 'Agent logs in and sees the dashboard',
        input: 'Email: john.agent@smartdesk.com | Password: agent123',
        output:
          'Dashboard shows open tickets ranked by SLA risk, with routing suggestions and current workload score',
        note: 'Demo accounts seeded via npm run setup',
      },
      {
        scenario: 'Auto-classification of a new ticket',
        input: "Title: 'Cannot connect to VPN' | Body: 'Critical — board meeting in 2 hours'",
        output:
          'Priority: HIGH (confidence 0.85) | Category: NETWORK | Reasons: keyword "cannot connect", urgency phrase "board meeting"',
      },
      {
        scenario: 'SLA breach prediction',
        input: 'Ticket created 18 hours ago, SLA deadline in 4 hours, agent workload: 12 open tickets',
        output:
          'Risk Score: 87/100 | Level: CRITICAL | Recommendation: Reassign to agent with fewer than 5 open tickets immediately',
      },
    ],
  },

  {
    id: 8,
    title: 'India Monitor – National Intelligence Dashboard',
    description:
      'Real-time geospatial monitoring dashboard tracking environmental, infrastructure, economic, and civic events across India.',
    fullDescription:
      'India Monitor is a React + Vite dashboard giving a unified, real-time situational view across 7 domains: Environment, Weather, Infrastructure, Economy, Public Services, News, and Health. A fully custom SVG map covers all 30 Indian states/UTs with clickable regions, live event markers, and toggleable layers. A smart geographic focus engine switches between 8 landmass modes (Himalayan, Gangetic, Coastal…) that automatically reprioritise relevant panels. Mock data is structured for direct API swap with USGS, IMD, CPCB, and NSE/BSE.',
    thumbnail: '/images/indiamonitor-thumb.png',
    techStack: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Custom SVG'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com',
    type: 'data',
    year: 2025,
    slug: 'india-monitor',
    status: 'in-progress',
    impact:
      'Aggregates 7 monitoring domains into one interface that would otherwise require switching between 10+ government portals.',
    features: [
      'Custom SVG map of all 30 states/UTs — no external map library, sub-100KB',
      '7 modular panels: Environment, Weather, Infrastructure, Economy, Services, News, Health',
      '8 geographic focus modes that reprioritise layers (Himalayan → seismic; Coastal → cyclones)',
      'Region + state selector with auto-updating regional summary blurb',
      'Toggleable geospatial layers: earthquakes, cyclones, floods, fires, transport, AQI',
      'Timeline slider — 24h / 7d / 30d historical views',
    ],
    challenges: [
      'Hand-crafting accurate SVG paths for all 30+ Indian states/UTs without a map library',
      'Building the smart focus engine so layer switching feels instant and contextually correct',
      'Designing a mock data schema generic enough that real API responses slot in without refactoring',
      'Keeping the single-page layout responsive across the panel grid, sidebar, and map canvas',
    ],
    images: ['/images/indiamonitor-1.png', '/images/indiamonitor-2.png'],
    exampleUsage: [
      {
        scenario: 'Monitoring a cyclone approaching the Odisha coast',
        input: 'Select region: East India → Enable layer: Cyclone Tracks → Focus mode: Coastal',
        output:
          'Map highlights coastal belt with cyclone path overlay; Environment panel shows storm intensity, predicted landfall time, and evacuation advisories',
      },
      {
        scenario: 'Checking air quality across North India in winter',
        input: 'Select region: North India → Enable layer: Pollution Heatmap → Panel: Services',
        output:
          'AQI heatmap over Delhi–Haryana–UP corridor; Services panel lists cities by AQI rank with health advisories',
        note: 'Swap mockData.ts → CPCB Sameer API for live data',
      },
      {
        scenario: 'Earthquake impact analysis for Himalayan region',
        input: 'Focus mode: Himalayan → Timeline: 7d → Enable layer: Earthquakes',
        output:
          'Last 7-day seismic events rendered as magnitude-scaled circles; Environment panel lists events by magnitude with depth and nearest population centre',
      },
    ],
  },

  {
    id: 9,
    title: 'Floating Notepad – Always-On-Top Desktop App',
    description:
      'Minimal frameless Electron notepad that floats above all windows with multi-tab support, auto-save, and live word count.',
    fullDescription:
      "Floating Notepad is a lightweight Electron app that stays above all other windows — ideal for quick notes without context-switching. Transparent frameless glass-blur window with multi-tab support, debounced auto-save via localStorage, font-size controls, live word/character count, dark/light theme. All state persisted as a single versioned JSON object under the key 'floating-notepad-v3'. Window pin and OS controls (minimise, close) handled via Electron IPC.",
    thumbnail: '/images/notepad-thumb.png',
    techStack: ['Electron', 'JavaScript', 'HTML', 'CSS', 'IPC'],
    demoLink: null,
    githubLink: 'https://github.com',
    type: 'desktop',
    year: 2025,
    slug: 'floating-notepad',
    status: 'completed',
    impact:
      'Eliminates context-switching for note-taking — stays visible above all open windows without needing a dedicated monitor.',
    features: [
      'Always-on-top toggle — float above all windows or release via pin button',
      'Multiple named tabs — create, close, rename with double-click; persists across restarts',
      'Debounced auto-save — writes to localStorage 800ms after last keystroke',
      'Dark/light theme with CSS custom property switching — preference remembered',
      'A+/A− font-size controls in status bar; live word and character count',
      'Full keyboard set: Ctrl+T new tab, Ctrl+W close, Ctrl+Tab next tab',
    ],
    challenges: [
      'Handling Electron IPC so renderer can toggle always-on-top without direct OS access',
      'Transparent frameless window drag without native title bar',
      'Preventing tab close from losing unsaved content via debounce flush on close',
      'Theme and font-size state round-tripping through the versioned localStorage schema',
    ],
    images: ['/images/notepad-1.png', '/images/notepad-2.png'],
    exampleUsage: [
      {
        scenario: 'Taking notes while watching a tutorial video',
        input: "Launch → Ctrl+T → rename tab 'Tutorial Notes' → pin to float over video",
        output: 'Transparent notepad floats above video; word count tracks in real time; auto-saves every 800ms',
      },
      {
        scenario: 'Managing notes across multiple projects',
        input: "Ctrl+T × 3 → rename tabs: 'Standup', 'Bug List', 'Ideas'",
        output: 'Three persistent tabs; Ctrl+Tab to switch; all content survives app restart',
        note: "State stored under key 'floating-notepad-v3' in Electron localStorage",
      },
      {
        scenario: 'Build for distribution',
        input: 'npm install --save-dev @electron-forge/cli && npx electron-forge import && npm run make',
        output: 'Produces .exe (Windows), .dmg (macOS), or .AppImage (Linux) in the out/ directory',
      },
    ],
  },

  {
    id: 6,
    title: 'Portfolio with System Provisioning',
    description:
      'Personal portfolio deployed via Ansible automation and Docker containerisation — infrastructure as code from day one.',
    fullDescription:
      'Built a personal portfolio and used it as a vehicle for learning System Provisioning and Configuration Management. Ansible playbooks provision the server, configure Nginx, and deploy a Docker container from a CI-built image. The goal was to treat the infrastructure as code — reproducible, version-controlled, and consistent across environments.',
    Image: '/images/portfolio-devops-thumb.png',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Ansible', 'Docker', 'Nginx'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com',
    type: 'devops',
    year: 2024,
    slug: 'personal-portfolio-provisioning',
    status: 'completed',
    impact: 'Single-command deployment: `ansible-playbook deploy.yml` provisions the full stack in ~3 minutes.',
    features: [
      'Ansible playbooks provision server, install Docker, configure Nginx reverse proxy',
      'Multi-stage Dockerfile for reproducible, optimised container builds',
      'Single-command deployment: ansible-playbook deploy.yml',
      'Environment-variable-driven config for port, domain, and TLS settings',
      'Responsive portfolio design showcasing skills and project cards',
    ],
    challenges: [
      'Learning Ansible idempotency patterns to make playbooks safe to re-run',
      'Configuring Docker networking so Nginx correctly proxies to the app container',
      'Managing environment consistency between local Docker Desktop and the remote VPS',
      'Writing playbooks that work across both Ubuntu 22.04 and Debian 12',
    ],
    images: ['/images/portfolio-devops-1.png'],
    exampleUsage: [
      {
        scenario: 'Fresh server provisioning',
        input: 'ansible-playbook -i inventory.ini provision.yml',
        output:
          'Server receives Docker, Nginx, and SSL cert; app container starts; site live at configured domain in ~3 minutes',
      },
    ],
  },

  {
    id: 1,
    title: 'Eco-Tracking Web Application',
    description:
      'Full-stack app helping users log, visualise, and reduce their environmental footprint with real-time location services.',
    fullDescription:
      'A comprehensive eco-tracking platform where users log daily habits — commute mode, diet choices, energy usage, waste output — and see their cumulative carbon footprint visualised over time. OpenMaps integration shows nearby eco-friendly alternatives. Clerk handles authentication with social login; Supabase provides real-time sync. A personalised recommendations engine suggests the highest-impact change a user can make each week.',
    thumbnail: '/images/ecotrack-thumb.png',
    techStack: ['React', 'TypeScript', 'Supabase', 'Clerk', 'OpenMaps', 'Tailwind CSS'],
    demoLink:
