/**
 * NEXORA - Master Data & Curated Knowledge Matrix
 * Author: Tanishk Shukla (GLA University, Mathura - Section AN)
 * Project: Where Innovation Begins
 */

export const CREATOR_PROFILE = {
  name: "Tanishk Shukla",
  role: "First-Year BTech Computer Science Student",
  institution: "GLA University, Mathura",
  section: "Section AN",
  tagline: "Exploring Technology. Learning Every Day. Building Tomorrow.",
  bio: "I am a first-year Computer Science and Engineering undergraduate at GLA University, Mathura (Section AN). Driven by an insatiable curiosity about how software shapes our world, I am building strong foundations in computer science, modern web architectures, and intelligent systems. NEXORA was conceived as an interactive canvas—showcasing the vibrant intersections of modern technology and providing aspiring student builders with clear, actionable pathways into the future.",
  interests: [
    "Artificial Intelligence",
    "Data Science",
    "Modern Web Development",
    "Algorithmic Thinking",
    "Cloud & Distributed Systems",
    "Emerging Technologies"
  ],
  linkedinUrl: "https://www.linkedin.com/in/tanishk-shukla-399682357/",
  timeline: [
    {
      phase: "Curiosity",
      label: "The Initial Spark",
      desc: "Asking fundamental questions about how digital applications, algorithms, and networks function behind the screen."
    },
    {
      phase: "Learning",
      label: "Core Foundations",
      desc: "Rigorous study of computer science fundamentals, C, Python, data structures, object-oriented principles, and web standards."
    },
    {
      phase: "Experimentation",
      label: "Hands-on Tinkering",
      desc: "Exploring modern development ecosystems, version control with Git, interactive animations, and responsive design systems."
    },
    {
      phase: "Building",
      label: "Creating Real Projects",
      desc: "Architecting full client-side interactive web applications like NEXORA to transform theoretical knowledge into functional craft."
    },
    {
      phase: "Innovation",
      label: "Future Horizons",
      desc: "Aspiring to design scalable, ethical, and community-focused solutions that leverage AI, data science, and modern engineering."
    }
  ],
  closingStatement: "The journey in computer science is not about knowing every answer today—it is about cultivating the curiosity to debug, learn, and engineer solutions for tomorrow."
};

export const TECHNOLOGIES_DATA = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    tagline: "Neural Networks, LLMs & Machine Perception",
    badge: "Neural Frontier",
    accentColor: "#00E5FF",
    glowColor: "rgba(0, 229, 255, 0.35)",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z"/><path d="M6 10v1a6 6 0 0 0 12 0v-1"/><path d="M12 17v5"/><path d="M8 22h8"/><circle cx="12" cy="6" r="1.5"/></svg>`,
    shortDesc: "Empowering computational systems to perceive context, reason through complexity, and generate novel content.",
    fullDefinition: "Artificial Intelligence (AI) encompasses algorithms and statistical models that enable machines to simulate cognitive faculties including reasoning, visual perception, natural language understanding, and autonomous decision-making. From foundational machine learning classifiers to modern Large Language Models (LLMs) and transformer architectures, AI represents the shift from rule-based code to probabilistic learning systems.",
    realWorldApplications: [
      {
        title: "Autonomous Navigation & Robotics",
        desc: "Processing multi-sensor telemetry (LiDAR, optical vision) in real-time to pilot self-driving vehicles and automated industrial robots."
      },
      {
        title: "Diagnostic Healthcare Modeling",
        desc: "Screening radiographic scans, predicting oncological markers, and accelerating molecular drug discovery through generative chemistry."
      },
      {
        title: "Adaptive Language & Context Synthesis",
        desc: "Transformer-based language models parsing complex semantic intent, assisting programmers, and powering contextual translation engines."
      }
    ],
    beginnerSkills: [
      { name: "Python Programming", tip: "Variables, list comprehensions, NumPy vectorized math" },
      { name: "Linear Algebra & Statistics", tip: "Vectors, dot products, mean squared error, standard deviation" },
      { name: "Scikit-Learn Fundamentals", tip: "Supervised classification, regression, and data normalization" },
      { name: "Prompt Architecture & API Integration", tip: "Structuring prompt schemas and parsing structured JSON outputs" }
    ],
    starterProject: {
      title: "Smart Sentiment & Topic Analyzer",
      difficulty: "Beginner",
      duration: "3-5 days",
      overview: "Build a lightweight web utility that ingests customer reviews or student feedback, classifies emotional sentiment (Positive, Neutral, Critical), and highlights actionable keywords using client-side natural language heuristics or Python Flask.",
      tools: ["Python / JavaScript", "TextBlob or HuggingFace Transformers", "HTML/CSS Interface"],
      steps: [
        "Collect a sample dataset of 50-100 real product reviews or campus feedback notes.",
        "Preprocess the input text by tokenizing words, removing punctuation, and filtering common stopwords.",
        "Calculate polarity scores and classify the feedback into emotional sentiment categories.",
        "Present the analysis in an interactive dashboard with color-coded sentiment chips and key highlight phrases."
      ]
    }
  },
  {
    id: "robotics",
    title: "Robotics and IoT",
    tagline: "Autonomous Hardware, Microcontrollers & Edge Sensing",
    badge: "Cyber-Physical",
    accentColor: "#38BDF8",
    glowColor: "rgba(56, 189, 248, 0.35)",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>`,
    shortDesc: "Bridging the physical and digital realms through intelligent sensors, actuators, and embedded microcontrollers.",
    fullDefinition: "Robotics and the Internet of Things (IoT) unite embedded electronics, firmware development, telemetric sensors, and mechanical actuation. By embedding connected microcontrollers (such as ESP32 and Arduino) into physical devices, engineers create distributed networks capable of monitoring environmental states and autonomously acting upon real-world conditions.",
    realWorldApplications: [
      {
        title: "Smart Agriculture & Microclimate Optimization",
        desc: "Monitoring soil moisture, ambient humidity, and UV levels with wireless sensor meshes to automate irrigation with zero water waste."
      },
      {
        title: "Industrial Telemetry & Preventive Maintenance",
        desc: "Vibration and thermal sensors alerting technicians to machinery bearing failures days before catastrophic hardware breakdown."
      },
      {
        title: "Assistive Bionics & Smart Prosthetics",
        desc: "Electromyographic (EMG) sensors reading minute muscle impulses to articulate dexterous robotic prosthetic fingers."
      }
    ],
    beginnerSkills: [
      { name: "C / C++ Basics for Firmware", tip: "Pointers, memory management, digital write/read cycles" },
      { name: "Microcontroller Ecosystems", tip: "Arduino IDE, ESP32 Wi-Fi/Bluetooth stack, Raspberry Pi GPIO" },
      { name: "Circuit Design & Sensor Interfacing", tip: "Voltage dividers, I2C, SPI communication protocols" },
      { name: "MQTT & Lightweight Telemetry", tip: "Publish/subscribe architecture for streaming telemetry over low-bandwidth channels" }
    ],
    starterProject: {
      title: "Smart Room Environmental Monitor",
      difficulty: "Beginner",
      duration: "4-6 days",
      overview: "Create an IoT weather and air-comfort station using an ESP32 or Arduino simulator with DHT11 temperature/humidity sensors that updates an interactive browser telemetry gauge in real-time.",
      tools: ["ESP32 / Wokwi Simulator", "C++ / Arduino Core", "MQTT / WebSockets", "HTML5 Dashboard"],
      steps: [
        "Wire a DHT11 temperature/humidity sensor to an ESP32 microcontroller or browser simulator (Wokwi).",
        "Write C++ firmware to sample analog/digital sensor readings every 2 seconds.",
        "Transmit formatted JSON sensor payloads across Wi-Fi using lightweight HTTP or MQTT.",
        "Render real-time radial gauges and alert banners in a responsive web interface."
      ]
    }
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    tagline: "Elastic Infrastructure, Containers & Microservices",
    badge: "Elastic Compute",
    accentColor: "#818CF8",
    glowColor: "rgba(129, 140, 248, 0.35)",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
    shortDesc: "Architecting resilient, globally distributed systems that scale dynamically to millions of simultaneous requests.",
    fullDefinition: "Cloud Computing is the on-demand delivery of compute power, storage, database clusters, and networking over the internet with pay-as-you-go economics. Modern cloud engineering has evolved from bare virtual machines to containerization (Docker), orchestration (Kubernetes), serverless event execution, and declarative infrastructure-as-code.",
    realWorldApplications: [
      {
        title: "Global Content Delivery & Streaming",
        desc: "Edge points of presence caching petabytes of video streams and low-latency assets within milliseconds of global viewers."
      },
      {
        title: "Autoscaling Microservice Fleets",
        desc: "Instantly provisioning hundreds of container replicas during peak traffic spikes (e.g. ticketing or flash sales) and shrinking to zero during lulls."
      },
      {
        title: "High-Availability Disaster Recovery",
        desc: "Multi-region database replication ensuring business continuity even in the event of catastrophic data center power outages."
      }
    ],
    beginnerSkills: [
      { name: "Linux CLI & Bash Scripting", tip: "File permissions, cron scheduling, SSH keys, network sockets" },
      { name: "Containerization with Docker", tip: "Dockerfiles, layer caching, multi-stage builds, port forwarding" },
      { name: "Cloud Core Concepts", tip: "Compute (VMs/Serverless), Object Storage (S3/Buckets), VPC networks" },
      { name: "CI/CD Automation", tip: "GitHub Actions workflows for automated linting, testing, and deployment" }
    ],
    starterProject: {
      title: "Containerized Microservice & Global Deployment",
      difficulty: "Beginner",
      duration: "3-4 days",
      overview: "Package a lightweight REST API inside a Docker container, configure an automated GitHub Actions CI/CD pipeline, and deploy it to a free serverless cloud host with SSL encryption and uptime health monitoring.",
      tools: ["Docker", "Node.js or Python", "GitHub Actions", "Vercel / Render / Netlify"],
      steps: [
        "Create a clean REST API service returning structured JSON data and a /health endpoint.",
        "Write an optimized Dockerfile that builds a lightweight production image.",
        "Set up a GitHub Actions workflow to run automated validation tests on every git push.",
        "Deploy the containerized application to a free cloud hosting tier with a custom subdomain."
      ]
    }
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Defensive Architecture, Cryptography & Threat Analysis",
    badge: "Zero-Trust",
    accentColor: "#F43F5E",
    glowColor: "rgba(244, 63, 94, 0.35)",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`,
    shortDesc: "Safeguarding computational infrastructure, user identities, and data integrity against adversarial exploits.",
    fullDefinition: "Cybersecurity encompasses the proactive technologies, operational policies, and cryptographic countermeasures engineered to protect networks, computer systems, and sensitive intellectual property from unauthorized access, ransomware, and espionage. It spans offensive security (ethical penetration testing) and defensive blueprints (Zero-Trust architecture and Security Operations Centers).",
    realWorldApplications: [
      {
        title: "Zero-Trust Identity Verification",
        desc: "Continuously authenticating every user request, device health signature, and network privilege regardless of internal perimeter location."
      },
      {
        title: "End-to-End Cryptographic Enclaves",
        desc: "Securing financial ledgers, medical vaults, and confidential communications using quantum-resistant asymmetric encryption algorithms."
      },
      {
        title: "Automated Incident Threat Hunting",
        desc: "Analyzing gigabytes of SIEM access logs per second using anomaly detection to thwart distributed denial of service and credential stuffing attacks."
      }
    ],
    beginnerSkills: [
      { name: "Computer Networking Foundations", tip: "TCP/IP 4-layer model, DNS resolution, HTTP/HTTPS headers, subnets" },
      { name: "Cryptographic Basics", tip: "Symmetric vs asymmetric keys, hashing (SHA-256), salted passwords" },
      { name: "Web Security Vulnerabilities", tip: "OWASP Top 10: SQL injection, Cross-Site Scripting (XSS), CSRF" },
      { name: "Network Inspection Tools", tip: "Wireshark packet sniffing and browser security devtools inspection" }
    ],
    starterProject: {
      title: "Interactive Password Strength & Entropy Auditor",
      difficulty: "Beginner",
      duration: "2-3 days",
      overview: "Develop an interactive cryptographic utility that calculates real password entropy (in bits), estimates crack-times against brute-force dictionary attacks, flags common dictionary leaks, and educates users on passphrases.",
      tools: ["JavaScript (Vanilla)", "Regex Patterns", "Web Cryptography API", "Modern CSS"],
      steps: [
        "Implement Shannon entropy mathematical calculation based on character pool diversity and length.",
        "Check candidate strings against common patterns (sequential characters, leetspeak, top 1,000 weak passwords).",
        "Estimate realistic brute-force GPU hash times (e.g., 100 billion guesses/sec).",
        "Display a visual meter with actionable guidance on generating resilient multi-word passphrases."
      ]
    }
  },
  {
    id: "data",
    title: "Data Science",
    tagline: "Statistical Modeling, Exploratory Analysis & Insights",
    badge: "Data Intelligence",
    accentColor: "#A855F7",
    glowColor: "rgba(168, 85, 247, 0.35)",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/><circle cx="19" cy="9" r="1.5"/><circle cx="14" cy="14" r="1.5"/><circle cx="10" cy="10" r="1.5"/><circle cx="7" cy="13" r="1.5"/></svg>`,
    shortDesc: "Extracting actionable knowledge and hidden patterns from complex, noisy, high-dimensional datasets.",
    fullDefinition: "Data Science merges statistical inference, mathematical programming, machine learning, and data storytelling to extract meaningful insights from vast volumes of raw structured and unstructured data. From cleaning missing sensor readings to training predictive models and presenting executive visualizations, data scientists turn raw noise into empirical clarity.",
    realWorldApplications: [
      {
        title: "Predictive Epidemiological Forecasting",
        desc: "Modeling viral transmission trajectories and hospital capacity thresholds using stochastic differential equations."
      },
      {
        title: "E-Commerce Recommendation Engines",
        desc: "Collaborative and content-based filtering algorithms mapping multi-dimensional user preferences to deliver personalized feeds."
      },
      {
        title: "Algorithmic Fraud Detection",
        desc: "Scoring millions of credit card transactions per millisecond against statistical baseline behaviors to halt unauthorized charges."
      }
    ],
    beginnerSkills: [
      { name: "Python Data Science Stack", tip: "Pandas DataFrames, NumPy multi-dimensional arrays, Matplotlib" },
      { name: "SQL & Relational Databases", tip: "JOINs, GROUP BY, aggregations, window functions, and indexing" },
      { name: "Data Cleaning & Wrangling", tip: "Imputing null values, handling outliers, parsing ISO datetime stamps" },
      { name: "Visual Data Storytelling", tip: "Crafting intuitive heatmaps, scatter distributions, and executive charts" }
    ],
    starterProject: {
      title: "Student Academic Performance Predictor & Visualizer",
      difficulty: "Beginner",
      duration: "3-5 days",
      overview: "Analyze student study habits, attendance logs, and exam scores to build an interactive dashboard that reveals correlation trends and predicts final performance bands using linear regression.",
      tools: ["Python / Pandas / Seaborn", "Jupyter Notebook", "Chart.js / Vanilla JS Dashboard"],
      steps: [
        "Download an open educational benchmark dataset (e.g. Kaggle Student Performance Dataset).",
        "Clean anomalies and compute Pearson correlation matrices between study hours, sleep, and final grades.",
        "Train an elementary linear regression model to predict exam scores based on weekly study dedication.",
        "Export the insights into an interactive browser chart with dynamic sliders for students to test hypotheses."
      ]
    }
  },
  {
    id: "web",
    title: "Web Development",
    tagline: "Modern Standards, Spatial UI & High-Performance Web",
    badge: "Next-Gen Web",
    accentColor: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.35)",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    shortDesc: "Creating responsive, accessible, motion-rich digital experiences that run universally across billions of web devices.",
    fullDefinition: "Modern Web Development represents the vanguard of universal software distribution. Built upon semantic HTML5, expressive modern CSS (Grid, Flexbox, hardware-accelerated animations), and asynchronous JavaScript, web engineering enables rich interactive applications, 3D graphics with WebGL, and offline-first progressive web apps without installation hurdles.",
    realWorldApplications: [
      {
        title: "Collaborative Browser Workspaces",
        desc: "Real-time vector design, collaborative code editors, and spreadsheets powered by WebSockets, Canvas, and WebAssembly."
      },
      {
        title: "Immersive 3D Product Configurator",
        desc: "Rendering interactive, photorealistic 3D models with Three.js that allow customers to customize physical products in the browser."
      },
      {
        title: "Offline-First Progressive Web Apps (PWAs)",
        desc: "Service worker caching enabling medical and educational tools to operate smoothly in remote regions without internet access."
      }
    ],
    beginnerSkills: [
      { name: "Semantic HTML5 & Accessibility", tip: "ARIA roles, landmark tags, screen-reader compatibility" },
      { name: "Modern Responsive CSS3", tip: "CSS Grid, Flexbox, custom properties (variables), media queries" },
      { name: "Modern JavaScript (ES6+)", tip: "Async/await, Fetch API, DOM manipulation, Array methods, modules" },
      { name: "Motion & Animation Libraries", tip: "GSAP timeline choreography and scroll-linked ScrollTrigger animations" }
    ],
    starterProject: {
      title: "Interactive Developer Portfolio & Component Lab",
      difficulty: "Beginner",
      duration: "3-4 days",
      overview: "Design and build a high-performance personal web platform featuring smooth scroll-triggered reveals, glassmorphic UI components, a functional project filter, and local storage state persistence.",
      tools: ["HTML5", "Modern CSS (Variables & Grid)", "Vanilla JS (ES6+)", "GSAP Animations"],
      steps: [
        "Structure semantic markup with dedicated sections for hero, projects, roadmap, and contact.",
        "Implement a cohesive design system using CSS custom properties for typography and futuristic dark palettes.",
        "Add interactive filters to dynamically sort projects by technology category without page reloads.",
        "Integrate smooth scroll animations and persistent dark/light theme state with localStorage."
      ]
    }
  }
];

export const INNOVATION_LAB_PROJECTS = [
  // AI PROJECTS
  {
    id: "ai-beg-skill",
    category: "ai",
    difficulty: "beginner",
    goal: "skill",
    title: "NeuroClass: Interactive Text Sentiment Classifier",
    overview: "A lightweight web tool that teaches the mathematical fundamentals of NLP by tokenizing text input in real-time, calculating positive/negative polarity scores, and visualizing the word-weight contribution.",
    techStack: ["HTML5 / CSS3", "Vanilla JavaScript", "Regex Tokenizer", "Chart.js"],
    steps: [
      "Set up an intuitive input textarea with live character, word, and token counters.",
      "Integrate an AFINN-165 lexical sentiment dictionary directly into client-side memory.",
      "Highlight positive words in electric cyan and negative words in coral pink as the user types.",
      "Render a smooth radial gauge depicting the overall sentiment confidence percentage."
    ],
    learningOutcome: "Understand natural language tokenization, dictionary-based sentiment scoring, and reactive client-side DOM manipulation without backend dependencies."
  },
  {
    id: "ai-beg-problem",
    category: "ai",
    difficulty: "beginner",
    goal: "problem",
    title: "CampusQuery: Student FAQ Intelligent Matcher",
    overview: "Solves long queues at university registrar offices by using cosine vector similarity to match incoming student questions against official syllabus and academic regulation documents.",
    techStack: ["JavaScript (ES6+)", "Vector Math", "Local Storage", "CSS Glassmorphism"],
    steps: [
      "Curate 30 common first-year university inquiries (admissions, fee schedules, exam rules).",
      "Convert text into bag-of-words frequency vectors using normalized word stems.",
      "Calculate cosine similarity between the student's query vector and the knowledge repository.",
      "Instantly present the top 3 most relevant answers along with confidence ratings."
    ],
    learningOutcome: "Master vector space models, cosine distance formulas, and building practical search algorithms for real campus communities."
  },
  {
    id: "ai-beg-port",
    category: "ai",
    difficulty: "beginner",
    goal: "portfolio",
    title: "AuraVision: Browser Computer Vision Canvas",
    overview: "A showcase portfolio piece utilizing lightweight browser-based object/face landmark detection to create interactive particle effects that mirror user head movement via webcam.",
    techStack: ["HTML5 Video API", "MediaPipe / TensorFlow.js", "HTML5 2D Canvas", "GSAP"],
    steps: [
      "Request secure camera access through the standard browser navigator.mediaDevices API.",
      "Feed the webcam video stream into a lightweight face-landmark detection model.",
      "Map facial coordinates to generate colorful interactive particle trails on a foreground canvas.",
      "Provide custom toggle controls for particle speed, color palettes, and screenshot export."
    ],
    learningOutcome: "Gain confidence integrating machine learning models directly into client-side browser runtimes with high frame-rate canvas rendering."
  },
  {
    id: "ai-int-problem",
    category: "ai",
    difficulty: "intermediate",
    goal: "problem",
    title: "MedScribe: Clinical Jargon to Plain-Language Translator",
    overview: "Helps patients understand intimidating medical lab reports by automatically identifying clinical terminology and generating plain-language definitions and reference ranges.",
    techStack: ["Python / FastAPI or Node.js", "HuggingFace Transformers", "REST API", "Tailwind/Modern CSS"],
    steps: [
      "Build a clinical terminology extraction pipeline using regular expressions and medical entity dictionaries.",
      "Map complex diagnostic phrases (e.g. 'leukocytosis') to patient-friendly explanations.",
      "Construct a split-pane comparison interface displaying original text alongside highlighted plain interpretations.",
      "Add safety disclaimers and exportable summary cards for doctor-patient consultation."
    ],
    learningOutcome: "Handle domain-specific NLP pipelines, entity extraction, and designing empathetic healthcare user interfaces."
  },
  {
    id: "ai-adv-portfolio",
    category: "ai",
    difficulty: "advanced",
    goal: "portfolio",
    title: "CognitiveGraph: Autonomous Research Paper Synthesizer",
    overview: "An elite engineering project that parses arXiv academic PDFs, builds an interactive knowledge graph of linked concepts, and uses vector embeddings to answer technical questions.",
    techStack: ["Python", "LangChain / LlamaIndex", "ChromaDB / Pinecone", "Three.js 3D Force Graph"],
    steps: [
      "Ingest academic PDFs and chunk text into semantic paragraphs with metadata tracking.",
      "Generate dense vector embeddings and store them within a local vector database.",
      "Render a 3D orbital node graph where related research concepts physically attract each other.",
      "Implement retrieval-augmented generation (RAG) to generate grounded citations with page references."
    ],
    learningOutcome: "Deep expertise in modern Retrieval-Augmented Generation (RAG), vector databases, and high-performance 3D knowledge visualization."
  },

  // WEB DEV PROJECTS
  {
    id: "web-beg-skill",
    category: "web",
    difficulty: "beginner",
    goal: "skill",
    title: "FluidGlass: Modern CSS Glassmorphic UI Design System",
    overview: "A modular, reusable component library implementing futuristic frosted glass panels, neon glows, accessible focus states, and smooth keyframe animations using pure modern CSS.",
    techStack: ["Semantic HTML5", "CSS Custom Properties", "CSS Grid & Flexbox", "Vanilla JS"],
    steps: [
      "Define an atomic CSS design token hierarchy with HSL variables for theme manipulation.",
      "Build frosted glass cards utilizing backdrop-filter, border gradients, and layered box-shadows.",
      "Craft interactive interactive controls: tabs, toggles, modal dialogs, and toast notifications.",
      "Publish an interactive component playground where developers can copy ready-to-use CSS snippets."
    ],
    learningOutcome: "Thorough mastery of modern CSS layout techniques, CSS custom property cascades, and accessible UI component architecture."
  },
  {
    id: "web-beg-problem",
    category: "web",
    difficulty: "beginner",
    goal: "problem",
    title: "EduTimetable: Smart College Attendance & Schedule Tracker",
    overview: "Solves the common student struggle of tracking mandatory 75% attendance limits by calculating exactly how many upcoming lectures a student can safely miss or must attend.",
    techStack: ["HTML5", "CSS3 / LocalStorage", "Vanilla ES6+", "Export to Calendar (.ics)"],
    steps: [
      "Create a responsive weekly schedule grid where students input course codes, timings, and rooms.",
      "Implement attendance increment/decrement counters with local storage synchronization.",
      "Calculate real-time attendance percentages and render color-coded warning badges for at-risk courses.",
      "Add a one-click calculation feature: 'How many classes must I attend to reach 75%?'"
    ],
    learningOutcome: "Create practical client-side utilities with resilient offline state persistence and meaningful mathematical logic."
  },
  {
    id: "web-beg-port",
    category: "web",
    difficulty: "beginner",
    goal: "portfolio",
    title: "HyperSpace: Interactive 3D Developer Portfolio",
    overview: "A visually stunning personal showcase featuring a Three.js starry celestial background, GSAP scroll-pinned project cards, and a live working interactive contact terminal.",
    techStack: ["Three.js", "GSAP & ScrollTrigger", "Vanilla JavaScript", "Vite"],
    steps: [
      "Build a responsive hero canvas with a gently orbiting wireframe polyhedron and particle field.",
      "Set up GSAP ScrollTrigger to orchestrate smooth card reveals as the viewer scrolls down.",
      "Implement a sleek glassmorphic modal for displaying deep-dive case studies.",
      "Add keyboard accessibility, mobile touch optimizations, and reduced-motion fallback modes."
    ],
    learningOutcome: "Elevate standard web design into an interactive digital experience through scroll choreography and WebGL fundamentals."
  },
  {
    id: "web-int-problem",
    category: "web",
    difficulty: "intermediate",
    goal: "problem",
    title: "CollabPad: Real-Time Peer Code & Markdown Scratchpad",
    overview: "A lightweight collaborative workspace where student study partners can co-edit code snippets and technical documentation simultaneously with live syntax highlighting.",
    techStack: ["WebSockets / WebRTC", "Prism.js / Monaco Editor", "Vanilla JS", "Node.js Server"],
    steps: [
      "Implement a split-screen markdown editor with live HTML rendering and syntax highlighting.",
      "Establish low-latency WebSocket connections for broadcasting text diffs across connected peers.",
      "Handle cursor position broadcasting so users see where peer teammates are currently typing.",
      "Provide one-click export to Markdown, PDF, and raw code files."
    ],
    learningOutcome: "Understand bidirectional real-time networking, conflict handling, and embedding rich web editors."
  },
  {
    id: "web-adv-portfolio",
    category: "web",
    difficulty: "advanced",
    goal: "portfolio",
    title: "NebulaOS: Web-Based Desktop Operating System Environment",
    overview: "A complex web engineering tour-de-force that replicates a futuristic desktop OS in the browser with draggable windows, virtual file system, terminal emulator, and apps.",
    techStack: ["Vanilla JavaScript / TypeScript", "Web Workers", "IndexedDB", "CSS Subgrid"],
    steps: [
      "Architect a window manager supporting maximize, minimize, drag-and-drop, and z-index ordering.",
      "Implement a virtual file system utilizing IndexedDB with full mkdir, touch, cat, and rm shell commands.",
      "Build native apps: a code editor, a media player, a retro game, and a system performance monitor.",
      "Optimize rendering pipelines using requestAnimationFrame and decoupled state machines."
    ],
    learningOutcome: "Build complex architecture patterns, event-driven state management, and memory-safe client-side application design."
  },

  // ROBOTICS & IOT PROJECTS
  {
    id: "robotics-beg-skill",
    category: "robotics",
    difficulty: "beginner",
    goal: "skill",
    title: "PulseGuard: Ultrasonic Distance Alert System",
    overview: "A beginner hardware project using an ultrasonic distance sensor to measure obstacle proximity and trigger multi-stage acoustic and LED warning sequences.",
    techStack: ["Arduino / ESP32", "C++", "HC-SR04 Sensor", "Piezo Buzzer & RGB LED"],
    steps: [
      "Calculate physical distance in centimeters using sound wave time-of-flight equations.",
      "Create non-blocking timer loops in C++ using millis() instead of blocking delay() calls.",
      "Program progressive audio beeping frequencies that accelerate as obstacles move closer.",
      "Log serial telemetry to monitor distance precision across diverse reflective surfaces."
    ],
    learningOutcome: "Understand microsecond timing, sensor calibration, hardware interrupt fundamentals, and non-blocking C++ architecture."
  },
  {
    id: "robotics-beg-problem",
    category: "robotics",
    difficulty: "beginner",
    goal: "problem",
    title: "SmartDorm: Automated IoT Plant Hydration Assistant",
    overview: "Prevents indoor plants from dying during student semester breaks by monitoring soil conductivity and autonomously activating a miniature 5V water pump.",
    techStack: ["ESP8266 / ESP32", "C++", "Soil Moisture Sensor", "5V Relay & Submersible Pump"],
    steps: [
      "Calibrate capacitive soil sensor readings between saturated soil and dry air thresholds.",
      "Trigger the relay driver for 5 seconds when moisture drops below the critical 25% boundary.",
      "Connect the ESP32 to Wi-Fi to push push-notification alerts to your phone via Telegram bot.",
      "Assemble the electronic circuitry into a neat, water-resistant 3D-printed enclosure."
    ],
    learningOutcome: "Safely switch higher-current DC actuators with relays and build closed-loop autonomous control systems."
  },
  {
    id: "robotics-int-portfolio",
    category: "robotics",
    difficulty: "intermediate",
    goal: "portfolio",
    title: "AeroTelemetry: Live Drone & Robotics Ground Control Station",
    overview: "A mission control web dashboard that connects via USB serial or WebSockets to an autonomous robot, displaying artificial horizon, GPS trajectory, and motor health.",
    techStack: ["Web Serial API", "Leaflet.js / OpenStreetMap", "Three.js Attitude Indicator", "CSS Grid"],
    steps: [
      "Interface directly with the robot's flight controller using the cutting-edge Web Serial API.",
      "Parse MavLink / NMEA telemetry packets at 20Hz without dropping serial frames.",
      "Render a real-time 3D artificial horizon representing roll, pitch, and yaw orientation.",
      "Plot live vehicle GPS waypoints onto an interactive offline satellite map."
    ],
    learningOutcome: "Bridge raw hardware serial communication directly into modern browser environments for aerospace and robotics telemetry."
  },

  // CYBERSECURITY PROJECTS
  {
    id: "cyber-beg-skill",
    category: "cybersecurity",
    difficulty: "beginner",
    goal: "skill",
    title: "CryptoVault: Interactive Cryptographic Cipher Visualizer",
    overview: "An educational web suite demonstrating how historical and modern encryption works—from Caesar and Vigenère ciphers to AES-GCM and asymmetric RSA keypairs.",
    techStack: ["HTML5 / CSS3", "JavaScript ES6+", "Web Crypto API", "Canvas Animation"],
    steps: [
      "Implement classic substitution and transposition algorithms with step-by-step matrix animations.",
      "Leverage the native browser window.crypto.subtle API to generate 256-bit AES encryption keys.",
      "Demonstrate cryptographic hash collisions and the avalanche effect by changing single input letters.",
      "Provide an interactive tamper test showing how modified ciphertexts fail authentication checks."
    ],
    learningOutcome: "Understand asymmetric vs symmetric encryption, cryptographic nonce generation, and hardware-accelerated Web Cryptography."
  },
  {
    id: "cyber-beg-problem",
    category: "cybersecurity",
    difficulty: "beginner",
    goal: "problem",
    title: "PhishShield: Student Email Header & Phishing Scanner",
    overview: "Helps university students identify suspicious phishing emails by parsing raw email headers, checking SPF/DKIM/DMARC authentication records, and detecting spoofed links.",
    techStack: ["JavaScript / Python", "DNS Lookup API", "Regex Security Rules", "HTML5"],
    steps: [
      "Create an email header analyzer that extracts Received hops, Return-Path, and Sender IP addresses.",
      "Inspect SPF (Sender Policy Framework) and DKIM alignment to flag sender domain spoofing.",
      "Highlight hidden Unicode homoglyphs and suspicious zero-day redirect URLs in the body text.",
      "Generate an educational threat breakdown score advising the user whether to delete or report the message."
    ],
    learningOutcome: "Learn email transmission mechanics, internet protocol security headers, and social engineering threat mitigation."
  },
  {
    id: "cyber-int-port",
    category: "cybersecurity",
    difficulty: "intermediate",
    goal: "portfolio",
    title: "SentinelSOC: Real-Time Network Threat Anomaly Detector",
    overview: "A lightweight Security Operations Center dashboard simulating live firewall syslog streams, highlighting port scan attacks, and triggering automated IP containment.",
    techStack: ["Python / Node.js", "WebSockets", "Chart.js / Canvas", "Tailwind / Glassmorphism"],
    steps: [
      "Generate realistic RFC 5424 syslog streams simulating HTTP brute force, SSH probes, and SYN floods.",
      "Implement sliding-window rate-limiting algorithms to flag IP addresses exceeding anomaly thresholds.",
      "Display threat intelligence geographic origin pins on an interactive world vector map.",
      "Provide an interactive 'Quarantine Host' control that simulates iptables firewall isolation."
    ],
    learningOutcome: "Understand Security Information & Event Management (SIEM), intrusion detection concepts, and defensive security workflows."
  },

  // DATA SCIENCE PROJECTS
  {
    id: "data-beg-skill",
    category: "data",
    difficulty: "beginner",
    goal: "skill",
    title: "StatScope: Interactive Statistical Distribution Playground",
    overview: "An educational visualization tool allowing students to interactively manipulate sample sizes, means, and variances to visually grasp the Central Limit Theorem.",
    techStack: ["HTML5 Canvas", "Vanilla JavaScript", "KaTeX Math Rendering", "Modern CSS"],
    steps: [
      "Render dynamic Gaussian, Poisson, and Binomial distribution curves on responsive canvas elements.",
      "Add interactive sliders allowing users to tweak degrees of freedom and observe curve shifts in real-time.",
      "Simulate 10,000 automated coin tosses or dice rolls to demonstrate the Central Limit Theorem visually.",
      "Render mathematical equations with KaTeX formatted formulas that update dynamically."
    ],
    learningOutcome: "Solidify core probability theory, statistical sampling mathematics, and programmatic canvas graphing."
  },
  {
    id: "data-beg-problem",
    category: "data",
    difficulty: "beginner",
    goal: "problem",
    title: "EcoTransit: Campus Carbon Footprint & Commute Optimizer",
    overview: "Calculates individual and batch carbon emissions for university commuters based on vehicle type, distance, and traffic congestion, suggesting optimal carpooling routes.",
    techStack: ["JavaScript", "OpenStreetMap API", "Local Storage", "Chart.js"],
    steps: [
      "Model standard emission factors (grams CO2 per passenger-kilometer) across buses, bikes, and cars.",
      "Calculate route distances using open geographic coordinates and student postal sectors.",
      "Group nearby student commuters to recommend carbon-saving carpool networks.",
      "Produce visual personal sustainability scorecards with semester-long environmental badges."
    ],
    learningOutcome: "Apply algorithmic grouping, data modeling, and tangible environmental metrics to solve community campus challenges."
  },
  {
    id: "data-int-port",
    category: "data",
    difficulty: "intermediate",
    goal: "portfolio",
    title: "PulseMarket: Global Tech Industry Salary & Trend Radar",
    overview: "An exploratory data science dashboard analyzing 50,000+ developer compensation records across geographic regions, tech stacks, and experience levels.",
    techStack: ["Python / Pandas", "Plotly / D3.js", "Vanilla JS", "GitHub Pages"],
    steps: [
      "Clean and normalize heterogeneous currency and compensation data from open developer surveys.",
      "Perform multivariate linear regression to isolate the financial impact of specific technical skills.",
      "Build interactive violin plots and box-whisker charts showing median salaries with confidence intervals.",
      "Enable dynamic user filtering by experience level, remote status, and primary programming language."
    ],
    learningOutcome: "Rigorous exploratory data analysis (EDA), handling survey biases, and engineering publication-grade interactive visualizations."
  },

  // CLOUD COMPUTING PROJECTS
  {
    id: "cloud-beg-skill",
    category: "cloud",
    difficulty: "beginner",
    goal: "skill",
    title: "S3Drop: Client-Side Multi-Cloud Object Storage Explorer",
    overview: "A clean web interface for managing cloud file buckets (AWS S3 / Cloudflare R2 / MinIO) with client-side presigned URLs for secure direct-to-cloud uploads.",
    techStack: ["Vanilla JavaScript", "AWS SDK v3 for JS", "HTML5 Drag-and-Drop", "CSS3"],
    steps: [
      "Configure Amazon S3 or Cloudflare R2 CORS policies to allow browser-based HTTP PUT requests.",
      "Implement a sleek drag-and-drop file uploader showing progress bars and upload throughput.",
      "Generate temporary presigned download URLs with configurable expiration time windows.",
      "Build an interactive breadcrumb file explorer supporting folder navigation and deletion."
    ],
    learningOutcome: "Understand object storage architectures, Cross-Origin Resource Sharing (CORS), and presigned security tokens."
  },
  {
    id: "cloud-beg-problem",
    category: "cloud",
    difficulty: "beginner",
    goal: "problem",
    title: "PulsePing: Serverless Multi-Region Uptime Monitor",
    overview: "Provides free server and website uptime monitoring by running lightweight serverless health check cron jobs and reporting latency benchmarks across regions.",
    techStack: ["GitHub Actions Cron / Cloudflare Workers", "JavaScript", "HTML5 Dashboard", "Statuspage UI"],
    steps: [
      "Write a serverless edge worker that executes HTTP HEAD/GET probes against configured URLs every 5 minutes.",
      "Measure response latency, HTTP status codes, and TLS certificate expiration dates.",
      "Store historic latency logs in a lightweight cloud key-value store (Cloudflare KV / GitHub Gist).",
      "Render a public-facing 90-day status bar visual showing system reliability and incident logs."
    ],
    learningOutcome: "Harness edge computing, distributed cron scheduling, and public incident communication best practices."
  },
  {
    id: "cloud-adv-port",
    category: "cloud",
    difficulty: "advanced",
    goal: "portfolio",
    title: "KubeVisual: Interactive 3D Kubernetes Cluster Topology",
    overview: "An infrastructure visualizer that renders live Kubernetes cluster states—nodes, pods, services, and ingress routes—in a physical 3D interactive force graph.",
    techStack: ["Three.js", "Kubernetes API / JSON Simulator", "WebSockets", "Vite"],
    steps: [
      "Stream simulated or real k8s cluster event payloads (Pod creation, crash-loop backoffs, node scaling).",
      "Map cluster nodes as primary gravitational spheres with individual pods orbiting around them.",
      "Visually depict network traffic packets traveling between pods and ingress services with laser pulses.",
      "Provide interactive node-drain simulations to visualize automated pod rescheduling and resilience."
    ],
    learningOutcome: "Master distributed cluster architectures, container orchestration concepts, and complex 3D WebGL data representation."
  }
];

export const ROADMAP_STAGES = [
  {
    id: "stage-1",
    stageNumber: 1,
    name: "Spark — Discover Technology",
    phase: "Phase 01: Awakening & Orientation",
    duration: "Month 1 - 2",
    description: "The journey begins with curiosity. Demystify the landscape of modern computer science, understand how the internet operates from hardware to browser, and discover the subfield that ignites your passion.",
    keySkills: [
      "Computer Hardware & OS Architecture",
      "How the Internet & Web Protocols Work (HTTP, DNS, TCP/IP)",
      "Foundational Computational Thinking & Logic",
      "Setting up a Modern Developer Environment"
    ],
    learningActivity: "Dissect a real web application in your browser's Developer Tools (F12). Inspect Network traffic, examine DOM structure, and test how requests resolve across the globe.",
    practicalChallenge: "Write your first semantic HTML page describing a technology you love, style it with CSS variables, and inspect how your browser renders it on mobile viewports.",
    recommendedResource: "CS50: Introduction to Computer Science (Harvard / edX)",
    milestoneQuote: "Every complex system in the world started with a curious person wondering how the pieces connect."
  },
  {
    id: "stage-2",
    stageNumber: 2,
    name: "Foundations — Learn Programming",
    phase: "Phase 02: Syntax, Logic & Algorithms",
    duration: "Month 3 - 5",
    description: "Move from passive observer to active programmer. Master core programming structures, memory mechanics, algorithmic complexity (Big-O notation), and problem-solving discipline.",
    keySkills: [
      "Core Programming Syntax (C, C++, or Python)",
      "Data Structures: Arrays, Linked Lists, Stacks, Queues, Hash Maps",
      "Algorithmic Thinking: Recursion, Sorting, Searching",
      "Time & Space Complexity Analysis (Big-O)"
    ],
    learningActivity: "Solve 2-3 focused algorithmic problems each week on platforms like LeetCode or HackerRank. Focus on code readability, edge cases, and computational efficiency.",
    practicalChallenge: "Implement a student grade management system in C/Python using structs/classes and dynamic arrays with search and sort operations.",
    recommendedResource: "MIT 6.0001: Introduction to Computer Science and Programming in Python",
    milestoneQuote: "Code is the closest thing to magic—you speak logic, and machines manifest reality."
  },
  {
    id: "stage-3",
    stageNumber: 3,
    name: "Explore — Understand Modern Tools",
    phase: "Phase 03: The Developer Toolkit",
    duration: "Month 6 - 7",
    description: "Professional engineers are defined by their mastery of the developer workflow. Adopt Git version control, command-line fluencies, package managers, and modern build tools.",
    keySkills: [
      "Git & GitHub Workflows: Commits, Branches, Pull Requests",
      "Command Line (Bash/Zsh/PowerShell) Mastery",
      "Package Managers (npm, pip) & Environment Management",
      "Modern Bundlers & Dev Servers (Vite, Webpack)"
    ],
    learningActivity: "Create a GitHub account, set up SSH keys, push a structured repository, and create a GitHub Actions workflow to automate code checks on every push.",
    practicalChallenge: "Fork an open repository, fix a typo or add a minor documentation improvement, and submit your very first polite GitHub Pull Request.",
    recommendedResource: "The Missing Semester of Your CS Education (MIT)",
    milestoneQuote: "Tools amplify human capability. Master the terminal, and you master the machine."
  },
  {
    id: "stage-4",
    stageNumber: 4,
    name: "Create — Build Your First Project",
    phase: "Phase 04: The Builder Mindset",
    duration: "Month 8 - 10",
    description: "Bridge theory and practice. Take an original concept from blank whiteboard to functional deployment, overcoming real debugging hurdles, responsive layouts, and user experience nuances.",
    keySkills: [
      "Full Project Lifecycle: Scoping, Prototyping, Coding, Testing",
      "Responsive UI/UX Design & Glassmorphism Aesthetics",
      "Client-Side State Management & Local Storage Persistence",
      "Static Site Deployment (Netlify, Vercel, GitHub Pages)"
    ],
    learningActivity: "Choose an idea from the NEXORA Innovation Lab and build a production-ready application within 7 days. Focus on high polish, responsive layouts, and zero console errors.",
    practicalChallenge: "Deploy your finished project to a live public URL, test it on mobile screens, and share the link with college classmates for honest feedback.",
    recommendedResource: "Full Stack Open (University of Helsinki) & MDN Web Docs",
    milestoneQuote: "You don't truly understand code until you build something people can touch and use."
  },
  {
    id: "stage-5",
    stageNumber: 5,
    name: "Collaborate — Join Developer Communities",
    phase: "Phase 05: Collective Intelligence",
    duration: "Month 11 - 12",
    description: "Software engineering is fundamentally a team sport. Participate in college hackathons, open-source discussions, technical symposiums, and peer code reviews.",
    keySkills: [
      "Reading & Understanding Other People's Codebases",
      "Constructive Code Reviews & Clear Technical Writing",
      "Agile Collaboration & Pair Programming",
      "Public Technical Communication & Networking"
    ],
    learningActivity: "Form a 2-3 person student team to participate in an internal college or virtual hackathon. Build a rapid prototype within a 36-hour sprint.",
    practicalChallenge: "Write a detailed, structured technical README for one of your projects explaining the architecture, setup commands, and lessons learned.",
    recommendedResource: "Open Source Guides (GitHub) & Local University Tech Clubs",
    milestoneQuote: "If you want to go fast, go alone. If you want to go far, build together."
  },
  {
    id: "stage-6",
    stageNumber: 6,
    name: "Innovate — Develop Your Own Ideas",
    phase: "Phase 06: Vision & Impact",
    duration: "Year 2 and Beyond",
    description: "Synthesize everything you have learned to build novel technologies that solve authentic real-world problems. Transition from consumer of technology to creator of the future.",
    keySkills: [
      "System Architecture & Scalability Principles",
      "Integrating Advanced AI, Edge Hardware & Cloud Services",
      "User-Centric Product Thinking & Empathy",
      "Continuous Self-Directed Learning & Research"
    ],
    learningActivity: "Identify a friction point in your campus, local community, or daily life. Spec out a novel technical solution and engineer the minimum viable product.",
    practicalChallenge: "Publish your innovation as an open-source project with full documentation, demo video, and clear contributing guidelines.",
    recommendedResource: "Y Combinator Startup School & arXiv Computer Science Papers",
    milestoneQuote: "The best way to predict the future is to build it with your own hands."
  }
];

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#explore", label: "Explore" },
  { href: "#lab", label: "Innovation Lab" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#about", label: "About Creator" },
  { href: "#contact", label: "Contact" }
];
