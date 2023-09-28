import { MD3Mix, MD3Color } from "@md3-ui/tailwind";

enum Switcher {
  Height = '--switcher-height',
  Width = '--switcher-width',
  Background = '--switcher-background',
  BorderColor = '--switcher-border-color',
}

enum Handler {
  Icon = '--switcher-handler-icon',
  Background = '--switcher-handler-background',
  Color = '--switcher-handler-on-background',
  Transform = '--switcher-handler-transform',
  StateColor = '--switcher-state-color',
  Offset = '--switcher-handler-offset',
}

const Var = (variable: Switcher | Handler) => `var(${variable})`;

const Input = 'input[type="checkbox"]'

export const SwitcherStyles = () => {
  return {
    '.switcher': {
      [Switcher.Background]: MD3Color('surface-container-highest'),
      [Switcher.BorderColor]: MD3Color('outline'),

      [Handler.Icon]: 'attr(data)',
      [Handler.Background]: MD3Color('outline'),
      [Handler.Color]: MD3Color('surface-container-highest'),
      [Handler.Transform]: 'translateX(0)',
      [Handler.StateColor]: 'transparent',
      [Handler.Offset]: '7px',

      boxSizing: 'border-box',
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',

      borderStyle: 'solid',
      borderRadius: '100px',
      borderWidth: '2px',
      borderColor: Var(Switcher.BorderColor),
      background: Var(Switcher.Background),

      width: '52px',
      height: '34px',

      cursor: 'pointer',
      outline: 'none',
      transition: '0.15s ease all',

      [Input]: {
        opacity: '0',
        width: '0',
        height: '0',
      },

      '&:hover': {
        [Handler.StateColor]: MD3Color('on-surface-variant', '0.08'),
        [Handler.Background]: MD3Color('on-surface-variant'),
      },

      [`&:has(${Input}:focus), &:active, &:focus`]: {
        [Handler.StateColor]: MD3Color('on-surface-variant', '0.12'),
        [Handler.Background]: MD3Color('on-surface-variant'),
      },

      [`&:has(${Input}:active), &:active`]: {
        [Handler.Offset]: '0px',
      },

      '&-handler': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',

        width: '30px',
        height: '30px',
        transform: Var(Handler.Transform),
        transition: '0.25s ease all',

        outline: `6px solid ${Var(Handler.StateColor)}`,
        background: Var(Handler.StateColor),
        borderRadius: '100px',

        '&:after': {
          content: Var(Handler.Icon),
          fontFamily: 'system-ui',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: Var(Handler.Offset),
          left: Var(Handler.Offset),
          right: Var(Handler.Offset),
          bottom: Var(Handler.Offset),
          margin: 'auto',
          borderRadius: '100px',
          background: Var(Handler.Background),
          color: Var(Handler.Color),
          transition: '0.25s ease all',
        }
      },

      [`&:has(${Input}:checked)`]: {
        [Switcher.Background]: MD3Color('primary'),
        [Switcher.BorderColor]: MD3Color('primary'),
        [Handler.Background]: MD3Color('on-primary'),
        [Handler.Color]: MD3Color('on-primary-container'),
        [Handler.Transform]: 'translateX(18px)',
        [Handler.Offset]: '2px',

        '&:hover': {
          [Handler.Background]: MD3Mix('primary-container', 'primary', '8%'),
        },
        [`&:has(${Input}:active), &:has(${Input}:focus), &:active, &:focus`]: {
          [Handler.Background]: MD3Mix('primary-container', 'primary', '12%'),
        },
        [`&:has(${Input}:active), &:active`]: {
          [Handler.Offset]: '0px',
        },

        '&:has(input[type="checkbox"]:disabled)': {
          [Switcher.Background]: MD3Color('on-surface', '0.12'),
          [Switcher.BorderColor]: MD3Color('on-surface', '0.12'),
          [Handler.Background]: MD3Color('surface'),
          '&:hover': {
            [Handler.Background]: MD3Color('surface'),
          },
          '&:active, &:focus': {
            [Handler.Background]: MD3Color('surface'),
          },
        }
      },

      '&-with-icon': {
        [Handler.Offset]: '4px',
        [Handler.Icon]: 'attr(data-icon-unselected)',

        '&:has(input[type="checkbox"]:checked)': {
          [Handler.Icon]: 'attr(data-icon-selected)',
        }
      },

      '&:has(input:disabled)': {
        cursor: 'not-allowed',
        opacity: '0.38'
      }
    }
  }
}