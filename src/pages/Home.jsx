import Footer from '../components/Footer'
import Hero from '../components/Hero'
import CreateHomePage from './CreateHomePage'


const Home = () => {
  return (
    <div className=''>
      {/* <Navbar/> */}
      <Hero/>
      <CreateHomePage/>
      {/* <HowWork/>
      <Pricing/>*/}
     <Footer/> 
    </div>
  )
}

export default Home