import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Just print out the name of the user
 */
export default class Username extends Component {
    render() {
        return (
            <p>{this.props.name}</p>
        );
    }
}

Username.propTypes = {
	name: PropTypes.string.isRequired,
};