import { ReactNode } from "react";
import { GuestFooter } from "./GuestFooter";
import { GuestNav } from "./GuestNav";

type GuestShellProps = {
  children: ReactNode;
  isFullWidth?: boolean;
};

export function GuestShell({ children, isFullWidth = false }: GuestShellProps) {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="sticky top-0 z-50 w-full flex justify-center pt-4 pb-2 bg-white/70 backdrop-blur-xl border-b border-slate-100/50 shadow-sm transition-all">
        <GuestNav />
      </div>
      <main className={`flex-grow w-full ${isFullWidth ? "px-4 md:px-6 lg:px-8" : "mx-auto max-w-6xl px-4 md:px-6 lg:px-8"} pb-4 md:pb-6`}>
        {children}
      </main>
      <GuestFooter />
    </div>
  );
}
