# Modern Portfolio Website

A dynamic, interactive portfolio website built with modern web technologies. Features smooth animations, dark mode support, and responsive design.

## 🚀 Technologies Used

### Core
- React 18
- TypeScript
- Vite
- TailwindCSS

### Animation & Interaction
- Framer Motion
- React Intersection Observer

### UI Components
- Lucide React (Icons)

### Development Tools
- ESLint
- PostCSS
- Autoprefixer

## ✨ Features

### Design
- Responsive, mobile-first design
- Dark/light mode with system preference detection
- Smooth animations and transitions
- Interactive components
- Modern gradient effects
- Glassmorphism elements

### Components

#### Hero Section
- Animated introduction
- Social media links with hover effects
- Call-to-action buttons
- Dynamic background gradient

#### Project Timeline
- Interactive project cards
- Chronological display with year markers
- Tech stack visualization
- Live demo & GitHub links
- Lazy-loaded project images

#### Skills Visualization
- Interactive Venn diagram
- Skill proficiency indicators
- Related skills visualization
- Detailed skill information modals

## 🛠️ Setup & Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🎨 Customization

### Projects
Edit the projects array in `src/components/ProjectTimeline.tsx`:
```typescript
const projects = [
  {
    id: number,
    title: string,
    description: string,
    thumbnail: string,
    techStack: string[],
    demoLink?: string,
    githubLink?: string,
    type: 'frontend' | 'backend' | 'fullstack',
    year: number
  }
]
```

### Skills
Modify the skills data in `src/components/SkillsVenn.tsx`:
```typescript
const skills = [
  {
    name: string,
    category: 'language' | 'framework' | 'tool',
    proficiency: number,
    relatedSkills: string[],
    description: string
  }
]
```

### Theme
Customize colors and other theme variables in `tailwind.config.js`

## 🌟 Performance Features

- Lazy loading for images
- Smooth scrolling
- Optimized animations
- Responsive images
- Dark mode without flash
- Intersection Observer for scroll-based animations

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Progressive enhancement for older browsers

## 🔒 Best Practices

- TypeScript for type safety
- ESLint for code quality
- Semantic HTML
- Accessible UI components
- SEO-friendly structure
- Performance optimizations