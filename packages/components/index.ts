import plugin from "tailwindcss/plugin";
import { Components } from './src'

export const md3Components = plugin(function (api) {
  console.log('theme', api.config('md3Options.stateLayers'));

  api.addComponents({
    ...Components(api)
  });
});