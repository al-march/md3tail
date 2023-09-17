/** @type {import('tailwindcss').Config} */
const {md3Tailwind} = require('../tailwind/dist')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [...md3Tailwind],
};
