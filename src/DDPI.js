import React, { Component } from 'react';

class DDPI extends Component {
  render() {
    var PUBLIC_URL = process.env.PUBLIC_URL;
    return (
      <div className="App-content">
        <h3>Digital Dual Purkinge Image</h3>
        <img src={PUBLIC_URL + "/image/dpi.png"} alt="dpi" style={{"width":"960px"}}/>
        <p>
          Purkinje Images are the refections of different layers of eye structure. 
          Interestingly, the first Purkinje, P1 (the reflection from the front 
          surface of cornea), and the fourth Purkinje image, P4 (the reflection 
          from the back surface of the lens), are located closely to each other. 
          This feature eliminates the artifacts from the translational eye motion 
          and improves the precision of the measurement on eye rotation by 
          resolving the displacement of two Purkinje images.
        </p>
        <img src={PUBLIC_URL + "/image/ddpi-setup.png"} alt="ddpi-setup" style={{"width":"960px"}}/>
        <p>
          Digital Dual Purkinge Image is a simple optical image system to measure 
          oculor motion. Compared to DPI which measures the reflection by a single 
          photoelectric sensor, DDPI captures the whole  image of eye by a CCD. 
          Because of the simplicity of DDPI, it is able to be integrated into head 
          mount devices (HMD) such as VR and AR. One of my furture research will 
          focus on building a HMD device which can percieve user's visual attention 
          and augment the ability of visual percption.
        </p>
      </div>
    )
  }
}

export default DDPI