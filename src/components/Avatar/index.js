import React, { Component } from 'react';

export default class Avatar extends Component {
    render() {
        return (
            <img alt="Avatar" src={this.props.src} />
        );
    }
}