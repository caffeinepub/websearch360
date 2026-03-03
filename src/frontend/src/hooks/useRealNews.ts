import { useCallback, useEffect, useRef, useState } from "react";
import { MOCK_ARTICLES } from "../data/mockArticles";
import type { Article, Category, Severity } from "../types/article";

interface Rss2JsonItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  author?: string;
  thumbnail?: string;
  enclosure?: {
    link?: string;
    type?: string;
  };
}

interface Rss2JsonResponse {
  status: string;
  feed?: {
    title?: string;
    link?: string;
  };
  items?: Rss2JsonItem[];
}

interface FeedConfig {
  url: string;
  category: Category;
  sourceName: string;
  filterKeywords?: string[];
}

// Trusted, real news sources only — no AI-generated content
const FEEDS: FeedConfig[] = [
  // ---- POLITICS ----
  {
    url: "https://feeds.bbci.co.uk/news/politics/rss.xml",
    category: "politics",
    sourceName: "BBC News",
  },
  {
    url: "https://rss.nytimes.com/services/xml/rss/nyt/Politics.xml",
    category: "politics",
    sourceName: "New York Times",
  },
  {
    url: "https://thehill.com/rss/syndicator/19110/feed/",
    category: "politics",
    sourceName: "The Hill",
  },

  // ---- NATIONAL ----
  {
    url: "https://feeds.npr.org/1001/rss.xml",
    category: "national",
    sourceName: "NPR",
  },
  {
    url: "https://feeds.nbcnews.com/nbcnews/public/news",
    category: "national",
    sourceName: "NBC News",
  },
  {
    url: "https://abcnews.go.com/abcnews/usheadlines",
    category: "national",
    sourceName: "ABC News",
  },

  // ---- INTERNATIONAL ----
  {
    url: "https://feeds.bbci.co.uk/news/world/rss.xml",
    category: "international",
    sourceName: "BBC World",
  },
  {
    url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
    category: "international",
    sourceName: "New York Times",
  },
  {
    url: "https://www.aljazeera.com/xml/rss/all.xml",
    category: "international",
    sourceName: "Al Jazeera",
  },
  {
    url: "https://feeds.reuters.com/reuters/topNews",
    category: "international",
    sourceName: "Reuters",
  },
  // Manorama Online (English) — trusted Kerala/India news
  {
    url: "https://www.onmanorama.com/news/india.rss",
    category: "national",
    sourceName: "Manorama Online",
  },
  {
    url: "https://www.onmanorama.com/news/world.rss",
    category: "international",
    sourceName: "Manorama Online",
  },

  // ---- SPORTS ----
  {
    url: "https://feeds.bbci.co.uk/sport/rss.xml",
    category: "sports",
    sourceName: "BBC Sport",
  },
  {
    url: "https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml",
    category: "sports",
    sourceName: "New York Times",
  },
  {
    url: "https://www.espn.com/espn/rss/news",
    category: "sports",
    sourceName: "ESPN",
  },
  {
    url: "https://www.onmanorama.com/sports.rss",
    category: "sports",
    sourceName: "Manorama Online",
  },

  // ---- WAR / CONFLICT ----
  {
    url: "https://feeds.bbci.co.uk/news/world/rss.xml",
    category: "war",
    sourceName: "BBC World",
    filterKeywords: [
      "war",
      "conflict",
      "military",
      "attack",
      "strike",
      "troops",
      "battle",
      "ceasefire",
      "missile",
      "invasion",
      "bombing",
      "airstrike",
      "combat",
    ],
  },
  {
    url: "https://www.aljazeera.com/xml/rss/all.xml",
    category: "war",
    sourceName: "Al Jazeera",
    filterKeywords: [
      "war",
      "conflict",
      "military",
      "attack",
      "strike",
      "troops",
      "battle",
      "ceasefire",
      "missile",
      "killed",
      "bombing",
    ],
  },
  {
    url: "https://feeds.reuters.com/reuters/topNews",
    category: "war",
    sourceName: "Reuters",
    filterKeywords: [
      "war",
      "conflict",
      "military",
      "troops",
      "battle",
      "ceasefire",
      "missile",
      "killed",
      "bombing",
      "airstrike",
    ],
  },

  // ---- BUSINESS ----
  {
    url: "https://feeds.bbci.co.uk/news/business/rss.xml",
    category: "business",
    sourceName: "BBC Business",
  },
  {
    url: "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
    category: "business",
    sourceName: "New York Times",
  },
  {
    url: "https://feeds.reuters.com/reuters/businessNews",
    category: "business",
    sourceName: "Reuters",
  },
  {
    url: "https://www.onmanorama.com/business.rss",
    category: "business",
    sourceName: "Manorama Online",
  },

  // ---- TECHNOLOGY ----
  {
    url: "https://feeds.bbci.co.uk/news/technology/rss.xml",
    category: "technology",
    sourceName: "BBC Tech",
  },
  {
    url: "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
    category: "technology",
    sourceName: "New York Times",
  },
  {
    url: "https://feeds.arstechnica.com/arstechnica/index",
    category: "technology",
    sourceName: "Ars Technica",
  },
  {
    url: "https://www.theverge.com/rss/index.xml",
    category: "technology",
    sourceName: "The Verge",
  },

  // ---- SCIENCE ----
  {
    url: "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
    category: "science",
    sourceName: "BBC Science",
  },
  {
    url: "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
    category: "science",
    sourceName: "New York Times",
  },
  {
    url: "https://feeds.reuters.com/reuters/scienceNews",
    category: "science",
    sourceName: "Reuters",
  },

  // ---- HEALTH ----
  {
    url: "https://feeds.bbci.co.uk/news/health/rss.xml",
    category: "health",
    sourceName: "BBC Health",
  },
  {
    url: "https://rss.nytimes.com/services/xml/rss/nyt/Health.xml",
    category: "health",
    sourceName: "New York Times",
  },
  {
    url: "https://feeds.reuters.com/reuters/healthNews",
    category: "health",
    sourceName: "Reuters",
  },
  {
    url: "https://www.onmanorama.com/health.rss",
    category: "health",
    sourceName: "Manorama Online",
  },

  // ---- ENTERTAINMENT ----
  {
    url: "https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml",
    category: "entertainment",
    sourceName: "BBC Entertainment",
  },
  {
    url: "https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml",
    category: "entertainment",
    sourceName: "New York Times",
  },
  {
    url: "https://www.onmanorama.com/entertainment.rss",
    category: "entertainment",
    sourceName: "Manorama Online",
  },

  // ---- WEATHER ----
  {
    url: "https://feeds.npr.org/1139/rss.xml",
    category: "weather",
    sourceName: "NPR",
  },
  {
    url: "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
    category: "weather",
    sourceName: "BBC",
    filterKeywords: [
      "weather",
      "storm",
      "flood",
      "hurricane",
      "tornado",
      "rainfall",
      "drought",
      "heatwave",
      "cyclone",
      "typhoon",
      "snow",
      "blizzard",
      "climate",
    ],
  },
];

// Multiple proxy strategies — tried in order until one succeeds
const RSS_PROXIES = [
  // Strategy 1: rss2json.com — parses RSS to JSON natively
  async (feedUrl: string): Promise<Rss2JsonItem[]> => {
    const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}&count=12`;
    const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) throw new Error(`rss2json HTTP ${res.status}`);
    const data: Rss2JsonResponse = await res.json();
    if (data.status !== "ok" || !data.items)
      throw new Error("rss2json bad status");
    return data.items;
  },

  // Strategy 2: allorigins.win — CORS proxy, returns raw XML we parse manually
  async (feedUrl: string): Promise<Rss2JsonItem[]> => {
    const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) throw new Error(`allorigins HTTP ${res.status}`);
    const xmlText = await res.text();
    return parseRssXml(xmlText);
  },

  // Strategy 3: corsproxy.io
  async (feedUrl: string): Promise<Rss2JsonItem[]> => {
    const url = `https://corsproxy.io/?${encodeURIComponent(feedUrl)}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) throw new Error(`corsproxy HTTP ${res.status}`);
    const xmlText = await res.text();
    return parseRssXml(xmlText);
  },
];

/** Minimal RSS/Atom XML parser that extracts items without a DOM parser dependency */
function parseRssXml(xml: string): Rss2JsonItem[] {
  const items: Rss2JsonItem[] = [];
  // Match <item>...</item> or <entry>...</entry>
  const itemRegex = /<(?:item|entry)[\s>]([\s\S]*?)<\/(?:item|entry)>/gi;
  let match: RegExpExecArray | null;
  // biome-ignore lint/suspicious/noAssignInExpressions: regex loop pattern
  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];
    const title = extractTag(block, "title");
    const link =
      extractTag(block, "link") || extractAttr(block, "link", "href");
    const description =
      extractTag(block, "description") ||
      extractTag(block, "summary") ||
      extractTag(block, "content:encoded");
    const pubDate =
      extractTag(block, "pubDate") ||
      extractTag(block, "published") ||
      extractTag(block, "updated") ||
      extractTag(block, "dc:date");
    const thumbnail =
      extractAttr(block, "media:thumbnail", "url") ||
      extractAttr(block, "media:content", "url");
    if (title || link) {
      items.push({ title, description, link, pubDate, thumbnail });
    }
  }
  return items;
}

function extractTag(xml: string, tag: string): string {
  const escapedTag = tag.replace(":", "\\:");
  const regex = new RegExp(
    `<${escapedTag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${escapedTag}>`,
    "i",
  );
  const m = regex.exec(xml);
  return m ? m[1].trim() : "";
}

function extractAttr(xml: string, tag: string, attr: string): string {
  const escapedTag = tag.replace(":", "\\:");
  const regex = new RegExp(`<${escapedTag}[^>]*\\s${attr}="([^"]*)"`, "i");
  const m = regex.exec(xml);
  return m ? m[1].trim() : "";
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#8216;/g, "\u2018")
    .replace(/&#8217;/g, "\u2019")
    .replace(/&#8220;/g, "\u201C")
    .replace(/&#8221;/g, "\u201D")
    .replace(/&#8230;/g, "\u2026")
    .replace(/&nbsp;/g, " ");
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function determineSeverity(title: string): Severity {
  const t = title.toLowerCase();
  const criticalWords = [
    "disaster",
    "catastrophe",
    "critical",
    "emergency",
    "explosion",
    "earthquake",
    "tsunami",
    "hurricane",
    "tornado",
    "flood",
  ];
  const breakingWords = [
    "breaking",
    "urgent",
    "alert",
    "warning",
    "crisis",
    "killed",
    "dead",
    "shooting",
    "attack",
    "bomb",
    "crash",
    "collapse",
  ];
  if (criticalWords.some((w) => t.includes(w))) return "critical";
  if (breakingWords.some((w) => t.includes(w))) return "breaking";
  return "normal";
}

function isValidImageUrl(url: string | undefined | null): boolean {
  if (!url) return false;
  return (
    (url.startsWith("http://") || url.startsWith("https://")) &&
    /\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(url)
  );
}

async function fetchFeed(
  feedConfig: FeedConfig,
  feedIndex: number,
): Promise<Article[]> {
  let items: Rss2JsonItem[] | null = null;

  // Try each proxy in order until one works
  for (const proxy of RSS_PROXIES) {
    try {
      items = await proxy(feedConfig.url);
      if (items && items.length > 0) break;
    } catch {
      // try next proxy
    }
  }

  if (!items || items.length === 0) return [];

  const filtered = feedConfig.filterKeywords
    ? items.filter((item) => {
        const text = `${item.title} ${item.description}`.toLowerCase();
        return feedConfig.filterKeywords!.some((kw) => text.includes(kw));
      })
    : items;

  return filtered.map((item, itemIndex): Article => {
    const headline = decodeHtmlEntities(item.title || "").trim();
    const rawSummary = stripHtml(decodeHtmlEntities(item.description || ""));
    const summary =
      rawSummary.length > 300 ? `${rawSummary.slice(0, 297)}...` : rawSummary;

    const source = feedConfig.sourceName;

    const timestamp = item.pubDate
      ? new Date(item.pubDate).toISOString()
      : new Date().toISOString();

    const enclosureImg =
      item.enclosure?.type?.startsWith("image") &&
      isValidImageUrl(item.enclosure.link)
        ? item.enclosure.link
        : undefined;
    const thumbImg = isValidImageUrl(item.thumbnail)
      ? item.thumbnail
      : undefined;
    const imageUrl = enclosureImg || thumbImg || undefined;

    const severity = determineSeverity(headline);

    return {
      id: `feed-${feedIndex}-item-${itemIndex}-${Date.now()}`,
      headline,
      summary,
      source,
      timestamp,
      imageUrl,
      externalUrl: item.link || undefined,
      category: feedConfig.category,
      severity,
      breaking: severity !== "normal",
    };
  });
}

interface UseRealNewsOptions {
  refreshInterval?: number; // minutes
}

interface UseRealNewsResult {
  articles: Article[];
  isLoading: boolean;
  error: string | null;
  isFallback: boolean;
  refetch: () => void;
}

export function useRealNews({
  refreshInterval = 60,
}: UseRealNewsOptions = {}): UseRealNewsResult {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFallback, setIsFallback] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchAll = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const results = await Promise.allSettled(
        FEEDS.map((feed, index) => fetchFeed(feed, index)),
      );

      const allArticles: Article[] = [];
      let successCount = 0;

      for (const result of results) {
        if (result.status === "fulfilled" && result.value.length > 0) {
          allArticles.push(...result.value);
          successCount++;
        }
      }

      if (successCount === 0 || allArticles.length === 0) {
        // All proxies failed — fall back to sample articles so the page isn't empty
        setIsFallback(true);
        setError(null);
        setArticles(MOCK_ARTICLES);
      } else {
        setIsFallback(false);
        // Deduplicate by first 60 chars of headline
        const seen = new Set<string>();
        const unique = allArticles.filter((a) => {
          const key = a.headline.toLowerCase().slice(0, 60);
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });

        // Sort newest first
        unique.sort(
          (a, b) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
        );

        setArticles(unique);
      }
    } catch (_err) {
      // Hard error — still show sample articles
      setIsFallback(true);
      setArticles(MOCK_ARTICLES);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  // Auto-refresh interval
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (refreshInterval > 0) {
      timerRef.current = setInterval(fetchAll, refreshInterval * 60 * 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [fetchAll, refreshInterval]);

  return { articles, isLoading, error, isFallback, refetch: fetchAll };
}
