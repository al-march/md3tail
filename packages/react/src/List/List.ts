'use client';
import React from "react";
import { createComponent } from "@lit-labs/react";
import { MdList } from "@material/web/list/list";
import { MdListItem } from "@material/web/list/list-item";

export {
  MdList,
  MdListItem,
};

export const List = createComponent({
  react: React,
  tagName: "md-list",
  elementClass: MdList,
});

export const ListItem = createComponent({
  react: React,
  tagName: "md-list-item",
  elementClass: MdListItem,
});