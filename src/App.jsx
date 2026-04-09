import Navbar     from './components/Navbar'
import Hero       from './sections/Hero'
import SocialProof from './sections/SocialProof'
import Features   from './sections/Features'
import Pricing    from './sections/Pricing'
import FAQ        from './sections/FAQ'
import CTA        from './sections/CTA'
import Footer     from './components/Footer'
import About from './sections/About'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <SocialProof />
        <Features />
        <About />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}