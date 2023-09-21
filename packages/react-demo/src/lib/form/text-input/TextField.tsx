import clsx from "clsx";
import { FormEvent, InputHTMLAttributes, useEffect, useRef } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

export const TextField = ({
  label,
  error,
  className,
  ...others
}: TextInputProps) => {
  const textInput = useRef<HTMLInputElement>(null);
  const classes = clsx(
    "text-field",
    {
      "text-field-error": error,
    },
    className
  );

  function onTextFieldFocused() {
    textInput.current?.focus();
  }

  return (
    <div className={classes} tabIndex={1} onFocus={onTextFieldFocused}>
      <input ref={textInput} className="text-field-input" {...others} />
      {label && <label className="text-field-label">{label}</label>}

      <div className="text-field-border" />
    </div>
  );
};
