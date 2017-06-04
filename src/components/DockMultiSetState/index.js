import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ButtonsAttendance from '../ButtonsAttendance';

import './styles.css';

/**
 *
 * Fixed-position dock
 * with buttons to set attendance state
 * for all checked students
 */
export default class DockMultiSetState extends Component {
    render() {
        const {
            attendanceMarkHidden,
            keys,

            onSetState,
        } = this.props;

        // from attendance keys, create attendance object
        // ['present', 'absent', 'late'] => { 'present': false, 'absent': false, 'late': false, }
        // Because for multi attendance update, all the buttons are off
        const attendanceMark = keys.reduce((prev,curr) => {
            prev[curr] = false;
            return prev;
        },{});

        return (
            <aside className="dock_multi_set_state">
                <ButtonsAttendance
                    attendance={attendanceMark}
                    skip={attendanceMarkHidden}

                    onSetState={onSetState}
                />
            </aside>
        );
    }
}

DockMultiSetState.propTypes = {
    // Which attendance marks to skip
    attendanceMarkHidden: PropTypes.arrayOf(PropTypes.string),

    // All attendance keys
    keys: PropTypes.arrayOf(PropTypes.string).isRequired,

    // onClick callback for each attendance button
    onSetState: PropTypes.func.isRequired,
};

DockMultiSetState.defaultProps = {
    attendanceMarkHidden: [],
};

