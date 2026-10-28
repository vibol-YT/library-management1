
import React from "react";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ExportReport({ headers, rows }) {
  const handleExport = () => {
    const escapeCSV = (value) => {
      const text = String(value ?? "");
      return `"${text.replace(/"/g, '""')}"`;
    };

    const csvContent = [
      headers.map(escapeCSV).join(","),
      ...rows.map((row) => row.map(escapeCSV).join(",")),
    ].join("\r\n");

    // UTF-8 BOM helps Excel display Unicode text correctly.
    const blob = new Blob(["\uFEFF", csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `library-report-${new Date()
      .toISOString()
      .slice(0, 10)}.csv`;

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
  };

  return (
    <Button onClick={handleExport} className="shrink-0">
      <Download className="mr-2 h-4 w-4" />
      Export CSV
    </Button>
  );
}
