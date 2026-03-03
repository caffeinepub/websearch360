import { AlertTriangle, Mail, X } from "lucide-react";
import React, { useState, useEffect } from "react";

interface AlertItem {
  id: string;
  email: string;
  headline: string;
}

interface EmailAlertBannerProps {
  alerts: AlertItem[];
  onDismiss: (id: string) => void;
}

export default function EmailAlertBanner({
  alerts,
  onDismiss,
}: EmailAlertBannerProps) {
  if (alerts.length === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col gap-2 p-3 pointer-events-none">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className="alert-slide-down pointer-events-auto mx-auto w-full max-w-2xl"
        >
          <div className="flex items-start gap-3 p-4 rounded-xl bg-red-950/95 border border-red-500/50 shadow-glass-lg backdrop-blur-sm">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-red-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Mail className="w-3.5 h-3.5 text-red-400" />
                <span className="text-red-300 text-xs font-semibold uppercase tracking-wide">
                  Email Alert Sent
                </span>
              </div>
              <p className="text-white text-sm font-medium leading-snug">
                Alert sent to{" "}
                <span className="text-red-300 font-semibold">
                  {alert.email}
                </span>
              </p>
              <p className="text-red-200/70 text-xs mt-0.5 line-clamp-2">
                Re: {alert.headline}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onDismiss(alert.id)}
              className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-red-400 hover:text-white hover:bg-red-500/20 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
