export interface ExampleUsage {
  scenario: string;
  input?: string;
  output?: string;
  note?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  thumbnail?: string;
  Image?: string;
  techStack: string[];
  demoLink?: string | null;
  githubLink?: string | null;
  type: 'frontend' | 'backend' | 'fullstack' | 'hardware' | 'devops' | 'desktop' | 'data';
  year: number;
  slug: string;
  features: string[];
  challenges: string[];
  images: string[];
  exampleUsage?: ExampleUsage[];
  status?: 'live' | 'completed' | 'in-progress';
  impact?: string;
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool';
  proficiency: number;
  relatedSkills: string[];
  description: string;
}
