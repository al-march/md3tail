'use client';

import { Dispatch, SetStateAction, useEffect, useState } from "react";

const THEME_PREFERS_MODE = "theme-mode";

export enum ThemeMode {
  Dark = "dark",
  Light = "light",
};

export function useThemeMode(): [ThemeMode, Dispatch<SetStateAction<ThemeMode>>] {
  const [mode, setMode] = useState<ThemeMode>(getLocalMode() || getSystemMode());

  useEffect(() => {
    const savedMode = localStorage.getItem(THEME_PREFERS_MODE);

    if (savedMode && isThemeMode(savedMode)) {
      setMode(savedMode);
      return;
    }

    const systemMode = getSystemMode();
    setMode(systemMode);
  }, []);

  useEffect(() => {
    if (isThemeMode(mode)) {
      setLocalMode();
      applyMode(mode);
    }
  }, [mode]);

  function getSystemMode() {
    const matchMode = (mode: ThemeMode) => window.matchMedia(`(prefers-color-scheme: ${mode})`).matches;
    if (!!window?.matchMedia) {
      if (matchMode(ThemeMode.Dark)) {
        return ThemeMode.Dark;
      }
      if (matchMode(ThemeMode.Light)) {
        return ThemeMode.Light;
      }
    }
    return ThemeMode.Light;
  }

  function getLocalMode() {
    const localMode = localStorage.getItem(THEME_PREFERS_MODE);
    if (localMode && isThemeMode(localMode)) {
      return localMode;
    } else {
      return;
    }
  }

  function setLocalMode() {
    localStorage.setItem(THEME_PREFERS_MODE, mode);
  }

  function applyMode(mode: ThemeMode) {
    const root = document.documentElement;
    if (root instanceof HTMLElement) {
      root.dataset.theme = mode;
    }
  }

  function isThemeMode(mode: string): mode is ThemeMode {
    return mode === ThemeMode.Dark || mode === ThemeMode.Light;
  }

  return [mode, setMode];
}