import React, { Component } from 'react';
import './styles.css';

export default class Avatar extends Component {
    render() {
        return (
            <img alt="Avatar" className="avatar" src={this.props.src} />
        );
    }
}