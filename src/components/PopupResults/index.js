import React, { Component } from 'react';

import ButtonClose from '../ButtonClose';
import SummaryAttendance from '../SummaryAttendance';

import './styles.css';

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
