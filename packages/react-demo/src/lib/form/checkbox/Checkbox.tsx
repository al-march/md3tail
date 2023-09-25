import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  indeterminate?: boolean;
}

export const Checkbox = ({
  error,
  className,
  indeterminate = false,
  ...others
}: CheckboxProps) => {
  const classes = clsx("checkbox", { "checkbox-error": error }, className);

  return (
    <label className={classes}>
      <input
        {...others}
        ref={(el) => el && (el.indeterminate = indeterminate)}
        type="checkbox"
      />
    </label>
  );
};
