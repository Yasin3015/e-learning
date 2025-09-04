import React from "react";
import { Check } from "lucide-react";

/**
 * PricingSection
 *
 * - Uses CSS variables (--accent, --accent-2) on each card to drive the label color
 *   and the animated border ring colors.
 * - Each plan has: label with discount, old price (strikethrough), current price (bold),
 *   an array of features (rendered with icon), and CTA button.
 */

const plans = [
  {
    key: "basic",
    name: "Basic",
    originalPrice: 12, // original monthly price (for display)
    price: 9, // current monthly price
    savePercent: 25,
    accent: ["#06b6d4", "#06b6d4"], // teal-ish (start, end)
    features: [
      "Access up to 10 courses monthly",
      "Community support and forums",
      "Standard learning resources & quizzes",
      "Email support within 72 hours",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    originalPrice: 79,
    price: 29,
    savePercent: 63,
    accent: ["#8b5cf6", "#06b6d4"], // purple -> cyan
    highlighted: true,
    features: [
      "Unlimited courses and content",
      "Direct instructor support & Q&A",
      "Exclusive webinars and workshops",
      "Advanced progress tracking & certificates",
    ],
  },
  {
    key: "enterprise",
    name: "Enterprise",
    originalPrice: 99,
    price: 49,
    savePercent: 51,
    accent: ["#fb7185", "#fb923c"], // pink -> orange
    features: [
      "Team accounts and bulk licensing",
      "Dedicated account manager",
      "Custom dashboards & analytics",
      "Priority 24/7 support",
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-6 lg:px-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </span>
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-10">
          Select a plan tailored to your needs — whether you want to try a few
          courses, learn in-depth, or train your whole team. Prices are monthly,
          with discounts shown when available.
        </p>

        {/* Plans Grid */}
        <div className="pricing-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => {
            const accentStart = plan.accent[0];
            const accentEnd = plan.accent[1] || plan.accent[0];
            return (
              <div
                key={plan.key}
                className={`plan-card relative rounded-2xl p-6 sm:p-8 shadow-lg ${
                  plan.highlighted
                    ? "transform scale-[1.02] shadow-2xl"
                    : "bg-transparent"
                }`}
                // set CSS variables for colors used by the CSS ring and label
                style={{
                  ["--accent"]: accentStart,
                  ["--accent-2"]: accentEnd,
                }}
              >
                {/* Badge (Save %). If savePercent is present, show label */}
                {plan.savePercent ? (
                  <div
                    className="plan-label"
                    style={{
                      background: `linear-gradient(90deg, ${accentStart}, ${accentEnd})`,
                    }}
                  >
                    Save {plan.savePercent}%
                  </div>
                ) : null}

                {/* Card content: put above pseudo-elements */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header row: name + price */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{plan.name}</h3>
                      <div className="mt-2 old-price">{`$${plan.originalPrice}/mo`}</div>
                    </div>

                    <div className="text-right">
                      <div className="current-price">{`$${plan.price}`}</div>
                      <div className="text-sm text-gray-300">/ month</div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-6 border-t border-white/6" />

                  {/* Features list */}
                  <ul className="space-y-4 flex-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start">
                        <span
                          className="feature-check"
                          style={{
                            background: `linear-gradient(180deg, ${accentStart} 0%, ${accentEnd} 100%)`,
                          }}
                        >
                          <Check size={16} color="white" strokeWidth={3} />
                        </span>
                        <p className="text-gray-200 leading-relaxed">
                          {f}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-6">
                    <button
                      className={`plan-cta w-full py-3 rounded-lg font-semibold ${
                        plan.highlighted
                          ? "bg-white text-purple-700"
                          : "bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
                      }`}
                      aria-label={`Choose ${plan.name} plan`}
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
