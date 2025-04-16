import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-purple-600 hover:text-purple-700 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="text-purple-600 hover:text-purple-700 flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-4xl font-bold mb-4 gradient-text">{project.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">{project.fullDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className="rounded-lg shadow-lg w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * index }}
                loading="lazy"
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span className="w-2 h-2 bg-purple-600 rounded-full" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Technical Challenges</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full" />
                    {challenge}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * index }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-600 hover:text-white transition-all"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};