import React, { Component } from 'react';

class Dualtrack extends Component {
  render() {
    return (
      <div>
        <h3>Dualtrack</h3>
        <iframe title="ddpi-video" width="800" height="450" src="https://www.youtube.com/embed/rDHsPbxmkM0?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
        <p style={{"text-align":"justify"}}>
        Dualtrack is an hight speed object recognition and tracking algorithm 
        implement on Nvidia GPU.
        </p>
      </div>
    )
  }
}

export default Dualtrack