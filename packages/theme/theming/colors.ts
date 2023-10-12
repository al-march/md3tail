import { COLORS, CORE_COLORS, Color, MD3BaseColor, MD3PalleteColor, MD3StateColor, PALETTES, StatefullColors, MD3Color } from './base';
import { MD3ThemeConfig } from '../config';


const alphaValue = '<alpha-value>';

const getColor = <T extends Color>(color: T) => (
  `rgb(var(--md-sys-color-${color}) / ${alphaValue})`
);

const getPalette = <T extends string>(color: T) => (
  `rgb(var(--md-ref-palette-${color}) / ${alphaValue})`
);

const getPaletteList = <T extends string>(color: T) => {
  type Key = `${T}-${typeof PALETTES[number]}`;

  return PALETTES.reduce((acc, p) => {
    acc[`${color}-${p}`] = `rgb(var(--md-ref-palette-${color}${p}) / ${alphaValue})`;
    return acc;
  }, {} as Record<Key, string>);
};

const getColors = (config: MD3ThemeConfig): Record<MD3Color, string> => {
  const baseColors = generateBaseColors();
  const palettes = generatePalettes();
  const states = generateStateLayers(config.stateLayers);

  return {
    ...baseColors,
    ...palettes,
    ...states
  };

  function generateBaseColors(): Record<MD3BaseColor, string> {
    return COLORS.reduce((acc, c) => {
      acc[c] = getColor(c);
      return acc;
    }, {} as Record<Color, string>);
  }

  function generatePalettes(): Record<MD3PalleteColor, string> {
    return CORE_COLORS.reduce((acc, coreColor) => {
      PALETTES.forEach(palette => {
        const key: MD3PalleteColor = `${coreColor}${palette}`;
        acc[key] = `rgb(var(--md-ref-palette-${coreColor}${palette}) / ${alphaValue})`;
      });
      return acc;
    }, {} as Record<MD3PalleteColor, string>);
  }

  function generateStateLayers(
    stateLayers: MD3ThemeConfig['stateLayers'] = {},
  ) {
    const colors = Object.keys(baseColors) as StatefullColors[];
    const states = {} as Record<MD3StateColor, string>;

    colors.forEach((c) => {
      const onColorName = `on-${c}` as MD3BaseColor;
      const onColor = md3Color(onColorName);
      const color = md3Color(c);
      if (color && onColor) {
        states[`${c}-hover`] = md3Mix(c, onColorName, stateLayers.hover || '8%');
        states[`${c}-press`] = md3Mix(c, onColorName, stateLayers.press || '10%');
        states[`${c}-focus`] = md3Mix(c, onColorName, stateLayers.focus || '10%');
        states[`${c}-drag`] = md3Mix(c, onColorName, stateLayers.drag || '16%');
      }
    });

    return states;
  }

  function md3Mix(mdColor1: MD3BaseColor, mdColor2: MD3BaseColor, percent: string | number) {
    const color1 = md3Color(mdColor1);
    const color2 = md3Color(mdColor2);

    return `color-mix(in srgb, ${color1}, ${color2} ${getPercent(percent)})`;

    function getPercent(percent: string | number) {
      if (typeof percent === 'number') {
        return `${percent * 100}%`;
      } else {
        return percent;
      }
    }
  }

  function md3Color(mdColor: MD3BaseColor, opacity = '1'): string {
    if (baseColors[mdColor]) {
      return baseColors[mdColor].replace(alphaValue, opacity);
    }
    return '';
  }
};

export const md3Colors = (config: MD3ThemeConfig) => getColors(config);

