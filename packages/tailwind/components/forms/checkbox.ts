import { MD3Color } from "../../theming";

enum Checkbox {
  Background = '--md-checkbox-background',
  Color = '--md-checkbox-color',
  Border = '--md-checkbox-border-color',
  State = '--md-checkbox-state',
}

const Var = (variable: Checkbox) => `var(${variable})`;

const Input = 'input[type="checkbox"]';

export const CheckboxStyles = () => {
  return {
    '.checkbox': {
      [Checkbox.Border]: MD3Color('on-surface-variant'),
      [Checkbox.Background]: 'transparent',
      [Checkbox.State]: 'transparent',

      width: '18px',
      height: '18px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',

      background: Var(Checkbox.State),
      outline: `11px solid ${Var(Checkbox.State)}`,
      borderRadius: '100px',
      transition: '0.15s ease all',

      '&:after': {
        content: `""`,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: Var(Checkbox.Color),

        width: '18px',
        height: '18px',
        border: `2px solid ${Var(Checkbox.Border)}`,
        background: Var(Checkbox.Background),
        borderRadius: '2px',
        transition: '0.15s ease all',
      },

      [`&:has(${Input}:indeterminate)`]: {
        [Checkbox.Background]: MD3Color('primary'),
        [Checkbox.Border]: MD3Color('primary'),
        [Checkbox.Color]: MD3Color('on-primary'),

        '&:after': {
          content: `"-"`,
        }
      },

      [`&:not(:has(${Input}:checked))`]: {
        '&:hover': {
          [Checkbox.State]: MD3Color('on-surface', '0.08'),
        },

        '&:active': {
          [Checkbox.State]: MD3Color('on-surface', '0.12'),
        },
      },

      [`&:has(${Input}:focus)`]: {
        [Checkbox.State]: MD3Color('on-surface', '0.12'),
      },

      [`&:has(${Input}:checked)`]: {
        [Checkbox.Background]: MD3Color('primary'),
        [Checkbox.Border]: MD3Color('primary'),
        [Checkbox.Color]: MD3Color('on-primary'),

        '&:after': {
          content: `"✓"`
        },

        '&:hover': {
          [Checkbox.State]: MD3Color('primary', '0.08'),
        },

        '&:active': {
          [Checkbox.State]: MD3Color('primary', '0.12'),
        },

        [`&:has(${Input}:focus)`]: {
          [Checkbox.State]: MD3Color('primary', '0.12'),
        },
      },

      '&-error': {
        [Checkbox.Border]: MD3Color('error'),

        [`&:not(:has(${Input}:checked))`]: {
          '&:hover': {
            [Checkbox.State]: MD3Color('error', '0.08'),
          },

          '&:active': {
            [Checkbox.State]: MD3Color('error', '0.12'),
          },
        },

        [`&:has(${Input}:focus)`]: {
          [Checkbox.State]: MD3Color('error', '0.12'),
        },

        [`&:has(${Input}:checked)`]: {
          [Checkbox.Background]: MD3Color('error'),
          [Checkbox.Border]: MD3Color('error'),
          [Checkbox.Color]: MD3Color('on-error'),

          '&:after': {
            content: `"✓"`
          },

          '&:hover': {
            [Checkbox.State]: MD3Color('error', '0.08'),
          },

          '&:active': {
            [Checkbox.State]: MD3Color('error', '0.12'),
          },

          [`&:has(${Input}:focus)`]: {
            [Checkbox.State]: MD3Color('error', '0.12'),
          },
        },

        [`&:has(${Input}:indeterminate)`]: {
          [Checkbox.Background]: MD3Color('error'),
          [Checkbox.Border]: MD3Color('error'),
          [Checkbox.Color]: MD3Color('on-error'),
  
          '&:after': {
            content: `"-"`,
          }
        },
      },

      [`&:has(${Input}:disabled)`]: {
        opacity: '0.38',
        cursor: 'not-allowed',
      },

      [Input]: {
        opacity: 0,
        width: 0,
        height: 0,
      }
    }
  }
}