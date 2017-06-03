import React, { Component } from 'react';

export default class Button extends Component {
    constructor(props) {
        super(props);

        this.click = this.click.bind(this);
    }

    click() {
        const {
            studentID,
            label,
            value,
            onSetState,
        } = this.props;

        onSetState(studentID, label, !value);
    }

    render() {
        const {
            label,
            value,
        } = this.props;

        return (
            <button onClick={this.click}>
            	Button {label} {value ? 'Yes' : 'No'}
            </button>
        );
    }
}