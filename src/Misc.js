import React, { Component } from 'react';

class Misc extends Component {
  render() {
    var PUBLIC_URL = process.env.PUBLIC_URL;
    return (
      <div className="App-content">
        <h3>Miscellaneous projects</h3>
        <img src={PUBLIC_URL + "/image/misc.png"} alt="misc" style={{"width":"960px"}}/>
        <p style={{"text-align":"justify"}}>
          I led several projects and contributed from their design to fabrication.
        </p>
      </div>
    )
  }
}

export default Misc