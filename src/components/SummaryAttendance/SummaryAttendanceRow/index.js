import React, { Component } from 'react';

import './styles.css';

export default class SummaryAttendanceRow extends Component {
    render() {
        const {
            attendanceDetault,
            data,
            heading,
        } = this.props;

        if (heading) {
            return (
                <tr className="summary_attendance_row summary_attendance_row--header">
                    <th className="summary_attendance_row__cell summary_attendance_row__cell--heading">First Name</th>
                    <th className="summary_attendance_row__cell summary_attendance_row__cell--heading">Last Name</th>
                    <th className="summary_attendance_row__cell summary_attendance_row__cell--heading">Gender</th>
                    <th className="summary_attendance_row__cell summary_attendance_row__cell--heading">Attendance</th>
                </tr>
            );
        } else {
            const attendance = Object.keys(data.attendanceMark)
                .find(key => data.attendanceMark[key])
            ;

            return (
                <tr className="summary_attendance_row summary_attendance_row--body">
                    <td className="summary_attendance_row__cell summary_attendance_row__cell--data">{data.firstName}</td>
                    <td className="summary_attendance_row__cell summary_attendance_row__cell--data">{data.lastName}</td>
                    <td className="summary_attendance_row__cell summary_attendance_row__cell--data">{data.gender}</td>
                    <td className="summary_attendance_row__cell summary_attendance_row__cell--data">{attendance ? attendance : attendanceDetault}</td>
                </tr>
            );
        }
    }
}