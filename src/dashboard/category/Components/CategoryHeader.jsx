
import React from "react";
import { FolderOpen, Plus, ChevronRight } from "lucide-react";

export default function CategoryHeader({ onAdd }) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
          <span>Dashboard</span>
          <ChevronRight size={15} />
          <span className="text-slate-700">Categories</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
            <FolderOpen size={25} />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Categories
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Organize and manage your library collection.
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onAdd}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-100"
      >
        <Plus size={19} />
        Add Category
      </button>
    </div>
  );
}
