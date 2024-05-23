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
    // { id: 2, icon: <IoLogoTiktok />, name: 'Link a TikTok Account' },
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
    { id: 1,  name: 'AI Anecdotes' },
    { id: 2,  name: 'Spooky Tales' },
    { id: 3,  name: 'Uplifting Moments' },
    { id: 4,  name: 'Nighttime Narratives' },
    { id: 5,  name: 'Historical Highlights' },
    { id: 6,  name: 'Fascinating Facts' },
    { id: 7,  name: 'Extended Laughs' },
    { id: 8,  name: 'Life Hacks' },
    { id: 9,  name: 'Simplified Insights' },
    { id: 10,  name: 'Deep Thoughts' },
    { id: 11,  name: 'Marketing Mastery' },
    // { id: 12,  name: 'Custom' },
   
  ];
  
  
  
  export const narrationOptions = [
    { id: 1, icon: <FaPlay />,  name: 'Reverberate', audio: audio1},
    { id: 2, icon: <FaPlay />, name: 'Metal', audio: audio2 },
    { id: 3, icon: <FaPlay />, name: 'Obsidian', audio: audio3 },
    { id: 4, icon: <FaPlay />, name: 'Myth', audio: audio3 },
    { id: 5, icon: <FaPlay />, name: 'Supernova', audio: audio3 },
    { id: 6, icon: <FaPlay />, name: 'Glimmer', audio: audio3 },
  ];