import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SummaryAttendanceRow from './SummaryAttendanceRow';

import './styles.css';

/**
 *
 * Summary of attendance data,
 * showed as a table
 *
 */
export default class SummaryAttendance extends Component {
    render() {
        const {
            attendanceDetault,
            data,
        } = this.props;

        return (
            <table className="summary_attendance">
                <thead>
                    <SummaryAttendanceRow heading />
                </thead>

                <tbody>
                    {data.map(student => {
                        return <SummaryAttendanceRow
                            attendanceDetault={attendanceDetault}
                            data={student}
                            key={student.id}
                        />
                    })}
                </tbody>
            </table>
        );
    }
}

SummaryAttendance.propTypes = {
    // Information about students fetched
    data: PropTypes.arrayOf(PropTypes.shape({
        gender: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        attendanceMark: PropTypes.objectOf(PropTypes.bool),
    })).isRequired,

    // The default attendance mark
    attendanceDetault: PropTypes.string.isRequired,
};