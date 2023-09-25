import { InputHTMLAttributes } from "react";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
};

export const Radio = ({ className, ...others }: RadioProps) => {
  return (
    <label className="radio">
      <input {...others} type="radio" />
    </label>
  );
};
