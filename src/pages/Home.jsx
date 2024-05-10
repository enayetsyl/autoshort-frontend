import React from 'react'
import Hero from '../components/Hero'
import HowWork from '../components/HowWork'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className=''>
      {/* <Navbar/> */}
      <Hero/>
      <HowWork/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default Home