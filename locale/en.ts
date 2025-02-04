import React from "react";
import { FaCode, FaJava } from "react-icons/fa";
import {
  SiBootstrap,
  SiDjango,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiNextdotjs,
  SiNuxtdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpring,
  SiSqlite,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import Ecommerce from "@/public/projects/html_project.png";
import iFinder from "@/public/projects/ifinder_homepage.png";
import Inspectra from "@/public/projects/homepage.png";
import Sala from "@/public/projects/sala.png";
import { LuGraduationCap } from "react-icons/lu";

const en = {
  links: [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ],
  intro: {
    greeting: "PhalPhea Pheakdey",
    heading: "Front-End Developer",
    main: "I develop high-quality web applications using modern technologies",
    second:
      "My main stack includes HTML, CSS, JavaScript, React, Next.js, TypeScript, and Nuxt, among others.",
    contactButton: "Contact me here",
    downloadCV: "Download CV",
  },
  about: {
    title: "About me",
    first:
      "I am a Developer with solid experience in Web Development, as well as skills in pentester, UX/UI, back-end, deploy and databases. This allows me to collaborate in the comprehensive design of web , from their initial conception to deployment.",
    second:
      "I am a native Cambodian speaker with an medium level of English. I am familiar with Agile and Scrum methodologies, as well as the use of version control tools. My dedication and experience are reflected in the polished, high-quality projects I have developed for clients or shared on GitHub.",
    data: [
      {
        icon: React.createElement(SiReact),
        color: "#61dafb",
      },
      {
        icon: React.createElement(SiSwift),
        color: "#3178c6",
      },
      {
        icon: React.createElement(SiKotlin),
        color: "#7F52B0",
      },
      {
        icon: React.createElement(SiNextdotjs),
        color: "#000000",
      },
      {
        icon: React.createElement(SiTypescript),
        color: "#3178c6",
      },
      {
        icon: React.createElement(SiPython),
        color: "#3776ab",
      },
      {
        icon: React.createElement(SiDjango),
        color: "#44b78b",
      },
    ],
  },
  projects: {
    title: "My Projects",
    data: [
      {
        title: "Sala",
        description:
          "is a digital library designed to change the way teachers and students learn and communicate online.។",
        tags: ["HTML", "CSS", "Tailwind", "JavaScript, jQuery, Axios "],
        imageUrl: Sala,
        repositoryUrl: "https://github.com/hernanhawryluk/tasks-nodejs-backend",
        demoType: "Deploy",
        demoUrl: "https://sala-final.vercel.app/index.html",
      },
      {
        title: "E-Commerce",
        description: "Mini-Project Static Web E-Commerce Front-End",
        tags: ["HTML", "CSS", "Tailwind", "JavaScript"],
        imageUrl: Ecommerce,
        repositoryUrl: "https://github.com/PheakdeyPhalphea/mini-project.git",
        demoType: "Deploy",
        demoUrl: "https://mini-project-omega-navy.vercel.app/index.html",
      },
      {
        title: "iFinder",
        description:
          "IFinder is a new search engine designed to provide fast and accurate search results and strong support for the Khmer language, making it our top priority",
        tags: ["Next.Js", "CSS", "Tailwind", "TypeScript", "Spring", "Docker "],
        imageUrl: iFinder,
        repositoryUrl: "https://github.com/hernanhawryluk/tasks-nodejs-backend",
        demoType: "Deploy",
        demoUrl: "https://tasks-react-frontend.vercel.app",
      },
      {
        title: "Inspectra",
        description:
          "a An open-source white-box testing platform to streamline secure development through comprehensive source code analysis and vulnerability identification ",
        tags: [
          "Next.Js",
          "CSS",
          "Tailwind",
          "TypeScript",
          "Spring",
          "SonarQube",
          "Docker ",
        ],
        imageUrl: Inspectra,
        repositoryUrl:
          "https://github.com/PheakdeyPhalphea/inspectra_private.git",
        demoType: "Deploy",
        demoUrl: "https://inspectra.istad.co/",
      },
    ],
  },
  skills: {
    title: "My Skills",
    data: [
      {
        skill: "HTML",
        icon: React.createElement(SiHtml5),
        color: "#e34f26",
      },
      {
        skill: "CSS",
        icon: React.createElement(SiHtml5),
        color: "#264de4",
      },
      {
        skill: "JavaScript",
        icon: React.createElement(SiJavascript),
        color: "#f0db4f",
      },
      {
        skill: "TypeScript",
        icon: React.createElement(SiTypescript),
        color: "#3178c6",
      },
      {
        skill: "React",
        icon: React.createElement(SiReact),
        color: "#61dafb",
      },
      {
        skill: "Next.js",
        icon: React.createElement(SiNextdotjs),
        color: "#000000",
      },
      {
        skill: "Tailwind",
        icon: React.createElement(SiTailwindcss),
        color: "#38bdf8",
      },
      {
        skill: "Bootstrap",
        icon: React.createElement(SiBootstrap),
        color: "#7952b3",
      },
      {
        skill: "Python",
        icon: React.createElement(SiPython),
        color: "#3572A5",
      },
      {
        skill: "SQLite",
        icon: React.createElement(SiSqlite),
        color: "#3498db",
      },
      {
        skill: "PostgreSQL",
        icon: React.createElement(SiPostgresql),
        color: "#3498db",
      },

      {
        skill: "Git",
        icon: React.createElement(SiGit),
        color: "#f05032",
      },
      {
        skill: "GitHub",
        icon: React.createElement(SiGithub),
        color: "#000000",
      },
      {
        skill: "Figma",
        icon: React.createElement(SiFigma),
        color: "#f24e1e",
      },
      {
        skill: "Java",
        icon: React.createElement(FaJava),
        color: "#f24e1e",
      },
      {
        skill: "Docker",
        icon: React.createElement(SiDocker),
        color: "#2597ee",
      },
      {
        skill: "Spring",
        icon: React.createElement(SiSpring),
        color: "#60b837",
      },
      {
        skill: "Nuxt",
        icon: React.createElement(SiNuxtdotjs),
        color: "#12efa7",
      },
    ],
  },

  experience: {
    title: "My Experience",
    data: [
      {
        role: "Bacll National Certificated",
        location: "Beltei 3 High School",
        description: "High School",
        icon: React.createElement(LuGraduationCap),
        date: "2015 - 2020",
      },
      {
        role: "Graduated",
        location: "The university of cambodia ",
        description:
          "Graduated with a Bachelor's Degree in Information Technology.",
        icon: React.createElement(LuGraduationCap),
        date: "March 2021 - December 2024",
      },
      {
        role: "Basic Course",
        location: "Institute of Science and Technology Advanced Development",
        description: "Learn Java , Frontend, Spring, Database, Git, Deployment",
        icon: React.createElement(FaCode),
        date: "February 2024 - August 2024",
      },
      {
        role: "Advanced Course",
        location: "Institute of Science and Technology Advanced Development",
        description:
          "Cybersecurity : Basic Cybersecurity Law and Compliance, Cybersecurity Framework, Networking Fundamental for Hackers, Operating System Security and IoT, Information Security, Basic Ethical Hacking, Social Engineering, Web Application Security, Cryptography Basic, Static Application Security Testing, Security Assessment, Testing and Report, Python Scripting for Security",
        icon: React.createElement(FaCode),
        date: "August 2024 - January 2025",
      },
    ],
  },
  contact: {
    title: "Contact Me",
    message:
      "Don't hesitate to get in touch! I'm excited about new job opportunities. You can do so through this form, by sending me a direct email, or by connecting with me on LinkedIn or GitHub. Looking forward to connecting!",
  },
  footer: {
    text: "All rights reserved.",
    subtitle: "About this website",
    about:
      "built with React, Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.",
  },
  buttons: {
    theme: "Change theme",
    language: "Change language",
  },
};

export default en;
