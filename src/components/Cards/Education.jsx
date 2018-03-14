import React, { Component } from 'react';
import Card from './Card.jsx';
import { Segment, List } from 'semantic-ui-react';

const dateStyle = {
    fontStyle: "italic"
};

class Education extends Component {
    render() {
        return (
            <Card title="Education" icon="student">
                <Segment attached>
                <List size="medium">
                    <List.Item>
                    <List.Header>State University of NY at Purchase.</List.Header>
                    <List.Content>
                    <List>
                        <List.Item style={dateStyle}>From September 2014 to May 2018.</List.Item>
                        <List.Item>B.A. Computer Science and Mathematics with Minor in Economics</List.Item>
                        <List.Item>3.6 GPA</List.Item>
                    </List>
                    </List.Content>
                    </List.Item>
                </List>
                </Segment>
            </Card>
        )
    }
}

export default Education;