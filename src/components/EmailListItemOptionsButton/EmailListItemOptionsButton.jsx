import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    className: PropTypes.string,
    content: PropTypes.any,
    onClick: PropTypes.func
};

const defaultProps = {
    className: null,
    content: null,
    onClick: () => {}
};

class EmailListItemOptionsButton extends Component {

	render() {
		return (
            <button
                className={this.getClassName()}
                onClick={this.props.onClick}
            >
                {this.props.content}
            </button>
		);
    }

    /**
     * Gets the class name(s) for this component.
     * @returns {string} The class name(s).
     */
    getClassName() {
        let className = 'EmailListItemOptionsButton';

        if (this.props.className) {
            className += ' ' + this.props.className;
        }

        return className;
    }

}

EmailListItemOptionsButton.propTypes = propTypes;
EmailListItemOptionsButton.defaultProps = defaultProps;

export default EmailListItemOptionsButton;