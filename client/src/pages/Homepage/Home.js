import React from 'react'
import '../Homepage/Home.css'
import VideoCarousel from '../../components/VideoCarousel/VideoCarousel'
import Verano from '../../assets/images-products/verano.jpg'
import Ones from '../../assets/images-products/ones.jpg'
import TS3 from '../../assets/images-products/TS3.webp'
import TS13 from '../../assets/images-products/TS13.webp'
import Lessons from '../../assets/guitar.jpeg'
import Mic from '../../assets/OpenMic.jpeg'

function Home() {

 
  return (
    <>
    
    <header className='hero'>
        <div className='header-content'>
            <h2>Explore Music</h2>
            <div className='line'></div>
            <h1>x100pre Records</h1>
            <a href="/products" className= "btn"> Shop Now!</a>
        </div>
    </header>

    <section className='events'>
        <div className='title'>
            <h1 className='eventtitle'>Upcoming Events</h1>
            <div className='line'></div>
        </div>
        <div className='row'>
            <div className='col'>
                <img className='lessons' src={Lessons} alt=''></img>
                <h4>Guitar Classes</h4>
                <p>Learn Acoustic or electric guitar by an experienced instructor and learn to play today. It's never to late to learn. All ages. ukulele lessons.</p>
                <br/>
                <a href="/aboutus" className= "btn"> Learn More</a> 
            </div>
            <div className='col'>
                <img className='mic' src={Mic} alt=''></img>
                <h4>Open Mic Night</h4>
                <p>Come vibe with us at our Open Mic night. Share your talents in front of a live audience through song, poetry or rap!</p>
                <br/>
                <a href="/aboutus" className= "btn"> Learn More</a> 
            </div>
        </div>
    </section>

    <section className='explore'>
        <div className='explore-content'>
        <h1>EXPLORE YOUR SOUND</h1>
        <div className='line'></div>
        <p>x100pre Records has partnered with Apple Music. Free 1 month trial to get a feel for your sound. Enjoy a variety of music, artists, playlists and more!</p>
        <a href="https://www.apple.com/apple-music/" className= "btn"> Learn More</a> 
        </div>
    </section>

    <section className='records'>
        <div className='row'>
            <div className='col content-col'>
            <h1>Fan Favorites</h1>
            <div className='line'></div>
            <p>Check out some of the top sellers from this month! And don't forget to check out the new vinyls that recently have been released.</p>
            <a href="/products" className= "btn"> Learn More</a> 
        </div>
        <div className='col image-col'>
            <div className='image-gallery'>
            <img src={Verano} alt='un verano sin ti album'></img>
            <img src={Ones} alt='ones album'></img>
            <img src={TS3} alt='cltr album'></img>
            <img src={TS13} alt='harrys house album'></img>
            </div>
        </div>
        
        </div>
    </section>
<VideoCarousel/>



    
    


    </>


  )
}

export default Home


