
import { useMemo, useState } from "react";

import LibraryHeader from "./components/LibraryHeader";
import LibraryStats from "./components/LibraryStats";
import LibraryFilters from "./components/LibraryFilters";
import BookTable from "./components/BookTable";
import BookFormDialog from "./components/BookFormDialog";
import DeleteBookDialog from "./components/DeleteBookDialog";
import { initialBooks } from "@/constants/data";



const emptyForm = {
  title: "",
  author: "",
  isbn: "",
  category: "Technology",
  quantity: "1",
};

export default function Library() {
  const [books, setBooks] = useState(initialBooks);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");

  const [formOpen, setFormOpen] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [bookToDelete, setBookToDelete] = useState(null);

  const [form, setForm] = useState(emptyForm);

  const categories = useMemo(
    () => [...new Set(books.map((book) => book.category))],
    [books]
  );

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const term = search.trim().toLowerCase();

      const matchesSearch =
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term) ||
        book.isbn.toLowerCase().includes(term);

      const matchesCategory =
        category === "all" || book.category === category;

      const bookStatus =
        book.available > 0 ? "Available" : "Borrowed";

      const matchesStatus =
        status === "all" || bookStatus === status;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [books, search, category, status]);

  const totalBooks = books.reduce(
    (sum, book) => sum + book.quantity,
    0
  );

  const availableBooks = books.reduce(
    (sum, book) => sum + book.available,
    0
  );

  const borrowedBooks = totalBooks - availableBooks;

  const openAddForm = () => {
    setEditingBook(null);
    setForm(emptyForm);
    setFormOpen(true);
  };

  const openEditForm = (book) => {
    setEditingBook(book);

    setForm({
      title: book.title,
      author: book.author,
      isbn: book.isbn,
      category: book.category,
      quantity: String(book.quantity),
    });

    setFormOpen(true);
  };

  const saveBook = (event) => {
    event.preventDefault();

    const quantity = Number(form.quantity);

    if (
      !form.title.trim() ||
      !form.author.trim() ||
      !form.isbn.trim() ||
      !Number.isInteger(quantity) ||
      quantity < 1
    ) {
      return;
    }

    if (editingBook) {
      setBooks((current) =>
        current.map((book) => {
          if (book.id !== editingBook.id) return book;

          const borrowed = book.quantity - book.available;

          if (quantity < borrowed) return book;

          return {
            ...book,
            title: form.title.trim(),
            author: form.author.trim(),
            isbn: form.isbn.trim(),
            category: form.category,
            quantity,
            available: quantity - borrowed,
          };
        })
      );
    } else {
      setBooks((current) => [
        {
          id: Date.now(),
          title: form.title.trim(),
          author: form.author.trim(),
          isbn: form.isbn.trim(),
          category: form.category,
          quantity,
          available: quantity,
        },
        ...current,
      ]);
    }

    setFormOpen(false);
    setEditingBook(null);
    setForm(emptyForm);
  };

  const confirmDelete = () => {
    if (!bookToDelete) return;

    setBooks((current) =>
      current.filter((book) => book.id !== bookToDelete.id)
    );

    setBookToDelete(null);
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setStatus("all");
  };

  return (
    <div className="space-y-6">
      <LibraryHeader onAddBook={openAddForm} />

      <LibraryStats
        totalBooks={totalBooks}
        availableBooks={availableBooks}
        borrowedBooks={borrowedBooks}
        totalCategories={categories.length}
      />

      <LibraryFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
        categories={categories}
        onClear={clearFilters}
        resultCount={filteredBooks.length}
        totalCount={books.length}
      />

      <BookTable
        books={filteredBooks}
        onEdit={openEditForm}
        onDelete={setBookToDelete}
      />

      <BookFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        form={form}
        setForm={setForm}
        onSubmit={saveBook}
        editing={Boolean(editingBook)}
        categories={categories}
        borrowedCount={
          editingBook
            ? editingBook.quantity - editingBook.available
            : 0
        }
      />

      <DeleteBookDialog
        book={bookToDelete}
        onCancel={() => setBookToDelete(null)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
