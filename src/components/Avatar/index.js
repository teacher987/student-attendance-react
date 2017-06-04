import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

/**
 *
 * Simply render a user's avatar
 *
 */
export default class Avatar extends Component {
    render() {
        return (
            <img alt="Avatar" className="avatar" src={this.props.src} />
        );
    }
}

Avatar.propTypes = {
    // Image URL
    src: PropTypes.string.isRequired,
};
