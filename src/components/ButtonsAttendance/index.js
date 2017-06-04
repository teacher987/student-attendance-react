import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ButtonAttendance from '../ButtonAttendance';

import './styles.css';

export default class ButtonsAttendance extends Component {
    render() {
        const {
            attendance,
            studentID,
            skip,

            onSetState,
        } = this.props;

        return (
            <div className="buttons_attendance">
                {Object.keys(attendance).map(key => {
                    if (skip.includes(key)) {
                        return null;
                    } else {
                        return (
                            <ButtonAttendance
                                studentID={studentID}
                                key={`${studentID}_${key}`}
                                label={key}
                                value={attendance[key]}

                                onSetState={onSetState}
                            />
                        );
                    }
                })}
            </div>
        );
    }
}

ButtonsAttendance.propTypes = {
    // mark: value attendance info (eg. { 'present': true, 'lase': false })
    attendance: PropTypes.objectOf(PropTypes.bool).isRequired,

    // Which attendance marks to skip
    skip: PropTypes.arrayOf(PropTypes.string),

    // Callback on attendance state change
    onSetState: PropTypes.func.isRequired,

    // ID of the student in question
    studentID: PropTypes.number,
};

ButtonsAttendance.defaultProps = {
    skip: [],
    studentID: 0,
};
