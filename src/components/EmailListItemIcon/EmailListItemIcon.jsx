import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    content: PropTypes.any,
    isVisible: PropTypes.bool.isRequired
};

const defaultProps = {
    content: null
};

class EmailListItemIcon extends Component {

	render() {
		return (
            <div className={this.getClassName()}>
            {(this.props.isVisible) ? this.props.content : null}
            </div>
		);
    }

    /**
     * Gets the class name(s) for this component.
     * @returns {string} The class name(s).
     */
    getClassName() {
        let className = 'EmailListItemIcon';

        if (this.props.isVisible) {
            className += ' EmailListItemIcon--visible';
        }

        return className;
    }

}

EmailListItemIcon.propTypes = propTypes;
EmailListItemIcon.defaultProps = defaultProps;

export default EmailListItemIcon;