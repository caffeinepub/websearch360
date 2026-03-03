import type { Article } from "../types/article";

export function filterArticles(articles: Article[], query: string): Article[] {
  if (!query.trim()) return articles;
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  return articles.filter((article) => {
    const text =
      `${article.headline} ${article.summary} ${article.source} ${article.category}`.toLowerCase();
    return terms.every((term) => text.includes(term));
  });
}

export function highlightText(text: string, query: string): string {
  if (!query.trim()) return text;
  const terms = query.split(/\s+/).filter(Boolean);
  let result = text;
  for (const term of terms) {
    const regex = new RegExp(
      `(${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi",
    );
    result = result.replace(regex, '<mark class="search-highlight">$1</mark>');
  }
  return result;
}
