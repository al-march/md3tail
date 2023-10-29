'use client';
import React from "react";
import { createComponent } from "@lit-labs/react";

import { MdRipple } from "@material/web/ripple/ripple";

export {
  MdRipple,
};

export const Ripple = createComponent({
  react: React,
  tagName: "md-ripple",
  elementClass: MdRipple,
});
