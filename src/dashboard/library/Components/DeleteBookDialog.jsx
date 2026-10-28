
import { AlertTriangle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DeleteBookDialog({
  book,
  onCancel,
  onConfirm,
}) {
  if (!book) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4">
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="delete-book-title"
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
      >
        <div className="flex size-12 items-center justify-center rounded-full bg-red-50 text-red-600">
          <AlertTriangle className="size-6" />
        </div>

        <h2
          id="delete-book-title"
          className="mt-4 text-lg font-bold text-slate-900"
        >
          Delete Book?
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Are you sure you want to delete{" "}
          <span className="font-semibold text-slate-800">
            {book.title}
          </span>
          ? This action cannot be undone.
        </p>

        <div className="mt-6 flex justify-end gap-2">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>

          <Button
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700"
          >
            <Trash2 className="mr-2 size-4" />
            Delete Book
          </Button>
        </div>
      </div>
    </div>
  );
}
