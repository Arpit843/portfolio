import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 7,
    title: "SmartDesk – Intelligent IT Helpdesk",
    description: "Full-stack IT ticketing platform with workflow automation, SLA tracking, and rule-based ticket intelligence.",
    fullDescription: "SmartDesk is a production-grade IT helpdesk ticketing system built with Next.js, Node.js, PostgreSQL, and Prisma ORM. It handles the complete ticket lifecycle — creation, triage, assignment, resolution, and closure — with three role tiers (User, Agent, Admin) and a full audit trail for compliance. The platform's intelligence layer auto-classifies tickets, routes them via a weighted scoring engine, predicts SLA breach risk with actionable recommendations, and surfaces similar historical tickets using TF-IDF-style matching — branded on the landing page as 'AI-powered helpdesk intelligence,' though the underlying logic is rule-based rather than calling an external AI API.",
    thumbnail: "/images/smartdesk-1.png",
    techStack: ["Next.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    demoLink: "https://demo.com",
    githubLink: "https://github.com",
    type: "fullstack",
    year: 2026,
    slug: "smartdesk-helpdesk",
    status: "completed",
    impact: "Reduces average ticket-to-assignment time by ~70% through automated routing and eliminates manual SLA monitoring.",
    features: [
      "Context-aware ticket classification — keyword scoring + pattern matching auto-assigns priority & category",
      "Adaptive routing engine — 40% workload, 35% expertise, 15% priority handling, 10% round-robin weighting",
      "SLA risk prediction — time-based + complexity scoring with per-ticket recommendations",
      "Resolution helper — TF-IDF similarity against historical tickets and a knowledge base",
      "Role-based access control — User, Agent, Admin with middleware-enforced route protection",
      "Public & internal comments with full activity audit log",
      "Workflow automation for ticket assignment, escalation, and SLA tracking"
    ],
    challenges: [
      "Designing a scoring system that balances agent fairness with ticket urgency without external ML",
      "Keeping SLA predictions accurate across varying ticket complexity without historical ML training",
      "Making the intelligence layer fast enough to run inline on every ticket save",
      "Structuring the Prisma schema to capture routing metadata without query overhead"
    ],
    images: [
      "/images/smartdesk-1.png"
    ],
    exampleUsage: [
      {
        scenario: "Agent logs in and sees the dashboard",
        input: "Email: john.agent@smartdesk.com | Password: agent123",
        output: "Dashboard shows open tickets ranked by SLA risk, with routing suggestions and current workload score",
        note: "Demo accounts are seeded via `npm run setup`"
      },
      {
        scenario: "Auto-classification of a new ticket",
        input: "Title: 'Cannot connect to VPN' | Body: 'Critical — I cannot connect to the corporate VPN and have a board meeting in 2 hours'",
        output: "Priority: HIGH (confidence 0.85) | Category: NETWORK | Reasons: keyword 'cannot connect', urgency phrase 'board meeting', time-sensitive language",
      },
      {
        scenario: "SLA breach prediction",
        input: "Ticket created 18 hours ago, SLA deadline in 4 hours, assigned agent workload: 12 open tickets",
        output: "Risk Score: 87/100 | Level: CRITICAL | Recommendation: Reassign to an agent with fewer than 5 open tickets immediately"
      }
    ]
  },

  {
    id: 8,
    title: "India Monitor – National Intelligence Dashboard",
    description: "Real-time geospatial monitoring dashboard tracking environmental, infrastructure, economic, and civic events across India via an interactive SVG map.",
    fullDescription: "India Monitor is a React + Vite dashboard that provides a unified, real-time situational view of India across seven monitoring domains: Environment (earthquakes, cyclones, floods, fires), Weather, Infrastructure, Economy, Public Services, News, and Health. The core UI is a fully custom SVG map of all 30 Indian states and union territories — built without any external map library — with clickable regions, live event markers, and toggleable geospatial data layers. A smart geographic focus engine switches between 8 landmass-based analysis modes (Himalayan, Gangetic, Coastal, etc.) that automatically reprioritise relevant map layers and panels. The mock data layer is structured to be a straight drop-in swap for live APIs from USGS, IMD, CPCB, NTES, and NSE/BSE.",
    thumbnail: "/images/indiamonitor-thumb.png",
    techStack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Custom SVG"],
    demoLink: "https://indiamonitor.vercel.app",
    githubLink: "https://github.com/Arpit843/indiamonitor",
    year: 2025,
    slug: "india-monitor",
    status: "in-progress",
    impact: "Aggregates 7 monitoring domains and 8 geographic zones into a single interface that would otherwise require switching between 10+ separate government portals.",
    features: [
      "Custom SVG map of all 30 states/UTs — no external map library, sub-100KB",
      "7 modular data panels: Environment, Weather, Infrastructure, Economy, Services, News, Health",
      "8 geographic focus modes that reprioritise layers (Himalayan → seismic; Coastal → cyclones)",
      "Region + state selector with auto-updating regional summary blurb",
      "Toggleable geospatial layers: earthquakes, cyclones, floods, fires, transport, pollution, AQI",
      "Timeline slider — 24h / 7d / 30d historical views",
      "Scrolling news ticker with live IST clock (useClock hook)"
    ],
    challenges: [
      "Hand-crafting accurate SVG paths for all 30+ Indian states/UTs without a map generation library",
      "Building the smart focus engine so layer switching feels instant and contextually correct",
      "Designing a mock data schema generic enough that real API responses slot in without refactoring",
      "Keeping the single-page layout responsive across the panel grid, sidebar, and map canvas simultaneously"
    ],
    images: [
      "/images/indiamonitor-1.png",
      "/images/indiamonitor-2.png"
    ],
    exampleUsage: [
      {
        scenario: "Monitoring a cyclone approaching the Odisha coast",
        input: "Select region: East India → Enable layer: Cyclone Tracks → Focus mode: Coastal",
        output: "Map highlights coastal belt with cyclone path overlay, Right panel switches to Environment tab showing storm intensity, predicted landfall time, and evacuation advisories",
      },
      {
        scenario: "Checking air quality across North India in winter",
        input: "Select region: North India → Enable layer: Pollution Heatmap → Panel: Services",
        output: "AQI heatmap appears over Delhi, Haryana, UP corridor; Services panel lists cities by AQI rank with health advisories",
        note: "Swap mockData.ts → CPCB Sameer API for live data"
      },
      {
        scenario: "Earthquake impact analysis for Himalayan region",
        input: "Focus mode: Himalayan → Timeline: 7d → Enable layer: Earthquakes",
        output: "Last 7-day seismic events rendered as magnitude-scaled circles on the map; Environment panel lists events by magnitude with depth and nearest population centre"
      }
    ]
  },

  {
    id: 9,
    title: "Floating Notepad – Always-On-Top Desktop App",
    description: "A minimal, frameless Electron notepad that floats above all windows with multi-tab support, auto-save, dark/light themes, and live word count.",
    fullDescription: "Floating Notepad is a lightweight Electron desktop application designed to stay out of your way while always being reachable. It renders as a transparent, frameless glass-blur window pinned above all other applications — ideal for jotting quick notes without switching context. The app supports multiple named tabs (double-click to rename), debounced auto-save via localStorage, font-size controls, live word/character count, and dark/light theme toggle. All state — tabs, labels, theme, font size — is persisted as a single JSON object under a versioned localStorage key. Window pin state and OS-level controls (minimize, close) are handled via Electron IPC so the renderer never needs OS permissions directly.",
    thumbnail: "/images/notepad-thumb.png",
    techStack: ["Electron", "JavaScript", "HTML", "CSS", "IPC"],
    demoLink: null,
    githubLink: "https://github.com",
    type: "desktop",
    year: 2025,
    slug: "floating-notepad",
    status: "completed",
    impact: "Eliminates context-switching for note-taking — the app stays visible above all open windows without needing a dedicated monitor or virtual desktop.",
    features: [
      "Always-on-top toggle — float above all windows or release to normal z-order via pin button",
      "Multiple named tabs — create, close, and rename with a double-click; state persisted across restarts",
      "Debounced auto-save — writes to localStorage 800 ms after last keystroke; no manual save needed",
      "Dark/light theme toggle with CSS custom property switching — preference remembered",
      "A+/A− font-size controls in the status bar",
      "Live word and character count updated on every keystroke",
      "Full keyboard shortcut set: Ctrl+T (new tab), Ctrl+W (close tab), Ctrl+Tab (next tab)"
    ],
    challenges: [
      "Handling Electron IPC correctly so the renderer can toggle always-on-top without direct OS access",
      "Implementing transparent frameless window drag without native title bar",
      "Preventing tab close from losing unsaved content via debounce flush on close",
      "Ensuring theme and font-size state round-trips cleanly through the versioned localStorage schema"
    ],
    images: [
      "/images/notepad-1.png",
      "/images/notepad-2.png"
    ],
    exampleUsage: [
      {
        scenario: "Taking notes while watching a tutorial video",
        input: "Launch app → Ctrl+T for new tab → rename tab 'Tutorial Notes' → pin button to float over video player",
        output: "Transparent notepad floats above the video window; word count tracks in real time; notes auto-save every 800ms",
      },
      {
        scenario: "Managing notes across multiple projects",
        input: "Ctrl+T × 3 → rename tabs: 'Standup', 'Bug List', 'Ideas'",
        output: "Three persistent tabs; switching tabs with Ctrl+Tab; all content survives app restart via localStorage",
        note: "State stored under key 'floating-notepad-v3' in Electron's renderer localStorage"
      },
      {
        scenario: "Building for distribution",
        input: "npm install --save-dev @electron-forge/cli && npx electron-forge import && npm run make",
        output: "Produces .exe (Windows), .dmg (macOS), or .AppImage (Linux) installer in the out/ directory"
      }
    ]
  },

  {
    id: 6,
    title: "App Graph Builder",
    description: "A take-home assignment: an interactive graph canvas for visualizing service/app dependencies, with a status inspector and mock backend.",
    fullDescription: "App Graph Builder is a small but carefully-built UI exercise — a canvas where services or apps are rendered as nodes with health status (Healthy/Degraded/Down), connected by dependency edges. Built with ReactFlow for the canvas, the app uses Mock Service Worker (MSW) to intercept real fetch() calls so application code makes genuine HTTP requests with no mocking logic baked in — meaning swapping in a real API later requires no code changes. State is deliberately split: ReactFlow's own node state holds graph data, while Zustand is scoped strictly to UI-only state (selected node, mobile panel toggle, active tab), avoiding duplicated state between the two.",
    thumbnail: "/images/graphbuilder-thumb.png",
    techStack: ["React 18", "Vite", "TypeScript", "ReactFlow", "TanStack Query", "Zustand", "shadcn/ui", "MSW"],
    demoLink: "https://graph-builder-steel.vercel.app",
    githubLink: "https://github.com/Arpit843/graph-builder",
    type: "frontend",
    year: 2026,
    slug: "app-graph-builder",
    status: "completed",
    features: [
      "ReactFlow canvas with custom nodes — each renders a service with a Healthy/Degraded/Down status badge",
      "Node inspector panel — tabs, status badge, and synced slider/input controls per selected node",
      "MSW intercepts real fetch() calls in the browser — no mocking logic in app code, trivial to point at a real API",
      "TanStack Query v5 caching — 60s staleTime, auto-refetches when the selected app changes",
      "Zustand scoped to UI-only state (selectedAppId, selectedNodeId, panel/tab state) — no duplicated node data",
      "Responsive mobile drawer via Radix Dialog for the inspector panel on small screens"
    ],
    challenges: [
      "Deciding where graph data should live — settled on ReactFlow's own node state as the single source of truth, with Zustand strictly UI-only",
      "Using MSW so the app talks to a real-feeling API surface without writing throwaway mock-fetch logic",
      "Building a responsive inspector that becomes a slide-over drawer on mobile without duplicating its component logic"
    ],
    images: [
      "/images/graphbuilder-1.png"
    ],
    exampleUsage: [
      {
        scenario: "Selecting a degraded service node",
        input: "Click a node showing 'Degraded' status on the canvas",
        output: "Inspector panel opens with tabs showing the service's replica count slider, description, and current status badge",
      },
      {
        scenario: "Switching between apps",
        input: "Select a different app from the AppList dropdown",
        output: "TanStack Query refetches the graph for the new appId; cached result served instantly if selected within 60s",
      }
    ]
  },

  {
    id: 12,
    title: "Ubuntu System Hardening Tool",
    description: "GUI-based tool that automates CIS-benchmark-aligned Ubuntu security configuration and generates audit reports.",
    fullDescription: "Built on top of an existing Ubuntu hardening base (UbuntuShield), this tool automates CIS benchmark security configuration through a GUI rather than requiring manual shell commands. It walks through hardening checks, applies configuration changes, and generates audit reports summarizing what was changed and what still needs attention — reducing the manual effort typically required to harden a server by hand. The codebase includes a scheduler for recurring checks and a server-manager component for coordinating hardening across multiple machines.",
    thumbnail: "/images/ubuntuhardening-thumb.png",
    techStack: ["Go", "Shell", "HTML"],
    demoLink: null,
    githubLink: "https://github.com/Arpit843/Ubuntu-hardening-script",
    type: "devops",
    year: 2025,
    slug: "ubuntu-hardening-tool",
    status: "completed",
    impact: "Replaces manual, checklist-driven CIS hardening with a GUI workflow plus generated audit reports — reducing hardening time and human error across multiple servers.",
    features: [
      "GUI-driven CIS benchmark hardening checks — no need to memorize or manually run shell commands",
      "Audit report generation summarizing applied changes and outstanding gaps",
      "Scheduler component for recurring/automated hardening checks",
      "Multi-server coordination via a dedicated server-manager module",
      "History tracking of past hardening runs per machine"
    ],
    challenges: [
      "Wrapping CIS benchmark checks (typically distributed as shell scripts) in a coherent GUI workflow",
      "Designing the audit report format to be useful for both technical review and compliance documentation",
      "Coordinating hardening state across multiple servers without each one drifting independently"
    ],
    images: [],
    exampleUsage: [
      {
        scenario: "Running a hardening audit on a fresh Ubuntu server",
        input: "Launch the tool against a target server → run audit",
        output: "Audit report listing CIS-aligned checks: pass/fail status per check, with one-click remediation for failed items",
      }
    ]
  },

  {
    id: 1,
    title: "EcoTrack – Waste Management Platform",
    description: "Role-based waste-collection management platform with four dedicated portals — Admin, Manager, Agent, and Citizen — built with React, TypeScript, and Supabase.",
    fullDescription: "EcoTrack is a full-stack civic platform for coordinating municipal waste collection. Rather than a single dashboard, it splits access into four distinct, purpose-built portals: Administrators manage the entire platform, Managers oversee teams and zones, Agents run their assigned collection rounds, and Citizens report issues and track pickup status in their area. The interface is fully localized in French, reflecting its intended deployment region, and uses Supabase for authentication and real-time data sync across all four roles.",
    thumbnail: "/images/ecotrack-1.png",
    techStack: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    demoLink: "https://ecotrack-five.vercel.app",
    githubLink: "https://github.com/Arpit843/ecotrack",
    status: "completed",
    impact: "Splits one civic workflow into four role-specific portals, so each stakeholder — from city admin to the citizen reporting a missed pickup — only sees what's relevant to them.",
    features: [
      "Role selection screen — choose Administrateur, Manager, Agent, or Citoyen before authenticating",
      "Agent portal for managing collection rounds (tournées de collecte)",
      "Citizen portal for reporting issues and tracking pickup status (signalement et suivi citoyen)",
      "Manager portal for team and zone-level supervision",
      "Admin portal with full platform configuration access",
      "Supabase-backed authentication with separate login/signup flows",
      "Fully localized French-language interface throughout"
    ],
    challenges: [
      "Designing one auth flow that branches cleanly into four role-specific dashboards without duplicating logic",
      "Keeping Supabase row-level security policies correctly scoped per role",
      "Structuring shared components (forms, cards) so each portal's distinct content still feels consistent",
      "Localizing the entire UI in French without hardcoding strings ad hoc"
    ],
    images: [
      "/images/ecotrack-1.png",
      "/images/ecotrack-2.png"
    ],
    exampleUsage: [
      {
        scenario: "First-time login — role selection",
        input: "Visit the app → 'Qui êtes-vous?' (Who are you?) screen appears",
        output: "Four role cards shown: Administrateur (full platform), Manager (team/zone supervision), Agent (collection rounds), Citoyen (reporting & tracking)",
      },
      {
        scenario: "Agent logging in",
        input: "Select 'Agent' role → 'Se connecter' tab → email + password",
        output: "Redirected to the Agent dashboard showing assigned collection rounds for the day",
      }
    ]
  },

  {
    id: 5,
    title: "Dynamic Bike Showroom Website",
    description: "Interactive React + TypeScript storefront for a bike dealership with filterable listings, spec comparisons, and image galleries.",
    fullDescription: "A university Web Technologies course project that went beyond the brief. Built a fully dynamic bike showroom where all listing data lives in a typed JSON catalogue. Users can filter bikes by category (road, MTB, hybrid, electric), sort by price or specs, expand individual model pages with image carousels and full spec sheets, and use a side-by-side comparison tool for up to three models. State is managed entirely in React without any external state library.",
    thumbnail: "/images/bikeshowroom-thumb.png",
    techStack: ["React", "TypeScript", "HTML", "CSS", "React Router"],
    demoLink: "https://demo.com",
    githubLink: "https://github.com",
    type: "frontend",
    year: 2023,
    slug: "bike-showroom-website",
    status: "completed",
    features: [
      "Filterable catalogue — category, price range, brand with URL-synced query params",
      "Side-by-side spec comparison — select up to 3 models",
      "Image carousel with keyboard navigation on each model page",
      "Contact enquiry form with client-side validation",
      "Fully responsive grid layout (1 → 2 → 3 → 4 columns)"
    ],
    challenges: [
      "Syncing filter state to URL query params so links are shareable without a state management library",
      "Building a comparison table that gracefully handles mismatched spec keys across bike categories",
      "Implementing the carousel with keyboard accessibility and touch swipe support in vanilla React"
    ],
    images: [
      "/images/bikeshowroom-1.png"
    ],
    exampleUsage: [
      {
        scenario: "Comparing two electric bikes",
        input: "Filter: Electric → Select Trek Verve+ 3 and Specialized Turbo Como → Click Compare",
        output: "Side-by-side table highlighting spec differences in red; shared specs shown in grey; price delta in header"
      }
    ]
  },

  {
    id: 2,
    title: "Hearing-Impaired Rider Assistance System",
    description: "Raspberry Pi system that detects emergency sirens in real time and alerts hearing-impaired riders via vibration motors and LED displays.",
    fullDescription: "An IoT safety device built for hearing-impaired motorcyclists. A Raspberry Pi 4 runs a Python audio pipeline that samples ambient sound at 16 kHz via a USB microphone, applies a band-pass filter centred on emergency siren frequencies (700–1600 Hz), and uses a lightweight OpenCV-assisted classifier to distinguish sirens from ambient road noise. When a siren is detected with >80% confidence the system triggers a vibration motor mounted in the handlebar grip and a wide-angle LED strip on the dashboard — both with direction estimation (left/right/rear) based on a two-microphone phase-difference calculation.",
    thumbnail: "/images/rider-assist-thumb.png",
    techStack: ["Python", "Raspberry Pi 4", "GPIO", "OpenCV", "NumPy", "PyAudio"],
    demoLink: "https://demo.com",
    githubLink: "https://github.com",
    type: "hardware",
    year: 2023,
    slug: "rider-assistance-system",
    status: "completed",
    impact: "Prototype tested at 60 dB ambient road noise with 87% siren detection accuracy and <200 ms alert latency — within the safety window for evasive action.",
    features: [
      "Real-time audio sampling at 16 kHz with band-pass filter for siren frequency range",
      "Dual-microphone phase-difference algorithm estimates siren direction (left/right/rear)",
      "Vibration motor feedback via GPIO PWM — intensity scales with detection confidence",
      "Wide-angle LED strip with directional colour coding: red rear, amber side, blue front",
      "Adjustable sensitivity threshold to reduce false positives in high-noise environments",
      "Runs headless on Raspberry Pi 4 at boot via systemd service — no screen required"
    ],
    challenges: [
      "Achieving <200 ms end-to-end latency (sample → filter → classify → actuate) on the Pi's ARM core",
      "Distinguishing sirens from truck air brakes and reversing beepers that share similar frequencies",
      "Weatherproofing the enclosure and GPIO wiring for motorcycle vibration and rain exposure",
      "Calibrating vibration intensity so it is perceptible through riding gloves without being distracting"
    ],
    images: [
      "/images/rider-assist-1.png",
      "/images/rider-assist-2.png"
    ],
    exampleUsage: [
      {
        scenario: "Ambulance approaching from behind at 40 km/h",
        input: "Ambient noise: 65 dB | Siren frequency detected: 940 Hz | Phase difference: rear-right",
        output: "Rear LED strip pulses red; right handlebar vibration motor activates at 70% PWM; alert sustained for 4 s then fades",
        note: "Detection latency measured at 180 ms in field tests"
      },
      {
        scenario: "False positive suppression — truck air brake",
        input: "Sound: truck air-release burst at 1100 Hz, duration 80 ms",
        output: "Filtered out — classifier requires >300 ms sustained tone with frequency sweep pattern; no alert triggered"
      }
    ]
  },

  {
    id: 3,
    title: "Remote Patient Monitoring System",
    description: "Arduino-based vital signs monitor that transmits pulse and SpO₂ readings to a doctor-facing web portal — designed for low-resource healthcare settings.",
    fullDescription: "A low-cost remote health monitoring solution targeted at rural or under-resourced clinics. An Arduino Uno reads pulse rate and blood oxygen saturation (SpO₂) from a MAX30100 sensor module, serialises the readings as JSON at 1 Hz, and transmits them over a SIM800L GSM module to a lightweight Node.js web portal. Doctors receive real-time vitals in a browser dashboard with configurable threshold alerts — a buzzer and SMS fires when pulse or SpO₂ drops outside the safe range. All readings are stored in a SQLite database for historical review.",
    thumbnail: "/images/patient-monitor-thumb.png",
    techStack: ["Arduino Uno", "MAX30100 Sensor", "SIM800L GSM", "Node.js", "SQLite", "HTML/CSS"],
    demoLink: "https://demo.com",
    githubLink: "https://github.com",
    type: "hardware",
    year: 2022,
    slug: "patient-monitoring",
    status: "completed",
    impact: "Enables a single doctor to remotely monitor vitals of patients in satellite clinics up to 50 km away without a smartphone or internet connection on the patient side.",
    features: [
      "MAX30100 sensor reads pulse rate (BPM) and SpO₂ (%) at 1 Hz",
      "SIM800L GSM module transmits JSON readings over GPRS — no Wi-Fi required",
      "Node.js web portal renders live vitals with Chart.js time-series graph",
      "Configurable alert thresholds — SMS + on-device buzzer when outside safe range",
      "SQLite storage for 30-day historical readings per patient",
      "Battery-backed power supply with ~8 h operation on a 5000 mAh powerbank"
    ],
    challenges: [
      "Minimising I²C read latency on the Arduino to maintain consistent 1 Hz sampling",
      "Handling intermittent GPRS connectivity gracefully with a local buffer and retry queue",
      "Calibrating the MAX30100 for accurate SpO₂ at different skin tones and ambient light levels",
      "Designing the enclosure so the sensor maintains stable contact without patient discomfort"
    ],
    images: [
      "/images/patient-monitor-1.png"
    ],
    exampleUsage: [
      {
        scenario: "Normal monitoring session",
        input: "Patient resting | Pulse: 72 BPM | SpO₂: 98%",
        output: "Web portal shows green status; readings logged to SQLite every second; no alerts triggered"
      },
      {
        scenario: "Low SpO₂ alert",
        input: "SpO₂ drops to 91% for 10 consecutive seconds",
        output: "On-device buzzer activates; SMS sent to registered doctor number: 'ALERT: Patient ID-03 SpO₂ 91% — check immediately'; portal card turns red"
      }
    ]
  },

  {
    id: 4,
    title: "Bank Management System",
    description: "Python + MySQL CBSE Class 12 project implementing core banking operations — accounts, transactions, balance enquiry, and fund transfer via DBMS terminal.",
    fullDescription: "A functional banking back-end developed as a CBSE Class 12 Computer Science project. Implements the full suite of retail banking operations — account creation and KYC fields, cash deposits and withdrawals with balance checks, inter-account fund transfer with transaction rollback on failure, mini-statement generation for last 10 transactions, and account closure. All operations use parameterised SQL queries through the MySQL connector for Python, demonstrating normalised schema design (Accounts, Customers, Transactions tables) and ACID transaction handling.",
    thumbnail: "/images/bankmanager-thumb.png",
    techStack: ["Python 3", "MySQL", "mysql-connector-python"],
    demoLink: null,
    githubLink: "https://github.com",
    type: "backend",
    year: 2021,
    slug: "bank-management-system",
    status: "completed",
    features: [
      "Account creation with customer KYC fields and auto-generated account number",
      "Deposit, withdrawal, and balance inquiry with real-time balance update",
      "Inter-account fund transfer with MySQL transaction rollback on insufficient funds",
      "Mini-statement: last 10 transactions per account with timestamp and running balance",
      "Parameterised queries throughout — no raw string concatenation, no SQL injection risk",
      "Normalised schema: Customers (1) → Accounts (M) → Transactions (M)"
    ],
    challenges: [
      "Implementing atomic fund transfer using BEGIN/COMMIT/ROLLBACK so a crash mid-transfer leaves no inconsistency",
      "Designing the normalised schema to satisfy 3NF while keeping queries simple for a school project context",
      "Writing parameterised queries after initially using f-string interpolation (security lesson learned)"
    ],
    images: [
      "/images/bankmanager-1.png"
    ],
    exampleUsage: [
      {
        scenario: "Fund transfer between two accounts",
        input: "Source: ACC-1042 | Destination: ACC-2017 | Amount: ₹5,000",
        output: "BEGIN TRANSACTION → debit ACC-1042 → credit ACC-2017 → COMMIT | Both balances update atomically; transaction row inserted with timestamp"
      },
      {
        scenario: "Insufficient funds guard",
        input: "ACC-1042 balance: ₹3,200 | Transfer request: ₹5,000",
        output: "ROLLBACK triggered; error: 'Insufficient balance — transaction cancelled'; both account balances unchanged"
      }
    ]
  }
];
