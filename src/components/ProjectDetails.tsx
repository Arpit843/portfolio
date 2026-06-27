import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Zap, Wrench, Lightbulb, Terminal, ChevronRight } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Project not found</h1>
          <button onClick={() => navigate('/')} className="text-sky-500 hover:text-sky-600 flex items-center gap-2 mx-auto">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  const thumb = project.thumbnail ?? project.Image;

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as any },
  });

  return (
    <div className="pt-20 pb-16 px-4 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 min-h-screen transition-colors duration-500">
      <div className="max-w-5xl mx-auto">

        {/* Back */}
        <motion.button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 mb-10 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 group transition-colors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -4 }}
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </motion.button>

        {/* Header */}
        <motion.div className="mb-12" {...fadeUp(0.1)}>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag">{project.type}</span>
            <span className="tag mono">{project.year}</span>
            {project.status && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold mono"
                style={{
                  background: project.status === 'in-progress' ? '#f59e0b18' : '#0ea5e918',
                  color: project.status === 'in-progress' ? '#f59e0b' : '#0ea5e9',
                  border: `1px solid ${project.status === 'in-progress' ? '#f59e0b30' : '#0ea5e930'}`,
                }}
              >
                {project.status}
              </span>
            )}
          </div>

          <h1
            className="text-4xl md:text-5xl font-extrabold mb-5 gradient-text leading-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            {project.title}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {project.fullDescription}
          </p>
        </motion.div>

        {/* Impact banner */}
        {project.impact && (
          <motion.div className="impact-banner mb-10 flex gap-3" {...fadeUp(0.2)}>
            <Zap className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs font-semibold mono text-sky-500 uppercase tracking-wider mb-1">Impact</div>
              <p className="text-sm text-slate-700 dark:text-slate-300">{project.impact}</p>
            </div>
          </motion.div>
        )}

        {/* Images */}
        {project.images && project.images.length > 0 && (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12" {...fadeUp(0.3)}>
            {project.images.map((image, i) => (
              <motion.div
                key={i}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 bg-slate-100 dark:bg-slate-800 aspect-video"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <img
                  src={image}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.parentElement!.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 gap-2"><svg xmlns='http://www.w3.org/2000/svg' class='w-10 h-10' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'/></svg><span class='text-xs mono'>Add screenshot here</span><span class='text-xs text-slate-400'>${image}</span></div>`;
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Features + Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <motion.div
            className="bg-white dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/40 p-6 rounded-2xl"
            {...fadeUp(0.4)}
          >
            <div className="flex items-center gap-2 mb-5">
              <Lightbulb className="w-5 h-5 text-sky-500" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                Key Features
              </h2>
            </div>
            <ul className="space-y-3">
              {project.features.map((f, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.07 }}
                >
                  <ChevronRight className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" />
                  {f}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/40 p-6 rounded-2xl"
            {...fadeUp(0.45)}
          >
            <div className="flex items-center gap-2 mb-5">
              <Wrench className="w-5 h-5 text-teal-500" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                Technical Challenges
              </h2>
            </div>
            <ul className="space-y-3">
              {project.challenges.map((c, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.07 }}
                >
                  <ChevronRight className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                  {c}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Tech stack */}
        <motion.div
          className="bg-white dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/40 p-6 rounded-2xl mb-10"
          {...fadeUp(0.5)}
        >
          <h2 className="text-lg font-bold mb-4 text-slate-900 dark:text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map((tech, i) => (
              <motion.span
                key={tech}
                className="tag text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 + i * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Example Usage */}
        {project.exampleUsage && project.exampleUsage.length > 0 && (
          <motion.div className="mb-12" {...fadeUp(0.55)}>
            <div className="flex items-center gap-2 mb-5">
              <Terminal className="w-5 h-5 text-amber-500" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                Example Usage
              </h2>
            </div>
            <div className="space-y-4">
              {project.exampleUsage.map((ex, i) => (
                <motion.div
                  key={i}
                  className="usage-card"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                    {i + 1}. {ex.scenario}
                  </div>
                  {ex.input && (
                    <div className="mb-2">
                      <span className="text-xs mono text-sky-500 uppercase tracking-wider">Input</span>
                      <div className="code-block mt-1 text-xs">{ex.input}</div>
                    </div>
                  )}
                  {ex.output && (
                    <div className="mb-2">
                      <span className="text-xs mono text-teal-500 uppercase tracking-wider">Output</span>
                      <div className="code-block mt-1 text-xs" style={{ color: '#34d399' }}>{ex.output}</div>
                    </div>
                  )}
                  {ex.note && (
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-2 mono italic">
                      ℹ {ex.note}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA buttons */}
        <motion.div className="flex flex-wrap gap-4" {...fadeUp(0.7)}>
          {project.demoLink && (
            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 rounded-xl text-white font-semibold shadow-lg transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #0ea5e9, #14b8a6)' }}
              whileHover={{ scale: 1.04, y: -2, boxShadow: '0 8px 30px rgba(14,165,233,0.4)' }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </motion.a>
          )}
          {project.githubLink && (
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 rounded-xl border-2 border-sky-500/40 text-sky-600 dark:text-sky-400 hover:border-sky-500 hover:bg-sky-500/8 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Github className="w-4 h-4" /> Source Code
            </motion.a>
          )}
        </motion.div>
      </div>
    </div>
  );
};
