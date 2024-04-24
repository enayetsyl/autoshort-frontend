import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds
    centerMode: true, // Center mode to add a gap between cards
    centerPadding: '60px' // Set the gap size between cards
  };

  return (
    <Slider {...settings}>
    <div className='h-60 bg-secondary rounded-lg flex justify-center items-center '>
      <h3>Slide 1</h3>
    </div>
    <div className='h-60 bg-secondary rounded-lg flex justify-center items-center mx-10'>
      <h3>Slide 2</h3>
    </div>
    <div className='h-60 bg-secondary rounded-lg flex justify-center items-center '>
      <h3>Slide 3</h3>
    </div>
    {/* Add more slides as needed */}
  </Slider>
  );
};

export default SimpleSlider;
