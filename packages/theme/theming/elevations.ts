/** @See https://www.figma.com/file/zPA2BySKG8bW0LTD5LFYNo/Material-3-Design-Kit-(Community) */
export const MD3Elevations = {
  0: 'none',
  1: 'var(--md-sys-elevation-1)',
  2: 'var(--md-sys-elevation-2)',
  3: 'var(--md-sys-elevation-3)',
  4: 'var(--md-sys-elevation-4)',
  5: 'var(--md-sys-elevation-5)',
} as const;

const Light = {
  // Elevation
  '--md-sys-elevation-1': '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
  '--md-sys-elevation-2': '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
  '--md-sys-elevation-3': '0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
  '--md-sys-elevation-4': '0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
  '--md-sys-elevation-5': '0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
}

const Dark = {
  // Elevation
  '--md-sys-elevation-1': '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
  '--md-sys-elevation-2': '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
  '--md-sys-elevation-3': '0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
  '--md-sys-elevation-4': '0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
  '--md-sys-elevation-5': '0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
}

export const Elevations = {
  Light,
  Dark,
}

type MD3Elevation = keyof typeof MD3Elevations;

export const MD3Elevation = (elevation: MD3Elevation = 0) => MD3Elevations[elevation];
