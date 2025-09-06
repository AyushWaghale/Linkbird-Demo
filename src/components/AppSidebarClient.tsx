"use client"; // mark client component

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";


export default function ClientSidebar() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="absolute top-4 left-72 z-10 color:black">
              <SidebarTrigger />
            </div>
    </SidebarProvider>
  );
}
