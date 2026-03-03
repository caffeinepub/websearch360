import React from 'react';
import { Radio } from 'lucide-react';

interface NewsTickerProps {
  headlines: string[];
}

export default function NewsTicker({ headlines }: NewsTickerProps) {
  const doubled = [...headlines, ...headlines];

  return (
    <div className="w-full bg-red-600/90 backdrop-blur-sm border-b border-red-500/50 overflow-hidden z-40 relative">
      <div className="flex items-center h-9">
        {/* Label */}
        <div className="flex-shrink-0 flex items-center gap-1.5 px-3 bg-red-700 h-full border-r border-red-500/50">
          <Radio className="w-3.5 h-3.5 text-white animate-pulse" />
          <span className="text-white text-xs font-bold tracking-widest uppercase whitespace-nowrap">Breaking</span>
        </div>

        {/* Scrolling content */}
        <div className="flex-1 overflow-hidden relative">
          <div className="ticker-track">
            {doubled.map((headline, i) => (
              <span key={i} className="inline-flex items-center text-white text-xs font-medium whitespace-nowrap px-6">
                <span className="mr-6 text-red-300">◆</span>
                {headline}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
