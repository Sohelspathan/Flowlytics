import { motion } from 'framer-motion'

// These are text-based logo placeholders — replace with real SVGs or <img> tags
const logos = [
  { name: 'Vercel',    width: 'w-20' },
  { name: 'Stripe',   width: 'w-16' },
  { name: 'Linear',   width: 'w-16' },
  { name: 'Notion',   width: 'w-16' },
  { name: 'Loom',     width: 'w-14' },
  { name: 'Supabase', width: 'w-24' },
]

const testimonials = [
  {
    quote:
      'Flowlytics replaced three separate tools for us. We went from waiting a week for a data pull to having the answer before the meeting ends.',
    author: 'Sarah Kim',
    role: 'Head of Product, Stripe',
    initials: 'SK',
    color: 'bg-violet-100 text-violet-700',
  },
  {
    quote:
      'The plain-English query interface is genuinely magical. Our entire team uses it daily — not just the analysts.',
    author: 'Marcus Holt',
    role: 'CTO, Linear',
    initials: 'MH',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    quote:
      "Set up anomaly alerts in under five minutes. Caught a payment conversion drop the same night it started — saved us a six-figure weekend.",
    author: 'Priya Nair',
    role: 'VP Engineering, Loom',
    initials: 'PN',
    color: 'bg-brand-100 text-brand-700',
  },
]

export default function SocialProof() {
  return (
    <section className="py-28 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Trusted by */}
        <motion.p
          className="text-center text-xs font-medium text-neutral-400 uppercase tracking-widest mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by product teams at
        </motion.p>

        {/* Logo marquee */}
        <div className="relative mb-24">
          {/* Fade edges */}
          {/* <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" /> */}

          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          >
            {[...logos,...logos].map((logo, i) => (
              <span
                key={i}
                className={`${logo.width} shrink-0 text-lg font-semibold text-neutral-300 select-none`}
              >
                {logo.name}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#6366f1">
                    <path d="M7 1l1.5 4H13L9.5 8l1.5 4L7 9.5 3 12l1.5-4L1 5h4.5L7 1Z"/>
                  </svg>
                ))}
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed flex-1">"{t.quote}"</p>

              <div className="flex items-center gap-3 pt-2 border-t border-neutral-200">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900">{t.author}</p>
                  <p className="text-xs text-neutral-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}