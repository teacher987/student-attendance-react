import React, { Component } from 'react';

import Icon from '../Icon';

import './styles.css';

export default class ButtonState extends Component {
    render() {
        const {
            onClick,

            label,
        } = this.props;

        return (
            <button
                className="button_state"
                onClick={onClick}
                label={label}
                title={label}
            >
                <Icon
                    name={label.toLowerCase()}
                    size="xl"
                />
            </button>
        );
    }
}