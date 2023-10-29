'use client';
import React from "react";
import { createComponent } from "@lit-labs/react";
import { MdRadio } from "@material/web/radio/radio";

export {
  MdRadio,
}

export const Radio = createComponent({
  react: React,
  tagName: "md-radio",
  elementClass: MdRadio,
});
