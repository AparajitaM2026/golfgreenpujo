/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pujo: {
          red: '#8B0000',
          crimson: '#B22222',
          gold: '#FFD700',
          amber: '#F59E0B',
          saffron: '#FF9933',
          dark: '#1A0B0F',
          card: '#241016'
        }
      },
      fontFamily: {
        heading: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
