# WebSearch360

## Current State
News aggregator pulling live RSS feeds via rss2json.com free proxy. When the proxy rate-limits or all feeds fail, the app shows "No articles found" with no fallback content.

## Requested Changes (Diff)

### Add
- Multiple CORS proxy fallbacks (rss2json.com + allorigins.win + corsproxy.io) so if one fails, try the next
- Fallback to mock/sample articles when all live feeds fail, so users always see content
- "Live" vs "Sample" indicator so users know when real news loaded vs fallback

### Modify
- `useRealNews.ts` hook: try multiple proxies per feed, on total failure show mock articles with a warning instead of empty state
- App.tsx: show a subtle banner if running on fallback/sample data

### Remove
- Nothing removed

## Implementation Plan
1. Update `useRealNews.ts` to use multiple proxy strategies per feed (rss2json.com first, then allorigins XML parse, then corsproxy.io)
2. When successCount === 0 after all attempts, fall back to MOCK_ARTICLES from mockArticles.ts
3. Add `isFallback` boolean to the hook return value
4. In App.tsx, show a subtle info banner when `isFallback` is true
