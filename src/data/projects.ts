import type { Project } from '../types';

export const projects: Project[] = [
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
    year: 2023,
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
  }
];