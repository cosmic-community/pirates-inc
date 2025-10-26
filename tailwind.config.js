/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a5f',
          light: '#2d4a6f',
          dark: '#0f1d2f',
        },
        accent: {
          DEFAULT: '#d4af37',
          light: '#e6c253',
          dark: '#b8941f',
        },
        pirate: {
          sea: '#1a4d6f',
          treasure: '#ffd700',
          wood: '#5c4033',
          rope: '#c19a6b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        pirate: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}