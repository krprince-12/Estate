import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Services from './Component/Services'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Pricing from './Component/Pricing'
import './index.css'
import Testimonals from './Component/Testimonals'
import Onboarding from './Component/Onboarding'
const App = () => {
  return (
    <>
    <div className='sticky left-0 right-0 top-4 z-100'>
    <div className='w-full bg-black py-3 backdrop-blur-lg lg:flex'>
      <div>
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="hero"><Testimonals/></div>
      <div id="onboard"><Onboarding/></div>
      <div id="services"><Services /></div>
      <div id="pricing"><Pricing /></div>
      <div id="contact"><Contact /></div>

    
      <Footer />
      </div>
      </div>
      </div>
    </>
  )
}

export default App;