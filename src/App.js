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
      </div>
    );
  }
}

export default App;
