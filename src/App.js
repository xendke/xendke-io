import React, { Component } from 'react';
import './App.css';
import { Grid, Header, Segment } from 'semantic-ui-react';


class App extends Component {
  render() {
    return (
      <div className="App">  
      <Grid columns={2} padded >
      <Grid.Row streched>
        <Grid.Column >
            <Header as='h2' icon='user' content='About Me' attached='top'/>
            <Segment attached>I am a New York based software developer. I use code to bring ideas to life. I enjoy teaching what I know about code, as well as learning that which I don't. I have knowledge of many tools, and concepts. I have worked on desktop, mobile, and web applications. I am currently focusing on full stack web development. I am available for hire. Please feel free to contact me at me@xendke.io or xendke@gmail.com.</Segment>
            <Header as='h2' icon='user' content='About Me' attached='top'/>
            <Segment attached>I am a New York based software developer. I use code to bring ideas to life. I enjoy teaching what I know about code, as well as learning that which I don't. I have knowledge of many tools, and concepts. I have worked on desktop, mobile, and web applications. I am currently focusing on full stack web development. I am available for hire. Please feel free to contact me at me@xendke.io or xendke@gmail.com.</Segment>
        </Grid.Column>

        <Grid.Column >
          <Header as='h2' icon='student' content='Education' attached='top'/>
          <Segment attached>I am a New York based software developer. I use code to bring ideas to life. I enjoy teaching what I know about code, as well as learning that which I don't. I have knowledge of many tools, and concepts. I have worked on desktop, mobile, and web applications. I am currently focusing on full stack web development. I am available for hire. Please feel free to contact me at me@xendke.io or xendke@gmail.com.
          I am a New York based software developer. I use code to bring ideas to life. I enjoy teaching what I know about code, as well as learning that which I don't. I have knowledge of many tools, and concepts. I have worked on desktop, mobile, and web applications. I am currently focusing on full stack web development. I am available for hire. Please feel free to contact me at me@xendke.io or xendke@gmail.com.</Segment>
          <Header as='h2' icon='student' content='Education' attached='top'/>
          <Segment attached>I am a New York based software developer. I use code to bring ideas to life. I enjoy teaching what I know about code, as well as learning that which I don't. I have knowledge of many tools, and concepts. I have worked on desktop, mobile, and web applications. I am currently focusing on full stack web development. I am available for hire. Please feel free to contact me at me@xendke.io or xendke@gmail.com.
          I am a New York based software developer. I use code to bring ideas to life. I enjoy teaching what I know about code, as well as learning that which I don't. I have knowledge of many tools, and concepts. I have worked on desktop, mobile, and web applications. I am currently focusing on full stack web development. I am available for hire. Please feel free to contact me at me@xendke.io or xendke@gmail.com.</Segment>
        </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    );
  }
}

export default App;
