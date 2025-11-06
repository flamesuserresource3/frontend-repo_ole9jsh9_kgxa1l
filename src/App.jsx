import Hero from './components/Hero'
import ParallaxGallery from './components/ParallaxGallery'
import ParallaxLayers from './components/ParallaxLayers'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#2C2C2C]">
      <Hero />
      <ParallaxGallery />
      <ParallaxLayers />
      <CTA />
      <footer className="bg-[#1b1b1b] text-white/60 text-sm py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Old Japan Travel. All rights reserved.</p>
          <p className="text-white/40">Old Japan heritage meets modern travel experience with immersive scroll animations.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
