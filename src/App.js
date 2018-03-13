import React, { Component } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';
import { AboutMe, Education, Links } from './components/Cards';

class App extends Component {
  render() {
    return (
      <div className="App">  
      <Grid columns={2} padded stackable >
      <Grid.Row streched>
        <Grid.Column >
          <AboutMe/>
          <Links/>
        </Grid.Column>

        <Grid.Column >
          <Education/>
          <Education/>
        </Grid.Column>
      </Grid.Row>
      </Grid>
      </div>
    );
  }
}

export default App;
