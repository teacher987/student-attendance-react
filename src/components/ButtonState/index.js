import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import './styles.css';

/**
 *
 * A single button for state actions
 * (reset/show summary for now)
 *
 */
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

ButtonState.propTypes = {
    // Button on click callback
    onClick: PropTypes.func.isRequired,

    // Button text (and icon)
    label: PropTypes.string.isRequired,
};
