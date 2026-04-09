import { motion } from "framer-motion";

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

// Stagger children so each element animates in sequence
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const stats = [
  { value: "2.4M", label: "Events tracked daily" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "< 50ms", label: "Query response time" },
  
];

export default function Hero() {
    
  return (

    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 overflow-hidden">
        
      {/* Subtle background grid — purely CSS, no images */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 60% 10%, rgb(99 102 241 / 0.08) 0%, transparent 60%)," +
            "linear-gradient(rgb(244 244 245 / 0.6) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgb(244 244 245 / 0.6) 1px, transparent 1px)",
          backgroundSize: "auto, 48px 48px, 48px 48px",
        }}
      />

      <motion.div layout
        className="max-w-4xl w-full flex flex-col items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow badge */}
        <motion.div layout variants={fadeUp} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 text-xs font-medium bg-brand-50 text-brand-700 border border-brand-200 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            Now in public beta — free for 14 days
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 layout
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="text-display-sm md:text-display font-bold tracking-tight text-neutral-900"
        >
          Analytics that{" "}
          <span className="text-gradient">explain themselves</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p layout
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-6 text-lg md:text-xl text-neutral-500 max-w-2xl leading-relaxed"
        >
          Flowlytics turns raw product data into plain-English insights. No SQL,
          no dashboards to build. Just answers, automatically.
        </motion.p>

        {/* CTA buttons */}
        <motion.div layout
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#"
            className="w-full sm:w-auto bg-brand-500 text-white text-sm font-medium px-7 py-3.5 rounded-xl hover:bg-brand-600 transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            Start for free
          </a>

          <a
            href="#"
            className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm font-medium text-neutral-600 border border-neutral-200 px-7 py-3.5 rounded-xl hover:bg-neutral-50 transition"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8"
                cy="8"
                r="7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M6.5 5.5L10.5 8L6.5 10.5V5.5Z" fill="currentColor" />
            </svg>
            Watch 2-min demo
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p layout
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-5 text-xs text-neutral-400"
        >
          No credit card required · Cancel anytime · SOC 2 compliant
        </motion.p>

        {/* Stats row */}
        <motion.div layout
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-neutral-200 rounded-2xl overflow-hidden w-full max-w-2xl border border-neutral-200"
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white px-8 py-6 flex flex-col items-center gap-1"
            >
              <span className="text-2xl font-semibold text-neutral-900">
                {value}
              </span>
              <span className="text-xs text-neutral-400">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
