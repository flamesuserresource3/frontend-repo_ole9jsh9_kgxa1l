import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -100])
  const ySub = useTransform(scrollYProgress, [0, 1], [0, -60])
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.6])
  const scaleCircle = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <section ref={ref} className="relative min-h-[90vh] w-full overflow-hidden bg-[#2C2C2C] text-white flex items-center justify-center">
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#C41E3A]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#D4AF37]/20 blur-3xl" />
      </div>

      {/* Floating circle accent */}
      <motion.div
        style={{ scale: scaleCircle, opacity: fade }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 size-[520px] rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
      />

      <div className="relative z-10 mx-auto px-6 text-center">
        <motion.h1
          style={{ y: yTitle, opacity: fade }}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight"
        >
          Old Japan Heritage,
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4AF37] to-[#C41E3A]">Modern Travel</span>
        </motion.h1>
        <motion.p
          style={{ y: ySub, opacity: fade }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/80"
        >
          Immerse yourself in serene temples, vibrant cities, and timeless landscapes. Scroll to explore destinations with elegant motion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a href="#destinations" className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] text-[#2C2C2C] px-6 py-3 font-medium shadow-lg shadow-yellow-600/20 hover:brightness-110 transition">
            Explore Destinations
          </a>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white/90 hover:bg-white/10 transition">
            Plan a Journey
          </a>
        </motion.div>
      </div>

      {/* Subtle pattern */}
      <svg className="pointer-events-none absolute inset-0 opacity-[0.06]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </section>
  )
}

export default Hero
