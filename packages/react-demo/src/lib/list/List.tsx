import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

export interface ListProps extends HTMLAttributes<HTMLDivElement> {}

export const List = ({ className, ...others }: ListProps) => {
  const classes = clsx("md-list", className);
  return <div className={classes} {...others} />;
};

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  leading?: ReactNode;
  trailing?: ReactNode;
}

const Item = ({
  className,
  leading,
  trailing,
  children,
  ...others
}: ListItemProps) => {
  const classes = clsx("md-list-item", className);
  return (
    <div className={classes} {...others}>
      {leading}
      <div className="flex-1">{children}</div>
      {trailing}
    </div>
  );
};

List.Item = Item;
