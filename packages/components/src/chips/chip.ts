import { MD3Color, MD3Elevation, MD3Fonts, MD3Mix } from "@md3-ui/theme"
import { Var } from '../utils';

enum Vars {
  BackgroundColor = '--md-chip-background-color',
  BorderColor = '--md-chip-border-color',
  BorderRadius = '--md-chip-border-radius',
  BorderWidth = '--md-chip-border-width',
}

export const ChipStyles = () => {
  return {
    '.md-chip': {
      [Vars.BackgroundColor]: 'transparent',
      [Vars.BorderColor]: MD3Color('outline'),
      [Vars.BorderRadius]: '8px',
      [Vars.BorderWidth]: '1px',

      ...MD3Fonts['label-large'],
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'max-content',
      height: '32px',
      

      padding: `calc(6px - ${Var(Vars.BorderWidth)}) calc(12px - ${Var(Vars.BorderWidth)})`,
      gap: '8px',
      border: `${Var(Vars.BorderWidth)} solid ${Var(Vars.BorderColor)}`,
      borderRadius: Var(Vars.BorderRadius),
      background: Var(Vars.BackgroundColor),
      outline: 'none',
      transition: 'ease all .3s',

      '&:hover': {
        [Vars.BackgroundColor]: MD3Color('on-surface-variant', '0.08'),
      },
      '&:active, &:focus': {
        [Vars.BackgroundColor]: MD3Color('on-surface-variant', '0.12'),
      },

      '&-filled': {
        [Vars.BackgroundColor]: MD3Color('secondary-container'),
        [Vars.BorderColor]: 'transparent',

        '&:hover': {
          [Vars.BackgroundColor]: MD3Mix('secondary-container', 'on-secondary-container', '8%'),
        },
        '&:active, &:focus': {
          [Vars.BackgroundColor]: MD3Mix('secondary-container', 'on-secondary-container', '12%'),
        }
      },

      '&-elevated': {
        [Vars.BackgroundColor]: MD3Color('surface-container-low'),
        [Vars.BorderColor]: 'transparent',
        boxShadow: MD3Elevation(1),

        '&:hover': {
          [Vars.BackgroundColor]: MD3Mix('surface-container-low', 'on-surface', '8%'),
        },
        '&:active, &:focus': {
          [Vars.BackgroundColor]: MD3Mix('surface-container-low', 'on-surface', '12%'),
        }
      }
    }
  }
}