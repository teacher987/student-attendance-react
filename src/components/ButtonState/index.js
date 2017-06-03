import React, { Component } from 'react';

export default class ButtonState extends Component {
    render() {
        const {
            onClick,

            label,
        } = this.props;

        return (
            <button onClick={onClick}>
                {label}
            </button>
        );
    }
}