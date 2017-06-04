import { connect } from 'react-redux';

import Attendance from '../components/Attendance';

import AppActions from '../redux/app';
import StudentsActions from '../redux/students';

/**
 *
 * Classroom attendance screen
 *
 */

const mapStateToProps = (state, ownProps) => ({
    attendanceDetault: 'unmarked',
    attendanceMarkHidden: ['unmarked'],

    isLoading: state.students.fetchingStudents,
    enabledMultiSelect: state.app.multiSelect,
    showResults: state.app.resultsPopup,

    dataAttendanceKeys: state.students.dataAttendanceKeys,
    dataCounts: state.students.dataCounts,
    dataStudents: state.students.dataStudents,
    selection: state.students.selection,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchData: _ => {
        dispatch(StudentsActions.fetchStudentsRequest());
    },





    setFormState: (state = true) => {
        dispatch(AppActions.setResultsPopupStateRequest(state));
    },

    setStudentAttendanceState: (studentID, mark = 'unmarked', state = true) => {
        dispatch(StudentsActions.setStudentAttendanceStateRequest(studentID, mark, state));
    },

    setMultiSelectState: enabled => {
        dispatch(AppActions.setMultiSelectStateRequest(enabled));
    },

    setStudentAttendanceStateMulti: (studentIDs, mark = 'unmarked') => {
        studentIDs.forEach(studentID => {
            dispatch(StudentsActions.setStudentAttendanceStateRequest(studentID, mark, true));
        });

        dispatch(StudentsActions.clearSelectionRequest());
        dispatch(AppActions.setMultiSelectStateRequest(false));
    },

    setSelectionState: (studentID, selected = true) => {
        dispatch(StudentsActions.setSelectionStateRequest(studentID, selected));
    },

    clearSelection: _ => {
        dispatch(StudentsActions.clearSelectionRequest());
        dispatch(AppActions.setMultiSelectStateRequest(false));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Attendance);