import React from 'react';
import image from './image.png'

const Lip2Speech = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      background: 'rgb(12, 48, 125)',
      margin:0
    }}>
      <img src={image} alt="Automated lip2speech synthesis" style={{width: '80%'}}/>
      <div  style={{ color: 'white', margin: 100 }}>
        <h1 style={{ fontSize: 55 }} >Automated Lip Reading</h1>
      </div>
    </div>
  );
};

export default Lip2Speech;
