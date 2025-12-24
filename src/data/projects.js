export const projects = [
  {
    slug: 'tradiherb',
    title: 'TradiHerb',
    tagline: 'Knowledge Management Web Platform with intelligent search UX',
    tech: ['React', 'MUI', 'NestJS', 'Prisma', 'MySQL'],
    featured: true,
    accent: 'sky',
    links: [
      { label: 'GitHub', url: 'https://github.com/' },
      { label: 'Live Demo', url: 'https://example.com' },
    ],

    // Case study
    role: 'Frontend / Full-stack Developer',
    timeline: '2025',
    overview:
      'A knowledge management web platform for Vietnamese Traditional Medicine, designed for structured browsing and reliable referencing with a clean, responsive UI and role-based access.',
    problem: [
      'Existing resources are fragmented and hard to search effectively.',
      'Users need quick lookup with consistent UI patterns and safe references.',
      'Admin workflows require structured management and clear permissions.',
    ],
    solution: [
      'Designed responsive pages for browsing & detail views (Medicine/Prescription/Disease/Article).',
      'Built a consistent UI system (cards, chips, actions, empty/loading states).',
      'Integrated role-based UI flows for authenticated users and admins.',
    ],
    contributions: [
      'Implemented reusable React components and layout system for consistent UX.',
      'Built list/detail pages with pagination, filters, and responsive actions.',
      'Integrated API data flows and improved UI states (loading/error/empty).',
    ],
    metrics: [
      { label: 'Pages', value: '10+ screens' },
      { label: 'Focus', value: 'Responsive UX' },
      { label: 'Data', value: 'Real DB + APIs' },
    ],
    architecture: [
      'Client: React (UI components, routing, responsive layout)',
      'Server: NestJS + Prisma (REST APIs, RBAC/JWT)',
      'Database: MySQL (structured knowledge tables)',
    ],
    screenshots: [
      // dùng ảnh thật sau: bỏ vào /public/images/... rồi thay đường dẫn ở đây
      { title: 'Search & Browse', src: '/images/tradiherb-1.png' },
      { title: 'Detail Page', src: '/images/tradiherb-2.png' },
      { title: 'Admin Management', src: '/images/tradiherb-3.png' },
    ],
    next: [
      'Add case study results with user feedback and usability testing.',
      'Improve search ranking + highlight matched fields for faster scanning.',
      'Add caching and skeleton-loading for smoother perceived performance.',
    ],
  },

  {
    slug: 'digital-genealogy',
    title: 'Digital Genealogy Platform',
    tagline: 'Interactive family tree UI with complex state synchronization',
    tech: ['React', 'React Flow', 'API Integration'],
    featured: false,
    accent: 'cyan',

    role: 'Frontend Developer',
    timeline: '2025',
    overview:
      'An interactive genealogy platform featuring graph-based visualization, profile modals, and relationship management with a strong focus on UX and state consistency.',
    problem: [
      'Family graphs are complex and hard to navigate with static UI.',
      'Editing flows require clear modals and immediate visual updates.',
      'Data sync between profiles and graph nodes can easily break.',
    ],
    solution: [
      'Built interactive graph UI with node types and contextual actions.',
      'Designed modal-based editing and detail views.',
      'Ensured stable state updates and consistent rendering patterns.',
    ],
    contributions: [
      'Implemented reusable modal components and detail UI patterns.',
      'Worked on state synchronization and safe rendering guards.',
      'Improved responsiveness and information density for small screens.',
    ],
    metrics: [
      { label: 'UI', value: 'Graph-based' },
      { label: 'Focus', value: 'State sync' },
      { label: 'UX', value: 'Modal flows' },
    ],
    architecture: [
      'Client: React + React Flow (graph visualization)',
      'API: REST integration (CRUD + sync)',
      'Data: Node relationships + profile details',
    ],
    screenshots: [
      { title: 'Family Tree View', src: '/images/genealogy-1.png' },
      { title: 'Person Detail Modal', src: '/images/genealogy-2.png' },
    ],
    next: [
      'Add guided navigation for large trees (search node + focus).',
      'Add audit logs for changes and better conflict handling.',
    ],
  },

  {
    slug: 'sky-ui-dashboard',
    title: 'Sky UI Dashboard',
    tagline: 'Polished responsive dashboard UI (frontend-focused)',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    featured: false,
    accent: 'blue',

    role: 'Frontend Developer',
    timeline: '2025',
    overview:
      'A UI-focused dashboard project showcasing clean layout, spacing, and responsive patterns with subtle motion and reusable components.',
    problem: [
      'Dashboard UIs often become cluttered and inconsistent across screens.',
      'Components need to be reusable and visually coherent.',
    ],
    solution: [
      'Designed a consistent component set for cards, tables, and actions.',
      'Applied mobile-first responsive layout and visual hierarchy.',
    ],
    contributions: [
      'Built reusable UI components and layout utilities.',
      'Implemented hover/motion patterns and clean spacing rules.',
    ],
    metrics: [
      { label: 'Focus', value: 'UI polish' },
      { label: 'Responsive', value: 'Mobile-first' },
      { label: 'Style', value: 'Pastel system' },
    ],
    architecture: [
      'Client: React (components + motion)',
      'Styling: Tailwind + design tokens',
    ],
    screenshots: [
      { title: 'Dashboard Overview', src: '/images/dashboard-1.png' },
    ],
    next: [
      'Add more real data states (loading/empty/error) and table variants.',
    ],
  },
];
