import { MD3Color } from "@md3-ui/theme";

enum Radio {
  Color = '--md-radio-color',
  State = '--md-radio-state',
}

const Var = (variable: Radio) => `var(${variable})`;
const Input = 'input[type="radio"]';

export const RadioStyles = () => {
  return {
    '.radio': {
      [Radio.Color]: MD3Color('on-surface-variant'),
      [Radio.State]: 'transparent',

      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '22px',
      height: '22px',
      border: `2px solid ${Var(Radio.Color)}`,
      borderRadius: '100px',
      outline: `8px solid ${Var(Radio.State)}`,
      background: Var(Radio.State),
      cursor: 'pointer',
      transition: '0.15s ease all',

      [Input]: {
        opacity: '0',
        width: '0',
        height: '0'
      },

      [`&:has(${Input}:hover)`]: {
        [Radio.State]: MD3Color('on-surface', '0.08'),
      },
      [`&:has(${Input}:focus)`]: {
        [Radio.State]: MD3Color('on-surface', '0.12'),
      },
      [`&:has(${Input}:active)`]: {
        [Radio.State]: MD3Color('primary', '0.12'),
      },

      [`&:has(${Input}:checked)`]: {
        [Radio.Color]: MD3Color('primary'),

        '&:after': {
          content: '""',
          display: 'block',
          width: '12px',
          height: '12px',
          borderRadius: '100px',
          background: Var(Radio.Color),
          transition: '0.15s ease all',
        },

        '&:hover': {
          [Radio.State]: MD3Color('primary', '0.08'),
        },
        '&:focus': {
          [Radio.State]: MD3Color('primary', '0.12'),
        },
        '&:active': {
          [Radio.State]: MD3Color('on-surface', '0.12'),
        },
      },

      [`&:has(${Input}:disabled)`]: {
        [Radio.State]: 'transparent',
        opacity: '0.38',
      }
    }
  }
}