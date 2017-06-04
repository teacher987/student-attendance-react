import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

/**
 *
 * A single table's row for attendance summary
 *
 */
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

SummaryAttendanceRow.propTypes = {
    // In this case, generate table heading
    heading: PropTypes.bool,

    // The default attendance mark
    attendanceDetault: PropTypes.string,

    // Information about students fetched
    data: PropTypes.shape({
        gender: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        attendanceMark: PropTypes.objectOf(PropTypes.bool),
    }),
};

SummaryAttendanceRow.defaultProps = {
    heading: false,
};