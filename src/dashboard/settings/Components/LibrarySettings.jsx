import React from "react";
import { Building2 } from "lucide-react";

function Field({ label, name, value, onChange, type = "text", placeholder }) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(name, event.target.value)}
        className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
      />
    </div>
  );
}

export default function LibrarySettings({ settings, updateSetting }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-4">
        <div className="rounded-lg bg-white p-3 shadow-sm">
          <Building2 className="h-6 w-6 text-slate-700" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Library Information</h3>
          <p className="text-sm text-slate-500">
            Basic information about your library.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="Library Name"
          name="libraryName"
          value={settings.libraryName}
          onChange={updateSetting}
          placeholder="Enter library name"
        />

        <Field
          label="Email Address"
          name="email"
          value={settings.email}
          onChange={updateSetting}
          type="email"
          placeholder="library@example.com"
        />

        <Field
          label="Phone Number"
          name="phone"
          value={settings.phone}
          onChange={updateSetting}
          placeholder="Enter phone number"
        />

        <Field
          label="Address"
          name="address"
          value={settings.address}
          onChange={updateSetting}
          placeholder="Enter library address"
        />

        <Field
          label="Opening Time"
          name="openingTime"
          value={settings.openingTime}
          onChange={updateSetting}
          type="time"
        />

        <Field
          label="Closing Time"
          name="closingTime"
          value={settings.closingTime}
          onChange={updateSetting}
          type="time"
        />
      </div>
    </div>
  );
}