export type Category =
  | "politics"
  | "national"
  | "international"
  | "sports"
  | "war"
  | "business"
  | "technology"
  | "science"
  | "health"
  | "entertainment"
  | "weather";

export type Severity = "normal" | "breaking" | "critical";

export interface Article {
  id: string;
  category: Category;
  headline: string;
  summary: string;
  source: string;
  timestamp: string; // ISO string
  severity: Severity;
  breaking: boolean;
  imageUrl?: string;
  externalUrl?: string;
}
