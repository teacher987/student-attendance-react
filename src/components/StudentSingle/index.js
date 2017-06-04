import React, { Component } from 'react';

import Avatar from '../Avatar';
import Checkbox from '../Checkbox';
import ButtonsAttendance from '../ButtonsAttendance';
import Username from '../Username';

import './styles.css';

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