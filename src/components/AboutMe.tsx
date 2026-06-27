import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, MapPin, GraduationCap, Code2, Boxes, Zap, Award } from 'lucide-react';
import { projects } from '../data/projects';

const STATS = [
  { label: 'Projects shipped', value: `${projects.length}+`, Icon: Boxes },
  { label: 'Tech explored',    value: '20+',                  Icon: Code2 },
  { label: 'CGPA',             value: '7.06',                 Icon: Zap   },
];

const CERTIFICATIONS = [
  'CodeChef – Data Structures and Algorithms in Java',
  'CodeChef – Problem Solving in Java I & II',
  'NPTEL – Introduction to Industry 4.0 and Industrial IoT',
];

export const AboutMe = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="block text-[11px] uppercase tracking-[0.2em] text-sky-500 mb-2" style={{ fontFamily: 'DM Mono,monospace' }}>
            introduction
          </span>
          <h2 className="text-[34px] font-extrabold mb-3 gradient-text" style={{ fontFamily: 'Syne,sans-serif' }}>
            About Me
          </h2>
          <div className="section-sep mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-start">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="w-56 h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-sky-100 to-teal-100 dark:from-slate-800 dark:to-slate-700 border border-slate-200/60 dark:border-slate-700/40 flex items-center justify-center mb-5 relative group">
              <img
                src="/images/profile.jpg"
                alt="Arpit Shakkerwal"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.parentElement!.innerHTML = `
                    <div class="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600 p-6 text-center">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>
                      <span class="text-xs" style="font-family:'DM Mono',monospace">Add profile.jpg to<br/>/public/images/</span>
                    </div>`;
                }}
              />
            </div>
            <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Bengaluru, India</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 mb-5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>B.Tech CSE (DevOps), Presidency University</span>
            </div>

            {/* Resume download */}
            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white shadow-md w-full justify-center md:justify-start"
              style={{ background: 'linear-gradient(135deg,#0ea5e9,#14b8a6)' }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Bio + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-[1.85] mb-4">
              I'm a Computer Science undergraduate at Presidency University, Bengaluru, specializing in DevOps,
              with experience building web applications using React.js, Next.js, Node.js, PostgreSQL,
              and REST APIs. I like picking a real, specific problem and following it all the way down, whether
              that's designing a fair ticket routing algorithm, hand drawing SVG paths for 30 Indian states on a
              map, or automating CIS benchmark security hardening through a GUI.
            </p>
            <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-[1.85] mb-4">
              I'm skilled in developing scalable software solutions, workflow automation systems, and data driven
              applications, with a strong foundation in backend integration, databases, and problem solving
              and a growing interest in AI powered and enterprise SaaS platforms.
            </p>
            <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-[1.85] mb-6">
              Outside of web development, I've also built IoT systems including a Raspberry Pi device that
              alerts hearing impaired riders to emergency sirens which keeps me comfortable moving between
              a terminal, a circuit board, and a React component.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/40 rounded-xl p-4 text-center"
                >
                  <stat.Icon className="w-5 h-5 text-sky-500 mx-auto mb-2" />
                  <div className="text-xl font-extrabold text-slate-900 dark:text-white" style={{ fontFamily: 'Syne,sans-serif' }}>
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-amber-500" />
                <h3 className="text-[13px] font-bold text-slate-800 dark:text-slate-200" style={{ fontFamily: 'Syne,sans-serif' }}>
                  Certifications
                </h3>
              </div>
              <ul className="space-y-1.5">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert} className="text-[13px] text-slate-500 dark:text-slate-400 flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
