
import {
  BookOpen,
  BookCheck,
  BookCopy,
  LibraryBig,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function LibraryStats({
  totalBooks,
  availableBooks,
  borrowedBooks,
  totalCategories,
}) {
  const stats = [
    {
      title: "Total Books",
      value: totalBooks,
      description: "Total book copies",
      icon: BookOpen,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Available Books",
      value: availableBooks,
      description: "Ready to borrow",
      icon: BookCheck,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Borrowed Books",
      value: borrowedBooks,
      description: "Currently on loan",
      icon: BookCopy,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Categories",
      value: totalCategories,
      description: "Book categories",
      icon: LibraryBig,
      color: "bg-violet-50 text-violet-600",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <Card
            key={item.title}
            className="border-slate-200 shadow-sm transition hover:shadow-md"
          >
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <p className="mt-2 text-2xl font-bold text-slate-900">
                  {item.value.toLocaleString()}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {item.description}
                </p>
              </div>

              <div
                className={`flex size-12 items-center justify-center rounded-xl ${item.color}`}
              >
                <Icon className="size-6" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
