import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Avatar from '../Avatar';
import Checkbox from '../Checkbox';
import ButtonsAttendance from '../ButtonsAttendance';
import Username from '../Username';

import './styles.css';

/**
 *
 * Show a single student's information
 * along with a checkbox for selection and
 * buttons for attendance mark set
 *
 */
export default class StudentSingle extends Component {
    render() {
        const {
            attendanceMarkHidden,

            data: {
                id,
                attendanceMark,
                firstName,
                lastName,
                image,
            },

            isSelected,
            onSetAttendanceState,
            onSetSelectionState,
        } = this.props;

        return (
            <div className={`student_single ${isSelected ? 'student_single--active' : ''}`}>
                <label>
                    <Avatar src={image} />

                    <Checkbox
                        id={id}
                        checked={isSelected}
                        onChange={onSetSelectionState}
                    />

                    <Username name={`${firstName} ${lastName}`} />
                </label>

                <ButtonsAttendance
                    attendance={attendanceMark}
                    skip={attendanceMarkHidden}
                    studentID={id}

                    onSetState={onSetAttendanceState}
                />
            </div>
        );
    }
}

StudentSingle.propTypes = {
    // Student data
    data: PropTypes.shape({
        gender: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        attendanceMark: PropTypes.objectOf(PropTypes.bool),
    }).isRequired,

    // Hidden attendance marks (we don't show 'unchecked' button)
    attendanceMarkHidden: PropTypes.arrayOf(PropTypes.string),

    // Whether the student is selected (for multi attendance mark set)
    isSelected: PropTypes.bool,

    // onClick callback for changing the students' attendance mark
    onSetAttendanceState: PropTypes.func.isRequired,

    // onClick callback for (de)selecting the user (for/from multi attendance mark)
    onSetSelectionState: PropTypes.func.isRequired,
};

StudentSingle.defaultProps = {
    attendanceMarkHidden: [],
    isSelected: false,
};