
import React, { useState } from "react";
import { Search, ArrowUpRight, CalendarDays } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const borrowingRecords = [
  {
    id: "BR-001",
    book: "Clean Code",
    author: "Robert C. Martin",
    member: "John Smith",
    memberId: "MB-1001",
    borrowDate: "Oct 18, 2026",
    dueDate: "Oct 25, 2026",
    status: "Borrowed",
  },
  {
    id: "BR-002",
    book: "Atomic Habits",
    author: "James Clear",
    member: "Sarah Lee",
    memberId: "MB-1002",
    borrowDate: "Oct 16, 2026",
    dueDate: "Oct 23, 2026",
    status: "Returned",
  },
  {
    id: "BR-003",
    book: "The Pragmatic Programmer",
    author: "David Thomas",
    member: "David Kim",
    memberId: "MB-1003",
    borrowDate: "Oct 10, 2026",
    dueDate: "Oct 17, 2026",
    status: "Overdue",
  },
  {
    id: "BR-004",
    book: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    member: "Emily Chen",
    memberId: "MB-1004",
    borrowDate: "Oct 17, 2026",
    dueDate: "Oct 24, 2026",
    status: "Borrowed",
  },
  {
    id: "BR-005",
    book: "The Psychology of Money",
    author: "Morgan Housel",
    member: "Michael Brown",
    memberId: "MB-1005",
    borrowDate: "Oct 12, 2026",
    dueDate: "Oct 19, 2026",
    status: "Borrowed",
  },
];

const statusStyles = {
  Borrowed: "bg-blue-50 text-blue-700 ring-blue-600/20",
  Returned: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  Overdue: "bg-red-50 text-red-700 ring-red-600/20",
};

export default function RecentBorrowings() {
  const [search, setSearch] = useState("");

  const filteredRecords = borrowingRecords.filter((record) => {
    const query = search.toLowerCase();

    return (
      record.book.toLowerCase().includes(query) ||
      record.member.toLowerCase().includes(query) ||
      record.id.toLowerCase().includes(query) ||
      record.status.toLowerCase().includes(query)
    );
  });

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="gap-4">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <CardTitle className="text-lg">Recent Borrowings</CardTitle>
            <CardDescription className="mt-1">
              Track book loans and return deadlines
            </CardDescription>
          </div>

          <Button variant="outline" className="gap-2 self-start">
            View All
            <ArrowUpRight size={16} />
          </Button>
        </div>

        <div className="relative max-w-sm">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search book, member, or status..."
            className="pl-9"
          />
        </div>
      </CardHeader>

      <CardContent>
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead>
              <tr className="border-y border-slate-200 bg-slate-50/80 text-xs uppercase tracking-wide text-slate-500">
                <th className="px-4 py-3 font-medium">Book / Record</th>
                <th className="px-4 py-3 font-medium">Member</th>
                <th className="px-4 py-3 font-medium">Borrow Date</th>
                <th className="px-4 py-3 font-medium">Due Date</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredRecords.map((record) => (
                <tr
                  key={record.id}
                  className="transition-colors hover:bg-slate-50"
                >
                  <td className="px-4 py-4">
                    <p className="font-semibold text-slate-800">
                      {record.book}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {record.id} · {record.author}
                    </p>
                  </td>

                  <td className="px-4 py-4">
                    <p className="font-medium text-slate-700">
                      {record.member}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {record.memberId}
                    </p>
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 text-slate-600">
                    {record.borrowDate}
                  </td>

                  <td className="whitespace-nowrap px-4 py-4">
                    <span
                      className={
                        record.status === "Overdue"
                          ? "font-medium text-red-600"
                          : "text-slate-600"
                      }
                    >
                      {record.dueDate}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${
                        statusStyles[record.status]
                      }`}
                    >
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}

              {filteredRecords.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-10 text-center text-slate-500"
                  >
                    No borrowing records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          <CalendarDays size={15} />
          Showing {filteredRecords.length} of {borrowingRecords.length} records
        </div>
      </CardContent>
    </Card>
  );
}
