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

            onSetState,
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

                                key={index}

                                onSetState={onSetState}
                            />
                        );
                    })}
                </div>
            );
        }
    }
}