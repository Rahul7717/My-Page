import React from 'react'
import Image from './css.png'
const Css = () => {
    const img = {
        hight:'80px',
        width:'140px'

    }
  return (
    <>
    <img src={Image} style={img}  alt="Image" />
    </>
  )
}

export default Css
