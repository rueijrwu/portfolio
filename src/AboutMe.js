import React, { Component } from 'react';
import "./AboutMe.css"

class AboutMe extends Component {
  render() {
    var PUBLIC_URL = process.env.PUBLIC_URL;
    return (
      <div className="App-content">
        <img src={PUBLIC_URL + "/image/me.jpg"} alt="me" width="300" className="aboutme-img"/>
        <h3>Ruei-Jr Wu</h3>
        <p>
          I am a scientist with training in physics and biomedical engineer. I have 
          participated in multiple scientific projects, primarily by contributing to 
          design of new devices, approaches, and methods for signal processing. My 
          work has led to scientific publications as well as to new systems for 
          experimental studies in visual neuroscience. Currently I work at APLab at 
          Boston Unverisity as Biomedical Engineer and focus on the development of 
          eye-tracker. I lead the Engineer team  to develope serveral prototypes and 
          software from design to farbrication. I am interested in integrating 
          biomedcial devices to measure body motion and oculor motion.    
        </p>
        <p>
          Learn more about my education in my <a href={PUBLIC_URL + "/download/CV.pdf"} className="aboutme-cv">Resume</a>.
        </p>
      </div>
    )
  }
}

export default AboutMe