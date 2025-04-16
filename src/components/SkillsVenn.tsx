import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Skill, SkillCategory } from '../types';
import { projects } from '../data/projects';

const calculateProjectStats = (skillName: string): { count: number; projects: string[] } => {
  const projectsUsingSkill = projects.filter(project => 
    project.techStack.includes(skillName)
  );
  return {
    count: projectsUsingSkill.length,
    projects: projectsUsingSkill.map(p => p.title)
  };
};

const skills: SkillCategory[] = [
  {
    name: "Languages",
    color: "purple",
    skills: [
      {
        name: "Python",
        category: "language",
        proficiency: 90,
        relatedSkills: ["Raspberry Pi", "Arduino", "GPIO"],
        description: "Primary language for hardware projects and data processing",
        ...calculateProjectStats("Python")
      },
      {
        name: "TypeScript",
        category: "language",
        proficiency: 95,
        relatedSkills: ["React", "Node.js"],
        description: "Modern typed JavaScript for web development",
        ...calculateProjectStats("TypeScript")
      },
      {
        name: "C++",
        category: "language",
        proficiency: 85,
        relatedSkills: ["Arduino", "Hardware Programming"],
        description: "Used for embedded systems and hardware programming",
        ...calculateProjectStats("C++")
      }
    ]
  },
  {
    name: "Hardware",
    color: "blue",
    skills: [
      {
        name: "Raspberry Pi",
        category: "hardware",
        proficiency: 90,
        relatedSkills: ["Python", "GPIO", "Sensors"],
        description: "Single-board computer for IoT and automation projects",
        ...calculateProjectStats("Raspberry Pi")
      },
      {
        name: "Arduino",
        category: "hardware",
        proficiency: 85,
        relatedSkills: ["C++", "Sensors", "IoT"],
        description: "Microcontroller for embedded systems",
        ...calculateProjectStats("Arduino")
      },
      {
        name: "Sensors",
        category: "hardware",
        proficiency: 80,
        relatedSkills: ["Arduino", "Raspberry Pi", "IoT"],
        description: "Various sensors for data collection and monitoring",
        ...calculateProjectStats("Sensors")
      }
    ]
  },
  {
    name: "Tools & Frameworks",
    color: "green",
    skills: [
      {
        name: "React",
        category: "framework",
        proficiency: 95,
        relatedSkills: ["TypeScript", "TailwindCSS"],
        description: "Frontend library for building user interfaces",
        ...calculateProjectStats("React")
      },
      {
        name: "GPIO",
        category: "tool",
        proficiency: 85,
        relatedSkills: ["Raspberry Pi", "Python"],
        description: "General Purpose Input/Output for hardware control",
        ...calculateProjectStats("GPIO")
      },
      {
        name: "IoT",
        category: "tool",
        proficiency: 80,
        relatedSkills: ["Arduino", "Raspberry Pi", "Sensors"],
        description: "Internet of Things protocols and architecture",
        ...calculateProjectStats("IoT")
      }
    ]
  }
];

const ProjectSkillsVenn = ({ project }: { project: typeof projects[0] }) => {
  const projectSkills = project.techStack.map(tech => {
    const category = skills.find(cat => 
      cat.skills.some(skill => skill.name === tech)
    );
    return {
      name: tech,
      category: category?.name || "Other",
      color: category?.color || "gray"
    };
  });

  return (
    <div className="relative h-[300px] mb-8">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {projectSkills.map((skill, index) => {
          const angle = (2 * Math.PI * index) / projectSkills.length;
          const x = 50 + 30 * Math.cos(angle);
          const y = 50 + 30 * Math.sin(angle);
          
          return (
            <g key={skill.name}>
              <circle
                cx={x}
                cy={y}
                r="10"
                className={`fill-${skill.color}-100 dark:fill-${skill.color}-900/30`}
              />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-sm fill-current"
              >
                {skill.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export const SkillsVenn = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skills.map((category) => (
            <div key={category.name} className="space-y-6">
              <h3 className="text-2xl font-bold text-center mb-6">
                {category.name}
              </h3>
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedSkill(skill)}
                >
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h4>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                    <div
                      className={`bg-${category.color}-600 h-2 rounded-full`}
                      style={{ width: `${(skill.projectCount / projects.length) * 100}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Used in {skill.projectCount} of {projects.length} projects
                  </p>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">
          Project-Specific Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
            >
              <h4 className="text-xl font-bold mb-4">{project.title}</h4>
              <ProjectSkillsVenn project={project} />
              <Link
                to={`/project/${project.slug}`}
                className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
              >
                View Project Details →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Skill details modal */}
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => setSelectedSkill(null)}
          >
            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl max-w-md mx-4" 
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {selectedSkill.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {selectedSkill.description}
              </p>
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-gray-900 dark:text-white">
                  Used in Projects:
                </h4>
                <ul className="space-y-1">
                  {selectedSkill.usedInProjects.map(project => (
                    <li key={project} className="text-gray-600 dark:text-gray-400">
                      • {project}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-gray-900 dark:text-white">
                  Related Skills:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.relatedSkills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}

        {/* Project skills modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl max-w-md mx-4" 
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {selectedProject.title} - Tech Stack
              </h3>
              <ProjectSkillsVenn project={selectedProject} />
              <div className="space-y-4">
                {selectedProject.techStack.map(tech => {
                  const skillInfo = skills
                    .flatMap(cat => cat.skills)
                    .find(s => s.name === tech);
                  
                  return (
                    <div key={tech} className="border-t pt-4 first:border-t-0 first:pt-0">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {tech}
                      </h4>
                      {skillInfo && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {skillInfo.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full py-2 mt-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};