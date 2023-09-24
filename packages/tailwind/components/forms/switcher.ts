import { mixColor, MD3Color, Fonts } from "../../theming";

enum Switcher {
  Height = '--switcher-height',
  Width = '--switcher-width',
  Background = '--switcher-background',
  BorderColor = '--switcher-border-color',
}

enum Handler {
  Background = '--switcher-handler-background',
  Transform = '--switcher-handler-transform',
  StateColor = '--switcher-state-color',
  Offset = '--switcher-handler-offset',
}

const Var = (variable: Switcher | Handler) => `var(${variable})`;

export const SwitcherStyles = () => {
  return {
    '.switcher': {
      [Switcher.Background]: MD3Color('surface-container-highest'),
      [Switcher.BorderColor]: MD3Color('outline'),

      [Handler.Background]: MD3Color('outline'),
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

      '&:hover': {
        [Handler.StateColor]: MD3Color('on-surface-variant', '0.08'),
        [Handler.Background]: MD3Color('on-surface-variant'),
      },

      '&:active, &:focus': {
        [Handler.StateColor]: MD3Color('on-surface-variant', '0.12'),
        [Handler.Background]: MD3Color('on-surface-variant'),
      },

      '&:active': {
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
          content: '""',
          position: 'absolute',
          top: Var(Handler.Offset),
          left: Var(Handler.Offset),
          right: Var(Handler.Offset),
          bottom: Var(Handler.Offset),
          margin: 'auto',
          borderRadius: '100px',
          background: Var(Handler.Background),
          transition: '0.25s ease all',
        }
      },

      '&:has(input[type="checkbox"]:checked)': {
        [Switcher.Background]: MD3Color('primary'),
        [Switcher.BorderColor]: MD3Color('primary'),
        [Handler.Background]: MD3Color('on-primary'),
        [Handler.Transform]: 'translateX(18px)',
        [Handler.Offset]: '2px',

        '&:hover': {
          [Handler.Background]: mixColor('primary-container', 'primary', '8%'),
        },
        '&:active, &:focus': {
          [Handler.Background]: mixColor('primary-container', 'primary', '12%'),
        },
        '&:active': {
          [Handler.Offset]: '0px',
        },
      }
    }
  }
}