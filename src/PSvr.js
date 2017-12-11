import React, { Component } from 'react';

class PSvr extends Component {
  render() {
    var PUBLIC_URL = process.env.PUBLIC_URL;
    return (
      <div className="App-content">
        <h3>PhaseSapce Virtual Reality</h3>
        <img src={PUBLIC_URL + "/image/psvr.jpg"} alt="psvr" style={{"width":"960px"}}/>
        <p style={{"text-align":"justify"}}>
          I prototype PSvr, a framework integrates HMD with PhaseSapce which is 
          an active optical motion detector with high spped. Regular Head Mount 
          Display (HMD) like VR and AR use gyroscope or acceleration sensor to 
          measure head motion to transform virtual enviroments. These sensors 
          are not accurate enough to study natural (head-free) small ocular motion. 
          Based on PhaseSpace, I build a innovative helmet system to measure 
          pricise head motion. This helmet system  has been applied to study 
          the multimodal integration in spatial localization conducted by 
          Professor Martina Poletti.
        </p>
        <img src={PUBLIC_URL + "/image/ps.png"} alt="ps" style={{"width":"960px"}}/>
      </div>
    )
  }
}

export default PSvr