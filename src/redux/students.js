import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    fetchStudentsRequest: null,
    fetchStudentsSuccess: ['dataStudents'],
    fetchStudentsFailure: ['response'],

    setStudentAttendanceStateRequest: ['studentID', 'mark', 'markState'],
    setStudentAttendanceStateSuccess: ['studentID', 'mark', 'markState'],
    setStudentAttendanceStateFailure: ['response'],

    clearSelectionRequest: null,
    setSelectionStateRequest: ['studentID', 'selected'],
});

export const StudentsTypes = Types;
export default Creators;

const INITIAL_STATE = {
    fetchingStudents: false,
    processingStudent: 0,
    errorStudents: false,

    dataAttendanceKeys: [],

    dataCounts: {
        present: 0,
        late: 0,
        absent: 0,
        unmarked: 0,
    },

    dataStudents: [],

    selection: new Set(),
};











const calculateCounts = dataStudents => {
    const dataCounts = {};

    Object.keys(INITIAL_STATE.dataCounts).forEach(key => {
        dataCounts[key] = dataStudents
            .map(student => {
                const attendanceMark = student.attendanceMark[key];
                return attendanceMark === undefined ? 0 : attendanceMark;
            })
            .reduce((current, sum) => current + sum)
        ;
    });

    dataCounts.unmarked = dataStudents.length - Object.values(dataCounts)
        .reduce((current, sum) => current + sum)
    ;

    return dataCounts;
};










export const fetchStudentsRequest = (state = INITIAL_STATE) => {
    return {
        ...state,
        selection: new Set(),
        fetchingStudents: true,
        errorStudents: false,
    };
};

export const fetchStudentsSuccess = (state = INITIAL_STATE, { dataStudents }) => {
    // Save possible attendance marks (only on 1st fetch)
    const dataAttendanceKeys = state.dataAttendanceKeys.length === 0 && dataStudents.length > 0 ?
        Object.keys(dataStudents[0].attendanceMark) :
        state.dataAttendanceKeys
    ;

    return {
        ...state,
        dataCounts: calculateCounts(dataStudents),
        dataAttendanceKeys,
        dataStudents,
        fetchingStudents: false,
        errorStudents: false,
    };
};

export const fetchStudentsFailure = (state = INITIAL_STATE, { response }) => {
    return {
        ...state,
        fetchingStudents: false,
        errorStudents: true,
    };
};










export const setStudentAttendanceStateRequest = (state = INITIAL_STATE, { studentID, mark, markState }) => {
    const dataStudents = state.dataStudents.map(student => {
        const attendanceMark = { ...student.attendanceMark };

        if (student.id === studentID) { // Only affect current student
            if (markState === true) { // State is ON, so all others are OFF
                Object.keys(attendanceMark).forEach((key, value) => {
                    attendanceMark[key] = key === mark;
                });
            } else { // State if OFF, so unmarked is ON
                attendanceMark[mark] = false;
            }
        }

        return { ...student, attendanceMark };
    });

    return {
        ...state,
        dataStudents,
        dataCounts: calculateCounts(dataStudents),
        errorStudents: false,
        processingStudent: studentID,
    };
};

export const setStudentAttendanceStateSuccess = (state = INITIAL_STATE, { studentID }) => {
    return {
        ...state,
        errorStudents: false,
        processingStudent: 0,
    };
};

export const setStudentAttendanceStateFailure = (state = INITIAL_STATE, { response }) => {
    return {
        ...state,
        errorStudents: true,
        processingStudent: 0,
    };
};










export const setSelectionStateRequest = (state = INITIAL_STATE, { studentID, selected }) => {
    const selection = new Set(state.selection);
    try {
        selection[selected ? 'add' : 'delete'](studentID);
    } catch(e) {
        debugger;
    }

    return { ...state, selection };
};

export const clearSelectionRequest = (state = INITIAL_STATE) => {
    const selection = new Set();

    return { ...state, selection };
};





export const reducer = createReducer(INITIAL_STATE, {
    [StudentsTypes.FETCH_STUDENTS_REQUEST]: fetchStudentsRequest,
    [StudentsTypes.FETCH_STUDENTS_SUCCESS]: fetchStudentsSuccess,
    [StudentsTypes.FETCH_STUDENTS_FAILURE]: fetchStudentsFailure,

    [StudentsTypes.SET_STUDENT_ATTENDANCE_STATE_REQUEST]: setStudentAttendanceStateRequest,
    [StudentsTypes.SET_STUDENT_ATTENDANCE_STATE_SUCCESS]: setStudentAttendanceStateSuccess,
    [StudentsTypes.SET_STUDENT_ATTENDANCE_STATE_FAILURE]: setStudentAttendanceStateFailure,

    [StudentsTypes.SET_SELECTION_STATE_REQUEST]: setSelectionStateRequest,
    [StudentsTypes.CLEAR_SELECTION_REQUEST]: clearSelectionRequest,
});
