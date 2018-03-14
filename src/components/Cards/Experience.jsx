import React, { Component } from 'react';
import Card from './Card.jsx';
import { Segment, Item } from 'semantic-ui-react';

class Experience extends Component {
    render() {
        return (
            <Card title="Experience" icon="history">
                <Segment attached>
                <Item.Group divided>
                <Item>
                {/* <Item.Image size='tiny' src='/assets/images/wireframe/image.png' /> */}
                    <Item.Content>
                        <Item.Header as='a'>Web Dev Freelance</Item.Header>
                        <Item.Meta>Sep 2017 - Feb 2018</Item.Meta>
                        <Item.Description>
                        Update SUNY Purchase College Library's Interlibrary Loan website using Bootstrap 4 and jQuery. The website is used by students and staff to borrow books/media from other libraries when the item not available at the college's.
                        </Item.Description>
                        <Item.Extra>Front End Dev</Item.Extra>
                    </Item.Content>
                </Item>
                <Item>
                {/* <Item.Image size='tiny' src='/assets/images/wireframe/image.png' /> */}
                    <Item.Content>
                        <Item.Header as='a'>Coditum</Item.Header>
                        <Item.Meta>Sep 2016 - Present</Item.Meta>
                        <Item.Description>
                        Coditum is a company focused on teaching kids of ages 10-18 the basics of Python or Java as well as advanced college topics in computer science. Working at Coditum is a great experience which serves not only as an opportunity to expand knowledge of this amazing industry, but also allows us teachers to cement our learnings from our own college CS courses. Topics that we teach: Python/Java syntax, basic console games, sorting algorithms, data structures.
                        </Item.Description>
                        <Item.Extra>Teacher</Item.Extra>
                    </Item.Content>
                </Item>
                </Item.Group>
                </Segment>
            </Card>
        )
    }
}

export default Experience;