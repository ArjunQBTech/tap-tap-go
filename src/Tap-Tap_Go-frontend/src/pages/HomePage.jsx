import React from 'react'
import Rules from '../components/home/rules-sec/Rules'
import Footer from '../components/common/Footer/Footer'
import LowerSection from '../components/home/LowerSection/LowerSection'
import Hero from '../components/home/Hero'
import About from '../components/home/About/About'

export default function HomePage() {
  return (
    <div className='home'>
      HomePage works!
      <Hero/>
      <About />
      <Rules/>
      <LowerSection />
      <Footer />
    </div>
  )
}
