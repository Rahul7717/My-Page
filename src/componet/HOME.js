import React from 'react'
import { Link } from 'react-router-dom'
import './pages/RotesPages/Routes.css'
import Home1 from './pages/inside/Home1'
import Displayroute from './pages/inside/Displayroute'
import Home2 from './pages/inside/Home2'

const HOME = () => {
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

   <h1 className='animated'></h1>
  
<h1 className='heading'><i className='hello' id='change'>HELLO</i><b id='change'>, I AM
  <br />
  <b id='change'>RAHUL</b>
  </b>
    <br />
    <b id='change'>WELCOME</b> <i className='hello' id='change'>TO</i> <br /> <b id='change'> MY </b> <br />
    <i className='title' id='change'>FRONT-END - WORLD</i> 
</h1>
<br />
<br />
<br />
<section>
  <div className='middle-page'><Home1/></div>
</section>

<br /><br />
<footer>
  <div className='last-page'><Home2/></div>
</footer>

  
   </>
  )
}

export default HOME
