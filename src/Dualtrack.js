import React, { Component } from 'react';

class Dualtrack extends Component {
  render() {
    return (
      <div>
        <h3>Dualtrack</h3>
        <iframe title="ddpi-video" width="960" height="450" src="https://www.youtube.com/embed/CpbSYn072iU?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
        <p style={{"text-align":"justify"}}>
          Duraltrack is an object recognition algorithm to track Purkinje Image 
          at high speed. To achieve real-time tracking, Dualtrack is written in 
          CUDA and implement on Nvidia GPU. This video is recorded by DDPI at 
          and 340Hz. Dualtrack algorithm is applied to track Purkinje images where 
          first Purkinje image (P1) is red and fourth Purkinje image (P4) is green. 
        </p>
      </div>
    )
  }
}

export default Dualtrack