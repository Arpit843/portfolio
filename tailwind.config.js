/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans:    ['DM Sans', 'sans-serif'],
        display: ['Syne',    'sans-serif'],
        mono:    ['DM Mono', 'monospace'],
      },
      colors: {
        sky:  { DEFAULT: '#0ea5e9' },
        teal: { DEFAULT: '#14b8a6' },
      },
      animation: {
        'fade-up':  'fade-up .6s cubic-bezier(.25,.46,.45,.94) both',
        'morph':    'morph 12s ease-in-out infinite',
        'ping-slow':'ping-slow 1.6s ease-out infinite',
      },
      keyframes: {
        'fade-up':  { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        'morph':    {
          '0%,100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%':     { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%':     { borderRadius: '50% 60% 30% 60% / 30% 40% 70% 60%' },
          '75%':     { borderRadius: '40% 60% 60% 40% / 60% 30% 60% 40%' },
        },
        'ping-slow':{ '0%': { transform: 'scale(1)', opacity: .8 }, '100%': { transform: 'scale(2.4)', opacity: 0 } },
      },
    },
  },
  plugins: [],
};
