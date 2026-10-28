
import React from "react";
import {
  BookOpen,
  MoreHorizontal,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  FolderOpen,
} from "lucide-react";

const avatarColors = [
  "bg-indigo-100 text-indigo-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-sky-100 text-sky-700",
  "bg-rose-100 text-rose-700",
  "bg-violet-100 text-violet-700",
];

function CategoryAvatar({ name, index }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
        avatarColors[index % avatarColors.length]
      }`}
    >
      {initials}
    </div>
  );
}

function StatusBadge({ status }) {
  const active = status === "Active";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
        active
          ? "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200"
          : "bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-200"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          active ? "bg-emerald-500" : "bg-slate-400"
        }`}
      />
      {status}
    </span>
  );
}

export default function CategoryTable({
  categories,
  search,
  status,
  currentPage,
  pageSize,
  totalItems,
  totalPages,
  onPageChange,
  onEdit,
  onDelete,
}) {
  const start = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalItems);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80">
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Category
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Description
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Total Books
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Status
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Created Date
              </th>
              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {categories.map((category, index) => (
              <tr
                key={category.id}
                className="group transition hover:bg-indigo-50/30"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <CategoryAvatar
                      name={category.name}
                      index={index}
                    />

                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        {category.name}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        CAT-{String(category.id).padStart(4, "0")}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="max-w-[250px] px-6 py-4">
                  <p
                    className="truncate text-sm text-slate-500"
                    title={category.description}
                  >
                    {category.description || "No description"}
                  </p>
                </td>

                <td className="px-6 py-4">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-2.5 py-1.5">
                    <BookOpen size={14} className="text-slate-500" />
                    <span className="text-sm font-semibold text-slate-700">
                      {category.books}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <StatusBadge status={category.status} />
                </td>

                <td className="px-6 py-4 text-sm text-slate-500">
                  {new Date(
                    `${category.createdAt}T12:00:00`
                  ).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => onEdit(category)}
                      title="Edit category"
                      aria-label={`Edit ${category.name}`}
                      className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                    >
                      <Pencil size={15} />
                    </button>

                    <button
                      type="button"
                      onClick={() => onDelete(category)}
                      title="Delete category"
                      aria-label={`Delete ${category.name}`}
                      className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
                    >
                      <Trash2 size={15} />
                    </button>

                    <span className="hidden text-slate-300 group-hover:inline">
                      <MoreHorizontal size={17} />
                    </span>
                  </div>
                </td>
              </tr>
            ))}

            {categories.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-16 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                    <FolderOpen size={27} />
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-slate-800">
                    No categories found
                  </h3>

                  <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500">
                    {search || status !== "All"
                      ? "Try changing your search or filters."
                      : "Add your first category to organize your library books."}
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-4 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-800">{start}</span>
          {" "}to{" "}
          <span className="font-semibold text-slate-800">{end}</span>
          {" "}of{" "}
          <span className="font-semibold text-slate-800">{totalItems}</span>
          {" "}categories
        </p>

        <div className="flex items-center justify-between gap-2 sm:justify-end">
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => onPageChange(currentPage - 1)}
            className="inline-flex h-9 items-center gap-1 rounded-lg border border-slate-200 px-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft size={16} />
            Previous
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, index) => index + 1)
              .filter(
                (page) =>
                  page === 1 ||
                  page === totalPages ||
                  Math.abs(page - currentPage) <= 1
              )
              .map((page, index, visiblePages) => (
                <React.Fragment key={page}>
                  {index > 0 && page - visiblePages[index - 1] > 1 && (
                    <span className="px-1 text-sm text-slate-400">…</span>
                  )}

                  <button
                    type="button"
                    onClick={() => onPageChange(page)}
                    aria-current={currentPage === page ? "page" : undefined}
                    className={`h-9 min-w-9 rounded-lg px-2 text-sm font-semibold transition ${
                      currentPage === page
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {page}
                  </button>
                </React.Fragment>
              ))}
          </div>

          <button
            type="button"
            disabled={currentPage >= totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className="inline-flex h-9 items-center gap-1 rounded-lg border border-slate-200 px-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
