import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-28 px-6 bg-neutral-50">
      <motion.div
        className="max-w-4xl mx-auto bg-brand-500 rounded-3xl px-10 py-20 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Decorative rings */}
        <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 w-64 h-64 rounded-full border border-white/10" />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full border border-white/10" />

        <p className="text-sm font-medium text-brand-200 uppercase tracking-widest mb-4">
          Start today — free forever
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Your data is trying to tell you something.
        </h2>
        <p className="mt-5 text-brand-100 text-lg max-w-xl mx-auto leading-relaxed">
          Stop guessing. Start asking. Flowlytics turns your product events into decisions in minutes.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
           <a href="#"
            className="w-full sm:w-auto bg-white text-brand-600 font-medium text-sm px-8 py-3.5 rounded-xl hover:bg-brand-50 transition"
          >
            Get started free
          </a>
          <a
            href="#"
            className="w-full sm:w-auto text-sm font-medium text-brand-100 border border-brand-400 px-8 py-3.5 rounded-xl hover:bg-brand-400/30 transition"
          >
            Book a demo
          </a>
        </div>
        <p className="mt-6 text-xs text-brand-200">No credit card · 14-day trial · Cancel anytime</p>
      </motion.div>
    </section>
  )
}