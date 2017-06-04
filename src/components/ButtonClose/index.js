import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import './styles.css';

/**
 *
 * Button with 'x' icon
 * (usually to close a modal, but an onClick callback is supplied)
 *
 */
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

ButtonClose.propTypes = {
    // On button click callback
    onClick: PropTypes.func.isRequired,
}
