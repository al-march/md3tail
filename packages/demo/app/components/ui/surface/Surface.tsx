import clsx from "clsx";
import { HTMLAttributes } from "react";

interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {}

export function Surface({ className, ...others }: SurfaceProps) {
  const classes = clsx("bg-surface rounded-[16px] w-full p-4", className);
  return <div className={classes} {...others} />;
}
