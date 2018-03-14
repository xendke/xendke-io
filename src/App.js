import React, { Component } from 'react';
import './App.css';
import { Grid, Divider } from 'semantic-ui-react';
import { AboutMe, Education, Links, Experience } from './components/Cards';
import TopSegment from './components/TopSegment.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">  
      <TopSegment/>
      <Divider horizontal>xendke.io</Divider>
      <Grid columns={2} stackable padded>
        <Grid.Row streched >
          <Grid.Column>
            <AboutMe/>
            <Links/>
          </Grid.Column>

          <Grid.Column>
            <Education/>
            <Experience />
          </Grid.Column>

        </Grid.Row >
      </Grid>
      </div>
    );
  }
}

export default App;
