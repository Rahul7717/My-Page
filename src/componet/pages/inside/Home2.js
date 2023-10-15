import React from 'react'
import './Display.css'
import Layout from './inside-Routes-Pages/Layout'
import More2 from './inside-Routes-Pages/More2'
import Html from './inside-Routes-Pages/Html'
import Css from './inside-Routes-Pages/Css'
import Jscript from './inside-Routes-Pages/Jscript'
import Bootstrap from './inside-Routes-Pages/Bootstrap'
import Reac from './inside-Routes-Pages/Reac'
import Tailwind from './inside-Routes-Pages/Tailwind'
import Python from './inside-Routes-Pages/Python'
import Sql from './inside-Routes-Pages/Sql'
import Git from './inside-Routes-Pages/Git'


const Home2 = () => {
  return (
 <>

<div className='container1'>
<h1 className='skills'>-- SKILLS --</h1>

    <div className='main2'>
        
    
        <br />
       
     
    </div>
    <div className='skills-list'> 
    
    <nav>
        <ul id='grid'>
            <li id='li'>
           <a href="https://www.geeksforgeeks.org/html/"><Html/></a>
           <h1 className='page-name'>HTML</h1>
            </li>

            <li id='li'>
            <a href="https://www.w3schools.com/css/" className='background'><Css/></a>
            <h1 className='page-name'>CSS</h1>
            </li>

            <li id='li'>
            <a href="https://www.geeksforgeeks.org/javascript/" className='background'><Jscript/></a>
            <h1 className='page-name'>JAVASCRIPT</h1>
            </li>

        </ul>

    </nav>
<br />

<nav>
<ul id='grid'>
            <li id='li'>
            <a href="https://getbootstrap.com/" className='background'><Bootstrap/></a>
            <h1 className='page-name'>BOOTSTRAP</h1>
            </li>

            <li id='li'>
            <a href="https://www.geeksforgeeks.org/learn-reactjs/" className='background'><Reac/></a>
            <h1 className='page-name'>REACT</h1>
            </li>

            <li id='li'>
            <a href="https://tailwindcss.com/docs/installation" className='background'><Tailwind/></a>
            <h1 className='page-name'>TAILWIND</h1>
            </li>

        </ul>

    </nav>
    <br />
    <nav>
    <ul id='grid'>
            <li id='li'>
            <a href="https://www.geeksforgeeks.org/introduction-to-python/" className='background'><Python/></a>
            <h1 className='page-name'>PYTHON</h1>
            </li>

            <li id='li'>
            <a href="https://www.tutorialspoint.com/sql/index.htm" className='background'><Sql/></a>
            <h1 className='page-name'>MYSQL</h1>
            </li>

            <li id='li'>
            <a href="https://www.w3schools.com/git/git_intro.asp?remote=github" className='background'><Git/></a>
            <h1 className='page-name'>GIT</h1>
            </li>

        </ul>

    </nav>
     </div>
</div>
 </>
  )
}

export default Home2
