'use client';

import { AppSidebar } from "@/components/AppSideBar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({ children }) {
  return (
 
      <SidebarProvider>
        <div className="flex min-h-screen bg-white">
          <AppSidebar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
        </SidebarProvider>

  );
}
