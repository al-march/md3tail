'use client';
import React from "react";
import { createComponent } from "@lit-labs/react";
import { MdDivider } from "@material/web/divider/divider";

export { MdDivider };

export const Divider = createComponent({
  react: React,
  tagName: "md-divider",
  elementClass: MdDivider,
});
