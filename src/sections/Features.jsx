import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0  },
}

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10C3 6.13 6.13 3 10 3s7 3.13 7 7-3.13 7-7 7-7-3.13-7-7Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 7v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Real-time event tracking',
    description:
      'Capture every click, page view, and conversion the moment it happens. Sub-50ms ingestion keeps your data fresh, always.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="3" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="12" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14.5 12v5M12 14.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Plain-English insights',
    description:
      'Ask any question in natural language and get a straight answer — no SQL, no dashboards to configure, no data team required.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 14l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Automated reports',
    description:
      'Schedule weekly digests delivered straight to your inbox. Share live dashboards with stakeholders — no login needed.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'One-line SDK',
    description:
      'Drop a single script tag or npm package into your app. Works with React, Vue, plain JS, iOS, and Android out of the box.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 6l7-3 7 3v8l-7 3-7-3V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 3v14M3 6l7 3 7-3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Funnel analysis',
    description:
      'Visualise exactly where users drop off across any multi-step flow. Spot friction in minutes, not weeks of digging.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M16 8A6 6 0 1 1 4 8a6 6 0 0 1 12 0Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 8v4M10 5.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 19h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Anomaly alerts',
    description:
      'Get notified the moment a metric moves outside its normal range — Slack, email, or webhook. No threshold-setting needed.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span
            variants={fadeUp} transition={{ duration: 0.5 }}
            className="text-xs font-medium text-brand-600 uppercase tracking-widest"
          >
            Everything you need
          </motion.span>
          <motion.h2
            variants={fadeUp} transition={{ duration: 0.5 }}
            className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-neutral-900"
          >
            Built for teams that move fast
          </motion.h2>
          <motion.p
            variants={fadeUp} transition={{ duration: 0.5 }}
            className="mt-4 text-neutral-500 text-lg leading-relaxed"
          >
            Every feature is designed to get you from raw data to a decision in minutes, not days.
          </motion.p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-white rounded-2xl border border-neutral-200 p-6 hover:border-brand-300 hover:shadow-sm transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">{f.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}