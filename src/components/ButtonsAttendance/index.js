import React, { Component } from 'react';

import ButtonAttendance from '../ButtonAttendance';

import './styles.css';

export default class ButtonsAttendance extends Component {
    render() {
        const {
            attendance,
            studentID,
            skip,

            onSetState,
        } = this.props;

        return (
            <div className="buttons_attendance">
                {Object.keys(attendance).map(key => {
                    if (skip.includes(key)) {
                        return null;
                    } else {
                        return (
                            <ButtonAttendance
                                studentID={studentID}
                                key={`${studentID}_${key}`}
                                label={key}
                                value={attendance[key]}

                                onSetState={onSetState}
                            />
                        );
                    }
                })}
            </div>
        );
    }
}