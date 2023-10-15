import React from 'react'
import HOME from '../../HOME'
import ABOUT from '../../ABOUT'
import CONTACT from '../../CONTACT'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const RPages = () => {
  return (
    
    <>
    
    <div className='ap'> 

<BrowserRouter>

<Routes>

<Route path="/" element={< HOME/>} />
<Route path="About" element={< ABOUT/>} />
<Route path="Contact" element={< CONTACT/>} />


</Routes>

</BrowserRouter>

</div>
   
    </>
  )
}

export default RPages
