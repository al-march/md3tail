'use client';
import React from "react";
import { createComponent } from "@lit-labs/react";
import { MdCheckbox } from "@material/web/checkbox/checkbox";

export { MdCheckbox };

export const Checkbox = createComponent({
  react: React,
  tagName: "md-checkbox",
  elementClass: MdCheckbox,
});
