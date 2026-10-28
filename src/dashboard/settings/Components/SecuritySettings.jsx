import React from "react";
import { ShieldCheck, LockKeyhole, Info } from "lucide-react";

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

export default function SecuritySettings({ settings, updateSetting }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-4">
        <div className="rounded-lg bg-white p-3 shadow-sm">
          <ShieldCheck className="h-6 w-6 text-slate-700" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Security</h3>
          <p className="text-sm text-slate-500">
            Configure password requirements and session settings.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="minimumPasswordLength"
          className="text-sm font-medium text-slate-700"
        >
          Minimum Password Length
        </label>

        <input
          id="minimumPasswordLength"
          type="number"
          min="8"
          max="128"
          value={settings.minimumPasswordLength}
          onChange={(event) =>
            updateSetting("minimumPasswordLength", event.target.value)
          }
          className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-100 sm:max-w-sm"
        />

        <p className="text-xs text-slate-500">
          Recommended: at least 8 characters.
        </p>
      </div>

      <div className="divide-y divide-slate-100">
        <ToggleRow
          title="Strong Password Requirement"
          description="Require passwords to meet your password policy."
          checked={settings.requireStrongPassword}
          onChange={(value) =>
            updateSetting("requireStrongPassword", value)
          }
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="sessionTimeout"
          className="text-sm font-medium text-slate-700"
        >
          Session Timeout
        </label>

        <select
          id="sessionTimeout"
          value={settings.sessionTimeout}
          onChange={(event) =>
            updateSetting("sessionTimeout", event.target.value)
          }
          className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-100 sm:max-w-sm"
        >
          <option value="15">15 minutes</option>
          <option value="30">30 minutes</option>
          <option value="60">60 minutes</option>
          <option value="120">2 hours</option>
        </select>
      </div>

      <div className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
        <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
        <div className="space-y-1">
          <p className="text-sm font-medium text-amber-900">
            Security settings need backend enforcement
          </p>
          <p className="text-sm leading-6 text-amber-800">
            <Info className="mr-1 inline h-4 w-4" />
            Password rules, authentication, authorization, and session
            expiration must be validated by your backend. Changing these
            frontend controls alone does not secure user accounts.
          </p>
        </div>
      </div>
    </div>
  );
}