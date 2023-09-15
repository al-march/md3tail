import plugin from 'tailwindcss/plugin';
import { AddComponents } from './components';
import tokens from './tokens.json';

const colors = tokens.entities
  .filter(entitiy => entitiy.type === 'color')
  .reduce((acc, token) => {
    const name = token.name.split('.');
    const isLight = name.at(-1) === 'light';
    if (isLight) {
      acc[name.slice(0, -1).join('-')] = token.value;
    }
    return acc;
  }, { 'onPrimary': 'pink' } as Record<string, string>)

export default plugin(function ({ addComponents, theme }) {
  console.log('colors', colors);

  addComponents({
    ...AddComponents(theme)
  });
}, {
  theme: {
    /** @See https://material-components.github.io/material-components-web-catalog/#/component/elevation */
    elevation: {
      0: '0 0 0 0 rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.14), 0 0 0 0 rgba(0,0,0,.12);',
      1: '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);',
      2: '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);',
      3: '0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);',
      4: '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);',
    },
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
