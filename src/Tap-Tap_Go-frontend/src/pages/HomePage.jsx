import React from 'react'
import Rules from '../components/home/rules-sec/Rules'
import Footer from '../components/common/Footer/Footer'
import LowerSection from '../components/home/LowerSection/LowerSection'

export default function HomePage() {
  return (
    <div className='page'>
      <Rules/>
      <LowerSection />
      <Footer />
    </div>
  )
}
