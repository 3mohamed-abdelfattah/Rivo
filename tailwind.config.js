/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: "#224F34",
        secondaryText: "#267D49",
        primaryBackground: "#C2EFD4",
        secondaryBackground: "#224F34",
      },
      screens: {
        '2xl': '1900px',
        'xl': '1250px',
        'lg': '950px',
        'md': '850px',
        'sm': '600px',
      },
    },
  },
  plugins: [],
}