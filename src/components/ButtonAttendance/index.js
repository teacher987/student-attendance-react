import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import './styles.css';

/**
 *
 * A single button for attendance switch
 *
 */
export default class ButtonAttendance extends Component {
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
                <Icon name={label} />
            </button>
        );
    }
}

ButtonAttendance.propTypes = {
    // ID of the student we're changing the attendance for
    studentID: PropTypes.number.isRequired,

    // Button label (eg. 'present')
    label: PropTypes.string.isRequired,

    // Button value (whether it's on or off)
    value: PropTypes.bool.isRequired,

    // Callback on button press
    onSetState: PropTypes.func.isRequired,
};
