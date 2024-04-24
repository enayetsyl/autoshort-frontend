import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import SimpleSlider from './SimpleSlider';

const SlideShow = () => {
  return (
    <div className=''>
      {/* image div */}
      <div className='flex justify-center items-center py-16'>
      <img 
      className='h-20 '
      src="./SquigleArrowShort.png" alt="" />
      </div>
      <div className='bg-primary'>
        <div className='max-w-6xl mx-auto'>
     <SimpleSlider/>
        </div>
      </div>
    </div>
  )
}

export default SlideShow