/** @type {import('tailwindcss').Config} */
const { md3Theme } = require("../tailwind/dist");
const { md3Components } = require("../components/dist");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [md3Theme, md3Components],
};
