import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section id="cta" className="relative bg-[#2C2C2C] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1e1e1e] to-[#151515] p-8 sm:p-12 overflow-hidden">
          <div className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full bg-[#C41E3A]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-[#D4AF37]/20 blur-3xl" />

          <h3 className="text-white text-2xl sm:text-3xl font-semibold">Plan your elegant escape</h3>
          <p className="mt-3 text-white/70 max-w-xl">
            Tell us where you’d like to go and we’ll craft a modern journey through timeless Japan.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <input
              className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              placeholder="Your name"
            />
            <input
              type="email"
              className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              placeholder="Email"
            />
            <select className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
              <option className="bg-[#2C2C2C]">Tokyo</option>
              <option className="bg-[#2C2C2C]">Kyoto</option>
              <option className="bg-[#2C2C2C]">Osaka</option>
              <option className="bg-[#2C2C2C]">Hiroshima</option>
              <option className="bg-[#2C2C2C]">Nara</option>
              <option className="bg-[#2C2C2C]">Mount Fuji</option>
            </select>
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="sm:col-span-3 rounded-lg bg-[#D4AF37] text-[#2C2C2C] px-6 py-3 font-medium shadow-lg shadow-yellow-600/20 hover:brightness-110 transition"
            >
              Request Itinerary
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CTA
