import React from 'react'

const Pricing = () => {
  return (
    <div className='max-w-6xl mx-auto px-5 mb-40'>
      {/* heading */}
      <div className=" flex justify-center items-center flex-col">
      <h1 className="bg-gradient-to-r from-primary to-blue-700 text-transparent text-5xl text-center lg:text-left font-bold leading-snug" style={{ backgroundClip: 'text' }}>Pricing
</h1>
          <p className='text-2xl text-textColor text-center pt-3 lg:text-left pb-8'>PAY FOR WHAT YOU NEED</p>
      </div>
      {/* card container */}
      <div className='bg-gradient-to-r from-primary to-blue-700 p-5 rounded-lg grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 '>
        {/* card 1 */}
        <div className=' bg-white rounded-lg p-8 hover:scale-105 transition-all duration-700'>
          <p className='text-center text-gray-400 font-bold pb-2'>FREE</p>
          <h1 className='font-bold text-4xl text-textColor text-center pb-6'>$0</h1>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p>Create <span className='font-bold'>1 Video</span></p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p>1 Series</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p>Edit & Preview Videos</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-wrong-50.png" alt="" 
            className='h-5 w-5'
            />
            <p className='line-through text-gray-400'>Auto Post To Channel</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-wrong-50.png" alt="" 
            className='h-5 w-5'
            />
            <p className='line-through text-gray-400'>HD Video Resolution</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-wrong-50.png" alt="" 
            className='h-5 w-5'
            />
            <p className='line-through text-gray-400'>Background Music</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-wrong-50.png" alt="" 
            className='h-5 w-5'
            />
            <p className='line-through text-gray-400'>No Watermark</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-wrong-50.png" alt="" 
            className='h-5 w-5'
            />
            <p className='line-through text-gray-400'>Download Videos</p>
          </div>

          <button className='bg-gradient-to-r from-primary to-blue-700 text-white py-2 mt-5 w-full text-xs rounded-lg font-bold'> TRY NOW</button>

        </div>
        {/* card 2 */}
        <div className=' bg-white rounded-lg p-8 hover:scale-105 transition-all duration-700'>
          <p className='text-center text-gray-400 font-bold pb-2'>STARTER</p>
          <h1 className='font-bold text-4xl text-textColor text-center pb-6'>$19</h1>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p>Posts <span className='font-bold'>3 Times A Week</span></p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p>1 Series</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p>Edit & Preview Videos</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p className=''>Auto Post To Channel</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p className=''>HD Video Resolution</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p className=''>Background Music</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p className=''>No Watermark</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p className=''>Download Videos</p>
          </div>

          <button className='bg-gradient-to-r from-primary to-blue-700 text-white py-2 mt-5 w-full text-xs rounded-lg font-bold'> TRY NOW</button>

        </div>
        {/* card 3 */}
        <div className=' bg-white rounded-lg p-8 hover:scale-105 transition-all duration-700'>
          <p className='text-center text-gray-400 font-bold pb-2'>DAILY</p>
          <h1 className='font-bold text-4xl text-textColor text-center pb-6'>$39</h1>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p>Posts <span className='font-bold'>Once A Day</span></p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p>1 Series</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p>Edit & Preview Videos</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p className=''>Auto Post To Channel</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p className=''>HD Video Resolution</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p className=''>Background Music</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p className=''>No Watermark</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p className=''>Download Videos</p>
          </div>

          <button className='bg-gradient-to-r from-primary to-blue-700 text-white py-2 mt-5 w-full text-xs rounded-lg font-bold'> TRY NOW</button>

        </div>
        {/* card 4 */}
        <div className=' bg-white rounded-lg p-8 hover:scale-105 transition-all duration-700'>
          <p className='text-center text-gray-400 font-bold pb-2'>HARDCORE</p>
          <h1 className='font-bold text-4xl text-textColor text-center pb-6'>$69</h1>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p>Posts <span className='font-bold'>Twice A Day</span></p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p>1 Series</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p>Edit & Preview Videos</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p className=''>Auto Post To Channel</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p className=''>HD Video Resolution</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p className=''>Background Music</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p className=''>No Watermark</p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <img src="./icons8-correct-50.png" alt="" 
            className='h-5 w-5'
            />
            <p className=''>Download Videos</p>
          </div>

          <button className='bg-gradient-to-r from-primary to-blue-700 text-white py-2 mt-5 w-full text-xs rounded-lg font-bold'> TRY NOW</button>

        </div>
      </div>
    </div>
  )
}

export default Pricing