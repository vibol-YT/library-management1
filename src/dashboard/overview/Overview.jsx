
import React from "react";
import OverviewHeader from "./Components/OverviewHeader";
import OverviewStats from "./Components/OverviewStats";
import BorrowingChart from "./Components/BorrowingChart";
import RecentBorrowings from "./Components/RecentBorrowings";
import PopularBooks from "./Components/PopularBooks";
import QuickActions from "./Components/QuickActions";

export default function Overview() {
  return (
    <div className="min-h-screen bg-slate-50/70 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1600px] space-y-6">
        <OverviewHeader />

        <OverviewStats />

        <QuickActions />

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="min-w-0 xl:col-span-2">
            <BorrowingChart />
          </div>

          <div className="min-w-0">
            <PopularBooks />
          </div>
        </div>

        <RecentBorrowings />

        <footer className="border-t border-slate-200 pt-4 text-center text-xs text-slate-500">
          Library Management System © 2026
        </footer>
      </div>
    </div>
  );
}
