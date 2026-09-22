/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./lp*/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#38a5f6',
          500: '#0e87eb',
          600: '#026bc9',
          700: '#0355a2',
          800: '#074885',
          900: '#0b3d6f',
        },
        whatsapp: {
          light: '#25D366',
          dark: '#128C7E',
          hover: '#1EBE5D',
        }
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Inter',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      }
    },
  },
  plugins: [],
};
