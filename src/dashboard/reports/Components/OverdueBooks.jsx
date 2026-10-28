
import React from "react";
import { ClockAlert } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function OverdueBooks({ books }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <ClockAlert className="h-5 w-5 text-muted-foreground" />

          <div>
            <CardTitle>Overdue Books</CardTitle>
            <CardDescription>
              Books that need to be returned.
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Book</TableHead>
                <TableHead>Borrower</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead className="text-right">
                  Overdue
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {books.length > 0 ? (
                books.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell className="min-w-[130px] font-medium">
                      {book.book}
                    </TableCell>

                    <TableCell>{book.borrower}</TableCell>

                    <TableCell className="whitespace-nowrap text-muted-foreground">
                      {book.dueDate}
                    </TableCell>

                    <TableCell className="text-right">
                      <Badge variant="destructive">
                        {book.daysOverdue} days
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="h-24 text-center"
                  >
                    No overdue books found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
