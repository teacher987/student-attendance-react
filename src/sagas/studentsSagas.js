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

export function* setStudentState(service, action) {
    const {
        studentID,
        mark,
        markState,
    } = action;

    const response = yield call(service.setStudentState, studentID, mark, markState);

    if (response.ok === true) {
        yield put(StudentsActions.setStudentStateSuccess(studentID));
    } else {
        yield put(StudentsActions.setStudentStateFailure(response));
    }
}