import React, { Component } from 'react';

import ButtonState from '../ButtonState';

export default class ButtonsState extends Component {
    render() {
        const {
            onReset,
            onDone,
        } = this.props;

        return (
            <div>
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