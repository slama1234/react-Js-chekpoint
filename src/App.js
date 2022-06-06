import React, { Component,images }  from 'react';
import myWonderfulImage from './images/image-one.jpg'
import logo from './logo.svg';
import './style.css';

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
  <video width={320} height={240} controls="">
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</>
  ); 
}

export default App;
