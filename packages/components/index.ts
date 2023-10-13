import plugin from "tailwindcss/plugin";
import { Components } from './src'

export const md3Components = plugin(function (api) {
  api.addComponents({
    ...Components(api)
  });
});