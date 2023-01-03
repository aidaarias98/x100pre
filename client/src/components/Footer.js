import React from 'react'
import Instagram from '../assets/instagram.png'
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'


function Footer() {
  return (
    <footer>
        <br/>
        <div id="socials">
            <a href="https://facebook.com"><img src={Facebook} alt="facebook logo"/></a>
            <a href="https://twitter.com"><img src={Twitter} alt="twitter logo"/></a>
            <a href="https://instagram.com"><img src={Instagram} alt="instagram logo"/></a>
        </div>

        <div id="last">
            <p>500 Av. Arterial B, San Juan, 00918, Puerto Rico  |  (888) 999-8212  |  info@x100prerecords.com</p>
            <p>&copy; x100pre Records 2022</p>
        </div>
        <br/>

        <div id="payment">
            <i className="fa-brands fa-cc-visa fa-xl"></i>
            <i className="fa-brands fa-cc-mastercard fa-xl"></i>
            <i className="fa-brands fa-cc-discover fa-xl"></i>
            <i className="fa-brands fa-cc-amex fa-xl"></i>
            <i className="fa-brands fa-cc-apple-pay fa-xl"></i>
        </div>
</footer>
  )
}

export default Footer