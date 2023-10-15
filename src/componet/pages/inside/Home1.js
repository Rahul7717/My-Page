import React from 'react'
import './inside.css'
import Merge from './inside-Routes-Pages/Merge'
import { Link } from 'react-router-dom'


const Home1 = () => {
       
    
  return (
<>
<h1 className='project'>MY PROJECTS</h1><br /><br />
<div className='container'>
    <div className='cards'>
        
<ul>
    <li className='cards1'>
        <a href="https://live-news-web-five.vercel.app/">LIVE NEWS DATA</a>
    </li>
   
    
    <li className='cards1'>
        <a href="https://rahul7717.github.io/reactlive/">TO-DO-LIST</a>
    </li>
  
    <li className='cards1'>
        <a href="https://live-weather-data.vercel.app/">WEATHER_WEB</a>
    </li>
    
</ul>



    </div>
    
    
</div>
<br /><br /><br /><br /><br /><br />


</>
  )
}

export default Home1;
