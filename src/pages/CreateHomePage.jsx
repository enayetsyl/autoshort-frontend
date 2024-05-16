import { useContext, useState } from 'react';
import Step from '../components/Step.jsx';
import GradientHeading from '../components/GradientHeading.jsx';
import SelectOption from '../components/SelectOption.jsx';
import ContentSelect from '../components/ContentSelect.jsx';
import VoiceOption from '../components/VoiceOption.jsx';
import axios from 'axios';
import { destinationOptions, durationOptions, languageOptions, contentOptions, narrationOptions } from '../constant/index.jsx';
import { AuthContext } from '../provider/AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [destination, setDestination] = useState(null);
  const [content, setContent] = useState(null);
  const [narrator, setNarrator] = useState(null);
  const [language, setLanguage] = useState(null);
  const [duration, setDuration] = useState(null);
  const [customContent, setCustomContent] = useState('');
  const { user, googleSignIn, setPostLoginCallback, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateSeries = async () => {
    if (!destination || !content || !narrator || !language || !duration) {
      alert('All fields are required.');
      return;
    }

    const formData = {
      destination: destination?.name,
      content: content?.name,
      narrator: narrator?.name,
      language: language?.name,
      duration: duration?.name,
      customContent,
    };

    const executeSeriesCreation = async () => {
      const user = JSON.parse(localStorage.getItem('user'));+await waitForSeconds(5);
      const data = {
        userEmail: user?.email,
        ...formData,
      };
      try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND}/series`, data);
        const resData = await response.data;
        alert(`${resData.message}`);
        localStorage.removeItem('formData'); // Clear the form data after submission
        navigate('/dashboard');
      } catch (error) {
        console.error('Error sending video generation request:', error);
      }
    };

    if (!user) {
      alert('You have to login to create a series.');
      localStorage.setItem('formData', JSON.stringify(formData));
      setPostLoginCallback(() => executeSeriesCreation);
      try {
        const result = await googleSignIn();
        const loggedUser = result.user;
        localStorage.setItem('user', JSON.stringify(loggedUser));
        setUser(loggedUser);
        executeSeriesCreation();
      } catch (error) {
        console.error('Error during login:', error);
      }
      return;
    }

    executeSeriesCreation();
  };
  
   // Function to wait for a specified number of seconds
   const waitForSeconds = (seconds) => {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  };

  return (
    <div className='mb-20'>
      <div className='pb-10'>
        <h1 className='text-center text-black text-4xl font-bold pt-16'>CREATE A SERIES</h1>
        <p className='text-center text-black/70 font-semibold pt-4'>Schedule a series of Faceless Videos to post on auto-pilot.</p>
      </div>

      <div className='px-5 md:px-16'>
        <div className='bg-slate-600 max-w-2xl mx-auto px-8 py-10 md:px-16 shadow-xl rounded-lg'>
          <Step number='1' />
          <GradientHeading text='Destination' />
          <p className='text-lg text-white/70 font-semibold'>The account where your video series will be posted</p>

          <div className='w-full pb-14'>
            <SelectOption
              selectedOption={destination}
              setSelectedOption={setDestination}
              options={destinationOptions}
              defaultOption='Select Destination'
            />
          </div>

          <Step number='2' />
          <GradientHeading text='Content' />
          <p className='text-lg text-white/70 font-semibold'>What will your video series be about?</p>

          <div className='w-full pb-6'>
            <ContentSelect
              options={contentOptions}
              selectedOption={content}
              setSelectedOption={setContent}
              defaultOption='Choose Content'
              customContent={customContent}
              setCustomContent={setCustomContent}
              placeholder='Example Please share a concise and captivating account of a lesser-known, yet intriguing, historical event. The event MUST be real and factual. Begin with a captivating introduction or question to hook the audience.'
            />
          </div>

          <p className='text-lg text-white/70 font-semibold'>Narration Voice</p>

          <div className='w-full pb-6'>
            <VoiceOption
              selectedOption={narrator}
              setSelectedOption={setNarrator}
              options={narrationOptions}
              defaultOption='Choose Narrator Voice'
            />
          </div>

          <p className='text-lg text-white/70 font-semibold'>Video Language</p>

          <div className='w-full pb-6'>
            <SelectOption
              selectedOption={language}
              setSelectedOption={setLanguage}
              options={languageOptions}
              defaultOption='Choose Video Language'
            />
          </div>

          <p className='text-lg text-white/70 font-semibold'>Duration Preference</p>

          <div className='w-full pb-16'>
            <SelectOption
              selectedOption={duration}
              setSelectedOption={setDuration}
              options={durationOptions}
              defaultOption='Choose Video Duration'
            />
          </div>

          <Step number='3' />
          <GradientHeading text='Create' />
          <p className='text-lg text-white/70 font-semibold pb-5'>You will be able to preview your upcoming videos before posting</p>

          <div className='flex justify-center items-center'>
            <button className='bg-gradient-to-r from-primary to-blue-700 text-white py-3 px-20 text-lg rounded-lg font-semibold my-5' onClick={handleCreateSeries}>
              CREATE SERIES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
