"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

enum ThemesMode {
  Dark = "dark",
  Light = "light",
}

export function Sidebar() {
  const pathname = usePathname();
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
    <aside className="h-full flex flex-col p-1 py-12">
      <div className="flex flex-col gap-6">
        <NavigateLink
          href="/"
          active={pathname === "/"}
          label="Home"
          icon="home"
        />

        <br />

        <NavigateLink
          href="/pages/colors"
          active={pathname === "/pages/colors"}
          label="Colors"
          icon="format_paint"
        />
        <NavigateLink
          href="/pages/typography"
          active={pathname === "/pages/typography"}
          label="Typography"
          icon="custom_typography"
        />
        <NavigateLink
          href="/pages/elevation"
          active={pathname === "/pages/elevation"}
          label="Elevation"
          icon="invert_colors"
        />
      </div>

      <div className="flex-1" />

      <button className="icon-btn" onClick={toggleTheme}>
        <span className="material-symbols-outlined">
          {state.themeMode === ThemesMode.Light ? "light_mode" : "dark_mode"}
        </span>
      </button>
    </aside>
  );
}

type NavigateLinkProps = {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
};

function NavigateLink({ icon, label, href, active }: NavigateLinkProps) {
  return (
    <Link href={href}>
      <label className="flex flex-col gap-1 items-center cursor-pointer">
        <button
          className={clsx("icon-btn py-1 px-4", { "icon-btn-filled": active })}
        >
          <span className="material-symbols-outlined">{icon}</span>
        </button>
        <span className="label-medium">{label}</span>
      </label>
    </Link>
  );
}
