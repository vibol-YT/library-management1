
import React from "react";
import {
  Search,
  SlidersHorizontal,
  RotateCcw,
  ArrowDownUp,
} from "lucide-react";

export default function CategoryFilters({
  search,
  onSearch,
  status,
  onStatusChange,
  sort,
  onSortChange,
  onReset,
}) {
  const selectClass =
    "h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 sm:w-auto";

  return (
    <div className="border-b border-slate-200 p-5 sm:p-6">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            All Categories
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Manage your book categories in one place.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <SlidersHorizontal size={15} />
          Search and filters
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={search}
            onChange={(event) => onSearch(event.target.value)}
            placeholder="Search category name or description..."
            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <select
            value={status}
            onChange={(event) => onStatusChange(event.target.value)}
            className={selectClass}
            aria-label="Filter by status"
          >
            <option value="All">All statuses</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <div className="relative">
            <ArrowDownUp
              size={15}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
              value={sort}
              onChange={(event) => onSortChange(event.target.value)}
              className={`${selectClass} pl-9`}
              aria-label="Sort categories"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>

          <button
            type="button"
            onClick={onReset}
            title="Reset filters"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
          >
            <RotateCcw size={15} />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
