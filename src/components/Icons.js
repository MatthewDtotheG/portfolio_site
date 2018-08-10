import React from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';
import Fade from 'react-reveal/Fade';


const Icons = () => (
      <div>
        <Container textAlign='center' text>
          <Fade bottom cascade>
            <div className="icon-container">
              <img className="massive icon" src="./icons/javascript.svg" alt=""/>
              <img className="massive icon" src="./icons/html-5.svg" alt=""/>
              <img className="massive icon" src="./icons/css-3.svg" alt=""/>
              <img className="massive icon" src="./icons/ruby.svg" alt=""/>
              <img className="massive icon" src="./icons/github-octocat.svg" alt=""/>
              <img className="massive icon" src="./icons/git-icon.svg" alt=""/>
              <img className="massive icon" src="./icons/babel.svg" alt=""/>
              <img className="massive icon" src="./icons/redux.svg" alt=""/>
              <img className="massive icon" src="./icons/react.svg" alt=""/>
              <img className="massive icon" src="./icons/nodejs.svg" alt=""/>
              <img className="massive icon" src="./icons/gulp.svg" alt=""/>
              <img className="massive icon" src="./icons/bootstrap.svg" alt=""/>
              <img className="massive icon" src="./icons/postgresql.svg" alt=""/>
              <img className="massive icon" src="./icons/webpack.svg" alt=""/>
              <img className="massive icon" src="./icons/npm.svg" alt=""/>
              </div>
          </Fade>
        </Container>
      </div>
    );


export default Icons
