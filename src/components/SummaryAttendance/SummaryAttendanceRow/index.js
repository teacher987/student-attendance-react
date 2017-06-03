import React, { Component } from 'react';

export default class SummaryAttendanceRow extends Component {
    render() {
        const {
            attendanceDetault,
            data,
            heading,
        } = this.props;

        if (heading) {
            return (
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Attendance</th>
                </tr>
            );
        } else {
            const attendance = Object.keys(data.attendanceMark)
                .find(key => data.attendanceMark[key])
            ;

            return (
                <tr>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.gender}</td>
                    <td>{attendance ? attendance : attendanceDetault}</td>
                </tr>
            );
        }
    }
}