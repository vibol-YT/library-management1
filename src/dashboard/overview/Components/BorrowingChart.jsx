
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const borrowingData = [
  { day: "Mon", borrowed: 42, returned: 28 },
  { day: "Tue", borrowed: 55, returned: 35 },
  { day: "Wed", borrowed: 38, returned: 30 },
  { day: "Thu", borrowed: 68, returned: 45 },
  { day: "Fri", borrowed: 52, returned: 40 },
  { day: "Sat", borrowed: 78, returned: 55 },
  { day: "Sun", borrowed: 45, returned: 32 },
];

export default function BorrowingChart() {
  return (
    <Card className="w-full border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle>Borrowing Activity</CardTitle>
        <CardDescription>
          Books borrowed and returned this week
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="mb-4 flex gap-5 text-sm">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-indigo-500" />
            Borrowed
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-500" />
            Returned
          </div>
        </div>

        <div style={{ width: "100%", height: 300, minWidth: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={borrowingData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#e2e8f0"
              />

              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
                width={35}
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="borrowed"
                name="Borrowed"
                stroke="#6366f1"
                fill="#6366f1"
                fillOpacity={0.12}
                strokeWidth={2.5}
              />

              <Area
                type="monotone"
                dataKey="returned"
                name="Returned"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.12}
                strokeWidth={2.5}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
