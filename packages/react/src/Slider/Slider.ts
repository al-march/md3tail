'use client';
import React from "react";
import { createComponent } from "@lit-labs/react";
import { MdSlider } from "@material/web/slider/slider";

export const Slider = createComponent({
  react: React,
  tagName: "md-slider",
  elementClass: MdSlider,
});
