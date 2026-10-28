
import React from "react";
import {
  Folder,
  BookOpen,
  CheckCircle2,
  FolderX,
  ArrowUpRight,
} from "lucide-react";

const StatCard = ({
  title,
  value,
  description,
  icon: Icon,
  iconClass,
}) => (
  <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
          {value.toLocaleString()}
        </h3>
      </div>

      <div className={`rounded-xl p-3 ${iconClass}`}>
        <Icon size={22} />
      </div>
    </div>

    <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
      <ArrowUpRight size={14} className="text-indigo-600" />
      {description}
    </div>
  </div>
);

export default function CategoryStats({ categories, totalBooks }) {
  const activeCount = categories.filter(
    (category) => category.status === "Active"
  ).length;

  const inactiveCount = categories.filter(
    (category) => category.status === "Inactive"
  ).length;

  const emptyCount = categories.filter(
    (category) => Number(category.books) === 0
  ).length;

  const stats = [
    {
      title: "Total Categories",
      value: categories.length,
      description: "All registered categories",
      icon: Folder,
      iconClass: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Total Books",
      value: totalBooks,
      description: "Books across all categories",
      icon: BookOpen,
      iconClass: "bg-blue-50 text-blue-600",
    },
    {
      title: "Active Categories",
      value: activeCount,
      description: `${inactiveCount} inactive categories`,
      icon: CheckCircle2,
      iconClass: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Empty Categories",
      value: emptyCount,
      description: "Categories without books",
      icon: FolderX,
      iconClass: "bg-amber-50 text-amber-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}
