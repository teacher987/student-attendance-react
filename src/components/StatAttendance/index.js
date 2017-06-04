import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

/**
 *
 * A single attendance stat
 *
 */
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

StatAttendance.propTypes = {
    // Which attendance mark are we showing
    label: PropTypes.string.isRequired,

    // What's the number of students with this attendance mark
    value: PropTypes.number.isRequired,
};