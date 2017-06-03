import { connect } from 'react-redux';

import Attendance from '../components/Attendance';

import AppActions from '../redux/app';
import StudentsActions from '../redux/students';

const mapStateToProps = (state, ownProps) => ({
    attendanceDetault: 'unmarked',
    attendanceMarkHidden: ['unmarked'],
    dataCounts: state.students.dataCounts,
    dataStudents: state.students.dataStudents,
    isLoading: state.students.fetchingStudents,
    showResults: state.app.resultsPopup,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchData: _ => {
        dispatch(StudentsActions.fetchStudentsRequest());
    },





    setFormState: (state = true) => {
        dispatch(AppActions.setResultsPopupStateRequest(state));
    },


    setStudentState: (studentID, mark = 'unmarked', state = true) => {
        dispatch(StudentsActions.setStudentStateRequest(studentID, mark, state));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Attendance);