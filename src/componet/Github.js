import React from 'react';
import GitImage from './Git.png'; 

const Github = () => {
  const imageStyles = {
    height: '110px',
    width: '110px',
  };

  return (
    <img src={GitImage} alt="GitHub Logo" style={imageStyles} />

  );
}

export default Github;
