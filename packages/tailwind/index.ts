import plugin from 'tailwindcss/plugin';
import { AddComponents } from './components';
import tokens from './tokens.json';
import { toCamelCase } from './utils/utils';

/** @See https://material-components.github.io/material-components-web-catalog/#/component/elevation */
const elevation = {
  0: '0 0 0 0 rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.14), 0 0 0 0 rgba(0,0,0,.12);',
  1: '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);',
  2: '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);',
  3: '0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);',
  4: '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);',
  5: '0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);',
  6: '0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);',
  7: '0 4px 5px -2px rgba(0,0,0,.2), 0 7px 10px 1px rgba(0,0,0,.14), 0 2px 16px 1px rgba(0,0,0,.12);',
  8: '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);',
  9: '0 5px 6px -3px rgba(0,0,0,.2), 0 9px 12px 1px rgba(0,0,0,.14), 0 3px 16px 2px rgba(0,0,0,.12);',
  10: '0 6px 6px -3px rgba(0,0,0,.2), 0 10px 14px 1px rgba(0,0,0,.14), 0 4px 18px 3px rgba(0,0,0,.12);'
}

const colors = tokens.entities
  .filter(entitiy => entitiy.type === 'color')
  .reduce((acc, token) => {
    const name = token.name.split('.');
    const isLight = name.at(-1) === 'light';
    /** TODO: don't forget about dark theme with dark colors */
    if (isLight) {
      /**
       * colorName - name of color without prefixes
       * @Example md.sys.color.secondary-container.light => secondaryContainer
       */
      let colorName = name.slice(3, -1).join('');
      acc[toCamelCase(colorName)] = token.value;
    }
    return acc;
  }, {} as Record<string, string>)

export default plugin(function ({ addComponents, matchUtilities, theme }) {
  addComponents({
    ...AddComponents(theme)
  });

  matchUtilities(
    {
      elevation: (value) => ({
        boxShadow: value
      })
    },
    { values: theme('elevation') }
  )
}, {
  theme: {
    elevation,
    extend: {
      colors,
      borderRadius: {
        xs: '0.2rem',
        sm: '0.4rem',
      },
      spacing: {
        'sm': '0.2rem',
      }
    }
  }
});
