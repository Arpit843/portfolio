import { motion } from 'framer-motion';
import { useState } from 'react';
import type { Skill } from '../types';

const skills: Skill[] = [
  {
    name: "TypeScript",
    category: "language",
    proficiency: 90,
    relatedSkills: ["React", "Node.js"],
    description: "Modern typed JavaScript superset"
  },
  {
    name: "React",
    category: "framework",
    proficiency: 95,
    relatedSkills: ["TypeScript", "TailwindCSS"],
    description: "Frontend JavaScript library"
  },
  {
    name: "Docker",
    category: "tool",
    proficiency: 85,
    relatedSkills: ["Node.js", "PostgreSQL"],
    description: "Container platform"
  }
];

export const SkillsVenn = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const categoryPositions = {
    language: { x: '30%', y: '40%' },
    framework: { x: '50%', y: '60%' },
    tool: { x: '70%', y: '40%' }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills & Expertise
        </h2>

        <div className="relative h-[600px]">
          {/* Background circles */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="30"
              cy="40"
              r="25"
              className="fill-purple-100 dark:fill-purple-900/30"
            />
            <circle
              cx="50"
              cy="60"
              r="25"
              className="fill-blue-100 dark:fill-blue-900/30"
            />
            <circle
              cx="70"
              cy="40"
              r="25"
              className="fill-green-100 dark:fill-green-900/30"
            />
          </svg>

          {/* Skills */}
          {skills.map((skill) => {
            const position = categoryPositions[skill.category];
            
            return (
              <motion.div
                key={skill.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ left: position.x, top: position.y }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setSelectedSkill(skill)}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Skill details modal */}
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-black/50"
              onClick={() => setSelectedSkill(null)}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl max-w-md mx-4" onClick={e => e.stopPropagation()}>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {selectedSkill.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedSkill.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Related Skills:</h4>
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
        </div>
      </div>
    </section>
  );
};