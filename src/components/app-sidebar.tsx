import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarFooterProfile,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProfile,
  SidebarSeparator,
} from "@/components/ui/sidebar";

// Example: set active URL for demonstration (in production, get route from router)
const activeUrl = "#"; // update this with the current URL in real usage

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Leads",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Campgains",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="w-64 bg-white border-r border-[var(--sidebar-border)] shadow h-screen flex flex-col">
     <SidebarHeader className="px-6 py-4 border-b border-[var(--sidebar-border)]">
        <h1 className="text-lg font-semibold text-[var(--color-text-primary)]">LinkBird</h1>
      </SidebarHeader>
     <SidebarProfile className="px-6 py-4 border-b border-[var(--sidebar-border)]">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[var(--color-text-primary)]">Kandid</span>
            <span className="text-xs text-gray-500">Personal</span>
          </div>
        </div>
      </SidebarProfile>
      <SidebarContent className="flex-1">
        <SidebarGroup>
          <SidebarGroupLabel className="px-6 py-3 text-sm font-semibold text-[var(--color-text-secondary)]">
            Overview
          </SidebarGroupLabel>
          <SidebarSeparator />
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="mx-2 my-1">
                  <SidebarMenuButton
                    asChild
                    isActive={activeUrl === item.url} // Set this with router path in production
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 font-medium transition ${
                      activeUrl === item.url ? "bg-blue-50 text-blue-700" : "text-gray-700"
                    }`}
                  >
                    <a href={item.url} className="flex items-center gap-3 w-full h-full">
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* Add footer or profile below if needed */}

      <SidebarFooterProfile className="px-6 py-4 border-t border-[var(--sidebar-border)]">
        <div className="flex items-center gap-3">
          <img  
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[var(--color-text-primary)]">Kandid</span>
            <span className="text-xs text-gray-500">Personal</span>
          </div>
        </div>
      </SidebarFooterProfile>
    </Sidebar>
  );
}
