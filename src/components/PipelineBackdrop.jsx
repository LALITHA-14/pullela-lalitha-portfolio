import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Decorative background: a data-pipeline line with flow "packets".
// This is the required parallax element — it moves at a different
// speed than the page scroll, purely decorative, non-interactive.
export default function PipelineBackdrop() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const yFast = useTransform(scrollYProgress, [0, 1], [0, -220])
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15])

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.svg
        style={{ y: ySlow, opacity }}
        className="absolute -left-10 top-10 w-[140%] max-w-none opacity-40"
        viewBox="0 0 1200 500"
        fill="none"
      >
        <path
          d="M0 320 C 150 320 150 180 300 180 S 450 380 600 380 S 750 120 900 120 S 1050 300 1200 300"
          stroke="#233047"
          strokeWidth="2"
        />
      </motion.svg>

      <motion.svg
        style={{ y: yFast, opacity }}
        className="absolute left-1/4 top-24 w-[120%] max-w-none"
        viewBox="0 0 1200 500"
        fill="none"
      >
        <path
          id="flowpath"
          d="M0 220 C 180 220 180 60 360 60 S 540 300 720 300 S 900 100 1080 100 S 1200 200 1200 200"
          stroke="#2DD9C6"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeDasharray="6 10"
        />
        <circle r="4" fill="#F5A623">
          <animateMotion dur="7s" repeatCount="indefinite">
            <mpath href="#flowpath" />
          </animateMotion>
        </circle>
        <circle r="3" fill="#2DD9C6">
          <animateMotion dur="7s" begin="2.3s" repeatCount="indefinite">
            <mpath href="#flowpath" />
          </animateMotion>
        </circle>
        <circle r="3" fill="#2DD9C6">
          <animateMotion dur="7s" begin="4.6s" repeatCount="indefinite">
            <mpath href="#flowpath" />
          </animateMotion>
        </circle>
      </motion.svg>

      <div className="absolute inset-0 section-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
    </div>
  )
}
