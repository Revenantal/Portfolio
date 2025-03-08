'use client';

import { ConsoleTrayProvider } from "@/components/console/console-tray-provider";
import { SidebarProvider } from "@/components/sidebar/sidebar-provider";

export function Providers({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
    <ConsoleTrayProvider>
      {children}
    </ConsoleTrayProvider>
    </SidebarProvider>
  );
}