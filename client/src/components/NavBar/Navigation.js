
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/x100pre-logo.png'
import './Navigation.css'
import { Button } from '../Button/Button'



function Navigation() {
    const [click, setClick] = useState(false)
    const[button, setButton]=useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu =()=>setClick(false);

    const showButton=() =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    //only renders the signup once even if you refresh
    useEffect(()=>{
        showButton();
    },[]);

    window.addEventListener('resize', showButton);
    
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <img src={Logo} alt='logo' style={{width:'50px'}} ></img>
       
        x100pre Records
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>About Us</Link>
            </li>
            <li className='nav-item'>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
            </li>
            <li className='nav-item'>
                <Link to='/contactus' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
            </li>
            <li>
              <Link
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Cart
              </Link>
            </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>Cart</Button>}
      </div>
    </nav>
  )
}

export default Navigation







































// import React from 'react';
// import {Link} from 'react-router-dom';
// import Logo from '../assets/x100pre-logo.png';

// function Navigation() {
//   return (
//       <header>
//     <div className='navbar'>
//     <div className='logo'><a href="/" title="Home"><img src={Logo} alt='logo' style={{width:'100px'}} ></img></a></div>
//   <Link to= "/">Home </Link>
//   <Link to= "/aboutus"> About Us </Link>
//   <Link to= "/products"> Products</Link>
//   <Link to= "/contactus"> Contact Us </Link>
//   <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link>
//   </div>
//   </header>
//   )
// }

// export default Navigation

// import React from 'react'
// import {Link} from 'react-router-dom'
// import Logo from '../assets/x100pre-logo.png';

// function Navigation() {

 

//   return (
//     <nav className='navbar'>
//       <div className='logo'><a href="/" title="Home"><img src={Logo} alt='logo' style={{width:'100px'}} ></img></a></div>
//       <ul className='nav-links'>
//         <li><Link to= "/">Home </Link></li>
//         <li><Link to= "/aboutus"> About Us </Link></li>
//         <li><Link to= "/products"> Products</Link></li>
//         <li><Link to= "/contactus"> Contact Us </Link></li>
//         <li><Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link></li>
//       </ul>
//       {/* <img src={Logo} alt='' className='menu-btn'></img> */}
//     </nav>

    
//   )
// }

// export default Navigation

