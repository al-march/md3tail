import { PluginAPI } from "tailwindcss/types/config";
import { MD3Color, MD3ThemeConfig } from "@md3-ui/theme";

export const Var = <T>(variable: T) => `var(${variable})`;

const alphaValue = '<alpha-value>';

export type State = 'hover' | 'press' | 'focus' | 'drag';

function md3Color(this: PluginAPI['theme'], color: MD3Color, opacity = '1'): string {
  const md3 = this(`colors.${color}`) || '';
  return md3.replace(alphaValue, opacity);
}

export const getConfig = (api: PluginAPI): MD3ThemeConfig => {
  const config = api.config('md3Options.stateLayers') || {} as MD3ThemeConfig['stateLayers'];

  return {
    stateLayers: {
      hover: config.hover || '8%',
      press: config.press || '10%',
      focus: config.focus || '10%',
      drag: config.drag || '16%',
    }
  };
};

export const getColor = (api: PluginAPI): (color: MD3Color, opacity?: string) => string => md3Color.bind(api.theme);

export const getState = (api: PluginAPI) => (color: MD3Color, onColor: MD3Color, state: State) => {
  const color1 = md3Color.call(api.theme, color);
  const color2 = md3Color.call(api.theme, onColor);

  const config = getConfig(api);
  const percent = getPercent(config.stateLayers[state]);

  return `color-mix(in srgb, ${color1}, ${color2} ${getPercent(percent)})`;

  function getPercent(percent: string | number) {
    if (typeof percent === 'number') {
      return `${percent * 100}%`;
    } else {
      return percent;
    }
  }
};