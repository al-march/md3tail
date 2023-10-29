"use client";

import { ROUTES } from "@/app/constants/routing";
import { Icon, Ripple } from "@md3tail/react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-full flex flex-col p-1 sm:py-12">
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
          className={clsx(
            "w-[80%] rounded-2xl relative transition-colors duration-200",
            {
              "bg-primary": active,
              "text-on-primary": active,
            }
          )}
        >
          <Icon>{icon}</Icon>
          <Ripple />
        </button>
        <span className="label-medium">{label}</span>
      </label>
    </Link>
  );
}
