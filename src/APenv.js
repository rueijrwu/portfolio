import React, { Component } from 'react';

class APenv extends Component {
  render() {
    return (
      <div className="App-content">
        <img src={PUBLIC_URL + "/image/me.jpg"} alt="me" width="300" className="aboutme-img"/>
        <h3>APenv</h3>
        <p>
          I developed APenv which integrates different devices includes DPI, 
          Bionocular-DPI, DDPI, BOSS, Phasespace and HMD. APenv is C++ library 
          and designed for neuron and biomedical scientists to allow the users 
          build visual interactive experiments on regular monitor and HMD very 
          easily.         
        </p>
      </div>
    )
  }
}

export default APenv