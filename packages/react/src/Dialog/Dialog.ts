'use client';
import React from "react";
import { createComponent } from "@lit-labs/react";
import { MdDialog } from "@material/web/dialog/dialog";

export { MdDialog };

export const Dialog = createComponent({
  react: React,
  tagName: "md-dialog",
  elementClass: MdDialog,
});
