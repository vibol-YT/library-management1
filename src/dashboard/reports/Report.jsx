
import React, { useMemo, useState } from "react";

import ReportHeader from "./Components/ReportHeader";
import ReportStats from "./Components/ReportStats";
import ReportFilters from "./Components/ReportFilters";
import BorrowingChart from "./Components/BorrowingChart";
import CategoryChart from "./Components/CategoryChart";
import PopularBooks from "./Components/PopularBooks";
import OverdueBooks from "./Components/OverdueBooks";
import ExportReport from "./Components/ExportReport";

const borrowingData = [
  { month: "May", borrowed: 820, returned: 710 },
  { month: "Jun", borrowed: 950, returned: 800 },
  { month: "Jul", borrowed: 880, returned: 760 },
  { month: "Aug", borrowed: 1100, returned: 920 },
  { month: "Sep", borrowed: 1020, returned: 890 },
  { month: "Oct", borrowed: 1248, returned: 986 },
];

const categoryData = [
  { category: "Technology", count: 145 },
  { category: "Science", count: 95 },
  { category: "Business", count: 75 },
  { category: "Literature", count: 110 },
  { category: "Other", count: 55 },
];

const popularBooks = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", borrows: 86 },
  { id: 2, title: "Atomic Habits", author: "James Clear", borrows: 72 },
  { id: 3, title: "Java Programming", author: "Herbert Schildt", borrows: 64 },
  { id: 4, title: "The Pragmatic Programmer", author: "David Thomas", borrows: 51 },
  { id: 5, title: "Introduction to Algorithms", author: "Thomas H. Cormen", borrows: 45 },
];

const overdueBooks = [
  {
    id: 1,
    book: "Clean Code",
    borrower: "Dara Sok",
    dueDate: "2026-10-10",
    daysOverdue: 8,
  },
  {
    id: 2,
    book: "Java Programming",
    borrower: "Sokha Chan",
    dueDate: "2026-10-12",
    daysOverdue: 6,
  },
  {
    id: 3,
    book: "Database Systems",
    borrower: "Vibol Sim",
    dueDate: "2026-10-15",
    daysOverdue: 3,
  },
  {
    id: 4,
    book: "Web Development",
    borrower: "Sreyneang Kim",
    dueDate: "2026-10-16",
    daysOverdue: 2,
  },
];

export default function Report() {
  const [period, setPeriod] = useState("6months");
  const [reportType, setReportType] = useState("all");

  const filteredBorrowingData = useMemo(() => {
    const count = period === "3months" ? 3 : period === "6months" ? 6 : 1;
    return borrowingData.slice(-count);
  }, [period]);

  const stats = [
    { title: "Books Borrowed", value: "1,248", change: "+12.5%", icon: "book" },
    { title: "Books Returned", value: "986", change: "+8.2%", icon: "return" },
    { title: "Overdue Books", value: "42", change: "Needs attention", icon: "overdue" },
    { title: "Active Members", value: "356", change: "This month", icon: "members" },
  ];

  const reportData = useMemo(() => {
    if (reportType === "borrowing") {
      return {
        headers: ["Month", "Books Borrowed", "Books Returned"],
        rows: filteredBorrowingData.map((item) => [
          item.month,
          item.borrowed,
          item.returned,
        ]),
      };
    }

    if (reportType === "popular") {
      return {
        headers: ["Book", "Author", "Borrow Count"],
        rows: popularBooks.map((book) => [
          book.title,
          book.author,
          book.borrows,
        ]),
      };
    }

    if (reportType === "overdue") {
      return {
        headers: ["Book", "Borrower", "Due Date", "Days Overdue"],
        rows: overdueBooks.map((book) => [
          book.book,
          book.borrower,
          book.dueDate,
          book.daysOverdue,
        ]),
      };
    }

    return {
      headers: ["Report", "Item", "Value"],
      rows: [
        ["Summary", "Books Borrowed", 1248],
        ["Summary", "Books Returned", 986],
        ["Summary", "Overdue Books", 42],
        ["Summary", "Active Members", 356],
        ...popularBooks.map((book) => [
          "Popular Books",
          book.title,
          book.borrows,
        ]),
      ],
    };
  }, [reportType, filteredBorrowingData]);

  return (
    <div className="space-y-6 p-4 md:p-6">
      <ReportHeader />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <ReportFilters
          period={period}
          setPeriod={setPeriod}
          reportType={reportType}
          setReportType={setReportType}
        />

        <ExportReport
          headers={reportData.headers}
          rows={reportData.rows}
        />
      </div>

      <ReportStats stats={stats} />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <BorrowingChart data={filteredBorrowingData} />
        </div>

        <div>
          <CategoryChart data={categoryData} />
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <PopularBooks books={popularBooks} />
        <OverdueBooks books={overdueBooks} />
      </div>

      <p className="text-xs text-muted-foreground">
        Demo report data only. Connect your backend API for live library reports.
      </p>
    </div>
  );
}
