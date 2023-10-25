import { MdFilledButton } from "@material/web/button/filled-button.js";
import "@material/web/button/filled-button.js";
import React, { DOMAttributes } from "react";
import { ReactNode } from "react";

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["md-filled-button"]: CustomElement<MdFilledButton>;
    }
  }
}

type MdFilledButtonProps = {
  children?: ReactNode;
};

export const FilledButton = ({ children }: MdFilledButtonProps) => {
  return <md-filled-button>{children}</md-filled-button>;
};
