import React from 'react'
import Hero from '../components/Hero'
import HowWork from '../components/HowWork'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <HowWork/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default Home