"use client";
import { THEME_SOURCE } from "@/app/constants/theme";
import { useEffect, useRef, useState } from "react";
import { genTokens } from "@/app/theme/tokens";

const THEME_TOKENS_SOURCE = "theme-tokens";
type Tokens = ReturnType<typeof genTokens>;

export function ThemeGenerator() {
  const colorPicker = useRef<HTMLInputElement>(null);
  const [state, setState] = useState({
    source: '',
  });

  useEffect(() => {
    const source = localStorage.getItem(THEME_TOKENS_SOURCE) || THEME_SOURCE;
    setState((state) => ({ ...state, source }));
  }, []);

  useEffect(() => {
    if (state.source) {
      generateTheme();
    }
  }, [state.source]);

  const generateTheme = () => {
    const root = document.querySelector(":root");
    if (root instanceof HTMLElement) {
      const tokens = genTokens(state.source);
      localStorage.setItem(THEME_TOKENS_SOURCE, state.source);
      applyTheme(tokens, root);
    }
  };

  function applyTheme(tokens: Tokens, el: HTMLElement) {
    Object.entries(tokens.palettes).forEach(([variable, value]) => {
      el.style.setProperty(variable, value);
    });

    Object.entries(tokens.dark).forEach(([variable, value]) => {
      el.style.setProperty(variable, value);
    });

    Object.entries(tokens.light).forEach(([variable, value]) => {
      el.style.setProperty(variable, value);
    });
  }

  return (
    <div>
      <button
        type="submit"
        className="icon-btn icon-btn-outlined relative"
        onClick={() => colorPicker.current?.click()}
      >
        <span className="material-symbols-outlined">palette</span>

        <input
          ref={colorPicker}
          type="color"
          className="absolute bottom-0 left-0 right-0 block opacity-0"
          value={state.source}
          onInput={(e) => {
            const source = e.currentTarget?.value;

            if (source !== undefined) {
              setState((state) => ({ ...state, source }));
            }
          }}
        />
      </button>
    </div>
  );
}
