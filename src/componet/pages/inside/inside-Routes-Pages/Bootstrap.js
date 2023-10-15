import React from 'react'
import Image from './bootstrap.png'
const Bootstrap = () => {
    const img = {
        hight:'50px',
        width:'140px',
        

    }
  return (
    <>
    <img src={Image} style={img} alt="Image" />
    </>
  )
}

export default Bootstrap
