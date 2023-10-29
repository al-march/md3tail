'use client';
import React from "react";
import { createComponent } from "@lit-labs/react";
import { MdFocusRing } from "@material/web/focus/md-focus-ring";

export {
  MdFocusRing
};

export const FocusRing = createComponent({
  react: React,
  tagName: "md-focus-ring",
  elementClass: MdFocusRing,
});
