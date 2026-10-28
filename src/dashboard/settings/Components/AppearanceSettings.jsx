import React from "react";
import { Palette, Monitor, Sun, Moon } from "lucide-react";

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

const themes = [
  { value: "Light", label: "Light", icon: Sun },
  { value: "Dark", label: "Dark", icon: Moon },
  { value: "System", label: "System", icon: Monitor },
];

export default function AppearanceSettings({ settings, updateSetting }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-4">
        <div className="rounded-lg bg-white p-3 shadow-sm">
          <Palette className="h-6 w-6 text-slate-700" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Appearance</h3>
          <p className="text-sm text-slate-500">
            Customize your dashboard display.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium text-slate-800">Theme</h4>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {themes.map((theme) => {
            const Icon = theme.icon;
            const selected = settings.theme === theme.value;

            return (
              <button
                key={theme.value}
                type="button"
                onClick={() => updateSetting("theme", theme.value)}
                aria-pressed={selected}
                className={`flex items-center gap-3 rounded-lg border p-4 text-left transition ${
                  selected
                    ? "border-slate-900 bg-slate-50 ring-1 ring-slate-900"
                    : "border-slate-200 hover:border-slate-400"
                }`}
              >
                <Icon size={20} className="text-slate-600" />
                <span className="text-sm font-medium text-slate-800">
                  {theme.label}
                </span>

                <span
                  className={`ml-auto flex h-4 w-4 items-center justify-center rounded-full border ${
                    selected
                      ? "border-slate-900 bg-slate-900"
                      : "border-slate-300"
                  }`}
                >
                  {selected && (
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        <p className="text-xs text-slate-500">
          Selecting a theme updates this setting only. Apply the selected theme
          to your application layout to change the actual page appearance.
        </p>
      </div>

      <div className="divide-y divide-slate-100">
        <ToggleRow
          title="Compact Sidebar"
          description="Use a more compact navigation layout."
          checked={settings.compactSidebar}
          onChange={(value) => updateSetting("compactSidebar", value)}
        />

        <ToggleRow
          title="Show Dashboard Statistics"
          description="Display statistics cards on the dashboard."
          checked={settings.showDashboardStats}
          onChange={(value) => updateSetting("showDashboardStats", value)}
        />
      </div>
    </div>
  );
}