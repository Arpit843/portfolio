/*import { motion } from 'framer-motion';
import { useState } from 'react';

// Dummy Data (You can replace this later)
const projects = [
  {
    techStack: ['React', 'TypeScript', 'Tailwind'],
  },
];

const skills = [
  {
    name: 'React',
    proficiency: 80,
    color: '#61DBFB', // light blue
  },
  {
    name: 'TypeScript',
    proficiency: 70,
    color: '#3178C6', // blue
  },
  {
    name: 'Tailwind',
    proficiency: 60,
    color: '#38B2AC', // teal
  },
];

const SkillsVenn = ({ project }: { project: typeof projects[0] }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const projectSkills = project.techStack.map((tech) => {
    const foundSkill = skills.find((s) => s.name === tech);
    return {
      name: tech,
      color: foundSkill?.color || 'gray',
      proficiency: foundSkill?.proficiency ?? 50,
    };
  });

  return (
    <div className="relative h-[400px] mb-8">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
        {projectSkills.map((skill, index) => {
          const angle = (2 * Math.PI * index) / projectSkills.length;
          const baseRadius = 60;
          const x = 100 + baseRadius * Math.cos(angle);
          const y = 100 + baseRadius * Math.sin(angle);

          const circleSize = 8 + skill.proficiency * 0.1; // Dynamic radius based on proficiency

          return (
            <motion.g
              key={skill.name}
              initial={{ scale: 0.8 }}
              animate={{ scale: hoveredSkill === skill.name ? 1.2 : 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <circle
                cx={x}
                cy={y}
                r={circleSize}
                fill={skill.color}
                opacity={hoveredSkill && hoveredSkill !== skill.name ? 0.3 : 1}
              />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="8"
                fill="black"
              >
                {skill.name}
              </text>
            </motion.g>
          );
        })}
      </svg>

      {/* Tooltip */
/*      {hoveredSkill && (
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-700 shadow-lg rounded-lg p-2 text-center text-sm font-medium">
          {hoveredSkill}
        </div>
      )}
    </div>
  );
};

export default SkillsVenn;*/