import React, { Component } from 'react';

import ButtonsState from '../ButtonsState';
import PopupResults from '../PopupResults';
import StatsAttendance from '../StatsAttendance';
import StudentsGrid from '../StudentsGrid';

import './styles.css';

export default class Attendance extends Component {
    constructor(props) {
        super(props);

        this.onReset = this.onReset.bind(this);
    }

    onReset() {
        const {
            dataStudents,

            setStudentState,
        } = this.props;

        dataStudents.forEach(student => {
            // Whether any attendanceMark === true
            const shouldReset = Object.values(student.attendanceMark).some(x => x);
            if (shouldReset) setStudentState(student.id);
        });
    }

    render() {
        const {
            attendanceDetault,
            attendanceMarkHidden,
            dataCounts,
            dataStudents,
            isLoading,
            showResults,

            fetchData,

            setFormState,

            setStudentState,
        } = this.props;

        return (
            <div>
                <main className="main">
                    <StudentsGrid
                        attendanceMarkHidden={attendanceMarkHidden}
                        data={dataStudents}
                        isLoading={isLoading}

                        fetchData={fetchData}

                        onSetState={setStudentState}
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
            </div>
        );
    }
}
