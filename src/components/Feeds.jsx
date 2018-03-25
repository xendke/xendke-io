import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import "./Feeds.css";

class Feeds extends Component {
    componentDidMount() {
        // set up twitter and github feed widgets
        const twitter = document.createElement('script');
        twitter.setAttribute(
            'src', 
            'https://platform.twitter.com/widgets.js'
        );
        twitter.setAttribute('async', "true");
        document.body.appendChild(twitter);

        window.GitHubActivity.feed({
            username: "xendke",
            selector: "#github-widget-container",
            limit: 20 
        });
    }

    render() {
        console.log("feeds rendered");
        return (
            <Container style={this.props.visibility}>
                <Grid columns={2} padded stackable>
                <Grid.Row>
                    <Grid.Column >
                        <div id="github-widget-container">
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <a className="twitter-timeline" href="https://twitter.com/xendke?ref_src=twsrc%5Etfw" data-height="410">Tweets by xendke</a> 
                    </Grid.Column>
                 </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default Feeds;
