'use client';
import React from "react";
import { createComponent } from "@lit-labs/react";
import { MdCircularProgress } from "@material/web/progress/circular-progress";
import { MdLinearProgress } from "@material/web/progress/linear-progress";

export {
  MdCircularProgress,
  MdLinearProgress,
};

export const CircularProgress = createComponent({
  react: React,
  tagName: "md-circular-progress",
  elementClass: MdCircularProgress,
});

export const LinearProgress = createComponent({
  react: React,
  tagName: "md-linear-progress",
  elementClass: MdLinearProgress,
});
