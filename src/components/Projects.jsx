import { motion } from 'framer-motion'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mono-tag mb-4"
        >
          Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display text-3xl md:text-4xl font-semibold mb-14 max-w-xl"
        >
          Pipelines and systems, from ingestion to insight.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className={`group rounded-2xl border border-line bg-surface p-7 flex flex-col ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-wide text-signal">
                  {p.stage} stage
                </span>
                <span className="font-mono text-xs text-muted">0{i + 1}</span>
              </div>

              <h3 className="font-display text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-muted leading-relaxed mb-3">{p.description}</p>
              <p className="text-sm text-ink/80 leading-relaxed mb-5 border-l-2 border-amber/50 pl-3">
                {p.highlight}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono rounded-full border border-line px-2.5 py-1 text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-5 pt-2">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-signal transition-colors"
                >
                  <FaGithub /> Repository
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-signal transition-colors"
                  >
                    <HiOutlineExternalLink /> Live demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <p className="text-xs text-muted mt-8 font-mono">
          * Repository links point to the GitHub profile — replace with each project's exact repo URL in
          <code className="text-signal"> src/data/content.js</code> once it's public.
        </p>
      </div>
    </section>
  )
}
