import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    fetchStudentsRequest: null,
    fetchStudentsSuccess: ['dataStudents'],
    fetchStudentsFailure: ['response'],

    setStudentStateRequest: ['studentID', 'mark', 'markState'],
    setStudentStateSuccess: ['studentID', 'mark', 'markState'],
    setStudentStateFailure: ['response'],
});

export const StudentsTypes = Types;
export default Creators;

const INITIAL_STATE = {
    fetchingStudents: false,
    processingStudent: 0,
    errorStudents: false,

    dataCounts: {
        present: 0,
        late: 0,
        absent: 0,
        unmarked: 0,
    },

    dataStudents: [],
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
        fetchingStudents: true,
        errorStudents: false
    };
};

export const fetchStudentsSuccess = (state = INITIAL_STATE, { dataStudents }) => {
    return {
        ...state,
        dataCounts: calculateCounts(dataStudents),
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










export const setStudentStateRequest = (state = INITIAL_STATE, { studentID, mark, markState }) => {
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

export const setStudentStateSuccess = (state = INITIAL_STATE, { studentID }) => {
    return {
        ...state,
        errorStudents: false,
        processingStudent: 0,
    };
};

export const setStudentStateFailure = (state = INITIAL_STATE, { response }) => {
    return {
        ...state,
        errorStudents: true,
        processingStudent: 0,
    };
};





export const reducer = createReducer(INITIAL_STATE, {
    [StudentsTypes.FETCH_STUDENTS_REQUEST]: fetchStudentsRequest,
    [StudentsTypes.FETCH_STUDENTS_SUCCESS]: fetchStudentsSuccess,
    [StudentsTypes.FETCH_STUDENTS_FAILURE]: fetchStudentsFailure,

    [StudentsTypes.SET_STUDENT_STATE_REQUEST]: setStudentStateRequest,
    [StudentsTypes.SET_STUDENT_STATE_SUCCESS]: setStudentStateSuccess,
    [StudentsTypes.SET_STUDENT_STATE_FAILURE]: setStudentStateFailure,
});
