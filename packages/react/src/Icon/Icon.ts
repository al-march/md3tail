'use client';
import React from "react";
import { createComponent } from "@lit-labs/react";
import { MdIcon } from "@material/web/icon/icon";

export {
  MdIcon
};

export const Icon = createComponent({
  react: React,
  tagName: "md-icon",
  elementClass: MdIcon,
});