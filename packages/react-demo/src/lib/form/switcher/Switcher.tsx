import clsx from "clsx";
import { KeyboardEvent } from "react";

export type SwitcherProps = {
  className?: string;
  withIcon?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
};

export const Switcher = ({
  className,
  withIcon,
  checked,
  disabled,
  onChange = () => {},
}: SwitcherProps) => {
  const classes = clsx(
    "switcher",
    {
      "switcher-with-icon": withIcon,
    },
    className
  );

  function onkeydown(e: KeyboardEvent<HTMLLabelElement>) {
    switch (e.code) {
      case "Space":
      case "Enter":
        e.preventDefault();
        e.currentTarget.click();
        break;
    }
  }

  return (
    <label
      onKeyDown={(e) => onkeydown(e)}
      className={classes}
      tabIndex={disabled ? undefined : 0}
    >
      <div
        data-icon-selected="✓"
        data-icon-unselected="✕"
        className="switcher-handler"
      />

      <input
        onChange={(e) => onChange(e.currentTarget.checked)}
        type="checkbox"
        disabled={disabled}
        defaultChecked={checked}
        hidden
      />
    </label>
  );
};
