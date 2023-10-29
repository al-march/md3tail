'use client';
import React from "react";
import { createComponent } from "@lit-labs/react";
import { MdSwitch } from "@material/web/switch/switch";

export const Switch = createComponent({
  react: React,
  tagName: "md-switch",
  elementClass: MdSwitch,
});
