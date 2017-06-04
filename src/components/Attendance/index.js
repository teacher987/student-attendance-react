import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ButtonsState from '../ButtonsState';
import DockMultiSetState from '../DockMultiSetState';
import PopupResults from '../PopupResults';
import StatsAttendance from '../StatsAttendance';
import StudentsGrid from '../StudentsGrid';

import './styles.css';

/**
 *
 * Student attendance overview
 *
 * Contains a grid of students' information,
 * along with buttons to set the attendance state for each of them
 *
 * There's also multi select option for setting attendance state
 * for multiple people at once
 *
 * Also a reset button (reset attendance state for all students to unmarked)
 *
 * And a button to show a modal with attendance data summary
 *
 */
export default class Attendance extends Component {
    constructor(props) {
        super(props);

        this.onReset = this.onReset.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
        this.onSetAttendanceStateMulti = this.onSetAttendanceStateMulti.bind(this);
    }

    onReset() {
        const {
            dataStudents,

            setStudentAttendanceState,
        } = this.props;

        dataStudents.forEach(student => {
            // Whether any attendanceMark === true
            const shouldReset = Object.values(student.attendanceMark).some(x => x);
            if (shouldReset) setStudentAttendanceState(student.id);
        });
    }

    onChangeSelection(studentID, selected) {
        const {
            enabledMultiSelect,
            setSelectionState,
        } = this.props;

        if (enabledMultiSelect === false) this.props.setMultiSelectState(true);

        setSelectionState(studentID, selected);
    }

    onSetAttendanceStateMulti(_, mark) {
        const {
            selection,

            setStudentAttendanceStateMulti,
        } = this.props;

        setStudentAttendanceStateMulti(selection, mark);
    }

    render() {
        const {
            attendanceDetault,
            attendanceMarkHidden,
            enabledMultiSelect,
            isLoading,
            showResults,

            dataAttendanceKeys,
            dataCounts,
            dataStudents,
            selection,

            fetchData,

            setFormState,
            setStudentAttendanceState,
        } = this.props;

        return (
            <div>
                <main className="main">
                    <StudentsGrid
                        attendanceMarkHidden={attendanceMarkHidden}
                        data={dataStudents}
                        isLoading={isLoading}
                        selection={selection}

                        fetchData={fetchData}

                        onSetAttendanceState={setStudentAttendanceState}
                        onSetSelectionState={this.onChangeSelection}
                    />

                </main>
                <footer className="footer">
                    <StatsAttendance
                        data={dataCounts}
                    />

                    <ButtonsState
                        onDone={() => setFormState(true)}
                        onReset={this.onReset}
                    />
                </footer>

                {showResults &&
                    <PopupResults
                        attendanceDetault={attendanceDetault}
                        data={dataStudents}
                        dispatchClose={() => setFormState(false)}
                    />
                }

                {enabledMultiSelect &&
                    <DockMultiSetState
                        attendanceMarkHidden={attendanceMarkHidden}
                        keys={dataAttendanceKeys}
                        onSetState={this.onSetAttendanceStateMulti}
                    />
                }
            </div>
        );
    }
}

Attendance.propTypes = {
    // Default attendance  value (eg. 'unchecked')
    attendanceDetault: PropTypes.string.isRequired,

    // Hidden attendance marks (we don't show 'unchecked' button)
    attendanceMarkHidden: PropTypes.arrayOf(PropTypes.string),


    // Whether the data is being loaded
    isLoading: PropTypes.bool,

    // Whether multi seelct is enabled
    enabledMultiSelect: PropTypes.bool,

    // Whether to show the attendance summary
    showResults: PropTypes.bool,


    // All possible attendance keys (eg. ['present', 'late', 'absent', 'unchecked'])
    dataAttendanceKeys: PropTypes.arrayOf(PropTypes.string).isRequired,

    // Number of students for each count (eg. { 'present': 1, 'late': 10, 'absent': 5, 'unchecked': 3 })
    dataCounts: PropTypes.objectOf(PropTypes.number).isRequired,

    // Information about students fetched
    dataStudents: PropTypes.arrayOf(PropTypes.shape({
        gender: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        attendanceMark: PropTypes.objectOf(PropTypes.bool),
    })).isRequired,

    // IDs of the selected students
    selection: PropTypes.object,
};

Attendance.defaultProps = {
    attendanceMarkHidden: false,

    isLoading: false,
    enabledMultiSelect: false,
    showResults: false,

    selection: new Set(),
};
