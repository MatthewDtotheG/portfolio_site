import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

const HomepageHeading = ({ mobile }) => (
  <Container text >
    <Fade bottom>
    <Header
      as='h1'
      content="Hi 👋 I'm Matthew"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Full Stack Developer and Creative Technologist'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
</Fade>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = ({ mobile }) => (
<ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container textAlign='center' text>
        <Fade bottom>
          <p style={{ fontSize: '1.8em' }}>
            I am Full stack web developer with an eye for frontend design. Strong skill set in creative problem solving and interpersonal communication.
            Able to quickly prototype ideas and pivot to meet project needs.
            Acutely aware of current web trends and always hungry to learn.
          </p>
        </Fade>
      </Container>

      <Container style={{ padding: '8em 0em' }} textAlign='center' text>
        <Fade bottom cascade>
          <div>
              <i className="massive react icon"></i>
              <i className="massive css3 alternate icon"></i>
              <i className="massive sass icon"></i>
              <i className="massive html5 icon"></i>
              <i className="massive node icon"></i>
              <i className="massive github icon"></i>
              <i className="massive js icon"></i>
              <i className="massive gulp icon"></i>
                <i className="massive icon">
                  <object type="image/svg+xml" data="bootstrap.svg">
                    Your browser does not support SVG
                  </object>
                </i>
              <i className="massive npm icon"></i>
              <i className='massive icon'>
                <object type="image/svg+xml" data="postgresql.svg">
                  Your browser does not support SVG
                </object>
              </i>
              <i className="massive icon">
                <object type="image/svg+xml" data="ruby.svg">
                  Your browser does not support SVG
                </object>
              </i>
              <i className="massive icon">
                <object type="image/svg+xml" data="redux.svg">
                  Your browser does not support SVG
                </object>
              </i>
              <i className="massive icon">
                <object type="image/svg+xml" data="git-icon.svg">
                  Your browser does not support SVG
                </object>
              </i>
              <i className="massive icon">
                <object type="image/svg+xml" data="babel.svg">
                  Your browser does not support SVG
                </object>
              </i>

              <i className="massive icon">
                <object type="image/svg+xml" data="webpack.svg">
                  Your browser does not support SVG
                </object>
              </i>
            </div>
          </Fade>
        </Container>

        <Container textAlign='center' text>
          <Fade bottom>
            <p style={{ fontSize: '1.8em' }}>
              Want to work together? Feel free to reach out!
            </p>
          </Fade>
        </Container>

        <Container style={{ padding: '8em 0em' }} textAlign='center' text>
          <Fade bottom cascade>
            <div>
              <a href="https://twitter.com/matthewdtotheg" target="_blank" rel="noopener noreferrer" ><i className="massive twitter square icon test"></i></a>
              <a href="https://github.com/matthewdtotheg" target="_blank" rel="noopener noreferrer"><i className="massive github square icon test"></i></a>
              <a href="https://www.linkedin.com/in/matthewdtotheg/" target="_blank" rel="noopener noreferrer"><i className="massive linkedin icon test"></i></a>
              <a href="mailto:mdgarrett1984@gmail.com"><i className="massive envelope square icon test"></i></a>
            </div>
          </Fade>
        </Container>
    </Segment>






    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container textAlign='center' text>
          <Header inverted as='h4' content='MG | 2018' />
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout
