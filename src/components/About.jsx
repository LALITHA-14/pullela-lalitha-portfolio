import { motion } from 'framer-motion'
import { profile } from '../data/content'

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[220px_1fr] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex md:justify-start justify-center"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl border border-line bg-surface flex items-center justify-center">
            <span className="font-display text-5xl font-semibold text-gradient">
              {profile.initials}
            </span>
            <span className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-amber" />
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mono-tag mb-4"
          >
            About
          </motion.p>

          {profile.bio.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="text-muted text-lg leading-relaxed mb-4 max-w-2xl"
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
