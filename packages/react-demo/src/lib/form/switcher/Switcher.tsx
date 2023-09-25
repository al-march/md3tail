import clsx from "clsx";

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

  return (
    <label className={classes}>
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
      />
    </label>
  );
};
