export const personalInfo = {
  name: "Adithyan MC",
  title: "Full Stack Engineer & AI Specialist",
  tagline: "Architecting high-performance web applications & intelligent digital solutions.",
  email: "adithyanmc78@gmail.com",
  linkedin: "https://www.linkedin.com/in/adithyan-mc-18761a290",
  github: "https://github.com",
  location: "India",
  status: "Open to Work & Freelance Collaborations",
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Technologies Mastered", value: "15+" },
    { label: "Code Quality Score", value: "99.8%" }
  ]
};

export const aboutData = {
  bio: [
    "I am a passionate Full Stack Software Engineer and AI & Machine Learning practitioner dedicated to building scalable, user-centric, and intelligent web experiences.",
    "With a strong foundation in modern frontend architecture, robust backend system design, and AI model integration, I turn complex technical challenges into sleek, high-performing digital products.",
    "When I'm not coding, I'm exploring cutting-edge AI research, contributing to open-source software, and refining user interaction design to deliver exceptional web applications."
  ],
  pillars: [
    {
      icon: "code-2",
      title: "Clean Architecture",
      desc: "Writing modular, scalable, and maintainable codebase adhering to strict industry standards."
    },
    {
      icon: "cpu",
      title: "AI Integration",
      desc: "Integrating intelligent machine learning models, LLMs, and predictive pipelines into modern applications."
    },
    {
      icon: "zap",
      title: "Performance First",
      desc: "Optimizing Web Vitals, asset delivery, render pipelines, and backend APIs for blazing-fast speed."
    },
    {
      icon: "layout",
      title: "Intuitive UI/UX",
      desc: "Designing captivating user interfaces with rich animations, glassmorphism, and responsive responsiveness."
    }
  ]
};

export const skillCategories = [
  {
    id: "frontend",
    name: "Frontend Development",
    skills: [
      { name: "JavaScript / ES6+", level: 95, icon: "javascript" },
      { name: "React.js / Next.js", level: 90, icon: "react" },
      { name: "HTML5 & Modern CSS3", level: 95, icon: "html" },
      { name: "TypeScript", level: 85, icon: "typescript" },
      { name: "Tailwind / CSS Architecture", level: 92, icon: "css" },
      { name: "UI Animations & Glassmorphism", level: 90, icon: "palette" }
    ]
  },
  {
    id: "backend",
    name: "Backend & Cloud",
    skills: [
      { name: "Node.js & Express", level: 88, icon: "nodejs" },
      { name: "Python & FastAPI / Django", level: 90, icon: "python" },
      { name: "RESTful APIs & GraphQL", level: 92, icon: "api" },
      { name: "PostgreSQL & MongoDB", level: 86, icon: "database" },
      { name: "Docker & Containerization", level: 80, icon: "docker" },
      { name: "Cloud Deployment (AWS/Vercel)", level: 85, icon: "cloud" }
    ]
  },
  {
    id: "aiml",
    name: "AI & Data Engineering",
    skills: [
      { name: "Machine Learning (Scikit-Learn)", level: 88, icon: "brain" },
      { name: "PyTorch & Deep Learning", level: 82, icon: "cpu" },
      { name: "LLM & OpenAI API Integration", level: 90, icon: "bot" },
      { name: "Data Processing (Pandas/NumPy)", level: 88, icon: "table" },
      { name: "Vector Databases (Pinecone/Chroma)", level: 84, icon: "database" }
    ]
  },
  {
    id: "tools",
    name: "Tools & Methodologies",
    skills: [
      { name: "Git & GitHub Workflow", level: 95, icon: "git" },
      { name: "Agile / Scrum Development", level: 90, icon: "workflow" },
      { name: "Vite / Webpack / Build Tools", level: 88, icon: "box" },
      { name: "Web Security & Authentication", level: 85, icon: "shield" }
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "NeuroTask AI - Intelligent Project Workflow",
    category: "aiml",
    categoryLabel: "AI & Full Stack",
    description: "An AI-powered productivity platform that automates task prioritzation, generates smart summaries, and integrates natural language command parsing.",
    detailedDescription: "NeuroTask AI leverages LLM APIs and modern web frameworks to provide real-time automated workflow optimization. Includes team collaboration tools, automated document synthesis, and automated predictive task scheduling.",
    features: [
      "Natural language project task generation",
      "Real-time WebSocket collaboration engine",
      "Interactive analytics dashboard with data visualizations",
      "Automated summary generation using custom AI prompts"
    ],
    tech: ["React", "Node.js", "Python FastAPI", "OpenAI API", "PostgreSQL", "Tailwind CSS"],
    image: "neurotask.jpg",
    previewUrl: "https://example.com/neurotask",
    githubUrl: "https://github.com/adithyanmc/neurotask-ai",
    featured: true
  },
  {
    id: 2,
    title: "ApexDrive - High-Performance E-Commerce Engine",
    category: "web",
    categoryLabel: "Full Stack Web",
    description: "A fast, scalable e-commerce application featuring instant product search, real-time inventory sync, microservices architecture, and dynamic checkout.",
    detailedDescription: "Built with extreme focus on Core Web Vitals, sub-second page loads, and seamless user checkout. Features dynamic filtering, multi-currency support, order tracking, and an admin analytics dashboard.",
    features: [
      "Sub-second page load times with server-side rendering",
      "Stripe payment gateway integration with webhooks",
      "Real-time inventory management with Redis caching",
      "Fully responsive dark/light mode UI system"
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
    image: "apexdrive.jpg",
    previewUrl: "https://example.com/apexdrive",
    githubUrl: "https://github.com/adithyanmc/apexdrive-store",
    featured: true
  },
  {
    id: 3,
    title: "VisionVision - AI Image Recognition Portal",
    category: "aiml",
    categoryLabel: "Machine Learning",
    description: "Deep learning computer vision application for automated object detection, spatial analysis, and semantic image tagging.",
    detailedDescription: "A web interface wrapping custom PyTorch computer vision models. Users can upload images or stream video frames to get instant real-time object classification, bounding box overlays, and confidence scoring.",
    features: [
      "Real-time webcam stream object detection",
      "Batch image processing & CSV export",
      "Interactive visual bounding box inspector",
      "Custom RESTful inference API endpoint"
    ],
    tech: ["Python", "PyTorch", "OpenCV", "FastAPI", "React", "Chart.js"],
    image: "visionvision.jpg",
    previewUrl: "https://example.com/visionvision",
    githubUrl: "https://github.com/adithyanmc/vision-ai",
    featured: true
  },
  {
    id: 4,
    title: "DevMetrics - Cloud System Health Dashboard",
    category: "web",
    categoryLabel: "Web & Analytics",
    description: "Real-time infrastructure monitoring dashboard featuring live CPU/RAM charts, alert triggers, and server health telemetry.",
    detailedDescription: "DevMetrics gathers real-time telemetry data across microservices, displaying low-latency charts, anomaly detection alerts, and customizable dashboard widgets for DevOps teams.",
    features: [
      "Live WebSocket telemetry metrics streaming",
      "Customizable drag-and-drop dashboard widgets",
      "Automated alert notifications via Webhooks & Email",
      "Role-based access control (RBAC) security"
    ],
    tech: ["JavaScript", "Express.js", "WebSockets", "Chart.js", "PostgreSQL", "CSS Grid"],
    image: "devmetrics.jpg",
    previewUrl: "https://example.com/devmetrics",
    githubUrl: "https://github.com/adithyanmc/devmetrics-dashboard",
    featured: false
  },
  {
    id: 5,
    title: "FinPulse - Automated Financial Analytics Platform",
    category: "fullstack",
    categoryLabel: "Full Stack",
    description: "Financial tracking web app with predictive portfolio growth modeling, expense breakdown, and automated monthly reporting.",
    detailedDescription: "FinPulse simplifies personal and SMB financial management through intelligent categorizations, recurring payment trackers, and visual breakdown graphs.",
    features: [
      "Automated bank statement parsing & categorizing",
      "Interactive SVG charts and cashflow projections",
      "Multi-currency conversion engine with live rates",
      "Encrypted data storage with OAuth2 authentication"
    ],
    tech: ["React", "Python", "Flask", "SQLite", "Chart.js", "Glassmorphism UI"],
    image: "finpulse.jpg",
    previewUrl: "https://example.com/finpulse",
    githubUrl: "https://github.com/adithyanmc/finpulse-app",
    featured: false
  },
  {
    id: 6,
    title: "CogniNotes - AI-Powered Knowledge Base",
    category: "aiml",
    categoryLabel: "AI & Web",
    description: "Smart note-taking and knowledge indexing tool with semantic search, auto-tagging, and interactive visual graph linking.",
    detailedDescription: "CogniNotes allows users to store documents and notes, utilizing vector embeddings to automatically create bi-directional graph connections and instant AI context retrieval.",
    features: [
      "Vector embedding semantic search",
      "Interactive 2D graph node visualizer",
      "Markdown editor with live preview & latex support",
      "Offline local-first storage synchronization"
    ],
    tech: ["TypeScript", "React", "Vector DB", "Node.js", "D3.js", "Tailwind CSS"],
    image: "cogninotes.jpg",
    previewUrl: "https://example.com/cogninotes",
    githubUrl: "https://github.com/adithyanmc/cogninotes",
    featured: false
  }
];

export const servicesData = [
  {
    id: "fullstack",
    icon: "code",
    title: "Full-Stack Web Development",
    description: "Building responsive, modern, and scalable end-to-end web applications using cutting-edge technologies like React, Next.js, Node.js, and Python.",
    highlights: ["Single Page Applications (SPAs)", "REST & GraphQL APIs", "Database Schema Design", "Performance Optimization"]
  },
  {
    id: "aiml",
    icon: "sparkles",
    title: "AI & ML Model Integration",
    description: "Embedding custom machine learning models, OpenAI LLM APIs, and intelligent data pipelines into existing web applications.",
    highlights: ["LLM & Agent Pipelines", "Predictive Analytics Engine", "Computer Vision Interfaces", "Vector Search & RAG"]
  },
  {
    id: "uiux",
    icon: "layout",
    title: "UI/UX & Frontend Design",
    description: "Crafting beautiful, intuitive, and accessible user interfaces with dynamic animations, sleek dark modes, and mobile-first glassmorphism design systems.",
    highlights: ["Design System Creation", "Micro-Animations & Motion", "Mobile & Tablet Responsiveness", "Accessibility (WCAG)"]
  },
  {
    id: "backend",
    icon: "server",
    title: "Backend & Microservices",
    description: "Designing resilient backend architectures, cloud serverless microservices, secure authentication, and optimized database queries.",
    highlights: ["Node.js & FastAPI Microservices", "PostgreSQL / MongoDB Design", "OAuth2 / JWT Authentication", "Docker Containerization"]
  },
  {
    id: "optimization",
    icon: "gauge",
    title: "Performance & SEO Audit",
    description: "Analyzing and optimizing web apps to achieve 90+ Google Lighthouse scores, fast load times, semantic HTML SEO, and seamless user experiences.",
    highlights: ["Core Web Vitals Optimization", "SEO & Meta Tag Setup", "Code Splitting & Bundle Tuning", "Caching Strategies"]
  }
];
