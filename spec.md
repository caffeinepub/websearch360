# WebSearch360

## Current State

WebSearch360 is a news aggregator frontend app. Currently:
- All articles are hardcoded fake/mock data in `data/mockArticles.ts` — no real news
- `externalUrl` is undefined on all mock articles, making "Read More" buttons non-functional (they link to `"#"`)
- Images are placeholder-generated assets, not real news thumbnails
- An email alert feature exists in the UI but email is a disabled feature on this account
- The `handleRefresh` function just re-renders the same mock data

## Requested Changes (Diff)

### Add
- A real news fetching system using free public RSS-to-JSON APIs (e.g. `rss2json.com` or `allorigins` proxy to parse major RSS feeds from BBC, Reuters, AP, CNN, etc.)
- Real article images pulled from the RSS feed's `enclosure` or `thumbnail` fields
- Working `externalUrl` on every article pointing to the real source article
- A `useRealNews` hook that fetches from multiple RSS feeds, parses them into the `Article` type, and supports category mapping
- Auto-refresh that fetches fresh data instead of reloading mocks

### Modify
- `App.tsx`: Replace `MOCK_ARTICLES` import and state initialization with `useRealNews` hook; refresh calls real fetch
- `data/mockArticles.ts`: Keep only `BREAKING_TICKER_HEADLINES` (used by ticker), remove article mocks or replace with empty fallback
- Remove email alert banner and email-related UI (EmailAlertBanner component usage, alert state, email delivery logic) since email is disabled
- `NewsCard.tsx`: Ensure "Read More" always opens in new tab and the link is always valid (use `article.externalUrl` directly, never fall back to `"#"`)

### Remove
- Email alert banner UI and all associated state (`alerts`, `shownAlertIds`, email delivery logic) from `App.tsx`
- `EmailAlertBanner` component import/usage

## Implementation Plan

1. Create `src/hooks/useRealNews.ts` — fetches multiple RSS feeds via `https://api.rss2json.com/v1/api.json?rss_url=<url>` (free tier, no key needed), maps feed items to `Article` type including real `imageUrl` and `externalUrl`, covers all categories (politics, national, international, sports, war, business, technology, science, health, entertainment, weather)
2. Update `App.tsx` to use `useRealNews` hook, remove mock article imports, remove email alert logic and `EmailAlertBanner` usage
3. Update `data/mockArticles.ts` to only export `BREAKING_TICKER_HEADLINES` 
4. Update `NewsCard.tsx` to never use `"#"` as href — if no URL, hide the Read More button entirely
5. Validate and build
