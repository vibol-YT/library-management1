import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

export default function UserHeader({onAddUser}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
        <p className="text-muted-foreground">
          Manage library members and accounts.
        </p>
      </div>

      <Button onClick={onAddUser}>
        <Plus className="mr-2 h-4 w-4"/>
        Add User
      </Button>
    </div>
  );
}
