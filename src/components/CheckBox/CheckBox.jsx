import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {MdCheckBoxOutlineBlank, MdCheckBox} from 'react-icons/md';

const propTypes = {
    isChecked: PropTypes.bool,
    onClick: PropTypes.func
};

const defaultProps = {
    isChecked: false,
    onClick: () => {}
};

class CheckBox extends Component {

    constructor() {
        super();

        this.handleClicked = this.handleClicked.bind(this);
    }
	render() {
		return (
            <div 
                className={this.getClassName()}
                onClick={this.handleClicked}>
            {
                (this.props.isChecked) 
                ?   <MdCheckBox /> 
                :   <MdCheckBoxOutlineBlank />
            }
            </div>
		);
    }

    /**
     * Gets the class name(s) for this component.
     * @returns {string} The class name(s).
     */
    getClassName() {
        let className = 'CheckBox';

        if (this.props.isChecked) {
            className += ' CheckBox--checked';
        }

        return className;
    }

    /**
     * Called when the checkbox is clicked.
     * @param {object} e The event.
     */
    handleClicked(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.onClick();
    }

}

CheckBox.propTypes = propTypes;
CheckBox.defaultProps = defaultProps;

export default CheckBox;