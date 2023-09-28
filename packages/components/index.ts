import plugin from "tailwindcss/plugin";
import { Components } from './src';

export const md3Components = plugin(function ({ addComponents }) {
  addComponents({
    ...Components()
  });
});