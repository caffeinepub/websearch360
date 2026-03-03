import React from 'react';
import { ExternalLink, Clock, AlertTriangle, Zap } from 'lucide-react';
import { Article } from '../types/article';

interface NewsCardProps {
  article: Article;
  searchQuery?: string;
  showImages?: boolean;
  compact?: boolean;
  fontSize?: 'small' | 'medium' | 'large';
}

const CATEGORY_LABELS: Record<string, string> = {
  politics: 'Politics',
  national: 'National',
  international: 'International',
  sports: 'Sports',
  war: 'War',
  business: 'Business',
  technology: 'Technology',
  science: 'Science',
  health: 'Health',
  entertainment: 'Entertainment',
  weather: 'Weather',
};

function formatRelativeTime(isoString: string): string {
  const diff = Date.now() - new Date(isoString).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

function HighlightedText({ text, query }: { text: string; query?: string }) {
  if (!query?.trim()) return <>{text}</>;
  const terms = query.split(/\s+/).filter(Boolean);
  const regex = new RegExp(`(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="search-highlight">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function NewsCard({ article, searchQuery, showImages = true, compact = false, fontSize = 'medium' }: NewsCardProps) {
  const fontSizeClass = fontSize === 'small' ? 'text-xs' : fontSize === 'large' ? 'text-base' : 'text-sm';
  const headlineSizeClass = fontSize === 'small' ? 'text-sm' : fontSize === 'large' ? 'text-xl' : 'text-base';

  return (
    <article className={`news-card card-hover glass rounded-xl border border-white/8 overflow-hidden flex flex-col group ${compact ? 'p-3' : 'p-0'}`}>
      {/* Thumbnail */}
      {showImages && !compact && (
        <div className="news-card-image relative w-full aspect-video overflow-hidden bg-gradient-to-br from-white/5 to-white/2">
          <img
            src={article.imageUrl || '/assets/generated/news-thumbnail-placeholder.dim_400x225.png'}
            alt={article.headline}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/generated/news-thumbnail-placeholder.dim_400x225.png';
            }}
          />
          {/* Category badge overlay */}
          <div className="absolute top-2 left-2">
            <span className={`badge-${article.category} inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold border`}>
              {CATEGORY_LABELS[article.category]}
            </span>
          </div>
          {/* Breaking/Disaster badge */}
          {(article.severity === 'critical' || article.severity === 'breaking') && (
            <div className="absolute top-2 right-2">
              {article.severity === 'critical' ? (
                <span className="disaster-pulse inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-bold bg-red-600 text-white border border-red-400">
                  <AlertTriangle className="w-3 h-3" />
                  DISASTER
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-bold bg-orange-500/90 text-white border border-orange-400 animate-pulse">
                  <Zap className="w-3 h-3" />
                  BREAKING
                </span>
              )}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className={`flex flex-col flex-1 ${compact ? '' : 'p-4'}`}>
        {/* Top row: category + badges (when no image) */}
        {(compact || !showImages) && (
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={`badge-${article.category} inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold border`}>
              {CATEGORY_LABELS[article.category]}
            </span>
            {article.severity === 'critical' && (
              <span className="disaster-pulse inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-bold bg-red-600 text-white border border-red-400">
                <AlertTriangle className="w-3 h-3" />
                DISASTER
              </span>
            )}
            {article.severity === 'breaking' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-bold bg-orange-500/90 text-white border border-orange-400 animate-pulse">
                <Zap className="w-3 h-3" />
                BREAKING
              </span>
            )}
          </div>
        )}

        {/* Headline */}
        <h3 className={`font-display font-bold text-foreground leading-snug mb-2 ${headlineSizeClass} group-hover:text-cyan-400 transition-colors`}>
          <HighlightedText text={article.headline} query={searchQuery} />
        </h3>

        {/* Summary */}
        {!compact && (
          <p className={`news-card-summary text-muted-foreground leading-relaxed mb-3 flex-1 line-clamp-3 ${fontSizeClass}`}>
            <HighlightedText text={article.summary} query={searchQuery} />
          </p>
        )}

        {/* Footer */}
        <div className={`flex items-center justify-between gap-2 mt-auto ${compact ? 'mt-2' : ''}`}>
          <div className="flex items-center gap-2 min-w-0">
            <span className={`font-semibold text-foreground truncate ${fontSizeClass}`}>{article.source}</span>
            <span className="text-white/20">·</span>
            <div className="flex items-center gap-1 text-muted-foreground flex-shrink-0">
              <Clock className="w-3 h-3" />
              <span className={fontSizeClass}>{formatRelativeTime(article.timestamp)}</span>
            </div>
          </div>
          <a
            href={article.externalUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { if (!article.externalUrl) e.preventDefault(); }}
            className="flex-shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all text-xs font-medium"
          >
            Read More
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </article>
  );
}
