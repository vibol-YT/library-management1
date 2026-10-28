import React from "react";
import {
  Building2,
  BookOpen,
  Users,
  Bell,
  Palette,
  ShieldCheck,
} from "lucide-react";

import { Card } from "@/components/ui/card";

const settingItems = [
  {
    id: "general",
    title: "General",
    description: "Library information",
    icon: Building2,
  },
  {
    id: "borrowing",
    title: "Borrowing Rules",
    description: "Loans and overdue fees",
    icon: BookOpen,
  },
  {
    id: "users",
    title: "Users",
    description: "Registration and access",
    icon: Users,
  },
  {
    id: "notifications",
    title: "Notifications",
    description: "Alerts and reminders",
    icon: Bell,
  },
  {
    id: "appearance",
    title: "Appearance",
    description: "Display preferences",
    icon: Palette,
  },
  {
    id: "security",
    title: "Security",
    description: "Password and sessions",
    icon: ShieldCheck,
  },
];

export default function SettingSidebar({
  activeSection,
  setActiveSection,
}) {
  return (
    <Card className="gap-0 border-slate-200 bg-white p-2 shadow-sm">
      <div className="px-3 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Preferences
        </p>
      </div>

      <nav className="space-y-1" aria-label="Settings sections">
        {settingItems.map((item) => {
          const Icon = item.icon;
          const active = activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveSection(item.id)}
              aria-current={active ? "page" : undefined}
              className={`flex w-full items-start gap-3 rounded-lg px-3 py-3 text-left transition ${
                active
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Icon
                size={19}
                className={`mt-0.5 shrink-0 ${
                  active ? "text-white" : "text-slate-500"
                }`}
              />

              <span className="min-w-0">
                <span className="block text-sm font-medium">
                  {item.title}
                </span>
                <span
                  className={`mt-1 block text-xs ${
                    active ? "text-slate-300" : "text-slate-400"
                  }`}
                >
                  {item.description}
                </span>
              </span>
            </button>
          );
        })}
      </nav>
    </Card>
  );
}