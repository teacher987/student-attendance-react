import React, { Component } from 'react';

import StatAttendance from '../StatAttendance';

export default class StatsAttendance extends Component {
    render() {
        const {
            data,
        } = this.props;

        return (
            <div>
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