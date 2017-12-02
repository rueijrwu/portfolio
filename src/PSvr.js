import React, { Component } from 'react';

class PSvr extends Component {
  render() {
    var PUBLIC_URL = process.env.PUBLIC_URL;
    return (
      <div>
        <h3>PhaseSapce Virtual Reality</h3>
        <img src={PUBLIC_URL + "/image/psvr.jpg"} alt="psvr" style={{"width":"960px"}}/>
        <p style={{"text-align":"justify"}}>
          PhaseSpace System is an active optical system composed by cameras and 
          64 LED markers. These cameras can measure distance of markers and compute
          their position in space. To study natural, head-free, ocular motion, I 
          innovate a helmet system based on PhaseSpace. Compare other devices using 
          gyroscope or acceleration sensor, this system can measure head motion 
          with high resolution at high speed.
        </p>
        {/* <p>
          PSvr is an integrated system with PhaseSapce helmet and Oculus Rift DK1. 
          Instead of using the motion sensor from DK1,  
        </p> */}
      </div>
    )
  }
}

export default PSvr