import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-6xl mx-auto px-5 pt-24 pb-14 flex flex-col gap-5 lg:flex-row justify-center items-center'>
      {/* left div */}
        <div className='flex flex-col justify-center items-center lg:items-start '>
          <h1 className="bg-gradient-to-r from-primary to-blue-700 text-transparent text-5xl text-center lg:text-left font-bold leading-snug" style={{ backgroundClip: 'text' }}>Faceless Videos on Auto-Pilot.</h1>
          <p className='text-2xl text-textColor text-center my-10 lg:text-left'>Our powerful AI video creation platform allows you to fully automate a faceless channel.</p>
          <button className='bg-gradient-to-r from-primary to-blue-700 text-white py-4 px-6 text-lg rounded-lg'>Try AutoShorts.ai for Free</button>
          <p className='text-sm text-gray-500 pt-5'>(No credit card required)</p>
        </div>
      {/* right div */}
        <div className='border-8 border-accent rounded-lg w-full mt-10 lg:mt-0'>
        <iframe
          className='w-full h-72 lg:h-96'
          src="https://www.youtube.com/embed/HHQdedGMLdE?si=L734V5caJXE9boVr"
          title="YouTube video player"
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
    </div>
  )
}

export default Hero