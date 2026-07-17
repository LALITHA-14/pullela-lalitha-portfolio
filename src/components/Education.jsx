import { motion } from 'framer-motion'
import { education, languages } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-6 section-grid">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.6fr_1fr] gap-14">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mono-tag mb-4"
          >
            Education
          </motion.p>

          <ol className="relative border-l border-line ml-2">
            {education.map((e, i) => (
              <motion.li
                key={e.degree}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="mb-10 ml-6"
              >
                <span className="absolute -left-[7px] w-3 h-3 rounded-full bg-signal" />
                <h3 className="font-display font-semibold text-lg">{e.degree}</h3>
                <p className="text-muted">{e.school}</p>
                <p className="text-sm font-mono text-amber mt-1">
                  {e.period} · {e.detail}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mono-tag mb-4">Languages</p>
          <ul className="space-y-3">
            {languages.map((l) => (
              <li key={l.name} className="flex items-center justify-between border-b border-line pb-2">
                <span className="text-ink">{l.name}</span>
                <span className="text-sm text-muted font-mono">{l.level}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
