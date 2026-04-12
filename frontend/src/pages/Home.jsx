import React from 'react'
import Banner from '../components/home/Banner'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import Testimonial from '../components/home/Testimonial'
import CTA from '../components/home/CTA'
import Footer from '../components/home/Footer'

function Home() {
  return (
    <div>
      <Banner/>
      <Hero/>
      <Features/>
      <Testimonial/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default Home