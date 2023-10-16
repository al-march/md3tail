"use client";

import { ROUTES } from "@/app/constants/routing";
import { useThemeMode, ThemeMode } from "@/app/hooks/useThemeMode";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const [mode, setMode] = useThemeMode();
  const pathname = usePathname();

  const toggleTheme = () => {
    const toggled = mode === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark;
    setMode(toggled);
  };

  return (
    <aside className="h-full flex flex-col p-1  sm:py-12">
      <div className="flex flex-col gap-6">
        {ROUTES.map((route) => (
          <div key={route.path}>
            <NavigateLink
              href={route.path}
              active={pathname === route.path}
              label={route.label}
              icon={route.icon}
            />
            {route.path === "/" && <br />}
          </div>
        ))}
      </div>

      <div className="flex-1" />

      <button className="icon-btn" onClick={toggleTheme}>
        <span className="material-symbols-outlined">
          {mode === ThemeMode.Light ? "light_mode" : "dark_mode"}
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
