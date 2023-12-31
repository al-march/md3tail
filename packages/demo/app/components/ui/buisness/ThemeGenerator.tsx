"use client";
import { THEME_SOURCE } from "@/app/constants/theme";
import { forwardRef, useEffect, useRef, useState } from "react";
import { genTokens } from "@/app/theme/tokens";
import { Fab, Icon } from "@md3tail/react";

const THEME_TOKENS_SOURCE = "theme-tokens";
type Tokens = ReturnType<typeof genTokens>;

export function ThemeGenerator() {
  const colorPicker = useRef<HTMLInputElement>(null);

  return (
    <div className="fixed z-10 right-4 bottom-[100px]">
      <div className="relative">
        <Fab
          className="relative"
          variant="primary"
          onClick={() => {
            colorPicker.current?.focus();
            colorPicker.current?.click();
          }}
        >
          <Icon slot="icon">palette</Icon>
        </Fab>
        <ColorPicker ref={colorPicker} />
      </div>
    </div>
  );
}

export const ColorPicker = forwardRef<HTMLInputElement>(({}, ref) => {
  const [state, setState] = useState({
    source: "",
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
    <input
      ref={ref}
      type="color"
      className="absolute bottom-0 left-0 right-0 -z-10 block opacity-0"
      value={state.source}
      onInput={(e) => {
        const source = e.currentTarget?.value;

        if (source !== undefined) {
          setState((state) => ({ ...state, source }));
        }
      }}
    />
  );
});
