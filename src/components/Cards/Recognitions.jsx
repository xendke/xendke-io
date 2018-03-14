import React, { Component } from 'react';
import Card from './Card.jsx';
import { Item } from 'semantic-ui-react';

class Recognitions extends Component {
    render() {
        return (
            <Card title="Recognitions" icon="trophy">
                <Item.Group divided>
                <Item>
                    <Item.Content>
                        <Item.Header size="small">Dean's List</Item.Header>
                        {/* <Item.Meta></Item.Meta> */}
                        <Item.Description>
                        Maintained an average GPA above 3.5.
                        </Item.Description>
                        <Item.Extra>2015 - Present</Item.Extra>
                    </Item.Content>
                </Item>
                <Item>
                    <Item.Content>
                        <Item.Header size="small" as='a' href="https://devpost.com/software/candybot-j3pwk0">GlobalAI Hackathon Winner</Item.Header>
                        {/* <Item.Meta></Item.Meta> */}
                        <Item.Description>
                        My group's project "CandyBot" won the title of "Best Emotional AI Hack" at NYC's GlobalAI Hackathon.
                        </Item.Description>
                        <Item.Extra>2017</Item.Extra>
                    </Item.Content>
                </Item>
                </Item.Group>
            </Card>
        )
    }
}

export default Recognitions;