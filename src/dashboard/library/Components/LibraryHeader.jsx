
import { LibraryBig, Plus, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LibraryHeader({ onAddBook }) {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <LibraryBig className="size-4" />
          <span>Management</span>
          <span>/</span>
          <span className="text-blue-600">Library</span>
        </div>

        <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          Library Management
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage books, inventory, and availability.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          className="gap-2"
          onClick={() =>
            window.alert("Connect your CSV/Excel import feature here.")
          }
        >
          <Upload className="size-4" />
          Upload Books
        </Button>

        <Button
          onClick={onAddBook}
          className="gap-2 bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="size-4" />
          Add New Book
        </Button>
      </div>
    </div>
  );
}
