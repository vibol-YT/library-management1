
import React from "react";
import {
  Plus,
  UserPlus,
  BookPlus,
  ArrowLeftRight,
  FileBarChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  {
    label: "Add New Book",
    icon: BookPlus,
    color: "bg-indigo-600 hover:bg-indigo-700 text-white",
    path: "/new-book",
  },
  {
    label: "Register Member",
    icon: UserPlus,
    color: "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200",
    path: "/members",
  },
  {
    label: "Issue / Return",
    icon: ArrowLeftRight,
    color: "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200",
    path: "/library",
  },
  {
    label: "View Reports",
    icon: FileBarChart,
    color: "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200",
    path: "/reports",
  },
];

export default function QuickActions() {
  const handleAction = (path) => {
    // Replace with useNavigate() when connecting React Router.
    window.location.href = path;
  };

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
      <div className="mb-4 flex items-center gap-2">
        <Plus size={18} className="text-indigo-600" />
        <h2 className="font-semibold text-slate-900">Quick Actions</h2>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Button
              key={action.label}
              onClick={() => handleAction(action.path)}
              className={`h-11 justify-start gap-3 ${action.color}`}
            >
              <Icon size={18} />
              {action.label}
            </Button>
          );
        })}
      </div>
    </section>
  );
}
