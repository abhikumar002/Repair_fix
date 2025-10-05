import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

interface SiteLayoutProps {
  children: ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.16)_0%,_transparent_60%)]" />
      <div className="pointer-events-none absolute -top-32 right-[-20%] -z-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.12)_0%,_transparent_70%)] blur-3xl" />
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-16 sm:pt-20 lg:pt-24">
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
