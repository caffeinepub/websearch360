# Specification

## Summary
**Goal:** Build a full-featured, client-side news aggregator called WebSearch360 with a premium glassmorphism dark UI, category tabs, mock article data, email alert simulation, and user settings — all persisted in localStorage.

**Planned changes:**
- First-visit onboarding modal collecting Name, Email, and Email Delivery Mode checkbox; stored in localStorage and skipped on return visits
- App header with "WebSearch360" brand name, globe/radar icon, dark mode toggle, and settings gear icon
- Top navigation tabs: ALL | Politics | National | International | Sports | War | Business | Technology | Science | Health | Entertainment | Weather — filtering news cards by category
- Search bar on ALL tab with real-time keyword filtering and matched keyword highlighting in headlines and summaries
- Horizontally scrolling breaking news ticker at the top with 10+ rotating headlines in a continuous loop
- News card components with color-coded category badge, bold headline, 2–3 sentence summary, source name, timestamp, "Read More" button, thumbnail image placeholder, and red pulsing BREAKING/DISASTER badge for critical articles
- At least 88 realistic mock articles (8–10 per category, 2025–2026 headlines, varied sources, timestamps within 24 hours, 2–3 tagged as severity: critical / DISASTER)
- Live badge showing last updated time and countdown timer "Next update in: XX:XX" with auto-refresh every 60 minutes (default) and a loading spinner during refresh
- Slide-in settings panel from the right with: dark mode toggle, email delivery mode toggle, notification sound toggle, auto-refresh interval selector (30 min / 60 min / 2 hours), font size selector (Small / Medium / Large), compact view toggle, show images toggle, per-category visibility checkboxes, editable name and email fields, and a Save Settings button — all persisted to localStorage
- Email alert simulation: when Email Delivery Mode is on and a DISASTER-level article is detected, show a dismissible in-app notification banner "Email alert sent to [email] about: [headline]"
- Premium dark-mode-first glassmorphism UI with neon cyan/blue accents, per-category color coding (Politics: Purple, Sports: Green, War: Red, Technology: Cyan, Business: Gold, Health: Pink, Science: Orange, Entertainment: Magenta, National: Blue, International: Teal, Weather: Sky Blue), smooth tab-switch and card-hover animations, and full responsiveness for mobile and desktop

**User-visible outcome:** Users can browse, search, and filter realistic mock news articles across 12 categories in a sleek dark glassmorphism interface, configure display and notification preferences, and receive simulated email alert banners for critical disaster-level events.
