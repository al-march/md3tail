"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/app/constants/routing";
import Link from "next/link";
import { NavigationBar } from "../ui/navigation/NavigationBar";

export function MobNavigation() {
  const path = usePathname();

  const active = useMemo(() => {
    return ROUTES.findIndex((route) => path === route.path) || 0;
  }, [path]);

  const Icon = ({ icon }: { icon: string }) => {
    return <span className="material-symbols-outlined">{icon}</span>;
  };

  return (
    <NavigationBar active={active} className="w-full bg-surface-container-low">
      {ROUTES.map((route) => (
        <Link tabIndex={-1} href={route.path} key={route.path} className="flex-1">
          <NavigationBar.Button
            label={route.label}
            icon={<Icon icon={route.icon} />}
          />
        </Link>
      ))}
    </NavigationBar>
  );
}
