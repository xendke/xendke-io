import React, { Component } from 'react';
import Card from './Card.jsx';
import { Segment, Icon, Grid, Container } from 'semantic-ui-react';


const linkStyle = {
    textDecoration: "none",
    color: "black"
};

class Links extends Component {
    render() {
        return (
            <Card title="Links" icon="external link alternate" >
                <Segment attached>
                <Container textAlign='center'>
                <Grid columns={3} padded>
                    <Grid.Column>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/xendke" style={linkStyle}>
                    <Icon name='github' size='big' circular/>
                    </a>
                    </Grid.Column>
                    <Grid.Column>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/juanxgomez" style={linkStyle}>
                    <Icon name='linkedin' size='big' circular/>
                    </a>
                    </Grid.Column>
                    <Grid.Column>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/xendke" style={linkStyle}>
                    <Icon name='twitter' size='big' circular/>
                    </a>
                    </Grid.Column>
                </Grid>
                </Container>
                </Segment>
            </Card>
        )
    }
}

export default Links;