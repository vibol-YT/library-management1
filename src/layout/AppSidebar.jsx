
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  BookOpen,
  LayoutDashboard,
  LibraryBig,
  BookPlus,
  UsersRound,
  ChartNoAxesCombined,
  Settings2,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  Sparkles,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

const mainMenu = [
  {
    title: "Overview",
    url: "/dashboard/",
    icon: LayoutDashboard,
  },
  {
    title: "Library",
    url: "/dashboard/library",
    icon: LibraryBig,
  },
  {
    title: "Category",
    url: "/dashboard/categories",
    icon: BookPlus,
  },
  {
    title: "Users",
    url: "/dashboard/users",
    icon: UsersRound,
  },
];

const otherMenu = [
  {
    title: "Reports",
    url: "/dashboard/reports",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings2,
  },
];

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state, toggleSidebar } = useSidebar();

  const collapsed = state === "collapsed";

  const isActive = (url) => {
    if (url === "/dashboard/") {
      return (
        location.pathname === "/dashboard" ||
        location.pathname === "/dashboard/"
      );
    }

    return (
      location.pathname === url ||
      location.pathname.startsWith(url + "/")
    );
  };

  const renderMenu = (items) =>
    items.map((item) => {
      const Icon = item.icon;
      const active = isActive(item.url);

      return (
        <SidebarMenuItem key={item.title} className={''}>
          <SidebarMenuButton
            isActive={active}
            tooltip={item.title}
            onClick={() => navigate(item.url)}
            className={`
              group relative h-11 rounded-xl px-3
              transition-all duration-200
              ${
                active
                  ? "bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 hover:text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }
            `}
          >
            <Icon
              className={`
                size-[19px] shrink-0 transition-transform duration-200
                ${
                  active
                    ? "text-white"
                    : "text-slate-500 group-hover:text-blue-600"
                }
              `}
            />

            <span className="truncate">{item.title}</span>

            {active && (
              <span className="ml-auto size-1.5 shrink-0 rounded-full bg-white" />
            )}
          </SidebarMenuButton>
        </SidebarMenuItem>
      );
    });

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-slate-200"
    >
      {/* Brand */}
      <SidebarHeader className="border-b border-slate-200 p-2">
        <div className="flex min-h-12 items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <BookOpen className="size-5" />
          </div>

          <div className="grid min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
            <span className="truncate text-sm font-bold tracking-tight text-slate-900">
              Library System
            </span>

            <span className="truncate text-xs text-slate-500">
              Management Portal
            </span>
          </div>

          {/* Collapse / Expand */}
          <button
            type="button"
            onClick={toggleSidebar}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="flex size-8 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-blue-600 group-data-[collapsible=icon]:hidden"
          >
            <PanelLeftClose className="size-[18px]" />
          </button>
        </div>

        {/* Expand button when collapsed */}
        <button
          type="button"
          onClick={toggleSidebar}
          title="Expand sidebar"
          aria-label="Expand sidebar"
          className="hidden size-9 items-center justify-center self-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-blue-600 group-data-[collapsible=icon]:flex"
        >
          <PanelLeftOpen className="size-[18px]" />
        </button>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent className="gap-0 px-3 py-2">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className=" px-3 text-[10px] font-bold tracking-[0.16em] text-slate-400 group-data-[collapsible=icon]:justify-center">
            MAIN MENU
          </SidebarGroupLabel>

          <SidebarMenu className="gap-1.5">
            {renderMenu(mainMenu)}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator className="my-5 bg-slate-200" />

        <SidebarGroup className="p-0">
          <SidebarGroupLabel className=" px-3 text-[10px] font-bold tracking-[0.16em] text-slate-400 group-data-[collapsible=icon]:justify-center">
            WORKSPACE
          </SidebarGroupLabel>

          <SidebarMenu className="gap-1.5">
            {renderMenu(otherMenu)}
          </SidebarMenu>
        </SidebarGroup>

        {/* Upgrade / information card */}
        <div className=" px-1 pt-6 group-data-[collapsible=icon]:hidden">
          <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-3">
            <div className="mb-2 flex items-center gap-2 text-blue-700">
              <Sparkles className="size-4" />
              <span className="text-xs font-semibold">
                Library Workspace
              </span>
            </div>

            <p className="text-xs leading-relaxed text-slate-600">
              Manage your books, users, and reports in one place.
            </p>
          </div>
        </div>
      </SidebarContent>

      {/* User profile and logout */}
      <SidebarFooter className="border-t border-slate-200 p-3">
        <SidebarMenu className="gap-2">
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Log out"
              onClick={() => navigate("/login")}
              className="h-10 rounded-xl px-3 text-slate-600 transition hover:bg-red-50 hover:text-red-600"
            >
              <LogOut className="size-[18px]" />
              <span>Log out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
