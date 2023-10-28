import "./globals.css";
import type { Metadata } from "next";
import { Sidebar } from "./components/layout/Sidebar";
import { Header } from "./components/layout/Header";
import { MobNavigation } from "./components/layout/MobNavigation";
import { HydrationStop } from "./components/layout/GlobalLoader";

export const metadata: Metadata = {
  title: "md3tail | Demo",
  description: "Demo for npm package @md3tail",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <Head />
      <body className="flex min-h-screen flex-col bg-surface-container-highest text-on-surface">
        <div className="flex flex-1 gap-1">
          <div className="overflow-y-auto hidden md:block h-screen sticky top-0">
            <Sidebar />
          </div>
          <div className="flex-1 flex flex-col p-0 bg-surface-container sm:px-8 md:rounded-[30px]">
            <div className="bg-surface-container z-10">
              <Header />
            </div>
            <div className="pb-2 w-full">{children}</div>
          </div>
        </div>

        <div className="block md:hidden sticky bottom-0">
          <MobNavigation />
        </div>

        <HydrationStop />
      </body>
    </html>
  );
}

function Head() {
  return (
    <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
    </head>
  );
}
