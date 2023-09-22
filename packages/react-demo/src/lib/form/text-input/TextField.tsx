import clsx from "clsx";
import { FormEvent, InputHTMLAttributes, useEffect, useRef } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  appearance?: "fill" | "outline";
}

export const TextField = ({
  label,
  error,
  appearance = 'fill',
  className,
  ...others
}: TextInputProps) => {
  const textInput = useRef<HTMLInputElement>(null);
  const classes = clsx(
    "text-field",
    {
      "text-field-error": error,
      "text-field-outline": appearance === "outline",
      "text-field-fill": appearance === "fill",
    },
    className
  );

  function onTextFieldFocused() {
    textInput.current?.focus();
  }

  return (
    <div className={classes} tabIndex={1} onFocus={onTextFieldFocused}>
      <div className="text-field-area">
        <input ref={textInput} className="text-field-input" {...others} />
        {label && <label className="text-field-label">{label}</label>}
      </div>

      {appearance === "fill" && <div className="text-field-border" />}
    </div>
  );
};
