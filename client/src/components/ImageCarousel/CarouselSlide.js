import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Carousel.css'
import Slide1 from '../../assets/slider/slider1.jpg'
import Slide2 from '../../assets/slider/slider2.jpg'
import Slide3 from '../../assets/slider/slider3.jpg'
import Slide4 from '../../assets/slider/slider4.jpg'

const CarouselSlide = () => {
  return (
    <Carousel 
    autoPlay interval='2100'
    infiniteLoop={true}
    useKeyboardArrows={true}
    showThumbs={false}
    transitionTime={2000}
    animationHandler={'fade'}
    showStatus={false}
    
    >
        <div className='image'>
          <img src={Slide2} alt='' />
        </div>
        <div className='image'>
          <img src={Slide1} alt='' />
        </div>
        <div className='image'>
          <img src={Slide3} alt='' />
        </div>
        <div className='image'>
          <img src={Slide4} alt='' />
        </div>
        </Carousel>
  );
}

export default CarouselSlide;