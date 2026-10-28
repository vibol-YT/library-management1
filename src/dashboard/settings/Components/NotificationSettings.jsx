import React from "react";
import { Bell, Mail } from "lucide-react";

function ToggleRow({ title, description, checked, onChange }) {
  return (
    <div className="flex items-start justify-between gap-4 py-4">
      <div>
        <p className="text-sm font-medium text-slate-800">{title}</p>
        <p className="mt-1 text-sm leading-5 text-slate-500">{description}</p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative mt-1 inline-flex h-6 w-11 shrink-0 items-center rounded-full transition ${
          checked ? "bg-slate-900" : "bg-slate-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 rounded-full bg-white transition ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

export default function NotificationSettings({ settings, updateSetting }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-4">
        <div className="rounded-lg bg-white p-3 shadow-sm">
          <Bell className="h-6 w-6 text-slate-700" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Notifications</h3>
          <p className="text-sm text-slate-500">
            Manage library alerts and reminders.
          </p>
        </div>
      </div>

      <div className="divide-y divide-slate-100">
        <ToggleRow
          title="Borrowing Confirmations"
          description="Notify members when a book is borrowed."
          checked={settings.borrowingNotifications}
          onChange={(value) =>
            updateSetting("borrowingNotifications", value)
          }
        />

        <ToggleRow
          title="Due Date Reminders"
          description="Remind members before their borrowed books are due."
          checked={settings.dueDateReminders}
          onChange={(value) => updateSetting("dueDateReminders", value)}
        />

        <ToggleRow
          title="Overdue Notifications"
          description="Notify members when a book becomes overdue."
          checked={settings.overdueNotifications}
          onChange={(value) =>
            updateSetting("overdueNotifications", value)
          }
        />

        <ToggleRow
          title="Email Notifications"
          description="Enable email delivery for supported notifications."
          checked={settings.emailNotifications}
          onChange={(value) => updateSetting("emailNotifications", value)}
        />
      </div>

      <div className="flex gap-3 rounded-lg border border-slate-200 p-4">
        <Mail className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
        <p className="text-sm leading-6 text-slate-500">
          These switches only update the frontend state. Email delivery
          requires a backend email service and notification logic.
        </p>
      </div>
    </div>
  );
}