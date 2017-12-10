import React, { Component } from 'react';

class APenv extends Component {
  render() {
    var PUBLIC_URL = process.env.PUBLIC_URL;
    return (
      <div className="App-content">
        <img src={PUBLIC_URL + "/image/me.jpg"} alt="me" width="300" className="aboutme-img"/>
        <h3>APenv</h3>
        <p>
          I developed APenv, a 3D engine in C++. APenv integrates different devices 
          includes DPI, Bionocular-DPI, DDPI, BOSS, Phasespace and HMD. APenv is 
          designed for neuron, biomedical scientists and psychologist to allow them 
          build interactive visual experiments on regular monitor and HMD very easily.      
        </p>
      </div>
    )
  }
}

export default APenv