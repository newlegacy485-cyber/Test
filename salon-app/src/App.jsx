import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Gallery />
        <Team />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  )
}

