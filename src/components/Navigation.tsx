import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { theme, toggle, timeInfo, clockStr } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2.5' : 'py-4'}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* backdrop */}
      <div
        className={`absolute inset-0 transition-all duration-500 border-b ${
          scrolled
            ? 'backdrop-blur-xl bg-white/85 dark:bg-slate-950/88 border-slate-200/60 dark:border-slate-800/60'
            : 'bg-transparent border-transparent'
        }`}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <motion.div
            className="w-8 h-8 rounded-[9px] flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
            style={{ background: 'linear-gradient(135deg,#0ea5e9,#14b8a6)' }}
            whileHover={{ rotate: 8, scale: 1.1 }}
          >
            A
          </motion.div>
          <span className="font-extrabold text-[17px] text-slate-800 dark:text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            Arpit<span style={{ color: '#0ea5e9' }}>.</span>
          </span>
        </Link>

        {/* Center nav */}
        {isHome && (
          <nav className="hidden md:flex items-center gap-1">
            {[['Projects', '#projects'], ['Skills', '#skills'], ['Contact', '#contact']].map(([label, href]) => (
              <motion.a
                key={label}
                href={href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60 transition-all duration-200"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {label}
              </motion.a>
            ))}
          </nav>
        )}

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Time badge */}
          <div className="hidden sm:flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400" style={{ fontFamily: 'DM Mono, monospace' }}>
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${timeInfo.orbClass}`} />
            <span>{clockStr} · {timeInfo.period}</span>
          </div>

          {/* Theme toggle */}
          <motion.button
            onClick={toggle}
            className="w-14 h-7 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 relative flex items-center px-0.5 cursor-pointer"
            aria-label="Toggle theme"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-6 h-6 rounded-full flex items-center justify-center text-white flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#0ea5e9,#14b8a6)' }}
              animate={{ x: theme === 'dark' ? 28 : 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            >
              {theme === 'dark'
                ? <Moon className="w-3 h-3" />
                : <Sun  className="w-3 h-3" />}
            </motion.div>
          </motion.button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-500 dark:text-slate-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 glass border-b border-white/10 dark:border-white/5 px-6 pb-4 pt-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {[['Projects', '#projects'], ['Skills', '#skills'], ['Contact', '#contact']].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="block py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};
