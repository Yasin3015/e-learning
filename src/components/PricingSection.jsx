import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import Popup from "./Popup";
const plans = [
  {
    key: "basic",
    name: "Basic",
    description: "Perfect for individuals exploring online learning.",
    originalPrice: 12,
    price: 9,
    savePercent: 25,
    accent: ["#06b6d4", "#06b6d4"],
    features: [
      "Access up to 10 courses monthly",
      "Community support and forums",
      "Standard learning resources & quizzes",
      "Email support within 72 hours",
    ],
    footerNote: "Cancel anytime, no hidden fees.",
  },
  {
    key: "pro",
    name: "Pro",
    description: "Best choice for passionate learners & professionals.",
    originalPrice: 79,
    price: 29,
    savePercent: 63,
    accent: ["#8b5cf6", "#06b6d4"],
    highlighted: true,
    features: [
      "Unlimited courses and content",
      "Direct instructor support & Q&A",
      "Exclusive webinars and workshops",
      "Advanced progress tracking & certificates",
    ],
    footerNote: "Most popular plan among learners.",
  },
  {
    key: "enterprise",
    name: "Enterprise",
    description: "Designed for teams, companies, and organizations.",
    originalPrice: 99,
    price: 49,
    savePercent: 51,
    accent: ["#fb7185", "#fb923c"],
    features: [
      "Team accounts and bulk licensing",
      "Dedicated account manager",
      "Custom dashboards & analytics",
      "Priority 24/7 support",
    ],
    footerNote: "Custom contracts available on request.",
  },
];

export default function PricingSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section
      id="pricing"
      className="py-20 px-6 lg:px-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-3"
          data-aos="fade-up"
        >
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </span>
        </h2>
        <p
          className="text-gray-400 max-w-3xl mx-auto mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Select a plan tailored to your needs — whether you want to try a few
          courses, learn in-depth, or train your whole team. Prices are monthly,
          with discounts shown when available.
        </p>

        <div className="pricing-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const accentStart = plan.accent[0];
            const accentEnd = plan.accent[1] || plan.accent[0];
            return (
              <div
                key={plan.key}
                className={`plan-card relative rounded-2xl p-6 sm:p-8 shadow-lg transition-transform duration-500 hover:scale-[1.03] ${
                  plan.highlighted
                    ? "transform scale-[1.02] shadow-2xl"
                    : "bg-transparent"
                }`}
                style={{
                  ["--accent"]: accentStart,
                  ["--accent-2"]: accentEnd,
                }}
                data-aos="zoom-in"
                data-aos-delay={index * 200} // يدي كل كارد delay مختلف
              >
                {plan.savePercent && (
                  <div
                    className="plan-label"
                    style={{
                      background: `linear-gradient(90deg, ${accentStart}, ${accentEnd})`,
                    }}
                  >
                    Save {plan.savePercent}%
                  </div>
                )}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-col items-start mb-4">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="mt-1 old-price text-gray-500 line-through">{`$${plan.originalPrice}/mo`}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        ${plan.price}
                      </div>
                      <div className="text-sm text-gray-300">/ month</div>
                    </div>
                  </div>

                  <ul className="space-y-4 flex-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start">
                        <span
                          className="feature-check flex items-center justify-center w-6 h-6 rounded-full mr-3"
                          style={{
                            background: `linear-gradient(180deg, ${accentStart} 0%, ${accentEnd} 100%)`,
                          }}
                        >
                          <Check size={16} color="white" strokeWidth={3} />
                        </span>
                        <p className="text-gray-200 leading-relaxed">{f}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <button
                      onClick={() => setIsPopupOpen(true)}
                      className={`plan-cta w-full py-3 rounded-lg font-semibold transition-transform hover:scale-[1.02] ${
                        plan.highlighted
                          ? "bg-white text-purple-700"
                          : "bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
                      }`}
                      aria-label={`Choose ${plan.name} plan`}
                    >
                      Choose Plan
                    </button>
                  </div>

                  <p className="text-xs text-gray-400 mt-4">{plan.footerNote}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}
