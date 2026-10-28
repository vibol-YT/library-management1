
import React, { useEffect, useState } from "react";
import { FolderPlus, X } from "lucide-react";

const emptyForm = {
  name: "",
  description: "",
  status: "Active",
};

export default function CategoryFormDialog({
  open,
  category,
  onClose,
  onSave,
  categories,
}) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      setForm(
        category
          ? {
              name: category.name,
              description: category.description || "",
              status: category.status,
            }
          : { ...emptyForm }
      );

      setError("");
    }
  }, [open, category]);

  if (!open) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = form.name.trim();

    if (!name) {
      setError("Please enter a category name.");
      return;
    }

    if (name.length > 80) {
      setError("Category name cannot exceed 80 characters.");
      return;
    }

    const duplicate = categories.some(
      (item) =>
        item.name.trim().toLowerCase() === name.toLowerCase() &&
        item.id !== category?.id
    );

    if (duplicate) {
      setError("This category name already exists.");
      return;
    }

    onSave({
      name,
      description: form.description.trim(),
      status: form.status,
    });
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/40 p-4 backdrop-blur-[3px]"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="category-dialog-title"
        className="my-auto w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
      >
        <div className="flex items-start justify-between border-b border-slate-100 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <FolderPlus size={22} />
            </div>

            <div>
              <h2
                id="category-dialog-title"
                className="text-lg font-bold text-slate-900"
              >
                {category ? "Edit Category" : "Add New Category"}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {category
                  ? "Update your category information."
                  : "Create a category for your library books."}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X size={19} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-5 px-6 py-6">
            <div>
              <label
                htmlFor="category-name"
                className="text-sm font-semibold text-slate-700"
              >
                Category Name <span className="text-rose-500">*</span>
              </label>

              <input
                id="category-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Computer Science"
                maxLength={80}
                autoFocus
                className={inputClass}
              />

              <p className="mt-1.5 text-xs text-slate-400">
                {form.name.length}/80 characters
              </p>
            </div>

            <div>
              <label
                htmlFor="category-description"
                className="text-sm font-semibold text-slate-700"
              >
                Description
              </label>

              <textarea
                id="category-description"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe the books in this category..."
                rows={4}
                maxLength={300}
                className={`${inputClass} resize-y`}
              />

              <p className="mt-1.5 text-xs text-slate-400">
                {form.description.length}/300 characters
              </p>
            </div>

            <div>
              <label
                htmlFor="category-status"
                className="text-sm font-semibold text-slate-700"
              >
                Category Status
              </label>

              <select
                id="category-status"
                name="status"
                value={form.status}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Inactive categories can be hidden from new book assignments.
                Enforce this rule in your backend when you connect the API.
              </p>
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
              >
                {error}
              </p>
            )}
          </div>

          <div className="flex flex-col-reverse gap-3 border-t border-slate-100 bg-slate-50/70 px-6 py-4 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-100"
            >
              {category ? "Save Changes" : "Create Category"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
