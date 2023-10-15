import React from 'react'
import Image from './html.png'
const Html = () => {
    const img = {
        hight:'80px',
        width:'140px'

    }
  return (
    <>
    <img src={Image} style={img} alt="HTML Logo" />
    </>
  )
}

export default Html
