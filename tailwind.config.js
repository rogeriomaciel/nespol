/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nespol: {
          yellow: '#F6DB17',
          yellowHover: '#E5CB0D',
          green: '#22C55E',
          neon: '#67FB70',
          dark: '#080C14',
          card: '#0F172A',
          border: '#1E293B',
        },
        brand: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
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
          '"Open Sans"',
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
