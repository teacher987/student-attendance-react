import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StatAttendance from '../StatAttendance';

import './styles.css';

/**
 *
 * Attendance stats for students
 *
 */
export default class StatsAttendance extends Component {
    render() {
        const {
            data,
        } = this.props;

        return (
            <div className="stats_attendance">
                {Object.keys(data).map(key => {
                    return (
                        <StatAttendance
                            key={key}
                            label={key}
                            value={data[key]}
                        />
                    );
                })}
            </div>
        );
    }
}

StatsAttendance.propTypes = {
    data: PropTypes.objectOf(PropTypes.number).isRequired,
};