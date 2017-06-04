import React, { Component } from 'react';

import Loading from '../Loading';
import StudentSingle from '../StudentSingle';

import './styles.css';

export default class StudentsGrid extends Component {
    componentWillMount() {
        this.props.fetchData();
    }

    render() {
        const {
            attendanceMarkHidden,
            data,
            isLoading,
            selection,

            onSetAttendanceState,
            onSetSelectionState,
        } = this.props;

        if (isLoading) {
            return <Loading />;
        } else {
            return (
                <div className="students_grid">
                    {data.map((student, index) => {
                        return (
                            <StudentSingle
                                data={student}
                                attendanceMarkHidden={attendanceMarkHidden}
                                isSelected={selection.has(student.id)}

                                key={index}

                                onSetAttendanceState={onSetAttendanceState}
                                onSetSelectionState={onSetSelectionState}
                            />
                        );
                    })}
                </div>
            );
        }
    }
}