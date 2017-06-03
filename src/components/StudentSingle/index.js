import React, { Component } from 'react';

import Avatar from '../Avatar';
import ButtonsAttendance from '../ButtonsAttendance';
import Username from '../Username';

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

            onSetState,
        } = this.props;

        return (
            <div>
                <Avatar src={image} />

                <Username name={`${firstName} ${lastName}`} />

                <ButtonsAttendance
                    attendance={attendanceMark}
                    skip={attendanceMarkHidden}
                    studentID={id}

                    onSetState={onSetState}
                />
            </div>
        );
    }
}