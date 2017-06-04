import React, { Component } from 'react';

import Icon from '../Icon';

import './styles.css';

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
            <button
                className={`button_attendance ${value ? 'button_attendance--active' : ''}`}
                label={label}
                onClick={this.click}
                title={label}
            >
                <Icon color={value ? '#4caf50' : '#384450'} name={label} />
            </button>
        );
    }
}