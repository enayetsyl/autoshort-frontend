import axios from 'axios'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import CreateHomePage from './CreateHomePage'
import CreateUi from './CreateUI'


const Home = () => {
  const handleTest = async () => {
    console.log('test hit')
    try {
      const result = await axios.get(`${import.meta.env.VITE_BACKEND}`);
      
      const data = result.data;
      
      console.log(data);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  return (
    <div className=''>
      {/* <Navbar/> */}
      <Hero/>
      {/* <button className='bg-blue-500 p-3 rounded-lg text-white' onClick={handleTest}>Check backend</button> */}
      <CreateUi/>
      {/* <CreateHomePage/> */}
      {/* <HowWork/>
      <Pricing/>*/}
     <Footer/> 
    </div>
  )
}

export default Home