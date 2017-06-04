import React, { Component } from 'react';

import Icon from '../Icon';

import './styles.css';

export default class ButtonClose extends Component {
    render() {
        const {
            onClick,
        } = this.props;

        return (
            <button
                className="button_close"
                onClick={onClick}
                type="button"
            >
                <Icon name="close" />
            </button>
        );
    }
}
