import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

/**
 *
 * Render a simple svg icon
 *
 */
export default class Icon extends Component {
    render() {
        const {
            name,
            size,
        } = this.props;

        return (
            <svg className={`icon icon--${name} icon--${size}`}>
            	<use xlinkHref={`#icon-${name}`}></use>
            </svg>
        );
    }
}

Icon.propTypes = {
    // Which icon to render (matches an id from IconDefinitions)
    name: PropTypes.string.isRequired,

    // Which size of the icon we want
    size: PropTypes.string,
};

Icon.defaultProps = {
    size: 'normal',
};