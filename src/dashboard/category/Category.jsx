
import React, { useMemo, useState } from "react";
import CategoryHeader from "./Components/CategoryHeader";
import CategoryStats from "./Components/CategoryStats";
import CategoryFilters from "./Components/CategoryFilters";
import CategoryTable from "./Components/CategoryTable";
import CategoryFormDialog from "./Components/CategoryFormDialog";
import DeleteCategoryDialog from "./Components/DeleteCategoryDialog";

const initialCategories = [
  {
    id: 1,
    name: "Computer Science",
    description: "Programming, software development and IT.",
    books: 120,
    status: "Active",
    createdAt: "2026-01-12",
  },
  {
    id: 2,
    name: "Literature",
    description: "Novels, poetry, fiction and classic stories.",
    books: 86,
    status: "Active",
    createdAt: "2026-01-15",
  },
  {
    id: 3,
    name: "Business & Management",
    description: "Business strategy, leadership and finance.",
    books: 74,
    status: "Active",
    createdAt: "2026-02-03",
  },
  {
    id: 4,
    name: "Science",
    description: "Physics, chemistry, biology and research.",
    books: 58,
    status: "Active",
    createdAt: "2026-02-10",
  },
  {
    id: 5,
    name: "History",
    description: "World history and historical civilizations.",
    books: 42,
    status: "Inactive",
    createdAt: "2026-02-18",
  },
  {
    id: 6,
    name: "Education",
    description: "Teaching methods, learning and education.",
    books: 65,
    status: "Active",
    createdAt: "2026-03-01",
  },
  {
    id: 7,
    name: "Biography",
    description: "Biographies and inspiring life stories.",
    books: 30,
    status: "Active",
    createdAt: "2026-03-05",
  },
  {
    id: 8,
    name: "Arts & Design",
    description: "Graphic design, art and creative works.",
    books: 0,
    status: "Active",
    createdAt: "2026-03-12",
  },
  {
    id: 9,
    name: "Mathematics",
    description: "Algebra, geometry and advanced mathematics.",
    books: 51,
    status: "Active",
    createdAt: "2026-03-18",
  },
  {
    id: 10,
    name: "Psychology",
    description: "Human behavior, mind and mental processes.",
    books: 28,
    status: "Inactive",
    createdAt: "2026-04-02",
  },
];

export default function Category() {
  const [categories, setCategories] = useState(initialCategories);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const [formOpen, setFormOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [deletingCategory, setDeletingCategory] = useState(null);

  const pageSize = 5;

  const filteredCategories = useMemo(() => {
    let result = categories.filter((category) => {
      const keyword = search.trim().toLowerCase();

      const matchesSearch =
        category.name.toLowerCase().includes(keyword) ||
        category.description.toLowerCase().includes(keyword);

      const matchesStatus =
        status === "All" || category.status === status;

      return matchesSearch && matchesStatus;
    });

    result.sort((a, b) => {
      if (sort === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }

      if (sort === "oldest") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }

      if (sort === "name-asc") {
        return a.name.localeCompare(b.name);
      }

      if (sort === "name-desc") {
        return b.name.localeCompare(a.name);
      }

      return 0;
    });

    return result;
  }, [categories, search, status, sort]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredCategories.length / pageSize)
  );

  const safePage = Math.min(currentPage, totalPages);

  const paginatedCategories = filteredCategories.slice(
    (safePage - 1) * pageSize,
    safePage * pageSize
  );

  const totalBooks = categories.reduce(
    (sum, category) => sum + Number(category.books || 0),
    0
  );

  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleStatusChange = (value) => {
    setStatus(value);
    setCurrentPage(1);
  };

  const handleSaveCategory = (formData) => {
    if (editingCategory) {
      setCategories((previous) =>
        previous.map((category) =>
          category.id === editingCategory.id
            ? { ...category, ...formData }
            : category
        )
      );
    } else {
      const newCategory = {
        ...formData,
        id: Date.now(),
        books: 0,
        createdAt: new Date().toISOString().slice(0, 10),
      };

      setCategories((previous) => [newCategory, ...previous]);
      setCurrentPage(1);
    }

    setFormOpen(false);
    setEditingCategory(null);
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setFormOpen(true);
  };

  const handleAdd = () => {
    setEditingCategory(null);
    setFormOpen(true);
  };

  const handleDelete = () => {
    if (!deletingCategory) return;

    setCategories((previous) =>
      previous.filter(
        (category) => category.id !== deletingCategory.id
      )
    );

    setDeletingCategory(null);
  };

  return (
    <div className="min-h-screen bg-slate-50/80 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1500px] space-y-7">
        <CategoryHeader onAdd={handleAdd} />

        <CategoryStats
          categories={categories}
          totalBooks={totalBooks}
        />

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <CategoryFilters
            search={search}
            onSearch={handleSearch}
            status={status}
            onStatusChange={handleStatusChange}
            sort={sort}
            onSortChange={(value) => {
              setSort(value);
              setCurrentPage(1);
            }}
            onReset={() => {
              setSearch("");
              setStatus("All");
              setSort("newest");
              setCurrentPage(1);
            }}
          />

          <CategoryTable
            categories={paginatedCategories}
            search={search}
            status={status}
            currentPage={safePage}
            pageSize={pageSize}
            totalItems={filteredCategories.length}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            onEdit={handleEdit}
            onDelete={setDeletingCategory}
          />
        </div>
      </div>

      <CategoryFormDialog
        open={formOpen}
        category={editingCategory}
        onClose={() => {
          setFormOpen(false);
          setEditingCategory(null);
        }}
        onSave={handleSaveCategory}
        categories={categories}
      />

      <DeleteCategoryDialog
        category={deletingCategory}
        onClose={() => setDeletingCategory(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
