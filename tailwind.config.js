/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ethereal: {
          dark: '#030f0f',
          card: '#061717',
          surface: '#0a2221',
          border: '#113333',
          brand: '#2dd4bf', // Teal 400
          brandLight: '#5eead4', // Teal 300
          brandDark: '#14b8a6', // Teal 500
          text: '#f8fafc',
          textMuted: '#94a3b8',
        },
        primary: "#2dd4bf",
        secondary: "#14b8a6",
        dark: "#0f172a",
        card: "#111827",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}