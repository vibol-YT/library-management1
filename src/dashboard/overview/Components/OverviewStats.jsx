
import React from "react";
import {
  BookOpen,
  BookCheck,
  BookCopy,
  Users,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const stats = [
  {
    title: "Total Books",
    value: "2,450",
    description: "12 added this month",
    icon: BookOpen,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Available Books",
    value: "1,820",
    description: "Ready to borrow",
    icon: BookCheck,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Borrowed Books",
    value: "530",
    description: "Currently on loan",
    icon: BookCopy,
    color: "bg-violet-50 text-violet-600",
  },
  {
    title: "Total Members",
    value: "320",
    description: "18 joined this month",
    icon: Users,
    color: "bg-orange-50 text-orange-600",
  },
];

export default function OverviewStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card
            key={stat.title}
            className="border-slate-200 shadow-sm transition-shadow hover:shadow-md"
          >
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {stat.title}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                    {stat.value}
                  </h2>
                </div>

                <div className={`rounded-xl p-3 ${stat.color}`}>
                  <Icon size={23} />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs">
                <TrendingUp size={15} className="text-emerald-600" />
                <span className="font-medium text-emerald-600">
                  {stat.description}
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
