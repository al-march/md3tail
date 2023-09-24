import { mixColor, MD3Color, Fonts } from "../../theming";

enum Vars {
  IndicatorWidth = '--tabs-indicator-width',
  IndicatorHeight = '--tabs-indicator-height',
  BorderColor = '--tabs-border-color',
  TabsItemColor = '--tabs-item-color',
  TabsItemDirection = '--tabs-item-direction',
  TabsItemGap = '--tabs-item-gap',
}

const Var = (variable: Vars) => `var(${variable})`;

export const TabsStyles = () => {
  return {
    '.tabs': {
      [Vars.IndicatorWidth]: '24px',
      [Vars.IndicatorHeight]: '2px',
      [Vars.BorderColor]: MD3Color('surface-container-highest'),
      [Vars.TabsItemColor]: MD3Color('on-surface-variant'),
      [Vars.TabsItemDirection]: 'column',
      [Vars.TabsItemGap]: '2px',

      position: 'relative',
      display: 'inline-flex',
      width: 'fit-content',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: `1px solid ${Var(Vars.BorderColor)}`,

      '&:not(:has(.tabs-item-selected))': {
        [Vars.IndicatorHeight]: '0',
      },

      '&-item': {
        ...Fonts['title-small'],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1',
        padding: '8px 16px',
        minWidth: '120px',
        background: MD3Color('surface'),

        flexDirection: Var(Vars.TabsItemDirection),
        color: Var(Vars.TabsItemColor),
        gap: Var(Vars.TabsItemGap),

        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        transition: '0.15s ease all',

        '&:hover': {
          background: mixColor('surface', 'on-surface', '8%'),
        },
        '&:focus, &:active': {
          background: mixColor('surface', 'on-surface', '12%'),
        },

        '&-selected': {
          [Vars.TabsItemColor]: MD3Color('primary'),
          '&:hover': {
            background: mixColor('surface', 'primary', '8%'),
          },
          '&:focus, &:active': {
            background: mixColor('surface', 'primary', '12%'),
          }
        },
      },

      '&-indicator': {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        left: '0',
        bottom: '0',
        zIndex: '1',
        transition: '0.15s ease all',

        '&:after': {
          content: '""',
          background: MD3Color('primary'),
          width: Var(Vars.IndicatorWidth),
          height: Var(Vars.IndicatorHeight),
        }
      },

      '&-secondary': {
        [Vars.IndicatorWidth]: '100%',
        [Vars.TabsItemDirection]: 'row',
        [Vars.TabsItemGap]: '8px',
      },
    },
  }
}