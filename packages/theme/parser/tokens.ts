export const cssTokens = `
:root {
  --md-source: #6750A4;
  /* primary */
  --md-ref-palette-primary0: #000000;
  --md-ref-palette-primary10: #21005D;
  --md-ref-palette-primary20: #381E72;
  --md-ref-palette-primary30: #4F378B;
  --md-ref-palette-primary40: #6750A4;
  --md-ref-palette-primary50: #7F67BE;
  --md-ref-palette-primary60: #9A82DB;
  --md-ref-palette-primary70: #B69DF8;
  --md-ref-palette-primary80: #D0BCFF;
  --md-ref-palette-primary90: #EADDFF;
  --md-ref-palette-primary95: #F6EDFF;
  --md-ref-palette-primary99: #FFFBFE;
  --md-ref-palette-primary100: #FFFFFF;
  /* secondary */
  --md-ref-palette-secondary0: #000000;
  --md-ref-palette-secondary10: #1D192B;
  --md-ref-palette-secondary20: #332D41;
  --md-ref-palette-secondary30: #4A4458;
  --md-ref-palette-secondary40: #625B71;
  --md-ref-palette-secondary50: #7A7289;
  --md-ref-palette-secondary60: #958DA5;
  --md-ref-palette-secondary70: #B0A7C0;
  --md-ref-palette-secondary80: #CCC2DC;
  --md-ref-palette-secondary90: #E8DEF8;
  --md-ref-palette-secondary95: #F6EDFF;
  --md-ref-palette-secondary99: #FFFBFE;
  --md-ref-palette-secondary100: #FFFFFF;
  /* tertiary */
  --md-ref-palette-tertiary0: #000000;
  --md-ref-palette-tertiary10: #31111D;
  --md-ref-palette-tertiary20: #492532;
  --md-ref-palette-tertiary30: #633B48;
  --md-ref-palette-tertiary40: #7D5260;
  --md-ref-palette-tertiary50: #986977;
  --md-ref-palette-tertiary60: #B58392;
  --md-ref-palette-tertiary70: #D29DAC;
  --md-ref-palette-tertiary80: #EFB8C8;
  --md-ref-palette-tertiary90: #FFD8E4;
  --md-ref-palette-tertiary95: #FFECF1;
  --md-ref-palette-tertiary99: #FFFBFA;
  --md-ref-palette-tertiary100: #FFFFFF;
  /* error */
  --md-ref-palette-error0: #000000;
  --md-ref-palette-error10: #410E0B;
  --md-ref-palette-error20: #601410;
  --md-ref-palette-error30: #8C1D18;
  --md-ref-palette-error40: #B3261E;
  --md-ref-palette-error50: #DC362E;
  --md-ref-palette-error60: #E46962;
  --md-ref-palette-error70: #EC928E;
  --md-ref-palette-error80: #F2B8B5;
  --md-ref-palette-error90: #F9DEDC;
  --md-ref-palette-error95: #FCEEEE;
  --md-ref-palette-error99: #FFFBF9;
  --md-ref-palette-error100: #FFFFFF;
  /* neutral */
  --md-ref-palette-neutral0: #000000;
  --md-ref-palette-neutral10: #1C1B1F;
  --md-ref-palette-neutral20: #313033;
  --md-ref-palette-neutral30: #484649;
  --md-ref-palette-neutral40: #605D62;
  --md-ref-palette-neutral50: #787579;
  --md-ref-palette-neutral60: #939094;
  --md-ref-palette-neutral70: #AEAAAE;
  --md-ref-palette-neutral80: #C9C5CA;
  --md-ref-palette-neutral90: #E6E1E5;
  --md-ref-palette-neutral95: #F4EFF4;
  --md-ref-palette-neutral99: #FFFBFE;
  --md-ref-palette-neutral100: #FFFFFF;
  /* neutral-variant */
  --md-ref-palette-neutral-variant0: #000000;
  --md-ref-palette-neutral-variant10: #1D1A22;
  --md-ref-palette-neutral-variant20: #322F37;
  --md-ref-palette-neutral-variant30: #49454F;
  --md-ref-palette-neutral-variant40: #605D66;
  --md-ref-palette-neutral-variant50: #79747E;
  --md-ref-palette-neutral-variant60: #938F99;
  --md-ref-palette-neutral-variant70: #AEA9B4;
  --md-ref-palette-neutral-variant80: #CAC4D0;
  --md-ref-palette-neutral-variant90: #E7E0EC;
  --md-ref-palette-neutral-variant95: #F5EEFA;
  --md-ref-palette-neutral-variant99: #FFFBFE;
  --md-ref-palette-neutral-variant100: #FFFFFF;
  /* light */
  --md-sys-color-primary-light: #6750A4;
  --md-sys-color-on-primary-light: #FFFFFF;
  --md-sys-color-primary-container-light: #EADDFF;
  --md-sys-color-on-primary-container-light: #21005D;
  --md-sys-color-secondary-light: #625B71;
  --md-sys-color-on-secondary-light: #FFFFFF;
  --md-sys-color-secondary-container-light: #E8DEF8;
  --md-sys-color-on-secondary-container-light: #1D192B;
  --md-sys-color-tertiary-light: #7D5260;
  --md-sys-color-on-tertiary-light: #FFFFFF;
  --md-sys-color-tertiary-container-light: #FFD8E4;
  --md-sys-color-on-tertiary-container-light: #31111D;
  --md-sys-color-error-light: #B3261E;
  --md-sys-color-on-error-light: #FFFFFF;
  --md-sys-color-error-container-light: #F9DEDC;
  --md-sys-color-on-error-container-light: #410E0B;
  --md-sys-color-outline-light: #79747E;
  --md-sys-color-background-light: #FFFBFE;
  --md-sys-color-on-background-light: #1C1B1F;
  --md-sys-color-surface-light: #FFFBFE;
  --md-sys-color-on-surface-light: #1C1B1F;
  --md-sys-color-surface-variant-light: #E7E0EC;
  --md-sys-color-on-surface-variant-light: #49454F;
  --md-sys-color-inverse-surface-light: #313033;
  --md-sys-color-inverse-on-surface-light: #F4EFF4;
  --md-sys-color-inverse-primary-light: #D0BCFF;
  --md-sys-color-shadow-light: #000000;
  --md-sys-color-surface-tint-light: #6750A4;
  --md-sys-color-outline-variant-light: #CAC4D0;
  --md-sys-color-scrim-light: #000000;
  /* dark */
  --md-sys-color-primary-dark: #D0BCFF;
  --md-sys-color-on-primary-dark: #381E72;
  --md-sys-color-primary-container-dark: #4F378B;
  --md-sys-color-on-primary-container-dark: #EADDFF;
  --md-sys-color-secondary-dark: #CCC2DC;
  --md-sys-color-on-secondary-dark: #332D41;
  --md-sys-color-secondary-container-dark: #4A4458;
  --md-sys-color-on-secondary-container-dark: #E8DEF8;
  --md-sys-color-tertiary-dark: #EFB8C8;
  --md-sys-color-on-tertiary-dark: #492532;
  --md-sys-color-tertiary-container-dark: #633B48;
  --md-sys-color-on-tertiary-container-dark: #FFD8E4;
  --md-sys-color-error-dark: #F2B8B5;
  --md-sys-color-on-error-dark: #601410;
  --md-sys-color-error-container-dark: #8C1D18;
  --md-sys-color-on-error-container-dark: #F9DEDC;
  --md-sys-color-outline-dark: #938F99;
  --md-sys-color-background-dark: #1C1B1F;
  --md-sys-color-on-background-dark: #E6E1E5;
  --md-sys-color-surface-dark: #1C1B1F;
  --md-sys-color-on-surface-dark: #E6E1E5;
  --md-sys-color-surface-variant-dark: #49454F;
  --md-sys-color-on-surface-variant-dark: #CAC4D0;
  --md-sys-color-inverse-surface-dark: #E6E1E5;
  --md-sys-color-inverse-on-surface-dark: #313033;
  --md-sys-color-inverse-primary-dark: #6750A4;
  --md-sys-color-shadow-dark: #000000;
  --md-sys-color-surface-tint-dark: #D0BCFF;
  --md-sys-color-outline-variant-dark: #49454F;
  --md-sys-color-scrim-dark: #000000;
  /* display - large */
  --md-sys-typescale-display-large-font-family-name: Roboto;
  --md-sys-typescale-display-large-font-family-style: Regular;
  --md-sys-typescale-display-large-font-weight: 400px;
  --md-sys-typescale-display-large-font-size: 57px;
  --md-sys-typescale-display-large-line-height: 64px;
  --md-sys-typescale-display-large-letter-spacing: -0.25px;
  /* display - medium */
  --md-sys-typescale-display-medium-font-family-name: Roboto;
  --md-sys-typescale-display-medium-font-family-style: Regular;
  --md-sys-typescale-display-medium-font-weight: 400px;
  --md-sys-typescale-display-medium-font-size: 45px;
  --md-sys-typescale-display-medium-line-height: 52px;
  --md-sys-typescale-display-medium-letter-spacing: 0px;
  /* display - small */
  --md-sys-typescale-display-small-font-family-name: Roboto;
  --md-sys-typescale-display-small-font-family-style: Regular;
  --md-sys-typescale-display-small-font-weight: 400px;
  --md-sys-typescale-display-small-font-size: 36px;
  --md-sys-typescale-display-small-line-height: 44px;
  --md-sys-typescale-display-small-letter-spacing: 0px;
  /* headline - large */
  --md-sys-typescale-headline-large-font-family-name: Roboto;
  --md-sys-typescale-headline-large-font-family-style: Regular;
  --md-sys-typescale-headline-large-font-weight: 400px;
  --md-sys-typescale-headline-large-font-size: 32px;
  --md-sys-typescale-headline-large-line-height: 40px;
  --md-sys-typescale-headline-large-letter-spacing: 0px;
  /* headline - medium */
  --md-sys-typescale-headline-medium-font-family-name: Roboto;
  --md-sys-typescale-headline-medium-font-family-style: Regular;
  --md-sys-typescale-headline-medium-font-weight: 400px;
  --md-sys-typescale-headline-medium-font-size: 28px;
  --md-sys-typescale-headline-medium-line-height: 36px;
  --md-sys-typescale-headline-medium-letter-spacing: 0px;
  /* headline - small */
  --md-sys-typescale-headline-small-font-family-name: Roboto;
  --md-sys-typescale-headline-small-font-family-style: Regular;
  --md-sys-typescale-headline-small-font-weight: 400px;
  --md-sys-typescale-headline-small-font-size: 24px;
  --md-sys-typescale-headline-small-line-height: 32px;
  --md-sys-typescale-headline-small-letter-spacing: 0px;
  /* body - large */
  --md-sys-typescale-body-large-font-family-name: Roboto;
  --md-sys-typescale-body-large-font-family-style: Regular;
  --md-sys-typescale-body-large-font-weight: 400px;
  --md-sys-typescale-body-large-font-size: 16px;
  --md-sys-typescale-body-large-line-height: 24px;
  --md-sys-typescale-body-large-letter-spacing: 0.50px;
  /* body - medium */
  --md-sys-typescale-body-medium-font-family-name: Roboto;
  --md-sys-typescale-body-medium-font-family-style: Regular;
  --md-sys-typescale-body-medium-font-weight: 400px;
  --md-sys-typescale-body-medium-font-size: 14px;
  --md-sys-typescale-body-medium-line-height: 20px;
  --md-sys-typescale-body-medium-letter-spacing: 0.25px;
  /* body - small */
  --md-sys-typescale-body-small-font-family-name: Roboto;
  --md-sys-typescale-body-small-font-family-style: Regular;
  --md-sys-typescale-body-small-font-weight: 400px;
  --md-sys-typescale-body-small-font-size: 12px;
  --md-sys-typescale-body-small-line-height: 16px;
  --md-sys-typescale-body-small-letter-spacing: 0.40px;
  /* label - large */
  --md-sys-typescale-label-large-font-family-name: Roboto;
  --md-sys-typescale-label-large-font-family-style: Medium;
  --md-sys-typescale-label-large-font-weight: 500px;
  --md-sys-typescale-label-large-font-size: 14px;
  --md-sys-typescale-label-large-line-height: 20px;
  --md-sys-typescale-label-large-letter-spacing: 0.10px;
  /* label - medium */
  --md-sys-typescale-label-medium-font-family-name: Roboto;
  --md-sys-typescale-label-medium-font-family-style: Medium;
  --md-sys-typescale-label-medium-font-weight: 500px;
  --md-sys-typescale-label-medium-font-size: 12px;
  --md-sys-typescale-label-medium-line-height: 16px;
  --md-sys-typescale-label-medium-letter-spacing: 0.50px;
  /* label - small */
  --md-sys-typescale-label-small-font-family-name: Roboto;
  --md-sys-typescale-label-small-font-family-style: Medium;
  --md-sys-typescale-label-small-font-weight: 500px;
  --md-sys-typescale-label-small-font-size: 11px;
  --md-sys-typescale-label-small-line-height: 16px;
  --md-sys-typescale-label-small-letter-spacing: 0.50px;
  /* title - large */
  --md-sys-typescale-title-large-font-family-name: Roboto;
  --md-sys-typescale-title-large-font-family-style: Regular;
  --md-sys-typescale-title-large-font-weight: 400px;
  --md-sys-typescale-title-large-font-size: 22px;
  --md-sys-typescale-title-large-line-height: 28px;
  --md-sys-typescale-title-large-letter-spacing: 0px;
  /* title - medium */
  --md-sys-typescale-title-medium-font-family-name: Roboto;
  --md-sys-typescale-title-medium-font-family-style: Medium;
  --md-sys-typescale-title-medium-font-weight: 500px;
  --md-sys-typescale-title-medium-font-size: 16px;
  --md-sys-typescale-title-medium-line-height: 24px;
  --md-sys-typescale-title-medium-letter-spacing: 0.15px;
  /* title - small */
  --md-sys-typescale-title-small-font-family-name: Roboto;
  --md-sys-typescale-title-small-font-family-style: Medium;
  --md-sys-typescale-title-small-font-weight: 500px;
  --md-sys-typescale-title-small-font-size: 14px;
  --md-sys-typescale-title-small-line-height: 20px;
  --md-sys-typescale-title-small-letter-spacing: 0.10px;
}
`;

export const Theme = {
  Primary: '--md-sys-color-primary',
  OnPrimary: '--md-sys-color-on-primary',
  PrimaryContainer: '--md-sys-color-primary-container',
  OnPrimaryContainer: '--md-sys-color-on-primary-container',

  Secondary: '--md-sys-color-secondary',
  OnSecondary: '--md-sys-color-on-secondary',
  SecondaryContainer: '--md-sys-color-secondary-container',
  OnSecondaryContainer: '--md-sys-color-on-secondary-container',

  Tertiary: '--md-sys-color-tertiary',
  OnTertiary: '--md-sys-color-on-tertiary',
  TertiaryContainer: '--md-sys-color-tertiary-container',
  OnTertiaryContainer: '--md-sys-color-on-tertiary-container',

  Error: '--md-sys-color-error',
  OnError: '--md-sys-color-on-error',
  ErrorContainer: '--md-sys-color-error-container',
  OnErrorContainer: '--md-sys-color-on-error-container',

  Background: '--md-sys-color-background',
  OnBackground: '--md-sys-color-on-background',

  Surface: '--md-sys-color-surface',
  OnSurface: '--md-sys-color-on-surface',
  SurfaceVariant: '--md-sys-color-surface-variant',
  OnSurfaceVariant: '--md-sys-color-on-surface-variant',

  Outline: '--md-sys-color-outline',
  InverseOnSurface: '--md-sys-color-inverse-on-surface',
  InverseSurface: '--md-sys-color-inverse-surface',
  InversePrimary: '--md-sys-color-inverse-primary',

  Shadow: '--md-sys-color-shadow',
  SurfaceTint: '--md-sys-color-surface-tint',
  OutlineVariant: '--md-sys-color-outline-variant',
  Scrim: '--md-sys-color-scrim',
}

type Color = keyof typeof Theme;

export enum ThemeMode {
  Dark = 'dark',
  Light = 'light',
}

/**
 * Generate tokens for dark & light modes
 */
export const GenerateTheme = (mode: ThemeMode) => {
  return Object.values(Theme).reduce((acc, variable) => {
    acc[variable as Color] = `var(${variable}-${mode})`;
    return acc;
  }, {} as Record<Color, string>);
}

/**
 * Update tokens from hex => rgb
 */
const regexp = {
  var: /(--)[^\,\:\)]+/g,
  hex: /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g,
  value: /(?<=((--)[^\,\:\)]+: ))(.*)(?=;)/g,
}

/**
 * Parse tokens from CSS file to Map<MD3Token, MD3Color>
 * @param tokens CSS file with tokens from https://m3.material.io/theme-builder#/custom
 */
export const GenerateCSS = (tokens = cssTokens) => {
  const styles: Record<string, string> = {};
  const lines = tokens.split('\n');

  for (const line of lines) {
    try {
      const property = parseLine(line);
      styles[property.variable] = property.value;
    } catch (error) {
      console.error('error:', error);
    }
  }

  return styles;
}

function parseLine(line: string): { variable: string, value: string } {
  const [variable] = line.match(regexp.var) || [];
  if (variable) {
    const [hex] = line.match(regexp.hex) || [];
    if (hex) {
      const rgb = hexToRGB(hex);
      if (rgb) {
        return { variable, value: rgb };
      } else {
        throw new Error(`cannot parse hex: ${hex}`);
      }
    } else {
      const [param] = line.match(regexp.value) || [];
      if (param) {
        return { variable, value: param };
      } else {
        throw new Error(`cannot parse line: ${line}`);
      }
    }
  }
}

function hexToRGB(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    const rgb = {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    }

    return `${rgb.r} ${rgb.g} ${rgb.b}`;
  }

  return null;
}
