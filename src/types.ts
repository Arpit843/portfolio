export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  demoLink?: string;
  githubLink?: string;
  type: 'frontend' | 'backend' | 'fullstack' | 'hardware';
  year: number;
  slug: string;
  fullDescription: string;
  features: string[];
  challenges: string[];
  images: string[];
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'hardware';
  proficiency: number;
  relatedSkills: string[];
  description: string;
  projectCount: number;
  totalProjects: number;
  usedInProjects: string[];
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  color: string;
}