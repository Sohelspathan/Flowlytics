import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'How does the 14-day trial work?',
    a: 'You get full access to the Pro plan for 14 days — no credit card needed. At the end of the trial you choose a plan or stay on the free Starter tier. Your data is never deleted.',
  },
  {
    q: 'What counts as an "event"?',
    a: 'Any action you track: a page view, a button click, a form submission, a purchase. Server-side calls count too. We do not count internal heartbeat pings or health checks.',
  },
  {
    q: 'Can I import data from my existing analytics tool?',
    a: 'Yes. We support CSV import and a REST API for backfilling historical data. Native connectors for Segment, Mixpanel, and Amplitude are on the roadmap for Q3.',
  },
  {
    q: 'How does the plain-English query feature work?',
    a: 'You type a question — "How many users signed up last week from Twitter?" — and Flowlytics translates it into a query against your event data, runs it, and returns the answer in plain text plus a chart. It uses a fine-tuned model trained on analytics queries.',
  },
  {
    q: 'Is my data shared with third parties?',
    a: 'Never. Your event data is used only to answer your queries. We do not sell data, use it for advertising, or share it with other customers. We are SOC 2 Type II certified and GDPR compliant.',
  },
  {
    q: 'Do you support self-hosting?',
    a: 'Self-hosting is available on the Enterprise plan. You get a Docker Compose setup, full data residency in your own cloud account, and dedicated onboarding support.',
  },
  {
    q: 'What happens if I exceed my event limit?',
    a: 'We send you an email warning at 80% and 100% usage. Events above the limit are queued for 48 hours — no data is lost. You can upgrade instantly from the dashboard to process the queue.',
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border-b border-neutral-200 last:border-0"
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-neutral-900 group-hover:text-brand-500 transition">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 w-6 h-6 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:border-brand-300 group-hover:text-brand-500 transition"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-neutral-500 leading-relaxed pr-10">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-28 px-6 bg-white">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium text-brand-600 uppercase tracking-widest">FAQ</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Questions we get a lot
          </h2>
          <p className="mt-4 text-neutral-500 text-lg">
            Can't find what you're looking for?{' '}
            <a href="mailto:hello@flowlytics.io" className="text-brand-500 hover:underline">
              Email us
            </a>
            .
          </p>
        </motion.div>

        {/* Items */}
        <div>
          {faqs.map((item, i) => (
            <FAQItem key={item.q} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}