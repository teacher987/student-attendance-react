import React, { Component } from 'react';

import './styles.css';

export default class StatAttendance extends Component {
    render() {
        const {
            label,
            value,
        } = this.props;

        return (
            <p className="stat_attendance">
            	{label}: {value}
            </p>
        );
    }
}