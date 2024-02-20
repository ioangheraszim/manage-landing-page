import './App.scss'
import HeroSection from './assets/components/HeroSection/HeroSection'
import InfoSections from './assets/components/InfoSection/InfoSections'
import Navbar from './assets/components/Navbar/Navbar'
import SimpleAd from './assets/components/SimpleAd/SimpleAd'
import Testimonials from './assets/components/Testimonials/Testimonials'

function App() {

  return (
    <main className=''>
        <Navbar/>
        <HeroSection/>
        <InfoSections/>
        <Testimonials/>
        <SimpleAd/>
    </main>
  )
}

export default App
