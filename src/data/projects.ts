import type { Project } from '../types';

export const projects: Project[] = [
  
  
  
  {
    id: 6,
    title: "Personal Portfolio with System Provisioning",
    description: "A personal portfolio website showcasing skills using System Provisioning and Configuration Management",
    fullDescription: "Developed a personal portfolio website to showcase my skills and projects, utilizing principles of System Provisioning and Configuration Management. This project focused on automating the setup and deployment of the portfolio, ensuring a consistent and reproducible environment.",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14f959a61795?w=800&q=80",
    techStack: ["HTML", "CSS", "JavaScript", "Ansible", "Docker"],
    demoLink: "https://demo.com",
    githubLink: "https://github.com",
    type: "devops",
    year: 2024,
    slug: "personal-portfolio-provisioning",
    features: [
      "Automated deployment",
      "Infrastructure as Code (IaC)",
      "Consistent environment setup",
      "Showcase of projects and skills",
      "Responsive design"
    ],
    challenges: [
      "Learning and implementing provisioning tools",
      "Configuring automated deployment pipelines",
      "Ensuring environment consistency",
      "Managing infrastructure configurations"
    ],
    images: [
      "https://images.unsplash.com/photo-1517694712202-14f959a61795?w=800&q=80",
      "https://images.unsplash.com/photo-1607828672685-f11dd736b339?w=800&q=80"
    ]
  },
  {
    id: 1,
    title: "Eco-Tracking Web Application",
    description: "A full-stack application helping users monitor and modify environmental habits",
    fullDescription: "Built a comprehensive eco-tracking web application that enables users to monitor and modify their environmental habits. The application features real-time location services through OpenMaps integration and secure user management with Clerk authentication.",
    thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    techStack: ["React", "TypeScript", "Supabase", "Clerk", "OpenMaps"],
    demoLink: "https://demo.com",
    githubLink: "https://github.com",
    type: "fullstack",
    year: 2024,
    slug: "eco-tracking-app",
    features: [
      "Real-time habit tracking",
      "Interactive maps integration",
      "Secure authentication",
      "Environmental impact dashboard",
      "Personalized recommendations"
    ],
    challenges: [
      "Implementing real-time location tracking",
      "Optimizing data synchronization",
      "Ensuring data privacy compliance"
    ],
    images: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=800&q=80"
    ]
  },
  
  {
    id: 5,
    title: "Dynamic Bike Showroom Website",
    description: "A dynamic website for a bike showroom built with React and TypeScript",
    fullDescription: "Created a dynamic website for a bike showroom as a project for the Web Technologies course. The website features interactive elements and dynamic content rendering using React and TypeScript to showcase different bike models and information.",
    thumbnail: "https://images.unsplash.com/photo-1629139671647-c81157721467?w=800&q=80",
    techStack: ["React", "TypeScript", "HTML", "CSS"],
    demoLink: "https://demo.com",
    githubLink: "https://github.com",
    type: "frontend",
    year: 2023,
    slug: "bike-showroom-website",
    features: [
      "Interactive bike listings",
      "Detailed bike specifications",
      "Image galleries",
      "Contact forms",
      "Dynamic content updates"
    ],
    challenges: [
      "Implementing responsive design",
      "Managing component state effectively",
      "Ensuring smooth user interactions",
      "Integrating dynamic content"
    ],
    images: [
      "https://images.unsplash.com/photo-1629139671647-c81157721467?w=800&q=80",
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80"
    ]
  },
  {
    id: 2,
    title: "Hearing-Impaired Rider Assistance System",
    description: "Raspberry Pi-based system providing tactile and visual alerts for riders",
    fullDescription: "Developed an innovative assistance system for hearing-impaired riders using Raspberry Pi. The system processes environmental audio cues and provides tactile feedback through vibration sensors and visual alerts via LED displays.",
    thumbnail: "https://images.unsplash.com/photo-1558383331-f520f2888351?w=800&q=80",
    techStack: ["Python", "Raspberry Pi", "GPIO", "Audio Processing"],
    demoLink: "https://demo.com",
    githubLink: "https://github.com",
    type: "hardware",
    year: 2023,
    slug: "rider-assistance-system",
    features: [
      "Real-time audio processing",
      "Tactile feedback system",
      "LED visual alerts",
      "Environmental sound detection",
      "Customizable alert patterns"
    ],
    challenges: [
      "Minimizing latency in audio processing",
      "Optimizing power consumption",
      "Ensuring weather resistance"
    ],
    images: [
      "https://images.unsplash.com/photo-1558383331-f520f2888351?w=800&q=80",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
    ]
  },
  {
    id: 3,
    title: "Remote Patient Monitoring System",
    description: "Arduino-based healthcare solution for underserved areas",
    fullDescription: "Created an Arduino-based remote patient monitoring system that enables healthcare delivery in underserved areas. The system uses pulse and heart sensors to transmit vital signs to doctors through a web portal.",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    techStack: ["Arduino", "Web Portal", "Sensors", "IoT"],
    demoLink: "https://demo.com",
    githubLink: "https://github.com",
    type: "hardware",
    year: 2022,
    slug: "patient-monitoring",
    features: [
      "Real-time vital sign monitoring",
      "Web-based doctor portal",
      "Alert system for critical readings",
      "Data logging and analysis",
      "Low-power operation"
    ],
    challenges: [
      "Ensuring reliable data transmission",
      "Implementing fail-safes",
      "Optimizing for low-resource settings"
    ],
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      "https://images.unsplash.com/photo-1581093458791-9d42cc05b6ce?w=800&q=80"
    ]
  },
  {
    id: 4,
    title: "Bank Management System",
    description: "DBMS and Python-based backend for a functional bank",
    fullDescription: "Developed a fully functional bank management system utilizing DBMS and Python. This project implemented core banking functionalities with a focus on backend operations through the DBMS terminal, demonstrating a strong understanding of relational database concepts learned during CBSE Class 12th Computer Science.",
    thumbnail: "https://images.unsplash.com/photo-1556761175-b413da5ca68d?w=800&q=80",
    techStack: ["Python", "DBMS", "SQL"],
    demoLink: null,
    githubLink: "https://github.com",
    type: "backend",
    year: 2021,
    slug: "bank-management-system",
    features: [
      "Account creation and management",
      "Deposit and withdrawal transactions",
      "Balance inquiry",
      "Fund transfer",
      "Database management"
    ],
    challenges: [
      "Designing and implementing a robust database schema",
      "Ensuring data integrity and security",
      "Handling concurrent transactions",
      "Implementing all core RDBMS concepts"
    ],
    images: [
      "https://images.unsplash.com/photo-1556761175-b413da5ca68d?w=800&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
    ]
  }
];