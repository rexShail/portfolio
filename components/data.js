export const NAV = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "about", label: "About", icon: "👋" },
  { id: "skills", label: "AI Stack", icon: "🧠" },
  { id: "experience", label: "Experience", icon: "💼" },
  { id: "achievements", label: "Impact", icon: "📈" },
  { id: "certifications", label: "Learning", icon: "🎓" },
  { id: "background", label: "Focus", icon: "🔬" },
  { id: "blogs", label: "Writing", icon: "✍️" },
];

export const SKILLS = [
  {
    cat: "AI / ML Engineering",
    icon: "🧠",
    color: "#e65c00",
    items: ["Python", "Generative AI", "RAG", "LLM Architecture", "Predictive ML", "Explainability", "Responsible AI"],
  },
  {
    cat: "Systems & Platform",
    icon: "⚙️",
    color: "#1a6b3c",
    items: ["FastAPI", "Spring Boot", "Microservices", "REST APIs", "TypeScript", "Java", "Azure / AWS"],
  },
  {
    cat: "Data & Experimentation",
    icon: "📊",
    color: "#1565c0",
    items: ["PostgreSQL", "MongoDB", "CosmosDB", "Oracle", "MySQL", "Redis", "CI/CD"],
  },
  {
    cat: "Applied Domain",
    icon: "🏦",
    color: "#6a1b9a",
    items: ["Credit Decisioning", "FICO Decision Modeler", "AML / KYC", "Fraud", "Digital Onboarding", "Oil & Gas"],
  },
];

export const EXPERIENCE = [
  {
    role: "Assistant Consultant · Lead Architect",
    company: "Tata Consultancy Services",
    location: "Jacksonville, USA",
    period: "Nov 2017 – Present",
    sub: "Embedded at CitiBank NA · Digital Account Opening & Credit Decisioning",
    color: "#e65c00",
    points: [
      { bold: "Credit decisioning:", rest: "Architected FICO Decision Modeler platforms and integrated predictive ML models, improving risk assessment accuracy by 15% and reducing approval cycle time by 30%." },
      { bold: "Platform modernization:", rest: "Led 5+ monolith-to-MEAN/Spring Boot microservice migrations, cutting P95 latency by 25% and monthly cloud spend by approximately $40K." },
      { bold: "Quality engineering:", rest: "Established BDD automation with 99% test coverage, eliminating 80%+ of production defects and saving approximately 120 QA hours per sprint." },
      { bold: "Enterprise delivery:", rest: "Worked with Saudi Aramco stakeholders and coordinated cross-functional global teams across the USA, India, and Saudi Arabia." },
    ],
  },
  {
    role: "Senior Software Consultant",
    company: "Fusion Indus Tecsol Pvt. Ltd.",
    location: "Gurugram, India",
    period: "Nov 2016 – Oct 2017",
    sub: "Onshore-Offshore Transition Lead · NCR Corporation",
    color: "#1565c0",
    points: [
      { bold: "Team transition leadership:", rest: "Led the knowledge transfer for 12 engineers over 6 months while maintaining 100% delivery continuity." },
      { bold: "Product engineering:", rest: "Delivered responsive web experiences and internal tools that materially improved client workflow efficiency and revenue impact." },
      { bold: "Regional delivery:", rest: "Designed sales enablement tools adopted across 4 regional markets and strengthened alignment between engineering execution and business outcomes." },
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Amagesoft Technologies",
    location: "Chandigarh, India",
    period: "Feb 2013 – Oct 2016",
    sub: null,
    color: "#1a6b3c",
    points: [
      { bold: "Product scale:", rest: "Built 3 client-facing platforms on CodeIgniter and Zend serving 20K+ daily users and improved workflow automation efficiency by 40%." },
      { bold: "Mobile engineering:", rest: "Developed an Ionic Android application with real-time data synchronization." },
      { bold: "Healthcare systems:", rest: "Architected a secure, HIPAA-compliant electronic health record platform for US outpatient clinics." },
      { bold: "Performance and CMS:", rest: "Created WordPress themes and plugins for 8+ client projects and reduced average page-load time by 35%." },
    ],
  },
];

export const ACHIEVEMENTS = [
  { icon: "🔎", metric: "40%", label: "Faster Policy Review", desc: "Reduced compliance review time with an internal FastAPI RAG pipeline and vector retrieval." },
  { icon: "🧠", metric: "15%", label: "Better Risk Accuracy", desc: "Improved model-driven credit decision quality in a regulated banking workflow." },
  { icon: "⚡", metric: "30%", label: "Faster Decisions", desc: "Reduced approval cycle time through smarter automation and system integration." },
  { icon: "✅", metric: "99%", label: "Test Reliability", desc: "Built high-confidence release practices across critical financial systems." },
  { icon: "💰", metric: "$40K", label: "Monthly Savings", desc: "Optimised cloud and service architecture for measurable operating leverage." },
  { icon: "🌍", metric: "0", label: "Missed SLAs", desc: "Delivered across the US, India, and Saudi Arabia with strong cross-timezone execution." },
];

export const CERTS = [
  {
    icon: "⚙️",
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    level: "Associate",
    accentColor: "#FF9900",
    tags: ["DynamoDB", "API Gateway", "IAM", "CI/CD", "SDK"],
  },
  {
    icon: "🍃",
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    level: "Associate",
    accentColor: "#00ED64",
    tags: ["Atlas", "Aggregation", "Indexing", "Schema Design", "Compass"],
  },
];

export const COURSE_CERTS = [
  {
    name: "AI for Work and Life",
    issuer: "University of North Florida",
    date: "Nov 14, 2025",
    hours: "1 CEU",
    image: "/certificates/1763328692380.jpeg",
  },
  {
    name: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02",
    issuer: "Udemy",
    date: "Aug 12, 2024",
    hours: "15 total hours",
    image: "/certificates/1770172499345.jpeg",
  },
  {
    name: "Standard 9.2 - Part 1 Foundation Enterprise Architect Course",
    issuer: "Udemy",
    date: "March 29, 2026",
    hours: "2.5 total hours",
    image: "/certificates/1774752042273.jpeg",
  },
  {
    name: "The EU AI Act Compliance Masterclass 2026",
    issuer: "Udemy",
    date: "April 11, 2026",
    hours: "2 total hours",
    image: "/certificates/1776390534555.jpeg",
  },
  {
    name: "Financial Crime: Processes & Technology - Masterclass",
    issuer: "Udemy",
    date: "April 26, 2026",
    hours: "10 total hours",
    image: "/certificates/1777155947348.jpeg",
  },
  {
    name: "Fraud Detection in Python",
    issuer: "Udemy",
    date: "May 4, 2026",
    hours: "2 total hours",
    image: "/certificates/1777858798003.jpeg",
  },
];

export const BLOGS = [
  {
    title: "Mastering Angular Signals: A Beginner's Guide to Reactive State Management",
    date: "April 30, 2026",
    tags: ["Angular", "Signals", "State Management"],
    excerpt: "Dive into Angular Signals — the new reactive primitive that simplifies state management. This beginner-friendly guide covers how signals work, why they outperform traditional change detection, and practical examples to build more predictable Angular apps.",
    url: "https://medium.com/@rexShail/mastering-angular-signals-a-beginners-guide-to-reactive-state-management-8c946dbf626c",
    readTime: "8 min read",
    color: "#e65c00",
  },
  {
    title: "The Full Stack Paradox: Jack of All Trades, Master of None?",
    date: "May 3, 2026",
    tags: ["Career", "Full Stack", "Leadership"],
    excerpt: "Full-stack engineers are valuable, but expecting them to be experts in every layer is unrealistic. Specialists exist for a reason. This post explores the balance between depth and breadth in modern engineering teams.",
    url: "https://medium.com/@rexShail/the-full-stack-paradox-jack-of-all-trades-master-of-none-94845e1064da",
    readTime: "3 min read",
    color: "#1565c0",
  },
  {
    title: "From Signals to AI: How Angular Quietly Became Cool Again (v16 to v21)",
    date: "May 3, 2026",
    tags: ["Career", "Full Stack", "Leadership"],
    excerpt: "I will be honest there was a stretch where Angular felt like it was losing the plot. While React is winning hearts with their simplicity and Claude (Claude AI responses are in react.), Angular was still making you set up NgModules just to sneeze. It felt heavy. Ceremonial. Like framework bureaucracy.",
    url: "https://medium.com/@rexShail/from-signals-to-ai-how-angular-quietly-became-cool-again-v16-to-v21-7a23733df734",
    readTime: "4 min read",
    color: "#1565c0",
  },
  {
    title: "Mastering Angular Signal Effects: A Practical Guide with a Todo App",
    date: "May 23, 2026",
    tags: ["Angular", "Signals", "Effects"],
    excerpt: "A practical walkthrough of Angular signal effects using a todo app, showing when effects are useful, how they react to state changes, and how to keep reactive logic clear in real-world Angular code.",
    url: "https://medium.com/@rexShail/mastering-angular-signal-effects-a-practical-guide-with-a-todo-app-0734038350f8?postPublishedType=initial",
    readTime: "5 min read",
    color: "#e65c00",
  },
];

export const INTERESTS = [
  "Generative AI & RAG",
  "AI Model Evaluation",
  "Responsible AI & Explainability",
  "Credit Risk & Decisioning",
  "AML / KYC",
  "Distributed Systems",
  "Technical Mentorship",
];
