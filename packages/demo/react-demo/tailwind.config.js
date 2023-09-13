/** @type {import('tailwindcss').Config} */
console.log('@md3-ui/tailwind', require('@md3-ui/tailwind'));

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@md3-ui/tailwind')],
};
