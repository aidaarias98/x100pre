import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './VideoCarousel.css'
import BadBunny from '../videos/badbunny.mp4'
import SZA from '../videos/SZA - Garden (Say It Like Dat) (Official Video).mp4'
import SELENA from '../videos/Selena - La Carcacha (Official Music Video).mp4'
import HARRY from '../videos/Harry Styles - As It Was (Official Video).mp4'

const VideoCarousel = () => {

  return (
    <Carousel 
    autoPlay interval='9500'
    infiniteLoop={true}
    useKeyboardArrows={true}
    showThumbs={false}
    transitionTime={2000}
    animationHandler={'fade'}
    showStatus={false}

    >


        <div className='video'>
            
 
        <video 
        src={BadBunny}
        autoPlay={true}
        preLoad="auto"
        loop
        muted>
  
  </video>
  
 
        </div>
        <div className='video'>
        <video 
        src={SZA}
        autoPlay={true}
        preLoad="auto"
        loop
        muted
       >
         
  </video>
        </div>
        <div className='video'>
        <video 
        autoPlay={true}
        preLoad="auto"
        loop
        muted
        src={SELENA}
       >
  </video>
        </div>
        <div className='video'>
        <video 
        src={HARRY}
        autoPlay={true}
        preLoad="auto"
        loop
        muted
       >
         
  </video>
        </div>
        </Carousel>
  );
}

export default VideoCarousel;