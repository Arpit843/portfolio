import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400">
            Portfolio
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 group-hover:w-full transition-all duration-300" />
            </Link>
            {isHome && (
              <>
                <a
                  href="#projects"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group"
                >
                  Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 group-hover:w-full transition-all duration-300" />
                </a>
                <a
                  href="#skills"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group"
                >
                  Skills
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 group-hover:w-full transition-all duration-300" />
                </a>
              </>
            )}
          </div>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </motion.div>
              {isHome && (
                <>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <a
                      href="#projects"
                      className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      Projects
                    </a>
                  </motion.div>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <a
                      href="#skills"
                      className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      Skills
                    </a>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};