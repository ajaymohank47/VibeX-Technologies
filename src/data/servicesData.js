import {
    Monitor, Smartphone, Code, Server, Database, Zap,
    PenTool, Lightbulb, Bug, Rocket, HardDrive, RefreshCw,
    Wrench, ClipboardList, Calendar, FileText, FileSpreadsheet,
    Megaphone, Headset
} from 'lucide-react';

export const servicesData = {
    'website-development': {
        title: 'Website Development',
        category: 'Development & Engineering',
        icon: Monitor,
        color: 'from-corporate-navy to-corporate-navy-light',
        shortDesc: 'Custom, responsive, and high-performance websites tailored to your business needs.',
        longDesc: 'Our Website Development service focuses on building bespoke, fast-loading, and responsive web solutions. We don\'t rely on generic page builders or heavy templates. Instead, we architect modern web experiences using frameworks like React, Next.js, and Vite. This ensures your website loads under 2 seconds, ranks optimally on search engines, and converts visitors into customers. Whether you need a corporate portal, a landing page optimized for marketing campaigns, or a highly functional business platform, our developers ensure clean, secure, and future-proof code.',
        features: [
            'Custom Design & Layout Integration',
            'Core Web Vitals Optimization (100% PageSpeed target)',
            'SEO-Ready Architecture & Semantic HTML structure',
            'Responsive Mobile-First Implementations',
            'Headless CMS Integrations (Sanity, Strapi, Contentful)'
        ],
        techStack: ['React', 'Next.js', 'TailwindCSS', 'Vite', 'Node.js', 'Framer Motion'],
        useCases: [
            'Corporate Branding & Landing Pages',
            'Business Directory Platforms',
            'Interactive Product Catalogs',
            'Creative Agency Portfolios'
        ]
    },
    'mobile-app-development': {
        title: 'Mobile App Development',
        category: 'Development & Engineering',
        icon: Smartphone,
        color: 'from-corporate-navy-dark to-corporate-navy',
        shortDesc: 'Native and cross-platform mobile applications for iOS and Android devices.',
        longDesc: 'In today\'s mobile-first world, we deliver high-performance native and cross-platform mobile apps that users love. Utilizing React Native and Flutter, we target both iOS and Android platforms from a single codebase, maximizing efficiency and consistency. For performance-critical requirements, we write native modules in Java, Swift, or Kotlin. From secure offline caching and biometric login to background processing and push notifications, we build complete mobile platforms ready for deployment to the Apple App Store and Google Play Store.',
        features: [
            'Cross-platform React Native & Flutter builds',
            'Native module bridging (Swift, Kotlin, Java)',
            'Offline-first storage & sync architectures',
            'Biometric Auth & Secure Keychain integration',
            'App Store & Play Store publishing support'
        ],
        techStack: ['React Native', 'Flutter', 'Java', 'Swift', 'Supabase', 'Firebase FCM'],
        useCases: [
            'EdTech Student ERPs (e.g. Campus Buddy)',
            'On-demand Delivery & Logistics Apps',
            'Social Media & Communication Portals',
            'Health & Fitness Trackers'
        ]
    },
    'frontend-development': {
        title: 'Frontend Development',
        category: 'Development & Engineering',
        icon: Code,
        color: 'from-corporate-navy to-accent-teal',
        shortDesc: 'Interactive and dynamic user interfaces built with modern web frameworks.',
        longDesc: 'We craft highly interactive, fluid, and robust user interfaces that elevate user experiences. We specialize in building Single Page Applications (SPAs) and Server-Side Rendered (SSR) sites using React and Next.js. We leverage state management libraries (Redux Toolkit, Zustand) and combine them with CSS modules, PostCSS, or TailwindCSS for clean, performant styling. By implementing micro-interactions and smooth transitions with Framer Motion, we ensure your web interface feels premium and responds instantly to user input.',
        features: [
            'Component-driven architecture using React & Next.js',
            'Fluid animations & micro-interactions with Framer Motion',
            'Advanced state management (Zustand, Redux, Context API)',
            'Dynamic asset optimization & tree-shaking',
            'Cross-browser compatibilities & accessibility standards'
        ],
        techStack: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion', 'Zustand', 'TypeScript'],
        useCases: [
            'Enterprise SaaS User Dashboards',
            'Complex Data Visualizations & Analytics Tables',
            'Interactive Interactive Maps & Interfaces',
            'Rich Media Portfolio Systems'
        ]
    },
    'backend-development': {
        title: 'Backend Development',
        category: 'Development & Engineering',
        icon: Server,
        color: 'from-corporate-navy-dark to-[#002244]',
        shortDesc: 'Robust, scalable, and secure server-side architectures and APIs.',
        longDesc: 'A powerful frontend requires an equally robust backend. We build high-throughput, secure, and scalable server-side systems that handle your application\'s business logic. Specializing in Node.js (Express, NestJS), Python (Django, FastAPI), and Java, we build RESTful and GraphQL APIs that interface with relational and non-relational databases. We prioritize security with role-based access control, cryptographic password hashing, JWT authentication, and thorough input validation to block SQL injection and XSS attacks.',
        features: [
            'RESTful, GraphQL, & WebSockets API designs',
            'Robust authentication (JWT, OAuth2, Biometrics)',
            'Distributed caching and session management (Redis)',
            'Secure input validation & sanitization middleware',
            'Microservices and Serverless architectures'
        ],
        techStack: ['Node.js', 'Express', 'NestJS', 'Python FastAPI', 'PostgreSQL', 'Redis'],
        useCases: [
            'Scalable SaaS Application Backends',
            'Real-time Messaging & Notification Engines',
            'Payment Gateway Orchestrators (e.g. Xcrypt Gateway)',
            'Secure Enterprise Data Feeds'
        ]
    },
    'database-management': {
        title: 'Database Setup & Management',
        category: 'Development & Engineering',
        icon: Database,
        color: 'from-[#001A38] to-[#0F4C5C]',
        shortDesc: 'Efficient data modeling, storage solutions, and seamless database administration.',
        longDesc: 'Your data is your most valuable asset. We architect database structures that ensure reliability, high availability, and rapid read/write performance. From configuring SQL databases like PostgreSQL and MySQL to non-relational datastores like MongoDB and Redis, we ensure proper indexing, normalization, and relational schema integrity. We configure replication, automated backups, and row-level security (RLS) policies to keep sensitive user information completely secure and audit-ready.',
        features: [
            'Relational (SQL) & non-relational (NoSQL) database design',
            'Query performance tuning & advanced indexing plans',
            'Database replication, clustering, and automated backups',
            'Row-Level Security (RLS) & compliance policies',
            'Schema migration scripting and deployment pipelines'
        ],
        techStack: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma ORM', 'Supabase'],
        useCases: [
            'Multi-tenant SaaS Data Isolation',
            'High-frequency Transaction Loggers',
            'Global Content Caching Systems',
            'Relational Inventory Management Engines'
        ]
    },
    'automation-creation': {
        title: 'Automation Creation',
        category: 'Development & Engineering',
        icon: Zap,
        color: 'from-corporate-navy-light to-accent-teal',
        shortDesc: 'Streamlining workflows through intelligent and efficient automated processes.',
        longDesc: 'Reduce operational overhead and eliminate human error with our custom automation services. We build custom cron jobs, serverless cloud functions, and API integrations that connect disparate software suites. Whether it is automatically generating PDF invoices, syncing CRM details to internal databases, sending localized email updates, or automating social media distributions, we build zero-touch background processes that run 24/7 without fail.',
        features: [
            'API integrations & webhook orchestrations',
            'Custom serverless background functions',
            'Automated reports & PDF generation utilities',
            'Third-party CRM, ERP, and payment syncs',
            'Cron job schedulers and logging systems'
        ],
        techStack: ['Node.js', 'Python', 'AWS Lambda', 'GitHub Actions', 'Zapier APIs', 'SendGrid'],
        useCases: [
            'Automated Invoice and Billing Generators',
            'Multi-platform Social Media Auto-publishers',
            'Automated Lead Nurturing & Email Funnels',
            'Data Scraping & CRM Synchronization'
        ]
    },
    'ui-ux-design': {
        title: 'UI / UX Design',
        category: 'Design & Product Innovation',
        icon: PenTool,
        color: 'from-corporate-navy to-[#0F4C5C]',
        shortDesc: 'Intuitive, engaging, and user-centric interfaces designed for optimal experiences.',
        longDesc: 'Great software starts with exceptional design. We design digital interfaces that are not only visually striking but also highly intuitive and easy to navigate. Using Figma, we map user journeys, create wireframes, and design interactive high-fidelity prototypes. We establish comprehensive design systems with color tokens, typography rules, and reusable UI components. This ensures your final product looks polished, maintains brand consistency, and is optimized for user conversion.',
        features: [
            'User journey mapping & interactive wireframing',
            'High-fidelity visual design & prototyping (Figma)',
            'Custom design system creation (tokens, component libraries)',
            'Accessibility checks (WCAG compliance)',
            'Mobile-first responsive layout planning'
        ],
        techStack: ['Figma', 'Adobe Creative Suite', 'Tailwind CSS system', 'Miro', 'CSS Grid/Flexbox'],
        useCases: [
            'SaaS Dashboard Interactive Layouts',
            'Consumer Mobile App Wireframing',
            'E-Commerce Checkout Optimization',
            'Corporate Landing Page Design System'
        ]
    },
    'product-development': {
        title: 'Idea & Product Development',
        category: 'Design & Product Innovation',
        icon: Lightbulb,
        color: 'from-corporate-navy-dark to-[#002244]',
        shortDesc: 'Transforming innovative ideas into market-ready digital solutions.',
        longDesc: 'Have an idea but not sure how to build it? We guide startup founders and enterprises from the conceptual phase to a fully realized product. We help you define your Minimum Viable Product (MVP), scope technical feasibility, select the appropriate technology stack, and establish development timelines. By focusing on rapid prototyping and user feedback cycles, we help you launch your product to market quickly, minimizing development risk and maximizing product-market fit.',
        features: [
            'Minimum Viable Product (MVP) definition',
            'Tech stack selection & feasibility mapping',
            'Functional specifications & user stories documentation',
            'Interactive UI/UX mockups and prototypes',
            'Agile product roadmap & milestone definition'
        ],
        techStack: ['Figma', 'Jira / Trello', 'Next.js Rapid Boilerplate', 'Supabase Rapid Auth'],
        useCases: [
            'Startup MVP Launch Strategy',
            'Enterprise Internal Tools Planning',
            'New Feature Proof-of-Concepts (PoC)',
            'EdTech & FinTech Product Roadmaps'
        ]
    },
    'testing-bug-fixing': {
        title: 'Testing & Bug Fixing',
        category: 'Testing, Deployment & Maintenance',
        icon: Bug,
        color: 'from-[#001A38] to-[#0F4C5C]',
        shortDesc: 'Comprehensive quality assurance to deliver flawless and reliable software.',
        longDesc: 'Deliver software with confidence. Our testing services guarantee that your application is reliable, secure, and bug-free before it reaches your users. We implement manual exploratory testing, cross-browser responsiveness checks, and automated testing suites. From unit tests verifying individual code functions to End-to-End (E2E) browser simulations, we identify bottlenecks, patch vulnerabilities, and squash errors to ensure a seamless experience.',
        features: [
            'Unit & integration automated testing setup',
            'End-to-End (E2E) browser testing (Playwright, Cypress)',
            'Cross-device & cross-browser QA reviews',
            'API load testing and performance stress analysis',
            'Security vulnerability scans & remediation'
        ],
        techStack: ['Playwright', 'Jest', 'Cypress', 'Postman', 'Sentry error logger', 'SonarQube'],
        useCases: [
            'Critical Payment Path Verification',
            'Pre-deployment Application Audits',
            'Cross-device Responsiveness Auditing',
            'Automated Regression Test Pipelines'
        ]
    },
    'app-website-deployment': {
        title: 'App / Website Deployment',
        category: 'Testing, Deployment & Maintenance',
        icon: Rocket,
        color: 'from-corporate-navy-light to-accent-teal',
        shortDesc: 'Smooth and secure launch of your digital products to the live environment.',
        longDesc: 'A flawless release is key to a product\'s success. We build automated CI/CD pipelines that compile, test, and deploy your code automatically with zero downtime. Whether deploying static frontends to Vercel, Netlify, or AWS CloudFront, or hosting containerized backends on AWS ECS, Docker, or Google Cloud Run, we configure DNS routing, SSL certificates, and CDNs to ensure your platform is secure and available worldwide.',
        features: [
            'Automated CI/CD setup (GitHub Actions, Vercel Git)',
            'Domain configuration & SSL certificate installation',
            'Containerization setup using Docker configurations',
            'CDN routing & edge caching (Cloudflare, AWS CloudFront)',
            'Zero-downtime rolling update deployment blueprints'
        ],
        techStack: ['Vercel', 'AWS', 'GitHub Actions', 'Docker', 'Cloudflare', 'PM2'],
        useCases: [
            'Web Portal Cloud Deployments',
            'Static Web App Hosting & Edge CDN Setup',
            'Dynamic Backend Server Provisioning',
            'Database Migration Deployment Plans'
        ]
    },
    'hosting-server-management': {
        title: 'Hosting & Server Management',
        category: 'Testing, Deployment & Maintenance',
        icon: HardDrive,
        color: 'from-corporate-navy-dark to-[#0F4C5C]',
        shortDesc: 'Reliable cloud and on-premise solutions for high availability.',
        longDesc: 'Keep your servers running optimally under load. We provision and monitor server environments on leading cloud platforms. We configure virtual private clouds (VPCs), set up server firewalls, manage environment secrets, and configure CPU/memory auto-scaling. With automated server monitoring, database storage expansions, and automated hourly backups, we guarantee your services stay online and accessible.',
        features: [
            'Cloud resource provisioning (AWS, GCP, DigitalOcean)',
            'Server monitoring, log rotations, & performance tuning',
            'Automated database backups & storage management',
            'Network security groups & server firewalls setup',
            'Server scaling configurations (Horizontal & Vertical)'
        ],
        techStack: ['AWS EC2/S3', 'DigitalOcean Droplets', 'Nginx', 'Docker', 'Grafana / Prometheus'],
        useCases: [
            'High-Uptime Application Server Infrastructure',
            'Secure Private Subnet Database Hosting',
            'Static Asset Media Bucket Storage (S3)',
            'Enterprise API Load Balancing setups'
        ]
    },
    'feature-updates': {
        title: 'Feature Updates',
        category: 'Testing, Deployment & Maintenance',
        icon: RefreshCw,
        color: 'from-[#002D62] to-accent-teal',
        shortDesc: 'Continuous enhancement and integration of new functionalities.',
        longDesc: 'Software must evolve with your business. We provide seamless feature addition services, helping you incorporate new dashboards, API connections, database tables, or interactive tools into your existing system. We review your existing codebase, integrate the new feature while adhering to your established architecture guidelines, run regression checks, and deploy the update with zero disruption to active users.',
        features: [
            'Codebase architectural audits & refactoring plans',
            'Seamless integration of new API endpoints & interfaces',
            'Database schema migrations & field integrations',
            'Regression testing to verify existing code logic',
            'Milestone-driven integration sprints'
        ],
        techStack: ['Git', 'React', 'Node.js', 'PostgreSQL migration scripts', 'Postman'],
        useCases: [
            'Integrating a New Payment Method',
            'Adding a Customer Analytics Dashboard',
            'Connecting to a third-party Logistics Provider API',
            'Implementing Multi-factor Auth in an existing app'
        ]
    },
    'maintenance-support': {
        title: 'Maintenance & Support',
        category: 'Testing, Deployment & Maintenance',
        icon: Wrench,
        color: 'from-corporate-navy-dark to-corporate-navy-light',
        shortDesc: 'Ongoing technical assistance to ensure your systems run flawlessly.',
        longDesc: 'Prevent security vulnerabilities and system downtime with proactive maintenance. We keep your application robust by regularly upgrading third-party libraries, patching security issues, updating runtime parameters, and cleaning cache directories. Our priority SLAs mean we are always on standby to resolve bugs, troubleshoot server issues, and restore services in the event of an outage.',
        features: [
            'Proactive library updates & dependency security patches',
            'Server health tracking & error log investigation',
            'Priority bug-fixing support SLA agreements',
            'Routine database indexing and optimization tasks',
            'Emergency recovery and backup restoration plans'
        ],
        techStack: ['Nginx', 'GitHub dependabot', 'Sentry logs', 'PM2 monitors', 'SSH console tools'],
        useCases: [
            'Monthly Security and Dependency Upgrades',
            'Real-time Bug Resolution & Patch Releases',
            'Database Maintenance & Index Rebuilds',
            'Runtime Environment Security Hardening'
        ]
    },
    'requirements-gathering': {
        title: 'Requirements Gathering',
        category: 'Strategy & Consulting',
        icon: ClipboardList,
        color: 'from-corporate-navy to-[#0F4C5C]',
        shortDesc: 'In-depth analysis to align project goals with your strategic vision.',
        longDesc: 'The secret to a successful project is a crystal-clear roadmap. We conduct structured brainstorming sessions, stakeholder interviews, and technical audits to map out every requirement of your application. We document user roles, database relationships, operational rules, API configurations, and external integrations. This eliminates ambiguity and establishes a solid foundation for the design and code sprints.',
        features: [
            'Structured stakeholder workshops & audits',
            'User persona mapping & access levels definition',
            'Detailed functional specification documents',
            'System architecture planning & UML diagrams',
            'Third-party software dependencies analysis'
        ],
        techStack: ['Miro', 'Google Workspace', 'Confluence', 'Figma Wireframing', 'UML tools'],
        useCases: [
            'Pre-project Technical Scoping Sessions',
            'Legacy Application Migration Audits',
            'Enterprise Platform Blueprinting',
            'Multi-department API Alignment Plans'
        ]
    },
    'project-planning': {
        title: 'Project Planning',
        category: 'Strategy & Consulting',
        icon: Calendar,
        color: 'from-corporate-navy-dark to-[#002244]',
        shortDesc: 'Structured roadmaps and agile methodologies for timely delivery.',
        longDesc: 'We structure project delivery to ensure transparency and prevent scope creep. Utilizing agile methodologies, we break down your application requirements into two-week development sprints. We define milestones, assign developer resource capacities, map path dependencies, and configure project tracking boards (Jira, Trello). This allows you to track progress in real-time and review working code updates at the end of each sprint.',
        features: [
            'Milestone-driven product roadmaps & timelines',
            'Agile sprint allocations (2-week sprint structures)',
            'Resource capability & developer capacity scheduling',
            'Risk mitigation and path dependency mapping',
            'Shared interactive project dashboards'
        ],
        techStack: ['Jira', 'Trello', 'Gantt charts', 'Slack integration tools', 'Google Sheets'],
        useCases: [
            'Multi-month Enterprise App Sprints',
            'Startup MVP Launch Scheduling',
            'Phased Integration Planning',
            'Critical Path Milestone Trackers'
        ]
    },
    'documentation': {
        title: 'Documentation',
        category: 'Strategy & Consulting',
        icon: FileText,
        color: 'from-[#001A38] to-[#0F4C5C]',
        shortDesc: 'Clear, comprehensive user manuals and technical architecture guides.',
        longDesc: 'Ensure your code is understandable and maintainable. We author high-quality developer and user documentation. We document code patterns, write Swagger/OpenAPI specifications for API paths, map database schemas, write cloud deployment guides, and create visual user guides. This ensures your internal team or future developers can easily maintain, update, and scale the codebase.',
        features: [
            'Swagger / OpenAPI spec creation for all API nodes',
            'Detailed database schema & ERD maps',
            'Cloud environment setups & deployment walkthroughs',
            'User manuals and operational onboarding guides',
            'Standard operating procedures (SOP) documentation'
        ],
        techStack: ['Swagger / OpenAPI', 'Markdown', 'GitBook', 'Mermaid diagrams', 'Postman docs'],
        useCases: [
            'API Reference Guides for Developers',
            'Cloud Architecture Runbooks',
            'Database Relationship Documentation',
            'Parent / Staff Onboarding Guides'
        ]
    },
    'proposal-pricing': {
        title: 'Proposal & Pricing',
        category: 'Strategy & Consulting',
        icon: FileSpreadsheet,
        color: 'from-corporate-navy-light to-accent-teal',
        shortDesc: 'Transparent, customized project scopes and flexible pricing models.',
        longDesc: 'No hidden fees or unexpected costs. We compile transparent, line-item proposals showing exactly where your development budget is allocated. We break down the required design hours, frontend/backend engineering hours, database setup times, QA rounds, and deployment configurations. We offer flexible options—whether a scope-based fixed quote for MVPs or a monthly retainer model for dedicated developers.',
        features: [
            'Line-item budget breakdowns & work estimates',
            'Scope of Work (SoW) agreements & deliverables checklist',
            'Flexible development pricing models (Fixed-cost vs Retainer)',
            'Resource sizing options tailored for budgets',
            'Transparent milestone payment schedules'
        ],
        techStack: ['Google Sheets', 'Google Slides', 'DocuSign', 'FreshBooks'],
        useCases: [
            'Startup MVP Project Estimates',
            'Enterprise Tech Consulting Proposals',
            'Monthly Retention Developer Retainers',
            'Fixed-Scope System Upgrade Quotes'
        ]
    },
    'marketing-acquisition': {
        title: 'Marketing & Acquisition',
        category: 'Marketing & Client Success',
        icon: Megaphone,
        color: 'from-[#002D62] to-[#0F4C5C]',
        shortDesc: 'Strategic digital campaigns to drive growth and expand your client base.',
        longDesc: 'Building a great product is only half the battle; users need to know it exists. We help you design and run high-converting digital acquisition funnels. From setting up Google Analytics 4 and Tag Manager events to track user conversions, to configuring conversion pixels and landing pages optimized for search engines (SEO) and paid search ads (SEM), we align your software with your business growth engines.',
        features: [
            'Google Analytics 4 & conversion funnel integrations',
            'High-converting landing page structure reviews',
            'Pixel setup (Meta, LinkedIn, Google Tag Manager)',
            'Search Engine Optimization (SEO) structural checkups',
            'Lead capture forms and automation sync setups'
        ],
        techStack: ['Google Tag Manager', 'GA4', 'Meta Pixel', 'Google Ads', 'Mailchimp APIs'],
        useCases: [
            'SaaS Signup Growth Campaigns',
            'Landing Page Conversion Audit & Redesigns',
            'E-Commerce Ads Conversion Tracking',
            'Automated Lead Nurturing Workflows'
        ]
    },
    'client-support': {
        title: 'Client Support',
        category: 'Marketing & Client Success',
        icon: Headset,
        color: 'from-corporate-navy-dark to-corporate-navy-light',
        shortDesc: 'Dedicated, round-the-clock assistance for all your inquiries and needs.',
        longDesc: 'Your peace of mind is our priority. We provide outstanding post-launch support and customer success services. From checking on customer issues and database ticket inquiries, to providing walkthrough videos explaining software functions, and troubleshooting user interface questions, we ensure your users have a stellar experience with your software 24/7.',
        features: [
            'Dedicated customer ticket support channel options',
            'Screen-recording video guides for admin tools',
            'User interface walkthroughs and user guides',
            'Weekly system checkups & status reporting updates',
            'Fast response times for critical system questions'
        ],
        techStack: ['Loom video recorder', 'Slack support channels', 'Zendesk setup', 'Google Workspace'],
        useCases: [
            'Ongoing Portal Training for Admin Staff',
            'Customer Issue Investigation & Debugging Support',
            'Periodic Feature Walkthrough Demos',
            'Corporate Admin Platform Support SLA'
        ]
    }
};
