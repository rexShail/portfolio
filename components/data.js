export const NAV = [
  { id: "home", label: "Home", icon: "🏠" },
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
    items: ["Python", "PyTorch", "scikit-learn", "XGBoost", "LLM Apps", "Prompt Design", "Model Evaluation"],
  },
  {
    cat: "Systems & Platform",
    icon: "⚙️",
    color: "#1a6b3c",
    items: ["FastAPI", "Docker", "AWS", "Kafka", "Microservices", "CI/CD", "Observability"],
  },
  {
    cat: "Data & Experimentation",
    icon: "📊",
    color: "#1565c0",
    items: ["Pandas", "NumPy", "SQL", "Feature Stores", "A/B Testing", "Monitoring", "MLOps"],
  },
  {
    cat: "Applied Domain",
    icon: "🏦",
    color: "#6a1b9a",
    items: ["FinTech", "Credit Risk", "Fraud Detection", "Responsible AI", "Explainability", "Decisioning Systems"],
  },
];

export const EXPERIENCE = [
  {
    role: "Lead Engineer · Applied AI & Platform Systems",
    company: "Tata Consultancy Services",
    location: "Chandigarh, India",
    period: "Nov 2017 – Present",
    sub: "Embedded at CitiBank NA · Building AI-enabled decisioning and digital onboarding platforms",
    color: "#e65c00",
    points: [
      { bold: "Applied ML in production:", rest: "Built and integrated ML-driven credit decisioning workflows with FICO and predictive models — 15% higher risk accuracy and 30% faster approval cycles." },
      { bold: "Responsible AI foundation:", rest: "Shaped model governance, explainability, and monitoring practices for regulated banking systems so decisions are more auditable and reliable." },
      { bold: "Modern platform engineering:", rest: "Reworked critical services around scalable APIs and event-driven architecture, improving operational resilience and reducing infrastructure cost." },
      { bold: "Cross-functional delivery:", rest: "Partnered across product, risk, and engineering teams across the US, India, and Saudi Arabia while maintaining zero missed SLAs." },
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
      { bold: "Broader systems thinking:", rest: "Strengthened the bridge between engineering execution and business outcomes across regional teams." },
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
      { bold: "Product scale:", rest: "Built client platforms serving 20K+ daily users and improving productivity through better workflows and more reliable delivery." },
      { bold: "End-to-end implementation:", rest: "Worked across frontend, backend, and deployment to launch products quickly and iterate with users in mind." },
      { bold: "Performance focus:", rest: "Improved response times and platform stability for multiple clients while shipping features with a strong product mindset." },
    ],
  },
];

export const ACHIEVEMENTS = [
  { icon: "🧠", metric: "15%", label: "Better Risk Accuracy", desc: "Improved model-driven credit decision quality in a regulated banking workflow." },
  { icon: "⚡", metric: "30%", label: "Faster Decisions", desc: "Reduced approval cycle time through smarter automation and system integration." },
  { icon: "✅", metric: "99%", label: "Test Reliability", desc: "Built high-confidence release practices across critical financial systems." },
  { icon: "💰", metric: "$40K", label: "Monthly Savings", desc: "Optimised cloud and service architecture for measurable operating leverage." },
  { icon: "🌍", metric: "0", label: "Missed SLAs", desc: "Delivered across the US, India, and Saudi Arabia with strong cross-timezone execution." },
  { icon: "🤝", metric: "12", label: "Engineers Guided", desc: "Led knowledge transfer and delivery continuity through complex transitions." },
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
    url: "https://medium.com/@rexShailJs/mastering-angular-signals-a-beginners-guide-to-reactive-state-management-8c946dbf626c",
    readTime: "8 min read",
    color: "#e65c00",
  },
  {
    title: "The Full Stack Paradox: Jack of All Trades, Master of None?",
    date: "May 3, 2026",
    tags: ["Career", "Full Stack", "Leadership"],
    excerpt: "Full-stack engineers are valuable, but expecting them to be experts in every layer is unrealistic. Specialists exist for a reason. This post explores the balance between depth and breadth in modern engineering teams.",
    url: "https://medium.com/@rexShailJs/the-full-stack-paradox-jack-of-all-trades-master-of-none-94845e1064da",
    readTime: "3 min read",
    color: "#1565c0",
  },
  {
    title: "From Signals to AI: How Angular Quietly Became Cool Again (v16 to v21)",
    date: "May 3, 2026",
    tags: ["Career", "Full Stack", "Leadership"],
    excerpt: "I will be honest there was a stretch where Angular felt like it was losing the plot. While React is winning hearts with their simplicity and Claude (Claude AI responses are in react.), Angular was still making you set up NgModules just to sneeze. It felt heavy. Ceremonial. Like framework bureaucracy.",
    url: "https://medium.com/@rexShailJs/from-signals-to-ai-how-angular-quietly-became-cool-again-v16-to-v21-7a23733df734",
    readTime: "4 min read",
    color: "#1565c0",
  },
  {
    title: "Mastering Angular Signal Effects: A Practical Guide with a Todo App",
    date: "May 23, 2026",
    tags: ["Angular", "Signals", "Effects"],
    excerpt: "A practical walkthrough of Angular signal effects using a todo app, showing when effects are useful, how they react to state changes, and how to keep reactive logic clear in real-world Angular code.",
    url: "https://medium.com/@rexShailJs/mastering-angular-signal-effects-a-practical-guide-with-a-todo-app-0734038350f8?postPublishedType=initial",
    readTime: "5 min read",
    color: "#e65c00",
  },
];

export const INTERESTS = [
  "Applied ML in Finance",
  "Responsible AI & Explainability",
  "LLM Applications for Internal Tools",
  "MLOps & Model Observability",
  "Distributed Systems",
  "Technical Mentorship",
];
