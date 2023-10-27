import React from "react";
import { createComponent } from "@lit-labs/react";

import { MdFab } from "@material/web/fab/fab";


export const Fab = createComponent({
  react: React,
  tagName: "md-fab",
  elementClass: MdFab,
});
