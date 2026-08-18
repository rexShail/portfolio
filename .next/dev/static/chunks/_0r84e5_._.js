(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/data.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACHIEVEMENTS",
    ()=>ACHIEVEMENTS,
    "BLOGS",
    ()=>BLOGS,
    "CERTS",
    ()=>CERTS,
    "COURSE_CERTS",
    ()=>COURSE_CERTS,
    "EXPERIENCE",
    ()=>EXPERIENCE,
    "INTERESTS",
    ()=>INTERESTS,
    "NAV",
    ()=>NAV,
    "SKILLS",
    ()=>SKILLS
]);
const NAV = [
    {
        id: "home",
        label: "Home",
        icon: "🏠"
    },
    {
        id: "skills",
        label: "AI Stack",
        icon: "🧠"
    },
    {
        id: "experience",
        label: "Experience",
        icon: "💼"
    },
    {
        id: "achievements",
        label: "Impact",
        icon: "📈"
    },
    {
        id: "certifications",
        label: "Learning",
        icon: "🎓"
    },
    {
        id: "background",
        label: "Focus",
        icon: "🔬"
    },
    {
        id: "blogs",
        label: "Writing",
        icon: "✍️"
    }
];
const SKILLS = [
    {
        cat: "AI / ML Engineering",
        icon: "🧠",
        color: "#e65c00",
        items: [
            "Python",
            "PyTorch",
            "scikit-learn",
            "XGBoost",
            "LLM Apps",
            "Prompt Design",
            "Model Evaluation"
        ]
    },
    {
        cat: "Systems & Platform",
        icon: "⚙️",
        color: "#1a6b3c",
        items: [
            "FastAPI",
            "Docker",
            "AWS",
            "Kafka",
            "Microservices",
            "CI/CD",
            "Observability"
        ]
    },
    {
        cat: "Data & Experimentation",
        icon: "📊",
        color: "#1565c0",
        items: [
            "Pandas",
            "NumPy",
            "SQL",
            "Feature Stores",
            "A/B Testing",
            "Monitoring",
            "MLOps"
        ]
    },
    {
        cat: "Applied Domain",
        icon: "🏦",
        color: "#6a1b9a",
        items: [
            "FinTech",
            "Credit Risk",
            "Fraud Detection",
            "Responsible AI",
            "Explainability",
            "Decisioning Systems"
        ]
    }
];
const EXPERIENCE = [
    {
        role: "Lead Engineer · Applied AI & Platform Systems",
        company: "Tata Consultancy Services",
        location: "Chandigarh, India",
        period: "Nov 2017 – Present",
        sub: "Embedded at CitiBank NA · Building AI-enabled decisioning and digital onboarding platforms",
        color: "#e65c00",
        points: [
            {
                bold: "Applied ML in production:",
                rest: "Built and integrated ML-driven credit decisioning workflows with FICO and predictive models — 15% higher risk accuracy and 30% faster approval cycles."
            },
            {
                bold: "Responsible AI foundation:",
                rest: "Shaped model governance, explainability, and monitoring practices for regulated banking systems so decisions are more auditable and reliable."
            },
            {
                bold: "Modern platform engineering:",
                rest: "Reworked critical services around scalable APIs and event-driven architecture, improving operational resilience and reducing infrastructure cost."
            },
            {
                bold: "Cross-functional delivery:",
                rest: "Partnered across product, risk, and engineering teams across the US, India, and Saudi Arabia while maintaining zero missed SLAs."
            }
        ]
    },
    {
        role: "Senior Software Consultant",
        company: "Fusion Indus Tecsol Pvt. Ltd.",
        location: "Gurugram, India",
        period: "Nov 2016 – Oct 2017",
        sub: "Onshore-Offshore Transition Lead · NCR Corporation",
        color: "#1565c0",
        points: [
            {
                bold: "Team transition leadership:",
                rest: "Led the knowledge transfer for 12 engineers over 6 months while maintaining 100% delivery continuity."
            },
            {
                bold: "Product engineering:",
                rest: "Delivered responsive web experiences and internal tools that materially improved client workflow efficiency and revenue impact."
            },
            {
                bold: "Broader systems thinking:",
                rest: "Strengthened the bridge between engineering execution and business outcomes across regional teams."
            }
        ]
    },
    {
        role: "Full Stack Developer",
        company: "Amagesoft Technologies",
        location: "Chandigarh, India",
        period: "Feb 2013 – Oct 2016",
        sub: null,
        color: "#1a6b3c",
        points: [
            {
                bold: "Product scale:",
                rest: "Built client platforms serving 20K+ daily users and improving productivity through better workflows and more reliable delivery."
            },
            {
                bold: "End-to-end implementation:",
                rest: "Worked across frontend, backend, and deployment to launch products quickly and iterate with users in mind."
            },
            {
                bold: "Performance focus:",
                rest: "Improved response times and platform stability for multiple clients while shipping features with a strong product mindset."
            }
        ]
    }
];
const ACHIEVEMENTS = [
    {
        icon: "🧠",
        metric: "15%",
        label: "Better Risk Accuracy",
        desc: "Improved model-driven credit decision quality in a regulated banking workflow."
    },
    {
        icon: "⚡",
        metric: "30%",
        label: "Faster Decisions",
        desc: "Reduced approval cycle time through smarter automation and system integration."
    },
    {
        icon: "✅",
        metric: "99%",
        label: "Test Reliability",
        desc: "Built high-confidence release practices across critical financial systems."
    },
    {
        icon: "💰",
        metric: "$40K",
        label: "Monthly Savings",
        desc: "Optimised cloud and service architecture for measurable operating leverage."
    },
    {
        icon: "🌍",
        metric: "0",
        label: "Missed SLAs",
        desc: "Delivered across the US, India, and Saudi Arabia with strong cross-timezone execution."
    },
    {
        icon: "🤝",
        metric: "12",
        label: "Engineers Guided",
        desc: "Led knowledge transfer and delivery continuity through complex transitions."
    }
];
const CERTS = [
    {
        icon: "⚙️",
        name: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        level: "Associate",
        accentColor: "#FF9900",
        tags: [
            "DynamoDB",
            "API Gateway",
            "IAM",
            "CI/CD",
            "SDK"
        ]
    },
    {
        icon: "🍃",
        name: "MongoDB Certified Developer",
        issuer: "MongoDB University",
        level: "Associate",
        accentColor: "#00ED64",
        tags: [
            "Atlas",
            "Aggregation",
            "Indexing",
            "Schema Design",
            "Compass"
        ]
    }
];
const COURSE_CERTS = [
    {
        name: "AI for Work and Life",
        issuer: "University of North Florida",
        date: "Nov 14, 2025",
        hours: "1 CEU",
        image: "/certificates/1763328692380.jpeg"
    },
    {
        name: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02",
        issuer: "Udemy",
        date: "Aug 12, 2024",
        hours: "15 total hours",
        image: "/certificates/1770172499345.jpeg"
    },
    {
        name: "Standard 9.2 - Part 1 Foundation Enterprise Architect Course",
        issuer: "Udemy",
        date: "March 29, 2026",
        hours: "2.5 total hours",
        image: "/certificates/1774752042273.jpeg"
    },
    {
        name: "The EU AI Act Compliance Masterclass 2026",
        issuer: "Udemy",
        date: "April 11, 2026",
        hours: "2 total hours",
        image: "/certificates/1776390534555.jpeg"
    },
    {
        name: "Financial Crime: Processes & Technology - Masterclass",
        issuer: "Udemy",
        date: "April 26, 2026",
        hours: "10 total hours",
        image: "/certificates/1777155947348.jpeg"
    },
    {
        name: "Fraud Detection in Python",
        issuer: "Udemy",
        date: "May 4, 2026",
        hours: "2 total hours",
        image: "/certificates/1777858798003.jpeg"
    }
];
const BLOGS = [
    {
        title: "Mastering Angular Signals: A Beginner's Guide to Reactive State Management",
        date: "April 30, 2026",
        tags: [
            "Angular",
            "Signals",
            "State Management"
        ],
        excerpt: "Dive into Angular Signals — the new reactive primitive that simplifies state management. This beginner-friendly guide covers how signals work, why they outperform traditional change detection, and practical examples to build more predictable Angular apps.",
        url: "https://medium.com/@rexShailJs/mastering-angular-signals-a-beginners-guide-to-reactive-state-management-8c946dbf626c",
        readTime: "8 min read",
        color: "#e65c00"
    },
    {
        title: "The Full Stack Paradox: Jack of All Trades, Master of None?",
        date: "May 3, 2026",
        tags: [
            "Career",
            "Full Stack",
            "Leadership"
        ],
        excerpt: "Full-stack engineers are valuable, but expecting them to be experts in every layer is unrealistic. Specialists exist for a reason. This post explores the balance between depth and breadth in modern engineering teams.",
        url: "https://medium.com/@rexShailJs/the-full-stack-paradox-jack-of-all-trades-master-of-none-94845e1064da",
        readTime: "3 min read",
        color: "#1565c0"
    },
    {
        title: "From Signals to AI: How Angular Quietly Became Cool Again (v16 to v21)",
        date: "May 3, 2026",
        tags: [
            "Career",
            "Full Stack",
            "Leadership"
        ],
        excerpt: "I will be honest there was a stretch where Angular felt like it was losing the plot. While React is winning hearts with their simplicity and Claude (Claude AI responses are in react.), Angular was still making you set up NgModules just to sneeze. It felt heavy. Ceremonial. Like framework bureaucracy.",
        url: "https://medium.com/@rexShailJs/from-signals-to-ai-how-angular-quietly-became-cool-again-v16-to-v21-7a23733df734",
        readTime: "4 min read",
        color: "#1565c0"
    },
    {
        title: "Mastering Angular Signal Effects: A Practical Guide with a Todo App",
        date: "May 23, 2026",
        tags: [
            "Angular",
            "Signals",
            "Effects"
        ],
        excerpt: "A practical walkthrough of Angular signal effects using a todo app, showing when effects are useful, how they react to state changes, and how to keep reactive logic clear in real-world Angular code.",
        url: "https://medium.com/@rexShailJs/mastering-angular-signal-effects-a-practical-guide-with-a-todo-app-0734038350f8?postPublishedType=initial",
        readTime: "5 min read",
        color: "#e65c00"
    }
];
const INTERESTS = [
    "Applied ML in Finance",
    "Responsible AI & Explainability",
    "LLM Applications for Internal Tools",
    "MLOps & Model Observability",
    "Distributed Systems",
    "Technical Mentorship"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrollTo",
    ()=>scrollTo,
    "useInView",
    ()=>useInView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function scrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 68;
    window.scrollTo({
        top: y,
        behavior: "smooth"
    });
}
function useInView(threshold = 0.1) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const obs = new IntersectionObserver({
                "useInView.useEffect": ([entry])=>{
                    if (entry.isIntersecting) setInView(true);
                }
            }["useInView.useEffect"], {
                threshold
            });
            if (ref.current) obs.observe(ref.current);
            return ({
                "useInView.useEffect": ()=>obs.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return [
        ref,
        inView
    ];
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Navbar({ page, setPage, theme, toggleTheme }) {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [themeDropdownOpen, setThemeDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 20);
                    if (page !== "home") return;
                    const offset = 100;
                    for(let i = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV"].length - 1; i >= 0; i -= 1){
                        const el = document.getElementById(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV"][i].id);
                        if (el && el.getBoundingClientRect().top <= offset) {
                            setActive(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV"][i].id);
                            return;
                        }
                    }
                    setActive("home");
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        page
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            function handleClickOutside(event) {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setThemeDropdownOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Navbar.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const handleNav = (item)=>{
        setMenuOpen(false);
        if (item.id === "blogs") {
            setPage("blogs");
            setActive("blogs");
            window.scrollTo({
                top: 0
            });
            return;
        }
        if (page !== "home") {
            setPage("home");
            setTimeout(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollTo"])(item.id), 100);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollTo"])(item.id);
        }
        setActive(item.id);
    };
    const getThemeIcon = ()=>{
        if (theme === "dark") return "🌙";
        if (theme === "light") return "☀️";
        return "💻";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `sticky top-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${scrolled ? "bg-nav-bg/95 border-accent-purple/15 shadow-sm py-3" : "bg-nav-bg/75 border-card-border py-4"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col cursor-pointer",
                        onClick: ()=>handleNav({
                                id: "home"
                            }),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display text-xl font-black tracking-tight bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent",
                                children: "rexShailJs"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans text-[10px] text-text-muted tracking-widest uppercase font-bold mt-0.5",
                                children: "FinTech · AI/ML · Full Stack"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-1",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>handleNav(item),
                                className: `px-3 py-1.5 rounded-full font-display text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${active === item.id ? "bg-accent-purple/10 text-accent-purple" : "text-foreground/80 hover:text-accent-purple hover:bg-card-border"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    item.label
                                ]
                            }, item.id, true, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                ref: dropdownRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setThemeDropdownOpen(!themeDropdownOpen),
                                        className: "p-2.5 rounded-full glass-panel hover:bg-accent-purple/10 flex items-center justify-center text-sm font-semibold shadow-none border border-card-border",
                                        "aria-label": "Toggle theme",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base leading-none",
                                            children: getThemeIcon()
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    themeDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 mt-2.5 w-36 rounded-2xl glass-panel shadow-lg bg-card-bg border border-card-border p-1.5 flex flex-col gap-1 z-50",
                                        children: [
                                            {
                                                id: "light",
                                                label: "Light",
                                                icon: "☀️"
                                            },
                                            {
                                                id: "dark",
                                                label: "Dark",
                                                icon: "🌙"
                                            },
                                            {
                                                id: "system",
                                                label: "System",
                                                icon: "💻"
                                            }
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    toggleTheme(t.id);
                                                    setThemeDropdownOpen(false);
                                                },
                                                className: `w-full text-left px-3 py-2 rounded-xl text-xs font-semibold font-display flex items-center gap-2 transition-all duration-150 ${theme === t.id ? "bg-accent-purple/10 text-accent-purple" : "hover:bg-accent-purple/5 text-foreground/80"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 137,
                                                        columnNumber: 21
                                                    }, this),
                                                    t.label
                                                ]
                                            }, t.id, true, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setMenuOpen(!menuOpen),
                                className: "p-2.5 rounded-full md:hidden hover:bg-accent-purple/10 text-foreground flex items-center justify-center border border-card-border",
                                "aria-label": "Toggle menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2.5",
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2.5",
                                        d: "M4 6h16M4 12h16m-7 6h7"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 162,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden border-t border-card-border mt-3 bg-nav-bg/95 backdrop-blur-md px-6 py-4 flex flex-col gap-2 shadow-inner",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>handleNav(item),
                        className: `w-full text-left px-4 py-2.5 rounded-xl font-display text-sm font-semibold flex items-center gap-2.5 transition-all ${active === item.id ? "bg-accent-purple/10 text-accent-purple" : "text-foreground/80 hover:text-accent-purple hover:bg-card-border"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 183,
                                columnNumber: 15
                            }, this),
                            item.label
                        ]
                    }, item.id, true, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 173,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 171,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.jsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(Navbar, "lP1znB4EWQV6kyZgqCrJLB2opco=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const CONTACTS = [
    {
        icon: "📧",
        label: "Email",
        href: "mailto:rexShailJs@gmail.com",
        val: "rexShailJs@gmail.com"
    },
    {
        icon: "📞",
        label: "Phone",
        href: "tel:++91 956 074 6307",
        val: "+91 +91 956 074 6307"
    },
    {
        icon: "📍",
        label: "Location",
        href: null,
        val: "Chandigarh, India"
    },
    {
        icon: "💻",
        label: "GitHub",
        href: "https://github.com/rexShailJs",
        val: "github.com/rexShailJs"
    },
    {
        icon: "🔗",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/rexShailJs/",
        val: "linkedin.com/in/rexShailJs"
    },
    {
        icon: "🐦",
        label: "Twitter",
        href: "https://twitter.com/rexShailJs",
        val: "@rexShailJs"
    }
];
const ROLES = [
    "Applied ML Engineer",
    "AI Systems Builder",
    "FinTech AI Practitioner",
    "Responsible AI Thinker"
];
function Hero({ setPage }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [roleIndex, setRoleIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [displayText, setDisplayText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Typing effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            let timer;
            const currentFullText = ROLES[roleIndex];
            if (isDeleting) {
                timer = setTimeout({
                    "Hero.useEffect": ()=>{
                        setDisplayText(currentFullText.substring(0, displayText.length - 1));
                    }
                }["Hero.useEffect"], 35);
            } else {
                timer = setTimeout({
                    "Hero.useEffect": ()=>{
                        setDisplayText(currentFullText.substring(0, displayText.length + 1));
                    }
                }["Hero.useEffect"], 75);
            }
            if (!isDeleting && displayText === currentFullText) {
                timer = setTimeout({
                    "Hero.useEffect": ()=>setIsDeleting(true)
                }["Hero.useEffect"], 2000);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setRoleIndex({
                    "Hero.useEffect": (prev)=>(prev + 1) % ROLES.length
                }["Hero.useEffect"]);
            }
            return ({
                "Hero.useEffect": ()=>clearTimeout(timer)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        displayText,
        isDeleting,
        roleIndex
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            setMounted(true);
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "relative overflow-hidden py-16 md:py-24 px-6 md:px-12 border-b border-card-border bg-gradient-mesh",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_center,var(--card-border)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/Hero.jsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex-1 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/10 px-3.5 py-1.5 mb-6 animate-pulse-soft",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-display text-[10px] tracking-widest uppercase font-black text-emerald-600 dark:text-emerald-400",
                                        children: "Open to AI / ML / Platform Roles"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-4",
                                children: [
                                    "Hi, I'm",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent",
                                        children: "Shailender Singh"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-display text-xl sm:text-2xl font-bold text-accent-purple min-h-[36px] flex items-center mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: displayText
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-0.5 h-6 bg-accent-purple ml-1 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-sans text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed mb-8",
                                children: "I’m a hands-on engineer building AI and ML systems that work in the real world. My work sits at the intersection of production software, model-driven decisioning, and trustworthy automation in regulated industries."
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2.5 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3.5 py-1.5 text-xs font-semibold rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400",
                                        children: "🧠 Applied ML in Production"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3.5 py-1.5 text-xs font-semibold rounded-full border border-accent-purple/20 bg-accent-purple/5 text-accent-purple dark:text-accent-purple",
                                        children: "🛡️ Responsible AI & Governance"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3.5 py-1.5 text-xs font-semibold rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-600 dark:text-cyan-400",
                                        children: "☁️ MLOps & Cloud Systems"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3.5 py-1.5 text-xs font-semibold rounded-full border border-accent-pink/20 bg-accent-pink/5 text-accent-pink dark:text-accent-pink",
                                        children: "📈 High-Stakes Decisioning Work"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-4 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollTo"])("experience"),
                                        className: "px-6 py-3 rounded-full bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-purple hover:to-accent-purple text-white font-display text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200",
                                        children: "View Experience"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setPage("blogs");
                                            window.scrollTo({
                                                top: 0
                                            });
                                        },
                                        className: "px-6 py-3 rounded-full border border-card-border hover:border-accent-purple/40 hover:bg-accent-purple/5 text-foreground/80 hover:text-accent-purple font-display text-sm font-bold transition-all duration-200",
                                        children: "Read the Blog"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-full lg:w-[440px] transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl glass-panel bg-card-bg overflow-hidden border border-card-border shadow-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-foreground/5 dark:bg-white/5 px-4 py-3 border-b border-card-border flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3.5 h-3.5 rounded-full bg-rose-500/80 inline-block"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 142,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3.5 h-3.5 rounded-full bg-amber-400/80 inline-block"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 143,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3.5 h-3.5 rounded-full bg-emerald-500/80 inline-block"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 144,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Hero.jsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-xs text-text-muted",
                                                children: "shailender.json"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.jsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.jsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 font-mono text-sm leading-relaxed overflow-x-auto text-foreground/90 bg-card-bg/25",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-accent-pink",
                                                children: "const"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.jsx",
                                                lineNumber: 152,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-foreground",
                                                children: "engineer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.jsx",
                                                lineNumber: 152,
                                                columnNumber: 63
                                            }, this),
                                            "= {",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pl-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-text-muted",
                                                        children: "name:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 154,
                                                        columnNumber: 17
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-accent-purple",
                                                        children: '"Shailender Singh"'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 154,
                                                        columnNumber: 64
                                                    }, this),
                                                    ",",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 155,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-text-muted",
                                                        children: "stack:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 156,
                                                        columnNumber: 17
                                                    }, this),
                                                    " [",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pl-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-emerald-500",
                                                                children: '"Python"'
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Hero.jsx",
                                                                lineNumber: 158,
                                                                columnNumber: 19
                                                            }, this),
                                                            ", ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-emerald-500",
                                                                children: '"FastAPI"'
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Hero.jsx",
                                                                lineNumber: 158,
                                                                columnNumber: 71
                                                            }, this),
                                                            ",",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/components/Hero.jsx",
                                                                lineNumber: 159,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-emerald-500",
                                                                children: '"LLMs"'
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Hero.jsx",
                                                                lineNumber: 160,
                                                                columnNumber: 19
                                                            }, this),
                                                            ", ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-emerald-500",
                                                                children: '"AWS"'
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Hero.jsx",
                                                                lineNumber: 160,
                                                                columnNumber: 69
                                                            }, this),
                                                            ",",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/components/Hero.jsx",
                                                                lineNumber: 161,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-emerald-500",
                                                                children: '"MLOps"'
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Hero.jsx",
                                                                lineNumber: 162,
                                                                columnNumber: 19
                                                            }, this),
                                                            ", ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-emerald-500",
                                                                children: '"Observability"'
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Hero.jsx",
                                                                lineNumber: 162,
                                                                columnNumber: 70
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 157,
                                                        columnNumber: 17
                                                    }, this),
                                                    "],",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-text-muted",
                                                        children: "focus:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 166,
                                                        columnNumber: 17
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-accent-purple",
                                                        children: '"Applied ML · Responsible AI · FinTech Systems"'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 166,
                                                        columnNumber: 65
                                                    }, this),
                                                    ",",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 167,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-text-muted",
                                                        children: "currentWork:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 168,
                                                        columnNumber: 17
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-accent-pink",
                                                        children: '"Decisioning, automation, and reliable scale"'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 168,
                                                        columnNumber: 71
                                                    }, this),
                                                    ",",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 169,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-text-muted",
                                                        children: "interest:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 170,
                                                        columnNumber: 17
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-accent-pink",
                                                        children: '"Production-grade AI with clear impact"'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 170,
                                                        columnNumber: 68
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Hero.jsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this),
                                            "};"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 grid grid-cols-2 gap-3.5",
                                children: CONTACTS.map((c)=>c.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: c.href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "p-3 rounded-xl border border-card-border hover:border-accent-purple/30 bg-card-bg/20 hover:bg-accent-purple/5 flex items-center gap-3 group transition-all duration-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg group-hover:scale-110 transition-transform duration-200",
                                                children: c.icon
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.jsx",
                                                lineNumber: 187,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-sans text-text-muted font-bold uppercase tracking-wider",
                                                        children: c.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 189,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-sans text-foreground/80 truncate",
                                                        children: c.val
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 190,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Hero.jsx",
                                                lineNumber: 188,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, c.label, true, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 rounded-xl border border-card-border bg-card-bg/20 flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg",
                                                children: c.icon
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.jsx",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-sans text-text-muted font-bold uppercase tracking-wider",
                                                        children: c.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 200,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-sans text-foreground/80 truncate",
                                                        children: c.val
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 201,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Hero.jsx",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, c.label, true, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 194,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.jsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.jsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.jsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(Hero, "pQzsTfBfD3ReK6pS/PHEkOjkGws=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SectionHeader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SectionHeader({ tag, title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-10 max-w-3xl text-left",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-display text-xs tracking-widest uppercase font-black text-accent-purple mb-2.5 block",
                children: tag
            }, void 0, false, {
                fileName: "[project]/components/SectionHeader.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-5 flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-none",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/SectionHeader.jsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex-1 min-w-[80px] h-0.5 bg-gradient-to-r from-accent-purple/60 to-accent-pink/5 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/components/SectionHeader.jsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SectionHeader.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SectionHeader.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = SectionHeader;
var _c;
__turbopack_context__.k.register(_c, "SectionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Skills.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionHeader.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Skills() {
    _s();
    const [ref, inView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        ref: ref,
        className: "py-16 md:py-24 border-b border-card-border scroll-mt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    tag: "🧠 AI & Systems",
                    title: "AI/ML Engineering & Platform Work"
                }, void 0, false, {
                    fileName: "[project]/components/Skills.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKILLS"].map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `glass-panel p-6 rounded-2xl border border-card-border shadow-sm flex flex-col transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                            style: {
                                transitionDelay: `${index * 100}ms`,
                                borderLeft: `4px solid ${skill.color}`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl leading-none",
                                            children: skill.icon
                                        }, void 0, false, {
                                            fileName: "[project]/components/Skills.jsx",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: skill.cat
                                        }, void 0, false, {
                                            fileName: "[project]/components/Skills.jsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Skills.jsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 mt-auto",
                                    children: skill.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-foreground/5 dark:bg-white/5 border border-card-border hover:border-accent-purple/35 text-foreground/80 hover:text-accent-purple font-sans font-medium px-3 py-1.5 rounded-xl text-xs transition-all duration-200",
                                            children: item
                                        }, item, false, {
                                            fileName: "[project]/components/Skills.jsx",
                                            lineNumber: 38,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Skills.jsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, skill.cat, true, {
                            fileName: "[project]/components/Skills.jsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Skills.jsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Skills.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Skills.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(Skills, "GpcLnEGLCRT/LcXgsVwPMCbjDPg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Skills;
var _c;
__turbopack_context__.k.register(_c, "Skills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Experience.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionHeader.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function Experience() {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [ref, inView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        ref: ref,
        className: "py-16 md:py-24 border-b border-card-border bg-foreground/[0.01] dark:bg-white/[0.01] scroll-mt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    tag: "💼 Applied Work",
                    title: "Experience in AI, Systems & Delivery"
                }, void 0, false, {
                    fileName: "[project]/components/Experience.jsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row gap-8 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row md:flex-col overflow-x-auto md:overflow-visible w-full md:w-64 gap-2 pb-4 md:pb-0 scrollbar-none flex-shrink-0",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPERIENCE"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActiveIndex(index),
                                    className: `flex-shrink-0 md:w-full text-left px-5 py-4 rounded-xl border-l-4 transition-all duration-200 ${activeIndex === index ? "bg-accent-purple/10 text-accent-purple border-accent-purple font-bold shadow-sm" : "border-card-border bg-card-bg/25 text-text-muted hover:text-foreground hover:bg-foreground/5 dark:hover:bg-white/5 font-semibold"}`,
                                    style: {
                                        opacity: inView ? 1 : 0,
                                        transform: inView ? "translateY(0)" : "translateY(16px)",
                                        transitionDelay: `${index * 100}ms`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-display text-[10px] tracking-wider uppercase font-black block mb-1",
                                            children: item.period.split("–")[0].trim()
                                        }, void 0, false, {
                                            fileName: "[project]/components/Experience.jsx",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-display text-sm block truncate",
                                            children: item.company
                                        }, void 0, false, {
                                            fileName: "[project]/components/Experience.jsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-sans text-[11px] text-text-muted font-medium block mt-0.5",
                                            children: item.location
                                        }, void 0, false, {
                                            fileName: "[project]/components/Experience.jsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.company, true, {
                                    fileName: "[project]/components/Experience.jsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Experience.jsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 w-full",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPERIENCE"].map((item, index)=>index !== activeIndex ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-panel p-6 md:p-8 rounded-2xl border border-card-border shadow-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-card-border pb-5 mb-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-display text-2xl font-black text-foreground mb-1.5",
                                                            children: item.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Experience.jsx",
                                                            lineNumber: 60,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-display text-sm font-bold text-accent-purple",
                                                            children: [
                                                                item.company,
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-text-muted font-normal",
                                                                    children: [
                                                                        "· ",
                                                                        item.location
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Experience.jsx",
                                                                    lineNumber: 62,
                                                                    columnNumber: 38
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Experience.jsx",
                                                            lineNumber: 61,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Experience.jsx",
                                                    lineNumber: 59,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-block px-3.5 py-1.5 rounded-full bg-accent-pink/10 border border-accent-pink/20 text-accent-pink text-xs font-bold font-display self-start md:self-center shadow-sm",
                                                    children: item.period
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Experience.jsx",
                                                    lineNumber: 65,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Experience.jsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this),
                                        item.sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-sans italic text-text-muted text-sm border-l-2 border-accent-purple pl-4 my-5 leading-relaxed",
                                            children: item.sub
                                        }, void 0, false, {
                                            fileName: "[project]/components/Experience.jsx",
                                            lineNumber: 72,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-4",
                                            children: item.points.map((point, pointIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex gap-3.5 items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-accent-purple text-base leading-none select-none mt-1",
                                                            children: "▸"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Experience.jsx",
                                                            lineNumber: 81,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-sans text-sm md:text-[15px] leading-relaxed text-text-muted",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "font-display font-extrabold text-foreground text-sm block sm:inline mr-1",
                                                                    children: point.bold
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Experience.jsx",
                                                                    lineNumber: 83,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " ",
                                                                point.rest
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Experience.jsx",
                                                            lineNumber: 82,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, pointIndex, true, {
                                                    fileName: "[project]/components/Experience.jsx",
                                                    lineNumber: 80,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Experience.jsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.company, true, {
                                    fileName: "[project]/components/Experience.jsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Experience.jsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Experience.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Experience.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Experience.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(Experience, "wyqHWHKfgcv8KsUFaG9a1YxMRnQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Experience;
var _c;
__turbopack_context__.k.register(_c, "Experience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Achievements.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Achievements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionHeader.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Achievements() {
    _s();
    const [ref, inView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "achievements",
        ref: ref,
        className: "py-16 md:py-24 border-b border-card-border scroll-mt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    tag: "🏆 Impact",
                    title: "Key Achievements"
                }, void 0, false, {
                    fileName: "[project]/components/Achievements.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACHIEVEMENTS"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `glass-panel p-6 rounded-2xl border border-card-border shadow-sm flex flex-col items-start border-l-4 border-accent-purple transition-all duration-700 hover:scale-[1.02] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                            style: {
                                transitionDelay: `${index * 80}ms`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl mb-4 bg-accent-purple/10 w-12 h-12 rounded-xl flex items-center justify-center select-none text-accent-purple",
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/components/Achievements.jsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-display text-3xl md:text-4xl font-black bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent leading-none",
                                            children: item.metric
                                        }, void 0, false, {
                                            fileName: "[project]/components/Achievements.jsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-display text-[10px] tracking-wider uppercase font-black text-text-muted mt-1.5",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/Achievements.jsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Achievements.jsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans text-sm text-text-muted leading-relaxed mt-2",
                                    children: item.desc
                                }, void 0, false, {
                                    fileName: "[project]/components/Achievements.jsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.label, true, {
                            fileName: "[project]/components/Achievements.jsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Achievements.jsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Achievements.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Achievements.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(Achievements, "GpcLnEGLCRT/LcXgsVwPMCbjDPg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Achievements;
var _c;
__turbopack_context__.k.register(_c, "Achievements");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Certifications.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Certifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionHeader.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Certifications() {
    _s();
    const [ref, inView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "certifications",
        ref: ref,
        className: "py-16 md:py-24 border-b border-card-border bg-foreground/[0.01] dark:bg-white/[0.01] scroll-mt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    tag: "� Learning",
                    title: "Certifications & Continued Study"
                }, void 0, false, {
                    fileName: "[project]/components/Certifications.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-16",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CERTS"].map((cert, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `glass-panel p-6 rounded-2xl border border-card-border shadow-sm relative overflow-hidden flex flex-col transition-all duration-700 hover:scale-[1.01] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                            style: {
                                transitionDelay: `${index * 120}ms`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 left-0 right-0 h-[3px]",
                                    style: {
                                        background: `linear-gradient(90deg, ${cert.accentColor}, transparent)`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Certifications.jsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-xl border flex items-center justify-center text-2xl flex-shrink-0",
                                            style: {
                                                backgroundColor: `${cert.accentColor}12`,
                                                borderColor: `${cert.accentColor}25`
                                            },
                                            children: cert.icon
                                        }, void 0, false, {
                                            fileName: "[project]/components/Certifications.jsx",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-display text-[10px] tracking-wider uppercase font-black",
                                                    style: {
                                                        color: cert.accentColor
                                                    },
                                                    children: cert.issuer
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Certifications.jsx",
                                                    lineNumber: 49,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-block mt-0.5 px-2 py-0.5 rounded-full bg-foreground/5 dark:bg-white/5 border border-card-border text-text-muted text-[10px] font-bold font-display",
                                                    children: cert.level
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Certifications.jsx",
                                                    lineNumber: 55,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Certifications.jsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Certifications.jsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-lg font-bold text-foreground mb-4 leading-snug",
                                    children: cert.name
                                }, void 0, false, {
                                    fileName: "[project]/components/Certifications.jsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-1.5 mt-auto",
                                    children: cert.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-sans text-[10px] md:text-[11px] font-semibold border px-2.5 py-1 rounded-lg",
                                            style: {
                                                color: cert.accentColor,
                                                backgroundColor: `${cert.accentColor}08`,
                                                borderColor: `${cert.accentColor}18`
                                            },
                                            children: tag
                                        }, tag, false, {
                                            fileName: "[project]/components/Certifications.jsx",
                                            lineNumber: 69,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Certifications.jsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, cert.name, true, {
                            fileName: "[project]/components/Certifications.jsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Certifications.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-display text-xs tracking-widest uppercase font-black text-text-muted mb-6",
                            children: "Course certificates from public assets"
                        }, void 0, false, {
                            fileName: "[project]/components/Certifications.jsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COURSE_CERTS"].map((cert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: cert.image,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "group block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-panel rounded-2xl overflow-hidden border border-card-border shadow-sm flex flex-col h-full bg-card-bg/25",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "overflow-hidden border-b border-card-border h-44",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: cert.image,
                                                    alt: cert.name,
                                                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Certifications.jsx",
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Certifications.jsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-5 flex flex-col flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-display text-[9px] tracking-wider uppercase font-black text-text-muted mb-1",
                                                        children: cert.issuer
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Certifications.jsx",
                                                        lineNumber: 110,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-display text-sm font-bold text-foreground mb-3 leading-snug line-clamp-2",
                                                        children: cert.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Certifications.jsx",
                                                        lineNumber: 113,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-sans text-xs text-text-muted mt-auto",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block mb-0.5",
                                                                children: [
                                                                    "📅 ",
                                                                    cert.date
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Certifications.jsx",
                                                                lineNumber: 117,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block font-medium",
                                                                children: [
                                                                    "⏱️ ",
                                                                    cert.hours
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Certifications.jsx",
                                                                lineNumber: 118,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Certifications.jsx",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Certifications.jsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Certifications.jsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this)
                                }, cert.name, false, {
                                    fileName: "[project]/components/Certifications.jsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Certifications.jsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Certifications.jsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Certifications.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Certifications.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(Certifications, "GpcLnEGLCRT/LcXgsVwPMCbjDPg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Certifications;
var _c;
__turbopack_context__.k.register(_c, "Certifications");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Background.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Background
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionHeader.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Background() {
    _s();
    const [ref, inView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "background",
        ref: ref,
        className: "py-16 md:py-24 border-b border-card-border scroll-mt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    tag: "🔬 Focus",
                    title: "Education, Learning & Current Interests"
                }, void 0, false, {
                    fileName: "[project]/components/Background.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `grid grid-cols-1 lg:grid-cols-3 gap-6 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass-panel p-6 md:p-8 rounded-2xl border border-card-border shadow-sm flex flex-col items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display font-bold text-lg text-accent-purple mb-5 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl",
                                            children: "🏫"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Background.jsx",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, this),
                                        " Education"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Background.jsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-display text-lg font-bold text-foreground mb-1 leading-snug",
                                    children: "Bachelor of Computer Science & Technology"
                                }, void 0, false, {
                                    fileName: "[project]/components/Background.jsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans text-sm text-text-muted mb-5",
                                    children: "Himachal Pradesh University, Shimla, India"
                                }, void 0, false, {
                                    fileName: "[project]/components/Background.jsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block px-3.5 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-xs font-bold font-display shadow-sm",
                                    children: "Graduated: July 2011"
                                }, void 0, false, {
                                    fileName: "[project]/components/Background.jsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Background.jsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass-panel p-6 md:p-8 rounded-2xl border border-card-border shadow-sm flex flex-col items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display font-bold text-lg text-accent-purple mb-5 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl",
                                            children: "💡"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Background.jsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this),
                                        " Current Interests"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Background.jsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INTERESTS"].map((interest)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-foreground/5 dark:bg-white/5 border border-card-border hover:border-accent-purple/35 text-foreground/80 hover:text-accent-purple font-sans font-medium px-3 py-1.5 rounded-xl text-xs transition-all duration-200",
                                            children: interest
                                        }, interest, false, {
                                            fileName: "[project]/components/Background.jsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Background.jsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Background.jsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass-panel p-6 md:p-8 rounded-2xl border border-card-border shadow-sm flex flex-col justify-between",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display font-bold text-lg text-accent-purple mb-6",
                                        children: "📊 At a Glance"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Background.jsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            [
                                                "12+",
                                                "Years of experience"
                                            ],
                                            [
                                                "99%",
                                                "Automated test coverage"
                                            ],
                                            [
                                                "$40K",
                                                "Monthly cloud savings achieved"
                                            ],
                                            [
                                                "3",
                                                "Continents worked across"
                                            ]
                                        ].map(([value, description], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between py-2 border-b border-card-border/60 last:border-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-display text-2xl font-black bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent leading-none",
                                                        children: value
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Background.jsx",
                                                        lineNumber: 72,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-sans text-xs md:text-sm text-text-muted text-right max-w-[170px] leading-snug",
                                                        children: description
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Background.jsx",
                                                        lineNumber: 75,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, value, true, {
                                                fileName: "[project]/components/Background.jsx",
                                                lineNumber: 68,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Background.jsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Background.jsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Background.jsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Background.jsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Background.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Background.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(Background, "GpcLnEGLCRT/LcXgsVwPMCbjDPg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Background;
var _c;
__turbopack_context__.k.register(_c, "Background");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/BlogPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
// Takaway summaries to render inside the interactive modal
const BLOG_SUMMARIES = {
    "Mastering Angular Signals: A Beginner's Guide to Reactive State Management": {
        takeaways: [
            "Signals are reactive primitives that track state changes and automatically notify dependencies.",
            "They eliminate Zone.js overhead by triggering fine-grained, localized DOM updates rather than checking the entire component tree.",
            "Computed signals automatically track nested dependencies and cache values, re-evaluating only when needed."
        ],
        code: `// Define a reactive state primitive
const count = signal(0);
const double = computed(() => count() * 2);

// side-effect updates automatically
effect(() => console.log('Current value is:', count()));

count.set(5); // Logs: Current value is: 5`
    },
    "The Full Stack Paradox: Jack of All Trades, Master of None?": {
        takeaways: [
            "While full-stack generalists offer broad versatility, expecting mastery in both frontend and backend domains can lead to cognitive burnout.",
            "The complexity of modern build chains, security setups, and database layers has expanded, making true generalist expertises rarer.",
            "High-performing tech teams balance T-shaped generalists with focused domain specialists rather than relying on generalists exclusively."
        ],
        quote: "A generalist is critical for connecting dots, but specialists are essential for drilling holes. Respect both boundaries to scale software engineering teams."
    },
    "From Signals to AI: How Angular Quietly Became Cool Again (v16 to v21)": {
        takeaways: [
            "Angular underwent a complete renaissance by removing modules (NgModule) in favor of lightweight Standalone Components.",
            "Reactive Signals and built-in @defer blocks enabled high-performance dynamic lazy-loading out of the box.",
            "Migration from custom tools to standard build tools like Vite, Esbuild, and Hydration systems reduced overall load-times."
        ],
        quote: "Angular quietly shed its bureaucratic reputation, transforming into one of the leanest, most reactive frameworks in the modern web ecosystem."
    },
    "Mastering Angular Signal Effects: A Practical Guide with a Todo App": {
        takeaways: [
            "Effects are side-effect handlers that execute functions automatically when any dependent signals change.",
            "They are best utilized for DOM operations, writing to localStorage cache, or pushing tracking logs.",
            "Writing state updates directly inside effects is a major anti-pattern, often causing infinite compilation digest loops."
        ],
        code: `// Sync todos state to local storage
const todos = signal(JSON.parse(localStorage.getItem('todos') || '[]'));

effect(() => {
  localStorage.setItem('todos', JSON.stringify(todos()));
});`
    }
};
function BlogPage({ setPage }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Interactive search & filter states
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedTag, setSelectedTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    // React state claps dictionary
    const [claps, setClaps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [clappingPost, setClappingPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Takeaway Summary modal state
    const [activeSummary, setActiveSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlogPage.useEffect": ()=>{
            setMounted(true);
            // Initialize clap counts locally
            const initialClaps = {};
            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOGS"].forEach({
                "BlogPage.useEffect": (b)=>{
                    initialClaps[b.title] = Math.floor(Math.random() * 20) + 5;
                }
            }["BlogPage.useEffect"]);
            setClaps(initialClaps);
        }
    }["BlogPage.useEffect"], []);
    // Filter logic
    const filteredBlogs = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOGS"].filter((blog)=>{
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = selectedTag === "All" || blog.tags.includes(selectedTag);
        return matchesSearch && matchesTag;
    });
    // Extract all unique tags
    const allTags = [
        "All",
        ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOGS"].flatMap((b)=>b.tags))
    ];
    const handleClap = (title)=>{
        setClaps((prev)=>({
                ...prev,
                [title]: (prev[title] || 0) + 1
            }));
        setClappingPost(title);
        setTimeout(()=>setClappingPost(null), 300);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden py-12 md:py-16 px-6 md:px-12 border-b border-card-border bg-gradient-mesh",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[radial-gradient(circle_at_center,var(--card-border)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/components/BlogPage.jsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display text-xs tracking-widest uppercase font-black text-accent-purple mb-2",
                                        children: "✍️ Blog & Insights"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BlogPage.jsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 leading-none",
                                        children: [
                                            "Writings on Tech,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/BlogPage.jsx",
                                                lineNumber: 111,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent",
                                                children: "Leadership & Engineering"
                                            }, void 0, false, {
                                                fileName: "[project]/components/BlogPage.jsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BlogPage.jsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-sans text-sm md:text-base text-text-muted max-w-xl leading-relaxed",
                                        children: "Explore real-time filtered articles, dynamic summary snippets, and reactions. Originally published on Medium."
                                    }, void 0, false, {
                                        fileName: "[project]/components/BlogPage.jsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BlogPage.jsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-panel bg-card-bg/25 border border-card-border rounded-2xl p-5 flex flex-col gap-3 min-w-[260px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setPage("home");
                                            window.scrollTo({
                                                top: 0
                                            });
                                        },
                                        className: "px-5 py-2.5 rounded-full border border-accent-purple/35 text-accent-purple hover:bg-accent-purple/5 font-display text-xs font-bold transition-all flex items-center gap-2 justify-center",
                                        children: "← Back to Portfolio"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BlogPage.jsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-sans text-[11px] text-text-muted mt-2 border-t border-card-border/60 pt-3 space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "📝 Medium: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground/90 font-medium",
                                                        children: "@rexShailJs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BlogPage.jsx",
                                                        lineNumber: 133,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BlogPage.jsx",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "📧 Email: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground/90 font-medium",
                                                        children: "rexShailJs@gmail.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BlogPage.jsx",
                                                        lineNumber: 134,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BlogPage.jsx",
                                                lineNumber: 134,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/BlogPage.jsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BlogPage.jsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BlogPage.jsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BlogPage.jsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-4xl mx-auto px-6 pt-10 flex flex-col md:flex-row gap-5 justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full md:w-80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search articles...",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                className: "w-full px-4 py-2.5 pl-10 rounded-xl border border-card-border bg-card-bg/30 text-foreground placeholder-text-muted focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/30 outline-none text-sm transition-all"
                            }, void 0, false, {
                                fileName: "[project]/components/BlogPage.jsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-3.5 top-3 text-text-muted select-none",
                                children: "🔍"
                            }, void 0, false, {
                                fileName: "[project]/components/BlogPage.jsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSearchQuery(""),
                                className: "absolute right-3.5 top-2.5 text-text-muted hover:text-foreground text-sm",
                                title: "Clear search",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/components/BlogPage.jsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BlogPage.jsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 justify-center w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-none",
                        children: allTags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSelectedTag(tag),
                                className: `px-3 py-1.5 rounded-xl text-xs font-bold font-display transition-all duration-200 ${selectedTag === tag ? "bg-accent-purple text-white shadow-sm" : "bg-foreground/5 dark:bg-white/5 border border-card-border text-foreground/75 hover:border-accent-purple/35"}`,
                                children: tag
                            }, tag, false, {
                                fileName: "[project]/components/BlogPage.jsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/BlogPage.jsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BlogPage.jsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-6 py-10 flex flex-col gap-6",
                children: [
                    filteredBlogs.length > 0 ? filteredBlogs.map((blog)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass-panel p-6 md:p-8 rounded-2xl border border-card-border shadow-sm relative overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.01] bg-card-bg/25",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 left-0 right-0 h-[3px]",
                                    style: {
                                        background: `linear-gradient(90deg, ${blog.color}, transparent)`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogPage.jsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-xl md:text-2xl font-bold text-foreground mb-3 leading-snug",
                                    children: blog.title
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogPage.jsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-x-4 gap-y-2 mb-4 items-center text-xs text-text-muted font-sans font-medium",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "📅 ",
                                                blog.date
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BlogPage.jsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline text-card-border",
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/components/BlogPage.jsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "⏱️ ",
                                                blog.readTime
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BlogPage.jsx",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-1.5 ml-1",
                                            children: blog.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedTag(tag),
                                                    className: "font-sans text-[10px] font-semibold border px-2 py-0.5 rounded-lg hover:brightness-110 transition-all",
                                                    style: {
                                                        color: blog.color,
                                                        backgroundColor: `${blog.color}08`,
                                                        borderColor: `${blog.color}18`
                                                    },
                                                    children: tag
                                                }, tag, false, {
                                                    fileName: "[project]/components/BlogPage.jsx",
                                                    lineNumber: 206,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/BlogPage.jsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BlogPage.jsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans text-sm md:text-[15px] text-text-muted mb-6 leading-relaxed",
                                    children: blog.excerpt
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogPage.jsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center justify-between gap-4 mt-auto border-t border-card-border/60 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: blog.url,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full border font-display text-xs font-bold transition-all duration-200",
                                                    style: {
                                                        color: blog.color,
                                                        borderColor: `${blog.color}50`,
                                                        backgroundColor: `${blog.color}04`
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        e.currentTarget.style.backgroundColor = blog.color;
                                                        e.currentTarget.style.color = "#ffffff";
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.currentTarget.style.backgroundColor = `${blog.color}04`;
                                                        e.currentTarget.style.color = blog.color;
                                                    },
                                                    children: "Read on Medium ↗"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BlogPage.jsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, this),
                                                BLOG_SUMMARIES[blog.title] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setActiveSummary(blog.title),
                                                    className: "px-4.5 py-2.5 rounded-full border border-card-border bg-foreground/5 dark:bg-white/5 hover:bg-accent-purple/10 text-foreground/80 hover:text-accent-purple font-display text-xs font-bold transition-all",
                                                    children: "Quick Summary 💡"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BlogPage.jsx",
                                                    lineNumber: 254,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BlogPage.jsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleClap(blog.title),
                                            className: `inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full border border-card-border bg-card-bg/25 text-xs font-display font-semibold transition-all duration-150 active:scale-95 ${clappingPost === blog.title ? "text-accent-purple border-accent-purple bg-accent-purple/10 scale-105" : "text-foreground/80 hover:text-accent-purple hover:border-accent-purple/30"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `inline-block ${clappingPost === blog.title ? "animate-bounce" : ""}`,
                                                    children: "👏"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BlogPage.jsx",
                                                    lineNumber: 274,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        claps[blog.title] || 0,
                                                        " claps"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/BlogPage.jsx",
                                                    lineNumber: 275,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/BlogPage.jsx",
                                            lineNumber: 265,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/BlogPage.jsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, blog.title, true, {
                            fileName: "[project]/components/BlogPage.jsx",
                            lineNumber: 186,
                            columnNumber: 13
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-panel text-center py-16 rounded-2xl border border-card-border bg-card-bg/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-4xl block mb-4",
                                children: "🔍"
                            }, void 0, false, {
                                fileName: "[project]/components/BlogPage.jsx",
                                lineNumber: 283,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display text-lg font-bold text-foreground mb-1",
                                children: "No articles found"
                            }, void 0, false, {
                                fileName: "[project]/components/BlogPage.jsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-sans text-sm text-text-muted",
                                children: "Try clearing your filters or testing another query."
                            }, void 0, false, {
                                fileName: "[project]/components/BlogPage.jsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setSearchQuery("");
                                    setSelectedTag("All");
                                },
                                className: "mt-5 px-5 py-2 rounded-full bg-accent-purple text-white text-xs font-bold font-display",
                                children: "Reset Filters"
                            }, void 0, false, {
                                fileName: "[project]/components/BlogPage.jsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BlogPage.jsx",
                        lineNumber: 282,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8 font-sans text-xs text-text-muted border-t border-card-border/60 mt-4",
                        children: "📡 More technical deep-dives coming soon — follow on Medium for updates."
                    }, void 0, false, {
                        fileName: "[project]/components/BlogPage.jsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BlogPage.jsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            activeSummary && BLOG_SUMMARIES[activeSummary] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-6 transition-all duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass-panel bg-card-bg border border-card-border rounded-2xl w-full max-w-xl shadow-2xl p-6 md:p-8 animate-float relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveSummary(null),
                            className: "absolute top-5 right-5 w-8 h-8 rounded-full bg-foreground/5 dark:bg-white/5 border border-card-border hover:bg-rose-500/10 hover:text-rose-500 text-foreground/72 flex items-center justify-center text-sm transition-all",
                            title: "Close modal",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/components/BlogPage.jsx",
                            lineNumber: 309,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-display text-[10px] tracking-widest uppercase font-black text-accent-purple mb-2",
                            children: "Article Takeaway Preview"
                        }, void 0, false, {
                            fileName: "[project]/components/BlogPage.jsx",
                            lineNumber: 318,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-display text-xl font-bold text-foreground mb-6 pr-6 leading-snug",
                            children: activeSummary
                        }, void 0, false, {
                            fileName: "[project]/components/BlogPage.jsx",
                            lineNumber: 321,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-display text-xs tracking-wider uppercase font-black text-text-muted",
                                    children: "Key Insights:"
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogPage.jsx",
                                    lineNumber: 327,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: BLOG_SUMMARIES[activeSummary].takeaways.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex gap-3 items-start text-sm text-text-muted leading-relaxed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-accent-pink text-base mt-0.5 select-none",
                                                    children: "✦"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BlogPage.jsx",
                                                    lineNumber: 331,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item
                                                }, void 0, false, {
                                                    fileName: "[project]/components/BlogPage.jsx",
                                                    lineNumber: 332,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/BlogPage.jsx",
                                            lineNumber: 330,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogPage.jsx",
                                    lineNumber: 328,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BlogPage.jsx",
                            lineNumber: 326,
                            columnNumber: 13
                        }, this),
                        BLOG_SUMMARIES[activeSummary].code ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-display text-xs tracking-wider uppercase font-black text-text-muted mb-2",
                                    children: "Example / Reference:"
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogPage.jsx",
                                    lineNumber: 341,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "p-4 rounded-xl bg-foreground/5 dark:bg-white/5 border border-card-border font-mono text-xs text-foreground/90 overflow-x-auto leading-relaxed",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: BLOG_SUMMARIES[activeSummary].code
                                    }, void 0, false, {
                                        fileName: "[project]/components/BlogPage.jsx",
                                        lineNumber: 343,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogPage.jsx",
                                    lineNumber: 342,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BlogPage.jsx",
                            lineNumber: 340,
                            columnNumber: 15
                        }, this) : BLOG_SUMMARIES[activeSummary].quote ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 p-4 rounded-xl bg-accent-purple/5 border border-accent-purple/20 border-l-4 border-l-accent-purple font-sans italic text-sm text-text-muted leading-relaxed",
                            children: [
                                '"',
                                BLOG_SUMMARIES[activeSummary].quote,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BlogPage.jsx",
                            lineNumber: 347,
                            columnNumber: 15
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 border-t border-card-border/60 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActiveSummary(null),
                                    className: "px-5 py-2 rounded-full border border-card-border text-foreground/80 hover:bg-foreground/5 dark:hover:bg-white/5 font-display text-xs font-bold transition-all",
                                    children: "Close Summary"
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogPage.jsx",
                                    lineNumber: 354,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOGS"].find((b)=>b.title === activeSummary)?.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "px-5 py-2 rounded-full bg-accent-purple hover:bg-accent-purple/90 text-white font-display text-xs font-bold transition-all shadow-sm",
                                    children: "Read Full Article ↗"
                                }, void 0, false, {
                                    fileName: "[project]/components/BlogPage.jsx",
                                    lineNumber: 361,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BlogPage.jsx",
                            lineNumber: 353,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BlogPage.jsx",
                    lineNumber: 306,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/BlogPage.jsx",
                lineNumber: 305,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BlogPage.jsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(BlogPage, "ufD0xYowwOdwULQyAQdLMwWzmBU=");
_c = BlogPage;
var _c;
__turbopack_context__.k.register(_c, "BlogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const SOCIAL_LINKS = [
    {
        icon: "🔗",
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/rexShailJs/"
    },
    {
        icon: "💻",
        name: "GitHub",
        href: "https://github.com/rexShailJs"
    },
    {
        icon: "✍️",
        name: "Medium",
        href: "https://medium.com/@rexShailJs"
    },
    {
        icon: "👤",
        name: "Gravatar",
        href: "https://gravatar.com/rexShailJs"
    },
    {
        icon: "🌲",
        name: "Linktree",
        href: "https://linktr.ee/rexShailJs"
    },
    {
        icon: "🐦",
        name: "Twitter",
        href: "https://twitter.com/rexShailJs"
    },
    {
        icon: "📧",
        name: "Email",
        href: "mailto:rexShailJs@gmail.com"
    }
];
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "py-12 md:py-16 border-t border-card-border bg-foreground/[0.02] dark:bg-white/[0.01]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-display text-xl font-black bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent mb-1",
                                    children: "Shailender Singh"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.jsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans text-xs text-text-muted",
                                    children: "Senior Full Stack Engineer · Chandigarh, India"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.jsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.jsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: SOCIAL_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-card-border hover:border-accent-purple/30 bg-card-bg/25 hover:bg-accent-purple/5 text-xs text-text-muted hover:text-accent-purple transition-all duration-200 hover:-translate-y-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs leading-none",
                                            children: link.icon
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.jsx",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold font-sans",
                                            children: link.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.jsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, link.name, true, {
                                    fileName: "[project]/components/Footer.jsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-start md:items-end gap-3 text-xs text-text-muted font-sans self-stretch md:self-auto justify-between md:justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-x-4 gap-y-2 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-text-muted",
                                    children: "FinTech · AI/ML · Risk Systems"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.jsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden md:inline-block w-1.5 h-1.5 rounded-full bg-card-border"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.jsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-text-muted",
                                    children: "Designed with a modern digital resume aesthetic"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.jsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-sans text-[11px] text-text-muted mt-2 md:mt-0 md:text-right",
                            children: "© 2026 Shailender Singh. All rights reserved."
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.jsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Footer.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Hero.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Skills$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Skills.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Experience$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Experience.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Achievements$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Achievements.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Certifications$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Certifications.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Background$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Background.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BlogPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BlogPage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function App() {
    _s();
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("system");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            // Fonts loading
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap";
            document.head.appendChild(link);
            // Theme loading
            const savedTheme = localStorage.getItem("theme") || "system";
            setTheme(savedTheme);
            let isDark = false;
            if (savedTheme === "system") {
                isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            } else {
                isDark = savedTheme === "dark";
            }
            if (isDark) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            return ({
                "App.useEffect": ()=>{
                    document.head.removeChild(link);
                }
            })["App.useEffect"];
        }
    }["App.useEffect"], []);
    const toggleTheme = (newTheme)=>{
        setTheme(newTheme);
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else if (newTheme === "light") {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            localStorage.removeItem("theme");
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (prefersDark) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background text-foreground bg-gradient-mesh font-sans transition-colors duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        ::-webkit-scrollbar-thumb {
          background: rgba(124, 58, 237, 0.4);
        }
        .dark ::-webkit-scrollbar-thumb {
          background: rgba(167, 139, 250, 0.4);
        }
      `
            }, void 0, false, {
                fileName: "[project]/index.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                page: page,
                setPage: setPage,
                theme: theme,
                toggleTheme: toggleTheme
            }, void 0, false, {
                fileName: "[project]/index.jsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            page === "blogs" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BlogPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                setPage: setPage
            }, void 0, false, {
                fileName: "[project]/index.jsx",
                lineNumber: 77,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pb-12 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        setPage: setPage
                    }, void 0, false, {
                        fileName: "[project]/index.jsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Skills$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/index.jsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Experience$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/index.jsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Achievements$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/index.jsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Certifications$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/index.jsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Background$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/index.jsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/index.jsx",
                lineNumber: 79,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/index.jsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "p:domain_verify",
                content: "0ec22921c3681b364aae1b71a43004fe"
            }, void 0, false, {
                fileName: "[project]/index.jsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/index.jsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(App, "gXZ5ILKI7TkVNiqCm4FytnDUAR4=");
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0r84e5_._.js.map