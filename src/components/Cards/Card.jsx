import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';


class Card extends Component {
    render() {
        return (
            <React.Fragment>
                <Header as='h2' icon={this.props.icon} content={this.props.title} attached='top'/>
                {this.props.children}
            </React.Fragment>
        )
    }
}

export default Card;