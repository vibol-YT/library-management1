import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./auth/LoginPage";
import DashboardLayout from "./layout/DashboardLayout";
import Overview from "./dashboard/overview/Overview";
import Library from "./dashboard/library/Library";
import User from "./dashboard/user/User";
import Report from "./dashboard/reports/Report";
import Setting from "./dashboard/settings/Setting";
import Category from "./dashboard/category/Category";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Default page */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          {/* Library */}
          <Route path="/dashboard/library" element={<Library/>}/>
          {/* New Book */}
          <Route path="/dashboard/categories" element={<Category/>}/>
          {/* User */}
          <Route path="/dashboard/users" element={<User />}/>
          {/* Report */}
          <Route path="/dashboard/reports" element={<Report />}/>
          {/* Setting */}
          <Route path="/dashboard/settings" element={<Setting/>}/>
        </Route>
      </Routes>
    </Router>
  );
}
