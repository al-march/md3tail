"use client";

import { useEffect, useState } from "react";
import { ThemeGenerator } from "../components/buisness";

enum ThemesMode {
  Dark = "dark",
  Light = "light",
}

export function Header() {
  const [state, setState] = useState({
    themeMode: ThemesMode.Light,
  });

  useEffect(() => {
    const themeMode = (document.documentElement.dataset.theme ||
      "light") as ThemesMode;
    setState((state) => ({ ...state, themeMode }));
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (html && state.themeMode) {
      html.dataset.theme = state.themeMode;
    }
  }, [state.themeMode]);

  const toggleTheme = () => {
    setState((state) => {
      const themeMode =
        state.themeMode === ThemesMode.Light
          ? ThemesMode.Dark
          : ThemesMode.Light;
      return { ...state, themeMode };
    });
  };

  return (
    <header className="bg-surface-container sticky top-0 p-4">
      <section className="flex justify-between items-center">
        <p className="label-large">MD3 ui</p>

        <div className="flex gap-2 items-center">
          <ThemeGenerator />

          <button className="icon-btn" onClick={toggleTheme}>
            <span className="material-symbols-outlined">
              {state.themeMode === ThemesMode.Light ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </section>
    </header>
  );
}
