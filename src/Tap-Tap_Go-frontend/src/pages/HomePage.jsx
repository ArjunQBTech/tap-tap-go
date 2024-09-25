import React from 'react'
import Footer from '../components/common/Footer/Footer'
import LowerSection from '../components/home/LowerSection/LowerSection'
import About from '../components/home/About/About'

export default function HomePage() {
  return (
    <div className='home'>
      HomePage works!
      <About />
      <LowerSection />
      <Footer />
    </div>
  )
}
