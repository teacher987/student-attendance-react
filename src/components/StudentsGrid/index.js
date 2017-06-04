import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

StudentsGrid.propTypes = {
    // Hidden attendance marks (we don't show 'unchecked' button)
    attendanceMarkHidden: PropTypes.arrayOf(PropTypes.string),

    // Information about students
    data: PropTypes.arrayOf(PropTypes.shape({
        gender: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        attendanceMark: PropTypes.objectOf(PropTypes.bool),
    })).isRequired,

    // Whether the data is being loaded
    isLoading: PropTypes.bool,

    // IDs of the selected students
    selection: PropTypes.object,

    fetchData: PropTypes.func.isRequired,

    // onClick callback for changing the students' attendance mark
    onSetAttendanceState: PropTypes.func.isRequired,

    // onClick callback for (de)selecting the user (for/from multi attendance mark)
    onSetSelectionState: PropTypes.func.isRequired,
};

StudentsGrid.defaultProps = {
    attendanceMarkHidden: [],

    isLoading: false,

    selection: new Set(),
};
