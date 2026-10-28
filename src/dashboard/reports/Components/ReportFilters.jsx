
import React from "react";
import { CalendarDays, FileBarChart } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ReportFilters({
  period,
  setPeriod,
  reportType,
  setReportType,
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <div className="flex items-center gap-2">
        <CalendarDays className="h-4 w-4 text-muted-foreground" />

        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="w-full sm:w-[170px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="1month">Latest month</SelectItem>
            <SelectItem value="3months">Last 3 months</SelectItem>
            <SelectItem value="6months">Last 6 months</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <FileBarChart className="h-4 w-4 text-muted-foreground" />

        <Select value={reportType} onValueChange={setReportType}>
          <SelectTrigger className="w-full sm:w-[190px]">
            <SelectValue placeholder="Report type" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Reports</SelectItem>
            <SelectItem value="borrowing">Borrowing Report</SelectItem>
            <SelectItem value="popular">Popular Books</SelectItem>
            <SelectItem value="overdue">Overdue Books</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
