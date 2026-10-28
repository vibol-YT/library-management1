import React from "react";
import { Users } from "lucide-react";

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

export default function UserSettings({ settings, updateSetting }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-4">
        <div className="rounded-lg bg-white p-3 shadow-sm">
          <Users className="h-6 w-6 text-slate-700" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">User Management</h3>
          <p className="text-sm text-slate-500">
            Control registration and new member approvals.
          </p>
        </div>
      </div>

      <div className="divide-y divide-slate-100">
        <ToggleRow
          title="Allow New Registrations"
          description="Allow new members to register for a library account."
          checked={settings.allowRegistration}
          onChange={(value) => updateSetting("allowRegistration", value)}
        />

        <ToggleRow
          title="Require Approval"
          description="Require an administrator to approve new member accounts."
          checked={settings.requireApproval}
          onChange={(value) => updateSetting("requireApproval", value)}
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="defaultRole"
          className="text-sm font-medium text-slate-700"
        >
          Default User Role
        </label>

        <select
          id="defaultRole"
          value={settings.defaultRole}
          onChange={(event) =>
            updateSetting("defaultRole", event.target.value)
          }
          className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-100 sm:max-w-sm"
        >
          <option value="Member">Member</option>
          <option value="Librarian">Librarian</option>
        </select>

        <p className="text-xs text-slate-500">
          Administrator privileges should only be assigned by an authorized
          administrator.
        </p>
      </div>
    </div>
  );
}