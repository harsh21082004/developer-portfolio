import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Harsh Tiwari",
  title: "Hi all, I'm Harsh Tiwari",
  description:
    "Senior Full Stack & AI Engineer with a proven track record of architecting scalable web applications and integrating advanced Large Language Models. Specializing in high-performance MEAN/MERN systems, FastAPI microservices, and Agentic AI workflows (LangChain, LangGraph). Passionate about leading end-to-end development, optimizing system architectures, and bridging the gap between cutting-edge AI, robust cybersecurity, and exceptional user experiences.",
  resumeLink: "/Harsh_Tiwari_Updated_Resume .pdf",
};

export const openSource = {
  githubUserName: "harsh21082004",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:harshtiwari.up2004@gmail.com",
  linkedin: "https://www.linkedin.com/in/harsh-tiwari-745a85274",
  github: "https://github.com/harsh21082004",
  instagram: "https://www.instagram.com/harshtiwarishots",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "SENIOR SYSTEM ARCHITECT & AI ENGINEER EXPERT IN BUILDING HIGH-IMPACT, SCALABLE SOLUTIONS",
  data: [
    {
      title: "Full Stack Development & AI Engineering",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Designing robust RESTful APIs & microservices using Node.js, Express, and FastAPI"),
        emoji("⚡ Integrating Large Language Models (Gemini, Groq, Ollama) via LangChain for context-aware conversations"),
        emoji("⚡ Architecting advanced cybersecurity applications using Agentic AI frameworks like LangGraph"),
        emoji("⚡ Building responsive user interfaces using React.js, Next.js, and Angular"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "logos:typescript-icon",
        },
        {
          skillName: "Next.js",
          iconifyTag: "logos:nextjs-icon",
        },
        {
          skillName: "React.js",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Angular",
          iconifyTag: "logos:angular-icon",
        },
        {
          skillName: "Node.js",
          iconifyTag: "logos:nodejs-icon",
        },
        {
          skillName: "FastAPI",
          iconifyTag: "logos:fastapi",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb-icon",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design",
    progressPercentage: "90",
  },
  {
    Stack: "Backend",
    progressPercentage: "95",
  },
  {
    Stack: "AI & Cyber (Langchain, RAG)",
    progressPercentage: "90",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Raj Kumar Goel Institute of Technology",
    subHeader: "B.Tech, CSE (AI & ML) - SGPA: 8.5",
    duration: "Aug 2021 - 2025",
    desc: "Active participant and competitor in university tech hackathons and competitive programming events.",
    descBullets: [],
  },
  {
    schoolName: "Gyanodaya Inter College",
    subHeader: "Intermediate",
    duration: "Apr 2019 - Mar 2021",
    desc: "Percentage: 75.4%",
    descBullets: [],
  },
  {
    schoolName: "Gyanodaya Inter College",
    subHeader: "High School",
    duration: "Apr 2017 - Mar 2019",
    desc: "Percentage: 79.8%",
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Developer",
    company: "AKSIT Services Pvt. Ltd.",
    companyLogo: "/aksit.jpg",
    date: "Feb 2026 – Present",
    desc: "Spearheading the engineering and optimization of full-stack security tools utilizing scalable tech stacks. Architecting advanced RESTful APIs and distributed microservices using Node.js, Express.js, and FastAPI. Leading cross-functional collaboration on responsive, state-of-the-art user interfaces with React.js.",
    background: "transparent"
  },
  {
    role: "Software Engineer",
    company: "SpendWise",
    companyLogo: "https://www.spendwise.co.in/images/logo-transparent.png", 
    date: "Apr 2024 – Jul 2024",
    desc: "Architected 'BAE,' a high-performance Solana-based social app, integrating Phantom Wallet for automated crypto-rewards processing. Designed secure OAuth 2.0 authentication architecture via Passport.js, successfully reducing sign-up latency by 60% and drop-off rates by 15%. Engineered extensive frontend optimizations with React.js, improving vital page load speeds by over 300ms.",
    background: "black"
  },
];

export const projects: ProjectType[] = [
  {
    name: "Aegis (Agentic Red Teaming)",
    desc: "Architecting an advanced cybersecurity application leveraging agentic AI workflows for automated threat modeling and pentesting. Integrating autonomous AI agents to intelligently navigate, analyze, and report on system vulnerabilities in real-time.",
    github: "#", 
    link: "", 
  },
  {
    name: "Gwen (Intelligent AI Chatbot)",
    desc: "Architected an Agentic AI platform with an Angular frontend (NgRx) and a FastAPI backend for asynchronous processing. Integrated cloud and local LLMs (Groq, Gemini, Ollama) using LangChain for context-aware, low-latency conversations. Deployed a dual-authentication system combining Passport.js and custom JWT strategies.",
    github: "https://github.com/harsh21082004/Gwen",
    link: "",
  },
  {
    name: "Synergize AI",
    desc: "Engineered an AI-driven collaborative workspace integrating React.js with Python microservices for advanced data processing. Deployed Large Language Models utilizing LangChain to automate summarization, streamline workflows, and boost productivity.",
    github: "https://github.com/harsh21082004/Chat-App",
    link: "",
  },
  {
    name: "ERP Management System",
    desc: "Architected a comprehensive MERN-based ERP solution for educational institutions to streamline administrative workflows. Implemented Role-Based Access Control (RBAC) middleware, ensuring data integrity across Admin, Faculty, and Student portals.",
    github: "https://github.com/harsh21082004/erp",
    link: "",
  },
];

export const feedbacks: FeedbackType[] = [];

export const seoData: SEODataType = {
  title: "Harsh Tiwari | Full Stack & AI Engineer",
  description: greetings.description,
  author: "Harsh Tiwari",
  image: "https://avatars.githubusercontent.com/u/131223935?v=4",
  url: "https://github.com/harsh21082004", 
  keywords: [
    "Harsh Tiwari",
    "Full Stack Developer",
    "AI Engineer",
    "Python",
    "React",
    "Next.js",
    "Langchain",
    "Agentic AI",
    "Software Engineer",
    "Web Developer",
    "portfolio",
  ],
};
