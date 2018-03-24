import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';

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

        const github = document.createElement('iframe');
        github.setAttribute(
            'src', 
            'http://colmdoyle.github.io/gh-activity/gh-activity.html?user=xendke&type=user'
        );
        github.setAttribute('frameborder', 0);
        github.setAttribute('width', "100%");
        github.setAttribute('height', 400);

        var container = document.getElementById("github-widget-container");
        container.appendChild(github);
    }

    render() {
        return (
            <Container style={this.props.visibility}>
                <Grid columns={2} padded stackable>
                <Grid.Row stretched>
                    <Grid.Column id="github-widget-container">
                        {/* github widget */}
                    </Grid.Column>
                    <Grid.Column>
                        <a class="twitter-timeline" href="https://twitter.com/xendke?ref_src=twsrc%5Etfw" data-height="400">Tweets by xendke</a> 
                    </Grid.Column>
                 </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default Feeds;
