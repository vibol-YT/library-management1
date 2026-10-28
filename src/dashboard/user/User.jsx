
import React, { useState } from "react";
import UserHeader from "./Components/UserHeader";
import UserStats from "./Components/UserStats";
import UserFilters from "./Components/UserFilters";
import UserFormDialog from "./Components/UserFormDialog";
import DeleteUserDialog from "./Components/DeleteUserDialog";
import UserTable from "./Components/UserTable.";

export default function User() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Dara Sok",
      email: "dara@gmail.com",
      phone: "012 345 678",
      role: "Student",
      status: "Active",
    },
    {
      id: 2,
      name: "Sokha Chan",
      email: "sokha@gmail.com",
      phone: "010 222 333",
      role: "Student",
      status: "Active",
    },
    {
      id: 3,
      name: "Vibol Sim",
      email: "vibol@gmail.com",
      phone: "097 444 555",
      role: "Librarian",
      status: "Active",
    },
    {
      id: 4,
      name: "Sreyneang Kim",
      email: "sreyneang@gmail.com",
      phone: "096 777 888",
      role: "Student",
      status: "Inactive",
    },
    {
      id: 5,
      name: "Admin User",
      email: "admin@library.com",
      phone: "099 111 222",
      role: "Admin",
      status: "Active",
    },
  ]);

  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");
  const [status, setStatus] = useState("All");

  const [formOpen, setFormOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = users.filter((user) => {
    const matchSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.phone.includes(search);

    const matchRole = role === "All" || user.role === role;
    const matchStatus = status === "All" || user.status === status;

    return matchSearch && matchRole && matchStatus;
  });

  const handleAddUser = () => {
    setSelectedUser(null);
    setFormOpen(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setFormOpen(true);
  };

  const handleDeleteUser = (user) => {
    setSelectedUser(user);
    setDeleteOpen(true);
  };

  const handleSaveUser = (formData) => {
    if (selectedUser) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === selectedUser.id
            ? { ...user, ...formData }
            : user
        )
      );
    } else {
      const newUser = {
        id: Date.now(),
        ...formData,
      };

      setUsers((prev) => [...prev, newUser]);
    }

    setFormOpen(false);
    setSelectedUser(null);
  };

  const handleConfirmDelete = () => {
    setUsers((prev) =>
      prev.filter((user) => user.id !== selectedUser.id)
    );

    setDeleteOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="space-y-6 p-6">
      <UserHeader onAddUser={handleAddUser} />

      <UserStats users={users} />

      <UserFilters
        search={search}
        setSearch={setSearch}
        role={role}
        setRole={setRole}
        status={status}
        setStatus={setStatus}
      />

      <UserTable
        users={filteredUsers}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />

      <UserFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        user={selectedUser}
        onSave={handleSaveUser}
      />

      <DeleteUserDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        user={selectedUser}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}