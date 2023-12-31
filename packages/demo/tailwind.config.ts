import type { Config } from 'tailwindcss';
import { md3Theme } from '@md3tail/theme';
import { THEME_SOURCE } from './app/constants/theme';

const config: Config = { 
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [md3Theme({ source: THEME_SOURCE })],
};
export default config;
