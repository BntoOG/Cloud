/**
 * Site content in English. Mirrors the structure of pt.js.
 */
export const en = {
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Tech' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'integrations', label: 'Integrations' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'spaces', label: 'Spaces' },
    { id: 'contact', label: 'Contact' },
  ],

  a11y: { skip: 'Skip to content', langToggle: 'Mudar para Português' },

  hero: {
    badge: 'Open to opportunities',
    role: 'Integration Analyst · Integrations & Databases',
    tagline: 'I make different systems talk to each other.',
    shortBio:
      'Integration analyst. I work with REST and SOAP APIs (Postman), JSON, XML, Base64, SFTP, SQL and automation with PowerShell and .bat scripts.',
    ctaProjects: 'View projects',
    ctaContact: 'Get in touch',
    stats: [
      { value: 'Apdata', label: 'Integration Analyst' },
      { value: 'API', label: 'Systems integration' },
      { value: 'ADS', label: 'Degree in progress' },
    ],
  },

  about: {
    eyebrow: 'About me',
    title: 'Who I am and where I am heading',
    subtitle: 'A bit about who I am and what drives me in technology.',
    paragraphs: [
      "I'm {age} years old, from São Paulo, and I enjoy understanding how systems connect behind the screens.",
      'Today I work at Apdata supporting the integrations of a corporate HR system with client systems: I test REST and SOAP APIs in Postman, validate JSON and XML, handle Base64 data, track transaction flows and manage file transfers over SFTP. I use SQL to find where the data went wrong and automate repetitive work with PowerShell and .bat scripts.',
      "I'm finishing my degree in Systems Analysis and Development and I want to grow in integration, development and databases.",
    ],
    objectivesTitle: 'Professional goals',
    objectives: [
      'Grow as an integration analyst and in development.',
      'Deepen my knowledge of APIs, databases and automation.',
      'Deliver solutions that actually solve the user\u2019s problem.',
    ],
    interestsTitle: 'Tech interests',
    interests: [
      'Systems integration',
      'REST and SOAP APIs (Postman)',
      'File transfer (SFTP)',
      'Databases and SQL',
      'Automation with PowerShell and .bat',
      'Data analysis and validation',
    ],
  },

  skills: {
    eyebrow: 'Technologies & Skills',
    title: 'Tools I work and study with',
    subtitle: 'Skills organized by area, with the proficiency level for each one.',
    levels: { basico: 'Basic', intermediario: 'Intermediate', avancado: 'Advanced' },
    categories: [
      {
        id: 'integrations', title: 'Integrations & APIs', icon: 'plug',
        items: [
          { name: 'Systems integration', level: 'Intermediate' },
          { name: 'REST APIs', level: 'Intermediate' },
          { name: 'SOAP APIs', level: 'Intermediate' },
          { name: 'JSON', level: 'Advanced' },
          { name: 'XML', level: 'Intermediate' },
          { name: 'Base64', level: 'Intermediate' },
          { name: 'SFTP (file transfer)', level: 'Intermediate' },
          { name: 'Transactions', level: 'Intermediate' },
          { name: 'Integration log analysis', level: 'Intermediate' },
        ],
      },
      {
        id: 'database', title: 'Databases', icon: 'database',
        items: [
          { name: 'SQL', level: 'Advanced' },
          { name: 'SQL Server', level: 'Intermediate' },
          { name: 'Oracle', level: 'Basic' },
          { name: 'Query writing', level: 'Advanced' },
        ],
      },
      {
        id: 'automation', title: 'Automation & Scripts', icon: 'code',
        items: [
          { name: 'PowerShell', level: 'Intermediate' },
          { name: 'Batch scripts (.bat)', level: 'Basic' },
          { name: 'Checks automation', level: 'Intermediate' },
        ],
      },
      {
        id: 'languages', title: 'Web Development & Languages', icon: 'code',
        items: [
          { name: 'HTML', level: 'Intermediate' },
          { name: 'CSS', level: 'Intermediate' },
          { name: 'JavaScript', level: 'Intermediate' },
          { name: 'React', level: 'Basic' },
          { name: 'Node.js', level: 'Basic' },
          { name: 'Python', level: 'Basic' },
          { name: 'Java', level: 'Basic' },
        ],
      },
      {
        id: 'data', title: 'Data Analysis', icon: 'transform',
        items: [
          { name: 'Data validation', level: 'Intermediate' },
          { name: 'Inconsistency investigation', level: 'Intermediate' },
          { name: 'Information verification', level: 'Intermediate' },
        ],
      },
      {
        id: 'tools', title: 'Tools', icon: 'tool',
        items: [
          { name: 'Postman', level: 'Intermediate' },
          { name: 'ServiceNow', level: 'Intermediate' },
          { name: 'Jira Service Desk', level: 'Basic' },
          { name: 'Microsoft 365', level: 'Intermediate' },
          { name: 'Windows 10/11', level: 'Advanced' },
        ],
      },
      {
        id: 'methodologies', title: 'Methodologies & Best Practices', icon: 'award',
        items: [
          { name: 'ITIL 4', level: 'Basic' },
          { name: 'Tier 2 technical support', level: 'Advanced' },
        ],
      },
      {
        id: 'others', title: 'Languages & Education', icon: 'sparkles',
        items: [
          { name: 'Intermediate English', level: 'Intermediate' },
          { name: 'Systems Analysis & Development (in progress)' },
        ],
      },
    ],
  },

  projects: {
    eyebrow: 'Projects',
    title: 'Practical cases and experience',
    subtitle: 'Real cases from my daily work with integrations, data and SQL.',
    all: 'All',
    featured: 'Featured',
    objectiveLabel: 'Goal',
    featuresLabel: 'Highlights',
    viewCode: 'View code',
    soon: 'Coming soon',
    demo: 'Live demo',
    items: [
      {
        id: 'caso-integracoes-apdata',
        title: 'Systems Integration Support',
        category: 'Integration',
        featured: true,
        description:
          'Support for a corporate HR system\u2019s integrations with client systems: testing REST and SOAP in Postman, validating JSON, XML and Base64, transferring files over SFTP and tracking transaction flows.',
        objective: 'Keep data exchange between systems reliable and failure-free.',
        features: [
          'Testing and analysis of REST and SOAP integrations in Postman',
          'Reading and validating messages in JSON, XML and Base64',
          'File transfer between systems over SFTP',
          'Transaction tracking and log analysis',
        ],
        tech: ['REST / SOAP', 'Postman', 'JSON', 'XML', 'Base64', 'SFTP', 'Transactions', 'Integrations'],
        github: '', demo: '',
      },
      {
        id: 'caso-automacao-powershell',
        title: 'Automating Checks with PowerShell',
        category: 'Automation',
        featured: true,
        description:
          'PowerShell and .bat scripts to automate repetitive support checks, such as validating integration responses, handling Base64 data and verifying information. What was manual became a single command.',
        objective: 'Save time and reduce human error in repetitive tasks.',
        features: [
          'Automation of routine checks',
          'Verification of data and integration responses',
          'Standardization of the support team\u2019s checks',
        ],
        tech: ['PowerShell', 'Batch (.bat)', 'Base64', 'Automation', 'Integrations'],
        github: '', demo: '',
      },
      {
        id: 'caso-dados-sql',
        title: 'Data Investigation with SQL',
        category: 'Database',
        featured: false,
        description:
          'SQL (SQL Server and Oracle) to investigate inconsistencies, validate information and support record fixes. When data does not add up, I go after the reason.',
        objective: 'Find the root cause of data problems and support the fix.',
        features: [
          'Queries to extract and verify data',
          'Investigation of database inconsistencies',
          'Support for record fixes and incident resolution',
        ],
        tech: ['SQL', 'SQL Server', 'Oracle'],
        github: '', demo: '',
      },
    ],
  },

  experience: {
    eyebrow: 'Experience & Education',
    title: 'My journey',
    subtitle: 'Education, certifications and professional experience.',
    typeLabels: { work: 'Experience', education: 'Education', course: 'Course', certification: 'Certification', project: 'Project' },
    items: [
      {
        id: 'exp-apdata', type: 'work', title: 'Integration Analyst', place: 'Apdata', period: 'Current',
        description:
          'I support the integrations of a corporate HR system with client systems, making sure data exchange runs without failures. I test and analyze REST and SOAP APIs in Postman, validate JSON and XML payloads, handle Base64 encodings and track transaction flows end to end. I manage file transfers over SFTP and, when data does not add up, I investigate with SQL and automate repetitive checks with PowerShell and .bat scripts.',
        tags: ['Integration Support', 'REST / SOAP', 'Postman', 'JSON', 'XML', 'Base64', 'SFTP', 'Transactions', 'SQL', 'PowerShell', 'Batch (.bat)'],
      },
      {
        id: 'exp-telematica', type: 'work', title: 'Jr Technical Support Analyst (Tier 2)', place: 'Telemática Sistemas Inteligentes', period: '03/2025 - 2025',
        description:
          'Tier 2 support investigating data inconsistencies in SQL Server. I wrote queries and analyzed integration logs to reach the root of critical incidents and support fixing the affected records.',
        tags: ['SQL Server', 'Integrations', 'ServiceNow', 'Tier 2 Support'],
      },
      {
        id: 'edu-ads', type: 'education', title: 'Technologist in Systems Analysis and Development', place: 'Universidade Cidade de São Paulo', period: '06/2024 - 06/2026',
        description: 'Higher education focused on systems development, databases, programming logic and application integration.',
        tags: [],
      },
      {
        id: 'cert-itil', type: 'certification', title: 'ITIL® 4 Foundation', place: 'Certification', period: '—',
        description: 'Fundamentals of IT service management and ITIL best practices.',
        tags: [],
      },
      {
        id: 'cert-ms900', type: 'certification', title: 'Microsoft 365 Fundamentals (MS-900)', place: 'Udemy', period: '—',
        description: 'Fundamentals of Microsoft 365 cloud services and solutions.',
        tags: [],
      },
      {
        id: 'edu-radiologia', type: 'education', title: 'Radiology Technician', place: 'Colégio Paschoal Dantas', period: '2024 - 2026',
        description: 'Technical training in radiology.',
        tags: [],
      },
      {
        id: 'exp-decoratta', type: 'work', title: 'Jr General Services Assistant', place: 'Decoratta Comercial LTDA', period: '08/2023 - 03/2025',
        description: 'Career before IT. Process routine with attention to detail and organization — inventory control and order picking for nationwide shipping, keeping stock and logistics on track.',
        tags: [],
      },
      {
        id: 'exp-allox', type: 'work', title: 'Supervisor', place: 'Allox Teleatendimento LTDA', period: '05/2022 - 11/2022',
        description: 'Career before IT. I led a goal-driven team, tracking performance indicators — a foundation for the analytical, high-pressure work I do today.',
        tags: [],
      },
    ],
  },

  integrations: {
    eyebrow: 'Integrations & Databases',
    title: 'Connecting systems and data',
    subtitle: 'Interest and knowledge in APIs, systems integration, data flow and databases.',
    codeTitle: 'pipeline.js',
    dataFlow: [
      { id: 'sys-a', label: 'System A', sub: 'Data source', icon: 'app' },
      { id: 'api', label: 'API', sub: 'REST communication', icon: 'plug' },
      { id: 'transform', label: 'Processing', sub: 'Validation / ETL', icon: 'transform' },
      { id: 'db', label: 'Database', sub: 'Persistence', icon: 'database' },
      { id: 'sys-b', label: 'System B', sub: 'Data destination', icon: 'app' },
    ],
    concepts: [
      { id: 'apis', title: 'REST and SOAP APIs', icon: 'plug', text: 'Analysis and testing of REST (JSON) and SOAP (XML) integrations.' },
      { id: 'formats', title: 'JSON and XML', icon: 'code', text: 'Reading and validating the messages exchanged between systems.' },
      { id: 'transactions', title: 'Transactions', icon: 'transform', text: 'End-to-end tracking of transactions.' },
      { id: 'logs', title: 'Log analysis', icon: 'tool', text: 'Investigating the root cause of integration errors through to the fix.' },
      { id: 'sql', title: 'Investigation with SQL', icon: 'database', text: 'Queries to find inconsistencies and validate data.' },
      { id: 'automation', title: 'Automation with PowerShell', icon: 'sparkles', text: 'Scripts that automate repetitive support checks.' },
    ],
  },

  certificates: {
    eyebrow: 'Certificates & Credentials',
    title: 'Continuous learning',
    subtitle: '{count} certificates in technology, data, AI, communication and management. Filter by theme and click to open.',
    all: 'All',
    showAll: 'View all ({count})',
    showLess: 'Show less',
  },

  spaces: {
    eyebrow: 'Spaces',
    title: 'Project areas',
    subtitle: 'Shortcuts to the spaces where I build experiments: simple games and everyday tools.',
    access: 'Open',
    items: [
      {
        id: 'atari', icon: 'pencil', title: 'Atari', tag: 'Games',
        description: 'A creative space for simple games built for showcasing. Prototypes, pixel art and playable experiments right in the browser.',
        link: 'atari/', external: false,
      },
      {
        id: 'ferramentas', icon: 'gear', title: 'Tools', tag: 'Utilities',
        description: 'General builds: small tools, automations and utilities that solve everyday problems.',
        link: 'ferramentas/', external: false,
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: "Let's talk",
    subtitle: "Let's chat about technology, projects and integrations. Reach out on LinkedIn.",
    text: 'I prefer to keep contact on LinkedIn. Just click below:',
    cta: 'Connect on LinkedIn',
  },

  footer: { madeWith: 'Built with React.', backToTop: 'Back to top' },
}
