
import React from "react";
import { ChartNoAxesCombined } from "lucide-react";

export default function ReportHeader() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <ChartNoAxesCombined className="h-6 w-6" />
      </div>

      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Library Reports
        </h1>

        <p className="text-sm text-muted-foreground">
          Track borrowing activity, popular books, and overdue returns.
        </p>
      </div>
    </div>
  );
}
