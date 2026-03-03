import { Switch } from "@/components/ui/switch";
import {
  Bell,
  Image,
  Layout,
  Mail,
  Moon,
  RefreshCw,
  Sun,
  Type,
  X,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import type { Category } from "../types/article";

export interface AppSettings {
  darkMode: boolean;
  notificationSound: boolean;
  refreshInterval: 30 | 60 | 120;
  fontSize: "small" | "medium" | "large";
  compactView: boolean;
  showImages: boolean;
  visibleCategories: Category[];
  userName: string;
  userEmail: string;
}

const ALL_CATEGORIES: Category[] = [
  "politics",
  "national",
  "international",
  "sports",
  "war",
  "business",
  "technology",
  "science",
  "health",
  "entertainment",
  "weather",
];

const CATEGORY_LABELS: Record<Category, string> = {
  politics: "Politics",
  national: "National",
  international: "International",
  sports: "Sports",
  war: "War",
  business: "Business",
  technology: "Technology",
  science: "Science",
  health: "Health",
  entertainment: "Entertainment",
  weather: "Weather",
};

interface SettingsPanelProps {
  isOpen: boolean;
  settings: AppSettings;
  onClose: () => void;
  onSave: (settings: AppSettings) => void;
}

export function loadSettings(): AppSettings {
  return {
    darkMode: localStorage.getItem("darkMode") !== "false",
    notificationSound: localStorage.getItem("notificationSound") !== "false",
    refreshInterval: (Number(localStorage.getItem("refreshInterval")) || 60) as
      | 30
      | 60
      | 120,
    fontSize:
      (localStorage.getItem("fontSize") as "small" | "medium" | "large") ||
      "medium",
    compactView: localStorage.getItem("compactView") === "true",
    showImages: localStorage.getItem("showImages") !== "false",
    visibleCategories:
      JSON.parse(localStorage.getItem("visibleCategories") || "null") ||
      ALL_CATEGORIES,
    userName: localStorage.getItem("userName") || "",
    userEmail: localStorage.getItem("userEmail") || "",
  };
}

export function saveSettings(settings: AppSettings) {
  localStorage.setItem("darkMode", String(settings.darkMode));
  localStorage.setItem("notificationSound", String(settings.notificationSound));
  localStorage.setItem("refreshInterval", String(settings.refreshInterval));
  localStorage.setItem("fontSize", settings.fontSize);
  localStorage.setItem("compactView", String(settings.compactView));
  localStorage.setItem("showImages", String(settings.showImages));
  localStorage.setItem(
    "visibleCategories",
    JSON.stringify(settings.visibleCategories),
  );
  localStorage.setItem("userName", settings.userName);
  localStorage.setItem("userEmail", settings.userEmail);
}

export default function SettingsPanel({
  isOpen,
  settings: initialSettings,
  onClose,
  onSave,
}: SettingsPanelProps) {
  const [local, setLocal] = useState<AppSettings>(initialSettings);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setLocal(initialSettings);
  }, [initialSettings]);

  const update = <K extends keyof AppSettings>(
    key: K,
    value: AppSettings[K],
  ) => {
    setLocal((prev) => ({ ...prev, [key]: value }));
  };

  const toggleCategory = (cat: Category) => {
    setLocal((prev) => ({
      ...prev,
      visibleCategories: prev.visibleCategories.includes(cat)
        ? prev.visibleCategories.filter((c) => c !== cat)
        : [...prev.visibleCategories, cat],
    }));
  };

  const handleSave = () => {
    saveSettings(local);
    onSave(local);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === "Escape") onClose();
        }}
        role="button"
        tabIndex={-1}
        aria-label="Close settings"
      />

      {/* Panel */}
      <div
        className="settings-panel-enter fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm flex flex-col"
        style={{
          background: "oklch(var(--card) / 0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderLeft: "1px solid oklch(1 0 0 / 0.1)",
          boxShadow: "-8px 0 40px oklch(0 0 0 / 0.4)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0">
          <h2 className="font-display text-lg font-bold text-foreground">
            Settings
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
          {/* Profile */}
          <section>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" /> Profile
            </h3>
            <div className="space-y-3">
              <div>
                <label
                  htmlFor="settings-name"
                  className="block text-xs text-muted-foreground mb-1"
                >
                  Name
                </label>
                <input
                  id="settings-name"
                  type="text"
                  value={local.userName}
                  onChange={(e) => update("userName", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="settings-email"
                  className="block text-xs text-muted-foreground mb-1"
                >
                  Email
                </label>
                <input
                  id="settings-email"
                  type="email"
                  value={local.userEmail}
                  onChange={(e) => update("userEmail", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>
          </section>

          {/* Appearance */}
          <section>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
              <Sun className="w-3.5 h-3.5" /> Appearance
            </h3>
            <div className="space-y-3">
              {/* Dark Mode */}
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  {local.darkMode ? (
                    <Moon className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <Sun className="w-4 h-4 text-muted-foreground" />
                  )}
                  <span className="text-sm text-foreground">Dark Mode</span>
                </div>
                <Switch
                  checked={local.darkMode}
                  onCheckedChange={(v) => update("darkMode", v)}
                />
              </div>

              {/* Font Size */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Type className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">Font Size</span>
                </div>
                <div className="flex gap-2">
                  {(["small", "medium", "large"] as const).map((size) => (
                    <button
                      type="button"
                      key={size}
                      onClick={() => update("fontSize", size)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-medium border transition-all capitalize ${
                        local.fontSize === size
                          ? "bg-cyan-500/20 border-cyan-500/40 text-cyan-400"
                          : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Compact View */}
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <Layout className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">Compact View</span>
                </div>
                <Switch
                  checked={local.compactView}
                  onCheckedChange={(v) => update("compactView", v)}
                />
              </div>

              {/* Show Images */}
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <Image className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">Show Images</span>
                </div>
                <Switch
                  checked={local.showImages}
                  onCheckedChange={(v) => update("showImages", v)}
                />
              </div>
            </div>
          </section>

          {/* Notifications */}
          <section>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
              <Bell className="w-3.5 h-3.5" /> Notifications
            </h3>
            <div className="space-y-3">
              {/* Notification Sound */}
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">
                    Notification Sound
                  </span>
                </div>
                <Switch
                  checked={local.notificationSound}
                  onCheckedChange={(v) => update("notificationSound", v)}
                />
              </div>
            </div>
          </section>

          {/* Auto-Refresh */}
          <section>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5" /> Auto-Refresh Interval
            </h3>
            <div className="flex gap-2">
              {([30, 60, 120] as const).map((interval) => (
                <button
                  type="button"
                  key={interval}
                  onClick={() => update("refreshInterval", interval)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    local.refreshInterval === interval
                      ? "bg-cyan-500/20 border-cyan-500/40 text-cyan-400"
                      : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"
                  }`}
                >
                  {interval === 120 ? "2 hrs" : `${interval} min`}
                </button>
              ))}
            </div>
          </section>

          {/* Categories */}
          <section>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Visible Categories
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {ALL_CATEGORIES.map((cat) => {
                const isVisible = local.visibleCategories.includes(cat);
                return (
                  <button
                    type="button"
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border transition-all text-left ${
                      isVisible
                        ? `badge-${cat} border`
                        : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${isVisible ? "bg-current" : "bg-white/20"}`}
                    />
                    {CATEGORY_LABELS[cat]}
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              onClick={() => update("visibleCategories", ALL_CATEGORIES)}
              className="mt-2 w-full py-1.5 rounded-lg text-xs text-muted-foreground hover:text-foreground bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              Select All
            </button>
          </section>
        </div>

        {/* Save button */}
        <div className="p-4 border-t border-white/10 flex-shrink-0">
          <button
            type="button"
            onClick={handleSave}
            className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all ${
              saved
                ? "bg-green-500/20 border border-green-500/40 text-green-400"
                : "bg-gradient-to-r from-cyan-500 to-blue-600 text-black hover:from-cyan-400 hover:to-blue-500 shadow-neon-sm hover:shadow-neon-md active:scale-[0.98]"
            }`}
          >
            {saved ? "✓ Settings Saved!" : "Save Settings"}
          </button>
        </div>
      </div>
    </>
  );
}
