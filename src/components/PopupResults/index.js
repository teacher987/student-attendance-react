import React, { Component } from 'react';

import SummaryAttendance from '../SummaryAttendance';

export default class PopupResults extends Component {
    render() {
        const {
            attendanceDetault,
            data,
        } = this.props;

        return (
            <SummaryAttendance
                attendanceDetault={attendanceDetault}
                data={data}
            />
        );
    }
}
