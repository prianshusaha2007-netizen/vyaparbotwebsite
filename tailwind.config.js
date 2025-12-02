// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          950: '#022c22', // Deepest Green
          900: '#064e3b', // Deep Green
          800: '#065f46', // Rich Green
          700: '#047857',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
        'royal-gradient': 'linear-gradient(to bottom, #022c22, #064e3b)',
      }
    }
  },
  plugins: [],
};
