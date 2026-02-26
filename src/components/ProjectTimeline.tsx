import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group relative flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative overflow-hidden h-48">
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute top-4 right-4 px-3 py-1 text-sm font-medium text-white bg-blue-600/90 backdrop-blur-sm rounded-full">
          {project.year}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
            >
              {tech}
            </motion.span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        <div className="flex gap-3 mt-auto">
          <Link
            to={`/project/${project.slug}`}
            className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-sm font-medium"
          >
            View Details
          </Link>
          {project.githubLink && (
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors duration-300"
            >
              <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </motion.a>
          )}
          {project.demoLink && (
            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors duration-300"
            >
              <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectTimeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my journey through innovative solutions and technical challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};