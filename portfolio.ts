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
  title: "Hi all, I'm Harshtiwari",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with Python, Django, React.js, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "harsh21082004",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "harshtiwari.up2004@gmail.com",
  linkedin: "https://www.linkedin.com/in/harsh-tiwari-745a85274",
  github: "https://github.com/harsh21082004",
  instagram: "https://www.instagram.com/harshtiwari2108",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design",
    progressPercentage: "85",
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Raj Kumar Goel Institute of Technology",
    subHeader: "Bachelor of Technology in Computer Science and Engineering(Artificial Intelligence and Machine Learning)",
    duration: "November 2022 - Currently Pursuing",
    desc: "",
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Django Developer Intern",
    company: "Meganos Software",
    companyLogo: "/img/icons/common/meganos.png",
    date: "May 2024 - Present",
    desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Duseca Software",
    companyLogo: "/img/icons/common/duseca_software_logo.jpeg",
    date: "Jan 2023 - Sept 2023",
    desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "ZRTechnologies",
    companyLogo: "/img/icons/common/zrtech.jpeg",
    date: "Aug 2023 - Sep 2023",
    desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  },
  {
    role: "Backend Developer Intern",
    company: "Bleed-AI",
    companyLogo: "/img/icons/common/bleedAI.jpg",
    date: "Sept 2023 - Oct 2023",
    desc: "As a Django developer at Bleed AI, I integrated a computer vision AI model to process YouTube URLs on a website. I used Django Channels and Websockets to show real-time processing and implemented threading to run multiple instances of the AI model. I also used jQuery for UI rendering and deployed the website on a Heroku server.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/harsh21082004/developer-portfolio",
    link: "https://harsh-developer-portfolio.vercel.app/",
  },
  {
    name: "Full Stack Documentaion Website",
    desc: "A Full Stack Documentation Website built with Next.js, Tailwind CSS, and Markdown that helps you showcase your work and skills as a software developer.",
    github:"https://github.com/harsh21082004/test3",
    link: "https://test3.codebyte.vercel.app/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Varun Kumar Gupta",
    role: "Student at Raj Kumar Goel Institute of Technology",
    feedback:
      "You were a wonderful addition to our team. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Harsh is extremely difficult. He has contributed to the growth of our organization and continues to do so. I wish you all the best for your future endeavors.",
  },
  {
    name: "Vishal Tiwari",
    role: "Student at Raj Kumar Goel Institute of Technology",
    feedback:
      "Harsh has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Harsh is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Harsh for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Harsh Tiwari",
  description: greetings.description,
  author: "Harsh Tiwari",
  image: "https://avatars.githubusercontent.com/u/131223935?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Harshtiwari",
    "Harsh Tiwari",
    "@1hanzla100",
    "1hanzla100",
    "Portfolio",
    "Hanzla Portfolio ",
    "Harsh Tiwari Portfolio",
  ],
};
