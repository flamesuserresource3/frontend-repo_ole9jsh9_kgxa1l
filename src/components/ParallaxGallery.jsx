import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const destinations = [
  {
    name: 'Tokyo',
    img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1600&auto=format&fit=crop',
    accent: '#C41E3A',
  },
  {
    name: 'Kyoto',
    img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop',
    accent: '#D4AF37',
  },
  {
    name: 'Osaka',
    img: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1600&auto=format&fit=crop',
    accent: '#ffffff',
  },
  {
    name: 'Hiroshima',
    img: 'https://images.unsplash.com/photo-1591069480240-26359d6be984?q=80&w=1600&auto=format&fit=crop',
    accent: '#C41E3A',
  },
  {
    name: 'Nara',
    img: 'https://images.unsplash.com/photo-1512163143273-bde0e3cc740c?q=80&w=1600&auto=format&fit=crop',
    accent: '#D4AF37',
  },
  {
    name: 'Mount Fuji',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop',
    accent: '#ffffff',
  },
]

const ParallaxCard = ({ name, img, accent, index }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.25'] })
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.05])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1])
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])
  const overlay = useTransform(scrollYProgress, [0, 1], [0.5, 0.15])

  return (
    <div ref={ref} className="relative h-[85vh] sm:h-[90vh] w-full flex items-center justify-center">
      <motion.div
        style={{ scale, opacity, y }}
        className="group relative w-[92%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-[70%] overflow-hidden rounded-2xl shadow-2xl"
      >
        <img
          src={img}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          loading="lazy"
        />
        <motion.div
          style={{ opacity: overlay }}
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2C2C2C] via-[#2C2C2C]/40 to-transparent"
        />

        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
          <div>
            <h3 className="text-white text-3xl sm:text-4xl font-semibold drop-shadow-lg">{name}</h3>
            <div
              className="mt-2 h-1 w-24 rounded-full"
              style={{ backgroundColor: accent }}
            />
          </div>
          <button className="rounded-full bg-white/90 text-[#2C2C2C] px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white transition">
            View Details
          </button>
        </div>
      </motion.div>
    </div>
  )
}

const ParallaxGallery = () => {
  return (
    <section id="destinations" className="relative bg-[#2C2C2C] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-white text-2xl sm:text-3xl font-medium">Destination Gallery</h2>
          <p className="text-white/60 text-sm max-w-xl">
            Images reveal and scale naturally as you scroll, blending modern motion with timeless scenery.
          </p>
        </div>
      </div>
      {destinations.map((d, i) => (
        <ParallaxCard key={d.name} index={i} {...d} />
      ))}
    </section>
  )
}

export default ParallaxGallery
