import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ParallaxLayers = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const yBg = useTransform(scrollYProgress, [0, 1], [0, -120])
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -200])
  const yFg = useTransform(scrollYProgress, [0, 1], [0, -320])

  return (
    <section ref={ref} className="relative h-[120vh] w-full overflow-hidden bg-[#1f1f1f]">
      {/* Background layer: subtle mountain silhouette */}
      <motion.div style={{ y: yBg }} className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg">
          <linearGradient id="bgGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#2C2C2C" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          <rect width="1440" height="900" fill="url(#bgGrad)" />
          <path d="M0 700 L200 600 L350 650 L600 520 L820 640 L1050 560 L1200 620 L1440 540 L1440 900 L0 900 Z" fill="#101010" opacity="0.8" />
        </svg>
      </motion.div>

      {/* Mid layer: torii gates silhouettes */}
      <motion.div style={{ y: yMid }} className="absolute inset-x-0 bottom-0">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-3 gap-6 opacity-60">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-28 sm:h-36 md:h-40 rounded-md bg-gradient-to-b from-[#C41E3A] to-[#8f142a]" />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Foreground layer: lanterns */}
      <motion.div style={{ y: yFg }} className="absolute inset-x-0 bottom-8">
        <div className="mx-auto max-w-6xl px-6 flex gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-24 w-20 rounded-full bg-[#D4AF37] shadow-[0_20px_60px_-10px_rgba(212,175,55,0.35)]" />)
          )}
        </div>
      </motion.div>

      {/* Text overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6">
          <h3 className="text-white text-3xl sm:text-4xl font-semibold">Parallax Layers</h3>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">
            Background and foreground move at different speeds to create depth as you scroll.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ParallaxLayers
