export const personalInfo = {
  name: "Suganthan G",
  role: "Java Spring Boot Developer",
  experience: "1.5+ Years Experience",
  headline: "Engineering Scalable Web Apps, Microservices & High-Throughput APIs",
  email: "suganth2378@gmail.com",
  location: "India",
  resumeUrl: "#", // Replace with your actual resume PDF link in public folder e.g. "/resume.pdf"
  socialLinks: {
    linkedin: "https://linkedin.com/in/suganthan-g",
    github: "https://github.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
  bio: "Java Spring Boot Developer with hands-on experience designing, developing, and maintaining scalable web applications and RESTful microservices. Skilled in Java, Spring Boot, Spring MVC, Spring Security, and Spring Data JPA/Hibernate, with strong working knowledge of MySQL and PostgreSQL. Experienced in payment gateways, logistics APIs, real-time WebSockets, push notifications, and JWT/OAuth authentication within Agile/Scrum teams.",
  stats: [
    { label: "Industry Experience", value: "1.5+ Yrs" },
    { label: "Microservices Deployed", value: "12+" },
    { label: "API Integrations", value: "10+" },
    { label: "Uptime & Reliability", value: "99.9%" },
  ]
};

export const skillsData = [
  {
    category: "Languages & Core",
    icon: "Code2",
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-orange-500/30",
    glow: "rgba(249, 115, 22, 0.4)",
    skills: ["Java (Core Java, OOP)", "JavaScript", "SQL", "TypeScript Basics"],
  },
  {
    category: "Backend Frameworks",
    icon: "Server",
    color: "from-emerald-500/20 to-green-500/20",
    border: "border-emerald-500/30",
    glow: "rgba(16, 185, 129, 0.4)",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Hibernate"],
  },
  {
    category: "APIs & Architecture",
    icon: "Network",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30",
    glow: "rgba(6, 182, 212, 0.4)",
    skills: ["RESTful Web Services", "Microservices Architecture", "JWT & OAuth2 Authentication", "WebSocket Real-Time"],
  },
  {
    category: "Integrations & Cloud Services",
    icon: "Layers",
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    glow: "rgba(168, 85, 247, 0.4)",
    skills: [
      "Razorpay Gateway",
      "Zoho Billing Subscriptions",
      "Delhivery Logistics API",
      "Firebase Cloud Messaging (FCM)",
      "Expo Push Notifications",
      "SMTP Mail Service",
      "AWS S3 Cloud Storage"
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-500/30",
    glow: "rgba(59, 130, 246, 0.4)",
    skills: ["PostgreSQL", "MySQL", "Database Indexing", "JPA Query Optimization"],
  },
  {
    category: "Tools & Frontend",
    icon: "Wrench",
    color: "from-teal-500/20 to-emerald-500/20",
    border: "border-teal-500/30",
    glow: "rgba(20, 184, 166, 0.4)",
    skills: ["Git & GitHub", "Maven", "Postman", "IntelliJ IDEA", "VS Code", "Agile / Scrum", "HTML5", "CSS3"],
  },
];

export const projectsData = [
  {
    id: "venba-logistics",
    title: "Venba - Transportation & Logistics Platform",
    tagline: "Comprehensive Multi-Platform Logistics Ecosystem",
    description: "An enterprise-grade logistics ecosystem comprising 2 responsive web portals, 2 cross-platform mobile apps, and a central Super Admin control room. Orchestrated real-time driver tracking, automated billing, and instant alerts.",
    category: "Microservices & Distributed Systems",
    metrics: "Sub-second sync • 6 Order Lifecycle Stages • High Concurrency",
    tags: ["Java", "Spring Boot", "PostgreSQL", "WebSocket", "Firebase FCM", "Zoho Billing", "Microservices"],
    features: [
      "Real-time bid & dispatch chat powered by bidirectional WebSockets.",
      "Firebase Cloud Messaging (FCM) automated push notifications across 6 critical order-delivery milestones.",
      "Secure passwordless and OTP authentication flows.",
      "Zoho Billing integration for automated subscription renewals, recurring invoicing, and tax-compliant receipts.",
      "Multi-tenant Super Admin panel for telemetry, live driver geofencing, and revenue analytics."
    ],
    accent: "from-emerald-500 to-teal-400",
    glowColor: "rgba(16, 185, 129, 0.3)"
  },
  {
    id: "em-agri-farm",
    title: "EM Agri Goat Farm - E-Commerce Platform",
    tagline: "End-to-End Agri-Commerce & Automated Logistics",
    description: "An automated direct-to-consumer and B2B agricultural commerce platform. Features end-to-end order processing, automated courier fulfillment dispatch, payment webhooks, and live inventory auditing.",
    category: "E-Commerce & Automated Logistics",
    metrics: "100% Automated Courier Dispatch • Zero Payment Dropouts",
    tags: ["Java", "Spring Boot", "PostgreSQL", "WebSocket", "Razorpay", "Delhivery API", "SMTP"],
    features: [
      "Automated third-party courier dispatch with Delhivery API creating shipping waybills and pickup manifests upon checkout.",
      "Secured zero-trust payments checkout with Razorpay signature verification and webhook listeners.",
      "Real-time live inventory and order status updates using WebSocket channels.",
      "Asynchronous transactional email confirmations using Spring Boot JavaMailSender (SMTP) with PDF invoice generation.",
      "Custom Admin Dashboard with live stock telemetry, batch tracking, and sales analytics."
    ],
    accent: "from-cyan-500 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.3)"
  }
];

export const certificationsData = [
  {
    title: "Java Full Stack Developer",
    issuer: "Besant Technologies",
    date: "Certified Professional",
    description: "Comprehensive enterprise training covering Core Java, Advanced Java, Spring Boot microservices, ORM Hibernate, RESTful APIs, and frontend integration.",
    icon: "Award"
  },
  {
    title: "Programming Using Java",
    issuer: "Infosys Springboard",
    date: "Certified",
    description: "In-depth mastery of object-oriented architecture, algorithmic problem solving, JVM memory management, and multithreading.",
    icon: "CheckCircle2"
  },
  {
    title: "Java Programming Fundamentals",
    issuer: "Infosys Springboard",
    date: "Certified",
    description: "Rigorous certification covering core language syntax, control structures, collection frameworks, and exception handling best practices.",
    icon: "CheckCircle2"
  }
];
