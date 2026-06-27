import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const ROLES = ['Full-Stack Developer', 'IoT & Hardware Builder', 'DevOps Enthusiast', 'CS Engineer'];

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  size: 3 + Math.random() * 5,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: 7 + Math.random() * 10,
  delay: Math.random() * 6,
  color: i % 3 === 0 ? '#0ea5e9' : i % 3 === 1 ? '#14b8a6' : '#f59e0b',
}));

export const Hero = () => {
  const prefersReduced = useReducedMotion();
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (prefersReduced) { setDisplayed(ROLES[0]); return; }
    const target = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 62);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 36);
    } else {
      setDeleting(false);
      setRoleIdx(p => (p + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx, prefersReduced]);

  const socialLinks = [
    { icon: Github,   href: 'https://github.com/Arpit843',                              label: 'GitHub'   },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arpit-shakkerwal-402a34241/', label: 'LinkedIn' },
    { icon: Twitter,  href: 'https://x.com/arpit_8431',                                label: 'Twitter'  },
    { icon: Mail,     href: 'mailto:arpitshakkerwal@gmail.com',                        label: 'Email'    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden dot-grid">
      {/* bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-sky-50/50 to-teal-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 -z-10 transition-colors duration-500" />

      {/* Blobs */}
      <motion.div
        className="absolute top-10 left-[-8%] w-80 h-80 blob bg-sky-400/10 dark:bg-sky-500/7 -z-10"
        animate={prefersReduced ? {} : { rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-10 right-[-5%] w-96 h-96 blob bg-teal-400/10 dark:bg-teal-500/7 -z-10"
        animate={prefersReduced ? {} : { rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />

      {/* Particles */}
      {!prefersReduced && PARTICLES.map(p => (
        <motion.div
          key={p.id}
          className="particle absolute -z-10"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%`, background: p.color }}
          animate={{ y: [-18, 18, -18], x: [-10, 10, -10], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        {/* Available badge */}
        <motion.div
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 text-sm text-slate-600 dark:text-slate-400"
          style={{ fontFamily: 'DM Mono, monospace', fontSize: 12 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-[clamp(46px,9vw,82px)] font-extrabold leading-none tracking-[-2.5px] mb-2"
          style={{ fontFamily: 'Syne, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="gradient-text">Arpit</span>
          <br />
          <span className="text-slate-800 dark:text-slate-100">Shakkerwal</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          className="h-10 flex items-center justify-center mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 17, color: '#0ea5e9' }}>
            {displayed}
            <span className="cursor-blink ml-0.5" style={{ color: '#14b8a6' }}>|</span>
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          B.Tech CSE student passionate about building things that matter — from IoT safety devices
          to intelligent web platforms. I bridge hardware and software to solve real problems.
        </motion.p>

        {/* Social */}
        <motion.div className="flex justify-center gap-3 mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="p-2.5 glass rounded-xl hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.08 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.93 }}
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div className="flex flex-col sm:flex-row justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
          <motion.a
            href="#projects"
            className="px-8 py-3.5 rounded-xl font-semibold text-white shadow-lg"
            style={{ background: 'linear-gradient(135deg,#0ea5e9,#14b8a6)' }}
            whileHover={{ scale: 1.04, y: -2, boxShadow: '0 8px 32px rgba(14,165,233,.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="mailto:arpitshakkerwal@gmail.com"
            className="px-8 py-3.5 rounded-xl font-semibold border-2 border-sky-400/40 text-sky-600 dark:text-sky-400 hover:border-sky-500 hover:bg-sky-500/8 transition-all duration-300"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-[-110px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-600 bounce-soft"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <span style={{ fontSize: 10, fontFamily: 'DM Mono,monospace', textTransform: 'uppercase', letterSpacing: '0.2em' }}>scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};
