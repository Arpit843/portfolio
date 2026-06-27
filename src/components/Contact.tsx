import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Twitter, MapPin, Send, Phone } from 'lucide-react';
import { useState } from 'react';

const CONTACT_LINKS = [
  { Icon: Mail,     label: 'Email',    value: 'arpitshakkerwal@gmail.com', href: 'mailto:arpitshakkerwal@gmail.com',                          color: '#0ea5e9' },
  { Icon: Phone,    label: 'Phone',    value: null,           ,                                          color: '#22c55e' },
  { Icon: Github,   label: 'GitHub',   value: 'Arpit843',                  href: 'https://github.com/Arpit843',                                color: '#8b5cf6' },
  { Icon: Linkedin, label: 'LinkedIn', value: 'Arpit Shakkerwal',          href: 'https://www.linkedin.com/in/arpit-shakkerwal-402a34241/', color: '#0ea5e9' },
  { Icon: Twitter,  label: 'Twitter',  value: '@arpit_8431',               href: 'https://x.com/arpit_8431',                                   color: '#14b8a6' },
];

export const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const mailtoHref = `mailto:arpitshakkerwal@gmail.com?subject=${encodeURIComponent(
    `Portfolio enquiry from ${form.name || 'a visitor'}`
  )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="block text-[11px] uppercase tracking-[0.2em] text-sky-500 mb-2" style={{ fontFamily: 'DM Mono,monospace' }}>
            let's talk
          </span>
          <h2 className="text-[34px] font-extrabold mb-3 gradient-text" style={{ fontFamily: 'Syne,sans-serif' }}>
            Get In Touch
          </h2>
          <div className="section-sep mx-auto mb-4" />
          <p className="text-slate-500 dark:text-slate-400 text-[14px] max-w-md mx-auto flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> Based in India · open to remote opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            {CONTACT_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label === 'Email' || link.label === 'Phone' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/40 hover:border-sky-400/40 transition-colors group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${link.color}18`, color: link.color }}
                >
                  <link.Icon className="w-4.5 h-4.5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] text-slate-400 dark:text-slate-500" style={{ fontFamily: 'DM Mono,monospace' }}>
                    {link.label}
                  </div>
                  <div className="text-[14px] font-medium text-slate-800 dark:text-slate-200 truncate group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    {link.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Quick message form (mailto-based, no backend) */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={(e) => { e.preventDefault(); window.location.href = mailtoHref; }}
            className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/40 rounded-2xl p-5 space-y-3"
          >
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-sky-400 transition-colors"
            />
            <input
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-sky-400 transition-colors"
            />
            <textarea
              placeholder="Your message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={4}
              className="w-full px-4 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-sky-400 transition-colors resize-none"
            />
            <motion.button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg,#0ea5e9,#14b8a6)' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Send className="w-3.5 h-3.5" /> Send Message
            </motion.button>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center pt-1">
              Opens your email client — no backend, no data stored.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
