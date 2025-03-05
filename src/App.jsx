import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Services from './Component/Services'
import Comparison from './Component/Comparison'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import About from './Component/About'
import Subscription from './Component/Subscription'
import Faq from './Component/Faq'
import Pricing from './Component/Pricing'
import './index.css'
const App = () => {
  return (
    <>
    <div className='sticky left-0 right-0 top-4 z-100'>
    <div className='w-full bg-gray-900 py-3 backdrop-blur-lg lg:flex'>
      <div>
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="services"><Services /></div>
      <div id="comparison"><Comparison /></div>
      <div id="subscription"><Subscription /></div>
      <div id="pricing"><Pricing /></div>
      <div id="faq"><Faq /></div>
      <div id="contact"><Contact /></div>
      <div id="about"><About /></div>
      <Footer />
      </div>
      </div>
      </div>
    </>
  )
}

export default App;