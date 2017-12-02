import React, { Component } from 'react';

class PSvr extends Component {
  render() {
    var PUBLIC_URL = process.env.PUBLIC_URL;
    return (
      <div>
        <h3>PhaseSapce Virtual Reality</h3>
        <img src={PUBLIC_URL + "/image/psvr.jpg"} alt="psvr" style={{"width":"960"}}/>
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