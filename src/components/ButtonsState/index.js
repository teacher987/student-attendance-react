import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ButtonState from '../ButtonState';

import './styles.css';

export default class ButtonsState extends Component {
    render() {
        const {
            onReset,
            onDone,
        } = this.props;

        return (
            <div className="buttons_state">
                <ButtonState
                    onClick={onReset}
                    label="Reset"
                />

                <ButtonState
                    onClick={onDone}
                    label="Done"
                />
            </div>
        );
    }
}

ButtonsState.propTypes = {
    // Callback for clicking the done button
    onDone: PropTypes.func.isRequired,

    // Callback for clicking the reset button
    onReset: PropTypes.func.isRequired,
};
