import React, { Component } from 'react';

class Publication extends Component {
  render() {
    return (
      <div>
        <h3>Publication</h3>
        <ul style={{"line-height":"30px"}}>
          <li>Wang CC, Wu R Jr et al.,  Label-free discrimination of normal and 
          pulmonary cancer tissues using multiphoton fluorescence ratiometric 
          microscopy, Appl. Phys. Lett. 97, 2010</li>
          <li>Lin SJ, Hsu CJ, Wu R Jr et al., Quantitative multiphoton imaging 
          for guiding basal-cell carcinoma removal, Proceedings of SPIE, 2007</li>
          <li>Lin SJ, Wu R Jr et al., Evaluating cutaneous photoaging by use of multiphoton 
          fluorescence and second-harmonic generation microscopy, Opt Lett. 2005</li>
        </ul>
      </div>
    )
  }
}

export default Publication