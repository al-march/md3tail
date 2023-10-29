import { HTMLAttributes } from "react";
import { clsx } from "clsx";

type Align = "start" | "end" | "center" | "baseline" | "stretch";
type Justify =
  | "start"
  | "end"
  | "normal"
  | "center"
  | "between"
  | "around"
  | "evenly"
  | "stretch";

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  items?: Align;
  justify?: Justify;
  direction?: "row" | "column";
  wrap?: boolean;
}

export const Row = ({
  items = "stretch",
  justify = "normal",
  direction = "row",
  wrap = false,
  className,
  ...others
}: RowProps) => {
  const classes = clsx(
    "flex",
    {
      "flex-wrap": wrap,
      "flex-row": direction === "row",
      "flex-col": direction === "column",

      "items-start": items === "start",
      "items-end": items === "end",
      "items-center": items === "center",
      "items-baseline": items === "baseline",
      "items-stretch": items === "stretch",

      "justify-start": justify === "start",
      "justify-end": justify === "end",
      "justify-normal": justify === "normal",
      "justify-center": justify === "center",
      "justify-between": justify === "between",
      "justify-around": justify === "around",
      "justify-evenly": justify === "evenly",
      "justify-stretch": justify === "stretch",
    },
    className
  );

  return <div className={classes} {...others} />;
};
