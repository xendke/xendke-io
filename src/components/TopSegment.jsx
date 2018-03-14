import React, { Component } from 'react';
import { Grid, Image, Container, List, Responsive } from 'semantic-ui-react';


class TopSegment extends Component {
    render() {
        return (
            <Grid columns={2} padded>
            <Grid.Column >
                    <Image  floated='right' spaced src="/self.png" avatar circular size="small"/>
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
                <Container textAlign="left">
                <List>
                    <List.Item icon='user'> 
                        <Responsive as="h2" minWidth={759}>
                            Juan X. Gomez
                        </Responsive>
                        <Responsive as="h2" maxWidth={758} style={{fontSize: 20}}>
                            Juan X. Gomez
                        </Responsive>
                    </List.Item>
                    <List.Item icon='marker' content='White Plains, NY' />
                    <List.Item icon='phone' content='(914) 565-1708' />
                    <List.Item icon='mail' content={<a href='mailto:me@xendke.io'>me@xendke.io</a>} />
                </List>
                </Container>
            </Grid.Column>
            </Grid>
        )
    }
}

export default TopSegment;