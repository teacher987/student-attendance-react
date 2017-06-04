import { call, put } from 'redux-saga/effects';

import StudentsActions from '../redux/students';

export function* getStudents(service, action) {
    const response = yield call(service.getStudents);

    if (response.ok === true) {
        yield put(StudentsActions.fetchStudentsSuccess(response.data));
    } else {
        yield put(StudentsActions.fetchStudentsFailure(response));
    }
}

export function* setStudentAttendanceState(service, action) {
    const {
        studentID,
        mark,
        markState,
    } = action;

    const response = yield call(service.setStudentAttendanceState, studentID, mark, markState);

    if (response.ok === true) {
        yield put(StudentsActions.setStudentAttendanceStateSuccess(studentID));
    } else {
        yield put(StudentsActions.setStudentAttendanceStateFailure(response));
    }
}