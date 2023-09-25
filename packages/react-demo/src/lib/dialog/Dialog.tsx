import { DialogHTMLAttributes, LegacyRef, useRef } from "react";

export interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  dialogRef?: LegacyRef<HTMLDialogElement>;
}

export const Dialog = ({ dialogRef, ...others }: DialogProps) => {
  return <dialog ref={dialogRef} className="dialog" {...others} />;
};
