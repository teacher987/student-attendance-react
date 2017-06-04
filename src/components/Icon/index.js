import React, { Component } from 'react';

import './styles.css';

export default class icon extends Component {
    render() {
        const {
            name,
            size = 'normal',
        } = this.props;

        return (
            <svg className={`icon icon--${name} icon--${size}`}>
            	<use xlinkHref={`#icon-${name}`}></use>
            </svg>
        );
    }
}