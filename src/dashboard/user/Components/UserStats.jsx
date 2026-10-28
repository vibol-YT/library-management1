
import React from "react";
import {
  Users,
  GraduationCap,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UserStats({ users }) {
  const totalUsers = users.length;

  const students = users.filter(
    (user) => user.role === "Student"
  ).length;

  const librarians = users.filter(
    (user) => user.role === "Librarian"
  ).length;

  const activeUsers = users.filter(
    (user) => user.status === "Active"
  ).length;

  const stats = [
    {
      title: "Total Users",
      value: totalUsers,
      description: "All registered users",
      icon: Users,
    },
    {
      title: "Students",
      value: students,
      description: "Library members",
      icon: GraduationCap,
    },
    {
      title: "Librarians",
      value: librarians,
      description: "Library staff",
      icon: ShieldCheck,
    },
    {
      title: "Active Users",
      value: activeUsers,
      description: "Currently active",
      icon: UserCheck,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>

              <Icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">
                {stat.value}
              </div>

              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
