/** @type {import('tailwindcss').Config} */

const fs = require("fs");
const path = require("path");
const { md3Theme } = require("../theme/dist");
const { md3Components } = require("../components/dist");

const tokens = fs.readFileSync(
  path.resolve(__dirname, "src", "css", "tokens.css"),
  "utf-8"
);

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    md3Theme({
      source: '#ffb68e',
      stateLayers: {
        hover: 0.08,
        focus: 0.1,
        drag: 0.16,
      },
    }),
    md3Components,
  ],
};
