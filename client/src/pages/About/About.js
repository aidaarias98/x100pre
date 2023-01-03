import React from 'react'
import './About.css'
import CarouselSlide from '../../components/ImageCarousel/CarouselSlide'
import GUITAR from '../../assets/guitar.jpeg'
import MIC from '../../assets/OpenMic.jpeg'
import IMG1 from '../../assets/aboutus.jpg'


function About() {
  return (
    <>
    <CarouselSlide/>
    
    <div className='aboutcontainer'>
      <div className='abouttitle'>
        <h1>About Us</h1>
      </div>
      <div className='content'>
        <div className='article'>
        <h2>Who We Are</h2>
          <p>
          x100pre Records first started out as a small idea in a 23 year olds room. Now x100pre Records is a new and used record store in San Juan, Puerto Rico. We sell LPs, CDs, DVDs, 7"s, cassettes, stickers, patches, buttons, magazines , books, record storage & cleaning supplies, and more. We also sell a full line of turntables, needles, belts, and cartridges along with cleaning and storage supplies, sleeves, etc. We want to buy your LPs, 7"s, cassettes, turntables, stereo equipment, CDs, DVDs, etc. We also provide a space for bands to play, over 250 so far!
          </p>
        </div>
        <div className='image-section'>
          <img src={IMG1} alt='record store'/>
        </div>
      </div>
    </div>

    <div className='lowercontainer'>
      <div className='aboutrow'>
        <div className='heading-section'>
        <h1>Events</h1>
        <p>Looking For Something To Do?</p>
        </div>
        <div className='content-section'>
          <div className='card'>
            <img src={MIC} alt='open mic'/>
            <h4>Open Mic Night</h4>
            <p>Join us for our monthly open mic! Taking place on the 2nd Friday of every month, this event is the perfect opportunity to showcase your talent. </p>
          </div>
          <div className='card'>
            <img src={GUITAR} alt='guitar'/>
            <h4>Guitar Lessons</h4>
            <p>Learn everything you need to know about how to play and maintain your guitar from our skilled instructors. Lesson's range from $30 per hour.</p>
          </div>
        </div> 
      </div>
    </div>
      
    </>
  )
}




export default About