import React, { useState } from "react";
import { Settings, Save, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import SettingSidebar from "./Components/SettingSidebar";
import LibrarySettings from "./Components/LibrarySettings";
import BorrowingSettings from "./Components/BorrowingSettings";
import UserSettings from "./Components/UserSettings";
import NotificationSettings from "./Components/NotificationSettings";
import AppearanceSettings from "./Components/AppearanceSettings";
import SecuritySettings from "./Components/SecuritySettings";

const initialSettings = {
  libraryName: "Knowledge Library",
  email: "library@example.com",
  phone: "+855 12 345 678",
  address: "Phnom Penh, Cambodia",
  openingTime: "08:00",
  closingTime: "17:00",

  borrowingDays: "14",
  maxBooks: "5",
  renewalLimit: "2",
  overdueFine: "0.50",

  allowRegistration: true,
  defaultRole: "Member",
  requireApproval: true,

  borrowingNotifications: true,
  dueDateReminders: true,
  overdueNotifications: true,
  emailNotifications: false,

  theme: "Light",
  compactSidebar: false,
  showDashboardStats: true,

  minimumPasswordLength: "8",
  requireStrongPassword: true,
  sessionTimeout: "30",
};

export default function Setting() {
  const [activeSection, setActiveSection] = useState("general");
  const [settings, setSettings] = useState(initialSettings);
  const [saved, setSaved] = useState(false);

  const updateSetting = (name, value) => {
    setSettings((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSaved(false);
  };

  const handleSave = () => {
    // Demo only: replace this with an API request when your backend is ready.
    console.log("Settings to save:", settings);
    setSaved(true);
    window.alert("Settings saved in the current page state.");
  };

  const handleReset = () => {
    const confirmed = window.confirm(
      "Reset all settings to their default values?"
    );

    if (confirmed) {
      setSettings(initialSettings);
      setSaved(false);
    }
  };

  const sectionTitles = {
    general: "General Settings",
    borrowing: "Borrowing Rules",
    users: "User Management",
    notifications: "Notifications",
    appearance: "Appearance",
    security: "Security",
  };

  const renderActiveSection = () => {
    const props = { settings, updateSetting };

    switch (activeSection) {
      case "general":
        return <LibrarySettings {...props} />;
      case "borrowing":
        return <BorrowingSettings {...props} />;
      case "users":
        return <UserSettings {...props} />;
      case "notifications":
        return <NotificationSettings {...props} />;
      case "appearance":
        return <AppearanceSettings {...props} />;
      case "security":
        return <SecuritySettings {...props} />;
      default:
        return <LibrarySettings {...props} />;
    }
  };

  return (
    <div className="min-h-screen space-y-6 bg-slate-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
            <Settings size={16} />
            <span>Dashboard</span>
            <span>/</span>
            <span>Settings</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Settings
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your library preferences and system configuration.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={handleReset}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>

          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>

      {saved && (
        <div
          className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
          role="status"
        >
          Your settings have been applied to the current page state.
        </div>
      )}

      {/* Settings layout */}
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">
        <SettingSidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <div className="min-w-0 space-y-4">
          <Card className="gap-0 overflow-hidden border-slate-200 bg-white py-0 shadow-sm">
            <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
              <h2 className="text-lg font-semibold text-slate-900">
                {sectionTitles[activeSection]}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Update your preferences below.
              </p>
            </div>

            <div className="p-5 sm:p-6">{renderActiveSection()}</div>
          </Card>

          <div className="flex flex-col justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center">
            <p className="text-sm text-slate-500">
              Remember to save after changing your settings.
            </p>

            <Button onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" />
              Save Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}