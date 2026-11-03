import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Storage from './components/Storage'
import Packing from './components/Packing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Storage />
        <Packing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App
