
import React from "react";
import { BookOpen, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const popularBooks = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Development",
    borrows: 86,
    color: "bg-amber-100 text-amber-700",
    initials: "AH",
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    borrows: 72,
    color: "bg-blue-100 text-blue-700",
    initials: "CC",
  },
  {
    id: 3,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance",
    borrows: 64,
    color: "bg-emerald-100 text-emerald-700",
    initials: "PM",
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    category: "Business",
    borrows: 51,
    color: "bg-violet-100 text-violet-700",
    initials: "RD",
  },
];

export default function PopularBooks() {
  const maxBorrows = Math.max(...popularBooks.map((book) => book.borrows));

  return (
    <Card className="h-full border-slate-200 shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">Popular Books</CardTitle>
            <CardDescription className="mt-1">
              Most borrowed this month
            </CardDescription>
          </div>

          <TrendingUp className="text-indigo-600" size={21} />
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        {popularBooks.map((book, index) => (
          <div key={book.id} className="space-y-2">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${book.color}`}
              >
                {book.initials}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-800">
                  {book.title}
                </p>

                <p className="truncate text-xs text-slate-500">
                  {book.author}
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm font-bold text-slate-800">
                  {book.borrows}
                </p>
                <p className="text-xs text-slate-500">borrows</p>
              </div>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full ${
                  index === 0
                    ? "bg-indigo-500"
                    : index === 1
                      ? "bg-blue-500"
                      : index === 2
                        ? "bg-emerald-500"
                        : "bg-violet-500"
                }`}
                style={{
                  width: `${(book.borrows / maxBorrows) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}

        <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 text-xs text-slate-600">
          <BookOpen size={16} className="shrink-0 text-indigo-600" />
          Popularity is based on sample borrowing records.
        </div>
      </CardContent>
    </Card>
  );
}
