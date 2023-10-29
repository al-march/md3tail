'use client';
import React from "react";
import { createComponent } from "@lit-labs/react";

import { MdTabs } from "@material/web/tabs/tabs";
import { MdPrimaryTab } from "@material/web/tabs/primary-tab";
import { MdSecondaryTab } from "@material/web/tabs/secondary-tab";

export {
  MdTabs,
  MdPrimaryTab,
  MdSecondaryTab,
};


export const Tabs = createComponent({
  react: React,
  tagName: "md-tabs",
  elementClass: MdTabs,
});

export const PrimaryTab = createComponent({
  react: React,
  tagName: "md-primary-tab",
  elementClass: MdPrimaryTab,
});

export const SecondaryTab = createComponent({
  react: React,
  tagName: "md-secondary-tab",
  elementClass: MdSecondaryTab,
});
