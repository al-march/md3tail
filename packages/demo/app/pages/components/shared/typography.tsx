import { Icon, IconButton } from "@md3tail/react";
import { ReactNode } from "react";

export const Title = (props: { children: ReactNode; href?: string }) => (
  <div className="w-full flex items-center gap-2">
    <p className="title-large">{props.children}</p>
  </div>
);

export const Label = (props: { children: ReactNode }) => (
  <p className="text-center label-medium py-2">{props.children}</p>
);

export const IconLink = (props: { href?: string }) => (
  <IconButton href={props.href} target="_blank">
    <Icon>link</Icon>
  </IconButton>
);
