/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f5efe6',
        sand: '#e8dccb',
        pastel: '#e9e6f5',
        blush: '#f1e4dd',
        navy: '#1f2a44',
        ink: '#151515',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(20,20,20,0.08)',
      },
    },
  },
  plugins: [],
}

