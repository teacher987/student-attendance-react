import React, { Component } from 'react';

import ButtonsState from '../ButtonsState';
import DockMultiSetState from '../DockMultiSetState';
import PopupResults from '../PopupResults';
import StatsAttendance from '../StatsAttendance';
import StudentsGrid from '../StudentsGrid';

import './styles.css';

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
                        onDone={setFormState}
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
