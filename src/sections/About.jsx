import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0  },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
}

const team = [
  {
    name: 'Ava Chen',
    role: 'Co-founder & CEO',
    initials: 'AC',
    color: 'bg-violet-100 text-violet-700',
    bio: 'Previously led product at Segment. Spent 6 years making data accessible to non-technical teams.',
  },
  {
    name: 'Jordan Okafor',
    role: 'Co-founder & CTO',
    initials: 'JO',
    color: 'bg-teal-100 text-teal-700',
    bio: 'Built the real-time pipeline at Amplitude. Systems nerd who believes fast queries should be a right, not a privilege.',
  },
  {
    name: 'Mia Torres',
    role: 'Head of Design',
    initials: 'MT',
    color: 'bg-pink-100 text-pink-700',
    bio: 'Designed core features at Notion and Linear. Thinks dashboards should be beautiful enough to hang on a wall.',
  },
  {
    name: 'Rahul Singh',
    role: 'Head of Engineering',
    initials: 'RS',
    color: 'bg-brand-100 text-brand-700',
    bio: 'Ex-Cloudflare infrastructure. Obsessed with sub-50ms everything and zero-downtime deploys.',
  },
]

const values = [
  {
    label: 'Clarity over cleverness',
    body: 'Every feature should make your data easier to understand, not harder. If it requires a manual, we rethink it.',
  },
  {
    label: 'Speed is a feature',
    body: 'Slow answers cause people to stop asking questions. We treat query performance as a product decision, not a technical one.',
  },
  {
    label: 'Earned trust',
    body: 'We never sell your data, train on it, or share it. Privacy is built into the architecture, not bolted on afterward.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* ── Origin story ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">

          {/* Left — text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              variants={fadeUp} transition={{ duration: 0.5 }}
              className="text-xs font-medium text-brand-600 uppercase tracking-widest"
            >
              Our story
            </motion.span>

            <motion.h2
              variants={fadeUp} transition={{ duration: 0.5 }}
              className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight"
            >
              Built after one too many "let me pull that report" moments.
            </motion.h2>

            <motion.p
              variants={fadeUp} transition={{ duration: 0.5 }}
              className="mt-6 text-neutral-500 text-lg leading-relaxed"
            >
              In 2022, Ava and Jordan were on opposite sides of the same broken workflow —
              one asking for data, one spending entire afternoons writing queries to produce it.
              Neither of them thought that was acceptable.
            </motion.p>

            <motion.p
              variants={fadeUp} transition={{ duration: 0.5 }}
              className="mt-4 text-neutral-500 text-lg leading-relaxed"
            >
              Flowlytics started as an internal tool they built on a weekend.
              Six months later, twelve other teams were using it.
              Today it processes over <span className="text-neutral-800 font-medium">2.4 billion events a month</span> for
              companies across 40 countries — and nobody has written a SQL query to do it.
            </motion.p>

            <motion.div
              variants={fadeUp} transition={{ duration: 0.5 }}
              className="mt-10 flex items-center gap-6"
            >
              <div>
                <p className="text-3xl font-bold text-neutral-900">2022</p>
                <p className="text-sm text-neutral-400 mt-0.5">Founded</p>
              </div>
              <div className="w-px h-10 bg-neutral-200" />
              <div>
                <p className="text-3xl font-bold text-neutral-900">40+</p>
                <p className="text-sm text-neutral-400 mt-0.5">Countries</p>
              </div>
              <div className="w-px h-10 bg-neutral-200" />
              <div>
                <p className="text-3xl font-bold text-neutral-900">12</p>
                <p className="text-sm text-neutral-400 mt-0.5">Team members</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — decorative quote card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            {/* Background block */}
            <div className="absolute inset-0 bg-brand-50 rounded-3xl translate-x-4 translate-y-4" />

            <div className="relative bg-white border border-neutral-200 rounded-3xl p-10">
              {/* Large quote mark */}
              <svg
                width="40" height="28" viewBox="0 0 40 28" fill="none"
                className="text-brand-200 mb-6"
              >
                <path
                  d="M0 28V17.5C0 7.833 4.167 2.333 12.5 1L14 4C10.333 4.833 8.167 6.5 7.5 9H14V28H0ZM22 28V17.5C22 7.833 26.167 2.333 34.5 1L36 4C32.333 4.833 30.167 6.5 29.5 9H36V28H22Z"
                  fill="currentColor"
                />
              </svg>

              <p className="text-xl text-neutral-700 leading-relaxed font-medium">
                We didn't set out to build an analytics company. We set out to make it so that
                anyone — a designer, a marketer, a founder — could get a straight answer from
                their data without waiting for an engineer.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-sm font-semibold">
                  AC
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900">Ava Chen</p>
                  <p className="text-xs text-neutral-400">Co-founder & CEO</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Values ── */}
        <motion.div
          className="mb-28"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="text-center mb-14">
            <span className="text-xs font-medium text-brand-600 uppercase tracking-widest">What we believe</span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-neutral-900">
              Three things we refuse to compromise on
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-neutral-50 border border-neutral-200 rounded-2xl p-8 hover:border-brand-300 transition-all"
              >
                {/* Accent line */}
                <div className="w-8 h-1 rounded-full bg-brand-400 mb-6 group-hover:w-[100%] transition-all duration-300" />
                <h3 className="text-base font-semibold text-neutral-900 mb-3">{v.label}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Team ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="text-center mb-14">
            <span className="text-xs font-medium text-brand-600 uppercase tracking-widest">The team</span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-neutral-900">
              Small team. Outsized obsession.
            </h2>
            <p className="mt-4 text-neutral-500 text-lg max-w-xl mx-auto">
              We're 12 people who have spent the last decade inside data tools — and couldn't
              stop thinking about how much better they could be.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col items-center text-center hover:border-brand-300 hover:shadow-sm transition-all group"
              >
                {/* Avatar */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-semibold mb-4 ${member.color} group-hover:scale-105 transition-transform`}>
                  {member.initials}
                </div>

                <p className="text-sm font-semibold text-neutral-900">{member.name}</p>
                <p className="text-xs text-brand-500 font-medium mt-0.5 mb-3">{member.role}</p>

                {/* Divider */}
                <div className="w-8 h-px bg-neutral-200 mb-3" />

                <p className="text-xs text-neutral-400 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>

          {/* Hiring nudge */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-10 text-center"
          >
            <p className="text-sm text-neutral-400">
              We're growing.{' '}
              <a href="#" className="text-brand-500 font-medium hover:underline">
                See open roles →
              </a>
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}