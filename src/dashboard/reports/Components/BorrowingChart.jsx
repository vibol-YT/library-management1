
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BorrowingChart({ data }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Borrowing Activity</CardTitle>
        <CardDescription>
          Monthly comparison of borrowed and returned books.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />

              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
              />

              <YAxis
                tickLine={false}
                axisLine={false}
                allowDecimals={false}
              />

              <Tooltip />
              <Legend />

              <Line
                type="monotone"
                dataKey="borrowed"
                name="Borrowed"
                stroke="#2563eb"
                strokeWidth={2.5}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />

              <Line
                type="monotone"
                dataKey="returned"
                name="Returned"
                stroke="#16a34a"
                strokeWidth={2.5}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
