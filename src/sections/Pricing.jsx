import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const plans = [
  {
    name: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for indie makers and small projects.",
    cta: "Get started free",
    ctaStyle: "border border-neutral-200 text-neutral-700 hover:bg-neutral-50",
    features: [
      "10,000 events / month",
      "7-day data retention",
      "1 project",
      "Plain-English queries",
      "Email support",
    ],
    missing: [
      "Automated reports",
      "Anomaly alerts",
      "Team seats",
      "Custom dashboards",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: "For growing teams that need more power and history.",
    cta: "Start 14-day trial",
    ctaStyle: "bg-brand-500 text-white hover:bg-brand-600",
    highlighted: true,
    badge: "Most popular",
    features: [
      "5M events / month",
      "12-month data retention",
      "Unlimited projects",
      "Plain-English queries",
      "Automated reports",
      "Anomaly alerts",
      "5 team seats",
      "Slack + email support",
    ],
    missing: ["Custom dashboards"],
  },
  {
    name: "Enterprise",
    monthlyPrice: 199,
    yearlyPrice: 159,
    description: "For orgs with custom compliance and scale needs.",
    cta: "Talk to sales",
    ctaStyle: "border border-neutral-200 text-neutral-700 hover:bg-neutral-50",
    features: [
      "Unlimited events",
      "Unlimited retention",
      "Unlimited projects",
      "Plain-English queries",
      "Automated reports",
      "Anomaly alerts",
      "Unlimited seats",
      "Custom dashboards",
      "SSO / SAML",
      "Dedicated support",
    ],
    missing: [],
  },
];

function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0 text-brand-500"
    >
      <circle cx="8" cy="8" r="7" fill="currentColor" fillOpacity="0.12" />
      <path
        d="M5 8l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Cross() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0 text-neutral-300"
    >
      <circle cx="8" cy="8" r="7" fill="currentColor" fillOpacity="0.08" />
      <path
        d="M5.5 10.5l5-5M10.5 10.5l-5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const [lifetime, setLifetime] = useState("");

  return (
    <section id="pricing" className="py-28 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center max-w-xl mx-auto mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium text-brand-600 uppercase tracking-widest"
          >
            Simple pricing
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-neutral-900"
          >
            Pay for what you use
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-4 text-neutral-500 text-lg"
          >
            No hidden fees. No per-seat surprises. Downgrade anytime.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-8 inline-flex items-center gap-3 bg-white border border-neutral-200 rounded-full px-2 py-1.5"
          >
            <button
              onClick={() => setYearly(false)}
              className={clsx(
                "text-sm px-4 py-1.5 rounded-full transition font-medium",
                !yearly ? "bg-brand-500 text-white" : "text-neutral-500",
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={clsx(
                "text-sm px-4 py-1.5 rounded-full transition font-medium flex items-center gap-2",
                yearly ? "bg-brand-500 text-white" : "text-neutral-500",
              )}
            >
              Yearly
              <span
                className={clsx(
                  "text-xs rounded-full px-2 py-0.5 font-medium transition",
                  yearly
                    ? "bg-white/20 text-white"
                    : "bg-green-100 text-green-700",
                )}
              >
                –20%
              </span>
            </button>
          </motion.div>          
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={clsx(
                "rounded-2xl p-7 flex flex-col gap-6 relative",
                plan.highlighted
                  ? "bg-brand-500 text-white ring-2 ring-brand-500 ring-offset-2 shadow-lg"
                  : "bg-white border border-neutral-200",
              )}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-neutral-900 text-white px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <div>
                <p
                  className={clsx(
                    "text-sm font-semibold",
                    plan.highlighted ? "text-brand-100" : "text-neutral-500",
                  )}
                >
                  {plan.name}
                </p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  {(plan.monthlyPrice > 0 || plan.yearlyPrice > 0) && (
                    <span
                      className={clsx(
                        "text-sm",
                        plan.highlighted
                          ? "text-brand-200"
                          : "text-neutral-400",
                      )}
                    >
                      / mo
                    </span>
                  )}
                </div>
                {yearly && plan.monthlyPrice > 0 && (
                  <p
                    className={clsx(
                      "text-xs mt-1",
                      plan.highlighted ? "text-brand-200" : "text-neutral-400",
                    )}
                  >
                    Billed annually (${plan.yearlyPrice * 12}/yr)
                  </p>
                )}
                <p
                  className={clsx(
                    "mt-3 text-sm leading-relaxed",
                    plan.highlighted ? "text-brand-100" : "text-neutral-500",
                  )}
                >
                  {plan.description}
                </p>
              </div>

              <a
                href="#pricing"
                className={clsx(
                  "text-center text-sm font-medium py-3 rounded-xl transition",
                  plan.ctaStyle,
                  plan.highlighted &&
                    "bg-ring-brand-500 ring text-brand-600 hover:bg-brand-50 border-4",
                )}
              >
                {plan.cta}
              </a>

              <ul className="flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    {plan.highlighted ? (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="shrink-0"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="7"
                          fill="white"
                          fillOpacity="0.2"
                        />
                        <path
                          d="M5 8l2 2 4-4"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <Check />
                    )}
                    <span
                      className={
                        plan.highlighted ? "text-white" : "text-neutral-700"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
                {plan.missing.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <Cross />
                    <span className="text-neutral-400 line-through">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-neutral-400 mt-10">
          All plans include a 14-day free trial. No credit card required to
          start.
        </p>
      </div>
    </section>
  );
}
