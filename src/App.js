import React, { Component } from 'react';
import './App.css';
import { Divider, Container, Menu } from 'semantic-ui-react';
import TopSegment from './components/TopSegment.jsx';
import Resume from './components/Resume.jsx';
import Projects from './components/Projects.jsx';


class App extends Component {
  state = { activePage: "resume" }

  handleItemClick = (e, { name }) => this.setState({ activePage: name })

  constructor() {
    super();
    // resume is the only page visible
    this.visibilities = {resume: {display: "none"}, projects: {display: "none"}, thoughts: {display: "none"}};
    this.visibilities[this.state.activePage].display = "block";
  }

  componentWillUpdate(nextProps, nextState) {
    // reset the visibilities to none
    this.visibilities = {resume: {display: "none"}, projects: {display: "none"}, thoughts: {display: "none"}};
    const { activePage } = nextState;
    // make the soon to be active page visible
    this.visibilities[activePage].display = "block";
  }

  render() {
    const { activePage } = this.state;

    return (
      <div className="App">  
        <TopSegment/>
        <Divider horizontal>xendke.io</Divider>
        <Container>
          <Menu widths={3}>
            <Menu.Item name="resume" active={activePage === "resume"} onClick={this.handleItemClick} />
            <Menu.Item name="projects" active={activePage === "projects"} onClick={this.handleItemClick} />
            <Menu.Item name="thoughts" active={activePage === "thoughts"} onClick={this.handleItemClick} />
          </Menu>

          <Resume visibility={this.visibilities.resume}/>

          <Projects visibility={this.visibilities.projects}/>          

        </Container>
        <Divider/>
        <Container textAlign='center' style={{paddingBottom: 15, color: "grey"}}>
          <a href="https://github.com/xendke/xendke-io" target="_blank" rel="noopener noreferrer" style={{color: "grey"}}> Made with React.js </a>. Hosted on a RaspberryPi
        </Container>
      </div>
    );
  }
}

export default App;
