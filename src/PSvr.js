import React, { Component } from 'react';

class PSvr extends Component {
  render() {
    var PUBLIC_URL = process.env.PUBLIC_URL;
    return (
      <div>
        <h3>PhaseSapce Virtual Reality</h3>
        <img src={PUBLIC_URL + "/image/psvr.jpg"} alt="psvr" style={{"width":"960px"}}/>
        <p style={{"text-align":"justify"}}>
          Regular Head Mount Display (HMD) like VR and AR use gyroscope or 
          acceleration sensor to measure head motion to present virtual 
          enviroments. These sensors are not accurate enough to study natural 
          (head-free) small ocular motion. Hence, I prototype PSvr, a framework 
          integrates HMD with PhaseSapce which is an active optical motion 
          detector with high spped. Based on PhaseSpace, I build a innovative 
          helmet system to measure pricise head motion. 
        </p>
      </div>
    )
  }
}

export default PSvr