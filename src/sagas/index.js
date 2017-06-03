import { all, takeEvery, takeLatest } from 'redux-saga/effects';

import StudentsService from '../services/StudentsService';

import { StudentsTypes } from '../redux/students';

import {
    getStudents,

    setStudentState,
} from './studentsSagas';

export default function* root() {
    yield all([
        takeLatest(
            StudentsTypes.FETCH_STUDENTS_REQUEST,
            getStudents,
            StudentsService
        ),

        takeEvery(
        	StudentsTypes.SET_STUDENT_STATE_REQUEST,
        	setStudentState,
        	StudentsService
        ),
    ]);
}
