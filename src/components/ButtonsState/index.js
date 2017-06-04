import React, { Component } from 'react';

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