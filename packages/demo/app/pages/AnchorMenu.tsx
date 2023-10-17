import { ReactNode } from "react";

type AnchorMenuProps = {
  children: ReactNode;
};

export function AnchorMenu({ children }: AnchorMenuProps) {
  return <ul className="list w-full md:min-w-[150px]">{children}</ul>;
}

AnchorMenu.Item = Item;

type AnchorMenuItemProps = {
  label: string;
  href: string;
};

function Item({ label, href }: AnchorMenuItemProps) {
  return (
    <li className="list-item">
      <a href={href} className="btn btn-text text-on-surface p-2 leading-4">
        {label}
      </a>
    </li>
  );
}
