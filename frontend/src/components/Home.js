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

        <h2 className='test'>
          Freelance web developer with an eye for frontend design. Recent graduate of Flatiron School’s immersive full stack web development program. Acutely aware of current web trends and always hungry to learn.
        </h2>

        <Icons/>

        <h2>Want to work together? Feel free to reach out!</h2>

          <div>
            <Container textAlign='center' text className="icon-container">
              <a href="mailto:mdgarrett1984@gmail.com" target="_blank"><i className="massive icon envelope square"></i></a>
              <a href="https://github.com/MatthewDtotheG" target="_blank"><i className="massive icon github square"></i></a>
              <a href="https://www.linkedin.com/in/matthewdtotheg/" target="_blank"><i className="massive icon linkedin square"></i></a>
              <a href="https://twitter.com/MatthewDtotheG" target="_blank"><i className="massive icon twitter square"></i></a>
            </Container>
          </div>

      </div>
    );
  }
}

export default Home
