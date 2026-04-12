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
      <main className="w-full px-4 pb-16 md:px-6 md:pb-24 lg:px-8">{children}</main>
      <GuestFooter />
    </div>
  );
}
