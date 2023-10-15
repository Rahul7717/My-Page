import React from 'react'
import { Link } from 'react-router-dom'
import './pages/RotesPages/Routes.css'
const ABOUT = () => {
  return (
   <>
 <nav className='nn'> 
    <ul>
        <li className='p'>
            <Link to="/" className='home'>Home</Link>
        </li>

        <li className='p'>
        <Link to="/ABOUT" className='home' id='about'>About</Link>
        </li>

        <li className='p'>
        <Link to="/CONTACT" className='home'>Contact</Link>
        </li>

    </ul>
   </nav>
   <p className='line'></p>
   
<br />

  <h1 className='paragraph'> - Certainly! Please provide me with more information about your website and its purpose, so I can create a tailored about page paragraph for you. <br /><br /> - This information might include the name of your website, its mission, the products or services it offers, and any unique features or values you'd like to highlight. <br />
  <h1>Thank You...</h1></h1>
  
   </>

  )
}

export default ABOUT
