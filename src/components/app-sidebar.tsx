import {
  Sidebar, SidebarContent, SidebarHeader, SidebarFooter,
  SidebarGroup, SidebarGroupLabel, SidebarGroupContent,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Home, Users, FlaskConical, Mail, Linkedin,
  Settings, FileClock, User2, LucideHome
} from "lucide-react";
import { usePathname } from "next/navigation";

const overviewItems = [
  { title: "Dashboard", url: "/dashboard", icon: LucideHome },
  { title: "Leads", url: "/leads", icon: Users },
  { title: "Campaign", url: "/campaign", icon: FlaskConical },
  { title: "Messages", url: "/messages", icon: Mail, badge: "10+" },
  { title: "Linkedin Accounts", url: "/linkedin-accounts", icon: Linkedin },
];

const settingsItems = [
  { title: "Setting & Billing", url: "/settings", icon: Settings },
];

const adminItems = [
  { title: "Activity logs", url: "/activity-logs", icon: FileClock },
  { title: "User logs", url: "/user-logs", icon: User2 },
];

function SidebarProfile() {
  return (
    <div className="flex items-center gap-3 p-6 border-b border-gray-100">
      <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-700 font-semibold flex items-center justify-center">
        PE
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-sm text-gray-900">Kandid</span>
        <span className="text-xs text-gray-500">Personal</span>
      </div>
      <button
        type="button"
        aria-label="Profile menu"
        className="ml-auto p-1 rounded hover:bg-gray-100"
      >
        <svg
          className="h-4 w-4 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}

function SidebarFooterProfile() {
  return (
    <div className="flex items-center gap-3 p-4 border-t border-gray-100">
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center">
          BK
        </div>
        <span className="absolute -bottom-1 -right-2 bg-blue-600 text-xs rounded px-1 py-0.5 font-bold text-white shadow">
          PRO
        </span>
      </div>
      <div className="flex flex-col truncate">
        <span className="font-semibold text-sm truncate">Bhavya From Kandid</span>
        <span className="text-xs truncate text-gray-500">bhavya@kandid.ai</span>
      </div>
    </div>
  );
}

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar className="bg-white w-64 min-h-screen flex flex-col shadow-lg">
      {/* Logo and top profile */}
      <SidebarHeader className="flex items-center justify-center px-6 py-4 h-20 border-b-4 border-gray-100">
        <img
          src="/linkbird-light-logo.svg"
          alt="LinkBird"
          className="w-32 h-32"
        />
      </SidebarHeader>




      <SidebarProfile />

      <SidebarContent className="flex-1 px-0 ">
        {/* Overview group */}
        <SidebarGroup>
          <SidebarGroupLabel className="uppercase text-xs font-bold tracking-wide text-gray-400 px-6 py-2">
            Overview
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {overviewItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className={`flex items-center gap-3 px-6 py-2 w-full rounded-lg font-medium ${pathname === item.url
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    <a href={item.url} className="flex items-center gap-3 w-full">
                      <item.icon className="w-5 h-5" />
                      <span >{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings group */}
        <SidebarGroup>
          <SidebarGroupLabel className="uppercase text-xs font-bold tracking-wide text-gray-400 px-6 py-2">
            Settings
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className={`flex items-center gap-3 px-6 py-2 w-full rounded-lg font-medium ${pathname === item.url
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    <a href={item.url} className="flex items-center gap-3 w-full">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Admin panel group */}
        <SidebarGroup>
          <SidebarGroupLabel className="uppercase text-xs font-bold tracking-wide text-gray-400 px-6 py-2">
            Admin Panel
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className={`flex items-center gap-3 px-6 py-2 w-full rounded-lg font-medium ${pathname === item.url
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    <a href={item.url} className="flex items-center gap-3 w-full">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer - user card */}
      <SidebarFooter>
        <SidebarFooterProfile />
      </SidebarFooter>
    </Sidebar>
  );
}
