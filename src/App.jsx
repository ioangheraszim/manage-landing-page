import './App.scss'
import Footer from './assets/components/Footer/Footer'
import HeroSection from './assets/components/HeroSection/HeroSection'
import InfoSections from './assets/components/InfoSection/InfoSections'
import Navbar from './assets/components/Navbar/Navbar'
import SimpleAd from './assets/components/SimpleAd/SimpleAd'
import Testimonials from './assets/components/Testimonials/Testimonials'

function App() {

  return (
    <main>
        <Navbar/>
        <HeroSection/>
        <InfoSections/>
        <Testimonials/>
        <SimpleAd/>
        <Footer/>
    </main>
  )
}

export default App
