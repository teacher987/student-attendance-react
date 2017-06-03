import students from '../config/students';

const getStudents = function() {
    return {
        ok: true,
        data: students,
    };
}

const setStudentState = function(studentID, mark, markState) {
    return {
        ok: true,
        data: {
            studentID,
            mark,
            markState,
        },
    };
}

export default {
    getStudents,

    setStudentState,
};