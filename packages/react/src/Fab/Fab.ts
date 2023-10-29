'use client';
import React from "react";
import { createComponent } from "@lit-labs/react";

import { MdFab } from "@material/web/fab/fab";
import { MdBrandedFab } from "@material/web/fab/branded-fab";

export {
  MdFab,
  MdBrandedFab,
};


export const Fab = createComponent({
  react: React,
  tagName: "md-fab",
  elementClass: MdFab,
});

export const BrandedFab = createComponent({
  react: React,
  tagName: "md-branded-fab",
  elementClass: MdBrandedFab,
});
