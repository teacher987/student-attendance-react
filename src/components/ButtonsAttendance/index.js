import React, { Component } from 'react';

import ButtonAttendance from '../ButtonAttendance';

export default class ButtonsAttendance extends Component {
    render() {
        const {
            attendance,
            studentID,
            skip,

            onSetState,
        } = this.props;

        return (
            <div>
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