import { MdAlternateEmail } from 'react-icons/md';
import { IoLogoTiktok } from 'react-icons/io5';
import { FaPlay, FaYoutube } from 'react-icons/fa';
import audio1 from '../../public/alloy.mp3'
import audio2 from '../../public/echo.mp3'
import audio3 from '../../public/onyx.mp3'

export const durationOptions = [
    { id: 1, name: '30 to 60 seconds' },
    { id: 2, name: '60 to 90 seconds' },
  ];
  
  
  
  
  export const destinationOptions = [
    { id: 1, icon: <MdAlternateEmail />, name: 'Email Me Instead' },
    { id: 2, icon: <IoLogoTiktok />, name: 'Link a TikTok Account' },
    { id: 3, icon: <FaYoutube />, name: 'Link a YouTube Account' },
   
  ];
  
  
  
  export const languageOptions = [
    { id: 1,  name: 'English US' },
    { id: 2,  name: 'Czech CZ' },
    { id: 3,  name: 'Danish DK' },
    { id: 4,  name: 'Dutch UL' },
    { id: 5,  name: 'French FR' },
    { id: 6,  name: 'German DE' },
    { id: 7,  name: 'Greek GR' },
    { id: 8,  name: 'Hindi IN' },
    { id: 9,  name: 'Indonesian ID' },
    { id: 10,  name: 'Italian IT' },
    { id: 11,  name: 'Japanese JP' },
    { id: 12,  name: 'Norwegian NO' },
    { id: 13,  name: 'Polish PL' },
    { id: 14,  name: 'Portuguese PT' },
    { id: 15,  name: 'Russian RU' },
    { id: 16,  name: 'Spanish ES' },
    { id: 17,  name: 'Swedish SE' },
    { id: 18,  name: 'Turkish TR' },
    { id: 19,  name: 'Ukrainian UA' },
  ];
  
  
  
  export const contentOptions = [
    { id: 1,  name: 'Random AI Story' },
    { id: 2,  name: 'Scary Stories' },
    { id: 3,  name: 'Motivational' },
    { id: 4,  name: 'Bedtime Stories' },
    { id: 5,  name: 'Interesting History' },
    { id: 6,  name: 'Fun Facts' },
    { id: 7,  name: 'Long Form Jokes' },
    { id: 8,  name: 'Life Pro Tips' },
    { id: 9,  name: 'ELI5' },
    { id: 10,  name: 'Philosophy' },
    { id: 11,  name: 'Product Marketing' },
    { id: 12,  name: 'Custom' },
   
  ];
  
  
  
  export const narrationOptions = [
    { id: 1, icon: <FaPlay />,  name: 'Echo', audio: audio1},
    { id: 2, icon: <FaPlay />, name: 'Alloy', audio: audio2 },
    { id: 3, icon: <FaPlay />, name: 'Onyx', audio: audio3 },
    { id: 4, icon: <FaPlay />, name: 'Fable', audio: audio3 },
    { id: 5, icon: <FaPlay />, name: 'Nova', audio: audio3 },
    { id: 6, icon: <FaPlay />, name: 'Shimmer', audio: audio3 },
  ];