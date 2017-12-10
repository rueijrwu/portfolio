import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BEyeRIS extends Component {
  render() {
    var PUBLIC_URL = process.env.PUBLIC_URL;
    return (
      <div>
        <h3>Binocular EyeRIS</h3>
        <img src={PUBLIC_URL + "/image/bdpi-setup.jpg"} alt="bdpi-setup" style={{"width":"960px"}}/>
        <p style={{"text-align":"justify"}}>
          I led the engineering team to develop a framework, Binocular EyeRIS, to 
          measure binocular movement with high resolution at high speed. This 
          framework includes two eye-tracker (To understand how DPI work, 
          please check <Link to='/portfolio/ddpi'>DDPI</Link>) , two translational 
          stages, head reset and data acquisition devices. EyeRIS is an software 
          integrated into this framework to present visual stimulus and highly 
          synchronize with eye-trackers and monitor in real time. 
        </p>
      </div>
    )
  }
}

export default BEyeRIS