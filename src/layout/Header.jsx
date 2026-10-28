
import { Bell, Search } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-4 md:px-6">
      {/* Left: Sidebar and title */}
      <div className="flex items-center gap-3">
        <SidebarTrigger />

        <div className="hidden h-6 w-px bg-slate-200 sm:block" />

        <div>
          <p className="text-sm font-semibold text-slate-800">
            Library Management
          </p>

          <p className="hidden text-xs text-slate-500 sm:block">
            Manage your library efficiently
          </p>
        </div>
      </div>

      {/* Right: Actions and avatar */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <button
          type="button"
          aria-label="Search"
          className="flex size-9 items-center justify-center rounded-lg border bg-white text-slate-600 transition hover:bg-slate-100"
        >
          <Search className="size-4" />
        </button>

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex size-9 items-center justify-center rounded-lg border bg-white text-slate-600 transition hover:bg-slate-100"
        >
          <Bell className="size-4" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        {/* Avatar */}
        <div className="flex size-9 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
          A
        </div>
      </div>
    </header>
  );
}
