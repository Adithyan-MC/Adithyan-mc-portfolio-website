export const personalInfo = {
  name: "Adithyan MC",
  title: "Computer Science & Data Science Specialist",
  tagline: "Building intelligent data-driven applications, machine learning solutions, and scalable full-stack web platforms.",
  email: "adithyanmc78@gmail.com",
  linkedin: "https://www.linkedin.com/in/adithyan-mc-18761a290",
  github: "https://github.com/Adithyan-MC",
  instagram: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=mksizj1",
  location: "India",
  specialization: "Computer Science & Engineering (Data Science)",
  status: "Open to Work & Freelance Collaborations",
  stats: [
    { label: "Specialization", value: "CSE Data Science" },
    { label: "Projects Completed", value: "20+" },
    { label: "Verified Certificates", value: "8+" },
    { label: "Code Quality Score", value: "99.8%" }
  ]
};

export const aboutData = {
  bio: [
    "I am a Computer Science Engineer specializing in Data Science and Full Stack Software Engineering. I combine statistical modeling, machine learning, and modern web technologies to transform raw data into powerful, intelligent digital applications.",
    "With a strong foundation in Computer Science and specialized training in Data Science, I excel in building end-to-end solutions—from predictive machine learning models and data visualization pipelines to responsive, scalable web platforms.",
    "Driven by continuous learning and analytical problem-solving, I actively pursue certifications and research in AI, data analytics, and modern web software design."
  ],
  pillars: [
    {
      icon: "brain",
      title: "Data Science & Analytics",
      desc: "Specialized in data analysis, predictive modeling, data mining, and statistical pattern recognition."
    },
    {
      icon: "cpu",
      title: "Machine Learning & AI",
      desc: "Integrating trained AI models, natural language processing (NLP), and neural networks into web software."
    },
    {
      icon: "code-2",
      title: "Full-Stack Development",
      desc: "Constructing robust frontend interfaces and resilient backend microservices using modern JavaScript and Python."
    },
    {
      icon: "zap",
      title: "Performance & Optimization",
      desc: "Optimizing data processing pipelines, database query latency, and web application performance."
    }
  ]
};

export const skillCategories = [
  {
    id: "datascience",
    name: "Data Science & AI",
    skills: [
      { name: "Python (Data Science Ecosystem)", level: 95, icon: "python" },
      { name: "Machine Learning (Scikit-Learn)", level: 90, icon: "brain" },
      { name: "Data Processing (Pandas & NumPy)", level: 95, icon: "table" },
      { name: "Data Visualization (Matplotlib/Seaborn/Plotly)", level: 88, icon: "chart" },
      { name: "Statistical Modeling & Analysis", level: 86, icon: "calculator" },
      { name: "Neural Networks & Deep Learning", level: 82, icon: "cpu" }
    ]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    skills: [
      { name: "JavaScript / ES6+", level: 95, icon: "javascript" },
      { name: "React.js / Next.js", level: 90, icon: "react" },
      { name: "HTML5 & Modern CSS3", level: 95, icon: "html" },
      { name: "TypeScript", level: 85, icon: "typescript" },
      { name: "Interactive Data Dashboards", level: 92, icon: "layout" },
      { name: "Responsive UI & Glassmorphism", level: 90, icon: "palette" }
    ]
  },
  {
    id: "backend",
    name: "Backend & Databases",
    skills: [
      { name: "Python (FastAPI / Flask / Django)", level: 92, icon: "python" },
      { name: "Node.js & Express Architecture", level: 88, icon: "nodejs" },
      { name: "SQL & Relational Databases (PostgreSQL)", level: 90, icon: "database" },
      { name: "NoSQL Databases (MongoDB)", level: 85, icon: "database" },
      { name: "RESTful API Engineering", level: 92, icon: "api" },
      { name: "Docker Containerization", level: 80, icon: "docker" }
    ]
  },
  {
    id: "tools",
    name: "Tools & Certifications",
    skills: [
      { name: "Git & GitHub Version Control", level: 95, icon: "git" },
      { name: "LinkedIn Certified Skills Analysis", level: 92, icon: "award" },
      { name: "Jupyter & Colab Data Workflows", level: 95, icon: "box" },
      { name: "Agile & Collaborative Development", level: 90, icon: "workflow" }
    ]
  }
];

export const certificationsData = [
  {
    id: 1,
    title: "Data Science & Machine Learning Specialization",
    issuer: "LinkedIn Certified Skill Analysis",
    date: "Verified Certification",
    skills: ["Python", "Machine Learning", "Predictive Analytics", "Data Mining"],
    description: "Certified proficiency in statistical analysis, supervised and unsupervised machine learning algorithms, model evaluation, and feature engineering."
  },
  {
    id: 2,
    title: "Full-Stack Web Development Professional",
    issuer: "Software Engineering Certification",
    date: "Verified Certification",
    skills: ["React.js", "Node.js", "REST APIs", "Modern CSS3", "PostgreSQL"],
    description: "Comprehensive certification covering end-to-end full-stack web software architecture, asynchronous workflows, responsive UI design, and cloud deployment."
  },
  {
    id: 3,
    title: "Python Data Analysis & Visualization",
    issuer: "Data Science Institute",
    date: "Verified Certification",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Exploratory Data Analysis"],
    description: "Mastery in data manipulation, automated data cleaning pipelines, interactive charting, and statistical trend extraction."
  },
  {
    id: 4,
    title: "Computer Science (Data Science) Academic Excellence",
    issuer: "Engineering Institution",
    date: "Verified Credential",
    skills: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "AI Fundamentals"],
    description: "Rigorous academic curriculum and project leadership in Computer Science Engineering with specialized Data Science track."
  }
];

export const projectsData = [
  {
    id: 1,
    title: "NeuroTask AI - Intelligent Project Workflow",
    category: "aiml",
    categoryLabel: "AI & Data Science",
    description: "An AI-powered productivity platform that automates task prioritization, generates smart summaries, and integrates predictive workflow analytics.",
    detailedDescription: "NeuroTask AI leverages machine learning models and modern web frameworks to provide real-time automated workflow optimization. Includes team collaboration tools, automated document synthesis, and predictive task scheduling.",
    features: [
      "Natural language project task generation",
      "Real-time data visualization analytics dashboard",
      "Predictive machine learning priority scoring",
      "Automated summary generation using custom AI models"
    ],
    tech: ["Python", "FastAPI", "React", "Scikit-Learn", "PostgreSQL", "Tailwind CSS"],
    image: "neurotask.jpg",
    previewUrl: "https://example.com/neurotask",
    githubUrl: "https://github.com/Adithyan-MC/neurotask-ai",
    featured: true
  },
  {
    id: 2,
    title: "ApexDrive - High-Performance E-Commerce Engine",
    category: "web",
    categoryLabel: "Full Stack Web",
    description: "A fast, scalable e-commerce application featuring instant product search, real-time inventory sync, microservices architecture, and dynamic analytics.",
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
    githubUrl: "https://github.com/Adithyan-MC/apexdrive-store",
    featured: true
  },
  {
    id: 3,
    title: "VisionVision - AI Image Recognition Portal",
    category: "aiml",
    categoryLabel: "Computer Vision & AI",
    description: "Deep learning computer vision application for automated object detection, spatial analysis, and semantic image classification.",
    detailedDescription: "A web interface wrapping custom computer vision models. Users can upload images or stream video frames to get instant real-time object classification, bounding box overlays, and confidence scoring.",
    features: [
      "Real-time webcam stream object detection",
      "Batch image processing & CSV data export",
      "Interactive visual bounding box inspector",
      "Custom RESTful inference API endpoint"
    ],
    tech: ["Python", "PyTorch", "OpenCV", "FastAPI", "React", "Chart.js"],
    image: "visionvision.jpg",
    previewUrl: "https://example.com/visionvision",
    githubUrl: "https://github.com/Adithyan-MC/vision-ai",
    featured: true
  },
  {
    id: 4,
    title: "DevMetrics - Cloud Telemetry & Data Dashboard",
    category: "web",
    categoryLabel: "Data & Web Analytics",
    description: "Real-time infrastructure monitoring dashboard featuring live CPU/RAM charts, alert triggers, and server health telemetry.",
    detailedDescription: "DevMetrics gathers real-time telemetry data across microservices, displaying low-latency charts, anomaly detection alerts, and customizable dashboard widgets for engineering teams.",
    features: [
      "Live WebSocket telemetry metrics streaming",
      "Customizable drag-and-drop dashboard widgets",
      "Automated alert notifications via Webhooks & Email",
      "Role-based access control (RBAC) security"
    ],
    tech: ["JavaScript", "Express.js", "WebSockets", "Chart.js", "PostgreSQL", "CSS Grid"],
    image: "devmetrics.jpg",
    previewUrl: "https://example.com/devmetrics",
    githubUrl: "https://github.com/Adithyan-MC/devmetrics-dashboard",
    featured: false
  },
  {
    id: 5,
    title: "FinPulse - Predictive Financial Analytics Platform",
    category: "fullstack",
    categoryLabel: "Full Stack & Data",
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
    githubUrl: "https://github.com/Adithyan-MC/finpulse-app",
    featured: false
  },
  {
    id: 6,
    title: "CogniNotes - AI Knowledge Graph Indexer",
    category: "aiml",
    categoryLabel: "AI & Data Engineering",
    description: "Smart note-taking and knowledge indexing tool with semantic vector search, auto-tagging, and interactive visual graph linking.",
    detailedDescription: "CogniNotes allows users to store documents and notes, utilizing vector embeddings to automatically create bi-directional graph connections and instant AI context retrieval.",
    features: [
      "Vector embedding semantic search",
      "Interactive 2D graph node visualizer",
      "Markdown editor with live preview & latex support",
      "Offline local-first storage synchronization"
    ],
    tech: ["TypeScript", "React", "Vector DB", "Python", "D3.js", "Tailwind CSS"],
    image: "cogninotes.jpg",
    previewUrl: "https://example.com/cogninotes",
    githubUrl: "https://github.com/Adithyan-MC/cogninotes",
    featured: false
  }
];

export const servicesData = [
  {
    id: "datascience",
    icon: "brain",
    title: "Data Science & Predictive Analytics",
    description: "Extracting actionable insights from complex datasets using statistical modeling, data mining, exploratory data analysis, and custom machine learning algorithms.",
    highlights: ["Exploratory Data Analysis (EDA)", "Predictive Machine Learning Models", "Statistical Analysis & Mining", "Custom Interactive Dashboards"]
  },
  {
    id: "fullstack",
    icon: "code",
    title: "Full-Stack Web Development",
    description: "Building responsive, modern, and scalable end-to-end web applications using React, Next.js, Node.js, Python FastAPI/Django, and SQL/NoSQL databases.",
    highlights: ["Single Page Applications (SPAs)", "RESTful & GraphQL APIs", "Database Schema Engineering", "Performance Optimization"]
  },
  {
    id: "aiml",
    icon: "sparkles",
    title: "AI & Deep Learning Solutions",
    description: "Integrating intelligent machine learning models, computer vision interfaces, and AI automation pipelines into production web applications.",
    highlights: ["Computer Vision Interfaces", "NLP & Text Processing", "Neural Network Integration", "Automated Data Pipelines"]
  },
  {
    id: "uiux",
    icon: "layout",
    title: "UI/UX & Data Visualization",
    description: "Designing intuitive, visually compelling user interfaces and interactive charting dashboards with glassmorphism, responsive themes, and micro-interactions.",
    highlights: ["Interactive Charting & Metrics", "Glassmorphism UI Systems", "Mobile & Tablet Responsiveness", "Accessibility & Core Web Vitals"]
  }
];
