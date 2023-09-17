import tokens from '../tokens.json';
import { toCamelCase } from '../utils'
const lightColors = tokens.entities
  .filter(entitiy => entitiy.type === 'color')
  .reduce((acc, token) => {
    const name = token.name.split('.');
    const isLight = name.at(-1) === 'light';
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


const darkColors = tokens.entities
  .filter(entitiy => entitiy.type === 'color')
  .reduce((acc, token) => {
    const name = token.name.split('.');
    const isDark = name.at(-1) === 'dark';
    if (isDark) {
      /**
       * colorName - name of color without prefixes
       * @Example md.sys.color.secondary-container.light => secondaryContainer
       */
      let colorName = name.slice(3, -1).join('');
      acc[toCamelCase(colorName)] = token.value;
    }
    return acc;
  }, {} as Record<string, string>);


export const tokenColorsLight = lightColors;
export const tokenColorsDark = darkColors;