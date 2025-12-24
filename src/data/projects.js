// src/data/projects.js
export const projects = [
  {
    slug: 'tradiherb',
    title: 'TradiHerb',
    thumb: '/images/tradiherb/01.png',

    tagline:
      'AI-powered knowledge management system for Vietnamese Traditional Medicine with semantic search (RAG).',
    overview:
      'A graduation thesis project that transforms structured traditional medicine knowledge into a searchable knowledge base and supports natural-language Q&A with source grounding.',
    accent: 'sky',
    featured: true,

    timeline: '2025',
    role: 'Frontend / Full-stack (AI-integrated) Developer',
    tech: ['React', 'JavaScript', 'Express', 'MySQL', 'RAG', 'Vector DB'],

    metrics: [
      { label: 'Scope', value: 'Graduation Thesis' },
      { label: 'Focus', value: 'Semantic Search (RAG)' },
    ],

    links: [
      { label: 'Case Study', url: 'https://example.com' },
      { label: 'GitHub', url: 'https://github.com/' },
    ],

    problem: [
      'Vietnamese Traditional Medicine knowledge is fragmented across books, PDFs, and scattered websites, making it hard to search and cross-reference.',
      'Existing systems mainly provide keyword search and static articles, not symptom-based or natural-language queries.',
      'General-purpose AI can hallucinate in niche domains without grounded sources, which is risky for health-related information.',
    ],

    solution: [
      'Built a hybrid Knowledge Management System that combines structured knowledge (DB) with AI-powered semantic search using Retrieval-Augmented Generation (RAG).',
      'Implemented a pipeline to transform structured data into a vectorized knowledge base for accurate semantic retrieval.',
      'Designed UI flows for browsing domain entities (medicines, prescriptions, diseases, articles) and AI Q&A with citations/grounding.',
    ],

    contributions: [
      'Designed core data modeling and structured content organization for traditional medicine entities and relationships.',
      'Implemented frontend pages for browsing and detail views with clean UI hierarchy, responsive layouts, and reusable components.',
      'Integrated API flows and handled loading/empty/error states for a smooth UX.',
      'Prepared the semantic search concept flow: structured → chunks → embeddings → vector index → grounded answer.',
      'Focused on traceability: supporting the idea that AI answers should be backed by authoritative sources.',
    ],

    architecture: [
      'Frontend: ReactJS (SPA) with reusable components and responsive-first UI.',
      'Backend: NestJS modular architecture with Prisma ORM.',
      'Database: MySQL for structured knowledge (medicine/prescription/disease/article) + vector store for embeddings.',
      'AI layer: RAG pipeline (retrieval + grounded generation) for natural-language Q&A.',
    ],

    screenshots: [
      { title: 'Home / Search UI', src: '/images/tradiherb/01.png' },
      { title: 'Medicine Detail', src: '/images/tradiherb/02.png' },
      { title: 'Articles', src: '/images/tradiherb/03.png' },
      { title: 'Admin / Content Management', src: '/images/tradiherb/04.png' },
      { title: 'AI Q&A', src: '/images/tradiherb/05.png' },
      { title: 'Profile Page', src: '/images/tradiherb/06.png' },
    ],

    next: [
      'Add stronger source citations and confidence indicators to reduce user risk.',
      'Expand dataset coverage and improve Vietnamese domain embeddings.',
      'Improve hybrid search (keyword + vector) for better precision on medical terms.',
      'Add evaluation metrics (retrieval quality, answer faithfulness) and benchmark reports.',
    ],
  },

  {
    slug: 'events-hub',
    title: 'Event Hub',
    thumb: '/images/events-hub/01.png',
    tagline:
      'Internal event management platform built as an internship training project using a real production stack.',
    overview:
      "A secure internal tool for organizing, discovering, and managing company-wide social events (workshops, team building, happy hours). Designed as a 'technology sandbox' to mirror the company’s real-world stack without touching sensitive AdTech systems.",
    accent: 'cyan',
    featured: true,

    timeline: 'Internship Project',
    role: 'Full-stack Developer (Intern)',
    tech: [
      'React',
      'TypeScript',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'JWT',
      'REST API',
    ],

    metrics: [
      { label: 'Scope', value: 'Internship Project' },
      { label: 'Focus', value: 'Auth + CRUD + Dashboard' },
    ],

    links: [
      { label: 'GitHub', url: 'https://github.com/' },
      { label: 'Demo', url: 'https://example.com' },
    ],

    problem: [
      'Internal social events were handled manually via chats/spreadsheets and lacked a centralized platform.',
      'Employees had no consistent way to discover events, track participation, or manage hosted events.',
      'The company needed a safe training project that mimicked production architecture and security standards.',
    ],

    solution: [
      'Built a full-stack internal web platform for browsing events and managing attendance/hosting.',
      'Implemented secure authentication and authorization with JWT and backend guards.',
      'Designed a scalable codebase with a standard 3-tier architecture and modular NestJS backend.',
    ],

    contributions: [
      'Designed database schema and relationships (User – Event – Attendee) using Prisma.',
      'Built the entire React SPA with reusable components (forms, modals, layouts) and clean UI structure.',
      'Implemented JWT auth flows (login/register), validation, and protected routes/APIs.',
      'Developed event dashboard with filters (All / I’m going / I’m hosting) and calendar-based filtering.',
      'Built event CRUD with DTO validation on backend and React Hook Form on frontend.',
      'Structured event detail page into maintainable modules (header/info/chat) for clean architecture.',
    ],

    architecture: [
      'Frontend: ReactJS + TypeScript with feature-based folder structure and customized Axios instance.',
      'Backend: NestJS with strict modules (auth, users, events), DTO validation, guards & decorators.',
      'Database: PostgreSQL managed via Prisma ORM + migrations.',
      'API: RESTful endpoints for auth, users, events, and attendance flows.',
    ],

    screenshots: [
      { title: 'Dashboard + Filters', src: '/images/events-hub/01.png' },
      { title: 'Event Detail Page', src: '/images/events-hub/02.png' },
      { title: 'Create / Edit Event Form', src: '/images/events-hub/03.png' },
      { title: 'Profile Page', src: '/images/events-hub/04.png' },
    ],

    next: [
      'Add real-time updates (WebSockets) for attendance and event activity.',
      'Improve role/permission granularity for internal teams.',
      'Add analytics dashboard for engagement and participation trends.',
      'Enhance UX polish: skeleton loaders, better empty states, and micro-interactions.',
    ],
  },

  {
    slug: 'love-gift',
    title: 'Love Gift',
    thumb: '/images/love-gift/01.png',
    tagline:
      'A matchmaking + wishlist sharing platform with task-based rewards to gamify gift exchanges.',
    overview:
      'A full-stack web app where users can match with partners, share/sync wishlists, and complete tasks to earn points and redeem gifts—designed for a fun, interactive relationship experience.',
    accent: 'blue',
    featured: false,

    timeline: 'Personal Project',
    role: 'Full-stack Developer',
    tech: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],

    metrics: [
      { label: 'Scope', value: 'Personal Project' },
      { label: 'Focus', value: 'Auth + Wishlist + Rewards' },
    ],

    links: [
      { label: 'GitHub', url: 'https://github.com/' },
      { label: 'Demo', url: 'https://example.com' },
    ],

    problem: [
      'Couples often struggle to coordinate gift ideas and surprises in a structured way.',
      'Typical wishlist apps lack interaction, motivation, and shared progress between partners.',
      'Most solutions focus on shopping flows rather than relationship engagement.',
    ],

    solution: [
      'Built a matchmaking and wishlist-sharing platform with partner synchronization.',
      'Added a task & reward system so users can earn points and redeem gifts.',
      'Implemented secure authentication for real user sessions and account recovery.',
    ],

    contributions: [
      'Implemented JWT-based authentication for login, password recovery, and session handling.',
      'Built wishlist CRUD and syncing logic between partners.',
      'Designed a task & rewards points system to gamify the gifting experience.',
      'Developed scalable REST APIs using Node.js + Express.js.',
      'Built an interactive React UI with clean flows and user-friendly states.',
    ],

    architecture: [
      'Frontend: ReactJS with component-driven UI and practical routing.',
      'Backend: Node.js + Express.js REST APIs.',
      'Database: MongoDB for flexible modeling (users, wishlists, tasks, rewards).',
      'Auth: JWT-based sessions and protected endpoints.',
    ],

    screenshots: [
      // Thêm ảnh thật sau: put ảnh vào public/images/love-gift/
      { title: 'Onboarding / Match', src: '/images/love-gift/01.png' },
      { title: 'Wishlist Sharing', src: '/images/love-gift/02.png' },
      { title: 'Tasks & Rewards', src: '/images/love-gift/03.png' },
      { title: 'Profile / Settings', src: '/images/love-gift/04.png' },
    ],

    next: [
      'Add real-time notifications for wishlist updates and task completion.',
      'Improve UI micro-interactions and transitions for a smoother experience.',
      'Introduce recommendation logic based on user preferences and activity.',
      'Add rate limiting and stronger security measures for production readiness.',
    ],
  },
];
