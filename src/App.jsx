import './App.scss'
import HeroSection from './assets/components/HeroSection/HeroSection'
import InfoSections from './assets/components/InfoSection/InfoSections'
import Navbar from './assets/components/Navbar/Navbar'
import Testimonials from './assets/components/Testimonials/Testimonials'

function App() {

  return (
    <main className='container'>
        <Navbar/>
        <HeroSection/>
        <InfoSections/>
        <Testimonials/>
    </main>
  )
}

export default App
