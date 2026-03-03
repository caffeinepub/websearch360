import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Loader2 } from 'lucide-react';
import OnboardingModal from './components/OnboardingModal';
import Header from './components/Header';
import NewsTicker from './components/NewsTicker';
import CategoryTabs, { TabId } from './components/CategoryTabs';
import SearchBar from './components/SearchBar';
import LiveBadge from './components/LiveBadge';
import NewsCard from './components/NewsCard';
import SettingsPanel, { AppSettings, loadSettings, saveSettings } from './components/SettingsPanel';
import EmailAlertBanner from './components/EmailAlertBanner';
import { MOCK_ARTICLES, BREAKING_TICKER_HEADLINES } from './data/mockArticles';
import { Article, Category } from './types/article';
import { filterArticles } from './utils/searchUtils';

interface AlertItem {
  id: string;
  email: string;
  headline: string;
}

const ALL_CATEGORIES: Category[] = [
  'politics', 'national', 'international', 'sports', 'war',
  'business', 'technology', 'science', 'health', 'entertainment', 'weather',
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
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [settings.darkMode]);

  // Font size applied to <body>
  useEffect(() => {
    const body = document.body;
    body.classList.remove('font-size-small', 'font-size-medium', 'font-size-large');
    body.classList.add(`font-size-${settings.fontSize}`);
  }, [settings.fontSize]);

  // Compact view applied to <body>
  useEffect(() => {
    const body = document.body;
    if (settings.compactView) {
      body.classList.add('compact-view');
    } else {
      body.classList.remove('compact-view');
    }
  }, [settings.compactView]);

  // Check onboarding on mount
  useEffect(() => {
    const completed = localStorage.getItem('hasCompletedOnboarding');
    if (!completed) {
      setShowOnboarding(true);
    }
  }, []);

  // Articles & refresh
  const [articles, setArticles] = useState<Article[]>(MOCK_ARTICLES);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Tab & search
  const [activeTab, setActiveTab] = useState<TabId>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Settings panel
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Email alerts
  const [alerts, setAlerts] = useState<AlertItem[]>([]);
  const shownAlertIds = useRef<Set<string>>(new Set());

  // Detect critical articles and show alerts
  useEffect(() => {
    const emailDelivery = settings.emailDeliveryMode;
    const userEmail = settings.userEmail;
    if (!emailDelivery || !userEmail) return;

    const criticalArticles = articles.filter((a) => a.severity === 'critical');
    const newAlerts: AlertItem[] = [];

    criticalArticles.forEach((article) => {
      if (!shownAlertIds.current.has(article.id)) {
        shownAlertIds.current.add(article.id);
        newAlerts.push({
          id: `alert-${article.id}-${Date.now()}`,
          email: userEmail,
          headline: article.headline,
        });
      }
    });

    if (newAlerts.length > 0) {
      setAlerts((prev) => [...prev, ...newAlerts]);
    }
  }, [articles, settings.emailDeliveryMode, settings.userEmail]);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    // Simulate async refresh
    setTimeout(() => {
      setArticles([...MOCK_ARTICLES]);
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1500);
  }, []);

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

  const handleDismissAlert = (id: string) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };

  // Filter articles based on active tab and search
  const displayedArticles = React.useMemo(() => {
    let filtered = articles;

    // Tab filter
    if (activeTab !== 'all') {
      filtered = filtered.filter((a) => a.category === activeTab);
    } else {
      // Only show visible categories on ALL tab
      filtered = filtered.filter((a) => settings.visibleCategories.includes(a.category));
    }

    // Search filter (only on ALL tab)
    if (activeTab === 'all' && searchQuery.trim()) {
      filtered = filterArticles(filtered, searchQuery);
    }

    return filtered;
  }, [articles, activeTab, searchQuery, settings.visibleCategories]);

  // Breaking articles for ticker
  const breakingArticles = articles.filter((a) => a.breaking || a.severity === 'critical');
  const tickerHeadlines = BREAKING_TICKER_HEADLINES;

  const visibleCategories = settings.visibleCategories.length > 0
    ? settings.visibleCategories
    : ALL_CATEGORIES;

  return (
    <div className="min-h-screen bg-background bg-grid-pattern transition-colors duration-300">
      {/* Email Alert Banners */}
      <EmailAlertBanner alerts={alerts} onDismiss={handleDismissAlert} />

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
          setSearchQuery('');
        }}
        visibleCategories={visibleCategories}
      />

      {/* Main Content */}
      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-6">
        {/* Top bar: search + live badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="w-full sm:flex-1">
            {activeTab === 'all' && (
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            )}
            {activeTab !== 'all' && (
              <h2 className="font-display text-xl font-bold text-foreground capitalize">
                {activeTab} News
              </h2>
            )}
          </div>
          <div className="flex-shrink-0">
            <LiveBadge
              lastUpdated={lastUpdated}
              refreshInterval={settings.refreshInterval}
              isRefreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          </div>
        </div>

        {/* Search results info */}
        {activeTab === 'all' && searchQuery.trim() && (
          <div className="mb-4 px-3 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400">
            Found <strong>{displayedArticles.length}</strong> result{displayedArticles.length !== 1 ? 's' : ''} for{' '}
            <strong>"{searchQuery}"</strong>
          </div>
        )}

        {/* Loading overlay */}
        {isRefreshing && (
          <div className="flex items-center justify-center gap-3 py-8 text-muted-foreground">
            <Loader2 className="w-5 h-5 animate-spin text-cyan-400" />
            <span className="text-sm">Refreshing news feed...</span>
          </div>
        )}

        {/* Articles grid */}
        {!isRefreshing && (
          <>
            {displayedArticles.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">No articles found</h3>
                <p className="text-muted-foreground text-sm max-w-sm">
                  {searchQuery
                    ? `No results for "${searchQuery}". Try different keywords.`
                    : 'No articles available for this category.'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-fade-in">
                {displayedArticles.map((article) => (
                  <NewsCard
                    key={article.id}
                    article={article}
                    searchQuery={activeTab === 'all' ? searchQuery : undefined}
                    showImages={settings.showImages}
                    compact={settings.compactView}
                    fontSize={settings.fontSize}
                  />
                ))}
              </div>
            )}
          </>
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
            <span>© {new Date().getFullYear()} WebSearch360. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <span className="text-red-400">♥</span>
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || 'websearch360')}`}
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
