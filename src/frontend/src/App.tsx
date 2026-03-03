import { Loader2 } from "lucide-react";
import React, { useState, useEffect, useCallback } from "react";
import CategoryTabs, { type TabId } from "./components/CategoryTabs";
import Header from "./components/Header";
import LiveBadge from "./components/LiveBadge";
import NewsCard from "./components/NewsCard";
import NewsTicker from "./components/NewsTicker";
import OnboardingModal from "./components/OnboardingModal";
import SearchBar from "./components/SearchBar";
import SettingsPanel, {
  type AppSettings,
  loadSettings,
  saveSettings,
} from "./components/SettingsPanel";
import { BREAKING_TICKER_HEADLINES } from "./data/mockArticles";
import { useRealNews } from "./hooks/useRealNews";
import type { Category } from "./types/article";
import { filterArticles } from "./utils/searchUtils";

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

export default function App() {
  // Onboarding
  const [showOnboarding, setShowOnboarding] = useState(false);

  // Settings
  const [settings, setSettings] = useState<AppSettings>(() => loadSettings());

  // Dark mode applied to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (settings.darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [settings.darkMode]);

  // Font size applied to <body>
  useEffect(() => {
    const body = document.body;
    body.classList.remove(
      "font-size-small",
      "font-size-medium",
      "font-size-large",
    );
    body.classList.add(`font-size-${settings.fontSize}`);
  }, [settings.fontSize]);

  // Compact view applied to <body>
  useEffect(() => {
    const body = document.body;
    if (settings.compactView) {
      body.classList.add("compact-view");
    } else {
      body.classList.remove("compact-view");
    }
  }, [settings.compactView]);

  // Check onboarding on mount
  useEffect(() => {
    const completed = localStorage.getItem("hasCompletedOnboarding");
    if (!completed) {
      setShowOnboarding(true);
    }
  }, []);

  // Real news hook
  const {
    articles,
    isLoading: isRealLoading,
    isFallback,
    refetch,
  } = useRealNews({
    refreshInterval: settings.refreshInterval,
  });

  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Update lastUpdated whenever articles change
  useEffect(() => {
    if (articles.length > 0) {
      setLastUpdated(new Date());
    }
  }, [articles]);

  // Tab & search
  const [activeTab, setActiveTab] = useState<TabId>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Settings panel
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    // Reload settings after onboarding saves them
    setSettings(loadSettings());
  };

  const handleToggleDarkMode = () => {
    const next = { ...settings, darkMode: !settings.darkMode };
    setSettings(next);
    saveSettings(next);
  };

  const handleSaveSettings = (newSettings: AppSettings) => {
    setSettings(newSettings);
    setIsSettingsOpen(false);
  };

  // Filter articles based on active tab and search
  const displayedArticles = React.useMemo(() => {
    let filtered = articles;

    // Tab filter
    if (activeTab !== "all") {
      filtered = filtered.filter((a) => a.category === activeTab);
    } else {
      // Only show visible categories on ALL tab
      filtered = filtered.filter((a) =>
        settings.visibleCategories.includes(a.category),
      );
    }

    // Search filter (only on ALL tab)
    if (activeTab === "all" && searchQuery.trim()) {
      filtered = filterArticles(filtered, searchQuery);
    }

    return filtered;
  }, [articles, activeTab, searchQuery, settings.visibleCategories]);

  // Breaking articles for ticker
  const _breakingArticles = articles.filter(
    (a) => a.breaking || a.severity === "critical",
  );
  const tickerHeadlines = BREAKING_TICKER_HEADLINES;

  const visibleCategories =
    settings.visibleCategories.length > 0
      ? settings.visibleCategories
      : ALL_CATEGORIES;

  return (
    <div className="min-h-screen bg-background bg-grid-pattern transition-colors duration-300">
      {/* Onboarding Modal */}
      {showOnboarding && (
        <OnboardingModal onComplete={handleOnboardingComplete} />
      )}

      {/* Breaking News Ticker */}
      <NewsTicker headlines={tickerHeadlines} />

      {/* Header */}
      <Header
        darkMode={settings.darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onOpenSettings={() => setIsSettingsOpen(true)}
        userName={settings.userName}
      />

      {/* Category Tabs */}
      <CategoryTabs
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setSearchQuery("");
        }}
        visibleCategories={visibleCategories}
      />

      {/* Main Content */}
      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-6">
        {/* Top bar: search + live badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="w-full sm:flex-1">
            {activeTab === "all" && (
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            )}
            {activeTab !== "all" && (
              <h2 className="font-display text-xl font-bold text-foreground capitalize">
                {activeTab} News
              </h2>
            )}
          </div>
          <div className="flex-shrink-0">
            <LiveBadge
              lastUpdated={lastUpdated}
              refreshInterval={settings.refreshInterval}
              isRefreshing={isRealLoading}
              onRefresh={handleRefresh}
            />
          </div>
        </div>

        {/* Fallback banner — shown when live feeds are unavailable */}
        {isFallback && !isRealLoading && (
          <div
            className="mb-4 px-3 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-sm text-yellow-400 flex items-center gap-2"
            data-ocid="news.fallback_state"
          >
            <span>⚠</span>
            <span>
              Live news feeds are temporarily unavailable. Showing sample
              stories — tap refresh to try again.
            </span>
            <button
              type="button"
              onClick={handleRefresh}
              className="ml-auto text-xs px-2 py-0.5 rounded bg-yellow-500/20 hover:bg-yellow-500/30 transition-colors font-medium"
              data-ocid="news.fallback_refresh_button"
            >
              Retry
            </button>
          </div>
        )}

        {/* Search results info */}
        {activeTab === "all" && searchQuery.trim() && (
          <div className="mb-4 px-3 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400">
            Found <strong>{displayedArticles.length}</strong> result
            {displayedArticles.length !== 1 ? "s" : ""} for{" "}
            <strong>"{searchQuery}"</strong>
          </div>
        )}

        {/* Loading state — initial load only (no articles yet) */}
        {isRealLoading && articles.length === 0 && (
          <div
            className="flex flex-col items-center justify-center gap-4 py-20 text-muted-foreground"
            data-ocid="news.loading_state"
          >
            <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
            <div className="text-center">
              <p className="text-sm font-medium text-foreground">
                Loading live news...
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Fetching real-time feeds from BBC, NYT, NPR and more
              </p>
            </div>
          </div>
        )}

        {/* Refresh indicator (when already have articles) */}
        {isRealLoading && articles.length > 0 && (
          <div className="flex items-center justify-center gap-3 py-4 text-muted-foreground">
            <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
            <span className="text-xs">Refreshing news feed...</span>
          </div>
        )}

        {/* Articles grid */}
        {!isRealLoading && displayedArticles.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-20 text-center"
            data-ocid="news.empty_state"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              No articles found
            </h3>
            <p className="text-muted-foreground text-sm max-w-sm">
              {searchQuery
                ? `No results for "${searchQuery}". Try different keywords.`
                : "No articles available for this category. Try refreshing."}
            </p>
          </div>
        ) : (
          !isRealLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-fade-in">
              {displayedArticles.map((article) => (
                <NewsCard
                  key={article.id}
                  article={article}
                  searchQuery={activeTab === "all" ? searchQuery : undefined}
                  showImages={settings.showImages}
                  compact={settings.compactView}
                  fontSize={settings.fontSize}
                />
              ))}
            </div>
          )
        )}
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-white/10 py-6 px-4">
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <img
              src="/assets/generated/globe-radar-icon.dim_128x128.png"
              alt="WebSearch360"
              className="w-5 h-5 object-contain opacity-60"
            />
            <span>
              © {new Date().getFullYear()} WebSearch360. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <span className="text-red-400">♥</span>
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || "websearch360")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </footer>

      {/* Settings Panel */}
      <SettingsPanel
        isOpen={isSettingsOpen}
        settings={settings}
        onClose={() => setIsSettingsOpen(false)}
        onSave={handleSaveSettings}
      />
    </div>
  );
}
