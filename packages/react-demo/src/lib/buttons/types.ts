export const ButtonTypes = ['filled', 'outlined', 'text', 'elevated', 'tonal'] as const;
export type ButtonType = typeof ButtonTypes[number];