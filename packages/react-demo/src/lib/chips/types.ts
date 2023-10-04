export const ChipTypes = ['outlined', 'filled', 'elevated'] as const;
export type ChipType = typeof ChipTypes[number];