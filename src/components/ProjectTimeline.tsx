import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronLeft, ChevronRight,
         Layers, Globe, Server, Cpu, Terminal, Monitor, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../types';

/* ── Meta maps ───────────────────────────────── */
const TYPE_META: Record<string, { label: string; color: string; Icon: React.ElementType }> = {
  fullstack: { label: 'Full-Stack',  color: '#0ea5e9', Icon: Layers    },
  frontend:  { label: 'Frontend',   color: '#8b5cf6', Icon: Globe     },
  backend:   { label: 'Backend',    color: '#22c55e', Icon: Server    },
  hardware:  { label: 'Hardware',   color: '#f59e0b', Icon: Cpu       },
  devops:    { label: 'DevOps',     color: '#ef4444', Icon: Terminal  },
  desktop:   { label: 'Desktop',   color: '#ec4899', Icon: Monitor   },
  data:      { label: 'Data / Viz', color: '#14b8a6', Icon: BarChart2 },
};
const STATUS_META: Record<string, { label: string; color: string }> = {
  completed:    { label: 'Completed',    color: '#0ea5e9' },
  'in-progress':{ label: 'In Progress', color: '#f59e0b' },
  live:         { label: 'Live',         color: '#22c55e' },
};
const FILTERS = [
  { key: 'all',       label: 'All' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'frontend',  label: 'Frontend'   },
  { key: 'backend',   label: 'Backend'    },
  { key: 'hardware',  label: 'Hardware'   },
  { key: 'devops',    label: 'DevOps'     },
  { key: 'desktop',   label: 'Desktop'    },
  { key: 'data',      label: 'Data'       },
];

/* ── Project card ────────────────────────────── */
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const meta = TYPE_META[project.type] ?? TYPE_META.fullstack;
  const statusMeta = project.status ? STATUS_META[project.status] : null;
  const thumb = project.thumbnail ?? project.Image;

  return (
    <motion.div
      ref={ref}
      className="card group relative flex flex-col bg-white dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/40 rounded-2xl overflow-hidden shadow-sm hover-line-card glow-card"
      style={{ cursor: 'pointer' }}
      initial={{ opacity: 0, y: 48, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -7, transition: { duration: 0.25 } }}
    >
      {/* Thumbnail */}
      <div
        className="relative overflow-hidden h-48 flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${meta.color}14, ${meta.color}07)` }}
      >
        {thumb ? (
          <motion.img
            src={thumb}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.55 }}
            onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        ) : (
          <div className="flex flex-col items-center gap-2" style={{ color: meta.color, opacity: 0.18 }}>
            <meta.Icon className="w-14 h-14" />
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between z-10">
          <span
            className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide"
            style={{ fontFamily: 'DM Mono,monospace', background: `${meta.color}22`, color: meta.color, border: `1px solid ${meta.color}30` }}
          >
            {meta.label}
          </span>
          {statusMeta && (
            <span
              className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-1"
              style={{ fontFamily: 'DM Mono,monospace', background: `${statusMeta.color}18`, color: statusMeta.color, border: `1px solid ${statusMeta.color}30` }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: statusMeta.color }} />
              {statusMeta.label}
            </span>
          )}
        </div>

        {/* Year */}
        <span
          className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full text-[11px] text-white z-10"
          style={{ fontFamily: 'DM Mono,monospace', background: 'rgba(0,0,0,0.48)', backdropFilter: 'blur(8px)' }}
        >
          {project.year}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">
        <h3
          className="text-[15px] font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors duration-300 leading-snug"
          style={{ fontFamily: 'Syne,sans-serif' }}
        >
          {project.title}
        </h3>
        <p className="text-[13px] text-slate-500 dark:text-slate-400 mb-4 line-clamp-2 flex-grow leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 3).map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
          {project.techStack.length > 3 && (
            <span className="tag">+{project.techStack.length - 3}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <Link
            to={`/project/${project.slug}`}
            className="flex-1 text-center px-4 py-2 rounded-lg text-[12px] font-semibold text-white transition-all duration-200 hover:opacity-90"
            style={{ background: 'linear-gradient(135deg,#0ea5e9,#14b8a6)' }}
            onClick={e => e.stopPropagation()}
          >
            View Details
          </Link>
          {project.githubLink && (
            <motion.a
              href={project.githubLink} target="_blank" rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.93 }}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:border-sky-400/60 transition-colors"
            >
              <Github className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            </motion.a>
          )}
          {project.demoLink && (
            <motion.a
              href={project.demoLink} target="_blank" rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.93 }}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:border-teal-400/60 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* ── Slider wrapper ──────────────────────────── */
const ProjectSlider = ({ items }: { items: Project[] }) => {
  const vpRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const [offset, setOffset] = useState(0);

  const getCols = useCallback(() => {
    const w = vpRef.current?.offsetWidth ?? window.innerWidth;
    if (w < 560) return 1;
    if (w < 900) return 2;
    return 3;
  }, []);

  const maxIdx = useCallback(() => Math.max(0, items.length - getCols()), [items.length, getCols]);

  const computeOffset = useCallback((i: number) => {
    if (!vpRef.current) return 0;
    const cols = getCols();
    const gap = 20;
    const cardW = (vpRef.current.offsetWidth - (cols - 1) * gap) / cols;
    return i * (cardW + gap);
  }, [getCols]);

  const goTo = useCallback((i: number) => {
    const clamped = Math.max(0, Math.min(i, maxIdx()));
    setIdx(clamped);
    setOffset(computeOffset(clamped));
  }, [maxIdx, computeOffset]);

  // Recalculate on resize
  useEffect(() => {
    const handler = () => {
      const clamped = Math.min(idx, maxIdx());
      setIdx(clamped);
      setOffset(computeOffset(clamped));
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [idx, maxIdx, computeOffset]);

  // Reset when items change (filter switch)
  useEffect(() => { goTo(0); }, [items]);

  const cols = getCols();
  const dotCount = Math.max(0, items.length - cols + 1);
  const from = idx + 1;
  const to = Math.min(idx + cols, items.length);

  return (
    <div>
      {/* Viewport */}
      <div ref={vpRef} className="overflow-hidden rounded-2xl">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {items.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-5">
        {/* Counter */}
        <span className="text-[12px] text-slate-400 dark:text-slate-600" style={{ fontFamily: 'DM Mono,monospace' }}>
          {items.length ? `${from}–${to} of ${items.length}` : ''}
        </span>

        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: dotCount }, (_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`slider-dot${i === idx ? ' active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <button
            className="arrow-btn"
            onClick={() => goTo(idx - 1)}
            disabled={idx === 0}
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            className="arrow-btn"
            onClick={() => goTo(idx + 1)}
            disabled={idx >= maxIdx()}
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

/* ── Section ─────────────────────────────────── */
export const ProjectTimeline = () => {
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = filter === 'all' ? projects : projects.filter(p => p.type === filter);
  const sorted = [...filtered].sort((a, b) => b.year - a.year);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="block text-[11px] uppercase tracking-[0.2em] text-sky-500 mb-2" style={{ fontFamily: 'DM Mono,monospace' }}>
            portfolio
          </span>
          <h2 className="text-[34px] font-extrabold mb-3 gradient-text" style={{ fontFamily: 'Syne,sans-serif' }}>
            Featured Projects
          </h2>
          <div className="section-sep mx-auto mb-4" />
          <p className="text-slate-500 dark:text-slate-400 text-[14px] max-w-md mx-auto">
            {projects.length} projects spanning hardware, web, desktop, and data.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {FILTERS.map(f => {
            const count = f.key === 'all' ? projects.length : projects.filter(p => p.type === f.key).length;
            const active = filter === f.key;
            return (
              <motion.button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`filter-chip ${active ? 'filter-chip-active' : 'filter-chip-inactive'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {f.label}
                <span className="ml-1.5 opacity-55 text-[11px]">{count}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Animated filter swap + slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {sorted.length > 0
              ? <ProjectSlider items={sorted} />
              : (
                <p className="text-center py-20 text-slate-400 dark:text-slate-600" style={{ fontFamily: 'DM Mono,monospace' }}>
                  No projects in this category yet.
                </p>
              )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
