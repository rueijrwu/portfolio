import React, { Component } from 'react';

class Termite extends Component {
  render() {
    var PUBLIC_URL = process.env.PUBLIC_URL;
    return (
      <div className="App-content">
        <h3>Termite Robots</h3>
        <img src={PUBLIC_URL + "/image/termite.png"} alt="termite" style={{"width":"960px"}}/>
        <p style={{"text-align":"justify"}}>
          TERMES is a decentralized distributed system to automatically build
          3D structure by using precompiled single-path algorithm. However, most
          structure is complicated and can not be constructed by a single path.
          I developed new algorithm and software package to build 3D structure 
          with multi path. This algoirithm defines the probability of each path 
          and guides TERMES robots. 
        </p>
      </div>
    )
  }
}

export default Termite