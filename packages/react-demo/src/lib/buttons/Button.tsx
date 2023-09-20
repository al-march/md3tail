import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { ButtonType } from "./types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mdType?: ButtonType;
  icon?: ReactNode | string;
  children?: ReactNode;
}

export const Button = ({
  mdType,
  icon,
  className,
  children,
  ...others
}: ButtonProps) => {
  const checkType = (type: ButtonType) => mdType === type;

  const classes = clsx(
    "btn",
    {
      // Button by default is btn-text
      "btn-text": checkType("text") || !mdType,
      "btn-filled": checkType("filled"),
      "btn-outlined": checkType("outlined"),
      "btn-elevated": checkType("elevated"),
      "btn-tonal": checkType("tonal"),
      "btn-with-icon": !!icon,
    },
    className
  );

  const Icon = (): ReactNode =>
    typeof icon === "string" ? (
      <span className="material-symbols-outlined">{icon}</span>
    ) : (
      icon
    );

  return (
    <button className={classes} {...others}>
      {Icon()} 
      {children}
    </button>
  );
};
