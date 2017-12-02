import React, { Component } from 'react';

class PSvr extends Component {
  render() {
    return (
      <div>
        <h3>PhaseSapce Virtual Reality</h3>
        <img src="portfolio/image/psvr.jpg" alt="psvr" style={{"width":"800px"}}/>
        <p style={{"text-align":"justify"}}>
        Psvr is a system which integrates PhaseSpace and Head Mount Display 
        (HMD). PhaseSapce system use active infrared optical markers to capture 
        precise body motion. PSvr is able to measure small head motion at high 
        speed and present image to HMD to achieve precise Virtual Reality.
        </p>
      </div>
    )
  }
}

export default PSvr