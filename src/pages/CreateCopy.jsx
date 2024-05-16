import  { useContext, useState } from 'react'
import Step from '../components/Step.jsx'
import GradientHeading from '../components/GradientHeading.jsx'
import SelectOption from '../components/SelectOption.jsx';
import ContentSelect from '../components/ContentSelect.jsx';
import VoiceOption from '../components/VoiceOption.jsx';
import axios from 'axios';
import { destinationOptions, durationOptions, languageOptions,contentOptions, narrationOptions  } from '../constant/index.jsx';
import { AuthContext } from '../provider/AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';


const Create = () => {

  const [destination, setDestination] = useState(null);
  const [content, setContent] = useState(null);
  const [narrator, setNarrator] = useState(null);
  const [language, setLanguage] = useState(null);
  const [duration, setDuration] = useState(null);
  const [customContent, setCustomContent] = useState('');
  const {  user, setPostLoginCallback  } = useContext(AuthContext);
  const navigate = useNavigate()
  // const user = localStorage.getItem('user');
  // console.log('create user email',user.email )
  
  const handleCreateSeries = async () => { 
    if(!user){
      alert('You have to login to create a series.')
      navigate('/login')
      return
    }
    const data = {
      userEmail: user?.email,
      destination: destination?.name,
      content: content?.name,
      narrator: narrator?.name, 
      language: language?.name, 
      duration: duration?.name, customContent
    }
    console.log(data)
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND}/series`, data);
      const resData = await response.data
      console.log(resData)
      console.log(response.data)
      alert(`${resData.message}`)
    } catch (error) {
      console.error('Error sending video generation request:', error);
     
    }


   }

   return (
    <div className='mb-20'>
      {/* heading */}
      <div className='pb-10'>
        <h1 className='text-center text-black text-4xl font-bold pt-16'>CREATE A SERIES</h1>
        <p className='text-center text-black/70 font-semibold pt-4'>Schedule a series of Faceless Videos to post on auto-pilot.</p>
      </div>
     
      {/* form div */}
     <div className='px-5 md:px-16'>
     <div className='bg-slate-600 max-w-2xl mx-auto px-8 py-10 md:px-16 shadow-xl rounded-lg'>
        {/* step 1 */}
        <Step
        number='1'
        />
        <GradientHeading
        text='Destination'/>
        <p className='text-lg text-white/70 font-semibold'>The account where your video series will be posted</p>

        <div className='w-full pb-14'>
        <SelectOption
        selectedOption={destination} 
        setSelectedOption={setDestination}
        options={destinationOptions}
        defaultOption='Select Destination'
        />
        </div>
        {/* step 2 */}
        <Step
        number='2'
        />
        <GradientHeading
        text='Content'/>
        <p className='text-lg text-white/70 font-semibold'>What will your video series be about?</p>

        <div className='w-full  pb-6'>
          <ContentSelect
          options={contentOptions}
          selectedOption={content}
          setSelectedOption={setContent}
          defaultOption='Choose Content'
          customContent={customContent}
          setCustomContent={setCustomContent}
          placeholder= 'Example Please share a concise and captivating account of a lesser-known, yet intriguing, historical event. The event MUST be real and factual. Begin with a captivating introduction or question to hook the audience.'         
          />
  
        </div> 

        <p className='text-lg text-white/70 font-semibold'>Narration Voice</p>

        <div className='w-full  pb-6'>
        <VoiceOption
          selectedOption={narrator} 
          setSelectedOption={setNarrator}
          options={narrationOptions}
          defaultOption='Choose Narrator Voice'
        />

        </div>
        <p className='text-lg text-white/70 font-semibold'>Video Language</p>

        <div className='w-full  pb-6'>
        <SelectOption
        selectedOption={language} 
        setSelectedOption={setLanguage}
        options={languageOptions}
        defaultOption='Choose Video Language'
        /></div>
        <p className='text-lg text-white/70 font-semibold'>Duration Preference</p>

        <div className='w-full  pb-16'>
        <SelectOption
        selectedOption={duration} 
        setSelectedOption={setDuration}
        options={durationOptions}
        defaultOption='Choose Video Duration'
        /></div>
        {/* step 3 */}
        <Step
        number='3'
        />
        <GradientHeading
        text='Create'/>
        <p className='text-lg text-white/70 font-semibold pb-5'>You will be able to preview your upcoming videos before posting</p>

       <div className=' flex justify-center items-center'>
       <button className='bg-gradient-to-r from-primary to-blue-700 text-white py-3 px-20 text-lg rounded-lg font-semibold my-5' onClick={handleCreateSeries}>CREATE SERIES</button>
       </div>
      </div>
     </div>
    </div>
  )
}

export default Create