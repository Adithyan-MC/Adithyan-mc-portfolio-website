export const personalInfo = {
  name: "Adithyan MC",
  title: "B.Tech Computer Science Engineering (Data Science) Student",
  tagline: "B.Tech CSE (Data Science) student passionate about Machine Learning, Power BI Analytics, Python Data Engineering & AI.",
  email: "adithyanmc78@gmail.com",
  linkedin: "https://www.linkedin.com/in/adithyan-mc-18761a290",
  github: "https://github.com/Adithyan-MC",
  instagram: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=mksizj1",
  location: "India",
  specialization: "B.Tech Computer Science and Engineering (Data Science)",
  status: "B.Tech CSE (Data Science) Student | Open to Internships & Projects",
  stats: [
    { label: "Academic Track", value: "B.Tech CSE (DS)" },
    { label: "Data Science Projects", value: "10+" },
    { label: "Workshops & Certs", value: "6+" },
    { label: "Python & ML Score", value: "99.5%" }
  ]
};

export const aboutData = {
  bio: [
    "I am a B.Tech Computer Science and Engineering student specializing in Data Science. My core focus lies in Machine Learning, Statistical Analysis, Power BI Business Intelligence, and Artificial Intelligence.",
    "Through hands-on academic research, workshops, and data projects, I have developed expertise in building end-to-end Machine Learning pipelines, interactive data visualization dashboards, and database management applications.",
    "Driven by continuous learning, I actively participate in Python workshops, AI/ML intensives, and computer science projects like the Department Budget & Stationary Stock Management System."
  ],
  pillars: [
    {
      icon: "brain",
      title: "Data Science & Power BI Analytics",
      desc: "Creating interactive Power BI dashboards, statistical data models, and exploratory analysis pipelines."
    },
    {
      icon: "cpu",
      title: "Machine Learning & AI",
      desc: "Building supervised and unsupervised ML models, neural networks, and predictive data systems in Python."
    },
    {
      icon: "python",
      title: "Python & Algorithmic Problem Solving",
      desc: "Writing efficient data structures, automation scripts, and analytical pipelines in Python."
    },
    {
      icon: "database",
      title: "Database & Software Systems",
      desc: "Designing SQL database schemas, inventory stock systems, and web data dashboards."
    }
  ]
};

export const skillCategories = [
  {
    id: "datascience",
    name: "Data Science & Analytics",
    skills: [
      { name: "Python (Data Science & Analytics)", level: 95, icon: "python" },
      { name: "Power BI & Interactive Dashboards", level: 92, icon: "chart" },
      { name: "Machine Learning (Scikit-Learn)", level: 90, icon: "brain" },
      { name: "Data Processing (Pandas & NumPy)", level: 95, icon: "table" },
      { name: "Data Visualization (Matplotlib/Seaborn)", level: 88, icon: "chart" },
      { name: "Statistical Modeling & EDA", level: 88, icon: "calculator" }
    ]
  },
  {
    id: "aiml",
    name: "AI & Deep Learning",
    skills: [
      { name: "Artificial Intelligence Algorithms", level: 88, icon: "cpu" },
      { name: "PyTorch & Neural Networks", level: 84, icon: "brain" },
      { name: "Computer Vision & OpenCV", level: 82, icon: "layout" },
      { name: "Predictive Analytics Models", level: 90, icon: "chart" }
    ]
  },
  {
    id: "programming",
    name: "Programming & Databases",
    skills: [
      { name: "Python 3 & Object-Oriented Programming", level: 95, icon: "python" },
      { name: "SQL & Database Management (PostgreSQL)", level: 90, icon: "database" },
      { name: "Data Structures & Algorithms", level: 88, icon: "code" },
      { name: "JavaScript & Modern Web Design", level: 85, icon: "javascript" },
      { name: "HTML5 & CSS3 Animations", level: 90, icon: "html" }
    ]
  },
  {
    id: "tools",
    name: "Workshops & Tools",
    skills: [
      { name: "Power BI Workshop Certification", level: 95, icon: "award" },
      { name: "Python Coding Workshop Certification", level: 95, icon: "award" },
      { name: "AI & ML Workshop Certification", level: 95, icon: "award" },
      { name: "Git & GitHub Version Control", level: 92, icon: "git" },
      { name: "Jupyter Notebook & Google Colab", level: 96, icon: "box" }
    ]
  }
];

export const certificationsData = [
  {
    id: 1,
    title: "Power BI & Data Science Workshop",
    issuer: "Certified Technical Workshop",
    date: "LinkedIn Verified",
    skills: ["Power BI", "DAX", "Data Science", "Interactive Dashboards", "Data Modeling"],
    description: "Hands-on workshop certification in building business intelligence dashboards, custom KPI visualization, and complex data modeling in Power BI.",
    link: "https://www.linkedin.com/posts/adithyan-mc-18761a290_powerbi-datascience-workshop-activity-7415959631153356800-GLfV"
  },
  {
    id: 2,
    title: "Python Coding & Advanced Problem Solving Workshop",
    issuer: "Certified Technical Workshop",
    date: "LinkedIn Verified",
    skills: ["Python 3", "Data Structures", "Algorithmic Logic", "Scripting Automation"],
    description: "Intensive python programming workshop focused on optimal data structures, algorithmic complexity, data parsing, and clean code principles.",
    link: "https://www.linkedin.com/posts/adithyan-mc-18761a290_python-coding-workshop-activity-7380184016047542272-93sL"
  },
  {
    id: 3,
    title: "Artificial Intelligence & Machine Learning Workshop",
    issuer: "Certified Technical Workshop",
    date: "LinkedIn Verified",
    skills: ["Machine Learning", "Artificial Intelligence", "Python Programming", "Model Training"],
    description: "Specialized training covering ML model pipelines, supervised & unsupervised learning techniques, and practical AI implementations.",
    link: "https://www.linkedin.com/posts/adithyan-mc-18761a290_artificialintelligence-machinelearning-pythonprogramming-activity-7378397927871868928-vEoW"
  },
  {
    id: 4,
    title: "B.Tech Computer Science (Data Science)",
    issuer: "St Thomas College of Engineering and Technology",
    date: "Academic Degree Program",
    skills: ["Data Science", "Machine Learning", "Database Systems", "Software Engineering"],
    description: "Undergraduate degree in Computer Science Engineering specialized in Data Science, data mining, database management systems, and software engineering."
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Department Budget & Stationary Stock Management System",
    category: "academic",
    categoryLabel: "Academic & Data System",
    description: "An automated management system for tracking department budget allocation, stationary inventory levels, and real-time stock analytics for computer science departments.",
    detailedDescription: "Designed and developed as a specialized academic project in B.Tech Computer Science (Data Science). Features real-time stock consumption tracking, budget forecast reports, automated re-order triggers, and an intuitive management dashboard.",
    features: [
      "Real-time department budget & expenditure visual tracking",
      "Automated stationary inventory level alerts & stock logs",
      "Database management for multi-category department assets",
      "Exportable summary reports for faculty & administration"
    ],
    tech: ["Python", "SQL", "PostgreSQL", "HTML5", "CSS3", "JavaScript", "Power BI"],
    image: "budget_system.jpg",
    previewUrl: "https://lnkd.in/p/gMyfVZcy",
    githubUrl: "https://github.com/Adithyan-MC",
    featured: true
  },
  {
    id: 2,
    title: "Power BI Data Science & Business Intelligence Dashboard",
    category: "datascience",
    categoryLabel: "Power BI & Analytics",
    description: "Interactive multi-page Power BI dashboard visualizing complex datasets, KPI tracking, and statistical trend predictions.",
    detailedDescription: "Created during the Power BI & Data Science Workshop. Features dynamic slicers, DAX calculated measures, automated data cleaning pipelines, and interactive drill-down visuals for business data analysis.",
    features: [
      "Interactive data slicers & drill-through detail views",
      "Custom DAX formulas for dynamic growth metrics",
      "Automated ETL pipeline using Power Query",
      "Visual KPI executive summaries and trend charts"
    ],
    tech: ["Power BI", "DAX", "Power Query", "Python", "Data Modeling"],
    image: "powerbi_dashboard.jpg",
    previewUrl: "https://www.linkedin.com/posts/adithyan-mc-18761a290_powerbi-datascience-workshop-activity-7415959631153356800-GLfV",
    githubUrl: "https://github.com/Adithyan-MC",
    featured: true
  },
  {
    id: 3,
    title: "Artificial Intelligence & ML Predictive Model Pipeline",
    category: "aiml",
    categoryLabel: "Machine Learning & AI",
    description: "End-to-end Machine Learning model pipeline for predictive analytics, classification tasks, and neural network feature evaluation.",
    detailedDescription: "Built as part of the AI & ML Intensive Workshop. Implements supervised classification algorithms (Random Forest, SVM, Decision Trees), model hyperparameter tuning, and visual accuracy evaluation matrices.",
    features: [
      "Automated feature scaling & missing data imputation",
      "Model evaluation using Confusion Matrix & ROC Curves",
      "Hyperparameter optimization using GridSearchCV",
      "Interactive prediction output for test datasets"
    ],
    tech: ["Python", "Scikit-Learn", "PyTorch", "Pandas", "Matplotlib", "Seaborn"],
    image: "ai_pipeline.jpg",
    previewUrl: "https://www.linkedin.com/posts/adithyan-mc-18761a290_artificialintelligence-machinelearning-pythonprogramming-activity-7378397927871868928-vEoW",
    githubUrl: "https://github.com/Adithyan-MC",
    featured: true
  },
  {
    id: 4,
    title: "Python Algorithmic Problem Solving & Data Automation",
    category: "programming",
    categoryLabel: "Python & Algorithms",
    description: "Advanced Python programming suite featuring data structures optimization, automated data parsing, and scripting pipelines.",
    detailedDescription: "Developed during the Python Coding Workshop. Demonstrates modular Python design, custom data structures, text/CSV automated data parsing, and high-efficiency algorithmic routines.",
    features: [
      "Custom data structure implementations (Trees, Graphs, Queues)",
      "Automated CSV & JSON data extraction scripts",
      "Algorithmic time complexity optimization",
      "Clean modular Python codebase adhering to PEP8"
    ],
    tech: ["Python 3", "Data Structures", "OOP", "NumPy", "Scripting"],
    image: "python_suite.jpg",
    previewUrl: "https://www.linkedin.com/posts/adithyan-mc-18761a290_python-coding-workshop-activity-7380184016047542272-93sL",
    githubUrl: "https://github.com/Adithyan-MC",
    featured: false
  },
  {
    id: 5,
    title: "NeuroTask AI - Predictive Task Analytics",
    category: "aiml",
    categoryLabel: "AI & Data Science",
    description: "An AI-powered productivity platform that automates task prioritization, generates smart summaries, and integrates predictive workflow analytics.",
    detailedDescription: "NeuroTask AI leverages machine learning models and web data visualization to provide real-time automated workflow optimization and predictive task scheduling.",
    features: [
      "Natural language project task generation",
      "Real-time data visualization analytics dashboard",
      "Predictive machine learning priority scoring",
      "Automated summary generation using custom AI models"
    ],
    tech: ["Python", "FastAPI", "JavaScript", "Scikit-Learn", "PostgreSQL", "CSS Grid"],
    image: "neurotask.jpg",
    previewUrl: "https://github.com/Adithyan-MC",
    githubUrl: "https://github.com/Adithyan-MC",
    featured: false
  },
  {
    id: 6,
    title: "VisionVision - AI Computer Vision Portal",
    category: "aiml",
    categoryLabel: "Computer Vision",
    description: "Deep learning computer vision application for automated object detection, spatial analysis, and image classification.",
    detailedDescription: "A web interface wrapping custom computer vision models for real-time object classification, bounding box overlays, and confidence scoring.",
    features: [
      "Real-time webcam stream object detection",
      "Batch image processing & CSV data export",
      "Interactive visual bounding box inspector",
      "Custom RESTful inference API endpoint"
    ],
    tech: ["Python", "PyTorch", "OpenCV", "FastAPI", "Chart.js"],
    image: "visionvision.jpg",
    previewUrl: "https://github.com/Adithyan-MC",
    githubUrl: "https://github.com/Adithyan-MC",
    featured: false
  }
];

export const servicesData = [
  {
    id: "datascience",
    icon: "brain",
    title: "Data Science & Predictive Analytics",
    description: "Extracting actionable insights from complex datasets using statistical modeling, data mining, exploratory data analysis, and custom machine learning algorithms.",
    highlights: ["Exploratory Data Analysis (EDA)", "Predictive Machine Learning Models", "Statistical Analysis & Data Mining", "Custom Analytical Reports"]
  },
  {
    id: "powerbi",
    icon: "chart",
    title: "Power BI & Business Intelligence Dashboards",
    description: "Building interactive, visually stunning Power BI dashboards with DAX calculated metrics, automated ETL pipelines, and executive KPI summaries.",
    highlights: ["Power BI Interactive Dashboards", "DAX & Data Modeling", "ETL Data Transformation", "KPI & Executive Visualizations"]
  },
  {
    id: "aiml",
    icon: "cpu",
    title: "AI & Machine Learning Solutions",
    description: "Developing intelligent machine learning models, computer vision pipelines, and AI automation tools tailored for data science challenges.",
    highlights: ["Supervised & Unsupervised ML", "Computer Vision & OpenCV", "Neural Network Integration", "Python AI Pipelines"]
  },
  {
    id: "webdesign",
    icon: "layout",
    title: "Web Design & Data Visualizations",
    description: "Crafting beautiful, responsive, and animated user interfaces for presenting complex data insights, interactive charts, and stock management portals.",
    highlights: ["Interactive Data Visualizations", "Modern Animated UI Design", "Responsive Layout Systems", "Glassmorphism Aesthetics"]
  }
];
