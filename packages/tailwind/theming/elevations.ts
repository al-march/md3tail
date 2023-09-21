/** @See https://www.figma.com/file/zPA2BySKG8bW0LTD5LFYNo/Material-3-Design-Kit-(Community) */
export const MD3Elevations = {
  0: 'none',
  1: 'var(--md-sys-elevation-1)',
  2: 'var(--md-sys-elevation-2)',
  3: 'var(--md-sys-elevation-3)',
  4: 'var(--md-sys-elevation-4)',
  5: 'var(--md-sys-elevation-5)',
} as const;

type MD3Elevation = keyof typeof MD3Elevations;

export const MD3Elevation = (elevation: MD3Elevation = 0) => MD3Elevations[elevation];
