import React, { Component } from 'react';

export default class StatAttendance extends Component {
    render() {
        const {
            label,
            value,
        } = this.props;

        return (
            <p>StatAttendance... {label}: {value}</p>
        );
    }
}