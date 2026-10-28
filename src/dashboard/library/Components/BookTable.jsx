
import {
  BookOpen,
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import {
  Card,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const colors = [
  "bg-blue-100 text-blue-700",
  "bg-amber-100 text-amber-700",
  "bg-purple-100 text-purple-700",
  "bg-emerald-100 text-emerald-700",
  "bg-rose-100 text-rose-700",
];

export default function BookTable({ books, onEdit, onDelete }) {
  return (
    <Card className="overflow-hidden border-slate-200 p-0 shadow-sm">
      <div className="border-b p-5">
        <h2 className="text-lg font-semibold text-slate-900">
          Book Collection
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          View and manage your library inventory.
        </p>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50 hover:bg-slate-50">
              <TableHead className="pl-5">Book</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Inventory</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="pr-5 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {books.map((book, index) => {
              const available = book.available > 0;
              const IconColor = colors[index % colors.length];

              return (
                <TableRow key={book.id} className="hover:bg-slate-50/70">
                  <TableCell className="min-w-56 pl-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex size-11 shrink-0 items-center justify-center rounded-lg ${IconColor}`}
                      >
                        <BookOpen className="size-5" />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate font-semibold text-slate-800">
                          {book.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {book.author}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="whitespace-nowrap text-sm text-slate-500">
                    {book.isbn}
                  </TableCell>

                  <TableCell>
                    <Badge variant="secondary" className="font-normal">
                      {book.category}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    <p className="text-sm font-medium text-slate-800">
                      {book.available} / {book.quantity}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Available / Total
                    </p>
                  </TableCell>

                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        available
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border-amber-200 bg-amber-50 text-amber-700"
                      }
                    >
                      <span
                        className={`mr-1.5 size-1.5 rounded-full ${
                          available ? "bg-emerald-500" : "bg-amber-500"
                        }`}
                      />
                      {available ? "Available" : "Borrowed"}
                    </Badge>
                  </TableCell>

                  <TableCell className="pr-5 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label={`Actions for ${book.title}`}
                        >
                          <MoreHorizontal className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onSelect={() =>
                            window.alert(
                              `${book.title}\nAuthor: ${book.author}\nISBN: ${book.isbn}\nCategory: ${book.category}`
                            )
                          }
                        >
                          <Eye className="mr-2 size-4" />
                          View Details
                        </DropdownMenuItem>

                        <DropdownMenuItem onSelect={() => onEdit(book)}>
                          <Pencil className="mr-2 size-4" />
                          Edit Book
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          onSelect={() => onDelete(book)}
                          className="text-red-600 focus:text-red-600"
                        >
                          <Trash2 className="mr-2 size-4" />
                          Delete Book
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}

            {books.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="h-36 text-center">
                  <div className="flex flex-col items-center gap-2 text-slate-500">
                    <BookOpen className="size-8 text-slate-300" />
                    <p className="font-medium">No books found</p>
                    <p className="text-sm">
                      Try changing your search or filters.
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="border-t px-5 py-4 text-sm text-slate-500">
        {books.length} books displayed
      </div>
    </Card>
  );
}
