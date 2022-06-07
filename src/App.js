import React, { Component,images }  from 'react';
import myWonderfulImage from './images/image-one.jpg'
import logo from './logo.svg';
import './style.css';
import bird from './video/bird.mp4'

function App() {
  return (
    <>
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title ">Mustapha</h1>
    <br />
    <img src="/logo512.png" alt="myimage" />

    <br />
     <img src={myWonderfulImage} alt ='myImage' width="500" height="600" />
  </div>
  <video loop autoPlay>
    
  </video>
  <video width={350} height={300} controls="sds">
    <source src={bird} type="video/mp4" />
  </video>
</>
  ); 
}

export default App;
