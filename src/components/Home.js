import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';
import Fade from 'react-reveal/Fade';
import Icons from './Icons';

class Home extends Component {

  render() {
    return (
      <div>
        <div className="top-container">
          <img src="./icons/bgIMG.svg"/>
          <Fade bottom>
          <h1>Hi 👋 Im Matthew</h1>
          <h3>Full Stack Developer and Creative Technologist</h3>
          </Fade>
        </div>

        <Icons/>
      </div>
    );
  }
}

export default Home
