import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Layers, Database, Wrench, Lightbulb } from 'lucide-react';

/* Sourced directly from resume "Technical Skills" section */
const SKILL_GROUPS = [
  {
    label: 'Programming Languages',
    Icon: Code,
    color: '#0ea5e9',
    items: ['Java', 'JavaScript', 'TypeScript', 'Python'],
  },
  {
    label: 'Frontend',
    Icon: Layers,
    color: '#8b5cf6',
    items: ['React.js', 'Next.js', 'HTML5', 'CSS3'],
  },
  {
    label: 'Backend & Databases',
    Icon: Database,
    color: '#22c55e',
    items: ['Node.js', 'Prisma ORM', 'PostgreSQL', 'MySQL', 'Supabase'],
  },
  {
    label: 'Tools',
    Icon: Wrench,
    color: '#ef4444',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'IntelliJ IDEA', 'Docker', 'Linux', 'Ansible'],
  },
  {
    label: 'Concepts',
    Icon: Lightbulb,
    color: '#f59e0b',
    items: ['REST APIs', 'Workflow Automation', 'Responsive UI', 'Performance Optimization', 'OOP'],
  },
];

export const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="block text-[11px] uppercase tracking-[0.2em] text-sky-500 mb-2" style={{ fontFamily: 'DM Mono,monospace' }}>
            toolbox
          </span>
          <h2 className="text-[34px] font-extrabold mb-3 gradient-text" style={{ fontFamily: 'Syne,sans-serif' }}>
            Skills & Technologies
          </h2>
          <div className="section-sep mx-auto mb-4" />
          <p className="text-slate-500 dark:text-slate-400 text-[14px] max-w-md mx-auto">
            Everything here has shipped in at least one real project below — not just a checklist.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/40 rounded-2xl p-5 hover-line-card"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${group.color}18`, color: group.color }}
                >
                  <group.Icon className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-[14px] font-bold text-slate-900 dark:text-white" style={{ fontFamily: 'Syne,sans-serif' }}>
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: gi * 0.1 + 0.3 + ii * 0.04 }}
                    whileHover={{ scale: 1.07, y: -2 }}
                    className="tag text-[12px]"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
