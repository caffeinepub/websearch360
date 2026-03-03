import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw } from 'lucide-react';

interface LiveBadgeProps {
  lastUpdated: Date;
  refreshInterval: number; // in minutes
  isRefreshing: boolean;
  onRefresh: () => void;
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function formatCountdown(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function LiveBadge({ lastUpdated, refreshInterval, isRefreshing, onRefresh }: LiveBadgeProps) {
  const totalSeconds = refreshInterval * 60;
  const [countdown, setCountdown] = useState(totalSeconds);

  const reset = useCallback(() => {
    setCountdown(totalSeconds);
  }, [totalSeconds]);

  useEffect(() => {
    reset();
  }, [lastUpdated, reset]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          onRefresh();
          return totalSeconds;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [onRefresh, totalSeconds]);

  return (
    <div className="flex flex-wrap items-center gap-3 text-xs">
      {/* Live badge */}
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/15 border border-green-500/30">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-green-400 font-semibold tracking-wide">LIVE</span>
      </div>

      {/* Last updated */}
      <span className="text-muted-foreground">
        Updated <span className="text-foreground font-medium">{formatTime(lastUpdated)}</span>
      </span>

      {/* Countdown */}
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <RefreshCw className={`w-3 h-3 ${isRefreshing ? 'spin-glow text-cyan-400' : ''}`} />
        {isRefreshing ? (
          <span className="text-cyan-400 font-medium">Refreshing...</span>
        ) : (
          <span>
            Next update in: <span className="text-foreground font-mono font-medium">{formatCountdown(countdown)}</span>
          </span>
        )}
      </div>

      {/* Manual refresh */}
      <button
        onClick={onRefresh}
        disabled={isRefreshing}
        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all disabled:opacity-50 text-xs"
      >
        Refresh now
      </button>
    </div>
  );
}
