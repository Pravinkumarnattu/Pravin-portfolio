// ─────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update
// your site — no need to touch components.
// ─────────────────────────────────────────────────────────

export const profile = {
  name: "Pravin Kumar M",
  roles: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Problem Solver",
    "Open Source Enthusiast",
  ],
  email: "pravinkumarnattu@gmail.com",
  phone: "+91-9524556633",
  location: "Salem, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/pravinkumarnattu",
  github: "https://github.com/Pravinkumarnattu",
  resumeFile: "/resume.pdf",
  summary:
    "MERN stack developer with hands-on experience building responsive full-stack web applications using React.js, Node.js, Express.js, MongoDB, and JWT-based authentication. Built and deployed projects covering REST APIs, protected routes, and responsive UI design. Seeking a full-time Software Development Engineer (SDE) role to leverage full-stack capabilities in driving robust product development and engineering execution.",
  funFacts: [
    "Solved 280+ problems on LeetCode",
    "Automated 3+ AI agent workflows with Make.com & N8N",
    "Shortlisted, Round 1 — HACKXELERATE 26 national hackathon",
    "Currently pursuing B.E. in Electronics & Communication Engineering",
  ],
};

export const stats = [
  { label: "Problems Solved", value: 280, suffix: "+" },
  { label: "Projects Shipped", value: 5, suffix: "+" },
  { label: "Workflow Automations", value: 3, suffix: "+" },
  { label: "CGPA", value: 7.8, suffix: "/10" },
];

export const education = [
  {
    school: "Knowledge Institute of Technology (KIOT)",
    location: "Salem, Tamil Nadu",
    degree: "B.E. in Electronics and Communication Engineering (ECE)",
    period: "Sep 2023 – Present",
    detail: "Current CGPA: 7.8 / 10",
  },
  {
    school: "Sri Vijay Vidhyalaya Matric Higher Secondary School",
    location: "Dharmapuri, Tamil Nadu",
    degree: "Higher Secondary Certificate",
    period: "Mar 2022 – Mar 2023",
    detail: "Percentage: 85%",
  },
];

export const skills = {
  Frontend: [
    { name: "React.js", level: 88 },
    { name: "React Router", level: 85 },
    { name: "Responsive Web Design", level: 90 },
    { name: "Bootstrap", level: 50 },
    { name: "DOM Manipulation", level: 85 },
  ],
  Backend: [
    { name: "Node.js", level: 84 },
    { name: "Express.js", level: 85 },
    { name: "RESTful APIs", level: 88 },
    { name: "JWT Authentication", level: 86 },
    { name: "Authorization / RBAC", level: 80 },
  ],
  Database: [
    { name: "MongoDB", level: 85 },
    { name: "Mongoose", level: 82 },
    { name: "SQL", level: 74 },
  ],
  Languages: [
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "C++", level: 78 },
    { name: "Python", level: 72 },
    { name: "Java", level: 60 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 88 },
    { name: "VS Code", level: 92 },
    { name: "Postman", level: 80 },
  ],
  Cloud: [
    { name: "Vercel", level: 85 },
    { name: "Render", level: 76 },
  ],
};

export const marqueeTech = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "JavaScript",
  "Tailwind CSS",
  "JWT",
  "Mongoose",
  "Git",
  "REST APIs",
  "C++",
  "Python",
  "Vercel",
  "Bootstrap",
];

export const projects = [
  {
    id: "food-waste-exchange",
    title: "Food Waste Exchange",
    category: "Full Stack",
    date: "July 2026",
    image: "/Food_waste_exchange.png",
    description:
      "A multi-role MERN platform connecting food donors, NGOs, and volunteers — reducing food waste through coordinated, real-time donation logistics.",
    features: [
      "Dynamic role-based registration for donors, NGOs, and volunteers",
      "JWT authentication with secure, cookie-based session management",
      "Role-based API access control via Express middleware",
      "bcrypt password hashing with protected admin provisioning to prevent privilege escalation",
    ],
    tech: [
      "React.js",
      "React Router",
      "Node.js",
      "Express.js",
      "Mongoose",
      "JWT",
      "bcrypt",
      "Axios",
      "JS-Cookie",
    ],
    github: "https://github.com/Pravinkumarnattu/Food-Waste-Exchange",
    demo: "https://food-waste-exchange-app.vercel.app",
    featured: true,
  },
  {
    id: "truthlens",
    title: "TruthLens",
    category: "Full Stack",
    date: "April 2026",
    image: "/Truthlens.png",
    description:
      "A fact-checking and misinformation-detection web app built on the MERN stack, designed to help users verify claims quickly and transparently.",
    features: [
      "Clean, distraction-free interface for submitting and reviewing claims",
      "Structured API layer for source verification workflows",
      "Secure authentication and protected routes",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Groq API"],
    github: "https://github.com/Pravinkumarnattu/TruthLens",
    demo: "https://truth-lens-app-nine.vercel.app/",
    featured: true,
  },
  {
    id: "ecommerce-nxt-trendz",
    title: "ECommerce — Nxt Trendz",
    category: "Frontend",
    date: "Nov 2025",
    image: "/NxtTrendz.png",
    description:
      "A multi-page e-commerce application with login, product listing, and cart flows, built around reusable UI components and protected routing.",
    features: [
      "Login, Product Listing, and Cart components with React Router",
      "Product search plus category & rating filters with React Context state management",
      "JWT-based route protection for sensitive pages via REST API calls",
    ],
    tech: [
      "React.js",
      "JavaScript",
      "CSS",
      "Bootstrap",
      "React Router",
      "REST APIs",
      "JWT",
    ],
    github: "https://github.com/Pravinkumarnattu/Nxt-Trendz",
    demo: "https://nxt-trendz-ivory.vercel.app/",
    featured: false,
  },
];

export const projectCategories = ["All", "Full Stack", "Frontend"];

export const experience = [
  {
    type: "internship",
    role: "Frontend Developer Intern",
    org: "Nxt Wave CCBP 4.0 Academy",
    location: "Remote",
    period: "Mar 2025 · 1 Month",
    points: [
      "Developed and optimized responsive web pages using HTML, CSS, and Bootstrap.",
      "Enhanced cross-device usability and improved rendering performance.",
    ],
  },
  {
    type: "hackathon",
    role: "HACKXELERATE 26 — National Hackathon",
    org: "KPR Institute of Engineering and Technology",
    location: "Tamil Nadu",
    period: "2026",
    points: [
      "Shortlisted for Round 1 among national-level entries.",
      "Collaborated in an intensive 24-hour innovation sprint.",
    ],
  },
  {
    type: "freelance",
    role: "AI Automation Builder",
    org: "Independent",
    location: "Remote",
    period: "2025 – Present",
    points: [
      "Built and deployed 3+ AI agent automations using Make.com and N8N for LinkedIn/Twitter workflows.",
      "Reduced manual posting time by 70%.",
    ],
  },
  
];

export const achievements = [
  {
    title: "HACKXELERATE 26",
    subtitle: "Shortlisted — Round 1, National Hackathon",
    icon: "trophy",
  },
  {
    title: "280+ LeetCode Problems",
    subtitle: "Data Structures, Algorithms & Problem Solving",
    icon: "code",
  },
  {
    title: "3+ AI Automations Deployed",
    subtitle: "Make.com & N8N workflows, 70% time saved",
    icon: "bolt",
  },
  {
    title: "Certified Projects",
    subtitle: "View certificates",
    icon: "award",
    link: "https://drive.google.com/drive/folders/1tsEFocCNvlBoMBQ9ZFX34eP-1zko62l9?usp=sharing",
  },
];

export const codingProfiles = [
  { name: "LeetCode", value: "280+ solved", link: "https://leetcode.com/u/Pravin_kumar_2/" },
  { name: "GitHub", value: "Active contributor", link: profile.github },
];

export const resumeHighlights = [
  "ATS-friendly single-column layout",
  "Quantified impact: 70% time reduction, 280+ problems solved",
  "Keyword-aligned with SDE / Full Stack MERN job descriptions",
  "Clear sections: Summary, Skills, Experience, Projects, Education, Achievements",
];
