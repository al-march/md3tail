import tokens from '../tokens.json';
import { toCamelCase } from '../utils'


export const tokenColorsLight = tokens.entities
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

export const tokenColorsDark = tokens.entities
  .filter(entitiy => entitiy.type === 'color')
  .reduce((acc, token) => {
    const name = token.name.split('.');
    const isDark = name.at(-1) === 'dark';
    /** TODO: don't forget about dark theme with dark colors */
    if (isDark) {
      /**
       * colorName - name of color without prefixes
       * @Example md.sys.color.secondary-container.light => secondaryContainer
       */
      let colorName = name.slice(3, -1).join('');
      acc[toCamelCase(colorName)] = token.value;
    }
    return acc;
  }, {} as Record<string, string>)