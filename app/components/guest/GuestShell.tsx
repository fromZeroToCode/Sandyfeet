import { ReactNode } from "react";
import { GuestFooter } from "./GuestFooter";
import { GuestNav } from "./GuestNav";

type GuestShellProps = {
  children: ReactNode;
};

export function GuestShell({ children }: GuestShellProps) {
  return (
    <div className="guest-bg min-h-screen">
      <GuestNav />
      <main className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8 pb-16 md:pb-24">{children}</main>
      <GuestFooter />
    </div>
  );
}
