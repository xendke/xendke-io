import React, { Component } from 'react';
import './App.css';
import { Grid, Divider, Container } from 'semantic-ui-react';
import { AboutMe, Education, Links, Experience, Recognitions } from './components/Cards';
import TopSegment from './components/TopSegment.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">  
        <TopSegment/>
        <Divider horizontal>xendke.io</Divider>
        <Container>
          <Grid columns={2} stackable padded>
            <Grid.Row streched >
              <Grid.Column>
                <AboutMe/>
                <Experience />
              </Grid.Column>

              <Grid.Column>
                <Education/>
                <Links/>
                <Recognitions/>
              </Grid.Column>

            </Grid.Row >
          </Grid>
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
