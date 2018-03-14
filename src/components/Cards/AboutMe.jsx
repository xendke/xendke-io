import React, { Component } from 'react';
import Card from './Card.jsx';
import { Segment } from 'semantic-ui-react';

class AboutMe extends Component {
    render() {
        return (
            <Card title="About Me" icon="user">
                <Segment attached>I am a New York based software developer. I use code to bring ideas to life. I enjoy teaching what I know about code, as well as learning that which I don't. I have knowledge of many tools, and concepts. I have worked on desktop, mobile, and web applications. I am currently focusing on full stack web development. I am available for hire. Please feel free to contact me at me@xendke.io or xendke@gmail.com.</Segment>
            </Card>
        )
    }
}

export default AboutMe;