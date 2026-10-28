import React from "react";
import { BookOpen, Info } from "lucide-react";

function NumberField({
  label,
  name,
  value,
  onChange,
  min = "0",
  step = "1",
  suffix,
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-medium text-slate-700">
        {label}
      </label>

      <div className="flex">
        <input
          id={name}
          name={name}
          type="number"
          min={min}
          step={step}
          value={value}
          onChange={(event) => onChange(name, event.target.value)}
          className="h-10 w-full min-w-0 rounded-l-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
        />
        {suffix && (
          <span className="inline-flex items-center rounded-r-md border border-l-0 border-slate-200 bg-slate-50 px-3 text-sm text-slate-500">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

export default function BorrowingSettings({ settings, updateSetting }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-4">
        <div className="rounded-lg bg-white p-3 shadow-sm">
          <BookOpen className="h-6 w-6 text-slate-700" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Borrowing Rules</h3>
          <p className="text-sm text-slate-500">
            Configure book loan limits and overdue fees.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <NumberField
          label="Borrowing Duration"
          name="borrowingDays"
          value={settings.borrowingDays}
          onChange={updateSetting}
          suffix="days"
          min="1"
        />

        <NumberField
          label="Maximum Books Per Member"
          name="maxBooks"
          value={settings.maxBooks}
          onChange={updateSetting}
          suffix="books"
          min="1"
        />

        <NumberField
          label="Renewal Limit"
          name="renewalLimit"
          value={settings.renewalLimit}
          onChange={updateSetting}
          suffix="times"
          min="0"
        />

        <NumberField
          label="Overdue Fine Per Day"
          name="overdueFine"
          value={settings.overdueFine}
          onChange={updateSetting}
          suffix="USD"
          min="0"
          step="0.01"
        />
      </div>

      <div className="flex gap-3 rounded-lg border border-blue-100 bg-blue-50 p-4">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
        <p className="text-sm leading-6 text-blue-800">
          These values are configuration examples. Connect them to your backend
          and validate them when creating or renewing a book loan.
        </p>
      </div>
    </div>
  );
}