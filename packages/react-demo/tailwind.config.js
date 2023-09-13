/** @type {import('tailwindcss').Config} */
const plugin = require('../tailwind/dist')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [plugin],
};
