import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ButtonClose from '../ButtonClose';
import SummaryAttendance from '../SummaryAttendance';

import './styles.css';

/**
 *
 * Popup showing summary of students' attendance
 *
 */
export default class PopupResults extends Component {
    constructor(props) {
        super(props);

        this.onKeyUp = this.onKeyUp.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keyup', this.onKeyUp);
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.onKeyUp);
    }

    onKeyUp(event) {
        this.props.dispatchClose();
    }

    render() {
        const {
            attendanceDetault,
            data,

            dispatchClose,
        } = this.props;

        return (
            <div>
                <div
                    className="popup_results"
                    onKeyUp={this.onKeyUp}
                >
                    <ButtonClose
                        onClick={dispatchClose}
                    />

                    <SummaryAttendance
                        attendanceDetault={attendanceDetault}
                        data={data}
                    />
                </div>

                <div className="popup_results__shadow"></div>
            </div>
        );
    }
}

PopupResults.propTypes = {
    // The default attendance mark
    attendanceDetault: PropTypes.string.isRequired,

    // Students' data
    data: PropTypes.arrayOf(PropTypes.shape({
        gender: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        attendanceMark: PropTypes.objectOf(PropTypes.bool),
    })).isRequired,

    // Callback for closing the popup
    dispatchClose: PropTypes.func.isRequired,
};
