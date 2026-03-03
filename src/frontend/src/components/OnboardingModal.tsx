import { Bell, Globe, Mail, User, X } from "lucide-react";
import type React from "react";
import { useState } from "react";

interface OnboardingModalProps {
  onComplete: () => void;
}

export default function OnboardingModal({ onComplete }: OnboardingModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailDelivery, setEmailDelivery] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    localStorage.setItem("userName", name.trim());
    localStorage.setItem("userEmail", email.trim());
    localStorage.setItem("emailDeliveryMode", String(emailDelivery));
    localStorage.setItem("hasCompletedOnboarding", "true");
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="modal-appear relative w-full max-w-md mx-4">
        {/* Glow effect */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 blur-xl" />

        <div className="relative glass-strong rounded-2xl border border-white/10 shadow-glass-lg overflow-hidden">
          {/* Header gradient */}
          <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400" />

          <div className="p-8">
            {/* Logo */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center">
                  <img
                    src="/assets/generated/globe-radar-icon.dim_128x128.png"
                    alt="WebSearch360"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cyan-400 animate-pulse" />
              </div>
            </div>

            <h1 className="font-display text-2xl font-bold text-center text-foreground mb-1">
              Welcome to <span className="neon-text">WebSearch360</span>
            </h1>
            <p className="text-center text-muted-foreground text-sm mb-6">
              Your premium global news intelligence platform
            </p>

            {/* Alert info box */}
            <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex gap-3">
              <Bell className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-200/80">
                We'll notify you by email only when a{" "}
                <strong className="text-amber-300">
                  MAJOR disaster or catastrophic event
                </strong>{" "}
                occurs worldwide — earthquakes, tsunamis, nuclear events, or
                mass casualty incidents.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="onboarding-name"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    id="onboarding-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="onboarding-email"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    id="onboarding-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Email Delivery Mode */}
              <label className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/8 transition-colors">
                <div className="relative mt-0.5">
                  <input
                    type="checkbox"
                    checked={emailDelivery}
                    onChange={(e) => setEmailDelivery(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${emailDelivery ? "bg-cyan-500 border-cyan-500" : "border-white/30 bg-transparent"}`}
                  >
                    {emailDelivery && (
                      <svg
                        className="w-3 h-3 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Enable Email Delivery Mode
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Receive instant email alerts for disaster-level events
                  </p>
                </div>
              </label>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-sm hover:from-cyan-400 hover:to-blue-500 transition-all shadow-neon-sm hover:shadow-neon-md active:scale-[0.98]"
              >
                Enter WebSearch360 →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
