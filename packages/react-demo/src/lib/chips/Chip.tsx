import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import { ChipType } from "./types";
import { Button } from "../buttons";

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mdType?: ChipType;
  leadingIcon?: string;
  trailingIcon?: string;
}

export const Chip = ({
  className,
  children,
  leadingIcon,
  trailingIcon,
  mdType = "outlined",
  ...others
}: ChipProps) => {
  return (
    <button
      className={clsx("md-chip", {
        "md-chip-outlined": mdType === "outlined",
        "md-chip-elevated": mdType === "elevated",
        "md-chip-filled": mdType === "filled",
      })}
      {...others}
    >
      {leadingIcon && (
        <span className="material-symbols-outlined ml-[-4px] text-primary">
          {leadingIcon}
        </span>
      )}

      {children}

      {trailingIcon && (
        <span className="material-symbols-outlined mr-[-4px]">{trailingIcon}</span>
      )}
    </button>
  );
};
