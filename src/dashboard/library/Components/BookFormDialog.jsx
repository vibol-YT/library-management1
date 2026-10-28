
import { BookPlus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BookFormDialog({
  open,
  onOpenChange,
  form,
  setForm,
  onSubmit,
  editing,
  categories,
  borrowedCount,
}) {
  if (!open) return null;

  const updateField = (name, value) => {
    setForm((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/40 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-form-title"
        className="my-auto w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
      >
        <div className="mb-5 flex items-start justify-between">
          <div>
            <h2
              id="book-form-title"
              className="text-xl font-bold text-slate-900"
            >
              {editing ? "Edit Book" : "Add New Book"}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Enter the book information below.
            </p>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            aria-label="Close dialog"
          >
            <X className="size-4" />
          </Button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="book-title" className="text-sm font-medium">
              Book Title
            </label>
            <Input
              id="book-title"
              required
              value={form.title}
              onChange={(e) => updateField("title", e.target.value)}
              placeholder="Enter book title"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="book-author" className="text-sm font-medium">
              Author
            </label>
            <Input
              id="book-author"
              required
              value={form.author}
              onChange={(e) => updateField("author", e.target.value)}
              placeholder="Enter author name"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="book-isbn" className="text-sm font-medium">
              ISBN
            </label>
            <Input
              id="book-isbn"
              required
              value={form.isbn}
              onChange={(e) => updateField("isbn", e.target.value)}
              placeholder="Enter ISBN"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Category</label>

              <Select
                value={form.category}
                onValueChange={(value) => updateField("category", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>

                <SelectContent>
                  {[
                    ...new Set([
                      "Technology",
                      "Fiction",
                      "Education",
                      "Business",
                      "Self Development",
                      ...categories,
                    ]),
                  ].map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="book-quantity" className="text-sm font-medium">
                Total Copies
              </label>

              <Input
                id="book-quantity"
                type="number"
                min={Math.max(1, borrowedCount)}
                step="1"
                required
                value={form.quantity}
                onChange={(e) => updateField("quantity", e.target.value)}
              />
            </div>
          </div>

          {editing && borrowedCount > 0 && (
            <p className="text-xs text-amber-700">
              {borrowedCount} copies are currently borrowed. Total copies
              cannot be less than this number.
            </p>
          )}

          <div className="flex justify-end gap-2 border-t pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700"
            >
              <BookPlus className="mr-2 size-4" />
              {editing ? "Save Changes" : "Add Book"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
