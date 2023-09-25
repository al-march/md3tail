import { mixColor, MD3Color, Fonts } from "../../theming";

enum Checkbox {
  Color = '--md-checkbox-color',
  State = '--md-checkbox-state',
}

const Var = (variable: Checkbox) => `var(${variable})`;
const Input = 'input[type="radio"]';

export const RadioStyles = () => {
  return {
    '.radio': {
      [Checkbox.Color]: MD3Color('on-surface-variant'),
      [Checkbox.State]: 'transparent',

      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '22px',
      height: '22px',
      border: `2px solid ${Var(Checkbox.Color)}`,
      borderRadius: '100px',
      outline: `8px solid ${Var(Checkbox.State)}`,
      background: Var(Checkbox.State),
      cursor: 'pointer',
      transition: '0.15s ease all',

      [Input]: {
        opacity: 0,
        width: 0,
        height: 0
      },

      [`&:has(${Input}:hover)`]: {
        [Checkbox.State]: MD3Color('on-surface', '0.08'),
      },
      [`&:has(${Input}:focus)`]: {
        [Checkbox.State]: MD3Color('on-surface', '0.12'),
      },
      [`&:has(${Input}:active)`]: {
        [Checkbox.State]: MD3Color('primary', '0.12'),
      },

      [`&:has(${Input}:checked)`]: {
        [Checkbox.Color]: MD3Color('primary'),

        '&:after': {
          content: '""',
          display: 'block',
          width: '12px',
          height: '12px',
          borderRadius: '100px',
          background: Var(Checkbox.Color),
          transition: '0.15s ease all',
        },

        '&:hover': {
          [Checkbox.State]: MD3Color('primary', '0.08'),
        },
        '&:focus': {
          [Checkbox.State]: MD3Color('primary', '0.12'),
        },
        '&:active': {
          [Checkbox.State]: MD3Color('on-surface', '0.12'),
        },
      },

      [`&:has(${Input}:disabled)`]: {
        [Checkbox.State]: 'transparent',
        opacity: '0.38',
      }
    }
  }
}