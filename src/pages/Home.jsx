import Footer from '../components/Footer'
import Hero from '../components/Hero'
import CreateHomePage from './CreateHomePage'
import CreateUi from './CreateUI'


const Home = () => {
  return (
    <div className=''>
      {/* <Navbar/> */}
      <Hero/>
      <CreateUi/>
      {/* <CreateHomePage/> */}
      {/* <HowWork/>
      <Pricing/>*/}
     <Footer/> 
    </div>
  )
}

export default Home