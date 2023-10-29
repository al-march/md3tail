'use client';
import React from "react";
import { createComponent } from "@lit-labs/react";
import { MdMenu } from "@material/web/menu/menu";
import { MdMenuItem } from "@material/web/menu/menu-item";
import { MdSubMenu } from "@material/web/menu/sub-menu";

export {MdMenu, MdMenuItem, MdSubMenu};

export const Menu = createComponent({
  react: React,
  tagName: "md-menu",
  elementClass: MdMenu,
});

export const MenuItem = createComponent({
  react: React,
  tagName: "md-menu-item",
  elementClass: MdMenuItem,
});

export const SubMenu = createComponent({
  react: React,
  tagName: "md-sub-menu",
  elementClass: MdSubMenu,
});
