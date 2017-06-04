import React, { Component } from 'react';

import SummaryAttendanceRow from './SummaryAttendanceRow';

import './styles.css';

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