import React, { Component } from 'react';

class BEyeRIS extends Component {
  render() {
    return (
      <div>
        <h3>Binocular EyeRIS</h3>
        <img src="portfolio/image/bdpi-setup.jpg" alt="bdpi-setup" style={{"width":"800px"}}/>
        <p style={{"text-align":"justify"}}>
        DPI eye-tracker (Generation 6 by Fourward Technologies), is a device 
        that can measure ocular motion with high resolution at hight speed.  
        With two DPI eye-tracker, we can measure binocular eye movement. I 
        developed the interface in C++ to control Binocular eye tracker and 
        measure eye movement.
        </p>
      </div>
    )
  }
}

export default BEyeRIS