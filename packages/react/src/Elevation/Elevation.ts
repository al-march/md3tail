'use client';
import React from "react";
import { createComponent } from "@lit-labs/react";
import { MdElevation } from "@material/web/elevation/elevation";

export { MdElevation };

export const Elevation = createComponent({
  react: React,
  tagName: "md-elevation",
  elementClass: MdElevation,
});
