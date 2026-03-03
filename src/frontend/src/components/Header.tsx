import { Moon, Settings, Sun, Wifi } from "lucide-react";
import React from "react";

interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenSettings: () => void;
  userName?: string;
}

export default function Header({
  darkMode,
  onToggleDarkMode,
  onOpenSettings,
  userName,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 w-full glass-strong border-b border-white/10 shadow-glass">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center">
            <img
              src="/assets/generated/globe-radar-icon.dim_128x128.png"
              alt="WebSearch360"
              className="w-6 h-6 object-contain"
            />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-lg font-bold text-foreground tracking-tight">
              WebSearch
            </span>
            <span className="font-display text-lg font-bold neon-text tracking-tight">
              360
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/30">
            <Wifi className="w-3 h-3 text-green-400" />
            <span className="text-green-400 text-xs font-medium">LIVE</span>
          </div>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {userName && (
            <span className="hidden md:block text-sm text-muted-foreground">
              Hi,{" "}
              <span className="text-foreground font-medium">{userName}</span>
            </span>
          )}

          <button
            type="button"
            onClick={onToggleDarkMode}
            className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-muted-foreground hover:text-foreground"
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          <button
            type="button"
            onClick={onOpenSettings}
            className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-muted-foreground hover:text-foreground"
            title="Settings"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
