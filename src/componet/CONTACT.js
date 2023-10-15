import React from 'react'
import { Link } from 'react-router-dom'
import Github from './Github'
import Insta from './Insta'
import Linkedin from './Linkedin'
import './Contat.css'


const CONTACT = () => {
  return (
   <>
    
  <nav className='nn'> 
    <ul>
        <li className='p'>
            <Link to="/" className='home'>Home</Link>
        </li>

        <li className='p'>
        <Link to="/ABOUT" className='home'>About</Link>
        </li>

        <li className='p'>
        <Link to="/CONTACT" className='home'>Contact</Link>
        </li>

    </ul>
   </nav>

   <p className='line'></p>
   
<br />


<div className='social_media'>
  <nav className='navs'>
    <ul className='icons'>

      <li className='social-icons'>
        <a href="https://github.com/dashboard"><Github/></a><br />
        <h1 className='git'>GitHub</h1>
      </li>

      <p id='lines'></p>

      <li className='social-icons'>
        <a href="https://www.instagram.com/rahuldobriya/"><Insta/></a><br />
        <h1 className='git'>Linked-In</h1>
      </li>

      <p id='lines'></p>

      <li className='social-icons'>
        <a href="https://www.linkedin.com/in/rahul-dobariya-268b69179/"><Linkedin/></a><br />
        <h1 className='git'>Instagrame</h1>
      </li>
      
      <p id='lines'></p>
      
    </ul>
  </nav>
</div>

  
   </>
  )
}

export default CONTACT
