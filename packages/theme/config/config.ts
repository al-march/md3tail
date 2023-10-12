export type MD3ThemeConfig = {
  /**
   * CSS tokens from Material Design 3
   */
  tokens?: string;
  colors?: Record<string, string>;
  stateLayers?: {
    hover?: number;
    press?: number;
    focus?: number;
    drag?: number;
  };
};