import { motion } from 'framer-motion'
import { profile, stages } from '../data/content'
import PipelineBackdrop from './PipelineBackdrop'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <PipelineBackdrop />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mono-tag mb-5"
        >
          {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] max-w-3xl"
        >
          Hi, I'm {profile.name.split(' ')[1] || profile.name}.
          <br />
          <span className="text-gradient">{profile.title}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-muted text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center rounded-full px-6 py-3 font-medium text-base"
            style={{ color: '#06171A', background: '#2DD9C6' }}
          >
            View my work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center rounded-full border border-line px-6 py-3 font-medium text-ink hover:border-signal/60 transition-colors"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap gap-x-8 gap-y-3"
        >
          {stages.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <span className="font-mono text-xs text-amber">0{i + 1}</span>
              <span className="text-sm text-muted">{s}</span>
              {i < stages.length - 1 && <span className="text-line hidden sm:inline">→</span>}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
