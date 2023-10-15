import React from 'react'
import Image from './tailwinds.png'
const Tailwind = () => {
    const img = {
        marginTop: '20px',
        width: '190px'
    };
    
  return (
    <>
    <img src={Image} style={img} alt="Tailwind CSS Logo" />
    </>
  )
}

export default Tailwind
