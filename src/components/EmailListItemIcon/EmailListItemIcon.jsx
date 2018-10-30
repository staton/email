import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    content: PropTypes.any,
    isVisible: PropTypes.bool,
    onClick: PropTypes.func
};

const defaultProps = {
    content: null,
    isVisible: true,
    onClick: () => {}
};

class EmailListItemIcon extends Component {

    constructor() {
        super();

        this.handleClicked = this.handleClicked.bind(this);
    }

	render() {
		return (
            <div 
                className={this.getClassName()}
                onClick={this.handleClicked}
            >
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

    /**
     * Called when the user clicks the email list item icon.
     * @param {object} e The event.
     */
    handleClicked(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.onClick();
    }

}

EmailListItemIcon.propTypes = propTypes;
EmailListItemIcon.defaultProps = defaultProps;

export default EmailListItemIcon;