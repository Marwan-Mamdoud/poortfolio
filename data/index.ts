import { link } from "fs";

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const skills = [
  {
    cluster: "BACKEND_CORE",
    label: "Server-Side",
    icon: "dns",
    items: ["NODE.JS", "EXPRESS.JS", "NESTJS", "C#", ".NET CORE"],
  },
  {
    cluster: "FRONTEND_V1",
    label: "Client-Side",
    icon: "web",
    items: [
      "NEXT.JS",
      "REACT.JS",
      "TYPESCRIPT",
      "TAILWIND CSS",
      "JAVASCRIPT ES6+",
    ],
  },
  {
    cluster: "DATA_STORE",
    label: "Persistence",
    icon: "database",
    items: ["POSTGRESQL", "MONGODB", "REDIS", "SQL SERVER"],
  },
  {
    cluster: "CLOUD_OPS",
    label: "Infrastructure",
    icon: "cloud",
    items: ["DOCKER", "AWS", "LINUX", "NGINX", "CI/CD"],
  },
  {
    cluster: "TOOLS_MGT",
    label: "Tooling",
    icon: "build",
    items: ["GIT", "GITHUB", "POSTMAN", "JIRA"],
  },
  {
    cluster: "CONCEPTS",
    label: "Engineering Concepts",
    icon: "psychology",
    items: [
      "SYSTEM DESIGN",
      "DATA STRUCTURES & ALGORITHMS",
      "REST API DESIGN",
      "GRAPHQL",
      "MICROSERVICES",
      "OOP / SOLID",
      "DESIGN PATTERNS",
    ],
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Trego Tech",
    logo: "/trego_tech_logo.jpeg",
    duration: "Jan 2026 - Present",
    location: "Cairo, Egypt",
    type: "Full Time, Hybrid",
    directives: [
      "Developed and maintained scalable microservices-based backend systems supporting real-world production workloads.",
      "Designed and implemented independent, loosely coupled services to handle core domains such as users, orders, payments, and notifications.",
      "Built RESTful APIs and inter-service communication using Node.js, Express.js, and NestJS, following clean architecture and domain-driven principles.",
    ],
  },
  {
    id: 2,
    title: "Software Developer",
    company: "Anyware Software",
    logo: "/anyware_logo.jpeg",
    duration: "Oct 2025 - Jan 2026",
    location: "Cairo, Egypt",
    type: "Full Time, On Site",
    directives: [
      "Developed and customized enterprise systems for major clients including Dunkin' Donuts and Garnell.",
      "Worked on POS-integrated solutions with real-time order handling for Dine-In, Takeaway, and Delivery.",
      "Implemented business logic for order processing, receipt printing, and QR-based workflows.",
      "Built and maintained backend services using C#, .NET, Java Spring, Node.js, and Express.js.",
    ],
  },
  {
    id: 3,
    title: "Full Stack Javascript Developer",
    company: "Nobodiez Digital Agency",
    logo: "/Nobodiez.svg",
    duration: "Aug 2024 - Sep 2025",
    location: "Dubai, UAE",
    type: "Full Time, Remote",
    directives: [
      "Built and maintained web applications using MongoDB, Express.js, React.js, Node.js, and Next.js.",
      "Improved front-end load speed by 50% through code splitting and lazy loading.",
      "Refactored legacy backend services, increasing code maintainability by 25%.",
      "Reduced MongoDB query times by 65% via indexing and optimized schema design.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    company: "Trego Tech",
    title: "Rabta",
    subtitle: "Multi-Channel E-Commerce Management Platform",
    terminal: "rabta@trego:~",
    description:
      "A multi-channel e-commerce platform that connects merchants with marketplaces such as Shopify, Amazon, Noon, WooCommerce, Jumia, Trendyol, and Zid. Manages products, orders, inventory, shops, pricing, and synchronization across multiple sales channels.",
    tech: ["Node.js", "NestJS", "MongoDB", "REST APIs", "Microservices"],
    link: "https://dashboard.e-rabta.com/",
  },
  {
    id: 2,
    company: "Nobodiez Digital Agency",
    title: "Ajman Government",
    subtitle: "News & Journalist Management Platform",
    terminal: "ajman@nobodiez:~",
    description:
      "A real-time digital platform developed for the Ajman Government to support journalists and news management workflows. Enables monitoring, verification, and uploading of news with real-time synchronization across connected platforms.",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "WebSockets"],
    private: true,
  },
  {
    id: 3,
    company: "Anyware Software",
    title: "Gong Cha",
    subtitle: "Beverage & Cafe Management Platform",
    terminal: "gongcha@anyware:~",
    description:
      "A digital platform built for managing operations and customer-facing experiences for the Gong Cha beverage and cafe business. Supports digital workflows for products, orders, and integrated business operations.",
    tech: ["Node.js", "Express.js", "C#", ".NET", "SQL Server"],
    private: true,
  },
  {
    id: 4,
    company: "Anyware Software",
    title: "Pablo & Abdo",
    subtitle: "Cafe & Restaurant Management System",
    terminal: "pablo@anyware:~",
    description:
      "A digital platform developed for a cafe and restaurant business. Supports digital operations with functionality for managing products, services, and customer-facing workflows.",
    tech: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    private: true,
  },
  {
    id: 5,
    company: "Anyware Software",
    title: "Garnell",
    subtitle: "Cafe & Restaurant Digital Platform",
    terminal: "garnell@anyware:~",
    description:
      "A digital platform designed for a cafe and restaurant business, supporting digital presence and operational workflows. Provides structured management of restaurant content and services.",
    tech: ["Node.js", "Express.js", "MongoDB", "Java Spring"],
    private: true,
  },

  {
    id: 6,
    company: "Personal",
    title: "Duolingo Clone",
    subtitle: "Full-Stack Language Platform",
    terminal: "duolingo@local:~",
    description:
      "A full-featured Duolingo clone built with Next.js on the frontend and Node.js/Express.js on the backend, featuring MongoDB for data persistence, user authentication, progress tracking, and interactive lessons.",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript"],
    link: "https://lingo-silk-nine.vercel.app/",
    repo: "https://github.com/Marwan-Mamdoud",
    private: false,
  },
  {
    id: 7,
    company: "Personal",
    title: "Animated Apple iPhone 3D",
    subtitle: "Interactive 3D Experience",
    terminal: "iphone3d@local:~",
    description:
      "Recreated the Apple iPhone 15 Pro website with GSAP scroll-triggered animations and Three.js 3D model rendering, delivering an immersive product showcase experience.",
    tech: ["Next.js", "GSAP", "Three.js", "Tailwind CSS", "TypeScript"],
    link: "https://iphone-ui-rose.vercel.app/",
    repo: "https://github.com/Marwan-Mamdoud",
    private: false,
  },
  {
    id: 8,
    company: "Personal",
    title: "E-Commerce Platform",
    subtitle: "Enterprise Retail System",
    terminal: "ecommerce@local:~",
    description:
      "A large-scale e-commerce platform built with Next.js frontend and Node.js/Express.js backend, featuring product management, cart system, payment integration, and MongoDB data persistence.",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Stripe"],
    link: "https://center-kitchen-client.vercel.app/",
    repo: "https://github.com/Marwan-Mamdoud",
    private: false,
  },
  {
    id: 9,
    company: "Personal",
    title: "Real-Time Chat App",
    subtitle: "WebSocket Communication",
    terminal: "chatapp@local:~",
    description:
      "A real-time chat application with WebSocket support, built using React.js and Node.js/Express.js backend with MongoDB for message persistence, featuring rooms, typing indicators, and online status.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    link: "https://chatapp-frontend-olive.vercel.app/",
    repo: "https://github.com/Marwan-Mamdoud",
    private: false,
  },
];

export const contactInfo = {
  email: "marwanmamdouh159@gmail.com",
  phone: "+20 127 484 7904",
  location: "Cairo, Egypt",
};

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    href: "https://github.com/Marwan-Mamdoud",
    icon: "code",
  },
  {
    id: 2,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/marwan-mamdouh-full-stack/",
    icon: "work",
  },
  {
    id: 3,
    name: "WhatsApp",
    href: "tel:+201274847904",
    icon: "chat",
  },
];
