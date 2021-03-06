import React, { Component } from 'react';
import { Link, Route, Switch} from 'react-router-dom';
import './App.css';
import AboutMe from './AboutMe';
import APenv from './APenv';
import BEyeRIS from './BEyeRIS';
import DDPI from './DDPI';
import Dualtrack from './Dualtrack';
import PSvr from './PSvr';
import Publication from './Publication';
import Termite from './Termite';
import Misc from './Misc';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="App-nav">
          <h4><Link to='/portfolio' className="App-navLink">About me</Link></h4>
          <h4>Project</h4>
          <ul>
            <li><Link to='/portfolio/apenv' className="App-navLink">APenv</Link></li>
            <li><Link to='/portfolio/beyeris' className="App-navLink">B-EyeRIS</Link></li>
            <li><Link to='/portfolio/ddpi' className="App-navLink">DDPI</Link></li>
            <li><Link to='/portfolio/dualtrack' className="App-navLink">Dualtrack</Link></li>
            <li><Link to='/portfolio/psvr' className="App-navLink">PSvr</Link></li>
            <li><Link to='/portfolio/termite' className="App-navLink">T-Robots</Link></li>
            <li><Link to='/portfolio/misc' className="App-navLink">Others</Link></li>
          </ul>
          <h4><Link to='/portfolio/publication' className="App-navLink">Publication</Link></h4>
          <h4><a href="mailto:rueijrwu@bu.edu" className="App-navLink">Contact</a></h4>
        </nav>
        <main className="App-main">
          <Switch>
            <Route exact path='/portfolio' component={AboutMe}/>
            <Route path='/portfolio/apenv' component={APenv}/>
            <Route path='/portfolio/beyeris' component={BEyeRIS}/>
            <Route path='/portfolio/ddpi' component={DDPI}/>
            <Route path='/portfolio/dualtrack' component={Dualtrack}/>
            <Route path='/portfolio/psvr' component={PSvr}/>
            <Route path='/portfolio/publication' component={Publication}/>
            <Route path='/portfolio/termite' component={Termite}/>
            <Route path='/portfolio/misc' component={Misc}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
