import { ReactNode } from "react";

export type PageLayoutProps = {
  anchorMenu: ReactNode;
  children: ReactNode;
};

export function PageLayout({ anchorMenu, children }: PageLayoutProps) {
  return (
    <div className="flex flex-col md:flex-row items-start gap-2 h-full">
      <aside className="py-4 p-2 block md:sticky top-[80px]">
        {anchorMenu}
      </aside>

      <main className="flex-1 flex flex-col items-start gap-2 px-4 overflow-hidden rounded-[24px]">
        {children}
      </main>
    </div>
  );
}
