import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

/**
 *
 * A simple checkbox
 *
 */
export default class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const checked = event.target.checked;

        const {
            id,

            onChange,
        } = this.props;

        onChange(id, checked);
    }

    render() {
        const {
            checked,
        } = this.props;

        return (
            <input
                checked={checked}
                className="checkbox"
                onChange={this.onChange}
                type="Checkbox"
            />
        );
    }
}

Checkbox.propTypes = {
    // Data to be passed to the onChange callback
    id: PropTypes.any.isRequired,

    // Whether the checkbox should be checked or not
    checked: PropTypes.bool.isRequired,

    // checkbox onChange callback
    onChange: PropTypes.func.isRequired,
};
