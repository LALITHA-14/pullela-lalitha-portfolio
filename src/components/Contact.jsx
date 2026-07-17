import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mono-tag mb-4"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display text-3xl md:text-5xl font-semibold max-w-2xl mx-auto"
        >
          Building a data pipeline? Let's talk about it.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted mt-5 max-w-lg mx-auto"
        >
          Open to internships and entry-level roles in data engineering and data science.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium"
            style={{ color: '#06171A', background: '#2DD9C6' }}
          >
            <FaRegEnvelope /> {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium text-ink hover:border-signal/60 transition-colors"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium text-ink hover:border-signal/60 transition-colors"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  )
}
