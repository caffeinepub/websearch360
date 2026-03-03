import React, { useRef } from "react";
import type { Category } from "../types/article";

export type TabId = "all" | Category;

interface Tab {
  id: TabId;
  label: string;
}

const TABS: Tab[] = [
  { id: "all", label: "ALL" },
  { id: "politics", label: "Politics" },
  { id: "national", label: "National" },
  { id: "international", label: "International" },
  { id: "sports", label: "Sports" },
  { id: "war", label: "War" },
  { id: "business", label: "Business" },
  { id: "technology", label: "Technology" },
  { id: "science", label: "Science" },
  { id: "health", label: "Health" },
  { id: "entertainment", label: "Entertainment" },
  { id: "weather", label: "Weather" },
];

interface CategoryTabsProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  visibleCategories: Category[];
}

export default function CategoryTabs({
  activeTab,
  onTabChange,
  visibleCategories,
}: CategoryTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const visibleTabs = TABS.filter(
    (tab) => tab.id === "all" || visibleCategories.includes(tab.id as Category),
  );

  return (
    <div className="sticky top-14 z-20 w-full glass border-b border-white/10 shadow-glass">
      <div className="max-w-screen-2xl mx-auto px-2 sm:px-4">
        <div
          ref={scrollRef}
          className="flex items-center gap-0.5 overflow-x-auto custom-scrollbar"
          style={{ scrollbarWidth: "none" }}
        >
          {visibleTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                type="button"
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`
                  flex-shrink-0 px-3 sm:px-4 py-3.5 text-xs sm:text-sm font-medium border-b-2 transition-all duration-200 whitespace-nowrap
                  ${
                    isActive
                      ? `tab-active-${tab.id} border-b-2`
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-white/20"
                  }
                `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
