import clsx from "clsx";
import { InputHTMLAttributes, ReactNode, useRef } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  supportText?: string;
  appearance?: "fill" | "outline";
  leading?: ReactNode;
  trailing?: ReactNode;
}

export const TextField = ({
  label,
  error,
  appearance = "fill",
  leading,
  trailing,
  supportText,
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
      <div className="text-field-leading">{leading}</div>

      <div className="text-field-area">
        <input ref={textInput} className="text-field-input" {...others} />
        {label && <label className="text-field-label">{label}</label>}
      </div>

      <div className="text-field-trailing">{trailing}</div>

      {appearance === "fill" && <div className="text-field-border" />}
      {supportText && <span className="text-field-support">{supportText}</span>}
    </div>
  );
};
